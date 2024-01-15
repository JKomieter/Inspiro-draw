import { motion } from "framer-motion";
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import SensorWindowIcon from '@mui/icons-material/SensorWindow';
import React from "react";
import { items } from "./initialsidebaritems";


const InitialSidebar = ({
    setIsOpen,
    isOpen,
}: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
}) => {

    return (
        <motion.div className="flex flex-col items-center mt-4">
            <div className="flex flex-col rounded-md bg-white items-center">
                {items.map((item) => (
                    <div
                        key={item.name} className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer m-0.5">
                        {item.icon}
                    </div>
                ))}
            </div>
            <div className="mt-4 flex flex-col items-center rounded-md bg-white">
                <div className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer m-0.5">
                    <UndoIcon />
                </div>
                <div className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer">
                    <RedoIcon />
                </div>
            </div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md p-2.5 bg-white hover:bg-[#fed2cf] duration-200 cursor-pointer mt-12">
                <SensorWindowIcon />
            </div>
        </motion.div>
    )
};


export default InitialSidebar;