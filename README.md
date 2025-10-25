## Alexander Andersson — Portfolio

Modern personal site built with Next.js 16 and React 19. The layout focuses on strong first impressions, SEO-friendly server components, and data-driven sections that make it easy to grow the portfolio over time.

### Highlights

- **SSR by default** – all pages use server components for performance and SEO.
- **Section modules** – home sections live in `src/components/sections` with paired `.module.scss`.
- **Project library** – centralised data in `src/data/project.ts`, served through `src/lib/projects.ts`.
- **Scoped styling** – global file only defines tokens + resets; everything else is a CSS Module.
- **Interactive detail pages** – sticky gallery, fade scroll pane, keyboard navigation for screenshots.

### Tech Stack

- Next.js 16 (App Router) + React 19
- TypeScript, SCSS Modules
- ESLint (Next config)

---

## Getting Started

```bash
npm install
npm run dev
# http://localhost:3000
```

### Useful Scripts

- `npm run lint` – lint whole project.
- `npm run build` – production build.
- `npm run start` – start built app.

---

## Content Management

### Projects

1. Add or edit entries in `src/data/project.ts`.
2. If you need screenshots, drop them under `public/images/projects/<slug>/`.
3. Each project can define: `summary`, `tags`, `problem`, `solution`, `highlights`, `results`, `links`, and `screens`.

Home page pulls featured projects via `getFeaturedProjects()`, while `/projects` renders the full list.

### Hero, Skills & Contact

All homepage copy and nav links live in `src/data/profile.ts`.

- Update hero headline/CTA via `heroContent`.
- Tweak nav items with `navLinks`.
- Maintain skills cards with `skills`.
- Contact links power the call-to-action buttons in the footer section.

---

## Project Structure

```
src/
  app/
    page.tsx                     # Home (SSR)
    projects/                    # Projects index + dynamic detail route
  components/
    Nav.tsx, ScrollEffects.tsx   # Navigation + smooth scroll helpers
    sections/                    # Home sections + scoped styles
  data/                          # Structured content (projects, profile)
  lib/                           # Thin server-side helpers
  styles/                        # Global tokens + component styles
public/
  images/projects/<slug>/        # Optimised portfolio imagery
```

---

## Deployment

Deploy to Vercel or any Next.js-compatible host.

```bash
npm run build
npm run start
```

Remember to set `NEXT_PUBLIC_SITE_URL` for accurate metadata in production.

---

## Contributing / Customising

This repository is tailored to Alexander Andersson’s portfolio, but the structure should be easy to adapt:

1. Fork or clone the repo.
2. Update data in `src/data`.
3. Adjust theme tokens in `src/styles/globals.scss`.
4. Commit with `--no-gpg-sign` if you do not have signing set up.

Issues and PRs are welcome if you notice something that can be improved. Enjoy building! 🚀
