/**
 * Dutch (Nederlands) legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Deze pagina is een vertaling die voor het gemak wordt aangeboden; als deze afwijkt van de Engelse versie, geldt de Engelse versie.",

  privacy: {
    meta: {
      title: "Vakit — Privacybeleid",
      description:
        "Het privacybeleid van Vakit. Geen account nodig, er worden geen gps-coördinaten verzameld; chatm- en bladwijzergegevens synchroniseren alleen via je eigen Apple iCloud.",
    },
    title: "Privacy<em>beleid</em>",
    desc: "Laatst bijgewerkt: 10 september 2026 — Versie 1.7.4\n\nVakit respecteert je privacy. Er is geen account nodig en we verzamelen geen persoonlijk identificerende gegevens (naam, e-mail, telefoonnummer, foto's, contacten). Gebedstijden, Qibla-richting en herinneringen worden volledig op je apparaat berekend. Je chatm-voortgang, bladwijzers, doelen en favoriete moskeeën blijven op je apparaat en synchroniseren alleen binnen je eigen Apple iCloud-account — ze worden nooit naar onze servers gestuurd. Je dhikr-lijst is de uitzondering: die wordt samen met gebruiksstatistieken naar onze servers gestuurd, zodat we de app kunnen verbeteren (zie sectie 1). Alles wat naar onze servers gaat, is gekoppeld aan een blijvende gebruikerscode zonder identificerende gegevens.",
    sections: [
      {
        t: "1. Gegevens die we verzamelen",
        b: "Gegevens die we NIET verzamelen:\n• Naam, e-mail, telefoonnummer, foto's, microfoon, camera, contacten\n• Gps-coördinaten (breedte-/lengtegraad) – worden nooit naar onze servers gestuurd\n• Accountgegevens (Vakit heeft geen accountsysteem)\n\nGegevens die op je apparaat worden bewaard en binnen je privé-iCloudruimte synchroniseren:\n• Dhikr-gegevens, chatm-voortgang, aanbiddingsdoelen\n• Bladwijzers in Koran en hadith, leesgeschiedenis\n• Tellers van voltooide soera's, status van hadithsecties\n• Je registers van in te halen gebeden en vastendagen\n• Je markeringen van uitzonderingsdagen\n• Favoriete moskeeën\n• App-voorkeuren (taal, berekeningsmethode, meldingsinstellingen, thema)\n\nGegevens die naar onze servers worden gestuurd — gekoppeld aan een blijvende gebruikerscode zonder identificerende gegevens (een pseudoniem, niet anoniem):\n• Regionale locatie (land, stad, wijk) – GEEN gps-coördinaten\n• Apparaatmodel, iOS-/macOS-versie, appversie, watchOS-versie\n• App-voorkeuren (taal, berekeningsmethode, thema, rechtsschool, kalendertype, het geslacht dat je voor de gebedsgids hebt gekozen, voor welke gebeden je meldingen wilt, en je leesvoorkeuren voor Koran en hadith — lettergrootte, vertaling, recitator, schrift). Je leespositie en leesgeschiedenis horen hier NIET bij.\n• Gebruiksstatistieken van functies (schermweergaven, gebruik van functies). Deze laten zien dat een onderdeel is gebruikt — bijvoorbeeld dat een uitzonderingsdag is gemarkeerd of dat een in te halen gebed is genoteerd. Het register zelf (de lijst van je gegevens) wordt niet verstuurd. Wat wel wordt verstuurd, is het feit dat de handeling heeft plaatsgevonden plus enkele getallen — bijvoorbeeld het gebed dat je hebt aangevinkt, je dagelijkse aantallen aanbiddingen, je resterende qada, het nummer van een vers of hadith dat je hebt bewaard; zoals elke statistiek draagt dit een tijdstempel.\n• De tekst van zoekopdrachten die je in de app uitvoert (zoeken in Koran, hadith, dhikr, namen van Allah, moskeeën en instellingen) – verzameld zodat we kunnen zien met welke woorden je niet vindt wat je zoekt en de zoekfunctie kunnen verbeteren; er worden hoogstens 80 tekens bewaard.\n• Je dhikr-lijst – naam, type, categorie en tellers van de dhikr; inclusief de Arabische tekst, beschrijving en bron die je invoert bij dhikr die je zelf toevoegt. Deze worden verzameld om te zien welke dhikr hoe vaak worden gebruikt, zodat het dhikr-onderdeel kan worden verbeterd.\n• Crashrapporten (via Firebase Crashlytics, bevatten geen persoonsgegevens)\n\nOmdat deze gebruikerscode via de iCloud-sleutelhanger synchroniseert, tellen apparaten met dezelfde Apple ID als één gebruiker en blijft de code behouden als je de app verwijdert en opnieuw installeert. De code bevat geen identiteitsgegevens; je gegevens worden nooit verkocht of voor advertenties gebruikt.",
      },
      {
        t: "2. Hoe we je gegevens gebruiken",
        b: "• Berekening van gebedstijden – De locatie wordt lokaal op je apparaat verwerkt en offline berekend met de Adhan-bibliotheek.\n• Qibla-richting – Locatie en kompasrichting worden op het apparaat gecombineerd.\n• Plaatsnaam – Om de naam te tonen van de plek waar je bent, worden je coördinaten naar de plaatsnaamdienst van Apple gestuurd; niet naar Vakit-servers.\n• Herinneringen voor aanbidding – Lokale meldingen worden door iOS en macOS op het apparaat ingepland.\n• Aankondigingen – Aankondigingen van gezegende dagen en nieuwe versies worden via Firebase Cloud Messaging naar iedereen tegelijk verstuurd; er is geen targeting per persoon.\n• Vrijdagpreek – De preek van deze week wordt gedownload van de openbare pagina van Diyanet; het verzoek bevat geen identificerende gegevens.\n• Moskeeën in de buurt – Je locatie wordt naar Apple MapKit gestuurd (moskeeën zoeken, afstand, routebeschrijving); niet naar Vakit-servers.\n• Gebruikersgegevens (dhikr, chatm, bladwijzers) – Lokaal bewaard met Core Data en gesynchroniseerd binnen je privé-Apple iCloudruimte. Hiervan wordt alleen de dhikr-lijst daarnaast ook naar de Vakit-server gestuurd (zie sectie 1).\n• Ontwikkeling en verbetering – Gebruiksstatistieken (zonder gps-coördinaten) worden gebruikt om de prestaties te volgen en fouten op te sporen.",
      },
      {
        t: "3. iCloud-synchronisatie (CloudKit)",
        b: "Vakit synchroniseert je aanbiddingsgegevens (dhikr, chatm, bladwijzers, doelen, favoriete moskeeën) tussen je apparaten via CloudKit van Apple. Deze gegevens:\n• Staan alleen in de privédatabase van je eigen Apple ID.\n• Zijn versleuteld op de infrastructuur van Apple; wij, medewerkers van Apple en derden hebben er geen toegang toe.\n• Synchroniseren automatisch tussen iPhone, iPad, Mac en Apple Watch.\n• Blijven alleen op je apparaat als je iCloud uitschakelt.\n• Worden van al je apparaten verwijderd wanneer je «Account verwijderen» gebruikt of de gegevens van Vakit uit iCloud verwijdert.\n\nMeer informatie: apple.com/legal/privacy",
      },
      {
        t: "4. Gegevens op Apple Watch en Mac",
        b: "Vakit levert een begeleidende app voor watchOS 9+. Op de Watch:\n• Wordt locatietoestemming apart op de Watch gegeven; is Vakit op de iPhone geïnstalleerd, dan wordt de locatie via WatchConnectivity ontvangen, anders wordt de gps van de Watch gebruikt.\n• Wordt de kompassensor op het apparaat verwerkt voor de qibla; die gegevens gaan nooit naar een server.\n• Lezen we geen gezondheids- (HealthKit), activiteits- of hartslaggegevens.\n• Worden meldingen via de iOS-meldingsspiegeling van de iPhone doorgegeven; werkt de Watch zelfstandig, dan plant hij zijn eigen lokale meldingen.\n\nOp de Mac (macOS 13+):\n• De Mac-app is dezelfde app als op de iPhone; je gegevens worden ook hier op het apparaat bewaard en binnen je eigen privé-iCloud gesynchroniseerd.\n• Macs hebben geen kompashardware, dus er is geen live Qibla-kompas; de richting en afstand worden op basis van je locatie berekend en als tekst getoond.\n• De locatie komt op de Mac van locatievoorzieningen op basis van wifi in plaats van gps, en wordt evenmin naar onze servers gestuurd.\n• Meldingstoestemming en meldingsinstellingen gelden per apparaat; een wijziging op de Mac heeft geen invloed op je iPhone.",
      },
      {
        t: "5. Diensten van derden",
        b: "Vakit gebruikt de volgende diensten voor beperkte doeleinden. Geen ervan is aan je persoonlijke identiteit gekoppeld:\n\n• Apple iCloud / CloudKit – Synchronisatie van gebruikersgegevens (in je privé-iCloudruimte).\n• Apple MapKit – Moskeeën in de buurt, kaart en routebeschrijving (de locatie wordt naar Apple gestuurd).\n• Firebase Crashlytics (Google) – Crashrapporten zonder identiteitsgegevens (stack trace, apparaatmodel, iOS-/macOS-versie).\n• Firebase Remote Config (Google) – Functievlaggen en geleidelijke uitrol (leest geen gegevens van het apparaat).\n• Apple StoreKit 2 – Optionele donaties (in-app-aankoop). Betaalgegevens worden door Apple verwerkt; Vakit ziet nooit kaartgegevens.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Aankondigingen van gezegende dagen en nieuwe versies. Aankondigingen worden per onderwerp naar iedereen tegelijk verstuurd; er is geen targeting per persoon.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Tekst en audio van de vrijdagpreek.\n• Vakit-server (Duitsland, Frankfurt) – Gebruiksstatistieken en je dhikr-lijst, gekoppeld aan een gebruikerscode zonder identificerende gegevens. Je chatm-, bladwijzer-, doel- en leesgegevens worden daar nooit naartoe gestuurd.\n\nLet op: Firebase Analytics wordt NIET gebruikt; de reclame-identificatie (IDFA) wordt niet verzameld.\n\nPrivacybeleid van Google: policies.google.com/privacy",
      },
      {
        t: "6. Advertenties",
        b: "Vakit toont geen advertenties. De enige inkomstenbron van de app zijn vrijwillige donaties van gebruikers.",
      },
      {
        t: "7. Donaties (in-app-aankoop)",
        b: "Vakit is gratis. Om de ontwikkelaar te steunen kun je op het scherm «Houd Vakit in leven» optionele donaties doen in niveaus van ₺10 tot ₺10.000. Deze transacties:\n• Worden verwerkt door Apple StoreKit 2; betaalgegevens (kaart, IBAN, Apple Pay) gaan alleen naar Apple.\n• Vakit ziet of bewaart nooit je betaalmethode of financiële gegevens.\n• Terugbetaling kan alleen via Apple worden aangevraagd (reportaproblem.apple.com).",
      },
      {
        t: "8. Bewaartermijnen",
        b: "• Lokale gegevens op het apparaat – Bewaard tot je de app verwijdert.\n• iCloud-gegevens – Bewaard tot je de gegevens van Vakit uit iCloud verwijdert of je Apple ID uitschakelt.\n• Gebruiksstatistieken op de server – 180 dagen (ongeveer 6 maanden) bewaard en daarna automatisch verwijderd. Voor de tekst van zoekopdrachten geldt dezelfde termijn.\n• Crashrapporten (Crashlytics) – 90 dagen bewaard en daarna verwijderd.\n• Serverlogboeken – Binnen 30 dagen geroteerd.",
      },
      {
        t: "9. Je rechten (KVKK / AVG)",
        b: "Onder de Turkse KVKK en de Europese AVG (GDPR) heb je het recht om:\n• Te weten welke gegevens over jou worden verzameld\n• Bezwaar te maken tegen gegevensverwerking (trek de toegang tot locatie, meldingen of beweging in via Instellingen → Vakit op iOS, of Systeeminstellingen → Vakit op de Mac)\n• Verwijdering van je gegevens te vragen: Instellingen → Account verwijderen wist alles op je apparaat en in iCloud. Wil je dat de gebruiksstatistieken op onze server worden verwijderd, schrijf dan naar hakancelikdev@gmail.com; je verzoek wordt uiterlijk binnen 30 dagen afgehandeld.\n• Je gegevens over te dragen (dataportabiliteit)\n• Een klacht in te dienen bij de KVKK-toezichthouder\n\nDien verzoeken in via hakancelikdev@gmail.com; we antwoorden uiterlijk binnen 30 dagen.",
      },
      {
        t: "10. Privacy van kinderen",
        b: "Vakit wordt in de App Store aangeboden met leeftijdsclassificatie 4+, maar we verzamelen niet bewust persoonsgegevens van gebruikers jonger dan 13 jaar. Denk je dat een kind jonger dan 13 gegevens heeft verstrekt, schrijf dan naar hakancelikdev@gmail.com; we verwijderen de betreffende gegevens onmiddellijk.",
      },
      {
        t: "11. Beveiliging",
        b: "Alle lokale gegevens blijven op je apparaat, beschermd door de sandbox van iOS/macOS en apparaatversleuteling. iCloud-gegevens zijn versleuteld op de infrastructuur van Apple. Gegevens die naar onze server gaan, worden via HTTPS/TLS verzonden en in een versleutelde database opgeslagen; ze bevatten geen identiteitsgegevens. Vakit detecteert daarnaast jailbreak, debugger en code-injectie voor extra bescherming bij gevoelige handelingen.",
      },
      {
        t: "12. Wijzigingen in dit beleid",
        b: "Dit beleid kan worden bijgewerkt naarmate de app zich ontwikkelt. Bij wezenlijke wijzigingen wordt de datum «Laatst bijgewerkt» op deze pagina vernieuwd en wordt in de app een melding getoond. We raden je aan dit beleid regelmatig door te lezen.",
      },
      {
        t: "13. Contact",
        b: "Voor vragen, verzoeken of feedback over privacy: hakancelikdev@gmail.com\n\nVerwerkingsverantwoordelijke: Hakan Çelik (Turkije)",
      },
    ],
  },

  terms: {
    meta: {
      title: "Vakit — Gebruiksvoorwaarden",
      description:
        "De gebruiksvoorwaarden van Vakit. Gratis te gebruiken, met optionele donaties (in-app-aankopen); alle kernfuncties zijn gratis.",
    },
    title: "Gebruiks<em>voorwaarden</em>",
    desc: "Laatst bijgewerkt: 10 september 2026 — Versie 1.7.4\n\nDoor onze app te downloaden, te installeren of te gebruiken, ga je ermee akkoord gebonden te zijn aan deze Voorwaarden. Lees deze Voorwaarden aandachtig.",
    sections: [
      {
        t: "1. Aanvaarding van de voorwaarden",
        b: "Door Vakit te openen en te gebruiken, ga je ermee akkoord gebonden te zijn aan de bepalingen en voorwaarden van deze overeenkomst. Ga je niet akkoord, gebruik deze dienst dan niet.",
      },
      {
        t: "2. Beschrijving van de dienst",
        b: "Vakit is een gratis app met hulpmiddelen voor aanbidding, zoals gebedstijden, Qibla-richting, Koran, hadith, een dhikr-teller, gidsen voor gebed en wassing, chatm- en aanbiddingsregistratie, de vrijdagpreek, moskeeën in de buurt en een kalender met religieuze dagen. De app werkt op iOS 16.4+ en macOS 13+ en bevat een begeleidende Apple Watch-app voor watchOS 9+.",
      },
      {
        t: "3. Advertenties",
        b: "Vakit toont geen advertenties. De enige inkomstenbron van de app zijn vrijwillige donaties van gebruikers.",
      },
      {
        t: "4. Advertenties",
        b: "Vakit toont geen advertenties. De enige inkomstenbron van de app zijn vrijwillige donaties van gebruikers.",
      },
      {
        t: "5. Begeleidende Apple Watch-app",
        b: "Vakit levert een begeleidende app voor watchOS 9+ met gebedstijden, het Qibla-kompas en complicaties. Op het gebruik van de Watch-app zijn deze Voorwaarden van toepassing. Door de hardwarebeperkingen van de Apple Watch (gps-nauwkeurigheid, kompasafwijking, batterij) kunnen de resultaten op de Watch afwijken van die op de iPhone.",
      },
      {
        t: "6. Verantwoordelijkheden van de gebruiker",
        b: "Je bent verantwoordelijk voor:\n• Het kiezen van een juiste locatie en berekeningsmethode\n• Het gebruik van de app in overeenstemming met de geldende wetgeving en de regels van de App Store\n• Het niet proberen de app te reverse-engineeren, te kraken of te misbruiken\n• Het veilig houden van je apparaat en iCloud-account (je gegevens worden via Apple iCloud tussen je apparaten gesynchroniseerd)",
      },
      {
        t: "7. Diensten van derden",
        b: "Vakit gebruikt de volgende diensten van derden, waarop hun eigen voorwaarden van toepassing zijn:\n• Apple iCloud / CloudKit (synchronisatie van gebruikersgegevens)\n• Apple MapKit (moskeeën in de buurt, kaarten)\n• Firebase Crashlytics, Remote Config en Cloud Messaging (Google)\n• Apple StoreKit 2 (donaties)\n• Diyanet (tekst en audio van de vrijdagpreek)\n• Adhan-bibliotheek (berekening van gebedstijden, opensource)\n• SwiftAA (astronomische berekeningen, opensource)\n\nDe voorwaarden en het privacybeleid van deze diensten behoren toe aan hun respectieve aanbieders.",
      },
      {
        t: "8. Intellectueel eigendom",
        b: "De code en het ontwerp van de app zijn eigendom van Hakan Çelik; de app is opensource onder de MIT-licentie.\n\nVakit gebruikt inhoud en bibliotheken van derden met respect:\n• Arabische Korantekst: publiek domein\n• Turkse vertaling: Diyanet İşleri Başkanlığı Meali\n• Hadithverzamelingen: afgeleid van compilaties in het publieke domein\n• Audio van Koranrecitaties: toestemmingen en licenties van de artiesten staan vermeld in AUDIO-LICENSES.md\n• Adhan, SwiftAA, GRDB.swift: hun respectieve opensourcelicenties\n\nDe app gebruikt adhan- en recitatie-audio uitsluitend voor religieuze aanbidding.",
      },
      {
        t: "9. Beperking van aansprakelijkheid",
        b: "De app wordt geleverd «zoals hij is». De berekeningen van gebedstijden en Qibla streven naar nauwkeurigheid, maar:\n• Er kunnen afwijkingen optreden door locatienauwkeurigheid, gps-signaal, kompaskalibratie en de gekozen berekeningsmethode.\n• Voor belangrijke beslissingen over aanbidding wordt bevestiging door plaatselijke religieuze autoriteiten aanbevolen.\n• De sensoren van de Apple Watch (magnetisch kompas, gps) kunnen extra afwijking veroorzaken.\n• Gegevensverlies kan optreden door problemen met iCloud-synchronisatie, netwerkstoringen of verlies van het apparaat; maak een back-up van belangrijke gegevens.\n\nDe ontwikkelaar is niet aansprakelijk voor directe of indirecte schade die voortvloeit uit het gebruik van de app.",
      },
      {
        t: "10. Account- en gegevensverwijdering",
        b: "Vakit vereist geen account. Door de app te verwijderen, worden alle lokale gegevens gewist. Via iCloud gesynchroniseerde gegevens verwijderen: Instellingen > Account verwijderen, of op iOS Instellingen > Apple ID > iCloud > Vakit > Gegevens verwijderen (op de Mac Systeeminstellingen > Apple-account > iCloud). Wil je dat de gebruiksstatistieken op onze server worden verwijderd, schrijf dan naar hakancelikdev@gmail.com; je verzoek wordt uiterlijk binnen 30 dagen afgehandeld.",
      },
      {
        t: "11. Wijzigingen in de voorwaarden",
        b: "Deze Voorwaarden kunnen worden bijgewerkt naarmate de app zich ontwikkelt en om aan wettelijke vereisten te voldoen. Bij wezenlijke wijzigingen wordt de datum «Laatst bijgewerkt» vernieuwd en wordt in de app een melding getoond. Als je de app blijft gebruiken, aanvaard je daarmee de bijgewerkte Voorwaarden.",
      },
      {
        t: "12. Toepasselijk recht en bevoegde rechter",
        b: "Op deze Voorwaarden is het recht van de Republiek Turkije van toepassing. Geschillen worden beslecht door Turkse rechtbanken; voor consumentenrechten zijn de plaatselijke consumentenrechtbanken bevoegd. Woon je in de Europese Unie, dan blijven je lokale consumentenrechten onverlet.",
      },
      {
        t: "13. Contact",
        b: "Voor vragen over deze Voorwaarden: hakancelikdev@gmail.com\n\nOntwikkelaar: Hakan Çelik (Turkije)",
      },
    ],
  },

};
