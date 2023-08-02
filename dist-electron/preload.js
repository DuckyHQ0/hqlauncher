"use strict";const{contextBridge:e,ipcRenderer:o}=require("electron");e.exposeInMainWorld("electronAPI",{openFile:()=>o.invoke("openFile")});console.log("---- electron/preload.ts ----");
