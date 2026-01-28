"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HISTOGRAM_WIDTH = exports.HISTOGRAM_HEIGHT = exports.ColorChartTick = exports.ColorChartHeader = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _d3Format = require("d3-format");
var _d3Scale = require("d3-scale");
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/react"));
var _styledComponents = _interopRequireDefault(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/styled-components"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/localization/src");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/utils/src");
var _colorPalette = _interopRequireDefault(require("../side-panel/layer-panel/color-palette"));
var _histogramPlot = _interopRequireWildcard(require("./histogram-plot"));
var _loadingSpinner = _interopRequireDefault(require("./loading-spinner"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HISTOGRAM_WIDTH = exports.HISTOGRAM_WIDTH = 210;
var HISTOGRAM_HEIGHT = exports.HISTOGRAM_HEIGHT = 80;
var HISTOGRAM_MARGIN = {
  top: 10,
  bottom: 8,
  left: 10,
  right: 20
};
var COLOR_CHART_TICK_WRAPPER_HEIGHT = 10;
var COLOR_CHART_TICK_HEIGHT = 8;
var COLOR_CHART_TICK_WIDTH = 4;
var COLOR_CHART_TICK_BORDER_COLOR = '#999999';
var StyledContainer = _styledComponents["default"].div.attrs({
  className: 'color-chart-loading'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", "px;\n"])), HISTOGRAM_HEIGHT);

// height 142 = 18 + 110 + 10
var ColorChartContainer = _styledComponents["default"].div.attrs({
  className: 'color-chart-container'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 8px;\n"])));
var ColorChartHeaderWrapper = _styledComponents["default"].div.attrs({
  className: 'color-chart-header'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-around;\n  color: ", ";\n  margin-left: ", "px;\n  margin-right: ", "px;\n  font-size: 9px;\n"])), function (props) {
  return props.theme.textColor;
}, HISTOGRAM_MARGIN.left, HISTOGRAM_MARGIN.right);
var ColorChartHeaderItem = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 33%;\n  overflow: hidden;\n  white-space: nowrap;\n"])));
var ColorChartWrapper = _styledComponents["default"].div.attrs({
  className: 'color-chart-wrapper'
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  height: ", "px;\n"])), HISTOGRAM_HEIGHT + 30);
var ColorPaletteWrapper = _styledComponents["default"].div.attrs({
  className: 'color-chart-palette'
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  margin-top: ", "px;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"])), HISTOGRAM_MARGIN.top, HISTOGRAM_MARGIN.left, HISTOGRAM_MARGIN.right);
var HistogramWrapper = _styledComponents["default"].div.attrs({
  className: 'color-chart-histogram'
})(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n"])));
var ColorChartTickContainer = _styledComponents["default"].div.attrs({
  className: 'color-chart-tick-container'
})(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", "px;\n  position: relative;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"])), COLOR_CHART_TICK_WRAPPER_HEIGHT, HISTOGRAM_MARGIN.left, HISTOGRAM_MARGIN.right);
var ColorChartHeader = exports.ColorChartHeader = function ColorChartHeader(_ref) {
  var minVal = _ref.minVal,
    meanVal = _ref.meanVal,
    maxVal = _ref.maxVal;
  return /*#__PURE__*/_react["default"].createElement(ColorChartHeaderWrapper, null, /*#__PURE__*/_react["default"].createElement(ColorChartHeaderItem, {
    title: minVal
  }, /*#__PURE__*/_react["default"].createElement(_src.FormattedMessage, {
    id: "columnStats.min"
  }), ": ", minVal), /*#__PURE__*/_react["default"].createElement(ColorChartHeaderItem, {
    title: meanVal
  }, /*#__PURE__*/_react["default"].createElement(_src.FormattedMessage, {
    id: "columnStats.mean"
  }), ": ", (0, _d3Format.format)('.4~r')(meanVal)), /*#__PURE__*/_react["default"].createElement(ColorChartHeaderItem, {
    title: maxVal,
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement(_src.FormattedMessage, {
    id: "columnStats.max"
  }), ": ", maxVal));
};
var ColorChartTick = exports.ColorChartTick = function ColorChartTick(_ref2) {
  var colors = _ref2.colors,
    positions = _ref2.positions,
    histogramWidth = _ref2.histogramWidth,
    onTickMoving = _ref2.onTickMoving,
    onTickChanged = _ref2.onTickChanged;
  var _useState = (0, _react.useState)(positions),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    statePositions = _useState2[0],
    setPositions = _useState2[1];
  var _useState3 = (0, _react.useState)(-1),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    dragTick = _useState4[0],
    setDragTick = _useState4[1];
  var containerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setPositions(positions);
    setDragTick(dragTick);
  }, [positions, dragTick]);
  var onMouseMove = (0, _react.useCallback)(function (e) {
    if (dragTick >= 0) {
      // @ts-ignore
      var offsetX = containerRef.current.getBoundingClientRect().x;
      statePositions[dragTick] = e.clientX - (offsetX !== null && offsetX !== void 0 ? offsetX : 0);
      var leftBound = dragTick === 0 ? 0 : statePositions[dragTick - 1] + 1;
      var rightBound = dragTick === positions.length - 1 ? histogramWidth : statePositions[dragTick + 1] - 1;

      // restrict user drag-n-move between left and right neighboring ticks
      if (statePositions[dragTick] < leftBound) {
        statePositions[dragTick] = leftBound;
      }
      if (statePositions[dragTick] > rightBound) {
        statePositions[dragTick] = rightBound;
      }
      setPositions((0, _toConsumableArray2["default"])(statePositions));
      onTickMoving(statePositions, dragTick);
    }
  }, [dragTick, onTickMoving, positions.length, statePositions, histogramWidth]);
  var onMouseUp = (0, _react.useCallback)(function (e) {
    if (dragTick >= 0) {
      onTickChanged();
      setDragTick(-1);
      e.stopPropagation();
      e.preventDefault();
    }
  }, [dragTick, onTickChanged]);
  var _onMouseDown = (0, _react.useCallback)(function (e, tickIndex) {
    if ((0, _src2.isNumber)(tickIndex)) {
      setDragTick(tickIndex);
      e.stopPropagation();
      e.preventDefault();
    }
  }, []);
  return /*#__PURE__*/_react["default"].createElement(ColorChartTickContainer, {
    ref: containerRef,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseUp
  }, colors.map(function (color, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      draggable: true,
      key: "color-chart-tick-".concat(color, "-").concat(index),
      onMouseDown: function onMouseDown(e) {
        return _onMouseDown(e, index);
      },
      style: {
        backgroundColor: color,
        left: "".concat(statePositions[index] - COLOR_CHART_TICK_WIDTH / 2 - 1, "px"),
        borderWidth: "1px",
        borderStyle: 'solid',
        borderColor: COLOR_CHART_TICK_BORDER_COLOR,
        position: 'absolute',
        width: "".concat(COLOR_CHART_TICK_WIDTH, "px"),
        height: "".concat(COLOR_CHART_TICK_HEIGHT, "px"),
        cursor: 'pointer'
      }
    });
  }));
};

// only for numetic field
ColumnStatsChartFactory.deps = [_histogramPlot["default"]];
function ColumnStatsChartFactory(HistogramPlot) {
  var ColumnStatsChart = function ColumnStatsChart(_ref3) {
    var allBins = _ref3.allBins,
      filteredBins = _ref3.filteredBins,
      isFiltered = _ref3.isFiltered,
      histogramDomain = _ref3.histogramDomain,
      colorBreaks = _ref3.colorBreaks,
      onChangedUpdater = _ref3.onChangedUpdater;
    var _useState5 = (0, _react.useState)(colorBreaks),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      ticks = _useState6[0],
      setTicks = _useState6[1];
    var _useDimensions = (0, _src2.useDimensions)(),
      _useDimensions2 = (0, _slicedToArray2["default"])(_useDimensions, 2),
      ref = _useDimensions2[0],
      size = _useDimensions2[1];
    var histogramWidth = size ? size.width - HISTOGRAM_MARGIN.left - HISTOGRAM_MARGIN.right : HISTOGRAM_WIDTH;

    // distinguish between props.colorBreaks and states.ticks
    var isTickChangingRef = _react["default"].useRef(false);
    (0, _react.useEffect)(function () {
      setTicks(ticks);
      // reset isTickChanging once histogram domain is recomputed
      isTickChangingRef.current = false;
    }, [ticks]);

    // histograms used by histogram-plot.js
    var histogramsByGroup = (0, _react.useMemo)(function () {
      return {
        bins: allBins,
        filteredBins: filteredBins
      };
    }, [allBins, filteredBins]);

    // get colors from colorBreaks
    var domainColors = (0, _react.useMemo)(function () {
      return colorBreaks ? colorBreaks.map(function (c) {
        return c.data;
      }) : [];
    }, [colorBreaks]);
    var tickPositions = (0, _react.useMemo)(function () {
      if (!isTickChangingRef.current) {
        setTicks(colorBreaks);
      }
      var _histogramDomain = (0, _slicedToArray2["default"])(histogramDomain, 2),
        valueMin = _histogramDomain[0],
        valueMax = _histogramDomain[1];
      var widthScale = (0, _d3Scale.scaleLinear)().domain([valueMin, valueMax]).range([0, histogramWidth]);
      return ticks.slice(0, -1).map(function (cb) {
        var pos = widthScale(cb.range[1]);
        if (pos < 0) return 0;else if (pos > histogramWidth) return histogramWidth;
        return pos;
      });
    }, [histogramDomain, ticks, colorBreaks, histogramWidth]);
    var domainColorWidths = (0, _react.useMemo)(function () {
      var n = tickPositions.length;
      var widths = [tickPositions[0]];
      for (var i = 1; i < n; ++i) {
        widths.push(tickPositions[i] - tickPositions[i - 1]);
      }
      widths.push(histogramWidth - tickPositions[n - 1]);
      return widths;
    }, [tickPositions, histogramWidth]);

    // handle tick drag-n-move
    var onTickMovingHandler = (0, _react.useCallback)(function (newTickPositions, tickIndex) {
      var _histogramDomain2 = (0, _slicedToArray2["default"])(histogramDomain, 2),
        valueMin = _histogramDomain2[0],
        valueMax = _histogramDomain2[1];
      var valueRange = valueMax - valueMin;
      var breaks = [valueMin];
      newTickPositions.forEach(function (element) {
        breaks.push(valueMin + valueRange * element / histogramWidth);
      });
      breaks.push(valueMax);
      for (var i = 0; i < ticks.length; ++i) {
        var leftValue = i === tickIndex + 1 ? breaks[i] : ticks[i].range[0];
        var rightValue = i + 1 === tickIndex + 1 ? breaks[i + 1] : ticks[i].range[1];
        ticks[i] = _objectSpread(_objectSpread({}, ticks[i]), {}, {
          range: [leftValue, rightValue],
          inputs: [leftValue, rightValue],
          label: "".concat((0, _d3Format.format)('.2f')(breaks[i]), " to ").concat((0, _d3Format.format)('.2f')(breaks[i + 1]))
        });
      }
      isTickChangingRef.current = true;
      setTicks((0, _toConsumableArray2["default"])(ticks));
    }, [histogramDomain, ticks, histogramWidth]);

    // update parent and sibling components when tick dragging ended
    var onTickChangedHandler = (0, _react.useCallback)(function () {
      onChangedUpdater(ticks);
    }, [onChangedUpdater, ticks]);
    return /*#__PURE__*/_react["default"].createElement(ColorChartContainer, {
      ref: ref
    }, /*#__PURE__*/_react["default"].createElement(ColorChartHeader, {
      minVal: histogramDomain[0],
      maxVal: histogramDomain[1],
      meanVal: histogramDomain[2]
    }), /*#__PURE__*/_react["default"].createElement(ColorChartWrapper, null, /*#__PURE__*/_react["default"].createElement(ColorPaletteWrapper, null, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
      colors: domainColors,
      colorWidths: domainColorWidths,
      height: HISTOGRAM_HEIGHT + 16
    })), /*#__PURE__*/_react["default"].createElement(HistogramWrapper, null, /*#__PURE__*/_react["default"].createElement(HistogramPlot, {
      histogramsByGroup: histogramsByGroup,
      colorsByGroup: null,
      isMasked: isFiltered ? _histogramPlot.HISTOGRAM_MASK_MODE.MaskWithOverlay : _histogramPlot.HISTOGRAM_MASK_MODE.Mask,
      value: histogramDomain,
      width: histogramWidth,
      height: HISTOGRAM_HEIGHT,
      margin: HISTOGRAM_MARGIN,
      breakLines: tickPositions
    }))), /*#__PURE__*/_react["default"].createElement(ColorChartTick, {
      colors: domainColors.slice(0, -1),
      positions: tickPositions,
      histogramWidth: histogramWidth,
      onTickMoving: onTickMovingHandler,
      onTickChanged: onTickChangedHandler
    }));
  };
  var ColumnStatsChartWLoading = function ColumnStatsChartWLoading(_ref4) {
    var colorField = _ref4.colorField,
      dataset = _ref4.dataset,
      colorBreaks = _ref4.colorBreaks,
      allBins = _ref4.allBins,
      filteredBins = _ref4.filteredBins,
      isFiltered = _ref4.isFiltered,
      histogramDomain = _ref4.histogramDomain,
      onChangedUpdater = _ref4.onChangedUpdater;
    var fieldName = colorField === null || colorField === void 0 ? void 0 : colorField.name;
    var field = (0, _react.useMemo)(function () {
      return fieldName ? dataset.getColumnField(fieldName) : null;
    }, [dataset, fieldName]);
    if (!(0, _src2.isNumericColorBreaks)(colorBreaks)) {
      // TODO: implement display for ordinal breaks
      return null;
    }
    if (field !== null && field !== void 0 && field.isLoadingStats) {
      return /*#__PURE__*/_react["default"].createElement(StyledContainer, null, /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], null));
    }
    return /*#__PURE__*/_react["default"].createElement(ColumnStatsChart, {
      colorBreaks: colorBreaks,
      allBins: allBins,
      filteredBins: filteredBins,
      isFiltered: isFiltered,
      histogramDomain: histogramDomain,
      onChangedUpdater: onChangedUpdater
    });
  };
  return ColumnStatsChartWLoading;
}
var _default = exports["default"] = ColumnStatsChartFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZDNGb3JtYXQiLCJyZXF1aXJlIiwiX2QzU2NhbGUiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zdHlsZWRDb21wb25lbnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9zcmMiLCJfc3JjMiIsIl9jb2xvclBhbGV0dGUiLCJfaGlzdG9ncmFtUGxvdCIsIl9sb2FkaW5nU3Bpbm5lciIsIl90ZW1wbGF0ZU9iamVjdCIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfdGVtcGxhdGVPYmplY3QzIiwiX3RlbXBsYXRlT2JqZWN0NCIsIl90ZW1wbGF0ZU9iamVjdDUiLCJfdGVtcGxhdGVPYmplY3Q2IiwiX3RlbXBsYXRlT2JqZWN0NyIsIl90ZW1wbGF0ZU9iamVjdDgiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJISVNUT0dSQU1fV0lEVEgiLCJleHBvcnRzIiwiSElTVE9HUkFNX0hFSUdIVCIsIkhJU1RPR1JBTV9NQVJHSU4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJDT0xPUl9DSEFSVF9USUNLX1dSQVBQRVJfSEVJR0hUIiwiQ09MT1JfQ0hBUlRfVElDS19IRUlHSFQiLCJDT0xPUl9DSEFSVF9USUNLX1dJRFRIIiwiQ09MT1JfQ0hBUlRfVElDS19CT1JERVJfQ09MT1IiLCJTdHlsZWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwyIiwiQ29sb3JDaGFydENvbnRhaW5lciIsIkNvbG9yQ2hhcnRIZWFkZXJXcmFwcGVyIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsIkNvbG9yQ2hhcnRIZWFkZXJJdGVtIiwiQ29sb3JDaGFydFdyYXBwZXIiLCJDb2xvclBhbGV0dGVXcmFwcGVyIiwiSGlzdG9ncmFtV3JhcHBlciIsIkNvbG9yQ2hhcnRUaWNrQ29udGFpbmVyIiwiQ29sb3JDaGFydEhlYWRlciIsIl9yZWYiLCJtaW5WYWwiLCJtZWFuVmFsIiwibWF4VmFsIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwiRm9ybWF0dGVkTWVzc2FnZSIsImlkIiwiZDNGb3JtYXQiLCJzdHlsZSIsInRleHRBbGlnbiIsIkNvbG9yQ2hhcnRUaWNrIiwiX3JlZjIiLCJjb2xvcnMiLCJwb3NpdGlvbnMiLCJoaXN0b2dyYW1XaWR0aCIsIm9uVGlja01vdmluZyIsIm9uVGlja0NoYW5nZWQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheTIiLCJzdGF0ZVBvc2l0aW9ucyIsInNldFBvc2l0aW9ucyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZHJhZ1RpY2siLCJzZXREcmFnVGljayIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsIm9uTW91c2VNb3ZlIiwidXNlQ2FsbGJhY2siLCJvZmZzZXRYIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdEJvdW5kIiwicmlnaHRCb3VuZCIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJvbk1vdXNlVXAiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VEb3duIiwidGlja0luZGV4IiwiaXNOdW1iZXIiLCJyZWYiLCJvbk1vdXNlTGVhdmUiLCJtYXAiLCJjb2xvciIsImluZGV4IiwiZHJhZ2dhYmxlIiwia2V5IiwiY29uY2F0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImN1cnNvciIsIkNvbHVtblN0YXRzQ2hhcnRGYWN0b3J5IiwiZGVwcyIsIkhpc3RvZ3JhbVBsb3RGYWN0b3J5IiwiSGlzdG9ncmFtUGxvdCIsIkNvbHVtblN0YXRzQ2hhcnQiLCJfcmVmMyIsImFsbEJpbnMiLCJmaWx0ZXJlZEJpbnMiLCJpc0ZpbHRlcmVkIiwiaGlzdG9ncmFtRG9tYWluIiwiY29sb3JCcmVha3MiLCJvbkNoYW5nZWRVcGRhdGVyIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJ0aWNrcyIsInNldFRpY2tzIiwiX3VzZURpbWVuc2lvbnMiLCJ1c2VEaW1lbnNpb25zIiwiX3VzZURpbWVuc2lvbnMyIiwic2l6ZSIsImlzVGlja0NoYW5naW5nUmVmIiwiUmVhY3QiLCJoaXN0b2dyYW1zQnlHcm91cCIsInVzZU1lbW8iLCJiaW5zIiwiZG9tYWluQ29sb3JzIiwiYyIsImRhdGEiLCJ0aWNrUG9zaXRpb25zIiwiX2hpc3RvZ3JhbURvbWFpbiIsInZhbHVlTWluIiwidmFsdWVNYXgiLCJ3aWR0aFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInNsaWNlIiwiY2IiLCJwb3MiLCJkb21haW5Db2xvcldpZHRocyIsIndpZHRocyIsIm9uVGlja01vdmluZ0hhbmRsZXIiLCJuZXdUaWNrUG9zaXRpb25zIiwiX2hpc3RvZ3JhbURvbWFpbjIiLCJ2YWx1ZVJhbmdlIiwiYnJlYWtzIiwiZWxlbWVudCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJpbnB1dHMiLCJsYWJlbCIsIm9uVGlja0NoYW5nZWRIYW5kbGVyIiwiY29sb3JXaWR0aHMiLCJjb2xvcnNCeUdyb3VwIiwiaXNNYXNrZWQiLCJISVNUT0dSQU1fTUFTS19NT0RFIiwiTWFza1dpdGhPdmVybGF5IiwiTWFzayIsInZhbHVlIiwibWFyZ2luIiwiYnJlYWtMaW5lcyIsIkNvbHVtblN0YXRzQ2hhcnRXTG9hZGluZyIsIl9yZWY0IiwiY29sb3JGaWVsZCIsImRhdGFzZXQiLCJmaWVsZE5hbWUiLCJuYW1lIiwiZmllbGQiLCJnZXRDb2x1bW5GaWVsZCIsImlzTnVtZXJpY0NvbG9yQnJlYWtzIiwiaXNMb2FkaW5nU3RhdHMiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vY29sdW1uLXN0YXRzLWNoYXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgeyBmb3JtYXQgYXMgZDNGb3JtYXQgfSBmcm9tICdkMy1mb3JtYXQnO1xuaW1wb3J0IHsgc2NhbGVMaW5lYXIgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcblxuaW1wb3J0IHsgS2VwbGVyVGFibGUgfSBmcm9tICdAa2VwbGVyLmdsL3RhYmxlJztcbmltcG9ydCB7IEJpbiwgRmllbGQgfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7XG4gIENvbG9yQnJlYWssXG4gIENvbG9yQnJlYWtPcmRpbmFsLFxuICBpc051bWJlcixcbiAgaXNOdW1lcmljQ29sb3JCcmVha3MsXG4gIHVzZURpbWVuc2lvbnNcbn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSAnLi4vc2lkZS1wYW5lbC9sYXllci1wYW5lbC9jb2xvci1wYWxldHRlJztcbmltcG9ydCBIaXN0b2dyYW1QbG90RmFjdG9yeSwgeyBISVNUT0dSQU1fTUFTS19NT0RFIH0gZnJvbSAnLi9oaXN0b2dyYW0tcGxvdCc7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi9sb2FkaW5nLXNwaW5uZXInO1xuXG5leHBvcnQgY29uc3QgSElTVE9HUkFNX1dJRFRIID0gMjEwO1xuZXhwb3J0IGNvbnN0IEhJU1RPR1JBTV9IRUlHSFQgPSA4MDtcbmNvbnN0IEhJU1RPR1JBTV9NQVJHSU4gPSB7IHRvcDogMTAsIGJvdHRvbTogOCwgbGVmdDogMTAsIHJpZ2h0OiAyMCB9O1xuY29uc3QgQ09MT1JfQ0hBUlRfVElDS19XUkFQUEVSX0hFSUdIVCA9IDEwO1xuY29uc3QgQ09MT1JfQ0hBUlRfVElDS19IRUlHSFQgPSA4O1xuY29uc3QgQ09MT1JfQ0hBUlRfVElDS19XSURUSCA9IDQ7XG5jb25zdCBDT0xPUl9DSEFSVF9USUNLX0JPUkRFUl9DT0xPUiA9ICcjOTk5OTk5JztcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NvbG9yLWNoYXJ0LWxvYWRpbmcnXG59KWBcbiAgaGVpZ2h0OiAke0hJU1RPR1JBTV9IRUlHSFR9cHg7XG5gO1xuXG4vLyBoZWlnaHQgMTQyID0gMTggKyAxMTAgKyAxMFxuY29uc3QgQ29sb3JDaGFydENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdjb2xvci1jaGFydC1jb250YWluZXInXG59KWBcbiAgbWFyZ2luLXRvcDogOHB4O1xuYDtcblxuY29uc3QgQ29sb3JDaGFydEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnY29sb3ItY2hhcnQtaGVhZGVyJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBtYXJnaW4tbGVmdDogJHtISVNUT0dSQU1fTUFSR0lOLmxlZnR9cHg7XG4gIG1hcmdpbi1yaWdodDogJHtISVNUT0dSQU1fTUFSR0lOLnJpZ2h0fXB4O1xuICBmb250LXNpemU6IDlweDtcbmA7XG5cbmNvbnN0IENvbG9yQ2hhcnRIZWFkZXJJdGVtID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMzJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmA7XG5cbmNvbnN0IENvbG9yQ2hhcnRXcmFwcGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NvbG9yLWNoYXJ0LXdyYXBwZXInXG59KWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6ICR7SElTVE9HUkFNX0hFSUdIVCArIDMwfXB4O1xuYDtcblxuY29uc3QgQ29sb3JQYWxldHRlV3JhcHBlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdjb2xvci1jaGFydC1wYWxldHRlJ1xufSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogJHtISVNUT0dSQU1fTUFSR0lOLnRvcH1weDtcbiAgbWFyZ2luLWxlZnQ6ICR7SElTVE9HUkFNX01BUkdJTi5sZWZ0fXB4O1xuICBtYXJnaW4tcmlnaHQ6ICR7SElTVE9HUkFNX01BUkdJTi5yaWdodH1weDtcbmA7XG5cbmNvbnN0IEhpc3RvZ3JhbVdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnY29sb3ItY2hhcnQtaGlzdG9ncmFtJ1xufSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmNvbnN0IENvbG9yQ2hhcnRUaWNrQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NvbG9yLWNoYXJ0LXRpY2stY29udGFpbmVyJ1xufSlgXG4gIGhlaWdodDogJHtDT0xPUl9DSEFSVF9USUNLX1dSQVBQRVJfSEVJR0hUfXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAke0hJU1RPR1JBTV9NQVJHSU4ubGVmdH1weDtcbiAgbWFyZ2luLXJpZ2h0OiAke0hJU1RPR1JBTV9NQVJHSU4ucmlnaHR9cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29sb3JDaGFydEhlYWRlciA9ICh7IG1pblZhbCwgbWVhblZhbCwgbWF4VmFsIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29sb3JDaGFydEhlYWRlcldyYXBwZXI+XG4gICAgICA8Q29sb3JDaGFydEhlYWRlckl0ZW0gdGl0bGU9e21pblZhbH0+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiY29sdW1uU3RhdHMubWluXCIgLz46IHttaW5WYWx9XG4gICAgICA8L0NvbG9yQ2hhcnRIZWFkZXJJdGVtPlxuICAgICAgPENvbG9yQ2hhcnRIZWFkZXJJdGVtIHRpdGxlPXttZWFuVmFsfT5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjb2x1bW5TdGF0cy5tZWFuXCIgLz46IHtkM0Zvcm1hdCgnLjR+cicpKG1lYW5WYWwpfVxuICAgICAgPC9Db2xvckNoYXJ0SGVhZGVySXRlbT5cbiAgICAgIDxDb2xvckNoYXJ0SGVhZGVySXRlbSB0aXRsZT17bWF4VmFsfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiY29sdW1uU3RhdHMubWF4XCIgLz46IHttYXhWYWx9XG4gICAgICA8L0NvbG9yQ2hhcnRIZWFkZXJJdGVtPlxuICAgIDwvQ29sb3JDaGFydEhlYWRlcldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgdHlwZSBDb2xvckNoYXJ0VGlja1Byb3BzID0ge1xuICBjb2xvcnM6IHN0cmluZ1tdO1xuICBwb3NpdGlvbnM6IG51bWJlcltdO1xuICBvblRpY2tNb3Zpbmc6IChwb3NpdGlvbnM6IG51bWJlcltdLCBkcmFnVGljazogbnVtYmVyKSA9PiB2b2lkO1xuICBvblRpY2tDaGFuZ2VkOiAoKSA9PiB2b2lkO1xuICBoaXN0b2dyYW1XaWR0aDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IENvbG9yQ2hhcnRUaWNrOiBSZWFjdC5GQzxDb2xvckNoYXJ0VGlja1Byb3BzPiA9ICh7XG4gIGNvbG9ycyxcbiAgcG9zaXRpb25zLFxuICBoaXN0b2dyYW1XaWR0aCxcbiAgb25UaWNrTW92aW5nLFxuICBvblRpY2tDaGFuZ2VkXG59KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZVBvc2l0aW9ucywgc2V0UG9zaXRpb25zXSA9IHVzZVN0YXRlKHBvc2l0aW9ucyk7XG4gIGNvbnN0IFtkcmFnVGljaywgc2V0RHJhZ1RpY2tdID0gdXNlU3RhdGUoLTEpO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgc2V0RHJhZ1RpY2soZHJhZ1RpY2spO1xuICB9LCBbcG9zaXRpb25zLCBkcmFnVGlja10pO1xuXG4gIGNvbnN0IG9uTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soXG4gICAgZSA9PiB7XG4gICAgICBpZiAoZHJhZ1RpY2sgPj0gMCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBjb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xuICAgICAgICBzdGF0ZVBvc2l0aW9uc1tkcmFnVGlja10gPSBlLmNsaWVudFggLSAob2Zmc2V0WCA/PyAwKTtcbiAgICAgICAgY29uc3QgbGVmdEJvdW5kID0gZHJhZ1RpY2sgPT09IDAgPyAwIDogc3RhdGVQb3NpdGlvbnNbZHJhZ1RpY2sgLSAxXSArIDE7XG4gICAgICAgIGNvbnN0IHJpZ2h0Qm91bmQgPVxuICAgICAgICAgIGRyYWdUaWNrID09PSBwb3NpdGlvbnMubGVuZ3RoIC0gMSA/IGhpc3RvZ3JhbVdpZHRoIDogc3RhdGVQb3NpdGlvbnNbZHJhZ1RpY2sgKyAxXSAtIDE7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgdXNlciBkcmFnLW4tbW92ZSBiZXR3ZWVuIGxlZnQgYW5kIHJpZ2h0IG5laWdoYm9yaW5nIHRpY2tzXG4gICAgICAgIGlmIChzdGF0ZVBvc2l0aW9uc1tkcmFnVGlja10gPCBsZWZ0Qm91bmQpIHtcbiAgICAgICAgICBzdGF0ZVBvc2l0aW9uc1tkcmFnVGlja10gPSBsZWZ0Qm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlUG9zaXRpb25zW2RyYWdUaWNrXSA+IHJpZ2h0Qm91bmQpIHtcbiAgICAgICAgICBzdGF0ZVBvc2l0aW9uc1tkcmFnVGlja10gPSByaWdodEJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIHNldFBvc2l0aW9ucyhbLi4uc3RhdGVQb3NpdGlvbnNdKTtcbiAgICAgICAgb25UaWNrTW92aW5nKHN0YXRlUG9zaXRpb25zLCBkcmFnVGljayk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZHJhZ1RpY2ssIG9uVGlja01vdmluZywgcG9zaXRpb25zLmxlbmd0aCwgc3RhdGVQb3NpdGlvbnMsIGhpc3RvZ3JhbVdpZHRoXVxuICApO1xuXG4gIGNvbnN0IG9uTW91c2VVcCA9IHVzZUNhbGxiYWNrKFxuICAgIGUgPT4ge1xuICAgICAgaWYgKGRyYWdUaWNrID49IDApIHtcbiAgICAgICAgb25UaWNrQ2hhbmdlZCgpO1xuICAgICAgICBzZXREcmFnVGljaygtMSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkcmFnVGljaywgb25UaWNrQ2hhbmdlZF1cbiAgKTtcblxuICBjb25zdCBvbk1vdXNlRG93biA9IHVzZUNhbGxiYWNrKChlLCB0aWNrSW5kZXgpID0+IHtcbiAgICBpZiAoaXNOdW1iZXIodGlja0luZGV4KSkge1xuICAgICAgc2V0RHJhZ1RpY2sodGlja0luZGV4KTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sb3JDaGFydFRpY2tDb250YWluZXJcbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgb25Nb3VzZU1vdmU9e29uTW91c2VNb3ZlfVxuICAgICAgb25Nb3VzZVVwPXtvbk1vdXNlVXB9XG4gICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VVcH1cbiAgICA+XG4gICAgICB7Y29sb3JzLm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBkcmFnZ2FibGU9e3RydWV9XG4gICAgICAgICAga2V5PXtgY29sb3ItY2hhcnQtdGljay0ke2NvbG9yfS0ke2luZGV4fWB9XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gb25Nb3VzZURvd24oZSwgaW5kZXgpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgbGVmdDogYCR7c3RhdGVQb3NpdGlvbnNbaW5kZXhdIC0gQ09MT1JfQ0hBUlRfVElDS19XSURUSCAvIDIgLSAxfXB4YCxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBgMXB4YCxcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IENPTE9SX0NIQVJUX1RJQ0tfQk9SREVSX0NPTE9SLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB3aWR0aDogYCR7Q09MT1JfQ0hBUlRfVElDS19XSURUSH1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke0NPTE9SX0NIQVJUX1RJQ0tfSEVJR0hUfXB4YCxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvQ29sb3JDaGFydFRpY2tDb250YWluZXI+XG4gICk7XG59O1xuXG4vLyBvbmx5IGZvciBudW1ldGljIGZpZWxkXG5Db2x1bW5TdGF0c0NoYXJ0RmFjdG9yeS5kZXBzID0gW0hpc3RvZ3JhbVBsb3RGYWN0b3J5XTtcblxuZXhwb3J0IHR5cGUgQ29sdW1uU3RhdHNDaGFydFdMb2FkaW5nUHJvcHMgPSB7XG4gIGNvbG9yRmllbGQ6IEZpZWxkO1xuICBkYXRhc2V0OiBLZXBsZXJUYWJsZTtcbiAgY29sb3JCcmVha3M6IENvbG9yQnJlYWtbXSB8IENvbG9yQnJlYWtPcmRpbmFsW10gfCBudWxsO1xuICBhbGxCaW5zOiBCaW5bXTtcbiAgZmlsdGVyZWRCaW5zOiBCaW5bXTtcbiAgaXNGaWx0ZXJlZDogYm9vbGVhbjtcbiAgaGlzdG9ncmFtRG9tYWluOiBudW1iZXJbXTtcbiAgb25DaGFuZ2VkVXBkYXRlcjogKHRpY2tzOiBDb2xvckJyZWFrW10pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgdHlwZSBDb2x1bW5TdGF0c0NoYXJ0UHJvcHMgPSB7XG4gIGFsbEJpbnM6IEJpbltdO1xuICBmaWx0ZXJlZEJpbnM6IEJpbltdO1xuICBpc0ZpbHRlcmVkOiBib29sZWFuO1xuICBoaXN0b2dyYW1Eb21haW46IG51bWJlcltdO1xuICBjb2xvckJyZWFrczogQ29sb3JCcmVha1tdO1xuICBvbkNoYW5nZWRVcGRhdGVyOiAodGlja3M6IENvbG9yQnJlYWtbXSkgPT4gdm9pZDtcbn07XG5mdW5jdGlvbiBDb2x1bW5TdGF0c0NoYXJ0RmFjdG9yeShcbiAgSGlzdG9ncmFtUGxvdDogUmV0dXJuVHlwZTx0eXBlb2YgSGlzdG9ncmFtUGxvdEZhY3Rvcnk+XG4pOiBSZWFjdC5GQzxDb2x1bW5TdGF0c0NoYXJ0V0xvYWRpbmdQcm9wcz4ge1xuICBjb25zdCBDb2x1bW5TdGF0c0NoYXJ0OiBSZWFjdC5GQzxDb2x1bW5TdGF0c0NoYXJ0UHJvcHM+ID0gKHtcbiAgICBhbGxCaW5zLFxuICAgIGZpbHRlcmVkQmlucyxcbiAgICBpc0ZpbHRlcmVkLFxuICAgIGhpc3RvZ3JhbURvbWFpbixcbiAgICBjb2xvckJyZWFrcyxcbiAgICBvbkNoYW5nZWRVcGRhdGVyXG4gIH0pID0+IHtcbiAgICBjb25zdCBbdGlja3MsIHNldFRpY2tzXSA9IHVzZVN0YXRlKGNvbG9yQnJlYWtzKTtcbiAgICBjb25zdCBbcmVmLCBzaXplXSA9IHVzZURpbWVuc2lvbnM8SFRNTERpdkVsZW1lbnQ+KCk7XG4gICAgY29uc3QgaGlzdG9ncmFtV2lkdGggPSBzaXplXG4gICAgICA/IHNpemUud2lkdGggLSBISVNUT0dSQU1fTUFSR0lOLmxlZnQgLSBISVNUT0dSQU1fTUFSR0lOLnJpZ2h0XG4gICAgICA6IEhJU1RPR1JBTV9XSURUSDtcblxuICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gcHJvcHMuY29sb3JCcmVha3MgYW5kIHN0YXRlcy50aWNrc1xuICAgIGNvbnN0IGlzVGlja0NoYW5naW5nUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRUaWNrcyh0aWNrcyk7XG4gICAgICAvLyByZXNldCBpc1RpY2tDaGFuZ2luZyBvbmNlIGhpc3RvZ3JhbSBkb21haW4gaXMgcmVjb21wdXRlZFxuICAgICAgaXNUaWNrQ2hhbmdpbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH0sIFt0aWNrc10pO1xuXG4gICAgLy8gaGlzdG9ncmFtcyB1c2VkIGJ5IGhpc3RvZ3JhbS1wbG90LmpzXG4gICAgY29uc3QgaGlzdG9ncmFtc0J5R3JvdXAgPSB1c2VNZW1vKFxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgYmluczogYWxsQmlucyxcbiAgICAgICAgZmlsdGVyZWRCaW5zXG4gICAgICB9KSxcbiAgICAgIFthbGxCaW5zLCBmaWx0ZXJlZEJpbnNdXG4gICAgKTtcblxuICAgIC8vIGdldCBjb2xvcnMgZnJvbSBjb2xvckJyZWFrc1xuICAgIGNvbnN0IGRvbWFpbkNvbG9ycyA9IHVzZU1lbW8oXG4gICAgICAoKSA9PiAoY29sb3JCcmVha3MgPyBjb2xvckJyZWFrcy5tYXAoYyA9PiBjLmRhdGEpIDogW10pLFxuICAgICAgW2NvbG9yQnJlYWtzXVxuICAgICk7XG5cbiAgICBjb25zdCB0aWNrUG9zaXRpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICBpZiAoIWlzVGlja0NoYW5naW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0VGlja3MoY29sb3JCcmVha3MpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBbdmFsdWVNaW4sIHZhbHVlTWF4XSA9IGhpc3RvZ3JhbURvbWFpbjtcbiAgICAgIGNvbnN0IHdpZHRoU2NhbGUgPSBzY2FsZUxpbmVhcigpLmRvbWFpbihbdmFsdWVNaW4sIHZhbHVlTWF4XSkucmFuZ2UoWzAsIGhpc3RvZ3JhbVdpZHRoXSk7XG4gICAgICByZXR1cm4gdGlja3Muc2xpY2UoMCwgLTEpLm1hcChjYiA9PiB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHdpZHRoU2NhbGUoY2IucmFuZ2VbMV0pO1xuICAgICAgICBpZiAocG9zIDwgMCkgcmV0dXJuIDA7XG4gICAgICAgIGVsc2UgaWYgKHBvcyA+IGhpc3RvZ3JhbVdpZHRoKSByZXR1cm4gaGlzdG9ncmFtV2lkdGg7XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgICB9KTtcbiAgICB9LCBbaGlzdG9ncmFtRG9tYWluLCB0aWNrcywgY29sb3JCcmVha3MsIGhpc3RvZ3JhbVdpZHRoXSk7XG5cbiAgICBjb25zdCBkb21haW5Db2xvcldpZHRocyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgY29uc3QgbiA9IHRpY2tQb3NpdGlvbnMubGVuZ3RoO1xuICAgICAgY29uc3Qgd2lkdGhzID0gW3RpY2tQb3NpdGlvbnNbMF1dO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgd2lkdGhzLnB1c2godGlja1Bvc2l0aW9uc1tpXSAtIHRpY2tQb3NpdGlvbnNbaSAtIDFdKTtcbiAgICAgIH1cbiAgICAgIHdpZHRocy5wdXNoKGhpc3RvZ3JhbVdpZHRoIC0gdGlja1Bvc2l0aW9uc1tuIC0gMV0pO1xuICAgICAgcmV0dXJuIHdpZHRocztcbiAgICB9LCBbdGlja1Bvc2l0aW9ucywgaGlzdG9ncmFtV2lkdGhdKTtcblxuICAgIC8vIGhhbmRsZSB0aWNrIGRyYWctbi1tb3ZlXG4gICAgY29uc3Qgb25UaWNrTW92aW5nSGFuZGxlciA9IHVzZUNhbGxiYWNrKFxuICAgICAgKG5ld1RpY2tQb3NpdGlvbnMsIHRpY2tJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBbdmFsdWVNaW4sIHZhbHVlTWF4XSA9IGhpc3RvZ3JhbURvbWFpbjtcbiAgICAgICAgY29uc3QgdmFsdWVSYW5nZSA9IHZhbHVlTWF4IC0gdmFsdWVNaW47XG4gICAgICAgIGNvbnN0IGJyZWFrcyA9IFt2YWx1ZU1pbl07XG4gICAgICAgIG5ld1RpY2tQb3NpdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBicmVha3MucHVzaCh2YWx1ZU1pbiArICh2YWx1ZVJhbmdlICogZWxlbWVudCkgLyBoaXN0b2dyYW1XaWR0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVha3MucHVzaCh2YWx1ZU1heCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRWYWx1ZSA9IGkgPT09IHRpY2tJbmRleCArIDEgPyBicmVha3NbaV0gOiB0aWNrc1tpXS5yYW5nZVswXTtcbiAgICAgICAgICBjb25zdCByaWdodFZhbHVlID0gaSArIDEgPT09IHRpY2tJbmRleCArIDEgPyBicmVha3NbaSArIDFdIDogdGlja3NbaV0ucmFuZ2VbMV07XG5cbiAgICAgICAgICB0aWNrc1tpXSA9IHtcbiAgICAgICAgICAgIC4uLnRpY2tzW2ldLFxuICAgICAgICAgICAgcmFuZ2U6IFtsZWZ0VmFsdWUsIHJpZ2h0VmFsdWVdLFxuICAgICAgICAgICAgaW5wdXRzOiBbbGVmdFZhbHVlLCByaWdodFZhbHVlXSxcbiAgICAgICAgICAgIGxhYmVsOiBgJHtkM0Zvcm1hdCgnLjJmJykoYnJlYWtzW2ldKX0gdG8gJHtkM0Zvcm1hdCgnLjJmJykoYnJlYWtzW2kgKyAxXSl9YFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaXNUaWNrQ2hhbmdpbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldFRpY2tzKFsuLi50aWNrc10pO1xuICAgICAgfSxcbiAgICAgIFtoaXN0b2dyYW1Eb21haW4sIHRpY2tzLCBoaXN0b2dyYW1XaWR0aF1cbiAgICApO1xuXG4gICAgLy8gdXBkYXRlIHBhcmVudCBhbmQgc2libGluZyBjb21wb25lbnRzIHdoZW4gdGljayBkcmFnZ2luZyBlbmRlZFxuICAgIGNvbnN0IG9uVGlja0NoYW5nZWRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgb25DaGFuZ2VkVXBkYXRlcih0aWNrcyk7XG4gICAgfSwgW29uQ2hhbmdlZFVwZGF0ZXIsIHRpY2tzXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbG9yQ2hhcnRDb250YWluZXIgcmVmPXtyZWZ9PlxuICAgICAgICA8Q29sb3JDaGFydEhlYWRlclxuICAgICAgICAgIG1pblZhbD17aGlzdG9ncmFtRG9tYWluWzBdfVxuICAgICAgICAgIG1heFZhbD17aGlzdG9ncmFtRG9tYWluWzFdfVxuICAgICAgICAgIG1lYW5WYWw9e2hpc3RvZ3JhbURvbWFpblsyXX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbG9yQ2hhcnRXcmFwcGVyPlxuICAgICAgICAgIDxDb2xvclBhbGV0dGVXcmFwcGVyPlxuICAgICAgICAgICAgPENvbG9yUGFsZXR0ZVxuICAgICAgICAgICAgICBjb2xvcnM9e2RvbWFpbkNvbG9yc31cbiAgICAgICAgICAgICAgY29sb3JXaWR0aHM9e2RvbWFpbkNvbG9yV2lkdGhzfVxuICAgICAgICAgICAgICBoZWlnaHQ9e0hJU1RPR1JBTV9IRUlHSFQgKyAxNn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2xvclBhbGV0dGVXcmFwcGVyPlxuICAgICAgICAgIDxIaXN0b2dyYW1XcmFwcGVyPlxuICAgICAgICAgICAgPEhpc3RvZ3JhbVBsb3RcbiAgICAgICAgICAgICAgaGlzdG9ncmFtc0J5R3JvdXA9e2hpc3RvZ3JhbXNCeUdyb3VwfVxuICAgICAgICAgICAgICBjb2xvcnNCeUdyb3VwPXtudWxsfVxuICAgICAgICAgICAgICBpc01hc2tlZD17aXNGaWx0ZXJlZCA/IEhJU1RPR1JBTV9NQVNLX01PREUuTWFza1dpdGhPdmVybGF5IDogSElTVE9HUkFNX01BU0tfTU9ERS5NYXNrfVxuICAgICAgICAgICAgICB2YWx1ZT17aGlzdG9ncmFtRG9tYWlufVxuICAgICAgICAgICAgICB3aWR0aD17aGlzdG9ncmFtV2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17SElTVE9HUkFNX0hFSUdIVH1cbiAgICAgICAgICAgICAgbWFyZ2luPXtISVNUT0dSQU1fTUFSR0lOfVxuICAgICAgICAgICAgICBicmVha0xpbmVzPXt0aWNrUG9zaXRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0hpc3RvZ3JhbVdyYXBwZXI+XG4gICAgICAgIDwvQ29sb3JDaGFydFdyYXBwZXI+XG4gICAgICAgIDxDb2xvckNoYXJ0VGlja1xuICAgICAgICAgIGNvbG9ycz17ZG9tYWluQ29sb3JzLnNsaWNlKDAsIC0xKX1cbiAgICAgICAgICBwb3NpdGlvbnM9e3RpY2tQb3NpdGlvbnN9XG4gICAgICAgICAgaGlzdG9ncmFtV2lkdGg9e2hpc3RvZ3JhbVdpZHRofVxuICAgICAgICAgIG9uVGlja01vdmluZz17b25UaWNrTW92aW5nSGFuZGxlcn1cbiAgICAgICAgICBvblRpY2tDaGFuZ2VkPXtvblRpY2tDaGFuZ2VkSGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sb3JDaGFydENvbnRhaW5lcj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENvbHVtblN0YXRzQ2hhcnRXTG9hZGluZzogUmVhY3QuRkM8Q29sdW1uU3RhdHNDaGFydFdMb2FkaW5nUHJvcHM+ID0gKHtcbiAgICBjb2xvckZpZWxkLFxuICAgIGRhdGFzZXQsXG4gICAgY29sb3JCcmVha3MsXG4gICAgYWxsQmlucyxcbiAgICBmaWx0ZXJlZEJpbnMsXG4gICAgaXNGaWx0ZXJlZCxcbiAgICBoaXN0b2dyYW1Eb21haW4sXG4gICAgb25DaGFuZ2VkVXBkYXRlclxuICB9KSA9PiB7XG4gICAgY29uc3QgZmllbGROYW1lID0gY29sb3JGaWVsZD8ubmFtZTtcbiAgICBjb25zdCBmaWVsZCA9IHVzZU1lbW8oXG4gICAgICAoKSA9PiAoZmllbGROYW1lID8gZGF0YXNldC5nZXRDb2x1bW5GaWVsZChmaWVsZE5hbWUpIDogbnVsbCksXG4gICAgICBbZGF0YXNldCwgZmllbGROYW1lXVxuICAgICk7XG5cbiAgICBpZiAoIWlzTnVtZXJpY0NvbG9yQnJlYWtzKGNvbG9yQnJlYWtzKSkge1xuICAgICAgLy8gVE9ETzogaW1wbGVtZW50IGRpc3BsYXkgZm9yIG9yZGluYWwgYnJlYWtzXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQ/LmlzTG9hZGluZ1N0YXRzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgICAgICAgIDxMb2FkaW5nU3Bpbm5lciAvPlxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5TdGF0c0NoYXJ0XG4gICAgICAgIGNvbG9yQnJlYWtzPXtjb2xvckJyZWFrc31cbiAgICAgICAgYWxsQmlucz17YWxsQmluc31cbiAgICAgICAgZmlsdGVyZWRCaW5zPXtmaWx0ZXJlZEJpbnN9XG4gICAgICAgIGlzRmlsdGVyZWQ9e2lzRmlsdGVyZWR9XG4gICAgICAgIGhpc3RvZ3JhbURvbWFpbj17aGlzdG9ncmFtRG9tYWlufVxuICAgICAgICBvbkNoYW5nZWRVcGRhdGVyPXtvbkNoYW5nZWRVcGRhdGVyfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb2x1bW5TdGF0c0NoYXJ0V0xvYWRpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtblN0YXRzQ2hhcnRGYWN0b3J5O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxNQUFBLEdBQUFDLHVCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxpQkFBQSxHQUFBQyxzQkFBQSxDQUFBTCxPQUFBO0FBQ0EsSUFBQU0sSUFBQSxHQUFBTixPQUFBO0FBSUEsSUFBQU8sS0FBQSxHQUFBUCxPQUFBO0FBUUEsSUFBQVEsYUFBQSxHQUFBSCxzQkFBQSxDQUFBTCxPQUFBO0FBQ0EsSUFBQVMsY0FBQSxHQUFBTix1QkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQVUsZUFBQSxHQUFBTCxzQkFBQSxDQUFBTCxPQUFBO0FBQStDLElBQUFXLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFyQi9DO0FBQ0E7QUFBQSxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQWpCLHdCQUFBaUIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxD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LG1CQUFvQjtNQUNsQ3ZGLGFBQWEsRUFBRWlHO0lBQXFCLENBQ3JDLENBQ2tCLENBQUM7RUFFMUIsQ0FBQztFQUVELElBQU1VLHdCQUFpRSxHQUFHLFNBQXBFQSx3QkFBaUVBLENBQUFDLEtBQUEsRUFTakU7SUFBQSxJQVJKQyxVQUFVLEdBQUFELEtBQUEsQ0FBVkMsVUFBVTtNQUNWQyxPQUFPLEdBQUFGLEtBQUEsQ0FBUEUsT0FBTztNQUNQdEQsV0FBVyxHQUFBb0QsS0FBQSxDQUFYcEQsV0FBVztNQUNYSixPQUFPLEdBQUF3RCxLQUFBLENBQVB4RCxPQUFPO01BQ1BDLFlBQVksR0FBQXVELEtBQUEsQ0FBWnZELFlBQVk7TUFDWkMsVUFBVSxHQUFBc0QsS0FBQSxDQUFWdEQsVUFBVTtNQUNWQyxlQUFlLEdBQUFxRCxLQUFBLENBQWZyRCxlQUFlO01BQ2ZFLGdCQUFnQixHQUFBbUQsS0FBQSxDQUFoQm5ELGdCQUFnQjtJQUVoQixJQUFNc0QsU0FBUyxHQUFHRixVQUFVLGFBQVZBLFVBQVUsdUJBQVZBLFVBQVUsQ0FBRUcsSUFBSTtJQUNsQyxJQUFNQyxLQUFLLEdBQUcsSUFBQTVDLGNBQU8sRUFDbkI7TUFBQSxPQUFPMEMsU0FBUyxHQUFHRCxPQUFPLENBQUNJLGNBQWMsQ0FBQ0gsU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUFBLENBQUMsRUFDNUQsQ0FBQ0QsT0FBTyxFQUFFQyxTQUFTLENBQ3JCLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBQUksMEJBQW9CLEVBQUMzRCxXQUFXLENBQUMsRUFBRTtNQUN0QztNQUNBLE9BQU8sSUFBSTtJQUNiO0lBRUEsSUFBSXlELEtBQUssYUFBTEEsS0FBSyxlQUFMQSxLQUFLLENBQUVHLGNBQWMsRUFBRTtNQUN6QixvQkFDRXROLE1BQUEsWUFBQXFGLGFBQUEsQ0FBQ3JCLGVBQWUscUJBQ2RoRSxNQUFBLFlBQUFxRixhQUFBLENBQUM3RSxlQUFBLFdBQWMsTUFBRSxDQUNGLENBQUM7SUFFdEI7SUFFQSxvQkFDRVIsTUFBQSxZQUFBcUYsYUFBQSxDQUFDK0QsZ0JBQWdCO01BQ2ZNLFdBQVcsRUFBRUEsV0FBWTtNQUN6QkosT0FBTyxFQUFFQSxPQUFRO01BQ2pCQyxZQUFZLEVBQUVBLFlBQWE7TUFDM0JDLFVBQVUsRUFBRUEsVUFBVztNQUN2QkMsZUFBZSxFQUFFQSxlQUFnQjtNQUNqQ0UsZ0JBQWdCLEVBQUVBO0lBQWlCLENBQ3BDLENBQUM7RUFFTixDQUFDO0VBRUQsT0FBT2tELHdCQUF3QjtBQUNqQztBQUFDLElBQUFVLFFBQUEsR0FBQWxLLE9BQUEsY0FFYzJGLHVCQUF1QiIsImlnbm9yZUxpc3QiOltdfQ==