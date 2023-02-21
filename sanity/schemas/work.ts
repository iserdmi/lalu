export const workSchema = {
  name: 'work',
  type: 'document',
  title: 'Work',
  fields: [
    {
      name: 'alias',
      type: 'slug',
      title: 'Alias',
    },
    {
      name: 'megatitle',
      type: 'string',
      title: 'Megatitle',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'attrs',
      type: 'array',
      title: 'Attrs',
      of: [
        {
          title: 'Attr',
          name: 'attr',
          type: 'object',
          fields: [
            {
              name: 'key',
              type: 'string',
              title: 'Key',
            },
            {
              name: 'value',
              type: 'string',
              title: 'Value',
            },
          ],
        },
      ],
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date',
    },
    {
      name: 'desc',
      type: 'string',
      title: 'Desc',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{title: 'Image', name: 'image', type: 'image'}],
    },
    {
      name: 'hiddenGallery',
      type: 'array',
      title: 'Hidden Gallery',
      of: [{title: 'Image', name: 'image', type: 'image'}],
    },
    {
      name: 'text',
      type: 'markdown',
      title: 'Text',
    },
  ],
}
