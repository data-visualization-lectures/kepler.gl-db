"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _locales = require("../locales");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
var _default = exports["default"] = {
  property: {
    weight: 'weight',
    label: 'label',
    fillColor: 'fill color',
    color: 'color',
    coverage: 'coverage',
    strokeColor: 'stroke color',
    radius: 'radius',
    outline: 'outline',
    stroke: 'stroke',
    density: 'density',
    height: 'height',
    sum: 'sum',
    pointCount: 'Point Count'
  },
  placeholder: {
    search: 'Search',
    selectField: 'Select a field',
    yAxis: 'Y Axis',
    selectType: 'Select A Type',
    selectValue: 'Select A Value',
    enterValue: 'Enter a value',
    empty: 'empty',
    selectLayer: 'Select a layer'
  },
  misc: {
    by: '',
    valuesIn: 'Values in',
    valueEquals: 'Value equals',
    dataSource: 'Data Source',
    brushRadius: 'Brush Radius (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Map Layers',
    label: 'Label',
    road: 'Road',
    border: 'Border',
    building: 'Building',
    water: 'Water',
    land: 'Land',
    '3dBuilding': '3d Building',
    background: 'Background'
  },
  panel: {
    text: {
      label: 'label',
      labelWithId: 'Label {labelId}',
      fontSize: 'Font size',
      fontColor: 'Font color',
      backgroundColor: 'Background color',
      textAnchor: 'Text anchor',
      alignment: 'Alignment',
      addMoreLabel: 'Add More Label',
      outlineWidth: 'Outline width',
      outlineColor: 'Outline color'
    }
  },
  sidebar: {
    panels: {
      layer: 'Layers',
      filter: 'Filters',
      interaction: 'Interactions',
      basemap: 'Base map'
    },
    panelViewToggle: {
      list: 'View List',
      byDataset: 'View by Dataset'
    }
  },
  layer: {
    required: 'Required*',
    columnModesSeparator: 'Or',
    radius: 'Radius',
    color: 'Color',
    fillColor: 'Fill Color',
    outline: 'Outline',
    weight: 'Weight',
    propertyBasedOn: '{property} based on',
    coverage: 'Coverage',
    stroke: 'Stroke',
    strokeWidth: 'Stroke Width',
    strokeColor: 'Stroke Color',
    basic: 'Basic',
    trailLength: 'Trail Length',
    trailLengthDescription: 'Number of seconds for a path to completely fade out',
    newLayer: 'new layer',
    elevationByDescription: 'When off, height is based on count of points',
    colorByDescription: 'When off, color is based on count of points',
    aggregateBy: 'Aggregate {field} by',
    '3DModel': '3D Model',
    '3DModelOptions': '3D Model Options',
    service: 'Service',
    layer: 'Layer',
    appearance: 'Appearance',
    uniqueIdField: 'Unique ID Field',
    type: {
      point: 'point',
      arc: 'arc',
      line: 'line',
      grid: 'grid',
      hexbin: 'hexbin',
      polygon: 'polygon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icon',
      heatmap: 'heatmap',
      hexagon: 'hexagon',
      hexagonid: 'H3',
      trip: 'trip',
      s2: 'S2',
      '3d': '3D',
      vectortile: 'vector tile',
      rastertile: 'raster tile',
      wms: 'WMS'
    },
    wms: {
      hover: 'Value:'
    },
    layerUpdateError: 'An error occurred during layer update: {errorMessage}. Make sure the format of the input data is valid.',
    interaction: 'Interaction'
  },
  layerVisConfigs: {
    angle: 'Angle',
    strokeWidth: 'Stroke Width (Pixels)',
    strokeWidthRange: 'Stroke Width Range',
    radius: 'Radius',
    fixedRadius: 'Fixed Radius to meter',
    fixedRadiusDescription: 'Map radius to absolute radius in meters, e.g. 5 to 5 meters',
    radiusRange: 'Radius Range',
    clusterRadius: 'Cluster Radius in Pixels',
    radiusRangePixels: 'Radius Range in pixels',
    billboard: 'Billboard',
    billboardDescription: 'Orient geometry towards the camera',
    fadeTrail: 'Fade trail',
    opacity: 'Opacity',
    coverage: 'Coverage',
    outline: 'Outline',
    colorRange: 'Color range',
    stroke: 'Stroke',
    strokeColor: 'Stroke Color',
    strokeColorRange: 'Stroke Color range',
    targetColor: 'Target Color',
    colorAggregation: 'Color Aggregation',
    heightAggregation: 'Height Aggregation',
    resolutionRange: 'Resolution range',
    sizeScale: 'Size Scale',
    worldUnitSize: 'World Unit Size',
    elevationScale: 'Elevation Scale',
    enableElevationZoomFactor: 'Use elevation zoom factor',
    enableElevationZoomFactorDescription: 'Adjust height/elevation based on current zoom factor',
    enableHeightZoomFactor: 'Use height zoom factor',
    heightScale: 'Height Scale',
    coverageRange: 'Coverage Range',
    highPrecisionRendering: 'High Precision Rendering',
    highPrecisionRenderingDescription: 'High precision will result in slower performance',
    height: 'Height',
    heightDescription: 'Click button at top right of the map to switch to 3d view',
    fill: 'Fill',
    enablePolygonHeight: 'Enable Polygon Height',
    showWireframe: 'Show Wireframe',
    weightIntensity: 'Weight Intensity',
    zoomScale: 'Zoom Scale',
    heightRange: 'Height Range',
    heightMultiplier: 'Height Multiplier',
    fixedHeight: 'Fixed height',
    fixedHeightDescription: 'Use height without modifications',
    allowHover: 'Allow Hover',
    showNeighborOnHover: 'Highlight Neighbors On Hover',
    showHighlightColor: 'Show highlight Color',
    darkModeEnabled: 'Dark base map',
    transparentBackground: 'Transparent Background'
  },
  layerManager: {
    addData: 'Add Data',
    addLayer: 'Add Layer',
    layerBlending: 'Layer Blending',
    overlayBlending: 'Overlay Blending'
  },
  mapManager: {
    mapStyle: 'Map style',
    addMapStyle: 'Add Map Style',
    '3dBuildingColor': '3D Building Color',
    backgroundColor: 'Background Color'
  },
  effectManager: {
    effects: 'Effects',
    addEffect: 'Add effect',
    pickDateTime: 'Pick date/time',
    currentTime: 'Current time',
    pickCurrrentTime: 'Pick current time',
    date: 'Date',
    time: 'Time',
    timezone: 'Timezone'
  },
  layerConfiguration: {
    defaultDescription: 'Calculate {property} based on selected field',
    howTo: 'How to',
    showColorChart: 'Show Color Chart',
    hideColorChart: 'Hide Color Chart'
  },
  filterManager: {
    addFilter: 'Add Filter',
    timeFilterSync: 'Synced datasets',
    timeLayerSync: 'Link with the layer timeline',
    timeLayerUnsync: 'Unlink with the layer timeline',
    column: 'Column'
  },
  datasetTitle: {
    showDataTable: 'Show data table',
    removeDataset: 'Remove dataset'
  },
  datasetInfo: {
    rowCount: '{rowCount} rows',
    vectorTile: 'Vector tile',
    rasterTile: 'Raster tile',
    wmsTile: 'WMS tile'
  },
  tooltip: {
    hideLayer: 'Hide layer',
    showLayer: 'Show layer',
    hideFeature: 'Hide feature',
    showFeature: 'Show feature',
    hide: 'hide',
    show: 'show',
    removeLayer: 'Remove layer',
    duplicateLayer: 'Duplicate layer',
    zoomToLayer: 'Zoom to layer',
    resetAfterError: 'Try to enable the layer after an error',
    layerSettings: 'Layer settings',
    closePanel: 'Close current panel',
    switchToDualView: 'Switch to dual map view',
    showLegend: 'Show legend',
    disable3DMap: 'Disable 3D Map',
    DrawOnMap: 'Draw on map',
    selectLocale: 'Select locale',
    showAiAssistantPanel: 'Show AI Assistant',
    hideAiAssistantPanel: 'Hide AI Assistant',
    hideLayerPanel: 'Hide layer panel',
    showLayerPanel: 'Show layer panel',
    moveToTop: 'Move to top of data layers',
    selectBaseMapStyle: 'Select base map style',
    removeBaseMapStyle: 'Remove base map style',
    "delete": 'Delete',
    timePlayback: 'Time Playback',
    timeFilterSync: 'Sync with a column from another dataset',
    cloudStorage: 'Cloud Storage',
    '3DMap': '3D Map',
    animationByWindow: 'Moving Time Window',
    animationByIncremental: 'Incremental Time Window',
    speed: 'speed',
    play: 'play',
    pause: 'pause',
    reset: 'reset',
    "export": 'export',
    timeLayerSync: 'Link with the layer timeline',
    timeLayerUnsync: 'Unlink with the layer timeline',
    syncTimelineStart: 'Start of current filter timeframe',
    syncTimelineEnd: 'End of current filter timeframe',
    showEffectPanel: 'Show effect panel',
    hideEffectPanel: 'Hide effect panel',
    removeEffect: 'Remove effect',
    disableEffect: 'Disable effect',
    effectSettings: 'Effect settings'
  },
  toolbar: _objectSpread({
    exportImage: 'Export Image',
    exportData: 'Export Data',
    exportMap: 'Export Map',
    shareMapURL: 'Share Map URL',
    saveMap: 'Save Map',
    select: 'Select',
    polygon: 'Polygon',
    rectangle: 'Rectangle',
    hide: 'Hide',
    show: 'Show'
  }, _locales.LOCALES),
  editor: {
    filterLayer: 'Filter Layers',
    filterLayerDisabled: 'Non-polygon geometries cannot be used for filtering',
    copyGeometry: 'Copy Geometry',
    noLayersToFilter: 'No layers to filter'
  },
  modal: {
    title: {
      deleteDataset: 'Delete Dataset',
      addDataToMap: 'Add Data To Map',
      exportImage: 'Export Image',
      exportData: 'Export Data',
      exportMap: 'Export Map',
      addCustomMapboxStyle: 'Add Custom Map Style',
      saveMap: 'Save Map',
      shareURL: 'Share URL'
    },
    button: {
      "delete": 'Delete',
      download: 'Download',
      "export": 'Export',
      addStyle: 'Add Style',
      save: 'Save',
      defaultCancel: 'Cancel',
      defaultConfirm: 'Confirm'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Choose the ratio for various usages.',
      ratioOriginalScreen: 'Original Screen',
      ratioCustom: 'Custom',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolution',
      resolutionDescription: 'High resolution is better for prints.',
      mapLegendTitle: 'Map Legend',
      mapLegendAdd: 'Add legend on map'
    },
    exportData: {
      datasetTitle: 'Dataset',
      datasetSubtitle: 'Choose the datasets you want to export',
      allDatasets: 'All',
      dataTypeTitle: 'Data Type',
      dataTypeSubtitle: 'Choose the type of data you want to export',
      filterDataTitle: 'Filter Data',
      filterDataSubtitle: 'You can choose exporting original data or filtered data',
      filteredData: 'Filtered data',
      unfilteredData: 'Unfiltered Data',
      fileCount: '{fileCount} Files',
      rowCount: '{rowCount} Rows',
      tiledDatasetWarning: "* Export Data for Tiled datasets isn't supported"
    },
    deleteData: {
      warning: 'you are going to delete this dataset. It will affect {length} layers'
    },
    addStyle: {
      publishTitle: '2. If entered mapbox style url in step.1, publish your style at mapbox or provide access token. (Optional)',
      publishSubtitle1: 'You can create your own map style at',
      publishSubtitle2: 'and',
      publishSubtitle3: 'publish',
      publishSubtitle4: 'it.',
      publishSubtitle5: 'To use private style, paste your',
      publishSubtitle6: 'access token',
      publishSubtitle7: 'here. *kepler.gl is a client-side application, data stays in your browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '1. Paste style url',
      pasteSubtitle0: 'Style url can be a mapbox',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'style URL',
      pasteSubtitle3: 'or a style.json using the',
      pasteSubtitle4: 'Mapbox GL Style Spec',
      namingTitle: '3. Name your style'
    },
    shareMap: {
      title: 'Share Map',
      shareUriTitle: 'Share Map Url',
      shareUriSubtitle: 'Generate a map url to share with others',
      cloudTitle: 'Cloud storage',
      cloudSubtitle: 'Login and upload map data to your personal cloud storage',
      shareDisclaimer: 'kepler.gl will save your map data to your personal cloud storage, only people with the URL can access your map and data. ' + 'You can edit/delete the data file in your cloud account anytime.',
      gotoPage: 'Go to your Kepler.gl {currentProvider} page'
    },
    statusPanel: {
      mapUploading: 'Map Uploading',
      error: 'Error'
    },
    saveMap: {
      title: 'Cloud storage',
      subtitle: 'Login to save map to your personal cloud storage'
    },
    exportMap: {
      formatTitle: 'Map format',
      formatSubtitle: 'Choose the format to export your map to',
      html: {
        selection: 'Export your map into an interactive html file.',
        tokenTitle: 'Mapbox access token',
        tokenSubtitle: 'Use your own Mapbox access token in the html (optional)',
        tokenPlaceholder: 'Paste your Mapbox access token',
        tokenMisuseWarning: '* If you do not provide your own token, the map may fail to display at any time when we replace ours to avoid misuse. ',
        tokenDisclaimer: 'You can change the Mapbox token later using the following instructions: ',
        tokenUpdate: 'How to update an existing map token.',
        modeTitle: 'Map Mode',
        modeSubtitle1: 'Select the app mode. More ',
        modeSubtitle2: 'info',
        modeDescription: 'Allow users to {mode} the map',
        read: 'read',
        edit: 'edit'
      },
      json: {
        configTitle: 'Map Config',
        configDisclaimer: 'Map config will be included in the Json file. If you are using kepler.gl in your own app. You can copy this config and pass it to ',
        selection: 'Export current map data and config into a single Json file. You can later open the same map by uploading this file to kepler.gl.',
        disclaimer: '* Map config is coupled with loaded datasets. ‘dataId’ is used to bind layers, filters, and tooltips to a specific dataset. ' + 'When passing this config to addDataToMap, make sure the dataset id matches the dataId/s in this config.'
      }
    },
    loadingDialog: {
      loading: 'Loading...'
    },
    loadData: {
      upload: 'Load Files',
      tileset: 'Tileset',
      storage: 'Load from Storage'
    },
    tripInfo: {
      title: 'Create trips from GeoJson',
      titleTable: 'Create trips from a list of points',
      description1: "To animate the path, the GeoJSON data needs to contain `LineString` in its feature geometry, and the coordinates in the LineString need to have 4 elements in the formats of\n".concat('```json', "\n[longitude, latitude, altitude, timestamp]\n", '```', "\nThe 3rd element is a timestamp. Valid timestamp formats include unix in seconds such as `1564184363` or in milliseconds such as `1564184363000`."),
      descriptionTable1: 'Trips can be created by joining a list of points from latitude and longitude, sort by timestamps and group by uniq ids.',
      example: 'Example GeoJSON',
      exampleTable: 'Example Csv'
    },
    polygonInfo: {
      title: 'Create polygon layer from GeoJSON feature',
      titleTable: 'Create path from points',
      description: "Polygon can be created from\n__1 .A GeoJSON Feature Collection__\n__2. A Csv contains geometry column__\n\n### 1. Create polygon from GeoJSON file\n\nWhen upload a GeoJSON file contains FeatureCollection, a polygon layer will be auto-created\n\nExample GeoJSON\n".concat('```json', "\n{\n  \"type\": \"FeatureCollection\",\n  \"features\": [{\n      \"type\": \"Feature\",\n      \"geometry\": {\n          \"type\": \"Point\",\n          \"coordinates\": [102.0, 0.5]\n      },\n      \"properties\": {\n          \"prop0\": \"value0\"\n      }\n  }, {\n      \"type\": \"Feature\",\n      \"geometry\": {\n          \"type\": \"LineString\",\n          \"coordinates\": [\n              [102.0, 0.0],\n              [103.0, 1.0],\n              [104.0, 0.0],\n              [105.0, 1.0]\n          ]\n      },\n      \"properties\": {\n        \"prop0\": \"value0\"\n      }\n  }]\n}\n", '```', "\n\n### 2. Create polygon from a Geometry column in Csv table\nGeometries (Polygons, Points, LindStrings etc) can be embedded into CSV as a `GeoJSON` or `WKT` formatted string.\n\n#### 2.1 `GeoJSON` string\nExample data.csv with `GeoJSON` string\n", '```txt', "\nid,_geojson\n1,\"{\"\"type\"\":\"\"Polygon\"\",\"\"coordinates\"\":[[[-74.158491,40.835947],[-74.157914,40.83902]]]}\"\n", '```', "\n\n#### 2.2 `WKT` string\nExample data.csv with `WKT` string\n[The Well-Known Text (WKT)](https://dev.mysql.com/doc/refman/5.7/en/gis-data-formats.html#gis-wkt-format) representation of geometry values is designed for exchanging geometry data in ASCII form.\n\nExample data.csv with WKT\n", '```txt', "\nid,_geojson\n1,\"POLYGON((0 0,10 0,10 10,0 10,0 0),(5 5,7 5,7 7,5 7, 5 5))\"\n", '```', "\n"),
      descriptionTable: "Paths can be created by joining a list of points from latitude and longitude, sort by an index field (e.g. timestamp) and group by uniq ids.\n\n  ### Layer columns:\n  - **id**: - *required*&nbsp;- A `id` column is used to group by points. Points with the same id will be joined into a single path.\n  - **lat**: - *required*&nbsp;- The latitude of the point\n  - **lon**: - *required*&nbsp;- The longitude of the point\n  - **alt**: - *optional*&nbsp;- The altitude of the point\n  - **sort by**: - *optional*&nbsp;- A `sort by` column is used to sort the points, if not specified, points will be sorted by row index.\n",
      exampleTable: 'Example CSV'
    },
    iconInfo: {
      title: 'How to draw icons',
      description1: 'In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named',
      code: 'icon',
      description2: ' kepler.gl will automatically create a icon layer for you.',
      example: 'Example:',
      icons: 'Icons'
    },
    storageMapViewer: {
      lastModified: 'Last modified {lastUpdated} ago',
      back: 'Back'
    },
    overwriteMap: {
      title: 'Saving map...',
      alreadyExists: 'already exists in your {mapSaved}. Would you like to overwrite it?'
    },
    loadStorageMap: {
      back: 'Back',
      goToPage: 'Go to your Kepler.gl {displayName} page',
      storageMaps: 'Storage / Maps',
      noSavedMaps: 'No saved maps yet',
      foursquareStorageMessage: 'Only maps saved with Kepler.gl > Save > Foursquare Storage option are shown here'
    }
  },
  header: {
    visibleLayers: 'Visible layers',
    layerLegend: 'Legend'
  },
  interactions: {
    tooltip: 'Tooltip',
    brush: 'Brush',
    coordinate: 'Coordinates',
    geocoder: 'Geocoder'
  },
  layerBlending: {
    title: 'Layer Blending',
    additive: 'additive',
    normal: 'normal',
    subtractive: 'subtractive'
  },
  overlayBlending: {
    title: 'Map overlay blending',
    description: 'Blend layers with the base map so that both are visible.',
    screen: 'dark base map',
    normal: 'normal',
    darken: 'light base map'
  },
  columns: {
    title: 'Columns',
    lat: 'lat',
    lng: 'lng',
    altitude: 'altitude',
    alt: 'altitude',
    id: 'id',
    timestamp: 'time',
    icon: 'icon',
    geojson: 'geojson',
    geoarrow: 'geoarrow',
    geoarrow0: 'geoarrow source',
    geoarrow1: 'geoarrow target',
    token: 'token',
    sortBy: 'sort by',
    neighbors: 'neighbors',
    arc: {
      lat0: 'source lat or hex id',
      lng0: 'source lng or hex id',
      lat1: 'target lat or hex id',
      lng1: 'target lng or hex id'
    },
    line: {
      alt0: 'source altitude',
      alt1: 'target altitude'
    },
    grid: {
      worldUnitSize: 'Grid Size (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagon Radius (km)'
    },
    hex_id: 'hex id'
  },
  color: {
    customPalette: 'Custom Palette',
    'Update color': 'Update color',
    steps: 'Steps',
    type: 'Type',
    sequential: 'Sequential',
    qualitative: 'Qualitative',
    diverging: 'Diverging',
    cyclical: 'Cyclical',
    all: 'All',
    colorBlindSafe: 'Colorblind Safe',
    reversed: 'Reversed',
    disableStepReason: "Can't change number of steps with custom color breaks, use custom palette to edit steps",
    preset: 'Preset Colors',
    picker: 'Color Picker'
  },
  columnStats: {
    min: 'Min',
    mean: 'Mean',
    max: 'Max'
  },
  scale: {
    colorScale: 'Color Scale',
    sizeScale: 'Size Scale',
    strokeScale: 'Stroke Scale',
    strokeColorScale: 'Stroke Color Scale',
    scale: 'Scale',
    ordinal: 'Ordinal',
    quantile: 'Quantile',
    quantize: 'Quantize',
    linear: 'Linear',
    sqrt: 'Sqrt',
    log: 'Log',
    point: 'Point',
    threshold: 'Threshold',
    custom: 'Custom Breaks',
    customOrdinal: 'Custom Ordinal'
  },
  fileUploader: {
    message: 'Drag & Drop Your File(s) Here',
    chromeMessage: '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari',
    disclaimer: '*kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.',
    configUploadMessage: 'Upload {fileFormatNames} or saved map **Json**. Read more about [**supported file formats**]',
    browseFiles: 'browse your files',
    uploading: 'Uploading',
    fileNotSupported: 'File {errorFiles} is not supported.',
    or: 'or'
  },
  tilesetSetup: {
    header: 'Setup Vector Tiles',
    rasterTileHeader: 'Setup Raster Tiles',
    addTilesetText: 'Add Tileset'
  },
  geocoder: {
    title: 'Enter an address or coordinates, ex 37.79,-122.40'
  },
  fieldSelector: {
    clearAll: 'Clear All',
    formatting: 'Formatting'
  },
  compare: {
    modeLabel: 'Comparison Mode',
    typeLabel: 'Comparison Type',
    types: {
      absolute: 'Absolute',
      relative: 'Relative'
    }
  },
  mapPopover: {
    primary: 'Primary'
  },
  density: 'density',
  'Bug Report': 'Bug Report',
  'User Guide': 'User Guide',
  Save: 'Save',
  Share: 'Share',
  mapLegend: {
    layers: {
      line: {
        singleColor: {
          sourceColor: 'Source',
          targetColor: 'Target'
        }
      },
      arc: {
        singleColor: {
          sourceColor: 'Source',
          targetColor: 'Target'
        }
      },
      "default": {
        singleColor: {
          color: 'Fill color',
          strokeColor: 'Outline'
        }
      }
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbG9jYWxlcyIsInJlcXVpcmUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3BlcnR5Iiwid2VpZ2h0IiwibGFiZWwiLCJmaWxsQ29sb3IiLCJjb2xvciIsImNvdmVyYWdlIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImhlaWdodCIsInN1bSIsInBvaW50Q291bnQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInNlbGVjdEZpZWxkIiwieUF4aXMiLCJzZWxlY3RUeXBlIiwic2VsZWN0VmFsdWUiLCJlbnRlclZhbHVlIiwiZW1wdHkiLCJzZWxlY3RMYXllciIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsImJhY2tncm91bmQiLCJwYW5lbCIsInRleHQiLCJsYWJlbFdpdGhJZCIsImZvbnRTaXplIiwiZm9udENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFuY2hvciIsImFsaWdubWVudCIsImFkZE1vcmVMYWJlbCIsIm91dGxpbmVXaWR0aCIsIm91dGxpbmVDb2xvciIsInNpZGViYXIiLCJwYW5lbHMiLCJsYXllciIsImludGVyYWN0aW9uIiwiYmFzZW1hcCIsInBhbmVsVmlld1RvZ2dsZSIsImxpc3QiLCJieURhdGFzZXQiLCJyZXF1aXJlZCIsImNvbHVtbk1vZGVzU2VwYXJhdG9yIiwicHJvcGVydHlCYXNlZE9uIiwic3Ryb2tlV2lkdGgiLCJiYXNpYyIsInRyYWlsTGVuZ3RoIiwidHJhaWxMZW5ndGhEZXNjcmlwdGlvbiIsIm5ld0xheWVyIiwiZWxldmF0aW9uQnlEZXNjcmlwdGlvbiIsImNvbG9yQnlEZXNjcmlwdGlvbiIsImFnZ3JlZ2F0ZUJ5Iiwic2VydmljZSIsImFwcGVhcmFuY2UiLCJ1bmlxdWVJZEZpZWxkIiwidHlwZSIsInBvaW50IiwiYXJjIiwibGluZSIsImdyaWQiLCJoZXhiaW4iLCJwb2x5Z29uIiwiZ2VvanNvbiIsImNsdXN0ZXIiLCJpY29uIiwiaGVhdG1hcCIsImhleGFnb24iLCJoZXhhZ29uaWQiLCJ0cmlwIiwiczIiLCJ2ZWN0b3J0aWxlIiwicmFzdGVydGlsZSIsIndtcyIsImhvdmVyIiwibGF5ZXJVcGRhdGVFcnJvciIsImxheWVyVmlzQ29uZmlncyIsImFuZ2xlIiwic3Ryb2tlV2lkdGhSYW5nZSIsImZpeGVkUmFkaXVzIiwiZml4ZWRSYWRpdXNEZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsInJhZGl1c1JhbmdlUGl4ZWxzIiwiYmlsbGJvYXJkIiwiYmlsbGJvYXJkRGVzY3JpcHRpb24iLCJmYWRlVHJhaWwiLCJvcGFjaXR5IiwiY29sb3JSYW5nZSIsInN0cm9rZUNvbG9yUmFuZ2UiLCJ0YXJnZXRDb2xvciIsImNvbG9yQWdncmVnYXRpb24iLCJoZWlnaHRBZ2dyZWdhdGlvbiIsInJlc29sdXRpb25SYW5nZSIsInNpemVTY2FsZSIsIndvcmxkVW5pdFNpemUiLCJlbGV2YXRpb25TY2FsZSIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3IiLCJlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yRGVzY3JpcHRpb24iLCJlbmFibGVIZWlnaHRab29tRmFjdG9yIiwiaGVpZ2h0U2NhbGUiLCJjb3ZlcmFnZVJhbmdlIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZyIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbiIsImhlaWdodERlc2NyaXB0aW9uIiwiZmlsbCIsImVuYWJsZVBvbHlnb25IZWlnaHQiLCJzaG93V2lyZWZyYW1lIiwid2VpZ2h0SW50ZW5zaXR5Iiwiem9vbVNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJoZWlnaHRNdWx0aXBsaWVyIiwiZml4ZWRIZWlnaHQiLCJmaXhlZEhlaWdodERlc2NyaXB0aW9uIiwiYWxsb3dIb3ZlciIsInNob3dOZWlnaGJvck9uSG92ZXIiLCJzaG93SGlnaGxpZ2h0Q29sb3IiLCJkYXJrTW9kZUVuYWJsZWQiLCJ0cmFuc3BhcmVudEJhY2tncm91bmQiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwib3ZlcmxheUJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJlZmZlY3RNYW5hZ2VyIiwiZWZmZWN0cyIsImFkZEVmZmVjdCIsInBpY2tEYXRlVGltZSIsImN1cnJlbnRUaW1lIiwicGlja0N1cnJyZW50VGltZSIsImRhdGUiLCJ0aW1lIiwidGltZXpvbmUiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsInNob3dDb2xvckNoYXJ0IiwiaGlkZUNvbG9yQ2hhcnQiLCJmaWx0ZXJNYW5hZ2VyIiwiYWRkRmlsdGVyIiwidGltZUZpbHRlclN5bmMiLCJ0aW1lTGF5ZXJTeW5jIiwidGltZUxheWVyVW5zeW5jIiwiY29sdW1uIiwiZGF0YXNldFRpdGxlIiwic2hvd0RhdGFUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJkYXRhc2V0SW5mbyIsInJvd0NvdW50IiwidmVjdG9yVGlsZSIsInJhc3RlclRpbGUiLCJ3bXNUaWxlIiwidG9vbHRpcCIsImhpZGVMYXllciIsInNob3dMYXllciIsImhpZGVGZWF0dXJlIiwic2hvd0ZlYXR1cmUiLCJoaWRlIiwic2hvdyIsInJlbW92ZUxheWVyIiwiZHVwbGljYXRlTGF5ZXIiLCJ6b29tVG9MYXllciIsInJlc2V0QWZ0ZXJFcnJvciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJzaG93QWlBc3Npc3RhbnRQYW5lbCIsImhpZGVBaUFzc2lzdGFudFBhbmVsIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInJlbW92ZUJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsImFuaW1hdGlvbkJ5V2luZG93IiwiYW5pbWF0aW9uQnlJbmNyZW1lbnRhbCIsInNwZWVkIiwicGxheSIsInBhdXNlIiwicmVzZXQiLCJzeW5jVGltZWxpbmVTdGFydCIsInN5bmNUaW1lbGluZUVuZCIsInNob3dFZmZlY3RQYW5lbCIsImhpZGVFZmZlY3RQYW5lbCIsInJlbW92ZUVmZmVjdCIsImRpc2FibGVFZmZlY3QiLCJlZmZlY3RTZXR0aW5ncyIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwiZWRpdG9yIiwiZmlsdGVyTGF5ZXIiLCJmaWx0ZXJMYXllckRpc2FibGVkIiwiY29weUdlb21ldHJ5Iiwibm9MYXllcnNUb0ZpbHRlciIsIm1vZGFsIiwiZGVsZXRlRGF0YXNldCIsImFkZERhdGFUb01hcCIsImFkZEN1c3RvbU1hcGJveFN0eWxlIiwic2hhcmVVUkwiLCJidXR0b24iLCJkb3dubG9hZCIsImFkZFN0eWxlIiwic2F2ZSIsImRlZmF1bHRDYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInJhdGlvVGl0bGUiLCJyYXRpb0Rlc2NyaXB0aW9uIiwicmF0aW9PcmlnaW5hbFNjcmVlbiIsInJhdGlvQ3VzdG9tIiwicmF0aW80XzMiLCJyYXRpbzE2XzkiLCJyZXNvbHV0aW9uVGl0bGUiLCJyZXNvbHV0aW9uRGVzY3JpcHRpb24iLCJtYXBMZWdlbmRUaXRsZSIsIm1hcExlZ2VuZEFkZCIsImRhdGFzZXRTdWJ0aXRsZSIsImFsbERhdGFzZXRzIiwiZGF0YVR5cGVUaXRsZSIsImRhdGFUeXBlU3VidGl0bGUiLCJmaWx0ZXJEYXRhVGl0bGUiLCJmaWx0ZXJEYXRhU3VidGl0bGUiLCJmaWx0ZXJlZERhdGEiLCJ1bmZpbHRlcmVkRGF0YSIsImZpbGVDb3VudCIsInRpbGVkRGF0YXNldFdhcm5pbmciLCJkZWxldGVEYXRhIiwid2FybmluZyIsInB1Ymxpc2hUaXRsZSIsInB1Ymxpc2hTdWJ0aXRsZTEiLCJwdWJsaXNoU3VidGl0bGUyIiwicHVibGlzaFN1YnRpdGxlMyIsInB1Ymxpc2hTdWJ0aXRsZTQiLCJwdWJsaXNoU3VidGl0bGU1IiwicHVibGlzaFN1YnRpdGxlNiIsInB1Ymxpc2hTdWJ0aXRsZTciLCJleGFtcGxlVG9rZW4iLCJwYXN0ZVRpdGxlIiwicGFzdGVTdWJ0aXRsZTAiLCJwYXN0ZVN1YnRpdGxlMSIsInBhc3RlU3VidGl0bGUyIiwicGFzdGVTdWJ0aXRsZTMiLCJwYXN0ZVN1YnRpdGxlNCIsIm5hbWluZ1RpdGxlIiwic2hhcmVNYXAiLCJzaGFyZVVyaVRpdGxlIiwic2hhcmVVcmlTdWJ0aXRsZSIsImNsb3VkVGl0bGUiLCJjbG91ZFN1YnRpdGxlIiwic2hhcmVEaXNjbGFpbWVyIiwiZ290b1BhZ2UiLCJzdGF0dXNQYW5lbCIsIm1hcFVwbG9hZGluZyIsImVycm9yIiwic3VidGl0bGUiLCJmb3JtYXRUaXRsZSIsImZvcm1hdFN1YnRpdGxlIiwiaHRtbCIsInNlbGVjdGlvbiIsInRva2VuVGl0bGUiLCJ0b2tlblN1YnRpdGxlIiwidG9rZW5QbGFjZWhvbGRlciIsInRva2VuTWlzdXNlV2FybmluZyIsInRva2VuRGlzY2xhaW1lciIsInRva2VuVXBkYXRlIiwibW9kZVRpdGxlIiwibW9kZVN1YnRpdGxlMSIsIm1vZGVTdWJ0aXRsZTIiLCJtb2RlRGVzY3JpcHRpb24iLCJyZWFkIiwiZWRpdCIsImpzb24iLCJjb25maWdUaXRsZSIsImNvbmZpZ0Rpc2NsYWltZXIiLCJkaXNjbGFpbWVyIiwibG9hZGluZ0RpYWxvZyIsImxvYWRpbmciLCJsb2FkRGF0YSIsInVwbG9hZCIsInRpbGVzZXQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJ0aXRsZVRhYmxlIiwiZGVzY3JpcHRpb24xIiwiY29uY2F0IiwiZGVzY3JpcHRpb25UYWJsZTEiLCJleGFtcGxlIiwiZXhhbXBsZVRhYmxlIiwicG9seWdvbkluZm8iLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uVGFibGUiLCJpY29uSW5mbyIsImNvZGUiLCJkZXNjcmlwdGlvbjIiLCJpY29ucyIsInN0b3JhZ2VNYXBWaWV3ZXIiLCJsYXN0TW9kaWZpZWQiLCJiYWNrIiwib3ZlcndyaXRlTWFwIiwiYWxyZWFkeUV4aXN0cyIsImxvYWRTdG9yYWdlTWFwIiwiZ29Ub1BhZ2UiLCJzdG9yYWdlTWFwcyIsIm5vU2F2ZWRNYXBzIiwiZm91cnNxdWFyZVN0b3JhZ2VNZXNzYWdlIiwiaGVhZGVyIiwidmlzaWJsZUxheWVycyIsImxheWVyTGVnZW5kIiwiaW50ZXJhY3Rpb25zIiwiYnJ1c2giLCJjb29yZGluYXRlIiwiZ2VvY29kZXIiLCJhZGRpdGl2ZSIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwic2NyZWVuIiwiZGFya2VuIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiYWx0IiwiaWQiLCJ0aW1lc3RhbXAiLCJnZW9hcnJvdyIsImdlb2Fycm93MCIsImdlb2Fycm93MSIsInRva2VuIiwic29ydEJ5IiwibmVpZ2hib3JzIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImFsdDAiLCJhbHQxIiwiaGV4X2lkIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwic2VxdWVudGlhbCIsInF1YWxpdGF0aXZlIiwiZGl2ZXJnaW5nIiwiY3ljbGljYWwiLCJhbGwiLCJjb2xvckJsaW5kU2FmZSIsInJldmVyc2VkIiwiZGlzYWJsZVN0ZXBSZWFzb24iLCJwcmVzZXQiLCJwaWNrZXIiLCJjb2x1bW5TdGF0cyIsIm1pbiIsIm1lYW4iLCJtYXgiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsInN0cm9rZUNvbG9yU2NhbGUiLCJvcmRpbmFsIiwicXVhbnRpbGUiLCJxdWFudGl6ZSIsImxpbmVhciIsInNxcnQiLCJsb2ciLCJ0aHJlc2hvbGQiLCJjdXN0b20iLCJjdXN0b21PcmRpbmFsIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJ0aWxlc2V0U2V0dXAiLCJyYXN0ZXJUaWxlSGVhZGVyIiwiYWRkVGlsZXNldFRleHQiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIiwibWFwTGVnZW5kIiwibGF5ZXJzIiwic2luZ2xlQ29sb3IiLCJzb3VyY2VDb2xvciJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGlvbnMvZW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy8gQ29weXJpZ2h0IGNvbnRyaWJ1dG9ycyB0byB0aGUga2VwbGVyLmdsIHByb2plY3RcblxuaW1wb3J0IHsgTE9DQUxFUyB9IGZyb20gJy4uL2xvY2FsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BlcnR5OiB7XG4gICAgd2VpZ2h0OiAnd2VpZ2h0JyxcbiAgICBsYWJlbDogJ2xhYmVsJyxcbiAgICBmaWxsQ29sb3I6ICdmaWxsIGNvbG9yJyxcbiAgICBjb2xvcjogJ2NvbG9yJyxcbiAgICBjb3ZlcmFnZTogJ2NvdmVyYWdlJyxcbiAgICBzdHJva2VDb2xvcjogJ3N0cm9rZSBjb2xvcicsXG4gICAgcmFkaXVzOiAncmFkaXVzJyxcbiAgICBvdXRsaW5lOiAnb3V0bGluZScsXG4gICAgc3Ryb2tlOiAnc3Ryb2tlJyxcbiAgICBkZW5zaXR5OiAnZGVuc2l0eScsXG4gICAgaGVpZ2h0OiAnaGVpZ2h0JyxcbiAgICBzdW06ICdzdW0nLFxuICAgIHBvaW50Q291bnQ6ICdQb2ludCBDb3VudCdcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgIHNlbGVjdEZpZWxkOiAnU2VsZWN0IGEgZmllbGQnLFxuICAgIHlBeGlzOiAnWSBBeGlzJyxcbiAgICBzZWxlY3RUeXBlOiAnU2VsZWN0IEEgVHlwZScsXG4gICAgc2VsZWN0VmFsdWU6ICdTZWxlY3QgQSBWYWx1ZScsXG4gICAgZW50ZXJWYWx1ZTogJ0VudGVyIGEgdmFsdWUnLFxuICAgIGVtcHR5OiAnZW1wdHknLFxuICAgIHNlbGVjdExheWVyOiAnU2VsZWN0IGEgbGF5ZXInXG4gIH0sXG4gIG1pc2M6IHtcbiAgICBieTogJycsXG4gICAgdmFsdWVzSW46ICdWYWx1ZXMgaW4nLFxuICAgIHZhbHVlRXF1YWxzOiAnVmFsdWUgZXF1YWxzJyxcbiAgICBkYXRhU291cmNlOiAnRGF0YSBTb3VyY2UnLFxuICAgIGJydXNoUmFkaXVzOiAnQnJ1c2ggUmFkaXVzIChrbSknLFxuICAgIGVtcHR5OiAnICdcbiAgfSxcbiAgbWFwTGF5ZXJzOiB7XG4gICAgdGl0bGU6ICdNYXAgTGF5ZXJzJyxcbiAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICByb2FkOiAnUm9hZCcsXG4gICAgYm9yZGVyOiAnQm9yZGVyJyxcbiAgICBidWlsZGluZzogJ0J1aWxkaW5nJyxcbiAgICB3YXRlcjogJ1dhdGVyJyxcbiAgICBsYW5kOiAnTGFuZCcsXG4gICAgJzNkQnVpbGRpbmcnOiAnM2QgQnVpbGRpbmcnLFxuICAgIGJhY2tncm91bmQ6ICdCYWNrZ3JvdW5kJ1xuICB9LFxuICBwYW5lbDoge1xuICAgIHRleHQ6IHtcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgICAgbGFiZWxXaXRoSWQ6ICdMYWJlbCB7bGFiZWxJZH0nLFxuICAgICAgZm9udFNpemU6ICdGb250IHNpemUnLFxuICAgICAgZm9udENvbG9yOiAnRm9udCBjb2xvcicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdCYWNrZ3JvdW5kIGNvbG9yJyxcbiAgICAgIHRleHRBbmNob3I6ICdUZXh0IGFuY2hvcicsXG4gICAgICBhbGlnbm1lbnQ6ICdBbGlnbm1lbnQnLFxuICAgICAgYWRkTW9yZUxhYmVsOiAnQWRkIE1vcmUgTGFiZWwnLFxuICAgICAgb3V0bGluZVdpZHRoOiAnT3V0bGluZSB3aWR0aCcsXG4gICAgICBvdXRsaW5lQ29sb3I6ICdPdXRsaW5lIGNvbG9yJ1xuICAgIH1cbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIHBhbmVsczoge1xuICAgICAgbGF5ZXI6ICdMYXllcnMnLFxuICAgICAgZmlsdGVyOiAnRmlsdGVycycsXG4gICAgICBpbnRlcmFjdGlvbjogJ0ludGVyYWN0aW9ucycsXG4gICAgICBiYXNlbWFwOiAnQmFzZSBtYXAnXG4gICAgfSxcbiAgICBwYW5lbFZpZXdUb2dnbGU6IHtcbiAgICAgIGxpc3Q6ICdWaWV3IExpc3QnLFxuICAgICAgYnlEYXRhc2V0OiAnVmlldyBieSBEYXRhc2V0J1xuICAgIH1cbiAgfSxcbiAgbGF5ZXI6IHtcbiAgICByZXF1aXJlZDogJ1JlcXVpcmVkKicsXG4gICAgY29sdW1uTW9kZXNTZXBhcmF0b3I6ICdPcicsXG4gICAgcmFkaXVzOiAnUmFkaXVzJyxcbiAgICBjb2xvcjogJ0NvbG9yJyxcbiAgICBmaWxsQ29sb3I6ICdGaWxsIENvbG9yJyxcbiAgICBvdXRsaW5lOiAnT3V0bGluZScsXG4gICAgd2VpZ2h0OiAnV2VpZ2h0JyxcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl9IGJhc2VkIG9uJyxcbiAgICBjb3ZlcmFnZTogJ0NvdmVyYWdlJyxcbiAgICBzdHJva2U6ICdTdHJva2UnLFxuICAgIHN0cm9rZVdpZHRoOiAnU3Ryb2tlIFdpZHRoJyxcbiAgICBzdHJva2VDb2xvcjogJ1N0cm9rZSBDb2xvcicsXG4gICAgYmFzaWM6ICdCYXNpYycsXG4gICAgdHJhaWxMZW5ndGg6ICdUcmFpbCBMZW5ndGgnLFxuICAgIHRyYWlsTGVuZ3RoRGVzY3JpcHRpb246ICdOdW1iZXIgb2Ygc2Vjb25kcyBmb3IgYSBwYXRoIHRvIGNvbXBsZXRlbHkgZmFkZSBvdXQnLFxuICAgIG5ld0xheWVyOiAnbmV3IGxheWVyJyxcbiAgICBlbGV2YXRpb25CeURlc2NyaXB0aW9uOiAnV2hlbiBvZmYsIGhlaWdodCBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnLFxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ1doZW4gb2ZmLCBjb2xvciBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnLFxuICAgIGFnZ3JlZ2F0ZUJ5OiAnQWdncmVnYXRlIHtmaWVsZH0gYnknLFxuICAgICczRE1vZGVsJzogJzNEIE1vZGVsJyxcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnM0QgTW9kZWwgT3B0aW9ucycsXG4gICAgc2VydmljZTogJ1NlcnZpY2UnLFxuICAgIGxheWVyOiAnTGF5ZXInLFxuICAgIGFwcGVhcmFuY2U6ICdBcHBlYXJhbmNlJyxcbiAgICB1bmlxdWVJZEZpZWxkOiAnVW5pcXVlIElEIEZpZWxkJyxcbiAgICB0eXBlOiB7XG4gICAgICBwb2ludDogJ3BvaW50JyxcbiAgICAgIGFyYzogJ2FyYycsXG4gICAgICBsaW5lOiAnbGluZScsXG4gICAgICBncmlkOiAnZ3JpZCcsXG4gICAgICBoZXhiaW46ICdoZXhiaW4nLFxuICAgICAgcG9seWdvbjogJ3BvbHlnb24nLFxuICAgICAgZ2VvanNvbjogJ2dlb2pzb24nLFxuICAgICAgY2x1c3RlcjogJ2NsdXN0ZXInLFxuICAgICAgaWNvbjogJ2ljb24nLFxuICAgICAgaGVhdG1hcDogJ2hlYXRtYXAnLFxuICAgICAgaGV4YWdvbjogJ2hleGFnb24nLFxuICAgICAgaGV4YWdvbmlkOiAnSDMnLFxuICAgICAgdHJpcDogJ3RyaXAnLFxuICAgICAgczI6ICdTMicsXG4gICAgICAnM2QnOiAnM0QnLFxuICAgICAgdmVjdG9ydGlsZTogJ3ZlY3RvciB0aWxlJyxcbiAgICAgIHJhc3RlcnRpbGU6ICdyYXN0ZXIgdGlsZScsXG4gICAgICB3bXM6ICdXTVMnXG4gICAgfSxcbiAgICB3bXM6IHtcbiAgICAgIGhvdmVyOiAnVmFsdWU6J1xuICAgIH0sXG4gICAgbGF5ZXJVcGRhdGVFcnJvcjpcbiAgICAgICdBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgbGF5ZXIgdXBkYXRlOiB7ZXJyb3JNZXNzYWdlfS4gTWFrZSBzdXJlIHRoZSBmb3JtYXQgb2YgdGhlIGlucHV0IGRhdGEgaXMgdmFsaWQuJyxcbiAgICBpbnRlcmFjdGlvbjogJ0ludGVyYWN0aW9uJ1xuICB9LFxuICBsYXllclZpc0NvbmZpZ3M6IHtcbiAgICBhbmdsZTogJ0FuZ2xlJyxcbiAgICBzdHJva2VXaWR0aDogJ1N0cm9rZSBXaWR0aCAoUGl4ZWxzKScsXG4gICAgc3Ryb2tlV2lkdGhSYW5nZTogJ1N0cm9rZSBXaWR0aCBSYW5nZScsXG4gICAgcmFkaXVzOiAnUmFkaXVzJyxcbiAgICBmaXhlZFJhZGl1czogJ0ZpeGVkIFJhZGl1cyB0byBtZXRlcicsXG4gICAgZml4ZWRSYWRpdXNEZXNjcmlwdGlvbjogJ01hcCByYWRpdXMgdG8gYWJzb2x1dGUgcmFkaXVzIGluIG1ldGVycywgZS5nLiA1IHRvIDUgbWV0ZXJzJyxcbiAgICByYWRpdXNSYW5nZTogJ1JhZGl1cyBSYW5nZScsXG4gICAgY2x1c3RlclJhZGl1czogJ0NsdXN0ZXIgUmFkaXVzIGluIFBpeGVscycsXG4gICAgcmFkaXVzUmFuZ2VQaXhlbHM6ICdSYWRpdXMgUmFuZ2UgaW4gcGl4ZWxzJyxcbiAgICBiaWxsYm9hcmQ6ICdCaWxsYm9hcmQnLFxuICAgIGJpbGxib2FyZERlc2NyaXB0aW9uOiAnT3JpZW50IGdlb21ldHJ5IHRvd2FyZHMgdGhlIGNhbWVyYScsXG4gICAgZmFkZVRyYWlsOiAnRmFkZSB0cmFpbCcsXG4gICAgb3BhY2l0eTogJ09wYWNpdHknLFxuICAgIGNvdmVyYWdlOiAnQ292ZXJhZ2UnLFxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcbiAgICBjb2xvclJhbmdlOiAnQ29sb3IgcmFuZ2UnLFxuICAgIHN0cm9rZTogJ1N0cm9rZScsXG4gICAgc3Ryb2tlQ29sb3I6ICdTdHJva2UgQ29sb3InLFxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICdTdHJva2UgQ29sb3IgcmFuZ2UnLFxuICAgIHRhcmdldENvbG9yOiAnVGFyZ2V0IENvbG9yJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnQ29sb3IgQWdncmVnYXRpb24nLFxuICAgIGhlaWdodEFnZ3JlZ2F0aW9uOiAnSGVpZ2h0IEFnZ3JlZ2F0aW9uJyxcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdSZXNvbHV0aW9uIHJhbmdlJyxcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcbiAgICB3b3JsZFVuaXRTaXplOiAnV29ybGQgVW5pdCBTaXplJyxcbiAgICBlbGV2YXRpb25TY2FsZTogJ0VsZXZhdGlvbiBTY2FsZScsXG4gICAgZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvcjogJ1VzZSBlbGV2YXRpb24gem9vbSBmYWN0b3InLFxuICAgIGVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbjogJ0FkanVzdCBoZWlnaHQvZWxldmF0aW9uIGJhc2VkIG9uIGN1cnJlbnQgem9vbSBmYWN0b3InLFxuICAgIGVuYWJsZUhlaWdodFpvb21GYWN0b3I6ICdVc2UgaGVpZ2h0IHpvb20gZmFjdG9yJyxcbiAgICBoZWlnaHRTY2FsZTogJ0hlaWdodCBTY2FsZScsXG4gICAgY292ZXJhZ2VSYW5nZTogJ0NvdmVyYWdlIFJhbmdlJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAnSGlnaCBQcmVjaXNpb24gUmVuZGVyaW5nJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdIaWdoIHByZWNpc2lvbiB3aWxsIHJlc3VsdCBpbiBzbG93ZXIgcGVyZm9ybWFuY2UnLFxuICAgIGhlaWdodDogJ0hlaWdodCcsXG4gICAgaGVpZ2h0RGVzY3JpcHRpb246ICdDbGljayBidXR0b24gYXQgdG9wIHJpZ2h0IG9mIHRoZSBtYXAgdG8gc3dpdGNoIHRvIDNkIHZpZXcnLFxuICAgIGZpbGw6ICdGaWxsJyxcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnRW5hYmxlIFBvbHlnb24gSGVpZ2h0JyxcbiAgICBzaG93V2lyZWZyYW1lOiAnU2hvdyBXaXJlZnJhbWUnLFxuICAgIHdlaWdodEludGVuc2l0eTogJ1dlaWdodCBJbnRlbnNpdHknLFxuICAgIHpvb21TY2FsZTogJ1pvb20gU2NhbGUnLFxuICAgIGhlaWdodFJhbmdlOiAnSGVpZ2h0IFJhbmdlJyxcbiAgICBoZWlnaHRNdWx0aXBsaWVyOiAnSGVpZ2h0IE11bHRpcGxpZXInLFxuICAgIGZpeGVkSGVpZ2h0OiAnRml4ZWQgaGVpZ2h0JyxcbiAgICBmaXhlZEhlaWdodERlc2NyaXB0aW9uOiAnVXNlIGhlaWdodCB3aXRob3V0IG1vZGlmaWNhdGlvbnMnLFxuICAgIGFsbG93SG92ZXI6ICdBbGxvdyBIb3ZlcicsXG4gICAgc2hvd05laWdoYm9yT25Ib3ZlcjogJ0hpZ2hsaWdodCBOZWlnaGJvcnMgT24gSG92ZXInLFxuICAgIHNob3dIaWdobGlnaHRDb2xvcjogJ1Nob3cgaGlnaGxpZ2h0IENvbG9yJyxcbiAgICBkYXJrTW9kZUVuYWJsZWQ6ICdEYXJrIGJhc2UgbWFwJyxcbiAgICB0cmFuc3BhcmVudEJhY2tncm91bmQ6ICdUcmFuc3BhcmVudCBCYWNrZ3JvdW5kJ1xuICB9LFxuICBsYXllck1hbmFnZXI6IHtcbiAgICBhZGREYXRhOiAnQWRkIERhdGEnLFxuICAgIGFkZExheWVyOiAnQWRkIExheWVyJyxcbiAgICBsYXllckJsZW5kaW5nOiAnTGF5ZXIgQmxlbmRpbmcnLFxuICAgIG92ZXJsYXlCbGVuZGluZzogJ092ZXJsYXkgQmxlbmRpbmcnXG4gIH0sXG4gIG1hcE1hbmFnZXI6IHtcbiAgICBtYXBTdHlsZTogJ01hcCBzdHlsZScsXG4gICAgYWRkTWFwU3R5bGU6ICdBZGQgTWFwIFN0eWxlJyxcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJzNEIEJ1aWxkaW5nIENvbG9yJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdCYWNrZ3JvdW5kIENvbG9yJ1xuICB9LFxuICBlZmZlY3RNYW5hZ2VyOiB7XG4gICAgZWZmZWN0czogJ0VmZmVjdHMnLFxuICAgIGFkZEVmZmVjdDogJ0FkZCBlZmZlY3QnLFxuICAgIHBpY2tEYXRlVGltZTogJ1BpY2sgZGF0ZS90aW1lJyxcbiAgICBjdXJyZW50VGltZTogJ0N1cnJlbnQgdGltZScsXG4gICAgcGlja0N1cnJyZW50VGltZTogJ1BpY2sgY3VycmVudCB0aW1lJyxcbiAgICBkYXRlOiAnRGF0ZScsXG4gICAgdGltZTogJ1RpbWUnLFxuICAgIHRpbWV6b25lOiAnVGltZXpvbmUnXG4gIH0sXG4gIGxheWVyQ29uZmlndXJhdGlvbjoge1xuICAgIGRlZmF1bHREZXNjcmlwdGlvbjogJ0NhbGN1bGF0ZSB7cHJvcGVydHl9IGJhc2VkIG9uIHNlbGVjdGVkIGZpZWxkJyxcbiAgICBob3dUbzogJ0hvdyB0bycsXG4gICAgc2hvd0NvbG9yQ2hhcnQ6ICdTaG93IENvbG9yIENoYXJ0JyxcbiAgICBoaWRlQ29sb3JDaGFydDogJ0hpZGUgQ29sb3IgQ2hhcnQnXG4gIH0sXG4gIGZpbHRlck1hbmFnZXI6IHtcbiAgICBhZGRGaWx0ZXI6ICdBZGQgRmlsdGVyJyxcbiAgICB0aW1lRmlsdGVyU3luYzogJ1N5bmNlZCBkYXRhc2V0cycsXG4gICAgdGltZUxheWVyU3luYzogJ0xpbmsgd2l0aCB0aGUgbGF5ZXIgdGltZWxpbmUnLFxuICAgIHRpbWVMYXllclVuc3luYzogJ1VubGluayB3aXRoIHRoZSBsYXllciB0aW1lbGluZScsXG4gICAgY29sdW1uOiAnQ29sdW1uJ1xuICB9LFxuICBkYXRhc2V0VGl0bGU6IHtcbiAgICBzaG93RGF0YVRhYmxlOiAnU2hvdyBkYXRhIHRhYmxlJyxcbiAgICByZW1vdmVEYXRhc2V0OiAnUmVtb3ZlIGRhdGFzZXQnXG4gIH0sXG4gIGRhdGFzZXRJbmZvOiB7XG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IHJvd3MnLFxuICAgIHZlY3RvclRpbGU6ICdWZWN0b3IgdGlsZScsXG4gICAgcmFzdGVyVGlsZTogJ1Jhc3RlciB0aWxlJyxcbiAgICB3bXNUaWxlOiAnV01TIHRpbGUnXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICBoaWRlTGF5ZXI6ICdIaWRlIGxheWVyJyxcbiAgICBzaG93TGF5ZXI6ICdTaG93IGxheWVyJyxcbiAgICBoaWRlRmVhdHVyZTogJ0hpZGUgZmVhdHVyZScsXG4gICAgc2hvd0ZlYXR1cmU6ICdTaG93IGZlYXR1cmUnLFxuICAgIGhpZGU6ICdoaWRlJyxcbiAgICBzaG93OiAnc2hvdycsXG4gICAgcmVtb3ZlTGF5ZXI6ICdSZW1vdmUgbGF5ZXInLFxuICAgIGR1cGxpY2F0ZUxheWVyOiAnRHVwbGljYXRlIGxheWVyJyxcbiAgICB6b29tVG9MYXllcjogJ1pvb20gdG8gbGF5ZXInLFxuICAgIHJlc2V0QWZ0ZXJFcnJvcjogJ1RyeSB0byBlbmFibGUgdGhlIGxheWVyIGFmdGVyIGFuIGVycm9yJyxcbiAgICBsYXllclNldHRpbmdzOiAnTGF5ZXIgc2V0dGluZ3MnLFxuICAgIGNsb3NlUGFuZWw6ICdDbG9zZSBjdXJyZW50IHBhbmVsJyxcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAnU3dpdGNoIHRvIGR1YWwgbWFwIHZpZXcnLFxuICAgIHNob3dMZWdlbmQ6ICdTaG93IGxlZ2VuZCcsXG4gICAgZGlzYWJsZTNETWFwOiAnRGlzYWJsZSAzRCBNYXAnLFxuICAgIERyYXdPbk1hcDogJ0RyYXcgb24gbWFwJyxcbiAgICBzZWxlY3RMb2NhbGU6ICdTZWxlY3QgbG9jYWxlJyxcbiAgICBzaG93QWlBc3Npc3RhbnRQYW5lbDogJ1Nob3cgQUkgQXNzaXN0YW50JyxcbiAgICBoaWRlQWlBc3Npc3RhbnRQYW5lbDogJ0hpZGUgQUkgQXNzaXN0YW50JyxcbiAgICBoaWRlTGF5ZXJQYW5lbDogJ0hpZGUgbGF5ZXIgcGFuZWwnLFxuICAgIHNob3dMYXllclBhbmVsOiAnU2hvdyBsYXllciBwYW5lbCcsXG4gICAgbW92ZVRvVG9wOiAnTW92ZSB0byB0b3Agb2YgZGF0YSBsYXllcnMnLFxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ1NlbGVjdCBiYXNlIG1hcCBzdHlsZScsXG4gICAgcmVtb3ZlQmFzZU1hcFN0eWxlOiAnUmVtb3ZlIGJhc2UgbWFwIHN0eWxlJyxcbiAgICBkZWxldGU6ICdEZWxldGUnLFxuICAgIHRpbWVQbGF5YmFjazogJ1RpbWUgUGxheWJhY2snLFxuICAgIHRpbWVGaWx0ZXJTeW5jOiAnU3luYyB3aXRoIGEgY29sdW1uIGZyb20gYW5vdGhlciBkYXRhc2V0JyxcbiAgICBjbG91ZFN0b3JhZ2U6ICdDbG91ZCBTdG9yYWdlJyxcbiAgICAnM0RNYXAnOiAnM0QgTWFwJyxcbiAgICBhbmltYXRpb25CeVdpbmRvdzogJ01vdmluZyBUaW1lIFdpbmRvdycsXG4gICAgYW5pbWF0aW9uQnlJbmNyZW1lbnRhbDogJ0luY3JlbWVudGFsIFRpbWUgV2luZG93JyxcbiAgICBzcGVlZDogJ3NwZWVkJyxcbiAgICBwbGF5OiAncGxheScsXG4gICAgcGF1c2U6ICdwYXVzZScsXG4gICAgcmVzZXQ6ICdyZXNldCcsXG4gICAgZXhwb3J0OiAnZXhwb3J0JyxcbiAgICB0aW1lTGF5ZXJTeW5jOiAnTGluayB3aXRoIHRoZSBsYXllciB0aW1lbGluZScsXG4gICAgdGltZUxheWVyVW5zeW5jOiAnVW5saW5rIHdpdGggdGhlIGxheWVyIHRpbWVsaW5lJyxcbiAgICBzeW5jVGltZWxpbmVTdGFydDogJ1N0YXJ0IG9mIGN1cnJlbnQgZmlsdGVyIHRpbWVmcmFtZScsXG4gICAgc3luY1RpbWVsaW5lRW5kOiAnRW5kIG9mIGN1cnJlbnQgZmlsdGVyIHRpbWVmcmFtZScsXG4gICAgc2hvd0VmZmVjdFBhbmVsOiAnU2hvdyBlZmZlY3QgcGFuZWwnLFxuICAgIGhpZGVFZmZlY3RQYW5lbDogJ0hpZGUgZWZmZWN0IHBhbmVsJyxcbiAgICByZW1vdmVFZmZlY3Q6ICdSZW1vdmUgZWZmZWN0JyxcbiAgICBkaXNhYmxlRWZmZWN0OiAnRGlzYWJsZSBlZmZlY3QnLFxuICAgIGVmZmVjdFNldHRpbmdzOiAnRWZmZWN0IHNldHRpbmdzJ1xuICB9LFxuICB0b29sYmFyOiB7XG4gICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnQgSW1hZ2UnLFxuICAgIGV4cG9ydERhdGE6ICdFeHBvcnQgRGF0YScsXG4gICAgZXhwb3J0TWFwOiAnRXhwb3J0IE1hcCcsXG4gICAgc2hhcmVNYXBVUkw6ICdTaGFyZSBNYXAgVVJMJyxcbiAgICBzYXZlTWFwOiAnU2F2ZSBNYXAnLFxuICAgIHNlbGVjdDogJ1NlbGVjdCcsXG4gICAgcG9seWdvbjogJ1BvbHlnb24nLFxuICAgIHJlY3RhbmdsZTogJ1JlY3RhbmdsZScsXG4gICAgaGlkZTogJ0hpZGUnLFxuICAgIHNob3c6ICdTaG93JyxcbiAgICAuLi5MT0NBTEVTXG4gIH0sXG4gIGVkaXRvcjoge1xuICAgIGZpbHRlckxheWVyOiAnRmlsdGVyIExheWVycycsXG4gICAgZmlsdGVyTGF5ZXJEaXNhYmxlZDogJ05vbi1wb2x5Z29uIGdlb21ldHJpZXMgY2Fubm90IGJlIHVzZWQgZm9yIGZpbHRlcmluZycsXG4gICAgY29weUdlb21ldHJ5OiAnQ29weSBHZW9tZXRyeScsXG4gICAgbm9MYXllcnNUb0ZpbHRlcjogJ05vIGxheWVycyB0byBmaWx0ZXInXG4gIH0sXG5cbiAgbW9kYWw6IHtcbiAgICB0aXRsZToge1xuICAgICAgZGVsZXRlRGF0YXNldDogJ0RlbGV0ZSBEYXRhc2V0JyxcbiAgICAgIGFkZERhdGFUb01hcDogJ0FkZCBEYXRhIFRvIE1hcCcsXG4gICAgICBleHBvcnRJbWFnZTogJ0V4cG9ydCBJbWFnZScsXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0IERhdGEnLFxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0IE1hcCcsXG4gICAgICBhZGRDdXN0b21NYXBib3hTdHlsZTogJ0FkZCBDdXN0b20gTWFwIFN0eWxlJyxcbiAgICAgIHNhdmVNYXA6ICdTYXZlIE1hcCcsXG4gICAgICBzaGFyZVVSTDogJ1NoYXJlIFVSTCdcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQnLFxuICAgICAgZXhwb3J0OiAnRXhwb3J0JyxcbiAgICAgIGFkZFN0eWxlOiAnQWRkIFN0eWxlJyxcbiAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtJ1xuICAgIH0sXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIHJhdGlvVGl0bGU6ICdSYXRpbycsXG4gICAgICByYXRpb0Rlc2NyaXB0aW9uOiAnQ2hvb3NlIHRoZSByYXRpbyBmb3IgdmFyaW91cyB1c2FnZXMuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdPcmlnaW5hbCBTY3JlZW4nLFxuICAgICAgcmF0aW9DdXN0b206ICdDdXN0b20nLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHV0aW9uJyxcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0hpZ2ggcmVzb2x1dGlvbiBpcyBiZXR0ZXIgZm9yIHByaW50cy4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdNYXAgTGVnZW5kJyxcbiAgICAgIG1hcExlZ2VuZEFkZDogJ0FkZCBsZWdlbmQgb24gbWFwJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnRGF0YXNldCcsXG4gICAgICBkYXRhc2V0U3VidGl0bGU6ICdDaG9vc2UgdGhlIGRhdGFzZXRzIHlvdSB3YW50IHRvIGV4cG9ydCcsXG4gICAgICBhbGxEYXRhc2V0czogJ0FsbCcsXG4gICAgICBkYXRhVHlwZVRpdGxlOiAnRGF0YSBUeXBlJyxcbiAgICAgIGRhdGFUeXBlU3VidGl0bGU6ICdDaG9vc2UgdGhlIHR5cGUgb2YgZGF0YSB5b3Ugd2FudCB0byBleHBvcnQnLFxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdGVyIERhdGEnLFxuICAgICAgZmlsdGVyRGF0YVN1YnRpdGxlOiAnWW91IGNhbiBjaG9vc2UgZXhwb3J0aW5nIG9yaWdpbmFsIGRhdGEgb3IgZmlsdGVyZWQgZGF0YScsXG4gICAgICBmaWx0ZXJlZERhdGE6ICdGaWx0ZXJlZCBkYXRhJyxcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnVW5maWx0ZXJlZCBEYXRhJyxcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR9IEZpbGVzJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBSb3dzJyxcbiAgICAgIHRpbGVkRGF0YXNldFdhcm5pbmc6IFwiKiBFeHBvcnQgRGF0YSBmb3IgVGlsZWQgZGF0YXNldHMgaXNuJ3Qgc3VwcG9ydGVkXCJcbiAgICB9LFxuICAgIGRlbGV0ZURhdGE6IHtcbiAgICAgIHdhcm5pbmc6ICd5b3UgYXJlIGdvaW5nIHRvIGRlbGV0ZSB0aGlzIGRhdGFzZXQuIEl0IHdpbGwgYWZmZWN0IHtsZW5ndGh9IGxheWVycydcbiAgICB9LFxuICAgIGFkZFN0eWxlOiB7XG4gICAgICBwdWJsaXNoVGl0bGU6XG4gICAgICAgICcyLiBJZiBlbnRlcmVkIG1hcGJveCBzdHlsZSB1cmwgaW4gc3RlcC4xLCBwdWJsaXNoIHlvdXIgc3R5bGUgYXQgbWFwYm94IG9yIHByb3ZpZGUgYWNjZXNzIHRva2VuLiAoT3B0aW9uYWwpJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTE6ICdZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBtYXAgc3R5bGUgYXQnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMjogJ2FuZCcsXG4gICAgICBwdWJsaXNoU3VidGl0bGUzOiAncHVibGlzaCcsXG4gICAgICBwdWJsaXNoU3VidGl0bGU0OiAnaXQuJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTU6ICdUbyB1c2UgcHJpdmF0ZSBzdHlsZSwgcGFzdGUgeW91cicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU2OiAnYWNjZXNzIHRva2VuJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTc6XG4gICAgICAgICdoZXJlLiAqa2VwbGVyLmdsIGlzIGEgY2xpZW50LXNpZGUgYXBwbGljYXRpb24sIGRhdGEgc3RheXMgaW4geW91ciBicm93c2VyLi4nLFxuICAgICAgZXhhbXBsZVRva2VuOiAnZS5nLiBway5hYmNkZWZnLnh4eHh4eCcsXG4gICAgICBwYXN0ZVRpdGxlOiAnMS4gUGFzdGUgc3R5bGUgdXJsJyxcbiAgICAgIHBhc3RlU3VidGl0bGUwOiAnU3R5bGUgdXJsIGNhbiBiZSBhIG1hcGJveCcsXG4gICAgICBwYXN0ZVN1YnRpdGxlMTogJ1doYXQgaXMgYScsXG4gICAgICBwYXN0ZVN1YnRpdGxlMjogJ3N0eWxlIFVSTCcsXG4gICAgICBwYXN0ZVN1YnRpdGxlMzogJ29yIGEgc3R5bGUuanNvbiB1c2luZyB0aGUnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTQ6ICdNYXBib3ggR0wgU3R5bGUgU3BlYycsXG4gICAgICBuYW1pbmdUaXRsZTogJzMuIE5hbWUgeW91ciBzdHlsZSdcbiAgICB9LFxuICAgIHNoYXJlTWFwOiB7XG4gICAgICB0aXRsZTogJ1NoYXJlIE1hcCcsXG4gICAgICBzaGFyZVVyaVRpdGxlOiAnU2hhcmUgTWFwIFVybCcsXG4gICAgICBzaGFyZVVyaVN1YnRpdGxlOiAnR2VuZXJhdGUgYSBtYXAgdXJsIHRvIHNoYXJlIHdpdGggb3RoZXJzJyxcbiAgICAgIGNsb3VkVGl0bGU6ICdDbG91ZCBzdG9yYWdlJyxcbiAgICAgIGNsb3VkU3VidGl0bGU6ICdMb2dpbiBhbmQgdXBsb2FkIG1hcCBkYXRhIHRvIHlvdXIgcGVyc29uYWwgY2xvdWQgc3RvcmFnZScsXG4gICAgICBzaGFyZURpc2NsYWltZXI6XG4gICAgICAgICdrZXBsZXIuZ2wgd2lsbCBzYXZlIHlvdXIgbWFwIGRhdGEgdG8geW91ciBwZXJzb25hbCBjbG91ZCBzdG9yYWdlLCBvbmx5IHBlb3BsZSB3aXRoIHRoZSBVUkwgY2FuIGFjY2VzcyB5b3VyIG1hcCBhbmQgZGF0YS4gJyArXG4gICAgICAgICdZb3UgY2FuIGVkaXQvZGVsZXRlIHRoZSBkYXRhIGZpbGUgaW4geW91ciBjbG91ZCBhY2NvdW50IGFueXRpbWUuJyxcbiAgICAgIGdvdG9QYWdlOiAnR28gdG8geW91ciBLZXBsZXIuZ2wge2N1cnJlbnRQcm92aWRlcn0gcGFnZSdcbiAgICB9LFxuICAgIHN0YXR1c1BhbmVsOiB7XG4gICAgICBtYXBVcGxvYWRpbmc6ICdNYXAgVXBsb2FkaW5nJyxcbiAgICAgIGVycm9yOiAnRXJyb3InXG4gICAgfSxcbiAgICBzYXZlTWFwOiB7XG4gICAgICB0aXRsZTogJ0Nsb3VkIHN0b3JhZ2UnLFxuICAgICAgc3VidGl0bGU6ICdMb2dpbiB0byBzYXZlIG1hcCB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UnXG4gICAgfSxcbiAgICBleHBvcnRNYXA6IHtcbiAgICAgIGZvcm1hdFRpdGxlOiAnTWFwIGZvcm1hdCcsXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ0Nob29zZSB0aGUgZm9ybWF0IHRvIGV4cG9ydCB5b3VyIG1hcCB0bycsXG4gICAgICBodG1sOiB7XG4gICAgICAgIHNlbGVjdGlvbjogJ0V4cG9ydCB5b3VyIG1hcCBpbnRvIGFuIGludGVyYWN0aXZlIGh0bWwgZmlsZS4nLFxuICAgICAgICB0b2tlblRpdGxlOiAnTWFwYm94IGFjY2VzcyB0b2tlbicsXG4gICAgICAgIHRva2VuU3VidGl0bGU6ICdVc2UgeW91ciBvd24gTWFwYm94IGFjY2VzcyB0b2tlbiBpbiB0aGUgaHRtbCAob3B0aW9uYWwpJyxcbiAgICAgICAgdG9rZW5QbGFjZWhvbGRlcjogJ1Bhc3RlIHlvdXIgTWFwYm94IGFjY2VzcyB0b2tlbicsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiBJZiB5b3UgZG8gbm90IHByb3ZpZGUgeW91ciBvd24gdG9rZW4sIHRoZSBtYXAgbWF5IGZhaWwgdG8gZGlzcGxheSBhdCBhbnkgdGltZSB3aGVuIHdlIHJlcGxhY2Ugb3VycyB0byBhdm9pZCBtaXN1c2UuICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjogJ1lvdSBjYW4gY2hhbmdlIHRoZSBNYXBib3ggdG9rZW4gbGF0ZXIgdXNpbmcgdGhlIGZvbGxvd2luZyBpbnN0cnVjdGlvbnM6ICcsXG4gICAgICAgIHRva2VuVXBkYXRlOiAnSG93IHRvIHVwZGF0ZSBhbiBleGlzdGluZyBtYXAgdG9rZW4uJyxcbiAgICAgICAgbW9kZVRpdGxlOiAnTWFwIE1vZGUnLFxuICAgICAgICBtb2RlU3VidGl0bGUxOiAnU2VsZWN0IHRoZSBhcHAgbW9kZS4gTW9yZSAnLFxuICAgICAgICBtb2RlU3VidGl0bGUyOiAnaW5mbycsXG4gICAgICAgIG1vZGVEZXNjcmlwdGlvbjogJ0FsbG93IHVzZXJzIHRvIHttb2RlfSB0aGUgbWFwJyxcbiAgICAgICAgcmVhZDogJ3JlYWQnLFxuICAgICAgICBlZGl0OiAnZWRpdCdcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnTWFwIENvbmZpZycsXG4gICAgICAgIGNvbmZpZ0Rpc2NsYWltZXI6XG4gICAgICAgICAgJ01hcCBjb25maWcgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgSnNvbiBmaWxlLiBJZiB5b3UgYXJlIHVzaW5nIGtlcGxlci5nbCBpbiB5b3VyIG93biBhcHAuIFlvdSBjYW4gY29weSB0aGlzIGNvbmZpZyBhbmQgcGFzcyBpdCB0byAnLFxuICAgICAgICBzZWxlY3Rpb246XG4gICAgICAgICAgJ0V4cG9ydCBjdXJyZW50IG1hcCBkYXRhIGFuZCBjb25maWcgaW50byBhIHNpbmdsZSBKc29uIGZpbGUuIFlvdSBjYW4gbGF0ZXIgb3BlbiB0aGUgc2FtZSBtYXAgYnkgdXBsb2FkaW5nIHRoaXMgZmlsZSB0byBrZXBsZXIuZ2wuJyxcbiAgICAgICAgZGlzY2xhaW1lcjpcbiAgICAgICAgICAnKiBNYXAgY29uZmlnIGlzIGNvdXBsZWQgd2l0aCBsb2FkZWQgZGF0YXNldHMuIOKAmGRhdGFJZOKAmSBpcyB1c2VkIHRvIGJpbmQgbGF5ZXJzLCBmaWx0ZXJzLCBhbmQgdG9vbHRpcHMgdG8gYSBzcGVjaWZpYyBkYXRhc2V0LiAnICtcbiAgICAgICAgICAnV2hlbiBwYXNzaW5nIHRoaXMgY29uZmlnIHRvIGFkZERhdGFUb01hcCwgbWFrZSBzdXJlIHRoZSBkYXRhc2V0IGlkIG1hdGNoZXMgdGhlIGRhdGFJZC9zIGluIHRoaXMgY29uZmlnLidcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRpbmdEaWFsb2c6IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJ1xuICAgIH0sXG4gICAgbG9hZERhdGE6IHtcbiAgICAgIHVwbG9hZDogJ0xvYWQgRmlsZXMnLFxuICAgICAgdGlsZXNldDogJ1RpbGVzZXQnLFxuICAgICAgc3RvcmFnZTogJ0xvYWQgZnJvbSBTdG9yYWdlJ1xuICAgIH0sXG4gICAgdHJpcEluZm86IHtcbiAgICAgIHRpdGxlOiAnQ3JlYXRlIHRyaXBzIGZyb20gR2VvSnNvbicsXG4gICAgICB0aXRsZVRhYmxlOiAnQ3JlYXRlIHRyaXBzIGZyb20gYSBsaXN0IG9mIHBvaW50cycsXG4gICAgICBkZXNjcmlwdGlvbjE6IGBUbyBhbmltYXRlIHRoZSBwYXRoLCB0aGUgR2VvSlNPTiBkYXRhIG5lZWRzIHRvIGNvbnRhaW4gXFxgTGluZVN0cmluZ1xcYCBpbiBpdHMgZmVhdHVyZSBnZW9tZXRyeSwgYW5kIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgTGluZVN0cmluZyBuZWVkIHRvIGhhdmUgNCBlbGVtZW50cyBpbiB0aGUgZm9ybWF0cyBvZlxuJHsnYGBganNvbid9XG5bbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIHRpbWVzdGFtcF1cbiR7J2BgYCd9XG5UaGUgM3JkIGVsZW1lbnQgaXMgYSB0aW1lc3RhbXAuIFZhbGlkIHRpbWVzdGFtcCBmb3JtYXRzIGluY2x1ZGUgdW5peCBpbiBzZWNvbmRzIHN1Y2ggYXMgXFxgMTU2NDE4NDM2M1xcYCBvciBpbiBtaWxsaXNlY29uZHMgc3VjaCBhcyBcXGAxNTY0MTg0MzYzMDAwXFxgLmAsXG4gICAgICBkZXNjcmlwdGlvblRhYmxlMTpcbiAgICAgICAgJ1RyaXBzIGNhbiBiZSBjcmVhdGVkIGJ5IGpvaW5pbmcgYSBsaXN0IG9mIHBvaW50cyBmcm9tIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUsIHNvcnQgYnkgdGltZXN0YW1wcyBhbmQgZ3JvdXAgYnkgdW5pcSBpZHMuJyxcbiAgICAgIGV4YW1wbGU6ICdFeGFtcGxlIEdlb0pTT04nLFxuICAgICAgZXhhbXBsZVRhYmxlOiAnRXhhbXBsZSBDc3YnXG4gICAgfSxcbiAgICBwb2x5Z29uSW5mbzoge1xuICAgICAgdGl0bGU6ICdDcmVhdGUgcG9seWdvbiBsYXllciBmcm9tIEdlb0pTT04gZmVhdHVyZScsXG4gICAgICB0aXRsZVRhYmxlOiAnQ3JlYXRlIHBhdGggZnJvbSBwb2ludHMnLFxuICAgICAgZGVzY3JpcHRpb246IGBQb2x5Z29uIGNhbiBiZSBjcmVhdGVkIGZyb21cbl9fMSAuQSBHZW9KU09OIEZlYXR1cmUgQ29sbGVjdGlvbl9fXG5fXzIuIEEgQ3N2IGNvbnRhaW5zIGdlb21ldHJ5IGNvbHVtbl9fXG5cbiMjIyAxLiBDcmVhdGUgcG9seWdvbiBmcm9tIEdlb0pTT04gZmlsZVxuXG5XaGVuIHVwbG9hZCBhIEdlb0pTT04gZmlsZSBjb250YWlucyBGZWF0dXJlQ29sbGVjdGlvbiwgYSBwb2x5Z29uIGxheWVyIHdpbGwgYmUgYXV0by1jcmVhdGVkXG5cbkV4YW1wbGUgR2VvSlNPTlxuJHsnYGBganNvbid9XG57XG4gIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gIFwiZmVhdHVyZXNcIjogW3tcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbMTAyLjAsIDAuNV1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwicHJvcDBcIjogXCJ2YWx1ZTBcIlxuICAgICAgfVxuICB9LCB7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gICAgICAgICAgICAgIFsxMDIuMCwgMC4wXSxcbiAgICAgICAgICAgICAgWzEwMy4wLCAxLjBdLFxuICAgICAgICAgICAgICBbMTA0LjAsIDAuMF0sXG4gICAgICAgICAgICAgIFsxMDUuMCwgMS4wXVxuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInByb3AwXCI6IFwidmFsdWUwXCJcbiAgICAgIH1cbiAgfV1cbn1cbiR7J2BgYCd9XG5cbiMjIyAyLiBDcmVhdGUgcG9seWdvbiBmcm9tIGEgR2VvbWV0cnkgY29sdW1uIGluIENzdiB0YWJsZVxuR2VvbWV0cmllcyAoUG9seWdvbnMsIFBvaW50cywgTGluZFN0cmluZ3MgZXRjKSBjYW4gYmUgZW1iZWRkZWQgaW50byBDU1YgYXMgYSBcXGBHZW9KU09OXFxgIG9yIFxcYFdLVFxcYCBmb3JtYXR0ZWQgc3RyaW5nLlxuXG4jIyMjIDIuMSBcXGBHZW9KU09OXFxgIHN0cmluZ1xuRXhhbXBsZSBkYXRhLmNzdiB3aXRoIFxcYEdlb0pTT05cXGAgc3RyaW5nXG4keydgYGB0eHQnfVxuaWQsX2dlb2pzb25cbjEsXCJ7XCJcInR5cGVcIlwiOlwiXCJQb2x5Z29uXCJcIixcIlwiY29vcmRpbmF0ZXNcIlwiOltbWy03NC4xNTg0OTEsNDAuODM1OTQ3XSxbLTc0LjE1NzkxNCw0MC44MzkwMl1dXX1cIlxuJHsnYGBgJ31cblxuIyMjIyAyLjIgXFxgV0tUXFxgIHN0cmluZ1xuRXhhbXBsZSBkYXRhLmNzdiB3aXRoIFxcYFdLVFxcYCBzdHJpbmdcbltUaGUgV2VsbC1Lbm93biBUZXh0IChXS1QpXShodHRwczovL2Rldi5teXNxbC5jb20vZG9jL3JlZm1hbi81LjcvZW4vZ2lzLWRhdGEtZm9ybWF0cy5odG1sI2dpcy13a3QtZm9ybWF0KSByZXByZXNlbnRhdGlvbiBvZiBnZW9tZXRyeSB2YWx1ZXMgaXMgZGVzaWduZWQgZm9yIGV4Y2hhbmdpbmcgZ2VvbWV0cnkgZGF0YSBpbiBBU0NJSSBmb3JtLlxuXG5FeGFtcGxlIGRhdGEuY3N2IHdpdGggV0tUXG4keydgYGB0eHQnfVxuaWQsX2dlb2pzb25cbjEsXCJQT0xZR09OKCgwIDAsMTAgMCwxMCAxMCwwIDEwLDAgMCksKDUgNSw3IDUsNyA3LDUgNywgNSA1KSlcIlxuJHsnYGBgJ31cbmAsXG4gICAgICBkZXNjcmlwdGlvblRhYmxlOiBgUGF0aHMgY2FuIGJlIGNyZWF0ZWQgYnkgam9pbmluZyBhIGxpc3Qgb2YgcG9pbnRzIGZyb20gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSwgc29ydCBieSBhbiBpbmRleCBmaWVsZCAoZS5nLiB0aW1lc3RhbXApIGFuZCBncm91cCBieSB1bmlxIGlkcy5cblxuICAjIyMgTGF5ZXIgY29sdW1uczpcbiAgLSAqKmlkKio6IC0gKnJlcXVpcmVkKiZuYnNwOy0gQSBcXGBpZFxcYCBjb2x1bW4gaXMgdXNlZCB0byBncm91cCBieSBwb2ludHMuIFBvaW50cyB3aXRoIHRoZSBzYW1lIGlkIHdpbGwgYmUgam9pbmVkIGludG8gYSBzaW5nbGUgcGF0aC5cbiAgLSAqKmxhdCoqOiAtICpyZXF1aXJlZCombmJzcDstIFRoZSBsYXRpdHVkZSBvZiB0aGUgcG9pbnRcbiAgLSAqKmxvbioqOiAtICpyZXF1aXJlZCombmJzcDstIFRoZSBsb25naXR1ZGUgb2YgdGhlIHBvaW50XG4gIC0gKiphbHQqKjogLSAqb3B0aW9uYWwqJm5ic3A7LSBUaGUgYWx0aXR1ZGUgb2YgdGhlIHBvaW50XG4gIC0gKipzb3J0IGJ5Kio6IC0gKm9wdGlvbmFsKiZuYnNwOy0gQSBcXGBzb3J0IGJ5XFxgIGNvbHVtbiBpcyB1c2VkIHRvIHNvcnQgdGhlIHBvaW50cywgaWYgbm90IHNwZWNpZmllZCwgcG9pbnRzIHdpbGwgYmUgc29ydGVkIGJ5IHJvdyBpbmRleC5cbmAsXG4gICAgICBleGFtcGxlVGFibGU6ICdFeGFtcGxlIENTVidcbiAgICB9LFxuICAgIGljb25JbmZvOiB7XG4gICAgICB0aXRsZTogJ0hvdyB0byBkcmF3IGljb25zJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgJ0luIHlvdXIgY3N2LCBjcmVhdGUgYSBjb2x1bW4sIHB1dCB0aGUgbmFtZSBvZiB0aGUgaWNvbiB5b3Ugd2FudCB0byBkcmF3IGluIGl0LiBZb3UgY2FuIGxlYXZlIHRoZSBjZWxsIGVtcHR5IGlmIHlvdSBkbyBub3Qgd2FudCB0aGUgaWNvbiB0byBzaG93IGZvciBzb21lIHBvaW50cy4gV2hlbiB0aGUgY29sdW1uIGlzIG5hbWVkJyxcbiAgICAgIGNvZGU6ICdpY29uJyxcbiAgICAgIGRlc2NyaXB0aW9uMjogJyBrZXBsZXIuZ2wgd2lsbCBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhIGljb24gbGF5ZXIgZm9yIHlvdS4nLFxuICAgICAgZXhhbXBsZTogJ0V4YW1wbGU6JyxcbiAgICAgIGljb25zOiAnSWNvbnMnXG4gICAgfSxcbiAgICBzdG9yYWdlTWFwVmlld2VyOiB7XG4gICAgICBsYXN0TW9kaWZpZWQ6ICdMYXN0IG1vZGlmaWVkIHtsYXN0VXBkYXRlZH0gYWdvJyxcbiAgICAgIGJhY2s6ICdCYWNrJ1xuICAgIH0sXG4gICAgb3ZlcndyaXRlTWFwOiB7XG4gICAgICB0aXRsZTogJ1NhdmluZyBtYXAuLi4nLFxuICAgICAgYWxyZWFkeUV4aXN0czogJ2FscmVhZHkgZXhpc3RzIGluIHlvdXIge21hcFNhdmVkfS4gV291bGQgeW91IGxpa2UgdG8gb3ZlcndyaXRlIGl0PydcbiAgICB9LFxuICAgIGxvYWRTdG9yYWdlTWFwOiB7XG4gICAgICBiYWNrOiAnQmFjaycsXG4gICAgICBnb1RvUGFnZTogJ0dvIHRvIHlvdXIgS2VwbGVyLmdsIHtkaXNwbGF5TmFtZX0gcGFnZScsXG4gICAgICBzdG9yYWdlTWFwczogJ1N0b3JhZ2UgLyBNYXBzJyxcbiAgICAgIG5vU2F2ZWRNYXBzOiAnTm8gc2F2ZWQgbWFwcyB5ZXQnLFxuICAgICAgZm91cnNxdWFyZVN0b3JhZ2VNZXNzYWdlOlxuICAgICAgICAnT25seSBtYXBzIHNhdmVkIHdpdGggS2VwbGVyLmdsID4gU2F2ZSA+IEZvdXJzcXVhcmUgU3RvcmFnZSBvcHRpb24gYXJlIHNob3duIGhlcmUnXG4gICAgfVxuICB9LFxuICBoZWFkZXI6IHtcbiAgICB2aXNpYmxlTGF5ZXJzOiAnVmlzaWJsZSBsYXllcnMnLFxuICAgIGxheWVyTGVnZW5kOiAnTGVnZW5kJ1xuICB9LFxuICBpbnRlcmFjdGlvbnM6IHtcbiAgICB0b29sdGlwOiAnVG9vbHRpcCcsXG4gICAgYnJ1c2g6ICdCcnVzaCcsXG4gICAgY29vcmRpbmF0ZTogJ0Nvb3JkaW5hdGVzJyxcbiAgICBnZW9jb2RlcjogJ0dlb2NvZGVyJ1xuICB9LFxuICBsYXllckJsZW5kaW5nOiB7XG4gICAgdGl0bGU6ICdMYXllciBCbGVuZGluZycsXG4gICAgYWRkaXRpdmU6ICdhZGRpdGl2ZScsXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcbiAgICBzdWJ0cmFjdGl2ZTogJ3N1YnRyYWN0aXZlJ1xuICB9LFxuICBvdmVybGF5QmxlbmRpbmc6IHtcbiAgICB0aXRsZTogJ01hcCBvdmVybGF5IGJsZW5kaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0JsZW5kIGxheWVycyB3aXRoIHRoZSBiYXNlIG1hcCBzbyB0aGF0IGJvdGggYXJlIHZpc2libGUuJyxcbiAgICBzY3JlZW46ICdkYXJrIGJhc2UgbWFwJyxcbiAgICBub3JtYWw6ICdub3JtYWwnLFxuICAgIGRhcmtlbjogJ2xpZ2h0IGJhc2UgbWFwJ1xuICB9LFxuICBjb2x1bW5zOiB7XG4gICAgdGl0bGU6ICdDb2x1bW5zJyxcbiAgICBsYXQ6ICdsYXQnLFxuICAgIGxuZzogJ2xuZycsXG4gICAgYWx0aXR1ZGU6ICdhbHRpdHVkZScsXG4gICAgYWx0OiAnYWx0aXR1ZGUnLFxuICAgIGlkOiAnaWQnLFxuICAgIHRpbWVzdGFtcDogJ3RpbWUnLFxuICAgIGljb246ICdpY29uJyxcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgZ2VvYXJyb3c6ICdnZW9hcnJvdycsXG4gICAgZ2VvYXJyb3cwOiAnZ2VvYXJyb3cgc291cmNlJyxcbiAgICBnZW9hcnJvdzE6ICdnZW9hcnJvdyB0YXJnZXQnLFxuICAgIHRva2VuOiAndG9rZW4nLFxuICAgIHNvcnRCeTogJ3NvcnQgYnknLFxuICAgIG5laWdoYm9yczogJ25laWdoYm9ycycsXG4gICAgYXJjOiB7XG4gICAgICBsYXQwOiAnc291cmNlIGxhdCBvciBoZXggaWQnLFxuICAgICAgbG5nMDogJ3NvdXJjZSBsbmcgb3IgaGV4IGlkJyxcbiAgICAgIGxhdDE6ICd0YXJnZXQgbGF0IG9yIGhleCBpZCcsXG4gICAgICBsbmcxOiAndGFyZ2V0IGxuZyBvciBoZXggaWQnXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICBhbHQwOiAnc291cmNlIGFsdGl0dWRlJyxcbiAgICAgIGFsdDE6ICd0YXJnZXQgYWx0aXR1ZGUnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnR3JpZCBTaXplIChrbSknXG4gICAgfSxcbiAgICBoZXhhZ29uOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnSGV4YWdvbiBSYWRpdXMgKGttKSdcbiAgICB9LFxuICAgIGhleF9pZDogJ2hleCBpZCdcbiAgfSxcbiAgY29sb3I6IHtcbiAgICBjdXN0b21QYWxldHRlOiAnQ3VzdG9tIFBhbGV0dGUnLFxuICAgICdVcGRhdGUgY29sb3InOiAnVXBkYXRlIGNvbG9yJyxcbiAgICBzdGVwczogJ1N0ZXBzJyxcbiAgICB0eXBlOiAnVHlwZScsXG4gICAgc2VxdWVudGlhbDogJ1NlcXVlbnRpYWwnLFxuICAgIHF1YWxpdGF0aXZlOiAnUXVhbGl0YXRpdmUnLFxuICAgIGRpdmVyZ2luZzogJ0RpdmVyZ2luZycsXG4gICAgY3ljbGljYWw6ICdDeWNsaWNhbCcsXG4gICAgYWxsOiAnQWxsJyxcbiAgICBjb2xvckJsaW5kU2FmZTogJ0NvbG9yYmxpbmQgU2FmZScsXG4gICAgcmV2ZXJzZWQ6ICdSZXZlcnNlZCcsXG4gICAgZGlzYWJsZVN0ZXBSZWFzb246IGBDYW4ndCBjaGFuZ2UgbnVtYmVyIG9mIHN0ZXBzIHdpdGggY3VzdG9tIGNvbG9yIGJyZWFrcywgdXNlIGN1c3RvbSBwYWxldHRlIHRvIGVkaXQgc3RlcHNgLFxuICAgIHByZXNldDogJ1ByZXNldCBDb2xvcnMnLFxuICAgIHBpY2tlcjogJ0NvbG9yIFBpY2tlcidcbiAgfSxcbiAgY29sdW1uU3RhdHM6IHtcbiAgICBtaW46ICdNaW4nLFxuICAgIG1lYW46ICdNZWFuJyxcbiAgICBtYXg6ICdNYXgnXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgY29sb3JTY2FsZTogJ0NvbG9yIFNjYWxlJyxcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcbiAgICBzdHJva2VTY2FsZTogJ1N0cm9rZSBTY2FsZScsXG4gICAgc3Ryb2tlQ29sb3JTY2FsZTogJ1N0cm9rZSBDb2xvciBTY2FsZScsXG4gICAgc2NhbGU6ICdTY2FsZScsXG4gICAgb3JkaW5hbDogJ09yZGluYWwnLFxuICAgIHF1YW50aWxlOiAnUXVhbnRpbGUnLFxuICAgIHF1YW50aXplOiAnUXVhbnRpemUnLFxuICAgIGxpbmVhcjogJ0xpbmVhcicsXG4gICAgc3FydDogJ1NxcnQnLFxuICAgIGxvZzogJ0xvZycsXG4gICAgcG9pbnQ6ICdQb2ludCcsXG4gICAgdGhyZXNob2xkOiAnVGhyZXNob2xkJyxcbiAgICBjdXN0b206ICdDdXN0b20gQnJlYWtzJyxcbiAgICBjdXN0b21PcmRpbmFsOiAnQ3VzdG9tIE9yZGluYWwnXG4gIH0sXG4gIGZpbGVVcGxvYWRlcjoge1xuICAgIG1lc3NhZ2U6ICdEcmFnICYgRHJvcCBZb3VyIEZpbGUocykgSGVyZScsXG4gICAgY2hyb21lTWVzc2FnZTpcbiAgICAgICcqQ2hyb21lIHVzZXI6IExpbWl0IGZpbGUgc2l6ZSB0byAyNTBtYiwgaWYgbmVlZCB0byB1cGxvYWQgbGFyZ2VyIGZpbGUsIHRyeSBTYWZhcmknLFxuICAgIGRpc2NsYWltZXI6XG4gICAgICAnKmtlcGxlci5nbCBpcyBhIGNsaWVudC1zaWRlIGFwcGxpY2F0aW9uIHdpdGggbm8gc2VydmVyIGJhY2tlbmQuIERhdGEgbGl2ZXMgb25seSBvbiB5b3VyIG1hY2hpbmUvYnJvd3Nlci4gJyArXG4gICAgICAnTm8gaW5mb3JtYXRpb24gb3IgbWFwIGRhdGEgaXMgc2VudCB0byBhbnkgc2VydmVyLicsXG4gICAgY29uZmlnVXBsb2FkTWVzc2FnZTpcbiAgICAgICdVcGxvYWQge2ZpbGVGb3JtYXROYW1lc30gb3Igc2F2ZWQgbWFwICoqSnNvbioqLiBSZWFkIG1vcmUgYWJvdXQgWyoqc3VwcG9ydGVkIGZpbGUgZm9ybWF0cyoqXScsXG4gICAgYnJvd3NlRmlsZXM6ICdicm93c2UgeW91ciBmaWxlcycsXG4gICAgdXBsb2FkaW5nOiAnVXBsb2FkaW5nJyxcbiAgICBmaWxlTm90U3VwcG9ydGVkOiAnRmlsZSB7ZXJyb3JGaWxlc30gaXMgbm90IHN1cHBvcnRlZC4nLFxuICAgIG9yOiAnb3InXG4gIH0sXG4gIHRpbGVzZXRTZXR1cDoge1xuICAgIGhlYWRlcjogJ1NldHVwIFZlY3RvciBUaWxlcycsXG4gICAgcmFzdGVyVGlsZUhlYWRlcjogJ1NldHVwIFJhc3RlciBUaWxlcycsXG4gICAgYWRkVGlsZXNldFRleHQ6ICdBZGQgVGlsZXNldCdcbiAgfSxcbiAgZ2VvY29kZXI6IHtcbiAgICB0aXRsZTogJ0VudGVyIGFuIGFkZHJlc3Mgb3IgY29vcmRpbmF0ZXMsIGV4IDM3Ljc5LC0xMjIuNDAnXG4gIH0sXG4gIGZpZWxkU2VsZWN0b3I6IHtcbiAgICBjbGVhckFsbDogJ0NsZWFyIEFsbCcsXG4gICAgZm9ybWF0dGluZzogJ0Zvcm1hdHRpbmcnXG4gIH0sXG4gIGNvbXBhcmU6IHtcbiAgICBtb2RlTGFiZWw6ICdDb21wYXJpc29uIE1vZGUnLFxuICAgIHR5cGVMYWJlbDogJ0NvbXBhcmlzb24gVHlwZScsXG4gICAgdHlwZXM6IHtcbiAgICAgIGFic29sdXRlOiAnQWJzb2x1dGUnLFxuICAgICAgcmVsYXRpdmU6ICdSZWxhdGl2ZSdcbiAgICB9XG4gIH0sXG4gIG1hcFBvcG92ZXI6IHtcbiAgICBwcmltYXJ5OiAnUHJpbWFyeSdcbiAgfSxcbiAgZGVuc2l0eTogJ2RlbnNpdHknLFxuICAnQnVnIFJlcG9ydCc6ICdCdWcgUmVwb3J0JyxcbiAgJ1VzZXIgR3VpZGUnOiAnVXNlciBHdWlkZScsXG4gIFNhdmU6ICdTYXZlJyxcbiAgU2hhcmU6ICdTaGFyZScsXG4gIG1hcExlZ2VuZDoge1xuICAgIGxheWVyczoge1xuICAgICAgbGluZToge1xuICAgICAgICBzaW5nbGVDb2xvcjoge1xuICAgICAgICAgIHNvdXJjZUNvbG9yOiAnU291cmNlJyxcbiAgICAgICAgICB0YXJnZXRDb2xvcjogJ1RhcmdldCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFyYzoge1xuICAgICAgICBzaW5nbGVDb2xvcjoge1xuICAgICAgICAgIHNvdXJjZUNvbG9yOiAnU291cmNlJyxcbiAgICAgICAgICB0YXJnZXRDb2xvcjogJ1RhcmdldCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgc2luZ2xlQ29sb3I6IHtcbiAgICAgICAgICBjb2xvcjogJ0ZpbGwgY29sb3InLFxuICAgICAgICAgIHN0cm9rZUNvbG9yOiAnT3V0bGluZSdcbiAgICAgICAg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