#!/bin/bash
# Script to help scrape all pages from Track King Newbies Helpfile

# Base URL for archived site
BASE_URL="https://web.archive.org/web/20201025212101/https://sites.google.com/site/trackkingnewbieshelpfile"

# List of all pages to scrape (extracted from navigation)
declare -a PAGES=(
    "Home"
    "that-dirty-linen"
    "gm---bug-reports" 
    "owners-club"
    "important-links"
    "baby-steps"
    "charlie"
    "first-things-second"
    "horses"
    "training"
    "vet-services"
    "racing"
    "---jockeys"
    "finances"
    "mentor"
    "the-levels"
    "what-comes-next"
    "stakes-racing"
    "cup-races"
    "injury-profile"
    "agistment--facilities-and-money"
    "auctions"
    "breeding"
    "yearling-sales"
    "prestige"
    "forums"
    "things-to-do"
    "racing-silks"
    "betting"
    "training-track"
    "h-o-o-f"
)

echo "Track King Newbies Helpfile - Complete Page List"
echo "================================================"
echo "Total pages to scrape: ${#PAGES[@]}"
echo ""

for i in "${!PAGES[@]}"; do
    echo "$((i+1)). ${PAGES[$i]}"
    echo "   URL: $BASE_URL/${PAGES[$i]}"
done

echo ""
echo "Status:"
echo "✓ baby-steps - COMPLETED"
echo ""
echo "Next recommended pages to scrape:"
echo "1. charlie (referenced in baby-steps)"
echo "2. Home (main page)"
echo "3. horses (fundamental content)"
echo "4. training (fundamental content)"
echo "5. finances (fundamental content)"
