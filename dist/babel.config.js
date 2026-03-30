"use strict";

// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

var KeplerPackage = require("./package");
var PRESETS = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];
var PLUGINS = [['@babel/plugin-transform-typescript', {
  isTSX: true,
  allowDeclareFields: true
}], '@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-class-properties', '@babel/plugin-transform-optional-chaining', '@babel/plugin-transform-logical-assignment-operators', '@babel/plugin-transform-nullish-coalescing-operator', '@babel/plugin-transform-export-namespace-from', ['@babel/transform-runtime', {
  regenerator: true
}], ['search-and-replace', {
  rules: [{
    search: "3.2.1",
    replace: KeplerPackage.version
  }]
}]];
var ENV = {
  test: {
    plugins: ['istanbul']
  },
  debug: {
    sourceMaps: 'inline',
    retainLines: true
  }
};
module.exports = function babel(api) {
  api.cache(true);
  return {
    presets: PRESETS,
    plugins: PLUGINS,
    env: ENV
  };
};
