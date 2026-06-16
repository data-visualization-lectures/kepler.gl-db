import { isValidShareId } from "./share-id.ts";

Deno.test("isValidShareId accepts canonical UUID values", () => {
  assertEquals(
    isValidShareId("1770c322-38c7-4fb5-87e0-69419f08e441"),
    true,
  );
  assertEquals(
    isValidShareId("1770C322-38C7-4FB5-87E0-69419F08E441"),
    true,
  );
});

Deno.test("isValidShareId rejects malformed share ids before database lookup", () => {
  assertEquals(isValidShareId("000000"), false);
  assertEquals(isValidShareId(""), false);
  assertEquals(
    isValidShareId("../1770c322-38c7-4fb5-87e0-69419f08e441"),
    false,
  );
  assertEquals(isValidShareId("1770c32238c74fb587e069419f08e441"), false);
});

function assertEquals(actual: unknown, expected: unknown) {
  if (actual !== expected) {
    throw new Error(`Expected ${String(expected)}, got ${String(actual)}`);
  }
}
