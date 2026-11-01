# Teleparty UX/UI Analysis (v5.8.7)

Source of truth for reimplementing the Teleparty experience as a web client. All findings derive from the shipped extension bundle: `popup_react_bundled.js` (React popup), `popup.css` / `popup_global.css` / `normalize.css` (design system), `html/chat.html` + `css/*` (in-page chat sidebar), and `_locales/en/messages.json`.

The UI splits into **two surfaces**:
1. **Popup** — the 332px React panel opened from the toolbar icon. Party lifecycle control (sign-in, create, share, settings, disconnect).
2. **Chat sidebar** — a DOM overlay injected into the streaming page by a content script. In-party chat, reactions, members, GIFs.

---

## 1. Visual Design System (Design Tokens)

All tokens come from `popup_global.css` and `popup.css` `:root`. This is a **dark-first, single-theme** system (no light mode). There is no theme switching.

### Color palette

| Token | Hex | Role |
|---|---|---|
| `--base-red` | `#ef3e3a` | Primary brand / CTA background |
| `--active-red` | `#ea0f0a` | CTA hover |
| `--grad-red` | `#e34248` | Gradient start, link color |
| `--bright-red` | `#ff626f` | Accent |
| `--grad-purple` / `--hot-purple` | `#9e55a0` / `#6f4cfd` | Gradient end (premium/accent buttons) |
| `--base-blue` | `#6889ff` / `#4da9ff` | Info, calendar date chips |
| `--base-green` | `#5fc695` / `#24d154` | Success, active toggles |
| `--base-orange` | `#ff8d4c` | Warning accent |
| `--patreon` | `#f96854` | Patreon link |
| `--base-white` | `#fafafa` | Primary text on dark |
| `--white-5 … --white-35` | `#f0f0f0 → #787878` | Text/icon greys (lighter→darker) |
| `--base-black` | `#191919` | App background |
| `--black-5 … --black-35` | `#5a5a5a → #0a0a0a` | Surface/elevation greys (lighter→darker) |

**Signature gradient** (premium CTAs, service buttons, schedule button):
`linear-gradient(140deg, #dc4046, #9e55a0)` — red→purple. Service-select buttons use a thin gradient *border* (`linear-gradient(90deg, #e34248, #9e55a0)`) that fills on hover.

