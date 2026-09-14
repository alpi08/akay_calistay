import { useEffect, useMemo, useState } from "react";
import { EVENT_DATE_MS } from "@/lib/akay/i18n";
import { useLanguage } from "@/lib/akay/language";
import { cn } from "@/lib/utils";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function getParts(now: number): Parts | null {
  const diff = EVENT_DATE_MS - now;
  if (diff <= 0) return null;
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Digits({ value, pad }: { value: number; pad: number }) {
  const text = String(value).padStart(pad, "0");
  return (
    <span className="flex tabular-nums">
      {text.split("").map((ch, i) => (
        <span key={`${i}-${ch}`} className="digit-roll inline-block">
          {ch}
        </span>
      ))}
    </span>
  );
}

function Capsule({
  value,
  label,
  progress,
  pad,
}: {
  value: number;
  label: string;
  progress: number;
  pad: number;
}) {
  const circumference = 2 * Math.PI * 46;
  return (
    <div className="group relative flex flex-col items-center gap-3">
      <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--violet-2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)", filter: "drop-shadow(0 0 6px rgba(168,85,247,0.7))" }}
          />
        </svg>
        <div className="absolute inset-2 rounded-full bg-glass-surface backdrop-blur-md" />
        <span className="relative font-display text-2xl font-semibold text-glow sm:text-3xl">
          <Digits value={value} pad={pad} />
        </span>
      </div>
      <span className="label-xs">{label}</span>
    </div>
  );
}

export function Countdown() {
  const { t } = useLanguage();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = useMemo(() => (now === null ? null : getParts(now)), [now]);
  const started = now !== null && parts === null;

  return (
    <div className="glass-panel reveal rounded-[2rem] px-6 py-9 sm:px-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="label-xs">{t("count.title")}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t("count.sub")}</p>
        </div>
        <p className="font-display text-sm tracking-[0.18em] text-violet-soft">{t("hero.date")}</p>
      </div>

      <div
        className={cn(
          "mt-8 transition-opacity duration-500",
          now === null ? "opacity-0" : "opacity-100",
        )}
      >
        {started ? (
          <p className="animate-pulse-glow py-6 text-center font-display text-[clamp(1.6rem,5vw,3rem)] font-semibold text-glow">
            {t("count.started")}
          </p>
        ) : (
          <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-4">
            <Capsule
              value={parts?.days ?? 0}
              pad={2}
              label={t("count.days")}
              progress={Math.min((parts?.days ?? 0) / 365, 1)}
            />
            <Capsule
              value={parts?.hours ?? 0}
              pad={2}
              label={t("count.hours")}
              progress={(parts?.hours ?? 0) / 24}
            />
            <Capsule
              value={parts?.minutes ?? 0}
              pad={2}
              label={t("count.minutes")}
              progress={(parts?.minutes ?? 0) / 60}
            />
            <Capsule
              value={parts?.seconds ?? 0}
              pad={2}
              label={t("count.seconds")}
              progress={(parts?.seconds ?? 0) / 60}
            />
          </div>
        )}
      </div>
    </div>
  );
}
