import Link from 'next/link'

export default function HeaderTopBar() {
  return (
    <div className="bg-card-b text-muted text-xs py-2 px-4 sm:px-8 border-b border-card-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Contact Details */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
          <span className="whitespace-nowrap flex items-center gap-1.5">
            <span>📞</span> +234 815 224 5314
          </span>
          <span className="truncate max-w-50 min-[400px]:max-w-none flex items-center gap-1.5">
            <span>✉️</span> info@rockandsafety.com
          </span>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center space-x-3 text-[11px] sm:text-xs">
          <span className="text-muted">Follow Us:</span>
          <Link href="#" className="hover:text-primary transition-colors">
            Facebook
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Instagram
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            YouTube
          </Link>
        </div>
      </div>
    </div>
  )
}
