import { Outlet } from "react-router-dom";

export default function Layouts() {
    return (
        <div className="relative min-h-dvh w-full flex flex-col bg-[#2B3499]">
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
        </div>
    )
}