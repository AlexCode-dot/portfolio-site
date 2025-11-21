"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./ProjectGallery.module.scss";

type Screen = { src: string; alt?: string };

export default function ProjectGallery({ screens }: { screens: Screen[] }) {
  const items = useMemo(() => screens ?? [], [screens]);
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open && e.key === "Escape") { setOpen(false); return; }
      if (e.key === "ArrowDown") setIdx(i => (i + 1) % items.length);
      if (e.key === "ArrowUp")   setIdx(i => (i - 1 + items.length) % items.length);
    };
    if (items.length) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length, open]);

  // prevent body scroll when modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!items.length) return null;

  const prev = items[(idx - 1 + items.length) % items.length];
  const curr = items[idx];
  const next = items[(idx + 1) % items.length];

  return (
    <>
      <aside className={styles.stackGallery} aria-label="Project screenshots">
        {/* soft glow */}
        <i aria-hidden className={styles.stackGlow} />

        {/* ghost top */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={`top-${prev.src}`}
          src={prev.src}
          alt=""
          className={`${styles.stackGhost} ${styles.stackGhostTop}`}
          aria-hidden
        />

        {/* main (click to open modal) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={`main-${curr.src}`}
          src={curr.src}
          alt={curr.alt || "Project screenshot"}
          className={styles.stackMain}
          onClick={() => setOpen(true)}
        />

        {/* ghost bottom */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={`bot-${next.src}`}
          src={next.src}
          alt=""
          className={`${styles.stackGhost} ${styles.stackGhostBottom}`}
          aria-hidden
        />

        {/* controls */}
        {items.length > 1 && (
          <>
            <button
              className={`${styles.stackNav} ${styles.stackNavUp}`}
              aria-label="Previous screenshot"
              onClick={() => setIdx(i => (i - 1 + items.length) % items.length)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path d="M6 14l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button
              className={`${styles.stackNav} ${styles.stackNavDown}`}
              aria-label="Next screenshot"
              onClick={() => setIdx(i => (i + 1) % items.length)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path d="M18 10l-6 6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </>
        )}
      </aside>

      {/* Modal / lightbox */}
      {open && (
        <div className={styles.modalRoot} role="dialog" aria-modal="true" aria-label="Screenshot">
          <div className={styles.modalBackdrop} onClick={() => setOpen(false)} />
          <div className={styles.modalBody}>
            {items.length > 1 && (
              <button
                className={`${styles.modalNav} ${styles.modalNavPrev}`}
                onClick={() => setIdx(i => (i - 1 + items.length) % items.length)}
                aria-label="Previous screenshot"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path d="M14 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={curr.src} alt={curr.alt || ""} className={styles.modalImg} />
            {items.length > 1 && (
              <button
                className={`${styles.modalNav} ${styles.modalNavNext}`}
                onClick={() => setIdx(i => (i + 1) % items.length)}
                aria-label="Next screenshot"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path d="M10 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
            <button className={styles.modalClose} onClick={() => setOpen(false)} aria-label="Close">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
