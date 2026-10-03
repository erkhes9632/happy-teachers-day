import Link from "next/link";
import Background from "./components/Background";
import ConfettiButton from "./components/ConfettiButton";
import HomeDecor, { Bow } from "./components/HomeDecor";
import { doodles } from "./components/SideDecor";
import TeacherPhoto from "./components/TeacherPhoto";
import Wreath from "./components/Wreath";
import { site } from "./data/site";

export default function Home() {
  return (
    <main className="home-bg relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-6">
      <Background hearts />
      <HomeDecor />

      <div className="relative z-10 w-full max-w-2xl">
        <div
          aria-hidden
          className="absolute inset-0 -rotate-2 rounded-[2.5rem] bg-pink-100 shadow-lg"
        />
        <div
          aria-hidden
          className="absolute inset-0 rotate-[1.6deg] rounded-[2.5rem] bg-violet-100 shadow-lg"
        />

        <section className="relative rounded-[2.5rem] bg-[#fffdfb] px-6 pt-16 pb-12 text-center shadow-[0_40px_100px_-30px_rgba(168,85,247,0.4)] ring-1 ring-white sm:px-14 sm:pt-20 sm:pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-3 rounded-[2rem] border-2 border-dashed border-pink-200 sm:inset-4"
          />

          <Bow className="absolute -top-10 left-1/2 w-28 -translate-x-1/2 drop-shadow-md sm:-top-12 sm:w-32" />

          <div className="relative">
            <svg
              viewBox="0 0 64 64"
              className="sticker bob absolute -top-3 left-0 size-8 rotate-12 sm:left-4 sm:size-10"
              aria-hidden
            >
              {doodles.sparkle}
            </svg>
            <svg
              viewBox="0 0 64 64"
              className="sticker bob absolute right-0 -bottom-1 size-7 -rotate-12 [animation-delay:-1.2s] sm:right-6 sm:size-9"
              aria-hidden
            >
              {doodles.sparkle}
            </svg>

            <h1 className="fade-up d-2 text-5xl leading-[1.1] font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Багш нарын
              </span>
              <br />
              <span className="bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                баярын мэнд!
              </span>
            </h1>
          </div>

          <p className="fade-up d-3 mt-5 text-lg font-medium text-gray-600 sm:text-xl">
            {site.from} <span aria-hidden>❤️</span>
          </p>

          <div className="fade-up d-4 mt-6 mb-8">
            <div className="relative mx-auto grid aspect-square w-64 max-w-full place-items-center sm:w-80">
              <Wreath />
              <TeacherPhoto
                src={site.photo}
                alt={`${site.teacherName} ${site.teacherTitle}`}
                initial={site.teacherName.charAt(0)}
              />
            </div>
            <div className="relative z-10 -mt-7 drop-shadow-[0_8px_10px_rgba(190,60,130,0.3)]">
              <p className="ribbon mx-auto w-fit px-12 py-1.5 font-hand text-3xl text-white sm:text-4xl">
                {site.teacherName} {site.teacherTitle}
              </p>
            </div>
          </div>

          <p className="fade-up d-5 mx-auto max-w-sm text-sm leading-relaxed text-gray-500">
            {site.message}
          </p>

          <div className="fade-up d-6 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/quiz"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-purple-600 px-8 py-3.5 font-bold text-white shadow-xl shadow-pink-300/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-300/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500"
            >
              Захиа унших
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <ConfettiButton className="rounded-full bg-white/80 px-7 py-3.5 font-bold text-gray-700 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500">
              🎉 Баяр хүргэе
            </ConfettiButton>
          </div>
        </section>
      </div>
    </main>
  );
}
