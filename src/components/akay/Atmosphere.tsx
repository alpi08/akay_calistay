import { useEffect, useRef } from "react";
import { useIsTouch, useReducedMotion } from "@/lib/akay/hooks";

/**
 * Fixed background layer: drifting light fields, a faint perspective grid,
 * lightweight particles and a pointer-following spotlight.
 */
export function Atmosphere() {
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const spotRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot || reduced || touch) return;
    let frame = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!frame) frame = requestAnimationFrame(loop);
    };
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      spot.style.transform = `translate3d(${cx - 320}px, ${cy - 320}px, 0)`;
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        frame = requestAnimationFrame(loop);
      } else {
        frame = 0;
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced, touch]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const count = window.innerWidth < 768 ? 26 : 54;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -(Math.random() * 0.22 + 0.05),
      a: Math.random() * 0.5 + 0.15,
    }));

    let raf = 0;
    let running = true;

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 160, 255, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        draw();
      }
    };
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -left-[20%] top-[-15%] h-[70vh] w-[70vh] rounded-full blur-[120px] animate-drift"
        style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 68%)", opacity: 0.3 }}
      />
      <div
        className="absolute right-[-15%] top-[25%] h-[60vh] w-[60vh] rounded-full blur-[130px] animate-drift"
        style={{
          background: "radial-gradient(circle, var(--violet-2) 0%, transparent 70%)",
          opacity: 0.22,
          animationDelay: "-9s",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[30%] h-[55vh] w-[55vh] rounded-full blur-[140px] animate-drift"
        style={{
          background: "radial-gradient(circle, var(--ink-3) 0%, transparent 72%)",
          opacity: 0.55,
          animationDelay: "-16s",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(168,85,247,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        ref={spotRef}
        className="absolute left-0 top-0 h-[640px] w-[640px] rounded-full blur-[80px] transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 62%)",
          opacity: reduced || touch ? 0 : 1,
        }}
      />
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
