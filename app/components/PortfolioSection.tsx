'use client'

import CategoryFilter from '@/app/components/portfolio/CategoryFilter'
import PortfolioCard from '@/app/components/portfolio/PortfolioCard'
import Button from '@/app/components/ui/Button'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { PortfolioItem } from '@/app/types/portfolio'
import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'

interface PortfolioSectionProps {
  items: PortfolioItem[]
}

export default function PortfolioSection({ items }: PortfolioSectionProps) {
  const [activeTab, setActiveTab] = useState('All')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const categories = useMemo(() => {
    const extracted = Array.from(
      new Set(items.map((i) => i.category).filter(Boolean)),
    )
    return ['All', ...extracted]
  }, [items])

  const filteredItems = useMemo(
    () =>
      activeTab === 'All'
        ? items
        : items.filter((item) => item.category === activeTab),
    [items, activeTab],
  )

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const scrollAmount = clientWidth * 0.75
      scrollContainerRef.current.scrollTo({
        left:
          direction === 'left'
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-dark text-foreground py-12 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-end justify-between mb-8">
        <div className="w-full">
          <SectionHeader
            badge="OUR PORTFOLIO"
            title="Our Recent Projects"
            centered={false}
          />
        </div>

        {/* Scroll Controls for Desktop */}
        <div className="hidden sm:flex items-center gap-2 mb-12 sm:mb-16">
          <Button
            variant="secondary"
            onClick={() => scroll('left')}
            className="px-3! py-2! rounded-lg"
            aria-label="Previous projects"
          >
            ←
          </Button>
          <Button
            variant="secondary"
            onClick={() => scroll('right')}
            className="px-3! py-2! rounded-lg"
            aria-label="Next projects"
          >
            →
          </Button>
        </div>
      </div>

      {/* Reusable Category Filter */}
      <CategoryFilter
        categories={categories}
        activeTab={activeTab}
        onSelectCategory={setActiveTab}
      />

      {/* Horizontal Scroll Cards Grid (4 items per row on lg) */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item._id}
              item={item}
              variant="overlay"
              className="w-[85%] sm:w-[45%] lg:w-[calc(25%-12px)]"
            />
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden justify-center items-center gap-4 mt-6">
          <Button
            variant="secondary"
            onClick={() => scroll('left')}
            className="px-3! py-2! rounded-lg"
            aria-label="Previous projects"
          >
            ←
          </Button>
          <Button
            variant="secondary"
            onClick={() => scroll('right')}
            className="px-3! py-2! rounded-lg"
            aria-label="Next projects"
          >
            →
          </Button>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/portfolio" className="inline-block">
          <Button variant="outline">VIEW ALL PROJECTS →</Button>
        </Link>
      </div>
    </section>
  )
}
