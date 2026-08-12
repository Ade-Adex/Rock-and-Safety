import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(250),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Feature Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'scheduleDate',
      title: 'Scheduled Publish Date',
      description:
        'Select the date and time when this post should start showing on the website.',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      validation: (Rule) =>
        Rule.required().error('A schedule date is required.'),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (e.g. 7 min read)',
      type: 'string',
      initialValue: '5 min read',
    }),
    defineField({
      name: 'commentCount',
      title: 'Comment Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'views',
      title: 'View Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'shareImage',
          title: 'Social Share Image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    }),
  ],
})
