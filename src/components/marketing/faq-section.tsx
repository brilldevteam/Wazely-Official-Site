import { Plus } from "lucide-react";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <section id="faq" className="section-space scroll-mt-24 bg-white">
      <div className="page-shell">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="section-title mt-4">
            What people ask before they start.
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
          {faqItems.map((item) => (
            <details key={item.question} className="group bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-slate-50 sm:px-8">
                <span className="text-navy text-base font-semibold">
                  {item.question}
                </span>
                <span className="text-teal flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 transition-transform duration-200 group-open:rotate-45">
                  <Plus aria-hidden="true" size={16} strokeWidth={2.5} />
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-7 text-slate-600 sm:px-8">
                {item.answer}
              </p>
            </details>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
