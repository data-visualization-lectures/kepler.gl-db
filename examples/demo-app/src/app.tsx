// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { SHARE_MAP_ID } from '@kepler.gl/constants';
import { ParsedConfig } from '@kepler.gl/types';
import { getApplicationConfig } from '@kepler.gl/utils';
import { SqlPanel } from '@kepler.gl/duckdb';
import KeplerGlSchema from '@kepler.gl/schemas';
import { replaceLoadDataModal } from './factories/load-data-modal';
import { replaceMapControl } from './factories/map-control';
import { replacePanelHeader } from './factories/panel-header';

import { CLOUD_PROVIDERS_CONFIGURATION, DEFAULT_FEATURE_FLAGS } from './constants/default-settings';
import { detectBrowserLocale, getAppMessage, messages, setAppLocale } from './constants/localization';
// Import logo
import logoPng from './assets/logo.png';

import {
  loadRemoteMap,
  loadSampleConfigurations,
  onExportFileSuccess,
  onLoadCloudMapSuccess
} from './actions';
import {
  DATAVIZ_PROVIDER_NAME,
  buildProjectName,
  getToolHeader,
  loadProjectById,
  loadSharedMapById,
  restoreSavedProjectData,
  resolveProjectLoadTarget,
  resolveShareLoadTarget
} from './utils/project-flow';

import {
  loadCloudMap,
  addDataToMap,
  replaceDataInMap,
  toggleMapControl,
  toggleModal,
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

const SAVE_THUMBNAIL_TIMEOUT_MS = 10000;

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

const PUBLIC_CONTAINER_STYLE = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#333'
};

const PUBLIC_STATUS_STYLE = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  color: '#fff',
  backgroundColor: 'rgba(17, 24, 39, 0.82)',
  fontSize: '14px',
  letterSpacing: '0.01em',
  zIndex: 10,
  textAlign: 'center'
};

const PUBLIC_LOADING_MASK_STYLE = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(17, 24, 39, 0.18)',
  pointerEvents: 'none',
  zIndex: 5
};

const APP_TOP_OFFSET_CSS_VAR = '--dataviz-app-top-offset';
const DEFAULT_APP_TOP_OFFSET = 96;

function getVisibleHeaderBottom(selector: string) {
  const element = document.querySelector(selector);
  if (!(element instanceof HTMLElement)) {
    return 0;
  }

  const style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') {
    return 0;
  }

  const rect = element.getBoundingClientRect();
  if (rect.height <= 0) {
    return 0;
  }

  return Math.max(0, rect.bottom);
}

function setAppTopOffset(offset: number) {
  document.documentElement.style.setProperty(APP_TOP_OFFSET_CSS_VAR, `${Math.ceil(offset)}px`);
}

function getAppTopOffset() {
  const rawValue = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(APP_TOP_OFFSET_CSS_VAR)
    .trim();
  const parsed = Number.parseFloat(rawValue);

  return Number.isFinite(parsed) ? parsed : DEFAULT_APP_TOP_OFFSET;
}

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

