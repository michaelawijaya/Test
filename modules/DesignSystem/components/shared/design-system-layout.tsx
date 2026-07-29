import type * as React from "react";
import { DesignSystemSidebar } from "./design-system-sidebar";

export function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-aileron text-primary-10 from-secondary-80 via-primary-70 to-primary-90 relative flex min-h-screen w-full flex-col bg-linear-to-l md:flex-row">
      <DesignSystemSidebar />
      <main className="relative z-10 flex-1 overflow-x-hidden sm:ml-72">
        <div className="container mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12 lg:px-12">
          {children}
        </div>
      </main>
    </div>
  );
}
