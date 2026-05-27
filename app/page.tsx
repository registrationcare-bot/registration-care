import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/components/home/hero-section";
import TrustSection from "@/components/home/trust-section";
import ServicesSection from "@/components/home/services-section";
import ProcessSection from "@/components/home/process-section";
import WhyChooseSection from "@/components/home/why-choose-section";
import FAQSection from "@/components/home/faq-section";
import CTASection from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseSection />
      <FAQSection />
      <CTASection />

      <Footer />
    </main>
  );
}