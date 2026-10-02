import { photos } from "../data/photos";
import PhotoFrame from "./PhotoFrame";
import Reveal from "./Reveal";

// Зураг бүрийн байрлал: зүүн, баруун, голд нь том, хазайлт нь янз бүр
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

export default function PhotoWall() {
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
        {/* Голд нь гүйх цэгэн зам */}
        <svg
          aria-hidden
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-24 -translate-x-1/2 md:block"
        >
          <path
            d="M50 0 C90 150 10 300 50 450 S90 750 50 1000"
            fill="none"
            stroke="#b98a55"
            strokeWidth="2.5"
            strokeDasharray="2 9"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.6"
          />
        </svg>

        {/* Наалттай цаас, од, зүрх */}
        <div
          aria-hidden
          className="absolute top-[20%] left-1/2 z-20 hidden w-44 -translate-x-1/2 rotate-3 bg-yellow-200 p-4 font-hand text-2xl leading-tight text-yellow-950 shadow-lg md:block"
        >
          Баярлалаа, багшаа!
        </div>
        <div
          aria-hidden
          className="absolute top-[63%] left-1/2 z-20 hidden w-44 -translate-x-1/2 -rotate-2 bg-pink-200 p-4 font-hand text-2xl leading-tight text-rose-950 shadow-lg md:block"
        >
          12Б, хамтдаа ❤️
        </div>
        <span
          aria-hidden
          className="absolute top-[6%] left-[4%] hidden rotate-12 text-5xl text-amber-400 md:block"
        >
          ★
        </span>
        <span
          aria-hidden
          className="absolute top-[38%] right-[3%] hidden -rotate-12 text-5xl text-rose-400 md:block"
        >
          ♥
        </span>
        <span
          aria-hidden
          className="absolute top-[52%] left-[3%] hidden rotate-6 text-4xl text-teal-500 md:block"
        >
          ✦
        </span>
        <span
          aria-hidden
          className="absolute top-[80%] right-[5%] hidden rotate-12 text-5xl text-amber-400 md:block"
        >
          ★
        </span>

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
