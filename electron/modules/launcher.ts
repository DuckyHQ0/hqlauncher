import { ipcMain } from 'electron'
import { Instance } from 'gmll'
import { Auth } from 'msmc'
import { green } from 'console-log-colors';

// Module
// ======
export default () => {
    ipcMain.handle('createInstance', (event) => {
        const instance = new Instance({ version: '1.20.1', name: 'NewInstance' })
        instance.install()
        console.log(green("---- Created instance! ----"))
    })

    ipcMain.handle('launchInstance', async (event) => {
        const authManager = new Auth('select_account')
        const xboxManager = await authManager.launch('electron')
        const token = await xboxManager.getMinecraft()

        const i777 = Instance.get('NewInstance')
        i777.launch(token.gmll())

        console.log(green("---- Launching instance! ----"))
    })
}

// https://www.electronjs.org/docs/latest/tutorial/ipc
