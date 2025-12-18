"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fitBoundsUpdater = exports.INITIAL_MAP_STATE = void 0;
exports.getMapDimForSplitMap = getMapDimForSplitMap;
exports.pickViewportPropsFromMapState = pickViewportPropsFromMapState;
exports.updateMapUpdater = exports.toggleSplitMapViewportUpdater = exports.toggleSplitMapUpdater = exports.togglePerspectiveUpdater = exports.resetMapConfigUpdater = exports.receiveMapConfigUpdater = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));
var _booleanWithin = _interopRequireDefault(require("@turf/boolean-within"));
var _bboxPolygon = _interopRequireDefault(require("@turf/bbox-polygon"));
var _webMercator = require("@math.gl/web-mercator");
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _src = require("/Users/yuichiyazaki/Library/CloudStorage/Dropbox/Projects_\u8B1B\u7FA9/c_DataVizLectures/_app_fork/kepler.gl-db/src/utils/src");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
/**
 * Updaters for `mapState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStateUpdaters} from '@kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             mapState: mapStateUpdaters.fitBoundsUpdater(
 *               mapState, {payload: [127.34, 31.09, 127.56, 31.59]]}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
var mapStateUpdaters = null;
/* eslint-enable @typescript-eslint/no-unused-vars */
/**
 * Default initial `mapState`
 * @memberof mapStateUpdaters
 * @constant
 * @property pitch Default: `0`
 * @property bearing Default: `0`
 * @property latitude Default: `37.75043`
 * @property longitude Default: `-122.34679`
 * @property zoom Default: `9`
 * @property dragRotate Default: `false`
 * @property width Default: `800`
 * @property height Default: `800`
 * @property minZoom: `undefined`,
 * @property maxZoom: `undefined`,
 * @property maxBounds: `undefined`,
 * @property isSplit: `false`,
 * @property isViewportSynced: `true`,
 * @property isZoomLocked: `false`,
 * @property splitMapViewports: `[]`
 * @public
 */
var INITIAL_MAP_STATE = exports.INITIAL_MAP_STATE = {
  pitch: 0,
  bearing: 0,
  latitude: 37.75043,
  longitude: -122.34679,
  zoom: 9,
  dragRotate: false,
  width: 800,
  height: 800,
  minZoom: undefined,
  maxZoom: undefined,
  maxBounds: undefined,
  isSplit: false,
  isViewportSynced: true,
  isZoomLocked: false,
  splitMapViewports: []
};

/* Updaters */
/**
 * Update map viewport
 * @memberof mapStateUpdaters
 * @public
 */
var updateMapUpdater = exports.updateMapUpdater = function updateMapUpdater(state, action) {
  var _action$payload = action.payload,
    inputViewport = _action$payload.viewport,
    _action$payload$mapIn = _action$payload.mapIndex,
    mapIndex = _action$payload$mapIn === void 0 ? 0 : _action$payload$mapIn;
  var viewport = (0, _src.validateViewPort)(inputViewport);
  if (state.isViewportSynced) {
    // The `updateViewport` function is typed as (Viewport, Viewport) -> Viewport but here the
    // expected typing is (MapState, Viewport) -> MapState.
    // this could be a potential bug as we treat Viewport and MapState as equal seemingly
    // @ts-expect-error Type 'Viewport' is missing the following properties from type 'MapState': isSplit, isViewportSynced, isZoomLocked, splitMapViewports
    return updateViewport(state, viewport);
  }
  var otherViewportMapIndex = -1;
  var splitMapViewports = state.splitMapViewports.map(function (currentViewport, i) {
    if (i === mapIndex) {
      // update the matching viewport with the newViewport info in the action payload
      return updateViewport(currentViewport, viewport);
    }
    otherViewportMapIndex = i;
    // make no changes to the other viewport (yet)
    return currentViewport;
  });

  // make conditional updates to the other viewport not matching this payload's `mapIndex`
  if (Number.isFinite(otherViewportMapIndex) && otherViewportMapIndex > -1) {
    // width and height are a special case and are always updated
    splitMapViewports[otherViewportMapIndex] = _objectSpread(_objectSpread({}, splitMapViewports[otherViewportMapIndex]), {}, {
      width: splitMapViewports[mapIndex].width,
      height: splitMapViewports[mapIndex].height
    });
    if (state.isZoomLocked) {
      // update the other viewport with the new zoom from the split viewport that was updated with this payload's `mapIndex`
      splitMapViewports[otherViewportMapIndex] = _objectSpread(_objectSpread({}, splitMapViewports[otherViewportMapIndex]), {}, {
        zoom: splitMapViewports[mapIndex].zoom
      });
    }
  }
  return _objectSpread(_objectSpread(_objectSpread({}, state), splitMapViewports[mapIndex]), {}, {
    // update the mapState with the new array of split viewports
    splitMapViewports: splitMapViewports
  });
};

/**
 * Fit map viewport to bounds
 * @memberof mapStateUpdaters
 * @public
 */
var fitBoundsUpdater = exports.fitBoundsUpdater = function fitBoundsUpdater(state, action) {
  var centerAndZoom = (0, _src.getCenterAndZoomFromBounds)(action.payload, {
    width: state.width,
    height: state.height
  });
  if (!centerAndZoom) {
    // bounds is invalid
    return state;
  }
  var newState = _objectSpread(_objectSpread({}, state), {}, {
    latitude: centerAndZoom.center[1],
    longitude: centerAndZoom.center[0]
  }, Number.isFinite(centerAndZoom.zoom) ? {
    zoom: centerAndZoom.zoom
  } : {});

  // if fitting to bounds while split and unsynced
  // copy the new latitude, longitude, and zoom values to each split viewport
  if (newState.splitMapViewports.length) {
    newState.splitMapViewports = newState.splitMapViewports.map(function (currentViewport) {
      return _objectSpread(_objectSpread({}, currentViewport), {}, {
        latitude: newState.latitude,
        longitude: newState.longitude,
        zoom: newState.zoom
      });
    });
  }
  return newState;
};

/**
 * Toggle between 3d and 2d map.
 * @memberof mapStateUpdaters
 * @public
 */
var togglePerspectiveUpdater = exports.togglePerspectiveUpdater = function togglePerspectiveUpdater(state) {
  var newState = _objectSpread(_objectSpread(_objectSpread({}, state), {
    pitch: state.dragRotate ? 0 : 50,
    bearing: state.dragRotate ? 0 : 24
  }), {}, {
    dragRotate: !state.dragRotate
  });

  // if toggling 3d and 2d while split and unsynced
  // copy the new pitch, bearing, and dragRotate values to each split viewport
  if (newState.splitMapViewports.length) {
    newState.splitMapViewports = newState.splitMapViewports.map(function (currentViewport) {
      return _objectSpread(_objectSpread({}, currentViewport), {}, {
        pitch: newState.pitch,
        bearing: newState.bearing,
        dragRotate: newState.dragRotate
      });
    });
  }
  return newState;
};

/**
 * reset mapState to initial State
 * @memberof mapStateUpdaters
 * @public
 */
var resetMapConfigUpdater = exports.resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_MAP_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
};

// consider case where you have a split map and user wants to reset
/**
 * Update `mapState` to propagate a new config
 * @memberof mapStateUpdaters
 * @public
 */
var receiveMapConfigUpdater = exports.receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref) {
  var _ref$payload = _ref.payload,
    _ref$payload$config = _ref$payload.config,
    config = _ref$payload$config === void 0 ? {} : _ref$payload$config,
    _ref$payload$options = _ref$payload.options,
    options = _ref$payload$options === void 0 ? {} : _ref$payload$options,
    _ref$payload$bounds = _ref$payload.bounds,
    bounds = _ref$payload$bounds === void 0 ? null : _ref$payload$bounds;
  /**
   * @type {Partial<MapState>}
   */
  var mapState = (config || {}).mapState || {};
  // merged received mapState with previous state
  // state also may include properties that are new to an existing, saved project's mapState

  var mergedState = (0, _deepmerge["default"])(state, mapState, {
    // note: deepmerge by default will merge arrays by concatenating them
    // but we need to overwrite destination arrays with source arrays, if present
    // https://github.com/TehShrike/deepmerge#arraymerge-example-overwrite-target-array
    arrayMerge: function arrayMerge(_destinationArray, sourceArray) {
      return sourceArray;
    }
  });

  // if center map
  // center map will override mapState config
  if (options.centerMap && bounds) {
    mergedState = fitBoundsUpdater(mergedState, {
      payload: bounds
    });
  }

  // make sure we validate map state before we merge
  mergedState = (0, _src.validateViewPort)(mergedState);
  return _objectSpread(_objectSpread({}, mergedState), getMapDimForSplitMap(mergedState.isSplit, state));
};

