'use client'
import { useContext } from "react";
import { LanguageContext } from '@/contexts/LanguageContext';
import { ArticleModel } from "@/models/article.model";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from './ArticlesContainer.module.scss'

export default function ArticlesContainer({articles}:{articles:ArticleModel[]}) {
    //@ts-ignore
    const { lang, setLang } = useContext(LanguageContext)

    return (
        <section className={styles.contactSection + ` py-16 lg:py-40 px-10 sm:px-20 xl:px-72 lg:px-40 2xl:px-[30rem]`}>
            <div className='relative h-[100px] py-20'>
                <h2 className='w-screen left-1/2 -translate-x-1/2  text-center absolute font-bilbo text-x6demixl md:text-9xl top-1/2 -translate-y-1/2 text-my-black/10'>{lang==='fr'?'Articles de blog':'Blog articles'}</h2>
                <h2 className='w-full text-center absolute text-lg font-bold top-1/2 -translate-y-1/2 '>{lang==='fr'?'Articles de blog'.toUpperCase():'Blog articles'.toUpperCase()}</h2>
            </div>
            <div id='ARTICLES_CONTAINER'>
                {articles.filter(article => article.lang === lang)
                .map(article => 
                    <ArticleCard article={article}></ArticleCard>
                )}
            </div>
        </section>

    )
}