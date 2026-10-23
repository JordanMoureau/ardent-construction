"use client";

import { useState } from "react";
import JobberModal from "./jobberModal";

export default function JobberButton({
  children = "Get An Estimate",
  className = "button",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>

      <JobberModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
