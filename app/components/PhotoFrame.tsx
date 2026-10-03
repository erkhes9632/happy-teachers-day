"use client";

import { useEffect, useRef, useState } from "react";
import type { FrameKind } from "../data/photos";

type Props = { src: string; caption?: string; frame: FrameKind; index: number };

function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-linear-to-br from-amber-100 via-pink-100 to-purple-100 text-4xl ${className}`}
      >
        📸
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

export default function PhotoFrame({ src, caption, frame, index }: Props) {
  const alt = caption ?? `Ангийн зураг ${index + 1}`;

  if (frame === "polaroid") {
    return (
      <figure className="relative bg-white p-3 pb-16 shadow-[0_20px_40px_-15px_rgba(80,50,20,0.45)]">
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-pink-300/70"
        />
        <Img src={src} alt={alt} className="aspect-[4/3] w-full" />
        {caption && (
          <figcaption className="absolute inset-x-3 bottom-3 text-center font-hand text-2xl text-gray-700">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (frame === "tape") {
    return (
      <figure className="relative bg-[#fffdf6] p-2 shadow-[0_18px_36px_-14px_rgba(80,50,20,0.45)]">
        <span
          aria-hidden
          className="absolute -top-3 -left-5 h-6 w-20 -rotate-45 bg-yellow-200/85"
        />
        <span
          aria-hidden
          className="absolute -right-5 -bottom-3 h-6 w-20 -rotate-45 bg-yellow-200/85"
        />
        <Img src={src} alt={alt} className="aspect-[4/3] w-full" />
        {caption && (
          <figcaption className="pt-2 pb-1 text-center font-hand text-xl text-gray-600">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (frame === "film") {
    return (
      <figure className="relative rounded-sm bg-[#1c1a1f] px-3 py-3 shadow-[0_22px_44px_-16px_rgba(0,0,0,0.6)]">
        <div className="film-holes mb-3" aria-hidden />
        <Img src={src} alt={alt} className="aspect-[3/2] w-full" />
        {caption && (
          <figcaption className="pt-2 text-center font-hand text-xl text-[#efe6d3]">
            {caption}
          </figcaption>
        )}
        <div className="film-holes mt-3" aria-hidden />
      </figure>
    );
  }

  if (frame === "postcard") {
    return (
      <figure className="airmail relative bg-[#fffaf0] p-3 shadow-[0_20px_40px_-16px_rgba(60,40,20,0.45)]">
        <div className="relative">
          <Img src={src} alt={alt} className="aspect-[3/2] w-full" />
          <span
            aria-hidden
            className="absolute top-2 right-2 grid h-14 w-11 rotate-3 place-items-center border-2 border-dashed border-rose-300 bg-rose-50/95 text-xl"
          >
            💌
          </span>
        </div>
        {caption && (
          <figcaption className="mt-3 border-b border-dotted border-gray-400 pb-1 font-hand text-2xl text-gray-700">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="relative rounded-[2rem] bg-linear-to-br from-pink-200 via-violet-200 to-amber-100 p-3 shadow-[0_22px_44px_-18px_rgba(120,60,150,0.5)]">
      <div className="rounded-[1.5rem] bg-white p-2">
        <Img
          src={src}
          alt={alt}
          className="aspect-[4/3] w-full rounded-[1.1rem]"
        />
        {caption && (
          <figcaption className="pt-2 pb-1 text-center font-hand text-2xl text-violet-700">
            {caption}
          </figcaption>
        )}
      </div>
      <span aria-hidden className="absolute -top-4 -right-3 rotate-12 text-3xl">
        💗
      </span>
    </figure>
  );
}
