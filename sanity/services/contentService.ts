import { groq } from 'next-sanity'
import { safeFetch } from '@/sanity/lib/client'
import { FaqItem } from '@/app/types/faq'
import { PortfolioItem } from '@/app/types/portfolio'
import { CategoryCount, PostFilterOptions, PostItem } from '@/app/types/post'
import { ServiceItem } from '@/app/types/service'
import { StatItem } from '@/app/types/stat'
import { TeamMember } from '@/app/types/team'
import { TestimonialItem } from '@/app/types/testimonial'
import { SpotlightData } from '@/app/types/spotlight'
import { getIconByName } from '@/app/utils/iconMapper'

export interface PortfolioFilterOptions {
  category?: string
  sort?: 'latest' | 'oldest' | 'title'
}

/** Raw shape returned by the spotlight GROQ query before icon mapping */
interface SpotlightRawHighlight {
  icon: string
  label: string
}

interface SpotlightRawStep {
  step: string
  icon: string
  title: string
  description: string
}

interface SpotlightRawData {
  tag?: string
  titlePrefix?: string
  titleHighlight?: string
  description?: string
  ctaButtonText?: string
  ctaButtonUrl?: string
  heroImage?: string
  heroHighlights?: SpotlightRawHighlight[]
  pricingFeatures?: string[]
  steps?: SpotlightRawStep[]
  bannerTitle?: string
  bannerSubtitle?: string
  bannerCta?: string
  bannerCtaUrl?: string
}

const POST_FIELDS = groq`
  _id,
  title,
  "slug": slug.current,
  scheduleDate,
  publishedAt,
  "date": coalesce(scheduleDate, publishedAt, _createdAt),
  description,
  "imageUrl": coalesce(mainImage.asset->url, image.asset->url),
  "category": coalesce(category->title, category->name, category),
  "author": {
    "name": coalesce(author->name, author.name, "Rock and Safety Team"),
    "bio": author->bio,
    "imageUrl": coalesce(author->image.asset->url, author.imageUrl)
  },
  readingTime,
  commentCount,
  canonicalUrl,
  seo,
  body[] {
    ...,
    _type == "block" => {
      ...,
      "id": _key
    }
  },
  "tableOfContents": body[style in ["h1", "h2", "h3"]]{
    "id": _key,
    "text": children[0].text,
    "level": style
  },
  "relatedArticles": *[_type == "post" && coalesce(scheduleDate, publishedAt, _createdAt) <= now() && coalesce(category->title, category->name, category) == ^.category && _id != ^._id][0..1]{
    _id,
    title,
    "slug": slug.current,
    "imageUrl": coalesce(mainImage.asset->url, image.asset->url),
    "date": coalesce(scheduleDate, publishedAt, _createdAt)
  }
`

export async function fetchPostBySlug(slug: string): Promise<PostItem | null> {
  if (!slug || typeof slug !== 'string') return null

  const query = groq`*[_type == "post" && (slug.current == $slug || _id == $slug) && coalesce(scheduleDate, publishedAt, _createdAt) <= now() && !(_id in path("drafts.**"))][0] {
    ${POST_FIELDS}
  }`

  return (
    await safeFetch<PostItem | null>(
      query,
      { slug },
      { next: { revalidate: 0 } },
    )
  ) ?? null
}

export async function fetchRecentPosts(limit: number = 4): Promise<PostItem[]> {
  const query = groq`*[_type == "post" && coalesce(scheduleDate, publishedAt, _createdAt) <= now() && !(_id in path("drafts.**"))] | order(coalesce(scheduleDate, publishedAt, _createdAt) desc)[0...$limit] {
    _id,
    title,
    "slug": coalesce(slug.current, _id),
    "imageUrl": coalesce(mainImage.asset->url, image.asset->url),
    "date": coalesce(scheduleDate, publishedAt, _createdAt)
  }`
  return (
    await safeFetch<PostItem[]>(
      query,
      { limit },
      { next: { revalidate: 0 } },
    )
  ) ?? []
}

/**
 * Fetch all categories directly from category documents or active post categories
 */
export async function fetchCategories(): Promise<string[]> {
  const query = groq`*[_type == "category"].title`
  const categoryTitles = (
    await safeFetch<string[]>(
      query,
      {},
      { next: { revalidate: 0 } },
    )
  ) ?? []

  if (categoryTitles && categoryTitles.length > 0) {
    return Array.from(new Set(categoryTitles.filter(Boolean)))
  }

  // Fallback to active post categories
  const counts = await fetchCategoryCounts()
  return counts.map((c) => c.name)
}

