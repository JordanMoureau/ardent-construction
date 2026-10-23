"use client";

import { useState } from "react";
import styles from "../styles/minicontact.module.css";

export default function MiniContact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/moeeqzge", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
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
        type="text"
        name="contact"
        placeholder="Your Phone Or Email Address"
        aria-label="Your phone number or email address"
        required
      />

      <textarea
        name="details"
        placeholder="Your Project Details"
        aria-label="Your project details"
        rows="4"
        required
      />

      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p role="status">Thank you! Your message has been sent successfully.</p>
      )}

      {status === "error" && (
        <p role="alert">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
