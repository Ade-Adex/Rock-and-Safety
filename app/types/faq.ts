import { PortableTextBlock } from '@portabletext/types'

export interface FaqItem {
  _id: string
  question: string
  answer: PortableTextBlock[]
}
