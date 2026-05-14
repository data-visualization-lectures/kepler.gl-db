"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInputLabel = exports.StyleSharingUrl = exports.SharingUrl = void 0;
exports["default"] = ShareMapUrlModalFactory;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/node_modules/react"));
var _styledComponents = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/node_modules/styled-components"));
var _reactCopyToClipboard = require("react-copy-to-clipboard");
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/styles/src");
var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));
var _styledComponents2 = require("../common/styled-components");
var _statusPanel = _interopRequireDefault(require("./status-panel"));
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/localization/src");
var _useCloudListProvider2 = require("../hooks/use-cloud-list-provider");
var _providerSelect = require("./cloud-components/provider-select");
var _src3 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/constants/src");
var _templateObject, _templateObject2, _templateObject3, _templateObject4; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var StyledInputLabel = exports.StyledInputLabel = _styledComponents["default"].label(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  color: ", ";\n  letter-spacing: 0.2px;\n"])), function (props) {
  return props.theme.textColorLT;
});
var StyleSharingUrl = exports.StyleSharingUrl = _styledComponents["default"].div.attrs({
  className: 'sharing-url'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 14px;\n  flex-direction: column;\n\n  input {\n    border-right: 0;\n  }\n\n  .button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"])));
var SharingUrl = exports.SharingUrl = function SharingUrl(_ref) {
  var url = _ref.url,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? '' : _ref$message;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    copied = _useState2[0],
    setCopy = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(StyleSharingUrl, null, /*#__PURE__*/_react["default"].createElement(StyledInputLabel, null, message), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    type: "text",
    value: url,
    readOnly: true
  }), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: url,
    onCopy: function onCopy() {
      return setCopy(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    width: "80px"
  }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: copied ? 'modal.button.copied' : 'modal.button.copy'
  })))));
};
var nop = function nop() {
  return;
};
var StyledShareMapModal = (0, _styledComponents["default"])(_styledComponents2.StyledModalContent)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 72px 40px 72px;\n  margin: 0 -72px -40px -72px;\n  display: flex;\n  flex-direction: column;\n"])));
var StyledInnerDiv = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 500px;\n"])));
var UNDERLINE_TEXT_DECORATION_STYLE = {
  textDecoration: 'underline'
};
var ShareMapHeader = function ShareMapHeader(_ref2) {
  var cloudProviders = _ref2.cloudProviders;
  var shareableCloudProviders = (0, _react.useMemo)(function () {
    return cloudProviders.filter(function (cp) {
      return cp.hasSharingUrl();
    });
  }, [cloudProviders]);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
    id: 'modal.shareMap.title'
  }))), /*#__PURE__*/_react["default"].createElement(_providerSelect.ProviderSelect, {
    cloudProviders: shareableCloudProviders
  }));
};
function ShareMapUrlModalFactory() {
  var ShareMapUrlModal = function ShareMapUrlModal(_ref3) {
    var _ref3$isProviderLoadi = _ref3.isProviderLoading,
      isProviderLoading = _ref3$isProviderLoadi === void 0 ? false : _ref3$isProviderLoadi,
      _ref3$onExport = _ref3.onExport,
      onExport = _ref3$onExport === void 0 ? nop : _ref3$onExport,
      _ref3$providerError = _ref3.providerError,
      providerError = _ref3$providerError === void 0 ? null : _ref3$providerError,
      _ref3$successInfo = _ref3.successInfo,
      successInfo = _ref3$successInfo === void 0 ? {} : _ref3$successInfo,
      _ref3$onUpdateImageSe = _ref3.onUpdateImageSetting,
      onUpdateImageSetting = _ref3$onUpdateImageSe === void 0 ? nop : _ref3$onUpdateImageSe,
      cleanupExportImage = _ref3.cleanupExportImage;
    var _useCloudListProvider = (0, _useCloudListProvider2.useCloudListProvider)(),
      provider = _useCloudListProvider.provider,
      cloudProviders = _useCloudListProvider.cloudProviders;
    var shareUrl = successInfo.shareUrl,
      folderLink = successInfo.folderLink;
    (0, _react.useEffect)(function () {
      if (provider) {
        onExport(provider);
      }
    }, [onExport, provider]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: _src.themeLT
    }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      provider: provider,
      onUpdateImageSetting: onUpdateImageSetting,
      cleanupExportImage: cleanupExportImage
    }, /*#__PURE__*/_react["default"].createElement(StyledShareMapModal, {
      className: "export-cloud-modal"
    }, /*#__PURE__*/_react["default"].createElement(ShareMapHeader, {
      cloudProviders: cloudProviders
    }), provider !== null && provider !== void 0 && provider.hasSharingUrl() ? /*#__PURE__*/_react["default"].createElement(StyledInnerDiv, {
      "data-testid": _src3.dataTestIds.providerShareMap
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
      id: 'modal.shareMap.shareUriTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
      id: 'modal.shareMap.shareUriSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title warning"
    }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
      id: 'modal.shareMap.shareDisclaimer'
    })))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
      disabled: isProviderLoading
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
      id: 'modal.shareMap.cloudTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
      id: 'modal.shareMap.cloudSubtitle'
    })))), isProviderLoading || providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
      isLoading: isProviderLoading,
      error: providerError,
      providerIcon: provider.icon
    }) : null, shareUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_src2.FormattedMessage, {
      id: 'modal.shareMap.generatedUrlTitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement(SharingUrl, {
      key: 0,
      url: shareUrl
    }), provider && folderLink && /*#__PURE__*/_react["default"].createElement("a", {
      key: 1,
      href: folderLink,
      target: "_blank",
      rel: "noopener noreferrer",
      style: UNDERLINE_TEXT_DECORATION_STYLE
    }, provider.name)))) : null)));
  };
  return ShareMapUrlModal;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9yZWFjdENvcHlUb0NsaXBib2FyZCIsIl9zcmMiLCJfaW1hZ2VNb2RhbENvbnRhaW5lciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfc3R5bGVkQ29tcG9uZW50czIiLCJfc3RhdHVzUGFuZWwiLCJfc3JjMiIsIl91c2VDbG91ZExpc3RQcm92aWRlcjIiLCJfcHJvdmlkZXJTZWxlY3QiLCJfc3JjMyIsIl90ZW1wbGF0ZU9iamVjdCIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfdGVtcGxhdGVPYmplY3QzIiwiX3RlbXBsYXRlT2JqZWN0NCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIlN0eWxlZElucHV0TGFiZWwiLCJleHBvcnRzIiwic3R5bGVkIiwibGFiZWwiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JMVCIsIlN0eWxlU2hhcmluZ1VybCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiU2hhcmluZ1VybCIsIl9yZWYiLCJ1cmwiLCJfcmVmJG1lc3NhZ2UiLCJtZXNzYWdlIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkyIiwiY29waWVkIiwic2V0Q29weSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJJbnB1dExpZ2h0IiwidHlwZSIsInZhbHVlIiwicmVhZE9ubHkiLCJDb3B5VG9DbGlwYm9hcmQiLCJ0ZXh0Iiwib25Db3B5IiwiQnV0dG9uIiwid2lkdGgiLCJGb3JtYXR0ZWRNZXNzYWdlIiwiaWQiLCJub3AiLCJTdHlsZWRTaGFyZU1hcE1vZGFsIiwiU3R5bGVkTW9kYWxDb250ZW50IiwiU3R5bGVkSW5uZXJEaXYiLCJVTkRFUkxJTkVfVEVYVF9ERUNPUkFUSU9OX1NUWUxFIiwidGV4dERlY29yYXRpb24iLCJTaGFyZU1hcEhlYWRlciIsIl9yZWYyIiwiY2xvdWRQcm92aWRlcnMiLCJzaGFyZWFibGVDbG91ZFByb3ZpZGVycyIsInVzZU1lbW8iLCJmaWx0ZXIiLCJjcCIsImhhc1NoYXJpbmdVcmwiLCJTdHlsZWRFeHBvcnRTZWN0aW9uIiwiUHJvdmlkZXJTZWxlY3QiLCJTaGFyZU1hcFVybE1vZGFsRmFjdG9yeSIsIlNoYXJlTWFwVXJsTW9kYWwiLCJfcmVmMyIsIl9yZWYzJGlzUHJvdmlkZXJMb2FkaSIsImlzUHJvdmlkZXJMb2FkaW5nIiwiX3JlZjMkb25FeHBvcnQiLCJvbkV4cG9ydCIsIl9yZWYzJHByb3ZpZGVyRXJyb3IiLCJwcm92aWRlckVycm9yIiwiX3JlZjMkc3VjY2Vzc0luZm8iLCJzdWNjZXNzSW5mbyIsIl9yZWYzJG9uVXBkYXRlSW1hZ2VTZSIsIm9uVXBkYXRlSW1hZ2VTZXR0aW5nIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiX3VzZUNsb3VkTGlzdFByb3ZpZGVyIiwidXNlQ2xvdWRMaXN0UHJvdmlkZXIiLCJwcm92aWRlciIsInNoYXJlVXJsIiwiZm9sZGVyTGluayIsInVzZUVmZmVjdCIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZUxUIiwiZGF0YVRlc3RJZHMiLCJwcm92aWRlclNoYXJlTWFwIiwiZGlzYWJsZWQiLCJpc0xvYWRpbmciLCJlcnJvciIsInByb3ZpZGVySWNvbiIsImljb24iLCJrZXkiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwibmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvc2hhcmUtbWFwLW1vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtDb3B5VG9DbGlwYm9hcmR9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCB7dGhlbWVMVH0gZnJvbSAnQGtlcGxlci5nbC9zdHlsZXMnO1xuaW1wb3J0IEltYWdlTW9kYWxDb250YWluZXIsIHtJbWFnZU1vZGFsQ29udGFpbmVyUHJvcHN9IGZyb20gJy4vaW1hZ2UtbW9kYWwtY29udGFpbmVyJztcblxuaW1wb3J0IHtcbiAgU3R5bGVkTW9kYWxDb250ZW50LFxuICBTdHlsZWRFeHBvcnRTZWN0aW9uLFxuICBJbnB1dExpZ2h0LFxuICBCdXR0b25cbn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTdGF0dXNQYW5lbCBmcm9tICcuL3N0YXR1cy1wYW5lbCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7dXNlQ2xvdWRMaXN0UHJvdmlkZXJ9IGZyb20gJy4uL2hvb2tzL3VzZS1jbG91ZC1saXN0LXByb3ZpZGVyJztcbmltcG9ydCB7UHJvdmlkZXJTZWxlY3R9IGZyb20gJy4vY2xvdWQtY29tcG9uZW50cy9wcm92aWRlci1zZWxlY3QnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnQGtlcGxlci5nbC9jbG91ZC1wcm92aWRlcnMnO1xuaW1wb3J0IHtjbGVhbnVwRXhwb3J0SW1hZ2UgYXMgY2xlYW51cEV4cG9ydEltYWdlQWN0aW9ufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuaW1wb3J0IHtkYXRhVGVzdElkc30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZVNoYXJpbmdVcmwgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2hhcmluZy11cmwnXG59KWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFNoYXJpbmdVcmxQcm9wcyB7XG4gIHVybDogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU2hhcmluZ1VybDogUmVhY3QuRkM8U2hhcmluZ1VybFByb3BzPiA9ICh7dXJsLCBtZXNzYWdlID0gJyd9KSA9PiB7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZVNoYXJpbmdVcmw+XG4gICAgICA8U3R5bGVkSW5wdXRMYWJlbD57bWVzc2FnZX08L1N0eWxlZElucHV0TGFiZWw+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgIDxJbnB1dExpZ2h0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VybH0gcmVhZE9ubHkgLz5cbiAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt1cmx9IG9uQ29weT17KCkgPT4gc2V0Q29weSh0cnVlKX0+XG4gICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjgwcHhcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtjb3BpZWQgPyAnbW9kYWwuYnV0dG9uLmNvcGllZCcgOiAnbW9kYWwuYnV0dG9uLmNvcHknfSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVTaGFyaW5nVXJsPlxuICApO1xufTtcbmNvbnN0IG5vcCA9ICgpID0+IHtcbiAgcmV0dXJuO1xufTtcblxuY29uc3QgU3R5bGVkU2hhcmVNYXBNb2RhbCA9IHN0eWxlZChTdHlsZWRNb2RhbENvbnRlbnQpYFxuICBwYWRkaW5nOiAyNHB4IDcycHggNDBweCA3MnB4O1xuICBtYXJnaW46IDAgLTcycHggLTQwcHggLTcycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBTdHlsZWRJbm5lckRpdiA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuYDtcblxuY29uc3QgVU5ERVJMSU5FX1RFWFRfREVDT1JBVElPTl9TVFlMRSA9IHt0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9O1xuXG5jb25zdCBTaGFyZU1hcEhlYWRlciA9ICh7Y2xvdWRQcm92aWRlcnN9KSA9PiB7XG4gIGNvbnN0IHNoYXJlYWJsZUNsb3VkUHJvdmlkZXJzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjbG91ZFByb3ZpZGVycy5maWx0ZXIoY3AgPT4gY3AuaGFzU2hhcmluZ1VybCgpKSxcbiAgICBbY2xvdWRQcm92aWRlcnNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2hhcmVNYXAudGl0bGUnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFByb3ZpZGVyU2VsZWN0IGNsb3VkUHJvdmlkZXJzPXtzaGFyZWFibGVDbG91ZFByb3ZpZGVyc30gLz5cbiAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgU2hhcmVNYXBVcmxNb2RhbEZhY3RvcnlQcm9wcyB7XG4gIGlzUHJvdmlkZXJMb2FkaW5nPzogYm9vbGVhbjtcbiAgb25FeHBvcnQ/OiAocHJvdmlkZXI6IFByb3ZpZGVyKSA9PiB2b2lkO1xuICBwcm92aWRlckVycm9yPzogc3RyaW5nO1xuICBzdWNjZXNzSW5mbz86IHtzaGFyZVVybD86IHN0cmluZzsgZm9sZGVyTGluaz86IHN0cmluZ307XG4gIG9uVXBkYXRlSW1hZ2VTZXR0aW5nOiBJbWFnZU1vZGFsQ29udGFpbmVyUHJvcHNbJ29uVXBkYXRlSW1hZ2VTZXR0aW5nJ107XG4gIGNsZWFudXBFeHBvcnRJbWFnZTogdHlwZW9mIGNsZWFudXBFeHBvcnRJbWFnZUFjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hhcmVNYXBVcmxNb2RhbEZhY3RvcnkoKSB7XG4gIGNvbnN0IFNoYXJlTWFwVXJsTW9kYWw6IFJlYWN0LkZDPFNoYXJlTWFwVXJsTW9kYWxGYWN0b3J5UHJvcHM+ID0gKHtcbiAgICBpc1Byb3ZpZGVyTG9hZGluZyA9IGZhbHNlLFxuICAgIG9uRXhwb3J0ID0gbm9wLFxuICAgIHByb3ZpZGVyRXJyb3IgPSBudWxsLFxuICAgIHN1Y2Nlc3NJbmZvID0ge30sXG4gICAgb25VcGRhdGVJbWFnZVNldHRpbmcgPSBub3AsXG4gICAgY2xlYW51cEV4cG9ydEltYWdlXG4gIH0pID0+IHtcbiAgICBjb25zdCB7cHJvdmlkZXIsIGNsb3VkUHJvdmlkZXJzfSA9IHVzZUNsb3VkTGlzdFByb3ZpZGVyKCk7XG4gICAgY29uc3Qge3NoYXJlVXJsLCBmb2xkZXJMaW5rfSA9IHN1Y2Nlc3NJbmZvO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICBvbkV4cG9ydChwcm92aWRlcik7XG4gICAgICB9XG4gICAgfSwgW29uRXhwb3J0LCBwcm92aWRlcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZUxUfT5cbiAgICAgICAgPEltYWdlTW9kYWxDb250YWluZXJcbiAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e29uVXBkYXRlSW1hZ2VTZXR0aW5nfVxuICAgICAgICAgIGNsZWFudXBFeHBvcnRJbWFnZT17Y2xlYW51cEV4cG9ydEltYWdlfVxuICAgICAgICA+XG4gICAgICAgICAgPFN0eWxlZFNoYXJlTWFwTW9kYWwgY2xhc3NOYW1lPVwiZXhwb3J0LWNsb3VkLW1vZGFsXCI+XG4gICAgICAgICAgICA8U2hhcmVNYXBIZWFkZXIgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfSAvPlxuICAgICAgICAgICAge3Byb3ZpZGVyPy5oYXNTaGFyaW5nVXJsKCkgPyAoXG4gICAgICAgICAgICAgIDxTdHlsZWRJbm5lckRpdiBkYXRhLXRlc3RpZD17ZGF0YVRlc3RJZHMucHJvdmlkZXJTaGFyZU1hcH0+XG4gICAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnNoYXJlTWFwLnNoYXJlVXJpVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2hhcmVNYXAuc2hhcmVVcmlTdWJ0aXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnNoYXJlTWFwLnNoYXJlRGlzY2xhaW1lcid9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uIGRpc2FibGVkPXtpc1Byb3ZpZGVyTG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnNoYXJlTWFwLmNsb3VkVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2hhcmVNYXAuY2xvdWRTdWJ0aXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtpc1Byb3ZpZGVyTG9hZGluZyB8fCBwcm92aWRlckVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgPFN0YXR1c1BhbmVsXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNQcm92aWRlckxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtwcm92aWRlckVycm9yfVxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlckljb249e3Byb3ZpZGVyLmljb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtzaGFyZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2hhcmVNYXAuZ2VuZXJhdGVkVXJsVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2hhcmluZ1VybCBrZXk9ezB9IHVybD17c2hhcmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVyICYmIGZvbGRlckxpbmsgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtmb2xkZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1VOREVSTElORV9URVhUX0RFQ09SQVRJT05fU1RZTEV9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3R5bGVkSW5uZXJEaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L1N0eWxlZFNoYXJlTWFwTW9kYWw+XG4gICAgICAgIDwvSW1hZ2VNb2RhbENvbnRhaW5lcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTaGFyZU1hcFVybE1vZGFsO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGlCQUFBLEdBQUFGLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxxQkFBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsSUFBQSxHQUFBSCxPQUFBO0FBQ0EsSUFBQUksb0JBQUEsR0FBQUMsc0JBQUEsQ0FBQUwsT0FBQTtBQUVBLElBQUFNLGtCQUFBLEdBQUFOLE9BQUE7QUFNQSxJQUFBTyxZQUFBLEdBQUFGLHNCQUFBLENBQUFMLE9BQUE7QUFDQSxJ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