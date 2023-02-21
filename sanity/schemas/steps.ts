export const stepsSchema = {
  name: 'steps',
  type: 'document',
  title: 'Steps',
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
