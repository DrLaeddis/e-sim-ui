import IconBack from "../assets/iconBack";

interface HeaderProps {
    title?: string;
    rightElement?: React.ReactNode;
    onBack?: () => void;
}

export default function Header({
    title,
    rightElement,
    onBack
}: HeaderProps) {

    return (
        <div className="flex flex-col gap-4">
            <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button type="button" onClick={onBack}>
                        <IconBack />
                    </button>
                    <h2 className="font-bold text-xl text-white">{title}</h2>
                </div>
                {rightElement && <div>{rightElement}</div>}
            </div>
        </div>
    )
}