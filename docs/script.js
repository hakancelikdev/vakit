/**
 * Vakit Landing Page — interactivity only.
 *
 * All page copy (features, comparison, reviews, FAQ, showcase) is baked into
 * the HTML at build time by ../build.js so crawlers that don't run JavaScript
 * can read it. Do not render content here — edit ../content.js and rebuild.
 *
 * What lives here: the live prayer clock, the hero's preview video, the
 * showcase gallery's buttons, the iPad/Mac screen tabs, "show all" features, the FAQ
 * accordion, theme toggle, the language menu, smooth scrolling, the mobile menu
 * and the phone-only download dock.
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

/* The last good answer per city, so a flaky connection still shows today's
   times on a repeat visit. Browser storage may be missing; it's only a bonus. */
const STORE_PREFIX = 'vakit-times:';
function storedTimes(cityId, dateKey) {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_PREFIX + cityId));
    return s && s.date === dateKey ? s.result : null;
  } catch (e) { return null; }
}
function storeTimes(cityId, dateKey, result) {
  try { localStorage.setItem(STORE_PREFIX + cityId, JSON.stringify({ date: dateKey, result })); } catch (e) { /* private mode */ }
}

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
    storeTimes(city.id, dateKey, result);
    return result;
  } catch (e) {
    return storedTimes(city.id, dateKey);
  }
}

/* loading → ready, or error (the band hides itself, see styles.css). */
function setClockState(state) {
  const band = document.getElementById('clock');
  if (band) band.dataset.state = state;
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

function markCity(city) {
  document.querySelectorAll('.city-btn').forEach(b => {
    b.classList.toggle('on', b.dataset.cityId === city.id);
  });
  const loc = document.getElementById('loc');
  if (loc) loc.textContent = city.name;
}

async function selectCity(cityId) {
  const city = DATA.cities.find(c => c.id === cityId);
  if (!city) return;
  const previous = current ? currentCity : null;
  currentCity = city;
  markCity(city);

  const data = await fetchPrayerTimes(city);
  if (currentCity.id !== cityId) return; // another city was picked meanwhile
  if (data) {
    current = data;
    setClockState('ready');
    renderClockTick(new Date());
  } else if (previous) {
    // Keep showing the city whose times we have, rather than its times under another name.
    currentCity = previous;
    markCity(previous);
  } else {
    setClockState('error');
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
   Hero video — the prayer screen's sky, muted and looping. It starts only
   after the page has loaded (preload="none" until then), plays while at least
   a third of it is on screen, and never starts by itself for visitors who ask
   for reduced motion or data saving. Tapping it pauses or resumes it (and
   starts it where autoplay is blocked, e.g. iOS Low Power Mode).
   ================================================================ */

const heroVideo = document.getElementById('heroVideo');
const quietVideo = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  !!(navigator.connection && navigator.connection.saveData);
let pageLoaded = document.readyState === 'complete';
let videoVisible = false;
let videoWanted = !quietVideo; // flipped by a tap

function syncVideo() {
  if (!heroVideo) return;
  if (pageLoaded && videoVisible && videoWanted) {
    const p = heroVideo.play();
    if (p && p.catch) p.catch(() => {});
  } else {
    heroVideo.pause();
  }
}

function initHeroVideo() {
  if (!heroVideo) return;
  if (!pageLoaded) window.addEventListener('load', () => { pageLoaded = true; syncVideo(); }, { once: true });
  new IntersectionObserver((entries) => {
    videoVisible = entries[0].isIntersecting;
    syncVideo();
  }, { threshold: 0.33 }).observe(heroVideo);
  heroVideo.addEventListener('click', () => {
    videoWanted = heroVideo.paused;
    pageLoaded = true;
    syncVideo();
  });
}

/* ================================================================
   Showcase gallery — every screen is in the HTML, side by side; the page
   never switches screens for the visitor. Swipe, trackpad and arrow keys
   scroll it natively; the two round buttons are a shortcut for a mouse,
   one screenful per click. They disable at either end.
   ================================================================ */

function initGallery() {
  const gallery = document.getElementById('gallery');
  const prev = document.querySelector('.g-prev');
  const next = document.querySelector('.g-next');
  if (!gallery || !prev || !next) return;
  const rtl = getComputedStyle(gallery).direction === 'rtl';

  // In RTL, scrollLeft runs from 0 to negative values in current browsers.
  const update = () => {
    const pos = Math.abs(gallery.scrollLeft);
    const max = gallery.scrollWidth - gallery.clientWidth - 2;
    prev.disabled = pos <= 2;
    next.disabled = pos >= max;
  };
  const step = (dir) => {
    const item = gallery.querySelector('.g-item');
    const gap = parseFloat(getComputedStyle(gallery.querySelector('.g-track')).columnGap) || 0;
    const width = item ? item.getBoundingClientRect().width + gap : 300;
    const perView = Math.max(1, Math.floor(gallery.clientWidth / width) - 1);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gallery.scrollBy({ left: dir * (rtl ? -1 : 1) * width * perView, behavior: reduce ? 'auto' : 'smooth' });
  };
  prev.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));
  gallery.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ================================================================
   iPad + Mac — each device's tabs switch its own screen
   ================================================================ */

function initDevices() {
  document.querySelectorAll('.dv-col').forEach(col => {
    const tabs = col.querySelectorAll('.dv-tab');
    const shots = col.querySelectorAll('.dv-shot');
    tabs.forEach((tab, i) => tab.addEventListener('click', () => {
      tabs.forEach((t, j) => { t.classList.toggle('on', i === j); t.setAttribute('aria-pressed', String(i === j)); });
      shots.forEach((s, j) => s.classList.toggle('on', i === j));
    }));
  });
}

/* ================================================================
   Features — every card is in the HTML; "show all" only unhides the rest
   ================================================================ */

function initFeatures() {
  const btn = document.getElementById('featAll');
  const groups = document.getElementById('featGroups');
  if (!btn || !groups) return;
  btn.addEventListener('click', () => {
    groups.classList.remove('is-collapsed');
    btn.setAttribute('aria-expanded', 'true');
    // the button hides itself; move focus to the first newly shown feature
    groups.querySelector('.f-extra .f-name')?.setAttribute('tabindex', '-1');
    groups.querySelector('.f-extra .f-name')?.focus({ preventScroll: true });
  });
}

/* ================================================================
   Download dock — phones only (styles.css). Out of the way while the hero's
   or the closing section's own download button is on screen. Not in iPhone
   Safari: the apple-itunes-app meta already gives it Apple's own banner, which
   also opens the app when it's installed — two download bars would be one too many.
   ================================================================ */

/* Safari on iPhone/iPad, not an in-app browser or another engine's shell. */
const isIOSSafari = () => {
  const ua = navigator.userAgent;
  return /iP(hone|od|ad)/.test(ua) && /Safari\//.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|GSA\/|FBAN|FBAV|Instagram|Line\//.test(ua);
};

function initDock() {
  const dock = document.getElementById('dock');
  if (dock && isIOSSafari()) { dock.remove(); return; }
  const hero = document.querySelector('.hero-actions');
  const final = document.querySelector('.final-actions');
  if (!dock || !hero || !final || !('IntersectionObserver' in window)) return;
  const onScreen = new Set();
  let pastHero = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) onScreen.add(e.target); else onScreen.delete(e.target);
      if (e.target === hero) pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
    });
    const show = pastHero && onScreen.size === 0;
    dock.classList.toggle('show', show);
    document.body.classList.toggle('dock-on', show);
  });
  io.observe(hero);
  io.observe(final);
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
  // The button shows a sun or a moon by CSS ([data-theme]); nothing to swap here.
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
  const remember = (lang) => {
    try { localStorage.setItem('preferredLanguage', lang); } catch (e) { /* private mode */ }
  };
  document.querySelectorAll('a[data-lang]').forEach(a => {
    a.addEventListener('click', () => remember(a.dataset.lang));
  });
  const menu = document.querySelector('.lang-menu');
  if (!menu) return;
  document.addEventListener('click', e => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary')?.focus(); }
  });
  suggestLanguage(menu, remember);
}

