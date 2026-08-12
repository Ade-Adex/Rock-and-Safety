import Metadata from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiCheckCircle,
  FiTarget,
  FiHeart,
  FiAward,
  FiArrowRight,
} from 'react-icons/fi'

export const metadata = {
  title: 'About Us | Christ Baptist Church',
  description: 'Learn more about our mission, vision, values, and our journey.',
}

const VALUES = [
  {
    icon: FiTarget,
    title: 'Mission & Vision',
    description:
      'Committed to spreading faith, service, and excellence through impactful community building and digital transformation.',
  },
  {
    icon: FiHeart,
    title: 'Core Values',
    description:
      'Grounded in integrity, compassion, continuous learning, and unconditional service to others.',
  },
  {
    icon: FiAward,
    title: 'Excellence & Growth',
    description:
      'Dedicated to upholding high standards in everything we build, nurture, and publish.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-8 md:px-12 lg:px-16 space-y-20">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-accent-gold">
          WHO WE ARE
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
          Empowering Lives Through Faith, Community & Purpose
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We are dedicated to building a vibrant, connected community focused on
          spiritual growth, social impact, and innovative outreach.
        </p>
      </section>

      {/* Core Values / Pillar Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {VALUES.map((val, idx) => {
          const Icon = val.icon
          return (
            <div
              key={idx}
              className="bg-card-bg border border-card-border p-8 rounded-2xl shadow-sm hover:border-accent-gold/50 transition-all flex flex-col space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 text-accent-gold flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{val.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {val.description}
              </p>
            </div>
          )
        })}
      </section>

      {/* Story & Highlight Section */}
      <section className="max-w-6xl mx-auto bg-card-bg border border-card-border rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent-gold">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Building a lasting legacy for generations
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            From humble beginnings to an expanding footprint, our journey is
            rooted in unwavering commitment to our people. Through our programs,
            publications, and digital spotlight initiatives, we strive to
            elevate voices and create practical value.
          </p>

          <ul className="space-y-3 pt-2">
            {[
              'Inclusive and welcoming fellowship for all',
              'Inspiring creative, business, and author spotlights',
              'Active community outreach and support initiatives',
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm font-semibold text-foreground"
              >
                <FiCheckCircle className="w-5 h-5 text-accent-gold shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Community Members', value: '5,000+' },
            { label: 'Spotlights Published', value: '120+' },
            { label: 'Programs Hosted', value: '350+' },
            { label: 'Years of Service', value: '25+' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-background border border-card-border p-6 rounded-2xl text-center space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-black text-accent-gold">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6 pt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Ready to connect or learn more?
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-secondary font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
          >
            Get In Touch
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/spotlight"
            className="inline-flex items-center gap-2 bg-card-bg border border-card-border hover:border-accent-gold text-foreground font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all"
          >
            Explore Spotlights
          </Link>
        </div>
      </section>
    </main>
  )
}
