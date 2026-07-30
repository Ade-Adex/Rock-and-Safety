import React from 'react'

export interface FaqItem {
  q: string
  a: React.ReactNode
}

export const faqsData: FaqItem[] = [
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
            💳 <strong>Card Payment</strong> (via Paystack or Flutterwave)
          </li>
          <li>
            💸 <strong>PayPal</strong>
          </li>
          <li>
            💼 <strong>Payoneer</strong>
          </li>
          <li>
            🪙 <strong>USDT (Preferred)</strong> and BTC
          </li>
          <li>
            💻 <strong>Fiverr or Upwork</strong> (if you prefer a freelancing
            platform)
          </li>
        </ul>
        <p className="text-xs text-slate-400 italic">
          For speed and convenience, USDT is most preferred, but we&apos;ll
          guide you through whichever option works best for you.
        </p>
      </div>
    ),
  },
  {
    q: 'How long will it take to build my page?',
    a: 'Typically, a standard project takes between 5 to 10 business days depending on responsiveness, feedback speed, and copy complexity.',
  },
  {
    q: 'What if I don’t have my content or product ready yet?',
    a: 'Don’t worry! We can assist you in structuring your core concept, value offerings, and write complete layout copywriting from scratch.',
  },
  {
    q: 'Can I make changes to the page after delivery?',
    a: 'Yes. All packages include standard post-delivery revision rounds to ensure things align perfectly with your standards.',
  },
  {
    q: 'Will you run the ads for me too?',
    a: 'We focus purely on page generation and conversion framework setups, but we can instantly connect you directly with our trusted Facebook Ads specialist.',
  },
  {
    q: 'What platform will my page be built on?',
    a: 'Depending on your needs, we work across Systeme.io, WordPress, Elementor, or Wix.',
  },
  {
    q: 'What if I’m not satisfied with the page?',
    a: 'We offer a 100% Satisfaction Guarantee. We will make revisions to fix any issues, or issue an equitable refund based on the context.',
  },
]
