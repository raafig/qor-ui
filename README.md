# QorUI

QorUI (pronounced “core UI”) is the foundation for a library of reusable website templates and visual systems. The repository combines a web workspace for developing and reviewing visual work with a typed registry that future tools can query.

This initial release intentionally ships with **no templates, blocks, visual families, page recipes, or compositions**. An empty registry is a supported state, not missing setup.

## Start locally

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. The main routes are `/`, `/experiments`, `/catalog`, and `/compositions`.

## Checks

```bash
npm run typecheck
npm run lint
npm test
npm run validate:registry
npm run build
```

## Repository map

- `app/` — routes, metadata, and global presentation
- `components/app-shell/` — stable application navigation and layout
- `components/registry-ui/` — catalog and empty-state presentation
- `experiments/` — source for future visual explorations
- `catalog/` — source packages for future validated templates
- `compositions/` — future full-page assemblies and tests
- `registry/entries.ts` — canonical registry source; currently an empty array
- `schemas/registry-entry.ts` — the initial runtime and TypeScript contract
- `lib/registry/` — deterministic loading and validation
- `registry/generated/` — reserved for derived registry artifacts if they become necessary
- `docs/` — architectural decisions and contribution guidance
- `tests/` — application-level foundation checks

## Add future work

Start unproven visual work in a dedicated folder under `experiments/`. When a template is reviewed and ready for distribution, place its owned source under `catalog/` and add one record to `registry/entries.ts`. Use a stable lowercase, hyphenated ID and a semantic version. The loader validates every record before the catalog renders.

Use `compositions/` for full-page combinations that test how proven pieces work together. A composition is not automatically a catalog template.

See [docs/architecture.md](docs/architecture.md) for the boundaries and deferred capabilities.
