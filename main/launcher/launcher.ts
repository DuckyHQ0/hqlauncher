// -------- HQLauncher -- dukc ----------- //
// ---- Launcher & Instance Managment ---- //

import { getAccountToken } from "./auth";
import Instance from "gmll/objects/instance";
import { ipcMain } from "electron";

export async function createInstance({
  name,
  version,
}: {
  name: string;
  version: string;
}) {
  const instance = new Instance({ version: version, name: name });
  instance.install();
  instance.save();
}

export function launchInstance({
  mcUUID,
  name,
}: {
  mcUUID: string;
  name: string;
}) {
  const token = getAccountToken(mcUUID);

  const instance = Instance.get(name);

  // @ts-ignore
  instance.launch(token);
}

// -------- Get Instances for frontend --------- //

export async function getInstances() {
  const instances = Instance.getProfiles();
  return instances;
}

ipcMain.handle("request-instances", async () => {
  const instancesMap = await getInstances();
  const instancesObj = Array.from(instancesMap.entries()).reduce(
    (obj, [key, val]) => {
      obj[key] = val;
      return obj;
    },
    {}
  );

  const serializableInstances = Object.values(instancesObj).map((instance) => ({
    ...(instance as Record<string, unknown>),
    get: undefined,
  }));
  return serializableInstances;
});
