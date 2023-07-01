import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import DarkModeToggle from "../components/DarkmodeToggle/DarkmodeToggle";


const Main = () => {
    return (
        <>
        <DarkModeToggle />
        <div className="flex flex-col lg:flex-row gap-3">
            <div className="w-32">
                <Navbar />
            </div>
            <div className="w-full mt-20 lg:mt-0">
            <Outlet />
            </div>
        </div>
        </>
    );
};

export default Main;