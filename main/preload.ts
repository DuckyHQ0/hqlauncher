// preload.ts

import { contextBridge, ipcRenderer } from "electron";

interface IpcExposed {
  send: (channel: string, data?: any) => Promise<void>;
  invoke: (channel: string, data?: any) => Promise<any>;
  on: (channel: string, listener: (...args: any[]) => void) => () => void;
}

const exposedIpc: IpcExposed = {
  send: (channel, data) => {
    return new Promise((resolve, reject) => {
      ipcRenderer.send(channel, data);
      ipcRenderer.once(`${channel}-reply`, (event, response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          reject(response.error);
        }
      });
    });
  },
  invoke: (channel, data) => {
    return ipcRenderer.invoke(channel, data);
  },
  on: (channel, listener) => {
    const subscription = (_, args) => listener(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
};

contextBridge.exposeInMainWorld("ipc", exposedIpc);
