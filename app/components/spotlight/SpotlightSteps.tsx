import { FiArrowRight } from 'react-icons/fi'
import { StepItem } from '@/app/data/spotlightData'

interface SpotlightStepsProps {
  steps: StepItem[]
}

export default function SpotlightSteps({ steps }: SpotlightStepsProps) {
  return (
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
              <span className="w-7 h-7 rounded-full bg-[#0F3A2E] text-white text-xs font-bold flex items-center justify-center">
                {st.step}
              </span>

              <div className="w-14 h-14 rounded-full bg-card-border/40 flex items-center justify-center text-accent-gold">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-sm font-bold text-foreground">{st.title}</h3>
              <p className="text-xs text-muted leading-relaxed">
                {st.description}
              </p>

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
  )
}
