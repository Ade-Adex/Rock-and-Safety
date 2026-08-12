import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  FiEye,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiLock,
  FiCreditCard,
  FiFileText,
  FiEdit3,
  FiSearch,
  FiSend,
  FiStar,
  FiArrowRight,
} from 'react-icons/fi'

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SpotlightPage({ searchParams }: PageProps) {
  const params = await searchParams
  const categoryParam = params.category

  const category =
    typeof categoryParam === 'string'
      ? categoryParam.trim()
      : Array.isArray(categoryParam)
        ? categoryParam[0]
        : ''

  // Redirect to Author Spotlight if category is missing or invalid
  if (category !== 'Author' && category !== 'Business') {
    redirect('/spotlight?category=Author')
  }

  const isAuthor = category === 'Author'

  // Content configuration based on active category
  const content = {
    tag: isAuthor ? 'AUTHOR SPOTLIGHT' : 'BUSINESS SPOTLIGHT',
    titlePrefix: isAuthor ? 'We Spotlight' : "Let's Put Your",
    titleHighlight: isAuthor ? 'Great Authors' : 'Business In The Spotlight',
    description: isAuthor
      ? 'Get your book and brand in front of a wider audience. We create a professional spotlight feature that builds your visibility and drives readers to you.'
      : 'We feature your business to a wider audience, build your credibility, and help you attract more customers.',
    ctaButtonText: isAuthor
      ? 'Book Your Author Spotlight'
      : 'Book Your Business Spotlight',
    heroHighlights: isAuthor
      ? [
          { icon: FiEye, label: 'More Visibility' },
          { icon: FiAward, label: 'Build Credibility' },
          { icon: FiTrendingUp, label: 'Grow Your Audience' },
        ]
      : [
          { icon: FiEye, label: 'More Visibility' },
          { icon: FiAward, label: 'Build Credibility' },
          { icon: FiUsers, label: 'Reach More Customers' },
          { icon: FiTrendingUp, label: 'Grow Your Business' },
        ],
    pricingFeatures: isAuthor
      ? [
          'Professional author feature',
          'Book & author profile',
          'Book cover display',
          'Social media promotion',
          'Permanent blog post',
          'Shareable spotlight link',
        ]
      : [
          'Professional business feature',
          'Business profile & story',
          'Social media promotion',
          'Permanent blog post',
          'Shareable spotlight link',
          'SEO-friendly exposure',
        ],
    bannerTitle: isAuthor
      ? 'Ready to Get Spotlighted?'
      : 'Ready To Get Noticed?',
    bannerSubtitle: isAuthor
      ? "Let's showcase your book and get it in front of the right readers."
      : 'Give your business the visibility it deserves.',
    bannerCta: isAuthor
      ? 'Book Your Spotlight Now →'
      : 'Book Your Business Spotlight Now →',
  }

  const steps = [
    {
      step: '1',
      icon: FiCreditCard,
      title: 'Book & Pay',
      description: 'Choose your region and make payment securely.',
    },
    {
      step: '2',
      icon: FiFileText,
      title: 'Submit Details',
      description: `Fill the ${
        isAuthor ? 'author' : 'business'
      } spotlight form and submit your information.`,
    },
    {
      step: '3',
      icon: FiEdit3,
      title: 'We Create',
      description: 'We craft a professional spotlight feature for you.',
    },
    {
      step: '4',
      icon: FiSearch,
      title: 'Review & Approve',
      description: 'Review your spotlight and request any changes.',
    },
    {
      step: '5',
      icon: FiSend,
      title: 'We Publish & Promote',
      description:
        'Your spotlight goes live and we promote it to our audience.',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-20">
      {/* --- HERO SECTION --- */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent-gold"></span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent-gold">
              {content.tag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
            {content.titlePrefix}{' '}
            <span className="text-accent-gold block mt-1">
              {content.titleHighlight}
            </span>
          </h1>

          <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed">
            {content.description}
          </p>

          {/* Feature Badges */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 pt-4">
            {content.heroHighlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5 text-accent-gold" />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Hero CTA Button for Business layout */}
          {!isAuthor && (
            <div className="pt-4 space-y-2">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#0F3A2E] hover:bg-[#0B2C23] text-white font-extrabold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md"
              >
                <FiCreditCard className="w-4 h-4" />
                {content.ctaButtonText}
              </Link>
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <FiLock className="w-3.5 h-3.5 text-accent-gold" />
                <span>Secure payment powered by Selar</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Visual Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-card-bg border border-card-border rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center overflow-hidden">
            {isAuthor ? (
              <div className="space-y-4">
                <div className="w-48 h-64 bg-[#0F3A2E] rounded-r-lg shadow-2xl mx-auto flex items-center justify-center p-6 border-l-4 border-accent-gold">
                  <p className="text-accent-gold font-serif text-xl font-bold leading-snug">
                    Your Book Deserves To Be Seen
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full space-y-4">
                <div className="w-full bg-[#0F3A2E] rounded-xl p-6 text-white shadow-2xl border border-accent-gold/30">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold">
                    BUSINESS SPOTLIGHT
                  </span>
                  <h3 className="text-xl font-bold mt-2 leading-snug">
                    Your Business Featured.
                  </h3>
                  <p className="text-lg font-serif italic text-accent-gold mt-1">
                    Your Brand Remembered.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="space-y-8 text-center pt-4">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent-gold">
            SIMPLE PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Affordable. Transparent. Valuable.
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {/* Nigeria Card */}
          <div className="bg-card-bg border border-card-border rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-accent-gold/50 transition-all">
            <div className="space-y-6">
              <div className="text-center pb-6 border-b border-card-border">
                <span className="text-2xl mb-2 inline-block">🇳🇬</span>
                <h3 className="text-lg font-bold text-foreground">Nigeria</h3>
                <div className="text-3xl font-black text-accent-gold mt-2">
                  ₦15,000
                </div>
                <span className="text-xs text-muted">One-time payment</span>
              </div>

              <ul className="space-y-3">
                {content.pricingFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm font-medium text-foreground"
                  >
                    <FiCheckCircle className="w-4 h-4 text-accent-gold shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* International Card */}
          <div className="bg-card-bg border border-card-border rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-accent-gold/50 transition-all">
            <div className="space-y-6">
              <div className="text-center pb-6 border-b border-card-border">
                <span className="text-2xl mb-2 inline-block">🌐</span>
                <h3 className="text-lg font-bold text-foreground">
                  International
                </h3>
                <div className="text-3xl font-black text-accent-gold mt-2">
                  $35
                </div>
                <span className="text-xs text-muted">One-time payment</span>
              </div>

              <ul className="space-y-3">
                {content.pricingFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm font-medium text-foreground"
                  >
                    <FiCheckCircle className="w-4 h-4 text-accent-gold shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Pricing CTA */}
        <div className="pt-4 flex flex-col items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-[#0F3A2E] hover:bg-[#0B2C23] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95"
          >
            <FiCreditCard className="w-5 h-5" />
            {content.ctaButtonText}
          </button>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <FiLock className="w-3.5 h-3.5 text-accent-gold" />
            <span>Secure payment powered by Selar</span>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="space-y-12 text-center pt-8">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent-gold">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Simple Steps. Powerful Results.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon
            return (
              <div
                key={st.step}
                className="flex flex-col items-center text-center p-6 bg-card-bg border border-card-border rounded-xl space-y-4 relative group"
              >
                {/* Step Badge */}
                <span className="w-7 h-7 rounded-full bg-[#0F3A2E] text-white text-xs font-bold flex items-center justify-center">
                  {st.step}
                </span>

                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-card-border/40 flex items-center justify-center text-accent-gold">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-sm font-bold text-foreground">
                  {st.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {st.description}
                </p>

                {/* Desktop Arrow Connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-muted">
                    <FiArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* --- BOTTOM CTA BANNER --- */}
      <section className="bg-[#0F3A2E] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-accent-gold/20">
        <div className="flex items-center gap-6 text-center md:text-left">
          <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-accent-gold/20 border border-accent-gold/40 items-center justify-center shrink-0">
            <FiStar className="w-8 h-8 text-accent-gold" />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {content.bannerTitle}
            </h2>
            <p className="text-sm text-gray-300">{content.bannerSubtitle}</p>
          </div>
        </div>

        <button
          type="button"
          className="bg-accent-gold hover:bg-yellow-500 text-black font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shrink-0 active:scale-95 shadow-md"
        >
          {content.bannerCta}
        </button>
      </section>
    </div>
  )
}
