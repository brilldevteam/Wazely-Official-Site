import type { Metadata } from "next";

import { getSiteUrl, siteConfig } from "@/data/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: "/crm" | "/erp" | "/knowledge-base";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.companyName,
      title: `${title} | ${siteConfig.companyName}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.companyName}`,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": new URL("/#organization", getSiteUrl()).toString(),
  name: siteConfig.companyName,
  url: getSiteUrl().toString(),
  logo: new URL("/wazely-favicon.png", getSiteUrl()).toString(),
  sameAs: Object.values(siteConfig.socialLinks),
  areaServed: siteConfig.targetMarkets.map((name) => ({
    "@type": "Country",
    name,
  })),
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": new URL("/#website", getSiteUrl()).toString(),
  url: getSiteUrl().toString(),
  name: siteConfig.companyName,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: { "@id": organizationJsonLd["@id"] },
};

type SoftwareApplicationOptions = {
  name: string;
  description: string;
  path: "/crm" | "/erp";
  appUrl: string;
  features: readonly string[];
};

export function createSoftwareApplicationJsonLd({
  name,
  description,
  path,
  appUrl,
  features,
}: SoftwareApplicationOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": new URL(`${path}#software`, getSiteUrl()).toString(),
    name,
    description,
    url: new URL(path, getSiteUrl()).toString(),
    installUrl: appUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires a modern web browser",
    inLanguage: siteConfig.language,
    featureList: features,
    publisher: { "@id": organizationJsonLd["@id"] },
  };
}
