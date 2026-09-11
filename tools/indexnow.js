#!/usr/bin/env node
/**
 * Tells IndexNow (Bing, Yandex, Seznam, Naver…) that the pages in the sitemap
 * changed, so they are recrawled within hours instead of weeks. Bing's index is
 * what ChatGPT Search and Copilot answer from — Google does not take part.
 *
 * Runs in CI after every deploy (.github/workflows/deploy.yml); by hand:
 *   node tools/indexnow.js            submit every sitemap URL
 *   node tools/indexnow.js --dry-run  print what would be sent
 *
 * The key is public by design: IndexNow proves ownership by fetching
 * docs/<key>.txt from the site. Changing it = new file + INDEXNOW_KEY below.
 */
const fs = require("fs");
const path = require("path");
const { SITE } = require("../content.js");

const INDEXNOW_KEY = "02e8a41e90cf16ca20056fe3157b133a";
const DOCS = path.join(__dirname, "..", "docs");

function main() {
  const keyFile = path.join(DOCS, `${INDEXNOW_KEY}.txt`);
  if (fs.readFileSync(keyFile, "utf8").trim() !== INDEXNOW_KEY) throw new Error(`${keyFile} does not hold the key`);

  const sitemap = fs.readFileSync(path.join(DOCS, "sitemap.xml"), "utf8");
  const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const body = {
    host: new URL(SITE.origin).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE.origin}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  if (process.argv.includes("--dry-run")) {
    console.log(JSON.stringify(body, null, 2));
    return;
  }

  return fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  }).then(async (res) => {
    // 200 = accepted, 202 = accepted, key check pending. Anything else is a real error.
    console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URLs`);
    if (res.status !== 200 && res.status !== 202) {
      console.error(await res.text());
      process.exitCode = 1;
    }
  });
}

main();
