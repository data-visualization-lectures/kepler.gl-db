// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import cloneDeep from 'lodash/cloneDeep';
import {SplitMap, SplitMapLayers} from '@kepler.gl/types';

type SplitMapLayer = {
  id: string;
  config: {
    isVisible: boolean;
  };
};

type SplitMapLayerInput = SplitMapLayer | SplitMapLayer[];

function normalizeLayerInput(layers: SplitMapLayerInput): SplitMapLayer[] {
  return Array.isArray(layers) ? layers : [layers];
}

function getNewVisibleLayerEntries(
  layers: SplitMapLayer[],
  currentLayers: SplitMapLayers
): SplitMapLayers {
  return layers.reduce<SplitMapLayers>(
    (accu, newLayer) =>
      newLayer.id in currentLayers || !newLayer.config.isVisible
        ? accu
        : {
            ...accu,
            [newLayer.id]: newLayer.config.isVisible
          },
    {}
  );
}

/**
 * Add new layers to both existing maps
 * @param {Object} splitMaps
 * @param {Object|Array<Object>} layers
 * @returns {Array<Object>} new splitMaps
 */
export function addNewLayersToSplitMap(
  splitMaps: SplitMap[],
  layers: SplitMapLayerInput
): SplitMap[] {
  const newLayers = normalizeLayerInput(layers);

  if (!splitMaps.length || !newLayers.length) {
    return splitMaps;
  }

  // add new layer to both maps,
  // don't override, if layer.id is already in splitMaps
  return splitMaps.map(settings => ({
    ...settings,
    layers: {
      ...settings.layers,
      ...getNewVisibleLayerEntries(newLayers, settings.layers)
    }
  }));
}

/**
 * Remove an existing layer from split map settings
 * @param {Object} splitMaps
 * @param {Object} layer
 * @returns {Object} Maps of custom layer objects
 */
export function removeLayerFromSplitMaps(
  splitMaps: SplitMap[],
  layer: Pick<SplitMapLayer, 'id'>
): SplitMap[] {
  if (!splitMaps.length) {
    return splitMaps;
  }
  return splitMaps.map(settings => {
    const newLayers = {...settings.layers};
    delete newLayers[layer.id];

    return {
      ...settings,
      layers: newLayers
    };
  });
}

/**
 * This method will compute the default maps layer settings
 * based on the current layers visibility
 * @param {Array<Object>} layers
 * @returns {Array<Object>} layer visibility for each panel
 */
export function getInitialMapLayersForSplitMap(layers: SplitMapLayer[]): SplitMapLayers {
  return layers
    .filter(layer => layer.config.isVisible)
    .reduce<SplitMapLayers>(
      (newLayers, currentLayer) => ({
        ...newLayers,
        [currentLayer.id]: currentLayer.config.isVisible
      }),
      {}
    );
}

/**
 * This method will get default splitMap settings based on existing layers
 * @param {Array<Object>} layers
 * @param {Object} options
 * @returns {Array<Object>} split map settings
 */
export function computeSplitMapLayers(
  layers: SplitMapLayer[],
  options?: {duplicate: boolean}
): SplitMap[] {
  const mapLayers = getInitialMapLayersForSplitMap(layers);
  const {duplicate} = options || {};
  // show all visible layers in left map, leave right map empty
  return [{layers: mapLayers}, {layers: duplicate ? cloneDeep(mapLayers) : {}}];
}
