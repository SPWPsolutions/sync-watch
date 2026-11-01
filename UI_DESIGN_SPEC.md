# Watch Party — Web Client UI/UX Design Specification

Production design spec for the watch-party sync web client. Replaces the bare demo at
`server/public/index.html`. The goal is a clean, modern, accessible client (2024 standards)
that is original in look — not a reskin of the Teleparty extension — while covering the full
feature set the backend already speaks (see `PROTOCOL_SPEC.md`).

**Backend:** WebSocket server `wss://watch-party-pw57bakb5a-uc.a.run.app`
**Core loop:** create party → share link → join → synced playback + chat + presence
**Video sources:** YouTube URL, direct video file URL, local file upload

---

## 0. Design Principles

1. **The video is the product.** Everything else is chrome. The player owns the largest,
   quietest region; controls and chat frame it without competing for attention.
2. **Sync is a feeling, not a log.** Drift, buffering, play/pause, and "who's behind" are
   surfaced as calm ambient signals, never as a scrolling console.
3. **Mobile-first, one hand.** The primary loop (join → watch → chat) must work on a phone
   held in portrait, thumb on the input.
4. **Accessible by default.** Every control is reachable by keyboard, announced to screen
   readers, and legible at WCAG AA contrast in both themes.
5. **Fast feedback, honest state.** Optimistic UI for local actions (chat send, play);
   explicit states for connection, loading, empty, and error — no silent failures.

---

## 1. Design System

### 1.1 Color — tokens

Dark theme is the default (watching video in a dim room). Light theme is a first-class
opt-in. Define all color as CSS custom properties on `:root`; redefine under the dark/light
guards. Never hardcode a hex outside `:root`.

**Brand**

| Token | Dark | Light | Role |
|---|---|---|---|
| `--brand` | `#7c5cff` | `#6a46f0` | Primary brand (indigo-violet) — CTAs, focus, active |
| `--brand-hover` | `#8f72ff` | `#5b38d6` | CTA hover |
| `--brand-weak` | `#2a2350` | `#ece8ff` | Brand-tinted surfaces, selected chips |
| `--accent` | `#36e0c0` | `#0fb89b` | Secondary accent — "in sync" / live pulse |

A single brand hue (indigo-violet) + one accent (teal) reads modern and avoids the
red-DRM/streaming cliché. No gradients as load-bearing UI; one optional subtle brand
gradient `linear-gradient(135deg, #7c5cff, #b14bff)` reserved for the marketing/hero CTA only.

**Neutrals (surface ramp)**

| Token | Dark | Light | Role |
|---|---|---|---|
| `--bg` | `#0e0e13` | `#f7f7fb` | App canvas |
| `--surface-1` | `#16161f` | `#ffffff` | Cards, panels |
| `--surface-2` | `#1e1e2a` | `#f0f0f6` | Raised rows, inputs, chat bubbles |
| `--surface-3` | `#2a2a3a` | `#e4e4ee` | Hover, pressed, dividers-strong |
| `--border` | `#2d2d3c` | `#e2e2ec` | Hairline borders |
| `--text` | `#f2f2f7` | `#16161f` | Primary text |
| `--text-muted` | `#a0a0b2` | `#5a5a6c` | Secondary text |
| `--text-faint` | `#6b6b7e` | `#8a8a9c` | Captions, timestamps, placeholders |

**Status**

| Token | Dark | Light | Role |
|---|---|---|---|
| `--success` | `#3ad686` | `#13a866` | Connected, in sync, online |
| `--warning` | `#ffb24c` | `#c77800` | Buffering, drift, reconnecting |
| `--danger` | `#ff5c6c` | `#d93345` | Error, disconnect, destructive |
| `--info` | `#4da9ff` | `#2b7fd6` | Neutral notices, system messages |

**Theme guard pattern** (required so dark is default but user/OS can override):

```css
:root { /* dark tokens here (default) */ }
@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) { /* light tokens */ }
}
:root[data-theme="light"] { /* light tokens */ }
body { background: var(--bg); color: var(--text); }
```

### 1.2 Typography

