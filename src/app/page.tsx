import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import DocumentationArea from "@/components/DocumentationArea";
import DownloadSection from "@/components/DownloadSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FuturePlugins from "@/components/FuturePlugins";
import CustomCursor from "@/components/CustomCursor";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor variant="fire" />
      <Header />
      <HeroSection />
      <FeaturesShowcase />
      <DocumentationArea />
      <DownloadSection />
      <FuturePlugins />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </main>
  );
}
