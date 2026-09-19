import { contactInfo } from "@/data/contact";

import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.glow} />

          <div className={styles.content}>
            <span className={styles.eyebrow}>Get In Touch</span>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p>
              I&apos;m always open to discussing new projects, freelance
              opportunities, or potential collaborations.
            </p>

            <a href={`mailto:${contactInfo.email}`} className={styles.email}>
              <span>{contactInfo.email}</span>

              <span className={styles.emailArrow}>↗</span>
            </a>
          </div>

          <div className={styles.side}>
            <div className={styles.status}>
              <span className={styles.statusDot} />

              <span>{contactInfo.availability}</span>
            </div>

            <div className={styles.location}>
              <span className={styles.label}>LOCATION</span>

              <span>{contactInfo.location}</span>
            </div>

            <div className={styles.socials}>
              <span className={styles.label}>SOCIAL</span>

              <div className={styles.socialLinks}>
                {contactInfo.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}

                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerText}>
          <span>Let&apos;s build something great together.</span>

          <span>© {new Date().getFullYear()} Ali Taghizadeh</span>
        </div>
      </div>
    </section>
  );
}
