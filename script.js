(() => {
  "use strict";

  /* =========================================================
     HELPERS
     ========================================================= */

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const reducedMotion =
    window.matchMedia(
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
        committees: "Komiteler",
        schedule: "Akış",
        sponsors: "Sponsorluk",
        contact: "İletişim"
      },

      hero: {
        eyebrow:
          "Gençlik / Fikir / Perspektif",

        copy:
          "Bilginin yalnızca paylaşılmadığı, bakış açılarının birbirine temas ettiği bir düşünce alanı.",

        explore:
          "Deneyimi Keşfet",

        connect:
          "İletişime Geç",

        dateLabel:
          "Etkinlik Tarihi",

        month:
          "Eylül",

        sideNote:
          "Düşün. Tartış. Perspektifini genişlet."
      },

      countdown: {
        kicker:
          "Başlangıca kalan süre",

        live:
          "CANLI",

        days:
          "GÜN",

        hours:
          "SAAT",

        minutes:
          "DAKİKA",

        seconds:
          "SANİYE",

        startedKicker:
          "Şimdi",

        started:
          "Etkinlik Başladı"
      },

      about: {

        eyebrow:
          "Neden Akay?",

        title:
          "Fikirlerin kesiştiği yerde <em>perspektif</em> değişir.",

        missionLabel:
          "MİSYON",

        missionTitle:
          "Özgürce ifade et.",

        missionText:
          "Akay Çalıştayı olarak misyonumuz; Gençlerin hızla gelişen ve değişen dünyaya dair farkındalıklarını artırırken, onlara fikirlerini özgürce ifade edebilecekleri, güçlü bir bilgi paylaşım alanı sunmaktır. Komite konularımız ise hem akademik anlamda geliştirici hem de sosyal bakımdan günlük hayatımızı doğrudan etkileyen konular olarak özenle seçilmiştir. Sosyal becerilerini aktif olarak kullanabilecekleri bu platformda, çok yönlü bakış açıları kazanmalarını hedefliyoruz.",

        axis:
          "BİR FİKİR / BİRDEN ÇOK BAKIŞ",

        visionLabel:
          "VİZYON",

        visionTitle:
          "Aydınlık zihni somut faydaya dönüştür.",

        visionText:
          "Akay Perspektif ve Aydınlanma Çalıştayı ekibi olarak Türkiye’deki gençlerin Türk kültürü ve kökeni başta olmak üzere; dünya tarihini, farklı kültürleri ve dilleri anlayarak farkındalığı, entelektüel donanımı ve hitabet becerisi yüksek bireyler olmalarına katkı sağlayarak ülkemiz adına faydalı bireyler yetiştirmeyi amaçlıyoruz.<br><br>Nihai hedefimiz, gençlerin bu süreçte edindikleri bilgi birikimini ve aydınlık zihinlerini kullanarak başta ülkemiz olmak üzere tüm insanlığa somut faydalar sunan bireyler olarak yetişmeleridir."
      },

      event: {

        eyebrow:
          "Etkinlik",

        title:
          "Bir buluşma değil, <em>bir düşünce alanı.</em>",

        statement:
          "Henüz açıklanmayan ayrıntıların yerini doldurmak yerine, burada gerçek olanı net ve güçlü biçimde sunuyoruz.",

        date:
          "Tarih",

        location:
          "Konum",

        fee:
          "Etkinlik Ücreti",

        duration:
          "Süre"
      },

      common: {
        comingSoon:
          "Yakında Açıklanacak"
      },

      schedule: {

        eyebrow:
          "Akış",

        title:
          "Zamanın ritmi <em>yakında</em> görünür olacak.",

        frameLabel:
          "GENEL AKIŞ / FRAMEWORK",

        status:
          "PROGRAM HAZIRLANIYOR",

        emptyTitle:
          "Program yakında açıklanacaktır.",

        emptyText:
          "Gerçek zaman, oturum, salon, komite ve konuşmacı bilgileri doğrulandığında bu akış dinamik olarak doldurulacaktır.",

        time:
          "Zaman",

        session:
          "Oturum",

        room:
          "Salon / Konum",

        committee:
          "Komite"
      },

      committees: {

        eyebrow:
          "Komiteler",

        title:
          "Gündemler hazır olduğunda <em>sahne açılacak.</em>",

        label:
          "AÇILACAK ALAN",

        emptyTitle:
          "Komiteler ve gündem maddeleri yakında açıklanacaktır.",

        emptyText:
          "Yayınlandığında her komite; gündem, açıklama, salon ve moderasyon bilgileriyle etkileşimli olarak burada yer alacaktır.",

        awaiting:
          "Yakında"
      },

      sponsors: {

        eyebrow:
          "Sponsorluk",

        title:
          "Bu deneyim <em>birlikte</em> büyüyor.",

        ai:
          "YAPAY ZEKA SPONSORU",

        it:
          "BT SPONSORU",

        design:
          "SOSYAL MEDYA / GRAFİK TASARIM SPONSORU",

        visit:
          "Web sitesini ziyaret et",

        instagramVisit:
          "Instagram'ı ziyaret et",

        note:
          "Üç destekçi, tek bir deneyim."
      },

      team: {

        eyebrow:
          "Koordinasyon",

        title:
          "Doğrudan <em>ulaş.</em>",

        role:
          "Genel Koordinatör"
      },

      contact: {

        eyebrow:
          "İletişim",

        title:
          "Perspektifini <em>paylaş.</em>",

        text:
          "Akay'ın güncel duyuruları ve etkinlik iletişimi için resmi Instagram hesabını takip et."
      },

      footer: {

        statement:
          "Gençlik, fikir, kültür ve çok yönlü bakışın kesiştiği dijital bir deneyim.",

        navigation:
          "NAVİGASYON",

        supporters:
          "DESTEKÇİLER",

        social:
          "SOSYAL",

        rights:
          "Tüm hakları saklıdır."
      }

    },


    en: {

      nav: {
        home: "Home",
        about: "About",
        event: "Event",
        committees: "Committees",
        schedule: "Schedule",
        sponsors: "Sponsors",
        contact: "Contact"
      },

      hero: {

        eyebrow:
          "Youth / Idea / Perspective",

        copy:
          "A space for thought where knowledge is not simply shared, but perspectives meet and reshape one another.",

        explore:
          "Explore the Experience",

        connect:
          "Get in Touch",

        dateLabel:
          "Event Date",

        month:
          "September",

        sideNote:
          "Think. Debate. Expand your perspective."
      },

      countdown: {

        kicker:
          "Time until the opening",

        live:
          "LIVE",

        days:
          "DAYS",

        hours:
          "HOURS",

        minutes:
          "MINUTES",

        seconds:
          "SECONDS",

        startedKicker:
          "Now",

        started:
          "The Event Has Started"
      },

      about: {

        eyebrow:
          "Why Akay?",

        title:
          "Where ideas intersect, <em>perspective</em> changes.",

        missionLabel:
          "MISSION",

        missionTitle:
          "Express yourself freely.",

        missionText:
          "Our mission as Akay Workshop is to increase young people’s awareness of a rapidly developing and changing world while providing a strong space for knowledge sharing where they can express their ideas freely. Our committee topics are carefully selected to be academically enriching and socially relevant to everyday life. Through this platform, where participants can actively use their social skills, we aim to help them gain multidimensional perspectives.",

        axis:
          "ONE IDEA / MANY PERSPECTIVES",

        visionLabel:
          "VISION",

        visionTitle:
          "Turn enlightened minds into tangible benefit.",

        visionText:
          "As the Akay Perspective and Enlightenment Workshop team, we aim to contribute to raising young people in Türkiye as individuals with strong awareness, intellectual depth, and oratory skills by helping them understand Turkish culture and origins, world history, different cultures, and languages, ultimately becoming beneficial individuals for our country.<br><br>Our ultimate goal is to raise young people who can use the knowledge they gain and their enlightened minds to create tangible benefits for all humanity, beginning with our country."
      },

      event: {

        eyebrow:
          "Event",

        title:
          "Not just a gathering, <em>a space for thought.</em>",

        statement:
          "Instead of filling in details that have not been announced, we present what is real here with clarity and intention.",

        date:
          "Date",

        location:
          "Location",

        fee:
          "Event Fee",

        duration:
          "Duration"
      },

      common: {
        comingSoon:
          "Coming Soon"
      },

      schedule: {

        eyebrow:
          "Schedule",

        title:
          "The rhythm of time will <em>soon</em> come into view.",

        frameLabel:
          "GENERAL FLOW / FRAMEWORK",

        status:
          "PROGRAM IN PREPARATION",

        emptyTitle:
          "The full program will be announced soon.",

        emptyText:
          "Once verified, real times, sessions, rooms, committees, and speaker information will populate this flow dynamically.",

        time:
          "Time",

        session:
          "Session",

        room:
          "Room / Location",

        committee:
          "Committee"
      },

      committees: {

        eyebrow:
          "Committees",

        title:
          "When the agendas are ready, <em>the stage opens.</em>",

        label:
          "SPACE TO BE OPENED",

        emptyTitle:
          "Committees and agenda topics will be announced soon.",

        emptyText:
          "Once published, each committee will appear here interactively with agenda, description, room, and moderation details.",

        awaiting:
          "Coming Soon"
      },

      sponsors: {

        eyebrow:
          "Sponsorship",

        title:
          "This experience grows <em>together.</em>",

        ai:
          "ARTIFICIAL INTELLIGENCE SPONSOR",

        it:
          "IT SPONSOR",

        design:
          "SOCIAL MEDIA / GRAPHIC DESIGN SPONSOR",

        visit:
          "Visit website",

        instagramVisit:
          "Visit Instagram",

        note:
          "Three supporters, one experience."
      },

      team: {

        eyebrow:
          "Coordination",

        title:
          "Reach us <em>directly.</em>",

        role:
          "General Coordinator"
      },

      contact: {

        eyebrow:
          "Contact",

        title:
          "Share your <em>perspective.</em>",

        text:
          "Follow the official Instagram account for Akay’s latest announcements and event communication."
      },

      footer: {

        statement:
          "A digital experience at the intersection of youth, ideas, culture, and multidimensional perspectives.",

        navigation:
          "NAVIGATION",

        supporters:
          "SUPPORTERS",

        social:
          "SOCIAL",

        rights:
          "All rights reserved."
      }

    }

  };


  /* =========================================================
     STATE
     ========================================================= */

  const state = {
    lang:
      localStorage.getItem("akay-lang") || "tr",

    countdownInterval:
      null
  };


  /* =========================================================
     TRANSLATION HELPERS
     ========================================================= */

  function getNested(object, path) {

    return path
      .split(".")
      .reduce(
        (current, key) =>
          current && current[key],
        object
      );
  }


  function updateMeta() {

    document.title =
      state.lang === "tr"
        ? "Akay Perspektif ve Aydınlanma Çalıştayı"
        : "Akay Perspective and Enlightenment Workshop";

    const description =
      document.querySelector(
        'meta[name="description"]'
      );

    if (!description) {
      return;
    }

    description.content =
      state.lang === "tr"
        ? "Akay Perspektif ve Aydınlanma Çalıştayı. Gençlerin fikirlerini özgürce ifade edebileceği, bilgi paylaşımı ve çok yönlü bakış açıları geliştiren bir deneyim."
        : "Akay Perspective and Enlightenment Workshop. A space for young people to express ideas freely, share knowledge, and develop multidimensional perspectives.";
  }


  function applyTranslations() {

    const dictionary =
      translations[state.lang];

    document.documentElement.lang =
      state.lang;

    $$("[data-i18n]").forEach(element => {

      const value =
        getNested(
          dictionary,
          element.dataset.i18n
        );

      if (typeof value === "string") {
        element.innerHTML = value;
      }
    });


    const current =
      $(".lang-current");

    const other =
      $(".lang-other");


    if (current) {
      current.textContent =
        state.lang.toUpperCase();
    }

    if (other) {
      other.textContent =
        state.lang === "tr"
          ? "EN"
          : "TR";
    }


    const languageButton =
      $("#languageSwitch");

    if (languageButton) {

      languageButton.setAttribute(
        "aria-label",
        state.lang === "tr"
          ? "Dili İngilizceye değiştir"
          : "Switch language to Turkish"
      );

    }


    const mobileLanguage =
      $("#mobileLanguage");

    if (mobileLanguage) {

      mobileLanguage.innerHTML =
        `${state.lang === "tr" ? "EN" : "TR"} <span>↗</span>`;
    }


    const footerLanguage =
      $("#footerLanguage");

    if (footerLanguage) {

      footerLanguage.textContent =
        `${state.lang.toUpperCase()} / ${
          state.lang === "tr" ? "EN" : "TR"
        } ↗`;
    }


    updateMeta();
  }


  function toggleLanguage() {

    state.lang =
      state.lang === "tr"
        ? "en"
        : "tr";

    localStorage.setItem(
      "akay-lang",
      state.lang
    );

    applyTranslations();
  }


  function initLanguage() {

    applyTranslations();

    [
      $("#languageSwitch"),
      $("#mobileLanguage"),
      $("#footerLanguage")
    ].forEach(button => {

      button?.addEventListener(
        "click",
        toggleLanguage
      );

    });
  }


  /* =========================================================
     LOADER
     ========================================================= */

  function setupLoader() {

    const loader =
      $("#loader");

    if (!loader) {
      return;
    }


    let finished =
      false;


    function finishLoader() {

      if (finished) {
        return;
      }

      finished = true;

      loader.classList.add(
        "is-hidden"
      );

      /*
        Loader artık hiçbir şekilde
        window.load olayına bağımlı değil.
        Böylece local HTML dosyasında da
        sonsuza kadar ekranda kalmaz.
      */

      window.setTimeout(() => {

        if (loader.isConnected) {
          loader.remove();
        }

      }, reducedMotion ? 100 : 950);

    }


    /*
      Normal animasyon süresi.
    */

    window.setTimeout(
      finishLoader,
      reducedMotion ? 150 : 1900
    );


    /*
      Ek güvenlik kilidi.
      Tarayıcı saçmalarsa bile loader
      maksimum birkaç saniye içinde gider.
    */

    window.setTimeout(
      finishLoader,
      reducedMotion ? 500 : 3200
    );
  }


  /* =========================================================
     HEADER
     ========================================================= */

  function setupHeader() {

    const header =
      $("#siteHeader");

    if (!header) {
      return;
    }


    function updateHeader() {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 24
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
     MOBILE NAVIGATION
     ========================================================= */

  function setupMobileNav() {

    const toggle =
      $("#menuToggle");

    const nav =
      $("#mobileNav");

    if (!toggle || !nav) {
      return;
    }


    function setOpen(open) {

      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );

      toggle.setAttribute(
        "aria-label",
        open
          ? state.lang === "tr"
            ? "Menüyü kapat"
            : "Close menu"
          : state.lang === "tr"
            ? "Menüyü aç"
            : "Open menu"
      );


      nav.classList.toggle(
        "is-open",
        open
      );


      nav.setAttribute(
        "aria-hidden",
        String(!open)
      );


      document.body.classList.toggle(
        "menu-open",
        open
      );
    }


    toggle.addEventListener(
      "click",
      () =>
        setOpen(
          !nav.classList.contains(
            "is-open"
          )
        )
    );


    $$(".mobile-nav-link").forEach(
      link => {

        link.addEventListener(
          "click",
          () => setOpen(false)
        );

      }
    );
  }


  /* =========================================================
     SMOOTH NAVIGATION
     ========================================================= */

  function setupSmoothNavigation() {

    $$('a[href^="#"]').forEach(
      link => {

        link.addEventListener(
          "click",
          event => {

            const id =
              link.getAttribute("href");

            const target =
              id &&
              document.querySelector(id);

            if (!target) {
              return;
            }

            event.preventDefault();


            const top =
              target.getBoundingClientRect().top +
              window.scrollY -
              80;


            window.scrollTo({
              top,
              behavior:
                reducedMotion
                  ? "auto"
                  : "smooth"
            });

          }
        );

      }
    );
  }


  /* =========================================================
     REVEAL ANIMATIONS
     ========================================================= */

  function setupReveal() {

    const elements =
      $$(".reveal");


    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {

      elements.forEach(
        element =>
          element.classList.add(
            "is-visible"
          )
      );

      return;
    }


    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                !entry.isIntersecting
              ) {
                return;
              }


              entry.target.classList.add(
                "is-visible"
              );


              observer.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -8% 0px"
        }
      );


    elements.forEach(
      element =>
        observer.observe(element)
    );
  }


  /* =========================================================
     ACTIVE SECTION
     ========================================================= */

  function setupActiveSection() {

    const links =
      $$(".nav-link, .mobile-nav-link");

    const sections =
      $$("[data-section-id]");


    if (
      !("IntersectionObserver" in window)
    ) {
      return;
    }


    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                !entry.isIntersecting
              ) {
                return;
              }


              const id =
                entry.target.dataset.sectionId;


              links.forEach(
                link =>
                  link.classList.toggle(
                    "active",
                    link.dataset.section === id
                  )
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
      section =>
        observer.observe(section)
    );
  }


  /* =========================================================
     CURSOR GLOW
     ========================================================= */

  function setupCursorGlow() {

    /*
      Touch cihazlarda cursor efekti yok.
      Ayrıca gerçek mouse cursor'ı asla
      display:none veya cursor:none yapmıyoruz.
    */

    if (
      isTouch ||
      reducedMotion
    ) {
      return;
    }


    const glow =
      $(".cursor-glow");

    if (!glow) {
      return;
    }


    document.body.classList.add(
      "cursor-ready"
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
      event => {

        targetX =
          event.clientX;

        targetY =
          event.clientY;

      },
      {
        passive: true
      }
    );


    function frame() {

      currentX +=
        (targetX - currentX) *
        0.13;

      currentY +=
        (targetY - currentY) *
        0.13;


      glow.style.left =
        `${currentX}px`;

      glow.style.top =
        `${currentY}px`;


      requestAnimationFrame(frame);
    }


    requestAnimationFrame(frame);
  }


  /* =========================================================
     MAGNETIC BUTTONS
     ========================================================= */

  function setupMagneticButtons() {

    if (
      isTouch ||
      reducedMotion
    ) {
      return;
    }


    $$(".magnetic").forEach(
      element => {

        element.addEventListener(
          "pointermove",
          event => {

            const rect =
              element.getBoundingClientRect();


            const x =
              event.clientX -
              rect.left -
              rect.width / 2;

            const y =
              event.clientY -
              rect.top -
              rect.height / 2;


            element.style.transform =
              `translate(
                ${x * 0.12}px,
                ${y * 0.12}px
              )`;
          }
        );


        element.addEventListener(
          "pointerleave",
          () => {

            element.style.transform = "";
          }
        );

      }
    );
  }


  /* =========================================================
     TILT CARDS
     ========================================================= */

  function setupTiltCards() {

    if (
      isTouch ||
      reducedMotion
    ) {
      return;
    }


    $$(".tilt-card").forEach(
      card => {

        card.addEventListener(
          "pointermove",
          event => {

            const rect =
              card.getBoundingClientRect();


            const px =
              (event.clientX - rect.left) /
              rect.width;

            const py =
              (event.clientY - rect.top) /
              rect.height;


            const rotateY =
              (px - 0.5) * 5;

            const rotateX =
              (py - 0.5) * -5;


            card.style.transform =
              `perspective(900px)
               rotateX(${rotateX}deg)
               rotateY(${rotateY}deg)
               translateY(-2px)`;
          }
        );


        card.addEventListener(
          "pointerleave",
          () => {

            card.style.transform = "";
          }
        );

      }
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


    const decorative =
      $$(
        ".hero-orbit, .hero-glow, .hero-fragment",
        hero
      );


    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;


    window.addEventListener(
      "pointermove",
      event => {

        const rect =
          hero.getBoundingClientRect();


        if (
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        ) {
          return;
        }


        targetX =
          (event.clientX /
            window.innerWidth -
            0.5) *
          2;

        targetY =
          (event.clientY /
            window.innerHeight -
            0.5) *
          2;
      },
      {
        passive: true
      }
    );


    function frame() {

      currentX +=
        (targetX - currentX) *
        0.04;

      currentY +=
        (targetY - currentY) *
        0.04;


      decorative.forEach(
        (element, index) => {

          const strength =
            ((index % 3) + 1) *
            4;


          element.style.translate =
            `${currentX * strength}px ${
              currentY * strength
            }px`;
        }
      );


      requestAnimationFrame(frame);
    }


    requestAnimationFrame(frame);
  }


  /* =========================================================
     COUNTDOWN
     ========================================================= */

  function getEventTarget() {

    /*
      15 Eylül 2026 00:00
      Europe/Istanbul / UTC+03:00
    */

    return new Date(
      "2026-09-15T00:00:00+03:00"
    );
  }


  function setupCountdown() {

    const countdown =
      $("#countdown");

    const started =
      $("#countdownStarted");

    const shell =
      $("#countdownShell");


    if (
      !countdown ||
      !started ||
      !shell
    ) {
      return;
    }


    const target =
      getEventTarget();


    const units = [
      "days",
      "hours",
      "minutes",
      "seconds"
    ];


    const values =
      Object.fromEntries(

        units.map(
          unit => [
            unit,
            $(
              `[data-unit="${unit}"] [data-value]`,
              countdown
            )
          ]
        )

      );


    function tick() {

      const diff =
        target.getTime() -
        Date.now();


      if (diff <= 0) {

        countdown.hidden = true;
        started.hidden = false;

        shell.classList.add(
          "event-live"
        );


        if (
          state.countdownInterval
        ) {

          clearInterval(
            state.countdownInterval
          );
        }


        return;
      }


      const totalSeconds =
        Math.floor(diff / 1000);


      const next = {

        days:
          Math.floor(
            totalSeconds / 86400
          ),

        hours:
          Math.floor(
            (totalSeconds % 86400) /
              3600
          ),

        minutes:
          Math.floor(
            (totalSeconds % 3600) /
              60
          ),

        seconds:
          totalSeconds % 60
      };


      units.forEach(
        unit => {

          const text =
            String(
              next[unit]
            ).padStart(2, "0");


          const node =
            values[unit];


          if (
            !node ||
            node.textContent === text
          ) {
            return;
          }


          node.textContent =
            text;


          node.classList.remove(
            "bump"
          );


          void node.offsetWidth;


          if (!reducedMotion) {

            node.classList.add(
              "bump"
            );
          }

        }
      );
    }


    tick();


    state.countdownInterval =
      window.setInterval(
        tick,
        1000
      );
  }


  /* =========================================================
     KEYBOARD
     ========================================================= */

  function setupKeyboard() {

    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key !== "Escape"
        ) {
          return;
        }


        const nav =
          $("#mobileNav");

        const toggle =
          $("#menuToggle");


        if (
          nav?.classList.contains(
            "is-open"
          )
        ) {

          toggle?.click();
        }
      }
    );
  }


  /* =========================================================
     INIT
     ========================================================= */

  function init() {

    setupLoader();

    initLanguage();

    setupHeader();

    setupMobileNav();

    setupSmoothNavigation();

    setupReveal();

    setupActiveSection();

    setupCursorGlow();

    setupMagneticButtons();

    setupTiltCards();

    setupHeroParallax();

    setupCountdown();

    setupKeyboard();

  }


  init();

})();
