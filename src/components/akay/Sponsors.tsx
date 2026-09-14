import { LINKS, type TranslationKey } from "@/lib/akay/i18n";
import { useLanguage } from "@/lib/akay/language";
import { useIsTouch, useReducedMotion, useTilt } from "@/lib/akay/hooks";

type Sponsor = {
  name: string;
  roleKey: TranslationKey;
  href: string;
  index: string;
  accent: string;
};

const SPONSORS: Sponsor[] = [
  { name: "Vertex", roleKey: "sponsors.vertexRole", href: LINKS.vertex, index: "01", accent: "var(--violet)" },
  { name: "Banna", roleKey: "sponsors.bannaRole", href: LINKS.banna, index: "02", accent: "var(--violet-2)" },
  { name: "Cord Design", roleKey: "sponsors.cordRole", href: LINKS.cord, index: "03", accent: "var(--violet-soft)" },
];

function SponsorCard({ sponsor, delay }: { sponsor: Sponsor; delay: number }) {
  const { t } = useLanguage();
  const touch = useIsTouch();
  const reduced = useReducedMotion();
  const ref = useTilt<HTMLAnchorElement>(!touch && !reduced);

  return (
    <a
      ref={ref}
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel reveal group relative flex min-h-60 flex-col justify-between overflow-hidden rounded-[2rem] p-8 transition-[transform,border-color] duration-500 hover:border-glass-border-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        aria-hidden="true"
        className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-60"
        style={{ background: `radial-gradient(circle, ${sponsor.accent} 0%, transparent 70%)` }}
      />
      <div className="relative flex items-start justify-between">
        <span className="label-xs">{t(sponsor.roleKey)}</span>
        <span aria-hidden="true" className="font-display text-xs text-white/25">
          {sponsor.index}
        </span>
      </div>
      <div className="relative">
        <p className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
          {sponsor.name}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm text-violet-soft">
          {t("sponsors.visit")}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
}

export function Sponsors() {
  const { t } = useLanguage();
  return (
    <section id="sponsors" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="label-xs reveal">{t("sponsors.label")}</p>
        <h2 className="reveal mt-4 font-display text-[clamp(1.8rem,4.6vw,3rem)] font-semibold tracking-tight">
          {t("sponsors.title")}
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {SPONSORS.map((s, i) => (
            <SponsorCard key={s.name} sponsor={s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
