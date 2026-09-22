/**
 * Press kit copy for /press.html and /en/press.html.
 *
 * Written for two readers: App Store editors looking at a featuring nomination,
 * and journalists who need a boilerplate they can paste. Turkish and English
 * only — the same rule the legal pages follow; every other language reads the
 * English page.
 *
 * Numbers that change with a release (version, rating) come from content.js so
 * this file never goes stale on its own. Anything stated here must be true of
 * the version that is live on the App Store.
 */

const { SITE } = require("./content.js");

const RATING = `${SITE.rating.value} / ${SITE.rating.count}`;

module.exports = {
  tr: {
    meta: {
      title: "Vakit — Basın Kiti",
      description:
        "Vakit basın kiti: künye, hazır tanıtım metinleri, görseller ve iletişim. Namaz vakitleri, kıble, Kur'an ve ibadet takibi; iPhone, iPad, Apple Watch ve Mac.",
    },
    title: "Basın <em>Kiti</em>",
    desc: "Vakit hakkında yazacaklar için hazır metinler, künye ve görseller. Buradaki her cümle App Store'da yayında olan sürüm için doğrudur; başka bir şeye ihtiyacın olursa yaz, aynı gün dönerim.",
    oneLiner: {
      t: "Tek cümle",
      b: "Vakit; namaz vakitlerini cihazda hesaplayan, Kur'an'ı, hadisi ve ibadet defterini yanında taşıyan, reklamsız ve hesapsız bir ibadet uygulamasıdır.",
    },
    boiler: {
      t: "Hazır tanıtım metni",
      short:
        "Vakit, iPhone, iPad, Apple Watch ve Mac için namaz vakitleri ve ibadet uygulamasıdır. Vakitler cihazda hesaplanır, çekirdek özellikler internetsiz çalışır.",
      medium:
        "Vakit, iPhone, iPad, Apple Watch ve Mac için bir namaz vakitleri ve ibadet uygulamasıdır. Diyanet dahil 12 hesaplama yöntemiyle vakitleri cihazın kendisinde hesaplar; Kur'an-ı Kerim, 36.000'den fazla hadis ve illüstrasyonlu namaz rehberi uygulamanın içinde geldiği için çekirdek özellikler internetsiz çalışır. Ücretsizdir, zorunlu reklam göstermez ve hesap açmanızı istemez.",
      long:
        "Vakit, tek bir geliştiricinin yazdığı, iPhone, iPad, Apple Watch ve Mac için çalışan bir namaz vakitleri ve ibadet uygulamasıdır. Vakitler Diyanet dahil 12 yöntemle cihazda hesaplanır; Kur'an-ı Kerim (kelime kelime meal ve tilavetle), 36.000'den fazla hadis, Esmâ-ül Hüsnâ, zikirmatik, kaza defteri ve illüstrasyonlu namaz rehberi uygulamayla birlikte gelir, bu yüzden çekirdek özellikler internetsiz çalışır. Kilit ekranı ve ana ekran widget'ları, Dynamic Island'da canlı geri sayım, Denetim Merkezi kısayolları, Apple Watch komplikasyonları ve Mac menü çubuğu desteklenir. Uygulama 25 dilde konuşur; kimlik bilgisi toplamaz, hesap açtırmaz, veri satmaz.",
    },
    factsTitle: "Künye",
    facts: [
      ["Uygulama", "Vakit — Namaz Vakitleri, Ezan"],
      ["Geliştirici", "Hakan Çelik — bağımsız, Türkiye"],
      ["Kategori", "Yaşam Tarzı (birincil), Başvuru"],
      ["Platformlar", "iPhone ve iPad (iOS 16.4+), Apple Watch (watchOS 9+), Mac (macOS 13+)"],
      ["Diller", "25"],
      ["Fiyat", "Ücretsiz. İsteğe bağlı bağış; reklam yalnız kullanıcının kendi açtığı Sadaka Modu'nda"],
      ["İlk yayın", "16 Ağustos 2025"],
      ["Güncel sürüm", SITE.appVersion],
      ["App Store puanı", `${RATING} (Türkiye mağazası)`],
      ["App Store kimliği", SITE.appStoreId],
      ["Gizlilik", "Hesap yok, kimlik bilgisi yok; yalnız anonim kullanım istatistiği"],
    ],
    sections: [
      {
        t: "Vakit'i ayıran ne",
        b: "• Vakitler cihazda hesaplanır — Türkiye için Diyanet'in kendi yöntemi ayrı bir hesaplayıcıyla yazıldı, resmî takvimle karşılaştırılarak ölçülür.\n• Gökyüzü uygulamanın içinde: güneş ve ayın konumu astronomik olarak hesaplanır, ekranın rengi ilk ışıktan derin geceye yedi durakta değişir; aynı palet widget'larda, kilit ekranında ve Apple Watch'ta sürer.\n• İbadet defteri kullanıcının kendisinde kalır: kaza namazı ve orucu, hatim, zikir, hedefler yalnız cihazda ve kullanıcının kendi iCloud alanında durur.\n• Reklam kategorinin kuralıdır; Vakit'te zorunlu reklam yoktur. Reklam yalnız kullanıcının kendi açtığı, geliştiriciyi desteklemek için var olan Sadaka Modu'nda görünür.",
      },
      {
        t: "Öne çıkan özellikler",
        b: "• Namaz vakitleri, kıble pusulası, kerahat ve nafile aralıkları, sahur alarmı (sessiz ve odak modunu deler)\n• İmsakiye: bir ayın bütün vakitleri tek tabloda, basılı takvimlerdeki gibi\n• Kur'an-ı Kerim: iki mushaf hattı, kelime kelime meal, sekiz kâri, kendi çalma listeniz, çevrimdışı indirme\n• 36.000+ hadis (7 koleksiyon), Esmâ-ül Hüsnâ, zikirmatik ve namaz tesbihatı\n• Kaza namazı ve kaza orucu defteri, ibadet hedefleri, hatim takibi, muhasebe ekranı\n• Cuma ve mübarek günler için adım adım rehberler; Diyanet'in haftalık hutbesi\n• 25 widget, Dynamic Island ve Live Activity, 6 Denetim Merkezi kısayolu, 13 Apple Watch komplikasyonu, Mac menü çubuğu",
      },
      {
        t: "Geliştirici",
        b: "Vakit'i Hakan Çelik tek başına yazıyor; yatırım almadı, abonelik satmıyor. Uygulamanın amacı günlük ibadeti kolaylaştırmak: doğru vakit, hızlı açılış, kullanıcıyı bunaltmayan bir arayüz ve satılmayan bir veri.",
      },
    ],
    assetsTitle: "Görseller ve video",
    assetsNote: "Basılı ve dijital yayında serbestçe kullanılabilir; değiştirilmeden, uygulama adıyla birlikte.",
    contactTitle: "İletişim",
    contactNote: "Basın, inceleme kopyası ve röportaj talepleri için:",
  },

  en: {
    meta: {
      title: "Vakit — Press Kit",
      description:
        "Vakit press kit: fact sheet, ready-to-use boilerplate, images and contact. Prayer times, Qibla, Qur'an and worship tracking for iPhone, iPad, Apple Watch and Mac.",
    },
    title: "Press <em>Kit</em>",
    desc: "Everything needed to write about Vakit: boilerplate you can paste, a fact sheet and images. Every statement here is true of the version live on the App Store. If something is missing, write and you will have it the same day.",
    oneLiner: {
      t: "One line",
      b: "Vakit is a prayer-times and worship app that computes the times on the device and carries the Qur'an, the hadith and your worship records with it — no ads, no account.",
    },
    boiler: {
      t: "Boilerplate",
      short:
        "Vakit is a prayer-times and worship app for iPhone, iPad, Apple Watch and Mac. Times are computed on the device and the core features work without a network.",
      medium:
        "Vakit is a prayer-times and worship app for iPhone, iPad, Apple Watch and Mac. It computes the times on the device with 12 calculation methods, Diyanet's among them, and ships the Qur'an, 36,000+ hadith and illustrated prayer guides inside the app, so the core works without a network. It is free, shows no forced advertising and asks for no account.",
      long:
        "Vakit is a prayer-times and worship app written by a single developer for iPhone, iPad, Apple Watch and Mac. Prayer times are computed on the device with 12 methods, including the Turkish Diyanet's own. The Qur'an with word-by-word translation and recitation, 36,000+ hadith, the 99 Names, a dhikr counter, a make-up prayer ledger and illustrated prayer guides all ship inside the app, so the core works without a network. It supports Home and Lock Screen widgets, a live countdown in the Dynamic Island, Control Center controls, Apple Watch complications and a Mac menu bar item. The app speaks 25 languages, collects no identity data, requires no account and sells nothing.",
    },
    factsTitle: "Fact sheet",
    facts: [
      ["App", "Vakit: Prayer Times Widget"],
      ["Developer", "Hakan Çelik — independent, Turkey"],
      ["Category", "Lifestyle (primary), Reference"],
      ["Platforms", "iPhone and iPad (iOS 16.4+), Apple Watch (watchOS 9+), Mac (macOS 13+)"],
      ["Languages", "25"],
      ["Price", "Free. Optional donations; ads only inside the opt-in Sadaka (charity) Mode"],
      ["First release", "16 August 2025"],
      ["Current version", SITE.appVersion],
      ["App Store rating", `${RATING} (Turkish storefront)`],
      ["App Store ID", SITE.appStoreId],
      ["Privacy", "No account, no identity data; anonymous usage statistics only"],
    ],
    sections: [
      {
        t: "What sets it apart",
        b: "• Times are computed on the device — the Turkish Diyanet method is implemented as its own calculator and measured against the authority's published calendar.\n• The sky is part of the app: the sun and the moon are placed astronomically and the palette moves through seven stages, from first light to deep night; the same palette continues in the widgets, on the Lock Screen and on Apple Watch.\n• Worship records stay with the person: make-up prayers and fasts, hatim progress, dhikr and goals live on the device and in the user's own iCloud.\n• Advertising is the norm in this category; Vakit has none by default. Ads appear only inside Sadaka Mode, which the user opens deliberately to support the developer.",
      },
      {
        t: "Feature highlights",
        b: "• Prayer times, a Qibla compass, karahat and nafl windows, and a suhoor alarm that sounds through silent mode and Focus\n• Imsakiye: a whole month of prayer times in one table, the way printed calendars show them\n• The Qur'an: two mushaf scripts, word-by-word translation, eight reciters, your own playlists, offline download\n• 36,000+ hadith across seven collections, the 99 Names, a dhikr counter and the post-prayer tasbihat\n• Ledgers for missed prayers and fasts, worship goals, hatim tracking and an accounting screen\n• Step-by-step guides for Fridays and the holy days, plus Diyanet's weekly sermon\n• 25 widgets, Dynamic Island and Live Activity, six Control Center controls, 13 Apple Watch complications, a Mac menu bar item",
      },
      {
        t: "Developer",
        b: "Vakit is written solo by Hakan Çelik — no funding, no subscription. The goal is a calmer daily practice: the right time, a fast launch, an interface that does not shout, and data that is never sold.",
      },
    ],
    assetsTitle: "Images and video",
    assetsNote: "Free to use in print and online, unaltered and alongside the app's name.",
    contactTitle: "Contact",
    contactNote: "For press, review copies and interviews:",
  },

  /* Shared asset list — the files live under docs/assets and are published with
     the site, so a journalist can right-click straight from the page. */
  assets: [
    { href: "/assets/app-icon.png", tr: "Uygulama simgesi (1024×1024, PNG)", en: "App icon (1024×1024, PNG)" },
    { href: "/assets/screenshots/en/prayer-times.webp", tr: "Namaz vakitleri ekranı", en: "Prayer times screen" },
    { href: "/assets/screenshots/en/quran.webp", tr: "Kur'an-ı Kerim ekranı", en: "Qur'an screen" },
    { href: "/assets/screenshots/en/qibla.webp", tr: "Kıble pusulası", en: "Qibla compass" },
    { href: "/assets/screenshots/en/widget.webp", tr: "Widget'lar", en: "Widgets" },
    { href: "/assets/video/walkthrough.mp4", tr: "Tanıtım turu (20 sn, MP4)", en: "Walkthrough (20 s, MP4)" },
    { href: "/assets/video/sky-en.mp4", tr: "Gökyüzü videosu (MP4, sessiz)", en: "Sky video (MP4, silent)" },
  ],
};
