"use client";

import { useState } from "react";
import styles from "../styles/contactform.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/xyezwrrv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        aria-label="Your name"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        aria-label="Your phone number"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email Address"
        aria-label="Your email address"
        required
      />

      <textarea
        name="details"
        placeholder="Your Project Details"
        aria-label="Your project details"
        rows="10"
        required
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p className={styles.successMessage}>
          Thanks! Your message has been sent.
        </p>
      )}

      {status === "error" && (
        <p className={styles.errorMessage}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
