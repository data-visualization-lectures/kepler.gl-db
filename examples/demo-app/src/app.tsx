// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, { useCallback, useEffect, useRef } from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import styled, { ThemeProvider, StyleSheetManager } from 'styled-components';
import Window from 'global/window';
import { connect, useDispatch } from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import { useSelector } from 'react-redux';
import isPropValid from '@emotion/is-prop-valid';
import { WebMercatorViewport } from '@deck.gl/core';
import { ScreenshotWrapper } from '@openassistant/ui';
import {
  setStartScreenCapture,
  setScreenCaptured,
  AiAssistantPanel,
  setMapBoundary
} from '@kepler.gl/ai-assistant';
import { panelBorderColor, theme } from '@kepler.gl/styles';
import { ParsedConfig } from '@kepler.gl/types';
import { getApplicationConfig } from '@kepler.gl/utils';
import { SqlPanel } from '@kepler.gl/duckdb';
import KeplerGlSchema from '@kepler.gl/schemas';
import { replaceLoadDataModal } from './factories/load-data-modal';
import { replaceMapControl } from './factories/map-control';
import { replacePanelHeader } from './factories/panel-header';

import { CLOUD_PROVIDERS_CONFIGURATION, DEFAULT_FEATURE_FLAGS } from './constants/default-settings';
import { messages } from './constants/localization';
// Import logo
import logoPng from './assets/logo.png';

import {
  loadRemoteMap,
  loadSampleConfigurations,
  onExportFileSuccess,
  onLoadCloudMapSuccess
} from './actions';

import {
  loadCloudMap,
  addDataToMap,
  replaceDataInMap,
  toggleMapControl,
  toggleModal,
  loadFiles,
  startExportingImage,
  cleanupExportImage,
  setExportImageSetting
} from '@kepler.gl/actions';
import { CLOUD_PROVIDERS } from './cloud-providers';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const KeplerGl = require('@kepler.gl/components').injectComponents([
  replaceLoadDataModal(),
  replaceMapControl(),
  replacePanelHeader()
]);

// Sample data
/* eslint-disable no-unused-vars */
import sampleTripData, { testCsvData, sampleTripDataConfig } from './data/sample-trip-data';
// import sampleGeojson from './data/sample-small-geojson';
// import sampleGeojsonPoints from './data/sample-geojson-points';
import sampleGeojsonConfig from './data/sample-geojson-config';
import sampleH3Data, { config as h3MapConfig } from './data/sample-hex-id-csv';
import sampleS2Data, { config as s2MapConfig, dataId as s2DataId } from './data/sample-s2-data';
import sampleAnimateTrip, {
  pointData,
  pointDataId,
  animateTripDataId,
  replacePointData,
  config as syncedTripConfig
} from './data/sample-animate-trip-data';
import sampleIconCsv from './data/sample-icon-csv';
import sampleGpsData from './data/sample-gps-data';
import sampleRowData, { config as rowDataConfig } from './data/sample-row-data';
import { processCsvData, processGeojson, processRowObject } from '@kepler.gl/processors';

/* eslint-enable no-unused-vars */

// This implements the default behavior from styled-components v5
function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

const keplerGlGetState = state => state.demo.keplerGl;

const GlobalStyle = styled.div`
  font-family: ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.71429;

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.labelColor};
  }
`;

const CONTAINER_STYLE = {
  transition: 'margin 1s, height 1s',
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#333'
};



const StyledResizeHandle = styled(PanelResizeHandle)`
  background-color: ${panelBorderColor};
  &:hover {
    background-color: #555;
  }
  width: 100%;
  height: 5px;
  cursor: row-resize;
`;

const StyledVerticalResizeHandle = styled(PanelResizeHandle)`
  background-color: ${panelBorderColor};
  width: 4px;
  height: 100%;
  cursor: row-resize;

  &:hover {
    background-color: #555;
  }
`;

// ========================================
// 大容量プロジェクト保存関連ヘルパー関数
// ========================================

async function getAccessToken(): Promise<string | null> {
  const supabase = (window as any).datavizSupabase;
  if (supabase?.auth?.getSession) {
    // Supabase v2
    const { data } = await supabase.auth.getSession();
    return data.session?.access_token || null;
  }
  if (supabase?.auth?.session) {
    // Supabase v1
    return supabase.auth.session()?.access_token || null;
  }
  return null;
}


