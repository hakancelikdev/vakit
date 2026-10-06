/**
 * The Android app's privacy policy, in every language — GENERATED, do not edit.
 * Source: VakitApp-Android (PrivacyPolicyScreen.kt + res/values-<lang>/strings.xml,
 * keys privacy_policy_*); re-import with
 *   node tools/import-android-privacy.js [path/to/VakitApp-Android]
 */
module.exports = {
  "tr": {
    "meta": {
      "title": "Vakit — Gizlilik Politikası (Android)",
      "description": "Vakit gizliliğinize saygı duyar. Hesap oluşturmanız gerekmez; ad, e-posta, telefon, fotoğraf veya rehber gibi kimlik bilgisi toplamayız."
    },
    "titleBefore": "Gizlilik Politikası ",
    "titleEm": "Android",
    "desc": "Son güncelleme: 6 Ekim 2026\n\nVakit gizliliğinize saygı duyar. Hesap oluşturmanız gerekmez; ad, e-posta, telefon, fotoğraf veya rehber gibi kimlik bilgisi toplamayız. Namaz vakitleri, kıble yönü ve hatırlatıcılar cihazınızda hesaplanır. İbadet kayıtlarınız (zikir, hatim, yer imleri, hedefler, favori camiler) cihazınızda saklanır; Android yedeklemesi açıksa kendi Google hesabınızda yedeklenir — sunucumuza hiçbir zaman gönderilmez. Uygulamayı geliştirebilmemiz için sunucumuza yalnızca kullanım istatistikleri gönderilir; bu veriler kimlik bilgisi içermeyen bir kullanıcı koduna bağlıdır. Çökme raporu veya reklam kimliği gönderilmez.",
    "sections": [
      {
        "t": "1. Topladığımız Veriler",
        "items": [
          {
            "name": "Konum Verisi",
            "lines": [
              "Amaç: Günlük namaz vakitlerini ve kıble yönünü hesaplamak, şehir adınızı göstermek ve yakındaki camileri bulmak",
              "İşlenme: Cihazınızda. Şehir adınızı göstermek için koordinatlar Android'in adres çözümleme hizmetine (Google) gönderilir. Yakındaki Camiler'i açtığınızda arama alanının koordinatları OpenStreetMap'e (Overpass API) gönderilir. Koordinatlar hiçbir zaman bir Vakit sunucusuna gönderilmez.",
              "Saklama: Namaz vakitleri internetsiz hesaplanabilsin diye son konumunuz, siz değiştirene ya da uygulamayı silene kadar cihazınızda tutulur. Konum yalnızca uygulama kullanılırken okunur."
            ]
          },
          {
            "name": "Yön Verisi",
            "lines": [
              "Amaç: Gerçek zamanlı kıble pusulası",
              "İşlenme: Yalnızca cihazda",
              "Saklama: Depolanmaz"
            ]
          },
          {
            "name": "Hareket Verisi",
            "lines": [
              "Amaç: Pusula yumuşatma ve stabilitesi (rotasyon vektörü sensörü)",
              "İşlenme: Yalnızca cihazda",
              "Saklama: Depolanmaz"
            ]
          },
          {
            "name": "Bildirim Verisi",
            "lines": [
              "Amaç: Yerel namaz bildirimleri göndermek",
              "İşlenme: AlarmManager / Android Bildirim Kanalları",
              "Saklama: Devre dışı bırakılana veya uygulama silinene kadar"
            ]
          },
          {
            "name": "Ayarlar Verisi",
            "lines": [
              "Amaç: Tercihlerinizi hatırlamak",
              "İşlenme: DataStore (genel tercihler takma kimlikle sunucuya gönderilir; kişisel içerik dahil edilmez)",
              "Saklama: Sıfırlanana veya uygulama silinene kadar. Sunucudaki tercih verileri otomatik olarak silinmez; talep üzerine silinir."
            ]
          },
          {
            "name": "Kullanım İstatistikleri",
            "lines": [
              "Amaç: Uygulama performansını izlemek, hataları tespit etmek ve deneyimi iyileştirmek",
              "İşlenme: Almanya'daki (Nürnberg) güvenli sunucumuz; kimliğinizi içermeyen kalıcı bir kullanıcı koduna bağlı",
              "Saklama: Toplu istatistik amacıyla saklanır, otomatik olarak silinmez (talep üzerine silinir). Kimlik bilgisi içermez, ancak kalıcı kullanıcı koduyla ilişkilidir (takma kimlik)."
            ]
          }
        ],
        "b": "Adınızı, e-postanızı, telefon numaranızı, fotoğraflarınızı, mikrofonunuzu, kameranızı, rehberinizi, reklam kimliğinizi veya GPS koordinatlarınızı toplamıyoruz. Vakit'in hesap sistemi yoktur. İçerikleriniz (zikir başlıkları, yer imleri, okuma ilerlemesi, hedefler) cihazınızda (DataStore / yerel veritabanı) kalır, yalnızca Android yedeklemesi açıksa yedeğe dahil edilir; bu kayıtların kendisi sunucumuza hiçbir zaman gönderilmez.\n\nSunucumuza gidenler: kimlik bilgisi içermeyen bir kullanıcı kodu, ülkeniz (GPS koordinatı değil), cihaz ve sürüm bilgisi, uygulama tercihleriniz (dil, hesaplama yöntemi, tema, mezhep, takvim türü, namaz rehberi için seçtiğiniz cinsiyet, bildirim ve Kur'an/hadis okuma tercihleri) ve özellik kullanım istatistikleri. Bu istatistikler bir bölümün kullanıldığını gösterir; kaydın içeriğini taşımaz. Uygulama içinde aradığınız kelimeler gönderilir: aramanın aradığınızı bulup bulmadığını görmek ve sonuçları iyileştirmek için en fazla 80 karakterini kaydederiz."
      },
      {
        "t": "2. Verilerinizi Nasıl Kullanıyoruz",
        "b": "• Namaz vakitleri – Adhan kütüphanesiyle cihazınızda, internetsiz hesaplanır; bunun için koordinat gönderilmez.\n• Kıble yönü – Konum ve pusula yönü cihazınızda birleştirilir.\n• Namaz bildirimleri – Cihazınızda AlarmManager ile planlanır; Android uygulaması uzaktan anlık bildirim almaz.\n• Şehir adı – Koordinatlar Android'in adres çözümleme hizmetine (Google) gönderilir; elle şehir aramasında yazdığınız metin gönderilir.\n• Yakındaki Camiler – Arama alanının koordinatları OpenStreetMap'e (Overpass API) gönderilir. Yol tarifi, caminin konumuyla Google Haritalar'ı açar.\n• Kur'an sesi – Tilavetler quran.com ve everyayah.com'dan dinlenir veya indirilir; istek yalnızca ses dosyasını belirtir.\n• Cuma hutbesi – Metin, PDF ve ses Diyanet'ten (dinhizmetleri.diyanet.gov.tr) indirilir.\n• Yazı tipleri – Bazı yazı tipleri Google Play hizmetleri (Google Fonts) üzerinden indirilir.\n• İçerikleriniz – Zikir, hatim, yer imleri ve hedefler cihazınızda saklanır.\n\nKullanım istatistikleri kimliğinize değil, kimlik bilgisi içermeyen rastgele bir kullanıcı koduna (takma ad) bağlıdır. Android yedeklemesi açıksa kod yedeğinize dahil edilir; Vakit'i aynı Google hesabında yeniden yüklemek aynı kullanıcı sayılır. Veriler yalnızca uygulamayı geliştirmek için kullanılır; asla satılmaz ve reklam için kullanılmaz. Android sürümünde çökme raporlama veya reklam SDK'sı yoktur."
      },
      {
        "t": "3. Yedekleme ve Senkronizasyon (Google Yedekleme)",
        "b": "Vakit ibadet kayıtlarınızı (zikir, hatim, yer imleri, hedefler, favori camiler) cihazınızda saklar. Android yedeklemesi açıksa Android bunları kendi Google hesabınızın özel yedekleme alanına ekler:\n• Bulut yedeği yalnızca uçtan uca şifreli yedeklemeyi destekleyen cihazlarda kullanılır; anahtar ekran kilidinizden türetilir, biz ve üçüncü taraflar okuyamaz.\n• Vakit'i aynı Google hesabıyla giriş yapılmış bir cihaza yeniden kurduğunuzda yedek geri yüklenir.\n• İndirilen sesler, uygulamayla gelen içerik veritabanı ve önbellekler yedeklenmez.\n• Yedeklemeyi Android Ayarları'ndan kapatırsanız verileriniz yalnızca cihazınızda kalır."
      },
      {
        "t": "4. Üçüncü Taraf Hizmetler",
        "b": "Vakit aşağıdaki hizmetleri sınırlı amaçlarla kullanır. Hiçbirine Vakit tarafından kimliğiniz iletilmez:\n• Google – Android yedeklemesi, şehir adı için adres çözümleme, Google Fonts, Play uygulama içi değerlendirme ve yol tarifi istediğinizde Google Haritalar.\n• OpenStreetMap (Overpass API) – Yakındaki cami araması (arama alanının koordinatları).\n• quran.com ve everyayah.com – Kur'an tilaveti sesleri.\n• Diyanet İşleri Başkanlığı – Cuma hutbesi metni ve sesi.\n• Cloudflare – Vakit sunucusuna giden trafiğin (kullanım istatistikleri) iletimi ve indirilebilir içerik paketlerinin dağıtımı.\nHer hizmet istekleri kendi gizlilik politikasına göre işler."
      },
      {
        "t": "5. Reklamlar",
        "b": "Vakit reklam göstermez ve reklam SDK'sı içermez. Reklam kimliğiniz okunmaz."
      },
      {
        "t": "6. Ödemeler",
        "b": "Vakit'te uygulama içi satın alma yoktur ve ödeme bilgisi işlenmez."
      },
      {
        "t": "7. Veri Paylaşımı",
        "b": "Verilerinizi satmıyor, pazarlama amacıyla paylaşmıyoruz. Yalnızca 'Üçüncü Taraf Hizmetler' bölümünde sayılan hizmetler, orada yazan amaçla veri alır. Kullanım istatistikleri, kimlik bilgisi içermeyen bir kullanıcı koduna bağlı olarak Almanya'daki (Nürnberg) güvenli sunucumuzda saklanır ve üçüncü taraflarla paylaşılmaz."
      },
      {
        "t": "8. Veri Saklama Süresi",
        "b": "• Cihazınızdaki veriler – Silene (Ayarlar → Hesabı Sil) ya da Vakit'i kaldırana kadar tutulur.\n• Android yedeği – Yedeklemeyi kapatana ya da yedeği silene kadar tutulur.\n• İndirilen sesler – Ayarlar → Depolama'dan silene ya da Vakit'i kaldırana kadar tutulur.\n• Sunucudaki kullanım istatistikleri – Toplu istatistik amacıyla tutulur, otomatik olarak silinmez; talep üzerine silinir."
      },
      {
        "t": "9. Güvenlik",
        "b": "Verileriniz telefonunuzda kalır; Android uygulama korumalı alanı ve cihaz şifrelemesiyle korunur. Bulut yedekleri ekran kilidinizden türetilen anahtarla uçtan uca şifrelenir. Tüm ağ bağlantıları HTTPS kullanır."
      },
      {
        "t": "10. Haklarınız ve Kontrolleriniz",
        "b": "Türkiye KVKK ve AB GDPR kapsamında haklarınız:\n• Hangi verilerin işlendiğini öğrenme hakkı\n• Veri işlenmesine itiraz etme hakkı (Android Ayarlar → Uygulamalar → Vakit → İzinler'den Konum/Bildirim izinlerini iptal edebilirsiniz)\n• Verilerin silinmesini isteme hakkı (Ayarlar → Hesabı Sil ya da uygulamayı kaldırmak; Google yedeğini Android Ayarları'ndan silebilirsiniz). Sunucumuzdaki kullanım istatistiklerinin silinmesi için hakancelikdev@gmail.com adresine yazmanız yeterli; talebiniz en geç 30 gün içinde yerine getirilir.\n• Veri taşınabilirliği hakkı\n• KVKK Kurumu'na başvurma hakkı\n\nBaşvurularınız için: hakancelikdev@gmail.com (en geç 30 gün içinde yanıt verilir)."
      },
      {
        "t": "11. Çocukların Gizliliği",
        "b": "Vakit, Google Play'de Herkes (3+) yaş kategorisinde sunulur ancak 13 yaş altındaki kullanıcılardan bilerek kişisel veri toplamayız. 13 yaş altı bir çocuğun verisinin toplandığını fark ederseniz lütfen hakancelikdev@gmail.com adresine yazın; ilgili veriler derhal silinir."
      },
      {
        "t": "12. Bu Politikadaki Değişiklikler",
        "b": "Bu politikayı uygulama özellikleri ya da yasal gereklilikler değiştiğinde güncelleyebiliriz. Bu sayfadaki 'Son güncelleme' tarihi geçerli sürümü gösterir."
      },
      {
        "t": "13. İletişim",
        "b": "Gizlilikle ilgili sorularınız, başvurularınız veya geri bildirimleriniz için: hakancelikdev@gmail.com\n\nVeri Sorumlusu: Hakan Çelik (Türkiye)"
      }
    ]
  },
  "en": {
    "meta": {
      "title": "Vakit — Privacy Policy (Android)",
      "description": "Vakit respects your privacy. You don't need an account, and we don't collect identity data such as your name, email, phone number, photos or contacts."
    },
    "titleBefore": "Privacy Policy ",
    "titleEm": "Android",
    "desc": "Last updated: 6 October 2026\n\nVakit respects your privacy. You don't need an account, and we don't collect identity data such as your name, email, phone number, photos or contacts. Prayer times, the Qibla direction and reminders are calculated on your device. Your worship records (dhikr, khatm, bookmarks, goals, favorite mosques) are stored on your device and, if Android backup is on, in your own Google account — they are never sent to our server. Only usage statistics are sent to our server so we can improve the app; that data is tied to a user code that contains no identifying information. No crash reports or advertising identifiers are sent.",
    "sections": [
      {
        "t": "1. Information We Collect",
        "items": [
          {
            "name": "Location Data",
            "lines": [
              "Purpose: Calculating daily prayer times and the Qibla direction, showing your city name and finding nearby mosques",
              "Processed: On your device. To show your city name, coordinates are sent to Android's geocoding service (Google). When you open Nearby Mosques, the coordinates of the search area are sent to OpenStreetMap (Overpass API). Coordinates are never sent to a Vakit server.",
              "Retention: Your last location is kept on your device so prayer times can be calculated offline, until you change it or delete the app. Location is read only while the app is in use."
            ]
          },
          {
            "name": "Heading Data",
            "lines": [
              "Purpose: Real-time Qibla compass",
              "Processed: On-device only",
              "Retention: Not stored"
            ]
          },
          {
            "name": "Motion Data",
            "lines": [
              "Purpose: Compass smoothing and stability (rotation vector sensor)",
              "Processed: On-device only",
              "Retention: Not stored"
            ]
          },
          {
            "name": "Notification Data",
            "lines": [
              "Purpose: To deliver local prayer notifications",
              "Processed: AlarmManager / Android Notification Channels",
              "Retention: Until disabled or the app is uninstalled"
            ]
          },
          {
            "name": "Settings Data",
            "lines": [
              "Purpose: Remember your preferences",
              "Processed: DataStore (general preferences are sent to our server under the pseudonymous user code; no personal content is included)",
              "Retention: Until reset or app deletion. Preference data on the server is not deleted automatically; it is deleted on request."
            ]
          },
          {
            "name": "Usage Statistics",
            "lines": [
              "Purpose: Monitor app performance, detect bugs, and improve the experience",
              "Processed: Our secure server in Germany (Nuremberg); tied to a persistent user code that contains no identifying information",
              "Retention: Kept for aggregate statistics and not deleted automatically (deleted on request). Contains no identity data, but is linked to a persistent user code (a pseudonym)."
            ]
          }
        ],
        "b": "We don't collect your name, email, phone number, photos, microphone, camera, contacts, advertising ID or GPS coordinates. Vakit has no account system. Your content (dhikr titles, bookmarks, reading progress, goals) stays on your device (DataStore / local database) and is included in Android backup only if backup is on; these records themselves are never sent to our server.\n\nWhat does go to our server: a user code that contains no identifying information, your country (not GPS coordinates), device and version information, your app preferences (language, calculation method, theme, madhab, calendar type, the gender you chose for the prayer guide, notification and Quran/hadith reading preferences) and feature usage statistics. Those statistics show that a section was used; they do not include the content of your records. The words you search for inside the app are sent: we record them, up to 80 characters, to see whether search finds what you need and to improve the results."
      },
      {
        "t": "2. How We Use Your Data",
        "b": "• Prayer times – calculated offline on your device with the Adhan library; no coordinates are sent for this.\n• Qibla direction – location and compass heading are combined on your device.\n• Prayer notifications – scheduled on your device with AlarmManager; the Android app receives no remote push notifications.\n• City name – coordinates are sent to Android's geocoding service (Google); a manual city search sends the text you type.\n• Nearby Mosques – the coordinates of the search area are sent to OpenStreetMap (Overpass API). Directions open Google Maps with the mosque's location.\n• Quran audio – recitations are streamed or downloaded from quran.com and everyayah.com; a request identifies only the audio file.\n• Friday sermon – the text, PDF and audio are downloaded from Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Fonts – some fonts are downloaded through Google Play services (Google Fonts).\n• Your content – dhikr, khatm, bookmarks and goals are stored on your device.\n\nUsage statistics are tied not to your identity but to a random user code that contains no identifying information (a pseudonym). If Android backup is on, the code is included in your backup, so reinstalling Vakit on the same Google account counts as the same user. The data is used solely to improve the app; it is never sold or used for advertising. The Android version contains no crash-reporting or advertising SDK."
      },
      {
        "t": "3. Backup and Sync (Google Backup)",
        "b": "Vakit stores your worship records (dhikr, khatm, bookmarks, goals, favorite mosques) on your device. If Android backup is on, Android includes them in the private backup space of your own Google account:\n• Cloud backup is used only on devices that support end-to-end encrypted backups; the key is derived from your screen lock, so neither we nor third parties can read it.\n• The backup is restored when you reinstall Vakit on a device signed in to the same Google account.\n• Downloaded audio, the bundled content database and caches are not backed up.\n• If you turn backup off in Android Settings, your data stays only on your device."
      },
      {
        "t": "4. Third-Party Services",
        "b": "Vakit uses the following services for limited purposes. None of them receives your identity from Vakit:\n• Google – Android backup, geocoding for your city name, Google Fonts, Play In-App Review, and Google Maps when you ask for directions.\n• OpenStreetMap (Overpass API) – nearby mosque search (coordinates of the search area).\n• quran.com and everyayah.com – Quran recitation audio.\n• Diyanet İşleri Başkanlığı – Friday sermon text and audio.\n• Cloudflare – carries traffic to Vakit's server (usage statistics) and delivers downloadable content packs.\nEach service processes requests under its own privacy policy."
      },
      {
        "t": "5. Advertising",
        "b": "Vakit shows no ads and contains no advertising SDK. Your advertising ID is not read."
      },
      {
        "t": "6. Payments",
        "b": "Vakit has no in-app purchases and processes no payment information."
      },
      {
        "t": "7. Data Sharing",
        "b": "We don't sell your data or share it for marketing. Only the services listed under 'Third-Party Services' receive data, and only for the purpose stated there. Usage statistics are stored on our secure server in Germany (Nuremberg), tied to a user code that contains no identifying information, and are not shared with third parties."
      },
      {
        "t": "8. Data Retention",
        "b": "• Data on your device – kept until you delete it (Settings → Delete Account) or uninstall Vakit.\n• Android backup – kept until you turn backup off or delete it.\n• Downloaded audio – kept until you delete it in Settings → Storage or uninstall Vakit.\n• Usage statistics on the server – kept for aggregate statistical purposes and not deleted automatically; deleted on request."
      },
      {
        "t": "9. Security",
        "b": "Your data stays on your phone, protected by Android's app sandbox and device encryption. Cloud backups are end-to-end encrypted with a key derived from your screen lock. All network connections use HTTPS."
      },
      {
        "t": "10. Your Rights and Controls",
        "b": "Under Turkey's KVKK and the EU GDPR your rights are:\n• The right to learn which data is processed\n• The right to object to data processing (you can revoke Location/Notification permissions via Android Settings → Apps → Vakit → Permissions)\n• The right to request deletion (Settings → Delete Account, or uninstall the app; you can delete the Google backup from Android Settings). To have the usage statistics on our server deleted, simply write to hakancelikdev@gmail.com; your request is fulfilled within 30 days at the latest.\n• The right to data portability\n• The right to apply to the KVKK Authority\n\nFor requests: hakancelikdev@gmail.com (we respond within 30 days at the latest)."
      },
      {
        "t": "11. Children's Privacy",
        "b": "Vakit is offered in the Everyone (3+) category on Google Play, but we do not knowingly collect personal data from users under 13. If you become aware that data from a child under 13 has been collected, please write to hakancelikdev@gmail.com; the relevant data will be deleted immediately."
      },
      {
        "t": "12. Changes to This Policy",
        "b": "We may update this policy when app features or legal requirements change. The 'Last updated' date on this page shows the current version."
      },
      {
        "t": "13. Contact",
        "b": "For privacy questions, requests or feedback: hakancelikdev@gmail.com\n\nData Controller: Hakan Çelik (Turkey)"
      }
    ]
  },
  "ar": {
    "meta": {
      "title": "Vakit — سياسة الخصوصية (Android)",
      "description": "يحترم تطبيق Vakit خصوصيتك. لا تحتاج إلى حساب، ولا نجمع بيانات الهوية مثل اسمك أو بريدك الإلكتروني أو رقم هاتفك أو صورك أو جهات اتصالك."
    },
    "titleBefore": "سياسة الخصوصية ",
    "titleEm": "Android",
    "desc": "آخر تحديث: ٦ أكتوبر ٢٠٢٦\n\nيحترم تطبيق Vakit خصوصيتك. لا تحتاج إلى حساب، ولا نجمع بيانات الهوية مثل اسمك أو بريدك الإلكتروني أو رقم هاتفك أو صورك أو جهات اتصالك. تُحسب أوقات الصلاة واتجاه القبلة والتذكيرات على جهازك. تُحفظ سجلات عبادتك (الأذكار والختمات والمحفوظات والأهداف والمساجد المفضّلة) على جهازك، وفي حسابك الخاص على Google إذا كان النسخ الاحتياطي في Android مفعّلاً — ولا تُرسل إلى خادمنا أبداً. لا يُرسل إلى خادمنا إلا إحصاءات الاستخدام لنتمكّن من تحسين التطبيق، وهذه البيانات مرتبطة برمز مستخدم لا يحمل أي معلومة تعريفية. ولا تُرسل أي تقارير أعطال أو معرّفات إعلانية.",
    "sections": [
      {
        "t": "١. المعلومات التي نجمعها",
        "items": [
          {
            "name": "بيانات الموقع",
            "lines": [
              "الغرض: حساب أوقات الصلاة اليومية واتجاه القبلة، وعرض اسم مدينتك، والعثور على المساجد القريبة",
              "المعالجة: على جهازك. لعرض اسم مدينتك تُرسل الإحداثيات إلى خدمة الترميز الجغرافي في Android (Google). وعندما تفتح «المساجد القريبة» تُرسل إحداثيات منطقة البحث إلى OpenStreetMap (Overpass API). ولا تُرسل الإحداثيات أبداً إلى خادم Vakit.",
              "مدة الحفظ: يُحفظ آخر موقع لك على جهازك حتى يمكن حساب أوقات الصلاة دون اتصال، إلى أن تغيّره أو تحذف التطبيق. ولا يُقرأ الموقع إلا أثناء استخدام التطبيق."
            ]
          },
          {
            "name": "بيانات الاتجاه",
            "lines": [
              "الغرض: بوصلة القبلة اللحظية",
              "المعالجة: على الجهاز فقط",
              "مدة الحفظ: لا تُحفظ"
            ]
          },
          {
            "name": "بيانات الحركة",
            "lines": [
              "الغرض: تنعيم البوصلة وثباتها (مستشعر متجه الدوران)",
              "المعالجة: على الجهاز فقط",
              "مدة الحفظ: لا تُحفظ"
            ]
          },
          {
            "name": "بيانات الإشعارات",
            "lines": [
              "الغرض: إيصال إشعارات الصلاة المحلية",
              "المعالجة: AlarmManager / قنوات إشعارات Android",
              "مدة الحفظ: حتى التعطيل أو حذف التطبيق"
            ]
          },
          {
            "name": "بيانات الإعدادات",
            "lines": [
              "الغرض: تذكّر تفضيلاتك",
              "المعالجة: في تخزين التفضيلات على الجهاز (وتُرسل التفضيلات العامة إلى خادمنا تحت رمز المستخدم المستعار؛ دون أي محتوى شخصي)",
              "مدة الحفظ: حتى إعادة التعيين أو حذف التطبيق. ولا تُحذف بيانات التفضيلات على الخادم تلقائياً، وإنما تُحذف بناءً على الطلب."
            ]
          },
          {
            "name": "إحصاءات الاستخدام",
            "lines": [
              "الغرض: مراقبة أداء التطبيق واكتشاف الأعطال وتحسين التجربة",
              "المعالجة: على خادمنا الآمن في ألمانيا (نورنبرغ)؛ مرتبطة برمز مستخدم دائم لا يحمل أي معلومة تعريفية",
              "مدة الحفظ: تُحفظ لأغراض الإحصاء المجمّع ولا تُحذف تلقائياً (تُحذف بناءً على الطلب). ولا تحوي بيانات هوية، لكنها مرتبطة برمز مستخدم دائم (اسم مستعار)."
            ]
          }
        ],
        "b": "لا نجمع اسمك ولا بريدك الإلكتروني ولا رقم هاتفك ولا صورك ولا الميكروفون ولا الكاميرا ولا جهات اتصالك ولا معرّفك الإعلاني ولا إحداثيات GPS. ليس لدى Vakit نظام حسابات. يبقى محتواك (عناوين الأذكار والمحفوظات وتقدّم القراءة والأهداف) على جهازك (DataStore / قاعدة بيانات محلية)، ولا يُضمَّن في النسخ الاحتياطي في Android إلا إذا كان النسخ الاحتياطي مفعّلاً؛ وهذه السجلات نفسها لا تُرسل إلى خادمنا أبداً.\n\nما يصل إلى خادمنا هو: رمز مستخدم لا يحمل أي معلومة تعريفية، وبلدك (لا إحداثيات GPS)، ومعلومات الجهاز والإصدار، وتفضيلات التطبيق (اللغة وطريقة الحساب والسمة والمذهب ونوع التقويم والجنس المختار لدليل الصلاة وتفضيلات الإشعارات وقراءة القرآن والحديث)، وإحصاءات استخدام الميزات. وتبيّن تلك الإحصاءات أن قسماً قد استُخدم؛ ولا تتضمن محتوى سجلاتك. أما الكلمات التي تبحث عنها داخل التطبيق فتُرسل: نسجّلها حتى ٨٠ حرفاً لنرى هل يجد البحث ما تحتاجه ولنحسّن النتائج."
      },
      {
        "t": "٢. كيف نستخدم بياناتك",
        "b": "• أوقات الصلاة – تُحسب دون اتصال على جهازك بمكتبة Adhan؛ ولا تُرسل أي إحداثيات لذلك.\n• اتجاه القبلة – يُدمج الموقع واتجاه البوصلة على جهازك.\n• إشعارات الصلاة – تُجدول على جهازك باستخدام AlarmManager؛ ولا يتلقى تطبيق Android إشعارات فورية عن بُعد.\n• اسم المدينة – تُرسل الإحداثيات إلى خدمة الترميز الجغرافي في Android (Google)؛ وعند البحث اليدوي عن مدينة يُرسل النص الذي تكتبه.\n• المساجد القريبة – تُرسل إحداثيات منطقة البحث إلى OpenStreetMap (Overpass API). ويفتح طلب الاتجاهات خرائط Google على موقع المسجد.\n• صوت القرآن – تُبث التلاوات أو تُنزَّل من quran.com وeveryayah.com؛ ولا يحدّد الطلب إلا الملف الصوتي.\n• خطبة الجمعة – يُنزَّل النص وملف PDF والصوت من Diyanet (dinhizmetleri.diyanet.gov.tr).\n• الخطوط – تُنزَّل بعض الخطوط عبر خدمات Google Play (Google Fonts).\n• محتواك – تُحفظ الأذكار والختمات والمحفوظات والأهداف على جهازك.\n\nإحصاءات الاستخدام غير مرتبطة بهويتك بل برمز مستخدم عشوائي لا يحمل أي معلومة تعريفية (اسم مستعار). وإذا كان النسخ الاحتياطي في Android مفعّلاً يُضمَّن الرمز في نسختك الاحتياطية، ولذلك تُحتسب المستخدم نفسه عند إعادة تثبيت Vakit على حساب Google نفسه. وتُستخدم البيانات لتحسين التطبيق فحسب؛ ولا تُباع أبداً ولا تُستعمل في الإعلانات. لا تحتوي نسخة Android على أي SDK لتقارير الأعطال أو للإعلانات."
      },
      {
        "t": "٣. النسخ الاحتياطي والمزامنة (Google Backup)",
        "b": "يحفظ Vakit سجلات عبادتك (الأذكار والختمات والمحفوظات والأهداف والمساجد المفضّلة) على جهازك. وإذا كان النسخ الاحتياطي في Android مفعّلاً، يضيفها Android إلى مساحة النسخ الاحتياطي الخاصة في حسابك على Google:\n• لا يُستخدم النسخ الاحتياطي السحابي إلا على الأجهزة التي تدعم النسخ الاحتياطية المشفّرة تشفيراً تاماً بين الطرفين؛ ويُشتق المفتاح من قفل شاشتك، فلا نستطيع نحن ولا أي طرف ثالث قراءتها.\n• تُستعاد النسخة الاحتياطية عندما تعيد تثبيت Vakit على جهاز مسجّل الدخول بحساب Google نفسه.\n• لا يُنسخ احتياطياً الصوت المُنزَّل ولا قاعدة بيانات المحتوى المضمّنة ولا ذاكرة التخزين المؤقت.\n• إذا أوقفت النسخ الاحتياطي من إعدادات Android، تبقى بياناتك على جهازك فقط."
      },
      {
        "t": "٤. خدمات الأطراف الثالثة",
        "b": "يستخدم Vakit الخدمات التالية لأغراض محدودة، ولا يرسل Vakit هويتك إلى أيٍّ منها:\n• Google – النسخ الاحتياطي في Android، والترميز الجغرافي لاسم مدينتك، وGoogle Fonts، والتقييم داخل التطبيق من Play (In-App Review)، وخرائط Google عندما تطلب الاتجاهات.\n• OpenStreetMap (Overpass API) – البحث عن المساجد القريبة (إحداثيات منطقة البحث).\n• quran.com وeveryayah.com – صوت تلاوة القرآن.\n• Diyanet İşleri Başkanlığı – نص خطبة الجمعة وصوتها.\n• Cloudflare – تمرير حركة البيانات إلى خادم Vakit (إحصاءات الاستخدام) وتوزيع حزم المحتوى القابلة للتنزيل.\nتعالج كل خدمة الطلبات وفق سياسة الخصوصية الخاصة بها."
      },
      {
        "t": "٥. الإعلانات",
        "b": "لا يعرض Vakit أي إعلانات ولا يحتوي على أي SDK إعلاني. ولا يُقرأ معرّفك الإعلاني."
      },
      {
        "t": "٦. المدفوعات",
        "b": "لا توجد في Vakit عمليات شراء داخل التطبيق، ولا تُعالج أي معلومات دفع."
      },
      {
        "t": "٧. مشاركة البيانات",
        "b": "لا نبيع بياناتك ولا نشاركها لأغراض تسويقية. لا تتلقى البيانات إلا الخدمات المذكورة في قسم «خدمات الأطراف الثالثة»، وللغرض المذكور هناك فقط. أما إحصاءات الاستخدام فتُخزَّن على خادمنا الآمن في ألمانيا (نورنبرغ) مرتبطة برمز مستخدم لا يحمل أي معلومة تعريفية، ولا تُشارَك مع أطراف ثالثة."
      },
      {
        "t": "٨. مدة حفظ البيانات",
        "b": "• البيانات على جهازك – تُحفظ حتى تحذفها (الإعدادات ← حذف الحساب) أو تزيل تثبيت Vakit.\n• النسخ الاحتياطي في Android – يُحفظ حتى توقف النسخ الاحتياطي أو تحذفه.\n• الصوت المُنزَّل – يُحفظ حتى تحذفه من الإعدادات ← التخزين أو تزيل تثبيت Vakit.\n• إحصاءات الاستخدام على الخادم – تُحفظ لأغراض إحصائية مجمّعة ولا تُحذف تلقائياً؛ وتُحذف بناءً على الطلب."
      },
      {
        "t": "٩. الأمان",
        "b": "تبقى بياناتك على هاتفك، محميّة بعزل التطبيقات (sandbox) في Android وتشفير الجهاز. والنسخ الاحتياطية السحابية مشفّرة تشفيراً تاماً بين الطرفين بمفتاح مشتق من قفل شاشتك. وتستخدم جميع اتصالات الشبكة HTTPS."
      },
      {
        "t": "١٠. حقوقك وخياراتك",
        "b": "بموجب قانون KVKK التركي واللائحة الأوروبية GDPR، حقوقك هي:\n• الحق في معرفة البيانات التي تُعالج\n• الحق في الاعتراض على معالجة البيانات (يمكنك سحب أذونات الموقع/الإشعارات من إعدادات Android ← التطبيقات ← Vakit ← الأذونات)\n• الحق في طلب الحذف (الإعدادات ← حذف الحساب، أو إزالة تثبيت التطبيق؛ ويمكنك حذف النسخة الاحتياطية في Google من إعدادات Android). ولحذف إحصاءات الاستخدام من خادمنا يكفي أن تكتب إلى hakancelikdev@gmail.com؛ ويُنفَّذ طلبك خلال ٣٠ يوماً كحد أقصى.\n• الحق في نقل البيانات\n• الحق في التقدّم بطلب إلى هيئة KVKK\n\nللطلبات: hakancelikdev@gmail.com (نردّ خلال ٣٠ يوماً كحد أقصى)."
      },
      {
        "t": "١١. خصوصية الأطفال",
        "b": "يُعرض Vakit على Google Play ضمن فئة «الجميع (٣+)»، لكننا لا نجمع عن قصد بيانات شخصية من المستخدمين دون سن الثالثة عشرة. إذا علمت أن بيانات طفل دون الثالثة عشرة قد جُمعت، فيُرجى الكتابة إلى hakancelikdev@gmail.com؛ وستُحذف البيانات المعنية فوراً."
      },
      {
        "t": "١٢. تعديل هذه السياسة",
        "b": "قد نحدّث هذه السياسة عندما تتغير ميزات التطبيق أو المتطلبات القانونية. ويشير تاريخ «آخر تحديث» في هذه الصفحة إلى النسخة السارية."
      },
      {
        "t": "١٣. التواصل",
        "b": "لأسئلة الخصوصية أو الطلبات أو الملاحظات: hakancelikdev@gmail.com\n\nالمسؤول عن البيانات: حقان تشليك (تركيا)"
      }
    ]
  },
  "az": {
    "meta": {
      "title": "Vakit — Məxfilik Siyasəti (Android)",
      "description": "Vakit məxfiliyinizə hörmət edir. Hesab yaratmağınız lazım deyil; adınız, e-poçtunuz, telefon nömrəniz, şəkilləriniz və ya kontaktlarınız kimi şəxsiyyət məlumatlarını toplamırıq."
    },
    "titleBefore": "Məxfilik Siyasəti ",
    "titleEm": "Android",
    "desc": "Son yenilənmə: 6 oktyabr 2026\n\nVakit məxfiliyinizə hörmət edir. Hesab yaratmağınız lazım deyil; adınız, e-poçtunuz, telefon nömrəniz, şəkilləriniz və ya kontaktlarınız kimi şəxsiyyət məlumatlarını toplamırıq. Namaz vaxtları, qiblə istiqaməti və xatırlatmalar cihazınızda hesablanır. İbadət qeydləriniz (zikr, xətm, əlfəcinlər, hədəflər, sevimli məscidlər) cihazınızda saxlanılır; Android ehtiyat nüsxəsi aktivdirsə, öz Google hesabınızda da saxlanılır — heç vaxt serverimizə göndərilmir. Tətbiqi yaxşılaşdıra bilməyimiz üçün serverimizə yalnız istifadə statistikası göndərilir; bu məlumat heç bir kimlik məlumatı daşımayan istifadəçi koduna bağlıdır. Çökmə hesabatı və ya reklam identifikatoru göndərilmir.",
    "sections": [
      {
        "t": "1. Topladığımız məlumatlar",
        "items": [
          {
            "name": "Məkan məlumatı",
            "lines": [
              "Məqsəd: Gündəlik namaz vaxtlarını və qiblə istiqamətini hesablamaq, şəhərinizin adını göstərmək və yaxındakı məscidləri tapmaq",
              "Emal: Cihazınızda. Şəhərinizin adını göstərmək üçün koordinatlar Android-in ünvan müəyyənetmə xidmətinə (Google) göndərilir. Yaxındakı məscidlər bölməsini açdığınız zaman axtarış sahəsinin koordinatları OpenStreetMap-ə (Overpass API) göndərilir. Koordinatlar heç vaxt Vakit serverinə göndərilmir.",
              "Saxlanma müddəti: Namaz vaxtları internetsiz hesablana bilsin deyə son məkanınız siz onu dəyişənə və ya tətbiqi silənə qədər cihazınızda saxlanılır. Məkan yalnız tətbiqdən istifadə edərkən oxunur."
            ]
          },
          {
            "name": "İstiqamət məlumatı",
            "lines": [
              "Məqsəd: Canlı qiblə kompası",
              "Emal: Yalnız cihazda",
              "Saxlanma müddəti: Saxlanılmır"
            ]
          },
          {
            "name": "Hərəkət məlumatı",
            "lines": [
              "Məqsəd: Kompasın hamar və sabit işləməsi (fırlanma vektoru sensoru)",
              "Emal: Yalnız cihazda",
              "Saxlanma müddəti: Saxlanılmır"
            ]
          },
          {
            "name": "Bildiriş məlumatı",
            "lines": [
              "Məqsəd: Yerli namaz bildirişlərini çatdırmaq",
              "Emal: AlarmManager / Android bildiriş kanalları",
              "Saxlanma müddəti: Söndürülənə və ya tətbiq silinənə qədər"
            ]
          },
          {
            "name": "Ayar məlumatı",
            "lines": [
              "Məqsəd: Seçimlərinizi yadda saxlamaq",
              "Emal: DataStore (ümumi seçimlər təxəllüslü istifadəçi kodu ilə serverimizə göndərilir; şəxsi məzmun daxil deyil)",
              "Saxlanma müddəti: Sıfırlanana və ya tətbiq silinənə qədər. Serverdəki seçim məlumatları avtomatik silinmir; tələb əsasında silinir."
            ]
          },
          {
            "name": "İstifadə statistikası",
            "lines": [
              "Məqsəd: Tətbiqin işini izləmək, nasazlıqları tapmaq və təcrübəni yaxşılaşdırmaq",
              "Emal: Almaniyadakı (Nürnberq) təhlükəsiz serverimiz; heç bir kimlik məlumatı olmayan davamlı istifadəçi koduna bağlı",
              "Saxlanma müddəti: Ümumi statistika üçün saxlanılır və avtomatik silinmir (tələb əsasında silinir). Kimlik məlumatı yoxdur, lakin davamlı istifadəçi koduna (təxəllüs) bağlıdır."
            ]
          }
        ],
        "b": "Adınızı, e-poçtunuzu, telefon nömrənizi, şəkillərinizi, mikrofonunuzu, kameranızı, kontaktlarınızı, reklam identifikatorunuzu və ya GPS koordinatlarınızı toplamırıq. Vakit-in hesab sistemi yoxdur. Məzmununuz (zikr başlıqları, əlfəcinlər, oxu irəliləyişi, hədəflər) cihazınızda (DataStore / yerli verilənlər bazası) qalır və yalnız Android ehtiyat nüsxəsi aktivdirsə ehtiyat nüsxəyə daxil edilir; bu qeydlərin özü heç vaxt serverimizə göndərilmir.\n\nServerimizə gedənlər: heç bir kimlik məlumatı daşımayan istifadəçi kodu, ölkəniz (GPS koordinatı deyil), cihaz və versiya məlumatı, tətbiq seçimləriniz (dil, hesablama üsulu, mövzu, məzhəb, təqvim növü, namaz bələdçisi üçün seçdiyiniz cins, bildiriş və Quran/hədis oxuma seçimləri) və funksiya istifadə statistikası. Bu statistika bir bölmənin istifadə olunduğunu göstərir; qeydlərinizin məzmununu daşımır. Tətbiqdə axtardığınız sözlər göndərilir: axtarışın lazım olanı tapıb-tapmadığını görmək və nəticələri yaxşılaşdırmaq üçün 80 simvola qədər yazırıq."
      },
      {
        "t": "2. Məlumatlarınızı necə istifadə edirik",
        "b": "• Namaz vaxtları – Adhan kitabxanası ilə cihazınızda internetsiz hesablanır; bunun üçün koordinat göndərilmir.\n• Qiblə istiqaməti – məkan və kompas istiqaməti cihazınızda birləşdirilir.\n• Namaz bildirişləri – cihazınızda AlarmManager ilə planlaşdırılır; Android tətbiqi uzaqdan push bildirişi almır.\n• Şəhər adı – koordinatlar Android-in ünvan müəyyənetmə xidmətinə (Google) göndərilir; əl ilə şəhər axtarışında yazdığınız mətn göndərilir.\n• Yaxındakı məscidlər – axtarış sahəsinin koordinatları OpenStreetMap-ə (Overpass API) göndərilir. Marşrut məscidin yeri ilə Google Maps-i açır.\n• Quran səsi – tilavətlər quran.com və everyayah.com-dan dinlənilir və ya endirilir; sorğu yalnız səs faylını göstərir.\n• Cümə xütbəsi – mətn, PDF və səs Diyanet-dən (dinhizmetleri.diyanet.gov.tr) endirilir.\n• Şriftlər – bəzi şriftlər Google Play xidmətləri (Google Fonts) vasitəsilə endirilir.\n• Məzmununuz – zikr, xətm, əlfəcinlər və hədəflər cihazınızda saxlanılır.\n\nİstifadə statistikası kimliyinizə deyil, heç bir kimlik məlumatı daşımayan təsadüfi istifadəçi koduna (təxəllüs) bağlıdır. Android ehtiyat nüsxəsi aktivdirsə, kod ehtiyat nüsxənizə daxil edilir; buna görə Vakit-i eyni Google hesabında yenidən quraşdırmaq eyni istifadəçi sayılır. Məlumat yalnız tətbiqi yaxşılaşdırmaq üçün istifadə olunur; heç vaxt satılmır və reklamda işlədilmir. Android versiyasında çökmə hesabatı və ya reklam SDK-sı yoxdur."
      },
      {
        "t": "3. Ehtiyat nüsxə və sinxronizasiya (Google Backup)",
        "b": "Vakit ibadət qeydlərinizi (zikr, xətm, əlfəcinlər, hədəflər, sevimli məscidlər) cihazınızda saxlayır. Android ehtiyat nüsxəsi aktivdirsə, Android onları öz Google hesabınızın şəxsi ehtiyat nüsxə sahəsinə əlavə edir:\n• Bulud ehtiyat nüsxəsi yalnız uçdan-uca şifrələnmiş ehtiyat nüsxələri dəstəkləyən cihazlarda istifadə olunur; açar ekran kilidinizdən törədilir, ona görə nə biz, nə də üçüncü tərəflər onu oxuya bilər.\n• Vakit-i eyni Google hesabı ilə daxil olunmuş cihaza yenidən quraşdırdığınız zaman ehtiyat nüsxə bərpa olunur.\n• Endirilmiş səslər, tətbiqlə gələn məzmun bazası və keş ehtiyat nüsxəyə daxil edilmir.\n• Ehtiyat nüsxəni Android Ayarlarından söndürsəniz, məlumatlarınız yalnız cihazınızda qalır."
      },
      {
        "t": "4. Üçüncü tərəf xidmətləri",
        "b": "Vakit aşağıdakı xidmətlərdən məhdud məqsədlərlə istifadə edir. Onların heç birinə Vakit tərəfindən şəxsiyyətiniz ötürülmür:\n• Google – Android ehtiyat nüsxəsi, şəhər adı üçün ünvan müəyyənetmə, Google Fonts, Play tətbiqdaxili rəy (In-App Review) və marşrut istədiyiniz zaman Google Maps.\n• OpenStreetMap (Overpass API) – yaxındakı məscid axtarışı (axtarış sahəsinin koordinatları).\n• quran.com və everyayah.com – Quran tilavəti səsləri.\n• Diyanet İşleri Başkanlığı – cümə xütbəsinin mətni və səsi.\n• Cloudflare – Vakit serverinə gedən trafikin (istifadə statistikası) ötürülməsi və endirilə bilən məzmun paketlərinin paylanması.\nHər xidmət sorğuları öz məxfilik siyasətinə uyğun emal edir."
      },
      {
        "t": "5. Reklam",
        "b": "Vakit reklam göstərmir və reklam SDK-sı ehtiva etmir. Reklam identifikatorunuz oxunmur."
      },
      {
        "t": "6. Ödənişlər",
        "b": "Vakit-də tətbiqdaxili alış yoxdur və heç bir ödəniş məlumatı emal edilmir."
      },
      {
        "t": "7. Məlumat paylaşımı",
        "b": "Məlumatlarınızı satmırıq və marketinq məqsədilə paylaşmırıq. Yalnız «Üçüncü tərəf xidmətləri» bölməsində sadalanan xidmətlər orada göstərilən məqsədlə məlumat alır. İstifadə statistikası Almaniyadakı (Nürnberq) təhlükəsiz serverimizdə, heç bir kimlik məlumatı daşımayan istifadəçi kodu ilə saxlanılır və üçüncü tərəflərlə paylaşılmır."
      },
      {
        "t": "8. Məlumatların saxlanma müddəti",
        "b": "• Cihazınızdakı məlumatlar – siz silənə (Ayarlar → Hesabı sil) və ya Vakit-i silənə qədər saxlanılır.\n• Android ehtiyat nüsxəsi – ehtiyat nüsxəni söndürənə və ya silənə qədər saxlanılır.\n• Endirilmiş səslər – Ayarlar → Yaddaş bölməsindən silənə və ya Vakit-i silənə qədər saxlanılır.\n• Serverdəki istifadə statistikası – ümumi statistika məqsədilə saxlanılır və avtomatik silinmir; tələb əsasında silinir."
      },
      {
        "t": "9. Təhlükəsizlik",
        "b": "Məlumatlarınız telefonunuzda qalır və Android-in tətbiq qorunma sahəsi (sandbox) və cihaz şifrələməsi ilə qorunur. Bulud ehtiyat nüsxələri ekran kilidinizdən törədilən açarla uçdan-uca şifrələnir. Bütün şəbəkə bağlantıları HTTPS istifadə edir."
      },
      {
        "t": "10. Hüquqlarınız və idarəetmə",
        "b": "Türkiyənin KVKK və Aİ-nin GDPR qaydalarına görə hüquqlarınız:\n• Hansı məlumatların emal edildiyini öyrənmək hüququ\n• Məlumatların emalına etiraz etmək hüququ (Android Ayarları → Tətbiqlər → Vakit → İcazələr bölməsindən Məkan/Bildiriş icazələrini ləğv edə bilərsiniz)\n• Silinməni tələb etmək hüququ (Ayarlar → Hesabı sil və ya tətbiqi silmək; Google ehtiyat nüsxəsini Android Ayarlarından silə bilərsiniz). Serverimizdəki istifadə statistikasının silinməsi üçün sadəcə hakancelikdev@gmail.com ünvanına yazın; müraciətiniz ən gec 30 gün ərzində yerinə yetirilir.\n• Məlumatların daşınması hüququ\n• KVKK Qurumuna müraciət etmək hüququ\n\nMüraciətlər üçün: hakancelikdev@gmail.com (ən gec 30 gün ərzində cavab veririk)."
      },
      {
        "t": "11. Uşaqların məxfiliyi",
        "b": "Vakit Google Play-də «Hamı üçün (3+)» kateqoriyasında təqdim olunur, lakin 13 yaşdan kiçik istifadəçilərdən bilərəkdən şəxsi məlumat toplamırıq. 13 yaşdan kiçik bir uşağın məlumatının toplandığını bilsəniz, lütfən hakancelikdev@gmail.com ünvanına yazın; müvafiq məlumat dərhal silinəcək."
      },
      {
        "t": "12. Bu siyasətdəki dəyişikliklər",
        "b": "Tətbiqin xüsusiyyətləri və ya qanuni tələblər dəyişdikdə bu siyasəti yeniləyə bilərik. Bu səhifədəki «Son yenilənmə» tarixi qüvvədə olan versiyanı göstərir."
      },
      {
        "t": "13. Əlaqə",
        "b": "Məxfiliklə bağlı suallar, müraciətlər və rəylər: hakancelikdev@gmail.com\n\nMəlumat nəzarətçisi: Hakan Çelik (Türkiyə)"
      }
    ]
  },
  "bn": {
    "meta": {
      "title": "Vakit — গোপনীয়তা নীতি (Android)",
      "description": "Vakit আপনার গোপনীয়তাকে সম্মান করে। আপনার কোনো অ্যাকাউন্ট লাগে না, এবং আমরা আপনার নাম, ইমেইল, ফোন নম্বর, ছবি বা কন্টাক্টের মতো পরিচয়ের তথ্য সংগ্রহ করি না।"
    },
    "titleBefore": "গোপনীয়তা নীতি ",
    "titleEm": "Android",
    "desc": "সর্বশেষ হালনাগাদ: ৬ অক্টোবর ২০২৬\n\nVakit আপনার গোপনীয়তাকে সম্মান করে। আপনার কোনো অ্যাকাউন্ট লাগে না, এবং আমরা আপনার নাম, ইমেইল, ফোন নম্বর, ছবি বা কন্টাক্টের মতো পরিচয়ের তথ্য সংগ্রহ করি না। নামাজের সময়, কিবলার দিক ও রিমাইন্ডার আপনার ডিভাইসেই হিসাব করা হয়। আপনার ইবাদতের রেকর্ড (জিকির, খতম, বুকমার্ক, লক্ষ্য, প্রিয় মসজিদ) আপনার ডিভাইসে সংরক্ষিত থাকে, আর Android ব্যাকআপ চালু থাকলে আপনার নিজের Google অ্যাকাউন্টেও — সেগুলো কখনো আমাদের সার্ভারে পাঠানো হয় না। অ্যাপটি উন্নত করার জন্য শুধু ব্যবহারের পরিসংখ্যান আমাদের সার্ভারে পাঠানো হয়; সেই তথ্য পরিচয়ের কোনো তথ্য ধারণ করে না এমন একটি ব্যবহারকারী কোডের সঙ্গে যুক্ত। কোনো ক্র্যাশ রিপোর্ট বা বিজ্ঞাপন আইডি পাঠানো হয় না।",
    "sections": [
      {
        "t": "1. আমরা যে তথ্য সংগ্রহ করি",
        "items": [
          {
            "name": "অবস্থানের তথ্য",
            "lines": [
              "উদ্দেশ্য: দৈনিক নামাজের সময় ও কিবলার দিক নির্ণয় করা, আপনার শহরের নাম দেখানো এবং কাছের মসজিদ খুঁজে পাওয়া",
              "প্রক্রিয়াকরণ: আপনার ডিভাইসে। আপনার শহরের নাম দেখাতে স্থানাঙ্ক Android-এর জিওকোডিং সেবায় (Google) পাঠানো হয়। আপনি «কাছের মসজিদ» খুললে অনুসন্ধান এলাকার স্থানাঙ্ক OpenStreetMap-এ (Overpass API) পাঠানো হয়। স্থানাঙ্ক কখনো Vakit-এর কোনো সার্ভারে পাঠানো হয় না।",
              "সংরক্ষণ: ইন্টারনেট ছাড়াই নামাজের সময় হিসাব করা যাতে যায়, সেজন্য আপনার সর্বশেষ অবস্থান আপনার ডিভাইসে রাখা হয়, যতক্ষণ না আপনি তা বদলান বা অ্যাপ মুছে ফেলেন। অ্যাপ ব্যবহারের সময়ই কেবল অবস্থান পড়া হয়।"
            ]
          },
          {
            "name": "দিকের তথ্য",
            "lines": [
              "উদ্দেশ্য: রিয়েল-টাইম কিবলা কম্পাস",
              "প্রক্রিয়াকরণ: শুধু ডিভাইসেই",
              "সংরক্ষণ: সংরক্ষণ করা হয় না"
            ]
          },
          {
            "name": "গতির তথ্য",
            "lines": [
              "উদ্দেশ্য: কম্পাসের মসৃণতা ও স্থিতিশীলতা (রোটেশন ভেক্টর সেন্সর)",
              "প্রক্রিয়াকরণ: শুধু ডিভাইসেই",
              "সংরক্ষণ: সংরক্ষণ করা হয় না"
            ]
          },
          {
            "name": "বিজ্ঞপ্তির তথ্য",
            "lines": [
              "উদ্দেশ্য: স্থানীয় নামাজের বিজ্ঞপ্তি পৌঁছে দেওয়া",
              "প্রক্রিয়াকরণ: AlarmManager / Android বিজ্ঞপ্তি চ্যানেল",
              "সংরক্ষণ: বন্ধ করা বা অ্যাপ মুছে ফেলা পর্যন্ত"
            ]
          },
          {
            "name": "সেটিংসের তথ্য",
            "lines": [
              "উদ্দেশ্য: আপনার পছন্দগুলো মনে রাখা",
              "প্রক্রিয়াকরণ: DataStore (সাধারণ পছন্দগুলো ছদ্মনামী ব্যবহারকারী কোডের অধীনে আমাদের সার্ভারে পাঠানো হয়; কোনো ব্যক্তিগত বিষয়বস্তু অন্তর্ভুক্ত নয়)",
              "সংরক্ষণ: রিসেট করা বা অ্যাপ মুছে ফেলা পর্যন্ত। সার্ভারে থাকা পছন্দের তথ্য স্বয়ংক্রিয়ভাবে মুছে ফেলা হয় না; অনুরোধ করলে মুছে ফেলা হয়।"
            ]
          },
          {
            "name": "ব্যবহারের পরিসংখ্যান",
            "lines": [
              "উদ্দেশ্য: অ্যাপের কর্মক্ষমতা পর্যবেক্ষণ, ত্রুটি শনাক্ত ও অভিজ্ঞতা উন্নত করা",
              "প্রক্রিয়াকরণ: জার্মানির (ন্যুরেমবার্গ) আমাদের নিরাপদ সার্ভার; পরিচয়ের কোনো তথ্য ধারণ করে না এমন একটি স্থায়ী ব্যবহারকারী কোডের সঙ্গে যুক্ত",
              "সংরক্ষণ: সমষ্টিগত পরিসংখ্যানের জন্য রাখা হয় এবং স্বয়ংক্রিয়ভাবে মুছে ফেলা হয় না (অনুরোধ করলে মুছে ফেলা হয়)। এতে পরিচয়ের কোনো তথ্য নেই, তবে এটি একটি স্থায়ী ব্যবহারকারী কোডের (ছদ্মনাম) সঙ্গে যুক্ত।"
            ]
          }
        ],
        "b": "আমরা আপনার নাম, ইমেইল, ফোন নম্বর, ছবি, মাইক্রোফোন, ক্যামেরা, কন্টাক্ট, বিজ্ঞাপন আইডি বা GPS স্থানাঙ্ক সংগ্রহ করি না। Vakit-এর কোনো অ্যাকাউন্ট ব্যবস্থা নেই। আপনার কনটেন্ট (জিকিরের শিরোনাম, বুকমার্ক, পড়ার অগ্রগতি, লক্ষ্য) আপনার ডিভাইসেই থাকে (DataStore / লোকাল ডেটাবেস) এবং শুধু ব্যাকআপ চালু থাকলেই Android ব্যাকআপে যুক্ত হয়; এই রেকর্ডগুলো কখনোই আমাদের সার্ভারে পাঠানো হয় না।\n\nআমাদের সার্ভারে যা যায়: পরিচয়ের কোনো তথ্য ধারণ করে না এমন একটি ব্যবহারকারী কোড, আপনার দেশ (GPS স্থানাঙ্ক নয়), ডিভাইস ও সংস্করণের তথ্য, আপনার অ্যাপ পছন্দসমূহ (ভাষা, হিসাব পদ্ধতি, থিম, মাযহাব, ক্যালেন্ডারের ধরন, নামাজের নির্দেশিকার জন্য বেছে নেওয়া লিঙ্গ, বিজ্ঞপ্তি এবং কুরআন/হাদিস পড়ার পছন্দ) ও বৈশিষ্ট্য ব্যবহারের পরিসংখ্যান। এই পরিসংখ্যান শুধু দেখায় যে কোনো একটি অংশ ব্যবহার হয়েছে; আপনার রেকর্ডের বিষয়বস্তু এতে থাকে না। অ্যাপের ভেতরে আপনি যেসব শব্দ খোঁজেন সেগুলো পাঠানো হয়: অনুসন্ধান আপনার প্রয়োজন মেটাচ্ছে কি না তা দেখতে ও ফলাফল উন্নত করতে আমরা সেগুলো সর্বোচ্চ 80 অক্ষর পর্যন্ত সংরক্ষণ করি।"
      },
      {
        "t": "2. আমরা আপনার তথ্য কীভাবে ব্যবহার করি",
        "b": "• নামাজের সময় – Adhan লাইব্রেরি দিয়ে আপনার ডিভাইসে ইন্টারনেট ছাড়াই হিসাব করা হয়; এর জন্য কোনো স্থানাঙ্ক পাঠানো হয় না।\n• কিবলার দিক – অবস্থান ও কম্পাসের দিক আপনার ডিভাইসে একত্র করা হয়।\n• নামাজের বিজ্ঞপ্তি – AlarmManager দিয়ে আপনার ডিভাইসে নির্ধারণ করা হয়; Android অ্যাপ দূর থেকে কোনো পুশ বিজ্ঞপ্তি পায় না।\n• শহরের নাম – স্থানাঙ্ক Android-এর জিওকোডিং সেবায় (Google) পাঠানো হয়; হাতে শহর খুঁজলে আপনার লেখা টেক্সট পাঠানো হয়।\n• কাছের মসজিদ – অনুসন্ধান এলাকার স্থানাঙ্ক OpenStreetMap-এ (Overpass API) পাঠানো হয়। পথনির্দেশ মসজিদের অবস্থানসহ Google Maps খোলে।\n• কুরআনের অডিও – তিলাওয়াত quran.com ও everyayah.com থেকে স্ট্রিম বা ডাউনলোড করা হয়; অনুরোধে শুধু অডিও ফাইলটি চিহ্নিত হয়।\n• জুমার খুতবা – টেক্সট, PDF ও অডিও Diyanet (dinhizmetleri.diyanet.gov.tr) থেকে ডাউনলোড করা হয়।\n• ফন্ট – কিছু ফন্ট Google Play পরিষেবার (Google Fonts) মাধ্যমে ডাউনলোড করা হয়।\n• আপনার কনটেন্ট – জিকির, খতম, বুকমার্ক ও লক্ষ্য আপনার ডিভাইসে সংরক্ষিত থাকে।\n\nব্যবহারের পরিসংখ্যান আপনার পরিচয়ের সঙ্গে নয়, পরিচয়ের কোনো তথ্য ধারণ করে না এমন একটি র‍্যান্ডম ব্যবহারকারী কোডের (ছদ্মনাম) সঙ্গে যুক্ত। Android ব্যাকআপ চালু থাকলে কোডটি আপনার ব্যাকআপে যুক্ত হয়, তাই একই Google অ্যাকাউন্টে Vakit আবার ইনস্টল করলে একই ব্যবহারকারী হিসেবে গণ্য হয়। তথ্যগুলো শুধু অ্যাপ উন্নত করতে ব্যবহৃত হয়; কখনো বিক্রি করা হয় না বা বিজ্ঞাপনে ব্যবহার করা হয় না। Android সংস্করণে কোনো ক্র্যাশ রিপোর্টিং বা বিজ্ঞাপন SDK নেই।"
      },
      {
        "t": "৩. ব্যাকআপ ও সিঙ্ক (Google Backup)",
        "b": "Vakit আপনার ইবাদতের রেকর্ড (জিকির, খতম, বুকমার্ক, লক্ষ্য, প্রিয় মসজিদ) আপনার ডিভাইসে সংরক্ষণ করে। Android ব্যাকআপ চালু থাকলে Android সেগুলো আপনার নিজের Google অ্যাকাউন্টের ব্যক্তিগত ব্যাকআপ জায়গায় যুক্ত করে:\n• ক্লাউড ব্যাকআপ শুধু সেইসব ডিভাইসে ব্যবহার হয় যেগুলো এন্ড-টু-এন্ড এনক্রিপ্টেড ব্যাকআপ সমর্থন করে; চাবিটি আপনার স্ক্রিন লক থেকে তৈরি হয়, তাই আমরা বা তৃতীয় পক্ষ কেউই তা পড়তে পারে না।\n• একই Google অ্যাকাউন্টে সাইন ইন করা ডিভাইসে Vakit আবার ইনস্টল করলে ব্যাকআপ ফিরিয়ে আনা হয়।\n• ডাউনলোড করা অডিও, অ্যাপের সঙ্গে আসা কনটেন্ট ডেটাবেস ও ক্যাশ ব্যাকআপ করা হয় না।\n• Android সেটিংসে ব্যাকআপ বন্ধ করলে আপনার তথ্য শুধু আপনার ডিভাইসেই থাকে।"
      },
      {
        "t": "4. তৃতীয় পক্ষের সেবা",
        "b": "Vakit সীমিত উদ্দেশ্যে নিচের সেবাগুলো ব্যবহার করে। এদের কেউই Vakit থেকে আপনার পরিচয় পায় না:\n• Google – Android ব্যাকআপ, শহরের নামের জন্য জিওকোডিং, Google Fonts, Play-এর অ্যাপের ভেতরে রিভিউ (In-App Review), এবং আপনি পথনির্দেশ চাইলে Google Maps।\n• OpenStreetMap (Overpass API) – কাছের মসজিদ অনুসন্ধান (অনুসন্ধান এলাকার স্থানাঙ্ক)।\n• quran.com ও everyayah.com – কুরআন তিলাওয়াতের অডিও।\n• Diyanet İşleri Başkanlığı – জুমার খুতবার টেক্সট ও অডিও।\n• Cloudflare – Vakit সার্ভারে যাওয়া ট্রাফিক (ব্যবহারের পরিসংখ্যান) পৌঁছে দেওয়া এবং ডাউনলোডযোগ্য কনটেন্ট প্যাক বিতরণ।\nপ্রতিটি সেবা নিজের গোপনীয়তা নীতি অনুযায়ী অনুরোধ প্রক্রিয়া করে।"
      },
      {
        "t": "5. বিজ্ঞাপন",
        "b": "Vakit কোনো বিজ্ঞাপন দেখায় না এবং এতে কোনো বিজ্ঞাপন SDK নেই। আপনার বিজ্ঞাপন আইডি পড়া হয় না।"
      },
      {
        "t": "6. পেমেন্ট",
        "b": "Vakit-এ কোনো ইন-অ্যাপ কেনাকাটা নেই এবং কোনো পেমেন্টের তথ্য প্রক্রিয়া করা হয় না।"
      },
      {
        "t": "7. তথ্য ভাগাভাগি",
        "b": "আমরা আপনার তথ্য বিক্রি করি না বা বিপণনের জন্য শেয়ার করি না। শুধু «তৃতীয় পক্ষের সেবা» অংশে তালিকাভুক্ত সেবাগুলো তথ্য পায়, এবং কেবল সেখানে উল্লেখিত উদ্দেশ্যে। ব্যবহারের পরিসংখ্যান জার্মানির (ন্যুরেমবার্গ) আমাদের নিরাপদ সার্ভারে, পরিচয়ের কোনো তথ্য ধারণ করে না এমন একটি ব্যবহারকারী কোডের সঙ্গে যুক্ত অবস্থায় সংরক্ষিত হয় এবং তৃতীয় পক্ষের সঙ্গে শেয়ার করা হয় না।"
      },
      {
        "t": "8. ডেটা সংরক্ষণের মেয়াদ",
        "b": "• আপনার ডিভাইসের তথ্য – আপনি মুছে না ফেলা (সেটিংস → অ্যাকাউন্ট মুছুন) বা Vakit আনইনস্টল না করা পর্যন্ত রাখা হয়।\n• Android ব্যাকআপ – আপনি ব্যাকআপ বন্ধ না করা বা মুছে না ফেলা পর্যন্ত রাখা হয়।\n• ডাউনলোড করা অডিও – সেটিংস → স্টোরেজ থেকে মুছে না ফেলা বা Vakit আনইনস্টল না করা পর্যন্ত রাখা হয়।\n• সার্ভারের ব্যবহার পরিসংখ্যান – সমষ্টিগত পরিসংখ্যানের জন্য রাখা হয় এবং স্বয়ংক্রিয়ভাবে মুছে ফেলা হয় না; অনুরোধ করলে মুছে ফেলা হয়।"
      },
      {
        "t": "9. নিরাপত্তা",
        "b": "আপনার তথ্য আপনার ফোনেই থাকে, Android-এর অ্যাপ স্যান্ডবক্স ও ডিভাইস এনক্রিপশন দিয়ে সুরক্ষিত। ক্লাউড ব্যাকআপ আপনার স্ক্রিন লক থেকে তৈরি চাবি দিয়ে এন্ড-টু-এন্ড এনক্রিপ্ট করা হয়। সব নেটওয়ার্ক সংযোগ HTTPS ব্যবহার করে।"
      },
      {
        "t": "10. আপনার অধিকার ও নিয়ন্ত্রণ",
        "b": "তুরস্কের KVKK ও ইইউ GDPR অনুযায়ী আপনার অধিকার:\n• কোন তথ্য প্রক্রিয়া করা হয় তা জানার অধিকার\n• তথ্য প্রক্রিয়াকরণে আপত্তি জানানোর অধিকার (Android সেটিংস → অ্যাপ → Vakit → অনুমতি থেকে অবস্থান/বিজ্ঞপ্তির অনুমতি বাতিল করতে পারেন)\n• মুছে ফেলার অনুরোধ করার অধিকার (সেটিংস → অ্যাকাউন্ট মুছুন, অথবা অ্যাপ আনইনস্টল করুন; Google ব্যাকআপ Android সেটিংস থেকে মুছতে পারেন)। আমাদের সার্ভারে থাকা ব্যবহারের পরিসংখ্যান মুছতে হলে শুধু hakancelikdev@gmail.com ঠিকানায় লিখুন; আপনার অনুরোধ সর্বোচ্চ 30 দিনের মধ্যে পূরণ করা হয়।\n• তথ্য বহনযোগ্যতার অধিকার\n• KVKK কর্তৃপক্ষের কাছে আবেদন করার অধিকার\n\nঅনুরোধের জন্য: hakancelikdev@gmail.com (আমরা সর্বোচ্চ 30 দিনের মধ্যে উত্তর দিই)।"
      },
      {
        "t": "11. শিশুদের গোপনীয়তা",
        "b": "Vakit Google Play-এ “সবার জন্য (3+)” বিভাগে দেওয়া হয়, তবে আমরা জেনেশুনে 13 বছরের কম বয়সী ব্যবহারকারীদের কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না। 13 বছরের কম বয়সী কোনো শিশুর তথ্য সংগ্রহ করা হয়েছে জানতে পারলে অনুগ্রহ করে hakancelikdev@gmail.com ঠিকানায় লিখুন; সংশ্লিষ্ট তথ্য সঙ্গে সঙ্গে মুছে ফেলা হবে।"
      },
      {
        "t": "12. এই নীতির পরিবর্তন",
        "b": "অ্যাপের বৈশিষ্ট্য বা আইনি প্রয়োজনীয়তা বদলালে আমরা এই নীতি হালনাগাদ করতে পারি। এই পৃষ্ঠার «সর্বশেষ হালনাগাদ» তারিখটি বর্তমান সংস্করণ নির্দেশ করে।"
      },
      {
        "t": "13. যোগাযোগ",
        "b": "গোপনীয়তা সংক্রান্ত প্রশ্ন, আবেদন বা মতামতের জন্য: hakancelikdev@gmail.com\n\nডেটা নিয়ন্ত্রক: Hakan Çelik (তুরস্ক)"
      }
    ]
  },
  "da": {
    "meta": {
      "title": "Vakit — Privatlivspolitik (Android)",
      "description": "Vakit respekterer dit privatliv. Du behøver ingen konto, og vi indsamler ikke identitetsdata som dit navn, din e-mail, dit telefonnummer, dine billeder eller dine kontakter."
    },
    "titleBefore": "Privatlivspolitik ",
    "titleEm": "Android",
    "desc": "Sidst opdateret: 6. oktober 2026\n\nVakit respekterer dit privatliv. Du behøver ingen konto, og vi indsamler ikke identitetsdata som dit navn, din e-mail, dit telefonnummer, dine billeder eller dine kontakter. Bedetider, Qibla-retning og påmindelser beregnes på din enhed. Dine registreringer af tilbedelse (dhikr, khatm, bogmærker, mål, favoritmoskeer) gemmes på din enhed og, hvis Android-backup er slået til, på din egen Google-konto — de sendes aldrig til vores server. Kun brugsstatistik sendes til vores server, så vi kan forbedre appen; de data er knyttet til en brugerkode uden identificerende oplysninger. Der sendes ingen nedbrudsrapporter eller annonce-id'er.",
    "sections": [
      {
        "t": "1. Oplysninger vi indsamler",
        "items": [
          {
            "name": "Positionsdata",
            "lines": [
              "Formål: Beregne de daglige bedetider og Qibla-retningen, vise navnet på din by og finde moskeer i nærheden",
              "Behandling: På din enhed. For at vise navnet på din by sendes koordinaterne til Androids geokodningstjeneste (Google). Når du åbner Moskeer i nærheden, sendes koordinaterne for søgeområdet til OpenStreetMap (Overpass API). Koordinater sendes aldrig til en Vakit-server.",
              "Opbevaring: Din seneste position gemmes på din enhed, så bedetiderne kan beregnes offline, indtil du ændrer den eller sletter appen. Positionen læses kun, mens appen er i brug."
            ]
          },
          {
            "name": "Retningsdata",
            "lines": [
              "Formål: Qibla-kompas i realtid",
              "Behandling: Kun på enheden",
              "Opbevaring: Gemmes ikke"
            ]
          },
          {
            "name": "Bevægelsesdata",
            "lines": [
              "Formål: Udjævning og stabilitet i kompasset (rotationsvektorsensor)",
              "Behandling: Kun på enheden",
              "Opbevaring: Gemmes ikke"
            ]
          },
          {
            "name": "Notifikationsdata",
            "lines": [
              "Formål: Levere lokale notifikationer om bøn",
              "Behandling: AlarmManager / Android-notifikationskanaler",
              "Opbevaring: Indtil du slår dem fra eller sletter appen"
            ]
          },
          {
            "name": "Indstillingsdata",
            "lines": [
              "Formål: Huske dine valg",
              "Behandling: DataStore (generelle valg sendes til vores server under den pseudonyme brugerkode; intet personligt indhold indgår)",
              "Opbevaring: Indtil du nulstiller eller sletter appen. Data om valg på serveren slettes ikke automatisk; de slettes efter anmodning."
            ]
          },
          {
            "name": "Brugsstatistik",
            "lines": [
              "Formål: Følge appens ydeevne, finde fejl og forbedre oplevelsen",
              "Behandling: Vores sikre server i Tyskland (Nürnberg); knyttet til en varig brugerkode uden identificerende oplysninger",
              "Opbevaring: Gemmes til samlet statistik og slettes ikke automatisk (slettes efter anmodning). Indeholder ingen identitetsdata, men er knyttet til en varig brugerkode (et pseudonym)."
            ]
          }
        ],
        "b": "Vi indsamler ikke dit navn, din e-mail, dit telefonnummer, dine billeder, din mikrofon, dit kamera, dine kontakter, dit annonce-id eller dine GPS-koordinater. Vakit har intet kontosystem. Dit indhold (dhikr-titler, bogmærker, læsefremskridt, mål) bliver på din enhed (DataStore / lokal database) og kommer kun med i Android-backup, hvis backup er slået til; selve disse registreringer sendes aldrig til vores server.\n\nDet, der går til vores server: en brugerkode uden identificerende oplysninger, dit land (ikke GPS-koordinater), oplysninger om enhed og version, dine valg i appen (sprog, beregningsmetode, tema, skole, kalendertype, det køn du valgte til bønneguiden, valg om notifikationer og om læsning af Koran og hadith) samt statistik over brugen af funktionerne. Statistikken viser, at en del blev brugt; den indeholder ikke indholdet af dine registreringer. De ord, du søger efter i appen, sendes: vi gemmer dem, op til 80 tegn, for at se, om søgningen finder det, du har brug for, og for at gøre resultaterne bedre."
      },
      {
        "t": "2. Sådan bruger vi dine data",
        "b": "• Bedetider – beregnes offline på din enhed med Adhan-biblioteket; der sendes ingen koordinater til det.\n• Qibla-retning – position og kompasretning kombineres på din enhed.\n• Bedenotifikationer – planlægges på din enhed med AlarmManager; Android-appen modtager ingen push-notifikationer udefra.\n• Bynavn – koordinaterne sendes til Androids geokodningstjeneste (Google); en manuel bysøgning sender den tekst, du skriver.\n• Moskeer i nærheden – koordinaterne for søgeområdet sendes til OpenStreetMap (Overpass API). Rutevejledning åbner Google Maps med moskeens placering.\n• Koranlyd – recitationer streames eller downloades fra quran.com og everyayah.com; en forespørgsel identificerer kun lydfilen.\n• Fredagsprædiken – tekst, PDF og lyd downloades fra Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Skrifttyper – nogle skrifttyper downloades via Google Play-tjenester (Google Fonts).\n• Dit indhold – dhikr, khatm, bogmærker og mål gemmes på din enhed.\n\nBrugsstatistikken er ikke knyttet til din identitet, men til en tilfældig brugerkode uden identificerende oplysninger (et pseudonym). Hvis Android-backup er slået til, kommer koden med i din backup, så hvis du geninstallerer Vakit på den samme Google-konto, tæller det som den samme bruger. Data bruges udelukkende til at forbedre appen; de sælges aldrig og bruges ikke til reklamer. Android-versionen indeholder intet SDK til nedbrudsrapportering eller annoncering."
      },
      {
        "t": "3. Sikkerhedskopiering og synkronisering (Google Backup)",
        "b": "Vakit gemmer dine registreringer af tilbedelse (dhikr, khatm, bogmærker, mål, favoritmoskeer) på din enhed. Hvis Android-backup er slået til, lægger Android dem i det private backupområde på din egen Google-konto:\n• Cloud-backup bruges kun på enheder, der understøtter end-to-end-krypterede backups; nøglen udledes af din skærmlås, så hverken vi eller tredjeparter kan læse den.\n• Backuppen gendannes, når du geninstallerer Vakit på en enhed, der er logget ind på den samme Google-konto.\n• Downloadet lyd, den medfølgende indholdsdatabase og cache sikkerhedskopieres ikke.\n• Hvis du slår backup fra i Android-indstillinger, bliver dine data kun på din enhed."
      },
      {
        "t": "4. Tredjepartstjenester",
        "b": "Vakit bruger følgende tjenester til begrænsede formål. Ingen af dem modtager din identitet fra Vakit:\n• Google – Android-backup, geokodning til dit bynavn, Google Fonts, Play In-App Review og Google Maps, når du beder om rutevejledning.\n• OpenStreetMap (Overpass API) – søgning efter moskeer i nærheden (koordinater for søgeområdet).\n• quran.com og everyayah.com – lyd af Koranrecitation.\n• Diyanet İşleri Başkanlığı – tekst og lyd til fredagsprædikenen.\n• Cloudflare – videresendelse af trafik til Vakits server (brugsstatistik) og levering af indholdspakker, der kan downloades.\nHver tjeneste behandler forespørgsler efter sin egen privatlivspolitik."
      },
      {
        "t": "5. Reklamer",
        "b": "Vakit viser ingen reklamer og indeholder intet annonce-SDK. Dit annonce-id læses ikke."
      },
      {
        "t": "6. Betalinger",
        "b": "Vakit har ingen køb i appen og behandler ingen betalingsoplysninger."
      },
      {
        "t": "7. Deling af data",
        "b": "Vi sælger ikke dine data og deler dem ikke til markedsføring. Kun de tjenester, der er nævnt under »Tredjepartstjenester«, modtager data, og kun til det formål, der står der. Brugsstatistikken ligger på vores sikre server i Tyskland (Nürnberg), knyttet til en brugerkode uden identificerende oplysninger, og deles ikke med tredjeparter."
      },
      {
        "t": "8. Opbevaring af data",
        "b": "• Data på din enhed – gemmes, indtil du sletter dem (Indstillinger → Slet kontoen) eller afinstallerer Vakit.\n• Android-backup – gemmes, indtil du slår backup fra eller sletter den.\n• Downloadet lyd – gemmes, indtil du sletter den under Indstillinger → Lagerplads eller afinstallerer Vakit.\n• Brugsstatistik på serveren – gemmes til samlet statistik og slettes ikke automatisk; slettes efter anmodning."
      },
      {
        "t": "9. Sikkerhed",
        "b": "Dine data bliver på din telefon, beskyttet af Androids app-sandkasse og enhedskryptering. Cloud-backups er end-to-end-krypterede med en nøgle, der er udledt af din skærmlås. Alle netværksforbindelser bruger HTTPS."
      },
      {
        "t": "10. Dine rettigheder og valg",
        "b": "Efter Tyrkiets KVKK og EU's GDPR har du disse rettigheder:\n• Retten til at vide, hvilke data der behandles\n• Retten til at gøre indsigelse mod databehandling (du kan tilbagekalde tilladelser til Placering/Notifikationer under Android-indstillinger → Apps → Vakit → Tilladelser)\n• Retten til at anmode om sletning (Indstillinger → Slet kontoen, eller afinstaller appen; Google-backuppen kan du slette i Android-indstillinger). Vil du have brugsstatistikken på vores server slettet, så skriv blot til hakancelikdev@gmail.com; anmodningen efterkommes inden for højst 30 dage.\n• Retten til dataportabilitet\n• Retten til at klage til KVKK-myndigheden\n\nHenvendelser: hakancelikdev@gmail.com (vi svarer senest inden for 30 dage)."
      },
      {
        "t": "11. Børns privatliv",
        "b": "Vakit udbydes på Google Play i kategorien “Alle (3+)”, men vi indsamler ikke bevidst personoplysninger fra brugere under 13 år. Hvis du bliver opmærksom på, at der er indsamlet data fra et barn under 13 år, så skriv til hakancelikdev@gmail.com; de pågældende data slettes straks."
      },
      {
        "t": "12. Ændringer af denne politik",
        "b": "Vi kan opdatere denne politik, når appens funktioner eller lovkrav ændrer sig. Datoen »Sidst opdateret« på denne side viser den gældende version."
      },
      {
        "t": "13. Kontakt",
        "b": "Spørgsmål, anmodninger eller kommentarer om privatliv: hakancelikdev@gmail.com\n\nDataansvarlig: Hakan Çelik (Tyrkiet)"
      }
    ]
  },
  "de": {
    "meta": {
      "title": "Vakit — Datenschutzerklärung (Android)",
      "description": "Vakit achtet deine Privatsphäre. Du brauchst kein Konto, und wir erheben keine Identitätsdaten wie Name, E-Mail-Adresse, Telefonnummer, Fotos oder Kontakte."
    },
    "titleBefore": "Datenschutzerklärung ",
    "titleEm": "Android",
    "desc": "Zuletzt aktualisiert: 6. Oktober 2026\n\nVakit achtet deine Privatsphäre. Du brauchst kein Konto, und wir erheben keine Identitätsdaten wie Name, E-Mail-Adresse, Telefonnummer, Fotos oder Kontakte. Gebetszeiten, Qibla-Richtung und Erinnerungen werden auf deinem Gerät berechnet. Deine Gottesdienst-Einträge (Dhikr, Chatm, Lesezeichen, Ziele, bevorzugte Moscheen) werden auf deinem Gerät gespeichert und, wenn die Android-Sicherung aktiviert ist, in deinem eigenen Google-Konto — an unseren Server gehen sie nie. Nur Nutzungsstatistiken werden an unseren Server gesendet, damit wir die App verbessern können; diese Daten sind mit einem Benutzercode ohne identifizierende Angaben verknüpft. Es werden keine Absturzberichte oder Werbe-IDs gesendet.",
    "sections": [
      {
        "t": "1. Welche Daten wir erheben",
        "items": [
          {
            "name": "Standortdaten",
            "lines": [
              "Zweck: Berechnung der täglichen Gebetszeiten und der Qibla-Richtung, Anzeige deines Ortsnamens und Suche nach Moscheen in der Nähe",
              "Verarbeitung: Auf deinem Gerät. Um deinen Ortsnamen anzuzeigen, werden die Koordinaten an den Geocoding-Dienst von Android (Google) gesendet. Wenn du „Moscheen in der Nähe“ öffnest, werden die Koordinaten des Suchbereichs an OpenStreetMap (Overpass API) gesendet. Koordinaten werden nie an einen Vakit-Server gesendet.",
              "Aufbewahrung: Dein letzter Standort bleibt auf deinem Gerät gespeichert, damit Gebetszeiten auch offline berechnet werden können – bis du ihn änderst oder die App löschst. Der Standort wird nur gelesen, während die App verwendet wird."
            ]
          },
          {
            "name": "Kompassdaten",
            "lines": [
              "Zweck: Qibla-Kompass in Echtzeit",
              "Verarbeitung: Nur auf dem Gerät",
              "Aufbewahrung: Nicht gespeichert"
            ]
          },
          {
            "name": "Bewegungsdaten",
            "lines": [
              "Zweck: Glättung und Stabilität des Kompasses (Rotationsvektorsensor)",
              "Verarbeitung: Nur auf dem Gerät",
              "Aufbewahrung: Nicht gespeichert"
            ]
          },
          {
            "name": "Mitteilungsdaten",
            "lines": [
              "Zweck: Lokale Gebetsmitteilungen zustellen",
              "Verarbeitung: AlarmManager / Android-Benachrichtigungskanäle",
              "Aufbewahrung: Bis zur Deaktivierung oder Löschung der App"
            ]
          },
          {
            "name": "Einstellungsdaten",
            "lines": [
              "Zweck: Deine Einstellungen merken",
              "Verarbeitung: DataStore (allgemeine Einstellungen werden unter dem pseudonymen Benutzercode an unseren Server gesendet; persönliche Inhalte sind nicht enthalten)",
              "Aufbewahrung: Bis zum Zurücksetzen oder Löschen der App. Einstellungsdaten auf dem Server werden nicht automatisch gelöscht; sie werden auf Anfrage gelöscht."
            ]
          },
          {
            "name": "Nutzungsstatistik",
            "lines": [
              "Zweck: Leistung beobachten, Fehler erkennen und die App verbessern",
              "Verarbeitung: Unser gesicherter Server in Deutschland (Nürnberg); verknüpft mit einem dauerhaften Benutzercode ohne identifizierende Angaben",
              "Aufbewahrung: Für aggregierte Statistiken aufbewahrt und nicht automatisch gelöscht (Löschung auf Anfrage). Enthält keine Identitätsdaten, ist aber mit einem dauerhaften Benutzercode (Pseudonym) verknüpft."
            ]
          }
        ],
        "b": "Wir erheben weder deinen Namen, deine E-Mail-Adresse, Telefonnummer oder Fotos noch Mikrofon, Kamera, Kontakte, Werbe-ID oder GPS-Koordinaten. Vakit hat kein Kontosystem. Deine Inhalte (Dhikr-Titel, Lesezeichen, Lesefortschritt, Ziele) bleiben auf deinem Gerät (DataStore / lokale Datenbank) und werden nur dann in die Android-Sicherung aufgenommen, wenn die Sicherung aktiviert ist; diese Einträge selbst gehen nie an unseren Server.\n\nAn unseren Server gehen: ein Benutzercode ohne identifizierende Angaben, dein Land (keine GPS-Koordinaten), Geräte- und Versionsangaben, deine App-Einstellungen (Sprache, Berechnungsmethode, Erscheinungsbild, Rechtsschule, Kalendertyp, das für den Gebetsleitfaden gewählte Geschlecht, Benachrichtigungs- sowie Koran- und Hadith-Leseeinstellungen) und Statistiken zur Nutzung der Funktionen. Diese Statistiken zeigen, dass ein Bereich genutzt wurde; der Inhalt deiner Einträge gehört nicht dazu. Die Wörter, nach denen du in der App suchst, werden gesendet: Wir erfassen sie bis zu 80 Zeichen, um zu sehen, ob die Suche findet, was du brauchst, und um die Ergebnisse zu verbessern."
      },
      {
        "t": "2. Wie wir deine Daten nutzen",
        "b": "• Gebetszeiten – werden mit der Adhan-Bibliothek offline auf deinem Gerät berechnet; dafür werden keine Koordinaten gesendet.\n• Qibla-Richtung – Standort und Kompassrichtung werden auf deinem Gerät kombiniert.\n• Gebetsbenachrichtigungen – werden auf deinem Gerät mit AlarmManager geplant; die Android-App empfängt keine Push-Benachrichtigungen aus der Ferne.\n• Ortsname – die Koordinaten werden an den Geocoding-Dienst von Android (Google) gesendet; bei einer manuellen Ortssuche wird der eingegebene Text gesendet.\n• Moscheen in der Nähe – die Koordinaten des Suchbereichs werden an OpenStreetMap (Overpass API) gesendet. Die Routenführung öffnet Google Maps mit dem Standort der Moschee.\n• Koran-Audio – Rezitationen werden von quran.com und everyayah.com gestreamt oder heruntergeladen; eine Anfrage bezeichnet nur die Audiodatei.\n• Freitagspredigt – Text, PDF und Audio werden von Diyanet (dinhizmetleri.diyanet.gov.tr) heruntergeladen.\n• Schriftarten – einige Schriftarten werden über die Google Play-Dienste (Google Fonts) heruntergeladen.\n• Deine Inhalte – Dhikr, Chatm, Lesezeichen und Ziele werden auf deinem Gerät gespeichert.\n\nNutzungsstatistiken sind nicht mit deiner Identität verknüpft, sondern mit einem zufälligen Benutzercode ohne identifizierende Angaben (einem Pseudonym). Wenn die Android-Sicherung aktiviert ist, ist der Code in deiner Sicherung enthalten; installierst du Vakit im selben Google-Konto neu, zählt das daher als dieselbe Person. Die Daten dienen ausschließlich der Verbesserung der App; sie werden nie verkauft oder für Werbung verwendet. Die Android-Version enthält kein Absturzberichts- oder Werbe-SDK."
      },
      {
        "t": "3. Backup und Synchronisierung (Google Backup)",
        "b": "Vakit speichert deine Gottesdienst-Einträge (Dhikr, Chatm, Lesezeichen, Ziele, bevorzugte Moscheen) auf deinem Gerät. Wenn die Android-Sicherung aktiviert ist, nimmt Android sie in den privaten Sicherungsbereich deines eigenen Google-Kontos auf:\n• Die Cloud-Sicherung wird nur auf Geräten verwendet, die Ende-zu-Ende-verschlüsselte Sicherungen unterstützen; der Schlüssel wird aus deiner Displaysperre abgeleitet, sodass weder wir noch Dritte sie lesen können.\n• Die Sicherung wird wiederhergestellt, wenn du Vakit auf einem Gerät neu installierst, das mit demselben Google-Konto angemeldet ist.\n• Heruntergeladenes Audio, die mitgelieferte Inhaltsdatenbank und Caches werden nicht gesichert.\n• Wenn du die Sicherung in den Android-Einstellungen ausschaltest, bleiben deine Daten nur auf deinem Gerät."
      },
      {
        "t": "4. Dienste Dritter",
        "b": "Vakit nutzt die folgenden Dienste für begrenzte Zwecke. Keiner von ihnen erhält von Vakit deine Identität:\n• Google – Android-Sicherung, Geocoding für deinen Ortsnamen, Google Fonts, Play In-App-Bewertung und Google Maps, wenn du eine Route anforderst.\n• OpenStreetMap (Overpass API) – Suche nach Moscheen in der Nähe (Koordinaten des Suchbereichs).\n• quran.com und everyayah.com – Audio der Koranrezitation.\n• Diyanet İşleri Başkanlığı – Text und Audio der Freitagspredigt.\n• Cloudflare – Weiterleitung der Verbindungen zum Vakit-Server (Nutzungsstatistiken) und Auslieferung der herunterladbaren Inhaltspakete.\nJeder Dienst verarbeitet Anfragen nach seiner eigenen Datenschutzerklärung."
      },
      {
        "t": "5. Werbung",
        "b": "Vakit zeigt keine Werbung und enthält kein Werbe-SDK. Deine Werbe-ID wird nicht gelesen."
      },
      {
        "t": "6. Zahlungen",
        "b": "Vakit bietet keine In-App-Käufe und verarbeitet keine Zahlungsdaten."
      },
      {
        "t": "7. Weitergabe von Daten",
        "b": "Wir verkaufen deine Daten nicht und geben sie nicht zu Marketingzwecken weiter. Nur die unter „Dienste Dritter“ aufgeführten Dienste erhalten Daten, und zwar nur für den dort genannten Zweck. Nutzungsstatistiken liegen auf unserem gesicherten Server in Deutschland (Nürnberg), verknüpft mit einem Benutzercode ohne identifizierende Angaben, und werden nicht an Dritte weitergegeben."
      },
      {
        "t": "8. Aufbewahrung von Daten",
        "b": "• Daten auf deinem Gerät – bleiben gespeichert, bis du sie löschst (Einstellungen → Konto löschen) oder Vakit deinstallierst.\n• Android-Sicherung – bleibt bestehen, bis du die Sicherung ausschaltest oder sie löschst.\n• Heruntergeladenes Audio – bleibt gespeichert, bis du es unter Einstellungen → Speicher löschst oder Vakit deinstallierst.\n• Nutzungsstatistiken auf dem Server – werden für aggregierte Statistiken aufbewahrt und nicht automatisch gelöscht; Löschung auf Anfrage."
      },
      {
        "t": "9. Sicherheit",
        "b": "Deine Daten bleiben auf deinem Telefon, geschützt durch die App-Sandbox von Android und die Geräteverschlüsselung. Cloud-Sicherungen sind Ende-zu-Ende-verschlüsselt, mit einem Schlüssel, der aus deiner Displaysperre abgeleitet wird. Alle Netzwerkverbindungen verwenden HTTPS."
      },
      {
        "t": "10. Deine Rechte und Kontrollmöglichkeiten",
        "b": "Nach dem türkischen KVKK und der EU-DSGVO (GDPR) hast du folgende Rechte:\n• Das Recht zu erfahren, welche Daten verarbeitet werden\n• Das Recht, der Datenverarbeitung zu widersprechen (Standort- und Benachrichtigungsberechtigungen kannst du unter Android-Einstellungen → Apps → Vakit → Berechtigungen widerrufen)\n• Das Recht, die Löschung zu verlangen (Einstellungen → Konto löschen oder die App deinstallieren; die Google-Sicherung kannst du in den Android-Einstellungen löschen). Für die Löschung der Nutzungsstatistiken auf unserem Server genügt eine Nachricht an hakancelikdev@gmail.com; deine Anfrage wird spätestens innerhalb von 30 Tagen erfüllt.\n• Das Recht auf Datenübertragbarkeit\n• Das Recht, dich an die KVKK-Behörde zu wenden\n\nFür Anfragen: hakancelikdev@gmail.com (wir antworten spätestens innerhalb von 30 Tagen)."
      },
      {
        "t": "11. Datenschutz für Kinder",
        "b": "Vakit wird bei Google Play in der Kategorie „Jeder (3+)“ angeboten, wir erheben jedoch wissentlich keine personenbezogenen Daten von Nutzern unter 13 Jahren. Wenn du feststellst, dass Daten eines Kindes unter 13 Jahren erhoben wurden, schreibe bitte an hakancelikdev@gmail.com; die betreffenden Daten werden umgehend gelöscht."
      },
      {
        "t": "12. Änderungen dieser Erklärung",
        "b": "Wir können diese Erklärung aktualisieren, wenn sich App-Funktionen oder gesetzliche Anforderungen ändern. Das Datum „Zuletzt aktualisiert“ auf dieser Seite zeigt die aktuelle Fassung."
      },
      {
        "t": "13. Kontakt",
        "b": "Für Fragen, Anliegen oder Rückmeldungen zum Datenschutz: hakancelikdev@gmail.com\n\nVerantwortlicher: Hakan Çelik (Türkei)"
      }
    ]
  },
  "es": {
    "meta": {
      "title": "Vakit — Política de privacidad (Android)",
      "description": "Vakit respeta tu privacidad. No necesitas una cuenta y no recogemos datos de identidad como tu nombre, correo electrónico, número de teléfono, fotos o contactos."
    },
    "titleBefore": "Política de privacidad ",
    "titleEm": "Android",
    "desc": "Última actualización: 6 de octubre de 2026\n\nVakit respeta tu privacidad. No necesitas una cuenta y no recogemos datos de identidad como tu nombre, correo electrónico, número de teléfono, fotos o contactos. Los horarios de oración, la dirección de la alquibla y los recordatorios se calculan en tu dispositivo. Tus registros de adoración (dhikr, jatm, marcadores, metas, mezquitas favoritas) se guardan en tu dispositivo y, si la copia de seguridad de Android está activada, en tu propia cuenta de Google — nunca se envían a nuestro servidor. Solo se envían estadísticas de uso a nuestro servidor para que podamos mejorar la app; esos datos están vinculados a un código de usuario sin datos identificativos. No se envían informes de fallos ni identificadores publicitarios.",
    "sections": [
      {
        "t": "1. Datos que recogemos",
        "items": [
          {
            "name": "Datos de ubicación",
            "lines": [
              "Finalidad: Calcular los horarios de oración diarios y la dirección de la alquibla, mostrar el nombre de tu ciudad y encontrar mezquitas cercanas",
              "Tratamiento: En tu dispositivo. Para mostrar el nombre de tu ciudad, las coordenadas se envían al servicio de geocodificación de Android (Google). Cuando abres Mezquitas cercanas, las coordenadas del área de búsqueda se envían a OpenStreetMap (Overpass API). Las coordenadas nunca se envían a un servidor de Vakit.",
              "Conservación: Tu última ubicación se guarda en tu dispositivo para que los horarios de oración puedan calcularse sin conexión, hasta que la cambies o elimines la app. La ubicación solo se lee mientras usas la app."
            ]
          },
          {
            "name": "Datos de rumbo",
            "lines": [
              "Finalidad: Brújula de la alquibla en tiempo real",
              "Tratamiento: Solo en el dispositivo",
              "Conservación: No se conserva"
            ]
          },
          {
            "name": "Datos de movimiento",
            "lines": [
              "Finalidad: Suavizado y estabilidad de la brújula (sensor de vector de rotación)",
              "Tratamiento: Solo en el dispositivo",
              "Conservación: No se conserva"
            ]
          },
          {
            "name": "Datos de notificaciones",
            "lines": [
              "Finalidad: Entregar notificaciones locales de oración",
              "Tratamiento: AlarmManager / canales de notificación de Android",
              "Conservación: Hasta que se desactiven o se elimine la app"
            ]
          },
          {
            "name": "Datos de ajustes",
            "lines": [
              "Finalidad: Recordar tus preferencias",
              "Tratamiento: DataStore (las preferencias generales se envían a nuestro servidor bajo el código de usuario seudónimo; no incluyen contenido personal)",
              "Conservación: Hasta restablecerlas o eliminar la app. En el servidor no se eliminan automáticamente; se eliminan previa solicitud."
            ]
          },
          {
            "name": "Estadísticas de uso",
            "lines": [
              "Finalidad: Vigilar el rendimiento, detectar fallos y mejorar la experiencia",
              "Tratamiento: Nuestro servidor seguro en Alemania (Núremberg); vinculado a un código de usuario permanente sin datos identificativos",
              "Conservación: Se conservan con fines estadísticos agregados y no se eliminan automáticamente (se eliminan previa solicitud). No contienen datos de identidad, pero están vinculadas a un código de usuario permanente (un seudónimo)."
            ]
          }
        ],
        "b": "No recogemos tu nombre, correo electrónico, número de teléfono, fotos, micrófono, cámara, contactos, ID de publicidad ni coordenadas GPS. Vakit no tiene sistema de cuentas. Tu contenido (títulos de dhikr, marcadores, progreso de lectura, metas) permanece en tu dispositivo (DataStore / base de datos local) y solo se incluye en la copia de seguridad de Android si esta está activada; estos registros en sí nunca se envían a nuestro servidor.\n\nLo que sí llega a nuestro servidor: un código de usuario sin datos identificativos, tu país (no coordenadas GPS), información del dispositivo y de la versión, tus preferencias de la app (idioma, método de cálculo, tema, escuela jurídica, tipo de calendario, el género elegido para la guía de oración, preferencias de notificación y de lectura del Corán y los hadices) y estadísticas de uso de las funciones. Esas estadísticas indican que se usó una sección; no incluyen el contenido de tus registros. Las palabras que buscas dentro de la app sí se envían: las registramos, hasta 80 caracteres, para comprobar si la búsqueda encuentra lo que necesitas y mejorar los resultados."
      },
      {
        "t": "2. Cómo usamos tus datos",
        "b": "• Horarios de oración – se calculan sin conexión en tu dispositivo con la biblioteca Adhan; para ello no se envían coordenadas.\n• Dirección de la alquibla – la ubicación y el rumbo de la brújula se combinan en tu dispositivo.\n• Notificaciones de oración – se programan en tu dispositivo con AlarmManager; la app de Android no recibe notificaciones push remotas.\n• Nombre de la ciudad – las coordenadas se envían al servicio de geocodificación de Android (Google); una búsqueda manual de ciudad envía el texto que escribes.\n• Mezquitas cercanas – las coordenadas del área de búsqueda se envían a OpenStreetMap (Overpass API). Las indicaciones abren Google Maps con la ubicación de la mezquita.\n• Audio del Corán – las recitaciones se reproducen en streaming o se descargan de quran.com y everyayah.com; una solicitud solo identifica el archivo de audio.\n• Sermón del viernes – el texto, el PDF y el audio se descargan de Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Fuentes – algunas fuentes se descargan a través de los servicios de Google Play (Google Fonts).\n• Tu contenido – dhikr, jatm, marcadores y metas se guardan en tu dispositivo.\n\nLas estadísticas de uso no están vinculadas a tu identidad, sino a un código de usuario aleatorio sin datos identificativos (un seudónimo). Si la copia de seguridad de Android está activada, el código se incluye en tu copia, por lo que reinstalar Vakit en la misma cuenta de Google cuenta como el mismo usuario. Los datos solo sirven para mejorar la app; nunca se venden ni se usan con fines publicitarios. La versión para Android no contiene ningún SDK de informes de fallos ni de publicidad."
      },
      {
        "t": "3. Copia de seguridad y sincronización (Google Backup)",
        "b": "Vakit guarda tus registros de adoración (dhikr, jatm, marcadores, metas, mezquitas favoritas) en tu dispositivo. Si la copia de seguridad de Android está activada, Android los incluye en el espacio de copia privado de tu propia cuenta de Google:\n• La copia en la nube solo se usa en dispositivos que admiten copias de seguridad cifradas de extremo a extremo; la clave se deriva de tu bloqueo de pantalla, así que ni nosotros ni terceros podemos leerla.\n• La copia se restaura cuando reinstalas Vakit en un dispositivo con la misma cuenta de Google.\n• El audio descargado, la base de datos de contenido incluida y las cachés no se copian.\n• Si desactivas la copia de seguridad en los Ajustes de Android, tus datos solo quedan en tu dispositivo."
      },
      {
        "t": "4. Servicios de terceros",
        "b": "Vakit usa los siguientes servicios con fines limitados. Ninguno de ellos recibe tu identidad por parte de Vakit:\n• Google – copia de seguridad de Android, geocodificación para el nombre de tu ciudad, Google Fonts, la reseña integrada de Play (In-App Review) y Google Maps cuando pides indicaciones.\n• OpenStreetMap (Overpass API) – búsqueda de mezquitas cercanas (coordenadas del área de búsqueda).\n• quran.com y everyayah.com – audio de recitación del Corán.\n• Diyanet İşleri Başkanlığı – texto y audio del sermón del viernes.\n• Cloudflare – transmisión del tráfico hacia el servidor de Vakit (estadísticas de uso) y distribución de los paquetes de contenido descargables.\nCada servicio procesa las solicitudes según su propia política de privacidad."
      },
      {
        "t": "5. Publicidad",
        "b": "Vakit no muestra anuncios ni contiene ningún SDK de publicidad. Tu ID de publicidad no se lee."
      },
      {
        "t": "6. Pagos",
        "b": "Vakit no tiene compras integradas y no procesa ninguna información de pago."
      },
      {
        "t": "7. Compartición de datos",
        "b": "No vendemos tus datos ni los compartimos con fines de marketing. Solo los servicios enumerados en «Servicios de terceros» reciben datos, y únicamente para el fin allí indicado. Las estadísticas de uso se guardan en nuestro servidor seguro en Alemania (Núremberg), vinculadas a un código de usuario sin datos identificativos, y no se comparten con terceros."
      },
      {
        "t": "8. Conservación de los datos",
        "b": "• Datos en tu dispositivo – se conservan hasta que los elimines (Ajustes → Eliminar la cuenta) o desinstales Vakit.\n• Copia de seguridad de Android – se conserva hasta que desactives la copia o la elimines.\n• Audio descargado – se conserva hasta que lo elimines en Ajustes → Almacenamiento o desinstales Vakit.\n• Estadísticas de uso en el servidor – se conservan con fines estadísticos agregados y no se eliminan automáticamente; se eliminan previa solicitud."
      },
      {
        "t": "9. Seguridad",
        "b": "Tus datos permanecen en tu teléfono, protegidos por el aislamiento de apps (sandbox) de Android y el cifrado del dispositivo. Las copias en la nube están cifradas de extremo a extremo con una clave derivada de tu bloqueo de pantalla. Todas las conexiones de red usan HTTPS."
      },
      {
        "t": "10. Tus derechos y controles",
        "b": "Según la ley turca KVKK y el RGPD de la UE (GDPR), tus derechos son:\n• El derecho a saber qué datos se tratan\n• El derecho a oponerte al tratamiento de datos (puedes retirar los permisos de ubicación y notificaciones en Ajustes de Android → Aplicaciones → Vakit → Permisos)\n• El derecho a solicitar la supresión (Ajustes → Eliminar la cuenta, o desinstalar la app; puedes eliminar la copia de seguridad de Google desde los Ajustes de Android). Para que se borren las estadísticas de uso de nuestro servidor, basta con escribir a hakancelikdev@gmail.com; tu solicitud se atiende en un plazo máximo de 30 días.\n• El derecho a la portabilidad de los datos\n• El derecho a presentar una solicitud ante la Autoridad KVKK\n\nPara solicitudes: hakancelikdev@gmail.com (respondemos en un plazo máximo de 30 días)."
      },
      {
        "t": "11. Privacidad de los menores",
        "b": "Vakit se ofrece en Google Play en la categoría «Todos (3+)», pero no recogemos conscientemente datos personales de usuarios menores de 13 años. Si sabes que se han recogido datos de un menor de 13 años, escribe a hakancelikdev@gmail.com; los datos correspondientes se eliminarán de inmediato."
      },
      {
        "t": "12. Cambios en esta política",
        "b": "Podemos actualizar esta política cuando cambien las funciones de la app o los requisitos legales. La fecha de «Última actualización» de esta página indica la versión vigente."
      },
      {
        "t": "13. Contacto",
        "b": "Para preguntas, solicitudes o comentarios sobre privacidad: hakancelikdev@gmail.com\n\nResponsable del tratamiento: Hakan Çelik (Turquía)"
      }
    ]
  },
  "fa": {
    "meta": {
      "title": "Vakit — سیاست حریم خصوصی (Android)",
      "description": "Vakit به حریم خصوصی تو احترام می‌گذارد. به حساب کاربری نیازی نداری و ما داده‌های هویتی مانند نام، ایمیل، شماره تلفن، عکس‌ها یا مخاطبانت را گردآوری نمی‌کنیم."
    },
    "titleBefore": "سیاست حریم خصوصی ",
    "titleEm": "Android",
    "desc": "آخرین به‌روزرسانی: 6 اکتبر 2026\n\nVakit به حریم خصوصی تو احترام می‌گذارد. به حساب کاربری نیازی نداری و ما داده‌های هویتی مانند نام، ایمیل، شماره تلفن، عکس‌ها یا مخاطبانت را گردآوری نمی‌کنیم. اوقات نماز، جهت قبله و یادآوری‌ها روی دستگاه تو محاسبه می‌شوند. سوابق عبادت تو (ذکر، ختم، نشان‌ها، هدف‌ها، مسجدهای دلخواه) روی دستگاهت ذخیره می‌شود و اگر پشتیبان‌گیری Android روشن باشد، در حساب Google خودت نیز — هرگز به سرور ما فرستاده نمی‌شود. تنها آمار استفاده به سرور ما فرستاده می‌شود تا بتوانیم برنامه را بهتر کنیم؛ آن داده به کد کاربری‌ای پیوند دارد که هیچ اطلاعات شناسایی ندارد. هیچ گزارش خرابی یا شناسه تبلیغاتی فرستاده نمی‌شود.",
    "sections": [
      {
        "t": "1. داده‌هایی که گردآوری می‌کنیم",
        "items": [
          {
            "name": "داده موقعیت",
            "lines": [
              "هدف: محاسبه اوقات نماز روزانه و جهت قبله، نمایش نام شهرت و یافتن مسجدهای نزدیک",
              "پردازش: روی دستگاه تو. برای نمایش نام شهرت، مختصات به سرویس مکان‌یابی نشانی Android (Google) فرستاده می‌شود. وقتی «مسجدهای نزدیک» را باز می‌کنی، مختصات محدوده جست‌وجو به OpenStreetMap (Overpass API) فرستاده می‌شود. مختصات هرگز به سرور Vakit فرستاده نمی‌شود.",
              "نگهداری: آخرین موقعیت تو روی دستگاهت نگه داشته می‌شود تا اوقات نماز بدون اینترنت محاسبه شود، تا وقتی آن را تغییر دهی یا برنامه را حذف کنی. موقعیت تنها هنگام استفاده از برنامه خوانده می‌شود."
            ]
          },
          {
            "name": "داده جهت",
            "lines": [
              "هدف: قطب‌نمای زنده قبله",
              "پردازش: فقط روی دستگاه",
              "نگهداری: ذخیره نمی‌شود"
            ]
          },
          {
            "name": "داده حرکت",
            "lines": [
              "هدف: نرم‌سازی و پایداری قطب‌نما (حسگر بردار چرخش)",
              "پردازش: فقط روی دستگاه",
              "نگهداری: ذخیره نمی‌شود"
            ]
          },
          {
            "name": "داده اعلان",
            "lines": [
              "هدف: رساندن اعلان‌های محلی نماز",
              "پردازش: AlarmManager / کانال‌های اعلان Android",
              "نگهداری: تا زمان خاموش کردن یا حذف برنامه"
            ]
          },
          {
            "name": "داده تنظیمات",
            "lines": [
              "هدف: به یاد سپردن ترجیح‌های تو",
              "پردازش: DataStore (ترجیح‌های کلی زیر کد کاربری مستعار به سرور ما فرستاده می‌شوند؛ هیچ محتوای شخصی در آن نیست)",
              "نگهداری: تا بازنشانی یا حذف برنامه. داده ترجیح‌ها روی سرور به‌طور خودکار حذف نمی‌شود و در صورت درخواست حذف می‌شود."
            ]
          },
          {
            "name": "آمار استفاده",
            "lines": [
              "هدف: پایش کارایی برنامه، یافتن خطاها و بهبود تجربه",
              "پردازش: سرور امن ما در آلمان (نورنبرگ)؛ پیوسته به یک کد کاربری که هیچ اطلاعات شناسایی ندارد",
              "نگهداری: برای آمار کلی نگه داشته می‌شود و به‌طور خودکار حذف نمی‌شود (در صورت درخواست حذف می‌شود). هیچ داده هویتی ندارد، اما به یک کد کاربری پایدار (نام مستعار) پیوند خورده است."
            ]
          }
        ],
        "b": "نام، ایمیل، شماره تلفن، عکس‌ها، میکروفون، دوربین، مخاطبان، شناسه تبلیغاتی یا مختصات GPS تو را گردآوری نمی‌کنیم. Vakit سامانه حساب کاربری ندارد. محتوای تو (عنوان ذکرها، نشان‌ها، پیشرفت خواندن، هدف‌ها) روی دستگاهت (DataStore / پایگاه داده محلی) می‌ماند و تنها اگر پشتیبان‌گیری Android روشن باشد در پشتیبان گنجانده می‌شود؛ خود این سوابق هرگز به سرور ما فرستاده نمی‌شوند.\n\nآنچه به سرور ما می‌رود: یک کد کاربری بدون هیچ اطلاعات شناسایی، کشورت (نه مختصات GPS)، اطلاعات دستگاه و نسخه، ترجیح‌های برنامه‌ات (زبان، روش محاسبه، پوسته، مذهب، نوع تقویم، جنسیتی که برای راهنمای نماز برگزیده‌ای، ترجیح‌های اعلان و خواندن قرآن/حدیث) و آمار استفاده از امکانات. آن آمار نشان می‌دهد که بخشی به کار رفته است؛ محتوای سوابقت در آن نیست. واژه‌هایی که درون برنامه جست‌وجو می‌کنی فرستاده می‌شوند: آن‌ها را تا 80 نویسه ثبت می‌کنیم تا ببینیم جست‌وجو آنچه را می‌خواهی می‌یابد یا نه و نتیجه‌ها را بهتر کنیم."
      },
      {
        "t": "2. داده تو را چگونه به کار می‌بریم",
        "b": "• اوقات نماز – با کتابخانه Adhan، بدون اینترنت روی دستگاهت محاسبه می‌شود؛ برای این کار هیچ مختصاتی فرستاده نمی‌شود.\n• جهت قبله – موقعیت و جهت قطب‌نما روی دستگاهت با هم ترکیب می‌شوند.\n• اعلان‌های نماز – با AlarmManager روی دستگاهت زمان‌بندی می‌شوند؛ برنامه Android هیچ اعلان push از راه دور دریافت نمی‌کند.\n• نام شهر – مختصات به سرویس مکان‌یابی نشانی Android (Google) فرستاده می‌شود؛ در جست‌وجوی دستی شهر، متنی که می‌نویسی فرستاده می‌شود.\n• مسجدهای نزدیک – مختصات محدوده جست‌وجو به OpenStreetMap (Overpass API) فرستاده می‌شود. مسیریابی، Google Maps را با موقعیت مسجد باز می‌کند.\n• صدای قرآن – تلاوت‌ها از quran.com و everyayah.com پخش یا دانلود می‌شوند؛ هر درخواست تنها فایل صوتی را مشخص می‌کند.\n• خطبه جمعه – متن، PDF و صدا از Diyanet (dinhizmetleri.diyanet.gov.tr) دانلود می‌شوند.\n• قلم‌ها – برخی قلم‌ها از راه سرویس‌های Google Play (Google Fonts) دانلود می‌شوند.\n• محتوای تو – ذکر، ختم، نشان‌ها و هدف‌ها روی دستگاهت ذخیره می‌شوند.\n\nآمار استفاده نه به هویت تو، بلکه به یک کد کاربری تصادفی بدون هیچ اطلاعات شناسایی (نام مستعار) پیوند دارد. اگر پشتیبان‌گیری Android روشن باشد، این کد در پشتیبانت گنجانده می‌شود؛ بنابراین نصب دوباره Vakit روی همان حساب Google همان کاربر به شمار می‌آید. این داده تنها برای بهتر کردن برنامه به کار می‌رود؛ هرگز فروخته نمی‌شود و در تبلیغات به کار نمی‌رود. نسخه Android هیچ SDK گزارش خرابی یا تبلیغات ندارد."
      },
      {
        "t": "3. پشتیبان‌گیری و همگام‌سازی (پشتیبان Google)",
        "b": "Vakit سوابق عبادت تو (ذکر، ختم، نشان‌ها، هدف‌ها، مسجدهای دلخواه) را روی دستگاهت ذخیره می‌کند. اگر پشتیبان‌گیری Android روشن باشد، Android آن‌ها را در فضای پشتیبان خصوصی حساب Google خودت می‌گذارد:\n• پشتیبان ابری تنها روی دستگاه‌هایی به کار می‌رود که از پشتیبان‌های رمزگذاری‌شده سرتاسری پشتیبانی می‌کنند؛ کلید از قفل صفحه تو ساخته می‌شود، پس نه ما و نه اشخاص ثالث نمی‌توانیم آن را بخوانیم.\n• وقتی Vakit را دوباره روی دستگاهی نصب کنی که با همان حساب Google وارد شده است، پشتیبان بازگردانی می‌شود.\n• صداهای دانلودشده، پایگاه داده محتوای همراه برنامه و حافظه‌های نهان پشتیبان‌گیری نمی‌شوند.\n• اگر پشتیبان‌گیری را در تنظیمات Android خاموش کنی، داده‌هایت تنها روی دستگاهت می‌ماند."
      },
      {
        "t": "4. سرویس‌های شخص ثالث",
        "b": "Vakit از سرویس‌های زیر برای هدف‌های محدود استفاده می‌کند. هیچ‌کدام از آن‌ها هویت تو را از Vakit دریافت نمی‌کند:\n• Google – پشتیبان‌گیری Android، مکان‌یابی نشانی برای نام شهرت، Google Fonts، نظردهی درون‌برنامه‌ای Play (In-App Review) و Google Maps هنگامی که مسیریابی می‌خواهی.\n• OpenStreetMap (Overpass API) – جست‌وجوی مسجدهای نزدیک (مختصات محدوده جست‌وجو).\n• quran.com و everyayah.com – صدای تلاوت قرآن.\n• Diyanet İşleri Başkanlığı – متن و صدای خطبه جمعه.\n• Cloudflare – انتقال ترافیک به سرور Vakit (آمار استفاده) و توزیع بسته‌های محتوای قابل دانلود.\nهر سرویس درخواست‌ها را طبق سیاست حریم خصوصی خودش پردازش می‌کند."
      },
      {
        "t": "5. تبلیغات",
        "b": "Vakit هیچ تبلیغی نشان نمی‌دهد و هیچ SDK تبلیغاتی ندارد. شناسه تبلیغاتی تو خوانده نمی‌شود."
      },
      {
        "t": "6. پرداخت‌ها",
        "b": "Vakit هیچ خرید درون‌برنامه‌ای ندارد و هیچ اطلاعات پرداختی را پردازش نمی‌کند."
      },
      {
        "t": "7. هم‌رسانی داده",
        "b": "ما داده‌هایت را نمی‌فروشیم و برای بازاریابی به اشتراک نمی‌گذاریم. تنها سرویس‌هایی که در بخش «سرویس‌های شخص ثالث» آمده‌اند داده دریافت می‌کنند، آن هم فقط برای هدفی که آنجا نوشته شده است. آمار استفاده روی سرور امن ما در آلمان (نورنبرگ) نگه داشته می‌شود، به کد کاربری‌ای پیوند دارد که هیچ اطلاعات شناسایی ندارد و با اشخاص ثالث به اشتراک گذاشته نمی‌شود."
      },
      {
        "t": "8. نگهداری داده",
        "b": "• داده‌های روی دستگاهت – تا وقتی آن‌ها را حذف کنی (تنظیمات ← حذف حساب) یا Vakit را حذف نصب کنی نگه داشته می‌شوند.\n• پشتیبان Android – تا وقتی پشتیبان‌گیری را خاموش کنی یا آن را حذف کنی نگه داشته می‌شود.\n• صداهای دانلودشده – تا وقتی آن‌ها را از تنظیمات ← فضا حذف کنی یا Vakit را حذف نصب کنی نگه داشته می‌شوند.\n• آمار استفاده روی سرور – برای هدف‌های آماری کلی نگه داشته می‌شود و به‌طور خودکار حذف نمی‌شود؛ در صورت درخواست حذف می‌شود."
      },
      {
        "t": "9. امنیت",
        "b": "داده‌هایت روی گوشی تو می‌ماند و با محیط ایزوله برنامه‌ها (sandbox) در Android و رمزگذاری دستگاه محافظت می‌شود. پشتیبان‌های ابری با کلیدی که از قفل صفحه تو ساخته می‌شود، به‌صورت سرتاسری رمزگذاری می‌شوند. همه اتصال‌های شبکه از HTTPS استفاده می‌کنند."
      },
      {
        "t": "10. حقوق و اختیارهای تو",
        "b": "بر پایه قانون KVKK ترکیه و GDPR اتحادیه اروپا، حقوق تو این‌هاست:\n• حق دانستن این‌که کدام داده‌ها پردازش می‌شوند\n• حق اعتراض به پردازش داده (می‌توانی اجازه‌های موقعیت/اعلان را از تنظیمات Android ← برنامه‌ها ← Vakit ← اجازه‌ها پس بگیری)\n• حق درخواست حذف (تنظیمات ← حذف حساب، یا حذف نصب برنامه؛ پشتیبان Google را می‌توانی از تنظیمات Android حذف کنی). برای حذف آمار استفاده روی سرور ما، کافی است به hakancelikdev@gmail.com بنویسی؛ درخواستت دست‌بالا ظرف 30 روز انجام می‌شود.\n• حق انتقال‌پذیری داده\n• حق درخواست از مرجع KVKK\n\nبرای درخواست‌ها: hakancelikdev@gmail.com (دست‌بالا ظرف 30 روز پاسخ می‌دهیم)."
      },
      {
        "t": "11. حریم خصوصی کودکان",
        "b": "Vakit در Google Play در رده «همه (3+)» عرضه می‌شود، اما ما آگاهانه داده شخصی از کاربران زیر 13 سال گردآوری نمی‌کنیم. اگر متوجه شدی که داده کودکی زیر 13 سال گردآوری شده است، لطفاً به hakancelikdev@gmail.com بنویس؛ داده مربوط بی‌درنگ حذف می‌شود."
      },
      {
        "t": "12. تغییر این سیاست",
        "b": "ممکن است این سیاست را هنگام تغییر ویژگی‌های برنامه یا الزامات قانونی به‌روز کنیم. تاریخ «آخرین به‌روزرسانی» در این صفحه نسخه کنونی را نشان می‌دهد."
      },
      {
        "t": "13. تماس",
        "b": "برای پرسش، درخواست یا بازخورد درباره حریم خصوصی: hakancelikdev@gmail.com\n\nمسئول داده: هاکان چلیک (ترکیه)"
      }
    ]
  },
  "ff": {
    "meta": {
      "title": "Vakit — Politik suturaa (Android)",
      "description": "Vakit ina teddina suturaa mon. Konte naamnaaka, min mooɓataa keɓe innitorɗe no innde mon, imeel, limngal telefoŋ, nate walla jokkondirɓe mon."
    },
    "titleBefore": "Politik suturaa ",
    "titleEm": "Android",
    "desc": "Kesɗitinal sakkitiingal: 6 Yarkomaa 2026\n\nVakit ina teddina suturaa mon. Konte naamnaaka, min mooɓataa keɓe innitorɗe no innde mon, imeel, limngal telefoŋ, nate walla jokkondirɓe mon. Waktuuji juulde, senngo alqibla e siftinooje ina limee e nder kaɓirgal mon. Winndanɗe dewal mon (jikru, khatma, maandorɗe, payndaale, jumaaji cuɓaaɗi) ina mooftee e kaɓirgal mon, so backup Android ina udditi kadi, e konte Google mon keeriiɗo — ɗe neldetaake abadaa to seerbeer amen. Ko limooje kuutorgol tan neldetee to seerbeer amen ngam min mbaawa ɓeydude moƴƴere jaaɓnirgal; ɗeen keɓe ina jokkondiri e kod kuutoroowo mo alaa heen keɓe keeriiɗe. Ciforɗe firtagol walla maandorɗe publisite neldetaake.",
    "sections": [
      {
        "t": "1. Keɓe ɗe min mooɓata",
        "items": [
          {
            "name": "Keɓe nokku",
            "lines": [
              "Faandaare: Limtude waktuuji juulde ñalnde kala e senngo alqibla, hollude innde wuro mon e yiytude jumaaji ɓadiiɗi",
              "Golliraama: E nder kaɓirgal mon. Ngam hollude innde wuro mon, koordone ina neldee to sarwiis geocoding Android (Google). So on uddittii Jumaaji ɓadiiɗi, koordone nokku ɗaɓɓitgol ina neldee to OpenStreetMap (Overpass API). Koordone neldetaake abadaa to seerbeer Vakit.",
              "Moftugol: Nokku mon sakkitiingo ina mooftee e kaɓirgal mon ngam waktuuji juulde limee alaa enternet, haa on mbayli ɗum walla on momta jaaɓnirgal ngal. Nokku janngetee tan tuma nde jaaɓnirgal ngal ina kuutoree."
            ]
          },
          {
            "name": "Keɓe senngo",
            "lines": [
              "Faandaare: Kompaas alqibla e sahaa mum",
              "Golliraama: E nder kaɓirgal tan",
              "Moftugol: Mooftetaake"
            ]
          },
          {
            "name": "Keɓe dillere",
            "lines": [
              "Faandaare: Newnugol e deeƴre kompaas (senseer vektor yiiltagol)",
              "Golliraama: E nder kaɓirgal tan",
              "Moftugol: Mooftetaake"
            ]
          },
          {
            "name": "Keɓe tintinal",
            "lines": [
              "Faandaare: Neldude tintine juulde ɗe kaɓirgal mon eɓɓata",
              "Golliraama: AlarmManager / Laawi tintine Android",
              "Moftugol: Haa uggee walla jaaɓnirgal ngal momtee"
            ]
          },
          {
            "name": "Keɓe teelte",
            "lines": [
              "Faandaare: Siftorde cuɓaaɗe mon",
              "Golliraama: DataStore (cuɓaaɗe kuuɓtidinɗe ina neldee to seerbeer amen e ley kod kuutoroowo suuɗiiɗo; alaa heen keɓe keeriiɗe)",
              "Moftugol: Haa ɗe firtee walla jaaɓnirgal ngal momtee. Keɓe cuɓaaɗe to seerbeer momtaaka e hoore mum; ina momtee so ɗaɓɓaama."
            ]
          },
          {
            "name": "Limooje kuutorgol",
            "lines": [
              "Faandaare: Reende gollal jaaɓnirgal, yiytude juumre, e ɓeydude moƴƴere kuutorgol",
              "Golliraama: Seerbeer amen kisɗo to Almaañ (Nürnberg); jokkondirɗo e kod kuutoroowo duumiiɗo mo alaa heen keɓe keeriiɗe",
              "Moftugol: Ina mooftee ngam limooje denndaaɗe, momtaaka e hoore mum (ina momtee so ɗaɓɓaama). Alaa heen keɓe keeriiɗe, kono ina jokkondiri e kod kuutoroowo duumiiɗo (innde suuɗiinde)."
            ]
          }
        ],
        "b": "Min mooɓataa innde mon, imeel mon, limngal telefoŋ mon, nate mon, mikoroo mon, kameraa mon, jokkondirɓe mon, maandorgal publisite mon walla koordone GPS mon. Vakit alaa sistem konte. Loowdi mon (inɗe jikru, maandorɗe, yahdu janngugol, payndaale) ina heddoo e kaɓirgal mon (DataStore / banke keɓe lokaal), naatnetee e backup Android tan so backup ina udditi; ɗeen winndanɗe tigi neldetaake abadaa to seerbeer amen.\n\nKo yahata to seerbeer amen: kod kuutoroowo mo alaa heen keɓe keeriiɗe, leydi mon (wonaa koordone GPS), keɓe kaɓirgal e versiyoŋ, cuɓaaɗe mon jaaɓnirgal (ɗemngal, sifaa limgol, tema, madhab, sifaa kalandiriye, ngenndiigu ngu cuɓɗon ngam peeje juulde, cuɓaaɗe tintinal e janngugol Alkur'aana/hadiisa), e limooje kuutorgol kuule. Ɗeen limooje ina kolla wonde sara ina huutoraama; ɗe naatnataa loowdi winndanɗe mon. Kelme ɗe ɗaɓɓoton e nder jaaɓnirgal ina neldee: min ina winnda ɗe, haa 80 alkulal, ngam yiyde so ɗaɓɓitgol ina yiyta ko njiɗɗon e ngam ɓeydude moƴƴere njeñtudi."
      },
      {
        "t": "2. No min kuutortoo keɓe mon",
        "b": "• Waktuuji juulde – ina limee alaa enternet e kaɓirgal mon e biblotek Adhan; alaa koordone neldetee ngam ɗum.\n• Senngo alqibla – nokku e senngo kompaas ina renndinee e kaɓirgal mon.\n• Tintine juulde – ina eɓɓee e kaɓirgal mon e AlarmManager; jaaɓnirgal Android heɓataa tintine push iwɗe woɗɗunde.\n• Innde wuro – koordone ina neldee to sarwiis geocoding Android (Google); ɗaɓɓitgol wuro e junngo ina nelda binndi ɗi mbinndoton.\n• Jumaaji ɓadiiɗi – koordone nokku ɗaɓɓitgol ina neldee to OpenStreetMap (Overpass API). Laawol ina uddita Google Maps e nokku jumaa oo.\n• Ɗemngal Alkur'aana – janngule ina keɗitee walla aawtee gila e quran.com e everyayah.com; ɗaɓɓitannde ina holla tan fiilde ɗemngal ndee.\n• Khutba Aljumaa – binndi, PDF e ɗemngal ina aawtee gila e Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Binndi (fonts) – binndi goɗɗi ina aawtee e sarwiisuuji Google Play (Google Fonts).\n• Loowdi mon – jikru, khatma, maandorɗe e payndaale ina mooftee e kaɓirgal mon.\n\nLimooje kuutorgol ina jokkondiri wonaa e keɓe keeriiɗe mon, kono e kod kuutoroowo sosaaɗo e ndaw-ndaw mo alaa heen keɓe keeriiɗe (innde suuɗiinde). So backup Android ina udditi, kod oo ina naatnee e backup mon; ɗum noon, so on kuutinii Vakit e konte Google gooto oo, ina limee kuutoroowo gooto oo. Keɓe ɗee ina kuutoree tan ngam ɓeydude moƴƴere jaaɓnirgal; ɗe njeeyetaake abadaa, ɗe kuutortaake e jeeyle. Versiyoŋ Android alaa SDK ciforɗe firtagol walla publisite."
      },
      {
        "t": "3. Backup e sinkirgol (Google Backup)",
        "b": "Vakit ina moofta winndanɗe dewal mon (jikru, khatma, maandorɗe, payndaale, jumaaji cuɓaaɗi) e kaɓirgal mon. So backup Android ina udditi, Android ina naatna ɗe e nokku backup suuɗiiɗo konte Google mon keeriiɗo:\n• Backup e cloud ina huutoree tan e kaɓirɗe jaɓooje backup suuɗaaɗe gila fuɗɗoode haa gasirde; coktirgal ngal ina iwa e ɓoli ekraa mon, min e woɗɓe fof mbaawaa janngude ɗum.\n• Backup ina artee so on nduttii Vakit e kaɓirgal naatngal e konte Google gootel.\n• Ɗemngal aawtaangal, banke loowdi garoowo e jaaɓnirgal ngal e cache mooftetaake e backup.\n• So on ñifii backup e Teelte Android, keɓe mon ina keddoo e kaɓirgal mon tan."
      },
      {
        "t": "4. Golle fedde tataɓe",
        "b": "Vakit ina huutoroo sarwiisuuji ɗii ngam faandaaje keeriiɗe. Hay gootel e majje heɓataa innitol mon gila e Vakit:\n• Google – backup Android, geocoding ngam innde wuro mon, Google Fonts, Play In-App Review, e Google Maps so on ɗaɓɓii laawol.\n• OpenStreetMap (Overpass API) – ɗaɓɓitgol jumaaji ɓadiiɗi (koordone nokku ɗaɓɓitgol).\n• quran.com e everyayah.com – ɗemngal janngugol Alkur'aana.\n• Diyanet İşleri Başkanlığı – binndi e ɗemngal khutba Aljumaa.\n• Cloudflare – nawgol jokkondire faade e sarworde Vakit (limooje kuutorgol) e senndugol paketaaji loowdi ɗi aawtotee.\nSarwiis kala ina golla ɗaɓɓitanɗe e politik suturaa mum."
      },
      {
        "t": "5. Publisite",
        "b": "Vakit hollataa publisite, alaa kadi SDK publisite. Maandorgal publisite mon janngetaake."
      },
      {
        "t": "6. Njoɓdi",
        "b": "Vakit alaa soodgol e nder jaaɓnirgal, gollataa hay keɓe njoɓdi."
      },
      {
        "t": "7. Feccugol keɓe",
        "b": "Min njeeyataa keɓe mon, min pecciditaa ɗe ngam jeeyle. Ko sarwiisuuji limtaaɗi e les 'Golle fedde tataɓe' tan heɓata keɓe, ngam faandaare winndaande ɗoon tan. Limooje kuutorgol ina mooftee to seerbeer amen kisɗo to Almaañ (Nürnberg), jokkondirɗe e kod kuutoroowo mo alaa heen keɓe keeriiɗe, ɗe pecciditetaake e fedde tataɓe."
      },
      {
        "t": "8. Danndugol keɓe",
        "b": "• Keɓe e kaɓirgal mon – ina mooftee haa on momta ɗe (Teelte → Momtu konte) walla on itta Vakit.\n• Backup Android – ina mooftee haa on ñifa backup walla on momta ɗum.\n• Ɗemngal aawtaangal – ina mooftee haa on momta ɗum e Teelte → Danndirde walla on itta Vakit.\n• Limooje kuutorgol e seerbeer – ina mooftee ngam limooje denndaaɗe, momtaaka e hoore mum; ina momtee so ɗaɓɓaama."
      },
      {
        "t": "9. Kisal",
        "b": "Keɓe mon ina keddoo e telefoŋ mon, ina kisniree sandboks jaaɓnirɗe Android e sirrugol kaɓirgal. Backupuuji cloud ina sirree gila fuɗɗoode haa gasirde e coktirgal iwngal e ɓoli ekraa mon. Jokkondire enternet fof ina huutoroo HTTPS."
      },
      {
        "t": "10. Hakkeeji mon e kontorol mon",
        "b": "E ley KVKK Turkiya e GDPR Orop, hakkeeji mon ko:\n• Hakke anndude keɓe ɗe kuutoree\n• Hakke salaade gollirgol keɓe (aɗon mbaawi ittude yamirooje Nokku/Tintinal e Teelte Android → Jaaɓnirɗe → Vakit → Yamirooje)\n• Hakke naamnaade momtugol (Teelte → Momtu konte, walla ittu jaaɓnirgal ngal; aɗon mbaawi momtude backup Google e Teelte Android). Ngam momtude limooje kuutorgol gonɗe to seerbeer amen, winndanee tan hakancelikdev@gmail.com; naamndal mon ina timma haa ɓuri heewde balɗe 30.\n• Hakke yiiltude keɓe mon\n• Hakke wullitaade to Kuɓeewal KVKK\n\nNgam naamndeeji: hakancelikdev@gmail.com (min njaabotoo haa ɓuri heewde balɗe 30)."
      },
      {
        "t": "11. Suturo sukaaɓe",
        "b": "Vakit hollirtee e Google Play e keerol “Kala neɗɗo (3+)”, kono min mooɓataa keɓe keeriiɗe e ganndal amen gila e kuutorɓe ɓe duuɓi mum en famɗi 13. So on anndii wonde keɓe cukalel ngel duuɓi mum famɗi 13 mooɓaama, tiiɗno winndee e hakancelikdev@gmail.com; keɓe ɗee momtete jooni jooni."
      },
      {
        "t": "12. Baylatte e ndee politik",
        "b": "Min mbaawi hesɗitinde ndee politik so golle jaaɓnirgal walla naamndal sarɗi mbaylike. Ñalnde 'Kesɗitinal sakkitiingal' e ndee hello ina holla versiyoŋ jooni oo."
      },
      {
        "t": "13. Yeewtidal",
        "b": "Ngam naamne suturo, ɗaɓɓitorɗe walla miijooji: hakancelikdev@gmail.com\n\nHalfinaaɗo keɓe: Hakan Çelik (Turkiya)"
      }
    ]
  },
  "fr": {
    "meta": {
      "title": "Vakit — Politique de confidentialité (Android)",
      "description": "Vakit respecte ta vie privée. Aucun compte n'est nécessaire, et nous ne collectons aucune donnée d'identité comme ton nom, ton e-mail, ton numéro de téléphone, tes photos ou tes contacts."
    },
    "titleBefore": "Politique de confidentialité ",
    "titleEm": "Android",
    "desc": "Dernière mise à jour : 6 octobre 2026\n\nVakit respecte ta vie privée. Aucun compte n'est nécessaire, et nous ne collectons aucune donnée d'identité comme ton nom, ton e-mail, ton numéro de téléphone, tes photos ou tes contacts. Les horaires de prière, la direction de la Qibla et les rappels sont calculés sur ton appareil. Tes enregistrements d'adoration (dhikr, khatm, signets, objectifs, mosquées favorites) sont stockés sur ton appareil et, si la sauvegarde Android est activée, dans ton propre compte Google — ils ne sont jamais envoyés à notre serveur. Seules des statistiques d'utilisation sont envoyées à notre serveur, afin que nous puissions améliorer l'app ; ces données sont rattachées à un code utilisateur sans information identifiante. Aucun rapport de plantage ni aucun identifiant publicitaire n'est envoyé.",
    "sections": [
      {
        "t": "1. Données que nous collectons",
        "items": [
          {
            "name": "Données de localisation",
            "lines": [
              "Finalité : Calculer les horaires de prière quotidiens et la direction de la Qibla, afficher le nom de ta ville et trouver les mosquées à proximité",
              "Traitement : Sur ton appareil. Pour afficher le nom de ta ville, les coordonnées sont envoyées au service de géocodage d'Android (Google). Quand tu ouvres « Mosquées à proximité », les coordonnées de la zone de recherche sont envoyées à OpenStreetMap (Overpass API). Les coordonnées ne sont jamais envoyées à un serveur Vakit.",
              "Conservation : Ta dernière position est conservée sur ton appareil afin que les horaires de prière puissent être calculés hors ligne, jusqu'à ce que tu la modifies ou que tu supprimes l'app. La position n'est lue que pendant l'utilisation de l'app."
            ]
          },
          {
            "name": "Données de cap",
            "lines": [
              "Finalité : Boussole Qibla en temps réel",
              "Traitement : Sur l'appareil uniquement",
              "Conservation : Non conservé"
            ]
          },
          {
            "name": "Données de mouvement",
            "lines": [
              "Finalité : Lissage et stabilité de la boussole (capteur de vecteur de rotation)",
              "Traitement : Sur l'appareil uniquement",
              "Conservation : Non conservé"
            ]
          },
          {
            "name": "Données de notification",
            "lines": [
              "Finalité : Envoyer les notifications locales de prière",
              "Traitement : AlarmManager / canaux de notification Android",
              "Conservation : Jusqu'à désactivation ou suppression de l'app"
            ]
          },
          {
            "name": "Données de réglages",
            "lines": [
              "Finalité : Mémoriser tes préférences",
              "Traitement : DataStore (les préférences générales sont envoyées à notre serveur sous le code utilisateur pseudonyme ; aucun contenu personnel n'est inclus)",
              "Conservation : Jusqu'à réinitialisation ou suppression de l'app. Les préférences sur le serveur ne sont pas supprimées automatiquement ; elles sont supprimées sur demande."
            ]
          },
          {
            "name": "Statistiques d'utilisation",
            "lines": [
              "Finalité : Suivre les performances, détecter les anomalies et améliorer l'expérience",
              "Traitement : Notre serveur sécurisé en Allemagne (Nuremberg) ; rattaché à un code utilisateur durable ne contenant aucune information identifiante",
              "Conservation : Conservées à des fins statistiques agrégées et non supprimées automatiquement (suppression sur demande). Elles ne contiennent aucune donnée d'identité, mais sont liées à un code utilisateur durable (un pseudonyme)."
            ]
          }
        ],
        "b": "Nous ne collectons ni ton nom, ni ton e-mail, ni ton numéro de téléphone, ni tes photos, ni ton micro, ni ta caméra, ni tes contacts, ni ton identifiant publicitaire, ni tes coordonnées GPS. Vakit n'a pas de système de compte. Tes contenus (titres de dhikr, signets, progression de lecture, objectifs) restent sur ton appareil (DataStore / base de données locale) et ne sont inclus dans la sauvegarde Android que si la sauvegarde est activée ; ces enregistrements eux-mêmes ne sont jamais envoyés à notre serveur.\n\nCe qui est envoyé à notre serveur : un code utilisateur sans information identifiante, ton pays (pas les coordonnées GPS), les informations d'appareil et de version, tes préférences dans l'app (langue, méthode de calcul, thème, école juridique, type de calendrier, le genre choisi pour le guide de prière, préférences de notification et de lecture du Coran et des hadiths) et des statistiques d'utilisation des fonctionnalités. Ces statistiques indiquent qu'une section a été utilisée ; le contenu de tes enregistrements n'en fait pas partie. Les mots que tu cherches dans l'app sont envoyés : nous les enregistrons, jusqu'à 80 caractères, pour vérifier que la recherche trouve ce dont tu as besoin et en améliorer les résultats."
      },
      {
        "t": "2. Utilisation de tes données",
        "b": "• Horaires de prière – calculés hors ligne sur ton appareil avec la bibliothèque Adhan ; aucune coordonnée n'est envoyée pour cela.\n• Direction de la Qibla – la position et le cap de la boussole sont combinés sur ton appareil.\n• Notifications de prière – planifiées sur ton appareil avec AlarmManager ; l'app Android ne reçoit aucune notification push à distance.\n• Nom de la ville – les coordonnées sont envoyées au service de géocodage d'Android (Google) ; une recherche manuelle de ville envoie le texte que tu saisis.\n• Mosquées à proximité – les coordonnées de la zone de recherche sont envoyées à OpenStreetMap (Overpass API). L'itinéraire ouvre Google Maps avec l'emplacement de la mosquée.\n• Audio du Coran – les récitations sont diffusées ou téléchargées depuis quran.com et everyayah.com ; une requête n'identifie que le fichier audio.\n• Sermon du vendredi – le texte, le PDF et l'audio sont téléchargés depuis Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Polices – certaines polices sont téléchargées via les services Google Play (Google Fonts).\n• Tes contenus – dhikr, khatm, signets et objectifs sont stockés sur ton appareil.\n\nLes statistiques d'utilisation ne sont pas liées à ton identité mais à un code utilisateur aléatoire sans information identifiante (un pseudonyme). Si la sauvegarde Android est activée, ce code est inclus dans ta sauvegarde : réinstaller Vakit sur le même compte Google compte donc comme le même utilisateur. Ces données servent uniquement à améliorer l'app ; elles ne sont jamais vendues ni utilisées à des fins publicitaires. La version Android ne contient aucun SDK de rapport de plantage ou de publicité."
      },
      {
        "t": "3. Sauvegarde et synchronisation (Google Backup)",
        "b": "Vakit stocke tes enregistrements d'adoration (dhikr, khatm, signets, objectifs, mosquées favorites) sur ton appareil. Si la sauvegarde Android est activée, Android les inclut dans l'espace de sauvegarde privé de ton propre compte Google :\n• La sauvegarde dans le cloud n'est utilisée que sur les appareils qui prennent en charge les sauvegardes chiffrées de bout en bout ; la clé est dérivée de ton verrouillage d'écran, si bien que ni nous ni des tiers ne pouvons la lire.\n• La sauvegarde est restaurée quand tu réinstalles Vakit sur un appareil connecté au même compte Google.\n• L'audio téléchargé, la base de contenu intégrée et les caches ne sont pas sauvegardés.\n• Si tu désactives la sauvegarde dans les Paramètres Android, tes données restent uniquement sur ton appareil."
      },
      {
        "t": "4. Services tiers",
        "b": "Vakit utilise les services suivants à des fins limitées. Aucun d'eux ne reçoit ton identité de la part de Vakit :\n• Google – sauvegarde Android, géocodage pour le nom de ta ville, Google Fonts, avis intégré de Play (In-App Review) et Google Maps quand tu demandes un itinéraire.\n• OpenStreetMap (Overpass API) – recherche des mosquées à proximité (coordonnées de la zone de recherche).\n• quran.com et everyayah.com – audio de récitation du Coran.\n• Diyanet İşleri Başkanlığı – texte et audio du sermon du vendredi.\n• Cloudflare – acheminement du trafic vers le serveur de Vakit (statistiques d'utilisation) et distribution des packs de contenu téléchargeables.\nChaque service traite les requêtes selon sa propre politique de confidentialité."
      },
      {
        "t": "5. Publicité",
        "b": "Vakit n'affiche aucune publicité et ne contient aucun SDK publicitaire. Ton identifiant publicitaire n'est pas lu."
      },
      {
        "t": "6. Paiements",
        "b": "Vakit ne propose aucun achat intégré et ne traite aucune information de paiement."
      },
      {
        "t": "7. Partage des données",
        "b": "Nous ne vendons pas tes données et ne les partageons pas à des fins de marketing. Seuls les services listés sous « Services tiers » reçoivent des données, et uniquement pour la finalité qui y est indiquée. Les statistiques d'utilisation sont stockées sur notre serveur sécurisé en Allemagne (Nuremberg), rattachées à un code utilisateur sans information identifiante, et ne sont pas partagées avec des tiers."
      },
      {
        "t": "8. Conservation des données",
        "b": "• Données sur ton appareil – conservées jusqu'à ce que tu les supprimes (Réglages → Supprimer le compte) ou que tu désinstalles Vakit.\n• Sauvegarde Android – conservée jusqu'à ce que tu désactives la sauvegarde ou que tu la supprimes.\n• Audio téléchargé – conservé jusqu'à ce que tu le supprimes dans Réglages → Stockage ou que tu désinstalles Vakit.\n• Statistiques d'utilisation sur le serveur – conservées à des fins statistiques agrégées et non supprimées automatiquement ; supprimées sur demande."
      },
      {
        "t": "9. Sécurité",
        "b": "Tes données restent sur ton téléphone, protégées par le bac à sable des applications d'Android et le chiffrement de l'appareil. Les sauvegardes dans le cloud sont chiffrées de bout en bout avec une clé dérivée de ton verrouillage d'écran. Toutes les connexions réseau utilisent HTTPS."
      },
      {
        "t": "10. Tes droits et tes contrôles",
        "b": "En vertu de la loi turque KVKK et du RGPD européen (GDPR), tes droits sont :\n• Le droit de savoir quelles données sont traitées\n• Le droit de t'opposer au traitement des données (tu peux révoquer les autorisations de localisation et de notifications dans Paramètres Android → Applications → Vakit → Autorisations)\n• Le droit de demander la suppression (Réglages → Supprimer le compte, ou désinstaller l'app ; tu peux supprimer la sauvegarde Google depuis les Paramètres Android). Pour faire supprimer les statistiques d'utilisation de notre serveur, écris simplement à hakancelikdev@gmail.com ; ta demande est traitée sous 30 jours au plus tard.\n• Le droit à la portabilité des données\n• Le droit de saisir l'Autorité KVKK\n\nPour toute demande : hakancelikdev@gmail.com (nous répondons au plus tard sous 30 jours)."
      },
      {
        "t": "11. Vie privée des enfants",
        "b": "Vakit est proposée sur Google Play dans la catégorie « Tout public (3+) », mais nous ne collectons pas sciemment de données personnelles auprès des utilisateurs de moins de 13 ans. Si tu apprends que des données d'un enfant de moins de 13 ans ont été collectées, écris à hakancelikdev@gmail.com ; les données concernées seront supprimées immédiatement."
      },
      {
        "t": "12. Modifications de cette politique",
        "b": "Nous pouvons mettre à jour cette politique lorsque les fonctionnalités de l'app ou les exigences légales changent. La date « Dernière mise à jour » sur cette page indique la version en vigueur."
      },
      {
        "t": "13. Contact",
        "b": "Pour toute question, demande ou remarque sur la confidentialité : hakancelikdev@gmail.com\n\nResponsable du traitement : Hakan Çelik (Turquie)"
      }
    ]
  },
  "hi": {
    "meta": {
      "title": "Vakit — निजता नीति (Android)",
      "description": "Vakit आपकी निजता का सम्मान करता है। आपको किसी खाते की ज़रूरत नहीं, और हम आपका नाम, ईमेल, फ़ोन नंबर, तस्वीरें या संपर्क जैसी पहचान की जानकारी नहीं लेते।"
    },
    "titleBefore": "निजता नीति ",
    "titleEm": "Android",
    "desc": "आख़िरी अपडेट: 6 अक्टूबर 2026\n\nVakit आपकी निजता का सम्मान करता है। आपको किसी खाते की ज़रूरत नहीं, और हम आपका नाम, ईमेल, फ़ोन नंबर, तस्वीरें या संपर्क जैसी पहचान की जानकारी नहीं लेते। नमाज़ के वक़्त, क़िबले की दिशा और याददिहानी आपके डिवाइस पर निकाली जाती हैं। आपकी इबादत के रिकॉर्ड (ज़िक्र, ख़त्म, बुकमार्क, लक्ष्य, पसंदीदा मस्जिदें) आपके डिवाइस पर सहेजे जाते हैं, और अगर Android बैकअप चालू है तो आपके अपने Google खाते में भी — ये कभी हमारे सर्वर पर नहीं भेजे जाते। हमारे सर्वर पर सिर्फ़ इस्तेमाल के आँकड़े भेजे जाते हैं, ताकि हम ऐप को बेहतर बना सकें; यह डेटा ऐसे उपयोगकर्ता कोड से जुड़ा है जिसमें कोई पहचान की जानकारी नहीं। कोई क्रैश रिपोर्ट या विज्ञापन आईडी नहीं भेजी जाती।",
    "sections": [
      {
        "t": "1. हम कौन-सी जानकारी लेते हैं",
        "items": [
          {
            "name": "लोकेशन डेटा",
            "lines": [
              "उद्देश्य: रोज़ाना नमाज़ के वक़्त और क़िबले की दिशा निकालना, आपके शहर का नाम दिखाना और पास की मस्जिदें ढूँढना",
              "प्रोसेसिंग: आपके डिवाइस पर। आपके शहर का नाम दिखाने के लिए निर्देशांक Android की जियोकोडिंग सेवा (Google) को भेजे जाते हैं। जब आप «पास की मस्जिदें» खोलते हैं, तो खोज क्षेत्र के निर्देशांक OpenStreetMap (Overpass API) को भेजे जाते हैं। निर्देशांक कभी भी Vakit के किसी सर्वर को नहीं भेजे जाते।",
              "कब तक: आपकी आख़िरी लोकेशन आपके डिवाइस पर रखी जाती है ताकि नमाज़ के वक़्त बिना इंटरनेट निकाले जा सकें, जब तक आप उसे बदल न दें या ऐप हटा न दें। लोकेशन सिर्फ़ ऐप इस्तेमाल करते समय पढ़ी जाती है।"
            ]
          },
          {
            "name": "दिशा का डेटा",
            "lines": [
              "उद्देश्य: लाइव क़िबला कम्पास",
              "प्रोसेसिंग: सिर्फ़ डिवाइस पर",
              "कब तक: सहेजा नहीं जाता"
            ]
          },
          {
            "name": "मोशन डेटा",
            "lines": [
              "उद्देश्य: कम्पास को स्थिर और सहज रखने के लिए (रोटेशन वेक्टर सेंसर)",
              "प्रोसेसिंग: सिर्फ़ डिवाइस पर",
              "कब तक: सहेजा नहीं जाता"
            ]
          },
          {
            "name": "नोटिफ़िकेशन डेटा",
            "lines": [
              "उद्देश्य: लोकल नमाज़ नोटिफ़िकेशन पहुँचाने के लिए",
              "प्रोसेसिंग: AlarmManager / Android नोटिफ़िकेशन चैनल",
              "कब तक: बंद करने या ऐप हटाने तक"
            ]
          },
          {
            "name": "सेटिंग्स का डेटा",
            "lines": [
              "उद्देश्य: आपकी पसंद याद रखने के लिए",
              "प्रोसेसिंग: DataStore (आम पसंद छद्म-नाम उपयोगकर्ता कोड के साथ हमारे सर्वर पर जाती हैं; कोई निजी सामग्री शामिल नहीं)",
              "कब तक: रीसेट करने या ऐप हटाने तक। सर्वर पर पसंद का डेटा अपने-आप नहीं मिटाया जाता; अनुरोध करने पर मिटा दिया जाता है।"
            ]
          },
          {
            "name": "इस्तेमाल के आँकड़े",
            "lines": [
              "उद्देश्य: ऐप के प्रदर्शन पर नज़र रखने, ख़ामियाँ पकड़ने और अनुभव सुधारने के लिए",
              "प्रोसेसिंग: जर्मनी (न्यूरेमबर्ग) में हमारा सुरक्षित सर्वर; एक स्थायी उपयोगकर्ता कोड से जुड़ा जिसमें कोई पहचान की जानकारी नहीं",
              "कब तक: सामूहिक आँकड़ों के लिए रखा जाता है और अपने-आप नहीं मिटाया जाता (अनुरोध करने पर मिटा दिया जाता है)। इसमें पहचान का डेटा नहीं, पर यह एक स्थायी उपयोगकर्ता कोड (छद्म नाम) से जुड़ा है।"
            ]
          }
        ],
        "b": "हम आपका नाम, ईमेल, फ़ोन नंबर, तस्वीरें, माइक्रोफ़ोन, कैमरा, संपर्क, विज्ञापन आईडी या GPS निर्देशांक नहीं लेते। Vakit में कोई खाता व्यवस्था नहीं है। आपकी सामग्री (ज़िक्र के शीर्षक, बुकमार्क, पढ़ने की प्रगति, लक्ष्य) आपके डिवाइस पर (DataStore / लोकल डेटाबेस) रहती है और सिर्फ़ बैकअप चालू होने पर ही Android बैकअप में शामिल होती है; ये रिकॉर्ड ख़ुद कभी हमारे सर्वर पर नहीं भेजे जाते।\n\nहमारे सर्वर पर जो जाता है: बिना पहचान वाला उपयोगकर्ता कोड, आपका देश (GPS निर्देशांक नहीं), डिवाइस और संस्करण की जानकारी, आपकी ऐप पसंद (भाषा, हिसाब का तरीक़ा, थीम, मसलक, कैलेंडर का प्रकार, नमाज़ की गाइड के लिए चुना गया लिंग, नोटिफ़िकेशन और क़ुरआन/हदीस पढ़ने की पसंद) और सुविधाओं के इस्तेमाल के आँकड़े। ये आँकड़े बताते हैं कि कोई हिस्सा इस्तेमाल हुआ; इनमें आपके रिकॉर्ड की सामग्री नहीं होती। ऐप में आप जो शब्द खोजते हैं वे भेजे जाते हैं: हम ज़्यादा से ज़्यादा 80 अक्षर दर्ज करते हैं ताकि देख सकें खोज आपको वह दे रही है या नहीं जो आपको चाहिए, और नतीजे सुधार सकें।"
      },
      {
        "t": "2. हम आपका डेटा कैसे इस्तेमाल करते हैं",
        "b": "• नमाज़ के वक़्त – Adhan लाइब्रेरी से आपके डिवाइस पर बिना इंटरनेट निकाले जाते हैं; इसके लिए कोई निर्देशांक नहीं भेजे जाते।\n• क़िबले की दिशा – लोकेशन और कम्पास की दिशा आपके डिवाइस पर मिलाई जाती हैं।\n• नमाज़ की सूचनाएँ – AlarmManager से आपके डिवाइस पर तय की जाती हैं; Android ऐप को दूर से कोई पुश सूचना नहीं मिलती।\n• शहर का नाम – निर्देशांक Android की जियोकोडिंग सेवा (Google) को भेजे जाते हैं; हाथ से शहर खोजने पर आपका लिखा टेक्स्ट भेजा जाता है।\n• पास की मस्जिदें – खोज क्षेत्र के निर्देशांक OpenStreetMap (Overpass API) को भेजे जाते हैं। रास्ता दिखाने के लिए मस्जिद की लोकेशन के साथ Google Maps खुलता है।\n• क़ुरआन की ऑडियो – तिलावतें quran.com और everyayah.com से स्ट्रीम या डाउनलोड होती हैं; अनुरोध सिर्फ़ ऑडियो फ़ाइल की पहचान करता है।\n• जुमे का ख़ुत्बा – टेक्स्ट, PDF और ऑडियो Diyanet (dinhizmetleri.diyanet.gov.tr) से डाउनलोड होते हैं।\n• फ़ॉन्ट – कुछ फ़ॉन्ट Google Play सेवाओं (Google Fonts) के ज़रिए डाउनलोड होते हैं।\n• आपकी सामग्री – ज़िक्र, ख़त्म, बुकमार्क और लक्ष्य आपके डिवाइस पर सहेजे जाते हैं।\n\nइस्तेमाल के आँकड़े आपकी पहचान से नहीं, बल्कि एक यादृच्छिक उपयोगकर्ता कोड (छद्म नाम) से जुड़े हैं जिसमें कोई पहचान की जानकारी नहीं। अगर Android बैकअप चालू है तो यह कोड आपके बैकअप में शामिल होता है, इसलिए उसी Google खाते पर Vakit दोबारा इंस्टॉल करने पर आप वही उपयोगकर्ता गिने जाते हैं। यह डेटा सिर्फ़ ऐप सुधारने के लिए इस्तेमाल होता है; इसे कभी न बेचा जाता है, न विज्ञापन के लिए इस्तेमाल किया जाता है। Android संस्करण में कोई क्रैश रिपोर्टिंग या विज्ञापन SDK नहीं है।"
      },
      {
        "t": "3. बैकअप और सिंक (Google Backup)",
        "b": "Vakit आपकी इबादत के रिकॉर्ड (ज़िक्र, ख़त्म, बुकमार्क, लक्ष्य, पसंदीदा मस्जिदें) आपके डिवाइस पर सहेजता है। अगर Android बैकअप चालू है, तो Android उन्हें आपके अपने Google खाते की निजी बैकअप जगह में शामिल करता है:\n• क्लाउड बैकअप सिर्फ़ उन डिवाइसों पर इस्तेमाल होता है जो एंड-टू-एंड एन्क्रिप्टेड बैकअप का समर्थन करते हैं; कुंजी आपके स्क्रीन लॉक से बनती है, इसलिए न हम और न कोई तीसरा पक्ष उसे पढ़ सकता है।\n• उसी Google खाते से साइन इन किए गए डिवाइस पर Vakit दोबारा इंस्टॉल करने पर बैकअप वापस आ जाता है।\n• डाउनलोड की गई ऑडियो, ऐप के साथ आने वाला सामग्री डेटाबेस और कैश का बैकअप नहीं होता।\n• अगर आप Android सेटिंग्स में बैकअप बंद कर दें, तो आपका डेटा सिर्फ़ आपके डिवाइस पर रहता है।"
      },
      {
        "t": "4. तीसरे पक्ष की सेवाएँ",
        "b": "Vakit सीमित उद्देश्यों के लिए नीचे दी गई सेवाओं का इस्तेमाल करता है। इनमें से किसी को भी Vakit से आपकी पहचान नहीं मिलती:\n• Google – Android बैकअप, शहर के नाम के लिए जियोकोडिंग, Google Fonts, Play का ऐप में रिव्यू (In-App Review), और रास्ता माँगने पर Google Maps।\n• OpenStreetMap (Overpass API) – पास की मस्जिदों की खोज (खोज क्षेत्र के निर्देशांक)।\n• quran.com और everyayah.com – क़ुरआन तिलावत की ऑडियो।\n• Diyanet İşleri Başkanlığı – जुमे के ख़ुत्बे का टेक्स्ट और ऑडियो।\n• Cloudflare – Vakit सर्वर तक जाने वाले ट्रैफ़िक (उपयोग के आँकड़े) को पहुँचाना और डाउनलोड किए जा सकने वाले कंटेंट पैक बाँटना।\nहर सेवा अनुरोधों को अपनी निजता नीति के अनुसार प्रोसेस करती है।"
      },
      {
        "t": "5. विज्ञापन",
        "b": "Vakit कोई विज्ञापन नहीं दिखाता और इसमें कोई विज्ञापन SDK नहीं है। आपकी विज्ञापन आईडी नहीं पढ़ी जाती।"
      },
      {
        "t": "6. भुगतान",
        "b": "Vakit में कोई इन-ऐप ख़रीद नहीं है और यह भुगतान की कोई जानकारी प्रोसेस नहीं करता।"
      },
      {
        "t": "7. डेटा साझा करना",
        "b": "हम आपका डेटा नहीं बेचते और न ही मार्केटिंग के लिए साझा करते हैं। सिर्फ़ «तीसरे पक्ष की सेवाएँ» में दी गई सेवाओं को ही डेटा मिलता है, और वह भी सिर्फ़ वहाँ बताए गए उद्देश्य के लिए। इस्तेमाल के आँकड़े जर्मनी (न्यूरेमबर्ग) में हमारे सुरक्षित सर्वर पर, ऐसे उपयोगकर्ता कोड के साथ रखे जाते हैं जिसमें कोई पहचान की जानकारी नहीं, और तीसरे पक्षों के साथ साझा नहीं किए जाते।"
      },
      {
        "t": "8. डेटा कब तक रहता है",
        "b": "• आपके डिवाइस पर डेटा – तब तक रखा जाता है जब तक आप उसे हटा न दें (सेटिंग्स → खाता हटाएँ) या Vakit अनइंस्टॉल न कर दें।\n• Android बैकअप – तब तक रखा जाता है जब तक आप बैकअप बंद न करें या उसे हटा न दें।\n• डाउनलोड की गई ऑडियो – तब तक रखी जाती है जब तक आप उसे सेटिंग्स → स्टोरेज से हटा न दें या Vakit अनइंस्टॉल न कर दें।\n• सर्वर पर इस्तेमाल के आँकड़े – सामूहिक आँकड़ों के उद्देश्य से रखे जाते हैं और अपने-आप नहीं मिटाए जाते; अनुरोध करने पर मिटा दिए जाते हैं।"
      },
      {
        "t": "9. सुरक्षा",
        "b": "आपका डेटा आपके फ़ोन पर रहता है और Android के ऐप सैंडबॉक्स और डिवाइस एन्क्रिप्शन से सुरक्षित रहता है। क्लाउड बैकअप आपके स्क्रीन लॉक से बनी कुंजी से एंड-टू-एंड एन्क्रिप्ट होते हैं। सभी नेटवर्क कनेक्शन HTTPS का इस्तेमाल करते हैं।"
      },
      {
        "t": "10. आपके अधिकार और नियंत्रण",
        "b": "तुर्की के KVKK और यूरोपीय संघ के GDPR के तहत आपके अधिकार:\n• यह जानने का अधिकार कि कौन-सा डेटा प्रोसेस होता है\n• डेटा प्रोसेसिंग पर आपत्ति करने का अधिकार (आप Android सेटिंग्स → ऐप्स → Vakit → अनुमतियाँ से लोकेशन/सूचना की इजाज़त वापस ले सकते हैं)\n• डेटा हटवाने का अनुरोध करने का अधिकार (सेटिंग्स → खाता हटाएँ, या ऐप अनइंस्टॉल करें; Google बैकअप आप Android सेटिंग्स से हटा सकते हैं)। हमारे सर्वर के इस्तेमाल के आँकड़े हटवाने के लिए बस hakancelikdev@gmail.com पर लिखें; आपका अनुरोध ज़्यादा से ज़्यादा 30 दिन में पूरा किया जाता है।\n• डेटा पोर्टेबिलिटी का अधिकार\n• KVKK प्राधिकरण में आवेदन करने का अधिकार\n\nअनुरोधों के लिए: hakancelikdev@gmail.com (हम ज़्यादा से ज़्यादा 30 दिन में जवाब देते हैं)।"
      },
      {
        "t": "11. बच्चों की निजता",
        "b": "Vakit Google Play पर “सभी के लिए (3+)” श्रेणी में उपलब्ध है, पर हम जानबूझकर 13 साल से कम उम्र के उपयोगकर्ताओं से निजी डेटा नहीं लेते। अगर आपको पता चले कि 13 साल से कम उम्र के किसी बच्चे का डेटा लिया गया है तो कृपया hakancelikdev@gmail.com पर लिखें; वह डेटा फ़ौरन हटा दिया जाएगा।"
      },
      {
        "t": "12. इस नीति में बदलाव",
        "b": "ऐप की सुविधाएँ या क़ानूनी ज़रूरतें बदलने पर हम इस नीति को अपडेट कर सकते हैं। इस पेज पर «आख़िरी अपडेट» की तारीख़ मौजूदा संस्करण दिखाती है।"
      },
      {
        "t": "13. संपर्क",
        "b": "निजता के सवाल, अनुरोध या राय: hakancelikdev@gmail.com\n\nडेटा नियंत्रक: Hakan Çelik (तुर्की)"
      }
    ]
  },
  "id": {
    "meta": {
      "title": "Vakit — Kebijakan Privasi (Android)",
      "description": "Vakit menghormati privasimu. Kamu tidak perlu akun, dan kami tidak mengumpulkan data identitas seperti nama, email, nomor telepon, foto, atau kontakmu."
    },
    "titleBefore": "Kebijakan Privasi ",
    "titleEm": "Android",
    "desc": "Terakhir diperbarui: 6 Oktober 2026\n\nVakit menghormati privasimu. Kamu tidak perlu akun, dan kami tidak mengumpulkan data identitas seperti nama, email, nomor telepon, foto, atau kontakmu. Jadwal salat, arah kiblat, dan pengingat dihitung di perangkatmu. Catatan ibadahmu (zikir, khatam, penanda, target, masjid favorit) disimpan di perangkatmu dan, jika pencadangan Android aktif, di akun Google-mu sendiri — catatan itu tidak pernah dikirim ke server kami. Hanya statistik penggunaan yang dikirim ke server kami agar kami dapat menyempurnakan aplikasi; data tersebut terhubung ke kode pengguna tanpa informasi identitas. Tidak ada laporan error atau ID iklan yang dikirim.",
    "sections": [
      {
        "t": "1. Informasi yang kami kumpulkan",
        "items": [
          {
            "name": "Data lokasi",
            "lines": [
              "Tujuan: Menghitung jadwal salat harian dan arah kiblat, menampilkan nama kotamu, dan menemukan masjid terdekat",
              "Pemrosesan: Di perangkatmu. Untuk menampilkan nama kotamu, koordinat dikirim ke layanan geocoding Android (Google). Saat kamu membuka Masjid terdekat, koordinat area pencarian dikirim ke OpenStreetMap (Overpass API). Koordinat tidak pernah dikirim ke server Vakit.",
              "Penyimpanan: Lokasi terakhirmu disimpan di perangkat agar jadwal salat bisa dihitung secara offline, sampai kamu mengubahnya atau menghapus aplikasi. Lokasi hanya dibaca saat aplikasi sedang digunakan."
            ]
          },
          {
            "name": "Data arah",
            "lines": [
              "Tujuan: Kompas kiblat waktu nyata",
              "Pemrosesan: Hanya di perangkat",
              "Penyimpanan: Tidak disimpan"
            ]
          },
          {
            "name": "Data gerak",
            "lines": [
              "Tujuan: Penghalusan dan kestabilan kompas (sensor vektor rotasi)",
              "Pemrosesan: Hanya di perangkat",
              "Penyimpanan: Tidak disimpan"
            ]
          },
          {
            "name": "Data notifikasi",
            "lines": [
              "Tujuan: Mengirim notifikasi salat lokal",
              "Pemrosesan: AlarmManager / Saluran Notifikasi Android",
              "Penyimpanan: Sampai kamu mematikannya atau menghapus aplikasi"
            ]
          },
          {
            "name": "Data pengaturan",
            "lines": [
              "Tujuan: Mengingat pilihanmu",
              "Pemrosesan: DataStore (pilihan umum dikirim ke server kami dengan kode pengguna samaran; tidak ada isi pribadi di dalamnya)",
              "Penyimpanan: Sampai kamu menyetel ulang atau menghapus aplikasi. Data pilihan di server tidak dihapus secara otomatis; data dihapus atas permintaan."
            ]
          },
          {
            "name": "Statistik penggunaan",
            "lines": [
              "Tujuan: Memantau performa aplikasi, menemukan bug, dan memperbaiki pengalaman",
              "Pemrosesan: Server aman kami di Jerman (Nürnberg); terhubung ke kode pengguna tetap tanpa informasi identitas",
              "Penyimpanan: Disimpan untuk statistik agregat dan tidak dihapus secara otomatis (dihapus atas permintaan). Tidak memuat data identitas, tetapi terhubung ke kode pengguna tetap (samaran)."
            ]
          }
        ],
        "b": "Kami tidak mengumpulkan nama, email, nomor telepon, foto, mikrofon, kamera, kontak, ID iklan, atau koordinat GPS-mu. Vakit tidak punya sistem akun. Kontenmu (judul zikir, penanda, progres membaca, target) tetap di perangkatmu (DataStore / database lokal) dan hanya ikut dicadangkan oleh Android jika pencadangan aktif; catatan itu sendiri tidak pernah dikirim ke server kami.\n\nYang dikirim ke server kami: kode pengguna tanpa informasi identitas, negaramu (bukan koordinat GPS), informasi perangkat dan versi, pilihanmu di aplikasi (bahasa, metode perhitungan, tema, mazhab, jenis kalender, jenis kelamin yang kamu pilih untuk panduan salat, pilihan notifikasi dan bacaan Al-Qur'an/hadis), serta statistik pemakaian fitur. Statistik itu menunjukkan bahwa sebuah bagian dipakai; isi catatanmu tidak disertakan. Kata yang kamu cari di dalam aplikasi dikirim: kami menyimpannya, paling banyak 80 karakter, untuk melihat apakah pencariannya menemukan yang kamu butuhkan dan memperbaiki hasilnya."
      },
      {
        "t": "2. Cara kami memakai datamu",
        "b": "• Jadwal salat – dihitung offline di perangkatmu dengan library Adhan; tidak ada koordinat yang dikirim untuk ini.\n• Arah kiblat – lokasi dan arah kompas digabungkan di perangkatmu.\n• Notifikasi salat – dijadwalkan di perangkatmu dengan AlarmManager; aplikasi Android tidak menerima notifikasi push jarak jauh.\n• Nama kota – koordinat dikirim ke layanan geocoding Android (Google); pencarian kota manual mengirim teks yang kamu ketik.\n• Masjid terdekat – koordinat area pencarian dikirim ke OpenStreetMap (Overpass API). Petunjuk arah membuka Google Maps dengan lokasi masjid.\n• Audio Al-Qur'an – tilawah diputar streaming atau diunduh dari quran.com dan everyayah.com; permintaan hanya menyebut file audionya.\n• Khotbah Jumat – teks, PDF, dan audio diunduh dari Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Font – beberapa font diunduh melalui layanan Google Play (Google Fonts).\n• Kontenmu – zikir, khatam, penanda, dan target disimpan di perangkatmu.\n\nStatistik penggunaan tidak terhubung ke identitasmu, melainkan ke kode pengguna acak tanpa informasi identitas (samaran). Jika pencadangan Android aktif, kode itu ikut masuk ke cadanganmu, sehingga memasang ulang Vakit di akun Google yang sama dihitung sebagai pengguna yang sama. Datanya hanya dipakai untuk memperbaiki aplikasi; tidak pernah dijual atau dipakai untuk iklan. Vakit versi Android tidak berisi SDK pelaporan error atau iklan."
      },
      {
        "t": "3. Cadangan dan sinkronisasi (Google Backup)",
        "b": "Vakit menyimpan catatan ibadahmu (zikir, khatam, penanda, target, masjid favorit) di perangkatmu. Jika pencadangan Android aktif, Android menyertakannya di ruang cadangan pribadi akun Google-mu sendiri:\n• Cadangan cloud hanya digunakan di perangkat yang mendukung cadangan terenkripsi end-to-end; kuncinya berasal dari kunci layarmu, sehingga kami maupun pihak ketiga tidak dapat membacanya.\n• Cadangan dipulihkan saat kamu memasang ulang Vakit di perangkat yang masuk dengan akun Google yang sama.\n• Audio yang diunduh, database konten bawaan, dan cache tidak dicadangkan.\n• Jika kamu mematikan pencadangan di Setelan Android, datamu hanya tersimpan di perangkatmu."
      },
      {
        "t": "4. Layanan pihak ketiga",
        "b": "Vakit menggunakan layanan berikut untuk tujuan terbatas. Tidak satu pun menerima identitasmu dari Vakit:\n• Google – pencadangan Android, geocoding untuk nama kotamu, Google Fonts, ulasan dalam aplikasi Play (In-App Review), dan Google Maps saat kamu meminta petunjuk arah.\n• OpenStreetMap (Overpass API) – pencarian masjid terdekat (koordinat area pencarian).\n• quran.com dan everyayah.com – audio tilawah Al-Qur'an.\n• Diyanet İşleri Başkanlığı – teks dan audio khotbah Jumat.\n• Cloudflare – penerusan lalu lintas ke server Vakit (statistik penggunaan) dan pengiriman paket konten yang dapat diunduh.\nSetiap layanan memproses permintaan sesuai kebijakan privasinya sendiri."
      },
      {
        "t": "5. Iklan",
        "b": "Vakit tidak menampilkan iklan dan tidak berisi SDK iklan. ID iklanmu tidak dibaca."
      },
      {
        "t": "6. Pembayaran",
        "b": "Vakit tidak memiliki pembelian dalam aplikasi dan tidak memproses informasi pembayaran apa pun."
      },
      {
        "t": "7. Pembagian data",
        "b": "Kami tidak menjual datamu atau membagikannya untuk pemasaran. Hanya layanan yang tercantum di bagian “Layanan pihak ketiga” yang menerima data, dan hanya untuk tujuan yang disebutkan di sana. Statistik penggunaan disimpan di server aman kami di Jerman (Nürnberg), terhubung ke kode pengguna tanpa informasi identitas, dan tidak dibagikan kepada pihak ketiga."
      },
      {
        "t": "8. Masa penyimpanan",
        "b": "• Data di perangkatmu – disimpan sampai kamu menghapusnya (Pengaturan → Hapus akun) atau menghapus instalan Vakit.\n• Cadangan Android – disimpan sampai kamu mematikan pencadangan atau menghapusnya.\n• Audio yang diunduh – disimpan sampai kamu menghapusnya di Pengaturan → Penyimpanan atau menghapus instalan Vakit.\n• Statistik penggunaan di server – disimpan untuk keperluan statistik agregat dan tidak dihapus secara otomatis; dihapus atas permintaan."
      },
      {
        "t": "9. Keamanan",
        "b": "Datamu tetap di ponselmu, dilindungi oleh sandbox aplikasi Android dan enkripsi perangkat. Cadangan cloud dienkripsi end-to-end dengan kunci yang berasal dari kunci layarmu. Semua koneksi jaringan menggunakan HTTPS."
      },
      {
        "t": "10. Hak dan kendalimu",
        "b": "Menurut KVKK Turki dan GDPR Uni Eropa, hakmu adalah:\n• Hak untuk mengetahui data apa yang diproses\n• Hak untuk menolak pemrosesan data (kamu bisa mencabut izin Lokasi/Notifikasi melalui Setelan Android → Aplikasi → Vakit → Izin)\n• Hak untuk meminta penghapusan (Pengaturan → Hapus akun, atau hapus instalan aplikasi; cadangan Google bisa kamu hapus dari Setelan Android). Kalau ingin statistik penggunaan di server kami dihapus, cukup kirim email ke hakancelikdev@gmail.com; permintaanmu dipenuhi paling lambat dalam 30 hari.\n• Hak atas portabilitas data\n• Hak untuk mengajukan permohonan ke Otoritas KVKK\n\nUntuk permintaan: hakancelikdev@gmail.com (kami membalas paling lambat dalam 30 hari)."
      },
      {
        "t": "11. Privasi anak",
        "b": "Vakit tersedia di Google Play dalam kategori “Semua Umur (3+)”, tetapi kami tidak dengan sengaja mengumpulkan data pribadi dari pengguna di bawah 13 tahun. Jika kamu mengetahui ada data anak di bawah 13 tahun yang terkumpul, tulis ke hakancelikdev@gmail.com; data terkait akan segera dihapus."
      },
      {
        "t": "12. Perubahan kebijakan ini",
        "b": "Kami dapat memperbarui kebijakan ini saat fitur aplikasi atau persyaratan hukum berubah. Tanggal “Terakhir diperbarui” di halaman ini menunjukkan versi yang berlaku."
      },
      {
        "t": "13. Kontak",
        "b": "Pertanyaan, permintaan, atau masukan soal privasi: hakancelikdev@gmail.com\n\nPengendali data: Hakan Çelik (Turki)"
      }
    ]
  },
  "it": {
    "meta": {
      "title": "Vakit — Informativa sulla privacy (Android)",
      "description": "Vakit rispetta la tua privacy. Non ti serve un account e non raccogliamo dati identificativi come nome, e-mail, numero di telefono, foto o contatti."
    },
    "titleBefore": "Informativa sulla privacy ",
    "titleEm": "Android",
    "desc": "Ultimo aggiornamento: 6 ottobre 2026\n\nVakit rispetta la tua privacy. Non ti serve un account e non raccogliamo dati identificativi come nome, e-mail, numero di telefono, foto o contatti. Gli orari di preghiera, la direzione della Qibla e i promemoria vengono calcolati sul tuo dispositivo. I tuoi dati di adorazione (dhikr, khatm, segnalibri, obiettivi, moschee preferite) sono salvati sul tuo dispositivo e, se il backup di Android è attivo, nel tuo account Google — non vengono mai inviati al nostro server. Al nostro server vengono inviate solo statistiche d'uso, per permetterci di migliorare l'app; questi dati sono collegati a un codice utente privo di dati identificativi. Non vengono inviati rapporti sugli arresti anomali né identificatori pubblicitari.",
    "sections": [
      {
        "t": "1. Dati che raccogliamo",
        "items": [
          {
            "name": "Dati di posizione",
            "lines": [
              "Finalità: Calcolare gli orari di preghiera giornalieri e la direzione della Qibla, mostrare il nome della tua città e trovare le moschee vicine",
              "Trattamento: Sul tuo dispositivo. Per mostrare il nome della tua città, le coordinate vengono inviate al servizio di geocodifica di Android (Google). Quando apri Moschee vicine, le coordinate dell'area di ricerca vengono inviate a OpenStreetMap (Overpass API). Le coordinate non vengono mai inviate a un server di Vakit.",
              "Conservazione: La tua ultima posizione viene conservata sul dispositivo, così gli orari di preghiera si possono calcolare offline, finché non la cambi o non elimini l'app. La posizione viene letta solo mentre usi l'app."
            ]
          },
          {
            "name": "Dati di direzione",
            "lines": [
              "Finalità: Bussola Qibla in tempo reale",
              "Trattamento: Solo sul dispositivo",
              "Conservazione: Non conservato"
            ]
          },
          {
            "name": "Dati di movimento",
            "lines": [
              "Finalità: Stabilizzazione e fluidità della bussola (sensore del vettore di rotazione)",
              "Trattamento: Solo sul dispositivo",
              "Conservazione: Non conservato"
            ]
          },
          {
            "name": "Dati delle notifiche",
            "lines": [
              "Finalità: Inviare notifiche di preghiera locali",
              "Trattamento: AlarmManager / canali di notifica di Android",
              "Conservazione: Fino alla disattivazione o alla rimozione dell'app"
            ]
          },
          {
            "name": "Dati delle impostazioni",
            "lines": [
              "Finalità: Ricordare le tue preferenze",
              "Trattamento: DataStore (le preferenze generali vengono inviate al nostro server con il codice utente pseudonimo; non contengono contenuti personali)",
              "Conservazione: Fino al ripristino o alla rimozione dell'app. Sul server non vengono eliminate automaticamente; vengono eliminate su richiesta."
            ]
          },
          {
            "name": "Statistiche d'uso",
            "lines": [
              "Finalità: Monitorare le prestazioni, individuare errori e migliorare l'esperienza",
              "Trattamento: Il nostro server sicuro in Germania (Norimberga); collegato a un codice utente permanente privo di dati identificativi",
              "Conservazione: Conservate a fini statistici aggregati e non eliminate automaticamente (eliminate su richiesta). Non contengono dati identificativi, ma sono collegate a un codice utente permanente (uno pseudonimo)."
            ]
          }
        ],
        "b": "Non raccogliamo nome, e-mail, numero di telefono, foto, microfono, fotocamera, contatti, ID pubblicità o coordinate GPS. Vakit non ha un sistema di account. I tuoi contenuti (titoli dei dhikr, segnalibri, avanzamento della lettura, obiettivi) restano sul tuo dispositivo (DataStore / database locale) e vengono inclusi nel backup di Android solo se il backup è attivo; questi dati in sé non vengono mai inviati al nostro server.\n\nCiò che arriva al nostro server: un codice utente privo di dati identificativi, il tuo paese (non le coordinate GPS), informazioni su dispositivo e versione, le tue preferenze dell'app (lingua, metodo di calcolo, tema, scuola giuridica, tipo di calendario, il genere scelto per la guida alla preghiera, preferenze di notifica e di lettura di Corano e hadith) e statistiche sull'uso delle funzioni. Queste statistiche indicano che una sezione è stata usata; non includono il contenuto dei tuoi dati. Le parole che cerchi nell'app vengono inviate: le registriamo, fino a 80 caratteri, per verificare se la ricerca trova ciò che ti serve e migliorarne i risultati."
      },
      {
        "t": "2. Come usiamo i tuoi dati",
        "b": "• Orari di preghiera – calcolati offline sul tuo dispositivo con la libreria Adhan; per questo non vengono inviate coordinate.\n• Direzione della Qibla – posizione e direzione della bussola vengono combinate sul tuo dispositivo.\n• Notifiche di preghiera – programmate sul tuo dispositivo con AlarmManager; l'app Android non riceve notifiche push remote.\n• Nome della città – le coordinate vengono inviate al servizio di geocodifica di Android (Google); una ricerca manuale della città invia il testo che digiti.\n• Moschee vicine – le coordinate dell'area di ricerca vengono inviate a OpenStreetMap (Overpass API). Le indicazioni stradali aprono Google Maps con la posizione della moschea.\n• Audio del Corano – le recitazioni vengono riprodotte in streaming o scaricate da quran.com ed everyayah.com; una richiesta identifica solo il file audio.\n• Sermone del venerdì – testo, PDF e audio vengono scaricati da Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Caratteri – alcuni caratteri vengono scaricati tramite i servizi Google Play (Google Fonts).\n• I tuoi contenuti – dhikr, khatm, segnalibri e obiettivi sono salvati sul tuo dispositivo.\n\nLe statistiche d'uso non sono collegate alla tua identità ma a un codice utente casuale privo di dati identificativi (uno pseudonimo). Se il backup di Android è attivo, il codice viene incluso nel tuo backup, quindi reinstallare Vakit con lo stesso account Google conta come lo stesso utente. I dati servono solo a migliorare l'app; non vengono mai venduti né usati per la pubblicità. La versione Android non contiene alcun SDK di segnalazione degli arresti anomali o pubblicitario."
      },
      {
        "t": "3. Backup e sincronizzazione (Google Backup)",
        "b": "Vakit salva i tuoi dati di adorazione (dhikr, khatm, segnalibri, obiettivi, moschee preferite) sul tuo dispositivo. Se il backup di Android è attivo, Android li include nello spazio di backup privato del tuo account Google:\n• Il backup nel cloud viene usato solo sui dispositivi che supportano backup crittografati end-to-end; la chiave deriva dal blocco schermo, quindi né noi né terze parti possiamo leggerlo.\n• Il backup viene ripristinato quando reinstalli Vakit su un dispositivo collegato allo stesso account Google.\n• L'audio scaricato, il database dei contenuti incluso e le cache non vengono salvati nel backup.\n• Se disattivi il backup nelle Impostazioni di Android, i tuoi dati restano solo sul tuo dispositivo."
      },
      {
        "t": "4. Servizi di terze parti",
        "b": "Vakit usa i seguenti servizi per scopi limitati. Nessuno di essi riceve la tua identità da Vakit:\n• Google – backup di Android, geocodifica per il nome della tua città, Google Fonts, recensione in-app di Play (In-App Review) e Google Maps quando chiedi indicazioni.\n• OpenStreetMap (Overpass API) – ricerca delle moschee vicine (coordinate dell'area di ricerca).\n• quran.com ed everyayah.com – audio delle recitazioni del Corano.\n• Diyanet İşleri Başkanlığı – testo e audio del sermone del venerdì.\n• Cloudflare – inoltro del traffico verso il server di Vakit (statistiche d'uso) e distribuzione dei pacchetti di contenuti scaricabili.\nOgni servizio tratta le richieste secondo la propria informativa sulla privacy."
      },
      {
        "t": "5. Pubblicità",
        "b": "Vakit non mostra pubblicità e non contiene alcun SDK pubblicitario. Il tuo ID pubblicità non viene letto."
      },
      {
        "t": "6. Pagamenti",
        "b": "Vakit non ha acquisti in-app e non tratta alcuna informazione di pagamento."
      },
      {
        "t": "7. Condivisione dei dati",
        "b": "Non vendiamo i tuoi dati né li condividiamo per finalità di marketing. Solo i servizi elencati in «Servizi di terze parti» ricevono dati, e solo per lo scopo lì indicato. Le statistiche d'uso sono conservate sul nostro server sicuro in Germania (Norimberga), collegate a un codice utente privo di dati identificativi, e non vengono condivise con terze parti."
      },
      {
        "t": "8. Conservazione dei dati",
        "b": "• Dati sul tuo dispositivo – conservati finché non li elimini (Impostazioni → Elimina l'account) o non disinstalli Vakit.\n• Backup di Android – conservato finché non disattivi il backup o non lo elimini.\n• Audio scaricato – conservato finché non lo elimini in Impostazioni → Spazio o non disinstalli Vakit.\n• Statistiche d'uso sul server – conservate a fini statistici aggregati e non eliminate automaticamente; eliminate su richiesta."
      },
      {
        "t": "9. Sicurezza",
        "b": "I tuoi dati restano sul telefono, protetti dalla sandbox delle app di Android e dalla crittografia del dispositivo. I backup nel cloud sono crittografati end-to-end con una chiave derivata dal blocco schermo. Tutte le connessioni di rete usano HTTPS."
      },
      {
        "t": "10. I tuoi diritti e controlli",
        "b": "In base alla legge turca KVKK e al GDPR dell'UE, i tuoi diritti sono:\n• Il diritto di sapere quali dati vengono trattati\n• Il diritto di opporti al trattamento dei dati (puoi revocare i permessi di posizione e notifiche in Impostazioni di Android → App → Vakit → Autorizzazioni)\n• Il diritto di chiedere la cancellazione (Impostazioni → Elimina l'account, oppure disinstalla l'app; puoi eliminare il backup Google dalle Impostazioni di Android). Per far cancellare le statistiche d'uso dal nostro server, basta scrivere a hakancelikdev@gmail.com; la richiesta viene evasa entro 30 giorni al massimo.\n• Il diritto alla portabilità dei dati\n• Il diritto di rivolgerti all'Autorità KVKK\n\nPer le richieste: hakancelikdev@gmail.com (rispondiamo entro 30 giorni al massimo)."
      },
      {
        "t": "11. Privacy dei minori",
        "b": "Vakit è offerta su Google Play nella categoria «Tutti (3+)», ma non raccogliamo consapevolmente dati personali da utenti sotto i 13 anni. Se vieni a sapere che sono stati raccolti dati di un minore di 13 anni, scrivi a hakancelikdev@gmail.com; i dati in questione saranno eliminati subito."
      },
      {
        "t": "12. Modifiche a questa informativa",
        "b": "Possiamo aggiornare questa informativa quando cambiano le funzioni dell'app o i requisiti di legge. La data di «Ultimo aggiornamento» in questa pagina indica la versione in vigore."
      },
      {
        "t": "13. Contatti",
        "b": "Per domande, richieste o osservazioni sulla privacy: hakancelikdev@gmail.com\n\nTitolare del trattamento: Hakan Çelik (Turchia)"
      }
    ]
  },
  "ja": {
    "meta": {
      "title": "Vakit — プライバシーポリシー (Android)",
      "description": "Vakitはあなたのプライバシーを尊重します。アカウントは不要で、氏名、メールアドレス、電話番号、写真、連絡先などの身元情報を集めません。"
    },
    "titleBefore": "プライバシーポリシー ",
    "titleEm": "Android",
    "desc": "最終更新： 2026年10月6日\n\nVakitはあなたのプライバシーを尊重します。アカウントは不要で、氏名、メールアドレス、電話番号、写真、連絡先などの身元情報を集めません。礼拝時刻、キブラの方角、リマインダーは端末内で計算します。行いの記録（ズィクル、通読、しおり、目標、お気に入りのモスク）は端末に保存され、Androidのバックアップがオンの場合はあなた自身のGoogleアカウントにも保存されます — これらが当方のサーバーへ送られることはありません。当方のサーバーへ送るのは、アプリを良くするための利用統計だけです。このデータは身元情報を含まない利用者コードに結びついています。クラッシュレポートや広告IDは送信しません。",
    "sections": [
      {
        "t": "1. 収集する情報",
        "items": [
          {
            "name": "位置情報",
            "lines": [
              "目的： 毎日の礼拝時刻とキブラの方角を計算し、都市名を表示し、近くのモスクを探すため",
              "処理： 端末内。都市名を表示するため、座標がAndroidのジオコーディングサービス（Google）に送信されます。「近くのモスク」を開くと、検索範囲の座標がOpenStreetMap（Overpass API）に送信されます。座標がVakitのサーバーに送信されることはありません。",
              "保存期間： オフラインでも礼拝時刻を計算できるよう、最後の位置情報は変更するかアプリを削除するまで端末に保存されます。位置情報はアプリの使用中にのみ読み取ります。"
            ]
          },
          {
            "name": "方位のデータ",
            "lines": [
              "目的： リアルタイムのキブラ・コンパス",
              "処理： 端末内でのみ処理",
              "保存期間： 保存しません"
            ]
          },
          {
            "name": "モーションのデータ",
            "lines": [
              "目的： コンパスの安定と滑らかさ（回転ベクトルセンサー）",
              "処理： 端末内でのみ処理",
              "保存期間： 保存しません"
            ]
          },
          {
            "name": "通知のデータ",
            "lines": [
              "目的： ローカルの礼拝通知を届けるため",
              "処理： AlarmManager / Android 通知チャネル",
              "保存期間： オフにするかアプリを削除するまで"
            ]
          },
          {
            "name": "設定のデータ",
            "lines": [
              "目的： あなたの設定を覚えておくため",
              "処理： DataStore（一般の設定は仮名の利用者コードでサーバーへ送られます。個人的な内容は含みません）",
              "保存期間： リセットまたはアプリ削除まで。サーバー上の設定データは自動では削除せず、ご請求に応じて削除します。"
            ]
          },
          {
            "name": "利用統計",
            "lines": [
              "目的： アプリの動作を見守り、不具合を見つけ、体験を良くするため",
              "処理： ドイツ（ニュルンベルク）にある当方の安全なサーバー。身元情報を含まない継続的な利用者コードに結びつけています",
              "保存期間： 集計のために保存し、自動では削除しません（ご請求に応じて削除します）。身元情報は含みませんが、継続的な利用者コード（仮名）に結びついています。"
            ]
          }
        ],
        "b": "氏名、メールアドレス、電話番号、写真、マイク、カメラ、連絡先、広告ID、GPS座標を集めません。Vakitにはアカウントの仕組みがありません。あなたのコンテンツ（ズィクルの名前、しおり、読み進み、目標）は端末内（DataStore／ローカルデータベース）に残り、Androidのバックアップがオンの場合に限りバックアップに含まれます。これらの記録そのものを当方のサーバーへ送ることはありません。\n\n当方のサーバーへ送るもの：身元情報を含まない利用者コード、国（GPS座標ではありません）、端末とバージョンの情報、アプリの設定（言語、計算方法、テーマ、法学派、暦の種類、礼拝の手引きで選んだ性別、通知とクルアーン／ハディースの読書設定）、そして機能の利用統計です。統計はある画面が使われたことを示すだけで、記録の中身は含みません。アプリ内で検索した語は送られます。検索で必要なものが見つかっているかを確かめて結果を良くするために、80文字までを記録します。"
      },
      {
        "t": "2. データの使い方",
        "b": "• 礼拝時刻 – Adhanライブラリで端末内でオフライン計算します。そのために座標を送信することはありません。\n• キブラの方角 – 位置情報とコンパスの向きを端末内で組み合わせます。\n• 礼拝の通知 – AlarmManagerで端末内でスケジュールします。Androidアプリはリモートのプッシュ通知を受け取りません。\n• 都市名 – 座標がAndroidのジオコーディングサービス（Google）に送信されます。都市を手動で検索すると、入力したテキストが送信されます。\n• 近くのモスク – 検索範囲の座標がOpenStreetMap（Overpass API）に送信されます。経路案内はモスクの位置でGoogleマップを開きます。\n• クルアーンの音声 – 朗誦はquran.comとeveryayah.comからストリーミングまたはダウンロードされます。リクエストで特定されるのは音声ファイルだけです。\n• 金曜の説教 – テキスト、PDF、音声はDiyanet（dinhizmetleri.diyanet.gov.tr）からダウンロードされます。\n• フォント – 一部のフォントはGoogle Play開発者サービス（Google Fonts）を通じてダウンロードされます。\n• あなたのコンテンツ – ズィクル、通読、しおり、目標は端末に保存されます。\n\n利用統計はあなたの身元ではなく、身元情報を含まないランダムな利用者コード（仮名）に結びついています。Androidのバックアップがオンの場合、このコードはバックアップに含まれるため、同じGoogleアカウントでVakitを入れ直しても同じ利用者として数えられます。データはアプリを良くするためだけに使い、販売も広告利用もしません。Android版にはクラッシュレポートや広告のSDKは含まれていません。"
      },
      {
        "t": "3. バックアップと同期（Google バックアップ）",
        "b": "Vakitは行いの記録（ズィクル、通読、しおり、目標、お気に入りのモスク）を端末に保存します。Androidのバックアップがオンの場合、Androidはそれらをあなた自身のGoogleアカウントの非公開のバックアップ領域に含めます：\n• クラウドバックアップは、エンドツーエンド暗号化バックアップに対応した端末でのみ使われます。鍵は画面ロックから生成されるため、当方も第三者も読むことはできません。\n• 同じGoogleアカウントでログインした端末にVakitを再インストールすると、バックアップが復元されます。\n• ダウンロードした音声、同梱のコンテンツデータベース、キャッシュはバックアップされません。\n• Androidの設定でバックアップをオフにすると、データは端末内にのみ残ります。"
      },
      {
        "t": "4. 外部サービス",
        "b": "Vakitは以下のサービスを限られた目的で利用します。いずれもVakitからあなたの身元を受け取ることはありません：\n• Google – Androidのバックアップ、都市名のためのジオコーディング、Google Fonts、Playのアプリ内レビュー（In-App Review）、経路案内を求めたときのGoogleマップ。\n• OpenStreetMap（Overpass API） – 近くのモスクの検索（検索範囲の座標）。\n• quran.comとeveryayah.com – クルアーン朗誦の音声。\n• Diyanet İşleri Başkanlığı – 金曜の説教のテキストと音声。\n• Cloudflare – Vakitサーバーへの通信（利用統計）の中継と、ダウンロード可能なコンテンツパックの配信。\n各サービスはそれぞれのプライバシーポリシーに従ってリクエストを処理します。"
      },
      {
        "t": "5. 広告",
        "b": "Vakitは広告を表示せず、広告SDKも含みません。広告IDを読み取ることはありません。"
      },
      {
        "t": "6. 支払い",
        "b": "Vakitにはアプリ内課金がなく、支払い情報を扱いません。"
      },
      {
        "t": "7. データの共有",
        "b": "あなたのデータを販売したり、マーケティングのために共有したりしません。データを受け取るのは「外部サービス」に記載したサービスだけで、そこに書かれた目的に限られます。利用統計はドイツ（ニュルンベルク）にある当方の安全なサーバーに、身元情報を含まない利用者コードとともに保存され、第三者と共有されることはありません。"
      },
      {
        "t": "8. データの保存期間",
        "b": "• 端末内のデータ – 削除する（設定 → アカウントを削除）か、Vakitをアンインストールするまで保存されます。\n• Androidのバックアップ – バックアップをオフにするか削除するまで保存されます。\n• ダウンロードした音声 – 設定 → ストレージで削除するか、Vakitをアンインストールするまで保存されます。\n• サーバー上の利用統計 – 集計統計のために保存され、自動では削除されません。ご請求に応じて削除されます。"
      },
      {
        "t": "9. セキュリティ",
        "b": "データはスマートフォンに残り、Androidのアプリサンドボックスと端末の暗号化で保護されます。クラウドバックアップは画面ロックから生成された鍵でエンドツーエンド暗号化されます。すべてのネットワーク接続はHTTPSを使います。"
      },
      {
        "t": "10. あなたの権利と操作",
        "b": "トルコのKVKKおよびEUのGDPRにより、あなたには次の権利があります：\n• どのデータが処理されているかを知る権利\n• データの処理に異議を申し立てる権利（Androidの設定 → アプリ → Vakit → 権限 で位置情報・通知の許可を取り消せます）\n• 削除を求める権利（設定 → アカウントを削除、またはアプリのアンインストール。Googleのバックアップは Androidの設定 から削除できます）。当方のサーバー上の利用統計を消したい場合は hakancelikdev@gmail.com までご連絡ください。遅くとも30日以内に対応します。\n• データポータビリティの権利\n• KVKK当局に申し立てる権利\n\nお問い合わせ：hakancelikdev@gmail.com（遅くとも30日以内に返信します）。"
      },
      {
        "t": "11. 子どものプライバシー",
        "b": "VakitはGoogle Playで「全年齢対象（3+）」のカテゴリで提供していますが、13歳未満の利用者から個人データを知って集めることはありません。13歳未満の子どものデータが収集されたことに気づいた場合は hakancelikdev@gmail.com までご連絡ください。該当データはただちに削除します。"
      },
      {
        "t": "12. 本ポリシーの変更",
        "b": "アプリの機能や法的要件が変わったときに、このポリシーを更新することがあります。このページの「最終更新」の日付が現行の版を示します。"
      },
      {
        "t": "13. お問い合わせ",
        "b": "プライバシーについてのご質問、ご請求、ご意見：hakancelikdev@gmail.com\n\nデータ管理者：Hakan Çelik（トルコ）"
      }
    ]
  },
  "ms": {
    "meta": {
      "title": "Vakit — Dasar Privasi (Android)",
      "description": "Vakit menghormati privasi anda. Anda tidak memerlukan akaun, dan kami tidak mengumpul data identiti seperti nama, e-mel, nombor telefon, gambar atau kenalan anda."
    },
    "titleBefore": "Dasar Privasi ",
    "titleEm": "Android",
    "desc": "Kemas kini terakhir: 6 Oktober 2026\n\nVakit menghormati privasi anda. Anda tidak memerlukan akaun, dan kami tidak mengumpul data identiti seperti nama, e-mel, nombor telefon, gambar atau kenalan anda. Waktu solat, arah kiblat dan peringatan dikira pada peranti anda. Catatan ibadah anda (zikir, khatam, penanda, sasaran, masjid kegemaran) disimpan pada peranti anda dan, jika sandaran Android dihidupkan, dalam akaun Google anda sendiri — catatan ini tidak pernah dihantar ke pelayan kami. Hanya statistik penggunaan dihantar ke pelayan kami supaya kami dapat menambah baik apl; data itu terpaut pada kod pengguna tanpa maklumat identiti. Tiada laporan ranap atau ID pengiklanan dihantar.",
    "sections": [
      {
        "t": "1. Maklumat yang kami kumpulkan",
        "items": [
          {
            "name": "Data lokasi",
            "lines": [
              "Tujuan: Mengira waktu solat harian dan arah kiblat, memaparkan nama bandar anda dan mencari masjid berdekatan",
              "Pemprosesan: Pada peranti anda. Untuk memaparkan nama bandar anda, koordinat dihantar ke perkhidmatan geokod Android (Google). Apabila anda membuka Masjid berdekatan, koordinat kawasan carian dihantar ke OpenStreetMap (Overpass API). Koordinat tidak pernah dihantar ke pelayan Vakit.",
              "Penyimpanan: Lokasi terakhir anda disimpan pada peranti supaya waktu solat dapat dikira di luar talian, sehingga anda mengubahnya atau memadam apl. Lokasi hanya dibaca semasa apl digunakan."
            ]
          },
          {
            "name": "Data arah",
            "lines": [
              "Tujuan: Kompas kiblat masa nyata",
              "Pemprosesan: Hanya pada peranti",
              "Penyimpanan: Tidak disimpan"
            ]
          },
          {
            "name": "Data gerakan",
            "lines": [
              "Tujuan: Pelicinan dan kestabilan kompas (penderia vektor putaran)",
              "Pemprosesan: Hanya pada peranti",
              "Penyimpanan: Tidak disimpan"
            ]
          },
          {
            "name": "Data pemberitahuan",
            "lines": [
              "Tujuan: Menghantar pemberitahuan solat setempat",
              "Pemprosesan: AlarmManager / Saluran Pemberitahuan Android",
              "Penyimpanan: Sehingga anda mematikannya atau memadam apl"
            ]
          },
          {
            "name": "Data tetapan",
            "lines": [
              "Tujuan: Mengingati pilihan anda",
              "Pemprosesan: DataStore (pilihan umum dihantar ke pelayan kami dengan kod pengguna samaran; tiada kandungan peribadi disertakan)",
              "Penyimpanan: Sehingga anda set semula atau memadam apl. Data pilihan pada pelayan tidak dipadam secara automatik; ia dipadam atas permintaan."
            ]
          },
          {
            "name": "Statistik penggunaan",
            "lines": [
              "Tujuan: Memantau prestasi apl, mengesan pepijat dan menambah baik pengalaman",
              "Pemprosesan: Pelayan selamat kami di Jerman (Nuremberg); terpaut pada kod pengguna kekal tanpa maklumat identiti",
              "Penyimpanan: Disimpan untuk statistik agregat dan tidak dipadam secara automatik (dipadam atas permintaan). Tiada data identiti, tetapi terpaut pada kod pengguna kekal (samaran)."
            ]
          }
        ],
        "b": "Kami tidak mengumpul nama, e-mel, nombor telefon, gambar, mikrofon, kamera, kenalan, ID pengiklanan atau koordinat GPS anda. Vakit tiada sistem akaun. Kandungan anda (tajuk zikir, penanda, kemajuan bacaan, sasaran) kekal pada peranti anda (DataStore / pangkalan data setempat) dan hanya dimasukkan dalam sandaran Android jika sandaran dihidupkan; catatan ini sendiri tidak pernah dihantar ke pelayan kami.\n\nYang dihantar ke pelayan kami: kod pengguna tanpa maklumat identiti, negara anda (bukan koordinat GPS), maklumat peranti dan versi, pilihan anda dalam apl (bahasa, kaedah pengiraan, tema, mazhab, jenis kalendar, jantina yang anda pilih untuk panduan solat, pilihan pemberitahuan dan bacaan Al-Quran/hadis), serta statistik penggunaan ciri. Statistik itu menunjukkan bahawa sesuatu bahagian digunakan; kandungan catatan anda tidak disertakan. Perkataan yang anda cari dalam apl dihantar: kami menyimpannya, paling banyak 80 aksara, untuk melihat sama ada carian menemui apa yang anda perlukan dan menambah baik hasilnya."
      },
      {
        "t": "2. Cara kami menggunakan data anda",
        "b": "• Waktu solat – dikira di luar talian pada peranti anda dengan pustaka Adhan; tiada koordinat dihantar untuk ini.\n• Arah kiblat – lokasi dan arah kompas digabungkan pada peranti anda.\n• Pemberitahuan solat – dijadualkan pada peranti anda dengan AlarmManager; apl Android tidak menerima pemberitahuan tolak jarak jauh.\n• Nama bandar – koordinat dihantar ke perkhidmatan geokod Android (Google); carian bandar secara manual menghantar teks yang anda taip.\n• Masjid berdekatan – koordinat kawasan carian dihantar ke OpenStreetMap (Overpass API). Arah perjalanan membuka Google Maps dengan lokasi masjid.\n• Audio al-Quran – bacaan distrim atau dimuat turun dari quran.com dan everyayah.com; permintaan hanya mengenal pasti fail audio.\n• Khutbah Jumaat – teks, PDF dan audio dimuat turun dari Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Fon – sesetengah fon dimuat turun melalui perkhidmatan Google Play (Google Fonts).\n• Kandungan anda – zikir, khatam, penanda dan sasaran disimpan pada peranti anda.\n\nStatistik penggunaan tidak terpaut pada identiti anda, tetapi pada kod pengguna rawak tanpa maklumat identiti (samaran). Jika sandaran Android dihidupkan, kod itu dimasukkan dalam sandaran anda, jadi memasang semula Vakit pada akaun Google yang sama dikira sebagai pengguna yang sama. Data itu hanya digunakan untuk menambah baik apl; ia tidak pernah dijual atau digunakan untuk pengiklanan. Vakit versi Android tidak mengandungi SDK pelaporan ranap atau pengiklanan."
      },
      {
        "t": "3. Sandaran dan penyegerakan (Google Backup)",
        "b": "Vakit menyimpan catatan ibadah anda (zikir, khatam, penanda, sasaran, masjid kegemaran) pada peranti anda. Jika sandaran Android dihidupkan, Android memasukkannya ke dalam ruang sandaran peribadi akaun Google anda sendiri:\n• Sandaran awan hanya digunakan pada peranti yang menyokong sandaran tersulit hujung ke hujung; kuncinya diperoleh daripada kunci skrin anda, jadi kami mahupun pihak ketiga tidak dapat membacanya.\n• Sandaran dipulihkan apabila anda memasang semula Vakit pada peranti yang log masuk dengan akaun Google yang sama.\n• Audio yang dimuat turun, pangkalan data kandungan terbina dalam dan cache tidak disandarkan.\n• Jika anda mematikan sandaran dalam Tetapan Android, data anda kekal hanya pada peranti anda."
      },
      {
        "t": "4. Perkhidmatan pihak ketiga",
        "b": "Vakit menggunakan perkhidmatan berikut untuk tujuan terhad. Tiada satu pun menerima identiti anda daripada Vakit:\n• Google – sandaran Android, geokod untuk nama bandar anda, Google Fonts, ulasan dalam apl Play (In-App Review) dan Google Maps apabila anda meminta arah.\n• OpenStreetMap (Overpass API) – carian masjid berdekatan (koordinat kawasan carian).\n• quran.com dan everyayah.com – audio bacaan al-Quran.\n• Diyanet İşleri Başkanlığı – teks dan audio khutbah Jumaat.\n• Cloudflare – penghantaran trafik ke pelayan Vakit (statistik penggunaan) dan pengedaran pek kandungan yang boleh dimuat turun.\nSetiap perkhidmatan memproses permintaan mengikut dasar privasinya sendiri."
      },
      {
        "t": "5. Pengiklanan",
        "b": "Vakit tidak memaparkan iklan dan tidak mengandungi SDK pengiklanan. ID pengiklanan anda tidak dibaca."
      },
      {
        "t": "6. Pembayaran",
        "b": "Vakit tidak mempunyai pembelian dalam apl dan tidak memproses sebarang maklumat pembayaran."
      },
      {
        "t": "7. Perkongsian data",
        "b": "Kami tidak menjual data anda atau berkongsinya untuk pemasaran. Hanya perkhidmatan yang disenaraikan di bawah “Perkhidmatan pihak ketiga” menerima data, dan hanya untuk tujuan yang dinyatakan di sana. Statistik penggunaan disimpan pada pelayan selamat kami di Jerman (Nuremberg), terpaut pada kod pengguna tanpa maklumat identiti, dan tidak dikongsi dengan pihak ketiga."
      },
      {
        "t": "8. Tempoh penyimpanan",
        "b": "• Data pada peranti anda – disimpan sehingga anda memadamnya (Tetapan → Padam akaun) atau menyahpasang Vakit.\n• Sandaran Android – disimpan sehingga anda mematikan sandaran atau memadamnya.\n• Audio yang dimuat turun – disimpan sehingga anda memadamnya dalam Tetapan → Simpanan atau menyahpasang Vakit.\n• Statistik penggunaan pada pelayan – disimpan untuk tujuan statistik agregat dan tidak dipadam secara automatik; dipadam atas permintaan."
      },
      {
        "t": "9. Keselamatan",
        "b": "Data anda kekal pada telefon anda, dilindungi oleh kotak pasir apl Android dan penyulitan peranti. Sandaran awan disulitkan hujung ke hujung dengan kunci yang diperoleh daripada kunci skrin anda. Semua sambungan rangkaian menggunakan HTTPS."
      },
      {
        "t": "10. Hak dan kawalan anda",
        "b": "Di bawah KVKK Turki dan GDPR EU, hak anda ialah:\n• Hak untuk mengetahui data yang diproses\n• Hak untuk membantah pemprosesan data (anda boleh menarik balik kebenaran Lokasi/Pemberitahuan melalui Tetapan Android → Apl → Vakit → Kebenaran)\n• Hak untuk meminta pemadaman (Tetapan → Padam akaun, atau nyahpasang apl; sandaran Google boleh dipadam daripada Tetapan Android). Jika anda mahu statistik penggunaan pada pelayan kami dipadam, cukup tulis ke hakancelikdev@gmail.com; permintaan anda dilaksanakan dalam tempoh 30 hari paling lewat.\n• Hak kemudahalihan data\n• Hak untuk memohon kepada Pihak Berkuasa KVKK\n\nUntuk permintaan: hakancelikdev@gmail.com (kami membalas dalam tempoh 30 hari paling lewat)."
      },
      {
        "t": "11. Privasi kanak-kanak",
        "b": "Vakit ditawarkan di Google Play dalam kategori “Semua (3+)”, tetapi kami tidak mengumpul data peribadi pengguna di bawah 13 tahun secara sedar. Jika anda mendapati data kanak-kanak di bawah 13 tahun telah dikumpul, sila tulis ke hakancelikdev@gmail.com; data berkenaan akan dipadam dengan segera."
      },
      {
        "t": "12. Perubahan dasar ini",
        "b": "Kami mungkin mengemas kini dasar ini apabila ciri apl atau keperluan undang-undang berubah. Tarikh “Kemas kini terakhir” pada halaman ini menunjukkan versi semasa."
      },
      {
        "t": "13. Hubungi",
        "b": "Soalan, permintaan atau maklum balas tentang privasi: hakancelikdev@gmail.com\n\nPengawal data: Hakan Çelik (Turki)"
      }
    ]
  },
  "nl": {
    "meta": {
      "title": "Vakit — Privacybeleid (Android)",
      "description": "Vakit respecteert je privacy. Je hebt geen account nodig en we verzamelen geen identiteitsgegevens zoals je naam, e-mailadres, telefoonnummer, foto's of contacten."
    },
    "titleBefore": "Privacybeleid ",
    "titleEm": "Android",
    "desc": "Laatst bijgewerkt: 6 oktober 2026\n\nVakit respecteert je privacy. Je hebt geen account nodig en we verzamelen geen identiteitsgegevens zoals je naam, e-mailadres, telefoonnummer, foto's of contacten. Gebedstijden, de Qibla-richting en herinneringen worden op je apparaat berekend. Je aanbiddingsgegevens (dhikr, chatm, bladwijzers, doelen, favoriete moskeeën) worden op je apparaat opgeslagen en, als Android-back-up aanstaat, in je eigen Google-account — ze worden nooit naar onze server gestuurd. Alleen gebruiksstatistieken worden naar onze server gestuurd, zodat we de app kunnen verbeteren; die gegevens zijn gekoppeld aan een gebruikerscode zonder identificerende gegevens. Er worden geen crashrapporten of advertentie-ID's verstuurd.",
    "sections": [
      {
        "t": "1. Gegevens die we verzamelen",
        "items": [
          {
            "name": "Locatiegegevens",
            "lines": [
              "Doel: De dagelijkse gebedstijden en de Qibla-richting berekenen, de naam van je plaats tonen en moskeeën in de buurt vinden",
              "Verwerking: Op je apparaat. Om de naam van je plaats te tonen, worden de coördinaten naar de geocoderingsdienst van Android (Google) gestuurd. Wanneer je Moskeeën in de buurt opent, worden de coördinaten van het zoekgebied naar OpenStreetMap (Overpass API) gestuurd. Coördinaten worden nooit naar een Vakit-server gestuurd.",
              "Bewaartermijn: Je laatste locatie blijft op je apparaat bewaard zodat gebedstijden offline berekend kunnen worden, totdat je die wijzigt of de app verwijdert. De locatie wordt alleen gelezen terwijl de app in gebruik is."
            ]
          },
          {
            "name": "Kompasgegevens",
            "lines": [
              "Doel: Qibla-kompas in realtime",
              "Verwerking: Alleen op het apparaat",
              "Bewaartermijn: Niet bewaard"
            ]
          },
          {
            "name": "Bewegingsgegevens",
            "lines": [
              "Doel: Het kompas soepel en stabiel houden (rotatievectorsensor)",
              "Verwerking: Alleen op het apparaat",
              "Bewaartermijn: Niet bewaard"
            ]
          },
          {
            "name": "Meldingsgegevens",
            "lines": [
              "Doel: Lokale gebedsmeldingen bezorgen",
              "Verwerking: AlarmManager / Android-meldingskanalen",
              "Bewaartermijn: Tot je ze uitschakelt of de app verwijdert"
            ]
          },
          {
            "name": "Instellingsgegevens",
            "lines": [
              "Doel: Je voorkeuren onthouden",
              "Verwerking: DataStore (algemene voorkeuren gaan onder de pseudonieme gebruikerscode naar onze server; persoonlijke inhoud zit er niet bij)",
              "Bewaartermijn: Tot je ze reset of de app verwijdert. Op de server worden voorkeursgegevens niet automatisch verwijderd; ze worden op verzoek verwijderd."
            ]
          },
          {
            "name": "Gebruiksstatistieken",
            "lines": [
              "Doel: Prestaties volgen, fouten opsporen en de ervaring verbeteren",
              "Verwerking: Onze beveiligde server in Duitsland (Neurenberg); gekoppeld aan een blijvende gebruikerscode zonder identificerende gegevens",
              "Bewaartermijn: Bewaard voor geaggregeerde statistieken en niet automatisch verwijderd (op verzoek verwijderd). Bevat geen identiteitsgegevens, maar is gekoppeld aan een blijvende gebruikerscode (een pseudoniem)."
            ]
          }
        ],
        "b": "We verzamelen niet je naam, e-mailadres, telefoonnummer, foto's, microfoon, camera, contacten, advertentie-ID of GPS-coördinaten. Vakit heeft geen accountsysteem. Je inhoud (dhikr-titels, bladwijzers, leesvoortgang, doelen) blijft op je apparaat (DataStore / lokale database) en wordt alleen in de Android-back-up opgenomen als back-up aanstaat; deze gegevens zelf worden nooit naar onze server gestuurd.\n\nWat wel naar onze server gaat: een gebruikerscode zonder identificerende gegevens, je land (geen GPS-coördinaten), apparaat- en versiegegevens, je app-voorkeuren (taal, berekeningsmethode, thema, rechtsschool, kalendertype, het voor de gebedsgids gekozen geslacht, meldings- en leesvoorkeuren voor Koran en hadith) en gebruiksstatistieken van functies. Die statistieken laten zien dát een onderdeel is gebruikt; de inhoud van je gegevens hoort er niet bij. De woorden waarop je in de app zoekt worden verstuurd: we noteren ze, tot 80 tekens, om te zien of de zoekfunctie vindt wat je nodig hebt en de resultaten te verbeteren."
      },
      {
        "t": "2. Hoe we je gegevens gebruiken",
        "b": "• Gebedstijden – offline op je apparaat berekend met de Adhan-bibliotheek; hiervoor worden geen coördinaten verstuurd.\n• Qibla-richting – locatie en kompaskoers worden op je apparaat gecombineerd.\n• Gebedsmeldingen – op je apparaat ingepland met AlarmManager; de Android-app ontvangt geen pushmeldingen op afstand.\n• Plaatsnaam – de coördinaten worden naar de geocoderingsdienst van Android (Google) gestuurd; bij handmatig zoeken naar een plaats wordt de tekst die je typt verstuurd.\n• Moskeeën in de buurt – de coördinaten van het zoekgebied worden naar OpenStreetMap (Overpass API) gestuurd. Routebeschrijving opent Google Maps met de locatie van de moskee.\n• Koranaudio – recitaties worden gestreamd of gedownload van quran.com en everyayah.com; een verzoek identificeert alleen het audiobestand.\n• Vrijdagpreek – de tekst, pdf en audio worden gedownload van Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Lettertypen – sommige lettertypen worden gedownload via Google Play-services (Google Fonts).\n• Je inhoud – dhikr, chatm, bladwijzers en doelen worden op je apparaat opgeslagen.\n\nGebruiksstatistieken zijn niet aan je identiteit gekoppeld maar aan een willekeurige gebruikerscode zonder identificerende gegevens (een pseudoniem). Als Android-back-up aanstaat, wordt de code in je back-up opgenomen; Vakit opnieuw installeren op hetzelfde Google-account telt dus als dezelfde gebruiker. De gegevens dienen alleen om de app te verbeteren; ze worden nooit verkocht of voor advertenties gebruikt. De Android-versie bevat geen crashrapportage- of advertentie-SDK."
      },
      {
        "t": "3. Back-up en synchronisatie (Google Backup)",
        "b": "Vakit slaat je aanbiddingsgegevens (dhikr, chatm, bladwijzers, doelen, favoriete moskeeën) op je apparaat op. Als Android-back-up aanstaat, neemt Android ze op in de privé-back-upruimte van je eigen Google-account:\n• Cloudback-up wordt alleen gebruikt op apparaten die end-to-end versleutelde back-ups ondersteunen; de sleutel wordt afgeleid van je schermvergrendeling, dus wij noch derden kunnen hem lezen.\n• De back-up wordt teruggezet wanneer je Vakit opnieuw installeert op een apparaat dat met hetzelfde Google-account is ingelogd.\n• Gedownloade audio, de meegeleverde inhoudsdatabase en caches worden niet geback-upt.\n• Als je back-up uitzet in de Android-instellingen, blijven je gegevens alleen op je apparaat."
      },
      {
        "t": "4. Diensten van derden",
        "b": "Vakit gebruikt de volgende diensten voor beperkte doeleinden. Geen van hen ontvangt je identiteit van Vakit:\n• Google – Android-back-up, geocodering voor je plaatsnaam, Google Fonts, Play In-App Review en Google Maps wanneer je om een routebeschrijving vraagt.\n• OpenStreetMap (Overpass API) – zoeken naar moskeeën in de buurt (coördinaten van het zoekgebied).\n• quran.com en everyayah.com – audio van Koranrecitaties.\n• Diyanet İşleri Başkanlığı – tekst en audio van de vrijdagpreek.\n• Cloudflare – doorgeven van verkeer naar de server van Vakit (gebruiksstatistieken) en levering van downloadbare inhoudspakketten.\nElke dienst verwerkt verzoeken volgens zijn eigen privacybeleid."
      },
      {
        "t": "5. Advertenties",
        "b": "Vakit toont geen advertenties en bevat geen advertentie-SDK. Je advertentie-ID wordt niet gelezen."
      },
      {
        "t": "6. Betalingen",
        "b": "Vakit heeft geen in-app aankopen en verwerkt geen betaalgegevens."
      },
      {
        "t": "7. Delen van gegevens",
        "b": "We verkopen je gegevens niet en delen ze niet voor marketing. Alleen de diensten die onder ‘Diensten van derden’ staan, ontvangen gegevens, en alleen voor het doel dat daar vermeld staat. Gebruiksstatistieken worden opgeslagen op onze beveiligde server in Duitsland (Neurenberg), gekoppeld aan een gebruikerscode zonder identificerende gegevens, en worden niet met derden gedeeld."
      },
      {
        "t": "8. Bewaartermijnen",
        "b": "• Gegevens op je apparaat – bewaard tot je ze verwijdert (Instellingen → Account verwijderen) of Vakit verwijdert.\n• Android-back-up – bewaard tot je back-up uitzet of de back-up verwijdert.\n• Gedownloade audio – bewaard tot je die verwijdert via Instellingen → Opslag of Vakit verwijdert.\n• Gebruiksstatistieken op de server – bewaard voor geaggregeerde statistiek en niet automatisch verwijderd; op verzoek verwijderd."
      },
      {
        "t": "9. Beveiliging",
        "b": "Je gegevens blijven op je telefoon, beschermd door de app-sandbox van Android en apparaatversleuteling. Cloudback-ups zijn end-to-end versleuteld met een sleutel die van je schermvergrendeling is afgeleid. Alle netwerkverbindingen gebruiken HTTPS."
      },
      {
        "t": "10. Je rechten en instellingen",
        "b": "Onder de Turkse KVKK en de Europese AVG (GDPR) heb je de volgende rechten:\n• Het recht om te weten welke gegevens worden verwerkt\n• Het recht om bezwaar te maken tegen gegevensverwerking (je kunt locatie- en meldingsrechten intrekken via Android-instellingen → Apps → Vakit → Rechten)\n• Het recht om verwijdering te vragen (Instellingen → Account verwijderen, of de app verwijderen; de Google-back-up kun je verwijderen via de Android-instellingen). Wil je dat de gebruiksstatistieken op onze server worden gewist, schrijf dan naar hakancelikdev@gmail.com; je verzoek wordt binnen uiterlijk 30 dagen afgehandeld.\n• Het recht op gegevensoverdraagbaarheid\n• Het recht om je tot de KVKK-autoriteit te wenden\n\nVoor verzoeken: hakancelikdev@gmail.com (we reageren uiterlijk binnen 30 dagen)."
      },
      {
        "t": "11. Privacy van kinderen",
        "b": "Vakit wordt op Google Play aangeboden in de categorie “Iedereen (3+)”, maar we verzamelen niet bewust persoonsgegevens van gebruikers onder de 13. Merk je dat er gegevens van een kind onder de 13 zijn verzameld, schrijf dan naar hakancelikdev@gmail.com; de betreffende gegevens worden onmiddellijk verwijderd."
      },
      {
        "t": "12. Wijzigingen in dit beleid",
        "b": "We kunnen dit beleid bijwerken wanneer app-functies of wettelijke vereisten veranderen. De datum ‘Laatst bijgewerkt’ op deze pagina toont de geldende versie."
      },
      {
        "t": "13. Contact",
        "b": "Voor privacyvragen, verzoeken of feedback: hakancelikdev@gmail.com\n\nVerwerkingsverantwoordelijke: Hakan Çelik (Turkije)"
      }
    ]
  },
  "pt": {
    "meta": {
      "title": "Vakit — Política de Privacidade (Android)",
      "description": "O Vakit respeita a tua privacidade. Não precisas de conta e não recolhemos dados de identidade como o teu nome, e-mail, número de telefone, fotografias ou contactos."
    },
    "titleBefore": "Política de Privacidade ",
    "titleEm": "Android",
    "desc": "Última atualização: 6 de outubro de 2026\n\nO Vakit respeita a tua privacidade. Não precisas de conta e não recolhemos dados de identidade como o teu nome, e-mail, número de telefone, fotografias ou contactos. Os horários das orações, a direção da Qibla e os lembretes são calculados no teu dispositivo. Os teus registos de adoração (dhikr, khatm, marcadores, metas, mesquitas favoritas) são guardados no teu dispositivo e, se a cópia de segurança do Android estiver ativada, na tua própria conta Google — nunca são enviados para o nosso servidor. Apenas estatísticas de utilização são enviadas para o nosso servidor, para podermos melhorar a app; esses dados estão ligados a um código de utilizador sem informação identificativa. Não são enviados relatórios de falhas nem identificadores de publicidade.",
    "sections": [
      {
        "t": "1. Informação que recolhemos",
        "items": [
          {
            "name": "Dados de localização",
            "lines": [
              "Finalidade: Calcular os horários diários das orações e a direção da Qibla, mostrar o nome da tua cidade e encontrar mesquitas perto",
              "Processamento: No teu dispositivo. Para mostrar o nome da tua cidade, as coordenadas são enviadas para o serviço de geocodificação do Android (Google). Quando abres Mesquitas perto, as coordenadas da área de pesquisa são enviadas para o OpenStreetMap (Overpass API). As coordenadas nunca são enviadas para um servidor do Vakit.",
              "Conservação: A tua última localização fica guardada no dispositivo para que os horários das orações possam ser calculados offline, até a alterares ou apagares a app. A localização só é lida enquanto a app está a ser usada."
            ]
          },
          {
            "name": "Dados de rumo",
            "lines": [
              "Finalidade: Bússola da Qibla em tempo real",
              "Processamento: Apenas no dispositivo",
              "Conservação: Não é guardado"
            ]
          },
          {
            "name": "Dados de movimento",
            "lines": [
              "Finalidade: Suavização e estabilidade da bússola (sensor de vetor de rotação)",
              "Processamento: Apenas no dispositivo",
              "Conservação: Não é guardado"
            ]
          },
          {
            "name": "Dados de notificações",
            "lines": [
              "Finalidade: Entregar notificações locais das orações",
              "Processamento: AlarmManager / canais de notificação do Android",
              "Conservação: Até desativares ou apagares a app"
            ]
          },
          {
            "name": "Dados das definições",
            "lines": [
              "Finalidade: Recordar as tuas preferências",
              "Processamento: DataStore (as preferências gerais são enviadas para o nosso servidor sob o código de utilizador pseudónimo; não inclui conteúdo pessoal)",
              "Conservação: Até repores ou apagares a app. Os dados de preferências no servidor não são apagados automaticamente; são apagados mediante pedido."
            ]
          },
          {
            "name": "Estatísticas de utilização",
            "lines": [
              "Finalidade: Acompanhar o desempenho da app, detetar erros e melhorar a experiência",
              "Processamento: O nosso servidor seguro na Alemanha (Nuremberga); ligado a um código de utilizador permanente que não contém informação identificativa",
              "Conservação: Guardado para estatísticas agregadas e não apagado automaticamente (apagado mediante pedido). Não contém dados de identidade, mas está ligado a um código de utilizador permanente (um pseudónimo)."
            ]
          }
        ],
        "b": "Não recolhemos o teu nome, e-mail, número de telefone, fotografias, microfone, câmara, contactos, ID de publicidade nem coordenadas GPS. O Vakit não tem sistema de contas. O teu conteúdo (títulos de dhikr, marcadores, progresso de leitura, metas) fica no teu dispositivo (DataStore / base de dados local) e só é incluído na cópia de segurança do Android se esta estiver ativada; estes registos em si nunca são enviados para o nosso servidor.\n\nO que vai para o nosso servidor: um código de utilizador sem informação identificativa, o teu país (não coordenadas GPS), informação do dispositivo e da versão, as tuas preferências da app (idioma, método de cálculo, tema, escola, tipo de calendário, o género escolhido para o guia da oração, preferências de notificações e de leitura do Alcorão e dos hadiths) e estatísticas de utilização das funcionalidades. Essas estatísticas mostram que uma secção foi usada; não incluem o conteúdo dos teus registos. As palavras que procuras dentro da app são enviadas: guardamo-las, até 80 caracteres, para vermos se a pesquisa encontra o que precisas e melhorarmos os resultados."
      },
      {
        "t": "2. Como usamos os teus dados",
        "b": "• Horários das orações – calculados offline no teu dispositivo com a biblioteca Adhan; para isso não são enviadas coordenadas.\n• Direção da Qibla – a localização e o rumo da bússola são combinados no teu dispositivo.\n• Notificações de oração – agendadas no teu dispositivo com o AlarmManager; a app Android não recebe notificações push remotas.\n• Nome da cidade – as coordenadas são enviadas para o serviço de geocodificação do Android (Google); uma pesquisa manual de cidade envia o texto que escreves.\n• Mesquitas perto – as coordenadas da área de pesquisa são enviadas para o OpenStreetMap (Overpass API). As direções abrem o Google Maps com a localização da mesquita.\n• Áudio do Alcorão – as recitações são transmitidas ou transferidas de quran.com e everyayah.com; um pedido identifica apenas o ficheiro de áudio.\n• Sermão de sexta-feira – o texto, o PDF e o áudio são transferidos da Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Tipos de letra – alguns tipos de letra são transferidos através dos serviços Google Play (Google Fonts).\n• O teu conteúdo – dhikr, khatm, marcadores e metas são guardados no teu dispositivo.\n\nAs estatísticas de utilização não estão ligadas à tua identidade, mas a um código de utilizador aleatório sem informação identificativa (um pseudónimo). Se a cópia de segurança do Android estiver ativada, o código é incluído na tua cópia de segurança, pelo que reinstalar o Vakit na mesma conta Google conta como o mesmo utilizador. Os dados servem apenas para melhorar a app; nunca são vendidos nem usados para publicidade. A versão Android não contém nenhum SDK de relatórios de falhas ou de publicidade."
      },
      {
        "t": "3. Cópia de segurança e sincronização (Google Backup)",
        "b": "O Vakit guarda os teus registos de adoração (dhikr, khatm, marcadores, metas, mesquitas favoritas) no teu dispositivo. Se a cópia de segurança do Android estiver ativada, o Android inclui-os no espaço de cópia privado da tua própria conta Google:\n• A cópia na nuvem só é usada em dispositivos que suportam cópias de segurança encriptadas ponto a ponto; a chave é derivada do teu bloqueio de ecrã, pelo que nem nós nem terceiros a conseguimos ler.\n• A cópia é restaurada quando reinstalas o Vakit num dispositivo com sessão iniciada na mesma conta Google.\n• O áudio transferido, a base de dados de conteúdo incluída e as caches não são copiados.\n• Se desativares a cópia de segurança nas Definições do Android, os teus dados ficam apenas no teu dispositivo."
      },
      {
        "t": "4. Serviços de terceiros",
        "b": "O Vakit usa os seguintes serviços para fins limitados. Nenhum deles recebe a tua identidade por parte do Vakit:\n• Google – cópia de segurança do Android, geocodificação para o nome da tua cidade, Google Fonts, avaliação na app do Play (In-App Review) e Google Maps quando pedes direções.\n• OpenStreetMap (Overpass API) – pesquisa de mesquitas perto (coordenadas da área de pesquisa).\n• quran.com e everyayah.com – áudio de recitação do Alcorão.\n• Diyanet İşleri Başkanlığı – texto e áudio do sermão de sexta-feira.\n• Cloudflare – encaminhamento do tráfego para o servidor da Vakit (estatísticas de utilização) e distribuição dos pacotes de conteúdo transferíveis.\nCada serviço trata os pedidos segundo a sua própria política de privacidade."
      },
      {
        "t": "5. Publicidade",
        "b": "O Vakit não mostra anúncios e não contém nenhum SDK de publicidade. O teu ID de publicidade não é lido."
      },
      {
        "t": "6. Pagamentos",
        "b": "O Vakit não tem compras dentro da app e não trata nenhuma informação de pagamento."
      },
      {
        "t": "7. Partilha de dados",
        "b": "Não vendemos os teus dados nem os partilhamos para marketing. Só os serviços indicados em «Serviços de terceiros» recebem dados, e apenas para a finalidade aí indicada. As estatísticas de utilização são guardadas no nosso servidor seguro na Alemanha (Nuremberga), ligadas a um código de utilizador sem informação identificativa, e não são partilhadas com terceiros."
      },
      {
        "t": "8. Prazos de conservação",
        "b": "• Dados no teu dispositivo – guardados até os apagares (Definições → Apagar a conta) ou desinstalares o Vakit.\n• Cópia de segurança do Android – guardada até desativares a cópia ou a apagares.\n• Áudio transferido – guardado até o apagares em Definições → Armazenamento ou desinstalares o Vakit.\n• Estatísticas de utilização no servidor – guardadas para fins estatísticos agregados e não apagadas automaticamente; apagadas mediante pedido."
      },
      {
        "t": "9. Segurança",
        "b": "Os teus dados ficam no teu telemóvel, protegidos pela sandbox de apps do Android e pela encriptação do dispositivo. As cópias na nuvem são encriptadas ponto a ponto com uma chave derivada do teu bloqueio de ecrã. Todas as ligações de rede usam HTTPS."
      },
      {
        "t": "10. Os teus direitos e controlos",
        "b": "Ao abrigo da KVKK turca e do RGPD da UE (GDPR), os teus direitos são:\n• O direito de saber que dados são tratados\n• O direito de te opores ao tratamento de dados (podes revogar as permissões de Localização/Notificações em Definições do Android → Apps → Vakit → Permissões)\n• O direito de pedir a eliminação (Definições → Apagar a conta, ou desinstalar a app; podes apagar a cópia de segurança do Google nas Definições do Android). Para apagarmos as estatísticas de utilização no nosso servidor, basta escreveres para hakancelikdev@gmail.com; o pedido é cumprido no prazo máximo de 30 dias.\n• O direito à portabilidade dos dados\n• O direito de apresentar um pedido à Autoridade KVKK\n\nPara pedidos: hakancelikdev@gmail.com (respondemos no prazo máximo de 30 dias)."
      },
      {
        "t": "11. Privacidade das crianças",
        "b": "O Vakit é oferecido no Google Play na categoria «Todos (3+)», mas não recolhemos conscientemente dados pessoais de utilizadores com menos de 13 anos. Se souberes que foram recolhidos dados de uma criança com menos de 13 anos, escreve para hakancelikdev@gmail.com; os dados em causa serão apagados de imediato."
      },
      {
        "t": "12. Alterações a esta política",
        "b": "Podemos atualizar esta política quando as funcionalidades da app ou os requisitos legais mudarem. A data de «Última atualização» nesta página indica a versão em vigor."
      },
      {
        "t": "13. Contacto",
        "b": "Para questões de privacidade, pedidos ou comentários: hakancelikdev@gmail.com\n\nResponsável pelo tratamento: Hakan Çelik (Turquia)"
      }
    ]
  },
  "ru": {
    "meta": {
      "title": "Vakit — Политика конфиденциальности (Android)",
      "description": "Vakit уважает вашу конфиденциальность. Учётная запись не нужна, и мы не собираем идентифицирующие данные, такие как имя, e-mail, номер телефона, фотографии или контакты."
    },
    "titleBefore": "Политика конфиденциальности ",
    "titleEm": "Android",
    "desc": "Обновлено: 6 октября 2026 г.\n\nVakit уважает вашу конфиденциальность. Учётная запись не нужна, и мы не собираем идентифицирующие данные, такие как имя, e-mail, номер телефона, фотографии или контакты. Время молитв, направление на киблу и напоминания рассчитываются на вашем устройстве. Ваши записи поклонения (зикры, хатм, закладки, цели, любимые мечети) хранятся на устройстве и, если включено резервное копирование Android, в вашем собственном аккаунте Google — они никогда не отправляются на наш сервер. На наш сервер отправляется только статистика использования, чтобы мы могли улучшать приложение; эти данные привязаны к коду пользователя без идентифицирующих сведений. Отчёты о сбоях и рекламные идентификаторы не отправляются.",
    "sections": [
      {
        "t": "1. Какие данные мы собираем",
        "items": [
          {
            "name": "Данные геопозиции",
            "lines": [
              "Цель: Расчёт ежедневного времени молитв и направления на киблу, отображение названия вашего города и поиск мечетей рядом",
              "Обработка: На вашем устройстве. Чтобы показать название города, координаты отправляются в службу геокодирования Android (Google). Когда вы открываете «Мечети рядом», координаты области поиска отправляются в OpenStreetMap (Overpass API). Координаты никогда не отправляются на сервер Vakit.",
              "Хранение: Ваше последнее местоположение хранится на устройстве, чтобы время молитв можно было рассчитать без интернета, пока вы его не измените или не удалите приложение. Местоположение считывается только во время использования приложения."
            ]
          },
          {
            "name": "Данные курса",
            "lines": [
              "Цель: Компас киблы в реальном времени",
              "Обработка: Только на устройстве",
              "Хранение: Не сохраняется"
            ]
          },
          {
            "name": "Данные движения",
            "lines": [
              "Цель: Сглаживание и устойчивость компаса (датчик вектора вращения)",
              "Обработка: Только на устройстве",
              "Хранение: Не сохраняется"
            ]
          },
          {
            "name": "Данные уведомлений",
            "lines": [
              "Цель: Доставка локальных уведомлений о молитвах",
              "Обработка: AlarmManager / каналы уведомлений Android",
              "Хранение: Пока вы их не отключите или не удалите приложение"
            ]
          },
          {
            "name": "Данные настроек",
            "lines": [
              "Цель: Запоминание ваших предпочтений",
              "Обработка: DataStore (общие предпочтения отправляются на наш сервер под псевдонимным кодом пользователя; личное содержимое не включается)",
              "Хранение: Пока вы не сбросите или не удалите приложение. На сервере данные предпочтений не удаляются автоматически; они удаляются по запросу."
            ]
          },
          {
            "name": "Статистика использования",
            "lines": [
              "Цель: Следить за работой приложения, находить ошибки и улучшать опыт",
              "Обработка: Наш защищённый сервер в Германии (Нюрнберг); привязано к постоянному коду пользователя без идентифицирующих данных",
              "Хранение: Хранится для сводной статистики и не удаляется автоматически (удаляется по запросу). Не содержит данных о личности, но привязано к постоянному коду пользователя (псевдониму)."
            ]
          }
        ],
        "b": "Мы не собираем ваше имя, e-mail, номер телефона, фотографии, данные микрофона и камеры, контакты, рекламный идентификатор или координаты GPS. У Vakit нет системы учётных записей. Ваш контент (названия зикров, закладки, прогресс чтения, цели) остаётся на устройстве (DataStore / локальная база данных) и попадает в резервную копию Android, только если резервное копирование включено; сами эти записи никогда не отправляются на наш сервер.\n\nЧто уходит на наш сервер: код пользователя без идентифицирующих сведений, ваша страна (не координаты GPS), сведения об устройстве и версии, ваши предпочтения в приложении (язык, метод расчёта, тема, мазхаб, тип календаря, выбранный для руководства по молитве пол, настройки уведомлений и чтения Корана и хадисов) и статистика использования функций. Эта статистика показывает, что раздел был использован; содержимого ваших записей она не включает. Слова, которые вы ищете внутри приложения, отправляются: мы сохраняем их, не более 80 символов, чтобы понять, находит ли поиск нужное, и улучшить результаты."
      },
      {
        "t": "2. Как мы используем ваши данные",
        "b": "• Время молитв – рассчитывается без интернета на устройстве с помощью библиотеки Adhan; координаты для этого не отправляются.\n• Направление на киблу – местоположение и показания компаса объединяются на устройстве.\n• Уведомления о молитвах – планируются на устройстве через AlarmManager; Android-приложение не получает удалённых push-уведомлений.\n• Название города – координаты отправляются в службу геокодирования Android (Google); при ручном поиске города отправляется введённый вами текст.\n• Мечети рядом – координаты области поиска отправляются в OpenStreetMap (Overpass API). Построение маршрута открывает Google Maps с местоположением мечети.\n• Аудио Корана – чтения воспроизводятся потоком или скачиваются с quran.com и everyayah.com; запрос указывает только аудиофайл.\n• Пятничная проповедь – текст, PDF и аудио скачиваются с сайта Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Шрифты – некоторые шрифты скачиваются через сервисы Google Play (Google Fonts).\n• Ваш контент – зикры, хатм, закладки и цели хранятся на устройстве.\n\nСтатистика использования привязана не к вашей личности, а к случайному коду пользователя без идентифицирующих сведений (псевдониму). Если включено резервное копирование Android, этот код попадает в вашу резервную копию, поэтому при повторной установке Vakit с тем же аккаунтом Google вы считаетесь тем же пользователем. Данные используются только для улучшения приложения; они никогда не продаются и не используются для рекламы. Android-версия не содержит SDK для отчётов о сбоях или рекламы."
      },
      {
        "t": "3. Резервное копирование и синхронизация (Google Backup)",
        "b": "Vakit хранит ваши записи поклонения (зикры, хатм, закладки, цели, любимые мечети) на устройстве. Если резервное копирование Android включено, Android добавляет их в личное хранилище резервных копий вашего собственного аккаунта Google:\n• Облачное резервное копирование используется только на устройствах, поддерживающих сквозное шифрование резервных копий; ключ выводится из блокировки экрана, поэтому ни мы, ни третьи лица не можем их прочитать.\n• Резервная копия восстанавливается, когда вы переустанавливаете Vakit на устройстве, где выполнен вход в тот же аккаунт Google.\n• Скачанное аудио, встроенная база контента и кеш не копируются.\n• Если вы отключите резервное копирование в настройках Android, ваши данные останутся только на устройстве."
      },
      {
        "t": "4. Сторонние сервисы",
        "b": "Vakit использует следующие сервисы в ограниченных целях. Ни один из них не получает от Vakit сведений о вашей личности:\n• Google – резервное копирование Android, геокодирование для названия города, Google Fonts, отзывы в приложении Play (In-App Review) и Google Maps, когда вы запрашиваете маршрут.\n• OpenStreetMap (Overpass API) – поиск мечетей рядом (координаты области поиска).\n• quran.com и everyayah.com – аудио чтения Корана.\n• Diyanet İşleri Başkanlığı – текст и аудио пятничной проповеди.\n• Cloudflare – передача трафика на сервер Vakit (статистика использования) и доставка загружаемых пакетов контента.\nКаждый сервис обрабатывает запросы в соответствии со своей политикой конфиденциальности."
      },
      {
        "t": "5. Реклама",
        "b": "Vakit не показывает рекламу и не содержит рекламных SDK. Ваш рекламный идентификатор не считывается."
      },
      {
        "t": "6. Платежи",
        "b": "В Vakit нет покупок в приложении, и платёжные данные не обрабатываются."
      },
      {
        "t": "7. Передача данных",
        "b": "Мы не продаём ваши данные и не передаём их в маркетинговых целях. Данные получают только сервисы, перечисленные в разделе «Сторонние сервисы», и только для указанной там цели. Статистика использования хранится на нашем защищённом сервере в Германии (Нюрнберг), привязана к коду пользователя без идентифицирующих сведений и не передаётся третьим лицам."
      },
      {
        "t": "8. Сроки хранения",
        "b": "• Данные на устройстве – хранятся, пока вы их не удалите (Настройки → Удалить учётную запись) или не удалите Vakit.\n• Резервная копия Android – хранится, пока вы не отключите резервное копирование или не удалите её.\n• Скачанное аудио – хранится, пока вы не удалите его в разделе Настройки → Хранилище или не удалите Vakit.\n• Статистика использования на сервере – хранится для сводной статистики и не удаляется автоматически; удаляется по запросу."
      },
      {
        "t": "9. Безопасность",
        "b": "Ваши данные остаются на телефоне и защищены песочницей приложений Android и шифрованием устройства. Облачные резервные копии защищены сквозным шифрованием с ключом, выведенным из блокировки экрана. Все сетевые подключения используют HTTPS."
      },
      {
        "t": "10. Ваши права и управление",
        "b": "По турецкому закону KVKK и GDPR ЕС у вас есть следующие права:\n• Право знать, какие данные обрабатываются\n• Право возразить против обработки данных (разрешения на геолокацию и уведомления можно отозвать в разделе Настройки Android → Приложения → Vakit → Разрешения)\n• Право потребовать удаления (Настройки → Удалить учётную запись или удалить приложение; резервную копию Google можно удалить в настройках Android). Чтобы удалить статистику использования на нашем сервере, просто напишите на hakancelikdev@gmail.com; запрос выполняется не позднее чем через 30 дней.\n• Право на переносимость данных\n• Право обратиться в Управление KVKK\n\nДля запросов: hakancelikdev@gmail.com (мы отвечаем не позднее чем через 30 дней)."
      },
      {
        "t": "11. Приватность детей",
        "b": "Vakit распространяется в Google Play в категории «Для всех (3+)», но мы сознательно не собираем персональные данные пользователей младше 13 лет. Если вы узнали, что были собраны данные ребёнка младше 13 лет, напишите на hakancelikdev@gmail.com — соответствующие данные будут немедленно удалены."
      },
      {
        "t": "12. Изменения этой политики",
        "b": "Мы можем обновлять эту политику при изменении функций приложения или требований закона. Дата «Обновлено» на этой странице указывает действующую версию."
      },
      {
        "t": "13. Контакты",
        "b": "Вопросы, запросы или отзывы по приватности: hakancelikdev@gmail.com\n\nОператор данных: Хакан Челик (Турция)"
      }
    ]
  },
  "sq": {
    "meta": {
      "title": "Vakit — Politika e privatësisë (Android)",
      "description": "Vakit e respekton privatësinë tuaj. Nuk ju nevojitet llogari dhe nuk mbledhim të dhëna identiteti si emri, e-maili, numri i telefonit, fotografitë apo kontaktet tuaja."
    },
    "titleBefore": "Politika e privatësisë ",
    "titleEm": "Android",
    "desc": "Përditësimi i fundit: 6 tetor 2026\n\nVakit e respekton privatësinë tuaj. Nuk ju nevojitet llogari dhe nuk mbledhim të dhëna identiteti si emri, e-maili, numri i telefonit, fotografitë apo kontaktet tuaja. Kohët e namazit, drejtimi i kiblës dhe kujtesat llogariten në pajisjen tuaj. Regjistrimet tuaja të ibadetit (dhikri, hatmja, shënuesit, synimet, xhamitë e preferuara) ruhen në pajisjen tuaj dhe, nëse kopjeruajtja e Android-it është aktive, në llogarinë tuaj Google — ato nuk dërgohen kurrë në serverin tonë. Në serverin tonë dërgohen vetëm statistikat e përdorimit, që të mund ta përmirësojmë aplikacionin; këto të dhëna janë të lidhura me një kod përdoruesi që nuk përmban asnjë informacion identifikues. Nuk dërgohen raporte ndërprerjesh apo identifikues reklamash.",
    "sections": [
      {
        "t": "1. Të dhënat që mbledhim",
        "items": [
          {
            "name": "Të dhënat e vendndodhjes",
            "lines": [
              "Qëllimi: Llogaritja e kohëve ditore të namazit dhe e drejtimit të kiblës, shfaqja e emrit të qytetit tuaj dhe gjetja e xhamive afër",
              "Përpunimi: Në pajisjen tuaj. Për të shfaqur emrin e qytetit, koordinatat dërgohen te shërbimi i gjeokodimit të Android-it (Google). Kur hapni Xhamitë afër, koordinatat e zonës së kërkimit dërgohen te OpenStreetMap (Overpass API). Koordinatat nuk dërgohen kurrë te një server i Vakit.",
              "Ruajtja: Vendndodhja juaj e fundit ruhet në pajisje që kohët e namazit të llogariten pa internet, derisa ta ndryshoni ose ta fshini aplikacionin. Vendndodhja lexohet vetëm kur aplikacioni është në përdorim."
            ]
          },
          {
            "name": "Të dhënat e drejtimit",
            "lines": [
              "Qëllimi: Busull kible në kohë reale",
              "Përpunimi: Vetëm në pajisje",
              "Ruajtja: Nuk ruhet"
            ]
          },
          {
            "name": "Të dhënat e lëvizjes",
            "lines": [
              "Qëllimi: Zbutja dhe qëndrueshmëria e busullës (sensori i vektorit të rrotullimit)",
              "Përpunimi: Vetëm në pajisje",
              "Ruajtja: Nuk ruhet"
            ]
          },
          {
            "name": "Të dhënat e njoftimeve",
            "lines": [
              "Qëllimi: Dërgimi i njoftimeve lokale të namazit",
              "Përpunimi: AlarmManager / Kanalet e njoftimeve të Android",
              "Ruajtja: Derisa të çaktivizohen ose të fshihet aplikacioni"
            ]
          },
          {
            "name": "Të dhënat e cilësimeve",
            "lines": [
              "Qëllimi: Për të kujtuar preferencat tuaja",
              "Përpunimi: DataStore (preferencat e përgjithshme dërgohen në serverin tonë nën kodin pseudonim të përdoruesit; nuk përfshihet asnjë përmbajtje personale)",
              "Ruajtja: Derisa të rivendosen ose të fshihet aplikacioni. Të dhënat e preferencave në server nuk fshihen automatikisht; ato fshihen me kërkesë."
            ]
          },
          {
            "name": "Statistikat e përdorimit",
            "lines": [
              "Qëllimi: Monitorimi i performancës së aplikacionit, zbulimi i gabimeve dhe përmirësimi i përvojës",
              "Përpunimi: Serveri ynë i sigurt në Gjermani (Nuremberg); i lidhur me një kod të përhershëm përdoruesi që nuk përmban asnjë informacion identifikues",
              "Ruajtja: Ruhen për statistika të përmbledhura dhe nuk fshihen automatikisht (fshihen me kërkesë). Nuk përmbajnë të dhëna identiteti, por janë të lidhura me një kod të përhershëm përdoruesi (pseudonim)."
            ]
          }
        ],
        "b": "Nuk mbledhim emrin, e-mailin, numrin e telefonit, fotografitë, mikrofonin, kamerën, kontaktet, ID-në tuaj të reklamave apo koordinatat GPS. Vakit nuk ka sistem llogarish. Përmbajtja juaj (titujt e dhikrit, shënuesit, përparimi i leximit, synimet) mbetet në pajisjen tuaj (DataStore / bazë të dhënash lokale) dhe përfshihet në kopjeruajtjen e Android-it vetëm nëse kopjeruajtja është aktive; vetë këto regjistrime nuk dërgohen kurrë në serverin tonë.\n\nÇfarë shkon në serverin tonë: një kod përdoruesi që nuk përmban asnjë informacion identifikues, shteti juaj (jo koordinata GPS), informacioni i pajisjes dhe i versionit, preferencat tuaja të aplikacionit (gjuha, metoda e llogaritjes, tema, medhhebi, lloji i kalendarit, gjinia që zgjodhët për udhëzuesin e namazit, preferencat e njoftimeve dhe të leximit të Kuranit/hadithit) dhe statistikat e përdorimit të veçorive. Ato statistika tregojnë se një pjesë u përdor; ato nuk përfshijnë përmbajtjen e regjistrimeve tuaja. Fjalët që kërkoni brenda aplikacionit dërgohen: ne i regjistrojmë, deri në 80 karaktere, për të parë nëse kërkimi gjen atë që ju duhet dhe për të përmirësuar rezultatet."
      },
      {
        "t": "2. Si i përdorim të dhënat tuaja",
        "b": "• Kohët e namazit – llogariten pa internet në pajisjen tuaj me bibliotekën Adhan; për këtë nuk dërgohen koordinata.\n• Drejtimi i kiblës – vendndodhja dhe drejtimi i busullës kombinohen në pajisjen tuaj.\n• Njoftimet e namazit – planifikohen në pajisjen tuaj me AlarmManager; aplikacioni Android nuk merr njoftime push nga larg.\n• Emri i qytetit – koordinatat dërgohen te shërbimi i gjeokodimit të Android-it (Google); kërkimi manual i qytetit dërgon tekstin që shkruani.\n• Xhamitë afër – koordinatat e zonës së kërkimit dërgohen te OpenStreetMap (Overpass API). Udhëzimet e rrugës hapin Google Maps me vendndodhjen e xhamisë.\n• Audioja e Kuranit – leximet transmetohen ose shkarkohen nga quran.com dhe everyayah.com; një kërkesë identifikon vetëm skedarin audio.\n• Hutbeja e xhumasë – teksti, PDF-ja dhe audioja shkarkohen nga Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Shkronjat – disa shkronja shkarkohen përmes shërbimeve Google Play (Google Fonts).\n• Përmbajtja juaj – dhikri, hatmja, shënuesit dhe synimet ruhen në pajisjen tuaj.\n\nStatistikat e përdorimit nuk janë të lidhura me identitetin tuaj, por me një kod të rastësishëm përdoruesi që nuk përmban asnjë informacion identifikues (pseudonim). Nëse kopjeruajtja e Android-it është aktive, kodi përfshihet në kopjeruajtjen tuaj, prandaj riinstalimi i Vakit në të njëjtën llogari Google numërohet si i njëjti përdorues. Të dhënat përdoren vetëm për të përmirësuar aplikacionin; ato nuk shiten kurrë dhe nuk përdoren për reklama. Versioni Android nuk përmban asnjë SDK raportimi ndërprerjesh apo reklamash."
      },
      {
        "t": "3. Rezervimi dhe sinkronizimi (Google Backup)",
        "b": "Vakit i ruan regjistrimet tuaja të ibadetit (dhikri, hatmja, shënuesit, synimet, xhamitë e preferuara) në pajisjen tuaj. Nëse kopjeruajtja e Android-it është aktive, Android i përfshin ato në hapësirën private të kopjeruajtjes së llogarisë suaj Google:\n• Kopjeruajtja në re përdoret vetëm në pajisjet që mbështesin kopjeruajtje të enkriptuara nga skaji në skaj; çelësi rrjedh nga kyçja e ekranit tuaj, prandaj as ne, as palët e treta nuk mund ta lexojmë.\n• Kopjeruajtja rikthehet kur e riinstaloni Vakit në një pajisje të identifikuar me të njëjtën llogari Google.\n• Audiot e shkarkuara, baza e përmbajtjes që vjen me aplikacionin dhe memoriet e përkohshme nuk kopjeruhen.\n• Nëse e çaktivizoni kopjeruajtjen te Cilësimet e Android-it, të dhënat tuaja mbeten vetëm në pajisjen tuaj."
      },
      {
        "t": "4. Shërbimet e palëve të treta",
        "b": "Vakit përdor shërbimet e mëposhtme për qëllime të kufizuara. Asnjëri prej tyre nuk e merr identitetin tuaj nga Vakit:\n• Google – kopjeruajtja e Android-it, gjeokodimi për emrin e qytetit, Google Fonts, vlerësimi brenda aplikacionit i Play (In-App Review) dhe Google Maps kur kërkoni udhëzime rruge.\n• OpenStreetMap (Overpass API) – kërkimi i xhamive afër (koordinatat e zonës së kërkimit).\n• quran.com dhe everyayah.com – audio e leximit të Kuranit.\n• Diyanet İşleri Başkanlığı – teksti dhe audioja e hutbes së xhumasë.\n• Cloudflare – përcjellja e trafikut drejt serverit të Vakit (statistikat e përdorimit) dhe shpërndarja e paketave të përmbajtjes që mund të shkarkohen.\nÇdo shërbim i përpunon kërkesat sipas politikës së vet të privatësisë."
      },
      {
        "t": "5. Reklamat",
        "b": "Vakit nuk shfaq reklama dhe nuk përmban asnjë SDK reklamash. ID-ja juaj e reklamave nuk lexohet."
      },
      {
        "t": "6. Pagesat",
        "b": "Vakit nuk ka blerje brenda aplikacionit dhe nuk përpunon asnjë të dhënë pagese."
      },
      {
        "t": "7. Ndarja e të dhënave",
        "b": "Nuk i shesim të dhënat tuaja dhe nuk i ndajmë për marketing. Vetëm shërbimet e renditura te «Shërbimet e palëve të treta» marrin të dhëna, dhe vetëm për qëllimin e shënuar atje. Statistikat e përdorimit ruhen në serverin tonë të sigurt në Gjermani (Nuremberg), të lidhura me një kod përdoruesi që nuk përmban asnjë informacion identifikues, dhe nuk ndahen me palë të treta."
      },
      {
        "t": "8. Ruajtja e të dhënave",
        "b": "• Të dhënat në pajisjen tuaj – ruhen derisa t'i fshini (Cilësimet → Fshini Llogarinë) ose ta çinstaloni Vakit.\n• Kopjeruajtja e Android-it – ruhet derisa ta çaktivizoni kopjeruajtjen ose ta fshini.\n• Audiot e shkarkuara – ruhen derisa t'i fshini te Cilësimet → Hapësira ose ta çinstaloni Vakit.\n• Statistikat e përdorimit në server – mbahen për qëllime statistikore të përgjithshme dhe nuk fshihen automatikisht; fshihen me kërkesë."
      },
      {
        "t": "9. Siguria",
        "b": "Të dhënat tuaja mbeten në telefonin tuaj, të mbrojtura nga mjedisi i izoluar i aplikacioneve (sandbox) i Android-it dhe nga enkriptimi i pajisjes. Kopjeruajtjet në re enkriptohen nga skaji në skaj me një çelës që rrjedh nga kyçja e ekranit tuaj. Të gjitha lidhjet e rrjetit përdorin HTTPS."
      },
      {
        "t": "10. Të drejtat dhe kontrollet tuaja",
        "b": "Sipas KVKK-së së Turqisë dhe GDPR-së së BE-së, të drejtat tuaja janë:\n• E drejta për të mësuar cilat të dhëna përpunohen\n• E drejta për të kundërshtuar përpunimin e të dhënave (mund t'i revokoni lejet e Vendndodhjes/Njoftimeve te Cilësimet e Android-it → Aplikacionet → Vakit → Lejet)\n• E drejta për të kërkuar fshirjen (Cilësimet → Fshini Llogarinë, ose çinstaloni aplikacionin; kopjeruajtjen e Google mund ta fshini nga Cilësimet e Android-it). Për të fshirë statistikat e përdorimit në serverin tonë, mjafton të na shkruani në hakancelikdev@gmail.com; kërkesa juaj plotësohet brenda 30 ditësh më së voni.\n• E drejta e transferueshmërisë së të dhënave\n• E drejta për t'iu drejtuar Autoritetit KVKK\n\nPër kërkesa: hakancelikdev@gmail.com (përgjigjemi brenda 30 ditëve më së voni)."
      },
      {
        "t": "11. Privatësia e fëmijëve",
        "b": "Vakit ofrohet në Google Play në kategorinë “Të gjithë (3+)”, por nuk mbledhim me vetëdije të dhëna personale nga përdorues nën 13 vjeç. Nëse mësoni se janë mbledhur të dhëna të një fëmije nën 13 vjeç, ju lutemi shkruani në hakancelikdev@gmail.com; të dhënat përkatëse do të fshihen menjëherë."
      },
      {
        "t": "12. Ndryshimet e kësaj politike",
        "b": "Mund ta përditësojmë këtë politikë kur ndryshojnë funksionet e aplikacionit ose kërkesat ligjore. Data e «Përditësimi i fundit» në këtë faqe tregon versionin në fuqi."
      },
      {
        "t": "13. Kontakti",
        "b": "Për pyetje, kërkesa ose komente rreth privatësisë: hakancelikdev@gmail.com\n\nKontrollues i të dhënave: Hakan Çelik (Turqi)"
      }
    ]
  },
  "sw": {
    "meta": {
      "title": "Vakit — Sera ya Faragha (Android)",
      "description": "Vakit inaheshimu faragha yako. Huhitaji akaunti, na hatukusanyi data za utambulisho kama jina lako, barua pepe, nambari ya simu, picha au anwani za mawasiliano."
    },
    "titleBefore": "Sera ya Faragha ",
    "titleEm": "Android",
    "desc": "Ilisasishwa mwisho: 6 Oktoba 2026\n\nVakit inaheshimu faragha yako. Huhitaji akaunti, na hatukusanyi data za utambulisho kama jina lako, barua pepe, nambari ya simu, picha au anwani za mawasiliano. Nyakati za swala, mwelekeo wa kibla na vikumbusho hukokotolewa ndani ya kifaa chako. Kumbukumbu zako za ibada (dhikri, hitima, alamisho, malengo, misikiti uipendayo) huhifadhiwa ndani ya kifaa chako na, ikiwa nakala rudufu ya Android imewashwa, katika akaunti yako mwenyewe ya Google — hazitumwi kamwe kwenye seva yetu. Ni takwimu za matumizi pekee zinazotumwa kwenye seva yetu ili tuweze kuboresha programu; data hiyo imeunganishwa na msimbo wa mtumiaji usio na taarifa zozote za utambulisho. Hakuna ripoti za hitilafu wala vitambulisho vya matangazo vinavyotumwa.",
    "sections": [
      {
        "t": "1. Taarifa Tunazokusanya",
        "items": [
          {
            "name": "Data ya Mahali",
            "lines": [
              "Lengo: Kukokotoa nyakati za swala za kila siku na mwelekeo wa kibla, kuonyesha jina la mji wako na kutafuta misikiti iliyo karibu",
              "Uchakataji: Ndani ya kifaa chako. Ili kuonyesha jina la mji wako, viwianishi hutumwa kwa huduma ya geocoding ya Android (Google). Unapofungua Misikiti Iliyo Karibu, viwianishi vya eneo la utafutaji hutumwa kwa OpenStreetMap (Overpass API). Viwianishi havitumwi kamwe kwa seva ya Vakit.",
              "Uhifadhi: Mahali pako pa mwisho huhifadhiwa ndani ya kifaa ili nyakati za swala ziweze kukokotolewa bila intaneti, hadi utakapopabadilisha au kufuta programu. Mahali husomwa tu wakati programu inatumika."
            ]
          },
          {
            "name": "Data ya Mwelekeo",
            "lines": [
              "Lengo: Dira ya kibla ya wakati halisi",
              "Uchakataji: Ndani ya kifaa pekee",
              "Uhifadhi: Haihifadhiwi"
            ]
          },
          {
            "name": "Data ya Mwendo",
            "lines": [
              "Lengo: Ulainishaji na uthabiti wa dira (kihisi cha vekta ya mzunguko)",
              "Uchakataji: Ndani ya kifaa pekee",
              "Uhifadhi: Haihifadhiwi"
            ]
          },
          {
            "name": "Data ya Arifa",
            "lines": [
              "Lengo: Kutuma arifa za swala zinazoandaliwa ndani ya kifaa",
              "Uchakataji: AlarmManager / Chaneli za Arifa za Android",
              "Uhifadhi: Hadi zizimwe au programu ifutwe"
            ]
          },
          {
            "name": "Data ya Mipangilio",
            "lines": [
              "Lengo: Kukumbuka mapendeleo yako",
              "Uchakataji: DataStore (mapendeleo ya jumla hutumwa kwenye seva yetu chini ya msimbo wa mtumiaji usiotambulisha; hakuna maudhui binafsi yanayojumuishwa)",
              "Uhifadhi: Hadi yarudishwe upya au programu ifutwe. Data ya mapendeleo kwenye seva haifutwi kiotomatiki; hufutwa kwa ombi."
            ]
          },
          {
            "name": "Takwimu za Matumizi",
            "lines": [
              "Lengo: Kufuatilia utendaji wa programu, kugundua hitilafu na kuboresha matumizi",
              "Uchakataji: Seva yetu salama nchini Ujerumani (Nuremberg); imeunganishwa na msimbo wa kudumu wa mtumiaji usio na taarifa zozote za utambulisho",
              "Uhifadhi: Huhifadhiwa kwa takwimu za jumla na haifutwi kiotomatiki (hufutwa kwa ombi). Haina data ya utambulisho, lakini imeunganishwa na msimbo wa kudumu wa mtumiaji (jina bandia)."
            ]
          }
        ],
        "b": "Hatukusanyi jina lako, barua pepe, nambari ya simu, picha, maikrofoni, kamera, anwani za mawasiliano, kitambulisho cha matangazo wala viwianishi vya GPS. Vakit haina mfumo wa akaunti. Maudhui yako (majina ya dhikri, alamisho, maendeleo ya usomaji, malengo) hubaki ndani ya kifaa chako (DataStore / hifadhidata ya ndani) na hujumuishwa katika nakala rudufu ya Android tu ikiwa nakala rudufu imewashwa; kumbukumbu hizi zenyewe hazitumwi kamwe kwenye seva yetu.\n\nKinachokwenda kwenye seva yetu: msimbo wa mtumiaji usio na taarifa zozote za utambulisho, nchi yako (si viwianishi vya GPS), taarifa za kifaa na toleo, mapendeleo yako ya programu (lugha, njia ya kukokotoa, mandhari, madhehebu, aina ya kalenda, jinsia uliyochagua kwa mwongozo wa swala, mapendeleo ya arifa na ya usomaji wa Qurani/hadithi) na takwimu za matumizi ya vipengele. Takwimu hizo huonyesha kuwa sehemu fulani ilitumika; hazijumuishi maudhui ya kumbukumbu zako. Maneno unayotafuta ndani ya programu hutumwa: tunayahifadhi, hadi herufi 80, ili kuona kama utafutaji unakupatia unachohitaji na kuboresha matokeo."
      },
      {
        "t": "2. Jinsi Tunavyotumia Data Yako",
        "b": "• Nyakati za swala – hukokotolewa bila intaneti ndani ya kifaa chako kwa maktaba ya Adhan; hakuna viwianishi vinavyotumwa kwa ajili ya hili.\n• Mwelekeo wa kibla – mahali na mwelekeo wa dira huunganishwa ndani ya kifaa chako.\n• Arifa za swala – hupangwa ndani ya kifaa chako kwa AlarmManager; programu ya Android haipokei arifa za push kutoka mbali.\n• Jina la mji – viwianishi hutumwa kwa huduma ya geocoding ya Android (Google); utafutaji wa mji kwa mkono hutuma maandishi unayoandika.\n• Misikiti Iliyo Karibu – viwianishi vya eneo la utafutaji hutumwa kwa OpenStreetMap (Overpass API). Maelekezo ya njia hufungua Google Maps pamoja na mahali msikiti ulipo.\n• Sauti ya Kurani – visomo husikilizwa mtandaoni au hupakuliwa kutoka quran.com na everyayah.com; ombi hutambulisha faili ya sauti tu.\n• Khutba ya Ijumaa – maandishi, PDF na sauti hupakuliwa kutoka Diyanet (dinhizmetleri.diyanet.gov.tr).\n• Fonti – baadhi ya fonti hupakuliwa kupitia huduma za Google Play (Google Fonts).\n• Maudhui yako – dhikri, hitima, alamisho na malengo huhifadhiwa ndani ya kifaa chako.\n\nTakwimu za matumizi hazijaunganishwa na utambulisho wako, bali na msimbo nasibu wa mtumiaji usio na taarifa zozote za utambulisho (jina bandia). Ikiwa nakala rudufu ya Android imewashwa, msimbo huo hujumuishwa katika nakala rudufu yako, hivyo kusakinisha Vakit upya kwenye akaunti ileile ya Google huhesabiwa kama mtumiaji yuleyule. Data hutumika tu kuboresha programu; haiuzwi kamwe wala haitumiki kwa matangazo. Toleo la Android halina SDK yoyote ya kuripoti hitilafu wala ya matangazo."
      },
      {
        "t": "3. Hifadhi rudufu na usawazishaji (Google Backup)",
        "b": "Vakit huhifadhi kumbukumbu zako za ibada (dhikri, hitima, alamisho, malengo, misikiti uipendayo) ndani ya kifaa chako. Ikiwa nakala rudufu ya Android imewashwa, Android huziweka katika nafasi binafsi ya nakala rudufu ya akaunti yako mwenyewe ya Google:\n• Nakala rudufu ya wingu hutumika tu kwenye vifaa vinavyotumia nakala rudufu zilizosimbwa kutoka mwanzo hadi mwisho; ufunguo hutokana na kufuli ya skrini yako, hivyo sisi wala watu wengine hatuwezi kuzisoma.\n• Nakala rudufu hurejeshwa unaposakinisha upya Vakit kwenye kifaa kilichoingia kwa akaunti ile ile ya Google.\n• Sauti zilizopakuliwa, hifadhidata ya maudhui inayokuja na programu na akiba (cache) hazihifadhiwi kwenye nakala rudufu.\n• Ukizima nakala rudufu katika Mipangilio ya Android, data yako hubaki ndani ya kifaa chako tu."
      },
      {
        "t": "4. Huduma za Watu wa Tatu",
        "b": "Vakit hutumia huduma zifuatazo kwa madhumuni maalum. Hakuna hata moja inayopokea utambulisho wako kutoka Vakit:\n• Google – nakala rudufu ya Android, geocoding kwa jina la mji wako, Google Fonts, tathmini ndani ya programu ya Play (In-App Review) na Google Maps unapoomba maelekezo ya njia.\n• OpenStreetMap (Overpass API) – utafutaji wa misikiti iliyo karibu (viwianishi vya eneo la utafutaji).\n• quran.com na everyayah.com – sauti za visomo vya Kurani.\n• Diyanet İşleri Başkanlığı – maandishi na sauti ya khutba ya Ijumaa.\n• Cloudflare – kupitisha trafiki kwenda kwenye seva ya Vakit (takwimu za matumizi) na kusambaza vifurushi vya maudhui vinavyoweza kupakuliwa.\nKila huduma huchakata maombi kulingana na sera yake ya faragha."
      },
      {
        "t": "5. Matangazo",
        "b": "Vakit haionyeshi matangazo na haina SDK yoyote ya matangazo. Kitambulisho chako cha matangazo hakisomwi."
      },
      {
        "t": "6. Malipo",
        "b": "Vakit haina manunuzi ndani ya programu na haichakati taarifa zozote za malipo."
      },
      {
        "t": "7. Kushiriki Data",
        "b": "Hatuuzi data yako wala hatuishiriki kwa ajili ya uuzaji. Ni huduma zilizoorodheshwa chini ya “Huduma za Watu wa Tatu” pekee zinazopokea data, na kwa madhumuni yaliyotajwa hapo tu. Takwimu za matumizi huhifadhiwa kwenye seva yetu salama nchini Ujerumani (Nuremberg), zikiwa zimeunganishwa na msimbo wa mtumiaji usio na taarifa zozote za utambulisho, na hazishirikiwi na watu wa tatu."
      },
      {
        "t": "8. Muda wa Kuhifadhi Data",
        "b": "• Data ndani ya kifaa chako – huhifadhiwa hadi uifute (Mipangilio → Futa Akaunti) au uondoe Vakit.\n• Nakala rudufu ya Android – huhifadhiwa hadi uzime nakala rudufu au uifute.\n• Sauti zilizopakuliwa – huhifadhiwa hadi uzifute katika Mipangilio → Hifadhi au uondoe Vakit.\n• Takwimu za matumizi kwenye seva – huhifadhiwa kwa madhumuni ya takwimu za jumla na hazifutwi kiotomatiki; hufutwa kwa ombi."
      },
      {
        "t": "9. Usalama",
        "b": "Data yako hubaki kwenye simu yako, ikilindwa na sandbox ya programu ya Android na usimbaji fiche wa kifaa. Nakala rudufu za wingu husimbwa kutoka mwanzo hadi mwisho kwa ufunguo unaotokana na kufuli ya skrini yako. Miunganisho yote ya mtandao hutumia HTTPS."
      },
      {
        "t": "10. Haki na Vidhibiti Vyako",
        "b": "Chini ya KVKK ya Uturuki na GDPR ya Umoja wa Ulaya, haki zako ni:\n• Haki ya kujua ni data ipi inayochakatwa\n• Haki ya kupinga uchakataji wa data (unaweza kuondoa ruhusa za Mahali/Arifa kupitia Mipangilio ya Android → Programu → Vakit → Ruhusa)\n• Haki ya kuomba kufutwa (Mipangilio → Futa Akaunti, au ondoa programu; unaweza kufuta nakala rudufu ya Google kutoka Mipangilio ya Android). Ili takwimu za matumizi zilizo kwenye seva yetu zifutwe, andika tu kwa hakancelikdev@gmail.com; ombi lako hutekelezwa ndani ya siku 30 kwa kuchelewa zaidi.\n• Haki ya kuhamisha data\n• Haki ya kuwasilisha ombi kwa Mamlaka ya KVKK\n\nKwa maombi: hakancelikdev@gmail.com (tunajibu ndani ya siku 30 zaidi)."
      },
      {
        "t": "11. Faragha ya Watoto",
        "b": "Vakit inatolewa kwenye Google Play katika kundi la “Kila Mtu (3+)”, lakini hatukusanyi kwa makusudi data binafsi ya watumiaji walio chini ya miaka 13. Ukigundua kuwa data ya mtoto aliye chini ya miaka 13 imekusanywa, tafadhali andika kwa hakancelikdev@gmail.com; data husika itafutwa mara moja."
      },
      {
        "t": "12. Mabadiliko ya Sera Hii",
        "b": "Tunaweza kusasisha sera hii vipengele vya programu au mahitaji ya kisheria yanapobadilika. Tarehe ya “Ilisasishwa mwisho” kwenye ukurasa huu inaonyesha toleo linalotumika."
      },
      {
        "t": "13. Mawasiliano",
        "b": "Kwa maswali, maombi au maoni kuhusu faragha: hakancelikdev@gmail.com\n\nMdhibiti wa Data: Hakan Çelik (Uturuki)"
      }
    ]
  },
  "th": {
    "meta": {
      "title": "Vakit — นโยบายความเป็นส่วนตัว (Android)",
      "description": "Vakit เคารพความเป็นส่วนตัวของคุณ คุณไม่ต้องมีบัญชี และเราไม่เก็บข้อมูลระบุตัวตน เช่น ชื่อ อีเมล เบอร์โทรศัพท์ รูปภาพ หรือรายชื่อผู้ติดต่อ เวลาละหมาด ทิศกิบลัต และการเตือนคำนวณบนเครื่องของคุณ บันทึกอิบาดะฮฺของคุณ (ซิกิร คอตัม ที่คั่น เป้าหมาย มัสยิดที่ชอบ) เก็บไว้บนเครื่องของคุณ และหากเปิดการสำรองข้อมูลของ Android ไว้ ก็จะเก็บในบัญชี Google ของคุณเองด้วย — บันทึกเหล่านี้ไม่เคยถูกส่งไปยังเซิร์ฟเวอร์ของเรา มีเพียงสถิติการใช้งานเท่านั้นที่ถูกส่งไปยังเซิร์ฟเวอร์ของเราเพื่อให้เราปรับปรุงแอปได้ ข้อมูลนั้นผูกกับรหัสผู้ใช้ที่ไม่มีข้อมูลระบุตัวตน ไม่มีการส่งรายงานข้อขัดข้องหรือรหัสโฆษณา"
    },
    "titleBefore": "นโยบายความเป็นส่วนตัว ",
    "titleEm": "Android",
    "desc": "อัปเดตล่าสุด: 6 ตุลาคม 2026\n\nVakit เคารพความเป็นส่วนตัวของคุณ คุณไม่ต้องมีบัญชี และเราไม่เก็บข้อมูลระบุตัวตน เช่น ชื่อ อีเมล เบอร์โทรศัพท์ รูปภาพ หรือรายชื่อผู้ติดต่อ เวลาละหมาด ทิศกิบลัต และการเตือนคำนวณบนเครื่องของคุณ บันทึกอิบาดะฮฺของคุณ (ซิกิร คอตัม ที่คั่น เป้าหมาย มัสยิดที่ชอบ) เก็บไว้บนเครื่องของคุณ และหากเปิดการสำรองข้อมูลของ Android ไว้ ก็จะเก็บในบัญชี Google ของคุณเองด้วย — บันทึกเหล่านี้ไม่เคยถูกส่งไปยังเซิร์ฟเวอร์ของเรา มีเพียงสถิติการใช้งานเท่านั้นที่ถูกส่งไปยังเซิร์ฟเวอร์ของเราเพื่อให้เราปรับปรุงแอปได้ ข้อมูลนั้นผูกกับรหัสผู้ใช้ที่ไม่มีข้อมูลระบุตัวตน ไม่มีการส่งรายงานข้อขัดข้องหรือรหัสโฆษณา",
    "sections": [
      {
        "t": "1. ข้อมูลที่เราเก็บ",
        "items": [
          {
            "name": "ข้อมูลตำแหน่ง",
            "lines": [
              "วัตถุประสงค์: คำนวณเวลาละหมาดประจำวันและทิศกิบลัต แสดงชื่อเมืองของคุณ และค้นหามัสยิดใกล้เคียง",
              "การประมวลผล: บนเครื่องของคุณ เพื่อแสดงชื่อเมือง พิกัดจะถูกส่งไปยังบริการแปลงพิกัดเป็นที่อยู่ของ Android (Google) เมื่อคุณเปิด “มัสยิดใกล้ฉัน” พิกัดของพื้นที่ค้นหาจะถูกส่งไปยัง OpenStreetMap (Overpass API) พิกัดจะไม่ถูกส่งไปยังเซิร์ฟเวอร์ของ Vakit เลย",
              "ระยะเก็บรักษา: ตำแหน่งล่าสุดของคุณจะเก็บไว้บนเครื่องเพื่อให้คำนวณเวลาละหมาดแบบออฟไลน์ได้ จนกว่าคุณจะเปลี่ยนหรือลบแอป ตำแหน่งจะถูกอ่านเฉพาะขณะใช้งานแอปเท่านั้น"
            ]
          },
          {
            "name": "ข้อมูลทิศทาง",
            "lines": [
              "วัตถุประสงค์: เข็มทิศกิบลัตแบบเรียลไทม์",
              "การประมวลผล: ประมวลผลบนเครื่องเท่านั้น",
              "ระยะเก็บรักษา: ไม่จัดเก็บ"
            ]
          },
          {
            "name": "ข้อมูลการเคลื่อนไหว",
            "lines": [
              "วัตถุประสงค์: ทำให้เข็มทิศนิ่งและลื่นไหล (เซ็นเซอร์เวกเตอร์การหมุน)",
              "การประมวลผล: ประมวลผลบนเครื่องเท่านั้น",
              "ระยะเก็บรักษา: ไม่จัดเก็บ"
            ]
          },
          {
            "name": "ข้อมูลการแจ้งเตือน",
            "lines": [
              "วัตถุประสงค์: ส่งการแจ้งเตือนละหมาดภายในเครื่อง",
              "การประมวลผล: AlarmManager / ช่องการแจ้งเตือนของ Android",
              "ระยะเก็บรักษา: จนกว่าจะปิดหรือลบแอป"
            ]
          },
          {
            "name": "ข้อมูลการตั้งค่า",
            "lines": [
              "วัตถุประสงค์: จดจำการตั้งค่าของคุณ",
              "การประมวลผล: DataStore (การตั้งค่าทั่วไปถูกส่งไปเซิร์ฟเวอร์ภายใต้รหัสผู้ใช้นิรนาม ไม่มีเนื้อหาส่วนตัว)",
              "ระยะเก็บรักษา: จนกว่าจะรีเซ็ตหรือลบแอป ข้อมูลการตั้งค่าบนเซิร์ฟเวอร์จะไม่ถูกลบโดยอัตโนมัติ และจะลบเมื่อมีการร้องขอ"
            ]
          },
          {
            "name": "สถิติการใช้งาน",
            "lines": [
              "วัตถุประสงค์: ติดตามการทำงานของแอป หาข้อบกพร่อง และปรับปรุงประสบการณ์",
              "การประมวลผล: เซิร์ฟเวอร์ปลอดภัยของเราในเยอรมนี (นูเรมเบิร์ก) ผูกกับรหัสผู้ใช้ถาวรที่ไม่มีข้อมูลระบุตัวตน",
              "ระยะเก็บรักษา: เก็บไว้เพื่อสถิติรวมและไม่ถูกลบโดยอัตโนมัติ (ลบเมื่อมีการร้องขอ) ไม่มีข้อมูลระบุตัวตน แต่ผูกกับรหัสผู้ใช้ถาวร (นามแฝง)"
            ]
          }
        ],
        "b": "เราไม่เก็บชื่อ อีเมล เบอร์โทรศัพท์ รูปภาพ ไมโครโฟน กล้อง รายชื่อผู้ติดต่อ รหัสโฆษณา หรือพิกัด GPS ของคุณ Vakit ไม่มีระบบบัญชี เนื้อหาของคุณ (ชื่อซิกิร ที่คั่น ความคืบหน้าการอ่าน เป้าหมาย) อยู่บนเครื่องของคุณ (DataStore / ฐานข้อมูลในเครื่อง) และจะรวมอยู่ในการสำรองข้อมูลของ Android เฉพาะเมื่อเปิดการสำรองข้อมูลไว้เท่านั้น ตัวบันทึกเหล่านี้เองไม่เคยถูกส่งไปยังเซิร์ฟเวอร์ของเรา\n\nสิ่งที่ส่งไปยังเซิร์ฟเวอร์ของเรา: รหัสผู้ใช้ที่ไม่มีข้อมูลระบุตัวตน ประเทศของคุณ (ไม่ใช่พิกัด GPS) ข้อมูลเครื่องและเวอร์ชัน การตั้งค่าแอปของคุณ (ภาษา วิธีคำนวณ ธีม มัซฮับ ชนิดปฏิทิน เพศที่เลือกสำหรับคู่มือละหมาด การตั้งค่าการแจ้งเตือนและการอ่านอัลกุรอาน/หะดีษ) และสถิติการใช้ฟีเจอร์ สถิติเหล่านี้บอกว่ามีการใช้ส่วนใด แต่ไม่มีเนื้อหาของบันทึกของคุณ คำที่คุณค้นหาในแอปจะถูกส่งไปด้วย: เราบันทึกไม่เกิน 80 ตัวอักษร เพื่อดูว่าการค้นหาให้ผลที่คุณต้องการหรือไม่และปรับปรุงผลลัพธ์"
      },
      {
        "t": "2. เราใช้ข้อมูลของคุณอย่างไร",
        "b": "• เวลาละหมาด – คำนวณแบบออฟไลน์บนเครื่องของคุณด้วยไลบรารี Adhan ไม่มีการส่งพิกัดเพื่อการนี้\n• ทิศกิบลัต – ตำแหน่งและทิศเข็มทิศถูกรวมกันบนเครื่องของคุณ\n• การแจ้งเตือนละหมาด – ตั้งเวลาบนเครื่องของคุณด้วย AlarmManager แอป Android ไม่ได้รับการแจ้งเตือนแบบพุชจากระยะไกล\n• ชื่อเมือง – พิกัดถูกส่งไปยังบริการแปลงพิกัดเป็นที่อยู่ของ Android (Google) การค้นหาเมืองด้วยตนเองจะส่งข้อความที่คุณพิมพ์\n• มัสยิดใกล้ฉัน – พิกัดของพื้นที่ค้นหาถูกส่งไปยัง OpenStreetMap (Overpass API) การนำทางจะเปิด Google Maps พร้อมตำแหน่งของมัสยิด\n• เสียงอัลกุรอาน – การอ่านถูกสตรีมหรือดาวน์โหลดจาก quran.com และ everyayah.com คำขอระบุเพียงไฟล์เสียงเท่านั้น\n• คุฏบะฮฺวันศุกร์ – ข้อความ PDF และเสียงดาวน์โหลดจาก Diyanet (dinhizmetleri.diyanet.gov.tr)\n• แบบอักษร – แบบอักษรบางชุดดาวน์โหลดผ่านบริการ Google Play (Google Fonts)\n• เนื้อหาของคุณ – ซิกิร คอตัม ที่คั่น และเป้าหมายเก็บไว้บนเครื่องของคุณ\n\nสถิติการใช้งานไม่ได้ผูกกับตัวตนของคุณ แต่ผูกกับรหัสผู้ใช้แบบสุ่มที่ไม่มีข้อมูลระบุตัวตน (นามแฝง) หากเปิดการสำรองข้อมูลของ Android ไว้ รหัสนี้จะรวมอยู่ในข้อมูลสำรองของคุณ การติดตั้ง Vakit ใหม่ในบัญชี Google เดียวกันจึงนับเป็นผู้ใช้คนเดิม ข้อมูลใช้เพื่อพัฒนาแอปเท่านั้น ไม่ถูกขายและไม่ใช้เพื่อโฆษณาเลย เวอร์ชัน Android ไม่มี SDK ด้านการรายงานข้อขัดข้องหรือโฆษณา"
      },
      {
        "t": "3. การสำรองข้อมูลและการซิงค์ (Google Backup)",
        "b": "Vakit เก็บบันทึกอิบาดะฮฺของคุณ (ซิกิร คอตัม ที่คั่น เป้าหมาย มัสยิดที่ชอบ) ไว้บนเครื่องของคุณ หากเปิดการสำรองข้อมูลของ Android ไว้ Android จะรวมข้อมูลเหล่านี้ไว้ในพื้นที่สำรองข้อมูลส่วนตัวของบัญชี Google ของคุณเอง:\n• การสำรองข้อมูลบนคลาวด์ใช้เฉพาะบนอุปกรณ์ที่รองรับการสำรองข้อมูลแบบเข้ารหัสตั้งแต่ต้นทางถึงปลายทาง กุญแจสร้างจากการล็อกหน้าจอของคุณ ทั้งเราและบุคคลภายนอกจึงอ่านไม่ได้\n• ข้อมูลสำรองจะถูกกู้คืนเมื่อคุณติดตั้ง Vakit ใหม่บนอุปกรณ์ที่ลงชื่อเข้าใช้บัญชี Google เดียวกัน\n• เสียงที่ดาวน์โหลด ฐานข้อมูลเนื้อหาที่มากับแอป และแคชจะไม่ถูกสำรอง\n• หากคุณปิดการสำรองข้อมูลในการตั้งค่า Android ข้อมูลของคุณจะอยู่บนเครื่องของคุณเท่านั้น"
      },
      {
        "t": "4. บริการภายนอก",
        "b": "Vakit ใช้บริการต่อไปนี้เพื่อวัตถุประสงค์ที่จำกัด ไม่มีบริการใดได้รับข้อมูลระบุตัวตนของคุณจาก Vakit:\n• Google – การสำรองข้อมูลของ Android การแปลงพิกัดเป็นชื่อเมือง Google Fonts การรีวิวในแอปของ Play (In-App Review) และ Google Maps เมื่อคุณขอเส้นทาง\n• OpenStreetMap (Overpass API) – ค้นหามัสยิดใกล้เคียง (พิกัดของพื้นที่ค้นหา)\n• quran.com และ everyayah.com – เสียงการอ่านอัลกุรอาน\n• Diyanet İşleri Başkanlığı – ข้อความและเสียงคุฏบะฮฺวันศุกร์\n• Cloudflare – ส่งต่อการรับส่งข้อมูลไปยังเซิร์ฟเวอร์ของ Vakit (สถิติการใช้งาน) และกระจายแพ็กเนื้อหาที่ดาวน์โหลดได้\nแต่ละบริการประมวลผลคำขอตามนโยบายความเป็นส่วนตัวของตนเอง"
      },
      {
        "t": "5. โฆษณา",
        "b": "Vakit ไม่แสดงโฆษณาและไม่มี SDK โฆษณา รหัสโฆษณาของคุณจะไม่ถูกอ่าน"
      },
      {
        "t": "6. การชำระเงิน",
        "b": "Vakit ไม่มีการซื้อภายในแอปและไม่ประมวลผลข้อมูลการชำระเงินใด ๆ"
      },
      {
        "t": "7. การแบ่งปันข้อมูล",
        "b": "เราไม่ขายข้อมูลของคุณและไม่แบ่งปันเพื่อการตลาด มีเพียงบริการที่ระบุไว้ใน “บริการภายนอก” เท่านั้นที่ได้รับข้อมูล และเฉพาะเพื่อวัตถุประสงค์ที่ระบุไว้ที่นั่น สถิติการใช้งานเก็บบนเซิร์ฟเวอร์ปลอดภัยของเราในเยอรมนี (นูเรมเบิร์ก) ผูกกับรหัสผู้ใช้ที่ไม่มีข้อมูลระบุตัวตน และไม่แบ่งปันกับบุคคลภายนอก"
      },
      {
        "t": "8. ระยะเวลาเก็บข้อมูล",
        "b": "• ข้อมูลบนเครื่องของคุณ – เก็บไว้จนกว่าคุณจะลบ (ตั้งค่า → ลบบัญชี) หรือถอนการติดตั้ง Vakit\n• ข้อมูลสำรองของ Android – เก็บไว้จนกว่าคุณจะปิดการสำรองข้อมูลหรือลบข้อมูลสำรอง\n• เสียงที่ดาวน์โหลด – เก็บไว้จนกว่าคุณจะลบใน ตั้งค่า → พื้นที่จัดเก็บ หรือถอนการติดตั้ง Vakit\n• สถิติการใช้งานบนเซิร์ฟเวอร์ – เก็บเพื่อวัตถุประสงค์ทางสถิติแบบรวมและไม่ถูกลบโดยอัตโนมัติ จะลบเมื่อมีการร้องขอ"
      },
      {
        "t": "9. ความปลอดภัย",
        "b": "ข้อมูลของคุณอยู่บนโทรศัพท์ของคุณ ได้รับการปกป้องด้วยแซนด์บ็อกซ์แอปของ Android และการเข้ารหัสอุปกรณ์ ข้อมูลสำรองบนคลาวด์เข้ารหัสตั้งแต่ต้นทางถึงปลายทางด้วยกุญแจที่สร้างจากการล็อกหน้าจอของคุณ การเชื่อมต่อเครือข่ายทั้งหมดใช้ HTTPS"
      },
      {
        "t": "10. สิทธิ์และการควบคุมของคุณ",
        "b": "ตามกฎหมาย KVKK ของตุรกีและ GDPR ของสหภาพยุโรป คุณมีสิทธิ์ดังนี้:\n• สิทธิ์ในการทราบว่ามีการประมวลผลข้อมูลใด\n• สิทธิ์ในการคัดค้านการประมวลผลข้อมูล (คุณเพิกถอนสิทธิ์ตำแหน่ง/การแจ้งเตือนได้ที่ การตั้งค่า Android → แอป → Vakit → สิทธิ์)\n• สิทธิ์ในการขอให้ลบ (ตั้งค่า → ลบบัญชี หรือถอนการติดตั้งแอป คุณลบข้อมูลสำรองของ Google ได้จากการตั้งค่า Android) หากต้องการให้ลบสถิติการใช้งานบนเซิร์ฟเวอร์ของเรา เพียงเขียนถึง hakancelikdev@gmail.com คำขอของคุณจะดำเนินการภายใน 30 วันเป็นอย่างช้า\n• สิทธิ์ในการโอนย้ายข้อมูล\n• สิทธิ์ในการยื่นคำร้องต่อหน่วยงาน KVKK\n\nส่งคำขอได้ที่: hakancelikdev@gmail.com (เราตอบภายใน 30 วันเป็นอย่างช้า)"
      },
      {
        "t": "11. ความเป็นส่วนตัวของเด็ก",
        "b": "Vakit ให้บริการบน Google Play ในหมวด “ทุกคน (3+)” แต่เราไม่เก็บข้อมูลส่วนบุคคลจากผู้ใช้อายุต่ำกว่า 13 ปีโดยรู้ตัว หากคุณทราบว่ามีการเก็บข้อมูลของเด็กอายุต่ำกว่า 13 ปี กรุณาเขียนถึง hakancelikdev@gmail.com ข้อมูลที่เกี่ยวข้องจะถูกลบทันที"
      },
      {
        "t": "12. การเปลี่ยนแปลงนโยบายนี้",
        "b": "เราอาจปรับปรุงนโยบายนี้เมื่อฟีเจอร์ของแอปหรือข้อกำหนดทางกฎหมายเปลี่ยนแปลง วันที่ “อัปเดตล่าสุด” ในหน้านี้แสดงเวอร์ชันปัจจุบัน"
      },
      {
        "t": "13. ติดต่อ",
        "b": "คำถาม คำขอ หรือความเห็นเรื่องความเป็นส่วนตัว: hakancelikdev@gmail.com\n\nผู้ควบคุมข้อมูล: Hakan Çelik (ตุรกี)"
      }
    ]
  },
  "ug": {
    "meta": {
      "title": "Vakit — مەخپىيەتلىك سىياسىتى (Android)",
      "description": "Vakit مەخپىيەتلىكىڭىزنى ھۆرمەت قىلىدۇ. ھېسابات ئېچىشىڭىزنىڭ ھاجىتى يوق، بىز ئىسمىڭىز، ئېلخەت ئادرېسىڭىز، تېلېفون نومۇرىڭىز، سۈرەتلىرىڭىز ياكى ئالاقەداشلىرىڭىزغا ئوخشاش كىملىك ئۇچۇرلىرىنى يىغمايمىز."
    },
    "titleBefore": "مەخپىيەتلىك سىياسىتى ",
    "titleEm": "Android",
    "desc": "ئاخىرقى يېڭىلانغان: 2026-يىلى 6-ئۆكتەبىر\n\nVakit مەخپىيەتلىكىڭىزنى ھۆرمەت قىلىدۇ. ھېسابات ئېچىشىڭىزنىڭ ھاجىتى يوق، بىز ئىسمىڭىز، ئېلخەت ئادرېسىڭىز، تېلېفون نومۇرىڭىز، سۈرەتلىرىڭىز ياكى ئالاقەداشلىرىڭىزغا ئوخشاش كىملىك ئۇچۇرلىرىنى يىغمايمىز. ناماز ۋاقىتلىرى، قىبلە يۆنىلىشى ۋە ئەسكەرتىشلەر ئۈسكۈنىڭىزدە ھېسابلىنىدۇ. ئىبادەت خاتىرىلىرىڭىز (زىكىر، خەتمە، خەتكۈچلەر، نىشانلار، ياقتۇرغان مەسچىتلەر) ئۈسكۈنىڭىزدە ساقلىنىدۇ، ئەگەر Android زاپاسلاش ئوچۇق بولسا، ئۆزىڭىزنىڭ Google ھېساباتىدىمۇ ساقلىنىدۇ — ئۇلار ھەرگىز مۇلازىمېتىرىمىزغا ئەۋەتىلمەيدۇ. ئەپنى ياخشىلىشىمىز ئۈچۈن مۇلازىمېتىرىمىزغا پەقەت ئىشلىتىش ستاتىستىكىسىلا ئەۋەتىلىدۇ؛ بۇ سانلىق مەلۇمات ھېچقانداق كىملىك ئۇچۇرى بولمىغان ئىشلەتكۈچى كودىغا باغلانغان. يىمىرىلىش دوكلاتى ياكى ئېلان كىملىكى ئەۋەتىلمەيدۇ.",
    "sections": [
      {
        "t": "1. بىز يىغىدىغان ئۇچۇرلار",
        "items": [
          {
            "name": "ئورۇن سانلىق مەلۇماتى",
            "lines": [
              "مەقسەت: كۈندىلىك ناماز ۋاقىتلىرى ۋە قىبلە يۆنىلىشىنى ھېسابلاش، شەھىرىڭىزنىڭ نامىنى كۆرسىتىش ۋە يېقىندىكى مەسچىتلەرنى تېپىش",
              "بىر تەرەپ قىلىنىشى: ئۈسكۈنىڭىزدە. شەھىرىڭىزنىڭ نامىنى كۆرسىتىش ئۈچۈن كوئوردىناتلار Android نىڭ ئادرېس بېكىتىش مۇلازىمىتىگە (Google) ئەۋەتىلىدۇ. «يېقىندىكى مەسچىتلەر» نى ئاچقىنىڭىزدا، ئىزدەش دائىرىسىنىڭ كوئوردىناتلىرى OpenStreetMap (Overpass API) غا ئەۋەتىلىدۇ. كوئوردىناتلار ھەرگىز Vakit مۇلازىمېتىرىغا ئەۋەتىلمەيدۇ.",
              "ساقلىنىشى: ناماز ۋاقىتلىرىنى تورسىز ھېسابلىغىلى بولسۇن ئۈچۈن ئەڭ ئاخىرقى ئورنىڭىز ئۇنى ئۆزگەرتكۈچە ياكى ئەپنى ئۆچۈرگۈچە ئۈسكۈنىڭىزدە ساقلىنىدۇ. ئورۇن پەقەت ئەپ ئىشلىتىلىۋاتقاندا ئوقۇلىدۇ."
            ]
          },
          {
            "name": "يۆنىلىش سانلىق مەلۇماتى",
            "lines": [
              "مەقسەت: رېئال ۋاقىتلىق قىبلە كومپاسى",
              "بىر تەرەپ قىلىنىشى: پەقەت ئۈسكۈنىدە",
              "ساقلىنىشى: ساقلانمايدۇ"
            ]
          },
          {
            "name": "ھەرىكەت سانلىق مەلۇماتى",
            "lines": [
              "مەقسەت: كومپاسنى مۇقىملاشتۇرۇش ۋە تەكشىلەش (ئايلىنىش ۋېكتورى سېنزورى)",
              "بىر تەرەپ قىلىنىشى: پەقەت ئۈسكۈنىدە",
              "ساقلىنىشى: ساقلانمايدۇ"
            ]
          },
          {
            "name": "ئۇقتۇرۇش سانلىق مەلۇماتى",
            "lines": [
              "مەقسەت: يەرلىك ناماز ئۇقتۇرۇشلىرىنى يەتكۈزۈش",
              "بىر تەرەپ قىلىنىشى: AlarmManager / Android ئۇقتۇرۇش قاناللىرى",
              "ساقلىنىشى: چەكلەنگۈچە ياكى ئەپ ئۆچۈرۈلگۈچە"
            ]
          },
          {
            "name": "تەڭشەك سانلىق مەلۇماتى",
            "lines": [
              "مەقسەت: تاللاشلىرىڭىزنى ئەستە تۇتۇش",
              "بىر تەرەپ قىلىنىشى: DataStore (ئومۇمىي مايىللىقلار تەخەللۇس ئىشلەتكۈچى كودى ئاستىدا مۇلازىمېتىرىمىزغا ئەۋەتىلىدۇ؛ شەخسىي مەزمۇن كىرمەيدۇ)",
              "ساقلىنىشى: ئەسلىگە قايتۇرۇلغۇچە ياكى ئەپ ئۆچۈرۈلگۈچە. مۇلازىمېتىردىكى مايىللىق سانلىق مەلۇماتى ئاپتوماتىك ئۆچۈرۈلمەيدۇ؛ تەلەپ قىلىنسا ئۆچۈرۈلىدۇ."
            ]
          },
          {
            "name": "ئىشلىتىش ستاتىستىكىسى",
            "lines": [
              "مەقسەت: ئەپنىڭ ئىقتىدارىنى كۆزىتىش، خاتالىقلارنى بايقاش ۋە تەجرىبىنى ياخشىلاش",
              "بىر تەرەپ قىلىنىشى: گېرمانىيەدىكى (نيۇرنبېرگ) بىخەتەر مۇلازىمېتىرىمىز؛ ھېچقانداق كىملىك ئۇچۇرى بولمىغان مۇقىم ئىشلەتكۈچى كودىغا باغلانغان",
              "ساقلىنىشى: يىغىندى ستاتىستىكا ئۈچۈن ساقلىنىدۇ ۋە ئاپتوماتىك ئۆچۈرۈلمەيدۇ (تەلەپ قىلىنسا ئۆچۈرۈلىدۇ). كىملىك ئۇچۇرى يوق، ئەمما مۇقىم ئىشلەتكۈچى كودىغا (تەخەللۇس) باغلانغان."
            ]
          }
        ],
        "b": "ئىسمىڭىز، ئېلخەت ئادرېسىڭىز، تېلېفون نومۇرىڭىز، سۈرەتلىرىڭىز، مىكروفونىڭىز، كامېراڭىز، ئالاقەداشلىرىڭىز، ئېلان كىملىكىڭىز ياكى GPS كوئوردېناتلىرىڭىزنى يىغمايمىز. Vakit نىڭ ھېسابات سىستېمىسى يوق. مەزمۇنلىرىڭىز (زىكىر ماۋزۇلىرى، خەتكۈچلەر، ئوقۇش ئىلگىرىلىشى، نىشانلار) ئۈسكۈنىڭىزدە (DataStore / يەرلىك ساندان) قالىدۇ، پەقەت زاپاسلاش ئوچۇق بولغاندىلا Android زاپاسلىشىغا كىرگۈزۈلىدۇ؛ بۇ خاتىرىلەرنىڭ ئۆزى ھەرگىز مۇلازىمېتىرىمىزغا ئەۋەتىلمەيدۇ.\n\nمۇلازىمېتىرىمىزغا بارىدىغىنى: ھېچقانداق كىملىك ئۇچۇرى بولمىغان ئىشلەتكۈچى كودى، دۆلىتىڭىز (GPS كوئوردېناتى ئەمەس)، ئۈسكۈنە ۋە نەشر ئۇچۇرى، ئەپ مايىللىقلىرىڭىز (تىل، ھېسابلاش ئۇسۇلى، تېما، مەزھەب، كالېندار تىپى، ناماز يېتەكچىسى ئۈچۈن تاللىغان جىنسىڭىز، ئۇقتۇرۇش ۋە قۇرئان/ھەدىس ئوقۇش مايىللىقلىرى) ۋە ئىقتىدار ئىشلىتىش ستاتىستىكىسى. بۇ ستاتىستىكىلار بىر بۆلەكنىڭ ئىشلىتىلگەنلىكىنى كۆرسىتىدۇ؛ خاتىرىلىرىڭىزنىڭ مەزمۇنىنى ئۆز ئىچىگە ئالمايدۇ. ئەپ ئىچىدە ئىزدىگەن سۆزلىرىڭىز ئەۋەتىلىدۇ: ئىزدەشنىڭ سىزگە كېرەكلىك نەرسىنى تېپىپ بېرەلەيدىغانلىقىنى كۆرۈش ۋە نەتىجىلەرنى ياخشىلاش ئۈچۈن ئەڭ كۆپ 80 ھەرپكىچە خاتىرىلەيمىز."
      },
      {
        "t": "2. سانلىق مەلۇماتىڭىزنى قانداق ئىشلىتىمىز",
        "b": "• ناماز ۋاقىتلىرى – Adhan كۇتۇپخانىسى ئارقىلىق ئۈسكۈنىڭىزدە تورسىز ھېسابلىنىدۇ؛ بۇنىڭ ئۈچۈن ھېچقانداق كوئوردىنات ئەۋەتىلمەيدۇ.\n• قىبلە يۆنىلىشى – ئورۇن بىلەن كومپاس يۆنىلىشى ئۈسكۈنىڭىزدە بىرلەشتۈرۈلىدۇ.\n• ناماز ئۇقتۇرۇشلىرى – ئۈسكۈنىڭىزدە AlarmManager ئارقىلىق ئورۇنلاشتۇرۇلىدۇ؛ Android ئەپى يىراقتىن ئىتتىرىلگەن ئۇقتۇرۇش تاپشۇرۇۋالمايدۇ.\n• شەھەر نامى – كوئوردىناتلار Android نىڭ ئادرېس بېكىتىش مۇلازىمىتىگە (Google) ئەۋەتىلىدۇ؛ شەھەرنى قولدا ئىزدىگەندە سىز يازغان تېكىست ئەۋەتىلىدۇ.\n• يېقىندىكى مەسچىتلەر – ئىزدەش دائىرىسىنىڭ كوئوردىناتلىرى OpenStreetMap (Overpass API) غا ئەۋەتىلىدۇ. يول كۆرسىتىش مەسچىتنىڭ ئورنى بىلەن Google Maps نى ئاچىدۇ.\n• قۇرئان ئاۋازى – قىرائەتلەر quran.com ۋە everyayah.com دىن تور ئارقىلىق قويۇلىدۇ ياكى چۈشۈرۈلىدۇ؛ تەلەپ پەقەت ئاۋاز ھۆججىتىنىلا بەلگىلەيدۇ.\n• جۈمە خۇتبىسى – تېكىست، PDF ۋە ئاۋاز Diyanet (dinhizmetleri.diyanet.gov.tr) تىن چۈشۈرۈلىدۇ.\n• خەت نۇسخىلىرى – بەزى خەت نۇسخىلىرى Google Play مۇلازىمەتلىرى (Google Fonts) ئارقىلىق چۈشۈرۈلىدۇ.\n• مەزمۇنلىرىڭىز – زىكىر، خەتمە، خەتكۈچلەر ۋە نىشانلار ئۈسكۈنىڭىزدە ساقلىنىدۇ.\n\nئىشلىتىش ستاتىستىكىسى كىملىكىڭىزگە ئەمەس، ھېچقانداق كىملىك ئۇچۇرى بولمىغان تاسادىپىي ئىشلەتكۈچى كودىغا (تەخەللۇس) باغلانغان. ئەگەر Android زاپاسلاش ئوچۇق بولسا، بۇ كود زاپىسىڭىزغا كىرگۈزۈلىدۇ، شۇڭا Vakit نى ئوخشاش Google ھېساباتىدا قايتا قاچىلىسىڭىز ئوخشاش ئىشلەتكۈچى دەپ ھېسابلىنىدۇ. سانلىق مەلۇمات پەقەت ئەپنى ياخشىلاشقا ئىشلىتىلىدۇ؛ ھەرگىز سېتىلمايدۇ ۋە ئېلانغا ئىشلىتىلمەيدۇ. Android نەشرىدە ھېچقانداق يىمىرىلىش دوكلاتى ياكى ئېلان SDK سى يوق."
      },
      {
        "t": "3. زاپاسلاش ۋە ماسلاشتۇرۇش (Google زاپاسلاش)",
        "b": "Vakit ئىبادەت خاتىرىلىرىڭىزنى (زىكىر، خەتمە، خەتكۈچلەر، نىشانلار، ياقتۇرغان مەسچىتلەر) ئۈسكۈنىڭىزدە ساقلايدۇ. ئەگەر Android زاپاسلاش ئوچۇق بولسا، Android ئۇلارنى ئۆزىڭىزنىڭ Google ھېساباتىنىڭ شەخسىي زاپاسلاش بوشلۇقىغا قوشىدۇ:\n• بۇلۇت زاپاسلاش پەقەت ئۇچتىن-ئۇچقا شىفىرلانغان زاپاسلاشنى قوللايدىغان ئۈسكۈنىلەردىلا ئىشلىتىلىدۇ؛ ئاچقۇچ ئېكران قۇلۇپىڭىزدىن ھاسىل قىلىنىدۇ، شۇڭا بىزمۇ، ئۈچىنچى تەرەپمۇ ئۇنى ئوقۇيالمايدۇ.\n• Vakit نى ئوخشاش Google ھېساباتى بىلەن كىرگەن ئۈسكۈنىگە قايتا ئورناتقىنىڭىزدا زاپاس ئەسلىگە كەلتۈرۈلىدۇ.\n• چۈشۈرۈلگەن ئاۋازلار، ئەپ بىلەن كەلگەن مەزمۇن ساندانى ۋە ۋاقىتلىق ساقلىغۇچلار زاپاسلانمايدۇ.\n• Android تەڭشىكىدىن زاپاسلاشنى تاقىسىڭىز، سانلىق مەلۇماتىڭىز پەقەت ئۈسكۈنىڭىزدىلا قالىدۇ."
      },
      {
        "t": "4. ئۈچىنچى تەرەپ مۇلازىمەتلىرى",
        "b": "Vakit تۆۋەندىكى مۇلازىمەتلەرنى چەكلىك مەقسەتتە ئىشلىتىدۇ. ئۇلارنىڭ ھېچقايسىسى Vakit تىن كىملىكىڭىزنى تاپشۇرۇۋالمايدۇ:\n• Google – Android زاپاسلاش، شەھەر نامى ئۈچۈن ئادرېس بېكىتىش، Google Fonts، Play ئەپ ئىچى باھالاش (In-App Review)، ۋە يول سورىغىنىڭىزدا Google Maps.\n• OpenStreetMap (Overpass API) – يېقىندىكى مەسچىتلەرنى ئىزدەش (ئىزدەش دائىرىسىنىڭ كوئوردىناتلىرى).\n• quran.com ۋە everyayah.com – قۇرئان قىرائىتى ئاۋازلىرى.\n• Diyanet İşleri Başkanlığı – جۈمە خۇتبىسىنىڭ تېكىستى ۋە ئاۋازى.\n• Cloudflare – Vakit مۇلازىمېتىرىغا بارىدىغان ئېقىمنى (ئىشلىتىش ستاتىستىكىسى) يەتكۈزۈش ۋە چۈشۈرگىلى بولىدىغان مەزمۇن بوغچىلىرىنى تارقىتىش.\nھەر بىر مۇلازىمەت تەلەپلەرنى ئۆزىنىڭ مەخپىيەتلىك سىياسىتى بويىچە بىر تەرەپ قىلىدۇ."
      },
      {
        "t": "5. ئېلان",
        "b": "Vakit ئېلان كۆرسەتمەيدۇ ۋە ھېچقانداق ئېلان SDK سى يوق. ئېلان كىملىكىڭىز ئوقۇلمايدۇ."
      },
      {
        "t": "6. پۇل تۆلەش",
        "b": "Vakit تا ئەپ ئىچى سېتىۋېلىش يوق، ھېچقانداق پۇل تۆلەش ئۇچۇرى بىر تەرەپ قىلىنمايدۇ."
      },
      {
        "t": "7. سانلىق مەلۇمات ھەمبەھىرلەش",
        "b": "سانلىق مەلۇماتىڭىزنى ساتمايمىز ۋە سېتىش-تىجارەت مەقسىتىدە ھەمبەھىرلىمەيمىز. پەقەت «ئۈچىنچى تەرەپ مۇلازىمەتلىرى» بۆلىكىدە تىزىلغان مۇلازىمەتلەرلا سانلىق مەلۇمات تاپشۇرۇۋالىدۇ، ئۇمۇ پەقەت شۇ يەردە كۆرسىتىلگەن مەقسەت ئۈچۈن. ئىشلىتىش ستاتىستىكىسى گېرمانىيەدىكى (نيۇرنبېرگ) بىخەتەر مۇلازىمېتىرىمىزدا، ھېچقانداق كىملىك ئۇچۇرى بولمىغان ئىشلەتكۈچى كودىغا باغلىنىپ ساقلىنىدۇ ۋە ئۈچىنچى تەرەپلەر بىلەن ھەمبەھىرلەنمەيدۇ."
      },
      {
        "t": "8. سانلىق مەلۇماتنىڭ ساقلىنىشى",
        "b": "• ئۈسكۈنىڭىزدىكى سانلىق مەلۇمات – ئۆچۈرگۈچە (تەڭشەك → ھېساباتنى ئۆچۈرۈش) ياكى Vakit نى ئۆچۈرۈۋەتكۈچە ساقلىنىدۇ.\n• Android زاپىسى – زاپاسلاشنى تاقىغۇچە ياكى ئۇنى ئۆچۈرگۈچە ساقلىنىدۇ.\n• چۈشۈرۈلگەن ئاۋازلار – تەڭشەك → ساقلاش ئىچىدىن ئۆچۈرگۈچە ياكى Vakit نى ئۆچۈرۈۋەتكۈچە ساقلىنىدۇ.\n• مۇلازىمېتىردىكى ئىشلىتىش ستاتىستىكىسى – يىغىندى ستاتىستىكا مەقسىتىدە ساقلىنىدۇ ۋە ئاپتوماتىك ئۆچۈرۈلمەيدۇ؛ تەلەپ قىلىنسا ئۆچۈرۈلىدۇ."
      },
      {
        "t": "9. بىخەتەرلىك",
        "b": "سانلىق مەلۇماتىڭىز تېلېفونىڭىزدا قالىدۇ، Android نىڭ ئەپ ئايرىش مۇھىتى (sandbox) ۋە ئۈسكۈنە شىفىرلاش ئارقىلىق قوغدىلىدۇ. بۇلۇت زاپاسلىرى ئېكران قۇلۇپىڭىزدىن ھاسىل قىلىنغان ئاچقۇچ بىلەن ئۇچتىن-ئۇچقا شىفىرلىنىدۇ. بارلىق تور ئۇلىنىشلىرى HTTPS ئىشلىتىدۇ."
      },
      {
        "t": "10. ھوقۇقلىرىڭىز ۋە كونتروللىرىڭىز",
        "b": "تۈركىيەنىڭ KVKK ۋە ياۋروپا ئىتتىپاقىنىڭ GDPR قانۇنى بويىچە ھوقۇقلىرىڭىز:\n• قايسى سانلىق مەلۇماتنىڭ بىر تەرەپ قىلىنىدىغانلىقىنى بىلىش ھوقۇقى\n• سانلىق مەلۇمات بىر تەرەپ قىلىنىشىغا قارشى تۇرۇش ھوقۇقى (Android تەڭشىكى → ئەپلەر → Vakit → ئىجازەتلەر ئىچىدىن ئورۇن/ئۇقتۇرۇش ئىجازىتىنى بىكار قىلالايسىز)\n• ئۆچۈرۈشنى تەلەپ قىلىش ھوقۇقى (تەڭشەك → ھېساباتنى ئۆچۈرۈش، ياكى ئەپنى ئۆچۈرۈۋېتىش؛ Google زاپىسىنى Android تەڭشىكىدىن ئۆچۈرەلەيسىز). مۇلازىمېتىرىمىزدىكى ئىشلىتىش ستاتىستىكىسىنى ئۆچۈرتۈش ئۈچۈن hakancelikdev@gmail.com غا خەت يېزىشىڭىزلا كۇپايە؛ تەلىپىڭىز ئەڭ كېچىككەندە 30 كۈن ئىچىدە ئورۇندىلىدۇ.\n• سانلىق مەلۇمات يۆتكىلىشچانلىقى ھوقۇقى\n• KVKK ئورگىنىغا ئىلتىماس قىلىش ھوقۇقى\n\nتەلەپلەر ئۈچۈن: hakancelikdev@gmail.com (ئەڭ كېچىككەندە 30 كۈن ئىچىدە جاۋاب قايتۇرىمىز)."
      },
      {
        "t": "11. بالىلار مەخپىيەتلىكى",
        "b": "Vakit Google Play دا «ھەممە ئادەم (3+)» تۈرىدە تەمىنلىنىدۇ، ئەمما بىز 13 ياشتىن كىچىك ئىشلەتكۈچىلەردىن بىلىپ تۇرۇپ شەخسىي سانلىق مەلۇمات يىغمايمىز. 13 ياشتىن كىچىك بالىنىڭ سانلىق مەلۇماتى يىغىلغانلىقىنى بىلىپ قالسىڭىز، hakancelikdev@gmail.com غا يېزىڭ؛ مۇناسىۋەتلىك سانلىق مەلۇمات دەرھال ئۆچۈرۈلىدۇ."
      },
      {
        "t": "12. بۇ سىياسەتتىكى ئۆزگىرىشلەر",
        "b": "ئەپنىڭ ئىقتىدارلىرى ياكى قانۇنىي تەلەپلەر ئۆزگەرگەندە بۇ سىياسەتنى يېڭىلىشىمىز مۇمكىن. بۇ بەتتىكى «ئاخىرقى يېڭىلانغان» ۋاقتى نۆۋەتتىكى نەشرىنى كۆرسىتىدۇ."
      },
      {
        "t": "13. ئالاقە",
        "b": "مەخپىيەتلىك سوئاللىرى، تەلەپلەر ياكى پىكىرلىرىڭىز ئۈچۈن: hakancelikdev@gmail.com\n\nسانلىق مەلۇمات مەسئۇلى: Hakan Çelik (تۈركىيە)"
      }
    ]
  },
  "ur": {
    "meta": {
      "title": "Vakit — رازداری کی پالیسی (Android)",
      "description": "Vakit آپ کی رازداری کا احترام کرتا ہے۔ آپ کو کسی اکاؤنٹ کی ضرورت نہیں، اور ہم آپ کا نام، ای میل، فون نمبر، تصاویر یا رابطے جیسی شناختی معلومات جمع نہیں کرتے۔"
    },
    "titleBefore": "رازداری کی پالیسی ",
    "titleEm": "Android",
    "desc": "آخری تازہ کاری: 6 اکتوبر 2026\n\nVakit آپ کی رازداری کا احترام کرتا ہے۔ آپ کو کسی اکاؤنٹ کی ضرورت نہیں، اور ہم آپ کا نام، ای میل، فون نمبر، تصاویر یا رابطے جیسی شناختی معلومات جمع نہیں کرتے۔ نماز کے اوقات، قبلہ کا رخ اور یاد دہانیاں آپ کے آلے پر شمار ہوتی ہیں۔ آپ کے عبادت کے ریکارڈ (ذکر، ختم، نشانیاں، اہداف، پسندیدہ مساجد) آپ کے آلے پر محفوظ ہوتے ہیں، اور اگر Android بیک اپ آن ہو تو آپ کے اپنے Google اکاؤنٹ میں بھی — یہ کبھی ہمارے سرور کو نہیں بھیجے جاتے۔ ہمارے سرور کو صرف استعمال کے اعداد و شمار بھیجے جاتے ہیں تاکہ ہم ایپ کو بہتر بنا سکیں؛ یہ ڈیٹا ایک ایسے صارف کوڈ سے منسلک ہوتا ہے جس میں کوئی شناختی معلومات نہیں۔ کوئی کریش رپورٹ یا اشتہاری شناخت کنندہ نہیں بھیجا جاتا۔",
    "sections": [
      {
        "t": "1. ہم کون سی معلومات جمع کرتے ہیں",
        "items": [
          {
            "name": "مقام کا ڈیٹا",
            "lines": [
              "مقصد: روزانہ نماز کے اوقات اور قبلہ کا رخ شمار کرنا، آپ کے شہر کا نام دکھانا اور قریبی مساجد تلاش کرنا",
              "پروسیسنگ: آپ کے آلے پر۔ آپ کے شہر کا نام دکھانے کے لیے کوآرڈینیٹس Android کی جیوکوڈنگ سروس (Google) کو بھیجے جاتے ہیں۔ جب آپ «قریبی مساجد» کھولتے ہیں تو تلاش کے علاقے کے کوآرڈینیٹس OpenStreetMap (Overpass API) کو بھیجے جاتے ہیں۔ کوآرڈینیٹس کبھی Vakit کے کسی سرور کو نہیں بھیجے جاتے۔",
              "مدتِ حفاظت: آپ کا آخری مقام آپ کے آلے پر رکھا جاتا ہے تاکہ نماز کے اوقات انٹرنیٹ کے بغیر شمار ہو سکیں، جب تک آپ اسے بدل نہ دیں یا ایپ حذف نہ کر دیں۔ مقام صرف ایپ کے استعمال کے دوران پڑھا جاتا ہے۔"
            ]
          },
          {
            "name": "رخ کا ڈیٹا",
            "lines": [
              "مقصد: زندہ قبلہ کمپاس",
              "پروسیسنگ: صرف آلے پر",
              "مدتِ حفاظت: محفوظ نہیں کیا جاتا"
            ]
          },
          {
            "name": "حرکت کا ڈیٹا",
            "lines": [
              "مقصد: کمپاس کی روانی اور استحکام (روٹیشن ویکٹر سینسر)",
              "پروسیسنگ: صرف آلے پر",
              "مدتِ حفاظت: محفوظ نہیں کیا جاتا"
            ]
          },
          {
            "name": "اطلاعات کا ڈیٹا",
            "lines": [
              "مقصد: مقامی نماز کی اطلاعات پہنچانا",
              "پروسیسنگ: AlarmManager / Android اطلاعاتی چینلز",
              "مدتِ حفاظت: بند کرنے یا ایپ ہٹانے تک"
            ]
          },
          {
            "name": "ترتیبات کا ڈیٹا",
            "lines": [
              "مقصد: آپ کی ترجیحات یاد رکھنا",
              "پروسیسنگ: DataStore (عمومی ترجیحات فرضی صارف کوڈ کے تحت ہمارے سرور کو بھیجی جاتی ہیں؛ کوئی ذاتی مواد شامل نہیں)",
              "مدتِ حفاظت: دوبارہ ترتیب دینے یا ایپ ہٹانے تک۔ سرور پر ترجیحات کا ڈیٹا خودکار طور پر حذف نہیں کیا جاتا؛ درخواست پر حذف کر دیا جاتا ہے۔"
            ]
          },
          {
            "name": "استعمال کے اعداد و شمار",
            "lines": [
              "مقصد: ایپ کی کارکردگی دیکھنا، خرابیاں پکڑنا اور تجربہ بہتر بنانا",
              "پروسیسنگ: جرمنی (نیورمبرگ) میں ہمارا محفوظ سرور؛ ایک مستقل صارف کوڈ سے منسلک جس میں کوئی شناختی معلومات نہیں",
              "مدتِ حفاظت: مجموعی اعداد و شمار کے لیے رکھا جاتا ہے اور خودکار طور پر حذف نہیں کیا جاتا (درخواست پر حذف کیا جاتا ہے)۔ اس میں شناختی ڈیٹا نہیں، مگر یہ ایک مستقل صارف کوڈ (فرضی نام) سے منسلک ہے۔"
            ]
          }
        ],
        "b": "ہم آپ کا نام، ای میل، فون نمبر، تصاویر، مائیکروفون، کیمرا، رابطے، اشتہاری ID یا GPS نقاط جمع نہیں کرتے۔ Vakit میں کوئی اکاؤنٹ سسٹم نہیں ہے۔ آپ کا مواد (ذکر کے عنوانات، نشانیاں، پڑھنے کی پیش رفت، اہداف) آپ کے آلے پر (DataStore / مقامی ڈیٹا بیس) رہتا ہے اور صرف اسی صورت Android بیک اپ میں شامل ہوتا ہے جب بیک اپ آن ہو؛ یہ ریکارڈ خود کبھی ہمارے سرور کو نہیں بھیجے جاتے۔\n\nہمارے سرور کو کیا جاتا ہے: ایک صارف کوڈ جس میں کوئی شناختی معلومات نہیں، آپ کا ملک (GPS نقاط نہیں)، آلے اور ورژن کی معلومات، آپ کی ایپ ترجیحات (زبان، شمار کا طریقہ، تھیم، مسلک، کیلنڈر کی قسم، نماز کی رہنمائی کے لیے منتخب صنف، اطلاعات اور قرآن/حدیث پڑھنے کی ترجیحات)، اور خصوصیات کے استعمال کے اعداد و شمار۔ یہ اعداد و شمار بتاتے ہیں کہ کوئی حصہ استعمال ہوا؛ ان میں آپ کے ریکارڈ کا مواد شامل نہیں۔ ایپ میں آپ جو الفاظ تلاش کرتے ہیں وہ بھیجے جاتے ہیں: ہم انہیں 80 حروف تک محفوظ کرتے ہیں تاکہ دیکھ سکیں کہ تلاش آپ کی ضرورت پوری کرتی ہے یا نہیں اور نتائج بہتر بنا سکیں۔"
      },
      {
        "t": "2. ہم آپ کا ڈیٹا کیسے استعمال کرتے ہیں",
        "b": "• نماز کے اوقات – Adhan لائبریری کے ذریعے آپ کے آلے پر انٹرنیٹ کے بغیر شمار ہوتے ہیں؛ اس کے لیے کوئی کوآرڈینیٹس نہیں بھیجے جاتے۔\n• قبلہ کا رخ – مقام اور قطب نما کی سمت آپ کے آلے پر ملائی جاتی ہیں۔\n• نماز کی اطلاعات – آپ کے آلے پر AlarmManager کے ذریعے طے کی جاتی ہیں؛ Android ایپ کوئی ریموٹ پُش اطلاع وصول نہیں کرتی۔\n• شہر کا نام – کوآرڈینیٹس Android کی جیوکوڈنگ سروس (Google) کو بھیجے جاتے ہیں؛ دستی طور پر شہر تلاش کرنے پر آپ کا لکھا ہوا متن بھیجا جاتا ہے۔\n• قریبی مساجد – تلاش کے علاقے کے کوآرڈینیٹس OpenStreetMap (Overpass API) کو بھیجے جاتے ہیں۔ راستہ دکھانے کے لیے مسجد کے مقام کے ساتھ Google Maps کھلتا ہے۔\n• قرآن کی آڈیو – تلاوتیں quran.com اور everyayah.com سے اسٹریم یا ڈاؤن لوڈ ہوتی ہیں؛ درخواست صرف آڈیو فائل کی نشاندہی کرتی ہے۔\n• جمعہ کا خطبہ – متن، PDF اور آڈیو Diyanet (dinhizmetleri.diyanet.gov.tr) سے ڈاؤن لوڈ ہوتے ہیں۔\n• فونٹس – کچھ فونٹس Google Play سروسز (Google Fonts) کے ذریعے ڈاؤن لوڈ ہوتے ہیں۔\n• آپ کا مواد – ذکر، ختم، نشانیاں اور اہداف آپ کے آلے پر محفوظ ہوتے ہیں۔\n\nاستعمال کے اعداد و شمار آپ کی شناخت سے نہیں بلکہ ایک بے ترتیب صارف کوڈ (فرضی نام) سے منسلک ہیں جس میں کوئی شناختی معلومات نہیں۔ اگر Android بیک اپ آن ہو تو یہ کوڈ آپ کے بیک اپ میں شامل ہوتا ہے، اس لیے اسی Google اکاؤنٹ پر Vakit دوبارہ انسٹال کرنے پر آپ وہی صارف شمار ہوتے ہیں۔ یہ ڈیٹا صرف ایپ کو بہتر بنانے کے لیے استعمال ہوتا ہے؛ نہ کبھی بیچا جاتا ہے نہ اشتہارات کے لیے استعمال ہوتا ہے۔ Android ورژن میں کوئی کریش رپورٹنگ یا اشتہاری SDK نہیں ہے۔"
      },
      {
        "t": "3. بیک اپ اور ہم آہنگی (Google Backup)",
        "b": "Vakit آپ کے عبادت کے ریکارڈ (ذکر، ختم، نشانیاں، اہداف، پسندیدہ مساجد) آپ کے آلے پر محفوظ کرتا ہے۔ اگر Android بیک اپ آن ہو تو Android انہیں آپ کے اپنے Google اکاؤنٹ کی نجی بیک اپ جگہ میں شامل کرتا ہے:\n• کلاؤڈ بیک اپ صرف ان آلات پر استعمال ہوتا ہے جو اینڈ ٹو اینڈ انکرپٹڈ بیک اپ کی سہولت رکھتے ہیں؛ کلید آپ کے اسکرین لاک سے بنتی ہے، اس لیے نہ ہم اور نہ کوئی تیسرا فریق اسے پڑھ سکتا ہے۔\n• جب آپ Vakit کو اسی Google اکاؤنٹ سے سائن اِن آلے پر دوبارہ انسٹال کرتے ہیں تو بیک اپ بحال ہو جاتا ہے۔\n• ڈاؤن لوڈ شدہ آڈیو، ایپ کے ساتھ آنے والا مواد کا ڈیٹا بیس اور کیش بیک اپ نہیں ہوتے۔\n• اگر آپ Android ترتیبات میں بیک اپ بند کر دیں تو آپ کا ڈیٹا صرف آپ کے آلے پر رہتا ہے۔"
      },
      {
        "t": "4. بیرونی خدمات",
        "b": "Vakit درج ذیل خدمات محدود مقاصد کے لیے استعمال کرتا ہے۔ ان میں سے کسی کو بھی Vakit کی طرف سے آپ کی شناخت نہیں ملتی:\n• Google – Android بیک اپ، شہر کے نام کے لیے جیوکوڈنگ، Google Fonts، Play کا ایپ میں جائزہ (In-App Review)، اور جب آپ راستہ مانگیں تو Google Maps۔\n• OpenStreetMap (Overpass API) – قریبی مساجد کی تلاش (تلاش کے علاقے کے کوآرڈینیٹس)۔\n• quran.com اور everyayah.com – قرآن کی تلاوت کی آڈیو۔\n• Diyanet İşleri Başkanlığı – جمعہ کے خطبے کا متن اور آڈیو۔\n• Cloudflare – Vakit سرور تک جانے والے ٹریفک (استعمال کے اعداد و شمار) کی ترسیل اور ڈاؤن لوڈ کیے جا سکنے والے مواد کے پیکجز کی فراہمی۔\nہر سروس درخواستوں کو اپنی رازداری کی پالیسی کے مطابق پراسیس کرتی ہے۔"
      },
      {
        "t": "5. اشتہارات",
        "b": "Vakit کوئی اشتہار نہیں دکھاتا اور اس میں کوئی اشتہاری SDK نہیں ہے۔ آپ کی اشتہاری ID نہیں پڑھی جاتی۔"
      },
      {
        "t": "6. ادائیگیاں",
        "b": "Vakit میں کوئی ان-ایپ خریداری نہیں ہے اور یہ ادائیگی کی کوئی معلومات پراسیس نہیں کرتا۔"
      },
      {
        "t": "7. ڈیٹا کی شراکت",
        "b": "ہم آپ کا ڈیٹا نہیں بیچتے اور نہ مارکیٹنگ کے لیے شیئر کرتے ہیں۔ صرف «بیرونی خدمات» کے تحت درج خدمات ڈیٹا وصول کرتی ہیں، اور صرف وہاں بیان کردہ مقصد کے لیے۔ استعمال کے اعداد و شمار جرمنی (نیورمبرگ) میں ہمارے محفوظ سرور پر ایسے صارف کوڈ کے ساتھ رکھے جاتے ہیں جس میں کوئی شناختی معلومات نہیں، اور تیسرے فریق کے ساتھ شیئر نہیں کیے جاتے۔"
      },
      {
        "t": "8. ڈیٹا کی مدتِ حفاظت",
        "b": "• آپ کے آلے پر ڈیٹا – اس وقت تک رکھا جاتا ہے جب تک آپ اسے حذف نہ کریں (ترتیبات → اکاؤنٹ حذف کریں) یا Vakit ان انسٹال نہ کریں۔\n• Android بیک اپ – اس وقت تک رکھا جاتا ہے جب تک آپ بیک اپ بند نہ کریں یا اسے حذف نہ کریں۔\n• ڈاؤن لوڈ شدہ آڈیو – اس وقت تک رکھی جاتی ہے جب تک آپ اسے ترتیبات → جگہ سے حذف نہ کریں یا Vakit ان انسٹال نہ کریں۔\n• سرور پر استعمال کے اعداد و شمار – مجموعی شماریاتی مقاصد کے لیے رکھے جاتے ہیں اور خودکار طور پر حذف نہیں کیے جاتے؛ درخواست پر حذف کر دیے جاتے ہیں۔"
      },
      {
        "t": "9. سلامتی",
        "b": "آپ کا ڈیٹا آپ کے فون پر رہتا ہے اور Android کے ایپ سینڈ باکس اور آلے کی انکرپشن سے محفوظ رہتا ہے۔ کلاؤڈ بیک اپ آپ کے اسکرین لاک سے بنی کلید کے ساتھ اینڈ ٹو اینڈ انکرپٹڈ ہوتے ہیں۔ تمام نیٹ ورک کنکشن HTTPS استعمال کرتے ہیں۔"
      },
      {
        "t": "10. آپ کے حقوق اور اختیارات",
        "b": "ترکی کے KVKK اور یورپی یونین کے GDPR کے تحت آپ کے حقوق یہ ہیں:\n• یہ جاننے کا حق کہ کون سا ڈیٹا پراسیس ہوتا ہے\n• ڈیٹا کی پروسیسنگ پر اعتراض کا حق (آپ Android ترتیبات → ایپس → Vakit → اجازتیں سے مقام/اطلاعات کی اجازتیں واپس لے سکتے ہیں)\n• حذف کرانے کی درخواست کا حق (ترتیبات → اکاؤنٹ حذف کریں، یا ایپ ان انسٹال کریں؛ Google بیک اپ آپ Android ترتیبات سے حذف کر سکتے ہیں)۔ ہمارے سرور پر موجود استعمال کے اعداد و شمار حذف کرانے کے لیے بس hakancelikdev@gmail.com پر لکھیں؛ آپ کی درخواست زیادہ سے زیادہ 30 دن میں پوری کر دی جاتی ہے۔\n• ڈیٹا کی منتقلی کا حق\n• KVKK ادارے سے رجوع کرنے کا حق\n\nدرخواستوں کے لیے: hakancelikdev@gmail.com (ہم زیادہ سے زیادہ 30 دن میں جواب دیتے ہیں)۔"
      },
      {
        "t": "11. بچوں کی رازداری",
        "b": "Vakit، Google Play پر «سب کے لیے (3+)» زمرے میں پیش کیا جاتا ہے، مگر ہم 13 سال سے کم عمر صارفین سے جان بوجھ کر ذاتی ڈیٹا جمع نہیں کرتے۔ اگر آپ کو علم ہو کہ 13 سال سے کم عمر کسی بچے کا ڈیٹا جمع ہوا ہے تو براہ کرم hakancelikdev@gmail.com پر لکھیں؛ متعلقہ ڈیٹا فوراً حذف کر دیا جائے گا۔"
      },
      {
        "t": "12. اس پالیسی میں تبدیلیاں",
        "b": "جب ایپ کی خصوصیات یا قانونی تقاضے بدلیں تو ہم اس پالیسی کو اپ ڈیٹ کر سکتے ہیں۔ اس صفحے پر «آخری تازہ کاری» کی تاریخ موجودہ ورژن کو ظاہر کرتی ہے۔"
      },
      {
        "t": "13. رابطہ",
        "b": "رازداری کے سوالات، درخواستوں یا رائے کے لیے: hakancelikdev@gmail.com\n\nڈیٹا کنٹرولر: حاقان چیلک (ترکی)"
      }
    ]
  },
  "zh": {
    "meta": {
      "title": "Vakit — 隐私政策 (Android)",
      "description": "Vakit 尊重你的隐私。你无需注册账号，我们也不收集你的姓名、邮箱、电话号码、照片或通讯录等身份信息。"
    },
    "titleBefore": "隐私政策 ",
    "titleEm": "Android",
    "desc": "上次更新： 2026年10月6日\n\nVakit 尊重你的隐私。你无需注册账号，我们也不收集你的姓名、邮箱、电话号码、照片或通讯录等身份信息。礼拜时间、朝向和提醒都在你的设备上计算。你的功修记录（记主、通读、书签、目标、收藏的清真寺）保存在你的设备上；如果开启了 Android 备份，也会保存在你自己的 Google 账号中——这些记录从不发送到我们的服务器。只有使用统计会发送到我们的服务器，以便我们改进应用；这些数据与一个不含任何身份信息的用户代码关联。不会发送崩溃报告或广告标识符。",
    "sections": [
      {
        "t": "1. 我们收集的信息",
        "items": [
          {
            "name": "位置数据",
            "lines": [
              "用途： 计算每日礼拜时间与朝向，显示你所在城市的名称，并查找附近的清真寺",
              "处理方式： 在你的设备上。为了显示城市名称，坐标会发送到 Android 的地理编码服务（Google）。当你打开“附近的清真寺”时，搜索区域的坐标会发送到 OpenStreetMap（Overpass API）。坐标从不会发送到 Vakit 的服务器。",
              "保留期： 你最后的位置会保存在设备上，以便离线计算礼拜时间，直到你更改位置或删除应用。仅在使用应用时读取位置。"
            ]
          },
          {
            "name": "方位数据",
            "lines": [
              "用途： 实时朝向罗盘",
              "处理方式： 仅在设备上处理",
              "保留期： 不存储"
            ]
          },
          {
            "name": "运动数据",
            "lines": [
              "用途： 罗盘平滑与稳定（旋转矢量传感器）",
              "处理方式： 仅在设备上处理",
              "保留期： 不存储"
            ]
          },
          {
            "name": "通知数据",
            "lines": [
              "用途： 发送本地礼拜通知",
              "处理方式： AlarmManager / Android 通知渠道",
              "保留期： 直到关闭或删除应用"
            ]
          },
          {
            "name": "设置数据",
            "lines": [
              "用途： 记住你的偏好",
              "处理方式： DataStore（一般偏好会以假名用户代码发送到我们的服务器；不包含任何个人内容）",
              "保留期： 直到重置或删除应用。服务器上的偏好数据不会自动删除；可应要求删除。"
            ]
          },
          {
            "name": "使用统计",
            "lines": [
              "用途： 监测应用性能、发现缺陷并改进体验",
              "处理方式： 我们位于德国（纽伦堡）的安全服务器；与一个不含任何身份信息的持久用户代码关联",
              "保留期： 为汇总统计而保留，不会自动删除（可应要求删除）。不含身份数据，但与一个持久用户代码（假名）关联。"
            ]
          }
        ],
        "b": "我们不收集你的姓名、邮箱、电话号码、照片、麦克风、摄像头、通讯录、广告 ID 或 GPS 坐标。Vakit 没有账号系统。你的内容（记主名称、书签、阅读进度、目标）保留在你的设备上（DataStore / 本地数据库），仅在开启 Android 备份时才会包含在备份中；这些记录本身从不发送到我们的服务器。\n\n发送到我们服务器的内容：一个不含任何身份信息的用户代码、你所在的国家（不是 GPS 坐标）、设备与版本信息、你的应用偏好（语言、计算方法、主题、教法学派、历法类型、你为礼拜指南选择的性别、通知与《古兰经》/圣训的阅读偏好），以及功能使用统计。这些统计显示某个板块被使用过；不包含你记录的内容。你在应用内搜索的词会被发送：我们最多记录 80 个字符，以了解搜索是否找到了你需要的内容并改进结果。"
      },
      {
        "t": "2. 我们如何使用你的数据",
        "b": "• 礼拜时间 – 使用 Adhan 库在你的设备上离线计算；为此不会发送任何坐标。\n• 朝向 – 位置与指南针方向在你的设备上结合。\n• 礼拜通知 – 通过 AlarmManager 在你的设备上安排；Android 应用不接收远程推送通知。\n• 城市名称 – 坐标会发送到 Android 的地理编码服务（Google）；手动搜索城市时会发送你输入的文字。\n• 附近的清真寺 – 搜索区域的坐标会发送到 OpenStreetMap（Overpass API）。路线导航会以清真寺的位置打开 Google 地图。\n• 古兰经音频 – 诵读从 quran.com 和 everyayah.com 在线播放或下载；请求仅标识音频文件。\n• 主麻讲道 – 文本、PDF 和音频从 Diyanet（dinhizmetleri.diyanet.gov.tr）下载。\n• 字体 – 部分字体通过 Google Play 服务（Google Fonts）下载。\n• 你的内容 – 记主、通读、书签和目标保存在你的设备上。\n\n使用统计关联的不是你的身份，而是一个不含任何身份信息的随机用户代码（假名）。如果开启了 Android 备份，该代码会包含在你的备份中，因此在同一 Google 账号上重新安装 Vakit 会被算作同一位用户。这些数据仅用于改进应用；从不出售，也不用于广告。Android 版本不含任何崩溃报告或广告 SDK。"
      },
      {
        "t": "3. 备份与同步（Google 备份）",
        "b": "Vakit 将你的功修记录（记主、通读、书签、目标、收藏的清真寺）保存在你的设备上。如果开启了 Android 备份，Android 会将它们放入你自己 Google 账号的私人备份空间：\n• 云备份仅在支持端到端加密备份的设备上使用；密钥由你的屏幕锁派生，因此我们和第三方都无法读取。\n• 当你在登录同一 Google 账号的设备上重新安装 Vakit 时，备份会被恢复。\n• 已下载的音频、应用自带的内容数据库和缓存不会被备份。\n• 如果你在 Android 设置中关闭备份，你的数据只会保留在你的设备上。"
      },
      {
        "t": "4. 第三方服务",
        "b": "Vakit 出于有限的目的使用以下服务。其中任何一项都不会从 Vakit 获得你的身份信息：\n• Google – Android 备份、用于城市名称的地理编码、Google Fonts、Play 应用内评价（In-App Review），以及你请求路线时的 Google 地图。\n• OpenStreetMap（Overpass API） – 附近清真寺搜索（搜索区域的坐标）。\n• quran.com 和 everyayah.com – 古兰经诵读音频。\n• Diyanet İşleri Başkanlığı – 主麻讲道的文本和音频。\n• Cloudflare – 转发发往 Vakit 服务器的流量（使用统计）并分发可下载的内容包。\n每项服务都按照其自身的隐私政策处理请求。"
      },
      {
        "t": "5. 广告",
        "b": "Vakit 不显示广告，也不含任何广告 SDK。不会读取你的广告 ID。"
      },
      {
        "t": "6. 付款",
        "b": "Vakit 没有应用内购买，也不处理任何付款信息。"
      },
      {
        "t": "7. 数据共享",
        "b": "我们不会出售你的数据，也不会为营销目的共享数据。只有“第三方服务”中列出的服务会接收数据，且仅用于其中所述的目的。使用统计存储在我们位于德国（纽伦堡）的安全服务器上，与一个不含任何身份信息的用户代码关联，且不会与第三方共享。"
      },
      {
        "t": "8. 数据保留",
        "b": "• 设备上的数据 – 保留至你将其删除（设置 → 删除账户）或卸载 Vakit。\n• Android 备份 – 保留至你关闭备份或将其删除。\n• 已下载的音频 – 保留至你在 设置 → 存储 中删除或卸载 Vakit。\n• 服务器上的使用统计 – 出于汇总统计目的保留，不会自动删除；可应要求删除。"
      },
      {
        "t": "9. 安全",
        "b": "你的数据保留在你的手机上，受 Android 应用沙盒和设备加密保护。云备份使用由你的屏幕锁派生的密钥进行端到端加密。所有网络连接均使用 HTTPS。"
      },
      {
        "t": "10. 你的权利与控制",
        "b": "根据土耳其 KVKK 和欧盟 GDPR，你享有以下权利：\n• 了解哪些数据被处理的权利\n• 反对数据处理的权利（你可以在 Android 设置 → 应用 → Vakit → 权限 中撤销位置/通知权限）\n• 要求删除的权利（设置 → 删除账户，或卸载应用；你可以在 Android 设置中删除 Google 备份）。若要删除我们服务器上的使用统计，只需写信至 hakancelikdev@gmail.com；你的请求最迟在 30 天内完成。\n• 数据可携带权\n• 向 KVKK 管理机构申诉的权利\n\n如有请求：hakancelikdev@gmail.com（我们最迟在 30 天内回复）。"
      },
      {
        "t": "11. 儿童隐私",
        "b": "Vakit 在 Google Play 上属于“所有人（3+）”类别，但我们不会在知情的情况下收集 13 岁以下用户的个人数据。若你发现有 13 岁以下儿童的数据被收集，请写信至 hakancelikdev@gmail.com，相关数据将被立即删除。"
      },
      {
        "t": "12. 本政策的变更",
        "b": "当应用功能或法律要求发生变化时，我们可能会更新本政策。本页上的“上次更新”日期表示当前版本。"
      },
      {
        "t": "13. 联系方式",
        "b": "隐私方面的问题、请求或反馈：hakancelikdev@gmail.com\n\n数据控制者：Hakan Çelik（土耳其）"
      }
    ]
  }
};
