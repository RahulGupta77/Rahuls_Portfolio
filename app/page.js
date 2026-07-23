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
  alternates: {
    canonical: "/",
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
