// script.js — optimize edilmiş + hatalar düzeltildi + interaktivite artırıldı
// language, particles, cursor, scroll, menu, main

(function() {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(hover: none)').matches;

  /* ============================================================
     1. LANGUAGE SYSTEM
     ============================================================ */
  const translations = {
    tr: {
      navHome: "Ana Sayfa", navAbout: "Hakkımızda", navMission: "Misyon", navVision: "Vizyon",
      navCommittees: "Komiteler", navSponsors: "Sponsorlar", navApply: "Başvurular", navContact: "İletişim",
      heroTitle: "AKAY ÇALIŞTAYI",
      heroSubtitle: "Geleceğin Liderlerini Bir Araya Getiriyoruz",
      heroSubtitleFull: "Eleştirel düşünceyi, liderliği ve etkili iletişimi genç zihinlerle buluşturan akademik bir deneyim.",
      heroApply: "Başvur", heroInstagram: "Instagram", scrollHint: "Aşağı Kaydır",
      aboutEyebrow: "Hakkımızda", aboutTitle: "AKAY Çalıştayı",
      aboutP1: "AKAY Çalıştayı, akademik gelişimi ve eleştirel düşünceyi merkezine alan bir gençlik topluluğudur.",
      aboutP2: "Katılımcılarımız; liderlik, etkili iletişim ve topluluk önünde konuşma becerilerini gerçek tartışma ortamlarında geliştirir.",
      aboutP3: "Her komite, güncel dünya meselelerini analitik bir bakış açısıyla ele alarak katılımcıları geleceğin karar vericileri olarak yetiştirir.",
      missionEyebrow: "Misyon", missionTitle: "Misyonumuz",
      missionText: "AKAY Çalıştayı olarak misyonumuz, genç bireylerin eleştirel düşünme, etkili iletişim ve liderlik becerilerini akademik bir zeminde geliştirmelerine olanak tanımaktır. Katılımcılarımızın güncel dünya meselelerini derinlemesine analiz edebilen, farklı bakış açılarını saygıyla değerlendirebilen ve topluluk önünde özgüvenle konuşabilen bireyler olarak yetişmelerini hedefliyoruz. Bu doğrultuda, işbirliğine dayalı bir öğrenme ortamı sunarak gençlerin entelektüel farkındalıklarını artırmayı ve geleceğin sorumluluk sahibi liderlerini yetiştirmeyi amaçlıyoruz.",
      visionEyebrow: "Vizyon", visionTitle: "Vizyonumuz",
      visionText: "Vizyonumuz, akademik mükemmelliği ilham verici bir deneyimle birleştiren, bölgesinde öncü bir gençlik çalıştayı olmaktır. Genç bireylerin fikirlerini özgürce ifade edebildiği, entelektüel merakın teşvik edildiği ve liderlik potansiyelinin ortaya çıkarıldığı sürdürülebilir bir platform inşa etmeyi hedefliyoruz. AKAY Çalıştayı'nın, katılımcılarının hayatlarında kalıcı bir iz bırakan, onları geleceğin karar alma süreçlerine hazırlayan saygın bir kurum haline gelmesini öngörüyoruz.",
      commEyebrow: "Komiteler", commTitle: "Geleceği Birlikte Tartışıyoruz",
      commDesc: "Her komite farklı bir küresel meseleye odaklanarak katılımcılarımızın analitik düşünme, iletişim ve takım çalışması becerilerini geliştirmesini sağlar.",
      detailBtn: "Detayları Gör",
      c1Title: "Diplomasi Komitesi", c1Desc: "Uluslararası ilişkileri ve müzakere becerilerini gerçekçi senaryolarla keşfeden komite.",
      c1Detail: "Diplomasi Komitesi katılımcıları, uluslararası kriz senaryoları üzerinden müzakere, ikna ve stratejik düşünme becerilerini geliştirir. Gerçek diplomatik süreçleri simüle ederek küresel meseleleri çok yönlü bir bakış açısıyla analiz ederler.",
      c2Title: "Ekonomi Komitesi", c2Desc: "Küresel ekonomik politikaları analiz eden ve çözüm önerileri geliştiren komite.",
      c2Detail: "Ekonomi Komitesi, güncel makroekonomik sorunları ele alarak katılımcıların veri okuryazarlığını ve politika geliştirme becerilerini güçlendirir. Tartışmalar, sürdürülebilir ve adil ekonomik modeller üzerine yoğunlaşır.",
      c3Title: "Medya ve İletişim Komitesi", c3Desc: "Dijital çağda etkili iletişim stratejilerini ve medya okuryazarlığını inceleyen komite.",
      c3Detail: "Medya ve İletişim Komitesi, dezenformasyonla mücadele, etkili anlatı kurma ve kamuoyu oluşturma dinamiklerini inceler. Katılımcılar, ikna edici ve etik iletişim stratejileri geliştirmeyi öğrenir.",
      applyTitle: "Sen de Aramıza Katıl",
      applyDesc: "AKAY Çalıştayı, eleştirel düşünen, meraklı ve liderlik vasfı taşıyan gençleri arıyor. Yolculuğa katılmak için başvurunu şimdi yap.",
      teamAppTitle: "Ekip Başvurusu", teamAppDesc: "Organizasyon ekibimizin bir parçası olarak çalıştayın perde arkasında yer al.",
      academyAppTitle: "Akademi Başvurusu", academyAppDesc: "Komitelere katılımcı olarak katıl ve akademik yolculuğuna başla.",
      applyNow: "Başvur",
      sponsorEyebrow: "Sponsorlar", sponsorTitle: "Bizi Destekleyenler",
      s1Desc: "Eğitim teknolojileri alanında yenilikçi çözümler sunan kurumsal destekçimiz.",
      s2Desc: "Yaratıcı tasarım ve marka deneyimleri üreten stratejik iş ortağımız.",
      visitIg: "Instagram'da Ziyaret Et", visitWebsite: "Web Sitesi",
      s3Desc: "Teknoloji alanında kurumsal destekçimiz.",
      contactEyebrow: "İletişim", contactTitle: "Bizimle İletişime Geç",
      contactDesc: "Sorularınız mı var? AKAY topluluğunun bir parçası olmak için bize ulaşın.",
      formName: "Ad Soyad", formEmail: "Email", formSubject: "Konu", formMessage: "Mesaj", formSend: "Gönder",
      errRequired: "Bu alan zorunludur.", errEmail: "Geçerli bir e-posta adresi girin.",
      successTitle: "Mesajınız İçin Teşekkürler!",
      successDesc: "Formumuz şu anda demo amaçlıdır. Bizimle hızlıca iletişime geçmek için Instagram'ı kullanabilirsiniz.",
      igName: "AKAY Çalıştayı", igHandle: "Resmi Instagram",
      wa1Name: "Zeynep Beril Köse", wa1Role: "Organizasyon Ekibi",
      wa2Name: "Eylül Ulubulut", wa2Role: "Organizasyon Ekibi",
      waBtn: "WhatsApp",
      footerDesc: "Genç liderleri, eleştirel düşünürleri ve iletişimcileri bir araya getiren akademik bir çalıştay.",
      footerNav: "Navigasyon", footerApps: "Başvurular", footerSocial: "Sosyal",
      copyright: "Tüm Hakları Saklıdır.",
      close: "Kapat",
      menuOpen: "Menü", menuClose: "Kapat"
    },
    en: {
      navHome: "Home", navAbout: "About", navMission: "Mission", navVision: "Vision",
      navCommittees: "Committees", navSponsors: "Sponsors", navApply: "Applications", navContact: "Contact",
      heroTitle: "AKAY WORKSHOP",
      heroSubtitle: "Bringing Together the Leaders of Tomorrow",
      heroSubtitleFull: "An academic experience that unites critical thinking, leadership, and effective communication with young minds.",
      heroApply: "Apply", heroInstagram: "Instagram", scrollHint: "Scroll Down",
      aboutEyebrow: "About Us", aboutTitle: "AKAY Workshop",
      aboutP1: "AKAY Workshop is a youth community centered on academic growth and critical thinking.",
      aboutP2: "Our participants develop leadership, effective communication, and public speaking skills in real discussion environments.",
      aboutP3: "Each committee approaches current global issues analytically, shaping participants into the decision-makers of tomorrow.",
      missionEyebrow: "Mission", missionTitle: "Our Mission",
      missionText: "At AKAY Workshop, our mission is to enable young individuals to develop critical thinking, effective communication, and leadership skills on an academic foundation. We aim to nurture participants who can deeply analyze current global issues, respectfully evaluate differing perspectives, and speak confidently in public. Through a collaborative learning environment, we strive to raise intellectual awareness and cultivate the responsible leaders of the future.",
      visionEyebrow: "Vision", visionTitle: "Our Vision",
      visionText: "Our vision is to become a leading youth workshop in the region, combining academic excellence with an inspiring experience. We aim to build a sustainable platform where young individuals can freely express their ideas, where intellectual curiosity is encouraged, and where leadership potential is unlocked. We envision AKAY Workshop as a respected institution that leaves a lasting mark on its participants' lives and prepares them for the decision-making processes of the future.",
      commEyebrow: "Committees", commTitle: "Discussing the Future Together",
      commDesc: "Each committee focuses on a different global issue, helping participants build analytical thinking, communication, and teamwork skills.",
      detailBtn: "View Details",
      c1Title: "Diplomacy Committee", c1Desc: "Explores international relations and negotiation skills through realistic scenarios.",
      c1Detail: "Diplomacy Committee participants build negotiation, persuasion, and strategic thinking skills through international crisis scenarios. By simulating real diplomatic processes, they analyze global issues from multiple perspectives.",
      c2Title: "Economics Committee", c2Desc: "Analyzes global economic policies and develops proposed solutions.",
      c2Detail: "Economics Committee strengthens participants' data literacy and policy-development skills by addressing current macroeconomic issues, with discussions focused on sustainable and equitable economic models.",
      c3Title: "Media & Communication Committee", c3Desc: "Examines effective communication strategies and media literacy in the digital age.",
      c3Detail: "Media & Communication Committee studies combating disinformation, crafting effective narratives, and the dynamics of shaping public opinion, teaching participants persuasive and ethical communication strategies.",
      applyTitle: "Join Us",
      applyDesc: "AKAY Workshop is looking for curious, critically-minded young people with leadership qualities. Apply now to join the journey.",
      teamAppTitle: "Team Application", teamAppDesc: "Join our organizing team and help shape the workshop behind the scenes.",
      academyAppTitle: "Academy Application", academyAppDesc: "Join a committee as a delegate and begin your academic journey.",
      applyNow: "Apply",
      sponsorEyebrow: "Sponsors", sponsorTitle: "Our Supporters",
      s1Desc: "Our corporate supporter delivering innovative solutions in education technology.",
      s2Desc: "Our strategic partner producing creative design and brand experiences.",
      visitIg: "Visit on Instagram", visitWebsite: "Website",
      s3Desc: "Our corporate supporter in the technology sector.",
      contactEyebrow: "Contact", contactTitle: "Get In Touch With Us",
      contactDesc: "Have questions? Reach out to become part of the AKAY community.",
      formName: "Full Name", formEmail: "Email", formSubject: "Subject", formMessage: "Message", formSend: "Send",
      errRequired: "This field is required.", errEmail: "Please enter a valid email address.",
      successTitle: "Thank You for Your Message!",
      successDesc: "This form is currently for demo purposes. Reach us quickly on Instagram instead.",
      igName: "AKAY Workshop", igHandle: "Official Instagram",
      wa1Name: "Zeynep Beril Köse", wa1Role: "Organizing Team",
      wa2Name: "Eylül Ulubulut", wa2Role: "Organizing Team",
      waBtn: "WhatsApp",
      footerDesc: "An academic workshop bringing together young leaders, critical thinkers, and communicators.",
      footerNav: "Navigation", footerApps: "Applications", footerSocial: "Social",
      copyright: "All Rights Reserved.",
      close: "Close",
      menuOpen: "Menu", menuClose: "Close"
    }
  };

  const LANGUAGE = {
    current: localStorage.getItem('akay-lang') || 'tr',
    langBtns: null,
    i18nEls: null,

    init() {
      this.langBtns = document.querySelectorAll('[data-lang-btn]');
      this.i18nEls = document.querySelectorAll('[data-i18n]');
      this.apply(this.current, false);
      this.langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.langBtn === this.current);
        btn.addEventListener('click', () => this.switchTo(btn.dataset.langBtn));
      });
    },

    switchTo(lang) {
      if (lang === this.current) return;
      this.current = lang;
      localStorage.setItem('akay-lang', lang);
      this.langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.langBtn === lang);
      });
      this.apply(lang, true);
    },

    apply(lang, animate) {
      const dict = translations[lang];
      document.documentElement.lang = lang;
      this.i18nEls.forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] === undefined) return;
        if (animate) {
          el.style.transition = 'opacity 200ms ease';
          el.style.opacity = 0;
          setTimeout(() => {
            el.textContent = dict[key];
            el.style.opacity = 1;
          }, 200);
        } else {
          el.textContent = dict[key];
        }
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key]) el.setAttribute('placeholder', dict[key]);
      });
    },

    t(key) { return translations[this.current][key] || ''; }
  };

  /* ============================================================
     2. UTILITY: Throttle
     ============================================================ */
  function throttle(fn, delay) {
    let last = 0;
    let rafId = null;
    let lastArgs = null;
    return function(...args) {
      lastArgs = args;
      const now = Date.now();
      if (now - last >= delay) {
        last = now;
        fn.apply(this, args);
      } else if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          const remaining = delay - (Date.now() - last);
          if (remaining <= 0) {
            last = Date.now();
            fn.apply(this, lastArgs);
          }
        });
      }
    };
  }

  /* ============================================================
     3. PARTICLES — optimize edilmiş
     ============================================================ */
  (() => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, dpr;
    let particles = [];
    let running = true;

    const COLORS = ['rgba(255,255,255,', 'rgba(192,132,252,', 'rgba(233,213,255,'];
    let frameCount = 0;
    const SKIP = 2;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    }

    function buildParticles() {
      const base = isMobile ? 16 : 44;
      particles = [];
      for (let i = 0; i < base; i++) {
        particles.push({
          x: Math.random() * width, y: Math.random() * height,
          r: Math.random() * 1.2 + 0.3, speed: 0.02 + Math.random() * 0.03,
          opacity: 0.15, color: COLORS[0], drift: 0
        });
      }
      for (let i = 0; i < base * 0.5; i++) {
        particles.push({
          x: Math.random() * width, y: Math.random() * height,
          r: Math.random() * 1.8 + 0.6, speed: 0.06 + Math.random() * 0.08,
          opacity: 0.3, color: COLORS[1], drift: Math.random() * 0.4 - 0.2
        });
      }
      for (let i = 0; i < base * 0.25; i++) {
        particles.push({
          x: Math.random() * width, y: Math.random() * height,
          r: Math.random() * 2.4 + 1, speed: 0.12 + Math.random() * 0.12,
          opacity: 0.5, color: COLORS[2], drift: Math.random() * 0.6 - 0.3
        });
      }
    }

    function draw() {
      if (!running) return;
      frameCount++;
      if (frameCount % (SKIP + 1) !== 0) {
        requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift * 0.05;
        if (p.y < -5) { p.y = height + 5; p.x = Math.random() * width; }
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;
        ctx.beginPath();
        ctx.fillStyle = p.color + p.opacity + ')';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }

    document.addEventListener('visibilitychange', () => {
      running = !document.hidden;
      if (running) requestAnimationFrame(draw);
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    }, { passive: true });

    resize();
    if (!reduceMotion) {
      requestAnimationFrame(draw);
    }
  })();

  /* ============================================================
     4. CURSOR — optimize edilmiş (throttle)
     ============================================================ */
  (() => {
    if (isMobile) return;

    const ring = document.querySelector('.cursor-ring');
    const dot = document.querySelector('.cursor-dot');
    const light = document.querySelector('.mouse-light');
    if (!ring || !dot) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    const handleMove = throttle((e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
      if (light) {
        light.style.left = mx + 'px';
        light.style.top = my + 'px';
      }
    }, 16);

    window.addEventListener('mousemove', handleMove, { passive: true });

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    const hoverTargets = 'a, button, .glass-card, input, textarea, .tilt-card, .sm-toggle-header';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverTargets)) ring.classList.add('hovering');
    }, { passive: true });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverTargets)) ring.classList.remove('hovering');
    }, { passive: true });
    document.addEventListener('mousedown', () => ring.classList.add('clicking'));
    document.addEventListener('mouseup', () => ring.classList.remove('clicking'));
  })();

  /* ============================================================
     5. SCROLL — nav scroll + intersection observer reveals
     ============================================================ */
  (() => {
    const nav = document.querySelector('.nav');
    const NAV_THRESHOLD = 60;

    function onScroll() {
      if (window.scrollY > NAV_THRESHOLD) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    document.querySelectorAll('[data-reveal-group]').forEach(group => {
      const lines = group.querySelectorAll('.reveal-line');
      const groupObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            lines.forEach((line, i) => {
              setTimeout(() => line.classList.add('visible'), i * 120);
            });
            groupObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      groupObserver.observe(group);
    });
  })();

  /* ============================================================
     6. STAGGERED MENU — header içindeki toggle ile
     ============================================================ */
  (() => {
    const wrapper = document.getElementById('staggered-menu');
    const toggle = document.getElementById('sm-toggle-header');
    const scrim = document.getElementById('sm-scrim');
    const panel = document.getElementById('sm-panel');
    if (!wrapper || !toggle) return;

    let open = false;

    function openMenu() {
      open = true;
      wrapper.classList.add('sm-open');
      toggle.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      open = false;
      wrapper.classList.remove('sm-open');
      toggle.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => (open ? closeMenu() : openMenu()));
    scrim.addEventListener('click', closeMenu);
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) closeMenu(); });
  })();

  /* ============================================================
     7. LOADER + HERO + TILT + RIPPLE + GLARE
     ============================================================ */
  (() => {
    /* --- Loader sequence --- */
    const loader = document.getElementById('loader');
    const loaderScene = document.querySelector('.loader-scene');
    const loaderTitle = document.querySelector('.loader-title');

    function buildLoaderTitle() {
      const text = 'AKAY ÇALIŞTAYI';
      loaderTitle.innerHTML = '';
      [...text].forEach((ch, i) => {
        const span = document.createElement('span');
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.animationDelay = `${1.4 + i * 0.06}s`;
        loaderTitle.appendChild(span);
      });
    }

    function spawnLoaderParticles() {
      for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.className = 'loader-particle';
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random() * 160;
        p.style.setProperty('--x', `${Math.cos(angle) * dist}px`);
        p.style.left = `calc(50% + ${Math.cos(angle) * dist}px)`;
        p.style.top = `calc(50% + ${Math.sin(angle) * dist}px)`;
        p.style.animationDelay = `${Math.random() * 1.2}s`;
        loaderScene.appendChild(p);
      }
    }

    function initHeroChars() {
      const heroTitleEl = document.querySelector('.hero-title');
      if (!heroTitleEl) return;
      const text = heroTitleEl.textContent.trim();
      heroTitleEl.innerHTML = '';
      heroTitleEl.setAttribute('data-i18n', 'heroTitle');
      [...text].forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.transitionDelay = `${i * 0.035}s`;
        heroTitleEl.appendChild(span);
      });
    }

    function playHero() {
      // 1. Eyebrow animasyonu
      const eyebrow = document.querySelector('.hero-eyebrow');
      if (eyebrow) {
        setTimeout(() => eyebrow.classList.add('visible'), 200);
      }

      // 2. Başlık karakterleri — 3D flip in
      document.querySelectorAll('.hero-title .char').forEach(c => {
        c.classList.add('visible');
      });

      // 3. Alt başlık + CTAs
      const sub = document.querySelector('.hero-subtitle');
      const ctas = document.querySelector('.hero-ctas');
      setTimeout(() => { sub.style.transition = 'opacity 900ms var(--ease)'; sub.style.opacity = 1; }, 800);
      setTimeout(() => { ctas.style.transition = 'opacity 900ms var(--ease)'; ctas.style.opacity = 1; }, 1200);
    }

    initHeroChars();

    if (reduceMotion) {
      loader.classList.add('hidden');
      playHero();
    } else {
      buildLoaderTitle();
      spawnLoaderParticles();
      setTimeout(() => {
        loader.classList.add('hidden');
        playHero();
        loader.style.display = 'none';
        loader.remove();
      }, 5200);
    }

    /* --- Ripple (optimize edilmiş) --- */
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        btn.appendChild(ripple);
        setTimeout(() => {
          if (ripple.parentNode) ripple.remove();
        }, 700);
      });
    });

    /* --- 3D Hero Logo (fare ile kontrol) --- */
    if (!isMobile) {
      const logoWrapper = document.getElementById('hero3dLogo');
      if (logoWrapper) {
        const heroLogo = logoWrapper.querySelector('.hero-3d-logo');
        if (heroLogo) {
          // Otomatik dönmeyi durdur, fare ile kontrol et
          heroLogo.style.animation = 'none';
          let logoRy = 0;
          const handleLogoMove = throttle((e) => {
            const rect = logoWrapper.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            logoRy += px * 4;
            const tiltX = (e.clientY - rect.top) / rect.height - 0.5;
            heroLogo.style.transform = `rotateY(${logoRy}deg) rotateX(${(-tiltX * 8).toFixed(1)}deg)`;
          }, 16);
          logoWrapper.addEventListener('mousemove', handleLogoMove, { passive: true });
          logoWrapper.addEventListener('mouseleave', () => {
            // Fare çıkınca yavaşça geri dön
            heroLogo.style.transition = 'transform 1.5s cubic-bezier(0.16,1,0.3,1)';
            heroLogo.style.transform = `rotateY(${Math.round(logoRy / 90) * 90}deg) rotateX(5deg)`;
            setTimeout(() => { heroLogo.style.transition = ''; }, 1600);
          });
        }
      }
    }

    /* --- Glare hover (throttle edilmiş) --- */
    document.querySelectorAll('.glare-hover').forEach(card => {
      const glareHandler = throttle((e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(168,85,247,0.16), var(--bg-card) 60%)`;
      }, 32);
      card.addEventListener('mousemove', glareHandler, { passive: true });
      card.addEventListener('mouseleave', () => { card.style.background = 'var(--bg-card)'; });
    });

    /* --- Tilt-3d cards (hafifletilmiş, mobilde kapalı) --- */
    if (!isMobile) {
      document.querySelectorAll('.tilt-3d').forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
        const tiltHandler = throttle((e) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          const rotX = (-py * 5).toFixed(2);
          const rotY = (px * 5).toFixed(2);
          card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px) scale(1.015)`;
        }, 32);
        card.addEventListener('mousemove', tiltHandler, { passive: true });
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
      });
    }

    /* --- Tilt cards (committees) — hafifletilmiş --- */
    if (!isMobile) {
      document.querySelectorAll('.tilt-card').forEach(card => {
        const inner = card.querySelector('.tilt-card-inner');
        if (!inner) return;
        const tiltHandler = throttle((e) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          const rotX = (-py * 6).toFixed(2);
          const rotY = (px * 6).toFixed(2);
          inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
        }, 32);
        card.addEventListener('mousemove', tiltHandler, { passive: true });
        card.addEventListener('mouseleave', () => {
          inner.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
        });
      });
    }

  })();

  /* ============================================================
     8. LANGUAGE INIT (en son)
     ============================================================ */
  LANGUAGE.init();

})();
