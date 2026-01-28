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
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/react"));
var _uniq = _interopRequireDefault(require("lodash/uniq"));
var _core = require("@dnd-kit/core");
var _reactIntl = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/react-intl");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _styledComponents = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/styled-components"));
var _portaled = _interopRequireDefault(require("../../common/portaled"));
var _styledComponents2 = require("../../common/styled-components");
var _typeahead = _interopRequireDefault(require("../../common/item-selector/typeahead"));
var _chickletedInput = _interopRequireDefault(require("../../common/item-selector/chickleted-input"));
var _dropdownList = _interopRequireWildcard(require("../../common/item-selector/dropdown-list"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/common-utils/src");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/constants/src");
var _src3 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/utils/src");
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
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "modal.button.defaultConfirm",
    defaultMessage: "Confirm"
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "modal.button.defaultCancel",
    defaultMessage: "Cancel"
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xhc3NuYW1lcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfdW5pcSIsIl9jb3JlIiwiX3JlYWN0SW50bCIsIl9zb3J0YWJsZSIsIl91dGlsaXRpZXMiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9wb3J0YWxlZCIsIl9zdHlsZWRDb21wb25lbnRzMiIsIl90eXBlYWhlYWQiLCJfY2hpY2tsZXRlZElucHV0IiwiX2Ryb3Bkb3duTGlzdCIsIl9zcmMiLCJfc3JjMiIsIl9zcmMzIiwiX2ljb25zIiwiX2N1c3RvbVBpY2tlciIsIl9leGNsdWRlZCIsIl90ZW1wbGF0ZU9iamVjdCIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfdGVtcGxhdGVPYmplY3QzIiwiX3RlbXBsYXRlT2JqZWN0NCIsIl90ZW1wbGF0ZU9iamVjdDUiLCJfdGVtcGxhdGVPYmplY3Q2IiwiX3RlbXBsYXRlT2JqZWN0NyIsIl90ZW1wbGF0ZU9iamVjdDgiLCJfdGVtcGxhdGVPYmplY3Q5IiwiX3RlbXBsYXRlT2JqZWN0MTAiLCJfdGVtcGxhdGVPYmplY3QxMSIsIl90ZW1wbGF0ZU9iamVjdDEyIiwiX3RlbXBsYXRlT2JqZWN0MTMiLCJfdGVtcGxhdGVPYmplY3QxNCIsIl90ZW1wbGF0ZU9iamVjdDE1IiwiX3RlbXBsYXRlT2JqZWN0MTYiLCJfdGVtcGxhdGVPYmplY3QxNyIsIl90ZW1wbGF0ZU9iamVjdDE4IiwiX3RlbXBsYXRlT2JqZWN0MTkiLCJfdGVtcGxhdGVPYmplY3QyMCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiZGVmYXVsdEFjdGlvbkljb25zIiwiVHJhc2giLCJzb3J0IiwiVmVydERvdHMiLCJhZGQiLCJBZGQiLCJkcmFnSGFuZGxlQWN0aXZlIiwiY3NzIiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbDIiLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9ySGwiLCJDb2xvclBhbGV0dGVJdGVtIiwiZXhwb3J0cyIsInN0eWxlZCIsImRpdiIsImRyb3Bkb3duV3JhcHBlcloiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsIlN0eWxlZERyYWdIYW5kbGUiLCJTdHlsZWRBY3Rpb24iLCJzdWJ0ZXh0Q29sb3IiLCJzdWJ0ZXh0Q29sb3JBY3RpdmUiLCJEaXZpZGVyTGluZSIsImRyb3Bkb3duTGlzdEJvcmRlclRvcCIsIkNvbG9yU3dhdGNoIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJjb2xvciIsImJveFNoYWRvdyIsIlN0eWxlZEJ1dHRvbkNvbnRhaW5lciIsIlN0eWxlZEFkZFN0ZXBDb250YWluZXIiLCJpbnB1dENvbG9yIiwiU3R5bGVkSW5wdXQiLCJJbnB1dCIsIndpdGhDb25maWciLCJzaG91bGRGb3J3YXJkUHJvcCIsIl9wcm9wcyR3aWR0aCIsIndpZHRoIiwiX3Byb3BzJHRleHRBbGlnbiIsInRleHRBbGlnbiIsImRpc2FibGVkIiwiSW5wdXRUZXh0IiwiaW5wdXQiLCJfcHJvcHMkd2lkdGgyIiwiX3Byb3BzJHRleHRBbGlnbjIiLCJTb3J0YWJsZUl0ZW0iLCJfcmVmIiwiaWQiLCJjaGlsZHJlbiIsImlzU29ydGluZyIsIl91c2VTb3J0YWJsZSIsInVzZVNvcnRhYmxlIiwiYXR0cmlidXRlcyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiaXNEcmFnZ2luZyIsInN0eWxlIiwiQ1NTIiwiVHJhbnNmb3JtIiwidG9TdHJpbmciLCJ6SW5kZXgiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMyIiwicmVmIiwiY2xhc3NuYW1lcyIsInNvcnRpbmciLCJXcmFwcGVkU29ydGFibGVDb250YWluZXIiLCJfcmVmMiIsIm9uU29ydEVuZCIsIm9uU29ydFN0YXJ0Iiwic2Vuc29ycyIsInVzZVNlbnNvcnMiLCJ1c2VTZW5zb3IiLCJQb2ludGVyU2Vuc29yIiwiS2V5Ym9hcmRTZW5zb3IiLCJEbmRDb250ZXh0IiwiY29sbGlzaW9uRGV0ZWN0aW9uIiwiY2xvc2VzdENlbnRlciIsIm9uRHJhZ0VuZCIsIm9uRHJhZ1N0YXJ0IiwiU29ydGFibGVDb250ZXh0IiwiaXRlbXMiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiXyIsImluZGV4IiwiY29uY2F0Iiwic3RyYXRlZ3kiLCJ2ZXJ0aWNhbExpc3RTb3J0aW5nU3RyYXRlZ3kiLCJEcmFnSGFuZGxlIiwiX3JlZjMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiQ29sb3JQYWxldHRlSW5wdXQiLCJfcmVmNCIsInZhbHVlIiwib25DaGFuZ2UiLCJlZGl0YWJsZSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5MiIsInN0YXRlVmFsdWUiLCJzZXRWYWx1ZSIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwib25LZXlEb3duIiwidXNlQ2FsbGJhY2siLCJrZXlDb2RlIiwiS2V5RXZlbnQiLCJET01fVktfRU5URVIiLCJET01fVktfUkVUVVJOIiwiY3VycmVudCIsImJsdXIiLCJfb25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkJsdXIiLCJzZWNvbmRhcnkiLCJEYXNoIiwiU3R5bGVkUmFuZ2VJbnB1dCIsIlN0eWxlZENvbG9ySGV4SW5wdXQiLCJFZGl0YWJsZUNvbG9yUmFuZ2UiLCJfcmVmNSIsIml0ZW0iLCJpc0xhc3QiLCJlZGl0Q29sb3JNYXAiLCJoYXNJbnB1dHMiLCJBcnJheSIsImlzQXJyYXkiLCJpbnB1dHMiLCJsZWZ0SW5wdXQiLCJ1bmRlZmluZWQiLCJyaWdodElucHV0Iiwibm9NaW5Cb3VuZCIsIk51bWJlciIsImlzRmluaXRlIiwibm9NYXhCb3VuZCIsIm9uQ2hhbmdlTGVmdCIsInZhbCIsInBhcnNlRmxvYXQiLCJvbkNoYW5nZVJpZ2h0IiwiU3RyaW5nIiwiQWRkQ29sb3JTdG9wIiwiX3JlZjYiLCJvbkNvbG9yQWRkIiwiSWNvbkNvbXBvbmVudCIsIm9uQ2xpY2siLCJoZWlnaHQiLCJEZWxldGVDb2xvclN0b3AiLCJfcmVmNyIsIm9uQ29sb3JEZWxldGUiLCJDdXN0b21QYWxldHRlSW5wdXQiLCJfcmVmOCIsImNvbG9yQnJlYWtzIiwiaW5wdXRDb2xvckhleCIsImVkaXRDb2xvck1hcFZhbHVlIiwiX3JlZjgkYWN0aW9uSWNvbnMiLCJhY3Rpb25JY29ucyIsImRpc2FibGVBcHBlbmQiLCJkaXNhYmxlRGVsZXRlIiwib25EZWxldGUiLCJvbkFkZCIsIm9uVG9nZ2xlU2tldGNoZXIiLCJvbkNsaWNrU3d0YWNoIiwib25Db2xvcklucHV0IiwidiIsInNob3dIZXhJbnB1dCIsIkZyYWdtZW50IiwidG9VcHBlckNhc2UiLCJpc051bWVyaWNDb2xvckJyZWFrcyIsIlN0eWxlZENhdGVnb3JpY2FsVmFsdWVQaWNrZXJXcmFwcGVyIiwiU3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlciIsIm5vQm9yZGVyIiwiRHJvcGRvd25WYWx1ZXNXcmFwcGVyIiwiU2VsZWN0ZWRWYWx1ZXNXcmFwcGVyIiwiU3R5bGVkRHJvcGRvd25IZWFkZXIiLCJTdHlsZWRUb29sdGlwQ29udGVudCIsIk5VTUJFUl9WQUxVRVNfSU5fVE9PTFRJUCIsIkNhdGVnb3JpY2FsU2VsZWN0b3JDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm9uU2VsZWN0UmVzdCIsIm9uUmVzZXQiLCJNb2RpZmllZERyb3Bkb3duTGlzdCIsIl9Ecm9wZG93bkxpc3QiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJyZW5kZXIiLCJfdGhpcyIsIkNvbnN1bWVyIiwiY29udGV4dCIsIkJ1dHRvbiIsImxpbmsiLCJzaXplIiwiRHJvcGRvd25MaXN0IiwiQ2F0ZWdvcmljYWxTZWxlY3RvciIsIl9yZWY5Iiwic2VsZWN0ZWRWYWx1ZXMiLCJhbGxWYWx1ZXMiLCJhZGRDb2xvck1hcFZhbHVlIiwicmVtb3ZlQ29sb3JNYXBWYWx1ZSIsInJlc2V0Q29sb3JNYXBWYWx1ZSIsInNlbGVjdFJlc3RDb2xvck1hcFZhbHVlIiwiX3JlZjkkZWRpdGFibGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNob3dUeXBlYWhlYWQiLCJzZXRTaG93VHlwZWFoZWFkIiwib25PcHRpb25TZWxlY3RlZCIsInByZXZpb3VzU2VsZWN0ZWQiLCJ0b0FycmF5IiwidW5pcSIsIm9uT3BlbkRyb3Bkb3duIiwib25DbG9zZURyb3Bkb3duIiwib25SZW1vdmVJdGVtIiwiVG9vbHRpcCIsInBsYWNlIiwiaW50ZXJhY3RpdmUiLCJzbGljZSIsImxlZnQiLCJ0b3AiLCJpc09wZW5lZCIsIm9uQ2xvc2UiLCJzZWxlY3RlZEl0ZW1zIiwicGxhY2Vob2xkZXIiLCJyZW1vdmVJdGVtIiwiQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQiLCJwb3NpdGlvbiIsIlByb3ZpZGVyIiwiY3VzdG9tQ2xhc3NlcyIsInJlc3VsdHMiLCJsaXN0SXRlbSIsImxpc3RBbmNob3IiLCJvcHRpb25zIiwiZGlzcGxheU9wdGlvbiIsImZpbHRlck9wdGlvbiIsImluY2x1ZGVzIiwiY3VzdG9tTGlzdENvbXBvbmVudCIsImN1c3RvbUxpc3RJdGVtQ29tcG9uZW50IiwiTGlzdEl0ZW0iLCJzZWFyY2hhYmxlIiwic2hvd09wdGlvbnNXaGVuRW1wdHkiLCJDYXRlZ29yaWNhbEN1c3RvbVBhbGV0dGVJbnB1dCIsIl9yZWYxMCIsImNvbG9yTWFwIiwiX3JlZjEwJGFjdGlvbkljb25zIiwidXNlTWVtbyIsInZhbHVlcyIsIkJvdHRvbUFjdGlvbiIsIl9yZWYxMSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwic21hbGwiLCJGb3JtYXR0ZWRNZXNzYWdlIiwiZGVmYXVsdE1lc3NhZ2UiLCJTdHlsZWRDdXN0b21QYWxldHRlIiwiQ3VzdG9tUGFsZXR0ZUZhY3RvcnkiLCJDdXN0b21QYWxldHRlIiwiX3JlZjEyIiwib3JkaW5hbERvbWFpbiIsImN1c3RvbVBhbGV0dGUiLCJzZXRDb2xvclBhbGV0dGVVSSIsInNob3dTa2V0Y2hlciIsIl9yZWYxMiRhY3Rpb25JY29ucyIsIm9uQXBwbHkiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInNldElzU29ydGluZyIsImNvbG9ycyIsInR5cGUiLCJjb2xvck1hcFRvQ29sb3JCcmVha3MiLCJjb2xvck1hcFRvQ2F0ZWdvcmljYWxDb2xvckJyZWFrcyIsIm9uUGlja2VyVXBkYXRlIiwibmV3Q3VzdG9tUGFsZXR0ZSIsInVwZGF0ZUN1c3RvbVBhbGV0dGVDb2xvciIsImhleCIsInJlbW92ZUN1c3RvbVBhbGV0dGVDb2xvciIsImFkZEN1c3RvbVBhbGV0dGVDb2xvciIsIm9uQWRkQ2F0ZWdvcmljYWxTdGVwIiwib25Td2F0Y2hDbG9zZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhY3RpdmUiLCJvdmVyIiwib2xkSW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdJbmRleCIsInNvcnRDdXN0b21QYWxldHRlQ29sb3IiLCJuZXdDb2xvck1hcCIsImNtIiwiYnJlYWtzIiwiYiIsInNvcnRlZE5ld0NvbG9yTWFwIiwicmVtb3ZlQ2F0ZWdvcmljYWxDb2xvck1hcFZhbHVlIiwicmVtb3ZlQ2F0ZWdvcmljYWxWYWx1ZUZyb21Db2xvck1hcCIsImFkZENhdGVnb3JpY2FsQ29sb3JNYXBWYWx1ZSIsImFkZENhdGVnb3JpY2FsVmFsdWVzVG9Db2xvck1hcCIsInJlc2V0Q2F0ZWdvcmljYWxDb2xvck1hcFZhbHVlIiwicmVzZXRDYXRlZ29yaWNhbENvbG9yTWFwQnlJbmRleCIsInNlbGVjdFJlc3RDYXRlZ29yaWNhbENvbG9yTWFwIiwic2VsZWN0UmVzdENhdGVnb3JpY2FsQ29sb3JNYXBCeUluZGV4IiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zcmMvc2lkZS1wYW5lbC9sYXllci1wYW5lbC9jdXN0b20tcGFsZXR0ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy8gQ29weXJpZ2h0IGNvbnRyaWJ1dG9ycyB0byB0aGUga2VwbGVyLmdsIHByb2plY3RcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHtcbiAgRWxlbWVudFR5cGUsXG4gIFByb3BzV2l0aENoaWxkcmVuLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC91bmlxJztcbmltcG9ydCB7XG4gIERuZENvbnRleHQsXG4gIGNsb3Nlc3RDZW50ZXIsXG4gIEtleWJvYXJkU2Vuc29yLFxuICBQb2ludGVyU2Vuc29yLFxuICB1c2VTZW5zb3IsXG4gIHVzZVNlbnNvcnMsXG4gIERyYWdFbmRFdmVudFxufSBmcm9tICdAZG5kLWtpdC9jb3JlJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IFNvcnRhYmxlQ29udGV4dCwgdXNlU29ydGFibGUsIHZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneSB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IENTUyB9IGZyb20gJ0BkbmQta2l0L3V0aWxpdGllcyc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQb3J0YWxlZCBmcm9tICcuLi8uLi9jb21tb24vcG9ydGFsZWQnO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgVHlwZWFoZWFkIGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL3R5cGVhaGVhZCc7XG5pbXBvcnQgQ2hpY2tsZXRlZElucHV0IGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQnO1xuaW1wb3J0IERyb3Bkb3duTGlzdCwgeyBMaXN0SXRlbSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xuaW1wb3J0IHsgc2hvdWxkRm9yd2FyZFByb3AgfSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJ0BrZXBsZXIuZ2wvY29tbW9uLXV0aWxzJztcbmltcG9ydCB7IEtleUV2ZW50IH0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29sb3JNYXAsIENvbG9yVUksIEhleENvbG9yLCBOZXN0ZWRQYXJ0aWFsIH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQge1xuICBhZGRDYXRlZ29yaWNhbFZhbHVlc1RvQ29sb3JNYXAsXG4gIGFkZEN1c3RvbVBhbGV0dGVDb2xvcixcbiAgY29sb3JNYXBUb0NhdGVnb3JpY2FsQ29sb3JCcmVha3MsXG4gIGNvbG9yTWFwVG9Db2xvckJyZWFrcyxcbiAgaXNOdW1lcmljQ29sb3JCcmVha3MsXG4gIHJlc2V0Q2F0ZWdvcmljYWxDb2xvck1hcEJ5SW5kZXgsXG4gIHJlbW92ZUNhdGVnb3JpY2FsVmFsdWVGcm9tQ29sb3JNYXAsXG4gIHJlbW92ZUN1c3RvbVBhbGV0dGVDb2xvcixcbiAgc2VsZWN0UmVzdENhdGVnb3JpY2FsQ29sb3JNYXBCeUluZGV4LFxuICBzb3J0Q3VzdG9tUGFsZXR0ZUNvbG9yLFxuICB1cGRhdGVDdXN0b21QYWxldHRlQ29sb3Jcbn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQgeyBDb2xvckJyZWFrLCBDb2xvckJyZWFrT3JkaW5hbCB9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHsgQWRkLCBUcmFzaCwgVmVydERvdHMgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ3VzdG9tUGlja2VyIGZyb20gJy4vY3VzdG9tLXBpY2tlcic7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkljb25zID0ge1xuICBkZWxldGU6IEVsZW1lbnRUeXBlO1xuICBzb3J0OiBFbGVtZW50VHlwZTtcbiAgYWRkOiBFbGVtZW50VHlwZTtcbn07XG5cbmV4cG9ydCB0eXBlIEVkaXRDb2xvck1hcEZ1bmMgPSAodjogbnVtYmVyLCBpOiBudW1iZXIpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBTZXRDb2xvclVJRnVuYyA9IChuZXdDb25maWc6IE5lc3RlZFBhcnRpYWw8Q29sb3JVST4pID0+IHZvaWQ7XG5cbi8qKlxuICogRWRpdGFibGVDb2xvclJhbmdlXG4gKi9cbmV4cG9ydCB0eXBlIEVkaXRhYmxlQ29sb3JSYW5nZVByb3BzID0ge1xuICBpdGVtOiBDb2xvckJyZWFrO1xuICBpc0xhc3Q6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIGVkaXRDb2xvck1hcD86IEVkaXRDb2xvck1hcEZ1bmM7XG4gIGVkaXRhYmxlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgQ3VzdG9tUGFsZXR0ZVByb3BzID0ge1xuICBjdXN0b21QYWxldHRlOiBDb2xvclVJWydjdXN0b21QYWxldHRlJ107XG4gIHNldENvbG9yUGFsZXR0ZVVJOiBTZXRDb2xvclVJRnVuYztcbiAgc2hvd1NrZXRjaGVyOiBudW1iZXIgfCBib29sZWFuO1xuICBvcmRpbmFsRG9tYWluPzogc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgYWN0aW9uSWNvbnM/OiBBY3Rpb25JY29ucztcbiAgb25BcHBseTogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IHR5cGUgQ3VzdG9tUGFsZXR0ZUlucHV0UHJvcHMgPSB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGlzU29ydGluZzogYm9vbGVhbjtcbiAgY29sb3I6IEhleENvbG9yO1xuICBjb2xvckJyZWFrczogQ29sb3JCcmVha09yZGluYWxbXSB8IENvbG9yQnJlYWtbXSB8IG51bGw7XG4gIGlucHV0Q29sb3JIZXg6IChpbmRleDogbnVtYmVyLCB2OiBIZXhDb2xvcikgPT4gdm9pZDtcbiAgZWRpdENvbG9yTWFwVmFsdWU6IEVkaXRDb2xvck1hcEZ1bmM7XG4gIGFjdGlvbkljb25zPzogQWN0aW9uSWNvbnM7XG4gIGRpc2FibGVBcHBlbmQ/OiBib29sZWFuO1xuICBkaXNhYmxlRGVsZXRlPzogYm9vbGVhbjtcbiAgb25EZWxldGU6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkFkZDogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uVG9nZ2xlU2tldGNoZXI6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xufTtcblxuY29uc3QgZGVmYXVsdEFjdGlvbkljb25zID0ge1xuICBkZWxldGU6IFRyYXNoLFxuICBzb3J0OiBWZXJ0RG90cyxcbiAgYWRkOiBBZGRcbn07XG5cbmNvbnN0IGRyYWdIYW5kbGVBY3RpdmUgPSBjc3NgXG4gIC5sYXllcl9fZHJhZy1oYW5kbGUge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbG9yUGFsZXR0ZUl0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV3JhcHBlclogKyAxfTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5jdXN0b20tcGFsZXR0ZS1pbnB1dF9fbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmN1c3RvbS1wYWxldHRlLWlucHV0X19yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgfVxuXG4gICY6bm90KC5zb3J0aW5nKTpub3QoLmRpc2FibGVkKSB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICAgICR7ZHJhZ0hhbmRsZUFjdGl2ZX07XG4gICAgfVxuICB9XG5cbiAgJi5zb3J0aW5nLWNvbG9ycyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3Zlcn07XG4gICAgJHtkcmFnSGFuZGxlQWN0aXZlfTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRHJhZ0hhbmRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG5gO1xuXG5jb25zdCBTdHlsZWRBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICBzdmcge1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlfTtcbiAgICB9XG4gIH1cblxuICBtYXJnaW4tbGVmdDogNHB4O1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEaXZpZGVyTGluZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJvcmRlclRvcH07XG4gIG1hcmdpbi10b3A6IDhweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xvclN3YXRjaCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdjdXN0b20tcGFsZXR0ZV9fc3dhdGNoJ1xufSlgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nOiAwIDEycHg7XG5gO1xuXG5jb25zdCBTdHlsZWRBZGRTdGVwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q29sb3J9O1xuICAuYWRkY29sb3Ige1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpLndpdGhDb25maWcoeyBzaG91bGRGb3J3YXJkUHJvcCB9KSA8e1xuICB3aWR0aDogc3RyaW5nO1xuICB0ZXh0QWxpZ246IHN0cmluZztcbn0+YFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCA/PyAnMTAwJSd9O1xuICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnRleHRBbGlnbiA/PyAnZW5kJ307XG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub25lJyA6ICdhbGwnKX07XG5gO1xuXG5jb25zdCBJbnB1dFRleHQgPSBzdHlsZWQuZGl2LndpdGhDb25maWcoeyBzaG91bGRGb3J3YXJkUHJvcCB9KSA8eyB3aWR0aDogc3RyaW5nOyB0ZXh0QWxpZ246IHN0cmluZyB9PmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dH07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCA/PyAnMTAwJSd9O1xuICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnRleHRBbGlnbiA/PyAnZW5kJ307XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbmA7XG5cbnR5cGUgU29ydGFibGVJdGVtUHJvcHMgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiAobGlzdGVuZXJzOiBhbnkpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBpc1NvcnRpbmc6IGJvb2xlYW47XG59O1xuXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSAoeyBpZCwgY2hpbGRyZW4sIGlzU29ydGluZyB9OiBTb3J0YWJsZUl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgdHJhbnNmb3JtLCB0cmFuc2l0aW9uLCBpc0RyYWdnaW5nIH0gPSB1c2VTb3J0YWJsZSh7IGlkIH0pO1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0cmFuc2Zvcm06IENTUy5UcmFuc2Zvcm0udG9TdHJpbmcodHJhbnNmb3JtKSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIHpJbmRleDogaXNEcmFnZ2luZyA/IDEgOiAwXG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbG9yUGFsZXR0ZUl0ZW1cbiAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY3VzdG9tLXBhbGV0dGVfX3NvcnRhYmxlLWl0ZW1zJywgeyBzb3J0aW5nOiBpc1NvcnRpbmcgfHwgaXNEcmFnZ2luZyB9KX1cbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbihsaXN0ZW5lcnMpfVxuICAgIDwvQ29sb3JQYWxldHRlSXRlbT5cbiAgKTtcbn07XG5cbnR5cGUgV3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG9uU29ydEVuZDogKGV2ZW50OiBEcmFnRW5kRXZlbnQpID0+IHZvaWQ7XG4gIG9uU29ydFN0YXJ0OiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgV3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgb25Tb3J0RW5kLFxuICBvblNvcnRTdGFydFxufTogV3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyUHJvcHMpID0+IHtcbiAgY29uc3Qgc2Vuc29ycyA9IHVzZVNlbnNvcnModXNlU2Vuc29yKFBvaW50ZXJTZW5zb3IpLCB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IpKTtcbiAgcmV0dXJuIChcbiAgICA8RG5kQ29udGV4dFxuICAgICAgc2Vuc29ycz17c2Vuc29yc31cbiAgICAgIGNvbGxpc2lvbkRldGVjdGlvbj17Y2xvc2VzdENlbnRlcn1cbiAgICAgIG9uRHJhZ0VuZD17b25Tb3J0RW5kfVxuICAgICAgb25EcmFnU3RhcnQ9e29uU29ydFN0YXJ0fVxuICAgID5cbiAgICAgIDxTb3J0YWJsZUNvbnRleHRcbiAgICAgICAgaXRlbXM9e1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKF8sIGluZGV4KSA9PiBgJHtpbmRleH1gKSB8fCBbXX1cbiAgICAgICAgc3RyYXRlZ3k9e3ZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9Tb3J0YWJsZUNvbnRleHQ+XG4gICAgPC9EbmRDb250ZXh0PlxuICApO1xufTtcblxudHlwZSBEcmFnSGFuZGxlUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7IGNsYXNzTmFtZT86IHN0cmluZyB9PjtcbmNvbnN0IERyYWdIYW5kbGUgPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5saXN0ZW5lcnMgfTogRHJhZ0hhbmRsZVByb3BzKSA9PiAoXG4gIDxTdHlsZWREcmFnSGFuZGxlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ubGlzdGVuZXJzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkRHJhZ0hhbmRsZT5cbik7XG5cbmV4cG9ydCB0eXBlIENvbG9yUGFsZXR0ZUlucHV0UHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIG9uQ2hhbmdlOiAodmFsOiB1bmtub3duKSA9PiB2b2lkO1xuICBpZDogc3RyaW5nO1xuICB3aWR0aDogc3RyaW5nO1xuICB0ZXh0QWxpZ246IHN0cmluZztcbiAgZWRpdGFibGU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgQ29sb3JQYWxldHRlSW5wdXQgPSAoe1xuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGlkLFxuICB3aWR0aCxcbiAgdGV4dEFsaWduLFxuICBlZGl0YWJsZVxufTogQ29sb3JQYWxldHRlSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGVWYWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IG9uS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIGUgPT4ge1xuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfRU5URVI6XG4gICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX1JFVFVSTjpcbiAgICAgICAgICBvbkNoYW5nZShzdGF0ZVZhbHVlKTtcbiAgICAgICAgICBpZiAoaW5wdXRSZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlucHV0UmVmPy5jdXJyZW50LmJsdXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25DaGFuZ2UsIHN0YXRlVmFsdWVdXG4gICk7XG5cbiAgY29uc3QgX29uQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSksIFtzZXRWYWx1ZV0pO1xuICBjb25zdCBvbkJsdXIgPSB1c2VDYWxsYmFjaygoKSA9PiBvbkNoYW5nZShzdGF0ZVZhbHVlKSwgW29uQ2hhbmdlLCBzdGF0ZVZhbHVlXSk7XG5cbiAgcmV0dXJuIGVkaXRhYmxlID8gKFxuICAgIDxTdHlsZWRJbnB1dFxuICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLWhleF9faW5wdXRcIlxuICAgICAgdmFsdWU9e3N0YXRlVmFsdWV9XG4gICAgICBvbkNoYW5nZT17X29uQ2hhbmdlfVxuICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgIGlkPXtpZH1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIHRleHRBbGlnbj17dGV4dEFsaWdufVxuICAgICAgc2Vjb25kYXJ5XG4gICAgLz5cbiAgKSA6IChcbiAgICA8SW5wdXRUZXh0IGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLWhleF9faW5wdXRfX3RleHRcIiB3aWR0aD17d2lkdGh9IHRleHRBbGlnbj17dGV4dEFsaWdufT5cbiAgICAgIHt2YWx1ZX1cbiAgICA8L0lucHV0VGV4dD5cbiAgKTtcbn07XG5cbmNvbnN0IERhc2ggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFJhbmdlSW5wdXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZENvbG9ySGV4SW5wdXQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMTJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFZGl0YWJsZUNvbG9yUmFuZ2U6IFJlYWN0LkZDPEVkaXRhYmxlQ29sb3JSYW5nZVByb3BzPiA9ICh7XG4gIGl0ZW0sXG4gIGlzTGFzdCxcbiAgaW5kZXgsXG4gIGVkaXRDb2xvck1hcCxcbiAgZWRpdGFibGVcbn0pID0+IHtcbiAgY29uc3QgaGFzSW5wdXRzID0gQXJyYXkuaXNBcnJheShpdGVtPy5pbnB1dHMpO1xuICBjb25zdCBsZWZ0SW5wdXQgPSBoYXNJbnB1dHMgPyBpdGVtLmlucHV0c1swXSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgcmlnaHRJbnB1dCA9IGhhc0lucHV0cyA/IGl0ZW0uaW5wdXRzWzFdIDogdW5kZWZpbmVkO1xuICBjb25zdCBub01pbkJvdW5kID0gIU51bWJlci5pc0Zpbml0ZShsZWZ0SW5wdXQpICYmIGluZGV4ID09PSAwO1xuICBjb25zdCBub01heEJvdW5kID0gIU51bWJlci5pc0Zpbml0ZShyaWdodElucHV0KSAmJiBpc0xhc3Q7XG4gIGNvbnN0IG9uQ2hhbmdlTGVmdCA9IHVzZUNhbGxiYWNrKFxuICAgIHZhbCA9PiB7XG4gICAgICBpZiAoZWRpdGFibGUgJiYgZWRpdENvbG9yTWFwKSBlZGl0Q29sb3JNYXAocGFyc2VGbG9hdCh2YWwpLCBpbmRleCAtIDEpO1xuICAgIH0sXG4gICAgW2VkaXRDb2xvck1hcCwgaW5kZXgsIGVkaXRhYmxlXVxuICApO1xuICBjb25zdCBvbkNoYW5nZVJpZ2h0ID0gdXNlQ2FsbGJhY2soXG4gICAgdmFsID0+IHtcbiAgICAgIGlmIChlZGl0YWJsZSAmJiBlZGl0Q29sb3JNYXApIGVkaXRDb2xvck1hcChwYXJzZUZsb2F0KHZhbCksIGluZGV4KTtcbiAgICB9LFxuICAgIFtlZGl0Q29sb3JNYXAsIGluZGV4LCBlZGl0YWJsZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRSYW5nZUlucHV0PlxuICAgICAgPENvbG9yUGFsZXR0ZUlucHV0XG4gICAgICAgIHZhbHVlPXtub01pbkJvdW5kID8gJ0xlc3MnIDogU3RyaW5nKGxlZnRJbnB1dCA/PyAnJyl9XG4gICAgICAgIGlkPXtgY29sb3ItcGFsZXR0ZS1pbnB1dC0ke2luZGV4fS1sZWZ0YH1cbiAgICAgICAgd2lkdGg9XCI1MHB4XCJcbiAgICAgICAgdGV4dEFsaWduPVwiZW5kXCJcbiAgICAgICAgZWRpdGFibGU9e25vTWluQm91bmQgPyBmYWxzZSA6IGVkaXRhYmxlfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMZWZ0fVxuICAgICAgLz5cbiAgICAgIDxEYXNoIC8+XG4gICAgICA8Q29sb3JQYWxldHRlSW5wdXRcbiAgICAgICAgdmFsdWU9e25vTWF4Qm91bmQgPyAnTW9yZScgOiBTdHJpbmcocmlnaHRJbnB1dCA/PyAnJyl9XG4gICAgICAgIGlkPXtgY29sb3ItcGFsZXR0ZS1pbnB1dC0ke2luZGV4fS1yaWdodGB9XG4gICAgICAgIHdpZHRoPVwiNTBweFwiXG4gICAgICAgIHRleHRBbGlnbj1cImVuZFwiXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJpZ2h0fVxuICAgICAgICBlZGl0YWJsZT17bm9NYXhCb3VuZCA/IGZhbHNlIDogZWRpdGFibGV9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkUmFuZ2VJbnB1dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBBZGRDb2xvclN0b3AgPSAoeyBvbkNvbG9yQWRkLCBJY29uQ29tcG9uZW50IH0pID0+IChcbiAgPFN0eWxlZEFjdGlvbiBvbkNsaWNrPXtvbkNvbG9yQWRkfSBjbGFzc05hbWU9XCJhZGRjb2xvclwiPlxuICAgIDxJY29uQ29tcG9uZW50IGhlaWdodD1cIjE0cHhcIiAvPlxuICA8L1N0eWxlZEFjdGlvbj5cbik7XG5cbmV4cG9ydCBjb25zdCBEZWxldGVDb2xvclN0b3AgPSAoeyBvbkNvbG9yRGVsZXRlLCBJY29uQ29tcG9uZW50IH0pID0+IChcbiAgPFN0eWxlZEFjdGlvbiBvbkNsaWNrPXtvbkNvbG9yRGVsZXRlfSBjbGFzc05hbWU9XCJ0cmFzaGJpblwiPlxuICAgIDxJY29uQ29tcG9uZW50IGhlaWdodD1cIjE0cHhcIiAvPlxuICA8L1N0eWxlZEFjdGlvbj5cbik7XG5cbmV4cG9ydCBjb25zdCBDdXN0b21QYWxldHRlSW5wdXQ6IFJlYWN0LkZDPEN1c3RvbVBhbGV0dGVJbnB1dFByb3BzPiA9ICh7XG4gIGluZGV4LFxuICBpc1NvcnRpbmcsXG4gIGNvbG9yLFxuICBjb2xvckJyZWFrcyxcbiAgaW5wdXRDb2xvckhleCxcbiAgZWRpdENvbG9yTWFwVmFsdWUsXG4gIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zLFxuICBkaXNhYmxlQXBwZW5kLFxuICBkaXNhYmxlRGVsZXRlLFxuICBvbkRlbGV0ZSxcbiAgb25BZGQsXG4gIG9uVG9nZ2xlU2tldGNoZXJcbn0pID0+IHtcbiAgY29uc3Qgb25DbGlja1N3dGFjaCA9IHVzZUNhbGxiYWNrKCgpID0+IG9uVG9nZ2xlU2tldGNoZXIoaW5kZXgpLCBbb25Ub2dnbGVTa2V0Y2hlciwgaW5kZXhdKTtcbiAgY29uc3Qgb25Db2xvcklucHV0ID0gdXNlQ2FsbGJhY2sodiA9PiBpbnB1dENvbG9ySGV4KGluZGV4LCB2KSwgW2lucHV0Q29sb3JIZXgsIGluZGV4XSk7XG4gIGNvbnN0IG9uQ29sb3JEZWxldGUgPSB1c2VDYWxsYmFjaygoKSA9PiBvbkRlbGV0ZShpbmRleCksIFtvbkRlbGV0ZSwgaW5kZXhdKTtcbiAgY29uc3Qgb25Db2xvckFkZCA9IHVzZUNhbGxiYWNrKCgpID0+IG9uQWRkKGluZGV4KSwgW29uQWRkLCBpbmRleF0pO1xuICBjb25zdCBzaG93SGV4SW5wdXQgPSAhY29sb3JCcmVha3M7XG5cbiAgcmV0dXJuIChcbiAgICA8U29ydGFibGVJdGVtIGlkPXtgJHtpbmRleH1gfSBpc1NvcnRpbmc9e2lzU29ydGluZ30+XG4gICAgICB7bGlzdGVuZXJzID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLWlucHV0X19sZWZ0XCI+XG4gICAgICAgICAgICA8RHJhZ0hhbmRsZSBjbGFzc05hbWU9XCJsYXllcl9fZHJhZy1oYW5kbGVcIiB7Li4ubGlzdGVuZXJzfT5cbiAgICAgICAgICAgICAgPGFjdGlvbkljb25zLnNvcnQgaGVpZ2h0PVwiMjBweFwiIC8+XG4gICAgICAgICAgICA8L0RyYWdIYW5kbGU+XG4gICAgICAgICAgICA8Q29sb3JTd2F0Y2ggY29sb3I9e2NvbG9yfSBvbkNsaWNrPXtvbkNsaWNrU3d0YWNofSAvPlxuICAgICAgICAgICAge3Nob3dIZXhJbnB1dCA/IChcbiAgICAgICAgICAgICAgPFN0eWxlZENvbG9ySGV4SW5wdXQ+XG4gICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZUlucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sb3IudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbG9ySW5wdXR9XG4gICAgICAgICAgICAgICAgICBpZD17YGlucHV0LWxheWVyLWxhYmVsLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRDb2xvckhleElucHV0PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7Y29sb3JCcmVha3MgJiYgaW5kZXggPCBjb2xvckJyZWFrcy5sZW5ndGggJiYgaXNOdW1lcmljQ29sb3JCcmVha3MoY29sb3JCcmVha3MpID8gKFxuICAgICAgICAgICAgICA8RWRpdGFibGVDb2xvclJhbmdlXG4gICAgICAgICAgICAgICAgaXRlbT17Y29sb3JCcmVha3NbaW5kZXhdfVxuICAgICAgICAgICAgICAgIGlzTGFzdD17aW5kZXggPT09IGNvbG9yQnJlYWtzLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIGVkaXRDb2xvck1hcD17ZWRpdENvbG9yTWFwVmFsdWV9XG4gICAgICAgICAgICAgICAgZWRpdGFibGVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGUtaW5wdXRfX3JpZ2h0XCI+XG4gICAgICAgICAgICB7IWRpc2FibGVBcHBlbmQgPyAoXG4gICAgICAgICAgICAgIDxBZGRDb2xvclN0b3Agb25Db2xvckFkZD17b25Db2xvckFkZH0gSWNvbkNvbXBvbmVudD17YWN0aW9uSWNvbnMuYWRkfSAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7IWRpc2FibGVEZWxldGUgPyAoXG4gICAgICAgICAgICAgIDxEZWxldGVDb2xvclN0b3Agb25Db2xvckRlbGV0ZT17b25Db2xvckRlbGV0ZX0gSWNvbkNvbXBvbmVudD17YWN0aW9uSWNvbnMuZGVsZXRlfSAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L1NvcnRhYmxlSXRlbT5cbiAgKTtcbn07XG5cbmNvbnN0IFN0eWxlZENhdGVnb3JpY2FsVmFsdWVQaWNrZXJXcmFwcGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NhdGVnb3JpY2FsLXZhbHVlLXBpY2tlcidcbn0pYFxuICB3aWR0aDogMTUwcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q29sb3J9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBjb2x1bW4tZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbnR5cGUgU3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlclByb3BzID0geyBub0JvcmRlcjogYm9vbGVhbiB9O1xuY29uc3QgU3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlciA9IHN0eWxlZC5kaXY8U3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlclByb3BzPmBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLm5vQm9yZGVyID8gJycgOiAnMXB4IGRhc2hlZCcpfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbmA7XG5cbnR5cGUgRHJvcGRvd25WYWx1ZXNXcmFwcGVyUHJvcHMgPSB7IHdpZHRoOiBudW1iZXIgfTtcbmNvbnN0IERyb3Bkb3duVmFsdWVzV3JhcHBlciA9IHN0eWxlZC5kaXY8RHJvcGRvd25WYWx1ZXNXcmFwcGVyUHJvcHM+YFxuICBib3JkZXI6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV3JhcHBlclp9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbmA7XG5cbnR5cGUgU2VsZWN0ZWRWYWx1ZXNXcmFwcGVyUHJvcHMgPSB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH07XG5jb25zdCBTZWxlY3RlZFZhbHVlc1dyYXBwZXIgPSBzdHlsZWQoRHJvcGRvd25WYWx1ZXNXcmFwcGVyKSA8U2VsZWN0ZWRWYWx1ZXNXcmFwcGVyUHJvcHM+YFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbiAgbWF4LWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIC5jdXN0b20tcGFsZXR0ZS1jaGlja2xldGVkLWlucHV0IHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bldyYXBwZXJafTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRHJvcGRvd25IZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q29sb3J9O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuXG4gIC5idXR0b24ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkVG9vbHRpcENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4gIGRpdiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5gO1xuXG5jb25zdCBOVU1CRVJfVkFMVUVTX0lOX1RPT0xUSVAgPSAxMDtcblxuY29uc3QgQ2F0ZWdvcmljYWxTZWxlY3RvckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgb25TZWxlY3RSZXN0OiAoKSA9PiBudWxsLFxuICBvblJlc2V0OiAoKSA9PiBudWxsXG59KTtcblxuLy8gQ2F0ZWdvcmljYWwgdmFsdWVzIGRyb3Bkb3dubGlzdDpcbi8vIGV4dGVuZGluZyBEcm9wZG93bkxpc3QgYW5kIGFkZGluZyAnU2VsZWN0IHRoZSBSZXN0JyBhbmQgJ1Jlc2V0JyBidXR0b25zXG5jbGFzcyBNb2RpZmllZERyb3Bkb3duTGlzdCBleHRlbmRzIERyb3Bkb3duTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q2F0ZWdvcmljYWxTZWxlY3RvckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAge2NvbnRleHQgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFN0eWxlZERyb3Bkb3duSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGluayBzaXplPVwic21hbFwiIG9uQ2xpY2s9e2NvbnRleHQub25TZWxlY3RSZXN0fT5cbiAgICAgICAgICAgICAgICAgIFNlbGVjdCB0aGUgUmVzdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGluayBzaXplPVwic21hbFwiIG9uQ2xpY2s9e2NvbnRleHQub25SZXNldH0+XG4gICAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duSGVhZGVyPlxuICAgICAgICAgICAgICA8RGl2aWRlckxpbmUgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ2F0ZWdvcmljYWxTZWxlY3RvckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhdGVnb3JpY2FsU2VsZWN0b3JQcm9wcyA9IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgc2VsZWN0ZWRWYWx1ZXM6IChzdHJpbmcgfCBudW1iZXIgfCBudWxsKVtdO1xuICBhbGxWYWx1ZXM6IHN0cmluZ1tdIHwgbnVtYmVyW107XG4gIGFkZENvbG9yTWFwVmFsdWU/OiAodjogKG51bWJlciB8IHN0cmluZyB8IG51bGwpW10sIGk6IG51bWJlcikgPT4gdm9pZDtcbiAgcmVtb3ZlQ29sb3JNYXBWYWx1ZT86ICh2OiBudW1iZXIgfCBzdHJpbmcsIGk6IG51bWJlcikgPT4gdm9pZDtcbiAgcmVzZXRDb2xvck1hcFZhbHVlPzogKGk6IG51bWJlcikgPT4gdm9pZDtcbiAgc2VsZWN0UmVzdENvbG9yTWFwVmFsdWU/OiAoaTogbnVtYmVyKSA9PiB2b2lkO1xuICBlZGl0YWJsZT86IGJvb2xlYW47XG59O1xuXG4vLyBDYXRlZ29yaWNhbCB2YWx1ZXMgc2VsZWN0b3IgZm9yIGVkaXRpbmcgY2F0ZWdvcmljYWwgdmFsdWVzXG5leHBvcnQgY29uc3QgQ2F0ZWdvcmljYWxTZWxlY3RvcjogUmVhY3QuRkM8Q2F0ZWdvcmljYWxTZWxlY3RvclByb3BzPiA9ICh7XG4gIGluZGV4LFxuICBzZWxlY3RlZFZhbHVlcyxcbiAgYWxsVmFsdWVzLFxuICBhZGRDb2xvck1hcFZhbHVlLFxuICByZW1vdmVDb2xvck1hcFZhbHVlLFxuICByZXNldENvbG9yTWFwVmFsdWUsXG4gIHNlbGVjdFJlc3RDb2xvck1hcFZhbHVlLFxuICBlZGl0YWJsZSA9IHRydWVcbn06IENhdGVnb3JpY2FsU2VsZWN0b3JQcm9wcykgPT4ge1xuICBjb25zdCBbc2hvd1R5cGVhaGVhZCwgc2V0U2hvd1R5cGVhaGVhZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25PcHRpb25TZWxlY3RlZCA9IHVzZUNhbGxiYWNrKFxuICAgIHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWQgPSB0b0FycmF5KHNlbGVjdGVkVmFsdWVzKTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gdW5pcShwcmV2aW91c1NlbGVjdGVkLmNvbmNhdCh0b0FycmF5KHZhbHVlKSkpO1xuICAgICAgYWRkQ29sb3JNYXBWYWx1ZT8uKGl0ZW1zLCBpbmRleCk7XG4gICAgfSxcbiAgICBbc2VsZWN0ZWRWYWx1ZXMsIGluZGV4LCBhZGRDb2xvck1hcFZhbHVlXVxuICApO1xuXG4gIGNvbnN0IG9uT3BlbkRyb3Bkb3duID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dUeXBlYWhlYWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNsb3NlRHJvcGRvd24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd1R5cGVhaGVhZChmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblJlbW92ZUl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICB2YWx1ZSA9PiB7XG4gICAgICByZW1vdmVDb2xvck1hcFZhbHVlPy4odmFsdWUsIGluZGV4KTtcbiAgICB9LFxuICAgIFtpbmRleCwgcmVtb3ZlQ29sb3JNYXBWYWx1ZV1cbiAgKTtcblxuICBjb25zdCBvblJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJlc2V0Q29sb3JNYXBWYWx1ZT8uKGluZGV4KTtcbiAgICBzZXRTaG93VHlwZWFoZWFkKGZhbHNlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW3Jlc2V0Q29sb3JNYXBWYWx1ZSwgaW5kZXhdKTtcblxuICBjb25zdCBvblNlbGVjdFJlc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2VsZWN0UmVzdENvbG9yTWFwVmFsdWU/LihpbmRleCk7XG4gICAgc2V0U2hvd1R5cGVhaGVhZChmYWxzZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIFtzZWxlY3RSZXN0Q29sb3JNYXBWYWx1ZSwgaW5kZXhdKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDYXRlZ29yaWNhbFZhbHVlUGlja2VyV3JhcHBlcj5cbiAgICAgIHtlZGl0YWJsZSAmJiA8QWRkIGhlaWdodD1cIjEycHhcIiBvbkNsaWNrPXtvbk9wZW5Ecm9wZG93bn0gLz59XG4gICAgICA8U3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlclxuICAgICAgICBub0JvcmRlcj17c2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID09PSAwIHx8ICFlZGl0YWJsZX1cbiAgICAgICAgb25DbGljaz17b25PcGVuRHJvcGRvd259XG4gICAgICAgIGRhdGEtdGlwXG4gICAgICAgIGRhdGEtZm9yPXtgY2F0ZWdvcnktdmFsdWVzLSR7aW5kZXh9YH1cbiAgICAgID5cbiAgICAgICAge3NlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gJ0FkZCBWYWx1ZSdcbiAgICAgICAgICA6IHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgPyBzZWxlY3RlZFZhbHVlc1swXVxuICAgICAgICAgICAgOiBgJHtzZWxlY3RlZFZhbHVlcy5sZW5ndGh9IHNlbGVjdGVkYH1cbiAgICAgICAge3NlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgIDxUb29sdGlwIGlkPXtgY2F0ZWdvcnktdmFsdWVzLSR7aW5kZXh9YH0gcGxhY2U9XCJ0b3BcIiBpbnRlcmFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgICAgICA8U3R5bGVkVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZFZhbHVlcy5zbGljZSgwLCBOVU1CRVJfVkFMVUVTX0lOX1RPT0xUSVApLm1hcCgodmFsdWUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge3NlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IE5VTUJFUl9WQUxVRVNfSU5fVE9PTFRJUCAmJiA8ZGl2Pi4uLjwvZGl2Pn1cbiAgICAgICAgICAgIDwvU3R5bGVkVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICApfVxuICAgICAgPC9TdHlsZWRDYXRlZ29yaWNhbFZhbHVlUGlja2VyPlxuICAgICAge2VkaXRhYmxlICYmIChcbiAgICAgICAgPFBvcnRhbGVkIGxlZnQ9ezB9IHRvcD17MH0gaXNPcGVuZWQ9e3Nob3dUeXBlYWhlYWR9IG9uQ2xvc2U9e29uQ2xvc2VEcm9wZG93bn0+XG4gICAgICAgICAge3NlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgPFNlbGVjdGVkVmFsdWVzV3JhcHBlciB3aWR0aD17MjUwfSBoZWlnaHQ9ezIwMH0+XG4gICAgICAgICAgICAgIDxDaGlja2xldGVkSW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjdXN0b20tcGFsZXR0ZS1jaGlja2xldGVkLWlucHV0J31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZFZhbHVlc31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Jyd9XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbT17b25SZW1vdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG51bGx9XG4gICAgICAgICAgICAgICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ9e251bGx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlbGVjdGVkVmFsdWVzV3JhcHBlcj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxEcm9wZG93blZhbHVlc1dyYXBwZXIgd2lkdGg9ezI1MH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICA8Q2F0ZWdvcmljYWxTZWxlY3RvckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgb25SZXNldCxcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0UmVzdFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHlwZWFoZWFkXG4gICAgICAgICAgICAgICAgICBjdXN0b21DbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6ICdsaXN0LXNlbGVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6ICd0eXBlYWhlYWRfX2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW06ICdsaXN0X19pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdEFuY2hvcjogJ2xpc3RfX2l0ZW1fX2FuY2hvcidcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXthbGxWYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAvLyBhZGQgc2FmZSBzdHJpbmcgY2FzdGluZyBmb3IgdGhlIFR5cGVhaGVhZCwgc28gZnV6enkgc2VhcmNoIG5ldmVyIHJlY2VpdmVzIG5vbi1zdHJpbmdzLCBwcmV2ZW50aW5nIHRoZSB0b0xvd2VyQ2FzZSBjcmFzaFxuICAgICAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17byA9PiBTdHJpbmcobyA/PyAnJyl9XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgbykgPT4gU3RyaW5nKG8gPz8gJycpLmluY2x1ZGVzKFN0cmluZyhpbnB1dCA/PyAnJykpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2gnfVxuICAgICAgICAgICAgICAgICAgb25PcHRpb25TZWxlY3RlZD17b25PcHRpb25TZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgIGN1c3RvbUxpc3RDb21wb25lbnQ9e01vZGlmaWVkRHJvcGRvd25MaXN0fVxuICAgICAgICAgICAgICAgICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ9e0xpc3RJdGVtfVxuICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHNob3dPcHRpb25zV2hlbkVtcHR5XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZFZhbHVlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NhdGVnb3JpY2FsU2VsZWN0b3JDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Ecm9wZG93blZhbHVlc1dyYXBwZXI+XG4gICAgICAgIDwvUG9ydGFsZWQ+XG4gICAgICApfVxuICAgIDwvU3R5bGVkQ2F0ZWdvcmljYWxWYWx1ZVBpY2tlcldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgdHlwZSBDYXRlZ29yaWNhbEN1c3RvbVBhbGV0dGVJbnB1dFByb3BzID0ge1xuICBpbmRleDogbnVtYmVyO1xuICBpc1NvcnRpbmc6IGJvb2xlYW47XG4gIGNvbG9yOiBIZXhDb2xvcjtcbiAgY29sb3JNYXA/OiBDb2xvck1hcCB8IG51bGw7XG4gIGFkZENvbG9yTWFwVmFsdWU6ICh2OiAobnVtYmVyIHwgc3RyaW5nIHwgbnVsbClbXSwgaTogbnVtYmVyKSA9PiB2b2lkO1xuICByZW1vdmVDb2xvck1hcFZhbHVlOiAodjogbnVtYmVyIHwgc3RyaW5nLCBpOiBudW1iZXIpID0+IHZvaWQ7XG4gIHJlc2V0Q29sb3JNYXBWYWx1ZTogKGk6IG51bWJlcikgPT4gdm9pZDtcbiAgc2VsZWN0UmVzdENvbG9yTWFwVmFsdWU6IChpOiBudW1iZXIpID0+IHZvaWQ7XG4gIGFjdGlvbkljb25zPzogQWN0aW9uSWNvbnM7XG4gIG9uRGVsZXRlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25BZGQ6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvblRvZ2dsZVNrZXRjaGVyOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgYWxsVmFsdWVzOiBzdHJpbmdbXSB8IG51bWJlcltdO1xuICBkaXNhYmxlRGVsZXRlPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yaWNhbEN1c3RvbVBhbGV0dGVJbnB1dDogUmVhY3QuRkM8Q2F0ZWdvcmljYWxDdXN0b21QYWxldHRlSW5wdXRQcm9wcz4gPSAoe1xuICBpbmRleCxcbiAgaXNTb3J0aW5nLFxuICBjb2xvcixcbiAgY29sb3JNYXAsXG4gIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zLFxuICBvbkRlbGV0ZSxcbiAgZGlzYWJsZURlbGV0ZSxcbiAgb25Ub2dnbGVTa2V0Y2hlcixcbiAgYWRkQ29sb3JNYXBWYWx1ZSxcbiAgcmVtb3ZlQ29sb3JNYXBWYWx1ZSxcbiAgcmVzZXRDb2xvck1hcFZhbHVlLFxuICBzZWxlY3RSZXN0Q29sb3JNYXBWYWx1ZSxcbiAgYWxsVmFsdWVzXG59OiBDYXRlZ29yaWNhbEN1c3RvbVBhbGV0dGVJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkVmFsdWVzOiAobnVtYmVyIHwgc3RyaW5nIHwgbnVsbClbXSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghY29sb3JNYXAgfHwgIWNvbG9yTWFwW2luZGV4XSkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHZhbHVlID0gY29sb3JNYXBbaW5kZXhdWzBdO1xuICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiB2YWx1ZSAhPT0gbnVsbCA/IFt2YWx1ZV0gOiBbXTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9LCBbY29sb3JNYXAsIGluZGV4XSk7XG5cbiAgY29uc3Qgb25DbGlja1N3dGFjaCA9IHVzZUNhbGxiYWNrKCgpID0+IG9uVG9nZ2xlU2tldGNoZXIoaW5kZXgpLCBbb25Ub2dnbGVTa2V0Y2hlciwgaW5kZXhdKTtcbiAgY29uc3Qgb25Db2xvckRlbGV0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IG9uRGVsZXRlKGluZGV4KSwgW29uRGVsZXRlLCBpbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNvcnRhYmxlSXRlbSBpZD17YCR7aW5kZXh9YH0gaXNTb3J0aW5nPXtpc1NvcnRpbmd9PlxuICAgICAge2xpc3RlbmVycyA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tcGFsZXR0ZS1pbnB1dF9fbGVmdFwiPlxuICAgICAgICAgICAgPERyYWdIYW5kbGUgY2xhc3NOYW1lPVwibGF5ZXJfX2RyYWctaGFuZGxlXCIgey4uLmxpc3RlbmVyc30+XG4gICAgICAgICAgICAgIDxhY3Rpb25JY29ucy5zb3J0IGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgPC9EcmFnSGFuZGxlPlxuICAgICAgICAgICAgPENvbG9yU3dhdGNoIGNvbG9yPXtjb2xvcn0gb25DbGljaz17b25DbGlja1N3dGFjaH0gLz5cbiAgICAgICAgICAgIHtjb2xvck1hcCAmJiBjb2xvck1hcFtpbmRleF0gJiYgKFxuICAgICAgICAgICAgICA8Q2F0ZWdvcmljYWxTZWxlY3RvclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzPXtzZWxlY3RlZFZhbHVlc31cbiAgICAgICAgICAgICAgICBhbGxWYWx1ZXM9e2FsbFZhbHVlc31cbiAgICAgICAgICAgICAgICBhZGRDb2xvck1hcFZhbHVlPXthZGRDb2xvck1hcFZhbHVlfVxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbG9yTWFwVmFsdWU9e3JlbW92ZUNvbG9yTWFwVmFsdWV9XG4gICAgICAgICAgICAgICAgcmVzZXRDb2xvck1hcFZhbHVlPXtyZXNldENvbG9yTWFwVmFsdWV9XG4gICAgICAgICAgICAgICAgc2VsZWN0UmVzdENvbG9yTWFwVmFsdWU9e3NlbGVjdFJlc3RDb2xvck1hcFZhbHVlfVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tcGFsZXR0ZS1pbnB1dF9fcmlnaHRcIj5cbiAgICAgICAgICAgIHshZGlzYWJsZURlbGV0ZSA/IChcbiAgICAgICAgICAgICAgPERlbGV0ZUNvbG9yU3RvcCBvbkNvbG9yRGVsZXRlPXtvbkNvbG9yRGVsZXRlfSBJY29uQ29tcG9uZW50PXthY3Rpb25JY29ucy5kZWxldGV9IC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvU29ydGFibGVJdGVtPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEJvdHRvbUFjdGlvbiA9ICh7IG9uQ2FuY2VsLCBvbkNvbmZpcm0gfSkgPT4gKFxuICA8U3R5bGVkQnV0dG9uQ29udGFpbmVyPlxuICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY29uZmlybS1hcHBseV9fYnV0dG9uXCIgc21hbGwgb25DbGljaz17b25Db25maXJtfT5cbiAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwibW9kYWwuYnV0dG9uLmRlZmF1bHRDb25maXJtXCIgZGVmYXVsdE1lc3NhZ2U9XCJDb25maXJtXCIgLz5cbiAgICA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIGxpbmsgc21hbGwgb25DbGljaz17b25DYW5jZWx9PlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJtb2RhbC5idXR0b24uZGVmYXVsdENhbmNlbFwiIGRlZmF1bHRNZXNzYWdlPVwiQ2FuY2VsXCIgLz5cbiAgICA8L0J1dHRvbj5cbiAgPC9TdHlsZWRCdXR0b25Db250YWluZXI+XG4pO1xuXG5jb25zdCBTdHlsZWRDdXN0b21QYWxldHRlID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2N1c3RvbS1wYWxldHRlJ1xufSlgXG4gIG1hcmdpbi10b3A6IDhweDtcbmA7XG5cbmZ1bmN0aW9uIEN1c3RvbVBhbGV0dGVGYWN0b3J5KCk6IFJlYWN0LkZDPEN1c3RvbVBhbGV0dGVQcm9wcz4ge1xuICBjb25zdCBDdXN0b21QYWxldHRlOiBSZWFjdC5GQzxDdXN0b21QYWxldHRlUHJvcHM+ID0gKHtcbiAgICBvcmRpbmFsRG9tYWluLFxuICAgIGN1c3RvbVBhbGV0dGUsXG4gICAgc2V0Q29sb3JQYWxldHRlVUksXG4gICAgc2hvd1NrZXRjaGVyLFxuICAgIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zLFxuICAgIG9uQ2FuY2VsLFxuICAgIG9uQXBwbHlcbiAgfSkgPT4ge1xuICAgIGNvbnN0IFtpc1NvcnRpbmcsIHNldElzU29ydGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyBjb2xvcnMsIGNvbG9yTWFwIH0gPSBjdXN0b21QYWxldHRlO1xuICAgIGNvbnN0IGNvbG9yQnJlYWtzID0gdXNlTWVtbyhcbiAgICAgICgpID0+XG4gICAgICAgIGNvbG9yTWFwXG4gICAgICAgICAgPyBjdXN0b21QYWxldHRlLnR5cGUgPT09ICdjdXN0b20nXG4gICAgICAgICAgICA/IGNvbG9yTWFwVG9Db2xvckJyZWFrcyhjb2xvck1hcClcbiAgICAgICAgICAgIDogY29sb3JNYXBUb0NhdGVnb3JpY2FsQ29sb3JCcmVha3MoY29sb3JNYXApXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgW2N1c3RvbVBhbGV0dGUudHlwZSwgY29sb3JNYXBdXG4gICAgKTtcblxuICAgIGNvbnN0IG9uUGlja2VyVXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgICBjb2xvciA9PiB7XG4gICAgICAgIGlmIChjb2xvciAmJiBOdW1iZXIuaXNGaW5pdGUoc2hvd1NrZXRjaGVyKSkge1xuICAgICAgICAgIGNvbnN0IG5ld0N1c3RvbVBhbGV0dGUgPSB1cGRhdGVDdXN0b21QYWxldHRlQ29sb3IoXG4gICAgICAgICAgICBjdXN0b21QYWxldHRlLFxuICAgICAgICAgICAgTnVtYmVyKHNob3dTa2V0Y2hlciksXG4gICAgICAgICAgICBjb2xvci5oZXhcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgICAgICAgIGN1c3RvbVBhbGV0dGU6IG5ld0N1c3RvbVBhbGV0dGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtjdXN0b21QYWxldHRlLCBzaG93U2tldGNoZXIsIHNldENvbG9yUGFsZXR0ZVVJXVxuICAgICk7XG4gICAgY29uc3Qgb25Ub2dnbGVTa2V0Y2hlciA9IHVzZUNhbGxiYWNrKFxuICAgICAgdmFsID0+IHtcbiAgICAgICAgc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgICAgIHNob3dTa2V0Y2hlcjogdmFsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtzZXRDb2xvclBhbGV0dGVVSV1cbiAgICApO1xuICAgIGNvbnN0IG9uRGVsZXRlID0gdXNlQ2FsbGJhY2soXG4gICAgICBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbVBhbGV0dGUgPSByZW1vdmVDdXN0b21QYWxldHRlQ29sb3IoY3VzdG9tUGFsZXR0ZSwgaW5kZXgpO1xuICAgICAgICBzZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICAgICAgY3VzdG9tUGFsZXR0ZTogbmV3Q3VzdG9tUGFsZXR0ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBbY3VzdG9tUGFsZXR0ZSwgc2V0Q29sb3JQYWxldHRlVUldXG4gICAgKTtcblxuICAgIGNvbnN0IG9uQWRkID0gdXNlQ2FsbGJhY2soXG4gICAgICBpbmRleCA9PiB7XG4gICAgICAgIC8vIGFkZCBjb2xvciBhdCB0aGUgZW5kXG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbVBhbGV0dGUgPSBhZGRDdXN0b21QYWxldHRlQ29sb3IoY3VzdG9tUGFsZXR0ZSwgaW5kZXgpO1xuICAgICAgICBzZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICAgICAgY3VzdG9tUGFsZXR0ZTogbmV3Q3VzdG9tUGFsZXR0ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBbY3VzdG9tUGFsZXR0ZSwgc2V0Q29sb3JQYWxldHRlVUldXG4gICAgKTtcblxuICAgIGNvbnN0IG9uQWRkQ2F0ZWdvcmljYWxTdGVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgb25BZGQoY29sb3JzLmxlbmd0aCAtIDEpO1xuICAgIH0sIFtjb2xvcnMubGVuZ3RoLCBvbkFkZF0pO1xuXG4gICAgY29uc3Qgb25Td2F0Y2hDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIG9uVG9nZ2xlU2tldGNoZXIoZmFsc2UpO1xuICAgIH0sIFtvblRvZ2dsZVNrZXRjaGVyXSk7XG5cbiAgICBjb25zdCBvbkNvbmZpcm0gPSB1c2VDYWxsYmFjayhcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uQ2FuY2VsKCk7XG4gICAgICAgIG9uQXBwbHkoZXZlbnQpO1xuICAgICAgfSxcbiAgICAgIFtvbkNhbmNlbCwgb25BcHBseV1cbiAgICApO1xuXG4gICAgY29uc3Qgb25Tb3J0RW5kID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQ6IERyYWdFbmRFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG4gICAgICAgIGlmIChvdmVyICYmIGFjdGl2ZS5pZCAhPT0gb3Zlci5pZCkge1xuICAgICAgICAgIGNvbnN0IG9sZEluZGV4ID0gY29sb3JzLmZpbmRJbmRleCgoXywgaW5kZXgpID0+IGAke2luZGV4fWAgPT09IGFjdGl2ZS5pZCk7XG4gICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBjb2xvcnMuZmluZEluZGV4KChfLCBpbmRleCkgPT4gYCR7aW5kZXh9YCA9PT0gb3Zlci5pZCk7XG4gICAgICAgICAgY29uc3QgbmV3Q3VzdG9tUGFsZXR0ZSA9IHNvcnRDdXN0b21QYWxldHRlQ29sb3IoY3VzdG9tUGFsZXR0ZSwgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICAgICAgICBzZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICAgICAgICBjdXN0b21QYWxldHRlOiBuZXdDdXN0b21QYWxldHRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SXNTb3J0aW5nKGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBbY29sb3JzLCBjdXN0b21QYWxldHRlLCBzZXRJc1NvcnRpbmcsIHNldENvbG9yUGFsZXR0ZVVJXVxuICAgICk7XG5cbiAgICBjb25zdCBvblNvcnRTdGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldElzU29ydGluZyh0cnVlKTtcbiAgICB9LCBbc2V0SXNTb3J0aW5nXSk7XG5cbiAgICBjb25zdCBpbnB1dENvbG9ySGV4ID0gdXNlQ2FsbGJhY2soXG4gICAgICAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbVBhbGV0dGUgPSB1cGRhdGVDdXN0b21QYWxldHRlQ29sb3IoY3VzdG9tUGFsZXR0ZSwgaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgLy8gc2V0Q29sb3JzKG5ld0NvbG9ycyk7XG4gICAgICAgIHNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgICAgICBjdXN0b21QYWxldHRlOiBuZXdDdXN0b21QYWxldHRlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtjdXN0b21QYWxldHRlLCBzZXRDb2xvclBhbGV0dGVVSV1cbiAgICApO1xuXG4gICAgY29uc3QgZWRpdENvbG9yTWFwVmFsdWUgPSB1c2VDYWxsYmFjayhcbiAgICAgICh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCFjdXN0b21QYWxldHRlLmNvbG9yTWFwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0NvbG9yTWFwID0gY3VzdG9tUGFsZXR0ZS5jb2xvck1hcC5tYXAoXG4gICAgICAgICAgKGNtLCBpKSA9PiAoaSA9PT0gaW5kZXggPyBbdmFsdWUsIGNtWzFdXSA6IGNtKSBhcyBbc3RyaW5nLCBzdHJpbmddXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc29ydCB0aGUgdXNlciBpbnB1dHMgaW4gY2FzZSB0aGUgYnJlYWsgdmFsdWVzIGFyZSBub3Qgb3JkZXJlZFxuICAgICAgICBjb25zdCBicmVha3MgPSBuZXdDb2xvck1hcFxuICAgICAgICAgIC5tYXAoY20gPT4gY21bMF0gYXMgc3RyaW5nIHwgbnVsbClcbiAgICAgICAgICAuc2xpY2UoMCwgLTEpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IE51bWJlcihhKSAtIE51bWJlcihiKSlcbiAgICAgICAgICAuY29uY2F0KG51bGwpO1xuICAgICAgICBjb25zdCBzb3J0ZWROZXdDb2xvck1hcDogQ29sb3JNYXAgPSBuZXdDb2xvck1hcC5tYXAoKGNtLCBpKSA9PiBbYnJlYWtzW2ldLCBjbVsxXV0pO1xuXG4gICAgICAgIHNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgICAgICBjdXN0b21QYWxldHRlOiB7XG4gICAgICAgICAgICAuLi5jdXN0b21QYWxldHRlLFxuICAgICAgICAgICAgY29sb3JNYXA6IHNvcnRlZE5ld0NvbG9yTWFwXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBbc2V0Q29sb3JQYWxldHRlVUksIGN1c3RvbVBhbGV0dGVdXG4gICAgKTtcblxuICAgIC8vIHJlbW92ZSBhIHNlbGVjdGVkIGNhdGVnb3J5IGl0ZW0gZnJvbSBhIGNvbG9yIG1hcFxuICAgIGNvbnN0IHJlbW92ZUNhdGVnb3JpY2FsQ29sb3JNYXBWYWx1ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICghY29sb3JNYXApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgICAgIGN1c3RvbVBhbGV0dGU6IHtcbiAgICAgICAgICAgIC4uLmN1c3RvbVBhbGV0dGUsXG4gICAgICAgICAgICBjb2xvck1hcDogcmVtb3ZlQ2F0ZWdvcmljYWxWYWx1ZUZyb21Db2xvck1hcChjb2xvck1hcCwgaXRlbSwgaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBbc2V0Q29sb3JQYWxldHRlVUksIGN1c3RvbVBhbGV0dGUsIGNvbG9yTWFwXVxuICAgICk7XG5cbiAgICAvLyBhZGQgc2VsZWN0ZWQgY2F0ZWdvcmljYWwgaXRlbXMgdG8gYSBjb2xvciBtYXBcbiAgICBjb25zdCBhZGRDYXRlZ29yaWNhbENvbG9yTWFwVmFsdWUgPSB1c2VDYWxsYmFjayhcbiAgICAgIChpdGVtcywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCFjb2xvck1hcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICAgICAgY3VzdG9tUGFsZXR0ZToge1xuICAgICAgICAgICAgLi4uY3VzdG9tUGFsZXR0ZSxcbiAgICAgICAgICAgIGNvbG9yTWFwOiBhZGRDYXRlZ29yaWNhbFZhbHVlc1RvQ29sb3JNYXAoY29sb3JNYXAsIGl0ZW1zLCBpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtzZXRDb2xvclBhbGV0dGVVSSwgY3VzdG9tUGFsZXR0ZSwgY29sb3JNYXBdXG4gICAgKTtcblxuICAgIC8vIHJlc2V0IGEgY29sb3IgbWFwXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yaWNhbENvbG9yTWFwVmFsdWUgPSB1c2VDYWxsYmFjayhcbiAgICAgIGluZGV4ID0+IHtcbiAgICAgICAgaWYgKCFjb2xvck1hcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICAgICAgY3VzdG9tUGFsZXR0ZToge1xuICAgICAgICAgICAgLi4uY3VzdG9tUGFsZXR0ZSxcbiAgICAgICAgICAgIGNvbG9yTWFwOiByZXNldENhdGVnb3JpY2FsQ29sb3JNYXBCeUluZGV4KGNvbG9yTWFwLCBpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtzZXRDb2xvclBhbGV0dGVVSSwgY3VzdG9tUGFsZXR0ZSwgY29sb3JNYXBdXG4gICAgKTtcblxuICAgIC8vIHNlbGVjdCB0aGUgcmVzdCB2YWx1ZXMgZm9yIGEgY29sb3IgbWFwXG4gICAgY29uc3Qgc2VsZWN0UmVzdENhdGVnb3JpY2FsQ29sb3JNYXAgPSB1c2VDYWxsYmFjayhcbiAgICAgIGluZGV4ID0+IHtcbiAgICAgICAgaWYgKCFjb2xvck1hcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICAgICAgY3VzdG9tUGFsZXR0ZToge1xuICAgICAgICAgICAgLi4uY3VzdG9tUGFsZXR0ZSxcbiAgICAgICAgICAgIGNvbG9yTWFwOiBzZWxlY3RSZXN0Q2F0ZWdvcmljYWxDb2xvck1hcEJ5SW5kZXgoY29sb3JNYXAsIGluZGV4LCBvcmRpbmFsRG9tYWluKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW3NldENvbG9yUGFsZXR0ZVVJLCBjdXN0b21QYWxldHRlLCBjb2xvck1hcCwgb3JkaW5hbERvbWFpbl1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRDdXN0b21QYWxldHRlPlxuICAgICAgICA8V3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGVfX3NvcnRhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgICAgb25Tb3J0RW5kPXtvblNvcnRFbmR9XG4gICAgICAgICAgb25Tb3J0U3RhcnQ9e29uU29ydFN0YXJ0fVxuICAgICAgICA+XG4gICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT5cbiAgICAgICAgICAgIGN1c3RvbVBhbGV0dGUudHlwZSA9PT0gJ2N1c3RvbScgPyAoXG4gICAgICAgICAgICAgIDxDdXN0b21QYWxldHRlSW5wdXRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNvbG9yQnJlYWtzPXtjb2xvckJyZWFrc31cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgaXNTb3J0aW5nPXtpc1NvcnRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgIGlucHV0Q29sb3JIZXg9e2lucHV0Q29sb3JIZXh9XG4gICAgICAgICAgICAgICAgZGlzYWJsZUFwcGVuZD17Y29sb3JzLmxlbmd0aCA+PSAyMH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlRGVsZXRlPXtjb2xvcnMubGVuZ3RoIDw9IDJ9XG4gICAgICAgICAgICAgICAgYWN0aW9uSWNvbnM9e2FjdGlvbkljb25zfVxuICAgICAgICAgICAgICAgIG9uQWRkPXtvbkFkZH1cbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVTa2V0Y2hlcj17b25Ub2dnbGVTa2V0Y2hlcn1cbiAgICAgICAgICAgICAgICBlZGl0Q29sb3JNYXBWYWx1ZT17ZWRpdENvbG9yTWFwVmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBvcmRpbmFsRG9tYWluICYmIChcbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcmljYWxDdXN0b21QYWxldHRlSW5wdXRcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjb2xvck1hcD17Y29sb3JNYXB9XG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBpc1NvcnRpbmc9e2lzU29ydGluZ31cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgIGFjdGlvbkljb25zPXthY3Rpb25JY29uc31cbiAgICAgICAgICAgICAgICAgIG9uQWRkPXtvbkFkZH1cbiAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVEZWxldGU9e2NvbG9ycy5sZW5ndGggPD0gMn1cbiAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlU2tldGNoZXI9e29uVG9nZ2xlU2tldGNoZXJ9XG4gICAgICAgICAgICAgICAgICBhZGRDb2xvck1hcFZhbHVlPXthZGRDYXRlZ29yaWNhbENvbG9yTWFwVmFsdWV9XG4gICAgICAgICAgICAgICAgICByZW1vdmVDb2xvck1hcFZhbHVlPXtyZW1vdmVDYXRlZ29yaWNhbENvbG9yTWFwVmFsdWV9XG4gICAgICAgICAgICAgICAgICByZXNldENvbG9yTWFwVmFsdWU9e3Jlc2V0Q2F0ZWdvcmljYWxDb2xvck1hcFZhbHVlfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0UmVzdENvbG9yTWFwVmFsdWU9e3NlbGVjdFJlc3RDYXRlZ29yaWNhbENvbG9yTWFwfVxuICAgICAgICAgICAgICAgICAgYWxsVmFsdWVzPXtvcmRpbmFsRG9tYWlufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L1dyYXBwZWRTb3J0YWJsZUNvbnRhaW5lcj5cbiAgICAgICAge2N1c3RvbVBhbGV0dGUudHlwZSA9PT0gJ2N1c3RvbU9yZGluYWwnICYmIChcbiAgICAgICAgICA8U3R5bGVkQWRkU3RlcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxBZGRDb2xvclN0b3Agb25Db2xvckFkZD17b25BZGRDYXRlZ29yaWNhbFN0ZXB9IEljb25Db21wb25lbnQ9e2FjdGlvbkljb25zLmFkZH0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gbGluayBzaXplPVwic21hbFwiIG9uQ2xpY2s9e29uQWRkQ2F0ZWdvcmljYWxTdGVwfT5cbiAgICAgICAgICAgICAgQWRkIFN0ZXBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3R5bGVkQWRkU3RlcENvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgICAgPERpdmlkZXJMaW5lIC8+XG4gICAgICAgIHsvKiBDYW5jZWwgb3IgQ29uZmlybSBCdXR0b25zICovfVxuICAgICAgICA8Qm90dG9tQWN0aW9uIG9uQ2FuY2VsPXtvbkNhbmNlbH0gb25Db25maXJtPXtvbkNvbmZpcm19IC8+XG4gICAgICAgIDxQb3J0YWxlZCBpc09wZW5lZD17c2hvd1NrZXRjaGVyICE9PSBmYWxzZX0gbGVmdD17MjgwfSB0b3A9ey0zMDB9IG9uQ2xvc2U9e29uU3dhdGNoQ2xvc2V9PlxuICAgICAgICAgIDxDdXN0b21QaWNrZXIgY29sb3I9e2NvbG9yc1tOdW1iZXIoc2hvd1NrZXRjaGVyKV19IG9uQ2hhbmdlPXtvblBpY2tlclVwZGF0ZX0gLz5cbiAgICAgICAgPC9Qb3J0YWxlZD5cbiAgICAgIDwvU3R5bGVkQ3VzdG9tUGFsZXR0ZT5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDdXN0b21QYWxldHRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYWxldHRlRmFjdG9yeTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBQUEsV0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBQyx1QkFBQSxDQUFBRixPQUFBO0FBU0EsSUFBQUcsS0FBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBU0EsSUFBQUssVUFBQSxHQUFBTCxPQUFBO0FBQ0EsSUFBQU0sU0FBQSxHQUFBTixPQUFBO0FBQ0EsSUFBQU8sVUFBQSxHQUFBUCxPQUFBO0FBQ0EsSUFBQVEsaUJBQUEsR0FBQU4sdUJBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFTLFNBQUEsR0FBQVYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFVLGtCQUFBLEdBQUFWLE9BQUE7QUFDQSxJQUFBVyxVQUFBLEdBQUFaLHNCQUFBLENBQUFDLE9BQUE7QUFD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