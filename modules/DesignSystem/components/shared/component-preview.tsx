import type * as React from "react";
// import { cn } from "~/lib/utils";

interface ComponentPreviewProps {
  children: React.ReactNode;
  allowOverflow?: boolean;
}

export function ComponentPreview({ children }: ComponentPreviewProps) {
  return (
    <div className="border-primary-30/35 bg-pimary/30 shadow-primary-90/30 relative flex min-h-[170px] w-full items-center justify-center overflow-hidden rounded-2xl border p-6 shadow-lg sm:p-8">
      <div className="bg-[linear-gradient(90deg,theme(colors.primary.50),theme(colors.secondary.50),theme(colors.tertiary.50))] pointer-events-none absolute inset-x-0 top-0 h-1" />
      <div className="bg-[linear-gradient(135deg,theme(colors.primary.70/.42),transparent_42%,theme(colors.secondary.80/.32))] pointer-events-none absolute inset-0" />
      <div className="relative z-10 flex w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}
