import { app, BrowserWindow } from "electron";

import { init } from "gmll";

app.whenReady().then(async () => {
	// electron stuff

	const win = new BrowserWindow({
		title: "HQLauncher",
		autoHideMenuBar: true,
		width: 1575,
		height: 855,
		minWidth: 1225,
		minHeight: 775,
	});

	if (process.env.VITE_DEV_SERVER_URL) {
		win.loadURL(process.env.VITE_DEV_SERVER_URL);
	}

	// launcher stuff

	await init();

	async function createInst() {}
});
