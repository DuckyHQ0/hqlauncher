export default function useElectron() {
    // Initialize electron
    const electron = window.require('electron')

    // Window title bar actions
    // ========================
    const actions = {
        createInstance: () => electron.ipcRenderer.invoke('createInstance'),
        launchInstance: () => electron.ipcRenderer.invoke('launchInstance')
    }

    // Initialize ipcRenderer
    return actions
}
