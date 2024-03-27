import { ReactElement } from "react"



export const Button = ({ icon, text } : { icon?: ReactElement, text: string }) => {

    const style = {
        backgroundColor: "#06F",
        color: "white"
    }

    return(
        <button className="min-h-[50px] border-none outline-none flex w-full items-center justify-center gap-[20px] rounded-[8px] font-inter" style={style}>
            <span>{icon}</span>
            <span>{ text }</span>
        </button>
    )
}