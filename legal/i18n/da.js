/**
 * Danish (Dansk) legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Denne side er en oversættelse, som stilles til rådighed for nemheds skyld; hvis den afviger fra den engelske version, gælder den engelske version.",

  privacy: {
    meta: {
      title: "Vakit — Privatlivspolitik",
      description:
        "Vakits privatlivspolitik. Ingen konto påkrævet, ingen GPS-koordinater indsamles; registreringer af khatm og bogmærker synkroniseres kun via din egen Apple iCloud.",
    },
    title: "Privatlivs<em>politik</em>",
    desc: "Sidst opdateret: 10. september 2026 — Version 1.7.4\n\nVakit respekterer dit privatliv. Der kræves ingen konto, og vi indsamler ikke personligt identificerende oplysninger (navn, e-mail, telefonnummer, billeder, kontakter). Bedetider, Qibla-retning og påmindelser beregnes helt på din enhed. Din khatm-fremdrift, dine bogmærker, mål og favoritmoskeer bliver på din enhed og synkroniseres kun i din egen Apple iCloud-konto — de sendes aldrig til vores servere. Din dhikr-liste er undtagelsen: den sendes til vores servere sammen med brugsstatistik, så vi kan forbedre appen (se afsnit 1). Alt, hvad der sendes til vores servere, er knyttet til en varig brugerkode uden identificerende oplysninger.",
    sections: [
      {
        t: "1. Data, vi indsamler",
        b: "Data, vi IKKE indsamler:\n• Navn, e-mail, telefonnummer, billeder, mikrofon, kamera, kontakter\n• GPS-koordinater (bredde-/længdegrad) – sendes aldrig til vores servere\n• Kontooplysninger (Vakit har ikke noget kontosystem)\n\nData, der gemmes på din enhed og synkroniseres i dit private iCloud-rum:\n• Dhikr-registreringer, khatm-fremdrift, mål for tilbedelse\n• Bogmærker i Koranen og hadith, læsehistorik\n• Tællere for gennemførte suraer, status for hadith-afsnit\n• Dine registre over manglende bønner og faster\n• Dine markeringer af fritagelsesdage\n• Favoritmoskeer\n• Appindstillinger (sprog, beregningsmetode, notifikationsindstillinger, tema)\n\nData, der sendes til vores servere — knyttet til en varig brugerkode uden identificerende oplysninger (et pseudonym, ikke anonymt):\n• Regional position (land, by, kommune) – IKKE GPS-koordinater\n• Enhedsmodel, iOS-/macOS-version, appversion, watchOS-version\n• Appindstillinger (sprog, beregningsmetode, tema, retsskole, kalendertype, det køn, du har valgt til bønneguiden, hvilke bønner du vil have notifikationer om, og dine valg for læsning af Koran og hadith — skriftstørrelse, oversættelse, recitator, skrift). Din læseposition og læsehistorik er IKKE med.\n• Statistik over brugen af funktioner (skærmvisninger, brug af funktioner). Den viser, at en del blev brugt — for eksempel at en fritagelsesdag blev markeret, eller at en manglende bøn blev registreret. Selve registret (listen over dine registreringer) sendes ikke. Det, der sendes, er, at handlingen fandt sted, plus nogle tal — for eksempel den bøn, du markerede, dine daglige antal af tilbedelser, din resterende qada, nummeret på et vers eller en hadith, du har gemt; som al statistik har den et tidsstempel.\n• Teksten i de søgninger, du foretager i appen (søgning i Koran, hadith, dhikr, Allahs navne, moskeer og indstillinger) – indsamles, så vi kan se, hvilke ord der ikke finder det, du leder efter, og forbedre søgningen; der gemmes højst 80 tegn.\n• Din dhikr-liste – dhikr-navn, type, kategori og tællere; herunder den arabiske tekst, beskrivelse og kilde, du indtaster for dhikr, du selv tilføjer. Den indsamles for at se, hvilke dhikr der bruges og hvor ofte, så dhikr-delen kan forbedres.\n• Nedbrudsrapporter (via Firebase Crashlytics, indeholder ingen personoplysninger)\n\nDa denne brugerkode synkroniseres via iCloud-nøglering, tæller enheder med samme Apple ID som én bruger, og koden bevares, selv hvis du sletter og geninstallerer appen. Koden indeholder ingen identitetsoplysninger; dine data sælges aldrig og bruges ikke til reklamer.",
      },
      {
        t: "2. Sådan bruger vi dine data",
        b: "• Beregning af bedetider – Positionen behandles lokalt på din enhed og beregnes offline med Adhan-biblioteket.\n• Qibla-retning – Position og kompasretning kombineres på enheden.\n• Stednavn – For at vise navnet på det sted, du befinder dig, sendes dine koordinater til Apples stednavnetjeneste; ikke til Vakits servere.\n• Påmindelser om tilbedelse – Lokale notifikationer planlægges på enheden af iOS og macOS.\n• Beskeder – Beskeder om velsignede dage og nye versioner sendes til alle via Firebase Cloud Messaging; der er ingen målretning mod enkeltpersoner.\n• Fredagsprædiken – Ugens prædiken hentes fra Diyanets offentlige side; anmodningen indeholder ingen identificerende oplysninger.\n• Moskeer i nærheden – Din position sendes til Apple MapKit (søgning efter moskeer, afstand, rutevejledning); ikke til Vakits servere.\n• Brugerdata (dhikr, khatm, bogmærker) – Gemmes lokalt med Core Data og synkroniseres i dit private Apple iCloud-rum. Af disse sendes kun dhikr-listen desuden til Vakits server (se afsnit 1).\n• Udvikling og forbedring – Brugsstatistik (uden GPS-koordinater) bruges til at følge ydeevnen og finde fejl.",
      },
      {
        t: "3. iCloud-synkronisering (CloudKit)",
        b: "Vakit synkroniserer dine registreringer af tilbedelse (dhikr, khatm, bogmærker, mål, favoritmoskeer) mellem dine enheder via Apples CloudKit. Disse data:\n• Ligger kun i den private database for dit eget Apple ID.\n• Er krypteret på Apples infrastruktur; hverken vi, Apples medarbejdere eller tredjeparter kan tilgå dem.\n• Synkroniseres automatisk mellem iPhone, iPad, Mac og Apple Watch.\n• Bliver kun på din enhed, hvis du slår iCloud fra.\n• Fjernes fra alle dine enheder, når du bruger «Slet kontoen» eller fjerner Vakits data fra iCloud.\n\nFlere oplysninger: apple.com/legal/privacy",
      },
      {
        t: "4. Data på Apple Watch og Mac",
        b: "Vakit har en ledsagende app til watchOS 9+. På uret:\n• Gives adgang til position særskilt på uret; er Vakit installeret på iPhone, modtages positionen via WatchConnectivity, ellers bruges urets GPS.\n• Behandles kompassensoren på enheden til Qibla; den sendes aldrig til en server.\n• Læser vi ikke helbreds- (HealthKit), aktivitets- eller pulsdata.\n• Spejles notifikationer fra iPhone via iOS' notifikationsspejling; kører uret alene, planlægger det sine egne lokale notifikationer.\n\nPå Mac (macOS 13+):\n• Mac-appen er den samme app som på iPhone; dine data gemmes stadig på enheden og synkroniseres i din egen private iCloud.\n• En Mac har ingen kompashardware, så der er intet Qibla-kompas i realtid; retning og afstand beregnes ud fra din position og vises som tekst.\n• Positionen på Mac kommer fra Wi-Fi-baserede lokalitetstjenester i stedet for GPS og sendes heller aldrig til vores servere.\n• Tilladelse til og indstillinger for notifikationer gælder pr. enhed; ændrer du dem på Mac, påvirker det ikke din iPhone.",
      },
      {
        t: "5. Tredjepartstjenester",
        b: "Vakit bruger følgende tjenester til afgrænsede formål. Ingen af dem er knyttet til din personlige identitet:\n\n• Apple iCloud / CloudKit – Synkronisering af brugerdata (i dit private iCloud-rum).\n• Apple MapKit – Moskeer i nærheden, kort og rutevejledning (positionen sendes til Apple).\n• Firebase Crashlytics (Google) – Nedbrudsrapporter uden identitetsdata (stack trace, enhedsmodel, iOS-/macOS-version).\n• Firebase Remote Config (Google) – Funktionsflag og gradvis udrulning (læser ingen data fra enheden).\n• Apple StoreKit 2 – Valgfrie donationer (køb i app). Betalingsoplysninger behandles af Apple; Vakit ser aldrig kortdata.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Beskeder om velsignede dage og nye versioner. Beskederne sendes efter emne; der er ingen målretning mod enkeltpersoner.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Fredagsprædikenens tekst og lyd.\n• Vakits server (Tyskland, Frankfurt) – Brugsstatistik og din dhikr-liste, knyttet til en brugerkode uden identificerende oplysninger. Dine registreringer af khatm, bogmærker, mål og læsning sendes aldrig dertil.\n\nBemærk: Firebase Analytics bruges IKKE; annonce-id'et (IDFA) indsamles ikke.\n\nGoogles privatlivspolitik: policies.google.com/privacy",
      },
      {
        t: "6. Reklamer",
        b: "Vakit viser ingen reklamer. Appens eneste indtægtskilde er frivillige donationer fra brugerne.",
      },
      {
        t: "7. Donationer (køb i app)",
        b: "Vakit er gratis. For at støtte udvikleren kan du give valgfrie donationer i trin fra ₺10 til ₺10.000 på skærmen «Hold Vakit i live». Disse transaktioner:\n• Behandles af Apple StoreKit 2; betalingsoplysninger (kort, IBAN, Apple Pay) sendes kun til Apple.\n• Vakit ser eller gemmer aldrig din betalingsmetode eller dine økonomiske oplysninger.\n• Refusion kan kun anmodes om via Apple (reportaproblem.apple.com).",
      },
      {
        t: "8. Opbevaring af data",
        b: "• Lokale data på enheden – Gemmes, indtil du sletter appen.\n• Data i iCloud – Gemmes, indtil du fjerner Vakits område fra iCloud eller deaktiverer dit Apple ID.\n• Brugsstatistik på serveren – Opbevares i 180 dage (ca. 6 måneder) og slettes derefter automatisk. Teksten i søgninger følger samme frist.\n• Nedbrudsrapporter (Crashlytics) – Opbevares i 90 dage og slettes derefter.\n• Serverlogfiler – Roteres inden for 30 dage.",
      },
      {
        t: "9. Dine rettigheder (KVKK / GDPR)",
        b: "Efter Tyrkiets KVKK og EU's GDPR har du ret til at:\n• Vide, hvilke data der indsamles om dig\n• Gøre indsigelse mod behandlingen af data (tilbagekald adgang til Position, Notifikationer eller Bevægelse under Indstillinger → Vakit på iOS eller Systemindstillinger → Vakit på Mac)\n• Anmode om sletning af dine data: Indstillinger → Slet kontoen fjerner alt på din enhed og i iCloud. Vil du have brugsstatistikken på vores server slettet, så skriv til hakancelikdev@gmail.com; din anmodning efterkommes senest inden for 30 dage.\n• Dataportabilitet\n• Klage til KVKK-myndigheden\n\nSend anmodninger til hakancelikdev@gmail.com; vi svarer senest inden for 30 dage.",
      },
      {
        t: "10. Børns privatliv",
        b: "Vakit udbydes i App Store med aldersgrænsen 4+, men vi indsamler ikke bevidst personoplysninger fra brugere under 13 år. Hvis du mener, at et barn under 13 år har afgivet data, så skriv til hakancelikdev@gmail.com, og vi sletter de pågældende data med det samme.",
      },
      {
        t: "11. Sikkerhed",
        b: "Alle lokale data bliver på din enhed, beskyttet af iOS'/macOS' sandkasse og enhedens kryptering. Data i iCloud er krypteret på Apples infrastruktur. Data, der sendes til vores server, overføres via HTTPS/TLS og gemmes i en krypteret database; de indeholder ingen identitetsoplysninger. Vakit registrerer desuden jailbreak, debugger og kodeinjektion som ekstra beskyttelse under følsomme handlinger.",
      },
      {
        t: "12. Ændringer af politikken",
        b: "Denne politik kan blive opdateret, efterhånden som appen udvikler sig. Ved væsentlige ændringer fornyes datoen «Sidst opdateret» på denne side, og der vises en besked i appen. Vi anbefaler, at du jævnligt læser politikken igennem.",
      },
      {
        t: "13. Kontakt",
        b: "Spørgsmål, anmodninger eller tilbagemeldinger om privatliv: hakancelikdev@gmail.com\n\nDataansvarlig: Hakan Çelik (Tyrkiet)",
      },
    ],
  },

  terms: {
    meta: {
      title: "Vakit — Brugsvilkår",
      description:
        "Vakits brugsvilkår. Gratis at bruge med valgfrie donationer (køb i app); alle kernefunktioner er gratis.",
    },
    title: "Brugs<em>vilkår</em>",
    desc: "Sidst opdateret: 10. september 2026 — Version 1.7.4\n\nVed at hente, installere eller bruge vores app accepterer du at være bundet af disse vilkår. Læs vilkårene grundigt.",
    sections: [
      {
        t: "1. Accept af vilkårene",
        b: "Ved at tilgå og bruge Vakit accepterer du at være bundet af vilkårene og betingelserne i denne aftale. Hvis du ikke er enig, så lad være med at bruge tjenesten.",
      },
      {
        t: "2. Beskrivelse af tjenesten",
        b: "Vakit er en gratis app med værktøjer til tilbedelse som bedetider, Qibla-retning, Koran, hadith, dhikr-tæller, guider til bøn og wudu, khatm- og tilbedelsesregistrering, fredagsprædiken, moskeer i nærheden og en kalender med religiøse dage. Den kører på iOS 16.4+ og macOS 13+ og har en ledsagende Apple Watch-app til watchOS 9+.",
      },
      {
        t: "3. Reklamer",
        b: "Vakit viser ingen reklamer. Appens eneste indtægtskilde er frivillige donationer fra brugerne.",
      },
      {
        t: "4. Reklamer",
        b: "Vakit viser ingen reklamer. Appens eneste indtægtskilde er frivillige donationer fra brugerne.",
      },
      {
        t: "5. Ledsagende Apple Watch-app",
        b: "Vakit har en ledsagende app til watchOS 9+ med bedetider, Qibla-kompas og komplikationer. Brugen af Watch-appen er omfattet af disse vilkår. På grund af Apple Watchs hardwarebegrænsninger (GPS-nøjagtighed, kompasafvigelse, batteri) kan resultaterne på uret afvige fra dem på iPhone.",
      },
      {
        t: "6. Brugerens ansvar",
        b: "Du er ansvarlig for at:\n• Vælge korrekt position og beregningsmetode\n• Bruge appen i overensstemmelse med gældende lovgivning og App Stores regler\n• Ikke forsøge at foretage reverse engineering af, knække eller misbruge appen\n• Holde din enhed og din iCloud-konto sikre (dine data synkroniseres mellem enheder via Apple iCloud)",
      },
      {
        t: "7. Tredjepartstjenester",
        b: "Vakit bruger følgende tredjepartstjenester og er omfattet af deres egne vilkår:\n• Apple iCloud / CloudKit (synkronisering af brugerdata)\n• Apple MapKit (moskeer i nærheden, kort)\n• Firebase Crashlytics, Remote Config og Cloud Messaging (Google)\n• Apple StoreKit 2 (donationer)\n• Diyanet (fredagsprædikenens tekst og lyd)\n• Adhan-biblioteket (beregning af bedetider, open source)\n• SwiftAA (astronomiske beregninger, open source)\n\nDisse tjenesters vilkår og privatlivspolitikker tilhører de respektive udbydere.",
      },
      {
        t: "8. Immaterielle rettigheder",
        b: "Appens kode og design tilhører Hakan Çelik; appen er open source under MIT-licensen.\n\nVakit bruger tredjepartsindhold og -biblioteker med respekt:\n• Koranens arabiske tekst: offentligt domæne\n• Tyrkisk oversættelse: Diyanet İşleri Başkanlığı Meali\n• Hadith-samlinger: udledt af samlinger i det offentlige domæne\n• Lyd med koranrecitation: kunstnernes tilladelser og licenser er angivet i AUDIO-LICENSES.md\n• Adhan, SwiftAA, GRDB.swift: deres respektive open source-licenser\n\nAppen bruger lyd med adhan og recitation udelukkende til religiøs tilbedelse.",
      },
      {
        t: "9. Ansvarsbegrænsning",
        b: "Appen leveres «som den er». Beregningerne af bedetider og Qibla tilstræber at være præcise, men:\n• Der kan opstå afvigelser på grund af positionens nøjagtighed, GPS-signal, kompaskalibrering og den valgte beregningsmetode.\n• Ved vigtige beslutninger om tilbedelse anbefales det at få bekræftelse hos de lokale religiøse myndigheder.\n• Apple Watch-sensorerne (magnetisk kompas, GPS) kan give yderligere afvigelse.\n• Der kan ske datatab på grund af problemer med iCloud-synkronisering, netværksudfald eller tab af enheden; tag backup af vigtige data.\n\nUdvikleren er ikke ansvarlig for direkte eller indirekte skader, der opstår ved brug af appen.",
      },
      {
        t: "10. Sletning af konto og data",
        b: "Vakit kræver ingen konto. Når du sletter appen, fjernes alle lokale data. Sådan fjerner du data, der er synkroniseret via iCloud: Indstillinger > Slet kontoen, eller på iOS Indstillinger > Apple ID > iCloud > Vakit > Slet data (på Mac Systemindstillinger > Apple-konto > iCloud). Vil du have brugsstatistikken på vores server slettet, så skriv til hakancelikdev@gmail.com; din anmodning efterkommes senest inden for 30 dage.",
      },
      {
        t: "11. Ændringer af vilkårene",
        b: "Disse vilkår kan blive opdateret, efterhånden som appen udvikler sig, og for at afspejle lovkrav. Ved væsentlige ændringer fornyes datoen «Sidst opdateret», og der vises en besked i appen. Fortsat brug af appen betyder, at du accepterer de opdaterede vilkår.",
      },
      {
        t: "12. Lovvalg og værneting",
        b: "Disse vilkår er underlagt lovgivningen i Republikken Tyrkiet. Tvister afgøres ved tyrkiske domstole; i sager om forbrugerrettigheder er de lokale forbrugerdomstole kompetente. Hvis du bor i Den Europæiske Union, bevarer du dine lokale forbrugerrettigheder.",
      },
      {
        t: "13. Kontakt",
        b: "Spørgsmål om disse vilkår: hakancelikdev@gmail.com\n\nUdvikler: Hakan Çelik (Tyrkiet)",
      },
    ],
  },

};
