/**
 * Vakit Landing Page — Serene Editorial Redesign
 */

/* ================================================================
   Content Data
   ================================================================ */

const APP_STORE_URL = 'https://apps.apple.com/app/id6748356813';

const COPY = {
  en: {
    features: "Features", trust: "Trust", compare: "Why Vakit", reviews: "Reviews", faq: "FAQ", download: "Download",
    eyebrow: "Don\u2019t let your worship be interrupted \u00B7 Free \u00B7 Ad-free",
    h1a: "The worship app,", h1b: "as it", h1c: "should be.",
    heroSub: "The worship app, as it should be. A quiet companion for the five daily prayers \u2014 with Quran, qibla, dhikr, and a calendar that honors your days. Built to disappear when you don\u2019t need it. Waiting when you do.",
    downloadCta: "Download on the App Store", watchTour: "Take the tour \u2192",
    p1: "App Store \u00B7 64 reviews", p2: "Free \u00B7 today", p3: "Calculation methods", p4: "Offline \u00B7 on-device",
    nextPrayer: "Next \u00B7 in",
    "sc-head": "\u00A7 01 \u00B7 Everything, nothing extra",
    "sc-h2a": "A companion,", "sc-h2b": "not an attention machine.",
    "sc-lede": "Nine core tools, each designed to feel calm the moment you open it. Tap any to preview.",
    "trust-eye": "\u00A7 02 \u00B7 Emanet \u2014 a trust",
    "trust-h1": "Your data is", "trust-h2": "a trust,", "trust-h3": "not a product.",
    "trust-lede": "Don\u2019t let your worship be interrupted. Other prayer apps have been caught selling location data. Vakit went a different way: your coordinates never leave your phone. No account. No tracking. No compromise. This isn\u2019t a feature \u2014 it\u2019s a principle.",
    "t-1a": "Download. Open. Pray.",
    "t-1b": "No sign-up, no login, no password you\u2019ll forget. Vakit starts working the moment you install it.",
    "t-2a": "Calculated on your phone.",
    "t-2b": "Prayer times are computed locally from your location, using the method you choose. Nothing is sent to a server to be \u201Clooked up\u201D.",
    "t-3a": "GPS stays with you.",
    "t-3b": "Your coordinates are not transmitted anywhere. We can\u2019t see where you pray, and we don\u2019t want to.",
    "t-4a": "Plain-language policy.",
    "t-4b": "Only anonymous usage counts. Our privacy policy is short enough to read in a minute \u2014 and it will stay that way.",
    "f-eye": "\u00A7 03 \u00B7 Twenty-eight tools",
    "f-h1": "One app,", "f-h2": "enough for a life of worship.",
    "c-h1": "The difference,", "c-h2": "measured.",
    "c-lede": "You already know what\u2019s wrong with the other prayer apps. Here\u2019s how Vakit answers each one, line by line.",
    "r-h1": "Kind words from", "r-h2": "real worshippers.",
    "r-m1": "Average rating", "r-m2": "from 64 App Store reviews",
    "q-h1": "Honest answers", "q-h2": "to honest questions.",
    "fin-h1": "Don\u2019t let your worship", "fin-h2": "be interrupted.",
    "fin-p": "Free today. No account. Works offline. iOS 26 and up.",
    downloadCta2: "Download on the App Store", explore: "Explore features \u2192",
    footContact: "Contact", footFeedback: "Feedback",
  },
  tr: {
    features: "\u00D6zellikler", trust: "Emanet", compare: "Neden Vakit", reviews: "Yorumlar", faq: "SSS", download: "\u0130ndir",
    eyebrow: "\u0130badetin yar\u0131da kesilmesin \u00B7 \u00DCcretsiz \u00B7 Reklams\u0131z",
    h1a: "\u0130badet uygulamas\u0131", h1b: "nas\u0131l olmal\u0131ysa,", h1c: "\u00F6yle.",
    heroSub: "\u0130badet uygulamas\u0131 nas\u0131l olmal\u0131ysa, \u00F6yle. Be\u015F vakit namaz i\u00E7in sade bir arkada\u015F \u2014 Kur\u2019an, k\u0131ble, zikir ve g\u00FCnlerinizi onurland\u0131ran bir takvim ile. \u0130htiya\u00E7 duymad\u0131\u011F\u0131n\u0131zda kenara \u00E7ekilir; duydu\u011Funuzda yan\u0131n\u0131zdad\u0131r.",
    downloadCta: "App Store\u2019dan \u0130ndir", watchTour: "Turu ba\u015Flat \u2192",
    p1: "App Store \u00B7 64 yorum", p2: "\u00DCcretsiz \u00B7 \u015Fu an", p3: "Hesaplama y\u00F6ntemi", p4: "\u00C7evrimd\u0131\u015F\u0131 \u00B7 cihazda",
    nextPrayer: "S\u0131radaki \u00B7 i\u00E7inde",
    "sc-head": "\u00A7 01 \u00B7 Her \u015Fey, fazlas\u0131 de\u011Fil",
    "sc-h2a": "Bir arkada\u015F,", "sc-h2b": "bir dikkat makinesi de\u011Fil.",
    "sc-lede": "Dokuz temel ara\u00E7, her biri a\u00E7\u0131l\u0131r a\u00E7\u0131lmaz huzur hissettirecek \u015Fekilde tasarland\u0131. \u00D6nizlemek i\u00E7in dokun.",
    "trust-eye": "\u00A7 02 \u00B7 Emanet",
    "trust-h1": "Verileriniz", "trust-h2": "bir emanettir,", "trust-h3": "bir \u00FCr\u00FCn de\u011Fil.",
    "trust-lede": "\u0130badetin yar\u0131da kesilmesin. Di\u011Fer ibadet uygulamalar\u0131 konum verilerini sat\u0131rken yakalan\u0131d\u0131. Vakit farkl\u0131 bir yol se\u00E7ti: koordinatlar\u0131n\u0131z telefonunuzdan asla \u00E7\u0131kmaz. Hesap yok. Takip yok. Taviz yok.",
    "t-1a": "\u0130ndir. A\u00E7. K\u0131l.",
    "t-1b": "Kay\u0131t yok, giri\u015F yok, unutaca\u011F\u0131n bir \u015Fifre yok. Vakit y\u00FCkledi\u011Fin anda \u00E7al\u0131\u015F\u0131r.",
    "t-2a": "Telefonunda hesaplan\u0131r.",
    "t-2b": "Namaz vakitleri, se\u00E7ti\u011Fin y\u00F6nteme g\u00F6re cihaz\u0131nda yerel olarak hesaplan\u0131r. Hi\u00E7bir sunucuya \u2018sorgu\u2019 gitmez.",
    "t-3a": "GPS sende kal\u0131r.",
    "t-3b": "Koordinatlar\u0131n hi\u00E7bir yere iletilmez. Nerede namaz k\u0131ld\u0131\u011F\u0131n\u0131 g\u00F6remeyiz, g\u00F6rmek de istemeyiz.",
    "t-4a": "Sade bir politika.",
    "t-4b": "Sadece anonim kullan\u0131m say\u0131lar\u0131. Gizlilik politikam\u0131z bir dakikada okunabilecek kadar k\u0131sa \u2014 ve \u00F6yle kalacak.",
    "f-eye": "\u00A7 03 \u00B7 Yirmi sekiz ara\u00E7",
    "f-h1": "Tek uygulama,", "f-h2": "bir \u00F6m\u00FCrl\u00FCk ibadete yeter.",
    "c-h1": "Fark,", "c-h2": "\u00F6l\u00E7\u00FClm\u00FC\u015F.",
    "c-lede": "Di\u011Fer ibadet uygulamalar\u0131ndaki sorunlar\u0131 biliyorsun. \u0130\u015Fte Vakit\u2019in her birine sat\u0131r sat\u0131r cevab\u0131.",
    "r-h1": "Ger\u00E7ek kullan\u0131c\u0131lardan", "r-h2": "g\u00FCzel s\u00F6zler.",
    "r-m1": "Ortalama puan", "r-m2": "64 App Store yorumundan",
    "q-h1": "D\u00FCr\u00FCst sorulara", "q-h2": "d\u00FCr\u00FCst cevaplar.",
    "fin-h1": "\u0130badetin yar\u0131da", "fin-h2": "kesilmesin.",
    "fin-p": "\u015Eu an \u00FCcretsiz. Hesap yok. \u00C7evrimd\u0131\u015F\u0131 \u00E7al\u0131\u015F\u0131r. iOS 26 ve \u00FCzeri.",
    downloadCta2: "App Store\u2019dan \u0130ndir", explore: "\u00D6zellikleri ke\u015Ffet \u2192",
    footContact: "\u0130leti\u015Fim", footFeedback: "Geri Bildirim",
  }
};

