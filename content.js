/**
 * Vakit landing page — single source of truth for every piece of page copy.
 *
 * Consumed by build.js (Node) to generate one static page per language:
 *   docs/index.html          (tr — canonical root)
 *   docs/<lang>/index.html   (every other language in LANGS)
 *   docs/sitemap.xml, docs/robots.txt, docs/llms.txt
 *
 * Turkish and English live in this file; they are the source the other
 * languages are translated from. The remaining languages each have their own
 * module under locales/<lang>.js with the same shape (see locales/README.md).
 *
 * Nothing here is fetched by the browser: the generator bakes it all into
 * static HTML so search engines and AI crawlers (which do not run JavaScript)
 * can read the full page. Edit content here, then run `npm run build`.
 */

const SITE = {
  origin: "https://vakit.hakancelik.dev",
  // App Store linkleri TEK yerden üretilir — dosyanın sonundaki storeLink().
  // ⚠️ `pt` (provider token) olmadan `ct` (kampanya) Apple tarafında SESSİZCE sayılmaz ve
  // hata da vermez; yanlış kurulmuş bir link yalnızca hiç görünmez. Ham link string'i yazma.
  appStoreId: "6748356813",
  // App Store Connect sağlayıcı kimliği. Hesap başına sabittir ve gizli değildir (linkin
  // içinde herkese görünür). Kaynak: `asc web auth status` → providerId.
  appStoreProviderToken: "127947182",
  appName: "Vakit",
  author: "Hakan Çelik",
  authorUrl: "https://github.com/hakancelikdev",
  repoUrl: "https://github.com/hakancelikdev/vakit",
  feedbackUrl: "https://docs.google.com/forms/d/1kFwSM_XayYaRrkUyB8rynTJzWF8ahrcnHQp7fvhSfNU",
  email: "hakancelikdev@gmail.com",
  themeColor: "#2A9D8F",
  // From the Turkish storefront (iTunes lookup API), where effectively all
  // ratings are. Re-check on each release:
  //   curl -s "https://itunes.apple.com/lookup?id=6748356813&country=tr"
  rating: { value: "4.8", count: "445" },
  // Mirrors the shipping iOS release. Bump together with the app.
  appVersion: "1.7.4",
  // sitemap <lastmod> and the llms.txt footer. Bump when page content changes.
  // Kept explicit rather than "today" so rebuilding the same commit is
  // byte-identical and CI can detect stale generated files.
  updated: "2026-09-10",
  minOS: "16.4",
  operatingSystem: "iOS, iPadOS, macOS, watchOS",
};

/**
 * Every language the app ships in (VakitApp-Swift/vakit/Infrastructure/Localization/*.lproj).
 * Each one is a real, separately indexable URL.
 *
 *   name     native name, shown in the language menu (same strings as the app's picker)
 *   script   picks the web fonts and typography adjustments (build.js → SCRIPTS)
 *   rtl      right-to-left page
 *   shots    screenshot directory under docs/assets/screenshots/. Languages without
 *            their own capture use English — the same rule as the App Store listing.
 *   video    preview video: Turkish has its own recording, everyone else gets English.
 *   city     default city in the live prayer clock
 *   currency shown next to the "0" price in the hero
 */
const LANGS = {
  tr: { name: "Türkçe", htmlLang: "tr", ogLocale: "tr_TR", path: "/", dir: ".", script: "latin", shots: "tr", video: "tr", city: "istanbul", currency: "₺" },
  en: { name: "English", htmlLang: "en", ogLocale: "en_US", path: "/en/", dir: "en", script: "latin", shots: "en", video: "en", city: "london", currency: "$" },
  ar: { name: "العربية", htmlLang: "ar", ogLocale: "ar_SA", path: "/ar/", dir: "ar", script: "arabic", rtl: true, shots: "ar", video: "en", city: "mecca", currency: "ر.س" },
  az: { name: "Azərbaycan dili", htmlLang: "az", ogLocale: "az_AZ", path: "/az/", dir: "az", script: "latin", shots: "en", video: "en", city: "baku", currency: "₼" },
  bn: { name: "বাংলা", htmlLang: "bn", ogLocale: "bn_BD", path: "/bn/", dir: "bn", script: "bengali", shots: "bn", video: "en", city: "dhaka", currency: "৳" },
  da: { name: "Dansk", htmlLang: "da", ogLocale: "da_DK", path: "/da/", dir: "da", script: "latin", shots: "da", video: "en", city: "copenhagen", currency: "kr" },
  de: { name: "Deutsch", htmlLang: "de", ogLocale: "de_DE", path: "/de/", dir: "de", script: "latin", shots: "de", video: "en", city: "berlin", currency: "€" },
  es: { name: "Español", htmlLang: "es", ogLocale: "es_ES", path: "/es/", dir: "es", script: "latin", shots: "es", video: "en", city: "madrid", currency: "€" },
  fa: { name: "فارسی", htmlLang: "fa", ogLocale: "fa_IR", path: "/fa/", dir: "fa", script: "arabic", rtl: true, shots: "en", video: "en", city: "tehran", currency: "$" },
  ff: { name: "Pulaar", htmlLang: "ff", ogLocale: "ff_SN", path: "/ff/", dir: "ff", script: "latin", shots: "en", video: "en", city: "dakar", currency: "CFA" },
  fr: { name: "Français", htmlLang: "fr", ogLocale: "fr_FR", path: "/fr/", dir: "fr", script: "latin", shots: "fr", video: "en", city: "paris", currency: "€" },
  hi: { name: "हिन्दी", htmlLang: "hi", ogLocale: "hi_IN", path: "/hi/", dir: "hi", script: "devanagari", shots: "hi", video: "en", city: "delhi", currency: "₹" },
  id: { name: "Bahasa Indonesia", htmlLang: "id", ogLocale: "id_ID", path: "/id/", dir: "id", script: "latin", shots: "id", video: "en", city: "jakarta", currency: "Rp" },
  it: { name: "Italiano", htmlLang: "it", ogLocale: "it_IT", path: "/it/", dir: "it", script: "latin", shots: "it", video: "en", city: "rome", currency: "€" },
  ja: { name: "日本語", htmlLang: "ja", ogLocale: "ja_JP", path: "/ja/", dir: "ja", script: "japanese", shots: "ja", video: "en", city: "tokyo", currency: "¥" },
  ms: { name: "Bahasa Melayu", htmlLang: "ms", ogLocale: "ms_MY", path: "/ms/", dir: "ms", script: "latin", shots: "ms", video: "en", city: "kualalumpur", currency: "RM" },
  nl: { name: "Nederlands", htmlLang: "nl", ogLocale: "nl_NL", path: "/nl/", dir: "nl", script: "latin", shots: "nl", video: "en", city: "amsterdam", currency: "€" },
  pt: { name: "Português", htmlLang: "pt", ogLocale: "pt_PT", path: "/pt/", dir: "pt", script: "latin", shots: "pt", video: "en", city: "lisbon", currency: "€" },
  ru: { name: "Русский", htmlLang: "ru", ogLocale: "ru_RU", path: "/ru/", dir: "ru", script: "cyrillic", shots: "ru", video: "en", city: "moscow", currency: "₽" },
  sq: { name: "Shqip", htmlLang: "sq", ogLocale: "sq_AL", path: "/sq/", dir: "sq", script: "latin", shots: "en", video: "en", city: "tirana", currency: "L" },
  sw: { name: "Kiswahili", htmlLang: "sw", ogLocale: "sw_KE", path: "/sw/", dir: "sw", script: "latin", shots: "en", video: "en", city: "nairobi", currency: "KSh" },
  th: { name: "ไทย", htmlLang: "th", ogLocale: "th_TH", path: "/th/", dir: "th", script: "thai", shots: "th", video: "en", city: "bangkok", currency: "฿" },
  ug: { name: "ئۇيغۇرچە", htmlLang: "ug", ogLocale: "ug_CN", path: "/ug/", dir: "ug", script: "arabic", rtl: true, shots: "en", video: "en", city: "urumqi", currency: "¥" },
  ur: { name: "اردو", htmlLang: "ur", ogLocale: "ur_PK", path: "/ur/", dir: "ur", script: "urdu", rtl: true, shots: "ur", video: "en", city: "karachi", currency: "₨" },
  zh: { name: "简体中文", htmlLang: "zh-Hans", ogLocale: "zh_CN", path: "/zh/", dir: "zh", script: "chinese", shots: "zh", video: "en", city: "beijing", currency: "¥" },
};

