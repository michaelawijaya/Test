"use client";

import * as React from "react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

import { cn } from "~/lib/utils";
import {
  CheckIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";

type DropdownMenuVariant = "primary" | "secondary";

const dropdownMenuVariantClasses: Record<
  DropdownMenuVariant,
  {
    trigger: string;
    content: string;
    item: string;
    label: string;
    separator: string;
    icon: string;
  }
> = {
  primary: {
    trigger:
      "bg-primary-70 hover:bg-primary-70 border-3 border-primary-10 font-semibold transition-colors data-open:bg-primary-50",
    content:
      "bg-primary-10 text-primary-70 -mt-1 rounded-b-md transition-colors",
    item: "pl-7 py-2 hover:bg-primary-20 font-semibold text-md",
    label: "pl-7 py-2 text-primary-70 font-bold text-md",
    separator: "bg-primary-20 my-1",
    icon: "text-white",
  },
  secondary: {
    trigger:
      "bg-secondary-80 hover:bg-secondary-70 border-3 border-secondary-10 font-semibold transition-colors data-open:bg-[#2959C0]",
    content:
      "bg-secondary-10 text-secondary-70 -mt-1 rounded-b-md transition-colors",
    item: "pl-7 py-2 hover:bg-secondary-20 font-semibold text-md",
    label: "pl-7 py-2 text-secondary-70 font-bold text-md",
    separator: "bg-secondary-20 my-1",
    icon: "text-white",
  },
};

const DropdownMenuVariantContext =
  React.createContext<DropdownMenuVariant>("primary");

function useDropdownMenuVariant() {
  return React.useContext(DropdownMenuVariantContext);
}

interface DropdownMenuProps extends React.ComponentProps<
  typeof DropdownMenuPrimitive.Root
> {
  variant?: DropdownMenuVariant;
}

function DropdownMenu({
  variant = "primary",
  children,
  ...props
}: DropdownMenuProps) {
  return (
    <DropdownMenuVariantContext.Provider value={variant}>
      <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props}>
        {children}
      </DropdownMenuPrimitive.Root>
    </DropdownMenuVariantContext.Provider>
  );
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  const dropdownVariant = useDropdownMenuVariant();
  const variantClasses = dropdownMenuVariantClasses[dropdownVariant];

  return (
    <div className="relative inline-flex w-full items-center">
      <DropdownMenuPrimitive.Trigger
        className={cn(
          "peer text-secondary-10 flex w-full items-center justify-between pr-8 data-open:rounded-b-none",
          variantClasses.trigger,
          className,
        )}
        {...props}
      />
      <ChevronDownIcon
        className={cn(
          "pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 peer-data-[state=open]:hidden",
          variantClasses.icon,
        )}
      />
      <ChevronUpIcon
        className={cn(
          "pointer-events-none absolute top-1/2 right-2 hidden -translate-y-1/2 peer-data-[state=open]:inline",
          variantClasses.icon,
        )}
      />
    </div>
  );
}

function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  const dropdownVariant = useDropdownMenuVariant();
  const variantClasses = dropdownMenuVariantClasses[dropdownVariant];
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        align={align}
        className={cn(
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-0 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-none bg-transparent p-0 shadow-none ring-0 duration-100 data-[state=closed]:overflow-hidden",
          variantClasses.content,
          className,
        )}
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  const dropdownVariant = useDropdownMenuVariant();
  const variantClasses = dropdownMenuVariantClasses[dropdownVariant];
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-none px-1.5 py-1 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        variantClasses.item,
        "",
        className,
      )}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  inset?: boolean;
}) {
  const dropdownVariant = useDropdownMenuVariant();
  const variantClasses = dropdownMenuVariantClasses[dropdownVariant];
  return (
    <DropdownMenuPrimitive.CheckboxItem
      checked={checked}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-none py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        variantClasses.item,
        className,
      )}
      data-inset={inset}
      data-slot="dropdown-menu-checkbox-item"
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none absolute right-2 flex items-center justify-center",
          variantClasses.icon,
        )}
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  inset?: boolean;
}) {
  const dropdownVariant = useDropdownMenuVariant();
  const variantClasses = dropdownMenuVariantClasses[dropdownVariant];
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-none py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        variantClasses.item,
        className,
      )}
      data-inset={inset}
      data-slot="dropdown-menu-radio-item"
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none absolute right-2 flex items-center justify-center",
          variantClasses.icon,
        )}
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  const dropdownVariant = useDropdownMenuVariant();
  const variantClasses = dropdownMenuVariantClasses[dropdownVariant];
  return (
    <DropdownMenuPrimitive.Label
      className={cn(
        "px-1.5 py-1 text-xs font-medium data-inset:pl-7",
        variantClasses.label,
        className,
      )}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  const dropdownVariant = useDropdownMenuVariant();
  const variantClasses = dropdownMenuVariantClasses[dropdownVariant];
  return (
    <DropdownMenuPrimitive.Separator
      className={cn("", variantClasses.separator, className)}
      data-slot="dropdown-menu-separator"
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  const dropdownVariant = useDropdownMenuVariant();
  const variantClasses = dropdownMenuVariantClasses[dropdownVariant];
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        "data-open:bg-accent data-open:text-secondary-10 flex cursor-default items-center gap-1.5 rounded-none px-1.5 py-1 text-sm outline-hidden select-none data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        variantClasses.item,
        className,
      )}
      data-inset={inset}
      data-slot="dropdown-menu-sub-trigger"
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(
        "text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 min-w-24 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-none bg-transparent p-0 shadow-none ring-0 duration-100",
        className,
      )}
      data-slot="dropdown-menu-sub-content"
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
