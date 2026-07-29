"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-primary-30 bg-primary-90 text-primary-10 shadow-primary-90/10 relative overflow-hidden rounded-2xl border p-4 shadow-xl">
      <div className="bg-[linear-gradient(90deg,theme(colors.tertiary.50),theme(colors.secondary.40),theme(colors.primary.30))] pointer-events-none absolute inset-x-0 top-0 h-1" />
      <button
        aria-label="Copy code"
        className="border-primary-30 bg-primary-80 text-primary-10 hover:bg-secondary-60 absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border transition-colors hover:text-neutral-100"
        onClick={onCopy}
        type="button"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className="overflow-x-auto pr-12 text-sm leading-6">
        <code>{code}</code>
      </pre>
    </div>
  );
}
