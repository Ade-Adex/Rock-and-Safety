import { redirect, notFound } from 'next/navigation'
import { fetchSpotlightData } from '@/sanity/services/contentService'
import SpotlightHero from '@/app/components/spotlight/SpotlightHero'
import SpotlightPricing from '@/app/components/spotlight/SpotlightPricing'
import SpotlightSteps from '@/app/components/spotlight/SpotlightSteps'
import SpotlightBanner from '@/app/components/spotlight/SpotlightBanner'

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SpotlightPage({ searchParams }: PageProps) {
  const params = await searchParams
  const categoryParam = params.category

  const category =
    typeof categoryParam === 'string'
      ? categoryParam.trim()
      : Array.isArray(categoryParam)
        ? categoryParam[0]
        : ''

  if (category !== 'Author' && category !== 'Business') {
    redirect('/spotlight?category=Author')
  }

  const isAuthor = category === 'Author'
  const spotlightData = await fetchSpotlightData(category)

  if (!spotlightData) {
    notFound()
  }

  const { content, steps } = spotlightData

  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-20 py-8">
      <SpotlightHero content={content} isAuthor={isAuthor} />

      {/* Added ctaButtonUrl prop */}
      <SpotlightPricing
        pricingFeatures={content.pricingFeatures}
        ctaButtonText={content.ctaButtonText}
        ctaButtonUrl={content.ctaButtonUrl}
      />

      <SpotlightSteps steps={steps} />

      {/* Added ctaUrl prop */}
      <SpotlightBanner
        title={content.bannerTitle}
        subtitle={content.bannerSubtitle}
        ctaText={content.bannerCta}
        ctaUrl={content.bannerCtaUrl}
      />
    </div>
  )
}
