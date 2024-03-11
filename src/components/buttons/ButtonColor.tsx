export interface ButtonColorProps {
    text: string;
    id: string;
    width?: number;
    onClick?: ()=>void;
}

export default function ButtonColor(props: ButtonColorProps){
    return(
    <button onClick={props.onClick} className={`w-[${props.width ?? 200}px] shadow-md uppercase bg-my-white p-2 font-semibold `}>
        {props.text}
    </button>
    )
}