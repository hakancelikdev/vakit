#!/usr/bin/env node
/**
 * Imports prayer times for the city pages (cities.js → CITY_PAGES) into
 * cities/times/<id>.json.
 *
 * The times come from the public Aladhan API, with the city's calculation method
 * (CITY_PAGES[id].method). They are fetched once and
 * committed, so `npm run build` stays offline and deterministic — CI rebuilds and
 * compares. The app's own calculator is never involved (owner's decision,
 * 2026-09-10); a few minutes' difference from the app is accepted (2026-11-25).
 *
 * Run it again before the data runs out (`until` in each file — build.js warns
 * 60 days ahead), then `npm run build` and commit.
 *
 * Usage: node tools/import-city-times.js [cityId…]   (default: every city page)
 */

const fs = require("fs");
const path = require("path");
const { CITY_PAGES, TIMES_FROM, TIMES_MONTHS } = require("../cities.js");

const OUT = path.join(__dirname, "..", "cities", "times");
// Aladhan's Hijri calendars: Diyanet's own for Diyanet-method cities, Umm al-Qura elsewhere.
const DIYANET_METHOD = 13;
const PRAYERS = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const hhmm = (s) => s.slice(0, 5);

async function month(c, year, m) {
  const calendar = c.method === DIYANET_METHOD ? "DIYANET" : "UAQ";
  const url = `https://api.aladhan.com/v1/calendar/${year}/${m}?latitude=${c.lat}&longitude=${c.lon}&method=${c.method}&calendarMethod=${calendar}`;
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(url);
    if (res.ok) return (await res.json()).data;
    if (attempt === 3) throw new Error(`${url} → HTTP ${res.status}`);
    await sleep(2000 * attempt);
  }
}

async function importCity(id) {
  const c = CITY_PAGES[id];
  if (!c) throw new Error(`"${id}" is not in CITY_PAGES (cities.js)`);
  const [y0, m0] = TIMES_FROM.split("-").map(Number);
  const days = [];
  let tz = null;
  for (let i = 0; i < TIMES_MONTHS; i++) {
    const y = y0 + Math.floor((m0 - 1 + i) / 12);
    const m = ((m0 - 1 + i) % 12) + 1;
    for (const r of await month(c, y, m)) {
      tz = tz || r.meta.timezone;
      const [dd, mm, yyyy] = r.date.gregorian.date.split("-");
      const h = r.date.hijri;
      // [date, hijri day, hijri month, hijri year, fajr, sunrise, dhuhr, asr, maghrib, isha]
      days.push([`${yyyy}-${mm}-${dd}`, +h.day, h.month.number, +h.year, ...PRAYERS.map((p) => hhmm(r.timings[p]))]);
    }
    await sleep(400);
  }
  const data = { id, tz, method: c.method, from: days[0][0], until: days[days.length - 1][0], days };
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, `${id}.json`), JSON.stringify(data) + "\n", "utf8");
  console.log(`  ${id.padEnd(14)} ${days.length} days, ${data.from} → ${data.until} (${tz})`);
}

(async () => {
  const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(CITY_PAGES);
  for (const id of ids) await importCity(id);
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
