import { useEffect, useRef } from "react";
import symbol from "@/assets/logo-symbol.png.asset.json";
import { useLanguage } from "@/lib/akay/language";
import { useIsTouch, useMagnetic, useReducedMotion } from "@/lib/akay/hooks";
import { Countdown } from "./Countdown";

function ScrollButton({
  target,
  children,
  variant = "primary",
}: {
  target: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const touch = useIsTouch();
  const reduced = useReducedMotion();
  const ref = useMagnetic<HTMLButtonElement>(!touch && !reduced, 0.18);
  const go = () => {
    const el = document.getElementById(target);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 84,
      behavior: reduced ? "auto" : "smooth",
    });
  };
  return (
    <button
      ref={ref}
      type="button"
      onClick={go}
      className={
        variant === "primary"
          ? "group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 font-display text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-[0_18px_60px_-18px_rgba(122,59,255,0.9)] transition-all duration-300 hover:shadow-[0_24px_80px_-16px_rgba(168,85,247,0.9)]"
          : "rounded-full border border-glass-border bg-glass-surface px-7 py-3.5 font-display text-xs uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-all duration-300 hover:border-glass-border-bright hover:bg-white/10"
      }
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el || reduced || touch) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = (e.clientX / window.innerWidth - 0.5) * 26;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced, touch]);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-32 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 select-none text-center font-display text-[22vw] font-bold leading-none text-white/[0.025]"
      >
        AKAY
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="label-xs reveal">{t("hero.eyebrow")}</p>

          <h1 className="mt-6 font-display font-semibold leading-[0.88] tracking-tight">
            <span className="reveal block text-[clamp(2.6rem,9vw,6.2rem)] text-glow">
              {t("hero.title1")}
            </span>
            <span
              className="reveal mt-1 block text-[clamp(1.35rem,4.2vw,2.9rem)] font-light text-violet-soft sm:ml-[12%]"
              style={{ transitionDelay: "120ms" }}
            >
              {t("hero.title2")}
            </span>
            <span
              className="reveal mt-1 block text-[clamp(2rem,6.5vw,4.4rem)] sm:ml-[4%]"
              style={{ transitionDelay: "220ms" }}
            >
              {t("hero.title3")}
            </span>
          </h1>

          <div
            className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="glass-panel rounded-full px-5 py-2 font-display text-sm tracking-[0.14em] text-violet-bright">
              {t("hero.date")}
            </span>
            <span aria-hidden="true" className="h-px flex-1 min-w-12 bg-gradient-to-r from-violet/60 to-transparent" />
          </div>

          <p
            className="reveal mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ transitionDelay: "380ms" }}
          >
            {t("hero.lede")}
          </p>

          <div
            className="reveal mt-10 flex flex-wrap gap-3"
            style={{ transitionDelay: "460ms" }}
          >
            <ScrollButton target="event">{t("hero.cta")}</ScrollButton>
            <ScrollButton target="committees" variant="ghost">
              {t("hero.cta2")}
            </ScrollButton>
          </div>
        </div>

        <div ref={layerRef} className="relative mx-auto w-full max-w-md transition-transform duration-500 ease-out">
          <div className="relative aspect-square">
            <div
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full border border-glass-border animate-spin-slow"
              style={{ borderTopColor: "var(--violet-2)" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-[18%] rounded-full border border-glass-border animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "52s", borderLeftColor: "var(--violet-soft)" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-[12%] rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)", opacity: 0.35 }}
            />
            <img
              src={symbol.url}
              alt=""
              aria-hidden="true"
              className="absolute inset-[20%] h-[60%] w-[60%] object-contain animate-float drop-shadow-[0_0_50px_rgba(168,85,247,0.5)]"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <Countdown />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 label-xs lg:block"
      >
        {t("hero.scroll")}
      </span>
    </section>
  );
}
