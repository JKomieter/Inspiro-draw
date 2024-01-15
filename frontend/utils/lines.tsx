import { BoardContext } from "@/context/BoardContext";
import { Straight_Line } from "@/svgs/index.svg";
import { FC, useContext } from "react";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import NearMeIcon from '@mui/icons-material/NearMe';



export const StraightLineIcon: FC = () => {
    const { addStraightLine } = useContext(BoardContext);

    return (
        <Straight_Line onClick={() => addStraightLine()} className='w-full h-full' />
    );
};


export const StraightArrowIcon: FC = () => {
    const { addStraightLine } = useContext(BoardContext);

    return (
        <NorthEastIcon onClick={() => addStraightLine()} />
    )
};

export const CurvedLineIcon: FC = () => {
    const { addStraightLine } = useContext(BoardContext);

    return (
        <TurnRightIcon onClick={() => addStraightLine()} />
    )
};

export const DirectionalLineIcon: FC = () => {
    const { addStraightLine } = useContext(BoardContext);

    return (
        <NearMeIcon onClick={() => addStraightLine()} />
    )
};