import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-20 bg-pink-200 text-white min-h-screen">
                <Outlet />
            </div>
        </div>
    )
}