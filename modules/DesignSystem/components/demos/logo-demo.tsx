import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import Image from "~/lib/image";

export function LogoDemo() {
  return (
    <DemoSection description="Brand logo placeholder." id="logo" title="Logo">
      <ComponentPreview>
        <div className="font-league-spartan text-h4 max-w:flex-col max-sm:text-h6 flex gap-20 text-center font-bold tracking-tighter max-sm:gap-10">
          <div>
            <Image
              alt="Logo with transparent background"
              className="w-50 max-sm:w-25"
              src="/design-system/logo-no-bg.svg"
            />
            <h4>No Bg</h4>
          </div>
          <div>
            <Image
              alt="Logo with background"
              className="w-50 max-sm:w-25"
              src="/design-system/logo.svg"
            />
            <h4>With Bg</h4>
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`<div className="text-xl font-bold">\n  Brand<span className="text-primary">.</span>\n</div>`}
      />
    </DemoSection>
  );
}
