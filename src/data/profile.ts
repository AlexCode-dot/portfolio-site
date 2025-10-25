export type HeroContent = {
  overline: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
};

export const heroContent: HeroContent = {
  overline: "Alexander Andersson",
  title: "Software Engineer",
  subtitle: "Building elegant solutions to complex problems.",
  cta: { label: "View My Work", href: "/#projects" },
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export type Skill = {
  name: string;
  description: string;
};

export const skills: Skill[] = [
  { name: "TypeScript & JavaScript", description: "Modern ES, type-safe full-stack patterns" },
  { name: "Next.js & React", description: "App Router, RSC, SSR/ISR, hooks, SCSS modules" },
  { name: "Backend (Node.js/Express)", description: "Controllers/services, validation, RBAC, sessions/JWT" },
  { name: "Databases", description: "MongoDB Atlas, Mongoose, indexes, schema design (Redis ready)" },
  { name: "APIs", description: "REST design, idempotency keys, rate limiting, error handling" },
  { name: "Testing", description: "Jest unit/integration, Cypress E2E, CI-gated merges" },
  { name: "DevOps & CI/CD", description: "Vercel, GitHub Actions, preview deploys, env management" },
  { name: "Architecture", description: "Multi-tenant theming, session persistence, modular code" },
  { name: "Security", description: "Auth flows, secure cookies, input sanitization, honeypots" },
  { name: "UX & Accessibility", description: "Responsive layouts, keyboard-friendly UI, a11y basics" },
];


export type ContactLink = {
  label: string;
  href: string;
};

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:alle7000.andersson@gmail.com" },
  { label: "GitHub", href: "https://github.com/AlexCode-dot" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alexander-andersson-43a6391a5/" },
];