const CITIES = [
  { id: 'istanbul',     en: 'Istanbul',      tr: '\u0130stanbul',     lat: 41.0082, lon: 28.9784, method: 13 },
  { id: 'mecca',        en: 'Mecca',         tr: 'Mekke',            lat: 21.4225, lon: 39.8262, method: 4 },
  { id: 'medina',       en: 'Medina',        tr: 'Medine',           lat: 24.4672, lon: 39.6024, method: 4 },
  { id: 'london',       en: 'London',        tr: 'Londra',           lat: 51.5074, lon: -0.1278, method: 2 },
  { id: 'berlin',       en: 'Berlin',        tr: 'Berlin',           lat: 52.52,   lon: 13.405,  method: 3 },
  { id: 'paris',        en: 'Paris',         tr: 'Paris',            lat: 48.8566, lon: 2.3522,  method: 12 },
  { id: 'newyork',      en: 'New York',      tr: 'New York',        lat: 40.7128, lon: -74.006, method: 2 },
  { id: 'dubai',        en: 'Dubai',         tr: 'Dubai',            lat: 25.2048, lon: 55.2708, method: 16 },
  { id: 'cairo',        en: 'Cairo',         tr: 'Kahire',           lat: 30.0444, lon: 31.2357, method: 5 },
  { id: 'jakarta',      en: 'Jakarta',       tr: 'Cakarta',          lat: -6.2088, lon: 106.8456, method: 20 },
  { id: 'tokyo',        en: 'Tokyo',         tr: 'Tokyo',            lat: 35.6762, lon: 139.6503, method: 2 },
  { id: 'kualalumpur',  en: 'Kuala Lumpur',  tr: 'Kuala Lumpur',    lat: 3.139,   lon: 101.6869, method: 2 },
];

const TR_NAMES = { Fajr: "\u0130msak", Sunrise: "G\u00FCne\u015F", Dhuhr: "\u00D6\u011Fle", Asr: "\u0130kindi", Maghrib: "Ak\u015Fam", Isha: "Yats\u0131" };

