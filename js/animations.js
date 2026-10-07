/* animations.js — IntersectionObserver reveals */
(function(){
"use strict";
function initReveals(){
  const els = document.querySelectorAll(".reveal,.reveal-line,.clip-title,.tl-day-header,.reveal-grid");
  if(!("IntersectionObserver" in window)){
    els.forEach(function(e){ e.classList.add("in"); });
    return;
  }
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, {threshold:.1, rootMargin:"0px 0px -5% 0px"});
  els.forEach(function(e){ io.observe(e); });
  // Fallback: reveal elements already in viewport
  function checkViewport(){
    els.forEach(function(el){
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight && rect.bottom > 0){
        el.classList.add("in");
      }
    });
  }
  checkViewport();
  setTimeout(checkViewport, 50);
  setTimeout(checkViewport, 200);
  setTimeout(checkViewport, 500);
  window.addEventListener("akay:intro-complete", checkViewport);
}
document.addEventListener("DOMContentLoaded", initReveals);
if(document.readyState !== "loading") initReveals();
})();
