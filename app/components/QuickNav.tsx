'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/app/constants/navigation'
import { FaArrowUp } from 'react-icons/fa'

export default function QuickNav() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return window.location.hash.replace('#', '')
    }
    return 'home'
  })

  const curatedNavItems = NAV_LINKS.filter((link) => !link.hideInQuickNav)

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScrollVisibility)

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    )

    curatedNavItems.forEach((item) => {
      const targetId = item.href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      window.removeEventListener('scroll', handleScrollVisibility)
      observer.disconnect()
    }
  }, [curatedNavItems])

  useEffect(() => {
    const handleGlobalHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        setActiveSection(window.location.hash.replace('#', ''))
      }
    }
    window.addEventListener('hashchange', handleGlobalHash)
    return () => window.removeEventListener('hashchange', handleGlobalHash)
  }, [])

  const handleScroll = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      window.history.pushState(null, '', href)
      window.dispatchEvent(new Event('hashchange'))
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    window.history.pushState(null, '', '#home')
    window.dispatchEvent(new Event('hashchange'))
  }

  return (
    <nav
      className="flex flex-col gap-3 fixed right-4 bottom-6 lg:right-6 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 z-40 bg-card-bg/90 backdrop-blur-md p-1 md:p-2 rounded-full border border-card-border shadow-md transition-all duration-300"
      aria-label="Quick Section Navigation"
    >
      {/* Scroll to top button: visible on mobile when scrolled down, always structured for desktop */}
      {showScrollTop && (
        <>
          <button
            onClick={handleScrollToTop}
            className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-primary md:bg-card-bg text-secondary md:text-foreground hover:bg-primary hover:text-secondary transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span className="absolute right-10 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-out bg-card-bg text-foreground text-[11px] font-bold tracking-wide px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md border border-card-border hidden lg:block">
              Back To Top
            </span>
            <FaArrowUp className="w-3.5 h-3.5" />
          </button>

          {/* Divider only shown on desktop when curated items are listed below */}
          <div className="border-t border-card-border mx-1 my-0.5 hidden lg:block" />
        </>
      )}

      {/* Full Curated Section Links: Hidden on mobile, shown as a column on lg screens */}
      <div className="hidden lg:flex flex-col gap-3">
        {curatedNavItems.map((link) => {
          const targetId = link.href.replace('#', '')
          const isActive = activeSection === targetId
          const IconElement = link.icon

          return (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                isActive
                  ? 'bg-primary text-secondary shadow-xs scale-105'
                  : 'bg-transparent hover:bg-foreground/5'
              }`}
              aria-label={`Scroll to ${link.label}`}
            >
              <span className="absolute right-10 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-out bg-card-bg text-foreground text-[11px] font-bold tracking-wide px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md border border-card-border">
                {link.label}
              </span>

              {IconElement && (
                <IconElement
                  className={`w-4 h-4 transition-colors duration-300 stroke-[2.5] ${
                    isActive
                      ? 'text-secondary'
                      : 'text-muted group-hover:text-primary'
                  }`}
                />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
