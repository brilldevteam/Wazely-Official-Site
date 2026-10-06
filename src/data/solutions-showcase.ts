import { MessagesSquare, Palette, Receipt } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { siteConfig } from "@/data/site";

export type ChipGroup = {
  label: string;
  items: readonly string[];
};

export type SolutionTab = {
  id: string;
  tabLabel: string;
  eyebrow: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  bullets: readonly string[];
  chipGroups: readonly [ChipGroup, ChipGroup];
  bannerText: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export const solutionTabs: readonly SolutionTab[] = [
  {
    id: "conversations",
    tabLabel: "Customer conversations",
    eyebrow: "Wazely CRM",
    icon: MessagesSquare,
    headline: "Every WhatsApp conversation, in one shared inbox.",
    description:
      "Agents reply from a shared business number instead of a personal phone, with contact history and context visible to the whole team.",
    bullets: [
      "Shared WhatsApp inbox",
      "Agent assignment and notes",
      "Contacts, tags, and segments",
      "Template-based broadcasts",
    ],
    chipGroups: [
      {
        label: "Also included",
        items: [
          "Visual automation builder",
          "Message template library",
          "Quick replies and media",
          "Appointment booking",
        ],
      },
      {
        label: "Also connects with",
        items: ["Facebook", "Instagram", "Telegram", "Google Sheets"],
      },
    ],
    bannerText: "Ready to bring every conversation into one inbox?",
    ctaLabel: "Explore Wazely CRM",
    ctaHref: "/crm",
    image: "/screenshots/crm-shared-inbox.png",
    imageAlt: "Wazely CRM shared inbox with an active customer conversation",
    imageWidth: 1680,
    imageHeight: 944,
  },
  {
    id: "accounting",
    tabLabel: "Sales and accounting",
    eyebrow: "Wazely ERP",
    icon: Receipt,
    headline: "From quotation to paid invoice, without re-keying anything.",
    description:
      "An accepted quotation converts straight into an invoice. Payments, vendor bills, and accounts stay connected to one operational record.",
    bullets: [
      "Quotations and sales invoices",
      "Customer and vendor payments",
      "Chart of accounts and journals",
      "Invoice aging and reports",
    ],
    chipGroups: [
      {
        label: "Also included",
        items: [
          "Purchase orders",
          "Credit and debit notes",
          "Bank transactions",
          "Multi-currency payments",
        ],
      },
      {
        label: "Business reports",
        items: [
          "Invoice aging",
          "Bill aging",
          "Tax summary",
          "Customer and vendor balances",
        ],
      },
    ],
    bannerText: "Ready to connect quotations, invoices, and accounts?",
    ctaLabel: "Explore Wazely ERP",
    ctaHref: "/erp",
    image: "/screenshots/erp/quotations-and-invoices.png",
    imageAlt: "Wazely ERP quotations and invoices management screen",
    imageWidth: 1920,
    imageHeight: 950,
  },
  {
    id: "brand",
    tabLabel: "Brand and design",
    eyebrow: "Wazely Color",
    icon: Palette,
    headline: "Generate a brand palette in minutes, not days.",
    description:
      "Describe your brand, get an AI-generated color palette, check WCAG contrast, and export straight to CSS, Tailwind, or Figma.",
    bullets: [
      "AI-generated color palettes",
      "Professional brand boards",
      "WCAG contrast checks",
      "CSS, Tailwind, and Figma exports",
    ],
    chipGroups: [
      {
        label: "Also included",
        items: [
          "Gradient generator",
          "Palette from a description",
          "Brand board templates",
        ],
      },
      {
        label: "Exports to",
        items: ["CSS", "Tailwind", "Figma", "SwiftUI"],
      },
    ],
    bannerText: "Ready to build a color palette for your brand?",
    ctaLabel: "Open Wazely Color",
    ctaHref: siteConfig.colorUrl,
    image: "/screenshots/color-hero-light.png",
    imageAlt: "Wazely Color AI-generated brand palette board",
    imageWidth: 1200,
    imageHeight: 630,
  },
] as const;
