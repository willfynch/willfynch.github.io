import { HamburgerModel } from '@/models/hamburger.model';
import styles from './Hamburger.module.scss'
export default function Hamburger({ props }: { props: HamburgerModel }) {
    return (
        <button data-state={props.isOpen ? 'opened' : 'closed'} onClick={props.onOpen} id='hamburger' className={styles.hamburgerBtn + " " + " duration-500 rounded-full fixed justify-self-center self-center h-[50px] w-[50px] "} aria-controls="primary-navigation" aria-expanded={props.isOpen}>
            <svg id='hamburgerSvg' fill={props.fill} className={`styles.${props.svgClasses}`} viewBox="0 0 100 100" width={50}>
                <line className={`styles.${props.lineOneClasses}`} x1={90} x2={10} y1={40} y2={40} strokeDasharray={80} strokeDashoffset={0} stroke={props.fill} strokeWidth={4} strokeLinecap="round"></line>
                <line className={props.lineTwoClasses} x1={90} x2={10} y1={60} y2={60} strokeDasharray={80} strokeDashoffset={0} stroke={props.fill} strokeWidth={4} strokeLinecap="round"></line>
            </svg>
        </button>


    )
}