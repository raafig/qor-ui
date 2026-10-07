import assert from "node:assert/strict";
import test from "node:test";
import { loadRegistry, validateRegistry } from "../lib/registry/index.ts";
test("the catalog registry loads with zero entries", () => { assert.deepEqual(loadRegistry(), []); });
test("an empty registry is valid", () => { assert.deepEqual(validateRegistry([]), []); });
test("invalid future entries return a helpful error", () => { assert.throws(() => validateRegistry([{ id: "Not valid" }]), /Invalid QorUI registry/); });
