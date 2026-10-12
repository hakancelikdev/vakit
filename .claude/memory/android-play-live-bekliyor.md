---
name: android-play-live-bekliyor
description: Android kapalı test aşamasında; SITE.play.live = true yalnız Play sayfası herkese açılınca ve sahip onayıyla
metadata:
  type: project
---

2026-10-12: site Android **kapalı test** aşamasında (`SITE.play.test` → "Android'de dene" + `#android` iki adım). Sahip: "live true zamanı gelince yaparız".

**Why:** Play mağaza sayfası 2026-10-12'de 404'tü. Erken `live: true` → butonlar 404'e gider, test katılım bölümü kalkar, SSS ve JSON-LD "Google Play'de var" diye yanlış bilgi verir ("yalnız bugün doğru olan" kuralı).
**How to apply:** Sahip "zamanı geldi" deyince önce `curl -s -o /dev/null -w "%{http_code}" "https://play.google.com/store/apps/details?id=com.hakancelikdev.vakit"` → 200 doğrula, sonra `live: true` + build + test + commit. Aynı gün elle: `docs/404.html` Play linki, 25 dilde `META` + `fin-p` cihaz listesi, `apps.json` (CLAUDE.md → "Google Play — one switch").
