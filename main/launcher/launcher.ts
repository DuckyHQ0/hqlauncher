import { safeStorage } from "electron";
import Store from "electron-store";
import Instance from "gmll/objects/instance";

const store = new Store();

export async function LaunchMinecraft() {
  const encryptedToken = store.get("minecraft-token") as string;
  const encryptedTokenBuffer = Buffer.from(encryptedToken, "base64");

  const token = safeStorage.decryptString(encryptedTokenBuffer);

  const instance = new Instance({ version: "1.20.4", name: "hql-test" });
  // @ts-ignore
  instance.launch(token);
}
