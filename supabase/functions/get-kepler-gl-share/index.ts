// Supabase Edge Function: resolve public kepler.gl share metadata
//
// Deploy:
//   supabase functions deploy get-kepler-gl-share --no-verify-jwt

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const SHARE_TABLE = "kepler_gl_shares";
const SHARE_BUCKET = "kepler-gl-shares";
const SNAPSHOT_TTL_SECONDS = 60 * 60;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, x-dataviz-authorization",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

function jsonResponse(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

function serializeUnknownError(error: unknown) {
  if (error instanceof Error) {
    return {
      type: "Error",
      message: error.message,
      stack: error.stack || null,
    };
  }

  if (error && typeof error === "object") {
    const record = error as Record<string, unknown>;
    return {
      type: "Object",
      message: typeof record.message === "string" ? record.message : String(error),
      code: typeof record.code === "string" ? record.code : null,
      details: typeof record.details === "string" ? record.details : null,
      hint: typeof record.hint === "string" ? record.hint : null,
      status: typeof record.status === "number" ? record.status : null,
      name: typeof record.name === "string" ? record.name : null,
    };
  }

  return {
    type: typeof error,
    message: String(error),
  };
}

async function createSnapshotUrl(snapshotStoragePath: string) {
  const { data, error } = await supabase.storage
    .from(SHARE_BUCKET)
    .createSignedUrl(snapshotStoragePath, SNAPSHOT_TTL_SECONDS);

  if (error) {
    throw error;
  }

  if (!data?.signedUrl) {
    throw new Error("snapshot_url_unavailable");
  }

  return data.signedUrl;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const shareId = String(new URL(req.url).searchParams.get("id") || "").trim();
  if (!shareId) {
    return jsonResponse({ error: "id is required" }, 400);
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
      return jsonResponse({ error: "Share not found" }, 404);
    }

    const snapshotUrl = await createSnapshotUrl(shareRow.snapshot_storage_path);
    return jsonResponse({
      shareId: shareRow.id,
      title: shareRow.title,
      sourceProjectId: shareRow.source_project_id,
      snapshotUrl,
    });
  } catch (error) {
    const serializedError = serializeUnknownError(error);
    console.error("[get-kepler-gl-share] failed", {
      shareId,
      serializedError,
    });
    return jsonResponse({ error: serializedError }, 500);
  }
});
