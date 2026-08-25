'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPinterestP,
  FaLink,
  FaShareAlt,
} from 'react-icons/fa'

interface ShareButtonsProps {
  title: string
  url: string
  /** Optional hero image URL — passed to Pinterest's "media" parameter */
  image?: string
  compact?: boolean
}

/**
 * Social share buttons for blog posts.
 * Uses direct share URLs for Facebook, X, LinkedIn, WhatsApp & Pinterest plus a
 * copy-link button and (when available) the native Web Share API.
 * Every icon carries its official brand colour, and hovering a button fills it
 * with that same brand colour (icon flips to white).
 */
export default function ShareButtons({
  title,
  url,
  image,
  compact = false,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)
  const encodedImage = image ? encodeURIComponent(image) : ''

  // Official brand colours — stored as complete class literals so Tailwind's
  // scanner picks them up at build time (icon tint + matching hover fill).
  const shareLinks = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FaFacebookF,
      iconColor: 'text-[#1877F2]',
      hoverBg: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: FaTwitter,
      iconColor: 'text-white',
      hoverBg: 'hover:bg-black hover:border-white',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: FaLinkedinIn,
      iconColor: 'text-[#0A66C2]',
      hoverBg: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: FaWhatsapp,
      iconColor: 'text-[#25D366]',
      hoverBg: 'hover:bg-[#25D366] hover:border-[#25D366]',
    },
    {
      name: 'Pinterest',
      // "media" gives Pinterest the image to pin — required for a good pin UX
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}${
        encodedImage ? `&media=${encodedImage}` : ''
      }&description=${encodedTitle}`,
      icon: FaPinterestP,
      iconColor: 'text-[#E60023]',
      hoverBg: 'hover:bg-[#E60023] hover:border-[#E60023]',
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
            title={`Share on ${link.name}`}
            className={`group w-8 h-8 flex items-center justify-center rounded-full bg-card-bg border border-card-border transition-colors duration-200 ${link.hoverBg}`}
          >
            <Icon
              className={`w-3.5 h-3.5 transition-colors duration-200 group-hover:text-white ${link.iconColor}`}
            />
          </Link>
        )
      })}

      <button
        type="button"
        onClick={handleNativeShare}
        aria-label="Share via device options"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-card-bg border border-card-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-colors cursor-pointer"
      >
        <FaShareAlt className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link to clipboard"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-card-bg border border-card-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-colors cursor-pointer"
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