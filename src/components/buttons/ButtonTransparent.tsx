export interface ButtonTransparentProps {
    text: string;
    id: string;
    width?:number;
    onClick?: ()=>void
}

export default function ButtonTransparent(props: ButtonTransparentProps){
    return(
        <button onClick={props.onClick} className={(props.width?`w-[${props.width}px]` : ' ')+" text-normal border-2 border-my-white p-3 text-my-white rounded-xl hover:bg-my-white hover:text-my-black"}>
            {props.text}
        </button>
    )
}