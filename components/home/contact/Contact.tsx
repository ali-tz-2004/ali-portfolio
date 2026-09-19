import { contactInfo } from "@/data/contact";

import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Get in touch</span>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p>
              Whether you have a project in mind, need help with an existing
              application, or just want to talk about an idea, feel free to
              reach out.
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.contactSection}>
              <span className={styles.sectionLabel}>Contact</span>

              <div className={styles.links}>
                {contactInfo.contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={
                      link.label === "Email" ? undefined : "noopener noreferrer"
                    }
                    className={styles.link}
                  >
                    <span className={styles.linkLabel}>{link.label}</span>

                    <span className={styles.arrow}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.contactSection}>
              <span className={styles.sectionLabel}>Developer Profiles</span>

              <div className={styles.links}>
                {contactInfo.developerProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <span className={styles.linkLabel}>{profile.label}</span>

                    <span className={styles.arrow}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Availability</span>

              <span className={styles.metaValue}>
                <span className={styles.statusDot} />
                {contactInfo.availability}
              </span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Location</span>

              <span className={styles.metaValue}>{contactInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
