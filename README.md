# AKAY — Perspektif ve Aydınlanma Çalıştayı · Digital Experience

Premium, sinematik, editoryal tek sayfa deneyimi. Vanilla HTML/CSS/JS, framework yok.

## Kurulum

Statik site — build gerekmez. Klasörü herhangi bir statik sunucuyla aç:

```powershell
# PowerShell (proje kökünde)
python -m http.server 8000
# sonra: http://localhost:8000
```

## Asset'ler (önemli)

Aşağıdaki dosyaları `assets/` içine koy — yerlerini değiştirme, kopya oluşturma:

```
assets/video.MOV    # SADECE hero background (object-fit:cover, hero içine hapsolmuş)
assets/Logo-0.png   # symbol mark (nav + footer)
assets/Logo-1.png   # full logo (hero)
```

Dosya yoksa site kırılmaz: video alanında gradient poster, logolarda sessiz fallback (`onerror` + `main.js`) devreye girer.
Tasarım gereği **mor overlay yalnızca hero içindedir**; diğer section'lara taşmaz.

## Yapı

```
index.html
css/main.css | layout.css | components.css | animations.css | responsive.css
js/i18n.js | navigation.js | interactions.js | animations.js | intro.js | main.js
assets/
```

## İçerik notları (dürüstlük)

- Misyon + Vizyon metinleri birebir gerçek içerik.
- Tarih: 24 Eylül 2026 (hero + etkinlik bölümünde sade tarih bandı; sayaç kaldırıldı).
- Mekan / ücret / kesin saatler bilinmediği için **uydurulmadı** — TBA placeholder + "kesin saatler duyurulacak" notu var.
- Komiteler: gerçek konu listesi verilmediği için fabrikasyon konu üretilmedi. `interactions.js` içindeki `committees` dizisi data-driven; 4 TBA slotu interaktif explorer ile çalışıyor. Gerçek veri gelince diziyi doldurmak yeterli.
- Akış: örnek saatler gerçekmiş gibi yazılmadı; zamanlar "—" ve üstte taslak uyarısı var.
- Sponsorlar + koordinatörler + Instagram gerçek linklerle bağlı (`tel:` dahil).

## i18n

Varsayılan TR. `TR | EN` toggle tüm metni kapsar (`data-i18n` + `js/i18n.js` dictionary), seçim `localStorage: akay-lang` içinde tutulur. Countdown ve dinamik komite/akış modülleri `akay:lang` event'iyle yeniden render olur.

## Tasarım ritmi

ATMOSPHERE (hero) → IDEA (manifesto) → PURPOSE (01 misyon) → VISION (02 vizyon) → EVENT (03 bilgi) → DISCOVERY (04 akış + 05 komiteler) → COLLABORATION (06 network) → PEOPLE (07) → CONNECTION (08 CTA + footer).

## Erişilebilirlik / Performans

- Semantic HTML, heading hiyerarşisi, skip-link, aria roller, focus-visible, `tel:` linkleri.
- `prefers-reduced-motion` → tüm animasyon + video drift + autoplay kapatılır.
- Video: `preload="metadata"`, hero dışına taşmaz, ekran dışındayken pause (IntersectionObserver), mobilde drift yavaşlatılır.
- Scroll: rAF-throttle + IntersectionObserver; `transform/opacity` tabanlı animasyonlar (GPU dostu).
