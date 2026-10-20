// Runtime validation coverage for the Firebase Functions entry point.
import assert from "node:assert/strict";
import {describe, it} from "node:test";
import "../src/index.ts";

describe("Firebase Functions entry point", () => {
  it("loads without throwing", () => {
    assert.ok(true);
  });
});
