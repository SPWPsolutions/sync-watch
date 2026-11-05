#!/bin/sh
# Build the Safari extension folder, then (first run only) generate the Xcode project around it.
# Needs full Xcode for the conversion step. Override the bundle id with BUNDLE_ID=... ./build.sh
set -eu
cd "$(dirname "$0")"
python3 build.py

BUNDLE_ID="${BUNDLE_ID:-com.woopersparty.WoopersParty}"
if [ -d xcode ]; then
  echo "Xcode project already exists in safari/xcode; it references build/extension, so just rebuild in Xcode."
  exit 0
fi
if ! xcrun --find safari-web-extension-converter >/dev/null 2>&1; then
  echo "safari-web-extension-converter not found. Install Xcode from the App Store, then run:"
  echo "  sudo xcode-select -s /Applications/Xcode.app/Contents/Developer"
  echo "and re-run ./build.sh to create the Xcode project."
  exit 1
fi
xcrun safari-web-extension-converter build/extension \
  --project-location xcode \
  --app-name "Wooper's Party" \
  --bundle-identifier "$BUNDLE_ID" \
  --swift --no-open --no-prompt
echo "Open safari/xcode/Wooper's Party/Wooper's Party.xcodeproj in Xcode and press Run."
