
import Image from "next/image";
import parse from 'html-react-parser'
import ButtonTransparent from "../buttons/ButtonTransparent";
import Link from "next/link";
import { useEffect } from "react";

export interface BannerProps {
    text: string;
    image: string;
    isCallToAction: boolean;
    opacity: string;
    callToAction?: {
        path: string;
        text: string;
    }
    height?: string;
}

export default function Banner(props: BannerProps) {

    const OPACITY : any = {
        '20': 'opacity-20',
        '60': 'opacity-60',
        '50'  : 'opacity-50',
        '70' : 'opacity-70'
    };

    const HEIGHT : any= {
        '200' : 'sm:h-[200px]',
        '300' : 'sm:h-[300px]',
        '400' : 'sm:h-[400px]',
        '600' : 'sm:h-[600px]'
    }

    return (
        <div className={`h-[600px] ${props.height ? HEIGHT[props.height] : 'h-[400px]'} w-screen overflow-y-hidden relative flex justify-center items-center`}>
            <Image className="absolute object-cover" fill src={props.image} alt={""}></Image>
            <div className={`bg-black ${OPACITY[props.opacity]} w-full h-full absolute`}></div>
            <div className={"absolute  text-my-white  text-center w-[300px] sm:w-full"}>
                {parse(props.text)}
                {props.isCallToAction &&
                    <div className=" mt-10 w-full flex justify-center">
                        <Link target="_blank" href={props.callToAction?.path ?? ''}>
                            <ButtonTransparent text={props.callToAction?.text ?? ''} id={"button-faq"} />
                        </Link>
                    </div>
                }
            </div>

        </div>
    )

}