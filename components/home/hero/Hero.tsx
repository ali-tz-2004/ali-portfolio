import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            Available for freelance work
          </p>

          <h1 className={styles.title}>
            Hi, I&apos;m{" "}
            <span className={styles.highlight}>Ali Taghizadeh</span>
          </h1>

          <h2 className={styles.role}>Frontend Developer</h2>

          <p className={styles.description}>
            I build modern, scalable and high-performance web applications with
            React, Next.js and Angular.
          </p>

          <div className={styles.actions}>
            <Link href="#projects" className={styles.primaryButton}>
              View Projects
              <span>↗</span>
            </Link>

            <Link href="#contact" className={styles.secondaryButton}>
              Contact Me
            </Link>
          </div>

          <div className={styles.techStack}>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Angular</span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.glow} />

          <div className={styles.orbitOne}>
            <span />
          </div>

          <div className={styles.orbitTwo}>
            <span />
          </div>

          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <div className={styles.windowDots}>
                <span />
                <span />
                <span />
              </div>

              <span className={styles.fileName}>developer.tsx</span>
            </div>

            <div className={styles.codeContent}>
              <p>
                <span className={styles.keyword}>const</span>{" "}
                <span className={styles.variable}>developer</span> = {"{"}
              </p>

              <p className={styles.indent}>
                name: <span className={styles.string}>&quot;Ali&quot;</span>,
              </p>

              <p className={styles.indent}>
                role:{" "}
                <span className={styles.string}>
                  &quot;Frontend Developer&quot;
                </span>
                ,
              </p>

              <p className={styles.indent}>
                stack: [<span className={styles.string}>&quot;React&quot;</span>
                ,<span className={styles.string}>&quot;Next.js&quot;</span>
                ],
              </p>

              <p>{"}"};</p>
            </div>
          </div>

          <div className={styles.badge}>
            <span className={styles.badgeIcon}>⚡</span>

            <div>
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
