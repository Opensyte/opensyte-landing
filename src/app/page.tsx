import FAQsFour from "@/components/landing/faq";
import Features from "@/components/landing/features";
import HeroSection from "@/components/landing/hero";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features />
      <FAQsFour />
      <Footer />
    </div>
  );
}
