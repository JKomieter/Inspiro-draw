import SubLeftHeader from "./SubLeftHeader";
import SubRightHeader from "./SubRightHeader";



const RightFabricHeader = () => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <SubLeftHeader />
            <SubRightHeader />
        </div>
    )
};


export default RightFabricHeader;