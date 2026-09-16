import { useState } from "react";
import { useLanguage } from "@/lib/akay/language";
import { cn } from "@/lib/utils";

/** Replace with real committees when announced. */
type Committee = { id: string; name: string | null; agenda: string[] };

const COMMITTEES: Committee[] = [
  { id: "c1", name: null, agenda: [] },
  { id: "c2", name: null, agenda: [] },
  { id: "c3", name: null, agenda: [] },
  { id: "c4", name: null, agenda: [] },
];

export function Committees() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const current = COMMITTEES[active];

  return (
    <section id="committees" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label-xs reveal">{t("committees.label")}</p>
            <h2 className="reveal mt-4 font-display text-[clamp(1.8rem,4.6vw,3rem)] font-semibold tracking-tight">
              {t("committees.title")}
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm text-muted-foreground">
            {t("committees.placeholder")}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <ul className="reveal flex flex-col gap-2" role="tablist" aria-label={t("committees.label")}>
            {COMMITTEES.map((c, i) => (
              <li key={c.id}>
                <button
                  type="button"
                  role="tab"
                  id={`${c.id}-tab`}
                  aria-selected={active === i}
                  aria-controls={`${c.id}-panel`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-5 text-left transition-all duration-500",
                    active === i
                      ? "border-glass-border-bright bg-glass shadow-[0_20px_60px_-30px_rgba(168,85,247,0.9)]"
                      : "border-glass-border bg-glass-surface hover:border-glass-border-bright/60",
                  )}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label-xs tabular-nums">0{i + 1}</span>
                    <span
                      className={cn(
                        "font-display text-lg transition-colors",
                        active === i ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {c.name ?? `${t("committees.slot")} ${i + 1}`}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-px w-8 bg-violet-soft transition-all duration-500",
                      active === i ? "w-12 opacity-100" : "opacity-30",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div
            role="tabpanel"
            id={`${current?.id ?? "c"}-panel`}
            aria-labelledby={`${current?.id ?? "c"}-tab`}
            className="glass-panel reveal relative flex min-h-72 flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-52 w-52 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)", opacity: 0.35 }}
            />
            <div className="relative">
              <p className="label-xs">{`${t("committees.slot")} 0${active + 1}`}</p>
              <p className="mt-6 font-display text-[clamp(1.5rem,3.6vw,2.4rem)] font-semibold leading-tight">
                {current?.name ?? t("soon")}
              </p>
            </div>
            <ul className="relative mt-8 flex flex-col gap-3">
              {current && current.agenda.length > 0 ? (
                current.agenda.map((topic) => (
                  <li key={topic} className="flex gap-3 text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-soft" />
                    {topic}
                  </li>
                ))
              ) : (
                <li className="text-muted-foreground">{t("committees.placeholder")}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