- **Family:** `Inter` (Google Fonts, 400/500/600/700) with
  `-apple-system, system-ui, sans-serif` fallback. Monospace only for session IDs and
  timecodes: `ui-monospace, "SF Mono", monospace`.
- **Scale** (1.25 ratio, rem-based, 16px root):

| Token | Size / line | Weight | Use |
|---|---|---|---|
| `--t-display` | 28/34 | 700 | Landing hero |
| `--t-h1` | 22/28 | 700 | Screen title |
| `--t-h2` | 18/24 | 600 | Section header |
| `--t-body` | 15/22 | 400 | Body, chat |
| `--t-label` | 14/20 | 500 | Buttons, labels, nicknames |
| `--t-caption` | 12/16 | 500 | Timestamps, status, counts |

- Numerals in timecodes/IDs: `font-variant-numeric: tabular-nums`.

### 1.3 Spacing, radius, elevation, motion

- **Spacing scale (4px base):** `--s-1:4 --s-2:8 --s-3:12 --s-4:16 --s-5:24 --s-6:32 --s-8:48 --s-10:64`. Mobile side gutter fixed at **16px**; no horizontal page scroll.
- **Radius:** `--r-sm:8 --r-md:12 --r-lg:16 --r-full:999`. Modern soft corners (not the extension's 2px). Pills for chips/avatars, 12px for cards, 8px for inputs/buttons.
- **Elevation:** shadows only in light theme (`0 1px 2px rgba(0,0,0,.06)`, `0 8px 24px rgba(0,0,0,.12)`); in dark theme use the surface ramp + `--border`, not shadow.
- **Motion:** `--ease: cubic-bezier(.2,.8,.2,1)`; durations `--d-fast:120ms --d-base:200ms --d-slow:320ms`. **Honor `prefers-reduced-motion`**: disable transforms/float animations, keep opacity fades.

### 1.4 Iconography

Inline SVG, 20px default / 24px touch, `stroke: currentColor`, 1.75 stroke width
(Lucide-style). Icons always paired with a text label or `aria-label`. No icon fonts.

---

## 2. Layout Architecture

### 2.1 Breakpoints

| Name | Range | Layout |
|---|---|---|
| `mobile` | < 768px | Single column; player on top, chat as a bottom sheet / full-screen tab |
| `tablet` | 768–1119px | Player full width; chat as a toggleable right drawer (overlay) |
| `desktop` | ≥ 1120px | Two-pane: player left (fluid), chat rail right (`360px` fixed) |

### 2.2 Views (top-level)

```
AppShell
├─ Landing        (no session)     — hero, Create / Join
├─ Lobby          (pre-watch)      — pick/confirm video source + nickname, then enter
├─ Party          (in session)     — the main experience
└─ Ended/Left     (post session)   — recap + rejoin / new party
```

`Party` is the center of gravity. Everything else is a short on-ramp.

### 2.3 Party view — component hierarchy

```
PartyView
├─ TopBar            — logo · session pill (id + copy) · connection status · theme · settings · leave
├─ Stage (main)
│  ├─ VideoPlayer    — YouTube iframe OR <video>; custom control bar overlay
│  ├─ SyncBar        — "In sync" / "Buffering" / "Drift — Resync" ambient strip under player
│  └─ SourceBar      — change source (host only): URL field / file picker / YouTube paste
└─ ChatPanel (rail / drawer / sheet)
   ├─ PanelTabs      — [ Chat ] [ People (n) ]
   ├─ ChatTab
   │  ├─ MessageList — bubbles + system lines + GIFs, auto-scroll w/ "jump to latest"
   │  ├─ TypingRow   — "Alex is typing…" presence
   │  ├─ ReactionDock— 6 floating reactions (heart/fire/laugh/surprise/angry/cry)
   │  └─ Composer    — text input · emoji · GIF · send
   └─ PeopleTab      — member list: avatar, nickname, host badge, online/buffering dot
```

Desktop keeps chat always-visible in the right rail. Tablet/mobile collapse it; a floating
chat FAB with an unread badge reopens it. On mobile the Composer sits in a sticky footer
above the keyboard.

### 2.4 Responsive rules

- Player maintains 16:9 via `aspect-ratio`; letterboxes on ultrawide, never crops.
- At `mobile`, `People` and `Chat` are tabs of one full-height sheet; the player stays pinned
  and shrinks to a minimized bar when the sheet is expanded, so playback is never hidden.
- Touch targets ≥ 44×44px. Reaction dock and composer controls sized for thumb.

---

## 3. Component Specifications

### 3.1 Buttons

| Variant | Appearance | Use |
|---|---|---|
| Primary | `--brand` bg, white text, `--r-sm`, 44px tall | Create party, Join, Send |
| Secondary | transparent, `--border` outline, `--text` | Cancel, change source |
| Ghost | no border, text only, hover `--surface-2` | Icon/tool buttons in bars |
| Danger | `--danger` bg or outline | Leave, disconnect |

States: default / hover (`--brand-hover`, `translateY(-1px)`) / active (translateY(0)) /
focus-visible (2px `--brand` ring, 2px offset) / disabled (60% opacity, no pointer) /
loading (inline spinner replaces label, button keeps width, `aria-busy="true"`).

### 3.2 Inputs & fields

- Text input: `--surface-2` bg, `--border`, `--r-sm`, 44px, 15px text; focus → `--brand`
  border + ring. Error → `--danger` border + helper text with `role="alert"`.
- **Session-link field:** read-only, monospace, with a trailing **Copy** button that flips to
  a check + "Copied" for 1.5s (`aria-live="polite"` announces the copy).
- **Source input (host):** segmented control `[ Paste URL ] [ Upload file ]`. URL mode
  validates + shows a YouTube/direct-video badge; Upload mode is a drag-drop zone that accepts
  `video/*` and shows filename + size. Local uploads are object-URL, host-local only (note:
  guests can't receive a local file — see §4.5).

### 3.3 Video player

Two backends behind one control surface:
- **YouTube** → IFrame Player API (`videoId` parsed from URL). Sync drives
  `seekTo/playVideo/pauseVideo`; local user intent read from player state events.
- **Direct URL / file** → native `<video>`; sync drives `currentTime/play()/pause()`.

**Custom control bar** (overlay, auto-hides after 3s idle, reappears on move/focus):
play/pause · scrubber with buffered range · time `00:00 / 00:00` (tabular) · volume ·
fullscreen · settings (speed, captions if available). Scrubber and all controls keyboard
operable (Space = play/pause, ←/→ = seek 5s, F = fullscreen, M = mute).

**Sync semantics mapped to UI** (from `PROTOCOL_SPEC.md` §4):
- Local play/pause/seek → emit `updateSession`; show a brief "Synced to room" toast only if
  it affected others meaningfully (debounced).
- Incoming `updateSession` within tolerance → silent catch-up. Beyond tolerance → a soft
  "Catching up…" chip for <1s, no jarring jump cut announced.
- **Control lock:** if host-only control is on and a guest tries to scrub/pause, controls show
  a lock glyph + tooltip "Only the host can control playback"; the attempted action reverts.

### 3.4 SyncBar (ambient status strip, under player)

A single calm strip, not a log. States (one at a time, left-aligned icon + text):

| State | Icon / color | Text |
|---|---|---|
| In sync | pulse dot `--success` | "In sync with N watchers" |
| Buffering (you) | spinner `--warning` | "Buffering…" |
| Someone buffering | dot `--warning` | "Waiting for Alex to buffer" |
| Drift detected | `--warning` | "You're 4s behind · **Resync**" (button) |
| Host paused | `--info` | "Host paused the video" |
| Reconnecting | `--warning` | "Reconnecting…" (see §5) |

### 3.5 Chat

- **Message bubble:** avatar (first message in a run only), nickname (`--t-label`,
  per-user color), body (`--t-body`), timestamp on hover/long-press. Own messages
  right-aligned with `--brand-weak` bg; others left-aligned `--surface-2`. Links
  auto-linkified and escaped (XSS-safe — mirror the demo's `esc()`).
- **System messages** ("Alex joined", "Sam left"): centered, `--text-faint`, `--t-caption`,
  no bubble. Match the exact protocol strings (`joined`/`left`).
- **GIF message:** rounded media, lazy-loaded, max-height 220px, alt text from query.
- **Auto-scroll:** pin to bottom; if user scrolls up, stop auto-scroll and show a
  "↓ New messages (n)" pill that jumps to latest on tap.
- **Typing presence:** `setTypingPresence` → "Alex is typing…" animated dots below list
  (collapse multiple: "Alex and 2 others are typing").
- **Composer:** auto-growing textarea (1→5 lines), Enter sends / Shift+Enter newline (on
  mobile Enter = newline, dedicated send button). Emoji picker + GIF search (Tenor-style)
  as popovers. Send is optimistic; failed send marks the bubble with a retry affordance.

### 3.6 Reactions

Dock of 6 (heart, fire, laugh, surprise, angry, cry) → `sendReaction`. On trigger, the emoji
**floats up over the video** and fades (respecting reduced-motion: fade in place instead).
Incoming reactions from others float too, tagged with the sender's color. Host can disable
reactions party-wide (`reactionsDisabled`) → dock hidden with a one-line note.

### 3.7 People / presence

List rows: avatar, nickname, host crown badge, status dot (green online / amber buffering /
grey idle). Header shows live count. Updates driven by `userList` pushes. Own row pinned top
with an "edit" affordance for nickname/avatar (`broadcastUserSettings`).

### 3.8 Avatars

Deterministic generated avatar from `permId` (hash → hue → initial glyph) when no custom
icon. Consistent per-user color also drives their chat nickname and reaction tint.

---

## 4. User Flows

### 4.1 Create a party (host)

1. Landing → **Create a party**.
2. Lobby: choose source (Paste URL / Upload) → validate → set nickname (prefilled, editable)
   → optional toggles **Only I control playback** / **Disable reactions**.
3. **Start party** (primary, loading state) → `createSession`.
4. Enter Party view. A share sheet auto-opens once with the copyable link + "Copy link" +
   native share (Web Share API on mobile). Dismissible; link always available in the TopBar pill.

### 4.2 Join a party (guest)

1. Deep link `/?session=<id>` (or `/join/<id>`) → app reads the id, connects, waits for
   `userId`, then shows a lightweight **Join** confirm (nickname + "Join party").
   No "click the icon" friction — the link joins directly.
2. `joinSession` → Party view with replayed chat history + current playback state.
3. Pasting an id manually: Landing → **Join** → id field → Join.

### 4.3 In-party

Watch synced; chat/react/see people; host may change source or episode (`nextEpisode`),
toggle control lock. Everyone can **Resync** from the SyncBar at any time.

### 4.4 Leave / end

Leave (`leaveSession`) → Left screen with "Rejoin" (same id still live) and "New party".
If the room empties or the host ends it, guests see an "Party ended" state. Browser
close/unload also triggers leave.

### 4.5 Error recovery & edge cases

- **Session not found** (bad id) → inline error on Join with "Check the link or start a new
  party".
- **Local-file source + guest:** a locally uploaded file can't stream to guests. UI warns the
  host at upload: "Local files only play on your screen — use a URL so others can watch,"
  and offers to continue solo or switch to a URL.
- **Autoplay blocked:** browsers block programmatic play → show a one-tap "▶ Tap to start"
  overlay (mirrors the demo's `autoplay blocked` catch) that resumes sync on tap.
- **YouTube embedding disabled** for a video → error chip with a link to open externally.

---

## 5. Connection State Handling

The WS client reconnects with backoff (`PROTOCOL_SPEC.md` §2). Surface it honestly:

| State | TopBar indicator | Behavior |
|---|---|---|
| Connecting | amber dot + "Connecting…" | Controls disabled, skeleton in chat/people |
| Connected | green dot (subtle, optional label) | Normal |
| Reconnecting | amber pulse + "Reconnecting…" | Composer disabled, queued messages held, SyncBar shows reconnecting |
| Disconnected (gave up) | red dot + "Disconnected" | Full-width banner with **Retry**; `reboot` on recovery restores the room |

Clock-sync (`getServerTime`) and buffering are internal; only expose drift/buffering through
the SyncBar, never raw numbers unless the user opens a "connection details" popover
(offset ms, rtt, drift — for power users/debugging).

---

## 6. Interaction Patterns, Loading, Empty States

- **Loading:** skeleton shimmer for chat list and people list; inline button spinners for
  actions; the player shows a centered spinner over a poster/blur until ready.
- **Empty states:**
  - Chat empty → "No messages yet. Say hi 👋" + subtle illustration.
  - People (solo) → "You're the only one here. Share the link to invite friends" + Copy link.
  - No source chosen (host lobby) → inline hint with the three source options.
- **Micro-interactions:** copy-link check flip; reaction float; "message sent" tick;
  tab underline slide; SyncBar state cross-fade. All ≤ `--d-slow`, all reduced-motion aware.
- **Toasts:** bottom-center (mobile) / bottom-right (desktop), auto-dismiss 4s, `aria-live`,
  max 3 stacked. Used for copy, errors, "host changed the video", join/leave (optional,
  dedupe with system chat lines).
- **Optimistic UI:** chat and reactions render immediately; reconcile on server ack; mark
  failed on timeout with retry.

---

## 7. Accessibility

- **Landmarks:** `header` (TopBar), `main` (Stage), `aside`/`complementary` (ChatPanel),
  `form` (Composer). One `h1` per view.
- **Keyboard:** full tab order; visible `:focus-visible` ring everywhere; player shortcuts
  (§3.3) documented in a "?" help popover; Esc closes popovers/drawers; focus trap in
  modals/share sheet; focus returns to trigger on close.
- **Screen readers:**
  - Chat list `role="log"` `aria-live="polite"` `aria-relevant="additions"`; each message
    announces "Name, message, time".
  - SyncBar changes `aria-live="polite"`; connection banner `role="status"`; errors
    `role="alert"`.
  - Reactions `aria-label` ("React with fire"); incoming reaction announced politely and
    debounced to avoid spam.
  - People list items announce name + host + status.
- **Contrast:** all text ≥ 4.5:1 (AA), large text/icons ≥ 3:1, in **both** themes. Status is
  never color-only — pair dot + icon + text.
- **Media:** captions/subtitle track surfaced in player settings when the source provides
  them; player controls labeled; no autoplay of sound without user gesture.
- **Motion:** `prefers-reduced-motion` disables float/scale/parallax; keep essential fades.
- **Forms:** labels tied via `for`/`id`; errors programmatically associated
  (`aria-describedby`); nickname/session inputs have clear `autocomplete`.

---

## 8. Implementation Notes

- **Stack-agnostic, but recommended:** vanilla + Web Components or a light framework
  (Preact/Svelte) — the current client is ~160 lines of plain JS over a WS; keep the bundle
  small. Tokens as CSS custom properties in one `theme.css`; components as small modules.
- **Reuse the working wire protocol** already in `server/public/client.js` (clock sync, drift
  correction, suppress-own-events, escape). Build the UI as a layer over that logic — don't
  rewrite the sync math.
- **Keep XSS discipline:** all user-rendered strings escaped (nicknames, chat, GIF alt).
- **Theme persistence:** store `data-theme` choice in `localStorage` (wrapped in try/catch;
  default to OS preference).
- **Phase order:** (1) Landing/Join/Party core loop + player + chat + presence + connection
  states. (2) Reactions + GIFs + typing + avatars + control lock. (3) Scheduling, host
  episode nav, power-user connection details.

---

## 9. Reference: feature → protocol event map

| UI element | Client → server | Server → client |
|---|---|---|
| Create party | `createSession` | SessionData |
| Join / deep link | `joinSession` | SessionData + `userList` + system msg |
| Play/pause/seek | `updateSession` | `updateSession` |
| Change video (host) | `nextEpisode` | `jumpToNextEpisode` |
| Send chat | `sendMessage` | `sendMessage` |
| Send GIF | `sendGIF` | `sendGIF` |
| Reactions | `sendReaction` | `sendReaction` |
| Typing dots | `setTypingPresence` | `setTypingPresence` |
| Buffering status | `setBufferingPresence` | `setBufferingPresence` |
| Nickname/avatar | `broadcastUserSettings` | `updateSettings` |
| People list | — | `userList` |
| Leave | `leaveSession` | `userList` + system msg |
| Reconnect | `reboot` | SessionData |
| Clock sync | `getServerTime` | `{ serverTime }` |
```
