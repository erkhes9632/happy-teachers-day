import { letter } from "../data/letter";

export default function LetterPaper() {
  return (
    <article className="relative mx-auto max-w-2xl">
      {/* ард талын давхарласан цаасууд */}
      <div
        aria-hidden
        className="absolute inset-0 -rotate-2 rounded-md bg-[#fff6f0] shadow-lg"
      />
      <div
        aria-hidden
        className="absolute inset-0 rotate-1 rounded-md bg-[#fdeef0] shadow-lg"
      />

      <div className="relative rounded-md bg-[#fffdf8] px-6 pt-20 pb-14 shadow-[0_30px_60px_-25px_rgba(120,40,70,0.45)] sm:px-14">
        {/* улаан зай шугам */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-9 w-px bg-rose-300/60 sm:left-16"
        />

        {/* лацдан */}
        <span
          aria-hidden
          className="absolute -top-7 left-1/2 flex size-14 -translate-x-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff6b7a,#c81e3c_70%)] text-xl text-white shadow-lg ring-4 ring-[#c81e3c]/20"
        >
          ❤
        </span>

        <div className="pl-5 sm:pl-10">
          <h2 className="mb-9 font-hand text-4xl leading-9 text-rose-700">
            {letter.heading}
          </h2>

          <div className="ruled">
            {letter.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-9 font-serif text-[1.05rem] leading-9 text-[#3d2b30] last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 text-right">
            <p className="font-hand text-3xl text-rose-700">{letter.closing}</p>
            <p className="font-hand text-4xl text-gray-800">
              {letter.signature}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
