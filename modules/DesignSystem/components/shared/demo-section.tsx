import type * as React from "react";

interface DemoSectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DemoSection({
  id,
  title,
  description,
  children,
}: DemoSectionProps) {
  return (
    <section className="scroll-mt-28 space-y-5" id={id}>
      <div className="border-primary-30/35 bg-primary-80/70 shadow-primary-90/30 rounded-2xl border p-5 shadow-xl backdrop-blur">
        <div className="border-tertiary-50 flex flex-col gap-2 border-l-4 pl-4">
          <h2 className="text-h5 text-primary-10 font-bold">{title}</h2>
          {description && (
            <p className="text-b8 text-primary-20 max-w-3xl">{description}</p>
          )}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
