// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import { Provider } from '@kepler.gl/cloud-providers';
import DatavizIcon from './dataviz-icon';
import Window from 'global/window';

const NAME = 'dataviz';
const DISPLAY_NAME = 'Dataviz Cloud';
const API_URL = '/api/dataviz';

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
        if (Window.supabase?.auth?.getSession) {
            // Supabase v2
            const { data } = await Window.supabase.auth.getSession();
            return data.session?.access_token || null;
        }
        if (Window.supabase?.auth?.session) {
            // Supabase v1
            return Window.supabase.auth.session()?.access_token || null;
        }
        return null;
    }

    async getUser() {
        if (Window.supabase?.auth?.getSession) {
            // Supabase v2
            // Use getSession() instead of getUser() to rely on the local session
            // managed by the shared auth client.
            const { data } = await Window.supabase.auth.getSession();
            const user = data.session?.user;
            if (user) {
                return {
                    name: user.email,
                    email: user.email,
                    id: user.id
                };
            }
        } else if (Window.supabase?.auth?.user) {
            // Supabase v1 (auth.user() returns the user from local session)
            const user = Window.supabase.auth.user();
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
        while (!Window.supabase && retries < 10) {
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
            loadParams: {
                id: p.id
            }
        }));
    }

    async downloadMap(loadParams) {
        const { id } = loadParams;
        const token = await this.getAccessToken();
        if (!token) {
            throw new Error('Not logged in');
        }

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
        const token = await this.getAccessToken();
        if (!token) {
            throw new Error('Not logged in');
        }

        const { isPublic } = options;
        const { map, thumbnail } = mapData;
        const name = (map.info && map.info.title) || 'Untitled Map';

        // We only support creating new maps or overwriting if the API supports it.
        // Our API spec says POST /api/projects creates new.
        // Updating existing not explicitly detailed in '2. プロジェクト新規保存', 
        // but typically we might want to update if ID exists.
        // For now, following the spec strictly: POST to create new.
        // If we want to update, we might need a PUT endpoint or check if ID exists in map info.

        // NOTE: The current plan describes POST /api/projects for "新規保存".
        // If we want to overwrite, we would need to implement that in the backend.
        // For this MVP, every save might create a new project unless we enhance the API.
        // However, to be safe and simple, we will just POST as a new project for now.

        let thumbnailBase64 = null;
        if (thumbnail) {
            console.log('DatavizProvider: Thumbnail Blob found', thumbnail.size);
            const dataUrl = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(thumbnail);
            });
            // Remove Data-URI prefix if present (api likely expects pure base64 or handles it, trying pure base64)
            thumbnailBase64 = dataUrl.split(',')[1];
            console.log('DatavizProvider: Thumbnail Base64 length', thumbnailBase64.length);
        } else {
            console.warn('DatavizProvider: No thumbnail blob in mapData');
        }

        const body = {
            name,
            app_name: 'keplergl',
            data: map,
            thumbnail: thumbnailBase64
        };

        const response = await fetch(`${API_URL}/projects`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Dataviz Cloud Upload Error:', errorText);
            throw new Error(`Failed to upload map: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const result = await response.json();

        // Result should contain the ID of the new project
        return {
            id: result.id,
            // We don't have a direct share URL yet
        };
    }

    getManagementUrl() {
        return 'https://auth.dataviz.jp/';
    }
}
