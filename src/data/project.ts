export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover?: string;
  tags: string[];
  period?: string;
  links?: { label: string; href: string }[];
  problem?: string;
  solution?: string[];
  highlights?: string[];
  results?: string[];
  screens?: { src: string; alt?: string }[];
  ctaNotice?: {
    title: string;
    body: string[];
    contact?: { label: string; href: string };
  };
};

export const projects: Project[] = [
  {
    slug: "wordle",
    title: "Wordle Game - Full-stack with Sessions & Leaderboard",
    summary:
      "Wordle-style game with customizable rules, session-persisted state, and a MongoDB-backed leaderboard. Fully tested with Jest & Cypress.",
    cover: "/images/projects/wordle/cover.png",
    tags: ["React", "Vite", "SCSS", "Node.js", "Express", "TypeScript", "MongoDB", "Jest", "Cypress"],
    period: "2024–2025",
    links: [
      { label: "Live site", href: "https://wordle-game-pymh.onrender.com/" },
      { label: "GitHub", href: "https://github.com/AlexCode-dot/Wordle-Game" },
    ],
    problem:
      "Recreate Wordle with configurable rules and a persistent leaderboard-while preventing cheating and preserving game progress across reloads.",
    solution: [
      "Session-based game state: phase, settings, guesses restored on reload",
      "Backend-only feedback generation (no leaking the correct word to the client)",
      "Highscore submission on win (only name + result posted)",
      "Language & word source config: English/Swedish, local JSON or remote API via env (with fallback)",
      "Filterable leaderboard (word length, unique letter rule)",
    ],
    highlights: [
      "Clean separation: Express controllers, session helpers, React hooks (useGameLogic, useGuessLogic)",
      "TypeScript on backend; Jest + Supertest for API; Cypress for E2E",
      "Responsive SCSS UI with accessible feedback (green/yellow/red tiles)",
    ],
    results: [
      "Robust against reloads/closing tab thanks to sessions",
      "Flexible deployment via WORD_SOURCE env (local/remote, TXT/JSON)",
    ],
    screens: [
      { src: "/images/projects/wordle/settings.png", alt: "Settings screen" },
      { src: "/images/projects/wordle/play.png", alt: "Gameplay board" },
      { src: "/images/projects/wordle/info.png", alt: "Game info modal" },
      { src: "/images/projects/wordle/lost.png", alt: "Lose screen" },
      { src: "/images/projects/wordle/won.png", alt: "Win screen" },
      { src: "/images/projects/wordle/leaderboard.png", alt: "Leaderboard" },
    ],
  },

{
  slug: 'kino',
  title: 'KINO - Cinema Admin & Booking (Next.js + MongoDB)',
  summary:
    'Full-stack Next.js cinema app with a powerful Admin panel: import movies from OMDb, create/manage screenings, rooms, users, and bookings. Cloud deployed on Vercel with MongoDB Atlas.',
  cover: '/images/projects/kino/admin-overview.png', // <- use an admin screenshot as the card cover
  tags: [
    'Next.js',
    'App Router',
    'React',
    'MongoDB',
    'Mongoose',
    'API Routes',
    'Sass',
    'Jest',
  ],
  period: '2024–2025',
  links: [
    { label: 'Live demo', href: 'https://kino-next-js.vercel.app' },
    { label: 'GitHub', href: 'https://github.com/AlexCode-dot/KINO-NextJS' },
  ],

  // Keep "problem" succinct—this page is about the admin.
  problem:
    'Operations teams need a single place to curate films, configure rooms and seat maps, schedule screenings, and resolve bookings—without dev involvement.',

  // Put admin capabilities first in Solution
  solution: [
    'Admin Dashboard focused UX: tabs for Overview, Bookings, Import, Screenings, Rooms, Users',
    'OMDb integration: import movies by title (metadata pull) to bootstrap the catalog',
    'Screenings CRUD: date/time picker, film/room selection, expired screening highlighting',
    'Room Builder: create rooms with rows, seat counts, and wheelchair seats; live seat map',
    'Bookings management: filter by user/film/date/room; view/edit seats; cancellation flow',
    'Users CRUD: create accounts, toggle admin, delete users',
    'Next.js App Router + API Routes; MongoDB Atlas + Mongoose models',
  ],

  // “Highlights” doubles down on admin flows and DX/deploy story
  highlights: [
    'Role-based admin flows kept separate from public site navigation',
    'Preview deployments for each PR on Vercel; production deploy on main',
    'Environment-driven config (MONGODB_URI, OMDB_API_KEY, …) via Vercel dashboard',
    'Fast local dev with Turbopack; tests with Jest (incl. ESM mocks)',
    'Clean file layout under /app with modular components and SCSS modules',
  ],

  results: [
    'Non-technical staff can run the cinema: import films, configure rooms, schedule shows',
    'Fully cloud-hosted (Vercel + MongoDB Atlas) — no local setup required for usage',
  ],

  // Gallery: use your admin screenshots
  screens: [
    { src: '/images/projects/kino/admin-overview.png',        alt: 'Admin – Overview' },
    { src: '/images/projects/kino/admin-bookings.png',        alt: 'Admin – Manage bookings' },
    { src: '/images/projects/kino/admin-edit-seats.png',     alt: 'Admin – Seat selection/edit' },
    { src: '/images/projects/kino/admin-movies.png',          alt: 'Admin – Import movie from OMDb' },
    { src: '/images/projects/kino/admin-confrim-modal.png',  alt: 'Admin – Delete confirmation' },
    { src: '/images/projects/kino/admin-screenings.png',alt: 'Admin – Create screening' },
    { src: '/images/projects/kino/admin-rooms.png',     alt: 'Admin – Create room' },
    { src: '/images/projects/kino/admin-room-preview.png',     alt: 'Admin – Room layout preview' },
    { src: '/images/projects/kino/admin-users.png',           alt: 'Admin – Manage users & roles' },
  ],
},

{
  "slug": "clearbook",
  "title": "Clearbook — Multi-tenant Booking SaaS",
  "summary": "Flexible multi-tenant booking platform with customizable services, rotating staff schedules, and concurrency-safe booking APIs.",
  "cover": "/images/projects/clearbook/cover.png",
  "tags": ["Next.js", "TypeScript", "MongoDB", "Redis", "NextAuth", "Cypress"],
  "period": "2024–2025",
  "links": [
    { "label": "Live demo", "href": "https://clearbook.app" },
    { "label": "GitHub", "href": "https://github.com/yourname/clearbook" }
  ],
  "problem": "Owner-operators juggle spreadsheets and DMs, inviting double-bookings and messy handoffs between staff.",
  "solution": [
    "Tenant-isolated data layer in MongoDB with owner/admin/staff RBAC, theming, and locale selection for both dashboard and widget.",
    "Service catalog lets admins define pricing, slot granularity, categories, and assign staff with per-staff duration/price/buffer overrides.",
    "Availability workspace combines a weekly planner, multi-week patterns, presets, and exceptions so teams publish polished schedules—drafts stay private until approved.",
    "Public booking API enforces Idempotency-Key headers, honeypot spam checks, and unique bucket indexes to prevent overlapping reservations.",
    "Redis-backed availability cache tagged per tenant/service/day with automatic invalidation on create, reschedule, or cancel.",
    "Embeddable widget at /embed/[tenant] with ?theme overrides, localized stepper flow, and service discovery backed by the same APIs the dashboard uses."
  ],
  "highlights": [
    "Staff-service join model supports per-person duration, buffer, and pricing overrides that feed straight into scheduling and booking validation.",
    "Weekly planner tracks drafts/publish state, surfaces availability stats, and lets admins apply saved presets across rotating patterns in seconds.",
    "Edge middleware applies per-IP rate limiting before public writes so retries are safe, and repeat requests replay the original booking payload.",
    "Cypress covers the customer booking journey while node:test suites guard availability math; GitHub Actions run typecheck, build, and tests on every push."
  ],
  "results": [
    "Draft/publish workflow plus Redis tag invalidation keeps schedule edits isolated until approval, then pushes fresh availability without downtime.",
    "Closed beta tenants can theme both dashboard and widget in-app, eliminating custom CSS hand-offs while keeping brand consistency."
  ],
  "ctaNotice": {
    "title": "Private Preview Available",
    "body": [
      "Clearbook is currently in a closed beta while I polish tenant provisioning and billing.",
      "I’m happy to provide a guided demo or share a short walkthrough recording on request."
    ],
    "contact": {
      "label": "Email me at alle7000.andersson@gmail.com",
      "href": "mailto:alle7000.andersson@gmail.com"
    }
  }
}


];
