// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import { addDataToMap } from '@kepler.gl/actions';
import { processKeplerglJSON } from '@kepler.gl/processors';

export const DATAVIZ_PROVIDER_NAME = 'dataviz';
const SUPABASE_URL = 'https://vebhoeiltxspsurqoxvl.supabase.co';
const SHARE_METADATA_ENDPOINT = `${SUPABASE_URL}/functions/v1/get-kepler-gl-share`;
const AUTH_WAIT_TIMEOUT_MS = 6500;
const AUTH_WAIT_INTERVAL_MS = 250;

export class SharedMapLoadError extends Error {
  code?: string;
  status?: number;

  constructor(message: string, options: { code?: string; status?: number } = {}) {
    super(message);
    this.name = 'SharedMapLoadError';
    this.code = options.code;
    this.status = options.status;
  }
}

export function getToolHeader() {
  return document.querySelector('dataviz-tool-header') as any;
}

function getMetadataErrorCode(payload: any) {
  return typeof payload?.error?.code === 'string' ? payload.error.code : null;
}

function createSharedMapLoadError(payload: any, status: number) {
  const code = getMetadataErrorCode(payload);
  if (code === 'share_not_found' || status === 404) {
    return new SharedMapLoadError('Shared map not found.', {
      code: 'share_not_found',
      status
    });
  }

  return new SharedMapLoadError('Failed to load the shared map.', {
    code: code || 'public_share_load_failed',
    status
  });
}

async function readDatavizAccessToken() {
  const supabase = (window as any).datavizSupabase;
  if (!supabase?.auth) {
    return null;
  }

  try {
    if (typeof supabase.auth.getSession === 'function') {
      const { data } = await supabase.auth.getSession();
      return data?.session?.access_token || null;
    }

    if (typeof supabase.auth.session === 'function') {
      return supabase.auth.session()?.access_token || null;
    }
  } catch (_error) {
    return null;
  }

  return null;
}

async function waitForDatavizAccessToken(timeoutMs = AUTH_WAIT_TIMEOUT_MS) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    const accessToken = await readDatavizAccessToken();
    if (accessToken) {
      return accessToken;
    }
    await new Promise(resolve => setTimeout(resolve, AUTH_WAIT_INTERVAL_MS));
  }
  return null;
}

function isSavedProjectPayload(value: unknown): value is Record<string, any> {
  return Boolean(
    value &&
      typeof value === 'object' &&
      Array.isArray((value as Record<string, any>).datasets) &&
      (value as Record<string, any>).config &&
      typeof (value as Record<string, any>).config === 'object'
  );
}

function parseJsonString(value: unknown) {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  try {
    return JSON.parse(trimmed);
  } catch (_error) {
    return null;
  }
}

export function extractSavedProjectPayload(
  value: unknown,
  depth = 0
): Record<string, any> | null {
  if (depth > 5 || value == null) {
    return null;
  }

  if (isSavedProjectPayload(value)) {
    return value;
  }

  const parsedValue = parseJsonString(value);
  if (parsedValue) {
    return extractSavedProjectPayload(parsedValue, depth + 1);
  }

  if (typeof value !== 'object') {
    return null;
  }

  const record = value as Record<string, unknown>;
  const candidateKeys = [
    'data',
    'projectData',
    'project_data',
    'map',
    'payload',
    'content',
    'json',
    'value'
  ];

  for (const key of candidateKeys) {
    if (!(key in record)) {
      continue;
    }
    const extracted = extractSavedProjectPayload(record[key], depth + 1);
    if (extracted) {
      return extracted;
    }
  }

  return null;
}

export async function restoreSavedProjectData({
  projectData,
  dispatch,
  readOnly = false
}: {
  projectData: Record<string, any>;
  dispatch: (...args: any[]) => any;
  readOnly?: boolean;
}) {
  const savedProject = extractSavedProjectPayload(projectData);
  if (!savedProject) {
    console.error('[project-flow] Invalid saved project payload', {
      topLevelKeys:
        projectData && typeof projectData === 'object' ? Object.keys(projectData).slice(0, 20) : [],
      projectData
    });
    throw new Error('Saved project payload is invalid.');
  }

  const loadedMap = processKeplerglJSON(savedProject as any);
  if (!loadedMap?.datasets || !loadedMap?.config) {
    throw new Error('Saved project payload is invalid.');
  }

  await dispatch(
    addDataToMap({
      ...loadedMap,
      info: savedProject.info,
      options: {
        centerMap: false,
        readOnly
      }
    })
  );
}

