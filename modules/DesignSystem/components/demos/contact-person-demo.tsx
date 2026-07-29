import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import ContactPerson from "~/components/elements/ContactPerson";

export function ContactPersonDemo() {
  return (
    <DemoSection
      description="Component to display contact details."
      id="contact-person"
      title="Contact Person"
    >
      <ComponentPreview>
        <ContactPerson
          firstContactUrl="https://wa.me/6289504139150"
          secondContactUrl="#"
        />
      </ComponentPreview>
      <CodeBlock
        code={`import ContactPerson from "~/components/elements/ContactPerson";

<ContactPerson
  firstContactUrl="https://wa.me/6289504139150"
  secondContactUrl="https://wa.me/6289504139150"
/>`}
      />
    </DemoSection>
  );
}
