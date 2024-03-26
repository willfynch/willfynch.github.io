import BlogContainer from "@/components/BlogContainer/BlogContainer";
import { IBlogPost } from "@/models/blog-post.model";
import getAllPosts from "@/utilities/getAllPosts"
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data


  return {
    title: 'Blog / ' + slug,
    description: 'Articles de blog pour ' + slug,
    keywords: [slug, 'Sophrologie', 'Café', 'Développeur', 'Créateur de sites', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
    openGraph: {
      images: '/images/opengraph.png',
    },
    metadataBase: new URL('https://ducafeetducode.com'),
    alternates: {
      canonical: 'https://ducafeetducode.com/tags' + slug
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/opengraph.png'],
      description: 'Articles de blog pour ' + slug,
      title: 'Blog / ' + slug,
    }
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  let allTags = posts.map(post => [...post.tags]).flat();
  let  tags = Array.from(new Set(allTags));
  return tags.map(tag => ({slug: tag}))
}

export default async function Tags({ params }: { params: { slug: string } }) {

  const posts: IBlogPost[] = await getAllPosts(params.slug);


  return (
    <section className="px-4 sm:px-24 2xl:px-96 mb-10 min-h-[500px]">
      <BlogContainer posts={posts} />
    </section>
  )
}