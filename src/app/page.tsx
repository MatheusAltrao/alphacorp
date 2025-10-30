import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import Header from '@/components/sections/header'
import HeroSection from '@/components/sections/hero-section'
import HowItWorks from '@/components/sections/howitworks'
import Results from '@/components/sections/results'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Results />
      <Contact />
      <Footer />
    </main>
  )
}
