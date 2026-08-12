import { FiStar } from 'react-icons/fi'

interface SpotlightBannerProps {
  title: string
  subtitle: string
  ctaText: string
}

export default function SpotlightBanner({
  title,
  subtitle,
  ctaText,
}: SpotlightBannerProps) {
  return (
    <section className="bg-brand-deep text-foreground rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-accent-gold/20">
      <div className="flex items-center gap-6 text-center md:text-left">
        <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-accent-gold/20 border border-accent-gold/40 items-center justify-center shrink-0">
          <FiStar className="w-8 h-8 text-accent-gold" />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold">{title}</h2>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
      </div>

      <button
        type="button"
        className="bg-accent-gold hover:bg-gold-dark text-secondary font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shrink-0 active:scale-95 shadow-md cursor-pointer"
      >
        {ctaText}
      </button>
    </section>
  )
}
