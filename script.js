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
  let loaderFinished = false;

  try {
    const saved =
      localStorage.getItem("akay-language");

    if (
      saved === "tr" ||
      saved === "en"
    ) {
      language = saved;
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
        (object, key) =>
          object && object[key],
        translations[language]
      );
  }

  function translatePage() {
    document.documentElement.lang =
      language;

    $$("[data-i18n]").forEach(
      (element) => {
        const value =
          getTranslation(
            element.dataset.i18n
          );

        if (
          typeof value === "string"
        ) {
          element.innerHTML = value;
        }
      }
    );

    const languageButton =
      $("#langButton");

    const mobileLang =
      $("#mobileLang");

    const footerLang =
      $("#footerLang");

    if (languageButton) {
      languageButton.textContent =
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
      // localStorage erişimi yoksa oturum içinde çalışmaya devam eder.
    }

    translatePage();
  }

  function setupLanguage() {
    translatePage();

    $("#langButton")
      ?.addEventListener(
        "click",
        switchLanguage
      );

    $("#mobileLang")
      ?.addEventListener(
        "click",
        switchLanguage
      );

    $("#footerLang")
      ?.addEventListener(
        "click",
        switchLanguage
      );
  }

  /* =========================================================
     LOADER
  ========================================================= */

  function closeLoader() {
    const loader =
      $("#loader");

    if (
      !loader ||
      loaderFinished
    ) {
      return;
    }

    loaderFinished = true;

    loader.classList.add(
      "is-hidden"
    );

    /*
      CSS kendi başına da kapanıyor.
      Bu timeout sadece DOM temizliği için.
    */
    window.setTimeout(
      () => {
        if (loader.isConnected) {
          loader.remove();
        }
      },
      reducedMotion ? 100 : 950
    );
  }

  function setupLoader() {
    /*
      Normal çıkış.
    */
    window.setTimeout(
      closeLoader,
      reducedMotion
        ? 100
        : 2850
    );

    /*
      Hard failsafe.
      JavaScript'in herhangi bir kısmı takılsa bile
      loader hiçbir zaman sonsuza kadar kalmaz.
    */
    window.setTimeout(
      closeLoader,
      3600
    );

    /*
      Browser bfcache / pageshow durumları.
    */
    window.addEventListener(
      "pageshow",
      () => {
        window.setTimeout(
          closeLoader,
          reducedMotion ? 80 : 2700
        );
      },
      { once: true }
    );

    /*
      DOM hazır olduktan sonra tekrar kontrol.
    */
    if (
      document.readyState ===
      "loading"
    ) {
      document.addEventListener(
        "DOMContentLoaded",
        () => {
          window.setTimeout(
            closeLoader,
            reducedMotion
              ? 120
              : 2800
          );
        },
        { once: true }
      );
    }
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

    const update =
      () => {
        header.classList.toggle(
          "scrolled",
          window.scrollY > 30
        );
      };

    update();

    window.addEventListener(
      "scroll",
      update,
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

    const setMenu =
      (open) => {
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
      };

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

    $$(
      ".mobile-panel a"
    ).forEach(
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
    $$(
      'a[href^="#"]'
    ).forEach(
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

            const headerHeight =
              $("#header")
                ?.getBoundingClientRect()
                .height || 0;

            const targetTop =
              target.getBoundingClientRect()
                .top +
              window.scrollY -
              headerHeight -
              10;

            window.scrollTo({
              top: targetTop,
              behavior:
                reducedMotion
                  ? "auto"
                  : "smooth"
            });

            if (
              history.replaceState
            ) {
              history.replaceState(
                null,
                "",
                id
              );
            }
          }
        );
      }
    );
  }

  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  function setupActiveNavigation() {
    const links =
      $$(
        ".desktop-nav a"
      );

    const sections =
      $$(
        "[data-section]"
      );

    if (
      !("IntersectionObserver" in window)
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
                entry.target.dataset.section;

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
            "-35% 0px -50% 0px"
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
     REVEAL
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
          threshold: .12,
          rootMargin:
            "0px 0px -7% 0px"
        }
      );

    elements.forEach(
      (element) => {
        observer.observe(
          element
        );
      }
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

    /*
      15 Eylül 2026
      Türkiye saati, gün başlangıcı.
    */
    const target =
      new Date(
        "2026-09-15T00:00:00+03:00"
      ).getTime();

    const days =
      $(
        '[data-unit="days"]'
      );

    const hours =
      $(
        '[data-unit="hours"]'
      );

    const minutes =
      $(
        '[data-unit="minutes"]'
      );

    const seconds =
      $(
        '[data-unit="seconds"]'
      );

    const setValue =
      (
        element,
        value
      ) => {
        if (
          !element
        ) {
          return;
        }

        const text =
          String(value)
            .padStart(
              2,
              "0"
            );

        if (
          element.textContent ===
          text
        ) {
          return;
        }

        element.textContent =
          text;

        if (
          !reducedMotion
        ) {
          element.classList.remove(
            "changed"
          );

          void element.offsetWidth;

          element.classList.add(
            "changed"
          );
        }
      };

    const render =
      () => {
        const distance =
          target -
          Date.now();

        if (
          distance <= 0
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
            distance / 1000
          );

        const d =
          Math.floor(
            totalSeconds / 86400
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
          totalSeconds % 60;

        setValue(days, d);
        setValue(hours, h);
        setValue(minutes, m);
        setValue(seconds, s);
      };

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

  function setupPointer() {
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

    const animate =
      () => {
        currentX +=
          (targetX -
            currentX) *
          .12;

        currentY +=
          (targetY -
            currentY) *
          .12;

        light.style.left =
          `${currentX}px`;

        light.style.top =
          `${currentY}px`;

        requestAnimationFrame(
          animate
        );
      };

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

    const items =
      $$(
        ".hero-orb, .hero-glow"
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
            .5
          ) * 1.5;

        targetY =
          (
            event.clientY /
            window.innerHeight -
            .5
          ) * 1.5;
      },
      {
        passive: true
      }
    );

    const animate =
      () => {
        currentX +=
          (targetX -
            currentX) *
          .04;

        currentY +=
          (targetY -
            currentY) *
          .04;

        items.forEach(
          (item, index) => {
            const power =
              (index + 1) * 3;

            item.style.translate =
              `
                ${currentX * power}px
                ${currentY * power}px
              `;
          }
        );

        requestAnimationFrame(
          animate
        );
      };

    requestAnimationFrame(
      animate
    );
  }

  /* =========================================================
     KEYBOARD
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

        const menu =
          $("#mobilePanel");

        const button =
          $("#menuButton");

        if (
          menu?.classList.contains(
            "open"
          )
        ) {
          button?.click();
        }
      }
    );
  }

  /* =========================================================
     INITIALIZE
  ========================================================= */

  function init() {
    setupLoader();
    setupLanguage();

    setupHeader();
    setupMobileMenu();
    setupSmoothScroll();
    setupActiveNavigation();

    setupReveal();

    setupCountdown();

    setupPointer();
    setupHeroParallax();

    setupKeyboard();
  }

  /*
    window.load beklenmiyor.
    Bu çok önemli:
    Görsel/font/GitHub Pages kaynaklarından biri gecikse
    bile sitenin geri kalanı çalışmaya devam eder.
  */
  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }

})();
