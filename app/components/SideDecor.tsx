import type { ReactNode } from "react";

const S = {
  stroke: "#6b4a2b",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const doodles: Record<string, ReactNode> = {
  star: (
    <path
      d="M32 6 L39 24 L58 25 L43 37 L48 56 L32 45 L16 56 L21 37 L6 25 L25 24Z"
      fill="#ffd54a"
      {...S}
    />
  ),
  heart: (
    <path
      d="M32 54 C8 38 8 14 24 14 C29 14 32 18 32 22 C32 18 35 14 40 14 C56 14 56 38 32 54Z"
      fill="#ff8fb1"
      {...S}
    />
  ),
  plane: (
    <>
      <path d="M6 30 L58 8 L44 56 L32 38 L22 46 L24 34Z" fill="#fff" {...S} />
      <path d="M58 8 L24 34" fill="none" {...S} />
    </>
  ),
  flower: (
    <>
      <g fill="#ffc2d6" {...S}>
        {[
          [32, 14],
          [47, 23],
          [47, 41],
          [32, 50],
          [17, 41],
          [17, 23],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="9" />
        ))}
      </g>
      <circle cx="32" cy="32" r="8" fill="#ffd54a" {...S} />
    </>
  ),
  apple: (
    <>
      <path
        d="M32 20 C22 12 8 20 10 36 C12 52 24 58 32 54 C40 58 52 52 54 36 C56 20 42 12 32 20Z"
        fill="#ff6b6b"
        {...S}
      />
      <path d="M32 20 C32 14 34 10 38 8" fill="none" {...S} />
      <path
        d="M36 12 C42 6 50 8 50 8 C50 8 48 16 40 16Z"
        fill="#6bcf7f"
        {...S}
      />
    </>
  ),
  pencil: (
    <g transform="rotate(45 32 32)">
      <rect x="26" y="4" width="12" height="40" fill="#ffcf4a" {...S} />
      <rect x="26" y="4" width="12" height="9" fill="#ff8fb1" {...S} />
      <path d="M26 44 L38 44 L32 58Z" fill="#f3d9b1" {...S} />
      <path d="M29.5 52 L34.5 52 L32 58Z" fill="#444" />
    </g>
  ),
  cap: (
    <>
      <path d="M32 12 L60 26 L32 40 L4 26Z" fill="#3a2f5b" {...S} />
      <path
        d="M16 33 V46 C24 53 40 53 48 46 V33 L32 41Z"
        fill="#524578"
        {...S}
      />
      <path
        d="M56 28 V44"
        fill="none"
        stroke="#e6b422"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="56" cy="46" r="3" fill="#e6b422" />
    </>
  ),
  books: (
    <>
      <rect x="8" y="40" width="48" height="13" rx="2" fill="#7fc8f8" {...S} />
      <rect x="12" y="27" width="42" height="13" rx="2" fill="#ffb86b" {...S} />
      <rect x="10" y="14" width="44" height="13" rx="2" fill="#b39ddb" {...S} />
    </>
  ),
  rainbow: (
    <g fill="none" strokeWidth="5" strokeLinecap="round">
      <path d="M8 50 A24 24 0 0 1 56 50" stroke="#ff6b6b" />
      <path d="M15 50 A17 17 0 0 1 49 50" stroke="#ffd54a" />
      <path d="M22 50 A10 10 0 0 1 42 50" stroke="#5aa9ff" />
    </g>
  ),
  sparkle: (
    <path
      d="M32 6 C34 24 40 30 58 32 C40 34 34 40 32 58 C30 40 24 34 6 32 C24 30 30 24 32 6Z"
      fill="#fff3a8"
      {...S}
    />
  ),
};

const TYPES = [
  "apple",
  "note",
  "star",
  "plane",
  "heart",
  "flower",
  "note",
  "pencil",
  "rainbow",
  "cap",
  "sparkle",
  "books",
  "note",
  "heart",
];
const NOTES = [
  "Баярлалаа!",
  "Хайртай шүү",
  "Бид хамтдаа",
  "Хамгийн сайн багш",
  "Мартахгүй ээ",
  "12Б ❤️",
  "Баярын мэнд!",
];
const NOTE_COLORS = [
  "bg-yellow-200 text-yellow-950",
  "bg-pink-200 text-rose-950",
  "bg-emerald-200 text-emerald-950",
  "bg-violet-200 text-violet-950",
];
const XS = [-7, 2, -3, 5, -9, 0, 4, -5];
const ROT = [-12, 8, -5, 14, -9, 6, -15, 10];
const SIZES = [
  "size-12 xl:size-16",
  "size-14 xl:size-20",
  "size-16 xl:size-24",
  "size-12 xl:size-20",
];

export default function SideDecor({ count }: { count: number }) {
  const n = Math.max(6, Math.round(count / 2));
  const items: ReactNode[] = [];
  let noteIdx = 0;

  for (let i = 0; i < n; i++) {
    for (const side of [0, 1]) {
      const type = TYPES[(i * 3 + side * 5) % TYPES.length];
      const x = XS[(i + side * 3) % XS.length];
      const rot = ROT[(i * 2 + side) % ROT.length];
      const top = ((i + (side ? 0.75 : 0.25)) / n) * 100;
      const pos = side === 0 ? { left: `${x}%` } : { right: `${x}%` };
      const vis = x < -5 ? "hidden xl:block" : "hidden md:block";
      const style = { top: `${top}%`, transform: `rotate(${rot}deg)`, ...pos };
      const key = `${i}-${side}`;

      if (type === "note") {
        const k = noteIdx++;
        items.push(
          <div
            key={key}
            style={style}
            className={`absolute ${vis} w-28 p-3 pt-4 font-hand text-xl leading-tight shadow-md xl:w-36 xl:text-2xl ${NOTE_COLORS[k % NOTE_COLORS.length]}`}
          >
            <span className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 bg-white/60" />
            {NOTES[k % NOTES.length]}
          </div>,
        );
      } else {
        items.push(
          <svg
            key={key}
            viewBox="0 0 64 64"
            style={style}
            className={`sticker absolute ${vis} ${SIZES[(i + side) % SIZES.length]}`}
          >
            {doodles[type]}
          </svg>,
        );
      }
    }
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {["-left-5 xl:-left-14", "-right-5 xl:-right-14"].map((pos) => (
        <div
          key={pos}
          className={`absolute inset-y-0 ${pos} hidden w-6 md:block`}
        >
          <div className="lights-glow absolute inset-0" />
          <div className="lights absolute inset-0" />
        </div>
      ))}

      <span className="absolute top-[12%] -left-[7%] hidden -rotate-12 font-hand text-[16rem] leading-none text-[#b98a55]/15 select-none xl:block">
        12Б
      </span>
      <span className="absolute top-[44%] -right-[6%] hidden rotate-6 font-hand text-[16rem] leading-none text-[#b98a55]/15 select-none xl:block">
        12Б
      </span>
      <span className="absolute top-[76%] -left-[6%] hidden rotate-12 font-hand text-[16rem] leading-none text-[#b98a55]/15 select-none xl:block">
        12Б
      </span>

      {items}
    </div>
  );
}
