export const siteConfig = {
  companyName: "Wazely",
  title: "Wazely | Connected Business Software & Wazely CRM",
  description:
    "Wazely builds practical connected business software. Explore Wazely CRM for customer conversations, contacts, campaigns, automation, and teamwork.",
  crmUrl: "https://crm.wazely.io",
  demoUrl: "https://crm.wazely.io",
  knowledgeBaseUrl: "https://help.wazely.io/enterprise/",
  socialLinks: {},
  legalLinks: {},
} as const;

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    return new URL(configured ?? "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}
