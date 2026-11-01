(function () {
  const NS = (globalThis.PartySync ||= {});
  const TYPING_IDLE_MS = 2500;
  const MAX_RENDERED = 200;

  // Party chat overlay. Returns a cleanup function.
  function createChat({ socket, snapshot }) {
    const names = new Map();
    const setMembers = (list) => {
      if (!Array.isArray(list)) return;
      for (const m of list) names.set(m.userId, m.userSettings?.userNickname || 'Guest');
    };
    setMembers(snapshot.userList);

    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;right:12px;bottom:96px;z-index:2147483647;';
    NS.isolateEvents(host);
    const root = host.attachShadow({ mode: 'closed' });
    root.innerHTML = `<style>
      :host{all:initial}
      *{box-sizing:border-box;font:13px/1.35 system-ui,sans-serif}
      .toggle{all:unset;cursor:pointer;float:right;color:#fff;font:600 13px/1.35 system-ui,sans-serif;padding:8px 12px;border-radius:999px;background:rgba(20,20,30,.78);backdrop-filter:blur(8px)}
      .toggle b{display:inline-block;min-width:16px;margin-left:6px;padding:0 5px;border-radius:999px;background:#6366f1;text-align:center;font-size:11px}
      .toggle b:empty{display:none}
      .panel{clear:both;width:300px;height:360px;margin-top:8px;display:flex;flex-direction:column;border-radius:14px;overflow:hidden;background:rgba(16,16,24,.88);backdrop-filter:blur(12px);color:#e5e7eb;box-shadow:0 8px 30px rgba(0,0,0,.45)}
      .panel[hidden]{display:none}
      ul{list-style:none;margin:0;padding:10px 12px;flex:1;overflow-y:auto}
      li{margin:0 0 8px;word-wrap:break-word}
      li .who{font-weight:600;color:#a5b4fc;margin-right:6px}
      li.system{color:#9ca3af;font-style:italic}
      .typing{min-height:18px;padding:0 12px;color:#9ca3af;font-size:12px}
      form{display:flex;gap:6px;padding:8px;border-top:1px solid rgba(255,255,255,.08)}
      input{flex:1;min-width:0;padding:8px 10px;border:0;border-radius:8px;background:rgba(255,255,255,.08);color:#fff;outline:none}
      button[type=submit]{all:unset;cursor:pointer;padding:8px 12px;border-radius:8px;background:#6366f1;color:#fff;font:600 13px/1.35 system-ui,sans-serif}
    </style>
    <button class="toggle" type="button">Chat<b></b></button>
    <div class="panel" hidden>
      <ul></ul>
      <div class="typing"></div>
      <form><input maxlength="2000" placeholder="Say something…" autocomplete="off"><button type="submit">Send</button></form>
    </div>`;

    const $ = (s) => root.querySelector(s);
    const list = $('ul');
    const panel = $('.panel');
    const badge = $('.toggle b');
    const input = $('input');
    let unread = 0;

    $('.toggle').addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      if (!panel.hidden) {
        unread = 0;
        badge.textContent = '';
        list.scrollTop = list.scrollHeight;
        input.focus();
      }
    });

    function render(m) {
      if (!m || typeof m.body !== 'string') return;
      const li = document.createElement('li');
      const who = m.userNickname || names.get(m.userId) || 'Guest';
      if (m.isSystemMessage) {
        li.className = 'system';
        li.textContent = `${who} ${m.body}`;
      } else {
        const name = document.createElement('span');
        name.className = 'who';
        name.textContent = who;
        li.append(name, m.body);
      }
      const atBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 40;
      list.append(li);
      while (list.children.length > MAX_RENDERED) list.firstChild.remove();
      if (atBottom) list.scrollTop = list.scrollHeight;
      if (panel.hidden && !m.isSystemMessage) badge.textContent = String(++unread);
    }

    for (const m of snapshot.messages || []) render(m);
    unread = 0;
    badge.textContent = '';

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

    $('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const body = input.value.trim();
      if (!body) return;
      input.value = '';
      setTyping(false);
      socket.request('sendMessage', { body }).catch((err) => render({ isSystemMessage: true, userNickname: 'Message not sent:', body: err.message }));
    });

    const offs = [
      socket.on('sendMessage', render),
      socket.on('userList', setMembers),
      socket.on('setTypingPresence', (d) => {
        const others = (d?.usersTyping || []).filter((id) => id !== socket.userId).map((id) => names.get(id) || 'Someone');
        $('.typing').textContent = others.length ? `${others.join(', ')} ${others.length > 1 ? 'are' : 'is'} typing…` : '';
      }),
    ];

    const place = () => (document.fullscreenElement || document.body)?.appendChild(host);
    const onFullscreen = () => place();
    document.addEventListener('fullscreenchange', onFullscreen);
    place();

    return () => {
      setTyping(false);
      clearTimeout(typingTimer);
      for (const off of offs) off();
      document.removeEventListener('fullscreenchange', onFullscreen);
      host.remove();
    };
  }

  NS.createChat = createChat;
})();
