/* main.js — init */
(function(){
"use strict";
document.addEventListener("DOMContentLoaded", function(){
  // asset fallbacks: never leave broken-image icons
  document.querySelectorAll("img").forEach(function(img){
    img.addEventListener("error", function(){ img.style.display = "none"; });
  });
});
})();
