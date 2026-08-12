// sanity/schemas/spotlight.ts

import { defineField, defineType } from 'sanity'

export const spotlightType = defineType({
  name: 'spotlight',
  title: 'Spotlight Content',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Author Spotlight', value: 'Author' },
          { title: 'Business Spotlight', value: 'Business' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tag',
      title: 'Tag Line',
      type: 'string',
      options: {
        list: [
          { title: 'AUTHOR SPOTLIGHT', value: 'AUTHOR SPOTLIGHT' },
          { title: 'BUSINESS SPOTLIGHT', value: 'BUSINESS SPOTLIGHT' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'titlePrefix',
      title: 'Title Prefix',
      type: 'string',
      options: {
        list: [
          { title: 'We Spotlight', value: 'We Spotlight' },
          { title: "Let's Put Your", value: "Let's Put Your" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'titleHighlight',
      title: 'Title Highlighted Text',
      type: 'string',
      options: {
        list: [
          { title: 'Great Authors', value: 'Great Authors' },
          {
            title: 'Business In The Spotlight',
            value: 'Business In The Spotlight',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      options: {
        list: [
          {
            title: 'Author Default',
            value:
              'Get your book and brand in front of a wider audience. We create a professional spotlight feature that builds your visibility and drives readers to you.',
          },
          {
            title: 'Business Default',
            value:
              'We feature your business to a wider audience, build your credibility, and help you attract more customers.',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      options: {
        list: [
          {
            title: 'Book Your Author Spotlight',
            value: 'Book Your Author Spotlight',
          },
          {
            title: 'Book Your Business Spotlight',
            value: 'Book Your Business Spotlight',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heroHighlights',
      title: 'Hero Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Select Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Eye (FiEye)', value: 'FiEye' },
                  { title: 'Award (FiAward)', value: 'FiAward' },
                  {
                    title: 'Trending Up (FiTrendingUp)',
                    value: 'FiTrendingUp',
                  },
                  { title: 'Users (FiUsers)', value: 'FiUsers' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              options: {
                list: [
                  { title: 'More Visibility', value: 'More Visibility' },
                  { title: 'Build Credibility', value: 'Build Credibility' },
                  { title: 'Grow Your Audience', value: 'Grow Your Audience' },
                  {
                    title: 'Reach More Customers',
                    value: 'Reach More Customers',
                  },
                  { title: 'Grow Your Business', value: 'Grow Your Business' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'pricingFeatures',
      title: 'Pricing Features',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {
                title: 'Professional author feature',
                value: 'Professional author feature',
              },
              {
                title: 'Book & author profile',
                value: 'Book & author profile',
              },
              { title: 'Book cover display', value: 'Book cover display' },
              {
                title: 'Professional business feature',
                value: 'Professional business feature',
              },
              {
                title: 'Business profile & story',
                value: 'Business profile & story',
              },
              {
                title: 'Social media promotion',
                value: 'Social media promotion',
              },
              { title: 'Permanent blog post', value: 'Permanent blog post' },
              {
                title: 'Shareable spotlight link',
                value: 'Shareable spotlight link',
              },
              {
                title: 'SEO-friendly exposure',
                value: 'SEO-friendly exposure',
              },
            ],
          },
        },
      ],
    }),

    defineField({
      name: 'steps',
      title: 'How It Works Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'step',
              title: 'Step Number',
              type: 'string',
              options: {
                list: ['1', '2', '3', '4', '5'],
              },
            }),
            defineField({
              name: 'icon',
              title: 'Select Icon',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Credit Card (FiCreditCard)',
                    value: 'FiCreditCard',
                  },
                  { title: 'File Text (FiFileText)', value: 'FiFileText' },
                  { title: 'Edit 3 (FiEdit3)', value: 'FiEdit3' },
                  { title: 'Search (FiSearch)', value: 'FiSearch' },
                  { title: 'Send (FiSend)', value: 'FiSend' },
                ],
              },
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              options: {
                list: [
                  { title: 'Book & Pay', value: 'Book & Pay' },
                  { title: 'Submit Details', value: 'Submit Details' },
                  { title: 'We Create', value: 'We Create' },
                  { title: 'Review & Approve', value: 'Review & Approve' },
                  {
                    title: 'We Publish & Promote',
                    value: 'We Publish & Promote',
                  },
                ],
              },
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              options: {
                list: [
                  {
                    title: 'Step 1 Default',
                    value: 'Choose your region and make payment securely.',
                  },
                  {
                    title: 'Step 2 (Author)',
                    value:
                      'Fill the author spotlight form and submit your information.',
                  },
                  {
                    title: 'Step 2 (Business)',
                    value:
                      'Fill the business spotlight form and submit your information.',
                  },
                  {
                    title: 'Step 3 Default',
                    value: 'We craft a professional spotlight feature for you.',
                  },
                  {
                    title: 'Step 4 Default',
                    value: 'Review your spotlight and request any changes.',
                  },
                  {
                    title: 'Step 5 Default',
                    value:
                      'Your spotlight goes live and we promote it to our audience.',
                  },
                ],
              },
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      options: {
        list: [
          {
            title: 'Ready to Get Spotlighted?',
            value: 'Ready to Get Spotlighted?',
          },
          { title: 'Ready To Get Noticed?', value: 'Ready To Get Noticed?' },
        ],
      },
    }),

    defineField({
      name: 'bannerSubtitle',
      title: 'Banner Subtitle',
      type: 'string',
      options: {
        list: [
          {
            title: 'Author Banner Subtitle',
            value:
              "Let's showcase your book and get it in front of the right readers.",
          },
          {
            title: 'Business Banner Subtitle',
            value: 'Give your business the visibility it deserves.',
          },
        ],
      },
    }),

    defineField({
      name: 'bannerCta',
      title: 'Banner CTA Text',
      type: 'string',
      options: {
        list: [
          {
            title: 'Book Your Spotlight Now →',
            value: 'Book Your Spotlight Now →',
          },
          {
            title: 'Book Your Business Spotlight Now →',
            value: 'Book Your Business Spotlight Now →',
          },
        ],
      },
    }),
  ],
})