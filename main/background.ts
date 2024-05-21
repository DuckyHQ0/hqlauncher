import path from "path";
import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { init } from "gmll";
import { setLauncherName, setLauncherVersion } from "gmll/config";
import { deleteAccount } from "./launcher/auth";

// Launcher Modules

import("./launcher/auth");
import("./launcher/launcher");

// ------------

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    title: "HQLauncher",
    width: 1400,
    height: 750,
    minWidth: 1400,
    minHeight: 750,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.maximize();

  if (isProd) {
    await mainWindow.loadURL("app://./home");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
  }

  // --------------------
  // LAUNCHER STUFF
  // --------------------

  try {
    await init();
    setLauncherName("HQLauncher");
    setLauncherVersion("alpha-0.2.0");
  } catch (error) {
    console.error("Launcher background.ts error:", error);
  }

  deleteAccount("d1b3d468bb3443a49dad87a50947a8f7");
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("message", async (event, arg) => {
  event.reply("message", `${arg} World!`);
});
