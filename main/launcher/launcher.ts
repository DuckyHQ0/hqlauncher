import { safeStorage } from "electron";
import Store from "electron-store";

const store = new Store();

export async function LaunchMinecraft() {
  const encryptedToken = store.get("minecraft-token") as string;
  const encryptedTokenBuffer = Buffer.from(encryptedToken, "base64");

  const gmllToken = safeStorage.decryptString(encryptedTokenBuffer);
}
