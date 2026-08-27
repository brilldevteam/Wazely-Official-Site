import { siteConfig } from "@/data/site";

export type Product = {
  name: string;
  status?: string;
  description: string;
  href?: string;
  cta?: string;
  available: boolean;
};

export const products: Product[] = [
  {
    name: "Wazely CRM",
    status: "Available now",
    description:
      "A connected CRM workspace for customer conversations, contacts, campaigns, automation, and collaborative customer management.",
    href: siteConfig.crmUrl,
    cta: "Explore Wazely CRM",
    available: true,
  },
  {
    name: "More Wazely products are coming",
    description:
      "Wazely is building a focused family of practical tools for connected business work.",
    available: false,
  },
];
