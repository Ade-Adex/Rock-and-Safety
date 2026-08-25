'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface BlogCategoryFilterProps {
  categories: string[]
  activeCategory: string
  sortQuery: string
  searchQuery: string
}

export default function BlogCategoryFilter({
  categories,
  activeCategory,
  sortQuery,
  searchQuery,
}: BlogCategoryFilterProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Defensive: never show the same category twice, even if the incoming
  // list contains duplicates with different casing / whitespace
  const seen = new Set<string>()
  const uniqueCategories = categories.filter((cat) => {
    if (!cat) return false
    const key = cat.trim().toLowerCase()
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })

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

  const createFilterUrl = (cat: string) => {
    const params = new URLSearchParams()
    params.set('category', cat)
    params.set('sort', sortQuery)
    if (searchQuery) params.set('search', searchQuery)
    return `?${params.toString()}`
  }

  const handleSelectCategory = (cat: string) => {
    setDropdownOpen(false)
    router.push(createFilterUrl(cat))
  }

  return (
    <div className="w-full sm:w-auto">
      {/* Mobile Dropdown Select */}
      <div className="relative sm:hidden" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          type="button"
          className="w-full flex items-center justify-between bg-card-bg border border-card-border text-foreground font-semibold px-4 py-2.5 rounded-xl shadow-md focus:outline-none focus:border-primary transition-colors"
        >
          <span className="flex items-center gap-2 text-xs">
            <span className="text-muted">Category:</span>
            <span className="text-primary font-bold uppercase tracking-wider">
              {activeCategory}
            </span>
          </span>
          <svg
            className={`w-4 h-4 text-muted transition-transform duration-300 ${
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
          <div className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-card-border rounded-xl shadow-xl z-50 overflow-hidden py-2 divide-y divide-card-border animate-in fade-in slide-in-from-top-2 duration-200">
            {uniqueCategories.map((cat) => {
              const isActive =
                activeCategory.toLowerCase() === cat.toLowerCase()
              return (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  type="button"
                  className={`w-full text-left px-4 py-3 text-xs font-bold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted hover:bg-card-bg hover:text-foreground'
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && <span className="text-primary">✓</span>}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Desktop Flex Pills */}
      <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {uniqueCategories.map((cat) => {
          const isActive = activeCategory.toLowerCase() === cat.toLowerCase()
          return (
            <Link key={cat} href={createFilterUrl(cat)}>
              <span
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap inline-block ${
                  isActive
                    ? 'bg-primary text-black'
                    : 'bg-card-bg text-muted hover:text-foreground border border-card-border'
                }`}
              >
                {cat}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
