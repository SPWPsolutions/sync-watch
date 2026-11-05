(function () {
  const NS = (globalThis.PartySync ||= {});
  const SIDEBAR_WIDTH = 304;
  const TYPING_IDLE_MS = 2500;
  const MAX_RENDERED = 200;

  const WOOPER_DATA_URI =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAWCAYAAAB0S0oJAAABOElEQVR42u2WMQ7CMAxFcxIGRiaY2ZkRF+AIrAhxEkYmWLgH52BiZWEEOZIr1ziOU6WoRlSyGprvpy/XNQmBXPPJ6BUMl1Xnkgvi8375yiVZdV65MeF2OKpJCAVdiWFP3CYJY7eaineM0jfngsuhKTgPa1t64bbAm8s6hgTieyWG++KWxE8XYjEbx5C4fM9ciOtp2yQ9H/cYMGhwjXuosxr2wv1oNQRBNemdwru08NC5KpxGjek+dO6/EKkpnAN3ne5D5kYw/+/NgUFvMeyGi9UFIYVrYKrNHW+9cNXDidZmuXbzxm3aTDqWamDM0Qx74rp4c7DG31/vCATCqSw1fGiFqdnaXPqsL79iheEZwvha0nKzNbn8TfblN9BErGIOTPWaYU/cKuDUd+2J2xpG2oCS9pLfm0PuG8D7d3TcHqfeAAAAAElFTkSuQmCC';

  const REACTIONS = [
    { type: 'heart', emoji: '🥰', label: 'Love' },
    { type: 'angry', emoji: '😡', label: 'Angry' },
    { type: 'fire', emoji: '🔥', label: 'Fire' },
    { type: 'laugh', emoji: '😂', label: 'Laugh' },
    { type: 'surprise', emoji: '🤯', label: 'Mind Blown' },
    { type: 'cry', emoji: '😭', label: 'Cry' },
  ];
  const REACTION_MAP = Object.fromEntries(REACTIONS.map((r) => [r.type, r.emoji]));
  const QUICK_EMOJIS = ['😀', '😂', '🥹', '😍', '🤩', '😎', '🤔', '😱', '😭', '😡', '🥳', '🍿', '🎬', '🔥', '❤️', '👏', '🙌', '💀', '👀', '✨'];
  const AVATARS = ['🐱', '🐻', '🎬', '🍿', '🦊', '🐼', '🚀', '👾', '⚡', '🌟'];
  const COLORS = ['#ef3e3a', '#f5c56b', '#ff626f', '#f472b6', '#34d399', '#60a5fa', '#c084fc', '#2dd4bf'];
  const BADGES = ['', '★ VIP', '👑 Host', '🐱 Wooper', '🍿 Critic', '⚡ Speed'];

  function formatTimestamp(ms) {
    const totalSec = Math.max(0, Math.floor((Number(ms) || 0) / 1000));
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    const pad = (n) => String(n).padStart(2, '0');
    return hrs > 0 ? `${hrs}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
  }

  function ensureDockStyle() {
    let style = document.getElementById('party-sync-dock-style');
    if (style) return style;
    style = document.createElement('style');
    style.id = 'party-sync-dock-style';
    style.textContent = `
      html[data-party-sync-sidebar="open"] body {
        width: calc(100vw - ${SIDEBAR_WIDTH}px) !important;
        max-width: calc(100vw - ${SIDEBAR_WIDTH}px) !important;
        overflow-x: hidden !important;
      }
      html[data-party-sync-sidebar="open"] .watch-video,
      html[data-party-sync-sidebar="open"] [data-uia="watch-video"],
      html[data-party-sync-sidebar="open"] [data-uia="player"],
      html[data-party-sync-sidebar="open"] .nf-player-container,
      html[data-party-sync-sidebar="open"] .bitmovinplayer-container,
      html[data-party-sync-sidebar="open"] #dv-web-player,
      html[data-party-sync-sidebar="open"] .atvwebplayersdk-overlays-container,
      html[data-party-sync-sidebar="open"] disney-web-player,
      html[data-party-sync-sidebar="open"] #content-video-player,
      html[data-party-sync-sidebar="open"] #movie_player,
      html[data-party-sync-sidebar="open"] #my_dialog {
        width: calc(100vw - ${SIDEBAR_WIDTH}px) !important;
        max-width: calc(100vw - ${SIDEBAR_WIDTH}px) !important;
      }
    `;
    document.head.appendChild(style);
    return style;
  }

  // Docked right-hand sidebar (matches Screenshot 2 & 3 layout). Returns controller + cleanup.
  function createChat({ socket, sync, snapshot, session }) {
    ensureDockStyle();
    const profiles = new Map();
    const setMembers = (list) => {
      if (!Array.isArray(list)) return;
      for (const m of list) {
        profiles.set(m.userId, {
          name: m.userSettings?.userNickname || 'Guest',
          icon: m.userSettings?.userIcon || '🐻',
          color: m.userSettings?.nameColor || '#f5c56b',
          badge: m.userSettings?.badge || '',
          isHost: !!m.isHost,
        });
      }
      updateHeaderCount(list.length);
      renderMembersList(list);
    };

    let reactionsDisabled =
      snapshot.reactionsDisabled === 'true' ||
      snapshot.reactionsDisabled === true ||
      session?.reactionsDisabled === 'true' ||
      session?.reactionsDisabled === true;

    let sidebarVisible = session?.showChat !== false;

    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;top:0;right:0;bottom:0;z-index:2147483646;pointer-events:none;';
    NS.isolateEvents(host);
    const root = host.attachShadow({ mode: 'closed' });
    root.innerHTML = `<style>
      :host{all:initial}
      *{box-sizing:border-box;font-family:Poppins,Inter,system-ui,-apple-system,sans-serif}
      .sidebar{
        pointer-events:auto;
        position:fixed;
        top:0;
        right:0;
        width:${SIDEBAR_WIDTH}px;
        height:100vh;
        background:#141414;
        border-left:1px solid #262626;
        color:#e5e5e5;
        display:flex;
        flex-direction:column;
        transition:transform .22s ease;
        z-index:2147483646;
      }
      .sidebar[data-hidden="true"]{
        transform:translateX(100%);
      }
      .reopen-tab{
        pointer-events:auto;
        position:fixed;
        top:14px;
        right:12px;
        padding:7px 11px;
        border-radius:8px;
        background:rgba(20,20,20,.88);
        border:1px solid #333;
        color:#fff;
        font-size:12px;
        font-weight:600;
        cursor:pointer;
        display:flex;
        align-items:center;
        gap:6px;
        box-shadow:0 4px 16px rgba(0,0,0,.45);
      }
      .reopen-tab[hidden]{display:none}
      .reopen-tab b{
        background:linear-gradient(135deg,#e34248,#9e55a0);
        padding:1px 6px;
        border-radius:999px;
        font-size:11px;
      }
      .reopen-tab b:empty{display:none}

      /* Top Header Bar */
      .topbar{
        height:52px;
        padding:0 12px;
        border-bottom:1px solid #262626;
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-shrink:0;
      }
      .top-left,.top-right{
        display:flex;
        align-items:center;
        gap:10px;
      }
      .icon-btn{
        all:unset;
        cursor:pointer;
        color:#b3b3b3;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width:28px;
        height:28px;
        border-radius:6px;
        transition:background .15s,color .15s;
      }
      .icon-btn:hover{
        background:#262626;
        color:#fff;
      }
      .brand-wrap{
        display:inline-flex;
        align-items:center;
        gap:4px;
      }
      .brand-mark{
        font-weight:800;
        font-size:18px;
        letter-spacing:-0.03em;
        background:linear-gradient(135deg,#ef3e3a,#ff626f,#9e55a0);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        user-select:none;
      }
      .wooper-sprite{
        display:inline-block;
        width:33px;
        height:33px;
        margin:-6px 0;
        background:url("${WOOPER_DATA_URI}") 0 0 / 300% 100% no-repeat;
        image-rendering:pixelated;
        animation:wooper-idle 2.24s step-end infinite;
        flex-shrink:0;
      }
      @keyframes wooper-idle{
        0%{background-position-x:0%}
        35.71%{background-position-x:50%}
        50%{background-position-x:0%}
        85.71%{background-position-x:100%}
        92.86%{background-position-x:0%}
      }
      .member-share-pill{
        display:inline-flex;
        align-items:center;
        background:#222226;
        border:1px solid #323238;
        border-radius:8px;
        height:30px;
        overflow:hidden;
      }
      .pill-members{
        all:unset;
        cursor:pointer;
        display:inline-flex;
        align-items:center;
        gap:5px;
        padding:0 9px;
        height:100%;
        font-size:12px;
        font-weight:600;
        color:#e5e5e5;
      }
      .pill-members:hover{background:#2d2d33}
      .pill-share{
        all:unset;
        cursor:pointer;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:0 8px;
        height:100%;
        border-left:1px solid #323238;
        color:#60a5fa;
      }
      .pill-share:hover{background:#2d2d33}
      .avatar-btn{
        all:unset;
        cursor:pointer;
        width:32px;
        height:32px;
        border-radius:50%;
        background:#f5c56b;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        font-size:18px;
        border:2px solid #262626;
        transition:transform .15s;
      }
      .avatar-btn:hover{transform:scale(1.06)}

      /* Drawers (Profile & Members) */
      .drawer{
        padding:12px;
        border-bottom:1px solid #262626;
        background:#1b1b1f;
        display:flex;
        flex-direction:column;
        gap:8px;
      }
      .drawer[hidden]{display:none}
      .drawer-title{font-size:12px;font-weight:700;color:#fff;margin-bottom:2px;display:flex;justify-content:space-between;align-items:center}
      .drawer label{font-size:11px;color:#9ca3af;display:flex;flex-direction:column;gap:4px}
      .drawer input,.drawer select{
        padding:6px 8px;
        border-radius:6px;
        border:1px solid #333;
        background:#121215;
        color:#fff;
        font-size:12px;
        outline:none;
      }
      .chips{display:flex;flex-wrap:wrap;gap:5px}
      .chip{
        all:unset;
        cursor:pointer;
        width:26px;
        height:26px;
        border-radius:50%;
        background:#26262b;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        font-size:14px;
        border:2px solid transparent;
      }
      .chip[data-selected="true"]{border-color:#ef3e3a;background:#322226}
      .swatch{
        all:unset;
        cursor:pointer;
        width:20px;
        height:20px;
        border-radius:50%;
        border:2px solid transparent;
      }
      .swatch[data-selected="true"]{border-color:#fff;transform:scale(1.1)}
      .save-btn{
        all:unset;
        cursor:pointer;
        text-align:center;
        padding:7px 10px;
        border-radius:6px;
        background:linear-gradient(90deg,#e34248,#9e55a0);
        color:#fff;
        font-weight:600;
        font-size:12px;
      }
      .members-ul{
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
        flex-direction:column;
        gap:6px;
        max-height:180px;
        overflow-y:auto;
      }
      .members-ul li{
        display:flex;
        align-items:center;
        gap:8px;
        font-size:12px;
        padding:5px 8px;
        border-radius:6px;
        background:#121215;
      }
      .members-ul .host-tag{margin-left:auto;font-size:10px;color:#9ca3af}

      /* Message & Activity Stream */
      .feed{
        flex:1;
        list-style:none;
        margin:0;
        padding:14px 12px 6px;
        overflow-y:auto;
        display:flex;
        flex-direction:column;
        gap:10px;
      }
      .feed > li:first-child{
        margin-top:auto;
      }
      .msg-row{
        display:flex;
        align-items:flex-start;
        gap:10px;
        font-size:13px;
        line-height:1.4;
        word-break:break-word;
      }
      .msg-avatar{
        width:32px;
        height:32px;
        border-radius:50%;
        background:#f5c56b;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        font-size:17px;
        flex-shrink:0;
      }
      .msg-body{
        display:flex;
        flex-direction:column;
        gap:2px;
        min-width:0;
        padding-top:2px;
      }
      .msg-meta{
        display:flex;
        align-items:center;
        gap:5px;
      }
      .msg-author{
        font-weight:600;
        font-size:12px;
        color:#f5c56b;
      }
      .msg-badge{
        font-size:10px;
        padding:1px 5px;
        border-radius:4px;
        background:rgba(158,85,160,.25);
        color:#e9d5ff;
      }
      .msg-text{
        color:#ececec;
        font-size:13px;
      }
      .sys-row{
        display:flex;
        align-items:center;
        gap:10px;
        color:#b3b3b3;
        font-size:13px;
      }
      .act-row{
        padding-left:42px;
        color:#8e8e93;
        font-size:12.5px;
      }
      .typing{
        min-height:18px;
        padding:0 14px;
        color:#8e8e93;
        font-size:11.5px;
      }

      /* Bottom Composer Card */
      .composer-card{
        margin:4px 10px 12px;
        border:1px solid #2e2e33;
        border-radius:8px;
        background:#18181b;
        display:flex;
        flex-direction:column;
        flex-shrink:0;
      }
      .reaction-bar{
        display:flex;
        align-items:center;
        justify-content:space-around;
        padding:7px 8px;
        border-bottom:1px solid #26262b;
      }
      .reaction-bar[hidden]{display:none}
      .react-btn{
        all:unset;
        cursor:pointer;
        font-size:20px;
        line-height:1;
        padding:3px 5px;
        border-radius:6px;
        transition:transform .15s ease,background .15s ease;
      }
      .react-btn:hover{
        transform:scale(1.22);
        background:rgba(255,255,255,.06);
      }
      .picker-tray{
        padding:8px;
        border-bottom:1px solid #26262b;
        display:flex;
        flex-wrap:wrap;
        gap:5px;
        max-height:110px;
        overflow-y:auto;
      }
      .picker-tray[hidden]{display:none}
      .emoji-pick{
        all:unset;
        cursor:pointer;
        font-size:18px;
        padding:3px;
        border-radius:4px;
      }
      .emoji-pick:hover{background:#2d2d33}
      .input-wrap{
        display:flex;
        flex-direction:column;
        padding:8px 10px 6px;
        gap:8px;
      }
      .chat-in{
        width:100%;
        border:0;
        background:transparent;
        color:#fff;
        font-size:13px;
        outline:none;
      }
      .chat-in::placeholder{color:#6e6e77}
      .composer-tools{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:#8e8e93;
      }
      .tools-left,.tools-right{
        display:flex;
        align-items:center;
        gap:8px;
      }
      .tool-btn{
        all:unset;
        cursor:pointer;
        color:#8e8e93;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:2px 4px;
        border-radius:4px;
        font-size:13px;
      }
      .tool-btn:hover{color:#fff;background:#26262b}
      .gif-pill{
        font-size:9px;
        font-weight:800;
        padding:2px 4px;
        border-radius:3px;
        background:#8e8e93;
        color:#141414;
        letter-spacing:.03em;
      }
      .tool-btn:hover .gif-pill{background:#fff}

      /* Floating reactions stage */
      .float-stage{
        position:fixed;
        right:${SIDEBAR_WIDTH + 24}px;
        bottom:80px;
        width:140px;
        height:280px;
        pointer-events:none;
        overflow:visible;
        z-index:2147483647;
      }
      .floater{
        position:absolute;
        bottom:0;
        right:16px;
        display:flex;
        align-items:center;
        gap:5px;
        font-size:30px;
        filter:drop-shadow(0 3px 8px rgba(0,0,0,.55));
        animation:partyFloat 2.2s ease-out forwards;
      }
      .floater small{
        font:600 11px/1.2 system-ui,sans-serif;
        color:#fff;
        background:rgba(20,20,24,.8);
        padding:2px 7px;
        border-radius:999px;
        white-space:nowrap;
      }
      .toast{
        position:fixed;
        top:60px;
        right:16px;
        background:#26262b;
        border:1px solid #3f3f46;
        color:#fff;
        padding:6px 10px;
        border-radius:6px;
        font-size:12px;
        pointer-events:none;
        opacity:0;
        transition:opacity .18s;
      }
      .toast[data-show="true"]{opacity:1}
      @keyframes partyFloat{
        0%{transform:translate(0,0) scale(.6);opacity:0}
        15%{transform:translate(var(--dx,0px),-30px) scale(1.12);opacity:1}
        80%{opacity:1}
        100%{transform:translate(var(--dx2,0px),-230px) scale(.92);opacity:0}
      }
    </style>

    <div class="float-stage"></div>
    <button class="reopen-tab" type="button" hidden title="Show Wooper's Party Chat">
      <span class="wooper-sprite"></span>
      <span>⇤ WP Chat</span><b></b>
    </button>

    <aside class="sidebar" data-hidden="false">
      <header class="topbar">
        <div class="top-left">
          <button class="icon-btn collapse-btn" type="button" title="Hide Chat Sidebar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h11M11 8l4 4-4 4M19 4v16"/></svg>
          </button>
          <span class="brand-wrap" title="Wooper's Party">
            <span class="brand-mark">WP</span>
            <span class="wooper-sprite" aria-hidden="true"></span>
          </span>
        </div>
        <div class="top-right">
          <div class="member-share-pill">
            <button class="pill-members" type="button" title="Party Members">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span class="m-count">1</span>
            </button>
            <button class="pill-share" type="button" title="Copy Party Invite Link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
          </div>
          <button class="icon-btn resync-btn" type="button" title="Resync to Party">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8"/></svg>
          </button>
          <button class="avatar-btn profile-btn" type="button" title="Edit Profile">🐻</button>
        </div>
      </header>

      <div class="drawer members-drawer" hidden>
        <div class="drawer-title"><span>Party Members</span></div>
        <ul class="members-ul"></ul>
      </div>

      <div class="drawer profile-drawer" hidden>
        <div class="drawer-title"><span>Customize Profile</span></div>
        <label>Nickname <input class="p-nick" maxlength="24" placeholder="Guest"></label>
        <label>Avatar <div class="chips p-icons"></div></label>
        <label>Color <div class="chips p-colors"></div></label>
        <label>Badge <select class="p-badge"></select></label>
        <button class="save-btn" type="button">Save Changes</button>
      </div>

      <ul class="feed"></ul>
      <div class="typing"></div>

      <form class="composer-card">
        <div class="reaction-bar"></div>
        <div class="picker-tray" hidden></div>
        <div class="input-wrap">
          <input class="chat-in" maxlength="2000" placeholder="Type a message..." autocomplete="off">
          <div class="composer-tools">
            <div class="tools-left">
              <button class="tool-btn resync-inline" type="button" title="Sync playback now">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4V8Z"/></svg>
              </button>
            </div>
            <div class="tools-right">
              <button class="tool-btn emoji-toggle" type="button" title="Insert Emoji">😊</button>
              <button class="tool-btn gif-toggle" type="button" title="Send Reaction Sticker"><span class="gif-pill">GIF</span></button>
              <button class="tool-btn" type="submit" title="Send Message">🎉</button>
            </div>
          </div>
        </div>
      </form>
      <div class="toast">Link copied!</div>
    </aside>`;

    const $ = (s) => root.querySelector(s);
    const sidebar = $('.sidebar');
    const reopenTab = $('.reopen-tab');
    const unreadBadge = $('.reopen-tab b');
    const feed = $('.feed');
    const input = $('.chat-in');
    const reactionBar = $('.reaction-bar');
    const pickerTray = $('.picker-tray');
    const floatStage = $('.float-stage');
    const profileDrawer = $('.profile-drawer');
    const membersDrawer = $('.members-drawer');
    const avatarBtn = $('.avatar-btn');
    const toast = $('.toast');
    let unread = 0;

    function applySidebarVisibility(show) {
      sidebarVisible = Boolean(show);
      if (session) session.showChat = sidebarVisible;
      sidebar.dataset.hidden = String(!sidebarVisible);
      reopenTab.hidden = sidebarVisible;
      if (sidebarVisible) {
        document.documentElement.setAttribute('data-party-sync-sidebar', 'open');
        unread = 0;
        unreadBadge.textContent = '';
      } else {
        document.documentElement.removeAttribute('data-party-sync-sidebar');
      }
      window.dispatchEvent(new Event('resize'));
    }

    function updateHeaderCount(count) {
      const el = $('.m-count');
      if (el) el.textContent = String(count || 1);
    }

    function renderMembersList(list) {
      const ul = $('.members-ul');
      if (!ul || !Array.isArray(list)) return;
      ul.replaceChildren(
        ...list.map((m) => {
          const li = document.createElement('li');
          const ic = document.createElement('span');
          ic.textContent = m.userSettings?.userIcon || '🐻';
          const nm = document.createElement('span');
          nm.textContent = m.userSettings?.userNickname || 'Guest';
          nm.style.color = m.userSettings?.nameColor || '#f5c56b';
          nm.style.fontWeight = '600';
          li.append(ic, nm);
          if (m.isHost) {
            const h = document.createElement('span');
            h.className = 'host-tag';
            h.textContent = 'Host';
            li.append(h);
          }
          return li;
        })
      );
    }

    setMembers(snapshot.userList);

    // Reaction bar
    for (const r of REACTIONS) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'react-btn';
      b.title = r.label;
      b.textContent = r.emoji;
      b.addEventListener('click', () => {
        if (reactionsDisabled) return;
        spawnFloatingReaction(r.type, session?.nickname || 'You');
        socket.request('sendReaction', { reactionType: r.type }).catch(() => {});
      });
      reactionBar.append(b);
    }
    reactionBar.hidden = reactionsDisabled;

    // Quick Emoji / Sticker picker tray
    for (const em of QUICK_EMOJIS) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'emoji-pick';
      b.textContent = em;
      b.addEventListener('click', () => {
        input.value += em;
        input.focus();
      });
      pickerTray.append(b);
    }

    $('.emoji-toggle').addEventListener('click', () => {
      pickerTray.hidden = !pickerTray.hidden;
    });

    $('.gif-toggle').addEventListener('click', () => {
      if (reactionsDisabled) return;
      spawnFloatingReaction('fire', session?.nickname || 'You');
      socket.request('sendReaction', { reactionType: 'fire' }).catch(() => {});
    });

    function spawnFloatingReaction(reactionType, who) {
      const emoji = REACTION_MAP[reactionType] || reactionType || '🥰';
      const el = document.createElement('div');
      el.className = 'floater';
      const dx = Math.round((Math.random() - 0.5) * 60);
      const dx2 = Math.round((Math.random() - 0.5) * 90);
      el.style.setProperty('--dx', `${dx}px`);
      el.style.setProperty('--dx2', `${dx2}px`);
      const span = document.createElement('span');
      span.textContent = emoji;
      el.append(span);
      if (who) {
        const tag = document.createElement('small');
        tag.textContent = who;
        el.append(tag);
      }
      floatStage.append(el);
      setTimeout(() => el.remove(), 2300);
    }

    // Profile drawer controls
    let selectedIcon = session?.userIcon || AVATARS[0];
    let selectedColor = session?.nameColor || COLORS[0];
    const iconsWrap = $('.p-icons');
    const colorsWrap = $('.p-colors');
    const badgeSel = $('.p-badge');
    const nickIn = $('.p-nick');

    function syncAvatarButton() {
      avatarBtn.textContent = selectedIcon || '🐻';
      avatarBtn.style.background = selectedColor || '#f5c56b';
    }
    syncAvatarButton();

    function renderProfileControls() {
      nickIn.value = session?.nickname || '';
      iconsWrap.replaceChildren(
        ...AVATARS.map((ic) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'chip';
          b.textContent = ic;
          b.dataset.selected = String(ic === selectedIcon);
          b.addEventListener('click', () => {
            selectedIcon = ic;
            renderProfileControls();
          });
          return b;
        })
      );
      colorsWrap.replaceChildren(
        ...COLORS.map((col) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'swatch';
          b.style.background = col;
          b.dataset.selected = String(col === selectedColor);
          b.addEventListener('click', () => {
            selectedColor = col;
            renderProfileControls();
          });
          return b;
        })
      );
    }

    for (const bg of BADGES) {
      const opt = document.createElement('option');
      opt.value = bg;
      opt.textContent = bg || 'No badge';
      badgeSel.append(opt);
    }
    badgeSel.value = session?.badge || '';
    renderProfileControls();

    $('.profile-btn').addEventListener('click', () => {
      membersDrawer.hidden = true;
      profileDrawer.hidden = !profileDrawer.hidden;
      if (!profileDrawer.hidden) renderProfileControls();
    });

    $('.pill-members').addEventListener('click', () => {
      profileDrawer.hidden = true;
      membersDrawer.hidden = !membersDrawer.hidden;
    });

    $('.pill-share').addEventListener('click', () => {
      const url = session?.partyUrl || location.href;
      navigator.clipboard?.writeText(url).catch(() => {});
      toast.dataset.show = 'true';
      setTimeout(() => (toast.dataset.show = 'false'), 1400);
    });

    $('.resync-btn').addEventListener('click', () => sync?.resync());
    $('.resync-inline').addEventListener('click', () => sync?.resync());

    $('.collapse-btn').addEventListener('click', () => applySidebarVisibility(false));
    reopenTab.addEventListener('click', () => applySidebarVisibility(true));

    $('.save-btn').addEventListener('click', () => {
      const nickname = nickIn.value.trim() || 'Guest';
      const userIcon = selectedIcon;
      const nameColor = selectedColor;
      const userBadge = badgeSel.value;
      if (session) {
        session.nickname = nickname;
        session.userIcon = userIcon;
        session.nameColor = nameColor;
        session.badge = userBadge;
      }
      syncAvatarButton();
      chrome.storage?.sync?.set({ nickname, userIcon, nameColor, badge: userBadge }).catch?.(() => {});
      socket
        .request('broadcastUserSettings', {
          userSettings: { userNickname: nickname, userIcon, nameColor, badge: userBadge },
        })
        .catch(() => {});
      profileDrawer.hidden = true;
    });

    function appendFeedNode(li, isChat = false) {
      const atBottom = feed.scrollHeight - feed.scrollTop - feed.clientHeight < 50;
      feed.append(li);
      while (feed.children.length > MAX_RENDERED) feed.firstChild.remove();
      if (atBottom) feed.scrollTop = feed.scrollHeight;
      if (!sidebarVisible && isChat) unreadBadge.textContent = String(++unread);
    }

    function appendActivityLine(text) {
      const li = document.createElement('li');
      li.className = 'act-row';
      li.textContent = text;
      appendFeedNode(li, false);
    }

    function render(m) {
      if (!m || typeof m.body !== 'string') return;
      const prof = profiles.get(m.userId) || {};
      const who = m.userNickname || prof.name || 'Guest';
      const icon = m.userIcon || prof.icon || '🐻';
      const color = m.nameColor || prof.color || '#f5c56b';
      const userBadge = m.badge || prof.badge || '';

      const li = document.createElement('li');
      if (m.isSystemMessage) {
        li.className = 'sys-row';
        const av = document.createElement('span');
        av.className = 'msg-avatar';
        av.style.background = color;
        av.textContent = icon;
        const txt = document.createElement('span');
        txt.textContent = m.body === 'joined' ? `${who} joined the party🎉` : m.body === 'left' ? `${who} left the party` : `${who} ${m.body}`;
        li.append(av, txt);
        appendFeedNode(li, false);
        return;
      }

      li.className = 'msg-row';
      const av = document.createElement('span');
      av.className = 'msg-avatar';
      av.style.background = color;
      av.textContent = icon;

      const bodyWrap = document.createElement('div');
      bodyWrap.className = 'msg-body';

      const meta = document.createElement('div');
      meta.className = 'msg-meta';
      const author = document.createElement('span');
      author.className = 'msg-author';
      author.style.color = color;
      author.textContent = who;
      meta.append(author);

      if (userBadge) {
        const bg = document.createElement('span');
        bg.className = 'msg-badge';
        bg.textContent = userBadge;
        meta.append(bg);
      }

      const text = document.createElement('div');
      text.className = 'msg-text';
      text.textContent = m.body;

      bodyWrap.append(meta, text);
      li.append(av, bodyWrap);
      appendFeedNode(li, true);
    }

    // Initial "created the party🎉" banner at top of session feed
    render({
      isSystemMessage: true,
      userIcon: session?.userIcon || '🐻',
      nameColor: session?.nameColor || '#f5c56b',
      userNickname: '',
      body: 'created the party🎉',
    });

    for (const m of snapshot.messages || []) render(m);
    unread = 0;
    unreadBadge.textContent = '';

    // Log playback jump/pause/play lines like Screenshot 3 ("jumped to 00:02")
    let lastLoggedTime = Number(snapshot.lastKnownTime) || 0;
    let lastLoggedState = snapshot.state || 'paused';
    function logPlaybackChange(d) {
      if (!d) return;
      const newTime = Number(d.lastKnownTime);
      if (Number.isFinite(newTime) && Math.abs(newTime - lastLoggedTime) > 2500) {
        appendActivityLine(`jumped to ${formatTimestamp(newTime)}`);
      } else if (d.state && d.state !== lastLoggedState && Number.isFinite(newTime)) {
        appendActivityLine(`${d.state === 'paused' ? 'paused at' : 'playing at'} ${formatTimestamp(newTime)}`);
      }
      if (Number.isFinite(newTime)) lastLoggedTime = newTime;
      if (d.state) lastLoggedState = d.state;
    }

    let typingTimer = null;
    let typing = false;
    const setTyping = (on) => {
      clearTimeout(typingTimer);
      if (on) typingTimer = setTimeout(() => setTyping(false), TYPING_IDLE_MS);
      if (typing === on) return;
      typing = on;
      socket.fire('setTypingPresence', { typing: on });
    };
    input.addEventListener('input', () => setTyping(input.value.length > 0));

    $('.composer-card').addEventListener('submit', (e) => {
      e.preventDefault();
      const body = input.value.trim();
      if (!body) return;
      input.value = '';
      pickerTray.hidden = true;
      setTyping(false);
      socket.request('sendMessage', { body }).catch((err) => appendActivityLine(`Message not sent: ${err.message}`));
    });

    if (sync) {
      sync.on('local', logPlaybackChange);
    }

    const offs = [
      socket.on('sendMessage', render),
      socket.on('updateSession', logPlaybackChange),
      socket.on('userList', setMembers),
      socket.on('updateSettings', (d) => {
        if (d?.userId && d.userSettings) {
          profiles.set(d.userId, {
            name: d.userSettings.userNickname || 'Guest',
            icon: d.userSettings.userIcon || '🐻',
            color: d.userSettings.nameColor || '#f5c56b',
            badge: d.userSettings.badge || '',
          });
        }
      }),
      socket.on('partySettings', (d) => {
        if (d?.reactionsDisabled !== undefined) {
          reactionsDisabled = d.reactionsDisabled === 'true' || d.reactionsDisabled === true;
          reactionBar.hidden = reactionsDisabled;
        }
      }),
      socket.on('sendReaction', (d) => {
        if (reactionsDisabled || !d?.reactionType) return;
        const sender = d.userNickname || profiles.get(d.userId)?.name || '';
        spawnFloatingReaction(d.reactionType, sender);
      }),
      socket.on('setTypingPresence', (d) => {
        const others = (d?.usersTyping || []).filter((id) => id !== socket.userId).map((id) => profiles.get(id)?.name || 'Someone');
        $('.typing').textContent = others.length ? `${others.join(', ')} ${others.length > 1 ? 'are' : 'is'} typing…` : '';
      }),
    ];

    const place = () => (document.fullscreenElement || document.body)?.appendChild(host);
    const onFullscreen = () => place();
    document.addEventListener('fullscreenchange', onFullscreen);
    place();
    applySidebarVisibility(sidebarVisible);

    const cleanup = () => {
      if (NS._activeChat === cleanup) NS._activeChat = null;
      setTyping(false);
      clearTimeout(typingTimer);
      for (const off of offs) off();
      document.removeEventListener('fullscreenchange', onFullscreen);
      document.documentElement.removeAttribute('data-party-sync-sidebar');
      host.remove();
    };
    cleanup.setShowChat = applySidebarVisibility;
    cleanup.isVisible = () => sidebarVisible;
    NS._activeChat = cleanup;
    return cleanup;
  }

  NS.createChat = createChat;
})();
