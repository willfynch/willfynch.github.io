export interface ButtonTransparentProps {
    text: string;
    id: string;
    onClick?: ()=>void
}

export default function ButtonTransparent(props: ButtonTransparentProps){
    return(
        <button onClick={props.onClick} className="border-2 border-my-white p-3 text-my-white rounded-xl duration-300 hover:bg-my-white hover:text-my-black">
            {props.text}
        </button>
    )
}