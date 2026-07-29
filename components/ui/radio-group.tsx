"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";

import { cn } from "~/lib/utils";

const RadioGroupValueContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | null>(null);

const radioGroupItemVariants = cva(
  "group/radio-group-item peer relative flex aspect-square size-6 shrink-0 items-center justify-center rounded-full border-2 bg-transparent outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 cursor-pointer",
  {
    variants: {
      color: {
        primary: "border-primary-80 text-primary-80",
        "primary-light": "border-primary-20 text-primary-20",
        secondary: "border-secondary-80 text-secondary-80",
        "secondary-light": "border-secondary-20 text-secondary-20",
        tertiary: "border-tertiary-70 text-tertiary-70",
        "tertiary-light": "border-tertiary-20 text-tertiary-20",
        orange: "border-[#C17044] text-[#C17044]",
        "orange-light": "border-[#EACFC1] text-[#EACFC1]",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  },
);

type RadioGroupProps = Omit<
  React.ComponentProps<typeof RadioGroupPrimitive.Root>,
  "value"
> & {
  value?: string;
};

function RadioGroup({
  className,
  defaultValue,
  onValueChange,
  value,
  ...props
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const currentValue = value ?? internalValue;

  const handleValueChange = React.useCallback(
    (nextValue: string) => {
      if (value === undefined) {
        setInternalValue(nextValue);
      }
      onValueChange?.(nextValue);
    },
    [onValueChange, value],
  );

  return (
    <RadioGroupValueContext.Provider
      value={{ value: currentValue, onValueChange: handleValueChange }}
    >
      <RadioGroupPrimitive.Root
        className={cn("grid w-full cursor-pointer gap-2", className)}
        data-slot="radio-group"
        onValueChange={handleValueChange}
        value={currentValue}
        {...props}
      />
    </RadioGroupValueContext.Provider>
  );
}

type RadioGroupItemProps = Omit<
  React.ComponentProps<typeof RadioGroupPrimitive.Item>,
  "color"
> &
  VariantProps<typeof radioGroupItemVariants>;

function RadioGroupItem({ className, color, ...props }: RadioGroupItemProps) {
  const radioGroupValue = React.useContext(RadioGroupValueContext);
  const itemValue = props.value;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(event);

    if (event.defaultPrevented || radioGroupValue?.value !== itemValue) {
      return;
    }

    radioGroupValue.onValueChange("");
  };

  return (
    <RadioGroupPrimitive.Item
      className={cn(radioGroupItemVariants({ color, className }))}
      data-slot="radio-group-item"
      {...props}
      onClick={handleClick}
    >
      <RadioGroupPrimitive.Indicator
        className="flex size-4 cursor-pointer items-center justify-center"
        data-slot="radio-group-indicator"
      >
        <span className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem, radioGroupItemVariants };
export type { RadioGroupItemProps };
