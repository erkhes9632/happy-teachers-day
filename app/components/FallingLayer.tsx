"use client";

import { useEffect, useState } from "react";

type Variant = "snow" | "gold" | "petals";

type P = {
  id: number;
  left: number;
  size: number;
  fall: number;
  delay: number;
  sway: number;
  amp: number;
  spin: number;
  opacity: number;
  kind: number;
};

const CONFIG: Record<
  Variant,
  { size: [number, number]; fall: [number, number] }
> = {
  snow: { size: [3, 9], fall: [12, 22] },
  gold: { size: [4, 8], fall: [16, 28] },
  petals: { size: [8, 14], fall: [14, 26] },
};

const BITS = ["#f48fb1", "#80cbc4", "#ffcc80", "#b39ddb", "#ffffff"];
const rand = (a: number, b: number) => a + Math.random() * (b - a);

function Shape({ variant, p }: { variant: Variant; p: P }) {
  const s = p.size;

  if (variant === "snow") {
    if (p.kind < 0.3) {
      return (
        <span
          className="tumble block leading-none text-white"
          style={{
            fontSize: s * 2.4,
            opacity: p.opacity,
            textShadow: "0 0 8px rgba(110,170,255,.9)",
            animationDuration: `${p.spin * 2}s`,
          }}
        >
          {"❄\uFE0E"}
        </span>
      );
    }
    return (
      <span
        className="block rounded-full bg-white"
        style={{
          width: s,
          height: s,
          opacity: p.opacity,
          boxShadow: "0 0 8px rgba(255,255,255,.95)",
          filter: s > 6.5 ? "blur(1px)" : undefined,
        }}
      />
    );
  }

  if (variant === "gold") {
    if (p.kind < 0.45) {
      return (
        <span
          className="block rounded-full"
          style={{
            width: s,
            height: s,
            opacity: p.opacity,
            background: "#f5c451",
            boxShadow: "0 0 8px rgba(245,196,81,.95)",
          }}
        />
      );
    }
    if (p.kind < 0.8) {
      return (
        <span
          className="tumble block rounded-[2px]"
          style={{
            width: s * 0.8,
            height: s * 1.7,
            opacity: p.opacity,
            background: BITS[Math.floor(p.kind * 100) % BITS.length],
            animationDuration: `${p.spin}s`,
          }}
        />
      );
    }
    return (
      <span
        className="tumble block leading-none text-[#d79b3c]"
        style={{
          fontSize: s * 2.6,
          opacity: p.opacity,
          animationDuration: `${p.spin * 1.5}s`,
        }}
      >
        {"✦\uFE0E"}
      </span>
    );
  }

  if (p.kind < 0.65) {
    return (
      <span
        className="tumble block"
        style={{
          width: s * 1.3,
          height: s * 1.7,
          borderRadius: "100% 0 100% 0",
          background: "linear-gradient(135deg,#ffc2d1,#ff6f9c)",
          opacity: p.opacity,
          animationDuration: `${p.spin}s`,
        }}
      />
    );
  }
  if (p.kind < 0.88) {
    return (
      <span
        className="block leading-none text-rose-400"
        style={{ fontSize: s * 1.8, opacity: p.opacity }}
      >
        {"♥\uFE0E"}
      </span>
    );
  }
  return (
    <span
      className="block rounded-full bg-white"
      style={{
        width: s * 0.6,
        height: s * 0.6,
        opacity: p.opacity,
        boxShadow: "0 0 8px rgba(255,255,255,.95)",
      }}
    />
  );
}

export default function FallingLayer({
  variant,
  count = 36,
}: {
  variant: Variant;
  count?: number;
}) {
  const [items, setItems] = useState<P[]>([]);

  useEffect(() => {
    const c = CONFIG[variant];
    setItems(
      Array.from({ length: count }, (_, id) => {
        const fall = rand(c.fall[0], c.fall[1]);
        return {
          id,
          left: rand(0, 100),
          size: rand(c.size[0], c.size[1]),
          fall,
          delay: -Math.random() * fall,
          sway: rand(3, 6),
          amp: rand(10, 34),
          spin: rand(5, 12),
          opacity: rand(0.55, 1),
          kind: Math.random(),
        };
      }),
    );
  }, [variant, count]);

  return (
    <div
      aria-hidden
      className="fall-layer pointer-events-none absolute inset-0 z-[1] overflow-clip"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {items.map((p) => (
          <span
            key={p.id}
            className={`fall absolute top-0 ${p.id % 2 ? "hidden sm:block" : ""}`}
            style={{
              left: `${p.left}%`,
              animationDuration: `${p.fall}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            <span
              className="sway block"
              style={
                {
                  animationDuration: `${p.sway}s`,
                  "--amp": `${p.amp}px`,
                } as React.CSSProperties
              }
            >
              <Shape variant={variant} p={p} />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
