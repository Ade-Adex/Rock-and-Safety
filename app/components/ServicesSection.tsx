import Link from 'next/link'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { services } from '@/app/data/services'

export default function ServicesSection() {
  return (
    <section className="bg-surface-white py-12 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-surface-white-border">
      <SectionHeader
        badge="OUR SERVICES"
        title="Powerful Solutions For Your Business Growth"
        lightMode={true}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between bg-surface-white-muted p-4 rounded-lg border border-surface-white-border hover:border-primary/60 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl p-1 bg-surface-white shrink-0 rounded-lg border border-primary shadow-xs">
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-secondary group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary/70 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
            </div>
            <Link
              href="#services"
              className="mt-auto w-full text-secondary justify-between text-xs font-extrabold pl-15 py-2.5"
            >
              <span>LEARN MORE</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
