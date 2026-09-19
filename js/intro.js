/* intro.js — sahneli giriş: logo + halka + sayaç, sonra perde gibi açılır */
(function(){
"use strict";
document.body.classList.add("intro-lock");
var finished = false;
function removeIntro(){
  var intro = document.getElementById("intro");
  document.body.classList.remove("intro-lock");
  if(intro && intro.parentNode) intro.parentNode.removeChild(intro);
}
function finish(){
  if(finished) return; finished = true;
  var intro = document.getElementById("intro");
  document.body.classList.remove("intro-lock"); // hero animasyonları perdenin altında başlasın
  if(!intro){ removeIntro(); return; }
  intro.classList.add("leaving");
  setTimeout(removeIntro, 950);
}
function ready(fn){
  if(document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
}
ready(function(){
  var intro = document.getElementById("intro");
  if(!intro){ document.body.classList.remove("intro-lock"); return; }
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    finished = true; removeIntro(); return;
  }
  var fill = document.getElementById("introBarFill");
  var num = document.getElementById("introCount");
  var DURATION = 1500, t0 = null;
  function pad(n){ n = Math.floor(n); return (n < 10 ? "0" : "") + n; }
  function step(ts){
    if(finished) return;
    if(t0 === null) t0 = ts;
    var p = Math.min(1, (ts - t0) / DURATION);
    var eased = 1 - Math.pow(1 - p, 2); // easeOut
    var pct = Math.round(eased * 100);
    if(fill) fill.style.width = pct + "%";
    if(num) num.textContent = pad(pct);
    if(p < 1) requestAnimationFrame(step);
    else setTimeout(finish, 250);
  }
  requestAnimationFrame(step);
  setTimeout(finish, 4000); // güvenlik perdesi
  intro.addEventListener("click", finish);
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") finish(); });
});
})();
