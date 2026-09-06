import { Cable, MessageCircleMore, Network, Workflow } from "lucide-react";

import { BookDemoButton } from "@/components/marketing/book-demo-button";

const pillars = [
  { label: "Customer relationships", icon: Network },
  { label: "Communication", icon: MessageCircleMore },
  { label: "Business workflows", icon: Workflow },
  { label: "Everyday operations", icon: Cable },
];

export function CompanyIntro() {
  return (
    <section id="about" className="section-space scroll-mt-24 bg-white">
      <div className="page-shell">
        <div className="scroll-reveal-stagger grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div className="flex flex-col">
            <p className="eyebrow">About Wazely</p>
            <h2 className="section-title mt-4 max-w-xl">
              Practical software that keeps work connected.
            </h2>
            <div className="mt-10 flex flex-1 items-center justify-start lg:translate-y-10">
              <BookDemoButton />
            </div>
          </div>
          <div>
            <p className="section-copy max-w-2xl">
              Wazely creates connected business software that helps teams bring
              customer relationships, communication, finance, and daily
              operations together. Wazely CRM and Wazely ERP are focused
              products designed to grow with the way businesses work.
            </p>
            <div className="scroll-reveal-stagger mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
              {pillars.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex min-h-28 flex-col justify-between bg-white p-5 sm:min-h-32 sm:p-6"
                >
                  <Icon aria-hidden="true" className="text-teal" size={21} />
                  <span className="text-navy mt-7 text-sm font-semibold sm:text-base">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
