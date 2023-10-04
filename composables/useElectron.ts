export default function useElectron() {
    const electron = window.require('electron')

    const actions = {
        createInstance: (instVersion: any, instName: any) => electron.ipcRenderer.invoke('createInstance', instVersion, instName),
        launchInstance: () => electron.ipcRenderer.invoke('launchInstance'),
        printVer: () => electron.ipcRenderer.invoke('printVer')
    }

    return actions
}
