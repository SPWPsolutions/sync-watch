# Teleparty 5.8.7 UI Customization Guide

The target is extension `oocalimimngaihdkbihfgmpkcpnmlaoa`, v5.8.7, Manifest V3.

## 0. What the protection actually is

There is no real obfuscation. These are ordinary **webpack 5 production bundles** built with terser minification and TypeScript. Identifiers are mangled, but strings, JSX structure, CSS and HTML templates are all in plain text. Some browse-scripts still carry `;// ./src/Teleparty/...` module path comments, which leak the source tree layout. Nothing has to be decrypted. You only need formatting and a map.

## 1. Workspace layout

| Path | Contents |
|---|---|
| `original/` | Untouched copy of the installed extension |
| `pretty/` | Prettier-formatted mirror of every JS, CSS and HTML file |
| `pretty/*.webcrack.js` | webcrack output for popup, background and ci, with JSX restored and syntax cleaned up (**read these**) |
| `unpacked/` | Raw webcrack output, also for the netflix and youtube content scripts |
| `extracted/popup_css_modules/` | 12 CSS modules from the popup bundle, with hashed class names annotated (`.ckR0…/*button*/`) and an `index.json` class map |
| `extracted/content_html_templates/` | 43 HTML/CSS template strings from the content script, with an `index.json` listing element ids and `{PLACEHOLDER}` tokens |
| `extracted/content_raw_modules/`, `extracted/ci_raw_modules/` | raw-loader modules: the sidebar iframe wrapper, overlay critical CSS, and the join banner |
| `extracted/assets/` | Editable static assets: `img/`, `css/`, `html/`, `web/`, `_locales/`, popup HTML and CSS, manifest |
| `extracted/branding_inventory.tsv` | Every brand string, brand URL, store URL and logo reference, listed per file with its byte offset (1,624 hits) |
| `mod/` | Loadable scaffold: `key`/`update_url` stripped, `custom/` injection hooks wired in |
| `tools/` | Extractors, `branding_inventory.js`, `apply_patches.js` with `patches.example.json` |

To re-run everything after an upstream update, point the tools at the new version directory and rerun them. Each tool's usage line is in its header comment.

## 2. Architecture

### Popup (`popup_react.html` → `popup_react_bundled.js`)
- **React 18** with `createRoot` on `#popup-app`, rendered with `jsx-runtime`. Markdown rendering uses an embedded react-markdown/unified stack (pretty lines ~21000–29400).
- **CSS:** css-loader modules injected by style-loader at runtime into `<head>`, plus the global tokens in `popup_global.css`.
- **State:** there is no Redux or Zustand. The root component holds everything in about 20 `useState` hooks and passes them down as props. Side effects go through a message bus (`N.nn(msg)` / `N.sendMessageToTabAsync`) to the background worker (`"Service_Background"`) and the content script (`"Content_Script"`). Message classes are `Fu`/`ku`/`Su` subclasses at about line 18961. Persistence goes through `chrome.storage.local` (wrapper `go`).
- **Sole context:** `Pu = createContext(null)` holds the root DOM ref, which context menus use for outside-click detection.

**Component map** (line numbers refer to `pretty/popup_react_bundled.webcrack.js`):

| Line | Minified name | Role |
|---|---|---|
| 30698 | `_Component6` | **App root**: state, tab detection, session create/join, layout |
| 30455 | `Ff` | **Home router**: chooses SupportedServices, Error, InSession, CreateParty or SignIn |
| 19858 | `_Component5` | **Header**: user info, premium badge, settings menu, `tp_gradient.svg` logo |
| 30108 | `_Component3` | **Create Party** view ("Create a Teleparty", control lock, reactions toggle, "Start the party") |
| 20902 | `Go` | **In-session** view ("Party Management", copy link, chat sidebar toggle, report a problem) |
| 20416 | `_Component4` | **Sign-in prompt** ("Sign Up For Teleparty", "Continue as Guest") |
| 20492 | `_o` | **Supported services** grid (driven by the `vu` array, line 18462) |
| 20667 / 20613 | `Bo` / `So` | Error view / error wrapper |
| 20872 | `$o` | Review prompt |
| 20747 / 20719 | `Ro` / `Oo` | Copy-link row / text input |
| 20810 / 20837 | `Po` / `No` | Toggle / labeled toggle |
| 19093 / 19142 / 19159 | `Nu` / `$u` / `Gu` | Context menu / menu option / divider |
| 20403 / 20274 / 20997 / 20252 | `Co` / `Do` / `_Component2` / `_Component` | Section header / popup label / info label / ellipsis spinner |

