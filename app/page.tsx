import Header from '@/app/components/Header'
import HeroSection from '@/app/components/HeroSection'
import ServicesSection from '@/app/components/ServicesSection'
import PortfolioSection from '@/app/components/PortfolioSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import StatsSection from '@/app/components/StatsSection'
import BlogSection from '@/app/components/BlogSection'
import CallToAction from '@/app/components/CallToAction'
import Footer from '@/app/components/Footer'
import Team from '@/app/components/Team'
import FaqAccordion from '@/app/components/FaqAccordion'
import Contact from '@/app/components/Contact'
import QuickNav from '@/app/components/QuickNav'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans scroll-smooth relative">
      <Header />
      <QuickNav />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="faq">
        <FaqAccordion />
      </div>
      <div id="contact">
        <Contact />
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
