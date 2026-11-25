import type { ComponentType } from "react";
import { priceFormat } from "../libs/formatter";

interface PaymentCardProps {
    title: string;
    logo: ComponentType;
    name?: string;
    checked?: boolean;
    onChange?: () => void;
}

export default function PaymentCard({
    title,
    logo: Logo,
    name = "payment-method",
    checked,
    onChange
}: PaymentCardProps) {
    return (
        <label className="">
            <div className="p-3 flex justify-between items-center outline-none border border-[#E5E5E5] rounded-lg bg-white">
                <div className="flex gap-4 items-center">
                    <div className="w-12 flex justify-center">
                        <Logo />
                    </div>
                    <h2 className="text-[#121212] font-semibold text-[15px]">{title}</h2>
                </div>

                <div className="flex gap-2 items-center">
                    {title === 'Saldo' && (
                        <div className="">
                            <h2 className="text-[#6E6E6E] text-[14px]">{priceFormat(200000)}</h2>
                        </div>
                    )}
                    <input 
                    type="radio" 
                    id="html" 
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    className="relative appearance-none h-5 w-5 rounded-full border-2 border-[#D9D9D9] bg-white checked:border-[#2B3499] before:content-[''] before:absolute before:inset-0.75 before:rounded-full before:bg-[#2B3499] before:scale-0 checked:before:scale-100 before:transition-transform"
                    />
                </div>
            </div>
        </label>
    )
}