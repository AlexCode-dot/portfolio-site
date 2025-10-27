import { contactLinks } from "@/data/profile";
import styles from "./ContactSection.module.scss";

export function ContactSection() {
  if (!contactLinks.length) return null;

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <header className="fade-in">
        <p className={styles.kicker}>Next Step</p>
        <h2 id="contact-title">Let&apos;s collaborate</h2>
        <p className={styles.lead}>I’m always up for connecting, exchanging ideas, or jumping in to help on projects already in motion.</p>
      </header>

      <div className={`${styles.links} fade-in`}>
        {contactLinks.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <a
              key={link.href}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
