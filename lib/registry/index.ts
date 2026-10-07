import { z } from "zod";
import { registryEntries } from "../../registry/entries.ts";
import { registryEntrySchema, type RegistryEntry } from "../../schemas/registry-entry.ts";
const registrySchema = z.array(registryEntrySchema);
export function validateRegistry(input: unknown): RegistryEntry[] {
  const result = registrySchema.safeParse(input);
  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `${issue.path.join(".") || "registry"}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid QorUI registry:\n${details}`);
  }
  return result.data;
}
export function loadRegistry(): RegistryEntry[] { return validateRegistry(registryEntries); }
