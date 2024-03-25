import BlogContainer from "@/components/BlogContainer/BlogContainer";
import { IBlogPost } from "@/models/blog-post.model";
import getAllPosts from "@/utilities/getAllPosts"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Du café et du code | Blog",
    description: `Sites vitrine et éditoriaux pour aventuriers modernes. Le blog.`,
    keywords: ['Café','Blog', 'Blog développement web','Blog web', 'Développeur', 'Créateur de sites','Foire aux questions', 'Combien coûte un site web', 'Comment créer un site web', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
    metadataBase: new URL('https://ducafeetducode.com'),
    alternates: {
      canonical: '/'
    },
    openGraph: {
      images: ['/images/opengraph.png']
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/opengraph.png'],
      description: `Sites vitrine et éditoriaux pour aventuriers modernes. Le blog.`,
      title : 'Du café et du code | Blog'
    }
};

export default async function Blog(){

    const posts: IBlogPost[] = await getAllPosts();


    return(
        <section>
            <BlogContainer posts={posts}/>
        </section>
    )
}