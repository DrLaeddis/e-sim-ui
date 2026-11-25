import { useState } from "react";
import ItemCard from "../components/ItemCard";
import Searchbar from "../components/Searchbar";
import { FILTER_CONFIG, packageData } from "../libs/data";
import BottomFilter from "../components/BottomFilter";
import IconDown from "../assets/IconDown";

type FilterKey = keyof typeof FILTER_CONFIG;

export default function HomePage() {

    const [search, setSearch] = useState<string>("");
    const [region, setRegion] = useState<string>(FILTER_CONFIG.region.defaultValue);
    const [productType, setProductType] = useState<string>(FILTER_CONFIG.type.defaultValue);
    const [activeFilter, setActiveFilter] = useState<FilterKey | null>(null);

    const filterData = packageData.filter((item) => {
        const q = search.toLowerCase().trim();
        const matchesSearch =
            item.title.toLowerCase().includes(q) ||
            item.region.toLowerCase().includes(q) ||
            item.type.toLowerCase().includes(q);

        const matchesRegion = region === "all" || item.region.toLowerCase().includes(region.toLowerCase());

        const matchesType = productType === "all" || item.type === productType;

        return matchesSearch && matchesRegion && matchesType;
    });

    const currentConfig = activeFilter ? FILTER_CONFIG[activeFilter] : null;

    return (
        <>
            <div className="flex-1 flex flex-col">
                <div className="p-4 space-y-3">
                    <Searchbar 
                        search={search}
                        onSearch={setSearch}
                    />

                    <div className="flex gap-2">
                        <button 
                        onClick={() => setActiveFilter('region')}
                        className="flex items-center gap-1 border border-white rounded-2xl py-1 px-3 text-[13px] text-white capitalize">
                            <p>{region === "all" ? "Semua Region" : region}</p> <IconDown />
                        </button>
                        <button 
                        onClick={() => setActiveFilter('type')}
                        className="flex items-center gap-1 border border-white rounded-2xl py-1 px-3 text-[13px] text-white capitalize">
                            <p>{productType === "all" ? "Semua Jenis" : productType}</p> <IconDown />
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-t-3xl flex-1">
                    <div className="grid grid-cols-2 p-4 gap-4">
                        {filterData.length > 0 ? (
                            filterData.map((item: any, index: number) => (
                                <ItemCard 
                                    key={index}
                                    title={item.title}
                                    region={item.region}
                                    type={item.type}
                                    price={item.price}
                                    image={item.image}
                                />
                            )
                        )) : (
                            <p className="col-span-2 text-center text-gray-500 py-8">
                                Produk tidak ditemukan.
                            </p>   
                        )}
                    </div>
                </div>
            </div>

            {
                currentConfig && (
                    <BottomFilter 
                        isOpen={activeFilter !== null}
                        title={currentConfig.title}
                        options={currentConfig.options}
                        selectedValue={activeFilter === 'region' ? region : productType}
                        defaultValue={currentConfig.defaultValue}
                        onApply={(value) => {
                            if (activeFilter === "region") setRegion(value);
                            if (activeFilter === "type") setProductType(value);
                        }}      
                        onClose={() => setActiveFilter(null)}
                    />
                )
            }
        </>
    )
}