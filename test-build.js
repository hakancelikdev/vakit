/**
 * Üretilen sayfaları doğrular.
 *
 * Çalıştırma: npm test  (önce build koşar — testler docs/ çıktısını okur)
 *
 * ⚠️ App Store link testlerinin varlık sebebi: `pt` (provider token) olmadan `ct`
 * (kampanya) Apple tarafında SESSİZCE sayılmaz ve hata da vermez. Yanlış kurulmuş bir
 * link yalnızca hiç görünmez — o yüzden kural teste bağlandı.
 */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const C = require("./content.js");

const LANGS = Object.keys(C.LANGS);
const html = (lang) => fs.readFileSync(path.join("docs", C.LANGS[lang].dir, "index.html"), "utf8");
const TR = html("tr");

test("storeLink kampanyasız düz link döndürür", () => {
  assert.strictEqual(C.storeLink(), "https://apps.apple.com/app/id6748356813");
});

test("storeLink pt VE ct taşır", () => {
  const url = new URL(C.storeLink("site-hero-tr"));
  assert.ok(url.searchParams.get("pt"), "pt eksik — kampanya ölçülmez");
  assert.strictEqual(url.searchParams.get("ct"), "site-hero-tr");
});

for (const lang of LANGS) {
  const page = html(lang);

  test(`${lang}: kullanıcıya görünen linklerin hepsi kampanyalı`, () => {
    const bare = page.match(/href="https:\/\/apps\.apple\.com\/app\/id6748356813"/g) || [];
    assert.strictEqual(bare.length, 0, `kampanyasız href sayısı: ${bare.length}`);
  });

  test(`${lang}: beklenen kampanya token'ları sayfada`, () => {
    for (const slot of ["site-nav", "site-hero", "site-final", "site-dock"]) {
      assert.ok(page.includes(`ct=${slot}-${lang}`), `${slot}-${lang} yok`);
    }
  });

  test(`${lang}: dil, yön ve hreflang doğru`, () => {
    const L = C.LANGS[lang];
    assert.ok(page.includes(`<html lang="${L.htmlLang}"${L.rtl ? ' dir="rtl"' : ""}`), "html lang/dir yanlış");
    const alternates = page.match(/<link rel="alternate" hreflang=/g) || [];
    assert.strictEqual(alternates.length, LANGS.length + 1, "her dil + x-default olmalı");
    assert.ok(page.includes(`<link rel="canonical" href="${C.SITE.origin}${L.path}">`), "canonical yanlış");
  });

  test(`${lang}: dil menüsü her dile bağlanıyor`, () => {
    for (const other of LANGS) {
      assert.ok(page.includes(`href="${C.LANGS[other].path}" data-lang="${other}"`), `${other} bağlantısı yok`);
    }
  });

  test(`${lang}: yasal bağlantılar var olan sayfaya gidiyor`, () => {
    for (const m of page.matchAll(/href="(\/(?:[a-z]+\/)?(?:privacy|terms)\.html)"/g)) {
      assert.ok(fs.existsSync(path.join("docs", m[1])), `${m[1]} yok`);
    }
  });

  // App Store her dilin gizlilik linkini o dilin sayfasına verir (2026-09-11).
  test(`${lang}: yasal sayfalar kendi dilinde`, () => {
    for (const f of ["privacy.html", "terms.html"]) {
      const href = C.LANGS[lang].path + f;
      assert.ok(page.includes(`href="${href}"`), `${href} bağlantısı yok`);
      const legal = fs.readFileSync(path.join("docs", href), "utf8");
      assert.ok(legal.includes(`lang="${C.LANGS[lang].htmlLang}"`), `${href} o dilde değil`);
      if (!["tr", "en"].includes(lang)) {
        assert.ok(legal.includes('class="legal-notice"'), `${href}: "İngilizce metin geçerlidir" notu yok`);
      }
    }
  });

  test(`${lang}: paylaşım kartı (og:image) o dilin kartı ve diskte`, () => {
    const m = page.match(/<meta property="og:image" content="([^"]+)">/);
    assert.ok(m, "og:image yok");
    assert.strictEqual(m[1], `${C.SITE.origin}/assets/og/${lang}.jpg`);
    assert.ok(fs.existsSync(path.join("docs", "assets", "og", `${lang}.jpg`)), "kart dosyası yok — node tools/make-og.js");
    assert.ok(page.includes('<meta name="twitter:card" content="summary_large_image">'), "twitter kartı büyük değil");
  });

  test(`${lang}: tema ilk boyamadan önce uygulanıyor (koyu modda beyaz yanıp sönme yok)`, () => {
    const head = page.slice(0, page.indexOf("</head>"));
    assert.ok(head.includes("setAttribute('data-theme'"), "head içinde tema betiği yok");
    assert.ok(head.indexOf("setAttribute('data-theme'") < head.indexOf('rel="stylesheet"'), "tema betiği stil dosyasından sonra");
  });

  test(`${lang}: vitrin görselleri ve video diskte`, () => {
    for (const m of page.matchAll(/(?:src|poster)="(\/assets\/(?:screenshots|video)\/[^"]+)"/g)) {
      assert.ok(fs.existsSync(path.join("docs", m[1])), `${m[1]} yok`);
    }
  });

  test(`${lang}: ilk ekranda uygulama var — video ve App Store düğmesi hero içinde`, () => {
    const hero = page.slice(page.indexOf('<section class="hero">'), page.indexOf("<!-- ========== LIVE CLOCK"));
    assert.ok(hero.includes('id="heroVideo"'), "hero videosu yok");
    assert.ok(hero.includes('preload="none"'), "video sayfa yüklenmeden inmeye başlar");
    assert.ok(!/\sautoplay[\s>]/.test(hero), "autoplay: video sayfa yüklenmeden başlar");
    assert.ok(hero.includes(`ct=site-hero-${lang}`), "hero düğmesi yok");
  });

  test(`${lang}: sayfada çevrilmemiş İngilizce etiket ya da yer tutucu kalmadı`, () => {
    assert.ok(!/\d\d \/ (no account|on-device|no tracking|transparent)/.test(page), "Emanet kartlarında İngilizce etiket");
    assert.ok(!/\{(featureCount|ratingCount|screenCount)\}/.test(page), "çözülmemiş yer tutucu");
  });

  test(`${lang}: özellik gruplarında her özellik tam bir kez`, () => {
    const names = [...page.matchAll(/<h4 class="f-name">([^<]*)<\/h4>/g)].map((m) => m[1]);
    assert.strictEqual(names.length, C.FEATURES[lang].length);
    assert.strictEqual(new Set(names).size, names.length, "aynı özellik iki kez");
  });
}

