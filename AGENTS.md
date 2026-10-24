<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust

Single-package Next.js 16 app (App Router, `src/`). No test framework, no CI.

## Commands

- `npm run dev` — dev server with Turbopack
- `npm run lint` — bare `eslint`. Next 16 does not lint during `build`; run it separately.
- Typecheck with `npx tsc --noEmit` (there is no script for it).

## Next.js config surprises (next.config.ts)

- `cacheComponents` / `partialPrefetching` are currently **false** (toggled on and off before; check the file before relying on either — when `true`, uncached dynamic data must be inside `use cache` / Suspense or the build fails. Docs: `node_modules/next/dist/docs/` — directives `use-cache*`, guide `migrating-to-cache-components`).
- `reactCompiler: true`: React Compiler memoizes automatically. Do not add `useMemo`/`useCallback`/`React.memo` for render performance.
- `images.remotePatterns` allows **any https host** — destination card images come from an external API with arbitrary URLs.

## Tailwind v4 — CSS-first, no config file

- Theme tokens live in `src/app/globals.css` (`@theme inline`). `globals.css` imports `shadcn/tailwind.css` and `tw-animate-css` (shadcn is a runtime dep).
- Tailwind is loaded through the Turbopack rule in `next.config.ts`.

## shadcn/ui — "base-nova" style on @base-ui/react

- Components in `src/components/ui/*` are shadcn CLI output (schema in `components.json`). Primitives are `@base-ui/react`, **not** Radix: props and APIs differ from the Radix-based shadcn docs.
- Generate new components via the shadcn CLI rather than hand-writing; import alias `@/*` → `src/*` (tsconfig paths).

## App-specific code

- `src/lib/highlighter.tsx` + `src/hooks/use-highlighted-code.ts`: streaming shiki code highlighting. Only languages/aliases listed in `highlighter.tsx` are supported; grammars lazy-load. Nothing consumes them yet — `ui/code-block` is a plain container without highlighting.
- Most `src/components/ui/*` components are pre-installed but unused; `src/app/page.tsx` is still the empty create-next-app scaffold.
- Font is Josefin Sans via `next/font/google` in `layout.tsx` — not the create-next-app default (Geist).
