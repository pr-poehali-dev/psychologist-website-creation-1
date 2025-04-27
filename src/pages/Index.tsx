import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
