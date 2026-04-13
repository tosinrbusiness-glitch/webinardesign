import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import BrutalTruthSection from "@/components/sections/BrutalTruthSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import QualifierSection from "@/components/sections/QualifierSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideoSection from "@/components/sections/VideoSection";
import ArchitectSection from "@/components/sections/ArchitectSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import SectionCTA from "@/components/SectionCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <SectionCTA label="Register Now" />
      <BrutalTruthSection />
      <SectionCTA label="Book Your Spot Now" />
      <CurriculumSection />
      <SectionCTA label="Claim Your Spot" />
      <QualifierSection />
      <SectionCTA label="Register Now" />
      <TestimonialsSection />
      <SectionCTA label="Book Your Spot Now" />
      <VideoSection />
      <SectionCTA label="Claim Your Spot" />
      <ArchitectSection />
      <SectionCTA label="Register Now" />
      <FinalCTASection />
    </main>
  );
};

export default Index;
