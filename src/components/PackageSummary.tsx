import { onFormattedDate } from "../libs/formatter";

interface PackageSummaryProps {
    dataSize: string;
    days?: string;
    selectedPackage: string;
}

export default function PackageSummary({
    dataSize,
    selectedPackage,
}: PackageSummaryProps) {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-[#121212] font-bold text-[16px] capitalize mb-2">ringkasan paket</h2>
            <div className="flex justify-between">
                <h2 className="text-[#6E6E6E] text-[14px] capitalize">paket terpilih</h2>
                <p className="text-[#6E6E6E] text-[14px]">{selectedPackage || '-'}</p>
            </div>
            <div className="flex justify-between">
                <h2 className="text-[#6E6E6E] text-[14px] capitalize">data tersedia</h2>
                <p className="text-[#6E6E6E] text-[14px]">{dataSize || '-'}</p>
            </div>
            <div className="flex justify-between">
                <h2 className="text-[#6E6E6E] text-[14px] capitalize">tanggal pesanan</h2>
                <p className="text-[#6E6E6E] text-[14px]">{onFormattedDate(Date())}</p>
            </div>
            <div className="flex justify-between">
                <h2 className="text-[#6E6E6E] text-[14px] capitalize">jumlah</h2>
                <p className="text-[#6E6E6E] text-[14px]">1</p>
            </div>
        </div>
    )
}