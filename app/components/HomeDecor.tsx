import { doodles } from "./SideDecor";

const hangers = [
  {
    x: 3,
    len: 60,
    kind: "heart",
    color: "#ff8fb1",
    size: 34,
    delay: 0,
    dur: 5.2,
    show: "",
  },
  {
    x: 8,
    len: 120,
    kind: "star",
    color: "#ffd54a",
    size: 30,
    delay: -1.2,
    dur: 6.1,
    show: "",
  },
  {
    x: 14,
    len: 40,
    kind: "heart",
    color: "#c4a8ff",
    size: 28,
    delay: -2.1,
    dur: 4.8,
    show: "hidden sm:block",
  },
  {
    x: 20,
    len: 95,
    kind: "heart",
    color: "#ff6b9a",
    size: 38,
    delay: -0.6,
    dur: 5.7,
    show: "hidden lg:block",
  },
  {
    x: 79,
    len: 85,
    kind: "heart",
    color: "#ff6b9a",
    size: 36,
    delay: -1.8,
    dur: 5.4,
    show: "hidden lg:block",
  },
  {
    x: 85,
    len: 45,
    kind: "star",
    color: "#ffd54a",
    size: 28,
    delay: -0.3,
    dur: 4.9,
    show: "hidden sm:block",
  },
  {
    x: 90,
    len: 115,
    kind: "heart",
    color: "#c4a8ff",
    size: 34,
    delay: -2.6,
    dur: 6.3,
    show: "",
  },
  {
    x: 93,
    len: 65,
    kind: "heart",
    color: "#7fe0c8",
    size: 30,
    delay: -1.4,
    dur: 5.1,
    show: "",
  },
];

function Ornament({ kind, color }: { kind: string; color: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className="-mt-1.5 block w-full drop-shadow-sm"
      aria-hidden
    >
      {kind === "heart" ? (
        <>
          <path
            d="M20 36 C4 24 4 8 14 8 C18 8 20 11 20 14 C20 11 22 8 26 8 C36 8 36 24 20 36Z"
            fill={color}
          />
          <ellipse
            cx="13"
            cy="15"
            rx="3"
            ry="4.5"
            fill="#fff"
            opacity="0.4"
            transform="rotate(-25 13 15)"
          />
        </>
      ) : (
        <path
          d="M20 3 L25 15 L38 16 L28 25 L31 37 L20 30 L9 37 L12 25 L2 16 L15 15Z"
          fill={color}
        />
      )}
    </svg>
  );
}

const stickers = [
  { type: "apple", cls: "left-[6%] top-[26%] size-20 -rotate-12", delay: 0 },
  { type: "books", cls: "left-[12%] top-[58%] size-24 rotate-6", delay: -0.9 },
  { type: "cap", cls: "left-[4%] top-[76%] size-20 rotate-12", delay: -1.7 },
  {
    type: "pencil",
    cls: "right-[7%] top-[24%] size-20 rotate-12",
    delay: -0.5,
  },
  {
    type: "plane",
    cls: "right-[13%] top-[52%] size-20 -rotate-6",
    delay: -1.3,
  },
  {
    type: "rainbow",
    cls: "right-[5%] top-[74%] size-24 -rotate-12",
    delay: -2.1,
  },
];

const PETALS = [
  "#ffffff",
  "#ffc2d6",
  "#ffe28a",
  "#d9c9ff",
  "#ff9fb8",
  "#ffd0a8",
];

