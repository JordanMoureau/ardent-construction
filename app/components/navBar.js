"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

import JobberModal from "./jobberModal";

const jobberUrl =
  "https://clienthub.getjobber.com/client_hubs/8ceeea6b-a99d-46e8-92ad-8a3c028839df/public/work_request/embedded_work_request_form?form_id=4968111";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [jobberOpen, setJobberOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ""}`}>
      <JobberModal isOpen={jobberOpen} onClose={() => setJobberOpen(false)} />

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

          <Link href="/get-a-quote">Contact Us</Link>

          <a
            href="#jobber-form"
            className={styles.quoteButton}
            onClick={(e) => {
              e.preventDefault();
              setJobberOpen(true);
            }}
          >
            Get An Estimate
          </a>
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

          <Link href="/get-a-quote" onClick={closeMenu}>
            Contact Us
          </Link>

          <a
            href="#jobber-form"
            className={styles.mobileQuoteButton}
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              setJobberOpen(true);
            }}
          >
            Get An Estimate
          </a>
        </div>
      </nav>
    </header>
  );
}
