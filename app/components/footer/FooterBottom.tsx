import Link from 'next/link'

export default function FooterBottom() {
  return (
    <div className="max-w-7xl mx-auto border-t border-card-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted text-center sm:text-left">
      <p>© Rock and Safety Marketing Hub. All Rights Reserved.</p>
      <div className="flex space-x-4">
        <Link
          href="/privacy-policy"
          className="hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <span>|</span>
        <Link
          href="/terms-and-conditions"
          className="hover:text-foreground transition-colors"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  )
}
