//  /app/components/portfolio/PortfolioCard.tsx

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PortfolioItem } from '@/app/types/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
  variant?: 'overlay' | 'standard'
  className?: string
}

export default function PortfolioCard({
  item,
  variant = 'overlay',
  className = '',
}: PortfolioCardProps) {
  const targetLink = item.link || undefined

  if (variant === 'overlay') {
    return (
      <div
        className={`relative group rounded-xl overflow-hidden bg-card-bg border border-card-border shrink-0 aspect-4/3 sm:aspect-square snap-start transition-all duration-300 hover:border-primary/50 shadow-lg ${className}`}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
            className="object-cover group-hover:scale-110 transition duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted text-xs bg-card-border">
            No Image Available
          </div>
        )}

        {/* Hover Overlay Content */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          {item.category && (
            <span className="text-[10px] uppercase font-bold text-accent-gold tracking-widest">
              {item.category}
            </span>
          )}
          <h3 className="text-base font-bold text-foreground mt-1">
            {item.title}
          </h3>

          <div className="mt-3">
            {targetLink ? (
              <Link
                href={targetLink}
                target={targetLink.startsWith('http') ? '_blank' : '_self'}
                rel={targetLink.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                View Project →
              </Link>
            ) : (
              <span className="text-xs font-semibold text-muted inline-flex items-center gap-1">
                View Project →
              </span>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Standard Card Layout (Grid / Detailed View)
  return (
    <div
      className={`group rounded-xl overflow-hidden bg-card-bg border border-card-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-card-border">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted text-xs">
            No Image Available
          </div>
        )}
        {item.category && (
          <span className="absolute top-3 left-3 bg-dark/80 backdrop-blur-md text-accent-gold text-[10px] font-bold px-2.5 py-1 rounded-md border border-card-border uppercase tracking-wider">
            {item.category}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col grow justify-between">
        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        <div className="mt-6 pt-4 border-t border-card-border/60 flex items-center justify-between">
          {targetLink ? (
            <a
              href={targetLink}
              target={targetLink.startsWith('http') ? '_blank' : '_self'}
              rel={targetLink.startsWith('http') ? 'noopener noreferrer' : ''}
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              VIEW LIVE DEMO →
            </a>
          ) : (
            <span className="text-xs font-semibold text-muted flex items-center gap-1">
              CASE STUDY →
            </span>
          )}
        </div>
      </div>
    </div>
  )
}