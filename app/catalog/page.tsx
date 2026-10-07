import type { Metadata } from "next";
import { EmptyState } from "@/components/registry-ui/empty-state";
import { loadRegistry } from "@/lib/registry";
export const metadata: Metadata = { title: "Catalog" };
export default function CatalogPage() {
  const entries = loadRegistry();
  if (entries.length === 0) return <EmptyState eyebrow="Workspace 02" title="Catalog" description="The validated collection of reusable templates available to QorUI and future tooling." note="The registry is valid and empty. Approved templates will appear here after their registry entries are added." />;
  return <section className="workspace-page" aria-labelledby="catalog-title"><header className="workspace-header"><p className="eyebrow">Workspace 02</p><h1 id="catalog-title">Catalog</h1></header><ul className="registry-list">{entries.map((entry) => <li key={entry.id}><strong>{entry.name}</strong><span>{entry.description}</span></li>)}</ul></section>;
}