const PRAYER_COLORS = { Fajr: "var(--p-fajr)", Sunrise: "var(--p-sunrise)", Dhuhr: "var(--p-dhuhr)", Asr: "var(--p-asr)", Maghrib: "var(--p-maghrib)", Isha: "var(--p-isha)" };

const PRAYER_KEYS = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

/* ================================================================
   Prayer Times API (Aladhan)
   ================================================================ */

let currentCityId = 'istanbul';
let cachedTimings = {};

function parseTime(str) {
  const [h, m] = str.split(':').map(Number);
  return { h, m, minutes: h * 60 + m };
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

const FEATURES = {
  en: [
    {n:"Prayer Times", d:"13 calculation methods, timezone-aware, travel-detecting."},
    {n:"Apple Watch", d:"Prayer times, live qibla, 12 watch face complications."},
    {n:"Qibla Compass", d:"Haptic bearing with distance to the Ka\u2019bah."},
    {n:"Holy Quran", d:"114 surahs. Word-by-word, tafsir, recitation, classical Mushaf."},
    {n:"Hadith", d:"36,390 ahadith across seven major collections."},
    {n:"Dhikr Counter", d:"Ring-based progress, presets, and custom dhikr."},
    {n:"Asma al-Husna", d:"99 names of Allah, with meaning and reflection."},
    {n:"Hijri Calendar", d:"Gregorian + Hijri, with special days and Ramadan."},
    {n:"Ablution Guide", d:"Step-by-step wudu, taught and remembered."},
    {n:"Prayer Guide", d:"17 prayer types, illustrated, Madhab-aware."},
    {n:"Zakat & Fitr", d:"Calculators grounded in classical rulings."},
    {n:"Widgets", d:"Home, lock screen, StandBy — expanded with iOS 26."},
    {n:"Live Activity", d:"Dynamic Island and lock-screen countdowns."},
    {n:"Control Center", d:"Six quick actions — Qibla, next prayer, more."},
    {n:"Worship Tracking", d:"Activity Rings: prayer, nafl, Jumu’ah, Eid, Tarawih."},
    {n:"Holy Day Reminders", d:"Notification the night before 11 Islamic days."},
    {n:"Notifications", d:"On-device, local, dependable."},
    {n:"Siri Shortcuts", d:"Ask for times, Qibla, ayat by voice."},
    {n:"Unified Search", d:"One search, across every tool."},
    {n:"Bookmarks", d:"Save ayat, hadith, and dhikr."},
    {n:"iCloud Sync", d:"Your bookmarks, on every device."},
    {n:"Tafsir", d:"Diyanet commentary, in-line with the text."},
    {n:"Share Cards", d:"Beautiful cards for ayat and dhikr."},
    {n:"Fasting", d:"Ramadan, Shawwal, and day-by-day tracking."},
    {n:"Dhikr Circles", d:"Private, synced circles for families."},
    {n:"Nearby Mosques", d:"Find masajid without sharing your location."},
    {n:"Support Vakit", d:"Opt-in ways to keep the free app alive."},
    {n:"Dark Mode", d:"Warm, quiet dark for the late hours."},
  ],
  tr: [
    {n:"Namaz Vakitleri", d:"13 hesaplama y\u00F6ntemi, zaman dilimine duyarl\u0131, seyahat alg\u0131layan."},
    {n:"Apple Watch", d:"Namaz vakitleri, canl\u0131 k\u0131ble, 12 watch face complication."},
    {n:"K\u0131ble Pusulas\u0131", d:"Haptik y\u00F6nlendirme, K\u00E2be\u2019ye mesafe bilgisi."},
    {n:"Kur\u2019an-\u0131 Kerim", d:"114 sure. Kelime kelime, tefsir, tilavet, klasik Mushaf."},
    {n:"Hadis", d:"Yedi b\u00FCy\u00FCk koleksiyondan 36.390 hadis."},
    {n:"Zikirmatik", d:"Halka ilerleme, haz\u0131r zikirler ve \u00F6zel zikirler."},
    {n:"Esma\u00FC\u2019l H\u00FCsna", d:"Allah\u2019\u0131n 99 ismi, anlam\u0131 ve tefekkür\u00FC ile."},
    {n:"Hicri Takvim", d:"Miladi + Hicri, \u00F6zel g\u00FCnler ve Ramazan."},
    {n:"Abdest Rehberi", d:"Ad\u0131m ad\u0131m abdest, \u00F6\u011Fretici ve hat\u0131rlat\u0131c\u0131."},
    {n:"Namaz Rehberi", d:"17 namaz t\u00FCr\u00FC, ill\u00FCstrasyonlu, mezheb bilin\u00E7li."},
    {n:"Zek\u00E2t & Fitre", d:"Klasik f\u0131kha dayanan hesaplay\u0131c\u0131lar."},
    {n:"Widget\u2019lar", d:"Ana ekran, kilit ekran\u0131, StandBy \u2014 iOS 26 ile geni\u015Fledi."},
    {n:"Live Activity", d:"Dynamic Island ve kilit ekran\u0131 geri say\u0131m."},
    {n:"Control Center", d:"Alt\u0131 h\u0131zl\u0131 eylem \u2014 K\u0131ble, sonraki vakit, dahas\u0131."},
    {n:"\u0130badet Takibi", d:"Activity Ring: namaz, nafile, Cuma, Bayram, Teravih."},
    {n:"M\u00FCbarek G\u00FCn Hat\u0131rlatma", d:"11 \u00F6nemli dini g\u00FCnden bir gece \u00F6nce bildirim."},
    {n:"Bildirimler", d:"Cihazda, yerel, g\u00FCvenilir."},
    {n:"Siri K\u0131sayollar\u0131", d:"Vakitleri, K\u0131ble\u2019yi, ayeti sesle sor."},
    {n:"Birle\u015Fik Arama", d:"Tek arama, her ara\u00E7."},
    {n:"Yer \u0130mleri", d:"Ayet, hadis ve zikirleri kaydet."},
    {n:"iCloud Senkron", d:"Yer imleriniz her cihazda."},
    {n:"Tefsir", d:"Diyanet tefsiri, metinle hizal\u0131."},
    {n:"Payla\u015F\u0131m Kartlar\u0131", d:"Ayet ve zikirler i\u00E7in g\u00FCzel kartlar."},
    {n:"Oru\u00E7", d:"Ramazan, \u015Eevval ve g\u00FCnl\u00FCk takip."},
    {n:"Zikir Halkas\u0131", d:"Aileler i\u00E7in \u00F6zel, senkronize halkalar."},
    {n:"Yak\u0131n Camiler", d:"Konumu payla\u015Fmadan camileri bulun."},
    {n:"Vakit\u2019i Ya\u015Fat", d:"\u00DCcretsiz uygulamay\u0131 opt-in destekleme yollar\u0131."},
    {n:"Karanl\u0131k Mod", d:"Ge\u00E7 saatler i\u00E7in s\u0131cak, sakin karanl\u0131k."},
  ]
};

const SHOWCASE = {
  en: [
    {t:"Times, on your wrist.", d:"The five prayers, your city, today. Apple Watch keeps them in reach. Dynamic Island when your hands are busy.", img: 1},
    {t:"Always one screen away.", d:"Home Screen widgets, lock-screen widgets, StandBy, and Dynamic Island. A quiet glance \u2014 never a stare.", img: 2},
    {t:"The Quran, even offline.", d:"Read, listen, reflect \u2014 word-by-word, tafsir, classical Mushaf. Bookmarks sync across your devices when you are back online.", img: 3},
    {t:"Every tool, free \u2014 always.", d:"Quran, dhikr, hadith, asma, calendar, calculators \u2014 all in one hub. Nothing locked behind a paywall.", img: 4},
    {t:"Qibla, privately.", d:"Haptic bearing with distance to the Ka\u2019bah. Your coordinates never leave your phone \u2014 no account, no tracking.", img: 5},
    {t:"Find the jama\u2019ah.", d:"Nearby mosques on the map, with whether you can still catch the prayer. Your location stays with you.", img: 6},
    {t:"Seventeen prayers, illustrated.", d:"Wudu, every prayer type, congregational nuances, and short surahs \u2014 taught and remembered, without condescension.", img: 7},
    {t:"A calendar that remembers.", d:"Hijri and Gregorian together. Kandil nights, Ramadan, eids, arefe \u2014 every day that matters, marked.", img: 8},
    {t:"Your worship, in rings.", d:"Activity Rings for prayer, fasting, Quran, dhikr and hadith. Streaks and hatim \u2014 gentle progress, no guilt.", img: 9},
  ],
  tr: [
    {t:"Vakitler, kolunuzda.", d:"Be\u015F vakit, \u015Fehrin, bug\u00FCn. Apple Watch bunlar\u0131 elinizin alt\u0131na ta\u015F\u0131r. Eller doluysa Dynamic Island.", img: 1},
    {t:"Her ekranda bir bak\u0131\u015F.", d:"Ana ekran widget\u2019lar\u0131, kilit ekran\u0131 widget\u2019lar\u0131, StandBy ve Dynamic Island. Sessiz bir bak\u0131\u015F \u2014 hi\u00E7 dikkat \u00E7almadan.", img: 2},
    {t:"Kur\u2019an, internetsiz de.", d:"Oku, dinle, tefekk\u00FCr et \u2014 kelime kelime, tefsir, klasik Mushaf. Yer imleri \u00E7evrim i\u00E7ine d\u00F6nd\u00FC\u011F\u00FCn\u00FCzde cihazlar aras\u0131 senkron.", img: 3},
    {t:"T\u00FCm ara\u00E7lar, hep \u00FCcretsiz.", d:"Kur\u2019an, zikir, hadis, esma, takvim, hesaplay\u0131c\u0131lar \u2014 tek bir hub\u2019da. Hi\u00E7bir \u00F6zellik paywall arkas\u0131nda de\u011Fil.", img: 4},
    {t:"K\u0131ble, gizlili\u011Fin yerinde.", d:"Haptik y\u00F6n ve K\u00E2be\u2019ye mesafe. Koordinatlar\u0131n\u0131z telefonunuzdan asla \u00E7\u0131kmaz \u2014 hesap yok, takip yok.", img: 5},
    {t:"Cemaate yeti\u015Fin.", d:"Yak\u0131ndaki camiler haritada, vakte yeti\u015Fme ipucu ile. Konum d\u0131\u015Far\u0131ya \u00E7\u0131kmaz.", img: 6},
    {t:"On yedi namaz, resimli.", d:"Abdest, t\u00FCm namaz t\u00FCrleri, cemaat incelikleri ve namazda okunan k\u0131sa sureler \u2014 kibirsiz, \u00F6\u011Fretici.", img: 7},
    {t:"Hat\u0131rlayan bir takvim.", d:"Hicri ve Miladi birlikte. Kandil geceleri, Ramazan, bayramlar, arefe \u2014 \u00F6nemli her g\u00FCn, i\u015Faretli.", img: 8},
    {t:"\u0130badetinizin halkalar\u0131.", d:"Namaz, oru\u00E7, Kur\u2019an, zikir ve hadis i\u00E7in Activity Ring. Seriler ve hatim \u2014 sakin ilerleme, su\u00E7luluk yok.", img: 9},
  ]
};

const COMPARE = {
  en: [
    { f:"Advertising", o:"Casino and inappropriate ads, shown beside religious content.", v:"No ads today." },
    { f:"Privacy", o:"Location data sold to third parties (publicly reported).", v:"Coordinates stay on your phone. No tracking." },
    { f:"Offline", o:"Core features require an internet connection.", v:"Prayer, Qibla, Quran, Dhikr \u2014 all work offline." },
    { f:"Lock Screen", o:"Widgets break between iOS updates.", v:"Live Activity, Dynamic Island, StandBy \u2014 all supported." },
    { f:"Accuracy", o:"DST errors, limited calculation methods.", v:"13 methods, timezone-aware, travel-detecting." },
    { f:"Design", o:"Dated interfaces; regressions after each update.", v:"iOS 26 Liquid Glass. Quiet, modern, fast." },
    { f:"Cost", o:"Paywalls, subscriptions, \u2018premium\u2019 tiers.", v:"Free today. No tier, no upsell." },
  ],
  tr: [
    { f:"Reklam", o:"Dini i\u00E7eri\u011Fin yan\u0131nda casino ve uygunsuz reklamlar.", v:"\u015Eu an reklam yok." },
    { f:"Gizlilik", o:"\u00DC\u00E7\u00FCnc\u00FC taraflara sat\u0131lan konum verisi (bas\u0131na yans\u0131d\u0131).", v:"Koordinatlar telefonunuzda kal\u0131r. Takip yok." },
    { f:"\u00C7evrimd\u0131\u015F\u0131", o:"Temel \u00F6zellikler internet gerektirir.", v:"Namaz, K\u0131ble, Kur\u2019an, Zikir \u2014 hepsi \u00E7evrimd\u0131\u015F\u0131." },
    { f:"Kilit Ekran\u0131", o:"Widget\u2019lar iOS g\u00FCncellemelerinde bozulur.", v:"Live Activity, Dynamic Island, StandBy \u2014 tamam\u0131 destekli." },
    { f:"Do\u011Fruluk", o:"Yaz/k\u0131\u015F saati hatalar\u0131, s\u0131n\u0131rl\u0131 hesaplama.", v:"13 y\u00F6ntem, zaman dilimi bilinci, seyahat alg\u0131lama." },
    { f:"Tasar\u0131m", o:"Eski aray\u00FCzler; her g\u00FCncellemede geriye d\u00F6n\u00FC\u015Fler.", v:"iOS 26 Liquid Glass. Sade, modern, h\u0131zl\u0131." },
    { f:"Maliyet", o:"Paywall, abonelik, \u2018premium\u2019 seviyeler.", v:"\u015Eu an \u00FCcretsiz. Seviye yok, upsell yok." },
  ]
};

const REVIEWS = {
  en: [
    {t:"A comprehensive app.", b:"I loved it \u2014 no ads pop up during worship. Truly comprehensive.", n:"M\u00FCg\u00FC\u015Fka"},
    {t:"Wonderful.", b:"The cleanest, most usable app you can find. No ads, a clean and elegant interface. The qibla finder works really accurately. The rest of the features are lovely too.", n:"alpaslanx"},
    {t:"Flawless.", b:"Hats off to the developer. No ads. In sync with Diyanet. Serious effort put in. Clearly built for the sake of Allah alone. Thank you.", n:"Keskin2298"},
    {t:"Exactly what was needed.", b:"May God bless whoever thought of this. Explanatory, ad-free and to the point. It would be even better with optional prayers (nafl), I think.", n:"Sswnn21"},
    {t:"Very good.", b:"Better than the other one \u2014 simple, easy to understand, and free.", n:"sifresiniunutandavinci"},
    {t:"May God be pleased.", b:"I was tired of ad-filled, paywalled, unusable interfaces. Vakit is truly wonderful \u2014 works everywhere, offline, ad-free. Quran, hadith, dhikr, prayer tracking \u2014 I barely need any other app.", n:"h.\u00E744"},
    {t:"The best one.", b:"I haven\u2019t seen anything better than this \u2014 an app that should be on every phone. God bless the developer.", n:"Bessey \u00C7elik"},
    {t:"Truly useful.", b:"The app is extremely useful and practical. It should be on every Muslim\u2019s phone. God bless the developer.", n:"tolgalive"},
    {t:"So beautiful.", b:"I was so happy it\u2019s free. May God be pleased.", n:"F Bozkurt"},
    {t:"Well done.", b:"An amazing app.", n:"OzanGalenar"},
  ],
  tr: [
    {t:"Kapsaml\u0131 bir uygulama.", b:"\u00C7ok be\u011Fendim uygulamay\u0131, ibadet s\u0131ras\u0131nda reklam \u00E7\u0131km\u0131yor.", n:"M\u00FCg\u00FC\u015Fka"},
    {t:"Harika.", b:"Bulabilece\u011Finiz en temiz ve kullan\u0131\u015Fl\u0131 uygulama. Reklam yok, aray\u00FCz \u00E7ok sade ve \u015F\u0131k. K\u0131ble bulma k\u0131sm\u0131 ger\u00E7ekten \u00E7ok do\u011Fru ve g\u00FCzel \u00E7al\u0131\u015F\u0131yor. Di\u011Fer i\u00E7erikleri de \u00E7ok ho\u015F olmu\u015F.", n:"alpaslanx"},
    {t:"Kusursuz.", b:"Yapan\u0131n eline sa\u011Fl\u0131k. Reklam yok. Diyanet ile uyumlu. Ciddi emek verilmi\u015F. Belliki sadece Allah r\u0131zas\u0131 i\u00E7in. Sa\u011Folun.", n:"Keskin2298"},
    {t:"\u0130steklerin tam kar\u015F\u0131l\u0131\u011F\u0131.", b:"Kim d\u00FC\u015F\u00FCn\u00FCp yapabildiyse Allah raz\u0131 olsun. A\u00E7\u0131klay\u0131c\u0131, reklams\u0131z ve net. Sadece nafile namaz\u0131 eklenebilirse \u00E7ok iyi olur diye d\u00FC\u015F\u00FCn\u00FCyorum.", n:"Sswnn21"},
    {t:"\u00C7ok iyi.", b:"Di\u011Fer uygulamadan daha iyi; sade, anla\u015F\u0131l\u0131r ve \u00FCcretsiz.", n:"sifresiniunutandavinci"},
    {t:"Allah raz\u0131 olsun.", b:"Reklaml\u0131, s\u00FCrekli para isteyen kullan\u0131\u015Fs\u0131z aray\u00FCzlerden b\u0131km\u0131\u015Ft\u0131m. Vakit ger\u00E7ekten harika; her yerde \u00E7al\u0131\u015Fmas\u0131, internetsiz olmas\u0131, reklams\u0131z olmas\u0131 harika. Kuran, hadis, zikirmatik, namaz takibi \u2014 ba\u015Fka uygulamaya ihtiyac\u0131m yok.", n:"h.\u00E744"},
    {t:"En iyisi.", b:"Bundan daha iyisini g\u00F6rmedim. Her telefonda olmas\u0131 gereken bir uygulama. Geli\u015Ftiren arkada\u015Ftan Allah raz\u0131 olsun.", n:"Bessey \u00C7elik"},
    {t:"Ger\u00E7ekten faydal\u0131.", b:"Uygulama \u00E7ok faydal\u0131 ve pratik. Her M\u00FCsl\u00FCman\u0131n telefonunda olmas\u0131 gereken bir uygulama. Geli\u015Ftirenden Allah raz\u0131 olsun.", n:"tolgalive"},
    {t:"\u00C7ok g\u00FCzel.", b:"\u00DCcretsiz olmas\u0131na \u00E7ok sevindim Allah raz\u0131 olsun.", n:"F Bozkurt"},
    {t:"Eme\u011Finize Sa\u011Fl\u0131k.", b:"Harika bir uygulama.", n:"OzanGalenar"},
  ]
};

const FAQ = {
  en: [
    {q:"Does it work without internet?", a:"Yes. Prayer times are computed on your phone from your location. Quran, qibla, dhikr, and every core tool work fully offline."},
    {q:"Will notifications arrive if I never open the app?", a:"Yes. They\u2019re scheduled locally. You\u2019ll receive them even when the app is closed. If you grant \u2018Always\u2019 location access, Vakit quietly recalculates after you travel."},
    {q:"Is everything really free?", a:"Today, yes \u2014 the entire app is free, with no subscriptions, paywalls, or \u2018premium\u2019 tier. I can\u2019t promise that forever (nobody honestly can), but I can promise there\u2019s no catch today."},
    {q:"Where do prayer times come from?", a:"They\u2019re not fetched from a server. Vakit calculates them on your device using the method you pick \u2014 13 are available \u2014 and your local coordinates."},
    {q:"What\u2019s in the Quran feature?", a:"All 114 surahs, word-by-word analysis, Diyanet tafsir, traditional Mushaf view, audio recitation, and a hatim tracker. Everything works offline."},
    {q:"How does worship tracking work?", a:"An Activity Ring-style view logs your prayers, Quran reading, and dhikr. Streaks and gentle statistics help you keep going, without guilt."},
    {q:"Which widgets exist?", a:"Several widget families covering prayer times, countdown, verse of the day, name of the day, Hijri calendar, holy days, moon phase, and worship streaks. Available on the Home Screen, Lock Screen, and StandBy."},
    {q:"Is there an Apple Watch app?", a:"Yes. The Apple Watch app shows prayer times (countdown + list), a live qibla compass, and 12 watch face complications across all faces. It works alongside iPhone — no separate setup."},
  ],
  tr: [
    {q:"\u0130nternet ba\u011Flant\u0131s\u0131 olmadan \u00E7al\u0131\u015F\u0131r m\u0131?", a:"Evet. Namaz vakitleri konumunuza g\u00F6re telefonunuzda hesaplan\u0131r. Kur\u2019an, k\u0131ble, zikir ve t\u00FCm temel ara\u00E7lar tamamen \u00E7evrimd\u0131\u015F\u0131 \u00E7al\u0131\u015F\u0131r."},
    {q:"Uygulamay\u0131 a\u00E7masam bile bildirimler gelir mi?", a:"Evet. Bildirimler cihaz\u0131n\u0131zda yerel olarak planlan\u0131r. Uygulama kapal\u0131yken bile bildirim al\u0131rs\u0131n\u0131z. \u2018Her Zaman\u2019 konum izni verirseniz, seyahat sonras\u0131 vakitler sessizce yeniden hesaplan\u0131r."},
    {q:"Her \u015Fey ger\u00E7ekten \u00FCcretsiz mi?", a:"\u015Eu an evet \u2014 t\u00FCm uygulama \u00FCcretsiz, abonelik yok, paywall yok, \u2018premium\u2019 yok. Sonsuza kadar b\u00F6yle olaca\u011F\u0131na s\u00F6z veremem (kimse d\u00FCr\u00FCst\u00E7e veremez), ama \u015Fu an kat\u0131ks\u0131z \u00FCcretsiz oldu\u011Funa s\u00F6z verebilirim."},
    {q:"Namaz vakitleri nereden geliyor?", a:"Bir sunucudan \u00E7ekilmiyor. Vakit bunlar\u0131 cihaz\u0131n\u0131zda, se\u00E7ti\u011Finiz y\u00F6nteme (13 y\u00F6ntem mevcut) ve konumunuza g\u00F6re hesaplar."},
    {q:"Kur\u2019an \u00F6zelli\u011Finde neler var?", a:"T\u00FCm 114 sure, kelime kelime analiz, Diyanet tefsiri, geleneksel Mushaf g\u00F6r\u00FCn\u00FCm\u00FC, sesli tilavet ve hatim takibi. Her \u015Fey \u00E7evrimd\u0131\u015F\u0131."},
    {q:"\u0130badet takibi nas\u0131l \u00E7al\u0131\u015F\u0131r?", a:"Activity Ring tarz\u0131 bir g\u00F6r\u00FCn\u00FCm namazlar\u0131n\u0131z\u0131, Kur\u2019an okuman\u0131z\u0131 ve zikirlerinizi kaydeder. S\u00FCreklili\u011Finizi ve istatistiklerinizi nazik\u00E7e g\u00F6sterir."},
    {q:"Hangi widget\u2019lar var?", a:"Namaz vakitleri, geri say\u0131m, g\u00FCn\u00FCn ayeti, g\u00FCn\u00FCn esmas\u0131, Hicri takvim, m\u00FCbarek g\u00FCnler, ay faz\u0131 ve ibadet serileri i\u00E7in widget aileleri. Ana ekran, kilit ekran\u0131 ve StandBy modunda kullan\u0131labilir."},
    {q:"Apple Watch uygulamas\u0131 var m\u0131?", a:"Evet. Apple Watch uygulamas\u0131 namaz vakitlerini (geri say\u0131m + liste), canl\u0131 k\u0131ble pusulas\u0131n\u0131 ve t\u00FCm watch face\u2019ler i\u00E7in 12 complication\u2019\u0131 destekler. iPhone ile birlikte \u00E7al\u0131\u015F\u0131r \u2014 ayr\u0131 kurulum yok."},
  ]
};

/* ================================================================
   State
   ================================================================ */

let lang = localStorage.getItem('preferredLanguage') || 'tr';

/* ================================================================
   Render Functions
   ================================================================ */

function fmtTime(h, m) {
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
}

function renderMarquee() {
  const enNames = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  const names = lang === 'tr' ? enNames.map(n => TR_NAMES[n]) : enNames;
  const line = Array(3).fill(names.join(' \u00B7 ')).join(' \u00B7 ');
  const el = document.getElementById('marquee');
  el.innerHTML = '<span>' + line + '</span><span>' + line + '</span>';
}

let currentTimings = null;

function renderCitySelector() {
  const wrap = document.getElementById('citySelector');
  if (!wrap) return;
  wrap.innerHTML = '';
  CITIES.forEach(city => {
    const btn = document.createElement('button');
    btn.className = 'city-btn' + (city.id === currentCityId ? ' on' : '');
    btn.textContent = lang === 'tr' ? city.tr : city.en;
    btn.addEventListener('click', () => selectCity(city.id));
    wrap.appendChild(btn);
  });
}

async function selectCity(cityId) {
  currentCityId = cityId;
  const city = CITIES.find(c => c.id === cityId);
  if (!city) return;

  // Update selector highlight
  document.querySelectorAll('.city-btn').forEach(b => {
    b.classList.toggle('on', b.textContent === (lang === 'tr' ? city.tr : city.en));
  });

  // Update location label
  document.getElementById('loc').textContent = lang === 'tr' ? city.tr : city.en;

  // Fetch prayer times
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

  const name = lang === 'tr' ? (TR_NAMES[next.n] || next.n) : next.n;
  document.getElementById('nextName').textContent = name;

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
    const n = lang === 'tr' ? (TR_NAMES[p.n] || p.n) : p.n;
    const dotColor = PRAYER_COLORS[p.n] || 'var(--rule)';
    row.innerHTML = '<span class="clock-name"><span class="dot" style="background:' + dotColor + '"></span>' + n + '</span><span class="clock-t">' + fmtTime(p.h, p.m) + '</span>';
    list.appendChild(row);
  });
}

