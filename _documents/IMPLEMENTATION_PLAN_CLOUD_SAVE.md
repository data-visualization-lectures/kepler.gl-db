# Kepler.gl Cloud Save Implementation Plan

This plan outlines the steps to integrate `api.dataviz.jp` cloud saving/loading functionality into the Kepler.gl Demo App, based on `CLOUD_SAVE_PLAN.md`.

## 1. Overview

We will implement a custom **Cloud Provider** (`DatavizProvider`) for Kepler.gl. This is the native way Kepler.gl handles different storage backends (like Dropbox, Carto).

**Architecture:**
- **Frontend**: Kepler.gl Demo App (`examples/demo-app`)
- **Cloud Provider**: `DatavizProvider` (TypeScript/JavaScript)
- **Backend**: `api.dataviz.jp` endpoints (as defined in `CLOUD_SAVE_PLAN.md`)
- **Storage**: Supabase (via Backend API)

## 2. Implementation Steps

### Step 1: Auth Integration (Shared Headers)

Since we cannot easily modify the build-time `index.html`, we will inject the required authentication scripts at runtime in the main application component.

**Target File**: `examples/demo-app/src/app.tsx` (or `main.js`)

**Action**:
- Add a `useEffect` hook (or similar logic) to dynamically load:
  1. `supabase.js` (Supabase Client)
  2. `dataviz-auth-client.js` (Shared Auth Logic)
- Ensure these scripts set `window.supabase` and handle the user session *before* the Cloud Provider attempts to use them.

### Step 2: Create Dataviz Cloud Provider

**Target Directory**: `examples/demo-app/src/cloud-providers/dataviz`
**Target File**: `dataviz-provider.js` (or `.ts`)

**Class Structure**:
`class DatavizProvider extends Provider`

**Methods to Implement**:
1.  **`constructor`**: Set name (`dataviz`), user-friendly name (`Dataviz Cloud`), and icon.
2.  **`hasPrivateStorage()`**: Return `true`.
3.  **`hasSharingUrl()`**: Return `false` (initially, unless we want public sharing).
4.  **`getAccessToken()`**:
    - Return `window.supabase.auth.session()?.access_token`.
    - If not logged in, return `null`.
5.  **`login()`**:
    - Trigger the login flow via `dataviz-auth-client` (or simply check session if the shared header handles the UI).
    - Return user info (`email`, `id`).
6.  **`listMaps()`**:
    - **API**: `GET https://api.dataviz.jp/api/projects?app=keplergl`
    - **Headers**: `Authorization: Bearer <token>`
    - **Response Mapping**: Convert API response to Kepler.gl `MapListItem` format.
7.  **`uploadMap({ mapData, options })`**:
    - **API**: `POST https://api.dataviz.jp/api/projects`
    - **Body**:
        ```json
        {
          "name": mapData.map.info.title,
          "app_name": "keplergl",
          "data": mapData.map,
          "thumbnail": mapData.thumbnail (blob/base64)
        }
        ```
    - **Logic**: Handle overwriting (if supported by API) or creating new.
8.  **`downloadMap(loadParams)`**:
    - **API**: `GET https://api.dataviz.jp/api/projects/:id`
    - **Response**: Return `{ map: response.data, format: 'keplergl' }`.

### Step 3: Register Provider

**Target File**: `examples/demo-app/src/cloud-providers/index.js`

**Action**:
- Import `DatavizProvider`.
- Add `new DatavizProvider()` to the `CLOUD_PROVIDERS` array.
- (Optional) Set it as `DEFAULT_CLOUD_PROVIDER`.

### Step 4: Verification

1.  **Login**: Verify the "Login" button in the Cloud Storage modal works and detects the Supabase session.
2.  **Save**: Create a map, click "Share" -> "Export Map" -> "Cloud Storage". Select "Dataviz Cloud" and save. Verify data appears in Supabase (via API response).
3.  **Load**: Refresh, go to Cloud Storage, verify the list of maps appears. Click to load and verify the map restores correctly.

## 3. Data Compatibility Notes

- `app_name`: We will use `"keplergl"` to distinguish these files from RawGraphs files in the common `projects` table.
- **Thumbnail**: Kepler.gl generates a thumbnail blob. We need to decide if we upload this to `api.dataviz.jp` (which might need to handle it) or just ignore it for the first pass. The `CLOUD_SAVE_PLAN.md` focuses on the JSON `data`, but `projects` table allows extra extensions. We might need to base64 encode it if the API expects a single JSON payload.

## 4. Work Order

1.  **Inject Auth Scripts** (`examples/demo-app/src/app.tsx`)
2.  **Implement Provider Class** (`examples/demo-app/src/cloud-providers/dataviz/dataviz-provider.js`)
3.  **Register Provider** (`examples/demo-app/src/cloud-providers/index.js`)
4.  **Test & Refine**
