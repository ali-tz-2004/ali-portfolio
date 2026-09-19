import Link from "next/link";

import styles from "./Footer.module.scss";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
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

          <a href="mailto:alitz1382@gmail.com" className={styles.email}>
            alitz1382@gmail.com
          </a>
        </div>

        <div className={styles.divider} />

        <div className={styles.middle}>
          <nav className={styles.nav}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.socials}>
            <a
              href="https://github.com/ali-tz-2004"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ali-taghizadeh-b167361b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.hackerrank.com/profile/alitz138"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackerRank
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Ali Taghizadeh</span>

          <span>Designed & built with Next.js</span>

          <a href="#top" className={styles.backToTop}>
            Back to top
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
