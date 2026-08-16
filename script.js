(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const state = { lang: localStorage.getItem('akay-lang') || 'tr', reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches };

  const translations = {
    tr: {
      nav:{home:'Ana Sayfa',about:'Hakkımızda',event:'Etkinlik',committees:'Komiteler',flow:'Akış',sponsors:'Sponsorluk',contact:'İletişim'},
      hero:{eyebrow:'',titleA:'Fikrin',titleB:'ışığı',titleC:'burada.',description:'',cta:'Çalıştayı keşfet',secondary:'Manifestoyu oku',meta:'15 EYLÜL 2026'},
      about:{eyebrow:'',title:'Misyon ve Vizyonumuz',lead:'',missionLabel:'MİSYON',missionTitle:'Bilgiyi paylaş,<br>ufku genişlet.',missionText:'Akay Çalıştayı olarak misyonumuz; gençlerin hızla gelişen ve değişen dünyaya dair farkındalıklarını artırırken, fikirlerini özgürce ifade edebilecekleri güçlü bir bilgi paylaşım alanı sunmaktır. Akademik olarak geliştirici ve günlük hayatı etkileyen konularla çok yönlü bakış açıları kazandırmayı hedefliyoruz.',visionLabel:'VİZYON',visionTitle:'Köklere bak,<br>geleceği kur.',visionText:'Akay Perspektif ve Aydınlanma Çalıştayı ekibi olarak gençlerin Türk kültürünü ve kökenini, dünya tarihini, farklı kültürleri ve dilleri anlayarak entelektüel donanımı ve hitabet becerisi yüksek bireyler olmalarına katkı sunmayı amaçlıyoruz. Nihai hedefimiz, bilgiyi ve aydınlık zihinleri insanlığa somut faydaya dönüştürmektir.'},
      event:{eyebrow:'',title:'Buluşmanın<br><em>haritası.</em>',lead:'',dateLabel:'TARİH',location:'Konum',fee:'Katılım ücreti',duration:'Akış',format:'Format',formatValue:'Çalıştay'},
      countdown:{eyebrow:'Başlamasına kalan',days:'Gün',hours:'Saat',minutes:'Dakika',seconds:'Saniye',started:'Etkinlik başladı.'},
      flow:{eyebrow:'',title:'Program Akışı',lead:'',empty:'',support:''},
      committees:{eyebrow:'',title:'Komiteler',lead:'',empty:'',cta:''},
      sponsors:{eyebrow:'',title:'Sponsorlarımız',lead:'',vertex:'Yapay zekâ teknoloji sponsoru',banna:'Bilgi teknolojileri sponsoru',cord:'Sosyal medya ve grafik tasarım sponsoru'},
      team:{eyebrow:'',title:'Genel Koordinatörlerimiz',coordinator:''},
      contact:{eyebrow:'Bağlantıda kal',title:'Bir sonraki<br><em>perspektifte</em> buluşalım.',lead:"Duyurular, program ve çalıştayın ritmi için bizi Instagram'da takip edin."},
      footer:{statement:'Fikrin ışığında, daha açık bir gelecek için.',note:'Perspektif ve Aydınlanma Çalıştayı'},comingSoon:'Yakında Açıklanacak'
    },
    en: {
      nav:{home:'Home',about:'About',event:'Event',committees:'Committees',flow:'Schedule',sponsors:'Sponsors',contact:'Contact'},
      hero:{eyebrow:'Perspective / Enlightenment / Gathering',titleA:'Where',titleB:'ideas',titleC:'illuminate.',description:'A space where young minds come together to reread, understand and transform the world.',cta:'Explore the workshop',secondary:'Read the manifesto',meta:'15 SEPTEMBER 2026'},
      about:{eyebrow:'The essence',title:'One idea can<br>shift a <em>perspective.</em>',lead:'Akay is a young space for those pursuing better questions than easy answers.',missionLabel:'MISSION',missionTitle:'Share knowledge,<br>expand horizons.',missionText:'Our mission at Akay is to increase young people’s awareness of a rapidly changing world while offering a strong space for the free exchange of ideas. Through subjects that are academically enriching and directly connected to everyday life, we aim to cultivate multidimensional perspectives.',visionLabel:'VISION',visionTitle:'Read the roots,<br>shape tomorrow.',visionText:'As the Akay Perspective and Enlightenment Workshop team, we aim to help young people understand Turkish culture and origins, world history, different cultures and languages, and become individuals with strong intellectual depth and oratory. Our ultimate goal is to turn knowledge and enlightened minds into tangible value for humanity.'},
      event:{eyebrow:'Coordinates of the experience',title:'A map of<br><em>the gathering.</em>',lead:'This area will be updated as details are announced. For now, the date sits at the centre of the idea.',dateLabel:'DATE',location:'Location',fee:'Participation fee',duration:'Duration',format:'Format',formatValue:'Workshop'},
      countdown:{eyebrow:'Time until we begin',days:'Days',hours:'Hours',minutes:'Minutes',seconds:'Seconds',started:'The event has started.'},
      flow:{eyebrow:'The flow of time',title:'Program,<br><em>coming soon.</em>',lead:'When announced, the full program will carry each session in its own rhythm.',empty:'The full program will be announced soon.',support:'Time / session / committee / speaker details will live here.'},
      committees:{eyebrow:'Tables of thought',title:'Committees of<br><em>questions.</em>',lead:'Each table is a meeting point for different perspectives. Content and agendas will be announced soon.',empty:'Committees and agenda topics will be announced soon.',cta:'Open index'},
      sponsors:{eyebrow:'Made possible together',title:'The partners<br><em>behind this.</em>',lead:'Ideas grow when the right people and brands come together.',vertex:'Artificial Intelligence sponsor',banna:'IT sponsor',cord:'Social media visuals and graphic design sponsor'},
      team:{eyebrow:'Coordination',title:'People,<br><em>carriers of ideas.</em>',coordinator:'General Coordinator'},
      contact:{eyebrow:'Stay connected',title:'Meet at the<br>next <em>perspective.</em>',lead:'Follow us on Instagram for announcements, the program and the rhythm of the workshop.'},
      footer:{statement:'In the light of ideas, toward a more open future.',note:'Perspective and Enlightenment Workshop'},comingSoon:'Coming Soon'
    }
  };

  function getValue(path) { return path.split('.').reduce((obj, key) => obj && obj[key], translations[state.lang]); }
  function applyLanguage() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(el => { const value = getValue(el.dataset.i18n); if (value !== undefined) el.innerHTML = value; });
    $$('[data-lang-toggle]').forEach(button => { const current = $('.lang-current', button); const other = button.querySelector('.lang-divider + span'); if (current) current.textContent = state.lang.toUpperCase(); if (other) other.textContent = state.lang === 'tr' ? 'EN' : 'TR'; });
    localStorage.setItem('akay-lang', state.lang);
    document.title = state.lang === 'tr' ? 'Akay Perspektif ve Aydınlanma Çalıştayı' : 'Akay Perspective and Enlightenment Workshop';
  }
  function toggleLanguage() { state.lang = state.lang === 'tr' ? 'en' : 'tr'; applyLanguage(); }

  function initLoader() {
    const loader = $('#loader');
    if (!loader || state.reducedMotion) { loader?.remove(); return; }
    window.setTimeout(() => loader.classList.add('is-hidden'), 2100);
    window.setTimeout(() => loader.remove(), 3000);
  }

  function initNavigation() {
    const header = $('#site-header'), menuButton = $('.menu-toggle'), mobileMenu = $('#mobile-menu');
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 25), { passive:true });
    menuButton?.addEventListener('click', () => { const open = mobileMenu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
    $$('a[href^="#"]').forEach(link => link.addEventListener('click', event => { const target = $(link.getAttribute('href')); if (!target) return; event.preventDefault(); target.scrollIntoView({ behavior: state.reducedMotion ? 'auto' : 'smooth' }); mobileMenu?.classList.remove('open'); menuButton?.setAttribute('aria-expanded','false'); }));
    const sections = $$('main section[id]'), navLinks = $$('.desktop-nav a');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin:'-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
  }

  function initCountdown() {
    const countdown = $('#countdown'), started = $('#event-started');
    const fields = { days: $('[data-time="days"]'), hours: $('[data-time="hours"]'), minutes: $('[data-time="minutes"]'), seconds: $('[data-time="seconds"]') };
    const target = Date.parse('2026-09-15T00:00:00+03:00');
    const update = () => { const difference = target - Date.now(); if (difference <= 0) { countdown.classList.add('started'); started.hidden = false; return; } const values = { days:Math.floor(difference / 86400000), hours:Math.floor(difference / 3600000) % 24, minutes:Math.floor(difference / 60000) % 60, seconds:Math.floor(difference / 1000) % 60 }; Object.entries(values).forEach(([key,value]) => { const next = String(value).padStart(2,'0'); if (fields[key].textContent !== next) { fields[key].classList.remove('digit-change'); void fields[key].offsetWidth; fields[key].textContent = next; fields[key].classList.add('digit-change'); } }); };
    update(); window.setInterval(update, 1000);
  }

  function initReveal() { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold:.12 }); $$('.reveal').forEach(el => observer.observe(el)); }
  function initPointer() {
    if (state.reducedMotion || !matchMedia('(pointer:fine)').matches) return;
    const light = $('.cursor-light'); let frame = 0, x = 0, y = 0;
    window.addEventListener('pointermove', event => { x = event.clientX; y = event.clientY; light.style.opacity = '1'; if (!frame) frame = requestAnimationFrame(() => { light.style.left = `${x}px`; light.style.top = `${y}px`; frame = 0; }); }, { passive:true });
    $$('[data-tilt]').forEach(card => card.addEventListener('pointermove', event => { const rect = card.getBoundingClientRect(); const rx = ((event.clientY - rect.top) / rect.height - .5) * -3; const ry = ((event.clientX - rect.left) / rect.width - .5) * 3; card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`; }));
    $$('[data-tilt]').forEach(card => card.addEventListener('pointerleave', () => { card.style.transform = ''; }));
    $$('.magnetic').forEach(button => button.addEventListener('pointermove', event => { const r = button.getBoundingClientRect(); button.style.transform = `translate(${(event.clientX-r.left-r.width/2)*.08}px, ${(event.clientY-r.top-r.height/2)*.08}px)`; }));
    $$('.magnetic').forEach(button => button.addEventListener('pointerleave', () => { button.style.transform = ''; }));
  }

  function initParticles() {
    const canvas = $('#particle-canvas'); if (!canvas || state.reducedMotion || !matchMedia('(pointer:fine)').matches) return; const context = canvas.getContext('2d'); let particles = [], width, height;
    const resize = () => { width = canvas.width = canvas.offsetWidth * devicePixelRatio; height = canvas.height = canvas.offsetHeight * devicePixelRatio; context.scale(devicePixelRatio, devicePixelRatio); particles = Array.from({length:45}, () => ({ x:Math.random()*canvas.offsetWidth, y:Math.random()*canvas.offsetHeight, r:Math.random()*1.6+.3, vx:(Math.random()-.5)*.12, vy:(Math.random()-.5)*.12 })); }; resize(); window.addEventListener('resize', resize, { passive:true });
    const draw = () => { context.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight); particles.forEach(p => { p.x += p.vx; p.y += p.vy; if(p.x<0||p.x>canvas.offsetWidth)p.vx*=-1; if(p.y<0||p.y>canvas.offsetHeight)p.vy*=-1; context.beginPath(); context.arc(p.x,p.y,p.r,0,Math.PI*2); context.fillStyle='rgba(216,211,231,.45)'; context.fill(); }); requestAnimationFrame(draw); }; draw();
  }

  function initLogoFallbacks() { $$('img[src="Logo-0.png"], img[src="Logo-1.png"]').forEach(image => { image.addEventListener('error', () => { image.classList.add('asset-missing'); image.setAttribute('aria-hidden', 'true'); image.removeAttribute('alt'); image.parentElement?.classList.add('asset-missing-parent'); }, { once:true }); }); }
  function init() { applyLanguage(); $$('[data-lang-toggle]').forEach(button => button.addEventListener('click', toggleLanguage)); initLogoFallbacks(); initLoader(); initNavigation(); initCountdown(); initReveal(); initPointer(); initParticles(); $('#committee-button')?.addEventListener('click', () => $('#committee-button').blur()); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

