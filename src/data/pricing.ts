export type PricingPlan = {
  name: string;
  price: number;
  cadence: string;
  features: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Startup",
    price: 50,
    cadence: "month",
    features: [
      "Up to 5 user agents",
      "Up to 20,000 conversations per month",
      "Bulk broadcasts",
      "1 chatbot flow",
      "Native WhatsApp Flows",
      "API and webhooks",
      "Payment gateways",
      "Google Sheets integration",
      "WhatsApp Store",
      "Shopify, WooCommerce, and Ecwid",
      "Facebook and Instagram lead-ad automation",
      "Appointment booking system",
    ],
  },
  {
    name: "Medium",
    price: 100,
    cadence: "month",
    featured: true,
    features: [
      "20 user agents",
      "100,000 contacts",
      "Up to 50,000 conversations per month",
      "20 chatbot flows",
      "Native WhatsApp Flows",
      "API and webhooks",
      "Ecommerce bot included",
      "Payment gateways",
      "Google Sheets integration",
      "All integrations",
      "WhatsApp Store",
      "Shopify, WooCommerce, and Ecwid",
      "Facebook and Instagram lead-ad automation",
      "Appointment booking system",
      "ChatGPT integration",
      "AI agent",
      "OpenAI chat using business data",
      "Text and voice conversation AI",
    ],
  },
  {
    name: "Premium",
    price: 250,
    cadence: "month",
    features: [
      "100 user agents",
      "500,000 contacts",
      "Up to 100,000 conversations per month",
      "100 chatbot flows",
      "Native WhatsApp Flows",
      "1,000 free conversations",
      "API and webhooks",
      "Google Sheets integration",
      "All integrations",
      "WhatsApp Store",
      "Shopify, WooCommerce, and Ecwid",
      "Payment gateways",
      "Facebook and Instagram lead-ad automation",
      "Appointment booking system",
      "ChatGPT integration",
      "AI agent",
      "OpenAI chat using business data",
      "Text and voice conversation AI",
      "Custom integration support",
      "Dedicated support",
    ],
  },
];
