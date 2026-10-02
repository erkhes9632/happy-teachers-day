// Зөв хариулт дээр дэлбэрэх зүрх, одод (ямар ч сан хэрэггүй).
type Origin = { x: number; y: number };

const COLORS = ["#ff4d8d", "#ff7aa8", "#ff2d6f", "#ffb3c9", "#ffc857"];

export function fireHearts(origin?: Origin, duration = 3600) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;

  const canvas = document.createElement("canvas");
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999";
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(dpr, dpr);
  document.body.appendChild(canvas);

  const ox = origin?.x ?? w / 2;
  const oy = origin?.y ?? h / 2;

  const parts = Array.from({ length: 80 }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 10;
    const spark = i % 4 === 0;
    return {
      x: ox,
      y: oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2.5,
      size: 6 + Math.random() * 10,
      tilt: (Math.random() - 0.5) * 0.7,
      color: spark
        ? "#ffd966"
        : COLORS[Math.floor(Math.random() * COLORS.length)],
      spark,
    };
  });

  const start = performance.now();

  const frame = (now: number) => {
    const t = now - start;
    const life = Math.max(0, 1 - t / duration);
    ctx.clearRect(0, 0, w, h);

    for (const p of parts) {
      p.vx *= 0.985;
      p.vy = p.vy * 0.985 + 0.07;
      p.x += p.vx;
      p.y += p.vy;

      const s = p.size;
      ctx.save();
      ctx.globalAlpha = Math.min(1, life * 1.6);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.tilt);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      if (p.spark) {
        // 4 хошуутай од
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
      } else {
        // зүрх
        ctx.moveTo(0, s * 0.45);
        ctx.bezierCurveTo(
          -s * 1.1,
          -s * 0.15,
          -s * 0.55,
          -s * 1.0,
          0,
          -s * 0.4,
        );
        ctx.bezierCurveTo(s * 0.55, -s * 1.0, s * 1.1, -s * 0.15, 0, s * 0.45);
      }
      ctx.fill();
      ctx.restore();
    }

    if (t < duration) requestAnimationFrame(frame);
    else canvas.remove();
  };

  requestAnimationFrame(frame);
}
