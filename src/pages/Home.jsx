import Hero from "../components/Hero";
import AboutSummary from "../components/AboutSummary";
import ProgramsHighlights from "../components/ProgramsHighlights";
import ImpactMetrics from "../components/ImpactMetrics";
import Testimonials from "../components/Testimonials";
import LatestNews from "../components/LatestNews";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSummary />
      <ProgramsHighlights />
      <ImpactMetrics />
      <Testimonials />
      <LatestNews />
      <CTABanner />
    </div>
  );
}