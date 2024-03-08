'use client'
import project_placeholder from '../../../../public/svg/project_placeholder.svg'
import Image from 'next/image'
import styles from './ProjectCard.module.scss';
import { useContext } from "react";
import { ProjectModel } from "@/models/project.model";
import { LanguageContext } from '@/contexts/LanguageContext';

export default function PostCard({ content, openPopUp }: { content: ProjectModel, openPopUp: any }) {

   //@ts-ignore
   const { lang } = useContext(LanguageContext)

   return (
      
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
   )
}