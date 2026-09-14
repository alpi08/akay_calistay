import { useEffect, useState } from "react";
import logoFull from "@/assets/logo-full.png.asset.json";
import { NAV_SECTIONS } from "@/lib/akay/i18n";
import { useLanguage } from "@/lib/akay/language";
import { useActiveSection } from "@/lib/akay/hooks";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      className={cn(
        "relative flex items-center gap-1 rounded-full border border-glass-border bg-glass-surface p-1 backdrop-blur-md",
        className,
      )}
      role="group"
      aria-label={t("nav.lang")}
    >
      {(["tr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            "relative rounded-full px-3 py-1 font-display text-xs uppercase tracking-[0.2em] transition-all duration-300",
            lang === code
              ? "bg-primary/80 text-primary-foreground shadow-[0_0_24px_rgba(168,85,247,0.45)]"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass-panel mx-3 border-glass-border-bright/40 sm:mx-6"
              : "border border-transparent bg-transparent",
          )}
        >
          <button
            type="button"
            onClick={() => go("home")}
            className="group flex items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <img
              src={logoFull.url}
              alt={t("logo.alt")}
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-105 sm:h-12"
            />
          </button>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                aria-current={active === s.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 font-display text-xs uppercase tracking-[0.18em] transition-colors duration-300",
                  active === s.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t(s.key)}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gradient-to-r from-transparent via-violet-soft to-transparent transition-transform duration-500",
                    active === s.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t("nav.menu")}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-glass-surface backdrop-blur-md transition-colors hover:border-glass-border-bright lg:hidden"
            >
              <span className="sr-only">{t("nav.menu")}</span>
              <span aria-hidden="true" className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-foreground" />
                <span className="block h-px w-4 bg-foreground" />
                <span className="block h-px w-2.5 bg-violet-soft" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <img src={logoFull.url} alt="" className="h-10 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("nav.close")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border text-lg"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-8">
          {NAV_SECTIONS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              className="group flex items-baseline gap-4 border-b border-glass-border py-4 text-left transition-colors hover:border-glass-border-bright"
              style={{
                transitionDelay: open ? `${i * 45}ms` : "0ms",
                transform: open ? "none" : "translateY(18px)",
                opacity: open ? 1 : 0,
                transitionProperty: "transform, opacity, border-color",
                transitionDuration: "600ms",
              }}
            >
              <span className="label-xs tabular-nums">0{i + 1}</span>
              <span className="font-display text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-1">
                {t(s.key)}
              </span>
            </button>
          ))}
        </nav>
        <div className="px-8 pb-10">
          <LanguageToggle />
        </div>
      </div>
    </>
  );
}

export { LanguageToggle };
