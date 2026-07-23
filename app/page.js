import { siteConfig } from "@/utils/data/site";
import AboutHome from "./components/AboutHome";
import Arrival from "./components/Arrival";
import Builds from "./components/Builds";
import LifeOrbit from "./components/LifeOrbit";
import OpenChannel from "./components/OpenChannel";
import ProfessionalJourney from "./components/ProfessionalJourney";

export const metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage.url,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    images: [siteConfig.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-5 pb-6 sm:px-6 lg:px-8">
      <Arrival />
      <AboutHome />
      <ProfessionalJourney />
      <Builds />
      <LifeOrbit />
      <OpenChannel />
    </div>
  );
}
