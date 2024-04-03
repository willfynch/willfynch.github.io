import Image from "next/image"
import CoffeCup from "../../utilities/CoffeeCup/CoffeeCup";
export interface SectionHeaderProps {
    title?: string;
    image?:string;
}

export default function SectionHeader(props: SectionHeaderProps){
    return(
        <header className={'relative overflow-hidden w-full h-[150px] md:h-[250px]'}>
            <Image className={'absolute top-0 left-0 object-cover'} fill src={props.image ?? '/images/LAPTOPCOFFEE_banner.webp'} alt={'Bannière représentant un ordinateur portable et une tasse de café disposés côte à côte sur une table dans un jardin par soleil couchant.'}></Image>
            <div className={'bg-black/70 w-full h-full  absolute top-0 left-0 flex flex-col justify-center items-center'}>
                <CoffeCup animated={true} height={50} width={50}></CoffeCup>
                <h1 className="font-bilbo text-my-white text-3xl sm:text-5xl">{props.title ?? "Pas de titre"}</h1>
            </div>
            <div id='RECTANGLE' className='z-30 border-my-white absolute w-[calc(100%-40px)] h-[calc(100%-40px)] border-[1px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

        </header>
    )
}