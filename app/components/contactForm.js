"use client";

import styles from "../styles/contactform.module.css";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    console.log({
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      details: formData.get("details"),
    });
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

      <button type="submit">Send</button>
    </form>
  );
}
