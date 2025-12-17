"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendColorDisplayFactory = LegendColorDisplayFactory;
exports.LegendRowEditorFactory = LegendRowEditorFactory;
exports.LegendRowFactory = LegendRowFactory;
exports.ResetColorLabelFactory = ResetColorLabelFactory;
exports["default"] = void 0;
exports.useLayerColorLegends = useLayerColorLegends;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/node_modules/react"));
var _styledComponents = _interopRequireWildcard(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/node_modules/styled-components"));
var _src = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/constants/src");
var _src2 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/utils/src");
var _icons = require("./icons");
var _styledComponents2 = require("./styled-components");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ROW_H = 15;
var GAP = 2;
var RECT_W = 20;
var stopClickPropagation = function stopClickPropagation(e) {
  return e.stopPropagation();
};
var inputCss = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  input {\n    pointer-events: none;\n  }\n"])));
var StyledLegend = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  ", ";\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: ", "px;\n  display: grid;\n  grid-row-gap: ", "px;\n  padding: 2px 0;\n\n  ", "\n"])), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.isExpanded ? '' : "max-height: 156px;";
}, GAP, GAP, function (props) {
  return props.disableEdit ? inputCss : '';
});
var StyledLegendRow = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  height: 20px;\n  min-width: 0;\n"])));
function ResetColorLabelFactory() {
  return (0, _styledComponents["default"])(_icons.Reset)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    cursor: pointer;\n    flex-shrink: 0;\n    margin-left: ", "px;\n\n    &:hover {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.labelColorLT;
  }, GAP, function (props) {
    return props.theme.panelHeaderIconHover;
  });
}
var StyleInlineInput = (0, _styledComponents["default"])(_styledComponents2.InlineInput)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 9.5px;\n  line-height: ", "px;\n  height: ", "px;\n  color: ", ";\n  width: unset;\n  padding: 2px;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 ", "px;\n  :hover {\n    height: ", "px;\n  }\n"])), ROW_H, ROW_H, function (props) {
  return props.theme.textColor;
}, GAP, ROW_H);
function LegendRowEditorFactory() {
  var LegendRowEditor = function LegendRowEditor(_ref) {
    var color = _ref.color,
      label = _ref.label,
      onEdit = _ref.onEdit,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
    var onChange = (0, _react.useCallback)(function (event) {
      return onEdit(event.target.value);
    }, [onEdit]);
    return /*#__PURE__*/_react["default"].createElement(StyleInlineInput, {
      type: "text",
      className: "legend__label__title__editor",
      value: label,
      onClick: stopClickPropagation,
      onChange: onChange,
      disabled: disabled,
      id: "".concat(color, ":input-legend-label")
    });
  };
  LegendRowEditor.displayName = 'LegendRowEditor';
  return LegendRowEditor;
}
var LegendRowStyle = {
  width: "".concat(RECT_W, "px"),
  height: "".concat(ROW_H, "px")
};
function LegendColorDisplayFactory() {
  var LegendColorDisplay = function LegendColorDisplay(_ref2) {
    var color = _ref2.color;
    var style = (0, _react.useMemo)(function () {
      return _objectSpread(_objectSpread({}, LegendRowStyle), {}, {
        backgroundColor: color,
        marginRight: "".concat(GAP, "px")
      });
    }, [color]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: style,
      className: "legend-row-color"
    });
  };
  return LegendColorDisplay;
}
var StyledLabel = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 10px;\n  color: ", ";\n  padding-left: 2px;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), function (props) {
  return props.theme.textColor;
});
LegendRowFactory.deps = [LegendColorDisplayFactory, LegendRowEditorFactory, ResetColorLabelFactory];
function LegendRowFactory(LegendColorDisplay, LegendRowEditor, ResetColorLabel) {
  var LegendRow = function LegendRow(_ref3) {
    var _ref3$label = _ref3.label,
      label = _ref3$label === void 0 ? '' : _ref3$label,
      displayLabel = _ref3.displayLabel,
      color = _ref3.color,
      onUpdateLabel = _ref3.onUpdateLabel,
      onResetLabel = _ref3.onResetLabel;
    var onEdit = (0, _react.useCallback)(function (newLabel) {
      return onUpdateLabel && onUpdateLabel(color, newLabel);
    }, [color, onUpdateLabel]);
    var onReset = (0, _react.useCallback)(function () {
      return onResetLabel && onResetLabel(color);
    }, [color, onResetLabel]);
    var value = displayLabel ? String(label !== null && label !== void 0 ? label : '') : '';
    return /*#__PURE__*/_react["default"].createElement(StyledLegendRow, null, /*#__PURE__*/_react["default"].createElement(LegendColorDisplay, {
      color: color
    }), onUpdateLabel ? /*#__PURE__*/_react["default"].createElement(LegendRowEditor, {
      disabled: !onUpdateLabel,
      label: value,
      color: color,
      onEdit: onEdit
    }) : /*#__PURE__*/_react["default"].createElement(StyledLabel, null, value), onResetLabel ? /*#__PURE__*/_react["default"].createElement(ResetColorLabel, {
      onClick: onReset,
      height: "16px"
    }) : null);
  };
  LegendRow.displayName = 'LegendRow';
  return LegendRow;
}
var overrideColorLegends = function overrideColorLegends(colorLegends, overrides) {
  var data = overrides.data,
    labels = overrides.labels;
  var newColorLegends = (0, _toConsumableArray2["default"])(colorLegends);
  data.forEach(function (datum, index) {
    var currentIndex = colorLegends.findIndex(function (d) {
      return d.data === datum;
    });
    if (currentIndex !== -1) {
      newColorLegends[currentIndex] = {
        label: labels[index],
        data: datum,
        override: true
      };
      newColorLegends[currentIndex].label = labels[index];
    } else {
      newColorLegends.push({
        data: datum,
        label: labels[index],
        override: true
      });
    }
  });
  return newColorLegends;
};
/**
 * Overrides legend labels with color legends.
 * @param param0 Legend info and override parameters.
 * @returns Original or overriden lenends.
 */
