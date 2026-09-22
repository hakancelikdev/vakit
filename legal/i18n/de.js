/**
 * German legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Diese Seite ist eine Übersetzung, die wir der Einfachheit halber bereitstellen; weicht sie von der englischen Fassung ab, gilt die englische Fassung.",

  privacy: {
    meta: {
      title: "Vakit — Datenschutzerklärung",
      description: "Die Datenschutzerklärung von Vakit. Kein Konto nötig, keine Erhebung von GPS-Koordinaten; Chatm- und Lesezeichen-Einträge werden nur über dein eigenes Apple iCloud synchronisiert.",
    },
    title: "Datenschutz<em>erklärung</em>",
    desc: "Zuletzt aktualisiert: 10. September 2026 — Version 1.7.4\n\nVakit respektiert deine Privatsphäre. Du brauchst kein Konto, und wir erheben keine Angaben, die dich persönlich identifizieren (Name, E-Mail, Telefonnummer, Fotos, Kontakte). Gebetszeiten, Qibla-Richtung und Erinnerungen werden vollständig auf deinem Gerät berechnet. Dein Chatm-Fortschritt, deine Lesezeichen, Ziele und bevorzugten Moscheen bleiben auf deinem Gerät und werden nur innerhalb deines eigenen Apple-iCloud-Kontos synchronisiert — sie werden nie an unsere Server gesendet. Eine Ausnahme ist deine Dhikr-Liste: Sie wird zusammen mit Nutzungsstatistiken an unsere Server gesendet, damit wir die App verbessern können (siehe Abschnitt 1). Alles, was an unsere Server geht, ist mit einem dauerhaften Benutzercode verknüpft, der keine identifizierenden Angaben enthält.",
    sections: [
      {
        t: "1. Daten, die wir erheben",
        b: "Daten, die wir NICHT erheben:\n• Name, E-Mail, Telefonnummer, Fotos, Mikrofon, Kamera, Kontakte\n• GPS-Koordinaten (Breiten-/Längengrad) – werden nie an unsere Server gesendet\n• Zugangsdaten zu einem Konto (Vakit hat kein Kontosystem)\n\nDaten, die auf deinem Gerät gespeichert und in deinem privaten iCloud-Bereich synchronisiert werden:\n• Dhikr-Einträge, Chatm-Fortschritt, Gottesdienstziele\n• Koran- und Hadith-Lesezeichen, Leseverlauf\n• Zähler für abgeschlossene Suren, Status der Hadith-Abschnitte\n• Deine Aufzeichnungen zu versäumten Gebeten und nachzuholenden Fastentagen\n• Deine Markierungen für Ausnahmetage\n• Bevorzugte Moscheen\n• App-Einstellungen (Sprache, Berechnungsmethode, Mitteilungseinstellungen, Farbthema)\n\nDaten, die an unsere Server gesendet werden — verknüpft mit einem dauerhaften Benutzercode ohne identifizierende Angaben (ein Pseudonym, nicht anonym):\n• Regionaler Standort (Land, Stadt, Bezirk) – KEINE GPS-Koordinaten\n• Gerätemodell, iOS-/macOS-Version, App-Version, watchOS-Version\n• App-Einstellungen (Sprache, Berechnungsmethode, Farbthema, Rechtsschule, Kalendertyp, das für den Gebetsleitfaden gewählte Geschlecht, für welche Gebete du Mitteilungen erhalten möchtest, sowie deine Einstellungen zum Lesen von Koran und Hadith — Schriftgröße, Übersetzung, Rezitator, Mushaf-Schrift). Deine Leseposition und dein Leseverlauf gehören NICHT dazu.\n• Statistiken zur Nutzung von Funktionen (Bildschirmaufrufe, Nutzung von Funktionen). Sie zeigen, dass ein Bereich genutzt wurde — zum Beispiel, dass ein Ausnahmetag markiert oder ein versäumtes Gebet eingetragen wurde. Die Aufzeichnung selbst (die Liste deiner Einträge) wird nicht gesendet. Gesendet wird, dass die Aktion stattgefunden hat, zusammen mit einigen Zahlen — zum Beispiel das Gebet, das du markiert hast, deine täglichen Gottesdienstzahlen, deine noch offenen Nachholgebete (Qada), die Nummer eines Verses oder Hadiths, den du gespeichert hast; wie jede Statistik trägt dies einen Zeitstempel.\n• Der Text deiner Suchen in der App (Suche in Koran, Hadith, Dhikr, Namen Allahs, Moscheen und Einstellungen) – wird erfasst, damit wir sehen, bei welchen Wörtern du nicht findest, wonach du suchst, und die Suche verbessern können; gespeichert werden höchstens 80 Zeichen.\n• Deine Dhikr-Liste – Name, Art, Kategorie und Zähler der Dhikr; bei selbst hinzugefügten Dhikr einschließlich des arabischen Textes, der Beschreibung und der Quelle, die du eingibst. Sie wird erfasst, um zu sehen, welche Dhikr wie oft genutzt werden, damit wir den Dhikr-Bereich verbessern können.\n• Absturzberichte (über Firebase Crashlytics, ohne personenbezogene Daten)\n\nDa dieser Benutzercode über den iCloud-Schlüsselbund synchronisiert wird, zählen Geräte mit derselben Apple-ID als eine Person, und der Code bleibt erhalten, wenn du die App löschst und neu installierst. Der Code enthält keine Identitätsdaten; deine Daten werden nie verkauft oder für Werbung verwendet.",
      },
      {
        t: "2. Wie wir deine Daten verwenden",
        b: "• Berechnung der Gebetszeiten – Der Standort wird lokal auf deinem Gerät verarbeitet und mit der Adhan-Bibliothek offline berechnet.\n• Qibla-Richtung – Standort und Kompassrichtung werden auf dem Gerät kombiniert.\n• Ortsname – Um den Namen deines Aufenthaltsorts anzuzeigen, werden deine Koordinaten an Apples Dienst für Ortsnamen gesendet, nicht an Vakit-Server.\n• Gottesdienst-Erinnerungen – Lokale Mitteilungen werden von iOS und macOS auf dem Gerät geplant.\n• Ankündigungen – Ankündigungen zu heiligen Tagen und neuen Versionen werden über Firebase Cloud Messaging an alle gesendet; es gibt keine Ausrichtung auf einzelne Personen.\n• Freitagspredigt – Die Predigt der Woche wird von der öffentlichen Seite des Diyanet geladen; die Anfrage enthält keine identifizierenden Angaben.\n• Moscheen in der Nähe – Dein Standort wird an Apple MapKit gesendet (Moscheesuche, Entfernung, Route), nicht an Vakit-Server.\n• Nutzerdaten (Dhikr, Chatm, Lesezeichen) – Werden lokal mit Core Data gespeichert und in deinem privaten Apple-iCloud-Bereich synchronisiert. Davon wird nur die Dhikr-Liste zusätzlich an den Vakit-Server gesendet (siehe Abschnitt 1).\n• Entwicklung und Verbesserung – Nutzungsstatistiken (ohne GPS-Koordinaten) dienen dazu, die Leistung zu überwachen und Fehler zu erkennen.",
      },
      {
        t: "3. iCloud-Synchronisierung (CloudKit)",
        b: "Vakit synchronisiert deine Gottesdienst-Einträge (Dhikr, Chatm, Lesezeichen, Ziele, bevorzugte Moscheen) über Apples CloudKit zwischen deinen Geräten. Diese Daten:\n• Liegen ausschließlich in der privaten Datenbank deiner eigenen Apple-ID.\n• Sind auf Apples Infrastruktur verschlüsselt; weder wir noch Apple-Mitarbeitende oder Dritte können darauf zugreifen.\n• Werden automatisch zwischen iPhone, iPad, Mac und Apple Watch synchronisiert.\n• Bleiben nur auf deinem Gerät, wenn du iCloud deaktivierst.\n• Werden von all deinen Geräten entfernt, wenn du „Konto löschen“ verwendest oder die Vakit-Daten aus iCloud entfernst.\n\nDetails: apple.com/legal/privacy",
      },
      {
        t: "4. Daten auf Apple Watch und Mac",
        b: "Vakit bringt eine Begleit-App für watchOS 9+ mit. Auf der Watch:\n• Die Standortberechtigung wird auf der Watch separat erteilt; ist Vakit auf dem iPhone installiert, kommt der Standort über WatchConnectivity, andernfalls wird das GPS der Watch genutzt.\n• Der Kompasssensor wird für die Qibla auf dem Gerät verarbeitet und nie an einen Server gesendet.\n• Wir lesen keine Gesundheits- (HealthKit), Aktivitäts- oder Herzfrequenzdaten.\n• Mitteilungen werden per iOS-Mitteilungsspiegelung vom iPhone übernommen; läuft die Watch allein, plant sie ihre eigenen lokalen Mitteilungen.\n\nAuf dem Mac (macOS 13+):\n• Die Mac-App ist dieselbe App wie auf dem iPhone; deine Daten werden auch hier auf dem Gerät gespeichert und in deinem eigenen privaten iCloud-Bereich synchronisiert.\n• Macs haben keine Kompass-Hardware, daher gibt es keinen Live-Qibla-Kompass; Richtung und Entfernung werden aus deinem Standort berechnet und als Text angezeigt.\n• Der Standort kommt auf dem Mac nicht vom GPS, sondern von WLAN-basierten Ortungsdiensten und wird ebenfalls nie an unsere Server gesendet.\n• Mitteilungsberechtigung und Mitteilungseinstellungen gelten pro Gerät; Änderungen auf dem Mac wirken sich nicht auf dein iPhone aus.",
      },
      {
        t: "5. Dienste Dritter",
        b: "Vakit nutzt die folgenden Dienste für begrenzte Zwecke. Keiner davon ist mit deiner persönlichen Identität verknüpft:\n\n• Apple iCloud / CloudKit – Synchronisierung der Nutzerdaten (in deinem privaten iCloud-Bereich).\n• Apple MapKit – Moscheen in der Nähe, Karte und Route (der Standort wird an Apple gesendet).\n• Firebase Crashlytics (Google) – Absturzberichte ohne Identitätsdaten (Stack-Trace, Gerätemodell, iOS-/macOS-Version).\n• Firebase Remote Config (Google) – Funktionsschalter und schrittweise Einführung (liest keine Daten vom Gerät).\n• Apple StoreKit 2 – Freiwillige Spenden (In-App-Käufe). Zahlungsdaten werden von Apple verarbeitet; Vakit sieht nie Kartendaten.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Ankündigungen zu heiligen Tagen und neuen Versionen. Ankündigungen werden nach Themen an alle gesendet; es gibt keine Ausrichtung auf einzelne Personen.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Text und Audio der Freitagspredigt.\n• Vakit-Server (Deutschland, Frankfurt) – Nutzungsstatistiken und deine Dhikr-Liste, verknüpft mit einem Benutzercode ohne identifizierende Angaben. Deine Chatm-, Lesezeichen-, Ziel- und Leseeinträge werden nie dorthin gesendet.\n\nHinweis: Firebase Analytics wird NICHT verwendet; die Werbe-ID (IDFA) wird nicht erhoben.\n\nDatenschutzerklärung von Google: policies.google.com/privacy",
      },
      {
        t: "6. Werbung",
        b: "Vakit zeigt keine Werbung. Die einzige Einnahmequelle der App sind freiwillige Spenden der Nutzer.",
      },
      {
        t: "7. Spenden (In-App-Käufe)",
        b: "Vakit ist kostenlos. Um den Entwickler zu unterstützen, kannst du über den Bildschirm „Vakit am Leben halten“ freiwillig in Stufen von 10 ₺ bis 10.000 ₺ spenden. Diese Vorgänge:\n• Werden über Apple StoreKit 2 abgewickelt; Zahlungsdaten (Karte, IBAN, Apple Pay) gehen nur an Apple.\n• Vakit sieht und speichert weder deine Zahlungsart noch deine Finanzdaten.\n• Erstattungen können nur über Apple beantragt werden (reportaproblem.apple.com).",
      },
      {
        t: "8. Speicherdauer",
        b: "• Lokale Gerätedaten – Bleiben gespeichert, bis du die App löschst.\n• iCloud-Daten – Bleiben gespeichert, bis du die Vakit-Daten aus iCloud entfernst oder deine Apple-ID deaktivierst.\n• Nutzungsstatistiken auf dem Server – Werden 180 Tage (etwa 6 Monate) aufbewahrt und danach automatisch gelöscht. Für den Text von Suchanfragen gilt dieselbe Frist.\n• Absturzberichte (Crashlytics) – Werden 90 Tage aufbewahrt und danach gelöscht.\n• Serverprotokolle – Werden innerhalb von 30 Tagen rotiert.",
      },
      {
        t: "9. Deine Rechte (KVKK / DSGVO)",
        b: "Nach dem türkischen KVKK und der EU-DSGVO hast du das Recht:\n• zu erfahren, welche Daten über dich erhoben werden\n• der Datenverarbeitung zu widersprechen (entziehe die Berechtigungen für Standort, Mitteilungen oder Bewegung unter iOS in Einstellungen → Vakit, auf dem Mac in Systemeinstellungen → Vakit)\n• die Löschung deiner Daten zu verlangen: Einstellungen → Konto löschen entfernt alles auf deinem Gerät und in iCloud. Um die Nutzungsstatistiken auf unserem Server löschen zu lassen, schreib an hakancelikdev@gmail.com; deine Anfrage wird spätestens innerhalb von 30 Tagen erfüllt.\n• auf Datenübertragbarkeit\n• bei der KVKK-Behörde Beschwerde einzulegen\n\nRichte Anfragen an hakancelikdev@gmail.com; wir antworten spätestens innerhalb von 30 Tagen.",
      },
      {
        t: "10. Datenschutz bei Kindern",
        b: "Vakit wird im App Store mit der Altersfreigabe 4+ angeboten, wir erheben jedoch wissentlich keine personenbezogenen Daten von Personen unter 13 Jahren. Wenn du glaubst, dass ein Kind unter 13 Jahren Daten übermittelt hat, schreib bitte an hakancelikdev@gmail.com; wir löschen die betreffenden Daten umgehend.",
      },
      {
        t: "11. Sicherheit",
        b: "Alle lokalen Daten bleiben auf deinem Gerät, geschützt durch die iOS-/macOS-Sandbox und die Geräteverschlüsselung. iCloud-Daten werden auf Apples Infrastruktur verschlüsselt. Daten an unseren Server werden über HTTPS/TLS übertragen und in einer verschlüsselten Datenbank gespeichert; sie enthalten keine Identitätsangaben. Vakit erkennt außerdem Jailbreak, Debugger und Code-Injection, um sensible Vorgänge zusätzlich zu schützen.",
      },
      {
        t: "12. Änderungen dieser Erklärung",
        b: "Diese Erklärung kann aktualisiert werden, wenn sich die App weiterentwickelt. Bei wesentlichen Änderungen wird das Datum „Zuletzt aktualisiert“ auf dieser Seite erneuert und in der App ein Hinweis angezeigt. Wir empfehlen dir, diese Erklärung regelmäßig zu lesen.",
      },
      {
        t: "13. Kontakt",
        b: "Für Fragen, Anfragen oder Rückmeldungen zum Datenschutz: hakancelikdev@gmail.com\n\nVerantwortlicher: Hakan Çelik (Türkei)",
      },
    ],
  },

  terms: {
    meta: {
      title: "Vakit — Nutzungsbedingungen",
      description: "Die Nutzungsbedingungen von Vakit. Kostenlos nutzbar, mit freiwilligen Spenden (In-App-Käufe); alle Kernfunktionen sind kostenlos.",
    },
    title: "Nutzungs<em>bedingungen</em>",
    desc: "Zuletzt aktualisiert: 10. September 2026 — Version 1.7.4\n\nMit dem Herunterladen, Installieren oder Nutzen unserer App erklärst du dich mit diesen Bedingungen einverstanden. Bitte lies diese Bedingungen aufmerksam.",
    sections: [
      {
        t: "1. Annahme der Bedingungen",
        b: "Mit dem Zugriff auf Vakit und der Nutzung der App erklärst du dich an die Bedingungen und Bestimmungen dieser Vereinbarung gebunden. Wenn du nicht einverstanden bist, nutze diesen Dienst bitte nicht.",
      },
      {
        t: "2. Beschreibung des Dienstes",
        b: "Vakit ist eine kostenlose App mit Werkzeugen für den Gottesdienst wie Gebetszeiten, Qibla-Richtung, Koran, Hadith, einem Dhikr-Zähler, Leitfäden für Gebet und Wudū (Gebetswaschung), Chatm- und Gottesdienst-Verfolgung, der Freitagspredigt, Moscheen in der Nähe und einem Kalender religiöser Tage. Sie läuft unter iOS 16.4+ und macOS 13+ und enthält eine Begleit-App für die Apple Watch unter watchOS 9+.",
      },
      {
        t: "3. Werbung",
        b: "Vakit zeigt keine Werbung. Die einzige Einnahmequelle der App sind freiwillige Spenden der Nutzer.",
      },
      {
        t: "4. Werbung",
        b: "Vakit zeigt keine Werbung. Die einzige Einnahmequelle der App sind freiwillige Spenden der Nutzer.",
      },
      {
        t: "5. Begleit-App für die Apple Watch",
        b: "Vakit enthält eine Begleit-App für watchOS 9+ mit Gebetszeiten, Qibla-Kompass und Komplikationen. Die Nutzung der Watch-App unterliegt diesen Bedingungen. Wegen der Hardware-Grenzen der Apple Watch (GPS-Genauigkeit, Kompassabweichung, Batterie) können die Ergebnisse auf der Watch von denen auf dem iPhone abweichen.",
      },
      {
        t: "6. Verantwortung der Nutzer",
        b: "Du bist dafür verantwortlich:\n• den richtigen Standort und die richtige Berechnungsmethode auszuwählen\n• die App im Einklang mit geltendem Recht und den Regeln des App Store zu nutzen\n• nicht zu versuchen, die App zurückzuentwickeln, zu knacken oder zu missbrauchen\n• dein Gerät und dein iCloud-Konto zu schützen (deine Daten werden über Apple iCloud zwischen deinen Geräten synchronisiert)",
      },
      {
        t: "7. Dienste Dritter",
        b: "Vakit nutzt die folgenden Dienste Dritter und unterliegt deren eigenen Bedingungen:\n• Apple iCloud / CloudKit (Synchronisierung der Nutzerdaten)\n• Apple MapKit (Moscheen in der Nähe, Karten)\n• Firebase Crashlytics, Remote Config und Cloud Messaging (Google)\n• Apple StoreKit 2 (Spenden)\n• Diyanet (Text und Audio der Freitagspredigt)\n• Adhan-Bibliothek (Berechnung der Gebetszeiten, Open Source)\n• SwiftAA (astronomische Berechnungen, Open Source)\n\nDie Nutzungsbedingungen und Datenschutzerklärungen dieser Dienste liegen bei den jeweiligen Anbietern.",
      },
      {
        t: "8. Geistiges Eigentum",
        b: "Code und Design der App gehören Hakan Çelik; die App ist unter der MIT-Lizenz Open Source.\n\nVakit nutzt Inhalte und Bibliotheken Dritter mit Respekt:\n• Arabischer Korantext: gemeinfrei\n• Türkische Übersetzung: Diyanet İşleri Başkanlığı Meali\n• Hadithsammlungen: aus gemeinfreien Sammlungen zusammengestellt\n• Koranrezitationen: Genehmigungen und Lizenzen der jeweiligen Rezitatoren sind in AUDIO-LICENSES.md aufgeführt\n• Adhan, SwiftAA, GRDB.swift: ihre jeweiligen Open-Source-Lizenzen\n\nDie App verwendet Aufnahmen von Gebetsruf und Rezitationen ausschließlich zu Zwecken des Gottesdienstes.",
      },
      {
        t: "9. Haftungsbeschränkung",
        b: "Die App wird „wie besehen“ bereitgestellt. Die Berechnungen von Gebetszeiten und Qibla sind um Genauigkeit bemüht, jedoch:\n• Abweichungen sind je nach Standortgenauigkeit, GPS-Signal, Kompasskalibrierung und gewählter Berechnungsmethode möglich.\n• Für wichtige religiöse Entscheidungen wird empfohlen, die Angaben bei örtlichen religiösen Autoritäten zu überprüfen.\n• Die Sensoren der Apple Watch (Magnetkompass, GPS) können zusätzliche Abweichungen verursachen.\n• Durch Probleme bei der iCloud-Synchronisierung, Netzausfälle oder Geräteverlust kann es zu Datenverlust kommen; sichere wichtige Daten.\n\nDer Entwickler haftet nicht für unmittelbare oder mittelbare Schäden, die aus der Nutzung der App entstehen.",
      },
      {
        t: "10. Konto- und Datenlöschung",
        b: "Vakit benötigt kein Konto. Wenn du die App löschst, werden alle lokalen Daten entfernt. Um über iCloud synchronisierte Daten zu löschen: Einstellungen > Konto löschen oder unter iOS Einstellungen > Apple-ID > iCloud > Vakit > Daten löschen (auf dem Mac Systemeinstellungen > Apple Account > iCloud). Wenn du die auf unserem Server gespeicherten Nutzungsstatistiken löschen lassen möchtest, schreib an hakancelikdev@gmail.com; deine Anfrage wird spätestens innerhalb von 30 Tagen erfüllt.",
      },
      {
        t: "11. Änderungen der Bedingungen",
        b: "Diese Bedingungen können aktualisiert werden, wenn sich die App weiterentwickelt oder rechtliche Anforderungen es erfordern. Bei wesentlichen Änderungen wird das Datum „Zuletzt aktualisiert“ erneuert und in der App ein Hinweis angezeigt. Wenn du die App weiter nutzt, gilt dies als Zustimmung zu den aktualisierten Bedingungen.",
      },
      {
        t: "12. Anwendbares Recht und Gerichtsstand",
        b: "Diese Bedingungen unterliegen dem Recht der Republik Türkei. Streitigkeiten werden vor türkischen Gerichten beigelegt; für Verbraucherrechte sind die örtlichen Verbrauchergerichte zuständig. Wenn du deinen Wohnsitz in der Europäischen Union hast, bleiben deine örtlichen Verbraucherrechte unberührt.",
      },
      {
        t: "13. Kontakt",
        b: "Bei Fragen zu diesen Bedingungen: hakancelikdev@gmail.com\n\nEntwickler: Hakan Çelik (Türkei)",
      },
    ],
  },

};
