import path from "path";
import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { init } from "gmll";
import { setLauncherName, setLauncherVersion, setRoot } from "gmll/config";
import { session } from "electron";
import { getAccountToken } from "./launcher/auth";

// Launcher Modules

import("./launcher/auth");
import("./launcher/launcher");

// ------------

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

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

  /** session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        "Content-Security-Policy": [
          "default-src 'self' 'unsafe-inline';",
          `script-src 'self' ${
            isDev ? "'unsafe-inline' 'unsafe-eval'" : "'self'"
          };`,
          "script-src-elem  https://*.xboxlive.com https://login.live.com https://api.minecraftservices.com",
          "style-src 'self' 'unsafe-inline';",
          "img-src 'self' https://starlightskins.lunareclipse.studio;",
          "font-src 'self';",
        ].join(";"),
      },
    });
  }); **/

  if (isProd) {
    await mainWindow.loadURL("app://./home");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/`);
  }

  // --------------------
  // LAUNCHER STUFF
  // --------------------

  try {
    setRoot(".hqlauncher");
    setLauncherName("HQLauncher");
    setLauncherVersion("alpha-0.2.0");
    await init();
  } catch (error) {
    console.error("Launcher background.ts error:", error);
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("message", async (event, arg) => {
  event.reply("message", `${arg} World!`);
});
