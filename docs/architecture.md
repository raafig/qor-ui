# Architecture and contribution notes

## Current boundary

QorUI has two concerns: a Next.js application for working with visual material and a typed registry for machine-readable template metadata. The application can render safely when the canonical registry contains no entries. UI code reads catalog data only through `loadRegistry`, keeping registry validation separate from presentation.

The registry contract is deliberately small. It records identity, display metadata, lifecycle status, broad category, source and optional preview locations, tags, and version. Fields should be added only after real templates demonstrate a repeated need.

## Content conventions

1. Create exploratory visual work under `experiments/<stable-id>/`.
2. Move reviewed, distributable template source into `catalog/<stable-id>/`.
3. Add its metadata once to `registry/entries.ts`.
4. Run the registry validation, type check, test, lint, and production build.
5. Use `compositions/<stable-id>/` for complete page tests without implying catalog readiness.

Directory README files preserve empty content areas and describe their intended ownership. They are documentation, not examples.

## Deliberately deferred

This phase does not include starter templates, registry generation, an installer CLI, AI selection, multi-framework packaging, database storage, authentication, analytics, upgrade synchronization, screenshots, or visual-regression testing. Those decisions should follow evidence from the first real experiments rather than precede it.

When visual work exists, screenshot or visual-regression checks can be added around stable catalog entries without changing the registry boundary.
