"use client";
import { Logo } from "@/svgs/index.svg";
import { Fira_Sans } from "next/font/google";
import LeftLinks from "./LeftLinks";
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from "next/navigation";


const fira_sans = Fira_Sans({
    subsets: ['latin'],
    weight: ['800']
})


const Header = () => {
    const pathname = usePathname();

    if (pathname !== "/") return null;

    return (
        <div className="top-0 bg-white w-full py-4 flex justify-between items-center px-9 border-[0.9px] border-b-neutral-400 z-10">
            <div className="flex items-center gap-6 flex-row">
                <div className="flex items-center flex-row cursor-pointer">
                    <div className="text-neutral-800 hover:bg-neutral-200 duration-200 rounded-lg md:hidden mr-2 flex justify-center items-center p-1 text-5xl">
                        <MenuIcon  />
                    </div>
                    <Logo className="font-bold text-5xl" />
                    <h4 className={`font-semibold text-2xl ${fira_sans.className}`}>nspiroDraw</h4>
                </div>
                <LeftLinks />
            </div>
            <div className="sm:flex hidden flex-row items-center gap-2">
                <span className="font-extralight capitalize text-sm cursor-pointer p-2 rounded-lg hover:bg-neutral-200 hover:underline duration-200">
                    contact sales
                </span>
                <span className="px-3 py-2 border-neutral-700 border-[0.5px] rounded-lg flex justify-center items-center capitalize font-extralight hover:bg-black hover:text-white duration-200 cursor-pointer">
                    login
                </span>
                <span className="px-3 py-2 flex justify-center items-center bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 duration-200 font-extralight">
                    Sign up free
                </span>
            </div>
        </div>
    )
}


export default Header;