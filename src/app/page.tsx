import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import Metrics from "@/components/sections/metrics";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Features />
      <Metrics />
      <Footer />
    </main>
  );
}
