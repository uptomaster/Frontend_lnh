import { Outlet } from "react-router-dom";
import  Navbar  from "./Navbar";

export const Layout = () => {
    return (
        <div className=" bg-black min-h-screen">
            <Navbar />
            <div className="pt-20  text-white ">
                <Outlet />
            </div>
        </div>
    )
}