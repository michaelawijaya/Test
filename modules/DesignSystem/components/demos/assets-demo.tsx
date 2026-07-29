import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

export function AssetsDemo() {
  return (
    <DemoSection
      description="Common images and illustrations placeholder."
      id="assets"
      title="Assets"
    >
      <ComponentPreview>
        <div className="bg-muted/20 text-muted-foreground w-full rounded-lg border-2 border-dashed p-8 text-center">
          <p>Assets Placeholder</p>
          <p className="mt-2 text-sm">
            Display brand illustrations or placeholder graphics here.
          </p>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`<img src="/placeholder.png" alt="Asset" className="rounded-md" />`}
      />
    </DemoSection>
  );
}
