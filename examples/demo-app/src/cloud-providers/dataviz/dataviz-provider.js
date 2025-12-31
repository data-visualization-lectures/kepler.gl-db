// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import { Provider } from '@kepler.gl/cloud-providers';
import DatavizIcon from './dataviz-icon';
import Window from 'global/window';

const NAME = 'dataviz';
const DISPLAY_NAME = 'Dataviz Cloud';
const API_URL = '/api/dataviz';

// Module-level cache to persist ID across provider re-instantiations
let cachedProjectId = null;

/**
 * Convert Blob to Base64 Data URI
 * @param {Blob} blob - The blob to convert
 * @returns {Promise<string>} Base64 Data URI string
 */
function blobToDataURI(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

export default class DatavizProvider extends Provider {
    constructor() {
        super({ name: NAME, displayName: DISPLAY_NAME, icon: DatavizIcon });
    }

    /**
     * Whether this provider support upload map to a private storage.
     */
    hasPrivateStorage() {
        return true;
    }

    /**
     * Whether this provider support share map via a public url
     */
    hasSharingUrl() {
        return false;
    }

    async getAccessToken() {
        if (Window.datavizSupabase?.auth?.getSession) {
            // Supabase v2
            const { data } = await Window.datavizSupabase.auth.getSession();
            return data.session?.access_token || null;
        }
        if (Window.datavizSupabase?.auth?.session) {
            // Supabase v1
            return Window.datavizSupabase.auth.session()?.access_token || null;
        }
        return null;
    }

    async getUser() {
        if (Window.datavizSupabase?.auth?.getSession) {
            // Supabase v2
            // Use getSession() instead of getUser() to rely on the local session
            // managed by the shared auth client.
            const { data } = await Window.datavizSupabase.auth.getSession();
            const user = data.session?.user;
            if (user) {
                return {
                    name: user.email,
                    email: user.email,
                    id: user.id
                };
            }
        } else if (Window.datavizSupabase?.auth?.user) {
            // Supabase v1 (auth.user() returns the user from local session)
            const user = Window.datavizSupabase.auth.user();
            if (user) {
                return {
                    name: user.email,
                    email: user.email,
                    id: user.id
                };
            }
        }
        return null;
    }

    async _waitForSupabase() {
        let retries = 0;
        while (!Window.datavizSupabase && retries < 25) {
            await new Promise(resolve => setTimeout(resolve, 200));
            retries++;
        }
    }

    async login() {
        // Ensure Supabase client is initialized before checking user
        await this._waitForSupabase();

        const user = await this.getUser();
        if (user) {
            return user;
        }

        // If explicitly not logged in after check, prompt user.
        return Promise.reject(new Error('Please log in using the top bar.'));
    }

    async listMaps() {
        const token = await this.getAccessToken();
        if (!token) {
            throw new Error('Not logged in');
        }

        const response = await fetch(`${API_URL}/projects?app=keplergl`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            // Handle error (e.g., 403 Forbidden)
            throw new Error(`Failed to list maps: ${response.statusText}`);
        }

        const projects = await response.json();

        // Map to Kepler.gl MapListItem format
        return projects.map(p => ({
            id: p.id,
            title: p.name,
            description: p.app_name, // or any description if available
            updatedAt: new Date(p.updated_at).getTime(),
            privateMap: true,
            // Add thumbnail URL if thumbnail_path exists
            thumbnail: p.thumbnail_path ? `${API_URL}/projects/${p.id}/thumbnail` : null,
            loadParams: {
                id: p.id
            }
        }));
    }

    async downloadMap(loadParams) {
        let { id } = loadParams;

        // Update cache if valid ID provided
        if (id && id !== 'undefined') {
            cachedProjectId = id;
        }
        // Fallback to cache if ID missing
        else if (cachedProjectId) {
            id = cachedProjectId;
        }

        if (!id || id === 'undefined') {
            // If we really don't have an ID, return empty to avoid crash,
            // but likely the Save button will be disabled.
            return { map: {}, format: 'keplergl' };
        }

        // Get access token
        const token = await this.getAccessToken();
        if (!token) {
            throw new Error('Not logged in');
        }

        // Fetch project data from API
        const response = await fetch(`${API_URL}/projects/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to download map: ${response.statusText}`);
        }

        const mapData = await response.json();

        return {
            map: mapData,
            format: 'keplergl'
        };
    }

    async uploadMap({ mapData, options = {} }) {
        // Get access token
        const token = await this.getAccessToken();
        if (!token) {
            throw new Error('Not logged in');
        }

        // Prepare data
        const { map, thumbnail } = mapData;
        const name = (map.info && map.info.title) || 'Untitled Map';
        const thumbnailBlob = thumbnail || options.thumbnail;

        // Convert thumbnail Blob to Base64 Data URI if provided
        let thumbnailDataURI = null;
        if (thumbnailBlob) {
            try {
                thumbnailDataURI = await blobToDataURI(thumbnailBlob);
            } catch (error) {
                console.warn('[DatavizProvider] Failed to convert thumbnail:', error);
                // Continue without thumbnail
            }
        }

        // Prepare request body according to API specification
        const requestBody = {
            name,
            app_name: 'keplergl',
            data: map
        };

        // Add thumbnail if available
        if (thumbnailDataURI) {
            requestBody.thumbnail = thumbnailDataURI;
        }

        // Send to API
        const response = await fetch(`${API_URL}/projects`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to save project: ${response.status} ${errorText}`);
        }

        const result = await response.json();
        const project = result.project || result;

        console.log('[DatavizProvider] Project saved successfully:', project.id);

        return {
            id: project.id
            // shareUrl not implemented
        };
    }

    getMapUrl(loadParams) {
        return loadParams ? loadParams.id : '';
    }

    getShareUrl(fullUrl = true) {
        return '';
    }

    getManagementUrl() {
        return 'https://auth.dataviz.jp/';
    }
}
