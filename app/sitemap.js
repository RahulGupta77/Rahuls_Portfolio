import { siteConfig } from "@/utils/data/site";

/**
 * Next.js App Router sitemap — served at /sitemap.xml
 * Single-page portfolio: homepage is the only indexable URL.
 */
export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
