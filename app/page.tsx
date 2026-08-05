import HeroSection from '@/app/components/HeroSection'
import ServicesSection from '@/app/components/ServicesSection'
import PortfolioSection from '@/app/components/PortfolioSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import StatsSection from '@/app/components/StatsSection'
import BlogSection from '@/app/components/BlogSection'
import CallToAction from '@/app/components/CallToAction'
import Team from '@/app/components/Team'
import FaqAccordion from '@/app/components/FaqAccordion'
import Contact from '@/app/components/Contact'
import QuickNav from '@/app/components/QuickNav'

import {
  fetchServices,
  fetchPortfolio,
  fetchTestimonials,
  fetchTeam,
  fetchStats,
  fetchLatestPosts,
  fetchFaqs,
} from '@/sanity/services/contentService'

export default async function Home() {
  // Fetch all CMS data concurrently on the server
  const [
    services,
    portfolio,
    testimonials,
    teamMembers,
    stats,
    latestPosts,
    faqs,
  ] = await Promise.all([
    fetchServices(),
    fetchPortfolio(),
    fetchTestimonials(),
    fetchTeam(),
    fetchStats(),
    fetchLatestPosts(3),
    fetchFaqs(),
  ])

  return (
    <main className="min-h-screen bg-background text-foreground font-sans scroll-smooth relative">
      <QuickNav />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection services={services} />
      </div>
      <div id="portfolio">
        <PortfolioSection items={portfolio} />
      </div>
      <div id="testimonials">
        <TestimonialsSection testimonials={testimonials} />
      </div>
      <div id="team">
        <Team teamMembers={teamMembers} />
      </div>
      <div id="stats">
        <StatsSection stats={stats} />
      </div>
      <div id="blog">
        <BlogSection posts={latestPosts} />
      </div>
      <div id="faq">
        <FaqAccordion faqs={faqs} />
      </div>
      <div id="contact">
        <Contact />
        <CallToAction />
      </div>
    </main>
  )
}
