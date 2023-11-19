"use client";

import { appWindow } from "@tauri-apps/api/window";
import {
    HiOutlineXMark,
    HiOutlineMinus,
    HiOutlineSquare2Stack,
} from "react-icons/hi2";

export default function TitleBar() {
    function minimize() {
        appWindow.minimize();
    }
    function maximize() {
        appWindow.toggleMaximize();
    }
    function close() {
        appWindow.close();
    }
    return (
        <div
            data-tauri-drag-region
            className="px-[100px] h-[90px] fixed w-screen align-middle place-items-center bg-transparent text-white flex place-content-between"
        >
            <div className="flex gap-16 align-middle place-items-center">
                <p className="text-body">HQLauncher</p>
                <p className="text-sub text-white/50">0.1 Alpha</p>
            </div>
            <div className="flex gap-16 align-middle place-items-center">
                <HiOutlineMinus
                    className="w-[22px] h-[22px] cursor-pointer hover:text-yellow hover-active-effect"
                    onClick={minimize}
                />
                <HiOutlineSquare2Stack
                    className="w-[22px] h-[22px] cursor-pointer hover:text-green hover-active-effect"
                    onClick={maximize}
                />
                <HiOutlineXMark
                    className="w-[22px] h-[22px] cursor-pointer hover:text-red hover-active-effect"
                    onClick={close}
                />
            </div>
        </div>
    );
}
