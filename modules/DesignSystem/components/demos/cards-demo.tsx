import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Image from "~/lib/image";

export function CardsDemo() {
  return (
    <DemoSection
      description="Displays content and actions on a single topic."
      id="cards"
      title="Cards"
    >
      <ComponentPreview>
        <div className="flex flex-col gap-4">
          {/* Basic Card */}
          <Card className="w-87.5">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ac
                mi nunc volutpat garavida malesuada eu massa vestibulum.
              </p>
            </CardContent>
          </Card>
          {/* Card with Title Centered */}
          <Card className="w-87.5">
            <CardHeader className="text-center">
              <CardTitle>Centered Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This card has its title centered.</p>
            </CardContent>
          </Card>
          {/* Card with Image */}
          <Card className="w-87.5">
            <CardHeader>
              <CardTitle>Card with Image</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                alt="Card Image"
                className="mb-4 rounded-lg"
                src="/design-system/logo.svg"
              />
              <p className="text-sm">This card includes an image.</p>
            </CardContent>
          </Card>
          {/* Card with Buttons */}
          <Card className="w-87.5">
            <CardHeader>
              <CardTitle>Card with Buttons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This card has a footer with buttons.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"primary"}>
                Action
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import {\n  Card,\n  CardContent,\n  CardDescription,\n  CardHeader,\n  CardTitle,\n} from "~/components/ui/card";\n\n<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n  </CardHeader>\n  <CardContent>...</CardContent>\n</Card>`}
      />
    </DemoSection>
  );
}
