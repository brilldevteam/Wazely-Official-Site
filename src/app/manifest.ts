import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.companyName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f1d35",
    lang: siteConfig.language,
    icons: [
      {
        src: "/wazely-favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
