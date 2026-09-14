import { useLanguage } from "@/lib/akay/language";
import { useIsTouch, useReducedMotion, useTilt } from "@/lib/akay/hooks";

function WordReveal({ text }: { text: string }) {
  return (
    <span>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="reveal inline-block"
          style={{ transitionDelay: `${Math.min(i * 22, 700)}ms` }}
        >
          {word}
          {"\u00A0"}
        </span>
      ))}
    </span>
  );
}

function Panel({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  const touch = useIsTouch();
  const reduced = useReducedMotion();
  const ref = useTilt<HTMLDivElement>(!touch && !reduced);
  return (
    <div
      ref={ref}
      className="glass-panel reveal group relative overflow-hidden rounded-[2rem] p-7 transition-[transform,box-shadow,border-color] duration-500 hover:border-glass-border-bright sm:p-10"
    >
      <span
        aria-hidden="true"
        className="absolute -right-4 -top-8 font-display text-[7rem] font-bold leading-none text-white/[0.04]"
      >
        {index}
      </span>
      <p className="label-xs">{label}</p>
      <div className="mt-5 text-base leading-relaxed text-[color:var(--color-foreground)]/85 sm:text-lg">
        {children}
      </div>
    </div>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="label-xs reveal">{t("about.label")}</p>
            <h2 className="mt-6 font-display text-[clamp(1.9rem,5vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
              <WordReveal text={t("about.title")} />
            </h2>
            <div
              aria-hidden="true"
              className="reveal mt-10 hidden h-40 w-px bg-gradient-to-b from-violet via-violet-soft/40 to-transparent lg:block"
            />
          </div>

          <div className="flex flex-col gap-6">
            <Panel label={t("about.missionLabel")} index="01">
              {t("about.mission")}
            </Panel>
            <Panel label={t("about.visionLabel")} index="02">
              <p>{t("about.vision1")}</p>
              <p className="mt-5 text-violet-soft">{t("about.vision2")}</p>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
