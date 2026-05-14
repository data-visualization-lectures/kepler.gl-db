// Supabase Edge Function: publish saved kepler.gl project into a reusable share snapshot
//
// Deploy:
//   supabase functions deploy publish-kepler-gl-share --no-verify-jwt

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const DATAVIZ_API_URL = Deno.env.get("DATAVIZ_API_URL") || "https://api.dataviz.jp";
const SHARE_ORIGIN = (Deno.env.get("KEPLER_SHARE_ORIGIN") || "https://kepler-gl.dataviz.jp").replace(/\/+$/, "");
const SHARE_TABLE = "kepler_gl_shares";
const SHARE_BUCKET = "kepler-gl-shares";
const SNAPSHOT_TTL_SECONDS = 60 * 60;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, x-dataviz-authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
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

function readDatavizAccessToken(req: Request) {
  const raw = req.headers.get("x-dataviz-authorization") || "";
  const match = raw.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}

function decodeJwtSubject(token: string | null) {
  if (!token) return null;

  try {
    const [, payload] = token.split(".");
    if (!payload) return null;

    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
    const decoded = atob(padded);
    const parsed = JSON.parse(decoded);
    return typeof parsed?.sub === "string" ? parsed.sub : null;
  } catch (_error) {
    return null;
  }
}

function cloneJson<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function resolveShareTitle(
  projectData: Record<string, unknown>,
  fallbackTitle: string,
) {
  const info = projectData.info && typeof projectData.info === "object"
    ? projectData.info as Record<string, unknown>
    : null;
  const candidates = [
    typeof info?.title === "string" ? info.title : "",
    fallbackTitle,
    "kepler.gl",
  ];

  return candidates.map((value) => String(value || "").trim()).find(Boolean) || "kepler.gl";
}

async function loadSavedProject(projectId: string, accessToken: string) {
  const response = await fetch(`${DATAVIZ_API_URL}/api/projects/${encodeURIComponent(projectId)}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(async () => ({
      error: await response.text().catch(() => ""),
    }));
    const message = errorPayload?.error || errorPayload?.detail || `Project API error: ${response.status}`;
    throw new Error(message);
  }

  const projectData = await response.json();
  if (!projectData || typeof projectData !== "object") {
    throw new Error("invalid_project_payload");
  }

  return cloneJson(projectData as Record<string, unknown>);
}

async function ensureShareRegistry(projectId: string, title: string, createdBy: string | null) {
  const { data: existingShare, error: lookupError } = await supabase
    .from(SHARE_TABLE)
    .select("id, snapshot_storage_path, source_project_id")
    .eq("source_project_id", projectId)
    .maybeSingle();

  if (lookupError) {
    throw lookupError;
  }

  if (existingShare?.id && existingShare?.snapshot_storage_path) {
    return existingShare;
  }

  const shareId = crypto.randomUUID();
  const snapshotStoragePath = `${shareId}/project.json`;
  const payload: Record<string, unknown> = {
    id: shareId,
    title,
    source_project_id: projectId,
    snapshot_storage_path: snapshotStoragePath,
    updated_at: new Date().toISOString(),
  };
  if (createdBy) {
    payload.created_by = createdBy;
  }

  const { data, error } = await supabase
    .from(SHARE_TABLE)
    .insert(payload)
    .select("id, snapshot_storage_path, source_project_id")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

async function uploadSnapshot(snapshotStoragePath: string, projectData: Record<string, unknown>) {
  const snapshotBlob = new Blob([JSON.stringify(projectData)], {
    type: "application/json; charset=utf-8",
  });

  const { error } = await supabase.storage
    .from(SHARE_BUCKET)
    .upload(snapshotStoragePath, snapshotBlob, {
      contentType: "application/json; charset=utf-8",
      upsert: true,
    });

  if (error) {
    throw error;
  }
}

async function updateShareMetadata(shareId: string, title: string) {
  const { data, error } = await supabase
    .from(SHARE_TABLE)
    .update({
      title,
      updated_at: new Date().toISOString(),
    })
    .eq("id", shareId)
    .select("id, title, source_project_id, snapshot_storage_path")
    .single();

  if (error) {
    throw error;
  }

  return data;
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

function buildShareUrl(shareId: string) {
  return `${SHARE_ORIGIN}/shares/${encodeURIComponent(shareId)}`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const accessToken = readDatavizAccessToken(req);
  if (!accessToken) {
    return jsonResponse({ error: "Login required" }, 401);
  }

  const body = await req.json().catch(() => null) as Record<string, unknown> | null;
  const projectId = String(body?.projectId || "").trim();
  const fallbackTitle = String(body?.fallbackTitle || "").trim();
  if (!projectId) {
    return jsonResponse({ error: "projectId is required" }, 400);
  }

  try {
    const savedProject = await loadSavedProject(projectId, accessToken);
    const title = resolveShareTitle(savedProject, fallbackTitle);
    const createdBy = decodeJwtSubject(accessToken);
    const shareRegistry = await ensureShareRegistry(projectId, title, createdBy);

    await uploadSnapshot(shareRegistry.snapshot_storage_path, savedProject);
    const shareRow = await updateShareMetadata(shareRegistry.id, title);
    const snapshotUrl = await createSnapshotUrl(shareRow.snapshot_storage_path);

    return jsonResponse({
      shareId: shareRow.id,
      title: shareRow.title,
      sourceProjectId: shareRow.source_project_id,
      shareUrl: buildShareUrl(shareRow.id),
      snapshotUrl,
    });
  } catch (error) {
    const serializedError = serializeUnknownError(error);
    console.error("[publish-kepler-gl-share] failed", {
      projectId,
      serializedError,
    });
    return jsonResponse({ error: serializedError }, 500);
  }
});
