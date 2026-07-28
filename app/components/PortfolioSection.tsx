'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioItems } from '@/app/data/portfolioData'

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('All')

  const tabs = [
    'All',
    'Web Design',
    'Branding',
    'UI/UX Design',
    'Marketing',
    'Publishing',
  ]

  // Filter items based on activeTab state
  const filteredItems =
    activeTab === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab)

  return (
    <section className="bg-dark text-white py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="text-accent-gold text-xs font-bold uppercase tracking-widest">
          OUR PORTFOLIO
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
          Our Recent Projects
        </h2>
      </div>

      {/* Dynamic Tabs Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-accent-gold text-black shadow-md shadow-accent-gold/20'
                  : 'bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* Filtered Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto min-h-[250px]">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-xl overflow-hidden bg-gray-900 border border-gray-800 aspect-4/3 sm:aspect-square"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-cover group-hover:scale-110 transition duration-500 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-[10px] uppercase font-bold text-accent-gold tracking-widest">
                {item.category}
              </span>
              <h3 className="text-sm font-bold text-white mt-0.5">
                {item.title}
              </h3>
              <span className="text-xs font-semibold text-gray-300 mt-2 flex items-center gap-1">
                View Project →
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="#portfolio"
          className="inline-block border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black font-bold text-xs px-8 py-3.5 rounded-md transition-all active:scale-[0.98] uppercase"
        >
          VIEW ALL PROJECTS →
        </Link>
      </div>
    </section>
  )
}
