"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlotContainerFactory;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/react"));
var _styledComponents = _interopRequireDefault(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/styled-components"));
var _reactMapGl = require("react-map-gl");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/utils/src");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/reducers/src");
var _mapContainer = _interopRequireDefault(require("./map-container"));
var _mapsLayout = _interopRequireDefault(require("./maps-layout"));
var _mapViewStateContext = require("./map-view-state-context");
var _src3 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/constants/src");
var _templateObject, _templateObject2; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
// libraries
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CLASS_FILTER = ['maplibregl-control-container', 'mapboxgl-control-container', 'attrition-link', 'attrition-logo', 'map-control__panel-split-viewport-tools'];
var DOM_FILTER_FUNC = function DOM_FILTER_FUNC(node) {
  // Exclude elements with filtered class names
  if (CLASS_FILTER.includes(node.className)) {
    return false;
  }
  // Exclude dataviz-tool-header custom element
  if (node.tagName && node.tagName.toLowerCase() === 'dataviz-tool-header') {
    return false;
  }
  return true;
};
var OUT_OF_SCREEN_POSITION = -9999;
PlotContainerFactory.deps = [_mapContainer["default"], _mapsLayout["default"]];

// Remove mapbox logo in exported map, because it contains non-ascii characters
// Remove split viewport UI controls from exported images when the legend is shown
// Hide dataviz-tool-header during screenshot generation
var StyledPlotContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .maplibregl-ctrl-bottom-left,\n  .maplibregl-ctrl-bottom-right,\n  .maplibre-attribution-container,\n  .mapboxgl-ctrl-bottom-left,\n  .mapboxgl-ctrl-bottom-right,\n  .mapbox-attribution-container,\n  .map-control__panel-split-viewport-tools {\n    display: none;\n  }\n\n  dataviz-tool-header {\n    display: none !important;\n  }\n\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"])), OUT_OF_SCREEN_POSITION, OUT_OF_SCREEN_POSITION);
var StyledMapContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
function PlotContainerFactory(MapContainer, MapsLayout) {
  function PlotContainer(_ref) {
    var ratio = _ref.ratio,
      resolution = _ref.resolution,
      _ref$legend = _ref.legend,
      legend = _ref$legend === void 0 ? false : _ref$legend,
      center = _ref.center,
      imageSize = _ref.imageSize,
      escapeXhtmlForWebpack = _ref.escapeXhtmlForWebpack,
      mapFields = _ref.mapFields,
      _ref$splitMaps = _ref.splitMaps,
      splitMaps = _ref$splitMaps === void 0 ? [] : _ref$splitMaps,
      setExportImageSetting = _ref.setExportImageSetting,
      setExportImageDataUri = _ref.setExportImageDataUri,
      setExportImageError = _ref.setExportImageError,
      addNotification = _ref.addNotification,
      enableErrorNotification = _ref.enableErrorNotification,
      logoComponent = _ref.logoComponent;
    var plottingAreaRef = (0, _react.useRef)(null);
    var _useState = (0, _react.useState)(function () {
        return mapFields.visState.effects.map(function (effect) {
          return effect.clone();
        });
      }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      plotEffects = _useState2[0];
    var mapState = mapFields.mapState;

    // Memoize the scale calculation
    var scale = (0, _react.useMemo)(function () {
      if (imageSize.scale) {
        return imageSize.scale;
      }
      var calculatedScale = (0, _src.getScaleFromImageSize)(imageSize.imageW, imageSize.imageH, mapState.width * (mapState.isSplit ? 2 : 1), mapState.height);
      return calculatedScale > 0 ? calculatedScale : 1;
    }, [imageSize.scale, imageSize.imageW, imageSize.imageH, mapState.width, mapState.height, mapState.isSplit]);

    // Memoize the map style
    var scaledMapStyle = (0, _react.useMemo)(function () {
      var mapStyle = mapFields.mapStyle;
      return _objectSpread(_objectSpread({}, mapStyle), {}, {
        bottomMapStyle: (0, _src.scaleMapStyleByResolution)(mapStyle.bottomMapStyle, scale),
        topMapStyle: (0, _src.scaleMapStyleByResolution)(mapStyle.topMapStyle, scale)
      });
    }, [mapFields.mapStyle, scale]);

    // Memoize the retrieveNewScreenshot callback
    var debouncedScreenshot = (0, _react.useMemo)(function () {
      return (0, _debounce["default"])(function () {
        if (plottingAreaRef.current) {
          (0, _src.convertToPng)(plottingAreaRef.current, {
            filter: DOM_FILTER_FUNC,
            width: imageSize.imageW,
            height: imageSize.imageH,
            escapeXhtmlForWebpack: escapeXhtmlForWebpack
          }).then(setExportImageDataUri)["catch"](function (err) {
            setExportImageError(err);
            if (enableErrorNotification) {
              addNotification((0, _src.exportImageError)({
                err: err
              }));
            }
          });
        }
      }, 500);
    }, [imageSize.imageW, imageSize.imageH, escapeXhtmlForWebpack, setExportImageDataUri, setExportImageError, enableErrorNotification, addNotification]);
    var retrieveNewScreenshot = (0, _react.useCallback)(debouncedScreenshot, [debouncedScreenshot]);

    // Memoize the onMapRender callback
    var debouncedMapRender = (0, _react.useMemo)(function () {
      return (0, _debounce["default"])(function (map) {
        if (map.isStyleLoaded()) {
          retrieveNewScreenshot();
        }
      }, 500);
    }, [retrieveNewScreenshot]);
    var onMapRender = (0, _react.useCallback)(debouncedMapRender, [debouncedMapRender]);

    // Initial setup effect
    (0, _react.useEffect)(function () {
      setExportImageSetting({
        processing: true
      });
    }, [setExportImageSetting]);

    // Screenshot update effect
    (0, _react.useEffect)(function () {
      if (ratio !== undefined || resolution !== undefined || legend !== undefined) {
        setExportImageSetting({
          processing: true
        });
        retrieveNewScreenshot();
      }
    }, [ratio, resolution, legend, setExportImageSetting, retrieveNewScreenshot]);

    // Memoize size calculations
    var _useMemo = (0, _react.useMemo)(function () {
        var size = {
          width: imageSize.imageW || 1,
          height: imageSize.imageH || 1
        };
        var isSplit = splitMaps.length > 1;
        return {
          size: size,
          width: size.width / (isSplit ? 2 : 1),
          height: size.height
        };
      }, [imageSize.imageW, imageSize.imageH, splitMaps.length]),
      size = _useMemo.size,
      width = _useMemo.width,
      height = _useMemo.height;

    // Memoize map state
    var newMapState = (0, _react.useMemo)(function () {
      var baseMapState = _objectSpread(_objectSpread({}, mapState), {}, {
        width: width,
        height: height,
        zoom: mapState.zoom + (Math.log2(scale) || 0)
      });
      if (center) {
        var renderedLayers = mapFields.visState.layers.filter(function (layer, idx) {
          return layer.id !== _src3.GEOCODER_LAYER_ID && layer.shouldRenderLayer(mapFields.visState.layerData[idx]);
        });
        var bounds = (0, _src2.findMapBounds)(renderedLayers);
        var centerAndZoom = (0, _src.getCenterAndZoomFromBounds)(bounds, {
          width: width,
          height: height
        });
        if (centerAndZoom) {
          var zoom = Number.isFinite(centerAndZoom.zoom) ? centerAndZoom.zoom : mapState.zoom;
          return _objectSpread(_objectSpread({}, baseMapState), {}, {
            longitude: centerAndZoom.center[0],
            latitude: centerAndZoom.center[1],
            zoom: zoom + Number(Math.log2(scale) || 0)
          });
        }
      }
      return baseMapState;
    }, [mapState, width, height, scale, center, mapFields.visState]);

    // Memoize map props
    var mapProps = (0, _react.useMemo)(function () {
      var _mapFields$mapControl;
      return _objectSpread(_objectSpread({}, mapFields), {}, {
        mapStyle: scaledMapStyle,
        mapState: newMapState,
        mapControls: {
          mapLegend: {
            show: Boolean(legend),
            active: true,
            settings: (_mapFields$mapControl = mapFields.mapControls) === null || _mapFields$mapControl === void 0 || (_mapFields$mapControl = _mapFields$mapControl.mapLegend) === null || _mapFields$mapControl === void 0 ? void 0 : _mapFields$mapControl.settings
          }
        },
        MapComponent: _reactMapGl.Map,
        onMapRender: onMapRender,
        isExport: true,
        deckGlProps: _objectSpread(_objectSpread({}, mapFields.deckGlProps), {}, {
          glOptions: {
            preserveDrawingBuffer: true,
            useDevicePixels: false
          }
        }),
        visState: _objectSpread(_objectSpread({}, mapFields.visState), {}, {
          effects: plotEffects
        }),
        // allow overriding the legend panel logo in export
        logoComponent: logoComponent
      });
    }, [mapFields, scaledMapStyle, newMapState, legend, onMapRender, plotEffects, logoComponent]);
    var isSplit = splitMaps.length > 1;
    var mapContainers = !isSplit ? /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
      index: 0,
      primary: true
    }, mapProps)) : /*#__PURE__*/_react["default"].createElement(MapsLayout, {
      className: "plot-container-maps",
      mapState: newMapState
    }, splitMaps.map(function (settings, index) {
      return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
        key: index,
        index: index,
        primary: index === 1
      }, mapProps));
    }));
    return /*#__PURE__*/_react["default"].createElement(StyledPlotContainer, {
      className: "export-map-instance"
    }, /*#__PURE__*/_react["default"].createElement(StyledMapContainer, {
      ref: plottingAreaRef,
      width: size.width,
      height: size.height
    }, /*#__PURE__*/_react["default"].createElement(_mapViewStateContext.MapViewStateContextProvider, {
      mapState: newMapState
    }, mapContainers)));
  }
  return _react["default"].memo(PlotContainer);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfcmVhY3RNYXBHbCIsIl9kZWJvdW5jZSIsIl9zcmMiLCJfc3JjMiIsIl9tYXBDb250YWluZXIiLCJfbWFwc0xheW91dCIsIl9tYXBWaWV3U3RhdGVDb250ZXh0IiwiX3NyYzMiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGVtcGxhdGVPYmplY3QyIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5MiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiQ0xBU1NfRklMVEVSIiwiRE9NX0ZJTFRFUl9GVU5DIiwibm9kZSIsImluY2x1ZGVzIiwiY2xhc3NOYW1lIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiT1VUX09GX1NDUkVFTl9QT1NJVElPTiIsIlBsb3RDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJNYXBzTGF5b3V0RmFjdG9yeSIsIlN0eWxlZFBsb3RDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsIlN0eWxlZE1hcENvbnRhaW5lciIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJNYXBDb250YWluZXIiLCJNYXBzTGF5b3V0IiwiUGxvdENvbnRhaW5lciIsIl9yZWYiLCJyYXRpbyIsInJlc29sdXRpb24iLCJfcmVmJGxlZ2VuZCIsImxlZ2VuZCIsImNlbnRlciIsImltYWdlU2l6ZSIsImVzY2FwZVhodG1sRm9yV2VicGFjayIsIm1hcEZpZWxkcyIsIl9yZWYkc3BsaXRNYXBzIiwic3BsaXRNYXBzIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsImFkZE5vdGlmaWNhdGlvbiIsImVuYWJsZUVycm9yTm90aWZpY2F0aW9uIiwibG9nb0NvbXBvbmVudCIsInBsb3R0aW5nQXJlYVJlZiIsInVzZVJlZiIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwidmlzU3RhdGUiLCJlZmZlY3RzIiwibWFwIiwiZWZmZWN0IiwiY2xvbmUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkyIiwicGxvdEVmZmVjdHMiLCJtYXBTdGF0ZSIsInNjYWxlIiwidXNlTWVtbyIsImNhbGN1bGF0ZWRTY2FsZSIsImdldFNjYWxlRnJvbUltYWdlU2l6ZSIsImltYWdlVyIsImltYWdlSCIsImlzU3BsaXQiLCJzY2FsZWRNYXBTdHlsZSIsIm1hcFN0eWxlIiwiYm90dG9tTWFwU3R5bGUiLCJzY2FsZU1hcFN0eWxlQnlSZXNvbHV0aW9uIiwidG9wTWFwU3R5bGUiLCJkZWJvdW5jZWRTY3JlZW5zaG90IiwiZGVib3VuY2UiLCJjdXJyZW50IiwiY29udmVydFRvUG5nIiwidGhlbiIsImVyciIsImV4cG9ydEltYWdlRXJyb3IiLCJyZXRyaWV2ZU5ld1NjcmVlbnNob3QiLCJ1c2VDYWxsYmFjayIsImRlYm91bmNlZE1hcFJlbmRlciIsImlzU3R5bGVMb2FkZWQiLCJvbk1hcFJlbmRlciIsInVzZUVmZmVjdCIsInByb2Nlc3NpbmciLCJ1bmRlZmluZWQiLCJfdXNlTWVtbyIsInNpemUiLCJuZXdNYXBTdGF0ZSIsImJhc2VNYXBTdGF0ZSIsInpvb20iLCJNYXRoIiwibG9nMiIsInJlbmRlcmVkTGF5ZXJzIiwibGF5ZXJzIiwibGF5ZXIiLCJpZHgiLCJpZCIsIkdFT0NPREVSX0xBWUVSX0lEIiwic2hvdWxkUmVuZGVyTGF5ZXIiLCJsYXllckRhdGEiLCJib3VuZHMiLCJmaW5kTWFwQm91bmRzIiwiY2VudGVyQW5kWm9vbSIsImdldENlbnRlckFuZFpvb21Gcm9tQm91bmRzIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsIm1hcFByb3BzIiwiX21hcEZpZWxkcyRtYXBDb250cm9sIiwibWFwQ29udHJvbHMiLCJtYXBMZWdlbmQiLCJzaG93IiwiQm9vbGVhbiIsImFjdGl2ZSIsInNldHRpbmdzIiwiTWFwQ29tcG9uZW50IiwiTWFwIiwiaXNFeHBvcnQiLCJkZWNrR2xQcm9wcyIsImdsT3B0aW9ucyIsInByZXNlcnZlRHJhd2luZ0J1ZmZlciIsInVzZURldmljZVBpeGVscyIsIm1hcENvbnRhaW5lcnMiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMyIiwiaW5kZXgiLCJwcmltYXJ5Iiwia2V5IiwicmVmIiwiTWFwVmlld1N0YXRlQ29udGV4dFByb3ZpZGVyIiwiUmVhY3QiLCJtZW1vIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvc3JjL3Bsb3QtY29udGFpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG4vLyBsaWJyYXJpZXNcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQge1xuICBleHBvcnRJbWFnZUVycm9yLFxuICBzY2FsZU1hcFN0eWxlQnlSZXNvbHV0aW9uLFxuICBnZXRDZW50ZXJBbmRab29tRnJvbUJvdW5kcyxcbiAgY29udmVydFRvUG5nLFxuICBnZXRTY2FsZUZyb21JbWFnZVNpemVcbn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQgeyBmaW5kTWFwQm91bmRzIH0gZnJvbSAnQGtlcGxlci5nbC9yZWR1Y2Vycyc7XG5pbXBvcnQgTWFwQ29udGFpbmVyRmFjdG9yeSBmcm9tICcuL21hcC1jb250YWluZXInO1xuaW1wb3J0IE1hcHNMYXlvdXRGYWN0b3J5IGZyb20gJy4vbWFwcy1sYXlvdXQnO1xuaW1wb3J0IHsgTWFwVmlld1N0YXRlQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi9tYXAtdmlldy1zdGF0ZS1jb250ZXh0JztcblxuaW1wb3J0IHsgR0VPQ09ERVJfTEFZRVJfSUQgfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFZmZlY3QsIFNwbGl0TWFwLCBFeHBvcnRJbWFnZSB9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtcbiAgQWN0aW9uSGFuZGxlcixcbiAgYWRkTm90aWZpY2F0aW9uLFxuICBzZXRFeHBvcnRJbWFnZURhdGFVcmksXG4gIHNldEV4cG9ydEltYWdlRXJyb3IsXG4gIHNldEV4cG9ydEltYWdlU2V0dGluZ1xufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuaW1wb3J0IHsgbWFwRmllbGRzU2VsZWN0b3IgfSBmcm9tICcuL2tlcGxlci1nbCc7XG5cbmNvbnN0IENMQVNTX0ZJTFRFUiA9IFtcbiAgJ21hcGxpYnJlZ2wtY29udHJvbC1jb250YWluZXInLFxuICAnbWFwYm94Z2wtY29udHJvbC1jb250YWluZXInLFxuICAnYXR0cml0aW9uLWxpbmsnLFxuICAnYXR0cml0aW9uLWxvZ28nLFxuICAnbWFwLWNvbnRyb2xfX3BhbmVsLXNwbGl0LXZpZXdwb3J0LXRvb2xzJ1xuXTtcbmNvbnN0IERPTV9GSUxURVJfRlVOQyA9IG5vZGUgPT4ge1xuICAvLyBFeGNsdWRlIGVsZW1lbnRzIHdpdGggZmlsdGVyZWQgY2xhc3MgbmFtZXNcbiAgaWYgKENMQVNTX0ZJTFRFUi5pbmNsdWRlcyhub2RlLmNsYXNzTmFtZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gRXhjbHVkZSBkYXRhdml6LXRvb2wtaGVhZGVyIGN1c3RvbSBlbGVtZW50XG4gIGlmIChub2RlLnRhZ05hbWUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkYXRhdml6LXRvb2wtaGVhZGVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBPVVRfT0ZfU0NSRUVOX1BPU0lUSU9OID0gLTk5OTk7XG5cblBsb3RDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwQ29udGFpbmVyRmFjdG9yeSwgTWFwc0xheW91dEZhY3RvcnldO1xuXG4vLyBSZW1vdmUgbWFwYm94IGxvZ28gaW4gZXhwb3J0ZWQgbWFwLCBiZWNhdXNlIGl0IGNvbnRhaW5zIG5vbi1hc2NpaSBjaGFyYWN0ZXJzXG4vLyBSZW1vdmUgc3BsaXQgdmlld3BvcnQgVUkgY29udHJvbHMgZnJvbSBleHBvcnRlZCBpbWFnZXMgd2hlbiB0aGUgbGVnZW5kIGlzIHNob3duXG4vLyBIaWRlIGRhdGF2aXotdG9vbC1oZWFkZXIgZHVyaW5nIHNjcmVlbnNob3QgZ2VuZXJhdGlvblxuY29uc3QgU3R5bGVkUGxvdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC5tYXBsaWJyZWdsLWN0cmwtYm90dG9tLWxlZnQsXG4gIC5tYXBsaWJyZWdsLWN0cmwtYm90dG9tLXJpZ2h0LFxuICAubWFwbGlicmUtYXR0cmlidXRpb24tY29udGFpbmVyLFxuICAubWFwYm94Z2wtY3RybC1ib3R0b20tbGVmdCxcbiAgLm1hcGJveGdsLWN0cmwtYm90dG9tLXJpZ2h0LFxuICAubWFwYm94LWF0dHJpYnV0aW9uLWNvbnRhaW5lcixcbiAgLm1hcC1jb250cm9sX19wYW5lbC1zcGxpdC12aWV3cG9ydC10b29scyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGRhdGF2aXotdG9vbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAke09VVF9PRl9TQ1JFRU5fUE9TSVRJT059cHg7XG4gIGxlZnQ6ICR7T1VUX09GX1NDUkVFTl9QT1NJVElPTn1weDtcbmA7XG5cbmludGVyZmFjZSBTdHlsZWRNYXBDb250YWluZXJQcm9wcyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRhaW5lciA9IHN0eWxlZC5kaXY8U3R5bGVkTWFwQ29udGFpbmVyUHJvcHM+YFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmludGVyZmFjZSBQbG90Q29udGFpbmVyUHJvcHMge1xuICAvLyBJbWFnZSBleHBvcnQgc2V0dGluZ3NcbiAgcmF0aW8/OiBzdHJpbmc7XG4gIHJlc29sdXRpb24/OiBzdHJpbmc7XG4gIGxlZ2VuZD86IGJvb2xlYW47XG4gIGNlbnRlcj86IGJvb2xlYW47XG4gIGltYWdlU2l6ZTogRXhwb3J0SW1hZ2VbJ2ltYWdlU2l6ZSddO1xuICBlc2NhcGVYaHRtbEZvcldlYnBhY2s/OiBib29sZWFuO1xuXG4gIC8vIE1hcCBzZXR0aW5nc1xuICBtYXBGaWVsZHM6IFJldHVyblR5cGU8dHlwZW9mIG1hcEZpZWxkc1NlbGVjdG9yPjtcbiAgc3BsaXRNYXBzPzogU3BsaXRNYXBbXTtcblxuICAvLyBDYWxsYmFja3NcbiAgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nOiB0eXBlb2Ygc2V0RXhwb3J0SW1hZ2VTZXR0aW5nO1xuICBzZXRFeHBvcnRJbWFnZURhdGFVcmk6IHR5cGVvZiBzZXRFeHBvcnRJbWFnZURhdGFVcmk7XG4gIHNldEV4cG9ydEltYWdlRXJyb3I6IHR5cGVvZiBzZXRFeHBvcnRJbWFnZUVycm9yO1xuICBhZGROb3RpZmljYXRpb246IEFjdGlvbkhhbmRsZXI8dHlwZW9mIGFkZE5vdGlmaWNhdGlvbj47XG5cbiAgLy8gRmxhZ3NcbiAgZW5hYmxlRXJyb3JOb3RpZmljYXRpb24/OiBib29sZWFuO1xuXG4gIC8vIE9wdGlvbmFsOiBvdmVycmlkZSBsZWdlbmQgaGVhZGVyIGxvZ28gZHVyaW5nIGV4cG9ydFxuICBsb2dvQ29tcG9uZW50PzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbG90Q29udGFpbmVyRmFjdG9yeShcbiAgTWFwQ29udGFpbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBNYXBDb250YWluZXJGYWN0b3J5PixcbiAgTWFwc0xheW91dDogUmV0dXJuVHlwZTx0eXBlb2YgTWFwc0xheW91dEZhY3Rvcnk+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFBsb3RDb250YWluZXJQcm9wcz4ge1xuICBmdW5jdGlvbiBQbG90Q29udGFpbmVyKHtcbiAgICAvLyBJbWFnZSBleHBvcnQgc2V0dGluZ3NcbiAgICByYXRpbyxcbiAgICByZXNvbHV0aW9uLFxuICAgIGxlZ2VuZCA9IGZhbHNlLFxuICAgIGNlbnRlcixcbiAgICBpbWFnZVNpemUsXG4gICAgZXNjYXBlWGh0bWxGb3JXZWJwYWNrLFxuXG4gICAgLy8gTWFwIHNldHRpbmdzXG4gICAgbWFwRmllbGRzLFxuICAgIHNwbGl0TWFwcyA9IFtdLFxuXG4gICAgLy8gQ2FsbGJhY2tzXG4gICAgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nLFxuICAgIHNldEV4cG9ydEltYWdlRGF0YVVyaSxcbiAgICBzZXRFeHBvcnRJbWFnZUVycm9yLFxuICAgIGFkZE5vdGlmaWNhdGlvbixcblxuICAgIC8vIEZsYWdzXG4gICAgZW5hYmxlRXJyb3JOb3RpZmljYXRpb24sXG4gICAgbG9nb0NvbXBvbmVudFxuICB9OiBQbG90Q29udGFpbmVyUHJvcHMpIHtcbiAgICBjb25zdCBwbG90dGluZ0FyZWFSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IFtwbG90RWZmZWN0c10gPSB1c2VTdGF0ZTxFZmZlY3RbXT4oKCkgPT5cbiAgICAgIG1hcEZpZWxkcy52aXNTdGF0ZS5lZmZlY3RzLm1hcChlZmZlY3QgPT4gZWZmZWN0LmNsb25lKCkpXG4gICAgKTtcblxuICAgIGNvbnN0IHsgbWFwU3RhdGUgfSA9IG1hcEZpZWxkcztcblxuICAgIC8vIE1lbW9pemUgdGhlIHNjYWxlIGNhbGN1bGF0aW9uXG4gICAgY29uc3Qgc2NhbGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGlmIChpbWFnZVNpemUuc2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlU2l6ZS5zY2FsZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FsY3VsYXRlZFNjYWxlID0gZ2V0U2NhbGVGcm9tSW1hZ2VTaXplKFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VXLFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VILFxuICAgICAgICBtYXBTdGF0ZS53aWR0aCAqIChtYXBTdGF0ZS5pc1NwbGl0ID8gMiA6IDEpLFxuICAgICAgICBtYXBTdGF0ZS5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBjYWxjdWxhdGVkU2NhbGUgPiAwID8gY2FsY3VsYXRlZFNjYWxlIDogMTtcbiAgICB9LCBbXG4gICAgICBpbWFnZVNpemUuc2NhbGUsXG4gICAgICBpbWFnZVNpemUuaW1hZ2VXLFxuICAgICAgaW1hZ2VTaXplLmltYWdlSCxcbiAgICAgIG1hcFN0YXRlLndpZHRoLFxuICAgICAgbWFwU3RhdGUuaGVpZ2h0LFxuICAgICAgbWFwU3RhdGUuaXNTcGxpdFxuICAgIF0pO1xuXG4gICAgLy8gTWVtb2l6ZSB0aGUgbWFwIHN0eWxlXG4gICAgY29uc3Qgc2NhbGVkTWFwU3R5bGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcFN0eWxlID0gbWFwRmllbGRzLm1hcFN0eWxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubWFwU3R5bGUsXG4gICAgICAgIGJvdHRvbU1hcFN0eWxlOiBzY2FsZU1hcFN0eWxlQnlSZXNvbHV0aW9uKG1hcFN0eWxlLmJvdHRvbU1hcFN0eWxlLCBzY2FsZSksXG4gICAgICAgIHRvcE1hcFN0eWxlOiBzY2FsZU1hcFN0eWxlQnlSZXNvbHV0aW9uKG1hcFN0eWxlLnRvcE1hcFN0eWxlLCBzY2FsZSlcbiAgICAgIH07XG4gICAgfSwgW21hcEZpZWxkcy5tYXBTdHlsZSwgc2NhbGVdKTtcblxuICAgIC8vIE1lbW9pemUgdGhlIHJldHJpZXZlTmV3U2NyZWVuc2hvdCBjYWxsYmFja1xuICAgIGNvbnN0IGRlYm91bmNlZFNjcmVlbnNob3QgPSB1c2VNZW1vKFxuICAgICAgKCkgPT5cbiAgICAgICAgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgIGlmIChwbG90dGluZ0FyZWFSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY29udmVydFRvUG5nKHBsb3R0aW5nQXJlYVJlZi5jdXJyZW50LCB7XG4gICAgICAgICAgICAgIGZpbHRlcjogRE9NX0ZJTFRFUl9GVU5DLFxuICAgICAgICAgICAgICB3aWR0aDogaW1hZ2VTaXplLmltYWdlVyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZVNpemUuaW1hZ2VILFxuICAgICAgICAgICAgICBlc2NhcGVYaHRtbEZvcldlYnBhY2tcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHNldEV4cG9ydEltYWdlRGF0YVVyaSlcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIGlmIChlbmFibGVFcnJvck5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgICAgYWRkTm90aWZpY2F0aW9uKGV4cG9ydEltYWdlRXJyb3IoeyBlcnIgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApLFxuICAgICAgW1xuICAgICAgICBpbWFnZVNpemUuaW1hZ2VXLFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VILFxuICAgICAgICBlc2NhcGVYaHRtbEZvcldlYnBhY2ssXG4gICAgICAgIHNldEV4cG9ydEltYWdlRGF0YVVyaSxcbiAgICAgICAgc2V0RXhwb3J0SW1hZ2VFcnJvcixcbiAgICAgICAgZW5hYmxlRXJyb3JOb3RpZmljYXRpb24sXG4gICAgICAgIGFkZE5vdGlmaWNhdGlvblxuICAgICAgXVxuICAgICk7XG5cbiAgICBjb25zdCByZXRyaWV2ZU5ld1NjcmVlbnNob3QgPSB1c2VDYWxsYmFjayhkZWJvdW5jZWRTY3JlZW5zaG90LCBbZGVib3VuY2VkU2NyZWVuc2hvdF0pO1xuXG4gICAgLy8gTWVtb2l6ZSB0aGUgb25NYXBSZW5kZXIgY2FsbGJhY2tcbiAgICBjb25zdCBkZWJvdW5jZWRNYXBSZW5kZXIgPSB1c2VNZW1vKFxuICAgICAgKCkgPT5cbiAgICAgICAgZGVib3VuY2UobWFwID0+IHtcbiAgICAgICAgICBpZiAobWFwLmlzU3R5bGVMb2FkZWQoKSkge1xuICAgICAgICAgICAgcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApLFxuICAgICAgW3JldHJpZXZlTmV3U2NyZWVuc2hvdF1cbiAgICApO1xuXG4gICAgY29uc3Qgb25NYXBSZW5kZXIgPSB1c2VDYWxsYmFjayhkZWJvdW5jZWRNYXBSZW5kZXIsIFtkZWJvdW5jZWRNYXBSZW5kZXJdKTtcblxuICAgIC8vIEluaXRpYWwgc2V0dXAgZWZmZWN0XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldEV4cG9ydEltYWdlU2V0dGluZyh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG4gICAgfSwgW3NldEV4cG9ydEltYWdlU2V0dGluZ10pO1xuXG4gICAgLy8gU2NyZWVuc2hvdCB1cGRhdGUgZWZmZWN0XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChyYXRpbyAhPT0gdW5kZWZpbmVkIHx8IHJlc29sdXRpb24gIT09IHVuZGVmaW5lZCB8fCBsZWdlbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZXRFeHBvcnRJbWFnZVNldHRpbmcoeyBwcm9jZXNzaW5nOiB0cnVlIH0pO1xuICAgICAgICByZXRyaWV2ZU5ld1NjcmVlbnNob3QoKTtcbiAgICAgIH1cbiAgICB9LCBbcmF0aW8sIHJlc29sdXRpb24sIGxlZ2VuZCwgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nLCByZXRyaWV2ZU5ld1NjcmVlbnNob3RdKTtcblxuICAgIC8vIE1lbW9pemUgc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICBjb25zdCB7IHNpemUsIHdpZHRoLCBoZWlnaHQgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IGltYWdlU2l6ZS5pbWFnZVcgfHwgMSxcbiAgICAgICAgaGVpZ2h0OiBpbWFnZVNpemUuaW1hZ2VIIHx8IDFcbiAgICAgIH07XG4gICAgICBjb25zdCBpc1NwbGl0ID0gc3BsaXRNYXBzLmxlbmd0aCA+IDE7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaXplLFxuICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCAvIChpc1NwbGl0ID8gMiA6IDEpLFxuICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICB9O1xuICAgIH0sIFtpbWFnZVNpemUuaW1hZ2VXLCBpbWFnZVNpemUuaW1hZ2VILCBzcGxpdE1hcHMubGVuZ3RoXSk7XG5cbiAgICAvLyBNZW1vaXplIG1hcCBzdGF0ZVxuICAgIGNvbnN0IG5ld01hcFN0YXRlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICBjb25zdCBiYXNlTWFwU3RhdGUgPSB7XG4gICAgICAgIC4uLm1hcFN0YXRlLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB6b29tOiBtYXBTdGF0ZS56b29tICsgKE1hdGgubG9nMihzY2FsZSkgfHwgMClcbiAgICAgIH07XG5cbiAgICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRMYXllcnMgPSBtYXBGaWVsZHMudmlzU3RhdGUubGF5ZXJzLmZpbHRlcihcbiAgICAgICAgICAobGF5ZXIsIGlkeCkgPT5cbiAgICAgICAgICAgIGxheWVyLmlkICE9PSBHRU9DT0RFUl9MQVlFUl9JRCAmJlxuICAgICAgICAgICAgbGF5ZXIuc2hvdWxkUmVuZGVyTGF5ZXIobWFwRmllbGRzLnZpc1N0YXRlLmxheWVyRGF0YVtpZHhdKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBib3VuZHMgPSBmaW5kTWFwQm91bmRzKHJlbmRlcmVkTGF5ZXJzKTtcbiAgICAgICAgY29uc3QgY2VudGVyQW5kWm9vbSA9IGdldENlbnRlckFuZFpvb21Gcm9tQm91bmRzKGJvdW5kcywgeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgICAgICBpZiAoY2VudGVyQW5kWm9vbSkge1xuICAgICAgICAgIGNvbnN0IHpvb20gPSBOdW1iZXIuaXNGaW5pdGUoY2VudGVyQW5kWm9vbS56b29tKSA/IGNlbnRlckFuZFpvb20uem9vbSA6IG1hcFN0YXRlLnpvb207XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmJhc2VNYXBTdGF0ZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyQW5kWm9vbS5jZW50ZXJbMF0sXG4gICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyQW5kWm9vbS5jZW50ZXJbMV0sXG4gICAgICAgICAgICB6b29tOiB6b29tICsgTnVtYmVyKE1hdGgubG9nMihzY2FsZSkgfHwgMClcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiYXNlTWFwU3RhdGU7XG4gICAgfSwgW21hcFN0YXRlLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZSwgY2VudGVyLCBtYXBGaWVsZHMudmlzU3RhdGVdKTtcblxuICAgIC8vIE1lbW9pemUgbWFwIHByb3BzXG4gICAgY29uc3QgbWFwUHJvcHMgPSB1c2VNZW1vKFxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgLi4ubWFwRmllbGRzLFxuICAgICAgICBtYXBTdHlsZTogc2NhbGVkTWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlOiBuZXdNYXBTdGF0ZSxcbiAgICAgICAgbWFwQ29udHJvbHM6IHtcbiAgICAgICAgICBtYXBMZWdlbmQ6IHtcbiAgICAgICAgICAgIHNob3c6IEJvb2xlYW4obGVnZW5kKSxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNldHRpbmdzOiBtYXBGaWVsZHMubWFwQ29udHJvbHM/Lm1hcExlZ2VuZD8uc2V0dGluZ3NcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIE1hcENvbXBvbmVudDogTWFwLFxuICAgICAgICBvbk1hcFJlbmRlcixcbiAgICAgICAgaXNFeHBvcnQ6IHRydWUsXG4gICAgICAgIGRlY2tHbFByb3BzOiB7XG4gICAgICAgICAgLi4ubWFwRmllbGRzLmRlY2tHbFByb3BzLFxuICAgICAgICAgIGdsT3B0aW9uczoge1xuICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgdXNlRGV2aWNlUGl4ZWxzOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmlzU3RhdGU6IHtcbiAgICAgICAgICAuLi5tYXBGaWVsZHMudmlzU3RhdGUsXG4gICAgICAgICAgZWZmZWN0czogcGxvdEVmZmVjdHNcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYWxsb3cgb3ZlcnJpZGluZyB0aGUgbGVnZW5kIHBhbmVsIGxvZ28gaW4gZXhwb3J0XG4gICAgICAgIGxvZ29Db21wb25lbnRcbiAgICAgIH0pLFxuICAgICAgW21hcEZpZWxkcywgc2NhbGVkTWFwU3R5bGUsIG5ld01hcFN0YXRlLCBsZWdlbmQsIG9uTWFwUmVuZGVyLCBwbG90RWZmZWN0cywgbG9nb0NvbXBvbmVudF1cbiAgICApO1xuXG4gICAgY29uc3QgaXNTcGxpdCA9IHNwbGl0TWFwcy5sZW5ndGggPiAxO1xuICAgIGNvbnN0IG1hcENvbnRhaW5lcnMgPSAhaXNTcGxpdCA/IChcbiAgICAgIDxNYXBDb250YWluZXIgaW5kZXg9ezB9IHByaW1hcnk9e3RydWV9IHsuLi5tYXBQcm9wc30gLz5cbiAgICApIDogKFxuICAgICAgPE1hcHNMYXlvdXQgY2xhc3NOYW1lPVwicGxvdC1jb250YWluZXItbWFwc1wiIG1hcFN0YXRlPXtuZXdNYXBTdGF0ZX0+XG4gICAgICAgIHtzcGxpdE1hcHMubWFwKChzZXR0aW5ncywgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWFwQ29udGFpbmVyIGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gcHJpbWFyeT17aW5kZXggPT09IDF9IHsuLi5tYXBQcm9wc30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L01hcHNMYXlvdXQ+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkUGxvdENvbnRhaW5lciBjbGFzc05hbWU9XCJleHBvcnQtbWFwLWluc3RhbmNlXCI+XG4gICAgICAgIDxTdHlsZWRNYXBDb250YWluZXIgcmVmPXtwbG90dGluZ0FyZWFSZWZ9IHdpZHRoPXtzaXplLndpZHRofSBoZWlnaHQ9e3NpemUuaGVpZ2h0fT5cbiAgICAgICAgICA8TWFwVmlld1N0YXRlQ29udGV4dFByb3ZpZGVyIG1hcFN0YXRlPXtuZXdNYXBTdGF0ZX0+XG4gICAgICAgICAgICB7bWFwQ29udGFpbmVyc31cbiAgICAgICAgICA8L01hcFZpZXdTdGF0ZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPC9TdHlsZWRNYXBDb250YWluZXI+XG4gICAgICA8L1N0eWxlZFBsb3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5tZW1vKFBsb3RDb250YWluZXIpO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxpQkFBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO0FBQ0EsSUFBQUksU0FBQSxHQUFBRixzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUssSUFBQSxHQUFBTCxPQUFBO0FBT0EsSUFBQU0sS0FBQSxHQUFBTixPQUFBO0FBQ0EsSUFBQU8sYUFBQSxHQUFBTCxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQVEsV0FBQSxHQUFBTixzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQVMsb0JBQUEsR0FBQVQsT0FBQTtBQUVBLElBQUFVLEtBQUEsR0FBQVYsT0FBQTtBQUF5RCxJQUFBVyxlQUFBLEVBQUFDLGdCQUFBLEVBcEJ6RDtBQUNBO0FBRUE7QUFBQSxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQWYsd0JBQUFlLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxD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