function Head({ kind, color }: { kind: string; color: string }) {
  if (kind === "daisy") {
    return (
      <>
        {Array.from({ length: 8 }, (_, k) => (
          <ellipse
            key={k}
            cx="0"
            cy="-8"
            rx="3.6"
            ry="7.5"
            fill={color}
            stroke="#e9b8cb"
            strokeOpacity="0.6"
            strokeWidth="0.7"
            transform={`rotate(${k * 45})`}
          />
        ))}
        <circle r="4.2" fill="#ffc83d" />
      </>
    );
  }
  if (kind === "tulip") {
    return (
      <>
        <path
          d="M-10 -1 C-12 -14 -5 -25 0 -28 C5 -25 12 -14 10 -1 C5 5 -5 5 -10 -1Z"
          fill={color}
          stroke="#d98aa6"
          strokeOpacity="0.6"
          strokeWidth="0.8"
        />
        <path
          d="M-4 -26 C-2 -16 2 -16 4 -26"
          fill="none"
          stroke="#d98aa6"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
      </>
    );
  }
  return (
    <>
      {Array.from({ length: 5 }, (_, k) => (
        <circle
          key={k}
          cx="0"
          cy="-8"
          r="6"
          fill={color}
          stroke="#e9b8cb"
          strokeOpacity="0.6"
          strokeWidth="0.7"
          transform={`rotate(${k * 72})`}
        />
      ))}
      <circle r="3.2" fill="#ff8fa8" />
    </>
  );
}

function Garden() {
  const kinds = ["daisy", "tulip", "blossom"];
  const plants = Array.from({ length: 30 }, (_, i) => ({
    x: 24 + i * 48 + ((i * 37) % 17),
    h: 70 + ((i * 53) % 70),
    lean: ((i * 29) % 21) - 10,
    kind: kinds[i % 3],
    color: PETALS[i % PETALS.length],
    delay: -(i % 7) * 0.6,
  }));

  return (
    <svg
      viewBox="0 0 1440 190"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-x-0 bottom-0 h-[13vw] min-h-32 w-full"
      aria-hidden
    >
      <path
        d="M0 190 V150 C180 128 360 160 560 146 C760 132 960 162 1180 144 C1300 134 1380 146 1440 140 V190Z"
        fill="#cfeed6"
      />
      {plants.map((p) => (
        <g key={p.x} transform={`translate(${p.x} 160)`}>
          <g className="plant" style={{ animationDelay: `${p.delay}s` }}>
            <path
              d={`M0 0 C0 ${-p.h * 0.4} ${p.lean * 0.3} ${-p.h * 0.75} ${p.lean} ${-p.h}`}
              fill="none"
              stroke="#5fb97a"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d={`M0 ${-p.h * 0.35} q-14 -6 -18 -18 q14 0 18 18Z`}
              fill="#6cc785"
            />
            <path
              d={`M0 ${-p.h * 0.2} q14 -6 18 -18 q-14 0 -18 18Z`}
              fill="#7fd09a"
            />
            <g transform={`translate(${p.lean} ${-p.h})`}>
              <Head kind={p.kind} color={p.color} />
            </g>
          </g>
        </g>
      ))}
      <path
        d="M0 190 V168 C240 150 480 176 720 164 C960 152 1200 178 1440 160 V190Z"
        fill="#aee3bf"
      />
    </svg>
  );
}

export function Bow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 84" className={className} aria-hidden>
      <g
        stroke="#c2417d"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M56 48 L34 80 L50 74 L58 80 Z" fill="#ff5f9a" />
        <path d="M64 48 L86 80 L70 74 L62 80 Z" fill="#ff5f9a" />
        <path d="M60 40 C38 4 6 8 8 36 C10 62 42 60 60 40Z" fill="#ff7fb0" />
        <path
          d="M60 40 C82 4 114 8 112 36 C110 62 78 60 60 40Z"
          fill="#ff7fb0"
        />
        <rect x="50" y="28" width="20" height="24" rx="8" fill="#ff5f9a" />
      </g>
      <path
        d="M22 24 C30 18 40 22 46 32"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M98 24 C90 18 80 22 74 32"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomeDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {hangers.map((h) => (
        <div
          key={h.x}
          className={`swing absolute top-0 ${h.show}`}
          style={{
            left: `${h.x}%`,
            width: h.size,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.dur}s`,
          }}
        >
          <span
            className="mx-auto block w-px bg-gray-400/60"
            style={{ height: h.len }}
          />
          <Ornament kind={h.kind} color={h.color} />
        </div>
      ))}

      {stickers.map((s) => (
        <svg
          key={s.type}
          viewBox="0 0 64 64"
          className={`sticker bob absolute hidden xl:block ${s.cls}`}
          style={{ animationDelay: `${s.delay}s` }}
        >
          {doodles[s.type]}
        </svg>
      ))}

      <Garden />
    </div>
  );
}