async function uploadLargeProject({
  name,
  projectData,
  existingProjectId,
  thumbnailDataUri,
}: {
  name: string;
  projectData: object;
  existingProjectId: string | null;
  thumbnailDataUri: string | null;
}): Promise<{ id: string; name: string }> {
  const token = await getAccessToken();
  if (!token) throw new Error('ログインが必要です');

  const API_BASE = 'https://api.dataviz.jp/api';
  const dataString = JSON.stringify(projectData);
  const shouldUpdate = !!existingProjectId;

  console.log('[uploadLargeProject] Starting upload...', {
    projectName: name,
    dataSize: dataString.length,
    shouldUpdate,
    existingProjectId,
    hasThumbnail: !!thumbnailDataUri
  });
  console.log('[uploadLargeProject] Data being sent to Supabase:', projectData);
  console.log('[uploadLargeProject] Stringified data:', dataString);

  // Step 1: 署名付きURL取得
  const uploadUrlBody: any = { type: 'data' };
  if (shouldUpdate) uploadUrlBody.project_id = existingProjectId;

  console.log('[uploadLargeProject] Step 1: Fetching signed URL...');

  const urlRes = await fetch(`${API_BASE}/projects-upload-url`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(uploadUrlBody),
  });

  if (!urlRes.ok) {
    const errorText = await urlRes.text();
    console.error('[uploadLargeProject] Step 1 failed:', {
      status: urlRes.status,
      statusText: urlRes.statusText,
      errorBody: errorText
    });
    throw new Error(`署名付きURL取得失敗: ${urlRes.status}`);
  }

  const { upload_url, storage_path, project_id } = await urlRes.json();
  console.log('[uploadLargeProject] Step 1 succeeded:', { storage_path, project_id });

  // Step 2: Storage に直接アップロード
  console.log('[uploadLargeProject] Step 2: Uploading data to Storage...');

  const storageRes = await fetch(upload_url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: dataString,
  });

  if (!storageRes.ok) {
    const errorText = await storageRes.text();
    console.error('[uploadLargeProject] Step 2 failed:', {
      status: storageRes.status,
      statusText: storageRes.statusText,
      errorBody: errorText
    });
    throw new Error(`Storageアップロード失敗: ${storageRes.status}`);
  }

  console.log('[uploadLargeProject] Step 2 succeeded');

  // Step 3: メタデータを API に送信
  const metaUrl = shouldUpdate ? `${API_BASE}/projects/${existingProjectId}` : `${API_BASE}/projects`;
  const metaMethod = shouldUpdate ? 'PUT' : 'POST';
  const metaBody: any = shouldUpdate
    ? { name, storage_uploaded: true }
    : { name, app_name: 'kepler-gl', storage_path, project_id, storage_uploaded: true };

  // サムネイルをdata URIのままメタデータに含める
  if (thumbnailDataUri) {
    metaBody.thumbnail = thumbnailDataUri;
  }

  console.log('[uploadLargeProject] Step 3: Saving metadata...', {
    url: metaUrl,
    method: metaMethod,
    body: metaBody
  });

  const metaRes = await fetch(metaUrl, {
    method: metaMethod,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(metaBody),
  });

  if (!metaRes.ok) {
    const errorText = await metaRes.text();
    console.error('[uploadLargeProject] Step 3 failed:', {
      status: metaRes.status,
      statusText: metaRes.statusText,
      errorBody: errorText
    });
    throw new Error(`メタデータ保存失敗: ${metaRes.status}`);
  }

  const result = await metaRes.json();
  console.log('[uploadLargeProject] All steps completed successfully:', result);
  return result.project || result;
}

