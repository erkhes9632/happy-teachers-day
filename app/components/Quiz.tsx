"use client";

import Link from "next/link";
import { useState } from "react";
import { questions } from "../data/questions";
import { quiz } from "../data/quiz";
import { fireConfetti } from "../lib/confetti";
import { fireHearts } from "../lib/hearts";
import { startMusic } from "../lib/music";

const bands = [
  "bg-sky-400",
  "bg-amber-400",
  "bg-emerald-400",
  "bg-violet-400",
  "bg-rose-400",
  "bg-teal-400",
];
const avatars = [
  "bg-sky-100 text-sky-600",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-600",
  "bg-rose-100 text-rose-600",
  "bg-teal-100 text-teal-700",
];
const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1"];
const LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);

  const q = questions[step];
  const total = questions.length;
  const isLast = step === total - 1;
  const attempts = wrongIds.length;

  const hint =
    attempts > 0 && q.hints.length > 0
      ? q.hints[Math.min(attempts, q.hints.length) - 1]
      : null;
  const wrongLine =
    attempts > 0
      ? quiz.wrongLines[(attempts - 1) % quiz.wrongLines.length]
      : null;
  const winner = q.options.find((o) => o.id === q.correctId);

  function pick(id: string, el: HTMLElement) {
    if (solved || wrongIds.includes(id)) return;
    if (id === q.correctId) {
      setSolved(true);
      const r = el.getBoundingClientRect();
      const origin = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      fireHearts(origin);
      if (isLast) fireConfetti(origin, 3600);
    } else {
      setWrongIds((w) => [...w, id]);
    }
  }

  function next() {
    setStep((s) => s + 1);
    setWrongIds([]);
    setSolved(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="dusk relative min-h-screen overflow-hidden px-4 pt-28 pb-20 sm:px-6">
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

      <div key={step} className="relative z-10">
        <header className="fade-up mx-auto max-w-2xl text-center">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {q.title}
          </h1>
          <p className="mt-4 font-hand text-3xl text-amber-200">
            {q.prompt ?? "Нэгийг нь сонгоорой"}
          </p>
        </header>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          {q.options.map((o, i) => {
            const isWrong = wrongIds.includes(o.id);
            const isWin = solved && o.id === q.correctId;
            const isDim = solved && !isWin;

            const outer = isWin
              ? "bg-linear-to-br from-pink-500 via-rose-400 to-amber-300 scale-[1.06] shadow-[0_0_70px_12px_rgba(255,150,185,0.55)]"
              : isWrong
                ? "bg-white/5 opacity-50 grayscale shake"
                : isDim
                  ? "bg-white/10 opacity-40 scale-95"
                  : `bg-white/15 hover:-translate-y-1.5 hover:rotate-0 hover:bg-white/35 ${tilts[i % tilts.length]}`;

            const avatarCls = isWin
              ? "bg-pink-100 text-pink-600"
              : isWrong
                ? "bg-gray-100 text-gray-400"
                : avatars[i % avatars.length];
            const avatarChar = isWrong
              ? "✕"
              : isWin
                ? "♥"
                : q.kind === "teacher"
                  ? o.text.charAt(0)
                  : LETTERS[i % LETTERS.length];

            return (
              <li key={o.id}>
                <button
                  type="button"
                  disabled={solved || isWrong}
                  onClick={(e) => pick(o.id, e.currentTarget)}
                  className={`relative block w-full rounded-[1.75rem] p-1.5 text-left transition-all duration-500 disabled:cursor-default focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${outer}`}
                >
                  <span
                    className={`block overflow-hidden rounded-[1.4rem] shadow-lg ${isWin ? "bg-[#fff7f2]" : "bg-white"}`}
                  >
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

                    {q.kind === "teacher" ? (
                      <span className="flex flex-col items-center gap-2 px-4 pt-6 pb-7">
                        <span
                          className={`flex size-16 items-center justify-center rounded-full font-hand text-4xl ${avatarCls}`}
                        >
                          {avatarChar}
                        </span>
                        <span className="font-hand text-4xl leading-none text-gray-800">
                          {o.text}
                        </span>
                        <span className="text-sm font-semibold text-gray-400">
                          багш
                        </span>
                      </span>
                    ) : (
                      <span className="flex min-h-36 flex-col items-center justify-center gap-3 px-5 pt-6 pb-7 text-center">
                        <span
                          className={`flex size-12 items-center justify-center rounded-full font-hand text-3xl ${avatarCls}`}
                        >
                          {avatarChar}
                        </span>
                        <span className="text-lg leading-snug font-bold text-gray-800">
                          {o.text}
                        </span>
                      </span>
                    )}
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

        <div
          aria-live="polite"
          className="mx-auto mt-12 min-h-40 max-w-xl text-center"
        >
          {solved ? (
            <div className="pop">
              <p className="font-hand text-6xl text-pink-200">
                {isLast ? "Бүгдийг нь олчихлоо!" : "Яг зөв!"}
              </p>
              <p className="mt-2 text-lg text-white/90">
                {q.kind === "teacher" ? (
                  <>
                    Та <b>{winner?.text}</b> багшийг сонголоо 💖
                  </>
                ) : (
                  <>
                    Зөв хариулт: <b>{winner?.text}</b> 💖
                  </>
                )}
              </p>
              {q.explain && <p className="mt-3 text-white/75">{q.explain}</p>}
              {isLast && (
                <p className="mt-3 font-hand text-3xl text-amber-200">
                  Танд зориулсан захиа бэлэн боллоо 💌
                </p>
              )}

              {isLast ? (
                <Link
                  href="/letters"
                  onClick={startMusic}
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-amber-400 px-8 py-3.5 font-bold text-white shadow-xl shadow-pink-500/40 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
                >
                  Захианы хуудас руу
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={next}
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-amber-400 px-8 py-3.5 font-bold text-white shadow-xl shadow-pink-500/40 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
                >
                  Дараагийн асуулт
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              )}
            </div>
          ) : attempts > 0 ? (
            <div key={attempts} className="pop">
              <p className="text-xl font-bold text-white">
                {wrongLine} Өөр хариултыг сонгоорой.
              </p>
              {hint && (
                <p className="mt-4 inline-block -rotate-1 rounded-2xl bg-amber-200 px-5 py-3 font-semibold text-amber-950 shadow-lg">
                  💡 Заавар: {hint}
                </p>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
