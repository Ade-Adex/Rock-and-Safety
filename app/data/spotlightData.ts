import { IconType } from 'react-icons'
import {
  FiEye,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiCreditCard,
  FiFileText,
  FiEdit3,
  FiSearch,
  FiSend,
} from 'react-icons/fi'
import AuthorImg from '@/public/Images/Author.jpeg'
import BusinessImg from '@/public/Images/Business.jpeg'
import { StaticImageData } from 'next/image'

export interface HeroHighlight {
  icon: IconType
  label: string
}

export interface SpotlightContent {
  tag: string
  titlePrefix: string
  titleHighlight: string
  description: string
  ctaButtonText: string
  heroHighlights: HeroHighlight[]
  heroImage: StaticImageData | string
  pricingFeatures: string[]
  bannerTitle: string
  bannerSubtitle: string
  bannerCta: string
}

export interface StepItem {
  step: string
  icon: IconType
  title: string
  description: string
}

export const getSpotlightContent = (isAuthor: boolean): SpotlightContent => ({
  tag: isAuthor ? 'AUTHOR SPOTLIGHT' : 'BUSINESS SPOTLIGHT',
  titlePrefix: isAuthor ? 'We Spotlight' : "Let's Put Your",
  titleHighlight: isAuthor ? 'Great Authors' : 'Business In The Spotlight',
  description: isAuthor
    ? 'Get your book and brand in front of a wider audience. We create a professional spotlight feature that builds your visibility and drives readers to you.'
    : 'We feature your business to a wider audience, build your credibility, and help you attract more customers.',
  ctaButtonText: isAuthor
    ? 'Book Your Author Spotlight'
    : 'Book Your Business Spotlight',
  heroHighlights: isAuthor
    ? [
        { icon: FiEye, label: 'More Visibility' },
        { icon: FiAward, label: 'Build Credibility' },
        { icon: FiTrendingUp, label: 'Grow Your Audience' },
      ]
    : [
        { icon: FiEye, label: 'More Visibility' },
        { icon: FiAward, label: 'Build Credibility' },
        { icon: FiUsers, label: 'Reach More Customers' },
        { icon: FiTrendingUp, label: 'Grow Your Business' },
      ],
  heroImage: isAuthor ? AuthorImg : BusinessImg,
  pricingFeatures: isAuthor
    ? [
        'Professional author feature',
        'Book & author profile',
        'Book cover display',
        'Social media promotion',
        'Permanent blog post',
        'Shareable spotlight link',
      ]
    : [
        'Professional business feature',
        'Business profile & story',
        'Social media promotion',
        'Permanent blog post',
        'Shareable spotlight link',
        'SEO-friendly exposure',
      ],
  bannerTitle: isAuthor ? 'Ready to Get Spotlighted?' : 'Ready To Get Noticed?',
  bannerSubtitle: isAuthor
    ? "Let's showcase your book and get it in front of the right readers."
    : 'Give your business the visibility it deserves.',
  bannerCta: isAuthor
    ? 'Book Your Spotlight Now →'
    : 'Book Your Business Spotlight Now →',
})

export const getSpotlightSteps = (isAuthor: boolean): StepItem[] => [
  {
    step: '1',
    icon: FiCreditCard,
    title: 'Book & Pay',
    description: 'Choose your region and make payment securely.',
  },
  {
    step: '2',
    icon: FiFileText,
    title: 'Submit Details',
    description: `Fill the ${
      isAuthor ? 'author' : 'business'
    } spotlight form and submit your information.`,
  },
  {
    step: '3',
    icon: FiEdit3,
    title: 'We Create',
    description: 'We craft a professional spotlight feature for you.',
  },
  {
    step: '4',
    icon: FiSearch,
    title: 'Review & Approve',
    description: 'Review your spotlight and request any changes.',
  },
  {
    step: '5',
    icon: FiSend,
    title: 'We Publish & Promote',
    description: 'Your spotlight goes live and we promote it to our audience.',
  },
]
