"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/node_modules/react"));
var _styledComponents = _interopRequireDefault(require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/node_modules/styled-components"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/src/constants/src");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/_app_fork/kepler.gl-db/src/utils/src");
var _colorBreaksPanel = _interopRequireDefault(require("./color-breaks-panel"));
var _dropdownSelect = _interopRequireDefault(require("../../common/item-selector/dropdown-select"));
var _accessor = _interopRequireDefault(require("../../common/item-selector/accessor"));
var _dropdownList = _interopRequireDefault(require("../../common/item-selector/dropdown-list"));
var _lazyTippy = _interopRequireDefault(require("../../map/lazy-tippy"));
var _typeahead = _interopRequireDefault(require("../../common/item-selector/typeahead"));
var _excluded = ["layer", "field", "dataset", "onSelect", "scaleType", "domain", "aggregatedBins", "range", "setColorUI", "colorUIConfig", "channelKey"],
  _excluded2 = ["colorMap"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// 'tippy-js'

var HISTOGRAM_BINS = 30;
var DropdownPropContext = _react["default"].createContext({});
var POPPER_OPTIONS = {
  modifiers: [
  // zero offsets since they are already added in VerticalToolbar
  {
    name: 'offset',
    options: {
      offset: [0, 0]
    }
  }]
};
var DropdownBottom = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-top: 1px solid\n    ", ";\n"])), function (props) {
  return props.light ? props.theme.dropdownListBorderTopLT : props.theme.dropdownListBorderTop;
});
var StyledScaleSelectDropdown = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: ", ";\n  .list-selector {\n    box-shadow: none;\n    border-top: 0;\n  }\n  .list__item {\n    padding: 4px 9px;\n  }\n"])), function (props) {
  return props.theme.dropdownListShadow;
});
var DropdownWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: ", ";\n  position: absolute;\n  margin-top: ", "px;\n"])), function (props) {
  return props.theme.dropdownWrapperZ;
}, function (props) {
  return props.theme.dropdownWapperMargin;
});
var StyledColorScaleSelector = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  .typeahead {\n    // adds padding to bottom of dropdown\n    margin-bottom: 40px;\n  }\n  [data-tippy-root] {\n    width: 100%;\n  }\n"])));
function hideTippy(tippyInstance) {
  if (tippyInstance) {
    tippyInstance.hide();
  }
}
ColorScaleSelectorFactory.deps = [_colorBreaksPanel["default"]];
function ColorScaleSelectorFactory(ColorBreaksPanel) {
  var ColorScaleSelectDropdown = function ColorScaleSelectDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(StyledScaleSelectDropdown, null, /*#__PURE__*/_react["default"].createElement(_dropdownList["default"], props), /*#__PURE__*/_react["default"].createElement(DropdownPropContext.Consumer, null, function (context) {
      return /*#__PURE__*/_react["default"].createElement(DropdownBottom, null, /*#__PURE__*/_react["default"].createElement(ColorBreaksPanel, context));
    }));
  };
  var ColorScaleSelector = function ColorScaleSelector(_ref) {
    var _colorUIConfig$colorR, _colorUIConfig$custom2, _field$filterProps;
    var layer = _ref.layer,
      field = _ref.field,
      dataset = _ref.dataset,
      onSelect = _ref.onSelect,
      scaleType = _ref.scaleType,
      domain = _ref.domain,
      aggregatedBins = _ref.aggregatedBins,
      range = _ref.range,
      setColorUI = _ref.setColorUI,
      colorUIConfig = _ref.colorUIConfig,
      channelKey = _ref.channelKey,
      dropdownSelectProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    var displayOption = _accessor["default"].generateOptionToStringFor(dropdownSelectProps.displayOption);
    var getOptionValue = (0, _react.useMemo)(function () {
      return _accessor["default"].generateOptionToStringFor(dropdownSelectProps.getOptionValue);
    }, [dropdownSelectProps.getOptionValue]);
    var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      tippyInstance = _useState2[0],
      setTippyInstance = _useState2[1];
    var isEditingColorBreaks = colorUIConfig === null || colorUIConfig === void 0 || (_colorUIConfig$colorR = colorUIConfig.colorRangeConfig) === null || _colorUIConfig$colorR === void 0 ? void 0 : _colorUIConfig$colorR.customBreaks;

    // Stores the previous selection for live preview: when choosing Custom/Custom Ordinal, we apply a temporary palette.
    // Cancel restores {scale, range} from this ref; Confirm keeps the change and clears the ref.
    // If the user switches between different custom scale types (e.g., from "Custom" to "Custom Ordinal") or is already in a custom scale state,
    // this ref is updated to always store the most recent non-custom selection. Only the latest non-custom selection is restorable on cancel.
    var prevSelectionRef = _react["default"].useRef(null);

    // when custom color scale - but Confirm is not clicked yet
    var pendingOption = (0, _react.useMemo)(function () {
      return isEditingColorBreaks ? (dropdownSelectProps.options || []).find(function (o) {
        var _colorUIConfig$custom;
        return getOptionValue(o) === (colorUIConfig === null || colorUIConfig === void 0 || (_colorUIConfig$custom = colorUIConfig.customPalette) === null || _colorUIConfig$custom === void 0 ? void 0 : _colorUIConfig$custom.type);
      }) || null : null;
    }, [isEditingColorBreaks, dropdownSelectProps.options, getOptionValue, colorUIConfig === null || colorUIConfig === void 0 || (_colorUIConfig$custom2 = colorUIConfig.customPalette) === null || _colorUIConfig$custom2 === void 0 ? void 0 : _colorUIConfig$custom2.type]);
    var colorScale = (0, _react.useMemo)(function () {
      return (0, _src2.getLayerColorScale)({
        range: range,
        domain: domain,
        scaleType: scaleType,
        layer: layer
      });
    }, [range, domain, scaleType, layer]);
    var colorBreaks = (0, _react.useMemo)(function () {
      var _field$type;
      return colorScale ? (0, _src2.getLegendOfScale)({
        scale: colorScale.byZoom && domain ? colorScale((domain === null || domain === void 0 ? void 0 : domain.length) - 1) : colorScale,
        scaleType: scaleType,
        fieldType: (_field$type = field === null || field === void 0 ? void 0 : field.type) !== null && _field$type !== void 0 ? _field$type : _src.ALL_FIELD_TYPES.real
      }) : null;
    }, [colorScale, scaleType, field === null || field === void 0 ? void 0 : field.type, domain]);
    var columnStats = field === null || field === void 0 || (_field$filterProps = field.filterProps) === null || _field$filterProps === void 0 ? void 0 : _field$filterProps.columnStats;
    var fieldValueAccessor = (0, _react.useMemo)(function () {
      return field ? function (idx) {
        return dataset.getValue(field.name, idx);
      } : function (idx) {
        return dataset.dataContainer.rowAsArray(idx);
      };
    }, [dataset, field]);
    var ordinalDomain = (0, _react.useMemo)(function () {
      return layer.config[layer.visualChannels[channelKey].domain] || [];
    }, [channelKey, layer.config, layer.visualChannels]);

    // aggregatedBins should be the raw data
    var allBins = (0, _react.useMemo)(function () {
      if ((field === null || field === void 0 ? void 0 : field.type) === _src.ALL_FIELD_TYPES.string) {
        // Use ordinal bins for string columns, as d3 could potentially generate invalid numeric bins, and crash
        return (0, _src2.histogramFromOrdinal)(ordinalDomain, dataset.allIndexes, fieldValueAccessor);
      }
      if (aggregatedBins) {
        return (0, _src2.histogramFromValues)(Object.values(aggregatedBins).map(function (bin) {
          return bin.i;
        }), HISTOGRAM_BINS, function (idx) {
          return aggregatedBins[idx].value;
        });
      }
      return columnStats !== null && columnStats !== void 0 && columnStats.bins ? columnStats === null || columnStats === void 0 ? void 0 : columnStats.bins : (0, _src2.histogramFromValues)(dataset.allIndexes, HISTOGRAM_BINS, fieldValueAccessor);
    }, [aggregatedBins, columnStats, dataset, fieldValueAccessor, field === null || field === void 0 ? void 0 : field.type, ordinalDomain]);
    var histogramDomain = (0, _react.useMemo)(function () {
      return (0, _src2.getHistogramDomain)({
        aggregatedBins: aggregatedBins,
        columnStats: columnStats,
        dataset: dataset,
        fieldValueAccessor: fieldValueAccessor
      });
    }, [dataset, fieldValueAccessor, aggregatedBins, columnStats]);
    var isFiltered = aggregatedBins ? false : dataset.filteredIndexForDomain.length !== dataset.allIndexes.length;

    // get filteredBins (not apply to aggregate layer)
    var filteredBins = (0, _react.useMemo)(function () {
      if (!isFiltered) {
        return allBins;
      }
      if ((field === null || field === void 0 ? void 0 : field.type) === _src.ALL_FIELD_TYPES.string) {
        return (0, _src2.histogramFromOrdinal)(ordinalDomain, dataset.filteredIndexForDomain, fieldValueAccessor);
      }
      // numeric thresholds
      var filterEmptyBins = false;
      var thresholds = allBins.map(function (b) {
        return b.x0;
      });
      return (0, _src2.histogramFromThreshold)(thresholds, dataset.filteredIndexForDomain, fieldValueAccessor, filterEmptyBins);
    }, [dataset, fieldValueAccessor, allBins, isFiltered, field === null || field === void 0 ? void 0 : field.type, ordinalDomain]);
    var onSelectScale = (0, _react.useCallback)(function (val) {
      // highlight selected option
      if (!val) return;
      var selectedScale = getOptionValue(val);
      if (selectedScale === _src.SCALE_TYPES.custom || selectedScale === _src.SCALE_TYPES.customOrdinal) {
        var customPalette = (0, _src2.initCustomPaletteByCustomScale)(_objectSpread({
          scale: selectedScale,
          field: field,
          range: range,
          colorBreaks: colorBreaks
        }, selectedScale === _src.SCALE_TYPES.customOrdinal ? {
          ordinalDomain: ordinalDomain
        } : {}));
        setColorUI({
          showColorChart: true,
          colorRangeConfig: {
            customBreaks: true
          },
          customPalette: customPalette
        });
        // store previous selection for cancel, then preview custom on the map
        if (!prevSelectionRef.current) {
          prevSelectionRef.current = {
            scale: scaleType,
            range: range
          };
        }
        onSelect(selectedScale, customPalette);
      } else if ((0, _src2.hasColorMap)(range)) {
        // not custom
        // remove colorMap
        // eslint-disable-next-line no-unused-vars
        var _ = range.colorMap,
          newRange = (0, _objectWithoutProperties2["default"])(range, _excluded2);
        // reset colorUI before changing the scale
        setColorUI({
          showColorChart: false,
          colorRangeConfig: {
            customBreaks: false
          }
        });
        onSelect(selectedScale, newRange);
      } else {
        // reset colorUI before changing the scale
        setColorUI({
          showColorChart: false,
          colorRangeConfig: {
            customBreaks: false
          }
        });
        onSelect(selectedScale);
      }
    }, [field, setColorUI, onSelect, range, getOptionValue, colorBreaks, ordinalDomain, scaleType]);
    var onApply = (0, _react.useCallback)(function () {
      var _colorUIConfig$custom3;
      // change scale type only if confirmed
      var nextScaleType = (colorUIConfig === null || colorUIConfig === void 0 || (_colorUIConfig$custom3 = colorUIConfig.customPalette) === null || _colorUIConfig$custom3 === void 0 ? void 0 : _colorUIConfig$custom3.type) || scaleType;
      onSelect(nextScaleType, colorUIConfig.customPalette);
      hideTippy(tippyInstance);
      prevSelectionRef.current = null;
    }, [onSelect, colorUIConfig.customPalette, tippyInstance, scaleType]);
    var onCancel = (0, _react.useCallback)(function () {
      // restore previous selection if any
      if (prevSelectionRef.current) {
        var _prevSelectionRef$cur = prevSelectionRef.current,
          prevScale = _prevSelectionRef$cur.scale,
          prevRange = _prevSelectionRef$cur.range;
        onSelect(prevScale, prevRange);
      }
      hideTippy(tippyInstance);
      prevSelectionRef.current = null;
    }, [tippyInstance, onSelect]);
    var isCustomBreaks = scaleType === _src.SCALE_TYPES.custom || scaleType === _src.SCALE_TYPES.customOrdinal;
    return /*#__PURE__*/_react["default"].createElement(DropdownPropContext.Provider, {
      value: {
        setColorUI: setColorUI,
        colorField: field,
        dataset: dataset,
        colorUIConfig: colorUIConfig,
        colorBreaks: colorBreaks,
        isCustomBreaks: isCustomBreaks,
        allBins: allBins,
        filteredBins: filteredBins,
        isFiltered: isFiltered,
        histogramDomain: histogramDomain,
        ordinalDomain: ordinalDomain,
        onScaleChange: onSelect,
        onApply: onApply,
        onCancel: onCancel
      }
    }, /*#__PURE__*/_react["default"].createElement(StyledColorScaleSelector, null, /*#__PURE__*/_react["default"].createElement(_lazyTippy["default"], {
      trigger: "click",
      placement: "bottom-start",
      appendTo: "parent",
      interactive: true,
      hideOnClick: !isEditingColorBreaks,
      onCreate: setTippyInstance,
      popperOptions: POPPER_OPTIONS,
      render: function render(attrs) {
        return /*#__PURE__*/_react["default"].createElement(DropdownWrapper, attrs, !dropdownSelectProps.disabled && /*#__PURE__*/_react["default"].createElement(_typeahead["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
          displayOption: displayOption
          // @ts-ignore
          ,
          getOptionValue: getOptionValue,
          onOptionSelected: onSelectScale,
          customListComponent: ColorScaleSelectDropdown,
          searchable: false,
          showOptionsWhenEmpty: true,
          selectedItems: pendingOption ? [pendingOption] : dropdownSelectProps.selectedItems
        })));
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "dropdown-select"
    }, /*#__PURE__*/_react["default"].createElement(_dropdownSelect["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
      displayOption: displayOption,
      value: pendingOption || dropdownSelectProps.selectedItems[0]
    }))))));
  };
  return ColorScaleSelector;
}
var _default = exports["default"] = ColorScaleSelectorFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfc3JjIiwiX3NyYzIiLCJfY29sb3JCcmVha3NQYW5lbCIsIl9kcm9wZG93blNlbGVjdCIsIl9hY2Nlc3NvciIsIl9kcm9wZG93bkxpc3QiLCJfbGF6eVRpcHB5IiwiX3R5cGVhaGVhZCIsIl9leGNsdWRlZCIsIl9leGNsdWRlZDIiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGVtcGxhdGVPYmplY3QyIiwiX3RlbXBsYXRlT2JqZWN0MyIsIl90ZW1wbGF0ZU9iamVjdDQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJISVNUT0dSQU1fQklOUyIsIkRyb3Bkb3duUHJvcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJQT1BQRVJfT1BUSU9OUyIsIm1vZGlmaWVycyIsIm5hbWUiLCJvcHRpb25zIiwib2Zmc2V0IiwiRHJvcGRvd25Cb3R0b20iLCJzdHlsZWQiLCJkaXYiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInByb3BzIiwibGlnaHQiLCJ0aGVtZSIsImRyb3Bkb3duTGlzdEJvcmRlclRvcExUIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiU3R5bGVkU2NhbGVTZWxlY3REcm9wZG93biIsImRyb3Bkb3duTGlzdFNoYWRvdyIsIkRyb3Bkb3duV3JhcHBlciIsImRyb3Bkb3duV3JhcHBlcloiLCJkcm9wZG93bldhcHBlck1hcmdpbiIsIlN0eWxlZENvbG9yU2NhbGVTZWxlY3RvciIsImhpZGVUaXBweSIsInRpcHB5SW5zdGFuY2UiLCJoaWRlIiwiQ29sb3JTY2FsZVNlbGVjdG9yRmFjdG9yeSIsImRlcHMiLCJDb2xvckJyZWFrc1BhbmVsRmFjdG9yeSIsIkNvbG9yQnJlYWtzUGFuZWwiLCJDb2xvclNjYWxlU2VsZWN0RHJvcGRvd24iLCJjcmVhdGVFbGVtZW50IiwiQ29uc3VtZXIiLCJjb250ZXh0IiwiQ29sb3JTY2FsZVNlbGVjdG9yIiwiX3JlZiIsIl9jb2xvclVJQ29uZmlnJGNvbG9yUiIsIl9jb2xvclVJQ29uZmlnJGN1c3RvbTIiLCJfZmllbGQkZmlsdGVyUHJvcHMiLCJsYXllciIsImZpZWxkIiwiZGF0YXNldCIsIm9uU2VsZWN0Iiwic2NhbGVUeXBlIiwiZG9tYWluIiwiYWdncmVnYXRlZEJpbnMiLCJyYW5nZSIsInNldENvbG9yVUkiLCJjb2xvclVJQ29uZmlnIiwiY2hhbm5lbEtleSIsImRyb3Bkb3duU2VsZWN0UHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiZGlzcGxheU9wdGlvbiIsIkFjY2Vzc29yIiwiZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0ZvciIsImdldE9wdGlvblZhbHVlIiwidXNlTWVtbyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5MiIsInNldFRpcHB5SW5zdGFuY2UiLCJpc0VkaXRpbmdDb2xvckJyZWFrcyIsImNvbG9yUmFuZ2VDb25maWciLCJjdXN0b21CcmVha3MiLCJwcmV2U2VsZWN0aW9uUmVmIiwidXNlUmVmIiwicGVuZGluZ09wdGlvbiIsImZpbmQiLCJfY29sb3JVSUNvbmZpZyRjdXN0b20iLCJjdXN0b21QYWxldHRlIiwidHlwZSIsImNvbG9yU2NhbGUiLCJnZXRMYXllckNvbG9yU2NhbGUiLCJjb2xvckJyZWFrcyIsIl9maWVsZCR0eXBlIiwiZ2V0TGVnZW5kT2ZTY2FsZSIsInNjYWxlIiwiYnlab29tIiwiZmllbGRUeXBlIiwiQUxMX0ZJRUxEX1RZUEVTIiwicmVhbCIsImNvbHVtblN0YXRzIiwiZmlsdGVyUHJvcHMiLCJmaWVsZFZhbHVlQWNjZXNzb3IiLCJpZHgiLCJnZXRWYWx1ZSIsImRhdGFDb250YWluZXIiLCJyb3dBc0FycmF5Iiwib3JkaW5hbERvbWFpbiIsImNvbmZpZyIsInZpc3VhbENoYW5uZWxzIiwiYWxsQmlucyIsInN0cmluZyIsImhpc3RvZ3JhbUZyb21PcmRpbmFsIiwiYWxsSW5kZXhlcyIsImhpc3RvZ3JhbUZyb21WYWx1ZXMiLCJ2YWx1ZXMiLCJtYXAiLCJiaW4iLCJ2YWx1ZSIsImJpbnMiLCJoaXN0b2dyYW1Eb21haW4iLCJnZXRIaXN0b2dyYW1Eb21haW4iLCJpc0ZpbHRlcmVkIiwiZmlsdGVyZWRJbmRleEZvckRvbWFpbiIsImZpbHRlcmVkQmlucyIsImZpbHRlckVtcHR5QmlucyIsInRocmVzaG9sZHMiLCJiIiwieDAiLCJoaXN0b2dyYW1Gcm9tVGhyZXNob2xkIiwib25TZWxlY3RTY2FsZSIsInVzZUNhbGxiYWNrIiwidmFsIiwic2VsZWN0ZWRTY2FsZSIsIlNDQUxFX1RZUEVTIiwiY3VzdG9tIiwiY3VzdG9tT3JkaW5hbCIsImluaXRDdXN0b21QYWxldHRlQnlDdXN0b21TY2FsZSIsInNob3dDb2xvckNoYXJ0IiwiY3VycmVudCIsImhhc0NvbG9yTWFwIiwiXyIsImNvbG9yTWFwIiwibmV3UmFuZ2UiLCJvbkFwcGx5IiwiX2NvbG9yVUlDb25maWckY3VzdG9tMyIsIm5leHRTY2FsZVR5cGUiLCJvbkNhbmNlbCIsIl9wcmV2U2VsZWN0aW9uUmVmJGN1ciIsInByZXZTY2FsZSIsInByZXZSYW5nZSIsImlzQ3VzdG9tQnJlYWtzIiwiUHJvdmlkZXIiLCJjb2xvckZpZWxkIiwib25TY2FsZUNoYW5nZSIsInRyaWdnZXIiLCJwbGFjZW1lbnQiLCJhcHBlbmRUbyIsImludGVyYWN0aXZlIiwiaGlkZU9uQ2xpY2siLCJvbkNyZWF0ZSIsInBvcHBlck9wdGlvbnMiLCJyZW5kZXIiLCJhdHRycyIsImRpc2FibGVkIiwiX2V4dGVuZHMyIiwib25PcHRpb25TZWxlY3RlZCIsImN1c3RvbUxpc3RDb21wb25lbnQiLCJzZWFyY2hhYmxlIiwic2hvd09wdGlvbnNXaGVuRW1wdHkiLCJzZWxlY3RlZEl0ZW1zIiwiY2xhc3NOYW1lIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc3JjL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sb3Itc2NhbGUtc2VsZWN0b3IudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vIENvcHlyaWdodCBjb250cmlidXRvcnMgdG8gdGhlIGtlcGxlci5nbCBwcm9qZWN0XG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTLCBTQ0FMRV9UWVBFU30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtBZ2dyZWdhdGVkQmluLCBMYXllciwgVmlzdWFsQ2hhbm5lbERvbWFpbn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHtLZXBsZXJUYWJsZX0gZnJvbSAnQGtlcGxlci5nbC90YWJsZSc7XG5pbXBvcnQge0NvbG9yUmFuZ2UsIENvbG9yVUksIEZpZWxkfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7XG4gIGdldExheWVyQ29sb3JTY2FsZSxcbiAgZ2V0TGVnZW5kT2ZTY2FsZSxcbiAgaW5pdEN1c3RvbVBhbGV0dGVCeUN1c3RvbVNjYWxlLFxuICBoaXN0b2dyYW1Gcm9tVmFsdWVzLFxuICBoaXN0b2dyYW1Gcm9tT3JkaW5hbCxcbiAgaGlzdG9ncmFtRnJvbVRocmVzaG9sZCxcbiAgZ2V0SGlzdG9ncmFtRG9tYWluLFxuICBoYXNDb2xvck1hcFxufSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcblxuaW1wb3J0IENvbG9yQnJlYWtzUGFuZWxGYWN0b3J5LCB7Q29sb3JCcmVha3NQYW5lbFByb3BzfSBmcm9tICcuL2NvbG9yLWJyZWFrcy1wYW5lbCc7XG5pbXBvcnQge1NldENvbG9yVUlGdW5jfSBmcm9tICcuL2N1c3RvbS1wYWxldHRlJztcbmltcG9ydCBEcm9wZG93blNlbGVjdCBmcm9tICcuLi8uLi9jb21tb24vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1zZWxlY3QnO1xuaW1wb3J0IEFjY2Vzc29yIGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2FjY2Vzc29yJztcbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSAnLi4vLi4vY29tbW9uL2l0ZW0tc2VsZWN0b3IvZHJvcGRvd24tbGlzdCc7XG5pbXBvcnQgTGF6eVRpcHB5IGZyb20gJy4uLy4uL21hcC9sYXp5LXRpcHB5JztcbmltcG9ydCBUeXBlYWhlYWQgZnJvbSAnLi4vLi4vY29tbW9uL2l0ZW0tc2VsZWN0b3IvdHlwZWFoZWFkJztcblxudHlwZSBUaXBweUluc3RhbmNlID0gYW55OyAvLyAndGlwcHktanMnXG5cbmNvbnN0IEhJU1RPR1JBTV9CSU5TID0gMzA7XG5cbmV4cG9ydCB0eXBlIFNjYWxlT3B0aW9uID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIE9uU2VsZWN0RnVuYyA9ICh2OiBzdHJpbmcsIHZpc0NvbmZnPzogUmVjb3JkPHN0cmluZywgYW55PikgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgQ29udGV4dFByb3BzID0gQ29sb3JCcmVha3NQYW5lbFByb3BzO1xuXG5leHBvcnQgdHlwZSBDb2xvclNjYWxlU2VsZWN0b3JQcm9wcyA9IHtcbiAgbGF5ZXI6IExheWVyO1xuICBmaWVsZDogRmllbGQ7XG4gIGRhdGFzZXQ6IEtlcGxlclRhYmxlO1xuICBzY2FsZVR5cGU6IHN0cmluZztcbiAgZG9tYWluOiBWaXN1YWxDaGFubmVsRG9tYWluO1xuICByYW5nZTogQ29sb3JSYW5nZTtcbiAgb25TZWxlY3Q6IE9uU2VsZWN0RnVuYztcbiAgc2V0Q29sb3JVSTogU2V0Q29sb3JVSUZ1bmM7XG4gIGNvbG9yVUlDb25maWc6IENvbG9yVUk7XG4gIG9wdGlvbnM6IFNjYWxlT3B0aW9uW107XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2VsZWN0ZWRJdGVtczogU2NhbGVPcHRpb25bXTtcbiAgbXVsdGlTZWxlY3Q6IGJvb2xlYW47XG4gIHNlYXJjaGFibGU6IGJvb2xlYW47XG4gIGRpc3BsYXlPcHRpb246IHN0cmluZztcbiAgZ2V0T3B0aW9uVmFsdWU6IHN0cmluZztcbiAgYWdncmVnYXRlZEJpbnM/OiBBZ2dyZWdhdGVkQmluW107XG4gIGNoYW5uZWxLZXk6IHN0cmluZztcbn07XG5cbmNvbnN0IERyb3Bkb3duUHJvcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbmNvbnN0IFBPUFBFUl9PUFRJT05TID0ge1xuICBtb2RpZmllcnM6IFtcbiAgICAvLyB6ZXJvIG9mZnNldHMgc2luY2UgdGhleSBhcmUgYWxyZWFkeSBhZGRlZCBpbiBWZXJ0aWNhbFRvb2xiYXJcbiAgICB7bmFtZTogJ29mZnNldCcsIG9wdGlvbnM6IHtvZmZzZXQ6IFswLCAwXX19XG4gIF1cbn07XG5cbmNvbnN0IERyb3Bkb3duQm90dG9tID0gc3R5bGVkLmRpdjx7bGlnaHQ/OiBib29sZWFufT5gXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZFxuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmxpZ2h0ID8gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wTFQgOiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCb3JkZXJUb3B9O1xuYDtcblxuY29uc3QgU3R5bGVkU2NhbGVTZWxlY3REcm9wZG93biA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0U2hhZG93fTtcbiAgLmxpc3Qtc2VsZWN0b3Ige1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuICAubGlzdF9faXRlbSB7XG4gICAgcGFkZGluZzogNHB4IDlweDtcbiAgfVxuYDtcbmNvbnN0IERyb3Bkb3duV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWn07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bldhcHBlck1hcmdpbn1weDtcbmA7XG5cbmNvbnN0IFN0eWxlZENvbG9yU2NhbGVTZWxlY3RvciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnR5cGVhaGVhZCB7XG4gICAgLy8gYWRkcyBwYWRkaW5nIHRvIGJvdHRvbSBvZiBkcm9wZG93blxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgW2RhdGEtdGlwcHktcm9vdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBoaWRlVGlwcHkodGlwcHlJbnN0YW5jZSkge1xuICBpZiAodGlwcHlJbnN0YW5jZSkge1xuICAgIHRpcHB5SW5zdGFuY2UuaGlkZSgpO1xuICB9XG59XG5Db2xvclNjYWxlU2VsZWN0b3JGYWN0b3J5LmRlcHMgPSBbQ29sb3JCcmVha3NQYW5lbEZhY3RvcnldO1xuXG5mdW5jdGlvbiBDb2xvclNjYWxlU2VsZWN0b3JGYWN0b3J5KFxuICBDb2xvckJyZWFrc1BhbmVsOiBSZXR1cm5UeXBlPHR5cGVvZiBDb2xvckJyZWFrc1BhbmVsRmFjdG9yeT5cbik6IFJlYWN0LkZDPENvbG9yU2NhbGVTZWxlY3RvclByb3BzPiB7XG4gIGNvbnN0IENvbG9yU2NhbGVTZWxlY3REcm9wZG93biA9IHByb3BzID0+IChcbiAgICA8U3R5bGVkU2NhbGVTZWxlY3REcm9wZG93bj5cbiAgICAgIDxEcm9wZG93bkxpc3Qgey4uLnByb3BzfSAvPlxuICAgICAgPERyb3Bkb3duUHJvcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoY29udGV4dDogYW55KSA9PiAoXG4gICAgICAgICAgPERyb3Bkb3duQm90dG9tPlxuICAgICAgICAgICAgPENvbG9yQnJlYWtzUGFuZWwgey4uLmNvbnRleHR9IC8+XG4gICAgICAgICAgPC9Ecm9wZG93bkJvdHRvbT5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcGRvd25Qcm9wQ29udGV4dC5Db25zdW1lcj5cbiAgICA8L1N0eWxlZFNjYWxlU2VsZWN0RHJvcGRvd24+XG4gICk7XG5cbiAgY29uc3QgQ29sb3JTY2FsZVNlbGVjdG9yOiBSZWFjdC5GQzxDb2xvclNjYWxlU2VsZWN0b3JQcm9wcz4gPSAoe1xuICAgIGxheWVyLFxuICAgIGZpZWxkLFxuICAgIGRhdGFzZXQsXG4gICAgb25TZWxlY3QsXG4gICAgc2NhbGVUeXBlLFxuICAgIGRvbWFpbixcbiAgICBhZ2dyZWdhdGVkQmlucyxcbiAgICByYW5nZSxcbiAgICBzZXRDb2xvclVJLFxuICAgIGNvbG9yVUlDb25maWcsXG4gICAgY2hhbm5lbEtleSxcbiAgICAuLi5kcm9wZG93blNlbGVjdFByb3BzXG4gIH0pID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T3B0aW9uID0gQWNjZXNzb3IuZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0Zvcihkcm9wZG93blNlbGVjdFByb3BzLmRpc3BsYXlPcHRpb24pO1xuICAgIGNvbnN0IGdldE9wdGlvblZhbHVlID0gdXNlTWVtbyhcbiAgICAgICgpID0+IEFjY2Vzc29yLmdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IoZHJvcGRvd25TZWxlY3RQcm9wcy5nZXRPcHRpb25WYWx1ZSksXG4gICAgICBbZHJvcGRvd25TZWxlY3RQcm9wcy5nZXRPcHRpb25WYWx1ZV1cbiAgICApO1xuICAgIGNvbnN0IFt0aXBweUluc3RhbmNlLCBzZXRUaXBweUluc3RhbmNlXSA9IHVzZVN0YXRlPFRpcHB5SW5zdGFuY2U+KCk7XG4gICAgY29uc3QgaXNFZGl0aW5nQ29sb3JCcmVha3MgPSBjb2xvclVJQ29uZmlnPy5jb2xvclJhbmdlQ29uZmlnPy5jdXN0b21CcmVha3M7XG5cbiAgICAvLyBTdG9yZXMgdGhlIHByZXZpb3VzIHNlbGVjdGlvbiBmb3IgbGl2ZSBwcmV2aWV3OiB3aGVuIGNob29zaW5nIEN1c3RvbS9DdXN0b20gT3JkaW5hbCwgd2UgYXBwbHkgYSB0ZW1wb3JhcnkgcGFsZXR0ZS5cbiAgICAvLyBDYW5jZWwgcmVzdG9yZXMge3NjYWxlLCByYW5nZX0gZnJvbSB0aGlzIHJlZjsgQ29uZmlybSBrZWVwcyB0aGUgY2hhbmdlIGFuZCBjbGVhcnMgdGhlIHJlZi5cbiAgICAvLyBJZiB0aGUgdXNlciBzd2l0Y2hlcyBiZXR3ZWVuIGRpZmZlcmVudCBjdXN0b20gc2NhbGUgdHlwZXMgKGUuZy4sIGZyb20gXCJDdXN0b21cIiB0byBcIkN1c3RvbSBPcmRpbmFsXCIpIG9yIGlzIGFscmVhZHkgaW4gYSBjdXN0b20gc2NhbGUgc3RhdGUsXG4gICAgLy8gdGhpcyByZWYgaXMgdXBkYXRlZCB0byBhbHdheXMgc3RvcmUgdGhlIG1vc3QgcmVjZW50IG5vbi1jdXN0b20gc2VsZWN0aW9uLiBPbmx5IHRoZSBsYXRlc3Qgbm9uLWN1c3RvbSBzZWxlY3Rpb24gaXMgcmVzdG9yYWJsZSBvbiBjYW5jZWwuXG4gICAgY29uc3QgcHJldlNlbGVjdGlvblJlZiA9IFJlYWN0LnVzZVJlZjx7c2NhbGU6IHN0cmluZzsgcmFuZ2U6IENvbG9yUmFuZ2V9IHwgbnVsbD4obnVsbCk7XG5cbiAgICAvLyB3aGVuIGN1c3RvbSBjb2xvciBzY2FsZSAtIGJ1dCBDb25maXJtIGlzIG5vdCBjbGlja2VkIHlldFxuICAgIGNvbnN0IHBlbmRpbmdPcHRpb24gPSB1c2VNZW1vKFxuICAgICAgKCkgPT5cbiAgICAgICAgaXNFZGl0aW5nQ29sb3JCcmVha3NcbiAgICAgICAgICA/IChkcm9wZG93blNlbGVjdFByb3BzLm9wdGlvbnMgfHwgW10pLmZpbmQoXG4gICAgICAgICAgICAgIG8gPT4gZ2V0T3B0aW9uVmFsdWUobykgPT09IGNvbG9yVUlDb25maWc/LmN1c3RvbVBhbGV0dGU/LnR5cGVcbiAgICAgICAgICAgICkgfHwgbnVsbFxuICAgICAgICAgIDogbnVsbCxcbiAgICAgIFtcbiAgICAgICAgaXNFZGl0aW5nQ29sb3JCcmVha3MsXG4gICAgICAgIGRyb3Bkb3duU2VsZWN0UHJvcHMub3B0aW9ucyxcbiAgICAgICAgZ2V0T3B0aW9uVmFsdWUsXG4gICAgICAgIGNvbG9yVUlDb25maWc/LmN1c3RvbVBhbGV0dGU/LnR5cGVcbiAgICAgIF1cbiAgICApO1xuICAgIGNvbnN0IGNvbG9yU2NhbGUgPSB1c2VNZW1vKFxuICAgICAgKCkgPT5cbiAgICAgICAgZ2V0TGF5ZXJDb2xvclNjYWxlKHtcbiAgICAgICAgICByYW5nZSxcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgICAgc2NhbGVUeXBlLFxuICAgICAgICAgIGxheWVyXG4gICAgICAgIH0pLFxuICAgICAgW3JhbmdlLCBkb21haW4sIHNjYWxlVHlwZSwgbGF5ZXJdXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbG9yQnJlYWtzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICByZXR1cm4gY29sb3JTY2FsZVxuICAgICAgICA/IGdldExlZ2VuZE9mU2NhbGUoe1xuICAgICAgICAgICAgc2NhbGU6IGNvbG9yU2NhbGUuYnlab29tICYmIGRvbWFpbiA/IGNvbG9yU2NhbGUoZG9tYWluPy5sZW5ndGggLSAxKSA6IGNvbG9yU2NhbGUsXG4gICAgICAgICAgICBzY2FsZVR5cGUsXG4gICAgICAgICAgICBmaWVsZFR5cGU6IGZpZWxkPy50eXBlID8/IEFMTF9GSUVMRF9UWVBFUy5yZWFsXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBudWxsO1xuICAgIH0sIFtjb2xvclNjYWxlLCBzY2FsZVR5cGUsIGZpZWxkPy50eXBlLCBkb21haW5dKTtcblxuICAgIGNvbnN0IGNvbHVtblN0YXRzID0gZmllbGQ/LmZpbHRlclByb3BzPy5jb2x1bW5TdGF0cztcblxuICAgIGNvbnN0IGZpZWxkVmFsdWVBY2Nlc3NvciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkXG4gICAgICAgID8gaWR4ID0+IGRhdGFzZXQuZ2V0VmFsdWUoZmllbGQubmFtZSwgaWR4KVxuICAgICAgICA6IGlkeCA9PiBkYXRhc2V0LmRhdGFDb250YWluZXIucm93QXNBcnJheShpZHgpO1xuICAgIH0sIFtkYXRhc2V0LCBmaWVsZF0pO1xuXG4gICAgY29uc3Qgb3JkaW5hbERvbWFpbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgcmV0dXJuIGxheWVyLmNvbmZpZ1tsYXllci52aXN1YWxDaGFubmVsc1tjaGFubmVsS2V5XS5kb21haW5dIHx8IFtdO1xuICAgIH0sIFtjaGFubmVsS2V5LCBsYXllci5jb25maWcsIGxheWVyLnZpc3VhbENoYW5uZWxzXSk7XG5cbiAgICAvLyBhZ2dyZWdhdGVkQmlucyBzaG91bGQgYmUgdGhlIHJhdyBkYXRhXG4gICAgY29uc3QgYWxsQmlucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgaWYgKGZpZWxkPy50eXBlID09PSBBTExfRklFTERfVFlQRVMuc3RyaW5nKSB7XG4gICAgICAgIC8vIFVzZSBvcmRpbmFsIGJpbnMgZm9yIHN0cmluZyBjb2x1bW5zLCBhcyBkMyBjb3VsZCBwb3RlbnRpYWxseSBnZW5lcmF0ZSBpbnZhbGlkIG51bWVyaWMgYmlucywgYW5kIGNyYXNoXG4gICAgICAgIHJldHVybiBoaXN0b2dyYW1Gcm9tT3JkaW5hbChvcmRpbmFsRG9tYWluLCBkYXRhc2V0LmFsbEluZGV4ZXMsIGZpZWxkVmFsdWVBY2Nlc3Nvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZ2dyZWdhdGVkQmlucykge1xuICAgICAgICByZXR1cm4gaGlzdG9ncmFtRnJvbVZhbHVlcyhcbiAgICAgICAgICBPYmplY3QudmFsdWVzKGFnZ3JlZ2F0ZWRCaW5zKS5tYXAoYmluID0+IGJpbi5pKSxcbiAgICAgICAgICBISVNUT0dSQU1fQklOUyxcbiAgICAgICAgICBpZHggPT4gYWdncmVnYXRlZEJpbnNbaWR4XS52YWx1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbHVtblN0YXRzPy5iaW5zXG4gICAgICAgID8gY29sdW1uU3RhdHM/LmJpbnNcbiAgICAgICAgOiBoaXN0b2dyYW1Gcm9tVmFsdWVzKGRhdGFzZXQuYWxsSW5kZXhlcywgSElTVE9HUkFNX0JJTlMsIGZpZWxkVmFsdWVBY2Nlc3Nvcik7XG4gICAgfSwgW2FnZ3JlZ2F0ZWRCaW5zLCBjb2x1bW5TdGF0cywgZGF0YXNldCwgZmllbGRWYWx1ZUFjY2Vzc29yLCBmaWVsZD8udHlwZSwgb3JkaW5hbERvbWFpbl0pO1xuXG4gICAgY29uc3QgaGlzdG9ncmFtRG9tYWluID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0SGlzdG9ncmFtRG9tYWluKHthZ2dyZWdhdGVkQmlucywgY29sdW1uU3RhdHMsIGRhdGFzZXQsIGZpZWxkVmFsdWVBY2Nlc3Nvcn0pO1xuICAgIH0sIFtkYXRhc2V0LCBmaWVsZFZhbHVlQWNjZXNzb3IsIGFnZ3JlZ2F0ZWRCaW5zLCBjb2x1bW5TdGF0c10pO1xuXG4gICAgY29uc3QgaXNGaWx0ZXJlZCA9IGFnZ3JlZ2F0ZWRCaW5zXG4gICAgICA/IGZhbHNlXG4gICAgICA6IGRhdGFzZXQuZmlsdGVyZWRJbmRleEZvckRvbWFpbi5sZW5ndGggIT09IGRhdGFzZXQuYWxsSW5kZXhlcy5sZW5ndGg7XG5cbiAgICAvLyBnZXQgZmlsdGVyZWRCaW5zIChub3QgYXBwbHkgdG8gYWdncmVnYXRlIGxheWVyKVxuICAgIGNvbnN0IGZpbHRlcmVkQmlucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgaWYgKCFpc0ZpbHRlcmVkKSB7XG4gICAgICAgIHJldHVybiBhbGxCaW5zO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkPy50eXBlID09PSBBTExfRklFTERfVFlQRVMuc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBoaXN0b2dyYW1Gcm9tT3JkaW5hbChcbiAgICAgICAgICBvcmRpbmFsRG9tYWluIGFzIGFueSxcbiAgICAgICAgICBkYXRhc2V0LmZpbHRlcmVkSW5kZXhGb3JEb21haW4sXG4gICAgICAgICAgZmllbGRWYWx1ZUFjY2Vzc29yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBudW1lcmljIHRocmVzaG9sZHNcbiAgICAgIGNvbnN0IGZpbHRlckVtcHR5QmlucyA9IGZhbHNlO1xuICAgICAgY29uc3QgdGhyZXNob2xkcyA9IGFsbEJpbnMubWFwKGIgPT4gYi54MCk7XG4gICAgICByZXR1cm4gaGlzdG9ncmFtRnJvbVRocmVzaG9sZChcbiAgICAgICAgdGhyZXNob2xkcyxcbiAgICAgICAgZGF0YXNldC5maWx0ZXJlZEluZGV4Rm9yRG9tYWluLFxuICAgICAgICBmaWVsZFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIGZpbHRlckVtcHR5Qmluc1xuICAgICAgKTtcbiAgICB9LCBbZGF0YXNldCwgZmllbGRWYWx1ZUFjY2Vzc29yLCBhbGxCaW5zLCBpc0ZpbHRlcmVkLCBmaWVsZD8udHlwZSwgb3JkaW5hbERvbWFpbl0pO1xuXG4gICAgY29uc3Qgb25TZWxlY3RTY2FsZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgdmFsID0+IHtcbiAgICAgICAgLy8gaGlnaGxpZ2h0IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU2NhbGUgPSBnZXRPcHRpb25WYWx1ZSh2YWwpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRTY2FsZSA9PT0gU0NBTEVfVFlQRVMuY3VzdG9tIHx8IHNlbGVjdGVkU2NhbGUgPT09IFNDQUxFX1RZUEVTLmN1c3RvbU9yZGluYWwpIHtcbiAgICAgICAgICBjb25zdCBjdXN0b21QYWxldHRlID0gaW5pdEN1c3RvbVBhbGV0dGVCeUN1c3RvbVNjYWxlKHtcbiAgICAgICAgICAgIHNjYWxlOiBzZWxlY3RlZFNjYWxlLFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICByYW5nZSxcbiAgICAgICAgICAgIGNvbG9yQnJlYWtzLFxuICAgICAgICAgICAgLi4uKHNlbGVjdGVkU2NhbGUgPT09IFNDQUxFX1RZUEVTLmN1c3RvbU9yZGluYWwgPyB7b3JkaW5hbERvbWFpbn0gOiB7fSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRDb2xvclVJKHtcbiAgICAgICAgICAgIHNob3dDb2xvckNoYXJ0OiB0cnVlLFxuICAgICAgICAgICAgY29sb3JSYW5nZUNvbmZpZzoge1xuICAgICAgICAgICAgICBjdXN0b21CcmVha3M6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXN0b21QYWxldHRlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gc3RvcmUgcHJldmlvdXMgc2VsZWN0aW9uIGZvciBjYW5jZWwsIHRoZW4gcHJldmlldyBjdXN0b20gb24gdGhlIG1hcFxuICAgICAgICAgIGlmICghcHJldlNlbGVjdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBwcmV2U2VsZWN0aW9uUmVmLmN1cnJlbnQgPSB7c2NhbGU6IHNjYWxlVHlwZSwgcmFuZ2V9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBvblNlbGVjdChzZWxlY3RlZFNjYWxlLCBjdXN0b21QYWxldHRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNDb2xvck1hcChyYW5nZSkpIHtcbiAgICAgICAgICAvLyBub3QgY3VzdG9tXG4gICAgICAgICAgLy8gcmVtb3ZlIGNvbG9yTWFwXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgY29uc3Qge2NvbG9yTWFwOiBfLCAuLi5uZXdSYW5nZX0gPSByYW5nZTtcbiAgICAgICAgICAvLyByZXNldCBjb2xvclVJIGJlZm9yZSBjaGFuZ2luZyB0aGUgc2NhbGVcbiAgICAgICAgICBzZXRDb2xvclVJKHtcbiAgICAgICAgICAgIHNob3dDb2xvckNoYXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yUmFuZ2VDb25maWc6IHtcbiAgICAgICAgICAgICAgY3VzdG9tQnJlYWtzOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9uU2VsZWN0KHNlbGVjdGVkU2NhbGUsIG5ld1JhbmdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZXNldCBjb2xvclVJIGJlZm9yZSBjaGFuZ2luZyB0aGUgc2NhbGVcbiAgICAgICAgICBzZXRDb2xvclVJKHtcbiAgICAgICAgICAgIHNob3dDb2xvckNoYXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yUmFuZ2VDb25maWc6IHtcbiAgICAgICAgICAgICAgY3VzdG9tQnJlYWtzOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9uU2VsZWN0KHNlbGVjdGVkU2NhbGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2ZpZWxkLCBzZXRDb2xvclVJLCBvblNlbGVjdCwgcmFuZ2UsIGdldE9wdGlvblZhbHVlLCBjb2xvckJyZWFrcywgb3JkaW5hbERvbWFpbiwgc2NhbGVUeXBlXVxuICAgICk7XG5cbiAgICBjb25zdCBvbkFwcGx5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgLy8gY2hhbmdlIHNjYWxlIHR5cGUgb25seSBpZiBjb25maXJtZWRcbiAgICAgIGNvbnN0IG5leHRTY2FsZVR5cGUgPSBjb2xvclVJQ29uZmlnPy5jdXN0b21QYWxldHRlPy50eXBlIHx8IHNjYWxlVHlwZTtcbiAgICAgIG9uU2VsZWN0KG5leHRTY2FsZVR5cGUsIGNvbG9yVUlDb25maWcuY3VzdG9tUGFsZXR0ZSk7XG4gICAgICBoaWRlVGlwcHkodGlwcHlJbnN0YW5jZSk7XG4gICAgICBwcmV2U2VsZWN0aW9uUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH0sIFtvblNlbGVjdCwgY29sb3JVSUNvbmZpZy5jdXN0b21QYWxldHRlLCB0aXBweUluc3RhbmNlLCBzY2FsZVR5cGVdKTtcblxuICAgIGNvbnN0IG9uQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgLy8gcmVzdG9yZSBwcmV2aW91cyBzZWxlY3Rpb24gaWYgYW55XG4gICAgICBpZiAocHJldlNlbGVjdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHtzY2FsZTogcHJldlNjYWxlLCByYW5nZTogcHJldlJhbmdlfSA9IHByZXZTZWxlY3Rpb25SZWYuY3VycmVudDtcbiAgICAgICAgb25TZWxlY3QocHJldlNjYWxlLCBwcmV2UmFuZ2UpO1xuICAgICAgfVxuICAgICAgaGlkZVRpcHB5KHRpcHB5SW5zdGFuY2UpO1xuICAgICAgcHJldlNlbGVjdGlvblJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9LCBbdGlwcHlJbnN0YW5jZSwgb25TZWxlY3RdKTtcblxuICAgIGNvbnN0IGlzQ3VzdG9tQnJlYWtzID1cbiAgICAgIHNjYWxlVHlwZSA9PT0gU0NBTEVfVFlQRVMuY3VzdG9tIHx8IHNjYWxlVHlwZSA9PT0gU0NBTEVfVFlQRVMuY3VzdG9tT3JkaW5hbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25Qcm9wQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIHNldENvbG9yVUksXG4gICAgICAgICAgY29sb3JGaWVsZDogZmllbGQsXG4gICAgICAgICAgZGF0YXNldCxcbiAgICAgICAgICBjb2xvclVJQ29uZmlnLFxuICAgICAgICAgIGNvbG9yQnJlYWtzLFxuICAgICAgICAgIGlzQ3VzdG9tQnJlYWtzLFxuICAgICAgICAgIGFsbEJpbnMsXG4gICAgICAgICAgZmlsdGVyZWRCaW5zLFxuICAgICAgICAgIGlzRmlsdGVyZWQsXG4gICAgICAgICAgaGlzdG9ncmFtRG9tYWluLFxuICAgICAgICAgIG9yZGluYWxEb21haW4sXG4gICAgICAgICAgb25TY2FsZUNoYW5nZTogb25TZWxlY3QsXG4gICAgICAgICAgb25BcHBseSxcbiAgICAgICAgICBvbkNhbmNlbFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8U3R5bGVkQ29sb3JTY2FsZVNlbGVjdG9yPlxuICAgICAgICAgIDxMYXp5VGlwcHlcbiAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b20tc3RhcnRcIlxuICAgICAgICAgICAgYXBwZW5kVG89XCJwYXJlbnRcIlxuICAgICAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgICAgICBoaWRlT25DbGljaz17IWlzRWRpdGluZ0NvbG9yQnJlYWtzfVxuICAgICAgICAgICAgb25DcmVhdGU9e3NldFRpcHB5SW5zdGFuY2V9XG4gICAgICAgICAgICBwb3BwZXJPcHRpb25zPXtQT1BQRVJfT1BUSU9OU31cbiAgICAgICAgICAgIHJlbmRlcj17YXR0cnMgPT4gKFxuICAgICAgICAgICAgICA8RHJvcGRvd25XcmFwcGVyIHsuLi5hdHRyc30+XG4gICAgICAgICAgICAgICAgey8qIEB0cy1pZ25vcmUqL31cbiAgICAgICAgICAgICAgICB7IWRyb3Bkb3duU2VsZWN0UHJvcHMuZGlzYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPFR5cGVhaGVhZFxuICAgICAgICAgICAgICAgICAgICB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17Z2V0T3B0aW9uVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e29uU2VsZWN0U2NhbGV9XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUxpc3RDb21wb25lbnQ9e0NvbG9yU2NhbGVTZWxlY3REcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHNob3dPcHRpb25zV2hlbkVtcHR5XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1xuICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdPcHRpb24gPyBbcGVuZGluZ09wdGlvbl0gOiBkcm9wZG93blNlbGVjdFByb3BzLnNlbGVjdGVkSXRlbXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duV3JhcHBlcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgey8qIEB0cy1pZ25vcmUqL31cbiAgICAgICAgICAgICAgPERyb3Bkb3duU2VsZWN0XG4gICAgICAgICAgICAgICAgey4uLmRyb3Bkb3duU2VsZWN0UHJvcHN9XG4gICAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cGVuZGluZ09wdGlvbiB8fCBkcm9wZG93blNlbGVjdFByb3BzLnNlbGVjdGVkSXRlbXNbMF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xhenlUaXBweT5cbiAgICAgICAgPC9TdHlsZWRDb2xvclNjYWxlU2VsZWN0b3I+XG4gICAgICA8L0Ryb3Bkb3duUHJvcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIENvbG9yU2NhbGVTZWxlY3Rvcjtcbn1cbmV4cG9ydCBkZWZhdWx0IENvbG9yU2NhbGVTZWxlY3RvckZhY3Rvcnk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxpQkFBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBRUEsSUFBQUcsSUFBQSxHQUFBSCxPQUFBO0FBSUEsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBV0EsSUFBQUssaUJBQUEsR0FBQUgsc0JBQUEsQ0FBQUYsT0FBQTtBQUVBLElBQUFNLGVBQUEsR0FBQUosc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFPLFNBQUEsR0FBQUwsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFRLGFBQUEsR0FBQU4sc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFTLFVBQUEsR0FBQVAsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFVLFVBQUEsR0FBQVIsc0JBQUEsQ0FBQUYsT0FBQTtBQUE2RCxJQUFBVyxTQUFBO0VBQUFDLFVBQUE7QUFBQSxJQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBM0I3RDtBQUNBO0FBQUEsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFuQix3QkFBQW1CLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxn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