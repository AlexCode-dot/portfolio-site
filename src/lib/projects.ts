import { projects, type Project } from "@/data/project";

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.slice(0, 3);
}

export async function loadProjectBySlug(slug: string): Promise<Project> {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Project not found: ${slug}`);
  return project;
}
