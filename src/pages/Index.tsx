import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InstitutionsBar from "@/components/InstitutionsBar";
import TreatmentsSection from "@/components/TreatmentsSection";
import CSTSection from "@/components/CSTSection";
import TechnologySection from "@/components/TechnologySection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InstitutionsBar />
        <TreatmentsSection />
        <CSTSection />
        <TechnologySection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
