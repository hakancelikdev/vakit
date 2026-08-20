/**
 * Vakit landing page — single source of truth for every piece of page copy.
 *
 * Consumed by build.js (Node) to generate:
 *   docs/index.html     (tr)
 *   docs/en/index.html  (en)
 *   docs/sitemap.xml, docs/robots.txt, docs/llms.txt
 *
 * Nothing here is fetched by the browser: the generator bakes it all into
 * static HTML so search engines and AI crawlers (which do not run JavaScript)
 * can read the full page. Edit content here, then run `npm run build`.
 */

const SITE = {
  origin: "https://vakit.hakancelik.dev",
  appStoreUrl: "https://apps.apple.com/app/id6748356813",
  appName: "Vakit",
  author: "Hakan Çelik",
  authorUrl: "https://github.com/hakancelikdev",
  repoUrl: "https://github.com/hakancelikdev/vakit",
  feedbackUrl: "https://docs.google.com/forms/d/1kFwSM_XayYaRrkUyB8rynTJzWF8ahrcnHQp7fvhSfNU",
  email: "hakancelikdev@gmail.com",
  themeColor: "#2A9D8F",
  gaId: "G-T1PNWJYF69",
  // From the Turkish storefront (iTunes lookup API), where effectively all
  // ratings are. Re-check on each release:
  //   curl -s "https://itunes.apple.com/lookup?id=6748356813&country=tr"
  rating: { value: "4.8", count: "340" },
  // Mirrors the shipping iOS release. Bump together with the app.
  appVersion: "1.7.0",
  // sitemap <lastmod> and the llms.txt footer. Bump when page content changes.
  // Kept explicit rather than "today" so rebuilding the same commit is
  // byte-identical and CI can detect stale generated files.
  updated: "2026-08-09",
  minOS: "26.0",
  operatingSystem: "iOS, iPadOS, macOS, watchOS",
};

// Language → URL. Turkish is the canonical root; English gets its own
// indexable directory so it can rank on its own.
const LANGS = {
  tr: { htmlLang: "tr", ogLocale: "tr_TR", path: "/", dir: "." },
  en: { htmlLang: "en", ogLocale: "en_US", path: "/en/", dir: "en" },
};

const META = {
  tr: {
    title: "Vakit: Namaz, Kıble, Kuran",
    description:
      "Namaz vakitlerini takip edin, Kıble yönünü bulun, Kur'an-ı Kerim okuyun. iPhone, iPad, Apple Watch ve Mac; 13 hesaplama yöntemi, Live Activities, kilit ekranı widget'ları, Cuma hutbesi, kaza takibi. Tamamen ücretsiz, reklamsız, çevrimdışı.",
    keywords:
      "namaz vakitleri, vakit, kıble yönü, namaz vakti, kuran, kur'an-ı kerim, hatim, tefsir, zikir, zikirmatik, ibadet takibi, kaza namazı takibi, cuma hutbesi, kerahat vakitleri, sahur alarmı, apple watch, ipad, mac uygulaması, ezan sesi, hatim takibi, islamic app, prayer times, qibla direction, quran, hicri takvim, live activities, widget, dynamic island, namaz uygulaması",
  },
  en: {
    title: "Vakit: Prayer Times, Qibla, Quran",
    description:
      "Track prayer times, find the Qibla, read the Quran. iPhone, iPad, Apple Watch and Mac; 13 calculation methods, Live Activities, lock screen widgets, Friday sermon, qada tracking. Completely free, ad-free, offline.",
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
    "sc-lede": "Dokuz temel araç, her biri açılır açılmaz huzur hissettirecek şekilde tasarlandı. Önizlemek için dokun.",
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
    "q-h1": "Dürüst sorulara", "q-h2": "dürüst cevaplar.",
    "fin-h1": "İbadetin yarıda", "fin-h2": "kesilmesin.",
    "fin-p": "Şu an ücretsiz. Hesap yok. Çevrimdışı çalışır. iPhone, iPad, Apple Watch ve Mac — iOS 26 ve üzeri.",
    downloadCta2: "App Store'dan İndir", explore: "Özellikleri keşfet →",
    preview: "Önizle",
    footContact: "İletişim", footFeedback: "Geri Bildirim",
    footPrivacy: "Gizlilik", footTerms: "Şartlar", footAds: "Reklamlar", footDeck: "Sunum",
    footSig: "Özenle yapıldı · MIT lisanslı · © 2026 Hakan Çelik",
    menuLabel: "Menü", themeLabel: "Koyu modu aç/kapat",
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
    "sc-lede": "Nine core tools, each designed to feel calm the moment you open it. Tap any to preview.",
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
    "q-h1": "Honest answers", "q-h2": "to honest questions.",
    "fin-h1": "Don't let your worship", "fin-h2": "be interrupted.",
    "fin-p": "Free today. No account. Works offline. iPhone, iPad, Apple Watch and Mac — iOS 26 and up.",
    downloadCta2: "Download on the App Store", explore: "Explore features →",
    preview: "Preview",
    footContact: "Contact", footFeedback: "Feedback",
    footPrivacy: "Privacy", footTerms: "Terms", footAds: "Ads", footDeck: "Deck",
    footSig: "Made with care · MIT licensed · © 2026 Hakan Çelik",
    menuLabel: "Menu", themeLabel: "Toggle dark mode",
  },
};

