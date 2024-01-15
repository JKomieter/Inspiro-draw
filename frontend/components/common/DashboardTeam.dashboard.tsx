import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: ['400']
})

const DashboardTeam = () => {
    return (
        <div className="w-[200px] rounded-sm border-neutral-600 border-[0.7px] px-3 py-1 gap-2 flex flex-col justify-between">
            <div className={`flex flex-row w-full justify-between items-center ${open_sans.className}`}>
                <h4 className="text-neutral-900">JKomieter team</h4>
                <ExpandMoreIcon />
            </div>
            <p className='text-neutral-500 font-extralight'>1 user</p>
        </div>
    )
}


export default DashboardTeam;