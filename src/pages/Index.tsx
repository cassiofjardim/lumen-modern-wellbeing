import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InstitutionsBar from "@/components/InstitutionsBar";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import CSTSection from "@/components/CSTSection";
import OrganizationsSection from "@/components/OrganizationsSection";
import TechnologySection from "@/components/TechnologySection";
import NewsSection from "@/components/NewsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InstitutionsBar />
        <AboutSection />
        <TreatmentsSection />
        <CSTSection />
        <OrganizationsSection />
        <TechnologySection />
        <NewsSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
