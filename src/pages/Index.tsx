import WeddingNav from "@/components/WeddingNav";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import VenueSection from "@/components/VenueSection";
import DressCodeSection from "@/components/DressCodeSection";
import GiftsSection from "@/components/GiftsSection";
import RSVPSection from "@/components/RSVPSection";
import PracticalInfoSection from "@/components/PracticalInfoSection";
import WeddingFooter from "@/components/WeddingFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />
      <HeroSection />
      <div id="schema">
        <ScheduleSection />
      </div>
      <div id="platser">
        <VenueSection />
      </div>
      <div id="kladkod">
        <DressCodeSection />
      </div>
      <div id="presenter">
        <GiftsSection />
      </div>
      <div id="osa">
        <RSVPSection />
      </div>
      <div id="info">
        <PracticalInfoSection />
      </div>
      <WeddingFooter />
    </div>
  );
};

export default Index;
