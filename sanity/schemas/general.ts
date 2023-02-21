export const generalSchema = {
  name: 'general',
  type: 'document',
  title: 'General',
  fields: [
    {
      title: 'Contacts',
      name: 'contacts',
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
          name: 'phone',
          type: 'string',
          title: 'Phone',
        },
        {
          name: 'email',
          type: 'string',
          title: 'Email',
        },
        {
          name: 'whatsapp',
          type: 'string',
          title: 'Whatsapp',
        },
        {
          name: 'vk',
          type: 'string',
          title: 'Vk',
        },
        {
          name: 'telegram',
          type: 'string',
          title: 'Telegram',
        },
      ],
    },
    {
      title: 'Footer',
      name: 'footer',
      type: 'object',
      fields: [
        {
          name: 'copyright',
          type: 'string',
          title: 'Copyright',
        },
      ],
    },
    {
      title: 'Work',
      name: 'work',
      type: 'object',
      fields: [
        {
          name: 'back',
          type: 'string',
          title: 'Back',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
      ],
    },
  ],
}
