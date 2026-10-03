"use client";

import { useEffect, useRef, useState } from "react";
import { fireConfetti } from "../lib/confetti";

const candles = [
  { x: 106, color: "#ff6b8b" },
  { x: 130, color: "#4fc3b0" },
  { x: 154, color: "#ffc84a" },
];

const sprinkles: [number, number, string][] = [
  [52, 204, "#ffd166"],
  [78, 216, "#9b7bff"],
  [104, 200, "#4fd1b5"],
  [150, 214, "#ff7aa8"],
  [176, 200, "#ffd166"],
  [202, 212, "#9b7bff"],
  [128, 220, "#5aa9ff"],
];

export default function Cake() {
  const [lit, setLit] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const blow = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!lit) return;
    setLit(false);
    const r = e.currentTarget.getBoundingClientRect();
    fireConfetti({ x: r.left + r.width / 2, y: r.top + r.height * 0.25 });
    timer.current = setTimeout(() => setLit(true), 3600);
  };

  return (
    <div className="mx-auto w-56 text-center sm:w-72">
      <button
        type="button"
        onClick={blow}
        aria-label="Лаагаа үлээх"
        className="block w-full rounded-3xl transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
      >
        <svg
          viewBox="0 0 260 250"
          className="w-full overflow-visible drop-shadow-[0_22px_28px_rgba(214,90,130,0.35)]"
          aria-hidden
        >
          <defs>
            <radialGradient id="cake-glow">
              <stop offset="0" stopColor="#ffe9a8" stopOpacity="0.95" />
              <stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="130" cy="234" rx="122" ry="15" fill="#f1d3dc" />
          <ellipse cx="130" cy="230" rx="114" ry="12" fill="#fff" />

          <rect x="34" y="158" width="192" height="72" rx="16" fill="#ffb8cf" />
          <path
            d="M34 176 q12 14 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 V158 H34Z"
            fill="#fff5f8"
          />
          {sprinkles.map(([x, y, c]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill={c} />
          ))}

          <rect x="62" y="104" width="136" height="58" rx="14" fill="#fff0c2" />
          <path
            d="M62 120 q11.3 12 22.7 0 t22.7 0 t22.7 0 t22.7 0 t22.7 0 t22.7 0 V104 H62Z"
            fill="#fffaf0"
          />
          <text
            x="130"
            y="148"
            textAnchor="middle"
            fontFamily="var(--font-caveat), cursive"
            fontSize="30"
            fill="#e0527f"
          >
            12Б
          </text>

          <rect x="90" y="64" width="80" height="44" rx="12" fill="#d9c9ff" />
          <path
            d="M90 78 q10 10 20 0 t20 0 t20 0 t20 0 V64 H90Z"
            fill="#f5efff"
          />

          {candles.map((c, i) => (
            <g key={c.x}>
              <rect
                x={c.x - 4}
                y="30"
                width="8"
                height="36"
                rx="2"
                fill={c.color}
              />
              <rect
                x={c.x - 4}
                y="40"
                width="8"
                height="5"
                fill="#fff"
                opacity="0.45"
              />
              <rect
                x={c.x - 4}
                y="52"
                width="8"
                height="5"
                fill="#fff"
                opacity="0.45"
              />
              <rect
                x={c.x - 0.8}
                y="24"
                width="1.6"
                height="7"
                fill="#5a4a4a"
              />

              <g
                className={`transition-opacity duration-500 ${lit ? "opacity-100" : "opacity-0"}`}
              >
                <circle cx={c.x} cy="16" r="28" fill="url(#cake-glow)" />
                <g transform={`translate(${c.x} 25)`}>
                  <g
                    className="flame"
                    style={{ animationDelay: `${-i * 0.37}s` }}
                  >
                    <path
                      d="M0,-20 C8,-10 8,-2 0,3 C-8,-2 -8,-10 0,-20Z"
                      fill="#ffb02e"
                    />
                    <path
                      d="M0,-12 C3.5,-7 3.5,-2 0,2 C-3.5,-2 -3.5,-7 0,-12Z"
                      fill="#fff3b0"
                    />
                  </g>
                </g>
              </g>
            </g>
          ))}
        </svg>
      </button>

      <p className="mt-3 font-hand text-2xl text-[#5a3a86]">
        {lit
          ? "Хүслээ бодоод лаагаа үлээгээрэй"
          : "Хүсэл тань биелэх болтугай ✨"}
      </p>
    </div>
  );
}
