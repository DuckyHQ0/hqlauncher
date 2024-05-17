import * as RadixCheckbox from "@radix-ui/react-checkbox";
import React from "react";
import { HiMiniCheck } from "react-icons/hi2";

export const Checkbox = ({
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
    <div className="flex gap-8">
      <RadixCheckbox.Root
        className="w-24 h-24 bg-fg-2 radix-disabled:bg-fg-2-disabled radix-disabled:cursor-not-allowed border border-stroke-2 rounded-small flex justify-center items-center"
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        id="c1"
      >
        <RadixCheckbox.Indicator className="text-brand-blue radix-disabled:text-brand-blue/30 radix-state-checked:animate-scale-in radix-state-unchecked:animate-scale-out">
          <HiMiniCheck />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className="text-body text-text-1" htmlFor="c1">
        {label}
      </label>
    </div>
  );
};
