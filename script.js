/* ============================================================================
   TRANSLATION SYSTEM
   ============================================================================ */
const translations = {
    tr: {
        event_name: 'Akay Perspektif ve Aydınlanma Çalıştayı',
        event_date: '15 Eylül 2026',
        event_date_label: 'Tarih',
        event_date_value: '15 Eylül 2026',
        event_location_label: 'Konum',
        event_location_value: 'Yakında Açıklanacak',
        event_fee_label: 'Ücret',
        event_fee_value: 'Yakında Açıklanacak',
        event_duration_label: 'Süre',
        event_duration_value: 'Yakında Açıklanacak',
        event_started: 'Etkinlik Başladı',
        
        countdown_days: 'Gün',
        countdown_hours: 'Saat',
        countdown_minutes: 'Dakika',
        countdown_seconds: 'Saniye',
        
        nav_home: 'Ana Sayfa',
        nav_about: 'Hakkımızda',
        nav_event: 'Etkinlik',
        nav_committees: 'Komiteler',
        nav_schedule: 'Akış',
        nav_sponsors: 'Sponsorluk',
        nav_contact: 'İletişim',
        
        about_title: 'Misyon & Vizyon',
        mission_title: 'Misyonumuz',
        mission_text: 'Akay Çalıştayı olarak misyonumuz; gençlerin hızla gelişen ve değişen dünyaya dair farkındalıklarını artırırken, onlara fikirlerini özgürce ifade edebilecekleri, güçlü bir bilgi paylaşım alanı sunmaktır. Komite konularımız ise hem akademik anlamda geliştirici hem de sosyal bakımdan günlük hayatımızı doğrudan etkileyen konular olarak özenle seçilmiştir. Sosyal becerilerini aktif olarak kullanabilecekleri bu platformda, çok yönlü bakış açıları kazanmalarını hedefliyoruz.',
        vision_title: 'Vizyonumuz',
        vision_text: 'Türkiye\'deki gençlerin Türk kültürü ve kökeni başta olmak üzere dünya tarihini, farklı kültürleri ve dilleri anlayarak farkındalığı, entelektüel donanımı ve hitabet becerisi yüksek bireyler olmalarına katkı sağlayarak ülkemiz adına faydalı bireyler yetiştirmeyi amaçlıyoruz. Nihai hedefimiz, gençlerin bu süreçte edindikleri bilgi birikimini ve aydınlık zihinlerini kullanarak başta ülkemiz olmak üzere tüm insanlığa somut faydalar sunan bireyler olarak yetişmeleridir.',
        
        event_info_title: 'Etkinlik Bilgileri',
        
        schedule_title: 'Program Akışı',
        schedule_coming_soon: 'Program yakında açıklanacaktır.',
        
        committees_title: 'Komiteler',
        committees_coming_soon: 'Komiteler ve gündem maddeleri yakında açıklanacaktır.',
        
        sponsors_title: 'Sponsorlar',
        sponsor_ai: 'Yapay Zeka Sponsoru',
        sponsor_it: 'IT Sponsoru',
        sponsor_design: 'Sosyal Medya ve Grafik Tasarım Sponsoru',
        
        team_title: 'Koordinasyon Ekibi',
        team_general_coordinator: 'Genel Koordinatör',
        
        contact_title: 'İletişim',
        contact_follow: 'Bizi takip edin',
        
        footer_copyright: '© 2026 Akay Perspektif ve Aydınlanma Çalıştayı. Tüm hakları saklıdır.',
        
        lang_short: 'TR',
    },
    en: {
        event_name: 'Akay Perspective and Enlightenment Workshop',
        event_date: 'September 15, 2026',
        event_date_label: 'Date',
        event_date_value: 'September 15, 2026',
        event_location_label: 'Location',
        event_location_value: 'Coming Soon',
        event_fee_label: 'Fee',
        event_fee_value: 'Coming Soon',
        event_duration_label: 'Duration',
        event_duration_value: 'Coming Soon',
        event_started: 'The Event Has Started',
        
        countdown_days: 'Days',
        countdown_hours: 'Hours',
        countdown_minutes: 'Minutes',
        countdown_seconds: 'Seconds',
        
        nav_home: 'Home',
        nav_about: 'About',
        nav_event: 'Event',
        nav_committees: 'Committees',
        nav_schedule: 'Schedule',
        nav_sponsors: 'Sponsors',
        nav_contact: 'Contact',
        
        about_title: 'Mission & Vision',
        mission_title: 'Our Mission',
        mission_text: 'Our mission is to empower young people with awareness of our rapidly evolving world while providing them with a strong platform to express their ideas freely. Our committee topics have been carefully selected to be both academically enriching and directly relevant to our daily lives. We aim to help participants develop multiple perspectives while actively engaging their social skills.',
        vision_title: 'Our Vision',
        vision_text: 'We aspire to cultivate informed, intellectually equipped, and eloquent individuals who understand Turkish culture and history, as well as world history and diverse cultures and languages. Our ultimate goal is to prepare young people to become valuable contributors to our country and humanity as a whole, using the knowledge and enlightened minds they develop throughout this journey.',
        
        event_info_title: 'Event Information',
        
        schedule_title: 'Event Schedule',
        schedule_coming_soon: 'The full program will be announced soon.',
        
        committees_title: 'Committees',
        committees_coming_soon: 'Committees and agenda topics will be announced soon.',
        
        sponsors_title: 'Sponsors',
        sponsor_ai: 'Artificial Intelligence Sponsor',
        sponsor_it: 'IT Sponsor',
        sponsor_design: 'Social Media and Design Sponsor',
        
        team_title: 'Coordination Team',
        team_general_coordinator: 'General Coordinator',
        
        contact_title: 'Contact',
        contact_follow: 'Follow Us',
        
        footer_copyright: '© 2026 Akay Perspective and Enlightenment Workshop. All rights reserved.',
        
        lang_short: 'EN',
    }
};

