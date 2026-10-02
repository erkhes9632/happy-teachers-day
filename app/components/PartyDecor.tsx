// Баярын чимэглэл: туг, үүл, бөмбөлөг (бүгд SVG, ямар ч зураг хэрэггүй)
const FLAGS = [
  "#ff7aa8",
  "#ffd166",
  "#9b7bff",
  "#4fd1b5",
  "#ff8a65",
  "#5aa9ff",
];

function Bunting() {
  const flags = Array.from({ length: 21 }, (_, i) => {
    const x = 30 + i * 57;
    const seg = Math.floor(x / 400);
    const t = (x - seg * 400) / 400;
    const y = 10 + 200 * t * (1 - t); // утас доош унжсан муруй
    const slope = (200 * (1 - 2 * t)) / 400;
    const angle = (Math.atan(slope) * 180) / Math.PI;
    return { x, y, angle, color: FLAGS[i % FLAGS.length] };
  });

  return (
    <svg
      viewBox="0 0 1200 150"
      preserveAspectRatio="xMidYMin slice"
      className="absolute inset-x-0 top-0 h-28 w-full sm:h-36"
      aria-hidden
    >
      <path
        d="M0,10 Q200,110 400,10 Q600,110 800,10 Q1000,110 1200,10"
        fill="none"
        stroke="#7a6a8a"
        strokeWidth="2"
      />
      {flags.map((f) => (
        <g key={f.x} transform={`translate(${f.x} ${f.y}) rotate(${f.angle})`}>
          <path
            d="M-22,0 L22,0 L0,52Z"
            fill={f.color}
            stroke="#fff"
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}

function Cloud({
  className,
  w,
  delay,
}: {
  className: string;
  w: number;
  delay: number;
}) {
  return (
    <svg
      viewBox="0 0 200 90"
      className={`cloud absolute ${className}`}
      style={{ width: w, animationDelay: `${delay}s` }}
      aria-hidden
    >
      <g fill="#fff" opacity="0.92">
        <circle cx="58" cy="54" r="26" />
        <circle cx="94" cy="40" r="34" />
        <circle cx="136" cy="52" r="28" />
        <rect x="40" y="52" width="118" height="30" rx="15" />
      </g>
    </svg>
  );
}

function Balloon({
  color,
  pos,
  w,
  delay,
  mobile,
}: {
  color: string;
  pos: string;
  w: number;
  delay: number;
  mobile: boolean;
}) {
  return (
    <svg
      viewBox="0 0 60 150"
      className={`balloon absolute ${pos} ${mobile ? "" : "hidden sm:block"}`}
      style={{ width: w, animationDelay: `${delay}s` }}
      aria-hidden
    >
      <path
        d="M30 102 C24 114 36 126 30 148"
        fill="none"
        stroke="#8a7a86"
        strokeWidth="1.2"
      />
      <path
        d="M30 2 C54 2 58 34 50 58 C44 78 36 90 30 96 C24 90 16 78 10 58 C2 34 6 2 30 2Z"
        fill={color}
      />
      <path d="M30 94 L25 103 L35 103Z" fill={color} />
      <ellipse
        cx="20"
        cy="26"
        rx="6"
        ry="12"
        fill="#fff"
        opacity="0.35"
        transform="rotate(20 20 26)"
      />
    </svg>
  );
}

const balloons = [
  {
    color: "#ff7aa8",
    pos: "left-[3%] top-[24%]",
    w: 70,
    delay: 0,
    mobile: true,
  },
  {
    color: "#ffd166",
    pos: "left-[11%] top-[50%]",
    w: 56,
    delay: -2,
    mobile: false,
  },
  {
    color: "#5aa9ff",
    pos: "-left-3 top-[66%]",
    w: 84,
    delay: -4,
    mobile: true,
  },
  {
    color: "#9b7bff",
    pos: "right-[4%] top-[28%]",
    w: 64,
    delay: -1,
    mobile: true,
  },
  {
    color: "#4fd1b5",
    pos: "right-[12%] top-[54%]",
    w: 76,
    delay: -3,
    mobile: false,
  },
  {
    color: "#ff8a65",
    pos: "-right-3 top-[70%]",
    w: 60,
    delay: -5,
    mobile: true,
  },
];

export default function PartyDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <Cloud className="top-[18%] -left-10" w={220} delay={0} />
      <Cloud className="top-[34%] right-[6%]" w={170} delay={-12} />
      <Cloud className="top-[58%] left-[22%]" w={140} delay={-24} />
      <Cloud className="top-[12%] right-[28%]" w={120} delay={-6} />
      {balloons.map((b) => (
        <Balloon key={b.pos} {...b} />
      ))}
      <Bunting />
    </div>
  );
}
