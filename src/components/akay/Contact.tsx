import { LINKS } from "@/lib/akay/i18n";
import { useLanguage } from "@/lib/akay/language";

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="glass-panel reveal relative overflow-hidden rounded-[2.5rem] px-7 py-14 text-center sm:px-14">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse-glow"
            style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)", opacity: 0.4 }}
          />
          <p className="label-xs relative">{t("contact.label")}</p>
          <h2 className="relative mt-5 font-display text-[clamp(1.9rem,5vw,3.2rem)] font-semibold tracking-tight text-glow">
            {t("contact.title")}
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-muted-foreground">{t("contact.lede")}</p>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-display text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-[0_20px_60px_-20px_rgba(122,59,255,0.95)] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <InstagramIcon className="h-4 w-4" />
            {t("contact.instagram")}
          </a>
          <p className="relative mt-6 font-display text-sm tracking-[0.14em] text-violet-soft">
            @akay_calistay
          </p>
        </div>
      </div>
    </section>
  );
}
