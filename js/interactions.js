/* interactions.js — committees explorer (data-driven, honest TBA) + timeline skeleton + cursor glow */
(function(){
"use strict";

// No fabricated academic topics: committees are placeholders until announced.
const committees = [
  { id:1, no:"01", key:"c1" },
  { id:2, no:"02", key:"c2" },
  { id:3, no:"03", key:"c3" },
  { id:4, no:"04", key:"c4" }
];
// Timeline skeleton — times deliberately left as TBA so example hours are never presented as fact.
const flow = [
  { time:"—",  tr:{title:"Kayıt", desc:"Katılımcı karşılama ve kayıt."}, en:{title:"Registration", desc:"Welcome and check-in."} },
  { time:"—",  tr:{title:"Açılış", desc:"Açılış konuşmaları ve çerçeve."}, en:{title:"Opening", desc:"Opening remarks and framing."} },
  { time:"—",  tr:{title:"Komite Oturumları I", desc:"Sabah oturumları."}, en:{title:"Committee Sessions I", desc:"Morning sessions."} },
  { time:"—",  tr:{title:"Ara", desc:"Öğle arası ve sosyalleşme."}, en:{title:"Break", desc:"Lunch break and networking."} },
  { time:"—",  tr:{title:"Komite Oturumları II", desc:"Öğleden sonra oturumları."}, en:{title:"Committee Sessions II", desc:"Afternoon sessions."} },
  { time:"—",  tr:{title:"Kapanış", desc:"Değerlendirme ve kapanış."}, en:{title:"Closing", desc:"Review and closing."} }
];
let activeComm = 0;

function lang(){ return window.AkayI18n ? window.AkayI18n.getLang() : "tr"; }
function t(k){ return window.AkayI18n ? window.AkayI18n.t(k) : k; }

function commTitle(i){
  const l = lang();
  const tba = t("comm.tba");
  return l === "en" ? ("Committee " + committees[i].no + " — " + tba) : ("Komite " + committees[i].no + " — " + tba);
}

function renderCommittees(){
  const list = document.getElementById("commList");
  if(!list) return;
  list.innerHTML = "";
  committees.forEach(function(c, i){
    const b = document.createElement("button");
    b.className = "comm-btn";
    b.setAttribute("role","tab");
    b.setAttribute("aria-selected", i === activeComm ? "true" : "false");
    b.innerHTML = '<span class="n">'+c.no+'</span><span><span class="t">'+commTitle(i)+'</span>'+
      '<span class="c">'+t("comm.tba")+'</span></span><span class="go" aria-hidden="true">→</span>';
    b.addEventListener("click", function(){ selectComm(i); });
    b.addEventListener("keydown", function(e){
      if(e.key === "ArrowDown"){ e.preventDefault(); selectComm((i+1)%committees.length); focusBtn((i+1)%committees.length); }
      if(e.key === "ArrowUp"){ e.preventDefault(); selectComm((i-1+committees.length)%committees.length); focusBtn((i-1+committees.length)%committees.length); }
    });
    list.appendChild(b);
  });
  renderCommDetail(false);
}
function focusBtn(i){
  const btns = document.querySelectorAll("#commList .comm-btn");
  if(btns[i]) btns[i].focus();
}
function renderCommDetail(animate){
  const fade = document.getElementById("commFade");
  const cat = document.getElementById("commCat"), title = document.getElementById("commTitle"),
        desc = document.getElementById("commDesc"), m1 = document.getElementById("commMeta1"), m2 = document.getElementById("commMeta2");
  if(!fade) return;
  function fill(){
    cat.textContent = committees[activeComm].no + " · " + t("comm.tba");
    title.textContent = commTitle(activeComm);
    desc.textContent = t("comm.soonBody");
    m1.textContent = t("comm.metaA") + ": TBA";
    m2.textContent = t("comm.metaB") + ": @akay_calistay";
  }
  if(animate !== false){
    fade.classList.add("swap");
    setTimeout(function(){ fill(); fade.classList.remove("swap"); }, 180);
  } else fill();
}
function selectComm(i){
  activeComm = i;
  document.querySelectorAll("#commList .comm-btn").forEach(function(b, j){
    b.setAttribute("aria-selected", j === i ? "true" : "false");
  });
  renderCommDetail(true);
}

function renderTimeline(){
  const tl = document.getElementById("timeline");
  if(!tl) return;
  const l = lang();
  tl.querySelectorAll(".tl-item").forEach(function(n){ n.remove(); });
  flow.forEach(function(f){
    const d = document.createElement("div");
    d.className = "tl-item";
    const loc = l === "en" ? f.en : f.tr;
    d.innerHTML = '<div class="tl-time">'+f.time+'</div><h3>'+loc.title+'</h3><p>'+loc.desc+'</p>';
    tl.appendChild(d);
  });
  observeTimeline();
}

let tlObserver = null;
function observeTimeline(){
  const items = document.querySelectorAll(".tl-item");
  const bar = document.getElementById("tlProgress");
  if(tlObserver) tlObserver.disconnect();
  tlObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) e.target.classList.add("active");
    });
    const act = document.querySelectorAll(".tl-item.active").length;
    if(bar && items.length) bar.style.transform = "scaleY(" + (act/items.length) + ")";
  }, {threshold:.6});
  items.forEach(function(i){ tlObserver.observe(i); });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer:fine)").matches;

