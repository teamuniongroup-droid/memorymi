import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CommentsSection from "@/components/CommentsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <VideoSection />
      <PricingSection />
      <GuaranteeSection />
      <CommentsSection />
      <Footer />
    </div>
  );
};

export default Index;
