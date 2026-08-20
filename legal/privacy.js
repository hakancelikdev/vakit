/**
 * Legal copy for privacy.html — extracted from the old inline script.
 * Rendered to static HTML by build.js for both languages.
 */

module.exports = {
  "tr": {
    "title": "Gizlilik <em>Politikası</em>",
    "desc": "Son güncelleme: 20 Ağustos 2026 — Sürüm 1.7.1\n\nVakit gizliliğinize saygı duyar. Hesap oluşturmanız gerekmez; ad, e-posta, telefon, fotoğraf veya rehber gibi kişisel kimlik bilgisi toplamayız. Namaz vakitleri, kıble yönü ve hatırlatıcılar tamamen cihazınızda hesaplanır. Hatim, yer imi, hedef ve favori cami kayıtlarınız cihazınızda kalır ve yalnızca sizin Apple iCloud alanınızda senkronlanır — sunucularımıza gönderilmez. Zikir listeniz bunun istisnasıdır: uygulamayı geliştirebilmek için kullanım istatistikleriyle birlikte sunucularımıza da gönderilir (ayrıntı: 1. bölüm). Sunucuya giden her şey kimliğinizi içermeyen kalıcı bir kullanıcı koduna bağlıdır.",
    "sections": [
      {
        "t": "1. Topladığımız Veriler",
        "b": "Toplamadığımız veriler:\n• Ad, e-posta, telefon, fotoğraf, mikrofon, kamera, rehber\n• GPS koordinatları (enlem/boylam) – sunucuya hiç gönderilmez\n• Arama sorgu metinleri (yalnız sorgunun karakter uzunluğu gönderilir)\n• Hesap bilgileri (Vakit'in kendi hesap sistemi yoktur)\n\nCihazınızda saklanan ve sizin özel iCloud alanınızda senkronlanan veriler:\n• Zikir kayıtları, hatim ilerlemesi, ibadet hedefleri\n• Kur'an ve hadis yer imleri, okuma geçmişi\n• Sure tamamlama sayaçları, hadis bölüm durumları\n• Kaza namazı ve kaza orucu defteriniz\n• Mazeret günü işaretleriniz\n• Favori camiler\n• Uygulama tercihleri (dil, hesaplama yöntemi, bildirim ayarları, tema)\n\nSunucularımıza gönderilen veriler — kimliğinizi içermeyen kalıcı bir kullanıcı koduna bağlıdır (takma kimlik, anonim değil):\n• Bölgesel konum (ülke, şehir, ilçe) – GPS koordinatları DEĞİL\n• Cihaz modeli, iOS/macOS sürümü, uygulama sürümü, watchOS sürümü\n• Uygulama tercihleri (dil, hesaplama yöntemi, tema, mezhep, takvim türü, namaz rehberi için seçtiğiniz cinsiyet, hangi vakitlerde bildirim istediğiniz, Kur'an ve hadis okuma tercihleriniz — yazı boyutu, meal, okuyucu, mushaf hattı gibi). Okuduğunuz yer ve okuma geçmişiniz buna dahil DEĞİLDİR.\n• Özellik kullanım istatistikleri (ekran görüntülenme, özellik kullanımı). Bu istatistikler yukarıdaki defterlerin kullanıldığını gösterir — örneğin bir mazeret günü işaretlendiğini ya da kaza kaydı girildiğini. Defterin kendisi (kayıtlarınızın listesi ve sayıları) gönderilmez; gönderilen, o işlemin yapıldığı bilgisidir ve her istatistik gibi zaman damgası taşır.\n• Zikir listeniz – zikir adı, türü, kategorisi ve çekim sayaçları; kendi eklediğiniz zikirlerde girdiğiniz Arapça metin, açıklama ve kaynak bilgisi dahil. Hangi zikirlerin ne sıklıkta kullanıldığını görüp uygulamanın zikir bölümünü geliştirmek için toplanır.\n• Çökme raporları (Firebase Crashlytics aracılığıyla, kişisel veri içermez)\n\nBu kullanıcı kodu iCloud anahtar zinciri üzerinden senkronlandığı için aynı Apple ID'ye sahip cihazlarınız tek kullanıcı sayılır ve uygulamayı silip yeniden kurduğunuzda korunur. Kod hiçbir kimlik bilgisi içermez; verileriniz satılmaz ve reklam için kullanılmaz."
      },
      {
        "t": "2. Verilerinizi Nasıl Kullanıyoruz",
        "b": "• Namaz Vakti Hesaplama – Konum cihazınızda yerel olarak Adhan kütüphanesi ile çevrim dışı işlenir.\n• Kıble Yönü – Konum ve pusula yönü cihaz üzerinde birleştirilir.\n• İbadet Hatırlatıcıları – Yerel bildirimler iOS ve macOS tarafından cihazda planlanır.\n• Duyuru Bildirimleri – Mübarek gün ve sürüm duyuruları Firebase Cloud Messaging ile topluca gönderilir; kişiye özel hedefleme yapılmaz.\n• Cuma Hutbesi – Haftanın hutbesi Diyanet'in açık sayfasından indirilir; istekte kimlik bilginiz taşınmaz.\n• Yakındaki Camiler – Konumunuz Apple MapKit'e gönderilir (cami arama, mesafe, yol tarifi); Vakit sunucularına gönderilmez.\n• Kullanıcı Verileri (zikir, hatim, yer imleri) – Cihazınızda SwiftData ile saklanır ve sizin özel Apple iCloud alanınızda senkronlanır. Bunlardan yalnız zikir listesi ayrıca Vakit sunucusuna da gönderilir (bkz. 1. bölüm).\n• Geliştirme ve İyileştirme – Kullanım istatistikleri (GPS koordinatı ve arama metni hariç) performansı izlemek ve hataları tespit etmek için kullanılır."
      },
      {
        "t": "3. iCloud Senkronizasyonu (CloudKit)",
        "b": "Vakit, ibadet kayıtlarınızı (zikir, hatim, yer imleri, hedefler, favori camiler) Apple'ın CloudKit altyapısı üzerinden cihazlarınız arasında senkronlar. Bu veriler:\n• Yalnızca sizin Apple ID'nize ait özel iCloud alanında (private database) tutulur.\n• Apple altyapısında şifrelenir; biz, Apple çalışanları ve üçüncü taraflar bu verilere erişemez.\n• iPhone, iPad, Mac ve Apple Watch arasında otomatik senkronlanır.\n• iCloud'u devre dışı bıraktığınızda yalnızca cihazınızda kalır.\n• \"Hesabımı Sil\" özelliğini veya iCloud'dan Vakit verilerini sildiğinizde tüm cihazlarınızdan kaldırılır.\n\nDetaylar için: apple.com/legal/privacy"
      },
      {
        "t": "4. Apple Watch ve Mac Verileri",
        "b": "Vakit, watchOS 26+ üzerinde companion uygulama içerir. Watch tarafında:\n• Konum izniniz Watch'a ayrı verilir; iPhone'da Vakit yüklüyse konum WatchConnectivity ile iPhone'dan alınır, yoksa Watch GPS'i kullanılır.\n• Pusula sensörü kıble yönü için cihazda işlenir; sunucuya gönderilmez.\n• Sağlık (HealthKit), aktivite veya kalp atışı verisi okumayız.\n• Bildirimler iOS notification mirroring ile iPhone'dan iletilir; Watch yalnız çalışıyorsa kendi yerel bildirimlerini planlar.\n\nMac tarafında (macOS 26+):\n• Mac uygulaması iPhone uygulamasının aynısıdır; verileriniz yine cihazda saklanır ve sizin özel iCloud alanınızda senkronlanır.\n• Mac'te pusula donanımı bulunmadığı için canlı kıble pusulası yoktur; yön ve mesafe konumdan hesaplanarak yazıyla gösterilir.\n• Konum, Mac'te GPS yerine Wi-Fi tabanlı konum servisinden gelir ve yine sunucuya gönderilmez.\n• Bildirim izni ve bildirim ayarları her cihazda ayrıdır; Mac'te yaptığınız değişiklik iPhone'unuzu etkilemez."
      },
      {
        "t": "5. Üçüncü Taraf Hizmetler",
        "b": "Vakit aşağıdaki hizmetleri sınırlı amaçlarla kullanır. Hiçbiri kişisel kimlik bilginize bağlı değildir:\n\n• Apple iCloud / CloudKit – Kullanıcı verisi senkronizasyonu (sizin özel iCloud alanınızda).\n• Apple MapKit – Yakındaki camiler, harita ve yol tarifi (konum Apple'a gönderilir).\n• Firebase Crashlytics (Google) – Kimlik bilgisi içermeyen çökme raporları (stack trace, cihaz modeli, iOS/macOS sürümü).\n• Firebase Remote Config (Google) – Özellik bayrakları ve kademeli rollout (cihazdan veri okumaz).\n• Google AdMob – Yalnızca isteğe bağlı \"Sadaka Modu\"nda ödüllü video reklam göstermek için. Detay aşağıdaki bölümde.\n• Apple StoreKit 2 – İsteğe bağlı bağışlar (IAP). Ödeme bilgileriniz Apple üzerinden işlenir; Vakit kart bilgisi görmez.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Mübarek gün ve sürüm duyuruları. Duyurular topic bazlı toplu gönderilir; kişiye özel hedefleme yapılmaz.\n• Diyanet İşleri Başkanlığı (dinhizmetleri.diyanet.gov.tr) – Cuma Hutbesi metni ve ses kaydı.\n• Vakit sunucusu (Almanya, Frankfurt) – Kullanım istatistikleri ve zikir listeniz; kimliğinizi içermeyen bir kullanıcı koduna bağlıdır. Hatim, yer imi, hedef ve okuma kayıtlarınız buraya gönderilmez.\n\nNot: Firebase Analytics KULLANILMAZ; reklam tanımlayıcısı (IDFA) toplanmaz.\n\nGoogle gizlilik politikası: policies.google.com/privacy"
      },
      {
        "t": "6. Reklamlar (Sadaka Modu)",
        "b": "Vakit reklam göstermez. Yalnızca isteğe bağlı \"Sadaka Modu\"nda, kullanıcı geliştiriciyi desteklemek için kendisi başlatırsa Google AdMob üzerinden ödüllü video reklamı görüntülenir. Bu durumda:\n• Reklam Google AdMob tarafından sunulur ve cihaz/reklam tanımlayıcı (IDFA) bilgisi kullanabilir.\n• iOS App Tracking Transparency (ATT) iznini reddederseniz IDFA paylaşılmaz; kişiselleştirilmemiş reklam gösterilir.\n• Bu özellik kullanıcı isteğine bağlıdır; başlatmadığınız sürece hiçbir reklam SDK'sı veri toplamaz.\n• Sadaka Modu özelliği Firebase Remote Config ile uzaktan kapatılabilir; özelliği hiç kullanmamayı tercih edebilirsiniz.\n\nGoogle AdMob gizlilik: support.google.com/admob/answer/6128543"
      },
      {
        "t": "7. Bağışlar (In-App Purchase)",
        "b": "Vakit ücretsizdir. Geliştiriciyi desteklemek için \"Vakit'i Yaşat\" ekranından ₺75 / ₺149 / ₺349 / ₺749 kademelerinde isteğe bağlı bağış yapabilirsiniz. Bu işlemler:\n• Apple StoreKit 2 ile işlenir; ödeme bilgileriniz (kart, IBAN, Apple Pay) yalnızca Apple'a iletilir.\n• Vakit, ödeme yöntemi veya finansal bilgilerinizi görmez ve saklamaz.\n• Bağışların geri ödemesi yalnızca Apple üzerinden talep edilebilir (reportaproblem.apple.com)."
      },
      {
        "t": "8. Veri Saklama Süresi",
        "b": "• Yerel cihaz verileri – Uygulamayı silene kadar saklanır.\n• iCloud verileri – iCloud'dan Vakit kapsamını silene veya Apple ID'nizi devre dışı bırakana kadar saklanır.\n• Sunucudaki kullanım istatistikleri – Toplu istatistiksel amaçlarla en fazla 24 ay tutulur, sonra silinir.\n• Çökme raporları (Crashlytics) – 90 gün tutulur, sonra silinir.\n• Sunucu logları – 30 gün içinde rotate edilir."
      },
      {
        "t": "9. Haklarınız (KVKK / GDPR)",
        "b": "Türkiye KVKK ve AB GDPR kapsamında şu haklara sahipsiniz:\n• Hakkınızda hangi verilerin toplandığını öğrenme hakkı\n• Veri işlenmesine itiraz etme hakkı (iOS’ta Ayarlar → Vakit, Mac’te Sistem Ayarları → Vakit üzerinden Konum/Bildirim/Hareket izinlerini iptal edebilirsiniz)\n• Verilerin silinmesini isteme hakkı: Ayarlar → Hesabımı Sil cihazınızdaki ve iCloud'daki tüm verilerinizi kaldırır. Sunucumuzdaki kullanım istatistiklerinin silinmesi için hakancelikdev@gmail.com adresine yazmanız yeterlidir; talebiniz en geç 30 gün içinde karşılanır.\n• Veri taşınabilirliği hakkı\n• KVKK Kurumu'na başvurma hakkı\n\nBaşvurularınızı hakancelikdev@gmail.com adresine iletebilirsiniz; en geç 30 gün içinde yanıt veririz."
      },
      {
        "t": "10. Çocukların Gizliliği",
        "b": "Vakit, App Store'da 4+ yaş kategorisinde sunulur ancak 13 yaş altındaki kullanıcılardan bilerek kişisel veri toplamayız. 13 yaş altı bir çocuğun verisinin toplandığını fark ederseniz lütfen hakancelikdev@gmail.com adresine yazın; ilgili veriler derhal silinir."
      },
      {
        "t": "11. Güvenlik",
        "b": "Tüm yerel veriler cihazınızda kalır ve iOS/macOS sandbox'ı ile cihaz şifrelemesi tarafından korunur. iCloud verileri Apple'ın altyapısında şifrelenir. Sunucumuza gönderilen veriler HTTPS/TLS ile iletilir ve şifrelenmiş veritabanında saklanır; kimlik bilgisi içermez. Vakit ayrıca jailbreak, debugger ve enjeksiyon tespiti yaparak hassas işlemler için ek koruma sağlar."
      },
      {
        "t": "12. Politika Değişiklikleri",
        "b": "Bu politika, uygulama özelliklerindeki değişikliklere bağlı olarak güncellenebilir. Önemli değişikliklerde bu sayfanın \"Son güncelleme\" tarihi yenilenir ve uygulama içinde bilgilendirme gösterilir. Politikayı düzenli aralıklarla kontrol etmenizi öneririz."
      },
      {
        "t": "13. İletişim",
        "b": "Gizlilikle ilgili sorularınız, başvurularınız veya geri bildirimleriniz için: hakancelikdev@gmail.com\n\nVeri Sorumlusu: Hakan Çelik (Türkiye)"
      }
    ],
    "nav": {
      "features": "Özellikler",
      "trust": "Emanet",
      "faq": "SSS",
      "download": "İndir"
    }
  },
  "en": {
    "title": "Privacy <em>Policy</em>",
    "desc": "Last updated: 20 August 2026 — Version 1.7.1\n\nVakit respects your privacy. No account is required and we do not collect personally identifying information (name, email, phone, photos, contacts). Prayer times, qibla direction and reminders are calculated entirely on your device. Your khatm progress, bookmarks, goals and favourite mosques stay on your device and sync only within your own Apple iCloud account — they are never sent to our servers. Your dhikr list is the exception: it is sent to our servers along with usage statistics so we can improve the app (see section 1). Everything sent to our servers is tied to a persistent user code containing no identifying information.",
    "sections": [
      {
        "t": "1. Data We Collect",
        "b": "Data we DO NOT collect:\n• Name, email, phone, photos, microphone, camera, contacts\n• GPS coordinates (latitude/longitude) – never sent to our servers\n• Search query texts (only the query's character length is sent)\n• Account credentials (Vakit has no account system)\n\nData stored on your device and synced within your private iCloud space:\n• Dhikr records, khatm progress, worship goals\n• Quran and hadith bookmarks, reading history\n• Surah completion counters, hadith section status\n• Your missed-prayer and missed-fast ledgers\n• Your excused-day marks\n• Favorite mosques\n• App preferences (language, calculation method, notification settings, theme)\n\nData sent to our servers — tied to a persistent user code that contains no identifying information (a pseudonym, not anonymous):\n• Regional location (country, city, district) – NOT GPS coordinates\n• Device model, iOS/macOS version, app version, watchOS version\n• App preferences (language, calculation method, theme, school of thought, calendar type, the gender you selected for the prayer guide, which prayers you want notifications for, and your Quran and hadith reading preferences — font size, translation, reciter, script). Your reading position and history are NOT included.\n• Feature usage statistics (screen views, feature usage). These show that a section was used — for example that an excused day was marked or a missed-prayer entry was made. The ledger itself (the list of your records and their counts) is not sent; what is sent is the fact that the action happened, and like every statistic it carries a timestamp.\n• Your dhikr list – dhikr name, type, category and counters; including the Arabic text, description and source you enter for dhikr you add yourself. They are collected to see which dhikr are used and how often, so the dhikr section can be improved.\n• Crash reports (via Firebase Crashlytics, contains no personal data)\n\nBecause this user code syncs through the iCloud keychain, devices on the same Apple ID count as one user and the code survives deleting and reinstalling the app. The code contains no identity data; your data is never sold or used for advertising."
      },
      {
        "t": "2. How We Use Your Data",
        "b": "• Prayer Time Calculation – Location is processed locally on your device, calculated offline using the Adhan library.\n• Qibla Direction – Location and compass heading are combined on-device.\n• Worship Reminders – Local notifications are scheduled on-device by iOS and macOS.\n• Announcements – Blessed-day and release announcements are broadcast via Firebase Cloud Messaging; there is no per-person targeting.\n• Friday Sermon – This week's sermon is downloaded from the Diyanet public page; the request carries no identifying information.\n• Nearby Mosques – Your location is sent to Apple MapKit (mosque search, distance, directions); not to Vakit servers.\n• User Data (dhikr, khatm, bookmarks) – Stored locally with SwiftData and synced within your private Apple iCloud space. Of these, only the dhikr list is additionally sent to the Vakit server (see section 1).\n• Development & Improvement – Usage statistics (no GPS coordinates, no search text) are used to monitor performance and detect bugs."
      },
      {
        "t": "3. iCloud Synchronization (CloudKit)",
        "b": "Vakit syncs your worship records (dhikr, khatm, bookmarks, goals, favorite mosques) across your devices via Apple's CloudKit. This data:\n• Lives only in the private database of your own Apple ID.\n• Is encrypted on Apple's infrastructure; we, Apple staff and third parties cannot access it.\n• Syncs automatically across iPhone, iPad, Mac and Apple Watch.\n• Stays only on your device if you disable iCloud.\n• Is removed from all your devices when you use \"Delete My Account\" or remove Vakit data from iCloud.\n\nDetails: apple.com/legal/privacy"
      },
      {
        "t": "4. Apple Watch and Mac Data",
        "b": "Vakit ships a companion app on watchOS 26+. On the Watch:\n• Location permission is granted separately on the Watch; if Vakit is installed on iPhone, location is received via WatchConnectivity, otherwise Watch GPS is used.\n• Compass sensor is processed on-device for qibla; never sent to a server.\n• We do not read Health (HealthKit), activity or heart-rate data.\n• Notifications are mirrored from iPhone via iOS notification mirroring; if the Watch runs alone, it schedules its own local notifications.\n\nOn the Mac (macOS 26+):\n• The Mac app is the same app as on iPhone; your data is still stored on the device and synced within your own private iCloud.\n• Macs have no compass hardware, so there is no live qibla compass; the bearing and distance are computed from your location and shown as text.\n• Location on Mac comes from Wi-Fi based location services rather than GPS, and is likewise never sent to our servers.\n• Notification permission and notification settings are per-device; changing them on Mac does not affect your iPhone."
      },
      {
        "t": "5. Third-Party Services",
        "b": "Vakit uses the following services for limited purposes. None are tied to your personal identity:\n\n• Apple iCloud / CloudKit – User data sync (in your private iCloud space).\n• Apple MapKit – Nearby mosques, map and directions (location is sent to Apple).\n• Firebase Crashlytics (Google) – Crash reports with no identity data (stack trace, device model, iOS/macOS version).\n• Firebase Remote Config (Google) – Feature flags and gradual rollout (does not read data from the device).\n• Google AdMob – Only to display rewarded video ads in the optional \"Sadaka Mode\". Details below.\n• Apple StoreKit 2 – Optional donations (IAP). Payment details are processed by Apple; Vakit never sees card data.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Blessed-day and release announcements. Announcements are broadcast by topic; there is no per-person targeting.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Friday sermon text and audio.\n• Vakit server (Germany, Frankfurt) – Usage statistics and your dhikr list, tied to a user code that contains no identifying information. Your khatm, bookmark, goal and reading records are never sent there.\n\nNote: Firebase Analytics is NOT used; the Advertising Identifier (IDFA) is not collected.\n\nGoogle's privacy policy: policies.google.com/privacy"
      },
      {
        "t": "6. Advertising (Sadaka Mode)",
        "b": "Vakit does not show ads. Only in the optional \"Sadaka Mode\", if the user explicitly starts it to support the developer, a rewarded video ad is shown via Google AdMob. In that case:\n• The ad is served by Google AdMob and may use the advertising identifier (IDFA) and device info.\n• If you decline the iOS App Tracking Transparency (ATT) prompt, IDFA is not shared and a non-personalized ad is shown.\n• The feature is opt-in; no ad SDK collects data unless you start it.\n• Sadaka Mode can be disabled remotely via Firebase Remote Config; you may simply choose never to use it.\n\nGoogle AdMob privacy: support.google.com/admob/answer/6128543"
      },
      {
        "t": "7. Donations (In-App Purchase)",
        "b": "Vakit is free. To support the developer you can make optional donations of ₺75 / ₺149 / ₺349 / ₺749 from the \"Vakit'i Yaşat\" screen. These transactions:\n• Are processed by Apple StoreKit 2; payment details (card, IBAN, Apple Pay) are sent only to Apple.\n• Vakit never sees or stores your payment method or financial details.\n• Refunds can only be requested through Apple (reportaproblem.apple.com)."
      },
      {
        "t": "8. Data Retention",
        "b": "• Local device data – Stored until you delete the app.\n• iCloud data – Stored until you remove Vakit's scope from iCloud or disable your Apple ID.\n• Usage statistics on the server – Kept for at most 24 months for aggregate statistical purposes, then deleted.\n• Crash reports (Crashlytics) – Kept for 90 days, then deleted.\n• Server logs – Rotated within 30 days."
      },
      {
        "t": "9. Your Rights (KVKK / GDPR)",
        "b": "Under Turkey's KVKK and the EU GDPR you have the right to:\n• Know which data is collected about you\n• Object to data processing (revoke Location, Notification or Motion permissions in Settings → Vakit on iOS, or System Settings → Vakit on Mac)\n• Request deletion of your data: Settings → Delete My Account removes everything on your device and in iCloud. To have the usage statistics on our server deleted, write to hakancelikdev@gmail.com; your request is fulfilled within 30 days at the latest.\n• Data portability\n• File a complaint with the KVKK authority\n\nSubmit requests to hakancelikdev@gmail.com; we respond within 30 days at the latest."
      },
      {
        "t": "10. Children's Privacy",
        "b": "Vakit is offered in the App Store with a 4+ age rating, but we do not knowingly collect personal data from users under 13. If you believe that a child under 13 has provided data, please write to hakancelikdev@gmail.com and we will delete the relevant data immediately."
      },
      {
        "t": "11. Security",
        "b": "All local data stays on your device, protected by the iOS/macOS sandbox and device encryption. iCloud data is encrypted on Apple's infrastructure. Data sent to our server is transmitted over HTTPS/TLS and stored in an encrypted database; it contains no identity information. Vakit also performs jailbreak, debugger and injection detection for additional protection during sensitive operations."
      },
      {
        "t": "12. Policy Changes",
        "b": "This policy may be updated as the app evolves. For material changes the \"Last updated\" date on this page is refreshed and an in-app notice is shown. We recommend reviewing this policy periodically."
      },
      {
        "t": "13. Contact",
        "b": "For privacy questions, requests or feedback: hakancelikdev@gmail.com\n\nData Controller: Hakan Çelik (Turkey)"
      }
    ],
    "nav": {
      "features": "Features",
      "trust": "Trust",
      "faq": "FAQ",
      "download": "Download"
    }
  }
};
