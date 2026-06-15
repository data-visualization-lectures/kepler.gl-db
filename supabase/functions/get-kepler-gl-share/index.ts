// Supabase Edge Function: resolve public kepler.gl share metadata
//
// Deploy:
//   supabase functions deploy get-kepler-gl-share --no-verify-jwt

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import {
  createCorsHeaders,
  errorResponse,
  HttpError,
  jsonResponse,
  noContentResponse,
  serializeUnknownError,
} from "../_shared/http.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const SHARE_TABLE = "kepler_gl_shares";
const SHARE_BUCKET = "kepler-gl-shares";
const SNAPSHOT_TTL_SECONDS = 60 * 60;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const corsHeaders = createCorsHeaders(["GET", "OPTIONS"]);

async function createSnapshotUrl(snapshotStoragePath: string) {
  const { data, error } = await supabase.storage
    .from(SHARE_BUCKET)
    .createSignedUrl(snapshotStoragePath, SNAPSHOT_TTL_SECONDS);

  if (error) {
    throw error;
  }

  if (!data?.signedUrl) {
    throw new HttpError(
      500,
      "snapshot_url_unavailable",
      "Snapshot URL is unavailable",
    );
  }

  return data.signedUrl;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return noContentResponse(corsHeaders);
  }

  if (req.method !== "GET") {
    return errorResponse(
      new HttpError(405, "method_not_allowed", "Method not allowed"),
      corsHeaders,
    );
  }

  const shareId = String(new URL(req.url).searchParams.get("id") || "").trim();
  if (!shareId) {
    return errorResponse(
      new HttpError(400, "share_id_required", "id is required"),
      corsHeaders,
    );
  }

  try {
    const { data: shareRow, error } = await supabase
      .from(SHARE_TABLE)
      .select("id, title, source_project_id, snapshot_storage_path")
      .eq("id", shareId)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!shareRow?.id || !shareRow?.snapshot_storage_path) {
      return errorResponse(
        new HttpError(404, "share_not_found", "Share not found"),
        corsHeaders,
      );
    }

    const snapshotUrl = await createSnapshotUrl(shareRow.snapshot_storage_path);
    return jsonResponse(
      {
        shareId: shareRow.id,
        title: shareRow.title,
        sourceProjectId: shareRow.source_project_id,
        snapshotUrl,
      },
      200,
      corsHeaders,
    );
  } catch (error) {
    const serializedError = serializeUnknownError(error);
    console.error("[get-kepler-gl-share] failed", {
      shareId,
      serializedError,
    });
    return errorResponse(error, corsHeaders);
  }
});
