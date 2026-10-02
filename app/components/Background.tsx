import FloatingHearts from "./FloatingHearts";

export default function Background({ hearts = false }: { hearts?: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="anim-blob absolute -top-32 -left-32 size-[28rem] rounded-full bg-pink-200/70 blur-3xl" />
      <div className="anim-blob blob-2 absolute top-1/4 -right-32 size-[30rem] rounded-full bg-yellow-200/60 blur-3xl" />
      <div className="anim-blob blob-3 absolute -bottom-40 left-1/4 size-[28rem] rounded-full bg-purple-200/70 blur-3xl" />
      <div className="anim-blob blob-4 absolute bottom-1/4 -left-24 size-80 rounded-full bg-teal-200/50 blur-3xl" />
      {hearts && <FloatingHearts />}
    </div>
  );
}
