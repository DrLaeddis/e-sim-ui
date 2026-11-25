import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import StepIndicator from "../components/StepIndicator";
import { useEffect, useMemo, useState } from "react";
import { priceFormat } from "../libs/formatter";
import IconSuccess from "../assets/iconSuccess";
import IconCopy from "../assets/iconCopy";
import InfoRow from "../components/InfoRow";

export default function InvoicePage() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const handleHome = () => {
        navigate("/");
    }

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Gagal menyalin:", err);
        }
    };

    const { randomInvoice, randomRef } = useMemo(() => {
        const digits = (length: number) =>
            Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");

        return {
            randomInvoice: `INV-${digits(8).padStart(11, "0")}`,
            randomRef: `${Math.floor(1 + Math.random() * 9)}${digits(13)}`,
        };
    }, []);

    useEffect(() => {
        console.log("state", state)
    }, [])

    const maskWhatsapp = (phone: string) => {
        if (!phone) return "";
        const cleaned = phone.trim();
        if (cleaned.length <= 4) return "*".repeat(cleaned.length);

        const visible = cleaned.slice(-4);
        const masked = "*".repeat(cleaned.length - 4);

        return `${masked}${visible}`;
    };

    const maskEmail = (email: string) => {
        if (!email || !email.includes("@")) return email;

        const [name, domain] = email.split("@");
        if (name.length <= 2) {
            return `${"*".repeat(name.length)}@${domain}`;
        }

        const visible = name.slice(-2);
        const masked = "*".repeat(name.length - 2);

        return `${masked}${visible}@${domain}`;
    };

    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4 mb-2">
                <Header 
                    title="Invoice"
                    onBack={handleHome}
                    rightElement={<StepIndicator currentStep={3} />}
                />
            </div>

            <div className="bg-white rounded-t-3xl flex flex-col gap-3 flex-1 p-4">


                <div className="relative mt-10 pt-14 p-4 bg-[#FAFBFF] rounded-xl flex flex-col gap-2">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                        <IconSuccess />
                    </div>

                    <div className="flex flex-col gap-1.5 items-center justify-center">
                        <h2 className="text-[#2B3499] text-[24px] font-bold">{priceFormat(state?.finalPrice)}</h2>
                        <div className="flex gap-1 items-center">
                            <p className="font-medium text-[#6D6D6D] text-[13px]">No. {randomInvoice}</p>
                            <button
                                type="button"
                                onClick={() => handleCopy(randomInvoice)}
                                className="text-[#2B3499] cursor-pointer"
                                aria-label="Salin nomor invoice"
                            >
                                {copied ? "✓" : <IconCopy />}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <InfoRow
                            label="status"
                            value={
                                <span className="p-2 text-[#229A33] text-[13px] bg-[#E1FBD6] rounded-xl font-semibold capitalize">
                                    berhasil
                                </span>
                            }
                        />
                        <InfoRow label="No. Ref" value={randomRef} />
                        <InfoRow label="Tgl Transaksi" value={state?.date} />
                        <InfoRow label="Waktu Transaksi" value={state?.time} />
                        <InfoRow label="Metode Pembayaran" value={state?.method} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#121212] font-bold text-[16px] capitalize mb-2">detail transaksi</h2>
                        <InfoRow label="produk" value={state?.product.title} />
                        <InfoRow label="data tersedia" value={state?.dataSize} />
                        <InfoRow label="jumlah" value={1} />
                        <InfoRow label="nama pelanggan" value={state?.name} />
                        <InfoRow label="nomor whatsapp" value={maskWhatsapp(state?.whatsapp)} />
                        <InfoRow label="email" value={maskEmail(state?.email)} />
                        <div className="my-1">
                            <p className="text-[#6E6E6E] text-[14px] text-center">
                                Kami akan segera mengirimkan kode QR eSIM ke email Anda. Cek inbox (atau folder spam) ya!
                            </p>
                        </div>
                    </div>
 
                    <div className="">
                        <h2 className="text-[#121212] font-bold text-[16px] capitalize mb-2">detail transaksi</h2>
                        <InfoRow label="harga" value={priceFormat(state?.product.price)} />
                        <InfoRow label="biaya transaksi" value={priceFormat(state?.fee)} />
                    </div>
                </div>


                <button
                onClick={handleHome}
                className="mt-auto text-white rounded-full w-full bg-[#2B3499] font-semibold text-[15px] py-2 capitalize"
                >
                    Selesai
                </button>
            </div>
        </div>
    )
}