import Link from 'next/link'

interface NavLinksProps {
  onLinkClick?: () => void
  mobile?: boolean
}

const links = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'BLOG', href: '#blog' },
  { name: 'CONTACT', href: '#contact' },
]

export default function NavLinks({
  onLinkClick,
  mobile = false,
}: NavLinksProps) {
  return (
    <nav
      className={`flex ${
        mobile
          ? 'flex-col space-y-4 text-left w-full'
          : 'items-center space-x-6 text-xs font-bold tracking-wider'
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onLinkClick}
          className={`${
            mobile
              ? 'text-gray-200 hover:text-accent-gold text-base py-2 border-b border-gray-800/60 font-semibold'
              : 'text-gray-300 hover:text-accent-gold transition-colors'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
