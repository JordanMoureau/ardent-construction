import Link from "next/link";

import NavBar from "./components/navBar";

import styles from "./styles/homepage.module.css";
import LocationMod from "./components/locationMod";
import Hero from "./components/heroComp";
import TrustBar from "./components/trustBar";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* HERO */}
      <Hero />

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <h1>Built With Purpose. Built To Last.</h1>

          <p>
            Good construction should feel straightforward. Ardent works with
            homeowners to create spaces that are functional, durable, and made
            for the way they actually live. We bring thoughtful planning,
            quality craftsmanship, and honest communication to every stage of
            the project.
          </p>

          <Link href="/get-a-quote" className="button">
            Get A Quote
          </Link>
        </div>
      </section>

      {/* TRUST */}
      <section className={styles.trustSection}>
        <div className={styles.trustImages}>
          <div className={styles.trustImage}>
            <img src="/framing.jpg" alt="Residential framing construction" />
          </div>

          <div className={styles.trustImage}>
            <img
              src="/raisingstructure.jpg"
              alt="Structure being raised during construction"
            />
          </div>

          <div className={styles.trustImage}>
            <img
              src="/roofsunset.jpg"
              alt="North Idaho residential roof construction"
            />
          </div>
        </div>

        <TrustBar />
      </section>

      {/* PROJECT TYPES */}
      <section className={styles.projectSection} id="services">
        <div className={styles.projectInner}>
          <div className={styles.projectImage}>
            <img
              src="/homebuild.jpg"
              alt="Exterior residential construction project"
            />
          </div>

          <div className={styles.projectContent}>
            <h2>Projects from Barn to House</h2>

            <p>
              Ardent takes on residential construction projects ranging from
              structural builds and home additions to remodeling, exterior
              improvements, and finished interiors. Each project begins with the
              same goal: understand what the homeowner needs and build it
              correctly from the start.
              <br />
              <br />
              Whether the work involves transforming an existing space or
              building something entirely new, our team focuses on thoughtful
              planning, dependable craftsmanship, and details that hold up over
              time. From the first conversation through the final walkthrough,
              we keep the process clear, practical, and centered on creating a
              finished space that feels right for the people who live there.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className={styles.serviceSection} id="service-area">
        <div className={styles.serviceHeading}>
          <h2>We Serve North Idaho</h2>

          <p>
            Based in the Coeur d’Alene area and serving homeowners throughout
            surrounding North Idaho communities, from Coeur d’Alene to
            Sandpoint. We work across the region to bring dependable residential
            construction services to homeowners wherever the project takes us.
          </p>
        </div>

        <div className={styles.serviceMap}>
          <LocationMod />
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutInner}>
          <div className={styles.aboutContent}>
            <h2>About Ardent</h2>

            <p>
              Ardent Construction is a North Idaho residential construction
              company focused on solid workmanship, dependable service, and
              building homes and spaces that stand the test of time.
            </p>

            <Link href="/about-ardent" className="button">
              Learn More
            </Link>
          </div>

          <div className={styles.aboutImage}>
            <img
              src="/finishedinteriorlandscape.jpg"
              alt="Finished residential interior by Ardent Construction"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
