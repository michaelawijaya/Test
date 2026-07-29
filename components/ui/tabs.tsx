"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Diamond,
} from "lucide-react";
import { cn } from "~/lib/utils";

type TabsVariant = "transparent" | "colored";
type TabsOrientation = "horizontal" | "vertical";
type TabsDecor = "numbered" | "diamonds";
type TabsContextValue = {
  value?: string;
  setValue?: (value: string) => void;
  orientation?: TabsOrientation;
};
type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;
type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;

interface TabsListProps extends React.ComponentProps<
  typeof TabsPrimitive.List
> {
  variant?: TabsVariant;
  decor?: TabsDecor;
  showArrows?: boolean;
}

const TabsContext = React.createContext<TabsContextValue>({});

const tabsListVariants = cva(
  "px-2 py-3 rounded-3xl text-primary-70 group/tabs-list inline-flex w-fit items-center justify-center group-data-[orientation=horizontal]:min-h-18 group-data-[orientation=vertical]:h-fit group-data-[orientation=vertical]:flex-col",
  {
    variants: {
      variant: {
        transparent: "bg-transparent gap-2",
        colored: "bg-primary-10",
      },
    },
  },
);

function Tabs({
  value: controlledValue,
  orientation = "horizontal",
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = controlledValue ?? internalValue;

  const handleValueChange = (next: string) => {
    if (controlledValue === undefined) {
      setInternalValue(next);
    }
    onValueChange?.(next);
  };

  return (
    <TabsContext.Provider
      value={{ value, setValue: handleValueChange, orientation }}
    >
      <TabsPrimitive.Root
        className={cn(
          "group/tabs flex w-full gap-4 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row", // Increased layout gap
          className,
        )}
        data-slot="tabs"
        onValueChange={handleValueChange}
        orientation={orientation}
        value={value}
        {...props}
      >
        {children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  );
}

function TabsList({
  className,
  variant = "transparent",
  showArrows = false,
  decor = "numbered",
  children,
  ...props
}: TabsListProps & VariantProps<typeof tabsListVariants>) {
  const { value, setValue, orientation } = React.useContext(TabsContext);
  const isVertical = orientation === "vertical";

  const values = React.Children.toArray(children)
    .filter(React.isValidElement<TabsTriggerProps>)
    .map((child) => child.props.value);

  const prev = () => {
    if (!(value && setValue)) {
      return;
    }

    const index = values.indexOf(value);

    if (index > 0) {
      setValue(values[index - 1]);
    }
  };

  const next = () => {
    if (!(value && setValue)) {
      return;
    }

    const index = values.indexOf(value);

    if (index < values.length - 1) {
      setValue(values[index + 1]);
    }
  };

  const renderDecor = (index: number) => {
    switch (decor) {
      case "numbered":
        return (
          <div className="group-hover:bg-primary-40 group-data-[state=active]:bg-primary-40 flex size-6 items-center justify-center rounded-full bg-neutral-300 text-sm font-semibold transition-colors">
            {index + 1}
          </div>
        );

      case "diamonds":
        return <Diamond className="size-5 shrink-0" />;

      default:
        return null;
    }
  };

  const arrowButtonClasses = cn(
    "absolute p-1.5 rounded-full transition-all cursor-pointer z-10",
    "disabled:bg-neutral-400 disabled:pointer-events-none",
    "bg-primary-30 hover:bg-primary-40",
    "text-neutral-700 text-primary-500",
    isVertical
      ? "left-1/2 translate-x-0 -translate-x-1/2"
      : "top-1/2 -translate-y-1/2",
  );

  return (
    <div className={cn("relative w-fit", isVertical && "h-full")}>
      <TabsPrimitive.List
        className={cn(
          tabsListVariants({ variant }),
          isVertical
            ? "h-full w-full min-w-55 flex-col gap-3 p-3"
            : "min-h-20 w-fit",
          showArrows && (isVertical ? "py-16" : "px-16"),
          className,
        )}
        data-slot="tabs-list"
        {...props}
      >
        {showArrows && (
          <button
            className={cn(arrowButtonClasses, isVertical ? "top-4" : "left-4")}
            disabled={values.indexOf(value ?? "") === 0}
            onClick={prev}
            type="button"
          >
            {isVertical ? (
              <ArrowUp className="size-5" />
            ) : (
              <ArrowLeft className="size-5" />
            )}
          </button>
        )}

        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement<TabsTriggerProps>(child)) {
            return child;
          }

          const decorElement = renderDecor(index);

          if (!decorElement) {
            return child;
          }

          return React.cloneElement(child, {
            children: (
              <div className="flex items-center gap-2">
                {decorElement}
                <span>{child.props.children}</span>
              </div>
            ),
          });
        })}

        {showArrows && (
          <button
            className={cn(
              arrowButtonClasses,
              isVertical ? "bottom-4" : "right-4",
            )}
            disabled={values.indexOf(value ?? "") === values.length - 1}
            onClick={next}
            type="button"
          >
            {isVertical ? (
              <ArrowDown className="size-5" />
            ) : (
              <ArrowRight className="size-5" />
            )}
          </button>
        )}
      </TabsPrimitive.List>
    </div>
  );
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        // Layout, Sizing & Alignment
        "group text-md relative inline-flex flex-1 items-center justify-center gap-5 px-4 py-3 font-semibold whitespace-nowrap text-neutral-700 select-none",

        "data-[orientation=horizontal]:mx-2 data-[orientation=horizontal]:h-[calc(100%-1px)]",
        // 3. FIX: Swapped shallow margins (my-1) for taller button padding (py-4)
        "data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:py-4",

        "transition-all disabled:pointer-events-none disabled:opacity-50",

        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1",

        "rounded-2xl border border-transparent",
        "after:bg-foreground after:absolute after:opacity-0 after:transition-opacity",
        "group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:-bottom-1.25 group-data-[orientation=horizontal]/tabs:after:h-0.5",
        "group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5",

        // 4. FIX: Replaced broken "data-active" with valid Radix state selector "data-[state=active]"
        "group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",

        "hover:bg-primary-30/60 hover:text-primary-70",
        "data-[state=active]:bg-primary-40/60 data-[state=active]:text-primary-70",
        "dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground",

        className,
      )}
      data-slot="tabs-trigger"
      {...props}
    >
      <span>{children}</span>
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn("flex-1 text-sm outline-none", className)}
      data-slot="tabs-content"
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
