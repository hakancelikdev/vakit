/**
 * Albanian (Shqip) legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Kjo faqe është një përkthim i ofruar për lehtësi; nëse ndryshon nga versioni në anglisht, vlen versioni në anglisht.",

  privacy: {
    meta: {
      title: "Vakit — Politika e privatësisë",
      description:
        "Politika e privatësisë e Vakit. Nuk kërkohet llogari, nuk mblidhen koordinata GPS; regjistrimet e hatmes dhe shënuesit sinkronizohen vetëm përmes Apple iCloud-it tuaj.",
    },
    title: "Politika e <em>privatësisë</em>",
    desc: "Përditësimi i fundit: 10 shtator 2026 — Versioni 1.7.4\n\nVakit e respekton privatësinë tuaj. Nuk kërkohet llogari dhe nuk mbledhim informacion që ju identifikon personalisht (emër, e-mail, telefon, fotografi, kontakte). Kohët e namazit, drejtimi i kiblës dhe kujtesat llogariten tërësisht në pajisjen tuaj. Ecuria e hatmes, shënuesit, synimet dhe xhamitë tuaja të preferuara qëndrojnë në pajisjen tuaj dhe sinkronizohen vetëm brenda llogarisë suaj Apple iCloud — ato nuk dërgohen kurrë në serverët tanë. Lista juaj e dhikrit është përjashtim: ajo dërgohet në serverët tanë së bashku me statistikat e përdorimit, që të mund ta përmirësojmë aplikacionin (shih seksionin 1). Gjithçka që dërgohet në serverët tanë lidhet me një kod të përhershëm përdoruesi që nuk përmban asnjë informacion identifikues.",
    sections: [
      {
        t: "1. Të dhënat që mbledhim",
        b: "Të dhënat që NUK i mbledhim:\n• Emri, e-maili, telefoni, fotografitë, mikrofoni, kamera, kontaktet\n• Koordinatat GPS (gjerësia/gjatësia gjeografike) – nuk dërgohen kurrë në serverët tanë\n• Kredencialet e llogarisë (Vakit nuk ka sistem llogarish)\n\nTë dhënat që ruhen në pajisjen tuaj dhe sinkronizohen në hapësirën tuaj private iCloud:\n• Regjistrimet e dhikrit, ecuria e hatmes, synimet e ibadetit\n• Shënuesit e Kuranit dhe të hadithit, historiku i leximit\n• Numëruesit e sureve të përfunduara, gjendja e seksioneve të hadithit\n• Regjistrat tuaj të namazeve kaza dhe të agjërimeve kaza\n• Shenjat tuaja të ditëve me arsye\n• Xhamitë e preferuara\n• Preferencat e aplikacionit (gjuha, metoda e llogaritjes, cilësimet e njoftimeve, tema)\n\nTë dhënat që dërgohen në serverët tanë — të lidhura me një kod të përhershëm përdoruesi që nuk përmban asnjë informacion identifikues (pseudonim, jo anonim):\n• Vendndodhja rajonale (shteti, qyteti, komuna) – JO koordinata GPS\n• Modeli i pajisjes, versioni i iOS/macOS, versioni i aplikacionit, versioni i watchOS\n• Preferencat e aplikacionit (gjuha, metoda e llogaritjes, tema, medhhebi, lloji i kalendarit, gjinia që zgjodhët për udhëzuesin e namazit, për cilat namaze dëshironi njoftime, si dhe preferencat tuaja të leximit të Kuranit dhe të hadithit — madhësia e shkronjave, përkthimi, recituesi, shkrimi). Vendi ku keni mbërritur në lexim dhe historiku i leximit NUK përfshihen.\n• Statistikat e përdorimit të veçorive (shikimet e ekraneve, përdorimi i veçorive). Ato tregojnë se një pjesë u përdor — për shembull se u shënua një ditë me arsye ose se u shtua një regjistrim namazi kaza. Vetë regjistri (lista e regjistrimeve tuaja) nuk dërgohet. Ajo që dërgohet është fakti që veprimi ndodhi, plus disa numra — për shembull namazi që shënuat, numrat tuaj ditorë të ibadetit, kazaja që ju ka mbetur, numri i një ajeti ose hadithi që ruajtët; si çdo statistikë, mban një vulë kohore.\n• Teksti i kërkimeve që bëni në aplikacion (kërkimi në Kuran, hadithe, dhikre, Emrat e bukur të Allahut, xhami dhe cilësime) – mblidhet që të shohim me cilat fjalë nuk e gjeni atë që kërkoni dhe ta përmirësojmë kërkimin; ruhen për së shumti 80 karaktere.\n• Lista juaj e dhikrit – emri, lloji, kategoria dhe numëruesit e dhikrit; përfshirë tekstin arabisht, përshkrimin dhe burimin që shkruani për dhikret që shtoni vetë. Mblidhen për të parë cilat dhikre përdoren dhe sa shpesh, që të përmirësohet pjesa e dhikrit.\n• Raportet e rrëzimeve (përmes Firebase Crashlytics, nuk përmbajnë të dhëna personale)\n\nMeqë ky kod përdoruesi sinkronizohet përmes zinxhirit të çelësave të iCloud (iCloud Keychain), pajisjet me të njëjtin Apple ID numërohen si një përdorues i vetëm dhe kodi ruhet edhe nëse e fshini dhe e riinstaloni aplikacionin. Kodi nuk përmban të dhëna identiteti; të dhënat tuaja nuk shiten kurrë dhe nuk përdoren për reklama.",
      },
      {
        t: "2. Si i përdorim të dhënat tuaja",
        b: "• Llogaritja e kohëve të namazit – Vendndodhja përpunohet lokalisht në pajisjen tuaj dhe llogaritja bëhet pa internet me bibliotekën Adhan.\n• Drejtimi i kiblës – Vendndodhja dhe drejtimi i busullës kombinohen në pajisje.\n• Emri i vendit – Për të shfaqur emrin e vendit ku ndodheni, koordinatat tuaja i dërgohen shërbimit të emrave të vendeve të Apple; jo serverëve të Vakit.\n• Kujtesat e ibadetit – Njoftimet lokale planifikohen në pajisje nga iOS dhe macOS.\n• Njoftimet e përgjithshme – Njoftimet për ditët e bekuara dhe për versionet e reja dërgohen njëkohësisht për të gjithë përmes Firebase Cloud Messaging; nuk ka shënjestrim individual.\n• Hutbeja e xhumasë – Hutbeja e kësaj jave shkarkohet nga faqja publike e Diyanet-it (Kryesia e Çështjeve Fetare e Turqisë); kërkesa nuk mbart asnjë informacion identifikues.\n• Xhamitë afër – Vendndodhja juaj i dërgohet Apple MapKit (kërkimi i xhamive, distanca, udhëzimet e rrugës); jo serverëve të Vakit.\n• Të dhënat e përdoruesit (dhikri, hatmja, shënuesit) – Ruhen lokalisht me Core Data dhe sinkronizohen brenda hapësirës suaj private Apple iCloud. Prej tyre, vetëm lista e dhikrit dërgohet edhe në serverin e Vakit (shih seksionin 1).\n• Zhvillimi dhe përmirësimi – Statistikat e përdorimit (pa koordinata GPS) përdoren për të monitoruar performancën dhe për të zbuluar gabimet.",
      },
      {
        t: "3. Sinkronizimi me iCloud (CloudKit)",
        b: "Vakit i sinkronizon regjistrimet tuaja të ibadetit (dhikri, hatmja, shënuesit, synimet, xhamitë e preferuara) mes pajisjeve tuaja përmes CloudKit të Apple. Këto të dhëna:\n• Qëndrojnë vetëm në bazën private të të dhënave të Apple ID-së suaj.\n• Enkriptohen në infrastrukturën e Apple; as ne, as punonjësit e Apple, as palët e treta nuk kanë qasje në to.\n• Sinkronizohen automatikisht mes iPhone, iPad, Mac dhe Apple Watch.\n• Mbeten vetëm në pajisjen tuaj nëse e çaktivizoni iCloud.\n• Hiqen nga të gjitha pajisjet tuaja kur përdorni «Fshini Llogarinë» ose kur hiqni të dhënat e Vakit nga iCloud.\n\nMë shumë informacion: apple.com/legal/privacy",
      },
      {
        t: "4. Të dhënat në Apple Watch dhe Mac",
        b: "Vakit ofron një aplikacion shoqërues në watchOS 9+. Në Watch:\n• Leja e vendndodhjes jepet veçmas në Watch; nëse Vakit është i instaluar në iPhone, vendndodhja merret përmes WatchConnectivity, përndryshe përdoret GPS-i i Watch.\n• Sensori i busullës përpunohet në pajisje për kiblën; nuk dërgohet kurrë në një server.\n• Nuk lexojmë të dhëna të Shëndetit (HealthKit), të aktivitetit apo të rrahjeve të zemrës.\n• Njoftimet pasqyrohen nga iPhone përmes pasqyrimit të njoftimeve të iOS; nëse Watch punon i vetëm, planifikon njoftimet e veta lokale.\n\nNë Mac (macOS 13+):\n• Aplikacioni për Mac është i njëjti aplikacion si në iPhone; të dhënat tuaja ruhen përsëri në pajisje dhe sinkronizohen brenda iCloud-it tuaj privat.\n• Mac-ët nuk kanë busull, prandaj nuk ka busull kible në kohë reale; drejtimi dhe distanca llogariten nga vendndodhja juaj dhe shfaqen me tekst.\n• Në Mac vendndodhja vjen nga shërbimet e vendndodhjes të bazuara në Wi-Fi, jo nga GPS-i, dhe gjithashtu nuk dërgohet kurrë në serverët tanë.\n• Leja dhe cilësimet e njoftimeve janë të veçanta për çdo pajisje; ndryshimi i tyre në Mac nuk ndikon në iPhone-in tuaj.",
      },
      {
        t: "5. Shërbimet e palëve të treta",
        b: "Vakit përdor shërbimet e mëposhtme për qëllime të kufizuara. Asnjë prej tyre nuk lidhet me identitetin tuaj personal:\n\n• Apple iCloud / CloudKit – Sinkronizimi i të dhënave të përdoruesit (në hapësirën tuaj private iCloud).\n• Apple MapKit – Xhamitë afër, harta dhe udhëzimet e rrugës (vendndodhja i dërgohet Apple).\n• Firebase Crashlytics (Google) – Raporte rrëzimesh pa të dhëna identiteti (stack trace, modeli i pajisjes, versioni i iOS/macOS).\n• Firebase Remote Config (Google) – Flamurë veçorish dhe shpërndarje graduale (nuk lexon të dhëna nga pajisja).\n• Google AdMob – Vetëm për të shfaqur reklama video me shpërblim në «Modalitetin Sadaka» opsional. Detajet më poshtë.\n• Apple StoreKit 2 – Donacione opsionale (blerje brenda aplikacionit). Detajet e pagesës përpunohen nga Apple; Vakit nuk sheh kurrë të dhëna karte.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Njoftime për ditët e bekuara dhe versionet e reja. Njoftimet dërgohen sipas temës; nuk ka shënjestrim individual.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Teksti dhe audioja e hutbes së xhumasë.\n• Serveri i Vakit (Gjermani, Frankfurt) – Statistikat e përdorimit dhe lista juaj e dhikrit, të lidhura me një kod përdoruesi që nuk përmban asnjë informacion identifikues. Regjistrimet tuaja të hatmes, shënuesve, synimeve dhe leximit nuk dërgohen kurrë atje.\n\nShënim: Firebase Analytics NUK përdoret; identifikuesi i reklamave (IDFA) nuk mblidhet.\n\nPolitika e privatësisë e Google: policies.google.com/privacy",
      },
      {
        t: "6. Reklamat (Modaliteti Sadaka)",
        b: "Vakit nuk shfaq reklama. Vetëm në «Modalitetin Sadaka» opsional, nëse përdoruesi e nis vetë shprehimisht për të mbështetur zhvilluesin, shfaqet një reklamë video me shpërblim përmes Google AdMob. Në atë rast:\n• Reklama shërbehet nga Google AdMob; ajo është gjithmonë jo e personalizuar dhe e klasifikuar për publikun e gjerë (G). Vakit nuk e shfaq kurrë kërkesën e App Tracking Transparency dhe identifikuesi i reklamave (IDFA) nuk ndahet.\n• Kur hapet ekrani «Mbajeni Vakit gjallë», nis SDK-ja e reklamave dhe ngarkohet paraprakisht një reklamë; asnjë reklamë nuk shfaqet nëse nuk zgjidhni ta shikoni.\n• Modaliteti Sadaka mund të çaktivizohet nga distanca përmes Firebase Remote Config; ju mund të zgjidhni thjesht të mos e përdorni kurrë.\n\nPrivatësia e Google AdMob: support.google.com/admob/answer/6128543",
      },
      {
        t: "7. Donacionet (blerje brenda aplikacionit)",
        b: "Vakit është falas. Për të mbështetur zhvilluesin, mund të bëni donacione opsionale në nivele nga ₺10 deri në ₺10.000 nga ekrani «Mbajeni Vakit gjallë». Këto transaksione:\n• Përpunohen nga Apple StoreKit 2; detajet e pagesës (karta, IBAN, Apple Pay) i dërgohen vetëm Apple.\n• Vakit nuk e sheh dhe nuk e ruan kurrë mënyrën tuaj të pagesës apo të dhënat tuaja financiare.\n• Rimbursimet mund të kërkohen vetëm përmes Apple (reportaproblem.apple.com).",
      },
      {
        t: "8. Ruajtja e të dhënave",
        b: "• Të dhënat lokale në pajisje – Ruhen derisa ta fshini aplikacionin.\n• Të dhënat në iCloud – Ruhen derisa të hiqni hapësirën e Vakit nga iCloud ose të çaktivizoni Apple ID-në tuaj.\n• Statistikat e përdorimit në server – Mbahen 180 ditë (rreth 6 muaj), pastaj fshihen automatikisht. I njëjti afat vlen edhe për tekstet e kërkimeve.\n• Raportet e rrëzimeve (Crashlytics) – Mbahen 90 ditë, pastaj fshihen.\n• Regjistrat e serverit – Rrotullohen brenda 30 ditësh.",
      },
      {
        t: "9. Të drejtat tuaja (KVKK / GDPR)",
        b: "Sipas KVKK-së së Turqisë dhe GDPR-së së BE-së, ju keni të drejtë:\n• Të dini cilat të dhëna mblidhen për ju\n• Të kundërshtoni përpunimin e të dhënave (mund t'i revokoni lejet e Vendndodhjes, Njoftimeve ose Lëvizjes te Cilësimet → Vakit në iOS, ose te Cilësimet e sistemit → Vakit në Mac)\n• Të kërkoni fshirjen e të dhënave tuaja: Cilësimet → Fshini Llogarinë heq gjithçka në pajisjen tuaj dhe në iCloud. Për fshirjen e statistikave të përdorimit në serverin tonë, mjafton të shkruani në hakancelikdev@gmail.com; kërkesa juaj plotësohet brenda 30 ditësh më së voni.\n• Transferueshmëria e të dhënave\n• Të paraqitni ankesë pranë autoritetit të KVKK-së\n\nKërkesat tuaja mund t'i dërgoni në hakancelikdev@gmail.com; përgjigjemi brenda 30 ditësh më së voni.",
      },
      {
        t: "10. Privatësia e fëmijëve",
        b: "Vakit ofrohet në App Store me kategori moshe 4+, por nuk mbledhim me vetëdije të dhëna personale nga përdorues nën 13 vjeç. Nëse mendoni se një fëmijë nën 13 vjeç ka dhënë të dhëna, ju lutemi shkruani në hakancelikdev@gmail.com dhe të dhënat përkatëse do të fshihen menjëherë.",
      },
      {
        t: "11. Siguria",
        b: "Të gjitha të dhënat lokale qëndrojnë në pajisjen tuaj, të mbrojtura nga sandbox-i i iOS/macOS dhe nga enkriptimi i pajisjes. Të dhënat e iCloud enkriptohen në infrastrukturën e Apple. Të dhënat e dërguara në serverin tonë transmetohen përmes HTTPS/TLS dhe ruhen në një bazë të dhënash të enkriptuar; ato nuk përmbajnë informacion identiteti. Vakit kryen gjithashtu zbulim të jailbreak-ut, të debugger-it dhe të injektimit të kodit për mbrojtje shtesë gjatë veprimeve të ndjeshme.",
      },
      {
        t: "12. Ndryshimet e politikës",
        b: "Kjo politikë mund të përditësohet ndërsa aplikacioni zhvillohet. Për ndryshime thelbësore, data «Përditësimi i fundit» në këtë faqe rifreskohet dhe në aplikacion shfaqet një njoftim. Ju rekomandojmë ta rishikoni këtë politikë rregullisht.",
      },
      {
        t: "13. Kontakti",
        b: "Për pyetje, kërkesa ose komente rreth privatësisë: hakancelikdev@gmail.com\n\nKontrolluesi i të dhënave: Hakan Çelik (Turqi)",
      },
    ],
  },

  terms: {
    meta: {
      title: "Vakit — Kushtet e përdorimit",
      description:
        "Kushtet e përdorimit të Vakit. Përdorim falas, me donacione opsionale (blerje brenda aplikacionit); çdo veçori bazë është falas.",
    },
    title: "Kushtet e <em>përdorimit</em>",
    desc: "Përditësimi i fundit: 10 shtator 2026 — Versioni 1.7.4\n\nDuke e shkarkuar, instaluar ose përdorur aplikacionin tonë, ju pranoni të jeni të lidhur me këto Kushte. Ju lutemi lexojini me kujdes këto Kushte.",
    sections: [
      {
        t: "1. Pranimi i kushteve",
        b: "Duke hyrë dhe duke përdorur Vakit, ju pranoni të jeni të lidhur me kushtet dhe dispozitat e kësaj marrëveshjeje. Nëse nuk pajtoheni, ju lutemi mos e përdorni këtë shërbim.",
      },
      {
        t: "2. Përshkrimi i shërbimit",
        b: "Vakit është një aplikacion falas që ofron mjete ibadeti si kohët e namazit, drejtimi i kiblës, Kurani, hadithi, numëruesi i dhikrit, udhëzuesit e namazit dhe të abdesit, ndjekja e hatmes dhe e ibadetit, hutbeja e xhumasë, xhamitë afër dhe kalendari i ditëve fetare. Punon në iOS 16.4+ dhe macOS 13+ dhe përfshin një aplikacion shoqërues për Apple Watch me watchOS 9+.",
      },
      {
        t: "3. Përdorim falas dhe donacione opsionale",
        b: "Të gjitha veçoritë bazë të Vakit janë falas. Aplikacioni nuk shfaq reklama (përveç reklamave video me shpërblim në «Modalitetin Sadaka» opsional, të cilat i nis vetë përdoruesi).\n\nPërdoruesit që dëshirojnë të mbështesin zhvilluesin mund të bëjnë donacione opsionale në nivele nga ₺10 deri në ₺10.000 nga ekrani «Mbajeni Vakit gjallë». Këto donacione:\n• Përpunohen përmes Apple In-App Purchase (StoreKit 2).\n• Janë produkte të konsumueshme (consumable); donacionet nuk zhbllokojnë veçori shtesë apo abonime.\n• Kërkesat për rimbursim mund të dërgohen vetëm përmes Apple (reportaproblem.apple.com).\n• Zbatohen kushtet e pagesës të Apple dhe rregullat e App Store.",
      },
      {
        t: "4. Modaliteti Sadaka (reklamë me shpërblim)",
        b: "«Modaliteti Sadaka» është një veçori opsionale ku përdoruesi shikon vullnetarisht një reklamë të shkurtër video me shpërblim për të mbështetur zhvilluesin. Reklama shërbehet përmes Google AdMob. Përdorimi i kësaj veçorie nuk është i detyrueshëm; veçoria mund të çaktivizohet edhe nga distanca prej zhvilluesit përmes Firebase Remote Config.",
      },
      {
        t: "5. Aplikacioni shoqërues për Apple Watch",
        b: "Vakit ofron një aplikacion shoqërues në watchOS 9+ me kohët e namazit, busullën e kiblës dhe komplikimet. Përdorimi i aplikacionit të Watch u nënshtrohet këtyre Kushteve. Për shkak të kufizimeve harduerike të Apple Watch (saktësia e GPS-it, devijimi i busullës, bateria), rezultatet në Watch mund të ndryshojnë nga ato në iPhone.",
      },
      {
        t: "6. Përgjegjësitë e përdoruesit",
        b: "Ju jeni përgjegjës për:\n• Zgjedhjen e vendndodhjes dhe të metodës së saktë të llogaritjes\n• Përdorimin e aplikacionit në përputhje me ligjet në fuqi dhe rregullat e App Store\n• Mospërpjekjen për të bërë inxhinieri të kundërt, për ta thyer ose për ta keqpërdorur aplikacionin\n• Mbajtjen të sigurt të pajisjes dhe të llogarisë suaj iCloud (të dhënat tuaja sinkronizohen mes pajisjeve përmes Apple iCloud)",
      },
      {
        t: "7. Shërbimet e palëve të treta",
        b: "Vakit përdor shërbimet e mëposhtme të palëve të treta dhe u nënshtrohet kushteve të tyre:\n• Apple iCloud / CloudKit (sinkronizimi i të dhënave të përdoruesit)\n• Apple MapKit (xhamitë afër, hartat)\n• Firebase Crashlytics, Remote Config dhe Cloud Messaging (Google)\n• Google AdMob (vetëm për Modalitetin Sadaka)\n• Apple StoreKit 2 (donacionet)\n• Diyanet – Kryesia e Çështjeve Fetare e Turqisë (teksti dhe audioja e hutbes së xhumasë)\n• Biblioteka Adhan (llogaritja e kohëve të namazit, burim i hapur)\n• SwiftAA (llogaritje astronomike, burim i hapur)\n\nKushtet dhe politikat e privatësisë së këtyre shërbimeve u përkasin ofruesve përkatës.",
      },
      {
        t: "8. Pronësia intelektuale",
        b: "Kodi dhe dizajni i aplikacionit janë pronë e Hakan Çelik; aplikacioni është me burim të hapur, nën licencën MIT.\n\nVakit i përdor me respekt përmbajtjet dhe bibliotekat e palëve të treta:\n• Teksti arabisht i Kuranit: domen publik\n• Përkthimi turqisht: Diyanet İşleri Başkanlığı Meali\n• Përmbledhjet e hadithit: të nxjerra nga përmbledhje në domen publik\n• Audioja e recitimit të Kuranit: lejet dhe licencat e artistëve renditen në AUDIO-LICENSES.md\n• Adhan, SwiftAA, GRDB.swift: licencat e tyre përkatëse me burim të hapur\n\nAplikacioni e përdor audion e ezanit dhe të recitimit vetëm për qëllime ibadeti fetar.",
      },
      {
        t: "9. Kufizimi i përgjegjësisë",
        b: "Aplikacioni ofrohet «siç është». Llogaritjet e kohëve të namazit dhe të kiblës synojnë të jenë të sakta, por:\n• Mund të ndodhin devijime për shkak të saktësisë së vendndodhjes, sinjalit GPS, kalibrimit të busullës dhe metodës së zgjedhur të llogaritjes.\n• Për vendime të rëndësishme ibadeti rekomandohet konfirmimi nga autoritetet fetare vendore.\n• Sensorët e Apple Watch (busulla magnetike, GPS) mund të shtojnë devijim shtesë.\n• Humbja e të dhënave mund të ndodhë për shkak të problemeve me sinkronizimin e iCloud, ndërprerjeve të rrjetit ose humbjes së pajisjes; bëni kopje rezervë të të dhënave të rëndësishme.\n\nZhvilluesi nuk mban përgjegjësi për dëme të drejtpërdrejta ose të tërthorta që rrjedhin nga përdorimi i aplikacionit.",
      },
      {
        t: "10. Fshirja e llogarisë dhe e të dhënave",
        b: "Vakit nuk kërkon llogari. Fshirja e aplikacionit heq të gjitha të dhënat lokale. Për të hequr të dhënat e sinkronizuara përmes iCloud: Cilësimet > Fshini Llogarinë, ose në iOS Cilësimet > Apple ID > iCloud > Vakit > Fshi të dhënat (në Mac Cilësimet e sistemit > Llogaria Apple > iCloud). Nëse dëshironi që statistikat e përdorimit të mbajtura në serverin tonë të fshihen, shkruani në hakancelikdev@gmail.com; kërkesa juaj plotësohet brenda 30 ditësh më së voni.",
      },
      {
        t: "11. Ndryshimet e kushteve",
        b: "Këto Kushte mund të përditësohen ndërsa aplikacioni zhvillohet dhe për të pasqyruar kërkesat ligjore. Për ndryshime thelbësore, data «Përditësimi i fundit» rifreskohet dhe në aplikacion shfaqet një njoftim. Përdorimi i vazhdueshëm i aplikacionit përbën pranim të Kushteve të përditësuara.",
      },
      {
        t: "12. Ligji i zbatueshëm dhe juridiksioni",
        b: "Këto Kushte rregullohen nga ligjet e Republikës së Turqisë. Mosmarrëveshjet do të zgjidhen në gjykatat turke; për të drejtat e konsumatorit janë kompetente gjykatat vendore të konsumatorit. Nëse jetoni në Bashkimin Evropian, të drejtat tuaja vendore të konsumatorit mbeten të garantuara.",
      },
      {
        t: "13. Kontakti",
        b: "Për pyetje rreth këtyre Kushteve: hakancelikdev@gmail.com\n\nZhvilluesi: Hakan Çelik (Turqi)",
      },
    ],
  },

  "ads-policy": {
    meta: {
      title: "Vakit — Politika e reklamave",
      description:
        "Politika e reklamave e Vakit, në përputhje me hallallin. Nuk shfaqim reklama për bixhoz, alkool, përmbajtje për të rritur, produkte me kamatë apo fall.",
    },
    titleBefore: "Politika e ",
    titleEm: "reklamave",
    desc: "Përditësimi i fundit: 10 shtator 2026 — Versioni 1.7.4\n\nNë një aplikacion islam, reklamat që shihni bëhen pjesë e çastit tuaj të ibadetit. Prandaj Vakit nuk shfaq reklama. I vetmi përjashtim është vullnetar: një përdorues që dëshiron ta mbështesë aplikacionin mund të zgjedhë të shikojë një reklamë të shkurtër video me shpërblim. Kjo faqe përshkruan rregullat që zbatohen për ato reklama.",
    sections: [
      {
        t: "1. Ku shfaqen reklamat",
        b: "Vakit nuk shfaq reklama banner, ndërmjetëse (interstitial) apo reklama në hapje të aplikacionit në asnjë ekran. E vetmja reklamë është një video e shkurtër me shpërblim që përdoruesi mund të zgjedhë ta shikojë nga ekrani «Mbajeni Vakit gjallë» («Modaliteti Sadaka») për të mbështetur aplikacionin. Nuk jeni kurrë të detyruar ta përdorni dhe asnjë veçori nuk varet prej saj.",
      },
      {
        t: "2. Kategoritë që nuk i shfaqim kurrë",
        b: "Reklamat në kategoritë e mëposhtme janë të bllokuara në rrjetin e reklamave:\n\n• Bixhozi, bastet, kazinotë, bastet sportive, pokeri\n• Pijet alkoolike dhe produktet e duhanit\n• Përmbajtja për të rritur, takimet (dating), përmbajtja seksuale, produktet seksuale\n• Lakuriqësia në çdo formë\n• Kreditë me kamatë, kreditë e shpejta, investimet me kamatë\n• Falli, astrologjia, mediumët, magjia, tarot\n• Mishi i derrit dhe produktet e derrit\n• Skemat e pasurimit të shpejtë, kurthet MLM\n• Propaganda fetare e besimeve të tjera",
      },
      {
        t: "3. Masat teknike mbrojtëse",
        b: "Në anën e rrjetit të reklamave (Google AdMob) zbatohen këto cilësime:\n\n• Klasifikimi maksimal i përmbajtjes: G (publiku i gjerë).\n• Te Brand Safety > Block Content janë shënuar të gjitha kategoritë e mësipërme.\n• Lista e bllokimit për URL dhe fjalë kyçe: reklamat që përmbajnë terma si «casino», «betting», «gambling», «flirt», «dating», «horoscope», «psychic», «tarot» nuk kalojnë.\n• Reklamat janë gjithmonë jo të personalizuara; Vakit nuk e shfaq kurrë kërkesën e App Tracking Transparency dhe identifikuesi i reklamave (IDFA) nuk ndahet.",
      },
      {
        t: "4. Nëse shihni një reklamë të papërshtatshme",
        b: "Nëse shihni një reklamë që bie ndesh me ndjeshmëritë tuaja fetare, shkruani në hakancelikdev@gmail.com me një pamje ekrani. Çdo raportim i vlefshëm shtohet në listën e bllokimit të AdMob.",
      },
      {
        t: "5. Kontakti",
        b: "Për pyetje, raportime ose sugjerime për kategori: hakancelikdev@gmail.com\n\nZhvilluesi: Hakan Çelik (Turqi)",
      },
    ],
  },
};
