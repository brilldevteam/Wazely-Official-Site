"use client";

import { useEffect, useRef } from "react";

const lines = [
  "Your contact list lives in one app.",
  "Your invoices live in another.",
  "Your brand colors live in a folder somewhere.",
  "",
  "None of them talk to each other.",
  "",
  "A customer messages on WhatsApp.",
  "A teammate replies from their own phone.",
  "Nobody else sees the conversation.",
  "",
  "A quotation gets approved.",
  "Someone retypes it into an invoice.",
  "A number changes in the retyping.",
  "",
  "Sound familiar?",
  "",
  "Wazely connects the parts that are supposed to work together.",
  "One shared inbox instead of six personal phones.",
  "One quotation that becomes the invoice, not a new document.",
  "One brand palette that exports everywhere you need it.",
];

export function NarrativeReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (
      !root ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const targets = root.querySelectorAll("[data-reveal-line]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-revealed", entry.isIntersecting);
        }
      },
      { rootMargin: "0px 0px -42% 0px", threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-space bg-white">
      <div className="page-shell max-w-3xl">
        <div ref={rootRef} className="narrative-reveal">
          {lines.map((line, index) =>
            line === "" ? (
              <div key={index} className="h-5 sm:h-7" aria-hidden="true" />
            ) : (
              <p key={index} data-reveal-line className="narrative-line">
                {line}
              </p>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
