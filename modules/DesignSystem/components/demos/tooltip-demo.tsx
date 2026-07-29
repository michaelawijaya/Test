import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import { Tooltip } from "~/components/ui/tooltip";

const DIRECTIONS = ["top", "bottom", "left", "right"] as const;

export function TooltipDemo() {
  return (
    <DemoSection
      description="Floating contextual information with info icon. Supports 4 directions and responsive desktop/mobile sizes."
      id="tooltip"
      title="Tooltip"
    >
      <ComponentPreview allowOverflow>
        <div className="flex w-full flex-wrap items-center justify-center gap-8 rounded-xl bg-white py-40">
          {DIRECTIONS.map((dir) => (
            <Tooltip
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              direction={dir}
              key={dir}
              title="Tooltip Title"
            >
              <button
                className="bg-primary-50 hover:bg-primary-60 rounded-md px-4 py-2 text-sm text-white transition-colors"
                type="button"
              >
                {dir}
              </button>
            </Tooltip>
          ))}
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { Tooltip } from "~/components/ui/tooltip";

<Tooltip title="Tooltip Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." direction="top">
  <button>Hover me</button>
</Tooltip>`}
      />
    </DemoSection>
  );
}
