/**
 * Malay legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Halaman ini ialah terjemahan yang disediakan untuk kemudahan; jika terdapat perbezaan dengan versi bahasa Inggeris, versi bahasa Inggeris yang terpakai.",
  privacy: {
    meta: {
      title: "Vakit — Dasar Privasi",
      description:
        "Dasar privasi Vakit. Tiada akaun diperlukan, tiada koordinat GPS dikumpulkan; rekod khatam dan penanda hanya disegerakkan melalui Apple iCloud anda sendiri.",
    },
    title: "Dasar <em>Privasi</em>",
    desc: "Kemas kini terakhir: 10 September 2026 — Versi 1.7.4\n\nVakit menghormati privasi anda. Tiada akaun diperlukan dan kami tidak mengumpul maklumat pengenalan peribadi (nama, e-mel, telefon, gambar, kenalan). Waktu solat, arah kiblat dan peringatan dikira sepenuhnya pada peranti anda. Kemajuan khatam, penanda, sasaran dan masjid kegemaran anda kekal pada peranti dan hanya disegerakkan dalam akaun Apple iCloud anda sendiri — ia tidak pernah dihantar ke pelayan kami. Senarai zikir anda ialah pengecualian: ia dihantar ke pelayan kami bersama statistik penggunaan supaya kami dapat menambah baik apl (lihat bahagian 1). Semua yang dihantar ke pelayan kami terpaut pada kod pengguna kekal yang tidak mengandungi maklumat pengenalan.",
    sections: [
      {
        t: "1. Data yang kami kumpulkan",
        b: "Data yang TIDAK kami kumpulkan:\n• Nama, e-mel, telefon, gambar, mikrofon, kamera, kenalan\n• Koordinat GPS (latitud/longitud) – tidak pernah dihantar ke pelayan kami\n• Butiran akaun (Vakit tiada sistem akaun sendiri)\n\nData yang disimpan pada peranti anda dan disegerakkan dalam ruang iCloud peribadi anda:\n• Rekod zikir, kemajuan khatam, sasaran ibadah\n• Penanda Al-Quran dan hadis, sejarah bacaan\n• Pembilang surah yang selesai dibaca, status bahagian hadis\n• Catatan solat tertinggal dan puasa yang diqada anda\n• Tanda hari uzur anda\n• Masjid kegemaran\n• Pilihan apl (bahasa, kaedah pengiraan, tetapan pemberitahuan, tema)\n\nData yang dihantar ke pelayan kami — terpaut pada kod pengguna kekal yang tidak mengandungi maklumat pengenalan (nama samaran, bukan tanpa nama):\n• Lokasi serantau (negara, bandar, daerah) – BUKAN koordinat GPS\n• Model peranti, versi iOS/macOS, versi apl, versi watchOS\n• Pilihan apl (bahasa, kaedah pengiraan, tema, mazhab, jenis kalendar, jantina yang anda pilih untuk panduan solat, waktu solat yang anda mahu terima pemberitahuan, serta pilihan bacaan Al-Quran dan hadis anda — saiz fon, terjemahan, qari, tulisan mushaf). Kedudukan dan sejarah bacaan anda TIDAK termasuk.\n• Statistik penggunaan ciri (paparan skrin, penggunaan ciri). Statistik ini menunjukkan bahawa sesuatu bahagian telah digunakan — contohnya bahawa hari uzur ditanda atau catatan solat tertinggal dibuat. Catatan itu sendiri (senarai rekod anda) tidak dihantar. Yang dihantar ialah fakta bahawa tindakan itu berlaku beserta beberapa nombor — contohnya solat yang anda tanda, bilangan ibadah harian anda, baki solat yang perlu anda qada, nombor ayat atau hadis yang anda simpan; seperti setiap statistik, ia membawa cap masa.\n• Teks carian yang anda buat dalam apl (carian Al-Quran, hadis, zikir, Asmaul Husna, masjid dan tetapan) – dikumpulkan supaya kami dapat melihat perkataan mana yang gagal menemui apa yang anda cari dan membaiki carian; paling banyak 80 aksara disimpan.\n• Senarai zikir anda – nama, jenis, kategori dan pembilang zikir; termasuk teks Arab, keterangan dan sumber yang anda masukkan bagi zikir yang anda tambah sendiri. Ia dikumpulkan untuk melihat zikir mana yang digunakan dan berapa kerap, supaya bahagian zikir dapat ditambah baik.\n• Laporan ranap (melalui Firebase Crashlytics, tidak mengandungi data peribadi)\n\nOleh sebab kod pengguna ini disegerakkan melalui Rantai Kunci iCloud, peranti dengan Apple ID yang sama dikira sebagai satu pengguna dan kod itu kekal walaupun apl dipadam dan dipasang semula. Kod ini tidak mengandungi data identiti; data anda tidak pernah dijual atau digunakan untuk pengiklanan.",
      },
      {
        t: "2. Cara kami menggunakan data anda",
        b: "• Pengiraan waktu solat – Lokasi diproses secara setempat pada peranti anda dan dikira di luar talian menggunakan pustaka Adhan.\n• Arah kiblat – Lokasi dan arah kompas digabungkan pada peranti.\n• Nama tempat – Untuk memaparkan nama tempat anda berada, koordinat anda dihantar ke perkhidmatan nama tempat Apple; bukan ke pelayan Vakit.\n• Peringatan ibadah – Pemberitahuan setempat dijadualkan pada peranti oleh iOS dan macOS.\n• Pengumuman – Pengumuman hari kebesaran dan versi baharu disiarkan melalui Firebase Cloud Messaging; tiada penyasaran setiap orang.\n• Khutbah Jumaat – Khutbah minggu ini dimuat turun daripada halaman awam Diyanet; permintaannya tidak membawa maklumat pengenalan.\n• Masjid berdekatan – Lokasi anda dihantar ke Apple MapKit (carian masjid, jarak, laluan); bukan ke pelayan Vakit.\n• Data pengguna (zikir, khatam, penanda) – Disimpan secara setempat dengan Core Data dan disegerakkan dalam ruang Apple iCloud peribadi anda. Daripada semua ini, hanya senarai zikir yang turut dihantar ke pelayan Vakit (lihat bahagian 1).\n• Pembangunan dan penambahbaikan – Statistik penggunaan (tanpa koordinat GPS) digunakan untuk memantau prestasi dan mengesan pepijat.",
      },
      {
        t: "3. Penyegerakan iCloud (CloudKit)",
        b: "Vakit menyegerakkan catatan ibadah anda (zikir, khatam, penanda, sasaran, masjid kegemaran) antara peranti anda melalui CloudKit Apple. Data ini:\n• Hanya berada dalam pangkalan data peribadi (private database) Apple ID anda sendiri.\n• Disulitkan pada infrastruktur Apple; kami, kakitangan Apple mahupun pihak ketiga tidak dapat mengaksesnya.\n• Disegerakkan secara automatik antara iPhone, iPad, Mac dan Apple Watch.\n• Kekal pada peranti anda sahaja jika anda mematikan iCloud.\n• Dibuang daripada semua peranti anda apabila anda menggunakan “Padam akaun” atau membuang data Vakit daripada iCloud.\n\nButiran: apple.com/legal/privacy",
      },
      {
        t: "4. Data Apple Watch dan Mac",
        b: "Vakit menyertakan apl pendamping untuk watchOS 9+. Pada Apple Watch:\n• Kebenaran lokasi diberikan secara berasingan pada jam; jika Vakit dipasang pada iPhone, lokasi diterima daripada iPhone melalui WatchConnectivity, jika tidak GPS jam yang digunakan.\n• Penderia kompas diproses pada peranti untuk kiblat; ia tidak pernah dihantar ke pelayan.\n• Kami tidak membaca data Kesihatan (HealthKit), aktiviti atau kadar denyutan jantung.\n• Pemberitahuan dicerminkan daripada iPhone melalui pencerminan pemberitahuan iOS; jika jam berjalan sendirian, ia menjadualkan pemberitahuan setempatnya sendiri.\n\nPada Mac (macOS 13+):\n• Apl Mac ialah apl yang sama seperti pada iPhone; data anda tetap disimpan pada peranti dan disegerakkan dalam ruang iCloud peribadi anda.\n• Mac tiada perkakasan kompas, jadi tiada kompas kiblat secara langsung; arah dan jarak dikira daripada lokasi anda dan dipaparkan sebagai teks.\n• Lokasi pada Mac datang daripada perkhidmatan lokasi berasaskan Wi-Fi, bukan GPS, dan juga tidak pernah dihantar ke pelayan kami.\n• Kebenaran dan tetapan pemberitahuan adalah berasingan bagi setiap peranti; perubahan pada Mac tidak menjejaskan iPhone anda.",
      },
      {
        t: "5. Perkhidmatan pihak ketiga",
        b: "Vakit menggunakan perkhidmatan berikut untuk tujuan terhad. Tiada satu pun terpaut pada identiti peribadi anda:\n\n• Apple iCloud / CloudKit – Penyegerakan data pengguna (dalam ruang iCloud peribadi anda).\n• Apple MapKit – Masjid berdekatan, peta dan laluan (lokasi dihantar ke Apple).\n• Firebase Crashlytics (Google) – Laporan ranap tanpa data identiti (stack trace, model peranti, versi iOS/macOS).\n• Firebase Remote Config (Google) – Penanda ciri dan pelancaran berperingkat (tidak membaca data daripada peranti).\n• Apple StoreKit 2 – Derma pilihan (belian dalam apl). Butiran pembayaran diproses oleh Apple; Vakit tidak pernah melihat data kad.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Pengumuman hari kebesaran dan versi baharu. Pengumuman disiarkan mengikut topik; tiada penyasaran setiap orang.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Teks dan audio khutbah Jumaat.\n• Pelayan Vakit (Jerman, Frankfurt) – Statistik penggunaan dan senarai zikir anda, terpaut pada kod pengguna yang tidak mengandungi maklumat pengenalan. Rekod khatam, penanda, sasaran dan bacaan anda tidak pernah dihantar ke sana.\n\nNota: Firebase Analytics TIDAK digunakan; pengenal pengiklanan (IDFA) tidak dikumpulkan.\n\nDasar privasi Google: policies.google.com/privacy",
      },
      {
        t: "6. Iklan",
        b: "Vakit tidak memaparkan iklan. Satu-satunya sumber pendapatan aplikasi ialah dermaan sukarela pengguna.",
      },
      {
        t: "7. Derma (belian dalam apl)",
        b: "Vakit percuma. Untuk menyokong pembangun, anda boleh membuat derma pilihan dalam peringkat dari ₺10 hingga ₺10,000 pada skrin “Pastikan Vakit terus hidup”. Transaksi ini:\n• Diproses oleh Apple StoreKit 2; butiran pembayaran (kad, IBAN, Apple Pay) hanya dihantar ke Apple.\n• Vakit tidak pernah melihat atau menyimpan kaedah pembayaran mahupun butiran kewangan anda.\n• Bayaran balik hanya boleh dipohon melalui Apple (reportaproblem.apple.com).",
      },
      {
        t: "8. Tempoh penyimpanan data",
        b: "• Data setempat pada peranti – Disimpan sehingga anda memadam apl.\n• Data iCloud – Disimpan sehingga anda membuang data Vakit daripada iCloud atau menyahaktifkan Apple ID anda.\n• Statistik penggunaan pada pelayan – Disimpan selama 180 hari (kira-kira 6 bulan), kemudian dipadam secara automatik. Teks pertanyaan carian juga tertakluk pada tempoh yang sama.\n• Laporan ranap (Crashlytics) – Disimpan selama 90 hari, kemudian dipadam.\n• Log pelayan – Diputar dalam tempoh 30 hari.",
      },
      {
        t: "9. Hak anda (KVKK / GDPR)",
        b: "Di bawah KVKK Turki dan GDPR EU, anda berhak untuk:\n• Mengetahui data yang dikumpulkan tentang anda\n• Membantah pemprosesan data (tarik balik kebenaran Lokasi, Pemberitahuan atau Gerakan dalam Tetapan → Vakit pada iOS, atau Tetapan Sistem → Vakit pada Mac)\n• Meminta data anda dipadam: Tetapan → Padam akaun membuang semua data pada peranti anda dan dalam iCloud. Untuk memadam statistik penggunaan pada pelayan kami, tulis ke hakancelikdev@gmail.com; permintaan anda dilaksanakan dalam tempoh 30 hari selewat-lewatnya.\n• Kemudahalihan data\n• Membuat aduan kepada pihak berkuasa KVKK\n\nHantar permintaan ke hakancelikdev@gmail.com; kami menjawab dalam tempoh 30 hari selewat-lewatnya.",
      },
      {
        t: "10. Privasi kanak-kanak",
        b: "Vakit ditawarkan di App Store dengan penarafan umur 4+, tetapi kami tidak mengumpul data peribadi daripada pengguna di bawah 13 tahun secara sedar. Jika anda percaya bahawa seorang kanak-kanak di bawah 13 tahun telah memberikan data, sila tulis ke hakancelikdev@gmail.com dan kami akan memadam data berkenaan dengan segera.",
      },
      {
        t: "11. Keselamatan",
        b: "Semua data setempat kekal pada peranti anda, dilindungi oleh kotak pasir iOS/macOS dan penyulitan peranti. Data iCloud disulitkan pada infrastruktur Apple. Data yang dihantar ke pelayan kami dipindahkan melalui HTTPS/TLS dan disimpan dalam pangkalan data yang disulitkan; ia tidak mengandungi maklumat identiti. Vakit turut melakukan pengesanan jailbreak, penyahpepijat dan suntikan sebagai perlindungan tambahan semasa operasi sensitif.",
      },
      {
        t: "12. Perubahan dasar",
        b: "Dasar ini boleh dikemas kini seiring perkembangan apl. Bagi perubahan penting, tarikh “Kemas kini terakhir” pada halaman ini diperbaharui dan notis dipaparkan dalam apl. Kami mengesyorkan anda menyemak dasar ini dari semasa ke semasa.",
      },
      {
        t: "13. Hubungi",
        b: "Untuk soalan, permintaan atau maklum balas tentang privasi: hakancelikdev@gmail.com\n\nPengawal Data: Hakan Çelik (Turki)",
      },
    ],
  },
  terms: {
    meta: {
      title: "Vakit — Terma Penggunaan",
      description:
        "Terma penggunaan Vakit. Percuma digunakan, dengan derma pilihan (IAP); setiap ciri teras adalah percuma.",
    },
    title: "Terma <em>Penggunaan</em>",
    desc: "Kemas kini terakhir: 10 September 2026 — Versi 1.7.4\n\nDengan memuat turun, memasang atau menggunakan Apl kami, anda bersetuju untuk terikat dengan Terma ini. Sila baca Terma ini dengan teliti.",
    sections: [
      {
        t: "1. Penerimaan Terma",
        b: "Dengan mengakses dan menggunakan Vakit, anda bersetuju untuk terikat dengan terma dan syarat perjanjian ini. Jika anda tidak bersetuju, sila jangan gunakan perkhidmatan ini.",
      },
      {
        t: "2. Perihal perkhidmatan",
        b: "Vakit ialah apl percuma yang menyediakan alat ibadah seperti waktu solat, arah kiblat, Al-Quran, hadis, pengira zikir, panduan solat/wuduk, catatan khatam dan ibadah, khutbah Jumaat, masjid berdekatan dan kalendar hari keagamaan. Apl ini berjalan pada iOS 16.4+ dan macOS 13+, serta menyertakan apl pendamping Apple Watch untuk watchOS 9+.",
      },
      {
        t: "3. Penggunaan percuma & derma pilihan",
        b: "Semua ciri teras Vakit adalah percuma. Apl ini tidak memaparkan iklan (kecuali iklan video berganjaran dalam “Mod Sedekah” yang pilihan, yang dimulakan sendiri oleh pengguna).\n\nPengguna yang ingin menyokong pembangun boleh membuat derma pilihan dalam peringkat dari ₺10 hingga ₺10,000 pada skrin “Pastikan Vakit terus hidup”. Derma ini:\n• Diproses melalui Apple In-App Purchase (StoreKit 2).\n• Merupakan produk boleh guna habis (consumable); derma tidak membuka ciri tambahan atau langganan.\n• Permintaan bayaran balik hanya boleh dibuat melalui Apple (reportaproblem.apple.com).\n• Terma pembayaran Apple dan peraturan App Store terpakai.",
      },
      {
        t: "4. Iklan",
        b: "Vakit tidak memaparkan iklan. Satu-satunya sumber pendapatan aplikasi ialah dermaan sukarela pengguna.",
      },
      {
        t: "5. Apl pendamping Apple Watch",
        b: "Vakit menyertakan apl pendamping untuk watchOS 9+ dengan waktu solat, kompas kiblat dan komplikasi. Penggunaan apl Watch tertakluk pada Terma ini. Disebabkan had perkakasan Apple Watch (ketepatan GPS, sisihan kompas, bateri), hasil pada jam boleh berbeza daripada iPhone.",
      },
      {
        t: "6. Tanggungjawab pengguna",
        b: "Anda bertanggungjawab untuk:\n• Memilih lokasi dan kaedah pengiraan yang tepat\n• Menggunakan apl mengikut undang-undang yang terpakai dan peraturan App Store\n• Tidak cuba merekayasa balik, memecah atau menyalahgunakan apl\n• Memastikan peranti dan akaun iCloud anda selamat (data anda disegerakkan antara peranti melalui Apple iCloud)",
      },
      {
        t: "7. Perkhidmatan pihak ketiga",
        b: "Vakit menggunakan perkhidmatan pihak ketiga berikut dan tertakluk pada terma masing-masing:\n• Apple iCloud / CloudKit (penyegerakan data pengguna)\n• Apple MapKit (masjid berdekatan, peta)\n• Firebase Crashlytics, Remote Config dan Cloud Messaging (Google)\n• Apple StoreKit 2 (derma)\n• Diyanet (teks dan audio khutbah Jumaat)\n• Pustaka Adhan (pengiraan waktu solat, sumber terbuka)\n• SwiftAA (pengiraan astronomi, sumber terbuka)\n\nTerma dan dasar privasi perkhidmatan ini adalah milik penyedia masing-masing.",
      },
      {
        t: "8. Harta intelek",
        b: "Kod dan reka bentuk apl ini dimiliki oleh Hakan Çelik; apl ini bersumber terbuka di bawah lesen MIT.\n\nVakit menggunakan kandungan dan pustaka pihak ketiga dengan penuh hormat:\n• Teks Arab Al-Quran: domain awam\n• Terjemahan Turki: Diyanet İşleri Başkanlığı Meali\n• Kumpulan hadis: dihimpun daripada kompilasi domain awam\n• Audio tilawah Al-Quran: kebenaran dan lesen para qari disenaraikan dalam AUDIO-LICENSES.md\n• Adhan, SwiftAA, GRDB.swift: lesen sumber terbuka masing-masing\n\nApl ini menggunakan audio azan dan tilawah semata-mata untuk tujuan ibadah.",
      },
      {
        t: "9. Had liabiliti",
        b: "Apl ini disediakan “sebagaimana adanya”. Pengiraan waktu solat dan kiblat diusahakan setepat mungkin, tetapi:\n• Perbezaan boleh berlaku disebabkan ketepatan lokasi, isyarat GPS, penentukuran kompas dan kaedah pengiraan yang dipilih.\n• Untuk keputusan ibadah yang penting, pengesahan daripada pihak berkuasa agama tempatan disyorkan.\n• Penderia Apple Watch (kompas magnet, GPS) boleh menambah perbezaan.\n• Data boleh hilang disebabkan masalah penyegerakan iCloud, gangguan rangkaian atau kehilangan peranti; sandarkan data penting anda.\n\nPembangun tidak bertanggungjawab atas kerugian langsung atau tidak langsung yang timbul daripada penggunaan apl ini.",
      },
      {
        t: "10. Pemadaman akaun & data",
        b: "Vakit tidak memerlukan akaun. Memadam apl akan membuang semua data setempat. Untuk membuang data yang disegerakkan melalui iCloud: Tetapan > Padam akaun, atau Tetapan > Apple ID > iCloud > Vakit > Padam Data pada iOS (Tetapan Sistem > Akaun Apple > iCloud pada Mac). Jika anda mahu statistik penggunaan yang disimpan pada pelayan kami dipadam, tulis ke hakancelikdev@gmail.com; permintaan anda dilaksanakan dalam tempoh 30 hari selewat-lewatnya.",
      },
      {
        t: "11. Perubahan Terma",
        b: "Terma ini boleh dikemas kini seiring perkembangan apl dan bagi mencerminkan keperluan undang-undang. Bagi perubahan penting, tarikh “Kemas kini terakhir” diperbaharui dan notis dipaparkan dalam apl. Penggunaan apl yang berterusan bermakna anda menerima Terma yang dikemas kini.",
      },
      {
        t: "12. Undang-undang yang mentadbir dan bidang kuasa",
        b: "Terma ini ditadbir oleh undang-undang Republik Turki. Pertikaian akan diselesaikan di mahkamah Turki; bagi hak pengguna, mahkamah pengguna tempatan mempunyai bidang kuasa. Jika anda bermastautin di Kesatuan Eropah, hak pengguna tempatan anda terpelihara.",
      },
      {
        t: "13. Hubungi",
        b: "Untuk soalan tentang Terma ini: hakancelikdev@gmail.com\n\nPembangun: Hakan Çelik (Turki)",
      },
    ],
  },
};
