import { useLanguage } from "@/lib/akay/language";
import { useIsTouch, useReducedMotion, useTilt } from "@/lib/akay/hooks";

type Coordinator = { name: string; phone: string; display: string; initials: string };

const COORDINATORS: Coordinator[] = [
  { name: "Zeynep Beril Köse", phone: "+905388183222", display: "0538 818 32 22", initials: "ZB" },
  { name: "Eylül Ulubulut", phone: "+905054965668", display: "0505 496 56 68", initials: "EU" },
];

function Card({ person, delay }: { person: Coordinator; delay: number }) {
  const { t } = useLanguage();
  const touch = useIsTouch();
  const reduced = useReducedMotion();
  const ref = useTilt<HTMLDivElement>(!touch && !reduced);

  return (
    <div
      ref={ref}
      className="glass-panel reveal group relative overflow-hidden rounded-[2rem] p-8 transition-[transform,border-color] duration-500 hover:border-glass-border-bright"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-5">
        <span
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-glass-border-bright bg-glass-surface font-display text-lg tracking-[0.08em] text-violet-bright"
        >
          {person.initials}
        </span>
        <div>
          <p className="label-xs">{t("team.label")}</p>
          <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">{person.name}</p>
        </div>
      </div>
      <a
        href={`tel:${person.phone}`}
        className="mt-8 inline-flex items-center gap-3 rounded-full border border-glass-border bg-glass-surface px-5 py-3 font-display text-sm tracking-[0.12em] text-foreground transition-all duration-300 hover:border-glass-border-bright hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        aria-label={`${t("team.call")} ${person.name}`}
      >
        <span aria-hidden="true" className="text-violet-soft">
          ☎
        </span>
        {person.display}
      </a>
    </div>
  );
}

export function Team() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="label-xs reveal">{t("team.label")}</p>
        <h2 className="reveal mt-4 font-display text-[clamp(1.8rem,4.6vw,3rem)] font-semibold tracking-tight">
          {t("team.title")}
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {COORDINATORS.map((p, i) => (
            <Card key={p.phone} person={p} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  );
}
