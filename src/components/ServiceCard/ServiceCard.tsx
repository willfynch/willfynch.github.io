'use client'
import { FaCoffee } from "react-icons/fa";
import WaitingGuy from "../WaitingGuy/WaitingGuy";
import ButtonColor from "../buttons/ButtonColor";
import CoffeCup from "../CoffeeCup/CoffeeCup";
import { Glow, GlowCapture } from '@codaworks/react-glow'
import { Fragment } from "react";

export interface ServiceCardProps {
    title: string;
    options: string[];
    buttonText: string;
    available: boolean;
}

export default function ServiceCard(props: ServiceCardProps) {

    function openLinkInNewTab(path: string): void {
        const newWindow = window.open(path, '_blank', 'noopener, noreferrer');
        if (newWindow) {
            newWindow.opener = null;
        }
    }

    return (
       
                <div className="min-h-[480px] shadow-md hover:shadow-sm duration-300 shadow-my-brown border-[1px] border-my-brown rounded-lg w-full sm:w-[300px] px-4 py-8">
                    <div className="flex justify-center -mb-14">
                        <CoffeCup width={70} animated={false} fill="#593117" />
                    </div>
                    <h3 className="uppercase font-black text-center">{props.title}</h3>

                    {props.available &&
                        <table className="flex flex-col justify-center">
                            {props.options.map((option, index) =>
                                <tr key={index} className={'cursor-default flex px-2 items-center gap-2 hover:brightness-110' + ' ' + (index % 2 !== 0 ? ' bg-my-brown text-my-black ' : 'bg-my-white')}>
                                    <FaCoffee />{option}
                                </tr>
                            )}
                        </table>
                    }
                    {!props.available &&
                        <div className="flex justify-center items-center">
                            <WaitingGuy />
                        </div>
                    }

                    <div className="flex justify-center mt-4 py-4">
                        <ButtonColor onClick={() => openLinkInNewTab('https://calendly.com/willdevweb/talk')} disabled={!(props.available)} blink={true} text={props.buttonText} id={"s"} link={{ isLink: false }} />
                    </div>
                </div>

    )
}