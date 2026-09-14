import { useEffect, useState } from "react";
import symbol from "@/assets/logo-symbol.png.asset.json";
import { useLanguage } from "@/lib/akay/language";
import { useReducedMotion } from "@/lib/akay/hooks";

export function Loader({ onDone }: { onDone: () => void }) {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    const a = window.setTimeout(() => setPhase(1), 80);
    const b = window.setTimeout(() => setPhase(2), 2300);
    const c = window.setTimeout(onDone, 3050);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
      window.clearTimeout(c);
    };
  }, [onDone, reduced]);

  if (reduced) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700"
      style={{ opacity: phase === 2 ? 0 : 1, pointerEvents: phase === 2 ? "none" : "auto" }}
    >
      <div
        className="absolute h-[60vmin] w-[60vmin] rounded-full blur-[90px] transition-all duration-[1600ms] ease-out"
        style={{
          background: "radial-gradient(circle, var(--violet) 0%, transparent 65%)",
          opacity: phase === 0 ? 0 : 0.4,
          transform: `scale(${phase === 0 ? 0.2 : 1})`,
        }}
      />
      <div
        className="relative transition-all duration-[1800ms] ease-out"
        style={{
          opacity: phase === 0 ? 0 : 1,
          transform: `scale(${phase === 0 ? 0.82 : 1}) translateZ(0)`,
          filter: `blur(${phase === 0 ? 14 : 0}px)`,
        }}
      >
        <img
          src={symbol.url}
          alt={t("loader.alt")}
          width={220}
          height={220}
          className="h-[34vmin] max-h-56 w-auto animate-pulse-glow drop-shadow-[0_0_60px_rgba(168,85,247,0.55)]"
        />
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
          style={{ animation: "akay-sweep 2.1s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
        />
      </div>
      <span className="sr-only">Akay</span>
      <div
        className="absolute bottom-16 h-px w-40 overflow-hidden bg-white/10"
        aria-hidden="true"
      >
        <span
          className="block h-full w-full origin-left bg-[var(--violet-soft)]"
          style={{ animation: "akay-sweep 2.4s ease-in-out both" }}
        />
      </div>
    </div>
  );
}
