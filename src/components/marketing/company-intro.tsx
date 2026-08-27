import { Cable, MessageCircleMore, Network, Workflow } from "lucide-react";

const pillars = [
  { label: "Customer relationships", icon: Network },
  { label: "Communication", icon: MessageCircleMore },
  { label: "Business workflows", icon: Workflow },
  { label: "Everyday operations", icon: Cable },
];

export function CompanyIntro() {
  return (
    <section id="about" className="section-space scroll-mt-24 bg-white">
      <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="eyebrow">About Wazely</p>
          <h2 className="section-title mt-4 max-w-xl">
            Practical software for work that needs to stay connected.
          </h2>
        </div>
        <div>
          <p className="section-copy max-w-2xl">
            Wazely creates connected business software that helps teams bring
            customer work, communication, and daily operations together. Wazely
            CRM is the first available product in a platform designed to grow
            with the way businesses work.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
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
    </section>
  );
}
