"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  speed?: number;
  startDelay?: number;
};

export default function AutoScroll({ speed = 60, startDelay = 2500 }: Props) {
  const [playing, setPlaying] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const startTimer = reduceMotion
      ? undefined
      : window.setTimeout(() => setPlaying(true), startDelay);

    const stop = (e: Event) => {
      if (btnRef.current?.contains(e.target as Node)) return;
      window.clearTimeout(startTimer);
      setPlaying(false);
    };

    const onKey = (e: KeyboardEvent) => {
      const keys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        "Home",
        "End",
        " ",
      ];
      if (keys.includes(e.key)) stop(e);
    };

    window.addEventListener("pointerdown", stop);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchmove", stop, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(startTimer);
      window.removeEventListener("pointerdown", stop);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchmove", stop);
      window.removeEventListener("keydown", onKey);
    };
  }, [startDelay]);

  useEffect(() => {
    if (!playing) return;

    let raf = 0;
    let last = performance.now();
    let y = window.scrollY;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      y += (speed * dt) / 1000;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (y >= max) {
        window.scrollTo({ top: max, behavior: "instant" });
        setPlaying(false);
        return;
      }

      window.scrollTo({ top: y, behavior: "instant" });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, speed]);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={() => setPlaying((p) => !p)}
      className="fixed left-4 bottom-4 z-50 rounded-full bg-white/90 px-5 py-2.5 text-sm font-bold text-gray-700 shadow-lg ring-1 ring-black/5 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 sm:left-8 sm:bottom-8"
    >
      {playing ? "⏸ Зогсоох" : "▶ Үргэлжлүүлэх"}
    </button>
  );
}
