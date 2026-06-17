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
      copy: 'Copy',
      copied: 'Copied!',
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
      shareUriTitle: 'Share URL',
      generatedUrlTitle: 'Share URL',
      shareUriSubtitle: 'Generate a map url to share with others',
      cloudTitle: 'Cloud storage',
      cloudSubtitle: 'Login and upload map data to your personal cloud storage',
      shareDisclaimer: 'With kepler.gl on Data Toolbox, you can publish a URL that anyone can access for your created data map. ' + 'When sharing, the latest state is saved before publication.',
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
  'Update color': 'Update color',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbG9jYWxlcyIsInJlcXVpcmUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3BlcnR5Iiwid2VpZ2h0IiwibGFiZWwiLCJmaWxsQ29sb3IiLCJjb2xvciIsImNvdmVyYWdlIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImhlaWdodCIsInN1bSIsInBvaW50Q291bnQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInNlbGVjdEZpZWxkIiwieUF4aXMiLCJzZWxlY3RUeXBlIiwic2VsZWN0VmFsdWUiLCJlbnRlclZhbHVlIiwiZW1wdHkiLCJzZWxlY3RMYXllciIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsImJhY2tncm91bmQiLCJwYW5lbCIsInRleHQiLCJsYWJlbFdpdGhJZCIsImZvbnRTaXplIiwiZm9udENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFuY2hvciIsImFsaWdubWVudCIsImFkZE1vcmVMYWJlbCIsIm91dGxpbmVXaWR0aCIsIm91dGxpbmVDb2xvciIsInNpZGViYXIiLCJwYW5lbHMiLCJsYXllciIsImludGVyYWN0aW9uIiwiYmFzZW1hcCIsInBhbmVsVmlld1RvZ2dsZSIsImxpc3QiLCJieURhdGFzZXQiLCJyZXF1aXJlZCIsImNvbHVtbk1vZGVzU2VwYXJhdG9yIiwicHJvcGVydHlCYXNlZE9uIiwic3Ryb2tlV2lkdGgiLCJiYXNpYyIsInRyYWlsTGVuZ3RoIiwidHJhaWxMZW5ndGhEZXNjcmlwdGlvbiIsIm5ld0xheWVyIiwiZWxldmF0aW9uQnlEZXNjcmlwdGlvbiIsImNvbG9yQnlEZXNjcmlwdGlvbiIsImFnZ3JlZ2F0ZUJ5Iiwic2VydmljZSIsImFwcGVhcmFuY2UiLCJ1bmlxdWVJZEZpZWxkIiwidHlwZSIsInBvaW50IiwiYXJjIiwibGluZSIsImdyaWQiLCJoZXhiaW4iLCJwb2x5Z29uIiwiZ2VvanNvbiIsImNsdXN0ZXIiLCJpY29uIiwiaGVhdG1hcCIsImhleGFnb24iLCJoZXhhZ29uaWQiLCJ0cmlwIiwiczIiLCJ2ZWN0b3J0aWxlIiwicmFzdGVydGlsZSIsIndtcyIsImhvdmVyIiwibGF5ZXJVcGRhdGVFcnJvciIsImxheWVyVmlzQ29uZmlncyIsImFuZ2xlIiwic3Ryb2tlV2lkdGhSYW5nZSIsImZpeGVkUmFkaXVzIiwiZml4ZWRSYWRpdXNEZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsInJhZGl1c1JhbmdlUGl4ZWxzIiwiYmlsbGJvYXJkIiwiYmlsbGJvYXJkRGVzY3JpcHRpb24iLCJmYWRlVHJhaWwiLCJvcGFjaXR5IiwiY29sb3JSYW5nZSIsInN0cm9rZUNvbG9yUmFuZ2UiLCJ0YXJnZXRDb2xvciIsImNvbG9yQWdncmVnYXRpb24iLCJoZWlnaHRBZ2dyZWdhdGlvbiIsInJlc29sdXRpb25SYW5nZSIsInNpemVTY2FsZSIsIndvcmxkVW5pdFNpemUiLCJlbGV2YXRpb25TY2FsZSIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3IiLCJlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yRGVzY3JpcHRpb24iLCJlbmFibGVIZWlnaHRab29tRmFjdG9yIiwiaGVpZ2h0U2NhbGUiLCJjb3ZlcmFnZVJhbmdlIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZyIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbiIsImhlaWdodERlc2NyaXB0aW9uIiwiZmlsbCIsImVuYWJsZVBvbHlnb25IZWlnaHQiLCJzaG93V2lyZWZyYW1lIiwid2VpZ2h0SW50ZW5zaXR5Iiwiem9vbVNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJoZWlnaHRNdWx0aXBsaWVyIiwiZml4ZWRIZWlnaHQiLCJmaXhlZEhlaWdodERlc2NyaXB0aW9uIiwiYWxsb3dIb3ZlciIsInNob3dOZWlnaGJvck9uSG92ZXIiLCJzaG93SGlnaGxpZ2h0Q29sb3IiLCJkYXJrTW9kZUVuYWJsZWQiLCJ0cmFuc3BhcmVudEJhY2tncm91bmQiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwib3ZlcmxheUJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJlZmZlY3RNYW5hZ2VyIiwiZWZmZWN0cyIsImFkZEVmZmVjdCIsInBpY2tEYXRlVGltZSIsImN1cnJlbnRUaW1lIiwicGlja0N1cnJyZW50VGltZSIsImRhdGUiLCJ0aW1lIiwidGltZXpvbmUiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsInNob3dDb2xvckNoYXJ0IiwiaGlkZUNvbG9yQ2hhcnQiLCJmaWx0ZXJNYW5hZ2VyIiwiYWRkRmlsdGVyIiwidGltZUZpbHRlclN5bmMiLCJ0aW1lTGF5ZXJTeW5jIiwidGltZUxheWVyVW5zeW5jIiwiY29sdW1uIiwiZGF0YXNldFRpdGxlIiwic2hvd0RhdGFUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJkYXRhc2V0SW5mbyIsInJvd0NvdW50IiwidmVjdG9yVGlsZSIsInJhc3RlclRpbGUiLCJ3bXNUaWxlIiwidG9vbHRpcCIsImhpZGVMYXllciIsInNob3dMYXllciIsImhpZGVGZWF0dXJlIiwic2hvd0ZlYXR1cmUiLCJoaWRlIiwic2hvdyIsInJlbW92ZUxheWVyIiwiZHVwbGljYXRlTGF5ZXIiLCJ6b29tVG9MYXllciIsInJlc2V0QWZ0ZXJFcnJvciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJzaG93QWlBc3Npc3RhbnRQYW5lbCIsImhpZGVBaUFzc2lzdGFudFBhbmVsIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInJlbW92ZUJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsImFuaW1hdGlvbkJ5V2luZG93IiwiYW5pbWF0aW9uQnlJbmNyZW1lbnRhbCIsInNwZWVkIiwicGxheSIsInBhdXNlIiwicmVzZXQiLCJzeW5jVGltZWxpbmVTdGFydCIsInN5bmNUaW1lbGluZUVuZCIsInNob3dFZmZlY3RQYW5lbCIsImhpZGVFZmZlY3RQYW5lbCIsInJlbW92ZUVmZmVjdCIsImRpc2FibGVFZmZlY3QiLCJlZmZlY3RTZXR0aW5ncyIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwiZWRpdG9yIiwiZmlsdGVyTGF5ZXIiLCJmaWx0ZXJMYXllckRpc2FibGVkIiwiY29weUdlb21ldHJ5Iiwibm9MYXllcnNUb0ZpbHRlciIsIm1vZGFsIiwiZGVsZXRlRGF0YXNldCIsImFkZERhdGFUb01hcCIsImFkZEN1c3RvbU1hcGJveFN0eWxlIiwic2hhcmVVUkwiLCJidXR0b24iLCJkb3dubG9hZCIsImFkZFN0eWxlIiwiY29weSIsImNvcGllZCIsInNhdmUiLCJkZWZhdWx0Q2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJyYXRpb1RpdGxlIiwicmF0aW9EZXNjcmlwdGlvbiIsInJhdGlvT3JpZ2luYWxTY3JlZW4iLCJyYXRpb0N1c3RvbSIsInJhdGlvNF8zIiwicmF0aW8xNl85IiwicmVzb2x1dGlvblRpdGxlIiwicmVzb2x1dGlvbkRlc2NyaXB0aW9uIiwibWFwTGVnZW5kVGl0bGUiLCJtYXBMZWdlbmRBZGQiLCJkYXRhc2V0U3VidGl0bGUiLCJhbGxEYXRhc2V0cyIsImRhdGFUeXBlVGl0bGUiLCJkYXRhVHlwZVN1YnRpdGxlIiwiZmlsdGVyRGF0YVRpdGxlIiwiZmlsdGVyRGF0YVN1YnRpdGxlIiwiZmlsdGVyZWREYXRhIiwidW5maWx0ZXJlZERhdGEiLCJmaWxlQ291bnQiLCJ0aWxlZERhdGFzZXRXYXJuaW5nIiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUwIiwicGFzdGVTdWJ0aXRsZTEiLCJwYXN0ZVN1YnRpdGxlMiIsInBhc3RlU3VidGl0bGUzIiwicGFzdGVTdWJ0aXRsZTQiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsImdlbmVyYXRlZFVybFRpdGxlIiwic2hhcmVVcmlTdWJ0aXRsZSIsImNsb3VkVGl0bGUiLCJjbG91ZFN1YnRpdGxlIiwic2hhcmVEaXNjbGFpbWVyIiwiZ290b1BhZ2UiLCJzdGF0dXNQYW5lbCIsIm1hcFVwbG9hZGluZyIsImVycm9yIiwic3VidGl0bGUiLCJmb3JtYXRUaXRsZSIsImZvcm1hdFN1YnRpdGxlIiwiaHRtbCIsInNlbGVjdGlvbiIsInRva2VuVGl0bGUiLCJ0b2tlblN1YnRpdGxlIiwidG9rZW5QbGFjZWhvbGRlciIsInRva2VuTWlzdXNlV2FybmluZyIsInRva2VuRGlzY2xhaW1lciIsInRva2VuVXBkYXRlIiwibW9kZVRpdGxlIiwibW9kZVN1YnRpdGxlMSIsIm1vZGVTdWJ0aXRsZTIiLCJtb2RlRGVzY3JpcHRpb24iLCJyZWFkIiwiZWRpdCIsImpzb24iLCJjb25maWdUaXRsZSIsImNvbmZpZ0Rpc2NsYWltZXIiLCJkaXNjbGFpbWVyIiwibG9hZGluZ0RpYWxvZyIsImxvYWRpbmciLCJsb2FkRGF0YSIsInVwbG9hZCIsInRpbGVzZXQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJ0aXRsZVRhYmxlIiwiZGVzY3JpcHRpb24xIiwiY29uY2F0IiwiZGVzY3JpcHRpb25UYWJsZTEiLCJleGFtcGxlIiwiZXhhbXBsZVRhYmxlIiwicG9seWdvbkluZm8iLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uVGFibGUiLCJpY29uSW5mbyIsImNvZGUiLCJkZXNjcmlwdGlvbjIiLCJpY29ucyIsInN0b3JhZ2VNYXBWaWV3ZXIiLCJsYXN0TW9kaWZpZWQiLCJiYWNrIiwib3ZlcndyaXRlTWFwIiwiYWxyZWFkeUV4aXN0cyIsImxvYWRTdG9yYWdlTWFwIiwiZ29Ub1BhZ2UiLCJzdG9yYWdlTWFwcyIsIm5vU2F2ZWRNYXBzIiwiZm91cnNxdWFyZVN0b3JhZ2VNZXNzYWdlIiwiaGVhZGVyIiwidmlzaWJsZUxheWVycyIsImxheWVyTGVnZW5kIiwiaW50ZXJhY3Rpb25zIiwiYnJ1c2giLCJjb29yZGluYXRlIiwiZ2VvY29kZXIiLCJhZGRpdGl2ZSIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwic2NyZWVuIiwiZGFya2VuIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiYWx0IiwiaWQiLCJ0aW1lc3RhbXAiLCJnZW9hcnJvdyIsImdlb2Fycm93MCIsImdlb2Fycm93MSIsInRva2VuIiwic29ydEJ5IiwibmVpZ2hib3JzIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImFsdDAiLCJhbHQxIiwiaGV4X2lkIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwic2VxdWVudGlhbCIsInF1YWxpdGF0aXZlIiwiZGl2ZXJnaW5nIiwiY3ljbGljYWwiLCJhbGwiLCJjb2xvckJsaW5kU2FmZSIsInJldmVyc2VkIiwiZGlzYWJsZVN0ZXBSZWFzb24iLCJwcmVzZXQiLCJwaWNrZXIiLCJjb2x1bW5TdGF0cyIsIm1pbiIsIm1lYW4iLCJtYXgiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsInN0cm9rZUNvbG9yU2NhbGUiLCJvcmRpbmFsIiwicXVhbnRpbGUiLCJxdWFudGl6ZSIsImxpbmVhciIsInNxcnQiLCJsb2ciLCJ0aHJlc2hvbGQiLCJjdXN0b20iLCJjdXN0b21PcmRpbmFsIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJ0aWxlc2V0U2V0dXAiLCJyYXN0ZXJUaWxlSGVhZGVyIiwiYWRkVGlsZXNldFRleHQiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIiwibWFwTGVnZW5kIiwibGF5ZXJzIiwic2luZ2xlQ29sb3IiLCJzb3VyY2VDb2xvciJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sb2NhbGl6YXRpb24vc3JjL3RyYW5zbGF0aW9ucy9lbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgeyBMT0NBTEVTIH0gZnJvbSAnLi4vbG9jYWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcGVydHk6IHtcbiAgICB3ZWlnaHQ6ICd3ZWlnaHQnLFxuICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgIGZpbGxDb2xvcjogJ2ZpbGwgY29sb3InLFxuICAgIGNvbG9yOiAnY29sb3InLFxuICAgIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxuICAgIHN0cm9rZUNvbG9yOiAnc3Ryb2tlIGNvbG9yJyxcbiAgICByYWRpdXM6ICdyYWRpdXMnLFxuICAgIG91dGxpbmU6ICdvdXRsaW5lJyxcbiAgICBzdHJva2U6ICdzdHJva2UnLFxuICAgIGRlbnNpdHk6ICdkZW5zaXR5JyxcbiAgICBoZWlnaHQ6ICdoZWlnaHQnLFxuICAgIHN1bTogJ3N1bScsXG4gICAgcG9pbnRDb3VudDogJ1BvaW50IENvdW50J1xuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgc2VsZWN0RmllbGQ6ICdTZWxlY3QgYSBmaWVsZCcsXG4gICAgeUF4aXM6ICdZIEF4aXMnLFxuICAgIHNlbGVjdFR5cGU6ICdTZWxlY3QgQSBUeXBlJyxcbiAgICBzZWxlY3RWYWx1ZTogJ1NlbGVjdCBBIFZhbHVlJyxcbiAgICBlbnRlclZhbHVlOiAnRW50ZXIgYSB2YWx1ZScsXG4gICAgZW1wdHk6ICdlbXB0eScsXG4gICAgc2VsZWN0TGF5ZXI6ICdTZWxlY3QgYSBsYXllcidcbiAgfSxcbiAgbWlzYzoge1xuICAgIGJ5OiAnJyxcbiAgICB2YWx1ZXNJbjogJ1ZhbHVlcyBpbicsXG4gICAgdmFsdWVFcXVhbHM6ICdWYWx1ZSBlcXVhbHMnLFxuICAgIGRhdGFTb3VyY2U6ICdEYXRhIFNvdXJjZScsXG4gICAgYnJ1c2hSYWRpdXM6ICdCcnVzaCBSYWRpdXMgKGttKScsXG4gICAgZW1wdHk6ICcgJ1xuICB9LFxuICBtYXBMYXllcnM6IHtcbiAgICB0aXRsZTogJ01hcCBMYXllcnMnLFxuICAgIGxhYmVsOiAnTGFiZWwnLFxuICAgIHJvYWQ6ICdSb2FkJyxcbiAgICBib3JkZXI6ICdCb3JkZXInLFxuICAgIGJ1aWxkaW5nOiAnQnVpbGRpbmcnLFxuICAgIHdhdGVyOiAnV2F0ZXInLFxuICAgIGxhbmQ6ICdMYW5kJyxcbiAgICAnM2RCdWlsZGluZyc6ICczZCBCdWlsZGluZycsXG4gICAgYmFja2dyb3VuZDogJ0JhY2tncm91bmQnXG4gIH0sXG4gIHBhbmVsOiB7XG4gICAgdGV4dDoge1xuICAgICAgbGFiZWw6ICdsYWJlbCcsXG4gICAgICBsYWJlbFdpdGhJZDogJ0xhYmVsIHtsYWJlbElkfScsXG4gICAgICBmb250U2l6ZTogJ0ZvbnQgc2l6ZScsXG4gICAgICBmb250Q29sb3I6ICdGb250IGNvbG9yJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ0JhY2tncm91bmQgY29sb3InLFxuICAgICAgdGV4dEFuY2hvcjogJ1RleHQgYW5jaG9yJyxcbiAgICAgIGFsaWdubWVudDogJ0FsaWdubWVudCcsXG4gICAgICBhZGRNb3JlTGFiZWw6ICdBZGQgTW9yZSBMYWJlbCcsXG4gICAgICBvdXRsaW5lV2lkdGg6ICdPdXRsaW5lIHdpZHRoJyxcbiAgICAgIG91dGxpbmVDb2xvcjogJ091dGxpbmUgY29sb3InXG4gICAgfVxuICB9LFxuICBzaWRlYmFyOiB7XG4gICAgcGFuZWxzOiB7XG4gICAgICBsYXllcjogJ0xheWVycycsXG4gICAgICBmaWx0ZXI6ICdGaWx0ZXJzJyxcbiAgICAgIGludGVyYWN0aW9uOiAnSW50ZXJhY3Rpb25zJyxcbiAgICAgIGJhc2VtYXA6ICdCYXNlIG1hcCdcbiAgICB9LFxuICAgIHBhbmVsVmlld1RvZ2dsZToge1xuICAgICAgbGlzdDogJ1ZpZXcgTGlzdCcsXG4gICAgICBieURhdGFzZXQ6ICdWaWV3IGJ5IERhdGFzZXQnXG4gICAgfVxuICB9LFxuICBsYXllcjoge1xuICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQqJyxcbiAgICBjb2x1bW5Nb2Rlc1NlcGFyYXRvcjogJ09yJyxcbiAgICByYWRpdXM6ICdSYWRpdXMnLFxuICAgIGNvbG9yOiAnQ29sb3InLFxuICAgIGZpbGxDb2xvcjogJ0ZpbGwgQ29sb3InLFxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcbiAgICB3ZWlnaHQ6ICdXZWlnaHQnLFxuICAgIHByb3BlcnR5QmFzZWRPbjogJ3twcm9wZXJ0eX0gYmFzZWQgb24nLFxuICAgIGNvdmVyYWdlOiAnQ292ZXJhZ2UnLFxuICAgIHN0cm9rZTogJ1N0cm9rZScsXG4gICAgc3Ryb2tlV2lkdGg6ICdTdHJva2UgV2lkdGgnLFxuICAgIHN0cm9rZUNvbG9yOiAnU3Ryb2tlIENvbG9yJyxcbiAgICBiYXNpYzogJ0Jhc2ljJyxcbiAgICB0cmFpbExlbmd0aDogJ1RyYWlsIExlbmd0aCcsXG4gICAgdHJhaWxMZW5ndGhEZXNjcmlwdGlvbjogJ051bWJlciBvZiBzZWNvbmRzIGZvciBhIHBhdGggdG8gY29tcGxldGVseSBmYWRlIG91dCcsXG4gICAgbmV3TGF5ZXI6ICduZXcgbGF5ZXInLFxuICAgIGVsZXZhdGlvbkJ5RGVzY3JpcHRpb246ICdXaGVuIG9mZiwgaGVpZ2h0IGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cycsXG4gICAgY29sb3JCeURlc2NyaXB0aW9uOiAnV2hlbiBvZmYsIGNvbG9yIGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cycsXG4gICAgYWdncmVnYXRlQnk6ICdBZ2dyZWdhdGUge2ZpZWxkfSBieScsXG4gICAgJzNETW9kZWwnOiAnM0QgTW9kZWwnLFxuICAgICczRE1vZGVsT3B0aW9ucyc6ICczRCBNb2RlbCBPcHRpb25zJyxcbiAgICBzZXJ2aWNlOiAnU2VydmljZScsXG4gICAgbGF5ZXI6ICdMYXllcicsXG4gICAgYXBwZWFyYW5jZTogJ0FwcGVhcmFuY2UnLFxuICAgIHVuaXF1ZUlkRmllbGQ6ICdVbmlxdWUgSUQgRmllbGQnLFxuICAgIHR5cGU6IHtcbiAgICAgIHBvaW50OiAncG9pbnQnLFxuICAgICAgYXJjOiAnYXJjJyxcbiAgICAgIGxpbmU6ICdsaW5lJyxcbiAgICAgIGdyaWQ6ICdncmlkJyxcbiAgICAgIGhleGJpbjogJ2hleGJpbicsXG4gICAgICBwb2x5Z29uOiAncG9seWdvbicsXG4gICAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgICBjbHVzdGVyOiAnY2x1c3RlcicsXG4gICAgICBpY29uOiAnaWNvbicsXG4gICAgICBoZWF0bWFwOiAnaGVhdG1hcCcsXG4gICAgICBoZXhhZ29uOiAnaGV4YWdvbicsXG4gICAgICBoZXhhZ29uaWQ6ICdIMycsXG4gICAgICB0cmlwOiAndHJpcCcsXG4gICAgICBzMjogJ1MyJyxcbiAgICAgICczZCc6ICczRCcsXG4gICAgICB2ZWN0b3J0aWxlOiAndmVjdG9yIHRpbGUnLFxuICAgICAgcmFzdGVydGlsZTogJ3Jhc3RlciB0aWxlJyxcbiAgICAgIHdtczogJ1dNUydcbiAgICB9LFxuICAgIHdtczoge1xuICAgICAgaG92ZXI6ICdWYWx1ZTonXG4gICAgfSxcbiAgICBsYXllclVwZGF0ZUVycm9yOlxuICAgICAgJ0FuIGVycm9yIG9jY3VycmVkIGR1cmluZyBsYXllciB1cGRhdGU6IHtlcnJvck1lc3NhZ2V9LiBNYWtlIHN1cmUgdGhlIGZvcm1hdCBvZiB0aGUgaW5wdXQgZGF0YSBpcyB2YWxpZC4nLFxuICAgIGludGVyYWN0aW9uOiAnSW50ZXJhY3Rpb24nXG4gIH0sXG4gIGxheWVyVmlzQ29uZmlnczoge1xuICAgIGFuZ2xlOiAnQW5nbGUnLFxuICAgIHN0cm9rZVdpZHRoOiAnU3Ryb2tlIFdpZHRoIChQaXhlbHMpJyxcbiAgICBzdHJva2VXaWR0aFJhbmdlOiAnU3Ryb2tlIFdpZHRoIFJhbmdlJyxcbiAgICByYWRpdXM6ICdSYWRpdXMnLFxuICAgIGZpeGVkUmFkaXVzOiAnRml4ZWQgUmFkaXVzIHRvIG1ldGVyJyxcbiAgICBmaXhlZFJhZGl1c0Rlc2NyaXB0aW9uOiAnTWFwIHJhZGl1cyB0byBhYnNvbHV0ZSByYWRpdXMgaW4gbWV0ZXJzLCBlLmcuIDUgdG8gNSBtZXRlcnMnLFxuICAgIHJhZGl1c1JhbmdlOiAnUmFkaXVzIFJhbmdlJyxcbiAgICBjbHVzdGVyUmFkaXVzOiAnQ2x1c3RlciBSYWRpdXMgaW4gUGl4ZWxzJyxcbiAgICByYWRpdXNSYW5nZVBpeGVsczogJ1JhZGl1cyBSYW5nZSBpbiBwaXhlbHMnLFxuICAgIGJpbGxib2FyZDogJ0JpbGxib2FyZCcsXG4gICAgYmlsbGJvYXJkRGVzY3JpcHRpb246ICdPcmllbnQgZ2VvbWV0cnkgdG93YXJkcyB0aGUgY2FtZXJhJyxcbiAgICBmYWRlVHJhaWw6ICdGYWRlIHRyYWlsJyxcbiAgICBvcGFjaXR5OiAnT3BhY2l0eScsXG4gICAgY292ZXJhZ2U6ICdDb3ZlcmFnZScsXG4gICAgb3V0bGluZTogJ091dGxpbmUnLFxuICAgIGNvbG9yUmFuZ2U6ICdDb2xvciByYW5nZScsXG4gICAgc3Ryb2tlOiAnU3Ryb2tlJyxcbiAgICBzdHJva2VDb2xvcjogJ1N0cm9rZSBDb2xvcicsXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ1N0cm9rZSBDb2xvciByYW5nZScsXG4gICAgdGFyZ2V0Q29sb3I6ICdUYXJnZXQgQ29sb3InLFxuICAgIGNvbG9yQWdncmVnYXRpb246ICdDb2xvciBBZ2dyZWdhdGlvbicsXG4gICAgaGVpZ2h0QWdncmVnYXRpb246ICdIZWlnaHQgQWdncmVnYXRpb24nLFxuICAgIHJlc29sdXRpb25SYW5nZTogJ1Jlc29sdXRpb24gcmFuZ2UnLFxuICAgIHNpemVTY2FsZTogJ1NpemUgU2NhbGUnLFxuICAgIHdvcmxkVW5pdFNpemU6ICdXb3JsZCBVbml0IFNpemUnLFxuICAgIGVsZXZhdGlvblNjYWxlOiAnRWxldmF0aW9uIFNjYWxlJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yOiAnVXNlIGVsZXZhdGlvbiB6b29tIGZhY3RvcicsXG4gICAgZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvckRlc2NyaXB0aW9uOiAnQWRqdXN0IGhlaWdodC9lbGV2YXRpb24gYmFzZWQgb24gY3VycmVudCB6b29tIGZhY3RvcicsXG4gICAgZW5hYmxlSGVpZ2h0Wm9vbUZhY3RvcjogJ1VzZSBoZWlnaHQgem9vbSBmYWN0b3InLFxuICAgIGhlaWdodFNjYWxlOiAnSGVpZ2h0IFNjYWxlJyxcbiAgICBjb3ZlcmFnZVJhbmdlOiAnQ292ZXJhZ2UgUmFuZ2UnLFxuICAgIGhpZ2hQcmVjaXNpb25SZW5kZXJpbmc6ICdIaWdoIFByZWNpc2lvbiBSZW5kZXJpbmcnLFxuICAgIGhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbjogJ0hpZ2ggcHJlY2lzaW9uIHdpbGwgcmVzdWx0IGluIHNsb3dlciBwZXJmb3JtYW5jZScsXG4gICAgaGVpZ2h0OiAnSGVpZ2h0JyxcbiAgICBoZWlnaHREZXNjcmlwdGlvbjogJ0NsaWNrIGJ1dHRvbiBhdCB0b3AgcmlnaHQgb2YgdGhlIG1hcCB0byBzd2l0Y2ggdG8gM2QgdmlldycsXG4gICAgZmlsbDogJ0ZpbGwnLFxuICAgIGVuYWJsZVBvbHlnb25IZWlnaHQ6ICdFbmFibGUgUG9seWdvbiBIZWlnaHQnLFxuICAgIHNob3dXaXJlZnJhbWU6ICdTaG93IFdpcmVmcmFtZScsXG4gICAgd2VpZ2h0SW50ZW5zaXR5OiAnV2VpZ2h0IEludGVuc2l0eScsXG4gICAgem9vbVNjYWxlOiAnWm9vbSBTY2FsZScsXG4gICAgaGVpZ2h0UmFuZ2U6ICdIZWlnaHQgUmFuZ2UnLFxuICAgIGhlaWdodE11bHRpcGxpZXI6ICdIZWlnaHQgTXVsdGlwbGllcicsXG4gICAgZml4ZWRIZWlnaHQ6ICdGaXhlZCBoZWlnaHQnLFxuICAgIGZpeGVkSGVpZ2h0RGVzY3JpcHRpb246ICdVc2UgaGVpZ2h0IHdpdGhvdXQgbW9kaWZpY2F0aW9ucycsXG4gICAgYWxsb3dIb3ZlcjogJ0FsbG93IEhvdmVyJyxcbiAgICBzaG93TmVpZ2hib3JPbkhvdmVyOiAnSGlnaGxpZ2h0IE5laWdoYm9ycyBPbiBIb3ZlcicsXG4gICAgc2hvd0hpZ2hsaWdodENvbG9yOiAnU2hvdyBoaWdobGlnaHQgQ29sb3InLFxuICAgIGRhcmtNb2RlRW5hYmxlZDogJ0RhcmsgYmFzZSBtYXAnLFxuICAgIHRyYW5zcGFyZW50QmFja2dyb3VuZDogJ1RyYW5zcGFyZW50IEJhY2tncm91bmQnXG4gIH0sXG4gIGxheWVyTWFuYWdlcjoge1xuICAgIGFkZERhdGE6ICdBZGQgRGF0YScsXG4gICAgYWRkTGF5ZXI6ICdBZGQgTGF5ZXInLFxuICAgIGxheWVyQmxlbmRpbmc6ICdMYXllciBCbGVuZGluZycsXG4gICAgb3ZlcmxheUJsZW5kaW5nOiAnT3ZlcmxheSBCbGVuZGluZydcbiAgfSxcbiAgbWFwTWFuYWdlcjoge1xuICAgIG1hcFN0eWxlOiAnTWFwIHN0eWxlJyxcbiAgICBhZGRNYXBTdHlsZTogJ0FkZCBNYXAgU3R5bGUnLFxuICAgICczZEJ1aWxkaW5nQ29sb3InOiAnM0QgQnVpbGRpbmcgQ29sb3InLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ0JhY2tncm91bmQgQ29sb3InXG4gIH0sXG4gIGVmZmVjdE1hbmFnZXI6IHtcbiAgICBlZmZlY3RzOiAnRWZmZWN0cycsXG4gICAgYWRkRWZmZWN0OiAnQWRkIGVmZmVjdCcsXG4gICAgcGlja0RhdGVUaW1lOiAnUGljayBkYXRlL3RpbWUnLFxuICAgIGN1cnJlbnRUaW1lOiAnQ3VycmVudCB0aW1lJyxcbiAgICBwaWNrQ3VycnJlbnRUaW1lOiAnUGljayBjdXJyZW50IHRpbWUnLFxuICAgIGRhdGU6ICdEYXRlJyxcbiAgICB0aW1lOiAnVGltZScsXG4gICAgdGltZXpvbmU6ICdUaW1lem9uZSdcbiAgfSxcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYXRlIHtwcm9wZXJ0eX0gYmFzZWQgb24gc2VsZWN0ZWQgZmllbGQnLFxuICAgIGhvd1RvOiAnSG93IHRvJyxcbiAgICBzaG93Q29sb3JDaGFydDogJ1Nob3cgQ29sb3IgQ2hhcnQnLFxuICAgIGhpZGVDb2xvckNoYXJ0OiAnSGlkZSBDb2xvciBDaGFydCdcbiAgfSxcbiAgZmlsdGVyTWFuYWdlcjoge1xuICAgIGFkZEZpbHRlcjogJ0FkZCBGaWx0ZXInLFxuICAgIHRpbWVGaWx0ZXJTeW5jOiAnU3luY2VkIGRhdGFzZXRzJyxcbiAgICB0aW1lTGF5ZXJTeW5jOiAnTGluayB3aXRoIHRoZSBsYXllciB0aW1lbGluZScsXG4gICAgdGltZUxheWVyVW5zeW5jOiAnVW5saW5rIHdpdGggdGhlIGxheWVyIHRpbWVsaW5lJyxcbiAgICBjb2x1bW46ICdDb2x1bW4nXG4gIH0sXG4gIGRhdGFzZXRUaXRsZToge1xuICAgIHNob3dEYXRhVGFibGU6ICdTaG93IGRhdGEgdGFibGUnLFxuICAgIHJlbW92ZURhdGFzZXQ6ICdSZW1vdmUgZGF0YXNldCdcbiAgfSxcbiAgZGF0YXNldEluZm86IHtcbiAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gcm93cycsXG4gICAgdmVjdG9yVGlsZTogJ1ZlY3RvciB0aWxlJyxcbiAgICByYXN0ZXJUaWxlOiAnUmFzdGVyIHRpbGUnLFxuICAgIHdtc1RpbGU6ICdXTVMgdGlsZSdcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIGhpZGVMYXllcjogJ0hpZGUgbGF5ZXInLFxuICAgIHNob3dMYXllcjogJ1Nob3cgbGF5ZXInLFxuICAgIGhpZGVGZWF0dXJlOiAnSGlkZSBmZWF0dXJlJyxcbiAgICBzaG93RmVhdHVyZTogJ1Nob3cgZmVhdHVyZScsXG4gICAgaGlkZTogJ2hpZGUnLFxuICAgIHNob3c6ICdzaG93JyxcbiAgICByZW1vdmVMYXllcjogJ1JlbW92ZSBsYXllcicsXG4gICAgZHVwbGljYXRlTGF5ZXI6ICdEdXBsaWNhdGUgbGF5ZXInLFxuICAgIHpvb21Ub0xheWVyOiAnWm9vbSB0byBsYXllcicsXG4gICAgcmVzZXRBZnRlckVycm9yOiAnVHJ5IHRvIGVuYWJsZSB0aGUgbGF5ZXIgYWZ0ZXIgYW4gZXJyb3InLFxuICAgIGxheWVyU2V0dGluZ3M6ICdMYXllciBzZXR0aW5ncycsXG4gICAgY2xvc2VQYW5lbDogJ0Nsb3NlIGN1cnJlbnQgcGFuZWwnLFxuICAgIHN3aXRjaFRvRHVhbFZpZXc6ICdTd2l0Y2ggdG8gZHVhbCBtYXAgdmlldycsXG4gICAgc2hvd0xlZ2VuZDogJ1Nob3cgbGVnZW5kJyxcbiAgICBkaXNhYmxlM0RNYXA6ICdEaXNhYmxlIDNEIE1hcCcsXG4gICAgRHJhd09uTWFwOiAnRHJhdyBvbiBtYXAnLFxuICAgIHNlbGVjdExvY2FsZTogJ1NlbGVjdCBsb2NhbGUnLFxuICAgIHNob3dBaUFzc2lzdGFudFBhbmVsOiAnU2hvdyBBSSBBc3Npc3RhbnQnLFxuICAgIGhpZGVBaUFzc2lzdGFudFBhbmVsOiAnSGlkZSBBSSBBc3Npc3RhbnQnLFxuICAgIGhpZGVMYXllclBhbmVsOiAnSGlkZSBsYXllciBwYW5lbCcsXG4gICAgc2hvd0xheWVyUGFuZWw6ICdTaG93IGxheWVyIHBhbmVsJyxcbiAgICBtb3ZlVG9Ub3A6ICdNb3ZlIHRvIHRvcCBvZiBkYXRhIGxheWVycycsXG4gICAgc2VsZWN0QmFzZU1hcFN0eWxlOiAnU2VsZWN0IGJhc2UgbWFwIHN0eWxlJyxcbiAgICByZW1vdmVCYXNlTWFwU3R5bGU6ICdSZW1vdmUgYmFzZSBtYXAgc3R5bGUnLFxuICAgIGRlbGV0ZTogJ0RlbGV0ZScsXG4gICAgdGltZVBsYXliYWNrOiAnVGltZSBQbGF5YmFjaycsXG4gICAgdGltZUZpbHRlclN5bmM6ICdTeW5jIHdpdGggYSBjb2x1bW4gZnJvbSBhbm90aGVyIGRhdGFzZXQnLFxuICAgIGNsb3VkU3RvcmFnZTogJ0Nsb3VkIFN0b3JhZ2UnLFxuICAgICczRE1hcCc6ICczRCBNYXAnLFxuICAgIGFuaW1hdGlvbkJ5V2luZG93OiAnTW92aW5nIFRpbWUgV2luZG93JyxcbiAgICBhbmltYXRpb25CeUluY3JlbWVudGFsOiAnSW5jcmVtZW50YWwgVGltZSBXaW5kb3cnLFxuICAgIHNwZWVkOiAnc3BlZWQnLFxuICAgIHBsYXk6ICdwbGF5JyxcbiAgICBwYXVzZTogJ3BhdXNlJyxcbiAgICByZXNldDogJ3Jlc2V0JyxcbiAgICBleHBvcnQ6ICdleHBvcnQnLFxuICAgIHRpbWVMYXllclN5bmM6ICdMaW5rIHdpdGggdGhlIGxheWVyIHRpbWVsaW5lJyxcbiAgICB0aW1lTGF5ZXJVbnN5bmM6ICdVbmxpbmsgd2l0aCB0aGUgbGF5ZXIgdGltZWxpbmUnLFxuICAgIHN5bmNUaW1lbGluZVN0YXJ0OiAnU3RhcnQgb2YgY3VycmVudCBmaWx0ZXIgdGltZWZyYW1lJyxcbiAgICBzeW5jVGltZWxpbmVFbmQ6ICdFbmQgb2YgY3VycmVudCBmaWx0ZXIgdGltZWZyYW1lJyxcbiAgICBzaG93RWZmZWN0UGFuZWw6ICdTaG93IGVmZmVjdCBwYW5lbCcsXG4gICAgaGlkZUVmZmVjdFBhbmVsOiAnSGlkZSBlZmZlY3QgcGFuZWwnLFxuICAgIHJlbW92ZUVmZmVjdDogJ1JlbW92ZSBlZmZlY3QnLFxuICAgIGRpc2FibGVFZmZlY3Q6ICdEaXNhYmxlIGVmZmVjdCcsXG4gICAgZWZmZWN0U2V0dGluZ3M6ICdFZmZlY3Qgc2V0dGluZ3MnXG4gIH0sXG4gIHRvb2xiYXI6IHtcbiAgICBleHBvcnRJbWFnZTogJ0V4cG9ydCBJbWFnZScsXG4gICAgZXhwb3J0RGF0YTogJ0V4cG9ydCBEYXRhJyxcbiAgICBleHBvcnRNYXA6ICdFeHBvcnQgTWFwJyxcbiAgICBzaGFyZU1hcFVSTDogJ1NoYXJlIE1hcCBVUkwnLFxuICAgIHNhdmVNYXA6ICdTYXZlIE1hcCcsXG4gICAgc2VsZWN0OiAnU2VsZWN0JyxcbiAgICBwb2x5Z29uOiAnUG9seWdvbicsXG4gICAgcmVjdGFuZ2xlOiAnUmVjdGFuZ2xlJyxcbiAgICBoaWRlOiAnSGlkZScsXG4gICAgc2hvdzogJ1Nob3cnLFxuICAgIC4uLkxPQ0FMRVNcbiAgfSxcbiAgZWRpdG9yOiB7XG4gICAgZmlsdGVyTGF5ZXI6ICdGaWx0ZXIgTGF5ZXJzJyxcbiAgICBmaWx0ZXJMYXllckRpc2FibGVkOiAnTm9uLXBvbHlnb24gZ2VvbWV0cmllcyBjYW5ub3QgYmUgdXNlZCBmb3IgZmlsdGVyaW5nJyxcbiAgICBjb3B5R2VvbWV0cnk6ICdDb3B5IEdlb21ldHJ5JyxcbiAgICBub0xheWVyc1RvRmlsdGVyOiAnTm8gbGF5ZXJzIHRvIGZpbHRlcidcbiAgfSxcblxuICBtb2RhbDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBkZWxldGVEYXRhc2V0OiAnRGVsZXRlIERhdGFzZXQnLFxuICAgICAgYWRkRGF0YVRvTWFwOiAnQWRkIERhdGEgVG8gTWFwJyxcbiAgICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0IEltYWdlJyxcbiAgICAgIGV4cG9ydERhdGE6ICdFeHBvcnQgRGF0YScsXG4gICAgICBleHBvcnRNYXA6ICdFeHBvcnQgTWFwJyxcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAnQWRkIEN1c3RvbSBNYXAgU3R5bGUnLFxuICAgICAgc2F2ZU1hcDogJ1NhdmUgTWFwJyxcbiAgICAgIHNoYXJlVVJMOiAnU2hhcmUgVVJMJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBkZWxldGU6ICdEZWxldGUnLFxuICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXG4gICAgICBleHBvcnQ6ICdFeHBvcnQnLFxuICAgICAgYWRkU3R5bGU6ICdBZGQgU3R5bGUnLFxuICAgICAgY29weTogJ0NvcHknLFxuICAgICAgY29waWVkOiAnQ29waWVkIScsXG4gICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgIGRlZmF1bHRDb25maXJtOiAnQ29uZmlybSdcbiAgICB9LFxuICAgIGV4cG9ydEltYWdlOiB7XG4gICAgICByYXRpb1RpdGxlOiAnUmF0aW8nLFxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ0Nob29zZSB0aGUgcmF0aW8gZm9yIHZhcmlvdXMgdXNhZ2VzLicsXG4gICAgICByYXRpb09yaWdpbmFsU2NyZWVuOiAnT3JpZ2luYWwgU2NyZWVuJyxcbiAgICAgIHJhdGlvQ3VzdG9tOiAnQ3VzdG9tJyxcbiAgICAgIHJhdGlvNF8zOiAnNDozJyxcbiAgICAgIHJhdGlvMTZfOTogJzE2OjknLFxuICAgICAgcmVzb2x1dGlvblRpdGxlOiAnUmVzb2x1dGlvbicsXG4gICAgICByZXNvbHV0aW9uRGVzY3JpcHRpb246ICdIaWdoIHJlc29sdXRpb24gaXMgYmV0dGVyIGZvciBwcmludHMuJyxcbiAgICAgIG1hcExlZ2VuZFRpdGxlOiAnTWFwIExlZ2VuZCcsXG4gICAgICBtYXBMZWdlbmRBZGQ6ICdBZGQgbGVnZW5kIG9uIG1hcCdcbiAgICB9LFxuICAgIGV4cG9ydERhdGE6IHtcbiAgICAgIGRhdGFzZXRUaXRsZTogJ0RhdGFzZXQnLFxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnQ2hvb3NlIHRoZSBkYXRhc2V0cyB5b3Ugd2FudCB0byBleHBvcnQnLFxuICAgICAgYWxsRGF0YXNldHM6ICdBbGwnLFxuICAgICAgZGF0YVR5cGVUaXRsZTogJ0RhdGEgVHlwZScsXG4gICAgICBkYXRhVHlwZVN1YnRpdGxlOiAnQ2hvb3NlIHRoZSB0eXBlIG9mIGRhdGEgeW91IHdhbnQgdG8gZXhwb3J0JyxcbiAgICAgIGZpbHRlckRhdGFUaXRsZTogJ0ZpbHRlciBEYXRhJyxcbiAgICAgIGZpbHRlckRhdGFTdWJ0aXRsZTogJ1lvdSBjYW4gY2hvb3NlIGV4cG9ydGluZyBvcmlnaW5hbCBkYXRhIG9yIGZpbHRlcmVkIGRhdGEnLFxuICAgICAgZmlsdGVyZWREYXRhOiAnRmlsdGVyZWQgZGF0YScsXG4gICAgICB1bmZpbHRlcmVkRGF0YTogJ1VuZmlsdGVyZWQgRGF0YScsXG4gICAgICBmaWxlQ291bnQ6ICd7ZmlsZUNvdW50fSBGaWxlcycsXG4gICAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gUm93cycsXG4gICAgICB0aWxlZERhdGFzZXRXYXJuaW5nOiBcIiogRXhwb3J0IERhdGEgZm9yIFRpbGVkIGRhdGFzZXRzIGlzbid0IHN1cHBvcnRlZFwiXG4gICAgfSxcbiAgICBkZWxldGVEYXRhOiB7XG4gICAgICB3YXJuaW5nOiAneW91IGFyZSBnb2luZyB0byBkZWxldGUgdGhpcyBkYXRhc2V0LiBJdCB3aWxsIGFmZmVjdCB7bGVuZ3RofSBsYXllcnMnXG4gICAgfSxcbiAgICBhZGRTdHlsZToge1xuICAgICAgcHVibGlzaFRpdGxlOlxuICAgICAgICAnMi4gSWYgZW50ZXJlZCBtYXBib3ggc3R5bGUgdXJsIGluIHN0ZXAuMSwgcHVibGlzaCB5b3VyIHN0eWxlIGF0IG1hcGJveCBvciBwcm92aWRlIGFjY2VzcyB0b2tlbi4gKE9wdGlvbmFsKScsXG4gICAgICBwdWJsaXNoU3VidGl0bGUxOiAnWW91IGNhbiBjcmVhdGUgeW91ciBvd24gbWFwIHN0eWxlIGF0JyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdhbmQnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMzogJ3B1Ymxpc2gnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNDogJ2l0LicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU1OiAnVG8gdXNlIHByaXZhdGUgc3R5bGUsIHBhc3RlIHlvdXInLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNjogJ2FjY2VzcyB0b2tlbicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU3OlxuICAgICAgICAnaGVyZS4gKmtlcGxlci5nbCBpcyBhIGNsaWVudC1zaWRlIGFwcGxpY2F0aW9uLCBkYXRhIHN0YXlzIGluIHlvdXIgYnJvd3Nlci4uJyxcbiAgICAgIGV4YW1wbGVUb2tlbjogJ2UuZy4gcGsuYWJjZGVmZy54eHh4eHgnLFxuICAgICAgcGFzdGVUaXRsZTogJzEuIFBhc3RlIHN0eWxlIHVybCcsXG4gICAgICBwYXN0ZVN1YnRpdGxlMDogJ1N0eWxlIHVybCBjYW4gYmUgYSBtYXBib3gnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTE6ICdXaGF0IGlzIGEnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTI6ICdzdHlsZSBVUkwnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTM6ICdvciBhIHN0eWxlLmpzb24gdXNpbmcgdGhlJyxcbiAgICAgIHBhc3RlU3VidGl0bGU0OiAnTWFwYm94IEdMIFN0eWxlIFNwZWMnLFxuICAgICAgbmFtaW5nVGl0bGU6ICczLiBOYW1lIHlvdXIgc3R5bGUnXG4gICAgfSxcbiAgICBzaGFyZU1hcDoge1xuICAgICAgdGl0bGU6ICdTaGFyZSBNYXAnLFxuICAgICAgc2hhcmVVcmlUaXRsZTogJ1NoYXJlIFVSTCcsXG4gICAgICBnZW5lcmF0ZWRVcmxUaXRsZTogJ1NoYXJlIFVSTCcsXG4gICAgICBzaGFyZVVyaVN1YnRpdGxlOiAnR2VuZXJhdGUgYSBtYXAgdXJsIHRvIHNoYXJlIHdpdGggb3RoZXJzJyxcbiAgICAgIGNsb3VkVGl0bGU6ICdDbG91ZCBzdG9yYWdlJyxcbiAgICAgIGNsb3VkU3VidGl0bGU6ICdMb2dpbiBhbmQgdXBsb2FkIG1hcCBkYXRhIHRvIHlvdXIgcGVyc29uYWwgY2xvdWQgc3RvcmFnZScsXG4gICAgICBzaGFyZURpc2NsYWltZXI6XG4gICAgICAgICdrZXBsZXIuZ2wgd2lsbCBzYXZlIHlvdXIgbWFwIGRhdGEgdG8geW91ciBwZXJzb25hbCBjbG91ZCBzdG9yYWdlLCBvbmx5IHBlb3BsZSB3aXRoIHRoZSBVUkwgY2FuIGFjY2VzcyB5b3VyIG1hcCBhbmQgZGF0YS4gJyArXG4gICAgICAgICdZb3UgY2FuIGVkaXQvZGVsZXRlIHRoZSBkYXRhIGZpbGUgaW4geW91ciBjbG91ZCBhY2NvdW50IGFueXRpbWUuJyxcbiAgICAgIGdvdG9QYWdlOiAnR28gdG8geW91ciBLZXBsZXIuZ2wge2N1cnJlbnRQcm92aWRlcn0gcGFnZSdcbiAgICB9LFxuICAgIHN0YXR1c1BhbmVsOiB7XG4gICAgICBtYXBVcGxvYWRpbmc6ICdNYXAgVXBsb2FkaW5nJyxcbiAgICAgIGVycm9yOiAnRXJyb3InXG4gICAgfSxcbiAgICBzYXZlTWFwOiB7XG4gICAgICB0aXRsZTogJ0Nsb3VkIHN0b3JhZ2UnLFxuICAgICAgc3VidGl0bGU6ICdMb2dpbiB0byBzYXZlIG1hcCB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UnXG4gICAgfSxcbiAgICBleHBvcnRNYXA6IHtcbiAgICAgIGZvcm1hdFRpdGxlOiAnTWFwIGZvcm1hdCcsXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ0Nob29zZSB0aGUgZm9ybWF0IHRvIGV4cG9ydCB5b3VyIG1hcCB0bycsXG4gICAgICBodG1sOiB7XG4gICAgICAgIHNlbGVjdGlvbjogJ0V4cG9ydCB5b3VyIG1hcCBpbnRvIGFuIGludGVyYWN0aXZlIGh0bWwgZmlsZS4nLFxuICAgICAgICB0b2tlblRpdGxlOiAnTWFwYm94IGFjY2VzcyB0b2tlbicsXG4gICAgICAgIHRva2VuU3VidGl0bGU6ICdVc2UgeW91ciBvd24gTWFwYm94IGFjY2VzcyB0b2tlbiBpbiB0aGUgaHRtbCAob3B0aW9uYWwpJyxcbiAgICAgICAgdG9rZW5QbGFjZWhvbGRlcjogJ1Bhc3RlIHlvdXIgTWFwYm94IGFjY2VzcyB0b2tlbicsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiBJZiB5b3UgZG8gbm90IHByb3ZpZGUgeW91ciBvd24gdG9rZW4sIHRoZSBtYXAgbWF5IGZhaWwgdG8gZGlzcGxheSBhdCBhbnkgdGltZSB3aGVuIHdlIHJlcGxhY2Ugb3VycyB0byBhdm9pZCBtaXN1c2UuICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjogJ1lvdSBjYW4gY2hhbmdlIHRoZSBNYXBib3ggdG9rZW4gbGF0ZXIgdXNpbmcgdGhlIGZvbGxvd2luZyBpbnN0cnVjdGlvbnM6ICcsXG4gICAgICAgIHRva2VuVXBkYXRlOiAnSG93IHRvIHVwZGF0ZSBhbiBleGlzdGluZyBtYXAgdG9rZW4uJyxcbiAgICAgICAgbW9kZVRpdGxlOiAnTWFwIE1vZGUnLFxuICAgICAgICBtb2RlU3VidGl0bGUxOiAnU2VsZWN0IHRoZSBhcHAgbW9kZS4gTW9yZSAnLFxuICAgICAgICBtb2RlU3VidGl0bGUyOiAnaW5mbycsXG4gICAgICAgIG1vZGVEZXNjcmlwdGlvbjogJ0FsbG93IHVzZXJzIHRvIHttb2RlfSB0aGUgbWFwJyxcbiAgICAgICAgcmVhZDogJ3JlYWQnLFxuICAgICAgICBlZGl0OiAnZWRpdCdcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnTWFwIENvbmZpZycsXG4gICAgICAgIGNvbmZpZ0Rpc2NsYWltZXI6XG4gICAgICAgICAgJ01hcCBjb25maWcgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgSnNvbiBmaWxlLiBJZiB5b3UgYXJlIHVzaW5nIGtlcGxlci5nbCBpbiB5b3VyIG93biBhcHAuIFlvdSBjYW4gY29weSB0aGlzIGNvbmZpZyBhbmQgcGFzcyBpdCB0byAnLFxuICAgICAgICBzZWxlY3Rpb246XG4gICAgICAgICAgJ0V4cG9ydCBjdXJyZW50IG1hcCBkYXRhIGFuZCBjb25maWcgaW50byBhIHNpbmdsZSBKc29uIGZpbGUuIFlvdSBjYW4gbGF0ZXIgb3BlbiB0aGUgc2FtZSBtYXAgYnkgdXBsb2FkaW5nIHRoaXMgZmlsZSB0byBrZXBsZXIuZ2wuJyxcbiAgICAgICAgZGlzY2xhaW1lcjpcbiAgICAgICAgICAnKiBNYXAgY29uZmlnIGlzIGNvdXBsZWQgd2l0aCBsb2FkZWQgZGF0YXNldHMuIOKAmGRhdGFJZOKAmSBpcyB1c2VkIHRvIGJpbmQgbGF5ZXJzLCBmaWx0ZXJzLCBhbmQgdG9vbHRpcHMgdG8gYSBzcGVjaWZpYyBkYXRhc2V0LiAnICtcbiAgICAgICAgICAnV2hlbiBwYXNzaW5nIHRoaXMgY29uZmlnIHRvIGFkZERhdGFUb01hcCwgbWFrZSBzdXJlIHRoZSBkYXRhc2V0IGlkIG1hdGNoZXMgdGhlIGRhdGFJZC9zIGluIHRoaXMgY29uZmlnLidcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRpbmdEaWFsb2c6IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJ1xuICAgIH0sXG4gICAgbG9hZERhdGE6IHtcbiAgICAgIHVwbG9hZDogJ0xvYWQgRmlsZXMnLFxuICAgICAgdGlsZXNldDogJ1RpbGVzZXQnLFxuICAgICAgc3RvcmFnZTogJ0xvYWQgZnJvbSBTdG9yYWdlJ1xuICAgIH0sXG4gICAgdHJpcEluZm86IHtcbiAgICAgIHRpdGxlOiAnQ3JlYXRlIHRyaXBzIGZyb20gR2VvSnNvbicsXG4gICAgICB0aXRsZVRhYmxlOiAnQ3JlYXRlIHRyaXBzIGZyb20gYSBsaXN0IG9mIHBvaW50cycsXG4gICAgICBkZXNjcmlwdGlvbjE6IGBUbyBhbmltYXRlIHRoZSBwYXRoLCB0aGUgR2VvSlNPTiBkYXRhIG5lZWRzIHRvIGNvbnRhaW4gXFxgTGluZVN0cmluZ1xcYCBpbiBpdHMgZmVhdHVyZSBnZW9tZXRyeSwgYW5kIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgTGluZVN0cmluZyBuZWVkIHRvIGhhdmUgNCBlbGVtZW50cyBpbiB0aGUgZm9ybWF0cyBvZlxuJHsnYGBganNvbid9XG5bbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIHRpbWVzdGFtcF1cbiR7J2BgYCd9XG5UaGUgM3JkIGVsZW1lbnQgaXMgYSB0aW1lc3RhbXAuIFZhbGlkIHRpbWVzdGFtcCBmb3JtYXRzIGluY2x1ZGUgdW5peCBpbiBzZWNvbmRzIHN1Y2ggYXMgXFxgMTU2NDE4NDM2M1xcYCBvciBpbiBtaWxsaXNlY29uZHMgc3VjaCBhcyBcXGAxNTY0MTg0MzYzMDAwXFxgLmAsXG4gICAgICBkZXNjcmlwdGlvblRhYmxlMTpcbiAgICAgICAgJ1RyaXBzIGNhbiBiZSBjcmVhdGVkIGJ5IGpvaW5pbmcgYSBsaXN0IG9mIHBvaW50cyBmcm9tIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUsIHNvcnQgYnkgdGltZXN0YW1wcyBhbmQgZ3JvdXAgYnkgdW5pcSBpZHMuJyxcbiAgICAgIGV4YW1wbGU6ICdFeGFtcGxlIEdlb0pTT04nLFxuICAgICAgZXhhbXBsZVRhYmxlOiAnRXhhbXBsZSBDc3YnXG4gICAgfSxcbiAgICBwb2x5Z29uSW5mbzoge1xuICAgICAgdGl0bGU6ICdDcmVhdGUgcG9seWdvbiBsYXllciBmcm9tIEdlb0pTT04gZmVhdHVyZScsXG4gICAgICB0aXRsZVRhYmxlOiAnQ3JlYXRlIHBhdGggZnJvbSBwb2ludHMnLFxuICAgICAgZGVzY3JpcHRpb246IGBQb2x5Z29uIGNhbiBiZSBjcmVhdGVkIGZyb21cbl9fMSAuQSBHZW9KU09OIEZlYXR1cmUgQ29sbGVjdGlvbl9fXG5fXzIuIEEgQ3N2IGNvbnRhaW5zIGdlb21ldHJ5IGNvbHVtbl9fXG5cbiMjIyAxLiBDcmVhdGUgcG9seWdvbiBmcm9tIEdlb0pTT04gZmlsZVxuXG5XaGVuIHVwbG9hZCBhIEdlb0pTT04gZmlsZSBjb250YWlucyBGZWF0dXJlQ29sbGVjdGlvbiwgYSBwb2x5Z29uIGxheWVyIHdpbGwgYmUgYXV0by1jcmVhdGVkXG5cbkV4YW1wbGUgR2VvSlNPTlxuJHsnYGBganNvbid9XG57XG4gIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gIFwiZmVhdHVyZXNcIjogW3tcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbMTAyLjAsIDAuNV1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwicHJvcDBcIjogXCJ2YWx1ZTBcIlxuICAgICAgfVxuICB9LCB7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gICAgICAgICAgICAgIFsxMDIuMCwgMC4wXSxcbiAgICAgICAgICAgICAgWzEwMy4wLCAxLjBdLFxuICAgICAgICAgICAgICBbMTA0LjAsIDAuMF0sXG4gICAgICAgICAgICAgIFsxMDUuMCwgMS4wXVxuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInByb3AwXCI6IFwidmFsdWUwXCJcbiAgICAgIH1cbiAgfV1cbn1cbiR7J2BgYCd9XG5cbiMjIyAyLiBDcmVhdGUgcG9seWdvbiBmcm9tIGEgR2VvbWV0cnkgY29sdW1uIGluIENzdiB0YWJsZVxuR2VvbWV0cmllcyAoUG9seWdvbnMsIFBvaW50cywgTGluZFN0cmluZ3MgZXRjKSBjYW4gYmUgZW1iZWRkZWQgaW50byBDU1YgYXMgYSBcXGBHZW9KU09OXFxgIG9yIFxcYFdLVFxcYCBmb3JtYXR0ZWQgc3RyaW5nLlxuXG4jIyMjIDIuMSBcXGBHZW9KU09OXFxgIHN0cmluZ1xuRXhhbXBsZSBkYXRhLmNzdiB3aXRoIFxcYEdlb0pTT05cXGAgc3RyaW5nXG4keydgYGB0eHQnfVxuaWQsX2dlb2pzb25cbjEsXCJ7XCJcInR5cGVcIlwiOlwiXCJQb2x5Z29uXCJcIixcIlwiY29vcmRpbmF0ZXNcIlwiOltbWy03NC4xNTg0OTEsNDAuODM1OTQ3XSxbLTc0LjE1NzkxNCw0MC44MzkwMl1dXX1cIlxuJHsnYGBgJ31cblxuIyMjIyAyLjIgXFxgV0tUXFxgIHN0cmluZ1xuRXhhbXBsZSBkYXRhLmNzdiB3aXRoIFxcYFdLVFxcYCBzdHJpbmdcbltUaGUgV2VsbC1Lbm93biBUZXh0IChXS1QpXShodHRwczovL2Rldi5teXNxbC5jb20vZG9jL3JlZm1hbi81LjcvZW4vZ2lzLWRhdGEtZm9ybWF0cy5odG1sI2dpcy13a3QtZm9ybWF0KSByZXByZXNlbnRhdGlvbiBvZiBnZW9tZXRyeSB2YWx1ZXMgaXMgZGVzaWduZWQgZm9yIGV4Y2hhbmdpbmcgZ2VvbWV0cnkgZGF0YSBpbiBBU0NJSSBmb3JtLlxuXG5FeGFtcGxlIGRhdGEuY3N2IHdpdGggV0tUXG4keydgYGB0eHQnfVxuaWQsX2dlb2pzb25cbjEsXCJQT0xZR09OKCgwIDAsMTAgMCwxMCAxMCwwIDEwLDAgMCksKDUgNSw3IDUsNyA3LDUgNywgNSA1KSlcIlxuJHsnYGBgJ31cbmAsXG4gICAgICBkZXNjcmlwdGlvblRhYmxlOiBgUGF0aHMgY2FuIGJlIGNyZWF0ZWQgYnkgam9pbmluZyBhIGxpc3Qgb2YgcG9pbnRzIGZyb20gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSwgc29ydCBieSBhbiBpbmRleCBmaWVsZCAoZS5nLiB0aW1lc3RhbXApIGFuZCBncm91cCBieSB1bmlxIGlkcy5cblxuICAjIyMgTGF5ZXIgY29sdW1uczpcbiAgLSAqKmlkKio6IC0gKnJlcXVpcmVkKiZuYnNwOy0gQSBcXGBpZFxcYCBjb2x1bW4gaXMgdXNlZCB0byBncm91cCBieSBwb2ludHMuIFBvaW50cyB3aXRoIHRoZSBzYW1lIGlkIHdpbGwgYmUgam9pbmVkIGludG8gYSBzaW5nbGUgcGF0aC5cbiAgLSAqKmxhdCoqOiAtICpyZXF1aXJlZCombmJzcDstIFRoZSBsYXRpdHVkZSBvZiB0aGUgcG9pbnRcbiAgLSAqKmxvbioqOiAtICpyZXF1aXJlZCombmJzcDstIFRoZSBsb25naXR1ZGUgb2YgdGhlIHBvaW50XG4gIC0gKiphbHQqKjogLSAqb3B0aW9uYWwqJm5ic3A7LSBUaGUgYWx0aXR1ZGUgb2YgdGhlIHBvaW50XG4gIC0gKipzb3J0IGJ5Kio6IC0gKm9wdGlvbmFsKiZuYnNwOy0gQSBcXGBzb3J0IGJ5XFxgIGNvbHVtbiBpcyB1c2VkIHRvIHNvcnQgdGhlIHBvaW50cywgaWYgbm90IHNwZWNpZmllZCwgcG9pbnRzIHdpbGwgYmUgc29ydGVkIGJ5IHJvdyBpbmRleC5cbmAsXG4gICAgICBleGFtcGxlVGFibGU6ICdFeGFtcGxlIENTVidcbiAgICB9LFxuICAgIGljb25JbmZvOiB7XG4gICAgICB0aXRsZTogJ0hvdyB0byBkcmF3IGljb25zJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgJ0luIHlvdXIgY3N2LCBjcmVhdGUgYSBjb2x1bW4sIHB1dCB0aGUgbmFtZSBvZiB0aGUgaWNvbiB5b3Ugd2FudCB0byBkcmF3IGluIGl0LiBZb3UgY2FuIGxlYXZlIHRoZSBjZWxsIGVtcHR5IGlmIHlvdSBkbyBub3Qgd2FudCB0aGUgaWNvbiB0byBzaG93IGZvciBzb21lIHBvaW50cy4gV2hlbiB0aGUgY29sdW1uIGlzIG5hbWVkJyxcbiAgICAgIGNvZGU6ICdpY29uJyxcbiAgICAgIGRlc2NyaXB0aW9uMjogJyBrZXBsZXIuZ2wgd2lsbCBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhIGljb24gbGF5ZXIgZm9yIHlvdS4nLFxuICAgICAgZXhhbXBsZTogJ0V4YW1wbGU6JyxcbiAgICAgIGljb25zOiAnSWNvbnMnXG4gICAgfSxcbiAgICBzdG9yYWdlTWFwVmlld2VyOiB7XG4gICAgICBsYXN0TW9kaWZpZWQ6ICdMYXN0IG1vZGlmaWVkIHtsYXN0VXBkYXRlZH0gYWdvJyxcbiAgICAgIGJhY2s6ICdCYWNrJ1xuICAgIH0sXG4gICAgb3ZlcndyaXRlTWFwOiB7XG4gICAgICB0aXRsZTogJ1NhdmluZyBtYXAuLi4nLFxuICAgICAgYWxyZWFkeUV4aXN0czogJ2FscmVhZHkgZXhpc3RzIGluIHlvdXIge21hcFNhdmVkfS4gV291bGQgeW91IGxpa2UgdG8gb3ZlcndyaXRlIGl0PydcbiAgICB9LFxuICAgIGxvYWRTdG9yYWdlTWFwOiB7XG4gICAgICBiYWNrOiAnQmFjaycsXG4gICAgICBnb1RvUGFnZTogJ0dvIHRvIHlvdXIgS2VwbGVyLmdsIHtkaXNwbGF5TmFtZX0gcGFnZScsXG4gICAgICBzdG9yYWdlTWFwczogJ1N0b3JhZ2UgLyBNYXBzJyxcbiAgICAgIG5vU2F2ZWRNYXBzOiAnTm8gc2F2ZWQgbWFwcyB5ZXQnLFxuICAgICAgZm91cnNxdWFyZVN0b3JhZ2VNZXNzYWdlOlxuICAgICAgICAnT25seSBtYXBzIHNhdmVkIHdpdGggS2VwbGVyLmdsID4gU2F2ZSA+IEZvdXJzcXVhcmUgU3RvcmFnZSBvcHRpb24gYXJlIHNob3duIGhlcmUnXG4gICAgfVxuICB9LFxuICBoZWFkZXI6IHtcbiAgICB2aXNpYmxlTGF5ZXJzOiAnVmlzaWJsZSBsYXllcnMnLFxuICAgIGxheWVyTGVnZW5kOiAnTGVnZW5kJ1xuICB9LFxuICBpbnRlcmFjdGlvbnM6IHtcbiAgICB0b29sdGlwOiAnVG9vbHRpcCcsXG4gICAgYnJ1c2g6ICdCcnVzaCcsXG4gICAgY29vcmRpbmF0ZTogJ0Nvb3JkaW5hdGVzJyxcbiAgICBnZW9jb2RlcjogJ0dlb2NvZGVyJ1xuICB9LFxuICBsYXllckJsZW5kaW5nOiB7XG4gICAgdGl0bGU6ICdMYXllciBCbGVuZGluZycsXG4gICAgYWRkaXRpdmU6ICdhZGRpdGl2ZScsXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcbiAgICBzdWJ0cmFjdGl2ZTogJ3N1YnRyYWN0aXZlJ1xuICB9LFxuICBvdmVybGF5QmxlbmRpbmc6IHtcbiAgICB0aXRsZTogJ01hcCBvdmVybGF5IGJsZW5kaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0JsZW5kIGxheWVycyB3aXRoIHRoZSBiYXNlIG1hcCBzbyB0aGF0IGJvdGggYXJlIHZpc2libGUuJyxcbiAgICBzY3JlZW46ICdkYXJrIGJhc2UgbWFwJyxcbiAgICBub3JtYWw6ICdub3JtYWwnLFxuICAgIGRhcmtlbjogJ2xpZ2h0IGJhc2UgbWFwJ1xuICB9LFxuICBjb2x1bW5zOiB7XG4gICAgdGl0bGU6ICdDb2x1bW5zJyxcbiAgICBsYXQ6ICdsYXQnLFxuICAgIGxuZzogJ2xuZycsXG4gICAgYWx0aXR1ZGU6ICdhbHRpdHVkZScsXG4gICAgYWx0OiAnYWx0aXR1ZGUnLFxuICAgIGlkOiAnaWQnLFxuICAgIHRpbWVzdGFtcDogJ3RpbWUnLFxuICAgIGljb246ICdpY29uJyxcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgZ2VvYXJyb3c6ICdnZW9hcnJvdycsXG4gICAgZ2VvYXJyb3cwOiAnZ2VvYXJyb3cgc291cmNlJyxcbiAgICBnZW9hcnJvdzE6ICdnZW9hcnJvdyB0YXJnZXQnLFxuICAgIHRva2VuOiAndG9rZW4nLFxuICAgIHNvcnRCeTogJ3NvcnQgYnknLFxuICAgIG5laWdoYm9yczogJ25laWdoYm9ycycsXG4gICAgYXJjOiB7XG4gICAgICBsYXQwOiAnc291cmNlIGxhdCBvciBoZXggaWQnLFxuICAgICAgbG5nMDogJ3NvdXJjZSBsbmcgb3IgaGV4IGlkJyxcbiAgICAgIGxhdDE6ICd0YXJnZXQgbGF0IG9yIGhleCBpZCcsXG4gICAgICBsbmcxOiAndGFyZ2V0IGxuZyBvciBoZXggaWQnXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICBhbHQwOiAnc291cmNlIGFsdGl0dWRlJyxcbiAgICAgIGFsdDE6ICd0YXJnZXQgYWx0aXR1ZGUnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnR3JpZCBTaXplIChrbSknXG4gICAgfSxcbiAgICBoZXhhZ29uOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnSGV4YWdvbiBSYWRpdXMgKGttKSdcbiAgICB9LFxuICAgIGhleF9pZDogJ2hleCBpZCdcbiAgfSxcbiAgY29sb3I6IHtcbiAgICBjdXN0b21QYWxldHRlOiAnQ3VzdG9tIFBhbGV0dGUnLFxuICAgIHN0ZXBzOiAnU3RlcHMnLFxuICAgIHR5cGU6ICdUeXBlJyxcbiAgICBzZXF1ZW50aWFsOiAnU2VxdWVudGlhbCcsXG4gICAgcXVhbGl0YXRpdmU6ICdRdWFsaXRhdGl2ZScsXG4gICAgZGl2ZXJnaW5nOiAnRGl2ZXJnaW5nJyxcbiAgICBjeWNsaWNhbDogJ0N5Y2xpY2FsJyxcbiAgICBhbGw6ICdBbGwnLFxuICAgIGNvbG9yQmxpbmRTYWZlOiAnQ29sb3JibGluZCBTYWZlJyxcbiAgICByZXZlcnNlZDogJ1JldmVyc2VkJyxcbiAgICBkaXNhYmxlU3RlcFJlYXNvbjogYENhbid0IGNoYW5nZSBudW1iZXIgb2Ygc3RlcHMgd2l0aCBjdXN0b20gY29sb3IgYnJlYWtzLCB1c2UgY3VzdG9tIHBhbGV0dGUgdG8gZWRpdCBzdGVwc2AsXG4gICAgcHJlc2V0OiAnUHJlc2V0IENvbG9ycycsXG4gICAgcGlja2VyOiAnQ29sb3IgUGlja2VyJ1xuICB9LFxuICBjb2x1bW5TdGF0czoge1xuICAgIG1pbjogJ01pbicsXG4gICAgbWVhbjogJ01lYW4nLFxuICAgIG1heDogJ01heCdcbiAgfSxcbiAgc2NhbGU6IHtcbiAgICBjb2xvclNjYWxlOiAnQ29sb3IgU2NhbGUnLFxuICAgIHNpemVTY2FsZTogJ1NpemUgU2NhbGUnLFxuICAgIHN0cm9rZVNjYWxlOiAnU3Ryb2tlIFNjYWxlJyxcbiAgICBzdHJva2VDb2xvclNjYWxlOiAnU3Ryb2tlIENvbG9yIFNjYWxlJyxcbiAgICBzY2FsZTogJ1NjYWxlJyxcbiAgICBvcmRpbmFsOiAnT3JkaW5hbCcsXG4gICAgcXVhbnRpbGU6ICdRdWFudGlsZScsXG4gICAgcXVhbnRpemU6ICdRdWFudGl6ZScsXG4gICAgbGluZWFyOiAnTGluZWFyJyxcbiAgICBzcXJ0OiAnU3FydCcsXG4gICAgbG9nOiAnTG9nJyxcbiAgICBwb2ludDogJ1BvaW50JyxcbiAgICB0aHJlc2hvbGQ6ICdUaHJlc2hvbGQnLFxuICAgIGN1c3RvbTogJ0N1c3RvbSBCcmVha3MnLFxuICAgIGN1c3RvbU9yZGluYWw6ICdDdXN0b20gT3JkaW5hbCdcbiAgfSxcbiAgZmlsZVVwbG9hZGVyOiB7XG4gICAgbWVzc2FnZTogJ0RyYWcgJiBEcm9wIFlvdXIgRmlsZShzKSBIZXJlJyxcbiAgICBjaHJvbWVNZXNzYWdlOlxuICAgICAgJypDaHJvbWUgdXNlcjogTGltaXQgZmlsZSBzaXplIHRvIDI1MG1iLCBpZiBuZWVkIHRvIHVwbG9hZCBsYXJnZXIgZmlsZSwgdHJ5IFNhZmFyaScsXG4gICAgZGlzY2xhaW1lcjpcbiAgICAgICcqa2VwbGVyLmdsIGlzIGEgY2xpZW50LXNpZGUgYXBwbGljYXRpb24gd2l0aCBubyBzZXJ2ZXIgYmFja2VuZC4gRGF0YSBsaXZlcyBvbmx5IG9uIHlvdXIgbWFjaGluZS9icm93c2VyLiAnICtcbiAgICAgICdObyBpbmZvcm1hdGlvbiBvciBtYXAgZGF0YSBpcyBzZW50IHRvIGFueSBzZXJ2ZXIuJyxcbiAgICBjb25maWdVcGxvYWRNZXNzYWdlOlxuICAgICAgJ1VwbG9hZCB7ZmlsZUZvcm1hdE5hbWVzfSBvciBzYXZlZCBtYXAgKipKc29uKiouIFJlYWQgbW9yZSBhYm91dCBbKipzdXBwb3J0ZWQgZmlsZSBmb3JtYXRzKipdJyxcbiAgICBicm93c2VGaWxlczogJ2Jyb3dzZSB5b3VyIGZpbGVzJyxcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcnLFxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6ICdGaWxlIHtlcnJvckZpbGVzfSBpcyBub3Qgc3VwcG9ydGVkLicsXG4gICAgb3I6ICdvcidcbiAgfSxcbiAgdGlsZXNldFNldHVwOiB7XG4gICAgaGVhZGVyOiAnU2V0dXAgVmVjdG9yIFRpbGVzJyxcbiAgICByYXN0ZXJUaWxlSGVhZGVyOiAnU2V0dXAgUmFzdGVyIFRpbGVzJyxcbiAgICBhZGRUaWxlc2V0VGV4dDogJ0FkZCBUaWxlc2V0J1xuICB9LFxuICBnZW9jb2Rlcjoge1xuICAgIHRpdGxlOiAnRW50ZXIgYW4gYWRkcmVzcyBvciBjb29yZGluYXRlcywgZXggMzcuNzksLTEyMi40MCdcbiAgfSxcbiAgZmllbGRTZWxlY3Rvcjoge1xuICAgIGNsZWFyQWxsOiAnQ2xlYXIgQWxsJyxcbiAgICBmb3JtYXR0aW5nOiAnRm9ybWF0dGluZydcbiAgfSxcbiAgY29tcGFyZToge1xuICAgIG1vZGVMYWJlbDogJ0NvbXBhcmlzb24gTW9kZScsXG4gICAgdHlwZUxhYmVsOiAnQ29tcGFyaXNvbiBUeXBlJyxcbiAgICB0eXBlczoge1xuICAgICAgYWJzb2x1dGU6ICdBYnNvbHV0ZScsXG4gICAgICByZWxhdGl2ZTogJ1JlbGF0aXZlJ1xuICAgIH1cbiAgfSxcbiAgbWFwUG9wb3Zlcjoge1xuICAgIHByaW1hcnk6ICdQcmltYXJ5J1xuICB9LFxuICBkZW5zaXR5OiAnZGVuc2l0eScsXG4gICdCdWcgUmVwb3J0JzogJ0J1ZyBSZXBvcnQnLFxuICAnVXNlciBHdWlkZSc6ICdVc2VyIEd1aWRlJyxcbiAgU2F2ZTogJ1NhdmUnLFxuICBTaGFyZTogJ1NoYXJlJyxcbiAgJ1VwZGF0ZSBjb2xvcic6ICdVcGRhdGUgY29sb3InLFxuICBtYXBMZWdlbmQ6IHtcbiAgICBsYXllcnM6IHtcbiAgICAgIGxpbmU6IHtcbiAgICAgICAgc2luZ2xlQ29sb3I6IHtcbiAgICAgICAgICBzb3VyY2VDb2xvcjogJ1NvdXJjZScsXG4gICAgICAgICAgdGFyZ2V0Q29sb3I6ICdUYXJnZXQnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhcmM6IHtcbiAgICAgICAgc2luZ2xlQ29sb3I6IHtcbiAgICAgICAgICBzb3VyY2VDb2xvcjogJ1NvdXJjZScsXG4gICAgICAgICAgdGFyZ2V0Q29sb3I6ICdUYXJnZXQnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHNpbmdsZUNvbG9yOiB7XG4gICAgICAgICAgY29sb3I6ICdGaWxsIGNvbG9yJyxcbiAgICAgICAgICBzdHJva2VDb2xvcjogJ091dGxpbmUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO0FBQXFDLFNBQUFDLFFBQUFDLENBQUEsRUFBQUMsQ0FBQSxRQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsSUFBQSxDQUFBSixDQUFBLE9BQUFHLE1BQUEsQ0FBQUUscUJBQUEsUUFBQUMsQ0FBQSxHQUFBSCxNQUFBLENBQUFFLHFCQUFBLENBQUFMLENBQUEsR0FBQUMsQ0FBQSxLQUFBSyxDQUFBLEdBQUFBLENBQUEsQ0FBQUMsTUFBQSxXQUFBTixDQUFBLFdBQUFFLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFRLFVBQUEsT0FBQVAsQ0FBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsQ0FBQSxFQUFBSSxDQUFBLFlBQUFKLENBQUE7QUFBQSxTQUFBVSxjQUFBWixDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBWSxTQUFBLENBQUFDLE1BQUEsRUFBQWIsQ0FBQSxVQUFBQyxDQUFBLFdBQUFXLFNBQUEsQ0FBQVosQ0FBQSxJQUFBWSxTQUFBLENBQUFaLENBQUEsUUFBQUEsQ0FBQSxPQUFBRixPQUFBLENBQUFJLE1BQUEsQ0FBQUQsQ0FBQSxPQUFBYSxPQUFBLFdBQUFkLENBQUEsUUFBQWUsZ0JBQUEsYUFBQWhCLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLENBQUFELENBQUEsU0FBQUUsTUFBQSxDQUFBYyx5QkFBQSxHQUFBZCxNQUFBLENBQUFlLGdCQUFBLENBQUFsQixDQUFBLEVBQUFHLE1BQUEsQ0FBQWMseUJBQUEsQ0FBQWYsQ0FBQSxLQUFBSCxPQUFBLENBQUFJ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
