"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Ardent Construction"
            width={180}
            height={70}
            priority
          />
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/services">Services</Link>

          <Link href="/about-ardent">About Ardent</Link>

          <Link href="/get-a-quote" className={styles.quoteButton}>
            Get A Quote
          </Link>
        </nav>

        <button
          className={styles.mobileMenuButton}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`${styles.mobileNav} ${
          menuOpen ? styles.mobileNavOpen : ""
        }`}
      >
        <div className={styles.mobileNavLinks}>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/about-ardent" onClick={closeMenu}>
            About Ardent
          </Link>

          <Link
            href="/get-a-quote"
            className={styles.mobileQuoteButton}
            onClick={closeMenu}
          >
            Get A Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
