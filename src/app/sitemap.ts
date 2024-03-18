import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ducafeetducode.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ducafeetducode.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ducafeetducode.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://ducafeetducode.com/realisations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://ducafeetducode.com/foire-aux-questions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ]
}