# Conway M. Benson — Developer Portfolio

Personal portfolio built with React, Vite, and CSS, with Tailwind base styles. Hosted at [conwaymbenson-dev.vercel.app](https://conwaymbenson-dev.vercel.app/).

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

Build with `npm run build`; inspect the build with `npm run preview`.

## Update content

- `src/data/projects.js`: featured projects, coursework, links, and skill groups.
- `src/App.jsx`: sections, interactive filters, and project image cards with full-size image links.
- `src/App.css` and `src/index.css`: responsive styles, focus states, and reduced-motion support.
- Typography: Gabriela for headings and Old Standard TT for body text, loaded through the Google Fonts stylesheet in `index.html`.
- `public/resume.pdf`: the current resume download; replace this file to update it without changing its URL.
- `index.html`: page title, description, canonical URL, and social metadata.
- `public/projects/`: project-specific artwork, official branding, and screenshots optimized as WebP. See `docs/project-images.md` for their sources.

The main branch is connected to the existing Vercel project. Preserve that connection and URL when updating this repository.

## Content notes

The October 2026 refresh features Student on the Go, Waycon Daily, and Training Hub / AppBar, with GoalTracker, Little Lemon coursework, and this portfolio as earlier work. Public repositories and demos are linked where available. Private repositories are identified without inaccessible code links.

Descriptions distinguish current implementation, active development, and storage or access limitations. Student on the Go uses browser-local persistence; Waycon Daily calendar checks use the last synced data. Mobile packaging is implementation work, not an app-store release.