// Legal documents are binding texts and exist only in Turkish and English.
// Every other language links to the English version.
const LEGAL_LANGS = ["tr", "en"];

/**
 * Cities for the live prayer clock in the hero. `method` is the Aladhan
 * calculation-method id (https://aladhan.com/calculation-methods). Names are
 * localized per language (CITIES in each copy block).
 */
const CITY_CATALOG = {
  istanbul: { lat: 41.0082, lon: 28.9784, method: 13 },
  mecca: { lat: 21.4225, lon: 39.8262, method: 4 },
  medina: { lat: 24.4672, lon: 39.6024, method: 4 },
  london: { lat: 51.5074, lon: -0.1278, method: 15 },
  berlin: { lat: 52.52, lon: 13.405, method: 13 },
  paris: { lat: 48.8566, lon: 2.3522, method: 12 },
  newyork: { lat: 40.7128, lon: -74.006, method: 2 },
  dubai: { lat: 25.2048, lon: 55.2708, method: 16 },
  cairo: { lat: 30.0444, lon: 31.2357, method: 5 },
  jakarta: { lat: -6.2088, lon: 106.8456, method: 20 },
  kualalumpur: { lat: 3.139, lon: 101.6869, method: 17 },
  karachi: { lat: 24.8607, lon: 67.0011, method: 1 },
  tokyo: { lat: 35.6762, lon: 139.6503, method: 3 },
  baku: { lat: 40.4093, lon: 49.8671, method: 13 },
  dhaka: { lat: 23.8103, lon: 90.4125, method: 1 },
  copenhagen: { lat: 55.6761, lon: 12.5683, method: 3 },
  madrid: { lat: 40.4168, lon: -3.7038, method: 3 },
  tehran: { lat: 35.6892, lon: 51.389, method: 7 },
  dakar: { lat: 14.7167, lon: -17.4677, method: 3 },
  delhi: { lat: 28.6139, lon: 77.209, method: 1 },
  rome: { lat: 41.9028, lon: 12.4964, method: 3 },
  amsterdam: { lat: 52.3676, lon: 4.9041, method: 13 },
  lisbon: { lat: 38.7223, lon: -9.1393, method: 22 },
  moscow: { lat: 55.7558, lon: 37.6173, method: 14 },
  tirana: { lat: 41.3275, lon: 19.8187, method: 13 },
  nairobi: { lat: -1.2921, lon: 36.8219, method: 3 },
  bangkok: { lat: 13.7563, lon: 100.5018, method: 3 },
  urumqi: { lat: 43.8256, lon: 87.6168, method: 3 },
  beijing: { lat: 39.9042, lon: 116.4074, method: 3 },
};

// The clock shows the language's home city first, then these.
const CITY_DEFAULTS = ["mecca", "medina", "istanbul", "london", "berlin", "paris", "newyork", "dubai", "cairo", "jakarta", "kualalumpur", "karachi"];
const CITY_SLOTS = 12;

// Showcase order. Index 0 is the preview video (the prayer screen's sky); the
// rest are screenshots. Must match SHOTS in tools/import-media.sh.
const SHOWCASE_IMG = ["prayer-times", "widget", "discover", "qibla", "profile", "qada", "quran", "prayer-guide", "calendar", "zikirmatik"];

// App Store reviewers, in REVIEWS order. Names are never translated.
const REVIEWERS = ["Meryem Ebrar", "alpaslanx", "h-seyin", "Keskin2298", "Baalbak9907", "Sswnn21", "Mücahade", "h.ç44", "Çerkezin biri", "Bessey Çelik", "tolgalive", "Murat KAYAHAN"];

const META = {
  tr: {
    title: "Vakit: Namaz, Kıble, Kuran",
    description:
      "Namaz vakitlerini takip edin, Kıble yönünü bulun, Kur'an-ı Kerim okuyun. iPhone, iPad, Apple Watch ve Mac; 25 dil, 13 hesaplama yöntemi, Live Activities, kilit ekranı widget'ları, Cuma hutbesi, kaza takibi. Ücretsiz, reklamsız, çevrimdışı.",
    keywords:
      "namaz vakitleri, vakit, kıble yönü, namaz vakti, kuran, kur'an-ı kerim, hatim, tefsir, zikir, zikirmatik, ibadet takibi, kaza namazı takibi, cuma hutbesi, kerahat vakitleri, sahur alarmı, apple watch, ipad, mac uygulaması, ezan sesi, hatim takibi, islamic app, prayer times, qibla direction, quran, hicri takvim, live activities, widget, dynamic island, namaz uygulaması",
  },
  en: {
    title: "Vakit: Prayer Times, Qibla, Quran",
    description:
      "Track prayer times, find the Qibla, read the Quran. iPhone, iPad, Apple Watch and Mac; 25 languages, 13 calculation methods, Live Activities, lock screen widgets, Friday sermon, qada tracking. Free, ad-free, offline.",
    keywords:
      "prayer times, qibla direction, quran app, islamic app, muslim prayer app, adhan, salah tracker, qada tracker, dhikr counter, hijri calendar, apple watch prayer times, ipad prayer times, mac prayer times, live activities, prayer widget, free prayer app, ad-free islamic app",
  },
};

