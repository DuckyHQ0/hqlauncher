import React, { ReactNode } from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type MorphUIAlertDialogProps = {
  children: ReactNode;
} & AlertDialogProps;

export const AlertDialog = ({ children }: MorphUIAlertDialogProps) => (
  <RadixAlertDialog.Root>{children}</RadixAlertDialog.Root>
);

export const AlertDialogTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <RadixAlertDialog.Trigger className={className} asChild>
    {children}
  </RadixAlertDialog.Trigger>
);
export const AlertDialogCancel = ({ children }: { children: ReactNode }) => (
  <RadixAlertDialog.Cancel asChild>{children}</RadixAlertDialog.Cancel>
);
export const AlertDialogAction = ({ children }: { children: ReactNode }) => (
  <RadixAlertDialog.Action asChild>{children}</RadixAlertDialog.Action>
);

export const AlertDialogContent = ({
  children,
  description,
  title,
}: {
  children: ReactNode;
  description: string;
  title: string;
}) => (
  <RadixAlertDialog.Portal>
    <RadixAlertDialog.Overlay className="bg-black/25 backdrop-blur-sm fixed inset-0 data-[state=open]:animate-fade-in" />
    <RadixAlertDialog.Content
      className={`data-[state=open]:animate-fade-in fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] bg-fg-1 border border-stroke-1 backdrop-blur-fg-1 p-32 flex flex-col gap-12 rounded-out focus:outline-none text-white ${outfit.className}`}
    >
      <RadixAlertDialog.Title className="h3">{title}</RadixAlertDialog.Title>
      <RadixAlertDialog.Description className="body">
        {description}
      </RadixAlertDialog.Description>
      <div className="flex gap-16">{children}</div>
    </RadixAlertDialog.Content>
  </RadixAlertDialog.Portal>
);
