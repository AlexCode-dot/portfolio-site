"use client";

import Link from "next/link";
import type { SVGProps } from "react";
import { useEffect, useId, useRef, useState } from "react";
import { heroContent } from "@/data/profile";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  const { overline, title, subtitle, cta, resume } = heroContent;
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogTitleId = useId();
  const encodedResumeHref = encodeURI(resume.href);
  const resumePreviewHref = `${encodedResumeHref}#toolbar=0&navpanes=0&zoom=page-width`;

  useEffect(() => {
    if (!isResumeOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsResumeOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResumeOpen]);

  const openResumeModal = () => setIsResumeOpen(true);
  const closeResumeModal = () => setIsResumeOpen(false);

  return (
    <section className={styles.hero} id="home" aria-labelledby="home-title">
      <div className={`${styles.content} fade-in`}>
        <p className={styles.overline}>{overline}</p>
        <h1 id="home-title">{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <a
            href={encodedResumeHref}
            download={resume.downloadFileName}
            className={`${styles.button} ${styles.primaryButton}`}
            aria-label={`${resume.downloadLabel} (${resume.downloadFileName})`}
          >
            <DownloadIcon className={styles.buttonIcon} aria-hidden="true" />
            <span>{resume.downloadLabel}</span>
          </a>
          <Link href={cta.href} className={`${styles.button} ${styles.secondaryButton}`}>
            {cta.label}
          </Link>
        </div>
        <button type="button" className={styles.previewButton} onClick={openResumeModal}>
          {resume.previewLabel}
        </button>
      </div>
      {isResumeOpen && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onClick={closeResumeModal}
        >
          <div className={styles.modalContent} onClick={(event) => event.stopPropagation()}>
            <header className={styles.modalHeader}>
              <h2 id={dialogTitleId}>{resume.modalTitle}</h2>
              <button
                type="button"
                className={styles.closeButton}
                onClick={closeResumeModal}
                ref={closeButtonRef}
                aria-label="Close resume preview"
              >
                ×
              </button>
            </header>
            <div className={styles.modalBody}>
              <iframe
                src={resumePreviewHref}
                title={resume.modalTitle}
                className={styles.previewFrame}
                loading="lazy"
              />
            </div>
            <footer className={styles.modalFooter}>
              <a href={encodedResumeHref} download={resume.downloadFileName} className={`${styles.button} ${styles.primaryButton}`}>
                <DownloadIcon className={styles.buttonIcon} aria-hidden="true" />
                <span>{resume.downloadLabel}</span>
              </a>
              <p className={styles.modalHelpText}>
                Having trouble?{" "}
                <a href={encodedResumeHref} target="_blank" rel="noopener noreferrer">
                  Open the PDF in a new tab
                </a>
                .
              </p>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}

function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4m-4 9h16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
