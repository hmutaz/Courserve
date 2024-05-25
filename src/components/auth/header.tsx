import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label: string;
};

export const Header = ({
    label,
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-1 items-center justify-center">
            <h1
                className="text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#193E2D] to-[#F6E5AF]"
            >
                Courserve
            </h1>
            <p className="text-2xl font-extrabold">
                {label}
            </p>
        </div>
    );
};