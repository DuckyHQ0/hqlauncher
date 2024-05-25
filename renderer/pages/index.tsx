import React, { useEffect, useState } from "react";
import Head from "next/head";

import { HiMiniPlus, HiChevronDown } from "react-icons/hi2";
import Instance from "../components/ui/Instance";

import Layout from "../components/layouts/MainLayout";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../components/ui/morphui/Dialog";
import * as RadixTabs from "@radix-ui/react-tabs";
import { Button } from "../components/ui/morphui/Button";
import { Input } from "../components/ui/morphui/Input";
import {
  Select,
  SelectGroup,
  SelectItem,
} from "../components/ui/morphui/Select";

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
            <Dialog>
              <DialogTrigger>
                <button className="flex gap-8 place-items-center hover-active-effect">
                  <HiMiniPlus className="w-[22px] h-[22px]" />
                  <p className="subtext">Create Instance</p>
                </button>
              </DialogTrigger>
              <DialogContent>
                <RadixTabs.Root defaultValue="custom">
                  <RadixTabs.List className="flex gap-24">
                    <RadixTabs.Trigger
                      value="custom"
                      className="flex flex-col gap-4 group"
                    >
                      <p className="body">Custom</p>
                      <div className="h-4 rounded-in group-radix-state-active:bg-accent w-full"></div>
                    </RadixTabs.Trigger>
                    <RadixTabs.Trigger
                      value="modrinth"
                      className="flex flex-col gap-4 group"
                    >
                      <p className="body">Modrinth</p>
                      <div className="h-4 rounded-in group-radix-state-active:bg-accent w-full"></div>
                    </RadixTabs.Trigger>
                    <RadixTabs.Trigger
                      value="curseforge"
                      className="flex flex-col gap-4 group"
                    >
                      <p className="body">Curseforge</p>
                      <div className="h-4 rounded-in group-radix-state-active:bg-accent w-full"></div>
                    </RadixTabs.Trigger>
                  </RadixTabs.List>
                  <RadixTabs.Content
                    value="custom"
                    className="radix-state-inactive:hidden flex flex-col gap-20 mt-16"
                  >
                    <h3 className="h3">Custom</h3>
                    <Input placeholder="Instance name" />
                    <Select label="Minecraft version">
                      <SelectGroup>
                        <SelectItem value="1.20.6">1.20.6</SelectItem>
                        <SelectItem value="1.20.5">1.20.5</SelectItem>
                        <SelectItem value="1.20.4">1.20.4</SelectItem>
                      </SelectGroup>
                    </Select>
                  </RadixTabs.Content>
                  <RadixTabs.Content
                    value="modrinth"
                    className="radix-state-inactive:hidden flex flex-col gap-20 mt-16"
                  >
                    <h3 className="h3">Modrinth coming soon.</h3>
                  </RadixTabs.Content>
                  <RadixTabs.Content
                    value="curseforge"
                    className="radix-state-inactive:hidden flex flex-col gap-20 mt-16"
                  >
                    <h3 className="h3">Curseforge coming soon.</h3>
                  </RadixTabs.Content>
                </RadixTabs.Root>
                <div className="flex gap-16">
                  <DialogClose>
                    <Button colour="primary">Create</Button>
                  </DialogClose>
                  <DialogClose>
                    <Button colour="secondary">Cancel</Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
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
