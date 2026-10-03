import type { ReactNode } from "react";

const COLORS = [
  "#ffffff",
  "#ffc2d6",
  "#ffe28a",
  "#d9c9ff",
  "#ff9fb8",
  "#bff0e0",
];

function Daisy({ color }: { color: string }) {
  return (
    <>
      {Array.from({ length: 8 }, (_, k) => (
        <ellipse
          key={k}
          cx="0"
          cy="-7"
          rx="3.3"
          ry="6.6"
          fill={color}
          stroke="#e9b8cb"
          strokeOpacity="0.6"
          strokeWidth="0.7"
          transform={`rotate(${k * 45})`}
        />
      ))}
      <circle r="3.6" fill="#ffc83d" />
    </>
  );
}

function Blossom({ color }: { color: string }) {
  return (
    <>
      {Array.from({ length: 5 }, (_, k) => (
        <circle
          key={k}
          cx="0"
          cy="-6.5"
          r="5.4"
          fill={color}
          stroke="#e9b8cb"
          strokeOpacity="0.6"
          strokeWidth="0.7"
          transform={`rotate(${k * 72})`}
        />
      ))}
      <circle r="2.8" fill="#ff8fa8" />
    </>
  );
}

export default function Wreath() {
  const cx = 150;
  const cy = 150;
  const R = 130;
  const n = 14;
  const leaves: ReactNode[] = [];
  const berries: ReactNode[] = [];
  const flowers: ReactNode[] = [];

  for (let i = 0; i < n; i++) {
    const a = (i / n) * 360 - 90;
    const rad = (a * Math.PI) / 180;
    const mid = a + 180 / n;
    const mr = (mid * Math.PI) / 180;

    (
      [
        [-3, -40, "#7fd09a"],
        [3, 40, "#5fb97a"],
      ] as const
    ).forEach(([dr, tilt, c]) => {
      const lx = cx + (R + dr) * Math.cos(mr);
      const ly = cy + (R + dr) * Math.sin(mr);
      leaves.push(
        <ellipse
          key={`l-${i}-${dr}`}
          rx="3.6"
          ry="10"
          fill={c}
          transform={`translate(${lx.toFixed(2)} ${ly.toFixed(2)}) rotate(${(mid + tilt).toFixed(1)})`}
        />,
      );
    });

    berries.push(
      <circle
        key={`b-${i}`}
        r="2.2"
        fill="#ff8fa8"
        cx={(cx + (R + 11) * Math.cos(mr)).toFixed(2)}
        cy={(cy + (R + 11) * Math.sin(mr)).toFixed(2)}
      />,
    );

    const x = cx + R * Math.cos(rad);
    const y = cy + R * Math.sin(rad);
    const big = i % 2 === 0;
    flowers.push(
      <g
        key={`f-${i}`}
        transform={`translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${(a + 90).toFixed(1)}) scale(${big ? 1.05 : 0.8})`}
      >
        {big ? (
          <Daisy color={COLORS[i % COLORS.length]} />
        ) : (
          <Blossom color={COLORS[(i + 2) % COLORS.length]} />
        )}
      </g>,
    );
  }

  return (
    <svg
      viewBox="0 0 300 300"
      className="wreath-spin pointer-events-none absolute inset-0 size-full"
      aria-hidden
    >
      {leaves}
      {berries}
      {flowers}
    </svg>
  );
}
