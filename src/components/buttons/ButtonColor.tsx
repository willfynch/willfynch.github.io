import Link from "next/link";
import { Fragment } from "react";

export interface ButtonColorProps {
    text: string;
    id: string;
    width?: number;
    blink?:boolean;
    link?: {
        isLink: boolean;
        path?: string;
        blank?: boolean;
    };
    onClick?: () => void;
}

export default function ButtonColor(props: ButtonColorProps) {

    const isBlinkClass = ' bg-my-black hover:bg-my-white text-my-white hover:text-my-black '

    return (
        <Fragment>
        {
            props.link?.isLink && 
                <Link role="link" target={props.link.blank ?"_blank":""} className={`w-[${props.width ?? 200}px] text-my-black rounded-sm shadow-md uppercase  p-2 font-semibold ${props.blink ? isBlinkClass : ' bg-my-white '}`} href={props.link.path??"/"}>
                    <span>{props.text}</span>
                </Link>
        }
        {
            props.link?.isLink===false && 
                <button onClick={props.onClick} className={`w-[${props.width ?? 200}px] shadow-md text-my-black rounded-sm uppercase p-2 font-semibold ${props.blink ? isBlinkClass : ' bg-my-white '}`}>
                    {props.text}
                </button>
        }
        </Fragment>


    )
}