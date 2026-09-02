import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { CompanyIntro } from "@/components/marketing/company-intro";
import {
  FinalCta,
  KnowledgeBaseCta,
} from "@/components/marketing/cta-sections";
import { FeatureShowcase } from "@/components/marketing/feature-showcase";
import { Hero } from "@/components/marketing/hero";
import { ProductOverview } from "@/components/marketing/product-overview";
import { ProductsSection } from "@/components/marketing/products-section";
import { PricingSection } from "@/components/marketing/pricing-section";

const features = [
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
    showBookDemo: true,
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

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ProductOverview />
      {features.map((feature) => (
        <FeatureShowcase key={feature.eyebrow} {...feature} />
      ))}
      <CapabilityGrid />
      <ProductsSection />
      <PricingSection />
      <KnowledgeBaseCta />
      <FinalCta />
    </>
  );
}
