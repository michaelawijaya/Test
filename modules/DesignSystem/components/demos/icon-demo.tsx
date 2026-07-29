import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import { Instagram } from "~/components/icons/instagram";
import { Tiktok } from "~/components/icons/tiktok";
import { Twitter } from "~/components/icons/twitter";
import { Youtube } from "~/components/icons/youtube";

export function IconDemo() {
  return (
    <DemoSection
      description="Standard icons used in the application."
      id="icon"
      title="Icons"
    >
      <ComponentPreview>
        <div className="flex items-center justify-center gap-4 p-4">
          <div className="flex flex-col items-center gap-2">
            <Instagram size="w-8 h-8" />
            <span className="text-muted-foreground text-xs">Instagram</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tiktok size="w-8 h-8" />
            <span className="text-muted-foreground text-xs">Tiktok</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Twitter size="w-8 h-8" />
            <span className="text-muted-foreground text-xs">Twitter</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Youtube size="w-8 h-8" />
            <span className="text-muted-foreground text-xs">Youtube</span>
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { Instagram } from "~/components/icons/instagram";\n\n<Instagram size="w-6 h-6" fill="fill-primary" />`}
      />
    </DemoSection>
  );
}
