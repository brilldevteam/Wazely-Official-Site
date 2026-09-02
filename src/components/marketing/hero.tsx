import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { AnimatedHeroHeading } from "@/components/marketing/animated-hero-heading";
import { HeroAssembly } from "@/components/marketing/hero-assembly";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-surface overflow-hidden pt-16 pb-18 sm:pt-22 sm:pb-24 lg:pt-26 lg:pb-30">
      <div className="page-shell text-center">
        <p className="eyebrow justify-center">
          Wazely CRM — our flagship product
        </p>
        <AnimatedHeroHeading />
        <p className="hero-copy-reveal mx-auto mt-7 max-w-2xl text-[clamp(1.05rem,2vw,1.25rem)] leading-8 text-balance text-slate-600">
          Wazely CRM brings customer conversations, campaigns, contacts,
          automation, and team collaboration into one connected workspace.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        <HeroAssembly />
      </div>
    </section>
  );
}
