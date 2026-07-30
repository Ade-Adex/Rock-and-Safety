import Link from 'next/link'

export default function FooterBottom() {
  return (
    <div className="max-w-7xl mx-auto border-t border-gray-900/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-center sm:text-left">
      <p>© Rock and Safety Marketing Hub. All Rights Reserved.</p>
      <div className="flex space-x-4">
        <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link href="#" className="hover:text-gray-300 transition-colors">
          Terms & Conditions
        </Link>
      </div>
    </div>
  )
}
