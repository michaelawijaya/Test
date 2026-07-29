"use client";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main>
      <div className="mt-20 flex flex-col items-center justify-center gap-10">
        <section className="flex flex-col items-center justify-center gap-2 font-semibold text-white">
          <h1 className="text-h1">Start Here!</h1>
          <h4 className="text-h4">Edit @/modules/AmbassadorPage/index.tsx</h4>
          <h4 className="text-h4">
            Open Design System to see your toolkit for this task
          </h4>
          <p className="text-sm text-white">
            (@/components/ui and @/components/elements)
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-white">
            This is a button component
          </p>
          <Button
            variant="primary"
            className="bg-primary-40 hover:bg-primary-70 text-white"
            onClick={() => window.open("/design-system", "_blank")}
          >
            Open Design System
          </Button>
        </section>
      </div>
    </main>
  );
}
