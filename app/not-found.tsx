import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-dark min-h-screen text-foreground flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Badge / Code */}
        <div className="inline-block bg-accent-gold/20 text-accent-gold text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-accent-gold/30">
          404 Error
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-dark font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md uppercase tracking-wider"
          >
            Back to Home
          </Link>

          <Link
            href="/blog"
            className="w-full sm:w-auto bg-card-bg hover:bg-card-border text-foreground font-semibold text-xs px-6 py-3.5 rounded-xl border border-card-border transition-all uppercase tracking-wider"
          >
            Explore Blog
          </Link>
        </div>
      </div>
    </main>
  )
}