const COPY = {
  tr: {
    features: "Özellikler", trust: "Emanet", compare: "Neden Vakit", reviews: "Yorumlar", faq: "SSS", download: "İndir",
    eyebrow: "İbadetin yarıda kesilmesin · Ücretsiz · Reklamsız",
    h1a: "İbadet uygulaması", h1b: "nasıl olmalıysa,", h1c: "öyle.",
    heroSub: "İbadet uygulaması nasıl olmalıysa, öyle. Beş vakit namaz için sade bir arkadaş — Kur'an, kıble, zikir ve günlerinizi onurlandıran bir takvim ile. İhtiyaç duymadığınızda kenara çekilir; duyduğunuzda yanınızdadır.",
    downloadCta: "App Store'dan İndir", watchTour: "Turu başlat →",
    p1: "App Store · {ratingCount} değerlendirme", p2: "Ücretsiz · şu an", p3: "Hesaplama yöntemi", p4: "Çevrimdışı · cihazda",
    nextPrayer: "Sıradaki · içinde",
    "sc-head": "§ 01 · Her şey, fazlası değil",
    "sc-h2a": "Bir arkadaş,", "sc-h2b": "bir dikkat makinesi değil.",
    "sc-lede": "On temel araç, her biri açılır açılmaz huzur hissettirecek şekilde tasarlandı. Önizlemek için dokun.",
    "trust-eye": "§ 02 · Emanet",
    "trust-h1": "Verileriniz", "trust-h2": "bir emanettir,", "trust-h3": "bir ürün değil.",
    "trust-lede": "İbadetin yarıda kesilmesin. Diğer ibadet uygulamaları konum verilerini satarken yakalandı. Vakit farklı bir yol seçti: koordinatlarınız telefonunuzdan asla çıkmaz. Hesap yok. Takip yok. Taviz yok.",
    "t-1a": "İndir. Aç. Kıl.",
    "t-1b": "Kayıt yok, giriş yok, unutacağın bir şifre yok. Vakit yüklediğin anda çalışır.",
    "t-2a": "Telefonunda hesaplanır.",
    "t-2b": "Namaz vakitleri, seçtiğin yönteme göre cihazında yerel olarak hesaplanır. Hiçbir sunucuya 'sorgu' gitmez.",
    "t-3a": "GPS sende kalır.",
    "t-3b": "Koordinatların hiçbir yere iletilmez. Nerede namaz kıldığını göremeyiz, görmek de istemeyiz.",
    "t-4a": "Sade bir politika.",
    "t-4b": "Kimliğinizi içermeyen kullanım sayıları. Gizlilik politikamız bir dakikada okunabilecek kadar kısa — ve öyle kalacak.",
    "f-eye": "§ 03 · {featureCount} araç",
    "f-h1": "Tek uygulama,", "f-h2": "bir ömürlük ibadete yeter.",
    "c-h1": "Fark,", "c-h2": "ölçülmüş.",
    "c-lede": "Diğer ibadet uygulamalarındaki sorunları biliyorsun. İşte Vakit'in her birine satır satır cevabı.",
    "c-head-f": "Mesele", "c-head-o": "Diğer uygulamalar", "c-head-v": "Vakit",
    "c-no": "Hayır", "c-yes": "Evet",
    "r-h1": "Gerçek kullanıcılardan", "r-h2": "güzel sözler.",
    "r-m1": "Ortalama puan", "r-m2": "{ratingCount} App Store değerlendirmesinden",
    "r-note": "",
    "q-h1": "Dürüst sorulara", "q-h2": "dürüst cevaplar.",
    "fin-h1": "İbadetin yarıda", "fin-h2": "kesilmesin.",
    "fin-p": "Şu an ücretsiz. Hesap yok. Çevrimdışı çalışır. iPhone, iPad, Apple Watch ve Mac — iOS 16.4 ve üzeri.",
    downloadCta2: "App Store'dan İndir", explore: "Özellikleri keşfet →",
    preview: "Önizle",
    footContact: "İletişim", footFeedback: "Geri Bildirim",
    footPrivacy: "Gizlilik", footTerms: "Şartlar", footAds: "Reklamlar",
    footSig: "Özenle yapıldı · © 2026 Hakan Çelik",
    menuLabel: "Menü", themeLabel: "Koyu modu aç/kapat", langLabel: "Dil",
    videoLabel: "Vakit'in namaz ekranı: gün ilerledikçe gökyüzü de değişiyor",
  },
  en: {
    features: "Features", trust: "Trust", compare: "Why Vakit", reviews: "Reviews", faq: "FAQ", download: "Download",
    eyebrow: "Don't let your worship be interrupted · Free · Ad-free",
    h1a: "The worship app,", h1b: "as it", h1c: "should be.",
    heroSub: "The worship app, as it should be. A quiet companion for the five daily prayers — with Quran, qibla, dhikr, and a calendar that honors your days. Built to disappear when you don't need it. Waiting when you do.",
    downloadCta: "Download on the App Store", watchTour: "Take the tour →",
    p1: "App Store · {ratingCount} ratings", p2: "Free · today", p3: "Calculation methods", p4: "Offline · on-device",
    nextPrayer: "Next · in",
    "sc-head": "§ 01 · Everything, nothing extra",
    "sc-h2a": "A companion,", "sc-h2b": "not an attention machine.",
    "sc-lede": "Ten core tools, each designed to feel calm the moment you open it. Tap any to preview.",
    "trust-eye": "§ 02 · Emanet — a trust",
    "trust-h1": "Your data is", "trust-h2": "a trust,", "trust-h3": "not a product.",
    "trust-lede": "Don't let your worship be interrupted. Other prayer apps have been caught selling location data. Vakit went a different way: your coordinates never leave your phone. No account. No tracking. No compromise. This isn't a feature — it's a principle.",
    "t-1a": "Download. Open. Pray.",
    "t-1b": "No sign-up, no login, no password you'll forget. Vakit starts working the moment you install it.",
    "t-2a": "Calculated on your phone.",
    "t-2b": "Prayer times are computed locally from your location, using the method you choose. Nothing is sent to a server to be 'looked up'.",
    "t-3a": "GPS stays with you.",
    "t-3b": "Your coordinates are not transmitted anywhere. We can't see where you pray, and we don't want to.",
    "t-4a": "Plain-language policy.",
    "t-4b": "Usage counts that carry no identity. Our privacy policy is short enough to read in a minute — and it will stay that way.",
    "f-eye": "§ 03 · {featureCount} tools",
    "f-h1": "One app,", "f-h2": "enough for a life of worship.",
    "c-h1": "The difference,", "c-h2": "measured.",
    "c-lede": "You already know what's wrong with the other prayer apps. Here's how Vakit answers each one, line by line.",
    "c-head-f": "Matter", "c-head-o": "Other apps", "c-head-v": "Vakit",
    "c-no": "No", "c-yes": "Yes",
    "r-h1": "Kind words from", "r-h2": "real worshippers.",
    "r-m1": "Average rating", "r-m2": "from {ratingCount} App Store ratings",
    "r-note": "Reviews from the Turkish App Store, translated from Turkish.",
    "q-h1": "Honest answers", "q-h2": "to honest questions.",
    "fin-h1": "Don't let your worship", "fin-h2": "be interrupted.",
    "fin-p": "Free today. No account. Works offline. iPhone, iPad, Apple Watch and Mac — iOS 16.4 and up.",
    downloadCta2: "Download on the App Store", explore: "Explore features →",
    preview: "Preview",
    footContact: "Contact", footFeedback: "Feedback",
    footPrivacy: "Privacy", footTerms: "Terms", footAds: "Ads",
    footSig: "Made with care · © 2026 Hakan Çelik",
    menuLabel: "Menu", themeLabel: "Toggle dark mode", langLabel: "Language",
    videoLabel: "Vakit's prayer screen: the sky changes as the day moves on",
  },
};

// Prayer names in the hero clock and the marquee. The clock's first time is
// the start of dawn (imsak), so it takes the app's `prayer_imsak` string —
// "İmsak" in Turkish, "Fajr" in English.
const PRAYERS = {
  tr: { Fajr: "İmsak", Sunrise: "Güneş", Dhuhr: "Öğle", Asr: "İkindi", Maghrib: "Akşam", Isha: "Yatsı" },
  en: { Fajr: "Fajr", Sunrise: "Sunrise", Dhuhr: "Dhuhr", Asr: "Asr", Maghrib: "Maghrib", Isha: "Isha" },
};

