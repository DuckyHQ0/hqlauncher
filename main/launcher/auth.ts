// -------- HQLauncher -- dukc ----------- //
// -- Authentication & Account Handling -- //

import { Auth } from "msmc";
import { safeStorage } from "electron";
import Store from "electron-store";
import { ipcMain } from "electron";

const store = new Store();

ipcMain.on("add-microsoft-account", () => {
  addAccount();
});

interface Account {
  mcName: string;
  mcUUID: string;
  xName: string;
  token: string;
}

export async function addAccount() {
  try {
    // Authentication & Token

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

    // Account Data

    const xName = (await (await xboxManager.getSocial()).getProfile()).gamerTag;
    const mcName = (await xboxManager.getMinecraft()).profile.name;
    const mcUUID = (await xboxManager.getMinecraft()).profile.id;

    // Storage - Account

    const account = {
      mcName: mcName,
      mcUUID: mcUUID,
      xName: xName,
      token: encryptedToken,
    };

    store.set(`account-${mcUUID}`, account);
    // Account list - index
    let accountList = store.get("accountList", [] as string[]);
    // @ts-ignore
    accountList.push(mcUUID);
    store.set("accountList", accountList);
    // -------
  } catch (error) {
    console.error("Failed to add account:", error);
  }
}

export async function deleteAccount(mcUUID: string) {
  try {
    store.delete(`account-${mcUUID}`);
    console.log(`Account ${mcUUID} successfully deleted.`);
  } catch (error) {
    console.error("Failed to delete account:", error);
  }
}

// Use this for getting all account details
export function getAllAccounts(): Account[] {
  const accountUuids = store.get("accountList", [] as string[]);

  // @ts-ignore
  const accounts = accountUuids.map((mcUUID: string) => {
    const fullAccount = store.get(`account-${mcUUID}`) as Account;
    return {
      mcName: fullAccount.mcName,
      xName: fullAccount.xName,
      mcUUID: fullAccount.mcUUID,
    };
  });

  return accounts;
}

ipcMain.handle("request-accounts", async () => {
  const accounts = await getAllAccounts();
  return JSON.stringify(accounts);
});

// ONLY USE FOR LAUNCHING MINECRAFT - Because that's the only use for the token
export function getAccountToken() {
  const encryptedToken = store.get("minecraft-token") as string;
  const encryptedTokenBuffer = Buffer.from(encryptedToken, "base64");

  const token = safeStorage.decryptString(encryptedTokenBuffer);
  return token;
}
