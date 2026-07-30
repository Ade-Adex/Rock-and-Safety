import Button from '@/app/components/ui/Button'

interface WhatsAppButtonProps {
  label?: string
  className?: string
  message?: string
}

export default function WhatsAppButton({
  label = 'BOOK A FREE CONSULTATION',
  className = '',
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
      className="w-full sm:w-auto inline-block"
    >
      <Button variant="outline" className={`w-full sm:w-auto ${className}`}>
        {label}
      </Button>
    </a>
  )
}
