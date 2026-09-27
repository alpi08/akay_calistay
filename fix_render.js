const fs = require('fs');

const filePath = 'C:\\Users\\nails\\OneDrive\\Belgeler\\Default Project\\js\\interactions.js';
let content = fs.readFileSync(filePath, 'utf8');

const oldFunc = `  function renderSponsors(){
    // Tier 1 - Main Sponsors Grid
    const tier1Grid = document.getElementById("tier1Grid");
    if(tier1Grid){
      const l = lang();
      tier1Grid.innerHTML = "";
      tier1Sponsors.forEach(function(s, i){
        const card = document.createElement("div");
        card.className = "sponsor-card " + (s.tier || "tier1");
        card.style.transitionDelay = (i * 80) + "ms";
        const logoHtml = '<div class="sponsor-logo-placeholder" style="width:100%;max-width:180px;height:60px;margin:0 auto 16px;background:linear-gradient(135deg,rgba(212,165,52,.2),rgba(212,165,52,.05));border-radius:12px;display:flex;align-items:center;justify-content:center;color:rgba(212,165,52,.4);font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase">' + (l === "en" ? s.name_en : s.name_tr) + '</div>';
        card.innerHTML = logoHtml
          + '<h3 class="sponsor-name">' + (l === "en" ? s.name_en : s.name_tr) + '</h3>'
          + '<p class="sponsor-role">' + (l === "en" ? s.role_en : s.role_tr) + '</p>'
          + '<p class="sponsor-desc">' + (l === "en" ? s.desc_en : s.desc_tr) + '</p>'
          + '<a class="sponsor-link u-link" href="' + s.url + '" target="_blank" rel="noopener">' + (l === "en" ? "Visit Website" : "Web Sitesi") + ' <span class="arr">→</span></a>';
        tier1Grid.appendChild(card);
      });
    }

    // Tier 2 - Marquee
    const marqueeTrack = document.getElementById("marqueeTrack");
    if(marqueeTrack){
      const l = lang();
      marqueeTrack.innerHTML = "";
      // Duplicate items for seamless loop
      const items = [...tier2Sponsors, ...tier2Sponsors];
      items.forEach(function(s){
        const item = document.createElement("div");
        item.className = "marquee-item";
        const logoHtml = '<div class="marquee-logo-placeholder" style="width:100%;max-width:140px;height:50px;background:linear-gradient(135deg,rgba(168,85,247,.15),rgba(122,59,255,.1));border-radius:10px;display:flex;align-items:center;justify-content:center;color:rgba(168,85,247,.3);font-family:var(--mono);font-size:9px;letter-spacing:.2em;text-transform:uppercase">' + (l === "en" ? s.name_en : s.name_tr) + '</div>';
        item.innerHTML = logoHtml
          + '<span class="marquee-name">' + (l === "en" ? s.role_en : s.role_tr) + '</span>';
        marqueeTrack.appendChild(item);
      });
    }

    // Tier 3 - Partner Cards
    const tier3Grid = document.getElementById("tier3Grid");
    if(tier3Grid){
      const l = lang();
      tier3Grid.innerHTML = "";
      tier3Partners.forEach(function(p, i){
        const card = document.createElement("div");
        card.className = "partner-card";
        card.style.transitionDelay = (i * 60) + "ms";
        card.innerHTML = '<div class="partner-icon">' + (p.icon || "🤝") + '</div>'
          + '<h4 class="partner-name">' + (l === "en" ? p.name_en : p.name_tr) + '</h4>'
          + '<p class="partner-role">' + (l === "en" ? p.role_en : p.role_tr) + '</p>'
          + '<p style="font-family:var(--sans);font-size:clamp(.85rem,.9vw,.95rem);color:var(--ink-2);line-height:1.5;margin:0;text-align:center">' + (l === "en" ? p.desc_en : p.desc_tr) + '</p>'
          + '<a class="partner-link u-link" href="' + p.url + '" target="_blank" rel="noopener">' + (l === "en" ? "Visit" : "Ziyaret Et") + ' <span class="arr">→</span></a>';
        tier3Grid.appendChild(card);
      });
    }
  }`;

