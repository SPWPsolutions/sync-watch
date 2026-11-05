# Safari port

The Safari extension is generated from `../extension`; there is no separate copy of the source.

## Build

1. Install Xcode from the App Store, then `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`.
2. Run `./build.sh` (optionally `BUNDLE_ID=com.you.WoopersParty ./build.sh`).
   - The first run creates `xcode/` with Apple's converter. Later runs only regenerate `build/extension`,
     which the Xcode project references, so rebuild in Xcode afterwards.
3. Open the project in `xcode/`, pick the macOS scheme, and press Run.
4. In Safari: Settings > Advanced > "Show features for web developers", then Develop > "Allow Unsigned
   Extensions" (needed each Safari launch for unsigned dev builds). Enable the extension in
   Settings > Extensions and grant website access for the streaming sites.

## What differs from the Chrome build (done by `build.py`)

- `"world": "MAIN"` content scripts become isolated loaders that inject the same file as a
  web-accessible `<script src>`. Safari's support for the manifest `world` key is unconfirmed.
- `safari/compat.js` loads first in content scripts, the popup and the background worker. It maps
  `browser` to `chrome` and falls back from `storage.sync` to `storage.local` if needed.
- `minimum_chrome_version` is dropped.

## Known caveats

- Safari asks for site access per website. Until the user grants it, the popup can't read the tab URL
  and shows the "unsupported" screen.
- Distribution needs an Apple Developer account to sign and ship via the App Store.
