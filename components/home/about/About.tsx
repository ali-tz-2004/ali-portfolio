import Link from "next/link";

import styles from "./About.module.scss";

const stats = [
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Projects",
  },
];

const technologies = ["React", "Next.js", "Angular", ".NET", "SQL Server"];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <span className={styles.label}>ABOUT ME</span>

            <h2>
              Building digital experiences
              <span> that matter.</span>
            </h2>
          </div>

          <div className={styles.description}>
            <p>
              I&apos;m a Full Stack Developer with experience building modern
              web applications across both frontend and backend.
            </p>

            <p>
              I&apos;ve worked on enterprise applications as well as modern web
              projects, building responsive interfaces, developing REST APIs,
              integrating databases and implementing scalable application
              architectures.
            </p>

            <p>
              My main technologies include React, Next.js, Angular, .NET and SQL
              Server.
            </p>

            <Link href="/resume" className={styles.resumeButton}>
              View Resume
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardGlow} />

            <div className={styles.cardHeader}>
              <span>Experience</span>

              <span className={styles.status}>
                <span />
                Available
              </span>
            </div>

            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.divider} />

            <div className={styles.techSection}>
              <span className={styles.techTitle}>Technologies I work with</span>

              <div className={styles.technologies}>
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.decor} ${styles.decorOne}`} />
          <div className={`${styles.decor} ${styles.decorTwo}`} />
        </div>
      </div>
    </section>
  );
}
