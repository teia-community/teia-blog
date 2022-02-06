import { defineSchema } from '@tinacms/cli'

export default defineSchema({
  collections: [
    {
      label: 'Blog',
      name: 'posts',
      path: 'data/blog',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Date',
          name: 'date',
        },
        {
          type: 'string',
          label: 'Last Modified',
          name: 'lastmod',
        },
        {
          type: 'string',
          label: 'Draft',
          name: 'draft',
        },
        {
          type: 'string',
          label: 'Summary',
          name: 'summary',
        },
        {
          type: 'string',
          label: 'Authors',
          name: 'authors',
        },
        {
          type: 'string',
          label: 'Bibliography',
          name: 'bibliography',
        },
        {
          type: 'string',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
    {
      label: 'Test Blog',
      name: 'blogposts',
      path: 'content/posts',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
  ],
})
