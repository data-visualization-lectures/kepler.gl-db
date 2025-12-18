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

        // Use native crypto.randomUUID()
        const id = crypto.randomUUID();
        const now = new Date().toISOString();
        const jsonFilePath = `${user.id}/${id}.json`;
        const thumbFilePath = `${user.id}/${id}.png`;

        // 3. Upload JSON to Storage
        const jsonStorageEndpoint = `${supabaseUrl}/storage/v1/object/${BUCKET_NAME}/${jsonFilePath}`;

        // Note: Using fetch directly to have fine control, similar to cloudApi.js reference
        const jsonResponse = await fetch(jsonStorageEndpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'x-upsert': 'true',
                'apikey': supabaseKey
            },
            body: JSON.stringify(map)
        });

        if (!jsonResponse.ok) {
            const errorText = await jsonResponse.text();
            throw new Error(`Failed to upload map data: ${jsonResponse.status} ${errorText}`);
        }

        // 4. Upload Thumbnail to Storage (if provided)
        if (thumbnailBlob) {
            const thumbStorageEndpoint = `${supabaseUrl}/storage/v1/object/${BUCKET_NAME}/${thumbFilePath}`;
            await fetch(thumbStorageEndpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'image/png',
                    'x-upsert': 'true',
                    'apikey': supabaseKey
                },
                body: thumbnailBlob
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

    getManagementUrl() {
        return 'https://auth.dataviz.jp/';
    }
}
