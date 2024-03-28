import { IProject } from '@/models/project.model';
import getAllProjects from '@/utilities/getAllProjects'
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const projects: IProject[] = await getAllProjects();

  let sitemap:MetadataRoute.Sitemap = [
    {
      url: 'https://ducafeetducode.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ducafeetducode.com/a-propos',
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
    },
    {
      url: 'https://ducafeetducode.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ]

  projects.forEach(project => {
    const siteMapItem = {
      url: 'https://ducafeetducode.com/realisations/' + project.slug,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    }
    //@ts-ignore
    sitemap.push(siteMapItem)
  })

  return sitemap
}