**Constants** (around line 12733): `C=api.teleparty.com`, `x=www.teleparty.com` (used for signup, join links and `/premium`), `_=files.teleparty.com`, `R=x+/manage-subscription`, `M=x+/premium`. The **services list** `vu` is at line 18462. Each entry holds domains, serverName, homepage, `premium`, `iconUrl` and a banner path.

### Background (`background_service_bundled.js`)
- Handles socket.io (`socketio.teleparty.com`), session API, analytics (PostHog `us.i.posthog.com`, `metis.teleparty.com`, `data3.netflixparty.com`), install and uninstall URLs (`teleparty.com/uninstall?userId=…`), and the onInstalled tab.
- It contains no UI. Rebranding only touches the install tab URL, the uninstall URL and log prefixes.

### Content scripts (44 services × `*_content_bundled.js` + `*_injected_bundled.js`; 44 browse-script pairs)
- The popup injects them on demand with `chrome.scripting.executeScript` using `["lib/tp_libraries_min.js", <service script>]`. The manifest declares no `content_scripts`.
- **Each content bundle embeds the same shared UI core.** Any in-page change has to be applied to all 44 files, so use `apply_patches.js` with a glob.
- In-page UI is built from string templates with `{PLACEHOLDER}` tokens, replaced by `chrome.runtime.getURL(...)` (for example `{EXTENSION_LOGO}` → `img/tp_logo.svg`). Styling comes from `css/chat.css`, `alert.css`, `overlay.css`, `all-chat.css` and `floating-chat.css`, loaded via `getURL`. **These are plain files and can be edited directly.**
- **Main limit:** the chat sidebar is an iframe (`raw_module_5089`: `<iframe id="tpChatFrame" src="{CHAT_URL}">`) where `CHAT_URL = https://www.teleparty.com/sidebar?t=…&id=<extId>`. **The chat UI is served remotely by Teleparty and cannot be edited in the extension.** Locally you control only the wrapper, the overlay icons, alerts, All Chat and floating chat.
- `ci_bundled.js` holds the injected "join party" banner (`#tp-banner`). Its template is `extracted/ci_raw_modules/raw_module_3053.html`.

## 3. Branding locations

| Item | Where | How |
|---|---|---|
| Extension name and description | `_locales/en/messages.json` (`extName`, `extDescription`) | Edit the JSON |
| Toolbar and store icon | `img/icon.png` (16/48/128 in manifest) | Replace the file |
| Popup header logo | `img/tp_gradient.svg` (hard-coded `/img/tp_gradient.svg` ×2 in popup bundle) | Replace the file |
| In-page logos | `img/tp_logo.svg`, `img/icon_white.svg`, `img/icon_gradient.svg` | Replace the files (same names) |
| Popup title | `popup_react.html` `<title>` | Edit |
| Popup UI strings | `popup_react_bundled.js`: "Create a Teleparty", "Sign Up For Teleparty", "Enjoying Teleparty?…", "Sorry, Teleparty doesn't support…", "Subscribe to Teleparty Premium…", "Welcome to Teleparty!…" | `apply_patches.js` (anchors verified unique) |
| In-page strings | All content bundles: "Teleparty \| Disconnected from party", "Teleparty \| Are you still there?", "Teleparty All Chat…", "Open Teleparty", "Start a Teleparty" (browse scripts) | `apply_patches.js` with glob `content_scripts/*/*_content_bundled.js` |
| Colors (global) | `popup_global.css` `:root` tokens (`--base-red`, `--grad-red`, `--grad-purple`, `--base-black` …) | Edit, or override in `custom/popup_overrides.css` |
| Colors (hard-coded) | CSS modules, e.g. button gradient `#e34248 → #9e55a0` in module 1811 (`.ckR0FRSC5_YKidptL937.kyZ65lhFTf_kLCrwiBgx`) | Override with `!important` (see §4) |
| Fonts | `popup_global.css` imports Poppins and Roboto from Google Fonts; content script loads Poppins | Edit the `@import` |
| Review link | Chrome Web Store reviews URL (popup ×1, every content bundle ×1) | Patch |
| Web URLs | `https://www.teleparty.com` (signup, `/premium`, `/join/<id>`, `/sidebar`, `/uninstall`) | **Leave these alone unless you run your own backend.** Auth, sessions and chat all depend on them. |
| Privacy and terms | **Not present in any bundle.** They are linked only from the remote teleparty.com pages and sidebar. | Add your own links via injection (§4) |

The full per-file list is in `extracted/branding_inventory.tsv`.

## 4. Modification techniques (no source reconstruction)

### A. Asset swap (zero code)
Replace files in `mod/img/`, `mod/css/` and `mod/_locales/` with the same filenames. This covers about 70% of visual rebranding.

