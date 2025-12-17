"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Droppable = exports.Attribution = void 0;
exports["default"] = MapContainerFactory;
exports.isSplitSelector = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/node_modules/react"));
var _styledComponents = _interopRequireWildcard(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/node_modules/styled-components"));
var _reactMapGl = require("react-map-gl");
var _react2 = _interopRequireDefault(require("@deck.gl/react"));
var _reselect = require("reselect");
var _core = require("@dnd-kit/core");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _mapPopover = _interopRequireDefault(require("./map/map-popover"));
var _mapControl = _interopRequireDefault(require("./map/map-control"));
var _styledComponents2 = require("./common/styled-components");
var _editor = _interopRequireDefault(require("./editor/editor"));
var _src = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/layers/src");
var _src2 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/utils/src");
var _src3 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/styles/src");
var _src4 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/constants/src");
var _dndLayerItems = require("./common/dnd-layer-items");
var _mapViewStateContext = require("./map-view-state-context");
var _errorBoundary = _interopRequireDefault(require("./common/error-boundary"));
var _src5 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/localization/src");
var _core2 = require("@deck.gl/core");
var _src6 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/reducers/src");
var _loadingIndicator = _interopRequireDefault(require("./loading-indicator"));
var _templateObject, _templateObject2; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
// libraries
// components
// utils
// default-settings
// Contexts
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
// Debounce the propagation of viewport change and mouse moves to redux store.
// This is to avoid too many renders of other components when the map is
// being panned/zoomed (leading to laggy basemap/deck syncing).
var DEBOUNCE_VIEWPORT_PROPAGATE = 10;
var DEBOUNCE_MOUSE_MOVE_PROPAGATE = 10;

// How long should we wait between layer loading state changes before triggering a UI update
var DEBOUNCE_LOADING_STATE_PROPAGATE = 100;
var MAP_STYLE = {
  container: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  top: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  }
};
var LOCALE_CODES_ARRAY = Object.keys(_src5.LOCALE_CODES);
var StyledMap = (0, _styledComponents["default"])(_styledComponents2.StyledMapContainer)(function (_ref) {
  var _ref$$mixBlendMode = _ref.$mixBlendMode,
    $mixBlendMode = _ref$$mixBlendMode === void 0 ? 'normal' : _ref$$mixBlendMode,
    $mapLibCssClass = _ref.$mapLibCssClass;
  return "\n  #default-deckgl-overlay {\n    mix-blend-mode: ".concat($mixBlendMode, ";\n  };\n  *[").concat($mapLibCssClass, "-children] {\n    position: absolute;\n  }\n");
});
var MAPBOXGL_STYLE_UPDATE = 'style.load';
var MAPBOXGL_RENDER = 'render';
var nop = function nop() {
  return;
};
var MapLibLogo = function MapLibLogo(_ref2) {
  var baseMapLibraryConfig = _ref2.baseMapLibraryConfig;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "attrition-logo"
  }, "Basemap by:", /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      marginLeft: '5px'
    },
    className: "".concat(baseMapLibraryConfig.mapLibCssClass, "-ctrl-logo"),
    target: "_blank",
    rel: "noopener noreferrer",
    href: baseMapLibraryConfig.mapLibUrl,
    "aria-label": "".concat(baseMapLibraryConfig.mapLibName, " logo")
  }));
};
var StyledDroppable = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n"])), function (props) {
  return props.isOver ? props.theme.dndOverBackgroundColor : 'none';
});
var isSplitSelector = exports.isSplitSelector = function isSplitSelector(props) {
  return props.visState.splitMaps && props.visState.splitMaps.length > 1;
};
var Droppable = exports.Droppable = function Droppable(_ref3) {
  var containerId = _ref3.containerId;
  var _useDroppable = (0, _core.useDroppable)({
      id: containerId,
      data: {
        type: _dndLayerItems.DROPPABLE_MAP_CONTAINER_TYPE,
        index: containerId
      },
      disabled: !containerId
    }),
    isOver = _useDroppable.isOver,
    setNodeRef = _useDroppable.setNodeRef;
  return /*#__PURE__*/_react["default"].createElement(StyledDroppable, {
    ref: setNodeRef,
    isOver: isOver
  });
};
var StyledDatasetAttributionsContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: ", ";\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: ", ";\n  margin-right: 2px;\n  margin-bottom: 1px;\n  line-height: ", ";\n\n  &:hover {\n    white-space: inherit;\n  }\n"])), function (props) {
  return props.isPalm ? '200px' : '300px';
}, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.isPalm ? '1em' : '1.4em';
});
var DatasetAttributions = function DatasetAttributions(_ref4) {
  var datasetAttributions = _ref4.datasetAttributions,
    isPalm = _ref4.isPalm;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, datasetAttributions !== null && datasetAttributions !== void 0 && datasetAttributions.length ? /*#__PURE__*/_react["default"].createElement(StyledDatasetAttributionsContainer, {
    isPalm: isPalm
  }, datasetAttributions.map(function (ds, idx) {
    return /*#__PURE__*/_react["default"].createElement("a", (0, _extends2["default"])({}, ds.url ? {
      href: ds.url
    } : null, {
      target: "_blank",
      rel: "noopener noreferrer",
      key: "".concat(ds.title, "_").concat(idx)
    }), ds.title, idx !== datasetAttributions.length - 1 ? ', ' : null);
  })) : null);
};
var Attribution = exports.Attribution = function Attribution(_ref5) {
  var _ref5$showBaseMapLibL = _ref5.showBaseMapLibLogo,
    showBaseMapLibLogo = _ref5$showBaseMapLibL === void 0 ? true : _ref5$showBaseMapLibL,
    _ref5$showOsmBasemapA = _ref5.showOsmBasemapAttribution,
    showOsmBasemapAttribution = _ref5$showOsmBasemapA === void 0 ? false : _ref5$showOsmBasemapA,
    datasetAttributions = _ref5.datasetAttributions,
    baseMapLibraryConfig = _ref5.baseMapLibraryConfig;
  var isPalm = (0, _src2.hasMobileWidth)(_src3.breakPointValues);
  var memoizedComponents = (0, _react.useMemo)(function () {
    if (!showBaseMapLibLogo) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledAttribution, {
        mapLibCssClass: baseMapLibraryConfig.mapLibCssClass,
        mapLibAttributionCssClass: baseMapLibraryConfig.mapLibAttributionCssClass
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.EndHorizontalFlexbox, null, /*#__PURE__*/_react["default"].createElement(DatasetAttributions, {
        datasetAttributions: datasetAttributions,
        isPalm: isPalm
      }), showOsmBasemapAttribution ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "attrition-link"
      }, datasetAttributions !== null && datasetAttributions !== void 0 && datasetAttributions.length ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "pipe-separator"
      }, "|") : null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "http://www.openstreetmap.org/copyright",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "\xA9 OpenStreetMap")) : null));
    }
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledAttribution, {
      mapLibCssClass: baseMapLibraryConfig.mapLibCssClass,
      mapLibAttributionCssClass: baseMapLibraryConfig.mapLibAttributionCssClass
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.EndHorizontalFlexbox, null, /*#__PURE__*/_react["default"].createElement(DatasetAttributions, {
      datasetAttributions: datasetAttributions,
      isPalm: isPalm
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "attrition-link"
    }, datasetAttributions !== null && datasetAttributions !== void 0 && datasetAttributions.length ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "pipe-separator"
    }, "|") : null, isPalm ? /*#__PURE__*/_react["default"].createElement(MapLibLogo, {
      baseMapLibraryConfig: baseMapLibraryConfig
    }) : null, /*#__PURE__*/_react["default"].createElement("a", {
      href: "https://kepler.gl/policy/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\xA9 kepler.gl |", ' '), !isPalm ? /*#__PURE__*/_react["default"].createElement(MapLibLogo, {
      baseMapLibraryConfig: baseMapLibraryConfig
    }) : null)));
  }, [showBaseMapLibLogo, showOsmBasemapAttribution, datasetAttributions, isPalm, baseMapLibraryConfig]);
  return memoizedComponents;
};
MapContainerFactory.deps = [_mapPopover["default"], _mapControl["default"], _editor["default"]];
function MapContainerFactory(MapPopover, MapControl, Editor) {
  var MapContainer = /*#__PURE__*/function (_Component) {
    function MapContainer(_props) {
      var _this;
      (0, _classCallCheck2["default"])(this, MapContainer);
      _this = _callSuper(this, MapContainer, [_props]);
      (0, _defineProperty2["default"])(_this, "displayName", 'MapContainer');
      (0, _defineProperty2["default"])(_this, "anyActiveLayerLoading", false);
      (0, _defineProperty2["default"])(_this, "state", {
        // Determines whether attribution should be visible based the result of loading the map style
        showBaseMapAttribution: true
      });
      (0, _defineProperty2["default"])(_this, "_deck", null);
      (0, _defineProperty2["default"])(_this, "_map", null);
      (0, _defineProperty2["default"])(_this, "_ref", (0, _react.createRef)());
      (0, _defineProperty2["default"])(_this, "_deckGLErrorsElapsed", {});
      (0, _defineProperty2["default"])(_this, "previousLayers", {
        // [layers.id]: mapboxLayerConfig
      });
      (0, _defineProperty2["default"])(_this, "_handleResize", function (dimensions) {
        var _this$props = _this.props,
          primary = _this$props.primary,
          index = _this$props.index;
        if (primary) {
          var mapStateActions = _this.props.mapStateActions;
          if (dimensions && dimensions.width > 0 && dimensions.height > 0) {
            mapStateActions.updateMap(dimensions, index);
          }
        }
      });
      (0, _defineProperty2["default"])(_this, "layersSelector", function (props) {
        return props.visState.layers;
      });
      (0, _defineProperty2["default"])(_this, "layerDataSelector", function (props) {
        return props.visState.layerData;
      });
      (0, _defineProperty2["default"])(_this, "splitMapSelector", function (props) {
        return props.visState.splitMaps;
      });
      (0, _defineProperty2["default"])(_this, "splitMapIndexSelector", function (props) {
        return props.index;
      });
      (0, _defineProperty2["default"])(_this, "mapLayersSelector", (0, _reselect.createSelector)(_this.splitMapSelector, _this.splitMapIndexSelector, _src2.getMapLayersFromSplitMaps));
      (0, _defineProperty2["default"])(_this, "layerOrderSelector", function (props) {
        return props.visState.layerOrder;
      });
      (0, _defineProperty2["default"])(_this, "layersToRenderSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.mapLayersSelector, _src6.prepareLayersToRender));
      (0, _defineProperty2["default"])(_this, "layersForDeckSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _src6.prepareLayersForDeck));
      (0, _defineProperty2["default"])(_this, "filtersSelector", function (props) {
        return props.visState.filters;
      });
      (0, _defineProperty2["default"])(_this, "polygonFiltersSelector", (0, _reselect.createSelector)(_this.filtersSelector, function (filters) {
        return filters.filter(function (f) {
          return f.type === _src4.FILTER_TYPES.polygon && f.enabled !== false;
        });
      }));
      (0, _defineProperty2["default"])(_this, "featuresSelector", function (props) {
        return props.visState.editor.features;
      });
      (0, _defineProperty2["default"])(_this, "selectedFeatureSelector", function (props) {
        return props.visState.editor.selectedFeature;
      });
      (0, _defineProperty2["default"])(_this, "featureCollectionSelector", (0, _reselect.createSelector)(_this.polygonFiltersSelector, _this.featuresSelector, function (polygonFilters, features) {
        return {
          type: 'FeatureCollection',
          features: features.concat(polygonFilters.map(function (f) {
            return f.value;
          }))
        };
      }));
      // @ts-ignore - No overload matches this call
      (0, _defineProperty2["default"])(_this, "selectedPolygonIndexSelector", (0, _reselect.createSelector)(_this.featureCollectionSelector, _this.selectedFeatureSelector, function (collection, selectedFeature) {
        return collection.features.findIndex(function (f) {
          return f.id === (selectedFeature === null || selectedFeature === void 0 ? void 0 : selectedFeature.id);
        });
      }));
      (0, _defineProperty2["default"])(_this, "selectedFeatureIndexArraySelector", (0, _reselect.createSelector)(function (value) {
        return value;
      }, function (value) {
        return value < 0 ? [] : [value];
      }));
      (0, _defineProperty2["default"])(_this, "generateMapboxLayerMethodSelector", function (props) {
        var _props$generateMapbox;
        return (_props$generateMapbox = props.generateMapboxLayers) !== null && _props$generateMapbox !== void 0 ? _props$generateMapbox : _src.generateMapboxLayers;
      });
      (0, _defineProperty2["default"])(_this, "mapboxLayersSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.layerOrderSelector, _this.layersToRenderSelector, _this.generateMapboxLayerMethodSelector, function (layer, layerData, layerOrder, layersToRender, generateMapboxLayerMethod) {
        return generateMapboxLayerMethod(layer, layerData, layerOrder, layersToRender);
      }));
      // merge in a background-color style if the basemap choice is NO_MAP_ID
      // used by <StyledMap> inline style prop
      (0, _defineProperty2["default"])(_this, "mapStyleTypeSelector", function (props) {
        return props.mapStyle.styleType;
      });
      (0, _defineProperty2["default"])(_this, "mapStyleBackgroundColorSelector", function (props) {
        return props.mapStyle.backgroundColor;
      });
      (0, _defineProperty2["default"])(_this, "styleSelector", (0, _reselect.createSelector)(_this.mapStyleTypeSelector, _this.mapStyleBackgroundColorSelector, function (styleType, backgroundColor) {
        return _objectSpread(_objectSpread({}, MAP_STYLE.container), styleType === _src4.NO_MAP_ID ? {
          backgroundColor: (0, _src2.rgbToHex)(backgroundColor)
        } : {});
      }));
      /* component private functions */
      (0, _defineProperty2["default"])(_this, "_onCloseMapPopover", function () {
        _this.props.visStateActions.onLayerClick(null);
      });
      (0, _defineProperty2["default"])(_this, "_onLayerHover", function (_idx, info) {
        _this.props.visStateActions.onLayerHover(info, _this.props.index);
      });
      (0, _defineProperty2["default"])(_this, "_onLayerSetDomain", function (idx, value) {
        _this.props.visStateActions.layerConfigChange(_this.props.visState.layers[idx], {
          colorDomain: value.domain,
          aggregatedBins: value.aggregatedBins
        });
      });
      (0, _defineProperty2["default"])(_this, "_onLayerFilteredItemsChange", function (idx, event) {
        _this.props.visStateActions.layerFilteredItemsChange(_this.props.visState.layers[idx], event);
      });
      (0, _defineProperty2["default"])(_this, "_onWMSFeatureInfo", function (idx, data) {
        _this.props.visStateActions.wmsFeatureInfo(_this.props.visState.layers[idx], data.featureInfo, data.coordinate);
      });
      (0, _defineProperty2["default"])(_this, "_handleMapToggleLayer", function (layerId) {
        var _this$props2 = _this.props,
          _this$props2$index = _this$props2.index,
          mapIndex = _this$props2$index === void 0 ? 0 : _this$props2$index,
          visStateActions = _this$props2.visStateActions;
        visStateActions.toggleLayerForMap(mapIndex, layerId);
      });
      (0, _defineProperty2["default"])(_this, "_onMapboxStyleUpdate", function (update) {
        // force refresh mapboxgl layers
        _this.previousLayers = {};
        _this._updateMapboxLayers();
        if (update && update.style) {
          // No attributions are needed if the style doesn't reference Mapbox sources
          _this.setState({
            showBaseMapAttribution: (0, _src2.isStyleUsingMapboxTiles)(update.style) || !(0, _src2.isStyleUsingOpenStreetMapTiles)(update.style)
          });
        }
        if (typeof _this.props.onMapStyleLoaded === 'function') {
          _this.props.onMapStyleLoaded(_this._map);
        }
      });
      (0, _defineProperty2["default"])(_this, "_setMapRef", function (mapRef) {
        // Handle change of the map library
        if (_this._map && mapRef) {
          var map = mapRef.getMap();
          if (map && _this._map !== map) {
            var _this$_map, _this$_map2;
            (_this$_map = _this._map) === null || _this$_map === void 0 || _this$_map.off(MAPBOXGL_STYLE_UPDATE, nop);
            (_this$_map2 = _this._map) === null || _this$_map2 === void 0 || _this$_map2.off(MAPBOXGL_RENDER, nop);
            _this._map = null;
          }
        }
        if (!_this._map && mapRef) {
          _this._map = mapRef.getMap();
          // i noticed in certain context we don't access the actual map element
          if (!_this._map) {
            return;
          }
          // bind mapboxgl event listener
          _this._map.on(MAPBOXGL_STYLE_UPDATE, _this._onMapboxStyleUpdate);
          _this._map.on(MAPBOXGL_RENDER, function () {
            if (typeof _this.props.onMapRender === 'function') {
              _this.props.onMapRender(_this._map);
            }
          });
        }
        if (_this.props.getMapboxRef) {
          // The parent component can gain access to our MapboxGlMap by
          // providing this callback. Note that 'mapbox' will be null when the
          // ref is unset (e.g. when a split map is closed).
          _this.props.getMapboxRef(mapRef, _this.props.index);
        }
      });
      (0, _defineProperty2["default"])(_this, "_onBeforeRender", function (_ref6) {
        var gl = _ref6.gl;
        (0, _src2.setLayerBlending)(gl, _this.props.visState.layerBlending);
      });
      (0, _defineProperty2["default"])(_this, "_onDeckError", function (error, layer) {
        var errorMessage = (error === null || error === void 0 ? void 0 : error.message) || 'unknown-error';
        var layerMessage = layer !== null && layer !== void 0 && layer.id ? " in ".concat(layer.id, " layer") : '';
        var errorMessageFull = errorMessage === 'WebGL context is lost' ? 'Your GPU was disconnected. This can happen if your computer goes to sleep. It can also occur for other reasons, such as if you are running too many GPU applications.' : "An error in deck.gl: ".concat(errorMessage).concat(layerMessage, ".");

        // Throttle error notifications, as React doesn't like too many state changes from here.
        var lastShown = _this._deckGLErrorsElapsed[errorMessageFull];
        if (!lastShown || lastShown < Date.now() - _src4.THROTTLE_NOTIFICATION_TIME) {
          _this._deckGLErrorsElapsed[errorMessageFull] = Date.now();

          // Mark layer as invalid
          var extraLayerMessage = '';
          var visStateActions = _this.props.visStateActions;
          if (layer) {
            var _topMostLayer$props;
            var topMostLayer = layer;
            while (topMostLayer.parent) {
              topMostLayer = topMostLayer.parent;
            }
            if ((_topMostLayer$props = topMostLayer.props) !== null && _topMostLayer$props !== void 0 && _topMostLayer$props.id) {
              visStateActions.layerSetIsValid(topMostLayer, false);
              extraLayerMessage = 'The layer has been disabled and highlighted.';
            }
          }

          // Create new error notification or update existing one with same id.
          // Update is required to preserve the order of notifications as they probably are going to "jump" based on order of errors.
          var uiStateActions = _this.props.uiStateActions;
          uiStateActions.addNotification((0, _src2.errorNotification)({
            message: "".concat(errorMessageFull, " ").concat(extraLayerMessage),
            id: errorMessageFull // treat the error message as id
          }));
        }
      });
      (0, _defineProperty2["default"])(_this, "_onViewportChangePropagateDebounced", (0, _debounce["default"])(function () {
        var _this$context;
        var viewState = (_this$context = _this.context) === null || _this$context === void 0 ? void 0 : _this$context.getInternalViewState(_this.props.index);
        (0, _src2.onViewPortChange)(viewState, _this.props.mapStateActions.updateMap, _this.props.onViewStateChange, _this.props.primary, _this.props.index);
      }, DEBOUNCE_VIEWPORT_PROPAGATE));
      (0, _defineProperty2["default"])(_this, "_onViewportChange", function (viewport) {
        var viewState = viewport.viewState;
        if (_this.props.isExport) {
          // Image export map shouldn't be interactive (otherwise this callback can
          // lead to inadvertent changes to the state of the main map)
          return;
        }
        var setInternalViewState = _this.context.setInternalViewState;
        setInternalViewState(viewState, _this.props.index);
        _this._onViewportChangePropagateDebounced();
      });
      (0, _defineProperty2["default"])(_this, "_onLayerHoverDebounced", (0, _debounce["default"])(function (data, index) {
        _this.props.visStateActions.onLayerHover(data, index);
      }, DEBOUNCE_MOUSE_MOVE_PROPAGATE));
      (0, _defineProperty2["default"])(_this, "_onMouseMoveDebounced", (0, _debounce["default"])(function (event, viewport) {
        _this.props.visStateActions.onMouseMove((0, _src2.normalizeEvent)(event, viewport));
      }, DEBOUNCE_MOUSE_MOVE_PROPAGATE));
      (0, _defineProperty2["default"])(_this, "_onLayerLoadingStateChange", (0, _debounce["default"])(function () {
        // trigger loading indicator update without any change to update UI
        _this.props.visStateActions.setLoadingIndicator({
          change: 0
        });
      }, DEBOUNCE_LOADING_STATE_PROPAGATE));
      (0, _defineProperty2["default"])(_this, "_toggleMapControl", function (panelId) {
        var _this$props3 = _this.props,
          index = _this$props3.index,
          uiStateActions = _this$props3.uiStateActions;
        uiStateActions.toggleMapControl(panelId, Number(index));
      });
      return _this;
    }
    (0, _inherits2["default"])(MapContainer, _Component);
    return (0, _createClass2["default"])(MapContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this._ref.current) {
          return;
        }
        (0, _src2.observeDimensions)(this._ref.current, this._handleResize);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // unbind mapboxgl event listener
        if (this._map) {
          var _this$_map3, _this$_map4;
          (_this$_map3 = this._map) === null || _this$_map3 === void 0 || _this$_map3.off(MAPBOXGL_STYLE_UPDATE, nop);
          (_this$_map4 = this._map) === null || _this$_map4 === void 0 || _this$_map4.off(MAPBOXGL_RENDER, nop);
        }
        if (!this._ref.current) {
          return;
        }
        (0, _src2.unobserveDimensions)(this._ref.current);
      }
    }, {
      key: "_onDeckInitialized",
      value: function _onDeckInitialized(gl) {
        if (this.props.onDeckInitialized) {
          this.props.onDeckInitialized(this._deck, gl);
        }
      }

      /**
       * 1) Allow effects only for the first view.
       * 2) Prevent effect:preRender call without valid generated viewports.
       * @param viewIndex View index.
       * @returns Returns true if effects can be used.
       */
    }, {
      key: "_isOKToRenderEffects",
      value: function _isOKToRenderEffects(viewIndex) {
        var _this$_deck;
        return !viewIndex && Boolean((_this$_deck = this._deck) === null || _this$_deck === void 0 || (_this$_deck = _this$_deck.viewManager) === null || _this$_deck === void 0 || (_this$_deck = _this$_deck._viewports) === null || _this$_deck === void 0 ? void 0 : _this$_deck.length);
      }
    }, {
      key: "_renderMapPopover",
      value: /* component render functions */

      /* eslint-disable complexity */
      function _renderMapPopover() {
        var _this$props$visState$;
        // this check is for limiting the display of the `<MapPopover>` to the `<MapContainer>` the user is interacting with
        // the DeckGL onHover event handler adds a `mapIndex` property which is available in the `hoverInfo` object of `visState`
        if (this.props.index !== ((_this$props$visState$ = this.props.visState.hoverInfo) === null || _this$props$visState$ === void 0 ? void 0 : _this$props$visState$.mapIndex)) {
          return null;
        }

        // TODO: move this into reducer so it can be tested
        var _this$props4 = this.props,
          mapState = _this$props4.mapState,
          _this$props4$visState = _this$props4.visState,
          hoverInfo = _this$props4$visState.hoverInfo,
          clicked = _this$props4$visState.clicked,
          datasets = _this$props4$visState.datasets,
          interactionConfig = _this$props4$visState.interactionConfig,
          animationConfig = _this$props4$visState.animationConfig,
          layers = _this$props4$visState.layers,
          _this$props4$visState2 = _this$props4$visState.mousePos,
          mousePosition = _this$props4$visState2.mousePosition,
          coordinate = _this$props4$visState2.coordinate,
          pinned = _this$props4$visState2.pinned;
        var layersToRender = this.layersToRenderSelector(this.props);
        if (!mousePosition || !interactionConfig.tooltip) {
          return null;
        }
        var layerHoverProp = (0, _src6.getLayerHoverProp)({
          animationConfig: animationConfig,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          layers: layers,
          layersToRender: layersToRender,
          datasets: datasets
        });
        var compareMode = interactionConfig.tooltip.config ? interactionConfig.tooltip.config.compareMode : false;
        var pinnedPosition = {
          x: 0,
          y: 0
        };
        var layerPinnedProp = null;
        if (pinned || clicked) {
          // project lnglat to screen so that tooltip follows the object on zoom
          var viewport = (0, _src2.getViewportFromMapState)(mapState);
          var lngLat = clicked ? clicked.coordinate : pinned.coordinate;
          pinnedPosition = this._getHoverXY(viewport, lngLat);
          layerPinnedProp = (0, _src6.getLayerHoverProp)({
            animationConfig: animationConfig,
            interactionConfig: interactionConfig,
            hoverInfo: clicked,
            layers: layers,
            layersToRender: layersToRender,
            datasets: datasets
          });
          if (layerHoverProp && layerPinnedProp) {
            layerHoverProp.primaryData = layerPinnedProp.data;
            layerHoverProp.compareType = interactionConfig.tooltip.config.compareType;
          }
        }
        var commonProp = {
          onClose: this._onCloseMapPopover,
          zoom: mapState.zoom,
          container: this._deck ? this._deck.canvas : undefined
        };
        return /*#__PURE__*/_react["default"].createElement(_errorBoundary["default"], null, layerPinnedProp && /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({}, pinnedPosition, commonProp, {
          layerHoverProp: layerPinnedProp,
          coordinate: interactionConfig.coordinate.enabled && (pinned || {}).coordinate,
          frozen: true,
          isBase: compareMode,
          onSetFeatures: this.props.visStateActions.setFeatures,
          setSelectedFeature: this.props.visStateActions.setSelectedFeature
          // @ts-ignore Argument of type 'Readonly<MapContainerProps>' is not assignable to parameter of type 'never'
          ,
          featureCollection: this.featureCollectionSelector(this.props)
        })), layerHoverProp && (!layerPinnedProp || compareMode) && /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({
          x: mousePosition[0],
          y: mousePosition[1]
        }, commonProp, {
          layerHoverProp: layerHoverProp,
          frozen: false,
          coordinate: interactionConfig.coordinate.enabled && coordinate,
          onSetFeatures: this.props.visStateActions.setFeatures,
          setSelectedFeature: this.props.visStateActions.setSelectedFeature
          // @ts-ignore Argument of type 'Readonly<MapContainerProps>' is not assignable to parameter of type 'never'
          ,
          featureCollection: this.featureCollectionSelector(this.props)
        })));
      }

      /* eslint-enable complexity */
    }, {
      key: "_getHoverXY",
      value: function _getHoverXY(viewport, lngLat) {
        var screenCoord = !viewport || !lngLat ? null : viewport.project(lngLat);
        return screenCoord && {
          x: screenCoord[0],
          y: screenCoord[1]
        };
      }
    }, {
      key: "_renderDeckOverlay",
      value: function _renderDeckOverlay(layersForDeck) {
        var _this$context2,
          _this2 = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          primaryMap: false
        };
        var _this$props5 = this.props,
          mapStyle = _this$props5.mapStyle,
          visState = _this$props5.visState,
          mapState = _this$props5.mapState,
          visStateActions = _this$props5.visStateActions,
          mapboxApiAccessToken = _this$props5.mapboxApiAccessToken,
          mapboxApiUrl = _this$props5.mapboxApiUrl,
          deckGlProps = _this$props5.deckGlProps,
          index = _this$props5.index,
          mapControls = _this$props5.mapControls,
          deckRenderCallbacks = _this$props5.deckRenderCallbacks,
          theme = _this$props5.theme,
          generateDeckGLLayers = _this$props5.generateDeckGLLayers,
          onMouseMove = _this$props5.onMouseMove;
        var hoverInfo = visState.hoverInfo,
          editor = visState.editor;
        var primaryMap = options.primaryMap,
          isInteractive = options.isInteractive,
          children = options.children;

        // disable double click zoom when editor is in any draw mode
        var mapDraw = mapControls.mapDraw;
        var _ref7 = mapDraw || {},
          _ref7$active = _ref7.active,
          editorMenuActive = _ref7$active === void 0 ? false : _ref7$active;
        var isEditorDrawingMode = _src.EditorLayerUtils.isDrawingActive(editorMenuActive, editor.mode);
        var internalViewState = (_this$context2 = this.context) === null || _this$context2 === void 0 ? void 0 : _this$context2.getInternalViewState(index);
        var internalMapState = _objectSpread(_objectSpread({}, mapState), internalViewState);
        var viewport = (0, _src2.getViewportFromMapState)(internalMapState);
        var editorFeatureSelectedIndex = this.selectedPolygonIndexSelector(this.props);
        var setFeatures = visStateActions.setFeatures,
          onLayerClick = visStateActions.onLayerClick,
          setSelectedFeature = visStateActions.setSelectedFeature;
        var generateDeckGLLayersMethod = generateDeckGLLayers !== null && generateDeckGLLayers !== void 0 ? generateDeckGLLayers : _src6.computeDeckLayers;
        var deckGlLayers = generateDeckGLLayersMethod({
          visState: visState,
          mapState: internalMapState,
          mapStyle: mapStyle
        }, {
          mapIndex: index,
          primaryMap: primaryMap,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          layersForDeck: layersForDeck,
          editorInfo: primaryMap ? {
            editor: editor,
            editorMenuActive: editorMenuActive,
            onSetFeatures: setFeatures,
            setSelectedFeature: setSelectedFeature,
            // @ts-ignore Argument of type 'Readonly<MapContainerProps>' is not assignable to parameter of type 'never'
            featureCollection: this.featureCollectionSelector(this.props),
            selectedFeatureIndexes: this.selectedFeatureIndexArraySelector(
            // @ts-ignore Argument of type 'unknown' is not assignable to parameter of type 'number'.
            editorFeatureSelectedIndex),
            viewport: viewport
          } : undefined
        }, {
          onLayerHover: this._onLayerHover,
          onSetLayerDomain: this._onLayerSetDomain,
          onFilteredItemsChange: this._onLayerFilteredItemsChange,
          onWMSFeatureInfo: this._onWMSFeatureInfo
        }, deckGlProps);
        var extraDeckParams = {};
        if (primaryMap) {
          extraDeckParams.getTooltip = function (info) {
            return _src.EditorLayerUtils.getTooltip(info, {
              editorMenuActive: editorMenuActive,
              editor: editor,
              theme: theme
            });
          };
          extraDeckParams.getCursor = function (_ref8) {
            var isDragging = _ref8.isDragging;
            var editorCursor = _src.EditorLayerUtils.getCursor({
              editorMenuActive: editorMenuActive,
              editor: editor,
              hoverInfo: hoverInfo
            });
            if (editorCursor) return editorCursor;
            if (isDragging) return 'grabbing';
            if (hoverInfo !== null && hoverInfo !== void 0 && hoverInfo.layer) return 'pointer';
            return 'grab';
          };
        }
        var effects = this._isOKToRenderEffects(index) ? (0, _src2.computeDeckEffects)({
          visState: visState,
          mapState: mapState
        }) : [];
        var views = deckGlProps !== null && deckGlProps !== void 0 && deckGlProps.views ? deckGlProps === null || deckGlProps === void 0 ? void 0 : deckGlProps.views() : new _core2.MapView({
          legacyMeterSizes: true
        });
        var allDeckGlProps = _objectSpread(_objectSpread({}, deckGlProps), {}, {
          pickingRadius: _src4.DEFAULT_PICKING_RADIUS,
          views: views,
          layers: deckGlLayers,
          effects: effects
        });
        if (typeof (deckRenderCallbacks === null || deckRenderCallbacks === void 0 ? void 0 : deckRenderCallbacks.onDeckRender) === 'function') {
          allDeckGlProps = deckRenderCallbacks.onDeckRender(allDeckGlProps);
          if (!allDeckGlProps) {
            // if onDeckRender returns null, do not render deck.gl
            return null;
          }
        }
        return /*#__PURE__*/_react["default"].createElement("div", isInteractive ? {
          onMouseMove: primaryMap ? function (event) {
            onMouseMove === null || onMouseMove === void 0 || onMouseMove(event);
            _this2._onMouseMoveDebounced(event, viewport);
          } : undefined
        } : {
          style: {
            pointerEvents: 'none'
          }
        }, /*#__PURE__*/_react["default"].createElement(_react2["default"], (0, _extends2["default"])({
          id: "default-deckgl-overlay",
          onLoad: function onLoad() {
            if (typeof (deckRenderCallbacks === null || deckRenderCallbacks === void 0 ? void 0 : deckRenderCallbacks.onDeckLoad) === 'function') {
              deckRenderCallbacks.onDeckLoad();
            }
          }
        }, allDeckGlProps, {
          controller: isInteractive ? {
            doubleClickZoom: !isEditorDrawingMode,
            dragRotate: this.props.mapState.dragRotate
          } : false,
          initialViewState: internalViewState,
          onBeforeRender: this._onBeforeRender,
          onViewStateChange: isInteractive ? this._onViewportChange : undefined
        }, extraDeckParams, {
          onHover: isInteractive ? function (data) {
            var res = _src.EditorLayerUtils.onHover(data, {
              editorMenuActive: editorMenuActive,
              editor: editor,
              hoverInfo: hoverInfo
            });
            if (res) return;
            _this2._onLayerHoverDebounced(data, index);
          } : null,
          onClick: function onClick(data, event) {
            // @ts-ignore
            (0, _src2.normalizeEvent)(event.srcEvent, viewport);
            var res = _src.EditorLayerUtils.onClick(data, event, {
              editorMenuActive: editorMenuActive,
              editor: editor,
              onLayerClick: onLayerClick,
              setSelectedFeature: setSelectedFeature,
              mapIndex: index
            });
            if (res) return;
            visStateActions.onLayerClick(data);
          },
          onError: this._onDeckError,
          ref: function ref(comp) {
            // @ts-ignore
            if (comp && comp.deck && !_this2._deck) {
              // @ts-ignore
              _this2._deck = comp.deck;
            }
          },
          onWebGLInitialized: function onWebGLInitialized(gl) {
            return _this2._onDeckInitialized(gl);
          },
          onAfterRender: function onAfterRender() {
            if (typeof (deckRenderCallbacks === null || deckRenderCallbacks === void 0 ? void 0 : deckRenderCallbacks.onDeckAfterRender) === 'function') {
              deckRenderCallbacks.onDeckAfterRender(allDeckGlProps);
            }
            var anyActiveLayerLoading = (0, _src6.areAnyDeckLayersLoading)(allDeckGlProps.layers);
            if (anyActiveLayerLoading !== _this2.anyActiveLayerLoading) {
              _this2._onLayerLoadingStateChange();
              _this2.anyActiveLayerLoading = anyActiveLayerLoading;
            }
          }
        }), children));
      }
    }, {
      key: "_updateMapboxLayers",
      value: function _updateMapboxLayers() {
        var mapboxLayers = this.mapboxLayersSelector(this.props);
        if (!Object.keys(mapboxLayers).length && !Object.keys(this.previousLayers).length) {
          return;
        }
        (0, _src.updateMapboxLayers)(this._map, mapboxLayers, this.previousLayers);
        this.previousLayers = mapboxLayers;
      }
    }, {
      key: "_renderMapboxOverlays",
      value: function _renderMapboxOverlays() {
        if (this._map && this._map.isStyleLoaded()) {
          this._updateMapboxLayers();
        }
      }
    }, {
      key: "_renderMap",
      value: /* eslint-disable complexity */
      function _renderMap() {
        var _mapStyle$mapStyles, _getApplicationConfig, _this$context3, _mapStyle$bottomMapSt;
        var _this$props6 = this.props,
          visState = _this$props6.visState,
          mapState = _this$props6.mapState,
          mapStyle = _this$props6.mapStyle,
          mapStateActions = _this$props6.mapStateActions,
          _this$props6$MapCompo = _this$props6.MapComponent,
          MapComponent = _this$props6$MapCompo === void 0 ? _reactMapGl.Map : _this$props6$MapCompo,
          mapboxApiAccessToken = _this$props6.mapboxApiAccessToken,
          mapControls = _this$props6.mapControls,
          isExport = _this$props6.isExport,
          locale = _this$props6.locale,
          uiStateActions = _this$props6.uiStateActions,
          visStateActions = _this$props6.visStateActions,
          index = _this$props6.index,
          primary = _this$props6.primary,
          bottomMapContainerProps = _this$props6.bottomMapContainerProps,
          topMapContainerProps = _this$props6.topMapContainerProps,
          theme = _this$props6.theme,
          _this$props6$datasetA = _this$props6.datasetAttributions,
          datasetAttributions = _this$props6$datasetA === void 0 ? [] : _this$props6$datasetA,
          _this$props6$containe = _this$props6.containerId,
          containerId = _this$props6$containe === void 0 ? 0 : _this$props6$containe,
          isLoadingIndicatorVisible = _this$props6.isLoadingIndicatorVisible,
          activeSidePanel = _this$props6.activeSidePanel,
          sidePanelWidth = _this$props6.sidePanelWidth;
        var layers = visState.layers,
          datasets = visState.datasets,
          editor = visState.editor,
          interactionConfig = visState.interactionConfig;
        var layersToRender = this.layersToRenderSelector(this.props);
        var layersForDeck = this.layersForDeckSelector(this.props);

        // Current style can be a custom style, from which we pull the mapbox API acccess token
        var currentStyle = (_mapStyle$mapStyles = mapStyle.mapStyles) === null || _mapStyle$mapStyles === void 0 ? void 0 : _mapStyle$mapStyles[mapStyle.styleType];
        var baseMapLibraryName = (0, _src2.getBaseMapLibrary)(currentStyle);
        var baseMapLibraryConfig = (_getApplicationConfig = (0, _src2.getApplicationConfig)().baseMapLibraryConfig) === null || _getApplicationConfig === void 0 ? void 0 : _getApplicationConfig[baseMapLibraryName];
        var internalViewState = (_this$context3 = this.context) === null || _this$context3 === void 0 ? void 0 : _this$context3.getInternalViewState(index);
        var mapProps = _objectSpread(_objectSpread({}, internalViewState), {}, {
          preserveDrawingBuffer: true,
          mapboxAccessToken: (currentStyle === null || currentStyle === void 0 ? void 0 : currentStyle.accessToken) || mapboxApiAccessToken,
          // baseApiUrl: mapboxApiUrl,
          mapLib: baseMapLibraryConfig.getMapLib(),
          transformRequest: this.props.transformRequest || (0, _src2.transformRequest)((currentStyle === null || currentStyle === void 0 ? void 0 : currentStyle.accessToken) || mapboxApiAccessToken)
        });
        var hasGeocoderLayer = Boolean(layers.find(function (l) {
          return l.id === _src4.GEOCODER_LAYER_ID;
        }));
        var isSplit = Boolean(mapState.isSplit);
        var deck = this._renderDeckOverlay(layersForDeck, {
          primaryMap: true,
          isInteractive: true,
          children: /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({
            key: "bottom-".concat(baseMapLibraryName)
          }, mapProps, {
            mapStyle: (_mapStyle$bottomMapSt = mapStyle.bottomMapStyle) !== null && _mapStyle$bottomMapSt !== void 0 ? _mapStyle$bottomMapSt : _src4.EMPTY_MAPBOX_STYLE
          }, bottomMapContainerProps, {
            ref: this._setMapRef
          }))
        });
        if (!deck) {
          // deckOverlay can be null if onDeckRender returns null
          // in this case we don't want to render the map
          return null;
        }
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(MapControl, {
          mapState: mapState,
          datasets: datasets,
          availableLocales: LOCALE_CODES_ARRAY,
          dragRotate: mapState.dragRotate,
          isSplit: isSplit,
          primary: Boolean(primary),
          isExport: isExport,
          layers: layers,
          layersToRender: layersToRender,
          mapIndex: index || 0,
          mapControls: mapControls,
          readOnly: this.props.readOnly,
          scale: mapState.scale || 1,
          logoComponent: this.props.logoComponent,
          top: interactionConfig.geocoder && interactionConfig.geocoder.enabled ? theme.mapControlTop : 0,
          editor: editor,
          locale: locale,
          onTogglePerspective: mapStateActions.togglePerspective,
          onToggleSplitMap: mapStateActions.toggleSplitMap,
          onMapToggleLayer: this._handleMapToggleLayer,
          onToggleMapControl: this._toggleMapControl,
          onToggleSplitMapViewport: mapStateActions.toggleSplitMapViewport,
          onSetEditorMode: visStateActions.setEditorMode,
          onSetLocale: uiStateActions.setLocale,
          onToggleEditorVisibility: visStateActions.toggleEditorVisibility,
          onLayerVisConfigChange: visStateActions.layerVisConfigChange,
          mapHeight: mapState.height,
          setMapControlSettings: uiStateActions.setMapControlSettings,
          activeSidePanel: activeSidePanel
        }), isSplitSelector(this.props) && /*#__PURE__*/_react["default"].createElement(Droppable, {
          containerId: containerId
        }), deck, this._renderMapboxOverlays(), /*#__PURE__*/_react["default"].createElement(Editor, {
          index: index || 0,
          datasets: datasets,
          editor: editor,
          filters: this.polygonFiltersSelector(this.props),
          layers: layers,
          onDeleteFeature: visStateActions.deleteFeature,
          onSelect: visStateActions.setSelectedFeature,
          onTogglePolygonFilter: visStateActions.setPolygonFilterLayer,
          onSetEditorMode: visStateActions.setEditorMode,
          style: {
            pointerEvents: 'all',
            position: 'absolute',
            display: editor.visible ? 'block' : 'none'
          }
        }), this.props.children, mapStyle.topMapStyle ? /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({
          key: "top-".concat(baseMapLibraryName),
          viewState: internalViewState,
          mapStyle: mapStyle.topMapStyle,
          style: MAP_STYLE.top,
          mapboxAccessToken: mapProps.mapboxAccessToken,
          transformRequest: mapProps.transformRequest,
          mapLib: baseMapLibraryConfig.getMapLib()
        }, topMapContainerProps)) : null, hasGeocoderLayer ? this._renderDeckOverlay((0, _defineProperty2["default"])({}, _src4.GEOCODER_LAYER_ID, hasGeocoderLayer), {
          primaryMap: false,
          isInteractive: false
        }) : null, this._renderMapPopover(), primary !== isSplit ? /*#__PURE__*/_react["default"].createElement(_loadingIndicator["default"], {
          isVisible: Boolean(isLoadingIndicatorVisible || this.anyActiveLayerLoading),
          activeSidePanel: Boolean(activeSidePanel),
          sidePanelWidth: sidePanelWidth
        }) : null, this.props.primary ? /*#__PURE__*/_react["default"].createElement(Attribution, {
          showBaseMapLibLogo: this.state.showBaseMapAttribution,
          showOsmBasemapAttribution: true,
          datasetAttributions: datasetAttributions,
          baseMapLibraryConfig: baseMapLibraryConfig
        }) : null);
      }
    }, {
      key: "render",
      value: function render() {
        var _mapStyle$mapStyles2, _getApplicationConfig2;
        var _this$props7 = this.props,
          visState = _this$props7.visState,
          mapStyle = _this$props7.mapStyle;
        var mapContent = this._renderMap();
        if (!mapContent) {
          // mapContent can be null if onDeckRender returns null
          // in this case we don't want to render the map
          return null;
        }
        var currentStyle = (_mapStyle$mapStyles2 = mapStyle.mapStyles) === null || _mapStyle$mapStyles2 === void 0 ? void 0 : _mapStyle$mapStyles2[mapStyle.styleType];
        var baseMapLibraryName = (0, _src2.getBaseMapLibrary)(currentStyle);
        var baseMapLibraryConfig = (_getApplicationConfig2 = (0, _src2.getApplicationConfig)().baseMapLibraryConfig) === null || _getApplicationConfig2 === void 0 ? void 0 : _getApplicationConfig2[baseMapLibraryName];
        return /*#__PURE__*/_react["default"].createElement(StyledMap, {
          ref: this._ref,
          style: this.styleSelector(this.props),
          onContextMenu: function onContextMenu(event) {
            return event.preventDefault();
          },
          $mixBlendMode: visState.overlayBlending,
          $mapLibCssClass: baseMapLibraryConfig.mapLibCssClass
        }, mapContent);
      }
    }]);
  }(_react.Component);
  (0, _defineProperty2["default"])(MapContainer, "contextType", _mapViewStateContext.MapViewStateContext);
  (0, _defineProperty2["default"])(MapContainer, "defaultProps", {
    MapComponent: _reactMapGl.Map,
    deckGlProps: {},
    index: 0,
    primary: true
  });
  return (0, _styledComponents.withTheme)(MapContainer);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9yZWFjdE1hcEdsIiwiX3JlYWN0MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfcmVzZWxlY3QiLCJfY29yZSIsIl9kZWJvdW5jZSIsIl9tYXBQb3BvdmVyIiwiX21hcENvbnRyb2wiLCJfc3R5bGVkQ29tcG9uZW50czIiLCJfZWRpdG9yIiwiX3NyYyIsIl9zcmMyIiwiX3NyYzMiLCJfc3JjNCIsIl9kbmRMYXllckl0ZW1zIiwiX21hcFZpZXdTdGF0ZUNvbnRleHQiLCJfZXJyb3JCb3VuZGFyeSIsIl9zcmM1IiwiX2NvcmUyIiwiX3NyYzYiLCJfbG9hZGluZ0luZGljYXRvciIsIl90ZW1wbGF0ZU9iamVjdCIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkRFQk9VTkNFX1ZJRVdQT1JUX1BST1BBR0FURSIsIkRFQk9VTkNFX01PVVNFX01PVkVfUFJPUEFHQVRFIiwiREVCT1VOQ0VfTE9BRElOR19TVEFURV9QUk9QQUdBVEUiLCJNQVBfU1RZTEUiLCJjb250YWluZXIiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsInBvaW50ZXJFdmVudHMiLCJMT0NBTEVfQ09ERVNfQVJSQVkiLCJMT0NBTEVfQ09ERVMiLCJTdHlsZWRNYXAiLCJzdHlsZWQiLCJTdHlsZWRNYXBDb250YWluZXIiLCJfcmVmIiwiX3JlZiQkbWl4QmxlbmRNb2RlIiwiJG1peEJsZW5kTW9kZSIsIiRtYXBMaWJDc3NDbGFzcyIsImNvbmNhdCIsIk1BUEJPWEdMX1NUWUxFX1VQREFURSIsIk1BUEJPWEdMX1JFTkRFUiIsIm5vcCIsIk1hcExpYkxvZ28iLCJfcmVmMiIsImJhc2VNYXBMaWJyYXJ5Q29uZmlnIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcExpYkNzc0NsYXNzIiwidGFyZ2V0IiwicmVsIiwiaHJlZiIsIm1hcExpYlVybCIsIm1hcExpYk5hbWUiLCJTdHlsZWREcm9wcGFibGUiLCJkaXYiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInByb3BzIiwiaXNPdmVyIiwidGhlbWUiLCJkbmRPdmVyQmFja2dyb3VuZENvbG9yIiwiaXNTcGxpdFNlbGVjdG9yIiwiZXhwb3J0cyIsInZpc1N0YXRlIiwic3BsaXRNYXBzIiwiRHJvcHBhYmxlIiwiX3JlZjMiLCJjb250YWluZXJJZCIsIl91c2VEcm9wcGFibGUiLCJ1c2VEcm9wcGFibGUiLCJpZCIsImRhdGEiLCJ0eXBlIiwiRFJPUFBBQkxFX01BUF9DT05UQUlORVJfVFlQRSIsImluZGV4IiwiZGlzYWJsZWQiLCJzZXROb2RlUmVmIiwicmVmIiwiU3R5bGVkRGF0YXNldEF0dHJpYnV0aW9uc0NvbnRhaW5lciIsImlzUGFsbSIsImxhYmVsQ29sb3IiLCJEYXRhc2V0QXR0cmlidXRpb25zIiwiX3JlZjQiLCJkYXRhc2V0QXR0cmlidXRpb25zIiwiRnJhZ21lbnQiLCJtYXAiLCJkcyIsImlkeCIsIl9leHRlbmRzMiIsInVybCIsImtleSIsInRpdGxlIiwiQXR0cmlidXRpb24iLCJfcmVmNSIsIl9yZWY1JHNob3dCYXNlTWFwTGliTCIsInNob3dCYXNlTWFwTGliTG9nbyIsIl9yZWY1JHNob3dPc21CYXNlbWFwQSIsInNob3dPc21CYXNlbWFwQXR0cmlidXRpb24iLCJoYXNNb2JpbGVXaWR0aCIsImJyZWFrUG9pbnRWYWx1ZXMiLCJtZW1vaXplZENvbXBvbmVudHMiLCJ1c2VNZW1vIiwiU3R5bGVkQXR0cmlidXRpb24iLCJtYXBMaWJBdHRyaWJ1dGlvbkNzc0NsYXNzIiwiRW5kSG9yaXpvbnRhbEZsZXhib3giLCJNYXBDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIk1hcFBvcG92ZXJGYWN0b3J5IiwiTWFwQ29udHJvbEZhY3RvcnkiLCJFZGl0b3JGYWN0b3J5IiwiTWFwUG9wb3ZlciIsIk1hcENvbnRyb2wiLCJFZGl0b3IiLCJNYXBDb250YWluZXIiLCJfQ29tcG9uZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2hvd0Jhc2VNYXBBdHRyaWJ1dGlvbiIsImNyZWF0ZVJlZiIsImRpbWVuc2lvbnMiLCJfdGhpcyRwcm9wcyIsInByaW1hcnkiLCJtYXBTdGF0ZUFjdGlvbnMiLCJ1cGRhdGVNYXAiLCJsYXllcnMiLCJsYXllckRhdGEiLCJjcmVhdGVTZWxlY3RvciIsInNwbGl0TWFwU2VsZWN0b3IiLCJzcGxpdE1hcEluZGV4U2VsZWN0b3IiLCJnZXRNYXBMYXllcnNGcm9tU3BsaXRNYXBzIiwibGF5ZXJPcmRlciIsImxheWVyc1NlbGVjdG9yIiwibGF5ZXJEYXRhU2VsZWN0b3IiLCJtYXBMYXllcnNTZWxlY3RvciIsInByZXBhcmVMYXllcnNUb1JlbmRlciIsInByZXBhcmVMYXllcnNGb3JEZWNrIiwiZmlsdGVycyIsImZpbHRlcnNTZWxlY3RvciIsImYiLCJGSUxURVJfVFlQRVMiLCJwb2x5Z29uIiwiZW5hYmxlZCIsImVkaXRvciIsImZlYXR1cmVzIiwic2VsZWN0ZWRGZWF0dXJlIiwicG9seWdvbkZpbHRlcnNTZWxlY3RvciIsImZlYXR1cmVzU2VsZWN0b3IiLCJwb2x5Z29uRmlsdGVycyIsInZhbHVlIiwiZmVhdHVyZUNvbGxlY3Rpb25TZWxlY3RvciIsInNlbGVjdGVkRmVhdHVyZVNlbGVjdG9yIiwiY29sbGVjdGlvbiIsImZpbmRJbmRleCIsIl9wcm9wcyRnZW5lcmF0ZU1hcGJveCIsImdlbmVyYXRlTWFwYm94TGF5ZXJzIiwibGF5ZXJPcmRlclNlbGVjdG9yIiwibGF5ZXJzVG9SZW5kZXJTZWxlY3RvciIsImdlbmVyYXRlTWFwYm94TGF5ZXJNZXRob2RTZWxlY3RvciIsImxheWVyIiwibGF5ZXJzVG9SZW5kZXIiLCJnZW5lcmF0ZU1hcGJveExheWVyTWV0aG9kIiwibWFwU3R5bGUiLCJzdHlsZVR5cGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXBTdHlsZVR5cGVTZWxlY3RvciIsIm1hcFN0eWxlQmFja2dyb3VuZENvbG9yU2VsZWN0b3IiLCJOT19NQVBfSUQiLCJyZ2JUb0hleCIsInZpc1N0YXRlQWN0aW9ucyIsIm9uTGF5ZXJDbGljayIsIl9pZHgiLCJpbmZvIiwib25MYXllckhvdmVyIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJjb2xvckRvbWFpbiIsImRvbWFpbiIsImFnZ3JlZ2F0ZWRCaW5zIiwiZXZlbnQiLCJsYXllckZpbHRlcmVkSXRlbXNDaGFuZ2UiLCJ3bXNGZWF0dXJlSW5mbyIsImZlYXR1cmVJbmZvIiwiY29vcmRpbmF0ZSIsImxheWVySWQiLCJfdGhpcyRwcm9wczIiLCJfdGhpcyRwcm9wczIkaW5kZXgiLCJtYXBJbmRleCIsInRvZ2dsZUxheWVyRm9yTWFwIiwidXBkYXRlIiwicHJldmlvdXNMYXllcnMiLCJfdXBkYXRlTWFwYm94TGF5ZXJzIiwic2V0U3RhdGUiLCJpc1N0eWxlVXNpbmdNYXBib3hUaWxlcyIsImlzU3R5bGVVc2luZ09wZW5TdHJlZXRNYXBUaWxlcyIsIm9uTWFwU3R5bGVMb2FkZWQiLCJfbWFwIiwibWFwUmVmIiwiZ2V0TWFwIiwiX3RoaXMkX21hcCIsIl90aGlzJF9tYXAyIiwib2ZmIiwib24iLCJfb25NYXBib3hTdHlsZVVwZGF0ZSIsIm9uTWFwUmVuZGVyIiwiZ2V0TWFwYm94UmVmIiwiX3JlZjYiLCJnbCIsInNldExheWVyQmxlbmRpbmciLCJsYXllckJsZW5kaW5nIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwibGF5ZXJNZXNzYWdlIiwiZXJyb3JNZXNzYWdlRnVsbCIsImxhc3RTaG93biIsIl9kZWNrR0xFcnJvcnNFbGFwc2VkIiwiRGF0ZSIsIm5vdyIsIlRIUk9UVExFX05PVElGSUNBVElPTl9USU1FIiwiZXh0cmFMYXllck1lc3NhZ2UiLCJfdG9wTW9zdExheWVyJHByb3BzIiwidG9wTW9zdExheWVyIiwicGFyZW50IiwibGF5ZXJTZXRJc1ZhbGlkIiwidWlTdGF0ZUFjdGlvbnMiLCJhZGROb3RpZmljYXRpb24iLCJlcnJvck5vdGlmaWNhdGlvbiIsImRlYm91bmNlIiwiX3RoaXMkY29udGV4dCIsInZpZXdTdGF0ZSIsImNvbnRleHQiLCJnZXRJbnRlcm5hbFZpZXdTdGF0ZSIsIm9uVmlld1BvcnRDaGFuZ2UiLCJvblZpZXdTdGF0ZUNoYW5nZSIsInZpZXdwb3J0IiwiaXNFeHBvcnQiLCJzZXRJbnRlcm5hbFZpZXdTdGF0ZSIsIl9vblZpZXdwb3J0Q2hhbmdlUHJvcGFnYXRlRGVib3VuY2VkIiwib25Nb3VzZU1vdmUiLCJub3JtYWxpemVFdmVudCIsInNldExvYWRpbmdJbmRpY2F0b3IiLCJjaGFuZ2UiLCJwYW5lbElkIiwiX3RoaXMkcHJvcHMzIiwidG9nZ2xlTWFwQ29udHJvbCIsIk51bWJlciIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwiY29tcG9uZW50RGlkTW91bnQiLCJjdXJyZW50Iiwib2JzZXJ2ZURpbWVuc2lvbnMiLCJfaGFuZGxlUmVzaXplIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJfdGhpcyRfbWFwMyIsIl90aGlzJF9tYXA0IiwidW5vYnNlcnZlRGltZW5zaW9ucyIsIl9vbkRlY2tJbml0aWFsaXplZCIsIm9uRGVja0luaXRpYWxpemVkIiwiX2RlY2siLCJfaXNPS1RvUmVuZGVyRWZmZWN0cyIsInZpZXdJbmRleCIsIl90aGlzJF9kZWNrIiwidmlld01hbmFnZXIiLCJfdmlld3BvcnRzIiwiX3JlbmRlck1hcFBvcG92ZXIiLCJfdGhpcyRwcm9wcyR2aXNTdGF0ZSQiLCJob3ZlckluZm8iLCJfdGhpcyRwcm9wczQiLCJtYXBTdGF0ZSIsIl90aGlzJHByb3BzNCR2aXNTdGF0ZSIsImNsaWNrZWQiLCJkYXRhc2V0cyIsImludGVyYWN0aW9uQ29uZmlnIiwiYW5pbWF0aW9uQ29uZmlnIiwiX3RoaXMkcHJvcHM0JHZpc1N0YXRlMiIsIm1vdXNlUG9zIiwibW91c2VQb3NpdGlvbiIsInBpbm5lZCIsInRvb2x0aXAiLCJsYXllckhvdmVyUHJvcCIsImdldExheWVySG92ZXJQcm9wIiwiY29tcGFyZU1vZGUiLCJjb25maWciLCJwaW5uZWRQb3NpdGlvbiIsIngiLCJ5IiwibGF5ZXJQaW5uZWRQcm9wIiwiZ2V0Vmlld3BvcnRGcm9tTWFwU3RhdGUiLCJsbmdMYXQiLCJfZ2V0SG92ZXJYWSIsInByaW1hcnlEYXRhIiwiY29tcGFyZVR5cGUiLCJjb21tb25Qcm9wIiwib25DbG9zZSIsIl9vbkNsb3NlTWFwUG9wb3ZlciIsInpvb20iLCJjYW52YXMiLCJ1bmRlZmluZWQiLCJmcm96ZW4iLCJpc0Jhc2UiLCJvblNldEZlYXR1cmVzIiwic2V0RmVhdHVyZXMiLCJzZXRTZWxlY3RlZEZlYXR1cmUiLCJmZWF0dXJlQ29sbGVjdGlvbiIsInNjcmVlbkNvb3JkIiwicHJvamVjdCIsIl9yZW5kZXJEZWNrT3ZlcmxheSIsImxheWVyc0ZvckRlY2siLCJfdGhpcyRjb250ZXh0MiIsIl90aGlzMiIsIm9wdGlvbnMiLCJwcmltYXJ5TWFwIiwiX3RoaXMkcHJvcHM1IiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJkZWNrR2xQcm9wcyIsIm1hcENvbnRyb2xzIiwiZGVja1JlbmRlckNhbGxiYWNrcyIsImdlbmVyYXRlRGVja0dMTGF5ZXJzIiwiaXNJbnRlcmFjdGl2ZSIsImNoaWxkcmVuIiwibWFwRHJhdyIsIl9yZWY3IiwiX3JlZjckYWN0aXZlIiwiYWN0aXZlIiwiZWRpdG9yTWVudUFjdGl2ZSIsImlzRWRpdG9yRHJhd2luZ01vZGUiLCJFZGl0b3JMYXllclV0aWxzIiwiaXNEcmF3aW5nQWN0aXZlIiwibW9kZSIsImludGVybmFsVmlld1N0YXRlIiwiaW50ZXJuYWxNYXBTdGF0ZSIsImVkaXRvckZlYXR1cmVTZWxlY3RlZEluZGV4Iiwic2VsZWN0ZWRQb2x5Z29uSW5kZXhTZWxlY3RvciIsImdlbmVyYXRlRGVja0dMTGF5ZXJzTWV0aG9kIiwiY29tcHV0ZURlY2tMYXllcnMiLCJkZWNrR2xMYXllcnMiLCJlZGl0b3JJbmZvIiwic2VsZWN0ZWRGZWF0dXJlSW5kZXhlcyIsInNlbGVjdGVkRmVhdHVyZUluZGV4QXJyYXlTZWxlY3RvciIsIl9vbkxheWVySG92ZXIiLCJvblNldExheWVyRG9tYWluIiwiX29uTGF5ZXJTZXREb21haW4iLCJvbkZpbHRlcmVkSXRlbXNDaGFuZ2UiLCJfb25MYXllckZpbHRlcmVkSXRlbXNDaGFuZ2UiLCJvbldNU0ZlYXR1cmVJbmZvIiwiX29uV01TRmVhdHVyZUluZm8iLCJleHRyYURlY2tQYXJhbXMiLCJnZXRUb29sdGlwIiwiZ2V0Q3Vyc29yIiwiX3JlZjgiLCJpc0RyYWdnaW5nIiwiZWRpdG9yQ3Vyc29yIiwiZWZmZWN0cyIsImNvbXB1dGVEZWNrRWZmZWN0cyIsInZpZXdzIiwiTWFwVmlldyIsImxlZ2FjeU1ldGVyU2l6ZXMiLCJhbGxEZWNrR2xQcm9wcyIsInBpY2tpbmdSYWRpdXMiLCJERUZBVUxUX1BJQ0tJTkdfUkFESVVTIiwib25EZWNrUmVuZGVyIiwiX29uTW91c2VNb3ZlRGVib3VuY2VkIiwib25Mb2FkIiwib25EZWNrTG9hZCIsImNvbnRyb2xsZXIiLCJkb3VibGVDbGlja1pvb20iLCJkcmFnUm90YXRlIiwiaW5pdGlhbFZpZXdTdGF0ZSIsIm9uQmVmb3JlUmVuZGVyIiwiX29uQmVmb3JlUmVuZGVyIiwiX29uVmlld3BvcnRDaGFuZ2UiLCJvbkhvdmVyIiwicmVzIiwiX29uTGF5ZXJIb3ZlckRlYm91bmNlZCIsIm9uQ2xpY2siLCJzcmNFdmVudCIsIm9uRXJyb3IiLCJfb25EZWNrRXJyb3IiLCJjb21wIiwiZGVjayIsIm9uV2ViR0xJbml0aWFsaXplZCIsIm9uQWZ0ZXJSZW5kZXIiLCJvbkRlY2tBZnRlclJlbmRlciIsImFueUFjdGl2ZUxheWVyTG9hZGluZyIsImFyZUFueURlY2tMYXllcnNMb2FkaW5nIiwiX29uTGF5ZXJMb2FkaW5nU3RhdGVDaGFuZ2UiLCJtYXBib3hMYXllcnMiLCJtYXBib3hMYXllcnNTZWxlY3RvciIsInVwZGF0ZU1hcGJveExheWVycyIsIl9yZW5kZXJNYXBib3hPdmVybGF5cyIsImlzU3R5bGVMb2FkZWQiLCJfcmVuZGVyTWFwIiwiX21hcFN0eWxlJG1hcFN0eWxlcyIsIl9nZXRBcHBsaWNhdGlvbkNvbmZpZyIsIl90aGlzJGNvbnRleHQzIiwiX21hcFN0eWxlJGJvdHRvbU1hcFN0IiwiX3RoaXMkcHJvcHM2IiwiX3RoaXMkcHJvcHM2JE1hcENvbXBvIiwiTWFwQ29tcG9uZW50IiwiTWFwIiwibG9jYWxlIiwiYm90dG9tTWFwQ29udGFpbmVyUHJvcHMiLCJ0b3BNYXBDb250YWluZXJQcm9wcyIsIl90aGlzJHByb3BzNiRkYXRhc2V0QSIsIl90aGlzJHByb3BzNiRjb250YWluZSIsImlzTG9hZGluZ0luZGljYXRvclZpc2libGUiLCJhY3RpdmVTaWRlUGFuZWwiLCJzaWRlUGFuZWxXaWR0aCIsImxheWVyc0ZvckRlY2tTZWxlY3RvciIsImN1cnJlbnRTdHlsZSIsIm1hcFN0eWxlcyIsImJhc2VNYXBMaWJyYXJ5TmFtZSIsImdldEJhc2VNYXBMaWJyYXJ5IiwiZ2V0QXBwbGljYXRpb25Db25maWciLCJtYXBQcm9wcyIsInByZXNlcnZlRHJhd2luZ0J1ZmZlciIsIm1hcGJveEFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJtYXBMaWIiLCJnZXRNYXBMaWIiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwiaGFzR2VvY29kZXJMYXllciIsImZpbmQiLCJsIiwiR0VPQ09ERVJfTEFZRVJfSUQiLCJpc1NwbGl0IiwiYm90dG9tTWFwU3R5bGUiLCJFTVBUWV9NQVBCT1hfU1RZTEUiLCJfc2V0TWFwUmVmIiwiYXZhaWxhYmxlTG9jYWxlcyIsInJlYWRPbmx5Iiwic2NhbGUiLCJsb2dvQ29tcG9uZW50IiwiZ2VvY29kZXIiLCJtYXBDb250cm9sVG9wIiwib25Ub2dnbGVQZXJzcGVjdGl2ZSIsInRvZ2dsZVBlcnNwZWN0aXZlIiwib25Ub2dnbGVTcGxpdE1hcCIsInRvZ2dsZVNwbGl0TWFwIiwib25NYXBUb2dnbGVMYXllciIsIl9oYW5kbGVNYXBUb2dnbGVMYXllciIsIm9uVG9nZ2xlTWFwQ29udHJvbCIsIl90b2dnbGVNYXBDb250cm9sIiwib25Ub2dnbGVTcGxpdE1hcFZpZXdwb3J0IiwidG9nZ2xlU3BsaXRNYXBWaWV3cG9ydCIsIm9uU2V0RWRpdG9yTW9kZSIsInNldEVkaXRvck1vZGUiLCJvblNldExvY2FsZSIsInNldExvY2FsZSIsIm9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSIsInRvZ2dsZUVkaXRvclZpc2liaWxpdHkiLCJvbkxheWVyVmlzQ29uZmlnQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJtYXBIZWlnaHQiLCJzZXRNYXBDb250cm9sU2V0dGluZ3MiLCJvbkRlbGV0ZUZlYXR1cmUiLCJkZWxldGVGZWF0dXJlIiwib25TZWxlY3QiLCJvblRvZ2dsZVBvbHlnb25GaWx0ZXIiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXIiLCJ2aXNpYmxlIiwidG9wTWFwU3R5bGUiLCJpc1Zpc2libGUiLCJzdGF0ZSIsInJlbmRlciIsIl9tYXBTdHlsZSRtYXBTdHlsZXMyIiwiX2dldEFwcGxpY2F0aW9uQ29uZmlnMiIsIl90aGlzJHByb3BzNyIsIm1hcENvbnRlbnQiLCJzdHlsZVNlbGVjdG9yIiwib25Db250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0Iiwib3ZlcmxheUJsZW5kaW5nIiwiQ29tcG9uZW50IiwiTWFwVmlld1N0YXRlQ29udGV4dCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAtY29udGFpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG4vLyBsaWJyYXJpZXNcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge01hcCwgTWFwUmVmfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHtQaWNrSW5mb30gZnJvbSAnQGRlY2suZ2wvY29yZS9saWIvZGVjayc7XG5pbXBvcnQgRGVja0dMIGZyb20gJ0BkZWNrLmdsL3JlYWN0JztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3IsIFNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge3VzZURyb3BwYWJsZX0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcblxuaW1wb3J0IHtWaXNTdGF0ZUFjdGlvbnMsIE1hcFN0YXRlQWN0aW9ucywgVUlTdGF0ZUFjdGlvbnN9IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBNYXBQb3BvdmVyRmFjdG9yeSBmcm9tICcuL21hcC9tYXAtcG9wb3Zlcic7XG5pbXBvcnQgTWFwQ29udHJvbEZhY3RvcnkgZnJvbSAnLi9tYXAvbWFwLWNvbnRyb2wnO1xuaW1wb3J0IHtcbiAgU3R5bGVkTWFwQ29udGFpbmVyLFxuICBTdHlsZWRBdHRyaWJ1dGlvbixcbiAgRW5kSG9yaXpvbnRhbEZsZXhib3hcbn0gZnJvbSAnLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgRWRpdG9yRmFjdG9yeSBmcm9tICcuL2VkaXRvci9lZGl0b3InO1xuXG4vLyB1dGlsc1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVNYXBib3hMYXllcnMsXG4gIHVwZGF0ZU1hcGJveExheWVycyxcbiAgTGF5ZXJCYXNlQ29uZmlnLFxuICBWaXN1YWxDaGFubmVsRG9tYWluLFxuICBFZGl0b3JMYXllclV0aWxzLFxuICBBZ2dyZWdhdGVkQmluXG59IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7XG4gIERhdGFzZXRBdHRyaWJ1dGlvbixcbiAgTWFwU3RhdGUsXG4gIE1hcENvbnRyb2xzLFxuICBWaWV3cG9ydCxcbiAgU3BsaXRNYXAsXG4gIFNwbGl0TWFwTGF5ZXJzXG59IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtcbiAgZXJyb3JOb3RpZmljYXRpb24sXG4gIHNldExheWVyQmxlbmRpbmcsXG4gIGlzU3R5bGVVc2luZ01hcGJveFRpbGVzLFxuICBpc1N0eWxlVXNpbmdPcGVuU3RyZWV0TWFwVGlsZXMsXG4gIGdldEJhc2VNYXBMaWJyYXJ5LFxuICBCYXNlTWFwTGlicmFyeUNvbmZpZyxcbiAgdHJhbnNmb3JtUmVxdWVzdCxcbiAgb2JzZXJ2ZURpbWVuc2lvbnMsXG4gIHVub2JzZXJ2ZURpbWVuc2lvbnMsXG4gIGhhc01vYmlsZVdpZHRoLFxuICBnZXRNYXBMYXllcnNGcm9tU3BsaXRNYXBzLFxuICBvblZpZXdQb3J0Q2hhbmdlLFxuICBnZXRWaWV3cG9ydEZyb21NYXBTdGF0ZSxcbiAgbm9ybWFsaXplRXZlbnQsXG4gIHJnYlRvSGV4LFxuICBjb21wdXRlRGVja0VmZmVjdHMsXG4gIGdldEFwcGxpY2F0aW9uQ29uZmlnLFxuICBHZXRNYXBSZWZcbn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge2JyZWFrUG9pbnRWYWx1ZXN9IGZyb20gJ0BrZXBsZXIuZ2wvc3R5bGVzJztcblxuLy8gZGVmYXVsdC1zZXR0aW5nc1xuaW1wb3J0IHtcbiAgRklMVEVSX1RZUEVTLFxuICBHRU9DT0RFUl9MQVlFUl9JRCxcbiAgVEhST1RUTEVfTk9USUZJQ0FUSU9OX1RJTUUsXG4gIERFRkFVTFRfUElDS0lOR19SQURJVVMsXG4gIE5PX01BUF9JRCxcbiAgRU1QVFlfTUFQQk9YX1NUWUxFXG59IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcblxuaW1wb3J0IHtEUk9QUEFCTEVfTUFQX0NPTlRBSU5FUl9UWVBFfSBmcm9tICcuL2NvbW1vbi9kbmQtbGF5ZXItaXRlbXMnO1xuLy8gQ29udGV4dHNcbmltcG9ydCB7TWFwVmlld1N0YXRlQ29udGV4dH0gZnJvbSAnLi9tYXAtdmlldy1zdGF0ZS1jb250ZXh0JztcblxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9jb21tb24vZXJyb3ItYm91bmRhcnknO1xuaW1wb3J0IHtMT0NBTEVfQ09ERVN9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7TWFwVmlld30gZnJvbSAnQGRlY2suZ2wvY29yZSc7XG5pbXBvcnQge1xuICBNYXBTdHlsZSxcbiAgYXJlQW55RGVja0xheWVyc0xvYWRpbmcsXG4gIGNvbXB1dGVEZWNrTGF5ZXJzLFxuICBnZXRMYXllckhvdmVyUHJvcCxcbiAgTGF5ZXJIb3ZlclByb3AsXG4gIHByZXBhcmVMYXllcnNGb3JEZWNrLFxuICBwcmVwYXJlTGF5ZXJzVG9SZW5kZXIsXG4gIExheWVyc1RvUmVuZGVyXG59IGZyb20gJ0BrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuaW1wb3J0IHtWaXNTdGF0ZX0gZnJvbSAnQGtlcGxlci5nbC9zY2hlbWFzJztcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSAnLi9sb2FkaW5nLWluZGljYXRvcic7XG5cbi8vIERlYm91bmNlIHRoZSBwcm9wYWdhdGlvbiBvZiB2aWV3cG9ydCBjaGFuZ2UgYW5kIG1vdXNlIG1vdmVzIHRvIHJlZHV4IHN0b3JlLlxuLy8gVGhpcyBpcyB0byBhdm9pZCB0b28gbWFueSByZW5kZXJzIG9mIG90aGVyIGNvbXBvbmVudHMgd2hlbiB0aGUgbWFwIGlzXG4vLyBiZWluZyBwYW5uZWQvem9vbWVkIChsZWFkaW5nIHRvIGxhZ2d5IGJhc2VtYXAvZGVjayBzeW5jaW5nKS5cbmNvbnN0IERFQk9VTkNFX1ZJRVdQT1JUX1BST1BBR0FURSA9IDEwO1xuY29uc3QgREVCT1VOQ0VfTU9VU0VfTU9WRV9QUk9QQUdBVEUgPSAxMDtcblxuLy8gSG93IGxvbmcgc2hvdWxkIHdlIHdhaXQgYmV0d2VlbiBsYXllciBsb2FkaW5nIHN0YXRlIGNoYW5nZXMgYmVmb3JlIHRyaWdnZXJpbmcgYSBVSSB1cGRhdGVcbmNvbnN0IERFQk9VTkNFX0xPQURJTkdfU1RBVEVfUFJPUEFHQVRFID0gMTAwO1xuXG5jb25zdCBNQVBfU1RZTEU6IHtba2V5OiBzdHJpbmddOiBSZWFjdC5DU1NQcm9wZXJ0aWVzfSA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9LFxuICB0b3A6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxufTtcblxuY29uc3QgTE9DQUxFX0NPREVTX0FSUkFZID0gT2JqZWN0LmtleXMoTE9DQUxFX0NPREVTKTtcblxuaW50ZXJmYWNlIFN0eWxlZE1hcENvbnRhaW5lclByb3BzIHtcbiAgJG1peEJsZW5kTW9kZT86IHN0cmluZztcbiAgJG1hcExpYkNzc0NsYXNzOiBzdHJpbmc7XG59XG5cbmNvbnN0IFN0eWxlZE1hcCA9IHN0eWxlZChTdHlsZWRNYXBDb250YWluZXIpPFN0eWxlZE1hcENvbnRhaW5lclByb3BzPihcbiAgKHskbWl4QmxlbmRNb2RlID0gJ25vcm1hbCcsICRtYXBMaWJDc3NDbGFzc30pID0+IGBcbiAgI2RlZmF1bHQtZGVja2dsLW92ZXJsYXkge1xuICAgIG1peC1ibGVuZC1tb2RlOiAkeyRtaXhCbGVuZE1vZGV9O1xuICB9O1xuICAqWyR7JG1hcExpYkNzc0NsYXNzfS1jaGlsZHJlbl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuYFxuKTtcblxuY29uc3QgTUFQQk9YR0xfU1RZTEVfVVBEQVRFID0gJ3N0eWxlLmxvYWQnO1xuY29uc3QgTUFQQk9YR0xfUkVOREVSID0gJ3JlbmRlcic7XG5jb25zdCBub3AgPSAoKSA9PiB7XG4gIHJldHVybjtcbn07XG5cbnR5cGUgTWFwTGliTG9nb1Byb3BzID0ge1xuICBiYXNlTWFwTGlicmFyeUNvbmZpZzogQmFzZU1hcExpYnJhcnlDb25maWc7XG59O1xuXG5jb25zdCBNYXBMaWJMb2dvID0gKHtiYXNlTWFwTGlicmFyeUNvbmZpZ306IE1hcExpYkxvZ29Qcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpdGlvbi1sb2dvXCI+XG4gICAgQmFzZW1hcCBieTpcbiAgICA8YVxuICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnNXB4J319XG4gICAgICBjbGFzc05hbWU9e2Ake2Jhc2VNYXBMaWJyYXJ5Q29uZmlnLm1hcExpYkNzc0NsYXNzfS1jdHJsLWxvZ29gfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgaHJlZj17YmFzZU1hcExpYnJhcnlDb25maWcubWFwTGliVXJsfVxuICAgICAgYXJpYS1sYWJlbD17YCR7YmFzZU1hcExpYnJhcnlDb25maWcubWFwTGliTmFtZX0gbG9nb2B9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5pbnRlcmZhY2UgU3R5bGVkRHJvcHBhYmxlUHJvcHMge1xuICBpc092ZXI6IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0eWxlZERyb3BwYWJsZSA9IHN0eWxlZC5kaXY8U3R5bGVkRHJvcHBhYmxlUHJvcHM+YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5pc092ZXIgPyBwcm9wcy50aGVtZS5kbmRPdmVyQmFja2dyb3VuZENvbG9yIDogJ25vbmUnKX07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG5gO1xuXG5leHBvcnQgY29uc3QgaXNTcGxpdFNlbGVjdG9yID0gcHJvcHMgPT5cbiAgcHJvcHMudmlzU3RhdGUuc3BsaXRNYXBzICYmIHByb3BzLnZpc1N0YXRlLnNwbGl0TWFwcy5sZW5ndGggPiAxO1xuXG5leHBvcnQgY29uc3QgRHJvcHBhYmxlID0gKHtjb250YWluZXJJZH0pID0+IHtcbiAgY29uc3Qge2lzT3Zlciwgc2V0Tm9kZVJlZn0gPSB1c2VEcm9wcGFibGUoe1xuICAgIGlkOiBjb250YWluZXJJZCxcbiAgICBkYXRhOiB7dHlwZTogRFJPUFBBQkxFX01BUF9DT05UQUlORVJfVFlQRSwgaW5kZXg6IGNvbnRhaW5lcklkfSxcbiAgICBkaXNhYmxlZDogIWNvbnRhaW5lcklkXG4gIH0pO1xuXG4gIHJldHVybiA8U3R5bGVkRHJvcHBhYmxlIHJlZj17c2V0Tm9kZVJlZn0gaXNPdmVyPXtpc092ZXJ9IC8+O1xufTtcblxuaW50ZXJmYWNlIFN0eWxlZERhdGFzZXRBdHRyaWJ1dGlvbnNDb250YWluZXJQcm9wcyB7XG4gIGlzUGFsbTogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkRGF0YXNldEF0dHJpYnV0aW9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXY8U3R5bGVkRGF0YXNldEF0dHJpYnV0aW9uc0NvbnRhaW5lclByb3BzPmBcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5pc1BhbG0gPyAnMjAwcHgnIDogJzMwMHB4Jyl9O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5pc1BhbG0gPyAnMWVtJyA6ICcxLjRlbScpfTtcblxuICAmOmhvdmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgfVxuYDtcblxuY29uc3QgRGF0YXNldEF0dHJpYnV0aW9ucyA9ICh7XG4gIGRhdGFzZXRBdHRyaWJ1dGlvbnMsXG4gIGlzUGFsbVxufToge1xuICBkYXRhc2V0QXR0cmlidXRpb25zOiBEYXRhc2V0QXR0cmlidXRpb25bXTtcbiAgaXNQYWxtOiBib29sZWFuO1xufSkgPT4gKFxuICA8PlxuICAgIHtkYXRhc2V0QXR0cmlidXRpb25zPy5sZW5ndGggPyAoXG4gICAgICA8U3R5bGVkRGF0YXNldEF0dHJpYnV0aW9uc0NvbnRhaW5lciBpc1BhbG09e2lzUGFsbX0+XG4gICAgICAgIHtkYXRhc2V0QXR0cmlidXRpb25zLm1hcCgoZHMsIGlkeCkgPT4gKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB7Li4uKGRzLnVybCA/IHtocmVmOiBkcy51cmx9IDogbnVsbCl9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBrZXk9e2Ake2RzLnRpdGxlfV8ke2lkeH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkcy50aXRsZX1cbiAgICAgICAgICAgIHtpZHggIT09IGRhdGFzZXRBdHRyaWJ1dGlvbnMubGVuZ3RoIC0gMSA/ICcsICcgOiBudWxsfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0eWxlZERhdGFzZXRBdHRyaWJ1dGlvbnNDb250YWluZXI+XG4gICAgKSA6IG51bGx9XG4gIDwvPlxuKTtcblxudHlwZSBBdHRyaWJ1dGlvblByb3BzID0ge1xuICBzaG93QmFzZU1hcExpYkxvZ286IGJvb2xlYW47XG4gIHNob3dPc21CYXNlbWFwQXR0cmlidXRpb246IGJvb2xlYW47XG4gIGRhdGFzZXRBdHRyaWJ1dGlvbnM6IERhdGFzZXRBdHRyaWJ1dGlvbltdO1xuICBiYXNlTWFwTGlicmFyeUNvbmZpZzogQmFzZU1hcExpYnJhcnlDb25maWc7XG59O1xuXG5leHBvcnQgY29uc3QgQXR0cmlidXRpb246IFJlYWN0LkZDPEF0dHJpYnV0aW9uUHJvcHM+ID0gKHtcbiAgc2hvd0Jhc2VNYXBMaWJMb2dvID0gdHJ1ZSxcbiAgc2hvd09zbUJhc2VtYXBBdHRyaWJ1dGlvbiA9IGZhbHNlLFxuICBkYXRhc2V0QXR0cmlidXRpb25zLFxuICBiYXNlTWFwTGlicmFyeUNvbmZpZ1xufTogQXR0cmlidXRpb25Qcm9wcykgPT4ge1xuICBjb25zdCBpc1BhbG0gPSBoYXNNb2JpbGVXaWR0aChicmVha1BvaW50VmFsdWVzKTtcblxuICBjb25zdCBtZW1vaXplZENvbXBvbmVudHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXNob3dCYXNlTWFwTGliTG9nbykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEF0dHJpYnV0aW9uXG4gICAgICAgICAgbWFwTGliQ3NzQ2xhc3M9e2Jhc2VNYXBMaWJyYXJ5Q29uZmlnLm1hcExpYkNzc0NsYXNzfVxuICAgICAgICAgIG1hcExpYkF0dHJpYnV0aW9uQ3NzQ2xhc3M9e2Jhc2VNYXBMaWJyYXJ5Q29uZmlnLm1hcExpYkF0dHJpYnV0aW9uQ3NzQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICA8RW5kSG9yaXpvbnRhbEZsZXhib3g+XG4gICAgICAgICAgICA8RGF0YXNldEF0dHJpYnV0aW9ucyBkYXRhc2V0QXR0cmlidXRpb25zPXtkYXRhc2V0QXR0cmlidXRpb25zfSBpc1BhbG09e2lzUGFsbX0gLz5cbiAgICAgICAgICAgIHtzaG93T3NtQmFzZW1hcEF0dHJpYnV0aW9uID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpdGlvbi1saW5rXCI+XG4gICAgICAgICAgICAgICAge2RhdGFzZXRBdHRyaWJ1dGlvbnM/Lmxlbmd0aCA/IDxzcGFuIGNsYXNzTmFtZT1cInBpcGUtc2VwYXJhdG9yXCI+fDwvc3Bhbj4gOiBudWxsfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIMKpIE9wZW5TdHJlZXRNYXBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9FbmRIb3Jpem9udGFsRmxleGJveD5cbiAgICAgICAgPC9TdHlsZWRBdHRyaWJ1dGlvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRBdHRyaWJ1dGlvblxuICAgICAgICBtYXBMaWJDc3NDbGFzcz17YmFzZU1hcExpYnJhcnlDb25maWcubWFwTGliQ3NzQ2xhc3N9XG4gICAgICAgIG1hcExpYkF0dHJpYnV0aW9uQ3NzQ2xhc3M9e2Jhc2VNYXBMaWJyYXJ5Q29uZmlnLm1hcExpYkF0dHJpYnV0aW9uQ3NzQ2xhc3N9XG4gICAgICA+XG4gICAgICAgIDxFbmRIb3Jpem9udGFsRmxleGJveD5cbiAgICAgICAgICA8RGF0YXNldEF0dHJpYnV0aW9ucyBkYXRhc2V0QXR0cmlidXRpb25zPXtkYXRhc2V0QXR0cmlidXRpb25zfSBpc1BhbG09e2lzUGFsbX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpdGlvbi1saW5rXCI+XG4gICAgICAgICAgICB7ZGF0YXNldEF0dHJpYnV0aW9ucz8ubGVuZ3RoID8gPHNwYW4gY2xhc3NOYW1lPVwicGlwZS1zZXBhcmF0b3JcIj58PC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAgICB7aXNQYWxtID8gPE1hcExpYkxvZ28gYmFzZU1hcExpYnJhcnlDb25maWc9e2Jhc2VNYXBMaWJyYXJ5Q29uZmlnfSAvPiA6IG51bGx9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9rZXBsZXIuZ2wvcG9saWN5L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgwqkga2VwbGVyLmdsIHx7JyAnfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgeyFpc1BhbG0gPyA8TWFwTGliTG9nbyBiYXNlTWFwTGlicmFyeUNvbmZpZz17YmFzZU1hcExpYnJhcnlDb25maWd9IC8+IDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9FbmRIb3Jpem9udGFsRmxleGJveD5cbiAgICAgIDwvU3R5bGVkQXR0cmlidXRpb24+XG4gICAgKTtcbiAgfSwgW1xuICAgIHNob3dCYXNlTWFwTGliTG9nbyxcbiAgICBzaG93T3NtQmFzZW1hcEF0dHJpYnV0aW9uLFxuICAgIGRhdGFzZXRBdHRyaWJ1dGlvbnMsXG4gICAgaXNQYWxtLFxuICAgIGJhc2VNYXBMaWJyYXJ5Q29uZmlnXG4gIF0pO1xuXG4gIHJldHVybiBtZW1vaXplZENvbXBvbmVudHM7XG59O1xuXG5NYXBDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwUG9wb3ZlckZhY3RvcnksIE1hcENvbnRyb2xGYWN0b3J5LCBFZGl0b3JGYWN0b3J5XTtcblxudHlwZSBNYXBib3hTdHlsZSA9IHN0cmluZyB8IG9iamVjdCB8IHVuZGVmaW5lZDtcbnR5cGUgUHJvcFNlbGVjdG9yPFI+ID0gU2VsZWN0b3I8TWFwQ29udGFpbmVyUHJvcHMsIFI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcENvbnRhaW5lclByb3BzIHtcbiAgdmlzU3RhdGU6IFZpc1N0YXRlO1xuICBtYXBTdGF0ZTogTWFwU3RhdGU7XG4gIG1hcENvbnRyb2xzOiBNYXBDb250cm9scztcbiAgbWFwU3R5bGU6IHtib3R0b21NYXBTdHlsZT86IE1hcGJveFN0eWxlOyB0b3BNYXBTdHlsZT86IE1hcGJveFN0eWxlfSAmIE1hcFN0eWxlO1xuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBtYXBib3hBcGlVcmw6IHN0cmluZztcbiAgdmlzU3RhdGVBY3Rpb25zOiB0eXBlb2YgVmlzU3RhdGVBY3Rpb25zO1xuICBtYXBTdGF0ZUFjdGlvbnM6IHR5cGVvZiBNYXBTdGF0ZUFjdGlvbnM7XG4gIHVpU3RhdGVBY3Rpb25zOiB0eXBlb2YgVUlTdGF0ZUFjdGlvbnM7XG5cbiAgLy8gb3B0aW9uYWxcbiAgcHJpbWFyeT86IGJvb2xlYW47IC8vIHByaW1hcnkgb25lIHdpbGwgYmUgcmVwb3J0aW5nIGl0cyBzaXplIHRvIGFwcFN0YXRlXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgaXNFeHBvcnQ/OiBib29sZWFuO1xuICAvLyBvbk1hcFN0eWxlTG9hZGVkPzogKG1hcDogbWFwbGlicmVnbC5NYXAgfCBSZXR1cm5UeXBlPE1hcFJlZlsnZ2V0TWFwJ10+IHwgbnVsbCkgPT4gdm9pZDtcbiAgb25NYXBTdHlsZUxvYWRlZD86IChtYXA6IEdldE1hcFJlZiB8IG51bGwpID0+IHZvaWQ7XG4gIG9uTWFwUmVuZGVyPzogKG1hcDogR2V0TWFwUmVmIHwgbnVsbCkgPT4gdm9pZDtcbiAgZ2V0TWFwYm94UmVmPzogKG1hcGJveD86IE1hcFJlZiB8IG51bGwsIGluZGV4PzogbnVtYmVyKSA9PiB2b2lkO1xuICBpbmRleD86IG51bWJlcjtcbiAgZGVsZXRlTWFwTGFiZWxzPzogKGNvbnRhaW5lcklkOiBzdHJpbmcsIGxheWVySWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgY29udGFpbmVySWQ/OiBudW1iZXI7XG5cbiAgaXNMb2FkaW5nSW5kaWNhdG9yVmlzaWJsZT86IGJvb2xlYW47XG4gIGFjdGl2ZVNpZGVQYW5lbDogc3RyaW5nIHwgbnVsbDtcbiAgc2lkZVBhbmVsV2lkdGg/OiBudW1iZXI7XG5cbiAgbG9jYWxlPzogYW55O1xuICB0aGVtZT86IGFueTtcbiAgZWRpdG9yPzogYW55O1xuICBNYXBDb21wb25lbnQ/OiB0eXBlb2YgTWFwO1xuICBkZWNrR2xQcm9wcz86IGFueTtcbiAgb25EZWNrSW5pdGlhbGl6ZWQ/OiAoYTogYW55LCBiOiBhbnkpID0+IHZvaWQ7XG4gIG9uVmlld1N0YXRlQ2hhbmdlPzogKHZpZXdwb3J0OiBWaWV3cG9ydCkgPT4gdm9pZDtcblxuICB0b3BNYXBDb250YWluZXJQcm9wczogYW55O1xuICBib3R0b21NYXBDb250YWluZXJQcm9wczogYW55O1xuICB0cmFuc2Zvcm1SZXF1ZXN0PzogKHVybDogc3RyaW5nLCByZXNvdXJjZVR5cGU/OiBzdHJpbmcpID0+IHt1cmw6IHN0cmluZ307XG5cbiAgZGF0YXNldEF0dHJpYnV0aW9ucz86IERhdGFzZXRBdHRyaWJ1dGlvbltdO1xuXG4gIGdlbmVyYXRlTWFwYm94TGF5ZXJzPzogdHlwZW9mIGdlbmVyYXRlTWFwYm94TGF5ZXJzO1xuICBnZW5lcmF0ZURlY2tHTExheWVycz86IHR5cGVvZiBjb21wdXRlRGVja0xheWVycztcblxuICBvbk1vdXNlTW92ZT86IChldmVudDogUmVhY3QuTW91c2VFdmVudCAmIHtsbmdMYXQ/OiBbbnVtYmVyLCBudW1iZXJdfSkgPT4gdm9pZDtcblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGVja1JlbmRlckNhbGxiYWNrcz86IHtcbiAgICBvbkRlY2tMb2FkPzogKCkgPT4gdm9pZDtcbiAgICBvbkRlY2tSZW5kZXI/OiAoZGVja1Byb3BzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuICAgIG9uRGVja0FmdGVyUmVuZGVyPzogKGRlY2tQcm9wczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IGFueTtcbiAgfTtcblxuICAvLyBPcHRpb25hbDogb3ZlcnJpZGUgbGVnZW5kIGhlYWRlciBsb2dvIGluIG1hcCBjb250cm9scyAodXNlZCBieSBpbWFnZSBleHBvcnQpXG4gIGxvZ29Db21wb25lbnQ/OiBSZWFjdC5GQyB8IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQ29udGFpbmVyRmFjdG9yeShcbiAgTWFwUG9wb3ZlcjogUmV0dXJuVHlwZTx0eXBlb2YgTWFwUG9wb3ZlckZhY3Rvcnk+LFxuICBNYXBDb250cm9sOiBSZXR1cm5UeXBlPHR5cGVvZiBNYXBDb250cm9sRmFjdG9yeT4sXG4gIEVkaXRvcjogUmV0dXJuVHlwZTx0eXBlb2YgRWRpdG9yRmFjdG9yeT5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8TWFwQ29udGFpbmVyUHJvcHM+IHtcbiAgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PE1hcENvbnRhaW5lclByb3BzPiB7XG4gICAgZGlzcGxheU5hbWUgPSAnTWFwQ29udGFpbmVyJztcblxuICAgIHByaXZhdGUgYW55QWN0aXZlTGF5ZXJMb2FkaW5nID0gZmFsc2U7XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBNYXBWaWV3U3RhdGVDb250ZXh0O1xuXG4gICAgZGVjbGFyZSBjb250ZXh0OiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgTWFwVmlld1N0YXRlQ29udGV4dD47XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgTWFwQ29tcG9uZW50OiBNYXAsXG4gICAgICBkZWNrR2xQcm9wczoge30sXG4gICAgICBpbmRleDogMCxcbiAgICAgIHByaW1hcnk6IHRydWVcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIC8vIERldGVybWluZXMgd2hldGhlciBhdHRyaWJ1dGlvbiBzaG91bGQgYmUgdmlzaWJsZSBiYXNlZCB0aGUgcmVzdWx0IG9mIGxvYWRpbmcgdGhlIG1hcCBzdHlsZVxuICAgICAgc2hvd0Jhc2VNYXBBdHRyaWJ1dGlvbjogdHJ1ZVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICghdGhpcy5fcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgb2JzZXJ2ZURpbWVuc2lvbnModGhpcy5fcmVmLmN1cnJlbnQsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAvLyB1bmJpbmQgbWFwYm94Z2wgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGlmICh0aGlzLl9tYXApIHtcbiAgICAgICAgdGhpcy5fbWFwPy5vZmYoTUFQQk9YR0xfU1RZTEVfVVBEQVRFLCBub3ApO1xuICAgICAgICB0aGlzLl9tYXA/Lm9mZihNQVBCT1hHTF9SRU5ERVIsIG5vcCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHVub2JzZXJ2ZURpbWVuc2lvbnModGhpcy5fcmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIF9kZWNrOiBhbnkgPSBudWxsO1xuICAgIF9tYXA6IEdldE1hcFJlZiB8IG51bGwgPSBudWxsO1xuICAgIF9yZWYgPSBjcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG4gICAgX2RlY2tHTEVycm9yc0VsYXBzZWQ6IHtbaWQ6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcblxuICAgIHByZXZpb3VzTGF5ZXJzID0ge1xuICAgICAgLy8gW2xheWVycy5pZF06IG1hcGJveExheWVyQ29uZmlnXG4gICAgfTtcblxuICAgIF9oYW5kbGVSZXNpemUgPSBkaW1lbnNpb25zID0+IHtcbiAgICAgIGNvbnN0IHtwcmltYXJ5LCBpbmRleH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKHByaW1hcnkpIHtcbiAgICAgICAgY29uc3Qge21hcFN0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoZGltZW5zaW9ucyAmJiBkaW1lbnNpb25zLndpZHRoID4gMCAmJiBkaW1lbnNpb25zLmhlaWdodCA+IDApIHtcbiAgICAgICAgICBtYXBTdGF0ZUFjdGlvbnMudXBkYXRlTWFwKGRpbWVuc2lvbnMsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsYXllcnNTZWxlY3RvcjogUHJvcFNlbGVjdG9yPFZpc1N0YXRlWydsYXllcnMnXT4gPSBwcm9wcyA9PiBwcm9wcy52aXNTdGF0ZS5sYXllcnM7XG4gICAgbGF5ZXJEYXRhU2VsZWN0b3I6IFByb3BTZWxlY3RvcjxWaXNTdGF0ZVsnbGF5ZXJzJ10+ID0gcHJvcHMgPT4gcHJvcHMudmlzU3RhdGUubGF5ZXJEYXRhO1xuICAgIHNwbGl0TWFwU2VsZWN0b3I6IFByb3BTZWxlY3RvcjxTcGxpdE1hcFtdPiA9IHByb3BzID0+IHByb3BzLnZpc1N0YXRlLnNwbGl0TWFwcztcbiAgICBzcGxpdE1hcEluZGV4U2VsZWN0b3I6IFByb3BTZWxlY3RvcjxudW1iZXIgfCB1bmRlZmluZWQ+ID0gcHJvcHMgPT4gcHJvcHMuaW5kZXg7XG4gICAgbWFwTGF5ZXJzU2VsZWN0b3I6IFByb3BTZWxlY3RvcjxTcGxpdE1hcExheWVycyB8IG51bGwgfCB1bmRlZmluZWQ+ID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLnNwbGl0TWFwU2VsZWN0b3IsXG4gICAgICB0aGlzLnNwbGl0TWFwSW5kZXhTZWxlY3RvcixcbiAgICAgIGdldE1hcExheWVyc0Zyb21TcGxpdE1hcHNcbiAgICApO1xuICAgIGxheWVyT3JkZXJTZWxlY3RvcjogUHJvcFNlbGVjdG9yPFZpc1N0YXRlWydsYXllck9yZGVyJ10+ID0gcHJvcHMgPT4gcHJvcHMudmlzU3RhdGUubGF5ZXJPcmRlcjtcbiAgICBsYXllcnNUb1JlbmRlclNlbGVjdG9yOiBQcm9wU2VsZWN0b3I8TGF5ZXJzVG9SZW5kZXI+ID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmxheWVyc1NlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllckRhdGFTZWxlY3RvcixcbiAgICAgIHRoaXMubWFwTGF5ZXJzU2VsZWN0b3IsXG4gICAgICBwcmVwYXJlTGF5ZXJzVG9SZW5kZXJcbiAgICApO1xuICAgIGxheWVyc0ZvckRlY2tTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5sYXllcnNTZWxlY3RvcixcbiAgICAgIHRoaXMubGF5ZXJEYXRhU2VsZWN0b3IsXG4gICAgICBwcmVwYXJlTGF5ZXJzRm9yRGVja1xuICAgICk7XG4gICAgZmlsdGVyc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMudmlzU3RhdGUuZmlsdGVycztcbiAgICBwb2x5Z29uRmlsdGVyc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWx0ZXJzU2VsZWN0b3IsIGZpbHRlcnMgPT5cbiAgICAgIGZpbHRlcnMuZmlsdGVyKGYgPT4gZi50eXBlID09PSBGSUxURVJfVFlQRVMucG9seWdvbiAmJiBmLmVuYWJsZWQgIT09IGZhbHNlKVxuICAgICk7XG4gICAgZmVhdHVyZXNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZpc1N0YXRlLmVkaXRvci5mZWF0dXJlcztcbiAgICBzZWxlY3RlZEZlYXR1cmVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZpc1N0YXRlLmVkaXRvci5zZWxlY3RlZEZlYXR1cmU7XG4gICAgZmVhdHVyZUNvbGxlY3Rpb25TZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5wb2x5Z29uRmlsdGVyc1NlbGVjdG9yLFxuICAgICAgdGhpcy5mZWF0dXJlc1NlbGVjdG9yLFxuICAgICAgKHBvbHlnb25GaWx0ZXJzLCBmZWF0dXJlcykgPT4gKHtcbiAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLmNvbmNhdChwb2x5Z29uRmlsdGVycy5tYXAoZiA9PiBmLnZhbHVlKSlcbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBAdHMtaWdub3JlIC0gTm8gb3ZlcmxvYWQgbWF0Y2hlcyB0aGlzIGNhbGxcbiAgICBzZWxlY3RlZFBvbHlnb25JbmRleFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmZlYXR1cmVDb2xsZWN0aW9uU2VsZWN0b3IsXG4gICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZVNlbGVjdG9yLFxuICAgICAgKGNvbGxlY3Rpb24sIHNlbGVjdGVkRmVhdHVyZSkgPT5cbiAgICAgICAgY29sbGVjdGlvbi5mZWF0dXJlcy5maW5kSW5kZXgoZiA9PiBmLmlkID09PSBzZWxlY3RlZEZlYXR1cmU/LmlkKVxuICAgICk7XG4gICAgc2VsZWN0ZWRGZWF0dXJlSW5kZXhBcnJheVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUsXG4gICAgICB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDAgPyBbXSA6IFt2YWx1ZV07XG4gICAgICB9XG4gICAgKTtcblxuICAgIGdlbmVyYXRlTWFwYm94TGF5ZXJNZXRob2RTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmdlbmVyYXRlTWFwYm94TGF5ZXJzID8/IGdlbmVyYXRlTWFwYm94TGF5ZXJzO1xuXG4gICAgbWFwYm94TGF5ZXJzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJzU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllck9yZGVyU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IsXG4gICAgICB0aGlzLmdlbmVyYXRlTWFwYm94TGF5ZXJNZXRob2RTZWxlY3RvcixcbiAgICAgIChsYXllciwgbGF5ZXJEYXRhLCBsYXllck9yZGVyLCBsYXllcnNUb1JlbmRlciwgZ2VuZXJhdGVNYXBib3hMYXllck1ldGhvZCkgPT5cbiAgICAgICAgZ2VuZXJhdGVNYXBib3hMYXllck1ldGhvZChsYXllciwgbGF5ZXJEYXRhLCBsYXllck9yZGVyLCBsYXllcnNUb1JlbmRlcilcbiAgICApO1xuXG4gICAgLy8gbWVyZ2UgaW4gYSBiYWNrZ3JvdW5kLWNvbG9yIHN0eWxlIGlmIHRoZSBiYXNlbWFwIGNob2ljZSBpcyBOT19NQVBfSURcbiAgICAvLyB1c2VkIGJ5IDxTdHlsZWRNYXA+IGlubGluZSBzdHlsZSBwcm9wXG4gICAgbWFwU3R5bGVUeXBlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5tYXBTdHlsZS5zdHlsZVR5cGU7XG4gICAgbWFwU3R5bGVCYWNrZ3JvdW5kQ29sb3JTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLm1hcFN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBzdHlsZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLm1hcFN0eWxlVHlwZVNlbGVjdG9yLFxuICAgICAgdGhpcy5tYXBTdHlsZUJhY2tncm91bmRDb2xvclNlbGVjdG9yLFxuICAgICAgKHN0eWxlVHlwZSwgYmFja2dyb3VuZENvbG9yKSA9PiAoe1xuICAgICAgICAuLi5NQVBfU1RZTEUuY29udGFpbmVyLFxuICAgICAgICAuLi4oc3R5bGVUeXBlID09PSBOT19NQVBfSUQgPyB7YmFja2dyb3VuZENvbG9yOiByZ2JUb0hleChiYWNrZ3JvdW5kQ29sb3IpfSA6IHt9KVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLyogY29tcG9uZW50IHByaXZhdGUgZnVuY3Rpb25zICovXG4gICAgX29uQ2xvc2VNYXBQb3BvdmVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMub25MYXllckNsaWNrKG51bGwpO1xuICAgIH07XG5cbiAgICBfb25MYXllckhvdmVyID0gKF9pZHg6IG51bWJlciwgaW5mbzogUGlja0luZm88YW55PiB8IG51bGwpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJIb3ZlcihpbmZvLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICB9O1xuXG4gICAgX29uTGF5ZXJTZXREb21haW4gPSAoXG4gICAgICBpZHg6IG51bWJlcixcbiAgICAgIHZhbHVlOiB7ZG9tYWluOiBWaXN1YWxDaGFubmVsRG9tYWluOyBhZ2dyZWdhdGVkQmluczogQWdncmVnYXRlZEJpbltdfVxuICAgICkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMubGF5ZXJDb25maWdDaGFuZ2UodGhpcy5wcm9wcy52aXNTdGF0ZS5sYXllcnNbaWR4XSwge1xuICAgICAgICBjb2xvckRvbWFpbjogdmFsdWUuZG9tYWluLFxuICAgICAgICBhZ2dyZWdhdGVkQmluczogdmFsdWUuYWdncmVnYXRlZEJpbnNcbiAgICAgIH0gYXMgUGFydGlhbDxMYXllckJhc2VDb25maWc+KTtcbiAgICB9O1xuXG4gICAgX29uTGF5ZXJGaWx0ZXJlZEl0ZW1zQ2hhbmdlID0gKGlkeCwgZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmxheWVyRmlsdGVyZWRJdGVtc0NoYW5nZSh0aGlzLnByb3BzLnZpc1N0YXRlLmxheWVyc1tpZHhdLCBldmVudCk7XG4gICAgfTtcblxuICAgIF9vbldNU0ZlYXR1cmVJbmZvID0gKFxuICAgICAgaWR4OiBudW1iZXIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZlYXR1cmVJbmZvOiBBcnJheTx7bmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfT4gfCBzdHJpbmcgfCBudWxsO1xuICAgICAgICBjb29yZGluYXRlPzogW251bWJlciwgbnVtYmVyXSB8IG51bGw7XG4gICAgICB9XG4gICAgKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy53bXNGZWF0dXJlSW5mbyhcbiAgICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZS5sYXllcnNbaWR4XSxcbiAgICAgICAgZGF0YS5mZWF0dXJlSW5mbyxcbiAgICAgICAgZGF0YS5jb29yZGluYXRlXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfaGFuZGxlTWFwVG9nZ2xlTGF5ZXIgPSBsYXllcklkID0+IHtcbiAgICAgIGNvbnN0IHtpbmRleDogbWFwSW5kZXggPSAwLCB2aXNTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgIHZpc1N0YXRlQWN0aW9ucy50b2dnbGVMYXllckZvck1hcChtYXBJbmRleCwgbGF5ZXJJZCk7XG4gICAgfTtcblxuICAgIF9vbk1hcGJveFN0eWxlVXBkYXRlID0gdXBkYXRlID0+IHtcbiAgICAgIC8vIGZvcmNlIHJlZnJlc2ggbWFwYm94Z2wgbGF5ZXJzXG4gICAgICB0aGlzLnByZXZpb3VzTGF5ZXJzID0ge307XG4gICAgICB0aGlzLl91cGRhdGVNYXBib3hMYXllcnMoKTtcblxuICAgICAgaWYgKHVwZGF0ZSAmJiB1cGRhdGUuc3R5bGUpIHtcbiAgICAgICAgLy8gTm8gYXR0cmlidXRpb25zIGFyZSBuZWVkZWQgaWYgdGhlIHN0eWxlIGRvZXNuJ3QgcmVmZXJlbmNlIE1hcGJveCBzb3VyY2VzXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dCYXNlTWFwQXR0cmlidXRpb246XG4gICAgICAgICAgICBpc1N0eWxlVXNpbmdNYXBib3hUaWxlcyh1cGRhdGUuc3R5bGUpIHx8ICFpc1N0eWxlVXNpbmdPcGVuU3RyZWV0TWFwVGlsZXModXBkYXRlLnN0eWxlKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uTWFwU3R5bGVMb2FkZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1hcFN0eWxlTG9hZGVkKHRoaXMuX21hcCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9zZXRNYXBSZWYgPSBtYXBSZWYgPT4ge1xuICAgICAgLy8gSGFuZGxlIGNoYW5nZSBvZiB0aGUgbWFwIGxpYnJhcnlcbiAgICAgIGlmICh0aGlzLl9tYXAgJiYgbWFwUmVmKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IG1hcFJlZi5nZXRNYXAoKTtcbiAgICAgICAgaWYgKG1hcCAmJiB0aGlzLl9tYXAgIT09IG1hcCkge1xuICAgICAgICAgIHRoaXMuX21hcD8ub2ZmKE1BUEJPWEdMX1NUWUxFX1VQREFURSwgbm9wKTtcbiAgICAgICAgICB0aGlzLl9tYXA/Lm9mZihNQVBCT1hHTF9SRU5ERVIsIG5vcCk7XG4gICAgICAgICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX21hcCAmJiBtYXBSZWYpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwUmVmLmdldE1hcCgpO1xuICAgICAgICAvLyBpIG5vdGljZWQgaW4gY2VydGFpbiBjb250ZXh0IHdlIGRvbid0IGFjY2VzcyB0aGUgYWN0dWFsIG1hcCBlbGVtZW50XG4gICAgICAgIGlmICghdGhpcy5fbWFwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJpbmQgbWFwYm94Z2wgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1NUWUxFX1VQREFURSwgdGhpcy5fb25NYXBib3hTdHlsZVVwZGF0ZSk7XG5cbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1JFTkRFUiwgKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbk1hcFJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1hcFJlbmRlcih0aGlzLl9tYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmdldE1hcGJveFJlZikge1xuICAgICAgICAvLyBUaGUgcGFyZW50IGNvbXBvbmVudCBjYW4gZ2FpbiBhY2Nlc3MgdG8gb3VyIE1hcGJveEdsTWFwIGJ5XG4gICAgICAgIC8vIHByb3ZpZGluZyB0aGlzIGNhbGxiYWNrLiBOb3RlIHRoYXQgJ21hcGJveCcgd2lsbCBiZSBudWxsIHdoZW4gdGhlXG4gICAgICAgIC8vIHJlZiBpcyB1bnNldCAoZS5nLiB3aGVuIGEgc3BsaXQgbWFwIGlzIGNsb3NlZCkuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0TWFwYm94UmVmKG1hcFJlZiwgdGhpcy5wcm9wcy5pbmRleCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9vbkRlY2tJbml0aWFsaXplZChnbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EZWNrSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRlY2tJbml0aWFsaXplZCh0aGlzLl9kZWNrLCBnbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogMSkgQWxsb3cgZWZmZWN0cyBvbmx5IGZvciB0aGUgZmlyc3Qgdmlldy5cbiAgICAgKiAyKSBQcmV2ZW50IGVmZmVjdDpwcmVSZW5kZXIgY2FsbCB3aXRob3V0IHZhbGlkIGdlbmVyYXRlZCB2aWV3cG9ydHMuXG4gICAgICogQHBhcmFtIHZpZXdJbmRleCBWaWV3IGluZGV4LlxuICAgICAqIEByZXR1cm5zIFJldHVybnMgdHJ1ZSBpZiBlZmZlY3RzIGNhbiBiZSB1c2VkLlxuICAgICAqL1xuICAgIF9pc09LVG9SZW5kZXJFZmZlY3RzKHZpZXdJbmRleD86IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF2aWV3SW5kZXggJiYgQm9vbGVhbih0aGlzLl9kZWNrPy52aWV3TWFuYWdlcj8uX3ZpZXdwb3J0cz8ubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBfb25CZWZvcmVSZW5kZXIgPSAoe2dsfSkgPT4ge1xuICAgICAgc2V0TGF5ZXJCbGVuZGluZyhnbCwgdGhpcy5wcm9wcy52aXNTdGF0ZS5sYXllckJsZW5kaW5nKTtcbiAgICB9O1xuXG4gICAgX29uRGVja0Vycm9yID0gKGVycm9yLCBsYXllcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3I/Lm1lc3NhZ2UgfHwgJ3Vua25vd24tZXJyb3InO1xuICAgICAgY29uc3QgbGF5ZXJNZXNzYWdlID0gbGF5ZXI/LmlkID8gYCBpbiAke2xheWVyLmlkfSBsYXllcmAgOiAnJztcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZUZ1bGwgPVxuICAgICAgICBlcnJvck1lc3NhZ2UgPT09ICdXZWJHTCBjb250ZXh0IGlzIGxvc3QnXG4gICAgICAgICAgPyAnWW91ciBHUFUgd2FzIGRpc2Nvbm5lY3RlZC4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdXIgY29tcHV0ZXIgZ29lcyB0byBzbGVlcC4gSXQgY2FuIGFsc28gb2NjdXIgZm9yIG90aGVyIHJlYXNvbnMsIHN1Y2ggYXMgaWYgeW91IGFyZSBydW5uaW5nIHRvbyBtYW55IEdQVSBhcHBsaWNhdGlvbnMuJ1xuICAgICAgICAgIDogYEFuIGVycm9yIGluIGRlY2suZ2w6ICR7ZXJyb3JNZXNzYWdlfSR7bGF5ZXJNZXNzYWdlfS5gO1xuXG4gICAgICAvLyBUaHJvdHRsZSBlcnJvciBub3RpZmljYXRpb25zLCBhcyBSZWFjdCBkb2Vzbid0IGxpa2UgdG9vIG1hbnkgc3RhdGUgY2hhbmdlcyBmcm9tIGhlcmUuXG4gICAgICBjb25zdCBsYXN0U2hvd24gPSB0aGlzLl9kZWNrR0xFcnJvcnNFbGFwc2VkW2Vycm9yTWVzc2FnZUZ1bGxdO1xuICAgICAgaWYgKCFsYXN0U2hvd24gfHwgbGFzdFNob3duIDwgRGF0ZS5ub3coKSAtIFRIUk9UVExFX05PVElGSUNBVElPTl9USU1FKSB7XG4gICAgICAgIHRoaXMuX2RlY2tHTEVycm9yc0VsYXBzZWRbZXJyb3JNZXNzYWdlRnVsbF0gPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIE1hcmsgbGF5ZXIgYXMgaW52YWxpZFxuICAgICAgICBsZXQgZXh0cmFMYXllck1lc3NhZ2UgPSAnJztcbiAgICAgICAgY29uc3Qge3Zpc1N0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICBsZXQgdG9wTW9zdExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgd2hpbGUgKHRvcE1vc3RMYXllci5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRvcE1vc3RMYXllciA9IHRvcE1vc3RMYXllci5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0b3BNb3N0TGF5ZXIucHJvcHM/LmlkKSB7XG4gICAgICAgICAgICB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJTZXRJc1ZhbGlkKHRvcE1vc3RMYXllciwgZmFsc2UpO1xuICAgICAgICAgICAgZXh0cmFMYXllck1lc3NhZ2UgPSAnVGhlIGxheWVyIGhhcyBiZWVuIGRpc2FibGVkIGFuZCBoaWdobGlnaHRlZC4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZXJyb3Igbm90aWZpY2F0aW9uIG9yIHVwZGF0ZSBleGlzdGluZyBvbmUgd2l0aCBzYW1lIGlkLlxuICAgICAgICAvLyBVcGRhdGUgaXMgcmVxdWlyZWQgdG8gcHJlc2VydmUgdGhlIG9yZGVyIG9mIG5vdGlmaWNhdGlvbnMgYXMgdGhleSBwcm9iYWJseSBhcmUgZ29pbmcgdG8gXCJqdW1wXCIgYmFzZWQgb24gb3JkZXIgb2YgZXJyb3JzLlxuICAgICAgICBjb25zdCB7dWlTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMuYWRkTm90aWZpY2F0aW9uKFxuICAgICAgICAgIGVycm9yTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke2Vycm9yTWVzc2FnZUZ1bGx9ICR7ZXh0cmFMYXllck1lc3NhZ2V9YCxcbiAgICAgICAgICAgIGlkOiBlcnJvck1lc3NhZ2VGdWxsIC8vIHRyZWF0IHRoZSBlcnJvciBtZXNzYWdlIGFzIGlkXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbnMgKi9cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbiAgICBfcmVuZGVyTWFwUG9wb3ZlcigpIHtcbiAgICAgIC8vIHRoaXMgY2hlY2sgaXMgZm9yIGxpbWl0aW5nIHRoZSBkaXNwbGF5IG9mIHRoZSBgPE1hcFBvcG92ZXI+YCB0byB0aGUgYDxNYXBDb250YWluZXI+YCB0aGUgdXNlciBpcyBpbnRlcmFjdGluZyB3aXRoXG4gICAgICAvLyB0aGUgRGVja0dMIG9uSG92ZXIgZXZlbnQgaGFuZGxlciBhZGRzIGEgYG1hcEluZGV4YCBwcm9wZXJ0eSB3aGljaCBpcyBhdmFpbGFibGUgaW4gdGhlIGBob3ZlckluZm9gIG9iamVjdCBvZiBgdmlzU3RhdGVgXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbmRleCAhPT0gdGhpcy5wcm9wcy52aXNTdGF0ZS5ob3ZlckluZm8/Lm1hcEluZGV4KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBtb3ZlIHRoaXMgaW50byByZWR1Y2VyIHNvIGl0IGNhbiBiZSB0ZXN0ZWRcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIHZpc1N0YXRlOiB7XG4gICAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICAgIGNsaWNrZWQsXG4gICAgICAgICAgZGF0YXNldHMsXG4gICAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgICAgIGxheWVycyxcbiAgICAgICAgICBtb3VzZVBvczoge21vdXNlUG9zaXRpb24sIGNvb3JkaW5hdGUsIHBpbm5lZH1cbiAgICAgICAgfVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBsYXllcnNUb1JlbmRlciA9IHRoaXMubGF5ZXJzVG9SZW5kZXJTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgaWYgKCFtb3VzZVBvc2l0aW9uIHx8ICFpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsYXllckhvdmVyUHJvcCA9IGdldExheWVySG92ZXJQcm9wKHtcbiAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyc1RvUmVuZGVyLFxuICAgICAgICBkYXRhc2V0c1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbXBhcmVNb2RlID0gaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWdcbiAgICAgICAgPyBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5jb21wYXJlTW9kZVxuICAgICAgICA6IGZhbHNlO1xuXG4gICAgICBsZXQgcGlubmVkUG9zaXRpb24gPSB7eDogMCwgeTogMH07XG4gICAgICBsZXQgbGF5ZXJQaW5uZWRQcm9wOiBMYXllckhvdmVyUHJvcCB8IG51bGwgPSBudWxsO1xuICAgICAgaWYgKHBpbm5lZCB8fCBjbGlja2VkKSB7XG4gICAgICAgIC8vIHByb2plY3QgbG5nbGF0IHRvIHNjcmVlbiBzbyB0aGF0IHRvb2x0aXAgZm9sbG93cyB0aGUgb2JqZWN0IG9uIHpvb21cbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBnZXRWaWV3cG9ydEZyb21NYXBTdGF0ZShtYXBTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGxuZ0xhdCA9IGNsaWNrZWQgPyBjbGlja2VkLmNvb3JkaW5hdGUgOiBwaW5uZWQuY29vcmRpbmF0ZTtcbiAgICAgICAgcGlubmVkUG9zaXRpb24gPSB0aGlzLl9nZXRIb3ZlclhZKHZpZXdwb3J0LCBsbmdMYXQpO1xuICAgICAgICBsYXllclBpbm5lZFByb3AgPSBnZXRMYXllckhvdmVyUHJvcCh7XG4gICAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICAgIGhvdmVySW5mbzogY2xpY2tlZCxcbiAgICAgICAgICBsYXllcnMsXG4gICAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXG4gICAgICAgICAgZGF0YXNldHNcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXllckhvdmVyUHJvcCAmJiBsYXllclBpbm5lZFByb3ApIHtcbiAgICAgICAgICBsYXllckhvdmVyUHJvcC5wcmltYXJ5RGF0YSA9IGxheWVyUGlubmVkUHJvcC5kYXRhO1xuICAgICAgICAgIGxheWVySG92ZXJQcm9wLmNvbXBhcmVUeXBlID0gaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuY29tcGFyZVR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tbW9uUHJvcCA9IHtcbiAgICAgICAgb25DbG9zZTogdGhpcy5fb25DbG9zZU1hcFBvcG92ZXIsXG4gICAgICAgIHpvb206IG1hcFN0YXRlLnpvb20sXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5fZGVjayA/IHRoaXMuX2RlY2suY2FudmFzIDogdW5kZWZpbmVkXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICB7bGF5ZXJQaW5uZWRQcm9wICYmIChcbiAgICAgICAgICAgIDxNYXBQb3BvdmVyXG4gICAgICAgICAgICAgIHsuLi5waW5uZWRQb3NpdGlvbn1cbiAgICAgICAgICAgICAgey4uLmNvbW1vblByb3B9XG4gICAgICAgICAgICAgIGxheWVySG92ZXJQcm9wPXtsYXllclBpbm5lZFByb3B9XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGU9e2ludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZCAmJiAocGlubmVkIHx8IHt9KS5jb29yZGluYXRlfVxuICAgICAgICAgICAgICBmcm96ZW49e3RydWV9XG4gICAgICAgICAgICAgIGlzQmFzZT17Y29tcGFyZU1vZGV9XG4gICAgICAgICAgICAgIG9uU2V0RmVhdHVyZXM9e3RoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnNldEZlYXR1cmVzfVxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZEZlYXR1cmU9e3RoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnNldFNlbGVjdGVkRmVhdHVyZX1cbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBBcmd1bWVudCBvZiB0eXBlICdSZWFkb25seTxNYXBDb250YWluZXJQcm9wcz4nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICduZXZlcidcbiAgICAgICAgICAgICAgZmVhdHVyZUNvbGxlY3Rpb249e3RoaXMuZmVhdHVyZUNvbGxlY3Rpb25TZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bGF5ZXJIb3ZlclByb3AgJiYgKCFsYXllclBpbm5lZFByb3AgfHwgY29tcGFyZU1vZGUpICYmIChcbiAgICAgICAgICAgIDxNYXBQb3BvdmVyXG4gICAgICAgICAgICAgIHg9e21vdXNlUG9zaXRpb25bMF19XG4gICAgICAgICAgICAgIHk9e21vdXNlUG9zaXRpb25bMV19XG4gICAgICAgICAgICAgIHsuLi5jb21tb25Qcm9wfVxuICAgICAgICAgICAgICBsYXllckhvdmVyUHJvcD17bGF5ZXJIb3ZlclByb3B9XG4gICAgICAgICAgICAgIGZyb3plbj17ZmFsc2V9XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGU9e2ludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZCAmJiBjb29yZGluYXRlfVxuICAgICAgICAgICAgICBvblNldEZlYXR1cmVzPXt0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zZXRGZWF0dXJlc31cbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRGZWF0dXJlPXt0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zZXRTZWxlY3RlZEZlYXR1cmV9XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgQXJndW1lbnQgb2YgdHlwZSAnUmVhZG9ubHk8TWFwQ29udGFpbmVyUHJvcHM+JyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnbmV2ZXInXG4gICAgICAgICAgICAgIGZlYXR1cmVDb2xsZWN0aW9uPXt0aGlzLmZlYXR1cmVDb2xsZWN0aW9uU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgICBfZ2V0SG92ZXJYWSh2aWV3cG9ydCwgbG5nTGF0KSB7XG4gICAgICBjb25zdCBzY3JlZW5Db29yZCA9ICF2aWV3cG9ydCB8fCAhbG5nTGF0ID8gbnVsbCA6IHZpZXdwb3J0LnByb2plY3QobG5nTGF0KTtcbiAgICAgIHJldHVybiBzY3JlZW5Db29yZCAmJiB7eDogc2NyZWVuQ29vcmRbMF0sIHk6IHNjcmVlbkNvb3JkWzFdfTtcbiAgICB9XG5cbiAgICBfcmVuZGVyRGVja092ZXJsYXkoXG4gICAgICBsYXllcnNGb3JEZWNrLFxuICAgICAgb3B0aW9uczoge3ByaW1hcnlNYXA6IGJvb2xlYW47IGlzSW50ZXJhY3RpdmU/OiBib29sZWFuOyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZX0gPSB7XG4gICAgICAgIHByaW1hcnlNYXA6IGZhbHNlXG4gICAgICB9XG4gICAgKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgZGVja0dsUHJvcHMsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBtYXBDb250cm9scyxcbiAgICAgICAgZGVja1JlbmRlckNhbGxiYWNrcyxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIGdlbmVyYXRlRGVja0dMTGF5ZXJzLFxuICAgICAgICBvbk1vdXNlTW92ZVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtob3ZlckluZm8sIGVkaXRvcn0gPSB2aXNTdGF0ZTtcbiAgICAgIGNvbnN0IHtwcmltYXJ5TWFwLCBpc0ludGVyYWN0aXZlLCBjaGlsZHJlbn0gPSBvcHRpb25zO1xuXG4gICAgICAvLyBkaXNhYmxlIGRvdWJsZSBjbGljayB6b29tIHdoZW4gZWRpdG9yIGlzIGluIGFueSBkcmF3IG1vZGVcbiAgICAgIGNvbnN0IHttYXBEcmF3fSA9IG1hcENvbnRyb2xzO1xuICAgICAgY29uc3Qge2FjdGl2ZTogZWRpdG9yTWVudUFjdGl2ZSA9IGZhbHNlfSA9IG1hcERyYXcgfHwge307XG4gICAgICBjb25zdCBpc0VkaXRvckRyYXdpbmdNb2RlID0gRWRpdG9yTGF5ZXJVdGlscy5pc0RyYXdpbmdBY3RpdmUoZWRpdG9yTWVudUFjdGl2ZSwgZWRpdG9yLm1vZGUpO1xuXG4gICAgICBjb25zdCBpbnRlcm5hbFZpZXdTdGF0ZSA9IHRoaXMuY29udGV4dD8uZ2V0SW50ZXJuYWxWaWV3U3RhdGUoaW5kZXgpO1xuICAgICAgY29uc3QgaW50ZXJuYWxNYXBTdGF0ZSA9IHsuLi5tYXBTdGF0ZSwgLi4uaW50ZXJuYWxWaWV3U3RhdGV9O1xuICAgICAgY29uc3Qgdmlld3BvcnQgPSBnZXRWaWV3cG9ydEZyb21NYXBTdGF0ZShpbnRlcm5hbE1hcFN0YXRlKTtcblxuICAgICAgY29uc3QgZWRpdG9yRmVhdHVyZVNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkUG9seWdvbkluZGV4U2VsZWN0b3IodGhpcy5wcm9wcyk7XG5cbiAgICAgIGNvbnN0IHtzZXRGZWF0dXJlcywgb25MYXllckNsaWNrLCBzZXRTZWxlY3RlZEZlYXR1cmV9ID0gdmlzU3RhdGVBY3Rpb25zO1xuXG4gICAgICBjb25zdCBnZW5lcmF0ZURlY2tHTExheWVyc01ldGhvZCA9IGdlbmVyYXRlRGVja0dMTGF5ZXJzID8/IGNvbXB1dGVEZWNrTGF5ZXJzO1xuICAgICAgY29uc3QgZGVja0dsTGF5ZXJzID0gZ2VuZXJhdGVEZWNrR0xMYXllcnNNZXRob2QoXG4gICAgICAgIHtcbiAgICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgICBtYXBTdGF0ZTogaW50ZXJuYWxNYXBTdGF0ZSxcbiAgICAgICAgICBtYXBTdHlsZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWFwSW5kZXg6IGluZGV4LFxuICAgICAgICAgIHByaW1hcnlNYXAsXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgICAgbWFwYm94QXBpVXJsLFxuICAgICAgICAgIGxheWVyc0ZvckRlY2ssXG4gICAgICAgICAgZWRpdG9ySW5mbzogcHJpbWFyeU1hcFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgICAgIGVkaXRvck1lbnVBY3RpdmUsXG4gICAgICAgICAgICAgICAgb25TZXRGZWF0dXJlczogc2V0RmVhdHVyZXMsXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRGZWF0dXJlLFxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgQXJndW1lbnQgb2YgdHlwZSAnUmVhZG9ubHk8TWFwQ29udGFpbmVyUHJvcHM+JyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnbmV2ZXInXG4gICAgICAgICAgICAgICAgZmVhdHVyZUNvbGxlY3Rpb246IHRoaXMuZmVhdHVyZUNvbGxlY3Rpb25TZWxlY3Rvcih0aGlzLnByb3BzKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZlYXR1cmVJbmRleGVzOiB0aGlzLnNlbGVjdGVkRmVhdHVyZUluZGV4QXJyYXlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgQXJndW1lbnQgb2YgdHlwZSAndW5rbm93bicgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ251bWJlcicuXG4gICAgICAgICAgICAgICAgICBlZGl0b3JGZWF0dXJlU2VsZWN0ZWRJbmRleFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgdmlld3BvcnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9uTGF5ZXJIb3ZlcjogdGhpcy5fb25MYXllckhvdmVyLFxuICAgICAgICAgIG9uU2V0TGF5ZXJEb21haW46IHRoaXMuX29uTGF5ZXJTZXREb21haW4sXG4gICAgICAgICAgb25GaWx0ZXJlZEl0ZW1zQ2hhbmdlOiB0aGlzLl9vbkxheWVyRmlsdGVyZWRJdGVtc0NoYW5nZSxcbiAgICAgICAgICBvbldNU0ZlYXR1cmVJbmZvOiB0aGlzLl9vbldNU0ZlYXR1cmVJbmZvXG4gICAgICAgIH0sXG4gICAgICAgIGRlY2tHbFByb3BzXG4gICAgICApO1xuXG4gICAgICBjb25zdCBleHRyYURlY2tQYXJhbXM6IHtcbiAgICAgICAgZ2V0VG9vbHRpcD86IChpbmZvOiBhbnkpID0+IG9iamVjdCB8IG51bGw7XG4gICAgICAgIGdldEN1cnNvcj86ICh7aXNEcmFnZ2luZ306IHtpc0RyYWdnaW5nOiBib29sZWFufSkgPT4gc3RyaW5nO1xuICAgICAgfSA9IHt9O1xuICAgICAgaWYgKHByaW1hcnlNYXApIHtcbiAgICAgICAgZXh0cmFEZWNrUGFyYW1zLmdldFRvb2x0aXAgPSBpbmZvID0+XG4gICAgICAgICAgRWRpdG9yTGF5ZXJVdGlscy5nZXRUb29sdGlwKGluZm8sIHtcbiAgICAgICAgICAgIGVkaXRvck1lbnVBY3RpdmUsXG4gICAgICAgICAgICBlZGl0b3IsXG4gICAgICAgICAgICB0aGVtZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGV4dHJhRGVja1BhcmFtcy5nZXRDdXJzb3IgPSAoe2lzRHJhZ2dpbmd9OiB7aXNEcmFnZ2luZzogYm9vbGVhbn0pID0+IHtcbiAgICAgICAgICBjb25zdCBlZGl0b3JDdXJzb3IgPSBFZGl0b3JMYXllclV0aWxzLmdldEN1cnNvcih7XG4gICAgICAgICAgICBlZGl0b3JNZW51QWN0aXZlLFxuICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgaG92ZXJJbmZvXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGVkaXRvckN1cnNvcikgcmV0dXJuIGVkaXRvckN1cnNvcjtcblxuICAgICAgICAgIGlmIChpc0RyYWdnaW5nKSByZXR1cm4gJ2dyYWJiaW5nJztcbiAgICAgICAgICBpZiAoaG92ZXJJbmZvPy5sYXllcikgcmV0dXJuICdwb2ludGVyJztcbiAgICAgICAgICByZXR1cm4gJ2dyYWInO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlZmZlY3RzID0gdGhpcy5faXNPS1RvUmVuZGVyRWZmZWN0cyhpbmRleClcbiAgICAgICAgPyBjb21wdXRlRGVja0VmZmVjdHMoe3Zpc1N0YXRlLCBtYXBTdGF0ZX0pXG4gICAgICAgIDogW107XG5cbiAgICAgIGNvbnN0IHZpZXdzID0gZGVja0dsUHJvcHM/LnZpZXdzXG4gICAgICAgID8gZGVja0dsUHJvcHM/LnZpZXdzKClcbiAgICAgICAgOiBuZXcgTWFwVmlldyh7bGVnYWN5TWV0ZXJTaXplczogdHJ1ZX0pO1xuXG4gICAgICBsZXQgYWxsRGVja0dsUHJvcHMgPSB7XG4gICAgICAgIC4uLmRlY2tHbFByb3BzLFxuICAgICAgICBwaWNraW5nUmFkaXVzOiBERUZBVUxUX1BJQ0tJTkdfUkFESVVTLFxuICAgICAgICB2aWV3cyxcbiAgICAgICAgbGF5ZXJzOiBkZWNrR2xMYXllcnMsXG4gICAgICAgIGVmZmVjdHNcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgZGVja1JlbmRlckNhbGxiYWNrcz8ub25EZWNrUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFsbERlY2tHbFByb3BzID0gZGVja1JlbmRlckNhbGxiYWNrcy5vbkRlY2tSZW5kZXIoYWxsRGVja0dsUHJvcHMpO1xuICAgICAgICBpZiAoIWFsbERlY2tHbFByb3BzKSB7XG4gICAgICAgICAgLy8gaWYgb25EZWNrUmVuZGVyIHJldHVybnMgbnVsbCwgZG8gbm90IHJlbmRlciBkZWNrLmdsXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHsuLi4oaXNJbnRlcmFjdGl2ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU6IHByaW1hcnlNYXBcbiAgICAgICAgICAgICAgICAgID8gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPy4oZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uTW91c2VNb3ZlRGVib3VuY2VkKGV2ZW50LCB2aWV3cG9ydCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge3N0eWxlOiB7cG9pbnRlckV2ZW50czogJ25vbmUnfX0pfVxuICAgICAgICA+XG4gICAgICAgICAgPERlY2tHTFxuICAgICAgICAgICAgaWQ9XCJkZWZhdWx0LWRlY2tnbC1vdmVybGF5XCJcbiAgICAgICAgICAgIG9uTG9hZD17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlY2tSZW5kZXJDYWxsYmFja3M/Lm9uRGVja0xvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkZWNrUmVuZGVyQ2FsbGJhY2tzLm9uRGVja0xvYWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHsuLi5hbGxEZWNrR2xQcm9wc31cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e1xuICAgICAgICAgICAgICBpc0ludGVyYWN0aXZlXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZUNsaWNrWm9vbTogIWlzRWRpdG9yRHJhd2luZ01vZGUsXG4gICAgICAgICAgICAgICAgICAgIGRyYWdSb3RhdGU6IHRoaXMucHJvcHMubWFwU3RhdGUuZHJhZ1JvdGF0ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluaXRpYWxWaWV3U3RhdGU9e2ludGVybmFsVmlld1N0YXRlfVxuICAgICAgICAgICAgb25CZWZvcmVSZW5kZXI9e3RoaXMuX29uQmVmb3JlUmVuZGVyfVxuICAgICAgICAgICAgb25WaWV3U3RhdGVDaGFuZ2U9e2lzSW50ZXJhY3RpdmUgPyB0aGlzLl9vblZpZXdwb3J0Q2hhbmdlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgey4uLmV4dHJhRGVja1BhcmFtc31cbiAgICAgICAgICAgIG9uSG92ZXI9e1xuICAgICAgICAgICAgICBpc0ludGVyYWN0aXZlXG4gICAgICAgICAgICAgICAgPyBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gRWRpdG9yTGF5ZXJVdGlscy5vbkhvdmVyKGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JNZW51QWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgIGVkaXRvcixcbiAgICAgICAgICAgICAgICAgICAgICBob3ZlckluZm9cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkxheWVySG92ZXJEZWJvdW5jZWQoZGF0YSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KGRhdGEsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbm9ybWFsaXplRXZlbnQoZXZlbnQuc3JjRXZlbnQsIHZpZXdwb3J0KTtcbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gRWRpdG9yTGF5ZXJVdGlscy5vbkNsaWNrKGRhdGEsIGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgZWRpdG9yTWVudUFjdGl2ZSxcbiAgICAgICAgICAgICAgICBlZGl0b3IsXG4gICAgICAgICAgICAgICAgb25MYXllckNsaWNrLFxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkRmVhdHVyZSxcbiAgICAgICAgICAgICAgICBtYXBJbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChyZXMpIHJldHVybjtcblxuICAgICAgICAgICAgICB2aXNTdGF0ZUFjdGlvbnMub25MYXllckNsaWNrKGRhdGEpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRGVja0Vycm9yfVxuICAgICAgICAgICAgcmVmPXtjb21wID0+IHtcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBpZiAoY29tcCAmJiBjb21wLmRlY2sgJiYgIXRoaXMuX2RlY2spIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVjayA9IGNvbXAuZGVjaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uV2ViR0xJbml0aWFsaXplZD17Z2wgPT4gdGhpcy5fb25EZWNrSW5pdGlhbGl6ZWQoZ2wpfVxuICAgICAgICAgICAgb25BZnRlclJlbmRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlY2tSZW5kZXJDYWxsYmFja3M/Lm9uRGVja0FmdGVyUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZGVja1JlbmRlckNhbGxiYWNrcy5vbkRlY2tBZnRlclJlbmRlcihhbGxEZWNrR2xQcm9wcyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBhbnlBY3RpdmVMYXllckxvYWRpbmcgPSBhcmVBbnlEZWNrTGF5ZXJzTG9hZGluZyhhbGxEZWNrR2xQcm9wcy5sYXllcnMpO1xuICAgICAgICAgICAgICBpZiAoYW55QWN0aXZlTGF5ZXJMb2FkaW5nICE9PSB0aGlzLmFueUFjdGl2ZUxheWVyTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uTGF5ZXJMb2FkaW5nU3RhdGVDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFueUFjdGl2ZUxheWVyTG9hZGluZyA9IGFueUFjdGl2ZUxheWVyTG9hZGluZztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9EZWNrR0w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlTWFwYm94TGF5ZXJzKCkge1xuICAgICAgY29uc3QgbWFwYm94TGF5ZXJzID0gdGhpcy5tYXBib3hMYXllcnNTZWxlY3Rvcih0aGlzLnByb3BzKTtcbiAgICAgIGlmICghT2JqZWN0LmtleXMobWFwYm94TGF5ZXJzKS5sZW5ndGggJiYgIU9iamVjdC5rZXlzKHRoaXMucHJldmlvdXNMYXllcnMpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU1hcGJveExheWVycyh0aGlzLl9tYXAsIG1hcGJveExheWVycywgdGhpcy5wcmV2aW91c0xheWVycyk7XG5cbiAgICAgIHRoaXMucHJldmlvdXNMYXllcnMgPSBtYXBib3hMYXllcnM7XG4gICAgfVxuXG4gICAgX3JlbmRlck1hcGJveE92ZXJsYXlzKCkge1xuICAgICAgaWYgKHRoaXMuX21hcCAmJiB0aGlzLl9tYXAuaXNTdHlsZUxvYWRlZCgpKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1hcGJveExheWVycygpO1xuICAgICAgfVxuICAgIH1cbiAgICBfb25WaWV3cG9ydENoYW5nZVByb3BhZ2F0ZURlYm91bmNlZCA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdTdGF0ZSA9IHRoaXMuY29udGV4dD8uZ2V0SW50ZXJuYWxWaWV3U3RhdGUodGhpcy5wcm9wcy5pbmRleCk7XG4gICAgICBvblZpZXdQb3J0Q2hhbmdlKFxuICAgICAgICB2aWV3U3RhdGUsXG4gICAgICAgIHRoaXMucHJvcHMubWFwU3RhdGVBY3Rpb25zLnVwZGF0ZU1hcCxcbiAgICAgICAgdGhpcy5wcm9wcy5vblZpZXdTdGF0ZUNoYW5nZSxcbiAgICAgICAgdGhpcy5wcm9wcy5wcmltYXJ5LFxuICAgICAgICB0aGlzLnByb3BzLmluZGV4XG4gICAgICApO1xuICAgIH0sIERFQk9VTkNFX1ZJRVdQT1JUX1BST1BBR0FURSk7XG5cbiAgICBfb25WaWV3cG9ydENoYW5nZSA9IHZpZXdwb3J0ID0+IHtcbiAgICAgIGNvbnN0IHt2aWV3U3RhdGV9ID0gdmlld3BvcnQ7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0V4cG9ydCkge1xuICAgICAgICAvLyBJbWFnZSBleHBvcnQgbWFwIHNob3VsZG4ndCBiZSBpbnRlcmFjdGl2ZSAob3RoZXJ3aXNlIHRoaXMgY2FsbGJhY2sgY2FuXG4gICAgICAgIC8vIGxlYWQgdG8gaW5hZHZlcnRlbnQgY2hhbmdlcyB0byB0aGUgc3RhdGUgb2YgdGhlIG1haW4gbWFwKVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7c2V0SW50ZXJuYWxWaWV3U3RhdGV9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgc2V0SW50ZXJuYWxWaWV3U3RhdGUodmlld1N0YXRlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgIHRoaXMuX29uVmlld3BvcnRDaGFuZ2VQcm9wYWdhdGVEZWJvdW5jZWQoKTtcbiAgICB9O1xuXG4gICAgX29uTGF5ZXJIb3ZlckRlYm91bmNlZCA9IGRlYm91bmNlKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMub25MYXllckhvdmVyKGRhdGEsIGluZGV4KTtcbiAgICB9LCBERUJPVU5DRV9NT1VTRV9NT1ZFX1BST1BBR0FURSk7XG5cbiAgICBfb25Nb3VzZU1vdmVEZWJvdW5jZWQgPSBkZWJvdW5jZSgoZXZlbnQsIHZpZXdwb3J0KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5vbk1vdXNlTW92ZShub3JtYWxpemVFdmVudChldmVudCwgdmlld3BvcnQpKTtcbiAgICB9LCBERUJPVU5DRV9NT1VTRV9NT1ZFX1BST1BBR0FURSk7XG5cbiAgICBfb25MYXllckxvYWRpbmdTdGF0ZUNoYW5nZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIC8vIHRyaWdnZXIgbG9hZGluZyBpbmRpY2F0b3IgdXBkYXRlIHdpdGhvdXQgYW55IGNoYW5nZSB0byB1cGRhdGUgVUlcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnNldExvYWRpbmdJbmRpY2F0b3Ioe2NoYW5nZTogMH0pO1xuICAgIH0sIERFQk9VTkNFX0xPQURJTkdfU1RBVEVfUFJPUEFHQVRFKTtcblxuICAgIF90b2dnbGVNYXBDb250cm9sID0gcGFuZWxJZCA9PiB7XG4gICAgICBjb25zdCB7aW5kZXgsIHVpU3RhdGVBY3Rpb25zfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1hcENvbnRyb2wocGFuZWxJZCwgTnVtYmVyKGluZGV4KSk7XG4gICAgfTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbiAgICBfcmVuZGVyTWFwKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICBtYXBTdGF0ZUFjdGlvbnMsXG4gICAgICAgIE1hcENvbXBvbmVudCA9IE1hcCxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIC8vIG1hcGJveEFwaVVybCxcbiAgICAgICAgbWFwQ29udHJvbHMsXG4gICAgICAgIGlzRXhwb3J0LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBwcmltYXJ5LFxuICAgICAgICBib3R0b21NYXBDb250YWluZXJQcm9wcyxcbiAgICAgICAgdG9wTWFwQ29udGFpbmVyUHJvcHMsXG4gICAgICAgIHRoZW1lLFxuICAgICAgICBkYXRhc2V0QXR0cmlidXRpb25zID0gW10sXG4gICAgICAgIGNvbnRhaW5lcklkID0gMCxcbiAgICAgICAgaXNMb2FkaW5nSW5kaWNhdG9yVmlzaWJsZSxcbiAgICAgICAgYWN0aXZlU2lkZVBhbmVsLFxuICAgICAgICBzaWRlUGFuZWxXaWR0aFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtsYXllcnMsIGRhdGFzZXRzLCBlZGl0b3IsIGludGVyYWN0aW9uQ29uZmlnfSA9IHZpc1N0YXRlO1xuXG4gICAgICBjb25zdCBsYXllcnNUb1JlbmRlciA9IHRoaXMubGF5ZXJzVG9SZW5kZXJTZWxlY3Rvcih0aGlzLnByb3BzKTtcbiAgICAgIGNvbnN0IGxheWVyc0ZvckRlY2sgPSB0aGlzLmxheWVyc0ZvckRlY2tTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgLy8gQ3VycmVudCBzdHlsZSBjYW4gYmUgYSBjdXN0b20gc3R5bGUsIGZyb20gd2hpY2ggd2UgcHVsbCB0aGUgbWFwYm94IEFQSSBhY2NjZXNzIHRva2VuXG4gICAgICBjb25zdCBjdXJyZW50U3R5bGUgPSBtYXBTdHlsZS5tYXBTdHlsZXM/LlttYXBTdHlsZS5zdHlsZVR5cGVdO1xuICAgICAgY29uc3QgYmFzZU1hcExpYnJhcnlOYW1lID0gZ2V0QmFzZU1hcExpYnJhcnkoY3VycmVudFN0eWxlKTtcbiAgICAgIGNvbnN0IGJhc2VNYXBMaWJyYXJ5Q29uZmlnID1cbiAgICAgICAgZ2V0QXBwbGljYXRpb25Db25maWcoKS5iYXNlTWFwTGlicmFyeUNvbmZpZz8uW2Jhc2VNYXBMaWJyYXJ5TmFtZV07XG5cbiAgICAgIGNvbnN0IGludGVybmFsVmlld1N0YXRlID0gdGhpcy5jb250ZXh0Py5nZXRJbnRlcm5hbFZpZXdTdGF0ZShpbmRleCk7XG4gICAgICBjb25zdCBtYXBQcm9wcyA9IHtcbiAgICAgICAgLi4uaW50ZXJuYWxWaWV3U3RhdGUsXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgbWFwYm94QWNjZXNzVG9rZW46IGN1cnJlbnRTdHlsZT8uYWNjZXNzVG9rZW4gfHwgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIC8vIGJhc2VBcGlVcmw6IG1hcGJveEFwaVVybCxcbiAgICAgICAgbWFwTGliOiBiYXNlTWFwTGlicmFyeUNvbmZpZy5nZXRNYXBMaWIoKSxcbiAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDpcbiAgICAgICAgICB0aGlzLnByb3BzLnRyYW5zZm9ybVJlcXVlc3QgfHxcbiAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0KGN1cnJlbnRTdHlsZT8uYWNjZXNzVG9rZW4gfHwgbWFwYm94QXBpQWNjZXNzVG9rZW4pXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYXNHZW9jb2RlckxheWVyID0gQm9vbGVhbihsYXllcnMuZmluZChsID0+IGwuaWQgPT09IEdFT0NPREVSX0xBWUVSX0lEKSk7XG4gICAgICBjb25zdCBpc1NwbGl0ID0gQm9vbGVhbihtYXBTdGF0ZS5pc1NwbGl0KTtcblxuICAgICAgY29uc3QgZGVjayA9IHRoaXMuX3JlbmRlckRlY2tPdmVybGF5KGxheWVyc0ZvckRlY2ssIHtcbiAgICAgICAgcHJpbWFyeU1hcDogdHJ1ZSxcbiAgICAgICAgaXNJbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgICA8TWFwQ29tcG9uZW50XG4gICAgICAgICAgICBrZXk9e2Bib3R0b20tJHtiYXNlTWFwTGlicmFyeU5hbWV9YH1cbiAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZS5ib3R0b21NYXBTdHlsZSA/PyBFTVBUWV9NQVBCT1hfU1RZTEV9XG4gICAgICAgICAgICB7Li4uYm90dG9tTWFwQ29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgICByZWY9e3RoaXMuX3NldE1hcFJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KTtcbiAgICAgIGlmICghZGVjaykge1xuICAgICAgICAvLyBkZWNrT3ZlcmxheSBjYW4gYmUgbnVsbCBpZiBvbkRlY2tSZW5kZXIgcmV0dXJucyBudWxsXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSBkb24ndCB3YW50IHRvIHJlbmRlciB0aGUgbWFwXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TWFwQ29udHJvbFxuICAgICAgICAgICAgbWFwU3RhdGU9e21hcFN0YXRlfVxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgYXZhaWxhYmxlTG9jYWxlcz17TE9DQUxFX0NPREVTX0FSUkFZfVxuICAgICAgICAgICAgZHJhZ1JvdGF0ZT17bWFwU3RhdGUuZHJhZ1JvdGF0ZX1cbiAgICAgICAgICAgIGlzU3BsaXQ9e2lzU3BsaXR9XG4gICAgICAgICAgICBwcmltYXJ5PXtCb29sZWFuKHByaW1hcnkpfVxuICAgICAgICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxuICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICBsYXllcnNUb1JlbmRlcj17bGF5ZXJzVG9SZW5kZXJ9XG4gICAgICAgICAgICBtYXBJbmRleD17aW5kZXggfHwgMH1cbiAgICAgICAgICAgIG1hcENvbnRyb2xzPXttYXBDb250cm9sc31cbiAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxuICAgICAgICAgICAgc2NhbGU9e21hcFN0YXRlLnNjYWxlIHx8IDF9XG4gICAgICAgICAgICBsb2dvQ29tcG9uZW50PXt0aGlzLnByb3BzLmxvZ29Db21wb25lbnR9XG4gICAgICAgICAgICB0b3A9e1xuICAgICAgICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZy5nZW9jb2RlciAmJiBpbnRlcmFjdGlvbkNvbmZpZy5nZW9jb2Rlci5lbmFibGVkXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5tYXBDb250cm9sVG9wXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZT17bWFwU3RhdGVBY3Rpb25zLnRvZ2dsZVBlcnNwZWN0aXZlfVxuICAgICAgICAgICAgb25Ub2dnbGVTcGxpdE1hcD17bWFwU3RhdGVBY3Rpb25zLnRvZ2dsZVNwbGl0TWFwfVxuICAgICAgICAgICAgb25NYXBUb2dnbGVMYXllcj17dGhpcy5faGFuZGxlTWFwVG9nZ2xlTGF5ZXJ9XG4gICAgICAgICAgICBvblRvZ2dsZU1hcENvbnRyb2w9e3RoaXMuX3RvZ2dsZU1hcENvbnRyb2x9XG4gICAgICAgICAgICBvblRvZ2dsZVNwbGl0TWFwVmlld3BvcnQ9e21hcFN0YXRlQWN0aW9ucy50b2dnbGVTcGxpdE1hcFZpZXdwb3J0fVxuICAgICAgICAgICAgb25TZXRFZGl0b3JNb2RlPXt2aXNTdGF0ZUFjdGlvbnMuc2V0RWRpdG9yTW9kZX1cbiAgICAgICAgICAgIG9uU2V0TG9jYWxlPXt1aVN0YXRlQWN0aW9ucy5zZXRMb2NhbGV9XG4gICAgICAgICAgICBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHk9e3Zpc1N0YXRlQWN0aW9ucy50b2dnbGVFZGl0b3JWaXNpYmlsaXR5fVxuICAgICAgICAgICAgb25MYXllclZpc0NvbmZpZ0NoYW5nZT17dmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzQ29uZmlnQ2hhbmdlfVxuICAgICAgICAgICAgbWFwSGVpZ2h0PXttYXBTdGF0ZS5oZWlnaHR9XG4gICAgICAgICAgICBzZXRNYXBDb250cm9sU2V0dGluZ3M9e3VpU3RhdGVBY3Rpb25zLnNldE1hcENvbnRyb2xTZXR0aW5nc31cbiAgICAgICAgICAgIGFjdGl2ZVNpZGVQYW5lbD17YWN0aXZlU2lkZVBhbmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2lzU3BsaXRTZWxlY3Rvcih0aGlzLnByb3BzKSAmJiA8RHJvcHBhYmxlIGNvbnRhaW5lcklkPXtjb250YWluZXJJZH0gLz59XG5cbiAgICAgICAgICB7ZGVja31cbiAgICAgICAgICB7dGhpcy5fcmVuZGVyTWFwYm94T3ZlcmxheXMoKX1cbiAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICBpbmRleD17aW5kZXggfHwgMH1cbiAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgIGVkaXRvcj17ZWRpdG9yfVxuICAgICAgICAgICAgZmlsdGVycz17dGhpcy5wb2x5Z29uRmlsdGVyc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICBvbkRlbGV0ZUZlYXR1cmU9e3Zpc1N0YXRlQWN0aW9ucy5kZWxldGVGZWF0dXJlfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3Zpc1N0YXRlQWN0aW9ucy5zZXRTZWxlY3RlZEZlYXR1cmV9XG4gICAgICAgICAgICBvblRvZ2dsZVBvbHlnb25GaWx0ZXI9e3Zpc1N0YXRlQWN0aW9ucy5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJ9XG4gICAgICAgICAgICBvblNldEVkaXRvck1vZGU9e3Zpc1N0YXRlQWN0aW9ucy5zZXRFZGl0b3JNb2RlfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBlZGl0b3IudmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7bWFwU3R5bGUudG9wTWFwU3R5bGUgPyAoXG4gICAgICAgICAgICA8TWFwQ29tcG9uZW50XG4gICAgICAgICAgICAgIGtleT17YHRvcC0ke2Jhc2VNYXBMaWJyYXJ5TmFtZX1gfVxuICAgICAgICAgICAgICB2aWV3U3RhdGU9e2ludGVybmFsVmlld1N0YXRlfVxuICAgICAgICAgICAgICBtYXBTdHlsZT17bWFwU3R5bGUudG9wTWFwU3R5bGV9XG4gICAgICAgICAgICAgIHN0eWxlPXtNQVBfU1RZTEUudG9wfVxuICAgICAgICAgICAgICBtYXBib3hBY2Nlc3NUb2tlbj17bWFwUHJvcHMubWFwYm94QWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q9e21hcFByb3BzLnRyYW5zZm9ybVJlcXVlc3R9XG4gICAgICAgICAgICAgIG1hcExpYj17YmFzZU1hcExpYnJhcnlDb25maWcuZ2V0TWFwTGliKCl9XG4gICAgICAgICAgICAgIHsuLi50b3BNYXBDb250YWluZXJQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7aGFzR2VvY29kZXJMYXllclxuICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJEZWNrT3ZlcmxheShcbiAgICAgICAgICAgICAgICB7W0dFT0NPREVSX0xBWUVSX0lEXTogaGFzR2VvY29kZXJMYXllcn0sXG4gICAgICAgICAgICAgICAge3ByaW1hcnlNYXA6IGZhbHNlLCBpc0ludGVyYWN0aXZlOiBmYWxzZX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBQb3BvdmVyKCl9XG4gICAgICAgICAge3ByaW1hcnkgIT09IGlzU3BsaXQgPyAoXG4gICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvclxuICAgICAgICAgICAgICBpc1Zpc2libGU9e0Jvb2xlYW4oaXNMb2FkaW5nSW5kaWNhdG9yVmlzaWJsZSB8fCB0aGlzLmFueUFjdGl2ZUxheWVyTG9hZGluZyl9XG4gICAgICAgICAgICAgIGFjdGl2ZVNpZGVQYW5lbD17Qm9vbGVhbihhY3RpdmVTaWRlUGFuZWwpfVxuICAgICAgICAgICAgICBzaWRlUGFuZWxXaWR0aD17c2lkZVBhbmVsV2lkdGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHt0aGlzLnByb3BzLnByaW1hcnkgPyAoXG4gICAgICAgICAgICA8QXR0cmlidXRpb25cbiAgICAgICAgICAgICAgc2hvd0Jhc2VNYXBMaWJMb2dvPXt0aGlzLnN0YXRlLnNob3dCYXNlTWFwQXR0cmlidXRpb259XG4gICAgICAgICAgICAgIHNob3dPc21CYXNlbWFwQXR0cmlidXRpb249e3RydWV9XG4gICAgICAgICAgICAgIGRhdGFzZXRBdHRyaWJ1dGlvbnM9e2RhdGFzZXRBdHRyaWJ1dGlvbnN9XG4gICAgICAgICAgICAgIGJhc2VNYXBMaWJyYXJ5Q29uZmlnPXtiYXNlTWFwTGlicmFyeUNvbmZpZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7dmlzU3RhdGUsIG1hcFN0eWxlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBtYXBDb250ZW50ID0gdGhpcy5fcmVuZGVyTWFwKCk7XG4gICAgICBpZiAoIW1hcENvbnRlbnQpIHtcbiAgICAgICAgLy8gbWFwQ29udGVudCBjYW4gYmUgbnVsbCBpZiBvbkRlY2tSZW5kZXIgcmV0dXJucyBudWxsXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSBkb24ndCB3YW50IHRvIHJlbmRlciB0aGUgbWFwXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJyZW50U3R5bGUgPSBtYXBTdHlsZS5tYXBTdHlsZXM/LlttYXBTdHlsZS5zdHlsZVR5cGVdO1xuICAgICAgY29uc3QgYmFzZU1hcExpYnJhcnlOYW1lID0gZ2V0QmFzZU1hcExpYnJhcnkoY3VycmVudFN0eWxlKTtcbiAgICAgIGNvbnN0IGJhc2VNYXBMaWJyYXJ5Q29uZmlnID1cbiAgICAgICAgZ2V0QXBwbGljYXRpb25Db25maWcoKS5iYXNlTWFwTGlicmFyeUNvbmZpZz8uW2Jhc2VNYXBMaWJyYXJ5TmFtZV07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRNYXBcbiAgICAgICAgICByZWY9e3RoaXMuX3JlZn1cbiAgICAgICAgICBzdHlsZT17dGhpcy5zdHlsZVNlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgIG9uQ29udGV4dE1lbnU9e2V2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgJG1peEJsZW5kTW9kZT17dmlzU3RhdGUub3ZlcmxheUJsZW5kaW5nfVxuICAgICAgICAgICRtYXBMaWJDc3NDbGFzcz17YmFzZU1hcExpYnJhcnlDb25maWcubWFwTGliQ3NzQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICB7bWFwQ29udGVudH1cbiAgICAgICAgPC9TdHlsZWRNYXA+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoVGhlbWUoTWFwQ29udGFpbmVyKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsaUJBQUEsR0FBQUYsdUJBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtBQUVBLElBQUFHLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUosT0FBQTtBQUNBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtBQUNBLElBQUFNLEtBQUEsR0FBQU4sT0FBQTtBQUNBLElBQUFPLFNBQUEsR0FBQUgsc0JBQUEsQ0FBQUosT0FBQTtBQUtBLElBQUFRLFdBQUEsR0FBQUosc0JBQUEsQ0FBQUosT0FBQTtBQUNBLElBQUFTLFdBQUEsR0FBQUwsc0JBQUEsQ0FBQUosT0FBQTtBQUNBLElBQUFVLGtCQUFBLEdBQUFWLE9BQUE7QUFNQSxJQUFBVyxPQUFBLEdBQUFQLHNCQUFBLENBQUFKLE9BQUE7QUFHQSxJQUFBWSxJQUFBLEdBQUFaLE9BQUE7QUFnQkEsSUFBQWEsS0FBQSxHQUFBYixPQUFBO0FBb0JBLElBQUFjLEtBQUEsR0FBQWQsT0FBQTtBQUdBLElBQUFlLEtBQUEsR0FBQWYsT0FBQTtBQVNBLElBQUFnQixjQUFBLEdBQUFoQixPQUFBO0FBRUEsSUFBQWlCLG9CQUFBLEdBQUFqQixPQUFBO0FBRUEsSUFBQWtCLGNBQUEsR0FBQWQsc0JBQUEsQ0FBQUosT0FBQTtBQUNBLElBQUFtQixLQUFBLEdBQUFuQixPQUFBO0FBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7QUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtBQVlBLElBQUFzQixpQkFBQSxHQUFBbEIsc0JBQUEsQ0FBQUos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WixLQUFLO1VBQWhDTSxRQUFRLEdBQUFvWixZQUFBLENBQVJwWixRQUFRO1VBQUVrRyxRQUFRLEdBQUFrVCxZQUFBLENBQVJsVCxRQUFRO1FBQ3pCLElBQU1tVCxVQUFVLEdBQUcsSUFBSSxDQUFDN0UsVUFBVSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDNkUsVUFBVSxFQUFFO1VBQ2Y7VUFDQTtVQUNBLE9BQU8sSUFBSTtRQUNiO1FBRUEsSUFBTTNELFlBQVksSUFBQXdELG9CQUFBLEdBQUdoVCxRQUFRLENBQUN5UCxTQUFTLGNBQUF1RCxvQkFBQSx1QkFBbEJBLG9CQUFBLENBQXFCaFQsUUFBUSxDQUFDQyxTQUFTLENBQUM7UUFDN0QsSUFBTXlQLGtCQUFrQixHQUFHLElBQUFDLHVCQUFpQixFQUFDSCxZQUFZLENBQUM7UUFDMUQsSUFBTTlXLG9CQUFvQixJQUFBdWEsc0JBQUEsR0FDeEIsSUFBQXJELDBCQUFvQixFQUFDLENBQUMsQ0FBQ2xYLG9CQUFvQixjQUFBdWEsc0JBQUEsdUJBQTNDQSxzQkFBQSxDQUE4Q3ZELGtCQUFrQixDQUFDO1FBRW5FLG9CQUNFbGQsTUFBQSxZQUFBbUcsYUFBQSxDQUFDZCxTQUFTO1VBQ1IrQyxHQUFHLEVBQUUsSUFBSSxDQUFDNUMsSUFBSztVQUNmYSxLQUFLLEVBQUUsSUFBSSxDQUFDdWEsYUFBYSxDQUFDLElBQUksQ0FBQzVaLEtBQUssQ0FBRTtVQUN0QzZaLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFFclMsS0FBSztZQUFBLE9BQUlBLEtBQUssQ0FBQ3NTLGNBQWMsQ0FBQyxDQUFDO1VBQUEsQ0FBQztVQUMvQ3BiLGFBQWEsRUFBRTRCLFFBQVEsQ0FBQ3laLGVBQWdCO1VBQ3hDcGIsZUFBZSxFQUFFTyxvQkFBb0IsQ0FBQ0s7UUFBZSxHQUVwRG9hLFVBQ1EsQ0FBQztNQUVoQjtJQUFDO0VBQUEsRUFsMkJ3QkssZ0JBQVM7RUFBQSxJQUFBcmQsZ0JBQUEsYUFBOUI2RyxZQUFZLGlCQUtLeVcsd0NBQW1CO0VBQUEsSUFBQXRkLGdCQUFBLGFBTHBDNkcsWUFBWSxrQkFTTTtJQUNwQjZSLFlBQVksRUFBRUMsZUFBRztJQUNqQnJGLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDZmhQLEtBQUssRUFBRSxDQUFDO0lBQ1IrQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBdTFCSCxPQUFPLElBQUFrVywyQkFBUyxFQUFDMVcsWUFBWSxDQUFDO0FBQ2hDIiwiaWdub3JlTGlzdCI6W119