export default function useElectron() {
    // Initialize electron
    const electron = window.require('electron')

    // Window title bar actions
    // ========================
    const actions = {
        createInstance: (v: any) => electron.ipcRenderer.invoke('createInstance', v),
        launchInstance: () => electron.ipcRenderer.invoke('launchInstance'),
        printVer: () => electron.ipcRenderer.invoke('printVer')
    }

    // Initialize ipcRenderer
    return actions
}