let showcaseObserver = null;

function renderShowcase() {
  const L = SHOWCASE[lang];
  const list = document.getElementById('scList');
  const screen = document.getElementById('phoneScreen');
  list.innerHTML = '';
  screen.innerHTML = '';

  // Clean up previous observer
  if (showcaseObserver) { showcaseObserver.disconnect(); showcaseObserver = null; }

  L.forEach((item, i) => {
    const el = document.createElement('button');
    el.className = 'sc-item' + (i === 0 ? ' on' : '');
    el.dataset.index = i;
    el.innerHTML =
      '<span class="sc-num">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<div class="sc-body"><h3>' + item.t + '</h3><p>' + item.d + '</p></div>' +
      '<span class="sc-tag">' + (lang === 'tr' ? '\u00D6nizle' : 'Preview') + '</span>';
    el.addEventListener('click', () => selectShowcase(i));
    list.appendChild(el);

    const img = document.createElement('img');
    img.className = 'phone-screenshot' + (i === 0 ? ' on' : '');
    img.dataset.i = i;
    img.src = 'assets/screenshots/' + lang + '/' + item.img + '.webp';
    img.alt = item.t;
    img.loading = 'lazy';
    screen.appendChild(img);
  });

  // IntersectionObserver: auto-select showcase item on scroll
  showcaseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.dataset.index, 10);
        selectShowcase(idx);
      }
    });
  }, {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  });

  list.querySelectorAll('.sc-item').forEach(el => showcaseObserver.observe(el));
}

