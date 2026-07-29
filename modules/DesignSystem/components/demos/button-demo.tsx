import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import { Button } from "~/components/ui/button";
import { LucideBiohazard } from "lucide-react";

export function ButtonDemo() {
  return (
    <DemoSection
      description="Interactive button element used for actions."
      id="button"
      title="Button"
    >
      <ComponentPreview>
        <div className="md:grid-4 grid-2 col-span-2 flex w-full flex-wrap items-center justify-evenly gap-10 rounded-xl bg-white px-10 py-5 md:col-span-4">
          {/* Primary Button Section */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-league-spartan text-s5 text-primary-70 font-semibold">
              Primary/Default Button
            </h2>
            <Button variant="primary">
              <LucideBiohazard />
              Primary
              <LucideBiohazard />
            </Button>
            <Button disabled variant="primary">
              <LucideBiohazard />
              Disabled
              <LucideBiohazard />
            </Button>
          </div>

          {/* Secondary Button Section */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-league-spartan text-s5 text-primary-70 font-semibold">
              Secondary Button
            </h2>
            <Button variant="secondary">
              <LucideBiohazard />
              Secondary
              <LucideBiohazard />
            </Button>
            <Button disabled variant="secondary">
              <LucideBiohazard />
              Disabled
              <LucideBiohazard />
            </Button>
          </div>

          {/* Tertiary Button Section */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-league-spartan text-s5 text-primary-70 font-semibold">
              Tertiary Button
            </h2>
            <Button variant="tertiary">
              <LucideBiohazard />
              Tertiary
              <LucideBiohazard />
            </Button>
            <Button disabled variant="tertiary">
              <LucideBiohazard />
              Disabled
              <LucideBiohazard />
            </Button>
          </div>

          {/* Ghost Button Section */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-league-spartan text-s5 text-primary-70 font-semibold">
              Ghost Button
            </h2>
            <Button variant="ghost">
              <LucideBiohazard />
              Ghost
              <LucideBiohazard />
            </Button>
            <Button disabled variant="ghost">
              <LucideBiohazard />
              Disabled
              <LucideBiohazard />
            </Button>
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={
          `import { Button } from "~/components/ui/button";\n\n// Primary Button\n<Button variant="primary">\n\t<LucideBiohazard />\n\tPrimary\n\t<LucideBiohazard />\n</Button>\n\n<Button variant="primary" disabled>\n\t<LucideBiohazard />\n\tDisabled\n\t<LucideBiohazard />\n</Button>\n` +
          `\n\n// Secondary Button\n<Button variant="secondary">\n\t<LucideBiohazard />\n\tSecondary\n\t<LucideBiohazard />\n</Button>\n\n<Button variant="secondary" disabled>\n\t<LucideBiohazard />\n\tDisabled\n\t<LucideBiohazard />\n</Button>\n` +
          `\n\n// Tertiary Button\n<Button variant="tertiary">\n\t<LucideBiohazard />\n\tTertiary\n\t<LucideBiohazard />\n</Button>\n\n<Button variant="tertiary" disabled>\n\t<LucideBiohazard />\n\tDisabled\n\t<LucideBiohazard />\n</Button>\n` +
          `\n\n// Ghost Button\n<Button variant="ghost">\n\t<LucideBiohazard />\n\tGhost\n\t<LucideBiohazard />\n</Button>\n\n<Button variant="ghost" disabled>\n\t<LucideBiohazard />\n\tDisabled\n\t<LucideBiohazard />\n</Button>\n`
        }
      />
    </DemoSection>
  );
}
