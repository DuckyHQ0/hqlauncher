import React, { ReactNode } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type MorphUIDialogProps = {
  children: ReactNode;
} & DialogProps;

export const Dialog = ({ children }: MorphUIDialogProps) => (
  <RadixDialog.Root>{children}</RadixDialog.Root>
);

export const DialogTrigger = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Trigger>{children}</RadixDialog.Trigger>
);
export const DialogClose = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Close>{children}</RadixDialog.Close>
);
export const DialogTitle = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Title>{children}</RadixDialog.Title>
);
export const DialogDesciption = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Description>{children}</RadixDialog.Description>
);
export const DialogContent = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Portal>
    <RadixDialog.Overlay className="bg-black/25 backdrop-blur-sm fixed inset-0 data-[state=open]:animate-fade-in" />
    <RadixDialog.Content
      className={`data-[state=open]:animate-fade-in fixed top-[50%] left-[50%] max-h-[85vh] max-w-[500px] translate-x-[-50%] translate-y-[-50%] bg-fg-1 border border-stroke-1 backdrop-blur-fg-1 p-32 flex flex-col gap-20 rounded-out focus:outline-none text-white ${outfit.className}`}
    >
      {children}
    </RadixDialog.Content>
  </RadixDialog.Portal>
);
