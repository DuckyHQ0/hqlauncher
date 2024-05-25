import React, { useEffect, useState } from "react";
import Head from "next/head";

import { HiMiniPlus, HiChevronDown } from "react-icons/hi2";
import Instance from "../components/ui/Instance";

import Layout from "../components/layouts/MainLayout";

export default function Instances() {
  const [instances, setInstances] = useState([]);
  useEffect(() => {
    window.ipc
      .invoke("request-instances")
      .then((instances) => {
        setInstances(instances);
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
            <a
              href="/instances/create"
              className="flex gap-8 place-items-center hover-active-effect"
            >
              <HiMiniPlus className="w-[22px] h-[22px]" />
              <p className="subtext">Create Instance</p>
            </a>
          </div>
          <div className="bg-fg-1 border border-stroke-1 rounded-out backdrop-blur-fg-1 w-full h-full flex flex-col gap-64 overflow-y-auto p-64">
            <div className="flex flex-col gap-32" id="Main">
              <div className="grid grid-cols-3 max-[1600px]:grid-cols-2 gap-32">
                {instances.length > 0 ? (
                  instances.map((instance) => (
                    <Instance
                      key={instance.name}
                      name={instance.name}
                      imageUrl={instance.imageUrl}
                    />
                  ))
                ) : (
                  <div className="body">
                    No instances found. Create one by clicking the button above.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
