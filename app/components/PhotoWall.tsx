import { photos } from "../data/photos";
import PhotoFrame from "./PhotoFrame";
import Reveal from "./Reveal";
import SideDecor from "./SideDecor";

const spots = [
  { place: "md:justify-self-end", w: "md:w-[84%]", tilt: "-rotate-3" },
  {
    place: "md:justify-self-start md:translate-y-20",
    w: "md:w-[78%]",
    tilt: "rotate-2",
  },
  { place: "md:justify-self-end", w: "md:w-[80%]", tilt: "rotate-1" },
  {
    place: "md:justify-self-start md:translate-y-24",
    w: "md:w-[86%]",
    tilt: "-rotate-2",
  },
  {
    place: "md:col-span-2 md:justify-self-center",
    w: "md:w-[56%]",
    tilt: "-rotate-1",
  },
  { place: "md:justify-self-end", w: "md:w-[78%]", tilt: "rotate-3" },
  {
    place: "md:justify-self-start md:translate-y-20",
    w: "md:w-[84%]",
    tilt: "-rotate-2",
  },
  { place: "md:justify-self-end", w: "md:w-[82%]", tilt: "rotate-2" },
  {
    place: "md:justify-self-start md:translate-y-16",
    w: "md:w-[80%]",
    tilt: "-rotate-3",
  },
  {
    place: "md:col-span-2 md:justify-self-center",
    w: "md:w-[62%]",
    tilt: "rotate-1",
  },
];

function trail(n: number) {
  let d = "M50 0";
  for (let k = 1; k <= n; k++) {
    const y = (1000 * k) / n;
    const cx = k % 2 ? 92 : 8;
    d += ` Q${cx} ${y - 500 / n} 50 ${y}`;
  }
  return d;
}

export default function PhotoWall() {
  const path = trail(Math.max(4, Math.ceil(photos.length / 2)));

  return (
    <div className="relative mx-auto max-w-6xl">
      <header className="relative z-10 mb-20 text-center">
        <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-[#5b3a1e] sm:text-5xl">
          Бидний хамтдаа өнгөрүүлсэн мөчүүд
        </h2>
        <p className="mt-3 font-hand text-3xl text-[#9a6b3a]">
          12Б анги, бүгдээрээ
        </p>
      </header>

      <div className="relative">
        <svg
          aria-hidden
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-24 -translate-x-1/2 md:block"
        >
          <path
            d={path}
            fill="none"
            stroke="#b98a55"
            strokeWidth="2.5"
            strokeDasharray="2 9"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.6"
          />
        </svg>

        <SideDecor count={photos.length} />

        <div className="relative z-10 grid grid-cols-1 items-start gap-x-20 gap-y-16 md:grid-cols-2 md:gap-y-28">
          {photos.map((p, i) => {
            const s = spots[i % spots.length];
            return (
              <div
                key={`${p.src}-${i}`}
                className={`mx-auto w-full max-w-md md:mx-0 md:max-w-none ${s.place} ${s.w}`}
              >
                <Reveal delay={(i % 2) * 120}>
                  <div className={s.tilt}>
                    <PhotoFrame
                      src={p.src}
                      caption={p.caption}
                      frame={p.frame}
                      index={i}
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
