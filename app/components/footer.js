import Link from "next/link";
import Image from "next/image";

import MiniContact from "./miniContact.js";

import styles from "../styles/footer.module.css";
import LocationMod from "./locationMod.js";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Ardent Construction"
              width={220}
              height={90}
            />
          </Link>

          <p className={styles.tagline}>
            Serving Coeur d’Alene and North Idaho
          </p>
        </div>

        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>

          <nav className={styles.linkList}>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about-ardent">About Ardent Construction</Link>
            <Link href="/#service-area">Service Area</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>

        <div className={styles.location}>
          <h3>Location</h3>

          <p>Ardent serves North Idaho from Sandpoint to Coeur d'Alene</p>

          <div className={styles.mapPlaceholder} aria-hidden="true">
            <LocationMod />
          </div>
        </div>

        <div className={styles.contact}>
          <h2>Contact Us</h2>

          <p className={styles.contactIntro}>
            For quotes, project information &amp; more
          </p>

          <MiniContact />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <Link href="/privacy-policy">privacy policy</Link>
          <span>|</span>

          <Link href="/cookies">cookies</Link>
          <span>|</span>

          <a
            href="https://freelancejordan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            built by freelance jordan
          </a>

          <span>|</span>
          <span>copyright</span>
        </div>
      </div>
    </footer>
  );
}
