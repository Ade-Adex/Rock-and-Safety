'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioItems } from '@/app/data/portfolioData'
import Button from '@/app/components/ui/Button'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { tabs } from '@/app/data/tabs'

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('All')
  const scrollContainerRef = useRef<HTMLDivElement>(null)


  const filteredItems =
    activeTab === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab)

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

        {/* Navigation Arrows using reusable Button component */}
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

      {/* Dynamic Tabs Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab
          return (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
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

      {/* Horizontal Scrollable Portfolio Container */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-xl overflow-hidden bg-card-bg border border-card-border shrink-0 w-[85%] sm:w-[45%] lg:w-[calc(20%-13px)] aspect-4/3 sm:aspect-square snap-start"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 20vw"
                className="object-cover group-hover:scale-110 transition duration-500 ease-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-foreground mt-0.5">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-muted mt-2 flex items-center gap-1">
                  View Project →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
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
        <Link href="#portfolio" className="inline-block">
          <Button variant="outline">VIEW ALL PROJECTS →</Button>
        </Link>
      </div>
    </section>
  )
}
