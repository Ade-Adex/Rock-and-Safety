import { PortableTextBlock } from '@portabletext/types'

export interface PostAuthor {
  _id: string
  name: string
  role: string
  imageUrl?: string
}

export interface RelatedPostSummary {
  _id: string
  title: string
  description: string
  imageUrl: string
  date: string
}

export interface TocItem {
  id: string
  text: string
  level: 'h1' | 'h2' | 'h3' | 'h4'
}

export interface PostItem {
  _id: string
  title: string
  description: string
  imageUrl: string
  date: string
  category: string
  author?: PostAuthor
  readingTime?: string
  tags?: string[]
  body?: PortableTextBlock[]
  tableOfContents?: TocItem[]
  relatedArticles?: RelatedPostSummary[]
}
