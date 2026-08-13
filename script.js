(() => {
  "use strict";

  /* =========================================================
     AKAY PERSPEKTİF VE AYDINLANMA ÇALIŞTAYI
     Main JavaScript
  ========================================================= */

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  /* =========================================================
     STATE
  ========================================================= */

  let currentLanguage = "tr";
  let countdownInterval = null;
  let loaderClosed = false;

  try {
    const savedLanguage = localStorage.getItem("akay-language");

    if (savedLanguage === "tr" || savedLanguage === "en") {
      currentLanguage = savedLanguage;
    }
  } catch {
    currentLanguage = "tr";
  }

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
        top: "GENEL AKIŞ",
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
          "Yayınlandığında her komite; gündem, açıklama, salon ve moderasyon bilgileriyle burada yer alacaktır."
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
        top: "GENERAL FLOW",
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
          "Once published, each committee will appear here with agenda, description, room, and moderation details."
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
     TRANSLATION HELPERS
  ========================================================= */

  function getTranslation(path) {
    return path.split(".").reduce(
      (value, key) =>
        value && value[key],
      translations[currentLanguage]
    );
  }

  function translatePage() {
    document.documentElement.lang = currentLanguage;

    $$("[data-i18n]").forEach((element) => {
      const value = getTranslation(element.dataset.i18n);

      if (typeof value === "string") {
        element.innerHTML = value;
      }
    });

    const languageButtons = [
      $("#langButton"),
      $("#mobileLang"),
      $("#footerLang")
    ].filter(Boolean);

    languageButtons.forEach((button) => {
      if (button.id === "mobileLang") {
        button.textContent =
          currentLanguage === "tr"
            ? "EN ↗"
            : "TR ↗";
      } else {
        button.textContent =
          currentLanguage === "tr"
            ? "TR / EN"
            : "EN / TR";
      }
    });

    document.title =
      currentLanguage === "tr"
        ? "Akay Perspektif ve Aydınlanma Çalıştayı"
        : "Akay Perspective and Enlightenment Workshop";
  }

  function changeLanguage() {
    currentLanguage =
      currentLanguage === "tr"
        ? "en"
        : "tr";

    try {
      localStorage.setItem(
        "akay-language",
        currentLanguage
      );
    } catch {
      // localStorage erişilemezse dil yine çalışır.
    }

    translatePage();
  }

  function setupLanguage() {
    translatePage();

    $("#langButton")?.addEventListener(
      "click",
      changeLanguage
    );

    $("#mobileLang")?.addEventListener(
      "click",
      changeLanguage
    );

    $("#footerLang")?.addEventListener(
      "click",
      changeLanguage
    );
  }

  /* =========================================================
     LOADER
  ========================================================= */

  function closeLoader() {
    const loader = $("#loader");

    if (!loader || loaderClosed) {
      return;
    }

    loaderClosed = true;
    loader.classList.add("is-hidden");

    window.setTimeout(() => {
      loader?.remove();
    }, prefersReducedMotion ? 100 : 900);
  }

  function setupLoader() {
    /*
      Normal kapanış.
    */
    window.setTimeout(
      closeLoader,
      prefersReducedMotion ? 100 : 2800
    );

    /*
      Her ihtimale karşı maksimum süre.
      JS tarafındaki başka bir hata loader'ı kilitlemesin.
    */
    window.setTimeout(
      closeLoader,
      3800
    );
  }

  /* =========================================================
     HEADER
  ========================================================= */

  function setupHeader() {
    const header = $("#header");

    if (!header) {
      return;
    }

    const updateHeader = () => {
      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );
  }

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  function setupMobileMenu() {
    const menuButton = $("#menuButton");
    const mobilePanel = $("#mobilePanel");

    if (!menuButton || !mobilePanel) {
      return;
    }

    function setMenuState(isOpen) {
      menuButton.classList.toggle(
        "open",
        isOpen
      );

      mobilePanel.classList.toggle(
        "open",
        isOpen
      );

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      mobilePanel.setAttribute(
        "aria-hidden",
        String(!isOpen)
      );

      document.body.classList.toggle(
        "menu-open",
        isOpen
      );
    }

    menuButton.addEventListener(
      "click",
      () => {
        const isOpen =
          mobilePanel.classList.contains("open");

        setMenuState(!isOpen);
      }
    );

    $$(".mobile-panel a").forEach(
      (link) => {
        link.addEventListener(
          "click",
          () => setMenuState(false)
        );
      }
    );
  }

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  function setupSmoothScroll() {
    $$('a[href^="#"]').forEach((link) => {
      link.addEventListener(
        "click",
        (event) => {
          const href =
            link.getAttribute("href");

          if (!href || href === "#") {
            return;
          }

          const target =
            document.querySelector(href);

          if (!target) {
            return;
          }

          event.preventDefault();

          const header = $("#header");

          const headerHeight = header
            ? header.getBoundingClientRect().height
            : 0;

          const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight -
            12;

          window.scrollTo({
            top: targetPosition,
            behavior: prefersReducedMotion
              ? "auto"
              : "smooth"
          });
        }
      );
    });
  }

  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  function setupActiveNavigation() {
    const navLinks =
      $$(".desktop-nav a[data-section]");

    const sections =
      $$("[data-section]");

    if (
      !navLinks.length ||
      !sections.length ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const sectionName =
              entry.target.dataset.section;

            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.dataset.section === sectionName
              );
            });
          });
        },
        {
          rootMargin:
            "-35% 0px -50% 0px",
          threshold: 0
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  /* =========================================================
     REVEAL
  ========================================================= */

  function setupReveal() {
    const elements = $$(".reveal");

    if (!elements.length) {
      return;
    }

    /*
      Hareket azaltma açıksa veya IntersectionObserver yoksa
      bütün içerikleri direkt göster.
    */
    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.classList.add("visible");
      });

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px"
        }
      );

    elements.forEach((element) => {
      observer.observe(element);
    });

    /*
      İlk ekrandaki elemanlar bazı mobil browserlarda
      IntersectionObserver yüzünden geç kalmasın.
    */
    window.setTimeout(() => {
      elements.forEach((element) => {
        const rect =
          element.getBoundingClientRect();

        const isVisible =
          rect.top < window.innerHeight &&
          rect.bottom > 0;

        if (isVisible) {
          element.classList.add("visible");
        }
      });
    }, 250);
  }

  /* =========================================================
     COUNTDOWN
  ========================================================= */

  function setupCountdown() {
    const countdown = $("#countdown");
    const eventStarted = $("#eventStarted");

    if (!countdown || !eventStarted) {
      return;
    }

    /*
      15 Eylül 2026 00:00
      Türkiye UTC+03:00
    */
    const targetDate =
      new Date(
        "2026-09-15T00:00:00+03:00"
      ).getTime();

    const daysElement =
      $('[data-unit="days"]');

    const hoursElement =
      $('[data-unit="hours"]');

    const minutesElement =
      $('[data-unit="minutes"]');

    const secondsElement =
      $('[data-unit="seconds"]');

    function updateNumber(
      element,
      value
    ) {
      if (!element) {
        return;
      }

      const formatted =
        String(value).padStart(2, "0");

      if (
        element.textContent === formatted
      ) {
        return;
      }

      element.textContent = formatted;

      if (!prefersReducedMotion) {
        element.classList.remove("changed");

        /*
          CSS animasyonunu yeniden tetikler.
        */
        void element.offsetWidth;

        element.classList.add("changed");
      }
    }

    function updateCountdown() {
      const remaining =
        targetDate - Date.now();

      if (remaining <= 0) {
        countdown.hidden = true;
        eventStarted.hidden = false;

        if (countdownInterval) {
          clearInterval(countdownInterval);
          countdownInterval = null;
        }

        return;
      }

      const totalSeconds =
        Math.floor(remaining / 1000);

      const days =
        Math.floor(
          totalSeconds / 86400
        );

      const hours =
        Math.floor(
          (totalSeconds % 86400) / 3600
        );

      const minutes =
        Math.floor(
          (totalSeconds % 3600) / 60
        );

      const seconds =
        totalSeconds % 60;

      updateNumber(
        daysElement,
        days
      );

      updateNumber(
        hoursElement,
        hours
      );

      updateNumber(
        minutesElement,
        minutes
      );

      updateNumber(
        secondsElement,
        seconds
      );
    }

    updateCountdown();

    countdownInterval =
      window.setInterval(
        updateCountdown,
        1000
      );
  }

  /* =========================================================
     POINTER LIGHT
  ========================================================= */

  function setupPointerLight() {
    if (
      isTouchDevice ||
      prefersReducedMotion
    ) {
      return;
    }

    const light =
      $(".pointer-light");

    if (!light) {
      return;
    }

    let targetX =
      window.innerWidth / 2;

    let targetY =
      window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener(
      "pointermove",
      (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
      },
      { passive: true }
    );

    function animate() {
      currentX +=
        (targetX - currentX) * 0.10;

      currentY +=
        (targetY - currentY) * 0.10;

      light.style.left =
        `${currentX}px`;

      light.style.top =
        `${currentY}px`;

      window.requestAnimationFrame(
        animate
      );
    }

    window.requestAnimationFrame(
      animate
    );
  }

  /* =========================================================
     HERO PARALLAX
  ========================================================= */

  function setupHeroParallax() {
    if (
      isTouchDevice ||
      prefersReducedMotion
    ) {
      return;
    }

    const elements =
      $$(
        ".hero-orb, .hero-glow"
      );

    if (!elements.length) {
      return;
    }

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
          );

        targetY =
          (
            event.clientY /
            window.innerHeight -
            0.5
          );
      },
      { passive: true }
    );

    function animate() {
      currentX +=
        (targetX - currentX) * 0.035;

      currentY +=
        (targetY - currentY) * 0.035;

      elements.forEach(
        (element, index) => {
          const strength =
            (index + 1) * 4;

          element.style.transform =
            `translate3d(
              ${currentX * strength}px,
              ${currentY * strength}px,
              0
            )`;
        }
      );

      window.requestAnimationFrame(
        animate
      );
    }

    window.requestAnimationFrame(
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
        if (event.key !== "Escape") {
          return;
        }

        const mobilePanel =
          $("#mobilePanel");

        const menuButton =
          $("#menuButton");

        if (
          mobilePanel?.classList.contains("open")
        ) {
          menuButton?.click();
        }
      }
    );
  }

  /* =========================================================
     PAGE VISIBILITY
  ========================================================= */

  function setupVisibilityHandling() {
    document.addEventListener(
      "visibilitychange",
      () => {
        if (
          document.hidden &&
          countdownInterval
        ) {
          clearInterval(
            countdownInterval
          );

          countdownInterval = null;
        } else if (
          !document.hidden &&
          !countdownInterval
        ) {
          setupCountdown();
        }
      }
    );
  }

  /* =========================================================
     INITIALIZATION
  ========================================================= */

  function init() {
    /*
      CSS'teki .js-ready sistemi sayesinde:
      JS çalışmasa bile içerik varsayılan olarak görünür.
      JS düzgün başladıktan sonra animasyonlar devreye girer.
    */
    document.documentElement.classList.add(
      "js-ready"
    );

    setupLanguage();
    setupLoader();
    setupHeader();
    setupMobileMenu();
    setupSmoothScroll();
    setupActiveNavigation();
    setupReveal();
    setupCountdown();
    setupPointerLight();
    setupHeroParallax();
    setupKeyboard();
    setupVisibilityHandling();
  }

  /* =========================================================
     START
  ========================================================= */

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