test("tr/en: gelecek iması yok (\"şimdilik\", \"for now\")", () => {
  assert.ok(!/şimdilik/i.test(TR), "tr");
  assert.ok(!/\bfor now\b/i.test(html("en")), "en");
});

for (const lang of LANGS) {
  const page = html(lang);
  test(`${lang}: sayfa içindeki görseller hafif (1 MB'lık simge geri gelmesin)`, () => {
    for (const m of page.matchAll(/<img [^>]*src="(\/assets\/[^"]+)"/g)) {
      const kb = fs.statSync(path.join("docs", m[1])).size / 1024;
      assert.ok(kb < 150, `${m[1]} ${Math.round(kb)} KB`);
    }
  });
  test(`${lang}: <main> var, telefonda kayan bölgeler klavyeyle erişilebilir`, () => {
    assert.strictEqual((page.match(/<main>/g) || []).length, 1);
    for (const id of ["compareTable", "testGrid"]) assert.ok(new RegExp(`id="${id}" tabindex="0" role="region" aria-label="[^"]+"`).test(page), id);
  });
}

// Web fontları Google'a istek atar (ziyaretçinin IP adresi); sayfa sistem fontunu kullanır.
test("hiçbir sayfa Google Fonts yüklemiyor", () => {
  const pages = [];
  const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) { if (f.name !== "assets") walk(p); } else if (f.name.endsWith(".html")) pages.push(p); } };
  walk("docs");
  for (const p of pages) assert.ok(!/fonts\.(googleapis|gstatic)\.com/.test(fs.readFileSync(p, "utf8")), p);
});

