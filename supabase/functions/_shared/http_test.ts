import {
  createCorsHeaders,
  errorResponse,
  HttpError,
  serializeUnknownError,
} from "./http.ts";

Deno.test("errorResponse returns stable public error shape for HttpError", async () => {
  const response = errorResponse(
    new HttpError(400, "project_id_required", "projectId is required"),
    createCorsHeaders(["POST", "OPTIONS"]),
  );
  const payload = await response.json();

  assertEquals(response.status, 400);
  assertEquals(
    response.headers.get("content-type"),
    "application/json; charset=utf-8",
  );
  assertEquals(payload.error.code, "project_id_required");
  assertEquals(payload.error.message, "projectId is required");
});

Deno.test("errorResponse hides unexpected error details", async () => {
  const response = errorResponse(
    new Error("database password leaked in stack"),
    createCorsHeaders(["GET", "OPTIONS"]),
  );
  const payload = await response.json();

  assertEquals(response.status, 500);
  assertEquals(payload.error.code, "internal_error");
  assertEquals(payload.error.message, "Internal server error");
});

Deno.test("serializeUnknownError keeps HttpError cause for logs", () => {
  const serialized = serializeUnknownError(
    new HttpError(502, "project_api_error", "Project API request failed", {
      cause: { status: 503, message: "upstream unavailable" },
    }),
  );

  assertEquals(serialized.code, "project_api_error");
  assertEquals(serialized.status, 502);
  assertEquals((serialized.cause as Record<string, unknown>).status, 503);
});

function assertEquals(actual: unknown, expected: unknown) {
  if (actual !== expected) {
    throw new Error(`Expected ${String(expected)}, got ${String(actual)}`);
  }
}
