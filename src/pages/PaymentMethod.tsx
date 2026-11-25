import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PackageSummary from "../components/PackageSummary";
import StepIndicator from "../components/StepIndicator";
import { invoiceFormattedDate, onFormattedTime, priceFormat } from "../libs/formatter";
import PaymentCard from "../components/PaymentCard";
import { paymentMethods } from "../libs/data";
import { useState } from "react";

export default function PaymentMethodPage() {

    const SERVICE_FEE = 500;
    const { state } = useLocation();
    const navigate = useNavigate();
    const method = paymentMethods;
    const [selectedMethod, setSelectedMethod] = useState<number | null>(null);
    const productPrice = Number(state?.product?.price) || 0;
    const serviceFee = SERVICE_FEE;
    const totalPrice = productPrice + serviceFee;

    const selectedPayment = paymentMethods.find(
        (item) => item.id === selectedMethod
    );

    const handleBack = () => {
        navigate(-1);
    }

    const handleContinue = () => {
        if (!selectedPayment) return;

        const now = new Date();

        navigate("/invoice", {
            state: {
                dataSize: state?.dataSize,
                days: state?.days,
                product: state?.product,
                name: state?.name,
                email: state?.email,
                whatsapp: state?.whatsapp,
                date: invoiceFormattedDate(now),
                time: onFormattedTime(now),
                method: selectedPayment.label,
                finalPrice: totalPrice,
                fee: serviceFee
            }
        })
    };

    return (
    <div className="flex-1 flex flex-col">
        <div className="p-4 mb-2">
            <Header 
                title="Metode Pembayaran"
                onBack={handleBack}
                rightElement={<StepIndicator currentStep={2} />}
            />
        </div>

        <div className="bg-white rounded-t-3xl flex flex-col gap-3 flex-1 p-4">
            <PackageSummary 
                selectedPackage={state?.product.title}
                dataSize={state?.dataSize}
            />

            <div className="flex flex-col gap-2 mb-8">
                <h2 className="text-[#121212] font-bold text-[16px] capitalize mb-2">pilih metode pembayaran</h2>
                {method.map((data) => {
                    const Logo = data.logo;
                    return (
                    <PaymentCard 
                        key={data.id}
                        title={data.label}
                        logo={Logo}
                        checked={selectedMethod === data.id}
                        onChange={() => setSelectedMethod(data.id)}
                    />
                )})}
            </div>

            <div className="mt-auto flex flex-col gap-2">
                <div className="flex justify-between items-center capitalize">
                    <h2 className="text-[#6E6E6E] text-[14px]">harga</h2>
                    <p className="text-[#6E6E6E] text-[14px]">{priceFormat(productPrice)}</p>
                </div>
                
                <div className="flex justify-between items-center capitalize">
                    <h2 className="text-[#6E6E6E] text-[14px]">biaya layanan</h2>
                    <p className="text-[#6E6E6E] text-[14px]">{priceFormat(serviceFee)}</p>
                </div>

                <div className="flex justify-between items-center capitalize my-1.5">
                    <h2 className="text-[#121212] font-bold">total</h2>
                    <p className="text-[#2B3499] font-bold text-[20px]">{priceFormat(totalPrice)}</p>
                </div>

                <button
                onClick={handleContinue}
                disabled={!selectedMethod}
                className=" text-white rounded-full w-full bg-[#2B3499] font-semibold text-[15px] py-2 capitalize disabled:bg-[#ACACAC] disabled:cursor-not-allowed"
                >
                    lanjutkan
                </button>
            </div>
        </div>
    </div>
    )
}