// sanity-client.ts
import { type Documents } from '@lalu/sanity/types'
import { createClient } from 'sanity-codegen'

// This type parameter enables the client to be aware of your generated types
//                           👇👇👇
export const sanityClient = createClient<Documents>({
  // Note: these are useful to pull from environment variables
  // (required) your sanity project id
  projectId: 'zwzyw7mo',
  // (required) your sanity dataset
  dataset: 'production',
  // (required) the fetch implementation to use
  fetch,
  //
  // (optional) if true, the client will prefer drafts over the published versions
  previewMode: true,
  // (optional) only required if your dataset is private or if you want to use preview mode
  // token: '...',
  //
  // (optional) enables the usage of `apicdn.sanity.io`. this is recommended
  // if you plan on using this in browsers. don't use this with preview mode
  // see here: https://www.sanity.io/docs/api-cdn
  // useCdn: true,
})
