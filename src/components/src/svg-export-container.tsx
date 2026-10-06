// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, {useCallback, useEffect, useMemo, useReducer, useRef, useState} from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import {
  buildExportSvg,
  buildExportSvgZip,
  downloadFile,
  exportImageError,
  getExportImageScale,
  getRenderedLayers,
  getSvgExportMode,
  rgbToHex,
  scaleMapStyleByResolution
} from '@kepler.gl/utils';
import {EMPTY_MAPBOX_STYLE, NO_MAP_ID} from '@kepler.gl/constants';
import {ExportImage} from '@kepler.gl/types';
import {
  ActionHandler,
  addNotification,
  cleanupExportImage,
  setExportImageError,
  setExportImageSetting,
  toggleModal
} from '@kepler.gl/actions';

import MapContainerFactory from './map-container';
import {MapViewStateContextProvider} from './map-view-state-context';
import {StyledPlotContainer} from './plot-container';
import {mapFieldsSelector} from './kepler-gl';

type RasterPass = {
  id: string;
  layerOrder: string[];
  isBasemap: boolean;
};

const BASEMAP_PASS_ID = '__basemap__';
// 500ms debounce x 30 = give up waiting after about 15 seconds
const MAX_CAPTURE_RETRY = 30;

const StyledPassContainer = styled.div<{width: number; height: number}>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
`;

/**
 * Compose the map canvases (bottom map, deck.gl, top map) in DOM order into a png.
 * Unlike dom-to-image, css backgrounds are not captured, so transparency is kept.
 */
function captureCanvases(container: HTMLElement, width: number, height: number, bgColor?: string) {
  const output = document.createElement('canvas');
  output.width = width;
  output.height = height;
  const ctx = output.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas 2D context is not available');
  }
  if (bgColor) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
  }
  const base = container.getBoundingClientRect();
  container.querySelectorAll('canvas').forEach(canvas => {
    const rect = canvas.getBoundingClientRect();
    if (canvas.width && canvas.height && rect.width && rect.height) {
      ctx.drawImage(canvas, rect.left - base.left, rect.top - base.top, rect.width, rect.height);
    }
  });
  return output.toDataURL('image/png');
}

type SvgExportContainerProps = {
  exportImage: ExportImage;
  appName: string;
  mapFields: ReturnType<typeof mapFieldsSelector>;
  addNotification: ActionHandler<typeof addNotification>;
  setExportImageError: typeof setExportImageError;
  setExportImageSetting: typeof setExportImageSetting;
  cleanupExportImage: typeof cleanupExportImage;
  toggleModal: typeof toggleModal;
};

SvgExportContainerFactory.deps = [MapContainerFactory];

/**
 * Render basemap and heatmap layers one by one off screen, capture them as png,
 * then compose them with vector layers into a single svg file.
 */
export default function SvgExportContainerFactory(
  MapContainer: ReturnType<typeof MapContainerFactory>
): React.ComponentType<SvgExportContainerProps> {
  function SvgExportContainer({
    exportImage,
    appName,
    mapFields,
    addNotification: onAddNotification,
    setExportImageError: onExportImageError,
    setExportImageSetting: onExportImageSetting,
    cleanupExportImage: onCleanupExportImage,
    toggleModal: onToggleModal
  }: SvgExportContainerProps) {
    const {imageSize, svgBasemap, svgExcludedLayerIds, svgZip, legend} = exportImage;
    const {mapState, visState, mapStyle} = mapFields;
    const passAreaRef = useRef<HTMLDivElement>(null);
    const [rasters, setRasters] = useState<{[id: string]: string}>({});
    const [, forceRender] = useReducer(x => x + 1, 0);

    // passes are fixed when export starts
    const [passes] = useState<RasterPass[]>(() => {
      const heatmapPasses = getRenderedLayers(visState)
        .filter(
          ({layer}) =>
            getSvgExportMode(layer) === 'raster' && !svgExcludedLayerIds.includes(layer.id)
        )
        .map(({layer}) => ({id: layer.id, layerOrder: [layer.id], isBasemap: false}));
      return [
        ...(svgBasemap === 'raster'
          ? [{id: BASEMAP_PASS_ID, layerOrder: [], isBasemap: true}]
          : []),
        ...heatmapPasses
      ];
    });
    const currentPass = passes.find(p => !rasters[p.id]);

    const scale = useMemo(() => getExportImageScale(imageSize, mapState), [imageSize, mapState]);
    const width = imageSize.imageW || 1;
    const height = imageSize.imageH || 1;

    const exportMapState = useMemo(
      () => ({
        ...mapState,
        width,
        height,
        zoom: mapState.zoom + (Math.log2(scale) || 0)
      }),
      [mapState, width, height, scale]
    );

    const scaledMapStyle = useMemo(
      () => ({
        ...mapStyle,
        bottomMapStyle: scaleMapStyleByResolution(mapStyle.bottomMapStyle, scale),
        topMapStyle: scaleMapStyleByResolution(mapStyle.topMapStyle, scale)
      }),
      [mapStyle, scale]
    );
    const basemapBgColor =
      mapStyle.styleType === NO_MAP_ID && mapStyle.backgroundColor
        ? rgbToHex(mapStyle.backgroundColor)
        : undefined;

    const handleError = useCallback(
      err => {
        onExportImageError(err);
        onAddNotification(exportImageError({err}));
        onExportImageSetting({svgExporting: false});
      },
      [onExportImageError, onAddNotification, onExportImageSetting]
    );

    // all rasters are ready: build svg and download
    useEffect(() => {
      if (currentPass) {
        return;
      }
      try {
        const svgRasters = {basemap: rasters[BASEMAP_PASS_ID], heatmaps: rasters};
        const svg = buildExportSvg({
          visState,
          mapState: exportMapState,
          rasters: svgRasters,
          excludedLayerIds: svgExcludedLayerIds,
          legend,
          pixelRatio: scale
        });
        if (svgZip) {
          const zip = buildExportSvgZip({svg, fileName: appName, visState, rasters: svgRasters});
          downloadFile(new Blob([zip], {type: 'application/zip'}), `${appName}.zip`);
        } else {
          downloadFile(new Blob([svg], {type: 'image/svg+xml'}), `${appName}.svg`);
        }
        onCleanupExportImage();
        onToggleModal(null);
      } catch (err) {
        handleError(err);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPass]);

    // wait until the map stops rendering, all sources are loaded and the heatmap layer is added.
    // render events stop once the map is idle, so re-check until it is ready.
    // An inline empty style loads before map-container binds `style.load`, and map-container
    // only adds heatmap layers on re-render then, so re-render until the layer exists
    const captureCurrentPass = useMemo(() => {
      const capture = debounce((pass: RasterPass, map, retry = 0) => {
        const layerAdded = pass.isBasemap || Boolean(map.getLayer(pass.id));
        if (!passAreaRef.current) {
          return;
        }
        if ((!layerAdded || !map.loaded()) && retry < MAX_CAPTURE_RETRY) {
          if (!layerAdded) {
            forceRender();
          }
          capture(pass, map, retry + 1);
          return;
        }
        try {
          const dataUri = captureCanvases(
            passAreaRef.current,
            width,
            height,
            pass.isBasemap ? basemapBgColor : undefined
          );
          setRasters(prev => ({...prev, [pass.id]: dataUri}));
        } catch (err) {
          handleError(err);
        }
      }, 500);
      return capture;
    }, [width, height, basemapBgColor, handleError]);

    const currentPassId = currentPass?.id;
    useEffect(() => () => captureCurrentPass.cancel(), [captureCurrentPass, currentPassId]);

    const onMapRender = useCallback(
      map => {
        if (currentPass) {
          captureCurrentPass(currentPass, map);
        }
      },
      [currentPass, captureCurrentPass]
    );

    if (!currentPass) {
      return null;
    }

    const mapProps = {
      ...mapFields,
      getMapboxRef: undefined,
      mapStyle: currentPass.isBasemap
        ? scaledMapStyle
        : {...scaledMapStyle, bottomMapStyle: EMPTY_MAPBOX_STYLE, topMapStyle: null},
      mapState: exportMapState,
      mapControls: {mapLegend: {show: false, active: false}},
      onMapRender,
      isExport: true,
      deckGlProps: {
        ...mapFields.deckGlProps,
        glOptions: {
          preserveDrawingBuffer: true,
          useDevicePixels: false
        }
      },
      visState: {
        ...visState,
        effects: [],
        layerOrder: currentPass.layerOrder
      }
    };

    return (
      <StyledPlotContainer className="export-map-instance">
        <StyledPassContainer ref={passAreaRef} width={width} height={height}>
          <MapViewStateContextProvider mapState={exportMapState}>
            <MapContainer key={currentPass.id} index={0} primary={true} {...mapProps} />
          </MapViewStateContextProvider>
        </StyledPassContainer>
      </StyledPlotContainer>
    );
  }

  return React.memo(SvgExportContainer);
}
