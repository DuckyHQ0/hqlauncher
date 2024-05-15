import { Auth } from "msmc";
import Instance from "gmll/objects/instance";

export async function Authenticate() {
  const authManager = new Auth({
    client_id: "542a1094-8e07-4018-b832-3fbb8f2b5270",
    redirect: "http://localhost:8888/auth/success",
    prompt: "select_account",
  });
  const xboxManager = await authManager.launch("electron");
  return await xboxManager.getMinecraft();
}

export async function LaunchMinecraft() {
  const token = await Authenticate();
  const i = new Instance({ version: "1.20.6", name: "hql-test-instance" });
  i.save();
  i.launch(token.gmll());
}
