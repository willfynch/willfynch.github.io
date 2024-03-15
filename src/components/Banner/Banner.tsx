
import Image from "next/image";
import parse from 'html-react-parser'
import ButtonTransparent from "../buttons/ButtonTransparent";
import Link from "next/link";

export interface BannerProps {
    text: string;
    image: string;
    isCallToAction: boolean;
    opacity: string;
    callToAction?: {
        path: string;
        text: string;
    }
}

export default function Banner(props: BannerProps) {

    const OPACITY = props.opacity;

    return (
        <div className={`h-[600px] md:h-[400px] w-screen overflow-y-hidden relative flex justify-center items-center`}>
            <Image className="absolute object-cover" fill src={props.image} alt={""}></Image>
            <div className={`bg-black opacity-${OPACITY} w-full h-full absolute`}></div>
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