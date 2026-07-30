import { NAV_LINKS } from '@/app/constants/navigation'
import Link from 'next/link'

interface NavLinksProps {
  onLinkClick?: () => void
  mobile?: boolean
}

export default function NavLinks({
  onLinkClick,
  mobile = false,
}: NavLinksProps) {
  const navLinks = NAV_LINKS.filter((link) => !link.hideInNavbar)

  return (
    <nav
      className={`flex ${
        mobile
          ? 'flex-col space-y-4 text-left w-full'
          : 'items-center space-x-6 text-xs font-bold tracking-wider'
      }`}
    >
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onLinkClick}
          className={`${
            mobile
              ? 'text-foreground hover:text-primary-dark text-base py-2 border-b border-card-border font-semibold'
              : 'text-foreground hover:text-primary-dark transition-colors text-base'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