function selectShowcase(i) {
  document.querySelectorAll('#scList .sc-item').forEach((el, j) => el.classList.toggle('on', i === j));
  document.querySelectorAll('#phoneScreen .phone-screenshot').forEach((el, j) => el.classList.toggle('on', i === j));
}

function renderFeatures() {
  const list = FEATURES[lang];
  const grid = document.getElementById('featGrid');
  grid.innerHTML = '';
  list.forEach((f, i) => {
    const el = document.createElement('div');
    el.className = 'f-cell';
    el.innerHTML =
      '<div class="f-num">' + String(i + 1).padStart(2, '0') + ' / ' + String(list.length).padStart(2, '0') + '</div>' +
      '<div class="f-name">' + f.n + '</div>' +
      '<div class="f-desc">' + f.d + '</div>';
    grid.appendChild(el);
  });
}

function renderCompare() {
  const rows = COMPARE[lang];
  const t = document.getElementById('compareTable');
  const heads = lang === 'tr'
    ? { f: "Mesele", o: "Di\u011Fer uygulamalar", v: "Vakit" }
    : { f: "Matter", o: "Other apps", v: "Vakit" };
  const noLabel = lang === 'tr' ? 'Hay\u0131r' : 'No';
  const yesLabel = lang === 'tr' ? 'Evet' : 'Yes';
  t.innerHTML =
    '<div class="compare-row head">' +
      '<div class="compare-cell">' + heads.f + '</div>' +
      '<div class="compare-cell">' + heads.o + '</div>' +
      '<div class="compare-cell">' + heads.v + '</div>' +
    '</div>' +
    rows.map(r =>
      '<div class="compare-row">' +
        '<div class="compare-cell feat">' + r.f + '</div>' +
        '<div class="compare-cell other"><span class="cmark no">' + noLabel + '</span><br><br>' + r.o + '</div>' +
        '<div class="compare-cell vakit"><span class="cmark yes">' + yesLabel + '</span><br><br>' + r.v + '</div>' +
      '</div>'
    ).join('');
}

