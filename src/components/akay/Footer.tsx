import logoFull from "@/assets/logo-full.png.asset.json";
import { LINKS, NAV_SECTIONS } from "@/lib/akay/i18n";
import { useLanguage } from "@/lib/akay/language";
import { LanguageToggle } from "./Header";
import { InstagramIcon } from "./Contact";

export function Footer() {
  const { t } = useLanguage();

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 84,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(18,10,31,0.6) 45%, #000 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="grid gap-10 border-t border-glass-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logoFull.url} alt={t("logo.alt")} className="h-14 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("footer.statement")}
            </p>
            <div className="mt-6">
              <LanguageToggle className="w-fit" />
            </div>
          </div>

          <nav aria-label={t("footer.nav")}>
            <p className="label-xs">{t("footer.nav")}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => go(s.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(s.key)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-xs">{t("footer.partners")}</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {[
                ["Vertex", LINKS.vertex],
                ["Banna", LINKS.banna],
                ["Cord Design", LINKS.cord],
              ].map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="label-xs mt-8">{t("footer.social")}</p>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-glass-border text-violet-soft transition-colors hover:border-glass-border-bright hover:text-foreground"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Akay Perspektif ve Aydınlanma Çalıştayı. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
