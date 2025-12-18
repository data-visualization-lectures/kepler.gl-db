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
        while (!Window.supabase && retries < 25) {
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

        // Ensure Supabase is loaded
        await this._waitForSupabase();

        // 1. Auth & Config
        const globalAuthClient = window.supabase;
        if (!globalAuthClient || !globalAuthClient.auth) {
            throw new Error('Auth client not found. Please reload.');
        }

        const { data: { session }, error: sessionError } = await globalAuthClient.auth.getSession();
        if (sessionError || !session || !session.user) {
            throw new Error('Please log in.');
        }

        const FALLBACK_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlYmhvZWlsdHhzcHN1cnFveHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNTY4MjMsImV4cCI6MjA4MDYzMjgyM30.5uf-D07Hb0JxL39X9yQ20P-5gFc1CRMdKWhDySrNZ0E";
        const supabaseUrl = globalAuthClient.supabaseUrl || "https://vebhoeiltxspsurqoxvl.supabase.co";
        // Force use of FALLBACK_KEY for consistency
        let supabaseKey = FALLBACK_KEY;
        if (supabaseKey) supabaseKey = supabaseKey.trim();

        const accessToken = session.access_token;
        const BUCKET_NAME = 'user_projects';

        // 2. Get Metadata from DB
        // Using 'apikey' in Header + Authorization Header (same as uploadMap success pattern)
        const dbEndpoint = `${supabaseUrl}/rest/v1/projects?id=eq.${id}&select=*`;
        const dbResponse = await fetch(dbEndpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'apikey': supabaseKey,
                'Content-Type': 'application/json'
            }
        });

        if (!dbResponse.ok) {
            const errorText = await dbResponse.text();
            throw new Error(`Failed to fetch project metadata: ${dbResponse.status} ${errorText}`);
        }

        const projects = await dbResponse.json();
        if (!projects || projects.length === 0) {
            throw new Error('Project not found');
        }
        const project = projects[0];

        // 3. Download JSON from Storage
        // storage_path is like "userid/uuid.json"
        if (!project.storage_path) {
            throw new Error('Project has no storage path');
        }

        const storageEndpoint = `${supabaseUrl}/storage/v1/object/${BUCKET_NAME}/${project.storage_path}`;
        const jsonResponse = await fetch(storageEndpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'apikey': supabaseKey
            }
        });

        if (!jsonResponse.ok) {
            const errorText = await jsonResponse.text();
            throw new Error(`Failed to download map properties: ${jsonResponse.status} ${errorText}`);
        }

        const mapData = await jsonResponse.json();

        // Inject metadata into the map configuration
        if (!mapData.info) {
            mapData.info = {};
        }
        mapData.info.id = id;
        mapData.info.title = project.name;
        mapData.info.description = project.description;
        // Inject ownership info to ensure Kepler.gl allows overwrite
        mapData.info.userId = project.user_id;
        mapData.info.owner = project.user_id;

        return {
            map: mapData,
            format: 'keplergl'
        };
    }

    async uploadMap({ mapData, options = {} }) {
        // Direct Supabase implementation modeled after cloudApi.js from rawgraphs-app-db

        // 1. Get Supabase Config & Session
        const globalAuthClient = window.supabase;
        if (!globalAuthClient || !globalAuthClient.auth) {
            throw new Error('Auth client not found. Please reload.');
        }

        const { data: { session }, error: sessionError } = await globalAuthClient.auth.getSession();
        if (sessionError || !session || !session.user) {
            throw new Error('Please log in.');
        }

        // Fallback key from RawGraphs implementation just in case window.supabase.supabaseKey is missing
        const FALLBACK_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlYmhvZWlsdHhzcHN1cnFveHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNTY4MjMsImV4cCI6MjA4MDYzMjgyM30.5uf-D07Hb0JxL39X9yQ20P-5gFc1CRMdKWhDySrNZ0E";

        const supabaseUrl = globalAuthClient.supabaseUrl || "https://vebhoeiltxspsurqoxvl.supabase.co";
        // Force use of FALLBACK_KEY (Source of Truth from RawGraphs .env)
        // The key in globalAuthClient.supabaseKey (suffix ...c4) is INVALID for REST API.
        let supabaseKey = FALLBACK_KEY;

        // Trim key to remove any potential accidental whitespace/newline
        if (supabaseKey) supabaseKey = supabaseKey.trim();

        const accessToken = session.access_token;
        const user = session.user;

        if (!supabaseKey) {
            throw new Error('Supabase API Key is missing');
        }

        const BUCKET_NAME = 'user_projects';
        const APP_NAME = 'kepler-gl'; // Use specific app name

        // 2. Prepare Data
        const { isPublic } = options;
        const { map, thumbnail } = mapData;
        const name = (map.info && map.info.title) || 'Untitled Map';
        const thumbnailBlob = thumbnail || options.thumbnail;

        // Determine ID: Use existing if overwriting, otherwise generate new
        let id = map.info && map.info.id;
        if (!options.overwrite || !id) {
            id = crypto.randomUUID();
        }

        const now = new Date().toISOString();
        const jsonFilePath = `${user.id}/${id}.json`;
        const thumbFilePath = `${user.id}/${id}.png`;

        // 3. Upload JSON to Storage
        // STRATEGY CHANGE: Explicitly delete then upload to avoid 400 errors on upsert
        console.log('[DatavizProvider] Overwrite strategy: Removing existing file first...', jsonFilePath);

        // 3a. Try to remove existing file (ignore error if not exists)
        await globalAuthClient.storage
            .from(BUCKET_NAME)
            .remove([jsonFilePath])
            .catch(err => console.warn('[DatavizProvider] Remove failed (non-fatal):', err));

        // 3b. Upload new file (upsert: false because we deleted it)
        console.log('[DatavizProvider] Uploading new JSON...');
        const { data: uploadData, error: jsonError } = await globalAuthClient.storage
            .from(BUCKET_NAME)
            .upload(jsonFilePath, JSON.stringify(map), {
                contentType: 'application/json',
                upsert: false
            });

        if (jsonError) {
            console.error('[DatavizProvider] JSON Upload Error Details:', {
                message: jsonError.message,
                statusCode: jsonError.statusCode,
                error: jsonError.error,
                fullObj: jsonError
            });
            throw new Error(`Failed to upload map data: ${jsonError.message}`);
        }
        console.log('[DatavizProvider] JSON Upload Success:', uploadData);

        // 4. Upload Thumbnail to Storage (if provided)
        if (thumbnailBlob) {
            // 4a. Remove existing thumbnail
            await globalAuthClient.storage
                .from(BUCKET_NAME)
                .remove([thumbFilePath])
                .catch(() => { });

            // 4b. Upload new thumbnail
            await globalAuthClient.storage
                .from(BUCKET_NAME)
                .upload(thumbFilePath, thumbnailBlob, {
                    contentType: 'image/png',
                    upsert: false
                });
            // Ignore thumbnail upload errors (non-fatal)
        }

        if (jsonError) {
            console.error('[DatavizProvider] JSON Upload Error Details:', {
                message: jsonError.message,
                statusCode: jsonError.statusCode,
                error: jsonError.error,
                fullObj: jsonError
            });
            throw new Error(`Failed to upload map data: ${jsonError.message}`);
        }
        console.log('[DatavizProvider] JSON Upload Success:', uploadData);

        // 4. Upload Thumbnail to Storage (if provided)
        if (thumbnailBlob) {
            await globalAuthClient.storage
                .from(BUCKET_NAME)
                .upload(thumbFilePath, thumbnailBlob, {
                    contentType: 'image/png',
                    upsert: true
                });
            // Ignore thumbnail upload errors (non-fatal)
        }

        // 5. Insert Metadata into DB
        const payload = {
            id,
            user_id: user.id,
            name,
            storage_path: jsonFilePath,
            thumbnail_path: thumbnailBlob ? thumbFilePath : null,
            app_name: APP_NAME,
            created_at: now,
            updated_at: now
        };

        const dbEndpoint = `${supabaseUrl}/rest/v1/projects`;

        const dbResponse = await fetch(dbEndpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`, // Keep this!
                'Content-Type': 'application/json',
                'Prefer': 'resolution=merge-duplicates,return=representation',
                'apikey': supabaseKey
            },
            body: JSON.stringify(payload)
        });

        if (!dbResponse.ok) {
            const errorText = await dbResponse.text();
            throw new Error(`Failed to save project metadata: ${dbResponse.status} ${errorText}`);
        }

        const resultData = await dbResponse.json();
        const savedProject = resultData && resultData.length > 0 ? resultData[0] : { id };

        return {
            id: savedProject.id,
            // shareUrl: ... (not implemented)
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
