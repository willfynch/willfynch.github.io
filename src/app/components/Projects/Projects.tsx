'use client'
//import { projects } from '../../../data/projects'
import PostCard from '../utilities/ProjectCard/ProjectCard'
import styles from './Projects.module.scss'
import { ProjectCardContent } from '../utilities/ProjectCard/ProjectCardContent.model'
import { useEffect, useState } from 'react';
import project_placeholder from '../../../../public/project_placeholder.svg'
import Image from 'next/image'
import { AiOutlineClose } from "react-icons/ai";
import { useScrollLock } from '@/hooks/scrollLock'
import { ProjectModel } from '@/models/project.model'
import Markdown from "markdown-to-jsx";

export default function Projects({ projects }: { projects: ProjectModel[] }) {

    const allProjects: ProjectModel[] = projects;

    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectModel>();
    const [isPopupHeaderResized, setIsPopupHeaderResized] = useState(false);

    const { lockScroll, unlockScroll } = useScrollLock();

    useEffect(()=>{
        const id = localStorage.getItem('selectedProject')
        if(id !== 'none' && id !== null){
            openPopUp(~~id)
        }
    }, [])

    function openPopUp(id: number) {
        const project = allProjects.filter(project => project.id === id)[0]
        setSelectedProject(project);
        console.log('selected project ', project)
        localStorage.setItem('selectedProject', id.toString())
        setPopupOpen(true);
        lockScroll();
    }

    function closePopUp() {
        setPopupOpen(false);
        unlockScroll();
        localStorage.setItem('selectedProject', 'none')
    }

    function detectClickOutsideOfPopup(event: any) {
        if (event.target.id === 'PROJECT_POPUP') {
            closePopUp()
        }
    }

    function handlePopupScroll() {
        let position = document.getElementById('PROJECT_POPUP_BODY')?.scrollTop;
        if (position && position > 100) {
            setIsPopupHeaderResized(true)
        } else {
            setIsPopupHeaderResized(false)
        }
    }

    return (
        <section id='projects' className={styles.prjSection + ` ` + `relative mt-16 lg:mt-40 px-10 sm:px-40 lg:px-72`}>
            <h2 className='text-lg font-bold'>PROJECTS</h2>

            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {
                    allProjects.map(project =>
                        <PostCard key={project.id} openPopUp={openPopUp} content={project}></PostCard>
                    )
                }

            </div>

            { /**backdrop-blur-[3px] */
                popupOpen && selectedProject &&
                <div onClick={detectClickOutsideOfPopup} id="PROJECT_POPUP" className='overflow-x-hidden top-0 left-0 fixed bg-black/50 w-screen h-screen z-50'>
                    <div onScroll={handlePopupScroll} id='PROJECT_POPUP_BODY' className='absolute overflow-x-hidden rounded-md w-full h-full xs:w-5/6 xs:h-5/6  bg-white -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2'>
                        <div id='PROJECT_POPUP_TITLE' className={'sticky z-50 top-0 overflow-y-hidden ' + (isPopupHeaderResized ? '' : '')}>
                            <div className='rounded-t-md absolute  top-0 left-0 h-full w-full bg-black bg-opacity-40'></div>
                            <div className={'flex flex-col duration-500 w-max text-white absolute top-1/2  -translate-y-1/2 ' + (isPopupHeaderResized ? 'left-[50px] items-start' : 'left-1/2 -translate-x-1/2 items-center')}>
                                <h2 className={(isPopupHeaderResized ? ' text-xl xs:text-2xl ' : ' text-2xl xs:text-4xl ') + ' ' + "font-bold duration-300"}>{selectedProject.title}</h2>
                                <h3 className={(isPopupHeaderResized ? ' text-md xs:text-lg ' : ' text-lg xs:text-xl ') + ' duration-300'}>{selectedProject.subtitle}</h3>
                                <p className="text-sm">{selectedProject.year}</p>
                            </div>

                            <Image className={`rounded-t-md z-0 duration-300 w-full object-cover ` + (isPopupHeaderResized ? 'h-[100px]' : 'h-[200px]')} width={80} height={12} src={selectedProject.image} alt="" />

                            <div className='group'>
                                <button className='hover:bg-slate-800 p-2 duration-300 rounded-xl text-white text-lg absolute right-[20px] top-[20px]' onClick={closePopUp}><AiOutlineClose /></button>
                                <p className='duration-300 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white py-[4px] px-[8px] z-50 rounded-sm absolute right-[20px] top-[60px] text-xs'>Close window</p>
                            </div>
                        </div>
                        <div id="PROJECT_POPUP_CONTENT" className='  px-10 py-4 lg:px-40 lg:py-20'>

                            {/*@ts-ignore*/}
                            <Markdown className={'PROJECT_MARKDOWN'}>
                                {selectedProject.text}
                            </Markdown>


                        </div>

                    </div>


                </div>
            }

        </section>
    )
}