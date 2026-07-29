"use client";

import { useState } from "react";

import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const DROPDOWN_OPTIONS = ["Profile", "Billing", "Settings"];

export function DropdownDemo() {
  const [primaryValue, setPrimaryValue] = useState<string>();
  const [secondaryValue, setSecondaryValue] = useState<string>();

  return (
    <DemoSection
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      id="dropdown"
      title="Dropdown Menu"
    >
      <ComponentPreview>
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold text-white">Primary</p>
            <DropdownMenu variant="primary">
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{primaryValue ?? "Open Menu"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                {DROPDOWN_OPTIONS.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onSelect={() => setPrimaryValue(option)}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold text-white">Secondary</p>
            <DropdownMenu variant="secondary">
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {secondaryValue ?? "Open Menu"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                {DROPDOWN_OPTIONS.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onSelect={() => setSecondaryValue(option)}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuTrigger,\n} from "~/components/ui/dropdown-menu";\n\n<DropdownMenu variant="primary">\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}
      />
    </DemoSection>
  );
}
