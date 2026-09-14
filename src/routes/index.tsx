import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { LanguageProvider, useLanguage } from "@/lib/akay/language";
import { useScrollReveal } from "@/lib/akay/hooks";
import { Atmosphere } from "@/components/akay/Atmosphere";
import { Loader } from "@/components/akay/Loader";
import { Header } from "@/components/akay/Header";
import { Hero } from "@/components/akay/Hero";
import { About } from "@/components/akay/About";
import { EventInfo } from "@/components/akay/EventInfo";
import { Committees } from "@/components/akay/Committees";
import { Schedule } from "@/components/akay/Schedule";
import { Sponsors } from "@/components/akay/Sponsors";
import { Team } from "@/components/akay/Team";
import { Contact } from "@/components/akay/Contact";
import { Footer } from "@/components/akay/Footer";

const TITLE = "Akay Perspektif ve Aydınlanma Çalıştayı | 15 Eylül 2026";
const DESCRIPTION =
  "Gençlerin fikirlerini özgürce paylaştığı, perspektif ve aydınlanma odaklı çalıştay. 15 Eylül 2026'da düzenleniyor.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#07040D" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: () => (
    <LanguageProvider>
      <AkayPage />
    </LanguageProvider>
  ),
});

function AkayPage() {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(true);
  const done = useCallback(() => setLoading(false), []);
  useScrollReveal([lang, loading]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {loading && <Loader onDone={done} />}
      <Atmosphere />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <EventInfo />
        <Committees />
        <Schedule />
        <Sponsors />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
