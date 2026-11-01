/*******************************************************
 * Copyright (C) 2018-2024 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  "use strict";
  (() => {
    if (self.__tpF1TvWebpackHookInstalled) return;
    self.__tpF1TvWebpackHookInstalled = !0;
    const t = "webpackChunkbitmovin_player";
    self.__tpF1MediaPlayers = self.__tpF1MediaPlayers || [];
    let e = self[t] || [],
      o = !1,
      n = null;
    const r = new Set(),
      c = [];
    let i = null;
    function f() {
      var t, e, o, n;
      try {
        return !!(null ===
          (n =
            null ===
              (o =
                null ===
                  (e =
                    null === (t = self.Tiledmedia) || void 0 === t
                      ? void 0
                      : t.mainPostDispatcher) || void 0 === e
                  ? void 0
                  : e.registeredPlayers) || void 0 === o
              ? void 0
              : o.get) || void 0 === n
          ? void 0
          : n.call(o, 0));
      } catch (t) {
        return !1;
      }
    }
    function l(t) {
      if (!o || "tiledmedia" === t) {
        ((o = !0), i && (clearInterval(i), (i = null)));
        for (const t of c)
          try {
            t.restore();
          } catch (t) {}
        ((c.length = 0),
          r.clear(),
          console.log("[TP F1TV] webpack hook stopped:", t));
      }
    }
    function u(t) {
      try {
        const e = Function.prototype.toString.call(t);
        return (
          e.includes(".prototype.seek") &&
          e.includes(".prototype.play") &&
          e.includes(".prototype.pause") &&
          e.includes(".prototype.getCurrentTime")
        );
      } catch (t) {
        return !1;
      }
    }
    function s(t) {
      if ("function" != typeof t) return !1;
      const e = t.prototype;
      return (
        !!e &&
        "function" == typeof e.seek &&
        "function" == typeof e.play &&
        "function" == typeof e.pause &&
        "function" == typeof e.getCurrentTime
      );
    }
    function a(t) {
      if (!t || ("object" != typeof t && "function" != typeof t)) return;
      if (t.t) return;
      t.t = !0;
      ((self.__tpF1MediaPlayers || (self.__tpF1MediaPlayers = [])).push(t),
        (self.__tpPlayer = t));
    }
    function d(t, e) {
      var n;
      if (o) return !1;
      const r = (function (t) {
        if (!t) return null;
        const e = [t.MediaPlayer, t.e, t.default];
        for (const t of e) if (s(t)) return t;
        const o = [t];
        try {
          o.push(...Object.values(t));
        } catch (t) {}
        try {
          for (const e of Object.getOwnPropertyNames(t))
            try {
              o.push(t[e]);
            } catch (t) {}
        } catch (t) {}
        for (const t of o) if (s(t)) return t;
        return null;
      })(t);
      return r
        ? ((function (t) {
            if (((self.__tpF1MediaPlayers = self.__tpF1MediaPlayers || []), !t))
              return t;
            if (t.o)
              return (
                self.__MediaPlayerClass || (self.__MediaPlayerClass = t),
                self.__MediaPlayerClass || t
              );
            for (const e of ["play", "pause", "seek", "getCurrentTime"]) {
              const o = t.prototype;
              if (!o) break;
              const n = o[e];
              if ("function" != typeof n || n.i) continue;
              const r = function (...t) {
                return (a(this), n.apply(this, t));
              };
              r.i = !0;
              try {
                o[e] = r;
              } catch (t) {}
            }
            const e = new Proxy(t, {
              construct(t, e, o) {
                const n = Reflect.construct(t, e, o);
                return (a(n), n);
              },
            });
            ((e.o = !0),
              (t.o = !0),
              (self.__MediaPlayerClass = e),
              console.log(
                "[TP F1TV] Patched MediaPlayer to track instances on window.__tpF1MediaPlayers",
              ));
          })(r),
          console.log(
            "[TP F1TV] Captured MediaPlayer from module",
            e,
            self.__MediaPlayerClass,
          ),
          l("captured"),
          !0)
        : (t &&
            (t.MediaPlayer || t.e) &&
            console.warn(
              "[TP F1TV] Module",
              e,
              "had MediaPlayer/e export but prototype signature mismatch",
              t.MediaPlayer || t.e,
              null === (n = t.MediaPlayer || t.e) || void 0 === n
                ? void 0
                : n.prototype,
            ),
          !1);
    }
    function p(t, e) {
      if ("function" != typeof e || e.l) return e;
      function r(r, c, i) {
        i && (n = i);
        const f = e.apply(this, arguments);
        if (!o) {
          d((r && r.exports) || c, t);
        }
        return f;
      }
      r.l = !0;
      try {
        Object.defineProperty(r, "name", { value: e.name, configurable: !0 });
      } catch (t) {}
      try {
        const t = Object.getOwnPropertyDescriptors(e);
        for (const e of Reflect.ownKeys(t))
          if ("prototype" !== e && "name" !== e && "length" !== e)
            try {
              Object.defineProperty(r, e, t[e]);
            } catch (t) {}
      } catch (t) {}
      return r;
    }
    function y(t) {
      const e = null == t ? void 0 : t[1];
      if (e)
        for (const t of Object.keys(e)) {
          const o = e[t];
          "function" == typeof o &&
            u(o) &&
            (r.add(t),
            (e[t] = p(t, o)),
            Number(t) in e && (e[Number(t)] = e[t]),
            console.log("[TP F1TV] Possible MediaPlayer module:", t));
        }
    }
    function v(t) {
      var e, i;
      if (!Array.isArray(t) || t.u) return;
      t.u = !0;
      let u = t.push.bind(t);
      if (
        (c.push({
          array: t,
          restore: () => {
            try {
              Object.defineProperty(t, "push", {
                configurable: !0,
                writable: !0,
                value: u,
              });
            } catch (e) {
              try {
                t.push = u;
              } catch (t) {}
            }
            t.u = !1;
          },
        }),
        Object.defineProperty(t, "push", {
          configurable: !0,
          get() {
            const t = u;
            return function (...e) {
              var c, i;
              if (!o)
                if (f()) l("tiledmedia");
                else for (const t of e) y(t);
              const u = t.apply(this, e);
              if (!o && n)
                try {
                  const t = n.c || n.cache;
                  if (t)
                    for (const e of r) {
                      if (
                        d(
                          (null === (c = t[e]) || void 0 === c
                            ? void 0
                            : c.exports) ||
                            (null === (i = t[Number(e)]) || void 0 === i
                              ? void 0
                              : i.exports),
                          e,
                        )
                      )
                        break;
                    }
                } catch (t) {}
              return u;
            };
          },
          set(e) {
            u = "function" == typeof e ? e.bind(t) : e;
          },
        }),
        !o && t.length && n)
      )
        for (const t of r)
          try {
            d(
              null ===
                (i = null === (e = n.c) || void 0 === e ? void 0 : e[t]) ||
                void 0 === i
                ? void 0
                : i.exports,
              t,
            );
          } catch (t) {}
    }
    if (f())
      return (
        console.log(
          "[TP F1TV] Tiledmedia player present; skipping Bitmovin webpack hook",
        ),
        void (o = !0)
      );
    (v(e),
      self[t]
        ? Array.isArray(self[t]) && v(self[t])
        : Object.defineProperty(self, t, {
            configurable: !0,
            get: () => e,
            set(t) {
              o ? (e = t) : ((e = t), v(t));
            },
          }),
      (i = setInterval(() => {
        if (o) return (clearInterval(i), void (i = null));
        f() && l("tiledmedia");
      }, 1e3)),
      console.log("[TP F1TV] document_start webpack hook installed for", t));
  })();
})();
