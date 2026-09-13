export type Product = {
  slug: "crm" | "erp" | "color";
  name: string;
  category: string;
  status: string;
  tier: "Pro" | "Free";
  description: string;
  href: string;
  appUrl: string;
  cta: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
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
    tier: "Pro",
    description:
      "A connected CRM workspace for customer conversations, contacts, campaigns, automation, and collaborative customer management.",
    href: "/crm",
    appUrl: "https://crm.wazely.io",
    cta: "Explore Wazely CRM",
    image: "/screenshots/crm-dashboard.png",
    imageWidth: 1672,
    imageHeight: 940,
    imageAlt: "Wazely CRM dashboard with customer and campaign activity",
    capabilities: ["Conversations", "Campaigns", "Automation", "Teamwork"],
    available: true,
  },
  {
    slug: "erp",
    name: "Wazely ERP",
    category: "Business operations",
    status: "Available now",
    tier: "Pro",
    description:
      "A practical ERP workspace for sales, purchases, payments, accounting, reporting, and daily business operations.",
    href: "/erp",
    appUrl: "https://erp.wazely.io",
    cta: "Explore Wazely ERP",
    image: "/screenshots/erp/dashboard.png",
    imageWidth: 1920,
    imageHeight: 950,
    imageAlt: "Wazely ERP dashboard with financial and operational activity",
    capabilities: ["Sales", "Purchases", "Accounting", "Reports"],
    available: true,
  },
  {
    slug: "color",
    name: "Wazely Color",
    category: "Design toolkit",
    status: "Available now",
    tier: "Free",
    description:
      "A free, AI-powered brand color suite: generate palettes from a description, build professional brand boards, check WCAG contrast, craft gradients, and export to CSS, Tailwind, Figma, SwiftUI, and more.",
    href: "https://color.wazely.io/",
    appUrl: "https://color.wazely.io/",
    cta: "Open Wazely Color",
    image: "/screenshots/color-hero.png",
    imageWidth: 1600,
    imageHeight: 728,
    imageAlt:
      "Wazely Color brand toolkit with an AI-generated colour palette board",
    capabilities: ["AI palettes", "Brand boards", "Contrast", "Exports"],
    available: true,
  },
];
