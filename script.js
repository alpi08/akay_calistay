(() => {
  "use strict";

  /* =========================================================
     HELPERS
  ========================================================= */

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const isTouch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  /* =========================================================
     SAYFA HAZIR
     
     ÖNEMLİ:
     CSS tarafında .reveal varsayılan olarak görünür.
     JS gerçekten çalışıyorsa .js-ready eklenir ve
     animasyonlar aktif hale gelir.
     
     Böylece JS ölürse tüm site kaybolmaz.
  ========================================================= */

  document.documentElement.classList.add("js-ready");

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const translations = {
    tr: {
      nav: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        event: "Etkinlik",
        schedule: "Akış",
        committees: "Komiteler",
        sponsors: "Sponsorluk",
        contact: "İletişim"
      },

      hero: {
        eyebrow: "GENÇLİK / FİKİR / PERSPEKTİF",
        copy:
          "Bilginin yalnızca paylaşılmadığı, bakış açılarının birbirine temas ettiği bir düşünce alanı.",
        explore: "Deneyimi Keşfet",
        contact: "İletişime Geç",
        date: "ETKİNLİK TARİHİ",
        month: "Eylül"
      },

      countdown: {
        label: "Başlangıca kalan süre",
        live: "CANLI",
        days: "GÜN",
        hours: "SAAT",
        minutes: "DAKİKA",
        seconds: "SANİYE",
        started: "Etkinlik Başladı"
      },

      about: {
        eyebrow: "NEDEN AKAY?",
        title:
          "Fikirlerin kesiştiği yerde <em>perspektif</em> değişir.",
        missionLabel: "MİSYON",
        missionTitle: "Özgürce ifade et.",
        missionText:
          "Akay Çalıştayı olarak misyonumuz; Gençlerin hızla gelişen ve değişen dünyaya dair farkındalıklarını artırırken, onlara fikirlerini özgürce ifade edebilecekleri, güçlü bir bilgi paylaşım alanı sunmaktır. Komite konularımız ise hem akademik anlamda geliştirici hem de sosyal bakımdan günlük hayatımızı doğrudan etkileyen konular olarak özenle seçilmiştir. Sosyal becerilerini aktif olarak kullanabilecekleri bu platformda, çok yönlü bakış açıları kazanmalarını hedefliyoruz.",
        visionLabel: "VİZYON",
        visionTitle:
          "Aydınlık zihni somut faydaya dönüştür.",
        visionText:
          "Akay Perspektif ve Aydınlanma Çalıştayı ekibi olarak Türkiye’deki gençlerin Türk kültürü ve kökeni başta olmak üzere; dünya tarihini, farklı kültürleri ve dilleri anlayarak farkındalığı, entelektüel donanımı ve hitabet becerisi yüksek bireyler olmalarına katkı sağlayarak ülkemiz adına faydalı bireyler yetiştirmeyi amaçlıyoruz.<br><br>Nihai hedefimiz, gençlerin bu süreçte edindikleri bilgi birikimini ve aydınlık zihinlerini kullanarak başta ülkemiz olmak üzere tüm insanlığa somut faydalar sunan bireyler olarak yetişmeleridir."
      },

      event: {
        eyebrow: "ETKİNLİK",
        title:
          "Bir buluşma değil, <em>bir düşünce alanı.</em>",
        dateLabel: "TARİH",
        location: "KONUM",
        fee: "ETKİNLİK ÜCRETİ",
        duration: "SÜRE"
      },

      common: {
        comingSoon: "Yakında Açıklanacak"
      },

      schedule: {
        eyebrow: "AKIŞ",
        title:
          "Zamanın ritmi <em>yakında</em> görünür olacak.",
        top: "GENEL AKIŞ / FRAMEWORK",
        status: "PROGRAM HAZIRLANIYOR",
        emptyTitle:
          "Program yakında açıklanacaktır.",
        emptyText:
          "Gerçek zaman, oturum, salon, komite ve konuşmacı bilgileri doğrulandığında bu akış dinamik olarak doldurulacaktır."
      },

      committees: {
        eyebrow: "KOMİTELER",
        title:
          "Gündemler hazır olduğunda <em>sahne açılacak.</em>",
        label: "AÇILACAK ALAN",
        emptyTitle:
          "Komiteler ve gündem maddeleri yakında açıklanacaktır.",
        emptyText:
          "Yayınlandığında her komite; gündem, açıklama, salon ve moderasyon bilgileriyle etkileşimli olarak burada yer alacaktır."
      },

      sponsors: {
        eyebrow: "SPONSORLUK",
        title:
          "Bu deneyim <em>birlikte</em> büyüyor.",
        ai: "YAPAY ZEKA SPONSORU",
        it: "BT SPONSORU",
        design:
          "SOSYAL MEDYA / GRAFİK TASARIM SPONSORU",
        visit: "Web sitesini ziyaret et",
        instagram: "Instagram'ı ziyaret et"
      },

      team: {
        eyebrow: "KOORDİNASYON",
        title: "Doğrudan <em>ulaş.</em>",
        role: "GENEL KOORDİNATÖR"
      },

      contact: {
        eyebrow: "İLETİŞİM",
        title: "Perspektifini <em>paylaş.</em>",
        text:
          "Akay'ın güncel duyuruları ve etkinlik iletişimi için resmi Instagram hesabını takip et."
      },

      footer: {
        statement:
          "Gençlik, fikir, kültür ve çok yönlü bakışın kesiştiği dijital bir deneyim.",
        navigation: "NAVİGASYON",
        supporters: "DESTEKÇİLER",
        social: "SOSYAL",
        rights: "Tüm hakları saklıdır."
      }
    },

    en: {
      nav: {
        home: "Home",
        about: "About",
        event: "Event",
        schedule: "Schedule",
        committees: "Committees",
        sponsors: "Sponsors",
        contact: "Contact"
      },

      hero: {
        eyebrow: "YOUTH / IDEA / PERSPECTIVE",
        copy:
          "A space for thought where knowledge is not simply shared, but perspectives meet and reshape one another.",
        explore: "Explore the Experience",
        contact: "Get in Touch",
        date: "EVENT DATE",
        month: "September"
      },

      countdown: {
        label: "Time until the opening",
        live: "LIVE",
        days: "DAYS",
        hours: "HOURS",
        minutes: "MINUTES",
        seconds: "SECONDS",
        started: "The Event Has Started"
      },

      about: {
        eyebrow: "WHY AKAY?",
        title:
          "Where ideas intersect, <em>perspective</em> changes.",
        missionLabel: "MISSION",
        missionTitle:
          "Express yourself freely.",
        missionText:
          "Our mission as Akay Workshop is to increase young people’s awareness of a rapidly developing and changing world while providing a strong space for knowledge sharing where they can express their ideas freely. Our committee topics are carefully selected to be academically enriching and socially relevant to everyday life. Through this platform, where participants can actively use their social skills, we aim to help them gain multidimensional perspectives.",
        visionLabel: "VISION",
        visionTitle:
          "Turn enlightened minds into tangible benefit.",
        visionText:
          "As the Akay Perspective and Enlightenment Workshop team, we aim to contribute to raising young people in Türkiye as individuals with strong awareness, intellectual depth, and oratory skills by helping them understand Turkish culture and origins, world history, different cultures, and languages, ultimately becoming beneficial individuals for our country.<br><br>Our ultimate goal is to raise young people who can use the knowledge they gain and their enlightened minds to create tangible benefits for all humanity, beginning with our country."
      },

      event: {
        eyebrow: "EVENT",
        title:
          "Not just a gathering, <em>a space for thought.</em>",
        dateLabel: "DATE",
        location: "LOCATION",
        fee: "EVENT FEE",
        duration: "DURATION"
      },

      common: {
        comingSoon: "Coming Soon"
      },

      schedule: {
        eyebrow: "SCHEDULE",
        title:
          "The rhythm of time will <em>soon</em> come into view.",
        top: "GENERAL FLOW / FRAMEWORK",
        status: "PROGRAM IN PREPARATION",
        emptyTitle:
          "The full program will be announced soon.",
        emptyText:
          "Once verified, real times, sessions, rooms, committees, and speaker information will populate this flow dynamically."
      },

      committees: {
        eyebrow: "COMMITTEES",
        title:
          "When the agendas are ready, <em>the stage opens.</em>",
        label: "SPACE TO BE OPENED",
        emptyTitle:
          "Committees and agenda topics will be announced soon.",
        emptyText:
          "Once published, each committee will appear here interactively with agenda, description, room, and moderation details."
      },

      sponsors: {
        eyebrow: "SPONSORSHIP",
        title:
          "This experience grows <em>together.</em>",
        ai: "ARTIFICIAL INTELLIGENCE SPONSOR",
        it: "IT SPONSOR",
        design:
          "SOCIAL MEDIA / GRAPHIC DESIGN SPONSOR",
        visit: "Visit website",
        instagram: "Visit Instagram"
      },

      team: {
        eyebrow: "COORDINATION",
        title: "Reach us <em>directly.</em>",
        role: "GENERAL COORDINATOR"
      },

      contact: {
        eyebrow: "CONTACT",
        title: "Share your <em>perspective.</em>",
        text:
          "Follow the official Instagram account for Akay’s latest announcements and event communication."
      },

      footer: {
        statement:
          "A digital experience at the intersection of youth, ideas, culture, and multidimensional perspectives.",
        navigation: "NAVIGATION",
        supporters: "SUPPORTERS",
        social: "SOCIAL",
        rights: "All rights reserved."
      }
    }
  };

  /* =========================================================
     STATE
  ========================================================= */

  let language = "tr";
  let countdownTimer = null;
  let loaderClosed = false;

  try {
    const savedLanguage =
      localStorage.getItem(
        "akay-language"
      );

    if (
      savedLanguage === "tr" ||
      savedLanguage === "en"
    ) {
      language = savedLanguage;
    }
  } catch {
    language = "tr";
  }

  /* =========================================================
     TRANSLATION
  ========================================================= */

  function getTranslation(path) {
    return path
      .split(".")
      .reduce(
        (current, key) =>
          current && current[key],
        translations[language]
      );
  }

  function translatePage() {
    document.documentElement.lang =
      language;

    $$("[data-i18n]").forEach(
      (element) => {
        const translated =
          getTranslation(
            element.dataset.i18n
          );

        if (
          typeof translated ===
          "string"
        ) {
          element.innerHTML =
            translated;
        }
      }
    );

    const langButton =
      $("#langButton");

    const mobileLang =
      $("#mobileLang");

    const footerLang =
      $("#footerLang");

    if (langButton) {
      langButton.textContent =
        language === "tr"
          ? "TR / EN"
          : "EN / TR";
    }

    if (mobileLang) {
      mobileLang.textContent =
        language === "tr"
          ? "EN ↗"
          : "TR ↗";
    }

    if (footerLang) {
      footerLang.textContent =
        language === "tr"
          ? "TR / EN ↗"
          : "EN / TR ↗";
    }

    document.title =
      language === "tr"
        ? "Akay Perspektif ve Aydınlanma Çalıştayı"
        : "Akay Perspective and Enlightenment Workshop";
  }

  function switchLanguage() {
    language =
      language === "tr"
        ? "en"
        : "tr";

    try {
      localStorage.setItem(
        "akay-language",
        language
      );
    } catch {
      /* localStorage yoksa devam et */
    }

    translatePage();
  }

  function setupLanguage() {
    translatePage();

    $("#langButton")?.addEventListener(
      "click",
      switchLanguage
    );

    $("#mobileLang")?.addEventListener(
      "click",
      switchLanguage
    );

    $("#footerLang")?.addEventListener(
      "click",
      switchLanguage
    );
  }

  /* =========================================================
     LOADER
     
     ÜÇLÜ GÜVENLİK:
     1. Normal JS çıkışı
     2. Hard timeout
     3. CSS failsafe zaten style.css içinde mevcut
     
     Böylece JS'nin geri kalanında bir hata olsa bile
     loader kendi CSS animasyonuyla kapanır.
  ========================================================= */

  function closeLoader() {
    const loader =
      $("#loader");

    if (
      !loader ||
      loaderClosed
    ) {
      return;
    }

    loaderClosed = true;

    loader.classList.add(
      "is-hidden"
    );

    window.setTimeout(
      () => {
        if (
          loader &&
          loader.isConnected
        ) {
          loader.remove();
        }
      },
      reducedMotion
        ? 80
        : 950
    );
  }

  function setupLoader() {
    /*
      Normal çıkış.
    */
    window.setTimeout(
      closeLoader,
      reducedMotion
        ? 120
        : 2850
    );

    /*
      Hard failsafe.
    */
    window.setTimeout(
      closeLoader,
      3650
    );

    /*
      Browser sayfayı bfcache'den
      geri getirirse.
    */
    window.addEventListener(
      "pageshow",
      () => {
        window.setTimeout(
          closeLoader,
          reducedMotion
            ? 100
            : 2750
        );
      },
      { once: true }
    );
  }

  /* =========================================================
     HEADER
  ========================================================= */

  function setupHeader() {
    const header =
      $("#header");

    if (!header) {
      return;
    }

    function updateHeader() {
      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );
    }

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      {
        passive: true
      }
    );
  }

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  function setupMobileMenu() {
    const button =
      $("#menuButton");

    const panel =
      $("#mobilePanel");

    if (
      !button ||
      !panel
    ) {
      return;
    }

    function setMenu(open) {
      button.classList.toggle(
        "open",
        open
      );

      panel.classList.toggle(
        "open",
        open
      );

      button.setAttribute(
        "aria-expanded",
        String(open)
      );

      panel.setAttribute(
        "aria-hidden",
        String(!open)
      );

      document.body.classList.toggle(
        "menu-open",
        open
      );
    }

    button.addEventListener(
      "click",
      () => {
        setMenu(
          !panel.classList.contains(
            "open"
          )
        );
      }
    );

    $$(".mobile-panel a").forEach(
      (link) => {
        link.addEventListener(
          "click",
          () => {
            setMenu(false);
          }
        );
      }
    );
  }

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  function setupSmoothScroll() {
    $$('a[href^="#"]').forEach(
      (link) => {
        link.addEventListener(
          "click",
          (event) => {
            const id =
              link.getAttribute(
                "href"
              );

            if (
              !id ||
              id === "#"
            ) {
              return;
            }

            const target =
              document.querySelector(
                id
              );

            if (!target) {
              return;
            }

            event.preventDefault();

            const header =
              $("#header");

            const headerHeight =
              header
                ? header.getBoundingClientRect()
                    .height
                : 0;

            const targetTop =
              target.getBoundingClientRect()
                .top +
              window.scrollY -
              headerHeight -
              10;

            window.scrollTo({
              top:
                targetTop,
              behavior:
                reducedMotion
                  ? "auto"
                  : "smooth"
            });

            try {
              history.replaceState(
                null,
                "",
                id
              );
            } catch {
              /* Browser history erişilemiyorsa scroll yine çalışır. */
            }
          }
        );
      }
    );
  }

  /* =========================================================
     ACTIVE NAV
  ========================================================= */

  function setupActiveNavigation() {
    const links =
      $$(".desktop-nav a");

    const sections =
      $$("[data-section]");

    if (
      !(
        "IntersectionObserver"
        in window
      )
    ) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              const section =
                entry
                  .target
                  .dataset
                  .section;

              links.forEach(
                (link) => {
                  link.classList.toggle(
                    "active",
                    link.dataset.section ===
                      section
                  );
                }
              );
            }
          );
        },
        {
          rootMargin:
            "-35% 0px -50% 0px",
          threshold: 0
        }
      );

    sections.forEach(
      (section) => {
        observer.observe(
          section
        );
      }
    );
  }

  /* =========================================================
     REVEAL ANIMATIONS
     
     DİKKAT:
     CSS'de içerik normalde görünür.
     Bu fonksiyon sadece .js-ready altında
     opacity animasyonunu kullanıyor.
  ========================================================= */

  function setupReveal() {
    const elements =
      $$(".reveal");

    if (
      reducedMotion ||
      !(
        "IntersectionObserver"
        in window
      )
    ) {
      elements.forEach(
        (element) => {
          element.classList.add(
            "visible"
          );
        }
      );

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          );
        },
        {
          threshold: 0.08,
          rootMargin:
            "0px 0px -5% 0px"
        }
      );

    elements.forEach(
      (element) => {
        observer.observe(
          element
        );
      }
    );

    /*
      Bazı mobil tarayıcılarda ilk paint sırasında
      IntersectionObserver gecikebilir.
      Bu kontrol görünmeyen eleman bırakmaz.
    */
    window.setTimeout(
      () => {
        elements.forEach(
          (element) => {
            const rect =
              element.getBoundingClientRect();

            const visible =
              rect.top <
                window.innerHeight &&
              rect.bottom >
                0;

            if (
              visible &&
              !element.classList.contains(
                "visible"
              )
            ) {
              element.classList.add(
                "visible"
              );
            }
          }
        );
      },
      300
    );
  }

  /* =========================================================
     COUNTDOWN
  ========================================================= */

  function setupCountdown() {
    const countdown =
      $("#countdown");

    const started =
      $("#eventStarted");

    if (
      !countdown ||
      !started
    ) {
      return;
    }

    const target =
      new Date(
        "2026-09-15T00:00:00+03:00"
      ).getTime();

    const days =
      $('[data-unit="days"]');

    const hours =
      $('[data-unit="hours"]');

    const minutes =
      $('[data-unit="minutes"]');

    const seconds =
      $('[data-unit="seconds"]');

    function setValue(
      element,
      value
    ) {
      if (!element) {
        return;
      }

      const next =
        String(value)
          .padStart(2, "0");

      if (
        element.textContent ===
        next
      ) {
        return;
      }

      element.textContent =
        next;

      if (!reducedMotion) {
        element.classList.remove(
          "changed"
        );

        void element.offsetWidth;

        element.classList.add(
          "changed"
        );
      }
    }

    function render() {
      const difference =
        target -
        Date.now();

      if (
        difference <= 0
      ) {
        countdown.hidden =
          true;

        started.hidden =
          false;

        if (
          countdownTimer
        ) {
          clearInterval(
            countdownTimer
          );

          countdownTimer =
            null;
        }

        return;
      }

      const totalSeconds =
        Math.floor(
          difference / 1000
        );

      const d =
        Math.floor(
          totalSeconds /
            86400
        );

      const h =
        Math.floor(
          (totalSeconds %
            86400) /
            3600
        );

      const m =
        Math.floor(
          (totalSeconds %
            3600) /
            60
        );

      const s =
        totalSeconds %
        60;

      setValue(days, d);
      setValue(hours, h);
      setValue(minutes, m);
      setValue(seconds, s);
    }

    render();

    countdownTimer =
      window.setInterval(
        render,
        1000
      );
  }

  /* =========================================================
     POINTER LIGHT
  ========================================================= */

  function setupPointerLight() {
    if (
      isTouch ||
      reducedMotion
    ) {
      return;
    }

    const light =
      $(".pointer-light");

    if (!light) {
      return;
    }

    document.body.classList.add(
      "pointer-active"
    );

    let targetX =
      window.innerWidth / 2;

    let targetY =
      window.innerHeight / 2;

    let currentX =
      targetX;

    let currentY =
      targetY;

    window.addEventListener(
      "pointermove",
      (event) => {
        targetX =
          event.clientX;

        targetY =
          event.clientY;
      },
      {
        passive: true
      }
    );

    function animate() {
      currentX +=
        (
          targetX -
          currentX
        ) * 0.12;

      currentY +=
        (
          targetY -
          currentY
        ) * 0.12;

      light.style.left =
        `${currentX}px`;

      light.style.top =
        `${currentY}px`;

      requestAnimationFrame(
        animate
      );
    }

    requestAnimationFrame(
      animate
    );
  }

  /* =========================================================
     HERO PARALLAX
  ========================================================= */

  function setupHeroParallax() {
    if (
      isTouch ||
      reducedMotion
    ) {
      return;
    }

    const hero =
      $(".hero");

    if (!hero) {
      return;
    }

    const elements =
      $(
        ".hero-orb, .hero-glow",
      );

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    window.addEventListener(
      "pointermove",
      (event) => {
        targetX =
          (
            event.clientX /
            window.innerWidth -
            0.5
          ) * 1.5;

        targetY =
          (
            event.clientY /
            window.innerHeight -
            0.5
          ) * 1.5;
      },
      {
        passive: true
      }
    );

    function animate() {
      currentX +=
        (
          targetX -
          currentX
        ) * 0.04;

      currentY +=
        (
          targetY -
          currentY
        ) * 0.04;

      elements.forEach(
        (element, index) => {
          const power =
            (index + 1) * 3;

          element.style.translate =
            `
              ${currentX * power}px
              ${currentY * power}px
            `;
        }
      );

      requestAnimationFrame(
        animate
      );
    }

    requestAnimationFrame(
      animate
    );
  }

  /* =========================================================
     ESC KEY
  ========================================================= */

  function setupKeyboard() {
    document.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key !==
          "Escape"
        ) {
          return;
        }

        const panel =
          $("#mobilePanel");

        const button =
          $("#menuButton");

        if (
          panel?.classList.contains(
            "open"
          )
        ) {
          button?.click();
        }
      }
    );
  }

  /* =========================================================
     INIT
  ========================================================= */

  function init() {
    /*
      Loader en başta kurulur ama diğer scriptlerin
      herhangi birinin hata vermesi loader'ın CSS
      failsafe'ini etkilemez.
    */
    setupLoader();

    setupLanguage();

    setupHeader();
    setupMobileMenu();
    setupSmoothScroll();
    setupActiveNavigation();

    setupReveal();

    setupCountdown();

    setupPointerLight();
    setupHeroParallax();

    setupKeyboard();
  }

  /* =========================================================
     START
  ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      {
        once: true
      }
    );
  } else {
    init();
  }

})();
