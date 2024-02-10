import { ArticleModel } from "@/models/article.model";

export default function ArticlePage({article}: {article:ArticleModel}) {




    // no use effect here bc server component
    // detection of lang change must be in child components
    // lets try with localstorage data maybe

    return (
        <>

            <main data-aos='fade-left' className='overflow-x-hidden' >
                <div>{article.text}</div>
            </main>
        </>

    )
}