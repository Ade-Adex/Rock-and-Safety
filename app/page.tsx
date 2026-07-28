import Header from '@/app/components/Header'
import HeroSection from '@/app/components/HeroSection'
import ServicesSection from '@/app/components/ServicesSection'
import PortfolioSection from '@/app/components/PortfolioSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import StatsSection from '@/app/components/StatsSection'
import BlogSection from '@/app/components/BlogSection'
import CallToAction from '@/app/components/CallToAction'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans scroll-smooth">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <TestimonialsSection />
      <StatsSection />
      <div id="blog">
        <BlogSection />
      </div>
      <div id="contact">
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
