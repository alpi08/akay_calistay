import { useLanguage } from "@/lib/akay/language";
import { useIsTouch, useReducedMotion, useTilt } from "@/lib/akay/hooks";
import type { TranslationKey } from "@/lib/akay/i18n";

type Item = { labelKey: TranslationKey; value: string | null; index: string };

function Module({ item, delay }: { item: Item; delay: number }) {
  const { t } = useLanguage();
  const touch = useIsTouch();
  const reduced = useReducedMotion();
  const ref = useTilt<HTMLDivElement>(!touch && !reduced);
  const confirmed = item.value !== null;

  return (
    <div
      ref={ref}
      className="glass-panel reveal group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 transition-[transform,border-color] duration-500 hover:border-glass-border-bright"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-soft/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between">
        <p className="label-xs">{t(item.labelKey)}</p>
        <span aria-hidden="true" className="font-display text-xs text-white/20">
          {item.index}
        </span>
      </div>
      <p
        className={
          confirmed
            ? "mt-8 font-display text-2xl font-semibold text-glow sm:text-[1.7rem]"
            : "mt-8 font-display text-lg text-muted-foreground"
        }
      >
        {confirmed ? item.value : t("soon")}
      </p>
    </div>
  );
}

export function EventInfo() {
  const { t } = useLanguage();

  const items: Item[] = [
    { labelKey: "event.date", value: t("event.dateValue"), index: "01" },
    { labelKey: "event.location", value: null, index: "02" },
    { labelKey: "event.fee", value: null, index: "03" },
    { labelKey: "event.duration", value: null, index: "04" },
  ];

  return (
    <section id="event" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label-xs reveal">{t("event.label")}</p>
            <h2 className="reveal mt-4 font-display text-[clamp(1.8rem,4.6vw,3rem)] font-semibold tracking-tight">
              {t("event.title")}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="reveal hidden h-px flex-1 bg-gradient-to-r from-transparent via-glass-border-bright to-transparent sm:block"
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Module key={item.index} item={item} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
