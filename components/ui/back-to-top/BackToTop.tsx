"use client";

import { useEffect, useState } from "react";

import styles from "./BackToTop.module.scss";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.pushState(null, "", window.location.pathname);
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${isVisible ? styles.visible : ""}`}
      onClick={handleBackToTop}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <span>↑</span>
    </button>
  );
}
