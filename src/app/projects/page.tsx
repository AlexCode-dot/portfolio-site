import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import styles from "./projects.module.scss";

export const metadata = { title: "Projects" };

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <header className={`${styles.header} fade-in`}>
        <p className={styles.kicker}>Archive</p>
        <h1 id="projects-heading">Project Library</h1>
        <p className={styles.lead}>
          A growing collection of SaaS experiments, UX prototypes, and tooling work. Each project leans on strong
          foundations: clear scope, measurable outcomes, and thoughtful polish.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
