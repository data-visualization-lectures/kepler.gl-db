// Supabase Edge Function: publish saved kepler.gl project into a reusable share snapshot
//
// Deploy:
//   supabase functions deploy publish-kepler-gl-share --no-verify-jwt

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import {
  createCorsHeaders,
  errorResponse,
  HttpError,
  jsonResponse,
  noContentResponse,
  serializeUnknownError,
} from "../_shared/http.ts";
import {
  buildShareUrl,
  cloneJson,
  decodeJwtSubject,
  getProjectApiErrorCode,
  getProjectApiPublicMessage,
  getProjectApiPublicStatus,
  normalizeShareOrigin,
  readDatavizAccessToken,
  resolveShareTitle,
} from "./publish-utils.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const DATAVIZ_API_URL = Deno.env.get("DATAVIZ_API_URL") ||
  "https://api.dataviz.jp";
const SHARE_ORIGIN = normalizeShareOrigin(Deno.env.get("KEPLER_SHARE_ORIGIN"));
const SHARE_TABLE = "kepler_gl_shares";
const SHARE_BUCKET = "kepler-gl-shares";
const SNAPSHOT_TTL_SECONDS = 60 * 60;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const corsHeaders = createCorsHeaders(["POST", "OPTIONS"]);

async function loadSavedProject(projectId: string, accessToken: string) {
  const response = await fetch(
    `${DATAVIZ_API_URL}/api/projects/${encodeURIComponent(projectId)}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    const errorPayload = await response.json().catch(async () => ({
      error: await response.text().catch(() => ""),
    }));
    const message = errorPayload?.error || errorPayload?.detail ||
      `Project API error: ${response.status}`;
    throw new HttpError(
      getProjectApiPublicStatus(response.status),
      getProjectApiErrorCode(response.status),
      getProjectApiPublicMessage(response.status),
      {
        cause: {
          status: response.status,
          message,
        },
      },
    );
  }

  const projectData = await response.json();
  if (!projectData || typeof projectData !== "object") {
    throw new HttpError(
      502,
      "invalid_project_payload",
      "Project API returned an invalid payload",
    );
  }

  return cloneJson(projectData as Record<string, unknown>);
}

async function ensureShareRegistry(
  projectId: string,
  title: string,
  createdBy: string | null,
) {
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

async function uploadSnapshot(
  snapshotStoragePath: string,
  projectData: Record<string, unknown>,
) {
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

  if (req.method !== "POST") {
    return errorResponse(
      new HttpError(405, "method_not_allowed", "Method not allowed"),
      corsHeaders,
    );
  }

  const accessToken = readDatavizAccessToken(req);
  if (!accessToken) {
    return errorResponse(
      new HttpError(401, "login_required", "Login required"),
      corsHeaders,
    );
  }

  const body = await req.json().catch(() => null) as
    | Record<string, unknown>
    | null;
  if (!body || typeof body !== "object") {
    return errorResponse(
      new HttpError(400, "invalid_json", "Request body must be valid JSON"),
      corsHeaders,
    );
  }

  const projectId = String(body?.projectId || "").trim();
  const fallbackTitle = String(body?.fallbackTitle || "").trim();
  if (!projectId) {
    return errorResponse(
      new HttpError(400, "project_id_required", "projectId is required"),
      corsHeaders,
    );
  }

  try {
    const savedProject = await loadSavedProject(projectId, accessToken);
    const title = resolveShareTitle(savedProject, fallbackTitle);
    const createdBy = decodeJwtSubject(accessToken);
    const shareRegistry = await ensureShareRegistry(
      projectId,
      title,
      createdBy,
    );

    await uploadSnapshot(shareRegistry.snapshot_storage_path, savedProject);
    const shareRow = await updateShareMetadata(shareRegistry.id, title);
    const snapshotUrl = await createSnapshotUrl(shareRow.snapshot_storage_path);

    return jsonResponse(
      {
        shareId: shareRow.id,
        title: shareRow.title,
        sourceProjectId: shareRow.source_project_id,
        shareUrl: buildShareUrl(SHARE_ORIGIN, shareRow.id),
        snapshotUrl,
      },
      200,
      corsHeaders,
    );
  } catch (error) {
    const serializedError = serializeUnknownError(error);
    console.error("[publish-kepler-gl-share] failed", {
      projectId,
      serializedError,
    });
    return errorResponse(error, corsHeaders);
  }
});
