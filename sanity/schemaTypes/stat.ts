import { defineField, defineType } from 'sanity'

export const statType = defineType({
  name: 'stat',
  title: 'Stat',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value (e.g., 150+)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
