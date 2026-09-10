# 🚀 Deployment Guide - GitHub Pages

Bu rehber, Vakit landing page'ini GitHub Pages'e deploy etmek için adım adım talimatları içerir.

## 📋 Ön Gereksinimler

- GitHub hesabı
- Git kurulu
- Repository'ye push yetkisi

## 🔧 Deployment Adımları

### 1. Repository Ayarları

1. GitHub'da repository'nizi açın
2. **Settings** sekmesine gidin
3. Sol menüden **Pages** seçin
4. **Source** bölümünde:
   - **Deploy from a branch** seçin
   - **Branch**: `gh-pages` seçin
   - **Folder**: `/docs` seçin
5. **Save** butonuna tıklayın

### 2. GitHub Actions Workflow

Repository'de `.github/workflows/deploy.yml` dosyası zaten mevcut. Bu workflow:

- ✅ Main branch'e push yapıldığında otomatik deploy
- ✅ Dosya validasyonu
- ✅ GitHub Pages'e otomatik yükleme
- ✅ Deployment durumu bildirimleri

### 3. Manuel Deploy (Opsiyonel)

Eğer GitHub Actions kullanmak istemiyorsanız:

```bash
# Repository'yi klonlayın
git clone https://github.com/hakancelikdev/vakit.git
cd vakit

# gh-pages branch'i oluşturun
git checkout -b gh-pages

# Dosyaları ekleyin
git add .

# Commit yapın
git commit -m "Initial deployment"

# Push yapın
git push origin gh-pages
```

### 4. Custom Domain (Opsiyonel)

Eğer custom domain kullanmak istiyorsanız:

1. Domain sağlayıcınızdan DNS ayarları:
   ```
   Type: CNAME
   Name: www
   Value: hakancelikdev.github.io
   ```

2. Repository'de `CNAME` dosyası oluşturun:
   ```
   yourdomain.com
   ```

## 🔍 Deployment Kontrolü

### Deployment Durumu

1. **Actions** sekmesinde workflow durumunu kontrol edin
2. **Settings > Pages** bölümünde deployment durumunu görün
3. Site URL'ini test edin: `https://vakit.hakancelik.dev`

### Yaygın Sorunlar

#### ❌ 404 Hatası
- Repository adının doğru olduğundan emin olun
- gh-pages branch'inin oluşturulduğunu kontrol edin

#### ❌ CSS/JS Yüklenmiyor
- Dosya yollarının doğru olduğunu kontrol edin
- Cache'i temizleyin (Ctrl+F5)

#### ❌ Assets Görünmüyor
- Assets klasörünün repository'de olduğunu kontrol edin
- Dosya izinlerini kontrol edin

## 🛠️ Geliştirme Ortamı

### Lokal Test

```bash
# Python ile
cd docs
python3 -m http.server 8000

# Node.js ile
cd docs
npx serve .

# PHP ile
cd docs
php -S localhost:8000
```

### Dosya Yapısı Kontrolü

```
vakit/
├── docs/                    # Landing page dosyaları
│   ├── index.html          ✅ Ana sayfa
│   ├── styles.css          ✅ CSS stilleri
│   ├── script.js           ✅ JavaScript
│   ├── assets/             ✅ Resimler ve ikonlar
│   ├── sitemap.xml         ✅ SEO için
│   └── robots.txt          ✅ Arama motorları için
├── vakit/                  # iOS Uygulaması
├── .github/workflows/      ✅ GitHub Actions
└── README.md              ✅ Proje dokümantasyonu
```

## 📊 Analytics

Site hiçbir analitik/izleme betiği yüklemez (Google Analytics 2026-09-10'da kaldırıldı;
`npm test` geri gelirse düşer). Siteden gelen indirmeler App Store kampanya token'larıyla
(`storeLink` → `ct=site-*`) App Store Connect'te ölçülür.

## 🔄 Güncelleme

Her değişiklik sonrası:

1. Değişiklikleri commit edin
2. Main branch'e push yapın
3. GitHub Actions otomatik olarak deploy edecek
4. 2-5 dakika içinde değişiklikler yayınlanacak

## 📞 Destek

Herhangi bir sorun yaşarsanız:

- [GitHub Issues](https://github.com/hakancelikdev/vakit/issues)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

🎉 **Tebrikler!** Landing page'iniz başarıyla deploy edildi! 