import { client } from '@/sanity/lib/client'
import { FaqItem } from '@/app/types/faq'
import { PortfolioItem } from '@/app/types/portfolio'
import { PostFilterOptions, PostItem } from '@/app/types/post'
import { ServiceItem } from '@/app/types/service'
import { StatItem } from '@/app/types/stat'
import { TeamMember } from '@/app/types/team'
import { TestimonialItem } from '@/app/types/testimonial'


export interface PortfolioFilterOptions {
  category?: string
  sort?: 'latest' | 'oldest' | 'title'
}

const POST_FIELDS = `
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  date,
  isFeatured,
  isLatest,
  views,
  category,
  readingTime,
  tags,
  body,
  "tableOfContents": body[style in ["h1", "h2", "h3", "h4"]] {
    "id": _key,
    "text": children[0].text,
    "level": style
  },
  author->{
    _id,
    name,
    role,
    "imageUrl": image.asset->url
  },
  relatedArticles[]->{
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    date
  }
`

export async function fetchFaqs(): Promise<FaqItem[]> {
  const query = `*[_type == "faq"] {
    _id,
    question,
    answer
  }`
  return await client.fetch<FaqItem[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}

export async function fetchPortfolio(
  options: PortfolioFilterOptions = {},
): Promise<PortfolioItem[]> {
  const { category, sort = 'latest' } = options

  const conditions: string[] = ['_type == "portfolio"']

  if (category && category !== 'All') {
    conditions.push(`lower(category) == "${category.toLowerCase()}"`)
  }

  const whereClause = conditions.join(' && ')

  // Define sorting logic
  let orderClause = '| order(_createdAt desc)'
  if (sort === 'oldest') orderClause = '| order(_createdAt asc)'
  if (sort === 'title') orderClause = '| order(title asc)'

  const query = `*[${whereClause}] ${orderClause} {
    _id,
    title,
    category,
    "image": image.asset->url,
    link,
    _createdAt
  }`

  return await client.fetch<PortfolioItem[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}

export async function fetchPosts(): Promise<PostItem[]> {
  const query = `*[_type == "post"] | order(date desc) {
    ${POST_FIELDS}
  }`
  return await client.fetch<PostItem[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}

export async function fetchLatestPosts(limit: number = 5): Promise<PostItem[]> {
  const query = `*[_type == "post"] | order(date desc)[0...$limit] {
    ${POST_FIELDS}
  }`
  return await client.fetch<PostItem[]>(
    query,
    { limit },
    { next: { revalidate: 0 } },
  )
}

export async function fetchFeaturedPosts(): Promise<PostItem[]> {
  const query = `*[_type == "post" && isFeatured == true] | order(date desc) {
    ${POST_FIELDS}
  }`
  return await client.fetch<PostItem[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}

export async function fetchFilteredPosts(
  options: PostFilterOptions = {},
): Promise<PostItem[]> {
  const { category, tag, isFeatured, isLatest, limit = 10 } = options

  const conditions: string[] = ['_type == "post"']

  if (category) conditions.push(`category == "${category}"`)
  if (tag) conditions.push(`"${tag}" in tags`)
  if (isFeatured !== undefined) conditions.push(`isFeatured == ${isFeatured}`)
  if (isLatest !== undefined) conditions.push(`isLatest == ${isLatest}`)

  const whereClause = conditions.join(' && ')
  const query = `*[${whereClause}] | order(date desc)[0...$limit] {
    ${POST_FIELDS}
  }`

  return await client.fetch<PostItem[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}

export async function fetchServices(): Promise<ServiceItem[]> {
  const query = `*[_type == "service"] {
    _id,
    title,
    icon,
    description
  }`
  return await client.fetch<ServiceItem[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}

export async function fetchStats(): Promise<StatItem[]> {
  const query = `*[_type == "stat"] {
    _id,
    value,
    label
  }`
  return await client.fetch<StatItem[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}

export async function fetchTeam(): Promise<TeamMember[]> {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    "imageUrl": image.asset->url,
    order
  }`
  return await client.fetch<TeamMember[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}

export async function fetchTestimonials(): Promise<TestimonialItem[]> {
  const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    title,
    "imageUrl": image.asset->url,
    quote
  }`
  return await client.fetch<TestimonialItem[]>(
    query,
    {},
    { next: { revalidate: 0 } },
  )
}
