"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerColorLegendFactory = LayerColorLegendFactory;
exports.LayerDefaultLegend = void 0;
exports.LayerLegendContentFactory = LayerLegendContentFactory;
exports.LayerLegendHeaderFactory = LayerLegendHeaderFactory;
exports.LayerRadiusLegend = void 0;
exports.SingleColorLegendFactory = SingleColorLegendFactory;
exports["default"] = exports.VisualChannelMetric = exports.StyledMapControlLegend = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/node_modules/react"));
var _styledComponents = _interopRequireDefault(require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/node_modules/styled-components"));
var _d3Color = require("d3-color");
var _d3Format = require("d3-format");
var _reactIntl = require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/node_modules/react-intl");
var _colorLegend = _interopRequireWildcard(require("../common/color-legend"));
var _radiusLegend = _interopRequireDefault(require("../common/radius-legend"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/src/constants/src");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/src/localization/src");
var _viewportMercatorProject = require("viewport-mercator-project");
var _icons = require("../common/icons");
var _panelHeaderAction = _interopRequireDefault(require("../side-panel/panel-header-action"));
var _templateObject; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var StyledMapControlLegend = exports.StyledMapControlLegend = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 10px ", "px 10px\n    ", "px;\n  font-size: 11px;\n  font-family: ", ";\n  border-bottom-color: ", ";\n  border-bottom-style: solid;\n  border-bottom-width: ", ";\n  width: ", "px;\n  box-sizing: border-box;\n\n  .legend--layer_name {\n    font-size: 12px;\n    padding-right: ", "px;\n    color: ", ";\n    font-weight: 500;\n  }\n  .legend--layer_type {\n    color: ", ";\n    font-weight: 500;\n    font-size: 11px;\n    padding-right: ", "px;\n  }\n\n  .legend--layer_size-title-row {\n    display: flex;\n    margin-top: 4px;\n    padding-right: ", "px;\n    align-items: center;\n  }\n\n  .legend--layer__title {\n  }\n\n  .legend--layer__item {\n    padding-bottom: 4px;\n  }\n  .legend--layer_by {\n    color: ", ";\n    margin-top: 4px;\n  }\n\n  .legend--layer_color_field {\n    color: ", ";\n    font-weight: 500;\n  }\n\n  .legend--layer_color-legend {\n    margin-top: 6px;\n  }\n"])), function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.panelBorderColor;
}, function (props) {
  return props.last ? 0 : '1px';
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
});
var VisualChannelMetric = exports.VisualChannelMetric = function VisualChannelMetric(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer__title"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend--layer_color_field"
  }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: name
  })));
};
var LayerDefaultLegend = exports.LayerDefaultLegend = function LayerDefaultLegend(_ref2) {
  var label = _ref2.label,
    name = _ref2.name;
  return label ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer_size-schema"
  }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend--layer_by"
  }, label ? /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: label
  }) : null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend--layer_by"
  }, " by ")), name && /*#__PURE__*/_react["default"].createElement(VisualChannelMetric, {
    name: name
  })) : null;
};
SingleColorLegendFactory.deps = [_colorLegend.LegendRowFactory];
function SingleColorLegendFactory(LegendRow) {
  var SingleColorLegend = function SingleColorLegend(_ref3) {
    var color = _ref3.color,
      label = _ref3.label;
    return /*#__PURE__*/_react["default"].createElement(LegendRow, {
      label: label !== null && label !== void 0 ? label : '',
      displayLabel: Boolean(label),
      color: Array.isArray(color) ? _d3Color.rgb.apply(void 0, (0, _toConsumableArray2["default"])(color)).toString() : color
    });
  };
  SingleColorLegend.displayName = 'SingleColorLegend';
  return _react["default"].memo(SingleColorLegend);
}
LayerColorLegendFactory.deps = [_colorLegend["default"], SingleColorLegendFactory, _panelHeaderAction["default"]];
function LayerColorLegendFactory(ColorLegend, SingleColorLegend, PanelHeaderAction) {
  var LayerColorLegend = function LayerColorLegend(_ref4) {
    var description = _ref4.description,
      config = _ref4.config,
      layer = _ref4.layer,
      colorChannel = _ref4.colorChannel,
      disableEdit = _ref4.disableEdit,
      onLayerVisConfigChange = _ref4.onLayerVisConfigChange,
      isExport = _ref4.isExport,
      mapState = _ref4.mapState,
      actionIcons = _ref4.actionIcons;
    var intl = (0, _reactIntl.useIntl)();
    var enableColorBy = description.measure;
    var scale = colorChannel.scale,
      field = colorChannel.field,
      domain = colorChannel.domain,
      range = colorChannel.range,
      property = colorChannel.property,
      fixed = colorChannel.fixed;
    var _map = [scale, field, domain].map(function (k) {
        return config[k];
      }),
      _map2 = (0, _slicedToArray2["default"])(_map, 3),
      colorScale = _map2[0],
      colorField = _map2[1],
      colorDomain = _map2[2];
    var isFixed = fixed && config.visConfig[fixed];
    var colorRange = config.visConfig[range];
    var onUpdateColorLegend = (0, _react.useCallback)(function (colorLegends) {
      if (onLayerVisConfigChange) {
        onLayerVisConfigChange(layer, (0, _defineProperty2["default"])({}, range, _objectSpread(_objectSpread({}, colorRange), {}, {
          colorLegends: colorLegends
        })));
      }
    }, [layer, onLayerVisConfigChange, colorRange, range]);
    var _useState = (0, _react.useState)(isExport),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];
    var handleToggleExpanded = function handleToggleExpanded() {
      return setIsExpanded(!isExpanded);
    };
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "legend--layer__item"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "legend--layer_color-schema"
    }, /*#__PURE__*/_react["default"].createElement("div", null, enableColorBy ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "legend--layer_size-title-row"
    }, /*#__PURE__*/_react["default"].createElement(VisualChannelMetric, {
      name: enableColorBy
    }), !isExport ? /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      id: "legend-collapse-button",
      onClick: handleToggleExpanded,
      IconComponent: isExpanded ? actionIcons.expanded : actionIcons.collapsed
    }) : null) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "legend--layer_color-legend"
    }, enableColorBy ? /*#__PURE__*/_react["default"].createElement(ColorLegend, {
      layer: layer,
      isExpanded: isExpanded,
      scaleType: colorScale,
      displayLabel: true,
      domain: colorDomain,
      fieldType: colorField && colorField.type || 'real',
      range: colorRange,
      onUpdateColorLegend: onUpdateColorLegend,
      disableEdit: disableEdit || Boolean(isExport),
      isFixed: isFixed,
      mapState: mapState,
      labelFormat: colorField !== null && colorField !== void 0 && colorField.displayFormat ? (0, _d3Format.format)(colorField === null || colorField === void 0 ? void 0 : colorField.displayFormat) : null
    }) : /*#__PURE__*/_react["default"].createElement(SingleColorLegend, {
      color: config.visConfig[property] || config[property] || config.color,
      label: intl.formatMessage({
        id: "mapLegend.layers.".concat(layer.type, ".singleColor.").concat(colorChannel.key),
        defaultMessage: intl.formatMessage({
          id: "mapLegend.layers.default.singleColor.".concat(colorChannel.key),
          defaultMessage: ' ' // mustn't be empty string or id will be used
        })
      })
    })))));
  };
  LayerColorLegend.displayName = 'LayerColorLegend';
  return _react["default"].memo(LayerColorLegend);
}
function getLayerRadiusScaleMetersToPixelsMultiplier(layer, mapState) {
  // @ts-ignore this actually exist
  var _getDistanceScales = (0, _viewportMercatorProject.getDistanceScales)(mapState),
    metersPerPixel = _getDistanceScales.metersPerPixel;
  // if no field size is defined we need to pass fixed radius = false
  var fixedRadius = layer.config.visConfig.fixedRadius && Boolean(layer.config.sizeField);
  return layer.getRadiusScaleByZoom(mapState, fixedRadius) / metersPerPixel[0];
}
var LayerRadiusLegend = exports.LayerRadiusLegend = _react["default"].memo(function (_ref5) {
  var layer = _ref5.layer,
    width = _ref5.width,
    visualChannel = _ref5.visualChannel,
    mapState = _ref5.mapState;
  var description = layer.getVisualChannelDescription(visualChannel.key);
  var config = layer.config;
  var enableSizeBy = description.measure;
  var scale = visualChannel.scale,
    field = visualChannel.field,
    domain = visualChannel.domain,
    range = visualChannel.range;
  var _map3 = [scale, field, domain].map(function (k) {
      return config[k];
    }),
    _map4 = (0, _slicedToArray2["default"])(_map3, 3),
    sizeScale = _map4[0],
    sizeField = _map4[1],
    sizeDomain = _map4[2];
  var sizeRange = config.visConfig[range];
  if (mapState) {
    var radiusMultiplier = getLayerRadiusScaleMetersToPixelsMultiplier(layer, mapState);
    sizeRange = sizeRange.map(function (v) {
      return v * radiusMultiplier;
    });
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer_size-schema"
  }, /*#__PURE__*/_react["default"].createElement("div", null, enableSizeBy ? /*#__PURE__*/_react["default"].createElement(VisualChannelMetric, {
    name: enableSizeBy
  }) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer_size-legend"
  }, enableSizeBy ? /*#__PURE__*/_react["default"].createElement(_radiusLegend["default"], {
    scaleType: sizeScale,
    domain: sizeDomain,
    fieldType: sizeField && sizeField.type || 'real',
    range: sizeRange,
    width: width
  }) : null))));
});
var isColorChannel = function isColorChannel(visualChannel) {
  return [_src.CHANNEL_SCALES.color, _src.CHANNEL_SCALES.colorAggr].includes(visualChannel.channelScaleType);
};
var isRadiusChannel = function isRadiusChannel(visualChannel) {
  return [_src.CHANNEL_SCALES.radius].includes(visualChannel.channelScaleType);
};
function LayerLegendHeaderFactory() {
  var LayerLegendHeader = function LayerLegendHeader(_ref6) {
    var options = _ref6.options,
      layer = _ref6.layer;
    return (options === null || options === void 0 ? void 0 : options.showLayerName) !== false ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "legend--layer_name"
    }, layer.config.label) : null;
  };
  return LayerLegendHeader;
}
var defaultActionIcons = {
  expanded: _icons.ArrowDown,
  collapsed: _icons.ArrowRight
};
LayerLegendContentFactory.deps = [LayerColorLegendFactory];
function LayerLegendContentFactory(LayerColorLegend) {
  var LayerLegendContent = function LayerLegendContent(_ref7) {
    var layer = _ref7.layer,
      containerW = _ref7.containerW,
      mapState = _ref7.mapState,
      disableEdit = _ref7.disableEdit,
      isExport = _ref7.isExport,
      onLayerVisConfigChange = _ref7.onLayerVisConfigChange,
      actionIcons = _ref7.actionIcons;
    var visualChannels = layer.getLegendVisualChannels();
    var channelKeys = Object.values(visualChannels);
    var colorChannels = channelKeys.filter(isColorChannel);
    var nonColorChannels = channelKeys.filter(function (vc) {
      return !isColorChannel(vc);
    });
    var width = containerW - 2 * _src.DIMENSIONS.mapControl.padding;

    // render color by chanel only
    var colorChannelToRender = colorChannels.filter(function (cc) {
      var _layer$getVisualChann;
      return (!cc.condition || cc.condition(layer.config)) && ((_layer$getVisualChann = layer.getVisualChannelDescription(cc.key)) === null || _layer$getVisualChann === void 0 ? void 0 : _layer$getVisualChann.measure);
    });
    // if no color by chanel, render rest
    if (!colorChannelToRender.length) {
      colorChannelToRender = colorChannels.filter(function (cc) {
        return !cc.condition || cc.condition(layer.config);
      });
    }
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, colorChannelToRender.map(function (colorChannel) {
      return /*#__PURE__*/_react["default"].createElement(LayerColorLegend, {
        key: colorChannel.key,
        colorChannel: colorChannel,
        config: layer.config,
        description: layer.getVisualChannelDescription(colorChannel.key),
        layer: layer,
        isExport: isExport,
        disableEdit: disableEdit,
        mapState: mapState,
        onLayerVisConfigChange: onLayerVisConfigChange,
        actionIcons: actionIcons
      });
    }), nonColorChannels.map(function (visualChannel) {
      var matchCondition = !visualChannel.condition || visualChannel.condition(layer.config);
      var enabled = layer.config[visualChannel.field] || visualChannel.defaultMeasure;
      if (matchCondition && enabled) {
        var description = layer.getVisualChannelDescription(visualChannel.key);
        if (isRadiusChannel(visualChannel)) {
          return /*#__PURE__*/_react["default"].createElement(LayerRadiusLegend, {
            key: visualChannel.key,
            layer: layer,
            mapState: mapState,
            width: width,
            visualChannel: visualChannel
          });
        }
        return /*#__PURE__*/_react["default"].createElement(LayerDefaultLegend, {
          key: visualChannel.key,
          label: description.label,
          name: description.measure
        });
      }
      return null;
    }));
  };
  return LayerLegendContent;
}
MapLegendFactory.deps = [LayerLegendHeaderFactory, LayerLegendContentFactory];
function MapLegendFactory(LayerLegendHeader, LayerLegendContent) {
  var MapLegend = function MapLegend(_ref8) {
    var _ref8$layers = _ref8.layers,
      layers = _ref8$layers === void 0 ? [] : _ref8$layers,
      width = _ref8.width,
      mapState = _ref8.mapState,
      options = _ref8.options,
      disableEdit = _ref8.disableEdit,
      isExport = _ref8.isExport,
      onLayerVisConfigChange = _ref8.onLayerVisConfigChange,
      _ref8$actionIcons = _ref8.actionIcons,
      actionIcons = _ref8$actionIcons === void 0 ? defaultActionIcons : _ref8$actionIcons;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-legend"
    }, layers.map(function (layer, index) {
      if (!layer.isValidToSave() || layer.config.hidden) {
        return null;
      }
      var containerW = width || _src.DIMENSIONS.mapControl.width;
      return /*#__PURE__*/_react["default"].createElement(StyledMapControlLegend, {
        className: "legend--layer",
        last: index === layers.length - 1,
        key: index,
        width: containerW
      }, /*#__PURE__*/_react["default"].createElement(LayerLegendHeader, {
        isExport: isExport,
        options: options,
        layer: layer
      }), /*#__PURE__*/_react["default"].createElement(LayerLegendContent, {
        containerW: containerW,
        layer: layer,
        mapState: mapState,
        disableEdit: disableEdit,
        isExport: isExport,
        onLayerVisConfigChange: onLayerVisConfigChange,
        actionIcons: actionIcons
      }));
    }));
  };
  MapLegend.displayName = 'MapLegend';
  return MapLegend;
}
var _default = exports["default"] = MapLegendFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZDNDb2xvciIsIl9kM0Zvcm1hdCIsIl9yZWFjdEludGwiLCJfY29sb3JMZWdlbmQiLCJfcmFkaXVzTGVnZW5kIiwiX3NyYyIsIl9zcmMyIiwiX3ZpZXdwb3J0TWVyY2F0b3JQcm9qZWN0IiwiX2ljb25zIiwiX3BhbmVsSGVhZGVyQWN0aW9uIiwiX3RlbXBsYXRlT2JqZWN0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5MiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiU3R5bGVkTWFwQ29udHJvbExlZ2VuZCIsImV4cG9ydHMiLCJzdHlsZWQiLCJkaXYiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInByb3BzIiwidGhlbWUiLCJtYXBDb250cm9sIiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJwYW5lbEJvcmRlckNvbG9yIiwibGFzdCIsIndpZHRoIiwidGV4dENvbG9yIiwic3VidGV4dENvbG9yIiwidGV4dENvbG9ySGwiLCJWaXN1YWxDaGFubmVsTWV0cmljIiwiX3JlZiIsIm5hbWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiRm9ybWF0dGVkTWVzc2FnZSIsImlkIiwiTGF5ZXJEZWZhdWx0TGVnZW5kIiwiX3JlZjIiLCJsYWJlbCIsIlNpbmdsZUNvbG9yTGVnZW5kRmFjdG9yeSIsImRlcHMiLCJMZWdlbmRSb3dGYWN0b3J5IiwiTGVnZW5kUm93IiwiU2luZ2xlQ29sb3JMZWdlbmQiLCJfcmVmMyIsImNvbG9yIiwiZGlzcGxheUxhYmVsIiwiQm9vbGVhbiIsIkFycmF5IiwiaXNBcnJheSIsInJnYiIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJ0b1N0cmluZyIsImRpc3BsYXlOYW1lIiwiUmVhY3QiLCJtZW1vIiwiTGF5ZXJDb2xvckxlZ2VuZEZhY3RvcnkiLCJDb2xvckxlZ2VuZEZhY3RvcnkiLCJQYW5lbEhlYWRlckFjdGlvbkZhY3RvcnkiLCJDb2xvckxlZ2VuZCIsIlBhbmVsSGVhZGVyQWN0aW9uIiwiTGF5ZXJDb2xvckxlZ2VuZCIsIl9yZWY0IiwiZGVzY3JpcHRpb24iLCJjb25maWciLCJsYXllciIsImNvbG9yQ2hhbm5lbCIsImRpc2FibGVFZGl0Iiwib25MYXllclZpc0NvbmZpZ0NoYW5nZSIsImlzRXhwb3J0IiwibWFwU3RhdGUiLCJhY3Rpb25JY29ucyIsImludGwiLCJ1c2VJbnRsIiwiZW5hYmxlQ29sb3JCeSIsIm1lYXN1cmUiLCJzY2FsZSIsImZpZWxkIiwiZG9tYWluIiwicmFuZ2UiLCJwcm9wZXJ0eSIsImZpeGVkIiwiX21hcCIsIm1hcCIsImsiLCJfbWFwMiIsIl9zbGljZWRUb0FycmF5MiIsImNvbG9yU2NhbGUiLCJjb2xvckZpZWxkIiwiY29sb3JEb21haW4iLCJpc0ZpeGVkIiwidmlzQ29uZmlnIiwiY29sb3JSYW5nZSIsIm9uVXBkYXRlQ29sb3JMZWdlbmQiLCJ1c2VDYWxsYmFjayIsImNvbG9yTGVnZW5kcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwiaGFuZGxlVG9nZ2xlRXhwYW5kZWQiLCJvbkNsaWNrIiwiSWNvbkNvbXBvbmVudCIsImV4cGFuZGVkIiwiY29sbGFwc2VkIiwic2NhbGVUeXBlIiwiZmllbGRUeXBlIiwidHlwZSIsImxhYmVsRm9ybWF0IiwiZGlzcGxheUZvcm1hdCIsImQzRm9ybWF0IiwiZm9ybWF0TWVzc2FnZSIsImNvbmNhdCIsImtleSIsImRlZmF1bHRNZXNzYWdlIiwiZ2V0TGF5ZXJSYWRpdXNTY2FsZU1ldGVyc1RvUGl4ZWxzTXVsdGlwbGllciIsIl9nZXREaXN0YW5jZVNjYWxlcyIsImdldERpc3RhbmNlU2NhbGVzIiwibWV0ZXJzUGVyUGl4ZWwiLCJmaXhlZFJhZGl1cyIsInNpemVGaWVsZCIsImdldFJhZGl1c1NjYWxlQnlab29tIiwiTGF5ZXJSYWRpdXNMZWdlbmQiLCJfcmVmNSIsInZpc3VhbENoYW5uZWwiLCJnZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24iLCJlbmFibGVTaXplQnkiLCJfbWFwMyIsIl9tYXA0Iiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInNpemVSYW5nZSIsInJhZGl1c011bHRpcGxpZXIiLCJ2IiwiaXNDb2xvckNoYW5uZWwiLCJDSEFOTkVMX1NDQUxFUyIsImNvbG9yQWdnciIsImluY2x1ZGVzIiwiY2hhbm5lbFNjYWxlVHlwZSIsImlzUmFkaXVzQ2hhbm5lbCIsInJhZGl1cyIsIkxheWVyTGVnZW5kSGVhZGVyRmFjdG9yeSIsIkxheWVyTGVnZW5kSGVhZGVyIiwiX3JlZjYiLCJvcHRpb25zIiwic2hvd0xheWVyTmFtZSIsImRlZmF1bHRBY3Rpb25JY29ucyIsIkFycm93RG93biIsIkFycm93UmlnaHQiLCJMYXllckxlZ2VuZENvbnRlbnRGYWN0b3J5IiwiTGF5ZXJMZWdlbmRDb250ZW50IiwiX3JlZjciLCJjb250YWluZXJXIiwidmlzdWFsQ2hhbm5lbHMiLCJnZXRMZWdlbmRWaXN1YWxDaGFubmVscyIsImNoYW5uZWxLZXlzIiwidmFsdWVzIiwiY29sb3JDaGFubmVscyIsIm5vbkNvbG9yQ2hhbm5lbHMiLCJ2YyIsIkRJTUVOU0lPTlMiLCJjb2xvckNoYW5uZWxUb1JlbmRlciIsImNjIiwiX2xheWVyJGdldFZpc3VhbENoYW5uIiwiY29uZGl0aW9uIiwiRnJhZ21lbnQiLCJtYXRjaENvbmRpdGlvbiIsImVuYWJsZWQiLCJkZWZhdWx0TWVhc3VyZSIsIk1hcExlZ2VuZEZhY3RvcnkiLCJNYXBMZWdlbmQiLCJfcmVmOCIsIl9yZWY4JGxheWVycyIsImxheWVycyIsIl9yZWY4JGFjdGlvbkljb25zIiwiaW5kZXgiLCJpc1ZhbGlkVG9TYXZlIiwiaGlkZGVuIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zcmMvbWFwL21hcC1sZWdlbmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vIENvcHlyaWdodCBjb250cmlidXRvcnMgdG8gdGhlIGtlcGxlci5nbCBwcm9qZWN0XG5cbmltcG9ydCBSZWFjdCwge0ZDLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIENvbXBvbmVudFR5cGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtyZ2J9IGZyb20gJ2QzLWNvbG9yJztcbmltcG9ydCB7Zm9ybWF0IGFzIGQzRm9ybWF0fSBmcm9tICdkMy1mb3JtYXQnO1xuaW1wb3J0IHt1c2VJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBDb2xvckxlZ2VuZEZhY3RvcnksIHtMZWdlbmRSb3dGYWN0b3J5fSBmcm9tICcuLi9jb21tb24vY29sb3ItbGVnZW5kJztcbmltcG9ydCBSYWRpdXNMZWdlbmQgZnJvbSAnLi4vY29tbW9uL3JhZGl1cy1sZWdlbmQnO1xuaW1wb3J0IHtDSEFOTkVMX1NDQUxFUywgRElNRU5TSU9OU30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0xheWVyLCBMYXllckJhc2VDb25maWcsIFZpc3VhbENoYW5uZWwsIFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHtMYXllclZpc0NvbmZpZywgTWFwU3RhdGUsIFJHQkNvbG9yfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7Z2V0RGlzdGFuY2VTY2FsZXN9IGZyb20gJ3ZpZXdwb3J0LW1lcmNhdG9yLXByb2plY3QnO1xuaW1wb3J0IHtBcnJvd0Rvd24sIEFycm93UmlnaHR9IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IGZyb20gJy4uL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbic7XG5cbmludGVyZmFjZSBTdHlsZWRNYXBDb250cm9sTGVnZW5kUHJvcHMge1xuICB3aWR0aD86IG51bWJlcjtcbiAgbGFzdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNYXBDb250cm9sTGVnZW5kID0gc3R5bGVkLmRpdjxTdHlsZWRNYXBDb250cm9sTGVnZW5kUHJvcHM+YFxuICBwYWRkaW5nOiAxMHB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC5wYWRkaW5nfXB4IDEwcHhcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wucGFkZGluZ31weDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckNvbG9yfTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLmxhc3QgPyAwIDogJzFweCcpfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLmxlZ2VuZC0tbGF5ZXJfbmFtZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC5wYWRkaW5nfXB4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAubGVnZW5kLS1sYXllcl90eXBlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC5wYWRkaW5nfXB4O1xuICB9XG5cbiAgLmxlZ2VuZC0tbGF5ZXJfc2l6ZS10aXRsZS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC5wYWRkaW5nfXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubGVnZW5kLS1sYXllcl9fdGl0bGUge1xuICB9XG5cbiAgLmxlZ2VuZC0tbGF5ZXJfX2l0ZW0ge1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIH1cbiAgLmxlZ2VuZC0tbGF5ZXJfYnkge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgLmxlZ2VuZC0tbGF5ZXJfY29sb3JfZmllbGQge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmxlZ2VuZC0tbGF5ZXJfY29sb3ItbGVnZW5kIHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBWaXN1YWxDaGFubmVsTWV0cmljID0gKHtuYW1lfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kLS1sYXllcl9fdGl0bGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJfY29sb3JfZmllbGRcIj5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e25hbWV9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgdHlwZSBMYXllclNpemVMZWdlbmRQcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IExheWVyRGVmYXVsdExlZ2VuZDogUmVhY3QuRkM8TGF5ZXJTaXplTGVnZW5kUHJvcHM+ID0gKHtsYWJlbCwgbmFtZX0pID0+XG4gIGxhYmVsID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kLS1sYXllcl9zaXplLXNjaGVtYVwiPlxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJfYnlcIj57bGFiZWwgPyA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bGFiZWx9IC8+IDogbnVsbH08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJfYnlcIj4gYnkgPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAge25hbWUgJiYgPFZpc3VhbENoYW5uZWxNZXRyaWMgbmFtZT17bmFtZX0gLz59XG4gICAgPC9kaXY+XG4gICkgOiBudWxsO1xuXG5leHBvcnQgdHlwZSBTaW5nbGVDb2xvckxlZ2VuZFByb3BzID0ge1xuICBjb2xvcjogUkdCQ29sb3I7XG4gIGxhYmVsPzogc3RyaW5nO1xufTtcblxuU2luZ2xlQ29sb3JMZWdlbmRGYWN0b3J5LmRlcHMgPSBbTGVnZW5kUm93RmFjdG9yeV07XG5cbmV4cG9ydCBmdW5jdGlvbiBTaW5nbGVDb2xvckxlZ2VuZEZhY3RvcnkoTGVnZW5kUm93OiBSZXR1cm5UeXBlPHR5cGVvZiBMZWdlbmRSb3dGYWN0b3J5Pikge1xuICBjb25zdCBTaW5nbGVDb2xvckxlZ2VuZDogUmVhY3QuRkM8U2luZ2xlQ29sb3JMZWdlbmRQcm9wcz4gPSAoe2NvbG9yLCBsYWJlbH0pID0+IChcbiAgICA8TGVnZW5kUm93XG4gICAgICBsYWJlbD17bGFiZWwgPz8gJyd9XG4gICAgICBkaXNwbGF5TGFiZWw9e0Jvb2xlYW4obGFiZWwpfVxuICAgICAgY29sb3I9e0FycmF5LmlzQXJyYXkoY29sb3IpID8gcmdiKC4uLmNvbG9yKS50b1N0cmluZygpIDogY29sb3J9XG4gICAgLz5cbiAgKTtcblxuICBTaW5nbGVDb2xvckxlZ2VuZC5kaXNwbGF5TmFtZSA9ICdTaW5nbGVDb2xvckxlZ2VuZCc7XG5cbiAgcmV0dXJuIFJlYWN0Lm1lbW8oU2luZ2xlQ29sb3JMZWdlbmQpO1xufVxuXG5leHBvcnQgdHlwZSBMYXllckNvbG9yTGVnZW5kUHJvcHMgPSB7XG4gIGRlc2NyaXB0aW9uOiBWaXN1YWxDaGFubmVsRGVzY3JpcHRpb247XG4gIGNvbmZpZzogTGF5ZXJCYXNlQ29uZmlnO1xuICBjb2xvckNoYW5uZWw6IFZpc3VhbENoYW5uZWw7XG4gIG9uTGF5ZXJWaXNDb25maWdDaGFuZ2U/OiAob2xkTGF5ZXI6IExheWVyLCBuZXdWaXNDb25maWc6IFBhcnRpYWw8TGF5ZXJWaXNDb25maWc+KSA9PiB2b2lkO1xuICBsYXllcjogTGF5ZXI7XG4gIGRpc2FibGVFZGl0PzogYm9vbGVhbjtcbiAgaXNFeHBvcnQ/OiBib29sZWFuO1xuICBtYXBTdGF0ZT86IE1hcFN0YXRlO1xuICBhY3Rpb25JY29uczogTWFwTGVnZW5kSWNvbnM7XG59O1xuXG5MYXllckNvbG9yTGVnZW5kRmFjdG9yeS5kZXBzID0gW1xuICBDb2xvckxlZ2VuZEZhY3RvcnksXG4gIFNpbmdsZUNvbG9yTGVnZW5kRmFjdG9yeSxcbiAgUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIExheWVyQ29sb3JMZWdlbmRGYWN0b3J5KFxuICBDb2xvckxlZ2VuZDogUmV0dXJuVHlwZTx0eXBlb2YgQ29sb3JMZWdlbmRGYWN0b3J5PixcbiAgU2luZ2xlQ29sb3JMZWdlbmQ6IFJldHVyblR5cGU8dHlwZW9mIFNpbmdsZUNvbG9yTGVnZW5kRmFjdG9yeT4sXG4gIFBhbmVsSGVhZGVyQWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBQYW5lbEhlYWRlckFjdGlvbkZhY3Rvcnk+XG4pIHtcbiAgY29uc3QgTGF5ZXJDb2xvckxlZ2VuZDogUmVhY3QuRkM8TGF5ZXJDb2xvckxlZ2VuZFByb3BzPiA9ICh7XG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29uZmlnLFxuICAgIGxheWVyLFxuICAgIGNvbG9yQ2hhbm5lbCxcbiAgICBkaXNhYmxlRWRpdCxcbiAgICBvbkxheWVyVmlzQ29uZmlnQ2hhbmdlLFxuICAgIGlzRXhwb3J0LFxuICAgIG1hcFN0YXRlLFxuICAgIGFjdGlvbkljb25zXG4gIH0pID0+IHtcbiAgICBjb25zdCBpbnRsID0gdXNlSW50bCgpO1xuICAgIGNvbnN0IGVuYWJsZUNvbG9yQnkgPSBkZXNjcmlwdGlvbi5tZWFzdXJlO1xuICAgIGNvbnN0IHtzY2FsZSwgZmllbGQsIGRvbWFpbiwgcmFuZ2UsIHByb3BlcnR5LCBmaXhlZH0gPSBjb2xvckNoYW5uZWw7XG4gICAgY29uc3QgW2NvbG9yU2NhbGUsIGNvbG9yRmllbGQsIGNvbG9yRG9tYWluXSA9IFtzY2FsZSwgZmllbGQsIGRvbWFpbl0ubWFwKGsgPT4gY29uZmlnW2tdKTtcbiAgICBjb25zdCBpc0ZpeGVkID0gZml4ZWQgJiYgY29uZmlnLnZpc0NvbmZpZ1tmaXhlZF07XG5cbiAgICBjb25zdCBjb2xvclJhbmdlID0gY29uZmlnLnZpc0NvbmZpZ1tyYW5nZV07XG4gICAgY29uc3Qgb25VcGRhdGVDb2xvckxlZ2VuZCA9IHVzZUNhbGxiYWNrKFxuICAgICAgY29sb3JMZWdlbmRzID0+IHtcbiAgICAgICAgaWYgKG9uTGF5ZXJWaXNDb25maWdDaGFuZ2UpIHtcbiAgICAgICAgICBvbkxheWVyVmlzQ29uZmlnQ2hhbmdlKGxheWVyLCB7XG4gICAgICAgICAgICBbcmFuZ2VdOiB7XG4gICAgICAgICAgICAgIC4uLmNvbG9yUmFuZ2UsXG4gICAgICAgICAgICAgIGNvbG9yTGVnZW5kc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2xheWVyLCBvbkxheWVyVmlzQ29uZmlnQ2hhbmdlLCBjb2xvclJhbmdlLCByYW5nZV1cbiAgICApO1xuICAgIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGlzRXhwb3J0KTtcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVFeHBhbmRlZCA9ICgpID0+IHNldElzRXhwYW5kZWQoIWlzRXhwYW5kZWQpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJfX2l0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX2NvbG9yLXNjaGVtYVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZW5hYmxlQ29sb3JCeSA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX3NpemUtdGl0bGUtcm93XCI+XG4gICAgICAgICAgICAgICAgPFZpc3VhbENoYW5uZWxNZXRyaWMgbmFtZT17ZW5hYmxlQ29sb3JCeX0gLz5cbiAgICAgICAgICAgICAgICB7IWlzRXhwb3J0ID8gKFxuICAgICAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGVnZW5kLWNvbGxhcHNlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZUV4cGFuZGVkfVxuICAgICAgICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtpc0V4cGFuZGVkID8gYWN0aW9uSWNvbnMuZXhwYW5kZWQgOiBhY3Rpb25JY29ucy5jb2xsYXBzZWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX2NvbG9yLWxlZ2VuZFwiPlxuICAgICAgICAgICAgICB7ZW5hYmxlQ29sb3JCeSA/IChcbiAgICAgICAgICAgICAgICA8Q29sb3JMZWdlbmRcbiAgICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQ9e2lzRXhwYW5kZWR9XG4gICAgICAgICAgICAgICAgICBzY2FsZVR5cGU9e2NvbG9yU2NhbGV9XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TGFiZWxcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj17Y29sb3JEb21haW59XG4gICAgICAgICAgICAgICAgICBmaWVsZFR5cGU9eyhjb2xvckZpZWxkICYmIGNvbG9yRmllbGQudHlwZSkgfHwgJ3JlYWwnfVxuICAgICAgICAgICAgICAgICAgcmFuZ2U9e2NvbG9yUmFuZ2V9XG4gICAgICAgICAgICAgICAgICBvblVwZGF0ZUNvbG9yTGVnZW5kPXtvblVwZGF0ZUNvbG9yTGVnZW5kfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZUVkaXQ9e2Rpc2FibGVFZGl0IHx8IEJvb2xlYW4oaXNFeHBvcnQpfVxuICAgICAgICAgICAgICAgICAgaXNGaXhlZD17aXNGaXhlZH1cbiAgICAgICAgICAgICAgICAgIG1hcFN0YXRlPXttYXBTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsRm9ybWF0PXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JGaWVsZD8uZGlzcGxheUZvcm1hdCA/IGQzRm9ybWF0KGNvbG9yRmllbGQ/LmRpc3BsYXlGb3JtYXQpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFNpbmdsZUNvbG9yTGVnZW5kXG4gICAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV0gfHwgY29uZmlnW3Byb3BlcnR5XSB8fCBjb25maWcuY29sb3J9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGBtYXBMZWdlbmQubGF5ZXJzLiR7bGF5ZXIudHlwZX0uc2luZ2xlQ29sb3IuJHtjb2xvckNoYW5uZWwua2V5fWAsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBpbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgbWFwTGVnZW5kLmxheWVycy5kZWZhdWx0LnNpbmdsZUNvbG9yLiR7Y29sb3JDaGFubmVsLmtleX1gLFxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiAnICcgLy8gbXVzdG4ndCBiZSBlbXB0eSBzdHJpbmcgb3IgaWQgd2lsbCBiZSB1c2VkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBMYXllckNvbG9yTGVnZW5kLmRpc3BsYXlOYW1lID0gJ0xheWVyQ29sb3JMZWdlbmQnO1xuICByZXR1cm4gUmVhY3QubWVtbyhMYXllckNvbG9yTGVnZW5kKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGF5ZXJSYWRpdXNTY2FsZU1ldGVyc1RvUGl4ZWxzTXVsdGlwbGllcihsYXllciwgbWFwU3RhdGUpIHtcbiAgLy8gQHRzLWlnbm9yZSB0aGlzIGFjdHVhbGx5IGV4aXN0XG4gIGNvbnN0IHttZXRlcnNQZXJQaXhlbH0gPSBnZXREaXN0YW5jZVNjYWxlcyhtYXBTdGF0ZSk7XG4gIC8vIGlmIG5vIGZpZWxkIHNpemUgaXMgZGVmaW5lZCB3ZSBuZWVkIHRvIHBhc3MgZml4ZWQgcmFkaXVzID0gZmFsc2VcbiAgY29uc3QgZml4ZWRSYWRpdXMgPSBsYXllci5jb25maWcudmlzQ29uZmlnLmZpeGVkUmFkaXVzICYmIEJvb2xlYW4obGF5ZXIuY29uZmlnLnNpemVGaWVsZCk7XG4gIHJldHVybiBsYXllci5nZXRSYWRpdXNTY2FsZUJ5Wm9vbShtYXBTdGF0ZSwgZml4ZWRSYWRpdXMpIC8gbWV0ZXJzUGVyUGl4ZWxbMF07XG59XG5cbmV4cG9ydCB0eXBlIE1hcExlZ2VuZEljb25zID0ge1xuICBleHBhbmRlZDogQ29tcG9uZW50VHlwZTxhbnk+O1xuICBjb2xsYXBzZWQ6IENvbXBvbmVudFR5cGU8YW55Pjtcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyUmFkaXVzTGVnZW5kUHJvcHMgPSB7XG4gIGxheWVyOiBMYXllcjtcbiAgbWFwU3RhdGU/OiBNYXBTdGF0ZTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaXNFeHBvcnQ/OiBib29sZWFuO1xuICB2aXN1YWxDaGFubmVsOiBWaXN1YWxDaGFubmVsO1xufTtcblxuZXhwb3J0IGNvbnN0IExheWVyUmFkaXVzTGVnZW5kOiBGQzxMYXllclJhZGl1c0xlZ2VuZFByb3BzPiA9IFJlYWN0Lm1lbW8oXG4gICh7bGF5ZXIsIHdpZHRoLCB2aXN1YWxDaGFubmVsLCBtYXBTdGF0ZX0pID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxheWVyLmdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbih2aXN1YWxDaGFubmVsLmtleSk7XG4gICAgY29uc3QgY29uZmlnID0gbGF5ZXIuY29uZmlnO1xuXG4gICAgY29uc3QgZW5hYmxlU2l6ZUJ5ID0gZGVzY3JpcHRpb24ubWVhc3VyZTtcbiAgICBjb25zdCB7c2NhbGUsIGZpZWxkLCBkb21haW4sIHJhbmdlfSA9IHZpc3VhbENoYW5uZWw7XG4gICAgY29uc3QgW3NpemVTY2FsZSwgc2l6ZUZpZWxkLCBzaXplRG9tYWluXSA9IFtzY2FsZSwgZmllbGQsIGRvbWFpbl0ubWFwKGsgPT4gY29uZmlnW2tdKTtcbiAgICBsZXQgc2l6ZVJhbmdlID0gY29uZmlnLnZpc0NvbmZpZ1tyYW5nZV07XG5cbiAgICBpZiAobWFwU3RhdGUpIHtcbiAgICAgIGNvbnN0IHJhZGl1c011bHRpcGxpZXIgPSBnZXRMYXllclJhZGl1c1NjYWxlTWV0ZXJzVG9QaXhlbHNNdWx0aXBsaWVyKGxheWVyLCBtYXBTdGF0ZSk7XG4gICAgICBzaXplUmFuZ2UgPSBzaXplUmFuZ2UubWFwKHYgPT4gdiAqIHJhZGl1c011bHRpcGxpZXIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJfc2l6ZS1zY2hlbWFcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2VuYWJsZVNpemVCeSA/IDxWaXN1YWxDaGFubmVsTWV0cmljIG5hbWU9e2VuYWJsZVNpemVCeX0gLz4gOiBudWxsfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX3NpemUtbGVnZW5kXCI+XG4gICAgICAgICAgICAgIHtlbmFibGVTaXplQnkgPyAoXG4gICAgICAgICAgICAgICAgPFJhZGl1c0xlZ2VuZFxuICAgICAgICAgICAgICAgICAgc2NhbGVUeXBlPXtzaXplU2NhbGV9XG4gICAgICAgICAgICAgICAgICBkb21haW49e3NpemVEb21haW59XG4gICAgICAgICAgICAgICAgICBmaWVsZFR5cGU9eyhzaXplRmllbGQgJiYgc2l6ZUZpZWxkLnR5cGUpIHx8ICdyZWFsJ31cbiAgICAgICAgICAgICAgICAgIHJhbmdlPXtzaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5jb25zdCBpc0NvbG9yQ2hhbm5lbCA9IHZpc3VhbENoYW5uZWwgPT5cbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yLCBDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3JdLmluY2x1ZGVzKHZpc3VhbENoYW5uZWwuY2hhbm5lbFNjYWxlVHlwZSk7XG5cbmV4cG9ydCB0eXBlIExheWVyTGVnZW5kSGVhZGVyUHJvcHMgPSB7XG4gIGxheWVyOiBMYXllcjtcbiAgb3B0aW9ucz86IHtcbiAgICBzaG93TGF5ZXJOYW1lPzogYm9vbGVhbjtcbiAgfTtcbiAgaXNFeHBvcnQ/OiBib29sZWFuO1xufTtcblxuY29uc3QgaXNSYWRpdXNDaGFubmVsID0gdmlzdWFsQ2hhbm5lbCA9PlxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXS5pbmNsdWRlcyh2aXN1YWxDaGFubmVsLmNoYW5uZWxTY2FsZVR5cGUpO1xuXG5leHBvcnQgZnVuY3Rpb24gTGF5ZXJMZWdlbmRIZWFkZXJGYWN0b3J5KCkge1xuICBjb25zdCBMYXllckxlZ2VuZEhlYWRlcjogUmVhY3QuRkM8TGF5ZXJMZWdlbmRIZWFkZXJQcm9wcz4gPSAoe29wdGlvbnMsIGxheWVyfSkgPT4ge1xuICAgIHJldHVybiBvcHRpb25zPy5zaG93TGF5ZXJOYW1lICE9PSBmYWxzZSA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kLS1sYXllcl9uYW1lXCI+e2xheWVyLmNvbmZpZy5sYWJlbH08L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfTtcbiAgcmV0dXJuIExheWVyTGVnZW5kSGVhZGVyO1xufVxuXG5jb25zdCBkZWZhdWx0QWN0aW9uSWNvbnMgPSB7XG4gIGV4cGFuZGVkOiBBcnJvd0Rvd24sXG4gIGNvbGxhcHNlZDogQXJyb3dSaWdodFxufTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJMZWdlbmRDb250ZW50UHJvcHMgPSB7XG4gIGxheWVyOiBMYXllcjtcbiAgY29udGFpbmVyVzogbnVtYmVyO1xuICBtYXBTdGF0ZT86IE1hcFN0YXRlO1xuICBkaXNhYmxlRWRpdD86IGJvb2xlYW47XG4gIGlzRXhwb3J0PzogYm9vbGVhbjtcbiAgb25MYXllclZpc0NvbmZpZ0NoYW5nZT86IChvbGRMYXllcjogTGF5ZXIsIG5ld1Zpc0NvbmZpZzogUGFydGlhbDxMYXllclZpc0NvbmZpZz4pID0+IHZvaWQ7XG4gIGFjdGlvbkljb25zOiBNYXBMZWdlbmRJY29ucztcbn07XG5cbkxheWVyTGVnZW5kQ29udGVudEZhY3RvcnkuZGVwcyA9IFtMYXllckNvbG9yTGVnZW5kRmFjdG9yeV07XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXllckxlZ2VuZENvbnRlbnRGYWN0b3J5KFxuICBMYXllckNvbG9yTGVnZW5kOiBSZXR1cm5UeXBlPHR5cGVvZiBMYXllckNvbG9yTGVnZW5kRmFjdG9yeT5cbikge1xuICBjb25zdCBMYXllckxlZ2VuZENvbnRlbnQ6IFJlYWN0LkZDPExheWVyTGVnZW5kQ29udGVudFByb3BzPiA9ICh7XG4gICAgbGF5ZXIsXG4gICAgY29udGFpbmVyVyxcbiAgICBtYXBTdGF0ZSxcbiAgICBkaXNhYmxlRWRpdCxcbiAgICBpc0V4cG9ydCxcbiAgICBvbkxheWVyVmlzQ29uZmlnQ2hhbmdlLFxuICAgIGFjdGlvbkljb25zXG4gIH0pID0+IHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVscyA9IGxheWVyLmdldExlZ2VuZFZpc3VhbENoYW5uZWxzKCk7XG4gICAgY29uc3QgY2hhbm5lbEtleXMgPSBPYmplY3QudmFsdWVzKHZpc3VhbENoYW5uZWxzKTtcbiAgICBjb25zdCBjb2xvckNoYW5uZWxzID0gY2hhbm5lbEtleXMuZmlsdGVyKGlzQ29sb3JDaGFubmVsKSBhcyBWaXN1YWxDaGFubmVsW107XG4gICAgY29uc3Qgbm9uQ29sb3JDaGFubmVscyA9IGNoYW5uZWxLZXlzLmZpbHRlcih2YyA9PiAhaXNDb2xvckNoYW5uZWwodmMpKTtcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lclcgLSAyICogRElNRU5TSU9OUy5tYXBDb250cm9sLnBhZGRpbmc7XG5cbiAgICAvLyByZW5kZXIgY29sb3IgYnkgY2hhbmVsIG9ubHlcbiAgICBsZXQgY29sb3JDaGFubmVsVG9SZW5kZXIgPSBjb2xvckNoYW5uZWxzLmZpbHRlcihcbiAgICAgIGNjID0+XG4gICAgICAgICghY2MuY29uZGl0aW9uIHx8IGNjLmNvbmRpdGlvbihsYXllci5jb25maWcpKSAmJlxuICAgICAgICBsYXllci5nZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oY2Mua2V5KT8ubWVhc3VyZVxuICAgICk7XG4gICAgLy8gaWYgbm8gY29sb3IgYnkgY2hhbmVsLCByZW5kZXIgcmVzdFxuICAgIGlmICghY29sb3JDaGFubmVsVG9SZW5kZXIubGVuZ3RoKSB7XG4gICAgICBjb2xvckNoYW5uZWxUb1JlbmRlciA9IGNvbG9yQ2hhbm5lbHMuZmlsdGVyKFxuICAgICAgICBjYyA9PiAhY2MuY29uZGl0aW9uIHx8IGNjLmNvbmRpdGlvbihsYXllci5jb25maWcpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2NvbG9yQ2hhbm5lbFRvUmVuZGVyLm1hcChjb2xvckNoYW5uZWwgPT4gKFxuICAgICAgICAgIDxMYXllckNvbG9yTGVnZW5kXG4gICAgICAgICAgICBrZXk9e2NvbG9yQ2hhbm5lbC5rZXl9XG4gICAgICAgICAgICBjb2xvckNoYW5uZWw9e2NvbG9yQ2hhbm5lbH1cbiAgICAgICAgICAgIGNvbmZpZz17bGF5ZXIuY29uZmlnfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2xheWVyLmdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbihjb2xvckNoYW5uZWwua2V5KX1cbiAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgIGlzRXhwb3J0PXtpc0V4cG9ydH1cbiAgICAgICAgICAgIGRpc2FibGVFZGl0PXtkaXNhYmxlRWRpdH1cbiAgICAgICAgICAgIG1hcFN0YXRlPXttYXBTdGF0ZX1cbiAgICAgICAgICAgIG9uTGF5ZXJWaXNDb25maWdDaGFuZ2U9e29uTGF5ZXJWaXNDb25maWdDaGFuZ2V9XG4gICAgICAgICAgICBhY3Rpb25JY29ucz17YWN0aW9uSWNvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIHtub25Db2xvckNoYW5uZWxzLm1hcCgodmlzdWFsQ2hhbm5lbDogVmlzdWFsQ2hhbm5lbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGNoQ29uZGl0aW9uID0gIXZpc3VhbENoYW5uZWwuY29uZGl0aW9uIHx8IHZpc3VhbENoYW5uZWwuY29uZGl0aW9uKGxheWVyLmNvbmZpZyk7XG4gICAgICAgICAgY29uc3QgZW5hYmxlZCA9IGxheWVyLmNvbmZpZ1t2aXN1YWxDaGFubmVsLmZpZWxkXSB8fCB2aXN1YWxDaGFubmVsLmRlZmF1bHRNZWFzdXJlO1xuXG4gICAgICAgICAgaWYgKG1hdGNoQ29uZGl0aW9uICYmIGVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbGF5ZXIuZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKHZpc3VhbENoYW5uZWwua2V5KTtcbiAgICAgICAgICAgIGlmIChpc1JhZGl1c0NoYW5uZWwodmlzdWFsQ2hhbm5lbCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGF5ZXJSYWRpdXNMZWdlbmRcbiAgICAgICAgICAgICAgICAgIGtleT17dmlzdWFsQ2hhbm5lbC5rZXl9XG4gICAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgICAgICBtYXBTdGF0ZT17bWFwU3RhdGV9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICB2aXN1YWxDaGFubmVsPXt2aXN1YWxDaGFubmVsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGF5ZXJEZWZhdWx0TGVnZW5kXG4gICAgICAgICAgICAgICAga2V5PXt2aXN1YWxDaGFubmVsLmtleX1cbiAgICAgICAgICAgICAgICBsYWJlbD17ZGVzY3JpcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgbmFtZT17ZGVzY3JpcHRpb24ubWVhc3VyZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIExheWVyTGVnZW5kQ29udGVudDtcbn1cblxuZXhwb3J0IHR5cGUgTWFwTGVnZW5kUHJvcHMgPSB7XG4gIGxheWVycz86IFJlYWRvbmx5QXJyYXk8TGF5ZXI+O1xuICB3aWR0aD86IG51bWJlcjtcbiAgbWFwU3RhdGU/OiBNYXBTdGF0ZTtcbiAgb3B0aW9ucz86IHtcbiAgICBzaG93TGF5ZXJOYW1lPzogYm9vbGVhbjtcbiAgfTtcbiAgZGlzYWJsZUVkaXQ/OiBib29sZWFuO1xuICBpc0V4cG9ydD86IGJvb2xlYW47XG4gIG9uTGF5ZXJWaXNDb25maWdDaGFuZ2U/OiAob2xkTGF5ZXI6IExheWVyLCBuZXdWaXNDb25maWc6IFBhcnRpYWw8TGF5ZXJWaXNDb25maWc+KSA9PiB2b2lkO1xuICBhY3Rpb25JY29ucz86IE1hcExlZ2VuZEljb25zO1xufTtcblxuTWFwTGVnZW5kRmFjdG9yeS5kZXBzID0gW0xheWVyTGVnZW5kSGVhZGVyRmFjdG9yeSwgTGF5ZXJMZWdlbmRDb250ZW50RmFjdG9yeV07XG5cbmZ1bmN0aW9uIE1hcExlZ2VuZEZhY3RvcnkoXG4gIExheWVyTGVnZW5kSGVhZGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBMYXllckxlZ2VuZEhlYWRlckZhY3Rvcnk+LFxuICBMYXllckxlZ2VuZENvbnRlbnQ6IFJldHVyblR5cGU8dHlwZW9mIExheWVyTGVnZW5kQ29udGVudEZhY3Rvcnk+XG4pIHtcbiAgY29uc3QgTWFwTGVnZW5kOiBSZWFjdC5GQzxNYXBMZWdlbmRQcm9wcz4gPSAoe1xuICAgIGxheWVycyA9IFtdLFxuICAgIHdpZHRoLFxuICAgIG1hcFN0YXRlLFxuICAgIG9wdGlvbnMsXG4gICAgZGlzYWJsZUVkaXQsXG4gICAgaXNFeHBvcnQsXG4gICAgb25MYXllclZpc0NvbmZpZ0NoYW5nZSxcbiAgICBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29uc1xuICB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtbGVnZW5kXCI+XG4gICAgICB7bGF5ZXJzLm1hcCgobGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICghbGF5ZXIuaXNWYWxpZFRvU2F2ZSgpIHx8IGxheWVyLmNvbmZpZy5oaWRkZW4pIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWluZXJXID0gd2lkdGggfHwgRElNRU5TSU9OUy5tYXBDb250cm9sLndpZHRoO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN0eWxlZE1hcENvbnRyb2xMZWdlbmRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJcIlxuICAgICAgICAgICAgbGFzdD17aW5kZXggPT09IGxheWVycy5sZW5ndGggLSAxfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHdpZHRoPXtjb250YWluZXJXfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMYXllckxlZ2VuZEhlYWRlciBpc0V4cG9ydD17aXNFeHBvcnR9IG9wdGlvbnM9e29wdGlvbnN9IGxheWVyPXtsYXllcn0gLz5cbiAgICAgICAgICAgIDxMYXllckxlZ2VuZENvbnRlbnRcbiAgICAgICAgICAgICAgY29udGFpbmVyVz17Y29udGFpbmVyV31cbiAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICBtYXBTdGF0ZT17bWFwU3RhdGV9XG4gICAgICAgICAgICAgIGRpc2FibGVFZGl0PXtkaXNhYmxlRWRpdH1cbiAgICAgICAgICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxuICAgICAgICAgICAgICBvbkxheWVyVmlzQ29uZmlnQ2hhbmdlPXtvbkxheWVyVmlzQ29uZmlnQ2hhbmdlfVxuICAgICAgICAgICAgICBhY3Rpb25JY29ucz17YWN0aW9uSWNvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3R5bGVkTWFwQ29udHJvbExlZ2VuZD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xuXG4gIE1hcExlZ2VuZC5kaXNwbGF5TmFtZSA9ICdNYXBMZWdlbmQnO1xuXG4gIHJldHVybiBNYXBMZWdlbmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcExlZ2VuZEZhY3Rvcnk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGlCQUFBLEdBQUFDLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7QUFDQSxJQUFBSSxTQUFBLEdBQUFKLE9BQUE7QUFDQSxJQUFBSyxVQUFBLEdBQUFMLE9BQUE7QUFDQSxJQUFBTSxZQUFBLEdBQUFQLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBTyxhQUFBLEdBQUFMLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBUSxJQUFBLEdBQUFSLE9BQUE7QUFDQSxJQUFBUyxLQUFBLEdBQUFULE9B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