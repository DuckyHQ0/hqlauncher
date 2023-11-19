"use client";

import Image from "next/image";
import Link from "next/link";
import {
    HiRectangleStack,
    HiMiniUserGroup,
    HiCog6Tooth,
    HiMiniNewspaper,
    HiMiniQuestionMarkCircle,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";

export default function SideNav() {
    const isCurrentPage = (path: string) => usePathname() === path;
    return (
        <div className="w-fit flex flex-col place-content-between align-middle place-items-center">
            <Link href={"/"}>
                <Image
                    src={"/logo.png"}
                    alt="HQLauncher Logo"
                    width={50}
                    height={50}
                    className="hover-active-effect"
                />
            </Link>

            <div className="flex flex-col gap-32">
                <Link href={"/"}>
                    <HiRectangleStack
                        className={`w-[28px] h-[28px] hover-active-effect ${
                            isCurrentPage("/") ? "text-selected" : ""
                        }`}
                    />
                </Link>
                <Link href={"/accounts"}>
                    <HiMiniUserGroup
                        className={`w-[28px] h-[28px] hover-active-effect ${
                            isCurrentPage("/accounts") ? "text-selected" : ""
                        }`}
                    />
                </Link>
                <Link href={"/settings"}>
                    <HiCog6Tooth className={`w-[28px] h-[28px] hover-active-effect ${
                            isCurrentPage("/settings") ? "text-selected" : ""
                        }`} />
                </Link>
                <Link href={"/news"}>
                    <HiMiniNewspaper className={`w-[28px] h-[28px] hover-active-effect ${
                            isCurrentPage("/news") ? "text-selected" : ""
                        }`} />
                </Link>
                <Link href={"/"}>
                    <HiMiniQuestionMarkCircle className="w-[28px] h-[28px] hover-active-effect" />
                </Link>
            </div>
        </div>
    );
}
