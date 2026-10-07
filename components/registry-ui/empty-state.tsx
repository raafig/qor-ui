type EmptyStateProps = { eyebrow: string; title: string; description: string; note: string };

export function EmptyState({ eyebrow, title, description, note }: EmptyStateProps) {
  return (
    <section className="workspace-page" aria-labelledby="workspace-title">
      <header className="workspace-header"><p className="eyebrow">{eyebrow}</p><h1 id="workspace-title">{title}</h1><p>{description}</p></header>
      <div className="empty-panel" role="status"><div className="empty-symbol" aria-hidden="true"><span /></div><div><h2>Nothing here yet</h2><p>{note}</p></div></div>
    </section>
  );
}
