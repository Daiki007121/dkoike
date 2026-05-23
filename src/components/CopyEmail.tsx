"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const EMAIL = "daiki007121@gmail.com";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be unavailable (e.g., insecure context) — silently ignore
    }
  }

  return (
    <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
      <span>or copy:</span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 font-mono text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {EMAIL}
        {copied ? (
          <Check className="size-3.5" aria-hidden="true" />
        ) : (
          <Copy className="size-3.5" aria-hidden="true" />
        )}
      </button>
    </p>
  );
}
