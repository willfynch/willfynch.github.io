import { experience } from '../../../data/experience'
import PostCard from '../utilities/ProjectCard/ProjectCard'
import styles from './Experience.module.scss'
//import { PostCardContent } from '../utilities/ProjectCard/ProjectCardContent.model'

export default function Experience() {

    const exps: any[] = experience;

    return (
        <section id='experience' className={styles.expSection + ` ` + `mt-16 lg:mt-32 px-10 sm:px-40 lg:px-72`}>
            <h2 className='text-lg font-bold'>EXPERIENCE</h2>

            <div className='mt-6'>
                {/*
                    exps.map(exp => 
                        <PostCard content={exp}></PostCard>
                    )*/
                }

            </div>

        </section>
    )
}