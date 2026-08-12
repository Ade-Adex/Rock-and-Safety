import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.rockandsafety.com'),
  title: {
    default:
      'Rock & Safety Marketing Hub | Industrial Safety & Strategic Marketing',
    template: '%s | Rock & Safety Marketing Hub',
  },
  description:
    'Comprehensive industrial safety solutions, workplace compliance, occupational health services, and strategic digital marketing tailored for enterprise and safety sectors.',
  keywords: [
    'Rock and Safety',
    'Industrial Safety Solutions',
    'Workplace Safety Equipment',
    'Occupational Health and Safety',
    'Strategic Marketing Agency',
    'Safety Consulting Services',
    'Digital Marketing for Safety Brands',
    'Compliance Solutions',
    'Online marketing agency',
    'Digital marketing agency',
    'Website design for small businesses',
    'SEO services Nigeria',
    'Book marketing services',
    'Small business marketing',
    'Web design agency Nigeria',
    'Social media marketing',
    'Business branding services',
    'Author marketing services',
    'Rock and Safety Marketing Hub',
  ],
  authors: [{ name: 'Rock & Safety Marketing Hub' }],
  creator: 'Rock & Safety Marketing Hub',
  publisher: 'Rock & Safety Marketing Hub',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Rock & Safety Marketing Hub | Professional Safety & Marketing Solutions',
    description:
      'Your trusted partner for workplace safety compliance, industrial safety products, and strategic marketing services.',
    url: 'https://www.rockandsafety.com',
    siteName: 'Rock & Safety Marketing Hub',
    images: [
      {
        url: '/Image/Logo.jpeg',
        alt: 'Rock & Safety Marketing Hub Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Rock & Safety Marketing Hub | Safety & Marketing Solutions',
    description:
      'Providing top-tier workplace safety compliance and strategic growth marketing.',
    images: ['/Image/Logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
