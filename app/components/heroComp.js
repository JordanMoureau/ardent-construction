"use client";

import { useEffect, useState } from "react";
import NavBar from "./navBar";
import styles from "../styles/homepage.module.css";

const heroImages = [
  "/drywall.jpeg",
  "/barn.jpg",
  "/roofedge.jpg",
  "/finishedinteriorprofile.jpg",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <NavBar />

        <div className={styles.heroImages}>
          {heroImages.map((image, index) => (
            <img
              key={image}
              className={`${styles.heroImage} ${
                index === activeImage ? styles.heroImageActive : ""
              }`}
              src={image}
              alt="Ardent Construction project in North Idaho"
            />
          ))}
        </div>

        <div className={styles.heroText}>
          <p>
            Ardent Construction provides dependable residential construction
            throughout Coeur d’Alene and North Idaho. From new construction and
            structural work to renovations and finished spaces, every project is
            approached with careful planning, clear communication, and attention
            to the details that make a home last.
          </p>
        </div>
      </section>
    </main>
  );
}
