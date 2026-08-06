'use client'

import { useState, useTransition } from 'react'
import { subscribeNewsletter } from '@/app/actions/newsletter'

interface EbookModalProps {
  isOpen: boolean
  onClose: () => void
}

// Replace this with your actual eBook download link or hosted file path
const EBOOK_DOWNLOAD_URL = process.env.EBOOK_DOWNLOAD_URL || ''

export default function EbookModal({ isOpen, onClose }: EbookModalProps) {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{
    success: boolean
    text: string
  } | null>(null)

  if (!isOpen) return null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMessage(null)

    const formElement = e.currentTarget
    const formData = new FormData(formElement)

    startTransition(async () => {
      // Reuses your existing Resend newsletter server action
      const result = await subscribeNewsletter(formData)

      if (result.success) {
        setMessage({
          success: true,
          text: 'Success! Redirecting to your e-book...',
        })
        formElement.reset()

        // Redirect user to the eBook download after 1.5 seconds
        setTimeout(() => {
          window.location.href = EBOOK_DOWNLOAD_URL
        }, 1500)
      } else {
        setMessage({ success: false, text: result.message })
      }
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-card-bg border border-card-border rounded-2xl p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 text-muted hover:text-foreground text-xl transition-colors"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3 text-xl">
            📖
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Get Your Free E-Book
          </h3>
          <p className="text-xs text-muted mt-1 leading-relaxed">
            Enter your name and email below to gain instant access to our
            digital marketing guide.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <div>
            <label className="block text-xs text-muted mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-2.5 rounded-lg bg-dark border border-card-border text-foreground text-xs focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-muted mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-2.5 rounded-lg bg-dark border border-card-border text-foreground text-xs focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary hover:bg-primary/90 text-secondary font-extrabold py-3 rounded-lg transition-all active:scale-[0.98] uppercase cursor-pointer disabled:opacity-50 text-xs tracking-wider mt-2"
          >
            {isPending ? 'PROCESSING...' : 'DOWNLOAD E-BOOK NOW'}
          </button>

          {message && (
            <p
              className={`text-xs text-center mt-2 ${
                message.success
                  ? 'text-green-500 font-semibold'
                  : 'text-red-500'
              }`}
            >
              {message.text}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
