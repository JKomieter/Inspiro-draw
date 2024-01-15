import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PublicIcon from '@mui/icons-material/Public';

const TeamBoard = () => {
    return (
        <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-row gap-1.5 items-center text-sm text-blue-700 font-[200] cursor-pointer">
                <ContentPasteIcon className='text-[18px]' />
                <span>Boards on this team</span>
            </div>
            <div className="flex flex-row gap-1.5 items-center text-sm text-neutral-600 font-[200] cursor-pointer">
                <PublicIcon className='text-[18px]' />
                <span>Microverse</span>
            </div>
        </div>
    )
}


export default TeamBoard;