const CITIES = {
  tr: {
    istanbul: "İstanbul", mecca: "Mekke", medina: "Medine", london: "Londra", berlin: "Berlin", paris: "Paris",
    newyork: "New York", dubai: "Dubai", cairo: "Kahire", jakarta: "Cakarta", kualalumpur: "Kuala Lumpur",
    karachi: "Karaçi", tokyo: "Tokyo", baku: "Bakü", dhaka: "Dakka", copenhagen: "Kopenhag", madrid: "Madrid",
    tehran: "Tahran", dakar: "Dakar", delhi: "Delhi", rome: "Roma", amsterdam: "Amsterdam", lisbon: "Lizbon",
    moscow: "Moskova", tirana: "Tiran", nairobi: "Nairobi", bangkok: "Bangkok", urumqi: "Urumçi", beijing: "Pekin",
  },
  en: {
    istanbul: "Istanbul", mecca: "Mecca", medina: "Medina", london: "London", berlin: "Berlin", paris: "Paris",
    newyork: "New York", dubai: "Dubai", cairo: "Cairo", jakarta: "Jakarta", kualalumpur: "Kuala Lumpur",
    karachi: "Karachi", tokyo: "Tokyo", baku: "Baku", dhaka: "Dhaka", copenhagen: "Copenhagen", madrid: "Madrid",
    tehran: "Tehran", dakar: "Dakar", delhi: "Delhi", rome: "Rome", amsterdam: "Amsterdam", lisbon: "Lisbon",
    moscow: "Moscow", tirana: "Tirana", nairobi: "Nairobi", bangkok: "Bangkok", urumqi: "Ürümqi", beijing: "Beijing",
  },
};

// Every entry must correspond to a feature that actually ships in the app.
// When a feature is removed from the app, remove it here in the same release —
// in every language.
const FEATURES = {
  tr: [
    { n: "Namaz Vakitleri", d: "13 hesaplama yöntemi, zaman dilimine duyarlı, seyahat algılayan." },
    { n: "Canlı Gökyüzü", d: "Gün yayında gerçek yıldızlar ve ay — bulunduğun yere ve saate göre." },
    { n: "Nafile Vakitleri", d: "İşrak, Kuşluk, Evvâbin ve gecenin bölümleri; isteğe bağlı." },
    { n: "Manuel Konum", d: "Konumu elle seç ya da seyahatte kendiliğinden güncellensin." },
    { n: "Apple Watch", d: "Namaz vakitleri, canlı kıble, 13 watch face complication." },
    { n: "Mac Uygulaması", d: "Menü çubuğunda geri sayım, klavye kısayolları, iCloud senkron." },
    { n: "iPad", d: "Aynı uygulama büyük ekranda; kayıtların iCloud ile senkron." },
    { n: "25 Dil", d: "Arapça, Urduca, Farsça ve Uygurca'da sağdan sola arayüz." },
    { n: "Kıble Pusulası", d: "Haptik yönlendirme, Kâbe'ye mesafe bilgisi." },
    { n: "Kur'an-ı Kerim", d: "114 sure. Kelime kelime, meal, tefsir, klasik Mushaf." },
    { n: "Mushaf Hattı", d: "Medine ya da Türkiye hattı; sayfa düzeni de değişir." },
    { n: "Hatim Takibi", d: "114 sure, 30 cüz; tamamlanan hatimler ve bitiş tahmini." },
    { n: "Çevrimdışı Tilavet", d: "Hafız ve kıraat seç; sure ya da cüz indir, internetsiz dinle." },
    { n: "Hadis", d: "Yedi büyük koleksiyondan 36.390 hadis." },
    { n: "Cuma Hutbesi", d: "Diyanet hutbesini oku, dinle, çevrimdışı sakla." },
    { n: "Zikirmatik", d: "Halka ilerleme, hazır zikirler ve özel zikirler." },
    { n: "Tesbihat", d: "33-33-33 ya da namaz sonrası tam tertip." },
    { n: "Esmaü'l Hüsna", d: "Allah'ın 99 ismi, anlamı ve tefekkürü ile." },
    { n: "Hicri Takvim", d: "Miladi + Hicri, özel günler ve Ramazan." },
    { n: "Kerahat Vakitleri", d: "Gün yayında işaretli, dayandığı rivayetle birlikte." },
    { n: "Temizlik Rehberi", d: "Adım adım abdest, gusül ve teyemmüm." },
    { n: "Namaz Rehberi", d: "17 namaz türü; ayakta, oturarak ya da îmâ ile." },
    { n: "Zekât & Fitre", d: "Klasik fıkha dayanan hesaplayıcılar." },
    { n: "Kaza Takibi", d: "Kaza namazını vakit bazlı, kaza orucunu gün bazlı takip et." },
    { n: "Mazeret Günleri", d: "Hayız ve lohusalık günleri; namaz serisi kırılmaz." },
    { n: "Widget'lar", d: "Ana ekran, kilit ekranı, StandBy — Mac'te de." },
    { n: "Live Activity", d: "Dynamic Island ve kilit ekranı geri sayım." },
    { n: "Control Center", d: "Altı hızlı eylem — Kıble, sonraki vakit, dahası." },
    { n: "İbadet Takibi", d: "Activity Ring: namaz, nafile, Cuma, Bayram, Teravih." },
    { n: "Namaz Disiplini", d: "Her vakti girdikten ne kadar sonra kıldığın — son 30 gün ve tüm zamanlar." },
    { n: "Sabah Alarmı", d: "Sessiz modu delen, namazı kılınca susan alarm." },
    { n: "Sahur Alarmı", d: "Oruç günlerine göre kurulur, sahuru kaçırtmaz." },
    { n: "Mübarek Gün Hatırlatma", d: "11 önemli dini günden bir gece önce bildirim." },
    { n: "Bildirimler", d: "Cihazda, yerel, güvenilir." },
    { n: "Ezan Sesleri", d: "Beş makamda ezan: hicaz, rast, saba, segah, uşşak." },
    { n: "Siri Kısayolları", d: "Vakitleri, Kıble'yi, ayeti sesle sor." },
    { n: "Birleşik Arama", d: "Tek arama, her araç — 'Bakara 255' yaz, âyete git." },
    { n: "Yer İmleri", d: "Ayet, hadis ve zikirleri kaydet." },
    { n: "iCloud Senkron", d: "Kayıtlarınız kendi iCloud alanınızda, her cihazda." },
    { n: "Tefsir", d: "Diyanet tefsiri, metinle hizalı." },
    { n: "Paylaşım Kartları", d: "Ayet ve zikirler için güzel kartlar." },
    { n: "Oruç", d: "Ramazan, Şevval ve günlük takip." },
    { n: "Yakın Camiler", d: "Konumu paylaşmadan bul; harita, mesafe ve yol tarifi." },
    { n: "Vakit'e Destek", d: "Ücretsiz uygulamayı ayakta tutmanın opt-in yolları." },
    { n: "Karanlık Mod", d: "Geç saatler için sıcak, sakin karanlık." },
  ],
  en: [
    { n: "Prayer Times", d: "13 calculation methods, timezone-aware, travel-detecting." },
    { n: "Live Sky", d: "Real stars and the moon on the day arc — for where you are, right now." },
    { n: "Voluntary Prayer Times", d: "Ishraq, Duha, Awwabin and the parts of the night; optional." },
    { n: "Manual Location", d: "Set your location by hand, or let it follow you as you travel." },
    { n: "Apple Watch", d: "Prayer times, live qibla, 13 watch face complications." },
    { n: "Mac App", d: "Menu bar countdown, keyboard shortcuts, iCloud sync." },
    { n: "iPad", d: "The same app on a bigger screen; your records sync over iCloud." },
    { n: "25 Languages", d: "Right-to-left interface in Arabic, Urdu, Persian and Uyghur." },
    { n: "Qibla Compass", d: "Haptic bearing with distance to the Ka'bah." },
    { n: "Holy Quran", d: "114 surahs. Word-by-word, translation, tafsir, classical Mushaf." },
    { n: "Mushaf Script", d: "Madinah or Türkiye script — page layout follows too." },
    { n: "Khatm Tracking", d: "114 surahs, 30 juz; completed khatms and an estimated finish." },
    { n: "Offline Recitation", d: "Pick a reciter and style; download surahs or juz and listen offline." },
    { n: "Hadith", d: "36,390 ahadith across seven major collections." },
    { n: "Friday Sermon", d: "Read, listen to and store the Diyanet khutbah offline." },
    { n: "Dhikr Counter", d: "Ring-based progress, presets, and custom dhikr." },
    { n: "Tasbihat", d: "33-33-33, or the full post-prayer sequence." },
    { n: "Asma al-Husna", d: "99 names of Allah, with meaning and reflection." },
    { n: "Hijri Calendar", d: "Gregorian + Hijri, with special days and Ramadan." },
    { n: "Karahat Times", d: "Marked on the day arc, with the narration behind them." },
    { n: "Purification Guide", d: "Step-by-step wudu, ghusl and tayammum." },
    { n: "Prayer Guide", d: "17 prayer types; standing, seated or by gesture." },
    { n: "Zakat & Fitr", d: "Calculators grounded in classical rulings." },
    { n: "Qada Tracking", d: "Missed prayers by time slot, missed fasts by day." },
    { n: "Excused Days", d: "Menstruation and postpartum days; your prayer streak holds." },
    { n: "Widgets", d: "Home Screen, lock screen, StandBy — and on Mac." },
    { n: "Live Activity", d: "Dynamic Island and lock-screen countdowns." },
    { n: "Control Center", d: "Six quick actions — Qibla, next prayer, more." },
    { n: "Worship Tracking", d: "Activity Rings: prayer, nafl, Jumu'ah, Eid, Tarawih." },
    { n: "Prayer Discipline", d: "How long after each prayer enters you pray — last 30 days and all time." },
    { n: "Fajr Alarm", d: "Breaks through silent mode, silent once you've prayed." },
    { n: "Suhoor Alarm", d: "Set from your fasting days, so you never miss suhoor." },
    { n: "Holy Day Reminders", d: "Notification the night before 11 Islamic days." },
    { n: "Notifications", d: "On-device, local, dependable." },
    { n: "Adhan Sounds", d: "The adhan in five makams: hicaz, rast, saba, segah, ussak." },
    { n: "Siri Shortcuts", d: "Ask for times, Qibla, ayat by voice." },
    { n: "Unified Search", d: "One search, every tool — type 'Baqarah 255' to jump to the ayah." },
    { n: "Bookmarks", d: "Save ayat, hadith, and dhikr." },
    { n: "iCloud Sync", d: "Your records stay in your own iCloud, on every device." },
    { n: "Tafsir", d: "Diyanet commentary, in-line with the text." },
    { n: "Share Cards", d: "Beautiful cards for ayat and dhikr." },
    { n: "Fasting", d: "Ramadan, Shawwal, and day-by-day tracking." },
    { n: "Nearby Mosques", d: "Find masajid privately; map, distance and directions." },
    { n: "Support Vakit", d: "Opt-in ways to keep the free app alive." },
    { n: "Dark Mode", d: "Warm, quiet dark for the late hours." },
  ],
};