const App = props => {
  const {
    params: { id, provider } = {},
    location: { query = {}, pathname = Window.location.pathname } = {}
  } = props;
  const dispatch = useDispatch();
  const publicShareView = pathname.startsWith('/shares/');
  const [publicShareStatus, setPublicShareStatus] = useState({
    isLoading: publicShareView,
    error: ''
  });
  const locale = useSelector(
    state => state?.demo?.keplerGl?.map?.uiState?.locale || detectBrowserLocale()
  );

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
  const providerSavedMapId = useSelector(
    state => state?.demo?.keplerGl?.map?.providerState?.savedMapId || null
  );
  // Use explicit ref to access current mapInfo in callbacks without re-triggering effects
  const mapInfoRef = useRef(mapInfo);

  useEffect(() => {
    const normalizedLocale = setAppLocale(locale);
    if (document?.documentElement) {
      document.documentElement.lang = normalizedLocale;
    }
  }, [locale]);

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
  const exportImageState = useSelector(
    (state: any) => state?.demo?.keplerGl?.map?.uiState?.exportImage || {}
  );
  const exportImageDataUri = exportImageState?.imageDataUri || null;
  const exportImageError = exportImageState?.error || null;

  // 保存を保留中の情報（exportImage 完了後に保存処理を実行するため）
  const pendingSaveRef = useRef<{
    name: string;
    projectData: object;
  } | null>(null);
  const [saveRequestId, setSaveRequestId] = useState(0);

  const finishPendingSave = useCallback(
    (thumbnailDataUri: string | null, thumbnailStatus: 'ready' | 'error' | 'timeout') => {
      const pending = pendingSaveRef.current;
      if (!pending) return;

      const { name, projectData } = pending;
      pendingSaveRef.current = null;

      const header = getToolHeader();

      // 使い終わったら ExportImage 状態をリセット
      dispatch(cleanupExportImage());

      console.log('[App] Processing pending save: name=', name, 'existingProjectId=', currentProjectIdRef.current, 'thumbnailStatus=', thumbnailStatus);
      console.log('[App] Calling showSaveModal with:', {
        name,
        existingProjectId: currentProjectIdRef.current,
        hasThumbnail: !!thumbnailDataUri,
        thumbnailStatus
      });
      console.log('[App] Data being sent via showSaveModal to tool-header:', projectData);
      if (typeof header?.showSaveModal === 'function') {
        header.showSaveModal({
          name,
          data: projectData,
          thumbnailDataUri,
          existingProjectId: currentProjectIdRef.current,
        });
      } else {
        console.warn('[App] showSaveModal is not available on header');
        console.log('[App] Available header methods:', Object.getOwnPropertyNames(header || {}));
      }
    },
    [dispatch]
  );

  // exportImageDataUri が生成されたら保存処理を実行する。
  // エラーまたはタイムアウト時だけ、サムネイルなしで保存を継続する。
  useEffect(() => {
    if (!pendingSaveRef.current) return;

    console.log(
      '[App] saveEffect triggered, exportImageDataUri:',
      exportImageDataUri ? 'set' : 'not set',
      'exportImageError:',
      exportImageError ? 'set' : 'not set'
    );

    if (exportImageDataUri) {
      finishPendingSave(exportImageDataUri, 'ready');
      return;
    }

    if (exportImageError) {
      console.warn('[App] Export image failed; continuing save without thumbnail:', exportImageError);
      finishPendingSave(null, 'error');
      return;
    }

    const timeout = setTimeout(() => {
      if (!pendingSaveRef.current) return;
      console.warn('[App] Export image timed out; continuing save without thumbnail');
      finishPendingSave(null, 'timeout');
    }, SAVE_THUMBNAIL_TIMEOUT_MS);

    return () => clearTimeout(timeout);
  }, [exportImageDataUri, exportImageError, finishPendingSave, saveRequestId]);

  const prevQueryRef = useRef<Record<string, unknown> | null>(null);
  const syncCurrentProjectId = useCallback((projectId: string | null) => {
    currentProjectIdRef.current = projectId;
    const datavizProvider = CLOUD_PROVIDERS.find(c => c.name === DATAVIZ_PROVIDER_NAME);
    if (datavizProvider && typeof datavizProvider.setCurrentProjectId === 'function') {
      datavizProvider.setCurrentProjectId(projectId);
    }
  }, []);

  const updateAppLayoutOffset = useCallback(() => {
    if (publicShareView) {
      setAppTopOffset(0);
      return 0;
    }

    const toolHeaderBottom = getVisibleHeaderBottom('dataviz-tool-header');
    const globalHeaderBottom = getVisibleHeaderBottom('dataviz-header');
    const nextOffset =
      toolHeaderBottom > 0
        ? Math.max(globalHeaderBottom, toolHeaderBottom)
        : DEFAULT_APP_TOP_OFFSET;

    setAppTopOffset(nextOffset);
    return nextOffset;
  }, [publicShareView]);

  const configureHeader = useCallback(() => {
    if (publicShareView) {
      return;
    }
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
              label: getAppMessage('header.loadData', locale),
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
              label: getAppMessage('header.loadSample', locale),
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
              id: 'load-project-btn',
              label: getAppMessage('header.loadProject', locale),
              action: () => {
                const header = getToolHeader();
                if (header && typeof (header as any).showLoadModal === 'function') {
                  (header as any).showLoadModal();
                }
              },
              align: 'right'
            },
            {
              id: 'save-project-btn',
              label: getAppMessage('header.saveProject', locale),
              action: () => {
                console.log('[App] Save button clicked');
                // Serialize current kepler.gl state
                const projectData = keplerMapStateRef.current
                  ? KeplerGlSchema.save(keplerMapStateRef.current)
                  : {};

                const name = buildProjectName(mapInfoRef.current, keplerMapStateRef.current);

                // サムネイル生成のため startExportingImage を dispatch
                // → exportImageDataUri が更新されたら useEffect 内で保存処理を実行
                console.log('[App] Setting pendingSaveRef and dispatching startExportingImage');
                pendingSaveRef.current = { name, projectData };
                setSaveRequestId(requestId => requestId + 1);

                // マップの実寸をセット（デフォルト 0×0 では透明・細長い画像になるため）
                const mapContainer = document.querySelector('#root') as HTMLElement;
                const mapW = mapContainer?.clientWidth || window.innerWidth;
                const mapH =
                  mapContainer?.clientHeight ||
                  Math.max(window.innerHeight - getAppTopOffset(), 0);
                dispatch(setExportImageSetting({ mapW, mapH }));

                dispatch(startExportingImage());
                console.log('[App] startExportingImage dispatched');
              },
              align: 'right'
            },
            {
              id: 'share-project-btn',
              label: getAppMessage('header.shareProject', locale),
              action: () => {
                dispatch(toggleModal(SHARE_MAP_ID));
              },
              align: 'right'
            },
            {
              id: 'help-btn',
              label: getAppMessage('header.help', locale),
              action: () => {
                window.open('https://docs.kepler.gl/docs/user-guides', '_blank');
              },
              align: 'right'
            }
          ]
        });
        console.log('[App] setConfig called successfully');
        window.requestAnimationFrame(() => {
          updateAppLayoutOffset();
        });

        // Set up project management with new API
        if (typeof (header as any).setProjectConfig === 'function') {
          console.log('[App] Setting up project config with callbacks...');
          (header as any).setProjectConfig({
            appName: 'kepler-gl',
            apiBaseUrl: 'https://api.dataviz.jp',  // 新APIを明示的に指定
            largeUploadEnabled: true,
            largeUploadThresholdBytes: 4.5 * 1024 * 1024,
            onProjectLoad: async (projectData) => {
              console.log('[App] onProjectLoad callback called with projectData:', projectData);
              try {
                await restoreSavedProjectData({
                  projectData,
                  dispatch
                });
              } catch (error) {
                console.error('[App] Invalid saved project payload from tool header', error);
                return;
              }

              // モーダルから読込された時の project_id 取得
              // tool-header は _currentSelectedProjectId に project_id を保存している
              const header = getToolHeader();
              const projectId = header?._currentSelectedProjectId;
              console.log('[App] Got projectId from header._currentSelectedProjectId:', projectId);

              if (projectId) {
                syncCurrentProjectId(projectId);
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
                syncCurrentProjectId(projectId);
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
  }, [dispatch, locale, publicShareView, syncCurrentProjectId, updateAppLayoutOffset]);

  useEffect(() => {
    updateAppLayoutOffset();

    if (publicShareView) {
      return;
    }

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            updateAppLayoutOffset();
          })
        : null;

    ['dataviz-header', 'dataviz-tool-header'].forEach(selector => {
      const element = document.querySelector(selector);
      if (element && resizeObserver) {
        resizeObserver.observe(element);
      }
    });

    const handleWindowResize = () => {
      updateAppLayoutOffset();
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      resizeObserver?.disconnect();
    };
  }, [publicShareView, updateAppLayoutOffset]);

  useEffect(() => {
    if (publicShareView) {
      setAppTopOffset(0);
      return;
    }

    console.log('[App] Header setup useEffect running');
    if (customElements.get('dataviz-tool-header')) {
      console.log('[App] dataviz-tool-header already defined');
      configureHeader();
      updateAppLayoutOffset();
    } else {
      console.log('[App] waiting for dataviz-tool-header...');
      customElements.whenDefined('dataviz-tool-header').then(() => {
        console.log('[App] dataviz-tool-header defined, calling configureHeader');
        configureHeader();
        updateAppLayoutOffset();
      });
    }
  }, [configureHeader, publicShareView, updateAppLayoutOffset]);

  useEffect(() => {
    if (publicShareView || !providerSavedMapId || providerSavedMapId === currentProjectIdRef.current) {
      return;
    }

    syncCurrentProjectId(providerSavedMapId);
    const permalink = `/projects/${providerSavedMapId}`;
    if (window.location.pathname !== permalink) {
      window.history.replaceState({ projectId: providerSavedMapId }, providerSavedMapId, permalink);
    }
  }, [providerSavedMapId, publicShareView, syncCurrentProjectId]);

  useEffect(() => {
    setPublicShareStatus({
      isLoading: publicShareView,
      error: ''
    });

    const { targetShareId } = resolveShareLoadTarget({
      pathname,
      routeId: id
    });

    if (targetShareId) {
      const currentRef = { shareId: targetShareId, mode: 'public-share' };
      if (isEqual(prevQueryRef.current, currentRef)) {
        return;
      }

      prevQueryRef.current = currentRef;
      syncCurrentProjectId(null);

      const doLoadSharedMapById = async () => {
        try {
          setPublicShareStatus({ isLoading: true, error: '' });
          const result = await loadSharedMapById({
            shareId: targetShareId,
            dispatch,
            onTitle: title => {
              document.title = title ? `${title} | kepler.gl` : 'kepler.gl';
            }
          });
          if (!document.title || document.title === '主題地図ツール kepler.gl') {
            document.title = result?.title ? `${result.title} | kepler.gl` : 'kepler.gl';
          }
          setPublicShareStatus({ isLoading: false, error: '' });
        } catch (err: any) {
          console.error('[App] Failed to load public share:', err);
          setPublicShareStatus({
            isLoading: false,
            error: err?.message || getAppMessage('status.publicShareLoadError', locale)
          });
        }
      };

      doLoadSharedMapById();
      return;
    }

    const cloudProvider = CLOUD_PROVIDERS.find(c => c.name === provider);
    if (cloudProvider) {
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

    const { targetProjectId, sourceLabel } = resolveProjectLoadTarget({
      query,
      pathname,
      routeId: id
    });

    if (targetProjectId) {
      const currentRef = { provider: DATAVIZ_PROVIDER_NAME, id: targetProjectId };
      if (isEqual(prevQueryRef.current, currentRef)) {
        return;
      }
      prevQueryRef.current = currentRef;
      syncCurrentProjectId(targetProjectId);

      const doLoadProjectById = async () => {
        try {
          await loadProjectById({
            projectId: targetProjectId,
            sourceLabel,
            dispatch,
            cloudProviders: CLOUD_PROVIDERS
          });
        } catch (err: any) {
          console.error(`[App] Failed to load project from ${sourceLabel}:`, err);
        }
      };

      if (customElements.get('dataviz-tool-header')) {
        doLoadProjectById();
      } else {
        customElements.whenDefined('dataviz-tool-header').then(doLoadProjectById);
      }
      return;
    }

    if (id) {
      dispatch(loadSampleConfigurations(id));
    }

    const incomingDataUrl =
      (typeof query.mapUrl === 'string' && query.mapUrl) ||
      (typeof query.data_url === 'string' && query.data_url) ||
      (typeof query.dataUrl === 'string' && query.dataUrl) ||
      null;
    if (incomingDataUrl) {
      dispatch(loadRemoteMap({dataUrl: incomingDataUrl}));
    }

    if (duckDbPluginEnabled && query.sql) {
      dispatch(toggleMapControl('sqlPanel', 0));
      dispatch(toggleModal(null));
    }
  }, [
    id,
    provider,
    query,
    pathname,
    dispatch,
    duckDbPluginEnabled,
    publicShareView,
    syncCurrentProjectId
  ]);

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

  if (publicShareView) {
    const statusMessage = publicShareStatus.error ||
      (publicShareStatus.isLoading ? getAppMessage('status.publicShareLoading', locale) : '');

    return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={theme}>
          <GlobalStyle>
            <div style={PUBLIC_CONTAINER_STYLE}>
              <AutoSizer>
                {({ height, width }) => (
                  <KeplerGl
                    mapboxApiAccessToken={CLOUD_PROVIDERS_CONFIGURATION.MAPBOX_TOKEN}
                    id="map"
                    getState={keplerGlGetState}
                    width={width}
                    height={height}
                    cloudProviders={[]}
                    localeMessages={messages}
                    onLoadCloudMapSuccess={onLoadCloudMapSuccess}
                    featureFlags={DEFAULT_FEATURE_FLAGS}
                    onViewStateChange={onViewStateChange}
                    readOnly={true}
                  />
                )}
              </AutoSizer>
              {publicShareStatus.isLoading ? (
                <div style={PUBLIC_LOADING_MASK_STYLE} />
              ) : null}
              {statusMessage ? (
                <div style={PUBLIC_STATUS_STYLE}>
                  {statusMessage}
                </div>
              ) : null}
            </div>
          </GlobalStyle>
        </ThemeProvider>
      </StyleSheetManager>
    );
  }

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
