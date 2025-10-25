import Link from "next/link";
import type { Project } from "@/data/project";
import styles from "@/styles/components/project-card.module.scss";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const tags = project.tags?.slice(0, 6) ?? [];
  const hasCover = Boolean(project.cover);

  return (
    <Link href={`/projects/${project.slug}`} className={`${styles.card} fade-in`}>
      <div className={styles.media} aria-hidden={!hasCover}>
        {hasCover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.cover} alt="" loading="lazy" />
        ) : (
          <div className={styles.placeholder}>🚀</div>
        )}
      </div>

      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        {tags.length ? (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );
}
