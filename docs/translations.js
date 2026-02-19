const translations = {
    tr: {
        // Navigation
        nav: {
            features: "Özellikler",
            screenshots: "Hızlı Göz Atma",
            vision: "Hakkımızda",
            download: "İndir",
            privacy: "Gizlilik",
            faq: "SSS",
            terms: "Kullanım Şartları"
        },

        // Hero Section
        hero: {
            title: "Vakit",
            subtitle: "Zikir, Takvim & İslami Araçlar",
            description: "<strong>Vakit</strong> ile namaz vakitlerini takip edin, Kıble yönünü bulun, <strong>Kur'an-ı Kerim</strong> okuyun ve ibadetlerinizi kayıt altına alın. <strong>22 hesaplama yöntemi</strong>, <strong>Zikirmatik</strong>, <strong>Live Activities</strong>, <strong>widget desteği</strong> ve çok daha fazlası — tamamen ücretsiz.",
            downloadButton: "App Store'dan İndir",
            featuresButton: "Özellikleri Gör",
            badge: {
                downloadOn: "Şuradan indirin:"
            },
            proof: {
                rating: "App Store",
                freeValue: "Ücretsiz",
                freeLabel: "Fiyat",
                offlineValue: "Çevrimdışı",
                offlineLabel: "Çalışır",
                adFreeValue: "Reklamsız",
                adFreeLabel: "Deneyim"
            },
            highlights: {
                easy: "📱 Kolay Kullanım",
                location: "📍 Akıllı Konum",
                qibla: "🕌 Kıble Yönü",
                hijri: "📅 Gelişmiş Takvim",
                quran: "📖 Kur'an-ı Kerim",
                liveActivity: "📱 Live Activities"
            }
        },

        // Features Section
        features: {
            title: "Uygulama Özellikleri",
            prayerTimes: {
                title: "Namaz Vakitleri",
                description: "Konumunuza göre <strong>namaz vakitlerini</strong> öğrenin. İmsak, güneş, öğle, ikindi, akşam ve yatsı vakitleri. <strong>22 farklı hesaplama yöntemi</strong> desteği."
            },
            qiblaDirection: {
                title: "Kıble Yönü",
                description: "<strong>Kâbe yönünü</strong> hassas pusula ile bulun. Haptik geri bildirim, Kâbe'ye mesafe bilgisi ve sonraki namaz geri sayımı."
            },
            notifications: {
                title: "Bildirimler & Ses Seçenekleri",
                description: "Namaz vakitlerinde <strong>bildirim alın</strong>. 11 farklı bildirim sesi arasından seçin: Geleneksel Ezan (Muhammad Al Damradash), sistem sesleri ve özel tonlar."
            },
            hijriCalendar: {
                title: "Gelişmiş Takvim",
                description: "<strong>Hicri tarihi</strong>, dini günleri ve kandil gecelerini takip edin. Namaz takibi ve günlük ibadet özeti ile gün detay sheet'i."
            },
            location: {
                title: "Akıllı Konum Sistemi",
                description: "GPS ile <strong>konumunuzu</strong> otomatik bulun veya manuel arayın. <strong>22 farklı hesaplama yöntemi</strong> (Türkiye, Umm al-Qura, Dubai, vb.) ve akıllı seyahat algılama."
            },
            darkMode: {
                title: "Karanlık Mod",
                description: "Gece kullanımı için <strong>karanlık mod</strong>. Göz yormayan arayüz."
            },
            offline: {
                title: "İnternet Olmadan",
                description: "İnternet bağlantısı olmadan da <strong>namaz vakitlerini</strong> görün. Kur'an, kıble ve tüm temel özellikler çevrimdışı çalışır."
            },
            quran: {
                title: "Kur'an-ı Kerim",
                description: "<strong>114 sure</strong> tam metin, kelime kelime analiz, Diyanet tefsiri, Mushaf görünümü ve hatim takibi."
            },
            widgets: {
                title: "Widget Desteği",
                description: "Ana ekranda <strong>6 farklı widget ailesi</strong>. Günün Ayeti, Günün Esması, namaz vakitleri ve geri sayım widget'ları."
            },
        },

        // Testimonials
        testimonials: {
            title: "Kullanıcı Yorumları",
            items: [
                {
                    title: "Harika",
                    text: "Bu tarz uygulamalar hep menfur olmakta lakin bu uygulama bir harika. Geliştiriciden Allah razı olsun. Kur'an özelliği başlı başına çok güzel. Kıble doğru yönde. Şiddetle tavsiye ederim."
                },
                {
                    title: "Tertemiz uygulama",
                    text: "Sade amacına uygun, saçma sapan özellik ve reklam yok, tertemiz uygulama olmuş. Eline sağlık yapan arkadaşın."
                }
            ]
        },

        // Apple-style Feature Sections (for index.html)
        appleFeatures: {
            prayerTimes: {
                title: "Namaz Vakitleri",
                description: "Konumunuza göre namaz vakitlerini anlık takip edin. İmsak ve sabah ayrı gösterilir. Türkiye (Diyanet) dahil 22 farklı hesaplama yöntemi, akıllı seyahat algılama ve urgency renk sistemi. Her yerde, internetsiz, huzurla."
            },
            qiblaAndWorship: {
                title: "Kıble & İbadet",
                description: "Görsel pusula ile Kâbe yönünü her yerde bulun. Haptik geri bildirim ve Kâbe'ye mesafe bilgisi. Zikirmatik, Fitre & Zekat hesaplayıcı — hepsi tek uygulamada."
            },
            quran: {
                title: "Kur'an-ı Kerim",
                description: "114 sure tam metin okuma, kelime kelime analiz ve Diyanet tefsiri. Ayetleri oku veya dinle, ilerlemeni takip et, kaydet, öğren."
            },
            quranReading: {
                title: "İstediğin Görünümle",
                description: "Modern arayüz veya geleneksel Mushaf (kitap) görünümü; sana kalmış. Sesli tilavet desteği, hatim takibi ve secde ayeti uyarıları."
            },
            widgets: {
                title: "Vakit Hep Yanında",
                description: "Ana ekran ve kilit ekranında namaz vakitleri. Dynamic Island'da 4 bölgeli canlı takip, urgency renk sistemi ve StandBy desteği. 6 farklı widget ailesi ile Günün Ayeti ve Günün Esması."
            },
            more: {
                title: "Ve Çok Daha Fazlası",
                description: "Gelişmiş takvim ile dini günler ve kandil geceleri, ibadet özeti paylaşım kartları, zikirmatik, Activity Rings ile ibadet takibi, streak sistemi ve kişiselleştirilmiş ayarlar. İndir, ibadetini kolaylaştır."
            }
        },

        // Screenshots Section
        screenshots: {
            title: "Uygulama Ekranları",
            subtitle: "Vakit uygulamasının tüm özelliklerini keşfedin ve modern tasarımı deneyimleyin",
            home: {
                title: "Ana Ekran - Namaz Vakitleri",
                description: "Güncel namaz vakitlerini, kalan süreyi ve hicri tarihi tek bakışta görün. Her yerde, internetsiz, huzurla."
            },
            qibla: {
                title: "Kıble, Zikir, Kur'an",
                description: "Kıble yönünü bul, zikir çek, Kur'an oku; hepsi tek uygulamada."
            },
            quran: {
                title: "Kur'an-ı Kerim",
                description: "Ayetleri oku veya dinle, ilerlemeni takip et, kaydet, öğren."
            },
            quranReading: {
                title: "İstediğin Görünümle",
                description: "Modern arayüz veya mushaf (kitap) görünümü; sana kalmış."
            },
            widgets: {
                title: "Vakit Hep Yanında",
                description: "Ana ekran ve kilit ekranında namaz vakitleri, widget'lar ve Live Activities."
            },
            more: {
                title: "Ve Çok Daha Fazlası",
                description: "Takvim, paylaşım kartları, zikirmatik, ibadet takibi ve ayarlar."
            },
            highlights: {
                modern: {
                    title: "Modern Tasarım",
                    description: "iOS 18+ uyumlu, temiz ve kullanıcı dostu arayüz"
                },
                autoUpdate: {
                    title: "Otomatik Güncelleme",
                    description: "Namaz vakitleri otomatik olarak güncellenir"
                },
                secure: {
                    title: "Güvenli & Gizli",
                    description: "Kişisel verileriniz güvende ve tamamen gizli"
                }
            }
        },

        // Vision Section
        vision: {
            offline: {
                title: "Çevrimdışı Öncelikli",
                description: "Tüm temel özellikler internet bağlantısı olmadan çalışır. İbadet, internete bağlı olmamalıdır."
            },
            privacy: {
                title: "Gizlilik Öncelikli",
                description: "Kişisel verileriniz cihazınızdan ayrılmaz. Hesap gerektirmez, takip etmez."
            },
            simple: {
                title: "Sade & Hızlı",
                description: "Gereksiz karmaşıklık yok. Aradığınıza saniyeler içinde ulaşın, temiz ve akıcı bir deneyim yaşayın."
            }
        },

        // Developer Section
        developer: {
            title: "Geliştirici",
            name: "Hakan Çelik",
            title: "Software developer @ Trendyol",
            bio: "Solving my problems — and yours too.",
            project: {
                title: "Proje Hakkında",
                description: "Vakit uygulaması, modern teknikler kullanılarak geliştirilmiş açık kaynak bir namaz vakitleri uygulamasıdır. Basit ve kolay kullanım için tasarlanmıştır.",
                githubButton: "GitHub'da Görüntüle",
                contributeButton: "Katkıda Bulun"
            }
        },

        // Download Section
        download: {
            title: "Hemen İndirin",
            description: "Vakit uygulamasını App Store'dan indirin ve namaz vakitlerinizi kolayca takip edin.",
            button: "App Store'dan İndir",
            note: "iOS 18 veya üzeri gerektirir • Tamamen ücretsiz"
        },

        // FAQ Section
        faq: {
            title: "Sıkça Sorulan Sorular",
            items: [
                {
                    q: "İnternet bağlantısı olmadan çalışır mı?",
                    a: "Evet, Vakit uygulaması namaz vakitlerini cihazınızda anlık olarak hesaplar. Kur'an okuma, kıble yönü, zikirmatik ve tüm temel özellikler internet bağlantısı olmadan çalışır."
                },
                {
                    q: "Uygulamayı açmasam bile bildirimler gelmeye devam eder mi?",
                    a: "Evet, bildirimler cihazınızda yerel olarak hesaplanıp planlanır. Uygulama kapalı olsa dahi vakitlerde bildirim alırsınız. Ayrıca konum iznini 'Her Zaman' (Always) yaparsanız, yer değiştirdiğinizde vakitler arka planda otomatik olarak yeniden hesaplanır ve bildirimler güncellenir."
                },
                {
                    q: "Uygulamadaki tüm özellikler gerçekten ücretsiz mi?",
                    a: "Evet, Vakit tamamen ücretsiz bir projedir. Kur'an okuyucu, ibadet takibi, widget'lar, Live Activities ve tüm diğer özelliklere hiçbir ücret ödemeden erişebilirsiniz."
                },
                {
                    q: "Namaz vakitlerini nereden çekiyorsunuz?",
                    a: "Vakit, verileri bir sunucudan çekmek yerine, seçtiğiniz hesaplama yöntemine ve konumunuza göre matematiksel formüllerle cihazınızda anlık olarak hesaplar. 22 farklı hesaplama yöntemi arasından bölgenize en uygun olanı seçebilirsiniz."
                },
                {
                    q: "Kur'an okuma özellikleri neler?",
                    a: "114 surenin tam metni, kelime kelime analiz, Diyanet tefsiri, geleneksel Mushaf görünümü, sesli tilavet desteği ve hatim takibi bulunmaktadır. Tüm içerikler çevrimdışı olarak erişilebilir."
                },
                {
                    q: "İbadet takibi nasıl çalışır?",
                    a: "Activity Rings benzeri görsel takip sistemi ile günlük namazlarınızı, Kur'an okumanızı ve zikirlerinizi kayıt altına alabilirsiniz. Streak sistemi ile sürekliliğinizi takip edin ve detaylı istatistiklerle ilerlemenizi görün."
                },
                {
                    q: "Hangi widget çeşitleri var?",
                    a: "6 farklı widget ailesi mevcuttur: Namaz vakitleri, geri sayım, Günün Ayeti, Günün Esması, kilit ekranı widget'ları ve StandBy modu desteği. Küçük, orta ve büyük boyutlarda kullanabilirsiniz."
                }
            ]
        },

        // Contact & Feedback
        contact: {
            title: "Geri Bildirim ve İletişim",
            description: "Vakit'i daha iyi hale getirmek için fikirleriniz bizim için çok değerli.",
            feedbackButton: "Geri Bildirim Gönder",
            feedbackUrl: "https://docs.google.com/forms/d/1kFwSM_XayYaRrkUyB8rynTJzWF8ahrcnHQp7fvhSfNU",
            emailLabel: "Bize ulaşın:",
            email: "hakancelikdev@gmail.com"
        },

        // Footer Section
        footer: {
            tagline: "Zikir, Takvim & İslami Araçlar",
            linksTitle: "Bağlantılar",
            contactTitle: "İletişim",
            copyright: "© 2025 Vakit Team. Tüm hakları saklıdır."
        },

        // Meta tags
        meta: {
            title: "Vakit: Namaz, Kıble, Kuran",
            description: "Namaz vakitlerini takip edin, Kıble yönünü bulun, Kur'an-ı Kerim okuyun. Zikir, takvim ve İslami araçlar. 22 hesaplama yöntemi, Live Activities, widget desteği. Tamamen ücretsiz.",
            keywords: "namaz vakitleri, vakit, kıble yönü, namaz vakti, kuran, kur'an-ı kerim, hatim, tefsir, zikir, zikirmatik, ibadet takibi, islamic app, prayer times, qibla direction, quran, hicri takvim, live activities, widget, dynamic island, ios app, namaz uygulaması"
        },

        // Privacy Policy
        privacyPolicy: {
            title: "Gizlilik Politikası",
            description: "Vakit gizliliğinize saygı duyar. Yalnızca namaz vakitlerini hesaplamak, kıble yönünü belirlemek ve yerel hatırlatıcılar göndermek için gerekli verileri toplarız. Hiçbir kişisel veri cihazınızdan ayrılmaz. Reklam deneyimini iyileştirmek amacıyla sınırlı veri toplanabilir.",
            sections: [
                {
                    title: "1. Topladığımız Veriler",
                    body: "İsminizi, e-posta adresinizi, fotoğraflarınızı, mikrofonunuzu, kameranızı, rehberinizi veya herhangi bir kişisel tanımlayıcı bilgiyi toplamayız. Analitik veriler tamamen anonimdir ve yalnızca uygulama geliştirme ve iyileştirme amacıyla kullanılır."
                },
                {
                    title: "2. Verilerinizi Nasıl Kullanıyoruz",
                    body: "• Namaz Vakti Hesaplama – Konum cihazınızda yerel olarak işlenir.\n• Kıble Yönü – Konum ve yön bilgisi cihaz üzerinde birleştirilir.\n• İbadet Hatırlatıcıları – Yerel bildirimler planlanır.\n• Kullanıcı Tercihleri – Yerel olarak saklanır.\n• Analitik ve İyileştirme – Anonim kullanım verileri performans izleme ve hata tespiti için kullanılır."
                },
                {
                    title: "3. Veri Paylaşımı & Üçüncü Taraflar",
                    body: "Verilerinizi hiç kimseyle paylaşmıyor, satmıyor veya aktarmıyoruz. Reklam deneyimini iyileştirmek amacıyla Google AdMob ile sınırlı veri paylaşımı yapılabilir. Anonim analitik veriler Türkiye'deki güvenli veritabanı cluster'ında saklanır."
                },
                {
                    title: "4. Güvenlik",
                    body: "Tüm yerel veriler iPhone'unuzda kalır ve iOS sandbox'ı tarafından korunur. Analitik veriler Türkiye'deki güvenli veritabanı cluster'ında şifrelenmiş olarak saklanır. Kişisel tanımlayıcı bilgiler toplanmaz."
                }
            ]
        },

        // Terms of Use
        termsOfUse: {
            title: "Kullanım Şartları",
            description: "Uygulamamızı indirerek, yükleyerek veya kullanarak bu Şartlara bağlı kalmayı kabul edersiniz. Lütfen bu Şartlara dikkatle okuyun.",
            sections: [
                {
                    title: "1. Şartların Kabulü",
                    body: "Vakit'e erişerek ve kullanarak, bu anlaşmanın şart ve hükümlerine bağlı kalmayı kabul edersiniz. Kabul etmiyorsanız, lütfen bu hizmeti kullanmayın."
                },
                {
                    title: "2. Ücretsiz Kullanım",
                    body: "Vakit tamamen ücretsizdir. Tüm özellikler herkes için ücretsiz olarak sunulmaktadır. Gelecekte ücretli özellikler eklenirse, bunlar açıkça belirtilecektir."
                },
                {
                    title: "3. Kullanıcı Sorumlulukları",
                    body: "Sorumlu olduğunuz konular: Doğru konum bilgisi sağlamak, yasalar uygun şekilde kullanmak ve uygulamaya zarar vermemektir."
                },
                {
                    title: "4. Sorumluluk Sınırlaması",
                    body: "Uygulama \"olduğu gibi\" sunulmaktadır. Namaz vakitleri ve kıble yönü hesaplamaları doğru olmaya çalışılır ancak kesin doğruluk garanti edilmez."
                }
            ]
        },

        // Screenshot paths
        screenshotPaths: {
            home: "assets/screenshots/tr/1.png",
            qibla: "assets/screenshots/tr/2.png",
            quran: "assets/screenshots/tr/3.png",
            quranReading: "assets/screenshots/tr/4.png",
            widgets: "assets/screenshots/tr/5.png",
            more: "assets/screenshots/tr/6.png"
        }
    },

    en: {
        // Navigation
        nav: {
            features: "Features",
            screenshots: "Screenshots",
            vision: "About",
            download: "Download",
            privacy: "Privacy",
            faq: "FAQ",
            terms: "Terms of Use"
        },

        // Hero Section
        hero: {
            title: "Vakit",
            subtitle: "Dhikr, Calendar & Islamic Tools",
            description: "Track <strong>prayer times</strong>, find the <strong>Qibla direction</strong>, read the <strong>Holy Quran</strong>, and log your worship with <strong>Vakit</strong>. <strong>22 calculation methods</strong>, <strong>Dhikr counter</strong>, <strong>Live Activities</strong>, <strong>widget support</strong> and much more — completely free.",
            downloadButton: "Download from App Store",
            featuresButton: "View Features",
            badge: {
                downloadOn: "Download on the"
            },
            proof: {
                rating: "App Store",
                freeValue: "Free",
                freeLabel: "Price",
                offlineValue: "Offline",
                offlineLabel: "Works",
                adFreeValue: "Ad-Free",
                adFreeLabel: "Experience"
            },
            highlights: {
                easy: "📱 Easy to Use",
                location: "📍 Smart Location",
                qibla: "🕌 Qibla Direction",
                hijri: "📅 Advanced Calendar",
                quran: "📖 Holy Quran",
                liveActivity: "📱 Live Activities"
            }
        },

        // Features Section
        features: {
            title: "App Features",
            prayerTimes: {
                title: "Prayer Times",
                description: "Learn <strong>prayer times</strong> based on your location. Imsak, sunrise, Dhuhr, Asr, Maghrib and Isha times. <strong>22 different calculation methods</strong> supported."
            },
            qiblaDirection: {
                title: "Qibla Direction",
                description: "Find the <strong>Kaaba direction</strong> with a precise compass. Haptic feedback, distance to Kaaba, and next prayer countdown."
            },
            notifications: {
                title: "Notifications & Sound Options",
                description: "Get <strong>notifications</strong> at prayer times. Choose from 11 different notification sounds: Traditional Adhan (Muhammad Al Damradash), system sounds and custom tones."
            },
            hijriCalendar: {
                title: "Advanced Calendar",
                description: "Track <strong>Hijri dates</strong>, religious days, and holy nights. Prayer tracking and daily worship summary with day detail sheet."
            },
            location: {
                title: "Smart Location System",
                description: "Find your <strong>location</strong> with GPS or search manually. <strong>22 different calculation methods</strong> (Turkey, Umm al-Qura, Dubai, etc.) and smart travel detection."
            },
            darkMode: {
                title: "Dark Mode",
                description: "<strong>Dark mode</strong> for night use. Eye-friendly interface."
            },
            offline: {
                title: "Works Offline",
                description: "View <strong>prayer times</strong> even without internet connection. Quran, qibla, and all core features work offline."
            },
            quran: {
                title: "Holy Quran",
                description: "<strong>114 surahs</strong> full text, word-by-word analysis, Diyanet tafsir, Mushaf view, and khatm tracking."
            },
            widgets: {
                title: "Widget Support",
                description: "Home screen <strong>6 different widget families</strong>. Verse of the Day, Name of the Day, prayer times and countdown widgets."
            },
        },

        // Testimonials
        testimonials: {
            title: "User Reviews",
            items: [
                {
                    title: "Amazing",
                    text: "Apps like this are usually disappointing, but this one is amazing. May God bless the developer. The Quran feature alone is wonderful. Qibla direction is accurate. Highly recommended."
                },
                {
                    title: "Spotless app",
                    text: "Simple, purpose-built, no unnecessary features and no ads — a spotless app. Great job to the developer."
                }
            ]
        },

        // Apple-style Feature Sections (for index.html)
        appleFeatures: {
            prayerTimes: {
                title: "Prayer Times",
                description: "Track prayer times in real-time based on your location. Imsak and Fajr shown separately. Supports 22 calculation methods including Turkey (Diyanet), smart travel detection, and urgency color system. Anywhere, offline, in peace."
            },
            qiblaAndWorship: {
                title: "Qibla & Worship",
                description: "Find the Kaaba direction anywhere with a visual compass. Haptic feedback and distance to Kaaba. Dhikr Counter, Fitrah & Zakat calculator — all in one app."
            },
            quran: {
                title: "The Holy Quran",
                description: "Full text of 114 surahs, word-by-word analysis, and Diyanet tafsir. Read or listen to verses, track your progress, save, and learn."
            },
            quranReading: {
                title: "Your Preferred View",
                description: "Modern interface or traditional book (Mushaf) layout; your choice. Audio recitation support, khatm tracking, and prostration verse alerts."
            },
            widgets: {
                title: "Vakit Always With You",
                description: "Prayer times on your home screen and lock screen. 4-region live tracking on Dynamic Island, urgency color system, and StandBy support. 6 different widget families with Verse of the Day and Name of the Day."
            },
            more: {
                title: "And Much More",
                description: "Advanced calendar with religious days and holy nights, worship summary sharing cards, dhikr counter, worship tracking with Activity Rings, streak system, and personalized settings. Download and make your worship easier."
            }
        },

        // Screenshots Section
        screenshots: {
            title: "App Screenshots",
            subtitle: "Discover all features of the Vakit app and experience the modern design",
            home: {
                title: "Home Screen - Prayer Times",
                description: "View current prayer times, remaining time and Hijri date at a glance. Anywhere, offline, in peace."
            },
            qibla: {
                title: "Qibla, Dhikr, Quran",
                description: "Find the Qibla, count your dhikr, read the Quran; all in one app."
            },
            quran: {
                title: "The Holy Quran",
                description: "Read or listen to verses, track your progress, save, and learn."
            },
            quranReading: {
                title: "Your Preferred View",
                description: "Modern interface or traditional book (mushaf) layout; your choice."
            },
            widgets: {
                title: "Vakit Always With You",
                description: "Prayer times on your home screen and lock screen, widgets and Live Activities."
            },
            more: {
                title: "And Much More",
                description: "Calendar, sharing cards, dhikr counter, worship tracking and settings."
            },
            highlights: {
                modern: {
                    title: "Modern Design",
                    description: "iOS 18+ compatible, clean and user-friendly interface"
                },
                autoUpdate: {
                    title: "Auto Update",
                    description: "Prayer times are automatically updated"
                },
                secure: {
                    title: "Secure & Private",
                    description: "Your personal data is safe and completely private"
                }
            }
        },

        // Vision Section
        vision: {
            offline: {
                title: "Offline First",
                description: "All core features work without an internet connection. Worship should never depend on connectivity."
            },
            privacy: {
                title: "Privacy First",
                description: "Your personal data never leaves your device. No account required, no tracking."
            },
            simple: {
                title: "Simple & Fast",
                description: "No unnecessary complexity. Find what you need in seconds with a clean, fluid experience."
            }
        },

        // Developer Section
        developer: {
            title: "Developer",
            name: "Hakan Çelik",
            title: "Software developer @ Trendyol",
            bio: "Solving my problems — and yours too.",
            project: {
                title: "About the Project",
                description: "Vakit app is an open-source prayer times application developed using modern techniques. Designed for simple and easy use.",
                githubButton: "View on GitHub",
                contributeButton: "Contribute"
            }
        },

        // Download Section
        download: {
            title: "Download Now",
            description: "Download the Vakit app from the App Store and easily track your prayer times.",
            button: "Download from App Store",
            note: "Requires iOS 18 or later • Completely free"
        },

        // FAQ Section
        faq: {
            title: "Frequently Asked Questions",
            items: [
                {
                    q: "Does it work without an internet connection?",
                    a: "Yes, Vakit calculates prayer times instantly on your device. Quran reading, qibla direction, dhikr counter, and all core features work without an internet connection."
                },
                {
                    q: "Will I continue to receive notifications even if I don't open the app?",
                    a: "Yes, notifications are calculated and scheduled locally on your device. You will receive notifications even if the app is closed. Additionally, if you set location permission to 'Always', prayer times are automatically recalculated in the background when you change locations, and notifications are updated."
                },
                {
                    q: "Are all features in the app really free?",
                    a: "Yes, Vakit is a completely free project. You can access all features, including the Quran reader, worship tracking, widgets, Live Activities, and all other features without any charge."
                },
                {
                    q: "Where do the prayer times come from?",
                    a: "Instead of fetching data from a server, Vakit calculates times instantly on your device using mathematical formulas based on your chosen method and location. You can choose from 22 different calculation methods for the most accurate results in your region."
                },
                {
                    q: "What Quran reading features are available?",
                    a: "Full text of 114 surahs, word-by-word analysis, Diyanet tafsir, traditional Mushaf view, audio recitation support, and khatm tracking. All content is accessible offline."
                },
                {
                    q: "How does worship tracking work?",
                    a: "Track your daily prayers, Quran reading, and dhikr with an Activity Rings-style visual tracking system. Monitor your consistency with the streak system and view your progress through detailed statistics."
                },
                {
                    q: "What widget options are available?",
                    a: "6 different widget families are available: Prayer times, countdown, Verse of the Day, Name of the Day, lock screen widgets, and StandBy mode support. Available in small, medium, and large sizes."
                }
            ]
        },

        // Contact & Feedback
        contact: {
            title: "Feedback & Contact",
            description: "Your ideas are valuable to make Vakit even better.",
            feedbackButton: "Send Feedback",
            feedbackUrl: "https://docs.google.com/forms/d/16ozSBeDPPwNhG2ViJaHLaHYski-oS8HLvHO52_g3Joc",
            emailLabel: "Contact us:",
            email: "hakancelikdev@gmail.com"
        },

        // Footer Section
        footer: {
            tagline: "Dhikr, Calendar & Islamic Tools",
            linksTitle: "Links",
            contactTitle: "Contact",
            copyright: "© 2025 Vakit Team. All rights reserved."
        },

        // Meta tags
        meta: {
            title: "Vakit: Prayer, Qibla, Quran",
            description: "Track prayer times, find the Qibla direction, read the Holy Quran. Dhikr, calendar and Islamic tools. 22 calculation methods, Live Activities, widget support. Completely free.",
            keywords: "prayer times, vakit, qibla direction, prayer time, quran, holy quran, khatm, tafsir, dhikr, dhikr counter, worship tracker, islamic app, namaz vakitleri, qibla yönü, hijri calendar, live activities, widget, dynamic island, ios app, prayer app"
        },

        // Privacy Policy
        privacyPolicy: {
            title: "Privacy Policy",
            description: "Vakit respects your privacy. We only collect the necessary data to calculate prayer times, determine qibla direction, and send local reminders. No personal data leaves your device. Limited data may be collected to improve the advertising experience.",
            sections: [
                {
                    title: "1. Data We Collect",
                    body: "We do not collect your name, email, photos, microphone, camera, contacts, or any other personally identifiable information. Analytics data is completely anonymous and used solely for app development and improvement."
                },
                {
                    title: "2. How We Use Your Data",
                    body: "• Prayer Time Calculation – Location is processed locally on your device.\n• Qibla Direction – Location + heading are combined on-device.\n• Prayer Reminders – Local notifications are scheduled.\n• User Preferences – Stored locally.\n• Analytics and Improvement – Anonymous usage data is used for monitoring performance."
                },
                {
                    title: "3. Data Sharing & Third Parties",
                    body: "We do not share, sell, or transfer your data to anyone. Limited data may be shared with Google AdMob to improve the advertising experience. Anonymous analytics data is stored on secure servers."
                },
                {
                    title: "4. Security",
                    body: "All local data remains on your iPhone and is protected by iOS sandboxing. Analytics data is stored in encrypted form on secure servers. No personally identifiable information is collected."
                }
            ]
        },

        // Terms of Use
        termsOfUse: {
            title: "Terms of Use",
            description: "By downloading, installing, or using our App, you agree to be bound by these Terms. Please read these Terms carefully.",
            sections: [
                {
                    title: "1. Acceptance of Terms",
                    body: "By accessing and using Vakit, you agree to be bound by the terms and provisions of this agreement. If you do not agree, please do not use this services."
                },
                {
                    title: "2. Free to Use",
                    body: "Vakit is completely free. All features are provided free of charge for everyone. If paid features are added in the future, they will be clearly stated."
                },
                {
                    title: "3. User Responsibilities",
                    body: "You are responsible for: Providing accurate location information, using the app in accordance with laws, and not harming the app."
                },
                {
                    title: "4. Limitation of Liability",
                    body: "The app is provided \"as is\". Prayer times and Qibla direction calculations are attempted to be accurate but exact accuracy is not guaranteed."
                }
            ]
        },

        // Screenshot paths
        screenshotPaths: {
            home: "assets/screenshots/en/1.png",
            qibla: "assets/screenshots/en/2.png",
            quran: "assets/screenshots/en/3.png",
            quranReading: "assets/screenshots/en/4.png",
            widgets: "assets/screenshots/en/5.png",
            more: "assets/screenshots/en/6.png"
        }
    }
};

// Language data is now purely data
// Logic is handled in localization.js
