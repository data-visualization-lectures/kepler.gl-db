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

function createJwtPayload(payload: Record<string, unknown>) {
  const encodedPayload = btoa(JSON.stringify(payload))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  return `header.${encodedPayload}.signature`;
}

Deno.test("readDatavizAccessToken accepts bearer tokens case-insensitively", () => {
  const req = new Request("https://example.test", {
    headers: {
      "x-dataviz-authorization": "bEaReR  token-value  ",
    },
  });

  assertEquals(readDatavizAccessToken(req), "token-value");
});

Deno.test("readDatavizAccessToken rejects missing or malformed authorization", () => {
  assertEquals(
    readDatavizAccessToken(new Request("https://example.test")),
    null,
  );
  assertEquals(
    readDatavizAccessToken(
      new Request("https://example.test", {
        headers: {
          "x-dataviz-authorization": "Basic token-value",
        },
      }),
    ),
    null,
  );
});

function assertEquals(actual: unknown, expected: unknown) {
  if (actual !== expected) {
    throw new Error(`Expected ${String(expected)}, got ${String(actual)}`);
  }
}

function assertNotEquals(actual: unknown, expected: unknown) {
  if (actual === expected) {
    throw new Error(`Expected values to differ, got ${String(actual)}`);
  }
}

Deno.test("decodeJwtSubject extracts sub from url-safe base64 payload", () => {
  const token = createJwtPayload({ sub: "user-123", role: "member" });

  assertEquals(decodeJwtSubject(token), "user-123");
});

Deno.test("decodeJwtSubject returns null for invalid tokens", () => {
  assertEquals(decodeJwtSubject(null), null);
  assertEquals(decodeJwtSubject("not-a-jwt"), null);
  assertEquals(decodeJwtSubject(createJwtPayload({ sub: 123 })), null);
});

Deno.test("cloneJson returns detached JSON-safe data", () => {
  const source = {
    info: {
      title: "Original",
    },
  };
  const cloned = cloneJson(source);

  cloned.info.title = "Changed";

  assertEquals(source.info.title, "Original");
  assertEquals(cloned.info.title, "Changed");
  assertNotEquals(cloned, source);
});

Deno.test("resolveShareTitle prefers project title, fallback title, then default", () => {
  assertEquals(
    resolveShareTitle({ info: { title: " Project title " } }, "Fallback"),
    "Project title",
  );
  assertEquals(
    resolveShareTitle({ info: { title: "   " } }, " Fallback title "),
    "Fallback title",
  );
  assertEquals(resolveShareTitle({}, ""), "kepler.gl");
});

Deno.test("normalizeShareOrigin applies default and removes trailing slashes", () => {
  assertEquals(
    normalizeShareOrigin("https://example.test///"),
    "https://example.test",
  );
  assertEquals(normalizeShareOrigin(null), "https://kepler-gl.dataviz.jp");
});

Deno.test("buildShareUrl encodes share ids", () => {
  assertEquals(
    buildShareUrl("https://example.test", "id/with space"),
    "https://example.test/shares/id%2Fwith%20space",
  );
});

Deno.test("Project API errors keep public status and message policy stable", () => {
  assertEquals(getProjectApiPublicStatus(401), 401);
  assertEquals(getProjectApiErrorCode(401), "project_access_denied");
  assertEquals(getProjectApiPublicMessage(401), "Project access denied");

  assertEquals(getProjectApiPublicStatus(403), 403);
  assertEquals(getProjectApiErrorCode(403), "project_access_denied");
  assertEquals(getProjectApiPublicMessage(403), "Project access denied");

  assertEquals(getProjectApiPublicStatus(404), 404);
  assertEquals(getProjectApiErrorCode(404), "project_not_found");
  assertEquals(getProjectApiPublicMessage(404), "Project not found");

  assertEquals(getProjectApiPublicStatus(500), 502);
  assertEquals(getProjectApiErrorCode(500), "project_api_error");
  assertEquals(getProjectApiPublicMessage(500), "Project API request failed");
});
