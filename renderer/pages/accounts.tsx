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

export default function AccountPage() {
  function openAccountWindow() {
    window.ipc.send("add-microsoft-account", "add-microsoft-account");
  }

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    window.ipc
      .invoke("request-accounts")
      .then((accounts) => {
        setAccounts(JSON.parse(accounts));
        console.log("Accounts from front-end: " + accounts);
      })
      .catch((error) => {
        console.error("IPC invocation failed:", error);
      });
  }, []);
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
            <a
              href="#"
              className="flex gap-8 place-items-center hover-active-effect"
            >
              <HiCheck className="w-[22px] h-[22px]" />
              <p className="subtext">Set as Active Account</p>
            </a>
            <a
              href="#"
              className="flex gap-8 place-items-center hover-active-effect"
            >
              <HiTrash className="w-[22px] h-[22px]" />
              <p className="subtext">Delete Account</p>
            </a>
            <a
              href="#"
              className="flex gap-8 place-items-center hover-active-effect"
            >
              <HiArchiveBoxArrowDown className="w-[22px] h-[22px]" />
              <p className="subtext">Set Skin</p>
            </a>
            <a
              href="#"
              className="flex gap-8 place-items-center hover-active-effect"
            >
              <HiEye className="w-[22px] h-[22px]" />
              <p className="subtext">View Models</p>
            </a>
          </div>
          <div className="bg-fg-1 border border-stroke-1 rounded-out backdrop-blur-fg-1 w-full h-full flex flex-col gap-64 overflow-y-auto p-64 pl-24">
            <RadixRadioGroup.Root>
              {accounts.length > 0 ? (
                accounts
                  .filter(
                    (account) => account !== null && account !== undefined
                  )
                  .map((account) => (
                    <AccountItem
                      key={account.uuid}
                      face={`https://starlightskins.lunareclipse.studio/render/pixel/${account.mcName}/face`}
                      displayname={account.mcName}
                      username={account.xName}
                      uuid={account.uuid}
                      active={true}
                    />
                  ))
              ) : (
                <div></div>
              )}
            </RadixRadioGroup.Root>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
