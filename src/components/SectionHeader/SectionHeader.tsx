import Image from "next/image"
export interface SectionHeaderProps {

}

export default function SectionHeader(props: SectionHeaderProps){
    return(
        <header className={''}>
            <Image className={'object-cover'} width={1800} height={200} src={'/images/LAPTOPCOFFEE_banner.png'} alt={''}></Image>

        </header>
    )
}