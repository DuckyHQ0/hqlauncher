import { Auth } from "msmc";
import { safeStorage } from "electron";
import Store from "electron-store";
import { ipcMain } from "electron";

const store = new Store();

ipcMain.on("add-microsoft-account", () => {
  OpenAuthenticateWindow();
});

export async function OpenAuthenticateWindow() {
  try {
    const authManager = new Auth({
      client_id: "542a1094-8e07-4018-b832-3fbb8f2b5270",
      redirect: "http://localhost:8888/auth/success",
      prompt: "select_account",
    });
    const xboxManager = await authManager.launch("electron");
    const token = await xboxManager.getMinecraft();

    const encryptedToken = safeStorage
      .encryptString(token.gmll().toString())
      .toString("base64");
    store.set("minecraft-token", encryptedToken);
  } catch (error) {
    console.error("Authentication failed:", error);
  }
}
