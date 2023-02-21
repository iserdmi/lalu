export const mainSchema = {
  name: 'main',
  type: 'document',
  title: 'Main',
  fields: [
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{title: 'Image', name: 'image', type: 'image'}],
    },
    {
      title: 'Promo',
      name: 'promo',
      type: 'object',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'desc',
          type: 'string',
          title: 'Desc',
        },
      ],
    },
    {
      title: 'Services',
      name: 'services',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'desc',
          type: 'string',
          title: 'Desc',
        },
        {
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            {
              title: 'Service',
              name: 'service',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'desc',
                  type: 'string',
                  title: 'Desc',
                },
                {
                  name: 'text',
                  type: 'text',
                  title: 'Text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Works',
      name: 'works',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'desc',
          type: 'string',
          title: 'Desc',
        },
        {
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            {
              title: 'Work',
              name: 'work',
              type: 'reference',
              to: [{type: 'work'}],
              options: {
                disableNew: true,
              },
            },
          ],
        },
      ],
    },
    {
      title: 'FAQ',
      name: 'faq',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'desc',
          type: 'string',
          title: 'Desc',
        },
        {
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            {
              title: 'Question',
              name: 'question',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'text',
                  type: 'text',
                  title: 'Text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
