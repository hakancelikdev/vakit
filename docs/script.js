/**
 * Vakit Landing Page — interactivity only.
 *
 * All page copy (features, comparison, reviews, FAQ, showcase) is baked into
 * the HTML at build time by ../build.js so crawlers that don't run JavaScript
 * can read it. Do not render content here — edit ../content.js and rebuild.
 *
 * What lives here: the live prayer clock, showcase preview switching (and its
 * video), the FAQ accordion, theme toggle, the language menu, smooth scrolling
 * and the mobile menu.
 */

/* The page is served per language, and build.js embeds everything the clock
   needs in that language (#vakit-data): prayer names, cities, date locale. */
const DATA = (() => {
  try { return JSON.parse(document.getElementById('vakit-data').textContent); } catch (e) { return null; }
})() || {
  lang: 'tr',
  dateLocale: 'tr-u-ca-gregory-nu-latn',
  prayers: {},
  cities: [{ id: 'istanbul', name: 'İstanbul', lat: 41.0082, lon: 28.9784, method: 13 }],
};

const PRAYER_COLORS = { Fajr: 'var(--p-fajr)', Sunrise: 'var(--p-sunrise)', Dhuhr: 'var(--p-dhuhr)', Asr: 'var(--p-asr)', Maghrib: 'var(--p-maghrib)', Isha: 'var(--p-isha)' };

const PRAYER_KEYS = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const prayerName = (key) => DATA.prayers[key] || key;

/* ================================================================
   Prayer Times (Aladhan)
   ================================================================ */

let currentCity = DATA.cities[0];
let current = null; // { times, timezone }
const cachedTimings = {};

function parseTime(str) {
  const [h, m] = str.split(':').map(Number);
  return { h, m, minutes: h * 60 + m };
}

function fmtTime(h, m) {
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
}

/* Wall-clock time in the city's time zone, not the visitor's — someone in
   Berlin looking at Mecca must see Mecca's next prayer. */
function zonedNow(date, timeZone) {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    }).formatToParts(date);
    const p = Object.fromEntries(parts.map(x => [x.type, x.value]));
    return { day: p.day, month: p.month, year: p.year, h: +p.hour, m: +p.minute, s: +p.second };
  } catch (e) {
    return {
      day: String(date.getDate()).padStart(2, '0'), month: String(date.getMonth() + 1).padStart(2, '0'),
      year: String(date.getFullYear()), h: date.getHours(), m: date.getMinutes(), s: date.getSeconds(),
    };
  }
}

/* The city's time zone isn't known until the first response; until then the
   visitor's own zone picks the date, which is right for their home city. */
const guessZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

async function fetchPrayerTimes(city) {
  const zone = (cachedTimings[city.id] && cachedTimings[city.id].timezone) || guessZone();
  const d = zonedNow(new Date(), zone);
  const dateKey = d.day + '-' + d.month + '-' + d.year;
  const cacheKey = city.id + '_' + dateKey;
  if (cachedTimings[cacheKey]) return cachedTimings[cacheKey];

  try {
    const res = await fetch(
      'https://api.aladhan.com/v1/timings/' + dateKey + '?latitude=' + city.lat +
      '&longitude=' + city.lon + '&method=' + city.method
    );
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    const t = data.data.timings;
    const result = {
      times: PRAYER_KEYS.map(k => ({ n: k, ...parseTime(t[k]) })),
      timezone: (data.data.meta && data.data.meta.timezone) || zone,
    };
    cachedTimings[cacheKey] = result;
    cachedTimings[city.id] = { timezone: result.timezone };
    return result;
  } catch (e) {
    return null;
  }
}

function renderCitySelector() {
  const wrap = document.getElementById('citySelector');
  if (!wrap) return;
  wrap.innerHTML = '';
  DATA.cities.forEach(city => {
    const btn = document.createElement('button');
    btn.className = 'city-btn' + (city.id === currentCity.id ? ' on' : '');
    btn.dataset.cityId = city.id;
    btn.textContent = city.name;
    btn.addEventListener('click', () => selectCity(city.id));
    wrap.appendChild(btn);
  });
}

async function selectCity(cityId) {
  const city = DATA.cities.find(c => c.id === cityId);
  if (!city) return;
  currentCity = city;

  document.querySelectorAll('.city-btn').forEach(b => {
    b.classList.toggle('on', b.dataset.cityId === cityId);
  });

  const loc = document.getElementById('loc');
  if (loc) loc.textContent = city.name;

  const data = await fetchPrayerTimes(city);
  if (data && currentCity.id === cityId) {
    current = data;
    renderClockTick(new Date());
  }
}

function renderClockTick(now) {
  if (!current) return;

  const opts = { weekday: 'short', day: 'numeric', month: 'short', timeZone: current.timezone };
  let dateText;
  try { dateText = now.toLocaleDateString(DATA.dateLocale, opts); } catch (e) { dateText = now.toLocaleDateString(undefined, opts); }
  document.getElementById('date').textContent = dateText;

  const today = current.times;
  const z = zonedNow(now, current.timezone);
  const nowMin = z.h * 60 + z.m + z.s / 60;
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
    const name = document.createElement('span');
    name.className = 'clock-name';
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.background = PRAYER_COLORS[p.n] || 'var(--rule)';
    name.append(dot, prayerName(p.n));
    const time = document.createElement('span');
    time.className = 'clock-t';
    time.textContent = fmtTime(p.h, p.m);
    row.append(name, time);
    list.appendChild(row);
  });
}

/* ================================================================
   Showcase — markup is static, this only switches the visible screen.
   Slot 0 is a muted, looping preview video; it plays only while it is
   the visible slot and on screen, and never for reduced-motion users.
   ================================================================ */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const showcaseVideo = document.querySelector('#phoneScreen video');
let showcaseIndex = 0;
let phoneVisible = true;

function syncVideo() {
  if (!showcaseVideo) return;
  if (showcaseIndex === 0 && phoneVisible && !reducedMotion.matches) {
    const p = showcaseVideo.play();
    if (p && p.catch) p.catch(() => {});
  } else {
    showcaseVideo.pause();
  }
}

function selectShowcase(i) {
  showcaseIndex = i;
  document.querySelectorAll('#scList .sc-item').forEach((el, j) => el.classList.toggle('on', i === j));
  document.querySelectorAll('#phoneScreen .phone-screenshot').forEach((el, j) => el.classList.toggle('on', i === j));
  syncVideo();
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

  if (showcaseVideo) {
    if (reducedMotion.matches) showcaseVideo.removeAttribute('autoplay');
    new IntersectionObserver((entries) => {
      phoneVisible = entries[0].isIntersecting;
      syncVideo();
    }).observe(showcaseVideo);
    reducedMotion.addEventListener?.('change', syncVideo);
    syncVideo();
  }
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

/* Remember the language the visitor chose, so language-detection.js sends
   them to it next time; close the menu on outside click or Escape. */
function initLangMenu() {
  document.querySelectorAll('a[data-lang]').forEach(a => {
    a.addEventListener('click', () => {
      try { localStorage.setItem('preferredLanguage', a.dataset.lang); } catch (e) { /* private mode */ }
    });
  });
  const menu = document.querySelector('.lang-menu');
  if (!menu) return;
  document.addEventListener('click', e => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary')?.focus(); }
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
initLangMenu();
renderCitySelector();
selectCity(currentCity.id);
setInterval(() => renderClockTick(new Date()), 1000);

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
