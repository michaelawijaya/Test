"use client";

import { Diamond } from "lucide-react";
import * as React from "react";
import { cn } from "~/lib/utils";

interface ChipProps extends Omit<React.ComponentProps<"button">, "onClick"> {
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      className,
      selected: selectedProp,
      defaultSelected = false,
      onSelectedChange,
      children,
      ...props
    },
    ref,
  ) => {
    const [selectedState, setSelectedState] = React.useState(defaultSelected);
    const selected = selectedProp ?? selectedState;

    const handleClick = () => {
      const next = !selected;
      setSelectedState(next);
      onSelectedChange?.(next);
    };

    return (
      <button
        aria-pressed={selected}
        className={cn(
          "inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 pt-3 pb-2 font-bold whitespace-nowrap transition-colors duration-150 max-md:gap-1.5 max-md:px-4 max-md:pt-1.5 max-md:pb-1",
          "text-h7 font-league-spartan text-tertiary-80 max-md:text-h8 font-bold",
          // default
          "text-tertiary-80 bg-[#C0FCF7B2]",
          // hover (unselected) — soft radial highlight, lighter than default
          "shadow-[inset_-4px_-4px_12px_0px_#066D6414] hover:shadow-[inset_4px_4px_12px_0px_#066D6414]",
          // selected — solid dark teal, white text/icon
          "data-[selected=true]:bg-tertiary-80 data-[selected=true]:text-neutral-100",
          // hover + selected — slightly lighter radial highlight on the dark bg
          "data-[selected=true]:hover:bg-tertiary-70",
          // shadow
          "shadow-[2px_2px_24px_0px_#0000000A] drop-shadow-2xl",
          className,
        )}
        data-selected={selected}
        data-slot="chip"
        onClick={handleClick}
        ref={ref}
        type="button"
        {...props}
      >
        <Diamond className="size-6 shrink-0 font-bold max-md:size-3.5" />
        {children}
        <Diamond className="size-6 shrink-0 font-bold max-md:size-3.5" />
      </button>
    );
  },
);
Chip.displayName = "Chip";

export { Chip };
export type { ChipProps };
