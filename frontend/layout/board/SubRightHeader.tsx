import NearMeIcon from '@mui/icons-material/NearMe';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CommentIcon from '@mui/icons-material/Comment';
import { Avatar, Badge, Divider } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BoardContext } from '@/context/BoardContext';
import { useContext } from 'react';
import { Nunito } from 'next/font/google';
import { Bolt } from '@/svgs/index.svg';


const nunito = Nunito({
    subsets: ['latin-ext'],
    weight: ['700'],
});


const SubRightHeader = () => {
    const { createBoard } = useContext(BoardContext);    

    const items = [
        {
            name: "Hide collaborators' cursors",
            icon: <NearMeIcon />
        },
        {
            name: "Reactions",
            icon: <CelebrationIcon />
        },
        {
            name: "Comments",
            icon: <CommentIcon />
        }
    ]

    return (
        <div className='flex flex-row rounded-md bg-white p-1 items-center transition-all overflow-hidden'>
            {
                items.map((item) => (
                    <div
                        key={item.name}
                        className="p-2 rounded-md hover:bg-[#fed2cf] duration-200 cursor-pointer">
                        {item.icon}
                    </div>
                ))
            }
            <Badge badgeContent={<Bolt className="w-3 h-3" />} >
                <Avatar sx={{ width: 25, height: 25, bgcolor: 'blue' }}  className='p-2 mx-1 fontthin'>J</Avatar>
            </Badge>
            <div className="p-2 rounded-md hover:bg-[#fed2cf] duration-200 cursor-pointer">
                <NotificationsNoneIcon />
            </div>
            <div className="flex flex-row items-center rounded-md bg-slate-200 py-1 mx-1">
                <p className={`px-3 text-xs font-semibold cursor-pointer ${nunito.className}`}>Present</p>
                <Divider orientation="vertical" flexItem />
                <span className='px-2 cursor-pointer'>
                    <KeyboardArrowDownIcon />
                </span>
            </div>
            <button
            onClick={() => createBoard()}
            className={`px-4 py-2 bg-blue-600 text-white text-xs font-semibold mx-1 rounded-md ${nunito.className}`}>
                Share
            </button>
        </div>
    )
};


export default SubRightHeader;