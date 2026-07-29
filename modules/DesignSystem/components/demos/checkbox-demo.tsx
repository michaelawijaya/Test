import { Fragment } from "react";

import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import { Checkbox } from "~/components/ui/checkbox";
import type { CheckboxProps } from "~/components/ui/checkbox";

const checkboxTypes: Array<NonNullable<CheckboxProps["type"]>> = [
  "outline",
  "solid",
  "circle",
];

const checkboxColors: Array<{
  color: NonNullable<CheckboxProps["color"]>;
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

export function CheckboxDemo() {
  return (
    <DemoSection
      description="Checkbox states with configurable shape and palette."
      id="checkbox"
      title="Check Box"
    >
      <ComponentPreview>
        <div className="bg-primary-90 border-tertiary-60 w-full max-w-3xl overflow-x-auto rounded-xl border-2 p-8">
          <div className="grid min-w-[520px] grid-cols-[150px_repeat(3,minmax(90px,1fr))] gap-x-8 gap-y-6">
            <div />
            {checkboxTypes.map((type) => (
              <div
                className="text-s9 text-primary-20 text-center font-bold uppercase"
                key={type}
              >
                {type}
              </div>
            ))}
            {checkboxColors.map(({ color, label }) => (
              <Fragment key={color}>
                <div className="text-s8 text-primary-10 flex items-center font-semibold">
                  {label}
                </div>
                {checkboxTypes.map((type) => (
                  <div
                    className="flex items-center justify-center"
                    key={`${color}-${type}`}
                  >
                    <Checkbox
                      aria-label={`${label} ${type} checkbox`}
                      color={color}
                      defaultChecked
                      type={type}
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { Checkbox } from "~/components/ui/checkbox";\n\n<Checkbox type="outline" color="primary" defaultChecked />\n<Checkbox type="solid" color="secondary-light" defaultChecked />\n<Checkbox type="circle" color="tertiary" defaultChecked />\n<Checkbox type="solid" color="orange" />`}
      />
    </DemoSection>
  );
}
