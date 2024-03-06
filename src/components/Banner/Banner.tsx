
import Image from "next/image";
import parse from 'html-react-parser'

export interface BannerProps {
    text: string;
    image: string;
}

export default function Banner(props: BannerProps){

    return(
        <div className={`h-[300px] w-screen overflow-y-hidden relative flex justify-center items-center`}>
            <Image className="absolute object-cover" fill src={props.image} alt={""}></Image>
            <div className="bg-black/70 w-full h-full absolute"></div>
            <p className={ "absolute text-my-white text-center"}>{parse(props.text)}</p>
        </div>
    )

}