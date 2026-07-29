"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/elements/Navbar";

const PAGE_SURFACES: Array<{
  prefix: string;
  className: string;
}> = [
  { prefix: "/home", className: "bg-tertiary-10" },
  { prefix: "/not-found", className: "bg-primary-90" },
  { prefix: "/announcement", className: "bg-tertiary-30" },
];

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pageSurfaceClass =
    PAGE_SURFACES.find((surface) => pathname.startsWith(surface.prefix))
      ?.className ?? "bg-transparent";

  const isNotFoundPage = pathname.startsWith("/not-found");

  return (
    <>
      <div
        className={`${pageSurfaceClass} font-aileron min-h-screen w-full overflow-x-hidden`}
      >
        <Navbar />
        <div
          className={`${pageSurfaceClass} ${
            isNotFoundPage ? "pt-0" : "pt-20 lg:pt-24"
          } layout w-full`}
        >
          {children}
        </div>
        <Toaster position="bottom-right" />
      </div>
    </>
  );
}
