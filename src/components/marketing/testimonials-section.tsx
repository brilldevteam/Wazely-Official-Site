"use client";

import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { testimonials } from "@/data/testimonials";

// Placeholder state: dashed borders and muted text mark these as not-yet-real
// content on purpose, so this never reads as a fabricated review if it ships
// before real testimonials are added. Once real quotes exist, swap each
// card's className from the dashed/placeholder treatment to a solid
// border-slate-200 bg-white card, matching the rest of the site, and this
// can go back to a static grid instead of a scrolling row.
function TestimonialRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-stretch gap-5 pr-5 sm:gap-6 sm:pr-6"
      aria-hidden={ariaHidden}
    >
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="flex w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 sm:w-[360px]"
        >
          <Quote aria-hidden="true" size={22} className="text-slate-300" />
          <p className="mt-4 text-sm leading-6 text-slate-400 italic">
            {item.quote}
          </p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-400">
              {item.name}
            </p>
            <p className="text-xs text-slate-400">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (
      !track ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track.classList.add("is-playing");
          observer.unobserve(track);
        }
      },
      { threshold: 0 },
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-space bg-white">
      <div className="page-shell">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">What customers are saying</p>
          <h2 className="section-title mt-4">What customers are saying.</h2>
          <p className="section-copy mt-5">
            Real quotes from Wazely customers will appear here as they come
            in.
          </p>
        </ScrollReveal>
      </div>

      <div className="marquee-track-wrapper mt-12 py-2">
        <div ref={trackRef} className="marquee-track">
          <TestimonialRow />
          <TestimonialRow ariaHidden />
          <TestimonialRow ariaHidden />
          <TestimonialRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
