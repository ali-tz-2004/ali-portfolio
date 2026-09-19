import Link from "next/link";

import styles from "./Navbar.module.scss";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
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
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className={styles.contactButton}>
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
}
