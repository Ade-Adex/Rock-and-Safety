import React from 'react'

export interface FaqItem {
  q: string
  a: React.ReactNode
}

export const faqsData: FaqItem[] = [
  {
    q: 'What is Rock and Safety Marketing Hub?',
    a: 'Rock and Safety Marketing Hub is a digital marketing and business growth agency dedicated to helping businesses, entrepreneurs, and authors build a strong online presence through strategic marketing, creative design, and publishing solutions.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer a wide range of services, including website design, SEO, social media marketing, paid advertising, branding, content creation, AI-powered marketing, blog publishing, business consulting, book publishing, and eBook development.',
  },
  {
    q: 'Do you provide book publishing services?',
    a: 'Yes. We help authors publish both print books and eBooks. Our services include manuscript formatting, cover design, eBook conversion (PDF, EPUB, and Kindle formats), publishing assistance, author branding, and book launch support.',
  },
  {
    q: 'How do I make payment — both locally and internationally?',
    a: (
      <div className="space-y-3">
        <p>
          We accept payments from both Nigeria and international clients through
          the following options:
        </p>
        <ul className="space-y-1.5 pl-2 list-none">
          <li>
            💳 <strong>Card Payment</strong> (via Paystack)
          </li>
          <li>
            💸 <strong>PayPal</strong>
          </li>
          <li>
            💼 <strong>Payoneer</strong>
          </li>
        </ul>
        {/* <p className="text-xs text-slate-400 italic">
          For speed and convenience, USDT is most preferred, but we&apos;ll
          guide you through whichever option works best for you.
        </p> */}
      </div>
    ),
  },
  {
    q: 'Can you help promote my book after it is published?',
    a: 'Absolutely. We provide book marketing services such as social media promotion, email marketing, landing page creation, SEO, paid advertising, author branding, and launch campaigns to help your book reach a wider audience and increase sales.',
  },
  {
    q: 'Who can benefit from your services?',
    a: 'Our services are designed for startups, small and medium-sized businesses, entrepreneurs, authors, churches, healthcare providers, educational institutions, nonprofits, and organizations seeking sustainable business growth.',
  },
  {
    q: 'Do you create content for websites and blogs?',
    a: 'Yes. We produce professional, SEO-optimized content for websites and blogs, including articles, service pages, product descriptions, and educational resources that improve search rankings, attract visitors, and establish your brand as an authority.',
  },
  {
    q: 'How do I get started with Rock and Safety Marketing Hub?',
    a: `Getting started is easy. Contact us through our website, email, WhatsApp, or social media to discuss your project. We'll understand your goals, recommend the best solution, provide a customized quote, and support you from start to finish.`,
  },
]
