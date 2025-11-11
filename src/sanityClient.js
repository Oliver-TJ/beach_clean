import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2025-11-11',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}