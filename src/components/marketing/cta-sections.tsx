import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

type KnowledgeBaseCtaProps = {
  title?: string;
  description?: string;
};

export function KnowledgeBaseCta({
  title = "Guidance for every Wazely workspace.",
  description = "Find practical help for setting up Wazely products, organizing your workspace, and keeping everyday work moving.",
}: KnowledgeBaseCtaProps = {}) {
  return (
    <section id="resources" className="section-space bg-soft scroll-mt-24">
      <div className="page-shell">
        <ScrollReveal
          stagger
          className="grid items-center gap-8 rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-42px_rgba(15,29,53,.5)] sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:p-12"
        >
          <div className="flex size-13 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
            <BookOpen aria-hidden="true" size={24} />
          </div>
          <div>
            <h2 className="text-navy text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              {description}
            </p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link href={siteConfig.knowledgeBaseUrl}>
              Visit the Knowledge Base{" "}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

type FinalCtaProps = {
  eyebrow?: string;
  title?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  id?: string;
};

export function FinalCta({
  eyebrow = "Wazely",
  title = "Choose the Wazely product that fits your work.",
  primaryLabel = "Explore Wazely CRM",
  primaryHref = "/crm",
  secondaryLabel = "Explore Wazely ERP",
  secondaryHref = "/erp",
  id = "book-demo",
}: FinalCtaProps = {}) {
  return (
    <section id={id} className="bg-soft scroll-mt-24 pb-18 sm:pb-24 lg:pb-30">
      <div className="page-shell">
        <ScrollReveal className="final-cta overflow-hidden rounded-[30px] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
          <p className="text-xs font-semibold tracking-[.2em] text-cyan-100 uppercase">
            {eyebrow}
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.04] font-semibold tracking-[-.04em] text-balance">
            {title}
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="cta-light-button text-navy border-white bg-white hover:bg-cyan-50"
            >
              <Link href={primaryHref}>
                {primaryLabel} <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="border-white/55 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              <Link href={secondaryHref}>
                {secondaryLabel} <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
