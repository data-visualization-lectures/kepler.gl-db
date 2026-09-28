// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import WebMercatorViewport, {getDistanceScales} from 'viewport-mercator-project';
import {strToU8, zipSync, Zippable} from 'fflate';
import {atob} from 'global/window';
import {CHANNEL_SCALES, PROJECTED_PIXEL_SIZE_MULTIPLIER, SCALE_TYPES} from '@kepler.gl/constants';
import {MapState} from '@kepler.gl/types';

import {
  getLayerColorScale,
  getLegendOfScale,
  getVisualChannelScaleByZoom,
  colorMapToCategoricalColorBreaks
} from './data-scale-utils';

export type SvgExportMode = 'vector' | 'raster' | 'unsupported';

export type SvgRasters = {
  basemap?: string | null;
  heatmaps?: {[layerId: string]: string};
};

type RGBA = number[];

const VECTOR_LAYER_TYPES = ['geojson', 'point', 'arc', 'line'];
const RASTER_LAYER_TYPES = ['heatmap'];
const POINT_RADIUS_MAX_PIXELS = 500;
const CLIP_MARGIN = 50;
const LEGEND_FONT = "'Noto Sans JP', 'Hiragino Sans', 'Helvetica Neue', Arial, sans-serif";

function isArrowLayer(layer): boolean {
  return Boolean(
    layer.geoArrowMode || layer.geoArrowVector || layer.geoArrowVector0 || layer.geoArrowVector1
  );
}

export function getSvgExportMode(layer): SvgExportMode {
  if (RASTER_LAYER_TYPES.includes(layer.type)) {
    return 'raster';
  }
  if (VECTOR_LAYER_TYPES.includes(layer.type) && !isArrowLayer(layer)) {
    return 'vector';
  }
  return 'unsupported';
}

function isLayerRendered(layer, data): boolean {
  return Boolean(layer.config.isVisible && data && layer.shouldRenderLayer(data));
}

/**
 * Layers rendered on the map, ordered from top to bottom like `visState.layerOrder`
 */
export function getRenderedLayers(visState): {layer: any; data: any}[] {
  const {layers, layerData, layerOrder} = visState;
  return layerOrder
    .map(id => {
      const idx = layers.findIndex(l => l.id === id);
      return idx === -1 ? null : {layer: layers[idx], data: layerData[idx]};
    })
    .filter(item => item && isLayerRendered(item.layer, item.data));
}

export function countSvgVectorElements(visState, excludedLayerIds: string[] = []): number {
  return getRenderedLayers(visState).reduce((acc, {layer, data}) => {
    if (excludedLayerIds.includes(layer.id) || getSvgExportMode(layer) !== 'vector') {
      return acc;
    }
    return acc + (Array.isArray(data?.data) ? data.data.length : 0);
  }, 0);
}

const round = (n: number) => Math.round(n * 10) / 10;