// Ten entries, in SHOWCASE_IMG order: the first is the preview video, the rest
// pair with assets/screenshots/<shots>/<img>.webp.
const SHOWCASE = {
  tr: [
    { t: "Gökyüzü gibi.", d: "Vakit girdikçe ekran da gökyüzüyle birlikte değişir; yıldızlar ve ay gerçek yerlerinde. Kerahat ve nafile vakitleri isteğe bağlı." },
    { t: "Ekranı açmadan.", d: "Sonraki vakit kilit ekranında, widget'ta, Dynamic Island'da ve saatinizde. Sessiz bir bakış — hiç dikkat çalmadan." },
    { t: "Tüm araçlar, tek yerde.", d: "Kur'an, hadis, Cuma hutbesi, zikir, esma, rehberler ve takvim — tek bir hub'da. Hiçbir özellik paywall arkasında değil." },
    { t: "Doğru yön.", d: "Kıbleye döndüğünüzde telefon titrer; Kâbe'ye mesafe de yanında. Koordinatlarınız telefonunuzdan asla çıkmaz." },
    { t: "İbadetinizin halkaları.", d: "Namaz, oruç, Kur'an, zikir ve hadis için halkalar; namazı vakit girdikten ne kadar sonra kıldığınız ve hatim — sakin ilerleme, suçluluk yok." },
    { t: "Kaza, kıldıkça erir.", d: "Ömür boyu kaza borcunuzu vakit bazlı hesaplayın, kıldıkça düşün; ne zaman biteceği de görünür." },
    { t: "Kur'an, internetsiz de.", d: "Oku, dinle, tefekkür et — Medine ya da Türkiye hattı, kelime kelime takip, tefsir ve indirilebilen tilavet." },
    { t: "On yedi namaz, resimli.", d: "Abdestten tesbihata; ayakta, oturarak ya da îmâ ile — adım adım, kibirsiz, öğretici." },
    { t: "Hatırlayan bir takvim.", d: "Hicri ve Miladi birlikte. Kandil geceleri, Ramazan, bayramlar, arefe; altında ayın ibadet özeti." },
    { t: "Sayaç elinizde.", d: "Zikirmatik ve namaz sonrası tesbihat; hazır zikirler, kendi zikirleriniz ve günlük hedef." },
  ],
  en: [
    { t: "Like the sky.", d: "As each prayer time enters, the screen changes with the sky — real stars and the moon in their true places. Makruh and voluntary times are optional." },
    { t: "Without unlocking.", d: "The next prayer on your Lock Screen, in a widget, in the Dynamic Island and on your watch. A quiet glance — never a stare." },
    { t: "Every tool, in one place.", d: "Quran, hadith, Friday sermon, dhikr, asma, guides and the calendar — all in one hub. Nothing locked behind a paywall." },
    { t: "The right direction.", d: "Turn toward the qibla and your phone vibrates, with the distance to the Ka'bah alongside. Your coordinates never leave your phone." },
    { t: "Your worship, in rings.", d: "Rings for prayer, fasting, Quran, dhikr and hadith; how soon after each time enters you pray, and your khatm — gentle progress, no guilt." },
    { t: "Qada, cleared as you pray.", d: "Calculate a lifetime of missed prayers by time slot and clear them one by one — with an estimate of when you'll be done." },
    { t: "The Quran, even offline.", d: "Read, listen, reflect — Madinah or Türkiye script, word-by-word follow-along, tafsir and downloadable recitation." },
    { t: "Seventeen prayers, illustrated.", d: "From wudu to tasbih; standing, seated or by gesture — step by step, taught without condescension." },
    { t: "A calendar that remembers.", d: "Hijri and Gregorian together. Holy nights, Ramadan, the Eids and the eve before — with the month's worship summary below." },
    { t: "The count, in hand.", d: "A dhikr counter and the post-prayer tasbihat; presets, your own dhikr and a daily goal." },
  ],
};

