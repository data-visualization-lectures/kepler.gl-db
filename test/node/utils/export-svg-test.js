// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import test from 'tape';

import {unzipSync, strFromU8} from 'fflate';
import {
  buildExportSvg,
  buildExportSvgZip,
  countSvgVectorElements,
  getSvgExportMode
} from '@kepler.gl/utils';

const mapState = {
  width: 400,
  height: 300,
  longitude: 0,
  latitude: 0,
  zoom: 1,
  pitch: 0,
  bearing: 0
};

function mockLayer(id, type, visConfig = {}, extra = {}) {
  return {
    id,
    type,
    meta: {},
    config: {
      label: id,
      isVisible: true,
      dataId: 'data',
      visConfig: {opacity: 1, strokeOpacity: 1, thickness: 1, filled: true, ...visConfig}
    },
    shouldRenderLayer: data => Boolean(data && data.data),
    getZoomFactor: () => 1,
    getRadiusScaleByZoom: () => 1,
    getLegendVisualChannels: () => ({}),
    getVisualChannelDescription: () => ({}),
    ...extra
  };
}

const polygonFeature = (index, lng) => ({
  type: 'Feature',
  properties: {index},
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [lng, 0],
        [lng + 10, 0],
        [lng + 10, 10],
        [lng, 10],
        [lng, 0]
      ]
    ]
  }
});

function makeVisState() {
  const geojson = mockLayer('choropleth', 'geojson', {stroked: false});
  const point = mockLayer('points', 'point', {outline: false});
  const arc = mockLayer('arcs', 'arc');
  const heatmap = mockLayer('heat', 'heatmap');
  const hexagon = mockLayer('hex', 'hexagon');

  const layers = [geojson, point, arc, heatmap, hexagon];
  const layerData = [
    {
      data: [polygonFeature(0, 0), polygonFeature(1, 20)],
      getFillColor: f => (f.properties.index === 0 ? [255, 0, 0] : [0, 0, 255]),
      getFiltered: f => f.properties.index === 0
    },
    {
      data: [{index: 0, position: [5, 5]}],
      getPosition: d => d.position,
      getFillColor: [0, 128, 0, 128],
      getRadius: () => 10
    },
    {
      data: [{index: 0, sourcePosition: [0, 0], targetPosition: [30, 10]}],
      getSourceColor: () => [255, 0, 0],
      getTargetColor: () => [0, 0, 255],
      getWidth: () => 3
    },
    {data: {type: 'FeatureCollection', features: []}},
    {data: [{}]}
  ];
  // top to bottom
  const layerOrder = ['points', 'heat', 'hex', 'arcs', 'choropleth'];

  return {layers, layerData, layerOrder, datasets: {data: {}}};
}

test('exportSvg -> getSvgExportMode', t => {
  t.equal(getSvgExportMode(mockLayer('a', 'geojson')), 'vector', 'geojson is vector');
  t.equal(getSvgExportMode(mockLayer('a', 'point')), 'vector', 'point is vector');
  t.equal(getSvgExportMode(mockLayer('a', 'heatmap')), 'raster', 'heatmap is raster');
  t.equal(getSvgExportMode(mockLayer('a', 'hexagon')), 'unsupported', 'hexagon is unsupported');
  t.equal(
    getSvgExportMode(mockLayer('a', 'geojson', {}, {geoArrowMode: true})),
    'unsupported',
    'arrow geojson is unsupported'
  );
  t.end();
});

test('exportSvg -> buildExportSvg', t => {
  const visState = makeVisState();
  const svg = buildExportSvg({
    visState,
    mapState,
    rasters: {basemap: 'data:image/png;base64,BASE', heatmaps: {heat: 'data:image/png;base64,HEAT'}}
  });

  t.ok(svg.includes('width="400" height="300"'), 'should use map size');

  const order = ['id="basemap"', 'id="heat"', 'id="choropleth"', 'id="arcs"', 'id="points"'].map(
    id => svg.indexOf(id)
  );
  t.ok(
    order.every(i => i !== -1),
    'should contain basemap, heatmap and vector groups'
  );
  t.deepEqual(
    order,
    order.slice().sort((a, b) => a - b),
    'should stack basemap -> heatmap -> deck layers from bottom to top'
  );
  t.notOk(svg.includes('id="hex"'), 'should skip unsupported layers');

  t.ok(svg.includes('fill="rgb(255,0,0)"'), 'should draw polygon passing the filter');
  t.notOk(svg.includes('fill="rgb(0,0,255)"'), 'should skip filtered polygon');
  t.ok(
    svg.includes('<circle') && svg.includes('fill-opacity="0.5"'),
    'should draw points with alpha'
  );
  t.ok(
    svg.includes('<linearGradient') && svg.includes('<line'),
    'should draw arcs with gradient between source and target colors'
  );
  t.end();
});

test('exportSvg -> buildExportSvg without basemap and excluded layers', t => {
  const visState = makeVisState();
  const svg = buildExportSvg({visState, mapState, excludedLayerIds: ['points']});

  t.notOk(svg.includes('id="basemap"'), 'should not include basemap when raster is not provided');
  t.notOk(svg.includes('id="heat"'), 'should not include heatmap without raster');
  t.notOk(svg.includes('id="points"'), 'should not include excluded layer');
  t.equal(
    countSvgVectorElements(visState, ['points']),
    3,
    'should count vector elements of rendered vector layers'
  );
  t.end();
});

test('exportSvg -> buildExportSvgZip', t => {
  const visState = makeVisState();
  // 1x1 transparent png
  const png =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  const rasters = {basemap: png, heatmaps: {heat: png, __basemap__: png}};
  const svg = buildExportSvg({visState, mapState, rasters});
  const files = unzipSync(buildExportSvgZip({svg, fileName: 'kepler.gl', visState, rasters}));

  t.deepEqual(
    Object.keys(files).sort(),
    ['basemap.png', 'heatmap-heat.png', 'kepler.gl.svg'],
    'should contain svg, basemap png and one png per heatmap layer'
  );
  t.equal(strFromU8(files['kepler.gl.svg']), svg, 'should keep the svg as is');
  t.deepEqual(
    Array.from(files['basemap.png'].slice(1, 4)),
    [0x50, 0x4e, 0x47],
    'should store decoded png bytes'
  );
  t.end();
});
