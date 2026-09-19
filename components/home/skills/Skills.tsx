import { skillCategories } from "@/data/skills";

import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <span className={styles.label}>MY SKILLS</span>

          <h2>
            Technologies I use to
            <span> build things.</span>
          </h2>

          <p>
            A collection of technologies and tools I use to build modern,
            scalable and maintainable applications.
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <article key={category.title} className={styles.card}>
              <div className={styles.cardNumber}>0{index + 1}</div>

              <div className={styles.cardContent}>
                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <div className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