### B. Additive injection into the popup (recommended for new UI)
`mod/popup_react.html` already loads:
- `custom/popup_overrides.css`, after `popup_global.css`. Overriding tokens here changes the whole palette.
- `custom/popup_inject.js`, after the bundle. A MutationObserver waits for React to mount, then appends DOM. The CSP (`script-src 'self'`) allows local scripts.

Caveats:
- style-loader appends CSS-module `<style>` tags at runtime, *after* your stylesheet. Use `!important` or higher specificity.
- Hashed class names are stable for this build only. Get them from `extracted/popup_css_modules/index.json`. A more update-resilient option is attribute selectors on the stable prefix, for example `[class*="…"]`, or structural selectors under `#popup-app`.
- React re-renders can wipe nodes you insert *inside* React-owned trees. Append to `#popup-app` itself or to a sibling, or re-apply from the observer.

Example of retheming the primary button:
```css
.ckR0FRSC5_YKidptL937.kyZ65lhFTf_kLCrwiBgx { background-image: linear-gradient(90deg,#0ea5e9,#6366f1) !important; }
```

### C. Patching the minified React bundle in place
JSX survives minification as `(0,u.jsx)("div",{className:…,children:…})`. Two workable approaches:
1. **String or element patch:** find a unique anchor (all those in §3 are verified unique) and replace it. To add an element next to "Start the party", replace the anchor string with a new child array entry in the minified form, for example `children:["Start the party",(0,u.jsx)("small",{children:" ✓"})]`. Confirm the local alias for the jsx runtime first, because the minified name differs from the pretty file. Check that the result parses with `node --check`.
2. **Hook the root:** the last statement of the bundle is `(0,If.H)(document.getElementById("popup-app")).render(...)` (minified names differ). Wrapping that render call is the single choke point for a whole-app wrapper, for example a footer component around the root element.

Workflow: locate the code in `pretty/popup_react_bundled.webcrack.js` (readable JSX), then copy a short unique substring from `original/popup_react_bundled.js` (minified) as the anchor. Add it to a patches JSON, run `node tools/apply_patches.js mod my_patches.json`, then run `node --check`.

### D. In-page (content script) UI
- Restyle by editing `mod/css/*.css`. These files are loaded by URL, so a reload picks the changes up.
- Templates: anchors in `extracted/content_html_templates/` (for example tpl_001 is the overlay icon bar `#tpIconContainer`). Patch them across all 44 bundles with a glob.
- To add new in-page UI, add your own script to the popup's injection list. A less invasive route is to declare a separate `content_scripts` entry in `mod/manifest.json` that waits for `#chat-wrapper[tpInjected]`.

## 5. Loading and testing

1. `chrome://extensions` → Developer mode → **Load unpacked** → select `mod/`.
2. `key` and `update_url` have already been removed. With the key left in, the unpacked copy would claim the same extension ID as the store install, and Chrome would update over it.
3. **Do not edit the installed directory in place.** Chrome Web Store installs are verified against `_metadata/verified_contents.json`. Any modified file marks the extension as corrupted, and Chrome repairs or disables it.
4. Disable the store copy while testing to avoid two overlays on the same page.
5. The popup is inspected via right-click on the popup → Inspect. The service worker is inspected from its link on the extensions page.

## 6. Where to work for each UI feature

| Feature | Location |
|---|---|
| Popup layout, header, create/join flows | `popup_react_bundled.js` (components above) and popup CSS modules 2359, 1869, 1811 |
| Service list, logos, banners, premium flags | `vu` array (popup line 18462), `img/service_logos/`, `img/service_banners/` |
| On-video overlay buttons | content template tpl_001 (`#tpIconContainer`), `css/overlay.css`, `raw_module_7076` |
| Alerts (disconnect, idle) | tpl_002/003 (`#alert-dialog-wrapper`), `css/alert.css` |
| Chat sidebar wrapper | `raw_module_5089`, `css/chat.css` (inner chat is remote) |
| All Chat / floating chat | tpl_015–043, `css/all-chat.css`, `css/floating-chat.css` |
| Join-party banner | `ci_bundled.js`, `raw_module_3053.html` |
| Bug report UI | `bug_report/bug_report_react_bundled.js`, `css/bug-report.css` |
| Emoji picker | `web/emojiPicker.html` and `.js` |

## 7. Scope notes
- Server-side features (chat UI, auth pages, premium, privacy and terms) live on teleparty.com and are outside the scope of local modification.
- The bundles carry a proprietary copyright header from WP Interactive Media. Local personal modification is one thing. Publishing a rebranded copy that still runs on Teleparty's backend is another, and you would need a licence or your own backend for that.