const App = props => {
  const { params: { id, provider } = {}, location: { query = {} } = {} } = props;
  const dispatch = useDispatch();

  // TODO find another way to check for existence of duckDb plugin
  const duckDbPluginEnabled = (getApplicationConfig().plugins || []).some(p => p.name === 'duckdb');

  const isSqlPanelOpen = useSelector(
    state => duckDbPluginEnabled && state?.demo?.keplerGl?.map?.uiState.mapControls.sqlPanel?.active
  );

  const isAiAssistantPanelOpen = useSelector(
    state => state?.demo?.keplerGl?.map?.uiState.mapControls.aiAssistant?.active
  );

  // Get map info to check availability for saving
  const mapInfo = useSelector(state => state?.demo?.keplerGl?.map?.visState?.mapInfo);
  // Use explicit ref to access current mapInfo in callbacks without re-triggering effects
  const mapInfoRef = useRef(mapInfo);

  useEffect(() => {
    mapInfoRef.current = mapInfo;
  }, [mapInfo]);

  // Track current project ID for save/update operations
  const currentProjectIdRef = useRef<string | null>(null);

  // Get kepler.gl map state for serialization
  const keplerMapState = useSelector((state: any) => state?.demo?.keplerGl?.map);
  const keplerMapStateRef = useRef(keplerMapState);

  useEffect(() => {
    keplerMapStateRef.current = keplerMapState;
  }, [keplerMapState]);

  // kepler.gl の ExportImage 機能で生成されたサムネイル dataUri を取得
  const exportImageDataUri = useSelector(
    (state: any) => state?.demo?.keplerGl?.map?.uiState?.exportImage?.imageDataUri || null
  );

  // 保存を保留中の情報（exportImage 完了後に保存処理を実行するため）
  const pendingSaveRef = useRef<{
    name: string;
    projectData: object;
    isLarge: boolean;
  } | null>(null);

  // exportImageDataUri が更新されたとき、または pendingSaveRef が設定されてから2秒後に保存処理を実行
  // サムネイル生成に失敗しても保存を続行するため、タイマーで実行
  useEffect(() => {
    if (!pendingSaveRef.current) return;

    console.log('[App] saveEffect triggered, exportImageDataUri:', exportImageDataUri ? 'set' : 'not set');

    const timeout = setTimeout(() => {
      const pending = pendingSaveRef.current;
      if (!pending) return;

      const { name, projectData, isLarge } = pending;
      console.log('[App] Processing pending save: name=', name, 'isLarge=', isLarge, 'existingProjectId=', currentProjectIdRef.current);
      pendingSaveRef.current = null;

      const header = document.querySelector('dataviz-tool-header') as any;

      // 使い終わったら ExportImage 状態をリセット
      dispatch(cleanupExportImage());

      if (isLarge) {
        console.log('[App] Calling uploadLargeProject with:', { name, isLarge, existingProjectId: currentProjectIdRef.current });
        header?.showMessage?.('プロジェクトを保存しています...', 'info');
        uploadLargeProject({
          name,
          projectData,
          existingProjectId: currentProjectIdRef.current,
          thumbnailDataUri: exportImageDataUri,
        })
          .then((meta) => {
            console.log('[App] uploadLargeProject success, meta:', meta);
            currentProjectIdRef.current = meta.id;
            // Update URL with project_id query parameter for permalink
            const url = new URL(window.location);
            url.pathname = '/';
            url.searchParams.set('project_id', meta.id);
            window.history.replaceState({}, '', url);
            console.log('[App] Updated URL with project_id:', meta.id);
            header?.showMessage?.('プロジェクトを保存しました', 'success');
          })
          .catch((err) => {
            header?.showMessage?.(`保存に失敗しました: ${err.message}`, 'error');
            console.error('[App] Error saving large project:', err);
          });
      } else {
        console.log('[App] Calling showSaveModal with:', { name, existingProjectId: currentProjectIdRef.current, hasThumbnail: !!exportImageDataUri });
        console.log('[App] Data being sent via showSaveModal to tool-header:', projectData);
        if (typeof header?.showSaveModal === 'function') {
          header.showSaveModal({
            name,
            data: projectData,
            thumbnailDataUri: exportImageDataUri || null,
            existingProjectId: currentProjectIdRef.current,
          });
        } else {
          console.warn('[App] showSaveModal is not available on header');
          console.log('[App] Available header methods:', Object.getOwnPropertyNames(header || {}));
        }
      }
    }, 2000); // サムネイル生成に最大2秒待機

    return () => clearTimeout(timeout);
  }, [dispatch, exportImageDataUri]);

  const prevQueryRef = useRef<{ provider?: string; id?: string; query?: any } | null>(null);

  const configureHeader = useCallback(() => {
    console.log('[App] configureHeader called');
    const header = document.querySelector('dataviz-tool-header');
    console.log('[App] header element:', header ? 'found' : 'NOT FOUND');
    if (header) {
      // Resolve logo path to absolute URL just in case
      // Ensure we resolve against the origin (root) to avoid issues when in sub-routes like /demo/map/
      const logoUrl = new URL(logoPng, window.location.origin + '/').href;

      console.log('[App] Found dataviz-tool-header, setting config...');
      console.log('[App] Logo raw import:', logoPng);
      console.log('[App] Logo absolute URL:', logoUrl);

      // Use setConfig method to trigger render
      if (typeof (header as any).setConfig === 'function') {
        (header as any).setConfig({
          logo: {
            type: 'image',
            src: logoUrl,
            href: 'https://kepler-gl.dataviz.jp/'
          },
          buttons: [
            {
              id: 'load-data-btn',
              label: 'データファイルの読込',
              action: () => {
                console.log('[App] Loading data file modal...');
                dispatch(toggleModal('addData'));
                // Re-apply header config
                setTimeout(() => configureHeader(), 100);
              },
              align: 'left'
            },
            {
              id: 'load-sample-btn',
              label: 'サンプルプロジェクトの読込',
              action: () => {
                console.log('[App] Loading sample project modal...');
                dispatch(toggleModal('addData'));
                // Simulate user mechanism: wait for modal and click the "Sample Data" tab
                setTimeout(() => {
                  const trySampleBtn = document.querySelector('.demo-map-action') as HTMLElement;
                  if (trySampleBtn) {
                    console.log('[App] Found .demo-map-action, clicking...');
                    trySampleBtn.click();
                  } else {
                    console.warn('[App] .demo-map-action not found in modal');
                  }
                }, 500); // 500ms delay to allow modal render

                // Re-apply header config to ensure logo stays visible
                setTimeout(() => {
                  configureHeader();
                }, 100);
              },
              align: 'left'
            },
            {
              id: 'save-project-btn',
              label: 'プロジェクトの保存',
              action: () => {
                console.log('[App] Save button clicked');
                // Serialize current kepler.gl state
                const projectData = keplerMapStateRef.current
                  ? KeplerGlSchema.save(keplerMapStateRef.current)
                  : {};

                // Get project name from map info, dataset filename, or generate default
                const currentMapInfo = mapInfoRef.current;
                let name = currentMapInfo?.title;
                if (!name) {
                  const datasets = keplerMapStateRef.current?.visState?.datasets;
                  if (datasets) {
                    const firstDataset = Object.values(datasets)[0] as any;
                    const label = firstDataset?.label;
                    if (label) {
                      name = label.replace(/\.[^.]+$/, ''); // 拡張子を除去
                    }
                  }
                }
                if (!name) {
                  const now = new Date();
                  const pad = (n: number) => String(n).padStart(2, '0');
                  name = `Dataviz_Project_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}:${pad(now.getMinutes())}`;
                }

                // 大容量の場合はプロジェクト名を確認
                const dataSize = new Blob([JSON.stringify(projectData)]).size;
                const LARGE_THRESHOLD = 4.5 * 1024 * 1024; // 4.5MB
                const isLarge = dataSize >= LARGE_THRESHOLD;
                console.log('[App] Save button action: dataSize=', dataSize, 'isLarge=', isLarge);

                if (isLarge) {
                  const confirmedName = prompt('プロジェクト名を入力してください:', name);
                  if (confirmedName === null) return;
                  name = confirmedName;
                }

                // サムネイル生成のため startExportingImage を dispatch
                // → exportImageDataUri が更新されたら useEffect 内で保存処理を実行
                console.log('[App] Setting pendingSaveRef and dispatching startExportingImage');
                pendingSaveRef.current = { name, projectData, isLarge };

                // マップの実寸をセット（デフォルト 0×0 では透明・細長い画像になるため）
                const mapContainer = document.querySelector('#root') as HTMLElement;
                const mapW = mapContainer?.clientWidth || window.innerWidth;
                const mapH = mapContainer?.clientHeight || (window.innerHeight - 96);
                dispatch(setExportImageSetting({ mapW, mapH }));

                dispatch(startExportingImage());
                console.log('[App] startExportingImage dispatched');
              },
              align: 'right'
            },
            {
              id: 'load-project-btn',
              label: 'プロジェクトの読込',
              action: () => {
                const header = document.querySelector('dataviz-tool-header');
                if (header && typeof (header as any).showLoadModal === 'function') {
                  (header as any).showLoadModal();
                }
              },
              align: 'right'
            },
            {
              id: 'help-btn',
              label: 'ヘルプ',
              action: () => {
                window.open('https://docs.kepler.gl/docs/user-guides', '_blank');
              },
              align: 'right'
            }
          ]
        });
        console.log('[App] setConfig called successfully');

        // Set up project management with new API
        if (typeof (header as any).setProjectConfig === 'function') {
          console.log('[App] Setting up project config with callbacks...');
          (header as any).setProjectConfig({
            appName: 'kepler-gl',
            apiBaseUrl: 'https://api.dataviz.jp',  // 新APIを明示的に指定
            onProjectLoad: (projectData) => {
              console.log('[App] onProjectLoad callback called with projectData:', projectData);

              const file = new File(
                [JSON.stringify(projectData)],
                'project.json',
                { type: 'application/json' }
              );
              dispatch(loadFiles([file]));

              // モーダルから読込された時の project_id 取得
              // tool-header は _currentSelectedProjectId に project_id を保存している
              const header = document.querySelector('dataviz-tool-header') as any;
              const projectId = header?._currentSelectedProjectId;
              console.log('[App] Got projectId from header._currentSelectedProjectId:', projectId);

              if (projectId) {
                currentProjectIdRef.current = projectId;
                // パーマリンク形式に統一: /projects/{projectId}
                const permalink = `/projects/${projectId}`;
                window.history.replaceState({ projectId }, projectId, permalink);
                console.log('[App] Updated URL to permalink from onProjectLoad:', permalink);
              } else {
                console.warn('[App] onProjectLoad: projectId not found in header._currentSelectedProjectId');
              }
            },
            onProjectSave: (meta) => {
              console.log('[App] onProjectSave CALLBACK TRIGGERED with meta:', meta);
              // tool-header は {project: {...}} で返す可能性があるため、project を抽出
              const projectMeta = meta?.project || meta;
              const projectId = projectMeta?.id;
              console.log('[App] Extracted projectMeta:', projectMeta);
              console.log('[App] Extracted projectId:', projectId);

              if (projectId) {
                currentProjectIdRef.current = projectId;
                console.log('[App] Stored currentProjectIdRef:', currentProjectIdRef.current);
                // KEPLER_GL_API_MIGRATION.md に従って /projects/{projectId} パーマリンク形式で URL を更新
                const permalink = `/projects/${projectId}`;
                window.history.replaceState({ projectId }, projectId, permalink);
                console.log('[App] Updated URL to permalink:', permalink);
              } else {
                console.warn('[App] onProjectSave: projectId not found in meta', meta);
              }
            }
          });
          console.log('[App] Project config set successfully');
        } else {
          console.warn('[App] setProjectConfig method not found on header');
        }
      } else {
        // Fallback if setConfig is missing (unexpected)
        console.warn('[App] setConfig method not found on header, trying property assignment');
        (header as any).config = {
          logo: {
            type: 'image',
            src: logoUrl,
            href: 'https://kepler-gl.dataviz.jp/'
          },
          buttons: []
        };
      }
    } else {
      console.warn('[App] dataviz-tool-header not found in DOM');
    }
  }, [dispatch]);

  useEffect(() => {
    console.log('[App] Header setup useEffect running');
    if (customElements.get('dataviz-tool-header')) {
      console.log('[App] dataviz-tool-header already defined');
      configureHeader();
    } else {
      console.log('[App] waiting for dataviz-tool-header...');
      customElements.whenDefined('dataviz-tool-header').then(() => {
        console.log('[App] dataviz-tool-header defined, calling configureHeader');
        configureHeader();
      });
    }

    // if we pass an id as part of the url
    // we try to fetch along map configurations
    const cloudProvider = CLOUD_PROVIDERS.find(c => c.name === provider);
    if (cloudProvider) {
      // Prevent constant reloading after change of the location
      if (isEqual(prevQueryRef.current, { provider, id, query })) {
        return;
      }

      dispatch(
        loadCloudMap({
          loadParams: query,
          provider: cloudProvider,
          onSuccess: onLoadCloudMapSuccess
        })
      );
      prevQueryRef.current = { provider, id, query };
      return;
    }

    // ?project_id=xxx クエリパラメータによるパーマリンク処理
    const queryProjectId = query.project_id;
    if (queryProjectId) {
      const currentRef = { provider: 'dataviz', id: queryProjectId };
      if (isEqual(prevQueryRef.current, currentRef)) {
        return;
      }
      prevQueryRef.current = currentRef;
      currentProjectIdRef.current = queryProjectId;

      const doLoadByQueryParam = async () => {
        const header = document.querySelector('dataviz-tool-header') as any;
        try {
          if (header && typeof header.loadProject === 'function') {
            console.log('[App] Loading project via toolHeader.loadProject:', queryProjectId);
            const projectData = await header.loadProject(queryProjectId);
            const file = new File(
              [JSON.stringify(projectData)],
              'project.json',
              { type: 'application/json' }
            );
            dispatch(loadFiles([file]));
            console.log('[App] Project restored via toolHeader.loadProject:', queryProjectId);
          } else {
            console.log('[App] loadProject not available, falling back to downloadMap:', queryProjectId);
            const datavizProvider = CLOUD_PROVIDERS.find(c => c.name === 'dataviz') as any;
            if (datavizProvider) {
              const result = await datavizProvider.downloadMap({ id: queryProjectId });
              const projectData = result.map || result;
              const file = new File(
                [JSON.stringify(projectData)],
                'project.json',
                { type: 'application/json' }
              );
              dispatch(loadFiles([file]));
              console.log('[App] Project restored via downloadMap:', queryProjectId);
            }
          }
        } catch (err: any) {
          console.error('[App] Failed to load project from query param:', err);
        }
      };

      if (customElements.get('dataviz-tool-header')) {
        doLoadByQueryParam();
      } else {
        customElements.whenDefined('dataviz-tool-header').then(doLoadByQueryParam);
      }
      return;
    }

    // Handle /projects/{projectId} path形式のパーマリンク
    const pathMatch = window.location.pathname.match(/^\/projects\/([a-f0-9\-]+)$/);
    let projectId: string | null = null;

    if (pathMatch) {
      projectId = pathMatch[1];
    }

    if (projectId) {
      const currentRef = { provider: 'dataviz', id: projectId };
      if (isEqual(prevQueryRef.current, currentRef)) {
        return;
      }
      prevQueryRef.current = currentRef;
      currentProjectIdRef.current = projectId;

      const doLoadProject = async () => {
        const header = document.querySelector('dataviz-tool-header') as any;
        try {
          if (header && typeof header.loadProject === 'function') {
            console.log('[App] Loading project via toolHeader.loadProject (path):', projectId);
            const projectData = await header.loadProject(projectId);
            const file = new File(
              [JSON.stringify(projectData)],
              'project.json',
              { type: 'application/json' }
            );
            dispatch(loadFiles([file]));
            console.log('[App] Project restored via toolHeader.loadProject (path):', projectId);
          } else {
            const datavizProvider = CLOUD_PROVIDERS.find(c => c.name === 'dataviz') as any;
            if (datavizProvider) {
              const result = await datavizProvider.downloadMap({ id: projectId });
              const projectData = result.map || result;
              const file = new File(
                [JSON.stringify(projectData)],
                'project.json',
                { type: 'application/json' }
              );
              dispatch(loadFiles([file]));
              console.log('[App] Project restored via downloadMap (path):', projectId);
            }
          }
        } catch (err: any) {
          console.error('[App] Failed to load project from path:', err);
        }
      };

      if (customElements.get('dataviz-tool-header')) {
        doLoadProject();
      } else {
        customElements.whenDefined('dataviz-tool-header').then(doLoadProject);
      }
      return;
    }

    // Load sample using its id
    if (id) {
      dispatch(loadSampleConfigurations(id));
    }

    // Load map using a custom
    if (query.mapUrl) {
      // TODO?: validate map url
      dispatch(loadRemoteMap({ dataUrl: query.mapUrl }));
    }

    if (duckDbPluginEnabled && query.sql) {
      dispatch(toggleMapControl('sqlPanel', 0));
      dispatch(toggleModal(null));
    }

    // load sample data
    _loadSampleData();

    // Notifications

    // no dependencies, as this was part of componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, provider, query, dispatch, configureHeader]);

  // Bridge kepler.gl notification events to dataviz-tool-header toast UI
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const {message, type: toastType, duration} = e.detail || {};
      const toolHeader = document.querySelector('dataviz-tool-header');
      if (toolHeader && (toolHeader as any).showMessage) {
        (toolHeader as any).showMessage(message, toastType, duration);
      }
    };
    window.addEventListener('kepler-notification', handler as EventListener);
    return () => {
      window.removeEventListener('kepler-notification', handler as EventListener);
    };
  }, []);

  /**
   * Update map boundary when view state changes, used by ai-assistant to
   * get data from vector tiles when map boundary changes
   */
  const onViewStateChange = useCallback(
    viewState => {
      const viewport = new WebMercatorViewport(viewState);
      const nw = viewport.unproject([0, 0]);
      const se = viewport.unproject([viewport.width, viewport.height]);
      dispatch(setMapBoundary(nw, se));
    },
    [dispatch]
  );

  const _setStartScreenCapture = useCallback(
    flag => {
      dispatch(setStartScreenCapture(flag));
    },
    [dispatch]
  );

  const _setScreenCaptured = useCallback(
    screenshot => {
      dispatch(setScreenCaptured(screenshot));
    },
    [dispatch]
  );

  const _loadRowData = useCallback(() => {
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'Sample Visit Data',
              id: 'sample_visit_data'
            },
            data: processRowObject(sampleRowData)
          }
        ],
        config: rowDataConfig
      })
    );
  }, [dispatch]);

  const _loadVectorTileData = useCallback(() => {
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'Railroads',
              id: 'railroads.pmtiles',
              color: [255, 0, 0],
              type: 'vector-tile'
            },
            data: {
              rows: [],
              fields: [
                {
                  name: 'continent',
                  type: 'string',
                  format: '',
                  analyzerType: 'STRING'
                }
              ]
            },
            metadata: {
              name: 'output.pmtiles',
              description: 'output.pmtiles',
              type: 'remote',
              remoteTileFormat: 'pmtiles',
              tilesetDataUrl:
                'https://4sq-studio-public.s3.us-west-2.amazonaws.com/pmtiles-test/161727fe-7952-4e57-aa05-850b3086b0b2.pmtiles',
              tilesetMetadataUrl:
                'https://4sq-studio-public.s3.us-west-2.amazonaws.com/pmtiles-test/161727fe-7952-4e57-aa05-850b3086b0b2.pmtiles',
              id: 'sz6uy1xtj',
              format: 'rows',
              label: 'output.pmtiles',
              metaJson: null,
              bounds: [-150.1122219, -51.8952777, 179.3577783, 69.6043747],
              center: [14.0625, 50.7026397, 6],
              maxZoom: 6,
              minZoom: 0,
              fields: [
                {
                  name: 'continent',
                  id: 'continent',
                  format: '',
                  filterProps: {
                    domain: [
                      'Africa',
                      'Asia',
                      'Europe',
                      'North America',
                      'Oceania',
                      'South America'
                    ],
                    value: [],
                    type: 'multiSelect',
                    gpu: false
                  },
                  type: 'string',
                  analyzerType: 'STRING'
                }
              ]
            }
          }
        ],
        options: {
          autoCreateLayers: true
        }
      })
    );
  }, [dispatch]);

  const _loadPointData = useCallback(() => {
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'Sample Taxi Trips 1',
              id: 'test_trip_data',
              color: [255, 0, 0]
            },
            data: {
              rows: sampleTripData.rows.slice(0, 20),
              fields: cloneDeep(sampleTripData.fields)
            }
          },
          {
            info: {
              label: 'Sample Taxi Trips 2',
              id: 'test_trip_data_2',
              color: [0, 255, 0]
            },
            data: {
              rows: sampleTripData.rows.slice(5, sampleTripData.rows.length),
              fields: cloneDeep(sampleTripData.fields)
            }
          }
        ],
        options: {
          // centerMap: true,
          keepExistingConfig: true
        },
        config: sampleTripDataConfig
      })
    );
  }, [dispatch]);

  const _loadScenegraphLayer = useCallback(() => {
    dispatch(
      addDataToMap({
        datasets: {
          info: {
            label: 'Sample Scenegraph Ducks',
            id: 'test_trip_data'
          },
          data: processCsvData(testCsvData)
        },
        config: {
          version: 'v1',
          config: {
            visState: {
              layers: [
                {
                  type: '3D',
                  config: {
                    dataId: 'test_trip_data',
                    columns: {
                      lat: 'gps_data.lat',
                      lng: 'gps_data.lng'
                    },
                    isVisible: true
                  }
                }
              ]
            }
          }
        }
      })
    );
  }, [dispatch]);

  const _loadIconData = useCallback(() => {
    // load icon data and config and process csv file
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'Icon Data',
              id: 'test_icon_data'
            },
            data: processCsvData(sampleIconCsv)
          }
        ]
      })
    );
  }, [dispatch]);

  const _loadTripGeoJson = useCallback(() => {
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: { label: 'Trip animation', id: animateTripDataId },
            data: processGeojson(sampleAnimateTrip)
          }
        ]
      })
    );
  }, [dispatch]);

  const _loadGeojsonData = useCallback(() => {
    // load geojson
    const geojsonPoints = processGeojson(sampleGeojsonPoints);
    const geojsonZip = null; // processGeojson(sampleGeojson);
    dispatch(
      addDataToMap({
        datasets: [
          geojsonPoints
            ? {
              info: { label: 'Bart Stops Geo', id: 'bart-stops-geo' },
              data: geojsonPoints
            }
            : null,
          geojsonZip
            ? {
              info: { label: 'SF Zip Geo', id: 'sf-zip-geo' },
              data: geojsonZip
            }
            : null
        ].filter(d => d !== null),
        options: {
          keepExistingConfig: true
        },
        config: sampleGeojsonConfig as ParsedConfig
      })
    );
  }, [dispatch]);

  const _loadSyncedFilterWTripLayer = useCallback(() => {
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: { label: 'Trip animation', id: animateTripDataId },
            data: processGeojson(sampleAnimateTrip)
          },
          {
            info: {
              label: 'Sample Taxi Trips',
              id: pointDataId,
              color: [255, 0, 0]
            },
            data: pointData
          }
        ],
        config: syncedTripConfig,
        options: {
          centerMap: true
        }
      })
    );
  }, [dispatch]);

  const _replaceSyncedFilterWTripLayer = useCallback(() => {
    window.setTimeout(() => {
      dispatch(
        replaceDataInMap({
          datasetToReplaceId: pointDataId,
          datasetToUse: {
            info: { label: 'Sample Taxi Trips Replaced', id: `${pointDataId}-2` },
            data: replacePointData
          }
        })
      );
    }, 1000);
  }, [dispatch]);

  const _replaceData = useCallback(() => {
    // add geojson data
    const sliceData = processGeojson({
      type: 'FeatureCollection',
      features: sampleGeojsonPoints.features.slice(0, 5)
    });
    _loadGeojsonData();
    Window.setTimeout(() => {
      dispatch(
        replaceDataInMap({
          datasetToReplaceId: 'bart-stops-geo',
          datasetToUse: {
            info: { label: 'Bart Stops Geo Replaced', id: 'bart-stops-geo-2' },
            data: sliceData
          }
        })
      );
    }, 1000);
  }, [dispatch, _loadGeojsonData]);

  const _loadH3HexagonData = useCallback(() => {
    // load h3 hexagon
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'H3 Hexagons V2',
              id: 'h3-hex-id'
            },
            data: processCsvData(sampleH3Data)
          }
        ],
        config: h3MapConfig,
        options: {
          keepExistingConfig: true
        }
      })
    );
  }, [dispatch]);

  const _loadS2Data = useCallback(() => {
    // load s2
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'S2 Data',
              id: s2DataId
            },
            data: processCsvData(sampleS2Data)
          }
        ],
        config: s2MapConfig as ParsedConfig,
        options: {
          keepExistingConfig: true
        }
      })
    );
  }, [dispatch]);

  const _loadGpsData = useCallback(() => {
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'Gps Data',
              id: 'gps-data'
            },
            data: processCsvData(sampleGpsData)
          }
        ],
        options: {
          keepExistingConfig: true
        }
      })
    );
  }, [dispatch]);

  const _loadSampleData = useCallback(() => {
    // _loadPointData();
    // _loadGeojsonData();
    // _loadTripGeoJson();
    // _loadIconData();
    // _loadH3HexagonData();
    // _loadS2Data();
    // _loadScenegraphLayer();
    // _loadGpsData();
    // _loadRowData();
    // _loadVectorTileData();
    // _loadSyncedFilterWTripLayer();
    // _replaceSyncedFilterWTripLayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    _loadPointData,
    _loadGeojsonData,
    _loadTripGeoJson,
    _loadIconData,
    _loadH3HexagonData,
    _loadS2Data,
    _loadScenegraphLayer,
    _loadGpsData,
    _loadRowData,
    _replaceData,
    _loadVectorTileData,
    _loadSyncedFilterWTripLayer,
    _replaceSyncedFilterWTripLayer
  ]);

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <GlobalStyle
        // this is to apply the same modal style as kepler.gl core
        // because styled-components doesn't always return a node
        // https://github.com/styled-components/styled-components/issues/617
        // ref={node => {
        //   node ? (this.root = node) : null;
        // }}
        >
          <ScreenshotWrapper
            startScreenCapture={props.demo.aiAssistant.screenshotToAsk.startScreenCapture}
            setScreenCaptured={_setScreenCaptured}
            setStartScreenCapture={_setStartScreenCapture}
            className="h-screen"
          >
            <div style={CONTAINER_STYLE}>
              <PanelGroup direction="horizontal">
                <Panel defaultSize={isAiAssistantPanelOpen ? 70 : 100}>
                  <PanelGroup direction="vertical">
                    <Panel defaultSize={isSqlPanelOpen ? 60 : 100}>
                      <AutoSizer>
                        {({ height, width }) => (
                          <KeplerGl
                            mapboxApiAccessToken={CLOUD_PROVIDERS_CONFIGURATION.MAPBOX_TOKEN}
                            id="map"
                            getState={keplerGlGetState}
                            width={width}
                            height={height}
                            cloudProviders={CLOUD_PROVIDERS}
                            localeMessages={messages}
                            onExportToCloudSuccess={onExportFileSuccess}
                            onLoadCloudMapSuccess={onLoadCloudMapSuccess}
                            featureFlags={DEFAULT_FEATURE_FLAGS}
                            onViewStateChange={onViewStateChange}
                          />
                        )}
                      </AutoSizer>
                    </Panel>

                    {isSqlPanelOpen && (
                      <>
                        <StyledResizeHandle />
                        <Panel defaultSize={40} minSize={20}>
                          <SqlPanel initialSql={query.sql || ''} />
                        </Panel>
                      </>
                    )}
                  </PanelGroup>
                </Panel>
                {isAiAssistantPanelOpen && (
                  <>
                    <StyledVerticalResizeHandle />
                    <Panel defaultSize={30} minSize={20}>
                      <AiAssistantPanel />
                    </Panel>
                  </>
                )}
              </PanelGroup>
            </div>
          </ScreenshotWrapper>
        </GlobalStyle>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(App);
