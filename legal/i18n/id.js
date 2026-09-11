/**
 * Indonesian legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Halaman ini adalah terjemahan yang disediakan untuk memudahkan; jika berbeda dengan versi bahasa Inggris, yang berlaku adalah versi bahasa Inggris.",
  privacy: {
    meta: {
      title: "Vakit — Kebijakan Privasi",
      description:
        "Kebijakan privasi Vakit. Tanpa akun, tanpa pengumpulan koordinat GPS; catatan khatam dan penanda hanya tersinkron lewat Apple iCloud milikmu sendiri.",
    },
    title: "Kebijakan <em>Privasi</em>",
    desc: "Terakhir diperbarui: 10 September 2026 — Versi 1.7.4\n\nVakit menghormati privasimu. Kamu tidak perlu membuat akun, dan kami tidak mengumpulkan informasi identitas pribadi (nama, email, nomor telepon, foto, kontak). Jadwal salat, arah kiblat, dan pengingat dihitung sepenuhnya di perangkatmu. Perkembangan khatam, penanda, target, dan masjid favoritmu tetap di perangkat dan hanya tersinkron di dalam akun Apple iCloud milikmu sendiri — tidak pernah dikirim ke server kami. Daftar zikirmu adalah pengecualian: daftar ini dikirim ke server kami bersama statistik penggunaan agar kami bisa memperbaiki aplikasi (lihat bagian 1). Semua yang dikirim ke server kami terhubung ke kode pengguna tetap yang tidak memuat informasi identitas apa pun.",
    sections: [
      {
        t: "1. Data yang kami kumpulkan",
        b: "Data yang TIDAK kami kumpulkan:\n• Nama, email, nomor telepon, foto, mikrofon, kamera, kontak\n• Koordinat GPS (lintang/bujur) – tidak pernah dikirim ke server kami\n• Kredensial akun (Vakit tidak punya sistem akun)\n\nData yang disimpan di perangkatmu dan tersinkron di ruang iCloud pribadimu:\n• Catatan zikir, perkembangan khatam, target ibadah\n• Penanda Al-Qur'an dan hadis, riwayat bacaan\n• Penghitung surah yang selesai dibaca, status bagian hadis\n• Catatan salat tertinggal dan puasa yang dikada milikmu\n• Tanda hari uzurmu\n• Masjid favorit\n• Preferensi aplikasi (bahasa, metode perhitungan, pengaturan notifikasi, tema)\n\nData yang dikirim ke server kami — terhubung ke kode pengguna tetap yang tidak memuat informasi identitas (nama samaran, bukan anonim):\n• Lokasi regional (negara, kota, kecamatan) – BUKAN koordinat GPS\n• Model perangkat, versi iOS/macOS, versi aplikasi, versi watchOS\n• Preferensi aplikasi (bahasa, metode perhitungan, tema, mazhab, jenis kalender, jenis kelamin yang kamu pilih untuk panduan salat, waktu salat mana saja yang ingin kamu beri notifikasi, serta preferensi bacaan Al-Qur'an dan hadismu — ukuran huruf, terjemahan, qari, jenis tulisan mushaf). Posisi dan riwayat bacaanmu TIDAK termasuk.\n• Statistik penggunaan fitur (tampilan layar, penggunaan fitur). Statistik ini menunjukkan bahwa suatu bagian dipakai — misalnya bahwa hari uzur ditandai atau catatan salat tertinggal ditambahkan. Catatannya sendiri (daftar catatanmu) tidak dikirim. Yang dikirim adalah fakta bahwa tindakan itu terjadi beserta beberapa angka — misalnya salat yang kamu tandai, jumlah ibadah harianmu, sisa salat yang masih harus kamu kada, nomor ayat atau hadis yang kamu simpan; seperti setiap statistik, data ini memuat cap waktu.\n• Teks pencarian yang kamu lakukan di aplikasi (pencarian Al-Qur'an, hadis, zikir, Asmaul Husna, masjid, dan pengaturan) – dikumpulkan agar kami bisa melihat kata apa saja yang gagal menemukan yang kamu cari lalu memperbaiki pencarian; paling banyak 80 karakter yang disimpan.\n• Daftar zikirmu – nama, jenis, kategori, dan penghitung zikir; termasuk teks Arab, keterangan, dan sumber yang kamu isi untuk zikir yang kamu tambahkan sendiri. Data ini dikumpulkan untuk melihat zikir mana yang dipakai dan seberapa sering, agar bagian zikir bisa diperbaiki.\n• Laporan kerusakan (lewat Firebase Crashlytics, tidak memuat data pribadi)\n\nKarena kode pengguna ini tersinkron lewat Rantai Kunci iCloud, perangkat dengan Apple ID yang sama dihitung sebagai satu pengguna, dan kodenya tetap ada meski aplikasi dihapus lalu dipasang ulang. Kode ini tidak memuat data identitas; datamu tidak pernah dijual atau dipakai untuk iklan.",
      },
      {
        t: "2. Cara kami memakai datamu",
        b: "• Perhitungan jadwal salat – Lokasi diproses secara lokal di perangkatmu dan dihitung secara offline dengan pustaka Adhan.\n• Arah kiblat – Lokasi dan arah kompas digabungkan di perangkat.\n• Nama tempat – Untuk menampilkan nama tempatmu berada, koordinatmu dikirim ke layanan nama tempat milik Apple; tidak dikirim ke server Vakit.\n• Pengingat ibadah – Notifikasi lokal dijadwalkan di perangkat oleh iOS dan macOS.\n• Pengumuman – Pengumuman hari besar dan versi baru disiarkan lewat Firebase Cloud Messaging; tidak ada penargetan per orang.\n• Khotbah Jumat – Khotbah pekan ini diunduh dari halaman publik Diyanet; permintaannya tidak membawa informasi identitas.\n• Masjid terdekat – Lokasimu dikirim ke Apple MapKit (pencarian masjid, jarak, rute); tidak dikirim ke server Vakit.\n• Data pengguna (zikir, khatam, penanda) – Disimpan secara lokal dengan Core Data dan tersinkron di ruang Apple iCloud pribadimu. Dari semua itu, hanya daftar zikir yang juga dikirim ke server Vakit (lihat bagian 1).\n• Pengembangan dan perbaikan – Statistik penggunaan (tanpa koordinat GPS) dipakai untuk memantau performa dan menemukan bug.",
      },
      {
        t: "3. Sinkronisasi iCloud (CloudKit)",
        b: "Vakit menyinkronkan catatan ibadahmu (zikir, khatam, penanda, target, masjid favorit) antarperangkatmu lewat CloudKit milik Apple. Data ini:\n• Hanya berada di basis data pribadi (private database) Apple ID-mu sendiri.\n• Terenkripsi di infrastruktur Apple; kami, karyawan Apple, maupun pihak ketiga tidak bisa mengaksesnya.\n• Tersinkron otomatis antara iPhone, iPad, Mac, dan Apple Watch.\n• Hanya tersimpan di perangkatmu jika kamu menonaktifkan iCloud.\n• Dihapus dari semua perangkatmu saat kamu memakai “Hapus akun” atau menghapus data Vakit dari iCloud.\n\nDetail: apple.com/legal/privacy",
      },
      {
        t: "4. Data Apple Watch dan Mac",
        b: "Vakit menyertakan aplikasi pendamping untuk watchOS 9+. Di Apple Watch:\n• Izin lokasi diberikan tersendiri di jam; jika Vakit terpasang di iPhone, lokasi diterima dari iPhone lewat WatchConnectivity, jika tidak, GPS jam yang dipakai.\n• Sensor kompas diproses di perangkat untuk kiblat; tidak pernah dikirim ke server.\n• Kami tidak membaca data Kesehatan (HealthKit), aktivitas, atau detak jantung.\n• Notifikasi diteruskan dari iPhone lewat pencerminan notifikasi iOS; jika jam berjalan sendiri, ia menjadwalkan notifikasi lokalnya sendiri.\n\nDi Mac (macOS 13+):\n• Aplikasi Mac sama dengan aplikasi di iPhone; datamu tetap disimpan di perangkat dan tersinkron di ruang iCloud pribadimu.\n• Mac tidak punya perangkat keras kompas, jadi tidak ada kompas kiblat langsung; arah dan jarak dihitung dari lokasimu dan ditampilkan sebagai teks.\n• Lokasi di Mac berasal dari layanan lokasi berbasis Wi-Fi, bukan GPS, dan juga tidak pernah dikirim ke server kami.\n• Izin dan pengaturan notifikasi berlaku per perangkat; perubahan di Mac tidak memengaruhi iPhone-mu.",
      },
      {
        t: "5. Layanan pihak ketiga",
        b: "Vakit memakai layanan berikut untuk tujuan terbatas. Tidak satu pun terhubung ke identitas pribadimu:\n\n• Apple iCloud / CloudKit – Sinkronisasi data pengguna (di ruang iCloud pribadimu).\n• Apple MapKit – Masjid terdekat, peta, dan rute (lokasi dikirim ke Apple).\n• Firebase Crashlytics (Google) – Laporan kerusakan tanpa data identitas (stack trace, model perangkat, versi iOS/macOS).\n• Firebase Remote Config (Google) – Penanda fitur dan peluncuran bertahap (tidak membaca data dari perangkat).\n• Google AdMob – Hanya untuk menampilkan iklan video berhadiah pada “Mode Sedekah” yang opsional. Detailnya ada di bagian berikut.\n• Apple StoreKit 2 – Donasi opsional (pembelian dalam aplikasi). Data pembayaran diproses oleh Apple; Vakit tidak pernah melihat data kartu.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Pengumuman hari besar dan versi baru. Pengumuman disiarkan per topik; tidak ada penargetan per orang.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Teks dan audio khotbah Jumat.\n• Server Vakit (Jerman, Frankfurt) – Statistik penggunaan dan daftar zikirmu, terhubung ke kode pengguna yang tidak memuat informasi identitas. Catatan khatam, penanda, target, dan bacaanmu tidak pernah dikirim ke sana.\n\nCatatan: Firebase Analytics TIDAK dipakai; ID iklan (IDFA) tidak dikumpulkan.\n\nKebijakan privasi Google: policies.google.com/privacy",
      },
      {
        t: "6. Iklan (Mode Sedekah)",
        b: "Vakit tidak menampilkan iklan. Hanya pada “Mode Sedekah” yang opsional, jika pengguna sendiri yang memulainya untuk mendukung pengembang, iklan video berhadiah ditampilkan lewat Google AdMob. Dalam hal ini:\n• Iklan disajikan oleh Google AdMob; iklannya selalu tidak dipersonalisasi dan berperingkat untuk semua umur (G). Vakit tidak pernah menampilkan permintaan App Tracking Transparency, dan ID iklan (IDFA) tidak dibagikan.\n• Saat Pusat Dukungan (“Jaga Vakit tetap hidup”) dibuka, SDK iklan dimulai dan memuat satu iklan lebih dulu; tidak ada iklan yang ditampilkan kecuali kamu memilih untuk menontonnya.\n• Mode Sedekah bisa dinonaktifkan dari jarak jauh lewat Firebase Remote Config; kamu juga bisa memilih untuk tidak pernah memakainya.\n\nPrivasi Google AdMob: support.google.com/admob/answer/6128543",
      },
      {
        t: "7. Donasi (pembelian dalam aplikasi)",
        b: "Vakit gratis. Untuk mendukung pengembang, kamu bisa berdonasi secara opsional dengan pilihan nominal mulai ₺10 hingga ₺10.000 di layar “Jaga Vakit tetap hidup”. Transaksi ini:\n• Diproses oleh Apple StoreKit 2; data pembayaran (kartu, IBAN, Apple Pay) hanya dikirim ke Apple.\n• Vakit tidak pernah melihat atau menyimpan metode pembayaran maupun data keuanganmu.\n• Pengembalian dana hanya bisa diajukan lewat Apple (reportaproblem.apple.com).",
      },
      {
        t: "8. Masa penyimpanan data",
        b: "• Data lokal di perangkat – Disimpan sampai kamu menghapus aplikasi.\n• Data iCloud – Disimpan sampai kamu menghapus data Vakit dari iCloud atau menonaktifkan Apple ID-mu.\n• Statistik penggunaan di server – Disimpan selama 180 hari (sekitar 6 bulan), lalu dihapus otomatis. Teks kueri pencarian juga mengikuti jangka waktu ini.\n• Laporan kerusakan (Crashlytics) – Disimpan selama 90 hari, lalu dihapus.\n• Log server – Dirotasi dalam 30 hari.",
      },
      {
        t: "9. Hak-hakmu (KVKK / GDPR)",
        b: "Berdasarkan KVKK Turki dan GDPR Uni Eropa, kamu berhak:\n• Mengetahui data apa saja yang dikumpulkan tentangmu\n• Menolak pemrosesan data (cabut izin Lokasi, Notifikasi, atau Gerak di Pengaturan → Vakit pada iOS, atau Pengaturan Sistem → Vakit pada Mac)\n• Meminta penghapusan datamu: Pengaturan → Hapus akun menghapus semua datamu di perangkat dan di iCloud. Untuk menghapus statistik penggunaan di server kami, cukup kirim email ke hakancelikdev@gmail.com; permintaanmu dipenuhi paling lambat dalam 30 hari.\n• Portabilitas data\n• Mengajukan pengaduan ke otoritas KVKK\n\nKirim permintaanmu ke hakancelikdev@gmail.com; kami menjawab paling lambat dalam 30 hari.",
      },
      {
        t: "10. Privasi anak",
        b: "Vakit tersedia di App Store dengan rating usia 4+, tetapi kami tidak dengan sengaja mengumpulkan data pribadi dari pengguna di bawah 13 tahun. Jika menurutmu ada anak di bawah 13 tahun yang memberikan data, silakan tulis ke hakancelikdev@gmail.com dan data terkait akan segera kami hapus.",
      },
      {
        t: "11. Keamanan",
        b: "Semua data lokal tetap di perangkatmu, dilindungi sandbox iOS/macOS dan enkripsi perangkat. Data iCloud terenkripsi di infrastruktur Apple. Data yang dikirim ke server kami ditransmisikan lewat HTTPS/TLS dan disimpan di basis data terenkripsi; data ini tidak memuat informasi identitas. Vakit juga mendeteksi jailbreak, debugger, dan injeksi sebagai perlindungan tambahan saat operasi yang sensitif.",
      },
      {
        t: "12. Perubahan kebijakan",
        b: "Kebijakan ini dapat diperbarui seiring perkembangan aplikasi. Untuk perubahan yang penting, tanggal “Terakhir diperbarui” di halaman ini diperbarui dan pemberitahuan ditampilkan di dalam aplikasi. Kami menyarankan kamu meninjau kebijakan ini secara berkala.",
      },
      {
        t: "13. Kontak",
        b: "Untuk pertanyaan, permintaan, atau masukan soal privasi: hakancelikdev@gmail.com\n\nPengendali Data: Hakan Çelik (Turki)",
      },
    ],
  },
  terms: {
    meta: {
      title: "Vakit — Ketentuan Penggunaan",
      description:
        "Ketentuan penggunaan Vakit. Gratis dipakai, dengan donasi opsional (IAP); semua fitur inti gratis.",
    },
    title: "Ketentuan <em>Penggunaan</em>",
    desc: "Terakhir diperbarui: 10 September 2026 — Versi 1.7.4\n\nDengan mengunduh, memasang, atau memakai Aplikasi kami, kamu setuju untuk terikat pada Ketentuan ini. Bacalah Ketentuan ini dengan saksama.",
    sections: [
      {
        t: "1. Penerimaan Ketentuan",
        b: "Dengan mengakses dan memakai Vakit, kamu setuju untuk terikat pada syarat dan ketentuan perjanjian ini. Jika kamu tidak setuju, jangan gunakan layanan ini.",
      },
      {
        t: "2. Uraian layanan",
        b: "Vakit adalah aplikasi gratis yang menyediakan alat bantu ibadah seperti jadwal salat, arah kiblat, Al-Qur'an, hadis, penghitung zikir, panduan salat/wudu, catatan khatam dan ibadah, khotbah Jumat, masjid terdekat, dan kalender hari keagamaan. Aplikasi ini berjalan di iOS 16.4+ dan macOS 13+, serta menyertakan aplikasi pendamping Apple Watch untuk watchOS 9+.",
      },
      {
        t: "3. Penggunaan gratis & donasi opsional",
        b: "Semua fitur inti Vakit gratis. Aplikasi ini tidak menampilkan iklan (kecuali iklan video berhadiah pada “Mode Sedekah” yang opsional, yang dimulai sendiri oleh pengguna).\n\nPengguna yang ingin mendukung pengembang bisa berdonasi secara opsional dengan pilihan nominal mulai ₺10 hingga ₺10.000 di layar “Jaga Vakit tetap hidup”. Donasi ini:\n• Diproses lewat Apple In-App Purchase (StoreKit 2).\n• Merupakan produk habis pakai (consumable); donasi tidak membuka fitur tambahan atau langganan.\n• Permintaan pengembalian dana hanya bisa diajukan lewat Apple (reportaproblem.apple.com).\n• Ketentuan pembayaran Apple dan aturan App Store berlaku.",
      },
      {
        t: "4. Mode Sedekah (iklan berhadiah)",
        b: "“Mode Sedekah” adalah fitur opsional ketika pengguna dengan sukarela menonton iklan video berhadiah singkat untuk mendukung pengembang. Iklan disajikan lewat Google AdMob. Fitur ini tidak wajib dipakai; pengembang juga bisa menonaktifkannya dari jarak jauh lewat Firebase Remote Config.",
      },
      {
        t: "5. Aplikasi pendamping Apple Watch",
        b: "Vakit menyertakan aplikasi pendamping untuk watchOS 9+ dengan jadwal salat, kompas kiblat, dan komplikasi. Pemakaian aplikasi Watch tunduk pada Ketentuan ini. Karena keterbatasan perangkat keras Apple Watch (akurasi GPS, simpangan kompas, baterai), hasil di jam bisa berbeda dari iPhone.",
      },
      {
        t: "6. Tanggung jawab pengguna",
        b: "Kamu bertanggung jawab untuk:\n• Memilih lokasi dan metode perhitungan yang tepat\n• Memakai aplikasi sesuai hukum yang berlaku dan aturan App Store\n• Tidak mencoba merekayasa balik, membobol, atau menyalahgunakan aplikasi\n• Menjaga keamanan perangkat dan akun iCloud-mu (datamu tersinkron antarperangkat lewat Apple iCloud)",
      },
      {
        t: "7. Layanan pihak ketiga",
        b: "Vakit memakai layanan pihak ketiga berikut dan tunduk pada ketentuan masing-masing:\n• Apple iCloud / CloudKit (sinkronisasi data pengguna)\n• Apple MapKit (masjid terdekat, peta)\n• Firebase Crashlytics, Remote Config, dan Cloud Messaging (Google)\n• Google AdMob (hanya untuk Mode Sedekah)\n• Apple StoreKit 2 (donasi)\n• Diyanet (teks dan audio khotbah Jumat)\n• Pustaka Adhan (perhitungan jadwal salat, sumber terbuka)\n• SwiftAA (perhitungan astronomi, sumber terbuka)\n\nKetentuan penggunaan dan kebijakan privasi layanan-layanan ini adalah milik penyedianya masing-masing.",
      },
      {
        t: "8. Hak kekayaan intelektual",
        b: "Kode dan desain aplikasi ini milik Hakan Çelik; aplikasi ini bersumber terbuka di bawah lisensi MIT.\n\nVakit memakai konten dan pustaka pihak ketiga dengan penuh hormat:\n• Teks Arab Al-Qur'an: domain publik\n• Terjemahan Turki: Diyanet İşleri Başkanlığı Meali\n• Kumpulan hadis: dihimpun dari kompilasi domain publik\n• Audio tilawah Al-Qur'an: izin dan lisensi para qari tercantum di AUDIO-LICENSES.md\n• Adhan, SwiftAA, GRDB.swift: lisensi sumber terbuka masing-masing\n\nAplikasi ini memakai audio azan dan tilawah semata-mata untuk tujuan ibadah.",
      },
      {
        t: "9. Batasan tanggung jawab",
        b: "Aplikasi ini disediakan “sebagaimana adanya”. Perhitungan jadwal salat dan kiblat diupayakan seakurat mungkin, tetapi:\n• Selisih bisa terjadi karena akurasi lokasi, sinyal GPS, kalibrasi kompas, dan metode perhitungan yang dipilih.\n• Untuk keputusan ibadah yang penting, disarankan untuk mengonfirmasi ke otoritas keagamaan setempat.\n• Sensor Apple Watch (kompas magnetik, GPS) bisa menambah selisih.\n• Data bisa hilang karena masalah sinkronisasi iCloud, gangguan jaringan, atau perangkat yang hilang; cadangkan data pentingmu.\n\nPengembang tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari pemakaian aplikasi ini.",
      },
      {
        t: "10. Penghapusan akun & data",
        b: "Vakit tidak memerlukan akun. Menghapus aplikasi akan menghapus semua data lokal. Untuk menghapus data yang tersinkron lewat iCloud: Pengaturan > Hapus akun, atau Pengaturan > Apple ID > iCloud > Vakit > Hapus Data di iOS (Pengaturan Sistem > Akun Apple > iCloud di Mac). Jika kamu ingin statistik penggunaan yang disimpan di server kami dihapus, cukup kirim email ke hakancelikdev@gmail.com; permintaanmu dipenuhi paling lambat dalam 30 hari.",
      },
      {
        t: "11. Perubahan Ketentuan",
        b: "Ketentuan ini dapat diperbarui seiring perkembangan aplikasi dan untuk menyesuaikan dengan persyaratan hukum. Untuk perubahan yang penting, tanggal “Terakhir diperbarui” diperbarui dan pemberitahuan ditampilkan di dalam aplikasi. Terus memakai aplikasi berarti kamu menerima Ketentuan yang telah diperbarui.",
      },
      {
        t: "12. Hukum yang berlaku dan yurisdiksi",
        b: "Ketentuan ini tunduk pada hukum Republik Turki. Sengketa akan diselesaikan di pengadilan Turki; untuk hak konsumen, pengadilan konsumen setempat yang berwenang. Jika kamu tinggal di Uni Eropa, hak konsumen yang berlaku di tempatmu tetap dilindungi.",
      },
      {
        t: "13. Kontak",
        b: "Untuk pertanyaan tentang Ketentuan ini: hakancelikdev@gmail.com\n\nPengembang: Hakan Çelik (Turki)",
      },
    ],
  },
  "ads-policy": {
    meta: {
      title: "Vakit — Kebijakan Iklan",
      description:
        "Kebijakan iklan Vakit yang sesuai prinsip halal. Kami tidak menampilkan iklan judi, alkohol, konten dewasa, pinjaman berbunga, atau ramalan.",
    },
    titleBefore: "Kebijakan ",
    titleEm: "Iklan",
    desc: "Terakhir diperbarui: 10 September 2026 — Versi 1.7.4\n\nDi aplikasi Islami, iklan yang kamu lihat menjadi bagian dari momen ibadahmu. Karena itu Vakit tidak menampilkan iklan. Satu-satunya pengecualian bersifat pilihan: pengguna yang ingin mendukung aplikasi bisa memilih untuk menonton iklan video berhadiah yang singkat. Halaman ini menjelaskan aturan yang berlaku untuk iklan tersebut.",
    sections: [
      {
        t: "1. Di mana iklan muncul",
        b: "Vakit tidak menampilkan iklan banner, interstisial, atau iklan pembuka aplikasi di layar mana pun. Satu-satunya iklan adalah video berhadiah singkat yang bisa dipilih pengguna untuk ditonton dari Pusat Dukungan (“Jaga Vakit tetap hidup”, “Mode Sedekah”) demi mendukung aplikasi. Kamu tidak pernah wajib memakainya, dan tidak ada fitur yang bergantung padanya.",
      },
      {
        t: "2. Kategori yang tidak pernah kami tampilkan",
        b: "Iklan dalam kategori berikut diblokir di jaringan iklan:\n\n• Judi, taruhan, kasino, taruhan olahraga, poker\n• Minuman beralkohol dan produk tembakau\n• Konten dewasa, kencan, konten seksual, produk seks\n• Ketelanjangan dalam bentuk apa pun\n• Pinjaman berbunga, pinjaman kilat (payday loan), investasi berbunga\n• Ramalan, astrologi, paranormal, sihir, tarot\n• Babi dan produk babi\n• Skema cepat kaya, jebakan MLM\n• Propaganda keagamaan dari agama lain",
      },
      {
        t: "3. Pengamanan teknis",
        b: "Pengaturan berikut diterapkan di sisi jaringan iklan (Google AdMob):\n\n• Rating konten maksimum: G (semua umur).\n• Di Brand Safety > Block Content, semua kategori di atas ditandai.\n• Daftar blokir URL dan kata kunci: iklan yang memuat istilah seperti “casino”, “betting”, “gambling”, “flirt”, “dating”, “horoscope”, “psychic”, “tarot” tidak bisa lolos.\n• Iklan selalu tidak dipersonalisasi; Vakit tidak pernah menampilkan permintaan App Tracking Transparency, dan ID iklan (IDFA) tidak dibagikan.",
      },
      {
        t: "4. Jika kamu melihat iklan yang tidak pantas",
        b: "Jika kamu melihat iklan yang bertentangan dengan kepekaan agamamu, kirim email ke hakancelikdev@gmail.com beserta tangkapan layarnya. Setiap laporan yang valid ditambahkan ke daftar blokir AdMob.",
      },
      {
        t: "5. Kontak",
        b: "Untuk pertanyaan, laporan, atau usulan kategori: hakancelikdev@gmail.com\n\nPengembang: Hakan Çelik (Turki)",
      },
    ],
  },
};
