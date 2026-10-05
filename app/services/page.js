import Link from "next/link";

import NavBar from "../components/navBar";

import styles from "../styles/mainpage.module.css";
import TrustBar from "../components/trustBar";
import LocationMod from "../components/locationMod";

export const metadata = {
  title: "Get a Project Estimate | Ardent Construction",
  description:
    "Contact Ardent Construction to discuss your residential construction, remodeling, repair, shop, barn, garage, or ADU project in North Idaho.",

  alternates: {
    canonical: "/get-a-quote",
  },

  openGraph: {
    title: "Get a Project Estimate | Ardent Construction",
    description:
      "Tell us about your North Idaho construction or remodeling project and get in touch with Ardent Construction to discuss the next steps.",
    url: "/get-a-quote",
    siteName: "Ardent Construction",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Get a Project Estimate | Ardent Construction",
    description:
      "Contact Ardent Construction to discuss your North Idaho construction, remodeling, repair, or building project.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* INTRO */}
      <section className={styles.introSection}>
        <NavBar />

        <div className={styles.introContent}>
          <h1>From Barn to Home</h1>

          <p>
            Ardent Construction provides residential construction services
            throughout Coeur d’Alene and North Idaho. We work with homeowners on
            new construction, additions, renovations, structural improvements,
            and finished interior and exterior projects with a focus on clear
            communication and dependable workmanship.
          </p>
        </div>
      </section>

      {/* FEATURE IMAGE + TRUST */}
      <section className={styles.featureSection}>
        <div className={styles.featureImage}>
          <img
            src="/silverbarn.jpg"
            alt="Residential construction project by Ardent Construction"
          />
        </div>

        <TrustBar />
      </section>

      {/* PROJECT TYPE ONE */}
      <div className={styles.projectSection}>
        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/raisingprofile.jpg"
                alt="Structural residential construction project"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>New Construction &amp; Structural Work</h2>

              <p>
                From framing and structural improvements to larger residential
                builds, Ardent approaches each project with careful planning and
                attention to the details that affect strength, durability, and
                long-term performance.
              </p>

              <p className={styles.projectDescription}>
                Whether the work involves creating something new or reinforcing
                what is already there, each phase is handled with a focus on
                sound construction, practical solutions, and getting the
                underlying structure right from the beginning.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT TYPE TWO */}

        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/bathroomreno.jpg"
                alt="Finished interior residential project"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>Renovations &amp; Interior Projects</h2>

              <p>
                Ardent helps homeowners update existing spaces with practical,
                well-built improvements. From drywall and interior finishes to
                complete room renovations, the goal is always to create a
                finished space that feels intentional and works better for
                everyday life.
              </p>

              <p className={styles.projectDescription}>
                Renovation work is approached with the same care as new
                construction, with attention given to how new materials,
                layouts, and finishes work with the existing home rather than
                simply being added on top of it.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT TYPE THREE */}

        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/exteriorstructure.jpg"
                alt="Residential exterior construction project"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>Exterior Improvements &amp; Additions</h2>

              <p>
                Exterior projects can change both how a home looks and how well
                it functions. Ardent takes on additions, exterior improvements,
                repairs, and other projects that expand or improve the existing
                structure.
              </p>

              <p className={styles.projectDescription}>
                Each project is planned around the home as a whole, with careful
                consideration given to durability, weather exposure, materials,
                and how the finished work connects visually and structurally
                with the original construction.
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
            Serving homeowners throughout Coeur d’Alene, Post Falls, Hayden,
            Rathdrum, and surrounding North Idaho communities.
          </p>
        </div>

        <div className={styles.serviceMap}>
          <LocationMod />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Work Delivered With Integrity</h2>

          <p>
            Every project deserves the same level of care, whether it is a major
            structural build or a focused renovation. Ardent combines practical
            construction experience with straightforward communication so
            homeowners know what to expect throughout the process.
          </p>

          <Link href="/get-a-quote" className="button">
            Get An Estimate
          </Link>
        </div>
      </section>

      {/* BOTTOM IMAGE STRIP */}
      <section className={styles.bottomGallery}>
        <div>
          <img src="/barn.jpg" alt="North Idaho construction project" />
        </div>

        <div>
          <img
            src="/raisingstructure.jpg"
            alt="Residential drywall construction"
          />
        </div>

        <div>
          <img src="/fireplace.jpg" alt="Finished fireplace project" />
        </div>
      </section>
    </main>
  );
}
