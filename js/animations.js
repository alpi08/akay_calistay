/* animations.js — IntersectionObserver reveals */
(function(){
"use strict";
document.addEventListener("DOMContentLoaded", function(){
  const els = document.querySelectorAll(".reveal,.reveal-line,.clip-title");
  if(!("IntersectionObserver" in window)){
    els.forEach(function(e){ e.classList.add("in"); });
    return;
  }
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, {threshold:.15, rootMargin:"0px 0px -8% 0px"});
  els.forEach(function(e){ io.observe(e); });
});
})();
