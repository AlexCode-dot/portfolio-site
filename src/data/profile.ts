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
  { name: "TypeScript", description: "Node.js, Next.js, full-stack patterns" },
  { name: "Databases", description: "MongoDB, Redis, schema design" },
  { name: "Testing", description: "Jest, Cypress, end-to-end pipelines" },
  { name: "DevOps", description: "CI/CD automation, Docker, scaling" },
  { name: "Frontend", description: "React, SCSS, accessible UI" },
  { name: "APIs", description: "REST, resiliency, idempotent flows" },
];

export type ContactLink = {
  label: string;
  href: string;
};

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:your.email@example.com" },
  { label: "GitHub", href: "https://github.com/AlexCode-dot" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
];
