# 🌍 Wanderlust

A travel destination platform where users can explore destinations, make bookings, and manage listings — built with Next.js 16, better-auth, and MongoDB.

## 🔗 Live Links

| | Link |
|---|---|
| **Client (Frontend)** | https://wanderlust-client-nine-lake.vercel.app |
| **Server (Backend API)** |https://wanderlast-server-dusky.vercel.app|

> The frontend expects a separate backend API. Locally it defaults to `http://localhost:8000` unless `NEXT_PUBLIC_API_URL` is set.

## ✨ Key Features

- **Authentication** — email/password sign up & login with better-auth (JWT plugin)
- **Protected routes** — `/add-destination`, `/my-bookings`, and `/destinations/*` redirect logged-out users to `/login` via `src/proxy.ts`
- **Destinations** — browse all destinations with a details page per destination
- **Listings management** — add, edit, and delete destinations (dialog-based forms)
- **Bookings** — book a destination and view/cancel your bookings in *My Bookings*
- **Rich home page** — banner, featured destinations carousel, testimonials, "why choose us", and CTA sections
- **Modern UI** — shadcn/ui components (base-nova style on @base-ui/react), Lucide icons, dark-mode ready theme tokens
- **Streaming code highlighting** — shiki-powered highlighter in `src/lib/highlighter.tsx` (lazy-loads grammars)

## 🛠️ Tech Stack

**Frontend**
- [Next.js 16](https://nextjs.org) — App Router, React Server Components, Turbopack
- [React 19](https://react.dev) with the React Compiler enabled
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-first config (`@theme inline` in `globals.css`)
- [shadcn/ui](https://ui.shadcn.com) (base-nova style) · [@base-ui/react](https://base-ui.com) · [Lucide](https://lucide.dev)
- [shiki](https://shiki.style) — code syntax highlighting

**Backend / Auth**
- [better-auth](https://www.better-auth.com) — sessions, JWT plugin, Mongo adapter
- [MongoDB](https://www.mongodb.com) — used by better-auth for users & sessions
- External REST API for destinations/bookings data (`NEXT_PUBLIC_API_URL`)

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment** — create a `.env` file in the project root:

   ```bash
   # Backend API (destinations, bookings)
   NEXT_PUBLIC_API_URL=http://localhost:8000

   # better-auth
   MONGODB_URI=your-mongodb-connection-string
   BETTER_AUTH_URL=http://localhost:3000
   BETTER_AUTH_SECRET=your-random-secret
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
src/
├── app/                 # App Router pages & API routes
│   ├── api/auth/        # better-auth catch-all handler
│   ├── destinations/    # listing + [id] details
│   ├── add-destination/ # create listing (protected)
│   ├── my-bookings/     # user bookings (protected)
│   ├── login/ signup/   # auth pages
│   └── layout.tsx       # Navbar + Footer shell, Josefin Sans font
├── components/          # home sections, booking, dialogs, shadcn ui/
├── hooks/               # use-highlighted-code, use-mobile
├── lib/                 # auth, auth-client, token helpers, types, utils
└── proxy.ts             # route protection (Next 16 middleware)
```
