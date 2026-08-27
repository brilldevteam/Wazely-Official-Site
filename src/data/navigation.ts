import { siteConfig } from "@/data/site";

export const navigation = [
  { label: "About", sectionId: "about" },
  { label: "Wazely CRM", sectionId: "wazely-crm" },
  { label: "Solutions", sectionId: "capabilities" },
  { label: "Products", sectionId: "products" },
  { label: "Resources", sectionId: "resources" },
  { label: "Knowledge Base", href: siteConfig.knowledgeBaseUrl },
] as const;

export type NavigationItem = (typeof navigation)[number];

export const footerGroups = [
  {
    title: "Product",
    links: [{ label: "Wazely CRM", href: siteConfig.crmUrl }],
  },
  {
    title: "Resources",
    links: [{ label: "Knowledge Base", href: siteConfig.knowledgeBaseUrl }],
  },
  {
    title: "Company",
    links: [{ label: "About Wazely", href: "/#about" }],
  },
] as const;
