import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { AnimatedHeroHeading } from "@/components/marketing/animated-hero-heading";
import { ErpHeroAssembly } from "@/components/marketing/erp-hero-assembly";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function ErpHero() {
  return (
    <section className="hero-surface overflow-hidden pt-16 pb-18 sm:pt-22 sm:pb-24 lg:pt-26 lg:pb-30">
      <div className="page-shell text-center">
        <p className="eyebrow justify-center">Wazely ERP</p>
        <AnimatedHeroHeading
          words={["Run", "business", "operations", "with", "clarity."]}
          gradientWord="clarity."
          ariaLabel="Run business operations with clarity."
          breakBeforeWord="operations"
        />
        <p className="hero-copy-reveal mx-auto mt-7 max-w-4xl text-[clamp(1.05rem,2vw,1.25rem)] leading-8 text-balance text-slate-600">
          Wazely ERP brings sales, purchases, payments, accounting, and
          reporting into one practical workspace built for everyday business
          control.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <Link href={siteConfig.erpUrl}>
              Open Wazely ERP <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#wazely-erp">
              See what it can do <ArrowDown aria-hidden="true" size={17} />
            </Link>
          </Button>
        </div>
        <ErpHeroAssembly />
      </div>
    </section>
  );
}
