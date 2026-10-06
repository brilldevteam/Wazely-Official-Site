import { Quote } from "lucide-react";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { testimonials } from "@/data/testimonials";

// Placeholder state: dashed borders and muted text mark these as not-yet-real
// content on purpose, so this never reads as a fabricated review if it ships
// before real testimonials are added. Once real quotes exist, swap each
// card's className from the dashed/placeholder treatment to a solid
// border-slate-200 bg-white card, matching the rest of the site.
export function TestimonialsSection() {
  return (
    <section className="section-space bg-white">
      <div className="page-shell">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">What customers are saying</p>
          <h2 className="section-title mt-4">Testimonials coming soon.</h2>
          <p className="section-copy mt-5">
            This section is built and ready. It just needs real quotes from
            real Wazely customers, not placeholder text.
          </p>
        </ScrollReveal>

        <ScrollReveal
          stagger
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6"
            >
              <Quote
                aria-hidden="true"
                size={22}
                className="text-slate-300"
              />
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
        </ScrollReveal>
      </div>
    </section>
  );
}
