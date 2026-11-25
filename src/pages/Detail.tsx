import { Link, useNavigate, useParams } from "react-router-dom"
import { dataSize, dayChoice, descriptionProduct, packageData } from "../libs/data";
import { priceFormat } from "../libs/formatter";
import IconTopupable from "../assets/iconTopupable";
import IconInstant from "../assets/iconInstant";
import Header from "../components/Header";
import Chip from "../components/Chip";
import { useState } from "react";

export default function DetailPage() {
    const {id} = useParams<{id: string}>();
    const product = packageData.find((item) => item.id === Number(id));
    const navigate = useNavigate();
    const size = dataSize;
    const days = dayChoice;
    const description = descriptionProduct;

    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedDays, setSelectedDays] = useState<string>("");
    const isDisabled = !selectedSize || !selectedDays;

    if (!product) {
        return (
            <div className="p-4 text-center">
                <p>Produk tidak ditemukan.</p>
                <Link to="/" className="text-blue-600 underline">Kembali ke Beranda</Link>
            </div>
        )
    }

    const handleBack = () => {
        navigate(-1);
    }

    const orderPackage = () => {
        if (!selectedSize || !selectedDays) return;

        navigate("/detail-pemesanan", {
            state: {
                product,
                dataSize: selectedSize,
                days: selectedDays
            }
        })
    }

    return (
        <div className="relative flex-1 flex flex-col">
            <div className="absolute p-4 top-0 left-0">
                <Header 
                    onBack={handleBack}
                />
            </div>

            <div className="">
                <img src={product.image} alt="image" className="w-full h-72 object-cover block" />
            </div>

            <div className="bg-white rounded-t-3xl flex flex-col gap-3 flex-1 -mt-6 relative z-10 p-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h2
                        className="font-bold text-[#121212] text-[20px]"
                        >
                            {product.title}
                        </h2>
                        <p
                        className="text-[#ACACAC] text-[14px]"
                        >
                            {product.region}
                        </p>
                    </div>
                    <div className="">
                        <h2
                        className="font-bold text-[#2B3499] text-[20px]"
                        >{priceFormat(product.price)}</h2>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    {product.type === 'Topupable' ? <IconTopupable /> : <IconInstant />}
                    <p
                    className="text-[#121212] text-[12px] font-medium"
                    >{product.type}</p>
                </div>

                <div className="border border-[#EBEBED] rounded-2xl px-4 py-3 bg-[#FAFBFF]">
                    <h2 className="font-bold text-[#121212] text-[15px]">Cakupan negara</h2>
                    <p className="text-[#121212] text-[14px]">{product.country}</p>
                </div>

                <div className="space-y-2">
                    <h2 className="capitalize font-bold text-[#121212] text-[15px]">ukuran data</h2>
                    <Chip 
                        data={size}
                        selectedValue={selectedSize}
                        onSelect={setSelectedSize}
                    />
                </div>

                <div className="space-y-2">
                    <h2 className="capitalize font-bold text-[#121212] text-[15px]">pilih jumlah hari</h2>
                    <Chip 
                        data={days}
                        selectedValue={selectedDays}
                        onSelect={setSelectedDays}
                    />
                </div>

                <div className="">
                    <h2 className="capitalize font-bold text-[#121212] text-[15px]">deskripsi</h2>
                    <ul className="ml-5">
                        {description.map((desc) => (
                            <li 
                            key={desc.id}
                            className="list-disc text-[#121212] text-[14px]">
                                {desc.label}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                disabled={isDisabled}
                onClick={orderPackage}
                className="text-white rounded-full w-full bg-[#2B3499] font-semibold text-[15px] py-2 capitalize disabled:bg-[#ACACAC] disabled:cursor-not-allowed"
                >
                    pesan sekarang
                </button>
            </div>
        </div>
    )
}