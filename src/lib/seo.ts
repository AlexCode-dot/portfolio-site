import type { Metadata } from "next";

type ProjectFrontMatter = {
  title: string;
  summary: string;
  cover?: string;
  slug: string;
};

type ProjectSeoInput = {
  frontMatter: ProjectFrontMatter;
};

export function buildProjectMetadata({ frontMatter }: ProjectSeoInput): Metadata {
  const { title, summary, cover, slug } = frontMatter;
  const url = `/projects/${slug}`;

  return {
    title,
    description: summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: summary,
      url,
      images: cover ? [{ url: cover, width: 1200, height: 630 }] : undefined,
    },
  };
}
