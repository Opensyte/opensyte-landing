import Features from "@/components/landing/features";
import HeroSection from "@/components/landing/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features/>
    </div>
  );
}
