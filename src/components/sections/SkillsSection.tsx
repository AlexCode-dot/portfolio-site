import { skills } from "@/data/profile";
import styles from "./SkillsSection.module.scss";

export function SkillsSection() {
  if (!skills.length) return null;

  return (
    <section className={styles.section} id="skills" aria-labelledby="skills-title">
      <header className="fade-in">
        <p className={styles.kicker}>Capabilities</p>
        <h2 id="skills-title">Skills &amp; Stacks</h2>
        <p className={styles.lead}>
          Areas where I deliver the most leverage—balancing product thinking with healthy engineering practices.
        </p>
      </header>

      <ul className={styles.grid}>
        {skills.map((skill) => (
          <li key={skill.name} className={`${styles.card} fade-in`}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
