// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import test from 'tape';
import {
  getBaseMapLibrary,
  isImportBasedStyle,
  isStyleUsingMapboxTiles
} from '@kepler.gl/utils';
import {MAP_LIB_OPTIONS} from '@kepler.gl/constants';

test('mapbox-utils -> isStyleUsingMapboxTiles', t => {
  t.notOk(isStyleUsingMapboxTiles({}), 'Empty style does not reference Mapbox');
  t.notOk(
    isStyleUsingMapboxTiles({stylesheet: {sources: {a: {}}}}),
    'Source does not reference Mapbox'
  );
  t.ok(
    isStyleUsingMapboxTiles({
      stylesheet: {
        sources: {
          a: {url: 'some/url'},
          b: {url: 'mapbox://mapbox-style.json'}
        }
      }
    }),
    'Source references Mapbox tiles using "url"'
  );
  t.ok(
    isStyleUsingMapboxTiles({
      stylesheet: {
        sources: {
          a: {url: 'some/url'},
          b: {tiles: ['mapbox://mapbox-style.json']}
        }
      }
    }),
    'Source references Mapbox tiles using "tiles"'
  );
  t.end();
});

test('mapbox-utils -> import-based styles', t => {
  const style = {
    version: 8,
    imports: [{id: 'basemap', url: 'mapbox://styles/mapbox/standard'}],
    sources: {},
    layers: []
  };

  t.ok(isImportBasedStyle(style), 'detects a style with imports');
  t.notOk(isImportBasedStyle({...style, imports: []}), 'ignores an empty imports array');
  t.equal(
    getBaseMapLibrary({style}),
    MAP_LIB_OPTIONS.MAPBOX,
    'uses Mapbox GL JS for a restored import-based style'
  );
  t.end();
});
