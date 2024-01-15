import { BoardContext } from "@/context/BoardContext";
import { Pen } from "@/svgs/index.svg"
import { useContext } from "react";


export const PenIcon = () => {
    const { addPen } = useContext(BoardContext);

    return (
        <Pen className="w-[27px] h-[27px]" onClick={() => addPen()} />
    )
}