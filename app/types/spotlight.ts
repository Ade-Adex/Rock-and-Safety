import { IconType } from 'react-icons'

export interface HeroHighlight {
  icon: IconType
  label: string
}

export interface StepItem {
  step: string
  icon: IconType
  title: string
  description: string
}

export interface SpotlightContent {
  tag: string
  titlePrefix: string
  titleHighlight: string
  description: string
  ctaButtonText: string
  ctaButtonUrl?: string // Added
  heroHighlights: HeroHighlight[]
  heroImage: string
  pricingFeatures: string[]
  bannerTitle: string
  bannerSubtitle: string
  bannerCta: string
  bannerCtaUrl?: string // Added
}

export interface SpotlightData {
  content: SpotlightContent
  steps: StepItem[]
}