export function buildProjectName(mapInfo: any, keplerMapState: any) {
  let name = mapInfo?.title;

  if (!name) {
    const datasets = keplerMapState?.visState?.datasets;
    if (datasets) {
      const firstDataset = Object.values(datasets)[0] as any;
      const label = firstDataset?.label;
      if (label) {
        name = label.replace(/\.[^.]+$/, '');
      }
    }
  }

  if (!name) {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    name = `Dataviz_Project_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }

  return name;
}

export function resolveProjectLoadTarget({
  query,
  pathname,
  routeId
}: {
  query: Record<string, unknown>;
  pathname: string;
  routeId?: string;
}) {
  const queryProjectId = typeof query.project_id === 'string' ? query.project_id : null;
  const routeProjectId = typeof routeId === 'string' && pathname.startsWith('/projects/') ? routeId : null;
  const pathMatch = pathname.match(/^\/projects\/([^/]+)\/?$/);
  const pathProjectId = routeProjectId || (pathMatch ? decodeURIComponent(pathMatch[1]) : null);
  const targetProjectId = queryProjectId || pathProjectId;
  const sourceLabel = queryProjectId ? 'query param' : 'path';

  return { targetProjectId, sourceLabel };
}

export function resolveShareLoadTarget({
  pathname,
  routeId
}: {
  pathname: string;
  routeId?: string;
}) {
  const routeShareId = typeof routeId === 'string' && pathname.startsWith('/shares/') ? routeId : null;
  const pathMatch = pathname.match(/^\/shares\/([^/]+)\/?$/);
  const pathShareId = routeShareId || (pathMatch ? decodeURIComponent(pathMatch[1]) : null);

  return { targetShareId: pathShareId };
}

export async function loadProjectById({
  projectId,
  sourceLabel,
  dispatch,
  cloudProviders
}: {
  projectId: string;
  sourceLabel: string;
  dispatch: (...args: any[]) => any;
  cloudProviders: any[];
}) {
  const header = getToolHeader();
  const datavizProvider = cloudProviders.find(c => c.name === DATAVIZ_PROVIDER_NAME) as any;
  let lastError: unknown = null;
  const accessToken = await readDatavizAccessToken();
  if (!accessToken) {
    console.log(`[App] Waiting for auth session before project load (${sourceLabel}):`, projectId);
    await waitForDatavizAccessToken();
  }

  if (header && typeof header.loadProject === 'function') {
    try {
      console.log(`[App] Loading project via toolHeader.loadProject (${sourceLabel}):`, projectId);
      const projectData = await header.loadProject(projectId);
      await restoreSavedProjectData({
        projectData,
        dispatch
      });
      console.log(`[App] Project restored via toolHeader.loadProject (${sourceLabel}):`, projectId);
      return true;
    } catch (error) {
      lastError = error;
      console.warn(`[App] toolHeader.loadProject failed (${sourceLabel}), falling back to provider download:`, error);
    }
  }

  if (datavizProvider) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        if (attempt === 0) {
          console.log(`[App] Loading project via downloadMap (${sourceLabel}):`, projectId);
        } else {
          console.log(`[App] Retrying project download (${sourceLabel}) attempt ${attempt + 1}:`, projectId);
        }
        const result = await datavizProvider.downloadMap({ id: projectId });
        await restoreSavedProjectData({
          projectData: result.map,
          dispatch
        });
        console.log(`[App] Project restored via downloadMap (${sourceLabel}):`, projectId);
        return true;
      } catch (error) {
        lastError = error;
        if (attempt === 2) {
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 800 * (attempt + 1)));
      }
    }
  }

  if (lastError) {
    throw lastError;
  }

  return false;
}

export async function loadSharedMapById({
  shareId,
  dispatch,
  onTitle
}: {
  shareId: string;
  dispatch: (...args: any[]) => any;
  onTitle?: (title: string) => void;
}) {
  const metadataResponse = await fetch(
    `${SHARE_METADATA_ENDPOINT}?id=${encodeURIComponent(shareId)}`,
    { cache: 'no-store' }
  );

  const metadataPayload = await metadataResponse.json().catch(() => null);
  if (!metadataResponse.ok) {
    throw createSharedMapLoadError(metadataPayload, metadataResponse.status);
  }

  const title = String(metadataPayload?.title || '').trim();
  const snapshotUrl = String(metadataPayload?.snapshotUrl || '').trim();
  if (title && typeof onTitle === 'function') {
    onTitle(title);
  }
  if (!snapshotUrl) {
    throw new Error('Shared map snapshot is unavailable.');
  }

  const snapshotResponse = await fetch(snapshotUrl, { cache: 'no-store' });
  if (!snapshotResponse.ok) {
    throw new Error(`Failed to fetch shared snapshot (${snapshotResponse.status})`);
  }

  const projectData = await snapshotResponse.json();
  await restoreSavedProjectData({
    projectData,
    dispatch,
    readOnly: true
  });

  return {
    title,
    snapshotUrl
  };
}
