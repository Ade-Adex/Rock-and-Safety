import { PortableTextBlock } from '@portabletext/types'

export interface PostAuthor {
  _id: string
  name: string
  role?: string
  imageUrl?: string
  bio?: string
}

export interface SeoMetadata {
  metaTitle?: string
  metaDescription?: string
  shareImage?: string
}

export interface RelatedPostSummary {
  _id: string
  title: string
  slug?: string | { current?: string }
  description?: string
  imageUrl?: string
  date?: string
  category?: string
}

export interface TocItem {
  id: string
  text: string
  level: 'h1' | 'h2' | 'h3' | 'h4'
}

export interface PostItem {
  _id: string
  title: string
  slug?: string | { current?: string }
  description?: string
  imageUrl?: string
  date?: string
  publishedAt?: string
  updatedAt?: string
  isFeatured?: boolean
  isLatest?: boolean
  views?: number
  category?: string
  author?: PostAuthor
  readingTime?: string
  tags?: string[]
  seo?: SeoMetadata
  canonicalUrl?: string
  body?: PortableTextBlock[]
  tableOfContents?: TocItem[]
  relatedArticles?: RelatedPostSummary[]
}

export interface PostFilterOptions {
  category?: string
  tag?: string
  search?: string
  sort?: 'latest' | 'oldest' | 'popular'
  isFeatured?: boolean
  isLatest?: boolean
  limit?: number
}
