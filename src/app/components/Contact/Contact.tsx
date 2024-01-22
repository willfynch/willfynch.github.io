import logo_calendly from '../../../../public/calendly_logo.svg'
import Image from 'next/image'
import styles from './Contact.module.scss'
import project_placeholder from '../../../../public/meeting.jpg'

export default function Contact() {


    /**
     * Etapes
     * 
     * 1/ Calendly pour estimer le besoin
     * 2/ Devis en fonction d'une grille / barême à établir
     * 3/ Maquettage basse résolution : dessins si présentiel, sinon ppt : pour un layout de base
     * 4/ Maquettage haute résolution : figma + réunions live + avancement live : la personne est régulièrement tenue au courant de l'avancement
     * 5/ Développement : idem, 
     * /!\ Maquettage et développement peuvent être faits conjointement à mesure que la maquette convient ça part en dev
     * 6/ Livraison : je vous donne tout ce dont vous avez besoin pour prendre votre site en main
     * 7/ SAV : je suis dispo h24 (dans la mesure du raisonnable ;-) ) pour toute question ; les résolutions de bug sont gratuites
     * 8/ Maintenance et mises-à-jour : c'est un service en plus, variable niveau coût en fonction du besoin et estimé dans le barême
     * 
     */



    return (
        <section id='contact' className={styles.contactSection + `mt-20 lg:mt-40 px-10 sm:px-40 lg:px-72 mb-72`}>
            <h2 className='text-lg font-bold'>WORKING TOGETHER</h2>

            <div className={'flex flex-col justify-center items-center' + ' '}>

                <div id='STEP_COMPONENT' className='w-full flex h-[100px] overflow-hidden'>
                    <div id='STEP_NUMBER' className={styles.number + ' ' + 'w-[100px] flex justify-center items-center'} >
                        1
                    </div>
                    <div id='STEP_DESCRIPTION' className={styles.description + ' ' + 'overflow-hidden group relative w-full h-full text-white'}>
                        <div className={styles.description + ' ' + 'h-[100px] absolute z-10 w-full h-full bg-black/60 text-white'}>
                            <div className="flex justify-center items-center flex-col z-10">
                                <h2 className="font-bold text-lg">Title</h2>
                                <p className="text-sm">Description</p>
                            </div>
                        </div>
                        <Image className={styles.description + ` z-0 duration-300 group-hover:scale-110 rounded-md h-[100px] w-full object-cover`} fill src={project_placeholder} alt="" />

                    </div>
                </div>

                <a href="https://calendly.com/fr">
                    <button className='rounded-md overflow-hidden flex flex-cols items-center justify-center w-[200px] h-[50px]'>
                        <Image className={styles.btn2} src={logo_calendly} width={300} height={300} alt="" />

                    </button>
                </a>

            </div>

        </section>
    )
}