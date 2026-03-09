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
var _tasks = _interopRequireWildcard(require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/node_modules/react-palm/tasks"));
var _console = _interopRequireDefault(require("global/console"));
var _src = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/utils/src");
var _src2 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/common-utils/src");
var _src3 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/tasks/src");
var _src4 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/actions/src");
var _src5 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/constants/src");
var _src6 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/cloud-providers/src");
var _src7 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/processors/src");
var _src8 = require("/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/kepler.gl-db/src/table/src");
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
  var _response$info$id, _response$info;
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
    successInfo: response
  }, !options.isPublic ? {
    mapSaved: provider.name,
    savedMapId: (_response$info$id = response === null || response === void 0 || (_response$info = response.info) === null || _response$info === void 0 ? void 0 : _response$info.id) !== null && _response$info$id !== void 0 ? _response$info$id : null
  } : {});
  var tasks = [createActionTask(onSuccess, {
    response: response,
    provider: provider,
    options: options
  }), closeModal && (0, _src3.ACTION_TASK)().map(function () {
    return (0, _src4.postSaveLoadSuccess)("Map saved to ".concat(state.currentProvider, "!"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};

/**
 * Close modal on success and display notification
 */
var postSaveLoadSuccessUpdater = exports.postSaveLoadSuccessUpdater = function postSaveLoadSuccessUpdater(state, action) {
  var message = action.payload || "Saved / Load to ".concat(state.currentProvider, " Success");
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
  _parseLoadMapResponseTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var response, loadParams, provider, map, format, processorMethod, parsedDatasets, parsedMap, datasets, info;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          response = _ref2.response, loadParams = _ref2.loadParams, provider = _ref2.provider;
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
            var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ds) {
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
              return _ref3.apply(this, arguments);
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
    return (0, _src4.postSaveLoadSuccess)("Map from ".concat(provider.name, " loaded"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};
var loadCloudMapErrorUpdater = exports.loadCloudMapErrorUpdater = function loadCloudMapErrorUpdater(state, action) {
  var message = (0, _src.getError)(action.payload.error) || "Error loading saved map";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGFza3MiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29uc29sZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfc3JjIiwiX3NyYzIiLCJfc3JjMyIsIl9zcmM0IiwiX3NyYzUiLCJfc3JjNiIsIl9zcmM3IiwiX3NyYzgiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJJTklUSUFMX1BST1ZJREVSX1NUQVRFIiwiZXhwb3J0cyIsImlzUHJvdmlkZXJMb2FkaW5nIiwiaXNDbG91ZE1hcExvYWRpbmciLCJwcm92aWRlckVycm9yIiwiY3VycmVudFByb3ZpZGVyIiwic3VjY2Vzc0luZm8iLCJtYXBTYXZlZCIsInNhdmVkTWFwSWQiLCJ2aXN1YWxpemF0aW9ucyIsImNyZWF0ZUFjdGlvblRhc2siLCJhY3Rpb24iLCJwYXlsb2FkIiwiQUNUSU9OX1RBU0siLCJtYXAiLCJfdmFsaWRhdGVQcm92aWRlciIsInByb3ZpZGVyIiwibWV0aG9kIiwiQ29uc29sZSIsImVycm9yIiwiY29uY2F0IiwibmFtZSIsImNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzIiwiX3JlZiIsInR5cGUiLCJtZXNzYWdlIiwiX3JlZiRkZWxheUNsb3NlIiwiZGVsYXlDbG9zZSIsInRvYXN0VHlwZSIsImR1cmF0aW9uIiwidW5kZWZpbmVkIiwid2luZG93Iiwic2V0VGltZW91dCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImV4cG9ydEZpbGVUb0Nsb3VkVXBkYXRlciIsInN0YXRlIiwiX2FjdGlvbiRwYXlsb2FkIiwibWFwRGF0YSIsIl9hY3Rpb24kcGF5bG9hZCRvcHRpbyIsIm9wdGlvbnMiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiY2xvc2VNb2RhbCIsIm5ld1N0YXRlIiwidXBsb2FkRmlsZVRhc2siLCJFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLIiwiYmltYXAiLCJyZXNwb25zZSIsImV4cG9ydEZpbGVTdWNjZXNzIiwiZXhwb3J0RmlsZUVycm9yIiwid2l0aFRhc2siLCJleHBvcnRGaWxlU3VjY2Vzc1VwZGF0ZXIiLCJfcmVzcG9uc2UkaW5mbyRpZCIsIl9yZXNwb25zZSRpbmZvIiwiX2FjdGlvbiRwYXlsb2FkMiIsIl9hY3Rpb24kcGF5bG9hZDIkb3B0aSIsImlzUHVibGljIiwiaW5mbyIsImlkIiwidGFza3MiLCJwb3N0U2F2ZUxvYWRTdWNjZXNzIiwiZCIsInBvc3RTYXZlTG9hZFN1Y2Nlc3NVcGRhdGVyIiwidG9nZ2xlTW9kYWwiLCJyZXNldFByb3ZpZGVyU3RhdHVzIiwiX3RvQ29uc3VtYWJsZUFycmF5MiIsImV4cG9ydEZpbGVFcnJvclVwZGF0ZXIiLCJfYWN0aW9uJHBheWxvYWQzIiwiaXNGaWxlQ29uZmxpY3QiLCJPVkVSV1JJVEVfTUFQX0lEIiwiZ2V0RXJyb3IiLCJ0YXNrIiwibG9hZENsb3VkTWFwVXBkYXRlciIsIl9hY3Rpb24kcGF5bG9hZDQiLCJsb2FkUGFyYW1zIiwid2FybiIsIkxPQURfQ0xPVURfTUFQX1RBU0siLCJsb2FkQ2xvdWRNYXBTdWNjZXNzIiwibG9hZENsb3VkTWFwRXJyb3IiLCJGSUxFX0NPTkZMSUNUX01TRyIsImNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IiLCJpc1BsYWluT2JqZWN0IiwiRXJyb3IiLCJkYXRhc2V0cyIsImNvbmZpZyIsImdldERhdGFzZXRIYW5kbGVyIiwiZm9ybWF0IiwiX2dldEFwcGxpY2F0aW9uQ29uZmlnIiwiZGVmYXVsdEhhbmRsZXIiLCJEQVRBU0VUX0hBTkRMRVJTIiwiREFUQVNFVF9GT1JNQVRTIiwiY3N2IiwiVGFibGVDbGFzcyIsImdldEFwcGxpY2F0aW9uQ29uZmlnIiwidGFibGUiLCJLZXBsZXJUYWJsZSIsImdldEZpbGVQcm9jZXNzb3IiLCJwcm9jZXNzb3JSZXN1bHQiLCJwcm9jZXNzb3IiLCJzdXBwb3J0ZWRGb3JtYXQiLCJrIiwiam9pbiIsInBhcnNlTG9hZE1hcFJlc3BvbnNlVGFzayIsIl94IiwiX3BhcnNlTG9hZE1hcFJlc3BvbnNlVGFzayIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlMiIsIl9yZWYyIiwicHJvY2Vzc29yTWV0aG9kIiwicGFyc2VkRGF0YXNldHMiLCJwYXJzZWRNYXAiLCJ3cmFwIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicHJldiIsIm5leHQiLCJrZXBsZXJnbCIsInNlbnQiLCJ0b0FycmF5IiwiUHJvbWlzZSIsImFsbCIsIl9yZWYzIiwiX2NhbGxlZSIsImRzIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhYnJ1cHQiLCJnZW5lcmF0ZUhhc2hJZCIsInN0b3AiLCJfeDIiLCJjZW50ZXJNYXAiLCJQQVJTRV9MT0FEX01BUF9SRVNQT05TRV9UQVNLIiwiVGFzayIsImZyb21Qcm9taXNlIiwibG9hZENsb3VkTWFwU3VjY2Vzc1VwZGF0ZXIiLCJfYWN0aW9uJHBheWxvYWQ1IiwiZm9ybWF0RXJyb3IiLCJkYXRhc2V0c1BheWxvYWQiLCJsb2FkQ2xvdWRNYXBTdWNjZXNzMiIsImxvYWRDbG91ZE1hcFN1Y2Nlc3MyVXBkYXRlciIsIl9hY3Rpb24kcGF5bG9hZDYiLCJhZGREYXRhVG9NYXAiLCJsb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXIiLCJyZXNldFByb3ZpZGVyU3RhdHVzVXBkYXRlciJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy8gQ29weXJpZ2h0IGNvbnRyaWJ1dG9ycyB0byB0aGUga2VwbGVyLmdsIHByb2plY3RcblxuaW1wb3J0IFRhc2ssIHt3aXRoVGFza30gZnJvbSAncmVhY3QtcGFsbS90YXNrcyc7XG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XG5pbXBvcnQge2dldEFwcGxpY2F0aW9uQ29uZmlnLCBnZXRFcnJvciwgaXNQbGFpbk9iamVjdH0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCB0b0FycmF5fSBmcm9tICdAa2VwbGVyLmdsL2NvbW1vbi11dGlscyc7XG5pbXBvcnQge1xuICBFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLLFxuICBBQ1RJT05fVEFTSyxcbiAgTE9BRF9DTE9VRF9NQVBfVEFTS1xufSBmcm9tICdAa2VwbGVyLmdsL3Rhc2tzJztcbmltcG9ydCB7XG4gIGV4cG9ydEZpbGVTdWNjZXNzLFxuICBleHBvcnRGaWxlRXJyb3IsXG4gIHBvc3RTYXZlTG9hZFN1Y2Nlc3MsXG4gIGxvYWRDbG91ZE1hcFN1Y2Nlc3MsXG4gIGxvYWRDbG91ZE1hcFN1Y2Nlc3MyLFxuICBsb2FkQ2xvdWRNYXBFcnJvcixcbiAgcmVzZXRQcm92aWRlclN0YXR1cyxcbiAgdG9nZ2xlTW9kYWwsXG4gIGFkZERhdGFUb01hcCxcbiAgUHJvdmlkZXJBY3Rpb25zXG59IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5pbXBvcnQge1xuICBEQVRBU0VUX0ZPUk1BVFMsXG4gIE9WRVJXUklURV9NQVBfSURcbn0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtBZGREYXRhVG9NYXBQYXlsb2FkLCBFeHBvcnRGaWxlVG9DbG91ZFBheWxvYWR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5pbXBvcnQge0ZJTEVfQ09ORkxJQ1RfTVNHLCBNYXBMaXN0SXRlbX0gZnJvbSAnQGtlcGxlci5nbC9jbG91ZC1wcm92aWRlcnMnO1xuaW1wb3J0IHtEQVRBU0VUX0hBTkRMRVJTfSBmcm9tICdAa2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xuaW1wb3J0IHtLZXBsZXJUYWJsZX0gZnJvbSAnQGtlcGxlci5nbC90YWJsZSc7XG5cbnR5cGUgQWN0aW9uUGF5bG9hZDxQPiA9IHtcbiAgdHlwZT86IHN0cmluZztcbiAgcGF5bG9hZDogUDtcbn07XG5cbmV4cG9ydCB0eXBlIFByb3ZpZGVyU3RhdGUgPSB7XG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBib29sZWFuO1xuICBpc0Nsb3VkTWFwTG9hZGluZzogYm9vbGVhbjtcbiAgcHJvdmlkZXJFcnJvcjogYW55O1xuICBjdXJyZW50UHJvdmlkZXI6IHN0cmluZyB8IG51bGw7XG4gIHN1Y2Nlc3NJbmZvOiBhbnk7XG4gIG1hcFNhdmVkOiBudWxsIHwgc3RyaW5nO1xuICBzYXZlZE1hcElkOiBudWxsIHwgc3RyaW5nO1xuICBpbml0aWFsU3RhdGU/OiBhbnk7XG4gIHZpc3VhbGl6YXRpb25zOiBNYXBMaXN0SXRlbVtdO1xufTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfUFJPVklERVJfU1RBVEU6IFByb3ZpZGVyU3RhdGUgPSB7XG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxuICBwcm92aWRlckVycm9yOiBudWxsLFxuICBjdXJyZW50UHJvdmlkZXI6IG51bGwsXG4gIHN1Y2Nlc3NJbmZvOiB7fSxcbiAgbWFwU2F2ZWQ6IG51bGwsXG4gIHNhdmVkTWFwSWQ6IG51bGwsXG4gIHZpc3VhbGl6YXRpb25zOiBbXVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uVGFzayhhY3Rpb24sIHBheWxvYWQpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gYWN0aW9uKHBheWxvYWQpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBfdmFsaWRhdGVQcm92aWRlcihwcm92aWRlciwgbWV0aG9kKSB7XG4gIGlmICghcHJvdmlkZXIpIHtcbiAgICBDb25zb2xlLmVycm9yKGBwcm92aWRlciBpcyBub3QgZGVmaW5lZGApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvdmlkZXJbbWV0aG9kXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIENvbnNvbGUuZXJyb3IoYCR7bWV0aG9kfSBpcyBub3QgYSBmdW5jdGlvbiBvZiBDbG91ZCBwcm92aWRlcjogJHtwcm92aWRlci5uYW1lfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7XG4gIHR5cGUsXG4gIG1lc3NhZ2UsXG4gIGRlbGF5Q2xvc2UgPSB0cnVlXG59OiB7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZGVsYXlDbG9zZT86IGJvb2xlYW47XG59KSB7XG4gIC8vIERpc3BhdGNoIGEgY3VzdG9tIGV2ZW50IHRvIG5vdGlmeSBkYXRhdml6LXRvb2wtaGVhZGVyIHRvYXN0IFVJLlxuICAvLyBVc2luZyB3aW5kb3cgZXZlbnQgKyBzZXRUaW1lb3V0IHRvIGRlY291cGxlIGZyb20gUmVkdXggZGlzcGF0Y2ggY3ljbGUuXG4gIGNvbnN0IHRvYXN0VHlwZSA9IHR5cGUgPT09ICdlcnJvcicgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnO1xuICBjb25zdCBkdXJhdGlvbiA9IGRlbGF5Q2xvc2UgPyAzMDAwIDogdW5kZWZpbmVkO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdrZXBsZXItbm90aWZpY2F0aW9uJywge1xuICAgICAgICAgIGRldGFpbDoge21lc3NhZ2UsIHR5cGU6IHRvYXN0VHlwZSwgZHVyYXRpb259XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIDApO1xuICB9XG4gIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGV4cG9ydCB0aGUgY3VycmVudCBrZXBsZXIgY29uZmlnIGZpbGUgdG8gdGhlIGNob3NlbiBjbG91ZCBwcm9kZXJcbiAqIGFkZCByZXR1cm5zIGEgc2hhcmUgVVJMXG4gKlxuICovXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZVRvQ2xvdWRVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPEV4cG9ydEZpbGVUb0Nsb3VkUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCB7bWFwRGF0YSwgcHJvdmlkZXIsIG9wdGlvbnMgPSB7fSwgb25TdWNjZXNzLCBvbkVycm9yLCBjbG9zZU1vZGFsfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGlmICghX3ZhbGlkYXRlUHJvdmlkZXIocHJvdmlkZXIsICd1cGxvYWRNYXAnKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiB0cnVlLFxuICAgIGN1cnJlbnRQcm92aWRlcjogcHJvdmlkZXIubmFtZVxuICB9O1xuXG4gIC8vIHBheWxvYWQgY2FsbGVkIGJ5IHByb3ZpZGVyLnVwbG9hZE1hcFxuICBjb25zdCBwYXlsb2FkID0ge1xuICAgIG1hcERhdGEsXG4gICAgb3B0aW9uc1xuICB9O1xuICBjb25zdCB1cGxvYWRGaWxlVGFzayA9IEVYUE9SVF9GSUxFX1RPX0NMT1VEX1RBU0soe3Byb3ZpZGVyLCBwYXlsb2FkfSkuYmltYXAoXG4gICAgLy8gc3VjY2Vzc1xuICAgIHJlc3BvbnNlID0+IGV4cG9ydEZpbGVTdWNjZXNzKHtyZXNwb25zZSwgcHJvdmlkZXIsIG9wdGlvbnMsIG9uU3VjY2VzcywgY2xvc2VNb2RhbH0pLFxuICAgIC8vIGVycm9yXG4gICAgZXJyb3IgPT4gZXhwb3J0RmlsZUVycm9yKHtlcnJvciwgcHJvdmlkZXIsIG9wdGlvbnMsIG9uRXJyb3J9KVxuICApO1xuXG4gIHJldHVybiB3aXRoVGFzayhuZXdTdGF0ZSwgdXBsb2FkRmlsZVRhc2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuRXhwb3J0RmlsZVN1Y2Nlc3NQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtyZXNwb25zZSwgcHJvdmlkZXIsIG9wdGlvbnMgPSB7fSwgb25TdWNjZXNzLCBjbG9zZU1vZGFsfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAvLyBUT0RPOiBkbyB3ZSBhbHdheXMgaGF2ZSB0byBzdG9yZSB0aGlzP1xuICAgIHN1Y2Nlc3NJbmZvOiByZXNwb25zZSxcbiAgICAuLi4oIW9wdGlvbnMuaXNQdWJsaWNcbiAgICAgID8ge1xuICAgICAgICAgIG1hcFNhdmVkOiBwcm92aWRlci5uYW1lLFxuICAgICAgICAgIHNhdmVkTWFwSWQ6IHJlc3BvbnNlPy5pbmZvPy5pZCA/PyBudWxsXG4gICAgICAgIH1cbiAgICAgIDoge30pXG4gIH07XG5cbiAgY29uc3QgdGFza3MgPSBbXG4gICAgY3JlYXRlQWN0aW9uVGFzayhvblN1Y2Nlc3MsIHtyZXNwb25zZSwgcHJvdmlkZXIsIG9wdGlvbnN9KSxcbiAgICBjbG9zZU1vZGFsICYmXG4gICAgICBBQ1RJT05fVEFTSygpLm1hcCgoKSA9PiBwb3N0U2F2ZUxvYWRTdWNjZXNzKGBNYXAgc2F2ZWQgdG8gJHtzdGF0ZS5jdXJyZW50UHJvdmlkZXJ9IWApKVxuICBdLmZpbHRlcihkID0+IGQpO1xuXG4gIHJldHVybiB0YXNrcy5sZW5ndGggPyB3aXRoVGFzayhuZXdTdGF0ZSwgdGFza3MpIDogbmV3U3RhdGU7XG59O1xuXG4vKipcbiAqIENsb3NlIG1vZGFsIG9uIHN1Y2Nlc3MgYW5kIGRpc3BsYXkgbm90aWZpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBwb3N0U2F2ZUxvYWRTdWNjZXNzVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuUG9zdFNhdmVMb2FkU3VjY2Vzc1BheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IGFjdGlvbi5wYXlsb2FkIHx8IGBTYXZlZCAvIExvYWQgdG8gJHtzdGF0ZS5jdXJyZW50UHJvdmlkZXJ9IFN1Y2Nlc3NgO1xuXG4gIGNvbnN0IHRhc2tzID0gW1xuICAgIEFDVElPTl9UQVNLKCkubWFwKCgpID0+IHRvZ2dsZU1vZGFsKG51bGwpKSxcbiAgICBBQ1RJT05fVEFTSygpLm1hcCgoKSA9PiByZXNldFByb3ZpZGVyU3RhdHVzKCkpLFxuICAgIC4uLmNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHttZXNzYWdlfSlcbiAgXTtcblxuICByZXR1cm4gd2l0aFRhc2soc3RhdGUsIHRhc2tzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHBvcnRGaWxlRXJyb3JVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5FeHBvcnRGaWxlRXJyb3JQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtlcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlXG4gIH07XG5cbiAgaWYgKGlzRmlsZUNvbmZsaWN0KGVycm9yKSkge1xuICAgIG5ld1N0YXRlLm1hcFNhdmVkID0gcHJvdmlkZXIubmFtZTtcbiAgICByZXR1cm4gd2l0aFRhc2sobmV3U3RhdGUsIFtBQ1RJT05fVEFTSygpLm1hcCgoKSA9PiB0b2dnbGVNb2RhbChPVkVSV1JJVEVfTUFQX0lEKSldKTtcbiAgfVxuXG4gIG5ld1N0YXRlLnByb3ZpZGVyRXJyb3IgPSBnZXRFcnJvcihlcnJvcik7XG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVBY3Rpb25UYXNrKG9uRXJyb3IsIHtlcnJvciwgcHJvdmlkZXJ9KTtcblxuICByZXR1cm4gdGFzayA/IHdpdGhUYXNrKG5ld1N0YXRlLCB0YXNrKSA6IG5ld1N0YXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDbG91ZE1hcFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLkxvYWRDbG91ZE1hcFBheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3Qge2xvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3MsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XG4gIGlmICghbG9hZFBhcmFtcykge1xuICAgIENvbnNvbGUud2FybignbG9hZCBtYXAgZXJyb3I6IGxvYWRQYXJhbXMgaXMgdW5kZWZpbmVkJyk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGlmICghX3ZhbGlkYXRlUHJvdmlkZXIocHJvdmlkZXIsICdkb3dubG9hZE1hcCcpKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IHRydWUsXG4gICAgaXNDbG91ZE1hcExvYWRpbmc6IHRydWVcbiAgfTtcblxuICAvLyBwYXlsb2FkIGNhbGxlZCBieSBwcm92aWRlci5kb3dubG9hZE1hcFxuICBjb25zdCB1cGxvYWRGaWxlVGFzayA9IExPQURfQ0xPVURfTUFQX1RBU0soe3Byb3ZpZGVyLCBwYXlsb2FkOiBsb2FkUGFyYW1zfSkuYmltYXAoXG4gICAgLy8gc3VjY2Vzc1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICByZXNwb25zZSA9PiBsb2FkQ2xvdWRNYXBTdWNjZXNzKHtyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXIsIG9uU3VjY2Vzcywgb25FcnJvcn0pLFxuICAgIC8vIGVycm9yXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGVycm9yID0+IGxvYWRDbG91ZE1hcEVycm9yKHtlcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9KVxuICApO1xuXG4gIHJldHVybiB3aXRoVGFzayhuZXdTdGF0ZSwgdXBsb2FkRmlsZVRhc2spO1xufTtcblxuZnVuY3Rpb24gaXNGaWxlQ29uZmxpY3QoZXJyb3IpIHtcbiAgcmV0dXJuIGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPT09IEZJTEVfQ09ORkxJQ1RfTVNHO1xufVxuXG5mdW5jdGlvbiBjaGVja0xvYWRNYXBSZXNwb25zZUVycm9yKHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2UgfHwgIWlzUGxhaW5PYmplY3QocmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignTG9hZCBtYXAgcmVzcG9uc2UgaXMgZW1wdHknKTtcbiAgfVxuICBpZiAoIWlzUGxhaW5PYmplY3QocmVzcG9uc2UubWFwKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYExvYWQgbWFwIHJlc3BvbnNlIHNob3VsZCBiZSBhbiBvYmplY3QgcHJvcGVydHkgXCJtYXBcImApO1xuICB9XG4gIGlmICghcmVzcG9uc2UubWFwLmRhdGFzZXRzIHx8ICFyZXNwb25zZS5tYXAuY29uZmlnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgTG9hZCBtYXAgcmVzcG9uc2UubWFwIHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCBwcm9wZXJ0eSBkYXRhc2V0cyBvciBjb25maWdgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhc2V0SGFuZGxlcihmb3JtYXQpIHtcbiAgY29uc3QgZGVmYXVsdEhhbmRsZXIgPSBEQVRBU0VUX0hBTkRMRVJTW0RBVEFTRVRfRk9STUFUUy5jc3ZdO1xuICBpZiAoIWZvcm1hdCkge1xuICAgIENvbnNvbGUud2FybignZm9ybWF0IGlzIG5vdCBwcm92aWRlZCBpbiBsb2FkIG1hcCByZXNwb25zZSwgd2lsbCB1c2UgY3N2IGJ5IGRlZmF1bHQnKTtcbiAgICByZXR1cm4gZGVmYXVsdEhhbmRsZXI7XG4gIH1cblxuICAvLyB1c2UgY3VzdG9tIHByb2Nlc3NvcnMgZnJvbSB0YWJsZSBjbGFzc1xuICBjb25zdCBUYWJsZUNsYXNzID0gZ2V0QXBwbGljYXRpb25Db25maWcoKS50YWJsZSA/PyBLZXBsZXJUYWJsZTtcbiAgaWYgKHR5cGVvZiBUYWJsZUNsYXNzLmdldEZpbGVQcm9jZXNzb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBwcm9jZXNzb3JSZXN1bHQgPSBUYWJsZUNsYXNzLmdldEZpbGVQcm9jZXNzb3IobnVsbCwgZm9ybWF0KTtcbiAgICBpZiAoIXByb2Nlc3NvclJlc3VsdC5wcm9jZXNzb3IpIHtcbiAgICAgIENvbnNvbGUud2FybihgTm8gcHJvY2Vzc29yIGZvdW5kIGZvciBmb3JtYXQgJHtmb3JtYXR9LCB3aWxsIHVzZSBjc3YgYnkgZGVmYXVsdGApO1xuICAgICAgcmV0dXJuIGRlZmF1bHRIYW5kbGVyO1xuICAgIH1cbiAgICByZXR1cm4gcHJvY2Vzc29yUmVzdWx0LnByb2Nlc3NvcjtcbiAgfVxuXG4gIGlmICghREFUQVNFVF9IQU5ETEVSU1tmb3JtYXRdKSB7XG4gICAgY29uc3Qgc3VwcG9ydGVkRm9ybWF0ID0gT2JqZWN0LmtleXMoREFUQVNFVF9GT1JNQVRTKVxuICAgICAgLm1hcChrID0+IGAnJHtrfSdgKVxuICAgICAgLmpvaW4oJywgJyk7XG4gICAgQ29uc29sZS53YXJuKFxuICAgICAgYHVua25vd24gZm9ybWF0ICR7Zm9ybWF0fS4gUGxlYXNlIHVzZSBvbmUgb2YgJHtzdXBwb3J0ZWRGb3JtYXR9LCB3aWxsIHVzZSBjc3YgYnkgZGVmYXVsdGBcbiAgICApO1xuICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcbiAgfVxuXG4gIHJldHVybiBEQVRBU0VUX0hBTkRMRVJTW2Zvcm1hdF07XG59XG5cbi8qKlxuICogQSB0YXNrIHRvIGhhbmRsZSBhc3luYyBwcm9jZXNzb3JNZXRob2RcbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlTG9hZE1hcFJlc3BvbnNlVGFzayh7XG4gIHJlc3BvbnNlLFxuICBsb2FkUGFyYW1zLFxuICBwcm92aWRlclxufToge1xuICByZXNwb25zZTogUHJvdmlkZXJBY3Rpb25zLkxvYWRDbG91ZE1hcFN1Y2Nlc3NQYXlsb2FkWydyZXNwb25zZSddO1xuICBsb2FkUGFyYW1zOiBQcm92aWRlckFjdGlvbnMuTG9hZENsb3VkTWFwU3VjY2Vzc1BheWxvYWRbJ2xvYWRQYXJhbXMnXTtcbiAgcHJvdmlkZXI6IFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBTdWNjZXNzUGF5bG9hZFsncHJvdmlkZXInXTtcbn0pIHtcbiAgY29uc3Qge21hcCwgZm9ybWF0fSA9IHJlc3BvbnNlO1xuICBjb25zdCBwcm9jZXNzb3JNZXRob2QgPSBnZXREYXRhc2V0SGFuZGxlcihmb3JtYXQpO1xuXG4gIGxldCBwYXJzZWREYXRhc2V0czogQWRkRGF0YVRvTWFwUGF5bG9hZFsnZGF0YXNldHMnXSA9IFtdO1xuXG4gIGlmIChcbiAgICBmb3JtYXQgPT09IERBVEFTRVRfRk9STUFUUy5rZXBsZXJnbCAmJlxuICAgIHByb2Nlc3Nvck1ldGhvZCAhPT0gREFUQVNFVF9IQU5ETEVSU1tEQVRBU0VUX0ZPUk1BVFMua2VwbGVyZ2xdXG4gICkge1xuICAgIC8vIHBsdWdpbiB0YWJsZSBwcm92aWRlcyBwcm9jZXNzb3IgZm9yIGtlcGxlcmdsIG1hcCwgbm90IHNpbmdsZSBkYXRhc2V0IHdpdGggYWxsRGF0YVxuICAgIGNvbnN0IHBhcnNlZE1hcCA9IGF3YWl0IHByb2Nlc3Nvck1ldGhvZChtYXApO1xuICAgIHBhcnNlZERhdGFzZXRzID0gcGFyc2VkTWFwLmRhdGFzZXRzO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGFzZXRzID0gdG9BcnJheShtYXAuZGF0YXNldHMpO1xuICAgIHBhcnNlZERhdGFzZXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBkYXRhc2V0cy5tYXAoYXN5bmMgZHMgPT4ge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSBEQVRBU0VUX0ZPUk1BVFMua2VwbGVyZ2wpIHtcbiAgICAgICAgICAvLyBubyBuZWVkIHRvIG9idGFpbiBpZCwgZGlyZWN0bHkgcGFzcyB0aGVtIGluXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHByb2Nlc3Nvck1ldGhvZChkcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5mbyA9IChkcyAmJiBkcy5pbmZvKSB8fCB7aWQ6IGdlbmVyYXRlSGFzaElkKDYpfTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByb2Nlc3Nvck1ldGhvZChkcy5kYXRhIHx8IGRzKTtcbiAgICAgICAgcmV0dXJuIHtpbmZvLCBkYXRhfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGluZm8gPSB7XG4gICAgLi4ubWFwLmluZm8sXG4gICAgcHJvdmlkZXI6IHByb3ZpZGVyLm5hbWUsXG4gICAgbG9hZFBhcmFtc1xuICB9O1xuICByZXR1cm4ge1xuICAgIGRhdGFzZXRzOiBwYXJzZWREYXRhc2V0cyxcbiAgICBpbmZvLFxuICAgIC4uLihtYXAuY29uZmlnID8ge2NvbmZpZzogbWFwLmNvbmZpZ30gOiB7fSksXG4gICAgb3B0aW9uczoge1xuICAgICAgLy8gZG8gbm90IGNlbnRlciBtYXAgd2hlbiBsb2FkaW5nIGNsb3VkIG1hcFxuICAgICAgY2VudGVyTWFwOiBmYWxzZVxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgUEFSU0VfTE9BRF9NQVBfUkVTUE9OU0VfVEFTSyA9IFRhc2suZnJvbVByb21pc2UoXG4gIHBhcnNlTG9hZE1hcFJlc3BvbnNlVGFzayxcbiAgJ1BBUlNFX0xPQURfTUFQX1JFU1BPTlNFX1RBU0snXG4pO1xuXG4vKipcbiAqIFVzZWQgdG8gbG9hZCByZXNvdXJjZXMgc3RvcmVkIGluIGEgcHJpdmF0ZSBzdG9yYWdlLlxuICovXG5leHBvcnQgY29uc3QgbG9hZENsb3VkTWFwU3VjY2Vzc1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLkxvYWRDbG91ZE1hcFN1Y2Nlc3NQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXIsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3QgZm9ybWF0RXJyb3IgPSBjaGVja0xvYWRNYXBSZXNwb25zZUVycm9yKHJlc3BvbnNlKTtcbiAgaWYgKGZvcm1hdEVycm9yKSB7XG4gICAgLy8gaWYgcmVzcG9uc2UgZm9ybWF0IGlzIG5vdCBjb3JyZWN0XG4gICAgcmV0dXJuIGV4cG9ydEZpbGVFcnJvclVwZGF0ZXIoc3RhdGUsIHtcbiAgICAgIHBheWxvYWQ6IHtlcnJvcjogZm9ybWF0RXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29yTWV0aG9kIGNhbiBiZSBhc3luYyBzbyBjcmVhdGUgYSB0YXNrXG4gIGNvbnN0IHBhcnNlTG9hZE1hcFJlc3BvbnNlVGFzayA9IFBBUlNFX0xPQURfTUFQX1JFU1BPTlNFX1RBU0soe1xuICAgIHJlc3BvbnNlLFxuICAgIGxvYWRQYXJhbXMsXG4gICAgcHJvdmlkZXJcbiAgfSkuYmltYXAoXG4gICAgKGRhdGFzZXRzUGF5bG9hZDogQWRkRGF0YVRvTWFwUGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIGxvYWRDbG91ZE1hcFN1Y2Nlc3MyKHsuLi5hY3Rpb24ucGF5bG9hZCwgZGF0YXNldHNQYXlsb2FkfSk7XG4gICAgfSxcbiAgICBlcnJvciA9PlxuICAgICAgZXhwb3J0RmlsZUVycm9yVXBkYXRlcihzdGF0ZSwge1xuICAgICAgICBwYXlsb2FkOiB7ZXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfVxuICAgICAgfSlcbiAgKTtcblxuICByZXR1cm4gd2l0aFRhc2soc3RhdGUsIHBhcnNlTG9hZE1hcFJlc3BvbnNlVGFzayk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENsb3VkTWFwU3VjY2VzczJVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBTdWNjZXNzMlBheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3Qge2RhdGFzZXRzUGF5bG9hZCwgcmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3N9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgbWFwU2F2ZWQ6IHByb3ZpZGVyLm5hbWUsXG4gICAgY3VycmVudFByb3ZpZGVyOiBwcm92aWRlci5uYW1lLFxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2VcbiAgfTtcblxuICBjb25zdCB0YXNrcyA9IFtcbiAgICBBQ1RJT05fVEFTSygpLm1hcCgoKSA9PiBhZGREYXRhVG9NYXAoZGF0YXNldHNQYXlsb2FkKSksXG4gICAgY3JlYXRlQWN0aW9uVGFzayhvblN1Y2Nlc3MsIHtyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXJ9KSxcbiAgICBBQ1RJT05fVEFTSygpLm1hcCgoKSA9PiBwb3N0U2F2ZUxvYWRTdWNjZXNzKGBNYXAgZnJvbSAke3Byb3ZpZGVyLm5hbWV9IGxvYWRlZGApKVxuICBdLmZpbHRlcihkID0+IGQpO1xuXG4gIHJldHVybiB0YXNrcy5sZW5ndGggPyB3aXRoVGFzayhuZXdTdGF0ZSwgdGFza3MpIDogbmV3U3RhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENsb3VkTWFwRXJyb3JVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBFcnJvclBheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IGdldEVycm9yKGFjdGlvbi5wYXlsb2FkLmVycm9yKSB8fCBgRXJyb3IgbG9hZGluZyBzYXZlZCBtYXBgO1xuXG4gIENvbnNvbGUud2FybihtZXNzYWdlKTtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gICAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxuICAgIHByb3ZpZGVyRXJyb3I6IG51bGxcbiAgfTtcblxuICByZXR1cm4gd2l0aFRhc2soXG4gICAgbmV3U3RhdGUsXG4gICAgY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3Moe3R5cGU6ICdlcnJvcicsIG1lc3NhZ2UsIGRlbGF5Q2xvc2U6IGZhbHNlfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldFByb3ZpZGVyU3RhdHVzVXBkYXRlciA9IChzdGF0ZTogUHJvdmlkZXJTdGF0ZSk6IFByb3ZpZGVyU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgcHJvdmlkZXJFcnJvcjogbnVsbCxcbiAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxuICBzdWNjZXNzSW5mbzoge31cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFDLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBRyxJQUFBLEdBQUFILE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFDQSxJQUFBSyxLQUFBLEdBQUFMLE9BQUE7QUFLQSxJQUFBTSxLQUFBLEdBQUFOLE9BQUE7QUFZQSxJQUFBTyxLQUFBLEdBQUFQLE9BQUE7QUFNQSxJQUFBUSxLQUFBLEdBQUFSLE9BQUE7QUFDQSxJQUFBUyxLQUFBLEdBQUFULE9BQUE7QUFDQSxJQUFBVSxLQUFBLEdBQUFWLE9BQUE7QUFBNkMsU0FBQVcseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFiLHdCQUFBYSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEs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