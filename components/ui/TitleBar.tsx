"use client"

import {
    HiOutlineXMark,
    HiOutlineMinus,
    HiOutlineSquare2Stack,
} from "react-icons/hi2";
import { appWindow } from "@tauri-apps/api/window";

export default function TitleBar() {
    return (
        <div
            data-tauri-drag-region
            className="px-110 h-110 fixed w-screen align-middle items-center bg-transparent flex place-content-between"
        >
            <div className="flex gap-16 align-middle place-items-center">
                <p className="text-body">HQLauncher</p>
                <p className="text-sub text-text-1/50">0.1 Alpha</p>
            </div>
            <div className="flex gap-16 align-middle place-items-center">
                <HiOutlineMinus
                    className="w-[22px] h-[22px] cursor-pointer hover:text-yellow duration-150 active:text-text-1"
                    onClick={() => appWindow.minimize()}
                />
                <HiOutlineSquare2Stack
                    className="w-[22px] h-[22px] cursor-pointer hover:text-green duration-150 active:text-text-1"
                    onClick={() => appWindow.toggleMaximize()}
                />
                <HiOutlineXMark
                    className="w-[22px] h-[22px] cursor-pointer hover:text-red duration-150 active:text-text-1"
                    onClick={() => appWindow.close()}
                />
            </div>
        </div>
    );
}
