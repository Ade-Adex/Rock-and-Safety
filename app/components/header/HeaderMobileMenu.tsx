import Link from 'next/link'
import NavLinks from '@/app/components/header/NavLinks'

interface HeaderMobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function HeaderMobileMenu({
  isOpen,
  onClose,
}: HeaderMobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="lg:hidden bg-background border-b border-card-border px-6 py-6 transition-all duration-300">
      <NavLinks mobile onLinkClick={onClose} />
      <div className="mt-6 pt-4 border-t border-card-border">
        <Link
          href="#contact"
          onClick={onClose}
          className="block w-full text-center bg-primary hover:bg-primary-dark text-secondary font-extrabold text-sm py-3 rounded-lg transition-all uppercase tracking-wider"
        >
          GET A QUOTE
        </Link>
      </div>
    </div>
  )
}
