"use client";

import type { CSSProperties } from "react";
import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import styles from "./FadeScrollPane.module.scss";

type Props = PropsWithChildren<{
  /** Distance from top when sticky (align with right gallery) */
  stickyTop?: number;        // default 140
  /** Subtract from 100vh for header/spacing */
  heightOffset?: number;     // default 160
  /** Fade size in px; must match CSS variable if you tweak there */
  fade?: number;             // default 72
  className?: string;
}>;

type FadeCSSProperties = CSSProperties & { "--fade"?: string };

export default function FadeScrollPane({
  children,
  stickyTop = 140,
  heightOffset = 160,
  fade = 72,
  className,
}: Props) {
  const wrapStyle = useMemo(
    () => ({ top: `${stickyTop}px`, maxHeight: `calc(100vh - ${heightOffset}px)` }),
    [stickyTop, heightOffset]
  );
  const paneRef = useRef<HTMLDivElement>(null);

  const [scrolledDown, setScrolledDown] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [atRest, setAtRest] = useState(false);

  useEffect(() => {
    const el = paneRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const bottomGap = scrollHeight - scrollTop - clientHeight;

      const isScrolled = scrollTop > 2;
      const isAtBottom = bottomGap <= 2;

      setScrolledDown(isScrolled);
      setAtBottom(isAtBottom);
      setAtRest(!isScrolled && isAtBottom); // handles very short content
    };

    onScroll(); // initialize
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const paneClass =
    [
      styles.pane,
      scrolledDown ? styles.scrolledDown : "",
      atBottom ? styles.atBottom : "",
      atRest ? styles.atRest : "",
      className || "",
    ]
      .filter(Boolean)
      .join(" ");

  // Expose the fade size to CSS via style if you want to tweak per instance
  const paneStyle: FadeCSSProperties = { "--fade": `${fade}px` };

  return (
    <div className={styles.wrap} style={wrapStyle}>
      <div ref={paneRef} className={paneClass} style={paneStyle}>
        {children}
      </div>
    </div>
  );
}
