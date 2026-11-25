import { useEffect, useState } from "react";

type FilterOption = {
    label: string,
    value: string
}

interface BottomFilterProps {
    isOpen: boolean;
    title: string;
    options: FilterOption[];
    selectedValue: string;
    defaultValue: string;
    onApply: (value: string) => void;
    onClose: () => void;
}

export default function BottomFilter({
    isOpen,
    title,
    options,
    selectedValue,
    defaultValue,
    onApply,
    onClose
}: BottomFilterProps) {

    const [draftValue, setDraftValue] = useState(selectedValue);

    useEffect(() => {
        if (isOpen) {
            setDraftValue(selectedValue)
        }
    }, [isOpen, selectedValue])

    if (!isOpen) return null;

    return (
        <div 
        onClick={onClose}
        className="fixed bg-black/40 h-full w-full top-0 left-0 flex items-end">
            <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-t-xl w-full max-w-md p-4 flex flex-col gap-2">
                
                <div className="flex justify-between">
                    <h2 className="capitalize font-bold text-[#121212] text-[16px]">{title}</h2>
                    <button 
                    type="button"
                    onClick={() => setDraftValue(defaultValue)}
                    className="capitalize text-[14px] font-medium text-[#2B3499]">reset</button>
                </div>

                <div className="flex flex-col gap-2">
                    {options.map((option) => {
                        const isSelected = draftValue === option.value;
                        return (
                        <label 
                        key={option.value}
                        className="flex items-center justify-between">
                            <span className="font-medium text-[15px] capitalize text-[#121212]">{option.label}</span>
                            <input 
                            type="radio" 
                            id="html" 
                            name={title}
                            value={option.value}
                            checked={isSelected}
                            onChange={() => setDraftValue(option.value)}
                            className="relative appearance-none h-5 w-5 rounded-full border-2 border-[#D9D9D9] bg-white checked:border-[#2B3499] before:content-[''] before:absolute before:inset-0.75 before:rounded-full before:bg-[#2B3499] before:scale-0 checked:before:scale-100 before:transition-transform"
                            />
                        </label>
                        )
                    })}
                </div>

                <button 
                onClick={() => {
                    onApply(draftValue);
                    onClose();
                }}
                className="text-white rounded-full w-full bg-[#2B3499] font-semibold text-[15px] py-2 capitalize">
                    terapkan
                </button>
            
            </div>         
        </div>
    )
}