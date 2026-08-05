import { type SchemaTypeDefinition } from 'sanity'
import { faqType } from './faq'
import { portfolioType } from './portfolio'
import { postType } from './post'
import { serviceType } from './service'
import { statType } from './stat'
import { teamType } from './team'
import { testimonialType } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    faqType,
    portfolioType,
    postType,
    serviceType,
    statType,
    teamType,
    testimonialType,
  ],
}
