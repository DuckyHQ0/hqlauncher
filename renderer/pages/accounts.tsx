import React from "react";
import Head from "next/head";

import { HiMiniPlus } from "react-icons/hi2";

import Layout from "../components/layouts/MainLayout";

export default function AccountPage() {
  return (
    <React.Fragment>
      <Head>
        <title>HQLauncher</title>
      </Head>
      <Layout>
        <div className="flex flex-col w-full h-full min-h-full overflow-y-auto gap-36">
          <div className="bg-fg-1 border border-stroke-1 rounded-out backdrop-blur-fg-1 flex gap-32 h-fit px-64 py-8">
            <a
              href="#"
              className="flex gap-8 place-items-center hover-active-effect"
            >
              <HiMiniPlus className="w-[22px] h-[22px]" />
              <p className="subtext">Create Instance</p>
            </a>
          </div>
          <div className="bg-fg-1 border border-stroke-1 rounded-out backdrop-blur-fg-1 w-full h-full flex flex-col gap-64 overflow-y-auto p-64">
            <h1 className="h3">Accounts</h1>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
