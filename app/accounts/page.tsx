"use client";

import { HiMiniPlus } from "react-icons/hi2";
import { invoke } from "@tauri-apps/api/tauri";
import { useEffect } from "react";

export default function Accounts() {
  return (
    <div className="flex flex-col w-full h-full min-h-full overflow-y-auto gap-36">
      <div className="section-style flex gap-32 h-fit px-64 py-8">
        <button
          onClick={() =>
            invoke("open_auth_window").then(console.log).catch(console.error)
          }
          className="flex gap-8 place-items-center hover-active-effect"
        >
          <HiMiniPlus className="w-[22px] h-[22px]" />
          <p className="text-sub">Add Microsoft Account</p>
        </button>
      </div>
      <div className="section-style w-full h-full flex flex-col gap-64 overflow-y-auto p-64">
        <h3 className="text-3 font-semibold">Accounts</h3>
      </div>
    </div>
  );
}
