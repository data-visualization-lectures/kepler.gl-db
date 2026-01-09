
import test from 'tape';
import { getGeojsonDataMaps } from '../../../src/layers/src/geojson-layer/geojson-utils';

test('#GeojsonUtils -> getGeojsonDataMaps (Projected Coords)', t => {
    // Mock DataContainer
    const mockDataContainer = {
        numRows: () => 1,
        rowAsArray: () => []
    };

    // 1. Test with Standard Coordinates (EPSG:4326)
    const standardFeature = {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [139.684483, 35.690495]
        },
        properties: {}
    };

    const getFeatureStandard = () => standardFeature;
    const resultsStandard = getGeojsonDataMaps(mockDataContainer, getFeatureStandard);

    t.ok(resultsStandard[0], 'Standard coordinates (EPSG:4326) should be accepted');

    // 2. Test with Projected Coordinates (EPSG:3857)
    // Coordinates like [15545524.27, 4257404.75] are common in Web Mercator
    // Latitude 4257404.75 is definitely > 90
    const projectedFeature = {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [15545524.27, 4257404.75]
        },
        properties: {}
    };

    const getFeatureProjected = () => projectedFeature;

    const resultsProjected = getGeojsonDataMaps(mockDataContainer, getFeatureProjected);

    t.ok(resultsProjected[0], 'Projected coordinates (Lat > 90) should be accepted');
    t.deepEqual(resultsProjected[0].geometry, projectedFeature.geometry, 'Geometry should be preserved');

    // 2. Test with Invalid Coordinates (NaN)
    const invalidFeature = {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [139.0, NaN]
        },
        properties: {}
    };

    const getFeatureInvalid = () => invalidFeature;

    const resultsInvalid = getGeojsonDataMaps(mockDataContainer, getFeatureInvalid);

    t.equal(resultsInvalid[0], null, 'NaN coordinates should be rejected');

    // 3. Test with Infinity
    const infinityFeature = {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [Infinity, 35.0]
        },
        properties: {}
    };

    const getFeatureInfinity = () => infinityFeature;

    const resultsInfinity = getGeojsonDataMaps(mockDataContainer, getFeatureInfinity);

    t.equal(resultsInfinity[0], null, 'Infinity coordinates should be rejected');

    t.end();
});
