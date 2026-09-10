import type { Metadata } from "next";

import { CapabilitySection } from "@/components/marketing/capability-section";
import { FinalCta } from "@/components/marketing/cta-sections";
import { ErpHero } from "@/components/marketing/erp-hero";
import { FeatureShowcase } from "@/components/marketing/feature-showcase";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ProductOverviewPanel } from "@/components/marketing/product-overview-panel";
import { erpCapabilities } from "@/data/product-capabilities";
import { erpPricingPlans } from "@/data/pricing";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Wazely ERP",
  description:
    "Connect sales, purchases, payments, accounting, reporting, and daily business operations with Wazely ERP.",
  alternates: { canonical: "/erp" },
  openGraph: {
    title: "Wazely ERP | Connected Business Operations",
    description:
      "A practical ERP workspace for sales, finance, accounting, payments, reporting, and operational work.",
    url: "/erp",
  },
};

const erpFeatures = [
  {
    eyebrow: "Sales workflow",
    title: "Move confidently from quotation to invoice.",
    description:
      "Create, find, filter, and follow sales documents from one organized workspace, with status and customer context kept visible.",
    points: [
      "Quotation management",
      "Sales invoices",
      "Document status tracking",
      "Search and import tools",
    ],
    image: "/screenshots/erp/quotations-and-invoices.png",
    imageAlt: "Wazely ERP quotations and invoices management screen",
    imagePosition: "left" as const,
  },
  {
    eyebrow: "Accounting foundation",
    title: "Keep financial structure clear as you grow.",
    description:
      "Organize financial activity with a practical chart of accounts that keeps codes, account types, balances, and status easy to review.",
    points: [
      "Chart of accounts",
      "Account codes and types",
      "Balance visibility",
      "Active account controls",
    ],
    image: "/screenshots/erp/accounting-chart-of-accounts.png",
    imageAlt: "Wazely ERP accounting chart of accounts",
    imagePosition: "right" as const,
  },
  {
    eyebrow: "Operational reporting",
    title: "Turn business activity into useful answers.",
    description:
      "Review the reports that support daily decisions, including invoice aging, bill aging, tax summaries, and customer or vendor balances.",
    points: [
      "Invoice and bill aging",
      "Tax summaries",
      "Customer balances",
      "Vendor balances and exports",
    ],
    image: "/screenshots/erp/reports.png",
    imageAlt: "Wazely ERP business and financial reports",
    imagePosition: "left" as const,
  },
];

export default function ErpPage() {
  return (
    <>
      <ErpHero />
      <ProductOverviewPanel
        id="wazely-erp"
        name="Wazely ERP"
        description="Keep core financial documents, business relationships, payments, and reports in one clear operational workspace."
        workspaceLabel="One operational workspace"
        items={[
          "Sales and quotations",
          "Purchases and vendors",
          "Payments and vouchers",
          "Accounting controls",
          "Business reporting",
        ]}
        productUrl={siteConfig.erpUrl}
      />
      {erpFeatures.map((feature) => (
        <FeatureShowcase
          key={feature.eyebrow}
          {...feature}
          imageWidth={1920}
          imageHeight={950}
        />
      ))}
      <CapabilitySection
        id="erp-capabilities"
        eyebrow="ERP capabilities"
        title="The operational details stay connected."
        description="Wazely ERP supports the records and workflows behind sales, purchasing, finance, reporting, and controlled team access."
        items={erpCapabilities}
        demoHref={siteConfig.erpUrl}
      />
      <PricingSection
        id="erp-pricing"
        eyebrow="Wazely ERP pricing"
        title="ERP plans for every stage of growth."
        description="Start with the essentials, add deeper financial control as your company grows, or choose the complete ERP experience for larger teams and operations."
        plans={erpPricingPlans}
        demoHref={siteConfig.erpUrl}
      />
      <FinalCta
        eyebrow="Wazely ERP"
        title="Bring financial and operational work into one clear workspace."
        primaryLabel="Open Wazely ERP"
        primaryHref={siteConfig.erpUrl}
        secondaryLabel="Book a demo"
        secondaryHref={siteConfig.erpUrl}
        id="erp-demo"
      />
    </>
  );
}
