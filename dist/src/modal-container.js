"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalContainerFactory;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl-db/node_modules/react"));
var _styledComponents = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl-db/node_modules/styled-components");
var _get = _interopRequireDefault(require("lodash/get"));
var _document = _interopRequireDefault(require("global/document"));
var _src = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl-db/src/constants/src");
var _src2 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl-db/src/reducers/src");
var _src3 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl-db/src/utils/src");
var _modalDialog = _interopRequireDefault(require("./modals/modal-dialog"));
var _deleteDataModal = _interopRequireDefault(require("./modals/delete-data-modal"));
var _overwriteMapModal = _interopRequireDefault(require("./modals/overwrite-map-modal"));
var _dataTableModal = _interopRequireDefault(require("./modals/data-table-modal"));
var _loadDataModal = _interopRequireDefault(require("./modals/load-data-modal"));
var _exportImageModal = _interopRequireDefault(require("./modals/export-image-modal"));
var _exportDataModal = _interopRequireDefault(require("./modals/export-data-modal"));
var _exportMapModal = _interopRequireDefault(require("./modals/export-map-modal/export-map-modal"));
var _addMapStyleModal = _interopRequireDefault(require("./modals/add-map-style-modal"));
var _saveMapModal = _interopRequireDefault(require("./modals/save-map-modal"));
var _shareMapModal = _interopRequireDefault(require("./modals/share-map-modal"));
var _src4 = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl-db/src/styles/src");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8; // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
// modals
// Breakpoints
// Template
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var DataTableModalStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  top: 70px;\n  padding: 0;\n  width: 90vw;\n  max-width: 90vw;\n\n  ", " ", ";\n"])), _src4.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]))), _src4.media.palm(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    margin: 0 auto;\n  "]))));
var smallModalCss = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n"])));
var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  top: 60px;\n"])));
var DefaultStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 960px;\n"])));
ModalContainerFactory.deps = [_deleteDataModal["default"], _overwriteMapModal["default"], _dataTableModal["default"], _loadDataModal["default"], _exportImageModal["default"], _exportDataModal["default"], _exportMapModal["default"], _addMapStyleModal["default"], _modalDialog["default"], _saveMapModal["default"], _shareMapModal["default"]];
function ModalContainerFactory(DeleteDatasetModal, OverWriteMapModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportMapModal, AddMapStyleModal, ModalDialog, SaveMapModal, ShareMapModal) {
  /** @augments React.Component<ModalContainerProps> */
  var ModalContainer = /*#__PURE__*/function (_Component) {
    function ModalContainer() {
      var _this;
      (0, _classCallCheck2["default"])(this, ModalContainer);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, ModalContainer, [].concat(args));
      // TODO - remove when prop types are fully exported
      (0, _defineProperty2["default"])(_this, "componentDidMount", function () {
        _document["default"].addEventListener('keyup', _this._onKeyUp);
      });
      (0, _defineProperty2["default"])(_this, "_onKeyUp", function (event) {
        var keyCode = event.keyCode;
        if (keyCode === _src.KeyEvent.DOM_VK_ESCAPE) {
          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])(_this, "_closeModal", function () {
        _this.props.uiStateActions.toggleModal(null);
      });
      (0, _defineProperty2["default"])(_this, "_deleteDataset", function (key) {
        _this.props.visStateActions.removeDataset(key);
        _this._closeModal();
      });
      (0, _defineProperty2["default"])(_this, "_onAddCustomMapStyle", function () {
        _this.props.mapStyleActions.addCustomMapStyle();
        _this._closeModal();
      });
      (0, _defineProperty2["default"])(_this, "_onFileUpload", function (fileList) {
        _this.props.visStateActions.loadFiles(fileList);
      });
      (0, _defineProperty2["default"])(_this, "_onTilesetAdded", function (tileset, processedMetadata) {
        _this.props.visStateActions.updateVisData({
          info: {
            label: tileset.name,
            type: tileset.type,
            format: 'rows'
          },
          data: {
            fields: (processedMetadata === null || processedMetadata === void 0 ? void 0 : processedMetadata.fields) || [],
            rows: []
          },
          metadata: _objectSpread(_objectSpread({}, processedMetadata), tileset.metadata),
          // Vector tile layer supports GPU filtering for numeric and boolean fields
          supportedFilterTypes: [_src.ALL_FIELD_TYPES.real, _src.ALL_FIELD_TYPES.integer, _src.ALL_FIELD_TYPES["boolean"]],
          disableDataOperation: true
        }, {
          autoCreateLayers: true,
          centerMap: true
        });
        _this._closeModal();
      });
      (0, _defineProperty2["default"])(_this, "_onExportImage", function () {
        if (!_this.props.uiState.exportImage.processing) {
          (0, _src3.exportImage)(_this.props.uiState.exportImage, "".concat(_this.props.appName, ".png"));
          _this.props.uiStateActions.cleanupExportImage();
          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])(_this, "_onExportData", function () {
        (0, _src2.exportData)(_this.props, _this.props.uiState.exportData);
        _this._closeModal();
      });
      (0, _defineProperty2["default"])(_this, "_onExportMap", function () {
        var uiState = _this.props.uiState;
        var format = uiState.exportMap.format;
        (format === _src.EXPORT_MAP_FORMATS.HTML ? _src3.exportHtml : _src3.exportJson)(_this.props, _this.props.uiState.exportMap[format] || {});
        _this._closeModal();
      });
      (0, _defineProperty2["default"])(_this, "_exportFileToCloud", function (_ref) {
        var provider = _ref.provider,
          isPublic = _ref.isPublic,
          overwrite = _ref.overwrite,
          closeModal = _ref.closeModal;
        var toSave = (0, _src3.exportMap)(_this.props);
        _this.props.providerActions.exportFileToCloud({
          mapData: toSave,
          provider: provider,
          options: {
            isPublic: isPublic,
            overwrite: overwrite,
            mapIdToOverwrite: _this.props.providerState.savedMapId
          },
          closeModal: closeModal,
          onSuccess: _this.props.onExportToCloudSuccess,
          onError: _this.props.onExportToCloudError
        });
      });
      (0, _defineProperty2["default"])(_this, "_onSaveMap", function (provider) {
        var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        _this._exportFileToCloud({
          provider: provider,
          isPublic: false,
          overwrite: overwrite,
          closeModal: true
        });
      });
      (0, _defineProperty2["default"])(_this, "_onOverwriteMap", function (provider) {
        _this._onSaveMap(provider, true);
      });
      (0, _defineProperty2["default"])(_this, "_onShareMapUrl", function (provider) {
        _this._exportFileToCloud({
          provider: provider,
          isPublic: true,
          overwrite: false,
          closeModal: false
        });
      });
      (0, _defineProperty2["default"])(_this, "_onCloseSaveMap", function () {
        _this.props.providerActions.resetProviderStatus();
        _this._closeModal();
      });
      (0, _defineProperty2["default"])(_this, "_onLoadCloudMap", function (payload) {
        _this.props.providerActions.loadCloudMap(_objectSpread(_objectSpread({}, payload), {}, {
          onSuccess: _this.props.onLoadCloudMapSuccess,
          onError: _this.props.onLoadCloudMapError
        }));
      });
      return _this;
    }
    (0, _inherits2["default"])(ModalContainer, _Component);
    return (0, _createClass2["default"])(ModalContainer, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _document["default"].removeEventListener('keyup', this._onKeyUp);
      }
    }, {
      key: "render",
      value: /* eslint-disable complexity */
      function render() {
        var _this2 = this;
        var _this$props = this.props,
          containerW = _this$props.containerW,
          containerH = _this$props.containerH,
          mapStyle = _this$props.mapStyle,
          mapState = _this$props.mapState,
          uiState = _this$props.uiState,
          visState = _this$props.visState,
          rootNode = _this$props.rootNode,
          visStateActions = _this$props.visStateActions,
          uiStateActions = _this$props.uiStateActions,
          providerState = _this$props.providerState;
        var currentModal = uiState.currentModal,
          datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
          layers = visState.layers,
          editingDataset = visState.editingDataset;
        var template = null;
        var modalProps = {};

        // TODO - currentModal is a string
        // @ts-ignore
        if (currentModal && currentModal.id && currentModal.template) {
          // if currentMdoal template is already provided
          // TODO: need to check whether template is valid
          // @ts-ignore
          template = /*#__PURE__*/_react["default"].createElement(currentModal.template, null);
          // @ts-ignore
          modalProps = currentModal.modalProps;
        } else {
          switch (currentModal) {
            case _src.DATA_TABLE_ID:
              {
                var width = containerW * 0.9;
                template = /*#__PURE__*/_react["default"].createElement(DataTableModal, {
                  datasets: datasets,
                  dataId: editingDataset,
                  showDatasetTable: visStateActions.showDatasetTable,
                  sortTableColumn: visStateActions.sortTableColumn,
                  pinTableColumn: visStateActions.pinTableColumn,
                  copyTableColumn: visStateActions.copyTableColumn,
                  setColumnDisplayFormat: visStateActions.setColumnDisplayFormat,
                  uiStateActions: uiStateActions,
                  uiState: uiState
                });

                // TODO: we need to make this width consistent with the css rule defined modal.js:32 max-width: 70vw
                // @ts-ignore // TODO fix this after add types to Theme
                modalProps.cssStyle = (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n              ", ";\n              ", ";\n            "])), DataTableModalStyle, _src4.media.palm(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n                width: ", "px;\n              "])), width));
                break;
              }
            case _src.DELETE_DATA_ID:
              {
                // validate options
                if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
                  template = /*#__PURE__*/_react["default"].createElement(DeleteDatasetModal, {
                    dataset: datasets[datasetKeyToRemove],
                    layers: layers
                  });
                  modalProps = {
                    title: 'modal.title.deleteDataset',
                    cssStyle: smallModalCss,
                    footer: true,
                    onConfirm: function onConfirm() {
                      return _this2._deleteDataset(datasetKeyToRemove);
                    },
                    onCancel: this._closeModal,
                    confirmButton: {
                      negative: true,
                      large: true,
                      children: 'modal.button.delete'
                    }
                  };
                }
                break; // in case we add a new case after this one
              }
            case _src.ADD_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(LoadDataModal, (0, _extends2["default"])({}, providerState, {
                onClose: this._closeModal,
                onFileUpload: this._onFileUpload,
                onTilesetAdded: this._onTilesetAdded,
                onLoadCloudMap: this._onLoadCloudMap,
                loadFiles: uiState.loadFiles,
                fileLoading: visState.fileLoading,
                fileLoadingProgress: visState.fileLoadingProgress,
                fileFormatNames: (0, _src2.getFileFormatNames)(this.props.visState),
                fileExtensions: (0, _src2.getFileExtensions)(this.props.visState)
              }));
              modalProps = {
                title: 'modal.title.addDataToMap',
                cssStyle: LoadDataModalStyle,
                footer: false,
                onConfirm: this._closeModal
              };
              break;
            case _src.EXPORT_IMAGE_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportImageModal, {
                exportImage: uiState.exportImage,
                mapW: containerW,
                mapH: containerH,
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                cleanupExportImage: uiStateActions.cleanupExportImage
              });
              modalProps = {
                title: 'modal.title.exportImage',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportImage,
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.processing,
                  children: 'modal.button.download'
                }
              };
              break;
            case _src.EXPORT_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportDataModal, (0, _extends2["default"])({}, uiState.exportData, {
                supportedDataTypes: _src.EXPORT_DATA_TYPE_OPTIONS,
                datasets: datasets,
                applyCPUFilter: this.props.visStateActions.applyCPUFilter,
                onChangeExportDataType: uiStateActions.setExportDataType,
                onChangeExportSelectedDataset: uiStateActions.setExportSelectedDataset,
                onChangeExportFiltered: uiStateActions.setExportFiltered
              }));
              modalProps = {
                title: 'modal.title.exportData',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportData,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;
            case _src.EXPORT_MAP_ID:
              {
                var keplerGlConfig = visState.schema.getConfigToSave({
                  mapStyle: mapStyle,
                  visState: visState,
                  mapState: mapState,
                  uiState: uiState
                });
                template = /*#__PURE__*/_react["default"].createElement(ExportMapModal, {
                  config: keplerGlConfig,
                  options: uiState.exportMap,
                  onChangeExportMapFormat: uiStateActions.setExportMapFormat,
                  onEditUserMapboxAccessToken: uiStateActions.setUserMapboxAccessToken,
                  onChangeExportMapHTMLMode: uiStateActions.setExportHTMLMapMode
                });
                modalProps = {
                  title: 'modal.title.exportMap',
                  cssStyle: '',
                  footer: true,
                  onCancel: this._closeModal,
                  onConfirm: this._onExportMap,
                  confirmButton: {
                    large: true,
                    children: 'modal.button.export'
                  }
                };
                break;
              }
            case _src.ADD_MAP_STYLE_ID:
              template = /*#__PURE__*/_react["default"].createElement(AddMapStyleModal, {
                mapboxApiAccessToken: this.props.mapboxApiAccessToken,
                mapboxApiUrl: this.props.mapboxApiUrl,
                mapState: this.props.mapState,
                inputStyle: mapStyle.inputStyle,
                inputMapStyle: this.props.mapStyleActions.inputMapStyle,
                loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
              });
              modalProps = {
                title: 'modal.title.addCustomMapboxStyle',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onAddCustomMapStyle,
                confirmButton: {
                  large: true,
                  disabled: mapStyle.inputStyle.error || !mapStyle.inputStyle.url || !mapStyle.inputStyle.label,
                  children: 'modal.button.addStyle'
                }
              };
              break;
            case _src.SAVE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(SaveMapModal, (0, _extends2["default"])({}, providerState, {
                exportImage: uiState.exportImage,
                mapInfo: visState.mapInfo,
                onSetMapInfo: visStateActions.setMapInfo,
                cleanupExportImage: uiStateActions.cleanupExportImage,
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                onCancel: this._closeModal,
                onConfirm: function onConfirm(provider) {
                  return _this2._onSaveMap(provider, false);
                }
              }));
              modalProps = {
                title: 'modal.title.saveMap',
                cssStyle: '',
                footer: false
              };
              break;
            case _src.OVERWRITE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(OverWriteMapModal, (0, _extends2["default"])({}, providerState, {
                title: (0, _get["default"])(visState, ['mapInfo', 'title']),
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                cleanupExportImage: uiStateActions.cleanupExportImage,
                onConfirm: this._onOverwriteMap,
                onCancel: this._closeModal
              }));
              modalProps = {
                title: 'Overwrite Existing File?',
                cssStyle: smallModalCss,
                footer: false
              };
              break;
            case _src.SHARE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(ShareMapModal, (0, _extends2["default"])({}, providerState, {
                onExport: this._onShareMapUrl,
                cleanupExportImage: uiStateActions.cleanupExportImage,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'modal.title.shareURL',
                cssStyle: '',
                onCancel: this._onCloseSaveMap
              };
              break;
            default:
              break;
          }
        }
        return rootNode ? /*#__PURE__*/_react["default"].createElement(ModalDialog, (0, _extends2["default"])({
          parentSelector: function parentSelector() {
            return rootNode;
          },
          isOpen: Boolean(currentModal),
          onCancel: this._closeModal
        }, modalProps, {
          cssStyle: DefaultStyle.concat(modalProps.cssStyle)
        }), template) : null;
      }
      /* eslint-enable complexity */
    }]);
  }(_react.Component);
  return ModalContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9nZXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2RvY3VtZW50IiwiX3NyYyIsIl9zcmMyIiwiX3NyYzMiLCJfbW9kYWxEaWFsb2ciLCJfZGVsZXRlRGF0YU1vZGFsIiwiX292ZXJ3cml0ZU1hcE1vZGFsIiwiX2RhdGFUYWJsZU1vZGFsIiwiX2xvYWREYXRhTW9kYWwiLCJfZXhwb3J0SW1hZ2VNb2RhbCIsIl9leHBvcnREYXRhTW9kYWwiLCJfZXhwb3J0TWFwTW9kYWwiLCJfYWRkTWFwU3R5bGVNb2RhbCIsIl9zYXZlTWFwTW9kYWwiLCJfc2hhcmVNYXBNb2RhbCIsIl9zcmM0IiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl90ZW1wbGF0ZU9iamVjdDMiLCJfdGVtcGxhdGVPYmplY3Q0IiwiX3RlbXBsYXRlT2JqZWN0NSIsIl90ZW1wbGF0ZU9iamVjdDYiLCJfdGVtcGxhdGVPYmplY3Q3IiwiX3RlbXBsYXRlT2JqZWN0OCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRGF0YVRhYmxlTW9kYWxTdHlsZSIsImNzcyIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwyIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJzbWFsbE1vZGFsQ3NzIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiRGVmYXVsdFN0eWxlIiwiTW9kYWxDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiLCJMb2FkRGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydE1hcE1vZGFsRmFjdG9yeSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiTW9kYWxEaWFsb2dGYWN0b3J5IiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNoYXJlTWFwTW9kYWxGYWN0b3J5IiwiRGVsZXRlRGF0YXNldE1vZGFsIiwiT3ZlcldyaXRlTWFwTW9kYWwiLCJEYXRhVGFibGVNb2RhbCIsIkxvYWREYXRhTW9kYWwiLCJFeHBvcnRJbWFnZU1vZGFsIiwiRXhwb3J0RGF0YU1vZGFsIiwiRXhwb3J0TWFwTW9kYWwiLCJBZGRNYXBTdHlsZU1vZGFsIiwiTW9kYWxEaWFsb2ciLCJTYXZlTWFwTW9kYWwiLCJTaGFyZU1hcE1vZGFsIiwiTW9kYWxDb250YWluZXIiLCJfQ29tcG9uZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25LZXlVcCIsImV2ZW50Iiwia2V5Q29kZSIsIktleUV2ZW50IiwiRE9NX1ZLX0VTQ0FQRSIsIl9jbG9zZU1vZGFsIiwicHJvcHMiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZU1vZGFsIiwia2V5IiwidmlzU3RhdGVBY3Rpb25zIiwicmVtb3ZlRGF0YXNldCIsIm1hcFN0eWxlQWN0aW9ucyIsImFkZEN1c3RvbU1hcFN0eWxlIiwiZmlsZUxpc3QiLCJsb2FkRmlsZXMiLCJ0aWxlc2V0IiwicHJvY2Vzc2VkTWV0YWRhdGEiLCJ1cGRhdGVWaXNEYXRhIiwiaW5mbyIsImxhYmVsIiwibmFtZSIsInR5cGUiLCJmb3JtYXQiLCJkYXRhIiwiZmllbGRzIiwicm93cyIsIm1ldGFkYXRhIiwic3VwcG9ydGVkRmlsdGVyVHlwZXMiLCJBTExfRklFTERfVFlQRVMiLCJyZWFsIiwiaW50ZWdlciIsImRpc2FibGVEYXRhT3BlcmF0aW9uIiwiYXV0b0NyZWF0ZUxheWVycyIsImNlbnRlck1hcCIsInVpU3RhdGUiLCJleHBvcnRJbWFnZSIsInByb2Nlc3NpbmciLCJhcHBOYW1lIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImV4cG9ydE1hcCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJleHBvcnRIdG1sIiwiZXhwb3J0SnNvbiIsIl9yZWYiLCJwcm92aWRlciIsImlzUHVibGljIiwib3ZlcndyaXRlIiwiY2xvc2VNb2RhbCIsInRvU2F2ZSIsInByb3ZpZGVyQWN0aW9ucyIsImV4cG9ydEZpbGVUb0Nsb3VkIiwibWFwRGF0YSIsIm9wdGlvbnMiLCJtYXBJZFRvT3ZlcndyaXRlIiwicHJvdmlkZXJTdGF0ZSIsInNhdmVkTWFwSWQiLCJvblN1Y2Nlc3MiLCJvbkV4cG9ydFRvQ2xvdWRTdWNjZXNzIiwib25FcnJvciIsIm9uRXhwb3J0VG9DbG91ZEVycm9yIiwidW5kZWZpbmVkIiwiX2V4cG9ydEZpbGVUb0Nsb3VkIiwiX29uU2F2ZU1hcCIsInJlc2V0UHJvdmlkZXJTdGF0dXMiLCJwYXlsb2FkIiwibG9hZENsb3VkTWFwIiwib25Mb2FkQ2xvdWRNYXBTdWNjZXNzIiwib25Mb2FkQ2xvdWRNYXBFcnJvciIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwidmFsdWUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJfdGhpczIiLCJfdGhpcyRwcm9wcyIsImNvbnRhaW5lclciLCJjb250YWluZXJIIiwibWFwU3R5bGUiLCJtYXBTdGF0ZSIsInZpc1N0YXRlIiwicm9vdE5vZGUiLCJjdXJyZW50TW9kYWwiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJkYXRhc2V0cyIsImxheWVycyIsImVkaXRpbmdEYXRhc2V0IiwidGVtcGxhdGUiLCJtb2RhbFByb3BzIiwiaWQiLCJjcmVhdGVFbGVtZW50IiwiREFUQV9UQUJMRV9JRCIsIndpZHRoIiwiZGF0YUlkIiwic2hvd0RhdGFzZXRUYWJsZSIsInNvcnRUYWJsZUNvbHVtbiIsInBpblRhYmxlQ29sdW1uIiwiY29weVRhYmxlQ29sdW1uIiwic2V0Q29sdW1uRGlzcGxheUZvcm1hdCIsImNzc1N0eWxlIiwiREVMRVRFX0RBVEFfSUQiLCJkYXRhc2V0IiwidGl0bGUiLCJmb290ZXIiLCJvbkNvbmZpcm0iLCJfZGVsZXRlRGF0YXNldCIsIm9uQ2FuY2VsIiwiY29uZmlybUJ1dHRvbiIsIm5lZ2F0aXZlIiwibGFyZ2UiLCJjaGlsZHJlbiIsIkFERF9EQVRBX0lEIiwiX2V4dGVuZHMyIiwib25DbG9zZSIsIm9uRmlsZVVwbG9hZCIsIl9vbkZpbGVVcGxvYWQiLCJvblRpbGVzZXRBZGRlZCIsIl9vblRpbGVzZXRBZGRlZCIsIm9uTG9hZENsb3VkTWFwIiwiX29uTG9hZENsb3VkTWFwIiwiZmlsZUxvYWRpbmciLCJmaWxlTG9hZGluZ1Byb2dyZXNzIiwiZmlsZUZvcm1hdE5hbWVzIiwiZ2V0RmlsZUZvcm1hdE5hbWVzIiwiZmlsZUV4dGVuc2lvbnMiLCJnZXRGaWxlRXh0ZW5zaW9ucyIsIkVYUE9SVF9JTUFHRV9JRCIsIm1hcFciLCJtYXBIIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJzZXRFeHBvcnRJbWFnZVNldHRpbmciLCJfb25FeHBvcnRJbWFnZSIsImRpc2FibGVkIiwiRVhQT1JUX0RBVEFfSUQiLCJzdXBwb3J0ZWREYXRhVHlwZXMiLCJFWFBPUlRfREFUQV9UWVBFX09QVElPTlMiLCJhcHBseUNQVUZpbHRlciIsIm9uQ2hhbmdlRXhwb3J0RGF0YVR5cGUiLCJzZXRFeHBvcnREYXRhVHlwZSIsIm9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0Iiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0Iiwib25DaGFuZ2VFeHBvcnRGaWx0ZXJlZCIsInNldEV4cG9ydEZpbHRlcmVkIiwiX29uRXhwb3J0RGF0YSIsIkVYUE9SVF9NQVBfSUQiLCJrZXBsZXJHbENvbmZpZyIsInNjaGVtYSIsImdldENvbmZpZ1RvU2F2ZSIsImNvbmZpZyIsIm9uQ2hhbmdlRXhwb3J0TWFwRm9ybWF0Iiwic2V0RXhwb3J0TWFwRm9ybWF0Iiwib25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwic2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwib25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZSIsInNldEV4cG9ydEhUTUxNYXBNb2RlIiwiX29uRXhwb3J0TWFwIiwiQUREX01BUF9TVFlMRV9JRCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwiaW5wdXRTdHlsZSIsImlucHV0TWFwU3R5bGUiLCJsb2FkQ3VzdG9tTWFwU3R5bGUiLCJfb25BZGRDdXN0b21NYXBTdHlsZSIsImVycm9yIiwidXJsIiwiU0FWRV9NQVBfSUQiLCJtYXBJbmZvIiwib25TZXRNYXBJbmZvIiwic2V0TWFwSW5mbyIsIk9WRVJXUklURV9NQVBfSUQiLCJfb25PdmVyd3JpdGVNYXAiLCJTSEFSRV9NQVBfSUQiLCJvbkV4cG9ydCIsIl9vblNoYXJlTWFwVXJsIiwiX29uQ2xvc2VTYXZlTWFwIiwicGFyZW50U2VsZWN0b3IiLCJpc09wZW4iLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9zcmMvbW9kYWwtY29udGFpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XG5cbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBleHBvcnREYXRhLFxuICBnZXRGaWxlRm9ybWF0TmFtZXMsXG4gIGdldEZpbGVFeHRlbnNpb25zLFxuICBNYXBTdHlsZSxcbiAgUHJvdmlkZXJTdGF0ZVxufSBmcm9tICdAa2VwbGVyLmdsL3JlZHVjZXJzJztcbmltcG9ydCB7ZXhwb3J0SHRtbCwgZXhwb3J0TWFwLCBleHBvcnRKc29uLCBleHBvcnRJbWFnZX0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmltcG9ydCBNb2RhbERpYWxvZ0ZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvbW9kYWwtZGlhbG9nJztcblxuLy8gbW9kYWxzXG5pbXBvcnQgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kZWxldGUtZGF0YS1tb2RhbCc7XG5pbXBvcnQgT3ZlcldyaXRlTWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL292ZXJ3cml0ZS1tYXAtbW9kYWwnO1xuaW1wb3J0IERhdGFUYWJsZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsJztcbmltcG9ydCBMb2FkRGF0YU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9sb2FkLWRhdGEtbW9kYWwnO1xuaW1wb3J0IEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1pbWFnZS1tb2RhbCc7XG5pbXBvcnQgRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9leHBvcnQtZGF0YS1tb2RhbCc7XG5pbXBvcnQgRXhwb3J0TWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1tYXAtbW9kYWwvZXhwb3J0LW1hcC1tb2RhbCc7XG5pbXBvcnQgQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvYWRkLW1hcC1zdHlsZS1tb2RhbCc7XG5pbXBvcnQgU2F2ZU1hcE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9zYXZlLW1hcC1tb2RhbCc7XG5pbXBvcnQgU2hhcmVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvc2hhcmUtbWFwLW1vZGFsJztcblxuLy8gQnJlYWtwb2ludHNcbmltcG9ydCB7bWVkaWF9IGZyb20gJ0BrZXBsZXIuZ2wvc3R5bGVzJztcblxuLy8gVGVtcGxhdGVcbmltcG9ydCB7XG4gIEVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyxcbiAgRVhQT1JUX01BUF9GT1JNQVRTLFxuICBLZXlFdmVudCxcbiAgQUREX0RBVEFfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIERFTEVURV9EQVRBX0lELFxuICBFWFBPUlRfREFUQV9JRCxcbiAgRVhQT1JUX0lNQUdFX0lELFxuICBFWFBPUlRfTUFQX0lELFxuICBBRERfTUFQX1NUWUxFX0lELFxuICBTQVZFX01BUF9JRCxcbiAgU0hBUkVfTUFQX0lELFxuICBPVkVSV1JJVEVfTUFQX0lEXG59IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcblxuaW1wb3J0IHtNYXBTdGF0ZSwgVWlTdGF0ZSwgT25TdWNjZXNzQ2FsbEJhY2ssIE9uRXJyb3JDYWxsQmFja30gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmltcG9ydCB7XG4gIFZpc1N0YXRlQWN0aW9ucyxcbiAgVUlTdGF0ZUFjdGlvbnMsXG4gIE1hcFN0eWxlQWN0aW9ucyxcbiAgUHJvdmlkZXJBY3Rpb25zXG59IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5pbXBvcnQge01vZGFsRGlhbG9nUHJvcHN9IGZyb20gJy4vY29tbW9uL21vZGFsJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvY2xvdWQtcHJvdmlkZXJzJztcbmltcG9ydCB7VmlzU3RhdGV9IGZyb20gJ0BrZXBsZXIuZ2wvc2NoZW1hcyc7XG5cbmNvbnN0IERhdGFUYWJsZU1vZGFsU3R5bGUgPSBjc3NgXG4gIHRvcDogNzBweDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDkwdnc7XG4gIG1heC13aWR0aDogOTB2dztcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmc6IDA7XG4gIGB9ICR7bWVkaWEucGFsbWBcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICBgfTtcbmA7XG5jb25zdCBzbWFsbE1vZGFsQ3NzID0gY3NzYFxuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiA0MHB4IDQwcHggMzJweCA0MHB4O1xuYDtcblxuY29uc3QgTG9hZERhdGFNb2RhbFN0eWxlID0gY3NzYFxuICB0b3A6IDYwcHg7XG5gO1xuXG5jb25zdCBEZWZhdWx0U3R5bGUgPSBjc3NgXG4gIG1heC13aWR0aDogOTYwcHg7XG5gO1xuXG5leHBvcnQgdHlwZSBNb2RhbENvbnRhaW5lclByb3BzID0ge1xuICBhcHBOYW1lOiBzdHJpbmc7XG4gIHJvb3ROb2RlOiBSZWFjdC5SZWFjdEluc3RhbmNlIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgY29udGFpbmVyVzogbnVtYmVyO1xuICBjb250YWluZXJIOiBudW1iZXI7XG4gIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIG1hcGJveEFwaVVybD86IHN0cmluZztcbiAgbWFwU3RhdGU6IE1hcFN0YXRlO1xuICBtYXBTdHlsZTogTWFwU3R5bGU7XG4gIHVpU3RhdGU6IFVpU3RhdGU7XG4gIHZpc1N0YXRlOiBWaXNTdGF0ZTtcbiAgcHJvdmlkZXJTdGF0ZTogUHJvdmlkZXJTdGF0ZTtcbiAgdmlzU3RhdGVBY3Rpb25zOiB0eXBlb2YgVmlzU3RhdGVBY3Rpb25zO1xuICB1aVN0YXRlQWN0aW9uczogdHlwZW9mIFVJU3RhdGVBY3Rpb25zO1xuICBtYXBTdHlsZUFjdGlvbnM6IHR5cGVvZiBNYXBTdHlsZUFjdGlvbnM7XG4gIHByb3ZpZGVyQWN0aW9uczogdHlwZW9mIFByb3ZpZGVyQWN0aW9ucztcbiAgb25TYXZlVG9TdG9yYWdlPzogKCkgPT4gdm9pZDtcbiAgY2xvdWRQcm92aWRlcnM6IFByb3ZpZGVyW107XG4gIG9uTG9hZENsb3VkTWFwU3VjY2Vzcz86IE9uU3VjY2Vzc0NhbGxCYWNrO1xuICBvbkxvYWRDbG91ZE1hcEVycm9yPzogT25FcnJvckNhbGxCYWNrO1xuICBvbkV4cG9ydFRvQ2xvdWRTdWNjZXNzPzogT25TdWNjZXNzQ2FsbEJhY2s7XG4gIG9uRXhwb3J0VG9DbG91ZEVycm9yPzogT25FcnJvckNhbGxCYWNrO1xufTtcblxuTW9kYWxDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbXG4gIERlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnksXG4gIE92ZXJXcml0ZU1hcE1vZGFsRmFjdG9yeSxcbiAgRGF0YVRhYmxlTW9kYWxGYWN0b3J5LFxuICBMb2FkRGF0YU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnksXG4gIEV4cG9ydERhdGFNb2RhbEZhY3RvcnksXG4gIEV4cG9ydE1hcE1vZGFsRmFjdG9yeSxcbiAgQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnksXG4gIE1vZGFsRGlhbG9nRmFjdG9yeSxcbiAgU2F2ZU1hcE1vZGFsRmFjdG9yeSxcbiAgU2hhcmVNYXBNb2RhbEZhY3Rvcnlcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsQ29udGFpbmVyRmFjdG9yeShcbiAgRGVsZXRlRGF0YXNldE1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBEZWxldGVEYXRhc2V0TW9kYWxGYWN0b3J5PixcbiAgT3ZlcldyaXRlTWFwTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIE92ZXJXcml0ZU1hcE1vZGFsRmFjdG9yeT4sXG4gIERhdGFUYWJsZU1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBEYXRhVGFibGVNb2RhbEZhY3Rvcnk+LFxuICBMb2FkRGF0YU1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBMb2FkRGF0YU1vZGFsRmFjdG9yeT4sXG4gIEV4cG9ydEltYWdlTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5PixcbiAgRXhwb3J0RGF0YU1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBFeHBvcnREYXRhTW9kYWxGYWN0b3J5PixcbiAgRXhwb3J0TWFwTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIEV4cG9ydE1hcE1vZGFsRmFjdG9yeT4sXG4gIEFkZE1hcFN0eWxlTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5PixcbiAgTW9kYWxEaWFsb2c6IFJldHVyblR5cGU8dHlwZW9mIE1vZGFsRGlhbG9nRmFjdG9yeT4sXG4gIFNhdmVNYXBNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgU2F2ZU1hcE1vZGFsRmFjdG9yeT4sXG4gIFNoYXJlTWFwTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIFNoYXJlTWFwTW9kYWxGYWN0b3J5PlxuKTogUmVhY3QuRWxlbWVudFR5cGU8TW9kYWxDb250YWluZXJQcm9wcz4ge1xuICAvKiogQGF1Z21lbnRzIFJlYWN0LkNvbXBvbmVudDxNb2RhbENvbnRhaW5lclByb3BzPiAqL1xuICBjbGFzcyBNb2RhbENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxNb2RhbENvbnRhaW5lclByb3BzPiB7XG4gICAgLy8gVE9ETyAtIHJlbW92ZSB3aGVuIHByb3AgdHlwZXMgYXJlIGZ1bGx5IGV4cG9ydGVkXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXApO1xuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXApO1xuICAgIH1cblxuICAgIF9vbktleVVwID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5RXZlbnQuRE9NX1ZLX0VTQ0FQRSkge1xuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9jbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChudWxsKTtcbiAgICB9O1xuXG4gICAgX2RlbGV0ZURhdGFzZXQgPSBrZXkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRGF0YXNldChrZXkpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25BZGRDdXN0b21NYXBTdHlsZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmFkZEN1c3RvbU1hcFN0eWxlKCk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkZpbGVVcGxvYWQgPSBmaWxlTGlzdCA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5sb2FkRmlsZXMoZmlsZUxpc3QpO1xuICAgIH07XG5cbiAgICBfb25UaWxlc2V0QWRkZWQgPSAoXG4gICAgICB0aWxlc2V0OiB7bmFtZTogc3RyaW5nOyB0eXBlOiBzdHJpbmc7IG1ldGFkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+fSxcbiAgICAgIHByb2Nlc3NlZE1ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgYW55PlxuICAgICkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMudXBkYXRlVmlzRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIGluZm86IHtsYWJlbDogdGlsZXNldC5uYW1lLCB0eXBlOiB0aWxlc2V0LnR5cGUsIGZvcm1hdDogJ3Jvd3MnfSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmaWVsZHM6IHByb2Nlc3NlZE1ldGFkYXRhPy5maWVsZHMgfHwgW10sXG4gICAgICAgICAgICByb3dzOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NlZE1ldGFkYXRhLFxuICAgICAgICAgICAgLi4udGlsZXNldC5tZXRhZGF0YVxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gVmVjdG9yIHRpbGUgbGF5ZXIgc3VwcG9ydHMgR1BVIGZpbHRlcmluZyBmb3IgbnVtZXJpYyBhbmQgYm9vbGVhbiBmaWVsZHNcbiAgICAgICAgICBzdXBwb3J0ZWRGaWx0ZXJUeXBlczogW1xuICAgICAgICAgICAgQUxMX0ZJRUxEX1RZUEVTLnJlYWwsXG4gICAgICAgICAgICBBTExfRklFTERfVFlQRVMuaW50ZWdlcixcbiAgICAgICAgICAgIEFMTF9GSUVMRF9UWVBFUy5ib29sZWFuXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkaXNhYmxlRGF0YU9wZXJhdGlvbjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0NyZWF0ZUxheWVyczogdHJ1ZSxcbiAgICAgICAgICBjZW50ZXJNYXA6IHRydWVcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uRXhwb3J0SW1hZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZS5wcm9jZXNzaW5nKSB7XG4gICAgICAgIGV4cG9ydEltYWdlKHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZSwgYCR7dGhpcy5wcm9wcy5hcHBOYW1lfS5wbmdgKTtcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5jbGVhbnVwRXhwb3J0SW1hZ2UoKTtcbiAgICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfb25FeHBvcnREYXRhID0gKCkgPT4ge1xuICAgICAgZXhwb3J0RGF0YSh0aGlzLnByb3BzLCB0aGlzLnByb3BzLnVpU3RhdGUuZXhwb3J0RGF0YSk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydE1hcCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHt1aVN0YXRlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7Zm9ybWF0fSA9IHVpU3RhdGUuZXhwb3J0TWFwO1xuICAgICAgKGZvcm1hdCA9PT0gRVhQT1JUX01BUF9GT1JNQVRTLkhUTUwgPyBleHBvcnRIdG1sIDogZXhwb3J0SnNvbikoXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRNYXBbZm9ybWF0XSB8fCB7fVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX2V4cG9ydEZpbGVUb0Nsb3VkID0gKHtwcm92aWRlciwgaXNQdWJsaWMsIG92ZXJ3cml0ZSwgY2xvc2VNb2RhbH0pID0+IHtcbiAgICAgIGNvbnN0IHRvU2F2ZSA9IGV4cG9ydE1hcCh0aGlzLnByb3BzKTtcblxuICAgICAgdGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMuZXhwb3J0RmlsZVRvQ2xvdWQoe1xuICAgICAgICBtYXBEYXRhOiB0b1NhdmUsXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgaXNQdWJsaWMsXG4gICAgICAgICAgb3ZlcndyaXRlLFxuICAgICAgICAgIG1hcElkVG9PdmVyd3JpdGU6IHRoaXMucHJvcHMucHJvdmlkZXJTdGF0ZS5zYXZlZE1hcElkXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlTW9kYWwsXG4gICAgICAgIG9uU3VjY2VzczogdGhpcy5wcm9wcy5vbkV4cG9ydFRvQ2xvdWRTdWNjZXNzLFxuICAgICAgICBvbkVycm9yOiB0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZEVycm9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX29uU2F2ZU1hcCA9IChwcm92aWRlciwgb3ZlcndyaXRlID0gZmFsc2UpID0+IHtcbiAgICAgIHRoaXMuX2V4cG9ydEZpbGVUb0Nsb3VkKHtcbiAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgIGlzUHVibGljOiBmYWxzZSxcbiAgICAgICAgb3ZlcndyaXRlLFxuICAgICAgICBjbG9zZU1vZGFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX29uT3ZlcndyaXRlTWFwID0gcHJvdmlkZXIgPT4ge1xuICAgICAgdGhpcy5fb25TYXZlTWFwKHByb3ZpZGVyLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgX29uU2hhcmVNYXBVcmwgPSBwcm92aWRlciA9PiB7XG4gICAgICB0aGlzLl9leHBvcnRGaWxlVG9DbG91ZCh7cHJvdmlkZXIsIGlzUHVibGljOiB0cnVlLCBvdmVyd3JpdGU6IGZhbHNlLCBjbG9zZU1vZGFsOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBfb25DbG9zZVNhdmVNYXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5yZXNldFByb3ZpZGVyU3RhdHVzKCk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkxvYWRDbG91ZE1hcCA9IHBheWxvYWQgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMubG9hZENsb3VkTWFwKHtcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgb25TdWNjZXNzOiB0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwU3VjY2VzcyxcbiAgICAgICAgb25FcnJvcjogdGhpcy5wcm9wcy5vbkxvYWRDbG91ZE1hcEVycm9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGFpbmVyVyxcbiAgICAgICAgY29udGFpbmVySCxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgcm9vdE5vZGUsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHByb3ZpZGVyU3RhdGVcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2N1cnJlbnRNb2RhbCwgZGF0YXNldEtleVRvUmVtb3ZlfSA9IHVpU3RhdGU7XG4gICAgICBjb25zdCB7ZGF0YXNldHMsIGxheWVycywgZWRpdGluZ0RhdGFzZXR9ID0gdmlzU3RhdGU7XG5cbiAgICAgIGxldCB0ZW1wbGF0ZTogSlNYLkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBtb2RhbFByb3BzOiBQYXJ0aWFsPE1vZGFsRGlhbG9nUHJvcHM+ID0ge307XG5cbiAgICAgIC8vIFRPRE8gLSBjdXJyZW50TW9kYWwgaXMgYSBzdHJpbmdcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGlmIChjdXJyZW50TW9kYWwgJiYgY3VycmVudE1vZGFsLmlkICYmIGN1cnJlbnRNb2RhbC50ZW1wbGF0ZSkge1xuICAgICAgICAvLyBpZiBjdXJyZW50TWRvYWwgdGVtcGxhdGUgaXMgYWxyZWFkeSBwcm92aWRlZFxuICAgICAgICAvLyBUT0RPOiBuZWVkIHRvIGNoZWNrIHdoZXRoZXIgdGVtcGxhdGUgaXMgdmFsaWRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0ZW1wbGF0ZSA9IDxjdXJyZW50TW9kYWwudGVtcGxhdGUgLz47XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbW9kYWxQcm9wcyA9IGN1cnJlbnRNb2RhbC5tb2RhbFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50TW9kYWwpIHtcbiAgICAgICAgICBjYXNlIERBVEFfVEFCTEVfSUQ6IHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyVyAqIDAuOTtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RGF0YVRhYmxlTW9kYWxcbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgZGF0YUlkPXtlZGl0aW5nRGF0YXNldH1cbiAgICAgICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXt2aXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgICAgICAgICBzb3J0VGFibGVDb2x1bW49e3Zpc1N0YXRlQWN0aW9ucy5zb3J0VGFibGVDb2x1bW59XG4gICAgICAgICAgICAgICAgcGluVGFibGVDb2x1bW49e3Zpc1N0YXRlQWN0aW9ucy5waW5UYWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgICBjb3B5VGFibGVDb2x1bW49e3Zpc1N0YXRlQWN0aW9ucy5jb3B5VGFibGVDb2x1bW59XG4gICAgICAgICAgICAgICAgc2V0Q29sdW1uRGlzcGxheUZvcm1hdD17dmlzU3RhdGVBY3Rpb25zLnNldENvbHVtbkRpc3BsYXlGb3JtYXR9XG4gICAgICAgICAgICAgICAgdWlTdGF0ZUFjdGlvbnM9e3VpU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgIHVpU3RhdGU9e3VpU3RhdGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB3ZSBuZWVkIHRvIG1ha2UgdGhpcyB3aWR0aCBjb25zaXN0ZW50IHdpdGggdGhlIGNzcyBydWxlIGRlZmluZWQgbW9kYWwuanM6MzIgbWF4LXdpZHRoOiA3MHZ3XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIC8vIFRPRE8gZml4IHRoaXMgYWZ0ZXIgYWRkIHR5cGVzIHRvIFRoZW1lXG4gICAgICAgICAgICBtb2RhbFByb3BzLmNzc1N0eWxlID0gY3NzYFxuICAgICAgICAgICAgICAke0RhdGFUYWJsZU1vZGFsU3R5bGV9O1xuICAgICAgICAgICAgICAke21lZGlhLnBhbG1gXG4gICAgICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XG4gICAgICAgICAgICAgIGB9O1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIERFTEVURV9EQVRBX0lEOiB7XG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBvcHRpb25zXG4gICAgICAgICAgICBpZiAoZGF0YXNldEtleVRvUmVtb3ZlICYmIGRhdGFzZXRzICYmIGRhdGFzZXRzW2RhdGFzZXRLZXlUb1JlbW92ZV0pIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgICAgPERlbGV0ZURhdGFzZXRNb2RhbCBkYXRhc2V0PXtkYXRhc2V0c1tkYXRhc2V0S2V5VG9SZW1vdmVdfSBsYXllcnM9e2xheWVyc30gLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmRlbGV0ZURhdGFzZXQnLFxuICAgICAgICAgICAgICAgIGNzc1N0eWxlOiBzbWFsbE1vZGFsQ3NzLFxuICAgICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZURhdGFzZXQoZGF0YXNldEtleVRvUmVtb3ZlKSxcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZGVsZXRlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrOyAvLyBpbiBjYXNlIHdlIGFkZCBhIG5ldyBjYXNlIGFmdGVyIHRoaXMgb25lXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgQUREX0RBVEFfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPExvYWREYXRhTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgIG9uRmlsZVVwbG9hZD17dGhpcy5fb25GaWxlVXBsb2FkfVxuICAgICAgICAgICAgICAgIG9uVGlsZXNldEFkZGVkPXt0aGlzLl9vblRpbGVzZXRBZGRlZH1cbiAgICAgICAgICAgICAgICBvbkxvYWRDbG91ZE1hcD17dGhpcy5fb25Mb2FkQ2xvdWRNYXB9XG4gICAgICAgICAgICAgICAgbG9hZEZpbGVzPXt1aVN0YXRlLmxvYWRGaWxlc31cbiAgICAgICAgICAgICAgICBmaWxlTG9hZGluZz17dmlzU3RhdGUuZmlsZUxvYWRpbmd9XG4gICAgICAgICAgICAgICAgZmlsZUxvYWRpbmdQcm9ncmVzcz17dmlzU3RhdGUuZmlsZUxvYWRpbmdQcm9ncmVzc31cbiAgICAgICAgICAgICAgICBmaWxlRm9ybWF0TmFtZXM9e2dldEZpbGVGb3JtYXROYW1lcyh0aGlzLnByb3BzLnZpc1N0YXRlKX1cbiAgICAgICAgICAgICAgICBmaWxlRXh0ZW5zaW9ucz17Z2V0RmlsZUV4dGVuc2lvbnModGhpcy5wcm9wcy52aXNTdGF0ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5hZGREYXRhVG9NYXAnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogTG9hZERhdGFNb2RhbFN0eWxlLFxuICAgICAgICAgICAgICBmb290ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX2Nsb3NlTW9kYWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEVYUE9SVF9JTUFHRV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0SW1hZ2VNb2RhbFxuICAgICAgICAgICAgICAgIGV4cG9ydEltYWdlPXt1aVN0YXRlLmV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG1hcFc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgICAgbWFwSD17Y29udGFpbmVySH1cbiAgICAgICAgICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nfVxuICAgICAgICAgICAgICAgIGNsZWFudXBFeHBvcnRJbWFnZT17dWlTdGF0ZUFjdGlvbnMuY2xlYW51cEV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZXhwb3J0SW1hZ2UnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnRJbWFnZSxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB1aVN0YXRlLmV4cG9ydEltYWdlLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZG93bmxvYWQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEVYUE9SVF9EQVRBX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxFeHBvcnREYXRhTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4udWlTdGF0ZS5leHBvcnREYXRhfVxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZERhdGFUeXBlcz17RVhQT1JUX0RBVEFfVFlQRV9PUFRJT05TfVxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICBhcHBseUNQVUZpbHRlcj17dGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMuYXBwbHlDUFVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnREYXRhVHlwZT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0RGF0YVR5cGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRTZWxlY3RlZERhdGFzZXQ9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRGaWx0ZXJlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmV4cG9ydERhdGEnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnREYXRhLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFWFBPUlRfTUFQX0lEOiB7XG4gICAgICAgICAgICBjb25zdCBrZXBsZXJHbENvbmZpZyA9IHZpc1N0YXRlLnNjaGVtYS5nZXRDb25maWdUb1NhdmUoe1xuICAgICAgICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgICAgICAgdmlzU3RhdGUsXG4gICAgICAgICAgICAgIG1hcFN0YXRlLFxuICAgICAgICAgICAgICB1aVN0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0TWFwTW9kYWxcbiAgICAgICAgICAgICAgICBjb25maWc9e2tlcGxlckdsQ29uZmlnfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3VpU3RhdGUuZXhwb3J0TWFwfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwRm9ybWF0PXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRNYXBGb3JtYXR9XG4gICAgICAgICAgICAgICAgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuPXt1aVN0YXRlQWN0aW9ucy5zZXRVc2VyTWFwYm94QWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SFRNTE1hcE1vZGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5leHBvcnRNYXAnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnRNYXAsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ21vZGFsLmJ1dHRvbi5leHBvcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBBRERfTUFQX1NUWUxFX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxBZGRNYXBTdHlsZU1vZGFsXG4gICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e3RoaXMucHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgICAgbWFwYm94QXBpVXJsPXt0aGlzLnByb3BzLm1hcGJveEFwaVVybH1cbiAgICAgICAgICAgICAgICBtYXBTdGF0ZT17dGhpcy5wcm9wcy5tYXBTdGF0ZX1cbiAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXttYXBTdHlsZS5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgIGlucHV0TWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmlucHV0TWFwU3R5bGV9XG4gICAgICAgICAgICAgICAgbG9hZEN1c3RvbU1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkQ3VzdG9tTWFwU3R5bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5hZGRDdXN0b21NYXBib3hTdHlsZScsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiAnJyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbkFkZEN1c3RvbU1hcFN0eWxlLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICBtYXBTdHlsZS5pbnB1dFN0eWxlLmVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAhbWFwU3R5bGUuaW5wdXRTdHlsZS51cmwgfHxcbiAgICAgICAgICAgICAgICAgICFtYXBTdHlsZS5pbnB1dFN0eWxlLmxhYmVsLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmFkZFN0eWxlJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTQVZFX01BUF9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8U2F2ZU1hcE1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2U9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgbWFwSW5mbz17dmlzU3RhdGUubWFwSW5mb31cbiAgICAgICAgICAgICAgICBvblNldE1hcEluZm89e3Zpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvfVxuICAgICAgICAgICAgICAgIGNsZWFudXBFeHBvcnRJbWFnZT17dWlTdGF0ZUFjdGlvbnMuY2xlYW51cEV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgb25Db25maXJtPXtwcm92aWRlciA9PiB0aGlzLl9vblNhdmVNYXAocHJvdmlkZXIsIGZhbHNlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLnNhdmVNYXAnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIGZvb3RlcjogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIE9WRVJXUklURV9NQVBfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPE92ZXJXcml0ZU1hcE1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2dldCh2aXNTdGF0ZSwgWydtYXBJbmZvJywgJ3RpdGxlJ10pfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgICAgY2xlYW51cEV4cG9ydEltYWdlPXt1aVN0YXRlQWN0aW9ucy5jbGVhbnVwRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgb25Db25maXJtPXt0aGlzLl9vbk92ZXJ3cml0ZU1hcH1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ092ZXJ3cml0ZSBFeGlzdGluZyBGaWxlPycsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiBzbWFsbE1vZGFsQ3NzLFxuICAgICAgICAgICAgICBmb290ZXI6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTSEFSRV9NQVBfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPFNoYXJlTWFwTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICBvbkV4cG9ydD17dGhpcy5fb25TaGFyZU1hcFVybH1cbiAgICAgICAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e3VpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuc2hhcmVVUkwnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9vbkNsb3NlU2F2ZU1hcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm9vdE5vZGUgPyAoXG4gICAgICAgIDxNb2RhbERpYWxvZ1xuICAgICAgICAgIHBhcmVudFNlbGVjdG9yPXsoKSA9PiByb290Tm9kZSBhcyBIVE1MRWxlbWVudH1cbiAgICAgICAgICBpc09wZW49e0Jvb2xlYW4oY3VycmVudE1vZGFsKX1cbiAgICAgICAgICBvbkNhbmNlbD17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICB7Li4ubW9kYWxQcm9wc31cbiAgICAgICAgICBjc3NTdHlsZT17RGVmYXVsdFN0eWxlLmNvbmNhdChtb2RhbFByb3BzLmNzc1N0eWxlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZW1wbGF0ZX1cbiAgICAgICAgPC9Nb2RhbERpYWxvZz5cbiAgICAgICkgOiBudWxsO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cbiAgfVxuXG4gIHJldHVybiBNb2RhbENvbnRhaW5lcjtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGlCQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxJQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxTQUFBLEdBQUFELHNCQUFBLENBQUFILE9BQUE7QUFFQSxJQUFBSyxJQUFBLEdBQUFMLE9BQUE7QUFDQSxJQUFBTSxLQUFBLEdBQUFOLE9BQUE7QUFPQSxJQUFBTyxLQUFBLEdBQUFQLE9BQUE7QUFFQSxJQUFBUSxZQUFBLEdBQUFMLHNCQUFBLENBQUFILE9BQUE7QUFHQSxJQUFBUyxnQkFBQSxHQUFBTixzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQVUsa0JBQUEsR0FBQVAsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFXLGVBQUEsR0FBQVIsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFZLGNBQUEsR0FBQVQsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFhLGlCQUFBLEdBQUFWLHNCQUFBLENBQUFI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