'use client'

import { useState } from 'react'
import Link from 'next/link'
import LogoComponent from '@/app/components/Logo'
import NavLinks from './NavLinks'
import HeaderTopBar from './header/HeaderTopBar'
import HeaderMobileMenu from './header/HeaderMobileMenu'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-gray-800/80">
      {/* Top Bar Component */}
      <HeaderTopBar />

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <LogoComponent />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:block">
          <NavLinks />
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-secondary font-extrabold text-xs px-5 py-2.5 rounded-md transition-all inline-block uppercase tracking-wider"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle Navigation Menu"
          className="lg:hidden text-foreground hover:text-muted p-2 rounded-lg focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Component */}
      <HeaderMobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}
