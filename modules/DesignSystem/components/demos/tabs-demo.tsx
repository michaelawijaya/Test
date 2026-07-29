/* eslint-disable react/no-unescaped-entities */

import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export function TabsDemo() {
  return (
    <DemoSection
      description="A set of layered sections of content demonstrating all horizontal and vertical configurations."
      id="tabs"
      title="Tabs"
    >
      <ComponentPreview>
        <div className="flex w-full flex-col items-center gap-10">
          {/* =========================================================================
              ==================== HORIZONTAL PERMUTATIONS (1 - 8) ====================
              ========================================================================= */}
          <div className="w-full border-b pb-4">
            <h3 className="text-muted-foreground mb-4 text-sm font-bold tracking-wider uppercase">
              Horizontal Configurations
            </h3>
          </div>

          {/* 1. Colored + Numbered + Arrows */}
          <div className="flex w-full max-w-6xl flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="horizontal" | variant="colored" | decor="numbered" |
              showArrows=true
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="horizontal"
            >
              <TabsList
                className="grid w-full grid-cols-5"
                decor="numbered"
                showArrows={true}
                variant="colored"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 2. Colored + Numbered + No Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="horizontal" | variant="colored" | decor="numbered" |
              showArrows=false
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="horizontal"
            >
              <TabsList
                className="grid w-full grid-cols-2"
                decor="numbered"
                showArrows={false}
                variant="colored"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 3. Colored + Diamonds + Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="horizontal" | variant="colored" | decor="diamonds" |
              showArrows=true
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="horizontal"
            >
              <TabsList
                className="grid w-full grid-cols-2"
                decor="diamonds"
                showArrows={true}
                variant="colored"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 4. Colored + Diamonds + No Arrows */}
          <div className="flex w-full max-w-2xl flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="horizontal" | variant="colored" | decor="diamonds" |
              showArrows=false
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="horizontal"
            >
              <TabsList
                className="grid w-full grid-cols-5"
                decor="diamonds"
                showArrows={false}
                variant="colored"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="password2">Password</TabsTrigger>
                <TabsTrigger value="password3">Password</TabsTrigger>
                <TabsTrigger value="password4">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password2"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password3"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password4"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 5. Transparent + Numbered + Arrows */}
          <div className="flex w-full max-w-6xl flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="horizontal" | variant="transparent" |
              decor="numbered" | showArrows=true
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="horizontal"
            >
              <TabsList
                className="grid w-full grid-cols-5"
                decor="numbered"
                showArrows={true}
                variant="transparent"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="password2">Password</TabsTrigger>
                <TabsTrigger value="password3">Password</TabsTrigger>
                <TabsTrigger value="password4">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password2"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password3"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password4"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 6. Transparent + Numbered + No Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="horizontal" | variant="transparent" |
              decor="numbered" | showArrows=false
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="horizontal"
            >
              <TabsList
                className="grid w-full grid-cols-2"
                decor="numbered"
                showArrows={false}
                variant="transparent"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 7. Transparent + Diamonds + Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="horizontal" | variant="transparent" |
              decor="diamonds" | showArrows=true
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="horizontal"
            >
              <TabsList
                className="grid w-full grid-cols-2"
                decor="diamonds"
                showArrows={true}
                variant="transparent"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 8. Transparent + Diamonds + No Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="horizontal" | variant="transparent" |
              decor="diamonds" | showArrows=
              {false}
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="horizontal"
            >
              <TabsList
                className="grid w-full grid-cols-2"
                decor="diamonds"
                showArrows={false}
                variant="transparent"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="mt-2 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* =======================================================================
              ==================== VERTICAL PERMUTATIONS (9 - 16) ====================
              ======================================================================= */}
          <div className="w-full border-b pt-6 pb-4">
            <h3 className="text-muted-foreground mb-4 text-sm font-bold tracking-wider uppercase">
              Vertical Configurations
            </h3>
          </div>

          {/* 9. Vertical + Colored + Numbered + Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="vertical" | variant="colored" | decor="numbered" |
              showArrows=true
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="vertical"
            >
              <TabsList decor="numbered" showArrows={true} variant="colored">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 10. Vertical + Colored + Numbered + No Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="vertical" | variant="colored" | decor="numbered" |
              showArrows=false
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="vertical"
            >
              <TabsList decor="numbered" showArrows={false} variant="colored">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 11. Vertical + Colored + Diamonds + Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="vertical" | variant="colored" | decor="diamonds" |
              showArrows=true
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="vertical"
            >
              <TabsList decor="diamonds" showArrows={true} variant="colored">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 12. Vertical + Colored + Diamonds + No Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="vertical" | variant="colored" | decor="diamonds" |
              showArrows={false}
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="vertical"
            >
              <TabsList decor="diamonds" showArrows={false} variant="colored">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 13. Vertical + Transparent + Numbered + Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="vertical" | variant="transparent" | decor="numbered"
              | showArrows=true
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="vertical"
            >
              <TabsList
                decor="numbered"
                showArrows={true}
                variant="transparent"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 14. Vertical + Transparent + Numbered + No Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="vertical" | variant="transparent" | decor="numbered"
              | showArrows=false
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="vertical"
            >
              <TabsList
                decor="numbered"
                showArrows={false}
                variant="transparent"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 15. Vertical + Transparent + Diamonds + Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="vertical" | variant="transparent" | decor="diamonds"
              | showArrows=true
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="vertical"
            >
              <TabsList
                decor="diamonds"
                showArrows={true}
                variant="transparent"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* 16. Vertical + Transparent + Diamonds + No Arrows */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="text-muted-foreground mb-1 font-mono text-xs">
              orientation="vertical" | variant="transparent" | decor="diamonds"
              | showArrows={false}
            </span>
            <Tabs
              className="w-full"
              defaultValue="account"
              orientation="vertical"
            >
              <TabsList
                decor="diamonds"
                showArrows={false}
                variant="transparent"
              >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="account"
              >
                <p className="text-muted-foreground text-sm">
                  Make changes to your account here.
                </p>
              </TabsContent>
              <TabsContent
                className="flex-1 rounded-md border p-4"
                value="password"
              >
                <p className="text-muted-foreground text-sm">
                  Change your password here.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";\n\n<Tabs defaultValue="account" orientation="vertical">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">...</TabsContent>\n</Tabs>`}
      />
    </DemoSection>
  );
}
