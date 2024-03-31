import getPost from "@/utilities/getPost";
import getAllPosts from "@/utilities/getAllPosts";
import ButtonColor from "@/components/buttons/ButtonColor";
import BlogPost from "@/components/BlogPost/BlogPost";
import { IBlogPost } from "@/models/blog-post.model";
import OtherPosts from "@/components/OtherPosts/OtherPosts";
import { Fragment } from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Navbar from "@/components/Navbar/Navbar";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import NotFoundImage from "@/components/NotFoundImage/NotFoundImage";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import client from "../../../../tina/__generated__/client";
import { slugify } from "@/utilities/slugify";
import { formatDate } from "@/utilities/formatDate";
import { calculateReadingTime } from "@/utilities/calculateReadingTime";
import { FaLinkedin } from "react-icons/fa";


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
    const post: IBlogPost = await getPost(slug)

    return {
      title: post.title,
      description: post.intro,
      keywords: [post.title, ...post.tags, 'Sophrologie', 'Café', 'Développeur', 'Créateur de sites', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
      openGraph: {
        images: post.image,
      },
      metadataBase: new URL('https://ducafeetducode.com'),
      alternates: {
        canonical: '/'
      },
      twitter: {
        card: 'summary_large_image',
        images: [post.image],
        description: post.intro,
        title : post.title
      }
    }
  }

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post: IBlogPost = await getPost(slug)

    const allPostsResponse = await client.queries.postsConnection();
    const blogPost:any = allPostsResponse.data.postsConnection.edges?.filter(post => slugify(post?.node?.title) === slug)
      .map(post => {
        return {
          author: post?.node?.author,
          authorPic: post?.node?.authorPic,
          tags: post?.node?.tags,
          title: post?.node?.title,
          intro: post?.node?.intro,
          readingTime: calculateReadingTime(post?.node?.body.toString(), 0.2),
          date: formatDate(post?.node?.date),
          content: post?.node?.body,
          image: post?.node?.image
        }
      })[0]    

    const SOCIALS = [
        { icon: <FaInstagram />, link: process.env.INSTAGRAM ?? '' },
        { icon: <FaThreads />, link: process.env.THREADS ?? '' },
        {icon: <FaLinkedin/>, link: process.env.LINKEDIN ?? ''}
    ]

    return (
        <Fragment>
            <SectionHeader title={post.title ? post.title : 'Ceci n\'est pas un article'} image={post.image ? post.image : undefined} />
            <Navbar />
            {post.title &&
                <section className={"pt-10 px-4 sm:px-20 2xl:px-80 mb-10 min-h-[500px]"}>
                    <ButtonColor link={{ isLink: true, path: '/blog' }} width={100} text={"🡰 RETOUR"} id={"BTN"} />
                    <BlogPost 
                      intro={blogPost.intro} 
                      nodes={post.nodes ?? []} 
                      title={blogPost.title} 
                      date={blogPost.date} 
                      socials={SOCIALS} 
                      author={blogPost.author} 
                      authorPic={blogPost.authorPic} 
                      readingTime={blogPost.readingTime} 
                      tags={blogPost.tags} 
                      content={blogPost.content} />
                    <OtherPosts />
                </section>
            }
            {!post.title &&
                <section className="w-full flex flex-col justify-center items-center my-14">
                    <ButtonColor link={{ isLink: true, path: '/blog' }} width={100} text={"🡰 RETOUR AU BLOG"} id={"BTN"} />
                    <h2 className=" text-center text-h4 sm:text-h3 mb-4">
                        <span className="">Il n'y a rien ici, noble internaute.</span>
                        <br />
                        <span className="mr-2">Mais tu peux
                            toujours</span>
                        <Link className="link" href={"/foire-aux-questions"}>consulter la F.A.Q.</Link>
                    </h2>
                    <NotFoundImage />
                </section>
            }
        </Fragment>


    )
}