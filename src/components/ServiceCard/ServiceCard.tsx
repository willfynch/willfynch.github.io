import { FaCoffee } from "react-icons/fa";
import WaitingGuy from "../WaitingGuy/WaitingGuy";
import { Fragment } from "react";
export interface ServiceCardProps {
    title: string;
    options: string[];
    buttonText: string;
    available: boolean;
}

export default function ServiceCard(props: ServiceCardProps) {
    return (
        <div className="bg-my-brown w-[300px] px-4 py-8">
            <h3 className="uppercase font-black mb-6 text-center">{props.title}</h3>
            <Fragment >
                {props.available &&
                    <table className="flex flex-col justify-center">
                        {props.options.map((option, index) =>
                            <tr className={'flex px-2 items-center gap-2 hover:brightness-110' + ' ' + (index % 2 !== 0 ? ' bg-my-blue text-my-dark-blue ' : 'bg-my-white')}>
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
            </Fragment>
            <div className="flex justify-center mt-4">
                <button className={"w-[200px] uppercase bg-my-white p-2 font-semibold " + (!props.available ? ' saturate-0 cursor-default ' : ' hover:bg-my-black hover:text-my-white ')}>
                    {props.buttonText}
                </button>
            </div>
        </div>
    )
}