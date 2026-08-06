'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error('Unhandled Application Error:', error)
  }, [error])

  return (
    <main className="bg-dark min-h-screen text-foreground flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-card-bg p-8 rounded-2xl border border-card-border shadow-xl">
        {/* Error Icon */}
        <div className="w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto text-red-400 text-2xl font-bold">
          ⚠️
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
          Something went wrong
        </h2>

        {/* Message */}
        <p className="text-muted text-xs sm:text-sm leading-relaxed">
          An unexpected runtime error occurred. You can try recovering by clicking below or head back home.
        </p>

        {/* Optional Digest Code */}
        {error.digest && (
          <p className="text-[10px] text-muted font-mono bg-dark/50 p-2 rounded border border-card-border overflow-x-auto">
            Digest: {error.digest}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-dark font-bold text-xs px-6 py-3.5 rounded-xl transition-all uppercase tracking-wider cursor-pointer"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto bg-dark hover:bg-card-border text-foreground font-semibold text-xs px-6 py-3.5 rounded-xl border border-card-border transition-all uppercase tracking-wider text-center"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  )
}