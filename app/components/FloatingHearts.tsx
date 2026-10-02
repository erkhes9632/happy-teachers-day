"use client";

import { useEffect, useState } from "react";

const SYMBOLS = ["💖", "🌸", "✨", "💜", "📚", "🍎"];

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  symbol: string;
};

export default function FloatingHearts({ count = 10 }: { count?: number }) {
  const [items, setItems] = useState<Particle[]>([]);

  // Random утгыг зөвхөн browser дээр үүсгэнэ (hydration алдаанаас сэргийлнэ)
  useEffect(() => {
    setItems(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 16 + Math.random() * 16,
        duration: 18 + Math.random() * 14,
        delay: -Math.random() * 24,
        drift: (Math.random() - 0.5) * 120,
        symbol: SYMBOLS[i % SYMBOLS.length],
      })),
    );
  }, [count]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="float-up absolute -bottom-10"
          style={
            {
              left: `${p.left}%`,
              fontSize: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
