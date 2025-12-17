"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EditableColorRange = exports.DividerLine = exports.DeleteColorStop = exports.CustomPaletteInput = exports.ColorSwatch = exports.ColorPaletteItem = exports.ColorPaletteInput = exports.CategoricalSelector = exports.CategoricalCustomPaletteInput = exports.BottomAction = exports.AddColorStop = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/node_modules/react"));
var _uniq = _interopRequireDefault(require("lodash/uniq"));
var _core = require("@dnd-kit/core");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _styledComponents = _interopRequireWildcard(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/node_modules/styled-components"));
var _portaled = _interopRequireDefault(require("../../common/portaled"));
var _styledComponents2 = require("../../common/styled-components");
var _typeahead = _interopRequireDefault(require("../../common/item-selector/typeahead"));
var _chickletedInput = _interopRequireDefault(require("../../common/item-selector/chickleted-input"));
var _dropdownList = _interopRequireWildcard(require("../../common/item-selector/dropdown-list"));
var _src = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/common-utils/src");
var _src2 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/constants/src");
var _src3 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl/src/utils/src");
var _icons = require("../../common/icons");
var _customPicker = _interopRequireDefault(require("./custom-picker"));
var _excluded = ["className", "children"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * EditableColorRange
 */

var defaultActionIcons = {
  "delete": _icons.Trash,
  sort: _icons.VertDots,
  add: _icons.Add
};
var dragHandleActive = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .layer__drag-handle {\n    color: ", ";\n    opacity: 1;\n    cursor: move;\n  }\n"])), function (props) {
  return props.theme.textColorHl;
});
var ColorPaletteItem = exports.ColorPaletteItem = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  z-index: ", ";\n  justify-content: space-between;\n\n  .custom-palette-input__left {\n    display: flex;\n    align-items: center;\n  }\n\n  .custom-palette-input__right {\n    display: flex;\n    align-items: center;\n    padding-right: 6px;\n  }\n\n  &:not(.sorting):not(.disabled) {\n    &:hover {\n      background-color: ", ";\n      ", ";\n    }\n  }\n\n  &.sorting-colors {\n    background-color: ", ";\n    ", ";\n  }\n"])), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive);
var StyledDragHandle = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n"])));
var StyledAction = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  svg {\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  margin-left: 4px;\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.subtextColorActive;
});
var DividerLine = exports.DividerLine = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  height: 1px;\n  background-color: ", ";\n  margin-top: 8px;\n"])), function (props) {
  return props.theme.dropdownListBorderTop;
});
var ColorSwatch = exports.ColorSwatch = _styledComponents["default"].div.attrs({
  className: 'custom-palette__swatch'
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  width: 32px;\n  height: 18px;\n  display: inline-block;\n  &:hover {\n    box-shadow: ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.color;
}, function (props) {
  return props.theme.boxShadow;
});
var StyledButtonContainer = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 11px;\n  display: flex;\n  direction: rtl;\n  padding: 0 12px;\n"])));
var StyledAddStepContainer = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 11px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 12px;\n  color: ", ";\n  .addcolor {\n    margin-top: 4px;\n  }\n"])), function (props) {
  return props.theme.inputColor;
});
var StyledInput = (0, _styledComponents["default"])(_styledComponents2.Input).withConfig({
  shouldForwardProp: _styledComponents2.shouldForwardProp
})(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  text-align: ", ";\n  pointer-events: ", ";\n"])), function (props) {
  var _props$width;
  return (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : '100%';
}, function (props) {
  var _props$textAlign;
  return (_props$textAlign = props.textAlign) !== null && _props$textAlign !== void 0 ? _props$textAlign : 'end';
}, function (props) {
  return props.disabled ? 'none' : 'all';
});
var InputText = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _styledComponents2.shouldForwardProp
})(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  background-color: transparent;\n  border-color: transparent;\n  width: ", ";\n  text-align: ", ";\n\n  &:hover {\n    cursor: auto;\n    background-color: transparent;\n    border-color: transparent;\n  }\n"])), function (props) {
  return props.theme.input;
}, function (props) {
  var _props$width2;
  return (_props$width2 = props.width) !== null && _props$width2 !== void 0 ? _props$width2 : '100%';
}, function (props) {
  var _props$textAlign2;
  return (_props$textAlign2 = props.textAlign) !== null && _props$textAlign2 !== void 0 ? _props$textAlign2 : 'end';
});
var SortableItem = function SortableItem(_ref) {
  var id = _ref.id,
    children = _ref.children,
    isSorting = _ref.isSorting;
  var _useSortable = (0, _sortable.useSortable)({
      id: id
    }),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition,
    isDragging = _useSortable.isDragging;
  var style = {
    transform: _utilities.CSS.Transform.toString(transform),
    transition: transition,
    zIndex: isDragging ? 1 : 0
  };
  return /*#__PURE__*/_react["default"].createElement(ColorPaletteItem, (0, _extends2["default"])({
    ref: setNodeRef,
    style: style,
    className: (0, _classnames["default"])('custom-palette__sortable-items', {
      sorting: isSorting || isDragging
    })
  }, attributes), children(listeners));
};
var WrappedSortableContainer = function WrappedSortableContainer(_ref2) {
  var children = _ref2.children,
    className = _ref2.className,
    onSortEnd = _ref2.onSortEnd,
    onSortStart = _ref2.onSortStart;
  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.PointerSensor), (0, _core.useSensor)(_core.KeyboardSensor));
  return /*#__PURE__*/_react["default"].createElement(_core.DndContext, {
    sensors: sensors,
    collisionDetection: _core.closestCenter,
    onDragEnd: onSortEnd,
    onDragStart: onSortStart
  }, /*#__PURE__*/_react["default"].createElement(_sortable.SortableContext, {
    items: _react["default"].Children.map(children, function (_, index) {
      return "".concat(index);
    }) || [],
    strategy: _sortable.verticalListSortingStrategy
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, children)));
};
var DragHandle = function DragHandle(_ref3) {
  var className = _ref3.className,
    children = _ref3.children,
    listeners = (0, _objectWithoutProperties2["default"])(_ref3, _excluded);
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, (0, _extends2["default"])({
    className: className
  }, listeners), children);
};
var ColorPaletteInput = exports.ColorPaletteInput = function ColorPaletteInput(_ref4) {
  var value = _ref4.value,
    onChange = _ref4.onChange,
    id = _ref4.id,
    width = _ref4.width,
    textAlign = _ref4.textAlign,
    editable = _ref4.editable;
  var _useState = (0, _react.useState)(value),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    stateValue = _useState2[0],
    setValue = _useState2[1];
  var inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setValue(value);
  }, [value]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    switch (e.keyCode) {
      case _src2.KeyEvent.DOM_VK_ENTER:
      case _src2.KeyEvent.DOM_VK_RETURN:
        onChange(stateValue);
        if (inputRef !== null) {
          // @ts-ignore
          inputRef === null || inputRef === void 0 || inputRef.current.blur();
        }
        break;
      default:
        break;
    }
  }, [onChange, stateValue]);
  var _onChange = (0, _react.useCallback)(function (e) {
    return setValue(e.target.value);
  }, [setValue]);
  var onBlur = (0, _react.useCallback)(function () {
    return onChange(stateValue);
  }, [onChange, stateValue]);
  return editable ? /*#__PURE__*/_react["default"].createElement(StyledInput, {
    ref: inputRef,
    className: "custom-palette-hex__input",
    value: stateValue,
    onChange: _onChange,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    id: id,
    width: width,
    textAlign: textAlign,
    secondary: true
  }) : /*#__PURE__*/_react["default"].createElement(InputText, {
    className: "custom-palette-hex__input__text",
    width: width,
    textAlign: textAlign
  }, value);
};
var Dash = _styledComponents["default"].div(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 6px;\n  border-top: 1px solid ", ";\n  margin-left: 4px;\n  margin-right: 4px;\n"])), function (props) {
  return props.theme.subtextColor;
});
var StyledRangeInput = _styledComponents["default"].div(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-left: 12px;\n"])));
var StyledColorHexInput = _styledComponents["default"].div(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n"])));
var EditableColorRange = exports.EditableColorRange = function EditableColorRange(_ref5) {
  var item = _ref5.item,
    isLast = _ref5.isLast,
    index = _ref5.index,
    editColorMap = _ref5.editColorMap,
    editable = _ref5.editable;
  var hasInputs = Array.isArray(item === null || item === void 0 ? void 0 : item.inputs);
  var leftInput = hasInputs ? item.inputs[0] : undefined;
  var rightInput = hasInputs ? item.inputs[1] : undefined;
  var noMinBound = !Number.isFinite(leftInput) && index === 0;
  var noMaxBound = !Number.isFinite(rightInput) && isLast;
  var onChangeLeft = (0, _react.useCallback)(function (val) {
    if (editable && editColorMap) editColorMap(parseFloat(val), index - 1);
  }, [editColorMap, index, editable]);
  var onChangeRight = (0, _react.useCallback)(function (val) {
    if (editable && editColorMap) editColorMap(parseFloat(val), index);
  }, [editColorMap, index, editable]);
  return /*#__PURE__*/_react["default"].createElement(StyledRangeInput, null, /*#__PURE__*/_react["default"].createElement(ColorPaletteInput, {
    value: noMinBound ? 'Less' : String(leftInput !== null && leftInput !== void 0 ? leftInput : ''),
    id: "color-palette-input-".concat(index, "-left"),
    width: "50px",
    textAlign: "end",
    editable: noMinBound ? false : editable,
    onChange: onChangeLeft
  }), /*#__PURE__*/_react["default"].createElement(Dash, null), /*#__PURE__*/_react["default"].createElement(ColorPaletteInput, {
    value: noMaxBound ? 'More' : String(rightInput !== null && rightInput !== void 0 ? rightInput : ''),
    id: "color-palette-input-".concat(index, "-right"),
    width: "50px",
    textAlign: "end",
    onChange: onChangeRight,
    editable: noMaxBound ? false : editable
  }));
};
var AddColorStop = exports.AddColorStop = function AddColorStop(_ref6) {
  var onColorAdd = _ref6.onColorAdd,
    IconComponent = _ref6.IconComponent;
  return /*#__PURE__*/_react["default"].createElement(StyledAction, {
    onClick: onColorAdd,
    className: "addcolor"
  }, /*#__PURE__*/_react["default"].createElement(IconComponent, {
    height: "14px"
  }));
};
var DeleteColorStop = exports.DeleteColorStop = function DeleteColorStop(_ref7) {
  var onColorDelete = _ref7.onColorDelete,
    IconComponent = _ref7.IconComponent;
  return /*#__PURE__*/_react["default"].createElement(StyledAction, {
    onClick: onColorDelete,
    className: "trashbin"
  }, /*#__PURE__*/_react["default"].createElement(IconComponent, {
    height: "14px"
  }));
};
var CustomPaletteInput = exports.CustomPaletteInput = function CustomPaletteInput(_ref8) {
  var index = _ref8.index,
    isSorting = _ref8.isSorting,
    color = _ref8.color,
    colorBreaks = _ref8.colorBreaks,
    inputColorHex = _ref8.inputColorHex,
    editColorMapValue = _ref8.editColorMapValue,
    _ref8$actionIcons = _ref8.actionIcons,
    actionIcons = _ref8$actionIcons === void 0 ? defaultActionIcons : _ref8$actionIcons,
    disableAppend = _ref8.disableAppend,
    disableDelete = _ref8.disableDelete,
    onDelete = _ref8.onDelete,
    onAdd = _ref8.onAdd,
    onToggleSketcher = _ref8.onToggleSketcher;
  var onClickSwtach = (0, _react.useCallback)(function () {
    return onToggleSketcher(index);
  }, [onToggleSketcher, index]);
  var onColorInput = (0, _react.useCallback)(function (v) {
    return inputColorHex(index, v);
  }, [inputColorHex, index]);
  var onColorDelete = (0, _react.useCallback)(function () {
    return onDelete(index);
  }, [onDelete, index]);
  var onColorAdd = (0, _react.useCallback)(function () {
    return onAdd(index);
  }, [onAdd, index]);
  var showHexInput = !colorBreaks;
  return /*#__PURE__*/_react["default"].createElement(SortableItem, {
    id: "".concat(index),
    isSorting: isSorting
  }, function (listeners) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "custom-palette-input__left"
    }, /*#__PURE__*/_react["default"].createElement(DragHandle, (0, _extends2["default"])({
      className: "layer__drag-handle"
    }, listeners), /*#__PURE__*/_react["default"].createElement(actionIcons.sort, {
      height: "20px"
    })), /*#__PURE__*/_react["default"].createElement(ColorSwatch, {
      color: color,
      onClick: onClickSwtach
    }), showHexInput ? /*#__PURE__*/_react["default"].createElement(StyledColorHexInput, null, /*#__PURE__*/_react["default"].createElement(ColorPaletteInput, {
      value: color.toUpperCase(),
      onChange: onColorInput,
      id: "input-layer-label-".concat(index),
      editable: true,
      textAlign: "left",
      width: "70px"
    })) : null, colorBreaks && index < colorBreaks.length && (0, _src3.isNumericColorBreaks)(colorBreaks) ? /*#__PURE__*/_react["default"].createElement(EditableColorRange, {
      item: colorBreaks[index],
      isLast: index === colorBreaks.length - 1,
      index: index,
      editColorMap: editColorMapValue,
      editable: true
    }) : null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "custom-palette-input__right"
    }, !disableAppend ? /*#__PURE__*/_react["default"].createElement(AddColorStop, {
      onColorAdd: onColorAdd,
      IconComponent: actionIcons.add
    }) : null, !disableDelete ? /*#__PURE__*/_react["default"].createElement(DeleteColorStop, {
      onColorDelete: onColorDelete,
      IconComponent: actionIcons["delete"]
    }) : null));
  });
};
var StyledCategoricalValuePickerWrapper = _styledComponents["default"].div.attrs({
  className: 'categorical-value-picker'
})(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 150px;\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  column-gap: 8px;\n  align-items: center;\n  cursor: pointer;\n"])), function (props) {
  return props.theme.inputColor;
});
var StyledCategoricalValuePicker = _styledComponents["default"].div(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2["default"])(["\n  width: fit-content;\n  font-size: 11px;\n  border-bottom: ", ";\n  cursor: pointer;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 100px;\n"])), function (props) {
  return props.noBorder ? '' : '1px dashed';
});
var DropdownValuesWrapper = _styledComponents["default"].div(_templateObject16 || (_templateObject16 = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: ", ";\n  width: ", "px;\n"])), function (props) {
  return props.theme.dropdownWrapperZ;
}, function (props) {
  return props.width;
});
var SelectedValuesWrapper = (0, _styledComponents["default"])(DropdownValuesWrapper)(_templateObject17 || (_templateObject17 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  max-height: ", "px;\n  overflow: auto;\n\n  .custom-palette-chickleted-input {\n    padding: 8px;\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.theme.dropdownWrapperZ;
});
var StyledDropdownHeader = _styledComponents["default"].div(_templateObject18 || (_templateObject18 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: ", ";\n  padding: 0 8px;\n  font-size: 10px;\n\n  .button {\n    margin: 0;\n    padding: 0;\n    width: fit-content;\n  }\n"])), function (props) {
  return props.theme.inputColor;
});
var StyledTooltipContent = _styledComponents["default"].div(_templateObject19 || (_templateObject19 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 8px;\n  width: 150px;\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n\n  div {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"])));
var NUMBER_VALUES_IN_TOOLTIP = 10;
var CategoricalSelectorContext = _react["default"].createContext({
  onSelectRest: function onSelectRest() {
    return null;
  },
  onReset: function onReset() {
    return null;
  }
});

// Categorical values dropdownlist:
// extending DropdownList and adding 'Select the Rest' and 'Reset' buttons
var ModifiedDropdownList = /*#__PURE__*/function (_DropdownList) {
  function ModifiedDropdownList(props) {
    (0, _classCallCheck2["default"])(this, ModifiedDropdownList);
    return _callSuper(this, ModifiedDropdownList, [props]);
  }
  (0, _inherits2["default"])(ModifiedDropdownList, _DropdownList);
  return (0, _createClass2["default"])(ModifiedDropdownList, [{
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(CategoricalSelectorContext.Consumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledDropdownHeader, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          link: true,
          size: "smal",
          onClick: context.onSelectRest
        }, "Select the Rest"), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          link: true,
          size: "smal",
          onClick: context.onReset
        }, "Reset")), /*#__PURE__*/_react["default"].createElement(DividerLine, null), /*#__PURE__*/_react["default"].createElement(_dropdownList["default"], _this.props));
      }));
    }
  }]);
}(_dropdownList["default"]);
// Categorical values selector for editing categorical values
var CategoricalSelector = exports.CategoricalSelector = function CategoricalSelector(_ref9) {
  var index = _ref9.index,
    selectedValues = _ref9.selectedValues,
    allValues = _ref9.allValues,
    addColorMapValue = _ref9.addColorMapValue,
    removeColorMapValue = _ref9.removeColorMapValue,
    resetColorMapValue = _ref9.resetColorMapValue,
    selectRestColorMapValue = _ref9.selectRestColorMapValue,
    _ref9$editable = _ref9.editable,
    editable = _ref9$editable === void 0 ? true : _ref9$editable;
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    showTypeahead = _useState4[0],
    setShowTypeahead = _useState4[1];
  var onOptionSelected = (0, _react.useCallback)(function (value) {
    var previousSelected = (0, _src.toArray)(selectedValues);
    var items = (0, _uniq["default"])(previousSelected.concat((0, _src.toArray)(value)));
    addColorMapValue === null || addColorMapValue === void 0 || addColorMapValue(items, index);
  }, [selectedValues, index, addColorMapValue]);
  var onOpenDropdown = (0, _react.useCallback)(function () {
    setShowTypeahead(true);
  }, []);
  var onCloseDropdown = (0, _react.useCallback)(function () {
    setShowTypeahead(false);
  }, []);
  var onRemoveItem = (0, _react.useCallback)(function (value) {
    removeColorMapValue === null || removeColorMapValue === void 0 || removeColorMapValue(value, index);
  }, [index, removeColorMapValue]);
  var onReset = (0, _react.useCallback)(function () {
    resetColorMapValue === null || resetColorMapValue === void 0 || resetColorMapValue(index);
    setShowTypeahead(false);
    return null;
  }, [resetColorMapValue, index]);
  var onSelectRest = (0, _react.useCallback)(function () {
    selectRestColorMapValue === null || selectRestColorMapValue === void 0 || selectRestColorMapValue(index);
    setShowTypeahead(false);
    return null;
  }, [selectRestColorMapValue, index]);
  return /*#__PURE__*/_react["default"].createElement(StyledCategoricalValuePickerWrapper, null, editable && /*#__PURE__*/_react["default"].createElement(_icons.Add, {
    height: "12px",
    onClick: onOpenDropdown
  }), /*#__PURE__*/_react["default"].createElement(StyledCategoricalValuePicker, {
    noBorder: selectedValues.length === 0 || !editable,
    onClick: onOpenDropdown,
    "data-tip": true,
    "data-for": "category-values-".concat(index)
  }, selectedValues.length === 0 ? 'Add Value' : selectedValues.length === 1 ? selectedValues[0] : "".concat(selectedValues.length, " selected"), selectedValues.length > 1 && /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "category-values-".concat(index),
    place: "top",
    interactive: true
  }, /*#__PURE__*/_react["default"].createElement(StyledTooltipContent, null, selectedValues.slice(0, NUMBER_VALUES_IN_TOOLTIP).map(function (value, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i
    }, value);
  }), selectedValues.length > NUMBER_VALUES_IN_TOOLTIP && /*#__PURE__*/_react["default"].createElement("div", null, "...")))), editable && /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
    left: 0,
    top: 0,
    isOpened: showTypeahead,
    onClose: onCloseDropdown
  }, selectedValues.length > 1 && /*#__PURE__*/_react["default"].createElement(SelectedValuesWrapper, {
    width: 250,
    height: 200
  }, /*#__PURE__*/_react["default"].createElement(_chickletedInput["default"], {
    className: 'custom-palette-chickleted-input',
    selectedItems: selectedValues,
    placeholder: '',
    removeItem: onRemoveItem,
    onClick: function onClick() {
      return null;
    },
    CustomChickletComponent: null
  })), /*#__PURE__*/_react["default"].createElement(DropdownValuesWrapper, {
    width: 250
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement(CategoricalSelectorContext.Provider, {
    value: {
      onReset: onReset,
      onSelectRest: onSelectRest
    }
  }, /*#__PURE__*/_react["default"].createElement(_typeahead["default"], {
    customClasses: {
      results: 'list-selector',
      input: 'typeahead__input',
      listItem: 'list__item',
      listAnchor: 'list__item__anchor'
    },
    options: allValues
    // add safe string casting for the Typeahead, so fuzzy search never receives non-strings, preventing the toLowerCase crash
    ,
    displayOption: function displayOption(o) {
      return String(o !== null && o !== void 0 ? o : '');
    },
    filterOption: function filterOption(input, o) {
      return String(o !== null && o !== void 0 ? o : '').includes(String(input !== null && input !== void 0 ? input : ''));
    },
    placeholder: 'Search',
    onOptionSelected: onOptionSelected,
    customListComponent: ModifiedDropdownList,
    customListItemComponent: _dropdownList.ListItem,
    searchable: true,
    showOptionsWhenEmpty: true,
    selectedItems: selectedValues
  }))))));
};
var CategoricalCustomPaletteInput = exports.CategoricalCustomPaletteInput = function CategoricalCustomPaletteInput(_ref10) {
  var index = _ref10.index,
    isSorting = _ref10.isSorting,
    color = _ref10.color,
    colorMap = _ref10.colorMap,
    _ref10$actionIcons = _ref10.actionIcons,
    actionIcons = _ref10$actionIcons === void 0 ? defaultActionIcons : _ref10$actionIcons,
    onDelete = _ref10.onDelete,
    disableDelete = _ref10.disableDelete,
    onToggleSketcher = _ref10.onToggleSketcher,
    addColorMapValue = _ref10.addColorMapValue,
    removeColorMapValue = _ref10.removeColorMapValue,
    resetColorMapValue = _ref10.resetColorMapValue,
    selectRestColorMapValue = _ref10.selectRestColorMapValue,
    allValues = _ref10.allValues;
  var selectedValues = (0, _react.useMemo)(function () {
    if (!colorMap || !colorMap[index]) return [];
    var value = colorMap[index][0];
    var values = Array.isArray(value) ? value : value !== null ? [value] : [];
    return values;
  }, [colorMap, index]);
  var onClickSwtach = (0, _react.useCallback)(function () {
    return onToggleSketcher(index);
  }, [onToggleSketcher, index]);
  var onColorDelete = (0, _react.useCallback)(function () {
    return onDelete(index);
  }, [onDelete, index]);
  return /*#__PURE__*/_react["default"].createElement(SortableItem, {
    id: "".concat(index),
    isSorting: isSorting
  }, function (listeners) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "custom-palette-input__left"
    }, /*#__PURE__*/_react["default"].createElement(DragHandle, (0, _extends2["default"])({
      className: "layer__drag-handle"
    }, listeners), /*#__PURE__*/_react["default"].createElement(actionIcons.sort, {
      height: "20px"
    })), /*#__PURE__*/_react["default"].createElement(ColorSwatch, {
      color: color,
      onClick: onClickSwtach
    }), colorMap && colorMap[index] && /*#__PURE__*/_react["default"].createElement(CategoricalSelector, {
      selectedValues: selectedValues,
      allValues: allValues,
      addColorMapValue: addColorMapValue,
      removeColorMapValue: removeColorMapValue,
      resetColorMapValue: resetColorMapValue,
      selectRestColorMapValue: selectRestColorMapValue,
      index: index
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "custom-palette-input__right"
    }, !disableDelete ? /*#__PURE__*/_react["default"].createElement(DeleteColorStop, {
      onColorDelete: onColorDelete,
      IconComponent: actionIcons["delete"]
    }) : null));
  });
};
var BottomAction = exports.BottomAction = function BottomAction(_ref11) {
  var onCancel = _ref11.onCancel,
    onConfirm = _ref11.onConfirm;
  return /*#__PURE__*/_react["default"].createElement(StyledButtonContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    className: "confirm-apply__button",
    small: true,
    onClick: onConfirm
  }, "Confirm"), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onCancel
  }, "Cancel"));
};
var StyledCustomPalette = _styledComponents["default"].div.attrs({
  className: 'custom-palette'
})(_templateObject20 || (_templateObject20 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 8px;\n"])));
function CustomPaletteFactory() {
  var CustomPalette = function CustomPalette(_ref12) {
    var ordinalDomain = _ref12.ordinalDomain,
      customPalette = _ref12.customPalette,
      setColorPaletteUI = _ref12.setColorPaletteUI,
      showSketcher = _ref12.showSketcher,
      _ref12$actionIcons = _ref12.actionIcons,
      actionIcons = _ref12$actionIcons === void 0 ? defaultActionIcons : _ref12$actionIcons,
      onCancel = _ref12.onCancel,
      onApply = _ref12.onApply;
    var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isSorting = _useState6[0],
      setIsSorting = _useState6[1];
    var colors = customPalette.colors,
      colorMap = customPalette.colorMap;
    var colorBreaks = (0, _react.useMemo)(function () {
      return colorMap ? customPalette.type === 'custom' ? (0, _src3.colorMapToColorBreaks)(colorMap) : (0, _src3.colorMapToCategoricalColorBreaks)(colorMap) : null;
    }, [customPalette.type, colorMap]);
    var onPickerUpdate = (0, _react.useCallback)(function (color) {
      if (color && Number.isFinite(showSketcher)) {
        var newCustomPalette = (0, _src3.updateCustomPaletteColor)(customPalette, Number(showSketcher), color.hex);
        setColorPaletteUI({
          customPalette: newCustomPalette
        });
      }
    }, [customPalette, showSketcher, setColorPaletteUI]);
    var onToggleSketcher = (0, _react.useCallback)(function (val) {
      setColorPaletteUI({
        showSketcher: val
      });
    }, [setColorPaletteUI]);
    var onDelete = (0, _react.useCallback)(function (index) {
      var newCustomPalette = (0, _src3.removeCustomPaletteColor)(customPalette, index);
      setColorPaletteUI({
        customPalette: newCustomPalette
      });
    }, [customPalette, setColorPaletteUI]);
    var onAdd = (0, _react.useCallback)(function (index) {
      // add color at the end
      var newCustomPalette = (0, _src3.addCustomPaletteColor)(customPalette, index);
      setColorPaletteUI({
        customPalette: newCustomPalette
      });
    }, [customPalette, setColorPaletteUI]);
    var onAddCategoricalStep = (0, _react.useCallback)(function () {
      onAdd(colors.length - 1);
    }, [colors.length, onAdd]);
    var onSwatchClose = (0, _react.useCallback)(function () {
      onToggleSketcher(false);
    }, [onToggleSketcher]);
    var onConfirm = (0, _react.useCallback)(function (event) {
      event.stopPropagation();
      event.preventDefault();
      onCancel();
      onApply(event);
    }, [onCancel, onApply]);
    var onSortEnd = (0, _react.useCallback)(function (event) {
      var active = event.active,
        over = event.over;
      if (over && active.id !== over.id) {
        var oldIndex = colors.findIndex(function (_, index) {
          return "".concat(index) === active.id;
        });
        var newIndex = colors.findIndex(function (_, index) {
          return "".concat(index) === over.id;
        });
        var newCustomPalette = (0, _src3.sortCustomPaletteColor)(customPalette, oldIndex, newIndex);
        setColorPaletteUI({
          customPalette: newCustomPalette
        });
      }
      setIsSorting(false);
    }, [colors, customPalette, setIsSorting, setColorPaletteUI]);
    var onSortStart = (0, _react.useCallback)(function () {
      setIsSorting(true);
    }, [setIsSorting]);
    var inputColorHex = (0, _react.useCallback)(function (index, value) {
      var newCustomPalette = (0, _src3.updateCustomPaletteColor)(customPalette, index, value);
      // setColors(newColors);
      setColorPaletteUI({
        customPalette: newCustomPalette
      });
    }, [customPalette, setColorPaletteUI]);
    var editColorMapValue = (0, _react.useCallback)(function (value, index) {
      if (!customPalette.colorMap) {
        return;
      }
      var newColorMap = customPalette.colorMap.map(function (cm, i) {
        return i === index ? [value, cm[1]] : cm;
      });

      // sort the user inputs in case the break values are not ordered
      var breaks = newColorMap.map(function (cm) {
        return cm[0];
      }).slice(0, -1).sort(function (a, b) {
        return Number(a) - Number(b);
      }).concat(null);
      var sortedNewColorMap = newColorMap.map(function (cm, i) {
        return [breaks[i], cm[1]];
      });
      setColorPaletteUI({
        customPalette: _objectSpread(_objectSpread({}, customPalette), {}, {
          colorMap: sortedNewColorMap
        })
      });
    }, [setColorPaletteUI, customPalette]);

    // remove a selected category item from a color map
    var removeCategoricalColorMapValue = (0, _react.useCallback)(function (item, index) {
      if (!colorMap) {
        return;
      }
      setColorPaletteUI({
        customPalette: _objectSpread(_objectSpread({}, customPalette), {}, {
          colorMap: (0, _src3.removeCategoricalValueFromColorMap)(colorMap, item, index)
        })
      });
    }, [setColorPaletteUI, customPalette, colorMap]);

    // add selected categorical items to a color map
    var addCategoricalColorMapValue = (0, _react.useCallback)(function (items, index) {
      if (!colorMap) {
        return;
      }
      setColorPaletteUI({
        customPalette: _objectSpread(_objectSpread({}, customPalette), {}, {
          colorMap: (0, _src3.addCategoricalValuesToColorMap)(colorMap, items, index)
        })
      });
    }, [setColorPaletteUI, customPalette, colorMap]);

    // reset a color map
    var resetCategoricalColorMapValue = (0, _react.useCallback)(function (index) {
      if (!colorMap) {
        return;
      }
      setColorPaletteUI({
        customPalette: _objectSpread(_objectSpread({}, customPalette), {}, {
          colorMap: (0, _src3.resetCategoricalColorMapByIndex)(colorMap, index)
        })
      });
    }, [setColorPaletteUI, customPalette, colorMap]);

    // select the rest values for a color map
    var selectRestCategoricalColorMap = (0, _react.useCallback)(function (index) {
      if (!colorMap) {
        return;
      }
      setColorPaletteUI({
        customPalette: _objectSpread(_objectSpread({}, customPalette), {}, {
          colorMap: (0, _src3.selectRestCategoricalColorMapByIndex)(colorMap, index, ordinalDomain)
        })
      });
    }, [setColorPaletteUI, customPalette, colorMap, ordinalDomain]);
    return /*#__PURE__*/_react["default"].createElement(StyledCustomPalette, null, /*#__PURE__*/_react["default"].createElement(WrappedSortableContainer, {
      className: "custom-palette__sortable-container",
      onSortEnd: onSortEnd,
      onSortStart: onSortStart
    }, colors.map(function (color, index) {
      return customPalette.type === 'custom' ? /*#__PURE__*/_react["default"].createElement(CustomPaletteInput, {
        key: index,
        colorBreaks: colorBreaks,
        index: index,
        isSorting: isSorting,
        color: color,
        inputColorHex: inputColorHex,
        disableAppend: colors.length >= 20,
        disableDelete: colors.length <= 2,
        actionIcons: actionIcons,
        onAdd: onAdd,
        onDelete: onDelete,
        onToggleSketcher: onToggleSketcher,
        editColorMapValue: editColorMapValue
      }) : ordinalDomain && /*#__PURE__*/_react["default"].createElement(CategoricalCustomPaletteInput, {
        key: index,
        colorMap: colorMap,
        index: index,
        isSorting: isSorting,
        color: color,
        actionIcons: actionIcons,
        onAdd: onAdd,
        onDelete: onDelete,
        disableDelete: colors.length <= 2,
        onToggleSketcher: onToggleSketcher,
        addColorMapValue: addCategoricalColorMapValue,
        removeColorMapValue: removeCategoricalColorMapValue,
        resetColorMapValue: resetCategoricalColorMapValue,
        selectRestColorMapValue: selectRestCategoricalColorMap,
        allValues: ordinalDomain
      });
    })), customPalette.type === 'customOrdinal' && /*#__PURE__*/_react["default"].createElement(StyledAddStepContainer, null, /*#__PURE__*/_react["default"].createElement(AddColorStop, {
      onColorAdd: onAddCategoricalStep,
      IconComponent: actionIcons.add
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
      link: true,
      size: "smal",
      onClick: onAddCategoricalStep
    }, "Add Step")), /*#__PURE__*/_react["default"].createElement(DividerLine, null), /*#__PURE__*/_react["default"].createElement(BottomAction, {
      onCancel: onCancel,
      onConfirm: onConfirm
    }), /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
      isOpened: showSketcher !== false,
      left: 280,
      top: -300,
      onClose: onSwatchClose
    }, /*#__PURE__*/_react["default"].createElement(_customPicker["default"], {
      color: colors[Number(showSketcher)],
      onChange: onPickerUpdate
    })));
  };
  return CustomPalette;
}
var _default = exports["default"] = CustomPaletteFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xhc3NuYW1lcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfdW5pcSIsIl9jb3JlIiwiX3NvcnRhYmxlIiwiX3V0aWxpdGllcyIsIl9zdHlsZWRDb21wb25lbnRzIiwiX3BvcnRhbGVkIiwiX3N0eWxlZENvbXBvbmVudHMyIiwiX3R5cGVhaGVhZCIsIl9jaGlja2xldGVkSW5wdXQiLCJfZHJvcGRvd25MaXN0IiwiX3NyYyIsIl9zcmMyIiwiX3NyYzMiLCJfaWNvbnMiLCJfY3VzdG9tUGlja2VyIiwiX2V4Y2x1ZGVkIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl90ZW1wbGF0ZU9iamVjdDMiLCJfdGVtcGxhdGVPYmplY3Q0IiwiX3RlbXBsYXRlT2JqZWN0NSIsIl90ZW1wbGF0ZU9iamVjdDYiLCJfdGVtcGxhdGVPYmplY3Q3IiwiX3RlbXBsYXRlT2JqZWN0OCIsIl90ZW1wbGF0ZU9iamVjdDkiLCJfdGVtcGxhdGVPYmplY3QxMCIsIl90ZW1wbGF0ZU9iamVjdDExIiwiX3RlbXBsYXRlT2JqZWN0MTIiLCJfdGVtcGxhdGVPYmplY3QxMyIsIl90ZW1wbGF0ZU9iamVjdDE0IiwiX3RlbXBsYXRlT2JqZWN0MTUiLCJfdGVtcGxhdGVPYmplY3QxNiIsIl90ZW1wbGF0ZU9iamVjdDE3IiwiX3RlbXBsYXRlT2JqZWN0MTgiLCJfdGVtcGxhdGVPYmplY3QxOSIsIl90ZW1wbGF0ZU9iamVjdDIwIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5MiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJkZWZhdWx0QWN0aW9uSWNvbnMiLCJUcmFzaCIsInNvcnQiLCJWZXJ0RG90cyIsImFkZCIsIkFkZCIsImRyYWdIYW5kbGVBY3RpdmUiLCJjc3MiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JIbCIsIkNvbG9yUGFsZXR0ZUl0ZW0iLCJleHBvcnRzIiwic3R5bGVkIiwiZGl2IiwiZHJvcGRvd25XcmFwcGVyWiIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiU3R5bGVkRHJhZ0hhbmRsZSIsIlN0eWxlZEFjdGlvbiIsInN1YnRleHRDb2xvciIsInN1YnRleHRDb2xvckFjdGl2ZSIsIkRpdmlkZXJMaW5lIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiQ29sb3JTd2F0Y2giLCJhdHRycyIsImNsYXNzTmFtZSIsImNvbG9yIiwiYm94U2hhZG93IiwiU3R5bGVkQnV0dG9uQ29udGFpbmVyIiwiU3R5bGVkQWRkU3RlcENvbnRhaW5lciIsImlucHV0Q29sb3IiLCJTdHlsZWRJbnB1dCIsIklucHV0Iiwid2l0aENvbmZpZyIsInNob3VsZEZvcndhcmRQcm9wIiwiX3Byb3BzJHdpZHRoIiwid2lkdGgiLCJfcHJvcHMkdGV4dEFsaWduIiwidGV4dEFsaWduIiwiZGlzYWJsZWQiLCJJbnB1dFRleHQiLCJpbnB1dCIsIl9wcm9wcyR3aWR0aDIiLCJfcHJvcHMkdGV4dEFsaWduMiIsIlNvcnRhYmxlSXRlbSIsIl9yZWYiLCJpZCIsImNoaWxkcmVuIiwiaXNTb3J0aW5nIiwiX3VzZVNvcnRhYmxlIiwidXNlU29ydGFibGUiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwic2V0Tm9kZVJlZiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJpc0RyYWdnaW5nIiwic3R5bGUiLCJDU1MiLCJUcmFuc2Zvcm0iLCJ0b1N0cmluZyIsInpJbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kczIiLCJyZWYiLCJjbGFzc25hbWVzIiwic29ydGluZyIsIldyYXBwZWRTb3J0YWJsZUNvbnRhaW5lciIsIl9yZWYyIiwib25Tb3J0RW5kIiwib25Tb3J0U3RhcnQiLCJzZW5zb3JzIiwidXNlU2Vuc29ycyIsInVzZVNlbnNvciIsIlBvaW50ZXJTZW5zb3IiLCJLZXlib2FyZFNlbnNvciIsIkRuZENvbnRleHQiLCJjb2xsaXNpb25EZXRlY3Rpb24iLCJjbG9zZXN0Q2VudGVyIiwib25EcmFnRW5kIiwib25EcmFnU3RhcnQiLCJTb3J0YWJsZUNvbnRleHQiLCJpdGVtcyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJfIiwiaW5kZXgiLCJjb25jYXQiLCJzdHJhdGVneSIsInZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneSIsIkRyYWdIYW5kbGUiLCJfcmVmMyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllczIiLCJDb2xvclBhbGV0dGVJbnB1dCIsIl9yZWY0IiwidmFsdWUiLCJvbkNoYW5nZSIsImVkaXRhYmxlIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkyIiwic3RhdGVWYWx1ZSIsInNldFZhbHVlIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJvbktleURvd24iLCJ1c2VDYWxsYmFjayIsImtleUNvZGUiLCJLZXlFdmVudCIsIkRPTV9WS19FTlRFUiIsIkRPTV9WS19SRVRVUk4iLCJjdXJyZW50IiwiYmx1ciIsIl9vbkNoYW5nZSIsInRhcmdldCIsIm9uQmx1ciIsInNlY29uZGFyeSIsIkRhc2giLCJTdHlsZWRSYW5nZUlucHV0IiwiU3R5bGVkQ29sb3JIZXhJbnB1dCIsIkVkaXRhYmxlQ29sb3JSYW5nZSIsIl9yZWY1IiwiaXRlbSIsImlzTGFzdCIsImVkaXRDb2xvck1hcCIsImhhc0lucHV0cyIsIkFycmF5IiwiaXNBcnJheSIsImlucHV0cyIsImxlZnRJbnB1dCIsInVuZGVmaW5lZCIsInJpZ2h0SW5wdXQiLCJub01pbkJvdW5kIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJub01heEJvdW5kIiwib25DaGFuZ2VMZWZ0IiwidmFsIiwicGFyc2VGbG9hdCIsIm9uQ2hhbmdlUmlnaHQiLCJTdHJpbmciLCJBZGRDb2xvclN0b3AiLCJfcmVmNiIsIm9uQ29sb3JBZGQiLCJJY29uQ29tcG9uZW50Iiwib25DbGljayIsImhlaWdodCIsIkRlbGV0ZUNvbG9yU3RvcCIsIl9yZWY3Iiwib25Db2xvckRlbGV0ZSIsIkN1c3RvbVBhbGV0dGVJbnB1dCIsIl9yZWY4IiwiY29sb3JCcmVha3MiLCJpbnB1dENvbG9ySGV4IiwiZWRpdENvbG9yTWFwVmFsdWUiLCJfcmVmOCRhY3Rpb25JY29ucyIsImFjdGlvbkljb25zIiwiZGlzYWJsZUFwcGVuZCIsImRpc2FibGVEZWxldGUiLCJvbkRlbGV0ZSIsIm9uQWRkIiwib25Ub2dnbGVTa2V0Y2hlciIsIm9uQ2xpY2tTd3RhY2giLCJvbkNvbG9ySW5wdXQiLCJ2Iiwic2hvd0hleElucHV0IiwiRnJhZ21lbnQiLCJ0b1VwcGVyQ2FzZSIsImlzTnVtZXJpY0NvbG9yQnJlYWtzIiwiU3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlcldyYXBwZXIiLCJTdHlsZWRDYXRlZ29yaWNhbFZhbHVlUGlja2VyIiwibm9Cb3JkZXIiLCJEcm9wZG93blZhbHVlc1dyYXBwZXIiLCJTZWxlY3RlZFZhbHVlc1dyYXBwZXIiLCJTdHlsZWREcm9wZG93bkhlYWRlciIsIlN0eWxlZFRvb2x0aXBDb250ZW50IiwiTlVNQkVSX1ZBTFVFU19JTl9UT09MVElQIiwiQ2F0ZWdvcmljYWxTZWxlY3RvckNvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwib25TZWxlY3RSZXN0Iiwib25SZXNldCIsIk1vZGlmaWVkRHJvcGRvd25MaXN0IiwiX0Ryb3Bkb3duTGlzdCIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInJlbmRlciIsIl90aGlzIiwiQ29uc3VtZXIiLCJjb250ZXh0IiwiQnV0dG9uIiwibGluayIsInNpemUiLCJEcm9wZG93bkxpc3QiLCJDYXRlZ29yaWNhbFNlbGVjdG9yIiwiX3JlZjkiLCJzZWxlY3RlZFZhbHVlcyIsImFsbFZhbHVlcyIsImFkZENvbG9yTWFwVmFsdWUiLCJyZW1vdmVDb2xvck1hcFZhbHVlIiwicmVzZXRDb2xvck1hcFZhbHVlIiwic2VsZWN0UmVzdENvbG9yTWFwVmFsdWUiLCJfcmVmOSRlZGl0YWJsZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2hvd1R5cGVhaGVhZCIsInNldFNob3dUeXBlYWhlYWQiLCJvbk9wdGlvblNlbGVjdGVkIiwicHJldmlvdXNTZWxlY3RlZCIsInRvQXJyYXkiLCJ1bmlxIiwib25PcGVuRHJvcGRvd24iLCJvbkNsb3NlRHJvcGRvd24iLCJvblJlbW92ZUl0ZW0iLCJUb29sdGlwIiwicGxhY2UiLCJpbnRlcmFjdGl2ZSIsInNsaWNlIiwibGVmdCIsInRvcCIsImlzT3BlbmVkIiwib25DbG9zZSIsInNlbGVjdGVkSXRlbXMiLCJwbGFjZWhvbGRlciIsInJlbW92ZUl0ZW0iLCJDdXN0b21DaGlja2xldENvbXBvbmVudCIsInBvc2l0aW9uIiwiUHJvdmlkZXIiLCJjdXN0b21DbGFzc2VzIiwicmVzdWx0cyIsImxpc3RJdGVtIiwibGlzdEFuY2hvciIsIm9wdGlvbnMiLCJkaXNwbGF5T3B0aW9uIiwiZmlsdGVyT3B0aW9uIiwiaW5jbHVkZXMiLCJjdXN0b21MaXN0Q29tcG9uZW50IiwiY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQiLCJMaXN0SXRlbSIsInNlYXJjaGFibGUiLCJzaG93T3B0aW9uc1doZW5FbXB0eSIsIkNhdGVnb3JpY2FsQ3VzdG9tUGFsZXR0ZUlucHV0IiwiX3JlZjEwIiwiY29sb3JNYXAiLCJfcmVmMTAkYWN0aW9uSWNvbnMiLCJ1c2VNZW1vIiwidmFsdWVzIiwiQm90dG9tQWN0aW9uIiwiX3JlZjExIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJzbWFsbCIsIlN0eWxlZEN1c3RvbVBhbGV0dGUiLCJDdXN0b21QYWxldHRlRmFjdG9yeSIsIkN1c3RvbVBhbGV0dGUiLCJfcmVmMTIiLCJvcmRpbmFsRG9tYWluIiwiY3VzdG9tUGFsZXR0ZSIsInNldENvbG9yUGFsZXR0ZVVJIiwic2hvd1NrZXRjaGVyIiwiX3JlZjEyJGFjdGlvbkljb25zIiwib25BcHBseSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic2V0SXNTb3J0aW5nIiwiY29sb3JzIiwidHlwZSIsImNvbG9yTWFwVG9Db2xvckJyZWFrcyIsImNvbG9yTWFwVG9DYXRlZ29yaWNhbENvbG9yQnJlYWtzIiwib25QaWNrZXJVcGRhdGUiLCJuZXdDdXN0b21QYWxldHRlIiwidXBkYXRlQ3VzdG9tUGFsZXR0ZUNvbG9yIiwiaGV4IiwicmVtb3ZlQ3VzdG9tUGFsZXR0ZUNvbG9yIiwiYWRkQ3VzdG9tUGFsZXR0ZUNvbG9yIiwib25BZGRDYXRlZ29yaWNhbFN0ZXAiLCJvblN3YXRjaENsb3NlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGl2ZSIsIm92ZXIiLCJvbGRJbmRleCIsImZpbmRJbmRleCIsIm5ld0luZGV4Iiwic29ydEN1c3RvbVBhbGV0dGVDb2xvciIsIm5ld0NvbG9yTWFwIiwiY20iLCJicmVha3MiLCJiIiwic29ydGVkTmV3Q29sb3JNYXAiLCJyZW1vdmVDYXRlZ29yaWNhbENvbG9yTWFwVmFsdWUiLCJyZW1vdmVDYXRlZ29yaWNhbFZhbHVlRnJvbUNvbG9yTWFwIiwiYWRkQ2F0ZWdvcmljYWxDb2xvck1hcFZhbHVlIiwiYWRkQ2F0ZWdvcmljYWxWYWx1ZXNUb0NvbG9yTWFwIiwicmVzZXRDYXRlZ29yaWNhbENvbG9yTWFwVmFsdWUiLCJyZXNldENhdGVnb3JpY2FsQ29sb3JNYXBCeUluZGV4Iiwic2VsZWN0UmVzdENhdGVnb3JpY2FsQ29sb3JNYXAiLCJzZWxlY3RSZXN0Q2F0ZWdvcmljYWxDb2xvck1hcEJ5SW5kZXgiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2N1c3RvbS1wYWxldHRlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwge1xuICBFbGVtZW50VHlwZSxcbiAgUHJvcHNXaXRoQ2hpbGRyZW4sXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZixcbiAgdXNlU3RhdGVcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuaW1wb3J0IHtcbiAgRG5kQ29udGV4dCxcbiAgY2xvc2VzdENlbnRlcixcbiAgS2V5Ym9hcmRTZW5zb3IsXG4gIFBvaW50ZXJTZW5zb3IsXG4gIHVzZVNlbnNvcixcbiAgdXNlU2Vuc29ycyxcbiAgRHJhZ0VuZEV2ZW50XG59IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IHtTb3J0YWJsZUNvbnRleHQsIHVzZVNvcnRhYmxlLCB2ZXJ0aWNhbExpc3RTb3J0aW5nU3RyYXRlZ3l9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7Q1NTfSBmcm9tICdAZG5kLWtpdC91dGlsaXRpZXMnO1xuaW1wb3J0IHN0eWxlZCwge2Nzc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBvcnRhbGVkIGZyb20gJy4uLy4uL2NvbW1vbi9wb3J0YWxlZCc7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgVHlwZWFoZWFkIGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL3R5cGVhaGVhZCc7XG5pbXBvcnQgQ2hpY2tsZXRlZElucHV0IGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQnO1xuaW1wb3J0IERyb3Bkb3duTGlzdCwge0xpc3RJdGVtfSBmcm9tICcuLi8uLi9jb21tb24vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0JztcbmltcG9ydCB7c2hvdWxkRm9yd2FyZFByb3B9IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge3RvQXJyYXl9IGZyb20gJ0BrZXBsZXIuZ2wvY29tbW9uLXV0aWxzJztcbmltcG9ydCB7S2V5RXZlbnR9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7Q29sb3JNYXAsIENvbG9yVUksIEhleENvbG9yLCBOZXN0ZWRQYXJ0aWFsfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7XG4gIGFkZENhdGVnb3JpY2FsVmFsdWVzVG9Db2xvck1hcCxcbiAgYWRkQ3VzdG9tUGFsZXR0ZUNvbG9yLFxuICBjb2xvck1hcFRvQ2F0ZWdvcmljYWxDb2xvckJyZWFrcyxcbiAgY29sb3JNYXBUb0NvbG9yQnJlYWtzLFxuICBpc051bWVyaWNDb2xvckJyZWFrcyxcbiAgcmVzZXRDYXRlZ29yaWNhbENvbG9yTWFwQnlJbmRleCxcbiAgcmVtb3ZlQ2F0ZWdvcmljYWxWYWx1ZUZyb21Db2xvck1hcCxcbiAgcmVtb3ZlQ3VzdG9tUGFsZXR0ZUNvbG9yLFxuICBzZWxlY3RSZXN0Q2F0ZWdvcmljYWxDb2xvck1hcEJ5SW5kZXgsXG4gIHNvcnRDdXN0b21QYWxldHRlQ29sb3IsXG4gIHVwZGF0ZUN1c3RvbVBhbGV0dGVDb2xvclxufSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7Q29sb3JCcmVhaywgQ29sb3JCcmVha09yZGluYWx9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtBZGQsIFRyYXNoLCBWZXJ0RG90c30gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zJztcbmltcG9ydCB7QnV0dG9uLCBJbnB1dH0gZnJvbSAnLi4vLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDdXN0b21QaWNrZXIgZnJvbSAnLi9jdXN0b20tcGlja2VyJztcblxuZXhwb3J0IHR5cGUgQWN0aW9uSWNvbnMgPSB7XG4gIGRlbGV0ZTogRWxlbWVudFR5cGU7XG4gIHNvcnQ6IEVsZW1lbnRUeXBlO1xuICBhZGQ6IEVsZW1lbnRUeXBlO1xufTtcblxuZXhwb3J0IHR5cGUgRWRpdENvbG9yTWFwRnVuYyA9ICh2OiBudW1iZXIsIGk6IG51bWJlcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIFNldENvbG9yVUlGdW5jID0gKG5ld0NvbmZpZzogTmVzdGVkUGFydGlhbDxDb2xvclVJPikgPT4gdm9pZDtcblxuLyoqXG4gKiBFZGl0YWJsZUNvbG9yUmFuZ2VcbiAqL1xuZXhwb3J0IHR5cGUgRWRpdGFibGVDb2xvclJhbmdlUHJvcHMgPSB7XG4gIGl0ZW06IENvbG9yQnJlYWs7XG4gIGlzTGFzdDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgZWRpdENvbG9yTWFwPzogRWRpdENvbG9yTWFwRnVuYztcbiAgZWRpdGFibGU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBDdXN0b21QYWxldHRlUHJvcHMgPSB7XG4gIGN1c3RvbVBhbGV0dGU6IENvbG9yVUlbJ2N1c3RvbVBhbGV0dGUnXTtcbiAgc2V0Q29sb3JQYWxldHRlVUk6IFNldENvbG9yVUlGdW5jO1xuICBzaG93U2tldGNoZXI6IG51bWJlciB8IGJvb2xlYW47XG4gIG9yZGluYWxEb21haW4/OiBzdHJpbmdbXSB8IG51bWJlcltdO1xuICBhY3Rpb25JY29ucz86IEFjdGlvbkljb25zO1xuICBvbkFwcGx5OiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgdHlwZSBDdXN0b21QYWxldHRlSW5wdXRQcm9wcyA9IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgaXNTb3J0aW5nOiBib29sZWFuO1xuICBjb2xvcjogSGV4Q29sb3I7XG4gIGNvbG9yQnJlYWtzOiBDb2xvckJyZWFrT3JkaW5hbFtdIHwgQ29sb3JCcmVha1tdIHwgbnVsbDtcbiAgaW5wdXRDb2xvckhleDogKGluZGV4OiBudW1iZXIsIHY6IEhleENvbG9yKSA9PiB2b2lkO1xuICBlZGl0Q29sb3JNYXBWYWx1ZTogRWRpdENvbG9yTWFwRnVuYztcbiAgYWN0aW9uSWNvbnM/OiBBY3Rpb25JY29ucztcbiAgZGlzYWJsZUFwcGVuZD86IGJvb2xlYW47XG4gIGRpc2FibGVEZWxldGU/OiBib29sZWFuO1xuICBvbkRlbGV0ZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uQWRkOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25Ub2dnbGVTa2V0Y2hlcjogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBkZWZhdWx0QWN0aW9uSWNvbnMgPSB7XG4gIGRlbGV0ZTogVHJhc2gsXG4gIHNvcnQ6IFZlcnREb3RzLFxuICBhZGQ6IEFkZFxufTtcblxuY29uc3QgZHJhZ0hhbmRsZUFjdGl2ZSA9IGNzc2BcbiAgLmxheWVyX19kcmFnLWhhbmRsZSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29sb3JQYWxldHRlSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWiArIDF9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLmN1c3RvbS1wYWxldHRlLWlucHV0X19sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuY3VzdG9tLXBhbGV0dGUtaW5wdXRfX3JpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICB9XG5cbiAgJjpub3QoLnNvcnRpbmcpOm5vdCguZGlzYWJsZWQpIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuICAgICAgJHtkcmFnSGFuZGxlQWN0aXZlfTtcbiAgICB9XG4gIH1cblxuICAmLnNvcnRpbmctY29sb3JzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICAke2RyYWdIYW5kbGVBY3RpdmV9O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnSGFuZGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gIHN2ZyB7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JBY3RpdmV9O1xuICAgIH1cbiAgfVxuXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERpdmlkZXJMaW5lID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wfTtcbiAgbWFyZ2luLXRvcDogOHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbG9yU3dhdGNoID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2N1c3RvbS1wYWxldHRlX19zd2F0Y2gnXG59KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3hTaGFkb3d9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHBhZGRpbmc6IDAgMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFkZFN0ZXBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRDb2xvcn07XG4gIC5hZGRjb2xvciB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZChJbnB1dCkud2l0aENvbmZpZyh7c2hvdWxkRm9yd2FyZFByb3B9KTx7XG4gIHdpZHRoOiBzdHJpbmc7XG4gIHRleHRBbGlnbjogc3RyaW5nO1xufT5gXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRoID8/ICcxMDAlJ307XG4gIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMudGV4dEFsaWduID8/ICdlbmQnfTtcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gJ25vbmUnIDogJ2FsbCcpfTtcbmA7XG5cbmNvbnN0IElucHV0VGV4dCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7c2hvdWxkRm9yd2FyZFByb3B9KTx7d2lkdGg6IHN0cmluZzsgdGV4dEFsaWduOiBzdHJpbmd9PmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dH07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCA/PyAnMTAwJSd9O1xuICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnRleHRBbGlnbiA/PyAnZW5kJ307XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbmA7XG5cbnR5cGUgU29ydGFibGVJdGVtUHJvcHMgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiAobGlzdGVuZXJzOiBhbnkpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBpc1NvcnRpbmc6IGJvb2xlYW47XG59O1xuXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSAoe2lkLCBjaGlsZHJlbiwgaXNTb3J0aW5nfTogU29ydGFibGVJdGVtUHJvcHMpID0+IHtcbiAgY29uc3Qge2F0dHJpYnV0ZXMsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgdHJhbnNmb3JtLCB0cmFuc2l0aW9uLCBpc0RyYWdnaW5nfSA9IHVzZVNvcnRhYmxlKHtpZH0pO1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0cmFuc2Zvcm06IENTUy5UcmFuc2Zvcm0udG9TdHJpbmcodHJhbnNmb3JtKSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIHpJbmRleDogaXNEcmFnZ2luZyA/IDEgOiAwXG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbG9yUGFsZXR0ZUl0ZW1cbiAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY3VzdG9tLXBhbGV0dGVfX3NvcnRhYmxlLWl0ZW1zJywge3NvcnRpbmc6IGlzU29ydGluZyB8fCBpc0RyYWdnaW5nfSl9XG4gICAgICB7Li4uYXR0cmlidXRlc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4obGlzdGVuZXJzKX1cbiAgICA8L0NvbG9yUGFsZXR0ZUl0ZW0+XG4gICk7XG59O1xuXG50eXBlIFdyYXBwZWRTb3J0YWJsZUNvbnRhaW5lclByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBvblNvcnRFbmQ6IChldmVudDogRHJhZ0VuZEV2ZW50KSA9PiB2b2lkO1xuICBvblNvcnRTdGFydDogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IFdyYXBwZWRTb3J0YWJsZUNvbnRhaW5lciA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIG9uU29ydEVuZCxcbiAgb25Tb3J0U3RhcnRcbn06IFdyYXBwZWRTb3J0YWJsZUNvbnRhaW5lclByb3BzKSA9PiB7XG4gIGNvbnN0IHNlbnNvcnMgPSB1c2VTZW5zb3JzKHVzZVNlbnNvcihQb2ludGVyU2Vuc29yKSwgdXNlU2Vuc29yKEtleWJvYXJkU2Vuc29yKSk7XG4gIHJldHVybiAoXG4gICAgPERuZENvbnRleHRcbiAgICAgIHNlbnNvcnM9e3NlbnNvcnN9XG4gICAgICBjb2xsaXNpb25EZXRlY3Rpb249e2Nsb3Nlc3RDZW50ZXJ9XG4gICAgICBvbkRyYWdFbmQ9e29uU29ydEVuZH1cbiAgICAgIG9uRHJhZ1N0YXJ0PXtvblNvcnRTdGFydH1cbiAgICA+XG4gICAgICA8U29ydGFibGVDb250ZXh0XG4gICAgICAgIGl0ZW1zPXtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChfLCBpbmRleCkgPT4gYCR7aW5kZXh9YCkgfHwgW119XG4gICAgICAgIHN0cmF0ZWd5PXt2ZXJ0aWNhbExpc3RTb3J0aW5nU3RyYXRlZ3l9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvU29ydGFibGVDb250ZXh0PlxuICAgIDwvRG5kQ29udGV4dD5cbiAgKTtcbn07XG5cbnR5cGUgRHJhZ0hhbmRsZVByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e2NsYXNzTmFtZT86IHN0cmluZ30+O1xuY29uc3QgRHJhZ0hhbmRsZSA9ICh7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ubGlzdGVuZXJzfTogRHJhZ0hhbmRsZVByb3BzKSA9PiAoXG4gIDxTdHlsZWREcmFnSGFuZGxlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ubGlzdGVuZXJzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkRHJhZ0hhbmRsZT5cbik7XG5cbmV4cG9ydCB0eXBlIENvbG9yUGFsZXR0ZUlucHV0UHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIG9uQ2hhbmdlOiAodmFsOiB1bmtub3duKSA9PiB2b2lkO1xuICBpZDogc3RyaW5nO1xuICB3aWR0aDogc3RyaW5nO1xuICB0ZXh0QWxpZ246IHN0cmluZztcbiAgZWRpdGFibGU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgQ29sb3JQYWxldHRlSW5wdXQgPSAoe1xuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGlkLFxuICB3aWR0aCxcbiAgdGV4dEFsaWduLFxuICBlZGl0YWJsZVxufTogQ29sb3JQYWxldHRlSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGVWYWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IG9uS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIGUgPT4ge1xuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfRU5URVI6XG4gICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX1JFVFVSTjpcbiAgICAgICAgICBvbkNoYW5nZShzdGF0ZVZhbHVlKTtcbiAgICAgICAgICBpZiAoaW5wdXRSZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlucHV0UmVmPy5jdXJyZW50LmJsdXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25DaGFuZ2UsIHN0YXRlVmFsdWVdXG4gICk7XG5cbiAgY29uc3QgX29uQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSksIFtzZXRWYWx1ZV0pO1xuICBjb25zdCBvbkJsdXIgPSB1c2VDYWxsYmFjaygoKSA9PiBvbkNoYW5nZShzdGF0ZVZhbHVlKSwgW29uQ2hhbmdlLCBzdGF0ZVZhbHVlXSk7XG5cbiAgcmV0dXJuIGVkaXRhYmxlID8gKFxuICAgIDxTdHlsZWRJbnB1dFxuICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLWhleF9faW5wdXRcIlxuICAgICAgdmFsdWU9e3N0YXRlVmFsdWV9XG4gICAgICBvbkNoYW5nZT17X29uQ2hhbmdlfVxuICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgIGlkPXtpZH1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIHRleHRBbGlnbj17dGV4dEFsaWdufVxuICAgICAgc2Vjb25kYXJ5XG4gICAgLz5cbiAgKSA6IChcbiAgICA8SW5wdXRUZXh0IGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLWhleF9faW5wdXRfX3RleHRcIiB3aWR0aD17d2lkdGh9IHRleHRBbGlnbj17dGV4dEFsaWdufT5cbiAgICAgIHt2YWx1ZX1cbiAgICA8L0lucHV0VGV4dD5cbiAgKTtcbn07XG5cbmNvbnN0IERhc2ggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFJhbmdlSW5wdXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZENvbG9ySGV4SW5wdXQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMTJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFZGl0YWJsZUNvbG9yUmFuZ2U6IFJlYWN0LkZDPEVkaXRhYmxlQ29sb3JSYW5nZVByb3BzPiA9ICh7XG4gIGl0ZW0sXG4gIGlzTGFzdCxcbiAgaW5kZXgsXG4gIGVkaXRDb2xvck1hcCxcbiAgZWRpdGFibGVcbn0pID0+IHtcbiAgY29uc3QgaGFzSW5wdXRzID0gQXJyYXkuaXNBcnJheShpdGVtPy5pbnB1dHMpO1xuICBjb25zdCBsZWZ0SW5wdXQgPSBoYXNJbnB1dHMgPyBpdGVtLmlucHV0c1swXSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgcmlnaHRJbnB1dCA9IGhhc0lucHV0cyA/IGl0ZW0uaW5wdXRzWzFdIDogdW5kZWZpbmVkO1xuICBjb25zdCBub01pbkJvdW5kID0gIU51bWJlci5pc0Zpbml0ZShsZWZ0SW5wdXQpICYmIGluZGV4ID09PSAwO1xuICBjb25zdCBub01heEJvdW5kID0gIU51bWJlci5pc0Zpbml0ZShyaWdodElucHV0KSAmJiBpc0xhc3Q7XG4gIGNvbnN0IG9uQ2hhbmdlTGVmdCA9IHVzZUNhbGxiYWNrKFxuICAgIHZhbCA9PiB7XG4gICAgICBpZiAoZWRpdGFibGUgJiYgZWRpdENvbG9yTWFwKSBlZGl0Q29sb3JNYXAocGFyc2VGbG9hdCh2YWwpLCBpbmRleCAtIDEpO1xuICAgIH0sXG4gICAgW2VkaXRDb2xvck1hcCwgaW5kZXgsIGVkaXRhYmxlXVxuICApO1xuICBjb25zdCBvbkNoYW5nZVJpZ2h0ID0gdXNlQ2FsbGJhY2soXG4gICAgdmFsID0+IHtcbiAgICAgIGlmIChlZGl0YWJsZSAmJiBlZGl0Q29sb3JNYXApIGVkaXRDb2xvck1hcChwYXJzZUZsb2F0KHZhbCksIGluZGV4KTtcbiAgICB9LFxuICAgIFtlZGl0Q29sb3JNYXAsIGluZGV4LCBlZGl0YWJsZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRSYW5nZUlucHV0PlxuICAgICAgPENvbG9yUGFsZXR0ZUlucHV0XG4gICAgICAgIHZhbHVlPXtub01pbkJvdW5kID8gJ0xlc3MnIDogU3RyaW5nKGxlZnRJbnB1dCA/PyAnJyl9XG4gICAgICAgIGlkPXtgY29sb3ItcGFsZXR0ZS1pbnB1dC0ke2luZGV4fS1sZWZ0YH1cbiAgICAgICAgd2lkdGg9XCI1MHB4XCJcbiAgICAgICAgdGV4dEFsaWduPVwiZW5kXCJcbiAgICAgICAgZWRpdGFibGU9e25vTWluQm91bmQgPyBmYWxzZSA6IGVkaXRhYmxlfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMZWZ0fVxuICAgICAgLz5cbiAgICAgIDxEYXNoIC8+XG4gICAgICA8Q29sb3JQYWxldHRlSW5wdXRcbiAgICAgICAgdmFsdWU9e25vTWF4Qm91bmQgPyAnTW9yZScgOiBTdHJpbmcocmlnaHRJbnB1dCA/PyAnJyl9XG4gICAgICAgIGlkPXtgY29sb3ItcGFsZXR0ZS1pbnB1dC0ke2luZGV4fS1yaWdodGB9XG4gICAgICAgIHdpZHRoPVwiNTBweFwiXG4gICAgICAgIHRleHRBbGlnbj1cImVuZFwiXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJpZ2h0fVxuICAgICAgICBlZGl0YWJsZT17bm9NYXhCb3VuZCA/IGZhbHNlIDogZWRpdGFibGV9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkUmFuZ2VJbnB1dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBBZGRDb2xvclN0b3AgPSAoe29uQ29sb3JBZGQsIEljb25Db21wb25lbnR9KSA9PiAoXG4gIDxTdHlsZWRBY3Rpb24gb25DbGljaz17b25Db2xvckFkZH0gY2xhc3NOYW1lPVwiYWRkY29sb3JcIj5cbiAgICA8SWNvbkNvbXBvbmVudCBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgPC9TdHlsZWRBY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgRGVsZXRlQ29sb3JTdG9wID0gKHtvbkNvbG9yRGVsZXRlLCBJY29uQ29tcG9uZW50fSkgPT4gKFxuICA8U3R5bGVkQWN0aW9uIG9uQ2xpY2s9e29uQ29sb3JEZWxldGV9IGNsYXNzTmFtZT1cInRyYXNoYmluXCI+XG4gICAgPEljb25Db21wb25lbnQgaGVpZ2h0PVwiMTRweFwiIC8+XG4gIDwvU3R5bGVkQWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IEN1c3RvbVBhbGV0dGVJbnB1dDogUmVhY3QuRkM8Q3VzdG9tUGFsZXR0ZUlucHV0UHJvcHM+ID0gKHtcbiAgaW5kZXgsXG4gIGlzU29ydGluZyxcbiAgY29sb3IsXG4gIGNvbG9yQnJlYWtzLFxuICBpbnB1dENvbG9ySGV4LFxuICBlZGl0Q29sb3JNYXBWYWx1ZSxcbiAgYWN0aW9uSWNvbnMgPSBkZWZhdWx0QWN0aW9uSWNvbnMsXG4gIGRpc2FibGVBcHBlbmQsXG4gIGRpc2FibGVEZWxldGUsXG4gIG9uRGVsZXRlLFxuICBvbkFkZCxcbiAgb25Ub2dnbGVTa2V0Y2hlclxufSkgPT4ge1xuICBjb25zdCBvbkNsaWNrU3d0YWNoID0gdXNlQ2FsbGJhY2soKCkgPT4gb25Ub2dnbGVTa2V0Y2hlcihpbmRleCksIFtvblRvZ2dsZVNrZXRjaGVyLCBpbmRleF0pO1xuICBjb25zdCBvbkNvbG9ySW5wdXQgPSB1c2VDYWxsYmFjayh2ID0+IGlucHV0Q29sb3JIZXgoaW5kZXgsIHYpLCBbaW5wdXRDb2xvckhleCwgaW5kZXhdKTtcbiAgY29uc3Qgb25Db2xvckRlbGV0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IG9uRGVsZXRlKGluZGV4KSwgW29uRGVsZXRlLCBpbmRleF0pO1xuICBjb25zdCBvbkNvbG9yQWRkID0gdXNlQ2FsbGJhY2soKCkgPT4gb25BZGQoaW5kZXgpLCBbb25BZGQsIGluZGV4XSk7XG4gIGNvbnN0IHNob3dIZXhJbnB1dCA9ICFjb2xvckJyZWFrcztcblxuICByZXR1cm4gKFxuICAgIDxTb3J0YWJsZUl0ZW0gaWQ9e2Ake2luZGV4fWB9IGlzU29ydGluZz17aXNTb3J0aW5nfT5cbiAgICAgIHtsaXN0ZW5lcnMgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGUtaW5wdXRfX2xlZnRcIj5cbiAgICAgICAgICAgIDxEcmFnSGFuZGxlIGNsYXNzTmFtZT1cImxheWVyX19kcmFnLWhhbmRsZVwiIHsuLi5saXN0ZW5lcnN9PlxuICAgICAgICAgICAgICA8YWN0aW9uSWNvbnMuc29ydCBoZWlnaHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgIDwvRHJhZ0hhbmRsZT5cbiAgICAgICAgICAgIDxDb2xvclN3YXRjaCBjb2xvcj17Y29sb3J9IG9uQ2xpY2s9e29uQ2xpY2tTd3RhY2h9IC8+XG4gICAgICAgICAgICB7c2hvd0hleElucHV0ID8gKFxuICAgICAgICAgICAgICA8U3R5bGVkQ29sb3JIZXhJbnB1dD5cbiAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlSW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2xvci50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29sb3JJbnB1dH1cbiAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXQtbGF5ZXItbGFiZWwtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgZWRpdGFibGVcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI3MHB4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZENvbG9ySGV4SW5wdXQ+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtjb2xvckJyZWFrcyAmJiBpbmRleCA8IGNvbG9yQnJlYWtzLmxlbmd0aCAmJiBpc051bWVyaWNDb2xvckJyZWFrcyhjb2xvckJyZWFrcykgPyAoXG4gICAgICAgICAgICAgIDxFZGl0YWJsZUNvbG9yUmFuZ2VcbiAgICAgICAgICAgICAgICBpdGVtPXtjb2xvckJyZWFrc1tpbmRleF19XG4gICAgICAgICAgICAgICAgaXNMYXN0PXtpbmRleCA9PT0gY29sb3JCcmVha3MubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgZWRpdENvbG9yTWFwPXtlZGl0Q29sb3JNYXBWYWx1ZX1cbiAgICAgICAgICAgICAgICBlZGl0YWJsZVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tcGFsZXR0ZS1pbnB1dF9fcmlnaHRcIj5cbiAgICAgICAgICAgIHshZGlzYWJsZUFwcGVuZCA/IChcbiAgICAgICAgICAgICAgPEFkZENvbG9yU3RvcCBvbkNvbG9yQWRkPXtvbkNvbG9yQWRkfSBJY29uQ29tcG9uZW50PXthY3Rpb25JY29ucy5hZGR9IC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHshZGlzYWJsZURlbGV0ZSA/IChcbiAgICAgICAgICAgICAgPERlbGV0ZUNvbG9yU3RvcCBvbkNvbG9yRGVsZXRlPXtvbkNvbG9yRGVsZXRlfSBJY29uQ29tcG9uZW50PXthY3Rpb25JY29ucy5kZWxldGV9IC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvU29ydGFibGVJdGVtPlxuICApO1xufTtcblxuY29uc3QgU3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlcldyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnY2F0ZWdvcmljYWwtdmFsdWUtcGlja2VyJ1xufSlgXG4gIHdpZHRoOiAxNTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRDb2xvcn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGNvbHVtbi1nYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxudHlwZSBTdHlsZWRDYXRlZ29yaWNhbFZhbHVlUGlja2VyUHJvcHMgPSB7bm9Cb3JkZXI6IGJvb2xlYW59O1xuY29uc3QgU3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlciA9IHN0eWxlZC5kaXY8U3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlclByb3BzPmBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLm5vQm9yZGVyID8gJycgOiAnMXB4IGRhc2hlZCcpfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbmA7XG5cbnR5cGUgRHJvcGRvd25WYWx1ZXNXcmFwcGVyUHJvcHMgPSB7d2lkdGg6IG51bWJlcn07XG5jb25zdCBEcm9wZG93blZhbHVlc1dyYXBwZXIgPSBzdHlsZWQuZGl2PERyb3Bkb3duVmFsdWVzV3JhcHBlclByb3BzPmBcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bldyYXBwZXJafTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG5gO1xuXG50eXBlIFNlbGVjdGVkVmFsdWVzV3JhcHBlclByb3BzID0ge3dpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyfTtcbmNvbnN0IFNlbGVjdGVkVmFsdWVzV3JhcHBlciA9IHN0eWxlZChEcm9wZG93blZhbHVlc1dyYXBwZXIpPFNlbGVjdGVkVmFsdWVzV3JhcHBlclByb3BzPmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gIG1heC1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBvdmVyZmxvdzogYXV0bztcblxuICAuY3VzdG9tLXBhbGV0dGUtY2hpY2tsZXRlZC1pbnB1dCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWn07XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZERyb3Bkb3duSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dENvbG9yfTtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcblxuICAuYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFRvb2x0aXBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogOHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuICBkaXYge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuYDtcblxuY29uc3QgTlVNQkVSX1ZBTFVFU19JTl9UT09MVElQID0gMTA7XG5cbmNvbnN0IENhdGVnb3JpY2FsU2VsZWN0b3JDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIG9uU2VsZWN0UmVzdDogKCkgPT4gbnVsbCxcbiAgb25SZXNldDogKCkgPT4gbnVsbFxufSk7XG5cbi8vIENhdGVnb3JpY2FsIHZhbHVlcyBkcm9wZG93bmxpc3Q6XG4vLyBleHRlbmRpbmcgRHJvcGRvd25MaXN0IGFuZCBhZGRpbmcgJ1NlbGVjdCB0aGUgUmVzdCcgYW5kICdSZXNldCcgYnV0dG9uc1xuY2xhc3MgTW9kaWZpZWREcm9wZG93bkxpc3QgZXh0ZW5kcyBEcm9wZG93bkxpc3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPENhdGVnb3JpY2FsU2VsZWN0b3JDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgIHtjb250ZXh0ID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxTdHlsZWREcm9wZG93bkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxpbmsgc2l6ZT1cInNtYWxcIiBvbkNsaWNrPXtjb250ZXh0Lm9uU2VsZWN0UmVzdH0+XG4gICAgICAgICAgICAgICAgICBTZWxlY3QgdGhlIFJlc3RcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxpbmsgc2l6ZT1cInNtYWxcIiBvbkNsaWNrPXtjb250ZXh0Lm9uUmVzZXR9PlxuICAgICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TdHlsZWREcm9wZG93bkhlYWRlcj5cbiAgICAgICAgICAgICAgPERpdmlkZXJMaW5lIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkxpc3Qgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhdGVnb3JpY2FsU2VsZWN0b3JDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYXRlZ29yaWNhbFNlbGVjdG9yUHJvcHMgPSB7XG4gIGluZGV4OiBudW1iZXI7XG4gIHNlbGVjdGVkVmFsdWVzOiAoc3RyaW5nIHwgbnVtYmVyIHwgbnVsbClbXTtcbiAgYWxsVmFsdWVzOiBzdHJpbmdbXSB8IG51bWJlcltdO1xuICBhZGRDb2xvck1hcFZhbHVlPzogKHY6IChudW1iZXIgfCBzdHJpbmcgfCBudWxsKVtdLCBpOiBudW1iZXIpID0+IHZvaWQ7XG4gIHJlbW92ZUNvbG9yTWFwVmFsdWU/OiAodjogbnVtYmVyIHwgc3RyaW5nLCBpOiBudW1iZXIpID0+IHZvaWQ7XG4gIHJlc2V0Q29sb3JNYXBWYWx1ZT86IChpOiBudW1iZXIpID0+IHZvaWQ7XG4gIHNlbGVjdFJlc3RDb2xvck1hcFZhbHVlPzogKGk6IG51bWJlcikgPT4gdm9pZDtcbiAgZWRpdGFibGU/OiBib29sZWFuO1xufTtcblxuLy8gQ2F0ZWdvcmljYWwgdmFsdWVzIHNlbGVjdG9yIGZvciBlZGl0aW5nIGNhdGVnb3JpY2FsIHZhbHVlc1xuZXhwb3J0IGNvbnN0IENhdGVnb3JpY2FsU2VsZWN0b3I6IFJlYWN0LkZDPENhdGVnb3JpY2FsU2VsZWN0b3JQcm9wcz4gPSAoe1xuICBpbmRleCxcbiAgc2VsZWN0ZWRWYWx1ZXMsXG4gIGFsbFZhbHVlcyxcbiAgYWRkQ29sb3JNYXBWYWx1ZSxcbiAgcmVtb3ZlQ29sb3JNYXBWYWx1ZSxcbiAgcmVzZXRDb2xvck1hcFZhbHVlLFxuICBzZWxlY3RSZXN0Q29sb3JNYXBWYWx1ZSxcbiAgZWRpdGFibGUgPSB0cnVlXG59OiBDYXRlZ29yaWNhbFNlbGVjdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgW3Nob3dUeXBlYWhlYWQsIHNldFNob3dUeXBlYWhlYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uT3B0aW9uU2VsZWN0ZWQgPSB1c2VDYWxsYmFjayhcbiAgICB2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkID0gdG9BcnJheShzZWxlY3RlZFZhbHVlcyk7XG4gICAgICBjb25zdCBpdGVtcyA9IHVuaXEocHJldmlvdXNTZWxlY3RlZC5jb25jYXQodG9BcnJheSh2YWx1ZSkpKTtcbiAgICAgIGFkZENvbG9yTWFwVmFsdWU/LihpdGVtcywgaW5kZXgpO1xuICAgIH0sXG4gICAgW3NlbGVjdGVkVmFsdWVzLCBpbmRleCwgYWRkQ29sb3JNYXBWYWx1ZV1cbiAgKTtcblxuICBjb25zdCBvbk9wZW5Ecm9wZG93biA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93VHlwZWFoZWFkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbG9zZURyb3Bkb3duID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dUeXBlYWhlYWQoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25SZW1vdmVJdGVtID0gdXNlQ2FsbGJhY2soXG4gICAgdmFsdWUgPT4ge1xuICAgICAgcmVtb3ZlQ29sb3JNYXBWYWx1ZT8uKHZhbHVlLCBpbmRleCk7XG4gICAgfSxcbiAgICBbaW5kZXgsIHJlbW92ZUNvbG9yTWFwVmFsdWVdXG4gICk7XG5cbiAgY29uc3Qgb25SZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXNldENvbG9yTWFwVmFsdWU/LihpbmRleCk7XG4gICAgc2V0U2hvd1R5cGVhaGVhZChmYWxzZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIFtyZXNldENvbG9yTWFwVmFsdWUsIGluZGV4XSk7XG5cbiAgY29uc3Qgb25TZWxlY3RSZXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNlbGVjdFJlc3RDb2xvck1hcFZhbHVlPy4oaW5kZXgpO1xuICAgIHNldFNob3dUeXBlYWhlYWQoZmFsc2UpO1xuICAgIHJldHVybiBudWxsO1xuICB9LCBbc2VsZWN0UmVzdENvbG9yTWFwVmFsdWUsIGluZGV4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlcldyYXBwZXI+XG4gICAgICB7ZWRpdGFibGUgJiYgPEFkZCBoZWlnaHQ9XCIxMnB4XCIgb25DbGljaz17b25PcGVuRHJvcGRvd259IC8+fVxuICAgICAgPFN0eWxlZENhdGVnb3JpY2FsVmFsdWVQaWNrZXJcbiAgICAgICAgbm9Cb3JkZXI9e3NlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMCB8fCAhZWRpdGFibGV9XG4gICAgICAgIG9uQ2xpY2s9e29uT3BlbkRyb3Bkb3dufVxuICAgICAgICBkYXRhLXRpcFxuICAgICAgICBkYXRhLWZvcj17YGNhdGVnb3J5LXZhbHVlcy0ke2luZGV4fWB9XG4gICAgICA+XG4gICAgICAgIHtzZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDBcbiAgICAgICAgICA/ICdBZGQgVmFsdWUnXG4gICAgICAgICAgOiBzZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICA/IHNlbGVjdGVkVmFsdWVzWzBdXG4gICAgICAgICAgOiBgJHtzZWxlY3RlZFZhbHVlcy5sZW5ndGh9IHNlbGVjdGVkYH1cbiAgICAgICAge3NlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgIDxUb29sdGlwIGlkPXtgY2F0ZWdvcnktdmFsdWVzLSR7aW5kZXh9YH0gcGxhY2U9XCJ0b3BcIiBpbnRlcmFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgICAgICA8U3R5bGVkVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZFZhbHVlcy5zbGljZSgwLCBOVU1CRVJfVkFMVUVTX0lOX1RPT0xUSVApLm1hcCgodmFsdWUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge3NlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IE5VTUJFUl9WQUxVRVNfSU5fVE9PTFRJUCAmJiA8ZGl2Pi4uLjwvZGl2Pn1cbiAgICAgICAgICAgIDwvU3R5bGVkVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICApfVxuICAgICAgPC9TdHlsZWRDYXRlZ29yaWNhbFZhbHVlUGlja2VyPlxuICAgICAge2VkaXRhYmxlICYmIChcbiAgICAgICAgPFBvcnRhbGVkIGxlZnQ9ezB9IHRvcD17MH0gaXNPcGVuZWQ9e3Nob3dUeXBlYWhlYWR9IG9uQ2xvc2U9e29uQ2xvc2VEcm9wZG93bn0+XG4gICAgICAgICAge3NlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgPFNlbGVjdGVkVmFsdWVzV3JhcHBlciB3aWR0aD17MjUwfSBoZWlnaHQ9ezIwMH0+XG4gICAgICAgICAgICAgIDxDaGlja2xldGVkSW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjdXN0b20tcGFsZXR0ZS1jaGlja2xldGVkLWlucHV0J31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZFZhbHVlc31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Jyd9XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbT17b25SZW1vdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG51bGx9XG4gICAgICAgICAgICAgICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ9e251bGx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlbGVjdGVkVmFsdWVzV3JhcHBlcj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxEcm9wZG93blZhbHVlc1dyYXBwZXIgd2lkdGg9ezI1MH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgICAgICAgPENhdGVnb3JpY2FsU2VsZWN0b3JDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgIG9uUmVzZXQsXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdFJlc3RcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cGVhaGVhZFxuICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiAnbGlzdC1zZWxlY3RvcicsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiAndHlwZWFoZWFkX19pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtOiAnbGlzdF9faXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RBbmNob3I6ICdsaXN0X19pdGVtX19hbmNob3InXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17YWxsVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgLy8gYWRkIHNhZmUgc3RyaW5nIGNhc3RpbmcgZm9yIHRoZSBUeXBlYWhlYWQsIHNvIGZ1enp5IHNlYXJjaCBuZXZlciByZWNlaXZlcyBub24tc3RyaW5ncywgcHJldmVudGluZyB0aGUgdG9Mb3dlckNhc2UgY3Jhc2hcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlPcHRpb249e28gPT4gU3RyaW5nKG8gPz8gJycpfVxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQsIG8pID0+IFN0cmluZyhvID8/ICcnKS5pbmNsdWRlcyhTdHJpbmcoaW5wdXQgPz8gJycpKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnU2VhcmNoJ31cbiAgICAgICAgICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e29uT3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICBjdXN0b21MaXN0Q29tcG9uZW50PXtNb2RpZmllZERyb3Bkb3duTGlzdH1cbiAgICAgICAgICAgICAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50PXtMaXN0SXRlbX1cbiAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICBzaG93T3B0aW9uc1doZW5FbXB0eVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRWYWx1ZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DYXRlZ29yaWNhbFNlbGVjdG9yQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRHJvcGRvd25WYWx1ZXNXcmFwcGVyPlxuICAgICAgICA8L1BvcnRhbGVkPlxuICAgICAgKX1cbiAgICA8L1N0eWxlZENhdGVnb3JpY2FsVmFsdWVQaWNrZXJXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IHR5cGUgQ2F0ZWdvcmljYWxDdXN0b21QYWxldHRlSW5wdXRQcm9wcyA9IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgaXNTb3J0aW5nOiBib29sZWFuO1xuICBjb2xvcjogSGV4Q29sb3I7XG4gIGNvbG9yTWFwPzogQ29sb3JNYXAgfCBudWxsO1xuICBhZGRDb2xvck1hcFZhbHVlOiAodjogKG51bWJlciB8IHN0cmluZyB8IG51bGwpW10sIGk6IG51bWJlcikgPT4gdm9pZDtcbiAgcmVtb3ZlQ29sb3JNYXBWYWx1ZTogKHY6IG51bWJlciB8IHN0cmluZywgaTogbnVtYmVyKSA9PiB2b2lkO1xuICByZXNldENvbG9yTWFwVmFsdWU6IChpOiBudW1iZXIpID0+IHZvaWQ7XG4gIHNlbGVjdFJlc3RDb2xvck1hcFZhbHVlOiAoaTogbnVtYmVyKSA9PiB2b2lkO1xuICBhY3Rpb25JY29ucz86IEFjdGlvbkljb25zO1xuICBvbkRlbGV0ZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uQWRkOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25Ub2dnbGVTa2V0Y2hlcjogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIGFsbFZhbHVlczogc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgZGlzYWJsZURlbGV0ZT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgQ2F0ZWdvcmljYWxDdXN0b21QYWxldHRlSW5wdXQ6IFJlYWN0LkZDPENhdGVnb3JpY2FsQ3VzdG9tUGFsZXR0ZUlucHV0UHJvcHM+ID0gKHtcbiAgaW5kZXgsXG4gIGlzU29ydGluZyxcbiAgY29sb3IsXG4gIGNvbG9yTWFwLFxuICBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29ucyxcbiAgb25EZWxldGUsXG4gIGRpc2FibGVEZWxldGUsXG4gIG9uVG9nZ2xlU2tldGNoZXIsXG4gIGFkZENvbG9yTWFwVmFsdWUsXG4gIHJlbW92ZUNvbG9yTWFwVmFsdWUsXG4gIHJlc2V0Q29sb3JNYXBWYWx1ZSxcbiAgc2VsZWN0UmVzdENvbG9yTWFwVmFsdWUsXG4gIGFsbFZhbHVlc1xufTogQ2F0ZWdvcmljYWxDdXN0b21QYWxldHRlSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBzZWxlY3RlZFZhbHVlczogKG51bWJlciB8IHN0cmluZyB8IG51bGwpW10gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWNvbG9yTWFwIHx8ICFjb2xvck1hcFtpbmRleF0pIHJldHVybiBbXTtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbG9yTWFwW2luZGV4XVswXTtcbiAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogdmFsdWUgIT09IG51bGwgPyBbdmFsdWVdIDogW107XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSwgW2NvbG9yTWFwLCBpbmRleF0pO1xuXG4gIGNvbnN0IG9uQ2xpY2tTd3RhY2ggPSB1c2VDYWxsYmFjaygoKSA9PiBvblRvZ2dsZVNrZXRjaGVyKGluZGV4KSwgW29uVG9nZ2xlU2tldGNoZXIsIGluZGV4XSk7XG4gIGNvbnN0IG9uQ29sb3JEZWxldGUgPSB1c2VDYWxsYmFjaygoKSA9PiBvbkRlbGV0ZShpbmRleCksIFtvbkRlbGV0ZSwgaW5kZXhdKTtcblxuICByZXR1cm4gKFxuICAgIDxTb3J0YWJsZUl0ZW0gaWQ9e2Ake2luZGV4fWB9IGlzU29ydGluZz17aXNTb3J0aW5nfT5cbiAgICAgIHtsaXN0ZW5lcnMgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGUtaW5wdXRfX2xlZnRcIj5cbiAgICAgICAgICAgIDxEcmFnSGFuZGxlIGNsYXNzTmFtZT1cImxheWVyX19kcmFnLWhhbmRsZVwiIHsuLi5saXN0ZW5lcnN9PlxuICAgICAgICAgICAgICA8YWN0aW9uSWNvbnMuc29ydCBoZWlnaHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgIDwvRHJhZ0hhbmRsZT5cbiAgICAgICAgICAgIDxDb2xvclN3YXRjaCBjb2xvcj17Y29sb3J9IG9uQ2xpY2s9e29uQ2xpY2tTd3RhY2h9IC8+XG4gICAgICAgICAgICB7Y29sb3JNYXAgJiYgY29sb3JNYXBbaW5kZXhdICYmIChcbiAgICAgICAgICAgICAgPENhdGVnb3JpY2FsU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlcz17c2VsZWN0ZWRWYWx1ZXN9XG4gICAgICAgICAgICAgICAgYWxsVmFsdWVzPXthbGxWYWx1ZXN9XG4gICAgICAgICAgICAgICAgYWRkQ29sb3JNYXBWYWx1ZT17YWRkQ29sb3JNYXBWYWx1ZX1cbiAgICAgICAgICAgICAgICByZW1vdmVDb2xvck1hcFZhbHVlPXtyZW1vdmVDb2xvck1hcFZhbHVlfVxuICAgICAgICAgICAgICAgIHJlc2V0Q29sb3JNYXBWYWx1ZT17cmVzZXRDb2xvck1hcFZhbHVlfVxuICAgICAgICAgICAgICAgIHNlbGVjdFJlc3RDb2xvck1hcFZhbHVlPXtzZWxlY3RSZXN0Q29sb3JNYXBWYWx1ZX1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGUtaW5wdXRfX3JpZ2h0XCI+XG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGUgPyAoXG4gICAgICAgICAgICAgIDxEZWxldGVDb2xvclN0b3Agb25Db2xvckRlbGV0ZT17b25Db2xvckRlbGV0ZX0gSWNvbkNvbXBvbmVudD17YWN0aW9uSWNvbnMuZGVsZXRlfSAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L1NvcnRhYmxlSXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb3R0b21BY3Rpb24gPSAoe29uQ2FuY2VsLCBvbkNvbmZpcm19KSA9PiAoXG4gIDxTdHlsZWRCdXR0b25Db250YWluZXI+XG4gICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb25maXJtLWFwcGx5X19idXR0b25cIiBzbWFsbCBvbkNsaWNrPXtvbkNvbmZpcm19PlxuICAgICAgQ29uZmlybVxuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gbGluayBzbWFsbCBvbkNsaWNrPXtvbkNhbmNlbH0+XG4gICAgICBDYW5jZWxcbiAgICA8L0J1dHRvbj5cbiAgPC9TdHlsZWRCdXR0b25Db250YWluZXI+XG4pO1xuXG5jb25zdCBTdHlsZWRDdXN0b21QYWxldHRlID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2N1c3RvbS1wYWxldHRlJ1xufSlgXG4gIG1hcmdpbi10b3A6IDhweDtcbmA7XG5cbmZ1bmN0aW9uIEN1c3RvbVBhbGV0dGVGYWN0b3J5KCk6IFJlYWN0LkZDPEN1c3RvbVBhbGV0dGVQcm9wcz4ge1xuICBjb25zdCBDdXN0b21QYWxldHRlOiBSZWFjdC5GQzxDdXN0b21QYWxldHRlUHJvcHM+ID0gKHtcbiAgICBvcmRpbmFsRG9tYWluLFxuICAgIGN1c3RvbVBhbGV0dGUsXG4gICAgc2V0Q29sb3JQYWxldHRlVUksXG4gICAgc2hvd1NrZXRjaGVyLFxuICAgIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zLFxuICAgIG9uQ2FuY2VsLFxuICAgIG9uQXBwbHlcbiAgfSkgPT4ge1xuICAgIGNvbnN0IFtpc1NvcnRpbmcsIHNldElzU29ydGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qge2NvbG9ycywgY29sb3JNYXB9ID0gY3VzdG9tUGFsZXR0ZTtcbiAgICBjb25zdCBjb2xvckJyZWFrcyA9IHVzZU1lbW8oXG4gICAgICAoKSA9PlxuICAgICAgICBjb2xvck1hcFxuICAgICAgICAgID8gY3VzdG9tUGFsZXR0ZS50eXBlID09PSAnY3VzdG9tJ1xuICAgICAgICAgICAgPyBjb2xvck1hcFRvQ29sb3JCcmVha3MoY29sb3JNYXApXG4gICAgICAgICAgICA6IGNvbG9yTWFwVG9DYXRlZ29yaWNhbENvbG9yQnJlYWtzKGNvbG9yTWFwKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgIFtjdXN0b21QYWxldHRlLnR5cGUsIGNvbG9yTWFwXVxuICAgICk7XG5cbiAgICBjb25zdCBvblBpY2tlclVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgY29sb3IgPT4ge1xuICAgICAgICBpZiAoY29sb3IgJiYgTnVtYmVyLmlzRmluaXRlKHNob3dTa2V0Y2hlcikpIHtcbiAgICAgICAgICBjb25zdCBuZXdDdXN0b21QYWxldHRlID0gdXBkYXRlQ3VzdG9tUGFsZXR0ZUNvbG9yKFxuICAgICAgICAgICAgY3VzdG9tUGFsZXR0ZSxcbiAgICAgICAgICAgIE51bWJlcihzaG93U2tldGNoZXIpLFxuICAgICAgICAgICAgY29sb3IuaGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICAgICAgICBjdXN0b21QYWxldHRlOiBuZXdDdXN0b21QYWxldHRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbY3VzdG9tUGFsZXR0ZSwgc2hvd1NrZXRjaGVyLCBzZXRDb2xvclBhbGV0dGVVSV1cbiAgICApO1xuICAgIGNvbnN0IG9uVG9nZ2xlU2tldGNoZXIgPSB1c2VDYWxsYmFjayhcbiAgICAgIHZhbCA9PiB7XG4gICAgICAgIHNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgICAgICBzaG93U2tldGNoZXI6IHZhbFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBbc2V0Q29sb3JQYWxldHRlVUldXG4gICAgKTtcbiAgICBjb25zdCBvbkRlbGV0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgaW5kZXggPT4ge1xuICAgICAgICBjb25zdCBuZXdDdXN0b21QYWxldHRlID0gcmVtb3ZlQ3VzdG9tUGFsZXR0ZUNvbG9yKGN1c3RvbVBhbGV0dGUsIGluZGV4KTtcbiAgICAgICAgc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgICAgIGN1c3RvbVBhbGV0dGU6IG5ld0N1c3RvbVBhbGV0dGVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW2N1c3RvbVBhbGV0dGUsIHNldENvbG9yUGFsZXR0ZVVJXVxuICAgICk7XG5cbiAgICBjb25zdCBvbkFkZCA9IHVzZUNhbGxiYWNrKFxuICAgICAgaW5kZXggPT4ge1xuICAgICAgICAvLyBhZGQgY29sb3IgYXQgdGhlIGVuZFxuICAgICAgICBjb25zdCBuZXdDdXN0b21QYWxldHRlID0gYWRkQ3VzdG9tUGFsZXR0ZUNvbG9yKGN1c3RvbVBhbGV0dGUsIGluZGV4KTtcbiAgICAgICAgc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgICAgIGN1c3RvbVBhbGV0dGU6IG5ld0N1c3RvbVBhbGV0dGVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW2N1c3RvbVBhbGV0dGUsIHNldENvbG9yUGFsZXR0ZVVJXVxuICAgICk7XG5cbiAgICBjb25zdCBvbkFkZENhdGVnb3JpY2FsU3RlcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIG9uQWRkKGNvbG9ycy5sZW5ndGggLSAxKTtcbiAgICB9LCBbY29sb3JzLmxlbmd0aCwgb25BZGRdKTtcblxuICAgIGNvbnN0IG9uU3dhdGNoQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBvblRvZ2dsZVNrZXRjaGVyKGZhbHNlKTtcbiAgICB9LCBbb25Ub2dnbGVTa2V0Y2hlcl0pO1xuXG4gICAgY29uc3Qgb25Db25maXJtID0gdXNlQ2FsbGJhY2soXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkNhbmNlbCgpO1xuICAgICAgICBvbkFwcGx5KGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBbb25DYW5jZWwsIG9uQXBwbHldXG4gICAgKTtcblxuICAgIGNvbnN0IG9uU29ydEVuZCA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50OiBEcmFnRW5kRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZSwgb3Zlcn0gPSBldmVudDtcbiAgICAgICAgaWYgKG92ZXIgJiYgYWN0aXZlLmlkICE9PSBvdmVyLmlkKSB7XG4gICAgICAgICAgY29uc3Qgb2xkSW5kZXggPSBjb2xvcnMuZmluZEluZGV4KChfLCBpbmRleCkgPT4gYCR7aW5kZXh9YCA9PT0gYWN0aXZlLmlkKTtcbiAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGNvbG9ycy5maW5kSW5kZXgoKF8sIGluZGV4KSA9PiBgJHtpbmRleH1gID09PSBvdmVyLmlkKTtcbiAgICAgICAgICBjb25zdCBuZXdDdXN0b21QYWxldHRlID0gc29ydEN1c3RvbVBhbGV0dGVDb2xvcihjdXN0b21QYWxldHRlLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgICAgICAgIHNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgICAgICAgIGN1c3RvbVBhbGV0dGU6IG5ld0N1c3RvbVBhbGV0dGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJc1NvcnRpbmcoZmFsc2UpO1xuICAgICAgfSxcbiAgICAgIFtjb2xvcnMsIGN1c3RvbVBhbGV0dGUsIHNldElzU29ydGluZywgc2V0Q29sb3JQYWxldHRlVUldXG4gICAgKTtcblxuICAgIGNvbnN0IG9uU29ydFN0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgc2V0SXNTb3J0aW5nKHRydWUpO1xuICAgIH0sIFtzZXRJc1NvcnRpbmddKTtcblxuICAgIGNvbnN0IGlucHV0Q29sb3JIZXggPSB1c2VDYWxsYmFjayhcbiAgICAgIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q3VzdG9tUGFsZXR0ZSA9IHVwZGF0ZUN1c3RvbVBhbGV0dGVDb2xvcihjdXN0b21QYWxldHRlLCBpbmRleCwgdmFsdWUpO1xuICAgICAgICAvLyBzZXRDb2xvcnMobmV3Q29sb3JzKTtcbiAgICAgICAgc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgICAgIGN1c3RvbVBhbGV0dGU6IG5ld0N1c3RvbVBhbGV0dGVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW2N1c3RvbVBhbGV0dGUsIHNldENvbG9yUGFsZXR0ZVVJXVxuICAgICk7XG5cbiAgICBjb25zdCBlZGl0Q29sb3JNYXBWYWx1ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoIWN1c3RvbVBhbGV0dGUuY29sb3JNYXApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3Q29sb3JNYXAgPSBjdXN0b21QYWxldHRlLmNvbG9yTWFwLm1hcChcbiAgICAgICAgICAoY20sIGkpID0+IChpID09PSBpbmRleCA/IFt2YWx1ZSwgY21bMV1dIDogY20pIGFzIFtzdHJpbmcsIHN0cmluZ11cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzb3J0IHRoZSB1c2VyIGlucHV0cyBpbiBjYXNlIHRoZSBicmVhayB2YWx1ZXMgYXJlIG5vdCBvcmRlcmVkXG4gICAgICAgIGNvbnN0IGJyZWFrcyA9IG5ld0NvbG9yTWFwXG4gICAgICAgICAgLm1hcChjbSA9PiBjbVswXSBhcyBzdHJpbmcgfCBudWxsKVxuICAgICAgICAgIC5zbGljZSgwLCAtMSlcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpKVxuICAgICAgICAgIC5jb25jYXQobnVsbCk7XG4gICAgICAgIGNvbnN0IHNvcnRlZE5ld0NvbG9yTWFwOiBDb2xvck1hcCA9IG5ld0NvbG9yTWFwLm1hcCgoY20sIGkpID0+IFticmVha3NbaV0sIGNtWzFdXSk7XG5cbiAgICAgICAgc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgICAgIGN1c3RvbVBhbGV0dGU6IHtcbiAgICAgICAgICAgIC4uLmN1c3RvbVBhbGV0dGUsXG4gICAgICAgICAgICBjb2xvck1hcDogc29ydGVkTmV3Q29sb3JNYXBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtzZXRDb2xvclBhbGV0dGVVSSwgY3VzdG9tUGFsZXR0ZV1cbiAgICApO1xuXG4gICAgLy8gcmVtb3ZlIGEgc2VsZWN0ZWQgY2F0ZWdvcnkgaXRlbSBmcm9tIGEgY29sb3IgbWFwXG4gICAgY29uc3QgcmVtb3ZlQ2F0ZWdvcmljYWxDb2xvck1hcFZhbHVlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCFjb2xvck1hcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICAgICAgY3VzdG9tUGFsZXR0ZToge1xuICAgICAgICAgICAgLi4uY3VzdG9tUGFsZXR0ZSxcbiAgICAgICAgICAgIGNvbG9yTWFwOiByZW1vdmVDYXRlZ29yaWNhbFZhbHVlRnJvbUNvbG9yTWFwKGNvbG9yTWFwLCBpdGVtLCBpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtzZXRDb2xvclBhbGV0dGVVSSwgY3VzdG9tUGFsZXR0ZSwgY29sb3JNYXBdXG4gICAgKTtcblxuICAgIC8vIGFkZCBzZWxlY3RlZCBjYXRlZ29yaWNhbCBpdGVtcyB0byBhIGNvbG9yIG1hcFxuICAgIGNvbnN0IGFkZENhdGVnb3JpY2FsQ29sb3JNYXBWYWx1ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGl0ZW1zLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoIWNvbG9yTWFwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgICAgICBjdXN0b21QYWxldHRlOiB7XG4gICAgICAgICAgICAuLi5jdXN0b21QYWxldHRlLFxuICAgICAgICAgICAgY29sb3JNYXA6IGFkZENhdGVnb3JpY2FsVmFsdWVzVG9Db2xvck1hcChjb2xvck1hcCwgaXRlbXMsIGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW3NldENvbG9yUGFsZXR0ZVVJLCBjdXN0b21QYWxldHRlLCBjb2xvck1hcF1cbiAgICApO1xuXG4gICAgLy8gcmVzZXQgYSBjb2xvciBtYXBcbiAgICBjb25zdCByZXNldENhdGVnb3JpY2FsQ29sb3JNYXBWYWx1ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgaW5kZXggPT4ge1xuICAgICAgICBpZiAoIWNvbG9yTWFwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgICAgICBjdXN0b21QYWxldHRlOiB7XG4gICAgICAgICAgICAuLi5jdXN0b21QYWxldHRlLFxuICAgICAgICAgICAgY29sb3JNYXA6IHJlc2V0Q2F0ZWdvcmljYWxDb2xvck1hcEJ5SW5kZXgoY29sb3JNYXAsIGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW3NldENvbG9yUGFsZXR0ZVVJLCBjdXN0b21QYWxldHRlLCBjb2xvck1hcF1cbiAgICApO1xuXG4gICAgLy8gc2VsZWN0IHRoZSByZXN0IHZhbHVlcyBmb3IgYSBjb2xvciBtYXBcbiAgICBjb25zdCBzZWxlY3RSZXN0Q2F0ZWdvcmljYWxDb2xvck1hcCA9IHVzZUNhbGxiYWNrKFxuICAgICAgaW5kZXggPT4ge1xuICAgICAgICBpZiAoIWNvbG9yTWFwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgICAgICBjdXN0b21QYWxldHRlOiB7XG4gICAgICAgICAgICAuLi5jdXN0b21QYWxldHRlLFxuICAgICAgICAgICAgY29sb3JNYXA6IHNlbGVjdFJlc3RDYXRlZ29yaWNhbENvbG9yTWFwQnlJbmRleChjb2xvck1hcCwgaW5kZXgsIG9yZGluYWxEb21haW4pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBbc2V0Q29sb3JQYWxldHRlVUksIGN1c3RvbVBhbGV0dGUsIGNvbG9yTWFwLCBvcmRpbmFsRG9tYWluXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZEN1c3RvbVBhbGV0dGU+XG4gICAgICAgIDxXcmFwcGVkU29ydGFibGVDb250YWluZXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tcGFsZXR0ZV9fc29ydGFibGUtY29udGFpbmVyXCJcbiAgICAgICAgICBvblNvcnRFbmQ9e29uU29ydEVuZH1cbiAgICAgICAgICBvblNvcnRTdGFydD17b25Tb3J0U3RhcnR9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29sb3JzLm1hcCgoY29sb3IsIGluZGV4KSA9PlxuICAgICAgICAgICAgY3VzdG9tUGFsZXR0ZS50eXBlID09PSAnY3VzdG9tJyA/IChcbiAgICAgICAgICAgICAgPEN1c3RvbVBhbGV0dGVJbnB1dFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY29sb3JCcmVha3M9e2NvbG9yQnJlYWtzfVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpc1NvcnRpbmc9e2lzU29ydGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgICAgaW5wdXRDb2xvckhleD17aW5wdXRDb2xvckhleH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlQXBwZW5kPXtjb2xvcnMubGVuZ3RoID49IDIwfVxuICAgICAgICAgICAgICAgIGRpc2FibGVEZWxldGU9e2NvbG9ycy5sZW5ndGggPD0gMn1cbiAgICAgICAgICAgICAgICBhY3Rpb25JY29ucz17YWN0aW9uSWNvbnN9XG4gICAgICAgICAgICAgICAgb25BZGQ9e29uQWRkfVxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZVNrZXRjaGVyPXtvblRvZ2dsZVNrZXRjaGVyfVxuICAgICAgICAgICAgICAgIGVkaXRDb2xvck1hcFZhbHVlPXtlZGl0Q29sb3JNYXBWYWx1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIG9yZGluYWxEb21haW4gJiYgKFxuICAgICAgICAgICAgICAgIDxDYXRlZ29yaWNhbEN1c3RvbVBhbGV0dGVJbnB1dFxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNvbG9yTWFwPXtjb2xvck1hcH1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGlzU29ydGluZz17aXNTb3J0aW5nfVxuICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgYWN0aW9uSWNvbnM9e2FjdGlvbkljb25zfVxuICAgICAgICAgICAgICAgICAgb25BZGQ9e29uQWRkfVxuICAgICAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbGV0ZT17Y29sb3JzLmxlbmd0aCA8PSAyfVxuICAgICAgICAgICAgICAgICAgb25Ub2dnbGVTa2V0Y2hlcj17b25Ub2dnbGVTa2V0Y2hlcn1cbiAgICAgICAgICAgICAgICAgIGFkZENvbG9yTWFwVmFsdWU9e2FkZENhdGVnb3JpY2FsQ29sb3JNYXBWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbG9yTWFwVmFsdWU9e3JlbW92ZUNhdGVnb3JpY2FsQ29sb3JNYXBWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIHJlc2V0Q29sb3JNYXBWYWx1ZT17cmVzZXRDYXRlZ29yaWNhbENvbG9yTWFwVmFsdWV9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RSZXN0Q29sb3JNYXBWYWx1ZT17c2VsZWN0UmVzdENhdGVnb3JpY2FsQ29sb3JNYXB9XG4gICAgICAgICAgICAgICAgICBhbGxWYWx1ZXM9e29yZGluYWxEb21haW59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvV3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyPlxuICAgICAgICB7Y3VzdG9tUGFsZXR0ZS50eXBlID09PSAnY3VzdG9tT3JkaW5hbCcgJiYgKFxuICAgICAgICAgIDxTdHlsZWRBZGRTdGVwQ29udGFpbmVyPlxuICAgICAgICAgICAgPEFkZENvbG9yU3RvcCBvbkNvbG9yQWRkPXtvbkFkZENhdGVnb3JpY2FsU3RlcH0gSWNvbkNvbXBvbmVudD17YWN0aW9uSWNvbnMuYWRkfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBsaW5rIHNpemU9XCJzbWFsXCIgb25DbGljaz17b25BZGRDYXRlZ29yaWNhbFN0ZXB9PlxuICAgICAgICAgICAgICBBZGQgU3RlcFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TdHlsZWRBZGRTdGVwQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgICA8RGl2aWRlckxpbmUgLz5cbiAgICAgICAgey8qIENhbmNlbCBvciBDb25maXJtIEJ1dHRvbnMgKi99XG4gICAgICAgIDxCb3R0b21BY3Rpb24gb25DYW5jZWw9e29uQ2FuY2VsfSBvbkNvbmZpcm09e29uQ29uZmlybX0gLz5cbiAgICAgICAgPFBvcnRhbGVkIGlzT3BlbmVkPXtzaG93U2tldGNoZXIgIT09IGZhbHNlfSBsZWZ0PXsyODB9IHRvcD17LTMwMH0gb25DbG9zZT17b25Td2F0Y2hDbG9zZX0+XG4gICAgICAgICAgPEN1c3RvbVBpY2tlciBjb2xvcj17Y29sb3JzW051bWJlcihzaG93U2tldGNoZXIpXX0gb25DaGFuZ2U9e29uUGlja2VyVXBkYXRlfSAvPlxuICAgICAgICA8L1BvcnRhbGVkPlxuICAgICAgPC9TdHlsZWRDdXN0b21QYWxldHRlPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIEN1c3RvbVBhbGV0dGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVBhbGV0dGVGYWN0b3J5O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFBQSxXQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFDLHVCQUFBLENBQUFGLE9BQUE7QUFTQSxJQUFBRyxLQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFTQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7QUFDQSxJQUFBTSxVQUFBLEdBQUFOLE9BQUE7QUFDQSxJQUFBTyxpQkFBQSxHQUFBTCx1QkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQVEsU0FBQSxHQUFBVCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVMsa0JBQUEsR0FBQVQsT0FBQTtBQUNBLElBQUFVLFVBQUEsR0FBQVgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFXLGdCQUFBLEdBQUFaLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBWSxhQUFBLEdBQUFWLHVCQUFBLENBQUFGLE9BQUE7QUFFQSxJQUFBYSxJQUFBLEdBQUFiLE9BQUE7QUFDQSxJQUFBYyxLQUFBLEdBQUFkLE9BQUE7QUFFQSxJQUFBZSxLQUFBLEdBQUFmLE9BQUE7QUFjQSxJQUFBZ0IsTUFBQSxHQUFBaEIsT0FBQTtBQUVBLElBQUFpQixhQUFBLEdBQUFsQixzQkFBQSxDQUFBQyxPQUFBO0FBQTJDLElBQUFrQixTQUFBO0FBQUEsSUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxn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