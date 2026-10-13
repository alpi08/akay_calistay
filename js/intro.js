/* intro.js - Cinematic Intro Controller (Vanilla JS, no dependencies) */

(function () {
  "use strict";

  let introFinished = false;
  let rafId = null;
  let burstDone = false;
  const DURATION = 4000;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
  function easeOutElastic(t) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    const p = 0.3;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
  }

  function initIntro() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishIntroImmediate();
      return;
    }

    try {
      if (window.sessionStorage && sessionStorage.getItem("akay-intro-seen") === "1") {
        finishIntroImmediate();
        return;
      }
    } catch (e) {}

    const intro = document.getElementById("intro");
    if (!intro) {
      document.body.classList.remove("intro-lock");
      return;
    }

    document.body.classList.add("intro-lock");

    const rings = intro.querySelectorAll(".intro-rings .ring");
    const logo = intro.querySelector(".intro-logo");
    const logoGlow = intro.querySelector(".intro-logo-glow");
    const tag = intro.querySelector(".intro-tag");
    const subtag = intro.querySelector(".intro-subtag");
    const made = intro.querySelector(".intro-made");
    const particles = intro.querySelector(".intro-particles");
    const bg = intro.querySelector(".intro-bg");
    const barEl = intro.querySelector(".intro-progress i");

    if (!rings.length || !logo || !logoGlow || !bg) {
      finishIntroFallback();
      return;
    }

    setupRings(rings);
    setupInitialStates(logo, logoGlow, tag, subtag, made, bg);

    const startTime = performance.now();

    function animate(currentTime) {
      if (introFinished) return;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      if (barEl) barEl.style.transform = "scaleX(" + progress + ")";

      animateBackground(bg, elapsed);
      animateRings(rings, elapsed);
      animateLogo(logo, elapsed);
      animateLogoGlow(logoGlow, elapsed);
      animateText(tag, subtag, made, elapsed);
      animateParticleBurst(particles, logo, elapsed);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        finishIntro();
      }
    }

    rafId = requestAnimationFrame(animate);

    intro.addEventListener("click", handleSkip);
    document.addEventListener("keydown", handleEscape);
  }

  function setupRings(rings) {
    rings.forEach((ring, i) => {
      if (i === 0) return;
      const r = parseFloat(ring.getAttribute("r")) || 45;
      const circumference = 2 * Math.PI * r;
      ring.style.strokeDasharray = `${circumference} ${circumference}`;
      ring.style.strokeDashoffset = circumference;
      ring.style.setProperty("--circumference", circumference);
    });
  }

  function setupInitialStates(logo, logoGlow, tag, subtag, made, bg) {
    logo.style.transform = "translate(-50%, -50%) scale(0.2) rotate(-20deg)";
    logo.style.opacity = "0";
    logoGlow.style.transform = "translate(-50%, -50%) scale(0)";
    logoGlow.style.opacity = "0";
    bg.style.opacity = "0";
    if (tag) { tag.style.opacity = "0"; tag.style.transform = "translateY(30px)"; tag.style.filter = "blur(12px)"; }
    if (subtag) { subtag.style.opacity = "0"; subtag.style.transform = "translateY(20px)"; subtag.style.filter = "blur(12px)"; }
    if (made) { made.style.opacity = "0"; made.style.transform = "translateY(20px)"; made.style.filter = "blur(12px)"; }
  }

  function createAmbientParticles(container, count) {
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "intro-particle";
      const size = 2 + Math.random() * 6;
      const x = 5 + Math.random() * 90;
      const y = 5 + Math.random() * 90;
      const delay = Math.random() * 4;
      const duration = 3 + Math.random() * 4;
      const tx = (Math.random() - 0.5) * 60;
      const ty = (Math.random() - 0.5) * 60;
      p.style.cssText = `
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(192,132,252,0.6) 0%, rgba(122,59,255,0) 70%);
        animation: particleFloat ${duration}s ease-in-out ${delay}s infinite alternate;
        --tx: ${tx}px;
        --ty: ${ty}px;
      `;
      container.appendChild(p);
    }
  }

  function animateBackground(bg, elapsed) {
    if (elapsed < 600) {
      bg.style.opacity = easeOutCubic(elapsed / 600);
    } else {
      bg.style.opacity = "1";
    }
  }

  function animateRings(rings, elapsed) {
    rings.forEach((ring, i) => {
      if (i === 0) {
        const ringElapsed = elapsed;
        if (ringElapsed > 0) {
          const ringProgress = Math.min(ringElapsed / 800, 1);
          ring.style.opacity = ringProgress;
        } else {
          ring.style.opacity = "0";
        }
        return;
      }
      const ringStart = i * 150;
      const ringElapsed = elapsed - ringStart;
      if (ringElapsed > 0) {
        const circumference = parseFloat(ring.style.getPropertyValue("--circumference")) || 282;
        const ringProgress = Math.min(ringElapsed / 800, 1);
        const eased = ringProgress;
        ring.style.opacity = eased;
        ring.style.strokeDashoffset = circumference * (1 - eased);
      } else {
        ring.style.opacity = "0";
        const circumference = parseFloat(ring.style.getPropertyValue("--circumference")) || 282;
        ring.style.strokeDashoffset = circumference;
      }
    });
  }

  function animateLogo(logo, elapsed) {
    if (elapsed > 400) {
      const logoProgress = Math.min((elapsed - 400) / 1200, 1);
      const eased = easeOutCubic(logoProgress);
      logo.style.opacity = eased;
      const scale = 0.2 + 0.8 * eased;
      const rotation = -20 + 20 * eased;
      logo.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
    }
  }

  function animateLogoGlow(logoGlow, elapsed) {
    if (elapsed > 600) {
      const glowProgress = Math.min((elapsed - 600) / 1000, 1);
      const eased = easeOutCubic(glowProgress);
      logoGlow.style.opacity = 0.6 * eased;
      logoGlow.style.transform = `translate(-50%, -50%) scale(${eased})`;
    }
  }

  function animateText(tag, subtag, made, elapsed) {
    if (elapsed > 1100 && tag && tag.style.opacity !== "1") {
      tag.style.opacity = "1";
      tag.style.transform = "translateY(0)";
      tag.style.filter = "blur(0px)";
    }
    if (elapsed > 1300 && subtag && subtag.style.opacity !== "1") {
      subtag.style.opacity = "1";
      subtag.style.transform = "translateY(0)";
      subtag.style.filter = "blur(0px)";
    }
    if (elapsed > 1500 && made && made.style.opacity !== "1") {
      made.style.opacity = "1";
      made.style.transform = "translateY(0)";
      made.style.filter = "blur(0px)";
    }
  }

  function animateParticleBurst(container, origin, elapsed) {
    if (elapsed > 1200 && !burstDone && container && origin) {
      burstDone = true;
      createBurstParticles(container, origin);
    }
  }

  function createBurstParticles(container, origin) {
    const rect = origin.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {
      const p = document.createElement("div");
      p.className = "intro-burst";
      const size = 4 + Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const distance = 60 + Math.random() * 80;
      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;

      p.style.cssText = `
        left: ${centerX}px;
        top: ${centerY}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(233,213,255,1) 0%, rgba(122,59,255,0) 70%);
      `;
      document.body.appendChild(p);

      const duration = 0.5 + Math.random() * 0.3;
      const start = performance.now();

      function animateBurst(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        p.style.transform = `translate(${endX * eased}px, ${endY * eased}px) scale(${1 - eased})`;
        p.style.opacity = 1 - eased;

        if (progress < 1) {
          requestAnimationFrame(animateBurst);
        } else {
          p.remove();
        }
      }
      requestAnimationFrame(animateBurst);
    }
  }

  function finishIntro() {
    if (introFinished) return;
    introFinished = true;
    if (rafId) cancelAnimationFrame(rafId);
    try { if (window.sessionStorage) sessionStorage.setItem("akay-intro-seen", "1"); } catch (e) {}

    const intro = document.getElementById("intro");
    document.body.classList.remove("intro-lock");

    if (intro) {
      intro.offsetHeight;
      const bar = intro.querySelector(".intro-progress");
      if (bar) bar.style.display = "none";
      intro.classList.add("wipe-out");
      setTimeout(() => {
        if (intro.parentNode) intro.parentNode.removeChild(intro);
        document.dispatchEvent(new CustomEvent("akay:intro-complete"));
      }, 900);
    }
  }

  function finishIntroFallback() {
    if (introFinished) return;
    introFinished = true;
    if (rafId) cancelAnimationFrame(rafId);
    const intro = document.getElementById("intro");
    document.body.classList.remove("intro-lock");
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    document.dispatchEvent(new CustomEvent("akay:intro-complete"));
  }

  function finishIntroImmediate() {
    if (introFinished) return;
    introFinished = true;
    if (rafId) cancelAnimationFrame(rafId);
    const intro = document.getElementById("intro");
    document.body.classList.remove("intro-lock");
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    document.dispatchEvent(new CustomEvent("akay:intro-complete"));
  }

  function handleSkip(e) {
    if (!introFinished) {
      const intro = document.getElementById("intro");
      if (intro && (e.target === intro || e.target.closest(".intro-bg") || e.target.closest(".intro-particles") || e.target.closest(".intro-inner") || e.target.closest(".intro-stage") || e.target.closest(".intro-emblem") || e.target.closest(".intro-text-reveal"))) {
        finishIntro();
      }
    }
  }

  function handleEscape(e) {
    if (e.key === "Escape" && !introFinished) {
      finishIntro();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initIntro);
  } else {
    initIntro();
  }
})();