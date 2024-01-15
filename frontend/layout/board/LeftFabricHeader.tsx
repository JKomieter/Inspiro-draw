import { Divider } from "@mui/material";
import { Fira_Sans } from "next/font/google";
import MenuIcon from '@mui/icons-material/Menu';
import IosShareIcon from '@mui/icons-material/IosShare';
import SearchIcon from '@mui/icons-material/Search';


const fira_sans = Fira_Sans({
    subsets: ['latin'],
    weight: ['500']
})


const LeftFabricHeader = () => {
    return (
        <div className="flex flex-row rounded-md bg-white p-1 items-center">
            <h4 className={`font-semibold text-base ${fira_sans.className} p-2 hover:bg-[#fed2cf] cursor-pointer rounded-md duration-200 mr-1`}>InspiroDraw</h4>
            <span className="rounded-2xl bg-neutral-200 px-2 py-1 text-violet-950 text-sm mr-1">
                free
            </span>
            <Divider orientation="vertical" flexItem />
            <p className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer text-sm ml-1">
                Untitled
            </p>
            <span className="p-2 rounded-md hover:bg-[#fed2cf] duration-200 cursor-pointer">
                <MenuIcon />
            </span>
            <span className="p-2 rounded-md hover:bg-[#fed2cf] duration-200 cursor-pointer">
                <IosShareIcon />
            </span>
            <span className="p-2 rounded-md hover:bg-[#fed2cf] duration-200 cursor-pointer">
                <SearchIcon />
            </span>
        </div>
    )
};


export default LeftFabricHeader;