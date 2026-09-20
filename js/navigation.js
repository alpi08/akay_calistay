/* navigation.js — scroll state, mobile menu, active link, progress */
(function(){
"use strict";
document.addEventListener("DOMContentLoaded", function(){
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  const progress = document.getElementById("topProgress");
  let ticking = false;

  function onScroll(){
    const y = window.scrollY || 0;
    nav.classList.toggle("scrolled", y > 24);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if(progress && h > 0) progress.style.transform = "scaleX(" + Math.min(1, y/h) + ")";
    // active link
    const ids = ["misyon","vizyon","etkinlik","komiteler","isbirlikleri","iletisim"];
    let current = null;
    for(const id of ids){
      const el = document.getElementById(id);
      if(el && el.getBoundingClientRect().top < window.innerHeight*0.4) current = id;
    }
    document.querySelectorAll(".nav-links a").forEach(function(a){
      a.classList.toggle("active", a.getAttribute("href") === "#"+current);
    });
    ticking = false;
  }
  window.addEventListener("scroll", function(){
    if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
  }, {passive:true});
  onScroll();

  function setMenu(open){
    document.body.classList.toggle("menu-open", open);
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
    menu.setAttribute("aria-hidden", open ? "false" : "true");
  }
  burger.addEventListener("click", function(){
    setMenu(!menu.classList.contains("open"));
  });
  menu.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){ setMenu(false); });
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && menu.classList.contains("open")){ setMenu(false); burger.focus(); }
  });
});
})();
