import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { ReactNode } from "react";

export interface RadioGroupProps {
  children: ReactNode;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const RadioGroup = ({
  children,
  name,
  disabled,
  required,
  value,
  onValueChange,
  defaultValue,
}: RadioGroupProps) => {
  return (
    <RadixRadioGroup.Root
      required={required}
      disabled={disabled}
      value={value}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      name={name}
      className="flex flex-col gap-12"
    >
      {children}
    </RadixRadioGroup.Root>
  );
};

export const RadioGroupItem = ({
  value,
  id,
  label = "Radio item",
  disabled = false,
  required = false,
}: {
  value: string;
  id?: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
}) => {
  return (
    <div className="flex gap-8">
      <RadixRadioGroup.Item
        className="size-24 rounded-24 bg-fg-2 border border-stroke-2 shadow-fg-2 flex justify-center items-center disabled:cursor-not-allowed disabled:bg-fg-2-disabled"
        id={id}
        value={value}
        disabled={disabled}
        required={required}
      >
        <RadixRadioGroup.Indicator className="size-12 bg-accent disabled:bg-accent/30 rounded-24 radix-state-checked:animate-scale-in radix-state-unchecked:animate-scale-out" />
      </RadixRadioGroup.Item>
      <label
        htmlFor={id}
        className="body text-text-1 radix-disabled:text-text-disabled"
      >
        {label}
      </label>
    </div>
  );
};
