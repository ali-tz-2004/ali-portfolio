"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import { contactInfo } from "@/data/contact";

const footerLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${id}`);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.pushState(null, "", window.location.pathname);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>
            <span>&lt;</span>
            Ali
            <span>/&gt;</span>
          </Link>

          <p className={styles.tagline}>
            Building digital experiences with modern web technologies.
          </p>

          <Link href="mailto:alitz1382@gmail.com" className={styles.email}>
            alitz1382@gmail.com
          </Link>
        </div>

        <div className={styles.divider} />

        <div className={styles.middle}>
          <nav className={styles.nav}>
            {footerLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleScroll(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className={styles.socials}>
            {contactInfo.contactLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Ali Taghizadeh</span>

          <span>Designed & built with Next.js</span>

          <button
            type="button"
            className={styles.backToTop}
            onClick={handleBackToTop}
          >
            Back to top
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
