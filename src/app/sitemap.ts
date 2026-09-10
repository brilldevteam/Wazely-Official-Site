import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/crm", priority: 0.9 },
    { path: "/erp", priority: 0.9 },
    { path: "/knowledge-base", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: new URL(path, base).toString(),
    changeFrequency: "monthly",
    priority,
  }));
}
