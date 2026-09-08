import { siteConfig } from "@/data/site";

export const productNavigation = [
  {
    label: "Wazely CRM",
    description: "Customer conversations, campaigns, and automation",
    href: "/crm",
  },
  {
    label: "Wazely ERP",
    description: "Sales, finance, accounting, and operations",
    href: "/erp",
  },
  {
    label: "Wazely Color",
    description: "Free AI brand color suite — palettes, boards, exports",
    href: "https://color.wazely.io/",
  },
] as const;

export const navigation = [
  { label: "Solutions", sectionId: "solutions" },
  { label: "Resources", sectionId: "resources" },
  { label: "About", sectionId: "about" },
  {
    label: "Knowledge Base",
    href: siteConfig.knowledgeBaseUrl,
    // Point at the product-specific knowledge base when on that product page.
    hrefByPathPrefix: {
      "/erp": siteConfig.erpKnowledgeBaseUrl,
    },
  },
] as const;

export type NavigationItem = (typeof navigation)[number];

export const footerGroups = [
  {
    title: "Products",
    links: [
      { label: "Wazely CRM", href: "/crm" },
      { label: "Wazely ERP", href: "/erp" },
      { label: "Wazely Color", href: "https://color.wazely.io/" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "Knowledge Base", href: siteConfig.knowledgeBaseUrl }],
  },
  {
    title: "Company",
    links: [
      { label: "About Wazely", href: "/#about" },
      { label: "Our products", href: "/#products" },
    ],
  },
] as const;
