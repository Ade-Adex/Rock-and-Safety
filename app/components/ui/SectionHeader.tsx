interface SectionHeaderProps {
  badge: string
  title: string
  centered?: boolean
  lightMode?: boolean
  badgeClassName?: string
  titleClassName?: string
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  centered = true,
  lightMode = false,
  badgeClassName = '',
  titleClassName = '',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl mb-12 ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      <span
        className={`text-primary text-xs font-extrabold uppercase tracking-widest ${badgeClassName}`}
      >
        {badge}
      </span>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 tracking-tight ${
          lightMode ? 'text-secondary' : 'text-foreground'
        } ${titleClassName}`}
      >
        {title}
      </h2>
    </div>
  )
}
