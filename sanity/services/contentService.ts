import { client } from '@/sanity/lib/client'
import { FaqItem } from '@/app/types/faq'
import { PortfolioItem } from '@/app/types/portfolio'
import { PostItem } from '@/app/types/post'
import { ServiceItem } from '@/app/types/service'
import { StatItem } from '@/app/types/stat'
import { TeamMember } from '@/app/types/team'
import { TestimonialItem } from '@/app/types/testimonial'

export async function fetchFaqs(): Promise<FaqItem[]> {
  const query = `*[_type == "faq"] {
    _id,
    question,
    answer
  }`
  return await client.fetch<FaqItem[]>(
    query,
    {},
    { next: { revalidate: 3600 } },
  )
}

export async function fetchPortfolio(): Promise<PortfolioItem[]> {
  const query = `*[_type == "portfolio"] {
    _id,
    title,
    category,
    "image": image.asset->url,
    link
  }`
  return await client.fetch<PortfolioItem[]>(
    query,
    {},
    { next: { revalidate: 3600 } },
  )
}

export async function fetchPosts(): Promise<PostItem[]> {
  const query = `*[_type == "post"] | order(date desc) {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    date,
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
  }`
  return await client.fetch<PostItem[]>(
    query,
    {},
    { next: { revalidate: 3600 } },
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
    { next: { revalidate: 3600 } },
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
    { next: { revalidate: 3600 } },
  )
}

export async function fetchTeam(): Promise<TeamMember[]> {
  const query = `*[_type == "teamMember"] {
    _id,
    name,
    role,
    "imageUrl": image.asset->url
  }`
  return await client.fetch<TeamMember[]>(
    query,
    {},
    { next: { revalidate: 3600 } },
  )
}

export async function fetchTestimonials(): Promise<TestimonialItem[]> {
  const query = `*[_type == "testimonial"] {
    _id,
    name,
    title,
    quote
  }`
  return await client.fetch<TestimonialItem[]>(
    query,
    {},
    { next: { revalidate: 3600 } },
  )
}
