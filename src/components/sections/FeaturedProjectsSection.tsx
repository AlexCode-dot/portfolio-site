import Link from "next/link";
import type { Project } from "@/data/project";
import { ProjectCard } from "@/components/ProjectCard";
import styles from "./FeaturedProjectsSection.module.scss";

type Props = {
  projects: Project[];
};

export function FeaturedProjectsSection({ projects }: Props) {
  if (!projects.length) return null;

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <header className="fade-in">
        <p className={styles.kicker}>Featured Work</p>
        <h2 id="projects-title">Projects</h2>
        <p className={styles.lead}>
          Selected builds that showcase product thinking, durable architecture, and polished UX.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <footer className="fade-in">
        <Link href="/projects" className={styles.viewAll}>
          Browse all projects
          <span aria-hidden> →</span>
        </Link>
      </footer>
    </section>
  );
}