// Every entry must correspond to a feature that actually ships in the app.
// When a feature is removed from the app, remove it here in the same release.
const FEATURES = {
  tr: [
    { n: "Namaz Vakitleri", d: "13 hesaplama yöntemi, zaman dilimine duyarlı, seyahat algılayan." },
    { n: "Manuel Konum", d: "Konumu elle seç ya da seyahatte kendiliğinden güncellensin." },
    { n: "Apple Watch", d: "Namaz vakitleri, canlı kıble, 12 watch face complication." },
    { n: "Mac Uygulaması", d: "Menü çubuğunda geri sayım, klavye kısayolları, iCloud senkron." },
    { n: "iPad", d: "Aynı uygulama büyük ekranda; kayıtların iCloud ile senkron." },
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
    { n: "Birleşik Arama", d: "Tek arama, her araç." },
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
    { n: "Manual Location", d: "Set your location by hand, or let it follow you as you travel." },
    { n: "Apple Watch", d: "Prayer times, live qibla, 12 watch face complications." },
    { n: "Mac App", d: "Menu bar countdown, keyboard shortcuts, iCloud sync." },
    { n: "iPad", d: "The same app on a bigger screen; your records sync over iCloud." },
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
    { n: "Unified Search", d: "One search, across every tool." },
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

// Nine entries, each paired with assets/screenshots/<lang>/<img>.webp
const SHOWCASE = {
  tr: [
    { t: "Vakitler, kolunuzda.", d: "Beş vakit, şehrin, bugün. Apple Watch bunları elinizin altına taşır. Eller doluysa Dynamic Island.", img: 1 },
    { t: "Her ekranda bir bakış.", d: "Ana ekran widget'ları, kilit ekranı widget'ları, StandBy ve Dynamic Island. Sessiz bir bakış — hiç dikkat çalmadan.", img: 2 },
    { t: "Kur'an, internetsiz de.", d: "Oku, dinle, tefekkür et — kelime kelime, tefsir, klasik Mushaf. Yer imleri çevrim içine döndüğünüzde cihazlar arası senkron.", img: 3 },
    { t: "Tüm araçlar, hep ücretsiz.", d: "Kur'an, zikir, hadis, esma, takvim, hesaplayıcılar — tek bir hub'da. Hiçbir özellik paywall arkasında değil.", img: 4 },
    { t: "Kıble, gizliliğin yerinde.", d: "Haptik yön ve Kâbe'ye mesafe. Koordinatlarınız telefonunuzdan asla çıkmaz — hesap yok, takip yok.", img: 5 },
    { t: "Cemaate yetişin.", d: "Yakındaki camiler haritada, vakte yetişme ipucu ile. Konum dışarıya çıkmaz.", img: 6 },
    { t: "On yedi namaz, resimli.", d: "Abdest, tüm namaz türleri, cemaat incelikleri ve namazda okunan kısa sureler — kibirsiz, öğretici.", img: 7 },
    { t: "Hatırlayan bir takvim.", d: "Hicri ve Miladi birlikte. Kandil geceleri, Ramazan, bayramlar, arefe — önemli her gün, işaretli.", img: 8 },
    { t: "İbadetinizin halkaları.", d: "Namaz, oruç, Kur'an, zikir ve hadis için Activity Ring. Seriler ve hatim — sakin ilerleme, suçluluk yok.", img: 9 },
  ],
  en: [
    { t: "Times, on your wrist.", d: "The five prayers, your city, today. Apple Watch keeps them in reach. Dynamic Island when your hands are busy.", img: 1 },
    { t: "Always one screen away.", d: "Home Screen widgets, lock-screen widgets, StandBy, and Dynamic Island. A quiet glance — never a stare.", img: 2 },
    { t: "The Quran, even offline.", d: "Read, listen, reflect — word-by-word, tafsir, classical Mushaf. Bookmarks sync across your devices when you are back online.", img: 3 },
    { t: "Every tool, free — always.", d: "Quran, dhikr, hadith, asma, calendar, calculators — all in one hub. Nothing locked behind a paywall.", img: 4 },
    { t: "Qibla, privately.", d: "Haptic bearing with distance to the Ka'bah. Your coordinates never leave your phone — no account, no tracking.", img: 5 },
    { t: "Find the jama'ah.", d: "Nearby mosques on the map, with whether you can still catch the prayer. Your location stays with you.", img: 6 },
    { t: "Seventeen prayers, illustrated.", d: "Wudu, every prayer type, congregational nuances, and short surahs — taught and remembered, without condescension.", img: 7 },
    { t: "A calendar that remembers.", d: "Hijri and Gregorian together. Kandil nights, Ramadan, eids, arefe — every day that matters, marked.", img: 8 },
    { t: "Your worship, in rings.", d: "Activity Rings for prayer, fasting, Quran, dhikr and hadith. Streaks and hatim — gentle progress, no guilt.", img: 9 },
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

const REVIEWS = {
  tr: [
    { t: "10/10 bir uygulama.", b: "Gerek widget'daki harika grafik görselleriyle gösterilen namaz vakitleri olsun, gerek uygulamanın reklamsız oluşu ve çok temiz bir arayüze sahip olması olsun 10/10. Gerçekten çok memnun kaldım, herkese tavsiye ederim.", n: "Meryem Ebrar" },
    { t: "Harika.", b: "Bulabileceğiniz en temiz ve kullanışlı uygulama. Reklam yok, arayüz çok sade ve şık. Kıble bulma kısmı gerçekten çok doğru ve güzel çalışıyor. Diğer içerikleri de çok hoş olmuş.", n: "alpaslanx" },
    { t: "Sade ve kullanışlı.", b: "Başka uygulamaların, oyunların, sosyal medya uygulamalarının çoğundan daha iyi bir seviyede. Teşekkür ederim çabalarınız için, harika bir iş olmuş. Dinimi daha planlı yaşamaya çalışan biriyim ve elim ayağım oldu bu uygulama.", n: "h-seyin" },
    { t: "Kusursuz.", b: "Yapanın eline sağlık. Reklam yok. Ciddi emek verilmiş. Belliki sadece Allah rızası için. Sağolun.", n: "Keskin2298" },
    { t: "Nadir bir uygulama.", b: "Allah sizden razı olsun. Gerek namaz vakitlerinin bu şekilde derli toplu olması, gerekse hadislerin hassasiyet gözetilerek Arapçaları, Türkçeleri ve sıhhat dereceleriyle verilmesi ama reklam gösterilmemesi — böyle bir uygulama nadirdir. İndirin, muhtemelen kalıcı uygulamanız olacaktır.", n: "Baalbak9907" },
    { t: "İsteklerin tam karşılığı.", b: "Kim düşünüp yapabildiyse Allah razı olsun. Açıklayıcı, reklamsız ve net.", n: "Sswnn21" },
    { t: "Son güncellemeyle muazzam olmuş.", b: "Basit, estetik, kullanışlı, hızlı — ne diyeyim. Eline emeğine gönlüne sağlık.", n: "Mücahade" },
    { t: "Allah razı olsun.", b: "Reklamlı, sürekli para isteyen kullanışsız arayüzlerden bıkmıştım. Vakit gerçekten harika; her yerde çalışması, internetsiz olması, reklamsız olması harika. Kuran, hadis, zikirmatik, namaz takibi — başka uygulamaya ihtiyacım yok.", n: "h.ç44" },
    { t: "Diğerlerini sildim.", b: "Allah yapandan razı olsun. Elinize sağlık. Çok faydalı oldu.", n: "Çerkezin biri" },
    { t: "En iyisi.", b: "Bundan daha iyisini görmedim. Her telefonda olması gereken bir uygulama. Geliştiren arkadaştan Allah razı olsun.", n: "Bessey Çelik" },
    { t: "Gerçekten faydalı.", b: "Uygulama çok faydalı ve pratik. Her Müslümanın telefonunda olması gereken bir uygulama. Geliştirenden Allah razı olsun.", n: "tolgalive" },
    { t: "Allah razı olsun.", b: "Kardeşim, böylesine değerli bir uygulamayı ücretsiz yaptığın için çok teşekkürler. Allah gönlüne göre versin inşallah.", n: "Murat KAYAHAN" },
  ],
  en: [
    { t: "A 10/10 app.", b: "Whether it's the prayer times shown with those beautiful widget graphics, or the fact that it has no ads and such a clean interface — 10/10. I'm genuinely delighted with it and recommend it to everyone.", n: "Meryem Ebrar" },
    { t: "Wonderful.", b: "The cleanest, most usable app you can find. No ads, a clean and elegant interface. The qibla finder works really accurately. The rest of the features are lovely too.", n: "alpaslanx" },
    { t: "Simple and useful.", b: "It's at a higher level than most other apps, games and social media apps. Thank you for your effort — wonderful work. I'm someone trying to live my faith more deliberately, and this app has become my right hand.", n: "h-seyin" },
    { t: "Flawless.", b: "Hats off to the developer. No ads. Serious effort put in. Clearly built for the sake of Allah alone. Thank you.", n: "Keskin2298" },
    { t: "A rare app.", b: "May God be pleased with you. Prayer times this well organised, and hadiths given carefully with their Arabic, Turkish and authenticity grading — yet no ads. An app like this is rare. Download it; it will probably stay on your phone for good.", n: "Baalbak9907" },
    { t: "Exactly what was needed.", b: "May God bless whoever thought of this. Explanatory, ad-free and to the point.", n: "Sswnn21" },
    { t: "The latest update made it superb.", b: "Simple, elegant, useful, fast — what more can I say. Bless your hands, your effort and your heart.", n: "Mücahade" },
    { t: "May God be pleased.", b: "I was tired of ad-filled, paywalled, unusable interfaces. Vakit is truly wonderful — works everywhere, offline, ad-free. Quran, hadith, dhikr, prayer tracking — I barely need any other app.", n: "h.ç44" },
    { t: "I deleted the others.", b: "May God be pleased with whoever made this. Bless your hands. It has been so useful.", n: "Çerkezin biri" },
    { t: "The best one.", b: "I haven't seen anything better than this — an app that should be on every phone. God bless the developer.", n: "Bessey Çelik" },
    { t: "Truly useful.", b: "The app is extremely useful and practical. It should be on every Muslim's phone. God bless the developer.", n: "tolgalive" },
    { t: "May God be pleased.", b: "Brother, thank you so much for making an app this valuable free of charge. May God grant you your heart's wishes.", n: "Murat KAYAHAN" },
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
    { q: "Hangi cihazlarda çalışıyor?", a: "iPhone, iPad, Apple Watch ve Mac. iPad'de aynı uygulama büyük ekranda çalışır; kayıtların iCloud üzerinden bütün cihazlarında aynı kalır. Vakit 1.7.0 ile Mac'e de geldi: sekmeler sol kenar çubuğunda, menü çubuğunda sonraki vakit ve geri sayım, klavye kısayolları ve masaüstü widget'ları ile. Namaz vakitleri, Kur'an, hadis, zikirmatik ve ibadet kayıtları iPhone'unuzla aynı iCloud hesabı üzerinden senkron. Kıble sekmesi Mac'te pusula donanımı olmadığı için yönü ve Kâbe'ye uzaklığı yazıyla gösterir." },
    { q: "Ezan sesini seçebiliyor muyum?", a: "Evet. Bildirimlerde beş ayrı makamda ezan var: hicaz, rast, saba, segah ve uşşak. Sesi Ayarlar → Bildirimler → Bildirim Sesi'nden seçiyorsun; istersen her vakit için ayrı ses belirleyebilirsin. Ezanlar uygulamayla birlikte geldiği için çalmaları internet gerektirmez." },
    { q: "Sabah namazı için alarm var mı?", a: "Evet. Sabah namazını henüz kılmadıysanız güneş doğmadan önce çalan, sessiz modu delen bir alarm kurabilirsiniz. Namazı kıldıysanız alarm çalmaz. Oruç tutanlar için ayrıca, oruç günlerinize göre kurulan bir sahur alarmı var." },
    { q: "Cuma hutbesi nereden geliyor?", a: "Diyanet'in o hafta yayımladığı hutbe uygulamaya düşer; okuyabilir, sesli kaydını dinleyebilir ve çevrimdışı okumak için indirebilirsiniz. Hutbe Diyanet'in yayını olduğu için bu bölüm, hesaplama yöntemi Diyanet olan kullanıcılarda görünür." },
    { q: "Kur'an özelliğinde neler var?", a: "Tüm 114 sure, kelime kelime analiz, Diyanet tefsiri, geleneksel Mushaf görünümü, sesli tilavet ve hatim takibi. Her şey çevrimdışı çalışır." },
    { q: "İbadet takibi nasıl çalışır?", a: "Activity Ring tarzı bir görünüm namazlarınızı, Kur'an okumanızı ve zikirlerinizi kaydeder. Ömür kazanızı vakit bazlı takip edebilir, borcunuzu kıldıkça eritebilirsiniz. Süreklilik ve istatistikler nazikçe gösterilir — suçlandırma yok." },
    { q: "Hangi widget'lar var?", a: "Namaz vakitleri, geri sayım, günün ayeti, günün esması, Hicri takvim, mübarek günler, ay fazı ve ibadet serileri için 20 widget. Ana ekran, kilit ekranı, StandBy ve Mac masaüstünde kullanılabilir." },
    { q: "Apple Watch uygulaması var mı?", a: "Evet. Apple Watch uygulaması namaz vakitlerini (geri sayım + liste), canlı kıble pusulasını ve tüm watch face'ler için 12 complication'ı destekler. iPhone ile birlikte çalışır — ayrı kurulum yok." },
    { q: "Verilerim nerede saklanıyor?", a: "İbadet takibiniz, kaza ve hatim ilerlemeniz, yer imleriniz, okuma geçmişiniz ve favori camileriniz yalnızca cihazınızda ve sizin özel iCloud alanınızda durur — sunucularımıza gönderilmez. Zekât tutarlarınız, anlık konumunuz ve arama sorgularınız da hiçbir zaman gönderilmez. Sunucuya kullanım istatistikleri ile zikir listeniz gider; ikisi de kimliğinizi içermeyen kalıcı bir kullanıcı koduna bağlıdır — takma kimlik, anonim değil. Ayrıntısı gizlilik politikasında." },
  ],
  en: [
    { q: "Does it work without internet?", a: "Yes. Prayer times are computed on your phone from your location. Quran, qibla, dhikr, and every core tool work fully offline." },
    { q: "Will notifications arrive if I never open the app?", a: "Yes. They're scheduled locally. You'll receive them even when the app is closed. If you grant 'Always' location access, Vakit quietly recalculates after you travel." },
    { q: "Is everything really free?", a: "Today, yes — the entire app is free, with no subscriptions, paywalls, or 'premium' tier. I can't promise that forever (nobody honestly can), but I can promise there's no catch today." },
    { q: "Where do prayer times come from?", a: "They're not fetched from a server. Vakit calculates them on your device using the method you pick — 13 are available — and your local coordinates." },
    { q: "Which devices does it run on?", a: "iPhone, iPad, Apple Watch and Mac. On iPad it is the same app on a bigger screen, and your records stay identical across devices through iCloud. Since 1.7.0 Vakit runs on Mac too: tabs in the sidebar, next prayer and countdown in the menu bar, keyboard shortcuts and desktop widgets. Prayer times, Quran, hadith, dhikr and worship records sync with your iPhone over the same iCloud account. The Qibla tab shows the bearing and distance to the Ka'bah as text, since Macs have no compass hardware." },
    { q: "Can I choose the adhan sound?", a: "Yes. Notifications come with the adhan in five makams: hicaz, rast, saba, segah and ussak. Pick one in Settings → Notifications → Notification Sound, and you can set a different sound per prayer. The recordings ship with the app, so playing them needs no connection." },
    { q: "Is there an alarm for Fajr?", a: "Yes. You can set an alarm that rings before sunrise and breaks through silent mode if you haven't prayed Fajr yet. Mark the prayer as done and it stays silent. There's also a suhoor alarm that schedules itself around your fasting days." },
    { q: "Where does the Friday sermon come from?", a: "The khutbah Diyanet publishes each week lands in the app; you can read it, listen to the audio recording, and download it for offline reading. Because it is Diyanet's publication, this section appears for users whose calculation method is Diyanet." },
    { q: "What's in the Quran feature?", a: "All 114 surahs, word-by-word analysis, Diyanet tafsir, traditional Mushaf view, audio recitation, and a hatim tracker. Everything works offline." },
    { q: "How does worship tracking work?", a: "An Activity Ring-style view logs your prayers, Quran reading, and dhikr. You can also track a lifetime of missed prayers (qada) by time slot and clear the debt as you pray them. Streaks and gentle statistics help you keep going, without guilt." },
    { q: "Which widgets exist?", a: "20 widgets covering prayer times, countdown, verse of the day, name of the day, Hijri calendar, holy days, moon phase, and worship streaks. Available on the Home Screen, Lock Screen, StandBy, and the Mac desktop." },
    { q: "Is there an Apple Watch app?", a: "Yes. The Apple Watch app shows prayer times (countdown + list), a live qibla compass, and 12 watch face complications across all faces. It works alongside iPhone — no separate setup." },
    { q: "Where is my data stored?", a: "Your worship tracking, qada and hatim progress, bookmarks, reading history and favourite mosques stay on your device and in your own private iCloud — none of it reaches our servers. Your zakat amounts, live location and search queries are never sent either. What does go to the server is usage statistics and your dhikr list; both are tied to a persistent user code that carries no identifying information — a pseudonym, not anonymous. Details are in the privacy policy." },
  ],
};

// Legal pages. The prose lives in legal/<key>.js (both languages); this is the
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

const CONTENT = { SITE, LANGS, META, COPY, FEATURES, SHOWCASE, COMPARE, REVIEWS, FAQ, LEGAL };

if (typeof module !== "undefined" && module.exports) module.exports = CONTENT;
