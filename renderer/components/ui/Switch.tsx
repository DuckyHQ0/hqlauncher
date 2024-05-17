import React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";

export const Switch = ({
  label,
  disabled,
  defaultChecked,
  required,
}: {
  label: string;
  disabled: boolean;
  defaultChecked: boolean;
  required: boolean;
}) => {
  return (
    <div className="flex gap-8 items-center">
      <RadixSwitch.Root
        className="w-64 h-36 rounded-[999px] bg-fg-2 border border-stroke-2 radix-disabled:cursor-not-allowed radix-disabled:bg-fg-2-disabled"
        disabled={disabled}
        defaultChecked={defaultChecked}
        required={required}
      >
        <RadixSwitch.Thumb className="block w-[28px] h-[28px] bg-white/5 radix-disabled:bg-white/[.03] rounded-[999px] transition-all ease-out duration-150 translate-x-[3px] will-change-transform radix-state-checked:translate-x-[31px] radix-state-checked:bg-brand-blue radix-disabled:radix-state-checked:bg-brand-blue/30" />
      </RadixSwitch.Root>

      <label className="text-body text-text-1" htmlFor="c1">
        {label}
      </label>
    </div>
  );
};
