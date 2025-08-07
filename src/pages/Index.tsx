import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuickSignupSection from "@/components/QuickSignupSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ProgressBar from "@/components/ProgressBar";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  // Initialize smooth scroll and scroll animations
  useSmoothScroll();
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <ProgressBar />
      <Navigation />
      <HeroSection />
      <EmotionalSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <QuickSignupSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
