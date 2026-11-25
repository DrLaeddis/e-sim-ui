import IconInstant from "../assets/iconInstant";
import IconTopupable from "../assets/iconTopupable";
import { priceFormat } from "../libs/formatter";

interface ItemCardProps {
    title: string;
    region: string;
    type: string;
    price: string;
    image: string;
}

export default function ItemCard({
    title,
    region,
    type,
    price,
    image,
}: ItemCardProps) {
    return (
        <div className="bg-[#FAFAFC] border border-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.13)] p-2 space-y-1">
            <div className="">
                <img src={image} alt="image" className="h-42.5 object-fill w-full rounded-2xl" />
            </div>
            <div className="px-1 space-y-1">
                <h1 className="font-bold text-[15px] text-[#030303]">{title}</h1>
                <p className="font-normal text-[12px] text-[#ACACAC]">{region}</p>
                <div className="flex gap-1 items-center">
                    {type === 'Instant' ? <IconInstant /> : <IconTopupable />}
                    <p className="font-medium text-[12px] text-[#030303]">{type}</p>
                </div>
                <p className="font-bold text-[15px] text-[#2B3499]">{priceFormat(price)}</p>
            </div>
        </div>
    )
}