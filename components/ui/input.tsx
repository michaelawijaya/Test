import type * as React from "react";
import { Mail, Search, TriangleAlertIcon } from "lucide-react";
import { cn } from "~/lib/utils";

type InputVariant = "default" | "email" | "search";

const variantSections: Record<
  InputVariant,
  {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
  }
> = {
  default: {
    leftSection: undefined,
    rightSection: undefined,
  },
  email: {
    leftSection: <Mail strokeWidth={2.5} />,
    rightSection: undefined,
  },
  search: {
    leftSection: <Search strokeWidth={2.5} />,
    rightSection: <Search strokeWidth={2.5} />,
  },
};

type InputProps = React.ComponentProps<"input"> & {
  variant?: InputVariant;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  errorMessage?: React.ReactNode;
};

function Input({
  className,
  variant = "default",
  leftSection,
  rightSection,
  type,
  errorMessage,
  ...props
}: InputProps) {
  const showError = Boolean(errorMessage);
  const defaults = variantSections[variant];
  const lSection = leftSection ?? defaults.leftSection;
  const rSection = rightSection ?? defaults.rightSection;

  const sectionClasses = cn(
    "absolute top-1/2 flex -translate-y-1/2 w-5 items-center justify-center transition-colors",
    showError
      ? "text-red-200 peer-hover:text-red-100 peer-focus-visible:text-red-100 peer-disabled:text-red-200"
      : "text-tertiary-80 peer-hover:text-tertiary-70 peer-focus-visible:text-tertiary-70 peer-disabled:text-tertiary-80",
  );

  const errorFeedback = showError ? (
    <p className="mt-1 flex items-start gap-1 text-xs text-red-200 md:gap-1.5 md:text-sm">
      <TriangleAlertIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-200 md:h-4 md:w-4" />
      <span>{errorMessage}</span>
    </p>
  ) : null;

  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          className={cn(
            "peer file:text-foreground placeholder:text-muted-foreground h-10 w-full rounded-md border-[2.5px] bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:h-12 md:text-sm",
            showError
              ? "border-red-200 text-red-200 placeholder:text-red-200 enabled:hover:border-red-100 enabled:hover:text-red-100 enabled:hover:placeholder:text-red-100 enabled:focus-visible:border-red-100 enabled:focus-visible:bg-[#8999981A]/10 enabled:focus-visible:text-red-100 enabled:focus-visible:placeholder:text-red-100"
              : "border-tertiary-80 text-tertiary-80 placeholder:text-tertiary-80 enabled:hover:border-tertiary-70 enabled:hover:text-tertiary-70 enabled:hover:placeholder:text-tertiary-70 enabled:focus-visible:border-tertiary-70 enabled:focus-visible:text-tertiary-70 enabled:focus-visible:placeholder:text-tertiary-70 enabled:focus-visible:bg-[#8999981A]/10",
            lSection && "pl-9",
            rSection && "pr-9",
            className,
          )}
          type={type}
          {...props}
        />
        {lSection ? (
          <span className={cn(sectionClasses, "left-3")}>{lSection}</span>
        ) : null}
        {rSection ? (
          <span className={cn(sectionClasses, "right-3")}>{rSection}</span>
        ) : null}
      </div>
      {errorFeedback}
    </div>
  );
}

export { Input };
