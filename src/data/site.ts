export const siteConfig = {
  companyName: "Wazely",
  title: "Wazely | Connected CRM and ERP Business Software",
  description:
    "Wazely builds connected CRM and ERP software for customer relationships, finance, sales, operations, and everyday business work.",
  crmUrl: "https://crm.wazely.io",
  erpUrl: "https://erp.wazely.io",
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
