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

    // Tag Field
    defineField({
      name: 'tagPreset',
      title: 'Tag Line Preset',
      type: 'string',
      options: {
        list: [
          { title: 'AUTHOR SPOTLIGHT', value: 'AUTHOR SPOTLIGHT' },
          { title: 'BUSINESS SPOTLIGHT', value: 'BUSINESS SPOTLIGHT' },
          { title: 'Other (Write Custom)', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'tagCustom',
      title: 'Custom Tag Line',
      type: 'string',
      hidden: ({ parent }) => parent?.tagPreset !== 'OTHER',
    }),

    // Title Prefix Field
    defineField({
      name: 'titlePrefixPreset',
      title: 'Title Prefix Preset',
      type: 'string',
      options: {
        list: [
          { title: 'We Spotlight', value: 'We Spotlight' },
          { title: "Let's Put Your", value: "Let's Put Your" },
          { title: 'Other (Write Custom)', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'titlePrefixCustom',
      title: 'Custom Title Prefix',
      type: 'string',
      hidden: ({ parent }) => parent?.titlePrefixPreset !== 'OTHER',
    }),

    // Title Highlight Field
    defineField({
      name: 'titleHighlightPreset',
      title: 'Title Highlighted Text Preset',
      type: 'string',
      options: {
        list: [
          { title: 'Great Authors', value: 'Great Authors' },
          {
            title: 'Business In The Spotlight',
            value: 'Business In The Spotlight',
          },
          { title: 'Other (Write Custom)', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'titleHighlightCustom',
      title: 'Custom Title Highlighted Text',
      type: 'string',
      hidden: ({ parent }) => parent?.titleHighlightPreset !== 'OTHER',
    }),

    // Description Field
    defineField({
      name: 'descriptionPreset',
      title: 'Description Preset',
      type: 'string',
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
          { title: 'Other (Write Custom)', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'descriptionCustom',
      title: 'Custom Description',
      type: 'text',
      rows: 3,
      hidden: ({ parent }) => parent?.descriptionPreset !== 'OTHER',
    }),

    // CTA Button Text Field
    defineField({
      name: 'ctaButtonTextPreset',
      title: 'CTA Button Text Preset',
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
          { title: 'Other (Write Custom)', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'ctaButtonTextCustom',
      title: 'Custom CTA Button Text',
      type: 'string',
      hidden: ({ parent }) => parent?.ctaButtonTextPreset !== 'OTHER',
    }),

    defineField({
      name: 'ctaButtonUrl',
      title: 'CTA Button Link (URL)',
      type: 'url',
      description:
        'Link for the Hero and Pricing CTA buttons (e.g., Selar checkout link)',
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // Hero Highlights Array
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
              name: 'labelPreset',
              title: 'Label Preset',
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
                  { title: 'Other (Write Custom)', value: 'OTHER' },
                ],
              },
            }),
            defineField({
              name: 'labelCustom',
              title: 'Custom Label',
              type: 'string',
              hidden: ({ parent }) => parent?.labelPreset !== 'OTHER',
            }),
          ],
        },
      ],
    }),

    // Pricing Features Array
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

    // How It Works Steps
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
              name: 'titlePreset',
              title: 'Title Preset',
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
                  { title: 'Other (Write Custom)', value: 'OTHER' },
                ],
              },
            }),
            defineField({
              name: 'titleCustom',
              title: 'Custom Title',
              type: 'string',
              hidden: ({ parent }) => parent?.titlePreset !== 'OTHER',
            }),
            defineField({
              name: 'descriptionPreset',
              title: 'Description Preset',
              type: 'string',
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
                  { title: 'Other (Write Custom)', value: 'OTHER' },
                ],
              },
            }),
            defineField({
              name: 'descriptionCustom',
              title: 'Custom Description',
              type: 'text',
              rows: 2,
              hidden: ({ parent }) => parent?.descriptionPreset !== 'OTHER',
            }),
          ],
        },
      ],
    }),

    // Banner Fields
    defineField({
      name: 'bannerTitlePreset',
      title: 'Banner Title Preset',
      type: 'string',
      options: {
        list: [
          {
            title: 'Ready to Get Spotlighted?',
            value: 'Ready to Get Spotlighted?',
          },
          { title: 'Ready To Get Noticed?', value: 'Ready To Get Noticed?' },
          { title: 'Other (Write Custom)', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'bannerTitleCustom',
      title: 'Custom Banner Title',
      type: 'string',
      hidden: ({ parent }) => parent?.bannerTitlePreset !== 'OTHER',
    }),

    defineField({
      name: 'bannerSubtitlePreset',
      title: 'Banner Subtitle Preset',
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
          { title: 'Other (Write Custom)', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'bannerSubtitleCustom',
      title: 'Custom Banner Subtitle',
      type: 'string',
      hidden: ({ parent }) => parent?.bannerSubtitlePreset !== 'OTHER',
    }),

    defineField({
      name: 'bannerCtaPreset',
      title: 'Banner CTA Text Preset',
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
          { title: 'Other (Write Custom)', value: 'OTHER' },
        ],
      },
    }),
    defineField({
      name: 'bannerCtaCustom',
      title: 'Custom Banner CTA Text',
      type: 'string',
      hidden: ({ parent }) => parent?.bannerCtaPreset !== 'OTHER',
    }),

    defineField({
      name: 'bannerCtaUrl',
      title: 'Banner CTA Link (URL)',
      type: 'url',
      description: 'Link for the Bottom Banner CTA button',
    }),
  ],
})