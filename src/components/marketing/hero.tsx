import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { BrowserFrame } from "@/components/marketing/browser-frame";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-surface overflow-hidden pt-16 pb-18 sm:pt-22 sm:pb-24 lg:pt-26 lg:pb-30">
      <div className="page-shell text-center">
        <p className="eyebrow justify-center">
          Wazely CRM — our flagship product
        </p>
        <h1 className="text-navy mx-auto mt-6 max-w-5xl text-[clamp(2.65rem,6.5vw,5.75rem)] leading-[.96] font-semibold tracking-[-.055em] text-balance">
          Turn every customer conversation into{" "}
          <span className="gradient-text">growth.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-[clamp(1.05rem,2vw,1.25rem)] leading-8 text-balance text-slate-600">
          Wazely CRM brings customer conversations, campaigns, contacts,
          automation, and team collaboration into one connected workspace.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <Link href={siteConfig.crmUrl}>
              Explore Wazely CRM <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#wazely-crm">
              See what it can do <ArrowDown aria-hidden="true" size={17} />
            </Link>
          </Button>
        </div>
        <div className="relative mx-auto mt-14 max-w-[1280px] sm:mt-18">
          <div className="hero-halo" aria-hidden="true" />
          <BrowserFrame
            src="/screenshots/crm-dashboard.png"
            alt="Wazely CRM dashboard showing customer and campaign activity"
            width={1680}
            height={944}
            priority
            sizes="(max-width: 1320px) 94vw, 1280px"
            className="relative"
          />
        </div>
      </div>
    </section>
  );
}
