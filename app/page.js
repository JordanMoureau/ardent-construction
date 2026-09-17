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
          <h1>Built With Vision. Built With Purpose.</h1>

          <p>
            Good construction should be straightforward. Ardent works with
            clients to create invting spaces that are functional, durable, and
            purpose built. We bring thoughtful planning, honest communication
            and quality craftsmanship to every stage of the project.
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
            <h2>Projects from Big Ideas to Small Repairs</h2>

            <p>
              Ardent Construction specializes in shops, barns, garages, ADU's,
              and sheds as well as home renovations, remodels, and repair
              services. Each project begins with the same goal: build
              relationships with customers, understand their needs, and realize
              their vision with enthusiasm, craftsmanship, and excellence.
              <br />
              <br />
              The tenets of Ardent Construction are professionalism,
              communication, and reputation. We are enthusiastic about building
              relationships with customers and delivering excellent
              craftsmanship. Whether transforming an existing space or building
              something new, we focus on clear communication, thoughtful
              planning, and exceptional quality. From the first conversation
              through the final walkthrough, we keep the process clear,
              professional, and centered on creating a the finished space that
              the client desires.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className={styles.serviceSection} id="service-area">
        <div className={styles.serviceHeading}>
          <h2>We Serve North Idaho</h2>

          <p>
            Serving homeowners throughout surrounding North Idaho communities,
            from Coeur d’Alene to Sandpoint. We work across the region to bring
            dependable construction and home repair services to homeowners
            wherever the project takes us.
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
              Ardent Construction is a North Idaho based residential
              construction company committed to professionalism, communication,
              reputation, and passionately building homes structures and spaces
              that stand the test of time.
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
