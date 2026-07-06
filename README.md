# Mostafa Ghazalah Portfolio

A bilingual, architecture-focused portfolio for Mostafa Ghazalah, Backend Architect & Senior Backend Engineer.

## Architecture

This portfolio is built with:

- React 19
- TanStack Start
- TanStack Router (file-based routing under `src/routes/`)
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

It is a server-rendered TanStack Start application (not a classic SPA with an `index.html` rewrite).

## Features

- English and Arabic
- LTR and RTL support
- Dark and Light themes
- Responsive layouts
- Production project case studies
- Architecture diagrams
- Technical system flows
- Restrained motion system
- Static portfolio content
- Remote-first professional positioning

## Contact

- Email: deshaagazala@gmail.com
- WhatsApp: https://wa.me/201005115908
- LinkedIn: https://www.linkedin.com/in/mostafa-ghazalah-5772b51b1
- GitHub: https://github.com/Boghaa
- Location: Tanta, Egypt

## Development

The repository is configured for Bun (see `bun.lock`), but npm also works.

```bash
bun install       # or: npm install
bun run dev       # or: npm run dev
bun run build     # or: npm run build
bun run preview   # or: npm run preview
```

## Deployment (Vercel)

The project uses TanStack Start with the Nitro Vercel preset. `vite build`
emits a Vercel-ready build to `.vercel/output/` — no SPA `index.html`
rewrite is used or needed.

On Vercel:

1. Import the GitHub repository.
2. Framework preset: **Other** (Vercel auto-detects the Nitro output).
3. Install command: `npm install` (or `bun install`).
4. Build command: `npm run build` (or `bun run build`).
5. Output: leave default — the Nitro Vercel preset writes `.vercel/output/`.
6. Environment variables: none required for the portfolio.

Deep links, refresh, and back/forward navigation are handled by TanStack
Router's server output — do not add a `vercel.json` rewrite to
`/index.html`.