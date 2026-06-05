# cxconnect.ai marketing site

TanStack Start app for the public marketing site. Uses **pnpm** as the package manager.

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 10.x (or enable via Corepack: `corepack enable`)

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000). Use **pnpm only** — do not run `npm install`, which can leave a second React copy on disk and break SSR with a blank `{"status":500,"message":"HTTPError"}` response.

If port 3000 is already taken, stop the old process (`lsof -i :3000`) before starting dev again. Vite is configured with `strictPort` so it will not silently move to another port.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build (Nitro output in `.output/`) |
| `pnpm preview` | Preview production build |
| `pnpm test` | Run Vitest |
| `pnpm lint` | Biome lint |
| `pnpm format` | Biome format |
| `pnpm check` | Biome lint + format check |

## Building for production

```bash
pnpm build
node .output/server/index.mjs
```

Deploy the `.output/` directory to your host (Render, Fly.io, VPS, etc.) and run the server command above.

For host-specific Nitro presets and tuning, see [Nitro deploy docs](https://v3.nitro.build/deploy).

## Shadcn UI

Add components with:

```bash
pnpm dlx shadcn@latest add <component>
```

## PostHog

1. Create a project at [posthog.com](https://posthog.com)
2. Set `VITE_POSTHOG_KEY` in `.env.local`
3. Optionally set `VITE_POSTHOG_HOST` (e.g. `https://eu.i.posthog.com`)

## Routing

File-based routes live in `src/routes/`. See [TanStack Router](https://tanstack.com/router) and [TanStack Start](https://tanstack.com/start) docs.

## Styling

[Tailwind CSS v4](https://tailwindcss.com/) with tokens from `DESIGN.md` in `src/styles.css`.

## Learn more

- [TanStack documentation](https://tanstack.com)
- [TanStack Start](https://tanstack.com/start)
