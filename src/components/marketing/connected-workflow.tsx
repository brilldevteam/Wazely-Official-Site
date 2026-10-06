import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { workflowSteps } from "@/data/connected-workflow";

export function ConnectedWorkflow() {
  return (
    <section className="section-space bg-soft">
      <div className="page-shell">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            From a WhatsApp message to a paid invoice.
          </h2>
          <p className="section-copy mt-5">
            Wazely CRM, ERP, and Color are built to hand off to each other,
            not sit as three separate apps.
          </p>
        </ScrollReveal>

        <ScrollReveal
          stagger
          className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-3"
        >
          {workflowSteps.map((item) => (
            <div key={item.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="text-teal flex size-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold">
                  {item.step}
                </span>
                {item.step % 3 !== 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 border-t-2 border-dashed border-slate-300 sm:block"
                  />
                )}
              </div>
              <h3 className="text-navy mt-4 text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
