"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/react"));
var _styledComponents = _interopRequireDefault(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/styled-components"));
var _loadingSpinner = _interopRequireDefault(require("./loading-spinner"));
var _templateObject; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
var StyledImagePreview = _styledComponents["default"].div.attrs({
  className: 'image-preview'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  .dimension,\n  .instruction {\n    padding: 8px 0px;\n  }\n\n  .preview-image {\n    background: #e2e2e2;\n    border-radius: 4px;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);\n    width: 100%;\n    max-width: 400px;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .preview-image-container {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: var(--aspect-ratio);\n    max-height: 400px;\n  }\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n\n  .preview-image--error {\n    font-size: 12px;\n    padding: 12px;\n    color: ", ";\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"])), function (props) {
  return props.theme.errorColor;
});
/**
 * @param {object} props
 * @param {ExportImage} [props.exportImage]
 * @param {number} [props.width]
 * @param {boolean} [props.showDimension]
 */
var ImagePreview = function ImagePreview(_ref) {
  var exportImage = _ref.exportImage,
    _ref$showDimension = _ref.showDimension,
    showDimension = _ref$showDimension === void 0 ? false : _ref$showDimension;
  var _ref2 = exportImage || {},
    error = _ref2.error,
    imageDataUri = _ref2.imageDataUri,
    processing = _ref2.processing,
    _ref2$imageSize = _ref2.imageSize,
    _ref2$imageSize2 = _ref2$imageSize === void 0 ? {} : _ref2$imageSize,
    _ref2$imageSize2$imag = _ref2$imageSize2.imageW,
    imageW = _ref2$imageSize2$imag === void 0 ? 0 : _ref2$imageSize2$imag,
    _ref2$imageSize2$imag2 = _ref2$imageSize2.imageH,
    imageH = _ref2$imageSize2$imag2 === void 0 ? 0 : _ref2$imageSize2$imag2;

  // Calculate aspect ratio percentage for padding-bottom trick
  var aspectRatio = imageW && imageH ? imageH / imageW * 100 : 75; // default to 4:3 if no dimensions

  return /*#__PURE__*/_react["default"].createElement(StyledImagePreview, {
    style: {
      '--aspect-ratio': "".concat(aspectRatio, "%")
    }
  }, showDimension ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "dimension"
  }, imageW, " pixel x ", imageH, " pixel") : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image-container"
  }, processing ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image-spinner"
  }, /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], null)) : error ?
  /*#__PURE__*/
  // Hide error message - allow save to proceed without thumbnail
  _react["default"].createElement("div", {
    className: "preview-image-placeholder"
  }) : /*#__PURE__*/_react["default"].createElement("img", {
    className: "preview-image-placeholder",
    src: imageDataUri,
    alt: "Map preview"
  }))));
};
var _default = exports["default"] = ImagePreview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9zdHlsZWRDb21wb25lbnRzIiwiX2xvYWRpbmdTcGlubmVyIiwiX3RlbXBsYXRlT2JqZWN0IiwiU3R5bGVkSW1hZ2VQcmV2aWV3Iiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInByb3BzIiwidGhlbWUiLCJlcnJvckNvbG9yIiwiSW1hZ2VQcmV2aWV3IiwiX3JlZiIsImV4cG9ydEltYWdlIiwiX3JlZiRzaG93RGltZW5zaW9uIiwic2hvd0RpbWVuc2lvbiIsIl9yZWYyIiwiZXJyb3IiLCJpbWFnZURhdGFVcmkiLCJwcm9jZXNzaW5nIiwiX3JlZjIkaW1hZ2VTaXplIiwiaW1hZ2VTaXplIiwiX3JlZjIkaW1hZ2VTaXplMiIsIl9yZWYyJGltYWdlU2l6ZTIkaW1hZyIsImltYWdlVyIsIl9yZWYyJGltYWdlU2l6ZTIkaW1hZzIiLCJpbWFnZUgiLCJhc3BlY3RSYXRpbyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImNvbmNhdCIsInNyYyIsImFsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaW1hZ2UtcHJldmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy8gQ29weXJpZ2h0IGNvbnRyaWJ1dG9ycyB0byB0aGUga2VwbGVyLmdsIHByb2plY3RcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4vbG9hZGluZy1zcGlubmVyJztcbmltcG9ydCB7IEV4cG9ydEltYWdlIH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmNvbnN0IFN0eWxlZEltYWdlUHJldmlldyA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdpbWFnZS1wcmV2aWV3J1xufSlgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5kaW1lbnNpb24sXG4gIC5pbnN0cnVjdGlvbiB7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2UtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1hc3BlY3QtcmF0aW8pO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2UtcGxhY2Vob2xkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXNwaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpO1xuICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLS1lcnJvciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgSW1hZ2VQcmV2aWV3UHJvcHMge1xuICBleHBvcnRJbWFnZT86IEV4cG9ydEltYWdlO1xuICB3aWR0aD86IG51bWJlcjtcbiAgc2hvd0RpbWVuc2lvbj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge0V4cG9ydEltYWdlfSBbcHJvcHMuZXhwb3J0SW1hZ2VdXG4gKiBAcGFyYW0ge251bWJlcn0gW3Byb3BzLndpZHRoXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuc2hvd0RpbWVuc2lvbl1cbiAqL1xuY29uc3QgSW1hZ2VQcmV2aWV3ID0gKHsgZXhwb3J0SW1hZ2UsIHNob3dEaW1lbnNpb24gPSBmYWxzZSB9OiBJbWFnZVByZXZpZXdQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZXJyb3IsXG4gICAgaW1hZ2VEYXRhVXJpLFxuICAgIHByb2Nlc3NpbmcsXG4gICAgaW1hZ2VTaXplOiB7IGltYWdlVyA9IDAsIGltYWdlSCA9IDAgfSA9IHt9XG4gIH0gPSBleHBvcnRJbWFnZSB8fCB7fTtcblxuICAvLyBDYWxjdWxhdGUgYXNwZWN0IHJhdGlvIHBlcmNlbnRhZ2UgZm9yIHBhZGRpbmctYm90dG9tIHRyaWNrXG4gIGNvbnN0IGFzcGVjdFJhdGlvID0gaW1hZ2VXICYmIGltYWdlSCA/IChpbWFnZUggLyBpbWFnZVcpICogMTAwIDogNzU7IC8vIGRlZmF1bHQgdG8gNDozIGlmIG5vIGRpbWVuc2lvbnNcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRJbWFnZVByZXZpZXcgc3R5bGU9e3sgJy0tYXNwZWN0LXJhdGlvJzogYCR7YXNwZWN0UmF0aW99JWAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfT5cbiAgICAgIHtzaG93RGltZW5zaW9uID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvblwiPlxuICAgICAgICAgIHtpbWFnZVd9IHBpeGVsIHgge2ltYWdlSH0gcGl4ZWxcbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb2Nlc3NpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2Utc3Bpbm5lclwiPlxuICAgICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICAgIC8vIEhpZGUgZXJyb3IgbWVzc2FnZSAtIGFsbG93IHNhdmUgdG8gcHJvY2VlZCB3aXRob3V0IHRodW1ibmFpbFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyXCIgc3JjPXtpbWFnZURhdGFVcml9IGFsdD1cIk1hcCBwcmV2aWV3XCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkSW1hZ2VQcmV2aWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VQcmV2aWV3O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLElBQUFBLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGlCQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxlQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFBK0MsSUFBQUcsZUFBQSxFQUwvQztBQUNBO0FBT0EsSUFBTUMsa0JBQWtCLEdBQUdDLDRCQUFNLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDO0VBQzFDQyxTQUFTLEVBQUU7QUFDYixDQUFDLENBQUMsQ0FBQUwsZUFBQSxLQUFBQSxlQUFBLE9BQUFNLHVCQUFBLDJvQ0FrRFcsVUFBQUMsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVO0FBQUEsRUFXM0M7QUFRRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFrRTtFQUFBLElBQTVEQyxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztJQUFBQyxrQkFBQSxHQUFBRixJQUFBLENBQUVHLGFBQWE7SUFBYkEsYUFBYSxHQUFBRCxrQkFBQSxjQUFHLEtBQUssR0FBQUEsa0JBQUE7RUFDeEQsSUFBQUUsS0FBQSxHQUtJSCxXQUFXLElBQUksQ0FBQyxDQUFDO0lBSm5CSSxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztJQUNMQyxZQUFZLEdBQUFGLEtBQUEsQ0FBWkUsWUFBWTtJQUNaQyxVQUFVLEdBQUFILEtBQUEsQ0FBVkcsVUFBVTtJQUFBQyxlQUFBLEdBQUFKLEtBQUEsQ0FDVkssU0FBUztJQUFBQyxnQkFBQSxHQUFBRixlQUFBLGNBQStCLENBQUMsQ0FBQyxHQUFBQSxlQUFBO0lBQUFHLHFCQUFBLEdBQUFELGdCQUFBLENBQTdCRSxNQUFNO0lBQU5BLE1BQU0sR0FBQUQscUJBQUEsY0FBRyxDQUFDLEdBQUFBLHFCQUFBO0lBQUFFLHNCQUFBLEdBQUFILGdCQUFBLENBQUVJLE1BQU07SUFBTkEsTUFBTSxHQUFBRCxzQkFBQSxjQUFHLENBQUMsR0FBQUEsc0JBQUE7O0VBR3JDO0VBQ0EsSUFBTUUsV0FBVyxHQUFHSCxNQUFNLElBQUlFLE1BQU0sR0FBSUEsTUFBTSxHQUFHRixNQUFNLEdBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztFQUVyRSxvQkFDRTVCLE1BQUEsWUFBQWdDLGFBQUEsQ0FBQzFCLGtCQUFrQjtJQUFDMkIsS0FBSyxFQUFFO01BQUUsZ0JBQWdCLEtBQUFDLE1BQUEsQ0FBS0gsV0FBVztJQUFJO0VBQXlCLEdBQ3ZGWixhQUFhLGdCQUNabkIsTUFBQSxZQUFBZ0MsYUFBQTtJQUFLdEIsU0FBUyxFQUFDO0VBQVcsR0FDdkJrQixNQUFNLEVBQUMsV0FBUyxFQUFDRSxNQUFNLEVBQUMsUUFDdEIsQ0FBQyxHQUNKLElBQUksZUFDUjlCLE1BQUEsWUFBQWdDLGFBQUE7SUFBS3RCLFNBQVMsRUFBQztFQUFlLGdCQUM1QlYsTUFBQSxZQUFBZ0MsYUFBQTtJQUFLdEIsU0FBUyxFQUFDO0VBQXlCLEdBQ3JDYSxVQUFVLGdCQUNUdkIsTUFBQSxZQUFBZ0MsYUFBQTtJQUFLdEIsU0FBUyxFQUFDO0VBQXVCLGdCQUNwQ1YsTUFBQSxZQUFBZ0MsYUFBQSxDQUFDNUIsZUFBQSxXQUFjLE1BQUUsQ0FDZCxDQUFDLEdBQ0ppQixLQUFLO0VBQUE7RUFDUDtFQUNBckIsTUFBQSxZQUFBZ0MsYUFBQTtJQUFLdEIsU0FBUyxFQUFDO0VBQTJCLENBQUUsQ0FBQyxnQkFFN0NWLE1BQUEsWUFBQWdDLGFBQUE7SUFBS3RCLFNBQVMsRUFBQywyQkFBMkI7SUFBQ3lCLEdBQUcsRUFBRWIsWUFBYTtJQUFDYyxHQUFHLEVBQUM7RUFBYSxDQUFFLENBRWhGLENBQ0YsQ0FDYSxDQUFDO0FBRXpCLENBQUM7QUFBQyxJQUFBQyxRQUFBLEdBQUFDLE9BQUEsY0FFYXZCLFlBQVkiLCJpZ25vcmVMaXN0IjpbXX0=