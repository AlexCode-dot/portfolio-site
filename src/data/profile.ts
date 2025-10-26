export type HeroContent = {
  overline: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  resume: {
    href: string;
    downloadLabel: string;
    previewLabel: string;
    modalTitle: string;
    downloadFileName: string;
  };
};

export const heroContent: HeroContent = {
  overline: "Alexander Andersson",
  title: "Software Engineer",
  subtitle: "Crafting scalable, user-focused applications with clean architecture and modern tech.",
  cta: { label: "View My Work", href: "/#projects" },
  resume: {
    href: "/CV(English) - 2025 (software engineer).pdf",
    downloadLabel: "Download Resume",
    previewLabel: "Preview Online",
    modalTitle: "Resume — Alexander Andersson",
    downloadFileName: "Alexander-Andersson-CV-2025.pdf",
  },
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
  { name: "Next.js & React", description: "App Router, RSC/SSR/ISR, hooks, SCSS modules" },
  { name: "Node.js & Express", description: "Controllers/services, validation, sessions/JWT, RBAC" },

  { name: "Java & Spring Boot", description: "REST APIs, DI, layered architecture, testing" },

  { name: "Databases (NoSQL & SQL)", description: "MongoDB Atlas/Mongoose, indexes; SQL fundamentals & schema design" },
  { name: "Caching & Performance", description: "Redis, rate limiting, idempotency keys, p95/p99 thinking" },

  { name: "APIs & Integrations", description: "REST design, error contracts, external APIs (e.g., OMDb)" },
  { name: "Testing", description: "Jest, Supertest, Cypress E2E, CI-gated test pipelines" },

  { name: "DevOps & CI/CD", description: "Vercel, GitHub Actions, environment configs, preview deploys" },
  { name: "Containers", description: "Dockerizing services, local parity, image/version hygiene" },

  { name: "Version Control", description: "Git branching, PR reviews, rebasing, protected main, conventional commits" },
  { name: "Agile / Scrum", description: "Sprints, planning, standups, retros, iterative delivery" },
  { name: "Team Practices", description: "Code reviews, shared repo standards, CI-enforced merging" },

  { name: "Architecture", description: "Multi-tenant SaaS, session persistence, modular/clean code" },
  { name: "Security", description: "OWASP basics, input sanitization, secure cookies, auth flows" },
  { name: "UX & Accessibility", description: "Responsive layouts, keyboard navigation, a11y basics" },
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
