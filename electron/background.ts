import * as path from 'path'
import * as os from 'os'
import { app, BrowserWindow, session } from 'electron'
import { init } from 'gmll'
import singleInstance from './singleInstance'
import dynamicRenderer from './dynamicRenderer'
import launcherModule from './modules/launcher'
import instancesModule from './modules/instances'
import updaterModule from './modules/updater'
import macMenuModule from './modules/macMenu'

// Initilize
// =========
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
const isProduction = process.env.NODE_ENV !== 'development'
const platform: 'darwin' | 'win32' | 'linux' = process.platform as any
const architucture: '64' | '32' = os.arch() === 'x64' ? '64' : '32'
const headerSize = 32
const modules = [launcherModule, instancesModule, macMenuModule]

// Initialize app window
// =====================
function createWindow() {
    console.log('System info', { isProduction, platform, architucture })
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        title: 'HQLauncher',
        icon: path.join(__dirname, '/electron/icons/icon.ico'),
        autoHideMenuBar: true,
        width: 1575,
        height: 855,
        minWidth: 1280,
        minHeight: 840,
        webPreferences: {
            devTools: !isProduction,
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        },

        titleBarStyle: 'hiddenInset',
        // frame: platform === 'darwin',
        frame: true, // <= Remove this line if you wanted to implement your own title bar
        titleBarOverlay: platform === 'darwin' && { height: headerSize }
    })

    // Lock app to single instance
    if (singleInstance(app, mainWindow)) return

    // Open the DevTools.
    !isProduction && mainWindow.webContents.openDevTools({ mode: 'right' })

    return mainWindow
}

// App events
// ==========
app.whenReady().then(async () => {
    if (!isProduction) {
        try {
            await session.defaultSession.loadExtension(path.join(__dirname, '../..', '__extensions', 'vue-devtools'))
        } catch (err) {
            console.log('[Electron::loadExtensions] An error occurred: ', err)
        }
    }

    const mainWindow = createWindow()
    if (!mainWindow) return

    // Maximize
    mainWindow.maximize()

    // Load renderer process
    dynamicRenderer(mainWindow)

    // Load launcher (GMLL)
    await init()

    // Initialize modules
    console.log('-'.repeat(30) + '\n[+] Loading modules...')
    modules.forEach((module) => {
        try {
            module(mainWindow)
        } catch (err: any) {
            console.log('[!] Module error: ', err.message || err)
        }
    })

    console.log('[!] Loading modules: Done.' + '\r\n' + '-'.repeat(30))

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        // if (BrowserWindow.getAllWindows().length === 0) createWindow()
        mainWindow.show()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
