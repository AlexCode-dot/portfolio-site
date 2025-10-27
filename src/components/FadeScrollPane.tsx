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
  const getIsCompact = () =>
    typeof window === "undefined" ? false : window.innerWidth <= 1050;
  const [isCompact, setIsCompact] = useState<boolean>(getIsCompact);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => setIsCompact(window.innerWidth <= 1050);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const wrapStyle = useMemo<CSSProperties | undefined>(
    () => (isCompact ? undefined : { top: `${stickyTop}px`, maxHeight: `calc(100vh - ${heightOffset}px)` }),
    [isCompact, stickyTop, heightOffset]
  );
  const wrapClassName = useMemo(
    () => [styles.wrap, isCompact ? styles.freeWrap : ""].filter(Boolean).join(" "),
    [isCompact]
  );
  const paneRef = useRef<HTMLDivElement>(null);

  const [scrolledDown, setScrolledDown] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [atRest, setAtRest] = useState(false);

  useEffect(() => {
    if (isCompact) return;

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
  }, [isCompact]);

  const paneClasses = [
    styles.pane,
    className || "",
    isCompact ? styles.freePane : "",
    !isCompact && scrolledDown ? styles.scrolledDown : "",
    !isCompact && atBottom ? styles.atBottom : "",
    !isCompact && atRest ? styles.atRest : "",
  ].filter(Boolean);

  const paneStyle: FadeCSSProperties | undefined = isCompact ? undefined : { "--fade": `${fade}px` };

  return (
    <div className={wrapClassName} style={wrapStyle}>
      <div ref={paneRef} className={paneClasses.join(" ")} style={paneStyle}>
        {children}
      </div>
    </div>
  );
}