// Manifesto: uygulamanın kendi metni (tools/import-manifesto.js), her dilde ayrı sayfa.
const MF = require("./manifesto.js");
for (const lang of LANGS) {
  test(`${lang}: manifesto sayfası var, 10 ilkenin hepsi ve kampanyalı App Store linki`, () => {
    const p = fs.readFileSync(path.join("docs", C.LANGS[lang].dir, "manifesto.html"), "utf8");
    assert.strictEqual((p.match(/<li class="mf-item">/g) || []).length, MF[lang].principles.length);
    assert.strictEqual(MF[lang].principles.length, 10);
    assert.ok(!p.includes("{languageCount}") && !/%\d?\$?d/.test(p), "doldurulmamış dil sayısı");
    assert.ok(p.includes(`ct=site-manifesto-${lang}`), "manifesto App Store linki");
  });
  test(`${lang}: ana sayfanın başlığı manifestoya açılıyor`, () => {
    const page = html(lang);
    const h1 = page.slice(page.indexOf("<h1>"), page.indexOf("</h1>"));
    assert.ok(h1.includes(`href="${C.LANGS[lang].path}manifesto.html"`), "h1 manifestoya bağlı değil");
  });
}
test("manifesto sayfaları site haritasında", () => {
  const sm = fs.readFileSync(path.join("docs", "sitemap.xml"), "utf8");
  for (const lang of LANGS) assert.ok(sm.includes(`<loc>${C.SITE.origin}${C.LANGS[lang].path}manifesto.html</loc>`), lang);
});

test("404 sayfasındaki App Store linki kampanyalı", () => {
  const p = fs.readFileSync(path.join("docs", "404.html"), "utf8");
  const m = p.match(/href="(https:\/\/apps\.apple\.com[^"]+)"/);
  assert.ok(m, "App Store linki yok");
  const url = new URL(m[1].replace(/&amp;/g, "&"));
  assert.ok(url.searchParams.get("pt") && url.searchParams.get("ct"), "pt/ct eksik");
});

// "Takip yok" dendiği halde kullanım verisi takma bir koda bağlı olarak sunucuya gidiyor
// (gizlilik politikası §1). Sayfa bunu iddia etmemeli (2026-09-24).
test("tr/en: \"takip yok\" iddiası yok", () => {
  assert.ok(!/takip yok/i.test(TR), "tr");
  assert.ok(!/no tracking/i.test(html("en")), "en");
});

test("JSON-LD linkinde ct YOK — yapısal veriye kampanya token'ı girmez", () => {
  // Arama motorundan gelen her tıklama tek bir sahte kampanyaya yazılırsa kanal ayrımı bozulur.
  for (const field of ["downloadUrl", "installUrl"]) {
    const m = TR.match(new RegExp(`"${field}":\\s*"([^"]+)"`));
    assert.ok(m, `${field} bulunamadı`);
    assert.ok(!m[1].includes("ct="), `JSON-LD ${field} kampanyalı: ${m[1]}`);
  }
});

test("llms.txt linki kampanyalı — AI kaynaklı trafiğin tek ölçüm noktası", () => {
  const llms = fs.readFileSync("docs/llms.txt", "utf8");
  assert.ok(llms.includes("ct=llms-txt"), "llms.txt kampanyasız");
});

/**
 * Google review-snippet kuralı: "Don't aggregate reviews or ratings from other websites."
 * Puan ve yorumlar App Store'dan — işaretlenirse yapısal veri manuel işlemi riski (2026-09-11).
 */
