import { ArticleModel } from "@/models/article.model";
import getArticle from "@/utilities/getArticle";
import Markdown from "markdown-to-jsx";

export default async function ArticlePage({ params }: { params: { slug: string } }) {


    const article = await getArticle({ params })


    // no use effect here bc server component
    // detection of lang change must be in child components
    // lets try with localstorage data maybe

    return (
        <>

            <main data-aos='fade-left' className='overflow-x-hidden' >
                <div>{
                    article &&
                    <article>
                        test
                        <h1>{article.title}</h1>
                        {/*@ts-ignore*/}
                        <Markdown className={'PROJECT_MARKDOWN'}>
                            {article.text}
                        </Markdown>
                    </article>

                }</div>
            </main>
        </>

    )
}