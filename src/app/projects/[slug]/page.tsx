import { notFound } from "next/navigation";
import { loadProjectBySlug } from "@/lib/projects";
import { buildProjectMetadata } from "@/lib/seo";
import { projects } from "@/data/project";
import ProjectGallery from "@/components/ProjectGallery";
import FadeScrollPane from "@/components/FadeScrollPane";
import { ProjectActions } from "@/components/ProjectActions";
import styles from "./project.module.scss";

// Next 16: params is a Promise in RSC — await it.
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = await loadProjectBySlug(slug).catch(() => null);
  if (!project) return {};
  return buildProjectMetadata({ frontMatter: { ...project, slug: project.slug } });
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const p = await loadProjectBySlug(slug).catch(() => null);
  if (!p) return notFound();

  return (
    <article className={styles.root}>
      <header className={styles.header}>
        <h1>{p.title}</h1>
        <p className={styles.summary}>{p.summary}</p>

        <ProjectActions project={{ links: p.links, slug: p.slug, ctaNotice: p.ctaNotice }} />

        {p.tags?.length ? (
          <ul className={styles.tags}>
            {p.tags.map((t) => (
              <li key={t}>
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className={styles.layout}>
        <FadeScrollPane stickyTop={140} heightOffset={160} fade={80} className={styles.scrollPane}>
          {p.problem ? (
            <section className={styles.card}>
              <h2>Problem</h2>
              <p>{p.problem}</p>
            </section>
          ) : null}

          {!!p.solution?.length && (
            <section className={styles.card}>
              <h2>Solution</h2>
              <ul className={styles.list}>
                {p.solution.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          )}

          {!!p.highlights?.length && (
            <section className={styles.card}>
              <h2>Highlights</h2>
              <ul className={styles.list}>
                {p.highlights.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          )}

          {!!p.results?.length && (
            <section className={styles.card}>
              <h2>Results</h2>
              <ul className={styles.list}>
                {p.results.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          )}
        </FadeScrollPane>

        <div className={styles.gallery}>
          <ProjectGallery screens={p.screens ?? []} />
        </div>
      </div>
    </article>
  );
}
