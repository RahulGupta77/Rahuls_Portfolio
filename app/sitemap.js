import { siteConfig } from "@/utils/data/site";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
