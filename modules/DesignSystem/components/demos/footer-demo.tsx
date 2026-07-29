import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import Footer from "~/components/elements/Footer";

export function FooterDemo() {
  return (
    <DemoSection
      description="Main application footer."
      id="footer"
      title="Footer"
    >
      <ComponentPreview>
        <div className="bg-background relative w-full overflow-hidden rounded-md border">
          <Footer />
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import Footer from "~/components/elements/Footer";\n\n<Footer />`}
      />
    </DemoSection>
  );
}
