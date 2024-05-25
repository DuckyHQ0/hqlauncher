// -------- HQLauncher -- dukc ----------- //
// -- Authentication & Account Handling -- //

import { Auth } from "msmc";
import { safeStorage } from "electron";
import Store from "electron-store";
import { ipcMain } from "electron";

const store = new Store();
interface Account {
  mcName: string;
  mcUUID: string;
  xName: string;
  token: string;
}

// -------- Add Account --------- //

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
    // Account list - uuid array index
    let accountList = store.get("accountList", []) as string[];
    accountList.push(mcUUID);
    store.set("accountList", accountList);
  } catch (error) {
    console.error("Failed to add account:", error);
  }
}

ipcMain.on("add-microsoft-account", () => {
  addAccount();
});

// -------- Delete Account --------- //

export async function deleteAccount(mcUUID: string): Promise<void> {
  try {
    store.delete(`account-${mcUUID}`);

    let accountList = store.get("accountList", []) as string[];
    const index = accountList.indexOf(mcUUID);
    if (index > -1) {
      accountList.splice(index, 1);
    }

    store.set("accountList", accountList);

    console.log(`Account ${mcUUID} successfully deleted.`);
  } catch (error) {
    console.error("Failed to delete account:", error);
  }
}

ipcMain.on("delete-account", (event, args) => {
  deleteAccount(args);
});

// -------- Get Accounts for frontend --------- //

export function getAllAccounts(): Account[] {
  const accountUuids = store.get("accountList", []) as string[];

  const accounts = accountUuids.map((mcUUIDarray: string) => {
    const fullAccount = store.get(`account-${mcUUIDarray}`) as Account;
    return {
      mcName: fullAccount.mcName,
      xName: fullAccount.xName,
      mcUUID: fullAccount.mcUUID,
      token: null,
    };
  });

  return accounts;
}

ipcMain.handle("request-accounts", async () => {
  const accounts = getAllAccounts();
  return JSON.stringify(accounts);
});

// -------- Get Account Token (ONLY FOR LAUNCHING MC) --------- //

export function getAccountToken(mcUUID: string) {
  const accountDetailsArray = store.get(`account-${mcUUID}`) as Account[];

  const accountDetail = accountDetailsArray.find(
    (account) => account.mcUUID === mcUUID
  );

  if (!accountDetail) {
    throw new Error(`No account found for UUID: ${mcUUID}`);
  }
  const encryptedToken = accountDetail.token;
  const encryptedTokenBuffer = Buffer.from(encryptedToken, "base64");

  const token = safeStorage.decryptString(encryptedTokenBuffer);
  return token;
}