/* Hero: fare paralaksı (logo + başlık hafif ters yön) + scroll derinliği */
function initHeroDepth(){
  const hero = document.querySelector(".hero");
  const inner = document.querySelector(".hero-inner");
  const logo = document.querySelector(".hero-logo");
  const title = document.querySelector(".hero-title");
  if(!hero || !inner || reduceMotion) return;
  let mx = 0, my = 0, cx = 0, cy = 0, raf = null;
  function loop(){
    cx += (mx - cx) * .06; cy += (my - cy) * .06;
    if(logo) logo.style.transform = "translate(" + (cx*14) + "px," + (cy*10) + "px)";
    if(title) title.style.transform = "translate(" + (cx*-10) + "px," + (cy*-8) + "px)";
    if(Math.abs(mx-cx) > .001 || Math.abs(my-cy) > .001) raf = requestAnimationFrame(loop);
    else raf = null;
  }
  // giriş animasyonu bitince bırak ki paralaks transform'u ezilmesin
  if(logo) logo.addEventListener("animationend", function(){ logo.style.animation = "none"; });
  if(finePointer){
    hero.addEventListener("pointermove", function(e){
      const r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - .5;
      my = (e.clientY - r.top) / r.height - .5;
      if(!raf) loop();
    }, {passive:true});
    hero.addEventListener("pointerleave", function(){ mx = 0; my = 0; if(!raf) loop(); }, {passive:true});
  }
  // scroll: içerik yükselip solsun — sinematik çıkış
  let ticking = false;
  window.addEventListener("scroll", function(){
    if(ticking) return; ticking = true;
    requestAnimationFrame(function(){
      const y = window.scrollY || 0;
      const h = hero.offsetHeight || 1;
      const p = Math.min(1, y / h);
      if(p < 1){
        inner.style.transform = "translateY(" + (p * -70) + "px)";
        inner.style.opacity = String(Math.max(0, 1 - p * 1.1));
      }
      ticking = false;
    });
  }, {passive:true});
}

/* Butonlarda hafif manyetik his (max 6px, sadece desktop) */
function initMagnetic(){
  if(!finePointer || reduceMotion) return;
  document.querySelectorAll(".btn").forEach(function(b){
    b.addEventListener("pointermove", function(e){
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) / (r.width/2);
      const y = (e.clientY - r.top - r.height/2) / (r.height/2);
      b.style.transform = "translate(" + (x*6) + "px," + (y*4) + "px)";
    });
    b.addEventListener("pointerleave", function(){ b.style.transform = ""; });
  });
}

document.addEventListener("DOMContentLoaded", function(){
  renderCommittees();
  renderTimeline();
  initHeroDepth();
  initMagnetic();
  // subtle cursor glow — desktop, fine pointer only
  const glow = document.getElementById("cursorGlow");
  if(glow && window.matchMedia("(pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    let x=0,y=0,gx=0,gy=0,raf=null;
    window.addEventListener("pointermove", function(e){
      x=e.clientX; y=e.clientY; glow.style.opacity="1";
      if(!raf) loop();
    }, {passive:true});
    function loop(){
      gx += (x-gx)*.08; gy += (y-gy)*.08;
      glow.style.transform = "translate("+(gx-260)+"px,"+(gy-260)+"px)";
      if(Math.abs(x-gx)>.5 || Math.abs(y-gy)>.5) raf = requestAnimationFrame(loop);
      else raf = null;
    }
  }
  // hero video: pause when offscreen / on mobile data-saver
  const v = document.getElementById("heroVideo");
  if(v){
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){ v.pause(); v.removeAttribute("autoplay"); }
    else if("IntersectionObserver" in window){
      new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ v.play().catch(function(){}); } else { v.pause(); } });
      }).observe(v);
    }
    v.addEventListener("error", function(){ v.style.display="none"; }, true);
  }
});

window.AkayCommittees = { render:renderCommittees };
window.AkayTimeline = { render:renderTimeline };
})();
