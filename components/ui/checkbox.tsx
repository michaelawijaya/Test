import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";

import { cn } from "~/lib/utils";

const checkboxVariants = cva(
  "peer relative flex size-6 shrink-0 items-center justify-center border-3 transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 cursor-pointer",
  {
    variants: {
      type: {
        outline: "rounded-[2px] bg-transparent data-checked:text-neutral-100",
        solid: "rounded-[2px]",
        circle: "rounded-full",
      },
      color: {
        primary:
          "border-primary-80 text-primary-80 data-checked:border-primary-80 data-checked:bg-primary-80 data-checked:text-neutral-100",
        "primary-light":
          "border-primary-20 text-primary-20 data-checked:border-primary-20 data-checked:bg-primary-20 data-checked:text-neutral-100",
        secondary:
          "border-secondary-80 text-secondary-80 data-checked:border-secondary-80 data-checked:bg-secondary-80 data-checked:text-neutral-100",
        "secondary-light":
          "border-secondary-20 text-secondary-20 data-checked:border-secondary-20 data-checked:bg-secondary-20 data-checked:text-neutral-100",
        tertiary:
          "border-tertiary-70 text-tertiary-70 data-checked:border-tertiary-70 data-checked:bg-tertiary-70 data-checked:text-neutral-100",
        "tertiary-light":
          "border-tertiary-20 text-tertiary-20 data-checked:border-tertiary-20 data-checked:bg-tertiary-20 data-checked:text-neutral-100",
        orange:
          "border-[#C17044] text-[#C17044] data-checked:border-[#C17044] data-checked:bg-[#C17044] data-checked:text-neutral-100",
        "orange-light":
          "border-[#EACFC1] text-[#EACFC1] data-checked:border-[#EACFC1] data-checked:bg-[#EACFC1] data-checked:text-neutral-100",
      },
    },
    compoundVariants: [
      {
        type: "outline",
        color: "primary",
        className:
          "data-checked:bg-transparent data-checked:text-primary-80 border-2",
      },
      {
        type: "outline",
        color: "primary-light",
        className:
          "data-checked:bg-transparent data-checked:text-primary-20 border-2",
      },
      {
        type: "outline",
        color: "secondary",
        className:
          "data-checked:bg-transparent data-checked:text-secondary-80 border-2",
      },
      {
        type: "outline",
        color: "secondary-light",
        className:
          "data-checked:bg-transparent data-checked:text-secondary-20 border-2",
      },
      {
        type: "outline",
        color: "tertiary",
        className:
          "data-checked:bg-transparent data-checked:text-tertiary-70 border-2",
      },
      {
        type: "outline",
        color: "tertiary-light",
        className:
          "data-checked:bg-transparent data-checked:text-tertiary-20 border-2",
      },
      {
        type: "outline",
        color: "orange",
        className:
          "data-checked:bg-transparent data-checked:text-[#c87140] border-2",
      },
      {
        type: "outline",
        color: "orange-light",
        className:
          "data-checked:bg-transparent data-checked:text-[#EACFC1] border-2",
      },
    ],
    defaultVariants: {
      type: "solid",
      color: "primary",
    },
  },
);

type CheckboxProps = Omit<
  React.ComponentProps<typeof CheckboxPrimitive.Root>,
  "color" | "type"
> &
  VariantProps<typeof checkboxVariants>;

function Checkbox({ className, color, type, ...props }: CheckboxProps) {
  const iconStrokeWidth = type === "outline" ? 2.5 : 3.5;

  return (
    <CheckboxPrimitive.Root
      className={cn(checkboxVariants({ color, type, className }))}
      data-slot="checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="grid place-content-center text-current transition-none [&>svg]:size-4"
        data-slot="checkbox-indicator"
      >
        <CheckIcon strokeWidth={iconStrokeWidth} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox, checkboxVariants };
export type { CheckboxProps };