/**
 * Toggle between one or split maps
 * @memberof mapStateUpdaters
 * @public
 */
var toggleSplitMapUpdater = exports.toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, state), getMapDimForSplitMap(!state.isSplit, state)), {}, {
    isSplit: !state.isSplit
  }, !state.isSplit === false ? {
    // if toggling to no longer split (single mode) then reset a few properties
    isViewportSynced: true,
    isZoomLocked: false,
    splitMapViewports: []
  } : {});
};

/**
 * Toggle between locked and unlocked split viewports
 * @memberof mapStateUpdaters
 * @public
 */
var toggleSplitMapViewportUpdater = exports.toggleSplitMapViewportUpdater = function toggleSplitMapViewportUpdater(state, action) {
  // new map state immediately gets the new, optional payload values for isViewportSynced and/or isZoomLocked
  var newMapState = _objectSpread(_objectSpread({}, state), action.payload || {});
  if (newMapState.isViewportSynced) {
    // switching from unsynced to synced viewports
    newMapState.splitMapViewports = [];
  } else {
    // switching from synced to unsynced viewports
    // or already in unsynced mode and toggling locked zoom

    if (state.isZoomLocked && !newMapState.isZoomLocked) {
      // switching off locked zoom while unsynced
      // don't copy the mapStates to left and right viewports because there will be zoom "jumping"
      return newMapState;
    }
    if (!state.isZoomLocked && newMapState.isZoomLocked) {
      // switching on locked zoom while unsynced
      // only copy zoom viewport property from the most recently interacted-with viewport to the other
      // TODO: do we want to check for a match a different way, such as a combo of `latitude` and `longitude`?
      var lastUpdatedViewportIndex = newMapState.splitMapViewports.findIndex(function (v) {
        return newMapState.zoom === v.zoom;
      });
      var splitMapViewports = newMapState.splitMapViewports.map(function (currentViewport, i) {
        if (i === lastUpdatedViewportIndex) {
          // no zoom to modify here
          return currentViewport;
        }
        // the other viewport gets the most recently interacted-with viewport's zoom
        // WHY? the viewport the user was last interacting with will set zoom across the board for smooth UX
        return _objectSpread(_objectSpread({}, currentViewport), {}, {
          zoom: newMapState.splitMapViewports[lastUpdatedViewportIndex].zoom
        });
      });
      newMapState.splitMapViewports = splitMapViewports;
      return newMapState;
    }

    // if current viewport is synced, and we are unsyncing it
    // or already in unsynced mode and NOT toggling locked zoom
    // make a fresh copy of the current viewport object, assign it to splitMapViewports[]
    // pickViewportPropsFromMapState is called twice to avoid memory allocation conflicts
    var leftViewport = pickViewportPropsFromMapState(newMapState);
    var rightViewport = pickViewportPropsFromMapState(newMapState);
    newMapState.splitMapViewports = [leftViewport, rightViewport];
  }

  // return new state
  return newMapState;
};

// Helpers
function getMapDimForSplitMap(isSplit, state) {
  // cases:
  // 1. state split: true - isSplit: true
  // do nothing
  // 2. state split: false - isSplit: false
  // do nothing
  if (state.isSplit === isSplit) {
    return {};
  }
  var width = state.isSplit && !isSplit ?
  // 3. state split: true - isSplit: false
  // double width
  state.width * 2 :
  // 4. state split: false - isSplit: true
  // split width
  state.width / 2;
  return {
    width: width
  };
}
function updateViewportBasedOnBounds(state, newMapState) {
  // Get the new viewport bounds
  var viewportBounds = _geoViewport["default"].bounds([newMapState.longitude, newMapState.latitude], newMapState.zoom, [newMapState.width, newMapState.height], _src.MAPBOX_TILE_SIZE);
  // Generate turf Polygon from bounds for comparison
  var viewportBoundsPolygon = (0, _bboxPolygon["default"])(viewportBounds);
  // @ts-ignore
  var newStateMaxBounds = newMapState.maxBounds;
  // @ts-ignore
  var maxBoundsPolygon = (0, _bboxPolygon["default"])(newStateMaxBounds);

  // If maxBounds has changed reset the viewport to snap to bounds
  var hasMaxBoundsChanged = !state.maxBounds || !state.maxBounds.every(function (val, idx) {
    return val === newStateMaxBounds[idx];
  });
  if (hasMaxBoundsChanged) {
    // Check if the newMapState viewport is within maxBounds
    if (!(0, _booleanWithin["default"])(viewportBoundsPolygon, maxBoundsPolygon)) {
      var _fitBounds = (0, _webMercator.fitBounds)({
          width: newMapState.width,
          height: newMapState.height,
          bounds: [[newStateMaxBounds[0], newStateMaxBounds[1]], [newStateMaxBounds[2], newStateMaxBounds[3]]]
        }),
        latitude = _fitBounds.latitude,
        longitude = _fitBounds.longitude,
        zoom = _fitBounds.zoom;
      newMapState = _objectSpread(_objectSpread({}, newMapState), {}, {
        latitude: latitude,
        longitude: longitude
      }, Number.isFinite(zoom) ? {
        zoom: zoom
      } : {});
    }
    return newMapState;
  }

  // Check if the newMapState viewport is within maxBounds
  if (!(0, _booleanWithin["default"])(viewportBoundsPolygon, maxBoundsPolygon)) {
    newMapState = _objectSpread(_objectSpread({}, newMapState), {}, {
      longitude: state.longitude,
      latitude: state.latitude,
      zoom: state.zoom
    });
  }
  return newMapState;
}
function pickViewportPropsFromMapState(state) {
  return (0, _pick["default"])(state, ['width', 'height', 'zoom', 'pitch', 'bearing', 'latitude', 'longitude', 'dragRotate', 'minZoom', 'maxZoom', 'maxBounds']);
}

