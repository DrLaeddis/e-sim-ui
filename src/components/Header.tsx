import IconBack from "../assets/iconBack";

export default function Header() {
    return (
        <div className="flex flex-col gap-4">
            <div className="mt-4 flex items-center gap-4">
                <IconBack />
                <h2 className="font-bold text-xl text-white">Travel eSIM</h2>
            </div>

        </div>
    )
}