**Elevation convention:** app bg `--base-black` (#191919); cards/rows one step darker `--black-25` (#1e1e1e) or `--black-20` (#282828); dividers `--black-10` (#464646).

### Typography

- **Primary font:** `Poppins` (Google Fonts, weights 400–900). Fallback `sans-serif`. Roboto is also imported but Poppins dominates.
- Weight tokens: `--regular:400 --medium:500 --semi-bold:600 --bold:700 --extra-bold:800 --black:900`.
- Type ramp (from named classes):
  - `.extension-title` — 16px / 500 / `--base-red`, letter-spacing .2px (the "Teleparty" wordmark)
  - `.heading` — 14px / 700 / white
  - `.extension-txt` — 14px / 400 / `--white-15` (body)
  - `.extension-description` — 13px / 500 / `--white-10`
  - `.extension-txt-indicator` — 11px / 400 / `--white-35` (captions)
  - section headers (`.no-error h2`) — 18px / 600

### Spacing / layout / shape

- **Popup width:** `--popup-width: 332px` (fixed). Max height `600px` (`.no-error` content area 500px). `overflow-x:hidden`.
- Border radius: **2px** on buttons/cards (the house value), 4px on inputs and the app shell.
- Standard button: `.extension-btn` — full-width, `padding:10px 0`, radius 2px, margin 10px vertical, `background:--base-red` → hover `--active-red`, 14px/500 white, flex-centered.
- `--transition-time: 0.25s` is the global animation constant; CTAs use `.3s ease`; hover lift on primary buttons = `translateY(-2px)`.
- Custom 2–4px scrollbar, red thumb (`--base-red`) on black track.

### Iconography

PNG/SVG assets in `img/`. Icons are recolored with CSS `filter` chains (e.g. grey→white on active state in `.section-selector`). Brand icon is `img/icon.png` (the red "Tp" mark), used inline in copy to tell guests what to click.

---

## 2. Component Architecture

The popup is a **React class+function hybrid** (React 18 — `useSyncExternalStore`, `useTransition`, `useDeferredValue` present). Not styled-components; styling is **CSS Modules** (hashed class objects referenced as `Ru.userInfo`, `Zu.button`, `Zu.gradient`, etc.) plus the global stylesheets above.

### Popup tree

```
PopupApp (root, mounts into #popup-app)
│  state: spinning, showChat, partyUrl, userData, extensionTab,
│         errorMessage, errorMessageUrl, controlLock, reactionsDisabled,
│         isPremiumService, needsPermission, videoDetected,
│         unavailableServices, announcementsForService, isServiceUnavailable
│
├─ Header / AccountBar               (userInfo: avatar, nickname, email, ★ Premium Member badge,
│                                      "Manage Account" / "Sign out", status setter)
│
└─ <Router> — chooses ONE screen (see state machine §3)
   ├─ ServiceSelectScreen  (_o)        — pick streaming service / unavailable-service list
   ├─ ErrorScreen          (Bo)        — errorMessage + optional URL, dismissible flag
   ├─ InPartyScreen        (Go)        — party management (share URL, toggles, disconnect)
   ├─ HomeScreen           (_Component3)— "Start the party" CTA + settings + announcements
   └─ SignInScreen         (_Component4)— sign up / sign in gate
```

### Shared popup primitives

| Component | Role |
|---|---|
| `No` (ToggleRow) | Label + iOS-style switch (`.switch/.slider/.round`, green when on). Used for *Only I have control*, *Disable Reactions For Party*, *Show Chat Sidebar*. |
| `Ro` (UrlField) | Read-only party URL input + copy affordance (`.popup-url-container`). |
| `Co` / `Do` | Section heading ("Party Management") / descriptive paragraph. |
| `_Component` | Animated "Loading`...`" ellipsis (`.ellipsis-anim`, staggered dot opacity keyframes). |
| `Gu` | Divider (`.extension-border-*`). |

### Chat sidebar tree (`html/chat.html`, injected)

```
#chat-wrapper
├─ #tp-member-menu (slide-in)        — "Party Members" list, back button
└─ #chat-container
   ├─ #chat-header-container
   │   ├─ wordmark "Teleparty" (.extension-title)
   │   ├─ tools: return-to-video, copy-link, member count (friends icon + count),
   │   │         change-settings (user icon), minimize chat
   │   └─ #sidebar-tabs-container: [Party tab] [Friends tab]   (active = .sidebar-active)
   ├─ #chat-icon-container              — avatar picker ("Click to switch icon")
   ├─ #setting-edit / #settings-save    — nickname editor (Save Changes / Cancel)
   ├─ #chat-history-container           — message stream
   └─ #chat-input-container
       ├─ #reaction-holder              — 6 reactions: heart, angry, cry, laugh, surprise, fire
       ├─ #gif-emoji-switcher           — emoji picker (iframe) + Tenor GIF search
       └─ #chat-input (contenteditable, "Type a message…")
```

---

## 3. UI State Machine

The popup renders exactly one screen. Router logic (decompiled, `PopupApp` return):

```
if (!userData || userData.signedIn || !<gatingCondition> || partyUrl || spinning):
    if (spinning)        -> ServiceSelectScreen        // loading / service picker
    elif (errorMessage)  -> ErrorScreen
    elif (partyUrl)      -> InPartyScreen              // a session exists
    else                 -> HomeScreen                 // signed in, no party yet
else:
    -> SignInScreen                                    // not signed in and sign-in required
```

```
                       ┌─────────────┐
                       │  (popup open)│
                       └──────┬──────┘
                              │ load userData + extensionTab from background
                              ▼
          not signed in ┌───────────┐ signed in
            ┌───────────│  Router   │───────────┐
            ▼           └───────────┘            ▼
     ┌────────────┐                      partyUrl set? ──yes──▶ ┌────────────┐
     │ SignInScreen│                             │ no           │ InPartyScreen│
     └─────┬──────┘                              ▼              └──────┬──────┘
           │ sign in                      ┌────────────┐  Disconnect   │
           └─────────────────────────────▶│ HomeScreen │◀──────────────┘
                                          └─────┬──────┘
                                "Start the party"│ createSessionHandler
                                                 ▼
                                   (spinning = Loading…) ──▶ background creates session
                                                 │ partyUrl returned
                                                 ▼ -> InPartyScreen
             any step error ──▶ ErrorScreen ──(dismiss, if canDismissError)──▶ back
```

**Create-party CTA is itself a mini state machine** (`HomeScreen` button label, in priority order):
1. service under maintenance → "`{service}` is under maintenance" (locked, lock icon)
2. not premium on premium service → "Upgrade to premium to host" (locked)
3. no video playing → "Play a video first"
4. in browse mode → "Select a video first"
5. otherwise → "★ Start the party" (★ shown for premium users)

Permission handoff: a `PENDING_PERMISSION_START` key is stashed in `chrome.storage.local` while host permission is requested, then consumed to resume session creation. Sign-in uses a `SIGN_IN_CREATE` intent token (sign in *then* immediately create).

---

## 4. Key User Flows

### A. Create → Share → Sync (host)
1. Host opens a video on a supported service, clicks the Tp toolbar icon.
2. Popup → **HomeScreen**. If not signed in, **SignInScreen** first (`SIGN_IN_CREATE` resumes the create afterward).
3. Host optionally sets **Only I have control** and **Disable Reactions For Party** toggles before starting.
4. Clicks **Start the party** → button shows **Loading…** (spinning). If host permission missing, permission prompt (`PENDING_PERMISSION_START`), then resumes.
5. Session created → **InPartyScreen** with the party URL.
6. Host copies URL (`Ro` field) and sends it to guests. Copy: *"Share the URL below so others can join… navigate to this URL and then click on the red [icon] icon to join."*
7. Chat sidebar injects into the page; playback events sync to guests.

### B. Join (guest)
1. Guest receives the link, navigates to that URL on the service.
2. Guest clicks the red Tp icon to join (explicitly called out in copy — joining is **not** automatic from the link).
3. Guest lands in the synced session with the chat sidebar.

### C. In-party management (InPartyScreen)
- **Show Chat Sidebar** toggle → sends a visibility message to the content script (`setShowChat`).
- **Disconnect** button (red) → tears down the session, returns to HomeScreen.
- Secondary "Leave a review" link.

### D. Account
- Header shows avatar, nickname (or displayName), email, **★ Premium Member** badge if `has_premium`.
- **Manage Account** / **Sign out** actions; status setter (`SET_USER_STATUS`).

### E. Scheduling (secondary feature, `popup.css`)
- Google Calendar connect flow (`#link-google-calendar`, `#disconnected-calendar`), month grid, events list, and a "Schedule a party" sheet. Gradient schedule button. This is an auxiliary surface — treat as phase-2 for a web client.

---

## 5. Key Interaction / UX Patterns

- **Presence:** member count in the chat header (friends icon + numeric count), tap to open the **Party Members** slide-in list. Party vs Friends tabs.
- **Sync feedback:** "Return to video" tool in chat header re-syncs a drifted guest to the host. Playback control gated by **control lock** (host-only vs all).
- **Reactions:** 6 fixed floating reactions (heart/angry/cry/laugh/surprise/fire), each with static + animated GIF states. Can be disabled party-wide by host.
- **Loading states:** inline animated ellipsis on the CTA ("Loading…"), not spinners/skeletons. The whole popup is `spinning`-gated to the ServiceSelect/loading view.
- **Error states:** dedicated `ErrorScreen` with message, optional link, and a `canDismissError` flag controlling whether the user can dismiss and return.
- **Locked/gated CTAs:** disabled buttons keep their place but swap to a greyed gradient (`Zu.gradientLocked`) + lock icon + explanatory sub-text, rather than disappearing. Premium gating is surfaced as "Upgrade to premium to host".
- **Toggles:** consistent iOS switch component across popup and chat (green = on).
- **Micro-interactions:** 0.25s transitions everywhere; primary buttons lift 2px on hover; service buttons animate a gradient border fill.
- **Guest education:** repeated inline instruction (with the Tp icon glyph) that guests must click the red icon — the single biggest onboarding friction point the original UI designs around.

---

## 6. Supported Services

From the bundle: **Netflix, Disney+, Hulu, HBO Max / Max, Amazon (Prime Video), YouTube, Crunchyroll, Paramount+**. Each service entry carries `serviceName`, `homepage`, and optionally a `serverName`; some are premium-gated (`isPremiumService`) and some can be flagged unavailable/under-maintenance (`unavailableServices`, `isServiceUnavailable`).

---

## 7. Recommendations for the Web Client

**Keep (identity-defining, replicate faithfully):**
- Poppins + the dark `#191919` canvas + red/purple gradient. These *are* the brand.
- 2px radius, iOS toggles, inline "Loading…" ellipsis, red primary / gradient-premium button hierarchy.
- The create-CTA state ladder (maintenance → premium → no-video → ready) — it communicates gating without dead-ends.
- Explicit share copy and the "click the red icon" guest instruction (adapt wording — a web client can likely make join a direct link, removing this friction entirely; see below).

**Adapt (extension assumptions that don't hold on the web):**
- The fixed **332px popup** is a toolbar constraint. On the web, promote the same screens to a responsive panel/modal (min ~320px, cap ~480px to preserve proportions) or a sidebar. Keep the one-screen-at-a-time router model.
- **Service availability / `extensionTab` / `videoDetected`** come from the active browser tab via content scripts. A web client has no toolbar tab context — replace with explicit "paste a video link / choose service" input, or an embedded player.
- **Guest join via "click the red icon"** exists only because the extension can't auto-join from a URL. A web client should make the party link join directly — drop that instruction and the associated friction.
- **Chat sidebar is an injected DOM overlay.** On the web, make it a first-class layout region (flex column: header → tabs → history → input) rather than an injected absolutely-positioned panel.

**Build as proper tokens:** lift §1 into CSS custom properties / a theme object verbatim so the two surfaces (control panel + chat) stay visually unified the way the original does via shared `.extension-*` classes.

**Phase order:** (1) sign-in + home + create + share + in-party + chat/reactions/members = the core loop. (2) scheduling + calendar. (3) avatar picker / nickname / status niceties.

---

## 8. ASCII Mockups of Critical States

```
HOME (signed-in, ready)            IN-PARTY                          SIGN-IN
┌──────────────────────────┐      ┌──────────────────────────┐      ┌──────────────────────────┐
│ (o) Jane  ★ Premium      │      │ (o) Jane  ★ Premium      │      │        Teleparty         │
│     jane@mail.com  [⚙]   │      │     jane@mail.com        │      │                          │
│ ──────────────────────── │      │ ──────────────────────── │      │  Watch together in sync  │
│ Party Settings           │      │ Party Management         │      │                          │
│  Only I have control [○] │      │  Show Chat Sidebar   [●] │      │  ┌────────────────────┐  │
│  Disable Reactions   [○] │      │ ──────────────────────── │      │  │   Sign Up For       │  │
│                          │      │ Share the URL below so   │      │  │   Teleparty         │  │
│ ┌──────────────────────┐ │      │ others can join. They    │      │  └────────────────────┘  │
│ │  ★ Start the party   │ │      │ navigate here + click 🔴 │      │     (red→purple grad)    │
│ └──────────────────────┘ │      │ ┌────────────┬─────────┐ │      │                          │
│  (red→purple gradient)   │      │ │ party URL… │  Copy   │ │      │  Already have an acct?   │
│ Tell guests to click the │      │ └────────────┴─────────┘ │      │  Sign in                 │
│ red 🔴 icon to join.     │      │ ┌──────────────────────┐ │      └──────────────────────────┘
└──────────────────────────┘      │ │     Disconnect       │ │
                                   │ └──────────────────────┘ │      CTA LOCKED (non-premium)
LOADING                            │       Leave a review     │      ┌──────────────────────────┐
┌──────────────────────────┐      └──────────────────────────┘      │ │ 🔒 Upgrade to premium  │ │
│      Loading • • •       │                                         │ │    to host             │ │
└──────────────────────────┘      CHAT SIDEBAR (in page)             │ (greyed gradient, locked) │
                                   ┌────────────────────┐            │ Subscribe to Premium to  │
ERROR                              │ Teleparty  🔗 👥3 ⚙ │            │ host Netflix parties.    │
┌──────────────────────────┐      │ [ Party ] [ Friends ]│            └──────────────────────────┘
│   Something went wrong    │      │─────────────────────│
│   {errorMessage}          │      │  Alex: nice!        │
│   [ link ]                │      │  You: 😂            │
│   ( Dismiss )  ← if       │      │─────────────────────│
│   canDismissError         │      │ ❤ 😠 😢 😂 😮 🔥    │
└──────────────────────────┘      │ [Type a message…] 😊│
                                   └────────────────────┘
```

---

### File references
- Popup React: `production-extension/popup_react_bundled.js` (prettified: `pretty/popup_react_bundled.webcrack.js`)
  - Router: `~line 30488`; Create CTA ladder: `~30254–30348`; InPartyScreen `Go`: `~20902`; AccountBar: `~19905`; SignIn `SIGN_IN_CREATE`: `~18956 / 20390`.
- Design tokens: `production-extension/popup_global.css`, `production-extension/popup.css`
- Chat sidebar: `production-extension/html/chat.html`, `production-extension/css/chat.css` (+ `floating-chat.css`, `all-chat.css`, `overlay.css`, `alert.css`)
- Copy: `production-extension/_locales/en/messages.json`