function overrideByCustomLegend(_ref4) {
  var colorLegends = _ref4.colorLegends,
    currentLegends = _ref4.currentLegends;
  if (colorLegends && (0, _src2.isObject)(colorLegends)) {
    // override labels with color legends
    var data = Object.keys(colorLegends);
    var labels = Object.values(colorLegends);
    return overrideColorLegends(currentLegends, {
      data: data,
      labels: labels
    });
  }
  return currentLegends;
}
function useLayerColorLegends(layer, scaleType, domain, range, isFixed, fieldType, labelFormat, mapState) {
  var scale = (0, _react.useMemo)(function () {
    return (0, _src2.getLayerColorScale)({
      range: range,
      domain: domain,
      scaleType: scaleType,
      isFixed: isFixed,
      layer: layer
    });
  }, [range, domain, scaleType, isFixed, layer]);
  var scaleByZoom = (0, _react.useMemo)(function () {
    return (0, _src2.getVisualChannelScaleByZoom)({
      scale: scale,
      layer: layer,
      mapState: mapState
    });
  }, [scale, layer, mapState]);
  var currentLegends = (0, _react.useMemo)(function () {
    if (scaleType === _src.SCALE_TYPES.customOrdinal && range !== null && range !== void 0 && range.colorMap) {
      var colorBreaks = (0, _src2.colorMapToCategoricalColorBreaks)(range.colorMap);
      return colorBreaks === null || colorBreaks === void 0 ? void 0 : colorBreaks.map(function (cb) {
        return {
          data: cb.data,
          label: Array.isArray(cb.label) ? cb.label.length > 5 ? "".concat(cb.label.length, " selected") : cb.label : cb.label || ''
        };
      });
    }
    return (0, _src2.getLegendOfScale)({
      scale: scaleByZoom,
      scaleType: scaleType,
      labelFormat: labelFormat,
      fieldType: fieldType
    });
  }, [range, scaleByZoom, scaleType, labelFormat, fieldType]);
  var LegendsWithCustomLegends = (0, _react.useMemo)(function () {
    return overrideByCustomLegend({
      colorLegends: range === null || range === void 0 ? void 0 : range.colorLegends,
      currentLegends: currentLegends
    });
  }, [range === null || range === void 0 ? void 0 : range.colorLegends, currentLegends]);
  return LegendsWithCustomLegends || [];
}
ColorLegendFactory.deps = [LegendRowFactory];
function ColorLegendFactory(LegendRow) {
  var ColorLegend = function ColorLegend(_ref5) {
    var layer = _ref5.layer,
      isFixed = _ref5.isFixed,
      isExpanded = _ref5.isExpanded,
      domain = _ref5.domain,
      range = _ref5.range,
      labelFormat = _ref5.labelFormat,
      scaleType = _ref5.scaleType,
      fieldType = _ref5.fieldType,
      mapState = _ref5.mapState,
      onUpdateColorLegend = _ref5.onUpdateColorLegend,
      _ref5$displayLabel = _ref5.displayLabel,
      displayLabel = _ref5$displayLabel === void 0 ? true : _ref5$displayLabel,
      _ref5$disableEdit = _ref5.disableEdit,
      disableEdit = _ref5$disableEdit === void 0 ? false : _ref5$disableEdit;
    var _ref6 = range || {},
      colorLegends = _ref6.colorLegends;
    var legends = useLayerColorLegends(layer, scaleType, domain, range, isFixed, fieldType, labelFormat, mapState);
    var onUpdateLabel = (0, _react.useCallback)(function (color, newValue) {
      if (onUpdateColorLegend) {
        onUpdateColorLegend(_objectSpread(_objectSpread({}, colorLegends), {}, (0, _defineProperty2["default"])({}, color, newValue)));
      }
    }, [onUpdateColorLegend, colorLegends]);
    var onResetLabel = (0, _react.useCallback)(function (color) {
      /* eslint-disable no-unused-vars */
      // @ts-ignore
      var _ = colorLegends[color],
        rest = (0, _objectWithoutProperties2["default"])(colorLegends, [color].map(_toPropertyKey));
      if (onUpdateColorLegend && rest) {
        onUpdateColorLegend(rest);
      }
      /* eslint-enable no-unused-vars */
    }, [onUpdateColorLegend, colorLegends]);
    return /*#__PURE__*/_react["default"].createElement(StyledLegend, {
      className: "styled-color-legend",
      disableEdit: disableEdit,
      isExpanded: isExpanded
    }, legends.map(function (legend, i) {
      return /*#__PURE__*/_react["default"].createElement(LegendRow, {
        key: "".concat(legend.data, "-").concat(i),
        label: legend.label,
        displayLabel: displayLabel,
        color: legend.data,
        onUpdateLabel: !disableEdit ? onUpdateLabel : undefined,
        onResetLabel: legend.override && !disableEdit ? onResetLabel : undefined
      });
    }));
  };
  return _react["default"].memo(ColorLegend);
}
var _default = exports["default"] = ColorLegendFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9zcmMiLCJfc3JjMiIsIl9pY29ucyIsIl9zdHlsZWRDb21wb25lbnRzMiIsIl90ZW1wbGF0ZU9iamVjdCIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfdGVtcGxhdGVPYmplY3QzIiwiX3RlbXBsYXRlT2JqZWN0NCIsIl90ZW1wbGF0ZU9iamVjdDUiLCJfdGVtcGxhdGVPYmplY3Q2IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIlJPV19IIiwiR0FQIiwiUkVDVF9XIiwic3RvcENsaWNrUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJpbnB1dENzcyIsImNzcyIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwyIiwiU3R5bGVkTGVnZW5kIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInNpZGVQYW5lbFNjcm9sbEJhciIsImlzRXhwYW5kZWQiLCJkaXNhYmxlRWRpdCIsIlN0eWxlZExlZ2VuZFJvdyIsIlJlc2V0Q29sb3JMYWJlbEZhY3RvcnkiLCJSZXNldCIsImxhYmVsQ29sb3JMVCIsInBhbmVsSGVhZGVySWNvbkhvdmVyIiwiU3R5bGVJbmxpbmVJbnB1dCIsIklubGluZUlucHV0IiwidGV4dENvbG9yIiwiTGVnZW5kUm93RWRpdG9yRmFjdG9yeSIsIkxlZ2VuZFJvd0VkaXRvciIsIl9yZWYiLCJjb2xvciIsImxhYmVsIiwib25FZGl0IiwiX3JlZiRkaXNhYmxlZCIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsImNvbmNhdCIsImRpc3BsYXlOYW1lIiwiTGVnZW5kUm93U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIkxlZ2VuZENvbG9yRGlzcGxheUZhY3RvcnkiLCJMZWdlbmRDb2xvckRpc3BsYXkiLCJfcmVmMiIsInN0eWxlIiwidXNlTWVtbyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblJpZ2h0IiwiU3R5bGVkTGFiZWwiLCJMZWdlbmRSb3dGYWN0b3J5IiwiZGVwcyIsIlJlc2V0Q29sb3JMYWJlbCIsIkxlZ2VuZFJvdyIsIl9yZWYzIiwiX3JlZjMkbGFiZWwiLCJkaXNwbGF5TGFiZWwiLCJvblVwZGF0ZUxhYmVsIiwib25SZXNldExhYmVsIiwibmV3TGFiZWwiLCJvblJlc2V0Iiwib3ZlcnJpZGVDb2xvckxlZ2VuZHMiLCJjb2xvckxlZ2VuZHMiLCJvdmVycmlkZXMiLCJkYXRhIiwibGFiZWxzIiwibmV3Q29sb3JMZWdlbmRzIiwiX3RvQ29uc3VtYWJsZUFycmF5MiIsImRhdHVtIiwiaW5kZXgiLCJjdXJyZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJkIiwib3ZlcnJpZGUiLCJvdmVycmlkZUJ5Q3VzdG9tTGVnZW5kIiwiX3JlZjQiLCJjdXJyZW50TGVnZW5kcyIsImlzT2JqZWN0IiwidmFsdWVzIiwidXNlTGF5ZXJDb2xvckxlZ2VuZHMiLCJsYXllciIsInNjYWxlVHlwZSIsImRvbWFpbiIsInJhbmdlIiwiaXNGaXhlZCIsImZpZWxkVHlwZSIsImxhYmVsRm9ybWF0IiwibWFwU3RhdGUiLCJzY2FsZSIsImdldExheWVyQ29sb3JTY2FsZSIsInNjYWxlQnlab29tIiwiZ2V0VmlzdWFsQ2hhbm5lbFNjYWxlQnlab29tIiwiU0NBTEVfVFlQRVMiLCJjdXN0b21PcmRpbmFsIiwiY29sb3JNYXAiLCJjb2xvckJyZWFrcyIsImNvbG9yTWFwVG9DYXRlZ29yaWNhbENvbG9yQnJlYWtzIiwibWFwIiwiY2IiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRMZWdlbmRPZlNjYWxlIiwiTGVnZW5kc1dpdGhDdXN0b21MZWdlbmRzIiwiQ29sb3JMZWdlbmRGYWN0b3J5IiwiQ29sb3JMZWdlbmQiLCJfcmVmNSIsIm9uVXBkYXRlQ29sb3JMZWdlbmQiLCJfcmVmNSRkaXNwbGF5TGFiZWwiLCJfcmVmNSRkaXNhYmxlRWRpdCIsIl9yZWY2IiwibGVnZW5kcyIsIm5ld1ZhbHVlIiwiXyIsInJlc3QiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwibGVnZW5kIiwia2V5IiwidW5kZWZpbmVkIiwiUmVhY3QiLCJtZW1vIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc3JjL2NvbW1vbi9jb2xvci1sZWdlbmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vIENvcHlyaWdodCBjb250cmlidXRvcnMgdG8gdGhlIGtlcGxlci5nbCBwcm9qZWN0XG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7U0NBTEVfVFlQRVN9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7TGF5ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7Q29sb3JSYW5nZSwgSGV4Q29sb3IsIE1hcFN0YXRlfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7XG4gIGdldExheWVyQ29sb3JTY2FsZSxcbiAgZ2V0TGVnZW5kT2ZTY2FsZSxcbiAgZ2V0VmlzdWFsQ2hhbm5lbFNjYWxlQnlab29tLFxuICBjb2xvck1hcFRvQ2F0ZWdvcmljYWxDb2xvckJyZWFrcyxcbiAgaXNPYmplY3Rcbn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmltcG9ydCB7UmVzZXR9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0IHtJbmxpbmVJbnB1dH0gZnJvbSAnLi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFJPV19IID0gMTU7XG5jb25zdCBHQVAgPSAyO1xuY29uc3QgUkVDVF9XID0gMjA7XG5cbmNvbnN0IHN0b3BDbGlja1Byb3BhZ2F0aW9uID0gZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5jb25zdCBpbnB1dENzcyA9IGNzc2BcbiAgaW5wdXQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuY29uc3QgU3R5bGVkTGVnZW5kID0gc3R5bGVkLmRpdjx7ZGlzYWJsZUVkaXQ6IGJvb2xlYW47IGlzRXhwYW5kZWQ/OiBib29sZWFufT5gXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsU2Nyb2xsQmFyfTtcbiAgJHtwcm9wcyA9PiAocHJvcHMuaXNFeHBhbmRlZCA/ICcnIDogYG1heC1oZWlnaHQ6IDE1NnB4O2ApfTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAke0dBUH1weDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAke0dBUH1weDtcbiAgcGFkZGluZzogMnB4IDA7XG5cbiAgJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZUVkaXQgPyBpbnB1dENzcyA6ICcnKX1cbmA7XG5cbmNvbnN0IFN0eWxlZExlZ2VuZFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgbWluLXdpZHRoOiAwO1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIFJlc2V0Q29sb3JMYWJlbEZhY3RvcnkoKSB7XG4gIHJldHVybiBzdHlsZWQoUmVzZXQpYFxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3JMVH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAke0dBUH1weDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29uSG92ZXJ9O1xuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgU3R5bGVJbmxpbmVJbnB1dCA9IHN0eWxlZChJbmxpbmVJbnB1dClgXG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIGxpbmUtaGVpZ2h0OiAke1JPV19IfXB4O1xuICBoZWlnaHQ6ICR7Uk9XX0h9cHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIHdpZHRoOiB1bnNldDtcbiAgcGFkZGluZzogMnB4O1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDAgJHtHQVB9cHg7XG4gIDpob3ZlciB7XG4gICAgaGVpZ2h0OiAke1JPV19IfXB4O1xuICB9XG5gO1xuXG5leHBvcnQgdHlwZSBMZWdlbmRSb3dFZGl0b3JQcm9wcyA9IHtcbiAgY29sb3I6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgY3VzdG9tTGFiZWw/OiBzdHJpbmc7XG4gIG9uRWRpdDogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn07XG5leHBvcnQgZnVuY3Rpb24gTGVnZW5kUm93RWRpdG9yRmFjdG9yeSgpIHtcbiAgY29uc3QgTGVnZW5kUm93RWRpdG9yOiBSZWFjdC5GQzxMZWdlbmRSb3dFZGl0b3JQcm9wcz4gPSAoe1xuICAgIGNvbG9yLFxuICAgIGxhYmVsLFxuICAgIG9uRWRpdCxcbiAgICBkaXNhYmxlZCA9IGZhbHNlXG4gIH0pID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+IG9uRWRpdChldmVudC50YXJnZXQudmFsdWUpLCBbb25FZGl0XSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZUlubGluZUlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwibGVnZW5kX19sYWJlbF9fdGl0bGVfX2VkaXRvclwiXG4gICAgICAgIHZhbHVlPXtsYWJlbH1cbiAgICAgICAgb25DbGljaz17c3RvcENsaWNrUHJvcGFnYXRpb259XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBpZD17YCR7Y29sb3J9OmlucHV0LWxlZ2VuZC1sYWJlbGB9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgTGVnZW5kUm93RWRpdG9yLmRpc3BsYXlOYW1lID0gJ0xlZ2VuZFJvd0VkaXRvcic7XG4gIHJldHVybiBMZWdlbmRSb3dFZGl0b3I7XG59XG5cbmNvbnN0IExlZ2VuZFJvd1N0eWxlID0ge1xuICB3aWR0aDogYCR7UkVDVF9XfXB4YCxcbiAgaGVpZ2h0OiBgJHtST1dfSH1weGBcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBMZWdlbmRDb2xvckRpc3BsYXlGYWN0b3J5KCkge1xuICBjb25zdCBMZWdlbmRDb2xvckRpc3BsYXkgPSAoe2NvbG9yfSkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gdXNlTWVtbyhcbiAgICAgICgpID0+ICh7Li4uTGVnZW5kUm93U3R5bGUsIGJhY2tncm91bmRDb2xvcjogY29sb3IsIG1hcmdpblJpZ2h0OiBgJHtHQVB9cHhgfSksXG4gICAgICBbY29sb3JdXG4gICAgKTtcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cImxlZ2VuZC1yb3ctY29sb3JcIiAvPjtcbiAgfTtcblxuICByZXR1cm4gTGVnZW5kQ29sb3JEaXNwbGF5O1xufVxuXG5jb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5leHBvcnQgdHlwZSBMZWdlbmRSb3dQcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY3VzdG9tTGFiZWw/OiBzdHJpbmc7XG4gIGRpc3BsYXlMYWJlbD86IGJvb2xlYW47XG4gIGNvbG9yOiBzdHJpbmc7XG4gIG9uVXBkYXRlTGFiZWw/OiAoc2VsZWN0ZWRDb2xvcjogc3RyaW5nLCBuZXdMYWJlbDogc3RyaW5nKSA9PiB2b2lkO1xuICBvblJlc2V0TGFiZWw/OiAoY29sb3I6IHN0cmluZykgPT4gdm9pZDtcbiAgZGlzYWJsZUVkaXQ/OiBib29sZWFuO1xufTtcblxuTGVnZW5kUm93RmFjdG9yeS5kZXBzID0gW0xlZ2VuZENvbG9yRGlzcGxheUZhY3RvcnksIExlZ2VuZFJvd0VkaXRvckZhY3RvcnksIFJlc2V0Q29sb3JMYWJlbEZhY3RvcnldO1xuZXhwb3J0IGZ1bmN0aW9uIExlZ2VuZFJvd0ZhY3RvcnkoXG4gIExlZ2VuZENvbG9yRGlzcGxheTogUmV0dXJuVHlwZTx0eXBlb2YgTGVnZW5kQ29sb3JEaXNwbGF5RmFjdG9yeT4sXG4gIExlZ2VuZFJvd0VkaXRvcjogUmV0dXJuVHlwZTx0eXBlb2YgTGVnZW5kUm93RWRpdG9yRmFjdG9yeT4sXG4gIFJlc2V0Q29sb3JMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgUmVzZXRDb2xvckxhYmVsRmFjdG9yeT5cbikge1xuICBjb25zdCBMZWdlbmRSb3c6IFJlYWN0LkZDPExlZ2VuZFJvd1Byb3BzPiA9ICh7XG4gICAgbGFiZWwgPSAnJyxcbiAgICBkaXNwbGF5TGFiZWwsXG4gICAgY29sb3IsXG4gICAgb25VcGRhdGVMYWJlbCxcbiAgICBvblJlc2V0TGFiZWxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IG9uRWRpdCA9IHVzZUNhbGxiYWNrKFxuICAgICAgbmV3TGFiZWwgPT4gb25VcGRhdGVMYWJlbCAmJiBvblVwZGF0ZUxhYmVsKGNvbG9yLCBuZXdMYWJlbCksXG4gICAgICBbY29sb3IsIG9uVXBkYXRlTGFiZWxdXG4gICAgKTtcbiAgICBjb25zdCBvblJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4gb25SZXNldExhYmVsICYmIG9uUmVzZXRMYWJlbChjb2xvciksIFtjb2xvciwgb25SZXNldExhYmVsXSk7XG4gICAgY29uc3QgdmFsdWUgPSBkaXNwbGF5TGFiZWwgPyBTdHJpbmcobGFiZWwgPz8gJycpIDogJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMZWdlbmRSb3c+XG4gICAgICAgIDxMZWdlbmRDb2xvckRpc3BsYXkgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgICB7b25VcGRhdGVMYWJlbCA/IChcbiAgICAgICAgICA8TGVnZW5kUm93RWRpdG9yIGRpc2FibGVkPXshb25VcGRhdGVMYWJlbH0gbGFiZWw9e3ZhbHVlfSBjb2xvcj17Y29sb3J9IG9uRWRpdD17b25FZGl0fSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxTdHlsZWRMYWJlbD57dmFsdWV9PC9TdHlsZWRMYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAge29uUmVzZXRMYWJlbCA/IDxSZXNldENvbG9yTGFiZWwgb25DbGljaz17b25SZXNldH0gaGVpZ2h0PVwiMTZweFwiIC8+IDogbnVsbH1cbiAgICAgIDwvU3R5bGVkTGVnZW5kUm93PlxuICAgICk7XG4gIH07XG4gIExlZ2VuZFJvdy5kaXNwbGF5TmFtZSA9ICdMZWdlbmRSb3cnO1xuICByZXR1cm4gTGVnZW5kUm93O1xufVxuXG5jb25zdCBvdmVycmlkZUNvbG9yTGVnZW5kcyA9IChjb2xvckxlZ2VuZHMsIG92ZXJyaWRlcykgPT4ge1xuICBjb25zdCB7ZGF0YSwgbGFiZWxzfSA9IG92ZXJyaWRlcztcblxuICBjb25zdCBuZXdDb2xvckxlZ2VuZHMgPSBbLi4uY29sb3JMZWdlbmRzXTtcblxuICBkYXRhLmZvckVhY2goKGRhdHVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNvbG9yTGVnZW5kcy5maW5kSW5kZXgoZCA9PiBkLmRhdGEgPT09IGRhdHVtKTtcbiAgICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgICAgbmV3Q29sb3JMZWdlbmRzW2N1cnJlbnRJbmRleF0gPSB7XG4gICAgICAgIGxhYmVsOiBsYWJlbHNbaW5kZXhdLFxuICAgICAgICBkYXRhOiBkYXR1bSxcbiAgICAgICAgb3ZlcnJpZGU6IHRydWVcbiAgICAgIH07XG4gICAgICBuZXdDb2xvckxlZ2VuZHNbY3VycmVudEluZGV4XS5sYWJlbCA9IGxhYmVsc1tpbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NvbG9yTGVnZW5kcy5wdXNoKHtcbiAgICAgICAgZGF0YTogZGF0dW0sXG4gICAgICAgIGxhYmVsOiBsYWJlbHNbaW5kZXhdLFxuICAgICAgICBvdmVycmlkZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmV3Q29sb3JMZWdlbmRzO1xufTtcblxudHlwZSBPdmVycmlkZUJ5Q3VzdG9tTGVnZW5kT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIExlZ2VuZCBwYXJhbWV0ZXJzIHRvIG92ZXJyaWRlXG4gICAqL1xuICBjb2xvckxlZ2VuZHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAvKipcbiAgICogT3JpZ2luYWwgTGVnZW5kc1xuICAgKi9cbiAgY3VycmVudExlZ2VuZHM/OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRMZWdlbmRPZlNjYWxlPjtcbn07XG5cbi8qKlxuICogT3ZlcnJpZGVzIGxlZ2VuZCBsYWJlbHMgd2l0aCBjb2xvciBsZWdlbmRzLlxuICogQHBhcmFtIHBhcmFtMCBMZWdlbmQgaW5mbyBhbmQgb3ZlcnJpZGUgcGFyYW1ldGVycy5cbiAqIEByZXR1cm5zIE9yaWdpbmFsIG9yIG92ZXJyaWRlbiBsZW5lbmRzLlxuICovXG5mdW5jdGlvbiBvdmVycmlkZUJ5Q3VzdG9tTGVnZW5kKHtjb2xvckxlZ2VuZHMsIGN1cnJlbnRMZWdlbmRzfTogT3ZlcnJpZGVCeUN1c3RvbUxlZ2VuZE9wdGlvbnMpIHtcbiAgaWYgKGNvbG9yTGVnZW5kcyAmJiBpc09iamVjdChjb2xvckxlZ2VuZHMpKSB7XG4gICAgLy8gb3ZlcnJpZGUgbGFiZWxzIHdpdGggY29sb3IgbGVnZW5kc1xuICAgIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cyhjb2xvckxlZ2VuZHMpO1xuICAgIGNvbnN0IGxhYmVscyA9IE9iamVjdC52YWx1ZXMoY29sb3JMZWdlbmRzKTtcblxuICAgIHJldHVybiBvdmVycmlkZUNvbG9yTGVnZW5kcyhjdXJyZW50TGVnZW5kcywge2RhdGEsIGxhYmVsc30pO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRMZWdlbmRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5ZXJDb2xvckxlZ2VuZHMoXG4gIGxheWVyOiBDb2xvckxlZ2VuZFByb3BzWydsYXllciddLFxuICBzY2FsZVR5cGU6IENvbG9yTGVnZW5kUHJvcHNbJ3NjYWxlVHlwZSddLFxuICBkb21haW46IENvbG9yTGVnZW5kUHJvcHNbJ2RvbWFpbiddLFxuICByYW5nZTogQ29sb3JMZWdlbmRQcm9wc1sncmFuZ2UnXSxcbiAgaXNGaXhlZDogQ29sb3JMZWdlbmRQcm9wc1snaXNGaXhlZCddLFxuICBmaWVsZFR5cGU6IENvbG9yTGVnZW5kUHJvcHNbJ2ZpZWxkVHlwZSddLFxuICBsYWJlbEZvcm1hdDogQ29sb3JMZWdlbmRQcm9wc1snbGFiZWxGb3JtYXQnXSxcbiAgbWFwU3RhdGU6IENvbG9yTGVnZW5kUHJvcHNbJ21hcFN0YXRlJ11cbik6IExlZ2VuZFtdIHtcbiAgY29uc3Qgc2NhbGUgPSB1c2VNZW1vKFxuICAgICgpID0+IGdldExheWVyQ29sb3JTY2FsZSh7cmFuZ2UsIGRvbWFpbiwgc2NhbGVUeXBlLCBpc0ZpeGVkLCBsYXllcn0pLFxuICAgIFtyYW5nZSwgZG9tYWluLCBzY2FsZVR5cGUsIGlzRml4ZWQsIGxheWVyXVxuICApO1xuXG4gIGNvbnN0IHNjYWxlQnlab29tID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZXRWaXN1YWxDaGFubmVsU2NhbGVCeVpvb20oe3NjYWxlLCBsYXllciwgbWFwU3RhdGV9KSxcbiAgICBbc2NhbGUsIGxheWVyLCBtYXBTdGF0ZV1cbiAgKTtcblxuICBjb25zdCBjdXJyZW50TGVnZW5kcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChzY2FsZVR5cGUgPT09IFNDQUxFX1RZUEVTLmN1c3RvbU9yZGluYWwgJiYgcmFuZ2U/LmNvbG9yTWFwKSB7XG4gICAgICBjb25zdCBjb2xvckJyZWFrcyA9IGNvbG9yTWFwVG9DYXRlZ29yaWNhbENvbG9yQnJlYWtzKHJhbmdlLmNvbG9yTWFwKTtcbiAgICAgIHJldHVybiBjb2xvckJyZWFrcz8ubWFwKGNiID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiBjYi5kYXRhLFxuICAgICAgICAgIGxhYmVsOiBBcnJheS5pc0FycmF5KGNiLmxhYmVsKVxuICAgICAgICAgICAgPyBjYi5sYWJlbC5sZW5ndGggPiA1XG4gICAgICAgICAgICAgID8gYCR7Y2IubGFiZWwubGVuZ3RofSBzZWxlY3RlZGBcbiAgICAgICAgICAgICAgOiBjYi5sYWJlbFxuICAgICAgICAgICAgOiBjYi5sYWJlbCB8fCAnJ1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRMZWdlbmRPZlNjYWxlKHtzY2FsZTogc2NhbGVCeVpvb20sIHNjYWxlVHlwZSwgbGFiZWxGb3JtYXQsIGZpZWxkVHlwZX0pO1xuICB9LCBbcmFuZ2UsIHNjYWxlQnlab29tLCBzY2FsZVR5cGUsIGxhYmVsRm9ybWF0LCBmaWVsZFR5cGVdKTtcblxuICBjb25zdCBMZWdlbmRzV2l0aEN1c3RvbUxlZ2VuZHMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBvdmVycmlkZUJ5Q3VzdG9tTGVnZW5kKHtcbiAgICAgICAgY29sb3JMZWdlbmRzOiByYW5nZT8uY29sb3JMZWdlbmRzLFxuICAgICAgICBjdXJyZW50TGVnZW5kc1xuICAgICAgfSksXG4gICAgW3JhbmdlPy5jb2xvckxlZ2VuZHMsIGN1cnJlbnRMZWdlbmRzXVxuICApO1xuXG4gIHJldHVybiBMZWdlbmRzV2l0aEN1c3RvbUxlZ2VuZHMgfHwgW107XG59XG5cbmV4cG9ydCB0eXBlIENvbG9yTGVnZW5kUHJvcHMgPSB7XG4gIGxheWVyOiBMYXllcjtcbiAgc2NhbGVUeXBlOiBzdHJpbmc7XG4gIGRvbWFpbjogbnVtYmVyW10gfCBzdHJpbmdbXTtcbiAgZmllbGRUeXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgcmFuZ2U/OiBDb2xvclJhbmdlIHwgbnVsbDtcbiAgbGFiZWxGb3JtYXQ/OiAobjogYW55KSA9PiBzdHJpbmc7XG4gIGRpc3BsYXlMYWJlbD86IGJvb2xlYW47XG4gIGRpc2FibGVFZGl0PzogYm9vbGVhbjtcbiAgbWFwU3RhdGU/OiBNYXBTdGF0ZTtcbiAgaXNGaXhlZD86IGJvb2xlYW47XG4gIGlzRXhwYW5kZWQ/OiBib29sZWFuO1xuICBvblVwZGF0ZUNvbG9yTGVnZW5kPzogKGNvbG9yTGVnZW5kczoge1trZXk6IEhleENvbG9yXTogc3RyaW5nfSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCB0eXBlIExlZ2VuZCA9IHtcbiAgZGF0YTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBvdmVycmlkZT86IGJvb2xlYW47XG59O1xuXG5Db2xvckxlZ2VuZEZhY3RvcnkuZGVwcyA9IFtMZWdlbmRSb3dGYWN0b3J5XTtcbmZ1bmN0aW9uIENvbG9yTGVnZW5kRmFjdG9yeShMZWdlbmRSb3c6IFJldHVyblR5cGU8dHlwZW9mIExlZ2VuZFJvd0ZhY3Rvcnk+KSB7XG4gIGNvbnN0IENvbG9yTGVnZW5kOiBSZWFjdC5GQzxDb2xvckxlZ2VuZFByb3BzPiA9ICh7XG4gICAgbGF5ZXIsXG4gICAgaXNGaXhlZCxcbiAgICBpc0V4cGFuZGVkLFxuICAgIGRvbWFpbixcbiAgICByYW5nZSxcbiAgICBsYWJlbEZvcm1hdCxcbiAgICBzY2FsZVR5cGUsXG4gICAgZmllbGRUeXBlLFxuICAgIG1hcFN0YXRlLFxuICAgIG9uVXBkYXRlQ29sb3JMZWdlbmQsXG4gICAgZGlzcGxheUxhYmVsID0gdHJ1ZSxcbiAgICBkaXNhYmxlRWRpdCA9IGZhbHNlXG4gIH0pID0+IHtcbiAgICBjb25zdCB7Y29sb3JMZWdlbmRzfSA9IHJhbmdlIHx8IHt9O1xuXG4gICAgY29uc3QgbGVnZW5kcyA9IHVzZUxheWVyQ29sb3JMZWdlbmRzKFxuICAgICAgbGF5ZXIsXG4gICAgICBzY2FsZVR5cGUsXG4gICAgICBkb21haW4sXG4gICAgICByYW5nZSxcbiAgICAgIGlzRml4ZWQsXG4gICAgICBmaWVsZFR5cGUsXG4gICAgICBsYWJlbEZvcm1hdCxcbiAgICAgIG1hcFN0YXRlXG4gICAgKTtcblxuICAgIGNvbnN0IG9uVXBkYXRlTGFiZWwgPSB1c2VDYWxsYmFjayhcbiAgICAgIChjb2xvciwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgaWYgKG9uVXBkYXRlQ29sb3JMZWdlbmQpIHtcbiAgICAgICAgICBvblVwZGF0ZUNvbG9yTGVnZW5kKHtcbiAgICAgICAgICAgIC4uLmNvbG9yTGVnZW5kcyxcbiAgICAgICAgICAgIFtjb2xvcl06IG5ld1ZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25VcGRhdGVDb2xvckxlZ2VuZCwgY29sb3JMZWdlbmRzXVxuICAgICk7XG5cbiAgICBjb25zdCBvblJlc2V0TGFiZWwgPSB1c2VDYWxsYmFjayhcbiAgICAgIGNvbG9yID0+IHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7W2NvbG9yXTogXywgLi4ucmVzdH0gPSBjb2xvckxlZ2VuZHM7XG4gICAgICAgIGlmIChvblVwZGF0ZUNvbG9yTGVnZW5kICYmIHJlc3QpIHtcbiAgICAgICAgICBvblVwZGF0ZUNvbG9yTGVnZW5kKHJlc3QpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgIH0sXG4gICAgICBbb25VcGRhdGVDb2xvckxlZ2VuZCwgY29sb3JMZWdlbmRzXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExlZ2VuZFxuICAgICAgICBjbGFzc05hbWU9XCJzdHlsZWQtY29sb3ItbGVnZW5kXCJcbiAgICAgICAgZGlzYWJsZUVkaXQ9e2Rpc2FibGVFZGl0fVxuICAgICAgICBpc0V4cGFuZGVkPXtpc0V4cGFuZGVkfVxuICAgICAgPlxuICAgICAgICB7bGVnZW5kcy5tYXAoKGxlZ2VuZCwgaSkgPT4gKFxuICAgICAgICAgIDxMZWdlbmRSb3dcbiAgICAgICAgICAgIGtleT17YCR7bGVnZW5kLmRhdGF9LSR7aX1gfVxuICAgICAgICAgICAgbGFiZWw9e2xlZ2VuZC5sYWJlbH1cbiAgICAgICAgICAgIGRpc3BsYXlMYWJlbD17ZGlzcGxheUxhYmVsfVxuICAgICAgICAgICAgY29sb3I9e2xlZ2VuZC5kYXRhfVxuICAgICAgICAgICAgb25VcGRhdGVMYWJlbD17IWRpc2FibGVFZGl0ID8gb25VcGRhdGVMYWJlbCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG9uUmVzZXRMYWJlbD17bGVnZW5kLm92ZXJyaWRlICYmICFkaXNhYmxlRWRpdCA/IG9uUmVzZXRMYWJlbCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU3R5bGVkTGVnZW5kPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0Lm1lbW8oQ29sb3JMZWdlbmQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvckxlZ2VuZEZhY3Rvcnk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsaUJBQUEsR0FBQUYsdUJBQUEsQ0FBQUMsT0FBQTtBQUVBLElBQUFFLElBQUEsR0FBQUYsT0FBQTtBQUdBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtBQVFBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtBQUNBLElBQUFLLGtCQUFBLEdBQUFMLE9BQUE7QUFBZ0QsSUFBQU0sZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQWxCaEQ7QUFDQTtBQUFBLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBZCx3QkFBQWMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FB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