// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import { loadFiles } from '@kepler.gl/actions';

export const DATAVIZ_PROVIDER_NAME = 'dataviz';

export function getToolHeader() {
  return document.querySelector('dataviz-tool-header') as any;
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
  let projectData: any = null;

  if (header && typeof header.loadProject === 'function') {
    console.log(`[App] Loading project via toolHeader.loadProject (${sourceLabel}):`, projectId);
    projectData = await header.loadProject(projectId);
    console.log(`[App] Project restored via toolHeader.loadProject (${sourceLabel}):`, projectId);
  } else {
    console.log(`[App] loadProject not available, falling back to downloadMap (${sourceLabel}):`, projectId);
    const datavizProvider = cloudProviders.find(c => c.name === DATAVIZ_PROVIDER_NAME) as any;
    if (datavizProvider) {
      const result = await datavizProvider.downloadMap({ id: projectId });
      projectData = result.map;
      console.log(`[App] Project restored via downloadMap (${sourceLabel}):`, projectId);
    }
  }

  if (projectData) {
    const file = new File(
      [JSON.stringify(projectData)],
      'project.json',
      { type: 'application/json' }
    );
    await dispatch(loadFiles([file]));
    return true;
  }

  return false;
}
