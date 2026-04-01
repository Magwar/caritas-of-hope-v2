import AboutHero from "../components/about/AboutHero";
import OrgHistory from "../components/about/OrgHistory";
import VisionMission from "../components/about/VisionMission";
import FounderSection from "../components/about/FounderSection";
import BoardSection from "../components/about/BoardSection";
import CTABanner from "../components/CTABanner";

export default function About() {
  return (
    <div>
      <AboutHero />
      <OrgHistory />
      <VisionMission />
      <FounderSection />
      <BoardSection />
      <CTABanner />
    </div>
  );
}