function renderReviews() {
  const list = REVIEWS[lang];
  const g = document.getElementById('testGrid');
  g.innerHTML = list.map(r =>
    '<article class="t-card">' +
      '<div class="t-stars">\u2605\u2605\u2605\u2605\u2605</div>' +
      '<div class="t-title">' + r.t + '</div>' +
      '<p class="t-body">' + r.b + '</p>' +
      '<div class="t-author"><span>' + r.n + '</span><span>App Store</span></div>' +
    '</article>'
  ).join('');
}

function renderFAQ() {
  const list = FAQ[lang];
  const el = document.getElementById('faqList');
  el.innerHTML = list.map((f, i) =>
    '<div class="faq-item' + (i === 0 ? ' on' : '') + '">' +
      '<button class="faq-q">' + f.q + '<span class="faq-icon">+</span></button>' +
      '<div class="faq-a"><div class="faq-a-inner">' + f.a + '</div></div>' +
    '</div>'
  ).join('');
  el.querySelectorAll('.faq-item').forEach(it => {
    it.querySelector('.faq-q').addEventListener('click', () => {
      it.classList.toggle('on');
    });
  });
}

function applyI18n() {
  const dict = COPY[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
}

/* ================================================================
   Language Toggle
   ================================================================ */

function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem('preferredLanguage', lang);
  syncLangTabs();
  applyI18n();
  renderShowcase();
  renderFeatures();
  renderCompare();
  renderReviews();
  renderFAQ();
  renderMarquee();
  renderCitySelector();
  selectCity(currentCityId);
}

function syncLangTabs() {
  document.querySelectorAll('.nav-lang button').forEach(x => x.classList.toggle('on', x.dataset.lang === lang));
}

/* ================================================================
   Theme Toggle
   ================================================================ */

let theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '\u263E' : '\u2600';
}

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  applyTheme();
}

/* ================================================================
   Smooth Scrolling
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
      // Close mobile menu if open
      document.querySelector('.nav-links')?.classList.remove('open');
    }
  });
}

/* ================================================================
   Mobile Menu
   ================================================================ */

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '\u00D7' : '\u2261';
    });
  }
}

/* ================================================================
   Init
   ================================================================ */

applyTheme();
syncLangTabs();
applyI18n();
renderShowcase();
renderFeatures();
renderCompare();
renderReviews();
renderFAQ();
renderMarquee();
renderCitySelector();
selectCity(currentCityId);
setInterval(() => renderClockTick(new Date()), 1000);
initSmoothScrolling();
initMobileMenu();

// Theme toggle
document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

// Nav language toggle
document.querySelectorAll('.nav-lang button').forEach(b => {
  b.addEventListener('click', () => setLanguage(b.dataset.lang));
});
