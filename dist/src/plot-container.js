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
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/node_modules/react"));
var _styledComponents = _interopRequireDefault(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/node_modules/styled-components"));
var _reactMapGl = require("react-map-gl");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _src = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/utils/src");
var _src2 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/reducers/src");
var _mapContainer = _interopRequireDefault(require("./map-container"));
var _mapsLayout = _interopRequireDefault(require("./maps-layout"));
var _mapViewStateContext = require("./map-view-state-context");
var _src3 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/constants/src");
var _templateObject, _templateObject2; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
// libraries
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CLASS_FILTER = ['maplibregl-control-container', 'mapboxgl-control-container', 'attrition-link', 'attrition-logo', 'map-control__panel-split-viewport-tools'];
var DOM_FILTER_FUNC = function DOM_FILTER_FUNC(node) {
  return !CLASS_FILTER.includes(node.className);
};
var OUT_OF_SCREEN_POSITION = -9999;
PlotContainerFactory.deps = [_mapContainer["default"], _mapsLayout["default"]];

// Remove mapbox logo in exported map, because it contains non-ascii characters
// Remove split viewport UI controls from exported images when the legend is shown
var StyledPlotContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .maplibregl-ctrl-bottom-left,\n  .maplibregl-ctrl-bottom-right,\n  .maplibre-attribution-container,\n  .mapboxgl-ctrl-bottom-left,\n  .mapboxgl-ctrl-bottom-right,\n  .mapbox-attribution-container,\n  .map-control__panel-split-viewport-tools {\n    display: none;\n  }\n\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"])), OUT_OF_SCREEN_POSITION, OUT_OF_SCREEN_POSITION);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfcmVhY3RNYXBHbCIsIl9kZWJvdW5jZSIsIl9zcmMiLCJfc3JjMiIsIl9tYXBDb250YWluZXIiLCJfbWFwc0xheW91dCIsIl9tYXBWaWV3U3RhdGVDb250ZXh0IiwiX3NyYzMiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGVtcGxhdGVPYmplY3QyIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5MiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiQ0xBU1NfRklMVEVSIiwiRE9NX0ZJTFRFUl9GVU5DIiwibm9kZSIsImluY2x1ZGVzIiwiY2xhc3NOYW1lIiwiT1VUX09GX1NDUkVFTl9QT1NJVElPTiIsIlBsb3RDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJNYXBzTGF5b3V0RmFjdG9yeSIsIlN0eWxlZFBsb3RDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsIlN0eWxlZE1hcENvbnRhaW5lciIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJNYXBDb250YWluZXIiLCJNYXBzTGF5b3V0IiwiUGxvdENvbnRhaW5lciIsIl9yZWYiLCJyYXRpbyIsInJlc29sdXRpb24iLCJfcmVmJGxlZ2VuZCIsImxlZ2VuZCIsImNlbnRlciIsImltYWdlU2l6ZSIsImVzY2FwZVhodG1sRm9yV2VicGFjayIsIm1hcEZpZWxkcyIsIl9yZWYkc3BsaXRNYXBzIiwic3BsaXRNYXBzIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsImFkZE5vdGlmaWNhdGlvbiIsImVuYWJsZUVycm9yTm90aWZpY2F0aW9uIiwibG9nb0NvbXBvbmVudCIsInBsb3R0aW5nQXJlYVJlZiIsInVzZVJlZiIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwidmlzU3RhdGUiLCJlZmZlY3RzIiwibWFwIiwiZWZmZWN0IiwiY2xvbmUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkyIiwicGxvdEVmZmVjdHMiLCJtYXBTdGF0ZSIsInNjYWxlIiwidXNlTWVtbyIsImNhbGN1bGF0ZWRTY2FsZSIsImdldFNjYWxlRnJvbUltYWdlU2l6ZSIsImltYWdlVyIsImltYWdlSCIsImlzU3BsaXQiLCJzY2FsZWRNYXBTdHlsZSIsIm1hcFN0eWxlIiwiYm90dG9tTWFwU3R5bGUiLCJzY2FsZU1hcFN0eWxlQnlSZXNvbHV0aW9uIiwidG9wTWFwU3R5bGUiLCJkZWJvdW5jZWRTY3JlZW5zaG90IiwiZGVib3VuY2UiLCJjdXJyZW50IiwiY29udmVydFRvUG5nIiwidGhlbiIsImVyciIsImV4cG9ydEltYWdlRXJyb3IiLCJyZXRyaWV2ZU5ld1NjcmVlbnNob3QiLCJ1c2VDYWxsYmFjayIsImRlYm91bmNlZE1hcFJlbmRlciIsImlzU3R5bGVMb2FkZWQiLCJvbk1hcFJlbmRlciIsInVzZUVmZmVjdCIsInByb2Nlc3NpbmciLCJ1bmRlZmluZWQiLCJfdXNlTWVtbyIsInNpemUiLCJuZXdNYXBTdGF0ZSIsImJhc2VNYXBTdGF0ZSIsInpvb20iLCJNYXRoIiwibG9nMiIsInJlbmRlcmVkTGF5ZXJzIiwibGF5ZXJzIiwibGF5ZXIiLCJpZHgiLCJpZCIsIkdFT0NPREVSX0xBWUVSX0lEIiwic2hvdWxkUmVuZGVyTGF5ZXIiLCJsYXllckRhdGEiLCJib3VuZHMiLCJmaW5kTWFwQm91bmRzIiwiY2VudGVyQW5kWm9vbSIsImdldENlbnRlckFuZFpvb21Gcm9tQm91bmRzIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsIm1hcFByb3BzIiwiX21hcEZpZWxkcyRtYXBDb250cm9sIiwibWFwQ29udHJvbHMiLCJtYXBMZWdlbmQiLCJzaG93IiwiQm9vbGVhbiIsImFjdGl2ZSIsInNldHRpbmdzIiwiTWFwQ29tcG9uZW50IiwiTWFwIiwiaXNFeHBvcnQiLCJkZWNrR2xQcm9wcyIsImdsT3B0aW9ucyIsInByZXNlcnZlRHJhd2luZ0J1ZmZlciIsInVzZURldmljZVBpeGVscyIsIm1hcENvbnRhaW5lcnMiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMyIiwiaW5kZXgiLCJwcmltYXJ5Iiwia2V5IiwicmVmIiwiTWFwVmlld1N0YXRlQ29udGV4dFByb3ZpZGVyIiwiUmVhY3QiLCJtZW1vIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvc3JjL3Bsb3QtY29udGFpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG4vLyBsaWJyYXJpZXNcbmltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtNYXB9IGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCB7XG4gIGV4cG9ydEltYWdlRXJyb3IsXG4gIHNjYWxlTWFwU3R5bGVCeVJlc29sdXRpb24sXG4gIGdldENlbnRlckFuZFpvb21Gcm9tQm91bmRzLFxuICBjb252ZXJ0VG9QbmcsXG4gIGdldFNjYWxlRnJvbUltYWdlU2l6ZVxufSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7ZmluZE1hcEJvdW5kc30gZnJvbSAnQGtlcGxlci5nbC9yZWR1Y2Vycyc7XG5pbXBvcnQgTWFwQ29udGFpbmVyRmFjdG9yeSBmcm9tICcuL21hcC1jb250YWluZXInO1xuaW1wb3J0IE1hcHNMYXlvdXRGYWN0b3J5IGZyb20gJy4vbWFwcy1sYXlvdXQnO1xuaW1wb3J0IHtNYXBWaWV3U3RhdGVDb250ZXh0UHJvdmlkZXJ9IGZyb20gJy4vbWFwLXZpZXctc3RhdGUtY29udGV4dCc7XG5cbmltcG9ydCB7R0VPQ09ERVJfTEFZRVJfSUR9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7RWZmZWN0LCBTcGxpdE1hcCwgRXhwb3J0SW1hZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtcbiAgQWN0aW9uSGFuZGxlcixcbiAgYWRkTm90aWZpY2F0aW9uLFxuICBzZXRFeHBvcnRJbWFnZURhdGFVcmksXG4gIHNldEV4cG9ydEltYWdlRXJyb3IsXG4gIHNldEV4cG9ydEltYWdlU2V0dGluZ1xufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuaW1wb3J0IHttYXBGaWVsZHNTZWxlY3Rvcn0gZnJvbSAnLi9rZXBsZXItZ2wnO1xuXG5jb25zdCBDTEFTU19GSUxURVIgPSBbXG4gICdtYXBsaWJyZWdsLWNvbnRyb2wtY29udGFpbmVyJyxcbiAgJ21hcGJveGdsLWNvbnRyb2wtY29udGFpbmVyJyxcbiAgJ2F0dHJpdGlvbi1saW5rJyxcbiAgJ2F0dHJpdGlvbi1sb2dvJyxcbiAgJ21hcC1jb250cm9sX19wYW5lbC1zcGxpdC12aWV3cG9ydC10b29scydcbl07XG5jb25zdCBET01fRklMVEVSX0ZVTkMgPSBub2RlID0+ICFDTEFTU19GSUxURVIuaW5jbHVkZXMobm9kZS5jbGFzc05hbWUpO1xuY29uc3QgT1VUX09GX1NDUkVFTl9QT1NJVElPTiA9IC05OTk5O1xuXG5QbG90Q29udGFpbmVyRmFjdG9yeS5kZXBzID0gW01hcENvbnRhaW5lckZhY3RvcnksIE1hcHNMYXlvdXRGYWN0b3J5XTtcblxuLy8gUmVtb3ZlIG1hcGJveCBsb2dvIGluIGV4cG9ydGVkIG1hcCwgYmVjYXVzZSBpdCBjb250YWlucyBub24tYXNjaWkgY2hhcmFjdGVyc1xuLy8gUmVtb3ZlIHNwbGl0IHZpZXdwb3J0IFVJIGNvbnRyb2xzIGZyb20gZXhwb3J0ZWQgaW1hZ2VzIHdoZW4gdGhlIGxlZ2VuZCBpcyBzaG93blxuY29uc3QgU3R5bGVkUGxvdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC5tYXBsaWJyZWdsLWN0cmwtYm90dG9tLWxlZnQsXG4gIC5tYXBsaWJyZWdsLWN0cmwtYm90dG9tLXJpZ2h0LFxuICAubWFwbGlicmUtYXR0cmlidXRpb24tY29udGFpbmVyLFxuICAubWFwYm94Z2wtY3RybC1ib3R0b20tbGVmdCxcbiAgLm1hcGJveGdsLWN0cmwtYm90dG9tLXJpZ2h0LFxuICAubWFwYm94LWF0dHJpYnV0aW9uLWNvbnRhaW5lcixcbiAgLm1hcC1jb250cm9sX19wYW5lbC1zcGxpdC12aWV3cG9ydC10b29scyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAke09VVF9PRl9TQ1JFRU5fUE9TSVRJT059cHg7XG4gIGxlZnQ6ICR7T1VUX09GX1NDUkVFTl9QT1NJVElPTn1weDtcbmA7XG5cbmludGVyZmFjZSBTdHlsZWRNYXBDb250YWluZXJQcm9wcyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRhaW5lciA9IHN0eWxlZC5kaXY8U3R5bGVkTWFwQ29udGFpbmVyUHJvcHM+YFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmludGVyZmFjZSBQbG90Q29udGFpbmVyUHJvcHMge1xuICAvLyBJbWFnZSBleHBvcnQgc2V0dGluZ3NcbiAgcmF0aW8/OiBzdHJpbmc7XG4gIHJlc29sdXRpb24/OiBzdHJpbmc7XG4gIGxlZ2VuZD86IGJvb2xlYW47XG4gIGNlbnRlcj86IGJvb2xlYW47XG4gIGltYWdlU2l6ZTogRXhwb3J0SW1hZ2VbJ2ltYWdlU2l6ZSddO1xuICBlc2NhcGVYaHRtbEZvcldlYnBhY2s/OiBib29sZWFuO1xuXG4gIC8vIE1hcCBzZXR0aW5nc1xuICBtYXBGaWVsZHM6IFJldHVyblR5cGU8dHlwZW9mIG1hcEZpZWxkc1NlbGVjdG9yPjtcbiAgc3BsaXRNYXBzPzogU3BsaXRNYXBbXTtcblxuICAvLyBDYWxsYmFja3NcbiAgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nOiB0eXBlb2Ygc2V0RXhwb3J0SW1hZ2VTZXR0aW5nO1xuICBzZXRFeHBvcnRJbWFnZURhdGFVcmk6IHR5cGVvZiBzZXRFeHBvcnRJbWFnZURhdGFVcmk7XG4gIHNldEV4cG9ydEltYWdlRXJyb3I6IHR5cGVvZiBzZXRFeHBvcnRJbWFnZUVycm9yO1xuICBhZGROb3RpZmljYXRpb246IEFjdGlvbkhhbmRsZXI8dHlwZW9mIGFkZE5vdGlmaWNhdGlvbj47XG5cbiAgLy8gRmxhZ3NcbiAgZW5hYmxlRXJyb3JOb3RpZmljYXRpb24/OiBib29sZWFuO1xuXG4gIC8vIE9wdGlvbmFsOiBvdmVycmlkZSBsZWdlbmQgaGVhZGVyIGxvZ28gZHVyaW5nIGV4cG9ydFxuICBsb2dvQ29tcG9uZW50PzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbG90Q29udGFpbmVyRmFjdG9yeShcbiAgTWFwQ29udGFpbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBNYXBDb250YWluZXJGYWN0b3J5PixcbiAgTWFwc0xheW91dDogUmV0dXJuVHlwZTx0eXBlb2YgTWFwc0xheW91dEZhY3Rvcnk+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFBsb3RDb250YWluZXJQcm9wcz4ge1xuICBmdW5jdGlvbiBQbG90Q29udGFpbmVyKHtcbiAgICAvLyBJbWFnZSBleHBvcnQgc2V0dGluZ3NcbiAgICByYXRpbyxcbiAgICByZXNvbHV0aW9uLFxuICAgIGxlZ2VuZCA9IGZhbHNlLFxuICAgIGNlbnRlcixcbiAgICBpbWFnZVNpemUsXG4gICAgZXNjYXBlWGh0bWxGb3JXZWJwYWNrLFxuXG4gICAgLy8gTWFwIHNldHRpbmdzXG4gICAgbWFwRmllbGRzLFxuICAgIHNwbGl0TWFwcyA9IFtdLFxuXG4gICAgLy8gQ2FsbGJhY2tzXG4gICAgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nLFxuICAgIHNldEV4cG9ydEltYWdlRGF0YVVyaSxcbiAgICBzZXRFeHBvcnRJbWFnZUVycm9yLFxuICAgIGFkZE5vdGlmaWNhdGlvbixcblxuICAgIC8vIEZsYWdzXG4gICAgZW5hYmxlRXJyb3JOb3RpZmljYXRpb24sXG4gICAgbG9nb0NvbXBvbmVudFxuICB9OiBQbG90Q29udGFpbmVyUHJvcHMpIHtcbiAgICBjb25zdCBwbG90dGluZ0FyZWFSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IFtwbG90RWZmZWN0c10gPSB1c2VTdGF0ZTxFZmZlY3RbXT4oKCkgPT5cbiAgICAgIG1hcEZpZWxkcy52aXNTdGF0ZS5lZmZlY3RzLm1hcChlZmZlY3QgPT4gZWZmZWN0LmNsb25lKCkpXG4gICAgKTtcblxuICAgIGNvbnN0IHttYXBTdGF0ZX0gPSBtYXBGaWVsZHM7XG5cbiAgICAvLyBNZW1vaXplIHRoZSBzY2FsZSBjYWxjdWxhdGlvblxuICAgIGNvbnN0IHNjYWxlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICBpZiAoaW1hZ2VTaXplLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZVNpemUuc2NhbGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRTY2FsZSA9IGdldFNjYWxlRnJvbUltYWdlU2l6ZShcbiAgICAgICAgaW1hZ2VTaXplLmltYWdlVyxcbiAgICAgICAgaW1hZ2VTaXplLmltYWdlSCxcbiAgICAgICAgbWFwU3RhdGUud2lkdGggKiAobWFwU3RhdGUuaXNTcGxpdCA/IDIgOiAxKSxcbiAgICAgICAgbWFwU3RhdGUuaGVpZ2h0XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gY2FsY3VsYXRlZFNjYWxlID4gMCA/IGNhbGN1bGF0ZWRTY2FsZSA6IDE7XG4gICAgfSwgW1xuICAgICAgaW1hZ2VTaXplLnNjYWxlLFxuICAgICAgaW1hZ2VTaXplLmltYWdlVyxcbiAgICAgIGltYWdlU2l6ZS5pbWFnZUgsXG4gICAgICBtYXBTdGF0ZS53aWR0aCxcbiAgICAgIG1hcFN0YXRlLmhlaWdodCxcbiAgICAgIG1hcFN0YXRlLmlzU3BsaXRcbiAgICBdKTtcblxuICAgIC8vIE1lbW9pemUgdGhlIG1hcCBzdHlsZVxuICAgIGNvbnN0IHNjYWxlZE1hcFN0eWxlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICBjb25zdCBtYXBTdHlsZSA9IG1hcEZpZWxkcy5tYXBTdHlsZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm1hcFN0eWxlLFxuICAgICAgICBib3R0b21NYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS5ib3R0b21NYXBTdHlsZSwgc2NhbGUpLFxuICAgICAgICB0b3BNYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS50b3BNYXBTdHlsZSwgc2NhbGUpXG4gICAgICB9O1xuICAgIH0sIFttYXBGaWVsZHMubWFwU3R5bGUsIHNjYWxlXSk7XG5cbiAgICAvLyBNZW1vaXplIHRoZSByZXRyaWV2ZU5ld1NjcmVlbnNob3QgY2FsbGJhY2tcbiAgICBjb25zdCBkZWJvdW5jZWRTY3JlZW5zaG90ID0gdXNlTWVtbyhcbiAgICAgICgpID0+XG4gICAgICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICBpZiAocGxvdHRpbmdBcmVhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnZlcnRUb1BuZyhwbG90dGluZ0FyZWFSZWYuY3VycmVudCwge1xuICAgICAgICAgICAgICBmaWx0ZXI6IERPTV9GSUxURVJfRlVOQyxcbiAgICAgICAgICAgICAgd2lkdGg6IGltYWdlU2l6ZS5pbWFnZVcsXG4gICAgICAgICAgICAgIGhlaWdodDogaW1hZ2VTaXplLmltYWdlSCxcbiAgICAgICAgICAgICAgZXNjYXBlWGh0bWxGb3JXZWJwYWNrXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihzZXRFeHBvcnRJbWFnZURhdGFVcmkpXG4gICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHNldEV4cG9ydEltYWdlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICBpZiAoZW5hYmxlRXJyb3JOb3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIGFkZE5vdGlmaWNhdGlvbihleHBvcnRJbWFnZUVycm9yKHtlcnJ9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCksXG4gICAgICBbXG4gICAgICAgIGltYWdlU2l6ZS5pbWFnZVcsXG4gICAgICAgIGltYWdlU2l6ZS5pbWFnZUgsXG4gICAgICAgIGVzY2FwZVhodG1sRm9yV2VicGFjayxcbiAgICAgICAgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpLFxuICAgICAgICBzZXRFeHBvcnRJbWFnZUVycm9yLFxuICAgICAgICBlbmFibGVFcnJvck5vdGlmaWNhdGlvbixcbiAgICAgICAgYWRkTm90aWZpY2F0aW9uXG4gICAgICBdXG4gICAgKTtcblxuICAgIGNvbnN0IHJldHJpZXZlTmV3U2NyZWVuc2hvdCA9IHVzZUNhbGxiYWNrKGRlYm91bmNlZFNjcmVlbnNob3QsIFtkZWJvdW5jZWRTY3JlZW5zaG90XSk7XG5cbiAgICAvLyBNZW1vaXplIHRoZSBvbk1hcFJlbmRlciBjYWxsYmFja1xuICAgIGNvbnN0IGRlYm91bmNlZE1hcFJlbmRlciA9IHVzZU1lbW8oXG4gICAgICAoKSA9PlxuICAgICAgICBkZWJvdW5jZShtYXAgPT4ge1xuICAgICAgICAgIGlmIChtYXAuaXNTdHlsZUxvYWRlZCgpKSB7XG4gICAgICAgICAgICByZXRyaWV2ZU5ld1NjcmVlbnNob3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCksXG4gICAgICBbcmV0cmlldmVOZXdTY3JlZW5zaG90XVxuICAgICk7XG5cbiAgICBjb25zdCBvbk1hcFJlbmRlciA9IHVzZUNhbGxiYWNrKGRlYm91bmNlZE1hcFJlbmRlciwgW2RlYm91bmNlZE1hcFJlbmRlcl0pO1xuXG4gICAgLy8gSW5pdGlhbCBzZXR1cCBlZmZlY3RcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nKHtwcm9jZXNzaW5nOiB0cnVlfSk7XG4gICAgfSwgW3NldEV4cG9ydEltYWdlU2V0dGluZ10pO1xuXG4gICAgLy8gU2NyZWVuc2hvdCB1cGRhdGUgZWZmZWN0XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChyYXRpbyAhPT0gdW5kZWZpbmVkIHx8IHJlc29sdXRpb24gIT09IHVuZGVmaW5lZCB8fCBsZWdlbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZXRFeHBvcnRJbWFnZVNldHRpbmcoe3Byb2Nlc3Npbmc6IHRydWV9KTtcbiAgICAgICAgcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfSwgW3JhdGlvLCByZXNvbHV0aW9uLCBsZWdlbmQsIHNldEV4cG9ydEltYWdlU2V0dGluZywgcmV0cmlldmVOZXdTY3JlZW5zaG90XSk7XG5cbiAgICAvLyBNZW1vaXplIHNpemUgY2FsY3VsYXRpb25zXG4gICAgY29uc3Qge3NpemUsIHdpZHRoLCBoZWlnaHR9ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICBjb25zdCBzaXplID0ge1xuICAgICAgICB3aWR0aDogaW1hZ2VTaXplLmltYWdlVyB8fCAxLFxuICAgICAgICBoZWlnaHQ6IGltYWdlU2l6ZS5pbWFnZUggfHwgMVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMubGVuZ3RoID4gMTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNpemUsXG4gICAgICAgIHdpZHRoOiBzaXplLndpZHRoIC8gKGlzU3BsaXQgPyAyIDogMSksXG4gICAgICAgIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgIH07XG4gICAgfSwgW2ltYWdlU2l6ZS5pbWFnZVcsIGltYWdlU2l6ZS5pbWFnZUgsIHNwbGl0TWFwcy5sZW5ndGhdKTtcblxuICAgIC8vIE1lbW9pemUgbWFwIHN0YXRlXG4gICAgY29uc3QgbmV3TWFwU3RhdGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGNvbnN0IGJhc2VNYXBTdGF0ZSA9IHtcbiAgICAgICAgLi4ubWFwU3RhdGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHpvb206IG1hcFN0YXRlLnpvb20gKyAoTWF0aC5sb2cyKHNjYWxlKSB8fCAwKVxuICAgICAgfTtcblxuICAgICAgaWYgKGNlbnRlcikge1xuICAgICAgICBjb25zdCByZW5kZXJlZExheWVycyA9IG1hcEZpZWxkcy52aXNTdGF0ZS5sYXllcnMuZmlsdGVyKFxuICAgICAgICAgIChsYXllciwgaWR4KSA9PlxuICAgICAgICAgICAgbGF5ZXIuaWQgIT09IEdFT0NPREVSX0xBWUVSX0lEICYmXG4gICAgICAgICAgICBsYXllci5zaG91bGRSZW5kZXJMYXllcihtYXBGaWVsZHMudmlzU3RhdGUubGF5ZXJEYXRhW2lkeF0pXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IGZpbmRNYXBCb3VuZHMocmVuZGVyZWRMYXllcnMpO1xuICAgICAgICBjb25zdCBjZW50ZXJBbmRab29tID0gZ2V0Q2VudGVyQW5kWm9vbUZyb21Cb3VuZHMoYm91bmRzLCB7d2lkdGgsIGhlaWdodH0pO1xuICAgICAgICBpZiAoY2VudGVyQW5kWm9vbSkge1xuICAgICAgICAgIGNvbnN0IHpvb20gPSBOdW1iZXIuaXNGaW5pdGUoY2VudGVyQW5kWm9vbS56b29tKSA/IGNlbnRlckFuZFpvb20uem9vbSA6IG1hcFN0YXRlLnpvb207XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmJhc2VNYXBTdGF0ZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyQW5kWm9vbS5jZW50ZXJbMF0sXG4gICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyQW5kWm9vbS5jZW50ZXJbMV0sXG4gICAgICAgICAgICB6b29tOiB6b29tICsgTnVtYmVyKE1hdGgubG9nMihzY2FsZSkgfHwgMClcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiYXNlTWFwU3RhdGU7XG4gICAgfSwgW21hcFN0YXRlLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZSwgY2VudGVyLCBtYXBGaWVsZHMudmlzU3RhdGVdKTtcblxuICAgIC8vIE1lbW9pemUgbWFwIHByb3BzXG4gICAgY29uc3QgbWFwUHJvcHMgPSB1c2VNZW1vKFxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgLi4ubWFwRmllbGRzLFxuICAgICAgICBtYXBTdHlsZTogc2NhbGVkTWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlOiBuZXdNYXBTdGF0ZSxcbiAgICAgICAgbWFwQ29udHJvbHM6IHtcbiAgICAgICAgICBtYXBMZWdlbmQ6IHtcbiAgICAgICAgICAgIHNob3c6IEJvb2xlYW4obGVnZW5kKSxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNldHRpbmdzOiBtYXBGaWVsZHMubWFwQ29udHJvbHM/Lm1hcExlZ2VuZD8uc2V0dGluZ3NcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIE1hcENvbXBvbmVudDogTWFwLFxuICAgICAgICBvbk1hcFJlbmRlcixcbiAgICAgICAgaXNFeHBvcnQ6IHRydWUsXG4gICAgICAgIGRlY2tHbFByb3BzOiB7XG4gICAgICAgICAgLi4ubWFwRmllbGRzLmRlY2tHbFByb3BzLFxuICAgICAgICAgIGdsT3B0aW9uczoge1xuICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgdXNlRGV2aWNlUGl4ZWxzOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmlzU3RhdGU6IHtcbiAgICAgICAgICAuLi5tYXBGaWVsZHMudmlzU3RhdGUsXG4gICAgICAgICAgZWZmZWN0czogcGxvdEVmZmVjdHNcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYWxsb3cgb3ZlcnJpZGluZyB0aGUgbGVnZW5kIHBhbmVsIGxvZ28gaW4gZXhwb3J0XG4gICAgICAgIGxvZ29Db21wb25lbnRcbiAgICAgIH0pLFxuICAgICAgW21hcEZpZWxkcywgc2NhbGVkTWFwU3R5bGUsIG5ld01hcFN0YXRlLCBsZWdlbmQsIG9uTWFwUmVuZGVyLCBwbG90RWZmZWN0cywgbG9nb0NvbXBvbmVudF1cbiAgICApO1xuXG4gICAgY29uc3QgaXNTcGxpdCA9IHNwbGl0TWFwcy5sZW5ndGggPiAxO1xuICAgIGNvbnN0IG1hcENvbnRhaW5lcnMgPSAhaXNTcGxpdCA/IChcbiAgICAgIDxNYXBDb250YWluZXIgaW5kZXg9ezB9IHByaW1hcnk9e3RydWV9IHsuLi5tYXBQcm9wc30gLz5cbiAgICApIDogKFxuICAgICAgPE1hcHNMYXlvdXQgY2xhc3NOYW1lPVwicGxvdC1jb250YWluZXItbWFwc1wiIG1hcFN0YXRlPXtuZXdNYXBTdGF0ZX0+XG4gICAgICAgIHtzcGxpdE1hcHMubWFwKChzZXR0aW5ncywgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWFwQ29udGFpbmVyIGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gcHJpbWFyeT17aW5kZXggPT09IDF9IHsuLi5tYXBQcm9wc30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L01hcHNMYXlvdXQ+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkUGxvdENvbnRhaW5lciBjbGFzc05hbWU9XCJleHBvcnQtbWFwLWluc3RhbmNlXCI+XG4gICAgICAgIDxTdHlsZWRNYXBDb250YWluZXIgcmVmPXtwbG90dGluZ0FyZWFSZWZ9IHdpZHRoPXtzaXplLndpZHRofSBoZWlnaHQ9e3NpemUuaGVpZ2h0fT5cbiAgICAgICAgICA8TWFwVmlld1N0YXRlQ29udGV4dFByb3ZpZGVyIG1hcFN0YXRlPXtuZXdNYXBTdGF0ZX0+XG4gICAgICAgICAgICB7bWFwQ29udGFpbmVyc31cbiAgICAgICAgICA8L01hcFZpZXdTdGF0ZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPC9TdHlsZWRNYXBDb250YWluZXI+XG4gICAgICA8L1N0eWxlZFBsb3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5tZW1vKFBsb3RDb250YWluZXIpO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxpQkFBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO0FBQ0EsSUFBQUksU0FBQSxHQUFBRixzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUssSUFBQSxHQUFBTCxPQUFBO0FBT0EsSUFBQU0sS0FBQSxHQUFBTixPQUFBO0FBQ0EsSUFBQU8sYUFBQSxHQUFBTCxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQVEsV0FBQSxHQUFBTixzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQVMsb0JBQUEsR0FBQVQsT0FBQTtBQUVBLElB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