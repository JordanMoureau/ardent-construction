import NavBar from "../components/navBar";
import styles from "../styles/mainpage.module.css";
import TrustBar from "../components/trustBar";
import LocationMod from "../components/locationMod";
import JobberButton from "../components/jobberButton";

export const metadata = {
  title: "Construction & Remodeling Services | Ardent Construction",
  description:
    "Explore Ardent Construction's services in Coeur d'Alene and North Idaho, including new construction, shops, barns, ADUs, home renovations, remodeling, and residential repairs.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Construction & Remodeling Services | Ardent Construction",
    description:
      "From new construction and custom shops to kitchen remodels, home repairs, and exterior improvements, explore Ardent Construction's services throughout North Idaho.",
    url: "/services",
    siteName: "Ardent Construction",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction & Remodeling Services | Ardent Construction",
    description:
      "Discover residential construction, remodeling, renovations, and home repair services from Ardent Construction in Coeur d'Alene and North Idaho.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const newConstruction = [
  "Shops",
  "Barns",
  "Accessory Dwelling Units",
  "Sheds",
  "Decks",
  "Carports",
  "Gazebos",
  "Porch and Patio Covers",
];

const renovations = [
  "Kitchen and bathroom remodels",
  "Cabinet installation",
  "Additions",
  "Flooring",
  "Trim",
  "General Carpentry",
  "Finish Carpentry",
];

const homeRepairs = [
  "General Handyman services",
  "Metal roofing, siding and trim",
  "Roofing, siding, and trim installation/repair",
  "Window installation/replacement",
  "Floor and structural repairs",
  "Door repairs/installation",
  "Faucets, Sinks, Toilets and Tubs",
  "Kit and furniture assembly",
];

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

      <div className={styles.projectSection}>
        {/* NEW CONSTRUCTION */}
        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/raisingprofile.jpg"
                alt="Structural residential construction project"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>New Construction</h2>

              <p>
                From framing and structural improvements to larger residential
                builds, Ardent approaches each project with careful planning and
                attention to the details that affect strength, durability, and
                long-term performance.
              </p>

              <ul className={styles.projectList}>
                {newConstruction.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* RENOVATIONS & REMODELS */}
        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/bathroomreno.jpg"
                alt="Finished interior residential project"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>Renovations &amp; Remodels</h2>

              <p>
                Ardent helps homeowners update existing spaces with practical,
                well-built improvements. From drywall and interior finishes to
                complete room renovations, the goal is always to create a
                finished space that feels intentional and works better for
                everyday life.
              </p>

              <ul className={styles.projectList}>
                {renovations.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* HOME REPAIRS & IMPROVEMENTS */}
        <section className={styles.projectRow}>
          <div className={styles.projectInner}>
            <div className={styles.projectImage}>
              <img
                src="/exteriorstructure.jpg"
                alt="Residential exterior construction project"
              />
            </div>

            <div className={styles.projectCopy}>
              <h2>Home Repairs &amp; Improvements</h2>

              <p>
                Exterior projects can change both how a home looks and how well
                it functions. Ardent takes on additions, exterior improvements,
                repairs, and other projects that expand or improve the existing
                structure.
              </p>

              <ul className={styles.projectList}>
                {homeRepairs.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
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

          <JobberButton />
        </div>
      </section>

      {/* BOTTOM IMAGE STRIP */}
      <section className={styles.bottomGallery}>
        <div>
          <img src="/barn.jpg" alt="North Idaho construction project" />
        </div>

        <div>
          <img
            src="/raisingprofile.jpg"
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