export function escapeXml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toSvgId(label: string, used: Set<string>): string {
  const base = String(label || 'layer')
    .trim()
    .replace(/[\s"'<>&#]+/g, '_')
    .replace(/^([^A-Za-z_\u00C0-\uFFFF])/, '_$1');
  let id = base || 'layer';
  let i = 2;
  while (used.has(id)) {
    id = `${base}_${i++}`;
  }
  used.add(id);
  return id;
}

function resolveAccessor(layerData, accessor: string, zoom: number) {
  const acc = layerData[accessor];
  if (layerData[`${accessor}ByZoom`] && typeof acc === 'function') {
    return acc(zoom);
  }
  return acc;
}

function valueOf(acc, d, fallback?) {
  if (typeof acc === 'function') {
    return acc(d);
  }
  return acc === undefined ? fallback : acc;
}

function colorAttrs(
  kind: 'fill' | 'stroke' | 'stop',
  color: RGBA | null | undefined,
  opacity: number
) {
  const colorAttr = kind === 'stop' ? 'stop-color' : kind;
  if (!Array.isArray(color) || color.length < 3) {
    return `${colorAttr}="none"`;
  }
  const alpha = (color.length > 3 ? color[3] / 255 : 1) * opacity;
  const rgb = `rgb(${Math.round(color[0])},${Math.round(color[1])},${Math.round(color[2])})`;
  return alpha < 1
    ? `${colorAttr}="${rgb}" ${kind}-opacity="${Math.round(alpha * 100) / 100}"`
    : `${colorAttr}="${rgb}"`;
}

/**
 * Evaluate the gpu filters (DataFilterExtension) on CPU, which are not included in `filteredIndex`
 */
function getFilterTest(layerData, gpuFilter) {
  const {getFilterValue, getFiltered} = layerData;
  const hasGpuFilter =
    gpuFilter &&
    typeof getFilterValue === 'function' &&
    Object.values(gpuFilter.filterValueUpdateTriggers || {}).some(Boolean);

  return d => {
    if (typeof getFiltered === 'function' && !getFiltered(d)) {
      return false;
    }
    if (!hasGpuFilter) {
      return true;
    }
    const values = getFilterValue(d);
    if (!Array.isArray(values) || Array.isArray(values[0])) {
      return true;
    }
    return values.every((v, i) => {
      const range = gpuFilter.filterRange[i];
      return !range || (v >= range[0] && v <= range[1]);
    });
  };
}

type Projector = {
  project: (coord: number[]) => number[];
  pixelsPerMeter: number;
  width: number;
  height: number;
};

function createProjector(mapState: MapState): Projector {
  const viewport = new WebMercatorViewport(mapState);
  // @ts-ignore this actually exist
  const {pixelsPerMeter} = getDistanceScales(mapState);
  return {
    project: coord => viewport.project([coord[0], coord[1]]),
    pixelsPerMeter: pixelsPerMeter[0],
    width: mapState.width,
    height: mapState.height
  };
}

function extent(values: number[]): [number, number] {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < values.length; i++) {
    if (values[i] < min) min = values[i];
    if (values[i] > max) max = values[i];
  }
  return [min, max];
}

function isOutside(projector: Projector, xs: number[], ys: number[], pad = 0) {
  const m = CLIP_MARGIN + pad;
  const [minX, maxX] = extent(xs);
  const [minY, maxY] = extent(ys);
  return maxX < -m || minX > projector.width + m || maxY < -m || minY > projector.height + m;
}

function ringsToPath(projector: Projector, rings: number[][][], close: boolean): string | null {
  const xs: number[] = [];
  const ys: number[] = [];
  const parts = rings
    .filter(ring => Array.isArray(ring) && ring.length > 1)
    .map(ring => {
      const pts = ring.map(coord => {
        const [x, y] = projector.project(coord);
        xs.push(x);
        ys.push(y);
        return `${round(x)} ${round(y)}`;
      });
      return `M${pts.join('L')}${close ? 'Z' : ''}`;
    });
  if (!parts.length || isOutside(projector, xs, ys)) {
    return null;
  }
  return parts.join('');
}

function circleElement(projector: Projector, coord: number[], radius: number, attrs: string) {
  const [x, y] = projector.project(coord);
  if (!Number.isFinite(x) || !Number.isFinite(y) || isOutside(projector, [x], [y], radius)) {
    return null;
  }
  return `<circle cx="${round(x)}" cy="${round(y)}" r="${round(Math.max(radius, 0))}" ${attrs}/>`;
}

function geojsonLayerToSvg(layer, layerData, mapState: MapState, projector: Projector, gpuFilter) {
  const {visConfig} = layer.config;
  const {zoom} = mapState;
  const zoomFactor = layer.getZoomFactor(mapState);
  const lineWidthScale = visConfig.thickness * zoomFactor * 8 * projector.pixelsPerMeter;
  const pointRadiusScale =
    layer.getRadiusScaleByZoom(mapState, layer.meta?.fixedRadius) * projector.pixelsPerMeter;

  const getFillColor = resolveAccessor(layerData, 'getFillColor', zoom);
  const getLineColor = resolveAccessor(layerData, 'getLineColor', zoom);
  const getLineWidth = resolveAccessor(layerData, 'getLineWidth', zoom);
  const getPointRadius = resolveAccessor(layerData, 'getPointRadius', zoom);
  const passFilter = getFilterTest(layerData, gpuFilter);

  const elements: string[] = [];
  (layerData.data || []).forEach(feature => {
    if (!feature?.geometry || !passFilter(feature)) {
      return;
    }
    const fill = visConfig.filled
      ? colorAttrs('fill', valueOf(getFillColor, feature), visConfig.opacity)
      : 'fill="none"';
    const lineColor = valueOf(getLineColor, feature);
    const lineWidth = valueOf(getLineWidth, feature, 1) * lineWidthScale;
    const stroke = `${colorAttrs(
      'stroke',
      lineColor,
      visConfig.strokeOpacity ?? 1
    )} stroke-width="${round(lineWidth * 100) / 100}"`;

    const visit = geometry => {
      const {type, coordinates} = geometry;
      switch (type) {
        case 'Polygon':
        case 'MultiPolygon': {
          const polygons = type === 'Polygon' ? [coordinates] : coordinates;
          const d = polygons
            .map(rings => ringsToPath(projector, rings, true))
            .filter(Boolean)
            .join('');
          if (d) {
            const strokeAttr = visConfig.stroked ? ` ${stroke} stroke-linejoin="round"` : '';
            elements.push(`<path d="${d}" fill-rule="evenodd" ${fill}${strokeAttr}/>`);
          }
          break;
        }
        case 'LineString':
        case 'MultiLineString': {
          const lines = type === 'LineString' ? [coordinates] : coordinates;
          const d = ringsToPath(projector, lines, false);
          if (d) {
            elements.push(
              `<path d="${d}" fill="none" ${stroke} stroke-linecap="round" stroke-linejoin="round"/>`
            );
          }
          break;
        }
        case 'Point':
        case 'MultiPoint': {
          const points = type === 'Point' ? [coordinates] : coordinates;
          const radius = valueOf(getPointRadius, feature, 1) * pointRadiusScale;
          const strokeAttr = visConfig.stroked ? ` ${stroke}` : '';
          points.forEach(coord => {
            const el = circleElement(projector, coord, radius, `${fill}${strokeAttr}`);
            if (el) elements.push(el);
          });
          break;
        }
        case 'GeometryCollection':
          (geometry.geometries || []).forEach(visit);
          break;
        default:
          break;
      }
    };
    visit(feature.geometry);
  });
  return elements;
}

function pointLayerToSvg(layer, layerData, mapState: MapState, projector: Projector, gpuFilter) {
  const {visConfig} = layer.config;
  const {zoom} = mapState;
  const fixedRadius = visConfig.fixedRadius && Boolean(layer.config.sizeField);
  const radiusScale = layer.getRadiusScaleByZoom(mapState, fixedRadius) * projector.pixelsPerMeter;
  const maxRadius = visConfig.fixedRadius ? Infinity : POINT_RADIUS_MAX_PIXELS;

  const getFillColor = resolveAccessor(layerData, 'getFillColor', zoom);
  const getLineColor = resolveAccessor(layerData, 'getLineColor', zoom);
  const getRadius = resolveAccessor(layerData, 'getRadius', zoom);
  const passFilter = getFilterTest(layerData, gpuFilter);
  const getPosition = layerData.getPosition || (d => d.position);

  const elements: string[] = [];
  (layerData.data || []).forEach(d => {
    if (!passFilter(d)) {
      return;
    }
    const radius = Math.min(valueOf(getRadius, d, 1) * radiusScale, maxRadius);
    const fill = visConfig.filled
      ? colorAttrs('fill', valueOf(getFillColor, d), visConfig.opacity)
      : 'fill="none"';
    const stroke = visConfig.outline
      ? ` ${colorAttrs('stroke', valueOf(getLineColor, d), visConfig.opacity)} stroke-width="${
          visConfig.thickness
        }"`
      : '';
    const el = circleElement(projector, getPosition(d), radius, `${fill}${stroke}`);
    if (el) elements.push(el);
  });
  return elements;
}

function linkLayerToSvg(
  layer,
  layerData,
  mapState: MapState,
  projector: Projector,
  gpuFilter,
  gradientPrefix: string,
  defs: string[]
) {
  const {visConfig} = layer.config;
  const {zoom} = mapState;
  const widthScale = visConfig.thickness * PROJECTED_PIXEL_SIZE_MULTIPLIER;
  const sourceAccessor = layer.type === 'line' ? 'getColor' : 'getSourceColor';

  const getSourceColor = resolveAccessor(layerData, sourceAccessor, zoom);
  const getTargetColor = resolveAccessor(layerData, 'getTargetColor', zoom);
  const getWidth = resolveAccessor(layerData, 'getWidth', zoom);
  const passFilter = getFilterTest(layerData, gpuFilter);

  const elements: string[] = [];
  (layerData.data || []).forEach((d, i) => {
    if (!passFilter(d) || !d.sourcePosition || !d.targetPosition) {
      return;
    }
    const [x1, y1] = projector.project(d.sourcePosition);
    const [x2, y2] = projector.project(d.targetPosition);
    if (![x1, y1, x2, y2].every(Number.isFinite) || isOutside(projector, [x1, x2], [y1, y2])) {
      return;
    }
    const width = valueOf(getWidth, d, 1) * widthScale;
    const sourceColor = valueOf(getSourceColor, d);
    const targetColor = getTargetColor === undefined ? sourceColor : valueOf(getTargetColor, d);
    const sameColor = String(sourceColor) === String(targetColor);
    const coords = `x1="${round(x1)}" y1="${round(y1)}" x2="${round(x2)}" y2="${round(y2)}"`;

    let stroke: string;
    if (sameColor) {
      stroke = colorAttrs('stroke', sourceColor, visConfig.opacity);
    } else {
      const gradientId = `${gradientPrefix}-${i}`;
      const stop = (offset, color) =>
        `<stop offset="${offset}" ${colorAttrs('stop', color, visConfig.opacity)}/>`;
      defs.push(
        `<linearGradient id="${gradientId}" gradientUnits="userSpaceOnUse" ${coords}>${stop(
          0,
          sourceColor
        )}${stop(1, targetColor)}</linearGradient>`
      );
      stroke = `stroke="url(#${gradientId})"`;
    }
    elements.push(
      `<line ${coords} ${stroke} stroke-width="${
        round(width * 100) / 100
      }" stroke-linecap="round"/>`
    );
  });
  return elements;
}

function vectorLayerToSvg(layer, layerData, mapState, projector, gpuFilter, gradientPrefix, defs) {
  switch (layer.type) {
    case 'geojson':
      return geojsonLayerToSvg(layer, layerData, mapState, projector, gpuFilter);
    case 'point':
      return pointLayerToSvg(layer, layerData, mapState, projector, gpuFilter);
    case 'arc':
    case 'line':
      return linkLayerToSvg(layer, layerData, mapState, projector, gpuFilter, gradientPrefix, defs);
    default:
      return [];
  }
}

function imageElement(dataUri: string, width: number, height: number) {
  return `<image x="0" y="0" width="${width}" height="${height}" preserveAspectRatio="none" xlink:href="${dataUri}"/>`;
}

function group(id: string, name: string, content: string) {
  return `<g id="${escapeXml(id)}" data-name="${escapeXml(name)}">${content}</g>`;
}

type LegendItem = {color: string; label: string};
type LegendSection = {title: string; subtitle?: string; items: LegendItem[]};

const isColorChannel = vc =>
  [CHANNEL_SCALES.color, CHANNEL_SCALES.colorAggr].includes(vc.channelScaleType);

function overrideLegendLabels(legends, colorLegends) {
  if (!colorLegends || typeof colorLegends !== 'object') {
    return legends;
  }
  const result = [...legends];
  Object.entries(colorLegends).forEach(([data, label]) => {
    const idx = result.findIndex(d => d.data === data);
    if (idx !== -1) {
      result[idx] = {data, label};
    } else {
      result.push({data, label});
    }
  });
  return result;
}

function getColorChannelLegends(layer, channel, mapState): LegendItem[] {
  const {config} = layer;
  const scaleType = config[channel.scale];
  const range = config.visConfig[channel.range];
  const domain = config[channel.domain];
  const field = config[channel.field];
  const isFixed = channel.fixed && config.visConfig[channel.fixed];

  let legends;
  if (scaleType === SCALE_TYPES.customOrdinal && range?.colorMap) {
    legends = (colorMapToCategoricalColorBreaks(range.colorMap) || []).map(cb => ({
      data: cb.data,
      label: Array.isArray(cb.label) ? cb.label.join(', ') : cb.label ?? ''
    }));
  } else {
    const scale = getLayerColorScale({range, domain, scaleType, isFixed, layer});
    const scaleByZoom = getVisualChannelScaleByZoom({scale, layer, mapState});
    legends = getLegendOfScale({
      scale: scaleByZoom,
      scaleType,
      fieldType: (field && field.type) || 'real'
    });
  }
  return overrideLegendLabels(legends, range?.colorLegends).map(l => ({
    color: String(l.data),
    label: Array.isArray(l.label) ? l.label.join(', ') : String(l.label ?? '')
  }));
}

function rgbArrayToCss(color) {
  return Array.isArray(color) ? `rgb(${color.slice(0, 3).join(',')})` : String(color);
}

/**
 * Same channel selection as `LayerLegendContent` in map-legend.tsx
 */
export function getSvgLegendSections(layers: any[], mapState: MapState): LegendSection[] {
  return layers
    .filter(layer => !layer.config.hidden)
    .map(layer => {
      const channels = Object.values(layer.getLegendVisualChannels()).filter(isColorChannel);
      const matched = channels.filter(
        (cc: any) => !cc.condition || cc.condition(layer.config)
      ) as any[];
      const measured = matched.filter(cc => layer.getVisualChannelDescription(cc.key)?.measure);
      const toRender = measured.length ? measured : matched;

      const items: LegendItem[] = [];
      let subtitle: string | undefined;
      toRender.forEach(cc => {
        const measure = layer.getVisualChannelDescription(cc.key)?.measure;
        if (measure) {
          subtitle = subtitle || measure;
          try {
            items.push(...getColorChannelLegends(layer, cc, mapState));
          } catch {
            const colors = layer.config.visConfig[cc.range]?.colors || [];
            items.push(...colors.map(color => ({color, label: ''})));
          }
        } else {
          const color =
            layer.config.visConfig[cc.property] || layer.config[cc.property] || layer.config.color;
          items.push({color: rgbArrayToCss(color), label: ''});
        }
      });
      return {title: layer.config.label || '', subtitle, items};
    })
    .filter(section => section.items.length);
}

function legendToSvg(sections: LegendSection[], width: number, pixelRatio: number) {
  if (!sections.length) {
    return '';
  }
  const s = pixelRatio;
  const pad = 10 * s;
  const rowH = 16 * s;
  const swatch = 12 * s;
  const boxW = 200 * s;
  const fontSize = 11 * s;
  const titleSize = 12 * s;
  const x0 = width - boxW - pad;
  let y = pad * 2;
  const rows: string[] = [];

  sections.forEach(section => {
    y += titleSize;
    rows.push(
      `<text x="${x0 + pad}" y="${y}" font-size="${titleSize}" font-weight="bold">${escapeXml(
        section.title
      )}</text>`
    );
    if (section.subtitle) {
      y += rowH;
      rows.push(
        `<text x="${x0 + pad}" y="${y}" font-size="${fontSize}" fill="#666">${escapeXml(
          section.subtitle
        )}</text>`
      );
    }
    y += s * 4;
    section.items.forEach(item => {
      rows.push(
        `<rect x="${x0 + pad}" y="${y}" width="${
          swatch * 1.6
        }" height="${swatch}" fill="${escapeXml(item.color)}"/>`
      );
      if (item.label) {
        rows.push(
          `<text x="${x0 + pad + swatch * 2}" y="${
            y + swatch - 2 * s
          }" font-size="${fontSize}">${escapeXml(item.label)}</text>`
        );
      }
      y += rowH;
    });
    y += pad / 2;
  });

  const boxH = y - pad + pad / 2;
  return `<rect x="${x0}" y="${pad}" width="${boxW}" height="${boxH}" fill="#fff" fill-opacity="0.9"/><g font-family="${escapeXml(
    LEGEND_FONT
  )}" fill="#29323c">${rows.join('')}</g>`;
}

export type BuildExportSvgOptions = {
  visState: any;
  mapState: MapState;
  rasters?: SvgRasters;
  excludedLayerIds?: string[];
  legend?: boolean;
  pixelRatio?: number;
  basemapName?: string;
};

/**
 * Build an SVG string of the map.
 * Groups are stacked in the same order as the map is drawn:
 * basemap (raster) -> heatmap layers (raster, drawn in basemap canvas) -> deck.gl layers -> legend
 * @param options.mapState - export map state, width / height / zoom already scaled to the image size
 */
export function buildExportSvg({
  visState,
  mapState,
  rasters = {},
  excludedLayerIds = [],
  legend = false,
  pixelRatio = 1,
  basemapName = 'basemap'
}: BuildExportSvgOptions): string {
  const {width, height} = mapState;
  const projector = createProjector(mapState);
  const usedIds = new Set<string>();
  const defs: string[] = [];

  const rendered = getRenderedLayers(visState).filter(
    ({layer}) => !excludedLayerIds.includes(layer.id) && getSvgExportMode(layer) !== 'unsupported'
  );
  const bottomToTop = rendered.slice().reverse();

  const groups: string[] = [];
  if (rasters.basemap) {
    groups.push(
      group(
        toSvgId(basemapName, usedIds),
        basemapName,
        imageElement(rasters.basemap, width, height)
      )
    );
  }

  bottomToTop
    .filter(({layer}) => getSvgExportMode(layer) === 'raster')
    .forEach(({layer}) => {
      const dataUri = rasters.heatmaps?.[layer.id];
      if (dataUri) {
        const label = layer.config.label || layer.type;
        groups.push(group(toSvgId(label, usedIds), label, imageElement(dataUri, width, height)));
      }
    });

  bottomToTop
    .filter(({layer}) => getSvgExportMode(layer) === 'vector')
    .forEach(({layer, data}) => {
      const label = layer.config.label || layer.type;
      const id = toSvgId(label, usedIds);
      const gpuFilter = visState.datasets?.[layer.config.dataId]?.gpuFilter;
      const elements = vectorLayerToSvg(
        layer,
        data,
        mapState,
        projector,
        gpuFilter,
        `${id}-grad`,
        defs
      );
      groups.push(group(id, label, elements.join('')));
    });

  if (legend) {
    const legendSvg = legendToSvg(
      getSvgLegendSections(
        rendered.map(({layer}) => layer),
        mapState
      ),
      width,
      pixelRatio
    );
    if (legendSvg) {
      groups.push(group(toSvgId('legend', usedIds), 'legend', legendSvg));
    }
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    defs.length ? `<defs>${defs.join('')}</defs>` : '',
    groups.join('\n'),
    '</svg>'
  ].join('\n');
}

function dataUriToBytes(dataUri: string): Uint8Array {
  const binary = atob(dataUri.split(',')[1]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function toFileName(name: string): string {
  return (
    String(name)
      .trim()
      .replace(/[\\/:*?"<>|\s]+/g, '_') || 'layer'
  );
}

/**
 * Zip the svg together with its raster parts as separate png files
 */
export function buildExportSvgZip({
  svg,
  fileName,
  visState,
  rasters = {}
}: {
  svg: string;
  fileName: string;
  visState: any;
  rasters?: SvgRasters;
}): Uint8Array {
  // png is already compressed, so store it without compression
  const files: Zippable = {[`${fileName}.svg`]: strToU8(svg)};
  if (rasters.basemap) {
    files['basemap.png'] = [dataUriToBytes(rasters.basemap), {level: 0}];
  }
  Object.entries(rasters.heatmaps || {}).forEach(([layerId, dataUri]) => {
    const layer = visState.layers.find(l => l.id === layerId);
    if (layer && dataUri) {
      let name = `heatmap-${toFileName(layer.config.label || layer.id)}.png`;
      for (let i = 2; files[name]; i++) {
        name = `heatmap-${toFileName(layer.config.label || layer.id)}_${i}.png`;
      }
      files[name] = [dataUriToBytes(dataUri), {level: 0}];
    }
  });
  return zipSync(files);
}
