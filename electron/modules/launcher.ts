import { ipcMain } from 'electron'
import { Instance } from 'gmll'
import { Auth } from 'msmc'

// Module
// ======
export default () => {
    ipcMain.handle('createInstance', (event) => {
        let instance = new Instance({ version: '1.20.1', name: 'NewInstance' })
        instance.save()
    })

    ipcMain.handle('launchInstance', async (event) => {
        const authManager = new Auth('select_account')
        const xboxManager = await authManager.launch('electron')
        const token = await xboxManager.getMinecraft()

        let i777 = Instance.get('NewInstance')
        i777.launch(token.gmll())
    })
}

// https://www.electronjs.org/docs/latest/tutorial/ipc
