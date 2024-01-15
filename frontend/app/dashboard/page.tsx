import SideBar from "@/components/dashboard/SideBar.dashboard";
import SideBoard from "@/components/dashboard/SideBoard.dashboard";


const DashboardPage = () => {
    return (
        <div className="w-full h-full bg-white flex flex-row">
            <SideBar />
            <SideBoard />
        </div>
    )
}


export default DashboardPage;