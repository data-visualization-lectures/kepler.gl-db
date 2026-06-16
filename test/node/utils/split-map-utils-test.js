// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import test from 'tape';

import {
  addNewLayersToSplitMap,
  computeSplitMapLayers,
  getInitialMapLayersForSplitMap,
  removeLayerFromSplitMaps
} from '@kepler.gl/utils';

const createLayer = (id, isVisible) => ({
  id,
  config: {
    isVisible
  }
});

test('splitMapUtils -> addNewLayersToSplitMap', t => {
  const splitMaps = [
    {
      id: 'left',
      layers: {
        existing: false
      }
    },
    {
      id: 'right',
      layers: {
        existing: true
      }
    }
  ];
  const nextSplitMaps = addNewLayersToSplitMap(splitMaps, [
    createLayer('visible', true),
    createLayer('hidden', false),
    createLayer('existing', true)
  ]);

  t.deepEqual(
    nextSplitMaps,
    [
      {
        id: 'left',
        layers: {
          existing: false,
          visible: true
        }
      },
      {
        id: 'right',
        layers: {
          existing: true,
          visible: true
        }
      }
    ],
    'should add visible new layers without overriding existing layer visibility'
  );
  t.deepEqual(
    splitMaps,
    [
      {
        id: 'left',
        layers: {
          existing: false
        }
      },
      {
        id: 'right',
        layers: {
          existing: true
        }
      }
    ],
    'should not mutate previous split maps'
  );

  const emptySplitMaps = [];
  t.equal(
    addNewLayersToSplitMap(emptySplitMaps, createLayer('visible', true)),
    emptySplitMaps,
    'should return the same split maps when there are no maps'
  );

  t.end();
});

test('splitMapUtils -> removeLayerFromSplitMaps', t => {
  const splitMaps = [
    {
      id: 'left',
      layers: {
        a: true,
        b: false
      }
    },
    {
      id: 'right',
      layers: {
        a: false,
        b: true
      }
    }
  ];
  const nextSplitMaps = removeLayerFromSplitMaps(splitMaps, {id: 'a'});

  t.deepEqual(
    nextSplitMaps,
    [
      {
        id: 'left',
        layers: {
          b: false
        }
      },
      {
        id: 'right',
        layers: {
          b: true
        }
      }
    ],
    'should remove the layer from every split map'
  );
  t.deepEqual(
    splitMaps[0].layers,
    {
      a: true,
      b: false
    },
    'should not mutate previous split map layers'
  );

  const emptySplitMaps = [];
  t.equal(
    removeLayerFromSplitMaps(emptySplitMaps, {id: 'a'}),
    emptySplitMaps,
    'should return the same split maps when there are no maps'
  );

  t.end();
});

test('splitMapUtils -> getInitialMapLayersForSplitMap', t => {
  const layers = [createLayer('visible', true), createLayer('hidden', false)];

  t.deepEqual(
    getInitialMapLayersForSplitMap(layers),
    {
      visible: true
    },
    'should include only globally visible layers'
  );

  t.end();
});

test('splitMapUtils -> computeSplitMapLayers', t => {
  const layers = [
    createLayer('visible-a', true),
    createLayer('hidden', false),
    createLayer('visible-b', true)
  ];

  t.deepEqual(
    computeSplitMapLayers(layers),
    [
      {
        layers: {
          'visible-a': true,
          'visible-b': true
        }
      },
      {
        layers: {}
      }
    ],
    'should put visible layers in the first map by default'
  );

  const duplicated = computeSplitMapLayers(layers, {duplicate: true});
  t.deepEqual(
    duplicated,
    [
      {
        layers: {
          'visible-a': true,
          'visible-b': true
        }
      },
      {
        layers: {
          'visible-a': true,
          'visible-b': true
        }
      }
    ],
    'should duplicate visible layers when requested'
  );
  t.notEqual(
    duplicated[0].layers,
    duplicated[1].layers,
    'should not reuse the same layer visibility object for duplicated maps'
  );

  t.end();
});