export async function fetchCategoryCounts(): Promise<CategoryCount[]> {
  const query = groq`*[_type == "post" && coalesce(scheduleDate, publishedAt, _createdAt) <= now() && defined(category)] {
    "category": coalesce(category->title, category->name, category)
  }`
  const posts = (
    await safeFetch<{ category: string }[]>(
      query,
      {},
      { next: { revalidate: 0 } },
    )
  ) ?? []

  const counts: Record<string, number> = {}
  const displayNames: Record<string, string> = {}
  posts.forEach((item) => {
    if (item.category && typeof item.category === 'string') {
      const raw = item.category.trim()
      if (!raw) return
      const key = raw.toLowerCase()
      counts[key] = (counts[key] || 0) + 1
      // Keep the first-seen spelling for display
      if (!displayNames[key]) displayNames[key] = raw
    }
  })

  return Object.entries(counts).map(([key, count]) => ({
    name: displayNames[key] ?? key,
    count,
  }))
}

export async function fetchFilteredPosts(
  options: PostFilterOptions = {},
): Promise<PostItem[]> {
  const { category, tag, search, sort = 'latest', limit = 20 } = options

  const conditions: string[] = [
    '_type == "post"',
    'coalesce(scheduleDate, publishedAt, _createdAt) <= now()',
    '!(_id in path("drafts.**"))',
  ]
  const params: Record<string, unknown> = { limit }

  if (category && category !== 'All') {
    conditions.push(
      'lower(coalesce(category->title, category->name, category)) == $category',
    )
    params.category = category.toLowerCase()
  }
  if (tag) {
    conditions.push('$tag in tags')
    params.tag = tag
  }
  if (search) {
    conditions.push('[title, description] match $search')
    params.search = `*${search}*`
  }

  const whereClause = conditions.join(' && ')
  const orderClause =
    sort === 'oldest'
      ? '| order(coalesce(scheduleDate, publishedAt, _createdAt) asc)'
      : '| order(coalesce(scheduleDate, publishedAt, _createdAt) desc)'

  const query = groq`*[${whereClause}] ${orderClause}[0...$limit] {
    ${POST_FIELDS}
  }`

  return (
    await safeFetch<PostItem[]>(query, params, {
      next: { revalidate: 0 },
    })
  ) ?? []
}

export async function fetchPosts(): Promise<PostItem[]> {
  const query = groq`*[_type == "post" && coalesce(scheduleDate, publishedAt, _createdAt) <= now() && !(_id in path("drafts.**"))] | order(coalesce(scheduleDate, publishedAt, _createdAt) desc) { ${POST_FIELDS} }`
  return (
    await safeFetch<PostItem[]>(query, {}, { next: { revalidate: 0 } })
  ) ?? []
}

export async function fetchLatestPosts(limit: number = 5): Promise<PostItem[]> {
  const query = groq`*[_type == "post" && coalesce(scheduleDate, publishedAt, _createdAt) <= now() && !(_id in path("drafts.**"))] | order(coalesce(scheduleDate, publishedAt, _createdAt) desc)[0...$limit] { ${POST_FIELDS} }`
  return (
    await safeFetch<PostItem[]>(
      query,
      { limit },
      { next: { revalidate: 0 } },
    )
  ) ?? []
}

export async function fetchFeaturedPosts(): Promise<PostItem[]> {
  const query = groq`*[_type == "post" && isFeatured == true && coalesce(scheduleDate, publishedAt, _createdAt) <= now() && !(_id in path("drafts.**"))] | order(coalesce(scheduleDate, publishedAt, _createdAt) desc) { ${POST_FIELDS} }`
  return (
    await safeFetch<PostItem[]>(query, {}, { next: { revalidate: 0 } })
  ) ?? []
}

export async function fetchFaqs(): Promise<FaqItem[]> {
  const query = groq`*[_type == "faq"] { _id, question, answer }`
  return (
    await safeFetch<FaqItem[]>(query, {}, { next: { revalidate: 0 } })
  ) ?? []
}

export async function fetchPortfolio(
  options: PortfolioFilterOptions = {},
): Promise<PortfolioItem[]> {
  const { category, sort = 'latest' } = options
  const conditions: string[] = ['_type == "portfolio"']
  const params: Record<string, unknown> = {}

  if (category && category !== 'All') {
    conditions.push(
      'lower(coalesce(category->title, category->name, category)) == $category',
    )
    params.category = category.toLowerCase()
  }

  const whereClause = conditions.join(' && ')
  let orderClause = '| order(_createdAt desc)'
  if (sort === 'oldest') orderClause = '| order(_createdAt asc)'
  if (sort === 'title') orderClause = '| order(title asc)'

  const query = groq`*[${whereClause}] ${orderClause} {
    _id,
    title,
    "category": coalesce(category->title, category->name, category),
    "image": image.asset->url,
    link,
    _createdAt
  }`

  return (
    await safeFetch<PortfolioItem[]>(query, params, {
      next: { revalidate: 0 },
    })
  ) ?? []
}

