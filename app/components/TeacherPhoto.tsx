"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; alt: string; initial: string };

export default function TeacherPhoto({ src, alt, initial }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="group relative mx-auto size-[68%]">
      <div className="ring-spin absolute -inset-3 rounded-full opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="ring-spin absolute -inset-1 rounded-full" />

      <div className="relative size-full overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
        {failed ? (
          <div className="flex size-full items-center justify-center bg-linear-to-br from-pink-300 via-purple-300 to-amber-200 font-hand text-8xl text-white">
            {initial}
          </div>
        ) : (
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="size-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
