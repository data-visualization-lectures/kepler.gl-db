// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import test from 'tape';
import {
  createShiftJisDecoder,
  decodeTextFileBytes,
  decodeUploadedTextFile,
  detectTextFileEncoding,
  hasBinarySignature,
  isBinaryDataFileName,
  isValidUtf8,
  processFileData,
  readFileInBatches
} from '@kepler.gl/processors';
import {installFilePolyfills} from '@loaders.gl/polyfills';

installFilePolyfills();

// CP932 of:
// name,lat,lng
// 東京駅,35.681236,139.767125
// 大阪駅,34.702485,135.495951
const SHIFT_JIS_CSV_BYTES = Uint8Array.from([
  110, 97, 109, 101, 44, 108, 97, 116, 44, 108, 110, 103, 10, 147, 140, 139, 158, 137, 119, 44, 51,
  53, 46, 54, 56, 49, 50, 51, 54, 44, 49, 51, 57, 46, 55, 54, 55, 49, 50, 53, 10, 145, 229, 141, 227,
  137, 119, 44, 51, 52, 46, 55, 48, 50, 52, 56, 53, 44, 49, 51, 53, 46, 52, 57, 53, 57, 53, 49, 10
]);

const UTF8_CSV =
  'name,lat,lng\n東京駅,35.681236,139.767125\n大阪駅,34.702485,135.495951\n';

const SHIFT_JIS_GEOJSON_BYTES = Uint8Array.from([
  123, 34, 116, 121, 112, 101, 34, 58, 34, 70, 101, 97, 116, 117, 114, 101, 67, 111, 108, 108, 101,
  99, 116, 105, 111, 110, 34, 44, 34, 102, 101, 97, 116, 117, 114, 101, 115, 34, 58, 91, 123, 34,
  116, 121, 112, 101, 34, 58, 34, 70, 101, 97, 116, 117, 114, 101, 34, 44, 34, 112, 114, 111, 112,
  101, 114, 116, 105, 101, 115, 34, 58, 123, 34, 110, 97, 109, 101, 34, 58, 34, 147, 140, 139, 158,
  137, 119, 34, 125, 44, 34, 103, 101, 111, 109, 101, 116, 114, 121, 34, 58, 123, 34, 116, 121, 112,
  101, 34, 58, 34, 80, 111, 110, 116, 34, 44, 34, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101,
  115, 34, 58, 91, 49, 51, 57, 46, 55, 54, 55, 49, 50, 53, 44, 51, 53, 46, 54, 56, 49, 50, 51, 54,
  93, 125, 125, 93, 125
]);

test('#file-encoding -> Shift JIS decoder is available', t => {
  t.ok(createShiftJisDecoder(true), 'windows-31j or shift_jis should be available');
  t.end();
});

test('#file-encoding -> detect UTF-8 vs Shift JIS', t => {
  const utf8Bytes = new TextEncoder().encode(UTF8_CSV);

  t.equal(isValidUtf8(utf8Bytes), true, 'UTF-8 CSV should be valid UTF-8');
  t.equal(isValidUtf8(SHIFT_JIS_CSV_BYTES), false, 'Shift JIS CSV should not be valid UTF-8');
  t.equal(detectTextFileEncoding(utf8Bytes), 'utf-8', 'should prefer UTF-8 when valid');
  t.equal(
    detectTextFileEncoding(SHIFT_JIS_CSV_BYTES),
    'windows-31j',
    'should detect Shift JIS / CP932 CSV'
  );
  t.equal(
    detectTextFileEncoding(SHIFT_JIS_GEOJSON_BYTES),
    'windows-31j',
    'should detect Shift JIS / CP932 GeoJSON'
  );
  t.equal(detectTextFileEncoding(new Uint8Array()), 'utf-8', 'empty payload should stay UTF-8');
  t.end();
});

test('#file-encoding -> decode Shift JIS bytes to usable UTF-8 text', t => {
  const csv = decodeTextFileBytes(SHIFT_JIS_CSV_BYTES);
  t.ok(csv, 'should decode Shift JIS CSV');
  t.equal(csv.encoding, 'windows-31j', 'CSV encoding should be windows-31j');
  t.equal(csv.text, UTF8_CSV, 'decoded CSV should match UTF-8 source');
  t.ok(csv.text.includes('東京駅'), 'decoded CSV should contain 東京駅');
  t.ok(csv.text.includes('大阪駅'), 'decoded CSV should contain 大阪駅');

  const geojson = decodeTextFileBytes(SHIFT_JIS_GEOJSON_BYTES);
  t.ok(geojson, 'should decode Shift JIS GeoJSON');
  t.equal(JSON.parse(geojson.text).features[0].properties.name, '東京駅');
  t.end();
});

test('#file-encoding -> UTF-8 Japanese text is not re-encoded', t => {
  const utf8Bytes = new TextEncoder().encode(UTF8_CSV);
  const decoded = decodeTextFileBytes(utf8Bytes);
  t.equal(decoded.encoding, 'utf-8');
  t.equal(decoded.text, UTF8_CSV);
  t.end();
});

