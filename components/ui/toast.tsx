import { toast as sonnerToast } from "sonner";
import {
  CircleCheckIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  type LucideIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

type ToastVariant = "error" | "success" | "warning" | "loading";

const TOAST_VARIANTS: Record<
  ToastVariant,
  {
    bg: string;
    text: string;
    ring: string;
    iconBg: string;
    icon: LucideIcon;
  }
> = {
  error: {
    bg: "bg-[#FCE7E9]",
    text: "text-[#B31927]",
    ring: "ring-[#F3AEB5]",
    iconBg: "bg-[#B31927]",
    icon: OctagonXIcon,
  },
  success: {
    bg: "bg-[#DDFBEA]",
    text: "text-[#00612D]",
    ring: "ring-[#8EE4B8]",
    iconBg: "bg-[#00612D]",
    icon: CircleCheckIcon,
  },
  warning: {
    bg: "bg-[#FFF0BE]",
    text: "text-[#836A04]",
    ring: "ring-[#E2C55B]",
    iconBg: "bg-[#836A04]",
    icon: TriangleAlertIcon,
  },
  loading: {
    bg: "bg-[#E2EAFA]",
    text: "text-[#0C265E]",
    ring: "ring-[#9BB1E2]",
    iconBg: "bg-[#0C265E]",
    icon: Loader2Icon,
  },
};

interface ToastCardProps {
  variant: ToastVariant;
  message: string;
}

function ToastCard({ variant, message }: ToastCardProps) {
  const { bg, text, ring, iconBg, icon: Icon } = TOAST_VARIANTS[variant];

  return (
    <div
      className={cn(
        "shadow-primary-90/20 flex min-h-[52px] w-fit max-w-[min(calc(100vw-32px),420px)] items-center gap-3 rounded-xl px-4 py-3 shadow-lg ring-1 backdrop-blur",
        bg,
        ring,
      )}
      data-slot="toast"
    >
      <span
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-md text-neutral-100",
          iconBg,
        )}
      >
        <Icon
          aria-hidden="true"
          className={cn("size-4", variant === "loading" && "animate-spin")}
          strokeWidth={2.5}
        />
      </span>
      <span
        className={cn(
          "font-aileron min-w-0 text-[14px] leading-snug font-bold",
          text,
        )}
      >
        {message}
      </span>
    </div>
  );
}

function show(variant: ToastVariant, message: string) {
  return sonnerToast.custom(() => (
    <ToastCard message={message} variant={variant} />
  ));
}

const toast = {
  error: (message: string) => show("error", message),
  success: (message: string) => show("success", message),
  warning: (message: string) => show("warning", message),
  loading: (message: string) => show("loading", message),
  dismiss: sonnerToast.dismiss,
};

export { toast, ToastCard };
