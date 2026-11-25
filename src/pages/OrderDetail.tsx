import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PackageSummary from "../components/PackageSummary";
import { useState } from "react";
import { onFormattedDate } from "../libs/formatter";
import StepIndicator from "../components/StepIndicator";

export default function OrderDetailPage() {

    const initialOrderForm = {
        name: '',
        email: '',
        whatsapp: ''
    }

    const { state } = useLocation();
    const navigate = useNavigate();
    const [orderForm, setOrderForm] = useState(initialOrderForm);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,value } = e.target;
        setOrderForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleBack = () => {
        navigate(-1);
    }

    const onPurchase = () => {
        if (!orderForm.name || !orderForm.email || !orderForm.whatsapp) return;

        navigate("/metode-pembayaran", {
            state: {
                dataSize: state.dataSize,
                days: state.days,
                product: state.product,
                name: orderForm.name,
                email: orderForm.email,
                whatsapp: orderForm.whatsapp,
                date: onFormattedDate(Date())
            }
        })
    }

    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4 mb-2">
                <Header 
                    title="Detail Pemesanan"
                    onBack={handleBack}
                    rightElement={<StepIndicator currentStep={1} />}
                />
            </div>

            <div className="bg-white rounded-t-3xl flex flex-col gap-3 flex-1 p-4">
                <PackageSummary 
                    selectedPackage={state.product.title}
                    dataSize={state.dataSize}
                />

                <div className="flex flex-col gap-2">
                    <h2 className="text-[#121212] font-bold text-[16px] capitalize mb-2">data pelanggan</h2>
                    <div className="flex flex-col gap-1">
                        <label 
                        className="text-[#121212] text-[14px] font-medium capitalize"
                        >nama</label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={orderForm.name}
                        onChange={handleChange}
                        className="placeholder:capitalize py-2 px-3 outline-none border border-[#E5E5E5] rounded-lg bg-white"
                        placeholder="masukan nama pelanggan" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label 
                        className="text-[#121212] text-[14px] font-medium capitalize"
                        >email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={orderForm.email}
                        onChange={handleChange}
                        className="placeholder:capitalize py-2 px-3 outline-none border border-[#E5E5E5] rounded-lg bg-white"
                        placeholder="masukan email pelanggan" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label 
                        className="text-[#121212] text-[14px] font-medium capitalize"
                        >nomor whatsapp</label>
                        <input 
                        type="text" 
                        name="whatsapp" 
                        id="whatsapp" 
                        value={orderForm.whatsapp}
                        onChange={handleChange}
                        className="placeholder:capitalize py-2 px-3 outline-none border border-[#E5E5E5] rounded-lg bg-white"
                        placeholder="masukan nomor HP pelanggan" />
                        <p className="text-[#131313] text-[11px]">
                            Jika terjadi kendala, kami akan menghubungi ke nomor ini
                        </p>
                    </div>
                </div>

                <button
                onClick={onPurchase}
                disabled={!orderForm.name || !orderForm.email || !orderForm.whatsapp}
                className="mt-auto text-white rounded-full w-full bg-[#2B3499] font-semibold text-[15px] py-2 capitalize disabled:bg-[#ACACAC] disabled:cursor-not-allowed"
                >
                    lanjutkan
                </button>
            </div>
        </div>
    )
}