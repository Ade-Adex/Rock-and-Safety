'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaLink,
  FaShareAlt,
} from 'react-icons/fa'

interface ShareButtonsProps {
  title: string
  url: string
  compact?: boolean
}

/**
 * Social share buttons for blog posts.
 * Uses direct share URLs for Facebook, X, LinkedIn & WhatsApp plus a
 * copy-link button and (when available) the native Web Share API.
 */
export default function ShareButtons({
  title,
  url,
  compact = false,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FaFacebookF,
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: FaLinkedinIn,
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: FaWhatsapp,
    },
  ]

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // User cancelled or share failed — ignore
      }
      return
    }
    handleCopy()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = url
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`flex items-center gap-2 ${
        compact ? 'flex-wrap' : 'flex-wrap sm:flex-nowrap'
      }`}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-muted mr-1 flex items-center gap-1.5">
        <FaShareAlt className="w-3.5 h-3.5" />
        Share
      </span>

      {shareLinks.map((link) => {
        const Icon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.name}`}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-card-bg border border-card-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-colors"
          >
            <Icon className="w-3.5 h-3.5" />
          </Link>
        )
      })}

      <button
        type="button"
        onClick={handleNativeShare}
        aria-label="Share via device options"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-card-bg border border-card-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-colors"
      >
        <FaShareAlt className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link to clipboard"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-card-bg border border-card-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-colors"
      >
        <FaLink className="w-3.5 h-3.5" />
      </button>

      {copied && (
        <span className="text-[11px] text-primary font-semibold">
          Link copied!
        </span>
      )}
    </div>
  )
}