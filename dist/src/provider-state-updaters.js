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
  // Display notification via dataviz-tool-header toast UI
  var toastType = type === 'error' ? 'error' : 'success';
  var duration = delayClose ? 3000 : undefined;
  if (typeof document !== 'undefined') {
    var toolHeader = document.querySelector('dataviz-tool-header');
    if (toolHeader && toolHeader.showMessage) {
      toolHeader.showMessage(message, toastType, duration);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGFza3MiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29uc29sZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfc3JjIiwiX3NyYzIiLCJfc3JjMyIsIl9zcmM0IiwiX3NyYzUiLCJfc3JjNiIsIl9zcmM3IiwiX3NyYzgiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJJTklUSUFMX1BST1ZJREVSX1NUQVRFIiwiZXhwb3J0cyIsImlzUHJvdmlkZXJMb2FkaW5nIiwiaXNDbG91ZE1hcExvYWRpbmciLCJwcm92aWRlckVycm9yIiwiY3VycmVudFByb3ZpZGVyIiwic3VjY2Vzc0luZm8iLCJtYXBTYXZlZCIsInNhdmVkTWFwSWQiLCJ2aXN1YWxpemF0aW9ucyIsImNyZWF0ZUFjdGlvblRhc2siLCJhY3Rpb24iLCJwYXlsb2FkIiwiQUNUSU9OX1RBU0siLCJtYXAiLCJfdmFsaWRhdGVQcm92aWRlciIsInByb3ZpZGVyIiwibWV0aG9kIiwiQ29uc29sZSIsImVycm9yIiwiY29uY2F0IiwibmFtZSIsImNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzIiwiX3JlZiIsInR5cGUiLCJtZXNzYWdlIiwiX3JlZiRkZWxheUNsb3NlIiwiZGVsYXlDbG9zZSIsInRvYXN0VHlwZSIsImR1cmF0aW9uIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJ0b29sSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInNob3dNZXNzYWdlIiwiZXhwb3J0RmlsZVRvQ2xvdWRVcGRhdGVyIiwic3RhdGUiLCJfYWN0aW9uJHBheWxvYWQiLCJtYXBEYXRhIiwiX2FjdGlvbiRwYXlsb2FkJG9wdGlvIiwib3B0aW9ucyIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJjbG9zZU1vZGFsIiwibmV3U3RhdGUiLCJ1cGxvYWRGaWxlVGFzayIsIkVYUE9SVF9GSUxFX1RPX0NMT1VEX1RBU0siLCJiaW1hcCIsInJlc3BvbnNlIiwiZXhwb3J0RmlsZVN1Y2Nlc3MiLCJleHBvcnRGaWxlRXJyb3IiLCJ3aXRoVGFzayIsImV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlciIsIl9yZXNwb25zZSRpbmZvJGlkIiwiX3Jlc3BvbnNlJGluZm8iLCJfYWN0aW9uJHBheWxvYWQyIiwiX2FjdGlvbiRwYXlsb2FkMiRvcHRpIiwiaXNQdWJsaWMiLCJpbmZvIiwiaWQiLCJ0YXNrcyIsInBvc3RTYXZlTG9hZFN1Y2Nlc3MiLCJkIiwicG9zdFNhdmVMb2FkU3VjY2Vzc1VwZGF0ZXIiLCJ0b2dnbGVNb2RhbCIsInJlc2V0UHJvdmlkZXJTdGF0dXMiLCJfdG9Db25zdW1hYmxlQXJyYXkyIiwiZXhwb3J0RmlsZUVycm9yVXBkYXRlciIsIl9hY3Rpb24kcGF5bG9hZDMiLCJpc0ZpbGVDb25mbGljdCIsIk9WRVJXUklURV9NQVBfSUQiLCJnZXRFcnJvciIsInRhc2siLCJsb2FkQ2xvdWRNYXBVcGRhdGVyIiwiX2FjdGlvbiRwYXlsb2FkNCIsImxvYWRQYXJhbXMiLCJ3YXJuIiwiTE9BRF9DTE9VRF9NQVBfVEFTSyIsImxvYWRDbG91ZE1hcFN1Y2Nlc3MiLCJsb2FkQ2xvdWRNYXBFcnJvciIsIkZJTEVfQ09ORkxJQ1RfTVNHIiwiY2hlY2tMb2FkTWFwUmVzcG9uc2VFcnJvciIsImlzUGxhaW5PYmplY3QiLCJFcnJvciIsImRhdGFzZXRzIiwiY29uZmlnIiwiZ2V0RGF0YXNldEhhbmRsZXIiLCJmb3JtYXQiLCJfZ2V0QXBwbGljYXRpb25Db25maWciLCJkZWZhdWx0SGFuZGxlciIsIkRBVEFTRVRfSEFORExFUlMiLCJEQVRBU0VUX0ZPUk1BVFMiLCJjc3YiLCJUYWJsZUNsYXNzIiwiZ2V0QXBwbGljYXRpb25Db25maWciLCJ0YWJsZSIsIktlcGxlclRhYmxlIiwiZ2V0RmlsZVByb2Nlc3NvciIsInByb2Nlc3NvclJlc3VsdCIsInByb2Nlc3NvciIsInN1cHBvcnRlZEZvcm1hdCIsImsiLCJqb2luIiwicGFyc2VMb2FkTWFwUmVzcG9uc2VUYXNrIiwiX3giLCJfcGFyc2VMb2FkTWFwUmVzcG9uc2VUYXNrIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX3JlZ2VuZXJhdG9yIiwibWFyayIsIl9jYWxsZWUyIiwiX3JlZjIiLCJwcm9jZXNzb3JNZXRob2QiLCJwYXJzZWREYXRhc2V0cyIsInBhcnNlZE1hcCIsIndyYXAiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwcmV2IiwibmV4dCIsImtlcGxlcmdsIiwic2VudCIsInRvQXJyYXkiLCJQcm9taXNlIiwiYWxsIiwiX3JlZjMiLCJfY2FsbGVlIiwiZHMiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImFicnVwdCIsImdlbmVyYXRlSGFzaElkIiwic3RvcCIsIl94MiIsImNlbnRlck1hcCIsIlBBUlNFX0xPQURfTUFQX1JFU1BPTlNFX1RBU0siLCJUYXNrIiwiZnJvbVByb21pc2UiLCJsb2FkQ2xvdWRNYXBTdWNjZXNzVXBkYXRlciIsIl9hY3Rpb24kcGF5bG9hZDUiLCJmb3JtYXRFcnJvciIsImRhdGFzZXRzUGF5bG9hZCIsImxvYWRDbG91ZE1hcFN1Y2Nlc3MyIiwibG9hZENsb3VkTWFwU3VjY2VzczJVcGRhdGVyIiwiX2FjdGlvbiRwYXlsb2FkNiIsImFkZERhdGFUb01hcCIsImxvYWRDbG91ZE1hcEVycm9yVXBkYXRlciIsInJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlZHVjZXJzL3NyYy9wcm92aWRlci1zdGF0ZS11cGRhdGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgVGFzaywge3dpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcbmltcG9ydCBDb25zb2xlIGZyb20gJ2dsb2JhbC9jb25zb2xlJztcbmltcG9ydCB7Z2V0QXBwbGljYXRpb25Db25maWcsIGdldEVycm9yLCBpc1BsYWluT2JqZWN0fSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWQsIHRvQXJyYXl9IGZyb20gJ0BrZXBsZXIuZ2wvY29tbW9uLXV0aWxzJztcbmltcG9ydCB7XG4gIEVYUE9SVF9GSUxFX1RPX0NMT1VEX1RBU0ssXG4gIEFDVElPTl9UQVNLLFxuICBMT0FEX0NMT1VEX01BUF9UQVNLXG59IGZyb20gJ0BrZXBsZXIuZ2wvdGFza3MnO1xuaW1wb3J0IHtcbiAgZXhwb3J0RmlsZVN1Y2Nlc3MsXG4gIGV4cG9ydEZpbGVFcnJvcixcbiAgcG9zdFNhdmVMb2FkU3VjY2VzcyxcbiAgbG9hZENsb3VkTWFwU3VjY2VzcyxcbiAgbG9hZENsb3VkTWFwU3VjY2VzczIsXG4gIGxvYWRDbG91ZE1hcEVycm9yLFxuICByZXNldFByb3ZpZGVyU3RhdHVzLFxuICB0b2dnbGVNb2RhbCxcbiAgYWRkRGF0YVRvTWFwLFxuICBQcm92aWRlckFjdGlvbnNcbn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7XG4gIERBVEFTRVRfRk9STUFUUyxcbiAgT1ZFUldSSVRFX01BUF9JRFxufSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge0FkZERhdGFUb01hcFBheWxvYWQsIEV4cG9ydEZpbGVUb0Nsb3VkUGF5bG9hZH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmltcG9ydCB7RklMRV9DT05GTElDVF9NU0csIE1hcExpc3RJdGVtfSBmcm9tICdAa2VwbGVyLmdsL2Nsb3VkLXByb3ZpZGVycyc7XG5pbXBvcnQge0RBVEFTRVRfSEFORExFUlN9IGZyb20gJ0BrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG5pbXBvcnQge0tlcGxlclRhYmxlfSBmcm9tICdAa2VwbGVyLmdsL3RhYmxlJztcblxudHlwZSBBY3Rpb25QYXlsb2FkPFA+ID0ge1xuICB0eXBlPzogc3RyaW5nO1xuICBwYXlsb2FkOiBQO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvdmlkZXJTdGF0ZSA9IHtcbiAgaXNQcm92aWRlckxvYWRpbmc6IGJvb2xlYW47XG4gIGlzQ2xvdWRNYXBMb2FkaW5nOiBib29sZWFuO1xuICBwcm92aWRlckVycm9yOiBhbnk7XG4gIGN1cnJlbnRQcm92aWRlcjogc3RyaW5nIHwgbnVsbDtcbiAgc3VjY2Vzc0luZm86IGFueTtcbiAgbWFwU2F2ZWQ6IG51bGwgfCBzdHJpbmc7XG4gIHNhdmVkTWFwSWQ6IG51bGwgfCBzdHJpbmc7XG4gIGluaXRpYWxTdGF0ZT86IGFueTtcbiAgdmlzdWFsaXphdGlvbnM6IE1hcExpc3RJdGVtW107XG59O1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9QUk9WSURFUl9TVEFURTogUHJvdmlkZXJTdGF0ZSA9IHtcbiAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXG4gIHByb3ZpZGVyRXJyb3I6IG51bGwsXG4gIGN1cnJlbnRQcm92aWRlcjogbnVsbCxcbiAgc3VjY2Vzc0luZm86IHt9LFxuICBtYXBTYXZlZDogbnVsbCxcbiAgc2F2ZWRNYXBJZDogbnVsbCxcbiAgdmlzdWFsaXphdGlvbnM6IFtdXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25UYXNrKGFjdGlvbiwgcGF5bG9hZCkge1xuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBBQ1RJT05fVEFTSygpLm1hcCgoKSA9PiBhY3Rpb24ocGF5bG9hZCkpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIF92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCBtZXRob2QpIHtcbiAgaWYgKCFwcm92aWRlcikge1xuICAgIENvbnNvbGUuZXJyb3IoYHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm92aWRlclttZXRob2RdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgQ29uc29sZS5lcnJvcihgJHttZXRob2R9IGlzIG5vdCBhIGZ1bmN0aW9uIG9mIENsb3VkIHByb3ZpZGVyOiAke3Byb3ZpZGVyLm5hbWV9YCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHtcbiAgdHlwZSxcbiAgbWVzc2FnZSxcbiAgZGVsYXlDbG9zZSA9IHRydWVcbn06IHtcbiAgdHlwZT86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkZWxheUNsb3NlPzogYm9vbGVhbjtcbn0pIHtcbiAgLy8gRGlzcGxheSBub3RpZmljYXRpb24gdmlhIGRhdGF2aXotdG9vbC1oZWFkZXIgdG9hc3QgVUlcbiAgY29uc3QgdG9hc3RUeXBlID0gdHlwZSA9PT0gJ2Vycm9yJyA/ICdlcnJvcicgOiAnc3VjY2Vzcyc7XG4gIGNvbnN0IGR1cmF0aW9uID0gZGVsYXlDbG9zZSA/IDMwMDAgOiB1bmRlZmluZWQ7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgdG9vbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RhdGF2aXotdG9vbC1oZWFkZXInKTtcbiAgICBpZiAodG9vbEhlYWRlciAmJiAodG9vbEhlYWRlciBhcyBhbnkpLnNob3dNZXNzYWdlKSB7XG4gICAgICAodG9vbEhlYWRlciBhcyBhbnkpLnNob3dNZXNzYWdlKG1lc3NhZ2UsIHRvYXN0VHlwZSwgZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2Qgd2lsbCBleHBvcnQgdGhlIGN1cnJlbnQga2VwbGVyIGNvbmZpZyBmaWxlIHRvIHRoZSBjaG9zZW4gY2xvdWQgcHJvZGVyXG4gKiBhZGQgcmV0dXJucyBhIHNoYXJlIFVSTFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVUb0Nsb3VkVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxFeHBvcnRGaWxlVG9DbG91ZFBheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3Qge21hcERhdGEsIHByb3ZpZGVyLCBvcHRpb25zID0ge30sIG9uU3VjY2Vzcywgb25FcnJvciwgY2xvc2VNb2RhbH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAndXBsb2FkTWFwJykpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogdHJ1ZSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IHByb3ZpZGVyLm5hbWVcbiAgfTtcblxuICAvLyBwYXlsb2FkIGNhbGxlZCBieSBwcm92aWRlci51cGxvYWRNYXBcbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBtYXBEYXRhLFxuICAgIG9wdGlvbnNcbiAgfTtcbiAgY29uc3QgdXBsb2FkRmlsZVRhc2sgPSBFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLKHtwcm92aWRlciwgcGF5bG9hZH0pLmJpbWFwKFxuICAgIC8vIHN1Y2Nlc3NcbiAgICByZXNwb25zZSA9PiBleHBvcnRGaWxlU3VjY2Vzcyh7cmVzcG9uc2UsIHByb3ZpZGVyLCBvcHRpb25zLCBvblN1Y2Nlc3MsIGNsb3NlTW9kYWx9KSxcbiAgICAvLyBlcnJvclxuICAgIGVycm9yID0+IGV4cG9ydEZpbGVFcnJvcih7ZXJyb3IsIHByb3ZpZGVyLCBvcHRpb25zLCBvbkVycm9yfSlcbiAgKTtcblxuICByZXR1cm4gd2l0aFRhc2sobmV3U3RhdGUsIHVwbG9hZEZpbGVUYXNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHBvcnRGaWxlU3VjY2Vzc1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLkV4cG9ydEZpbGVTdWNjZXNzUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCB7cmVzcG9uc2UsIHByb3ZpZGVyLCBvcHRpb25zID0ge30sIG9uU3VjY2VzcywgY2xvc2VNb2RhbH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gICAgLy8gVE9ETzogZG8gd2UgYWx3YXlzIGhhdmUgdG8gc3RvcmUgdGhpcz9cbiAgICBzdWNjZXNzSW5mbzogcmVzcG9uc2UsXG4gICAgLi4uKCFvcHRpb25zLmlzUHVibGljXG4gICAgICA/IHtcbiAgICAgICAgICBtYXBTYXZlZDogcHJvdmlkZXIubmFtZSxcbiAgICAgICAgICBzYXZlZE1hcElkOiByZXNwb25zZT8uaW5mbz8uaWQgPz8gbnVsbFxuICAgICAgICB9XG4gICAgICA6IHt9KVxuICB9O1xuXG4gIGNvbnN0IHRhc2tzID0gW1xuICAgIGNyZWF0ZUFjdGlvblRhc2sob25TdWNjZXNzLCB7cmVzcG9uc2UsIHByb3ZpZGVyLCBvcHRpb25zfSksXG4gICAgY2xvc2VNb2RhbCAmJlxuICAgICAgQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gcG9zdFNhdmVMb2FkU3VjY2VzcyhgTWFwIHNhdmVkIHRvICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfSFgKSlcbiAgXS5maWx0ZXIoZCA9PiBkKTtcblxuICByZXR1cm4gdGFza3MubGVuZ3RoID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2tzKSA6IG5ld1N0YXRlO1xufTtcblxuLyoqXG4gKiBDbG9zZSBtb2RhbCBvbiBzdWNjZXNzIGFuZCBkaXNwbGF5IG5vdGlmaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgcG9zdFNhdmVMb2FkU3VjY2Vzc1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLlBvc3RTYXZlTG9hZFN1Y2Nlc3NQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBhY3Rpb24ucGF5bG9hZCB8fCBgU2F2ZWQgLyBMb2FkIHRvICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfSBTdWNjZXNzYDtcblxuICBjb25zdCB0YXNrcyA9IFtcbiAgICBBQ1RJT05fVEFTSygpLm1hcCgoKSA9PiB0b2dnbGVNb2RhbChudWxsKSksXG4gICAgQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gcmVzZXRQcm92aWRlclN0YXR1cygpKSxcbiAgICAuLi5jcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7bWVzc2FnZX0pXG4gIF07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKHN0YXRlLCB0YXNrcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZUVycm9yVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuRXhwb3J0RmlsZUVycm9yUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCB7ZXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIGlmIChpc0ZpbGVDb25mbGljdChlcnJvcikpIHtcbiAgICBuZXdTdGF0ZS5tYXBTYXZlZCA9IHByb3ZpZGVyLm5hbWU7XG4gICAgcmV0dXJuIHdpdGhUYXNrKG5ld1N0YXRlLCBbQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gdG9nZ2xlTW9kYWwoT1ZFUldSSVRFX01BUF9JRCkpXSk7XG4gIH1cblxuICBuZXdTdGF0ZS5wcm92aWRlckVycm9yID0gZ2V0RXJyb3IoZXJyb3IpO1xuICBjb25zdCB0YXNrID0gY3JlYXRlQWN0aW9uVGFzayhvbkVycm9yLCB7ZXJyb3IsIHByb3ZpZGVyfSk7XG5cbiAgcmV0dXJuIHRhc2sgPyB3aXRoVGFzayhuZXdTdGF0ZSwgdGFzaykgOiBuZXdTdGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtsb2FkUGFyYW1zLCBwcm92aWRlciwgb25TdWNjZXNzLCBvbkVycm9yfSA9IGFjdGlvbi5wYXlsb2FkO1xuICBpZiAoIWxvYWRQYXJhbXMpIHtcbiAgICBDb25zb2xlLndhcm4oJ2xvYWQgbWFwIGVycm9yOiBsb2FkUGFyYW1zIGlzIHVuZGVmaW5lZCcpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAnZG93bmxvYWRNYXAnKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiB0cnVlLFxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiB0cnVlXG4gIH07XG5cbiAgLy8gcGF5bG9hZCBjYWxsZWQgYnkgcHJvdmlkZXIuZG93bmxvYWRNYXBcbiAgY29uc3QgdXBsb2FkRmlsZVRhc2sgPSBMT0FEX0NMT1VEX01BUF9UQVNLKHtwcm92aWRlciwgcGF5bG9hZDogbG9hZFBhcmFtc30pLmJpbWFwKFxuICAgIC8vIHN1Y2Nlc3NcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcmVzcG9uc2UgPT4gbG9hZENsb3VkTWFwU3VjY2Vzcyh7cmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3MsIG9uRXJyb3J9KSxcbiAgICAvLyBlcnJvclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBlcnJvciA9PiBsb2FkQ2xvdWRNYXBFcnJvcih7ZXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfSlcbiAgKTtcblxuICByZXR1cm4gd2l0aFRhc2sobmV3U3RhdGUsIHVwbG9hZEZpbGVUYXNrKTtcbn07XG5cbmZ1bmN0aW9uIGlzRmlsZUNvbmZsaWN0KGVycm9yKSB7XG4gIHJldHVybiBlcnJvciAmJiBlcnJvci5tZXNzYWdlID09PSBGSUxFX0NPTkZMSUNUX01TRztcbn1cblxuZnVuY3Rpb24gY2hlY2tMb2FkTWFwUmVzcG9uc2VFcnJvcihyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlIHx8ICFpc1BsYWluT2JqZWN0KHJlc3BvbnNlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvYWQgbWFwIHJlc3BvbnNlIGlzIGVtcHR5Jyk7XG4gIH1cbiAgaWYgKCFpc1BsYWluT2JqZWN0KHJlc3BvbnNlLm1hcCkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBMb2FkIG1hcCByZXNwb25zZSBzaG91bGQgYmUgYW4gb2JqZWN0IHByb3BlcnR5IFwibWFwXCJgKTtcbiAgfVxuICBpZiAoIXJlc3BvbnNlLm1hcC5kYXRhc2V0cyB8fCAhcmVzcG9uc2UubWFwLmNvbmZpZykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYExvYWQgbWFwIHJlc3BvbnNlLm1hcCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggcHJvcGVydHkgZGF0YXNldHMgb3IgY29uZmlnYCk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YXNldEhhbmRsZXIoZm9ybWF0KSB7XG4gIGNvbnN0IGRlZmF1bHRIYW5kbGVyID0gREFUQVNFVF9IQU5ETEVSU1tEQVRBU0VUX0ZPUk1BVFMuY3N2XTtcbiAgaWYgKCFmb3JtYXQpIHtcbiAgICBDb25zb2xlLndhcm4oJ2Zvcm1hdCBpcyBub3QgcHJvdmlkZWQgaW4gbG9hZCBtYXAgcmVzcG9uc2UsIHdpbGwgdXNlIGNzdiBieSBkZWZhdWx0Jyk7XG4gICAgcmV0dXJuIGRlZmF1bHRIYW5kbGVyO1xuICB9XG5cbiAgLy8gdXNlIGN1c3RvbSBwcm9jZXNzb3JzIGZyb20gdGFibGUgY2xhc3NcbiAgY29uc3QgVGFibGVDbGFzcyA9IGdldEFwcGxpY2F0aW9uQ29uZmlnKCkudGFibGUgPz8gS2VwbGVyVGFibGU7XG4gIGlmICh0eXBlb2YgVGFibGVDbGFzcy5nZXRGaWxlUHJvY2Vzc29yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcHJvY2Vzc29yUmVzdWx0ID0gVGFibGVDbGFzcy5nZXRGaWxlUHJvY2Vzc29yKG51bGwsIGZvcm1hdCk7XG4gICAgaWYgKCFwcm9jZXNzb3JSZXN1bHQucHJvY2Vzc29yKSB7XG4gICAgICBDb25zb2xlLndhcm4oYE5vIHByb2Nlc3NvciBmb3VuZCBmb3IgZm9ybWF0ICR7Zm9ybWF0fSwgd2lsbCB1c2UgY3N2IGJ5IGRlZmF1bHRgKTtcbiAgICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3NvclJlc3VsdC5wcm9jZXNzb3I7XG4gIH1cblxuICBpZiAoIURBVEFTRVRfSEFORExFUlNbZm9ybWF0XSkge1xuICAgIGNvbnN0IHN1cHBvcnRlZEZvcm1hdCA9IE9iamVjdC5rZXlzKERBVEFTRVRfRk9STUFUUylcbiAgICAgIC5tYXAoayA9PiBgJyR7a30nYClcbiAgICAgIC5qb2luKCcsICcpO1xuICAgIENvbnNvbGUud2FybihcbiAgICAgIGB1bmtub3duIGZvcm1hdCAke2Zvcm1hdH0uIFBsZWFzZSB1c2Ugb25lIG9mICR7c3VwcG9ydGVkRm9ybWF0fSwgd2lsbCB1c2UgY3N2IGJ5IGRlZmF1bHRgXG4gICAgKTtcbiAgICByZXR1cm4gZGVmYXVsdEhhbmRsZXI7XG4gIH1cblxuICByZXR1cm4gREFUQVNFVF9IQU5ETEVSU1tmb3JtYXRdO1xufVxuXG4vKipcbiAqIEEgdGFzayB0byBoYW5kbGUgYXN5bmMgcHJvY2Vzc29yTWV0aG9kXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5hc3luYyBmdW5jdGlvbiBwYXJzZUxvYWRNYXBSZXNwb25zZVRhc2soe1xuICByZXNwb25zZSxcbiAgbG9hZFBhcmFtcyxcbiAgcHJvdmlkZXJcbn06IHtcbiAgcmVzcG9uc2U6IFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBTdWNjZXNzUGF5bG9hZFsncmVzcG9uc2UnXTtcbiAgbG9hZFBhcmFtczogUHJvdmlkZXJBY3Rpb25zLkxvYWRDbG91ZE1hcFN1Y2Nlc3NQYXlsb2FkWydsb2FkUGFyYW1zJ107XG4gIHByb3ZpZGVyOiBQcm92aWRlckFjdGlvbnMuTG9hZENsb3VkTWFwU3VjY2Vzc1BheWxvYWRbJ3Byb3ZpZGVyJ107XG59KSB7XG4gIGNvbnN0IHttYXAsIGZvcm1hdH0gPSByZXNwb25zZTtcbiAgY29uc3QgcHJvY2Vzc29yTWV0aG9kID0gZ2V0RGF0YXNldEhhbmRsZXIoZm9ybWF0KTtcblxuICBsZXQgcGFyc2VkRGF0YXNldHM6IEFkZERhdGFUb01hcFBheWxvYWRbJ2RhdGFzZXRzJ10gPSBbXTtcblxuICBpZiAoXG4gICAgZm9ybWF0ID09PSBEQVRBU0VUX0ZPUk1BVFMua2VwbGVyZ2wgJiZcbiAgICBwcm9jZXNzb3JNZXRob2QgIT09IERBVEFTRVRfSEFORExFUlNbREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsXVxuICApIHtcbiAgICAvLyBwbHVnaW4gdGFibGUgcHJvdmlkZXMgcHJvY2Vzc29yIGZvciBrZXBsZXJnbCBtYXAsIG5vdCBzaW5nbGUgZGF0YXNldCB3aXRoIGFsbERhdGFcbiAgICBjb25zdCBwYXJzZWRNYXAgPSBhd2FpdCBwcm9jZXNzb3JNZXRob2QobWFwKTtcbiAgICBwYXJzZWREYXRhc2V0cyA9IHBhcnNlZE1hcC5kYXRhc2V0cztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRhc2V0cyA9IHRvQXJyYXkobWFwLmRhdGFzZXRzKTtcbiAgICBwYXJzZWREYXRhc2V0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZGF0YXNldHMubWFwKGFzeW5jIGRzID0+IHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsKSB7XG4gICAgICAgICAgLy8gbm8gbmVlZCB0byBvYnRhaW4gaWQsIGRpcmVjdGx5IHBhc3MgdGhlbSBpblxuICAgICAgICAgIHJldHVybiBhd2FpdCBwcm9jZXNzb3JNZXRob2QoZHMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZm8gPSAoZHMgJiYgZHMuaW5mbykgfHwge2lkOiBnZW5lcmF0ZUhhc2hJZCg2KX07XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcm9jZXNzb3JNZXRob2QoZHMuZGF0YSB8fCBkcyk7XG4gICAgICAgIHJldHVybiB7aW5mbywgZGF0YX07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb25zdCBpbmZvID0ge1xuICAgIC4uLm1hcC5pbmZvLFxuICAgIHByb3ZpZGVyOiBwcm92aWRlci5uYW1lLFxuICAgIGxvYWRQYXJhbXNcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhc2V0czogcGFyc2VkRGF0YXNldHMsXG4gICAgaW5mbyxcbiAgICAuLi4obWFwLmNvbmZpZyA/IHtjb25maWc6IG1hcC5jb25maWd9IDoge30pLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8vIGRvIG5vdCBjZW50ZXIgbWFwIHdoZW4gbG9hZGluZyBjbG91ZCBtYXBcbiAgICAgIGNlbnRlck1hcDogZmFsc2VcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IFBBUlNFX0xPQURfTUFQX1JFU1BPTlNFX1RBU0sgPSBUYXNrLmZyb21Qcm9taXNlKFxuICBwYXJzZUxvYWRNYXBSZXNwb25zZVRhc2ssXG4gICdQQVJTRV9MT0FEX01BUF9SRVNQT05TRV9UQVNLJ1xuKTtcblxuLyoqXG4gKiBVc2VkIHRvIGxvYWQgcmVzb3VyY2VzIHN0b3JlZCBpbiBhIHByaXZhdGUgc3RvcmFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRDbG91ZE1hcFN1Y2Nlc3NVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBTdWNjZXNzUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCB7cmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyLCBvbkVycm9yfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGNvbnN0IGZvcm1hdEVycm9yID0gY2hlY2tMb2FkTWFwUmVzcG9uc2VFcnJvcihyZXNwb25zZSk7XG4gIGlmIChmb3JtYXRFcnJvcikge1xuICAgIC8vIGlmIHJlc3BvbnNlIGZvcm1hdCBpcyBub3QgY29ycmVjdFxuICAgIHJldHVybiBleHBvcnRGaWxlRXJyb3JVcGRhdGVyKHN0YXRlLCB7XG4gICAgICBwYXlsb2FkOiB7ZXJyb3I6IGZvcm1hdEVycm9yLCBwcm92aWRlciwgb25FcnJvcn1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHByb2Nlc3Nvck1ldGhvZCBjYW4gYmUgYXN5bmMgc28gY3JlYXRlIGEgdGFza1xuICBjb25zdCBwYXJzZUxvYWRNYXBSZXNwb25zZVRhc2sgPSBQQVJTRV9MT0FEX01BUF9SRVNQT05TRV9UQVNLKHtcbiAgICByZXNwb25zZSxcbiAgICBsb2FkUGFyYW1zLFxuICAgIHByb3ZpZGVyXG4gIH0pLmJpbWFwKFxuICAgIChkYXRhc2V0c1BheWxvYWQ6IEFkZERhdGFUb01hcFBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiBsb2FkQ2xvdWRNYXBTdWNjZXNzMih7Li4uYWN0aW9uLnBheWxvYWQsIGRhdGFzZXRzUGF5bG9hZH0pO1xuICAgIH0sXG4gICAgZXJyb3IgPT5cbiAgICAgIGV4cG9ydEZpbGVFcnJvclVwZGF0ZXIoc3RhdGUsIHtcbiAgICAgICAgcGF5bG9hZDoge2Vycm9yLCBwcm92aWRlciwgb25FcnJvcn1cbiAgICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIHdpdGhUYXNrKHN0YXRlLCBwYXJzZUxvYWRNYXBSZXNwb25zZVRhc2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDbG91ZE1hcFN1Y2Nlc3MyVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuTG9hZENsb3VkTWFwU3VjY2VzczJQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtkYXRhc2V0c1BheWxvYWQsIHJlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlciwgb25TdWNjZXNzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIG1hcFNhdmVkOiBwcm92aWRlci5uYW1lLFxuICAgIGN1cnJlbnRQcm92aWRlcjogcHJvdmlkZXIubmFtZSxcbiAgICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlXG4gIH07XG5cbiAgY29uc3QgdGFza3MgPSBbXG4gICAgQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gYWRkRGF0YVRvTWFwKGRhdGFzZXRzUGF5bG9hZCkpLFxuICAgIGNyZWF0ZUFjdGlvblRhc2sob25TdWNjZXNzLCB7cmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyfSksXG4gICAgQUNUSU9OX1RBU0soKS5tYXAoKCkgPT4gcG9zdFNhdmVMb2FkU3VjY2VzcyhgTWFwIGZyb20gJHtwcm92aWRlci5uYW1lfSBsb2FkZWRgKSlcbiAgXS5maWx0ZXIoZCA9PiBkKTtcblxuICByZXR1cm4gdGFza3MubGVuZ3RoID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2tzKSA6IG5ld1N0YXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDbG91ZE1hcEVycm9yVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuTG9hZENsb3VkTWFwRXJyb3JQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBnZXRFcnJvcihhY3Rpb24ucGF5bG9hZC5lcnJvcikgfHwgYEVycm9yIGxvYWRpbmcgc2F2ZWQgbWFwYDtcblxuICBDb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgICBwcm92aWRlckVycm9yOiBudWxsXG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5ld1N0YXRlLFxuICAgIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHt0eXBlOiAnZXJyb3InLCBtZXNzYWdlLCBkZWxheUNsb3NlOiBmYWxzZX0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRQcm92aWRlclN0YXR1c1VwZGF0ZXIgPSAoc3RhdGU6IFByb3ZpZGVyU3RhdGUpOiBQcm92aWRlclN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gIHByb3ZpZGVyRXJyb3I6IG51bGwsXG4gIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxc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