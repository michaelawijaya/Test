import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import Countdown from "~/components/elements/Countdown";

export function CountdownDemo() {
  return (
    <DemoSection
      description="Timer component."
      id="countdown"
      title="Countdown"
    >
      <ComponentPreview>
        <div className="bg-primary-20 border-tertiary-50 -z-1 flex gap-4 rounded-xl border-2 p-10 text-center">
          <Countdown targetDate={new Date("26 June 2026 23:59:59")} />
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import Countdown from "~/components/elements/Countdown"\n<Countdown targetDate={new Date('25 June 2026 23:59:59')}/>`}
      />
    </DemoSection>
  );
}
