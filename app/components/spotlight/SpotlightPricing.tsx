import { FiCheckCircle, FiCreditCard, FiLock } from 'react-icons/fi'

interface SpotlightPricingProps {
  pricingFeatures: string[]
  ctaButtonText: string
}

export default function SpotlightPricing({
  pricingFeatures,
  ctaButtonText,
}: SpotlightPricingProps) {
  return (
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
              {pricingFeatures.map((feat, idx) => (
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
              {pricingFeatures.map((feat, idx) => (
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

      <div className="pt-4 flex flex-col items-center gap-2">
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-[#0F3A2E] hover:bg-[#0B2C23] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          <FiCreditCard className="w-5 h-5" />
          {ctaButtonText}
        </button>
        <div className="flex items-center gap-1.5 text-xs text-muted">
          <FiLock className="w-3.5 h-3.5 text-accent-gold" />
          <span>Secure payment powered by Selar</span>
        </div>
      </div>
    </section>
  )
}
