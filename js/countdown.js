/* countdown.js — Europe/Istanbul, 10 Oct 2026 09:00 +03:00 */
(function(){
"use strict";
const TARGET = new Date("2026-10-10T09:00:00+03:00").getTime();
const dEl = document.getElementById("cdD"), hEl = document.getElementById("cdH"),
      mEl = document.getElementById("cdM"), sEl = document.getElementById("cdS"),
      statusEl = document.getElementById("eventStatus"), cdWrap = document.getElementById("countdown");
function t(k){
  if(window.AkayI18n) return window.AkayI18n.t(k);
  return k;
}
function pad(n){ return String(n).padStart(2,"0"); }
function tick(force){
  const now = Date.now();
  const diff = TARGET - now;
  if(diff <= 0){
    if(statusEl) statusEl.textContent = t("status.live");
    if(cdWrap){ dEl.textContent="00"; hEl.textContent="00"; mEl.textContent="00"; sEl.textContent="00"; }
    return;
  }
  const d = Math.floor(diff/864e5), h = Math.floor(diff/36e5)%24,
        m = Math.floor(diff/6e4)%60, s = Math.floor(diff/1e3)%60;
  if(dEl){ dEl.textContent = pad(d); hEl.textContent = pad(h); mEl.textContent = pad(m); sEl.textContent = pad(s); }
  if(statusEl){
    const lang = window.AkayI18n ? window.AkayI18n.getLang() : "tr";
    const date = lang === "en" ? "10.10.2026" : "10.10.2026";
    statusEl.textContent = date + " · " + d + " " + t("status.soon");
  }
}
document.addEventListener("akay:lang", function(){ tick(true); });
document.addEventListener("DOMContentLoaded", function(){
  tick(true);
  setInterval(tick, 1000);
});
window.AkayCountdown = { tick:tick, TARGET:TARGET };
})();