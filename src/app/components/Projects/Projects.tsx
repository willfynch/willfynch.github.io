'use client'
import { projects } from '../../../data/projects'
import PostCard from '../utilities/ProjectCard/ProjectCard'
import styles from './Projects.module.scss'
import { ProjectCardContent } from '../utilities/ProjectCard/ProjectCardContent.model'
import { useState } from 'react';
import project_placeholder from '../../../../public/project_placeholder.svg'
import Image from 'next/image'
import { AiOutlineClose } from "react-icons/ai";

export default function Projects() {

    const allProjects: ProjectCardContent[] = projects;

    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectCardContent>();

    function openPopUp(id: number) {
        const project = allProjects.filter(project => project.id === id)[0]
        setSelectedProject(project);
        setPopupOpen(true);
    }

    function closePopUp() {
        setPopupOpen(false);
    }

    return (
        <section id='projects' className={styles.prjSection + ` ` + `relative mt-16 lg:mt-32 px-10 lg:px-72`}>
            <h2 className='text-lg font-bold'>PROJECTS</h2>

            <div className='mt-6 flex flex-wrap gap-4'>
                {
                    allProjects.map(project =>
                        <PostCard key={project.id} openPopUp={openPopUp} content={project}></PostCard>
                    )
                }

            </div>

            {
                popupOpen && selectedProject &&
                <div id="PROJECT_POPUP" className='overflow-x-hidden top-0 left-0 fixed bg-black/50 w-screen h-screen z-50'>
                    <div id='PROJECT_POPUP_BODY' className='rounded-md w-full h-full xs:w-5/6 lg:w-1/2 xs:h-5/6 absolute bg-white -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2'>
                        <div id='PROJECT_POPUP_TITLE' className='relative'>
                            <div className='rounded-t-md backdrop-blur-[4px] absolute top-0 left-0 h-full w-full bg-black bg-opacity-40'></div>
                            <div className=' w-max text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                <h2 className="font-bold text-4xl">{selectedProject.title}</h2>
                                <h3 className="text-xl">{selectedProject.subtitle}</h3>
                                <p className="text-sm">{selectedProject.year}</p>
                            </div>
                            <Image className={`rounded-t-md z-0 h-[300px] duration-300 w-full object-cover`} src={selectedProject.image ?? project_placeholder} alt="" />
                            <div className='group'>
                                <button className='hover:bg-slate-800 p-2 duration-300 rounded-xl text-white text-lg z-50 absolute right-[20px] top-[20px]' onClick={closePopUp}><AiOutlineClose /></button>
                                <p className='duration-400 group-hover:opacity-100 opacity-0 bg-black bg-opacity-50 text-white py-[4px] px-[8px] z-50 rounded-sm  absolute right-[20px] top-[50px] text-xs'>Close window</p>
                            </div>
                        </div>

                        blabla id : {selectedProject.id}


                    </div>
                </div>
            }

        </section>
    )
}