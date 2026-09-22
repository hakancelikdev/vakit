/**
 * Italian legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Questa pagina è una traduzione fornita per comodità; in caso di differenze rispetto alla versione inglese, prevale la versione inglese.",

  privacy: {
    meta: {
      title: "Vakit — Informativa sulla privacy",
      description: "L'informativa sulla privacy di Vakit. Nessun account richiesto, nessuna coordinata GPS raccolta; i dati di khatm e i segnalibri si sincronizzano solo tramite il tuo Apple iCloud.",
    },
    title: "Informativa sulla <em>privacy</em>",
    desc: "Ultimo aggiornamento: 10 settembre 2026 — Versione 1.7.4\n\nVakit rispetta la tua privacy. Non serve alcun account e non raccogliamo informazioni che ti identificano personalmente (nome, e-mail, telefono, foto, contatti). Orari di preghiera, direzione della Qibla e promemoria sono calcolati interamente sul tuo dispositivo. I tuoi progressi di khatm, i segnalibri, gli obiettivi e le moschee preferite restano sul dispositivo e si sincronizzano solo all'interno del tuo account Apple iCloud: non vengono mai inviati ai nostri server. La tua lista di dhikr fa eccezione: viene inviata ai nostri server insieme alle statistiche d'uso, così possiamo migliorare l'app (vedi la sezione 1). Tutto ciò che viene inviato ai nostri server è collegato a un codice utente permanente privo di dati identificativi.",
    sections: [
      {
        t: "1. Dati che raccogliamo",
        b: "Dati che NON raccogliamo:\n• Nome, e-mail, telefono, foto, microfono, fotocamera, contatti\n• Coordinate GPS (latitudine/longitudine) – mai inviate ai nostri server\n• Credenziali di un account (Vakit non ha un sistema di account)\n\nDati salvati sul tuo dispositivo e sincronizzati nel tuo spazio iCloud privato:\n• Dati di dhikr, progressi del khatm, obiettivi di adorazione\n• Segnalibri del Corano e degli hadith, cronologia di lettura\n• Contatori delle sure completate, stato delle sezioni di hadith\n• I tuoi registri delle preghiere mancate e dei digiuni da recuperare\n• I tuoi contrassegni dei giorni di esenzione\n• Moschee preferite\n• Preferenze dell'app (lingua, metodo di calcolo, impostazioni delle notifiche, tema)\n\nDati inviati ai nostri server — collegati a un codice utente permanente privo di dati identificativi (uno pseudonimo: non sono dati anonimi):\n• Posizione regionale (paese, città, quartiere) – NON le coordinate GPS\n• Modello del dispositivo, versione di iOS/macOS, versione dell'app, versione di watchOS\n• Preferenze dell'app (lingua, metodo di calcolo, tema, scuola giuridica, tipo di calendario, il genere scelto per la guida alla preghiera, le preghiere per cui vuoi ricevere notifiche e le tue preferenze di lettura del Corano e degli hadith — dimensione del testo, traduzione, recitatore, grafia). La tua posizione di lettura e la cronologia NON sono incluse.\n• Statistiche sull'uso delle funzioni (schermate visualizzate, uso delle funzioni). Mostrano che una sezione è stata usata — per esempio che è stato contrassegnato un giorno di esenzione o registrata una preghiera mancata. Il registro stesso (l'elenco dei tuoi dati) non viene inviato. Viene inviato il fatto che l'azione è avvenuta, insieme ad alcuni numeri — per esempio la preghiera che hai segnato, i tuoi conteggi giornalieri di adorazione, quanto ti resta da recuperare (qada), il numero di un versetto o di un hadith che hai salvato; come ogni statistica, riporta data e ora.\n• Il testo delle ricerche che fai nell'app (ricerca nel Corano, negli hadith, nei dhikr, nei nomi di Allah, nelle moschee e nelle impostazioni) – raccolto per capire con quali parole non trovi ciò che cerchi e correggere la ricerca; vengono conservati al massimo 80 caratteri.\n• La tua lista di dhikr – nome, tipo, categoria e contatori dei dhikr, compresi il testo arabo, la descrizione e la fonte che inserisci per i dhikr che aggiungi tu. Viene raccolta per capire quali dhikr sono usati e con quale frequenza, così da migliorare la sezione dhikr.\n• Report di crash (tramite Firebase Crashlytics, senza dati personali)\n\nPoiché questo codice utente si sincronizza tramite il portachiavi iCloud, i dispositivi con lo stesso ID Apple contano come un solo utente e il codice resta anche se elimini e reinstalli l'app. Il codice non contiene dati identificativi; i tuoi dati non vengono mai venduti né usati per la pubblicità.",
      },
      {
        t: "2. Come usiamo i tuoi dati",
        b: "• Calcolo degli orari di preghiera – La posizione è elaborata localmente sul tuo dispositivo e il calcolo avviene offline con la libreria Adhan.\n• Direzione della Qibla – Posizione e direzione della bussola sono combinate sul dispositivo.\n• Nome del luogo – Per mostrare il nome del luogo in cui ti trovi, le tue coordinate vengono inviate al servizio di nomi di luogo di Apple; non ai server di Vakit.\n• Promemoria di adorazione – Le notifiche locali sono programmate sul dispositivo da iOS e macOS.\n• Annunci – Gli annunci di giorni benedetti e nuove versioni sono diffusi tramite Firebase Cloud Messaging; non c'è alcun invio mirato alla singola persona.\n• Sermone del venerdì – Il sermone della settimana viene scaricato dalla pagina pubblica del Diyanet; la richiesta non contiene dati identificativi.\n• Moschee vicine – La tua posizione viene inviata ad Apple MapKit (ricerca delle moschee, distanza, indicazioni); non ai server di Vakit.\n• Dati dell'utente (dhikr, khatm, segnalibri) – Salvati localmente con Core Data e sincronizzati nel tuo spazio privato di Apple iCloud. Di questi, solo la lista di dhikr viene inviata anche al server di Vakit (vedi la sezione 1).\n• Sviluppo e miglioramento – Le statistiche d'uso (senza coordinate GPS) servono a monitorare le prestazioni e individuare errori.",
      },
      {
        t: "3. Sincronizzazione iCloud (CloudKit)",
        b: "Vakit sincronizza i tuoi dati di adorazione (dhikr, khatm, segnalibri, obiettivi, moschee preferite) tra i tuoi dispositivi tramite CloudKit di Apple. Questi dati:\n• Risiedono solo nel database privato del tuo ID Apple.\n• Sono cifrati sull'infrastruttura di Apple; né noi, né il personale Apple, né terzi possono accedervi.\n• Si sincronizzano automaticamente tra iPhone, iPad, Mac e Apple Watch.\n• Restano solo sul tuo dispositivo se disattivi iCloud.\n• Vengono rimossi da tutti i tuoi dispositivi quando usi «Elimina l'account» o rimuovi i dati di Vakit da iCloud.\n\nDettagli: apple.com/legal/privacy",
      },
      {
        t: "4. Dati di Apple Watch e Mac",
        b: "Vakit include un'app companion per watchOS 9+. Sull'orologio:\n• Il permesso di posizione si concede separatamente sull'orologio; se Vakit è installata sull'iPhone, la posizione arriva tramite WatchConnectivity, altrimenti si usa il GPS dell'orologio.\n• Il sensore della bussola è elaborato sul dispositivo per la Qibla; non viene mai inviato a un server.\n• Non leggiamo dati di salute (HealthKit), attività o frequenza cardiaca.\n• Le notifiche sono replicate dall'iPhone tramite la duplicazione delle notifiche di iOS; se l'orologio funziona da solo, programma le proprie notifiche locali.\n\nSul Mac (macOS 13+):\n• L'app per Mac è la stessa dell'iPhone; i tuoi dati restano salvati sul dispositivo e sincronizzati nel tuo spazio iCloud privato.\n• I Mac non hanno una bussola hardware, quindi non c'è una bussola Qibla in tempo reale; direzione e distanza vengono calcolate dalla tua posizione e mostrate come testo.\n• Sul Mac la posizione proviene dai servizi di localizzazione basati sul Wi-Fi anziché dal GPS e, anche in questo caso, non viene mai inviata ai nostri server.\n• Il permesso e le impostazioni delle notifiche sono separati per ogni dispositivo; modificarli sul Mac non influisce sul tuo iPhone.",
      },
      {
        t: "5. Servizi di terze parti",
        b: "Vakit usa i seguenti servizi per scopi limitati. Nessuno è collegato alla tua identità personale:\n\n• Apple iCloud / CloudKit – Sincronizzazione dei dati dell'utente (nel tuo spazio iCloud privato).\n• Apple MapKit – Moschee vicine, mappa e indicazioni (la posizione viene inviata ad Apple).\n• Firebase Crashlytics (Google) – Report di crash senza dati identificativi (stack trace, modello del dispositivo, versione di iOS/macOS).\n• Firebase Remote Config (Google) – Interruttori delle funzioni e rilascio graduale (non legge dati dal dispositivo).\n• Apple StoreKit 2 – Donazioni facoltative (acquisti in-app). I dati di pagamento sono gestiti da Apple; Vakit non vede mai i dati della carta.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Annunci di giorni benedetti e nuove versioni. Gli annunci sono diffusi per argomento; non c'è alcun invio mirato alla singola persona.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Testo e audio del sermone del venerdì.\n• Server di Vakit (Germania, Francoforte) – Statistiche d'uso e la tua lista di dhikr, collegate a un codice utente privo di dati identificativi. I tuoi dati di khatm, segnalibri, obiettivi e lettura non vengono mai inviati lì.\n\nNota: Firebase Analytics NON viene usato; l'identificatore pubblicitario (IDFA) non viene raccolto.\n\nInformativa sulla privacy di Google: policies.google.com/privacy",
      },
      {
        t: "6. Pubblicità",
        b: "Vakit non mostra pubblicità. L'unica fonte di reddito dell'app sono le donazioni volontarie degli utenti.",
      },
      {
        t: "7. Donazioni (acquisti in-app)",
        b: "Vakit è gratuita. Per sostenere lo sviluppatore puoi fare donazioni facoltative, in fasce da 10 ₺ a 10.000 ₺, dalla schermata «Sostieni Vakit». Queste operazioni:\n• Sono gestite da Apple StoreKit 2; i dati di pagamento (carta, IBAN, Apple Pay) vengono inviati solo ad Apple.\n• Vakit non vede né conserva mai il tuo metodo di pagamento o i tuoi dati finanziari.\n• I rimborsi possono essere richiesti solo tramite Apple (reportaproblem.apple.com).",
      },
      {
        t: "8. Conservazione dei dati",
        b: "• Dati locali del dispositivo – Conservati finché non elimini l'app.\n• Dati iCloud – Conservati finché non rimuovi Vakit da iCloud o non disattivi il tuo ID Apple.\n• Statistiche d'uso sul server – Conservate per 180 giorni (circa 6 mesi), poi eliminate automaticamente. I testi delle ricerche seguono la stessa scadenza.\n• Report di crash (Crashlytics) – Conservati per 90 giorni, poi eliminati.\n• Log del server – Ruotati entro 30 giorni.",
      },
      {
        t: "9. I tuoi diritti (KVKK / GDPR)",
        b: "In base alla legge turca KVKK e al GDPR dell'Unione europea hai il diritto di:\n• Sapere quali dati vengono raccolti su di te\n• Opporti al trattamento dei dati (revoca i permessi di posizione, notifiche o movimento in Impostazioni → Vakit su iOS, o in Impostazioni di Sistema → Vakit sul Mac)\n• Chiedere la cancellazione dei tuoi dati: Impostazioni → Elimina l'account rimuove tutto ciò che si trova sul dispositivo e in iCloud. Per far cancellare le statistiche d'uso dal nostro server, scrivi a hakancelikdev@gmail.com; la richiesta viene evasa entro 30 giorni al massimo.\n• Ottenere la portabilità dei dati\n• Presentare reclamo all'autorità KVKK\n\nInvia le tue richieste a hakancelikdev@gmail.com; rispondiamo entro 30 giorni al massimo.",
      },
      {
        t: "10. Privacy dei minori",
        b: "Vakit è offerta sull'App Store con classificazione 4+, ma non raccogliamo consapevolmente dati personali da utenti di età inferiore ai 13 anni. Se ritieni che un minore di 13 anni abbia fornito dati, scrivi a hakancelikdev@gmail.com ed elimineremo immediatamente i dati in questione.",
      },
      {
        t: "11. Sicurezza",
        b: "Tutti i dati locali restano sul tuo dispositivo, protetti dalla sandbox di iOS/macOS e dalla cifratura del dispositivo. I dati iCloud sono cifrati sull'infrastruttura di Apple. I dati inviati al nostro server viaggiano su HTTPS/TLS e sono conservati in un database cifrato; non contengono dati identificativi. Vakit rileva inoltre jailbreak, debugger e iniezione di codice per offrire una protezione aggiuntiva durante le operazioni sensibili.",
      },
      {
        t: "12. Modifiche all'informativa",
        b: "Questa informativa può essere aggiornata man mano che l'app evolve. In caso di modifiche rilevanti, la data di «Ultimo aggiornamento» di questa pagina viene rinnovata e nell'app viene mostrato un avviso. Ti consigliamo di rileggere periodicamente questa informativa.",
      },
      {
        t: "13. Contatti",
        b: "Per domande, richieste o osservazioni sulla privacy: hakancelikdev@gmail.com\n\nTitolare del trattamento: Hakan Çelik (Turchia)",
      },
    ],
  },

  terms: {
    meta: {
      title: "Vakit — Condizioni d'uso",
      description: "Le condizioni d'uso di Vakit. Uso gratuito, con donazioni facoltative (acquisti in-app); tutte le funzioni principali sono gratuite.",
    },
    title: "Condizioni d'<em>uso</em>",
    desc: "Ultimo aggiornamento: 10 settembre 2026 — Versione 1.7.4\n\nScaricando, installando o usando la nostra app, accetti di essere vincolato da queste Condizioni. Leggile con attenzione.",
    sections: [
      {
        t: "1. Accettazione delle Condizioni",
        b: "Accedendo a Vakit e usandola, accetti di essere vincolato dai termini e dalle condizioni di questo accordo. Se non sei d'accordo, non usare questo servizio.",
      },
      {
        t: "2. Descrizione del servizio",
        b: "Vakit è un'app gratuita che offre strumenti per l'adorazione come orari di preghiera, direzione della Qibla, Corano, hadith, un contatore di dhikr, guide alla preghiera e all'abluzione, monitoraggio del khatm e delle adorazioni, il sermone del venerdì, moschee vicine e un calendario dei giorni religiosi. Funziona su iOS 16.4+ e macOS 13+ e include un'app companion per Apple Watch con watchOS 9+.",
      },
      {
        t: "3. Pubblicità",
        b: "Vakit non mostra pubblicità. L'unica fonte di reddito dell'app sono le donazioni volontarie degli utenti.",
      },
      {
        t: "4. Pubblicità",
        b: "Vakit non mostra pubblicità. L'unica fonte di reddito dell'app sono le donazioni volontarie degli utenti.",
      },
      {
        t: "5. App companion per Apple Watch",
        b: "Vakit include un'app companion per watchOS 9+ con orari di preghiera, bussola Qibla e complicazioni. L'uso dell'app per Watch è soggetto a queste Condizioni. A causa dei limiti hardware dell'Apple Watch (precisione del GPS, deviazione della bussola, batteria), i risultati sull'orologio possono differire da quelli dell'iPhone.",
      },
      {
        t: "6. Responsabilità dell'utente",
        b: "Sei responsabile di:\n• Scegliere una posizione e un metodo di calcolo corretti\n• Usare l'app nel rispetto delle leggi applicabili e delle regole dell'App Store\n• Non tentare di decompilare (reverse engineering), craccare o usare impropriamente l'app\n• Mantenere al sicuro il tuo dispositivo e il tuo account iCloud (i tuoi dati si sincronizzano tra i dispositivi tramite Apple iCloud)",
      },
      {
        t: "7. Servizi di terze parti",
        b: "Vakit usa i seguenti servizi di terze parti ed è soggetta alle loro condizioni:\n• Apple iCloud / CloudKit (sincronizzazione dei dati dell'utente)\n• Apple MapKit (moschee vicine, mappe)\n• Firebase Crashlytics, Remote Config e Cloud Messaging (Google)\n• Apple StoreKit 2 (donazioni)\n• Diyanet (testo e audio del sermone del venerdì)\n• Libreria Adhan (calcolo degli orari di preghiera, open source)\n• SwiftAA (calcolo astronomico, open source)\n\nLe condizioni d'uso e le informative sulla privacy di questi servizi appartengono ai rispettivi fornitori.",
      },
      {
        t: "8. Proprietà intellettuale",
        b: "Il codice e il design dell'app appartengono a Hakan Çelik; l'app è open source con licenza MIT.\n\nVakit usa con rispetto contenuti e librerie di terze parti:\n• Testo arabo del Corano: pubblico dominio\n• Traduzione turca: Diyanet İşleri Başkanlığı Meali\n• Raccolte di hadith: tratte da compilazioni di pubblico dominio\n• Audio delle recitazioni del Corano: permessi e licenze dei recitatori elencati in AUDIO-LICENSES.md\n• Adhan, SwiftAA, GRDB.swift: le rispettive licenze open source\n\nL'app usa l'audio dell'adhan e delle recitazioni esclusivamente a scopo di culto religioso.",
      },
      {
        t: "9. Limitazione di responsabilità",
        b: "L'app è fornita «così com'è». I calcoli degli orari di preghiera e della Qibla mirano alla precisione, tuttavia:\n• Possono verificarsi scostamenti dovuti alla precisione della posizione, al segnale GPS, alla calibrazione della bussola e al metodo di calcolo scelto.\n• Per decisioni religiose importanti, si consiglia di verificare con le autorità religiose locali.\n• I sensori dell'Apple Watch (bussola magnetica, GPS) possono aggiungere ulteriori scostamenti.\n• Possono verificarsi perdite di dati a causa di problemi di sincronizzazione iCloud, interruzioni di rete o smarrimento del dispositivo; fai un backup dei dati importanti.\n\nLo sviluppatore non è responsabile di danni diretti o indiretti derivanti dall'uso dell'app.",
      },
      {
        t: "10. Account ed eliminazione dei dati",
        b: "Vakit non richiede alcun account. Eliminando l'app si rimuovono tutti i dati locali. Per eliminare i dati sincronizzati tramite iCloud: Impostazioni > Elimina l'account, oppure su iOS Impostazioni > ID Apple > iCloud > Vakit > Elimina dati (sul Mac Impostazioni di Sistema > Account Apple > iCloud). Se vuoi che le statistiche d'uso conservate sul nostro server vengano cancellate, scrivi a hakancelikdev@gmail.com; la richiesta viene evasa entro 30 giorni al massimo.",
      },
      {
        t: "11. Modifiche alle Condizioni",
        b: "Queste Condizioni possono essere aggiornate man mano che l'app evolve e per tenere conto degli obblighi di legge. In caso di modifiche rilevanti, la data di «Ultimo aggiornamento» viene rinnovata e nell'app viene mostrato un avviso. Continuare a usare l'app equivale ad accettare le Condizioni aggiornate.",
      },
      {
        t: "12. Legge applicabile e foro competente",
        b: "Queste Condizioni sono regolate dalla legge della Repubblica di Turchia. Le controversie saranno risolte dai tribunali turchi; per i diritti dei consumatori sono competenti i tribunali locali in materia di consumo. Se risiedi nell'Unione europea, restano salvi i tuoi diritti di consumatore previsti localmente.",
      },
      {
        t: "13. Contatti",
        b: "Per domande su queste Condizioni: hakancelikdev@gmail.com\n\nSviluppatore: Hakan Çelik (Turchia)",
      },
    ],
  },

};
