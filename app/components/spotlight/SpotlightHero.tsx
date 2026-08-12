import Link from 'next/link'
import Image from 'next/image'
import { FiCreditCard, FiLock } from 'react-icons/fi'
import { SpotlightContent } from '@/app/types/spotlight'

interface SpotlightHeroProps {
  content: SpotlightContent
  isAuthor: boolean
}

export default function SpotlightHero({
  content,
  isAuthor,
}: SpotlightHeroProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column */}
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 bg-accent-gold"></span>
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent-gold">
            {content.tag}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
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

        {/* CTA Button Block - Rendered for both Author and Business */}
        <div className="pt-4 space-y-2">
          <Link
            href={content.ctaButtonUrl || '#pricing'}
            target={
              content.ctaButtonUrl?.startsWith('http') ? '_blank' : '_self'
            }
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-deep hover:bg-brand-deep-hover text-foreground font-extrabold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md"
          >
            <FiCreditCard className="w-4 h-4" />
            {content.ctaButtonText}
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <FiLock className="w-3.5 h-3.5 text-accent-gold" />
            <span>Secure payment powered by Selar</span>
          </div>
        </div>
      </div>

      {/* Right Column Image */}
      <div className="lg:col-span-6 flex justify-center">
        <div className="relative w-full max-w-md aspect-4/3 sm:aspect-square rounded-2xl shadow-xl overflow-hidden border border-card-border">
          <Image
            src={content.heroImage}
            alt={content.tag}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
