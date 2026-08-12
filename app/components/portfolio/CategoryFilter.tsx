//  /app/components/portfolio/CategoryFilter.tsx

'use client'

import { useState, useRef, useEffect } from 'react'
import Button from '@/app/components/ui/Button'

interface CategoryFilterProps {
  categories: string[]
  activeTab: string
  onSelectCategory: (category: string) => void
}

export default function CategoryFilter({
  categories,
  activeTab,
  onSelectCategory,
}: CategoryFilterProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="mb-10 max-w-4xl mx-auto">
      {/* Mobile Dropdown Select */}
      <div className="relative sm:hidden" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          type="button"
          className="w-full flex items-center justify-between bg-card-bg border border-card-border text-foreground font-semibold px-4 py-3 rounded-xl shadow-md focus:outline-none focus:border-accent-gold transition-colors"
        >
          <span className="flex items-center gap-2 text-xs">
            <span className="text-gray-400">Category:</span>
            <span className="text-accent-gold font-bold uppercase tracking-wider">
              {activeTab}
            </span>
          </span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
              dropdownOpen ? 'rotate-180' : ''
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

        {dropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-card-border rounded-xl shadow-xl z-50 overflow-hidden py-2 divide-y divide-gray-800/60 animate-in fade-in slide-in-from-top-2 duration-200">
            {categories.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => {
                    onSelectCategory(tab)
                    setDropdownOpen(false)
                  }}
                  type="button"
                  className={`w-full text-left px-4 py-3 text-xs font-bold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-accent-gold/10 text-accent-gold'
                      : 'text-muted hover:bg-gray-900 hover:text-foreground'
                  }`}
                >
                  <span>{tab}</span>
                  {isActive && <span className="text-accent-gold">✓</span>}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Desktop Flex Pills */}
      <div className="hidden sm:flex flex-wrap justify-center gap-2">
        {categories.map((tab) => {
          const isActive = activeTab === tab
          return (
            <Button
              key={tab}
              onClick={() => onSelectCategory(tab)}
              variant={isActive ? 'primary' : 'secondary'}
              className={`rounded-full px-4! py-2! ${
                isActive
                  ? 'shadow-md shadow-primary/20'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {tab}
            </Button>
          )
        })}
      </div>
    </div>
  )
}