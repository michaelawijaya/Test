import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function InputDemo() {
  return (
    <DemoSection
      description="Text input fields and variants."
      id="input"
      title="Input Fields"
    >
      <ComponentPreview>
        <div className="w-full space-y-4 rounded-xl bg-white px-10 py-5">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="text-md text-tertiary-80 font-semibold"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              variant="email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="text-md text-tertiary-80 font-semibold"
              htmlFor="disabled"
            >
              Disabled
            </Label>
            <Input
              disabled
              id="disabled"
              placeholder="Disabled input"
              type="text"
              variant="search"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="text-md text-tertiary-80 font-semibold"
              htmlFor="search"
            >
              Search
            </Label>
            <Input
              id="search"
              placeholder="Search"
              type="search"
              variant="search"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="text-md text-tertiary-80 font-semibold"
              htmlFor="error"
            >
              Error
            </Label>
            <Input
              errorMessage="Error Message"
              id="error"
              placeholder="Invalid"
              type="search"
              variant="search"
            />
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { Input } from "~/components/ui/input";\n\n<Input type="email" variant="email" placeholder="Email" leftSection={<Mail />} rightSection={<Mail />} />\n\n// Left and right sections are optional, and can be any icons. If not provided, the default left and right sections for the variant will be used.\n// Types and variants can be different, it is only for semantics.`}
      />
    </DemoSection>
  );
}
