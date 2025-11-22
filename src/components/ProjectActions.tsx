"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/data/project";
import styles from "@/app/projects/[slug]/project.module.scss";

type ProjectActionsProps = {
  project: Pick<Project, "links" | "slug" | "ctaNotice">;
};

export function ProjectActions({ project }: ProjectActionsProps) {
  const { links, slug, ctaNotice } = project;
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [noticeSource, setNoticeSource] = useState<string | null>(null);

  const liveLink = useMemo(
    () => links?.find((link) => link.label.toLowerCase().includes("live")),
    [links]
  );
  const githubLink = useMemo(
    () => links?.find((link) => link.label.toLowerCase().includes("github")),
    [links]
  );

  if (!links?.length) {
    return null;
  }

  const openNotice = (sourceLabel: string) => {
    setNoticeSource(sourceLabel);
    setIsNoticeOpen(true);
  };

  // Clearbook should link directly to its live site; keep notice available for other projects if needed.
  const shouldShowNotice = Boolean(ctaNotice && slug !== "clearbook");

  return (
    <>
      <div className={styles.actions}>
        {liveLink ? (
          shouldShowNotice ? (
            <button
              type="button"
              className={`${styles.cta} ${styles.primary}`}
              onClick={() => openNotice(liveLink.label)}
            >
              ▶ {liveLink.label}
            </button>
          ) : (
            <Link
              href={liveLink.href}
              target="_blank"
              rel="noreferrer"
              className={`${styles.cta} ${styles.primary}`}
            >
              ▶ {liveLink.label}
            </Link>
          )
        ) : null}

        {githubLink ? (
          shouldShowNotice ? (
            <button
              type="button"
              className={`${styles.cta} ${styles.outline}`}
              onClick={() => openNotice(githubLink.label)}
            >
              ⎇ {githubLink.label}
            </button>
          ) : (
            <Link
              href={githubLink.href}
              target="_blank"
              rel="noreferrer"
              className={`${styles.cta} ${styles.outline}`}
            >
              ⎇ {githubLink.label}
            </Link>
          )
        ) : null}
      </div>

      {shouldShowNotice && ctaNotice ? (
        <NoticeModal
          isOpen={isNoticeOpen}
          onClose={() => setIsNoticeOpen(false)}
          title={ctaNotice.title}
          body={ctaNotice.body}
          contact={ctaNotice.contact}
          triggerSource={noticeSource}
        />
      ) : null}
    </>
  );
}

type NoticeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: string[];
  contact?: { label: string; href: string };
  triggerSource: string | null;
};

function NoticeModal({ isOpen, onClose, title, body, contact, triggerSource }: NoticeModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.noticeOverlay} role="dialog" aria-modal="true" aria-labelledby="project-notice-title">
      <div className={styles.noticeBackdrop} onClick={onClose} />
      <div className={styles.noticeContent}>
        <header className={styles.noticeHeader}>
          <p className={styles.noticeBadge}>
            {triggerSource ? `${triggerSource} temporarily unavailable` : "Access by request"}
          </p>
          <h2 id="project-notice-title">{title}</h2>
        </header>

        <div className={styles.noticeBody}>
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <footer className={styles.noticeFooter}>
          {contact ? (
            <a href={contact.href} className={styles.noticeContact}>
              {contact.label}
            </a>
          ) : null}
          <button type="button" className={styles.noticeClose} onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
