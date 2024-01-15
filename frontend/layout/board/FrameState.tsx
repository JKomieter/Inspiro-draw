import { Create_Frame, Frame_State } from "@/svgs/index.svg";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    subsets: ['latin-ext'],
    weight: ['600'],
});

const FrameState = () => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col gap-1 px-3">
            <Frame_State className="w-[150px] h-[150px] mb-4" />
            <h4 className={`${nunito.className}`}>Prepare for a presentation</h4>
            <p className={`text-neutral-400 font-[100] ${nunito.className} text-center mb-6`}>Add frames to organize and present your board</p>
            <button className="py-3 w-full flex justify-center items-center gap-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 duration-150">
                <Create_Frame className="text-white font-semibold w-[30px] h-[30px]" />
                <p className="font-light">Create Frame</p>
            </button>
        </div>
    )
};

export default FrameState;