import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getSiteUrl, siteConfig } from "@/data/site";

const monaSans = localFont({
  src: "./mona-sans.woff2",
  display: "swap",
  variable: "--font-mona",
  weight: "200 900",
  fallback: ["Inter", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.title,
    template: "%s | Wazely",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  icons: { icon: "/wazely-favicon.png", apple: "/wazely-favicon.png" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Wazely",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={monaSans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('wazely-theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
