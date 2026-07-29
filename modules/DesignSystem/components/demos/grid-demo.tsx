import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

const GRID_COLUMNS = Array.from(
  { length: 12 },
  (_, index) => `grid-column-${index + 1}`,
);

export function GridDemo() {
  return (
    <DemoSection
      description="Standard grid layouts for page composition."
      id="grid"
      title="Grid Layout"
    >
      <ComponentPreview>
        <div className="w-full space-y-8">
          <div>
            <h4 className="mb-4 text-sm font-medium">
              12-Column Grid (Standard)
            </h4>
            <div className="grid grid-cols-12 gap-4">
              {GRID_COLUMNS.map((column) => (
                <div
                  className="bg-primary/20 text-primary flex h-10 items-center justify-center rounded text-xs font-medium"
                  key={column}
                >
                  1
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium">Common Layouts</h4>
            <div className="grid grid-cols-12 gap-4">
              <div className="bg-primary/20 text-primary col-span-8 flex h-10 items-center justify-center rounded text-xs font-medium">
                col-span-8
              </div>
              <div className="bg-primary/20 text-primary col-span-4 flex h-10 items-center justify-center rounded text-xs font-medium">
                col-span-4
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`<div className="grid grid-cols-12 gap-4">\n  <div className="col-span-8">Main Content</div>\n  <div className="col-span-4">Sidebar</div>\n</div>`}
      />
    </DemoSection>
  );
}
