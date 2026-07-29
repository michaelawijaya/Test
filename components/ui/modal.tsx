"use client";

import * as React from "react";
import { CheckSquare, X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { cn } from "~/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types + Context                                                    */
/* ------------------------------------------------------------------ */

type ModalAlignment = "center" | "wide";

interface ModalContextValue {
  alignment: ModalAlignment;
  icon?: React.ReactNode;
  iconClassName?: string;
  showIcon: boolean;
}

const ModalContext = React.createContext<ModalContextValue>({
  alignment: "center",
  icon: undefined,
  iconClassName: undefined,
  showIcon: true,
});

function useModalCtx() {
  return React.useContext(ModalContext);
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */

function Modal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="modal" {...props} />;
}

/* ------------------------------------------------------------------ */
/*  Trigger                                                            */
/* ------------------------------------------------------------------ */

function ModalTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="modal-trigger" {...props} />;
}

/* ------------------------------------------------------------------ */
/*  Close                                                              */
/* ------------------------------------------------------------------ */

function ModalClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="modal-close" {...props} />;
}

/* ------------------------------------------------------------------ */
/*  Overlay                                                            */
/* ------------------------------------------------------------------ */

function ModalOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/40",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      data-slot="modal-overlay"
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

interface ModalContentProps extends React.ComponentProps<
  typeof DialogPrimitive.Content
> {
  alignment?: ModalAlignment;
  icon?: React.ReactNode;
  iconClassName?: string;
  showCloseButton?: boolean;
  showIcon?: boolean;
}

type ModalIconElement = React.ReactElement<{
  "aria-hidden"?: boolean | "true" | "false";
  className?: string;
  strokeWidth?: number;
}>;

function renderModalIcon(icon: React.ReactNode, className: string) {
  if (React.isValidElement(icon)) {
    const iconElement = icon as ModalIconElement;

    return React.cloneElement(iconElement, {
      "aria-hidden": iconElement.props["aria-hidden"] ?? true,
      className: cn(className, iconElement.props.className),
    });
  }

  return <span className={className}>{icon}</span>;
}

function ModalContent({
  className,
  children,
  alignment = "center",
  icon,
  iconClassName,
  showCloseButton = false,
  showIcon = true,
  ...props
}: ModalContentProps) {
  const modalIcon = icon ?? <CheckSquare strokeWidth={2.5} />;

  const paddingClass =
    alignment === "wide" ? "px-8 py-8 sm:py-9" : "p-8 sm:p-10";

  const widthClass =
    alignment === "center"
      ? "w-full max-sm:max-w-[252px] sm:max-w-[388px]"
      : "w-full max-sm:max-w-[316px] sm:max-w-[580px]";

  return (
    <ModalContext.Provider
      value={{ alignment, icon: modalIcon, iconClassName, showIcon }}
    >
      <DialogPrimitive.Portal>
        <ModalOverlay />
        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 bg-[#E7DEF9] shadow-2xl outline-none",
            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px]",
            alignment === "center" && "max-sm:rounded-[20px]",
            "duration-200",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            widthClass,
            className,
          )}
          data-slot="modal-content"
          {...props}
        >
          <div
            className={cn(
              "relative flex flex-col",
              alignment === "wide" ? "gap-4 sm:gap-6" : "gap-5 sm:gap-6",
              paddingClass,
            )}
          >
            {showCloseButton && (
              <DialogPrimitive.Close
                className="text-primary-70 hover:text-primary-50 absolute top-8 right-8 flex size-5 cursor-pointer items-center justify-center focus:outline-none sm:top-10 sm:right-10 sm:size-7"
                data-slot="modal-close-button"
              >
                <X
                  aria-hidden="true"
                  className="size-full transition-opacity hover:opacity-100"
                  strokeWidth={2}
                />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            )}

            {alignment === "center" &&
              showIcon &&
              renderModalIcon(
                modalIcon,
                cn(
                  "mx-auto size-10 text-primary-70 sm:size-[60px]",
                  iconClassName,
                ),
              )}

            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </ModalContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

function ModalHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { alignment } = useModalCtx();
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        alignment === "center" && "items-center text-center",
        className,
      )}
      data-slot="modal-header"
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Title  (League Spartan)                                            */
/*                                                                     */
/*  Center: max-sm h3 (36px) → sm h2 (48px)                          */
/*  Wide:   max-sm h4 (30px) → sm h3 (36px)                          */
/*  Wide icon: max-sm 28px → sm 36px, inline-left of title           */
/* ------------------------------------------------------------------ */

function ModalTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  const { alignment, icon, iconClassName, showIcon } = useModalCtx();

  const sizeClass =
    alignment === "center"
      ? "text-h3 sm:text-h2 sm:leading-[48px]"
      : "text-h4 sm:text-h3";

  return (
    <div
      className={cn(
        alignment === "wide" && showIcon && "flex items-start gap-6 sm:gap-8",
      )}
    >
      {alignment === "wide" &&
        showIcon &&
        renderModalIcon(
          icon ?? <CheckSquare strokeWidth={2.5} />,
          cn("shrink-0 size-10 text-primary-70 sm:size-[60px]", iconClassName),
        )}
      <DialogPrimitive.Title
        className={cn(
          "font-league-spartan leading-tight font-bold !text-[#3F178D]",
          sizeClass,
          className,
        )}
        data-slot="modal-title"
        {...props}
      >
        {children}
      </DialogPrimitive.Title>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Description  (Ubuntu)                                              */
/*                                                                     */
/*  max-sm 14px (b8) → sm 20px (b6)                                  */
/*  Wide indent aligns left edge with title text:                     */
/*    max-sm: icon 28px + gap 20px = pl-[48px]                       */
/*    sm:     icon 36px + gap 20px = pl-[56px]                       */
/* ------------------------------------------------------------------ */

function ModalDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  const { alignment, showIcon } = useModalCtx();

  const indentClass =
    alignment === "wide" && showIcon ? "pl-16 sm:pl-[92px]" : "";

  return (
    <DialogPrimitive.Description
      className={cn(
        "font-ubuntu text-b8 sm:text-b6 leading-normal !text-[#3F178D]",
        alignment === "center" ? "text-center" : "text-left",
        indentClass,
        className,
      )}
      data-slot="modal-description"
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function ModalFooter({ className, ...props }: React.ComponentProps<"div">) {
  const { alignment } = useModalCtx();
  return (
    <div
      className={cn(
        "flex flex-row",
        alignment === "center"
          ? "justify-center gap-3"
          : "justify-end gap-3 sm:gap-5",
        className,
      )}
      data-slot="modal-footer"
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  ModalAction  (Nunito Sans)                                         */
/*                                                                     */
/*  Heights: desktop 48px · mobile 40px                               */
/*  Center text-s9 (lh 16px): py-3 mobile (12+16+12=40) py-4 desktop */
/*  Wide text-s7 (lh 24px):   py-3 both   (12+24+12=48 desktop)      */
/*  Single button (only-child) always spans full width                */
/* ------------------------------------------------------------------ */

interface ModalActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

function ModalAction({
  className,
  variant = "primary",
  ...props
}: ModalActionProps) {
  const { alignment } = useModalCtx();

  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-[8px] px-6 sm:h-12 sm:rounded-[12px]",
        alignment === "center"
          ? "min-w-[88px] only:w-full sm:min-w-[126px]"
          : "min-w-[88px] sm:min-w-[122px]",
        "font-nunito-sans font-bold transition-all duration-150",
        "text-s9 sm:text-s7",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#551FBF]/50 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",

        variant === "primary" && [
          "bg-[#551FBF] text-[#E7DEF9]",
          "hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
          "active:shadow-[inset_0_4px_24px_rgba(0,0,0,0.25)]",
        ],

        variant === "secondary" && [
          "bg-[#08978B] text-[#F6F7F2]",
          "hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
          "active:shadow-[inset_0_4px_24px_rgba(0,0,0,0.1)]",
        ],

        className,
      )}
      data-slot="modal-action"
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  ModalIcon — standalone export                                      */
/* ------------------------------------------------------------------ */

function ModalIcon({
  className,
  icon,
}: {
  className?: string;
  icon?: React.ReactNode;
}) {
  return renderModalIcon(
    icon ?? <CheckSquare strokeWidth={2.5} />,
    cn("size-6 text-primary-70", className),
  );
}

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */

export {
  Modal,
  ModalTrigger,
  ModalClose,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  ModalAction,
  ModalIcon,
};
