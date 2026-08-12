'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, NavLink } from '@/app/constants/navigation'

interface NavLinksProps {
  onLinkClick?: () => void
  mobile?: boolean
}

export default function NavLinks({
  onLinkClick,
  mobile = false,
}: NavLinksProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const navLinks = NAV_LINKS.filter((link) => !link.hideInNavbar)

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const isLinkActive = (link: NavLink) => {
    if (link.href === '/') return pathname === '/'
    if (link.href.startsWith('/#')) return false
    return pathname.startsWith(link.href)
  }

  // --- MOBILE VIEW ---
  if (mobile) {
    return (
      <nav className="flex flex-col space-y-2 text-left w-full">
        {navLinks.map((link) => {
          const hasSubLinks = link.subLinks && link.subLinks.length > 0
          const isOpen = openDropdown === link.label
          const active = isLinkActive(link)

          if (hasSubLinks) {
            return (
              <div
                key={link.label}
                className="border-b border-card-border pb-2"
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown(link.label)}
                  className={`flex items-center justify-between w-full text-base py-2 font-semibold transition-colors ${
                    active
                      ? 'text-accent-gold font-bold'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  <span>{link.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="pl-4 mt-1 flex flex-col space-y-2 border-l border-card-border ml-2">
                    {link.subLinks?.map((sub) => {
                      const SubIcon = sub.icon
                      const subActive = pathname === sub.href
                      return (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={onLinkClick}
                          className={`flex items-center gap-2 text-sm py-1 font-medium transition-colors ${
                            subActive
                              ? 'text-accent-gold font-bold'
                              : 'text-muted hover:text-primary'
                          }`}
                        >
                          {SubIcon && <SubIcon className="w-4 h-4" />}
                          {sub.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          }

          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={onLinkClick}
              className={`text-base py-2 border-b border-card-border font-semibold block transition-colors ${
                active
                  ? 'text-accent-gold font-bold'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    )
  }

  // --- DESKTOP VIEW ---
  return (
    <nav className="flex items-center space-x-6 text-xs font-bold tracking-wider uppercase">
      {navLinks.map((link) => {
        const hasSubLinks = link.subLinks && link.subLinks.length > 0
        const active = isLinkActive(link)

        if (hasSubLinks) {
          return (
            <div
              key={link.label}
              className="relative group py-2"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={`flex items-center gap-1 transition-colors text-xs font-bold tracking-wider ${
                  active
                    ? 'text-accent-gold font-extrabold'
                    : 'text-foreground group-hover:text-primary'
                }`}
              >
                {link.label}
                <svg
                  className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col w-52 bg-background border border-card-border rounded-lg shadow-xl p-2 z-50 normal-case">
                {link.subLinks?.map((sub) => {
                  const SubIcon = sub.icon
                  const subActive = pathname === sub.href
                  return (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={onLinkClick}
                      className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-md transition-colors ${
                        subActive
                          ? 'text-accent-gold bg-card-border/40 font-bold'
                          : 'text-foreground hover:text-primary hover:bg-card-border/30'
                      }`}
                    >
                      {SubIcon && <SubIcon className="w-4 h-4 text-primary" />}
                      {sub.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        }

        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onLinkClick}
            className={`transition-colors text-xs font-bold tracking-wider ${
              active
                ? 'text-accent-gold font-extrabold'
                : 'text-foreground hover:text-primary'
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
