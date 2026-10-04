# Aman Sharma — portfolio

Next.js (App Router) · TypeScript · Tailwind CSS. No animation library: motion is CSS-only and disabled under `prefers-reduced-motion`.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Set `NEXT_PUBLIC_SITE_URL` to the production origin (used for metadata and JSON-LD).

## Content
All copy lives in `content/site.ts`. Items marked `VERIFY` are assumptions.
- A project with `draft: true` shows in dev only (with a checklist of missing fields) and is hidden in production builds.
- Sections with no data (e.g. `experience`) are not rendered.
- To add a case study, add a `Project` to `projects`; the route `/work/<slug>` is generated automatically.

## Structure
```
app/            layout, home page, /work/[slug] case study, icon
components/     Header, Section, ProjectRow, ExternalLink
content/site.ts all copy and links
```
