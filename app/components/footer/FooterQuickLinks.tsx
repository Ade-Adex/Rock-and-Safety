import { NAV_LINKS } from '@/app/constants/navigation'
import Link from 'next/link'

export default function FooterQuickLinks() {
  const quickLinks = NAV_LINKS.filter((link) => !link.hideInFooter)

  return (
    <div>
      <h4 className="text-foreground font-bold mb-4 tracking-wide">
        Quick Links
      </h4>
      <ul className="space-y-2.5">
        {quickLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
