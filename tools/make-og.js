#!/usr/bin/env node
/**
 * Link-preview card (og:image, 1200×630) for every language:
 *
 *   docs/assets/og/<lang>.jpg
 *
 *   node tools/make-og.js            # every language
 *   node tools/make-og.js de ar      # just these
 *
 * Renders an HTML card with headless Google Chrome (set CHROME to point
 * elsewhere) and converts it to JPEG with sips (macOS). The card uses the
 * page's own copy — hero headline and eyebrow — and the language's prayer
 * screen screenshot, so a preview never says anything its page doesn't.
 *
 * Re-run after changing the hero copy or re-importing screenshots
 * (tools/import-media.sh). The images are committed, like the screenshots;
 * build.js fails if one is missing.
 */
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");
const C = require("../content.js");
const { SCRIPTS, fontHref, joinsWithoutSpace } = require("./fonts.js");

const DOCS = path.join(__dirname, "..", "docs");
const OUT = path.join(DOCS, "assets", "og");
const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fileUrl = (p) => "file://" + p.split(path.sep).map(encodeURIComponent).join("/");

function card(lang) {
  const L = C.LANGS[lang];
  const copy = C.COPY[lang];
  const s = SCRIPTS[L.script];
  const latin = L.script === "latin" || L.script === "cyrillic";
  const gap = joinsWithoutSpace(L.script) ? "" : " ";
  const lineHeight = latin ? 1.02 : L.script === "urdu" ? 1.9 : 1.25;
  const shot = fileUrl(path.join(DOCS, "assets", "screenshots", L.shots, "prayer-times.webp"));
  const icon = fileUrl(path.join(DOCS, "assets", "app-icon-512x512.png"));

  return `<!DOCTYPE html>
<html lang="${L.htmlLang}"${L.rtl ? ' dir="rtl"' : ""}>
<head>
<meta charset="utf-8">
<link href="${fontHref(L.script)}" rel="stylesheet">
<style>
  :root { --serif: ${s.serif || "'Instrument Serif', serif"}; --sans: ${s.sans || "'Inter', system-ui, sans-serif"} }
  * { margin: 0; padding: 0; box-sizing: border-box }
  html, body { width: 1200px; height: 630px; overflow: hidden }
  body {
    display: flex; color: #F4F1EA; font-family: var(--sans);
    background: radial-gradient(110% 120% at ${L.rtl ? "12%" : "88%"} 0%, #2E3F63 0%, #1A2438 52%, #0F1523 100%);
  }
  .text { flex: 1; min-width: 0; display: flex; flex-direction: column; padding-block: 58px 52px; padding-inline: 72px 28px }
  .brand { display: flex; align-items: center; gap: 16px; font-family: 'Instrument Serif', serif; font-size: 40px }
  .brand img { width: 60px; height: 60px; border-radius: 22%; box-shadow: 0 6px 22px rgba(42, 157, 143, .45) }
  .fit { flex: 1; min-height: 0; display: flex; align-items: center; margin-block: 18px }
  h1 { font-family: var(--serif); font-weight: 400; font-size: 88px; line-height: ${lineHeight}; letter-spacing: ${latin ? "-0.02em" : "0"} }
  h1 em { color: #5CC8B9; font-style: ${latin ? "italic" : "normal"} }
  .rating { font-size: 20px; color: rgba(244, 241, 234, .82); margin-bottom: 8px }
  .rating .stars { color: #E9C46A; letter-spacing: 2px }
  .eyebrow { font-size: 20px; line-height: 1.45; color: rgba(244, 241, 234, .62) }
  .device { width: 372px; flex: none; position: relative }
  .phone {
    position: absolute; top: 62px; inset-inline-start: 18px; width: 300px; height: 650px;
    padding: 9px; border-radius: 46px; background: #0B0F18;
    box-shadow: 0 30px 70px rgba(0, 0, 0, .55), 0 0 0 1px rgba(255, 255, 255, .09);
  }
  .phone img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top; border-radius: 37px }
</style>
</head>
<body>
  <div class="text">
    <div class="brand"><img src="${icon}" alt="">Vakit</div>
    <div class="fit"><h1><span>${esc(copy.h1a)}</span><br><span>${esc(copy.h1b)}</span>${gap}<em>${esc(copy.h1c)}</em></h1></div>
    <div class="rating"><bdi dir="ltr"><span class="stars">★★★★★</span> ${C.SITE.rating.value} · App Store</bdi></div>
    <div class="eyebrow">${esc(copy.eyebrow)}</div>
  </div>
  <div class="device"><div class="phone"><img src="${shot}" alt=""></div></div>
<script>
  // Long headlines (German, Russian, Nastaliq…) shrink until they fit their box.
  document.fonts.ready.then(function () {
    var box = document.querySelector('.fit'), h = box.firstElementChild, size = 88;
    while ((h.offsetHeight > box.clientHeight || h.scrollWidth > box.clientWidth) && size > 36) {
      size -= 2; h.style.fontSize = size + 'px';
    }
  });
</script>
</body>
</html>
`;
}

function main() {
  const langs = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(C.LANGS);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "vakit-og-"));
  fs.mkdirSync(OUT, { recursive: true });
  for (const lang of langs) {
    if (!C.LANGS[lang]) throw new Error(`Unknown language "${lang}"`);
    const html = path.join(tmp, `${lang}.html`);
    const png = path.join(tmp, `${lang}.png`);
    fs.writeFileSync(html, card(lang), "utf8");
    execFileSync(CHROME, [
      "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
      "--allow-file-access-from-files", "--virtual-time-budget=12000", "--window-size=1200,630",
      `--screenshot=${png}`, fileUrl(html),
    ], { stdio: "ignore" });
    const jpg = path.join(OUT, `${lang}.jpg`);
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "84", png, "--out", jpg], { stdio: "ignore" });
    console.log(`  og/${lang}.jpg  ${Math.round(fs.statSync(jpg).size / 1024)} KB`);
  }
  fs.rmSync(tmp, { recursive: true, force: true });
}

main();
