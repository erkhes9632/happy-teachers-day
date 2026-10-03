"use client";

import { useEffect, useState } from "react";

type Props = { text: string; speed?: number; startDelay?: number };

export default function TypeWriter({
  text,
  speed = 75,
  startDelay = 700,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      i += 1;
      setCount(i);
      if (i < text.length) timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{text}</span>
      <span className="absolute inset-y-0 left-0">
        {text.slice(0, count)}
        <span className="caret" aria-hidden />
      </span>
    </span>
  );
}
