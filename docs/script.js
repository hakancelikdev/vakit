/**
 * Vakit Landing Page — interactivity only.
 *
 * All page copy (features, comparison, reviews, FAQ, showcase) is baked into
 * the HTML at build time by ../build.js so crawlers that don't run JavaScript
 * can read it. Do not render content here — edit ../content.js and rebuild.
 *
 * What lives here: the live prayer clock, showcase preview switching, the FAQ
 * accordion, theme toggle, smooth scrolling and the mobile menu.
 */

const APP_STORE_URL = 'https://apps.apple.com/app/id6748356813';

/* The page is served per-language (/ and /en/), so the document tells us
   which one we're on — there is no client-side language switching. */
const lang = document.documentElement.lang === 'en' ? 'en' : 'tr';

const CITIES = [
  { id: 'istanbul',     en: 'Istanbul',      tr: 'İstanbul',      lat: 41.0082, lon: 28.9784, method: 13 },
  { id: 'mecca',        en: 'Mecca',         tr: 'Mekke',         lat: 21.4225, lon: 39.8262, method: 4 },
  { id: 'medina',       en: 'Medina',        tr: 'Medine',        lat: 24.4672, lon: 39.6024, method: 4 },
  { id: 'london',       en: 'London',        tr: 'Londra',        lat: 51.5074, lon: -0.1278, method: 2 },
  { id: 'berlin',       en: 'Berlin',        tr: 'Berlin',        lat: 52.52,   lon: 13.405,  method: 3 },
  { id: 'paris',        en: 'Paris',         tr: 'Paris',         lat: 48.8566, lon: 2.3522,  method: 12 },
  { id: 'newyork',      en: 'New York',      tr: 'New York',      lat: 40.7128, lon: -74.006, method: 2 },
  { id: 'dubai',        en: 'Dubai',         tr: 'Dubai',         lat: 25.2048, lon: 55.2708, method: 16 },
  { id: 'cairo',        en: 'Cairo',         tr: 'Kahire',        lat: 30.0444, lon: 31.2357, method: 5 },
  { id: 'jakarta',      en: 'Jakarta',       tr: 'Cakarta',       lat: -6.2088, lon: 106.8456, method: 20 },
  { id: 'tokyo',        en: 'Tokyo',         tr: 'Tokyo',         lat: 35.6762, lon: 139.6503, method: 2 },
  { id: 'kualalumpur',  en: 'Kuala Lumpur',  tr: 'Kuala Lumpur',  lat: 3.139,   lon: 101.6869, method: 2 },
];

const TR_NAMES = { Fajr: 'İmsak', Sunrise: 'Güneş', Dhuhr: 'Öğle', Asr: 'İkindi', Maghrib: 'Akşam', Isha: 'Yatsı' };

const PRAYER_COLORS = { Fajr: 'var(--p-fajr)', Sunrise: 'var(--p-sunrise)', Dhuhr: 'var(--p-dhuhr)', Asr: 'var(--p-asr)', Maghrib: 'var(--p-maghrib)', Isha: 'var(--p-isha)' };

const PRAYER_KEYS = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const cityName = (city) => (lang === 'tr' ? city.tr : city.en);
const prayerName = (key) => (lang === 'tr' ? (TR_NAMES[key] || key) : key);

/* ================================================================
   Prayer Times (Aladhan)
   ================================================================ */

let currentCityId = 'istanbul';
let currentTimings = null;
const cachedTimings = {};

function parseTime(str) {
  const [h, m] = str.split(':').map(Number);
  return { h, m, minutes: h * 60 + m };
}

function fmtTime(h, m) {
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
}

async function fetchPrayerTimes(city) {
  const cacheKey = city.id + '_' + new Date().toDateString();
  if (cachedTimings[cacheKey]) return cachedTimings[cacheKey];

  try {
    const res = await fetch(
      'https://api.aladhan.com/v1/timings?latitude=' + city.lat +
      '&longitude=' + city.lon + '&method=' + city.method
    );
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    const t = data.data.timings;
    const times = PRAYER_KEYS.map(k => ({ n: k, ...parseTime(t[k]) }));
    const result = { times, hijri: data.data.date.hijri, gregorian: data.data.date.gregorian };
    cachedTimings[cacheKey] = result;
    return result;
  } catch (e) {
    return null;
  }
}

function renderCitySelector() {
  const wrap = document.getElementById('citySelector');
  if (!wrap) return;
  wrap.innerHTML = '';
  CITIES.forEach(city => {
    const btn = document.createElement('button');
    btn.className = 'city-btn' + (city.id === currentCityId ? ' on' : '');
    btn.dataset.cityId = city.id;
    btn.textContent = cityName(city);
    btn.addEventListener('click', () => selectCity(city.id));
    wrap.appendChild(btn);
  });
}

