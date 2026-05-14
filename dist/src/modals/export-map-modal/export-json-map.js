"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/node_modules/react"));
var _reactJsonPretty = _interopRequireDefault(require("react-json-pretty"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/constants/src");
var _styledComponents = _interopRequireDefault(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/node_modules/styled-components"));
var _styledComponents2 = require("../../common/styled-components");
var _components = require("./components");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/localization/src");
var _reactCopyToClipboard = require("react-copy-to-clipboard");
var _templateObject; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var StyledJsonExportSection = (0, _styledComponents["default"])(_styledComponents2.StyledExportSection)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .note {\n    color: ", ";\n    font-size: 11px;\n  }\n\n  .viewer {\n    position: relative;\n    border: 1px solid ", ";\n    background-color: white;\n    border-radius: 2px;\n    display: inline-block;\n    font: inherit;\n    line-height: 1.5em;\n    padding: 0.5em 3.5em 0.5em 1em;\n    margin: 0;\n    box-sizing: border-box;\n    height: 180px;\n    width: 100%;\n    overflow-y: scroll;\n    overflow-x: auto;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    max-width: 600px;\n  }\n\n  .copy-button {\n    margin: 1em 1em 0 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n"])), function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.selectBorderColorLT;
});
var ExportJsonMapUnmemoized = function ExportJsonMapUnmemoized(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === void 0 ? {} : _ref$config;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    copied = _useState2[0],
    setCopy = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: 'modal.exportMap.json.selection'
  }))), /*#__PURE__*/_react["default"].createElement(StyledJsonExportSection, {
    className: "export-map-modal__json-options"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: 'modal.exportMap.json.configTitle'
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "subtitle"
  }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: 'modal.exportMap.json.configDisclaimer'
  }), /*#__PURE__*/_react["default"].createElement(_components.ExportMapLink, {
    href: _src.ADD_DATA_TO_MAP_DOC
  }, "addDataToMap"), ".")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "viewer"
  }, /*#__PURE__*/_react["default"].createElement(_reactJsonPretty["default"], {
    id: "json-pretty",
    json: config
  }), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: JSON.stringify(config),
    onCopy: function onCopy() {
      return setCopy(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    width: "80px",
    className: "copy-button"
  }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: copied ? 'modal.button.copied' : 'modal.button.copy'
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "disclaimer"
  }, /*#__PURE__*/_react["default"].createElement(_components.StyledWarning, null, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: 'modal.exportMap.json.disclaimer'
  }))))));
};
ExportJsonMapUnmemoized.displayName = 'ExportJsonMap';
var ExportJsonMap = _react["default"].memo(ExportJsonMapUnmemoized);
var ExportJsonMapFactory = function ExportJsonMapFactory() {
  return ExportJsonMap;
};
var _default = exports["default"] = ExportJsonMapFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcmVhY3RKc29uUHJldHR5IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9zcmMiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9zdHlsZWRDb21wb25lbnRzMiIsIl9jb21wb25lbnRzIiwiX3NyYzIiLCJfcmVhY3RDb3B5VG9DbGlwYm9hcmQiLCJfdGVtcGxhdGVPYmplY3QiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiIsInN0eWxlZCIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInByb3BzIiwidGhlbWUiLCJlcnJvckNvbG9yIiwic2VsZWN0Qm9yZGVyQ29sb3JMVCIsIkV4cG9ydEpzb25NYXBVbm1lbW9pemVkIiwiX3JlZiIsIl9yZWYkY29uZmlnIiwiY29uZmlnIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkyIiwiY29waWVkIiwic2V0Q29weSIsImNyZWF0ZUVsZW1lbnQiLCJTdHlsZWRFeHBvcnRNYXBTZWN0aW9uIiwiY2xhc3NOYW1lIiwiRm9ybWF0dGVkTWVzc2FnZSIsImlkIiwiRXhwb3J0TWFwTGluayIsImhyZWYiLCJBRERfREFUQV9UT19NQVBfRE9DIiwianNvbiIsIkNvcHlUb0NsaXBib2FyZCIsInRleHQiLCJKU09OIiwic3RyaW5naWZ5Iiwib25Db3B5IiwiQnV0dG9uIiwid2lkdGgiLCJTdHlsZWRXYXJuaW5nIiwiZGlzcGxheU5hbWUiLCJFeHBvcnRKc29uTWFwIiwiUmVhY3QiLCJtZW1vIiwiRXhwb3J0SnNvbk1hcEZhY3RvcnkiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zcmMvbW9kYWxzL2V4cG9ydC1tYXAtbW9kYWwvZXhwb3J0LWpzb24tbWFwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEpTT05QcmV0dHkgZnJvbSAncmVhY3QtanNvbi1wcmV0dHknO1xuaW1wb3J0IHtBRERfREFUQV9UT19NQVBfRE9DfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0U2VjdGlvbiwgQnV0dG9ufSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtTdHlsZWRFeHBvcnRNYXBTZWN0aW9uLCBTdHlsZWRXYXJuaW5nLCBFeHBvcnRNYXBMaW5rfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0NvcHlUb0NsaXBib2FyZH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuXG5jb25zdCBTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiA9IHN0eWxlZChTdHlsZWRFeHBvcnRTZWN0aW9uKWBcbiAgLm5vdGUge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC52aWV3ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG5cbiAgLmNvcHktYnV0dG9uIHtcbiAgICBtYXJnaW46IDFlbSAxZW0gMCAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbmA7XG5cbnR5cGUgRXhwb3J0SnNvblByb3BUeXBlcyA9IHtcbiAgY29uZmlnOiBhbnk7XG59O1xuXG5jb25zdCBFeHBvcnRKc29uTWFwVW5tZW1vaXplZCA9ICh7Y29uZmlnID0ge319OiBFeHBvcnRKc29uUHJvcFR5cGVzKSA9PiB7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuanNvbi5zZWxlY3Rpb24nfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgIDxTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiBjbGFzc05hbWU9XCJleHBvcnQtbWFwLW1vZGFsX19qc29uLW9wdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uY29uZmlnVGl0bGUnfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uY29uZmlnRGlzY2xhaW1lcid9IC8+XG4gICAgICAgICAgICA8RXhwb3J0TWFwTGluayBocmVmPXtBRERfREFUQV9UT19NQVBfRE9DfT5hZGREYXRhVG9NYXA8L0V4cG9ydE1hcExpbms+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdlclwiPlxuICAgICAgICAgICAgPEpTT05QcmV0dHkgaWQ9XCJqc29uLXByZXR0eVwiIGpzb249e2NvbmZpZ30gLz5cbiAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17SlNPTi5zdHJpbmdpZnkoY29uZmlnKX0gb25Db3B5PXsoKSA9PiBzZXRDb3B5KHRydWUpfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjgwcHhcIiBjbGFzc05hbWU9XCJjb3B5LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtjb3BpZWQgPyAnbW9kYWwuYnV0dG9uLmNvcGllZCcgOiAnbW9kYWwuYnV0dG9uLmNvcHknfSAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxuICAgICAgICAgICAgPFN0eWxlZFdhcm5pbmc+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uZGlzY2xhaW1lcid9IC8+XG4gICAgICAgICAgICA8L1N0eWxlZFdhcm5pbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRKc29uRXhwb3J0U2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkV4cG9ydEpzb25NYXBVbm1lbW9pemVkLmRpc3BsYXlOYW1lID0gJ0V4cG9ydEpzb25NYXAnO1xuXG5jb25zdCBFeHBvcnRKc29uTWFwID0gUmVhY3QubWVtbyhFeHBvcnRKc29uTWFwVW5tZW1vaXplZCk7XG5cbmNvbnN0IEV4cG9ydEpzb25NYXBGYWN0b3J5ID0gKCkgPT4gRXhwb3J0SnNvbk1hcDtcblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0SnNvbk1hcEZhY3Rvcnk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxnQkFBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsSUFBQSxHQUFBSCxPQUFBO0FBQ0EsSUFBQUksaUJBQUEsR0FBQUYsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFLLGtCQUFBLEdBQUFMLE9BQUE7QUFDQSxJQUFBTSxXQUFBLEdBQUFOLE9BQUE7QUFDQSxJQUFBTyxLQUFBLEdBQUFQLE9B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