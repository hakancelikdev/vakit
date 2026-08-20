/**
 * Üretilen sayfaların App Store linklerini doğrular.
 *
 * Çalıştırma: npm test  (önce build koşar — testler docs/ çıktısını okur)
 *
 * ⚠️ Bu testlerin varlık sebebi: `pt` (provider token) olmadan `ct` (kampanya) Apple
 * tarafında SESSİZCE sayılmaz ve hata da vermez. Yanlış kurulmuş bir link yalnızca
 * hiç görünmez — o yüzden kural teste bağlandı.
 */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const C = require("./content.js");

const TR = fs.readFileSync("docs/index.html", "utf8");
const EN = fs.readFileSync("docs/en/index.html", "utf8");

test("storeLink kampanyasız düz link döndürür", () => {
  assert.strictEqual(C.storeLink(), "https://apps.apple.com/app/id6748356813");
});

test("storeLink pt VE ct taşır", () => {
  const url = new URL(C.storeLink("site-hero-tr"));
  assert.ok(url.searchParams.get("pt"), "pt eksik — kampanya ölçülmez");
  assert.strictEqual(url.searchParams.get("ct"), "site-hero-tr");
});

for (const [lang, html] of [["tr", TR], ["en", EN]]) {
  test(`${lang}: kullanıcıya görünen linklerin hepsi kampanyalı`, () => {
    const bare = html.match(/href="https:\/\/apps\.apple\.com\/app\/id6748356813"/g) || [];
    assert.strictEqual(bare.length, 0, `kampanyasız href sayısı: ${bare.length}`);
  });

  test(`${lang}: beklenen kampanya token'ları sayfada`, () => {
    for (const slot of ["site-nav", "site-hero", "site-final"]) {
      assert.ok(html.includes(`ct=${slot}-${lang}`), `${slot}-${lang} yok`);
    }
  });
}

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
