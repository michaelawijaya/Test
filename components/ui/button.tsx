import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/lib/utils";

// NOTE: Alangkah baiknya jika menggunakan svg, sematkan dalam tag img (ambil dari public) karena tidak ada bg-clip untuk svg :)

const buttonVariants = cva(
  // Base classes for button variants

  "peer inline-flex w-full items-center justify-center gap-[11px] whitespace-nowrap font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-[24px] [&_svg]:shrink-0 md:[&_svg]:size-[18px] dark:ring-offset-neutral-900 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary-70 text-neutral-100 shadow-[4px_4px_28px_0px_#0000000A] hover:shadow-[0px_4px_8px_0px_#7139DF47] active:shadow-[4px_4px_32px_0px_#00000029_inset,-4px_-4px_32px_0px_#00000029_inset] disabled:opacity-30",
        primary:
          "bg-primary-70 text-neutral-100 shadow-[4px_4px_28px_0px_#0000000A] hover:shadow-[0px_4px_8px_0px_#7139DF47] active:shadow-[4px_4px_32px_0px_#00000029_inset,-4px_-4px_32px_0px_#00000029_inset] disabled:opacity-30",
        secondary:
          "bg-secondary-70 text-neutral-100 shadow-[4px_4px_28px_0px_#0000000A] hover:shadow-[0px_4px_8px_0px_#7139DF47] active:shadow-[4px_4px_32px_0px_#00000029_inset,-4px_-4px_32px_0px_#00000029_inset] disabled:opacity-30",
        tertiary:
          "bg-tertiary-70 text-neutral-100 shadow-[4px_4px_28px_0px_#0000000A] hover:shadow-[0px_4px_8px_0px_#7139DF47] active:shadow-[4px_4px_32px_0px_#00000029_inset,-4px_-4px_32px_0px_#00000029_inset] disabled:opacity-30",
        ghost:
          "bg-none border-3 border-tertiary-80 text-tertiary-80 shadow-[4px_4px_28px_0px_#0000000A] hover:shadow-[0px_4px_8px_0px_#7139DF47] active:shadow-[4px_4px_32px_0px_#00000029_inset,-4px_-4px_32px_0px_#00000029_inset] disabled:opacity-30",
        outline:
          "border-2 border-primary-500 bg-transparent text-primary-500 hover:bg-primary-10 disabled:opacity-70",
        link: "w-fit px-0 py-0 text-primary-500 underline-offset-4 hover:underline disabled:opacity-70",
        destructive:
          "bg-red-100 text-neutral-100 hover:bg-red-200 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] disabled:opacity-70",
      },
      size: {
        default:
          "h-12 max-md:h-[42px] min-w-[170px] max-md:min-w-[145px] rounded-[12px] max-md:rounded-[8px] px-6 text-s7 max-md:text-s8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  borderClassName?: string;
  asChild?: boolean;
  grid?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      // <div className={cn("flex relative", grid)}>
      <Comp
        className={cn("cursor-pointer", buttonVariants({ variant, className }))}
        disabled={disabled}
        ref={ref}
        {...props}
      />
      // </div>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
