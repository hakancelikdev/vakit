/**
 * Azerbaijani legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Bu səhifə rahatlıq üçün təqdim olunan tərcümədir; ingiliscə versiyadan fərqlənərsə, ingiliscə versiya əsas götürülür.",
  privacy: {
    meta: {
      title: "Vakit — Məxfilik Siyasəti",
      description:
        "Vakit-in məxfilik siyasəti. Hesab tələb olunmur, GPS koordinatları toplanmır; xətm və əlfəcin qeydləri yalnız öz Apple iCloud hesabınız vasitəsilə sinxronlaşır.",
    },
    title: "Məxfilik <em>Siyasəti</em>",
    desc: "Son yenilənmə: 10 sentyabr 2026 — Versiya 1.7.4\n\nVakit məxfiliyinizə hörmət edir. Hesab tələb olunmur və şəxsiyyətinizi müəyyən edən məlumatları (ad, e-poçt, telefon, şəkillər, kontaktlar) toplamırıq. Namaz vaxtları, qiblə istiqaməti və xatırlatmalar tamamilə cihazınızda hesablanır. Xətm irəliləyişiniz, əlfəcinləriniz, hədəfləriniz və sevimli məscidləriniz cihazınızda qalır və yalnız öz Apple iCloud hesabınız daxilində sinxronlaşır — heç vaxt serverlərimizə göndərilmir. Zikr siyahınız bunun istisnasıdır: tətbiqi yaxşılaşdıra bilməyimiz üçün istifadə statistikası ilə birlikdə serverlərimizə göndərilir (ətraflı: 1-ci bölmə). Serverlərimizə göndərilən hər şey kimlik məlumatı daşımayan daimi istifadəçi koduna bağlıdır.",
    sections: [
      {
        t: "1. Topladığımız məlumatlar",
        b: "TOPLAMADIĞIMIZ məlumatlar:\n• Ad, e-poçt, telefon, şəkillər, mikrofon, kamera, kontaktlar\n• GPS koordinatları (enlik/uzunluq) – serverlərimizə heç vaxt göndərilmir\n• Hesab məlumatları (Vakit-in öz hesab sistemi yoxdur)\n\nCihazınızda saxlanılan və şəxsi iCloud sahənizdə sinxronlaşan məlumatlar:\n• Zikr qeydləri, xətm irəliləyişi, ibadət hədəfləri\n• Quran və hədis əlfəcinləri, oxuma tarixçəsi\n• Surə tamamlama sayğacları, hədis bölmələrinin vəziyyəti\n• Qəza namazı və oruc qəzası dəftərləriniz\n• Üzrlü gün işarələriniz\n• Sevimli məscidlər\n• Tətbiq seçimləri (dil, hesablama üsulu, bildiriş ayarları, mövzu)\n\nServerlərimizə göndərilən məlumatlar — kimlik məlumatı daşımayan daimi istifadəçi koduna bağlıdır (təxəllüsdür, anonim deyil):\n• Regional məkan (ölkə, şəhər, rayon) – GPS koordinatları DEYİL\n• Cihaz modeli, iOS/macOS versiyası, tətbiq versiyası, watchOS versiyası\n• Tətbiq seçimləri (dil, hesablama üsulu, mövzu, məzhəb, təqvim növü, namaz bələdçisi üçün seçdiyiniz cins, hansı vaxtlar üçün bildiriş istədiyiniz, həmçinin Quran və hədis oxuma seçimləriniz — şrift ölçüsü, tərcümə, qari, müshəf xətti). Oxuduğunuz yer və oxuma tarixçəniz bura daxil DEYİL.\n• Funksiya istifadə statistikası (ekran baxışları, funksiya istifadəsi). Bu statistika bir bölmənin istifadə olunduğunu göstərir — məsələn, üzrlü günün işarələndiyini və ya qəza qeydinin edildiyini. Dəftərin özü (qeydlərinizin siyahısı) göndərilmir. Göndərilən, həmin əməliyyatın edildiyi faktı və bəzi rəqəmlərdir — məsələn, işarələdiyiniz namaz, gündəlik ibadət saylarınız, qalan qəza borcunuz, yadda saxladığınız ayənin və ya hədisin nömrəsi; hər statistika kimi zaman damğası daşıyır.\n• Tətbiqdə etdiyiniz axtarışların mətni (Quran, hədis, zikr, Əsmayi-Hüsna, məscid və ayar axtarışları) – hansı sözlərdə axtarışın axtardığınızı tapa bilmədiyini görüb onu düzəltmək üçün toplanır; ən çox 80 simvol saxlanılır.\n• Zikr siyahınız – zikrin adı, növü, kateqoriyası və sayğacları; özünüzün əlavə etdiyiniz zikrlər üçün yazdığınız ərəbcə mətn, izah və mənbə məlumatı da daxil olmaqla. Hansı zikrlərin nə qədər tez-tez istifadə olunduğunu görüb zikr bölməsini yaxşılaşdırmaq üçün toplanır.\n• Çökmə hesabatları (Firebase Crashlytics vasitəsilə, şəxsi məlumat daşımır)\n\nBu istifadəçi kodu iCloud açar zənciri ilə sinxronlaşdığı üçün eyni Apple ID-yə bağlı cihazlarınız bir istifadəçi sayılır və tətbiqi silib yenidən quraşdırdıqda kod saxlanılır. Kod heç bir kimlik məlumatı daşımır; məlumatlarınız satılmır və reklam üçün istifadə olunmur.",
      },
      {
        t: "2. Məlumatlarınızı necə istifadə edirik",
        b: "• Namaz vaxtının hesablanması – Məkan cihazınızda yerli olaraq, Adhan kitabxanası ilə oflayn emal olunur.\n• Qiblə istiqaməti – Məkan və kompas istiqaməti cihazda birləşdirilir.\n• Məkan adı – Olduğunuz yerin adını göstərmək üçün koordinatlarınız Apple-ın məkan adı xidmətinə göndərilir; Vakit serverinə göndərilmir.\n• İbadət xatırlatmaları – Yerli bildirişlər iOS və macOS tərəfindən cihazda planlanır.\n• Elan bildirişləri – Mübarək gün və versiya elanları Firebase Cloud Messaging ilə hamıya birdən göndərilir; şəxsə xüsusi hədəfləmə yoxdur.\n• Cümə xütbəsi – Həftənin xütbəsi Diyanet-in açıq səhifəsindən endirilir; sorğu kimlik məlumatınızı daşımır.\n• Yaxındakı məscidlər – Məkanınız Apple MapKit-ə göndərilir (məscid axtarışı, məsafə, marşrut); Vakit serverlərinə göndərilmir.\n• İstifadəçi məlumatları (zikr, xətm, əlfəcinlər) – Cihazınızda Core Data ilə saxlanılır və şəxsi Apple iCloud sahənizdə sinxronlaşır. Bunlardan yalnız zikr siyahısı əlavə olaraq Vakit serverinə də göndərilir (bax: 1-ci bölmə).\n• İnkişaf və təkmilləşdirmə – İstifadə statistikası (GPS koordinatları olmadan) performansı izləmək və xətaları aşkarlamaq üçün istifadə olunur.",
      },
      {
        t: "3. iCloud sinxronizasiyası (CloudKit)",
        b: "Vakit ibadət qeydlərinizi (zikr, xətm, əlfəcinlər, hədəflər, sevimli məscidlər) Apple-ın CloudKit infrastrukturu vasitəsilə cihazlarınız arasında sinxronlaşdırır. Bu məlumatlar:\n• Yalnız öz Apple ID-nizə məxsus şəxsi bazada (private database) saxlanılır.\n• Apple infrastrukturunda şifrələnir; nə biz, nə Apple işçiləri, nə də üçüncü tərəflər bu məlumatlara baxa bilər.\n• iPhone, iPad, Mac və Apple Watch arasında avtomatik sinxronlaşır.\n• iCloud-u söndürdükdə yalnız cihazınızda qalır.\n• «Hesabı sil» funksiyasından istifadə etdikdə və ya Vakit məlumatlarını iCloud-dan sildikdə bütün cihazlarınızdan silinir.\n\nƏtraflı: apple.com/legal/privacy",
      },
      {
        t: "4. Apple Watch və Mac məlumatları",
        b: "Vakit watchOS 9+ üçün müşayiətçi tətbiq təqdim edir. Saatda:\n• Məkan icazəsi saatda ayrıca verilir; iPhone-da Vakit quraşdırılıbsa, məkan WatchConnectivity ilə iPhone-dan alınır, əks halda saatın GPS-i istifadə olunur.\n• Kompas sensoru qiblə üçün cihazda emal olunur; heç vaxt serverə göndərilmir.\n• Sağlamlıq (HealthKit), aktivlik və ya ürək döyüntüsü məlumatlarını oxumuruq.\n• Bildirişlər iOS bildiriş güzgüləməsi ilə iPhone-dan ötürülür; saat təkbaşına işləyirsə, öz yerli bildirişlərini planlayır.\n\nMac-də (macOS 13+):\n• Mac tətbiqi iPhone tətbiqinin eynisidir; məlumatlarınız yenə cihazda saxlanılır və şəxsi iCloud sahənizdə sinxronlaşır.\n• Mac-də kompas aparatı olmadığı üçün canlı qiblə kompası yoxdur; istiqamət və məsafə məkanınıza görə hesablanır və mətnlə göstərilir.\n• Mac-də məkan GPS əvəzinə Wi-Fi əsaslı məkan xidmətindən gəlir və yenə serverlərimizə göndərilmir.\n• Bildiriş icazəsi və bildiriş ayarları hər cihazda ayrıdır; Mac-də etdiyiniz dəyişiklik iPhone-unuza təsir etmir.",
      },
      {
        t: "5. Üçüncü tərəf xidmətləri",
        b: "Vakit aşağıdakı xidmətlərdən məhdud məqsədlərlə istifadə edir. Onların heç biri şəxsi kimliyinizlə bağlı deyil:\n\n• Apple iCloud / CloudKit – İstifadəçi məlumatlarının sinxronizasiyası (şəxsi iCloud sahənizdə).\n• Apple MapKit – Yaxındakı məscidlər, xəritə və marşrut (məkan Apple-a göndərilir).\n• Firebase Crashlytics (Google) – Kimlik məlumatı daşımayan çökmə hesabatları (stack trace, cihaz modeli, iOS/macOS versiyası).\n• Firebase Remote Config (Google) – Funksiya bayraqları və mərhələli yayım (cihazdan məlumat oxumur).\n• Apple StoreKit 2 – Könüllü ianələr (tətbiqdaxili alış). Ödəniş məlumatlarınızı Apple emal edir; Vakit kart məlumatlarını heç vaxt görmür.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Mübarək gün və versiya elanları. Elanlar mövzu üzrə hamıya birdən göndərilir; şəxsə xüsusi hədəfləmə yoxdur.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Cümə xütbəsinin mətni və səs yazısı.\n• Vakit serveri (Almaniya, Frankfurt) – İstifadə statistikası və zikr siyahınız; kimlik məlumatı daşımayan istifadəçi koduna bağlıdır. Xətm, əlfəcin, hədəf və oxuma qeydləriniz bura heç vaxt göndərilmir.\n\nQeyd: Firebase Analytics İSTİFADƏ OLUNMUR; reklam identifikatoru (IDFA) toplanmır.\n\nGoogle-un məxfilik siyasəti: policies.google.com/privacy",
      },
      {
        t: "6. Reklamlar",
        b: "Vakit reklam göstərmir. Tətbiqin yeganə gəlir mənbəyi istifadəçilərin könüllü ianələridir.",
      },
      {
        t: "7. İanələr (tətbiqdaxili alış)",
        b: "Vakit pulsuzdur. Tərtibatçını dəstəkləmək üçün «Vakit-i Yaşat» ekranından ₺10-dan ₺10.000-ə qədər olan pillələrdə könüllü ianə edə bilərsiniz. Bu əməliyyatlar:\n• Apple StoreKit 2 ilə emal olunur; ödəniş məlumatlarınız (kart, IBAN, Apple Pay) yalnız Apple-a ötürülür.\n• Vakit ödəniş üsulunuzu və ya maliyyə məlumatlarınızı heç vaxt görmür və saxlamır.\n• İanələrin geri qaytarılması yalnız Apple üzərindən tələb oluna bilər (reportaproblem.apple.com).",
      },
      {
        t: "8. Məlumatların saxlanma müddəti",
        b: "• Cihazdakı yerli məlumatlar – Tətbiqi silənə qədər saxlanılır.\n• iCloud məlumatları – Vakit məlumatlarını iCloud-dan silənə və ya Apple ID-nizi deaktiv edənə qədər saxlanılır.\n• Serverdəki istifadə statistikası – 180 gün (təxminən 6 ay) saxlanılır, sonra avtomatik silinir. Axtarış sorğularının mətnləri də bu müddətə tabedir.\n• Çökmə hesabatları (Crashlytics) – 90 gün saxlanılır, sonra silinir.\n• Server logları – 30 gün ərzində rotasiya olunur.",
      },
      {
        t: "9. Hüquqlarınız (KVKK / GDPR)",
        b: "Türkiyənin KVKK qanunu və Aİ-nin GDPR qaydaları çərçivəsində aşağıdakı hüquqlara maliksiniz:\n• Haqqınızda hansı məlumatların toplandığını öyrənmək hüququ\n• Məlumatların emalına etiraz etmək hüququ (iOS-da Ayarlar → Vakit, Mac-də Sistem Ayarları → Vakit bölməsindən məkan, bildiriş və hərəkət icazələrini ləğv edə bilərsiniz)\n• Məlumatlarınızın silinməsini tələb etmək hüququ: Ayarlar → Hesabı sil cihazınızdakı və iCloud-dakı bütün məlumatlarınızı silir. Serverimizdəki istifadə statistikasının silinməsi üçün hakancelikdev@gmail.com ünvanına yazmağınız kifayətdir; müraciətiniz ən geci 30 gün ərzində yerinə yetirilir.\n• Məlumatların daşınması hüququ\n• KVKK qurumuna müraciət etmək hüququ\n\nMüraciətlərinizi hakancelikdev@gmail.com ünvanına göndərə bilərsiniz; ən geci 30 gün ərzində cavab veririk.",
      },
      {
        t: "10. Uşaqların məxfiliyi",
        b: "Vakit App Store-da 4+ yaş kateqoriyasında təqdim olunur, lakin 13 yaşdan kiçik istifadəçilərdən bilərəkdən şəxsi məlumat toplamırıq. 13 yaşdan kiçik bir uşağın məlumat verdiyini düşünürsünüzsə, hakancelikdev@gmail.com ünvanına yazın; müvafiq məlumatlar dərhal silinəcək.",
      },
      {
        t: "11. Təhlükəsizlik",
        b: "Bütün yerli məlumatlar cihazınızda qalır və iOS/macOS sandbox-u və cihaz şifrələməsi ilə qorunur. iCloud məlumatları Apple infrastrukturunda şifrələnir. Serverimizə göndərilən məlumatlar HTTPS/TLS ilə ötürülür və şifrələnmiş verilənlər bazasında saxlanılır; kimlik məlumatı daşımır. Vakit həmçinin həssas əməliyyatlar zamanı əlavə qoruma üçün jailbreak, debugger və inyeksiya aşkarlanması aparır.",
      },
      {
        t: "12. Siyasətdəki dəyişikliklər",
        b: "Bu siyasət tətbiq inkişaf etdikcə yenilənə bilər. Əhəmiyyətli dəyişikliklərdə bu səhifədəki «Son yenilənmə» tarixi təzələnir və tətbiq daxilində bildiriş göstərilir. Siyasəti vaxtaşırı nəzərdən keçirməyinizi tövsiyə edirik.",
      },
      {
        t: "13. Əlaqə",
        b: "Məxfiliklə bağlı suallar, müraciətlər və ya rəylər üçün: hakancelikdev@gmail.com\n\nMəlumat nəzarətçisi: Hakan Çelik (Türkiyə)",
      },
    ],
  },
  terms: {
    meta: {
      title: "Vakit — İstifadə Şərtləri",
      description:
        "Vakit-in istifadə şərtləri. İstifadəsi pulsuzdur, könüllü ianə (IAP) imkanı var; bütün əsas funksiyalar pulsuzdur.",
    },
    title: "İstifadə <em>Şərtləri</em>",
    desc: "Son yenilənmə: 10 sentyabr 2026 — Versiya 1.7.4\n\nTətbiqimizi endirməklə, quraşdırmaqla və ya istifadə etməklə bu Şərtlərə əməl etməyi qəbul edirsiniz. Zəhmət olmasa, bu Şərtləri diqqətlə oxuyun.",
    sections: [
      {
        t: "1. Şərtlərin qəbulu",
        b: "Vakit-ə daxil olmaqla və ondan istifadə etməklə bu razılaşmanın şərt və müddəalarına əməl etməyi qəbul edirsiniz. Razı deyilsinizsə, zəhmət olmasa, bu xidmətdən istifadə etməyin.",
      },
      {
        t: "2. Xidmətin təsviri",
        b: "Vakit namaz vaxtları, qiblə istiqaməti, Quran, hədis, zikr sayğacı, namaz/dəstəmaz bələdçiləri, xətm və ibadət izləmə, cümə xütbəsi, yaxındakı məscidlər və dini günlər təqvimi kimi ibadət alətləri təqdim edən pulsuz tətbiqdir. iOS 16.4+ və macOS 13+ üzərində işləyir, watchOS 9+ üçün Apple Watch müşayiətçi tətbiqini də ehtiva edir.",
      },
      {
        t: "3. Pulsuz istifadə və könüllü ianələr",
        b: "Vakit-in bütün əsas funksiyaları pulsuzdur. Tətbiq reklam göstərmir (istifadəçinin özünün başlatdığı, könüllü «Sədəqə rejimi»ndəki mükafatlı video reklamlar istisna olmaqla).\n\nTərtibatçını dəstəkləmək istəyən istifadəçilər «Vakit-i Yaşat» ekranından ₺10-dan ₺10.000-ə qədər olan pillələrdə könüllü ianə edə bilər. Bu ianələr:\n• Apple In-App Purchase (StoreKit 2) ilə emal olunur.\n• İstehlak olunan (consumable) məhsullardır; ianə müqabilində əlavə funksiya və ya abunə açılmır.\n• Geri qaytarma tələbləri yalnız Apple üzərindən edilə bilər (reportaproblem.apple.com).\n• Apple-ın ödəniş şərtləri və App Store qaydaları tətbiq olunur.",
      },
      {
        t: "4. Reklamlar",
        b: "Vakit reklam göstərmir. Tətbiqin yeganə gəlir mənbəyi istifadəçilərin könüllü ianələridir.",
      },
      {
        t: "5. Apple Watch müşayiətçi tətbiqi",
        b: "Vakit watchOS 9+ üzərində namaz vaxtları, qiblə kompası və komplikasiyalar təqdim edən müşayiətçi tətbiq ehtiva edir. Saat tətbiqinin istifadəsi bu Şərtlərə tabedir. Apple Watch-un aparat məhdudiyyətlərinə (GPS dəqiqliyi, kompas sapması, batareya) görə saatdakı nəticələr iPhone-dakından fərqlənə bilər.",
      },
      {
        t: "6. İstifadəçinin məsuliyyəti",
        b: "Aşağıdakılara görə siz məsuliyyət daşıyırsınız:\n• Düzgün məkan və hesablama üsulu seçmək\n• Tətbiqdən qanunlara və App Store qaydalarına uyğun istifadə etmək\n• Tətbiqi tərsinə mühəndisliyə məruz qoymağa, sındırmağa və ya ondan sui-istifadə etməyə cəhd etməmək\n• Cihazınızı və iCloud hesabınızı təhlükəsiz saxlamaq (məlumatlarınız Apple iCloud vasitəsilə cihazlarınız arasında sinxronlaşır)",
      },
      {
        t: "7. Üçüncü tərəf xidmətləri",
        b: "Vakit aşağıdakı üçüncü tərəf xidmətlərindən istifadə edir və onların öz şərtlərinə tabedir:\n• Apple iCloud / CloudKit (istifadəçi məlumatlarının sinxronizasiyası)\n• Apple MapKit (yaxındakı məscidlər, xəritə)\n• Firebase Crashlytics, Remote Config və Cloud Messaging (Google)\n• Apple StoreKit 2 (ianələr)\n• Diyanet (cümə xütbəsinin mətni və səs yazısı)\n• Adhan kitabxanası (namaz vaxtı hesablaması, açıq mənbə)\n• SwiftAA (astronomik hesablama, açıq mənbə)\n\nBu xidmətlərin istifadə şərtləri və məxfilik siyasətləri onların öz təchizatçılarına aiddir.",
      },
      {
        t: "8. Əqli mülkiyyət",
        b: "Tətbiqin kodu və dizaynı Hakan Çelik-ə məxsusdur; tətbiq MIT lisenziyası ilə açıq mənbəlidir.\n\nVakit üçüncü tərəf məzmun və kitabxanalarından hörmətlə istifadə edir:\n• Quranın ərəbcə mətni: ictimai mülkiyyət (public domain)\n• Türkcə tərcümə: Diyanet İşleri Başkanlığı Meali\n• Hədis külliyyatları: ictimai mülkiyyətdə olan toplulardan tərtib olunub\n• Quran qiraəti səs yazıları: ifaçıların icazə və lisenziyaları AUDIO-LICENSES.md faylında sadalanır\n• Adhan, SwiftAA, GRDB.swift: müvafiq açıq mənbə lisenziyaları\n\nTətbiq azan və tilavət səslərindən yalnız dini ibadət məqsədilə istifadə edir.",
      },
      {
        t: "9. Məsuliyyətin məhdudlaşdırılması",
        b: "Tətbiq «olduğu kimi» təqdim olunur. Namaz vaxtları və qiblə hesablamalarının dəqiq olmasına çalışılır, lakin:\n• Məkan dəqiqliyi, GPS siqnalı, kompas kalibrasiyası və seçilmiş hesablama üsulundan asılı fərqlər ola bilər.\n• Mühüm ibadət qərarlarında yerli dini qurumlardan təsdiq almaq tövsiyə olunur.\n• Apple Watch sensorları (maqnit kompası, GPS) əlavə fərq yarada bilər.\n• iCloud sinxronizasiya problemləri, şəbəkə kəsintiləri və ya cihazın itməsi səbəbindən məlumat itkisi baş verə bilər; vacib məlumatların ehtiyat nüsxəsini çıxarın.\n\nTətbiqin istifadəsi nəticəsində yarana biləcək birbaşa və ya dolayı zərərlərə görə tərtibatçı məsuliyyət daşımır.",
      },
      {
        t: "10. Hesabın və məlumatların silinməsi",
        b: "Vakit hesab tələb etmir. Tətbiqi silməklə bütün yerli məlumatlar silinir. iCloud vasitəsilə sinxronlaşmış məlumatları silmək üçün: Ayarlar > Hesabı sil və ya iOS-da Ayarlar > Apple ID > iCloud > Vakit > Məlumatları sil (Mac-də Sistem Ayarları > Apple Hesabı > iCloud). Serverimizdə saxlanılan istifadə statistikasının silinməsini istəyirsinizsə, hakancelikdev@gmail.com ünvanına yazmağınız kifayətdir; müraciətiniz ən geci 30 gün ərzində yerinə yetirilir.",
      },
      {
        t: "11. Şərtlərin dəyişdirilməsi",
        b: "Bu Şərtlər tətbiq inkişaf etdikcə və qanuni tələbləri əks etdirmək üçün yenilənə bilər. Əhəmiyyətli dəyişikliklərdə «Son yenilənmə» tarixi təzələnir və tətbiq daxilində bildiriş göstərilir. Tətbiqdən istifadəyə davam etməyiniz yenilənmiş Şərtləri qəbul etdiyiniz mənasına gəlir.",
      },
      {
        t: "12. Tətbiq olunan hüquq və yurisdiksiya",
        b: "Bu Şərtlər Türkiyə Respublikasının qanunlarına tabedir. Mübahisələr Türkiyə məhkəmələrində həll ediləcək; istehlakçı hüquqları üzrə yerli istehlakçı məhkəmələri səlahiyyətlidir. Avropa İttifaqında yaşayırsınızsa, yerli istehlakçı hüquqlarınız qorunur.",
      },
      {
        t: "13. Əlaqə",
        b: "Şərtlərlə bağlı suallarınız üçün: hakancelikdev@gmail.com\n\nTərtibatçı: Hakan Çelik (Türkiyə)",
      },
    ],
  },
};
