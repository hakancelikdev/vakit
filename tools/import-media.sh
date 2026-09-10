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

WIDTH=780   # phone mockup is 320 CSS px; ~2.4x covers retina without shipping 1206 px
QUALITY=80

for pair in $PAIRS; do
  lang="${pair%%:*}"; locale="${pair##*:}"
  src="$RAW/$locale"; dst="$OUT/screenshots/$lang"
  mkdir -p "$dst"
  for shot in $SHOTS; do
    [ -f "$src/$shot.png" ] || { echo "missing $src/$shot.png" >&2; exit 1; }
    cwebp -quiet -q "$QUALITY" -resize "$WIDTH" 0 "$src/$shot.png" -o "$dst/$shot.webp"
  done
  echo "screenshots/$lang ← $locale"
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
