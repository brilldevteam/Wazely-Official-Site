import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function KnowledgeBaseCta() {
  return (
    <section id="resources" className="section-space bg-soft scroll-mt-24">
      <div className="page-shell">
        <div className="grid items-center gap-8 rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-42px_rgba(15,29,53,.5)] sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:p-12">
          <div className="flex size-13 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
            <BookOpen aria-hidden="true" size={24} />
          </div>
          <div>
            <h2 className="text-navy text-2xl font-semibold tracking-tight sm:text-3xl">
              Need help with Wazely CRM?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Find practical guides for setup, WhatsApp connections, contacts,
              templates, campaigns, automation, and troubleshooting.
            </p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link href={siteConfig.knowledgeBaseUrl}>
              Visit the Knowledge Base{" "}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-soft pb-18 sm:pb-24 lg:pb-30">
      <div className="page-shell">
        <div className="final-cta overflow-hidden rounded-[30px] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
          <p className="text-xs font-semibold tracking-[.2em] text-cyan-100 uppercase">
            Wazely CRM
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.02] font-semibold tracking-[-.045em] text-balance">
            Bring your customer work into one connected place.
          </h2>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="cta-light-button text-navy mt-9 border-white bg-white hover:bg-cyan-50"
          >
            <Link href={siteConfig.crmUrl}>
              Explore Wazely CRM <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
