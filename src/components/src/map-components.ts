// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import type {ElementType} from 'react';
import MapboxMap from '@vis.gl/react-mapbox';
import MapLibreMap from 'react-map-gl/maplibre';

import {MAP_LIB_OPTIONS, BaseMapLibraryType} from '@kepler.gl/constants';

export const getDefaultMapComponent = (baseMapLibrary: BaseMapLibraryType): ElementType =>
  baseMapLibrary === MAP_LIB_OPTIONS.MAPBOX ? MapboxMap : MapLibreMap;