test('#file-encoding -> skip binary payloads', t => {
  const parquet = Uint8Array.from([0x50, 0x41, 0x52, 0x31, 0x00, 0x01, 0x02]);
  const arrow = Uint8Array.from([0x41, 0x52, 0x52, 0x4f, 0x57, 0x31, 0x00]);
  t.equal(hasBinarySignature(parquet), true);
  t.equal(hasBinarySignature(arrow), true);
  t.equal(detectTextFileEncoding(parquet), null);
  t.equal(detectTextFileEncoding(arrow), null);
  t.equal(isBinaryDataFileName('trips.parquet'), true);
  t.equal(isBinaryDataFileName('tokyo.csv'), false);
  t.end();
});

test('#file-encoding -> unknown 8-bit bytes stay untouched', t => {
  // Isolated 0xFF is invalid UTF-8 and invalid as a Shift JIS / CP932 sequence.
  const unknown = Uint8Array.from([0x41, 0x2c, 0xff]);
  t.equal(detectTextFileEncoding(unknown), null);
  t.equal(decodeTextFileBytes(unknown), null);
  t.end();
});

async function collectLastBatch(file) {
  const gen = await readFileInBatches({file, fileCache: [], loaders: [], loadOptions: {}});
  let last = null;
  let batch = await gen.next();
  while (!batch.done) {
    last = batch.value;
    batch = await gen.next();
  }
  return last;
}

test('#file-encoding -> decodeUploadedTextFile converts only Shift JIS files', async t => {
  if (typeof File === 'undefined') {
    t.ok(true, 'File is not available in this runtime');
    t.end();
    return;
  }

  const utf8File = new File([UTF8_CSV], 'tokyo.csv', {type: 'text/csv'});
  const sjisFile = new File([SHIFT_JIS_CSV_BYTES], 'tokyo.csv', {type: 'text/csv'});
  const parquetFile = new File([Uint8Array.from([0x50, 0x41, 0x52, 0x31])], 'data.parquet');

  const utf8Result = await decodeUploadedTextFile(utf8File);
  const sjisResult = await decodeUploadedTextFile(sjisFile);
  const parquetResult = await decodeUploadedTextFile(parquetFile);

  t.equal(utf8Result, utf8File, 'UTF-8 File instance should be reused');
  t.equal(parquetResult, parquetFile, 'binary File instance should be reused');
  t.notEqual(sjisResult, sjisFile, 'Shift JIS File should be replaced');
  t.equal(await sjisResult.text(), UTF8_CSV, 'converted File should be UTF-8 text');
  t.end();
});

test('#file-encoding -> readFileInBatches loads Shift JIS CSV as UTF-8 rows', async t => {
  if (typeof File === 'undefined') {
    t.ok(true, 'File is not available in this runtime');
    t.end();
    return;
  }

  const file = new File([SHIFT_JIS_CSV_BYTES], 'tokyo-sjis.csv', {type: 'text/csv'});
  const content = await collectLastBatch(file);
  const processed = await processFileData({content, fileCache: []});
  const {fields, rows} = processed[0].data;
  const nameIndex = fields.findIndex(field => field.name === 'name');

  t.ok(nameIndex >= 0, 'should keep the name column');
  t.equal(rows.length, 2, 'should load two rows');
  t.equal(rows[0][nameIndex], '東京駅', 'first row should be 東京駅');
  t.equal(rows[1][nameIndex], '大阪駅', 'second row should be 大阪駅');
  t.end();
});

test('#file-encoding -> readFileInBatches loads Shift JIS GeoJSON as UTF-8 properties', async t => {
  if (typeof File === 'undefined') {
    t.ok(true, 'File is not available in this runtime');
    t.end();
    return;
  }

  const file = new File([SHIFT_JIS_GEOJSON_BYTES], 'tokyo-sjis.geojson', {type: ''});
  const content = await collectLastBatch(file);
  const processed = await processFileData({content, fileCache: []});
  const {fields, rows} = processed[0].data;
  const nameIndex = fields.findIndex(field => field.name === 'name');

  t.ok(nameIndex >= 0, 'should keep the name property');
  t.equal(rows[0][nameIndex], '東京駅', 'GeoJSON name should be 東京駅');
  t.end();
});

test('#file-encoding -> readFileInBatches keeps UTF-8 Japanese CSV as UTF-8', async t => {
  if (typeof File === 'undefined') {
    t.ok(true, 'File is not available in this runtime');
    t.end();
    return;
  }

  const file = new File([UTF8_CSV], 'tokyo-utf8.csv', {type: 'text/csv'});
  const content = await collectLastBatch(file);
  const processed = await processFileData({content, fileCache: []});
  const {fields, rows} = processed[0].data;
  const nameIndex = fields.findIndex(field => field.name === 'name');

  t.equal(rows[0][nameIndex], '東京駅', 'UTF-8 CSV should still load 東京駅');
  t.equal(rows[1][nameIndex], '大阪駅', 'UTF-8 CSV should still load 大阪駅');
  t.end();
});
