import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { init } from "gmll";

process.env.ROOT = path.join(__dirname, "..");
process.env.DIST = path.join(process.env.ROOT, "dist-electron");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
	? path.join(process.env.ROOT, "public")
	: path.join(process.env.ROOT, ".output/public");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

let win: BrowserWindow;
const preload = path.join(process.env.DIST, "preload.js");

function handleFunction() {
	console.log("IPC IS WORKING!")
}

async function bootstrap() {
	win = new BrowserWindow({
		title: "HQLauncher",
		autoHideMenuBar: true,
		width: 1575,
		height: 855,
		minWidth: 1225,
		minHeight: 775,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegrationInWorker: true,
			contextIsolation: false,
			nodeIntegration: true,
			webSecurity: false,
		},
	});

	win.maximize();

	if (process.env.VITE_DEV_SERVER_URL) {
		win.loadURL(process.env.VITE_DEV_SERVER_URL);
		win.webContents.openDevTools();
	} else {
		win.loadFile(path.join(process.env.VITE_PUBLIC!, "index.html"));
	}

	// launcher stuff

    await init();

	ipcMain.handle('dialog:openFile', handleFunction)

    // presence

    new (require("easy-presence").EasyPresence)(
        "1121553870716424334"
    ).setActivity({
        details: "Test",
        state: "this is a presence",
        assets: {
            large_image: "large",
            large_text: "HQL Dev 0.1",
        },
        timestamps: { start: new Date() },
    });
}

app.whenReady().then(bootstrap);
