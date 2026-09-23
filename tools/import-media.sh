#!/usr/bin/env bash
#
# Pulls the showcase screenshots and the preview video from app-store-toolkit
# into docs/assets/. Run from site/ after the toolkit captures change:
#
#   ./tools/import-media.sh
#
# Screenshots are the RAW per-language app captures (no marketing headline),
# because the page frames them in its own phone mockup. Languages without their
# own capture fall back to English — the same rule the App Store listing uses
# (see app-store-toolkit generator/src/infrastructure/assets.ts). Those
# languages point at the en/ directory through LANGS[*].shots in content.js, so
# no files are duplicated here.
#
# Requires: cwebp, ffmpeg.
set -euo pipefail

SITE="$(cd "$(dirname "$0")/.." && pwd)"
TOOLKIT="${TOOLKIT:-$SITE/../app-store-toolkit}"
RAW="$TOOLKIT/generator/public/screenshots/vakit"
PREVIEWS="$TOOLKIT/metadata/vakit/current/previews/iphone-6.9"
[ -d "$PREVIEWS" ] || PREVIEWS="$(ls -d "$TOOLKIT"/metadata/vakit/v-*/previews/iphone-6.9 | sort -V | tail -1)"
OUT="$SITE/docs/assets"

# site language → toolkit capture locale
PAIRS="tr:tr en:en-US ar:ar-SA bn:bn-BD da:da de:de-DE es:es-ES fr:fr-FR hi:hi id:id
it:it ja:ja ms:ms nl:nl-NL pt:pt-PT ru:ru th:th ur:ur-PK zh:zh-Hans"

# Must match SHOWCASE[*].img in content.js.
SHOTS="prayer-times widget discover qibla profile qada quran prayer-guide calendar zikirmatik"

# Captures known to be broken in the toolkit: the committed webp stays until the
# toolkit is re-shot. `*/qada`: the 2026-09-21 set captured the prayer guide
# under that name in every language but en-GB; the site keeps the 2026-09-10
# qada screens.
KEEP="${KEEP-*/qada}"

WIDTH=780   # phone mockup is 320 CSS px; ~2.4x covers retina without shipping 1206 px
QUALITY=80

for pair in $PAIRS; do
  lang="${pair%%:*}"; locale="${pair##*:}"
  src="$RAW/$locale"; dst="$OUT/screenshots/$lang"
  mkdir -p "$dst"
  for shot in $SHOTS; do
    case " $KEEP " in *" $lang/$shot "*|*" */$shot "*) echo "  kept $lang/$shot (KEEP)"; continue ;; esac
    [ -f "$src/$shot.png" ] || { echo "missing $src/$shot.png" >&2; exit 1; }
    cwebp -quiet -q "$QUALITY" -resize "$WIDTH" 0 "$src/$shot.png" -o "$dst/$shot.webp"
  done
  echo "screenshots/$lang ← $locale"
done

# iPad and Mac: the "devices" section. Must match DEVICES in content.js.
# iPad has a capture for every language above; Mac only for Turkish and
# English, so every other page shows the English Mac windows. The toolkit's
# iPad "qada.png" is really the prayer guide, hence the rename.
IPAD="prayer-times:prayer-times discover:discover quran:quran hadith:hadith accounting:accounting qada:prayer-guide"
MAC="prayer-times discover calendar zikirmatik prayer-guide"

for pair in $PAIRS; do
  lang="${pair%%:*}"; locale="${pair##*:}"
  src="$RAW/$locale/_ipad"; dst="$OUT/screenshots/$lang/ipad"
  mkdir -p "$dst"
  for shot in $IPAD; do
    from="${shot%%:*}"; to="${shot##*:}"
    [ -f "$src/$from.png" ] || { echo "missing $src/$from.png" >&2; exit 1; }
    cwebp -quiet -q "$QUALITY" -resize 900 0 "$src/$from.png" -o "$dst/$to.webp"
  done
  echo "screenshots/$lang/ipad ← $locale"
done

for pair in tr:tr en:en-US; do
  lang="${pair%%:*}"; locale="${pair##*:}"
  src="$RAW/$locale/_mac"; dst="$OUT/screenshots/$lang/mac"
  mkdir -p "$dst"
  for shot in $MAC; do
    [ -f "$src/$shot.png" ] || { echo "missing $src/$shot.png" >&2; exit 1; }
    cwebp -quiet -q "$QUALITY" -resize 1200 0 "$src/$shot.png" -o "$dst/$shot.webp"
  done
  cwebp -quiet -q "$QUALITY" -resize 360 0 "$src/menu-bar.png" -o "$dst/menu-bar.webp"
  echo "screenshots/$lang/mac ← $locale"
done

# Apple Watch: Turkish and English captures only, like the Mac.
WATCH="prayer-dial qibla dhikr complications"
for pair in tr:tr en:en-US; do
  lang="${pair%%:*}"; locale="${pair##*:}"
  src="$RAW/$locale/_watch"; dst="$OUT/screenshots/$lang/watch"
  mkdir -p "$dst"
  for shot in $WATCH; do
    [ -f "$src/$shot.png" ] || { echo "missing $src/$shot.png" >&2; exit 1; }
    cwebp -quiet -q "$QUALITY" -resize 396 0 "$src/$shot.png" -o "$dst/$shot.webp"
  done
  echo "screenshots/$lang/watch ← $locale"
done

# More iPhone screens (SHOWCASE_MORE in content.js). Every language has the
# first five; the rest exist only where the toolkit captured them (tr, en).
EXTRAS="prayer-nafile mushaf esma-ul-husna tesbihat accounting-year hadith search nearby-mosques lock-screen-live-activity imsakiye"
for pair in $PAIRS; do
  lang="${pair%%:*}"; locale="${pair##*:}"
  src="$RAW/$locale/extras"; dst="$OUT/screenshots/$lang/more"
  mkdir -p "$dst"
  for shot in $EXTRAS; do
    [ -f "$src/$shot.png" ] || continue
    cwebp -quiet -q "$QUALITY" -resize "$WIDTH" 0 "$src/$shot.png" -o "$dst/$shot.webp"
  done
  echo "screenshots/$lang/more ← $locale"
done

# Preview video: Turkish has its own recording, every other language uses the
# English one (as on the App Store). Audio is dropped — the page plays it muted.
mkdir -p "$OUT/video"
for v in tr:tr en:en-US; do
  name="${v%%:*}"; locale="${v##*:}"
  src="$PREVIEWS/$locale/01-sky.mov"
  ffmpeg -v error -y -i "$src" -an -vf "scale=640:-2" -c:v libx264 -preset slow -crf 27 \
    -profile:v high -pix_fmt yuv420p -movflags +faststart "$OUT/video/sky-$name.mp4"
  ffmpeg -v error -y -i "$src" -frames:v 1 -vf "scale=640:-2" "$OUT/video/sky-$name-poster.png"
  cwebp -quiet -q "$QUALITY" "$OUT/video/sky-$name-poster.png" -o "$OUT/video/sky-$name-poster.webp"
  rm "$OUT/video/sky-$name-poster.png"
  echo "video/sky-$name.mp4 ← $locale"
done
