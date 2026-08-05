import { StatItem } from '@/app/types/stat'

interface StatsSectionProps {
  stats: StatItem[]
}

export default function StatsSection({ stats }: StatsSectionProps) {
  if (!stats || stats.length === 0) return null

  return (
    <section className="bg-surface-white text-secondary py-12 sm:py-14 border-y border-card-border px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat._id} className="p-2">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-dark tracking-tight">
              {stat.value}
            </span>
            <p className="text-xs sm:text-sm text-muted mt-2 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
