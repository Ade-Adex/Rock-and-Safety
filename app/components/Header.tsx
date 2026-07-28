'use client'

import Logo from '@/public/Images/Logo.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import NavLinks from './NavLinks'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-gray-800/80">
      {/* Top Bar */}
      <div className="bg-[#08090b] text-gray-400 text-xs py-2 px-4 sm:px-8 border-b border-gray-800/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <span className="whitespace-nowrap flex items-center gap-1.5">
              <span>📞</span> +234 815 224 5314
            </span>
            <span className="truncate max-w-50 min-[400px]:max-w-none flex items-center gap-1.5">
              <span>✉️</span> info@rockandsafety.com
            </span>
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="text-gray-500">Follow Us:</span>
            <Link href="#" className="hover:text-accent-gold transition-colors">
              Facebook
            </Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">
              YouTube
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-12 sm:h-14 w-auto aspect-square overflow-hidden rounded-md shrink-0">
            <Image
              src={Logo}
              alt="Rock and Safety Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="hidden sm:block h-8 w-px bg-accent-gold/40 group-hover:bg-accent-gold transition-colors" />

          <div className="hidden sm:flex flex-col justify-center leading-none">
            <span className="text-white font-black text-base sm:text-lg tracking-wider group-hover:text-accent-gold transition-colors">
              ROCK <span className="text-accent-gold">&</span> SAFETY
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-1">
              Marketing Hub
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:block">
          <NavLinks />
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="bg-accent-gold hover:bg-gold-dark text-black font-extrabold text-xs px-5 py-2.5 rounded-md transition-all inline-block uppercase tracking-wider"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle Navigation Menu"
          className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark border-b border-gray-800 px-6 py-6 transition-all duration-300">
          <NavLinks mobile onLinkClick={() => setMobileMenuOpen(false)} />
          <div className="mt-6 pt-4 border-t border-gray-800">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-accent-gold hover:bg-gold-dark text-black font-extrabold text-sm py-3 rounded-lg transition-all uppercase tracking-wider"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
