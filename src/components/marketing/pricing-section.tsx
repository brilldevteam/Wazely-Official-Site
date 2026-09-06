import { Check } from "lucide-react";

import { BookDemoButton } from "@/components/marketing/book-demo-button";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { pricingPlans, type PricingPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  plans?: PricingPlan[];
  demoHref?: string;
};

export function PricingSection({
  id = "pricing",
  eyebrow = "Pricing",
  title = "Plans that scale with your customer work.",
  description = "Choose the monthly capacity that fits your team today, with room to grow into more agents, conversations, automation, and integrations.",
  plans = pricingPlans,
  demoHref,
}: PricingSectionProps = {}) {
  return (
    <section id={id} className="section-space bg-soft scroll-mt-24">
      <div className="page-shell">
        <ScrollReveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title mt-4">{title}</h2>
            <p className="section-copy mt-5 max-w-2xl">{description}</p>
          </div>
          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 px-5 py-4 text-sm leading-6 text-slate-700">
            <strong className="text-navy block">Billed monthly in QAR</strong>
            Discounts are available for yearly plans.
          </div>
        </ScrollReveal>

        <div className="scroll-reveal-stagger mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "pricing-card flex flex-col rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8",
                plan.featured && "pricing-card-featured border-cyan-300",
              )}
            >
              <div>
                <div className="flex min-h-7 items-center justify-between gap-4">
                  <h3 className="text-navy text-xl font-semibold">
                    {plan.name}
                  </h3>
                  {plan.featured ? (
                    <span className="text-teal rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold">
                      Most popular
                    </span>
                  ) : null}
                </div>
                {plan.audience ? (
                  <p className="mt-4 min-h-12 text-sm leading-6 text-slate-600">
                    Best for {plan.audience}.
                  </p>
                ) : null}
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-navy text-5xl font-semibold tracking-[-.05em]">
                    QAR {plan.price}
                  </span>
                  <span className="pb-1.5 text-sm text-slate-500">
                    / {plan.cadence}
                  </span>
                </div>
              </div>

              <div className="my-8 h-px bg-slate-200" />

              <p className="text-xs font-semibold tracking-[.16em] text-slate-500 uppercase">
                Everything included
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <Check aria-hidden="true" size={13} strokeWidth={2.5} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.note ? (
                <p className="mt-7 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-slate-700">
                  {plan.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <BookDemoButton href={demoHref} />
        </div>
      </div>
    </section>
  );
}
