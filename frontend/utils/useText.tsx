import { BoardContext } from "@/context/BoardContext";
import { FC, useContext } from "react";
import TextFieldsIcon from '@mui/icons-material/TextFields';


export const AddTextIcon: FC = () => {
    const { addText } = useContext(BoardContext);

    return (
        <TextFieldsIcon onClick={() => addText()} />
    );
};

export const StickyNoteIcon = ({
    color
}: {
    color: string
}) => {
    const { addTextbox } = useContext(BoardContext);

    return (
        <span
            style={{ backgroundColor: color }}
            onClick={() => addTextbox(color)}
            className={`rounded-md p-2 duration-200 cursor-pointer m-0.5 hover:scale-125 w-10 h-10 shadow-md `}
        >
            
        </span>
    );
};