/* ============================================================================
   STATE & DOM REFERENCES
   ============================================================================ */
let currentLanguage = localStorage.getItem('akay-language') || 'tr';
let countdownInterval = null;
let mouseX = 0;
let mouseY = 0;
let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================================
   INITIALIZATION
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializePreloader();
    initializeCountdown();
    initializeNavigation();
    initializeMouseLight();
    initializeScrollReveal();
    initializeAccessibility();
});

/* ============================================================================
   LANGUAGE SYSTEM
   ============================================================================ */
function initializeLanguage() {
    // Set initial language
    document.documentElement.lang = currentLanguage;
    updateAllTranslations();
    
    // Language toggle listeners
    const langToggle = document.getElementById('lang-toggle');
    const footerLangToggle = document.getElementById('footer-lang-toggle');
    
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    if (footerLangToggle) {
        footerLangToggle.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    localStorage.setItem('akay-language', currentLanguage);
    document.documentElement.lang = currentLanguage;
    updateAllTranslations();
}

function updateAllTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

/* ============================================================================
   PRELOADER / INTRO
   ============================================================================ */
function initializePreloader() {
    // Simulate preloader duration
    const preloader = document.getElementById('preloader');
    
    // Add slight delay to show animation
    const preloadDuration = prefersReducedMotion ? 100 : 2500;
    
    setTimeout(() => {
        preloader.classList.add('hidden');
        
        // Remove preloader from DOM after animation
        setTimeout(() => {
            preloader.remove();
        }, 600);
    }, preloadDuration);
}

/* ============================================================================
   COUNTDOWN TIMER
   ============================================================================ */
function initializeCountdown() {
    updateCountdown();
    
    // Update countdown every second
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    // Event date: September 15, 2026 at 09:00 AM Istanbul time
    const eventDate = new Date('2026-09-15T09:00:00+03:00');
    const now = new Date();
    
    const timeRemaining = eventDate - now;
    
    const daysElement = document.getElementById('countdown-days');
    const hoursElement = document.getElementById('countdown-hours');
    const minutesElement = document.getElementById('countdown-minutes');
    const secondsElement = document.getElementById('countdown-seconds');
    const statusElement = document.getElementById('countdown-status');
    const countdownContainer = document.querySelector('.countdown-container');
    
    if (timeRemaining <= 0) {
        // Event has started
        if (daysElement) daysElement.textContent = '0';
        if (hoursElement) hoursElement.textContent = '0';
        if (minutesElement) minutesElement.textContent = '0';
        if (secondsElement) secondsElement.textContent = '0';
        
        if (statusElement) {
            statusElement.style.display = 'block';
        }
        if (countdownContainer) {
            countdownContainer.style.opacity = '0.5';
        }
        
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        updateCountdownValue(daysElement, days);
        updateCountdownValue(hoursElement, hours);
        updateCountdownValue(minutesElement, minutes);
        updateCountdownValue(secondsElement, seconds);
        
        if (statusElement) {
            statusElement.style.display = 'none';
        }
    }
}

function updateCountdownValue(element, newValue) {
    if (!element) return;
    
    const oldValue = parseInt(element.textContent);
    
    if (oldValue !== newValue) {
        element.textContent = String(newValue).padStart(2, '0');
        
        // Trigger animation only if not respecting reduced motion
        if (!prefersReducedMotion) {
            element.classList.remove('updated');
            // Force reflow
            void element.offsetWidth;
            element.classList.add('updated');
        }
    }
}

/* ============================================================================
   NAVIGATION
   ============================================================================ */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMain = document.querySelector('.nav-main');
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMain.classList.toggle('active');
        });
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close mobile menu
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            if (navMain) {
                navMain.classList.remove('active');
            }
            
            // Get target section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let currentSection = null;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/* ============================================================================
   MOUSE SPOTLIGHT EFFECT
   ============================================================================ */
