import type { Metadata } from "next";
import Link from "next/link";
import Cake from "../components/Cake";
import ConfettiButton from "../components/ConfettiButton";
import FallingLayer from "../components/FallingLayer";
import LetterPaper from "../components/LetterPaper";
import PartyDecor from "../components/PartyDecor";
import PhotoWall from "../components/PhotoWall";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Багш танд зориулав 💌",
};

function Wave({ fill }: { fill: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 -bottom-px z-[5] block h-12 w-full sm:h-20"
    >
      <path
        d="M0,50 C180,95 360,5 540,40 C720,75 900,95 1080,45 C1260,0 1380,35 1440,50 L1440,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  );
}

export default function LettersPage() {
  return (
    <main className="overflow-x-clip">
      {/* 1. Баярын тэнгэр: торт, мэндчилгээ */}
      <section className="sky relative flex min-h-screen flex-col items-center justify-center px-4 pt-32 pb-36 text-center">
        <PartyDecor />
        <FallingLayer variant="snow" count={60} />

        <Link
          href="/"
          className="absolute top-5 left-4 z-20 rounded-full bg-white/90 px-5 py-2.5 text-sm font-bold text-gray-700 shadow-md transition-all hover:-translate-x-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 sm:top-8 sm:left-8"
        >
          ← Нүүр хуудас
        </Link>

        <div className="relative z-10">
          <div className="fade-up">
            <Cake />
          </div>

          <h1 className="fade-up d-3 mt-8 text-5xl leading-[1.08] font-extrabold tracking-tight text-[#3a1764] sm:text-6xl md:text-7xl">
            Багш нарын
            <br />
            баярын мэнд!
          </h1>

          <svg
            aria-hidden
            viewBox="0 0 240 14"
            className="fade-up d-4 mx-auto mt-3 w-48 sm:w-60"
            fill="none"
          >
            <path
              d="M4 8 C24 -2 40 16 60 7 S96 -1 116 8 S152 16 172 6 S212 0 236 8"
              stroke="#ff5e9c"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <p className="fade-up d-5 mt-5 font-hand text-3xl text-[#5a3a86] sm:text-4xl">
            Таны 12Б ангийн сурагчдаас
          </p>
        </div>

        <p className="bob absolute bottom-24 z-10 font-hand text-2xl text-[#5a3a86]/80 sm:bottom-28">
          Доош гүйлгээрэй ↓
        </p>

        <Wave fill="#f3e3c7" />
      </section>

      {/* 2. Kraft цаасан scrapbook: ангийн зургууд */}
      <section className="kraft relative px-4 pt-20 pb-44 sm:px-8">
        <FallingLayer variant="gold" count={44} />
        <PhotoWall />
        <Wave fill="#f6dde2" />
      </section>

      {/* 3. Сарнай өнгийн ширээн дээрх захидал */}
      <section className="rose-desk relative px-4 pt-20 pb-28 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[12%] -left-24 size-96 rounded-full bg-white/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-6rem] bottom-[18%] size-96 rounded-full bg-pink-300/40 blur-3xl"
        />
        <FallingLayer variant="petals" count={40} />

        <div className="relative z-10">
          <Reveal>
            <LetterPaper />
          </Reveal>
        </div>

        <footer className="relative z-10 mt-20 text-center">
          <p className="font-hand text-4xl text-rose-800">
            Баярын мэнд, багшаа!
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ConfettiButton className="rounded-full bg-linear-to-r from-pink-500 to-purple-600 px-8 py-3.5 font-bold text-white shadow-xl shadow-pink-300/60 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500">
              🎉 Баяр хүргэе
            </ConfettiButton>
            <Link
              href="/"
              className="rounded-full bg-white/80 px-7 py-3.5 font-bold text-gray-700 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
            >
              Нүүр хуудас руу буцах
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
