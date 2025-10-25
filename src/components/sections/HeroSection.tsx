import Link from "next/link";
import { heroContent } from "@/data/profile";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  const { overline, title, subtitle, cta } = heroContent;

  return (
    <section className={styles.hero} id="home" aria-labelledby="home-title">
      <div className={`${styles.content} fade-in`}>
        <p className={styles.overline}>{overline}</p>
        <h1 id="home-title">{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <Link href={cta.href} className={styles.cta}>
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
