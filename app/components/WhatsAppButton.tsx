interface WhatsAppButtonProps {
  label?: string
  className?: string
  message?: string
}

export default function WhatsAppButton({
  label = 'BOOK A FREE CONSULTATION',
  className = 'border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black font-extrabold text-sm px-7 py-3.5 rounded-md text-center transition-all active:scale-[0.98]',
  message = 'Hello! I would like to book a free consultation for your marketing services.',
}: WhatsAppButtonProps) {
  const phoneNumber = '2348152245314'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      {label}
    </a>
  )
}
