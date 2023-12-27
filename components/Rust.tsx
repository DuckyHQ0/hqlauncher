"use client"

import {useEffect} from "react";
import {invoke} from "@tauri-apps/api/tauri";

export default function Rust() {
    useEffect(() => {
        invoke('temp_fn')
            .then(console.log)
            .catch(console.error)
    })

    return <></>
}