import type { LucideIcon } from "lucide-react";

import { BookDemoButton } from "@/components/marketing/book-demo-button";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export type CapabilityItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CapabilitySectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly CapabilityItem[];
  showDemoButton?: boolean;
  demoHref?: string;
};

export function CapabilitySection({
  id,
  eyebrow,
  title,
  description,
  items,
  showDemoButton = true,
  demoHref,
}: CapabilitySectionProps) {
  return (
    <section id={id} className="section-space bg-soft scroll-mt-24">
      <div className="page-shell">
        <ScrollReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title mt-4">{title}</h2>
            <p className="section-copy mt-5 max-w-2xl">{description}</p>
          </div>
          {showDemoButton ? (
            <div className="lg:-translate-y-4">
              <BookDemoButton href={demoHref} />
            </div>
          ) : null}
        </ScrollReveal>
        <div className="scroll-reveal-stagger mt-12 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(
            ({
              title: itemTitle,
              description: itemDescription,
              icon: Icon,
            }) => (
              <article
                key={itemTitle}
                className="group bg-white p-6 transition-colors hover:bg-slate-50 sm:p-8"
              >
                <div className="text-teal flex size-10 items-center justify-center rounded-xl bg-cyan-50 transition-transform group-hover:-translate-y-0.5">
                  <Icon aria-hidden="true" size={20} />
                </div>
                <h3 className="text-navy mt-8 text-lg font-semibold tracking-tight">
                  {itemTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {itemDescription}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
