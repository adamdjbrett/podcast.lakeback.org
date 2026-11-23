#!/bin/sh
# Build the curriculum guide PDF from the markdown.
#   sh src/_materials/curriculum-guide/pdf/build.sh
# Needs: pandoc, uv (it fetches WeasyPrint), and Pango from Homebrew.
# Output: src/_materials/curriculum-guide/healing-the-sacred-curriculum-guide.pdf, a tagged PDF/UA-1 file
# with bookmarks from the headings and metadata from the values below.
set -eu
cd "$(dirname "$0")"

SRC=../healing-the-sacred-curriculum-guide.md
OUT=../healing-the-sacred-curriculum-guide.pdf
TODAY=$(date +%Y-%m-%d)

pandoc "$SRC" -f gfm -t html5 --wrap=none \
  --template template.html --lua-filter layout.lua \
  -M lang=en-US \
  -M pagetitle="Healing the Sacred: Restoring Onondaga Lake through Story, Ceremony, and Public Scholarship. Curriculum Guide" \
  -M author-meta="Adam DJ Brett" -M author-meta="Betty Hill (Lyons)" \
  -M description="A teaching companion to the Healing the Sacred podcast from the American Indian Law Alliance: series details, and for each of the eleven episodes a description, discussion questions, and resources." \
  -M keywords="Onondaga Lake, Onondaga Nation, Haudenosaunee, Great Law of Peace, land rights, Doctrine of Christian Discovery, Two Row Wampum, curriculum guide, podcast" \
  -M created="$TODAY" -M modified="$TODAY" \
  -o ../curriculum-guide.build.html

# The HTML sits beside the markdown so "assets/..." image paths resolve.
uvx --python 3.13 weasyprint ../curriculum-guide.build.html "$OUT" --pdf-variant pdf/ua-1 --dpi 300
rm ../curriculum-guide.build.html
echo "Wrote $OUT"
