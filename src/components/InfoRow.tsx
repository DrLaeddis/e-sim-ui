import type { ReactNode } from "react";


interface InfoRowProps {
    label: string;
    value: ReactNode;
}

export default function InfoRow({ 
    label, 
    value 
}: InfoRowProps) {
    return (
        <div className="flex justify-between items-center">
            <h3 className="capitalize text-[#6E6E6E] text-[14px]">{label}</h3>
            <div className="text-[#121212] text-[14px] font-semibold">
                {value}
            </div>
        </div>
    )
}