'use strict';
// Shared QA harness: a protocol-level WebSocket client that speaks the same
// JSON envelope as the Teleparty extension's background worker, plus helpers to
// boot the server in-process (deterministic CI) or point at a remote deployment.
//
// Target selection (env):
//   QA_TARGET unset           -> boot server in-process on 127.0.0.1:<random>
//   QA_TARGET=ws://host:port  -> use that WebSocket endpoint, boot nothing
//   QA_TARGET=https://host     -> derive wss:// from the https origin
//
// The client mirrors the web client's PartySocket in server/public/js/connection.js:
//   req(type, data)  -> Promise<replyData>   (registers a callbackId, awaits the reply)
//   fire(type, data) -> void                  (callbackId "null", no reply expected)
//   next(type, pred) -> Promise<message>      (awaits the next matching server push)

const WebSocket = require('ws');

function resolveTarget() {
  const t = process.env.QA_TARGET;
  if (!t) return { mode: 'local' };
  if (/^wss?:\/\//.test(t)) return { mode: 'remote', wsUrl: t };
  if (/^https?:\/\//.test(t)) {
    const u = new URL(t);
    return { mode: 'remote', wsUrl: `${u.protocol === 'https:' ? 'wss' : 'ws'}://${u.host}` };
  }
  return { mode: 'remote', wsUrl: `ws://${t}` };
}

// Boot the server in-process on an ephemeral port. Returns { wsUrl, httpBase, close }.
async function bootLocalServer() {
  process.env.LOG = process.env.LOG ?? '0';
  const { httpServer, wss } = require('../../../src/server');
  await new Promise((r) => httpServer.listen(0, '127.0.0.1', r));
  const { port } = httpServer.address();
  return {
    wsUrl: `ws://127.0.0.1:${port}`,
    httpBase: `http://127.0.0.1:${port}`,
    close() {
      for (const c of wss.clients) c.terminate();
      wss.close();
      httpServer.close();
    },
  };
}

// Returns a harness: { wsUrl, httpBase?, client(), closeAll() }.
async function createHarness() {
  const target = resolveTarget();
  let server = null;
  let wsUrl;
  let httpBase = null;
  if (target.mode === 'local') {
    server = await bootLocalServer();
    wsUrl = server.wsUrl;
    httpBase = server.httpBase;
  } else {
    wsUrl = target.wsUrl;
    httpBase = wsUrl.replace(/^ws/, 'http');
  }

  const open = new Set();

  function client() {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(wsUrl);
      open.add(ws);
      const inbox = [];
      const waiters = [];
      const pending = new Map();
      let seq = 0;
      const t = setTimeout(() => reject(new Error(`client connect timeout to ${wsUrl}`)), 8000);

      ws.on('error', (e) => reject(e));
      ws.on('message', (raw) => {
        const m = JSON.parse(raw);
        if (m.callbackId && pending.has(m.callbackId)) {
          pending.get(m.callbackId)(m.data);
          pending.delete(m.callbackId);
          return;
        }
        inbox.push(m);
        for (const w of [...waiters]) {
          if (w.pred(m)) {
            waiters.splice(waiters.indexOf(w), 1);
            inbox.splice(inbox.indexOf(m), 1);
            w.resolve(m);
          }
        }
        if (m.type === 'userId') {
          clearTimeout(t);
          api.userId = m.data.userId;
          resolve(api);
        }
      });

      const api = {
        ws,
        userId: null,
        inbox,
        req: (type, data) =>
          new Promise((r) => {
            const id = String(++seq);
            pending.set(id, r);
            ws.send(JSON.stringify({ type, data, callbackId: id }));
          }),
        fire: (type, data) => ws.send(JSON.stringify({ type, data, callbackId: 'null' })),
        next: (type, pred = () => true, ms = 3000) =>
          new Promise((res, rej) => {
            const hit = inbox.find((m) => m.type === type && pred(m));
            if (hit) {
              inbox.splice(inbox.indexOf(hit), 1);
              return res(hit);
            }
            const timer = setTimeout(() => rej(new Error(`timeout waiting for ${type}`)), ms);
            waiters.push({
              pred: (m) => m.type === type && pred(m),
              resolve: (m) => {
                clearTimeout(timer);
                res(m);
              },
            });
          }),
        close: () => ws.close(),
      };
    });
  }

  return {
    mode: target.mode,
    wsUrl,
    httpBase,
    client,
    closeAll() {
      for (const ws of open) try { ws.terminate(); } catch {}
      if (server) server.close();
    },
  };
}

module.exports = { createHarness, resolveTarget };
