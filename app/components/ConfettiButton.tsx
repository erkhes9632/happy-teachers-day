"use client";

import type { ReactNode } from "react";
import { fireConfetti } from "../lib/confetti";

export default function ConfettiButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        fireConfetti({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
    >
      {children}
    </button>
  );
}
