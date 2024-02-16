'use client'
import PostCard from '../utilities/ProjectCard/ProjectCard'
import styles from './Projects.module.scss'
import { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import Image from 'next/image'
import { AiOutlineClose } from "react-icons/ai";
import { useScrollLock } from '@/hooks/scrollLock'
import { ProjectModel } from '@/models/project.model'
import Markdown from "markdown-to-jsx";

export default function Projects({ projects }: { projects: ProjectModel[] }) {

    const allProjects: ProjectModel[] = projects;

    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectModel>();
    const [isPopupHeaderResized, setIsPopupHeaderResized] = useState(true);

    const { lockScroll, unlockScroll } = useScrollLock();

    //@ts-ignore
    const {lang} = useContext(LanguageContext)

    useEffect(()=>{
        const id = localStorage.getItem('selectedProject')
        if(id !== 'none' && id !== null){
            openPopUp(~~id)
        }
    }, [])

    function openPopUp(id: number, slug?: string) {
        const project = allProjects.filter(project => project.id === id)[0]
        setSelectedProject(project);
        localStorage.setItem('selectedProject', id.toString())
        setPopupOpen(true);
        lockScroll();
    }

    function closePopUp() {
        localStorage.setItem('selectedProject', 'none')
        const popupBody = document.getElementById('PROJECT_POPUP_BODY');
        const popupBg = document.getElementById('PROJECT_POPUP')
        if(popupBody && popupBg){
            
            popupBody.style.transitionDuration = '.5s'
            popupBody.style.translate = "0px 1000px";
            popupBg.style.transitionDelay = '.3s'
            popupBg.style.transitionDuration = '.1s'
            //@ts-ignore
            popupBg.style.opacity = 0;
        }
        setTimeout(() => {
            setPopupOpen(false);
            unlockScroll();
        }, 500);
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
            setIsPopupHeaderResized(true)
        }
    }

    function scrollToSection(id: string){
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id='projects' className={styles.prjSection + ` ` + `bg-my-white relative py-16 lg:py-40 px-10 sm:px-20 xl:px-72 lg:px-40 2xl:px-[30rem]`}>
            
            <div className='relative h-[100px] py-20'>
                <h2 className='w-full text-center absolute font-bilbo text-x6demixl sm:text-x6demixl md:text-9xl top-1/2 -translate-y-1/2  text-my-black/10'>{lang === 'fr' ? 'Projets' : 'Projects'}</h2>
                <h2 className='w-full text-center absolute text-lg font-bold top-1/2 -translate-y-1/2 '>{lang === 'fr' ? 'PROJETS' : 'PROJECTS'}</h2>
            </div>

            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {
                    allProjects.filter(project => project.lang === lang).map(project =>
                        <PostCard key={project.id} openPopUp={openPopUp} content={project}></PostCard>
                    )
                }

            </div>

            <div className='flex justify-center pt-8'>
                <button onClick={e => scrollToSection('contact')} className={styles.btn}>{lang === 'fr' ? 'Travaillons ensemble' : 'Let\'s work together'}</button>
            </div>

            { /**backdrop-blur-[3px] */
                popupOpen && selectedProject &&
                <div aria-hidden={!popupOpen} onClick={detectClickOutsideOfPopup} id="PROJECT_POPUP" className={styles.popupBackground + ' ' + 'overflow-x-hidden top-0 left-0 fixed w-screen h-screen z-50'}>
                    <div id='PROJECT_POPUP_BODY' className={styles.popupBody + ' ' + 'z-[1000] absolute overflow-x-hidden rounded-md w-full h-full bg-white -translate-y-1/2 -translate-x-1/2 left-1/2'}>
                        <div id='PROJECT_POPUP_TITLE' className={'sticky z-50 top-0 overflow-y-hidden '}>
                            <div className='rounded-t-md absolute z-20 top-0 left-0 h-full w-full bg-black bg-opacity-60'></div>
                            <div className={'flex flex-col z-30 duration-500 w-max text-white absolute top-1/2  -translate-y-1/2 ' + (isPopupHeaderResized ? 'left-[50px] items-start' : 'left-1/2 -translate-x-1/2 items-center')}>
                                <h2 className={(isPopupHeaderResized ? ' text-xl xs:text-2xl ' : ' text-2xl xs:text-4xl ') + ' ' + "font-bold duration-300"}>{selectedProject.title}</h2>
                                <h3 className={(isPopupHeaderResized ? ' text-md xs:text-lg ' : ' text-lg xs:text-xl ') + ' duration-300'}>{selectedProject.subtitle}</h3>
                                <p className="text-sm">{selectedProject.year}</p>
                            </div>

                            <Image className={`rounded-t-md z-0 duration-300 w-full object-cover ` + (isPopupHeaderResized ? 'h-[100px]' : 'h-[200px]')} width={80} height={12} src={selectedProject.image} alt={lang==='fr'?`Screenshot du projet ${selectedProject.title}`:`${selectedProject.title} project screenshot`} />

                            <div className='group '>
                                <button className='z-50 hover:bg-slate-800 p-2 duration-300 rounded-xl text-white text-lg absolute right-[20px] top-[20px]' onClick={closePopUp}><AiOutlineClose /></button>
                                <p className='duration-300 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white py-[4px] px-[8px] z-50 rounded-sm absolute right-[20px] top-[60px] text-xs'>Close window</p>
                            </div>
                        </div>
                        <div id="PROJECT_POPUP_CONTENT" className='  px-10 py-4 lg:px-80 2xl:px-[30rem] lg:py-20'>

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