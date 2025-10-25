"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_OFFSET_DEFAULT = 96;
const hashOffsets: Record<string, number> = {
  "#skills": 140,
  "#contact": 140,
};

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]'));

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = event.currentTarget as HTMLAnchorElement;
      const { hash, pathname: anchorPath } = anchor;
      if (!hash) return;

      const isSamePath = anchorPath === window.location.pathname || (!anchorPath && pathname === "/");
      if (!isSamePath) return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();

      const targetOffset = hashOffsets[hash] ?? NAV_OFFSET_DEFAULT;
      const top = target.getBoundingClientRect().top + window.scrollY - targetOffset;
      window.scrollTo({ top, behavior: "smooth" });

      const newUrl = `${window.location.pathname}${hash}`;
      window.history.replaceState(null, "", newUrl);
      if (typeof HashChangeEvent === "function") {
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } else {
        window.dispatchEvent(new Event("hashchange"));
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));

    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll<HTMLElement>(".fade-in").forEach((el) => observer.observe(el));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
