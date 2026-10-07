import Link from "next/link";

const workAreas = [
  { href: "/experiments", label: "Experiments", description: "A workspace for future visual explorations and rough studies." },
  { href: "/catalog", label: "Catalog", description: "The validated, machine-readable collection of reusable templates." },
  { href: "/compositions", label: "Compositions", description: "A place to assemble and review complete page-level work." },
] as const;

export default function Home() {
  return (
    <div className="home-layout">
      <section className="home-intro" aria-labelledby="home-title">
        <p className="eyebrow">Visual template registry</p>
        <h1 id="home-title">Build the library deliberately.</h1>
        <p className="lede">QorUI is the workspace for developing, reviewing, and distributing reusable website templates. It begins empty so every future entry is intentional.</p>
      </section>
      <section className="starting-state" aria-labelledby="starting-state-title">
        <div><p className="status-label">Current state</p><h2 id="starting-state-title">Ready for the first experiment</h2></div>
        <p>No templates, blocks, visual families, or compositions have been added. That is the expected starting point.</p>
      </section>
      <nav className="area-grid" aria-label="QorUI work areas">
        {workAreas.map((area, index) => (
          <Link className="area-card" href={area.href} key={area.href}>
            <span className="area-number" aria-hidden="true">0{index + 1}</span>
            <span className="area-title">{area.label}</span>
            <span className="area-description">{area.description}</span>
            <span className="area-link">Open workspace</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
