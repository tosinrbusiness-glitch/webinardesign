import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import BrutalTruthSection from "@/components/sections/BrutalTruthSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import QualifierSection from "@/components/sections/QualifierSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ArchitectSection from "@/components/sections/ArchitectSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <BrutalTruthSection />
      <CurriculumSection />
      <QualifierSection />
      <TestimonialsSection />
      <ArchitectSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
