(() => {
  'use strict';

  const translations = {
    tr: {
      nav: { home: 'Ana Sayfa', about: 'Hakkımızda', event: 'Etkinlik', committees: 'Komiteler', schedule: 'Akış', sponsors: 'Sponsorluk', contact: 'İletişim' },
      hero: { title: 'Perspektif<br><em>ve</em><br>Aydınlanma', overline: 'Fikrin sınırlarını genişletmek için', description: 'Genç zihinlerin dünyayı yeniden okumak, anlamlandırmak ve dönüştürmek için bir araya geldiği alan.', cta: 'Çalıştayı keşfet', dateLabel: 'Eylül', scroll: 'Aşağı kaydır' },
      about: { eyebrow: 'Bir duruş', title: 'Düşünce, ancak<br><em>paylaşıldığında</em> büyür.', missionLabel: 'Misyon', missionTitle: 'Merak etmek.<br>İfade etmek.<br><em>Bağ kurmak.</em>', mission: 'Akay Çalıştayı olarak misyonumuz; gençlerin hızla gelişen ve değişen dünyaya dair farkındalıklarını artırırken, onlara fikirlerini özgürce ifade edebilecekleri, güçlü bir bilgi paylaşım alanı sunmaktır. Komite konularımız hem akademik anlamda geliştirici hem de sosyal bakımdan günlük hayatımızı doğrudan etkileyen konular olarak özenle seçilmiştir. Sosyal becerilerini aktif olarak kullanabilecekleri bu platformda, çok yönlü bakış açıları kazanmalarını hedefliyoruz.', visionLabel: 'Vizyon', visionTitle: 'Bilgiyi, geleceğe<br>taşıyan <em>zihinler.</em>', vision: 'Akay Perspektif ve Aydınlanma Çalıştayı ekibi olarak Türkiye’deki gençlerin Türk kültürü ve kökeni başta olmak üzere; dünya tarihini, farklı kültürleri ve dilleri anlayarak farkındalığı, entelektüel donanımı ve hitabet becerisi yüksek bireyler olmalarına katkı sağlayarak ülkemiz adına faydalı bireyler yetiştirmeyi amaçlıyoruz. Nihai hedefimiz, gençlerin edindikleri bilgi birikimi ve aydınlık zihinleriyle tüm insanlığa somut faydalar sunan bireyler olarak yetişmeleridir.', quote: 'Aydınlanma, tek bir cevaba ulaşmak değil; daha iyi sorular sormaya cesaret etmektir.' },
      event: { eyebrow: 'Buluşma noktası', title: 'Bir gün.<br><em>Çoklu perspektif.</em>', note: 'Bilginin, kültürün ve iletişimin kesiştiği; soruların cevaplardan daha değerli olduğu bir deneyim.', dateLabel: 'Tarih', locationLabel: 'Konum', feeLabel: 'Katılım', durationLabel: 'Süre', locationHint: 'Detaylar çok yakında', feeHint: 'Katılım koşulları', durationHint: 'Akış duyurusu' },
      countdown: { kicker: 'Başlamasına', timezone: 'İstanbul saatiyle', days: 'Gün', hours: 'Saat', minutes: 'Dakika', seconds: 'Saniye', started: 'Etkinlik Başladı' },
      schedule: { eyebrow: 'Akış / 01', title: 'Günün ritmi,<br><em>henüz yazılıyor.</em>', note: 'Program, fikirlerin ve karşılaşmaların ritmini taşıyacak şekilde yakında açıklanacaktır.', placeholderTitle: 'Program yakında açıklanacaktır.', placeholderDesc: 'Detaylı akış, oturumlar ve komite bilgileri burada yer alacak.', fields: 'Saat / Oturum / Açıklama / Salon / Komite / Konuşmacı veya moderatör', secondTitle: 'Perspektifler buluşuyor.', secondDesc: 'Çalıştayın yapısı ve içerikleri duyurulduğunda güncellenecek.' },
      committees: { eyebrow: 'Fikir odakları', title: 'Her soru,<br><em>bir komiteye açılır.</em>', placeholder: 'Komiteler ve gündem maddeleri yakında açıklanacaktır.', cta: 'Komiteleri keşfet' },
      sponsors: { eyebrow: 'Birlikte', title: 'Bu deneyime<br><em>omuz verenler.</em>', note: 'Fikirlerin çoğalması, onu mümkün kılan dayanışmayla başlar.', vertex: 'Artificial Intelligence sponsor', banna: 'IT sponsor', cord: 'Social media visuals & graphic design sponsor' },
      contact: { eyebrow: 'Bize ulaş', title: 'Bir sonraki<br><em>perspektif</em> sende.', teamLabel: 'Genel koordinasyon' },
      footer: { statement: 'Fikirlerin kesiştiği, perspektiflerin genişlediği bir alan.' },
      common: { readMore: 'Devamını oku', comingSoon: 'Yakında Açıklanacak' }
    },
    en: {
      nav: { home: 'Home', about: 'About', event: 'Event', committees: 'Committees', schedule: 'Flow', sponsors: 'Sponsors', contact: 'Contact' },
      hero: { title: 'Perspective<br><em>and</em><br>Enlightenment', overline: 'For expanding the limits of thought', description: 'A space where young minds gather to reread, make sense of, and reshape the world.', cta: 'Explore the workshop', dateLabel: 'September', scroll: 'Scroll to explore' },
      about: { eyebrow: 'A position', title: 'Thought grows<br><em>when shared.</em>', missionLabel: 'Mission', missionTitle: 'Be curious.<br>Speak freely.<br><em>Connect.</em>', mission: 'Akay Workshop exists to deepen young people’s awareness of a rapidly changing world while giving them a strong space to express ideas freely and share knowledge. Our committee themes are chosen with care: academically enriching, socially relevant, and connected to everyday life. Through this platform, we aim to help participants develop broad, many-sided perspectives.', visionLabel: 'Vision', visionTitle: 'Minds that<br>carry knowledge <em>forward.</em>', vision: 'The Akay Perspektif ve Aydınlanma Çalıştayı team aims to help young people in Türkiye understand Turkish culture and origins alongside world history, diverse cultures, and languages—becoming individuals with awareness, intellectual depth, and strong public speaking skills. Our ultimate goal is to nurture people who turn their knowledge and enlightened minds into tangible benefit for humanity.', quote: 'Enlightenment is not reaching a single answer; it is having the courage to ask better questions.' },
      event: { eyebrow: 'The meeting point', title: 'One day.<br><em>Many perspectives.</em>', note: 'An experience where knowledge, culture, and communication meet—and questions matter more than answers.', dateLabel: 'Date', locationLabel: 'Location', feeLabel: 'Participation', durationLabel: 'Duration', locationHint: 'Details coming soon', feeHint: 'Participation terms', durationHint: 'Flow announcement' },
      countdown: { kicker: 'Until it begins', timezone: 'Istanbul time', days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds', started: 'The Event Has Started' },
      schedule: { eyebrow: 'Flow / 01', title: 'The rhythm of the day<br><em>is still being written.</em>', note: 'The programme will be announced soon, shaped around the rhythm of ideas and encounters.', placeholderTitle: 'The full programme will be announced soon.', placeholderDesc: 'Detailed flow, sessions, and committee information will live here.', fields: 'Time / Session / Description / Room / Committee / Speaker or moderator', secondTitle: 'Perspectives meet.', secondDesc: 'This will be updated once the workshop structure and content are announced.' },
      committees: { eyebrow: 'Idea centres', title: 'Every question<br><em>opens a committee.</em>', placeholder: 'Committees and agenda topics will be announced soon.', cta: 'Explore committees' },
      sponsors: { eyebrow: 'Together', title: 'Those who<br><em>make this possible.</em>', note: 'Ideas multiply through the solidarity that gives them room to grow.', vertex: 'Artificial Intelligence sponsor', banna: 'IT sponsor', cord: 'Social media visuals & graphic design sponsor' },
      contact: { eyebrow: 'Reach out', title: 'The next<br><em>perspective</em> is yours.', teamLabel: 'General coordination' },
      footer: { statement: 'A space where ideas intersect and perspectives expand.' },
      common: { readMore: 'Read more', comingSoon: 'Coming Soon' }
    }
  };

  const state = { lang: localStorage.getItem('akay-language') || 'tr', raf: null, pointer: { x: 0, y: 0 }, target: { x: 0, y: 0 } };
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  function getPath(object, path) { return path.split('.').reduce((value, key) => value?.[key], object); }

  function applyLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('akay-language', lang);
    $$('[data-i18n]').forEach((element) => {
      const value = getPath(translations[lang], element.dataset.i18n);
      if (value !== undefined) element.innerHTML = value;
    });
    $$('[data-i18n-aria-label]').forEach((element) => {
      const value = getPath(translations[lang], element.dataset.i18nAriaLabel);
      if (value !== undefined) element.setAttribute('aria-label', value);
    });
    $$('#language-label, #language-label-footer').forEach((element) => { element.textContent = lang === 'tr' ? 'EN' : 'TR'; });
    updateCountdown(true);
  }

  function initLanguage() {
    $$('.language-toggle').forEach((button) => button.addEventListener('click', () => applyLanguage(state.lang === 'tr' ? 'en' : 'tr')));
    applyLanguage(state.lang);
  }

  function initLoader() {
    const loader = $('#loader');
    const finish = () => window.setTimeout(() => loader.classList.add('is-hidden'), 1450);
    if (document.readyState === 'complete') finish(); else window.addEventListener('load', finish, { once: true });
  }

  function initNavigation() {
    const header = $('#site-header');
    const menu = $('#mobile-menu');
    const toggle = $('#menu-toggle');
    const closeMenu = () => { toggle.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true'); document.body.classList.remove('menu-open'); };
    toggle.addEventListener('click', () => { const isOpen = !toggle.classList.contains('is-open'); toggle.classList.toggle('is-open', isOpen); toggle.setAttribute('aria-expanded', String(isOpen)); menu.classList.toggle('is-open', isOpen); menu.setAttribute('aria-hidden', String(!isOpen)); document.body.classList.toggle('menu-open', isOpen); });
    $$('a[href^="#"]').forEach((link) => link.addEventListener('click', () => closeMenu()));
    window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 20), { passive: true });
    const sections = $$('main section[id]');
    const navLinks = $$('[data-nav]');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.nav === entry.target.id)); }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
  }

  function initCountdown() {
    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  }

  function updateCountdown(force = false) {
    const target = Date.parse('2026-09-15T00:00:00+03:00');
    const difference = target - Date.now();
    const status = $('#countdown-status');
    if (difference <= 0) {
      ['days', 'hours', 'minutes', 'seconds'].forEach((unit) => { const element = $(`[data-unit="${unit}"]`); if (element) element.textContent = '00'; });
      status.textContent = translations[state.lang].countdown.started;
      return;
    }
    const values = { days: Math.floor(difference / 86400000), hours: Math.floor(difference / 3600000) % 24, minutes: Math.floor(difference / 60000) % 60, seconds: Math.floor(difference / 1000) % 60 };
    Object.entries(values).forEach(([unit, value]) => {
      const element = $(`[data-unit="${unit}"]`);
      const next = String(value).padStart(2, '0');
      if (element && (force || element.textContent !== next)) { element.animate([{ opacity: .4, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300, easing: 'cubic-bezier(.23,1,.32,1)' }); element.textContent = next; }
    });
    status.textContent = `${String(values.days).padStart(2, '0')} : ${String(values.hours).padStart(2, '0')}`;
  }

  function initAccordions() {
    $$('.schedule-item').forEach((button) => button.addEventListener('click', () => { const detail = button.nextElementSibling; const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); detail.classList.toggle('is-open', !open); }));
    $$('.manifesto-expand').forEach((button) => button.addEventListener('click', () => { const panel = button.closest('.manifesto-panel'); panel.classList.toggle('is-expanded'); }));
    $('.committee-trigger')?.addEventListener('click', () => document.querySelector('#committees').scrollIntoView({ behavior: 'smooth' }));
  }

  function initReveals() {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    $$('.reveal').forEach((element) => observer.observe(element));
  }

  function initPointer() {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const light = $('.cursor-light'); light.style.opacity = '1';
    window.addEventListener('pointermove', (event) => { state.target.x = event.clientX; state.target.y = event.clientY; }, { passive: true });
    const loop = () => { state.pointer.x += (state.target.x - state.pointer.x) * .12; state.pointer.y += (state.target.y - state.pointer.y) * .12; light.style.transform = `translate(${state.pointer.x}px, ${state.pointer.y}px) translate(-50%, -50%)`; state.raf = requestAnimationFrame(loop); };
    state.raf = requestAnimationFrame(loop);
    $$('.tilt-card').forEach((card) => card.addEventListener('pointermove', (event) => { const rect = card.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - .5; const y = (event.clientY - rect.top) / rect.height - .5; card.style.transform = `perspective(700px) rotateX(${y * -3}deg) rotateY(${x * 3}deg) translateY(-4px)`; }));
    $$('.tilt-card').forEach((card) => card.addEventListener('pointerleave', () => { card.style.transform = ''; }));
    $$('.magnetic').forEach((button) => button.addEventListener('pointermove', (event) => { const rect = button.getBoundingClientRect(); button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .08}px, ${(event.clientY - rect.top - rect.height / 2) * .08}px)`; }));
    $$('.magnetic').forEach((button) => button.addEventListener('pointerleave', () => { button.style.transform = ''; }));
  }

  function init() { initLoader(); initLanguage(); initNavigation(); initCountdown(); initAccordions(); initReveals(); initPointer(); }
  init();
})();
