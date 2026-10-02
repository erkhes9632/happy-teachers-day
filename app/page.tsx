import Link from "next/link";
import Background from "./components/Background";
import ConfettiButton from "./components/ConfettiButton";
import TeacherPhoto from "./components/TeacherPhoto";
import TypeWriter from "./components/TypeWriter";
import { site } from "./data/site";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-[#FFF4E8] via-white to-[#FFF0F6] px-4 py-12 sm:px-6">
      <Background hearts />

      <section className="relative z-10 w-full max-w-2xl rounded-[2.5rem] border border-white/80 bg-white/60 px-6 py-12 text-center shadow-[0_40px_100px_-30px_rgba(168,85,247,0.35)] backdrop-blur-2xl sm:px-14 sm:py-16">
        <div className="fade-up d-1 mb-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-5 py-2 font-mono text-xs text-white shadow-lg shadow-purple-300/50">
          <span className="opacity-70">&gt;_</span>
          <TypeWriter text={site.codeLine} />
        </div>

        <h1 className="fade-up d-2 text-5xl leading-[1.1] font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Багш нарын
          </span>
          <br />
          <span className="bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            баярын мэнд!
          </span>
        </h1>

        <p className="fade-up d-3 mt-5 text-lg font-medium text-gray-600 sm:text-xl">
          {site.from} <span aria-hidden>❤️</span>
        </p>

        <div className="fade-up d-4 my-10">
          <TeacherPhoto
            src={site.photo}
            alt={`${site.teacherName} ${site.teacherTitle}`}
            initial={site.teacherName.charAt(0)}
          />
          <p className="mt-6 font-hand text-4xl text-gray-700">
            {site.teacherName} {site.teacherTitle}
          </p>
        </div>

        <p className="fade-up d-5 mx-auto max-w-sm text-sm leading-relaxed text-gray-500">
          {site.message}
        </p>

        <div className="fade-up d-6 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/quiz"
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-purple-600 px-8 py-3.5 font-bold text-white shadow-xl shadow-pink-300/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-300/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500"
          >
            Захиануудыг унших
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <ConfettiButton className="rounded-full bg-white/80 px-7 py-3.5 font-bold text-gray-700 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500">
            🎉 Баяр хүргэе
          </ConfettiButton>
        </div>
      </section>
    </main>
  );
}