const newFunc = `  function renderSponsors(){
    // Tier 1 - Main Sponsors Grid
    const tier1Grid = document.getElementById("tier1Grid");
    if(tier1Grid){
      const l = lang();
      tier1Grid.innerHTML = "";
      tier1Sponsors.forEach(function(s, i){
        const card = document.createElement("div");
        card.className = "sponsor-card " + (s.tier || "tier1");
        card.style.transitionDelay = (i * 80) + "ms";
        const logoHtml = '<div class="sponsor-logo-placeholder" style="width:100%;max-width:180px;height:60px;margin:0 auto 16px;background:linear-gradient(135deg,rgba(212,165,52,.2),rgba(212,165,52,.05));border-radius:12px;display:flex;align-items:center;justify-content:center;color:rgba(212,165,52,.4);font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase">' + (l === "en" ? s.name_en : s.name_tr) + '</div>';
        card.innerHTML = logoHtml
          + '<h3 class="sponsor-name">' + (l === "en" ? s.name_en : s.name_tr) + '</h3>'
          + '<p class="sponsor-role">' + (l === "en" ? s.role_en : s.role_tr) + '</p>'
          + '<p class="sponsor-desc">' + (l === "en" ? s.desc_en : s.desc_tr) + '</p>'
          + '<a class="sponsor-link u-link" href="' + s.url + '" target="_blank" rel="noopener">' + (l === "en" ? "Visit Website" : "Web Sitesi") + ' <span class="arr">→</span></a>';
        tier1Grid.appendChild(card);
      });
      // Trigger reveal animation
      requestAnimationFrame(function(){ tier1Grid.classList.add("in"); });
    }

    // Tier 2 - Marquee
    const marqueeTrack = document.getElementById("marqueeTrack");
    if(marqueeTrack){
      const l = lang();
      marqueeTrack.innerHTML = "";
      // Duplicate items for seamless loop
      const items = [...tier2Sponsors, ...tier2Sponsors];
      items.forEach(function(s){
        const item = document.createElement("div");
        item.className = "marquee-item";
        const logoHtml = '<div class="marquee-logo-placeholder" style="width:100%;max-width:140px;height:50px;background:linear-gradient(135deg,rgba(168,85,247,.15),rgba(122,59,255,.1));border-radius:10px;display:flex;align-items:center;justify-content:center;color:rgba(168,85,247,.3);font-family:var(--mono);font-size:9px;letter-spacing:.2em;text-transform:uppercase">' + (l === "en" ? s.name_en : s.name_tr) + '</div>';
        item.innerHTML = logoHtml
          + '<span class="marquee-name">' + (l === "en" ? s.role_en : s.role_tr) + '</span>';
        marqueeTrack.appendChild(item);
      });
    }

    // Tier 3 - Partner Cards
    const tier3Grid = document.getElementById("tier3Grid");
    if(tier3Grid){
      const l = lang();
      tier3Grid.innerHTML = "";
      tier3Partners.forEach(function(p, i){
        const card = document.createElement("div");
        card.className = "partner-card";
        card.style.transitionDelay = (i * 60) + "ms";
        card.innerHTML = '<div class="partner-icon">' + (p.icon || "🤝") + '</div>'
          + '<h4 class="partner-name">' + (l === "en" ? p.name_en : p.name_tr) + '</h4>'
          + '<p class="partner-role">' + (l === "en" ? p.role_en : p.role_tr) + '</p>'
          + '<p style="font-family:var(--sans);font-size:clamp(.85rem,.9vw,.95rem);color:var(--ink-2);line-height:1.5;margin:0;text-align:center">' + (l === "en" ? p.desc_en : p.desc_tr) + '</p>'
          + '<a class="partner-link u-link" href="' + p.url + '" target="_blank" rel="noopener">' + (l === "en" ? "Visit" : "Ziyaret Et") + ' <span class="arr">→</span></a>';
        tier3Grid.appendChild(card);
      });
      // Trigger reveal animation
      requestAnimationFrame(function(){ tier3Grid.classList.add("in"); });
    }
  }`;

if (content.includes(oldFunc)) {
    content = content.replace(oldFunc, newFunc);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Replaced successfully');
} else {
    console.log('Old function not found - checking...');
    // Try to find the function
    const idx = content.indexOf('function renderSponsors()');
    if (idx >= 0) {
        console.log('Found at index:', idx);
        console.log(content.substring(idx, idx + 200));
    } else {
        console.log('Function not found at all');
    }
}