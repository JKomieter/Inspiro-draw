import { BoardContext } from "@/context/BoardContext";
import { FC, useContext } from "react";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import CropDinIcon from '@mui/icons-material/CropDin';
import { CgShapeRhombus } from "react-icons/cg";



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

export const RectIcon: FC = () => {
    const { addRectangle } = useContext(BoardContext);

    return (
        <CropDinIcon onClick={() => addRectangle()} />
    )
};

export const PolygonIcon: FC = () => {
    const { addPolygon } = useContext(BoardContext);

    return (
        <CgShapeRhombus onClick={() => addPolygon()} className="" />
    )
};