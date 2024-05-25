import React from "react";
import Layout from "../../components/layouts/MainLayout";
import * as RadixTabs from "@radix-ui/react-tabs";
import { HiWrench } from "react-icons/hi2";
import Image from "next/image";
import { Input } from "../../components/ui/morphui/Input";

export default function CreateInstance() {
  return (
    <React.Fragment>
      <Layout>
        <div className="flex gap-24 w-full h-full">
          <div className="rounded-out bg-fg-1 border w-fit h-full border-stroke-1 backdrop-blur-fg-1 flex flex-col p-48 justify-between">
            <div className="flex flex-col gap-32">
              <div className="flex flex-col gap-16">
                <p className="subtext text-text-subtle">Instance Name</p>
                <Input placeholder="Instance 1" type="text" />
              </div>
            </div>
          </div>
          <RadixTabs.Root
            defaultValue="custom"
            className="flex flex-col gap-24 w-full h-full"
          >
            <RadixTabs.List
              className="flex gap-24 shrink-0"
              aria-label="Instance Type"
            >
              <RadixTabs.Trigger
                value="custom"
                className="rounded-out bg-fg-1 flex px-48 py-24 gap-12 items-center justify-center border border-stroke-1 radix-state-active:border-accent hover:border-accent duration-150 ease-out w-full h-fit"
              >
                <h3 className="h3">Custom</h3>
                <HiWrench className="size-24" />
              </RadixTabs.Trigger>
              <RadixTabs.Trigger
                value="modrinth"
                className="rounded-out bg-fg-1 flex px-48 py-24 gap-12 items-center justify-center border border-stroke-1 radix-state-active:border-accent hover:border-accent duration-150 ease-out w-full h-fit"
              >
                <h3 className="h3">Modrinth</h3>
                <Image
                  src={"/icons/modrinth.svg"}
                  alt="curseforge"
                  width={24}
                  height={24}
                />
              </RadixTabs.Trigger>
              <RadixTabs.Trigger
                value="curseforge"
                className="rounded-out bg-fg-1 flex px-48 py-24 gap-12 items-center justify-center border border-stroke-1 radix-state-active:border-accent hover:border-accent duration-150 ease-out w-full h-fit"
              >
                <h3 className="h3">Curseforge</h3>
                <Image
                  src={"/icons/curseforge.svg"}
                  alt="curseforge"
                  width={24}
                  height={24}
                />
              </RadixTabs.Trigger>
            </RadixTabs.List>
            <RadixTabs.Content
              value="custom"
              className="rounded-out grow bg-fg-1 border w-full h-full radix-state-inactive:hidden border-stroke-1 backdrop-blur-fg-1 flex flex-col p-48 justify-between"
            >
              <h1 className="h1">Custom</h1>
            </RadixTabs.Content>
            <RadixTabs.Content
              value="modrinth"
              className="rounded-out grow bg-fg-1 border w-full h-full radix-state-inactive:hidden border-stroke-1 backdrop-blur-fg-1 flex flex-col p-48 gap-16"
            >
              <h1 className="h1">Modrinth Modpacks</h1>
              <p className="body">Coming soon, in beta most likely.</p>
            </RadixTabs.Content>
            <RadixTabs.Content
              value="curseforge"
              className="rounded-out grow bg-fg-1 border w-full h-full radix-state-inactive:hidden border-stroke-1 backdrop-blur-fg-1 flex flex-col p-48 gap-16"
            >
              <h1 className="h1">Curseforge Modpacks</h1>
              <p className="body">Coming soon, in beta most likely.</p>
            </RadixTabs.Content>
          </RadixTabs.Root>
        </div>
      </Layout>
    </React.Fragment>
  );
}
