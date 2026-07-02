// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import { Provider } from '@kepler.gl/cloud-providers';
import DatavizIcon from './dataviz-icon';
import Window from 'global/window';
import { getAppMessage } from '../../constants/localization';

const NAME = 'dataviz';
const DISPLAY_NAME = 'Dataviz Cloud';
const SUPABASE_URL = 'https://vebhoeiltxspsurqoxvl.supabase.co';
const SHARE_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/publish-kepler-gl-share`;
const SHARE_ROUTE_PREFIX = '/shares/';

// Use dynamic API URL from the auth client if available
function getApiUrl() {
    if (Window.datavizApiUrl) {
        return `${Window.datavizApiUrl}/api`;
    }
    return 'https://api.dataviz.jp/api';
}

// Module-level cache to persist ID across provider re-instantiations
let cachedProjectId = null;
let cachedShareId = null;
let cachedShareUrl = '';

function buildSharePath(shareId) {
    return `${SHARE_ROUTE_PREFIX}${encodeURIComponent(shareId)}`;
}

function buildShareUrl(shareId, fullUrl = true) {
    const path = buildSharePath(shareId);
    return fullUrl ? `${Window.location.origin}${path}` : path;
}

function showToast(message, type = 'success', duration) {
    const toolHeader = getToolHeader();
    if (toolHeader && toolHeader.showMessage) {
        toolHeader.showMessage(message, type, duration);
    }
}

function getToolHeader() {
    return document.querySelector('dataviz-tool-header');
}

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
        return true;
    }

    /**
     * Clear the cached project ID (useful when creating a new project)
     */
    clearProjectCache() {
        cachedProjectId = null;
        cachedShareId = null;
        cachedShareUrl = '';
        console.log('[DatavizProvider] Cleared project cache');
    }

    /**
     * Get the currently cached project ID
     */
    getCurrentProjectId() {
        console.log('[DatavizProvider] getCurrentProjectId returning:', cachedProjectId);
        return cachedProjectId;
    }

    setCurrentProjectId(projectId) {
        cachedProjectId = projectId && projectId !== 'undefined' ? String(projectId) : null;
        console.log('[DatavizProvider] setCurrentProjectId:', cachedProjectId);
    }

    getCurrentShareId() {
        return cachedShareId;
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
            const response = await fetch(`${getApiUrl()}/projects?app=kepler-gl`, {
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

            const projects = Array.isArray(responseData?.projects) ? responseData.projects : [];
            if (!Array.isArray(responseData?.projects)) {
                console.warn('[DatavizProvider] Unexpected response format for listMaps:', responseData);
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
        // Wait for Supabase client to be initialized (timing issue on fresh page load)
        await this._waitForSupabase();

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
            return { map: {}, format: 'keplergl' };
        }

        // Get access token
        const token = await this.getAccessToken();
        if (!token) {
            console.error('[DatavizProvider] Cannot download map: Not logged in');
            throw new Error('Not logged in');
        }

        showToast(getAppMessage('processing.projectLoad'), 'info', 5000);

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
                showToast(getAppMessage('toast.projectLoadFailed'), 'error');
                throw new Error(errorMessage);
            }

            const mapData = await response.json();
            console.log('[DatavizProvider] Successfully downloaded map:', id);
            showToast(getAppMessage('toast.projectLoaded'), 'success');

            return {
                map: mapData,
                format: 'keplergl'
            };
        } catch (error) {
            console.error('[DatavizProvider] Error downloading map:', error);
            showToast(getAppMessage('toast.projectLoadFailed'), 'error');
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
        const isPublic = Boolean(options.isPublic);

        // Convert thumbnail Blob to Base64 Data URI if provided
        let thumbnailDataURI = null;
        if (thumbnailBlob) {
            try {
                thumbnailDataURI = await blobToDataURI(thumbnailBlob);
            } catch (error) {
                console.warn('[DatavizProvider] Failed to convert thumbnail:', error);
            }
        }

        // Determine if we should update an existing project
        const shouldUpdate = Boolean(
            cachedProjectId &&
                cachedProjectId !== 'undefined' &&
                (isPublic || options.overwrite)
        );

        let projectSaved = false;

        try {
            const result = await this._saveViaToolHeader(name, map, thumbnailDataURI, shouldUpdate);
            const savedProject = this._normalizeSavedProject(result);
            const projectId = savedProject.id || (shouldUpdate ? cachedProjectId : null);
            if (!projectId) {
                throw new Error('Saved project id is unavailable');
            }
            cachedProjectId = projectId;
            projectSaved = true;

            if (isPublic) {
                showToast(getAppMessage('processing.share'), 'info', 5000);
                const shareResult = await this._publishShare(token, projectId, name);

                cachedShareId = shareResult?.shareId || shareResult?.id || null;
                cachedShareUrl = shareResult?.shareUrl || (cachedShareId ? buildShareUrl(cachedShareId, true) : '');

                if (!cachedShareId || !cachedShareUrl) {
                    throw new Error('Share URL was not returned');
                }

                showToast(getAppMessage('toast.shareUpdated'), 'success');
                return {
                    id: cachedShareId,
                    shareId: cachedShareId,
                    shareUrl: cachedShareUrl,
                    sourceProjectId: projectId,
                    info: {
                        id: projectId
                    }
                };
            }

            return { id: projectId, project: savedProject.project };
        } catch (error) {
            if (isPublic && projectSaved) {
                showToast(getAppMessage('toast.shareUpdateFailed'), 'error');
            }
            throw error;
        }
    }

    async _publishShare(token, projectId, fallbackTitle) {
        const response = await fetch(SHARE_FUNCTION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Dataviz-Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                projectId,
                fallbackTitle
            })
        });

        const payload = await response.json().catch(() => null);
        if (!response.ok) {
            throw new Error(
                payload?.error?.message ||
                    payload?.error ||
                    payload?.message ||
                    `Share publish failed (${response.status})`
            );
        }

        return payload || {};
    }

    async _saveViaToolHeader(name, map, thumbnailDataURI, shouldUpdate) {
        const toolHeader = getToolHeader();
        if (!toolHeader || typeof toolHeader.saveProject !== 'function') {
            throw new Error('dataviz-tool-header saveProject is unavailable');
        }

        if (shouldUpdate && cachedProjectId && typeof toolHeader.setProjectContext === 'function') {
            toolHeader.setProjectContext({
                sourceType: 'owned-project',
                projectId: cachedProjectId,
                projectName: name,
                canOverwrite: true
            });
        } else if (!shouldUpdate && typeof toolHeader.clearProjectContext === 'function') {
            toolHeader.clearProjectContext();
        }

        return toolHeader.saveProject({
            name,
            data: map,
            thumbnailDataUri: thumbnailDataURI || null,
            existingProjectId: shouldUpdate ? cachedProjectId : null
        });
    }

    _normalizeSavedProject(result) {
        const project = result && typeof result.project === 'object' ? result.project : result;
        return {
            id: project?.id || result?.id || null,
            project: project && typeof project === 'object' ? project : { id: result?.id || null }
        };
    }


    getMapUrl(loadParams) {
        return loadParams ? loadParams.id : '';
    }

    getShareUrl(fullUrl = true) {
        if (cachedShareId) {
            return buildShareUrl(cachedShareId, fullUrl);
        }
        if (!cachedShareUrl) {
            return '';
        }
        if (fullUrl) {
            return cachedShareUrl;
        }
        try {
            return new URL(cachedShareUrl, Window.location.origin).pathname;
        } catch (_error) {
            return '';
        }
    }

    getManagementUrl() {
        return 'https://app.dataviz.jp/';
    }
}
