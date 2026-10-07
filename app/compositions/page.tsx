import type { Metadata } from "next";
import { EmptyState } from "@/components/registry-ui/empty-state";
export const metadata: Metadata = { title: "Compositions" };
export default function CompositionsPage() { return <EmptyState eyebrow="Workspace 03" title="Compositions" description="A place for full-page assemblies and page-level tests built from proven visual work." note="Future compositions will appear here when complete pages are ready to evaluate." />; }
