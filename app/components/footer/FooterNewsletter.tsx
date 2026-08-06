'use client'

import { useState, useTransition } from 'react'
import { subscribeNewsletter } from '@/app/actions/newsletter'

export default function FooterNewsletter() {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{
    success: boolean
    text: string
  } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMessage(null)

    const formElement = e.currentTarget
    const formData = new FormData(formElement)

    startTransition(async () => {
      const result = await subscribeNewsletter(formData)
      setMessage({ success: result.success, text: result.message })
      if (result.success) {
        formElement.reset()
      }
    })
  }

  return (
    <div className="sm:col-span-2 lg:col-span-1">
      <h4 className="text-foreground font-bold mb-4 tracking-wide">
        Newsletter
      </h4>
      <p className="mb-3 leading-relaxed">
        Get weekly digital marketing tips, strategies, and insights delivered
        straight to your inbox. Stay ahead in the ever-evolving world of online
        marketing.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full p-2.5 rounded-lg bg-card-bg border border-card-border text-foreground focus:outline-none focus:border-primary transition-colors text-xs sm:text-sm"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full p-2.5 rounded-lg bg-card-bg border border-card-border text-foreground focus:outline-none focus:border-primary transition-colors text-xs sm:text-sm"
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary hover:bg-primary/90 text-secondary font-extrabold py-2.5 rounded-lg transition-all active:scale-[0.98] uppercase cursor-pointer disabled:opacity-50 text-xs sm:text-sm"
        >
          {isPending ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
        </button>
        {message && (
          <p
            className={`text-xs mt-1 ${message.success ? 'text-green-500' : 'text-red-500'}`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  )
}
