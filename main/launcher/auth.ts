import { Auth } from "msmc";
import { safeStorage } from "electron";
import Store from "electron-store";
import { ipcMain } from "electron";

const store = new Store();

ipcMain.on("add-microsoft-account", () => {
  openAuthenticateWindow();
});

export async function openAuthenticateWindow() {
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

export async function getAccount() {
  const encryptedToken = store.get("minecraft-token") as string;
  const encryptedTokenBuffer = Buffer.from(encryptedToken, "base64");

  const token = safeStorage.decryptString(encryptedTokenBuffer);
  return token;
}
