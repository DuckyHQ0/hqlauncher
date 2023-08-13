export default function useElectron() {
    // Initialize electron
    const electron = window.require('electron')

    // Window title bar actions
    // ========================
    const actions = {
        createInstance: (instVersion: any, instName: any) => electron.ipcRenderer.invoke('createInstance', instVersion, instName),
        launchInstance: () => electron.ipcRenderer.invoke('launchInstance'),
        printVer: () => electron.ipcRenderer.invoke('printVer')
    }

    // Initialize ipcRenderer
    return actions
}