const COMPARE = {
  tr: [
    { f: "Reklam", o: "Dini içeriğin yanında casino ve uygunsuz reklamlar.", v: "Şu an reklam yok." },
    { f: "Gizlilik", o: "Üçüncü taraflara satılan konum verisi (basına yansıdı).", v: "Koordinatlar telefonunuzda kalır. Takip yok." },
    { f: "Çevrimdışı", o: "Temel özellikler internet gerektirir.", v: "Namaz, Kıble, Kur'an, Zikir — hepsi çevrimdışı." },
    { f: "Kilit Ekranı", o: "Widget'lar iOS güncellemelerinde bozulur.", v: "Live Activity, Dynamic Island, StandBy — tamamı destekli." },
    { f: "Doğruluk", o: "Yaz/kış saati hataları, sınırlı hesaplama.", v: "13 yöntem, zaman dilimi bilinci, seyahat algılama." },
    { f: "Cihazlar", o: "Yalnız telefon; saat ve masaüstü yok ya da yarım.", v: "iPhone, iPad, Apple Watch ve Mac — iCloud ile senkron." },
    { f: "Tasarım", o: "Eski arayüzler; her güncellemede geriye dönüşler.", v: "iOS 26 Liquid Glass. Sade, modern, hızlı." },
    { f: "Maliyet", o: "Paywall, abonelik, 'premium' seviyeler.", v: "Şu an ücretsiz. Seviye yok, upsell yok." },
  ],
  en: [
    { f: "Advertising", o: "Casino and inappropriate ads, shown beside religious content.", v: "No ads today." },
    { f: "Privacy", o: "Location data sold to third parties (publicly reported).", v: "Coordinates stay on your phone. No tracking." },
    { f: "Offline", o: "Core features require an internet connection.", v: "Prayer, Qibla, Quran, Dhikr — all work offline." },
    { f: "Lock Screen", o: "Widgets break between iOS updates.", v: "Live Activity, Dynamic Island, StandBy — all supported." },
    { f: "Accuracy", o: "DST errors, limited calculation methods.", v: "13 methods, timezone-aware, travel-detecting." },
    { f: "Devices", o: "Phone only; watch and desktop missing or half-built.", v: "iPhone, iPad, Apple Watch and Mac — synced over iCloud." },
    { f: "Design", o: "Dated interfaces; regressions after each update.", v: "iOS 26 Liquid Glass. Quiet, modern, fast." },
    { f: "Cost", o: "Paywalls, subscriptions, 'premium' tiers.", v: "Free today. No tier, no upsell." },
  ],
};

// Real App Store reviews (Turkish storefront). The reviewer of each entry is
// REVIEWERS[i]; other languages translate the text and say so in "r-note".
const REVIEWS = {
  tr: [
    { t: "10/10 bir uygulama.", b: "Gerek widget'daki harika grafik görselleriyle gösterilen namaz vakitleri olsun, gerek uygulamanın reklamsız oluşu ve çok temiz bir arayüze sahip olması olsun 10/10. Gerçekten çok memnun kaldım, herkese tavsiye ederim." },
    { t: "Harika.", b: "Bulabileceğiniz en temiz ve kullanışlı uygulama. Reklam yok, arayüz çok sade ve şık. Kıble bulma kısmı gerçekten çok doğru ve güzel çalışıyor. Diğer içerikleri de çok hoş olmuş." },
    { t: "Sade ve kullanışlı.", b: "Başka uygulamaların, oyunların, sosyal medya uygulamalarının çoğundan daha iyi bir seviyede. Teşekkür ederim çabalarınız için, harika bir iş olmuş. Dinimi daha planlı yaşamaya çalışan biriyim ve elim ayağım oldu bu uygulama." },
    { t: "Kusursuz.", b: "Yapanın eline sağlık. Reklam yok. Ciddi emek verilmiş. Belliki sadece Allah rızası için. Sağolun." },
    { t: "Nadir bir uygulama.", b: "Allah sizden razı olsun. Gerek namaz vakitlerinin bu şekilde derli toplu olması, gerekse hadislerin hassasiyet gözetilerek Arapçaları, Türkçeleri ve sıhhat dereceleriyle verilmesi ama reklam gösterilmemesi — böyle bir uygulama nadirdir. İndirin, muhtemelen kalıcı uygulamanız olacaktır." },
    { t: "İsteklerin tam karşılığı.", b: "Kim düşünüp yapabildiyse Allah razı olsun. Açıklayıcı, reklamsız ve net." },
    { t: "Son güncellemeyle muazzam olmuş.", b: "Basit, estetik, kullanışlı, hızlı — ne diyeyim. Eline emeğine gönlüne sağlık." },
    { t: "Allah razı olsun.", b: "Reklamlı, sürekli para isteyen kullanışsız arayüzlerden bıkmıştım. Vakit gerçekten harika; her yerde çalışması, internetsiz olması, reklamsız olması harika. Kuran, hadis, zikirmatik, namaz takibi — başka uygulamaya ihtiyacım yok." },
    { t: "Diğerlerini sildim.", b: "Allah yapandan razı olsun. Elinize sağlık. Çok faydalı oldu." },
    { t: "En iyisi.", b: "Bundan daha iyisini görmedim. Her telefonda olması gereken bir uygulama. Geliştiren arkadaştan Allah razı olsun." },
    { t: "Gerçekten faydalı.", b: "Uygulama çok faydalı ve pratik. Her Müslümanın telefonunda olması gereken bir uygulama. Geliştirenden Allah razı olsun." },
    { t: "Allah razı olsun.", b: "Kardeşim, böylesine değerli bir uygulamayı ücretsiz yaptığın için çok teşekkürler. Allah gönlüne göre versin inşallah." },
  ],
  en: [
    { t: "A 10/10 app.", b: "Whether it's the prayer times shown with those beautiful widget graphics, or the fact that it has no ads and such a clean interface — 10/10. I'm genuinely delighted with it and recommend it to everyone." },
    { t: "Wonderful.", b: "The cleanest, most usable app you can find. No ads, a clean and elegant interface. The qibla finder works really accurately. The rest of the features are lovely too." },
    { t: "Simple and useful.", b: "It's at a higher level than most other apps, games and social media apps. Thank you for your effort — wonderful work. I'm someone trying to live my faith more deliberately, and this app has become my right hand." },
    { t: "Flawless.", b: "Hats off to the developer. No ads. Serious effort put in. Clearly built for the sake of Allah alone. Thank you." },
    { t: "A rare app.", b: "May God be pleased with you. Prayer times this well organised, and hadiths given carefully with their Arabic, Turkish and authenticity grading — yet no ads. An app like this is rare. Download it; it will probably stay on your phone for good." },
    { t: "Exactly what was needed.", b: "May God bless whoever thought of this. Explanatory, ad-free and to the point." },
    { t: "The latest update made it superb.", b: "Simple, elegant, useful, fast — what more can I say. Bless your hands, your effort and your heart." },
    { t: "May God be pleased.", b: "I was tired of ad-filled, paywalled, unusable interfaces. Vakit is truly wonderful — works everywhere, offline, ad-free. Quran, hadith, dhikr, prayer tracking — I barely need any other app." },
    { t: "I deleted the others.", b: "May God be pleased with whoever made this. Bless your hands. It has been so useful." },
    { t: "The best one.", b: "I haven't seen anything better than this — an app that should be on every phone. God bless the developer." },
    { t: "Truly useful.", b: "The app is extremely useful and practical. It should be on every Muslim's phone. God bless the developer." },
    { t: "May God be pleased.", b: "Brother, thank you so much for making an app this valuable free of charge. May God grant you your heart's wishes." },
  ],
};

