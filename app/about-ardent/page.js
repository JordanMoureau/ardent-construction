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
      <div className={styles.projectSection}>
        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/framing.jpg"
                alt="Residential framing project by Ardent Construction"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>Professionalism, Communication, and Reputation</h2>

              <p>
                Ardent approaches residential construction with a focus on the
                fundamentals: proper planning, solid workmanship, and clear
                communication throughout the project. Every build is treated as
                a long-term investment in the home, not simply another job to
                move through.
              </p>

              <p className={styles.projectDescription}>
                That means taking the time to understand the scope, work through
                the details before they become problems, and make sure each
                stage of the project supports what comes next.
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
              <h2>Professionalism</h2>

              <p>
                Customers choose Ardent Construction because they understand and
                value our professional and meticulous approach. We are
                personally invested in every project, if it’s important to the
                customer, it’s important to us. When it comes to the quality of
                our work, we hold ourselves to a standard that is not only above
                and beyond the customers’ expectations, but those of other
                professionals in our field. We prioritize completing projects
                one at a time to maximize efficiency and minimize disruption for
                the customer.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT FEATURE THREE */}

        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/kitchenreno.jpg"
                alt="North Idaho residential construction project by Ardent Construction"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>Communication</h2>

              <p>
                We believe that most frustrations that arise in construction are
                the result of poor communication and disappointment is usually
                the result of unmet expectations. We understand construction,
                renovation, and home repairs can be disruptive.
              </p>

              <p className={styles.projectDescription}>
                We pride ourselves on being attentive to customer’s desired
                outcome, quality of life and ensuring the best experience
                possible. Clear expectations regarding the process, costs, and
                outcome before the work starts and throughout the project.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/barn.jpg"
                alt="North Idaho residential construction project by Ardent Construction"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>Reputation</h2>

              <p>
                Our goal is more than being chosen by a customer for their
                project. Our goal is to be the company customers choose for
                their future projects as well. We endeavor to be the company you
                recommend without hesitation to friends or family members
                because you trust our company, our quality, and feel safe and
                secure having us operate within your home or on your property.
                We do this by taking great pride in our work and placing
                customer satisfaction above growth, profits, or volume.
              </p>
            </div>
          </div>
        </section>
      </div>

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
            Get An Estimate
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
          <img src="/bathroomreno.jpg" alt="Finished residential interior" />
        </div>

        <div>
          <img src="/roofedge.jpg" alt="Residential roof construction" />
        </div>
      </section>
    </main>
  );
}
