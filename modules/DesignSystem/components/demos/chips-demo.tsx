"use client";

import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import { useState } from "react";
import { Chip } from "~/components/ui/chip";

export function ChipsDemo() {
  /* controlled, e.g. for a filter group where the parent tracks which chip is active */
  const [active, setActive] = useState(false);
  return (
    <DemoSection
      description="Small status indicators or tags."
      id="chips"
      title="Chips & Badges"
    >
      <ComponentPreview>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* Regular */}
          <Chip>Chips</Chip>

          {/* Starts selected on first render */}
          <Chip defaultSelected>Chips</Chip>

          {/* Toggle */}
          <Chip onSelectedChange={setActive} selected={active}>
            Chips
          </Chip>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { useState } from "react";
import { Chip } from "~/components/ui/chip";

export function ChipExample() {
  const [active, setActive] = useState(false);

  return (
    <>
      {/* Regular */}
      <Chip>Chips</Chip>

      {/* Starts selected on first render */}
      <Chip defaultSelected>Chips</Chip>

      {/* Controlled */}
      <Chip selected={active} onSelectedChange={setActive}>
        Chips
      </Chip>
    </>
  );
}`}
      />
    </DemoSection>
  );
}
