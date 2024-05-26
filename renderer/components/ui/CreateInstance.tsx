import { HiMiniPlus, HiMiniExclamationCircle } from "react-icons/hi2";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "./morphui/Dialog";
import * as RadixTabs from "@radix-ui/react-tabs";
import * as RadixForm from "@radix-ui/react-form";
import { Button } from "./morphui/Button";
import { Input } from "./morphui/Input";
import { Select, SelectGroup, SelectItem } from "./morphui/Select";
import { useState } from "react";

export const CreateInstance = () => {
  const [instanceName, setInstanceName] = useState<string>();
  const [instanceVersion, setInstanceVersion] = useState<string>("1.20.6");

  function createInstance2() {
    console.log("Instance namee: " + instanceName);
    console.log("Instance versions: " + instanceVersion);

    window.ipc
      .send("create-instance", instanceName, instanceVersion)
      .catch((error: string) => {
        console.error("IPC invocation failed:", error);
      });
  }
  return (
    <Dialog>
      <DialogTrigger className="flex gap-8 place-items-center hover-active-effect">
        <HiMiniPlus className="w-[22px] h-[22px]" />
        <p className="subtext">Create Instance</p>
      </DialogTrigger>
      <DialogContent>
        <RadixTabs.Root defaultValue="custom">
          <RadixTabs.List className="flex gap-24">
            <RadixTabs.Trigger
              value="custom"
              className="flex flex-col gap-4 group items-center"
            >
              <p className="body">Custom</p>
              <div className="h-4 rounded-in group-radix-state-active:opacity-100 group-hover:opacity-100 opacity-0 bg-accent group-radix-state-active:w-[75%] group-hover:w-[33%] w-0 duration-150 ease-out"></div>
            </RadixTabs.Trigger>
            <RadixTabs.Trigger
              value="modrinth"
              className="flex flex-col gap-4 group items-center"
            >
              <p className="body">Modrinth</p>
              <div className="h-4 rounded-in group-radix-state-active:opacity-100 group-hover:opacity-100 opacity-0 bg-accent group-radix-state-active:w-[75%] group-hover:w-[33%] w-0 duration-150 ease-out"></div>
            </RadixTabs.Trigger>
            <RadixTabs.Trigger
              value="curseforge"
              className="flex flex-col gap-4 group items-center"
            >
              <p className="body">Curseforge</p>
              <div className="h-4 rounded-in group-radix-state-active:opacity-100 group-hover:opacity-100 opacity-0 bg-accent group-radix-state-active:w-[75%] group-hover:w-[33%] w-0 duration-150 ease-out"></div>
            </RadixTabs.Trigger>
          </RadixTabs.List>
          <RadixTabs.Content
            value="custom"
            className="radix-state-inactive:hidden mt-16"
          >
            <RadixForm.Root
              onSubmit={() => {
                createInstance2();
              }}
              className="flex flex-col gap-20"
            >
              <h3 className="h3">Custom Instance</h3>
              <RadixForm.Field
                name="Instance name"
                className="flex flex-col gap-8"
              >
                <RadixForm.Label className="sub text-text-subtle">
                  Instance name
                </RadixForm.Label>
                <div className="flex flex-col gap-0">
                  <RadixForm.Control asChild>
                    <Input
                      required
                      placeholder="Instance 1"
                      maxLength={25}
                      id="instance-name"
                      value={instanceName}
                      onChange={(e) => setInstanceName(e.target.value)}
                    />
                  </RadixForm.Control>
                  <RadixForm.Message
                    className="flex px-8 py-4"
                    match="valueMissing"
                    asChild
                  >
                    <HiMiniExclamationCircle className="size-20" />
                    <p className="subtext text-red">Please enter a name</p>
                  </RadixForm.Message>
                  <RadixForm.Message
                    className="flex px-8 py-4"
                    match="tooLong"
                    asChild
                  >
                    <HiMiniExclamationCircle className="size-20" />
                    <p className="subtext text-red">Name is too long</p>
                  </RadixForm.Message>
                </div>
              </RadixForm.Field>
              <RadixForm.Field
                name="Minecraft version"
                className="flex flex-col gap-8"
              >
                <RadixForm.Label className="sub text-text-subtle ">
                  Minecraft version
                </RadixForm.Label>
                <div className="flex flex-col gap-0">
                  <RadixForm.Control asChild>
                    <Select
                      required
                      defaultValue="1.20.6"
                      label="Minecraft version"
                      onValueChange={(newValue) => {
                        setInstanceVersion(newValue);
                      }}
                    >
                      <SelectGroup>
                        <SelectItem value="1.20.6">1.20.6</SelectItem>
                        <SelectItem value="1.20.5">1.20.5</SelectItem>
                        <SelectItem value="1.20.4">1.20.4</SelectItem>
                      </SelectGroup>
                    </Select>
                  </RadixForm.Control>
                  <RadixForm.Message
                    className="flex px-8 py-4 text-red"
                    match="valueMissing"
                  >
                    <HiMiniExclamationCircle />
                    Please enter a version
                  </RadixForm.Message>
                </div>
              </RadixForm.Field>

              <div className="flex gap-16">
                <RadixForm.Submit asChild>
                  <Button colour="primary">Create</Button>
                </RadixForm.Submit>
                <DialogClose>
                  <Button colour="secondary">Cancel</Button>
                </DialogClose>
              </div>
            </RadixForm.Root>
          </RadixTabs.Content>
          <RadixTabs.Content
            value="modrinth"
            className="radix-state-inactive:hidden flex flex-col gap-20 mt-16"
          >
            <h3 className="h3">Modrinth Modpacks</h3>
            <p className="body">Coming soon!</p>
          </RadixTabs.Content>
          <RadixTabs.Content
            value="curseforge"
            className="radix-state-inactive:hidden flex flex-col gap-20 mt-16"
          >
            <h3 className="h3">Curseforge Modpacks</h3>
            <p className="body">Coming soon!</p>
          </RadixTabs.Content>
        </RadixTabs.Root>
      </DialogContent>
    </Dialog>
  );
};
