'use client'

import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioItems, PortfolioItem } from '@/app/data/portfolioData'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Button from '@/app/components/ui/Button'

interface ProjectsPageProps {
  searchParams: Promise<{
    category?: string
    service?: string
  }>
}

export default function ProjectDetailsPage({
  searchParams,
}: ProjectsPageProps) {
  const params = use(searchParams)
  const categoryQuery = params.category || 'All'
  const serviceTitle = params.service || 'Service'

  // Filter projects matching selected category
  const relatedProjects =
    categoryQuery === 'All'
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category.toLowerCase() === categoryQuery.toLowerCase(),
        )

  return (
    <main className="bg-dark min-h-screen text-foreground py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Navigation back */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="text-xs">
              ← BACK TO HOME
            </Button>
          </Link>
        </div>

        {/* Section Header */}
        <SectionHeader
          badge={serviceTitle.toUpperCase()}
          title={`Projects & Work for ${serviceTitle}`}
          centered={false}
        />

        <p className="text-muted text-sm sm:text-base max-w-3xl -mt-6 mb-12 leading-relaxed">
          Showing {relatedProjects.length} portfolio item
          {relatedProjects.length !== 1 ? 's' : ''} under the{' '}
          <span className="text-accent-gold font-semibold">
            {categoryQuery}
          </span>{' '}
          category.
        </p>

        {/* Projects Grid */}
        {relatedProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((item: PortfolioItem) => (
              <div
                key={item.id}
                className="group rounded-xl overflow-hidden bg-card-bg border border-card-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <div className="relative aspect-16/9 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-dark/80 backdrop-blur-md text-accent-gold text-[10px] font-bold px-2.5 py-1 rounded-md border border-card-border uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-card-border/60 flex items-center justify-between">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                      >
                        VIEW LIVE DEMO →
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-muted flex items-center gap-1">
                        CASE STUDY →
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card-bg rounded-2xl border border-card-border">
            <p className="text-muted text-base">
              No specific portfolio items found for this service yet.
            </p>
            <div className="mt-6">
              <Link href="/#services">
                <Button variant="primary">VIEW OTHER SERVICES</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
