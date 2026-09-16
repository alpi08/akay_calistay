/**
 * Akay Perspektif ve Aydınlanma Çalıştayı 2026
 * Core JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // Internationalization Translations State
    const translations = {
        tr: {
            loaderText: "Aydınlanma Yolculuğu Başlıyor...",
            navHome: "Ana Sayfa",
            navAbout: "Hakkımızda",
            navEvent: "Etkinlik",
            navSchedule: "Akış",
            navCommittees: "Komiteler",
            navSponsors: "Sponsorluk",
            navContact: "İletişim",
            heroBadge: "PERSPEKTİF VE AYDINLANMA ÇALIŞTAYI",
            heroSubTitle: "Geleceği Şekillendiren Fikirler",
            heroDescription: "Türk kültüründen dünya tarihine, yapay zekadan entelektüel tartışmalara uzanan çok yönlü bir fikir platformu. Zihninizin sınırlarını genişletmeye hazır olun.",
            eventDatePill: "15 EYLÜL 2026",
            countdownLabel: "ETKİNLİĞE KALAN SÜRE",
            unitDays: "Gün",
            unitHours: "Saat",
            unitMinutes: "Dakika",
            unitSeconds: "Saniye",
            eventStarted: "Etkinlik Başladı!",
            btnExplore: "Keşfet",
            btnCommittees: "Komiteler",
            tagAbout: "Felsefemiz",
            titleManifesto: "Perspektif ve Aydınlanma",
            titleMission: "Misyonumuz",
            textMission: "Akay Çalıştayı olarak misyonumuz; Gençlerin hızla gelişen ve değişen dünyaya dair farkındalıklarını artırırken, onlara fikirlerini özgürce ifade edebilecekleri, güçlü bir bilgi paylaşım alanı sunmaktır. Komite konularımız ise hem akademik anlamda geliştirici hem de sosyal bakımdan günlük hayatımızı doğrudan etkileyen konular olarak özenle seçilmiştir. Sosyal becerilerini aktif olarak kullanabilecekleri bu platformda, çok yönlü bakış açıları kazanmalarını hedefliyoruz.",
            titleVision: "Vizyonumuz",
            textVision: "Akay Perspektif ve Aydınlanma Çalıştayı ekibi olarak Türkiye’deki gençlerin Türk kültürü ve kökeni başta olmak üzere; dünya tarihini, farklı kültürleri ve dilleri anlayarak farkındalığı, entelektüel donanımı ve hitabet becerisi yüksek bireyler olmalarına katkı sağlayarak ülkemiz adına faydalı bireyler yetiştirmeyi amaçlıyoruz. Nihai hedefimiz, gençlerin bu süreçte edindikleri bilgi birikimini ve aydınlık zihinlerini kullanarak başta ülkemiz olmak üzere tüm insanlığa somut faydalar sunan bireyler olarak yetişmeleridir.",
            tagEvent: "Detaylar",
            titleEventInfo: "Etkinlik Bilgileri",
            lblDate: "Tarih",
            lblLocation: "Konum",
            lblDuration: "Süre",
            lblFee: "Katılım Ücreti",
            comingSoon: "Yakında Açıklanacak",
            tagSchedule: "Zaman Çizelgesi",
            titleSchedule: "Etkinlik Akışı",
            scheduleNotice: "Program yakında açıklanacaktır.",
            scheduleNoticeSub: "Oturum saatleri ve detaylı çalıştay akışı kısa süre içinde yayınlanacaktır.",
            tagCommittees: "Oturumlar",
            titleCommittees: "Komiteler",
            committeesNotice: "Komiteler ve gündem maddeleri yakında açıklanacaktır.",
            committeesNoticeSub: "Akademik ve sosyal alanda fark yaratacak komite başlıklarımız hazırlanmaktadır.",
            tagSponsors: "İş Birlikleri",
            titleSponsors: "Sponsorlarımız",
            spVertex: "Yapay Zeka Sponsoru",
            spBanna: "Bilişim Teknolojileri Sponsoru",
            spCord: "Sosyal Medya Görselleri ve Grafik Tasarım Sponsoru",
            tagTeam: "Organizasyon",
            titleTeam: "Genel Koordinatörler",
            roleCoordinator: "Genel Koordinatör",
            instaTitle: "Bizi Instagram'da Takip Edin",
            instaSub: "Çalıştay duyuruları ve tüm güncellemelerden anında haberdar olun.",
            footerTagline: "Gençlerin entelektüel farkındalığını yükselten aydınlanma meşalesi.",
            footerRights: "Tüm Hakları Saklıdır."
        },
        en: {
            loaderText: "Journey of Enlightenment Begins...",
            navHome: "Home",
            navAbout: "About",
            navEvent: "Event",
            navSchedule: "Schedule",
            navCommittees: "Committees",
            navSponsors: "Sponsors",
            navContact: "Contact",
            heroBadge: "PERSPECTIVE AND ENLIGHTENMENT WORKSHOP",
            heroSubTitle: "Ideas Shaping the Future",
            heroDescription: "A multi-dimensional platform ranging from Turkish culture and world history to artificial intelligence and intellectual discourse. Prepare to expand your mind.",
            eventDatePill: "15 SEPTEMBER 2026",
            countdownLabel: "TIME UNTIL EVENT",
            unitDays: "Days",
            unitHours: "Hours",
            unitMinutes: "Minutes",
            unitSeconds: "Seconds",
            eventStarted: "The Event Has Started!",
            btnExplore: "Explore",
            btnCommittees: "Committees",
            tagAbout: "Our Philosophy",
            titleManifesto: "Perspective & Enlightenment",
            titleMission: "Our Mission",
            textMission: "Our mission at Akay Workshop is to heighten youth awareness of our rapidly evolving world while providing a robust platform for free expression and knowledge exchange. Our committee topics are meticulously selected to offer academic enrichment while directly impacting everyday social life. Through this interactive platform, we empower young minds to refine their social capabilities and cultivate multi-dimensional perspectives.",
            titleVision: "Our Vision",
            textVision: "As the Akay Perspective and Enlightenment Workshop team, our goal is to foster intellectually equipped, highly articulate, and culturally conscious individuals. By anchoring our foundation in Turkish heritage while embracing world history, diverse cultures, and global languages, we aim to inspire youth who deliver tangible contributions to our nation and humanity through enlightened minds and collective wisdom.",
            tagEvent: "Details",
            titleEventInfo: "Event Information",
            lblDate: "Date",
            lblLocation: "Location",
            lblDuration: "Duration",
            lblFee: "Registration Fee",
            comingSoon: "Coming Soon",
            tagSchedule: "Timeline",
            titleSchedule: "Event Schedule",
            scheduleNotice: "The full program will be announced soon.",
            scheduleNoticeSub: "Session hours and detailed schedule flow will be published shortly.",
            tagCommittees: "Sessions",
            titleCommittees: "Committees",
            committeesNotice: "Committees and agenda topics will be announced soon.",
            committeesNoticeSub: "Academic and social topic frameworks are currently being prepared.",
            tagSponsors: "Collaborations",
            titleSponsors: "Our Sponsors",
            spVertex: "Artificial Intelligence Sponsor",
            spBanna: "IT Sponsor",
            spCord: "Social Media Visuals & Graphic Design Sponsor",
            tagTeam: "Organization",
            titleTeam: "General Coordinators",
            roleCoordinator: "General Coordinator",
            instaTitle: "Follow Us on Instagram",
            instaSub: "Stay instantly updated with workshop announcements and news.",
            footerTagline: "The beacon of enlightenment elevating youth intellectual awareness.",
            footerRights: "All Rights Reserved."
        }
    };

    // State Variables
    let currentLang = localStorage.getItem('akay_lang') || 'tr';

    // DOM Elements
    const langToggleBtn = document.getElementById('lang-toggle');
    const currentLangSpan = document.getElementById('current-lang');
    const otherLangSpan = document.getElementById('other-lang');
    const preloader = document.getElementById('preloader');
    const cursorSpotlight = document.getElementById('cursor-spotlight');
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    /* ==========================================
       1. Language System
       ========================================== */
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('akay_lang', lang);

        if (lang === 'tr') {
            currentLangSpan.textContent = 'TR';
            otherLangSpan.textContent = 'EN';
            document.documentElement.lang = 'tr';
        } else {
            currentLangSpan.textContent = 'EN';
            otherLangSpan.textContent = 'TR';
            document.documentElement.lang = 'en';
        }

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    langToggleBtn.addEventListener('click', () => {
        const targetLang = currentLang === 'tr' ? 'en' : 'tr';
        applyLanguage(targetLang);
    });

    // Initial Language Application
    applyLanguage(currentLang);

    /* ==========================================
       2. Cinematic Preloader
       ========================================== */
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('fade-out');
        }
    }, 2200);

    /* ==========================================
       3. Dynamic Countdown Timer (15 Sept 2026)
       ========================================== */
    // Event Date in Turkey Timezone (+03:00)
    const targetDate = new Date('2026-09-15T09:00:00+03:00').getTime();

    const cdDays = document.getElementById('cd-days');
    const cdHours = document.getElementById('cd-hours');
    const cdMinutes = document.getElementById('cd-minutes');
    const cdSeconds = document.getElementById('cd-seconds');
    const countdownGrid = document.getElementById('countdown');
    const countdownStartedMsg = document.getElementById('countdown-started-msg');

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            if (countdownGrid) countdownGrid.classList.add('hidden');
            if (countdownStartedMsg) countdownStartedMsg.classList.remove('hidden');
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
        if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
        if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
        if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* ==========================================
       4. Pointer Spotlight & Card Interaction
       ========================================== */
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && cursorSpotlight) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            cursorSpotlight.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

            // Card Glow Positioning & Subtle Tilt Effect
            const cards = document.querySelectorAll('.glass-panel');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardX = x - rect.left;
                const cardY = y - rect.top;

                card.style.setProperty('--mouse-x', `${cardX}px`);
                card.style.setProperty('--mouse-y', `${cardY}px`);

                if (card.classList.contains('tilt-card')) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((cardY - centerY) / centerY) * -4;
                    const rotateY = ((cardX - centerX) / centerX) * 4;

                    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
                    } else {
                        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
                    }
                }
            });
        });
    }

    /* ==========================================
       5. Header Scrolling & Navigation
       ========================================== */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Section Indicator Detection
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================
       6. Mobile Navigation Toggle
       ========================================== */
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* ==========================================
       7. Scroll Reveal Animations (Intersection Observer)
       ========================================== */
    const revealElements = document.querySelectorAll('.reveal-element');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