function initializeMouseLight() {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
        return;
    }
    
    const mouseLight = document.getElementById('mouse-light');
    if (!mouseLight) return;
    
    document.addEventListener('mousemove', (e) => {
        if (prefersReducedMotion) return;
        
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        requestAnimationFrame(() => {
            mouseLight.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
            mouseLight.classList.add('active');
        });
    }, { passive: true });
    
    document.addEventListener('mouseleave', () => {
        mouseLight.classList.remove('active');
    }, { passive: true });
}

/* ============================================================================
   SCROLL REVEAL ANIMATION
   ============================================================================ */
function initializeScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('[class*="scroll-reveal"]').forEach(element => {
        observer.observe(element);
    });
}

/* ============================================================================
   ACCESSIBILITY
   ============================================================================ */
function initializeAccessibility() {
    // Handle reduced motion preference
    const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    prefersReducedMotionQuery.addEventListener('change', (e) => {
        prefersReducedMotion = e.matches;
    });
    
    // Keyboard navigation for buttons
    const buttons = document.querySelectorAll('button, a[role="button"]');
    buttons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
    
    // Focus management
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-focus');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-focus');
    });
}

/* ============================================================================
   UTILITY FUNCTIONS
   ============================================================================ */

// Magnetic button effect (subtle cursor-following)
function addMagneticButton(element) {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) {
        return;
    }
    
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
            const force = 1 - distance / maxDistance;
            const moveX = (x / distance) * 10 * force;
            const moveY = (y / distance) * 10 * force;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
    });
}

// Apply magnetic effect to sponsor and team cards
document.addEventListener('DOMContentLoaded', () => {
    const magneticElements = document.querySelectorAll('.sponsor-card, .team-card, .about-card');
    magneticElements.forEach(addMagneticButton);
});

/* ============================================================================
   PERFORMANCE OPTIMIZATION
   ============================================================================ */

// Use passive event listeners for scroll
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateActiveNavigation();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });
