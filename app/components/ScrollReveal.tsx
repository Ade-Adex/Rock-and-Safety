'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp'
  delay?: number
  duration?: string
  className?: string
}

export default function ScrollReveal({
  children,
  variant = 'slideUp',
  delay = 0,
  duration = 'duration-1000',
  className = '',
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    // Apply the custom delay directly to the DOM node when mounting on client side
    // This removes the inline `style` attribute from JSX completely, eliminating hydration errors.
    currentRef.style.setProperty(
      '--reveal-delay',
      isIntersecting ? `${delay}ms` : '0ms',
    )

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)

        // Dynamically adjust the delay value on view change
        currentRef.style.setProperty(
          '--reveal-delay',
          entry.isIntersecting ? `${delay}ms` : '0ms',
        )
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px',
      },
    )

    observer.observe(currentRef)

    return () => observer.disconnect()
  }, [isIntersecting, delay])

  const variants = {
    fadeIn: 'opacity-0 data-[visible=true]:opacity-100',
    slideUp:
      'opacity-0 translate-y-12 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0',
    slideLeft:
      'opacity-0 translate-x-2 md:translate-x-12 data-[visible=true]:opacity-100 data-[visible=true]:translate-x-0',
    slideRight:
      'opacity-0 -translate-x-2 md:-translate-x-12 data-[visible=true]:opacity-100 data-[visible=true]:translate-x-0',
    scaleUp:
      'opacity-0 scale-95 data-[visible=true]:opacity-100 data-[visible=true]:scale-100',
  }

  return (
    <div
      ref={ref}
      data-visible={isIntersecting}
      className={`transition-all ${duration} ease-out ${variants[variant]} ${className}`}
      style={{ transitionDelay: 'var(--reveal-delay, 0ms)' }}
    >
      {children}
    </div>
  )
}
