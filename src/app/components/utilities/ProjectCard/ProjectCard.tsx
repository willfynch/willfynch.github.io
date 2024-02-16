'use client'
import { ProjectCardContent } from "./ProjectCardContent.model";
import project_placeholder from '../../../../../public/project_placeholder.svg'
import Image from 'next/image'
import styles from './ProjectCard.module.scss';
import { useEffect, useContext } from "react";
import { ProjectModel } from "@/models/project.model";
import { LanguageContext } from '@/contexts/LanguageContext';

export default function PostCard({ content, openPopUp }: { content: ProjectModel, openPopUp: any }) {

   //@ts-ignore
   const { lang, setLang } = useContext(LanguageContext)

   return (
      <>
         <div className={`PROJECT_CONTAINER group relative w-full h-[210px] rounded-md overflow-hidden`}>
            <div className="PROJECT_BODY absolute z-10 grid grid-rows-2 w-full h-full bg-black/60 rounded-md text-white">
               <div className="flex justify-center items-center flex-col mt-8">
                  <h2 className="font-bold text-lg">{content.title}</h2>
                  <h3 className="text-sm">{content.subtitle}</h3>
                  <p className="text-sm">{content.year}</p>
               </div>
               <div className="flex justify-center items-center flex-col">
                  <button onClick={(e) => openPopUp(content.id)} className={styles.VIEW_MORE_BUTTON}>{lang==='fr'?'En savoir +':'View more'}</button>
               </div>
            </div>

            <Image className={`z-0 h-[210px] w-[210px] duration-300 group-hover:scale-110 rounded-md w-full object-fill`} fill src={content.image ?? project_placeholder} alt={lang === 'fr' ? `Screenshot du projet ${content.title}` : `${content.title} project screenshot`} />

         </div>


      </>
   )

   {/*




   
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 transition-all hover:shadow-[rgba(50,_50,_105,_0.65)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded w-full my-4 cursor-pointer`}>
         <div className=" p-6 `rounded-[calc(1.5rem-1px)]`">
            <div>
               <span className="text-slate-500 text-md">{content.date ? content.date : ''}</span>
            </div>
            <div>
               <h1 className="cursor-pointer transition-all hover:text-slate-500 text-xl font-semibold">{content.title ? content.title : ''}</h1>
               <h2 className="text-slate-500 text-md">{content.subtitle ? content.subtitle : ''}</h2>
               <p className="mt-4">
                  {content.description ? content.description : ''}
               </p>

               <div className="mt-4 flex flex-wrap gap-y-2">
                  {content.technos?.map(techno => {
                     return (
                        <span className=" text-sm font-medium bg-slate-800 text-slate-100 hover:text-slate-800 hover:bg-slate-200 transition-all cursor-default rounded-full mr-2 p-2">{techno}</span>
                     )
                  })
                  }
               </div>
            </div>

         </div>


               </div>*/}

}
// bg-gradient-to-tl from-slate-300/50 to-slate-100/50 