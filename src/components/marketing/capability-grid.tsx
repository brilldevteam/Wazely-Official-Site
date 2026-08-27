import { capabilities } from "@/data/capabilities";

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="section-space bg-soft scroll-mt-24">
      <div className="page-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Connected capabilities</p>
          <h2 className="section-title mt-4">
            More of the customer journey, in context.
          </h2>
          <p className="section-copy mt-5">
            Coordinate the practical work around every customer conversation
            without losing the details that help teams act.
          </p>
        </div>
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group bg-white p-6 transition-colors hover:bg-slate-50 sm:p-8"
            >
              <div className="text-teal flex size-10 items-center justify-center rounded-xl bg-cyan-50 transition-transform group-hover:-translate-y-0.5">
                <Icon aria-hidden="true" size={20} />
              </div>
              <h3 className="text-navy mt-8 text-lg font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
