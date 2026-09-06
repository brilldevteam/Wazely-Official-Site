import { CapabilitySection } from "@/components/marketing/capability-section";
import { CompanyHero } from "@/components/marketing/company-hero";
import { CompanyIntro } from "@/components/marketing/company-intro";
import {
  FinalCta,
  KnowledgeBaseCta,
} from "@/components/marketing/cta-sections";
import { ProductsSection } from "@/components/marketing/products-section";
import { companyCapabilities } from "@/data/product-capabilities";

export default function Home() {
  return (
    <>
      <CompanyHero />
      <ProductsSection />
      <CapabilitySection
        id="solutions"
        eyebrow="Connected business software"
        title="Customer work and business operations, clearly connected."
        description="Wazely gives teams focused tools for the relationships and operations that keep a business moving—without forcing everything into one oversized product."
        items={companyCapabilities}
      />
      <KnowledgeBaseCta />
      <CompanyIntro />
      <FinalCta />
    </>
  );
}
