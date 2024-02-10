'use client'
import project_placeholder from '../../../../../public/project_placeholder.svg'
import Image from 'next/image'
import styles from './ProjectCard.module.scss';
import { useEffect, useContext } from "react";
import { ProjectModel } from "@/models/project.model";
import { LanguageContext } from '@/contexts/LanguageContext';
import { ArticleModel } from '@/models/article.model';
import Link from 'next/link';

export default function ArticleCard({ article }: { article: ArticleModel }) {

   //@ts-ignore
   const { lang, setLang } = useContext(LanguageContext)

   return (
      <>
         <div className={`PROJECT_CONTAINER group relative w-full h-[210px] rounded-md overflow-hidden`}>
            <div className="PROJECT_BODY absolute z-10 grid grid-rows-2 w-full h-full bg-black/60 rounded-md text-white">
               <div className="flex justify-center items-center flex-col mt-8">
                  <h2 className="font-bold text-lg">{article.title}</h2>
                  <h3 className="text-sm">{article.subtitle}</h3>
               </div>
               <Link href={'/blog/' + article.slug} className="flex justify-center items-center flex-col">
                  <button className={styles.VIEW_MORE_BUTTON}>View more</button>
               </Link>
            </div>

            <Image className={`z-0 h-[210px] w-[210px] duration-300 group-hover:scale-110 rounded-md w-full object-fill`} fill src={article.image ?? project_placeholder} alt={lang === 'fr' ? `Screenshot du projet ${article.title}` : `${article.title} project screenshot`} />

         </div>


      </>
   )
}
