interface ChipItem {
    id: number;
    label: string;
    value: string;
}

interface ChipProps {
    data: ChipItem[];
    selectedValue: string;
    onSelect: (value: string) => void;
}

export default function Chip({
    data,
    selectedValue,
    onSelect
}: ChipProps) {


    return (
        <div className="flex gap-3">
            {data.map((item) => {
                const isActive = item.value === selectedValue;
                return (
                <button
                type="button"
                key={item.id}
                onClick={() => onSelect(item.value)}
                className={` rounded-lg px-4 py-2 text-[14px] font-semibold 
                    ${isActive === true ? "bg-[#2B3499]" : 'bg-[#F2F2FC]'}
                    ${isActive === true ? "text-white" : 'text-[#2B3499]'}
                `}
                >
                    {item.label}
                </button>
            )})}
        </div>
    )
}