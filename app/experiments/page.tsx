import type { Metadata } from "next";
import { EmptyState } from "@/components/registry-ui/empty-state";
export const metadata: Metadata = { title: "Experiments" };
export default function ExperimentsPage() { return <EmptyState eyebrow="Workspace 01" title="Experiments" description="A development space for visual questions, layout studies, and ideas that are not ready for the catalog." note="Future experiments will appear here after they are created and reviewed." />; }
