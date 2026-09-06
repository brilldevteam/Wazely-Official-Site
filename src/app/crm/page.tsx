import type { Metadata } from "next";

import { CapabilityGrid } from "@/components/marketing/capability-grid";
import {
  FinalCta,
  KnowledgeBaseCta,
} from "@/components/marketing/cta-sections";
import { FeatureShowcase } from "@/components/marketing/feature-showcase";
import { Hero } from "@/components/marketing/hero";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ProductOverview } from "@/components/marketing/product-overview";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Wazely CRM",
  description:
    "Connect customer conversations, contacts, campaigns, automation, and team collaboration with Wazely CRM.",
  alternates: { canonical: "/crm" },
  openGraph: {
    title: "Wazely CRM | Connected Customer Work",
    description:
      "A connected workspace for customer conversations, campaigns, contacts, automation, and teamwork.",
    url: "/crm",
  },
};

const crmFeatures = [
  {
    eyebrow: "Shared inbox",
    title: "Give every conversation a team behind it.",
    description:
      "Bring shared customer conversations and the context around them into one clear view, so agents can respond and coordinate with confidence.",
    points: [
      "Agent assignment",
      "Tags and notes",
      "Contact context",
      "Rich WhatsApp interactions",
    ],
    image: "/screenshots/crm-shared-inbox.png",
    imageAlt: "Wazely CRM shared inbox with an active customer conversation",
    imagePosition: "left" as const,
  },
  {
    eyebrow: "Campaigns and analytics",
    title: "Create broadcasts and track delivery.",
    description:
      "Build template-based WhatsApp messaging campaigns and keep sent, delivered, read, and failed activity visible in the same workspace.",
    points: [
      "Template-based broadcasts",
      "Campaign creation",
      "Delivery visibility",
      "Read and failed activity",
    ],
    image: "/screenshots/crm-campaigns.png",
    imageAlt: "Wazely CRM campaign dashboard with delivery and read analytics",
    imagePosition: "right" as const,
  },
  {
    eyebrow: "Visual automation",
    title: "Build practical workflows without code.",
    description:
      "Connect triggers and customer-facing actions on a visual canvas to make repeatable work easier to see, manage, and improve.",
    points: [
      "Triggers and conditions",
      "Messages and buttons",
      "Media and locations",
      "Wait and delay steps",
    ],
    image: "/screenshots/crm-automation-builder.png",
    imageAlt:
      "Wazely CRM visual automation builder with connected workflow steps",
    imagePosition: "left" as const,
  },
];

export default function CrmPage() {
  return (
    <>
      <Hero />
      <ProductOverview />
      {crmFeatures.map((feature) => (
        <FeatureShowcase key={feature.eyebrow} {...feature} />
      ))}
      <CapabilityGrid />
      <PricingSection />
      <KnowledgeBaseCta
        title="Need help with Wazely CRM?"
        description="Find practical guides for setup, WhatsApp connections, contacts, templates, campaigns, automation, and troubleshooting."
      />
      <FinalCta
        eyebrow="Wazely CRM"
        title="Bring your customer work into one connected place."
        primaryLabel="Open Wazely CRM"
        primaryHref={siteConfig.crmUrl}
        secondaryLabel="Book a demo"
        secondaryHref={siteConfig.demoUrl}
        id="crm-demo"
      />
    </>
  );
}
