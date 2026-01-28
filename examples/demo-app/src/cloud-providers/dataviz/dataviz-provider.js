// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import { Provider } from '@kepler.gl/cloud-providers';
import DatavizIcon from './dataviz-icon';
import Window from 'global/window';

const NAME = 'dataviz';
const DISPLAY_NAME = 'Dataviz Cloud';

// Use dynamic API URL from the auth client if available
function getApiUrl() {
    if (Window.datavizApiUrl) {
        return `${Window.datavizApiUrl}/api`;
    }
    return '/api/dataviz';
}

// Module-level cache to persist ID across provider re-instantiations
let cachedProjectId = null;

/**
 * Convert Blob to Base64 Data URI with resizing
 * @param {Blob} blob - The blob to convert
 * @param {number} maxWidth - Maximum width (default 300)
 * @param {number} maxHeight - Maximum height (default 300)
 * @returns {Promise<string>} Base64 Data URI string
 */
function blobToDataURI(blob, maxWidth = 300, maxHeight = 300) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                // Calculate new dimensions
                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round((width * maxHeight) / height);
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // Export as JPEG with 0.7 quality to reduce size further
                const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                resolve(dataUrl);
            };
            img.onerror = reject;
            img.src = readerEvent.target.result;
        };
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

    /**
     * Clear the cached project ID (useful when creating a new project)
     */
    clearProjectCache() {
        cachedProjectId = null;
        console.log('[DatavizProvider] Cleared project cache');
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
            console.error('[DatavizProvider] Cannot list maps: Not logged in');
            throw new Error('Not logged in');
        }

        try {
            const response = await fetch(`${getApiUrl()}/projects?app=keplergl`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                let errorMessage = `Failed to list maps: ${response.status} ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    if (errorData.error) {
                        errorMessage += ` - ${errorData.error}`;
                        if (errorData.detail) {
                            errorMessage += `: ${errorData.detail}`;
                        }
                    }
                } catch (e) {
                    // JSON parsing failed, use status text
                }
                console.error('[DatavizProvider]', errorMessage);
                throw new Error(errorMessage);
            }

            const responseData = await response.json();
            console.log('[DatavizProvider] listMaps response:', responseData);

            let projects = [];
            if (Array.isArray(responseData)) {
                projects = responseData;
            } else if (responseData && Array.isArray(responseData.data)) {
                projects = responseData.data;
            } else if (responseData && Array.isArray(responseData.projects)) {
                projects = responseData.projects;
            } else {
                console.warn('[DatavizProvider] Unexpected response format for listMaps:', responseData);
                // Fallback to empty array to avoid crash
                projects = [];
            }

            // Map to Kepler.gl MapListItem format
            const mapList = projects.map(p => ({
                id: p.id,
                title: p.name,
                description: p.app_name,
                updatedAt: new Date(p.updated_at).getTime(),
                privateMap: true,
                // Use imageUrl instead of thumbnail for Kepler.gl compatibility
                imageUrl: p.thumbnail_path ? `${getApiUrl()}/projects/${p.id}/thumbnail` : null,
                loadParams: {
                    id: p.id
                }
            }));

            console.log(`[DatavizProvider] Listed ${mapList.length} maps`);
            return mapList;
        } catch (error) {
            console.error('[DatavizProvider] Error listing maps:', error);
            throw error;
        }
    }

    async downloadMap(loadParams) {
        let { id } = loadParams;

        // Update cache if valid ID provided
        if (id && id !== 'undefined') {
            cachedProjectId = id;
            console.log('[DatavizProvider] Cached project ID:', id);
        }
        // Fallback to cache if ID missing
        else if (cachedProjectId) {
            id = cachedProjectId;
            console.log('[DatavizProvider] Using cached project ID:', id);
        }

        if (!id || id === 'undefined') {
            console.warn('[DatavizProvider] No project ID available, returning empty map');
            // If we really don't have an ID, return empty to avoid crash,
            // but likely the Save button will be disabled.
            return { map: {}, format: 'keplergl' };
        }

        // Get access token
        const token = await this.getAccessToken();
        if (!token) {
            console.error('[DatavizProvider] Cannot download map: Not logged in');
            throw new Error('Not logged in');
        }

        try {
            // Fetch project data from API
            const response = await fetch(`${getApiUrl()}/projects/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                let errorMessage = `Failed to download map: ${response.status} ${response.statusText}`;
                if (response.status === 404) {
                    errorMessage = `Project not found (ID: ${id}). It may have been deleted.`;
                } else {
                    try {
                        const errorData = await response.json();
                        if (errorData.error) {
                            errorMessage += ` - ${errorData.error}`;
                            if (errorData.detail) {
                                errorMessage += `: ${errorData.detail}`;
                            }
                        }
                    } catch (e) {
                        // JSON parsing failed, use status text
                    }
                }
                console.error('[DatavizProvider]', errorMessage);
                throw new Error(errorMessage);
            }

            const mapData = await response.json();
            console.log('[DatavizProvider] Successfully downloaded map:', id);

            return {
                map: mapData,
                format: 'keplergl'
            };
        } catch (error) {
            console.error('[DatavizProvider] Error downloading map:', error);
            throw error;
        }
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

        // Determine if we should update an existing project
        const shouldUpdate = options.overwrite && cachedProjectId && cachedProjectId !== 'undefined';

        let url, method;
        if (shouldUpdate) {
            // Update existing project
            url = `${getApiUrl()}/projects/${cachedProjectId}`;
            method = 'PUT';
            console.log('[DatavizProvider] Updating existing project:', cachedProjectId);
        } else {
            // Create new project
            url = `${getApiUrl()}/projects`;
            method = 'POST';
            console.log('[DatavizProvider] Creating new project');
        }

        console.log(`[DatavizProvider] Target URL: ${url}`);
        console.log(`[DatavizProvider] Request keys: ${Object.keys(requestBody).join(', ')}`);
        if (requestBody.thumbnail) {
            console.log(`[DatavizProvider] Thumbnail size: ${requestBody.thumbnail.length} chars`);
        }

        // Send to API
        let payloadString = JSON.stringify(requestBody);
        console.log(`[DatavizProvider] Uploading project (Payload size: ${(payloadString.length / 1024 / 1024).toFixed(2)} MB)`);

        let response = await fetch(url, {
            method,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: payloadString
        });

        // Retry without thumbnail if 413 Payload Too Large
        if (response.status === 413 && requestBody.thumbnail) {
            console.warn('[DatavizProvider] 413 Error. Retrying without thumbnail...');
            delete requestBody.thumbnail;
            payloadString = JSON.stringify(requestBody);
            console.log(`[DatavizProvider] Retry Payload size: ${(payloadString.length / 1024 / 1024).toFixed(2)} MB`);

            response = await fetch(url, {
                method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: payloadString
            });
        }

        if (!response.ok) {
            let errorMessage = `Failed to ${shouldUpdate ? 'update' : 'save'} project: ${response.status}`;

            if (response.status === 413) {
                errorMessage = `The map data is too large to save (exceeds server limit). Please reduce the dataset size or number of layers.`;
            } else {
                try {
                    const errorData = await response.json();
                    console.error('[DatavizProvider] Error response JSON:', errorData); // Log full error object
                    if (errorData.error) {
                        errorMessage += ` - ${errorData.error}`;
                        if (errorData.detail) {
                            errorMessage += `: ${errorData.detail}`;
                        } else if (errorData.message) {
                            errorMessage += `: ${errorData.message}`;
                        }
                    }
                } catch (e) {
                    console.warn('[DatavizProvider] Failed to parse error JSON', e);
                    // If JSON parsing fails, try to get text
                    const errorText = await response.text();
                    if (errorText) {
                        errorMessage += ` - ${errorText.substring(0, 200)}`; // Limit length
                    }
                }
            }
            console.error('[DatavizProvider]', errorMessage);
            throw new Error(errorMessage);
        }

        const result = await response.json();
        const project = result.project || result;

        // Update cache with the project ID
        cachedProjectId = project.id;

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
