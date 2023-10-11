import { experience } from '../../../data/experience'
import PostCard from '../utilities/PostCard/PostCard'
import styles from './Experience.module.scss'
import { PostCardContent } from '../utilities/PostCard/PostCardContent.model'

export default function Experience() {

    const exps: PostCardContent[] = experience;

    return (
        <section id='experience' className={styles.expSection + ` ` + `mt-16 lg:mt-32 px-10`}>
            <h2 className='text-lg font-bold'>EXPERIENCE</h2>

            <div className='mt-6'>
                {
                    exps.map(exp => 
                        <PostCard content={exp}></PostCard>
                    )
                }

            </div>

        </section>
    )
}