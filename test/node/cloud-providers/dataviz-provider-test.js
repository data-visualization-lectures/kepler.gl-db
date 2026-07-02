// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import fs from 'fs';
import path from 'path';
import test from 'tape';

const providerSource = fs.readFileSync(
  path.resolve(__dirname, '../../../examples/demo-app/src/cloud-providers/dataviz/dataviz-provider.js'),
  'utf8'
);

test('DatavizProvider does not keep a custom large-upload project save flow', t => {
  t.notOk(
    providerSource.includes('projects-upload-url'),
    'provider must not call projects-upload-url directly'
  );
  t.notOk(
    providerSource.includes('_uploadViaSignedUrl'),
    'provider must not keep the old signed URL upload helper'
  );
  t.notOk(
    providerSource.includes('storage_uploaded'),
    'provider must not build storage_uploaded project metadata itself'
  );
  t.notOk(providerSource.includes('upload_url'), 'provider must not handle storage upload URLs');
  t.end();
});

test('DatavizProvider delegates saves to dataviz-tool-header.saveProject', t => {
  t.ok(
    providerSource.includes('const result = await this._saveViaToolHeader('),
    'uploadMap delegates project saves to _saveViaToolHeader'
  );
  t.ok(
    providerSource.includes("typeof toolHeader.saveProject !== 'function'"),
    'save helper requires tool-header saveProject'
  );
  t.ok(
    providerSource.includes('return toolHeader.saveProject({'),
    'save helper calls tool-header saveProject'
  );
  t.ok(providerSource.includes('data: map'), 'passes the Kepler map payload as project data');
  t.ok(
    providerSource.includes('thumbnailDataUri: thumbnailDataURI || null'),
    'passes thumbnailDataUri through the shared header API'
  );
  t.ok(
    providerSource.includes('existingProjectId: shouldUpdate ? cachedProjectId : null'),
    'passes existingProjectId only for overwrite saves'
  );
  t.end();
});

test('DatavizProvider prepares tool-header context for new and overwrite saves', t => {
  t.ok(
    providerSource.includes("sourceType: 'owned-project'"),
    'overwrite saves use owned-project context'
  );
  t.ok(
    providerSource.includes('projectId: cachedProjectId'),
    'overwrite context targets the cached project id'
  );
  t.ok(providerSource.includes('canOverwrite: true'), 'overwrite context allows replacement');
  t.ok(
    providerSource.includes('toolHeader.clearProjectContext();'),
    'new saves clear stale project context before calling saveProject'
  );
  t.end();
});

test('DatavizProvider keeps share publishing separate from project saving', t => {
  t.ok(
    providerSource.includes('const shareResult = await this._publishShare(token, projectId, name);'),
    'public share publishing uses the project id returned by the shared save path'
  );
  t.ok(
    providerSource.includes("const SHARE_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/publish-kepler-gl-share`;"),
    'share publishing still uses the existing share function'
  );
  t.ok(
    providerSource.includes("'X-Dataviz-Authorization': `Bearer ${token}`"),
    'share publishing keeps its token header'
  );
  t.end();
});
