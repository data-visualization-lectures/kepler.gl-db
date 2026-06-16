# Refactoring Backlog

Last updated: 2026-06-16

This document records the remaining refactoring and test-hardening candidates after the recent local cleanup work. The goal is to keep future work incremental and test-first, without forcing file splits or broad rewrites.

## Completed Recently

- Fixed current TypeScript failures and kept the project on the README/package Volta runtime: Node 18.18.2 and Yarn 4.4.0.
- Restored the tape/node test path and verified it locally.
- Consolidated Supabase Edge Function HTTP error responses and public error policy.
- Rebuilt production `dist` to remove the `/esbuild` EventSource request.
- Fixed project save thumbnail timing so generated thumbnails are included.
- Normalized missing/invalid share ID behavior to a safe 404 response instead of leaking database UUID syntax errors.
- Added pure tests around selected `vis-state-updaters.ts` behavior.
- Refactored file loading progress updates and split map layer updates in `vis-state-updaters.ts`.
- Typed and tested `split-map-utils.ts`.
- Added local Deno tests for Supabase Edge Function helpers.

## Recommended Next Candidates

### 1. `map-state-updaters.ts` split viewport typing

Why:

- `src/reducers/src/map-state-updaters.ts` still has several TypeScript suppression comments around viewport and split map state handling.
- The existing tests in `test/node/reducers/map-state-test.js` already cover split map viewport behavior, so this is a good candidate for incremental cleanup.

Suggested scope:

- Keep behavior unchanged.
- Add or tighten tests for synced/unsynced viewport transitions only where gaps are found.
- Replace `@ts-expect-error` / `@ts-ignore` with explicit local types or narrower helper return types.

Suggested verification:

- `volta run yarn typescript --pretty false`
- `NODE_ENV=test volta run node -r ./babel-register.js ./test/node/reducers/map-state-test.js`
- `volta run yarn test-node-debug`

### 2. Supabase Edge Function handler-level tests

Why:

- Current Supabase tests cover shared HTTP helpers, share ID validation, and pure publish helpers.
- The main `Deno.serve` handlers still depend directly on the module-level Supabase client and runtime environment, which makes handler-level tests harder.

Suggested scope:

- Extract request handlers from `publish-kepler-gl-share/index.ts` and `get-kepler-gl-share/index.ts` into dependency-injected functions.
- Keep `Deno.serve` as a thin wrapper.
- Add tests for method handling, invalid JSON, missing auth token, missing `projectId`, missing `id`, not-found share, and signed URL failure.

Suggested verification:

- `deno fmt --check supabase/functions`
- `deno test --no-lock supabase/functions`
- `deno check --no-lock supabase/functions/publish-kepler-gl-share/index.ts supabase/functions/get-kepler-gl-share/index.ts`

Note:

- `deno lint` currently needs `--rules-exclude=no-import-prefix` when linting function entrypoints because Supabase functions use `https://esm.sh/@supabase/supabase-js@2` imports.

### 3. `vis-state-updaters.ts` test-first cleanup

Why:

- `src/reducers/src/vis-state-updaters.ts` is still broad and has remaining suppressions/TODOs.
- It is risky to split this file mechanically because many update paths are tightly coupled through layer, filter, dataset, animation, and interaction state.

Suggested scope:

- Do not split the file first.
- Pick one behavior group at a time and add pure tests before changing implementation.
- Good next groups:
  - filter data ID/name update behavior
  - layer data ID change behavior
  - dataset replace preparation
  - editor feature update behavior
  - layer animation/filter synchronization behavior

Suggested verification:

- `volta run yarn typescript --pretty false`
- Targeted `test/node/reducers/vis-state-test.js`
- `volta run yarn test-node-debug`

### 4. `vis-state-merger.ts` split map merge edge cases

Why:

- `mergeSplitMaps` already has tests, but it handles several subtle cases: existing split maps, saved configs with missing layers, and delayed merge via `splitMapsToBeMerged`.
- This logic is important for saved project/share compatibility.

Suggested scope:

- Add tests before refactoring.
- Focus on edge cases where saved config references layers that do not exist yet, or where current state is not split but saved config is split.
- Avoid changing serialized schema behavior unless a failing case is proven.

Suggested verification:

- `NODE_ENV=test volta run node -r ./babel-register.js ./test/node/reducers/vis-state-merger-test.js`
- `volta run yarn test-node-debug`

### 5. Type suppression sweep in utils/reducers

Why:

- There are still many `@ts-ignore`, `@ts-expect-error`, and local eslint disable comments across reducers and utils.
- Some are legitimate boundary cases, but several are likely removable with local structural types.

Suggested scope:

- Work one file at a time.
- Prefer files with narrow behavior and existing tests.
- Avoid large files such as `filter-utils.ts` until the surrounding tests are understood.

Initial candidates:

- `src/reducers/src/ui-state.ts`
- `src/utils/src/data-utils.ts`
- `src/reducers/src/combined-updaters.ts`
- `src/reducers/src/map-state-updaters.ts`
- `src/utils/src/time.ts`

Suggested verification:

- `volta run yarn typescript --pretty false`
- Targeted tape tests for the touched module
- `volta run yarn test-node-debug` for shared utility changes

## Stop Point

The current codebase is in a reasonable stop state after the recent commits. The remaining items above are not emergency fixes. They are best treated as separate, scoped follow-up tasks with local tests first and no remote/manual testing unless browser or production build behavior is intentionally changed.
