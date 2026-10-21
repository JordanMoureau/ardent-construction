"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/navbar.module.css";

const clienthubId = "8ceeea6b-a99d-46e8-92ad-8a3c028839df-4968111";

const formUrl =
  "https://clienthub.getjobber.com/client_hubs/8ceeea6b-a99d-46e8-92ad-8a3c028839df/public/work_request/embedded_work_request_form?form_id=4968111";

const scriptUrl =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

const stylesheetUrl =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";

export default function JobberModal({ isOpen, onClose }) {
  const initialized = useRef(false);

  // Initialize Jobber's official embed once.
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = stylesheetUrl;
    stylesheet.media = "screen";
    document.head.appendChild(stylesheet);

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;

    // Jobber's original embed attributes
    script.setAttribute("clienthub_id", clienthubId);
    script.setAttribute("form_url", formUrl);

    document.body.appendChild(script);

    return () => {
      // Keep the embed initialized while the component remains mounted.
    };
  }, []);

  // Handle modal behavior.
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={styles.overlay}
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="Request an Estimate"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close form"
        >
          &times;
        </button>

        <div className={styles.formContainer}>
          <div id={clienthubId}></div>
        </div>
      </div>
    </div>
  );
}
