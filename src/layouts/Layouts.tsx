import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layouts() {
    return (
        <div className="relative min-h-dvh w-full flex flex-col bg-[#2B3499]">
            <div className="p-4">
                <Header />  
            </div>

            <div className="flex-1 flex flex-co">
                <Outlet />
            </div>
        </div>
    )
}