/* First visit from a browser in another language we have a page for: offer
   that page in a small banner. Never redirect — see language-detection.js.
   Following or dismissing the banner counts as a choice and is remembered. */
function suggestLanguage(menu, remember) {
  let saved;
  try { saved = localStorage.getItem('preferredLanguage'); } catch (e) { return; }
  if (saved) return;

  const current = document.documentElement.lang.toLowerCase().split('-')[0];
  const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
  let link = null;
  for (const pref of prefs) {
    const base = String(pref).toLowerCase().split('-')[0];
    if (base === current) return; // the visitor already reads this page's language
    link = menu.querySelector(`a[data-lang="${base}"]`);
    if (link) break;
  }
  if (!link) return;

  const bar = document.createElement('aside');
  bar.className = 'lang-suggest';
  bar.setAttribute('aria-label', menu.querySelector('summary')?.getAttribute('aria-label') || '');
  const globe = menu.querySelector('summary svg');
  if (globe) bar.appendChild(globe.cloneNode(true));

  const go = document.createElement('a');
  go.href = link.getAttribute('href');
  go.lang = link.lang;
  go.dir = link.dir;
  go.textContent = `${link.textContent} ${link.dir === 'rtl' ? '←' : '→'}`;
  go.addEventListener('click', () => remember(link.dataset.lang));

  const close = document.createElement('button');
  close.type = 'button';
  close.textContent = '×';
  close.setAttribute('aria-label', menu.dataset.closeLabel || '×');
  close.addEventListener('click', () => { remember(current); bar.remove(); });

  bar.append(go, close);
  document.body.appendChild(bar);
}

/* ================================================================
   Init
   ================================================================ */

applyTheme();
initHeroVideo();
initGallery();
initDevices();
initFeatures();
initFAQ();
initDock();
initSmoothScrolling();
initMobileMenu();
initLangMenu();
renderCitySelector();
selectCity(currentCity.id);
setInterval(() => renderClockTick(new Date()), 1000);

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
