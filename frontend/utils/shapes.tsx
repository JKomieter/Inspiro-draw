import { BoardContext } from "@/context/BoardContext";
import { FC, useContext } from "react";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';



export const CircleIcon: FC = () => {
    const { addCircle } = useContext(BoardContext);

    return (
        <RadioButtonUncheckedIcon onClick={() => addCircle()} />
    );
};

export const TriangleIcon: FC = () => {
    const { addTriangle } = useContext(BoardContext);

    return (
        <ChangeHistoryIcon onClick={() => addTriangle()} />
    );
};