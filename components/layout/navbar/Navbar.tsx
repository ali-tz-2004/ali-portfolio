"use client";

import { useState } from "react";
import Link from "next/link";

import styles from "./Navbar.module.scss";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${id}`);

    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>&lt;</span>
          Ali
          <span>/&gt;</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.navLink}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={styles.contactButton}
          onClick={() => handleScroll("contact")}
        >
          Let&apos;s Talk
        </button>

        <button
          type="button"
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.mobileNavLink}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}

              <span>↗</span>
            </button>
          ))}

          <button
            type="button"
            className={styles.mobileContactButton}
            onClick={() => handleScroll("contact")}
          >
            Let&apos;s Talk
            <span>↗</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
