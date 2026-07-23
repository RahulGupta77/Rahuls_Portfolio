import { personalData } from "@/utils/data/personal-data";
import { siteConfig } from "@/utils/data/site";

/**
 * Schema.org JSON-LD for Person, WebSite, and WebPage.
 * Injected as a script tag for Google and other crawlers.
 */
export default function JsonLd() {
  const profileImage = `${siteConfig.url}${personalData.profile}`;

  const personSchema = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    givenName: siteConfig.givenName,
    familyName: siteConfig.familyName,
    url: siteConfig.url,
    image: profileImage,
    jobTitle: siteConfig.jobTitle,
    description: personalData.description,
    email: `mailto:${personalData.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location.hometown,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.hometown,
        addressCountry: siteConfig.location.country,
      },
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.worksFor.name,
      url: siteConfig.worksFor.url,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.alumniOf.name,
    },
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "System Design",
      "Microservices",
      "Distributed Systems",
      "Spring Boot",
      "Java",
      "IAM",
      "Backend Engineering",
      "WebSockets",
      "Kafka",
    ],
    knowsLanguage: ["English", "Hindi", "Japanese"],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.shortName,
    alternateName: ["Rahul Gupta Portfolio", "rahulspace", siteConfig.name],
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#person` },
    inLanguage: siteConfig.language,
  };

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: profileImage,
      caption: `${siteConfig.name}, ${siteConfig.jobTitle}`,
    },
    inLanguage: siteConfig.language,
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, webPageSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
