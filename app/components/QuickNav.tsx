'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/app/constants/navigation'

export default function QuickNav() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const quickNavLinks = NAV_LINKS.filter(
    (link) => !link.hideInQuickNav && link.sectionId,
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    quickNavLinks.forEach((link) => {
      if (link.sectionId) {
        const el = document.getElementById(link.sectionId)
        if (el) observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [quickNavLinks])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 bg-card-bg/80 backdrop-blur-md p-2 rounded-full border border-card-border shadow-lg">
      {quickNavLinks.map((link) => {
        const Icon = link.icon
        const isActive = activeSection === link.sectionId

        return (
          <button
            key={link.label}
            onClick={() => link.sectionId && scrollToSection(link.sectionId)}
            title={link.label}
            className={`p-2.5 rounded-full transition-all duration-300 relative group cursor-pointer ${
              isActive
                ? 'bg-primary text-secondary shadow-md scale-110'
                : 'text-muted hover:text-foreground hover:bg-card-border/40'
            }`}
          >
            {Icon && <Icon className="w-5 h-5" />}

            {/* Tooltip on hover */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-semibold rounded bg-card-bg text-foreground border border-card-border shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
              {link.label}
            </span>
          </button>
        )
      })}
    </aside>
  )
}
