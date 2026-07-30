import { portfolioItems } from '@/app/data/portfolioData'
import Link from 'next/link'

export default function FooterServicesList() {
  // Extract unique categories from portfolio items, excluding 'All'
  const serviceCategories = Array.from(
    new Set(portfolioItems.map((item) => item.category)),
  )

  return (
    <div>
      <h4 className="text-foreground font-bold mb-4 tracking-wide">
        Our Services
      </h4>
      <ul className="space-y-2.5">
        {serviceCategories.map((service) => (
          <li key={service}>
            <Link
              href="#services"
              className="hover:text-accent-gold transition-colors"
            >
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
