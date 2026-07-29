"use client";

import { Check, Info, X } from "lucide-react";
import * as React from "react";
import { cn } from "~/lib/utils";

type AlertVariant = "info" | "error" | "warning" | "success";

interface AlertContextValue {
  variant: AlertVariant;
  dismiss: () => void;
}

const AlertContext = React.createContext<AlertContextValue | null>(null);

function useAlertContext(component: string) {
  const ctx = React.useContext(AlertContext);
  if (!ctx) {
    throw new Error(`<${component} /> must be used inside <Alert>`);
  }
  return ctx;
}

/** @type {Record<import('./alert').AlertVariant, { bg: string; accent: string; iconBg: string; title: string; action: string }>} */
const styles = {
  info: {
    bg: "bg-[#C9D3E8]",
    accent: "bg-secondary-80",
    iconBg: "bg-secondary-90",
    title: "text-secondary-90",
    action: "bg-[#99B5F299] active:bg-[#99B5F2]",
    xButton: "text-secondary-80",
  },
  error: {
    bg: "bg-red-100/10",
    accent: "bg-red-200",
    iconBg: "bg-red-200",
    title: "text-red-200",
    action: "bg-[#FB374899] active:bg-[#FB3748E5]",
    xButton: "text-[#AF000F]",
  },
  warning: {
    bg: "bg-yellow-100/10",
    accent: "bg-yellow-200",
    iconBg: "bg-yellow-200",
    title: "text-yellow-200",
    action: "bg-[#FFDB4399] active:bg-[#FFDB43E5]",
    xButton: "text-[#B89500]",
  },
  success: {
    bg: "bg-green-100/10",
    accent: "bg-green-200",
    iconBg: "bg-green-200",
    title: "text-green-200",
    action: "bg-[#84EBB499] active:bg-[#84EBB4E5]",
    xButton: "text-[#1F854F]",
  },
};

interface AlertProps extends React.ComponentProps<"div"> {
  variant?: AlertVariant;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function Alert({
  variant = "info",
  open: openProp,
  defaultOpen = true,
  onOpenChange,
  className,
  children,
  ...props
}: AlertProps) {
  const [openState, setOpenState] = React.useState(defaultOpen);
  const open = openProp ?? openState;

  const dismiss = React.useCallback(() => {
    setOpenState(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  if (!open) {
    return null;
  }

  return (
    <AlertContext.Provider value={{ variant, dismiss }}>
      <div
        className={cn(
          "group/alert llg:gap-x-4 relative grid w-fit max-w-[520px] min-w-[318px] grid-cols-[auto_1fr] gap-y-0.5 overflow-hidden rounded-lg py-3 pr-14 pl-4 shadow-[4px_4px_20px_0px_#00000014] max-md:max-w-[calc(100vw-2rem)] max-md:min-w-[260px] max-md:gap-x-2 max-md:py-2.5 max-md:pr-11 max-md:pl-3 md:gap-x-3",
          styles[variant].bg,
          className,
        )}
        data-slot="alert"
        data-variant={variant}
        role="alert"
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-y-0 left-0 w-3 max-md:w-3",
            styles[variant].accent,
          )}
        />
        {children}
      </div>
    </AlertContext.Provider>
  );
}

function AlertIcon({ className }: { className?: string }) {
  const { variant } = useAlertContext("AlertIcon");

  const wrapperClass = cn(
    "row-span-2 flex size-[45px] shrink-0 lg:ml-3 max-md:ml-3 md:ml-3 self-center items-center justify-center max-md:size-10",
    className,
  );

  if (variant === "info") {
    return (
      <div className={wrapperClass} data-slot="alert-icon">
        <Info className="text-secondary-90 size-full" strokeWidth={1.75} />
      </div>
    );
  }

  if (variant === "warning") {
    return (
      <div className={wrapperClass} data-slot="alert-icon">
        <svg
          className="size-full"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-yellow-200"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2.001-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.498-2.598-4.5L9.4 3.003z"
          />
          <rect fill="white" height="5" rx="0.75" width="1.5" x="11.25" y="8" />
          <circle cx="12" cy="16.25" fill="white" r="1" />
        </svg>
      </div>
    );
  }

  const Icon = variant === "error" ? X : Check;
  return (
    <div
      className={cn(wrapperClass, "rounded-full", styles[variant].iconBg)}
      data-slot="alert-icon"
    >
      <Icon className="size-1/2 text-neutral-100" strokeWidth={3} />
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useAlertContext("AlertTitle");
  return (
    <div
      className={cn(
        "text-s6 font-aileron max-md:text-h8 font-bold",
        styles[variant].title,
        className,
      )}
      data-slot="alert-title"
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-b9 font-ubuntu font-ubuntu mr-5 text-neutral-800 max-md:text-[10px]",
        className,
      )}
      data-slot="alert-description"
      {...props}
    />
  );
}

function AlertAction({
  className,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const { variant, dismiss } = useAlertContext("AlertAction");

  return (
    <div
      className={cn(
        "absolute inset-y-0 right-0 flex w-14 items-center justify-center transition-colors duration-150 max-md:w-11",
        styles[variant].action,
      )}
      data-slot="alert-action"
    >
      <button
        aria-label="Dismiss alert"
        className={cn(
          "cursor-pointer rounded-full p-1 transition-opacity hover:opacity-70",
          styles[variant].xButton,
          className,
        )}
        onClick={(e) => {
          onClick?.(e);
          dismiss();
        }}
        type="button"
        {...props}
      >
        <X className="size-4 max-md:size-3.5" />
      </button>
    </div>
  );
}

export { Alert, AlertIcon, AlertTitle, AlertDescription, AlertAction };
export type { AlertProps, AlertVariant };
