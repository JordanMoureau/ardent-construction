import Link from "next/link";

import NavBar from "../components/navBar";

import styles from "../styles/mainpage.module.css";
import TrustBar from "../components/trustBar";
import LocationMod from "../components/locationMod";

export default function AboutArdentPage() {
  return (
    <main className={styles.page}>
      {/* INTRO */}
      <section className={styles.introSection}>
        <NavBar />

        <div className={styles.introContent}>
          <h1>About Ardent Construction</h1>

          <p>
            Ardent Construction is a North Idaho residential construction
            company serving homeowners throughout Coeur d’Alene and surrounding
            communities. Our work is built around dependable craftsmanship,
            straightforward communication, and a commitment to doing the job
            right from the beginning.
          </p>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className={styles.featureSection}>
        <div className={styles.featureImage}>
          <img
            src="/interiorhome.jpg"
            alt="Ardent Construction project in North Idaho"
          />
        </div>
        <TrustBar />
      </section>

      {/* ABOUT FEATURE ONE */}

      <section className={styles.projectRow}>
        <div className={styles.projectInner}>
          <div className={styles.projectImage}>
            <img
              src="/framing.jpg"
              alt="Residential framing project by Ardent Construction"
            />
          </div>

          <div className={styles.projectCopy}>
            <h2>Built Around Good Work</h2>

            <p>
              Ardent approaches residential construction with a focus on the
              fundamentals: proper planning, solid workmanship, and clear
              communication throughout the project. Every build is treated as a
              long-term investment in the home, not simply another job to move
              through.
            </p>

            <p className={styles.projectDescription}>
              That means taking the time to understand the scope, work through
              the details before they become problems, and make sure each stage
              of the project supports what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT FEATURE TWO */}

      <section className={styles.projectRow}>
        <div className={styles.projectInner}>
          <div className={styles.projectImage}>
            <img
              src="/finishedinteriorprofile.jpg"
              alt="Completed residential interior by Ardent Construction"
            />
          </div>

          <div className={styles.projectCopy}>
            <h2>From Structure To Finish</h2>

            <p>
              Our experience spans structural construction, additions,
              renovations, exterior work, and finished residential spaces. That
              broad understanding helps us look at each project as a complete
              system and make decisions that support both the finished result
              and the integrity of the home behind it.
            </p>

            <p className={styles.projectDescription}>
              By understanding how structural work, materials, finishes, and
              everyday function connect, we are able to approach projects with a
              wider view and keep the work cohesive from the first phase through
              the final details.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT FEATURE THREE */}

      <section className={styles.projectRow}>
        <div className={styles.projectInner}>
          <div className={styles.projectImage}>
            <img
              src="/barn.jpg"
              alt="North Idaho residential construction project by Ardent Construction"
            />
          </div>

          <div className={styles.projectCopy}>
            <h2>Local Work, Long-Term Relationships</h2>

            <p>
              Ardent serves homeowners throughout North Idaho with residential
              construction work that is grounded in reliability, practical
              problem-solving, and respect for the home being worked on.
            </p>

            <p className={styles.projectDescription}>
              Many projects begin with a single need and grow into an ongoing
              relationship as homeowners return for future improvements,
              repairs, additions, and renovations. The goal is to be the kind of
              contractor people feel comfortable calling again.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className={styles.serviceSection} id="service-area">
        <div className={styles.serviceHeading}>
          <h2>We Serve North Idaho</h2>

          <p>
            Based in the Coeur d’Alene area and working with homeowners
            throughout Post Falls, Hayden, Rathdrum, and surrounding North Idaho
            communities.
          </p>
        </div>

        <div className={styles.serviceMap}>
          <LocationMod />
        </div>
      </section>

      {/* CTA */}

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready To Talk About Your Project?</h2>

          <p>
            Good construction starts with a clear conversation. Tell us what you
            are planning, what you need from the space, and where you are in the
            process. We will help you understand the next steps and whether
            Ardent is the right fit for the work.
          </p>

          <Link href="/get-a-quote" className="button">
            Get A Quote
          </Link>
        </div>
      </section>

      {/* BOTTOM IMAGE STRIP */}
      <section className={styles.bottomGallery}>
        <div>
          <img
            src="/exteriorstructure.jpg"
            alt="Exterior residential construction"
          />
        </div>

        <div>
          <img src="/interiorhometwo.jpg" alt="Finished residential interior" />
        </div>

        <div>
          <img src="/roofedge.jpg" alt="Residential roof construction" />
        </div>
      </section>
    </main>
  );
}
