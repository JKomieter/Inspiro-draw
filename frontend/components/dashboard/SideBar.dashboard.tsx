import AddIcon from '@mui/icons-material/Add';


const SideBar = () => {
    return (
        <div className="left-0 h-full bg-violet-900 p-2 w-[60px]">
            <div className="flex flex-col gap-3 items-center">
                <div className="flex items-center justify-center bg-green-600 w-9 h-9 rounded-md text-white cursor-pointer shadow-lg">
                    J
                </div>
                <div className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer backdrop-blur-[4px] backdrop-brightness-[0.4] shadow-lg">
                    <AddIcon className='text-white' />
                </div>
            </div>
        </div>
    )
}


export default SideBar;