import { CompanyHero } from "@/components/marketing/company-hero";
import { CompanyIntro } from "@/components/marketing/company-intro";
import { ConnectedWorkflow } from "@/components/marketing/connected-workflow";
import {
  FinalCta,
  KnowledgeBaseCta,
} from "@/components/marketing/cta-sections";
import { FaqSection } from "@/components/marketing/faq-section";
import { IntegrationsRow } from "@/components/marketing/integrations-row";
import { NarrativeReveal } from "@/components/marketing/narrative-reveal";
import { ProductsSection } from "@/components/marketing/products-section";
import { SolutionsShowcase } from "@/components/marketing/solutions-showcase";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";

export default function Home() {
  return (
    <>
      <CompanyHero />
      <IntegrationsRow />
      <ProductsSection />
      <SolutionsShowcase />
      <NarrativeReveal />
      <ConnectedWorkflow />
      <KnowledgeBaseCta />
      <CompanyIntro />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
