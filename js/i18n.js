/* i18n.js — full TR/EN dictionary, localStorage, data-i18n */
(function(){
"use strict";
const translations = {
tr:{
  "skip":"İçeriğe atla",
  "intro.tag":"Perspektif ve Aydınlanma Çalıştayı",
  "nav.misyon":"Misyon","nav.vizyon":"Vizyon","nav.etkinlik":"Etkinlik","nav.komiteler":"Komiteler","nav.isbirlikleri":"İş Birlikleri","nav.iletisim":"İletişim",
  "hero.kicker":"Akay sunar","hero.l1":"PERSPEKTİF","hero.l2":"ve aydınlanma","hero.l3":"ÇALIŞTAYI",
  "hero.sub":"Gençlik, düşünce, perspektif, bilgi ve aydınlanma — entelektüel bir buluşma.",
  "hero.scroll":"KAYDIRARAK KEŞFET",

  "mani.eyebrow":"Manifesto — 00","mani.a":"BİR FİKİR,","mani.b":"BİR PERSPEKTİFİ","mani.c":"DEĞİŞTİREBİLİR.",
  "mani.foot":"Akay, gençliğin düşünceyle kurduğu bağa dair bir davet.",
  "mani.body":"Bu sayfa bir etkinlik duyurusu değil; bir düşünme alanı. Aşağı indikçe fikir, amaç, vizyon ve keşif sırayla açılır — tıpkı iyi bir tartışma gibi.",
  "mission.label":"Misyon","mission.eyebrow":"Neden varız","mission.title":"Fikrin özgürce konuşulduğu bir alan.",
  "mission.body":"Akay Çalıştayı olarak misyonumuz; gençlerin hızla gelişen ve değişen dünyaya dair farkındalıklarını artırırken, onlara fikirlerini özgürce ifade edebilecekleri, güçlü bir bilgi paylaşım alanı sunmaktır. Komite konularımız ise hem akademik anlamda geliştirici hem de sosyal bakımdan günlük hayatımızı doğrudan etkileyen konular olarak özenle seçilmiştir. Sosyal becerilerini aktif olarak kullanabilecekleri bu platformda, çok yönlü bakış açıları kazanmalarını hedefliyoruz.",
  "mission.note":"Akademik derinlik + gündelik hayatın gerçekliği. Komiteler bu ikisini bir arada tutar.",
  "vision.label":"VİZYON","vision.title":"Aydınlık zihinler, somut faydalar.","vision.lede":"Geçmişi anlayan, bugünü okuyan, geleceği kuran bir gençlik.",
  "vision.p1":"Akay Perspektif ve Aydınlanma Çalıştayı ekibi olarak Türkiye’deki gençlerin Türk kültürü ve kökeni başta olmak üzere; dünya tarihini, farklı kültürleri ve dilleri anlayarak farkındalığı, entelektüel donanımı ve hitabet becerisi yüksek bireyler olmalarına katkı sağlayarak ülkemiz adına faydalı bireyler yetiştirmeyi amaçlıyoruz.",
  "vision.p2":"Nihai hedefimiz, gençlerin bu süreçte edindikleri bilgi birikimini ve aydınlık zihinlerini kullanarak başta ülkemiz olmak üzere tüm insanlığa somut faydalar sunan bireyler olarak yetişmeleridir.",
  "vision.m1":"Kültür","vision.m2":"Tarih","vision.m3":"Entelektüel donanım","vision.m4":"Hitabet",
  "vision.q1t":"Kültür ve Köken","vision.q1d":"Türk kültürü ve kökeninden başlayarak farklı kültürleri ve dilleri anlamak.",
  "vision.q2t":"Tarih ve Dünya","vision.q2d":"Dünya tarihini okuyarak bugüne ve geleceğe bilinçle bakmak.",
  "vision.q3t":"Donanım ve Hitabet","vision.q3d":"Entelektüel birikimi güçlü ifade becerisiyle birleştiren bireyler.",
  "event.eyebrow":"Etkinlik — 03","event.title":"Tek bakışta çalıştay.","event.month":"EYLÜL","event.weekday":"PERŞEMBE",
  "event.venueK":"MEKAN","event.venueV":"Yakında duyurulacak","event.venueS":"Konum ve ulaşım bilgisi burada yayımlanacak.",
  "event.durK":"SÜRE","event.durV":"Tam gün program","event.durS":"Detaylı akış aşağıda — kesin saatler duyurulacak.","event.durT":"09:00 → 17:00 TASLAK",
  "event.feeK":"KATILIM","event.feeV":"Bilgi yakında","event.feeS":"Kayıt detayları Instagram üzerinden duyurulacak.",
  "flow.eyebrow":"Program akışı — 04","flow.title":"Günün ritmi.",
  "flow.note":"Kesin saatler henüz yayımlanmadı. Aşağıdaki iskelet, günün planlanan ritmini gösterir; saatler duyurulduğunda burada güncellenecektir.",
  "comm.eyebrow":"Komiteler — 05 · İnteraktif","comm.title":"Keşfetmek için seç.","comm.lede":"Komite konuları yakında açıklanacak. Liste yayına alındığında bu panelden inceleyebileceksin — altyapı hazır.",
  "comm.hint":"← Soldan bir komite seç / dokun","comm.tba":"Yakında açıklanacak","comm.soonBody":"Bu komitenin konusu ve içeriği ekip tarafından hazırlanıyor. Duyuru @akay_calistay üzerinden yapılacak.",
  "comm.metaA":"DURUM","comm.metaB":"DUYURU",
  "spon.eyebrow":"İş birlikleri — 06","spon.title":"Birlikte aydınlatanlar.",  "spon.lede":"Bu deneyimi mümkün kılan ekipler — ziyaret için karta dokun.",
  "spon.vRole":"AI Sponsoru","spon.bRole":"IT Sponsoru","spon.cRole":"Grafik / Sosyal Medya Sponsoru",
  "spon.leadT":"Birlikte üretenler","spon.leadD":"Akay'ın arkasındaki ekipler — teknoloji, altyapı ve tasarımda omuz verenler.","spon.count":"paydaş","spon.visit":"Ziyaret Et",
  "team.label":"Koordinatörler","team.eyebrow":"İnsanlar","team.title":"Sorun varsa, doğrudan yaz.",
  "team.role":"Genel Koordinatör","team.role2":"Genel Koordinatör","team.call":"Hemen Ara",
  "cta.title":"AKAY'I TAKİP ET.","cta.body":"Çalıştaydan gelişmeleri, duyuruları ve içerikleri kaçırma.",
  "cta.btn":"Instagram'da Takip Et","cta.btn2":"Etkinlik Detayı",
  "foot.sub":"Perspektif ve Aydınlanma Çalıştayı","foot.top":"Başa dön ↑","foot.note":"Düşünceyle tasarlandı."
},
en:{
  "skip":"Skip to content",
  "intro.tag":"Perspective and Enlightenment Workshop",
  "nav.misyon":"Mission","nav.vizyon":"Vision","nav.etkinlik":"Event","nav.komiteler":"Committees","nav.isbirlikleri":"Partners","nav.iletisim":"Contact",
  "hero.kicker":"Akay presents","hero.l1":"PERSPECTIVE","hero.l2":"and enlightenment","hero.l3":"WORKSHOP",
  "hero.sub":"Youth, thought, perspective, knowledge and enlightenment — an intellectual gathering.",
  "hero.scroll":"SCROLL TO EXPLORE",

  "mani.eyebrow":"Manifesto — 00","mani.a":"ONE IDEA","mani.b":"CAN SHIFT A","mani.c":"PERSPECTIVE.",
  "mani.foot":"Akay is an invitation to the bond between youth and thought.",
  "mani.body":"This page is not an event announcement; it is a space for thinking. As you scroll, idea, purpose, vision and discovery unfold in order — like a good discussion.",
  "mission.label":"Mission","mission.eyebrow":"Why we exist","mission.title":"A space where ideas speak freely.",
  "mission.body":"As Akay Workshop, our mission is to raise young people's awareness of a rapidly evolving and changing world while providing them with a strong knowledge-sharing platform where they can freely express their ideas. Our committee topics are carefully selected to be both academically enriching and directly relevant to everyday social life. On this platform, where they can actively use their social skills, we aim to help them gain multifaceted perspectives.",
  "mission.note":"Academic depth + the reality of everyday life. Committees hold both together.",
  "vision.label":"VISION","vision.title":"Bright minds, tangible good.","vision.lede":"A youth that understands the past, reads the present, builds the future.",
  "vision.p1":"As the Akay Perspective and Enlightenment Workshop team, we aim to help Türkiye's youth — starting with Turkish culture and roots — understand world history, different cultures and languages, and thereby become individuals with high awareness, intellectual capacity and oratory skills who serve our country.",
  "vision.p2":"Our ultimate goal is for young people to use the knowledge and luminous minds they gain in this process to grow into individuals who deliver tangible benefits to our country first, and to all humanity.",
  "vision.m1":"Culture","vision.m2":"History","vision.m3":"Intellectual capacity","vision.m4":"Oratory",
  "vision.q1t":"Culture & Roots","vision.q1d":"Understanding different cultures and languages, starting with Turkish culture and roots.",
  "vision.q2t":"History & World","vision.q2d":"Reading world history to look at today and tomorrow with awareness.",
  "vision.q3t":"Intellect & Oratory","vision.q3d":"Individuals who combine intellectual depth with strong expression.",
  "event.eyebrow":"Event — 03","event.title":"The workshop at a glance.","event.month":"SEPTEMBER","event.weekday":"THURSDAY",
  "event.venueK":"VENUE","event.venueV":"To be announced","event.venueS":"Location and transport info will be published here.",
  "event.durK":"DURATION","event.durV":"Full-day programme","event.durS":"Detailed flow below — exact times TBA.","event.durT":"09:00 → 17:00 DRAFT",
  "event.feeK":"ADMISSION","event.feeV":"Info coming soon","event.feeS":"Registration details via Instagram.",
  "flow.eyebrow":"Programme — 04","flow.title":"The rhythm of the day.",
  "flow.note":"Exact times are not published yet. The skeleton below shows the planned rhythm of the day; it will be updated once times are announced.",
  "comm.eyebrow":"Committees — 05 · Interactive","comm.title":"Select to explore.","comm.lede":"Committee topics will be announced soon. Once live, you can explore them from this panel — the infrastructure is ready.",
  "comm.hint":"← Select / tap a committee","comm.tba":"To be announced","comm.soonBody":"This committee's topic is being prepared by the team. Announcements via @akay_calistay.",
  "comm.metaA":"STATUS","comm.metaB":"CHANNEL",
  "spon.eyebrow":"Partnerships — 06","spon.title":"Those who enlighten together.",  "spon.lede":"The teams that make this experience possible — tap a card to visit.",
  "spon.vRole":"AI Sponsor","spon.bRole":"IT Sponsor","spon.cRole":"Graphics / Social Media Sponsor",
  "spon.leadT":"Co-creators","spon.leadD":"The teams behind Akay — partners in technology, infrastructure and design.","spon.count":"partners","spon.visit":"Visit",
  "team.label":"Coordinators","team.eyebrow":"People","team.title":"Questions? Write directly.",
  "team.role":"General Coordinator","team.role2":"General Coordinator","team.call":"Call now",
  "cta.title":"FOLLOW AKAY.","cta.body":"Don't miss updates, announcements and content from the workshop.",
  "cta.btn":"Follow on Instagram","cta.btn2":"Event Details",
  "foot.sub":"Perspective and Enlightenment Workshop","foot.top":"Back to top ↑","foot.note":"Designed with thought."
}
};
let lang = "tr";
try{ lang = localStorage.getItem("akay-lang") || "tr"; }catch(e){}
if(!translations[lang]) lang = "tr";

function applyLang(l){
  lang = translations[l] ? l : "tr";
  try{ localStorage.setItem("akay-lang", lang); }catch(e){}
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    const k = el.getAttribute("data-i18n");
    if(translations[lang][k] !== undefined) el.textContent = translations[lang][k];
  });
  document.querySelectorAll(".lang button").forEach(function(b){
    b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
  });
  document.dispatchEvent(new CustomEvent("akay:lang",{detail:{lang:lang}}));
  // re-render dynamic modules if present
  if(window.AkayCommittees) window.AkayCommittees.render();
  if(window.AkayTimeline) window.AkayTimeline.render();
}
function t(k){ return (translations[lang] && translations[lang][k]) || translations.tr[k] || k; }

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll(".lang button").forEach(function(b){
    b.addEventListener("click", function(){ applyLang(b.dataset.lang); });
  });
  applyLang(lang);
});
window.AkayI18n = { applyLang:applyLang, t:t, getLang:function(){return lang;} };
})();
