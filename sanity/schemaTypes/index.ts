import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './category'
import { faqType } from './faq'
import { portfolioType } from './portfolio'
import { postType } from './post'
import { serviceType } from './service'
import { statType } from './stat'
import { teamType } from './team'
import { testimonialType } from './testimonial'
import { spotlightType } from './spotlight'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    faqType,
    portfolioType,
    postType,
    serviceType,
    statType,
    teamType,
    testimonialType,
    spotlightType,
  ],
}
