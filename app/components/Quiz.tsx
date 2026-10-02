"use client";

import Link from "next/link";
import { useState } from "react";
import { quiz } from "../data/quiz";
import { fireHearts } from "../lib/hearts";

const bands = ["bg-sky-400", "bg-amber-400", "bg-emerald-400", "bg-violet-400"];
const avatars = [
  "bg-sky-100 text-sky-600",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-600",
];
const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1"];

export default function Quiz() {
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);

  const attempts = wrongIds.length;
  const hint =
    attempts > 0 ? quiz.hints[Math.min(attempts, quiz.hints.length) - 1] : null;
  const wrongLine =
    attempts > 0
      ? quiz.wrongLines[(attempts - 1) % quiz.wrongLines.length]
      : null;
  const winner = quiz.teachers.find((t) => t.id === quiz.correctId);

  function pick(id: string, el: HTMLElement) {
    if (solved || wrongIds.includes(id)) return;
    if (id === quiz.correctId) {
      setSolved(true);
      const r = el.getBoundingClientRect();
      fireHearts({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    } else {
      setWrongIds((w) => [...w, id]);
    }
  }

  return (
    <main className="dusk relative min-h-screen overflow-hidden px-4 pt-28 pb-20 sm:px-6">
      {/* Од, сар */}
      <div aria-hidden className="stars pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="stars-twinkle pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-10 size-56 rounded-full bg-[#fff3c4] opacity-90 shadow-[0_0_120px_30px_rgba(255,230,160,0.35)]"
      />

      <Link
        href="/"
        className="absolute top-5 left-4 z-20 rounded-full bg-white/90 px-5 py-2.5 text-sm font-bold text-gray-700 shadow-md transition-all hover:-translate-x-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:top-8 sm:left-8"
      >
        ← Нүүр хуудас
      </Link>

      <header className="fade-up relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl">
          {quiz.question}
        </h1>
        <p className="mt-4 font-hand text-3xl text-amber-200">{quiz.prompt}</p>
      </header>

      <ul className="relative z-10 mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
        {quiz.teachers.map((t, i) => {
          const isWrong = wrongIds.includes(t.id);
          const isWin = solved && t.id === quiz.correctId;
          const isDim = solved && !isWin;

          const outer = isWin
            ? "bg-linear-to-br from-pink-500 via-rose-400 to-amber-300 scale-[1.06] shadow-[0_0_70px_12px_rgba(255,150,185,0.55)]"
            : isWrong
              ? "bg-white/5 opacity-50 grayscale shake"
              : isDim
                ? "bg-white/10 opacity-40 scale-95"
                : `bg-white/15 hover:-translate-y-1.5 hover:rotate-0 hover:bg-white/35 ${tilts[i % tilts.length]}`;

          return (
            <li key={t.id}>
              <button
                type="button"
                disabled={solved || isWrong}
                onClick={(e) => pick(t.id, e.currentTarget)}
                className={`relative block w-full rounded-[1.75rem] p-1.5 text-left transition-all duration-500 disabled:cursor-default focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${outer}`}
              >
                <span
                  className={`block overflow-hidden rounded-[1.4rem] shadow-lg ${isWin ? "bg-[#fff7f2]" : "bg-white"}`}
                >
                  {/* Нэрийн шошгоны дээд хэсэг */}
                  <span
                    className={`flex h-12 items-center justify-center ${
                      isWin
                        ? "bg-linear-to-r from-pink-500 to-amber-400"
                        : isWrong
                          ? "bg-gray-400"
                          : bands[i % bands.length]
                    }`}
                  >
                    <span className="h-2 w-12 rounded-full bg-black/20" />
                  </span>

                  <span className="flex flex-col items-center gap-2 px-4 pt-6 pb-7">
                    <span
                      className={`flex size-16 items-center justify-center rounded-full font-hand text-4xl ${
                        isWin
                          ? "bg-pink-100 text-pink-600"
                          : isWrong
                            ? "bg-gray-100 text-gray-400"
                            : avatars[i % avatars.length]
                      }`}
                    >
                      {isWrong ? "✕" : isWin ? "♥" : t.name.charAt(0)}
                    </span>
                    <span className="font-hand text-4xl leading-none text-gray-800">
                      {t.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-400">
                      багш
                    </span>
                  </span>
                </span>

                {isWin && (
                  <>
                    <span
                      aria-hidden
                      className="bob absolute -top-4 -left-3 text-3xl"
                    >
                      💖
                    </span>
                    <span
                      aria-hidden
                      className="bob absolute -top-5 right-5 text-2xl [animation-delay:-0.8s]"
                    >
                      ✨
                    </span>
                    <span
                      aria-hidden
                      className="bob absolute -right-3 -bottom-4 text-3xl [animation-delay:-1.4s]"
                    >
                      💗
                    </span>
                    <span
                      aria-hidden
                      className="bob absolute -bottom-3 left-6 text-xl [animation-delay:-0.4s]"
                    >
                      🌸
                    </span>
                  </>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Хариу, заавар */}
      <div
        aria-live="polite"
        className="relative z-10 mx-auto mt-12 min-h-40 max-w-xl text-center"
      >
        {solved ? (
          <div className="pop">
            <p className="font-hand text-6xl text-pink-200">Яг зөв!</p>
            <p className="mt-2 text-lg text-white/90">
              Та <b>{winner?.name}</b> багшийг сонголоо 💖
            </p>
            <Link
              href="/letters"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-amber-400 px-8 py-3.5 font-bold text-white shadow-xl shadow-pink-500/40 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
            >
              Захианы хуудас руу
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        ) : attempts > 0 ? (
          <div key={attempts} className="pop">
            <p className="text-xl font-bold text-white">
              {wrongLine} Өөр багшийг сонгоорой.
            </p>
            <p className="mt-4 inline-block -rotate-1 rounded-2xl bg-amber-200 px-5 py-3 font-semibold text-amber-950 shadow-lg">
              💡 Заавар: {hint}
            </p>
          </div>
        ) : null}
      </div>
    </main>
  );
}
