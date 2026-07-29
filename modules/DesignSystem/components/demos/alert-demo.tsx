import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertAction,
} from "~/components/ui/alert";

export function AlertDemo() {
  return (
    <DemoSection
      description="Alert message placeholder."
      id="alert"
      title="Alert"
    >
      <ComponentPreview>
        <div className="w-full space-y-4 rounded-xl bg-white px-10 py-10">
          <Alert variant="info">
            <AlertIcon />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
              recusandae velit quisquam. Adipisci, exercitationem repellendus?
              Doloremque distinctio molestiae quisquam velit nisi accusamus
              minima possimus, autem sed iusto quasi, aut modi cum pariatur
              facilis nemo amet sunt enim dignissimos voluptas in totam. Ipsam,
              eligendi quas. Tempora cum soluta consectetur sed accusantium.
            </AlertDescription>
            <AlertAction />
          </Alert>

          <Alert variant="error">
            <AlertIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </AlertDescription>
            <AlertAction />
          </Alert>

          <Alert variant="success">
            <AlertIcon />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </AlertDescription>
            <AlertAction />
          </Alert>

          <Alert variant="warning">
            <AlertIcon />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </AlertDescription>
            <AlertAction />
          </Alert>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import {\n  Alert,\n  AlertAction,\n  AlertDescription,\n  AlertIcon,\n  AlertTitle,\n} from "~/components/ui/alert";\n\n<Alert variant="info">\n  <AlertIcon />\n  <AlertTitle>Info</AlertTitle>\n  <AlertDescription>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit\n  </AlertDescription>\n  <AlertAction />\n</Alert>\n\n<Alert variant="error">\n  <AlertIcon />\n  <AlertTitle>Error</AlertTitle>\n  <AlertDescription>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit\n  </AlertDescription>\n  <AlertAction />\n</Alert>\n\n<Alert variant="success">\n  <AlertIcon />\n  <AlertTitle>Success</AlertTitle>\n  <AlertDescription>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit\n  </AlertDescription>\n  <AlertAction />\n</Alert>\n\n<Alert variant="warning">\n  <AlertIcon />\n  <AlertTitle>Warning</AlertTitle>\n  <AlertDescription>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit\n  </AlertDescription>\n  <AlertAction />\n</Alert>`}
      />
    </DemoSection>
  );
}