async function selectCity(cityId) {
  const city = CITIES.find(c => c.id === cityId);
  if (!city) return;
  currentCityId = cityId;

  document.querySelectorAll('.city-btn').forEach(b => {
    b.classList.toggle('on', b.dataset.cityId === cityId);
  });

  const loc = document.getElementById('loc');
  if (loc) loc.textContent = cityName(city);

  const data = await fetchPrayerTimes(city);
  if (data) {
    currentTimings = data.times;
    renderClockTick(new Date());
  }
}

function renderClockTick(now) {
  if (!currentTimings) return;

  const opts = { weekday: 'short', day: 'numeric', month: 'short' };
  document.getElementById('date').textContent = now.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', opts);

  const today = currentTimings;
  const nowMin = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  let next = today.find(p => p.minutes > nowMin);
  let prev = [...today].reverse().find(p => p.minutes <= nowMin);
  let rollover = false;
  if (!next) { next = { ...today[0], minutes: today[0].minutes + 24 * 60 }; rollover = true; }
  if (!prev) { prev = { ...today[today.length - 1], minutes: today[today.length - 1].minutes - 24 * 60 }; }

  document.getElementById('nextName').textContent = prayerName(next.n);

  const diffSec = (next.minutes - nowMin) * 60;
  const hh = Math.floor(diffSec / 3600);
  const mm = Math.floor((diffSec % 3600) / 60);
  const ss = Math.floor(diffSec % 60);
  document.getElementById('countdown').innerHTML =
    String(hh).padStart(2, '0') + '<span class="sep">:</span>' +
    String(mm).padStart(2, '0') + '<span class="sep">:</span>' +
    String(ss).padStart(2, '0');

  const span = next.minutes - prev.minutes;
  const pct = span > 0 ? (1 - (next.minutes - nowMin) / span) * 100 : 0;
  document.getElementById('clockBar').style.width = Math.max(0, Math.min(100, pct)) + '%';

  const list = document.getElementById('clockList');
  list.innerHTML = '';
  today.forEach(p => {
    const row = document.createElement('div');
    const isPast = p.minutes <= nowMin && !rollover;
    const isActive = p.n === next.n && !rollover;
    row.className = 'clock-row' + (isActive ? ' active' : isPast ? ' passed' : '');
    const dotColor = PRAYER_COLORS[p.n] || 'var(--rule)';
    row.innerHTML = '<span class="clock-name"><span class="dot" style="background:' + dotColor + '"></span>' + prayerName(p.n) + '</span><span class="clock-t">' + fmtTime(p.h, p.m) + '</span>';
    list.appendChild(row);
  });
}

/* ================================================================
   Showcase — markup is static, this only switches the visible screen
   ================================================================ */

function selectShowcase(i) {
  document.querySelectorAll('#scList .sc-item').forEach((el, j) => el.classList.toggle('on', i === j));
  document.querySelectorAll('#phoneScreen .phone-screenshot').forEach((el, j) => el.classList.toggle('on', i === j));
}

function initShowcase() {
  const items = document.querySelectorAll('#scList .sc-item');
  if (!items.length) return;

  items.forEach((el, i) => el.addEventListener('click', () => selectShowcase(i)));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) selectShowcase(Number(entry.target.dataset.index));
    });
  }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 });

  items.forEach(el => observer.observe(el));
}

/* ================================================================
   FAQ — markup is static, this only opens and closes it
   ================================================================ */

function initFAQ() {
  document.querySelectorAll('#faqList .faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const open = item.classList.toggle('on');
      q.setAttribute('aria-expanded', String(open));
    });
  });
}

/* ================================================================
   Theme
   ================================================================ */

let theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☾' : '☀';
}

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  applyTheme();
}

/* ================================================================
   Navigation
   ================================================================ */

function initSmoothScrolling() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      document.querySelector('.nav-links')?.classList.remove('open');
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '×' : '≡';
    });
  }
}

/* Remember the language the visitor chose, so language-detection.js
   doesn't bounce them back on the next visit. */
function initLangLinks() {
  document.querySelectorAll('.nav-lang a[data-lang]').forEach(a => {
    a.addEventListener('click', () => localStorage.setItem('preferredLanguage', a.dataset.lang));
  });
}

/* ================================================================
   Init
   ================================================================ */

applyTheme();
initShowcase();
initFAQ();
initSmoothScrolling();
initMobileMenu();
initLangLinks();
renderCitySelector();
selectCity(currentCityId);
setInterval(() => renderClockTick(new Date()), 1000);

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
