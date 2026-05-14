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
var _react = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/node_modules/react"));
var _styledComponents = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/node_modules/styled-components");
var _get = _interopRequireDefault(require("lodash/get"));
var _document = _interopRequireDefault(require("global/document"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/constants/src");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/reducers/src");
var _src3 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/utils/src");
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
var _src4 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/styles/src");
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
var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  top: 110px;\n"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9nZXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2RvY3VtZW50IiwiX3NyYyIsIl9zcmMyIiwiX3NyYzMiLCJfbW9kYWxEaWFsb2ciLCJfZGVsZXRlRGF0YU1vZGFsIiwiX292ZXJ3cml0ZU1hcE1vZGFsIiwiX2RhdGFUYWJsZU1vZGFsIiwiX2xvYWREYXRhTW9kYWwiLCJfZXhwb3J0SW1hZ2VNb2RhbCIsIl9leHBvcnREYXRhTW9kYWwiLCJfZXhwb3J0TWFwTW9kYWwiLCJfYWRkTWFwU3R5bGVNb2RhbCIsIl9zYXZlTWFwTW9kYWwiLCJfc2hhcmVNYXBNb2RhbCIsIl9zcmM0IiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl90ZW1wbGF0ZU9iamVjdDMiLCJfdGVtcGxhdGVPYmplY3Q0IiwiX3RlbXBsYXRlT2JqZWN0NSIsIl90ZW1wbGF0ZU9iamVjdDYiLCJfdGVtcGxhdGVPYmplY3Q3IiwiX3RlbXBsYXRlT2JqZWN0OCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRGF0YVRhYmxlTW9kYWxTdHlsZSIsImNzcyIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwyIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJzbWFsbE1vZGFsQ3NzIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiRGVmYXVsdFN0eWxlIiwiTW9kYWxDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiLCJMb2FkRGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydE1hcE1vZGFsRmFjdG9yeSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiTW9kYWxEaWFsb2dGYWN0b3J5IiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNoYXJlTWFwTW9kYWxGYWN0b3J5IiwiRGVsZXRlRGF0YXNldE1vZGFsIiwiT3ZlcldyaXRlTWFwTW9kYWwiLCJEYXRhVGFibGVNb2RhbCIsIkxvYWREYXRhTW9kYWwiLCJFeHBvcnRJbWFnZU1vZGFsIiwiRXhwb3J0RGF0YU1vZGFsIiwiRXhwb3J0TWFwTW9kYWwiLCJBZGRNYXBTdHlsZU1vZGFsIiwiTW9kYWxEaWFsb2ciLCJTYXZlTWFwTW9kYWwiLCJTaGFyZU1hcE1vZGFsIiwiTW9kYWxDb250YWluZXIiLCJfQ29tcG9uZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25LZXlVcCIsImV2ZW50Iiwia2V5Q29kZSIsIktleUV2ZW50IiwiRE9NX1ZLX0VTQ0FQRSIsIl9jbG9zZU1vZGFsIiwicHJvcHMiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZU1vZGFsIiwia2V5IiwidmlzU3RhdGVBY3Rpb25zIiwicmVtb3ZlRGF0YXNldCIsIm1hcFN0eWxlQWN0aW9ucyIsImFkZEN1c3RvbU1hcFN0eWxlIiwiZmlsZUxpc3QiLCJsb2FkRmlsZXMiLCJ0aWxlc2V0IiwicHJvY2Vzc2VkTWV0YWRhdGEiLCJ1cGRhdGVWaXNEYXRhIiwiaW5mbyIsImxhYmVsIiwibmFtZSIsInR5cGUiLCJmb3JtYXQiLCJkYXRhIiwiZmllbGRzIiwicm93cyIsIm1ldGFkYXRhIiwic3VwcG9ydGVkRmlsdGVyVHlwZXMiLCJBTExfRklFTERfVFlQRVMiLCJyZWFsIiwiaW50ZWdlciIsImRpc2FibGVEYXRhT3BlcmF0aW9uIiwiYXV0b0NyZWF0ZUxheWVycyIsImNlbnRlck1hcCIsInVpU3RhdGUiLCJleHBvcnRJbWFnZSIsInByb2Nlc3NpbmciLCJhcHBOYW1lIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImV4cG9ydE1hcCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJleHBvcnRIdG1sIiwiZXhwb3J0SnNvbiIsIl9yZWYiLCJwcm92aWRlciIsImlzUHVibGljIiwib3ZlcndyaXRlIiwiY2xvc2VNb2RhbCIsInRvU2F2ZSIsInByb3ZpZGVyQWN0aW9ucyIsImV4cG9ydEZpbGVUb0Nsb3VkIiwibWFwRGF0YSIsIm9wdGlvbnMiLCJtYXBJZFRvT3ZlcndyaXRlIiwicHJvdmlkZXJTdGF0ZSIsInNhdmVkTWFwSWQiLCJvblN1Y2Nlc3MiLCJvbkV4cG9ydFRvQ2xvdWRTdWNjZXNzIiwib25FcnJvciIsIm9uRXhwb3J0VG9DbG91ZEVycm9yIiwidW5kZWZpbmVkIiwiX2V4cG9ydEZpbGVUb0Nsb3VkIiwiX29uU2F2ZU1hcCIsInJlc2V0UHJvdmlkZXJTdGF0dXMiLCJwYXlsb2FkIiwibG9hZENsb3VkTWFwIiwib25Mb2FkQ2xvdWRNYXBTdWNjZXNzIiwib25Mb2FkQ2xvdWRNYXBFcnJvciIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwidmFsdWUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJfdGhpczIiLCJfdGhpcyRwcm9wcyIsImNvbnRhaW5lclciLCJjb250YWluZXJIIiwibWFwU3R5bGUiLCJtYXBTdGF0ZSIsInZpc1N0YXRlIiwicm9vdE5vZGUiLCJjdXJyZW50TW9kYWwiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJkYXRhc2V0cyIsImxheWVycyIsImVkaXRpbmdEYXRhc2V0IiwidGVtcGxhdGUiLCJtb2RhbFByb3BzIiwiaWQiLCJjcmVhdGVFbGVtZW50IiwiREFUQV9UQUJMRV9JRCIsIndpZHRoIiwiZGF0YUlkIiwic2hvd0RhdGFzZXRUYWJsZSIsInNvcnRUYWJsZUNvbHVtbiIsInBpblRhYmxlQ29sdW1uIiwiY29weVRhYmxlQ29sdW1uIiwic2V0Q29sdW1uRGlzcGxheUZvcm1hdCIsImNzc1N0eWxlIiwiREVMRVRFX0RBVEFfSUQiLCJkYXRhc2V0IiwidGl0bGUiLCJmb290ZXIiLCJvbkNvbmZpcm0iLCJfZGVsZXRlRGF0YXNldCIsIm9uQ2FuY2VsIiwiY29uZmlybUJ1dHRvbiIsIm5lZ2F0aXZlIiwibGFyZ2UiLCJjaGlsZHJlbiIsIkFERF9EQVRBX0lEIiwiX2V4dGVuZHMyIiwib25DbG9zZSIsIm9uRmlsZVVwbG9hZCIsIl9vbkZpbGVVcGxvYWQiLCJvblRpbGVzZXRBZGRlZCIsIl9vblRpbGVzZXRBZGRlZCIsIm9uTG9hZENsb3VkTWFwIiwiX29uTG9hZENsb3VkTWFwIiwiZmlsZUxvYWRpbmciLCJmaWxlTG9hZGluZ1Byb2dyZXNzIiwiZmlsZUZvcm1hdE5hbWVzIiwiZ2V0RmlsZUZvcm1hdE5hbWVzIiwiZmlsZUV4dGVuc2lvbnMiLCJnZXRGaWxlRXh0ZW5zaW9ucyIsIkVYUE9SVF9JTUFHRV9JRCIsIm1hcFciLCJtYXBIIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJzZXRFeHBvcnRJbWFnZVNldHRpbmciLCJfb25FeHBvcnRJbWFnZSIsImRpc2FibGVkIiwiRVhQT1JUX0RBVEFfSUQiLCJzdXBwb3J0ZWREYXRhVHlwZXMiLCJFWFBPUlRfREFUQV9UWVBFX09QVElPTlMiLCJhcHBseUNQVUZpbHRlciIsIm9uQ2hhbmdlRXhwb3J0RGF0YVR5cGUiLCJzZXRFeHBvcnREYXRhVHlwZSIsIm9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0Iiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0Iiwib25DaGFuZ2VFeHBvcnRGaWx0ZXJlZCIsInNldEV4cG9ydEZpbHRlcmVkIiwiX29uRXhwb3J0RGF0YSIsIkVYUE9SVF9NQVBfSUQiLCJrZXBsZXJHbENvbmZpZyIsInNjaGVtYSIsImdldENvbmZpZ1RvU2F2ZSIsImNvbmZpZyIsIm9uQ2hhbmdlRXhwb3J0TWFwRm9ybWF0Iiwic2V0RXhwb3J0TWFwRm9ybWF0Iiwib25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwic2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwib25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZSIsInNldEV4cG9ydEhUTUxNYXBNb2RlIiwiX29uRXhwb3J0TWFwIiwiQUREX01BUF9TVFlMRV9JRCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwiaW5wdXRTdHlsZSIsImlucHV0TWFwU3R5bGUiLCJsb2FkQ3VzdG9tTWFwU3R5bGUiLCJfb25BZGRDdXN0b21NYXBTdHlsZSIsImVycm9yIiwidXJsIiwiU0FWRV9NQVBfSUQiLCJtYXBJbmZvIiwib25TZXRNYXBJbmZvIiwic2V0TWFwSW5mbyIsIk9WRVJXUklURV9NQVBfSUQiLCJfb25PdmVyd3JpdGVNYXAiLCJTSEFSRV9NQVBfSUQiLCJvbkV4cG9ydCIsIl9vblNoYXJlTWFwVXJsIiwiX29uQ2xvc2VTYXZlTWFwIiwicGFyZW50U2VsZWN0b3IiLCJpc09wZW4iLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9zcmMvbW9kYWwtY29udGFpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XG5cbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBleHBvcnREYXRhLFxuICBnZXRGaWxlRm9ybWF0TmFtZXMsXG4gIGdldEZpbGVFeHRlbnNpb25zLFxuICBNYXBTdHlsZSxcbiAgUHJvdmlkZXJTdGF0ZVxufSBmcm9tICdAa2VwbGVyLmdsL3JlZHVjZXJzJztcbmltcG9ydCB7ZXhwb3J0SHRtbCwgZXhwb3J0TWFwLCBleHBvcnRKc29uLCBleHBvcnRJbWFnZX0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmltcG9ydCBNb2RhbERpYWxvZ0ZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvbW9kYWwtZGlhbG9nJztcblxuLy8gbW9kYWxzXG5pbXBvcnQgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kZWxldGUtZGF0YS1tb2RhbCc7XG5pbXBvcnQgT3ZlcldyaXRlTWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL292ZXJ3cml0ZS1tYXAtbW9kYWwnO1xuaW1wb3J0IERhdGFUYWJsZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsJztcbmltcG9ydCBMb2FkRGF0YU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9sb2FkLWRhdGEtbW9kYWwnO1xuaW1wb3J0IEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1pbWFnZS1tb2RhbCc7XG5pbXBvcnQgRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9leHBvcnQtZGF0YS1tb2RhbCc7XG5pbXBvcnQgRXhwb3J0TWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1tYXAtbW9kYWwvZXhwb3J0LW1hcC1tb2RhbCc7XG5pbXBvcnQgQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvYWRkLW1hcC1zdHlsZS1tb2RhbCc7XG5pbXBvcnQgU2F2ZU1hcE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9zYXZlLW1hcC1tb2RhbCc7XG5pbXBvcnQgU2hhcmVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvc2hhcmUtbWFwLW1vZGFsJztcblxuLy8gQnJlYWtwb2ludHNcbmltcG9ydCB7bWVkaWF9IGZyb20gJ0BrZXBsZXIuZ2wvc3R5bGVzJztcblxuLy8gVGVtcGxhdGVcbmltcG9ydCB7XG4gIEVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyxcbiAgRVhQT1JUX01BUF9GT1JNQVRTLFxuICBLZXlFdmVudCxcbiAgQUREX0RBVEFfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIERFTEVURV9EQVRBX0lELFxuICBFWFBPUlRfREFUQV9JRCxcbiAgRVhQT1JUX0lNQUdFX0lELFxuICBFWFBPUlRfTUFQX0lELFxuICBBRERfTUFQX1NUWUxFX0lELFxuICBTQVZFX01BUF9JRCxcbiAgU0hBUkVfTUFQX0lELFxuICBPVkVSV1JJVEVfTUFQX0lEXG59IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcblxuaW1wb3J0IHtNYXBTdGF0ZSwgVWlTdGF0ZSwgT25TdWNjZXNzQ2FsbEJhY2ssIE9uRXJyb3JDYWxsQmFja30gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmltcG9ydCB7XG4gIFZpc1N0YXRlQWN0aW9ucyxcbiAgVUlTdGF0ZUFjdGlvbnMsXG4gIE1hcFN0eWxlQWN0aW9ucyxcbiAgUHJvdmlkZXJBY3Rpb25zXG59IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5pbXBvcnQge01vZGFsRGlhbG9nUHJvcHN9IGZyb20gJy4vY29tbW9uL21vZGFsJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvY2xvdWQtcHJvdmlkZXJzJztcbmltcG9ydCB7VmlzU3RhdGV9IGZyb20gJ0BrZXBsZXIuZ2wvc2NoZW1hcyc7XG5cbmNvbnN0IERhdGFUYWJsZU1vZGFsU3R5bGUgPSBjc3NgXG4gIHRvcDogNzBweDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDkwdnc7XG4gIG1heC13aWR0aDogOTB2dztcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmc6IDA7XG4gIGB9ICR7bWVkaWEucGFsbWBcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICBgfTtcbmA7XG5jb25zdCBzbWFsbE1vZGFsQ3NzID0gY3NzYFxuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiA0MHB4IDQwcHggMzJweCA0MHB4O1xuYDtcblxuY29uc3QgTG9hZERhdGFNb2RhbFN0eWxlID0gY3NzYFxuICB0b3A6IDExMHB4O1xuYDtcblxuY29uc3QgRGVmYXVsdFN0eWxlID0gY3NzYFxuICBtYXgtd2lkdGg6IDk2MHB4O1xuYDtcblxuZXhwb3J0IHR5cGUgTW9kYWxDb250YWluZXJQcm9wcyA9IHtcbiAgYXBwTmFtZTogc3RyaW5nO1xuICByb290Tm9kZTogUmVhY3QuUmVhY3RJbnN0YW5jZSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIGNvbnRhaW5lclc6IG51bWJlcjtcbiAgY29udGFpbmVySDogbnVtYmVyO1xuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBtYXBib3hBcGlVcmw/OiBzdHJpbmc7XG4gIG1hcFN0YXRlOiBNYXBTdGF0ZTtcbiAgbWFwU3R5bGU6IE1hcFN0eWxlO1xuICB1aVN0YXRlOiBVaVN0YXRlO1xuICB2aXNTdGF0ZTogVmlzU3RhdGU7XG4gIHByb3ZpZGVyU3RhdGU6IFByb3ZpZGVyU3RhdGU7XG4gIHZpc1N0YXRlQWN0aW9uczogdHlwZW9mIFZpc1N0YXRlQWN0aW9ucztcbiAgdWlTdGF0ZUFjdGlvbnM6IHR5cGVvZiBVSVN0YXRlQWN0aW9ucztcbiAgbWFwU3R5bGVBY3Rpb25zOiB0eXBlb2YgTWFwU3R5bGVBY3Rpb25zO1xuICBwcm92aWRlckFjdGlvbnM6IHR5cGVvZiBQcm92aWRlckFjdGlvbnM7XG4gIG9uU2F2ZVRvU3RvcmFnZT86ICgpID0+IHZvaWQ7XG4gIGNsb3VkUHJvdmlkZXJzOiBQcm92aWRlcltdO1xuICBvbkxvYWRDbG91ZE1hcFN1Y2Nlc3M/OiBPblN1Y2Nlc3NDYWxsQmFjaztcbiAgb25Mb2FkQ2xvdWRNYXBFcnJvcj86IE9uRXJyb3JDYWxsQmFjaztcbiAgb25FeHBvcnRUb0Nsb3VkU3VjY2Vzcz86IE9uU3VjY2Vzc0NhbGxCYWNrO1xuICBvbkV4cG9ydFRvQ2xvdWRFcnJvcj86IE9uRXJyb3JDYWxsQmFjaztcbn07XG5cbk1vZGFsQ29udGFpbmVyRmFjdG9yeS5kZXBzID0gW1xuICBEZWxldGVEYXRhc2V0TW9kYWxGYWN0b3J5LFxuICBPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnksXG4gIERhdGFUYWJsZU1vZGFsRmFjdG9yeSxcbiAgTG9hZERhdGFNb2RhbEZhY3RvcnksXG4gIEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5LFxuICBFeHBvcnREYXRhTW9kYWxGYWN0b3J5LFxuICBFeHBvcnRNYXBNb2RhbEZhY3RvcnksXG4gIEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5LFxuICBNb2RhbERpYWxvZ0ZhY3RvcnksXG4gIFNhdmVNYXBNb2RhbEZhY3RvcnksXG4gIFNoYXJlTWFwTW9kYWxGYWN0b3J5XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbENvbnRhaW5lckZhY3RvcnkoXG4gIERlbGV0ZURhdGFzZXRNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeT4sXG4gIE92ZXJXcml0ZU1hcE1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBPdmVyV3JpdGVNYXBNb2RhbEZhY3Rvcnk+LFxuICBEYXRhVGFibGVNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgRGF0YVRhYmxlTW9kYWxGYWN0b3J5PixcbiAgTG9hZERhdGFNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgTG9hZERhdGFNb2RhbEZhY3Rvcnk+LFxuICBFeHBvcnRJbWFnZU1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeT4sXG4gIEV4cG9ydERhdGFNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgRXhwb3J0RGF0YU1vZGFsRmFjdG9yeT4sXG4gIEV4cG9ydE1hcE1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBFeHBvcnRNYXBNb2RhbEZhY3Rvcnk+LFxuICBBZGRNYXBTdHlsZU1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeT4sXG4gIE1vZGFsRGlhbG9nOiBSZXR1cm5UeXBlPHR5cGVvZiBNb2RhbERpYWxvZ0ZhY3Rvcnk+LFxuICBTYXZlTWFwTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIFNhdmVNYXBNb2RhbEZhY3Rvcnk+LFxuICBTaGFyZU1hcE1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBTaGFyZU1hcE1vZGFsRmFjdG9yeT5cbik6IFJlYWN0LkVsZW1lbnRUeXBlPE1vZGFsQ29udGFpbmVyUHJvcHM+IHtcbiAgLyoqIEBhdWdtZW50cyBSZWFjdC5Db21wb25lbnQ8TW9kYWxDb250YWluZXJQcm9wcz4gKi9cbiAgY2xhc3MgTW9kYWxDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8TW9kYWxDb250YWluZXJQcm9wcz4ge1xuICAgIC8vIFRPRE8gLSByZW1vdmUgd2hlbiBwcm9wIHR5cGVzIGFyZSBmdWxseSBleHBvcnRlZFxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKTtcbiAgICB9O1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKTtcbiAgICB9XG5cbiAgICBfb25LZXlVcCA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgICAgaWYgKGtleUNvZGUgPT09IEtleUV2ZW50LkRPTV9WS19FU0NBUEUpIHtcbiAgICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwobnVsbCk7XG4gICAgfTtcblxuICAgIF9kZWxldGVEYXRhc2V0ID0ga2V5ID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnJlbW92ZURhdGFzZXQoa2V5KTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uQWRkQ3VzdG9tTWFwU3R5bGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5hZGRDdXN0b21NYXBTdHlsZSgpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25GaWxlVXBsb2FkID0gZmlsZUxpc3QgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMubG9hZEZpbGVzKGZpbGVMaXN0KTtcbiAgICB9O1xuXG4gICAgX29uVGlsZXNldEFkZGVkID0gKFxuICAgICAgdGlsZXNldDoge25hbWU6IHN0cmluZzsgdHlwZTogc3RyaW5nOyBtZXRhZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pn0sXG4gICAgICBwcm9jZXNzZWRNZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgICApID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnVwZGF0ZVZpc0RhdGEoXG4gICAgICAgIHtcbiAgICAgICAgICBpbmZvOiB7bGFiZWw6IHRpbGVzZXQubmFtZSwgdHlwZTogdGlsZXNldC50eXBlLCBmb3JtYXQ6ICdyb3dzJ30sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZmllbGRzOiBwcm9jZXNzZWRNZXRhZGF0YT8uZmllbGRzIHx8IFtdLFxuICAgICAgICAgICAgcm93czogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAuLi5wcm9jZXNzZWRNZXRhZGF0YSxcbiAgICAgICAgICAgIC4uLnRpbGVzZXQubWV0YWRhdGFcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIFZlY3RvciB0aWxlIGxheWVyIHN1cHBvcnRzIEdQVSBmaWx0ZXJpbmcgZm9yIG51bWVyaWMgYW5kIGJvb2xlYW4gZmllbGRzXG4gICAgICAgICAgc3VwcG9ydGVkRmlsdGVyVHlwZXM6IFtcbiAgICAgICAgICAgIEFMTF9GSUVMRF9UWVBFUy5yZWFsLFxuICAgICAgICAgICAgQUxMX0ZJRUxEX1RZUEVTLmludGVnZXIsXG4gICAgICAgICAgICBBTExfRklFTERfVFlQRVMuYm9vbGVhblxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGlzYWJsZURhdGFPcGVyYXRpb246IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9DcmVhdGVMYXllcnM6IHRydWUsXG4gICAgICAgICAgY2VudGVyTWFwOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydEltYWdlID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnVpU3RhdGUuZXhwb3J0SW1hZ2UucHJvY2Vzc2luZykge1xuICAgICAgICBleHBvcnRJbWFnZSh0aGlzLnByb3BzLnVpU3RhdGUuZXhwb3J0SW1hZ2UsIGAke3RoaXMucHJvcHMuYXBwTmFtZX0ucG5nYCk7XG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMuY2xlYW51cEV4cG9ydEltYWdlKCk7XG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX29uRXhwb3J0RGF0YSA9ICgpID0+IHtcbiAgICAgIGV4cG9ydERhdGEodGhpcy5wcm9wcywgdGhpcy5wcm9wcy51aVN0YXRlLmV4cG9ydERhdGEpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25FeHBvcnRNYXAgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7dWlTdGF0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2Zvcm1hdH0gPSB1aVN0YXRlLmV4cG9ydE1hcDtcbiAgICAgIChmb3JtYXQgPT09IEVYUE9SVF9NQVBfRk9STUFUUy5IVE1MID8gZXhwb3J0SHRtbCA6IGV4cG9ydEpzb24pKFxuICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICB0aGlzLnByb3BzLnVpU3RhdGUuZXhwb3J0TWFwW2Zvcm1hdF0gfHwge31cbiAgICAgICk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9leHBvcnRGaWxlVG9DbG91ZCA9ICh7cHJvdmlkZXIsIGlzUHVibGljLCBvdmVyd3JpdGUsIGNsb3NlTW9kYWx9KSA9PiB7XG4gICAgICBjb25zdCB0b1NhdmUgPSBleHBvcnRNYXAodGhpcy5wcm9wcyk7XG5cbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmV4cG9ydEZpbGVUb0Nsb3VkKHtcbiAgICAgICAgbWFwRGF0YTogdG9TYXZlLFxuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGlzUHVibGljLFxuICAgICAgICAgIG92ZXJ3cml0ZSxcbiAgICAgICAgICBtYXBJZFRvT3ZlcndyaXRlOiB0aGlzLnByb3BzLnByb3ZpZGVyU3RhdGUuc2F2ZWRNYXBJZFxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU1vZGFsLFxuICAgICAgICBvblN1Y2Nlc3M6IHRoaXMucHJvcHMub25FeHBvcnRUb0Nsb3VkU3VjY2VzcyxcbiAgICAgICAgb25FcnJvcjogdGhpcy5wcm9wcy5vbkV4cG9ydFRvQ2xvdWRFcnJvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9vblNhdmVNYXAgPSAocHJvdmlkZXIsIG92ZXJ3cml0ZSA9IGZhbHNlKSA9PiB7XG4gICAgICB0aGlzLl9leHBvcnRGaWxlVG9DbG91ZCh7XG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBpc1B1YmxpYzogZmFsc2UsXG4gICAgICAgIG92ZXJ3cml0ZSxcbiAgICAgICAgY2xvc2VNb2RhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9vbk92ZXJ3cml0ZU1hcCA9IHByb3ZpZGVyID0+IHtcbiAgICAgIHRoaXMuX29uU2F2ZU1hcChwcm92aWRlciwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIF9vblNoYXJlTWFwVXJsID0gcHJvdmlkZXIgPT4ge1xuICAgICAgdGhpcy5fZXhwb3J0RmlsZVRvQ2xvdWQoe3Byb3ZpZGVyLCBpc1B1YmxpYzogdHJ1ZSwgb3ZlcndyaXRlOiBmYWxzZSwgY2xvc2VNb2RhbDogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgX29uQ2xvc2VTYXZlTWFwID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMucmVzZXRQcm92aWRlclN0YXR1cygpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25Mb2FkQ2xvdWRNYXAgPSBwYXlsb2FkID0+IHtcbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmxvYWRDbG91ZE1hcCh7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIG9uU3VjY2VzczogdGhpcy5wcm9wcy5vbkxvYWRDbG91ZE1hcFN1Y2Nlc3MsXG4gICAgICAgIG9uRXJyb3I6IHRoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBFcnJvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbnRhaW5lclcsXG4gICAgICAgIGNvbnRhaW5lckgsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgdWlTdGF0ZSxcbiAgICAgICAgdmlzU3RhdGUsXG4gICAgICAgIHJvb3ROb2RlLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICBwcm92aWRlclN0YXRlXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtjdXJyZW50TW9kYWwsIGRhdGFzZXRLZXlUb1JlbW92ZX0gPSB1aVN0YXRlO1xuICAgICAgY29uc3Qge2RhdGFzZXRzLCBsYXllcnMsIGVkaXRpbmdEYXRhc2V0fSA9IHZpc1N0YXRlO1xuXG4gICAgICBsZXQgdGVtcGxhdGU6IEpTWC5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgbW9kYWxQcm9wczogUGFydGlhbDxNb2RhbERpYWxvZ1Byb3BzPiA9IHt9O1xuXG4gICAgICAvLyBUT0RPIC0gY3VycmVudE1vZGFsIGlzIGEgc3RyaW5nXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpZiAoY3VycmVudE1vZGFsICYmIGN1cnJlbnRNb2RhbC5pZCAmJiBjdXJyZW50TW9kYWwudGVtcGxhdGUpIHtcbiAgICAgICAgLy8gaWYgY3VycmVudE1kb2FsIHRlbXBsYXRlIGlzIGFscmVhZHkgcHJvdmlkZWRcbiAgICAgICAgLy8gVE9ETzogbmVlZCB0byBjaGVjayB3aGV0aGVyIHRlbXBsYXRlIGlzIHZhbGlkXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGVtcGxhdGUgPSA8Y3VycmVudE1vZGFsLnRlbXBsYXRlIC8+O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG1vZGFsUHJvcHMgPSBjdXJyZW50TW9kYWwubW9kYWxQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudE1vZGFsKSB7XG4gICAgICAgICAgY2FzZSBEQVRBX1RBQkxFX0lEOiB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lclcgKiAwLjk7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPERhdGFUYWJsZU1vZGFsXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIGRhdGFJZD17ZWRpdGluZ0RhdGFzZXR9XG4gICAgICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17dmlzU3RhdGVBY3Rpb25zLnNob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgICAgICAgc29ydFRhYmxlQ29sdW1uPXt2aXNTdGF0ZUFjdGlvbnMuc29ydFRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgIHBpblRhYmxlQ29sdW1uPXt2aXNTdGF0ZUFjdGlvbnMucGluVGFibGVDb2x1bW59XG4gICAgICAgICAgICAgICAgY29weVRhYmxlQ29sdW1uPXt2aXNTdGF0ZUFjdGlvbnMuY29weVRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgIHNldENvbHVtbkRpc3BsYXlGb3JtYXQ9e3Zpc1N0YXRlQWN0aW9ucy5zZXRDb2x1bW5EaXNwbGF5Rm9ybWF0fVxuICAgICAgICAgICAgICAgIHVpU3RhdGVBY3Rpb25zPXt1aVN0YXRlQWN0aW9uc31cbiAgICAgICAgICAgICAgICB1aVN0YXRlPXt1aVN0YXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0byBtYWtlIHRoaXMgd2lkdGggY29uc2lzdGVudCB3aXRoIHRoZSBjc3MgcnVsZSBkZWZpbmVkIG1vZGFsLmpzOjMyIG1heC13aWR0aDogNzB2d1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAvLyBUT0RPIGZpeCB0aGlzIGFmdGVyIGFkZCB0eXBlcyB0byBUaGVtZVxuICAgICAgICAgICAgbW9kYWxQcm9wcy5jc3NTdHlsZSA9IGNzc2BcbiAgICAgICAgICAgICAgJHtEYXRhVGFibGVNb2RhbFN0eWxlfTtcbiAgICAgICAgICAgICAgJHttZWRpYS5wYWxtYFxuICAgICAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICAgICAgICBgfTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBERUxFVEVfREFUQV9JRDoge1xuICAgICAgICAgICAgLy8gdmFsaWRhdGUgb3B0aW9uc1xuICAgICAgICAgICAgaWYgKGRhdGFzZXRLZXlUb1JlbW92ZSAmJiBkYXRhc2V0cyAmJiBkYXRhc2V0c1tkYXRhc2V0S2V5VG9SZW1vdmVdKSB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICAgIDxEZWxldGVEYXRhc2V0TW9kYWwgZGF0YXNldD17ZGF0YXNldHNbZGF0YXNldEtleVRvUmVtb3ZlXX0gbGF5ZXJzPXtsYXllcnN9IC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5kZWxldGVEYXRhc2V0JyxcbiAgICAgICAgICAgICAgICBjc3NTdHlsZTogc21hbGxNb2RhbENzcyxcbiAgICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB0aGlzLl9kZWxldGVEYXRhc2V0KGRhdGFzZXRLZXlUb1JlbW92ZSksXG4gICAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgbmVnYXRpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmRlbGV0ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhazsgLy8gaW4gY2FzZSB3ZSBhZGQgYSBuZXcgY2FzZSBhZnRlciB0aGlzIG9uZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIEFERF9EQVRBX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxMb2FkRGF0YU1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkZpbGVVcGxvYWQ9e3RoaXMuX29uRmlsZVVwbG9hZH1cbiAgICAgICAgICAgICAgICBvblRpbGVzZXRBZGRlZD17dGhpcy5fb25UaWxlc2V0QWRkZWR9XG4gICAgICAgICAgICAgICAgb25Mb2FkQ2xvdWRNYXA9e3RoaXMuX29uTG9hZENsb3VkTWFwfVxuICAgICAgICAgICAgICAgIGxvYWRGaWxlcz17dWlTdGF0ZS5sb2FkRmlsZXN9XG4gICAgICAgICAgICAgICAgZmlsZUxvYWRpbmc9e3Zpc1N0YXRlLmZpbGVMb2FkaW5nfVxuICAgICAgICAgICAgICAgIGZpbGVMb2FkaW5nUHJvZ3Jlc3M9e3Zpc1N0YXRlLmZpbGVMb2FkaW5nUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgZmlsZUZvcm1hdE5hbWVzPXtnZXRGaWxlRm9ybWF0TmFtZXModGhpcy5wcm9wcy52aXNTdGF0ZSl9XG4gICAgICAgICAgICAgICAgZmlsZUV4dGVuc2lvbnM9e2dldEZpbGVFeHRlbnNpb25zKHRoaXMucHJvcHMudmlzU3RhdGUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuYWRkRGF0YVRvTWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6IExvYWREYXRhTW9kYWxTdHlsZSxcbiAgICAgICAgICAgICAgZm9vdGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9jbG9zZU1vZGFsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFWFBPUlRfSU1BR0VfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPEV4cG9ydEltYWdlTW9kYWxcbiAgICAgICAgICAgICAgICBleHBvcnRJbWFnZT17dWlTdGF0ZS5leHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICBtYXBXPXtjb250YWluZXJXfVxuICAgICAgICAgICAgICAgIG1hcEg9e2NvbnRhaW5lckh9XG4gICAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cbiAgICAgICAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e3VpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmV4cG9ydEltYWdlJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0SW1hZ2UsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdWlTdGF0ZS5leHBvcnRJbWFnZS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmRvd25sb2FkJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFWFBPUlRfREFUQV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0RGF0YU1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnVpU3RhdGUuZXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWREYXRhVHlwZXM9e0VYUE9SVF9EQVRBX1RZUEVfT1BUSU9OU31cbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgYXBwbHlDUFVGaWx0ZXI9e3RoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmFwcGx5Q1BVRmlsdGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0RGF0YVR5cGU9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydERhdGFUeXBlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0PXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRTZWxlY3RlZERhdGFzZXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZD17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0RmlsdGVyZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5leHBvcnREYXRhJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0RGF0YSxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmV4cG9ydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRVhQT1JUX01BUF9JRDoge1xuICAgICAgICAgICAgY29uc3Qga2VwbGVyR2xDb25maWcgPSB2aXNTdGF0ZS5zY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKHtcbiAgICAgICAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgICAgICAgIHZpc1N0YXRlLFxuICAgICAgICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgICAgICAgdWlTdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPEV4cG9ydE1hcE1vZGFsXG4gICAgICAgICAgICAgICAgY29uZmlnPXtrZXBsZXJHbENvbmZpZ31cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt1aVN0YXRlLmV4cG9ydE1hcH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydE1hcEZvcm1hdD17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0TWFwRm9ybWF0fVxuICAgICAgICAgICAgICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbj17dWlTdGF0ZUFjdGlvbnMuc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGU9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEhUTUxNYXBNb2RlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZXhwb3J0TWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0TWFwLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgQUREX01BUF9TVFlMRV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8QWRkTWFwU3R5bGVNb2RhbFxuICAgICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXt0aGlzLnByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgIG1hcGJveEFwaVVybD17dGhpcy5wcm9wcy5tYXBib3hBcGlVcmx9XG4gICAgICAgICAgICAgICAgbWFwU3RhdGU9e3RoaXMucHJvcHMubWFwU3RhdGV9XG4gICAgICAgICAgICAgICAgaW5wdXRTdHlsZT17bWFwU3R5bGUuaW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICBpbnB1dE1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5pbnB1dE1hcFN0eWxlfVxuICAgICAgICAgICAgICAgIGxvYWRDdXN0b21NYXBTdHlsZT17dGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMubG9hZEN1c3RvbU1hcFN0eWxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuYWRkQ3VzdG9tTWFwYm94U3R5bGUnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25BZGRDdXN0b21NYXBTdHlsZSxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgbWFwU3R5bGUuaW5wdXRTdHlsZS5lcnJvciB8fFxuICAgICAgICAgICAgICAgICAgIW1hcFN0eWxlLmlucHV0U3R5bGUudXJsIHx8XG4gICAgICAgICAgICAgICAgICAhbWFwU3R5bGUuaW5wdXRTdHlsZS5sYWJlbCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ21vZGFsLmJ1dHRvbi5hZGRTdHlsZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgU0FWRV9NQVBfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPFNhdmVNYXBNb2RhbFxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlclN0YXRlfVxuICAgICAgICAgICAgICAgIGV4cG9ydEltYWdlPXt1aVN0YXRlLmV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG1hcEluZm89e3Zpc1N0YXRlLm1hcEluZm99XG4gICAgICAgICAgICAgICAgb25TZXRNYXBJbmZvPXt2aXNTdGF0ZUFjdGlvbnMuc2V0TWFwSW5mb31cbiAgICAgICAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e3VpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLl9jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgIG9uQ29uZmlybT17cHJvdmlkZXIgPT4gdGhpcy5fb25TYXZlTWFwKHByb3ZpZGVyLCBmYWxzZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5zYXZlTWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPVkVSV1JJVEVfTUFQX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxPdmVyV3JpdGVNYXBNb2RhbFxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlclN0YXRlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtnZXQodmlzU3RhdGUsIFsnbWFwSW5mbycsICd0aXRsZSddKX1cbiAgICAgICAgICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nfVxuICAgICAgICAgICAgICAgIGNsZWFudXBFeHBvcnRJbWFnZT17dWlTdGF0ZUFjdGlvbnMuY2xlYW51cEV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5fb25PdmVyd3JpdGVNYXB9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdPdmVyd3JpdGUgRXhpc3RpbmcgRmlsZT8nLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogc21hbGxNb2RhbENzcyxcbiAgICAgICAgICAgICAgZm9vdGVyOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgU0hBUkVfTUFQX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxTaGFyZU1hcE1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgb25FeHBvcnQ9e3RoaXMuX29uU2hhcmVNYXBVcmx9XG4gICAgICAgICAgICAgICAgY2xlYW51cEV4cG9ydEltYWdlPXt1aVN0YXRlQWN0aW9ucy5jbGVhbnVwRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLnNoYXJlVVJMJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fb25DbG9zZVNhdmVNYXBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvb3ROb2RlID8gKFxuICAgICAgICA8TW9kYWxEaWFsb2dcbiAgICAgICAgICBwYXJlbnRTZWxlY3Rvcj17KCkgPT4gcm9vdE5vZGUgYXMgSFRNTEVsZW1lbnR9XG4gICAgICAgICAgaXNPcGVuPXtCb29sZWFuKGN1cnJlbnRNb2RhbCl9XG4gICAgICAgICAgb25DYW5jZWw9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgey4uLm1vZGFsUHJvcHN9XG4gICAgICAgICAgY3NzU3R5bGU9e0RlZmF1bHRTdHlsZS5jb25jYXQobW9kYWxQcm9wcy5jc3NTdHlsZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGVtcGxhdGV9XG4gICAgICAgIDwvTW9kYWxEaWFsb2c+XG4gICAgICApIDogbnVsbDtcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG4gIH1cblxuICByZXR1cm4gTW9kYWxDb250YWluZXI7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxpQkFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsSUFBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksU0FBQSxHQUFBRCxzQkFBQSxDQUFBSCxPQUFBO0FBRUEsSUFBQUssSUFBQSxHQUFBTCxPQUFBO0FBQ0EsSUFBQU0sS0FBQSxHQUFBTixPQUFBO0FBT0EsSUFBQU8sS0FBQSxHQUFBUCxPQUFBO0FBRUEsSUFBQVEsWUFBQSxHQUFBTCxzQkFBQSxDQUFBSCxPQUFBO0FBR0EsSUFBQVMsZ0JBQUEsR0FBQU4sc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFVLGtCQUFBLEdBQUFQLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBVyxlQUFBLEdBQUFSLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBWSxjQUFBLEdBQUFULHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBYSxpQkFBQSxHQUFBVixzQkFBQSxDQUFB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