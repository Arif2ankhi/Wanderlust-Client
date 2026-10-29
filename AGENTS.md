<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust

Single-package Next.js 16 app (App Router, `src/`). Travel destination site with auth, bookings, and CRUD. No test framework, no CI.

## Commands

- `npm run dev` — dev server with Turbopack
- `npm run lint` — bare `eslint`. Next 16 does not lint during `build`; run it separately.
- Typecheck with `npx tsc --noEmit` (there is no script for it).

## Data & auth architecture (read this before touching data code)

- **The app does not talk to MongoDB for domain data.** Destinations, bookings, and featured lists are fetched from a separate backend API via `process.env.NEXT_PUBLIC_API_URL` (see `src/app/destinations/`, `src/components/booking/`, `src/components/*Dialog.tsx`). Mongo is used **only** by better-auth.
- Auth: better-auth with the JWT plugin + Mongo adapter in `src/lib/auth.ts` (db name hardcoded to `wanderlust`); client in `src/lib/auth-client.ts`; catch-all route `src/app/api/auth/[...all]/route.ts`. Token helpers: `getTokenFromServer.ts` / `getTokenFromClient.ts`.
- Route protection is `src/proxy.ts` (Next 16's replacement for `middleware.ts`), matching `/add-destination`, `/my-bookings`, `/destinations/:path*` and redirecting logged-out users to `/login`. It checks a session, not the JWT — there is no `config.matcher`-style optimization beyond the exported matcher.
- Required env vars (`.env` is gitignored; not present in fresh clones): `MONGODB_URI`, `BETTER_AUTH_URL`, `BETTER_AUTH_SECRET`, `NEXT_PUBLIC_API_URL`. The backend API is a separate codebase (historically `http://localhost:8000`).

## Next.js config surprises (next.config.ts)

- `cacheComponents` / `partialPrefetching` are currently **false** (toggled on and off before; check the file before relying on either — when `true`, uncached dynamic data must be inside `use cache` / Suspense or the build fails. Docs: `node_modules/next/dist/docs/` — directives `use-cache*`, guide `migrating-to-cache-components`).
- `reactCompiler: true`: React Compiler memoizes automatically. Do not add `useMemo`/`useCallback`/`React.memo` for render performance.
- `images.remotePatterns` allows **any https host** — destination images come from the external API with arbitrary URLs.

## Tailwind v4 — CSS-first, no config file

- Theme tokens live in `src/app/globals.css` (`@theme inline`). `globals.css` imports `shadcn/tailwind.css` and `tw-animate-css` (shadcn is a runtime dep).
- Tailwind is loaded through the Turbopack rule in `next.config.ts`.

## shadcn/ui — "base-nova" style on @base-ui/react

- Components in `src/components/ui/*` are shadcn CLI output (schema in `components.json`). Primitives are `@base-ui/react`, **not** Radix: props and APIs differ from the Radix-based shadcn docs.
- Generate new components via the shadcn CLI rather than hand-writing; import alias `@/*` → `src/*` (tsconfig paths).

## App-specific code

- `src/lib/highlighter.tsx` + `src/hooks/use-highlighted-code.ts`: streaming shiki code highlighting. Only languages/aliases listed in `highlighter.tsx` are supported; grammars lazy-load. Nothing consumes them yet — `ui/code-block` is a plain container without highlighting.
- Most `src/components/ui/*` components are pre-installed but unused.
- Pages: home (marketing sections), `/destinations`, `/destinations/[id]`, `/add-destination`, `/my-bookings`, `/login`, `/signup`. Root `layout.tsx` wraps everything in `Navbar` + `Footer`; `metadata` is still the create-next-app default text.
- Font is Josefin Sans via `next/font/google` in `layout.tsx` — not the create-next-app default (Geist).