// Rendered both as on-page accordion and as FAQPage structured data, from
// this one array — the two can no longer drift apart.
const FAQ = {
  tr: [
    { q: "İnternet bağlantısı olmadan çalışır mı?", a: "Evet. Namaz vakitleri konumunuza göre telefonunuzda hesaplanır. Kur'an, kıble, zikir ve tüm temel araçlar tamamen çevrimdışı çalışır." },
    { q: "Uygulamayı açmasam bile bildirimler gelir mi?", a: "Evet. Bildirimler cihazınızda yerel olarak planlanır. Uygulama kapalıyken bile bildirim alırsınız. 'Her Zaman' konum izni verirseniz, seyahat sonrası vakitler sessizce yeniden hesaplanır." },
    { q: "Her şey gerçekten ücretsiz mi?", a: "Şu an evet — tüm uygulama ücretsiz, abonelik yok, paywall yok, 'premium' yok. Sonsuza kadar böyle olacağına söz veremem (kimse dürüstçe veremez), ama şu an katıksız ücretsiz olduğuna söz verebilirim." },
    { q: "Namaz vakitleri nereden geliyor?", a: "Bir sunucudan çekilmiyor. Vakit bunları cihazınızda, seçtiğiniz yönteme (13 yöntem mevcut) ve konumunuza göre hesaplar." },
    { q: "Hangi dillerde kullanılabiliyor?", a: "Uygulamanın arayüzü 25 dilde: Türkçe, İngilizce, Arapça, Almanca, Fransızca, İspanyolca, İtalyanca, Hollandaca, Portekizce, Danca, Rusça, Azerice, Arnavutça, Endonezce, Malayca, Çince, Japonca, Tayca, Hintçe, Bengalce, Urduca, Farsça, Uygurca, Svahili ve Fulahça. Cihazınızın dili destekleniyorsa uygulama kendiliğinden o dilde açılır; istediğiniz zaman Ayarlar'dan değiştirebilirsiniz. Arapça, Urduca, Farsça ve Uygurca'da arayüz baştan sona sağdan sola akar. İçerik çevirileri ise şimdilik yalnız Türkçe ve İngilizce: Kur'an meali, kelime anlamları, okunuş ve hadis çevirileri bu iki dilde. Arapça arayüzde âyetlerin bir kısmı için Arapça tefsir açılır; Cuma hutbesi Türkçe, İngilizce ve bazı haftalar Arapça." },
    { q: "Hangi cihazlarda çalışıyor?", a: "iPhone, iPad, Apple Watch ve Mac. iPad'de aynı uygulama büyük ekranda çalışır; kayıtların iCloud üzerinden bütün cihazlarında aynı kalır. Vakit 1.7.0 ile Mac'e de geldi: sekmeler sol kenar çubuğunda, menü çubuğunda sonraki vakit ve geri sayım, klavye kısayolları ve masaüstü widget'ları ile. Namaz vakitleri, Kur'an, hadis, zikirmatik ve ibadet kayıtları iPhone'unuzla aynı iCloud hesabı üzerinden senkron. Kıble sekmesi Mac'te pusula donanımı olmadığı için yönü ve Kâbe'ye uzaklığı yazıyla gösterir." },
    { q: "Ezan sesini seçebiliyor muyum?", a: "Evet. Bildirimlerde beş ayrı makamda ezan var: hicaz, rast, saba, segah ve uşşak. Sesi Ayarlar → Bildirimler → Bildirim Sesi'nden seçiyorsun; istersen her vakit için ayrı ses belirleyebilirsin. Ezanlar uygulamayla birlikte geldiği için çalmaları internet gerektirmez." },
    { q: "Sabah namazı için alarm var mı?", a: "Evet. Sabah namazını henüz kılmadıysanız güneş doğmadan önce çalan, sessiz modu delen bir alarm kurabilirsiniz. Namazı kıldıysanız alarm çalmaz. Oruç tutanlar için ayrıca, oruç günlerinize göre kurulan bir sahur alarmı var." },
    { q: "Cuma hutbesi nereden geliyor?", a: "Diyanet'in o hafta yayımladığı hutbe uygulamaya düşer; okuyabilir, sesli kaydını dinleyebilir ve çevrimdışı okumak için indirebilirsiniz. Hutbe Diyanet'in yayını olduğu için bu bölüm, hesaplama yöntemi Diyanet olan kullanıcılarda görünür." },
    { q: "Kur'an özelliğinde neler var?", a: "Tüm 114 sure, kelime kelime analiz, Diyanet tefsiri, geleneksel Mushaf görünümü, sesli tilavet ve hatim takibi. Her şey çevrimdışı çalışır." },
    { q: "İbadet takibi nasıl çalışır?", a: "Activity Ring tarzı bir görünüm namazlarınızı, Kur'an okumanızı ve zikirlerinizi kaydeder. Ömür kazanızı vakit bazlı takip edebilir, borcunuzu kıldıkça eritebilirsiniz. Süreklilik ve istatistikler nazikçe gösterilir — suçlandırma yok." },
    { q: "Hangi widget'lar var?", a: "Namaz vakitleri, geri sayım, günün ayeti, günün esması, Hicri takvim, mübarek günler, ay fazı ve ibadet serileri için 25 widget. Ana ekran, kilit ekranı, StandBy ve Mac masaüstünde kullanılabilir." },
    { q: "Apple Watch uygulaması var mı?", a: "Evet. Apple Watch uygulaması namaz vakitlerini (geri sayım + liste), canlı kıble pusulasını ve tüm watch face'ler için 13 complication'ı destekler. iPhone ile birlikte çalışır — ayrı kurulum yok." },
    { q: "Verilerim nerede saklanıyor?", a: "İbadet takibiniz, kaza ve hatim ilerlemeniz, yer imleriniz, okuma geçmişiniz ve favori camileriniz yalnızca cihazınızda ve sizin özel iCloud alanınızda durur — sunucularımıza gönderilmez. Zekât tutarlarınız ve anlık konumunuz da hiçbir zaman gönderilmez. Sunucuya kullanım istatistikleri, zikir listeniz ve uygulama içinde aradığınız kelimeler gider; aradığınızı bulamadığınız yerleri görüp aramayı düzeltebilelim diye. Hepsi kimliğinizi içermeyen kalıcı bir kullanıcı koduna bağlıdır — takma kimlik, anonim değil. Ayrıntısı gizlilik politikasında." },
  ],
  en: [
    { q: "Does it work without internet?", a: "Yes. Prayer times are computed on your phone from your location. Quran, qibla, dhikr, and every core tool work fully offline." },
    { q: "Will notifications arrive if I never open the app?", a: "Yes. They're scheduled locally. You'll receive them even when the app is closed. If you grant 'Always' location access, Vakit quietly recalculates after you travel." },
    { q: "Is everything really free?", a: "Today, yes — the entire app is free, with no subscriptions, paywalls, or 'premium' tier. I can't promise that forever (nobody honestly can), but I can promise there's no catch today." },
    { q: "Where do prayer times come from?", a: "They're not fetched from a server. Vakit calculates them on your device using the method you pick — 13 are available — and your local coordinates." },
    { q: "Which languages is it available in?", a: "The app's interface is in 25 languages: Turkish, English, Arabic, German, French, Spanish, Italian, Dutch, Portuguese, Danish, Russian, Azerbaijani, Albanian, Indonesian, Malay, Chinese, Japanese, Thai, Hindi, Bengali, Urdu, Persian, Uyghur, Swahili and Fula. If your device language is supported, the app opens in it automatically; you can change it in Settings at any time. In Arabic, Urdu, Persian and Uyghur the whole interface runs right to left. Content translations, however, are in Turkish and English only for now: the Quran translation, word meanings, transliteration and hadith translations come in those two languages. With the Arabic interface, an Arabic tafsir opens for part of the Quran; the Friday sermon is in Turkish, English and, in some weeks, Arabic." },
    { q: "Which devices does it run on?", a: "iPhone, iPad, Apple Watch and Mac. On iPad it is the same app on a bigger screen, and your records stay identical across devices through iCloud. Since 1.7.0 Vakit runs on Mac too: tabs in the sidebar, next prayer and countdown in the menu bar, keyboard shortcuts and desktop widgets. Prayer times, Quran, hadith, dhikr and worship records sync with your iPhone over the same iCloud account. The Qibla tab shows the bearing and distance to the Ka'bah as text, since Macs have no compass hardware." },
    { q: "Can I choose the adhan sound?", a: "Yes. Notifications come with the adhan in five makams: hicaz, rast, saba, segah and ussak. Pick one in Settings → Notifications → Notification Sound, and you can set a different sound per prayer. The recordings ship with the app, so playing them needs no connection." },
    { q: "Is there an alarm for Fajr?", a: "Yes. You can set an alarm that rings before sunrise and breaks through silent mode if you haven't prayed Fajr yet. Mark the prayer as done and it stays silent. There's also a suhoor alarm that schedules itself around your fasting days." },
    { q: "Where does the Friday sermon come from?", a: "The khutbah Diyanet publishes each week lands in the app; you can read it, listen to the audio recording, and download it for offline reading. Because it is Diyanet's publication, this section appears for users whose calculation method is Diyanet." },
    { q: "What's in the Quran feature?", a: "All 114 surahs, word-by-word analysis, Diyanet tafsir, traditional Mushaf view, audio recitation, and a hatim tracker. Everything works offline." },
    { q: "How does worship tracking work?", a: "An Activity Ring-style view logs your prayers, Quran reading, and dhikr. You can also track a lifetime of missed prayers (qada) by time slot and clear the debt as you pray them. Streaks and gentle statistics help you keep going, without guilt." },
    { q: "Which widgets exist?", a: "25 widgets covering prayer times, countdown, verse of the day, name of the day, Hijri calendar, holy days, moon phase, and worship streaks. Available on the Home Screen, Lock Screen, StandBy, and the Mac desktop." },
    { q: "Is there an Apple Watch app?", a: "Yes. The Apple Watch app shows prayer times (countdown + list), a live qibla compass, and 13 watch face complications across all faces. It works alongside iPhone — no separate setup." },
    { q: "Where is my data stored?", a: "Your worship tracking, qada and hatim progress, bookmarks, reading history and favourite mosques stay on your device and in your own private iCloud — none of it reaches our servers. Your zakat amounts and live location are never sent either. What does go to the server is usage statistics, your dhikr list and the words you search for inside the app — so we can see where you couldn't find what you were looking for and fix search. All of it is tied to a persistent user code that carries no identifying information — a pseudonym, not anonymous. Details are in the privacy policy." },
  ],
};

