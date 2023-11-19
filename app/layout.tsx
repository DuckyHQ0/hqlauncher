import { Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import {
    HiRectangleStack,
    HiMiniUserGroup,
    HiCog6Tooth,
    HiMiniNewspaper,
    HiMiniQuestionMarkCircle,
} from "react-icons/hi2";
import TitleBar from "@/components/TitleBar";
import SideNav from "@/components/ui/SideNav";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={outfit.className + "rounded-[32px]"}>
            <body className="container-bg bg-cover w-screen rounded-[32px] h-screen text-white overflow-hidden">
                <TitleBar />
                <div className="p-[100px] gap-[100px] h-full flex overflow-hidden">
                    <SideNav />
                    {children}
                </div>
            </body>
        </html>
    );
}
