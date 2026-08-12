'use client'

import SectionHeader from '@/app/components/ui/SectionHeader'
import { ServiceItem } from '@/app/types/service'
import Link from 'next/link'

interface ServicesSectionProps {
  services: ServiceItem[]
}

const serviceToCategoryMap: Record<string, string> = {
  'Digital Marketing': 'Marketing',
  'Web Development': 'Web Development',
  'UI/UX Design': 'UI/UX Design',
  Branding: 'Branding',
  'Social Media Management': 'Marketing',
  'Sales Funnels': 'Web Development',
  'Book Publishing & Marketing': 'Publishing',
  Consulting: 'All',
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="bg-surface-white py-12 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-surface-white-border">
      <SectionHeader
        badge="OUR SERVICES"
        title="Powerful Solutions For Your Business Growth"
        lightMode={true}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service) => {
          const categoryParam = serviceToCategoryMap[service.title] || 'All'
          const projectDetailsUrl = `/portfolios?category=${encodeURIComponent(categoryParam)}&service=${encodeURIComponent(service.title)}`

          return (
            <div
              key={service._id}
              className="group flex flex-col justify-between bg-surface-white-muted p-4 rounded-lg border border-surface-white-border hover:border-primary/60 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl p-1 bg-surface-white shrink-0 rounded-lg border border-primary shadow-xs">
                  {service.icon || '🚀'}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-secondary group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>
              <Link
                href={projectDetailsUrl}
                className="mt-auto w-full text-secondary flex items-center justify-between text-xs font-extrabold px-4 py-2.5 hover:text-primary transition-colors"
              >
                <span>LEARN MORE</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
