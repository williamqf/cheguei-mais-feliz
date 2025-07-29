import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <HeroSection />
      <EmotionalSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
