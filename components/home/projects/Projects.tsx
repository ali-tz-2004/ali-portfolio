import { projects } from "@/data/projects";

import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>My Work</span>

            <h2 className={styles.title}>
              Featured <span>Projects</span>
            </h2>
          </div>

          <p className={styles.description}>
            A collection of projects I&apos;ve built to explore modern frontend
            development, application architecture, and interactive user
            experiences.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.preview}>
                <div className={styles.previewGlow} />

                <div className={styles.window}>
                  <div className={styles.windowHeader}>
                    <div className={styles.windowDots}>
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className={styles.windowTitle}>{project.title}</span>
                  </div>

                  <div className={styles.windowContent}>
                    <span className={styles.projectNumber}>0{index + 1}</span>

                    <span className={styles.projectSymbol}>{"</>"}</span>
                  </div>
                </div>

                <div className={styles.previewLabel}>
                  <span>PROJECT</span>
                  <span>0{index + 1}</span>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.cardHeader}>
                  <span className={styles.number}>0{index + 1}</span>

                  <h3>{project.title}</h3>
                </div>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology} className={styles.technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubButton}
                  >
                    <span>GitHub</span>
                    <span className={styles.arrow}>↗</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveButton}
                    >
                      Live Demo
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a
            href="https://github.com/ali-tz-2004"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubProfile}
          >
            <span>View more on GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
