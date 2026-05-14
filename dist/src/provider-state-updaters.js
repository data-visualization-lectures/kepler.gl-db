"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetProviderStatusUpdater = exports.postSaveLoadSuccessUpdater = exports.loadCloudMapUpdater = exports.loadCloudMapSuccessUpdater = exports.loadCloudMapSuccess2Updater = exports.loadCloudMapErrorUpdater = exports.exportFileToCloudUpdater = exports.exportFileSuccessUpdater = exports.exportFileErrorUpdater = exports.INITIAL_PROVIDER_STATE = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _tasks = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/node_modules/react-palm/tasks"));
var _console = _interopRequireDefault(require("global/console"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/utils/src");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/common-utils/src");
var _src3 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/tasks/src");
var _src4 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/actions/src");
var _src5 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/constants/src");
var _src6 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/cloud-providers/src");
var _src7 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/processors/src");
var _src8 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_dataviz/kepler.gl-db/src/table/src");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
var INITIAL_PROVIDER_STATE = exports.INITIAL_PROVIDER_STATE = {
  isProviderLoading: false,
  isCloudMapLoading: false,
  providerError: null,
  currentProvider: null,
  successInfo: {},
  mapSaved: null,
  savedMapId: null,
  visualizations: []
};
function createActionTask(action, payload) {
  if (typeof action === 'function') {
    return (0, _src3.ACTION_TASK)().map(function () {
      return action(payload);
    });
  }
  return null;
}
function _validateProvider(provider, method) {
  if (!provider) {
    _console["default"].error("provider is not defined");
    return false;
  }
  if (typeof provider[method] !== 'function') {
    _console["default"].error("".concat(method, " is not a function of Cloud provider: ").concat(provider.name));
    return false;
  }
  return true;
}
function createGlobalNotificationTasks(_ref) {
  var type = _ref.type,
    message = _ref.message,
    _ref$delayClose = _ref.delayClose,
    delayClose = _ref$delayClose === void 0 ? true : _ref$delayClose;
  // Dispatch a custom event to notify dataviz-tool-header toast UI.
  // Using window event + setTimeout to decouple from Redux dispatch cycle.
  var toastType = type === 'error' ? 'error' : 'success';
  var duration = delayClose ? 3000 : undefined;
  if (typeof window !== 'undefined') {
    window.setTimeout(function () {
      window.dispatchEvent(new CustomEvent('kepler-notification', {
        detail: {
          message: message,
          type: toastType,
          duration: duration
        }
      }));
    }, 0);
  }
  return [];
}

/**
 * This method will export the current kepler config file to the chosen cloud proder
 * add returns a share URL
 *
 */
var exportFileToCloudUpdater = exports.exportFileToCloudUpdater = function exportFileToCloudUpdater(state, action) {
  var _action$payload = action.payload,
    mapData = _action$payload.mapData,
    provider = _action$payload.provider,
    _action$payload$optio = _action$payload.options,
    options = _action$payload$optio === void 0 ? {} : _action$payload$optio,
    onSuccess = _action$payload.onSuccess,
    onError = _action$payload.onError,
    closeModal = _action$payload.closeModal;
  if (!_validateProvider(provider, 'uploadMap')) {
    return state;
  }
  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true,
    currentProvider: provider.name
  });

  // payload called by provider.uploadMap
  var payload = {
    mapData: mapData,
    options: options
  };
  var uploadFileTask = (0, _src3.EXPORT_FILE_TO_CLOUD_TASK)({
    provider: provider,
    payload: payload
  }).bimap(
  // success
  function (response) {
    return (0, _src4.exportFileSuccess)({
      response: response,
      provider: provider,
      options: options,
      onSuccess: onSuccess,
      closeModal: closeModal
    });
  },
  // error
  function (error) {
    return (0, _src4.exportFileError)({
      error: error,
      provider: provider,
      options: options,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};
var exportFileSuccessUpdater = exports.exportFileSuccessUpdater = function exportFileSuccessUpdater(state, action) {
  var _ref2, _ref3, _ref4, _response$info$id, _response$info, _response$project;
  var _action$payload2 = action.payload,
    response = _action$payload2.response,
    provider = _action$payload2.provider,
    _action$payload2$opti = _action$payload2.options,
    options = _action$payload2$opti === void 0 ? {} : _action$payload2$opti,
    onSuccess = _action$payload2.onSuccess,
    closeModal = _action$payload2.closeModal;
  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    // TODO: do we always have to store this?
    successInfo: response,
    savedMapId: (_ref2 = (_ref3 = (_ref4 = (_response$info$id = response === null || response === void 0 || (_response$info = response.info) === null || _response$info === void 0 ? void 0 : _response$info.id) !== null && _response$info$id !== void 0 ? _response$info$id : response === null || response === void 0 || (_response$project = response.project) === null || _response$project === void 0 ? void 0 : _response$project.id) !== null && _ref4 !== void 0 ? _ref4 : response === null || response === void 0 ? void 0 : response.sourceProjectId) !== null && _ref3 !== void 0 ? _ref3 : response === null || response === void 0 ? void 0 : response.id) !== null && _ref2 !== void 0 ? _ref2 : null
  }, !options.isPublic ? {
    mapSaved: provider.name
  } : {});
  var tasks = [createActionTask(onSuccess, {
    response: response,
    provider: provider,
    options: options
  }), closeModal && (0, _src3.ACTION_TASK)().map(function () {
    return (0, _src4.postSaveLoadSuccess)('プロジェクトを保存しました');
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};

/**
 * Close modal on success and display notification
 */
var postSaveLoadSuccessUpdater = exports.postSaveLoadSuccessUpdater = function postSaveLoadSuccessUpdater(state, action) {
  var message = action.payload || 'プロジェクトの保存・読込が完了しました';
  var tasks = [(0, _src3.ACTION_TASK)().map(function () {
    return (0, _src4.toggleModal)(null);
  }), (0, _src3.ACTION_TASK)().map(function () {
    return (0, _src4.resetProviderStatus)();
  })].concat((0, _toConsumableArray2["default"])(createGlobalNotificationTasks({
    message: message
  })));
  return (0, _tasks.withTask)(state, tasks);
};
var exportFileErrorUpdater = exports.exportFileErrorUpdater = function exportFileErrorUpdater(state, action) {
  var _action$payload3 = action.payload,
    error = _action$payload3.error,
    provider = _action$payload3.provider,
    onError = _action$payload3.onError;
  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false
  });
  if (isFileConflict(error)) {
    newState.mapSaved = provider.name;
    return (0, _tasks.withTask)(newState, [(0, _src3.ACTION_TASK)().map(function () {
      return (0, _src4.toggleModal)(_src5.OVERWRITE_MAP_ID);
    })]);
  }
  newState.providerError = (0, _src.getError)(error);
  var task = createActionTask(onError, {
    error: error,
    provider: provider
  });
  return task ? (0, _tasks.withTask)(newState, task) : newState;
};
var loadCloudMapUpdater = exports.loadCloudMapUpdater = function loadCloudMapUpdater(state, action) {
  var _action$payload4 = action.payload,
    loadParams = _action$payload4.loadParams,
    provider = _action$payload4.provider,
    onSuccess = _action$payload4.onSuccess,
    onError = _action$payload4.onError;
  if (!loadParams) {
    _console["default"].warn('load map error: loadParams is undefined');
    return state;
  }
  if (!_validateProvider(provider, 'downloadMap')) {
    return state;
  }
  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true,
    isCloudMapLoading: true
  });

  // payload called by provider.downloadMap
  var uploadFileTask = (0, _src3.LOAD_CLOUD_MAP_TASK)({
    provider: provider,
    payload: loadParams
  }).bimap(
  // success
  // @ts-expect-error
  function (response) {
    return (0, _src4.loadCloudMapSuccess)({
      response: response,
      loadParams: loadParams,
      provider: provider,
      onSuccess: onSuccess,
      onError: onError
    });
  },
  // error
  // @ts-expect-error
  function (error) {
    return (0, _src4.loadCloudMapError)({
      error: error,
      provider: provider,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};
function isFileConflict(error) {
  return error && error.message === _src6.FILE_CONFLICT_MSG;
}
function checkLoadMapResponseError(response) {
  if (!response || !(0, _src.isPlainObject)(response)) {
    return new Error('Load map response is empty');
  }
  if (!(0, _src.isPlainObject)(response.map)) {
    return new Error("Load map response should be an object property \"map\"");
  }
  if (!response.map.datasets || !response.map.config) {
    return new Error("Load map response.map should be an object with property datasets or config");
  }
  return null;
}
function getDatasetHandler(format) {
  var _getApplicationConfig;
  var defaultHandler = _src7.DATASET_HANDLERS[_src5.DATASET_FORMATS.csv];
  if (!format) {
    _console["default"].warn('format is not provided in load map response, will use csv by default');
    return defaultHandler;
  }

  // use custom processors from table class
  var TableClass = (_getApplicationConfig = (0, _src.getApplicationConfig)().table) !== null && _getApplicationConfig !== void 0 ? _getApplicationConfig : _src8.KeplerTable;
  if (typeof TableClass.getFileProcessor === 'function') {
    var processorResult = TableClass.getFileProcessor(null, format);
    if (!processorResult.processor) {
      _console["default"].warn("No processor found for format ".concat(format, ", will use csv by default"));
      return defaultHandler;
    }
    return processorResult.processor;
  }
  if (!_src7.DATASET_HANDLERS[format]) {
    var supportedFormat = Object.keys(_src5.DATASET_FORMATS).map(function (k) {
      return "'".concat(k, "'");
    }).join(', ');
    _console["default"].warn("unknown format ".concat(format, ". Please use one of ").concat(supportedFormat, ", will use csv by default"));
    return defaultHandler;
  }
  return _src7.DATASET_HANDLERS[format];
}

/**
 * A task to handle async processorMethod
 * @param param0
 * @returns
 */
function parseLoadMapResponseTask(_x) {
  return _parseLoadMapResponseTask.apply(this, arguments);
}
function _parseLoadMapResponseTask() {
  _parseLoadMapResponseTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref5) {
    var response, loadParams, provider, map, format, processorMethod, parsedDatasets, parsedMap, datasets, info;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          response = _ref5.response, loadParams = _ref5.loadParams, provider = _ref5.provider;
          map = response.map, format = response.format;
          processorMethod = getDatasetHandler(format);
          parsedDatasets = [];
          if (!(format === _src5.DATASET_FORMATS.keplergl && processorMethod !== _src7.DATASET_HANDLERS[_src5.DATASET_FORMATS.keplergl])) {
            _context2.next = 11;
            break;
          }
          _context2.next = 7;
          return processorMethod(map);
        case 7:
          parsedMap = _context2.sent;
          parsedDatasets = parsedMap.datasets;
          _context2.next = 15;
          break;
        case 11:
          datasets = (0, _src2.toArray)(map.datasets);
          _context2.next = 14;
          return Promise.all(datasets.map( /*#__PURE__*/function () {
            var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ds) {
              var info, data;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(format === _src5.DATASET_FORMATS.keplergl)) {
                      _context.next = 4;
                      break;
                    }
                    _context.next = 3;
                    return processorMethod(ds);
                  case 3:
                    return _context.abrupt("return", _context.sent);
                  case 4:
                    info = ds && ds.info || {
                      id: (0, _src2.generateHashId)(6)
                    };
                    _context.next = 7;
                    return processorMethod(ds.data || ds);
                  case 7:
                    data = _context.sent;
                    return _context.abrupt("return", {
                      info: info,
                      data: data
                    });
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref6.apply(this, arguments);
            };
          }()));
        case 14:
          parsedDatasets = _context2.sent;
        case 15:
          info = _objectSpread(_objectSpread({}, map.info), {}, {
            provider: provider.name,
            loadParams: loadParams
          });
          return _context2.abrupt("return", _objectSpread(_objectSpread({
            datasets: parsedDatasets,
            info: info
          }, map.config ? {
            config: map.config
          } : {}), {}, {
            options: {
              // do not center map when loading cloud map
              centerMap: false
            }
          }));
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _parseLoadMapResponseTask.apply(this, arguments);
}
var PARSE_LOAD_MAP_RESPONSE_TASK = _tasks["default"].fromPromise(parseLoadMapResponseTask, 'PARSE_LOAD_MAP_RESPONSE_TASK');

/**
 * Used to load resources stored in a private storage.
 */
var loadCloudMapSuccessUpdater = exports.loadCloudMapSuccessUpdater = function loadCloudMapSuccessUpdater(state, action) {
  var _action$payload5 = action.payload,
    response = _action$payload5.response,
    loadParams = _action$payload5.loadParams,
    provider = _action$payload5.provider,
    onError = _action$payload5.onError;
  var formatError = checkLoadMapResponseError(response);
  if (formatError) {
    // if response format is not correct
    return exportFileErrorUpdater(state, {
      payload: {
        error: formatError,
        provider: provider,
        onError: onError
      }
    });
  }

  // processorMethod can be async so create a task
  var parseLoadMapResponseTask = PARSE_LOAD_MAP_RESPONSE_TASK({
    response: response,
    loadParams: loadParams,
    provider: provider
  }).bimap(function (datasetsPayload) {
    return (0, _src4.loadCloudMapSuccess2)(_objectSpread(_objectSpread({}, action.payload), {}, {
      datasetsPayload: datasetsPayload
    }));
  }, function (error) {
    return exportFileErrorUpdater(state, {
      payload: {
        error: error,
        provider: provider,
        onError: onError
      }
    });
  });
  return (0, _tasks.withTask)(state, parseLoadMapResponseTask);
};
var loadCloudMapSuccess2Updater = exports.loadCloudMapSuccess2Updater = function loadCloudMapSuccess2Updater(state, action) {
  var _action$payload6 = action.payload,
    datasetsPayload = _action$payload6.datasetsPayload,
    response = _action$payload6.response,
    loadParams = _action$payload6.loadParams,
    provider = _action$payload6.provider,
    onSuccess = _action$payload6.onSuccess;
  var newState = _objectSpread(_objectSpread({}, state), {}, {
    mapSaved: provider.name,
    currentProvider: provider.name,
    isCloudMapLoading: false,
    isProviderLoading: false
  });
  var tasks = [(0, _src3.ACTION_TASK)().map(function () {
    return (0, _src4.addDataToMap)(datasetsPayload);
  }), createActionTask(onSuccess, {
    response: response,
    loadParams: loadParams,
    provider: provider
  }), (0, _src3.ACTION_TASK)().map(function () {
    return (0, _src4.postSaveLoadSuccess)('プロジェクトを読み込みました');
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};
var loadCloudMapErrorUpdater = exports.loadCloudMapErrorUpdater = function loadCloudMapErrorUpdater(state, action) {
  var message = (0, _src.getError)(action.payload.error) || 'プロジェクトの読み込みに失敗しました';
  _console["default"].warn(message);
  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    isCloudMapLoading: false,
    providerError: null
  });
  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};
var resetProviderStatusUpdater = exports.resetProviderStatusUpdater = function resetProviderStatusUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    providerError: null,
    isCloudMapLoading: false,
    successInfo: {}
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGFza3MiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29uc29sZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfc3JjIiwiX3NyYzIiLCJfc3JjMyIsIl9zcmM0IiwiX3NyYzUiLCJfc3JjNiIsIl9zcmM3IiwiX3NyYzgiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJJTklUSUFMX1BST1ZJREVSX1NUQVRFIiwiZXhwb3J0cyIsImlzUHJvdmlkZXJMb2FkaW5nIiwiaXNDbG91ZE1hcExvYWRpbmciLCJwcm92aWRlckVycm9yIiwiY3VycmVudFByb3ZpZGVyIiwic3VjY2Vzc0luZm8iLCJtYXBTYXZlZCIsInNhdmVkTWFwSWQiLCJ2aXN1YWxpemF0aW9ucyIsImNyZWF0ZUFjdGlvblRhc2siLCJhY3Rpb24iLCJwYXlsb2FkIiwiQUNUSU9OX1RBU0siLCJtYXAiLCJfdmFsaWRhdGVQcm92aWRlciIsInByb3ZpZGVyIiwibWV0aG9kIiwiQ29uc29sZSIsImVycm9yIiwiY29uY2F0IiwibmFtZSIsImNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzIiwiX3JlZiIsInR5cGUiLCJtZXNzYWdlIiwiX3JlZiRkZWxheUNsb3NlIiwiZGVsYXlDbG9zZSIsInRvYXN0VHlwZSIsImR1cmF0aW9uIiwidW5kZWZpbmVkIiwid2luZG93Iiwic2V0VGltZW91dCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImV4cG9ydEZpbGVUb0Nsb3VkVXBkYXRlciIsInN0YXRlIiwiX2FjdGlvbiRwYXlsb2FkIiwibWFwRGF0YSIsIl9hY3Rpb24kcGF5bG9hZCRvcHRpbyIsIm9wdGlvbnMiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiY2xvc2VNb2RhbCIsIm5ld1N0YXRlIiwidXBsb2FkRmlsZVRhc2siLCJFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLIiwiYmltYXAiLCJyZXNwb25zZSIsImV4cG9ydEZpbGVTdWNjZXNzIiwiZXhwb3J0RmlsZUVycm9yIiwid2l0aFRhc2siLCJleHBvcnRGaWxlU3VjY2Vzc1VwZGF0ZXIiLCJfcmVmMiIsIl9yZWYzIiwiX3JlZjQiLCJfcmVzcG9uc2UkaW5mbyRpZCIsIl9yZXNwb25zZSRpbmZvIiwiX3Jlc3BvbnNlJHByb2plY3QiLCJfYWN0aW9uJHBheWxvYWQyIiwiX2FjdGlvbiRwYXlsb2FkMiRvcHRpIiwiaW5mbyIsImlkIiwicHJvamVjdCIsInNvdXJjZVByb2plY3RJZCIsImlzUHVibGljIiwidGFza3MiLCJwb3N0U2F2ZUxvYWRTdWNjZXNzIiwiZCIsInBvc3RTYXZlTG9hZFN1Y2Nlc3NVcGRhdGVyIiwidG9nZ2xlTW9kYWwiLCJyZXNldFByb3ZpZGVyU3RhdHVzIiwiX3RvQ29uc3VtYWJsZUFycmF5MiIsImV4cG9ydEZpbGVFcnJvclVwZGF0ZXIiLCJfYWN0aW9uJHBheWxvYWQzIiwiaXNGaWxlQ29uZmxpY3QiLCJPVkVSV1JJVEVfTUFQX0lEIiwiZ2V0RXJyb3IiLCJ0YXNrIiwibG9hZENsb3VkTWFwVXBkYXRlciIsIl9hY3Rpb24kcGF5bG9hZDQiLCJsb2FkUGFyYW1zIiwid2FybiIsIkxPQURfQ0xPVURfTUFQX1RBU0siLCJsb2FkQ2xvdWRNYXBTdWNjZXNzIiwibG9hZENsb3VkTWFwRXJyb3IiLCJGSUxFX0NPTkZMSUNUX01TRyIsImNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IiLCJpc1BsYWluT2JqZWN0IiwiRXJyb3IiLCJkYXRhc2V0cyIsImNvbmZpZyIsImdldERhdGFzZXRIYW5kbGVyIiwiZm9ybWF0IiwiX2dldEFwcGxpY2F0aW9uQ29uZmlnIiwiZGVmYXVsdEhhbmRsZXIiLCJEQVRBU0VUX0hBTkRMRVJTIiwiREFUQVNFVF9GT1JNQVRTIiwiY3N2IiwiVGFibGVDbGFzcyIsImdldEFwcGxpY2F0aW9uQ29uZmlnIiwidGFibGUiLCJLZXBsZXJUYWJsZSIsImdldEZpbGVQcm9jZXNzb3IiLCJwcm9jZXNzb3JSZXN1bHQiLCJwcm9jZXNzb3IiLCJzdXBwb3J0ZWRGb3JtYXQiLCJrIiwiam9pbiIsInBhcnNlTG9hZE1hcFJlc3BvbnNlVGFzayIsIl94IiwiX3BhcnNlTG9hZE1hcFJlc3BvbnNlVGFzayIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlMiIsIl9yZWY1IiwicHJvY2Vzc29yTWV0aG9kIiwicGFyc2VkRGF0YXNldHMiLCJwYXJzZWRNYXAiLCJ3cmFwIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicHJldiIsIm5leHQiLCJrZXBsZXJnbCIsInNlbnQiLCJ0b0FycmF5IiwiUHJvbWlzZSIsImFsbCIsIl9yZWY2IiwiX2NhbGxlZSIsImRzIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhYnJ1cHQiLCJnZW5lcmF0ZUhhc2hJZCIsInN0b3AiLCJfeDIiLCJjZW50ZXJNYXAiLCJQQVJTRV9MT0FEX01BUF9SRVNQT05TRV9UQVNLIiwiVGFzayIsImZyb21Qcm9taXNlIiwibG9hZENsb3VkTWFwU3VjY2Vzc1VwZGF0ZXIiLCJfYWN0aW9uJHBheWxvYWQ1IiwiZm9ybWF0RXJyb3IiLCJkYXRhc2V0c1BheWxvYWQiLCJsb2FkQ2xvdWRNYXBTdWNjZXNzMiIsImxvYWRDbG91ZE1hcFN1Y2Nlc3MyVXBkYXRlciIsIl9hY3Rpb24kcGF5bG9hZDYiLCJhZGREYXRhVG9NYXAiLCJsb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXIiLCJyZXNldFByb3ZpZGVyU3RhdHVzVXBkYXRlciJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy8gQ29weXJpZ2h0IGNvbnRyaWJ1dG9ycyB0byB0aGUga2VwbGVyLmdsIHByb2plY3RcblxuaW1wb3J0IFRhc2ssIHt3aXRoVGFza30gZnJvbSAncmVhY3QtcGFsbS90YXNrcyc7XG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XG5pbXBvcnQge2dldEFwcGxpY2F0aW9uQ29uZmlnLCBnZXRFcnJvciwgaXNQbGFpbk9iamVjdH0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCB0b0FycmF5fSBmcm9tICdAa2VwbGVyLmdsL2NvbW1vbi11dGlscyc7XG5pbXBvcnQge1xuICBFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLLFxuICBBQ1RJT05fVEFTSyxcbiAgTE9BRF9DTE9VRF9NQVBfVEFTS1xufSBmcm9tICdAa2VwbGVyLmdsL3Rhc2tzJztcbmltcG9ydCB7XG4gIGV4cG9ydEZpbGVTdWNjZXNzLFxuICBleHBvcnRGaWxlRXJyb3IsXG4gIHBvc3RTYXZlTG9hZFN1Y2Nlc3MsXG4gIGxvYWRDbG91ZE1hcFN1Y2Nlc3MsXG4gIGxvYWRDbG91ZE1hcFN1Y2Nlc3MyLFxuICBsb2FkQ2xvdWRNYXBFcnJvcixcbiAgcmVzZXRQcm92aWRlclN0YXR1cyxcbiAgdG9nZ2xlTW9kYWwsXG4gIGFkZERhdGFUb01hcCxcbiAgUHJvdmlkZXJBY3Rpb25zXG59IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5pbXBvcnQge1xuICBEQVRBU0VUX0ZPUk1BVFMsXG4gIE9WRVJXUklURV9NQVBfSURcbn0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtBZGREYXRhVG9NYXBQYXlsb2FkLCBFeHBvcnRGaWxlVG9DbG91ZFBheWxvYWR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5pbXBvcnQge0ZJTEVfQ09ORkxJQ1RfTVNHLCBNYXBMaXN0SXRlbX0gZnJvbSAnQGtlcGxlci5nbC9jbG91ZC1wcm92aWRlcnMnO1xuaW1wb3J0IHtEQVRBU0VUX0hBTkRMRVJTfSBmcm9tICdAa2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xuaW1wb3J0IHtLZXBsZXJUYWJsZX0gZnJvbSAnQGtlcGxlci5nbC90YWJsZSc7XG5cbnR5cGUgQWN0aW9uUGF5bG9hZDxQPiA9IHtcbiAgdHlwZT86IHN0cmluZztcbiAgcGF5bG9hZDogUDtcbn07XG5cbmV4cG9ydCB0eXBlIFByb3ZpZGVyU3RhdGUgPSB7XG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBib29sZWFuO1xuICBpc0Nsb3VkTWFwTG9hZGluZzogYm9vbGVhbjtcbiAgcHJvdmlkZXJFcnJvcjogYW55O1xuICBjdXJyZW50UHJvdmlkZXI6IHN0cmluZyB8IG51bGw7XG4gIHN1Y2Nlc3NJbmZvOiBhbnk7XG4gIG1hcFNhdmVkOiBudWxsIHwgc3RyaW5nO1xuICBzYXZlZE1hcElkOiBudWxsIHwgc3RyaW5nO1xuICBpbml0aWFsU3RhdGU/OiBhbnk7XG4gIHZpc3VhbGl6YXRpb25zOiBNYXBMaXN0SXRlbVtdO1xufTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfUFJPVklERVJfU1RBVEU6IFByb3ZpZGVyU3RhdGUgPSB7XG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxuICBwcm92aWRlckVycm9yOiBudWxsLFxuICBjdXJyZW50UHJvdmlkZXI6IG51bGwsXG4gIHN1Y2Nlc3NJbmZvOiB7fSxcbiAgbWFwU2F2ZWQ6IG51bGwsXG4gIHNhdmVkTWFwSWQ6IG51bGwsXG4gIHZpc3VhbGl6YXRpb25zOiBbXVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uVGFzayhhY3Rpb24sIHBheWxvYWQpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gYWN0aW9uKHBheWxvYWQpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBfdmFsaWRhdGVQcm92aWRlcihwcm92aWRlciwgbWV0aG9kKSB7XG4gIGlmICghcHJvdmlkZXIpIHtcbiAgICBDb25zb2xlLmVycm9yKGBwcm92aWRlciBpcyBub3QgZGVmaW5lZGApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvdmlkZXJbbWV0aG9kXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIENvbnNvbGUuZXJyb3IoYCR7bWV0aG9kfSBpcyBub3QgYSBmdW5jdGlvbiBvZiBDbG91ZCBwcm92aWRlcjogJHtwcm92aWRlci5uYW1lfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7XG4gIHR5cGUsXG4gIG1lc3NhZ2UsXG4gIGRlbGF5Q2xvc2UgPSB0cnVlXG59OiB7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZGVsYXlDbG9zZT86IGJvb2xlYW47XG59KSB7XG4gIC8vIERpc3BhdGNoIGEgY3VzdG9tIGV2ZW50IHRvIG5vdGlmeSBkYXRhdml6LXRvb2wtaGVhZGVyIHRvYXN0IFVJLlxuICAvLyBVc2luZyB3aW5kb3cgZXZlbnQgKyBzZXRUaW1lb3V0IHRvIGRlY291cGxlIGZyb20gUmVkdXggZGlzcGF0Y2ggY3ljbGUuXG4gIGNvbnN0IHRvYXN0VHlwZSA9IHR5cGUgPT09ICdlcnJvcicgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnO1xuICBjb25zdCBkdXJhdGlvbiA9IGRlbGF5Q2xvc2UgPyAzMDAwIDogdW5kZWZpbmVkO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdrZXBsZXItbm90aWZpY2F0aW9uJywge1xuICAgICAgICAgIGRldGFpbDoge21lc3NhZ2UsIHR5cGU6IHRvYXN0VHlwZSwgZHVyYXRpb259XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIDApO1xuICB9XG4gIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGV4cG9ydCB0aGUgY3VycmVudCBrZXBsZXIgY29uZmlnIGZpbGUgdG8gdGhlIGNob3NlbiBjbG91ZCBwcm9kZXJcbiAqIGFkZCByZXR1cm5zIGEgc2hhcmUgVVJMXG4gKlxuICovXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZVRvQ2xvdWRVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPEV4cG9ydEZpbGVUb0Nsb3VkUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCB7bWFwRGF0YSwgcHJvdmlkZXIsIG9wdGlvbnMgPSB7fSwgb25TdWNjZXNzLCBvbkVycm9yLCBjbG9zZU1vZGFsfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGlmICghX3ZhbGlkYXRlUHJvdmlkZXIocHJvdmlkZXIsICd1cGxvYWRNYXAnKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiB0cnVlLFxuICAgIGN1cnJlbnRQcm92aWRlcjogcHJvdmlkZXIubmFtZVxuICB9O1xuXG4gIC8vIHBheWxvYWQgY2FsbGVkIGJ5IHByb3ZpZGVyLnVwbG9hZE1hcFxuICBjb25zdCBwYXlsb2FkID0ge1xuICAgIG1hcERhdGEsXG4gICAgb3B0aW9uc1xuICB9O1xuICBjb25zdCB1cGxvYWRGaWxlVGFzayA9IEVYUE9SVF9GSUxFX1RPX0NMT1VEX1RBU0soe3Byb3ZpZGVyLCBwYXlsb2FkfSkuYmltYXAoXG4gICAgLy8gc3VjY2Vzc1xuICAgIHJlc3BvbnNlID0+IGV4cG9ydEZpbGVTdWNjZXNzKHtyZXNwb25zZSwgcHJvdmlkZXIsIG9wdGlvbnMsIG9uU3VjY2VzcywgY2xvc2VNb2RhbH0pLFxuICAgIC8vIGVycm9yXG4gICAgZXJyb3IgPT4gZXhwb3J0RmlsZUVycm9yKHtlcnJvciwgcHJvdmlkZXIsIG9wdGlvbnMsIG9uRXJyb3J9KVxuICApO1xuXG4gIHJldHVybiB3aXRoVGFzayhuZXdTdGF0ZSwgdXBsb2FkRmlsZVRhc2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuRXhwb3J0RmlsZVN1Y2Nlc3NQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtyZXNwb25zZSwgcHJvdmlkZXIsIG9wdGlvbnMgPSB7fSwgb25TdWNjZXNzLCBjbG9zZU1vZGFsfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAvLyBUT0RPOiBkbyB3ZSBhbHdheXMgaGF2ZSB0byBzdG9yZSB0aGlzP1xuICAgIHN1Y2Nlc3NJbmZvOiByZXNwb25zZSxcbiAgICBzYXZlZE1hcElkOiByZXNwb25zZT8uaW5mbz8uaWQgPz8gcmVzcG9uc2U/LnByb2plY3Q/LmlkID8/IHJlc3BvbnNlPy5zb3VyY2VQcm9qZWN0SWQgPz8gcmVzcG9uc2U/LmlkID8/IG51bGwsXG4gICAgLi4uKCFvcHRpb25zLmlzUHVibGljXG4gICAgICA/IHtcbiAgICAgICAgICBtYXBTYXZlZDogcHJvdmlkZXIubmFtZVxuICAgICAgICB9XG4gICAgICA6IHt9KVxuICB9O1xuXG4gIGNvbnN0IHRhc2tzID0gW1xuICAgIGNyZWF0ZUFjdGlvblRhc2sob25TdWNjZXNzLCB7cmVzcG9uc2UsIHByb3ZpZGVyLCBvcHRpb25zfSksXG4gICAgY2xvc2VNb2RhbCAmJlxuICAgICAgQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gcG9zdFNhdmVMb2FkU3VjY2Vzcygn44OX44Ot44K444Kn44Kv44OI44KS5L+d5a2Y44GX44G+44GX44GfJykpXG4gIF0uZmlsdGVyKGQgPT4gZCk7XG5cbiAgcmV0dXJuIHRhc2tzLmxlbmd0aCA/IHdpdGhUYXNrKG5ld1N0YXRlLCB0YXNrcykgOiBuZXdTdGF0ZTtcbn07XG5cbi8qKlxuICogQ2xvc2UgbW9kYWwgb24gc3VjY2VzcyBhbmQgZGlzcGxheSBub3RpZmljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHBvc3RTYXZlTG9hZFN1Y2Nlc3NVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5Qb3N0U2F2ZUxvYWRTdWNjZXNzUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gYWN0aW9uLnBheWxvYWQgfHwgJ+ODl+ODreOCuOOCp+OCr+ODiOOBruS/neWtmOODu+iqrei+vOOBjOWujOS6huOBl+OBvuOBl+OBnyc7XG5cbiAgY29uc3QgdGFza3MgPSBbXG4gICAgQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gdG9nZ2xlTW9kYWwobnVsbCkpLFxuICAgIEFDVElPTl9UQVNLKCkubWFwKCgpID0+IHJlc2V0UHJvdmlkZXJTdGF0dXMoKSksXG4gICAgLi4uY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3Moe21lc3NhZ2V9KVxuICBdO1xuXG4gIHJldHVybiB3aXRoVGFzayhzdGF0ZSwgdGFza3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVFcnJvclVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLkV4cG9ydEZpbGVFcnJvclBheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3Qge2Vycm9yLCBwcm92aWRlciwgb25FcnJvcn0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2VcbiAgfTtcblxuICBpZiAoaXNGaWxlQ29uZmxpY3QoZXJyb3IpKSB7XG4gICAgbmV3U3RhdGUubWFwU2F2ZWQgPSBwcm92aWRlci5uYW1lO1xuICAgIHJldHVybiB3aXRoVGFzayhuZXdTdGF0ZSwgW0FDVElPTl9UQVNLKCkubWFwKCgpID0+IHRvZ2dsZU1vZGFsKE9WRVJXUklURV9NQVBfSUQpKV0pO1xuICB9XG5cbiAgbmV3U3RhdGUucHJvdmlkZXJFcnJvciA9IGdldEVycm9yKGVycm9yKTtcbiAgY29uc3QgdGFzayA9IGNyZWF0ZUFjdGlvblRhc2sob25FcnJvciwge2Vycm9yLCBwcm92aWRlcn0pO1xuXG4gIHJldHVybiB0YXNrID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2spIDogbmV3U3RhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENsb3VkTWFwVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuTG9hZENsb3VkTWFwUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCB7bG9hZFBhcmFtcywgcHJvdmlkZXIsIG9uU3VjY2Vzcywgb25FcnJvcn0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgaWYgKCFsb2FkUGFyYW1zKSB7XG4gICAgQ29uc29sZS53YXJuKCdsb2FkIG1hcCBlcnJvcjogbG9hZFBhcmFtcyBpcyB1bmRlZmluZWQnKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgaWYgKCFfdmFsaWRhdGVQcm92aWRlcihwcm92aWRlciwgJ2Rvd25sb2FkTWFwJykpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogdHJ1ZSxcbiAgICBpc0Nsb3VkTWFwTG9hZGluZzogdHJ1ZVxuICB9O1xuXG4gIC8vIHBheWxvYWQgY2FsbGVkIGJ5IHByb3ZpZGVyLmRvd25sb2FkTWFwXG4gIGNvbnN0IHVwbG9hZEZpbGVUYXNrID0gTE9BRF9DTE9VRF9NQVBfVEFTSyh7cHJvdmlkZXIsIHBheWxvYWQ6IGxvYWRQYXJhbXN9KS5iaW1hcChcbiAgICAvLyBzdWNjZXNzXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHJlc3BvbnNlID0+IGxvYWRDbG91ZE1hcFN1Y2Nlc3Moe3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlciwgb25TdWNjZXNzLCBvbkVycm9yfSksXG4gICAgLy8gZXJyb3JcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgZXJyb3IgPT4gbG9hZENsb3VkTWFwRXJyb3Ioe2Vycm9yLCBwcm92aWRlciwgb25FcnJvcn0pXG4gICk7XG5cbiAgcmV0dXJuIHdpdGhUYXNrKG5ld1N0YXRlLCB1cGxvYWRGaWxlVGFzayk7XG59O1xuXG5mdW5jdGlvbiBpc0ZpbGVDb25mbGljdChlcnJvcikge1xuICByZXR1cm4gZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA9PT0gRklMRV9DT05GTElDVF9NU0c7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZSB8fCAhaXNQbGFpbk9iamVjdChyZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdMb2FkIG1hcCByZXNwb25zZSBpcyBlbXB0eScpO1xuICB9XG4gIGlmICghaXNQbGFpbk9iamVjdChyZXNwb25zZS5tYXApKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgTG9hZCBtYXAgcmVzcG9uc2Ugc2hvdWxkIGJlIGFuIG9iamVjdCBwcm9wZXJ0eSBcIm1hcFwiYCk7XG4gIH1cbiAgaWYgKCFyZXNwb25zZS5tYXAuZGF0YXNldHMgfHwgIXJlc3BvbnNlLm1hcC5jb25maWcpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBMb2FkIG1hcCByZXNwb25zZS5tYXAgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHByb3BlcnR5IGRhdGFzZXRzIG9yIGNvbmZpZ2ApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFzZXRIYW5kbGVyKGZvcm1hdCkge1xuICBjb25zdCBkZWZhdWx0SGFuZGxlciA9IERBVEFTRVRfSEFORExFUlNbREFUQVNFVF9GT1JNQVRTLmNzdl07XG4gIGlmICghZm9ybWF0KSB7XG4gICAgQ29uc29sZS53YXJuKCdmb3JtYXQgaXMgbm90IHByb3ZpZGVkIGluIGxvYWQgbWFwIHJlc3BvbnNlLCB3aWxsIHVzZSBjc3YgYnkgZGVmYXVsdCcpO1xuICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcbiAgfVxuXG4gIC8vIHVzZSBjdXN0b20gcHJvY2Vzc29ycyBmcm9tIHRhYmxlIGNsYXNzXG4gIGNvbnN0IFRhYmxlQ2xhc3MgPSBnZXRBcHBsaWNhdGlvbkNvbmZpZygpLnRhYmxlID8/IEtlcGxlclRhYmxlO1xuICBpZiAodHlwZW9mIFRhYmxlQ2xhc3MuZ2V0RmlsZVByb2Nlc3NvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHByb2Nlc3NvclJlc3VsdCA9IFRhYmxlQ2xhc3MuZ2V0RmlsZVByb2Nlc3NvcihudWxsLCBmb3JtYXQpO1xuICAgIGlmICghcHJvY2Vzc29yUmVzdWx0LnByb2Nlc3Nvcikge1xuICAgICAgQ29uc29sZS53YXJuKGBObyBwcm9jZXNzb3IgZm91bmQgZm9yIGZvcm1hdCAke2Zvcm1hdH0sIHdpbGwgdXNlIGNzdiBieSBkZWZhdWx0YCk7XG4gICAgICByZXR1cm4gZGVmYXVsdEhhbmRsZXI7XG4gICAgfVxuICAgIHJldHVybiBwcm9jZXNzb3JSZXN1bHQucHJvY2Vzc29yO1xuICB9XG5cbiAgaWYgKCFEQVRBU0VUX0hBTkRMRVJTW2Zvcm1hdF0pIHtcbiAgICBjb25zdCBzdXBwb3J0ZWRGb3JtYXQgPSBPYmplY3Qua2V5cyhEQVRBU0VUX0ZPUk1BVFMpXG4gICAgICAubWFwKGsgPT4gYCcke2t9J2ApXG4gICAgICAuam9pbignLCAnKTtcbiAgICBDb25zb2xlLndhcm4oXG4gICAgICBgdW5rbm93biBmb3JtYXQgJHtmb3JtYXR9LiBQbGVhc2UgdXNlIG9uZSBvZiAke3N1cHBvcnRlZEZvcm1hdH0sIHdpbGwgdXNlIGNzdiBieSBkZWZhdWx0YFxuICAgICk7XG4gICAgcmV0dXJuIGRlZmF1bHRIYW5kbGVyO1xuICB9XG5cbiAgcmV0dXJuIERBVEFTRVRfSEFORExFUlNbZm9ybWF0XTtcbn1cblxuLyoqXG4gKiBBIHRhc2sgdG8gaGFuZGxlIGFzeW5jIHByb2Nlc3Nvck1ldGhvZFxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcGFyc2VMb2FkTWFwUmVzcG9uc2VUYXNrKHtcbiAgcmVzcG9uc2UsXG4gIGxvYWRQYXJhbXMsXG4gIHByb3ZpZGVyXG59OiB7XG4gIHJlc3BvbnNlOiBQcm92aWRlckFjdGlvbnMuTG9hZENsb3VkTWFwU3VjY2Vzc1BheWxvYWRbJ3Jlc3BvbnNlJ107XG4gIGxvYWRQYXJhbXM6IFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBTdWNjZXNzUGF5bG9hZFsnbG9hZFBhcmFtcyddO1xuICBwcm92aWRlcjogUHJvdmlkZXJBY3Rpb25zLkxvYWRDbG91ZE1hcFN1Y2Nlc3NQYXlsb2FkWydwcm92aWRlciddO1xufSkge1xuICBjb25zdCB7bWFwLCBmb3JtYXR9ID0gcmVzcG9uc2U7XG4gIGNvbnN0IHByb2Nlc3Nvck1ldGhvZCA9IGdldERhdGFzZXRIYW5kbGVyKGZvcm1hdCk7XG5cbiAgbGV0IHBhcnNlZERhdGFzZXRzOiBBZGREYXRhVG9NYXBQYXlsb2FkWydkYXRhc2V0cyddID0gW107XG5cbiAgaWYgKFxuICAgIGZvcm1hdCA9PT0gREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsICYmXG4gICAgcHJvY2Vzc29yTWV0aG9kICE9PSBEQVRBU0VUX0hBTkRMRVJTW0RBVEFTRVRfRk9STUFUUy5rZXBsZXJnbF1cbiAgKSB7XG4gICAgLy8gcGx1Z2luIHRhYmxlIHByb3ZpZGVzIHByb2Nlc3NvciBmb3Iga2VwbGVyZ2wgbWFwLCBub3Qgc2luZ2xlIGRhdGFzZXQgd2l0aCBhbGxEYXRhXG4gICAgY29uc3QgcGFyc2VkTWFwID0gYXdhaXQgcHJvY2Vzc29yTWV0aG9kKG1hcCk7XG4gICAgcGFyc2VkRGF0YXNldHMgPSBwYXJzZWRNYXAuZGF0YXNldHM7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0YXNldHMgPSB0b0FycmF5KG1hcC5kYXRhc2V0cyk7XG4gICAgcGFyc2VkRGF0YXNldHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGRhdGFzZXRzLm1hcChhc3luYyBkcyA9PiB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09IERBVEFTRVRfRk9STUFUUy5rZXBsZXJnbCkge1xuICAgICAgICAgIC8vIG5vIG5lZWQgdG8gb2J0YWluIGlkLCBkaXJlY3RseSBwYXNzIHRoZW0gaW5cbiAgICAgICAgICByZXR1cm4gYXdhaXQgcHJvY2Vzc29yTWV0aG9kKGRzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmZvID0gKGRzICYmIGRzLmluZm8pIHx8IHtpZDogZ2VuZXJhdGVIYXNoSWQoNil9O1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJvY2Vzc29yTWV0aG9kKGRzLmRhdGEgfHwgZHMpO1xuICAgICAgICByZXR1cm4ge2luZm8sIGRhdGF9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY29uc3QgaW5mbyA9IHtcbiAgICAuLi5tYXAuaW5mbyxcbiAgICBwcm92aWRlcjogcHJvdmlkZXIubmFtZSxcbiAgICBsb2FkUGFyYW1zXG4gIH07XG4gIHJldHVybiB7XG4gICAgZGF0YXNldHM6IHBhcnNlZERhdGFzZXRzLFxuICAgIGluZm8sXG4gICAgLi4uKG1hcC5jb25maWcgPyB7Y29uZmlnOiBtYXAuY29uZmlnfSA6IHt9KSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAvLyBkbyBub3QgY2VudGVyIG1hcCB3aGVuIGxvYWRpbmcgY2xvdWQgbWFwXG4gICAgICBjZW50ZXJNYXA6IGZhbHNlXG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBQQVJTRV9MT0FEX01BUF9SRVNQT05TRV9UQVNLID0gVGFzay5mcm9tUHJvbWlzZShcbiAgcGFyc2VMb2FkTWFwUmVzcG9uc2VUYXNrLFxuICAnUEFSU0VfTE9BRF9NQVBfUkVTUE9OU0VfVEFTSydcbik7XG5cbi8qKlxuICogVXNlZCB0byBsb2FkIHJlc291cmNlcyBzdG9yZWQgaW4gYSBwcml2YXRlIHN0b3JhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBTdWNjZXNzVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuTG9hZENsb3VkTWFwU3VjY2Vzc1BheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3Qge3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlciwgb25FcnJvcn0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBmb3JtYXRFcnJvciA9IGNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpO1xuICBpZiAoZm9ybWF0RXJyb3IpIHtcbiAgICAvLyBpZiByZXNwb25zZSBmb3JtYXQgaXMgbm90IGNvcnJlY3RcbiAgICByZXR1cm4gZXhwb3J0RmlsZUVycm9yVXBkYXRlcihzdGF0ZSwge1xuICAgICAgcGF5bG9hZDoge2Vycm9yOiBmb3JtYXRFcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9XG4gICAgfSk7XG4gIH1cblxuICAvLyBwcm9jZXNzb3JNZXRob2QgY2FuIGJlIGFzeW5jIHNvIGNyZWF0ZSBhIHRhc2tcbiAgY29uc3QgcGFyc2VMb2FkTWFwUmVzcG9uc2VUYXNrID0gUEFSU0VfTE9BRF9NQVBfUkVTUE9OU0VfVEFTSyh7XG4gICAgcmVzcG9uc2UsXG4gICAgbG9hZFBhcmFtcyxcbiAgICBwcm92aWRlclxuICB9KS5iaW1hcChcbiAgICAoZGF0YXNldHNQYXlsb2FkOiBBZGREYXRhVG9NYXBQYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gbG9hZENsb3VkTWFwU3VjY2VzczIoey4uLmFjdGlvbi5wYXlsb2FkLCBkYXRhc2V0c1BheWxvYWR9KTtcbiAgICB9LFxuICAgIGVycm9yID0+XG4gICAgICBleHBvcnRGaWxlRXJyb3JVcGRhdGVyKHN0YXRlLCB7XG4gICAgICAgIHBheWxvYWQ6IHtlcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9XG4gICAgICB9KVxuICApO1xuXG4gIHJldHVybiB3aXRoVGFzayhzdGF0ZSwgcGFyc2VMb2FkTWFwUmVzcG9uc2VUYXNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBTdWNjZXNzMlVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLkxvYWRDbG91ZE1hcFN1Y2Nlc3MyUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCB7ZGF0YXNldHNQYXlsb2FkLCByZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXIsIG9uU3VjY2Vzc30gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBtYXBTYXZlZDogcHJvdmlkZXIubmFtZSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IHByb3ZpZGVyLm5hbWUsXG4gICAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHRhc2tzID0gW1xuICAgIEFDVElPTl9UQVNLKCkubWFwKCgpID0+IGFkZERhdGFUb01hcChkYXRhc2V0c1BheWxvYWQpKSxcbiAgICBjcmVhdGVBY3Rpb25UYXNrKG9uU3VjY2Vzcywge3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlcn0pLFxuICAgIEFDVElPTl9UQVNLKCkubWFwKCgpID0+IHBvc3RTYXZlTG9hZFN1Y2Nlc3MoJ+ODl+ODreOCuOOCp+OCr+ODiOOCkuiqreOBv+i+vOOBv+OBvuOBl+OBnycpKVxuICBdLmZpbHRlcihkID0+IGQpO1xuXG4gIHJldHVybiB0YXNrcy5sZW5ndGggPyB3aXRoVGFzayhuZXdTdGF0ZSwgdGFza3MpIDogbmV3U3RhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENsb3VkTWFwRXJyb3JVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBFcnJvclBheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IGdldEVycm9yKGFjdGlvbi5wYXlsb2FkLmVycm9yKSB8fCAn44OX44Ot44K444Kn44Kv44OI44Gu6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44G+44GX44GfJztcblxuICBDb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgICBwcm92aWRlckVycm9yOiBudWxsXG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5ld1N0YXRlLFxuICAgIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHt0eXBlOiAnZXJyb3InLCBtZXNzYWdlLCBkZWxheUNsb3NlOiBmYWxzZX0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRQcm92aWRlclN0YXR1c1VwZGF0ZXIgPSAoc3RhdGU6IFByb3ZpZGVyU3RhdGUpOiBQcm92aWRlclN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gIHByb3ZpZGVyRXJyb3I6IG51bGwsXG4gIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgc3VjY2Vzc0luZm86IHt9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0EsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsSUFBQSxHQUFBSCxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssS0FBQSxHQUFBTCxPQUFBO0FBS0EsSUFBQU0sS0FBQSxHQUFBTixPQUFBO0FBWUEsSUFBQU8sS0FBQSxHQUFBUCxPQUFBO0FBTUEsSUFBQVEsS0FBQSxHQUFBUixPQUFBO0FBQ0EsSUFBQVMsS0FBQSxHQUFBVCxPQUFBO0FBQ0EsSUFBQVUsS0FBQSxHQUFBVixPQUFBO0FBQTZDLFNBQUFXLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBYix3QkFBQWEsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJB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QixDQUFDZ0MsU0FBUyxFQUFFO0lBQUNPLFFBQVEsRUFBUkEsUUFBUTtJQUFFaUMsVUFBVSxFQUFWQSxVQUFVO0lBQUVsRSxRQUFRLEVBQVJBO0VBQVEsQ0FBQyxDQUFDLEVBQzdELElBQUFILGlCQUFXLEVBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUM7SUFBQSxPQUFNLElBQUFzRCx5QkFBbUIsRUFBQyxnQkFBZ0IsQ0FBQztFQUFBLEVBQUMsQ0FDL0QsQ0FBQy9FLE1BQU0sQ0FBQyxVQUFBZ0YsQ0FBQztJQUFBLE9BQUlBLENBQUM7RUFBQSxFQUFDO0VBRWhCLE9BQU9GLEtBQUssQ0FBQ3hFLE1BQU0sR0FBRyxJQUFBeUQsZUFBUSxFQUFDUCxRQUFRLEVBQUVzQixLQUFLLENBQUMsR0FBR3RCLFFBQVE7QUFDNUQsQ0FBQztBQUVNLElBQU00Ryx3QkFBd0IsR0FBQXhKLE9BQUEsQ0FBQXdKLHdCQUFBLEdBQUcsU0FBM0JBLHdCQUF3QkEsQ0FDbkNwSCxLQUFvQixFQUNwQjFCLE1BQStELEVBQzdDO0VBQ2xCLElBQU1jLE9BQU8sR0FBRyxJQUFBcUQsYUFBUSxFQUFDbkUsTUFBTSxDQUFDQyxPQUFPLENBQUNPLEtBQUssQ0FBQyxJQUFJLG9CQUFvQjtFQUV0RUQsbUJBQU8sQ0FBQ2lFLElBQUksQ0FBQzFELE9BQU8sQ0FBQztFQUVyQixJQUFNb0IsUUFBUSxHQUFBcEQsYUFBQSxDQUFBQSxhQUFBLEtBQ1Q0QyxLQUFLO0lBQ1JuQyxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCQyxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCQyxhQUFhLEVBQUU7RUFBSSxFQUNwQjtFQUVELE9BQU8sSUFBQWdELGVBQVEsRUFDYlAsUUFBUSxFQUNSdkIsNkJBQTZCLENBQUM7SUFBQ0UsSUFBSSxFQUFFLE9BQU87SUFBRUMsT0FBTyxFQUFQQSxPQUFPO0lBQUVFLFVBQVUsRUFBRTtFQUFLLENBQUMsQ0FDM0UsQ0FBQztBQUNILENBQUM7QUFFTSxJQUFNK0gsMEJBQTBCLEdBQUF6SixPQUFBLENBQUF5SiwwQkFBQSxHQUFHLFNBQTdCQSwwQkFBMEJBLENBQUlySCxLQUFvQjtFQUFBLE9BQUE1QyxhQUFBLENBQUFBLGFBQUEsS0FDMUQ0QyxLQUFLO0lBQ1JuQyxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCRSxhQUFhLEVBQUUsSUFBSTtJQUNuQkQsaUJBQWlCLEVBQUUsS0FBSztJQUN4QkcsV0FBVyxFQUFFLENBQUM7RUFBQztBQUFBLENBQ2YiLCJpZ25vcmVMaXN0IjpbXX0=