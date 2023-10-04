export default function useElectron() {
    // Initialize electron
    const electron = window.require('electron')

    // Window title bar actions
    // ========================

    function asd() {
        console.log("instNamesList")
    }

    const actions = {
        createInstance: (instVersion: any, instName: any) => electron.ipcRenderer.invoke('createInstance', instVersion, instName),
        launchInstance: () => electron.ipcRenderer.invoke('launchInstance'),
        printVer: () => electron.ipcRenderer.invoke('printVer'),
        getInstances: () => electron.ipcRenderer.on('listInstances', instNamesList)
    }

    // Initialize ipcRenderer
    return actions
}
