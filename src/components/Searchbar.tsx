import IconSearch from "../assets/iconSearch";

interface SearchbarProps {
    search: string;
    onSearch: (value: string) => void;
}

export default function Searchbar({
    search,
    onSearch
}: SearchbarProps) {
    return (
        <div className="bg-[#151B6F] py-2 px-3 rounded-lg flex items-center">
            <input 
            className="text-white placeholder:text-[#7F89E1] w-full outline-none text-[15px]"
            type="text" 
            name="search" 
            id="search" 
            placeholder="Cari Produk Yang Anda Mau"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            />

            <IconSearch />
        </div>
    )
}