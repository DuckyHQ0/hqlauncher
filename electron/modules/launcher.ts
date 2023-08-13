import { ipcMain } from 'electron'
import { Instance } from 'gmll'
import { Auth } from 'msmc'

export default () => {
    ipcMain.handle('createInstance', (event, instVersion, instName) => {
        const instance = new Instance({ version: instVersion, name: instName })
        instance.save().install()
        console.log('---- Created instance! ----')
    })

    ipcMain.handle('launchInstance', async (event) => {
        const authManager = new Auth('select_account')
        const xboxManager = await authManager.launch('electron')
        const token = await xboxManager.getMinecraft()

        const i777 = Instance.get('inst2')
        i777.launch(token.gmll())

        console.log('---- Launching instance! ----')
    })
}
