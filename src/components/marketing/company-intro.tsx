import { Cable, MessageCircleMore, Network, Workflow } from "lucide-react";

import { BookDemoButton } from "@/components/marketing/book-demo-button";

const pillars = [
  {
    label: "Customer relationships",
    description: "Conversations, contacts, and campaigns in one workspace.",
    icon: Network,
  },
  {
    label: "Communication",
    description: "WhatsApp handled by a team, not one shared phone.",
    icon: MessageCircleMore,
  },
  {
    label: "Business workflows",
    description: "Quotations and invoices connected to real accounting.",
    icon: Workflow,
  },
  {
    label: "Everyday operations",
    description: "Stock, payments, and reports kept out of spreadsheets.",
    icon: Cable,
  },
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
              Most growing GCC businesses run on WhatsApp Business,
              spreadsheets, and whatever accounting tool came first. Wazely
              replaces that patchwork with two connected products: a
              WhatsApp-native CRM for customer conversations and campaigns,
              and an ERP for quotations, invoicing, and accounting. Built for
              teams across Qatar, Saudi Arabia, the UAE, Kuwait, Bahrain, and
              Oman, with a free AI color toolkit included for building your
              brand.
            </p>
            <div className="scroll-reveal-stagger mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
              {pillars.map(({ label, description, icon: Icon }) => (
                <div
                  key={label}
                  className="flex min-h-28 flex-col justify-between bg-white p-5 sm:min-h-32 sm:p-6"
                >
                  <Icon aria-hidden="true" className="text-teal" size={21} />
                  <div className="mt-7">
                    <span className="text-navy text-sm font-semibold sm:text-base">
                      {label}
                    </span>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
