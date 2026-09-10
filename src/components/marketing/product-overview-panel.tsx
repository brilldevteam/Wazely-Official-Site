import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { BookDemoButton } from "@/components/marketing/book-demo-button";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Button } from "@/components/ui/button";

type ProductOverviewPanelProps = {
  id: string;
  name: string;
  description: string;
  workspaceLabel: string;
  items: readonly string[];
  productUrl: string;
};

export function ProductOverviewPanel({
  id,
  name,
  description,
  workspaceLabel,
  items,
  productUrl,
}: ProductOverviewPanelProps) {
  return (
    <section id={id} className="section-space bg-soft scroll-mt-24">
      <div className="page-shell">
        <ScrollReveal className="crm-panel grid overflow-hidden rounded-[28px] border border-emerald-200/80 bg-white lg:grid-cols-[.92fr_1.08fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <CheckCircle2 aria-hidden="true" size={18} /> Available now
            </div>
            <p className="mt-9 text-sm font-medium text-slate-500">Product</p>
            <h2 className="text-navy mt-2 text-[clamp(2.25rem,4vw,4.5rem)] leading-none font-semibold tracking-[-.045em]">
              {name}
            </h2>
            <p className="section-copy mt-6 max-w-xl">{description}</p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="secondary" size="lg">
                <Link href={productUrl}>
                  Open {name} <ArrowUpRight aria-hidden="true" size={18} />
                </Link>
              </Button>
              <BookDemoButton href={productUrl} />
            </div>
          </div>
          <div className="crm-workspace-panel border-t border-emerald-100 bg-[linear-gradient(145deg,#f0fdfa,#f8fafc)] p-7 sm:p-10 lg:border-t-0 lg:border-l lg:p-14">
            <p className="text-xs font-semibold tracking-[.18em] text-emerald-700 uppercase">
              {workspaceLabel}
            </p>
            <div className="mt-8 divide-y divide-emerald-100 border-y border-emerald-100">
              {items.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-4 sm:py-5"
                >
                  <span className="text-navy font-medium">{item}</span>
                  <span className="font-mono text-xs text-emerald-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
