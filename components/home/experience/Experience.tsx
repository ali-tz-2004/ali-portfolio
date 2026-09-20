import { experiences } from "@/data/experience";

import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Career Journey</span>

          <h2 className={styles.title}>
            Work <span>Experience</span>
          </h2>

          <p className={styles.description}>
            My professional journey building web applications, enterprise
            systems, APIs, and scalable software solutions.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className={styles.item}
            >
              <div className={styles.timelineSide}>
                <span className={styles.number}>0{index + 1}</span>

                <span className={styles.period}>{experience.period}</span>
              </div>

              <div className={styles.timelineLine}>
                <span className={styles.dot} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <span className={styles.company}>{experience.company}</span>

                    <h3>{experience.role}</h3>
                  </div>

                  <span className={styles.mobilePeriod}>
                    {experience.period}
                  </span>
                </div>

                <p className={styles.descriptionText}>
                  {experience.description}
                </p>

                <ul className={styles.responsibilities}>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <span className={styles.bullet}>+</span>

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.technologies}>
                  {experience.technologies.map((technology) => (
                    <span key={technology} className={styles.technology}>
                      {technology}
                    </span>
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
