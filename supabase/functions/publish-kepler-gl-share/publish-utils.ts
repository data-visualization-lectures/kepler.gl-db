export const DEFAULT_SHARE_ORIGIN = "https://kepler-gl.dataviz.jp";

export function readDatavizAccessToken(req: Pick<Request, "headers">) {
  const raw = req.headers.get("x-dataviz-authorization") || "";
  const match = raw.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}

export function decodeJwtSubject(token: string | null) {
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

export function cloneJson<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function resolveShareTitle(
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

  return candidates.map((value) => String(value || "").trim()).find(Boolean) ||
    "kepler.gl";
}

export function normalizeShareOrigin(origin?: string | null) {
  return (origin || DEFAULT_SHARE_ORIGIN).replace(/\/+$/, "");
}

export function buildShareUrl(shareOrigin: string, shareId: string) {
  return `${shareOrigin}/shares/${encodeURIComponent(shareId)}`;
}

export function getProjectApiPublicStatus(status: number) {
  if (status === 401 || status === 403 || status === 404) {
    return status;
  }
  return 502;
}

export function getProjectApiErrorCode(status: number) {
  if (status === 401 || status === 403) {
    return "project_access_denied";
  }
  if (status === 404) {
    return "project_not_found";
  }
  return "project_api_error";
}

export function getProjectApiPublicMessage(status: number) {
  if (status === 401 || status === 403) {
    return "Project access denied";
  }
  if (status === 404) {
    return "Project not found";
  }
  return "Project API request failed";
}
