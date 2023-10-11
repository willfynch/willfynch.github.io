import { projects } from '../../../data/projects'
import PostCard from '../utilities/PostCard/PostCard'
import styles from './Projects.module.scss'
import { PostCardContent } from '../utilities/PostCard/PostCardContent.model'

export default function Projects() {

    const allProjects: PostCardContent[] = projects;

    return (
        <section id='projects' className={styles.prjSection + ` ` + `mt-16 lg:mt-32 px-10`}>
            <h2 className='text-lg font-bold'>PROJECTS</h2>

            <div className='mt-6'>
                {
                    allProjects.map(project => 
                        <PostCard content={project}></PostCard>
                    )
                }

            </div>

        </section>
    )
}