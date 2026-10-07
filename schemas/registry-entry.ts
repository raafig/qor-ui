import { z } from "zod";

export const registryEntrySchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase, URL-safe identifier"),
  name: z.string().min(1), description: z.string().min(1),
  status: z.enum(["experimental", "validated", "deprecated"]),
  category: z.enum(["block", "template", "composition"]),
  source: z.string().min(1), preview: z.string().min(1).optional(),
  tags: z.array(z.string().min(1)).default([]),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, "Use a semantic version such as 1.0.0"),
}).strict();
export type RegistryEntry = z.infer<typeof registryEntrySchema>;
