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
    slug: 'clearbook',
    title: 'Clearbook — Multi-tenant Booking SaaS',
    summary:
      'Full-stack booking platform where service businesses run their schedules, staff, and customer bookings from one white-label workspace plus an embeddable public widget.',
    cover: '/images/projects/clearbook/cover.png',
    tags: [
      'Next.js 14',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'Redis',
      'NextAuth',
      'Stripe Connect',
      'SCSS Modules',
      'Cypress',
      'GitHub Actions'
    ],
    period: '2024–2025',
    links: [
      { label: 'Live demo', href: 'https://clearbook.app' },
      { label: 'GitHub', href: 'https://github.com/AlexCode-dot/clearbook-app' }
    ],
    problem:
      'Owner-operators juggle spreadsheets, DMs, and ad-hoc payment links—leading to double-bookings, inconsistent availability, and zero insight into how busy the team truly is.',
    solution: [
      'Tenant-isolated data layer with owner/admin/staff RBAC, theme + locale controls, and a demo sandbox that seeds a full account with sample data.',
      'Service catalog supports categories, slot length, tiered pricing, plus per-staff overrides for duration, price, buffers, and default availability.',
      'Availability workspace combines a weekly planner, rotating presets, drafts/publish workflow, exceptions, and stats so teams can refine schedules before going live.',
      'Public booking experience ships as a hosted page and embeddable widget at /embed/[tenant], sharing the same APIs, translations, and theming variables as the admin.',
      'Stripe Connect (Express) onboarding with fee education modal, automatic application fees, reverse transfers for refunds, and webhook handling for payouts/alerts.',
      'Redis-backed availability cache tagged per tenant/service/day for instant slot lookups with automatic invalidation on create/reschedule/cancel operations.',
      'Booking API enforces Idempotency-Key headers, honeypot spam checks, and unique compound indexes to keep concurrent requests from creating duplicate reservations.'
    ],
    highlights: [
      'Next.js App Router + API Routes with typed server actions, shared Zod schemas, and edge middleware for IP-based rate limiting.',
      'Node:test suites cover bookings, availability math, Stripe webhooks/checkout, and tenant tools; Cypress runs the entire customer booking journey.',
      'GitHub Actions pipeline runs lint, type-check, unit/integration tests, and cleanup cron scripts prior to deploy.',
      'Admin UI built from modular feature folders (services, staff, availability, bookings, analytics) with SCSS modules + CSS variables for tenant theming.',
      'Demo launcher + cleanup jobs automatically provision, expire, and prune sandbox tenants so prospects can explore safely.'
    ],
    results: [
      'Keeps schedules consistent thanks to draft/publish workflows plus automatic cache invalidation when admins push updates.',
      'Stripe Connect payouts already account for processing fees, so businesses see predictable transfers without manual reconciliation.',
      'Closed beta tenants can embed the widget, localize copy, and theme both admin + public experiences without touching CSS.'
    ],
    screens: [
      { src: '/images/projects/clearbook/commercial-hero.png', alt: 'Marketing landing page with demo CTA' },
      { src: '/images/projects/clearbook/services-dashboard.png', alt: 'Admin services catalog with staff overrides' },
      { src: '/images/projects/clearbook/availability-dashboard.png', alt: 'Availability planner with presets and publish controls' },
      { src: '/images/projects/clearbook/staff-dashboard.png', alt: 'Staff hub showing roles, working hours, and assignment status' },
      { src: '/images/projects/clearbook/bookings-dashboard.png', alt: 'Bookings table with filters, badges, and summary stats' },
      { src: '/images/projects/clearbook/overview-dashboard.png', alt: 'Overview dashboard with KPIs and card highlights' },
      { src: '/images/projects/clearbook/booking-widget-1.png', alt: 'Public widget with themed service discovery' },
      { src: '/images/projects/clearbook/booking-widget-2.png', alt: 'Booking stepper showing slot selection and timezone handling' },
      { src: '/images/projects/clearbook/commercial-pricing.png', alt: 'Checkout page with pricing tiers and CTA' },
      { src: '/images/projects/clearbook/settings-1-dashboard.png', alt: 'Theme and branding controls for the tenant workspace' }
    ],
    ctaNotice: {
      title: 'Private Preview Available',
      body: [
        'Clearbook is currently in a closed beta while I polish tenant provisioning and billing.',
        'I’m happy to provide a guided demo or share a short walkthrough recording on request.'
      ],
      contact: {
        label: 'Email me at alle7000.andersson@gmail.com',
        href: 'mailto:alle7000.andersson@gmail.com'
      }
    }
  },
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
];
