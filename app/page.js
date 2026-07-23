import Contact from "./components/Contact";
import Education from "./components/Education";
import HeroSection from "./components/HeroSection";
import { FadeInUp } from "./components/MotionWrapper";
import Nihongo from "./components/Nihongo";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8 lg:py-10">
      <FadeInUp delay={0.15}>
        <HeroSection />
      </FadeInUp>

      <FadeInUp delay={0.3}>
        <WorkExperience />
      </FadeInUp>

      <FadeInUp delay={0.35}>
        <TechnicalSkills />
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <Education />
      </FadeInUp>

      <FadeInUp delay={0.45}>
        <Projects />
      </FadeInUp>

      <FadeInUp delay={0.5}>
        <Nihongo />
      </FadeInUp>

      <FadeInUp delay={0.55}>
        <Contact />
      </FadeInUp>
    </div>
  );
}
