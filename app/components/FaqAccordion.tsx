'use client'

import { faqsData } from '@/app/data/faqs'
import { useState } from 'react'
import ScrollReveal from '@/app/components/ScrollReveal'
import SectionHeader from '@/app/components/ui/SectionHeader'

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-surface-white py-12 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-surface-white-border"
    >
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Guarantee Banner */}
        <ScrollReveal variant="scaleUp">
          <div className="bg-surface-white-muted p-4 rounded-lg border border-surface-white-border hover:border-primary/60 hover:shadow-xl transition-all duration-300 text-center space-y-2 shadow-sm">
            <SectionHeader
              badge="100% Satisfaction Guarantee"
              title="Satisfaction Guarantee"
              lightMode={true}
              className="mb-2!"
            />
            <p className="font-sans text-secondary/80 text-sm max-w-2xl mx-auto leading-relaxed">
              If we fail to deliver your page as agreed, and you&apos;re not
              satisfied after revisions, we&apos;ll issue a partial or full
              refund depending on the situation.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Area */}
        <div className="space-y-4">
          <ScrollReveal variant="fadeIn">
            <div className="text-center space-y-2 mb-8">
              <SectionHeader
                badge="Frequently Asked Questions"
                title="You have questions. We've got the answers."
                lightMode={true}
                className="mb-2!"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideUp" delay={150}>
            <div className="bg-surface-white-muted rounded-2xl overflow-hidden divide-y divide-surface-white-border shadow-sm">
              {faqsData.map((faq, idx) => {
                const isOpen = openIndex === idx
                return (
                  <div key={idx} className="bg-surface-white transition-colors">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-secondary hover:bg-surface-white-muted transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-muted shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                          ? 'max-h-125 border-t border-card-border'
                          : 'max-h-0 pointer-events-none'
                      }`}
                    >
                      <div className="p-5 font-sans text-sm text-secondary/70 leading-relaxed bg-surface-white-muted">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
