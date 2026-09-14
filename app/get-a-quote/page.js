import NavBar from "../components/navBar";
import ContactForm from "../components/contactForm";

import styles from "../styles/contactpage.module.css";
import TrustBar from "../components/trustBar";

export default function GetAQuote() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactHero}>
        <NavBar />

        <img
          src="/interiorhome.jpg"
          alt=""
          className={styles.backgroundImage}
        />

        <div className={styles.backgroundOverlay} />

        <div className={styles.contactContent}>
          <div className={styles.heading}>
            <h1>Contact Us</h1>

            <p>
              Tell us a little about your project, what you&apos;re looking to
              build, and how we can reach you. We&apos;ll follow up to discuss
              the details and determine the best next step for your project.
            </p>
          </div>

          <ContactForm />
        </div>
        <div className={styles.trustContainer}>
          <TrustBar />
        </div>
      </section>
    </main>
  );
}
