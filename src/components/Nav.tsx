"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/profile";
import styles from "./Nav.module.scss";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const links = useMemo(
    () =>
      navLinks.map((link) => {
        const [rawPath, rawHash] = link.href.split("#");
        const hrefPath = rawPath || "/";
        const hrefHash = rawHash ? `#${rawHash}` : "";
        return { ...link, hrefPath, hrefHash };
      }),
    []
  );

  const isProjectsRoute = pathname.startsWith("/projects");

  const resolveActive = (hrefPath: string, hrefHash: string) => {
    const normalizedPath = hrefPath || "/";
    if (!hrefHash) {
      if (normalizedPath === "/") {
        return pathname === "/" && (!activeHash || activeHash === "#home");
      }
      return pathname === normalizedPath || pathname.startsWith(`${normalizedPath}/`);
    }

    if (hrefHash === "#projects" && isProjectsRoute) return true;
    if (pathname !== normalizedPath) return false;
    return activeHash === hrefHash;
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} id="site-nav">
      <Link href="/" className={styles.logo} aria-label="Alexander Andersson — Home">
        Alexander Andersson
      </Link>

      <div className={styles.links}>
        {links.map((link) => {
          const isActive = resolveActive(link.hrefPath, link.hrefHash);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                if (link.hrefPath === pathname && link.hrefHash) {
                  setActiveHash(link.hrefHash);
                }
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
