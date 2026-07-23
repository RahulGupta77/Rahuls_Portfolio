import { personalData } from "./personal-data";

export const siteConfig = {
  name: personalData.name,
  givenName: "Rahul",
  familyName: "Gupta",
  shortName: "rahulspace",
  url: "https://rahulspace.com",
  locale: "en_IN",
  language: "en",

  // Under 60 characters for search result titles
  title: "Rahul Gupta | Software Engineer in Bangalore",
  titleTemplate: "%s | Rahul Gupta",

  // ~155 characters — clear summary for SERPs and social
  description:
    "Software engineer in Bangalore (from Mumbai). I build distributed systems and production microservices focused on system design, IAM, and real-time messaging.",

  keywords: [
    "Rahul Gupta",
    "Software Engineer",
    "Bangalore",
    "Mumbai",
    "System Design",
    "Microservices",
    "Distributed Systems",
    "Spring Boot",
    "Java",
    "Backend Engineer",
    "IAM",
    "Atlas AI",
    "rahulspace",
  ],

  ogImage: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Rahul Gupta — Software Engineer at rahulspace.com",
  },

  twitterHandle: "@rahulspace_",

  sameAs: [
    personalData.github,
    personalData.linkedIn,
    personalData.twitter,
    personalData.leetcode,
  ].filter(Boolean),

  jobTitle: personalData.designation,
  worksFor: {
    name: "Atlas AI",
    url: "https://www.linkedin.com/company/atlas-ai",
  },
  alumniOf: {
    name: "Maharashtra Institute of Technology, Pune",
    degree: "B.Tech in Computer Science and Engineering",
  },
  location: {
    city: "Bangalore",
    region: "Karnataka",
    country: "IN",
    hometown: "Mumbai",
  },
};
