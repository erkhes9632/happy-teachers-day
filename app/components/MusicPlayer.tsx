"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MUSIC_START_EVENT } from "../lib/music";

const SONG = "/music/song.mp3";
const VOLUME = 0.45;
const STORE_KEY = "teachers-day-music";

export default function MusicPlayer() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userPaused = useRef(false);

  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [available, setAvailable] = useState(true);

  const fade = useCallback((to: number, ms: number, done?: () => void) => {
    const a = audioRef.current;
    if (!a) return;
    if (fadeRef.current) clearInterval(fadeRef.current);
    const from = a.volume;
    const steps = Math.max(1, Math.round(ms / 50));
    let i = 0;
    fadeRef.current = setInterval(() => {
      i += 1;
      a.volume = Math.min(1, Math.max(0, from + (to - from) * (i / steps)));
      if (i >= steps) {
        if (fadeRef.current) clearInterval(fadeRef.current);
        done?.();
      }
    }, 50);
  }, []);

  const start = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return false;
    try {
      a.volume = 0;
      await a.play();
      setPlaying(true);
      fade(VOLUME, 1800);
      return true;
    } catch {
      return false;
    }
  }, [fade]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORE_KEY) === "off") {
        userPaused.current = true;
        setMuted(true);
      }
    } catch {}

    const onStart = () => {
      setArmed(true);
      if (userPaused.current) return;
      void start();
    };

    window.addEventListener(MUSIC_START_EVENT, onStart);
    return () => {
      window.removeEventListener(MUSIC_START_EVENT, onStart);
      if (fadeRef.current) clearInterval(fadeRef.current);
    };
  }, [start]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      userPaused.current = true;
      setMuted(true);
      try {
        sessionStorage.setItem(STORE_KEY, "off");
      } catch {}
      fade(0, 400, () => a.pause());
      setPlaying(false);
    } else {
      userPaused.current = false;
      setMuted(false);
      try {
        sessionStorage.setItem(STORE_KEY, "on");
      } catch {}
      await start();
    }
  };

  const visible = available && (armed || pathname === "/letters");

  return (
    <>
      <audio
        ref={audioRef}
        src={SONG}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />

      {visible && (
        <button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? "Дууг зогсоох" : "Дууг асаах"}
          className="fixed right-4 bottom-4 z-[60] flex h-12 min-w-12 items-center justify-center rounded-full bg-white/90 px-4 text-gray-700 shadow-lg ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
        >
          {!playing && !muted && (
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-pink-100/50"
            />
          )}
          <span className="relative flex items-center gap-2">
            {playing ? (
              <span className="eq" aria-hidden>
                <span />
                <span />
                <span />
                <span />
              </span>
            ) : (
              <>
                <span aria-hidden>{muted ? "🔇" : "🎵"}</span>
                <span className="text-sm font-bold">Дуу асаах</span>
              </>
            )}
          </span>
        </button>
      )}
    </>
  );
}
