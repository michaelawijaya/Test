import { Fragment } from "react";

import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import type { RadioGroupItemProps } from "~/components/ui/radio-group";

const radioColors: Array<{
  color: NonNullable<RadioGroupItemProps["color"]>;
  label: string;
}> = [
  { color: "primary", label: "Primary" },
  { color: "primary-light", label: "Primary Light" },
  { color: "secondary", label: "Secondary" },
  { color: "secondary-light", label: "Secondary Light" },
  { color: "tertiary", label: "Tertiary" },
  { color: "tertiary-light", label: "Tertiary Light" },
  { color: "orange", label: "Orange" },
  { color: "orange-light", label: "Orange Light" },
];

export function RadioDemo() {
  return (
    <DemoSection
      description="Radio button states with configurable palette."
      id="radio"
      title="Radio Button"
    >
      <ComponentPreview>
        <div className="bg-primary-90 border-tertiary-60 w-fit overflow-x-auto rounded-xl border-2 p-8">
          <div className="grid min-w-130 grid-cols-[150px_minmax(90px,1fr)] gap-x-8 gap-y-6">
            <div />
            <div className="text-s9 text-primary-20 text-center font-bold uppercase">
              Radio
            </div>
            {radioColors.map(({ color, label }) => (
              <Fragment key={color}>
                <div className="text-s8 text-primary-10 flex items-center font-semibold">
                  {label}
                </div>
                <RadioGroup
                  className="flex items-center justify-center"
                  defaultValue={color}
                >
                  <RadioGroupItem
                    aria-label={`${label} radio button`}
                    color={color}
                    value={color}
                  />
                </RadioGroup>
              </Fragment>
            ))}
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";\n\n<RadioGroup defaultValue="primary">\n  <RadioGroupItem color="primary" value="primary" />\n  <RadioGroupItem color="secondary-light" value="secondary-light" />\n  <RadioGroupItem color="orange" value="orange" />\n</RadioGroup>`}
      />
    </DemoSection>
  );
}
