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
      "Recreate Wordle with configurable rules and a persistent leaderboard—while preventing cheating and preserving game progress across reloads.",
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
    slug: "clearbook",
    title: "Clearbook — Multi-tenant Booking SaaS",
    summary: "Idempotent APIs, anti-double-booking, tenant themes, and an embeddable widget.",
    cover: "/images/projects/clearbook/cover.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "Redis", "Jest", "Cypress"],
    period: "2024–2025",
    links: [
      { label: "Live demo", href: "https://clearbook.app" },
      { label: "GitHub", href: "https://github.com/yourname/clearbook" },
    ],
    problem: "Small businesses risk double-bookings and scattered tools.",
    solution: [
      "Multi-tenant model with theme override (?theme)",
      "Idempotent booking API (Idempotency-Key)",
      "Overlap checks + unique bucket index",
      "Public embed widget /embed/[slug]",
    ],
    highlights: ["Rescheduling via PATCH with overlap protection", "Bruno tests validate idempotency in CI"],
    results: ["p95 API < 180ms local", "Lighthouse 95+ on detail pages"],
  },
];