// Legal pages. The prose lives in legal/<key>.js (tr + en); this is the
// per-language <head> metadata and the sitemap entry for each.
const LEGAL = {
  privacy: {
    file: "privacy.html",
    priority: "0.3",
    changefreq: "monthly",
    tr: {
      title: "Vakit — Gizlilik Politikası",
      description:
        "Vakit uygulamasının gizlilik politikası. Hesap gerektirmez, GPS koordinatı toplanmaz; hatim ve yer imi kayıtları yalnızca Apple iCloud üzerinden senkronlanır.",
    },
    en: {
      title: "Vakit — Privacy Policy",
      description:
        "Vakit's privacy policy. No account required, no GPS coordinates collected; hatim and bookmark records sync only through your own Apple iCloud.",
    },
  },
  terms: {
    file: "terms.html",
    priority: "0.3",
    changefreq: "monthly",
    tr: {
      title: "Vakit — Kullanım Şartları",
      description:
        "Vakit uygulamasının kullanım şartları. Ücretsiz, opsiyonel bağışlar (IAP) içerir, tüm temel özellikler ücretsizdir.",
    },
    en: {
      title: "Vakit — Terms of Use",
      description:
        "Vakit's terms of use. Free to use, with optional donations (IAP); every core feature is free.",
    },
  },
  "ads-policy": {
    file: "ads-policy.html",
    priority: "0.2",
    changefreq: "yearly",
    tr: {
      title: "Vakit — Reklam Politikası",
      description:
        "Vakit'in helal-uyumlu reklam politikası. Bahis, alkol, müstehcen, faiz veya fal/büyü içerikli reklam göstermeyiz.",
    },
    en: {
      title: "Vakit — Ad Policy",
      description:
        "Vakit's halal-compliant advertising policy. We show no gambling, alcohol, adult, interest-based or fortune-telling ads.",
    },
  },
};

/**
 * App Store linki üretir.
 *
 * @param {string} [campaign] App Store Connect → Analytics → Acquisition → Campaigns altında
 *   görünecek `ct` değeri. Verilmezse KAMPANYASIZ düz link döner — JSON-LD gibi yapısal
 *   verilerde kasıtlı olarak öyle kullanılır: arama motorundan gelen her tıklama tek bir
 *   sahte kampanyaya yazılırsa kanal ayrımı bozulur.
 */
function storeLink(campaign) {
  const base = `https://apps.apple.com/app/id${SITE.appStoreId}`;
  if (!campaign) return base;
  return `${base}?pt=${SITE.appStoreProviderToken}&ct=${encodeURIComponent(campaign)}`;
}

/* ------------------------------------------------------------------ assembly */

// Every language other than tr/en brings its copy from locales/<lang>.js.
for (const lang of Object.keys(LANGS)) {
  if (lang === "tr" || lang === "en") continue;
  const L = require(`./locales/${lang}.js`);
  META[lang] = L.META;
  COPY[lang] = L.COPY;
  PRAYERS[lang] = L.PRAYERS;
  CITIES[lang] = L.CITIES;
  FEATURES[lang] = L.FEATURES;
  SHOWCASE[lang] = L.SHOWCASE;
  COMPARE[lang] = L.COMPARE;
  REVIEWS[lang] = L.REVIEWS;
  FAQ[lang] = L.FAQ;
}

// Attach the language-independent parts: screenshot names and reviewer names.
for (const lang of Object.keys(LANGS)) {
  SHOWCASE[lang] = SHOWCASE[lang].map((s, i) => ({ ...s, img: SHOWCASE_IMG[i] }));
  REVIEWS[lang] = REVIEWS[lang].map((r, i) => ({ ...r, n: REVIEWERS[i] }));
}

/** Cities shown in a language's clock: its home city first, then the defaults. */
function clockCities(lang) {
  const ids = [LANGS[lang].city, ...CITY_DEFAULTS.filter((c) => c !== LANGS[lang].city)].slice(0, CITY_SLOTS);
  return ids.map((id) => ({ id, name: CITIES[lang][id], ...CITY_CATALOG[id] }));
}

const CONTENT = {
  SITE, LANGS, LEGAL_LANGS, META, COPY, PRAYERS, CITIES, CITY_CATALOG, FEATURES, SHOWCASE,
  SHOWCASE_IMG, COMPARE, REVIEWS, REVIEWERS, FAQ, LEGAL, storeLink, clockCities,
};

if (typeof module !== "undefined" && module.exports) module.exports = CONTENT;
