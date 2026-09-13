import type { Metadata } from "next";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bot,
  Building2,
  FileText,
  MessageSquareText,
  ReceiptText,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { getSiteUrl, siteConfig } from "@/data/site";
import { createPageMetadata, websiteJsonLd } from "@/lib/seo";

const description =
  "Find setup guides, product documentation, and practical help for Wazely CRM and Wazely ERP.";

export const metadata: Metadata = createPageMetadata({
  title: "Knowledge Base for Wazely CRM and ERP",
  description,
  path: "/knowledge-base",
});

const knowledgeBases = [
  {
    name: "Wazely CRM Knowledge Base",
    product: "Wazely CRM",
    description:
      "Guidance for setting up your workspace, connecting WhatsApp, managing contacts, running campaigns, and building automation.",
    href: siteConfig.knowledgeBaseUrl,
    icon: MessageSquareText,
    accent: "crm",
    topics: [
      { label: "Workspace setup", icon: Building2 },
      { label: "Contacts and teamwork", icon: UsersRound },
      { label: "Campaigns and templates", icon: FileText },
      { label: "Automation and support", icon: Bot },
    ],
  },
  {
    name: "Wazely ERP Knowledge Base",
    product: "Wazely ERP",
    description:
      "Practical documentation for sales, purchasing, payments, accounting, reporting, and everyday business operations.",
    href: siteConfig.erpKnowledgeBaseUrl,
    icon: BarChart3,
    accent: "erp",
    topics: [
      { label: "Sales and quotations", icon: ReceiptText },
      { label: "Purchases and payments", icon: FileText },
      { label: "Accounting controls", icon: Building2 },
      { label: "Reports and operations", icon: BarChart3 },
    ],
  },
] as const;

const knowledgeBaseJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": new URL("/knowledge-base#page", getSiteUrl()).toString(),
  url: new URL("/knowledge-base", getSiteUrl()).toString(),
  name: "Wazely Knowledge Base",
  description,
  inLanguage: siteConfig.language,
  isPartOf: { "@id": websiteJsonLd["@id"] },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: knowledgeBases.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.href,
    })),
  },
};

export default function KnowledgeBasePage() {
  return (
    <>
      <JsonLd data={knowledgeBaseJsonLd} />
      <section className="hero-surface overflow-hidden pt-16 pb-18 sm:pt-22 sm:pb-24 lg:pt-26 lg:pb-28">
        <div className="page-shell text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:text-violet-300">
            <BookOpen aria-hidden="true" size={27} />
          </div>
          <p className="eyebrow mt-7 justify-center">Wazely Knowledge Base</p>
          <h1 className="text-navy mx-auto mt-5 max-w-5xl text-[clamp(2.7rem,6vw,5.5rem)] leading-[.98] font-semibold tracking-[-.055em] text-balance">
            Find the right guidance for your Wazely workspace.
          </h1>
          <p className="section-copy mx-auto mt-7 max-w-3xl text-balance">
            Choose your product to open its dedicated documentation, setup
            instructions, workflow guides, and troubleshooting resources.
          </p>
        </div>
      </section>

      <section className="section-space bg-soft">
        <div className="page-shell grid gap-6 lg:grid-cols-2">
          {knowledgeBases.map(
            ({
              name,
              product,
              description: itemDescription,
              href,
              icon: ProductIcon,
              accent,
              topics,
            }) => (
              <article
                key={name}
                className={`knowledge-card knowledge-card-${accent} flex flex-col rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_28px_75px_-52px_rgba(15,29,53,.55)] sm:p-10 lg:p-12`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex size-13 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 dark:text-cyan-300">
                    <ProductIcon aria-hidden="true" size={25} />
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    Available now
                  </span>
                </div>
                <p className="text-teal mt-10 text-xs font-semibold tracking-[.15em] uppercase">
                  {product}
                </p>
                <h2 className="text-navy mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">
                  {name}
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  {itemDescription}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {topics.map(({ label, icon: TopicIcon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
                    >
                      <TopicIcon
                        aria-hidden="true"
                        className="text-teal shrink-0"
                        size={17}
                      />
                      {label}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-1 items-end">
                  <Button asChild variant="gradient" size="lg">
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      Open {product} guides
                      <ArrowUpRight aria-hidden="true" size={18} />
                    </Link>
                  </Button>
                </div>
              </article>
            ),
          )}
        </div>
      </section>
    </>
  );
}