export async function fetchServices(): Promise<ServiceItem[]> {
  const query = groq`*[_type == "service"] { _id, title, icon, description, "category": coalesce(category->title, category->name, category) }`
  return (
    await safeFetch<ServiceItem[]>(
      query,
      {},
      { next: { revalidate: 0 } },
    )
  ) ?? []
}

export async function fetchStats(): Promise<StatItem[]> {
  const query = groq`*[_type == "stat"] { _id, value, label }`
  return (
    await safeFetch<StatItem[]>(query, {}, { next: { revalidate: 0 } })
  ) ?? []
}

export async function fetchTeam(): Promise<TeamMember[]> {
  const query = groq`*[_type == "teamMember"] | order(order asc) { _id, name, role, "imageUrl": image.asset->url, order }`
  return (
    await safeFetch<TeamMember[]>(
      query,
      {},
      { next: { revalidate: 0 } },
    )
  ) ?? []
}

export async function fetchTestimonials(): Promise<TestimonialItem[]> {
  const query = groq`*[_type == "testimonial"] | order(_createdAt desc) { _id, name, title, "imageUrl": image.asset->url, quote }`
  return (
    await safeFetch<TestimonialItem[]>(
      query,
      {},
      { next: { revalidate: 0 } },
    )
  ) ?? []
}

export async function fetchSpotlightData(
  category: 'Author' | 'Business',
): Promise<SpotlightData | null> {
  const query = groq`*[_type == "spotlight" && category == $category][0] {
    "tag": select(tagPreset == "OTHER" => tagCustom, tagPreset),
    "titlePrefix": select(titlePrefixPreset == "OTHER" => titlePrefixCustom, titlePrefixPreset),
    "titleHighlight": select(titleHighlightPreset == "OTHER" => titleHighlightCustom, titleHighlightPreset),
    "description": select(descriptionPreset == "OTHER" => descriptionCustom, descriptionPreset),
    "ctaButtonText": select(ctaButtonTextPreset == "OTHER" => ctaButtonTextCustom, ctaButtonTextPreset),
    ctaButtonUrl,
    "heroImage": heroImage.asset->url,
    heroHighlights[] {
      icon,
      "label": select(labelPreset == "OTHER" => labelCustom, labelPreset)
    },
    pricingFeatures,
    steps[] {
      step,
      icon,
      "title": select(titlePreset == "OTHER" => titleCustom, titlePreset),
      "description": select(descriptionPreset == "OTHER" => descriptionCustom, descriptionPreset)
    },
    "bannerTitle": select(bannerTitlePreset == "OTHER" => bannerTitleCustom, bannerTitlePreset),
    "bannerSubtitle": select(bannerSubtitlePreset == "OTHER" => bannerSubtitleCustom, bannerSubtitlePreset),
    "bannerCta": select(bannerCtaPreset == "OTHER" => bannerCtaCustom, bannerCtaPreset),
    bannerCtaUrl
  }`

  const data = await safeFetch<SpotlightRawData>(
    query,
    { category },
    { next: { revalidate: 0 } },
  )

  if (!data) return null

  return {
    content: {
      tag: data.tag || '',
      titlePrefix: data.titlePrefix || '',
      titleHighlight: data.titleHighlight || '',
      description: data.description || '',
      ctaButtonText: data.ctaButtonText || '',
      ctaButtonUrl: data.ctaButtonUrl || '#pricing',
      heroImage: data.heroImage || '',
      pricingFeatures: data.pricingFeatures || [],
      heroHighlights:
        data.heroHighlights?.map((item: { icon: string; label: string }) => ({
          icon: getIconByName(item.icon),
          label: item.label || '',
        })) || [],
      bannerTitle: data.bannerTitle || '',
      bannerSubtitle: data.bannerSubtitle || '',
      bannerCta: data.bannerCta || '',
      bannerCtaUrl: data.bannerCtaUrl || '#pricing',
    },
    steps:
      data.steps?.map(
        (item: {
          step: string
          icon: string
          title: string
          description: string
        }) => ({
          step: item.step,
          icon: getIconByName(item.icon),
          title: item.title || '',
          description: item.description || '',
        }),
      ) || [],
  }
}
