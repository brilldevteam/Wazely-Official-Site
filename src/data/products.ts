export type Product = {
  slug: "crm" | "erp";
  name: string;
  category: string;
  status: string;
  description: string;
  href: string;
  appUrl: string;
  cta: string;
  image: string;
  imageAlt: string;
  capabilities: readonly string[];
  available: boolean;
};

export const products: Product[] = [
  {
    slug: "crm",
    name: "Wazely CRM",
    category: "Customer relationships",
    status: "Available now",
    description:
      "A connected CRM workspace for customer conversations, contacts, campaigns, automation, and collaborative customer management.",
    href: "/crm",
    appUrl: "https://crm.wazely.io",
    cta: "Explore Wazely CRM",
    image: "/screenshots/crm-dashboard.png",
    imageAlt: "Wazely CRM dashboard with customer and campaign activity",
    capabilities: ["Conversations", "Campaigns", "Automation", "Teamwork"],
    available: true,
  },
  {
    slug: "erp",
    name: "Wazely ERP",
    category: "Business operations",
    status: "Available now",
    description:
      "A practical ERP workspace for sales, purchases, payments, accounting, reporting, and daily business operations.",
    href: "/erp",
    appUrl: "https://erp.wazely.io",
    cta: "Explore Wazely ERP",
    image: "/screenshots/erp/dashboard.png",
    imageAlt: "Wazely ERP dashboard with financial and operational activity",
    capabilities: ["Sales", "Purchases", "Accounting", "Reports"],
    available: true,
  },
];
