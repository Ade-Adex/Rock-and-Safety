'use client'

import { useEffect } from 'react'
import ScrollReveal from '@/app/components/ScrollReveal'
import SectionHeader from '@/app/components/ui/SectionHeader'

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section
      id="contact"
      className="bg-surface-white py-12 px-4 md:px-12 w-full border-t border-card-border text-foreground"
    >
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Headings */}
        <ScrollReveal variant="slideUp">
          <div className="text-center space-y-3">
            <SectionHeader
              badge="Contact Us"
              title="Let’s Talk About Your Project"
              className="mb-2!"
              lightMode={true}
            />
            <p className="font-sans text-secondary/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We’re here to help you every step of the way → whether you’re
              launching a new offer, need expert guidance, or want to discuss
              your project details.
            </p>
          </div>
        </ScrollReveal>

        {/* 1-on-1 Calendar Schedule Section */}
        <ScrollReveal variant="slideUp" delay={200}>
          <div className=" border border-surface-white-border rounded-4xl overflow-hidden shadow-xl bg-surface-white-muted p-4 md:p-10 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-secondary">
                Book a Free 1-on-1 Consultation
              </h3>
              <p className="font-sans text-sm text-secondary/80">
                Want to speak with us live? Schedule a Google Meet session to
                review your goals and plan your launch.
              </p>
            </div>

            <div className="w-full min-h-150 bg-surface-white-muted rounded-2xl border border-surface-white-border overflow-hidden relative">
              <div
                className="calendly-inline-widget w-full h-full absolute inset-0 "
                data-url="https://calendly.com/adeoluamole/scale-up-consultation-call"
                style={{ minWidth: '320px', height: '600px' }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
