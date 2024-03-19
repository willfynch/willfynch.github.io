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

export async function generateStaticParams() {
    const posts = await getAllPosts();
    const paths = posts.map((post: any) => ({ slug: post.slug }))
    return {paths, fallback:false}
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post: IBlogPost = await getPost(slug)

    const SOCIALS = [
        { icon: <FaInstagram />, link: 'https://www.instagram.com/willdevweb' },
        { icon: <FaThreads />, link: 'https://www.threads.net/@willdevweb' },

    ]

    return (
        <Fragment>
            <SectionHeader title={post.title ? post.title : 'Ceci n\'est pas un article'} image={post.image ? post.image : undefined} />
            <Navbar />
            {post.title &&
                <section className={"pt-10 px-4 sm:px-20 2xl:px-80 mb-10 min-h-[500px]"}>
                    <ButtonColor link={{ isLink: true, path: '/blog' }} width={100} text={"🡰 RETOUR"} id={"BTN"} />
                    <BlogPost intro={post.intro} nodes={post.nodes ?? []} title={post.title} date={post.date} socials={SOCIALS} author={post.author} authorPic={post.authorPic} readingTime={post.readingTime} tags={post.tags} content={post.content ?? ''} />
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