import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import HowItWorks from "@/components/sections/howitworks";
import Metrics from "@/components/sections/metrics";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Metrics />
      <Footer />
    </main>
  );
}
