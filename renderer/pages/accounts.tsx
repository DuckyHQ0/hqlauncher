import React, { useEffect, useState } from "react";
import Head from "next/head";

import {
  HiMiniPlus,
  HiTrash,
  HiArchiveBoxArrowDown,
  HiEye,
  HiCheck,
} from "react-icons/hi2";

import Layout from "../components/layouts/MainLayout";
import AccountItem from "../components/ui/AccountItem";

import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../components/ui/AlertDialog";
import { Button } from "../components/ui/Button";

export default function AccountPage() {
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  // IPC
  function openAccountWindow() {
    window.ipc.send("add-microsoft-account", "add-microsoft-account");
  }
  function deleteAccount(args: string) {
    window.ipc.send("delete-account", args);
    console.log("Sending ipc renderer to delete account: " + args);
  }

  // Get accounts IPC
  const [accounts, setAccounts] = useState<
    Array<{ mcName: string; xName: string; mcUUID: string; token: string }>
  >([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    window.ipc
      .invoke("request-accounts")
      .then((accounts) => {
        setAccounts(JSON.parse(accounts));
        console.log("Accounts from front-end: " + accounts);
      })
      .catch((error) => {
        console.error("IPC invocation failed:", error);
        setIsError(true);
      });
  }, []);
  // HTML
  return (
    <React.Fragment>
      <Head>
        <title>HQLauncher</title>
      </Head>
      <Layout>
        <div className="flex flex-col w-full h-full min-h-full overflow-y-auto gap-36">
          <div className="bg-fg-1 border border-stroke-1 rounded-out backdrop-blur-fg-1 flex gap-32 h-fit px-64 py-8">
            <button
              onClick={openAccountWindow}
              className="flex gap-8 place-items-center hover-active-effect"
            >
              <HiMiniPlus className="w-[22px] h-[22px]" />
              <p className="subtext">Add Microsoft Account</p>
            </button>
            <div
              className={`flex gap-32 ${
                isSelected
                  ? "text-text-1"
                  : "text-text-disabled pointer-events-none"
              }`}
            >
              <button className="flex gap-8 place-items-center hover-active-effect">
                <HiCheck className="w-[22px] h-[22px]" />
                <p className="subtext">Set as Active Account</p>
              </button>
              <AlertDialog>
                <AlertDialogTrigger>
                  <button className="flex gap-8 place-items-center hover-active-effect">
                    <HiTrash className="w-[22px] h-[22px]" />
                    <p className="subtext">Delete Account</p>
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent
                  title="Are You Sure?"
                  description="This will delete your account from HQLauncher. You can always add it back later."
                >
                  <AlertDialogCancel>
                    <Button colour="secondary">Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button
                      colour="danger"
                      onClick={() => {
                        console.log("deleted account (fake): " + selectedUuid);
                      }}
                    >
                      Delete
                    </Button>
                  </AlertDialogAction>
                </AlertDialogContent>
              </AlertDialog>
              <button className="flex gap-8 place-items-center hover-active-effect">
                <HiArchiveBoxArrowDown className="w-[22px] h-[22px]" />
                <p className="subtext">Set Skin</p>
              </button>
              <button
                onClick={() => {
                  console.log("Selected UUID: " + selectedUuid);
                  console.log("Is selected? " + isSelected);
                }}
                className="flex gap-8 place-items-center hover-active-effect"
              >
                <HiEye className="w-[22px] h-[22px]" />
                <p className="subtext">debug</p>
              </button>
            </div>
          </div>
          <div className="bg-fg-1 border border-stroke-1 rounded-out backdrop-blur-fg-1 w-full h-full flex flex-col gap-8 overflow-y-auto p-64 pl-20">
            <div className="flex p-6 justify-between items-center">
              <div className="flex gap-20 items-center w-full">
                <div className="w-24 opacity-0">a</div>
                <div className="w-48">
                  <p className="subtext text-text-subtle">Face</p>
                </div>
                <p className="subtext text-text-subtle" id="displayname">
                  Display Name
                </p>
              </div>
              <div className="w-full">
                <p className="subtext text-text-subtle" id="username">
                  Active Account?
                </p>
              </div>
              <div className="w-full">
                <p className="subtext text-text-subtle" id="username">
                  Xbox Gamer Tag
                </p>
              </div>
              <div className="w-full">
                <p className="subtext text-text-subtle" id="uuid">
                  UUID
                </p>
              </div>
            </div>
            <RadixRadioGroup.Root
              className="flex flex-col gap-16"
              onValueChange={(newValue) => {
                setSelectedUuid(newValue);
                setIsSelected(true);
              }}
            >
              {accounts.length > 0 ? (
                accounts
                  .filter(
                    (account) => account !== null && account !== undefined
                  )
                  .map((account) => (
                    <AccountItem
                      key={account.mcUUID}
                      face={`https://starlightskins.lunareclipse.studio/render/pixel/${account.mcName}/face`}
                      displayname={account.mcName}
                      username={account.xName}
                      uuid={account.mcUUID}
                      active={true}
                      value={account.mcUUID}
                    />
                  ))
              ) : isError ? (
                <div className="body pl-48">
                  Error getting accounts from store. (Error code 89)
                </div>
              ) : (
                <div className="body pl-48">
                  No accounts found. Add your Microsoft account by clicking the
                  button above.
                </div>
              )}
            </RadixRadioGroup.Root>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
