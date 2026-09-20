import { services } from "@/data/services";

import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>What I Do</span>

            <h2 className={styles.title}>
              Services <span>I Provide</span>
            </h2>
          </div>

          <p className={styles.description}>
            From building full-stack applications to integrating APIs and
            improving existing systems, I help turn ideas and requirements into
            reliable and scalable software.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.number} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.number}>{service.number}</span>

                <span className={styles.icon}>↗</span>
              </div>

              <div className={styles.content}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className={styles.technologies}>
                {service.technologies.map((technology) => (
                  <span key={technology} className={styles.technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLine} />

          <p>Need something that isn&apos;t listed here?</p>

          <a href="#contact">
            Let&apos;s Talk
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
