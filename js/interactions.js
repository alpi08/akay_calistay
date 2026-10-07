/* interactions.js - committees explorer (data-driven, honest TBA) + 2-column schedule grid + cursor glow */
(function(){
  "use strict";

  // No fabricated academic topics: committees are placeholders until announced.
  const committees = [
    { 
      id:1, no:"01", key:"c1",
      tr:"Hukuk Komitesi", en:"Law Committee",
      desc_tr:"Bir davranışın yanlış olması onu hukuken de yanlış yapar mı? Hukuk yalnızca kurallardan mı ibarettir, yoksa toplumun adalet anlayışını da yansıtır mı? Hukuk Komitesi, hukukun temel kavramlarını ve toplumsal işlevini akademik bir tartışma ortamında ele alıyor. Katılımcılar çeşitli hukuki problemler üzerinden farklı görüşleri savunacak, hukuk ile adalet arasındaki ilişkiyi ve hukukun toplumsal hayattaki rolünü sorgulayacak.",
      desc_en:"Does a wrongful act make it legally wrong? Is law merely rules, or does it reflect society's concept of justice? The Law Committee examines law's fundamental concepts and social function in an academic discussion setting. Participants will defend various viewpoints on legal problems, questioning the relationship between law and justice and law's role in social life."
    },
    { 
      id:2, no:"02", key:"c2",
      tr:"Siyaset ve Uluslararası İlişkiler Komitesi", en:"Politics and International Relations Committee",
      desc_tr:"Devletlerin kararlarını yalnızca kendi sınırları içerisinde değerlendirmek mümkün müdür? Güç, çıkar, diplomasi ve ideolojiler uluslararası sistemi nasıl şekillendirir? Siyaset ve Uluslararası İlişkiler Komitesi, devletler arasındaki ilişkilerden siyasal düşüncelere, güncel meselelerden tarihsel kırılmalara uzanan geniş bir perspektifte siyaseti tartışmaya açıyor. Katılımcılar, akademik rehberler doğrultusunda konuları inceleyerek farklı görüşleri savunacak; moderatörlerin yönlendirdiği tartışmalarla siyasetin görünen yüzünün ardındaki dinamikleri sorgulayacak.",
      desc_en:"Can state decisions be evaluated only within their own borders? How do power, interests, diplomacy and ideologies shape the international system? The Politics and International Relations Committee opens politics to discussion from a broad perspective spanning interstate relations to political thought, current issues to historical turning points. Guided by academic mentors, participants will examine topics and defend different viewpoints; through moderator-led discussions they will question the dynamics behind politics' visible face."
    },
    { 
      id:3, no:"03", key:"c3",
      tr:"Kadın Hakları Komitesi", en:"Women's Rights Committee",
      desc_tr:"Kadın hakları yalnızca hukuki eşitlik meselesi midir? Toplumsal roller, eğitim, çalışma hayatı, siyaset ve kültür kadınların toplumdaki konumunu nasıl şekillendiriyor? Kadın Hakları Komitesi, kadınların toplumsal hayattaki konumunu tarihsel, hukuki, siyasal ve sosyolojik perspektiflerden ele alıyor. Katılımcılar, farklı yaklaşımları karşılaştırarak eşitlik kavramının anlamını ve kadın haklarının günümüzde karşı karşıya olduğu meseleleri tartışmaya açacak.",
      desc_en:"Are women's rights merely a matter of legal equality? How do social roles, education, work life, politics and culture shape women's position in society? The Women's Rights Committee addresses women's position in social life from historical, legal, political and sociological perspectives. Participants will compare different approaches to discuss the meaning of equality and the issues women's rights face today."
    },
    { 
      id:4, no:"04", key:"c4",
      tr:"Yapay Zeka ve Teknoloji Komitesi", en:"Artificial Intelligence and Technology Committee",
      desc_tr:"Bir makine karar verebiliyorsa, verdiği kararın sorumluluğu kime aittir? Yapay zekâ insanın yerini mi alacak, yoksa insanın yeteneklerini dönüştüren yeni bir araç mı olacak? Yapay Zeka Komitesi, teknolojik gelişmeleri yalnızca teknik açıdan değil; etik, hukuki, ekonomik ve toplumsal boyutlarıyla ele alıyor. Katılımcılar, yapay zekânın geleceğine ilişkin farklı perspektifleri tartışırken teknolojinin sınırlarını ve insan hayatındaki yerini sorgulayacak.",
      desc_en:"If a machine can make decisions, who bears responsibility for those decisions? Will AI replace humans, or become a new tool transforming human capabilities? The AI Committee addresses technological developments not only technically but also through ethical, legal, economic and social dimensions. Participants will question technology's limits and place in human life while discussing different perspectives on AI's future."
    },
    { 
      id:5, no:"05", key:"c5",
      tr:"Sanat Tarihi Komitesi", en:"Art History Committee",
      desc_tr:"Bir sanat eserine baktığımızda yalnızca bir estetik obje mi görürüz, yoksa üretildiği dönemin zihniyetini ve toplumsal dönüşümlerini mi? Sanat, dünyayı anlama ve ifade etme biçimimizi nasıl şekillendirir? Sanat Tarihi Komitesi, ilk çağlardan günümüze uzanan geniş bir yelpazede sanat akımlarını, görsel kültürü ve toplumsal kırılmaların sanata yansımasını tartışmaya açacaktır ve katılımcılar; estetik, ifade özgürlüğü ve kültürel miras gibi kavramlar üzerinden sanatı yorumlayarak eserlerin arkasındaki tarihsel dinamikleri sorgulayacaktır.",
      desc_en:"When we look at an artwork, do we see only an aesthetic object, or the mindset and social transformations of its era? How does art shape our way of understanding and expressing the world? The Art History Committee opens discussion on art movements, visual culture and the reflection of social ruptures in art from antiquity to today. Participants will interpret art through concepts of aesthetics, freedom of expression and cultural heritage, questioning the historical dynamics behind works."
    },
    { 
      id:6, no:"06", key:"c6",
      tr:"Sosyoloji Komitesi", en:"Sociology Committee",
      desc_tr:"İçinde yaşadığımız toplum bizi ne ölçüde şekillendiriyor? Birey toplumu mu oluşturur, yoksa toplum mu bireyi biçimlendirir? Sosyoloji Komitesi, birey ile toplum arasındaki ilişkiyi; kültür, sınıf, kimlik, modernleşme, yabancılaşma ve toplumsal değişim gibi başlıklar üzerinden tartışmaya açıyor. Katılımcılar, farklı sosyolojik perspektifleri karşı karşıya getirerek günlük hayatın ardındaki toplumsal yapıları sorgulayacak.",
      desc_en:"To what extent does the society we live in shape us? Does the individual create society, or does society shape the individual? The Sociology Committee opens the individual-society relationship for discussion through topics like culture, class, identity, modernization, alienation and social change. Participants will juxtapose different sociological perspectives to question the social structures behind everyday life."
    },
    { 
      id:7, no:"07", key:"c7",
      tr:"Psikoloji Komitesi", en:"Psychology Committee",
      desc_tr:"İnsan davranışlarını gerçekten ne belirler? Bireyin kararlarında çevresinin, geçmiş deneyimlerinin ve zihinsel süreçlerinin payı nedir? Psikoloji Komitesi, insan davranışını farklı psikolojik yaklaşımlar üzerinden ele alarak bireyin zihinsel dünyasını tartışmaya açıyor. Katılımcılar yalnızca psikolojik kavramları öğrenmekle kalmayacak; bu kavramların gerçek hayattaki davranışları açıklamadaki gücünü ve sınırlarını da sorgulayacak.",
      desc_en:"What truly determines human behavior? What share do environment, past experiences and mental processes have in an individual's decisions? The Psychology Committee opens the human mental world for discussion through different psychological approaches. Participants will not only learn psychological concepts but also question their power and limits in explaining real-life behaviors."
    },
    { 
      id:8, no:"08", key:"c8",
      tr:"Kriz Komitesi", en:"Crisis Committee",
      desc_tr:"Burada kurallar değişiyor. Kriz Komitesi, klasik komite düzeninin dışına çıkarak katılımcıları gelişen bir olayın doğrudan içerisine dahil ediyor. Bir savaş, siyasi çöküş, küresel kriz ya da tamamen kurgusal bir senaryo... Olaylar ilerledikçe yeni bilgiler ortaya çıkacak ve delegelerin kararları hikâyenin gidişatını değiştirecek. Film, dizi ve oyunların dramatik yapısından da beslenebilen bu komitede mesele yalnızca \"ne düşünüyorsun?\" değil; \"şimdi ne yapacaksın?\" sorusuna cevap vermek.",
      desc_en:"Here the rules change. The Crisis Committee steps outside classic committee format to place participants directly inside an unfolding event. A war, political collapse, global crisis or entirely fictional scenario... As events progress, new information emerges and delegates' decisions alter the story's course. Drawing from film, series and game dramatic structures, this committee asks not just \"what do you think?\" but \"what will you do now?\""
    },
    { 
      id:9, no:"09", key:"c9",
      tr:"Felsefe Komitesi", en:"Philosophy Committee",
      desc_tr:"Felsefe Komitesi; epistemoloji, etik, ontoloji ve siyaset felsefesinin temel problemlerini ele alarak ilk çağlardan günümüze kadar insanlığın zihnini kurcalayan temel soruları ve kavramsal çelişkileri tartışmaya açmaktadır. Katılımcılar; etik, bilgi anlayışı ve varoluş gibi başlıklar üzerinden farklı felsefi yaklaşımları karşılaştıracak, soyut düşüncelerin günlük hayattaki karşılıklarını sorgulayarak diğer delegelere karşı kendi argümanlarını savunacaktır.",
      desc_en:"The Philosophy Committee addresses fundamental problems of epistemology, ethics, ontology and political philosophy, opening for discussion the fundamental questions and conceptual conflicts that have probed humanity's mind from antiquity to today. Participants will compare different philosophical approaches on ethics, epistemology and existence, question abstract ideas' real-life correlates, and defend their arguments against fellow delegates."
    }
  ];
  
  // Committee Chairs data
      const chairs = [
    { id:1, committee:"Genel Koordinasyon", tr:"Zeynep Beril Köseoğlu", en:"Zeynep Beril Köseoğlu", role_tr:"Genel Koordinatör", role_en:"General Coordinator", bio_tr:"Genel koordinatörlük görevini yürütüyor.", bio_en:"Serves as General Coordinator.", img:"gorseller/Zeynep_beril_kose_GK.png" },
    { id:2, committee:"Genel Koordinasyon", tr:"Eylül Ulubulut", en:"Eylül Ulubulut", role_tr:"Genel Koordinatör", role_en:"General Coordinator", bio_tr:"Genel koordinatörlük görevini yürütüyor.", bio_en:"Serves as General Coordinator.", img:"gorseller/Eylul_ulubulut_GK.png" },
    { id:3, committee:"Tasarım ve Medya Komitesi", tr:"Vera Kendirci", en:"Vera Kendirci", role_tr:"Tasarım ve Medya Başkanı", role_en:"Design & Media Chair", bio_tr:"Tasarım ve Medya komitesinde başkanlık görevini yürütüyor.", bio_en:"Serves as Design & Media chair.", img:"gorseller/Vera_kendirici_TASARIM.png" },
    { id:4, committee:"IT Komitesi", tr:"Nail Alparslan Silman", en:"Nail Alparslan Silman", role_tr:"IT Başkanı", role_en:"IT Chair", bio_tr:"IT komitesinde başkanlık görevini yürütüyor.", bio_en:"Serves as IT chair.", img:"gorseller/Nail_alparslan_silman_IT.png" },
    { id:5, committee:"PR Komitesi", tr:"Zehra Şayir", en:"Zehra Şayir", role_tr:"PR Eşbaşkan", role_en:"PR Co-Chair", bio_tr:"PR komitesinde aktif görev alıyor.", bio_en:"Active role in PR committee.", img:"gorseller/Zehra_sayir_PR.png" },
    { id:6, committee:"PR Komitesi", tr:"Betül Su Pulurlu", en:"Betül Su Pulurlu", role_tr:"PR Eş Başkan", role_en:"PR Co-Chair", bio_tr:"PR komitesinde eş başkanlık görevini yürütüyor.", bio_en:"Serves as PR co-chair.", img:"gorseller/Betul_su_pulurlu_PR.png" },
    { id:7, committee:"PR Komitesi", tr:"Beren Ak", en:"Beren Ak", role_tr:"PR Başkan Yardımcısı", role_en:"PR Vice Chair", bio_tr:"PR komitesinde başkan yardımcılığı yapıyor.", bio_en:"Serves as PR vice chair.", img:"gorseller/Beren_ak_PR_yardimci.png" },
    { id:8, committee:"Press Komitesi", tr:"Emin Taş", en:"Emin Taş", role_tr:"Press Eş Başkanı", role_en:"Press Co-Chair", bio_tr:"Press komitesinde eş başkanlık görevini yürütüyor.", bio_en:"Serves as Press co-chair.", img:"gorseller/Emin_tas_PRESS.png" },
    { id:9, committee:"Press Komitesi", tr:"Nisa Damar", en:"Nisa Damar", role_tr:"Press Eş Başkan", role_en:"Press Co-Chair", bio_tr:"Press komitesinde eş başkanlık görevini yürütüyor.", bio_en:"Serves as Press co-chair.", img:"gorseller/Nisa_damar_PRESS.png" },
    { id:10, committee:"İnsan Kaynakları Komitesi", tr:"Pelin Armağan", en:"Pelin Armağan", role_tr:"Eş İnsan Kaynakları Başkanı", role_en:"HR Co-Chair", bio_tr:"İK komitesinde eş başkanlık görevini yürütüyor.", bio_en:"Serves as HR co-chair.", img:"gorseller/Pelin_armagan_IK.png" },
    { id:11, committee:"İnsan Kaynakları Komitesi", tr:"Atlas Ataibiş", en:"Atlas Ataibiş", role_tr:"Eş İnsan Kaynakları Başkanı", role_en:"HR Co-Chair", bio_tr:"İK komitesinde eş başkanlık görevini yürütüyor.", bio_en:"Serves as HR co-chair.", img:"gorseller/Atlas_ataibis_IK.png" },
    { id:12, committee:"Aka Komitesi", tr:"Zeynep Meryem Köseoğlu", en:"Zeynep Meryem Köseoğlu", role_tr:"Aka Başkanı", role_en:"Aka Chair", bio_tr:"Aka komitesinde başkanlık görevini yürütüyor.", bio_en:"Serves as Aka chair.", img:"gorseller/Zeynep_meryem_koseoglu_AKA.png" },
    { id:13, committee:"Saha Komitesi", tr:"Eren Keklik", en:"Eren Keklik", role_tr:"Saha Eş Başkan", role_en:"Field Co-Chair", bio_tr:"Saha komitesinde eş başkanlık görevini yürütüyor.", bio_en:"Serves as Field co-chair.", img:"gorseller/Eren_keklik_SAHA.png" },
    { id:14, committee:"Saha Komitesi", tr:"Elif Nil Çamoğlu", en:"Elif Nil Çamoğlu", role_tr:"Saha Eş Başkan", role_en:"Field Co-Chair", bio_tr:"Saha komitesinde eş başkanlık görevini yürütüyor.", bio_en:"Serves as Field co-chair.", img:"gorseller/Elif_nil_camoglu_SAHA.png" },
    { id:15, committee:"Finans Komitesi", tr:"Ali Emre Aktün", en:"Ali Emre Aktün", role_tr:"Finans Başkan Yardımcısı", role_en:"Finance Vice Chair", bio_tr:"Finans komitesinde başkan yardımcılığı yapıyor.", bio_en:"Serves as Finance vice chair.", img:"gorseller/Ali_emre_aktun_FINANS.png" },
    { id:16, committee:"Finans Komitesi", tr:"Nice Özcan", en:"Nice Özcan", role_tr:"Finans Eş Başkan", role_en:"Finance Co-Chair", bio_tr:"Finans komitesinde eş başkanlık görevini yürütüyor.", bio_en:"Serves as Finance co-chair.", img:"gorseller/Nice_ozcan_FINANS.png" }
  ];;

  // Sponsor data for premium section
    // Sponsor data - Cinematic Main Partners Only
  const sponsors = [
    { id:1, name_tr:"VERTEX", name_en:"VERTEX", role_tr:"AI Sponsoru", role_en:"AI Sponsor", desc_tr:"Yapay zeka çözümleri ile geleceği şekillendiren teknoloji lideri.", desc_en:"Technology leader shaping the future with AI solutions.", url:"https://vertexishere.com/tr/", logo:"" },
    { id:2, name_tr:"BANNA", name_en:"BANNA", role_tr:"IT Sponsoru", role_en:"IT Sponsor", desc_tr:"Modern yazılım altyapısı ve geliştirici deneyimi için yenilikçi çözümler.", desc_en:"Innovative solutions for modern software infrastructure and developer experience.", url:"https://trybanna.com/", logo:"" },
    { id:3, name_tr:"WeCampus", name_en:"WeCampus", role_tr:"Eğitim Teknolojisi Sponsoru", role_en:"EdTech Sponsor", desc_tr:"Kampüs hayatını dijitalleştiren, öğrenci deneyimini dönüştüren platform.", desc_en:"Platform digitizing campus life, transforming student experience.",
url:"https://wecampus.app/tr", logo:"" },
    { id:4, name_tr:"CORD DESIGN", name_en:"CORD DESIGN", role_tr:"Grafik / Sosyal Medya Sponsoru", role_en:"Creative & Social Media Sponsor", desc_tr:"Marka kimlikleri yaratan, dijital hikayeler anlatan tasarım stüdyosu.", desc_en:"Design studio crafting brand identities, telling digital stories.",
url:"https://www.instagram.com/ccorddesign/", logo:"" }
  ];// Schedule data - exact program from user
  // Day 1: 10 Ekim / Day 2: 11 Ekim
  const flow = [
    // 1. Gün (10 Ekim)
    { day: 1, date: "10 Ekim", time:"08:00 – 09:00",  tr:{title:"Kayıt ve Kahvaltı", desc:"Katılımcı kayıtları ve açılış kahvaltısı."}, en:{title:"Registration & Breakfast", desc:"Participant check-in and opening breakfast."} },
    { day: 1, date: "10 Ekim", time:"09:00 – 10:00",  tr:{title:"Açılış Konferansı", desc:"Çalıştay vizyonu ve amaçlarının paylaşılması."}, en:{title:"Opening Conference", desc:"Workshop vision and objectives shared."} },
    { day: 1, date: "10 Ekim", time:"10:00 – 11:00",  tr:{title:"1. Oturum", desc:"Kültür ve köken: Kimlik, dil ve bellek."}, en:{title:"Session 1", desc:"Culture & roots: Identity, language, and memory."} },
    { day: 1, date: "10 Ekim", time:"11:00 – 11:30",  tr:{title:"Mola", desc:"Kahve ve sohbet arası."}, en:{title:"Break", desc:"Coffee and conversation."} },
    { day: 1, date: "10 Ekim", time:"11:30 – 12:40",  tr:{title:"2. Oturum", desc:"Tarih ve dünya: Geçişten geleceğe bakış."}, en:{title:"Session 2", desc:"History & world: From transition to future outlook."} },
    { day: 1, date: "10 Ekim", time:"12:40 – 14:00",  tr:{title:"Öğle Molası", desc:"Yemek ve dinlenme."}, en:{title:"Lunch Break", desc:"Meal and rest."} },
    { day: 1, date: "10 Ekim", time:"14:00 – 15:10",  tr:{title:"3. Oturum", desc:"Donanım ve hitabet: Fikri ifade etme sanatı."}, en:{title:"Session 3", desc:"Intellect & oratory: The art of expressing ideas."} },
    { day: 1, date: "10 Ekim", time:"15:10 – 15:50",  tr:{title:"Mola", desc:"Kahve ve sohbet arası."}, en:{title:"Break", desc:"Coffee and conversation."} },
    { day: 1, date: "10 Ekim", time:"15:50 – 17:00",  tr:{title:"4. Oturum", desc:"Entegrasyon: Perspektif birleştirme atölyesi."}, en:{title:"Session 4", desc:"Integration: Perspective synthesis workshop."} },

    // 2. Gün (11 Ekim)
    { day: 2, date: "11 Ekim", time:"08:00 – 09:00",  tr:{title:"Kahvaltı", desc:"İkinci gün açılış kahvaltısı."}, en:{title:"Breakfast", desc:"Second day opening breakfast."} },
    { day: 2, date: "11 Ekim", time:"09:00 – 10:10",  tr:{title:"5. Oturum", desc:"Derinlemesine: Konu odaklı çalışma grupları."}, en:{title:"Session 5", desc:"Deep dive: Topic-focused working groups."} },
    { day: 2, date: "11 Ekim", time:"10:10 – 10:50",  tr:{title:"Mola", desc:"Kahve ve sohbet arası."}, en:{title:"Break", desc:"Coffee and conversation."} },
    { day: 2, date: "11 Ekim", time:"10:50 – 12:00",  tr:{title:"6. Oturum", desc:"Uygulama: Proje geliştirme ve sunum hazırlığı."}, en:{title:"Session 6", desc:"Application: Project development & presentation prep."} },
    { day: 2, date: "11 Ekim", time:"12:00 – 13:30",  tr:{title:"Öğle Molası", desc:"Yemek ve dinlenme."}, en:{title:"Lunch Break", desc:"Meal and rest."} },
    { day: 2, date: "11 Ekim", time:"13:30 – 14:40",  tr:{title:"7. Oturum", desc:"Sunumlar: Grup çalışmalarının paylaşımı."}, en:{title:"Session 7", desc:"Presentations: Group work sharing."} },
    { day: 2, date: "11 Ekim", time:"14:40 – 15:20",  tr:{title:"Mola", desc:"Kahve ve sohbet arası."}, en:{title:"Break", desc:"Coffee and conversation."} },
    { day: 2, date: "11 Ekim", time:"15:20 – 16:30",  tr:{title:"8. Oturum", desc:"Değerlendirme ve geri bildirim."}, en:{title:"Session 8", desc:"Evaluation and feedback."} },
    { day: 2, date: "11 Ekim", time:"16:30 – 17:10",  tr:{title:"Mola", desc:"Kapanış öncesi son mola."}, en:{title:"Break", desc:"Final break before closing."} },
    { day: 2, date: "11 Ekim", time:"17:10 – 18:30",  tr:{title:"Kapanış Konferansı", desc:"Sertifika, teşekkürler ve gelecek vizyonu."}, en:{title:"Closing Conference", desc:"Certificates, thanks, and future vision."} }
  ];
  let activeComm = 0;

  function lang(){ return (window.AkayI18n && window.AkayI18n.getLang) ? window.AkayI18n.getLang() : "tr"; }
  function t(k){ return window.AkayI18n ? window.AkayI18n.t(k) : k; }

  function commTitle(i){
    const l = lang();
    return l === "en" ? committees[i].en : committees[i].tr;
  }

  function renderCommittees(){
    const list = document.getElementById("commList");
    if(!list) return;
    const l = lang();
    list.innerHTML = "";
    committees.forEach(function(c, i){
      const b = document.createElement("button");
      b.className = "comm-btn";
      b.setAttribute("role","tab");
      b.setAttribute("aria-selected", i === activeComm ? "true" : "false");
      b.setAttribute("aria-controls","commPanel");
      b.setAttribute("aria-expanded", i === activeComm ? "true" : "false");
      b.innerHTML = '<span class="n">'+c.no+'</span><span class="t">'+commTitle(i)+'</span><span class="go" aria-hidden="true">\u2192</span>';
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
      const c = committees[activeComm];
      const l = lang();
      cat.textContent = c.no;
      title.textContent = commTitle(activeComm);
      desc.textContent = l === "en" ? c.desc_en : c.desc_tr;
      m1.textContent = "";
      m2.textContent = "";
    }
    if(animate !== false){
      fade.classList.add("swap");
      setTimeout(function(){ fill(); fade.classList.remove("swap"); }, 180);
    } else fill();
  }
  function selectComm(i){
    const btns = document.querySelectorAll("#commList .comm-btn");
    const clickedBtn = btns[i];
    const panel = document.getElementById("commPanel");
    const isSame = activeComm === i;
    
    // Toggle: if same button clicked again, close panel
    if(isSame && panel && panel.style.display === "block"){
      panel.style.animation = "slideUp .25s var(--ease) reverse";
      setTimeout(function(){ panel.style.display = "none"; }, 250);
      btns.forEach(function(b){ b.setAttribute("aria-selected", "false"); b.setAttribute("aria-expanded", "false"); b.classList.remove("expanded"); });
      activeComm = -1;
      return;
    }
    
    activeComm = i;
    btns.forEach(function(b, j){
      b.setAttribute("aria-selected", j === i ? "true" : "false");
      b.setAttribute("aria-expanded", j === i ? "true" : "false");
      b.classList.toggle("expanded", j === i);
    });
    renderCommDetail(true);
    
    // Move panel under clicked button
    if(panel && clickedBtn){
      panel.style.display = "none";
      clickedBtn.parentNode.insertBefore(panel, clickedBtn.nextSibling);
      requestAnimationFrame(function(){
        panel.style.display = "block";
        panel.style.animation = "slideDown .35s var(--ease)";
      });
    }
  }

  // ===== 2-COLUMN SCHEDULE GRID =====
  function renderTimeline(){
    const tl = document.getElementById("timeline");
    if(!tl) return;
    const l = lang();
    tl.innerHTML = "";
    tl.className = "schedule-grid";

    // Group sessions by day
    const day1Sessions = flow.filter(f => f.day === 1);
    const day2Sessions = flow.filter(f => f.day === 2);

    // Create Day 1 column
    const col1 = document.createElement("div");
    col1.className = "schedule-col glass-card in";
    col1.innerHTML = buildDayColumn(day1Sessions, 1, l);
    tl.appendChild(col1);

    // Create Day 2 column
    const col2 = document.createElement("div");
    col2.className = "schedule-col glass-card in";
    col2.innerHTML = buildDayColumn(day2Sessions, 2, l);
    tl.appendChild(col2);

    // Animate sessions on scroll
    observeSchedule();
  }

  function buildDayColumn(sessions, dayNum, langCode) {
    const dayKey = dayNum === 1 ? "flow.day1" : "flow.day2";
    let dayLabel = langCode === "en" ? "DAY 2 (OCTOBER 11, 2026)" : "2. GÜN (11 EKİM 2026)";
    if(dayNum === 1) {
      dayLabel = langCode === "en" ? "DAY 1 (OCTOBER 10, 2026)" : "1. GÜN (10 EKİM 2026)";
    }
    let html = '<div class="schedule-day-header"><span class="day-label" data-i18n="' + dayKey + '">' + dayLabel + '</span></div>';
    html += '<div class="schedule-sessions">';
    sessions.forEach(function(f, i) {
      const loc = langCode === "en" ? f.en : f.tr;
      html += '<div class="schedule-session in">';
      html += '  <div class="session-time">' + f.time + '</div>';
      html += '  <div class="session-info">';
      html += '    <h3>' + loc.title + '</h3>';
      html += '    <p>' + loc.desc + '</p>';
      html += '  </div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  let scheduleObserver = null;
  function observeSchedule(){
    const items = document.querySelectorAll(".schedule-col,.schedule-session");
    if(scheduleObserver) scheduleObserver.disconnect();
    scheduleObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting) e.target.classList.add("in");
      });
    }, {threshold:0.2, rootMargin:"0px 0px -10% 0px"});
    
    items.forEach(function(item){
      scheduleObserver.observe(item);
      // IMMEDIATELY CHECK IF ALREADY VISIBLE - fixes elements already in viewport
      const rect = item.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const threshold = viewportHeight * 0.1; // 10% from bottom (matching rootMargin)
      if(rect.top < viewportHeight - threshold && rect.bottom > 0) {
        item.classList.add("in");
      }
    });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer:fine)").matches;

  /* Hero: mouse parallax (logo + title subtle reverse) + scroll depth */
  function initHeroDepth(){
    const hero = document.querySelector(".hero");
    const inner = document.querySelector(".hero-inner");
    const logo = document.querySelector(".hero-logo");
    const title = document.querySelector(".hero-title");
    const video = document.getElementById("heroVideo");
    if(!hero || !inner || reduceMotion) return;
    let mx = 0, my = 0, cx = 0, cy = 0, raf = null;
    function loop(){
      cx += (mx - cx) * .06; cy += (my - cy) * .06;
      if(logo) logo.style.transform = "translate(" + (cx*14) + "px," + (cy*10) + "px)";
      if(title) title.style.transform = "translate(" + (cx*-10) + "px," + (cy*-8) + "px)";
      if(Math.abs(mx-cx) > .001 || Math.abs(my-cy) > .001) raf = requestAnimationFrame(loop);
      else raf = null;
    }
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
    let ticking = false;
    window.addEventListener("scroll", function(){
      if(document.body.classList.contains("intro-lock")) return;
      if(ticking) return; ticking = true;
      requestAnimationFrame(function(){
        const y = window.scrollY || 0;
        const h = hero.offsetHeight || 1;
        const p = Math.min(1, y / h);
        if(p < 1){
          inner.style.transform = "translateY(" + (p * -70) + "px)";
          inner.style.opacity = String(1 - p * 1.1 > 0 ? 1 - p * 1.1 : 0);
          if(video) video.style.transform = "scale(" + (1.06 + p * .08) + ")";
        }
        ticking = false;
      });
    }, {passive:true});
    window.addEventListener("akay:intro-complete", function(){
      document.querySelectorAll(".hero-title .line>span").forEach(function(el){ el.style.animation="none"; void el.offsetWidth; el.style.animation=""; });
    }, {once:true});
  }

  /* Hero letter-by-letter reveal (gated on intro-complete; CSS fallback keeps titleRise) */
  function splitHeroLetters(){
    if(reduceMotion) return;
    const h1 = document.querySelector(".hero-title");
    if(!h1) return;
    if(h1.dataset.splitInit) return;
    h1.dataset.splitInit = "1";
    function armSplit(text){
      try{
        const spans = h1.querySelectorAll(".line>span[data-i18n]");
        if(!spans.length) return;
        spans.forEach(function(lineSpan){
          const txt = lineSpan.textContent;
          if(!txt) return;
          lineSpan.innerHTML = "";
          Array.prototype.forEach.call(txt, function(chr, i){
            const s = document.createElement("span");
            s.className = "ch";
            s.style.transitionDelay = (i * 26) + "ms";
            if(chr === " ") s.innerHTML = "&nbsp;"; else s.textContent = chr;
            lineSpan.appendChild(s);
          });
        });
        h1.classList.add("split");
        h1.classList.add("armed");
        requestAnimationFrame(function(){
          requestAnimationFrame(function(){
            setTimeout(function(){ h1.classList.add("go"); }, 50);
          });
        });
      }catch(e){}
    }
    window.addEventListener("akay:intro-complete", armSplit, {once:true});
    document.addEventListener("akay:lang", function(){
      try{ h1.classList.remove("go"); armSplit(); }catch(e){}
    });
  }

  /* Magnetic effect for buttons and interactive elements */
  function initMagnetic(){
    if(!finePointer || reduceMotion) return;
    const selectors = [
      ".btn",
      ".comm-btn",
      ".net-node",
      ".person",
      ".info-row",
      ".mv-pillar"
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(function(el){
        el.addEventListener("pointermove", function(e){
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width/2) / (r.width/2);
          const y = (e.clientY - r.top - r.height/2) / (r.height/2);
          const maxX = el.classList.contains("btn") ? 6 : 8;
          const maxY = el.classList.contains("btn") ? 4 : 6;
          el.style.transform = "translate(" + (x*maxX) + "px," + (y*maxY) + "px)";
        });
        el.addEventListener("pointerleave", function(){ el.style.transform = ""; });
      });
    });
  }

  /* 3D Tilt for sponsor nodes */
  function initSponsorTilt(){
    if(!finePointer || reduceMotion) return;
    document.querySelectorAll(".net-node").forEach(function(node){
      node.addEventListener("pointermove", function(e){
        const r = node.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const rotateX = -y * 10;
        const rotateY = x * 10;
        node.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-3px)";
        node.style.boxShadow = "0 20px 40px rgba(122,59,255,0.25)";
      });
      node.addEventListener("pointerleave", function(){
        node.style.transform = "";
        node.style.boxShadow = "";
      });
    });
  }

  /* Cursor glow (single radial gradient, desktop only) */
  function initCursorGlow(){
    if(!finePointer || reduceMotion) return;
    const glow = document.getElementById("cursorGlow");
    if(!glow) return;
    let x=0, y=0, gx=0, gy=0, raf=null;
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
    window.addEventListener("pointerleave", function(){
      glow.style.opacity = "0";
    }, {passive:true});
  }

  /* Hero video intersection play/pause + mobile/desktop source swap */
  function initHeroVideo(){
    const v = document.getElementById("heroVideo");
    if(!v) return;

    function setVideoSource(){
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const source = v.querySelector("source");
      if(source){
        const newSrc = isMobile ? "assets/video-mobile.mp4" : "assets/video.mp4";
        if(source.src !== newSrc && !source.src.endsWith(newSrc)){
          source.src = newSrc;
          v.load();
        }
      }
    }

    setVideoSource();
    window.addEventListener("resize", setVideoSource);

    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){ v.pause(); v.removeAttribute("autoplay"); }
    else if("IntersectionObserver" in window){
      new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ v.play().catch(function(){}); } else { v.pause(); } });
      }).observe(v);
    }
    v.addEventListener("error", function(){ v.style.display="none"; }, true);
  }

  function renderChairs(){
    const grid = document.getElementById("chairsGrid");
    if(!grid) return;
    const l = lang();
    grid.innerHTML = "";
    chairs.forEach(function(c){
      const card = document.createElement("div");
      card.className = "chair-card";
      const imgHtml = c.img ? '<img class="chair-photo" src="' + c.img + '" alt="' + (l === "en" ? c.tr : c.tr) + '" loading="lazy" onerror="this.style.display=\'none\'" style="width:96px;height:96px;border-radius:50%;object-fit:cover;margin:0 auto 12px;">' : '<div class="chair-photo" style="width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,rgba(122,59,255,.2),rgba(168,85,247,.1));margin:0 auto 12px;display:flex;align-items:center;justify-content:center;color:rgba(168,85,247,.4);font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase">Foto</div>';
      card.innerHTML = imgHtml
        + '<h4 style="font-family:var(--serif);font-size:clamp(1rem,1.3vw,1.2rem);color:var(--ink);margin:0 0 4px;text-align:center">' + c.tr + '</h4>'
        + '<p style="font-family:var(--mono);font-size:clamp(9px,0.8vw,11px);letter-spacing:.18em;text-transform:uppercase;color:var(--accent-3);margin:0;text-align:center">' + (l === "en" ? c.role_en : c.role_tr) + '</p>';
      grid.appendChild(card);
    });
  }

  function renderSponsors(){
    // Cinematic Main Partners Grid
    const sponsorsGrid = document.getElementById("sponsorsGrid");
    if(!sponsorsGrid) return;
    const l = lang();
    sponsorsGrid.innerHTML = "";
sponsors.forEach(function(s, i){
      const card = document.createElement("div");
      card.className = "sponsor-card cinematic";
      card.style.transitionDelay = (i * 100) + "ms";
      const logoHtml = s.logo ? '<img class="sponsor-logo" src="' + s.logo + '" alt="' + (l === "en" ? s.name_en : s.name_tr) + '" loading="lazy" onerror="this.style.display=\'none\'" style="max-width:200px;max-height:80px;width:auto;height:auto;filter:drop-shadow(0 8px 32px rgba(0,0,0,0.4));">' : '<span class="sponsor-index" aria-hidden="true">' + ("0" + s.id).slice(-2) + '</span>';
      card.innerHTML = logoHtml
        + '<h3 class="sponsor-name" style="font-family:var(--serif);font-size:clamp(1.4rem,2.4vw,2.1rem);font-weight:400;color:var(--ink);margin:10px 0 8px;line-height:1.2;letter-spacing:-.01em">' + (l === "en" ? s.name_en : s.name_tr) + '</h3>'
        + '<p class="sponsor-role" style="font-family:var(--mono);font-size:clamp(10px,0.85vw,12px);letter-spacing:.25em;text-transform:uppercase;color:var(--accent-3);margin:0 0 12px;opacity:.8">' + (l === "en" ? s.role_en : s.role_tr) + '</p>'
        + '<p class="sponsor-desc" style="font-family:var(--sans);font-size:clamp(0.85rem,1vw,1rem);color:var(--ink-2);line-height:1.6;margin:0 0 20px;max-width:280px">' + (l === "en" ? s.desc_en : s.desc_tr) + '</p>'
        + '<a class="sponsor-link u-link" href="' + s.url + '" target="_blank" rel="noopener" style="font-family:var(--mono);font-size:clamp(10px,0.8vw,12px);letter-spacing:.2em;text-transform:uppercase;color:var(--accent-3);transition:all .3s ease" data-i18n="spon.visit">' + (l === "en" ? "Visit Website" : "Web Sitesi") + ' <span class="arr" style="transition:transform .3s ease">→</span></a>';
      sponsorsGrid.appendChild(card);
      // Trigger reveal animation for each card
      requestAnimationFrame(function(){ card.classList.add("in"); });
    });
    // Subtle parallax on mouse move
    if(!reduceMotion && finePointer){
      sponsorsGrid.addEventListener("mousemove", function(e){
        const rect = sponsorsGrid.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        sponsorsGrid.querySelectorAll(".sponsor-card.cinematic").forEach(function(card){
          const rx = x * 8;
          const ry = -y * 8;
          card.style.transform = "perspective(1000px) rotateX(" + ry + "deg) rotateY(" + rx + "deg)";
        });
      });
      sponsorsGrid.addEventListener("mouseleave", function(){
        sponsorsGrid.querySelectorAll(".sponsor-card.cinematic").forEach(function(card){
          card.style.transform = "";
        });
      });
    }
  }

document.addEventListener("DOMContentLoaded", function(){
    try{renderCommittees();}catch(e){console.error(e);}
    try{renderTimeline();}catch(e){console.error(e);}
    try{renderChairs();}catch(e){console.error(e);}
    try{renderSponsors();}catch(e){console.error(e);}
    initHeroDepth();
    try{splitHeroLetters();}catch(e){}
    initMagnetic();
    initSponsorTilt();
    initCursorGlow();
    initHeroVideo();
  });
  // Fallback: run immediately if DOM ready
  if (document.readyState !== "loading") {
    try{renderCommittees();}catch(e){console.error(e);}
    try{renderTimeline();}catch(e){console.error(e);}
    try{renderChairs();}catch(e){console.error(e);}
    try{renderSponsors();}catch(e){console.error(e);}
    initHeroDepth();
    try{splitHeroLetters();}catch(e){}
    initMagnetic();
    initSponsorTilt();
    initCursorGlow();
    initHeroVideo();
  }

  window.AkayCommittees = { render:renderCommittees };
  window.AkayTimeline = { render:renderTimeline };
  window.AkaySponsors = { render:renderSponsors };
  window.AkayChairs = { render:renderChairs };
})();