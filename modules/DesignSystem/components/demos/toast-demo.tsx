import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import { toast } from "~/components/ui/toast";
import { Button } from "~/components/ui/button";

export function ToastDemo() {
  return (
    <DemoSection
      description="Brief notification pill in 4 variants: error, loading, success, warning."
      id="toast"
      title="Toast"
    >
      <ComponentPreview>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => toast.error("Error message")}
            variant="outline"
          >
            Error
          </Button>
          <Button onClick={() => toast.loading("Loading")} variant="outline">
            Loading
          </Button>
          <Button
            onClick={() => toast.success("Success message")}
            variant="outline"
          >
            Success
          </Button>
          <Button
            onClick={() => toast.warning("Warning message")}
            variant="outline"
          >
            Warning
          </Button>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { toast } from "~/components/ui/toast";\n\n<Button onClick={() => toast.error("Error message")}>Error</Button>\n<Button onClick={() => toast.loading("Loading")}>Loading</Button>\n<Button onClick={() => toast.success("Success message")}>Success</Button>\n<Button onClick={() => toast.warning("Warning message")}>Warning</Button>`}
      />
    </DemoSection>
  );
}
