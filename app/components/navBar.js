import Link from "next/link";
import Image from "next/image";

import styles from "../styles/navbar.module.css";

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
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
          aria-label="Open navigation menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
