// language.js — bilingual TR/EN translation system
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
    visitIg: "Instagram'da Ziyaret Et",
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
    close: "Kapat"
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
    visitIg: "Visit on Instagram",
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
    close: "Close"
  }
};

const LANGUAGE = {
  current: localStorage.getItem('akay-lang') || 'tr',

  init() {
    this.apply(this.current, false);
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === this.current);
      btn.addEventListener('click', () => this.switchTo(btn.dataset.langBtn));
    });
  },

  switchTo(lang) {
    if (lang === this.current) return;
    this.current = lang;
    localStorage.setItem('akay-lang', lang);
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });
    this.apply(lang, true);
  },

  apply(lang, animate) {
    const dict = translations[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
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

document.addEventListener('DOMContentLoaded', () => LANGUAGE.init());
// particles.js — lightweight layered canvas particle engine
(() => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 760;

  let width, height, dpr;
  let particles = [];
  let running = true;

  const COLORS = ['rgba(255,255,255,', 'rgba(192,132,252,', 'rgba(233,213,255,'];

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
    const base = isMobile ? 40 : 110;
    particles = [];
    // Layer 1: distant stars
    for (let i = 0; i < base; i++) {
      particles.push({
        x: Math.random() * width, y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3, speed: 0.02 + Math.random() * 0.03,
        opacity: 0.15, color: COLORS[0], drift: 0
      });
    }
    // Layer 2: floating dust
    for (let i = 0; i < base * 0.5; i++) {
      particles.push({
        x: Math.random() * width, y: Math.random() * height,
        r: Math.random() * 1.8 + 0.6, speed: 0.06 + Math.random() * 0.08,
        opacity: 0.3, color: COLORS[1], drift: Math.random() * 0.4 - 0.2
      });
    }
    // Layer 3: foreground glow particles
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
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.y -= p.speed;
      p.x += p.drift * 0.05;
      if (p.y < -5) { p.y = height + 5; p.x = Math.random() * width; }
      if (p.x < -5) p.x = width + 5;
      if (p.x > width + 5) p.x = -5;
      ctx.beginPath();
      ctx.fillStyle = p.color + p.opacity + ')';
      ctx.shadowBlur = p.r * 3;
      ctx.shadowColor = p.color + '0.5)';
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
  });

  resize();
  if (!reduceMotion) {
    requestAnimationFrame(draw);
  } else {
    draw();
    running = false;
  }
})();
// cursor.js — custom cursor with glow ring + dot, mouse light
(() => {
  if (window.matchMedia('(hover: none)').matches) return;

  const ring = document.querySelector('.cursor-ring');
  const dot = document.querySelector('.cursor-dot');
  const light = document.querySelector('.mouse-light');
  if (!ring || !dot) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    if (light) {
      light.style.left = mx + 'px';
      light.style.top = my + 'px';
    }
  }, { passive: true });

  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  const hoverTargets = 'a, button, .glass-card, input, textarea, .tilt-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.add('hovering');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.remove('hovering');
  });
  document.addEventListener('mousedown', () => ring.classList.add('clicking'));
  document.addEventListener('mouseup', () => ring.classList.remove('clicking'));
})();
// scroll.js — nav scroll state + intersection observer reveals
(() => {
  const nav = document.querySelector('.nav');

  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
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

  // Staggered line-by-line reveal groups
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

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('mobile-open')));
  }
})();
// main.js — loader sequence, hero reveal, tilt cards, modal, form validation, ripple, parallax
document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Loader sequence ---------- */
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
    for (let i = 0; i < 26; i++) {
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
    document.querySelectorAll('.hero-title .char').forEach(c => {
      c.style.transition = `opacity 700ms var(--ease), transform 700ms var(--ease), filter 700ms var(--ease)`;
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
      c.style.filter = 'blur(0)';
    });
    const sub = document.querySelector('.hero-subtitle');
    const ctas = document.querySelector('.hero-ctas');
    setTimeout(() => { sub.style.transition = 'opacity 900ms var(--ease)'; sub.style.opacity = 1; }, 500);
    setTimeout(() => { ctas.style.transition = 'opacity 900ms var(--ease)'; ctas.style.opacity = 1; }, 800);
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
    }, 5200);
  }

  /* ---------- Ripple + Star border angle ---------- */
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
      setTimeout(() => ripple.remove(), 700);
    });
  });

  /* ---------- Tilt cards (committees) ---------- */
  document.querySelectorAll('.tilt-card').forEach(card => {
    const inner = card.querySelector('.tilt-card-inner');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotX = (-py * 10).toFixed(2);
      const rotY = (px * 10).toFixed(2);
      inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
    });
  });

  /* ---------- Glare hover (mission/vision/app/sponsor cards) ---------- */
  document.querySelectorAll('.glare-hover').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(168,85,247,0.16), var(--bg-card) 60%)`;
    });
    card.addEventListener('mouseleave', () => { card.style.background = 'var(--bg-card)'; });
  });

  /* ---------- Committee detail modal ---------- */
  const modal = document.getElementById('committee-modal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalBody = modal.querySelector('.modal-body');

  document.querySelectorAll('[data-committee]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.committee;
      modalTitle.textContent = LANGUAGE.t(`${key}Title`);
      modalBody.textContent = LANGUAGE.t(`${key}Detail`);
      modal.classList.add('active');
    });
  });
  modal.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('active'); });

  /* ---------- Form validation ---------- */
  const form = document.getElementById('contact-form');
  if (form) {
    const successBox = document.getElementById('form-success');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[data-required]').forEach(field => {
        const errorEl = field.parentElement.querySelector('.form-error');
        const value = field.value.trim();
        let ok = value.length > 0;
        if (field.type === 'email' && ok) {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          if (!ok && errorEl) errorEl.textContent = LANGUAGE.t('errEmail');
        } else if (!ok && errorEl) {
          errorEl.textContent = LANGUAGE.t('errRequired');
        }
        if (errorEl) errorEl.classList.toggle('show', !ok);
        field.style.borderColor = ok ? 'var(--border-soft)' : '#f0abfc';
        if (!ok) valid = false;
      });
      if (valid) {
        form.style.display = 'none';
        successBox.classList.add('show');
      }
    });
  }

  /* ---------- Parallax on hero (subtle mouse reactive) ---------- */
  if (!reduceMotion) {
    const moon = document.querySelector('.hero-moon');
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      if (moon) moon.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive: true });
  }
});
