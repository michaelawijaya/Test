import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import { FileInput } from "~/components/ui/file-input";
import { Button } from "~/components/ui/button";

export function FileInputDemo() {
  return (
    <DemoSection
      description="File upload control."
      id="file-input"
      title="File Input"
    >
      <ComponentPreview>
        <div className="mx-auto flex w-full flex-col items-center justify-center space-y-2">
          <p className="text-primary-10 text-s8">
            Click to open the File Input
          </p>
          <FileInput
            trigger={(open) => (
              <Button
                className="bg-secondary-50 w-fit rounded-lg px-8 py-3 font-bold text-neutral-100!"
                onClick={open}
                type="button"
              >
                Upload Document
              </Button>
            )}
          />
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { FileInput } from "~/components/ui/file-input";\nimport { Button } from "~/components/ui/button";\n\n<FileInput\n  trigger={(open) => (\n    <Button\n      className="w-fit rounded-lg bg-secondary-50 px-8 py-3 font-bold text-neutral-100!"\n      onClick={open}\n      type="button"\n    >\n      Upload Document\n    </Button>\n  )}\n/>`}
      />
    </DemoSection>
  );
}
