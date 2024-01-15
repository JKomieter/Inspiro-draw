import { Logo } from "@/svgs/index.svg";
import { Fira_Sans } from "next/font/google";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DashboardTeam from "../common/DashboardTeam.dashboard";
import TeamBoard from "../common/TeamBoard.dashboard";


const fira_sans = Fira_Sans({
    subsets: ['latin'],
    weight: ['800']
})

const SideBoard = () => {
    return (
        <div className="bg-neutral-100 h-full w-[250px] flex flex-col py-5 px-4 items-start">
            <div className="flex items-center flex-row cursor-pointer mb-9">
                <Logo className="font-bold text-4xl" />
                <span className={`font-semibold text-2xl ${fira_sans.className}`}>nspiroDraw</span>
                <span className="ml-2 rounded-2xl bg-neutral-200 px-2 py-1 text-violet-950 text-sm">
                    free
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-1.5 items-center text-sm font-extralight">
                    <AccessTimeIcon className="text-neutral-500" />
                    <span>Recent boards</span>
                </div>
                <div className="flex flex-row gap-1.5 items-center text-sm font-extralight">
                    <StarOutlineIcon className="text-neutral-500" />
                    <span>Starred boards</span>
                </div>
                <DashboardTeam />
                <TeamBoard />
                <div className="">
                    
                </div>
            </div>
        </div>  
    )
}


export default SideBoard;