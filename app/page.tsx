import Header from '@/app/components/Header'
import HeroSection from '@/app/components/HeroSection'
import ServicesSection from '@/app/components/ServicesSection'
import PortfolioSection from '@/app/components/PortfolioSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import StatsSection from '@/app/components/StatsSection'
import BlogSection from '@/app/components/BlogSection'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
