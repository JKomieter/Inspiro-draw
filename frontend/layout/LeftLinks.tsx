import { leftlinks } from "@/items/leftlinks"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const LeftLinks = () => {
    return (
        <div className="lg:flex hidden flex-row items-center gap-1">
            {
                leftlinks.map((l) => (
                    <div key={l.name} className="flex flex-row items-center gap-[0.5px] font-extralight capitalize text-sm cursor-pointer p-2 rounded-lg hover:bg-neutral-200 hover:underline duration-200">
                        <span>{l.name}</span>
                        <ExpandMoreIcon className="text-neutral-600 font-thin" />
                    </div>
                ))
            }
            <span className="font-extralight capitalize text-sm cursor-pointer p-2 rounded-lg hover:bg-neutral-200 duration-200 hover:underline">
                pricing
            </span>
        </div>
    )
}


export default LeftLinks