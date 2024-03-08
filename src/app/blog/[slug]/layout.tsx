import '../../globals.css'
import nowFont from 'next/font/local';
import { Bilbo_Swash_Caps } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import getPost from '@/utilities/getPost';
import getAllPosts from '@/utilities/getAllPosts';
import { IBlogPost } from '@/models/blog-post.model';

const now = nowFont({
  src: '../../../../public/fonts/Now-Regular.otf'
})

const bilbo = Bilbo_Swash_Caps({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bilbo',
})

export async function generateStaticParams(){
  const posts = await getAllPosts();
  return posts.map((post:any)=>({slug:post.slug}))
}

export default function Layout({ children, params }: { children: any, params:any}) {
  const {slug} = params;
  const post:IBlogPost = getPost(slug)
  return (
      <html lang='fr' >
        <body className={bilbo.variable + ' ' + now.className + ' ' + 'overflow-x-hidden'} >
          <SectionHeader image={post.image} title={post.title}></SectionHeader>
          <Navbar></Navbar>
            {children}
          <Footer></Footer>
        </body>
        
      </html>
  )
}
