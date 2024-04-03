import BlogContainer from "@/components/blog/BlogContainer/BlogContainer";
import { IBlogPost } from "@/models/blog-post.model";
import { Metadata, ResolvingMetadata } from "next";
import client from "../../../../tina/__generated__/client";
import { calculateReadingTime } from "@/utilities/calculateReadingTime";
import { formatDate } from "@/utilities/formatDate";
import { slugify } from "@/utilities/slugify";
import { join } from "path";
import fs from 'fs';
import matter from "gray-matter";

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
  const folder = join(process.cwd(), "public/posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts: any[] = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`public/posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
          tags: matterResult.data.tags
      };
  });
  let allTags = posts.map(post => [...post.tags]).flat();
  let tags = Array.from(new Set(allTags));
  return tags.map(tag => ({ slug: tag }))
}

export default async function Tags({ params }: { params: { slug: string } }) {

  const allPostsResponse = await client.queries.postsConnection();
  const blogPosts: any = allPostsResponse.data.postsConnection.edges?.map(post => {
      return {
        author: post?.node?.author,
        authorPic: post?.node?.authorPic,
        tags: post?.node?.tags,
        title: post?.node?.title,
        intro: post?.node?.intro,
        readingTime: calculateReadingTime(post?.node?.title!, 0.2),
        date: formatDate(post?.node?.date),
        content: post?.node?.body,
        image: post?.node?.image,
        slug: slugify(post?.node?.title)
      }
    })
    .filter(post => post.tags?.includes(params.slug))

  return (
    <section className="px-4 sm:px-24 2xl:px-96 mb-10 min-h-[500px]">
      <BlogContainer posts={blogPosts} />
    </section>
  )
}