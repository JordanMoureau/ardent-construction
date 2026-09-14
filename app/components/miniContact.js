"use client";

import styles from "../styles/minicontact.module.css";

export default function MiniContact() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    console.log({
      name: formData.get("name"),
      contact: formData.get("contact"),
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

      <button type="submit">Send</button>
    </form>
  );
}
