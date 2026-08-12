import NavLinks from '@/app/components/header/NavLinks'

interface HeaderMobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenModal: () => void
}

export default function HeaderMobileMenu({
  isOpen,
  onClose,
  onOpenModal,
}: HeaderMobileMenuProps) {
  if (!isOpen) return null

  const handleButtonClick = () => {
    onClose()
    onOpenModal()
  }

  return (
    <div className="lg:hidden bg-background border-b border-card-border px-6 py-6 transition-all duration-300">
      <NavLinks mobile onLinkClick={onClose} />
      <div className="mt-6 pt-4 border-t border-card-border">
        <button
          type="button"
          onClick={handleButtonClick}
          className="block w-full text-center bg-primary hover:bg-primary-dark text-secondary font-extrabold text-sm py-3 rounded-lg transition-all uppercase tracking-wider cursor-pointer active:scale-95"
        >
          GET FREE E-BOOK
        </button>
      </div>
    </div>
  )
}
