"use client";

import * as React from "react";
import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import { Button } from "~/components/ui/button";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  ModalClose,
  ModalAction,
} from "~/components/ui/modal";
import { CheckCircle, CircleAlert } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data helpers                                                       */
/* ------------------------------------------------------------------ */

type Alignment = "center" | "wide";
type ButtonCount = 0 | 1 | 2;

interface Variation {
  buttons: ButtonCount;
  closeButton: boolean;
  alignment: Alignment;
}

const ALL_VARIATIONS: Variation[] = (["center", "wide"] as const).flatMap(
  (alignment) =>
    ([0, 1, 2] as const).flatMap((buttons) =>
      ([false, true] as const).map((closeButton) => ({
        buttons,
        closeButton,
        alignment,
      })),
    ),
);

function triggerLabel(v: Variation) {
  const align = v.alignment === "center" ? "Ctr" : "Wide";
  const btn = `${v.buttons}btn`;
  const cls = v.closeButton ? "✕" : "—";
  return `${align} ${btn} ${cls}`;
}

function variationDescription(v: Variation): string {
  const align = v.alignment === "center" ? "center-aligned" : "wide-aligned";
  const btns =
    v.buttons === 0
      ? "no action buttons"
      : v.buttons === 1
        ? "a single confirm button"
        : "cancel and confirm buttons";
  const close = v.closeButton
    ? ", with a close (×) button"
    : ", without a close button";
  return `Responsive ${align} modal with ${btns}${close}.`;
}

/* ------------------------------------------------------------------ */
/*  Single variation card                                              */
/* ------------------------------------------------------------------ */

function VariationCard({ v }: { v: Variation }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal onOpenChange={setOpen} open={open}>
      <ModalTrigger asChild>
        <Button
          className="w-full text-center text-xs leading-tight break-words whitespace-normal"
          size="default"
          variant="outline"
        >
          {triggerLabel(v)}
        </Button>
      </ModalTrigger>

      <ModalContent
        alignment={v.alignment}
        icon={<CheckCircle strokeWidth={2.5} />}
        iconClassName="text-primary-70"
        showCloseButton={v.closeButton}
        showIcon
      >
        <ModalHeader>
          <ModalTitle>Heading</ModalTitle>
          <ModalDescription>{variationDescription(v)}</ModalDescription>
        </ModalHeader>

        {v.buttons > 0 && (
          <ModalFooter>
            {v.buttons === 2 && (
              <ModalClose asChild>
                <ModalAction variant="secondary">Cancel</ModalAction>
              </ModalClose>
            )}
            <ModalClose asChild>
              <ModalAction variant="primary">Confirm</ModalAction>
            </ModalClose>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo page                                                          */
/* ------------------------------------------------------------------ */

export function ModalsDemo() {
  return (
    <DemoSection
      description="12 variations across Center / Wide alignment, 0–2 buttons, and optional close icon. All responsive — desktop card on larger screens, bottom-sheet on mobile."
      id="modals"
      title="Modals & Dialogs"
    >
      {/* ---------- quick preview ---------- */}
      <ComponentPreview>
        <div className="flex flex-wrap gap-4">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline">Default Icon</Button>
            </ModalTrigger>
            <ModalContent alignment="center" showCloseButton showIcon>
              <ModalHeader>
                <ModalTitle>Heading</ModalTitle>
                <ModalDescription>
                  Responsive center-aligned modal with cancel and confirm
                  buttons, with a close (×) button.
                </ModalDescription>
              </ModalHeader>
              <ModalFooter>
                <ModalClose asChild>
                  <ModalAction variant="secondary">Cancel</ModalAction>
                </ModalClose>
                <ModalClose asChild>
                  <ModalAction variant="primary">Confirm</ModalAction>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline">Custom Icon</Button>
            </ModalTrigger>
            <ModalContent
              alignment="center"
              icon={<CircleAlert strokeWidth={2.5} />}
              iconClassName="size-12 text-red-200"
              showCloseButton
              showIcon
            >
              <ModalHeader>
                <ModalTitle>Custom Icon</ModalTitle>
                <ModalDescription>
                  This modal passes a custom Lucide icon and custom icon
                  classes.
                </ModalDescription>
              </ModalHeader>
              <ModalFooter>
                <ModalClose asChild>
                  <ModalAction variant="primary">Confirm</ModalAction>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </ComponentPreview>

      <CodeBlock
        code={`import { CircleAlert } from "lucide-react";\nimport {\n  Modal,\n  ModalContent,\n  ModalHeader,\n  ModalTitle,\n  ModalDescription,\n  ModalFooter,\n  ModalTrigger,\n  ModalClose,\n  ModalAction,\n} from "~/components/ui/modal";\n\n<Modal>\n  <ModalTrigger>Open</ModalTrigger>\n  <ModalContent\n    alignment="center"\n    icon={<CircleAlert strokeWidth={2.5} />}\n    iconClassName="size-12 text-red-200"\n    showCloseButton\n    showIcon\n  >\n    <ModalHeader>\n      <ModalTitle>Heading</ModalTitle>\n      <ModalDescription>Description</ModalDescription>\n    </ModalHeader>\n    <ModalFooter>\n      <ModalClose asChild>\n        <ModalAction variant="primary">Confirm</ModalAction>\n      </ModalClose>\n    </ModalFooter>\n  </ModalContent>\n</Modal>`}
      />

      {/* ---------- all 12 variations ---------- */}
      <div className="space-y-4">
        <h3 className="text-h6 text-primary-10 font-bold">All 12 Variations</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {ALL_VARIATIONS.map((v) => (
            <VariationCard
              key={`${v.alignment}-${v.buttons}-${v.closeButton}`}
              v={v}
            />
          ))}
        </div>
      </div>
    </DemoSection>
  );
}
