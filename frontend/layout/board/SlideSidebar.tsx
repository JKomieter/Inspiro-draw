import { motion } from "framer-motion"
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import FrameState from "./FrameState";
import ActivitiesState from "./ActivitiesState";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    subsets: ['latin-ext'],
    weight: ['600'],
});

type Tab = "frames" | "activities";


const SlideSidebar = ({
    isOpen,
    setIsOpen
}: {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [activeTab, setActiveTab] = useState<Tab>("frames");
    const active = "border-b-blue-500 border-b-[2px]";

    const states = {
        frames: <FrameState />,
        activities: <ActivitiesState />
    } as Record<Tab, JSX.Element>;

    
    return (
        <motion.div 
            initial={{ x: -1000 }}
            animate={{ x: isOpen ? 0 : -1000}}
            transition={{ duration: 0.2 }}
            className="mt-2 h-[88%] w-[300px] bg-white rounded-md mr-2 flex flex-col"
        >
            <div className="w-full flex flex-row justify-between items-center  border-[0.5px] border-b-neutral-400 rounded-t-md">
                <div className="flex flex-row items-center px-3">
                    <p onClick={() => setActiveTab("frames")} 
                    className={`px-3 py-3 flex items-center justify-center ${nunito.className} ${activeTab === 'frames' && active} resize-none cursor-pointer transition-all duration-200`}>
                        Frames
                    </p>
                    <p  onClick={() => setActiveTab("activities")}
                        className={`px-3 py-3 flex items-center justify-center ${nunito.className} ${activeTab === 'activities' && active} resize-none cursor-pointer transition-all duration-200`}>
                        Activities
                    </p>
                </div>
                <span className="px-2">
                    <CloseIcon onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-600" />
                </span>
            </div>
            {states[activeTab]}
        </motion.div>
    )
}


export default SlideSidebar;