/** Select items from object whose value is not undefined */
var definedProps = function definedProps(obj) {
  return Object.entries(obj).reduce(function (accu, _ref2) {
    var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
      k = _ref3[0],
      v = _ref3[1];
    return _objectSpread(_objectSpread({}, accu), v !== undefined ? (0, _defineProperty2["default"])({}, k, v) : {});
  }, {});
};
function updateViewport(originalViewport, viewportUpdates) {
  var newViewport = _objectSpread(_objectSpread({}, originalViewport), definedProps(viewportUpdates) || {});

  // Make sure zoom level doesn't go bellow minZoom if defined
  if (newViewport.minZoom && newViewport.zoom && newViewport.zoom < newViewport.minZoom) {
    newViewport.zoom = newViewport.minZoom;
  }
  // Make sure zoom level doesn't go above maxZoom if defined
  if (newViewport.maxZoom && newViewport.zoom && newViewport.zoom > newViewport.maxZoom) {
    newViewport.zoom = newViewport.maxZoom;
  }
  // Limit viewport update based on maxBounds
  if (newViewport.maxBounds && (0, _src.validateBounds)(newViewport.maxBounds)) {
    // @ts-expect-error Type 'Viewport' is missing the following properties from type 'MapState': isSplit, isViewportSynced, isZoomLocked, splitMapViewports
    newViewport = updateViewportBasedOnBounds(originalViewport, newViewport);
  }
  return newViewport;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ2VvVmlld3BvcnQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9ib29sZWFuV2l0aGluIiwiX2Jib3hQb2x5Z29uIiwiX3dlYk1lcmNhdG9yIiwiX2RlZXBtZXJnZSIsIl9waWNrIiwiX3NyYyIsIm93bktleXMiLCJlIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwibWFwU3RhdGVVcGRhdGVycyIsIklOSVRJQUxfTUFQX1NUQVRFIiwiZXhwb3J0cyIsInBpdGNoIiwiYmVhcmluZyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiem9vbSIsImRyYWdSb3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsIm1pblpvb20iLCJ1bmRlZmluZWQiLCJtYXhab29tIiwibWF4Qm91bmRzIiwiaXNTcGxpdCIsImlzVmlld3BvcnRTeW5jZWQiLCJpc1pvb21Mb2NrZWQiLCJzcGxpdE1hcFZpZXdwb3J0cyIsInVwZGF0ZU1hcFVwZGF0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsIl9hY3Rpb24kcGF5bG9hZCIsInBheWxvYWQiLCJpbnB1dFZpZXdwb3J0Iiwidmlld3BvcnQiLCJfYWN0aW9uJHBheWxvYWQkbWFwSW4iLCJtYXBJbmRleCIsInZhbGlkYXRlVmlld1BvcnQiLCJ1cGRhdGVWaWV3cG9ydCIsIm90aGVyVmlld3BvcnRNYXBJbmRleCIsIm1hcCIsImN1cnJlbnRWaWV3cG9ydCIsImkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImZpdEJvdW5kc1VwZGF0ZXIiLCJjZW50ZXJBbmRab29tIiwiZ2V0Q2VudGVyQW5kWm9vbUZyb21Cb3VuZHMiLCJuZXdTdGF0ZSIsImNlbnRlciIsInRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlciIsInJlc2V0TWFwQ29uZmlnVXBkYXRlciIsImluaXRpYWxTdGF0ZSIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwiX3JlZiIsIl9yZWYkcGF5bG9hZCIsIl9yZWYkcGF5bG9hZCRjb25maWciLCJjb25maWciLCJfcmVmJHBheWxvYWQkb3B0aW9ucyIsIm9wdGlvbnMiLCJfcmVmJHBheWxvYWQkYm91bmRzIiwiYm91bmRzIiwibWFwU3RhdGUiLCJtZXJnZWRTdGF0ZSIsImRlZXBtZXJnZSIsImFycmF5TWVyZ2UiLCJfZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiY2VudGVyTWFwIiwiZ2V0TWFwRGltRm9yU3BsaXRNYXAiLCJ0b2dnbGVTcGxpdE1hcFVwZGF0ZXIiLCJ0b2dnbGVTcGxpdE1hcFZpZXdwb3J0VXBkYXRlciIsIm5ld01hcFN0YXRlIiwibGFzdFVwZGF0ZWRWaWV3cG9ydEluZGV4IiwiZmluZEluZGV4IiwidiIsImxlZnRWaWV3cG9ydCIsInBpY2tWaWV3cG9ydFByb3BzRnJvbU1hcFN0YXRlIiwicmlnaHRWaWV3cG9ydCIsInVwZGF0ZVZpZXdwb3J0QmFzZWRPbkJvdW5kcyIsInZpZXdwb3J0Qm91bmRzIiwiZ2VvVmlld3BvcnQiLCJNQVBCT1hfVElMRV9TSVpFIiwidmlld3BvcnRCb3VuZHNQb2x5Z29uIiwiYmJveFBvbHlnb24iLCJuZXdTdGF0ZU1heEJvdW5kcyIsIm1heEJvdW5kc1BvbHlnb24iLCJoYXNNYXhCb3VuZHNDaGFuZ2VkIiwiZXZlcnkiLCJ2YWwiLCJpZHgiLCJib29sZWFuV2l0aGluIiwiX2ZpdEJvdW5kcyIsImZpdEJvdW5kcyIsInBpY2siLCJkZWZpbmVkUHJvcHMiLCJvYmoiLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdSIsIl9yZWYyIiwiX3JlZjMiLCJfc2xpY2VkVG9BcnJheTIiLCJrIiwib3JpZ2luYWxWaWV3cG9ydCIsInZpZXdwb3J0VXBkYXRlcyIsIm5ld1ZpZXdwb3J0IiwidmFsaWRhdGVCb3VuZHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVkdWNlcnMvc3JjL21hcC1zdGF0ZS11cGRhdGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vLyBDb3B5cmlnaHQgY29udHJpYnV0b3JzIHRvIHRoZSBrZXBsZXIuZ2wgcHJvamVjdFxuXG5pbXBvcnQgZ2VvVmlld3BvcnQgZnJvbSAnQG1hcGJveC9nZW8tdmlld3BvcnQnO1xuaW1wb3J0IGJvb2xlYW5XaXRoaW4gZnJvbSAnQHR1cmYvYm9vbGVhbi13aXRoaW4nO1xuaW1wb3J0IGJib3hQb2x5Z29uIGZyb20gJ0B0dXJmL2Jib3gtcG9seWdvbic7XG5pbXBvcnQge2ZpdEJvdW5kc30gZnJvbSAnQG1hdGguZ2wvd2ViLW1lcmNhdG9yJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJztcblxuaW1wb3J0IHtcbiAgZ2V0Q2VudGVyQW5kWm9vbUZyb21Cb3VuZHMsXG4gIHZhbGlkYXRlQm91bmRzLFxuICBNQVBCT1hfVElMRV9TSVpFLFxuICB2YWxpZGF0ZVZpZXdQb3J0XG59IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtNYXBTdGF0ZUFjdGlvbnMsIFJlY2VpdmVNYXBDb25maWdQYXlsb2FkLCBBY3Rpb25UeXBlc30gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7TWFwU3RhdGUsIEJvdW5kcywgVmlld3BvcnR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG4vKipcbiAqIFVwZGF0ZXJzIGZvciBgbWFwU3RhdGVgIHJlZHVjZXIuIENhbiBiZSB1c2VkIGluIHlvdXIgcm9vdCByZWR1Y2VyIHRvIGRpcmVjdGx5IG1vZGlmeSBrZXBsZXIuZ2wncyBzdGF0ZS5cbiAqIFJlYWQgbW9yZSBhYm91dCBbVXNpbmcgdXBkYXRlcnNdKC4uL2FkdmFuY2VkLXVzYWdlL3VzaW5nLXVwZGF0ZXJzLm1kKVxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7bWFwU3RhdGVVcGRhdGVyc30gZnJvbSAnQGtlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiAvLyBSb290IFJlZHVjZXJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICogIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gKiAgICAvLyBjbGljayBidXR0b24gdG8gY2xvc2Ugc2lkZSBwYW5lbFxuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcbiAqICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAuLi5zdGF0ZSxcbiAqICAgICAgICBrZXBsZXJHbDoge1xuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXG4gKiAgICAgICAgICBmb286IHtcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcbiAqICAgICAgICAgICAgIG1hcFN0YXRlOiBtYXBTdGF0ZVVwZGF0ZXJzLmZpdEJvdW5kc1VwZGF0ZXIoXG4gKiAgICAgICAgICAgICAgIG1hcFN0YXRlLCB7cGF5bG9hZDogWzEyNy4zNCwgMzEuMDksIDEyNy41NiwgMzEuNTldXX1cbiAqICAgICAgICAgICAgIClcbiAqICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH07XG4gKiAgfVxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcbiAqIH07XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgbWFwU3RhdGVVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLyoqXG4gKiBEZWZhdWx0IGluaXRpYWwgYG1hcFN0YXRlYFxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IHBpdGNoIERlZmF1bHQ6IGAwYFxuICogQHByb3BlcnR5IGJlYXJpbmcgRGVmYXVsdDogYDBgXG4gKiBAcHJvcGVydHkgbGF0aXR1ZGUgRGVmYXVsdDogYDM3Ljc1MDQzYFxuICogQHByb3BlcnR5IGxvbmdpdHVkZSBEZWZhdWx0OiBgLTEyMi4zNDY3OWBcbiAqIEBwcm9wZXJ0eSB6b29tIERlZmF1bHQ6IGA5YFxuICogQHByb3BlcnR5IGRyYWdSb3RhdGUgRGVmYXVsdDogYGZhbHNlYFxuICogQHByb3BlcnR5IHdpZHRoIERlZmF1bHQ6IGA4MDBgXG4gKiBAcHJvcGVydHkgaGVpZ2h0IERlZmF1bHQ6IGA4MDBgXG4gKiBAcHJvcGVydHkgbWluWm9vbTogYHVuZGVmaW5lZGAsXG4gKiBAcHJvcGVydHkgbWF4Wm9vbTogYHVuZGVmaW5lZGAsXG4gKiBAcHJvcGVydHkgbWF4Qm91bmRzOiBgdW5kZWZpbmVkYCxcbiAqIEBwcm9wZXJ0eSBpc1NwbGl0OiBgZmFsc2VgLFxuICogQHByb3BlcnR5IGlzVmlld3BvcnRTeW5jZWQ6IGB0cnVlYCxcbiAqIEBwcm9wZXJ0eSBpc1pvb21Mb2NrZWQ6IGBmYWxzZWAsXG4gKiBAcHJvcGVydHkgc3BsaXRNYXBWaWV3cG9ydHM6IGBbXWBcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IElOSVRJQUxfTUFQX1NUQVRFOiBNYXBTdGF0ZSA9IHtcbiAgcGl0Y2g6IDAsXG4gIGJlYXJpbmc6IDAsXG4gIGxhdGl0dWRlOiAzNy43NTA0MyxcbiAgbG9uZ2l0dWRlOiAtMTIyLjM0Njc5LFxuICB6b29tOiA5LFxuICBkcmFnUm90YXRlOiBmYWxzZSxcbiAgd2lkdGg6IDgwMCxcbiAgaGVpZ2h0OiA4MDAsXG4gIG1pblpvb206IHVuZGVmaW5lZCxcbiAgbWF4Wm9vbTogdW5kZWZpbmVkLFxuICBtYXhCb3VuZHM6IHVuZGVmaW5lZCxcbiAgaXNTcGxpdDogZmFsc2UsXG4gIGlzVmlld3BvcnRTeW5jZWQ6IHRydWUsXG4gIGlzWm9vbUxvY2tlZDogZmFsc2UsXG4gIHNwbGl0TWFwVmlld3BvcnRzOiBbXVxufTtcblxuLyogVXBkYXRlcnMgKi9cbi8qKlxuICogVXBkYXRlIG1hcCB2aWV3cG9ydFxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1hcFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBNYXBTdGF0ZSxcbiAgYWN0aW9uOiBNYXBTdGF0ZUFjdGlvbnMuVXBkYXRlTWFwVXBkYXRlckFjdGlvblxuKTogTWFwU3RhdGUgPT4ge1xuICBjb25zdCB7dmlld3BvcnQ6IGlucHV0Vmlld3BvcnQsIG1hcEluZGV4ID0gMH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgY29uc3Qgdmlld3BvcnQgPSB2YWxpZGF0ZVZpZXdQb3J0KGlucHV0Vmlld3BvcnQpO1xuXG4gIGlmIChzdGF0ZS5pc1ZpZXdwb3J0U3luY2VkKSB7XG4gICAgLy8gVGhlIGB1cGRhdGVWaWV3cG9ydGAgZnVuY3Rpb24gaXMgdHlwZWQgYXMgKFZpZXdwb3J0LCBWaWV3cG9ydCkgLT4gVmlld3BvcnQgYnV0IGhlcmUgdGhlXG4gICAgLy8gZXhwZWN0ZWQgdHlwaW5nIGlzIChNYXBTdGF0ZSwgVmlld3BvcnQpIC0+IE1hcFN0YXRlLlxuICAgIC8vIHRoaXMgY291bGQgYmUgYSBwb3RlbnRpYWwgYnVnIGFzIHdlIHRyZWF0IFZpZXdwb3J0IGFuZCBNYXBTdGF0ZSBhcyBlcXVhbCBzZWVtaW5nbHlcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFR5cGUgJ1ZpZXdwb3J0JyBpcyBtaXNzaW5nIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBmcm9tIHR5cGUgJ01hcFN0YXRlJzogaXNTcGxpdCwgaXNWaWV3cG9ydFN5bmNlZCwgaXNab29tTG9ja2VkLCBzcGxpdE1hcFZpZXdwb3J0c1xuICAgIHJldHVybiB1cGRhdGVWaWV3cG9ydChzdGF0ZSwgdmlld3BvcnQpO1xuICB9XG5cbiAgbGV0IG90aGVyVmlld3BvcnRNYXBJbmRleCA9IC0xO1xuICBjb25zdCBzcGxpdE1hcFZpZXdwb3J0cyA9IHN0YXRlLnNwbGl0TWFwVmlld3BvcnRzLm1hcCgoY3VycmVudFZpZXdwb3J0LCBpKSA9PiB7XG4gICAgaWYgKGkgPT09IG1hcEluZGV4KSB7XG4gICAgICAvLyB1cGRhdGUgdGhlIG1hdGNoaW5nIHZpZXdwb3J0IHdpdGggdGhlIG5ld1ZpZXdwb3J0IGluZm8gaW4gdGhlIGFjdGlvbiBwYXlsb2FkXG4gICAgICByZXR1cm4gdXBkYXRlVmlld3BvcnQoY3VycmVudFZpZXdwb3J0LCB2aWV3cG9ydCk7XG4gICAgfVxuXG4gICAgb3RoZXJWaWV3cG9ydE1hcEluZGV4ID0gaTtcbiAgICAvLyBtYWtlIG5vIGNoYW5nZXMgdG8gdGhlIG90aGVyIHZpZXdwb3J0ICh5ZXQpXG4gICAgcmV0dXJuIGN1cnJlbnRWaWV3cG9ydDtcbiAgfSk7XG5cbiAgLy8gbWFrZSBjb25kaXRpb25hbCB1cGRhdGVzIHRvIHRoZSBvdGhlciB2aWV3cG9ydCBub3QgbWF0Y2hpbmcgdGhpcyBwYXlsb2FkJ3MgYG1hcEluZGV4YFxuICBpZiAoTnVtYmVyLmlzRmluaXRlKG90aGVyVmlld3BvcnRNYXBJbmRleCkgJiYgb3RoZXJWaWV3cG9ydE1hcEluZGV4ID4gLTEpIHtcbiAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBhIHNwZWNpYWwgY2FzZSBhbmQgYXJlIGFsd2F5cyB1cGRhdGVkXG4gICAgc3BsaXRNYXBWaWV3cG9ydHNbb3RoZXJWaWV3cG9ydE1hcEluZGV4XSA9IHtcbiAgICAgIC4uLnNwbGl0TWFwVmlld3BvcnRzW290aGVyVmlld3BvcnRNYXBJbmRleF0sXG4gICAgICB3aWR0aDogc3BsaXRNYXBWaWV3cG9ydHNbbWFwSW5kZXhdLndpZHRoLFxuICAgICAgaGVpZ2h0OiBzcGxpdE1hcFZpZXdwb3J0c1ttYXBJbmRleF0uaGVpZ2h0XG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS5pc1pvb21Mb2NrZWQpIHtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgb3RoZXIgdmlld3BvcnQgd2l0aCB0aGUgbmV3IHpvb20gZnJvbSB0aGUgc3BsaXQgdmlld3BvcnQgdGhhdCB3YXMgdXBkYXRlZCB3aXRoIHRoaXMgcGF5bG9hZCdzIGBtYXBJbmRleGBcbiAgICAgIHNwbGl0TWFwVmlld3BvcnRzW290aGVyVmlld3BvcnRNYXBJbmRleF0gPSB7XG4gICAgICAgIC4uLnNwbGl0TWFwVmlld3BvcnRzW290aGVyVmlld3BvcnRNYXBJbmRleF0sXG4gICAgICAgIHpvb206IHNwbGl0TWFwVmlld3BvcnRzW21hcEluZGV4XS56b29tXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gdXBkYXRlIHRoZSB0b3AtbGV2ZWwgbWFwU3RhdGUgdmlld3BvcnQgd2l0aCB0aGUgbW9zdCByZWNlbnRseSBpbnRlcmFjdGVkLXdpdGggc3BsaXQgdmlld3BvcnRcbiAgICAvLyBXSFk/IHRoaXMgYXZvaWRzIHpvb20gYW5kIGJvdW5kcyBcImp1bXBpbmdcIiBkdWUgdG8gYSBcInN0YWxlXCIgdG9wLWxldmVsIG1hcFN0YXRlIHZpZXdwb3J0IHdoZW46XG4gICAgLy8gIDEuIHRvZ2dsaW5nIG9mZiB0aGUgdW5zeW5jZWQgdmlld3BvcnRzIG1vZGUgdG8gc3dpdGNoIHRvIHRoZSBzeW5jZWQgdmlld3BvcnRzIG1vZGVcbiAgICAvLyAgMi4gdG9nZ2xpbmcgb24gdGhlIHpvb20gbG9jayBkdXJpbmcgYW4gdW5zeW5jZWQgdmlld3BvcnRzIG1vZGVcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5zcGxpdE1hcFZpZXdwb3J0c1ttYXBJbmRleF0sXG4gICAgLy8gdXBkYXRlIHRoZSBtYXBTdGF0ZSB3aXRoIHRoZSBuZXcgYXJyYXkgb2Ygc3BsaXQgdmlld3BvcnRzXG4gICAgc3BsaXRNYXBWaWV3cG9ydHNcbiAgfTtcbn07XG5cbi8qKlxuICogRml0IG1hcCB2aWV3cG9ydCB0byBib3VuZHNcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBmaXRCb3VuZHNVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3RhdGUsXG4gIGFjdGlvbjogTWFwU3RhdGVBY3Rpb25zLkZpdEJvdW5kc1VwZGF0ZXJBY3Rpb25cbik6IE1hcFN0YXRlID0+IHtcbiAgY29uc3QgY2VudGVyQW5kWm9vbSA9IGdldENlbnRlckFuZFpvb21Gcm9tQm91bmRzKGFjdGlvbi5wYXlsb2FkLCB7XG4gICAgd2lkdGg6IHN0YXRlLndpZHRoLFxuICAgIGhlaWdodDogc3RhdGUuaGVpZ2h0XG4gIH0pO1xuICBpZiAoIWNlbnRlckFuZFpvb20pIHtcbiAgICAvLyBib3VuZHMgaXMgaW52YWxpZFxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxhdGl0dWRlOiBjZW50ZXJBbmRab29tLmNlbnRlclsxXSxcbiAgICBsb25naXR1ZGU6IGNlbnRlckFuZFpvb20uY2VudGVyWzBdLFxuICAgIC8vIEZvciBtYXJnaW5hbCBvciBpbnZhbGlkIGJvdW5kcywgem9vbSBtYXkgYmUgTmFOLiBNYWtlIHN1cmUgdG8gcHJvdmlkZSBhIHZhbGlkIHZhbHVlIGluIG9yZGVyXG4gICAgLy8gdG8gYXZvaWQgY29ycnVwdCBzdGF0ZSBhbmQgcG90ZW50aWFsIGNyYXNoZXMgYXMgem9vbSBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlclxuICAgIC4uLihOdW1iZXIuaXNGaW5pdGUoY2VudGVyQW5kWm9vbS56b29tKSA/IHt6b29tOiBjZW50ZXJBbmRab29tLnpvb219IDoge30pXG4gIH07XG5cbiAgLy8gaWYgZml0dGluZyB0byBib3VuZHMgd2hpbGUgc3BsaXQgYW5kIHVuc3luY2VkXG4gIC8vIGNvcHkgdGhlIG5ldyBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBhbmQgem9vbSB2YWx1ZXMgdG8gZWFjaCBzcGxpdCB2aWV3cG9ydFxuICBpZiAobmV3U3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMubGVuZ3RoKSB7XG4gICAgbmV3U3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMgPSBuZXdTdGF0ZS5zcGxpdE1hcFZpZXdwb3J0cy5tYXAoY3VycmVudFZpZXdwb3J0ID0+ICh7XG4gICAgICAuLi5jdXJyZW50Vmlld3BvcnQsXG4gICAgICBsYXRpdHVkZTogbmV3U3RhdGUubGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGU6IG5ld1N0YXRlLmxvbmdpdHVkZSxcbiAgICAgIHpvb206IG5ld1N0YXRlLnpvb21cbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBiZXR3ZWVuIDNkIGFuZCAyZCBtYXAuXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlUGVyc3BlY3RpdmVVcGRhdGVyID0gKHN0YXRlOiBNYXBTdGF0ZSk6IE1hcFN0YXRlID0+IHtcbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ue1xuICAgICAgcGl0Y2g6IHN0YXRlLmRyYWdSb3RhdGUgPyAwIDogNTAsXG4gICAgICBiZWFyaW5nOiBzdGF0ZS5kcmFnUm90YXRlID8gMCA6IDI0XG4gICAgfSxcbiAgICBkcmFnUm90YXRlOiAhc3RhdGUuZHJhZ1JvdGF0ZVxuICB9O1xuXG4gIC8vIGlmIHRvZ2dsaW5nIDNkIGFuZCAyZCB3aGlsZSBzcGxpdCBhbmQgdW5zeW5jZWRcbiAgLy8gY29weSB0aGUgbmV3IHBpdGNoLCBiZWFyaW5nLCBhbmQgZHJhZ1JvdGF0ZSB2YWx1ZXMgdG8gZWFjaCBzcGxpdCB2aWV3cG9ydFxuICBpZiAobmV3U3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMubGVuZ3RoKSB7XG4gICAgbmV3U3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMgPSBuZXdTdGF0ZS5zcGxpdE1hcFZpZXdwb3J0cy5tYXAoY3VycmVudFZpZXdwb3J0ID0+ICh7XG4gICAgICAuLi5jdXJyZW50Vmlld3BvcnQsXG4gICAgICBwaXRjaDogbmV3U3RhdGUucGl0Y2gsXG4gICAgICBiZWFyaW5nOiBuZXdTdGF0ZS5iZWFyaW5nLFxuICAgICAgZHJhZ1JvdGF0ZTogbmV3U3RhdGUuZHJhZ1JvdGF0ZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn07XG5cbi8qKlxuICogcmVzZXQgbWFwU3RhdGUgdG8gaW5pdGlhbCBTdGF0ZVxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnVXBkYXRlciA9IChzdGF0ZTogTWFwU3RhdGUpOiBNYXBTdGF0ZSA9PiAoe1xuICAuLi5JTklUSUFMX01BUF9TVEFURSxcbiAgLi4uc3RhdGUuaW5pdGlhbFN0YXRlLFxuICBpbml0aWFsU3RhdGU6IHN0YXRlLmluaXRpYWxTdGF0ZVxufSk7XG5cbi8vIGNvbnNpZGVyIGNhc2Ugd2hlcmUgeW91IGhhdmUgYSBzcGxpdCBtYXAgYW5kIHVzZXIgd2FudHMgdG8gcmVzZXRcbi8qKlxuICogVXBkYXRlIGBtYXBTdGF0ZWAgdG8gcHJvcGFnYXRlIGEgbmV3IGNvbmZpZ1xuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3RhdGUsXG4gIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcGF5bG9hZDoge2NvbmZpZyA9IHt9LCBvcHRpb25zID0ge30sIGJvdW5kcyA9IG51bGx9XG4gIH06IHtcbiAgICB0eXBlPzogdHlwZW9mIEFjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJRztcbiAgICBwYXlsb2FkOiBSZWNlaXZlTWFwQ29uZmlnUGF5bG9hZDtcbiAgfVxuKTogTWFwU3RhdGUgPT4ge1xuICAvKipcbiAgICogQHR5cGUge1BhcnRpYWw8TWFwU3RhdGU+fVxuICAgKi9cbiAgY29uc3QgbWFwU3RhdGUgPSAoY29uZmlnIHx8IHt9KS5tYXBTdGF0ZSB8fCB7fTtcbiAgLy8gbWVyZ2VkIHJlY2VpdmVkIG1hcFN0YXRlIHdpdGggcHJldmlvdXMgc3RhdGVcbiAgLy8gc3RhdGUgYWxzbyBtYXkgaW5jbHVkZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIG5ldyB0byBhbiBleGlzdGluZywgc2F2ZWQgcHJvamVjdCdzIG1hcFN0YXRlXG5cbiAgbGV0IG1lcmdlZFN0YXRlID0gZGVlcG1lcmdlPE1hcFN0YXRlPihzdGF0ZSwgbWFwU3RhdGUsIHtcbiAgICAvLyBub3RlOiBkZWVwbWVyZ2UgYnkgZGVmYXVsdCB3aWxsIG1lcmdlIGFycmF5cyBieSBjb25jYXRlbmF0aW5nIHRoZW1cbiAgICAvLyBidXQgd2UgbmVlZCB0byBvdmVyd3JpdGUgZGVzdGluYXRpb24gYXJyYXlzIHdpdGggc291cmNlIGFycmF5cywgaWYgcHJlc2VudFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9UZWhTaHJpa2UvZGVlcG1lcmdlI2FycmF5bWVyZ2UtZXhhbXBsZS1vdmVyd3JpdGUtdGFyZ2V0LWFycmF5XG4gICAgYXJyYXlNZXJnZTogKF9kZXN0aW5hdGlvbkFycmF5LCBzb3VyY2VBcnJheSkgPT4gc291cmNlQXJyYXlcbiAgfSk7XG5cbiAgLy8gaWYgY2VudGVyIG1hcFxuICAvLyBjZW50ZXIgbWFwIHdpbGwgb3ZlcnJpZGUgbWFwU3RhdGUgY29uZmlnXG4gIGlmIChvcHRpb25zLmNlbnRlck1hcCAmJiBib3VuZHMpIHtcbiAgICBtZXJnZWRTdGF0ZSA9IGZpdEJvdW5kc1VwZGF0ZXIobWVyZ2VkU3RhdGUsIHtcbiAgICAgIHBheWxvYWQ6IGJvdW5kc1xuICAgIH0pO1xuICB9XG5cbiAgLy8gbWFrZSBzdXJlIHdlIHZhbGlkYXRlIG1hcCBzdGF0ZSBiZWZvcmUgd2UgbWVyZ2VcbiAgbWVyZ2VkU3RhdGUgPSB2YWxpZGF0ZVZpZXdQb3J0KG1lcmdlZFN0YXRlKTtcblxuICByZXR1cm4ge1xuICAgIC4uLm1lcmdlZFN0YXRlLFxuICAgIC8vIHVwZGF0ZSB3aWR0aCBpZiBgaXNTcGxpdGAgaGFzIGNoYW5nZWRcbiAgICAuLi5nZXRNYXBEaW1Gb3JTcGxpdE1hcChtZXJnZWRTdGF0ZS5pc1NwbGl0LCBzdGF0ZSlcbiAgfTtcbn07XG5cbi8qKlxuICogVG9nZ2xlIGJldHdlZW4gb25lIG9yIHNwbGl0IG1hcHNcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgPSAoc3RhdGU6IE1hcFN0YXRlKTogTWFwU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIC4uLmdldE1hcERpbUZvclNwbGl0TWFwKCFzdGF0ZS5pc1NwbGl0LCBzdGF0ZSksXG4gIGlzU3BsaXQ6ICFzdGF0ZS5pc1NwbGl0LFxuICAuLi4oIXN0YXRlLmlzU3BsaXQgPT09IGZhbHNlXG4gICAgPyB7XG4gICAgICAgIC8vIGlmIHRvZ2dsaW5nIHRvIG5vIGxvbmdlciBzcGxpdCAoc2luZ2xlIG1vZGUpIHRoZW4gcmVzZXQgYSBmZXcgcHJvcGVydGllc1xuICAgICAgICBpc1ZpZXdwb3J0U3luY2VkOiB0cnVlLFxuICAgICAgICBpc1pvb21Mb2NrZWQ6IGZhbHNlLFxuICAgICAgICBzcGxpdE1hcFZpZXdwb3J0czogW11cbiAgICAgIH1cbiAgICA6IHt9KVxufSk7XG5cbi8qKlxuICogVG9nZ2xlIGJldHdlZW4gbG9ja2VkIGFuZCB1bmxvY2tlZCBzcGxpdCB2aWV3cG9ydHNcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFZpZXdwb3J0VXBkYXRlciA9IChcbiAgc3RhdGU6IE1hcFN0YXRlLFxuICBhY3Rpb246IE1hcFN0YXRlQWN0aW9ucy5Ub2dnbGVTcGxpdE1hcFZpZXdwb3J0VXBkYXRlckFjdGlvblxuKSA9PiB7XG4gIC8vIG5ldyBtYXAgc3RhdGUgaW1tZWRpYXRlbHkgZ2V0cyB0aGUgbmV3LCBvcHRpb25hbCBwYXlsb2FkIHZhbHVlcyBmb3IgaXNWaWV3cG9ydFN5bmNlZCBhbmQvb3IgaXNab29tTG9ja2VkXG4gIGNvbnN0IG5ld01hcFN0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLihhY3Rpb24ucGF5bG9hZCB8fCB7fSlcbiAgfTtcblxuICBpZiAobmV3TWFwU3RhdGUuaXNWaWV3cG9ydFN5bmNlZCkge1xuICAgIC8vIHN3aXRjaGluZyBmcm9tIHVuc3luY2VkIHRvIHN5bmNlZCB2aWV3cG9ydHNcbiAgICBuZXdNYXBTdGF0ZS5zcGxpdE1hcFZpZXdwb3J0cyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIC8vIHN3aXRjaGluZyBmcm9tIHN5bmNlZCB0byB1bnN5bmNlZCB2aWV3cG9ydHNcbiAgICAvLyBvciBhbHJlYWR5IGluIHVuc3luY2VkIG1vZGUgYW5kIHRvZ2dsaW5nIGxvY2tlZCB6b29tXG5cbiAgICBpZiAoc3RhdGUuaXNab29tTG9ja2VkICYmICFuZXdNYXBTdGF0ZS5pc1pvb21Mb2NrZWQpIHtcbiAgICAgIC8vIHN3aXRjaGluZyBvZmYgbG9ja2VkIHpvb20gd2hpbGUgdW5zeW5jZWRcbiAgICAgIC8vIGRvbid0IGNvcHkgdGhlIG1hcFN0YXRlcyB0byBsZWZ0IGFuZCByaWdodCB2aWV3cG9ydHMgYmVjYXVzZSB0aGVyZSB3aWxsIGJlIHpvb20gXCJqdW1waW5nXCJcbiAgICAgIHJldHVybiBuZXdNYXBTdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLmlzWm9vbUxvY2tlZCAmJiBuZXdNYXBTdGF0ZS5pc1pvb21Mb2NrZWQpIHtcbiAgICAgIC8vIHN3aXRjaGluZyBvbiBsb2NrZWQgem9vbSB3aGlsZSB1bnN5bmNlZFxuICAgICAgLy8gb25seSBjb3B5IHpvb20gdmlld3BvcnQgcHJvcGVydHkgZnJvbSB0aGUgbW9zdCByZWNlbnRseSBpbnRlcmFjdGVkLXdpdGggdmlld3BvcnQgdG8gdGhlIG90aGVyXG4gICAgICAvLyBUT0RPOiBkbyB3ZSB3YW50IHRvIGNoZWNrIGZvciBhIG1hdGNoIGEgZGlmZmVyZW50IHdheSwgc3VjaCBhcyBhIGNvbWJvIG9mIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgP1xuICAgICAgY29uc3QgbGFzdFVwZGF0ZWRWaWV3cG9ydEluZGV4ID0gbmV3TWFwU3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMuZmluZEluZGV4KFxuICAgICAgICB2ID0+IG5ld01hcFN0YXRlLnpvb20gPT09IHYuem9vbVxuICAgICAgKTtcblxuICAgICAgY29uc3Qgc3BsaXRNYXBWaWV3cG9ydHMgPSBuZXdNYXBTdGF0ZS5zcGxpdE1hcFZpZXdwb3J0cy5tYXAoKGN1cnJlbnRWaWV3cG9ydCwgaSkgPT4ge1xuICAgICAgICBpZiAoaSA9PT0gbGFzdFVwZGF0ZWRWaWV3cG9ydEluZGV4KSB7XG4gICAgICAgICAgLy8gbm8gem9vbSB0byBtb2RpZnkgaGVyZVxuICAgICAgICAgIHJldHVybiBjdXJyZW50Vmlld3BvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIG90aGVyIHZpZXdwb3J0IGdldHMgdGhlIG1vc3QgcmVjZW50bHkgaW50ZXJhY3RlZC13aXRoIHZpZXdwb3J0J3Mgem9vbVxuICAgICAgICAvLyBXSFk/IHRoZSB2aWV3cG9ydCB0aGUgdXNlciB3YXMgbGFzdCBpbnRlcmFjdGluZyB3aXRoIHdpbGwgc2V0IHpvb20gYWNyb3NzIHRoZSBib2FyZCBmb3Igc21vb3RoIFVYXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY3VycmVudFZpZXdwb3J0LFxuICAgICAgICAgIHpvb206IG5ld01hcFN0YXRlLnNwbGl0TWFwVmlld3BvcnRzW2xhc3RVcGRhdGVkVmlld3BvcnRJbmRleF0uem9vbVxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIG5ld01hcFN0YXRlLnNwbGl0TWFwVmlld3BvcnRzID0gc3BsaXRNYXBWaWV3cG9ydHM7XG5cbiAgICAgIHJldHVybiBuZXdNYXBTdGF0ZTtcbiAgICB9XG5cbiAgICAvLyBpZiBjdXJyZW50IHZpZXdwb3J0IGlzIHN5bmNlZCwgYW5kIHdlIGFyZSB1bnN5bmNpbmcgaXRcbiAgICAvLyBvciBhbHJlYWR5IGluIHVuc3luY2VkIG1vZGUgYW5kIE5PVCB0b2dnbGluZyBsb2NrZWQgem9vbVxuICAgIC8vIG1ha2UgYSBmcmVzaCBjb3B5IG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IG9iamVjdCwgYXNzaWduIGl0IHRvIHNwbGl0TWFwVmlld3BvcnRzW11cbiAgICAvLyBwaWNrVmlld3BvcnRQcm9wc0Zyb21NYXBTdGF0ZSBpcyBjYWxsZWQgdHdpY2UgdG8gYXZvaWQgbWVtb3J5IGFsbG9jYXRpb24gY29uZmxpY3RzXG4gICAgY29uc3QgbGVmdFZpZXdwb3J0ID0gcGlja1ZpZXdwb3J0UHJvcHNGcm9tTWFwU3RhdGUobmV3TWFwU3RhdGUpO1xuICAgIGNvbnN0IHJpZ2h0Vmlld3BvcnQgPSBwaWNrVmlld3BvcnRQcm9wc0Zyb21NYXBTdGF0ZShuZXdNYXBTdGF0ZSk7XG4gICAgbmV3TWFwU3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMgPSBbbGVmdFZpZXdwb3J0LCByaWdodFZpZXdwb3J0XTtcbiAgfVxuXG4gIC8vIHJldHVybiBuZXcgc3RhdGVcbiAgcmV0dXJuIG5ld01hcFN0YXRlO1xufTtcblxuLy8gSGVscGVyc1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcERpbUZvclNwbGl0TWFwKGlzU3BsaXQsIHN0YXRlKSB7XG4gIC8vIGNhc2VzOlxuICAvLyAxLiBzdGF0ZSBzcGxpdDogdHJ1ZSAtIGlzU3BsaXQ6IHRydWVcbiAgLy8gZG8gbm90aGluZ1xuICAvLyAyLiBzdGF0ZSBzcGxpdDogZmFsc2UgLSBpc1NwbGl0OiBmYWxzZVxuICAvLyBkbyBub3RoaW5nXG4gIGlmIChzdGF0ZS5pc1NwbGl0ID09PSBpc1NwbGl0KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3Qgd2lkdGggPVxuICAgIHN0YXRlLmlzU3BsaXQgJiYgIWlzU3BsaXRcbiAgICAgID8gLy8gMy4gc3RhdGUgc3BsaXQ6IHRydWUgLSBpc1NwbGl0OiBmYWxzZVxuICAgICAgICAvLyBkb3VibGUgd2lkdGhcbiAgICAgICAgc3RhdGUud2lkdGggKiAyXG4gICAgICA6IC8vIDQuIHN0YXRlIHNwbGl0OiBmYWxzZSAtIGlzU3BsaXQ6IHRydWVcbiAgICAgICAgLy8gc3BsaXQgd2lkdGhcbiAgICAgICAgc3RhdGUud2lkdGggLyAyO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGhcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVmlld3BvcnRCYXNlZE9uQm91bmRzKHN0YXRlOiBNYXBTdGF0ZSwgbmV3TWFwU3RhdGU6IE1hcFN0YXRlKSB7XG4gIC8vIEdldCB0aGUgbmV3IHZpZXdwb3J0IGJvdW5kc1xuICBjb25zdCB2aWV3cG9ydEJvdW5kcyA9IGdlb1ZpZXdwb3J0LmJvdW5kcyhcbiAgICBbbmV3TWFwU3RhdGUubG9uZ2l0dWRlLCBuZXdNYXBTdGF0ZS5sYXRpdHVkZV0sXG4gICAgbmV3TWFwU3RhdGUuem9vbSxcbiAgICBbbmV3TWFwU3RhdGUud2lkdGgsIG5ld01hcFN0YXRlLmhlaWdodF0sXG4gICAgTUFQQk9YX1RJTEVfU0laRVxuICApO1xuICAvLyBHZW5lcmF0ZSB0dXJmIFBvbHlnb24gZnJvbSBib3VuZHMgZm9yIGNvbXBhcmlzb25cbiAgY29uc3Qgdmlld3BvcnRCb3VuZHNQb2x5Z29uID0gYmJveFBvbHlnb24odmlld3BvcnRCb3VuZHMpO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IG5ld1N0YXRlTWF4Qm91bmRzOiBCb3VuZHMgPSBuZXdNYXBTdGF0ZS5tYXhCb3VuZHM7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgbWF4Qm91bmRzUG9seWdvbiA9IGJib3hQb2x5Z29uKG5ld1N0YXRlTWF4Qm91bmRzKTtcblxuICAvLyBJZiBtYXhCb3VuZHMgaGFzIGNoYW5nZWQgcmVzZXQgdGhlIHZpZXdwb3J0IHRvIHNuYXAgdG8gYm91bmRzXG4gIGNvbnN0IGhhc01heEJvdW5kc0NoYW5nZWQgPVxuICAgICFzdGF0ZS5tYXhCb3VuZHMgfHwgIXN0YXRlLm1heEJvdW5kcy5ldmVyeSgodmFsLCBpZHgpID0+IHZhbCA9PT0gbmV3U3RhdGVNYXhCb3VuZHNbaWR4XSk7XG4gIGlmIChoYXNNYXhCb3VuZHNDaGFuZ2VkKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIG5ld01hcFN0YXRlIHZpZXdwb3J0IGlzIHdpdGhpbiBtYXhCb3VuZHNcbiAgICBpZiAoIWJvb2xlYW5XaXRoaW4odmlld3BvcnRCb3VuZHNQb2x5Z29uLCBtYXhCb3VuZHNQb2x5Z29uKSkge1xuICAgICAgY29uc3Qge2xhdGl0dWRlLCBsb25naXR1ZGUsIHpvb219ID0gZml0Qm91bmRzKHtcbiAgICAgICAgd2lkdGg6IG5ld01hcFN0YXRlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG5ld01hcFN0YXRlLmhlaWdodCxcbiAgICAgICAgYm91bmRzOiBbXG4gICAgICAgICAgW25ld1N0YXRlTWF4Qm91bmRzWzBdLCBuZXdTdGF0ZU1heEJvdW5kc1sxXV0sXG4gICAgICAgICAgW25ld1N0YXRlTWF4Qm91bmRzWzJdLCBuZXdTdGF0ZU1heEJvdW5kc1szXV1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICAgIG5ld01hcFN0YXRlID0ge1xuICAgICAgICAuLi5uZXdNYXBTdGF0ZSxcbiAgICAgICAgbGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZSxcbiAgICAgICAgLy8gRm9yIG1hcmdpbmFsIG9yIGludmFsaWQgYm91bmRzLCB6b29tIG1heSBiZSBOYU4uIE1ha2Ugc3VyZSB0byBwcm92aWRlIGEgdmFsaWQgdmFsdWUgaW4gb3JkZXJcbiAgICAgICAgLy8gdG8gYXZvaWQgY29ycnVwdCBzdGF0ZSBhbmQgcG90ZW50aWFsIGNyYXNoZXMgYXMgem9vbSBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlclxuICAgICAgICAuLi4oTnVtYmVyLmlzRmluaXRlKHpvb20pID8ge3pvb219IDoge30pXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbmV3TWFwU3RhdGU7XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgbmV3TWFwU3RhdGUgdmlld3BvcnQgaXMgd2l0aGluIG1heEJvdW5kc1xuICBpZiAoIWJvb2xlYW5XaXRoaW4odmlld3BvcnRCb3VuZHNQb2x5Z29uLCBtYXhCb3VuZHNQb2x5Z29uKSkge1xuICAgIG5ld01hcFN0YXRlID0ge1xuICAgICAgLi4ubmV3TWFwU3RhdGUsXG4gICAgICBsb25naXR1ZGU6IHN0YXRlLmxvbmdpdHVkZSxcbiAgICAgIGxhdGl0dWRlOiBzdGF0ZS5sYXRpdHVkZSxcbiAgICAgIHpvb206IHN0YXRlLnpvb21cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG5ld01hcFN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGlja1ZpZXdwb3J0UHJvcHNGcm9tTWFwU3RhdGUoc3RhdGU6IE1hcFN0YXRlKTogVmlld3BvcnQge1xuICByZXR1cm4gcGljayhzdGF0ZSwgW1xuICAgICd3aWR0aCcsXG4gICAgJ2hlaWdodCcsXG4gICAgJ3pvb20nLFxuICAgICdwaXRjaCcsXG4gICAgJ2JlYXJpbmcnLFxuICAgICdsYXRpdHVkZScsXG4gICAgJ2xvbmdpdHVkZScsXG4gICAgJ2RyYWdSb3RhdGUnLFxuICAgICdtaW5ab29tJyxcbiAgICAnbWF4Wm9vbScsXG4gICAgJ21heEJvdW5kcydcbiAgXSk7XG59XG5cbi8qKiBTZWxlY3QgaXRlbXMgZnJvbSBvYmplY3Qgd2hvc2UgdmFsdWUgaXMgbm90IHVuZGVmaW5lZCAqL1xuY29uc3QgZGVmaW5lZFByb3BzID0gb2JqID0+XG4gIE9iamVjdC5lbnRyaWVzKG9iaikucmVkdWNlKFxuICAgIChhY2N1LCBbaywgdl0pID0+ICh7Li4uYWNjdSwgLi4uKHYgIT09IHVuZGVmaW5lZCA/IHtba106IHZ9IDoge30pfSksXG4gICAge31cbiAgKTtcblxuZnVuY3Rpb24gdXBkYXRlVmlld3BvcnQob3JpZ2luYWxWaWV3cG9ydDogVmlld3BvcnQsIHZpZXdwb3J0VXBkYXRlczogVmlld3BvcnQpOiBWaWV3cG9ydCB7XG4gIGxldCBuZXdWaWV3cG9ydCA9IHtcbiAgICAuLi5vcmlnaW5hbFZpZXdwb3J0LFxuICAgIC4uLihkZWZpbmVkUHJvcHModmlld3BvcnRVcGRhdGVzKSB8fCB7fSlcbiAgfTtcblxuICAvLyBNYWtlIHN1cmUgem9vbSBsZXZlbCBkb2Vzbid0IGdvIGJlbGxvdyBtaW5ab29tIGlmIGRlZmluZWRcbiAgaWYgKG5ld1ZpZXdwb3J0Lm1pblpvb20gJiYgbmV3Vmlld3BvcnQuem9vbSAmJiBuZXdWaWV3cG9ydC56b29tIDwgbmV3Vmlld3BvcnQubWluWm9vbSkge1xuICAgIG5ld1ZpZXdwb3J0Lnpvb20gPSBuZXdWaWV3cG9ydC5taW5ab29tO1xuICB9XG4gIC8vIE1ha2Ugc3VyZSB6b29tIGxldmVsIGRvZXNuJ3QgZ28gYWJvdmUgbWF4Wm9vbSBpZiBkZWZpbmVkXG4gIGlmIChuZXdWaWV3cG9ydC5tYXhab29tICYmIG5ld1ZpZXdwb3J0Lnpvb20gJiYgbmV3Vmlld3BvcnQuem9vbSA+IG5ld1ZpZXdwb3J0Lm1heFpvb20pIHtcbiAgICBuZXdWaWV3cG9ydC56b29tID0gbmV3Vmlld3BvcnQubWF4Wm9vbTtcbiAgfVxuICAvLyBMaW1pdCB2aWV3cG9ydCB1cGRhdGUgYmFzZWQgb24gbWF4Qm91bmRzXG4gIGlmIChuZXdWaWV3cG9ydC5tYXhCb3VuZHMgJiYgdmFsaWRhdGVCb3VuZHMobmV3Vmlld3BvcnQubWF4Qm91bmRzKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVHlwZSAnVmlld3BvcnQnIGlzIG1pc3NpbmcgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGZyb20gdHlwZSAnTWFwU3RhdGUnOiBpc1NwbGl0LCBpc1ZpZXdwb3J0U3luY2VkLCBpc1pvb21Mb2NrZWQsIHNwbGl0TWFwVmlld3BvcnRzXG4gICAgbmV3Vmlld3BvcnQgPSB1cGRhdGVWaWV3cG9ydEJhc2VkT25Cb3VuZHMob3JpZ2luYWxWaWV3cG9ydCwgbmV3Vmlld3BvcnQpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZpZXdwb3J0O1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFBQSxZQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxjQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxZQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRyxZQUFBLEdBQUFILE9BQUE7QUFDQSxJQUFBSSxVQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSyxLQUFBLEdBQUFOLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBTSxJQUFBLEdBQUFOLE9BQUE7QUFLMEIsU0FBQU8sUUFBQUMsQ0FBQSxFQUFBQyxDQUFBLFFBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxJQUFBLENBQUFKLENBQUEsT0FBQUcsTUFBQSxDQUFBRSxxQkFBQSxRQUFBQyxDQUFBLEdBQUFILE1BQUEsQ0FBQUUscUJBQUEsQ0FBQUwsQ0FBQSxHQUFBQyxDQUFBLEtBQUFLLENBQUEsR0FBQUEsQ0FBQSxDQUFBQyxNQUFBLFdBQUFOLENBQUEsV0FBQUUsTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixDQUFBLEVBQUFDLENBQUEsRUFBQVEsVUFBQSxPQUFBUCxDQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxDQUFBLEVBQUFJLENBQUEsWUFBQUosQ0FBQTtBQUFBLFNBQUFVLGNBQUFaLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFZLFNBQUEsQ0FBQUMsTUFBQSxFQUFBYixDQUFBLFVBQUFDLENB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