for (const lang of LANGS) {
  test(`${lang}: JSON-LD'de App Store puanı/yorumu YOK`, () => {
    const ld = [...html(lang).matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join("");
    assert.ok(!/"aggregateRating"|"@type":\s*"Review"/.test(ld), "JSON-LD başka siteden puan/yorum işaretliyor");
  });
}

test("llms.txt gizlilik iddiası gizlilik politikasıyla çelişmiyor", () => {
  // Konum adı ve yakındaki camiler için koordinat Apple'a gider — "cihazdan çıkmaz" yanlış.
  const llms = fs.readFileSync("docs/llms.txt", "utf8");
  assert.ok(!/never leave the device/i.test(llms), "llms.txt 'Coordinates never leave the device' diyor");
  assert.ok(!/iOS\/macOS/.test(llms), "iOS ve macOS minimum sürümü aynı değil");
});

test("IndexNow anahtar dosyası yayında", () => {
  const key = fs.readFileSync("tools/indexnow.js", "utf8").match(/INDEXNOW_KEY = "([0-9a-f]+)"/)[1];
  assert.strictEqual(fs.readFileSync(path.join("docs", `${key}.txt`), "utf8").trim(), key);
});

test("hiçbir sayfa Google Analytics / izleme betiği yüklemiyor", () => {
  const pages = [...LANGS.map(html), ...["404.html", "privacy.html", "en/privacy.html"].map((f) => fs.readFileSync(path.join("docs", f), "utf8"))];
  for (const page of pages) assert.ok(!/googletagmanager|google-analytics|gtag\(/.test(page), "sayfada Google Analytics var");
});

test("sitemap her dilin ana sayfasını içeriyor", () => {
  const map = fs.readFileSync("docs/sitemap.xml", "utf8");
  for (const lang of LANGS) assert.ok(map.includes(`<loc>${C.SITE.origin}${C.LANGS[lang].path}</loc>`), `${lang} yok`);
});

/**
 * ⚠️ SEO kilidi: Googlebot JavaScript'i İngilizce tarayıcıyla ve depolamasız çalıştırır.
 * Kök sayfa tarayıcı diline göre yönlendirince Google Türkçe ana sayfayı /en/'in kopyası
 * sandı (Search Console, 2026-09-10). Yönlendirme yalnız kullanıcının kaydedilmiş
 * seçimine bakabilir; tarayıcı dili yalnız öneri şeridinde (script.js) kullanılır.
 */
test("language-detection.js tarayıcı diline göre YÖNLENDİRMEZ", () => {
  const js = fs.readFileSync("docs/language-detection.js", "utf8").replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
  assert.ok(!/navigator\.(languages?|userLanguage)/.test(js), "tarayıcı dili okunuyor — Googlebot yönlendirilir");
});

test("eski adresler yeni sayfaya yönleniyor", () => {
  for (const [file, target] of [["en.html", "/en/"], ["privacy-en.html", "/en/privacy.html"], ["terms-en.html", "/en/terms.html"]]) {
    const html = fs.readFileSync(path.join("docs", file), "utf8");
    assert.ok(html.includes(`url=${target}"`), `${file} → ${target} yönlendirmesi yok`);
    assert.ok(fs.existsSync(path.join("docs", target.endsWith("/") ? target + "index.html" : target)), `${target} yok`);
  }
});

test("language-detection.js desteklenen dil listesi LANGS ile aynı", () => {
  const js = fs.readFileSync("docs/language-detection.js", "utf8");
  const m = js.match(/var supported = \[([^\]]+)\]/);
  assert.ok(m, "supported listesi bulunamadı");
  const list = m[1].match(/'([a-z]+)'/g).map((s) => s.slice(1, -1));
  assert.deepStrictEqual([...list].sort(), [...LANGS].sort());
});
