/*******************************************************
 * Copyright (C) 2018-2024 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  var t = {
      736(t, i, n) {
        t.exports = function (t) {
          function i(t) {
            let n,
              s,
              o,
              r = null;
            function a(...t) {
              if (!a.enabled) return;
              const e = a,
                s = Number(new Date()),
                o = s - (n || s);
              ((e.diff = o),
                (e.prev = n),
                (e.curr = s),
                (n = s),
                (t[0] = i.coerce(t[0])),
                "string" != typeof t[0] && t.unshift("%O"));
              let r = 0;
              ((t[0] = t[0].replace(/%([a-zA-Z%])/g, (n, s) => {
                if ("%%" === n) return "%";
                r++;
                const o = i.formatters[s];
                if ("function" == typeof o) {
                  const i = t[r];
                  ((n = o.call(e, i)), t.splice(r, 1), r--);
                }
                return n;
              })),
                i.formatArgs.call(e, t));
              (e.log || i.log).apply(e, t);
            }
            return (
              (a.namespace = t),
              (a.useColors = i.useColors()),
              (a.color = i.selectColor(t)),
              (a.extend = e),
              (a.destroy = i.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== r
                    ? r
                    : (s !== i.namespaces &&
                        ((s = i.namespaces), (o = i.enabled(t))),
                      o),
                set: (t) => {
                  r = t;
                },
              }),
              "function" == typeof i.init && i.init(a),
              a
            );
          }
          function e(t, n) {
            const e = i(this.namespace + (void 0 === n ? ":" : n) + t);
            return ((e.log = this.log), e);
          }
          function s(t, i) {
            let n = 0,
              e = 0,
              s = -1,
              o = 0;
            for (; n < t.length;)
              if (e < i.length && (i[e] === t[n] || "*" === i[e]))
                "*" === i[e] ? ((s = e), (o = n), e++) : (n++, e++);
              else {
                if (-1 === s) return !1;
                ((e = s + 1), o++, (n = o));
              }
            for (; e < i.length && "*" === i[e];) e++;
            return e === i.length;
          }
          return (
            (i.debug = i),
            (i.default = i),
            (i.coerce = function (t) {
              if (t instanceof Error) return t.stack || t.message;
              return t;
            }),
            (i.disable = function () {
              const t = [...i.names, ...i.skips.map((t) => "-" + t)].join(",");
              return (i.enable(""), t);
            }),
            (i.enable = function (t) {
              (i.save(t), (i.namespaces = t), (i.names = []), (i.skips = []));
              const n = ("string" == typeof t ? t : "")
                .trim()
                .replace(/\s+/g, ",")
                .split(",")
                .filter(Boolean);
              for (const t of n)
                "-" === t[0] ? i.skips.push(t.slice(1)) : i.names.push(t);
            }),
            (i.enabled = function (t) {
              for (const n of i.skips) if (s(t, n)) return !1;
              for (const n of i.names) if (s(t, n)) return !0;
              return !1;
            }),
            (i.humanize = n(6585)),
            (i.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
              );
            }),
            Object.keys(t).forEach((n) => {
              i[n] = t[n];
            }),
            (i.names = []),
            (i.skips = []),
            (i.formatters = {}),
            (i.selectColor = function (t) {
              let n = 0;
              for (let i = 0; i < t.length; i++)
                ((n = (n << 5) - n + t.charCodeAt(i)), (n |= 0));
              return i.colors[Math.abs(n) % i.colors.length];
            }),
            i.enable(i.load()),
            i
          );
        };
      },
      5089(t) {
        t.exports =
          '<div id="chat-wrapper" tpInjected>\n    <iframe\n        style="display: none"\n        id="tpChatFrame"\n        allow="autoplay; clipboard-read; web-share; clipboard-write; payment; camera; microphone;"\n        src="{CHAT_URL}"\n    >\n    </iframe>\n</div>\n';
      },
      6585(t) {
        var i = 1e3,
          n = 60 * i,
          e = 60 * n,
          s = 24 * e,
          o = 7 * s,
          r = 365.25 * s;
        function a(t, i, n, e) {
          var s = i >= 1.5 * n;
          return Math.round(t / n) + " " + e + (s ? "s" : "");
        }
        t.exports = function (t, u) {
          u = u || {};
          var c = typeof t;
          if ("string" === c && t.length > 0)
            return (function (t) {
              if ((t = String(t)).length > 100) return;
              var a =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  t,
                );
              if (!a) return;
              var u = parseFloat(a[1]);
              switch ((a[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return u * r;
                case "weeks":
                case "week":
                case "w":
                  return u * o;
                case "days":
                case "day":
                case "d":
                  return u * s;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return u * e;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return u * n;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return u * i;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return u;
                default:
                  return;
              }
            })(t);
          if ("number" === c && isFinite(t))
            return u.long
              ? (function (t) {
                  var o = Math.abs(t);
                  if (o >= s) return a(t, o, s, "day");
                  if (o >= e) return a(t, o, e, "hour");
                  if (o >= n) return a(t, o, n, "minute");
                  if (o >= i) return a(t, o, i, "second");
                  return t + " ms";
                })(t)
              : (function (t) {
                  var o = Math.abs(t);
                  if (o >= s) return Math.round(t / s) + "d";
                  if (o >= e) return Math.round(t / e) + "h";
                  if (o >= n) return Math.round(t / n) + "m";
                  if (o >= i) return Math.round(t / i) + "s";
                  return t + "ms";
                })(t);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(t),
          );
        };
      },
      7076(t) {
        t.exports =
          '<style tpInjected>\n    /* Critical hide rules inline so icons never flash before overlay.css loads.\n     * ID+class beats #tp-buttons-container { display: flex !important }. */\n    #tpIconContainer.tp-hidden,\n    #tp-buttons-container.tp-hidden,\n    #tp-error-box.tp-hidden,\n    .tp-hidden {\n        display: none !important;\n    }\n    #tp-buttons-container {\n        position: fixed;\n        right: 30px;\n        top: 50px;\n        z-index: 9999;\n        width: 50px;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 4px;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n</style>\n<div class="tp-hidden" id="tpIconContainer" tpInjected>\n    <div class="tp-hidden" id="tp-buttons-container">\n        <button id="tp-icon-container">\n            <img id="tp-icon-white" src="{EXTENSION_LOGO_GRADIENT}" />\n            <img id="play-chat-icon" class="tp-hidden" src="{PLAY_CHAT}" />\n            <span class="tooltiptext extension-txt" style="width: 120px">Open Teleparty</span>\n            <div class="tp-hidden" id="tp-message-indicator"></div>\n        </button>\n        <div class="tp-seperator"></div>\n        \x3c!-- <button class="tp-control-button" id="tp-friends-button">\n            <img id="tp-friends-image" src=\'{FRIENDS_IMAGE}\' />\n            <span class="tooltiptext extension-txt" style="width: 120px;"> Friends List</span>\n        </button> --\x3e\n        <div class="tp-hidden" id="tp-party-active">\n            <button class="tp-control-button" id="tp-link-button">\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-copy_link" src="{LINK_IMAGE}" />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-copy_link" src="{LINK_ACTIVE_IMAGE}" />\n                <span class="tooltiptext extension-txt" style="width: 120px">Copy link</span>\n            </button>\n            <button class="tp-control-button" id="tp-chat-button">\n                <img\n                    id="tp-chat-reset"\n                    class="tp-center-image hidden"\n                    data-tp-id="overlay-reset_chat"\n                    src="{RESET_CHAT_IMAGE}"\n                />\n                <img id="tp-chat-hidden" class="tp-button-image tp-center-image" src="{CHAT_HIDDEN_IMAGE}" />\n                <img id="tp-chat-gray" class="hidden tp-button-image tp-center-image" src="{CHAT_GRAY_IMAGE}" />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-show_chat" src="{CHAT_ACTIVE_IMAGE}" />\n                <div class="tp-hidden" id="tp-message-indicator"></div>\n                <span class="tooltiptext extension-txt" style="width: 120px">Show chat</span>\n            </button>\n            <button class="tp-control-button" id="tp-disconnect-button">\n                <img\n                    class="tp-button-image tp-center-image"\n                    data-tp-id="overlay-leave_party"\n                    src="{DISCONNECT_IMAGE}"\n                />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-leave_party" src="{DISCONNECT_IMAGE}" />\n                <span class="tooltiptext extension-txt" style="width: 120px">Leave Party</span>\n            </button>\n        </div>\n    </div>\n    \x3c!-- <button class="hidden tp-control-button" id="tp-chat-close-button">\n        <img id="tp-start-image" data-tp-id="overlay-hide_chat" src=\'{ARROW_RIGHT}\' />\n        <span class="tooltiptext extension-txt" style="width: 100px;">Hide chat</span>\n    </button> --\x3e\n    <div id="tp-error-box" class="tp-hidden">\n        <p class="extension-txt-indicator" id="tp-controls-error-text">\n            Failed to connect to background script. Please Try again later\n        </p>\n    </div>\n</div>\n';
      },
      7588() {
        !(function (t, i, n) {
          "use strict";
          if (t.MutationObserver && "undefined" != typeof HTMLElement) {
            var e,
              s = 0,
              o =
                ((e =
                  HTMLElement.prototype.matches ||
                  HTMLElement.prototype.webkitMatchesSelector ||
                  HTMLElement.prototype.mozMatchesSelector ||
                  HTMLElement.prototype.msMatchesSelector),
                {
                  matchesSelector: function (t, i) {
                    return t instanceof HTMLElement && e.call(t, i);
                  },
                  addMethod: function (t, i, n) {
                    var e = t[i];
                    t[i] = function () {
                      return n.length == arguments.length
                        ? n.apply(this, arguments)
                        : "function" == typeof e
                          ? e.apply(this, arguments)
                          : void 0;
                    };
                  },
                  callCallbacks: function (t, i, n) {
                    if (t.length) {
                      i &&
                        i.options.onceOnly &&
                        ((t = [t[0]]),
                        i.me.unbindEventWithSelectorAndCallback.call(
                          i.target,
                          i.selector,
                          i.callback,
                        ));
                      for (var e, s = 0; (e = t[s]); s++)
                        e && e.callback && e.callback.call(e.elem, e.elem);
                      i &&
                        i.callback &&
                        n &&
                        n.addTimeoutHandler(
                          i.target,
                          i.selector,
                          i.callback,
                          i.options,
                          i.data,
                        );
                    }
                  },
                  checkChildNodesRecursively: function (t, i, n, e) {
                    for (var s, r = 0; (s = t[r]); r++)
                      (n(s, i, e) && e.push({ callback: i.callback, elem: s }),
                        s.childNodes.length > 0 &&
                          o.checkChildNodesRecursively(s.childNodes, i, n, e));
                  },
                  mergeArrays: function (t, i) {
                    var n,
                      e = {};
                    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    for (n in i) i.hasOwnProperty(n) && (e[n] = i[n]);
                    return e;
                  },
                  toElementsArray: function (i) {
                    return (
                      void 0 === i ||
                        ("number" == typeof i.length && i !== t) ||
                        (i = [i]),
                      i
                    );
                  },
                }),
              r = (function () {
                var t = function () {
                  ((this.i = []), (this.u = null), (this.l = null));
                };
                return (
                  (t.prototype.addEvent = function (t, i, n, e, s) {
                    var o = {
                      target: t,
                      selector: i,
                      options: n,
                      callback: e,
                      data: s,
                      firedElems: [],
                    };
                    return (this.u && this.u(o), this.i.push(o), o);
                  }),
                  (t.prototype.removeEvent = function (t) {
                    for (var i, n = this.i.length - 1; (i = this.i[n]); n--)
                      if (t(i)) {
                        (this.l && this.l(i),
                          i.data &&
                            i.data.timeoutId &&
                            clearTimeout(i.data.timeoutId));
                        var e = this.i.splice(n, 1);
                        e && e.length && (e[0].callback = null);
                      }
                  }),
                  (t.prototype.beforeAdding = function (t) {
                    this.u = t;
                  }),
                  (t.prototype.beforeRemoving = function (t) {
                    this.l = t;
                  }),
                  t
                );
              })(),
              a = function (i, e) {
                var s = new r(),
                  a = this,
                  u = { fireOnAttributesModification: !1 };
                return (
                  s.beforeAdding(function (n) {
                    var s,
                      o = n.target;
                    ((o !== t.document && o !== t) ||
                      (o = document.getElementsByTagName("html")[0]),
                      (s = new MutationObserver(function (t) {
                        e.call(this, t, n);
                      })));
                    var r = i(n.options);
                    (s.observe(o, r), (n.observer = s), (n.me = a));
                  }),
                  s.beforeRemoving(function (t) {
                    t.observer.disconnect();
                  }),
                  (this.bindEvent = function (t, i, n) {
                    i = o.mergeArrays(u, i);
                    for (
                      var e = o.toElementsArray(this), r = 0;
                      r < e.length;
                      r++
                    ) {
                      const o = {};
                      (a.addTimeoutHandler(e[r], t, n, i, o),
                        s.addEvent(e[r], t, i, n, o));
                    }
                  }),
                  (this.unbindEvent = function () {
                    var t = o.toElementsArray(this);
                    s.removeEvent(function (i) {
                      for (var e = 0; e < t.length; e++)
                        if (this === n || i.target === t[e]) return !0;
                      return !1;
                    });
                  }),
                  (this.unbindEventWithSelectorOrCallback = function (t) {
                    var i,
                      e = o.toElementsArray(this),
                      r = t;
                    ((i =
                      "function" == typeof t
                        ? function (t) {
                            for (var i = 0; i < e.length; i++)
                              if (
                                (this === n || t.target === e[i]) &&
                                t.callback === r
                              )
                                return !0;
                            return !1;
                          }
                        : function (i) {
                            for (var s = 0; s < e.length; s++)
                              if (
                                (this === n || i.target === e[s]) &&
                                i.selector === t
                              )
                                return !0;
                            return !1;
                          }),
                      s.removeEvent(i));
                  }),
                  (this.unbindEventWithSelectorAndCallback = function (t, i) {
                    var e = o.toElementsArray(this);
                    s.removeEvent(function (s) {
                      for (var o = 0; o < e.length; o++)
                        if (
                          (this === n || s.target === e[o]) &&
                          s.selector === t &&
                          s.callback === i
                        )
                          return !0;
                      return !1;
                    });
                  }),
                  (this.addTimeoutHandler = function (t, i, n, e, s) {
                    !e.timeout ||
                      e.timeout <= 0 ||
                      (s.timeoutId && clearTimeout(s.timeoutId),
                      (s.timeoutId = setTimeout(() => {
                        (a.unbindEventWithSelectorAndCallback.call(t, i, n),
                          n.call(null, null));
                      }, e.timeout)));
                  }),
                  this
                );
              },
              u = new (function () {
                var t = {
                  fireOnAttributesModification: !1,
                  onceOnly: !1,
                  existing: !1,
                  timeout: 0,
                };
                function i(t, i, e) {
                  return (
                    !(
                      !o.matchesSelector(t, i.selector) ||
                      (t.p === n && (t.p = s++),
                      -1 != i.firedElems.indexOf(t.p))
                    ) && (i.firedElems.push(t.p), !0)
                  );
                }
                var e = (u = new a(
                  function (t) {
                    var i = { attributes: !1, childList: !0, subtree: !0 };
                    return (
                      t.fireOnAttributesModification && (i.attributes = !0),
                      i
                    );
                  },
                  function (t, n) {
                    t.forEach(function (t) {
                      var e = t.addedNodes,
                        s = t.target,
                        r = [];
                      (null !== e && e.length > 0
                        ? o.checkChildNodesRecursively(e, n, i, r)
                        : "attributes" === t.type &&
                          i(s, n, r) &&
                          r.push({ callback: n.callback, elem: s }),
                        o.callCallbacks(r, n, u));
                    });
                  },
                )).bindEvent;
                return (
                  (u.bindEvent = function (i, s, r) {
                    var a =
                        "object" == typeof s ? o.mergeArrays(t, s) : { ...t },
                      u =
                        "function" == typeof r
                          ? r
                          : "function" == typeof s
                            ? s
                            : n,
                      c = o.toElementsArray(this);
                    if ((u || (a.onceOnly = !0), a.existing)) {
                      for (var h = [], l = 0; l < c.length; l++)
                        for (
                          var d = c[l].querySelectorAll(i), p = 0;
                          p < d.length;
                          p++
                        )
                          h.push({ callback: u, elem: d[p] });
                      if (a.onceOnly && h.length)
                        return u
                          ? u.call(h[0].elem, h[0].elem)
                          : Promise.resolve(h[0].elem);
                      setTimeout(o.callCallbacks, 1, h);
                    }
                    if (!u) {
                      var f = this;
                      return new Promise((t) => e.call(f, i, a, t));
                    }
                    e.call(this, i, a, u);
                  }),
                  u
                );
              })(),
              c = new (function () {
                var t = { onceOnly: !1, timeout: 0 };
                function i(t, i) {
                  return o.matchesSelector(t, i.selector);
                }
                var e = (c = new a(
                  function () {
                    return { childList: !0, subtree: !0 };
                  },
                  function (t, n) {
                    t.forEach(function (t) {
                      var e = t.removedNodes,
                        s = [];
                      (null !== e &&
                        e.length > 0 &&
                        o.checkChildNodesRecursively(e, n, i, s),
                        o.callCallbacks(s, n, c));
                    });
                  },
                )).bindEvent;
                return (
                  (c.bindEvent = function (i, s, r) {
                    var a =
                        "object" == typeof s ? o.mergeArrays(t, s) : { ...t },
                      u =
                        "function" == typeof r
                          ? r
                          : "function" == typeof s
                            ? s
                            : n;
                    if (!u) {
                      a.onceOnly = !0;
                      var c = this;
                      return new Promise((t) => e.call(c, i, a, t));
                    }
                    e.call(this, i, a, u);
                  }),
                  c
                );
              })();
            (i && d(i.fn),
              d(HTMLElement.prototype),
              d(NodeList.prototype),
              d(HTMLCollection.prototype),
              d(HTMLDocument.prototype),
              d(Window.prototype));
            var h = {};
            return (l(u, h, "unbindAllArrive"), l(c, h, "unbindAllLeave"), h);
          }
          function l(t, i, n) {
            (o.addMethod(i, n, t.unbindEvent),
              o.addMethod(i, n, t.unbindEventWithSelectorOrCallback),
              o.addMethod(i, n, t.unbindEventWithSelectorAndCallback));
          }
          function d(t) {
            ((t.arrive = u.bindEvent),
              l(u, t, "unbindArrive"),
              (t.leave = c.bindEvent),
              l(c, t, "unbindLeave"));
          }
        })(window, "undefined" == typeof jQuery ? null : jQuery, void 0);
      },
      7833(t, i, n) {
        ((i.formatArgs = function (i) {
          if (
            ((i[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              i[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const n = "color: " + this.color;
          i.splice(1, 0, n, "color: inherit");
          let e = 0,
            s = 0;
          (i[0].replace(/%[a-zA-Z%]/g, (t) => {
            "%%" !== t && (e++, "%c" === t && (s = e));
          }),
            i.splice(s, 0, n));
        }),
          (i.save = function (t) {
            try {
              t ? i.storage.setItem("debug", t) : i.storage.removeItem("debug");
            } catch (t) {}
          }),
          (i.load = function () {
            let t;
            try {
              t = i.storage.getItem("debug") || i.storage.getItem("DEBUG");
            } catch (t) {}
            !t &&
              "undefined" != typeof process &&
              "env" in process &&
              (t = "MISSING_ENV_VAR".DEBUG);
            return t;
          }),
          (i.useColors = function () {
            if (
              "undefined" != typeof window &&
              window.process &&
              ("renderer" === window.process.type || window.process.__nwjs)
            )
              return !0;
            if (
              "undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            )
              return !1;
            let t;
            return (
              ("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" != typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                (t = navigator.userAgent
                  .toLowerCase()
                  .match(/firefox\/(\d+)/)) &&
                parseInt(t[1], 10) >= 31) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (i.storage = (function () {
            try {
              return localStorage;
            } catch (t) {}
          })()),
          (i.destroy = (() => {
            let t = !1;
            return () => {
              t ||
                ((t = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                ));
            };
          })()),
          (i.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (i.log = console.debug || console.log || (() => {})),
          (t.exports = n(736)(i)));
        const { formatters: e } = t.exports;
        e.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      },
    },
    i = {};
  function n(e) {
    var s = i[e];
    if (void 0 !== s) return s.exports;
    var o = (i[e] = { exports: {} });
    return (t[e](o, o.exports, n), o.exports);
  }
  ((n.n = (t) => {
    var i = t && t.D ? () => t.default : () => t;
    return (n.d(i, { a: i }), i);
  }),
    (n.d = (t, i) => {
      for (var e in i)
        n.o(i, e) &&
          !n.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: i[e] });
    }),
    (n.o = (t, i) => Object.prototype.hasOwnProperty.call(t, i)),
    (() => {
      "use strict";
      const t = "Service_Background",
        i = "Popup",
        e = "Content_Script",
        s = "Page_Controls";
      var o;
      !(function (t) {
        ((t.CREATE_SESSION = "createSession"),
          (t.SCHEDULE_SESSION = "scheduleSession"),
          (t.LOBBY_RELAY_SEND_CHAT = "lobbyRelaySendChat"),
          (t.LOBBY_RELAY_SET_TYPING = "lobbyRelaySetTyping"),
          (t.LOBBY_RELAY_BIND_JOIN = "lobbyRelayBindJoin"),
          (t.SELECT_PROVIDER = "selectProvider"),
          (t.REPORT_STREAM_POSITION = "reportStreamPosition"),
          (t.RE_INJECT = "reInject"),
          (t.GET_INIT_DATA = "getInitData"),
          (t.GET_INIT_USER_SETTINGS = "getInitUserSettings"),
          (t.IS_CONTENT_SCRIPT_READY = "isContentScriptReady"),
          (t.IS_VIDEO_READY = "isVideoReady"),
          (t.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE =
            "getCustomStartPartyButtonMessage"),
          (t.CHANGE_FIREBASE_PASSWORD = "changeFirebasePassword"),
          (t.SET_CHAT_VISIBLE = "setChatVisible"),
          (t.SET_USER_REACTIONS_DISABLED = "setUserReactionsDisabled"),
          (t.DISCONNECT = "teardown"),
          (t.CLOSE_POPUP = "closePopup"),
          (t.GET_SCHEDULED_EVENTS = "getScheduledEvents"),
          (t.GET_RECENT_SCHEDULED_EVENTS = "getRecentScheduledEvents"),
          (t.GOOGLE_SIGN_IN = "googleSignIn"),
          (t.EMAIL_SIGN_IN = "emailSignIn"),
          (t.FORGOT_PASSWORD = "forgotPassword"),
          (t.EMAIL_SIGN_UP = "emailSignUp"),
          (t.ON_GOOGLE_SIGN_IN = "OnGoogleSignIn"),
          (t.CREATE_SCHEDULED_EVENT = "createScheduledEvent"),
          (t.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent"),
          (t.SET_USER_STATUS = "SET_USER_STATUS"),
          (t.SIGN_IN_CREATE = "SIGN_IN_CREATE"),
          (t.REDIRECT_DATA_SET = "redirectDataSet"),
          (t.LOAD_REDIRECT_URL_FINISHED = "loadRedirectUrlFinished"),
          (t.RESET_PASSWORD = "resetPassword"));
      })(o || (o = {}));
      const r = "https://api.teleparty.com",
        a = "https://www.teleparty.com",
        u = "https://files.teleparty.com";
      var c, h, l;
      const d = "undefined" != typeof chrome ? chrome.runtime : void 0,
        p = null !== (c = null == d ? void 0 : d.id) && void 0 !== c ? c : "",
        f =
          null !==
            (l =
              null === (h = null == d ? void 0 : d.getManifest()) ||
              void 0 === h
                ? void 0
                : h.version) && void 0 !== l
            ? l
            : "",
        D = "reactionContainerOpen",
        v = "https://sessions.teleparty.com",
        g = `${a}/sidebar`,
        m = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        w = "recentlyUsedEmojiMap",
        y = "redirectDataMap",
        b = [
          {
            annotation: "face with tears of joy",
            group: 0,
            order: 8,
            tags: ["face", "joy", "laugh", "tear"],
            unicode: "😂",
            version: 0.6,
            emoticon: ":')",
            shortcodes: ["joy", "lmao", "tears_of_joy"],
          },
          {
            annotation: "smiling face with heart-eyes",
            group: 0,
            order: 16,
            tags: ["eye", "face", "love", "smile"],
            unicode: "😍",
            version: 0.6,
            shortcodes: ["heart_eyes", "smiling_face_with_heart_eyes"],
          },
          {
            shortcodes: ["loudly_crying_face", "sob"],
            annotation: "loudly crying face",
            tags: ["cry", "face", "sad", "sob", "tear"],
            unicode: "😭",
            order: 93,
            group: 0,
            version: 0.6,
            emoticon: ":'o",
          },
          {
            shortcodes: ["pleading", "pleading_face"],
            annotation: "pleading face",
            tags: ["begging", "mercy", "puppy eyes"],
            unicode: "🥺",
            order: 85,
            group: 0,
            version: 11,
          },
          {
            shortcodes: ["rofl"],
            annotation: "rolling on the floor laughing",
            tags: ["face", "floor", "laugh", "rofl", "rolling", "rotfl"],
            unicode: "🤣",
            order: 7,
            group: 0,
            version: 3,
            emoticon: ":'D",
          },
          {
            annotation: "red heart",
            group: 0,
            order: 149,
            tags: ["heart"],
            unicode: "❤️",
            version: 0.6,
            emoticon: "<3",
            shortcodes: ["heart", "red_heart"],
          },
        ],
        C =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var F = console.log.bind(self.console),
        _ = function (t, i, n, e) {
          return new (n || (n = Promise))(function (s, o) {
            function r(t) {
              try {
                u(e.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(e.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var i;
              t.done
                ? s(t.value)
                : ((i = t.value),
                  i instanceof n
                    ? i
                    : new n(function (t) {
                        t(i);
                      })).then(r, a);
            }
            u((e = e.apply(t, i || [])).next());
          });
        };
      const E = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, i, n = 2e4) {
          return _(this, void 0, void 0, function* () {
            return new Promise((e, s) => {
              const o = setTimeout(() => {
                (console.log("send timeout"), s("Message Timeout"));
              }, n);
              try {
                chrome.tabs.sendMessage(i, t, (i) => {
                  (chrome.runtime.lastError &&
                    F(chrome.runtime.lastError.message + JSON.stringify(t)),
                    clearTimeout(o),
                    e(i));
                });
              } catch (t) {
                (clearTimeout(o), s(t));
              }
            });
          });
        }
        m(t, i) {
          return _(this, void 0, void 0, function* () {
            return new Promise((n, e) => {
              let s = null;
              i &&
                (s = setTimeout(() => {
                  e({ error: "Send Message Timeout" });
                }, i));
              try {
                chrome.runtime.sendMessage(p, t, (i) => {
                  (chrome.runtime.lastError &&
                    console.log(
                      chrome.runtime.lastError.message + JSON.stringify(t),
                    ),
                    s && clearTimeout(s),
                    n(i));
                });
              } catch (t) {
                (s && clearTimeout(s), e(t));
              }
            });
          });
        }
      })();
      class x {
        constructor(t, i, n) {
          ((this.sender = t), (this.target = i), (this.type = n));
        }
      }
      class k extends x {
        constructor(t, i, n) {
          (super(t, i, n), (this.C = n));
        }
      }
      var A, S, I, B;
      !(function (t) {
        ((t.BROADCAST = "brodadcast"),
          (t.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode"),
          (t.SEND_MESSAGE = "sendMessage"),
          (t.CONTENT_SCRIPT_READY = "contentScriptReady"),
          (t.CONTENT_SCRIPT_ERROR = "contentScriptError"),
          (t.TEARDOWN = "teardown"),
          (t.GET_SESSION_DATA = "getSessionData"),
          (t.SET_TYPING = "setTyping"),
          (t.SET_BUFFERING = "setBuffering"),
          (t.SET_WATCHING_ADS = "setWatchingAds"),
          (t.BROADCAST_USER_SETTINGS = "brodadcastUserSettings"),
          (t.SEND_REACTION = "sendReaction"),
          (t.SEND_GIF = "sendGIF"),
          (t.WEB_RTC = "webRTC"),
          (t.EVENT_SUCCESS = "eventSuccess"),
          (t.SELECT_PROVIDER = "selectProvider"),
          (t.REPORT_STREAM_POSITION = "reportStreamPosition"));
      })(A || (A = {}));
      class T extends k {
        constructor(t, i, n) {
          (super(t, i, A.GET_SESSION_DATA), (this.data = n));
        }
      }
      !(function (t) {
        ((t.JOIN_SESSION = "joinSession"),
          (t.LEAVE_SESSION = "leaveSession"),
          (t.ACCEPT_DROPIN = "acceptDropin"),
          (t.SET_STATUS_TYPE = "setStatusType"),
          (t.SET_DATA = "setData"),
          (t.GET_DATA = "getData"),
          (t.GET_STATUS_TYPE = "getStatusType"),
          (t.GET_PARTY_STATUS = "getPartyStatus"),
          (t.GET_TAB_PARTY_SESSION_FOR_POPUP = "getTabPartySessionForPopup"),
          (t.GET_VIDEO_DATA = "getVideoData"),
          (t.LOAD_SESSION = "loadSession"),
          (t.NO_SESSION_DATA = "noSessionData"),
          (t.ON_NOTIF = "onNotif"),
          (t.FORWARD_TO_SIDEBAR = "forwardToSidebar"),
          (t.TEARDOWN = "teardown"),
          (t.ON_VIDEO_UPDATE = "onVideoUpdate"),
          (t.SOCKET_LOST_CONNECTION = "socketLostConnection"),
          (t.REBOOT = "socketReconnect"),
          (t.LOG_EVENT = "logEvent"),
          (t.LOG_EXPERIMENT = "logExperiment"),
          (t.STAY_ALIVE = "stayAlive"),
          (t.LOAD_CHAT_WINDOW = "loadChatWindow"),
          (t.RESET_CHAT_WINDOW = "resetChatWindow"),
          (t.HIDE_CHAT_WINDOW = "hideChatWindow"),
          (t.SET_USER_PRESENCE = "setUserPresence"),
          (t.TOGGLE_OPEN_PARTY = "toggleOpenParty"),
          (t.GET_ACTIVE_PARTY = "getActiveParty"),
          (t.GET_TAB_ID = "getTabId"),
          (t.SET_ACTIVE_PARTY = "setActiveParty"),
          (t.FULLSCREEN_WINDOW = "fullscreenWindow"),
          (t.MAX_WINDOW = "maxWindow"),
          (t.GET_EXPERIMENT_FLAG = "getExpFlag"),
          (t.USER_LIST = "userList"),
          (t.USER_AUTHENTICATED = "userAuthenticated"),
          (t.BLOCK_CSP = "blockCSP"),
          (t.REDIRECT_DATA_SET = "redirectDataSet"),
          (t.LOAD_NETFLIX_DATA = "loadNetflixData"),
          (t.TOGGLE_BACKGROUND_TAB = "toggleBackgroundTab"),
          (t.GET_ALLCHAT_HAS_FOCUS = "getAllchatHasFocus"),
          (t.SET_REDIRECT_URL = "setRedirectUrl"),
          (t.GET_REDIRECT_URL = "getRedirectUrl"),
          (t.SET_POSTHOG_DISTINCT_ID = "setPosthogDistinctId"),
          (t.POSTHOG_HAS_FEATURE = "posthogHasFeature"),
          (t.GET_PERM_ID = "getPermId"),
          (t.GET_VALIDATIONS_FAILURE_INFO = "getValidationsFailureInfo"),
          (t.UPDATE_USER_SETTINGS = "updateUserSettings"),
          (t.UPDATE_HANDLE = "updateHandle"),
          (t.SEND_API_REQUEST = "sendApiRequest"),
          (t.PARTY_INIT_TIMING = "partyInitTiming"));
      })(S || (S = {}));
      class j {
        constructor() {
          ((this.F = this._.bind(this)), (this.k = []), this.A());
        }
        addMessageListener(t) {
          this.k.push(t);
        }
        removeMessageListener(t) {
          this.k = this.k.filter((t) => {});
        }
        A() {
          E.addListener(this.F);
        }
        teardown() {
          ((this.k = []), E.removeListener(this.F));
        }
        _(t, i, n) {
          if (!this.S(t)) return !1;
          return !!this.I(t, i, n) || (n({}), !1);
        }
        S(t) {
          return t.target === e;
        }
        I(t, i, n) {
          let e = !1;
          return (
            this.k.forEach((s) => {
              s.onMessage(t, i, n) && (e = !0);
            }),
            e
          );
        }
      }
      class $ extends x {
        constructor(t, i, n) {
          (super(t, i, n), (this.type = n));
        }
      }
      class P extends $ {
        constructor(t, i, n) {
          (super(t, i, S.PARTY_INIT_TIMING), (this.data = n));
        }
      }
      function L(i) {
        try {
          const n = new P(e, t, { marks: { [i]: Date.now() } });
          E.m(n).catch(() => {});
        } catch (t) {}
      }
      (!(function (t) {
        ((t.INIT_CHAT = "initChat"),
          (t.ON_MESSAGE = "onMessage"),
          (t.ON_BUFFER = "onBuffer"),
          (t.ON_TYPING = "onTyping"),
          (t.ON_WATCHING_ADS = "onWatchingAds"),
          (t.UPDATE_SETTINGS = "updateSettings"),
          (t.ON_REACTION = "onReaction"),
          (t.ON_GIF = "onGif"),
          (t.ON_LOG_EVENT = "onLogEvent"),
          (t.USER_LIST = "userList"),
          (t.ON_WEB_RTC = "onWebRTC"));
      })(I || (I = {})),
        (function (t) {
          ((t.SET_USER_LIST = "setUserList"),
            (t.SET_CONNECTION_ID = "setConnectionId"),
            (t.LOAD_INIT_DATA = "loadInitData"),
            (t.SET_PAGE_TITLE = "setPageTitle"),
            (t.ADD_GIF_MESSAGE = "addGifMessage"),
            (t.SIDEBAR_MESSAGING_READY = "sidebarMessagingReady"),
            (t.RESET_VIEW = "resetView"),
            (t.HIDE_CHAT = "hideChat"),
            (t.ON_UPDATE_SETTINGS = "onUpdateSettings"),
            (t.PREVIEW_REACTION = "previewReaction"),
            (t.UPDATE_SETTINGS = "updateSettings"),
            (t.UPDATE_ACTIONS_STATE = "updateActionsState"),
            (t.GO_NEXT_EPISODE = "goNextEpisode"),
            (t.SET_REACTIONS_ACTIVE = "setReactionsActive"),
            (t.ON_FOCUS = "onSidebarFocus"),
            (t.SET_USER_ICON_URL = "setUserIconUrl"),
            (t.SET_USER_ICON_FRAME_URL = "setUserIconFrameUrl"),
            (t.ADD_MESSAGE = "addMessage"),
            (t.CLEAR_MESSAGES = "clearMessages"),
            (t.SET_PRESENCE_MESSAGE = "setPresenceMessage"),
            (t.ON_PAGE_CLICK = "onPageClick"),
            (t.ON_PURCHASE = "onPurchase"),
            (t.DISPLAY_MODAL = "displayModal"),
            (t.OPEN_TAB = "openTab"),
            (t.ON_CHROME_STORAGE_UPDATE = "onChromeStorageUpdate"),
            (t.ON_WEB_RTC = "onWebRTC"),
            (t.SHARE_SHEET = "shareSheet"),
            (t.TRACK_DATA = "trackData"),
            (t.RESET_CHAT_WINDOW = "resetChatWindow"),
            (t.RECEIVED_MESSAGE = "receivedMessage"));
        })(B || (B = {})));
      const R = "Please open a video on Crunchyroll then click on the Tp icon",
        M =
          "Failed to read chrome storage. Please refresh the page and try again",
        O =
          "Failed to connect to Script. Please refresh the page and try again",
        V = "Not on player page.";
      var U = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const N = new (class {
        getItemAsync(t) {
          var i;
          return U(this, void 0, void 0, function* () {
            const n = yield chrome.storage.local.get(t);
            return null !== (i = n[t]) && void 0 !== i ? i : null;
          });
        }
        getItemsAsync(t) {
          return U(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError
                  ? (console.error(chrome.runtime.lastError), n(new Error(M)))
                  : i(t);
              });
            });
          });
        }
        getStorageUse() {
          return U(this, void 0, void 0, function* () {
            return new Promise((t, i) => {
              chrome.storage.local.getBytesInUse(null, (n) => {
                chrome.runtime.lastError
                  ? (console.error(chrome.runtime.lastError), i(new Error(M)))
                  : t(n);
              });
            });
          });
        }
        getAllItemsAsync() {
          return U(this, void 0, void 0, function* () {
            return new Promise((t, i) => {
              chrome.storage.local.get(null, (n) => {
                chrome.runtime.lastError
                  ? (console.error(chrome.runtime.lastError), i(new Error(M)))
                  : t(n);
              });
            });
          });
        }
      })();
      Object.freeze(N);
      const H = N;
      class G extends $ {
        constructor(t, i, n) {
          (super(t, i, S.GET_DATA), (this.data = n));
        }
      }
      class z {
        constructor(t, i, n, e, s, o = []) {
          ((this.requiredPermissions = t),
            (this.serverName = n),
            (this.name = e),
            (this.contentScripts = i),
            (this.syncFromEnd = s),
            (this.browseScripts = o));
        }
        validateVideoId(t) {
          return !!t;
        }
        validateVideoType(t) {
          return !!t;
        }
        urlWithSessionId(t) {
          return `${a}/join/${t}`;
        }
      }
      var Z = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const W = `tp_csrf:${new URL(r).origin}`;
      let Y = null;
      function Q() {
        var t, i, n;
        return Z(this, void 0, void 0, function* () {
          const e = yield fetch(`${r}/session/csrf`, {
            method: "GET",
            credentials: "include",
          });
          if (!e.ok) return;
          const s = yield e.json().catch(() => ({})),
            o =
              null !==
                (i =
                  null !== (t = null == s ? void 0 : s.csrf) && void 0 !== t
                    ? t
                    : null == s
                      ? void 0
                      : s.token) && void 0 !== i
                ? i
                : null === (n = null == s ? void 0 : s.data) || void 0 === n
                  ? void 0
                  : n.csrf;
          return "string" == typeof o && o
            ? ((function (t) {
                try {
                  if ("undefined" == typeof sessionStorage) return;
                  sessionStorage.setItem(
                    W,
                    JSON.stringify({ v: t, t: Date.now() }),
                  );
                } catch (t) {}
              })(o),
              o)
            : void 0;
        });
      }
      function J(t = !1) {
        return Z(this, void 0, void 0, function* () {
          const i = (function () {
            try {
              if ("undefined" == typeof sessionStorage) return;
              const t = sessionStorage.getItem(W);
              if (!t) return;
              const { v: i, t: n } = JSON.parse(t);
              if (Date.now() - n < 6e4) return i;
            } catch (t) {}
          })();
          return i && !t
            ? i
            : (null != Y ||
                (Y = Q().finally(() => {
                  Y = null;
                })),
              Y);
        });
      }
      const K = Object.freeze("video-highlights"),
        q = Object.freeze([
          "live-match-info",
          "fantasy",
          "commentary",
          "scorecard",
          "squad",
          "key-moments",
        ]),
        X = Object.freeze({ tag: "type", value: "match-info" }),
        tt = Object.freeze({
          VIDEO_ELEMENT_SELECTOR: "video.vjs-tech",
          VIDEO_ELEMENT_SELECTOR_2: 'video[class*="StyledVideo"]',
          TITLE_ELEMENT_SELECTOR: '[class*="VideoPlayerTitleLabel"]',
          MATCH_INFO_QUERY_PARAM: X,
          AD_CLASS_NAME: 'video[title="Advertisement"]',
          INSTREAM_AD_ID: '[id*="instream-video"]',
          LIVE_MATCH_PAGE_TYPES: q,
          HIGHLIGHTS: K,
        }),
        it = Object.freeze({
          LIVE: "/live/",
          VIDEO: "/video/",
          CHANNELS: "/canales/",
        }),
        nt = Object.freeze([it.LIVE, it.CHANNELS]),
        et = Object.freeze({
          PATH_TYPES: it,
          LIVE_PATHS: nt,
          VIDEO_ELEMENT_SELECTOR: "video",
          TITLE_ELEMENT_SELECTOR: "h1",
        }),
        st = Object.freeze({ SHOW: "player", LIVE_TV: "livestream" }),
        ot = Object.freeze({
          VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-player-element",
          LIVE_VIDEO_ELEMENT_SELECTOR:
            "video#bitmovinplayer-video-bitmovin-element",
          TITLE_ELEMENT_SELECTOR: 'h3[class*="VODTitle_show-title"]',
          VIDEO_TYPES: st,
          AD_CLASS_NAME: 'video[title="Advertisement"]',
        }),
        rt = Object.freeze({ VIDEO: "vod", LIVE: "live" }),
        at = Object.freeze({
          VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-null",
          AD_CLASS_NAME: 'video[title="Advertisement"]',
          TITLE_ELEMENT_SELECTOR: "#series_title",
          TITLE_ELEMENT_SELECTOR_LIVE_TV:
            ".bmpui-label-metadata-viu-title.bmpui-label-metadata-viu-title",
          UI_CONTAINER: ".bmpui-ui-uicontainer",
          VIDEO_TYPES: rt,
          QUERY_PARAMS_ORIGIN_EPISODE_CODE_TAG: "originEpisodeCode",
        });
      function ut(t) {
        let i = t.length;
        for (; --i >= 0;) t[i] = 0;
      }
      const ct = 256,
        ht = 286,
        lt = 30,
        dt = 15,
        pt = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0,
        ]),
        ft = new Uint8Array([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13,
        ]),
        Dt = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
        ]),
        vt = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        gt = new Array(576);
      ut(gt);
      const mt = new Array(60);
      ut(mt);
      const wt = new Array(512);
      ut(wt);
      const yt = new Array(256);
      ut(yt);
      const bt = new Array(29);
      ut(bt);
      const Ct = new Array(lt);
      function Ft(t, i, n, e, s) {
        ((this.static_tree = t),
          (this.extra_bits = i),
          (this.extra_base = n),
          (this.elems = e),
          (this.max_length = s),
          (this.has_stree = t && t.length));
      }
      let _t, Et, xt;
      function kt(t, i) {
        ((this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = i));
      }
      ut(Ct);
      const At = (t) => (t < 256 ? wt[t] : wt[256 + (t >>> 7)]),
        St = (t, i) => {
          ((t.pending_buf[t.pending++] = 255 & i),
            (t.pending_buf[t.pending++] = (i >>> 8) & 255));
        },
        It = (t, i, n) => {
          t.bi_valid > 16 - n
            ? ((t.bi_buf |= (i << t.bi_valid) & 65535),
              St(t, t.bi_buf),
              (t.bi_buf = i >> (16 - t.bi_valid)),
              (t.bi_valid += n - 16))
            : ((t.bi_buf |= (i << t.bi_valid) & 65535), (t.bi_valid += n));
        },
        Bt = (t, i, n) => {
          It(t, n[2 * i], n[2 * i + 1]);
        },
        Tt = (t, i) => {
          let n = 0;
          do {
            ((n |= 1 & t), (t >>>= 1), (n <<= 1));
          } while (--i > 0);
          return n >>> 1;
        },
        jt = (t, i, n) => {
          const e = new Array(16);
          let s,
            o,
            r = 0;
          for (s = 1; s <= dt; s++) ((r = (r + n[s - 1]) << 1), (e[s] = r));
          for (o = 0; o <= i; o++) {
            let i = t[2 * o + 1];
            0 !== i && (t[2 * o] = Tt(e[i]++, i));
          }
        },
        $t = (t) => {
          let i;
          for (i = 0; i < ht; i++) t.dyn_ltree[2 * i] = 0;
          for (i = 0; i < lt; i++) t.dyn_dtree[2 * i] = 0;
          for (i = 0; i < 19; i++) t.bl_tree[2 * i] = 0;
          ((t.dyn_ltree[512] = 1),
            (t.opt_len = t.static_len = 0),
            (t.sym_next = t.matches = 0));
        },
        Pt = (t) => {
          (t.bi_valid > 8
            ? St(t, t.bi_buf)
            : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
            (t.bi_buf = 0),
            (t.bi_valid = 0));
        },
        Lt = (t, i, n, e) => {
          const s = 2 * i,
            o = 2 * n;
          return t[s] < t[o] || (t[s] === t[o] && e[i] <= e[n]);
        },
        Rt = (t, i, n) => {
          const e = t.heap[n];
          let s = n << 1;
          for (
            ;
            s <= t.heap_len &&
            (s < t.heap_len && Lt(i, t.heap[s + 1], t.heap[s], t.depth) && s++,
            !Lt(i, e, t.heap[s], t.depth));
          )
            ((t.heap[n] = t.heap[s]), (n = s), (s <<= 1));
          t.heap[n] = e;
        },
        Mt = (t, i, n) => {
          let e,
            s,
            o,
            r,
            a = 0;
          if (0 !== t.sym_next)
            do {
              ((e = 255 & t.pending_buf[t.sym_buf + a++]),
                (e += (255 & t.pending_buf[t.sym_buf + a++]) << 8),
                (s = t.pending_buf[t.sym_buf + a++]),
                0 === e
                  ? Bt(t, s, i)
                  : ((o = yt[s]),
                    Bt(t, o + ct + 1, i),
                    (r = pt[o]),
                    0 !== r && ((s -= bt[o]), It(t, s, r)),
                    e--,
                    (o = At(e)),
                    Bt(t, o, n),
                    (r = ft[o]),
                    0 !== r && ((e -= Ct[o]), It(t, e, r))));
            } while (a < t.sym_next);
          Bt(t, 256, i);
        },
        Ot = (t, i) => {
          const n = i.dyn_tree,
            e = i.stat_desc.static_tree,
            s = i.stat_desc.has_stree,
            o = i.stat_desc.elems;
          let r,
            a,
            u,
            c = -1;
          for (t.heap_len = 0, t.heap_max = 573, r = 0; r < o; r++)
            0 !== n[2 * r]
              ? ((t.heap[++t.heap_len] = c = r), (t.depth[r] = 0))
              : (n[2 * r + 1] = 0);
          for (; t.heap_len < 2;)
            ((u = t.heap[++t.heap_len] = c < 2 ? ++c : 0),
              (n[2 * u] = 1),
              (t.depth[u] = 0),
              t.opt_len--,
              s && (t.static_len -= e[2 * u + 1]));
          for (i.max_code = c, r = t.heap_len >> 1; r >= 1; r--) Rt(t, n, r);
          u = o;
          do {
            ((r = t.heap[1]),
              (t.heap[1] = t.heap[t.heap_len--]),
              Rt(t, n, 1),
              (a = t.heap[1]),
              (t.heap[--t.heap_max] = r),
              (t.heap[--t.heap_max] = a),
              (n[2 * u] = n[2 * r] + n[2 * a]),
              (t.depth[u] =
                (t.depth[r] >= t.depth[a] ? t.depth[r] : t.depth[a]) + 1),
              (n[2 * r + 1] = n[2 * a + 1] = u),
              (t.heap[1] = u++),
              Rt(t, n, 1));
          } while (t.heap_len >= 2);
          ((t.heap[--t.heap_max] = t.heap[1]),
            ((t, i) => {
              const n = i.dyn_tree,
                e = i.max_code,
                s = i.stat_desc.static_tree,
                o = i.stat_desc.has_stree,
                r = i.stat_desc.extra_bits,
                a = i.stat_desc.extra_base,
                u = i.stat_desc.max_length;
              let c,
                h,
                l,
                d,
                p,
                f,
                D = 0;
              for (d = 0; d <= dt; d++) t.bl_count[d] = 0;
              for (
                n[2 * t.heap[t.heap_max] + 1] = 0, c = t.heap_max + 1;
                c < 573;
                c++
              )
                ((h = t.heap[c]),
                  (d = n[2 * n[2 * h + 1] + 1] + 1),
                  d > u && ((d = u), D++),
                  (n[2 * h + 1] = d),
                  h > e ||
                    (t.bl_count[d]++,
                    (p = 0),
                    h >= a && (p = r[h - a]),
                    (f = n[2 * h]),
                    (t.opt_len += f * (d + p)),
                    o && (t.static_len += f * (s[2 * h + 1] + p))));
              if (0 !== D) {
                do {
                  for (d = u - 1; 0 === t.bl_count[d];) d--;
                  (t.bl_count[d]--,
                    (t.bl_count[d + 1] += 2),
                    t.bl_count[u]--,
                    (D -= 2));
                } while (D > 0);
                for (d = u; 0 !== d; d--)
                  for (h = t.bl_count[d]; 0 !== h;)
                    ((l = t.heap[--c]),
                      l > e ||
                        (n[2 * l + 1] !== d &&
                          ((t.opt_len += (d - n[2 * l + 1]) * n[2 * l]),
                          (n[2 * l + 1] = d)),
                        h--));
              }
            })(t, i),
            jt(n, c, t.bl_count));
        },
        Vt = (t, i, n) => {
          let e,
            s,
            o = -1,
            r = i[1],
            a = 0,
            u = 7,
            c = 4;
          for (
            0 === r && ((u = 138), (c = 3)), i[2 * (n + 1) + 1] = 65535, e = 0;
            e <= n;
            e++
          )
            ((s = r),
              (r = i[2 * (e + 1) + 1]),
              (++a < u && s === r) ||
                (a < c
                  ? (t.bl_tree[2 * s] += a)
                  : 0 !== s
                    ? (s !== o && t.bl_tree[2 * s]++, t.bl_tree[32]++)
                    : a <= 10
                      ? t.bl_tree[34]++
                      : t.bl_tree[36]++,
                (a = 0),
                (o = s),
                0 === r
                  ? ((u = 138), (c = 3))
                  : s === r
                    ? ((u = 6), (c = 3))
                    : ((u = 7), (c = 4))));
        },
        Ut = (t, i, n) => {
          let e,
            s,
            o = -1,
            r = i[1],
            a = 0,
            u = 7,
            c = 4;
          for (0 === r && ((u = 138), (c = 3)), e = 0; e <= n; e++)
            if (((s = r), (r = i[2 * (e + 1) + 1]), !(++a < u && s === r))) {
              if (a < c)
                do {
                  Bt(t, s, t.bl_tree);
                } while (0 !== --a);
              else
                0 !== s
                  ? (s !== o && (Bt(t, s, t.bl_tree), a--),
                    Bt(t, 16, t.bl_tree),
                    It(t, a - 3, 2))
                  : a <= 10
                    ? (Bt(t, 17, t.bl_tree), It(t, a - 3, 3))
                    : (Bt(t, 18, t.bl_tree), It(t, a - 11, 7));
              ((a = 0),
                (o = s),
                0 === r
                  ? ((u = 138), (c = 3))
                  : s === r
                    ? ((u = 6), (c = 3))
                    : ((u = 7), (c = 4)));
            }
        };
      let Nt = !1;
      const Ht = (t, i, n, e) => {
        (It(t, 0 + (e ? 1 : 0), 3),
          Pt(t),
          St(t, n),
          St(t, ~n),
          n && t.pending_buf.set(t.window.subarray(i, i + n), t.pending),
          (t.pending += n));
      };
      var Gt = (t, i, n, e) => {
          let s,
            o,
            r = 0;
          (t.level > 0
            ? (2 === t.strm.data_type &&
                (t.strm.data_type = ((t) => {
                  let i,
                    n = 4093624447;
                  for (i = 0; i <= 31; i++, n >>>= 1)
                    if (1 & n && 0 !== t.dyn_ltree[2 * i]) return 0;
                  if (
                    0 !== t.dyn_ltree[18] ||
                    0 !== t.dyn_ltree[20] ||
                    0 !== t.dyn_ltree[26]
                  )
                    return 1;
                  for (i = 32; i < ct; i++)
                    if (0 !== t.dyn_ltree[2 * i]) return 1;
                  return 0;
                })(t)),
              Ot(t, t.l_desc),
              Ot(t, t.d_desc),
              (r = ((t) => {
                let i;
                for (
                  Vt(t, t.dyn_ltree, t.l_desc.max_code),
                    Vt(t, t.dyn_dtree, t.d_desc.max_code),
                    Ot(t, t.bl_desc),
                    i = 18;
                  i >= 3 && 0 === t.bl_tree[2 * vt[i] + 1];
                  i--
                );
                return ((t.opt_len += 3 * (i + 1) + 5 + 5 + 4), i);
              })(t)),
              (s = (t.opt_len + 3 + 7) >>> 3),
              (o = (t.static_len + 3 + 7) >>> 3),
              o <= s && (s = o))
            : (s = o = n + 5),
            n + 4 <= s && -1 !== i
              ? Ht(t, i, n, e)
              : 4 === t.strategy || o === s
                ? (It(t, 2 + (e ? 1 : 0), 3), Mt(t, gt, mt))
                : (It(t, 4 + (e ? 1 : 0), 3),
                  ((t, i, n, e) => {
                    let s;
                    for (
                      It(t, i - 257, 5),
                        It(t, n - 1, 5),
                        It(t, e - 4, 4),
                        s = 0;
                      s < e;
                      s++
                    )
                      It(t, t.bl_tree[2 * vt[s] + 1], 3);
                    (Ut(t, t.dyn_ltree, i - 1), Ut(t, t.dyn_dtree, n - 1));
                  })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, r + 1),
                  Mt(t, t.dyn_ltree, t.dyn_dtree)),
            $t(t),
            e && Pt(t));
        },
        zt = {
          B: (t) => {
            (Nt ||
              ((() => {
                let t, i, n, e, s;
                const o = new Array(16);
                for (n = 0, e = 0; e < 28; e++)
                  for (bt[e] = n, t = 0; t < 1 << pt[e]; t++) yt[n++] = e;
                for (yt[n - 1] = e, s = 0, e = 0; e < 16; e++)
                  for (Ct[e] = s, t = 0; t < 1 << ft[e]; t++) wt[s++] = e;
                for (s >>= 7; e < lt; e++)
                  for (Ct[e] = s << 7, t = 0; t < 1 << (ft[e] - 7); t++)
                    wt[256 + s++] = e;
                for (i = 0; i <= dt; i++) o[i] = 0;
                for (t = 0; t <= 143;) ((gt[2 * t + 1] = 8), t++, o[8]++);
                for (; t <= 255;) ((gt[2 * t + 1] = 9), t++, o[9]++);
                for (; t <= 279;) ((gt[2 * t + 1] = 7), t++, o[7]++);
                for (; t <= 287;) ((gt[2 * t + 1] = 8), t++, o[8]++);
                for (jt(gt, 287, o), t = 0; t < lt; t++)
                  ((mt[2 * t + 1] = 5), (mt[2 * t] = Tt(t, 5)));
                ((_t = new Ft(gt, pt, 257, ht, dt)),
                  (Et = new Ft(mt, ft, 0, lt, dt)),
                  (xt = new Ft(new Array(0), Dt, 0, 19, 7)));
              })(),
              (Nt = !0)),
              (t.l_desc = new kt(t.dyn_ltree, _t)),
              (t.d_desc = new kt(t.dyn_dtree, Et)),
              (t.bl_desc = new kt(t.bl_tree, xt)),
              (t.bi_buf = 0),
              (t.bi_valid = 0),
              $t(t));
          },
          T: Ht,
          $: Gt,
          P: (t, i, n) => (
            (t.pending_buf[t.sym_buf + t.sym_next++] = i),
            (t.pending_buf[t.sym_buf + t.sym_next++] = i >> 8),
            (t.pending_buf[t.sym_buf + t.sym_next++] = n),
            0 === i
              ? t.dyn_ltree[2 * n]++
              : (t.matches++,
                i--,
                t.dyn_ltree[2 * (yt[n] + ct + 1)]++,
                t.dyn_dtree[2 * At(i)]++),
            t.sym_next === t.sym_end
          ),
          L: (t) => {
            (It(t, 2, 3),
              Bt(t, 256, gt),
              ((t) => {
                16 === t.bi_valid
                  ? (St(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                  : t.bi_valid >= 8 &&
                    ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                    (t.bi_buf >>= 8),
                    (t.bi_valid -= 8));
              })(t));
          },
        };
      var Zt = (t, i, n, e) => {
        let s = 65535 & t,
          o = (t >>> 16) & 65535,
          r = 0;
        for (; 0 !== n;) {
          ((r = n > 2e3 ? 2e3 : n), (n -= r));
          do {
            ((s = (s + i[e++]) | 0), (o = (o + s) | 0));
          } while (--r);
          ((s %= 65521), (o %= 65521));
        }
        return s | (o << 16);
      };
      const Wt = new Uint32Array(
        (() => {
          let t,
            i = [];
          for (var n = 0; n < 256; n++) {
            t = n;
            for (var e = 0; e < 8; e++)
              t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
            i[n] = t;
          }
          return i;
        })(),
      );
      var Yt = (t, i, n, e) => {
          const s = Wt,
            o = e + n;
          t ^= -1;
          for (let n = e; n < o; n++) t = (t >>> 8) ^ s[255 & (t ^ i[n])];
          return -1 ^ t;
        },
        Qt = {
          2: "need dictionary",
          1: "stream end",
          0: "",
          "-1": "file error",
          "-2": "stream error",
          "-3": "data error",
          "-4": "insufficient memory",
          "-5": "buffer error",
          "-6": "incompatible version",
        },
        Jt = {
          Z_NO_FLUSH: 0,
          Z_PARTIAL_FLUSH: 1,
          Z_SYNC_FLUSH: 2,
          Z_FULL_FLUSH: 3,
          Z_FINISH: 4,
          Z_BLOCK: 5,
          Z_TREES: 6,
          Z_OK: 0,
          Z_STREAM_END: 1,
          Z_NEED_DICT: 2,
          Z_ERRNO: -1,
          Z_STREAM_ERROR: -2,
          Z_DATA_ERROR: -3,
          Z_MEM_ERROR: -4,
          Z_BUF_ERROR: -5,
          Z_NO_COMPRESSION: 0,
          Z_BEST_SPEED: 1,
          Z_BEST_COMPRESSION: 9,
          Z_DEFAULT_COMPRESSION: -1,
          Z_FILTERED: 1,
          Z_HUFFMAN_ONLY: 2,
          Z_RLE: 3,
          Z_FIXED: 4,
          Z_DEFAULT_STRATEGY: 0,
          Z_BINARY: 0,
          Z_TEXT: 1,
          Z_UNKNOWN: 2,
          Z_DEFLATED: 8,
        };
      const { B: Kt, T: qt, $: Xt, P: ti, L: ii } = zt,
        {
          Z_NO_FLUSH: ni,
          Z_PARTIAL_FLUSH: ei,
          Z_FULL_FLUSH: si,
          Z_FINISH: oi,
          Z_BLOCK: ri,
          Z_OK: ai,
          Z_STREAM_END: ui,
          Z_STREAM_ERROR: ci,
          Z_DATA_ERROR: hi,
          Z_BUF_ERROR: li,
          Z_DEFAULT_COMPRESSION: di,
          Z_FILTERED: pi,
          Z_HUFFMAN_ONLY: fi,
          Z_RLE: Di,
          Z_FIXED: vi,
          Z_DEFAULT_STRATEGY: gi,
          Z_UNKNOWN: mi,
          Z_DEFLATED: wi,
        } = Jt,
        yi = 258,
        bi = 262,
        Ci = 42,
        Fi = 113,
        _i = 666,
        Ei = (t, i) => ((t.msg = Qt[i]), i),
        xi = (t) => 2 * t - (t > 4 ? 9 : 0),
        ki = (t) => {
          let i = t.length;
          for (; --i >= 0;) t[i] = 0;
        },
        Ai = (t) => {
          let i,
            n,
            e,
            s = t.w_size;
          ((i = t.hash_size), (e = i));
          do {
            ((n = t.head[--e]), (t.head[e] = n >= s ? n - s : 0));
          } while (--i);
          ((i = s), (e = i));
          do {
            ((n = t.prev[--e]), (t.prev[e] = n >= s ? n - s : 0));
          } while (--i);
        };
      let Si = (t, i, n) => ((i << t.hash_shift) ^ n) & t.hash_mask;
      const Ii = (t) => {
          const i = t.state;
          let n = i.pending;
          (n > t.avail_out && (n = t.avail_out),
            0 !== n &&
              (t.output.set(
                i.pending_buf.subarray(i.pending_out, i.pending_out + n),
                t.next_out,
              ),
              (t.next_out += n),
              (i.pending_out += n),
              (t.total_out += n),
              (t.avail_out -= n),
              (i.pending -= n),
              0 === i.pending && (i.pending_out = 0)));
        },
        Bi = (t, i) => {
          (Xt(
            t,
            t.block_start >= 0 ? t.block_start : -1,
            t.strstart - t.block_start,
            i,
          ),
            (t.block_start = t.strstart),
            Ii(t.strm));
        },
        Ti = (t, i) => {
          t.pending_buf[t.pending++] = i;
        },
        ji = (t, i) => {
          ((t.pending_buf[t.pending++] = (i >>> 8) & 255),
            (t.pending_buf[t.pending++] = 255 & i));
        },
        $i = (t, i, n, e) => {
          let s = t.avail_in;
          return (
            s > e && (s = e),
            0 === s
              ? 0
              : ((t.avail_in -= s),
                i.set(t.input.subarray(t.next_in, t.next_in + s), n),
                1 === t.state.wrap
                  ? (t.adler = Zt(t.adler, i, s, n))
                  : 2 === t.state.wrap && (t.adler = Yt(t.adler, i, s, n)),
                (t.next_in += s),
                (t.total_in += s),
                s)
          );
        },
        Pi = (t, i) => {
          let n,
            e,
            s = t.max_chain_length,
            o = t.strstart,
            r = t.prev_length,
            a = t.nice_match;
          const u =
              t.strstart > t.w_size - bi ? t.strstart - (t.w_size - bi) : 0,
            c = t.window,
            h = t.w_mask,
            l = t.prev,
            d = t.strstart + yi;
          let p = c[o + r - 1],
            f = c[o + r];
          (t.prev_length >= t.good_match && (s >>= 2),
            a > t.lookahead && (a = t.lookahead));
          do {
            if (
              ((n = i),
              c[n + r] === f &&
                c[n + r - 1] === p &&
                c[n] === c[o] &&
                c[++n] === c[o + 1])
            ) {
              ((o += 2), n++);
              do {} while (
                c[++o] === c[++n] &&
                c[++o] === c[++n] &&
                c[++o] === c[++n] &&
                c[++o] === c[++n] &&
                c[++o] === c[++n] &&
                c[++o] === c[++n] &&
                c[++o] === c[++n] &&
                c[++o] === c[++n] &&
                o < d
              );
              if (((e = yi - (d - o)), (o = d - yi), e > r)) {
                if (((t.match_start = i), (r = e), e >= a)) break;
                ((p = c[o + r - 1]), (f = c[o + r]));
              }
            }
          } while ((i = l[i & h]) > u && 0 !== --s);
          return r <= t.lookahead ? r : t.lookahead;
        },
        Li = (t) => {
          const i = t.w_size;
          let n, e, s;
          do {
            if (
              ((e = t.window_size - t.lookahead - t.strstart),
              t.strstart >= i + (i - bi) &&
                (t.window.set(t.window.subarray(i, i + i - e), 0),
                (t.match_start -= i),
                (t.strstart -= i),
                (t.block_start -= i),
                t.insert > t.strstart && (t.insert = t.strstart),
                Ai(t),
                (e += i)),
              0 === t.strm.avail_in)
            )
              break;
            if (
              ((n = $i(t.strm, t.window, t.strstart + t.lookahead, e)),
              (t.lookahead += n),
              t.lookahead + t.insert >= 3)
            )
              for (
                s = t.strstart - t.insert,
                  t.ins_h = t.window[s],
                  t.ins_h = Si(t, t.ins_h, t.window[s + 1]);
                t.insert &&
                ((t.ins_h = Si(t, t.ins_h, t.window[s + 3 - 1])),
                (t.prev[s & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = s),
                s++,
                t.insert--,
                !(t.lookahead + t.insert < 3));
              );
          } while (t.lookahead < bi && 0 !== t.strm.avail_in);
        },
        Ri = (t, i) => {
          let n,
            e,
            s,
            o =
              t.pending_buf_size - 5 > t.w_size
                ? t.w_size
                : t.pending_buf_size - 5,
            r = 0,
            a = t.strm.avail_in;
          do {
            if (
              ((n = 65535), (s = (t.bi_valid + 42) >> 3), t.strm.avail_out < s)
            )
              break;
            if (
              ((s = t.strm.avail_out - s),
              (e = t.strstart - t.block_start),
              n > e + t.strm.avail_in && (n = e + t.strm.avail_in),
              n > s && (n = s),
              n < o &&
                ((0 === n && i !== oi) ||
                  i === ni ||
                  n !== e + t.strm.avail_in))
            )
              break;
            ((r = i === oi && n === e + t.strm.avail_in ? 1 : 0),
              qt(t, 0, 0, r),
              (t.pending_buf[t.pending - 4] = n),
              (t.pending_buf[t.pending - 3] = n >> 8),
              (t.pending_buf[t.pending - 2] = ~n),
              (t.pending_buf[t.pending - 1] = ~n >> 8),
              Ii(t.strm),
              e &&
                (e > n && (e = n),
                t.strm.output.set(
                  t.window.subarray(t.block_start, t.block_start + e),
                  t.strm.next_out,
                ),
                (t.strm.next_out += e),
                (t.strm.avail_out -= e),
                (t.strm.total_out += e),
                (t.block_start += e),
                (n -= e)),
              n &&
                ($i(t.strm, t.strm.output, t.strm.next_out, n),
                (t.strm.next_out += n),
                (t.strm.avail_out -= n),
                (t.strm.total_out += n)));
          } while (0 === r);
          return (
            (a -= t.strm.avail_in),
            a &&
              (a >= t.w_size
                ? ((t.matches = 2),
                  t.window.set(
                    t.strm.input.subarray(
                      t.strm.next_in - t.w_size,
                      t.strm.next_in,
                    ),
                    0,
                  ),
                  (t.strstart = t.w_size),
                  (t.insert = t.strstart))
                : (t.window_size - t.strstart <= a &&
                    ((t.strstart -= t.w_size),
                    t.window.set(
                      t.window.subarray(t.w_size, t.w_size + t.strstart),
                      0,
                    ),
                    t.matches < 2 && t.matches++,
                    t.insert > t.strstart && (t.insert = t.strstart)),
                  t.window.set(
                    t.strm.input.subarray(t.strm.next_in - a, t.strm.next_in),
                    t.strstart,
                  ),
                  (t.strstart += a),
                  (t.insert +=
                    a > t.w_size - t.insert ? t.w_size - t.insert : a)),
              (t.block_start = t.strstart)),
            t.high_water < t.strstart && (t.high_water = t.strstart),
            r
              ? 4
              : i !== ni &&
                  i !== oi &&
                  0 === t.strm.avail_in &&
                  t.strstart === t.block_start
                ? 2
                : ((s = t.window_size - t.strstart),
                  t.strm.avail_in > s &&
                    t.block_start >= t.w_size &&
                    ((t.block_start -= t.w_size),
                    (t.strstart -= t.w_size),
                    t.window.set(
                      t.window.subarray(t.w_size, t.w_size + t.strstart),
                      0,
                    ),
                    t.matches < 2 && t.matches++,
                    (s += t.w_size),
                    t.insert > t.strstart && (t.insert = t.strstart)),
                  s > t.strm.avail_in && (s = t.strm.avail_in),
                  s &&
                    ($i(t.strm, t.window, t.strstart, s),
                    (t.strstart += s),
                    (t.insert +=
                      s > t.w_size - t.insert ? t.w_size - t.insert : s)),
                  t.high_water < t.strstart && (t.high_water = t.strstart),
                  (s = (t.bi_valid + 42) >> 3),
                  (s =
                    t.pending_buf_size - s > 65535
                      ? 65535
                      : t.pending_buf_size - s),
                  (o = s > t.w_size ? t.w_size : s),
                  (e = t.strstart - t.block_start),
                  (e >= o ||
                    ((e || i === oi) &&
                      i !== ni &&
                      0 === t.strm.avail_in &&
                      e <= s)) &&
                    ((n = e > s ? s : e),
                    (r = i === oi && 0 === t.strm.avail_in && n === e ? 1 : 0),
                    qt(t, t.block_start, n, r),
                    (t.block_start += n),
                    Ii(t.strm)),
                  r ? 3 : 1)
          );
        },
        Mi = (t, i) => {
          let n, e;
          for (;;) {
            if (t.lookahead < bi) {
              if ((Li(t), t.lookahead < bi && i === ni)) return 1;
              if (0 === t.lookahead) break;
            }
            if (
              ((n = 0),
              t.lookahead >= 3 &&
                ((t.ins_h = Si(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart)),
              0 !== n &&
                t.strstart - n <= t.w_size - bi &&
                (t.match_length = Pi(t, n)),
              t.match_length >= 3)
            )
              if (
                ((e = ti(t, t.strstart - t.match_start, t.match_length - 3)),
                (t.lookahead -= t.match_length),
                t.match_length <= t.max_lazy_match && t.lookahead >= 3)
              ) {
                t.match_length--;
                do {
                  (t.strstart++,
                    (t.ins_h = Si(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                    (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                    (t.head[t.ins_h] = t.strstart));
                } while (0 !== --t.match_length);
                t.strstart++;
              } else
                ((t.strstart += t.match_length),
                  (t.match_length = 0),
                  (t.ins_h = t.window[t.strstart]),
                  (t.ins_h = Si(t, t.ins_h, t.window[t.strstart + 1])));
            else
              ((e = ti(t, 0, t.window[t.strstart])),
                t.lookahead--,
                t.strstart++);
            if (e && (Bi(t, !1), 0 === t.strm.avail_out)) return 1;
          }
          return (
            (t.insert = t.strstart < 2 ? t.strstart : 2),
            i === oi
              ? (Bi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
              : t.sym_next && (Bi(t, !1), 0 === t.strm.avail_out)
                ? 1
                : 2
          );
        },
        Oi = (t, i) => {
          let n, e, s;
          for (;;) {
            if (t.lookahead < bi) {
              if ((Li(t), t.lookahead < bi && i === ni)) return 1;
              if (0 === t.lookahead) break;
            }
            if (
              ((n = 0),
              t.lookahead >= 3 &&
                ((t.ins_h = Si(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart)),
              (t.prev_length = t.match_length),
              (t.prev_match = t.match_start),
              (t.match_length = 2),
              0 !== n &&
                t.prev_length < t.max_lazy_match &&
                t.strstart - n <= t.w_size - bi &&
                ((t.match_length = Pi(t, n)),
                t.match_length <= 5 &&
                  (t.strategy === pi ||
                    (3 === t.match_length &&
                      t.strstart - t.match_start > 4096)) &&
                  (t.match_length = 2)),
              t.prev_length >= 3 && t.match_length <= t.prev_length)
            ) {
              ((s = t.strstart + t.lookahead - 3),
                (e = ti(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
                (t.lookahead -= t.prev_length - 1),
                (t.prev_length -= 2));
              do {
                ++t.strstart <= s &&
                  ((t.ins_h = Si(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                  (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart));
              } while (0 !== --t.prev_length);
              if (
                ((t.match_available = 0),
                (t.match_length = 2),
                t.strstart++,
                e && (Bi(t, !1), 0 === t.strm.avail_out))
              )
                return 1;
            } else if (t.match_available) {
              if (
                ((e = ti(t, 0, t.window[t.strstart - 1])),
                e && Bi(t, !1),
                t.strstart++,
                t.lookahead--,
                0 === t.strm.avail_out)
              )
                return 1;
            } else ((t.match_available = 1), t.strstart++, t.lookahead--);
          }
          return (
            t.match_available &&
              ((e = ti(t, 0, t.window[t.strstart - 1])),
              (t.match_available = 0)),
            (t.insert = t.strstart < 2 ? t.strstart : 2),
            i === oi
              ? (Bi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
              : t.sym_next && (Bi(t, !1), 0 === t.strm.avail_out)
                ? 1
                : 2
          );
        };
      function Vi(t, i, n, e, s) {
        ((this.good_length = t),
          (this.max_lazy = i),
          (this.nice_length = n),
          (this.max_chain = e),
          (this.func = s));
      }
      const Ui = [
        new Vi(0, 0, 0, 0, Ri),
        new Vi(4, 4, 8, 4, Mi),
        new Vi(4, 5, 16, 8, Mi),
        new Vi(4, 6, 32, 32, Mi),
        new Vi(4, 4, 16, 16, Oi),
        new Vi(8, 16, 32, 32, Oi),
        new Vi(8, 16, 128, 128, Oi),
        new Vi(8, 32, 128, 256, Oi),
        new Vi(32, 128, 258, 1024, Oi),
        new Vi(32, 258, 258, 4096, Oi),
      ];
      function Ni() {
        ((this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = wi),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new Uint16Array(1146)),
          (this.dyn_dtree = new Uint16Array(122)),
          (this.bl_tree = new Uint16Array(78)),
          ki(this.dyn_ltree),
          ki(this.dyn_dtree),
          ki(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new Uint16Array(16)),
          (this.heap = new Uint16Array(573)),
          ki(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new Uint16Array(573)),
          ki(this.depth),
          (this.sym_buf = 0),
          (this.lit_bufsize = 0),
          (this.sym_next = 0),
          (this.sym_end = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0));
      }
      const Hi = (t) => {
          if (!t) return 1;
          const i = t.state;
          return !i ||
            i.strm !== t ||
            (i.status !== Ci &&
              57 !== i.status &&
              69 !== i.status &&
              73 !== i.status &&
              91 !== i.status &&
              103 !== i.status &&
              i.status !== Fi &&
              i.status !== _i)
            ? 1
            : 0;
        },
        Gi = (t) => {
          if (Hi(t)) return Ei(t, ci);
          ((t.total_in = t.total_out = 0), (t.data_type = mi));
          const i = t.state;
          return (
            (i.pending = 0),
            (i.pending_out = 0),
            i.wrap < 0 && (i.wrap = -i.wrap),
            (i.status = 2 === i.wrap ? 57 : i.wrap ? Ci : Fi),
            (t.adler = 2 === i.wrap ? 0 : 1),
            (i.last_flush = -2),
            Kt(i),
            ai
          );
        },
        zi = (t) => {
          const i = Gi(t);
          var n;
          return (
            i === ai &&
              (((n = t.state).window_size = 2 * n.w_size),
              ki(n.head),
              (n.max_lazy_match = Ui[n.level].max_lazy),
              (n.good_match = Ui[n.level].good_length),
              (n.nice_match = Ui[n.level].nice_length),
              (n.max_chain_length = Ui[n.level].max_chain),
              (n.strstart = 0),
              (n.block_start = 0),
              (n.lookahead = 0),
              (n.insert = 0),
              (n.match_length = n.prev_length = 2),
              (n.match_available = 0),
              (n.ins_h = 0)),
            i
          );
        },
        Zi = (t, i, n, e, s, o) => {
          if (!t) return ci;
          let r = 1;
          if (
            (i === di && (i = 6),
            e < 0 ? ((r = 0), (e = -e)) : e > 15 && ((r = 2), (e -= 16)),
            s < 1 ||
              s > 9 ||
              n !== wi ||
              e < 8 ||
              e > 15 ||
              i < 0 ||
              i > 9 ||
              o < 0 ||
              o > vi ||
              (8 === e && 1 !== r))
          )
            return Ei(t, ci);
          8 === e && (e = 9);
          const a = new Ni();
          return (
            (t.state = a),
            (a.strm = t),
            (a.status = Ci),
            (a.wrap = r),
            (a.gzhead = null),
            (a.w_bits = e),
            (a.w_size = 1 << a.w_bits),
            (a.w_mask = a.w_size - 1),
            (a.hash_bits = s + 7),
            (a.hash_size = 1 << a.hash_bits),
            (a.hash_mask = a.hash_size - 1),
            (a.hash_shift = ~~((a.hash_bits + 3 - 1) / 3)),
            (a.window = new Uint8Array(2 * a.w_size)),
            (a.head = new Uint16Array(a.hash_size)),
            (a.prev = new Uint16Array(a.w_size)),
            (a.lit_bufsize = 1 << (s + 6)),
            (a.pending_buf_size = 4 * a.lit_bufsize),
            (a.pending_buf = new Uint8Array(a.pending_buf_size)),
            (a.sym_buf = a.lit_bufsize),
            (a.sym_end = 3 * (a.lit_bufsize - 1)),
            (a.level = i),
            (a.strategy = o),
            (a.method = n),
            zi(t)
          );
        };
      var Wi = {
        deflateInit: (t, i) => Zi(t, i, wi, 15, 8, gi),
        deflateInit2: Zi,
        deflateReset: zi,
        deflateResetKeep: Gi,
        deflateSetHeader: (t, i) =>
          Hi(t) || 2 !== t.state.wrap ? ci : ((t.state.gzhead = i), ai),
        deflate: (t, i) => {
          if (Hi(t) || i > ri || i < 0) return t ? Ei(t, ci) : ci;
          const n = t.state;
          if (
            !t.output ||
            (0 !== t.avail_in && !t.input) ||
            (n.status === _i && i !== oi)
          )
            return Ei(t, 0 === t.avail_out ? li : ci);
          const e = n.last_flush;
          if (((n.last_flush = i), 0 !== n.pending)) {
            if ((Ii(t), 0 === t.avail_out)) return ((n.last_flush = -1), ai);
          } else if (0 === t.avail_in && xi(i) <= xi(e) && i !== oi)
            return Ei(t, li);
          if (n.status === _i && 0 !== t.avail_in) return Ei(t, li);
          if (
            (n.status === Ci && 0 === n.wrap && (n.status = Fi),
            n.status === Ci)
          ) {
            let i = (wi + ((n.w_bits - 8) << 4)) << 8,
              e = -1;
            if (
              ((e =
                n.strategy >= fi || n.level < 2
                  ? 0
                  : n.level < 6
                    ? 1
                    : 6 === n.level
                      ? 2
                      : 3),
              (i |= e << 6),
              0 !== n.strstart && (i |= 32),
              (i += 31 - (i % 31)),
              ji(n, i),
              0 !== n.strstart &&
                (ji(n, t.adler >>> 16), ji(n, 65535 & t.adler)),
              (t.adler = 1),
              (n.status = Fi),
              Ii(t),
              0 !== n.pending)
            )
              return ((n.last_flush = -1), ai);
          }
          if (57 === n.status)
            if (((t.adler = 0), Ti(n, 31), Ti(n, 139), Ti(n, 8), n.gzhead))
              (Ti(
                n,
                (n.gzhead.text ? 1 : 0) +
                  (n.gzhead.hcrc ? 2 : 0) +
                  (n.gzhead.extra ? 4 : 0) +
                  (n.gzhead.name ? 8 : 0) +
                  (n.gzhead.comment ? 16 : 0),
              ),
                Ti(n, 255 & n.gzhead.time),
                Ti(n, (n.gzhead.time >> 8) & 255),
                Ti(n, (n.gzhead.time >> 16) & 255),
                Ti(n, (n.gzhead.time >> 24) & 255),
                Ti(
                  n,
                  9 === n.level ? 2 : n.strategy >= fi || n.level < 2 ? 4 : 0,
                ),
                Ti(n, 255 & n.gzhead.os),
                n.gzhead.extra &&
                  n.gzhead.extra.length &&
                  (Ti(n, 255 & n.gzhead.extra.length),
                  Ti(n, (n.gzhead.extra.length >> 8) & 255)),
                n.gzhead.hcrc &&
                  (t.adler = Yt(t.adler, n.pending_buf, n.pending, 0)),
                (n.gzindex = 0),
                (n.status = 69));
            else if (
              (Ti(n, 0),
              Ti(n, 0),
              Ti(n, 0),
              Ti(n, 0),
              Ti(n, 0),
              Ti(
                n,
                9 === n.level ? 2 : n.strategy >= fi || n.level < 2 ? 4 : 0,
              ),
              Ti(n, 3),
              (n.status = Fi),
              Ii(t),
              0 !== n.pending)
            )
              return ((n.last_flush = -1), ai);
          if (69 === n.status) {
            if (n.gzhead.extra) {
              let i = n.pending,
                e = (65535 & n.gzhead.extra.length) - n.gzindex;
              for (; n.pending + e > n.pending_buf_size;) {
                let s = n.pending_buf_size - n.pending;
                if (
                  (n.pending_buf.set(
                    n.gzhead.extra.subarray(n.gzindex, n.gzindex + s),
                    n.pending,
                  ),
                  (n.pending = n.pending_buf_size),
                  n.gzhead.hcrc &&
                    n.pending > i &&
                    (t.adler = Yt(t.adler, n.pending_buf, n.pending - i, i)),
                  (n.gzindex += s),
                  Ii(t),
                  0 !== n.pending)
                )
                  return ((n.last_flush = -1), ai);
                ((i = 0), (e -= s));
              }
              let s = new Uint8Array(n.gzhead.extra);
              (n.pending_buf.set(
                s.subarray(n.gzindex, n.gzindex + e),
                n.pending,
              ),
                (n.pending += e),
                n.gzhead.hcrc &&
                  n.pending > i &&
                  (t.adler = Yt(t.adler, n.pending_buf, n.pending - i, i)),
                (n.gzindex = 0));
            }
            n.status = 73;
          }
          if (73 === n.status) {
            if (n.gzhead.name) {
              let i,
                e = n.pending;
              do {
                if (n.pending === n.pending_buf_size) {
                  if (
                    (n.gzhead.hcrc &&
                      n.pending > e &&
                      (t.adler = Yt(t.adler, n.pending_buf, n.pending - e, e)),
                    Ii(t),
                    0 !== n.pending)
                  )
                    return ((n.last_flush = -1), ai);
                  e = 0;
                }
                ((i =
                  n.gzindex < n.gzhead.name.length
                    ? 255 & n.gzhead.name.charCodeAt(n.gzindex++)
                    : 0),
                  Ti(n, i));
              } while (0 !== i);
              (n.gzhead.hcrc &&
                n.pending > e &&
                (t.adler = Yt(t.adler, n.pending_buf, n.pending - e, e)),
                (n.gzindex = 0));
            }
            n.status = 91;
          }
          if (91 === n.status) {
            if (n.gzhead.comment) {
              let i,
                e = n.pending;
              do {
                if (n.pending === n.pending_buf_size) {
                  if (
                    (n.gzhead.hcrc &&
                      n.pending > e &&
                      (t.adler = Yt(t.adler, n.pending_buf, n.pending - e, e)),
                    Ii(t),
                    0 !== n.pending)
                  )
                    return ((n.last_flush = -1), ai);
                  e = 0;
                }
                ((i =
                  n.gzindex < n.gzhead.comment.length
                    ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++)
                    : 0),
                  Ti(n, i));
              } while (0 !== i);
              n.gzhead.hcrc &&
                n.pending > e &&
                (t.adler = Yt(t.adler, n.pending_buf, n.pending - e, e));
            }
            n.status = 103;
          }
          if (103 === n.status) {
            if (n.gzhead.hcrc) {
              if (
                n.pending + 2 > n.pending_buf_size &&
                (Ii(t), 0 !== n.pending)
              )
                return ((n.last_flush = -1), ai);
              (Ti(n, 255 & t.adler),
                Ti(n, (t.adler >> 8) & 255),
                (t.adler = 0));
            }
            if (((n.status = Fi), Ii(t), 0 !== n.pending))
              return ((n.last_flush = -1), ai);
          }
          if (
            0 !== t.avail_in ||
            0 !== n.lookahead ||
            (i !== ni && n.status !== _i)
          ) {
            let e =
              0 === n.level
                ? Ri(n, i)
                : n.strategy === fi
                  ? ((t, i) => {
                      let n;
                      for (;;) {
                        if (0 === t.lookahead && (Li(t), 0 === t.lookahead)) {
                          if (i === ni) return 1;
                          break;
                        }
                        if (
                          ((t.match_length = 0),
                          (n = ti(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++,
                          n && (Bi(t, !1), 0 === t.strm.avail_out))
                        )
                          return 1;
                      }
                      return (
                        (t.insert = 0),
                        i === oi
                          ? (Bi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                          : t.sym_next && (Bi(t, !1), 0 === t.strm.avail_out)
                            ? 1
                            : 2
                      );
                    })(n, i)
                  : n.strategy === Di
                    ? ((t, i) => {
                        let n, e, s, o;
                        const r = t.window;
                        for (;;) {
                          if (t.lookahead <= yi) {
                            if ((Li(t), t.lookahead <= yi && i === ni))
                              return 1;
                            if (0 === t.lookahead) break;
                          }
                          if (
                            ((t.match_length = 0),
                            t.lookahead >= 3 &&
                              t.strstart > 0 &&
                              ((s = t.strstart - 1),
                              (e = r[s]),
                              e === r[++s] && e === r[++s] && e === r[++s]))
                          ) {
                            o = t.strstart + yi;
                            do {} while (
                              e === r[++s] &&
                              e === r[++s] &&
                              e === r[++s] &&
                              e === r[++s] &&
                              e === r[++s] &&
                              e === r[++s] &&
                              e === r[++s] &&
                              e === r[++s] &&
                              s < o
                            );
                            ((t.match_length = yi - (o - s)),
                              t.match_length > t.lookahead &&
                                (t.match_length = t.lookahead));
                          }
                          if (
                            (t.match_length >= 3
                              ? ((n = ti(t, 1, t.match_length - 3)),
                                (t.lookahead -= t.match_length),
                                (t.strstart += t.match_length),
                                (t.match_length = 0))
                              : ((n = ti(t, 0, t.window[t.strstart])),
                                t.lookahead--,
                                t.strstart++),
                            n && (Bi(t, !1), 0 === t.strm.avail_out))
                          )
                            return 1;
                        }
                        return (
                          (t.insert = 0),
                          i === oi
                            ? (Bi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                            : t.sym_next && (Bi(t, !1), 0 === t.strm.avail_out)
                              ? 1
                              : 2
                        );
                      })(n, i)
                    : Ui[n.level].func(n, i);
            if (((3 !== e && 4 !== e) || (n.status = _i), 1 === e || 3 === e))
              return (0 === t.avail_out && (n.last_flush = -1), ai);
            if (
              2 === e &&
              (i === ei
                ? ii(n)
                : i !== ri &&
                  (qt(n, 0, 0, !1),
                  i === si &&
                    (ki(n.head),
                    0 === n.lookahead &&
                      ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
              Ii(t),
              0 === t.avail_out)
            )
              return ((n.last_flush = -1), ai);
          }
          return i !== oi
            ? ai
            : n.wrap <= 0
              ? ui
              : (2 === n.wrap
                  ? (Ti(n, 255 & t.adler),
                    Ti(n, (t.adler >> 8) & 255),
                    Ti(n, (t.adler >> 16) & 255),
                    Ti(n, (t.adler >> 24) & 255),
                    Ti(n, 255 & t.total_in),
                    Ti(n, (t.total_in >> 8) & 255),
                    Ti(n, (t.total_in >> 16) & 255),
                    Ti(n, (t.total_in >> 24) & 255))
                  : (ji(n, t.adler >>> 16), ji(n, 65535 & t.adler)),
                Ii(t),
                n.wrap > 0 && (n.wrap = -n.wrap),
                0 !== n.pending ? ai : ui);
        },
        deflateEnd: (t) => {
          if (Hi(t)) return ci;
          const i = t.state.status;
          return ((t.state = null), i === Fi ? Ei(t, hi) : ai);
        },
        deflateSetDictionary: (t, i) => {
          let n = i.length;
          if (Hi(t)) return ci;
          const e = t.state,
            s = e.wrap;
          if (2 === s || (1 === s && e.status !== Ci) || e.lookahead) return ci;
          if (
            (1 === s && (t.adler = Zt(t.adler, i, n, 0)),
            (e.wrap = 0),
            n >= e.w_size)
          ) {
            0 === s &&
              (ki(e.head),
              (e.strstart = 0),
              (e.block_start = 0),
              (e.insert = 0));
            let t = new Uint8Array(e.w_size);
            (t.set(i.subarray(n - e.w_size, n), 0), (i = t), (n = e.w_size));
          }
          const o = t.avail_in,
            r = t.next_in,
            a = t.input;
          for (
            t.avail_in = n, t.next_in = 0, t.input = i, Li(e);
            e.lookahead >= 3;
          ) {
            let t = e.strstart,
              i = e.lookahead - 2;
            do {
              ((e.ins_h = Si(e, e.ins_h, e.window[t + 3 - 1])),
                (e.prev[t & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = t),
                t++);
            } while (--i);
            ((e.strstart = t), (e.lookahead = 2), Li(e));
          }
          return (
            (e.strstart += e.lookahead),
            (e.block_start = e.strstart),
            (e.insert = e.lookahead),
            (e.lookahead = 0),
            (e.match_length = e.prev_length = 2),
            (e.match_available = 0),
            (t.next_in = r),
            (t.input = a),
            (t.avail_in = o),
            (e.wrap = s),
            ai
          );
        },
        deflateInfo: "pako deflate (from Nodeca project)",
      };
      const Yi = (t, i) => Object.prototype.hasOwnProperty.call(t, i);
      var Qi = function (t) {
          const i = Array.prototype.slice.call(arguments, 1);
          for (; i.length;) {
            const n = i.shift();
            if (n) {
              if ("object" != typeof n)
                throw new TypeError(n + "must be non-object");
              for (const i in n) Yi(n, i) && (t[i] = n[i]);
            }
          }
          return t;
        },
        Ji = (t) => {
          let i = 0;
          for (let n = 0, e = t.length; n < e; n++) i += t[n].length;
          const n = new Uint8Array(i);
          for (let i = 0, e = 0, s = t.length; i < s; i++) {
            let s = t[i];
            (n.set(s, e), (e += s.length));
          }
          return n;
        };
      let Ki = !0;
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (t) {
        Ki = !1;
      }
      const qi = new Uint8Array(256);
      for (let t = 0; t < 256; t++)
        qi[t] =
          t >= 252
            ? 6
            : t >= 248
              ? 5
              : t >= 240
                ? 4
                : t >= 224
                  ? 3
                  : t >= 192
                    ? 2
                    : 1;
      qi[254] = qi[254] = 1;
      var Xi = (t) => {
          if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
            return new TextEncoder().encode(t);
          let i,
            n,
            e,
            s,
            o,
            r = t.length,
            a = 0;
          for (s = 0; s < r; s++)
            ((n = t.charCodeAt(s)),
              55296 == (64512 & n) &&
                s + 1 < r &&
                ((e = t.charCodeAt(s + 1)),
                56320 == (64512 & e) &&
                  ((n = 65536 + ((n - 55296) << 10) + (e - 56320)), s++)),
              (a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4));
          for (i = new Uint8Array(a), o = 0, s = 0; o < a; s++)
            ((n = t.charCodeAt(s)),
              55296 == (64512 & n) &&
                s + 1 < r &&
                ((e = t.charCodeAt(s + 1)),
                56320 == (64512 & e) &&
                  ((n = 65536 + ((n - 55296) << 10) + (e - 56320)), s++)),
              n < 128
                ? (i[o++] = n)
                : n < 2048
                  ? ((i[o++] = 192 | (n >>> 6)), (i[o++] = 128 | (63 & n)))
                  : n < 65536
                    ? ((i[o++] = 224 | (n >>> 12)),
                      (i[o++] = 128 | ((n >>> 6) & 63)),
                      (i[o++] = 128 | (63 & n)))
                    : ((i[o++] = 240 | (n >>> 18)),
                      (i[o++] = 128 | ((n >>> 12) & 63)),
                      (i[o++] = 128 | ((n >>> 6) & 63)),
                      (i[o++] = 128 | (63 & n))));
          return i;
        },
        tn = (t, i) => {
          const n = i || t.length;
          if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
            return new TextDecoder().decode(t.subarray(0, i));
          let e, s;
          const o = new Array(2 * n);
          for (s = 0, e = 0; e < n;) {
            let i = t[e++];
            if (i < 128) {
              o[s++] = i;
              continue;
            }
            let r = qi[i];
            if (r > 4) ((o[s++] = 65533), (e += r - 1));
            else {
              for (i &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && e < n;)
                ((i = (i << 6) | (63 & t[e++])), r--);
              r > 1
                ? (o[s++] = 65533)
                : i < 65536
                  ? (o[s++] = i)
                  : ((i -= 65536),
                    (o[s++] = 55296 | ((i >> 10) & 1023)),
                    (o[s++] = 56320 | (1023 & i)));
            }
          }
          return ((t, i) => {
            if (i < 65534 && t.subarray && Ki)
              return String.fromCharCode.apply(
                null,
                t.length === i ? t : t.subarray(0, i),
              );
            let n = "";
            for (let e = 0; e < i; e++) n += String.fromCharCode(t[e]);
            return n;
          })(o, s);
        },
        nn = (t, i) => {
          (i = i || t.length) > t.length && (i = t.length);
          let n = i - 1;
          for (; n >= 0 && 128 == (192 & t[n]);) n--;
          return n < 0 || 0 === n ? i : n + qi[t[n]] > i ? n : i;
        };
      var en = function () {
        ((this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0));
      };
      const sn = Object.prototype.toString,
        {
          Z_NO_FLUSH: on,
          Z_SYNC_FLUSH: rn,
          Z_FULL_FLUSH: an,
          Z_FINISH: un,
          Z_OK: cn,
          Z_STREAM_END: hn,
          Z_DEFAULT_COMPRESSION: ln,
          Z_DEFAULT_STRATEGY: dn,
          Z_DEFLATED: pn,
        } = Jt;
      function fn(t) {
        this.options = Qi(
          {
            level: ln,
            method: pn,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: dn,
          },
          t || {},
        );
        let i = this.options;
        (i.raw && i.windowBits > 0
          ? (i.windowBits = -i.windowBits)
          : i.gzip &&
            i.windowBits > 0 &&
            i.windowBits < 16 &&
            (i.windowBits += 16),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new en()),
          (this.strm.avail_out = 0));
        let n = Wi.deflateInit2(
          this.strm,
          i.level,
          i.method,
          i.windowBits,
          i.memLevel,
          i.strategy,
        );
        if (n !== cn) throw new Error(Qt[n]);
        if (
          (i.header && Wi.deflateSetHeader(this.strm, i.header), i.dictionary)
        ) {
          let t;
          if (
            ((t =
              "string" == typeof i.dictionary
                ? Xi(i.dictionary)
                : "[object ArrayBuffer]" === sn.call(i.dictionary)
                  ? new Uint8Array(i.dictionary)
                  : i.dictionary),
            (n = Wi.deflateSetDictionary(this.strm, t)),
            n !== cn)
          )
            throw new Error(Qt[n]);
          this.R = !0;
        }
      }
      function Dn(t, i) {
        const n = new fn(i);
        if ((n.push(t, !0), n.err)) throw n.msg || Qt[n.err];
        return n.result;
      }
      ((fn.prototype.push = function (t, i) {
        const n = this.strm,
          e = this.options.chunkSize;
        let s, o;
        if (this.ended) return !1;
        for (
          o = i === ~~i ? i : !0 === i ? un : on,
            "string" == typeof t
              ? (n.input = Xi(t))
              : "[object ArrayBuffer]" === sn.call(t)
                ? (n.input = new Uint8Array(t))
                : (n.input = t),
            n.next_in = 0,
            n.avail_in = n.input.length;
          ;
        )
          if (
            (0 === n.avail_out &&
              ((n.output = new Uint8Array(e)),
              (n.next_out = 0),
              (n.avail_out = e)),
            (o === rn || o === an) && n.avail_out <= 6)
          )
            (this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0));
          else {
            if (((s = Wi.deflate(n, o)), s === hn))
              return (
                n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)),
                (s = Wi.deflateEnd(this.strm)),
                this.onEnd(s),
                (this.ended = !0),
                s === cn
              );
            if (0 !== n.avail_out) {
              if (o > 0 && n.next_out > 0)
                (this.onData(n.output.subarray(0, n.next_out)),
                  (n.avail_out = 0));
              else if (0 === n.avail_in) break;
            } else this.onData(n.output);
          }
        return !0;
      }),
        (fn.prototype.onData = function (t) {
          this.chunks.push(t);
        }),
        (fn.prototype.onEnd = function (t) {
          (t === cn && (this.result = Ji(this.chunks)),
            (this.chunks = []),
            (this.err = t),
            (this.msg = this.strm.msg));
        }));
      var vn = {
        Deflate: fn,
        deflate: Dn,
        deflateRaw: function (t, i) {
          return (((i = i || {}).raw = !0), Dn(t, i));
        },
        gzip: function (t, i) {
          return (((i = i || {}).gzip = !0), Dn(t, i));
        },
        constants: Jt,
      };
      const gn = 16209;
      var mn = function (t, i) {
        let n,
          e,
          s,
          o,
          r,
          a,
          u,
          c,
          h,
          l,
          d,
          p,
          f,
          D,
          v,
          g,
          m,
          w,
          y,
          b,
          C,
          F,
          _,
          E;
        const x = t.state;
        ((n = t.next_in),
          (_ = t.input),
          (e = n + (t.avail_in - 5)),
          (s = t.next_out),
          (E = t.output),
          (o = s - (i - t.avail_out)),
          (r = s + (t.avail_out - 257)),
          (a = x.dmax),
          (u = x.wsize),
          (c = x.whave),
          (h = x.wnext),
          (l = x.window),
          (d = x.hold),
          (p = x.bits),
          (f = x.lencode),
          (D = x.distcode),
          (v = (1 << x.lenbits) - 1),
          (g = (1 << x.distbits) - 1));
        t: do {
          (p < 15 &&
            ((d += _[n++] << p), (p += 8), (d += _[n++] << p), (p += 8)),
            (m = f[d & v]));
          i: for (;;) {
            if (
              ((w = m >>> 24),
              (d >>>= w),
              (p -= w),
              (w = (m >>> 16) & 255),
              0 === w)
            )
              E[s++] = 65535 & m;
            else {
              if (!(16 & w)) {
                if (64 & w) {
                  if (32 & w) {
                    x.mode = 16191;
                    break t;
                  }
                  ((t.msg = "invalid literal/length code"), (x.mode = gn));
                  break t;
                }
                m = f[(65535 & m) + (d & ((1 << w) - 1))];
                continue i;
              }
              for (
                y = 65535 & m,
                  w &= 15,
                  w &&
                    (p < w && ((d += _[n++] << p), (p += 8)),
                    (y += d & ((1 << w) - 1)),
                    (d >>>= w),
                    (p -= w)),
                  p < 15 &&
                    ((d += _[n++] << p),
                    (p += 8),
                    (d += _[n++] << p),
                    (p += 8)),
                  m = D[d & g];
                ;
              ) {
                if (
                  ((w = m >>> 24),
                  (d >>>= w),
                  (p -= w),
                  (w = (m >>> 16) & 255),
                  16 & w)
                ) {
                  if (
                    ((b = 65535 & m),
                    (w &= 15),
                    p < w &&
                      ((d += _[n++] << p),
                      (p += 8),
                      p < w && ((d += _[n++] << p), (p += 8))),
                    (b += d & ((1 << w) - 1)),
                    b > a)
                  ) {
                    ((t.msg = "invalid distance too far back"), (x.mode = gn));
                    break t;
                  }
                  if (((d >>>= w), (p -= w), (w = s - o), b > w)) {
                    if (((w = b - w), w > c && x.sane)) {
                      ((t.msg = "invalid distance too far back"),
                        (x.mode = gn));
                      break t;
                    }
                    if (((C = 0), (F = l), 0 === h)) {
                      if (((C += u - w), w < y)) {
                        y -= w;
                        do {
                          E[s++] = l[C++];
                        } while (--w);
                        ((C = s - b), (F = E));
                      }
                    } else if (h < w) {
                      if (((C += u + h - w), (w -= h), w < y)) {
                        y -= w;
                        do {
                          E[s++] = l[C++];
                        } while (--w);
                        if (((C = 0), h < y)) {
                          ((w = h), (y -= w));
                          do {
                            E[s++] = l[C++];
                          } while (--w);
                          ((C = s - b), (F = E));
                        }
                      }
                    } else if (((C += h - w), w < y)) {
                      y -= w;
                      do {
                        E[s++] = l[C++];
                      } while (--w);
                      ((C = s - b), (F = E));
                    }
                    for (; y > 2;)
                      ((E[s++] = F[C++]),
                        (E[s++] = F[C++]),
                        (E[s++] = F[C++]),
                        (y -= 3));
                    y && ((E[s++] = F[C++]), y > 1 && (E[s++] = F[C++]));
                  } else {
                    C = s - b;
                    do {
                      ((E[s++] = E[C++]),
                        (E[s++] = E[C++]),
                        (E[s++] = E[C++]),
                        (y -= 3));
                    } while (y > 2);
                    y && ((E[s++] = E[C++]), y > 1 && (E[s++] = E[C++]));
                  }
                  break;
                }
                if (64 & w) {
                  ((t.msg = "invalid distance code"), (x.mode = gn));
                  break t;
                }
                m = D[(65535 & m) + (d & ((1 << w) - 1))];
              }
            }
            break;
          }
        } while (n < e && s < r);
        ((y = p >> 3),
          (n -= y),
          (p -= y << 3),
          (d &= (1 << p) - 1),
          (t.next_in = n),
          (t.next_out = s),
          (t.avail_in = n < e ? e - n + 5 : 5 - (n - e)),
          (t.avail_out = s < r ? r - s + 257 : 257 - (s - r)),
          (x.hold = d),
          (x.bits = p));
      };
      const wn = 15,
        yn = new Uint16Array([
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ]),
        bn = new Uint8Array([
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
          19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
        ]),
        Cn = new Uint16Array([
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 0, 0,
        ]),
        Fn = new Uint8Array([
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
          23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ]);
      var _n = (t, i, n, e, s, o, r, a) => {
        const u = a.bits;
        let c,
          h,
          l,
          d,
          p,
          f,
          D = 0,
          v = 0,
          g = 0,
          m = 0,
          w = 0,
          y = 0,
          b = 0,
          C = 0,
          F = 0,
          _ = 0,
          E = null;
        const x = new Uint16Array(16),
          k = new Uint16Array(16);
        let A,
          S,
          I,
          B = null;
        for (D = 0; D <= wn; D++) x[D] = 0;
        for (v = 0; v < e; v++) x[i[n + v]]++;
        for (w = u, m = wn; m >= 1 && 0 === x[m]; m--);
        if ((w > m && (w = m), 0 === m))
          return ((s[o++] = 20971520), (s[o++] = 20971520), (a.bits = 1), 0);
        for (g = 1; g < m && 0 === x[g]; g++);
        for (w < g && (w = g), C = 1, D = 1; D <= wn; D++)
          if (((C <<= 1), (C -= x[D]), C < 0)) return -1;
        if (C > 0 && (0 === t || 1 !== m)) return -1;
        for (k[1] = 0, D = 1; D < wn; D++) k[D + 1] = k[D] + x[D];
        for (v = 0; v < e; v++) 0 !== i[n + v] && (r[k[i[n + v]]++] = v);
        if (
          (0 === t
            ? ((E = B = r), (f = 20))
            : 1 === t
              ? ((E = yn), (B = bn), (f = 257))
              : ((E = Cn), (B = Fn), (f = 0)),
          (_ = 0),
          (v = 0),
          (D = g),
          (p = o),
          (y = w),
          (b = 0),
          (l = -1),
          (F = 1 << w),
          (d = F - 1),
          (1 === t && F > 852) || (2 === t && F > 592))
        )
          return 1;
        for (;;) {
          ((A = D - b),
            r[v] + 1 < f
              ? ((S = 0), (I = r[v]))
              : r[v] >= f
                ? ((S = B[r[v] - f]), (I = E[r[v] - f]))
                : ((S = 96), (I = 0)),
            (c = 1 << (D - b)),
            (h = 1 << y),
            (g = h));
          do {
            ((h -= c), (s[p + (_ >> b) + h] = (A << 24) | (S << 16) | I));
          } while (0 !== h);
          for (c = 1 << (D - 1); _ & c;) c >>= 1;
          if (
            (0 !== c ? ((_ &= c - 1), (_ += c)) : (_ = 0), v++, 0 === --x[D])
          ) {
            if (D === m) break;
            D = i[n + r[v]];
          }
          if (D > w && (_ & d) !== l) {
            for (
              0 === b && (b = w), p += g, y = D - b, C = 1 << y;
              y + b < m && ((C -= x[y + b]), !(C <= 0));
            )
              (y++, (C <<= 1));
            if (((F += 1 << y), (1 === t && F > 852) || (2 === t && F > 592)))
              return 1;
            ((l = _ & d), (s[l] = (w << 24) | (y << 16) | (p - o)));
          }
        }
        return (
          0 !== _ && (s[p + _] = ((D - b) << 24) | (64 << 16)),
          (a.bits = w),
          0
        );
      };
      const {
          Z_FINISH: En,
          Z_BLOCK: xn,
          Z_TREES: kn,
          Z_OK: An,
          Z_STREAM_END: Sn,
          Z_NEED_DICT: In,
          Z_STREAM_ERROR: Bn,
          Z_DATA_ERROR: Tn,
          Z_MEM_ERROR: jn,
          Z_BUF_ERROR: $n,
          Z_DEFLATED: Pn,
        } = Jt,
        Ln = 16180,
        Rn = 16190,
        Mn = 16191,
        On = 16192,
        Vn = 16194,
        Un = 16199,
        Nn = 16200,
        Hn = 16206,
        Gn = 16209,
        zn = (t) =>
          ((t >>> 24) & 255) +
          ((t >>> 8) & 65280) +
          ((65280 & t) << 8) +
          ((255 & t) << 24);
      function Zn() {
        ((this.strm = null),
          (this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new Uint16Array(320)),
          (this.work = new Uint16Array(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0));
      }
      const Wn = (t) => {
          if (!t) return 1;
          const i = t.state;
          return !i || i.strm !== t || i.mode < Ln || i.mode > 16211 ? 1 : 0;
        },
        Yn = (t) => {
          if (Wn(t)) return Bn;
          const i = t.state;
          return (
            (t.total_in = t.total_out = i.total = 0),
            (t.msg = ""),
            i.wrap && (t.adler = 1 & i.wrap),
            (i.mode = Ln),
            (i.last = 0),
            (i.havedict = 0),
            (i.flags = -1),
            (i.dmax = 32768),
            (i.head = null),
            (i.hold = 0),
            (i.bits = 0),
            (i.lencode = i.lendyn = new Int32Array(852)),
            (i.distcode = i.distdyn = new Int32Array(592)),
            (i.sane = 1),
            (i.back = -1),
            An
          );
        },
        Qn = (t) => {
          if (Wn(t)) return Bn;
          const i = t.state;
          return ((i.wsize = 0), (i.whave = 0), (i.wnext = 0), Yn(t));
        },
        Jn = (t, i) => {
          let n;
          if (Wn(t)) return Bn;
          const e = t.state;
          return (
            i < 0
              ? ((n = 0), (i = -i))
              : ((n = 5 + (i >> 4)), i < 48 && (i &= 15)),
            i && (i < 8 || i > 15)
              ? Bn
              : (null !== e.window && e.wbits !== i && (e.window = null),
                (e.wrap = n),
                (e.wbits = i),
                Qn(t))
          );
        },
        Kn = (t, i) => {
          if (!t) return Bn;
          const n = new Zn();
          ((t.state = n), (n.strm = t), (n.window = null), (n.mode = Ln));
          const e = Jn(t, i);
          return (e !== An && (t.state = null), e);
        };
      let qn,
        Xn,
        te = !0;
      const ie = (t) => {
          if (te) {
            ((qn = new Int32Array(512)), (Xn = new Int32Array(32)));
            let i = 0;
            for (; i < 144;) t.lens[i++] = 8;
            for (; i < 256;) t.lens[i++] = 9;
            for (; i < 280;) t.lens[i++] = 7;
            for (; i < 288;) t.lens[i++] = 8;
            for (
              _n(1, t.lens, 0, 288, qn, 0, t.work, { bits: 9 }), i = 0;
              i < 32;
            )
              t.lens[i++] = 5;
            (_n(2, t.lens, 0, 32, Xn, 0, t.work, { bits: 5 }), (te = !1));
          }
          ((t.lencode = qn),
            (t.lenbits = 9),
            (t.distcode = Xn),
            (t.distbits = 5));
        },
        ne = (t, i, n, e) => {
          let s;
          const o = t.state;
          return (
            null === o.window &&
              ((o.wsize = 1 << o.wbits),
              (o.wnext = 0),
              (o.whave = 0),
              (o.window = new Uint8Array(o.wsize))),
            e >= o.wsize
              ? (o.window.set(i.subarray(n - o.wsize, n), 0),
                (o.wnext = 0),
                (o.whave = o.wsize))
              : ((s = o.wsize - o.wnext),
                s > e && (s = e),
                o.window.set(i.subarray(n - e, n - e + s), o.wnext),
                (e -= s)
                  ? (o.window.set(i.subarray(n - e, n), 0),
                    (o.wnext = e),
                    (o.whave = o.wsize))
                  : ((o.wnext += s),
                    o.wnext === o.wsize && (o.wnext = 0),
                    o.whave < o.wsize && (o.whave += s))),
            0
          );
        };
      var ee = {
        inflateReset: Qn,
        inflateReset2: Jn,
        inflateResetKeep: Yn,
        inflateInit: (t) => Kn(t, 15),
        inflateInit2: Kn,
        inflate: (t, i) => {
          let n,
            e,
            s,
            o,
            r,
            a,
            u,
            c,
            h,
            l,
            d,
            p,
            f,
            D,
            v,
            g,
            m,
            w,
            y,
            b,
            C,
            F,
            _ = 0;
          const E = new Uint8Array(4);
          let x, k;
          const A = new Uint8Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]);
          if (Wn(t) || !t.output || (!t.input && 0 !== t.avail_in)) return Bn;
          ((n = t.state),
            n.mode === Mn && (n.mode = On),
            (r = t.next_out),
            (s = t.output),
            (u = t.avail_out),
            (o = t.next_in),
            (e = t.input),
            (a = t.avail_in),
            (c = n.hold),
            (h = n.bits),
            (l = a),
            (d = u),
            (F = An));
          t: for (;;)
            switch (n.mode) {
              case Ln:
                if (0 === n.wrap) {
                  n.mode = On;
                  break;
                }
                for (; h < 16;) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                if (2 & n.wrap && 35615 === c) {
                  (0 === n.wbits && (n.wbits = 15),
                    (n.check = 0),
                    (E[0] = 255 & c),
                    (E[1] = (c >>> 8) & 255),
                    (n.check = Yt(n.check, E, 2, 0)),
                    (c = 0),
                    (h = 0),
                    (n.mode = 16181));
                  break;
                }
                if (
                  (n.head && (n.head.done = !1),
                  !(1 & n.wrap) || (((255 & c) << 8) + (c >> 8)) % 31)
                ) {
                  ((t.msg = "incorrect header check"), (n.mode = Gn));
                  break;
                }
                if ((15 & c) !== Pn) {
                  ((t.msg = "unknown compression method"), (n.mode = Gn));
                  break;
                }
                if (
                  ((c >>>= 4),
                  (h -= 4),
                  (C = 8 + (15 & c)),
                  0 === n.wbits && (n.wbits = C),
                  C > 15 || C > n.wbits)
                ) {
                  ((t.msg = "invalid window size"), (n.mode = Gn));
                  break;
                }
                ((n.dmax = 1 << n.wbits),
                  (n.flags = 0),
                  (t.adler = n.check = 1),
                  (n.mode = 512 & c ? 16189 : Mn),
                  (c = 0),
                  (h = 0));
                break;
              case 16181:
                for (; h < 16;) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                if (((n.flags = c), (255 & n.flags) !== Pn)) {
                  ((t.msg = "unknown compression method"), (n.mode = Gn));
                  break;
                }
                if (57344 & n.flags) {
                  ((t.msg = "unknown header flags set"), (n.mode = Gn));
                  break;
                }
                (n.head && (n.head.text = (c >> 8) & 1),
                  512 & n.flags &&
                    4 & n.wrap &&
                    ((E[0] = 255 & c),
                    (E[1] = (c >>> 8) & 255),
                    (n.check = Yt(n.check, E, 2, 0))),
                  (c = 0),
                  (h = 0),
                  (n.mode = 16182));
              case 16182:
                for (; h < 32;) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                (n.head && (n.head.time = c),
                  512 & n.flags &&
                    4 & n.wrap &&
                    ((E[0] = 255 & c),
                    (E[1] = (c >>> 8) & 255),
                    (E[2] = (c >>> 16) & 255),
                    (E[3] = (c >>> 24) & 255),
                    (n.check = Yt(n.check, E, 4, 0))),
                  (c = 0),
                  (h = 0),
                  (n.mode = 16183));
              case 16183:
                for (; h < 16;) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                (n.head && ((n.head.xflags = 255 & c), (n.head.os = c >> 8)),
                  512 & n.flags &&
                    4 & n.wrap &&
                    ((E[0] = 255 & c),
                    (E[1] = (c >>> 8) & 255),
                    (n.check = Yt(n.check, E, 2, 0))),
                  (c = 0),
                  (h = 0),
                  (n.mode = 16184));
              case 16184:
                if (1024 & n.flags) {
                  for (; h < 16;) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  ((n.length = c),
                    n.head && (n.head.extra_len = c),
                    512 & n.flags &&
                      4 & n.wrap &&
                      ((E[0] = 255 & c),
                      (E[1] = (c >>> 8) & 255),
                      (n.check = Yt(n.check, E, 2, 0))),
                    (c = 0),
                    (h = 0));
                } else n.head && (n.head.extra = null);
                n.mode = 16185;
              case 16185:
                if (
                  1024 & n.flags &&
                  ((p = n.length),
                  p > a && (p = a),
                  p &&
                    (n.head &&
                      ((C = n.head.extra_len - n.length),
                      n.head.extra ||
                        (n.head.extra = new Uint8Array(n.head.extra_len)),
                      n.head.extra.set(e.subarray(o, o + p), C)),
                    512 & n.flags &&
                      4 & n.wrap &&
                      (n.check = Yt(n.check, e, p, o)),
                    (a -= p),
                    (o += p),
                    (n.length -= p)),
                  n.length)
                )
                  break t;
                ((n.length = 0), (n.mode = 16186));
              case 16186:
                if (2048 & n.flags) {
                  if (0 === a) break t;
                  p = 0;
                  do {
                    ((C = e[o + p++]),
                      n.head &&
                        C &&
                        n.length < 65536 &&
                        (n.head.name += String.fromCharCode(C)));
                  } while (C && p < a);
                  if (
                    (512 & n.flags &&
                      4 & n.wrap &&
                      (n.check = Yt(n.check, e, p, o)),
                    (a -= p),
                    (o += p),
                    C)
                  )
                    break t;
                } else n.head && (n.head.name = null);
                ((n.length = 0), (n.mode = 16187));
              case 16187:
                if (4096 & n.flags) {
                  if (0 === a) break t;
                  p = 0;
                  do {
                    ((C = e[o + p++]),
                      n.head &&
                        C &&
                        n.length < 65536 &&
                        (n.head.comment += String.fromCharCode(C)));
                  } while (C && p < a);
                  if (
                    (512 & n.flags &&
                      4 & n.wrap &&
                      (n.check = Yt(n.check, e, p, o)),
                    (a -= p),
                    (o += p),
                    C)
                  )
                    break t;
                } else n.head && (n.head.comment = null);
                n.mode = 16188;
              case 16188:
                if (512 & n.flags) {
                  for (; h < 16;) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  if (4 & n.wrap && c !== (65535 & n.check)) {
                    ((t.msg = "header crc mismatch"), (n.mode = Gn));
                    break;
                  }
                  ((c = 0), (h = 0));
                }
                (n.head &&
                  ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
                  (t.adler = n.check = 0),
                  (n.mode = Mn));
                break;
              case 16189:
                for (; h < 32;) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                ((t.adler = n.check = zn(c)), (c = 0), (h = 0), (n.mode = Rn));
              case Rn:
                if (0 === n.havedict)
                  return (
                    (t.next_out = r),
                    (t.avail_out = u),
                    (t.next_in = o),
                    (t.avail_in = a),
                    (n.hold = c),
                    (n.bits = h),
                    In
                  );
                ((t.adler = n.check = 1), (n.mode = Mn));
              case Mn:
                if (i === xn || i === kn) break t;
              case On:
                if (n.last) {
                  ((c >>>= 7 & h), (h -= 7 & h), (n.mode = Hn));
                  break;
                }
                for (; h < 3;) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                switch (((n.last = 1 & c), (c >>>= 1), (h -= 1), 3 & c)) {
                  case 0:
                    n.mode = 16193;
                    break;
                  case 1:
                    if ((ie(n), (n.mode = Un), i === kn)) {
                      ((c >>>= 2), (h -= 2));
                      break t;
                    }
                    break;
                  case 2:
                    n.mode = 16196;
                    break;
                  case 3:
                    ((t.msg = "invalid block type"), (n.mode = Gn));
                }
                ((c >>>= 2), (h -= 2));
                break;
              case 16193:
                for (c >>>= 7 & h, h -= 7 & h; h < 32;) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                if ((65535 & c) != ((c >>> 16) ^ 65535)) {
                  ((t.msg = "invalid stored block lengths"), (n.mode = Gn));
                  break;
                }
                if (
                  ((n.length = 65535 & c),
                  (c = 0),
                  (h = 0),
                  (n.mode = Vn),
                  i === kn)
                )
                  break t;
              case Vn:
                n.mode = 16195;
              case 16195:
                if (((p = n.length), p)) {
                  if ((p > a && (p = a), p > u && (p = u), 0 === p)) break t;
                  (s.set(e.subarray(o, o + p), r),
                    (a -= p),
                    (o += p),
                    (u -= p),
                    (r += p),
                    (n.length -= p));
                  break;
                }
                n.mode = Mn;
                break;
              case 16196:
                for (; h < 14;) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                if (
                  ((n.nlen = 257 + (31 & c)),
                  (c >>>= 5),
                  (h -= 5),
                  (n.ndist = 1 + (31 & c)),
                  (c >>>= 5),
                  (h -= 5),
                  (n.ncode = 4 + (15 & c)),
                  (c >>>= 4),
                  (h -= 4),
                  n.nlen > 286 || n.ndist > 30)
                ) {
                  ((t.msg = "too many length or distance symbols"),
                    (n.mode = Gn));
                  break;
                }
                ((n.have = 0), (n.mode = 16197));
              case 16197:
                for (; n.have < n.ncode;) {
                  for (; h < 3;) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  ((n.lens[A[n.have++]] = 7 & c), (c >>>= 3), (h -= 3));
                }
                for (; n.have < 19;) n.lens[A[n.have++]] = 0;
                if (
                  ((n.lencode = n.lendyn),
                  (n.lenbits = 7),
                  (x = { bits: n.lenbits }),
                  (F = _n(0, n.lens, 0, 19, n.lencode, 0, n.work, x)),
                  (n.lenbits = x.bits),
                  F)
                ) {
                  ((t.msg = "invalid code lengths set"), (n.mode = Gn));
                  break;
                }
                ((n.have = 0), (n.mode = 16198));
              case 16198:
                for (; n.have < n.nlen + n.ndist;) {
                  for (
                    ;
                    (_ = n.lencode[c & ((1 << n.lenbits) - 1)]),
                      (v = _ >>> 24),
                      (g = (_ >>> 16) & 255),
                      (m = 65535 & _),
                      !(v <= h);
                  ) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  if (m < 16) ((c >>>= v), (h -= v), (n.lens[n.have++] = m));
                  else {
                    if (16 === m) {
                      for (k = v + 2; h < k;) {
                        if (0 === a) break t;
                        (a--, (c += e[o++] << h), (h += 8));
                      }
                      if (((c >>>= v), (h -= v), 0 === n.have)) {
                        ((t.msg = "invalid bit length repeat"), (n.mode = Gn));
                        break;
                      }
                      ((C = n.lens[n.have - 1]),
                        (p = 3 + (3 & c)),
                        (c >>>= 2),
                        (h -= 2));
                    } else if (17 === m) {
                      for (k = v + 3; h < k;) {
                        if (0 === a) break t;
                        (a--, (c += e[o++] << h), (h += 8));
                      }
                      ((c >>>= v),
                        (h -= v),
                        (C = 0),
                        (p = 3 + (7 & c)),
                        (c >>>= 3),
                        (h -= 3));
                    } else {
                      for (k = v + 7; h < k;) {
                        if (0 === a) break t;
                        (a--, (c += e[o++] << h), (h += 8));
                      }
                      ((c >>>= v),
                        (h -= v),
                        (C = 0),
                        (p = 11 + (127 & c)),
                        (c >>>= 7),
                        (h -= 7));
                    }
                    if (n.have + p > n.nlen + n.ndist) {
                      ((t.msg = "invalid bit length repeat"), (n.mode = Gn));
                      break;
                    }
                    for (; p--;) n.lens[n.have++] = C;
                  }
                }
                if (n.mode === Gn) break;
                if (0 === n.lens[256]) {
                  ((t.msg = "invalid code -- missing end-of-block"),
                    (n.mode = Gn));
                  break;
                }
                if (
                  ((n.lenbits = 9),
                  (x = { bits: n.lenbits }),
                  (F = _n(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, x)),
                  (n.lenbits = x.bits),
                  F)
                ) {
                  ((t.msg = "invalid literal/lengths set"), (n.mode = Gn));
                  break;
                }
                if (
                  ((n.distbits = 6),
                  (n.distcode = n.distdyn),
                  (x = { bits: n.distbits }),
                  (F = _n(
                    2,
                    n.lens,
                    n.nlen,
                    n.ndist,
                    n.distcode,
                    0,
                    n.work,
                    x,
                  )),
                  (n.distbits = x.bits),
                  F)
                ) {
                  ((t.msg = "invalid distances set"), (n.mode = Gn));
                  break;
                }
                if (((n.mode = Un), i === kn)) break t;
              case Un:
                n.mode = Nn;
              case Nn:
                if (a >= 6 && u >= 258) {
                  ((t.next_out = r),
                    (t.avail_out = u),
                    (t.next_in = o),
                    (t.avail_in = a),
                    (n.hold = c),
                    (n.bits = h),
                    mn(t, d),
                    (r = t.next_out),
                    (s = t.output),
                    (u = t.avail_out),
                    (o = t.next_in),
                    (e = t.input),
                    (a = t.avail_in),
                    (c = n.hold),
                    (h = n.bits),
                    n.mode === Mn && (n.back = -1));
                  break;
                }
                for (
                  n.back = 0;
                  (_ = n.lencode[c & ((1 << n.lenbits) - 1)]),
                    (v = _ >>> 24),
                    (g = (_ >>> 16) & 255),
                    (m = 65535 & _),
                    !(v <= h);
                ) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                if (g && !(240 & g)) {
                  for (
                    w = v, y = g, b = m;
                    (_ = n.lencode[b + ((c & ((1 << (w + y)) - 1)) >> w)]),
                      (v = _ >>> 24),
                      (g = (_ >>> 16) & 255),
                      (m = 65535 & _),
                      !(w + v <= h);
                  ) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  ((c >>>= w), (h -= w), (n.back += w));
                }
                if (
                  ((c >>>= v), (h -= v), (n.back += v), (n.length = m), 0 === g)
                ) {
                  n.mode = 16205;
                  break;
                }
                if (32 & g) {
                  ((n.back = -1), (n.mode = Mn));
                  break;
                }
                if (64 & g) {
                  ((t.msg = "invalid literal/length code"), (n.mode = Gn));
                  break;
                }
                ((n.extra = 15 & g), (n.mode = 16201));
              case 16201:
                if (n.extra) {
                  for (k = n.extra; h < k;) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  ((n.length += c & ((1 << n.extra) - 1)),
                    (c >>>= n.extra),
                    (h -= n.extra),
                    (n.back += n.extra));
                }
                ((n.was = n.length), (n.mode = 16202));
              case 16202:
                for (
                  ;
                  (_ = n.distcode[c & ((1 << n.distbits) - 1)]),
                    (v = _ >>> 24),
                    (g = (_ >>> 16) & 255),
                    (m = 65535 & _),
                    !(v <= h);
                ) {
                  if (0 === a) break t;
                  (a--, (c += e[o++] << h), (h += 8));
                }
                if (!(240 & g)) {
                  for (
                    w = v, y = g, b = m;
                    (_ = n.distcode[b + ((c & ((1 << (w + y)) - 1)) >> w)]),
                      (v = _ >>> 24),
                      (g = (_ >>> 16) & 255),
                      (m = 65535 & _),
                      !(w + v <= h);
                  ) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  ((c >>>= w), (h -= w), (n.back += w));
                }
                if (((c >>>= v), (h -= v), (n.back += v), 64 & g)) {
                  ((t.msg = "invalid distance code"), (n.mode = Gn));
                  break;
                }
                ((n.offset = m), (n.extra = 15 & g), (n.mode = 16203));
              case 16203:
                if (n.extra) {
                  for (k = n.extra; h < k;) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  ((n.offset += c & ((1 << n.extra) - 1)),
                    (c >>>= n.extra),
                    (h -= n.extra),
                    (n.back += n.extra));
                }
                if (n.offset > n.dmax) {
                  ((t.msg = "invalid distance too far back"), (n.mode = Gn));
                  break;
                }
                n.mode = 16204;
              case 16204:
                if (0 === u) break t;
                if (((p = d - u), n.offset > p)) {
                  if (((p = n.offset - p), p > n.whave && n.sane)) {
                    ((t.msg = "invalid distance too far back"), (n.mode = Gn));
                    break;
                  }
                  (p > n.wnext
                    ? ((p -= n.wnext), (f = n.wsize - p))
                    : (f = n.wnext - p),
                    p > n.length && (p = n.length),
                    (D = n.window));
                } else ((D = s), (f = r - n.offset), (p = n.length));
                (p > u && (p = u), (u -= p), (n.length -= p));
                do {
                  s[r++] = D[f++];
                } while (--p);
                0 === n.length && (n.mode = Nn);
                break;
              case 16205:
                if (0 === u) break t;
                ((s[r++] = n.length), u--, (n.mode = Nn));
                break;
              case Hn:
                if (n.wrap) {
                  for (; h < 32;) {
                    if (0 === a) break t;
                    (a--, (c |= e[o++] << h), (h += 8));
                  }
                  if (
                    ((d -= u),
                    (t.total_out += d),
                    (n.total += d),
                    4 & n.wrap &&
                      d &&
                      (t.adler = n.check =
                        n.flags
                          ? Yt(n.check, s, d, r - d)
                          : Zt(n.check, s, d, r - d)),
                    (d = u),
                    4 & n.wrap && (n.flags ? c : zn(c)) !== n.check)
                  ) {
                    ((t.msg = "incorrect data check"), (n.mode = Gn));
                    break;
                  }
                  ((c = 0), (h = 0));
                }
                n.mode = 16207;
              case 16207:
                if (n.wrap && n.flags) {
                  for (; h < 32;) {
                    if (0 === a) break t;
                    (a--, (c += e[o++] << h), (h += 8));
                  }
                  if (4 & n.wrap && c !== (4294967295 & n.total)) {
                    ((t.msg = "incorrect length check"), (n.mode = Gn));
                    break;
                  }
                  ((c = 0), (h = 0));
                }
                n.mode = 16208;
              case 16208:
                F = Sn;
                break t;
              case Gn:
                F = Tn;
                break t;
              case 16210:
                return jn;
              default:
                return Bn;
            }
          return (
            (t.next_out = r),
            (t.avail_out = u),
            (t.next_in = o),
            (t.avail_in = a),
            (n.hold = c),
            (n.bits = h),
            (n.wsize ||
              (d !== t.avail_out &&
                n.mode < Gn &&
                (n.mode < Hn || i !== En))) &&
              ne(t, t.output, t.next_out, d - t.avail_out),
            (l -= t.avail_in),
            (d -= t.avail_out),
            (t.total_in += l),
            (t.total_out += d),
            (n.total += d),
            4 & n.wrap &&
              d &&
              (t.adler = n.check =
                n.flags
                  ? Yt(n.check, s, d, t.next_out - d)
                  : Zt(n.check, s, d, t.next_out - d)),
            (t.data_type =
              n.bits +
              (n.last ? 64 : 0) +
              (n.mode === Mn ? 128 : 0) +
              (n.mode === Un || n.mode === Vn ? 256 : 0)),
            ((0 === l && 0 === d) || i === En) && F === An && (F = $n),
            F
          );
        },
        inflateEnd: (t) => {
          if (Wn(t)) return Bn;
          let i = t.state;
          return (i.window && (i.window = null), (t.state = null), An);
        },
        inflateGetHeader: (t, i) => {
          if (Wn(t)) return Bn;
          const n = t.state;
          return 2 & n.wrap ? ((n.head = i), (i.done = !1), An) : Bn;
        },
        inflateSetDictionary: (t, i) => {
          const n = i.length;
          let e, s, o;
          return Wn(t)
            ? Bn
            : ((e = t.state),
              0 !== e.wrap && e.mode !== Rn
                ? Bn
                : e.mode === Rn &&
                    ((s = 1), (s = Zt(s, i, n, 0)), s !== e.check)
                  ? Tn
                  : ((o = ne(t, i, n, n)),
                    o ? ((e.mode = 16210), jn) : ((e.havedict = 1), An)));
        },
        inflateInfo: "pako inflate (from Nodeca project)",
      };
      var se = function () {
        ((this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1));
      };
      const oe = Object.prototype.toString,
        {
          Z_NO_FLUSH: re,
          Z_FINISH: ae,
          Z_OK: ue,
          Z_STREAM_END: ce,
          Z_NEED_DICT: he,
          Z_STREAM_ERROR: le,
          Z_DATA_ERROR: de,
          Z_MEM_ERROR: pe,
        } = Jt;
      function fe(t) {
        this.options = Qi(
          { chunkSize: 65536, windowBits: 15, to: "" },
          t || {},
        );
        const i = this.options;
        (i.raw &&
          i.windowBits >= 0 &&
          i.windowBits < 16 &&
          ((i.windowBits = -i.windowBits),
          0 === i.windowBits && (i.windowBits = -15)),
          !(i.windowBits >= 0 && i.windowBits < 16) ||
            (t && t.windowBits) ||
            (i.windowBits += 32),
          i.windowBits > 15 &&
            i.windowBits < 48 &&
            (15 & i.windowBits || (i.windowBits |= 15)),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new en()),
          (this.strm.avail_out = 0));
        let n = ee.inflateInit2(this.strm, i.windowBits);
        if (n !== ue) throw new Error(Qt[n]);
        if (
          ((this.header = new se()),
          ee.inflateGetHeader(this.strm, this.header),
          i.dictionary &&
            ("string" == typeof i.dictionary
              ? (i.dictionary = Xi(i.dictionary))
              : "[object ArrayBuffer]" === oe.call(i.dictionary) &&
                (i.dictionary = new Uint8Array(i.dictionary)),
            i.raw &&
              ((n = ee.inflateSetDictionary(this.strm, i.dictionary)),
              n !== ue)))
        )
          throw new Error(Qt[n]);
      }
      function De(t, i) {
        const n = new fe(i);
        if ((n.push(t), n.err)) throw n.msg || Qt[n.err];
        return n.result;
      }
      ((fe.prototype.push = function (t, i) {
        const n = this.strm,
          e = this.options.chunkSize,
          s = this.options.dictionary;
        let o, r, a;
        if (this.ended) return !1;
        for (
          r = i === ~~i ? i : !0 === i ? ae : re,
            "[object ArrayBuffer]" === oe.call(t)
              ? (n.input = new Uint8Array(t))
              : (n.input = t),
            n.next_in = 0,
            n.avail_in = n.input.length;
          ;
        ) {
          for (
            0 === n.avail_out &&
              ((n.output = new Uint8Array(e)),
              (n.next_out = 0),
              (n.avail_out = e)),
              o = ee.inflate(n, r),
              o === he &&
                s &&
                ((o = ee.inflateSetDictionary(n, s)),
                o === ue ? (o = ee.inflate(n, r)) : o === de && (o = he));
            n.avail_in > 0 &&
            o === ce &&
            n.state.wrap > 0 &&
            0 !== t[n.next_in];
          )
            (ee.inflateReset(n), (o = ee.inflate(n, r)));
          switch (o) {
            case le:
            case de:
            case he:
            case pe:
              return (this.onEnd(o), (this.ended = !0), !1);
          }
          if (
            ((a = n.avail_out), n.next_out && (0 === n.avail_out || o === ce))
          )
            if ("string" === this.options.to) {
              let t = nn(n.output, n.next_out),
                i = n.next_out - t,
                s = tn(n.output, t);
              ((n.next_out = i),
                (n.avail_out = e - i),
                i && n.output.set(n.output.subarray(t, t + i), 0),
                this.onData(s));
            } else
              this.onData(
                n.output.length === n.next_out
                  ? n.output
                  : n.output.subarray(0, n.next_out),
              );
          if (o !== ue || 0 !== a) {
            if (o === ce)
              return (
                (o = ee.inflateEnd(this.strm)),
                this.onEnd(o),
                (this.ended = !0),
                !0
              );
            if (0 === n.avail_in) break;
          }
        }
        return !0;
      }),
        (fe.prototype.onData = function (t) {
          this.chunks.push(t);
        }),
        (fe.prototype.onEnd = function (t) {
          (t === ue &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = Ji(this.chunks))),
            (this.chunks = []),
            (this.err = t),
            (this.msg = this.strm.msg));
        }));
      var ve = {
        Inflate: fe,
        inflate: De,
        inflateRaw: function (t, i) {
          return (((i = i || {}).raw = !0), De(t, i));
        },
        ungzip: De,
        constants: Jt,
      };
      const { Deflate: ge, deflate: me, deflateRaw: we, gzip: ye } = vn,
        { Inflate: be, inflate: Ce, inflateRaw: Fe, ungzip: _e } = ve;
      var Ee,
        xe,
        ke = {
          Deflate: ge,
          deflate: me,
          deflateRaw: we,
          gzip: ye,
          Inflate: be,
          inflate: Ce,
          inflateRaw: Fe,
          ungzip: _e,
          constants: Jt,
        },
        Ae = function (t, i, n, e) {
          return new (n || (n = Promise))(function (s, o) {
            function r(t) {
              try {
                u(e.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(e.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var i;
              t.done
                ? s(t.value)
                : ((i = t.value),
                  i instanceof n
                    ? i
                    : new n(function (t) {
                        t(i);
                      })).then(r, a);
            }
            u((e = e.apply(t, i || [])).next());
          });
        };
      function Se(t) {
        return (
          t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.")
        );
      }
      function Ie(t = new URL(window.location.href)) {
        return "tv.youtube.com" === t.hostname;
      }
      function Be(t) {
        return (
          t.hostname.includes(".netflix.") && t.pathname.includes("/watch")
        );
      }
      function Te(t) {
        return "/live" === t.replace(/\/+$/, "");
      }
      function je(t) {
        return function () {
          return new Promise((i) => {
            setTimeout(() => {
              i();
            }, t);
          });
        };
      }
      function $e(t, i, n = 250) {
        return function () {
          const e = new Date().getTime(),
            s = function () {
              return Ae(this, void 0, void 0, function* () {
                return (yield t())
                  ? Promise.resolve()
                  : null !== i && new Date().getTime() - e > i
                    ? Promise.reject(new Error("delayUntil timed out: " + t))
                    : je(n)().then(s);
              });
            };
          return s();
        };
      }
      function Pe(t, i, n) {
        (t.push(i), t.length > n && t.splice(0, t.length - n));
      }
      function Le(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      function Re(t) {
        const i = document.createElement("script");
        (i.setAttribute("tpInjected", ""),
          (i.src = t),
          (document.head || document.documentElement).appendChild(i),
          i.remove());
      }
      function Me(t) {
        return Ae(this, void 0, void 0, function* () {
          if (
            (t.headers.get("content-type") || "").includes("application/json")
          )
            try {
              return yield t.json();
            } catch (t) {}
          const i = yield t.text();
          if (!i) return i;
          try {
            return JSON.parse(i);
          } catch (t) {
            return i;
          }
        });
      }
      function Oe(t, i, n, e, s, o, a = !1) {
        return Ae(this, void 0, void 0, function* () {
          const u = `${r}/${t}`.replace(/([^:]\/)\/+/g, "$1"),
            c = n && !!s,
            h = n && !s,
            l = Object.assign({ Accept: "application/json" }, o || {}),
            d = (t) =>
              ("undefined" != typeof FormData && t instanceof FormData) ||
              ("undefined" != typeof Blob && t instanceof Blob) ||
              ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer);
          if (
            ("GET" === i ||
              null == e ||
              d(e) ||
              (l["Content-Type"] = l["Content-Type"] || "application/json"),
            c && (l.Authorization = `Bearer ${s}`),
            h && !l["x-tp-csrf"])
          ) {
            const t = yield J(a);
            t && (l["x-tp-csrf"] = t);
          }
          const p = {
              method: i,
              headers: l,
              credentials: h ? "include" : "omit",
              body:
                "GET" !== i && null != e
                  ? d(e)
                    ? e
                    : JSON.stringify(e)
                  : void 0,
            },
            f = yield fetch(u, p);
          if (0 === f.status || (f.status >= 200 && f.status < 400))
            return yield Me(f);
          const D = yield Me(f),
            v = new Error("string" == typeof D ? D : JSON.stringify(D));
          throw ((v.status = f.status), v);
        });
      }
      function Ve(t) {
        const i = new TextEncoder().encode(t),
          n = ke.gzip(i);
        let e = "";
        for (let t = 0; t < n.length; t++) e += String.fromCharCode(n[t]);
        return btoa(e);
      }
      (!(function (t) {
        ((t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share"),
          (t.PARTY_SCHEDULE = "party_schedule"));
      })(Ee || (Ee = {})),
        (function (t) {
          ((t.NETFLIX = "Netflix"),
            (t.HULU = "Hulu"),
            (t.DISNEY_PLUS = "Disney"),
            (t.DISNEY_PLUS_MENA = "DisneyMena"),
            (t.HBO_MAX = "HBOMax"),
            (t.MAX = "Max"),
            (t.YOUTUBE = "Youtube"),
            (t.YOUTUBE_TV = "YoutubeTV"),
            (t.AMAZON = "Amazon"),
            (t.CRUNCHYROLL = "Crunchyroll"),
            (t.ESPN = "ESPN+"),
            (t.PARAMOUNT = "Paramount+"),
            (t.FUNIMATION = "Funimation"),
            (t.HOTSTAR = "Hotstar"),
            (t.PEACOCK = "Peacock TV"),
            (t.STAR_PLUS = "Starplus"),
            (t.PLUTO_TV = "PlutoTV"),
            (t.APPLE_TV = "AppleTV"),
            (t.JIO_CINEMA = "JioCinema"),
            (t.TUBI_TV = "TubiTV"),
            (t.MUBI = "Mubi"),
            (t.STAN = "Stan"),
            (t.CRAVE = "Crave"),
            (t.SLING = "Sling"),
            (t.FUBO = "Fubo"),
            (t.VIKI = "Viki"),
            (t.SPOTIFY = "Spotify"),
            (t.ZEE5 = "Zee5"),
            (t.SONY_LIV = "SonyLiv"),
            (t.UNEXT = "U-Next"),
            (t.HULU_JP = "Hulu Japan"),
            (t.WILLOW = "Willow"),
            (t.CANALPLUS = "Canal+"),
            (t.FANCODE = "Fancode"),
            (t.SHAHID = "Shahid"),
            (t.SHUDDER = "Shudder"),
            (t.VIU = "Viu"),
            (t.VIDIO = "Vidio"),
            (t.FOX_ONE = "Fox One"),
            (t.TSN_PLUS = "TSN+"),
            (t.LEAGUE_PASS = "LeaguePass"),
            (t.DAZN = "DAZN"),
            (t.VIX = "Vix"),
            (t.MIGU = "Migu"),
            (t.F1_TV = "F1 TV"));
        })(xe || (xe = {})));
      const Ue = new (class extends z {
        isValidUrl(t) {
          return Se(t);
        }
        isBrowsing(t) {
          return Se(t) || t.pathname.includes("amazon.");
        }
        getVideoId(t) {
          const i = t.pathname
            .split("ref")[0]
            .match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
          return null != i && i.length > 0 ? i[1] : void 0;
        }
      })(
        [],
        ["content_scripts/amazon/amazon_content_bundled.js"],
        "amazon",
        xe.AMAZON,
        !1,
        ["browse_scripts/amazon/amazon_browse_bundled.js"],
      );
      Object.freeze(Ue);
      const Ne = Ue;
      const He = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("tv.apple.com");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("tv.apple.com");
        }
        getVideoId(t) {
          return t.toString().split("https://tv.apple.com/")[1];
        }
      })(
        [],
        ["content_scripts/appletv/appletv_content_bundled.js"],
        "appletv",
        xe.APPLE_TV,
        !1,
        ["browse_scripts/appletv/appletv_browse_bundled.js"],
      );
      Object.freeze(He);
      const Ge = He;
      const ze = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".canalplus.") &&
              [
                "/cinema",
                "/sport",
                "/divertissement",
                "/decouverte",
                "/musique",
                "/series",
              ].some((i) => t.pathname.includes(i))
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".canalplus.");
        }
        getVideoId(t) {
          const i = t.pathname.split("/").filter(Boolean);
          return "live" === i[0] && i.length >= 2 ? i[1] : i.join("/");
        }
      })(
        [],
        ["content_scripts/canalplus/canalplus_content_bundled.js"],
        "canalplus",
        xe.CANALPLUS,
        !1,
        ["browse_scripts/canalplus/canalplus_browse_bundled.js"],
      );
      Object.freeze(ze);
      const Ze = ze;
      const We = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes(".crave."),
              n = t.pathname.includes("/play/") || t.pathname.includes("/live");
            return i && n;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".crave.");
        }
        getVideoId(t) {
          if (t.pathname.includes("/live")) {
            const i = t.searchParams.get("channel");
            return i ? `live/${i}` : "live";
          }
          return t.pathname.split("/").slice(2).join("/");
        }
      })(
        [],
        ["content_scripts/crave/crave_content_bundled.js"],
        "crave",
        xe.CRAVE,
        !1,
        ["browse_scripts/crave/crave_browse_bundled.js"],
      );
      Object.freeze(We);
      const Ye = We;
      const Qe = new (class extends z {
        isBrowsing(t) {
          return t.hostname.includes(".crunchyroll.");
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".crunchyroll.") &&
              t.pathname.includes("/watch/")
            );
          })(t);
        }
        getVideoId(t) {
          const i = t.pathname.match(/watch\/(.*)\//);
          return i && i.length > 0 ? i[1] : void 0;
        }
      })(
        [],
        ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"],
        "crunchyroll",
        xe.CRUNCHYROLL,
        !1,
        ["browse_scripts/crunchyroll/crunchyroll_browse_bundled.js"],
      );
      Object.freeze(Qe);
      const Je = Qe;
      const Ke = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".disneyplus.") &&
              (t.pathname.includes("/video") || t.pathname.includes("/play"))
            );
          })(t);
        }
        isBrowsing(t) {
          return (
            t.hostname.includes(".disneyplus.") &&
            !t.hostname.includes("apps.disneyplus.")
          );
        }
        getVideoId(t) {
          const i = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return i && i.length > 0 ? i[1] : void 0;
        }
      })(
        [],
        ["content_scripts/disney/disney_content_bundled.js"],
        "disney",
        xe.DISNEY_PLUS,
        !1,
        ["browse_scripts/disney/disney_browse_bundled.js"],
      );
      Object.freeze(Ke);
      const qe = Ke;
      const Xe = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes("apps.disneyplus.") &&
              t.pathname.includes("/watch")
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("apps.disneyplus.");
        }
        getVideoId(t) {
          const i = t.pathname.split("/");
          return i && i.length > 1 ? i[i.length - 2] : void 0;
        }
      })(
        [],
        ["content_scripts/disneymena/disneymena_content_bundled.js"],
        "disneymena",
        xe.DISNEY_PLUS_MENA,
        !1,
      );
      Object.freeze(Xe);
      const ts = Xe;
      const is = new (class extends z {
        isBrowsing(t) {
          return t.hostname.includes(".espn.");
        }
        isValidUrl(t) {
          return (function (t) {
            if (!t.hostname.includes(".espn.")) return !1;
            const i = t.pathname;
            return i.includes("/player") || i.includes("/watch/");
          })(t);
        }
        getVideoId(t) {
          const i = t.pathname,
            n = i.match(/\/watch\/player\/_\/id\/([^/?#]+)/);
          if (null == n ? void 0 : n[1]) return decodeURIComponent(n[1]);
          const e = ["contentId", "mediaId", "id"];
          for (const i of e) {
            const n = t.searchParams.get(i);
            if (!n) continue;
            const e = decodeURIComponent(n);
            if (
              /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(
                e,
              ) ||
              /^\d{8,}$/.test(e)
            )
              return e;
          }
          const s = (i + t.hash).match(
            /\b([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|\d{8,})\b/,
          );
          return null == s ? void 0 : s[1];
        }
      })(
        [],
        ["content_scripts/espn/espn_content_bundled.js"],
        "espn",
        xe.ESPN,
        !1,
        ["browse_scripts/espn/espn_browse_bundled.js"],
      );
      Object.freeze(is);
      const ns = is;
      const es = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("fancode.com"),
              n =
                t.searchParams.get(tt.MATCH_INFO_QUERY_PARAM.tag) ===
                tt.MATCH_INFO_QUERY_PARAM.value,
              e = t.pathname.includes(tt.HIGHLIGHTS),
              s = tt.LIVE_MATCH_PAGE_TYPES.some((i) => t.pathname.includes(i));
            return i && !n && (e || s);
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".fancode.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })(
        [],
        ["content_scripts/fancode/fancode_content_bundled.js"],
        "fancode",
        xe.FANCODE,
        !1,
        ["browse_scripts/fancode/fancode_browse_bundled.js"],
      );
      Object.freeze(es);
      const ss = es;
      var os;
      !(function (t) {
        ((t.NETFLIX = "netflix"),
          (t.HULU = "hulu"),
          (t.DISNEY_PLUS = "disney"),
          (t.STAR_PLUS = "starplus"),
          (t.AMAZON = "amazon"),
          (t.YOUTUBE = "youtube"),
          (t.HBO_MAX = "hbomax"),
          (t.MAX = "max"),
          (t.FUBO = "fubo"),
          (t.CRUNCHYROLL = "crunchyroll"),
          (t.PARAMOUNT = "paramount"),
          (t.PEACOCK = "peacock"),
          (t.HOTSTAR = "hotstar"),
          (t.DISNEY_PLUS_MENA = "disneymena"),
          (t.APPLE_TV = "appletv"),
          (t.PLUTO_TV = "plutotv"),
          (t.FUNIMATION = "funimation"),
          (t.TUBI_TV = "tubitv"),
          (t.JIO_CINEMA = "jiocinema"),
          (t.MUBI = "mubi"),
          (t.CRAVE = "crave"),
          (t.STAN = "stan"),
          (t.SONY_LIV = "sonyliv"),
          (t.ZEE5 = "zee5"),
          (t.HULU_JP = "hulujp"),
          (t.UNEXT = "unext"),
          (t.GLOBOPLAY = "globoplay"),
          (t.WILLOW = "willow"),
          (t.FANCODE = "fancode"),
          (t.CANALPLUS = "canalplus"),
          (t.SHAHID = "shahid"),
          (t.RTL = "rtl"),
          (t.ESPN = "espn"),
          (t.SLING = "sling"),
          (t.VIKI = "viki"),
          (t.SPOTIFY = "spotify"),
          (t.SHOWTIME = "showtime"),
          (t.SHUDDER = "shudder"),
          (t.AMC_PLUS = "amcplus"),
          (t.VIU = "viu"),
          (t.VIDIO = "vidio"),
          (t.FOX_ONE = "foxone"),
          (t.TSN_PLUS = "tsnplus"),
          (t.LEAGUE_PASS = "leaguepass"),
          (t.DAZN = "dazn"),
          (t.VIX = "vix"),
          (t.MIGU = "migu"),
          (t.F1_TV = "f1tv"));
      })(os || (os = {}));
      const rs = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".fox.") && t.pathname.includes("/watch")
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".fox.");
        }
        getVideoId(t) {
          const i = t.pathname,
            n = i.indexOf("/watch/");
          if (-1 !== n) return i.substring(n + 7);
        }
      })(
        [],
        ["content_scripts/foxone/foxone_content_bundled.js"],
        os.FOX_ONE,
        xe.FOX_ONE,
        !1,
        ["browse_scripts/foxone/foxone_browse_bundled.js"],
      );
      Object.freeze(rs);
      const as = rs;
      const us = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("fubo.tv"),
              n = t.pathname.includes("watch");
            return i && n;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".fubo.tv");
        }
        getVideoId(t) {
          return t.search.substring(1);
        }
      })(
        [],
        ["content_scripts/fubo/fubo_content_bundled.js"],
        "fubo",
        xe.FUBO,
        !1,
        ["browse_scripts/fubo/fubo_browse_bundled.js"],
      );
      Object.freeze(us);
      const cs = us;
      const hs = new (class extends z {
        isBrowsing(t) {
          return t.hostname.includes(".funimation.");
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".funimation.") && t.pathname.includes("/v/")
            );
          })(t);
        }
        getVideoId(t) {
          return t.pathname.split("/v/")[1];
        }
      })(
        [],
        ["content_scripts/funimation/funimation_content_bundled.js"],
        "funimation",
        xe.FUNIMATION,
        !1,
        ["browse_scripts/funimation/funimation_browse_bundled.js"],
      );
      Object.freeze(hs);
      const ls = hs;
      function ds(t) {
        const i = t.match(/\/video\/watch\/([^/?#]+)/i);
        return i ? i[1] : void 0;
      }
      const ps = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".hbomax.") &&
              t.pathname.includes("video/watch")
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("play.hbomax.");
        }
        getVideoId(t) {
          return ds(t.pathname);
        }
      })(
        [],
        ["content_scripts/hbo_max/hbo_max_content_bundled.js"],
        "hbomax",
        xe.HBO_MAX,
        !1,
        ["browse_scripts/hbo_max/hbo_max_browse_bundled.js"],
      );
      Object.freeze(ps);
      const fs = ps;
      const Ds = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".hotstar.") && t.pathname.includes("/watch")
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hotstar.");
        }
        getVideoId(t) {
          return t.pathname.substring(4);
        }
      })(
        [],
        ["content_scripts/hotstar/hotstar_content_bundled.js"],
        "hotstar",
        xe.HOTSTAR,
        !1,
        ["browse_scripts/hotstar/hotstar_browse_bundled.js"],
      );
      Object.freeze(Ds);
      const vs = Ds;
      const gs = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".hulu.") &&
              !t.hostname.includes("hulu.jp") &&
              t.pathname.includes("/watch")
            );
          })(t);
        }
        isBrowsing(t) {
          return (
            t.hostname.includes(".hulu.") && !t.hostname.includes("hulu.jp")
          );
        }
        getVideoId(t) {
          const i = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return i && i.length > 0 ? i[1] : void 0;
        }
      })(
        [],
        ["content_scripts/hulu/hulu_content_bundled.js"],
        "hulu",
        xe.HULU,
        !1,
        ["browse_scripts/hulu/hulu_browse_bundled.js"],
      );
      Object.freeze(gs);
      const ms = gs;
      const ws = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes("hulu.jp") && t.pathname.startsWith("/watch/")
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hulu.jp");
        }
        getVideoId(t) {
          const i = t.pathname.split("watch/");
          if (i.length > 1 && i[1].length > 0) return i[1];
        }
      })(
        [],
        ["content_scripts/hulujp/hulujp_content_bundled.js"],
        "hulujp",
        xe.HULU_JP,
        !1,
        ["browse_scripts/hulujp/hulujp_browse_bundled.js"],
      );
      Object.freeze(ws);
      const ys = ws;
      const bs = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes(".jiocinema."),
              n =
                t.pathname.includes("/watch") &&
                t.pathname.includes("/movies/"),
              e = t.pathname.includes("/sports/"),
              s = t.pathname.includes("/tv-shows/"),
              o = t.pathname.includes("/news/");
            return i && (n || e || s || o);
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".jiocinema.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })(
        [],
        ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"],
        "jiocinema",
        xe.JIO_CINEMA,
        !1,
        ["browse_scripts/jio_cinema/jio_cinema_browse_bundled.js"],
      );
      Object.freeze(bs);
      const Cs = bs;
      const Fs = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".max.") && t.pathname.includes("video/watch")
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("play.max.");
        }
        getVideoId(t) {
          return ds(t.pathname);
        }
      })(
        [],
        ["content_scripts/max/max_content_bundled.js"],
        "max",
        xe.MAX,
        !1,
        ["browse_scripts/max/max_browse_bundled.js"],
      );
      Object.freeze(Fs);
      const _s = Fs;
      const Es = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("mubi."),
              n = t.pathname.includes("player");
            return i && n;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("mubi.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
        getWatchUrl(t) {
          return `${window.location.origin}/${t}`;
        }
      })(
        [],
        ["content_scripts/mubi/mubi_content_bundled.js"],
        "mubi",
        xe.MUBI,
        !1,
        ["browse_scripts/mubi/mubi_browse_bundled.js"],
      );
      Object.freeze(Es);
      const xs = Es;
      const ks = new (class extends z {
        isValidUrl(t) {
          return Be(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".netflix.");
        }
        getVideoId(t) {
          const i = t.pathname.match(/^.*\/([0-9]+)\??.*/);
          return i && i.length > 0 ? i[1] : void 0;
        }
      })(
        [],
        ["content_scripts/netflix/netflix_content_bundled.js"],
        "netflix",
        xe.NETFLIX,
        !1,
        ["browse_scripts/netflix/netflix_browse_bundled.js"],
      );
      Object.freeze(ks);
      const As = ks;
      const Ss = new (class extends z {
        isBrowsing(t) {
          return t.hostname.includes(".paramountplus.");
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".paramountplus.") &&
              (t.pathname.includes("/video") ||
                t.pathname.includes("/stream") ||
                t.pathname.includes("/movie") ||
                t.pathname.includes("/live-tv"))
            );
          })(t);
        }
        getVideoId(t) {
          return t.pathname;
        }
      })(
        [],
        ["content_scripts/paramount/paramount_content_bundled.js"],
        "paramount",
        xe.PARAMOUNT,
        !1,
        ["browse_scripts/paramount/paramount_browse_bundled.js"],
      );
      Object.freeze(Ss);
      const Is = Ss;
      const Bs = new (class extends z {
        isBrowsing(t) {
          return t.hostname.includes(".peacocktv.");
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".peacocktv.") &&
              t.pathname.includes("/watch") &&
              t.pathname.includes("/playback")
            );
          })(t);
        }
        getVideoId(t) {
          if (t.pathname.includes("/live/"))
            return t.pathname.split("/").filter(Boolean).pop();
          const i = t.pathname.match(
            /\/watch\/playback\/(?:vod|event|preview|clip)\/([^/?#]+)\/([^/?#]+)/,
          );
          if (i) return `${i[1]}/${i[2]}`;
          const n = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })(
        [],
        ["content_scripts/peacock/peacock_content_bundled.js"],
        "peacock",
        xe.PEACOCK,
        !1,
        ["browse_scripts/peacock/peacock_browse_bundled.js"],
      );
      Object.freeze(Bs);
      const Ts = Bs,
        js = /(?:^|\/)watch\/live-tv(?:\/|$)/i,
        $s = "us";
      const Ps = new (class extends z {
        isBrowsing(t) {
          return t.hostname.includes("pluto.tv");
        }
        isValidUrl(t) {
          return (
            !!(function (t) {
              return (
                !!t.hostname.includes("pluto.tv") &&
                (/\/on-demand\//.test(t.pathname) ||
                  /\/movies\/[^/]+/.test(t.pathname) ||
                  /\/shows\/[^/]+\/episode\/[^/]+/.test(t.pathname) ||
                  /\/watch\/live-tv/.test(t.pathname))
              );
            })(t) &&
            (!!this.isLiveTvPath(t) || !!this.getVideoId(t))
          );
        }
        getVideoId(t) {
          const i = t.pathname.replace(/^\/+|\/+$/g, "");
          if (this.M(i)) {
            const i = this.getLiveOriginId(t);
            if (!i) return;
            return this.buildLiveVideoId(i, this.getLocale(t));
          }
          if (this.O(i) || this.V(i) || this.U(i)) return `${i}#open`;
        }
        getWatchUrl(t) {
          const i = this.getLiveOriginIdFromVideoId(t);
          if (i)
            return `https://www.pluto.tv/${this.getLocaleFromVideoId(t)}/watch/live-tv/#${i}`;
          return `https://www.pluto.tv/${t.replace(/^\/+|\/+$/g, "").replace(/#open$/i, "")}#open`;
        }
        isMoviePath(t) {
          return this.O(t.pathname.replace(/^\/+|\/+$/g, ""));
        }
        isShowEpisodePath(t) {
          return this.V(t.pathname.replace(/^\/+|\/+$/g, ""));
        }
        isLiveTvPath(t) {
          return this.M(t.pathname.replace(/^\/+|\/+$/g, ""));
        }
        getLocale(t) {
          return this.N(t.pathname.replace(/^\/+|\/+$/g, ""));
        }
        getLiveOriginId(t) {
          const i = t.hash.replace(/^#/, "").trim();
          if (i && "open" !== i.toLowerCase()) return i;
        }
        buildLiveVideoId(t, i = $s) {
          return `${i || $s}/watch/live-tv/#${t}`;
        }
        getLiveOriginIdFromVideoId(t) {
          var i;
          const n = t.replace(/^\/+/, "");
          if (/#/.test(n) && /watch\/live-tv/i.test(n)) {
            const t =
              null === (i = n.split("#").pop()) || void 0 === i
                ? void 0
                : i.trim();
            if (t && "open" !== t.toLowerCase()) return t;
          }
          const e = n.match(/live-tv\/([^/#]+)/i);
          return (null == e ? void 0 : e[1])
            ? e[1]
            : /^\d+$/.test(n)
              ? n
              : void 0;
        }
        getLocaleFromVideoId(t) {
          return this.N(t.replace(/^\/+|\/+$/g, ""));
        }
        N(t) {
          const i = t.split("/")[0];
          return i && /^[a-z]{2}(?:-[a-z]{2})?$/i.test(i) && i.length <= 5
            ? i.toLowerCase()
            : $s;
        }
        M(t) {
          return js.test(t);
        }
        U(t) {
          return /(^|\/)on-demand\//.test(t);
        }
        O(t) {
          return /(^|\/)movies\/[^/]+/.test(t);
        }
        V(t) {
          return /(^|\/)shows\/[^/]+\/episode\/[^/]+/.test(t);
        }
      })(
        [],
        ["content_scripts/plutotv/plutotv_content_bundled.js"],
        "plutotv",
        xe.PLUTO_TV,
        !1,
        ["browse_scripts/plutotv/plutotv_browse_bundled.js"],
      );
      Object.freeze(Ps);
      const Ls = Ps;
      const Rs = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("shahid.mbc.net"),
              n = t.pathname.includes(ot.VIDEO_TYPES.SHOW),
              e = t.pathname.includes(ot.VIDEO_TYPES.LIVE_TV);
            return i && (n || e);
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("shahid.mbc.net");
        }
        getVideoId(t) {
          return t.pathname.substring(4);
        }
      })(
        [],
        ["content_scripts/shahid/shahid_content_bundled.js"],
        "shahid",
        xe.SHAHID,
        !1,
        ["browse_scripts/shahid/shahid_browse_bundled.js"],
      );
      Object.freeze(Rs);
      const Ms = Rs;
      const Os = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".shudder.com") &&
              (t.pathname.includes("/video") || t.pathname.includes("/live"))
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".shudder.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })(
        [],
        ["content_scripts/shudder/shudder_content_bundled.js"],
        os.SHUDDER,
        xe.SHUDDER,
        !1,
        ["browse_scripts/shudder/shudder_browse_bundled.js"],
      );
      Object.freeze(Os);
      const Vs = Os;
      const Us = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("watch.sling.com"),
              n = t.pathname.split("/");
            return i && n.length > 0 && "watch" === n[n.length - 1];
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".sling.com");
        }
        getVideoId(t) {
          return t.pathname.slice(1) || void 0;
        }
      })(
        [],
        ["content_scripts/sling/sling_content_bundled.js"],
        "slingtv",
        xe.SLING,
        !1,
        ["browse_scripts/sling/sling_browse_bundled.js"],
      );
      Object.freeze(Us);
      const Ns = Us;
      const Hs = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("sonyliv.com"),
              n = "true" === t.searchParams.get("watch");
            return i && n;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".sonyliv.com");
        }
        getVideoId(t) {
          let i = t.pathname.substring(1);
          return (t.search && (i += t.search), i);
        }
      })(
        [],
        ["content_scripts/sonyliv/sonyliv_content_bundled.js"],
        "sonyliv",
        xe.SONY_LIV,
        !1,
        ["browse_scripts/sonyliv/sonyliv_browse_bundled.js"],
      );
      Object.freeze(Hs);
      const Gs = Hs;
      const zs = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("spotify.com");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".spotify.com");
        }
        getVideoId(t) {
          const i = t.pathname.replace(/^\//, "");
          if (i.startsWith("track/")) {
            const t = i.split("/")[1];
            return t ? `track/${t}` : void 0;
          }
          const n = t.searchParams.get("trackId");
          if (n) return `track/${n}`;
          return i + t.search || void 0;
        }
      })(
        [],
        ["content_scripts/spotify/spotify_content_bundled.js"],
        "spotify",
        xe.SPOTIFY,
        !1,
      );
      Object.freeze(zs);
      const Zs = zs;
      const Ws = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i =
                t.hostname.includes("app.stan.com.au") ||
                t.hostname.includes("play.stan.com.au"),
              n = t.pathname.split("/");
            return i && 4 === n.length && "play" === n[3];
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".stan.com.au");
        }
        getVideoId(t) {
          return t.pathname.split("/")[2];
        }
      })(
        [],
        ["content_scripts/stan/stan_content_bundled.js"],
        "stan",
        xe.STAN,
        !1,
        ["browse_scripts/stan/stan_browse_bundled.js"],
      );
      Object.freeze(Ws);
      const Ys = Ws;
      const Qs = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".starplus.") && t.pathname.includes("/video")
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".starplus.");
        }
        getVideoId(t) {
          const i = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return i && i.length > 0 ? i[1] : void 0;
        }
      })(
        [],
        ["content_scripts/starplus/starplus_content_bundled.js"],
        "starplus",
        xe.STAR_PLUS,
        !1,
      );
      Object.freeze(Qs);
      const Js = Qs;
      const Ks = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = "tsn.ca" === t.hostname || t.hostname.endsWith(".tsn.ca"),
              n = t.pathname.split("/").filter(Boolean),
              e = n.indexOf("video"),
              s = Te(t.pathname),
              o = t.pathname.includes("/event/"),
              r = -1 !== e,
              a = -1 !== e && n.length > e + 1;
            return (
              console.log("checking tsn party url", {
                isTsn: i,
                hasVideoSection: r,
                hasExtraPathAfterVideo: a,
                isLive: s,
                isEvent: o,
              }),
              i && (s || o || (r && a))
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".tsn.");
        }
        getVideoId(t) {
          return t.pathname.slice(1) || void 0;
        }
      })(
        [],
        ["content_scripts/tsnplus/tsnplus_content_bundled.js"],
        "tsnplus",
        xe.TSN_PLUS,
        !1,
        ["browse_scripts/tsnplus/tsnplus_browse_bundled.js"],
      );
      Object.freeze(Ks);
      const qs = Ks;
      const Xs = new (class extends z {
        isBrowsing(t) {
          return t.hostname.includes("tubitv.com");
        }
        isValidUrl(t) {
          return (function (t) {
            const i = t.pathname.includes("live"),
              n =
                ["tv-shows", "movies"].some((i) => t.pathname.includes(i)) &&
                t.pathname.split("/").length > 2;
            return t.hostname.includes("tubitv.com") && (i || n);
          })(t);
        }
        getVideoId(t) {
          return t.pathname.split("/").slice(0, 3).join("/");
        }
      })(
        [],
        ["content_scripts/tubitv/tubitv_content_bundled.js"],
        "tubitv",
        xe.TUBI_TV,
        !1,
        ["browse_scripts/tubitv/tubitv_browse_bundled.js"],
      );
      Object.freeze(Xs);
      const to = Xs;
      const io = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".unext.") &&
              (t.pathname.includes("/play") || t.pathname.includes("/live"))
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".unext.");
        }
        getVideoId(t) {
          const i = t.pathname.split("/").filter(Boolean);
          return "play" === i[0] && i.length >= 3
            ? `${i[1]}/${i[2]}`
            : "live" === i[0] && i.length >= 2
              ? i[1]
              : void 0;
        }
      })(
        [],
        ["content_scripts/unext/unext_content_bundled.js"],
        "unext",
        xe.UNEXT,
        !1,
        ["browse_scripts/unext/unext_browse_bundled.js"],
      );
      Object.freeze(io);
      const no = io;
      const eo = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes(".vidio."),
              n =
                t.pathname.includes("/watch/") || t.pathname.includes("/live/"),
              e = t.pathname.includes("shorts");
            return i && n && !e;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".vidio.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })(
        [],
        ["content_scripts/vidio/vidio_content_bundled.js"],
        "vidio",
        xe.VIDIO,
        !1,
        ["browse_scripts/vidio/vidio_browse_bundled.js"],
      );
      Object.freeze(eo);
      const so = eo;
      const oo = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("viki.com"),
              n = t.pathname.includes("videos");
            return i && n;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".viki.com");
        }
        getVideoId(t) {
          const i = t.pathname.split("/");
          if (3 === i.length && "videos" === i[1]) return i[2];
        }
      })(
        [],
        ["content_scripts/viki/viki_content_bundled.js"],
        "viki",
        xe.VIKI,
        !1,
        ["browse_scripts/viki/viki_browse_bundled.js"],
      );
      Object.freeze(oo);
      const ro = oo;
      const ao = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("viu.com"),
              n = t.pathname.includes(at.VIDEO_TYPES.VIDEO),
              e = t.pathname.includes(at.VIDEO_TYPES.LIVE);
            return i && (n || e);
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".viu.");
        }
        getVideoId(t) {
          var i, n, e;
          return `${null === (i = t.pathname.split("/")) || void 0 === i ? void 0 : i[4]}/${null === (n = t.pathname.split("/")) || void 0 === n ? void 0 : n[5]}/${null === (e = t.pathname.split("/")) || void 0 === e ? void 0 : e[6]}${t.search}`;
        }
      })(
        [],
        ["content_scripts/viu/viu_content_bundled.js"],
        "viu",
        xe.VIU,
        !1,
        ["browse_scripts/viu/viu_browse_bundled.js"],
      );
      Object.freeze(ao);
      const uo = ao;
      const co = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            const i = t.hostname.includes("vix.com"),
              n = Object.values(et.PATH_TYPES).some((i) =>
                t.pathname.includes(i),
              );
            return i && n;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("vix.com");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })(
        [],
        ["content_scripts/vix/vix_content_bundled.js"],
        "vix",
        xe.VIX,
        !1,
        ["browse_scripts/vix/vix_browse_bundled.js"],
      );
      Object.freeze(co);
      const ho = co;
      const lo = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".willow.tv") &&
              t.pathname.split("/").length >= 3
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".willow.tv");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })(
        [],
        ["content_scripts/willow/willow_content_bundled.js"],
        "willow",
        xe.WILLOW,
        !1,
        ["browse_scripts/willow/willow_browse_bundled.js"],
      );
      Object.freeze(lo);
      const po = lo;
      const fo = new (class extends z {
        isBrowsing(t) {
          return !(
            t.href.includes(".hotstar.") ||
            t.href.includes(".fubo.") ||
            t.href.includes("apps.disneyplus.") ||
            !t.href.includes("watch?")
          );
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              !(Ie(t) && !t.pathname.includes("/watch")) &&
              t.hostname.includes(".youtube.")
            );
          })(t);
        }
        getVideoId(t) {
          let i;
          const { pathname: n, searchParams: e, hostname: s } = t;
          if (
            (function (t = new URL(window.location.href)) {
              return Ie(t) && t.pathname.includes("/watch");
            })(t)
          ) {
            const t = n.split("/").filter(Boolean);
            "watch" === t[0] && t[1] && (i = t[1]);
          } else if (n.startsWith("/watch")) i = e.get("v") || void 0;
          else if (n.startsWith("/shorts/")) {
            i = n.split("/").filter(Boolean)[1];
          }
          if (
            !i &&
            (t.href.includes("/watch") || t.href.includes("/shorts/"))
          ) {
            const n =
              /(youtu.*be.*)\/(watch.*?v=|embed\/|v|shorts\/|shorts|)(.*?((?=[&#?])|$))/gm.exec(
                t.href,
              );
            i = null != n && n.length > 3 && n[3] ? n[3] : void 0;
          }
          if (!i) {
            const t = n.split("/").filter(Boolean),
              e = t[t.length - 1];
            n.startsWith("/embed/")
              ? (i = "embed" !== e ? e : void 0)
              : n.startsWith("/v/")
                ? (i = "v" !== e ? e : void 0)
                : "youtu.be" === s && (i = e);
          }
          return i || "browsing";
        }
      })(
        [],
        ["content_scripts/youtube/youtube_content_bundled.js"],
        "youtube",
        xe.YOUTUBE,
        !1,
        [],
      );
      Object.freeze(fo);
      const Do = fo;
      const vo = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".zee5.") && t.pathname.split("/").length >= 5
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".zee5.");
        }
        getVideoId(t) {
          const i = t.pathname.substring(1).split("global/");
          return i[i.length - 1];
        }
      })(
        [],
        ["content_scripts/zee5/zee5_content_bundled.js"],
        "zee5",
        xe.ZEE5,
        !1,
        ["browse_scripts/zee5/zee5_browse_bundled.js"],
      );
      Object.freeze(vo);
      const go = vo;
      const mo = new (class extends z {
        H(t) {
          return "nba.com" === t || t.endsWith(".nba.com");
        }
        G(t) {
          return (
            !!t.startsWith("/watch/feature") ||
            !!t.startsWith("/watch/nba-tv") ||
            t.startsWith("/watch/") ||
            t.startsWith("/game/")
          );
        }
        isBrowsing(t) {
          return t.hostname.includes(".nba.");
        }
        isValidUrl(t) {
          return this.H(t.hostname) && this.G(t.pathname.toLowerCase());
        }
        getVideoId(t) {
          const i = t.pathname.replace(/\/+$/, "").replace(/^\/+/, ""),
            n = i.toLowerCase();
          if (n.startsWith("game/") || n.startsWith("watch/")) return i;
        }
      })(
        [],
        ["content_scripts/leaguepass/leaguepass_content_bundled.js"],
        "leaguepass",
        xe.LEAGUE_PASS,
        !1,
        ["browse_scripts/leaguepass/leaguepass_browse_bundled.js"],
      );
      Object.freeze(mo);
      const wo = mo;
      const yo = new (class extends z {
        isBrowsing(t) {
          return t.hostname.includes(".dazn.");
        }
        isValidUrl(t) {
          return t.hostname.includes("dazn.com");
        }
        getVideoId(t) {
          const i = t.pathname.split("/").filter(Boolean);
          return (/^[a-z]{2}-[A-Z]{2}$/.test(i[0]) && i.shift(), i.join("/"));
        }
      })(
        [],
        ["content_scripts/dazn/dazn_content_bundled.js"],
        "dazn",
        xe.DAZN,
        !1,
        ["browse_scripts/dazn/dazn_browse_bundled.js"],
      );
      Object.freeze(yo);
      const bo = yo;
      function Co(t) {
        return (
          t.hostname.includes("miguvideo.com") &&
          ("/" === t.pathname || "" === t.pathname)
        );
      }
      const Fo = new (class extends z {
        isBrowsing(t) {
          return !Co(t) && t.hostname.includes(".miguvideo.");
        }
        isValidUrl(t) {
          return (
            !(
              !t.hostname.includes("miguvideo.com") ||
              !t.pathname.startsWith("/p/")
            ) || Co(t)
          );
        }
        getVideoId(t) {
          if (Co(t)) return "live/home";
          const i = t.pathname,
            n = i.indexOf("/p/");
          return -1 !== n ? i.substring(n + 3) : void 0;
        }
      })(
        [],
        ["content_scripts/migu/migu_content_bundled.js"],
        "migu",
        xe.MIGU,
        !1,
        ["browse_scripts/migu/migu_browse_bundled.js"],
      );
      Object.freeze(Fo);
      const _o = Fo;
      const Eo = new (class extends z {
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes("f1tv.formula1.com") &&
              t.pathname.includes("/detail/")
            );
          })(t);
        }
        isBrowsing(t) {
          return (
            t.hostname.includes("f1tv.formula1.com") && !this.isValidUrl(t)
          );
        }
        getVideoId(t) {
          const i = t.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
          if (i.startsWith("detail/")) return i;
        }
      })(
        [],
        ["content_scripts/f1_tv/f1_tv_content_bundled.js"],
        os.F1_TV,
        xe.F1_TV,
        !1,
        ["browse_scripts/f1_tv/f1_tv_browse_bundled.js"],
      );
      Object.freeze(Eo);
      const xo = [
          As,
          ms,
          qe,
          fs,
          Ne,
          Do,
          Je,
          ns,
          Is,
          vs,
          Ts,
          Js,
          _s,
          ls,
          Ge,
          Ls,
          Cs,
          to,
          xs,
          Ys,
          Ye,
          Ns,
          ts,
          cs,
          ro,
          Zs,
          ys,
          Gs,
          no,
          po,
          go,
          ss,
          Ze,
          Ms,
          uo,
          so,
          Vs,
          as,
          qs,
          wo,
          bo,
          ho,
          _o,
          Eo,
        ],
        ko = Object.fromEntries(xo.map((t) => [t.name, t]));
      function Ao(t) {
        return ko[t];
      }
      var So,
        Io,
        Bo,
        To = function (t, i, n, e) {
          return new (n || (n = Promise))(function (s, o) {
            function r(t) {
              try {
                u(e.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(e.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var i;
              t.done
                ? s(t.value)
                : ((i = t.value),
                  i instanceof n
                    ? i
                    : new n(function (t) {
                        t(i);
                      })).then(r, a);
            }
            u((e = e.apply(t, i || [])).next());
          });
        };
      class jo {
        constructor(t, i, n) {
          ((this.Z = t), (this.W = i), (this.Y = n), F("Chat forwarder"));
        }
        onMessage(t, i, n) {
          var e, s, r, a, u;
          switch (t.type) {
            case S.LOAD_SESSION: {
              const i = t;
              return (this.J(i.data), !1);
            }
            case I.ON_MESSAGE: {
              const i = t;
              return (this.K(i), this.Y.onChatMessage(), !1);
            }
            case I.ON_BUFFER: {
              const i = t;
              return (this.q(i), !1);
            }
            case I.ON_TYPING: {
              const i = t;
              return (this.X(i), !1);
            }
            case I.ON_WATCHING_ADS: {
              const i = t;
              return (this.tt(i), !1);
            }
            case I.UPDATE_SETTINGS: {
              const i = t;
              return (this.it(i), !1);
            }
            case I.ON_REACTION: {
              const i = t;
              return (this.nt(i), !1);
            }
            case I.ON_GIF: {
              const i = t;
              return (this.et(i), !1);
            }
            case I.USER_LIST: {
              const i = t;
              return (this.st(i), !1);
            }
            case I.ON_WEB_RTC:
              return (this.Z.onWebRTC(t.data), n(), !0);
            case o.SET_CHAT_VISIBLE: {
              const i = t;
              return (this.ot(i.data), n(), !1);
            }
            case o.SET_USER_REACTIONS_DISABLED: {
              const i = t;
              return (
                this.Z.setUserReactionsDisabledStatus(i.data.disabled),
                n(),
                !1
              );
            }
            case B.SIDEBAR_MESSAGING_READY: {
              (console.log("Sidebar Ready"), L("cs_sidebar_messaging_ready"));
              const t =
                null === (e = window.teleparty) || void 0 === e
                  ? void 0
                  : e.tabId;
              return (
                console.log(t),
                this.Z.setChatFrameReady(null != t ? t : 0),
                n(),
                !0
              );
            }
            case B.DISPLAY_MODAL: {
              const i = t.data;
              return (console.log(i), !0);
            }
            case B.SHARE_SHEET: {
              const i = t.data;
              return (
                navigator.share({
                  url: i.url,
                  title: null == i ? void 0 : i.name,
                  text: null == i ? void 0 : i.title,
                }),
                n(),
                !0
              );
            }
            case B.TRACK_DATA: {
              const i = t.data;
              return (
                window.postMessage(
                  { type: "TP_GTM_EVENT", payload: Object.assign({}, i) },
                  "*",
                ),
                n(),
                !0
              );
            }
            case B.ON_UPDATE_SETTINGS: {
              const i = t.data;
              return (this.Z.doUpdateSettings(i), n(), !0);
            }
            case B.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return (n(), !0);
            case B.SET_REACTIONS_ACTIVE: {
              const i = t.data;
              return (this.Z.setReactionsActive(i), n(), !0);
            }
            case B.RESET_VIEW:
              return (this.Z.resetChatWindow(!0), n(), !0);
            case B.ON_FOCUS:
              return (this.Z.onSidebarFocus(), n(), !0);
            case B.PREVIEW_REACTION: {
              const i = t.data;
              return (this.Z.showReaction(i), n(), !0);
            }
            case B.RESET_CHAT_WINDOW:
              return (
                this.Z.setChatVisible(!1),
                this.Z.removeChat(),
                this.Z.reloadChat(),
                this.Z.setChatVisible(!0),
                n(),
                !0
              );
            case "onUpdateSettings": {
              const i = t.data;
              return (this.Z.doUpdateSettings(i), n(), !0);
            }
            case B.RECEIVED_MESSAGE:
              return (
                this.Z.shouldChatBeVisible() ||
                  (!1 !==
                    (null ===
                      (r =
                        null === (s = t.data) || void 0 === s
                          ? void 0
                          : s.originalMessage) || void 0 === r
                      ? void 0
                      : r.isSystemMessage) &&
                    !(null ===
                      (u =
                        null === (a = t.data) || void 0 === a
                          ? void 0
                          : a.originalMessage) || void 0 === u
                      ? void 0
                      : u.gifObject)) ||
                  (this.Z.incrementUnreadMessagesCount(), n()),
                !0
              );
            default:
              return !1;
          }
        }
        teardown() {
          this.Z.teardown();
        }
        ot(i) {
          return To(this, void 0, void 0, function* () {
            const n = this.Z.getSessionId();
            if (n) {
              const i = yield H.getItemsAsync(["REDIRECT_URL"]);
              i.REDIRECT_URL &&
                i.REDIRECT_URL[n] &&
                this.Z.setPartyUrl(i.REDIRECT_URL[n]);
              const s = yield E.m(new G(e, t, { key: "sportLobby" }));
              (null == s ? void 0 : s.result) &&
                s.result.includes(n) &&
                this.Z.setPartyUrl(s.result);
            }
            this.Z.isPartyWindowsActive()
              ? i.visible
                ? yield this.Z.resetChatWindow()
                : yield this.Z.hideChatWindow()
              : (yield this.Z.setChatVisible(i.visible),
                this.Z.fixPageControls());
          });
        }
        J(t) {
          var i;
          return To(this, void 0, void 0, function* () {
            t.isCreate && L("cs_load_session_received");
            const n = t.sessionCallbackData.sessionId,
              e = `${a}/join/${n}`;
            (this.Z.loadInitData(t),
              this.Z.setPartyUrl(e),
              this.Z.setSessionId(n),
              this.Z.setSessionReactionDisabledStatus(
                "true" === t.sessionCallbackData.reactionsDisabled,
              ),
              t.sessionCallbackData.userList &&
                this.Z.loadUserList(t.sessionCallbackData.userList),
              yield this.Z.rt(),
              t.isCreate && L("cs_chat_visible"),
              this.Y.onInitChat(),
              this.Z.setSessionCreated(t.isCreate));
            const s =
              null === (i = Ao(this.W.getStreamingServiceName())) ||
              void 0 === i
                ? void 0
                : i.serverName;
            if (
              (s && this.Z.logSidebarInjected(s),
              this.Z.sendInitDataToSidebar(t),
              t.showReviewMessage && this.Z.addReviewMessage(),
              !t.isCreate)
            )
              for (const i of t.sessionCallbackData.messages)
                "gifObject" in i ? this.Z.addGif(i) : this.Z.addMessage(i, !0);
          });
        }
        K(t) {
          this.Z.addMessage(t.data);
        }
        nt(t) {
          this.Z.showReaction(t.data);
        }
        et(t) {
          this.Z.addGif(t.data);
        }
        q(t) {
          this.Z.onBufferingMessage(t.data);
        }
        X(t) {
          this.Z.onTypingMessage(t.data);
        }
        tt(t) {
          this.Z.onWatchingAdsMessage(t.data);
        }
        it(t) {
          this.Z.onUpdateSettingsMessage(t.data);
        }
        st(t) {
          (this.Z.loadUserList(t.data.userList),
            this.Z.setSocketConnectionId(t.data.socketConnectionId));
        }
      }
      (!(function (t) {
        ((t.PAUSED = "paused"), (t.PLAYING = "playing"));
      })(So || (So = {})),
        (function (t) {
          ((t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready"));
        })(Io || (Io = {})),
        (function (t) {
          ((t.UPDATE_SESSION = "updateSession"),
            (t.NEXT_EPISODE = "nextEpisode"),
            (t.REBOOT_SESSION = "rebootSession"),
            (t.GET_SERVER_TIME = "getServerTime"),
            (t.RELOAD_PARTY = "reloadParty"),
            (t.PARTY_PHASE = "partyPhase"));
        })(Bo || (Bo = {})));
      var $o = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class Po {
        constructor() {
          (this.resetTasks(),
            (this.ut = []),
            (this.ct = 0),
            (this.ht = Promise.resolve()),
            (this.lt = !0));
        }
        createInstance() {
          return new Po();
        }
        pushTask(t, i) {
          if (!this.lt) return;
          const n = { action: t, name: i };
          (0 === this.ct && this.resetTasks(),
            (this.ct = this.ut.push(n)),
            (this.ht = this.ht.then(() => {
              if (this.ut.includes(n) && this.lt)
                return this.dt(n)().then(() => {
                  (this.ut.shift(), (this.ct -= 1));
                });
            })));
        }
        disable() {
          ((this.lt = !1), this.resetTasks());
        }
        enable() {
          this.lt = !0;
        }
        resetTasks() {
          ((this.ht = Promise.resolve()), (this.ut = []), (this.ct = 0));
        }
        dt(t) {
          return function () {
            return $o(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
          };
        }
        get tasksInFlight() {
          return this.ct;
        }
        hasTaskInQueue(t) {
          return this.ut.some((i) => i.name === t);
        }
        removeTask(t) {
          ((this.ut = this.ut.filter((i, n) =>
            i.name === t && 0 == n
              ? (console.error("Cannot filter active task"), !0)
              : i.name !== t,
          )),
            (this.ct = this.ut.length),
            console.log(this.ut));
        }
        getCurrentTasks() {
          return this.ut;
        }
      }
      const Lo = new Po(),
        Ro = 2500,
        Mo = 1e3,
        Oo = 72e5,
        Vo = 12e4;
      class Uo extends k {
        constructor(t, i, n) {
          (super(t, i, A.BROADCAST), (this.data = n));
        }
      }
      const No = 338,
        Ho = chrome.runtime.getURL("img/x-circle.svg"),
        Go = "with-chat",
        zo = "no-scroll",
        Zo = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party",
        },
        Wo = {
          title: "Teleparty | Are you still there?",
          content:
            "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching.",
        },
        Yo = {
          title: "Teleparty | Disconnected from party",
          content:
            "You were removed from the party from inactivity. Click the button below rejoin the party.",
          buttonTitle: "Return to Party",
        },
        Qo = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party",
        },
        Jo = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party",
        };
      function Ko(t, i) {
        qo();
        const n = i
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${Ho}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${Ho}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        (document.body.insertAdjacentHTML("afterbegin", n),
          jQuery("#alert-x-btn").click(() => {
            qo();
          }),
          i &&
            jQuery("#alert-return-btn").click(() => {
              (qo(), (window.location.href = i));
            }));
      }
      function qo() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      class Xo extends $ {
        constructor(t, i, n) {
          (super(t, i, S.TEARDOWN), (this.data = n));
        }
      }
      class tr extends x {
        constructor(t, i, n) {
          (super(t, i, n), (this.type = n));
        }
      }
      class ir extends tr {
        constructor(t, i) {
          super(t, i, Bo.GET_SERVER_TIME);
        }
      }
      class nr extends k {
        constructor(t, i, n) {
          (super(t, i, A.BROADCAST_NEXT_EPISODE), (this.data = n));
        }
      }
      class er extends k {
        constructor(t, i, n) {
          (super(t, i, A.SET_BUFFERING), (this.data = n));
        }
      }
      class sr extends k {
        constructor(t, i, n) {
          (super(t, i, A.SET_WATCHING_ADS), (this.data = n));
        }
      }
      var or;
      !(function (t) {
        ((t.POSTHOG = "posthog"), (t.METIS = "metis"), (t.BOTH = "both"));
      })(or || (or = {}));
      class rr extends $ {
        constructor(t, i, n, e = or.BOTH) {
          (super(t, i, S.LOG_EVENT),
            (this.eventPipelineTarget = or.BOTH),
            (this.data = n),
            (this.sender = t),
            (this.target = i),
            (this.eventPipelineTarget = e));
        }
      }
      const ar = "PING",
        ur = "SYNC",
        cr = "PERIODIC_VALIDATION",
        hr = "BROADCAST",
        lr = "ACTIVATION_CONTINUE_SYNC";
      class dr extends $ {
        constructor(t, i, n) {
          (super(t, i, S.STAY_ALIVE), (this.data = n));
        }
      }
      function pr(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "videoService" in t &&
          "videoId" in t
        );
      }
      var fr = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const Dr = new (class {
        setItemsAsync(t) {
          return fr(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError
                  ? n(
                      new Error(
                        "Failed to write to chrome storage. Please refresh the page and try again",
                      ),
                    )
                  : i();
              });
            });
          });
        }
      })();
      Object.freeze(Dr);
      const vr = Dr;
      var gr = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const mr = new (class {
        getRedirectDataForTabAsync(t) {
          return gr(this, void 0, void 0, function* () {
            const i = (yield H.getItemsAsync([y])).redirectDataMap,
              n = this.ft(t);
            if (i && i[n]) {
              const t = i[n];
              if (this.Dt(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return gr(this, void 0, void 0, function* () {
            const i = (yield H.getItemsAsync([y])).redirectDataMap,
              n = this.ft(t);
            (i && i[n] && delete i[n], yield vr.setItemsAsync({ [y]: i }));
          });
        }
        ft(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, i) {
          return gr(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const n = this.ft(i);
            let e = yield H.getItemsAsync([y]);
            ((e[n] = t), (e = this.vt(e)), yield vr.setItemsAsync({ [y]: e }));
          });
        }
        vt(t) {
          return (function (t, i) {
            const n = {};
            let e;
            for (e in t) t.hasOwnProperty(e) && i(t[e]) && (n[e] = t[e]);
            return n;
          })(t, this.Dt);
        }
        Dt(t) {
          const i = t.date;
          return (
            void 0 !== i &&
            "number" == typeof i &&
            i <= Date.now() &&
            Date.now() - i < 108e5
          );
        }
      })();
      Object.freeze(mr);
      const wr = mr;
      var yr, br, Cr;
      (!(function (t) {
        ((t.EPISODE = "episode"),
          (t.FEATURE = "feature"),
          (t.LIVE = "live"),
          (t.EXTRA = "extra"),
          (t.EVENT = "event"),
          (t.OTHER = "other"),
          (t.SHORTS = "shorts"),
          (t.NONE = "none"),
          (t.MUSIC = "music"));
      })(yr || (yr = {})),
        (function (t) {
          ((t.PLAY = "play"),
            (t.PAUSE = "pause"),
            (t.SEEK = "seek"),
            (t.EPISODE_JUMP = "episodeJump"));
        })(br || (br = {})),
        (function (t) {
          t.PARTY = "party";
        })(Cr || (Cr = {})));
      class Fr extends k {
        constructor(t, i, n, e, s) {
          (super(t, i, A.EVENT_SUCCESS),
            (this.eventSuccess = n),
            (this.extraArgs = s),
            (this.loggerType = e));
        }
      }
      var _r = n(7833),
        Er = n.n(_r);
      class xr {
        constructor() {
          ((this.gt = Er()("teleparty:log")),
            (this.wt = Er()("teleparty:warn")),
            (this.yt = Er()("teleparty:error")),
            (this.gt.log = console.debug.bind(console)),
            (this.wt.log = console.warn.bind(console)),
            (this.yt.log = console.error.bind(console)));
        }
        static get instance() {
          return (xr.bt || (xr.bt = new xr()), xr.bt);
        }
        log(t, ...i) {
          this.gt(`[Teleparty] ${t}`, ...i);
        }
        warn(t, ...i) {
          this.wt(`[Teleparty] ${t}`, ...i);
        }
        error(t, ...i) {
          this.yt(`[Teleparty] ${t}`, ...i);
        }
      }
      const kr = xr.instance;
      var Ar = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class Sr {
        constructor(t, i, n, e) {
          ((this.Ct = []),
            (this.Ft = 0),
            (this._t = 0),
            (this.Et = []),
            (this.xt = !1),
            (this.kt = !1),
            (this.At = !1),
            (this.St = !1),
            (this.It = !1),
            (this.Bt = !1),
            (this.Tt = void 0),
            (this.jt = 0),
            (this.$t = 0),
            (this.Pt = ""),
            (this.Lt = 0),
            (this.Rt = {}),
            (this.Mt = () =>
              Ar(this, void 0, void 0, function* () {
                try {
                  (yield fetch("https://www3.doubleclick.net", {
                    method: "HEAD",
                    mode: "no-cors",
                    cache: "no-store",
                  }),
                    (this.Tt = !1));
                } catch (t) {
                  this.Tt = !0;
                }
              })),
            (this.Ot = () =>
              Ar(this, void 0, void 0, function* () {
                if (!this.Vt || this.Ut || this.xt) return;
                const t = this.W.getVideoElement();
                if (!t) return;
                const i = this.Nt(),
                  n = Math.round(1e3 * (t.currentTime || 0));
                Math.abs(i - n) <= Ro ||
                  (console.log(
                    "Activation continue requested, syncing to current party time",
                    i,
                    n,
                  ),
                  yield this.W.setCurrentTime(i));
              })),
            (this.Ht = (t = !1, i = !1, n = !1, e) =>
              Ar(this, void 0, void 0, function* () {
                if (!n && this.W.shouldSuppressLocalBroadcast()) return;
                if (this.Ut) return;
                if (!this.Gt.shouldSync()) return;
                if (this.At) return void this.forceSync();
                if (!this.It && !i) return;
                const s = yield this.zt(
                  n ? { sessionMetadataRefresh: !0 } : void 0,
                );
                n &&
                  Object.keys(this.Rt).length > 0 &&
                  (s.data.providerOffsets = Object.assign({}, this.Rt));
                const o = n || (yield this.Zt(s.data, i, e)),
                  r = yield this.Wt(s.data, i);
                if (o) {
                  if (
                    (this.Yt === xe.ESPN || this.Yt === xe.TSN_PLUS) &&
                    this.Qt(s.data, r)
                  )
                    return;
                  (yield this.Jt(s, n),
                    r.length > 0 && this.Kt.logInteraction(r[0]));
                } else if (t) {
                  if (yield this.qt(i)) {
                    const t = yield this.zt(),
                      n = yield this.Wt(t.data, i);
                    if (
                      (this.Yt === xe.ESPN || this.Yt === xe.TSN_PLUS) &&
                      this.Qt(t.data, n)
                    )
                      return;
                    yield this.Jt(t);
                  }
                }
              })),
            (this.Xt = () =>
              Ar(this, void 0, void 0, function* () {
                if (
                  (this.ti == So.PAUSED &&
                    this.ii &&
                    (clearInterval(this.ii),
                    (this.ii = setInterval(() => {
                      this.ni();
                    }, 6e4))),
                  this.ei())
                )
                  return;
                if ((yield this.W.waitVideoDoneLoadingAsync(), this.ei()))
                  return;
                const t = yield this.W.getStateAsync();
                yield this.si(t);
                const i = yield this.W.getStateAsync();
                (yield this.oi(i), !1 === this.It && (this.It = !0));
              })),
            (this.W = t),
            (this.Z = i),
            (this.Gt = n),
            (this.Kt = e),
            this.Gt.setMessageForwarder(this),
            (this.ri = 0),
            (this.Ut = !1),
            (this.ti = So.PAUSED),
            (this.ai = 0),
            (this.ui = 0),
            (this.ci = 0),
            (this.Yt = this.W.getStreamingServiceName()),
            F("Video forwarder"),
            this.Mt());
        }
        onMessage(t, i, n) {
          switch (t.type) {
            case S.GET_VIDEO_DATA:
              return (this.hi(n), !0);
            case S.LOAD_SESSION: {
              const i = t;
              return (this.li(i.data), !1);
            }
            case Bo.UPDATE_SESSION: {
              const i = t;
              return (this.di(i.data), !1);
            }
            case Bo.NEXT_EPISODE: {
              const i = t;
              return (
                !0 === i.data.isNextEpisode ? this.pi(i.data) : this.fi(i.data),
                !1
              );
            }
            case Bo.REBOOT_SESSION: {
              const i = t;
              return (this.Di(i.data, n), !0);
            }
            case Bo.RELOAD_PARTY: {
              const i = t.data;
              return (
                ((null == i ? void 0 : i.source) === Sr.SIDEBAR_RELOAD_SOURCE
                  ? this.gi()
                  : this.reloadNextEpisode()
                )
                  .then(() => {
                    (console.log("Party Reloaded"), n());
                  })
                  .catch((t) => {
                    (console.log("Error reloading party", t),
                      n({ error: String(t) }));
                  }),
                !0
              );
            }
            case I.ON_WATCHING_ADS: {
              const i = t;
              return (this.tt(i), !1);
            }
            case B.GO_NEXT_EPISODE:
              return (this.W.triggerNextEpisodeClick(), !0);
            default:
              return !1;
          }
        }
        mi() {
          (document.documentElement.setAttribute(
            Sr.ACTIVATION_EXPECTED_STATE_ATTR,
            this.ti.toString(),
          ),
            document.documentElement.setAttribute(
              Sr.ACTIVATION_EXPECTED_SERVICE_ATTR,
              this.Yt,
            ));
        }
        wi() {
          const t = document.documentElement.getAttribute(
            Sr.ACTIVATION_EXPECTED_SERVICE_ATTR,
          );
          (t && t !== this.Yt) ||
            (document.documentElement.removeAttribute(
              Sr.ACTIVATION_EXPECTED_STATE_ATTR,
            ),
            document.documentElement.removeAttribute(
              Sr.ACTIVATION_EXPECTED_SERVICE_ATTR,
            ));
        }
        tt(t) {
          (t.data.anyoneWatchingAds &&
            !this.kt &&
            (Lo.pushTask(this.W.doAdCheck.bind(this.W), "doAdCheck"),
            this.W.hasAdBreakWithinMs(Sr.UPCOMING_AD_PLAYTHROUGH_MS)
              ? this.W.play()
              : this.forceSync()),
            (this.kt = t.data.anyoneWatchingAds));
        }
        yi() {
          var i;
          return Ar(this, void 0, void 0, function* () {
            const n = yield this.W.getVideoDataAsync(),
              s = yield this.W.getStateAsync(),
              o =
                (s.playbackState.toString() === this.ti.toString() &&
                  Math.abs(s.playbackPositionMilliseconds - this.Nt()) < Ro &&
                  this.bi === n.videoId) ||
                (s.playbackState !== Io.PLAYING &&
                  s.playbackState !== Io.PAUSED) ||
                this.Ut,
              r =
                null === (i = Ao(this.W.getStreamingServiceName())) ||
                void 0 === i
                  ? void 0
                  : i.serverName;
            r &&
              E.m(
                new Fr(
                  e,
                  t,
                  {
                    event_name: "periodic_video_state_checked",
                    service: r,
                    video_data: n,
                    success: o,
                  },
                  Cr.PARTY,
                ),
              );
          });
        }
        getOthersWatchingAds() {
          return this.kt;
        }
        get videoId() {
          return this.bi;
        }
        set videoId(t) {
          this.bi = t;
        }
        sendTeardown(i) {
          const n = new Xo(e, t, i);
          E.m(n);
        }
        teardown() {
          ((this.W.scheduledPartyPlaybackOnly = !1),
            this.Vt && this.W.pause(),
            (this.Vt = void 0),
            (this.Bt = !1),
            this.wi(),
            this.Ci && clearInterval(this.Ci),
            this.ii && clearInterval(this.ii),
            this.Fi(),
            Lo.disable(),
            this.Gt.stopListening());
        }
        isInParty() {
          return null != this.Vt;
        }
        isScheduledPartyPlaybackOnly() {
          return this.W.scheduledPartyPlaybackOnly;
        }
        Di(i, n) {
          (Lo.resetTasks(),
            this.bi == i.videoId && this.di(i),
            n(this.bi == i.videoId));
          const s = new rr(e, t, { eventType: "reboot", sessionId: this.Vt });
          E.m(s);
        }
        tryBroadcast(t = !1, i) {
          if (this.xt) return;
          if (this.At) return void this.forceSync();
          const n = this.W.shouldSuppressLocalBroadcast(),
            e = this.Ut,
            s = !!this.Vt,
            o = Lo.hasTaskInQueue(hr);
          n || e || !s || o || Lo.pushTask(() => this.Ht(t, !1, !1, i), hr);
        }
        setBuffering(i) {
          if (this.Vt) {
            const n = new er(e, t, { buffering: i });
            E.m(n);
          }
        }
        isWatchingAds() {
          return this.xt;
        }
        setWatchingAds(i, n) {
          if (this.Vt) {
            this.xt = i;
            const s = new sr(e, t, { watchingAds: i, adDurationLeft: n });
            E.m(s);
          }
        }
        clearAdPresenceState() {
          ((this.kt = !1), this.xt ? this.setWatchingAds(!1) : (this.xt = !1));
        }
        sendOtherEpisodeAsync(t, i) {
          return Ar(this, void 0, void 0, function* () {
            return this._i(t, !1, i);
          });
        }
        sendNextEpisodeAsync(t, i) {
          return Ar(this, void 0, void 0, function* () {
            return this._i(t, !0, i);
          });
        }
        _i(i, n, s) {
          return Ar(this, void 0, void 0, function* () {
            if (this.Vt && i !== this.bi && i !== this.Ei) {
              ((this.Ei = i),
                (this.Ut = !0),
                this.Kt.logInteraction(br.EPISODE_JUMP));
              const o = { nextEpisode: i, isNextEpisode: n };
              (this.Yt === xe.YOUTUBE &&
                window.location.href.includes("/shorts/") &&
                (o.videoType = yr.SHORTS),
                void 0 !== s && (o.extraInfo = s));
              const r = new nr(e, t, o),
                a = yield E.m(r);
              a && "Locked Session" === a.errorMessage && (yield this.xi(i));
            }
          });
        }
        xi(t) {
          return Ar(this, void 0, void 0, function* () {
            try {
              (yield $e(() => t == this.bi, 1e4)(), (this.Ut = !1));
            } catch (t) {
              this.ki(
                "An error has occured when trying to wait till the episode changed videos",
              );
              const i = { showAlert: !0, alertModal: Zo };
              this.sendTeardown(i);
            }
          });
        }
        Wt(i, n, s = !1) {
          return Ar(this, void 0, void 0, function* () {
            const s = [];
            if (
              null == i.lastKnownTime ||
              null == i.lastKnownTimeUpdatedAt ||
              null == i.state
            )
              return s;
            if (n && i.state === So.PAUSED && i.lastKnownTime < Mo) return s;
            const o = Math.abs(i.lastKnownTime - this.Nt());
            if (i.state == this.ti && o < Mo) return s;
            if (o >= Mo && !this.W.scheduledPartyPlaybackOnly) {
              s.push(br.SEEK);
              const i = new rr(e, t, {
                name: "video_seek",
                action: { source: "self" },
              });
              (E.m(i), this.Yt == xe.PARAMOUNT && (yield je(200)()));
            }
            return (
              i.state != this.ti &&
                (i.state === So.PLAYING ? s.push(br.PLAY) : s.push(br.PAUSE)),
              s
            );
          });
        }
        Zt(t, i, n) {
          return Ar(this, void 0, void 0, function* () {
            const e = yield this.Wt(t, i, !0);
            return n ? n.some((t) => e.includes(t)) : e.length > 0;
          });
        }
        zt(i) {
          return Ar(this, void 0, void 0, function* () {
            const n = yield this.W.getUpdateSessionDataAsync(i);
            ((n.lastKnownTimeUpdatedAt -= this._t),
              (n.lastKnownTime = Math.round(n.lastKnownTime)));
            return new Uo(e, t, n);
          });
        }
        forceSync() {
          Lo.pushTask(this.Xt, ur);
        }
        consumePendingCreatePlaybackBroadcast() {
          return !!this.Bt && ((this.Bt = !1), !0);
        }
        syncToCurrentPartyTimeAfterActivation() {
          Lo.hasTaskInQueue(lr) || Lo.pushTask(this.Ot, lr);
        }
        fi(t) {
          return Ar(this, void 0, void 0, function* () {
            ((this.ri = Date.now()),
              kr.log(
                "Received other episode message, current task manager tasks are",
                Lo.getCurrentTasks(),
              ),
              Lo.pushTask(() => this.Ai(t, !1), "onOtherEpisodeAsync"));
          });
        }
        pi(t) {
          return Ar(this, void 0, void 0, function* () {
            ((this.ri = Date.now()),
              kr.log(
                "Received next episode message, current task manager tasks are",
                Lo.getCurrentTasks(),
              ),
              Lo.pushTask(() => this.Ai(t, !0), "onNextEpisodeAsync"));
          });
        }
        Ai(i, n) {
          return Ar(this, void 0, void 0, function* () {
            try {
              (kr.log(
                n
                  ? "Starting next episode flow"
                  : "Starting other episode flow",
              ),
                (this.Ut = !0),
                this.clearAdPresenceState(),
                (this.bi = i.videoId),
                this.Kt.logInteraction(br.EPISODE_JUMP, !0),
                n
                  ? yield this.W.jumpToNextEpisode(i)
                  : yield this.W.jumpToOtherEpisode(i),
                yield this.Gt.loadNewVideoAsync(i.videoId),
                F("After load new video"),
                this.Gt.reloadListeners(),
                yield this.W.waitVideoDoneLoadingAsync(),
                yield this.Si(i.videoId, n ? "next_episode" : "other_episode"),
                this.ci < this.ri &&
                  ((this.ti = So.PAUSED),
                  (this.ai = 0),
                  (this.ui = Date.now()),
                  F("Sending broadcast after episode change"),
                  Lo.pushTask(
                    () =>
                      this.Ht(
                        !0,
                        !0,
                        this.W.shouldForceEpisodeCompletionBroadcast(),
                      ),
                    hr,
                  ),
                  Lo.removeTask(ur)),
                (this.Ut = !1),
                this.clearAdPresenceState());
              const s = new rr(e, t, {
                name: "video_start",
                action: { description: "video session has begun" },
              });
              E.m(s);
            } catch (t) {
              (this.ki("Error loading new video."),
                console.log("Error was", t),
                (this.Ut = !1),
                this.clearAdPresenceState(),
                yield this.reloadNextEpisode());
            }
          });
        }
        persistExtension(t, i) {
          var n, e;
          return Ar(this, void 0, void 0, function* () {
            console.log("persist here");
            const s =
              null !==
                (e =
                  null === (n = window.teleparty) || void 0 === n
                    ? void 0
                    : n.tabId) && void 0 !== e
                ? e
                : 0;
            yield this.Ii(s, t);
            const o = yield this.Bi(i),
              r = null != i ? i : this.Ti(o);
            yield this.ji(o, s, r);
          });
        }
        Bi(t) {
          return Ar(this, void 0, void 0, function* () {
            if (!t || !this.Vt) return this.$i();
            switch (this.Yt) {
              case xe.DISNEY_PLUS:
              case xe.CANALPLUS: {
                const i = Ao(this.Yt);
                if (!i) break;
                return {
                  sessionId: this.Vt,
                  videoId: this.bi,
                  videoService: i.serverName,
                  serviceDomain: new URL(t).hostname,
                  selectedProvider: this.Pi,
                };
              }
            }
            return this.$i();
          });
        }
        reloadNextEpisode() {
          var t, i;
          return Ar(this, void 0, void 0, function* () {
            try {
              kr.log("Attempting to reload next episode");
              const n = yield this.$i(),
                e = this.Li(this.Ri(n)),
                s =
                  null !==
                    (i =
                      null === (t = window.teleparty) || void 0 === t
                        ? void 0
                        : t.tabId) && void 0 !== i
                    ? i
                    : 0;
              if (
                (yield this.Mi(n, s, e, !1),
                kr.log("Redirect URL is", e),
                (function (t, i) {
                  if (t === i) return !0;
                  try {
                    const n = new URL(t),
                      e = new URL(i);
                    if (n.origin !== e.origin) return !1;
                    const s = (t) => {
                      const i = t.replace(/\/+$/, "");
                      return "" === i ? "/" : i;
                    };
                    if (s(n.pathname) !== s(e.pathname)) return !1;
                    const o = new URLSearchParams(e.search);
                    for (const [t, i] of o.entries())
                      if (n.searchParams.get(t) !== i) return !1;
                    return !0;
                  } catch (t) {
                    return !1;
                  }
                })(window.location.href, e))
              ) {
                const t = pr(n) ? n.videoService.toLowerCase() : "";
                if (
                  "tsnplus" === t ||
                  Te(new URL(window.location.href).pathname)
                )
                  return void kr.log(
                    "Already on TSN redirect URL, skipping navigation",
                  );
              }
              this.Oi(e);
            } catch (t) {
              (kr.error("Error reloading next episode:", t),
                this.Vi("Failed to fix next episode."));
            }
          });
        }
        gi() {
          var t, i;
          return Ar(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party from sidebar");
              const n = yield this.$i(),
                e = this.Ti(n),
                s =
                  null !==
                    (i =
                      null === (t = window.teleparty) || void 0 === t
                        ? void 0
                        : t.tabId) && void 0 !== i
                    ? i
                    : 0;
              (yield this.Mi(n, s, e, !1),
                console.log("Sidebar reload URL is", e),
                this.Oi(e));
            } catch (t) {
              (console.log("Error reloading party from sidebar", t),
                this.Vi("Failed to reload party from sidebar."));
            }
          });
        }
        Ti(t) {
          try {
            return this.Li(this.Ri(t));
          } catch (t) {
            return (
              console.log(
                "Unable to parse reload redirect URL. Reloading current page instead.",
                t,
              ),
              window.location.href
            );
          }
        }
        Mi(t, i, n, e) {
          return Ar(this, void 0, void 0, function* () {
            (yield this.Ii(i, e), yield this.ji(t, i, n));
          });
        }
        Ii(i, n) {
          return Ar(this, void 0, void 0, function* () {
            const s = new dr(e, t, { tabId: i, persist: n });
            yield E.m(s);
          });
        }
        ji(t, i, n) {
          return Ar(this, void 0, void 0, function* () {
            yield wr.storeRedirectDataForTabAsync(this.Ui(t, n), i);
          });
        }
        Ui(t, i) {
          var n, e, s, o;
          return Object.assign(Object.assign({}, t), {
            videoId: this.bi || t.videoId || "",
            sessionId:
              null !==
                (e =
                  null !== (n = t.sessionId) && void 0 !== n ? n : this.Vt) &&
              void 0 !== e
                ? e
                : "",
            service:
              null !==
                (o =
                  null !== (s = t.service) && void 0 !== s
                    ? s
                    : t.videoService) && void 0 !== o
                ? o
                : "",
            date: Date.now(),
            partyUrl: i,
          });
        }
        Li(t) {
          const i = new URL(t, window.location.href);
          if ("http:" !== i.protocol && "https:" !== i.protocol)
            throw new Error("Invalid reload redirect protocol");
          return i.toString();
        }
        Oi(t) {
          window.location.href !== t
            ? (window.location.href = t)
            : window.location.reload();
        }
        Vi(i) {
          this.ki(i);
          const n = new Xo(e, t, { showAlert: !0, alertModal: Qo });
          E.m(n);
        }
        $i() {
          return Ar(this, void 0, void 0, function* () {
            return new Promise((t, i) => {
              const n = new XMLHttpRequest();
              ((n.timeout = 1e4),
                (n.ontimeout = () => {
                  i(new Error());
                }),
                (n.onreadystatechange = () => {
                  if (n.readyState === XMLHttpRequest.DONE)
                    try {
                      const i = JSON.parse(n.responseText);
                      t(i);
                    } catch (t) {
                      (i(t),
                        this.ki(
                          "Unable to get video endpoint data to reload session",
                        ));
                    }
                }),
                n.open("GET", `${r}/video?session=` + this.Vt, !0),
                n.send(null));
            });
          });
        }
        Ri(t) {
          var i, n;
          if (pr(t)) {
            switch (t.videoService.toLowerCase().split("#")[0].trim()) {
              case "crunchyroll":
                return `https://www.crunchyroll.com/watch/${t.videoId}`;
              case "netflix":
                return `https://www.netflix.com/watch/${t.videoId}`;
              case "hulu":
                return `https://www.hulu.com/watch/${null !== (n = null === (i = t.videoId.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i)) || void 0 === i ? void 0 : i[1]) && void 0 !== n ? n : t.videoId}`;
              case "disney":
                return `https://www.disneyplus.com/${"other" === t.videoType ? "video" : "play"}/${t.videoId}`;
              case "starplus":
                return `https://www.starplus.com/video/${t.videoId}`;
              case "amazon": {
                const i = t.serviceDomain;
                if (i)
                  return `https://${i}/gp/video/detail/${t.videoId}?autoplay=1`;
                throw new Error("No service Domain");
              }
              case "hbomax":
                return `https://play.hbomax.com/video/watch/${t.videoId}`;
              case "youtube": {
                const i = t.videoId,
                  n = t.serviceDomain;
                if (n) {
                  if ("browsing" === i) return window.location.href;
                  if (i && "browsing" !== i) {
                    if (t.videoType === yr.SHORTS)
                      return `https://${n}/shorts/${i}`;
                    const e = new URL(`https://${n}/watch`);
                    return (e.searchParams.set("v", i), e.toString());
                  }
                  return `https://${n}/`;
                }
                throw new Error("No service Domain");
              }
              case "espn":
                return `https://www.espn.com/watch/player/_/id/${t.videoId}`;
              case "paramount":
                return `https://www.paramountplus.com${t.videoId}`;
              case "hotstar":
                return `https://www.hotstar.com/${t.videoId}`;
              case "peacock": {
                let i = "";
                return (
                  (i =
                    "live" === t.videoType
                      ? "live"
                      : "event" === t.videoType
                        ? "event"
                        : "vod"),
                  `https://www.peacocktv.com/watch/playback/${i}/${t.videoId}${"paused" === t.state ? "?paused=true" : ""}`
                );
              }
              case "disneymena":
                return `https://apps.disneyplus.com/${t.videoId}/watch`;
              case "appletv":
                return (function (t) {
                  const i = /^https?:\/\//i.test(t)
                    ? new URL(t)
                    : new URL(`https://tv.apple.com/${t.replace(/^\/+/, "")}`);
                  return (i.searchParams.set("action", "play"), i.toString());
                })(t.videoId);
              case "max":
                return `https://play.max.com/video/watch/${t.videoId}`;
              case "plutotv":
                return Ls.getWatchUrl(t.videoId);
              case "tsnplus":
                return t.videoId.startsWith("live::")
                  ? `https://www.tsn.ca/live/?axisId=${t.videoId.split("live::")[1]}`
                  : `https://www.tsn.ca/${t.videoId}`;
              case "jiocinema":
                return `https://www.jiocinema.com/${t.videoId}`;
              case "tubitv":
                return `https://tubitv.com${t.videoId}`;
              case "funimation":
                return `https://www.funimation.com/v/${t.videoId}`;
              case "crave": {
                const i = t.videoId;
                if (null == i ? void 0 : i.startsWith("live/")) {
                  return `https://www.crave.ca/en/live?channel=${i.slice(5)}`;
                }
                return `https://www.crave.ca/${i}`;
              }
              case "mubi":
                return `https://mubi.com/${t.videoId}`;
              case "stan":
                return `https://play.stan.com.au/programs/${t.videoId}/play`;
              case "slingtv":
                return `https://watch.sling.com/${t.videoId}`;
              case "fubo":
                return `https://www.fubo.tv/p/watch?${t.videoId}`;
              case "viki":
                return `https://www.viki.com/videos/${t.videoId}`;
              case "spotify":
                return `https://open.spotify.com/${t.videoId}`;
              case "zee5":
                return `https://www.zee5.com/${t.videoId}`;
              case "sonyliv":
                return `https://www.sonyliv.com/${t.videoId}`;
              case "unext":
                return `https://video.unext.jp/${t.videoType === yr.LIVE ? "live" : "play"}/${t.videoId}`;
              case "hulujp":
                return `https://www.hulu.jp/watch/${t.videoId}`;
              case "dazn":
                return `https://www.dazn.com/${t.videoId}`;
              case "canalplus":
                return `https://${t.serviceDomain || "www.canalplus.com"}/${t.videoId}`;
              case "willow":
                return `https://www.willow.tv/${t.videoId}`;
              case "fancode":
                return `https://www.fancode.com/${t.videoId}`;
              case "shahid":
                return `https://shahid.mbc.net/${t.videoId}`;
              case "shudder":
                return `https://watch.shudder.com/${t.videoId}`;
              case "viu":
                return this.Ni(t.videoId);
              case "vidio":
                return `https://www.vidio.com/${t.videoId}`;
              case "migu":
                return `https://www.miguvideo.com/p/${t.videoId}`;
              case "f1tv":
                return this.Hi(t.videoId);
              case "foxone":
                return `https://www.fox.com/watch/${t.videoId}`;
              case "leaguepass":
                return `https://www.nba.com/${t.videoId}`;
              case "vix":
                return `https://vix.com/${t.videoId}`;
              default:
                throw new Error();
            }
          }
          throw new Error("Invalid Session Response");
        }
        Hi(t) {
          const i = /^https?:\/\//i.test(t)
            ? new URL(t)
            : new URL(`https://f1tv.formula1.com/${t.replace(/^\/+/, "")}`);
          return (i.searchParams.set("action", "play"), i.toString());
        }
        Ni(t) {
          if (/^https?:\/\//i.test(t)) return t;
          const i = t.replace(/^\/+/, "");
          return `https://www.viu.com/${i.startsWith("ott/") ? i : `ott/sg1/en/${i}`}`;
        }
        di(t) {
          ((this.ci = Date.now()),
            Lo.pushTask(this.Gi(t).bind(this), "Update Session Data"));
        }
        Gi(i) {
          if (i.state === So.PAUSED && this.ti === So.PLAYING) {
            this.ni();
            const i = new rr(e, t, {
              name: "video_pause",
              action: {
                description: "video was played from pause",
                reason: "Video was played",
              },
            });
            E.m(i);
          } else if (i.state === So.PLAYING && this.ti === So.PAUSED) {
            const i = new rr(e, t, {
              name: "video_resume",
              action: {
                description: "video was played from pause",
                reason: "Video was played",
              },
            });
            (E.m(i), this.ni());
          }
          return (
            (this.ti = i.state),
            (this.ai = i.lastKnownTime),
            (this.ui = i.lastKnownTimeUpdatedAt),
            i.providerOffsets && (this.Rt = i.providerOffsets),
            this.mi(),
            this.Xt
          );
        }
        hi(t) {
          var i;
          return Ar(this, void 0, void 0, function* () {
            try {
              const n = yield this.W.getVideoDataAsync();
              (null !== (i = n.serviceDomain) && void 0 !== i) ||
                (n.serviceDomain = window.location.hostname);
              const e = yield this.W.getStateAsync();
              ((n.is_player_fullscreen =
                null != document.fullscreenElement ||
                document.webkitIsFullScreen),
                (n.is_chat_visible = this.Z.getChatVisible()),
                (n.is_adblock_enabled = this.Tt),
                (n.video_ts_ms = Math.round(e.playbackPositionMilliseconds)),
                (n.party_ts_ms = this.ai),
                (n.service = this.W.getInternalStreamingServiceName()),
                t(n));
            } catch (i) {
              (console.error(i), t({ error: i }));
            }
          });
        }
        ki(i) {
          const n = new rr(e, t, {
            name: "video_error",
            action: {
              description: i,
              reason: "An errors has occurred during video playback",
            },
          });
          E.m(n);
        }
        Qt(t, i) {
          const n = i[0] || (t.state === So.PLAYING ? br.PLAY : br.PAUSE),
            e = n === br.SEEK ? 500 : 1e3,
            s = `${n}:${t.state}:${Math.round(t.lastKnownTime / e)}`,
            o = Date.now();
          return (
            (this.Pt === s && o - this.Lt < 500) ||
            ((this.Pt = s), (this.Lt = o), !1)
          );
        }
        qt(t) {
          return Ar(this, void 0, void 0, function* () {
            return new Promise((i) => {
              const n = performance.now(),
                e = () =>
                  Ar(this, void 0, void 0, function* () {
                    if (performance.now() - n >= 2500) i(!1);
                    else {
                      const n = yield this.zt();
                      (yield this.Zt(n.data, t))
                        ? i(!0)
                        : setTimeout(() => {
                            e();
                          }, 50);
                    }
                  });
              e();
            });
          });
        }
        Jt(t, i = !1) {
          return Ar(this, void 0, void 0, function* () {
            if (
              this.Ut ||
              this.xt ||
              (!i && this.W.shouldSuppressLocalBroadcast())
            )
              return;
            const n = this.ti;
            if (t.data.bufferingState) {
              ((t.data.state = So.PAUSED),
                yield E.m(t, 1e3),
                yield this.W.waitVideoDoneLoadingAsync());
              const i = yield this.zt();
              ((i.data.bufferingState = !0),
                n == So.PLAYING && (i.data.state = So.PLAYING),
                yield E.m(i, 1e3),
                (this.ti = i.data.state),
                (this.ai = i.data.lastKnownTime),
                (this.ui = Date.now()));
            } else
              (yield E.m(t, 1e3),
                (this.ti = t.data.state),
                (this.ai = t.data.lastKnownTime),
                (this.ui = Date.now()));
          });
        }
        li(i) {
          var n, s, o;
          return Ar(this, void 0, void 0, function* () {
            (Lo.enable(), Lo.resetTasks());
            const r = i.sessionCallbackData;
            ((this.W.scheduledPartyPlaybackOnly =
              "scheduled" === r.sessionType ||
              ("crave" ===
                (null === (n = r.videoService) || void 0 === n
                  ? void 0
                  : n.toLowerCase()) &&
                (null !== (s = r.videoId) && void 0 !== s ? s : "").startsWith(
                  "live/",
                ))),
              (this.Vt = r.sessionId),
              (this.ti = r.state),
              (this.ai = Number(r.lastKnownTime)),
              (this.ui = Number(r.lastKnownTimeUpdatedAt)),
              (this.bi = r.videoId),
              (this.kt = !1),
              this.mi(),
              "true" == r.controlLock && (this.At = !0),
              "true" == r.reactionsDisabled && (this.St = !0),
              (this.Pi = r.selectedProvider),
              (this.zi = r.defaultProvider),
              (this.Rt =
                null !== (o = r.providerOffsets) && void 0 !== o ? o : {}),
              this.Zi(),
              i.isCreate
                ? ((this.It = !0),
                  (this.Bt = !0),
                  Lo.pushTask(this.Ht.bind(this), hr))
                : "scheduled" === r.sessionType
                  ? ((this.It = !0),
                    Lo.pushTask(() => this.Ht(!1, !1, !0), hr),
                    this.forceSync())
                  : this.forceSync());
            const a = new rr(e, t, {
              name: "video_start",
              action: { description: "video session has begun" },
            });
            (E.m(a),
              this.Gt.startListening(),
              this.Wi(),
              i.isCreate || this.Yi(r.videoId, "join"));
          });
        }
        Yi(t, i) {
          return Ar(this, void 0, void 0, function* () {
            (yield this.W.waitVideoDoneLoadingAsync().catch(() => {}),
              yield this.Si(t, i));
          });
        }
        Si(i, n) {
          var s, o;
          return Ar(this, void 0, void 0, function* () {
            const r =
              null === (s = Ao(this.W.getStreamingServiceName())) ||
              void 0 === s
                ? void 0
                : s.serverName;
            if (!r) return;
            let a;
            try {
              a = yield this.W.getVideoDataAsync();
            } catch (t) {
              return;
            }
            const u = (null == i ? void 0 : i.trim()) || void 0,
              c =
                (null === (o = a.videoId) || void 0 === o
                  ? void 0
                  : o.trim()) || void 0;
            let h;
            (u
              ? c
                ? u !== c && (h = "mismatch")
                : (h = "actual_video_id_missing")
              : (h = "expected_video_id_missing"),
              E.m(
                new Fr(
                  e,
                  t,
                  {
                    event_name: "video_id_correct",
                    service: r,
                    video_data: a,
                    success: !h,
                    extra_info: Object.assign(
                      {
                        trigger: n,
                        expected_video_id: null != u ? u : null,
                        actual_video_id: null != c ? c : null,
                      },
                      h ? { failure_reason: h } : {},
                    ),
                  },
                  Cr.PARTY,
                ),
              ));
          });
        }
        Qi() {
          return new Promise((i) => {
            const n = new ir(e, t),
              s = Date.now();
            (E.m(n)
              .then((t) => {
                const i = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (Pe(this.Ct, i - s, 5),
                    (this.Ft = Le(this.Ct)),
                    Pe(this.Et, i - Math.round(this.Ft / 2) - n, 5),
                    (this._t = Le(this.Et)));
                }
              })
              .catch((t) => {
                (F(t), this.ki(t));
              }),
              i());
          });
        }
        ni() {
          const i = new rr(e, t, {
            name: "video_heartbeat",
            action: {
              description: "new heartbeat",
              reason: "Heartbeat session was due",
            },
          });
          E.m(i);
        }
        Wi() {
          (this.Ci && clearInterval(this.Ci),
            this.ii && clearInterval(this.ii),
            (this.Ci = setInterval(() => {
              Lo.hasTaskInQueue(ur) || Lo.pushTask(this.Xt, ur);
            }, 5e3)),
            (this.ii = setInterval(() => {
              this.ni();
            }, 6e4)),
            (this.Ji = setInterval(() => {
              Lo.hasTaskInQueue(ar) || Lo.pushTask(this.Qi.bind(this), ar);
            }, 12500)),
            (this.Ki = setInterval(() => {
              Lo.hasTaskInQueue(cr) || Lo.pushTask(this.yi.bind(this), cr);
            }, 3e5)),
            this.Qi());
        }
        ei() {
          return (
            !this.Vt ||
            this.W.uiEventsHappening > 0 ||
            this.W.shouldCancelSync() ||
            this.xt ||
            (this.kt &&
              this.W.hasAdBreakWithinMs(Sr.UPCOMING_AD_PLAYTHROUGH_MS)) ||
            this.Ut ||
            !this.Gt.shouldSync()
          );
        }
        si(i) {
          return Ar(this, void 0, void 0, function* () {
            if (this.W.scheduledPartyPlaybackOnly) return;
            const n = this.Nt();
            if (
              Math.abs(n - i.playbackPositionMilliseconds) <=
              this.W.getSyncToleranceMs(Ro)
            )
              return;
            const s = this.Yt === xe.ESPN;
            if (s) {
              if (Date.now() - this.jt < 1e3 && Math.abs(n - this.$t) < 1500)
                return;
            }
            this.W.beginRemoteSyncApply();
            const o = Date.now();
            try {
              (yield this.W.setCurrentTime(n),
                s
                  ? ((this.jt = o), (this.$t = n))
                  : this.ti === So.PLAYING && (yield this.W.play()),
                this.Kt.logInteraction(br.SEEK, !0));
              const i = new rr(e, t, {
                name: "video_seek",
                action: { source: "another user" },
              });
              E.m(i);
            } finally {
              this.W.endRemoteSyncApply();
            }
          });
        }
        oi(t) {
          return Ar(this, void 0, void 0, function* () {
            if (
              !this.W.scheduledPartyPlaybackOnly &&
              t.playbackState.toString() !== this.ti.toString()
            ) {
              this.W.beginRemoteSyncApply();
              try {
                this.ti === So.PAUSED
                  ? (this.Kt.logInteraction(br.PAUSE, !0), yield this.W.pause())
                  : this.ti === So.PLAYING &&
                    (this.Kt.logInteraction(br.PLAY, !0), yield this.W.play());
              } finally {
                this.W.endRemoteSyncApply();
              }
            }
          });
        }
        qi() {
          return this.ti === So.PLAYING ? Date.now() - (this.ui + this._t) : 0;
        }
        Nt() {
          return this.ai + this.qi() + this.Xi();
        }
        Xi() {
          var t;
          return this.Pi &&
            this.Pi !== this.zi &&
            null !== (t = this.Rt[this.Pi]) &&
            void 0 !== t
            ? t
            : 0;
        }
        tn() {
          return !!this.Pi && !!this.zi && this.Pi !== this.zi;
        }
        Zi() {
          (this.Fi(),
            this.tn() &&
              (this.nn = setInterval(() => {
                this.en();
              }, Sr.REPORT_POSITION_INTERVAL_MS)));
        }
        Fi() {
          this.nn && (clearInterval(this.nn), (this.nn = void 0));
        }
        en() {
          return Ar(this, void 0, void 0, function* () {
            if (this.tn() && this.ti === So.PLAYING)
              try {
                const i = yield this.W.getStateAsync(),
                  n = {
                    type: A.REPORT_STREAM_POSITION,
                    sender: e,
                    target: t,
                    data: {
                      lastKnownTime: Math.round(i.playbackPositionMilliseconds),
                      lastKnownTimeUpdatedAt: Date.now() - this._t,
                      selectedProvider: this.Pi,
                    },
                  };
                yield E.m(n, 2e3);
              } catch (t) {}
          });
        }
        get changingVideo() {
          return this.Ut;
        }
        set changingVideo(t) {
          this.Ut = t;
        }
        isPartyPaused() {
          return this.ti === So.PAUSED;
        }
      }
      ((Sr.ACTIVATION_EXPECTED_STATE_ATTR =
        "data-tp-activation-expected-state"),
        (Sr.ACTIVATION_EXPECTED_SERVICE_ATTR =
          "data-tp-activation-expected-service"),
        (Sr.SIDEBAR_RELOAD_SOURCE = "sidebar"),
        (Sr.REPORT_POSITION_INTERVAL_MS = 8e3),
        (Sr.UPCOMING_AD_PLAYTHROUGH_MS = 5e3));
      const Ir = { showAlert: !1 },
        Br = { showAlert: !0, alertModal: Yo };
      n(7588);
      class Tr extends $ {
        constructor(t, i, n) {
          (super(t, i, S.POSTHOG_HAS_FEATURE),
            (this.data = { featureName: n }));
        }
      }
      class jr extends x {
        constructor(t, i, n) {
          (super(t, i, n), (this.type = n));
        }
      }
      class $r extends jr {
        constructor(t, i, n = !1) {
          (super(t, i, o.GET_INIT_USER_SETTINGS),
            (this.shouldRefresh = n),
            (this.data = { shouldRefresh: n }));
        }
      }
      var Pr = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const Lr = "api_feature_flags_cache_v1",
        Rr = 6e5,
        Mr = "ff_version",
        Or = "allchat_comment_viewed";
      let Vr = null;
      const Ur = (t) =>
        Pr(void 0, void 0, void 0, function* () {
          const i = Date.now();
          if (!t && Vr && i - Vr.fetchedAtMs < Rr) return Vr;
          if (!t) {
            const t = yield Pr(void 0, void 0, void 0, function* () {
              try {
                const { [Lr]: t } = yield chrome.storage.local.get(Lr);
                return (null == t ? void 0 : t.flags)
                  ? Date.now() - t.fetchedAtMs > Rr
                    ? null
                    : t
                  : null;
              } catch (t) {
                return null;
              }
            });
            if (t) return ((Vr = t), t);
          }
          try {
            const t = yield fetch(`${r}/feature-flags`, { cache: "no-cache" });
            if (!t.ok) throw new Error(`HTTP ${t.status}`);
            const { flags: n, ffVersion: e } = ((t) => {
              if (!t || "object" != typeof t) return { flags: {} };
              const i = Object.entries(t),
                n = t[Mr],
                e =
                  "string" == typeof n || "number" == typeof n
                    ? String(n)
                    : void 0;
              return {
                flags: Object.fromEntries(
                  i.filter(([t]) => t !== Mr).map(([t, i]) => [t, !!i]),
                ),
                ffVersion: e,
              };
            })(yield t.json());
            return (
              yield ((t, i) =>
                Pr(void 0, void 0, void 0, function* () {
                  const n = { flags: t, fetchedAtMs: Date.now(), ffVersion: i };
                  Vr = n;
                  try {
                    yield chrome.storage.local.set({ [Lr]: n });
                  } catch (t) {}
                }))(n, e),
              { flags: n, fetchedAtMs: i, ffVersion: e }
            );
          } catch (t) {
            if (Vr) return Vr;
            const i = yield chrome.storage.local
              .get(Lr)
              .then((t) => t[Lr])
              .catch(() => {});
            return (null == i ? void 0 : i.flags)
              ? ((Vr = i), i)
              : { flags: {}, fetchedAtMs: 0 };
          }
        });
      function Nr(t) {
        return Pr(this, void 0, void 0, function* () {
          return !!(yield (function (t = !1) {
            return Pr(this, void 0, void 0, function* () {
              return (yield Ur(t)).flags;
            });
          })())[t];
        });
      }
      var Hr;
      !(function (t) {
        ((t.GET_AUTH_TOKEN = "getAuthToken"),
          (t.SIGN_OUT = "signOut"),
          (t.GET_SIGN_OUT_EPOCH = "getSignOutEpoch"));
      })(Hr || (Hr = {}));
      class Gr extends x {
        constructor(t, i, n) {
          (super(t, i, n), (this.type = n));
        }
      }
      class zr extends Gr {
        constructor(t, i) {
          super(t, i, Hr.GET_AUTH_TOKEN);
        }
      }
      class Zr extends $ {
        constructor(t, i, n) {
          (super(t, i, S.UPDATE_HANDLE), (this.handle = n));
        }
      }
      var Wr = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      function Yr(t, i, n = "", e = !0, s = "after") {
        if (e) {
          const i = document.getElementById(t);
          i && i.remove();
        }
        if (i) {
          const e = document.createElement("div");
          return (
            (e.id = t),
            n && (e.style.cssText = n),
            "before" === s && i.firstChild
              ? i.insertBefore(e, i.firstChild)
              : i.appendChild(e),
            e
          );
        }
        return null;
      }
      function Qr(t) {
        const i = `img/reactions/${encodeURIComponent(t)}`;
        return {
          staticSrc: chrome.runtime.getURL(
            `${i}/${encodeURIComponent(t)}_static.svg`,
          ),
          gifSrc: chrome.runtime.getURL(`${i}/${encodeURIComponent(t)}.gif`),
        };
      }
      function Jr(n) {
        var s, o, r;
        return Wr(this, void 0, void 0, function* () {
          if (null == n ? void 0 : n.knownHandle)
            return { userData: void 0, handle: n.knownHandle };
          let a = yield E.m(
              new $r(i, t, Boolean(null == n ? void 0 : n.forceRefresh)),
            ),
            u =
              (null === (s = null == a ? void 0 : a.currentUser) || void 0 === s
                ? void 0
                : s.handle) || void 0;
          if (
            (u ||
              !(null == a ? void 0 : a.signedIn) ||
              (null == n ? void 0 : n.forceRefresh) ||
              ((a = yield E.m(new $r(i, t, !0))),
              (u =
                (null === (o = null == a ? void 0 : a.currentUser) ||
                void 0 === o
                  ? void 0
                  : o.handle) || void 0)),
            !u && (null == a ? void 0 : a.signedIn))
          )
            try {
              const i = yield E.m(new zr(e, t)),
                n = yield Oe(
                  "handles/me",
                  "GET",
                  !0,
                  void 0,
                  null == i ? void 0 : i.token,
                ),
                s =
                  null === (r = null == n ? void 0 : n.data) || void 0 === r
                    ? void 0
                    : r.handle;
              "string" == typeof s &&
                s.length > 0 &&
                (E.m(new Zr(e, t, s)), (u = s));
            } catch (t) {}
          return { userData: a, handle: u };
        });
      }
      function Kr(i, n) {
        return Wr(this, void 0, void 0, function* () {
          E.m(
            new rr(
              e,
              t,
              Object.assign({ name: i }, n ? { allchat_ui: n } : {}),
              or.POSTHOG,
            ),
          );
        });
      }
      function qr(t, i, n, e) {
        const s = e ? t.replace(/<title>[\s\S]*?<\/title>/i, "") : t,
          o = s.indexOf(">");
        if (-1 === o) return s;
        const r = s.slice(0, o + 1),
          a = s.slice(o + 1),
          u = i ? `id="${i}" ` : "";
        let c = (null != n ? n : "").trim();
        (c && !c.endsWith(";") && (c += ";"),
          (c += "pointer-events:auto!important;"));
        const h = `style="${c}" `,
          l = `${r.replace("<svg ", `<svg ${u}${h}`)}${a}`;
        return e
          ? `<span class="allchat-has-tooltip" data-tooltip="${e}" aria-label="${e}">${l}</span>`
          : l;
      }
      function Xr(t, i) {
        return qr(
          '\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g clip-path="url(#clip0_1785_27366)">\n            <path d="M9.99999 0C4.47718 0 0 4.47719 0 10C0 15.5231 4.47718 20 9.99999 20C15.5231 20 20.0003 15.5231 20.0003 10C20.0003 4.47719 15.5231 0 9.99999 0ZM9.99999 18.7697C5.1753 18.7697 1.25 14.8247 1.25 9.99996C1.25 5.17527 5.1753 1.24996 9.99999 1.24996C14.8247 1.24996 18.7503 5.17529 18.7503 9.99996C18.7503 14.8246 14.8247 18.7697 9.99999 18.7697ZM9.08092 15.6344H10.6534V14.0475H9.08092V15.6344ZM9.98155 4.36592C9.06592 4.36592 8.31157 4.61279 7.71907 5.10594C7.12657 5.59936 6.83845 6.58748 6.85314 7.40623L6.87626 7.45186H8.31063C8.31063 6.96342 8.47344 6.26154 8.79907 6.00967C9.12438 5.75811 9.51876 5.63217 9.98188 5.63217C10.5156 5.63217 10.9259 5.77717 11.2138 6.06715C11.5013 6.35715 11.6447 6.77184 11.6447 7.31059C11.6447 7.7634 11.5384 8.14996 11.325 8.47027C11.1109 8.79059 10.7522 9.24842 10.2491 9.84375C9.73001 10.3119 9.40938 10.6881 9.28751 10.9728C9.16532 11.2578 9.10188 11.769 9.09719 12.5062H10.6003C10.6003 12.0437 10.6297 11.7028 10.6881 11.484C10.7462 11.2656 10.9128 11.0187 11.1875 10.744C11.7778 10.1747 12.2519 9.61779 12.6109 9.07312C12.9691 8.52904 13.1484 7.92873 13.1484 7.27248C13.1484 6.35686 12.8716 5.64342 12.3169 5.13248C11.7619 4.62123 10.9834 4.36592 9.98155 4.36592Z" fill="#4B4D4D"/>\n            </g>\n            <defs>\n            <clipPath id="clip0_1785_27366">\n            <rect width="20" height="20" fill="white"/>\n            </clipPath>\n            </defs>\n        </svg>\n    ',
          t,
          i,
        );
      }
      function ta(t, i) {
        return qr(
          '\n        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M5 21V4H14L14.4 6H20V16H13L12.6 14H7V21H5ZM14.65 14H18V8H12.75L12.35 6H7V12H14.25L14.65 14Z" fill="#4B4D4D"/>\n        </svg>\n    ',
          t,
          i,
        );
      }
      function ia(t, i) {
        return qr(
          '\n            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M7 7L17 17M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n        ',
          t,
          i,
        );
      }
      function na(t, i, n) {
        return qr(
          '\n        <svg class="chat-option" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M17.5 22.75L21 19.25M21 19.25L24.5 15.75M21 19.25L17.5 15.75M21 19.25L24.5 22.75M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.8372 7.3815C35.497 7.7175 36.0325 8.25125 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1117 31.5 31.1552 31.5H15.9653C15.2355 31.5 14.8733 31.5 14.525 31.57C14.2159 31.6339 13.9169 31.7393 13.636 31.8832C13.321 32.0425 13.041 32.2683 12.4863 32.7128L12.467 32.7268Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        ',
          t,
          i,
          n,
        );
      }
      function ea(t, i, n) {
        return qr(
          '\n        <svg class="chat-option" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M26.25 15.75L19.25 22.75L15.75 19.25M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.839 7.3815C35.4975 7.71705 36.0329 8.25246 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1135 31.5 31.157 31.5H15.9653C15.2373 31.5 14.8715 31.5 14.5232 31.57C14.2147 31.634 13.9163 31.7394 13.636 31.8832C13.321 32.0442 13.0375 32.27 12.4722 32.7232L12.467 32.7268Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        ',
          t,
          i,
          n,
        );
      }
      function sa(t, i, n) {
        return qr(
          '<svg class="chat-option" id="tp-allchat-show-create-post" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M21 24.5V19.25M21 19.25V14M21 19.25H15.75M21 19.25H26.25M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.839 7.3815C35.4975 7.71705 36.0329 8.25246 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1135 31.5 31.157 31.5H15.9653C15.2373 31.5 14.8715 31.5 14.5232 31.57C14.2147 31.634 13.9163 31.7394 13.636 31.8832C13.321 32.0442 13.0375 32.27 12.4722 32.7232L12.467 32.7268Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>',
          t,
          i,
          n,
        );
      }
      function oa(t) {
        return `\n        <div id="tp-allchat-options" class="chat-options-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n            ${((i = t.liveChatShowing), i ? na("tp-allchat-toggle", void 0, "Turn Allchat Off") : ea("tp-allchat-toggle", void 0, "Turn Allchat On"))}\n            ${t.liveChatShowing ? sa("tp-allchat-show-create-post", void 0, "Post Comment") : ""}\n        </div>\n    `;
        var i;
      }
      function ra(t, i) {
        if (i) {
          i.innerHTML = oa(t);
          const n = document.getElementById("tp-allchat-toggle"),
            e = document.getElementById("tp-allchat-show-create-post");
          (n &&
            n.addEventListener("click", (i) => {
              (i.stopPropagation(), t.toggleLiveChat());
            }),
            e &&
              e.addEventListener("click", (i) => {
                (i.stopPropagation(),
                  Kr("allchat_open_create_comment_clicked"),
                  t.showCreatePost());
              }));
        }
      }
      var aa = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      function ua(t) {
        return t
          ? '\n        <svg id="tp-allchat-chatbox-pauseplay" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M8.68344 3.25195C8.29705 3.25195 7.92649 3.40544 7.65327 3.67866C7.38005 3.95188 7.22656 4.32244 7.22656 4.70883V32.2912C7.22656 32.6776 7.38005 33.0481 7.65327 33.3213C7.92649 33.5946 8.29705 33.748 8.68344 33.748H13.4298C13.8162 33.748 14.1868 33.5946 14.46 33.3213C14.7332 33.0481 14.8867 32.6776 14.8867 32.2912V4.70883C14.8867 4.32244 14.7332 3.95188 14.46 3.67866C14.1868 3.40544 13.8162 3.25195 13.4298 3.25195H8.68344ZM23.5702 3.25195C23.1838 3.25195 22.8132 3.40544 22.54 3.67866C22.2668 3.95188 22.1133 4.32244 22.1133 4.70883V32.2912C22.1133 32.6776 22.2668 33.0481 22.54 33.3213C22.8132 33.5946 23.1838 33.748 23.5702 33.748H28.3166C28.7029 33.748 29.0735 33.5946 29.3467 33.3213C29.6199 33.0481 29.7734 32.6776 29.7734 32.2912V4.70883C29.7734 4.51751 29.7358 4.32806 29.6625 4.15131C29.5893 3.97455 29.482 3.81395 29.3467 3.67866C29.2114 3.54338 29.0508 3.43607 28.8741 3.36285C28.6973 3.28964 28.5079 3.25195 28.3166 3.25195H23.5702Z" fill="white"/>\n        </svg>\n\n    '
          : '\n        <svg id="tp-allchat-chatbox-pauseplay" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M12.661 8.31787C12.494 8.21885 12.3038 8.1658 12.1096 8.1641C11.9155 8.16241 11.7243 8.21213 11.5556 8.30822C11.3869 8.4043 11.2466 8.54333 11.149 8.71118C11.0515 8.87903 11 9.06972 11 9.26387V34.7362C11 34.9304 11.0515 35.121 11.149 35.2889C11.2466 35.4567 11.3869 35.5958 11.5556 35.6919C11.7243 35.7879 11.9155 35.8377 12.1096 35.836C12.3038 35.8343 12.494 35.7812 12.661 35.6822L34.1532 22.946C34.3173 22.8486 34.4533 22.7102 34.5477 22.5443C34.6422 22.3785 34.6918 22.1909 34.6918 22C34.6918 21.8092 34.6422 21.6216 34.5477 21.4557C34.4533 21.2899 34.3173 21.1514 34.1532 21.054L12.661 8.31787Z" fill="white" stroke="white" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n\n    ';
      }
      let ca = !1,
        ha = null;
      function la(t) {
        return aa(this, void 0, void 0, function* () {
          const i = yield t.isVideoPlaying();
          (i ? yield t.pauseVideo() : yield t.playVideo(), (ha = !i));
          const n = document.getElementById("tp-allchat-chatbox-pauseplay");
          n && (n.outerHTML = ua(ha));
        });
      }
      function da(t, i) {
        return aa(this, void 0, void 0, function* () {
          if (i && t.shouldRender) {
            const n = yield t.isVideoPlaying();
            i.innerHTML = (function (t, i) {
              return `\n        <div id="tp-allchat-chatbox-controls" class="allchat-chatbox-controls-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n            ${ua(i)}\n        </div>\n    `;
            })(t, n);
            const e = document.getElementById("tp-allchat-chatbox-pauseplay");
            (e &&
              e.addEventListener("click", (i) => {
                (i.stopPropagation(), la(t));
              }),
              ca ||
                (setInterval(
                  () =>
                    aa(this, void 0, void 0, function* () {
                      const i = yield t.isVideoPlaying();
                      if (i !== ha) {
                        ha = i;
                        const n = yield ua(i),
                          e = document.getElementById(
                            "tp-allchat-chatbox-pauseplay",
                          );
                        if (e) {
                          e.outerHTML = n;
                          const i = document.getElementById(
                            "tp-allchat-chatbox-pauseplay",
                          );
                          i &&
                            i.addEventListener("click", (i) => {
                              (i.stopPropagation(), la(t));
                            });
                        }
                      }
                    }),
                  100,
                ),
                (ca = !0)));
          }
        });
      }
      const pa = [
          "Batman.svg",
          "DeadPool.svg",
          "CptAmerica.svg",
          "Wolverine.svg",
          "IronMan.svg",
          "Goofy.svg",
          "Alien.svg",
          "Mulan.svg",
          "Snow-White.svg",
          "Poohbear.svg",
          "Sailormoon.svg",
          "Sailor Cat.svg",
          "Pizza.svg",
          "Cookie.svg",
          "Chocobar.svg",
          "hotdog.svg",
          "Hamburger.svg",
          "Popcorn.svg",
          "IceCream.svg",
          "ChickenLeg.svg",
        ],
        fa = [
          "General/Alien.svg",
          "General/Batman.svg",
          "General/ChickenLeg.svg",
          "General/Chocobar.svg",
          "General/Cookie.svg",
          "General/CptAmerica.svg",
          "General/DeadPool.svg",
          "General/Goofy.svg",
          "General/Hamburger.svg",
          "General/hotdog.svg",
          "General/IceCream.svg",
          "General/IronMan.svg",
          "General/Mulan.svg",
          "General/Pizza.svg",
          "General/Poohbear.svg",
          "General/Popcorn.svg",
          "General/Sailor Cat.svg",
          "General/Sailormoon.svg",
          "General/Snow-White.svg",
          "General/Wolverine.svg",
        ],
        Da = [
          "General/Alien.svg",
          "General/Batman.svg",
          "General/ChickenLeg.svg",
          "General/Chocobar.svg",
          "General/Cookie.svg",
          "General/CptAmerica.svg",
          "General/DeadPool.svg",
          "General/Goofy.svg",
          "General/Hamburger.svg",
          "General/hotdog.svg",
          "General/IceCream.svg",
          "General/IronMan.svg",
          "General/Mulan.svg",
          "General/Pizza.svg",
          "General/Poohbear.svg",
          "General/Popcorn.svg",
          "General/Sailor Cat.svg",
          "General/Sailormoon.svg",
          "General/Snow-White.svg",
          "General/Wolverine.svg",
          "Christmas/angel.svg",
          "Christmas/bell.svg",
          "Christmas/box.svg",
          "Christmas/cane.svg",
          "Christmas/flake.svg",
          "Christmas/gingerbread.svg",
          "Christmas/gingerbread_F.svg",
          "Christmas/gingerbread_M.svg",
          "Christmas/gloves_blue.svg",
          "Christmas/gloves_red.svg",
          "Christmas/hat.svg",
          "Christmas/ornament.svg",
          "Christmas/raindeer.svg",
          "Christmas/reef.svg",
          "Christmas/santa_F.svg",
          "Christmas/santa_M.svg",
          "Christmas/snowglobe.svg",
          "Christmas/snowman.svg",
          "Christmas/sock.svg",
          "Christmas/tree.svg",
          "Halloween/bats.svg",
          "Halloween/candy_corn.svg",
          "Halloween/cat_black.svg",
          "Halloween/cat_white.svg",
          "Halloween/coffin.svg",
          "Halloween/eye_ball.svg",
          "Halloween/face_angry.svg",
          "Halloween/face_evil.svg",
          "Halloween/face_silly.svg",
          "Halloween/face_smile.svg",
          "Halloween/frankenstein.svg",
          "Halloween/ghost_F.svg",
          "Halloween/ghost_M.svg",
          "Halloween/gravestone.svg",
          "Halloween/lollipop.svg",
          "Halloween/moon.svg",
          "Halloween/mummy.svg",
          "Halloween/potion.svg",
          "Halloween/pumpkin.svg",
          "Halloween/pumpkin_witch.svg",
          "Halloween/skull_brain.svg",
          "Halloween/skull_candy.svg",
          "Halloween/skull_girl.svg",
          "Halloween/witch_hat.svg",
          "Thanksgiving/acorn.svg",
          "Thanksgiving/bread.svg",
          "Thanksgiving/candles.svg",
          "Thanksgiving/corn.svg",
          "Thanksgiving/drinks.svg",
          "Thanksgiving/maple_leaf.svg",
          "Thanksgiving/plate_chicken.svg",
          "Thanksgiving/pumpkin.svg",
          "Thanksgiving/pumpkin_pie.svg",
          "Thanksgiving/slice_pie.svg",
          "Thanksgiving/sun_flower.svg",
          "Thanksgiving/turkey_face.svg",
        ],
        va = {
          General: [
            "Alien.svg",
            "Batman.svg",
            "ChickenLeg.svg",
            "Chocobar.svg",
            "Cookie.svg",
            "CptAmerica.svg",
            "DeadPool.svg",
            "Goofy.svg",
            "Hamburger.svg",
            "hotdog.svg",
            "IceCream.svg",
            "IronMan.svg",
            "Mulan.svg",
            "Pizza.svg",
            "Poohbear.svg",
            "Popcorn.svg",
            "Sailor Cat.svg",
            "Sailormoon.svg",
            "Snow-White.svg",
            "Wolverine.svg",
          ],
          Christmas: [
            "angel.svg",
            "bell.svg",
            "box.svg",
            "cane.svg",
            "flake.svg",
            "gingerbread.svg",
            "gingerbread_F.svg",
            "gingerbread_M.svg",
            "gloves_blue.svg",
            "gloves_red.svg",
            "hat.svg",
            "ornament.svg",
            "raindeer.svg",
            "reef.svg",
            "santa_F.svg",
            "santa_M.svg",
            "snowglobe.svg",
            "snowman.svg",
            "sock.svg",
            "tree.svg",
          ],
          Halloween: [
            "bats.svg",
            "candy_corn.svg",
            "cat_black.svg",
            "cat_white.svg",
            "coffin.svg",
            "eye_ball.svg",
            "face_angry.svg",
            "face_evil.svg",
            "face_silly.svg",
            "face_smile.svg",
            "frankenstein.svg",
            "ghost_F.svg",
            "ghost_M.svg",
            "gravestone.svg",
            "lollipop.svg",
            "moon.svg",
            "mummy.svg",
            "potion.svg",
            "pumpkin.svg",
            "pumpkin_witch.svg",
            "skull_brain.svg",
            "skull_candy.svg",
            "skull_girl.svg",
            "witch_hat.svg",
          ],
          Thanksgiving: [
            "acorn.svg",
            "bread.svg",
            "candles.svg",
            "corn.svg",
            "drinks.svg",
            "maple_leaf.svg",
            "plate_chicken.svg",
            "pumpkin.svg",
            "pumpkin_pie.svg",
            "slice_pie.svg",
            "sun_flower.svg",
            "turkey_face.svg",
          ],
        },
        ga = {
          General: [
            "candy_corn.webp",
            "cat_ears.webp",
            "devil_horn.webp",
            "jack_o_lantern.webp",
            "spooky_bat.webp",
            "spooky_cat.webp",
            "spooky_coffin.webp",
            "spooky_ghost_night.webp",
            "spooky_pumpkin_eye.webp",
            "spooky_reaper_circle.webp",
            "spooky_reaper_walking.webp",
            "spooky_skull.webp",
            "spooky_witch_hat.webp",
            "vampire_teeth.webp",
          ],
        };
      function ma(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                C,
                `<span style="font-size: ${(function (t) {
                  let i = 16;
                  const n = t.replace(C, "").replace(/[\uFE0F]/g, ""),
                    e = ((t || "").match(C) || []).length;
                  return (0 === n.length && e <= 3 && (i = 32), i);
                })(t)}px">$&</span>`,
              )
          : t;
      }
      const wa = {
        General: function () {
          return !0;
        },
        Christmas: function () {
          return 11 === new Date().getMonth();
        },
        Halloween: function () {
          const t = new Date();
          return 9 === t.getMonth() && t.getDate() >= 24;
        },
        Thanksgiving: function () {
          const t = new Date();
          return (
            (10 === t.getMonth() && t.getDate() >= 18 && t.getDate() <= 28) ||
            (9 === t.getMonth() && t.getDate() >= 8 && t.getDate() <= 14)
          );
        },
      };
      class ya {
        constructor(t) {
          ((this.Z = t),
            (this.sn = []),
            (this.rn = 0),
            (this.an = document.title),
            (this.un = 0),
            (this.cn = new Map()),
            (this.hn = new Map()),
            (this.ln = new Map()),
            (this.dn = []),
            (this.pn = []),
            (this.Dn = ""),
            (this.vn = ""),
            F("Message Controller"));
        }
        gn(t, i, n, e) {
          return jQuery(
            `\n            <div class="msg-container ${!e && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${e ? `<img src="${ma(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-txt message${n.isSystemMessage ? "-system" : "-txt"}">\n                    ${e ? `<h3 data-tp-id="chat_history_container-nickname">${i}</h3>` : ""}\n                    <p data-tp-id="chat_history_container-message">${ma(n.body).trim()}</p>\n                </div>\n            </div>\n          `,
          );
        }
        mn(t, i, n, e) {
          const s =
              200 /
              (n.gifObject.media.full.dims[0] / n.gifObject.media.full.dims[1]),
            o =
              200 /
              (n.gifObject.media.fullMobile.dims[0] /
                n.gifObject.media.fullMobile.dims[1]),
            r = this.Z.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${!e && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${e ? `<img src="${ma(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${e ? `<h3 data-tp-id="chat_history_container-nickname">${i}</h3>` : ""}  \n            ${r ? `<video src="${ma(n.gifObject.media.full.url)}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${ma(n.gifObject.media.fullMobile.url)}"  height="${o}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`}     \n                </div>\n            </div>\n          `,
          );
        }
        wn(t, i, n) {
          return jQuery(
            `\n            <div class="msg ${!n && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    ${n ? `<img src="${ma(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                </div>\n                <div class="message${i.isSystemMessage ? "-system" : "-txt"}">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${ma(i.body).trim()}</p>\n                </div>\n            </div>\n        `,
          );
        }
        yn(t, i, n) {
          const e =
              200 /
              (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            s =
              200 /
              (i.gifObject.media.fullMobile.dims[0] /
                i.gifObject.media.fullMobile.dims[1]),
            o = this.Z.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${!n && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${n ? `<img src="${ma(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${o ? `<video src="${ma(i.gifObject.media.full.url)}" data-tp-id="chat_history_container-gif" height="${e}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${ma(i.gifObject.media.fullMobile.url)}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`}\n                </div>\n            </div>\n          `,
          );
        }
        bn(t, i, n, e, s) {
          t.appendTo(jQuery("#chat-history"));
          const o = t[0];
          ((o.Cn = i.permId), (o.Fn = n), (o._n = e), (o.En = i), (o.xn = s));
        }
        reloadMessages() {
          this.Z.queueMessageForFrame(B.CLEAR_MESSAGES, "");
          for (const t of this.sn)
            this.Z.queueMessageForFrame(B.ADD_MESSAGE, {
              originalMessage: t,
              userIcon: this.getUserIconURL(t.permId, t.userIcon),
              userNickname: this.getUserNickname(t.permId, t.userNickname),
              userIconFrame: this.getUserIconFrameURL(
                t.permId,
                t.userIconFrame,
              ),
            });
        }
        kn(t, i) {
          if (Math.abs(t.timestamp - i.timestamp) > 6e4) return !1;
          if (t.permId !== i.permId) return !1;
          if (
            "isSystemMessage" in i &&
            i.isSystemMessage &&
            (i.body.includes("joined") || i.body.includes("left"))
          )
            return !1;
          if ("gifObject" in t) {
            if ("isSystemMessage" in i && i.isSystemMessage) return !1;
          } else {
            if (
              t.isSystemMessage &&
              (t.body.includes("joined") || t.body.includes("left"))
            )
              return !1;
            if ("gifObject" in i) {
              if (t.isSystemMessage) return !1;
            } else if (t.isSystemMessage !== i.isSystemMessage) return !1;
          }
          return !0;
        }
        addMessage(t, i, n) {
          if (t.messageId && this.sn.some((i) => i.messageId === t.messageId))
            return;
          if (
            (void 0 === n && (n = this.sn.length),
            t.isSystemMessage &&
              "left" === t.body &&
              (console.log("trying to add left message"),
              !t.userIcon && !this.cn.has(t.permId)))
          )
            return;
          if (0 === n && t.isSystemMessage && t.body.includes("joined")) return;
          i &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon),
            t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const e = this.sn.slice(-1).pop(),
            s = !(void 0 !== e && n > 0) || !this.kn(e, t);
          this.sn.push(t);
          const o = Object.assign({}, t),
            r = this.getUserIconURL(o.permId, o.userIcon),
            a = this.getUserNickname(o.permId, o.userNickname),
            u = this.getUserIconFrameURL(o.permId, o.userIconFrame);
          this.Z.queueMessageForFrame(B.ADD_MESSAGE, {
            originalMessage: o,
            userIcon: r,
            userNickname: a,
            userIconFrame: u,
          });
          const c = "" === a ? this.wn(r, o, s) : this.gn(r, a, o, s);
          (this.bn(c, o, r, a, s), this.scrollToBottom(), this.An());
        }
        addGif(t, i) {
          if (t.messageId && this.sn.some((i) => i.messageId === t.messageId))
            return;
          void 0 === i && (i = this.sn.length);
          const n = this.sn.slice(-1).pop(),
            e = !(void 0 !== n && i > 0) || !this.kn(n, t);
          this.sn.push(t);
          const s = t.userIcon
              ? this.getUserIconURL(t.permId, t.userIcon)
              : this.getUserIconURL(t.permId),
            o = t.userNickname
              ? this.getUserNickname(t.permId, t.userNickname)
              : "",
            r = this.getUserIconFrameURL(t.permId, t.userIconFrame);
          this.Z.queueMessageForFrame(B.ADD_MESSAGE, {
            originalMessage: t,
            userIcon: s,
            userNickname: o,
            userIconFrame: r,
          });
          const a = "" === o ? this.yn(s, t, e) : this.mn(s, o, t, e);
          ((a[0].Sn = !0),
            this.bn(a, t, s, o, e),
            je(100)().then(this.scrollToBottom.bind(this)),
            this.An());
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(
            jQuery("#chat-history").prop("scrollHeight"),
          );
        }
        clearUnreadCount() {
          this.rn > 0 && ((this.rn = 0), (document.title = this.an));
        }
        An() {
          ((this.rn += 1),
            (this.un += 1),
            document.hasFocus() ||
              (document.title = "(" + String(this.rn) + ") " + this.an));
        }
        getUserIconURL(t, i = "") {
          if (t && this.cn.has(t)) return this.cn.get(t);
          const n = ya.parseIconSrc(i),
            e = void 0 !== n ? n : this.In();
          return (t && this.cn.set(t, e), this.pn.push(e), e);
        }
        static parseIconSrc(t) {
          if (t.includes("/profile-images/")) return t;
          const i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            n = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return Da.includes(i)
            ? chrome.runtime.getURL("img/icons/" + t)
            : pa.includes(n)
              ? chrome.runtime.getURL("img/icons/General/" + t)
              : void 0;
        }
        static getFullIconURL(t) {
          const i = ya.parseIconSrc(t);
          return (null == i ? void 0 : i.includes("/profile-images/"))
            ? u + i
            : i;
        }
        getUserIconFrameURL(t, i = "") {
          const n = t ? this.hn.get(t) : void 0;
          return void 0 !== n ? n : (t && i && this.hn.set(t, i), i);
        }
        setUserIconFrameForUser(t, i = "") {
          return (t && this.hn.set(t, i), i);
        }
        getUserNickname(t, i = "") {
          return (
            this.ln.has(t) || (this.ln.set(t, i), this.dn.push(i)),
            ma(this.ln.get(t))
          );
        }
        In() {
          let t = chrome.runtime.getURL(
            "img/icons/General/" + pa[Math.floor(Math.random() * pa.length)],
          );
          if (this.pn.length < va.General.length)
            for (; this.pn.includes(t);)
              t = chrome.runtime.getURL(
                "img/icons/General/" +
                  pa[Math.floor(Math.random() * pa.length)],
              );
          return t;
        }
        Bn(t) {
          const i = t[0],
            n = i.Cn;
          let e = i.Fn;
          n &&
            this.getUserIconURL(n) !== e &&
            ((e = this.getUserIconURL(n)),
            t.find("img").attr("src", e),
            (i.Fn = e));
          const s = i._n;
          if (n && e) {
            const o = this.getUserNickname(n);
            if (o !== s) {
              const s = i.En,
                r = i.xn;
              let a;
              if (
                (i.Sn &&
                  s &&
                  "gifObject" in s &&
                  r &&
                  (a = "" == o ? this.yn(e, s, r) : this.mn(e, o, s, r)),
                !i.Sn &&
                  s &&
                  !("gifObject" in s) &&
                  r &&
                  (a = "" == o ? this.wn(e, s, r) : this.gn(e, o, s, r)),
                a)
              ) {
                t.replaceWith(a);
                const i = a[0];
                ((i.Cn = n), (i.Fn = e), (i._n = o), (i.En = s), (i.xn = r));
              }
            }
          }
        }
        setUserIconUrl(t) {
          ((this.Dn = t), this.Z.queueMessageForFrame(B.SET_USER_ICON_URL, t));
        }
        setUserIconFrameUrl(t) {
          ((this.vn = t),
            this.Z.queueMessageForFrame(B.SET_USER_ICON_FRAME_URL, t));
        }
        renderSidebar() {
          (jQuery("#user-icon img").attr("src", this.Dn),
            jQuery(".user-icon img").attr("src", this.Dn));
          const t = jQuery(".msg");
          for (let i = 0; i < t.length; i++) this.Bn(jQuery(t[i]));
          const i = jQuery(".msg-container");
          for (let t = 0; t < i.length; t++) this.Bn(jQuery(i[t]));
          this.Z.isChatFrameActive() && this.reloadMessages();
        }
        Tn(t) {
          let i = null;
          if (t) {
            if (t.includes("/profile-images/")) return t;
            if (t.includes("?newIconUrl=")) {
              const n = t.split("?newIconUrl="),
                e = n[1],
                s = n[0];
              Da.includes(e)
                ? (i = chrome.runtime.getURL(`img/icons/${e}`))
                : pa.includes(s) &&
                  (i = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              Da.includes(t)
                ? (i = chrome.runtime.getURL(`img/icons/${t}`))
                : pa.includes(t) &&
                  (i = chrome.runtime.getURL(`img/icons/General/${t}`));
          }
          if (null === i) {
            let t = va.General.filter((t) => !this.pn.includes(t));
            0 === t.length && (t = va.General);
            const n = t[Math.floor(Math.random() * t.length)];
            i = chrome.runtime.getURL(`/img/icons/General/${n}`);
          }
          return i;
        }
        setUserIcon(t, i) {
          const n = this.Tn(i);
          (this.cn.set(t, n), this.pn.push(n), this.renderSidebar());
        }
        setUserNickname(t, i) {
          const n = ma(i);
          (this.ln.set(t, n), this.dn.push(n), this.renderSidebar());
        }
        updateUserData(t, i, n, e) {
          const s = this.Tn(i);
          (this.cn.set(t, s),
            this.setUserIconFrameForUser(t, e),
            this.pn.push(s),
            this.ln.set(t, n),
            this.dn.push(n),
            this.renderSidebar());
        }
        addYoutubePromo() {
          jQuery(
            `\n        <div class="msg-container">\n            <div class="msg-txt message-system">\n                <div style="width:100%; height: 100px">\n                    <img data-tp-id="tp_youtube_promo" style="width: 100%;height: 100%;object-fit: contain;cursor:pointer !important;" src="${chrome.runtime.getURL("img/youtube_promo.jpg")}" \n                    onclick="window.open('https://teleparty.com/youtube')"\n                    />\n                </div>\n            </div>\n        </div>\n        `,
          ).prependTo(jQuery("#chat-history"));
        }
        addReviewMessage() {
          jQuery(
            '\n          <div class="msg-container">\n          <div class="msg-txt message-system" style="width:100%">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id="reviewLink" href="https://chromewebstore.google.com/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews" style="display:inline;color:red;text-decoration:underline;" target="none">here!</a>\n          </p>\n          </div>\n          </div>\n          ',
          ).appendTo(jQuery("#chat-history"));
          const i = new rr(e, t, {
            name: "review-shown",
            action: {
              description: "review was shown on chrome",
              reason: "review was shown.",
            },
          });
          E.m(i);
          const n = {
              eventType: "review-shown-chrome",
              sessionId: this.Z.getSessionId(),
            },
            s = new rr(e, t, n);
          (E.m(s),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const i = new rr(e, t, {
                name: "review-clicked",
                action: {
                  description: "review was clicked on chrome",
                  reason: "review was clicked.",
                },
              });
              E.m(i);
              const n = {
                  eventType: "review-clicked-chrome",
                  sessionId: this.Z.getSessionId(),
                },
                s = new rr(e, t, n);
              E.m(s);
            }));
        }
        getMessages(t = !1) {
          return t ? this.sn.filter((t) => t.isSystemMessage) : this.sn;
        }
      }
      var ba = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      let Ca = null,
        Fa = 0,
        _a = null,
        Ea = null;
      function xa(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }
      function ka(t, i, n, e) {
        ((t.innerHTML =
          "floating" === e.variant
            ? (function (t, i) {
                const n = Boolean(i),
                  e = n ? `@${i}` : "Choose a handle",
                  s = n ? "Edit" : "Set up",
                  o =
                    (i || "?")
                      .replace(/[^a-zA-Z0-9]/g, "")
                      .slice(0, 2)
                      .toUpperCase() || "?";
                return `\n    <button type="button" class="tp-floating-account" id="allchat-user-pill" aria-label="${n ? `Edit profile for ${xa(i)}` : "Set your All Chat handle"}">\n      <span class="tp-floating-account-avatar" aria-hidden="true">\n        ${t ? `<img src="${t}" alt=""/>` : `<span class="tp-floating-account-initial">${xa(o)}</span>`}\n      </span>\n      <span class="tp-floating-account-text">\n        <span class="tp-floating-account-label">${n ? "Posting as" : "Almost ready"}</span>\n        <span class="tp-floating-account-handle">${xa(e)}</span>\n      </span>\n      <span class="tp-floating-account-action">${s}</span>\n    </button>\n  `;
              })(i, n)
            : (function (t, i) {
                const n = Boolean(i),
                  e = n ? i : "Set handle",
                  s = n ? "Edit" : "Tap to create",
                  o = (n ? i : "?").slice(0, 1).toUpperCase();
                return `\n    <div class="user-pill rounded-container gray-border" style="cursor: pointer !important;" id="allchat-user-pill">\n      <span class="user-pill-avatar">\n        ${t ? `<img src="${t}" alt="${xa(e)}"/>` : `<span class="user-pill-initial">${xa(o)}</span>`}\n      </span>\n      <div style="display: flex; flex-direction: column">\n        <span class="user-pill-name">${xa(e)}</span>\n        <span class="user-pill-edit" id="allchat-edit-profile-open-btn">${s}</span>\n      </div>\n    </div>\n  `;
              })(i, n)),
          (function (t, i) {
            const n = document.getElementById("allchat-user-pill");
            n &&
              n.addEventListener("click", (n) => {
                (n.stopPropagation(),
                  t ? i.onEditClicked() : i.onSetHandleClicked());
              });
          })(n, e));
      }
      function Aa(t, i) {
        var n;
        return ba(this, void 0, void 0, function* () {
          i.knownHandle && ka(t, void 0, i.knownHandle, i);
          const { userData: e, handle: s } = yield Jr({
              knownHandle: i.knownHandle,
            }),
            o = ya.getFullIconURL(
              null === (n = null == e ? void 0 : e.userSettings) || void 0 === n
                ? void 0
                : n.userIcon,
            );
          ka(t, o, s || i.knownHandle, i);
        });
      }
      function Sa() {
        (null !== Ca && (clearInterval(Ca), (Ca = null)),
          _a && (window.removeEventListener("focus", _a), (_a = null)),
          Ea &&
            (document.removeEventListener("visibilitychange", Ea),
            (Ea = null)));
      }
      function Ia(n, e) {
        if (null !== Ca) return;
        Fa = Date.now() + 3e5;
        const s = () =>
          ba(this, void 0, void 0, function* () {
            Date.now() >= Fa
              ? Sa()
              : yield (function (n, e) {
                  return ba(this, void 0, void 0, function* () {
                    if (!document.body.contains(n)) return (Sa(), !1);
                    try {
                      const s = yield E.m(new $r(i, t, !0));
                      if (null == s ? void 0 : s.signedIn)
                        return (Sa(), yield Aa(n, e), !0);
                    } catch (t) {}
                    return !1;
                  });
                })(n, e);
          });
        ((Ca = window.setInterval(s, 3e3)),
          (_a = () => {
            s();
          }),
          (Ea = () => {
            "visible" === document.visibilityState && s();
          }),
          window.addEventListener("focus", _a),
          document.addEventListener("visibilitychange", Ea),
          s());
      }
      function Ba(n, e) {
        return ba(this, void 0, void 0, function* () {
          if (!e) return;
          const s =
            void 0 !== n.containerStyling && n.containerStyling.length > 0
              ? ` style="${n.containerStyling}"`
              : "";
          e.innerHTML = `<div class="user-identity-root"${s}></div>`;
          const o = e.firstElementChild;
          if (n.knownHandle) return void (yield Aa(o, n));
          let r;
          try {
            r = yield E.m(new $r(i, t));
          } catch (t) {}
          if (!(null == r ? void 0 : r.signedIn)) {
            o.innerHTML =
              "floating" === n.variant
                ? `\n    <a id="tp-user-login-btn"\n      class="tp-floating-login"\n      href="${a}/signup?ref=allchat" target="_blank" rel="noopener noreferrer">\n      Log in to post\n    </a>\n  `
                : `\n    <a id="tp-user-login-btn"\n      class="tp-login-cta rounded-container"\n      href="${a}/signup?ref=allchat" target="_blank" rel="noopener noreferrer">\n      Login\n    </a>\n  `;
            const t = o.querySelector("#tp-user-login-btn");
            return void (
              t &&
              t.addEventListener("click", () => {
                Ia(o, n);
              })
            );
          }
          yield Aa(o, n);
        });
      }
      function Ta(t, i) {
        if (!i) return null;
        const n = t.id || `tp-flair-${Math.random().toString(36).slice(2, 9)}`,
          { staticSrc: e, gifSrc: s } = Qr(t.reaction);
        i.innerHTML = (function (t) {
          const { id: i, reaction: n, staticSrc: e, shadowColor: s } = t;
          return `\n    <button\n      id="${i}"\n      class="tp-flair-icon"\n      type="button"\n      data-active="false"\n      aria-pressed="false"\n      aria-label="${n}"\n      style="--tp-flair-shadow-color: ${s};"\n    >\n      <img src="${e}" alt="${n}" />\n    </button>\n  `;
        })({
          id: n,
          reaction: t.reaction,
          staticSrc: e,
          gifSrc: s,
          shadowColor: t.shadowColor,
        });
        const o = document.getElementById(n),
          r = null == o ? void 0 : o.querySelector("img");
        if (!o || !r) return null;
        return (
          (new Image().src = s),
          o.addEventListener("mouseenter", (t) => {
            (t.stopPropagation(), r && (r.src = s));
          }),
          o.addEventListener("mouseleave", (t) => {
            (t.stopPropagation(), r && (r.src = e));
          }),
          o.addEventListener("click", (i) => {
            i.stopPropagation();
            const n = "true" !== o.dataset.active;
            (!(function (t, i) {
              const n = "string" == typeof t ? document.getElementById(t) : t;
              if (!n) return;
              i &&
                (function (t) {
                  const i =
                    t.closest(".tp-flair-row, #tp-flair-row") || document;
                  i.querySelectorAll(
                    ".tp-flair-icon[data-active='true']",
                  ).forEach((i) => {
                    i !== t &&
                      (i.setAttribute("data-active", "false"),
                      i.setAttribute("aria-pressed", "false"));
                  });
                })(n);
              (n.setAttribute("data-active", i ? "true" : "false"),
                n.setAttribute("aria-pressed", i ? "true" : "false"));
            })(o, n),
              t.onClick && t.onClick());
          }),
          o
        );
      }
      function ja(t, i = document.getElementById("tp-flair-row")) {
        if (!i) return null;
        const n = document.createElement("div");
        return ((n.className = "tp-flair-cell"), i.appendChild(n), Ta(t, n));
      }
      class $a {
        constructor(t, i = 2e3, n) {
          ((this.onRemove = n), (this.duration = i));
          const e = document.createElement("div");
          ((e.className = "allchat-toast"),
            (e.innerHTML = t),
            (e.style.position = "fixed"),
            (e.style.opacity = "0"),
            (e.style.visibility = "hidden"),
            e.addEventListener("mouseenter", () => this.pause()),
            e.addEventListener("mouseleave", () => this.resume()),
            (this.el = e));
        }
        measure() {
          const t = this.el.getBoundingClientRect();
          return { w: Math.ceil(t.width), h: Math.ceil(t.height) };
        }
        reveal() {
          ((this.el.style.visibility = "visible"),
            (this.el.style.opacity = "1"));
        }
        setPosition(t, i) {
          ((this.el.style.left = `${t}px`), (this.el.style.bottom = `${i}px`));
        }
        clearTimers() {
          (this.fadeTimer && window.clearInterval(this.fadeTimer),
            this.removeTimer && window.clearTimeout(this.removeTimer));
        }
        scheduleDismiss() {
          (this.clearTimers(),
            (this.removeTimer = window.setTimeout(() => {
              this.fadeTimer = window.setInterval(() => {
                const t = parseFloat(this.el.style.opacity || "1");
                if (!isNaN(t) && t > 0) {
                  const i = Math.max(0, t - 0.05);
                  this.el.style.opacity = i.toString();
                } else (window.clearInterval(this.fadeTimer), this.destroy());
              }, 50);
            }, this.duration)));
        }
        pause() {
          (this.clearTimers(), (this.el.style.opacity = "1"));
        }
        resume() {
          this.scheduleDismiss();
        }
        destroy() {
          (this.el.remove(), this.onRemove());
        }
      }
      const Pa = new (class {
        constructor(t) {
          ((this.active = []),
            (this.queue = []),
            (this.id = "tp-allchat-toast-container"),
            (this.MAX_ACTIVE = 3),
            (this.TOAST_GAP = 12),
            (this.HORIZ_MARGIN = 36),
            (this.VERT_MARGIN_BOTTOM = 90),
            this.ensureContainer(t),
            window.__allchat_toast_resize_bound ||
              (window.addEventListener("resize", () => this.layout()),
              (window.__allchat_toast_resize_bound = !0)));
        }
        ensureContainer(t) {
          let i = document.getElementById(this.id);
          (i ||
            ((i = document.createElement("div")),
            (i.id = this.id),
            (i.style.position = "fixed"),
            (i.style.zIndex = "9991"),
            (null != t ? t : document.body).appendChild(i)),
            (this.container = i));
        }
        show(t, i, n) {
          const e =
            null != n
              ? n
              : `toast_${Date.now()}_${Math.random().toString(36).slice(2)}`;
          return (
            this.queue.push({ html: t, duration: i, id: e }),
            this.pump(),
            e
          );
        }
        dismiss(t) {
          const i = this.active.findIndex((i) => i.id === t);
          if (i >= 0) {
            const { toast: t } = this.active[i];
            (t.destroy(), this.active.splice(i, 1), this.pump());
          } else {
            const i = this.queue.findIndex((i) => i.id === t);
            i >= 0 && this.queue.splice(i, 1);
          }
        }
        pump() {
          for (
            this.container || this.ensureContainer();
            this.active.length < this.MAX_ACTIVE && this.queue.length > 0;
          ) {
            const { html: t, duration: i, id: n } = this.queue.shift(),
              e = new $a(t, i, () => {
                const t = this.active.findIndex((t) => t.toast === e);
                (t >= 0 && this.active.splice(t, 1), this.pump());
              });
            (this.container.appendChild(e.el),
              e.setPosition(this.HORIZ_MARGIN, this.VERT_MARGIN_BOTTOM),
              e.reveal(),
              e.scheduleDismiss(),
              this.active.push({ id: n, toast: e }));
          }
          this.layout();
        }
        layout() {
          if (!this.active.length) return;
          const t = window.innerWidth,
            i = window.innerHeight;
          let n = this.VERT_MARGIN_BOTTOM;
          for (const { toast: e } of this.active) {
            const { w: s, h: o } = e.measure(),
              r = Math.min(
                Math.max(Math.round(0.15 * o), 0),
                Math.max(i - o - this.VERT_MARGIN_BOTTOM, 0),
              ),
              a = Math.min(this.HORIZ_MARGIN, t - s - this.HORIZ_MARGIN),
              u = Math.min(n + r, i - o - this.VERT_MARGIN_BOTTOM);
            (e.setPosition(a, u), (n = u + o + this.TOAST_GAP));
          }
        }
      })();
      function La(t, i = 2e3, n) {
        return Pa.show(t, i, n);
      }
      class Ra extends $ {
        constructor(t, i) {
          super(t, i, S.GET_PERM_ID);
        }
      }
      var Ma = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const Oa = 120;
      function Va(t) {
        return `\n        <div id="tp-allchat-chatbox" style="display: flex; flex-direction: column; width: 100%; background-color: black; align-items: flex-end; padding: 12px 20px;">\n            <div class="allchat-chatbox-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n                ${((i = "tp-allchat-logo"), qr('\n        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <mask id="mask0_1785_33205" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">\n            <path d="M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z" fill="#EF3E3A"/>\n            <path d="M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z" fill="#EF3E3A"/>\n            </mask>\n            <g mask="url(#mask0_1785_33205)">\n            <rect width="33" height="33" fill="url(#paint0_linear_1785_33205)"/>\n            </g>\n            <defs>\n            <linearGradient id="paint0_linear_1785_33205" x1="0" y1="0" x2="37.984" y2="7.39309" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#E34248"/>\n            <stop offset="1" stop-color="#9E55A0"/>\n            </linearGradient>\n            </defs>\n        </svg>\n    ', i, n))}\n                ${t.videoControlProps.shouldRender ? '<div id="tp-allchat-chatbox-controls-container" style="display: flex; width: 56px; height: 44px; justify-content: center;"></div>' : ""}\n                <div style="display:flex; align-items:center; position:relative; flex-grow:1">\n                    <div class="tp-chatbox-input-wrapper" style="flex-grow:1; position:relative;">\n                        <input\n                        id="tp-allchat-chatbox-input"\n                        value="${t.curComment}"\n                        type="text"\n                        class="allchat-chatbox-input"\n                        placeholder="Add your comment here"\n                        style="flex-grow:1; padding-left:12px;"\n                        >\n\n                        <div class="tp-input-right-rail">\n                            <div id="tp-flair-row" class="tp-flair-row"></div>\n                            <span id="tp-allchat-chatbox-length" class="allchat-chatbox-length">\n                                ${t.curComment.length}/120\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div style="display: flex; flex-direction: row">\n                    <span\n                        id="tp-allchat-cancel-btn"\n                        class="allchat-chatbox-button rounded-container gray-border"\n                        style="height: 52px; display: flex; align-items: center; margin-right: 6px"\n                    >\n                        Cancel\n                    </span>\n                    \n                    <span\n                        id="tp-allchat-post-btn"\n                        class="allchat-chatbox-button rounded-container gradient-border"\n                        style="font-weight:600; height: 52px; display: flex; align-items: center;"\n                    >\n                        <span class="gradient-200-text">Post</span>\n                    </span>\n                </div>\n                <div id="tp-user-identity" style="margin-left:16px;"></div>\n                ${Xr("allchat-chatbox-open-help", "cursor: pointer !important; width: 33px; height: 33px;")}\n                \n                <div id="tp-allchat-message-box" class="allchat-message-box"></div>\n            </div>\n            <a\n                style="font-size: 12px; color: gray; margin-top: 4px; cursor: pointer; padding-bottom: 4px;"\n                class="allchat-underline-text"\n                id="tp-leave-feedback-text"\n                href="https://docs.google.com/forms/d/e/1FAIpQLSdkFbtU1o-vw9LXVG4STZiryRbrcF0j445c3b1EfwNoJYUT7w/viewform?usp=dialog"\n                target="_blank"\n            >\n                Leave Feedback\n            </a>\n        </div>\n    `;
        var i, n;
      }
      function Ua() {
        const t = document.getElementById("tp-flair-row");
        if (t && null !== t.offsetParent)
          for (const i of t.children) {
            const t = i.querySelector("button");
            if ("true" === (null == t ? void 0 : t.getAttribute("data-active")))
              return null == t ? void 0 : t.getAttribute("aria-label");
          }
      }
      function Na(i, n, s, o) {
        return Ma(this, void 0, void 0, function* () {
          const r = document.getElementById("tp-allchat-post-btn");
          try {
            r && (r.textContent = "Posting...");
            const a = new rr(e, t, {
              name: "allchat_message_sent",
              message: { text: n },
              allchat_ui: "legacy",
            });
            E.m(a);
            const u = yield E.m(new Ra(e, t)),
              c = {
                message: n,
                vidTime: yield i.getVidTime(),
                service: i.service,
                vidId: i.vidId,
                displayName: s,
                vidDuration: i.vidDuration,
                flair: Ua(),
                permId: u,
                extensionVersion: f,
              },
              h = Oe("comments", "POST", !0, c, o, void 0, !0);
            (i.onPostComment(c),
              i.shouldPlayVideoAfterClose && i.videoControlProps.playVideo(),
              yield h,
              Kr("allchat_message_accepted", "legacy"));
          } catch (t) {
            try {
              JSON.parse(t.message).error
                ? Kr("allchat_message_rejected", "legacy")
                : (Kr("allchat_message_errored", "legacy"),
                  La("An error occurred"));
            } catch (i) {
              (Kr("allchat_message_errored", "legacy"),
                console.error(`GOT ERROR ${t}`),
                La("An error occurred"));
            }
          } finally {
            (i.onCommentEdited(""),
              r && (r.textContent = "Post"),
              (function (t) {
                const i = document.getElementById("tp-allchat-chatbox-length");
                i && (i.innerText = `${t.curComment.length}/120`);
              })(i));
          }
        });
      }
      function Ha(n, e, s, o) {
        return Ma(this, void 0, void 0, function* () {
          const r = yield E.m(new zr(i, t));
          ((o.value = ""),
            n.closeModal(),
            Na(n, e, s, null == r ? void 0 : r.token));
        });
      }
      function Ga(t, i) {
        Ba(
          {
            knownHandle: i,
            onEditClicked: () => {
              t.openChangeHandleModal((i) => Ga(t, i));
            },
            onSetHandleClicked: () => {
              t.openSetHandleModal((i) => Ga(t, i));
            },
          },
          document.getElementById("tp-user-identity"),
        );
      }
      function za() {
        const t = "allchat-feedback-bubble",
          i = "allchat-feedback-bubble-dismissed";
        if ("true" === localStorage.getItem(i)) return;
        const n = localStorage.getItem(t),
          e = n ? JSON.parse(n) : { count: 0, last: 0 },
          { count: s, last: o } = e;
        Date.now() - o >= Math.min(3e5 * Math.pow(2, s), 864e5) &&
          setTimeout(() => {
            if ("true" === localStorage.getItem(i)) return;
            (La(
              `\n        <div style="display: flex; flex-direction: column;">\n            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 20px">\n                <span>Want to help All Chat improve? Leave your thoughts here!</span>\n                ${ia("allchat-close-feedback", "transform: translateY(-2px); cursor: pointer;")}\n            </div>\n            <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; gap: 12px;">\n                <span class="allchat-underline-text" \n                      style="font-size: 12px; color: gray; cursor: pointer;" \n                      id="allchat-dont-show-feedback">\n                    Don't Show Again\n                </span>\n                <a class="gradient-200-button leave-feedback-button" target="_blank"\n                   href="https://docs.google.com/forms/d/e/1FAIpQLSdkFbtU1o-vw9LXVG4STZiryRbrcF0j445c3b1EfwNoJYUT7w/viewform?usp=dialog">\n                    Leave Feedback\n                </a>\n            </div>\n        </div>\n    `,
              1e4,
              "feedback-bubble",
            ),
              localStorage.setItem(
                t,
                JSON.stringify({ count: s + 1, last: Date.now() }),
              ));
            const n = document.querySelector(".leave-feedback-button"),
              e = document.getElementById("allchat-dont-show-feedback"),
              o = document.getElementById("allchat-close-feedback"),
              r = () => {
                Pa.dismiss("feedback-bubble");
              };
            (n &&
              n.addEventListener("click", () => {
                (localStorage.setItem(i, "true"), r());
              }),
              e &&
                e.addEventListener("click", () => {
                  (localStorage.setItem(i, "true"), r());
                }),
              o && o.addEventListener("click", r));
          }, 3e3);
      }
      function Za(n, e) {
        if (e) {
          ((e.innerHTML = Va(n)),
            da(
              n.videoControlProps,
              document.getElementById("tp-allchat-chatbox-controls-container"),
            ),
            Ga(n));
          const s = document.getElementById("tp-allchat-chatbox-input"),
            o = document.getElementById("tp-allchat-cancel-btn"),
            r = document.getElementById("tp-allchat-post-btn"),
            a = document.getElementById("allchat-chatbox-open-help"),
            u = document.getElementById("tp-flair-row");
          (u &&
            (ja(
              { reaction: "heart", shadowColor: "rgba(255, 77, 166, 0.8)" },
              u,
            ),
            ja({ reaction: "cry", shadowColor: "rgba(9, 239, 247, 1)" }, u),
            ja(
              { reaction: "surprise", shadowColor: "rgba(255, 216, 77, 0.8)" },
              u,
            )),
            s &&
              (s.addEventListener("focus", (t) => {
                (t.stopPropagation(),
                  localStorage.setItem("allchat-has-focus", "true"));
              }),
              s.addEventListener("blur", () => {
                localStorage.setItem("allchat-has-focus", "false");
              }),
              s.addEventListener("click", (t) => {
                t.stopPropagation();
              }),
              s.addEventListener("keydown", (t) => {
                t.stopPropagation();
              }),
              s.addEventListener("input", (t) => {
                let i = t.target.value;
                (i.length > Oa && ((i = i.substring(0, Oa)), (s.value = i)),
                  n.onCommentEdited(i));
                const e = document.getElementById("tp-allchat-chatbox-length");
                e && (e.innerHTML = `${i.length}/120`);
              })),
            o &&
              o.addEventListener("click", (t) => {
                (t.stopPropagation(),
                  n.shouldPlayVideoAfterClose &&
                    n.videoControlProps.playVideo(),
                  Kr("allchat_cancel_post_clicked"),
                  n.closeChatbox());
              }),
            r &&
              r.addEventListener("click", (e) => {
                (e.stopPropagation(),
                  (function (n) {
                    var e;
                    Ma(this, void 0, void 0, function* () {
                      const s = yield E.m(new $r(i, t));
                      Kr("allchat_post_button_clicked");
                      const o = document.getElementById(
                          "tp-allchat-chatbox-input",
                        ),
                        r = o.value;
                      if (!r || r.length > 120)
                        return void La(
                          "Message must be between 1-120 characters",
                        );
                      if (!(null == s ? void 0 : s.signedIn))
                        return void La(
                          "You must be logged in to post to All Chat",
                        );
                      const a =
                        null === (e = null == s ? void 0 : s.currentUser) ||
                        void 0 === e
                          ? void 0
                          : e.handle;
                      a
                        ? yield Ha(n, r, a, o)
                        : n.openSetHandleModal((t) =>
                            Ma(this, void 0, void 0, function* () {
                              (Ga(n, t), t && (yield Ha(n, r, t, o)));
                            }),
                          );
                    });
                  })(n));
              }),
            a &&
              a.addEventListener("click", (t) => {
                (t.stopPropagation(), n.openHelpModal());
              }),
            za());
        }
      }
      class Wa {
        constructor(t) {
          ((this.host = null), (this.onKeyDownRef = null), (this.props = t));
        }
        getCloseSelector() {
          return "#tp-allchat-modal-close";
        }
        open(t) {
          if (!t) return;
          this.host = t;
          const i = this.getHtml(),
            n = this.props.containerStyling
              ? `style="${this.props.containerStyling}"`
              : "";
          ((this.host.innerHTML = `\n      <div id="tp-allchat-modal" class="allchat-modal-container" ${n}>\n        <div id="allchat-modal-content" class="allchat-modal-content">\n          ${i}\n        </div>\n      </div>\n    `),
            this.bindBaseEvents(),
            this.bindInnerEvents());
        }
        close() {
          (this.unbindBaseEvents(), this.host && (this.host.innerHTML = ""));
        }
        destroy() {
          (this.close(), (this.host = null));
        }
        bindBaseEvents() {
          ((this.onKeyDownRef = (t) => {
            ("Escape" !== t.key && "Esc" !== t.key && "Enter" !== t.key) ||
              (t.preventDefault(), this.close());
          }),
            window.addEventListener("keydown", this.onKeyDownRef));
          const t = this.getCloseSelector();
          if (t) {
            const i = document.querySelector(t);
            i &&
              i.addEventListener("click", (t) => {
                (t.stopPropagation(), this.close());
              });
          }
        }
        unbindBaseEvents() {
          this.onKeyDownRef &&
            (window.removeEventListener("keydown", this.onKeyDownRef),
            (this.onKeyDownRef = null));
        }
        setContent(t) {
          const i = document.getElementById("allchat-modal-content");
          i && (i.innerHTML = t);
        }
      }
      var Ya = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const Qa = /^[\w.]+$/;
      class Ja extends Wa {
        constructor() {
          (super(...arguments),
            (this.ID_CLOSE = "tp-allchat-modal-close"),
            (this.ID_SUBMIT = "allchat-change-handle-submit"),
            (this.ID_INPUT = "allchat-change-handle-input"),
            (this.ID_ERROR = "allchat-change-handle-error"),
            (this.ID_STATUS = "allchat-change-handle-status"),
            (this.ID_AVATAR = "allchat-change-handle-avatar"),
            (this.isSubmitting = !1),
            (this.loadFailed = !1));
        }
        open(t) {
          (super.open(t), this.loadAndRender());
        }
        close() {
          if (this.isSubmitting) return;
          const t = this.loadFailed;
          (super.close(),
            this.props.closeModal(),
            t && this.props.onLoadErrorDismiss());
        }
        getHtml() {
          return `\n      <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <div class="allchat-modal-body" style="padding:16px;">Loading…</div>\n      </div>\n    `;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        loadAndRender() {
          var n, s, o, r, a;
          return Ya(this, void 0, void 0, function* () {
            try {
              const u = yield E.m(new $r(i, t)),
                c = ya.getFullIconURL(
                  null === (n = null == u ? void 0 : u.userSettings) ||
                    void 0 === n
                    ? void 0
                    : n.userIcon,
                ),
                h =
                  null !==
                    (o =
                      null === (s = null == u ? void 0 : u.currentUser) ||
                      void 0 === s
                        ? void 0
                        : s.handle) && void 0 !== o
                    ? o
                    : "",
                l = yield E.m(new zr(e, t)),
                d = yield Oe(
                  "handles/me",
                  "GET",
                  !0,
                  void 0,
                  null == l ? void 0 : l.token,
                ),
                p =
                  null !==
                    (a =
                      null === (r = null == d ? void 0 : d.data) || void 0 === r
                        ? void 0
                        : r.changesRemaining) && void 0 !== a
                    ? a
                    : 0;
              (this.setContent(this.getFormHtml(h, p, c)),
                this.bindFormEvents(p));
            } catch (t) {
              (console.error(t),
                (this.loadFailed = !0),
                this.setContent(
                  `\n        <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n          <div style="display:flex; justify-content:flex-end; width:100%;">\n            ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n          </div>\n          <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n            Failed to load profile. Please try again later.\n          </div>\n        </div>\n      `,
                ),
                this.bindLoadErrorEvents());
            }
          });
        }
        bindLoadErrorEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        getFormHtml(t, i, n) {
          const e = t.replace(/"/g, "&quot;"),
            s = i <= 0,
            o = n
              ? `<img src="${n}" alt="Avatar"\n            style="width:100%; height:100%; opacity:0.9; border-radius:50%; object-fit:cover;" />`
              : '<div style="\n            width:100%; height:100%; border-radius:50%;\n            border:2px solid #aaa; color:#aaa;\n            display:flex; align-items:center; justify-content:center;\n            font-size:12px; text-align:center;\n          ">No Profile</div>',
            r = s
              ? "You've used all of your handle changes. Your handle is now permanent."
              : `You have ${i} handle change${1 === i ? "" : "s"} remaining.`;
          return `\n    <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n\n      \x3c!-- Header --\x3e\n      <div style="display:flex; justify-content:flex-end; width:100%;">\n        ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n      </div>\n\n      \x3c!-- Avatar (opens Edit Profile Picture) --\x3e\n      <div id="${this.ID_AVATAR}" style="position:relative; width:100px; height:100px; margin-top:8px; margin-bottom:28px; cursor:pointer;">\n        <div style="\n          width:100px; height:100px;\n          border-radius:50%;\n          overflow:hidden;\n          background:#545454;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n        ">\n          ${o}\n        </div>\n        <div style="\n          position:absolute; bottom:0; right:0;\n          width:32px; height:32px; border-radius:50%;\n          background:#5B6CFF;\n          display:flex; align-items:center; justify-content:center;\n          pointer-events:none;\n        ">\n          ${qr('<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g clip-path="url(#clip0_4816_39661)">\n        <path d="M13.6125 3.71115C13.6019 3.46323 13.5422 3.21988 13.4367 2.99525C13.3312 2.77063 13.1822 2.56921 12.9982 2.4027L10.9024 0.491859C10.532 0.155063 10.0431 -0.021092 9.54292 0.0020177C9.04278 0.0251274 8.57221 0.245615 8.23439 0.615139L7.05552 1.90748C7.03535 1.92508 7.01617 1.94378 6.99808 1.96352C6.98057 1.98313 6.96446 2.00344 6.94905 2.02446L1.86655 7.59938C1.68313 7.80128 1.54508 8.04012 1.46169 8.29983L0.438321 11.5338C0.348806 11.8165 0.327026 12.1163 0.374738 12.409C0.422451 12.7017 0.538319 12.9791 0.712988 13.2187C0.887657 13.4583 1.11623 13.6535 1.38025 13.7886C1.64428 13.9236 1.93635 13.9946 2.23289 13.9959C2.48868 13.9963 2.74192 13.9451 2.97747 13.8453L6.0945 12.5229C6.34472 12.4161 6.56922 12.257 6.75292 12.0564L13.1208 5.07074C13.2888 4.88806 13.4188 4.67378 13.5033 4.44036C13.5877 4.20694 13.6248 3.95906 13.6125 3.71115V3.71115ZM5.72115 11.1136C5.67358 11.1658 5.61528 11.2071 5.55024 11.2347L2.43182 12.56C2.34517 12.5978 2.24946 12.6097 2.1562 12.5943C2.06295 12.5789 1.97613 12.5369 1.90619 12.4733C1.83625 12.4097 1.78618 12.3273 1.76199 12.2359C1.73781 12.1446 1.74055 12.0482 1.76989 11.9583L2.79325 8.72361C2.81472 8.65546 2.85081 8.59283 2.89902 8.54009L7.56545 3.42186L10.3925 5.99253L5.72115 11.1136ZM12.0897 4.12792L11.3332 4.95796L8.50546 2.39009L9.26616 1.55585C9.30962 1.50793 9.36214 1.46909 9.42069 1.44156C9.47924 1.41403 9.54265 1.39836 9.60728 1.39545H9.6304C9.75297 1.39526 9.87118 1.44099 9.96171 1.52363L12.0575 3.43447C12.1055 3.47788 12.1444 3.53037 12.1721 3.5889C12.1997 3.64744 12.2155 3.71087 12.2185 3.77554C12.2215 3.8402 12.2116 3.90482 12.1895 3.96566C12.1674 4.0265 12.1335 4.08236 12.0897 4.13002V4.12792Z" fill="#FAFAFA"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_4816_39661">\n        <rect width="14" height="14" fill="white"/>\n        </clipPath>\n        </defs>\n        </svg>\n        ', a, u, c)}\n        </div>\n      </div>\n\n      \x3c!-- Form --\x3e\n      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">\n        <span class="user-pill-name" style="padding-left:4px; font-size:16px; color:#e0e0e0;">Change Handle</span>\n        <div style="\n          display:flex; align-items:center; gap:2px; background:#1f1f1f;\n          border-radius:4px; padding-left:14px; height:48px; ${s ? "opacity:0.5;" : ""}">\n          <span style="color:white; font-size:18px;">@</span>\n          <input\n            id="${this.ID_INPUT}"\n            type="text"\n            value="${e}"\n            placeholder="username"\n            maxlength="32"\n            autocomplete="off"\n            aria-label="Handle"\n            ${s ? "disabled" : ""}\n            style="flex:1; background:transparent; border:none; outline:none; color:white; font-size:18px; ${s ? "cursor:not-allowed;" : ""}"\n          />\n        </div>\n        <span class="user-pill-name" style="padding-left:4px; font-size:13px; ${s ? "color:#e34248;" : "color:#8a8a8a;"}">${r}</span>\n        <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none;"></span>\n        <span id="${this.ID_STATUS}" class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a; display:none;"></span>\n      </div>\n\n      \x3c!-- Actions --\x3e\n      <div style="display:flex; flex-direction:column; width:100%; margin-top:24px; align-items:center">\n        <button id="${this.ID_SUBMIT}" class="gradient-200-button"\n          ${s ? "disabled" : ""}\n          style="height:48px; border-radius:4px; font-weight:700; cursor:${s ? "not-allowed" : "pointer"}; border:none; outline:none; width:100%; ${s ? "opacity:0.5;" : ""}">\n          Save Changes\n        </button>\n      </div>\n\n    </div>\n    `;
          var a, u, c;
        }
        setError(t) {
          const i = document.getElementById(this.ID_ERROR);
          i && ((i.textContent = t), (i.style.display = t ? "block" : "none"));
        }
        setStatus(t) {
          const i = document.getElementById(this.ID_STATUS);
          i && ((i.textContent = t), (i.style.display = t ? "block" : "none"));
        }
        setSubmitting(t, i, n) {
          ((this.isSubmitting = t),
            (i.disabled = t),
            (n.disabled = t),
            (n.style.opacity = t ? "0.6" : "1"),
            (i.textContent = t ? "Checking handle..." : "Save Changes"),
            (i.style.cursor = t ? "wait" : "pointer"));
          const e = document.getElementById(this.ID_AVATAR);
          (e &&
            ((e.style.pointerEvents = t ? "none" : "auto"),
            (e.style.opacity = t ? "0.6" : "1")),
            this.setStatus(
              t ? "Verifying your handle — this can take a few seconds." : "",
            ));
        }
        bindFormEvents(t) {
          const i = document.getElementById(this.ID_CLOSE),
            n = document.getElementById(this.ID_SUBMIT),
            e = document.getElementById(this.ID_INPUT),
            s = document.getElementById(this.ID_AVATAR);
          (i &&
            i.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            s &&
              s.addEventListener("click", (t) => {
                (t.stopPropagation(),
                  this.isSubmitting ||
                    (super.close(), this.props.onEditAvatarClicked()));
              }),
            t <= 0 ||
              (e &&
                (e.addEventListener("click", (t) => t.stopPropagation()),
                e.addEventListener("keydown", (t) => {
                  (t.stopPropagation(),
                    "Enter" === t.key &&
                      (t.preventDefault(),
                      n && !this.isSubmitting && this.onSubmit(n, e)));
                }),
                e.addEventListener("input", () => this.setError(""))),
              n &&
                e &&
                n.addEventListener("click", (t) =>
                  Ya(this, void 0, void 0, function* () {
                    (t.stopPropagation(), yield this.onSubmit(n, e));
                  }),
                )));
        }
        onSubmit(i, n) {
          return Ya(this, void 0, void 0, function* () {
            if (this.isSubmitting) return;
            const s = n.value.trim().replace(/^@+/, "").toLowerCase();
            if (
              (function (t) {
                return t.length >= 2 && t.length <= 32 && Qa.test(t);
              })(s)
            ) {
              (this.setSubmitting(!0, i, n), this.setError(""));
              try {
                const i = yield E.m(new zr(e, t));
                (yield Oe(
                  "handles",
                  "PUT",
                  !0,
                  { handle: s },
                  null == i ? void 0 : i.token,
                ),
                  E.m(new Zr(e, t, s)),
                  (this.isSubmitting = !1),
                  this.close(),
                  this.props.onHandleChanged(s));
              } catch (t) {
                const e = null == t ? void 0 : t.status;
                (409 === e
                  ? this.setError(
                      "That handle is unavailable or already yours. Try another one.",
                    )
                  : 422 === e
                    ? this.setError(
                        "That handle is inappropriate. Try another one.",
                      )
                    : 400 === e
                      ? this.setError(
                          "That handle isn't valid. Try another one.",
                        )
                      : 403 === e
                        ? this.setError(
                            "You've used all of your handle changes.",
                          )
                        : this.setError(
                            "Something went wrong. Please try again later.",
                          ),
                  this.setSubmitting(!1, i, n));
              }
            } else
              this.setError(
                'Handles must be 2-32 characters and use only letters, numbers, "." or "_".',
              );
          });
        }
      }
      class Ka extends $ {
        constructor(t, i, n) {
          (super(t, i, S.UPDATE_USER_SETTINGS), (this.data = n));
        }
      }
      var qa = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class Xa extends Wa {
        constructor() {
          (super(...arguments),
            (this.ID_CLOSE = "tp-allchat-modal-close"),
            (this.ID_CANCEL = "allchat-edit-picture-cancel"),
            (this.ID_SAVE = "allchat-edit-picture-save"),
            (this.ID_UPLOAD = "allchat-edit-picture-upload"),
            (this.ID_UPLOAD_INPUT = "allchat-edit-picture-upload-input"),
            (this.ID_PREVIEW = "allchat-edit-picture-preview"),
            (this.ID_AVATAR_GRID = "allchat-edit-picture-avatar-grid"),
            (this.ID_PREV_PAGE = "allchat-edit-picture-prev-page"),
            (this.ID_NEXT_PAGE = "allchat-edit-picture-next-page"),
            (this.ID_PAGE_LABEL = "allchat-edit-picture-page-label"),
            (this.ID_ERROR = "allchat-edit-picture-error"),
            (this.selectedIcon = Da[0]),
            (this.selectedUpload = null),
            (this.uploadPreviewUrl = null),
            (this.currentPage = 0),
            (this.loadFailed = !1));
        }
        open(t) {
          (super.open(t), this.loadAndRender());
        }
        close() {
          var t, i;
          this.revokeUploadPreviewUrl();
          const n = this.loadFailed;
          (super.close(),
            n
              ? null === (i = (t = this.props).onLoadErrorDismiss) ||
                void 0 === i ||
                i.call(t)
              : this.props.closeModal());
        }
        getHtml() {
          return `\n            <div style="display:flex; flex-direction:column; width:520px; padding:30px 34px;">\n                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">\n                    <span style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">Edit Profile Picture</span>\n                    ${ia(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                </div>\n                <div class="allchat-modal-body" style="padding:36px 0; text-align:center;">Loading...</div>\n            </div>\n        `;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        loadAndRender() {
          var n;
          return qa(this, void 0, void 0, function* () {
            try {
              const e = yield E.m(new $r(i, t)),
                s =
                  null === (n = null == e ? void 0 : e.userSettings) ||
                  void 0 === n
                    ? void 0
                    : n.userIcon;
              this.selectedIcon = s || Da[0];
              const o =
                (s ? ya.getFullIconURL(s) : void 0) ||
                s ||
                chrome.runtime.getURL("img/icons/" + this.selectedIcon);
              ((this.currentPage = this.getPageForIcon(this.selectedIcon)),
                this.setContent(this.getFormHtml(o)),
                this.bindFormEvents());
            } catch (t) {
              (console.error(t),
                (this.loadFailed = !0),
                this.setContent(
                  `\n                <div style="display:flex; flex-direction:column; width:100%; align-items:center;">\n                    <div style="display:flex; justify-content:flex-end; width:100%;">\n                        ${ia(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                    </div>\n                    <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n                        Failed to load profile picture. Please try again later.\n                    </div>\n                </div>\n            `,
                ),
                this.bindLoadErrorEvents());
            }
          });
        }
        bindLoadErrorEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        getFormHtml(t) {
          return `\n            <div style="display:flex; flex-direction:column; width:520px; padding:30px 34px;">\n                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">\n                    <span style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">Edit Profile Picture</span>\n                    ${ia(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                </div>\n\n                <div style="display:flex; justify-content:center; margin-top:26px;">\n                    <div style="width:112px; height:112px; border-radius:50%; overflow:hidden; background:#8b92a3;">\n                        <img id="${this.ID_PREVIEW}" src="${t}" alt="Selected avatar" style="width:100%; height:100%; object-fit:cover; display:block;" />\n                    </div>\n                </div>\n\n                <span style="margin-top:28px; color:#b9b9c2; font-size:17px; font-weight:400;">Choose an avatar</span>\n\n                <div style="display:flex; align-items:center; gap:12px; margin-top:18px; width:100%;">\n                    <button id="${this.ID_PREV_PAGE}" type="button" aria-label="Previous avatars" style="\n                        width:34px; height:76px; border-radius:10px; border:1px solid #4f515c;\n                        background:#151515; color:#ffffff; font-size:22px; cursor:pointer;\n                    ">&lsaquo;</button>\n\n                    <div style="flex:1; overflow:hidden;">\n                        <div id="${this.ID_AVATAR_GRID}" style="\n                            display:grid; grid-template-columns:repeat(5, 64px); justify-content:space-between; row-gap:14px;\n                            transition: opacity 160ms ease, transform 160ms ease;\n                            opacity:1; transform:translateX(0);\n                        ">\n                        ${this.getAvatarGridHtml()}\n                        </div>\n                    </div>\n\n                    <button id="${this.ID_NEXT_PAGE}" type="button" aria-label="Next avatars" style="\n                        width:34px; height:76px; border-radius:10px; border:1px solid #4f515c;\n                        background:#151515; color:#ffffff; font-size:22px; cursor:pointer;\n                    ">&rsaquo;</button>\n                </div>\n                <span id="${this.ID_PAGE_LABEL}" style="align-self:center; margin-top:10px; color:#8f9099; font-size:13px; font-weight:500;">\n                    ${this.getPageLabel()}\n                </span>\n\n                <button id="${this.ID_UPLOAD}" type="button" style="\n                    margin-top:24px; width:100%; height:54px; border-radius:14px;\n                    border:2px solid #5e606b; background:transparent; color:#ffffff;\n                    display:flex; align-items:center; justify-content:center; gap:14px;\n                    font-size:18px; font-weight:700; cursor:pointer;\n                ">\n                    <span aria-hidden="true" style="font-size:18px;">&#x2B06;&#xFE0F;</span>\n                    <span>Upload your own picture</span>\n                </button>\n                <input id="${this.ID_UPLOAD_INPUT}" type="file" accept="image/png,image/jpeg,image/webp,image/gif" style="display:none;" />\n\n                <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none; margin-top:12px;"></span>\n\n                <button id="${this.ID_SAVE}" class="gradient-200-button" type="button" style="\n                    margin-top:22px; width:100%; height:56px; border-radius:14px;\n                    border:none; color:#ffffff; font-size:18px; font-weight:700; cursor:pointer;\n                ">Save</button>\n\n                <button id="${this.ID_CANCEL}" type="button" style="\n                    align-self:center; margin-top:18px; border:none; background:transparent;\n                    color:#b9b9c2; font-size:16px; font-weight:600; cursor:pointer;\n                ">Cancel</button>\n            </div>\n        `;
        }
        getAvatarButtonHtml(t) {
          return `\n            <button type="button" class="allchat-edit-picture-avatar" data-icon="${t}" aria-label="Choose avatar" style="\n                width:64px; height:64px; border-radius:50%; background:#1f1f1f;\n                border:${t === this.selectedIcon ? "4px solid #ffffff" : "2px solid transparent"};\n                outline:none; cursor:pointer; padding:4px; overflow:hidden;\n            ">\n                <img src="${chrome.runtime.getURL("img/icons/" + t)}" alt="" style="width:100%; height:100%; object-fit:contain; display:block;" />\n            </button>\n        `;
        }
        get totalPages() {
          return Math.max(1, Math.ceil(Da.length / 10));
        }
        getPageForIcon(t) {
          const i = Da.indexOf(t);
          return i < 0 ? 0 : Math.floor(i / 10);
        }
        getVisibleIcons() {
          const t = 10 * this.currentPage;
          return Da.slice(t, t + 10);
        }
        getAvatarGridHtml() {
          return this.getVisibleIcons()
            .map((t) => this.getAvatarButtonHtml(t))
            .join("");
        }
        getPageLabel() {
          return `${this.currentPage + 1}/${this.totalPages}`;
        }
        setError(t) {
          const i = document.getElementById(this.ID_ERROR);
          i && ((i.textContent = t), (i.style.display = t ? "block" : "none"));
        }
        setPreview(t, i = t) {
          (this.revokeUploadPreviewUrl(),
            (this.selectedIcon = t),
            (this.selectedUpload = null));
          const n = document.getElementById(this.ID_PREVIEW);
          (n && (n.src = i),
            document
              .querySelectorAll(".allchat-edit-picture-avatar")
              .forEach((i) => {
                const n = i.dataset.icon === t;
                i.style.border = n
                  ? "4px solid #ffffff"
                  : "2px solid transparent";
              }));
        }
        setUploadPreview(t, i) {
          this.selectedUpload = t;
          const n = document.getElementById(this.ID_PREVIEW);
          (n && (n.src = i),
            document
              .querySelectorAll(".allchat-edit-picture-avatar")
              .forEach((t) => {
                t.style.border = "2px solid transparent";
              }));
        }
        revokeUploadPreviewUrl() {
          this.uploadPreviewUrl &&
            (URL.revokeObjectURL(this.uploadPreviewUrl),
            (this.uploadPreviewUrl = null));
        }
        bindFormEvents() {
          this.bindInnerEvents();
          const t = document.getElementById(this.ID_CANCEL),
            i = document.getElementById(this.ID_SAVE),
            n = document.getElementById(this.ID_UPLOAD),
            e = document.getElementById(this.ID_UPLOAD_INPUT),
            s = document.getElementById(this.ID_PREV_PAGE),
            o = document.getElementById(this.ID_NEXT_PAGE);
          (null == t ||
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            this.bindAvatarButtons(),
            null == s ||
              s.addEventListener("click", (t) => {
                (t.stopPropagation(),
                  this.setAvatarPage(this.currentPage - 1, -1));
              }),
            null == o ||
              o.addEventListener("click", (t) => {
                (t.stopPropagation(),
                  this.setAvatarPage(this.currentPage + 1, 1));
              }),
            null == n ||
              n.addEventListener("click", (t) => {
                (t.stopPropagation(), null == e || e.click());
              }),
            null == e ||
              e.addEventListener("change", () => {
                var t;
                const i =
                  null === (t = e.files) || void 0 === t ? void 0 : t[0];
                if (i) {
                  if (!i.type.startsWith("image/"))
                    return (
                      this.setError("Please choose a valid image file."),
                      void (e.value = "")
                    );
                  (this.revokeUploadPreviewUrl(),
                    (this.uploadPreviewUrl = URL.createObjectURL(i)),
                    this.setError(""),
                    this.setUploadPreview(i, this.uploadPreviewUrl));
                }
              }),
            null == i ||
              i.addEventListener("click", (t) =>
                qa(this, void 0, void 0, function* () {
                  (t.stopPropagation(), yield this.onSave(i));
                }),
              ));
        }
        bindAvatarButtons() {
          document
            .querySelectorAll(".allchat-edit-picture-avatar")
            .forEach((t) => {
              t.addEventListener("click", (i) => {
                i.stopPropagation();
                const n = t.dataset.icon;
                n &&
                  (this.setError(""),
                  this.setPreview(n, chrome.runtime.getURL("img/icons/" + n)));
              });
            });
        }
        setAvatarPage(t, i) {
          this.currentPage = (t + this.totalPages) % this.totalPages;
          const n = document.getElementById(this.ID_AVATAR_GRID);
          n &&
            ((n.style.opacity = "0"),
            (n.style.transform = `translateX(${-18 * i}px)`),
            window.setTimeout(() => {
              ((n.innerHTML = this.getAvatarGridHtml()),
                (n.style.transition = "none"),
                (n.style.transform = `translateX(${18 * i}px)`),
                window.requestAnimationFrame(() => {
                  ((n.style.transition =
                    "opacity 160ms ease, transform 160ms ease"),
                    (n.style.opacity = "1"),
                    (n.style.transform = "translateX(0)"));
                }),
                this.bindAvatarButtons());
            }, 160));
          const e = document.getElementById(this.ID_PAGE_LABEL);
          e && (e.textContent = this.getPageLabel());
        }
        onSave(i) {
          return qa(this, void 0, void 0, function* () {
            ((i.disabled = !0),
              (i.textContent = "Saving..."),
              this.setError(""));
            try {
              let i = this.selectedIcon;
              if (this.selectedUpload) {
                const n = yield E.m(new zr(e, t)),
                  s = new FormData();
                s.append("profilePicture", this.selectedUpload);
                i = `/${yield Oe("upload-profile", "POST", !0, s, null == n ? void 0 : n.token)}?lastmod=${Date.now()}`;
              }
              (yield E.m(new Ka(e, t, { userIcon: i })),
                this.close(),
                this.props.onProfilePictureChanged());
            } catch (t) {
              (console.error(t),
                this.setError("Something went wrong. Please try again later."),
                (i.disabled = !1),
                (i.textContent = "Save"));
            }
          });
        }
      }
      var tu = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const iu = /^[\w.]+$/;
      class nu extends Wa {
        constructor() {
          (super(...arguments),
            (this.ID_CLOSE = "tp-allchat-modal-close"),
            (this.ID_SUBMIT = "allchat-set-handle-submit"),
            (this.ID_INPUT = "allchat-set-handle-input"),
            (this.ID_ERROR = "allchat-set-handle-error"),
            (this.ID_STATUS = "allchat-set-handle-status"),
            (this.isSubmitting = !1),
            (this.loadFailed = !1));
        }
        open(t) {
          (super.open(t), this.loadAndRender());
        }
        close() {
          if (this.isSubmitting) return;
          const t = this.loadFailed;
          (super.close(),
            this.props.closeModal(),
            t && this.props.onLoadErrorDismiss());
        }
        getHtml() {
          return `\n      <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <div class="allchat-modal-body" style="padding:16px;">Loading…</div>\n      </div>\n    `;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        loadAndRender() {
          var n, s;
          return tu(this, void 0, void 0, function* () {
            try {
              const o = yield E.m(new $r(i, t, !0)),
                r =
                  null === (n = null == o ? void 0 : o.currentUser) ||
                  void 0 === n
                    ? void 0
                    : n.handle;
              if (r)
                return (
                  E.m(new Zr(e, t, r)),
                  this.close(),
                  void this.props.onHandleSet(r)
                );
              const a = ya.getFullIconURL(
                null === (s = null == o ? void 0 : o.userSettings) ||
                  void 0 === s
                  ? void 0
                  : s.userIcon,
              );
              (this.setContent(this.getFormHtml(a)), this.bindFormEvents());
            } catch (t) {
              (console.error(t),
                (this.loadFailed = !0),
                this.setContent(
                  `\n        <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n          <div style="display:flex; justify-content:flex-end; width:100%;">\n            ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n          </div>\n          <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n            Failed to load profile. Please try again later.\n          </div>\n        </div>\n      `,
                ),
                this.bindLoadErrorEvents());
            }
          });
        }
        bindLoadErrorEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        getFormHtml(t) {
          const i = t
            ? `<img src="${t}" alt="Avatar"\n            style="width:100%; height:100%; opacity:0.9; border-radius:50%; object-fit:cover;" />`
            : '<div style="\n            width:100%; height:100%; border-radius:50%;\n            border:2px solid #aaa; color:#aaa;\n            display:flex; align-items:center; justify-content:center;\n            font-size:12px; text-align:center;\n          ">No Profile</div>';
          return `\n    <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n\n      \x3c!-- Header --\x3e\n      <div style="display:flex; justify-content:flex-end; width:100%;">\n        ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n      </div>\n\n      \x3c!-- Avatar --\x3e\n      <div style="position:relative; width:100px; height:100px; margin-top:8px; margin-bottom:28px;">\n        <div style="\n          width:100px; height:100px;\n          border-radius:50%;\n          overflow:hidden;\n          background:#545454;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n        ">\n          ${i}\n        </div>\n      </div>\n\n      \x3c!-- Form --\x3e\n      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">\n        <span class="user-pill-name" style="padding-left:4px; font-size:16px; color:#e0e0e0;">Choose your Handle</span>\n        <div style="\n          display:flex; align-items:center; gap:2px; background:#1f1f1f;\n          border-radius:4px; padding-left:14px; height:48px;">\n          <span style="color:white; font-size:18px;">@</span>\n          <input\n            id="${this.ID_INPUT}"\n            type="text"\n            placeholder="username"\n            maxlength="32"\n            autocomplete="off"\n            aria-label="Handle"\n            style="flex:1; background:transparent; border:none; outline:none; color:white; font-size:18px;"\n          />\n        </div>\n        <span class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a;">\n          You can change your handle up to 3 times after this, so choose wisely.\n        </span>\n        <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none;"></span>\n        <span id="${this.ID_STATUS}" class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a; display:none;"></span>\n      </div>\n\n      \x3c!-- Actions --\x3e\n      <div style="display:flex; flex-direction:column; width:100%; margin-top:24px; align-items:center">\n        <button id="${this.ID_SUBMIT}" class="gradient-200-button"\n          style="height:48px; border-radius:4px; font-weight:700; cursor:pointer; border:none; outline:none; width:100%">\n          Submit\n        </button>\n      </div>\n\n    </div>\n    `;
        }
        setError(t) {
          const i = document.getElementById(this.ID_ERROR);
          i && ((i.textContent = t), (i.style.display = t ? "block" : "none"));
        }
        setStatus(t) {
          const i = document.getElementById(this.ID_STATUS);
          i && ((i.textContent = t), (i.style.display = t ? "block" : "none"));
        }
        setSubmitting(t, i, n) {
          ((this.isSubmitting = t),
            (i.disabled = t),
            (n.disabled = t),
            (n.style.opacity = t ? "0.6" : "1"),
            (i.textContent = t ? "Checking handle..." : "Submit"),
            (i.style.cursor = t ? "wait" : "pointer"),
            this.setStatus(
              t ? "Verifying your handle — this can take a few seconds." : "",
            ));
        }
        bindFormEvents() {
          const t = document.getElementById(this.ID_CLOSE),
            i = document.getElementById(this.ID_SUBMIT),
            n = document.getElementById(this.ID_INPUT);
          (t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            n &&
              (n.addEventListener("click", (t) => t.stopPropagation()),
              n.addEventListener("keydown", (t) => {
                (t.stopPropagation(),
                  "Enter" === t.key &&
                    (t.preventDefault(),
                    i && !this.isSubmitting && this.onSubmit(i, n)));
              }),
              n.addEventListener("input", () => this.setError(""))),
            i &&
              n &&
              i.addEventListener("click", (t) =>
                tu(this, void 0, void 0, function* () {
                  (t.stopPropagation(), yield this.onSubmit(i, n));
                }),
              ));
        }
        onSubmit(i, n) {
          return tu(this, void 0, void 0, function* () {
            if (this.isSubmitting) return;
            const s = n.value.trim().replace(/^@+/, "").toLowerCase();
            if (
              !(function (t) {
                return t.length >= 2 && t.length <= 32 && iu.test(t);
              })(s)
            )
              return void this.setError(
                'Handles must be 2-32 characters and use only letters, numbers, "." or "_".',
              );
            let o;
            (this.setSubmitting(!0, i, n), this.setError(""));
            try {
              const i = yield E.m(new zr(e, t));
              ((o = null == i ? void 0 : i.token),
                yield Oe("handles", "POST", !0, { handle: s }, o),
                E.m(new Zr(e, t, s)),
                (this.isSubmitting = !1),
                this.close(),
                this.props.onHandleSet(s));
            } catch (s) {
              const r = null == s ? void 0 : s.status,
                a = (function (t) {
                  try {
                    const i =
                      "string" == typeof (null == t ? void 0 : t.message)
                        ? JSON.parse(t.message)
                        : null == t
                          ? void 0
                          : t.message;
                    if ("string" == typeof (null == i ? void 0 : i.data))
                      return i.data;
                    if ("string" == typeof i) return i;
                  } catch (t) {}
                  return "string" == typeof (null == t ? void 0 : t.message)
                    ? t.message
                    : "";
                })(s);
              if (409 === r) {
                const i = yield this.recoverExistingHandle(o);
                if (i || /already set/i.test(a)) {
                  if (i)
                    return (
                      E.m(new Zr(e, t, i)),
                      (this.isSubmitting = !1),
                      this.close(),
                      void this.props.onHandleSet(i)
                    );
                  this.setError(
                    "You already have a handle. Close and try again.",
                  );
                } else
                  this.setError(
                    "That handle is already taken. Try another one.",
                  );
              } else
                422 === r
                  ? this.setError(
                      "That handle is inappropriate. Try another one.",
                    )
                  : 400 === r
                    ? this.setError("That handle isn't valid. Try another one.")
                    : this.setError(
                        "Something went wrong. Please try again later.",
                      );
              this.setSubmitting(!1, i, n);
            }
          });
        }
        recoverExistingHandle(t) {
          var i;
          return tu(this, void 0, void 0, function* () {
            try {
              const n = yield Oe("handles/me", "GET", !0, void 0, t);
              return (
                (null === (i = null == n ? void 0 : n.data) || void 0 === i
                  ? void 0
                  : i.handle) || void 0
              );
            } catch (t) {
              return;
            }
          });
        }
      }
      class eu extends Wa {
        constructor() {
          (super(...arguments),
            (this.CONTINUE_ID = "allchat-help-modal-continue"),
            (this.TOGGLE_ID = "allchat-help-modal-toggle"),
            (this.CLOSE_ID = "tp-allchat-modal-close"));
        }
        getCloseSelector() {
          return `#${this.CLOSE_ID}`;
        }
        open(t) {
          super.open(t);
        }
        close() {
          (super.close(), this.props.closeModal());
        }
        getHtml() {
          const t = this.props.getLiveChatShowing(),
            i = t ? "Disable All Chat" : "Enable All Chat",
            n = t ? "allchat-toggle--disable" : "allchat-toggle--enable";
          return `\n    <div style="\n      display:flex; flex-direction:column; width:470px; height:600px;\n      position:relative; overflow:hidden; background-color:rgba(0,0,0,0.9);\n      font-family:'Poppins', sans-serif; padding-bottom:76px; box-sizing:border-box;\n    ">\n      <div style="display:flex; padding-bottom:6px; flex-direction:row; align-items:center; justify-content:space-between; width:100%;">\n        <div style="display:flex; flex-direction:row; align-items:center">\n          <span class="allchat-modal-header" style="margin-right:8px;">Introducing All Chat</span>\n          ${qr('<svg width="45" height="19" viewBox="0 0 45 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="45" height="19" rx="9.5" fill="#FBC45A"/>\n            <path d="M13.58 9.704C14.052 9.792 14.44 10.028 14.744 10.412C15.048 10.796 15.2 11.236 15.2 11.732C15.2 12.18 15.088 12.576 14.864 12.92C14.648 13.256 14.332 13.52 13.916 13.712C13.5 13.904 13.008 14 12.44 14H8.828V5.624H12.284C12.852 5.624 13.34 5.716 13.748 5.9C14.164 6.084 14.476 6.34 14.684 6.668C14.9 6.996 15.008 7.368 15.008 7.784C15.008 8.272 14.876 8.68 14.612 9.008C14.356 9.336 14.012 9.568 13.58 9.704ZM10.508 9.08H12.044C12.444 9.08 12.752 8.992 12.968 8.816C13.184 8.632 13.292 8.372 13.292 8.036C13.292 7.7 13.184 7.44 12.968 7.256C12.752 7.072 12.444 6.98 12.044 6.98H10.508V9.08ZM12.2 12.632C12.608 12.632 12.924 12.536 13.148 12.344C13.38 12.152 13.496 11.88 13.496 11.528C13.496 11.168 13.376 10.888 13.136 10.688C12.896 10.48 12.572 10.376 12.164 10.376H10.508V12.632H12.2ZM18.2189 6.98V9.08H21.0389V10.412H18.2189V12.632H21.3989V14H16.5389V5.612H21.3989V6.98H18.2189ZM28.6257 5.624V6.98H26.3937V14H24.7137V6.98H22.4817V5.624H28.6257ZM34.9874 12.404H31.6514L31.0994 14H29.3354L32.3474 5.612H34.3034L37.3154 14H35.5394L34.9874 12.404ZM34.5314 11.06L33.3194 7.556L32.1074 11.06H34.5314Z" fill="#050505"/>\n        </svg>\n        ', e, s)}\n        </div>\n        ${ia(this.CLOSE_ID, "cursor: pointer !important;")}\n      </div>\n\n      <span class="allchat-modal-body" style="color:#a0a0a0; margin-top:6px;">\n        Teleparty All Chat is a beta feature that allows viewers to engage with each other by leaving short comments on videos they watch.\n      </span>\n\n      <div class="allchat-scrollbox" style="\n        display:flex; flex-direction:column; background-color:#282828; padding:16px; margin-top:20px;\n        flex:1 1 auto; overflow-y:auto; border-radius:8px;\n      ">\n        <img style="margin-bottom:20px; max-width:100%; height:auto;" src="${chrome.runtime.getURL("img/allchat_comment.png")}" />\n\n        <span class="allchat-modal-subheader">How do I turn this feature on/off?</span>\n        <span class="allchat-modal-body">\n          To disable All Chat, press the ${na("", "width: 26px; height: 26px; transform: translateY(25%);")} button on the top right of the video.\n          To enable it, press ${ea("", "width: 26px; height: 26px; transform: translateY(25%);")}.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">How do I add a comment to the video?</span>\n        <span class="allchat-modal-body">\n          To add comments to the video, sign in to teleparty and press the ${sa("", "width: 26px; height: 26px; transform: translateY(25%);")} button on the top right of the video.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">Who sees these comments?</span>\n        <span class="allchat-modal-body">\n          Comments are shown to <span style="font-weight:700">all Teleparty users</span>. This chat is global unlike the typical Teleparty chat.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">Will I see comments when I'm not in a party?</span>\n        <span class="allchat-modal-body">\n          Yes, comments are shown whenever allchat is enabled, including when you are not in a party. By default, allchat is turned off.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">When will my comments show up for other users?</span>\n        <span class="allchat-modal-body">\n          Comments will show up for other users after about a minute.\n        </span>\n      </div>\n\n      <div style="\n        position:absolute; left:0; right:0; bottom:0;\n        display:flex; flex-direction:row; gap:10px; align-items:stretch;\n        padding:6px; background-color:rgba(0,0,0,0.9);\n        border-top:1px solid rgba(255,255,255,0.08);\n      ">\n        <span id="${this.TOGGLE_ID}" class="allchat-toggle-btn ${n}">${i}</span>\n        <span id="${this.CONTINUE_ID}" class="gradient-200-button" style="\n          flex:1 1 0; display:inline-flex; align-items:center; justify-content:center; white-space:nowrap;\n        ">Continue</span>\n      </div>\n    </div>`;
          var e, s;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.CONTINUE_ID),
            i = document.getElementById(this.TOGGLE_ID);
          (t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            i &&
              i.addEventListener("click", (t) => {
                (t.stopPropagation(), this.props.toggleLiveChat());
                this.props.getLiveChatShowing()
                  ? (i.classList.remove("allchat-toggle--enable"),
                    i.classList.add("allchat-toggle--disable"),
                    (i.textContent = "Disable All Chat"))
                  : (i.classList.remove("allchat-toggle--disable"),
                    i.classList.add("allchat-toggle--enable"),
                    (i.textContent = "Enable All Chat"));
              }));
        }
      }
      const su = [
          "Messages should be relevant to the content and must not contain spoilers, spam, or advertisements",
          "Messages must not be rude, inappropriate, or hateful",
          "Messages are shown to ALL Teleparty users, not just those in your current party if you are in one",
        ],
        ou = [
          {
            id: "ac-guideline-1",
            text: "I agree that my message is relevant to the content and does not contain spoilers, spam, or advertisements",
          },
          {
            id: "ac-guideline-2",
            text: "I agree that my message is not rude, inappropriate, or hateful",
          },
          {
            id: "ac-guideline-3",
            text: "I understand that my message will be shown to ALL Teleparty users, not just those in my current party if I am in one",
          },
        ];
      class ru extends Wa {
        constructor() {
          (super(...arguments),
            (this.ID_CLOSE = "tp-allchat-guidelines-close"),
            (this.ID_CANCEL = "tp-allchat-modal-cancel-btn"),
            (this.ID_CONFIRM = "tp-allchat-confirm-post"),
            (this.ID_ERROR = "tp-allchat-guidelines-modal-error"));
        }
        getCloseSelector() {
          return this.props.viewOnly ? `#${this.ID_CLOSE}` : null;
        }
        close() {
          (super.close(), this.props.closeModal());
        }
        checkboxHtml(t, i) {
          var n;
          return `\n      <label for="${i}" style="display:flex; align-items:center; margin-bottom:8px;">\n        <input type="checkbox" id="${i}" data-teleparty-guidelines="true" ${(null === (n = this.props.boxesChecked) || void 0 === n ? void 0 : n.includes(i)) ? "checked" : ""} style="margin-right:8px;" />\n        <span class="allchat-checkbox-text">${t}</span>\n      </label>\n    `;
        }
        getHtml() {
          if (this.props.viewOnly) {
            const t = su
              .map(
                (t) =>
                  `\n        <div style="display:flex; gap:10px; align-items:flex-start; margin-bottom:12px;">\n          <span style="color:#e34248; font-weight:700; line-height:1.4;">•</span>\n          <span class="allchat-checkbox-text" style="line-height:1.4;">${t}</span>\n        </div>\n      `,
              )
              .join("");
            return `\n      <div style="display:flex; flex-direction:column; width:470px;">\n        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">\n          <span class="allchat-modal-header">Community Guidelines</span>\n          ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <span class="allchat-modal-body" style="margin-bottom:16px;">\n          Please keep All Chat kind and on-topic. Messages that break these rules may be removed.\n        </span>\n        <div style="display:flex; flex-direction:column; margin-bottom:20px;">\n          ${t}\n        </div>\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          <span id="${this.ID_CANCEL}" class="gradient-200-button">Got it</span>\n        </div>\n      </div>\n    `;
          }
          return `\n      <div style="display:flex; flex-direction:column; width:470px;">\n        <span class="allchat-modal-header" style="margin-bottom:4px;">Community Guidelines</span>\n        <span class="allchat-modal-body">Please agree to the following community guidelines before commenting:</span>\n\n        <div style="display:flex; flex-direction:column; gap:8px; margin-top:20px; margin-bottom:20px;">\n          ${ou.map((t) => this.checkboxHtml(t.text, t.id)).join("")}\n          <span class="allchat-error-text" id="${this.ID_ERROR}"></span>\n        </div>\n\n        <div style="display:flex; flex-direction:row; align-items:center; justify-content:right; width:100%;">\n          <span id="${this.ID_CANCEL}" class="allchat-chatbox-button" style="font-weight:600; margin-right:16px; font-size:16px;">Cancel</span>\n          <span id="${this.ID_CONFIRM}" class="gradient-200-button">Post Comment</span>\n        </div>\n      </div>\n    `;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.ID_CLOSE),
            i = document.getElementById(this.ID_CANCEL),
            n = document.getElementById(this.ID_CONFIRM);
          if (
            (t &&
              t.addEventListener("click", (t) => {
                (t.stopPropagation(), this.close());
              }),
            i &&
              i.addEventListener("click", (t) => {
                var i, n;
                (t.stopPropagation(),
                  this.props.viewOnly ||
                    null === (n = (i = this.props).onCancel) ||
                    void 0 === n ||
                    n.call(i),
                  this.close());
              }),
            n &&
              !this.props.viewOnly &&
              n.addEventListener("click", (t) => {
                var i, n;
                t.stopPropagation();
                const e = document.querySelectorAll(
                  'input[type="checkbox"][data-teleparty-guidelines="true"]',
                );
                if (Array.from(e).every((t) => t.checked))
                  (null === (n = (i = this.props).onAgree) ||
                    void 0 === n ||
                    n.call(i),
                    this.close());
                else {
                  const t = document.getElementById(this.ID_ERROR);
                  t &&
                    (t.textContent =
                      "Please agree to all guidelines before posting");
                }
              }),
            !this.props.viewOnly)
          ) {
            document
              .querySelectorAll(
                'input[type="checkbox"][data-teleparty-guidelines="true"]',
              )
              .forEach((t) => {
                t.addEventListener("change", () => {
                  var i, n;
                  null === (n = (i = this.props).onToggleBox) ||
                    void 0 === n ||
                    n.call(i, t.id, t.checked);
                });
              });
          }
        }
      }
      function au(t, i, n) {
        const e = i ? ` id="${i}"` : "";
        let s = (null != n ? n : "").trim();
        return (
          s && !s.endsWith(";") && (s += ";"),
          (s += "pointer-events:auto!important;"),
          t.replace("<svg ", `<svg${e} style="${s}" `)
        );
      }
      function uu(t, i) {
        const n = `tpLogo${Math.random().toString(36).slice(2, 9)}`;
        return au(
          `<svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <mask id="${n}Mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">\n            <path d="M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z" fill="#EF3E3A"/>\n            <path d="M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z" fill="#EF3E3A"/>\n            </mask>\n            <g mask="url(#${n}Mask)">\n            <rect width="33" height="33" fill="url(#${n}Grad)"/>\n            </g>\n            <defs>\n            <linearGradient id="${n}Grad" x1="0" y1="0" x2="37.984" y2="7.39309" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#E34248"/>\n            <stop offset="1" stop-color="#9E55A0"/>\n            </linearGradient>\n            </defs>\n        </svg>`,
          t,
          i,
        );
      }
      function cu(t, i) {
        return au(
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.6"/>\n            <path d="M8.5 14c1.1 1.2 2.6 1.8 3.5 1.8s2.4-.6 3.5-1.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>\n            <circle cx="9.2" cy="10.2" r="1" fill="currentColor"/>\n            <circle cx="14.8" cy="10.2" r="1" fill="currentColor"/>\n        </svg>',
          t,
          i,
        );
      }
      class hu extends Wa {
        constructor() {
          (super(...arguments),
            (this.CLOSE_ID = "tp-floating-help-close"),
            (this.CONTINUE_ID = "tp-floating-help-continue"),
            (this.FEEDBACK_ID = "tp-floating-help-feedback"));
        }
        getCloseSelector() {
          return `#${this.CLOSE_ID}`;
        }
        close() {
          (super.close(), this.props.closeModal());
        }
        getHtml() {
          return `\n    <div class="tp-floating-help">\n      <div class="tp-floating-help-header">\n        <div class="tp-floating-help-brand">\n          <span class="tp-floating-help-logo" aria-hidden="true">${uu()}</span>\n          <div class="tp-floating-help-titles">\n            <span class="tp-floating-help-title">All Chat</span>\n            <span class="tp-floating-help-badge">Beta</span>\n          </div>\n        </div>\n        ${ia(this.CLOSE_ID, "cursor: pointer !important;")}\n      </div>\n\n      <p class="tp-floating-help-lede">\n        Timed comments from Teleparty viewers — not a live chat. Comments appear when the video reaches the moment they were left.\n      </p>\n\n      <div class="tp-floating-help-steps">\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">1</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Open the panel</span>\n            <span class="tp-floating-help-step-text">\n              Tap <strong>Chat</strong> at the top left when Netflix controls are visible. The button hides with the controls; an open panel stays up.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">2</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Watch comments appear</span>\n            <span class="tp-floating-help-step-text">\n              Like a Twitch VOD: comments unlock as playback reaches their timestamp. Scrubbing back hides later ones.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">3</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Leave your mark</span>\n            <span class="tp-floating-help-step-text">\n              Log in, choose a handle, then post. Comments are global for Teleparty users — not just people in your party.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-note">\n          All Chat hides while you’re in a Teleparty. Leave the party to use it again.\n        </div>\n      </div>\n\n      <div class="tp-floating-help-footer">\n        <a\n          id="${this.FEEDBACK_ID}"\n          class="tp-floating-help-feedback"\n          href="https://docs.google.com/forms/d/e/1FAIpQLSeJORvFwSNAYhsCLd94YLUOn5s7y_aGezl89slmbM6LZFPPvw/viewform?usp=publish-editor"\n          target="_blank"\n          rel="noopener noreferrer"\n        >Leave feedback</a>\n        <button type="button" id="${this.CONTINUE_ID}" class="tp-floating-help-continue">Got it</button>\n      </div>\n    </div>`;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.CONTINUE_ID);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
          const i = document.getElementById(this.FEEDBACK_ID);
          i && i.addEventListener("click", (t) => t.stopPropagation());
        }
      }
      function lu(t) {
        var i;
        const n = t.containerStyling ? `style="${t.containerStyling}"` : "",
          e = Qr(null !== (i = t.flair) && void 0 !== i ? i : "");
        return `\n        <div id="tp-allchat-live-feed" class="live-feed-container" ${n}>\n            ${t.flair ? `<div style="position: absolute; top: 0; right: 0; transform: translate(60%, -40%)" id="tp-flair-container">\n                            <img src=${e.gifSrc} alt=${t.flair} width="48 height="48"/>\n                        </div>` : ""}\n            <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-between; align-items: center">\n                ${qr('\n        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g opacity="0.2">\n            <mask id="mask0_1785_27357" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">\n            <path d="M9.59808 3.61537V0.416016H0V3.61537H3.19936V12.416H6.39872V3.61537H9.59808Z" fill="#EF3E3A"/>\n            <path d="M11.5997 4.41602C9.16894 4.41602 7.19936 6.38559 7.19936 8.81634V15.6154H10.3987V13.0501C10.7798 13.159 11.1833 13.2167 11.5997 13.2167C14.0304 13.2167 16 11.2471 16 8.81634C16 6.38559 14.0272 4.41602 11.5997 4.41602ZM11.5997 10.0141C10.9368 10.0141 10.3987 9.47606 10.3987 8.81313C10.3987 8.1502 10.9368 7.61217 11.5997 7.61217C12.2626 7.61217 12.8006 8.1502 12.8006 8.81313C12.7974 9.47927 12.2626 10.0141 11.5997 10.0141Z" fill="#EF3E3A"/>\n            </mask>\n            <g mask="url(#mask0_1785_27357)">\n            <rect width="16" height="16" fill="white"/>\n            </g>\n            </g>\n        </svg>\n    ', s, o)}\n                <div style="display: flex; flex-direction: row; align-items: center">\n                    ${Xr("tp-allchat-comment-help", "cursor: pointer !important;")}\n                    ${ta("tp-allchat-report-flag", "cursor: pointer !important; margin-left: 6px;")}\n                </div>\n            </div>\n            <p class="live-feed-comment-username">${t.username}</p>\n            <p class="live-feed-comment-message">${t.message}</p>\n        </div>\n    `;
        var s, o;
      }
      var du = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class pu extends Wa {
        constructor() {
          (super(...arguments),
            (this.ID_CANCEL = "tp-allchat-report-cancel-btn"),
            (this.ID_CONFIRM = "tp-allchat-report-confirm-btn"),
            (this.ID_CONTENT = "allchat-modal-content"));
        }
        open(t) {
          super.open(t);
        }
        close() {
          (super.close(), this.props.closeModal());
        }
        getHtml() {
          return this.getConfirmHtml();
        }
        bindInnerEvents() {
          this.bindConfirmEvents();
        }
        getConfirmHtml() {
          return `\n      <span class="allchat-modal-message" style="margin-bottom: 6px">\n        Are you sure you want to report<br>this comment?\n      </span>\n      <div style="display:flex; flex-direction:row; align-items:center; justify-content:right; width:100%">\n        <span id="${this.ID_CANCEL}" class="allchat-chatbox-button" style="font-weight:600; margin-right:16px; font-size:16px">Cancel</span>\n        <span id="${this.ID_CONFIRM}" class="gradient-200-button">Report</span>\n      </div>\n    `;
        }
        getFinishedHtml(t) {
          return `\n      <span class="allchat-modal-message">${t}</span>\n      <span id="${this.ID_CANCEL}" class="allchat-chatbox-button" style="font-weight:600; font-size:16px; width:100%; text-align:center; margin-top:10px">Close</span>\n    `;
        }
        bindConfirmEvents() {
          const t = document.getElementById(this.ID_CANCEL),
            i = document.getElementById(this.ID_CONFIRM);
          (t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            i &&
              i.addEventListener("click", (t) => {
                (t.stopPropagation(), this.onReportClick(i));
              }));
        }
        bindFinishedEvents() {
          const t = document.getElementById(this.ID_CANCEL);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        onReportClick(t) {
          return du(this, void 0, void 0, function* () {
            ((t.textContent = "Reporting..."),
              (t.style.pointerEvents = "none"),
              (t.style.opacity = "0.7"));
            try {
              (yield Oe(`comments/${this.props.commentId}/report`, "POST", !1),
                this.setContent(
                  this.getFinishedHtml("Message reported successfully."),
                ),
                this.bindFinishedEvents(),
                this.props.removeMessage(this.props.commentId));
            } catch (t) {
              (console.error(t),
                this.setContent(
                  this.getFinishedHtml(
                    "An error occurred. Please try again later.",
                  ),
                ),
                this.bindFinishedEvents());
            }
          });
        }
      }
      const fu = "tp-floating-chat-open-btn";
      function Du(t, i) {
        if (!i) return;
        let n = document.getElementById(fu);
        var e, s;
        if (
          ((n &&
            i.contains(n) &&
            n.querySelector(".tp-floating-chat-open-btn-logo")) ||
            ((i.innerHTML = `\n            <button\n                type="button"\n                id="${fu}"\n                class="tp-floating-chat-open-btn"\n                aria-label="Open All Chat"\n                title="Open All Chat"\n            >\n                <span class="tp-floating-chat-open-btn-logo" aria-hidden="true">${au('<svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z" fill="#FFFFFF"/>\n            <path d="M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z" fill="#FFFFFF"/>\n        </svg>', e, s)}</span>\n                <span class="tp-floating-chat-open-btn-label">All Chat</span>\n            </button>\n        `),
            (n = document.getElementById(fu))),
          !n)
        )
          return;
        const o = ["tp-floating-chat-open-btn"];
        (t.showGradient && o.push("tp-floating-chat-open-btn--gradient"),
          t.panelOpen && o.push("tp-floating-chat-open-btn--open"),
          t.controlsShowing
            ? o.push("tp-floating-chat-open-btn--visible")
            : o.push("tp-floating-chat-open-btn--hidden"),
          (n.className = o.join(" ")),
          n.setAttribute(
            "aria-label",
            t.panelOpen ? "Close All Chat" : "Open All Chat",
          ),
          (n.title = t.panelOpen ? "Close All Chat" : "Open All Chat"),
          n.setAttribute("aria-pressed", t.panelOpen ? "true" : "false"),
          n.setAttribute("aria-hidden", t.controlsShowing ? "false" : "true"),
          (n.tabIndex = t.controlsShowing ? 0 : -1),
          (n.onclick = (i) => {
            (i.stopPropagation(), i.preventDefault(), t.onClick());
          }));
      }
      const vu = "tp-floating-chat-message-list",
        gu = {
          commentId: "tp-floating-chat-intro",
          vidTime: 0,
          message:
            "Welcome to All Chat! These are timed comments from Teleparty users, not a live chat. Comments appear when the video reaches the moment they were left. Post a comment and make your mark!",
          displayName: "Teleparty All Chat",
          vidDuration: 0,
        };
      function mu(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }
      function wu(t, i) {
        if (!i) return;
        const n = i.querySelector(`#${vu}`);
        if (!n) return;
        const e = n.scrollHeight - n.scrollTop - n.clientHeight < 48,
          s = n.querySelectorAll(".tp-floating-chat-message").length;
        n.innerHTML = t.messages
          .map((t) =>
            (function (t) {
              var i;
              const {
                  comment: n,
                  isSystem: e,
                  isPending: s,
                  isRejected: o,
                  rejectionReason: r,
                  isLeaving: a,
                } = t,
                u =
                  (n.displayName || "?")
                    .replace(/[^a-zA-Z0-9]/g, "")
                    .slice(0, 2)
                    .toUpperCase() || "?",
                c = Qr(null !== (i = n.flair) && void 0 !== i ? i : ""),
                h = n.flair
                  ? `<div class="tp-floating-chat-flair" aria-hidden="true">\n                <img src="${c.gifSrc}" alt="${mu(n.flair)}" width="24" height="24"/>\n           </div>`
                  : "",
                l =
                  e || s || o || !t.onReportFlagClicked
                    ? ""
                    : ta(
                        `tp-floating-report-${mu(n.commentId)}`,
                        "cursor: pointer !important; width: 14px; height: 14px;",
                      ),
                d = e
                  ? "tp-floating-chat-username tp-floating-chat-username--brand"
                  : "tp-floating-chat-username",
                p = e
                  ? `<div class="tp-floating-chat-avatar tp-floating-chat-avatar--brand">${uu()}</div>`
                  : `<div class="tp-floating-chat-avatar">${mu(u)}</div>`,
                f =
                  h || l
                    ? `<div class="tp-floating-chat-message-meta-right">${h}${l}</div>`
                    : "",
                D = [
                  e ? "tp-floating-chat-message--system" : "",
                  s ? "tp-floating-chat-message--pending" : "",
                  o ? "tp-floating-chat-message--rejected" : "",
                  a ? "tp-floating-chat-message--leaving" : "",
                ]
                  .filter(Boolean)
                  .join(" "),
                v =
                  o && r
                    ? `<p class="tp-floating-chat-reject-reason">${mu(r)}</p>`
                    : "";
              return `\n        <div class="tp-floating-chat-message${D ? ` ${D}` : ""}" data-comment-id="${mu(n.commentId)}">\n            ${p}\n            <div class="tp-floating-chat-message-body">\n                <div class="tp-floating-chat-message-meta">\n                    <span class="${d}">${mu(n.displayName)}</span>\n                    ${f}\n                </div>\n                <p class="tp-floating-chat-text">${mu(n.message)}</p>\n                ${v}\n            </div>\n        </div>\n    `;
            })(t),
          )
          .join("");
        for (const i of t.messages) {
          if (i.isSystem || !i.onReportFlagClicked) continue;
          const t = document.getElementById(
            `tp-floating-report-${i.comment.commentId}`,
          );
          t &&
            t.addEventListener("click", (t) => {
              var n;
              (t.stopPropagation(),
                null === (n = i.onReportFlagClicked) ||
                  void 0 === n ||
                  n.call(i));
            });
        }
        (e || t.messages.length > s) && (n.scrollTop = n.scrollHeight);
      }
      var yu = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const bu = 120,
        Cu = "tp-floating-chat-input",
        Fu = "tp-floating-chat-length",
        _u = "tp-floating-chat-send",
        Eu = "tp-floating-chat-identity",
        xu = "tp-floating-chat-error",
        ku = "tp-floating-flair-select",
        Au = "tp-floating-flair-trigger",
        Su = "tp-floating-flair-menu",
        Iu = "tp-floating-flair-preview";
      let Bu = null;
      function Tu() {
        null !== Bu && (clearTimeout(Bu), (Bu = null));
        const t = document.getElementById(xu);
        t && ((t.hidden = !0), (t.textContent = ""));
      }
      function ju(t) {
        const i = document.getElementById(xu);
        i &&
          (null !== Bu && (clearTimeout(Bu), (Bu = null)),
          (i.textContent = t),
          (i.hidden = !1),
          (Bu = window.setTimeout(() => {
            Tu();
          }, 4e3)));
      }
      const $u = [
        { reaction: null, label: "No flair" },
        { reaction: "heart", label: "Heart" },
        { reaction: "cry", label: "Cry" },
        { reaction: "surprise", label: "Surprise" },
      ];
      function Pu() {
        const t = document.getElementById(ku);
        return (null == t ? void 0 : t.getAttribute("data-flair")) || void 0;
      }
      function Lu(t) {
        const i = document.getElementById(ku);
        if (!i) return;
        (t ? i.setAttribute("data-flair", t) : i.removeAttribute("data-flair"),
          (function (t) {
            const i = document.getElementById(Iu);
            if (i)
              if (t) {
                const { staticSrc: n } = Qr(t);
                i.innerHTML = `<img src="${n}" alt="${t}" />`;
              } else i.innerHTML = cu();
          })(t));
        const n = document.getElementById(Su);
        n &&
          n.querySelectorAll("[data-flair-option]").forEach((i) => {
            const n = (i.getAttribute("data-flair-option") || "") === (t || "");
            (i.setAttribute("aria-selected", n ? "true" : "false"),
              i.classList.toggle("tp-floating-flair-option--selected", n));
          });
      }
      function Ru() {
        const t = document.getElementById(ku),
          i = document.getElementById(Au),
          n = document.getElementById(Su);
        (null == t || t.classList.remove("tp-floating-flair-select--open"),
          null == i || i.setAttribute("aria-expanded", "false"),
          n && (n.hidden = !0));
      }
      function Mu() {
        const t = document.getElementById(Su);
        t && !t.hidden
          ? Ru()
          : (function () {
              const t = document.getElementById(ku),
                i = document.getElementById(Au),
                n = document.getElementById(Su);
              (null == t || t.classList.add("tp-floating-flair-select--open"),
                null == i || i.setAttribute("aria-expanded", "true"),
                n && (n.hidden = !1));
            })();
      }
      function Ou() {
        const t = $u
          .map(
            ({ reaction: t, label: i }) =>
              `\n            <button\n                type="button"\n                class="tp-floating-flair-option"\n                role="option"\n                data-flair-option="${null != t ? t : ""}"\n                aria-selected="${t ? "false" : "true"}"\n            >\n                <span class="tp-floating-flair-option-icon">${t ? `<img src="${Qr(t).staticSrc}" alt="${i}" />` : cu()}</span>\n                <span class="tp-floating-flair-option-label">${i}</span>\n            </button>\n        `,
          )
          .join("");
        return `\n        <div id="${ku}" class="tp-floating-flair-select">\n            <button\n                type="button"\n                id="${Au}"\n                class="tp-floating-flair-trigger"\n                aria-haspopup="listbox"\n                aria-expanded="false"\n                aria-label="Choose flair"\n                title="Flair"\n            >\n                <span id="${Iu}" class="tp-floating-flair-preview">${cu()}</span>\n                ${au('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>', i, n)}\n            </button>\n            <div id="${Su}" class="tp-floating-flair-menu" role="listbox" hidden>\n                ${t}\n            </div>\n        </div>\n    `;
        var i, n;
      }
      let Vu = !1;
      function Uu(t) {
        const i = document.getElementById(_u),
          n = document.getElementById(Cu),
          e = document.querySelector(".tp-floating-chat-compose"),
          s = document.getElementById(Au);
        (i &&
          (i.classList.toggle("tp-floating-chat-send--sending", t),
          t
            ? (i.setAttribute("disabled", "true"),
              i.setAttribute("aria-busy", "true"),
              i.setAttribute("aria-label", "Sending comment"))
            : (i.removeAttribute("disabled"),
              i.removeAttribute("aria-busy"),
              i.setAttribute("aria-label", "Send comment"))),
          e && e.classList.toggle("tp-floating-chat-compose--sending", t),
          n && (n.disabled = t),
          s && (s.disabled = t));
      }
      function Nu(n, s, o, r) {
        return yu(this, void 0, void 0, function* () {
          const a = yield E.m(new zr(i, t));
          ((r.value = ""),
            n.closeModal(),
            yield (function (i, n, s, o) {
              var r, a, u, c, h, l, d, p, D, v;
              return yu(this, void 0, void 0, function* () {
                let g;
                try {
                  Uu(!0);
                  const m = {
                    name: "allchat_message_sent",
                    message: { text: n },
                    allchat_ui: "floating",
                  };
                  E.m(new rr(e, t, m));
                  const w = yield E.m(new Ra(e, t)),
                    y = {
                      message: n,
                      vidTime: yield i.getVidTime(),
                      service: i.service,
                      vidId: i.vidId,
                      displayName: s,
                      vidDuration: i.vidDuration,
                      flair: Pu(),
                      permId: w,
                      extensionVersion: f,
                    };
                  ((g = `pending-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
                    Tu(),
                    i.onPostComment(
                      Object.assign(Object.assign({}, y), { commentId: g }),
                    ),
                    i.onCommentEdited(""));
                  const b = document.getElementById(Cu);
                  (b && (b.value = ""), Hu(0));
                  const C = yield Oe("comments", "POST", !0, y, o, void 0, !0);
                  (i.onPostConfirmed
                    ? i.onPostConfirmed(g, {
                        commentId: C.commentId,
                        vidTime:
                          null !== (r = C.vidTime) && void 0 !== r
                            ? r
                            : y.vidTime,
                        message:
                          null !== (a = C.message) && void 0 !== a
                            ? a
                            : y.message,
                        displayName:
                          null !== (u = C.displayName) && void 0 !== u
                            ? u
                            : y.displayName,
                        vidDuration:
                          null !== (c = C.vidDuration) && void 0 !== c
                            ? c
                            : y.vidDuration,
                        flair:
                          null !== (h = C.flair) && void 0 !== h ? h : y.flair,
                      })
                    : i.onPostComment({
                        commentId: C.commentId,
                        vidTime:
                          null !== (l = C.vidTime) && void 0 !== l
                            ? l
                            : y.vidTime,
                        message:
                          null !== (d = C.message) && void 0 !== d
                            ? d
                            : y.message,
                        displayName:
                          null !== (p = C.displayName) && void 0 !== p
                            ? p
                            : y.displayName,
                        vidDuration:
                          null !== (D = C.vidDuration) && void 0 !== D
                            ? D
                            : y.vidDuration,
                        flair:
                          null !== (v = C.flair) && void 0 !== v ? v : y.flair,
                      }),
                    Kr("allchat_message_accepted", "floating"));
                } catch (t) {
                  let n = "An error occurred";
                  try {
                    const i = JSON.parse(t.message);
                    i.error
                      ? (Kr("allchat_message_rejected", "floating"),
                        (n = i.error))
                      : Kr("allchat_message_errored", "floating");
                  } catch (i) {
                    (Kr("allchat_message_errored", "floating"),
                      console.error(`GOT ERROR ${t}`));
                  }
                  g && i.onPostRejected
                    ? i.onPostRejected(g, n)
                    : i.onPostRejected || ju(n);
                } finally {
                  Uu(!1);
                }
              });
            })(n, s, o, null == a ? void 0 : a.token));
        });
      }
      function Hu(t) {
        const i = document.getElementById(Fu);
        i && (i.innerText = `${t}/120`);
      }
      function Gu(t, i) {
        Ba(
          {
            variant: "floating",
            knownHandle: i,
            onEditClicked: () => {
              t.openChangeHandleModal((i) => Gu(t, i));
            },
            onSetHandleClicked: () => {
              t.openSetHandleModal((i) => Gu(t, i));
            },
          },
          document.getElementById(Eu),
        );
      }
      function zu(t) {
        return yu(this, void 0, void 0, function* () {
          const { userData: i, handle: n } = yield Jr();
          Kr("allchat_post_button_clicked");
          const e = document.getElementById(Cu);
          if (!e) return;
          const s = e.value;
          if (!s || s.length > bu)
            ju("Message must be between 1-120 characters");
          else {
            if (!(null == i ? void 0 : i.signedIn)) {
              const t = document.getElementById("tp-user-login-btn");
              return void (t
                ? t.click()
                : window.open(
                    `${a}/signup?ref=allchat`,
                    "_blank",
                    "noopener,noreferrer",
                  ));
            }
            n
              ? yield Nu(t, s, n, e)
              : t.openSetHandleModal((i) =>
                  yu(this, void 0, void 0, function* () {
                    (Gu(t, i), i && (yield Nu(t, s, i, e)));
                  }),
                );
          }
        });
      }
      function Zu(t) {
        return `\n        <div class="tp-floating-chat-input-area">\n            <div id="${Eu}" class="tp-floating-chat-identity"></div>\n            <div class="tp-floating-chat-input-row">\n                <div class="tp-floating-chat-compose">\n                    <input\n                        id="${Cu}"\n                        type="text"\n                        class="tp-floating-chat-input"\n                        placeholder="Add your comment..."\n                        value="${t.curComment.replace(/"/g, "&quot;")}"\n                        maxlength="120"\n                    />\n                    ${Ou()}\n                    <span id="${Fu}" class="tp-floating-chat-length">${t.curComment.length}/120</span>\n                </div>\n                <button type="button" id="${_u}" class="tp-floating-chat-send" aria-label="Send comment">\n                    <span class="tp-floating-chat-send-icon">${au('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M4 12L20 4L13 20L11 13L4 12Z" stroke="white" stroke-width="1.8" stroke-linejoin="round"/>\n        </svg>', i, n)}</span>\n                    <span class="tp-floating-chat-send-spinner" aria-hidden="true"></span>\n                </button>\n            </div>\n            <p id="${xu}" class="tp-floating-chat-error" role="alert" hidden></p>\n            <div class="tp-floating-chat-input-hints">\n                <a\n                    class="tp-floating-chat-feedback"\n                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJORvFwSNAYhsCLd94YLUOn5s7y_aGezl89slmbM6LZFPPvw/viewform?usp=publish-editor"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                >\n                    Leave Feedback\n                </a>\n                <button type="button" id="tp-floating-chat-guidelines-btn" class="tp-floating-chat-guidelines">\n                    ${(function (
          t,
          i,
        ) {
          return au(
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M12 3L5 6.5V12c0 4.5 2.9 7.6 7 8.8 4.1-1.2 7-4.3 7-8.8V6.5L12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>\n        </svg>',
            t,
            i,
          );
        })()}\n                    <span>Community Guidelines</span>\n                </button>\n            </div>\n        </div>\n    `;
        var i, n;
      }
      function Wu(t) {
        (Gu(t),
          (function () {
            const t = document.getElementById(ku),
              i = document.getElementById(Au),
              n = document.getElementById(Su);
            t &&
              i &&
              n &&
              (i.addEventListener("click", (t) => {
                (t.stopPropagation(), Mu());
              }),
              n.querySelectorAll("[data-flair-option]").forEach((t) => {
                t.addEventListener("click", (i) => {
                  (i.stopPropagation(),
                    Lu(t.getAttribute("data-flair-option") || null),
                    Ru());
                });
              }),
              Vu ||
                ((Vu = !0),
                document.addEventListener(
                  "click",
                  (t) => {
                    const i = document.getElementById(ku);
                    (i && i.contains(t.target)) || Ru();
                  },
                  !0,
                )));
          })());
        const i = document.getElementById(Cu),
          n = document.getElementById(_u),
          e = document.getElementById("tp-floating-chat-guidelines-btn");
        (e &&
          e.addEventListener("click", (i) => {
            (i.stopPropagation(), t.openGuidelinesModal());
          }),
          i &&
            (i.addEventListener("focus", (i) => {
              var n;
              (i.stopPropagation(),
                localStorage.setItem("allchat-has-focus", "true"),
                null === (n = t.onInputFocusIntent) ||
                  void 0 === n ||
                  n.call(t));
            }),
            i.addEventListener("blur", () => {
              var n;
              (null === (n = t.onInputBlurIntent) || void 0 === n || n.call(t),
                window.setTimeout(() => {
                  document.activeElement !== i &&
                    localStorage.setItem("allchat-has-focus", "false");
                }, 0));
            }),
            i.addEventListener("click", (t) => t.stopPropagation()),
            i.addEventListener("keydown", (i) => {
              (i.stopPropagation(),
                "Enter" === i.key && (i.preventDefault(), zu(t)));
            }),
            i.addEventListener("input", (n) => {
              let e = n.target.value;
              (e.length > bu && ((e = e.substring(0, bu)), (i.value = e)),
                Tu(),
                t.onCommentEdited(e),
                Hu(e.length));
            })),
          n &&
            n.addEventListener("click", (i) => {
              (i.stopPropagation(), zu(t));
            }));
      }
      const Yu = "tp-floating-chat-panel",
        Qu = "tp-floating-chat-close",
        Ju = "tp-floating-chat-help",
        Ku = "tpFloatingChatPanelPos",
        qu = 110;
      function Xu(t, i, n, e) {
        const s = Math.max(8, window.innerWidth - n - 8),
          o = Math.max(8, window.innerHeight - e - 8);
        return {
          left: Math.min(Math.max(8, t), s),
          top: Math.min(Math.max(8, i), o),
        };
      }
      function tc(t, i) {
        var n, e;
        if (!t) return;
        const s = t.offsetWidth || 320,
          o = t.offsetHeight || Math.round(0.55 * window.innerHeight),
          r = Xu(
            null !== (n = null == i ? void 0 : i.left) && void 0 !== n ? n : 27,
            null !== (e = null == i ? void 0 : i.top) && void 0 !== e ? e : qu,
            s,
            o,
          );
        ((t.style.left = `${r.left}px`), (t.style.top = `${r.top}px`));
      }
      function ic(t, i) {
        let n = !1,
          e = 0,
          s = 0,
          o = 0,
          r = 0;
        const a = (t) => {
            if (!n) return;
            (t.preventDefault(), t.stopPropagation());
            const a = i.offsetWidth || 320,
              u = i.offsetHeight || 400,
              c = Xu(o + (t.clientX - e), r + (t.clientY - s), a, u);
            tc(i, c);
          },
          u = (e) => {
            if (!n) return;
            ((n = !1), t.classList.remove("tp-floating-chat-header--dragging"));
            try {
              t.releasePointerCapture(e.pointerId);
            } catch (t) {}
            (window.removeEventListener("pointermove", a, !0),
              window.removeEventListener("pointerup", u, !0),
              window.removeEventListener("pointercancel", u, !0));
            const s = Number.parseFloat(i.style.left || String(27)),
              o = Number.parseFloat(i.style.top || String(qu));
            Number.isNaN(s) ||
              Number.isNaN(o) ||
              (function (t) {
                try {
                  localStorage.setItem(Ku, JSON.stringify(t));
                } catch (t) {}
              })({ left: s, top: o });
          };
        t.addEventListener("pointerdown", (c) => {
          const h = c.target;
          if (!(null == h ? void 0 : h.closest("button, a, input, textarea"))) {
            (c.preventDefault(),
              c.stopPropagation(),
              (n = !0),
              (e = c.clientX),
              (s = c.clientY),
              (o = Number.parseFloat(
                i.style.left || String(i.offsetLeft || 27),
              )),
              (r = Number.parseFloat(i.style.top || String(i.offsetTop || qu))),
              Number.isNaN(o) && (o = 27),
              Number.isNaN(r) && (r = qu),
              t.classList.add("tp-floating-chat-header--dragging"));
            try {
              t.setPointerCapture(c.pointerId);
            } catch (t) {}
            (window.addEventListener("pointermove", a, !0),
              window.addEventListener("pointerup", u, !0),
              window.addEventListener("pointercancel", u, !0));
          }
        });
      }
      function nc(t, i) {
        if (!i) return;
        var n, e;
        ((i.innerHTML = `\n        <div id="${Yu}" class="tp-floating-chat-panel">\n            <div class="tp-floating-chat-header">\n                <div class="tp-floating-chat-header-left">\n                    <span class="tp-floating-chat-logo" aria-hidden="true">${uu()}</span>\n                    <span class="tp-floating-chat-title">All Chat</span>\n                </div>\n                <div class="tp-floating-chat-header-actions">\n                    <button type="button" id="${Ju}" class="tp-floating-chat-icon-btn" aria-label="All Chat help">\n                        ${au('<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>\n            <path d="M9.6 9.4c0-1.35 1.05-2.4 2.45-2.4 1.35 0 2.4 0.95 2.4 2.25 0 1.05-0.55 1.6-1.35 2.15-0.75 0.5-1.15 0.95-1.15 1.85" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>\n            <circle cx="12" cy="17.1" r="1.05" fill="currentColor"/>\n        </svg>', n, e)}\n                    </button>\n                    <button type="button" id="${Qu}" class="tp-floating-chat-icon-btn" aria-label="Close chat">\n                        ${(function (
          t,
          i,
        ) {
          return au(
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M7 7L17 17M7 17L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>\n        </svg>',
            t,
            i,
          );
        })()}\n                    </button>\n                </div>\n            </div>\n            <div id="tp-floating-chat-body" class="tp-floating-chat-body">\n                <div id="${vu}" class="tp-floating-chat-message-list"></div>\n            </div>\n            ${Zu(t.inputProps)}\n        </div>\n    `),
          tc(
            i,
            (function () {
              try {
                const t = localStorage.getItem(Ku);
                if (!t) return null;
                const i = JSON.parse(t);
                if ("number" == typeof i.left && "number" == typeof i.top)
                  return { left: i.left, top: i.top };
              } catch (t) {}
              return null;
            })(),
          ),
          wu({ messages: t.messages }, i),
          Wu(t.inputProps));
        const s = document.getElementById(Qu),
          o = document.getElementById(Ju),
          r = i.querySelector(".tp-floating-chat-header");
        (s &&
          s.addEventListener("click", (i) => {
            (i.stopPropagation(), t.onClose());
          }),
          o &&
            o.addEventListener("click", (i) => {
              (i.stopPropagation(), t.onHelpClicked());
            }),
          r && ic(r, i));
        const a = document.getElementById(Yu);
        a &&
          (a.addEventListener("click", (t) => t.stopPropagation()),
          a.addEventListener("keydown", (t) => t.stopPropagation()));
      }
      function ec(t) {
        t && (t.innerHTML = "");
      }
      var sc = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const oc = "tpFloatingChatButtonSeen",
        rc = "tpFloatingChatPanelOpen";
      function ac(t) {
        try {
          t
            ? sessionStorage.setItem(rc, "true")
            : sessionStorage.removeItem(rc);
        } catch (t) {}
      }
      class uc {
        constructor(t) {
          ((this.deps = t),
            (this.jn = !1),
            (this.$n = new Set()),
            (this.Pn = !1),
            (this.Ln = ""),
            (this.Rn = !0),
            (this.Mn = !1),
            (this.On = new Map()),
            (this.Vn = !1),
            (this.Un = []),
            (this.Nn = !1),
            (this.Hn = null),
            (this.Gn = !1),
            (this.zn = (t) => {
              if (!this.Nn || !this.jn) return;
              const i = this.deps.getPanelRoot(),
                n = t.target;
              (i && n && i.contains(n)) || this.Zn();
            }));
        }
        get isPanelOpen() {
          return this.jn;
        }
        get isMounted() {
          return this.Mn;
        }
        get isComposeFocused() {
          return this.Nn;
        }
        noteComposeFocus() {
          (null !== this.Hn && (clearTimeout(this.Hn), (this.Hn = null)),
            (this.Nn = !0),
            this.Wn());
        }
        noteComposeBlur() {
          (null !== this.Hn && clearTimeout(this.Hn),
            (this.Hn = setTimeout(() => {
              this.Hn = null;
              const t = document.getElementById("tp-floating-chat-input");
              document.activeElement !== t ? (this.Nn = !1) : (this.Nn = !0);
            }, 120)));
        }
        render() {
          var t, i, n;
          return sc(this, void 0, void 0, function* () {
            if (this.deps.isUserInParty()) return void this.hideForParty();
            ((this.Pn = !1),
              (this.Rn =
                null !==
                  (n =
                    null === (i = (t = this.deps).getControlsShowing) ||
                    void 0 === i
                      ? void 0
                      : i.call(t)) && void 0 !== n
                  ? n
                  : this.Rn),
              this.Yn());
            const e = this.deps.getPanelRoot(),
              s = Boolean(
                null == e ? void 0 : e.querySelector("#tp-floating-chat-panel"),
              );
            (this.jn ||
              (!s &&
                !(function () {
                  try {
                    return "true" === sessionStorage.getItem(rc);
                  } catch (t) {
                    return !1;
                  }
                })()) ||
              (this.jn = !0),
              this.Qn(),
              (this.Mn = !0),
              this.jn
                ? (s || (yield this.Jn()), this.Kn())
                : (ec(this.deps.getPanelRoot()), this.qn()));
          });
        }
        setControlsShowing(t) {
          !this.Pn && this.Mn
            ? ((this.Rn = t), this.Qn(), this.Xn())
            : (this.Rn = t);
        }
        togglePanel() {
          this.jn ? this.closePanel() : this.openPanel();
        }
        openPanel() {
          var t, i;
          return sc(this, void 0, void 0, function* () {
            this.deps.isUserInParty() ||
              (localStorage.setItem(oc, "true"),
              (this.jn = !0),
              ac(!0),
              this.Qn(),
              yield this.Jn(),
              this.Kn(),
              null === (i = (t = this.deps).onPanelOpened) ||
                void 0 === i ||
                i.call(t));
          });
        }
        closePanel() {
          var t, i;
          ((this.jn = !1),
            ac(!1),
            this.Zn(),
            this.te(),
            (this.Vn = !1),
            ec(this.deps.getPanelRoot()),
            this.qn(),
            this.Qn(),
            null === (i = (t = this.deps).onPanelClosed) ||
              void 0 === i ||
              i.call(t));
        }
        hideForParty() {
          var t, i;
          const n = this.jn;
          ((this.Pn = !0),
            (this.jn = !1),
            ac(!1),
            (this.Mn = !1),
            this.Zn(),
            this.te(),
            (this.Vn = !1),
            this.qn(),
            ec(this.deps.getPanelRoot()));
          const e = this.deps.getButtonRoot();
          (e && (e.innerHTML = ""),
            n &&
              (null === (i = (t = this.deps).onPanelClosed) ||
                void 0 === i ||
                i.call(t)));
        }
        refreshMessages() {
          return sc(this, void 0, void 0, function* () {
            this.jn && !this.Pn && (yield this.ie());
          });
        }
        noteOptimistic(t) {
          const i = this.On.get(t);
          (null == i ? void 0 : i.isRejected) ||
            (null == i ? void 0 : i.isLeaving) ||
            this.On.set(t, { isPending: !0 });
        }
        confirmPending(t) {
          this.On.delete(t);
        }
        rejectPendingMessage(t, i) {
          ((this.Vn = !0),
            this.On.set(t, { isRejected: !0, rejectionReason: i }),
            this.ie());
          const n = setTimeout(() => {
            const i = this.On.get(t);
            if (!i) return void (this.Vn = !1);
            (this.On.set(
              t,
              Object.assign(Object.assign({}, i), { isLeaving: !0 }),
            ),
              this.ie());
            const n = setTimeout(() => {
              (this.deps.removeComment(t),
                this.On.delete(t),
                (this.Vn =
                  this.On.size > 0 &&
                  Array.from(this.On.values()).some(
                    (t) => t.isRejected || t.isLeaving,
                  )),
                this.ie());
            }, 450);
            this.Un.push(n);
          }, 2e3);
          this.Un.push(n);
        }
        destroy() {
          var t, i;
          const n = this.jn;
          (this.qn(),
            this.te(),
            (this.Vn = !1),
            this.On.clear(),
            (this.jn = !1),
            ac(!1),
            (this.Mn = !1),
            this.Zn(),
            ec(this.deps.getPanelRoot()));
          const e = this.deps.getButtonRoot();
          (e && (e.innerHTML = ""),
            n &&
              (null === (i = (t = this.deps).onPanelClosed) ||
                void 0 === i ||
                i.call(t)));
        }
        Zn() {
          (null !== this.Hn && (clearTimeout(this.Hn), (this.Hn = null)),
            (this.Nn = !1),
            this.ne(),
            localStorage.setItem("allchat-has-focus", "false"));
        }
        Xn() {
          this.jn &&
            !this.Pn &&
            this.Nn &&
            requestAnimationFrame(() => {
              if (!this.Nn || !this.jn) return;
              const t = document.getElementById("tp-floating-chat-input");
              t &&
                document.activeElement !== t &&
                t.focus({ preventScroll: !0 });
            });
        }
        Wn() {
          this.Gn ||
            ((this.Gn = !0),
            document.addEventListener("pointerdown", this.zn, !0));
        }
        ne() {
          this.Gn &&
            ((this.Gn = !1),
            document.removeEventListener("pointerdown", this.zn, !0));
        }
        te() {
          for (const t of this.Un) clearTimeout(t);
          this.Un = [];
        }
        Yn() {}
        ee() {
          return "true" !== localStorage.getItem(oc);
        }
        Qn() {
          Du(
            {
              onClick: () => this.togglePanel(),
              showGradient: this.ee(),
              panelOpen: this.jn,
              controlsShowing: this.Rn,
            },
            this.deps.getButtonRoot(),
          );
        }
        se(t) {
          return sc(this, void 0, void 0, function* () {
            return [
              { comment: gu, isSystem: !0 },
              ...t.map((t) => {
                const i = this.On.get(t.commentId),
                  n = Boolean(
                    (null == i ? void 0 : i.isPending) ||
                    (null == i ? void 0 : i.isRejected),
                  );
                return {
                  comment: t,
                  onReportFlagClicked: n
                    ? void 0
                    : () => this.deps.openReportMessageModal(t.commentId),
                  isPending: null == i ? void 0 : i.isPending,
                  isRejected: null == i ? void 0 : i.isRejected,
                  rejectionReason: null == i ? void 0 : i.rejectionReason,
                  isLeaving: null == i ? void 0 : i.isLeaving,
                };
              }),
            ];
          });
        }
        Jn() {
          return sc(this, void 0, void 0, function* () {
            const t = yield this.deps.getRevealedMessages();
            this.oe(t);
            const i = yield this.deps.getInputProps();
            ((i.curComment = this.Ln),
              (i.onCommentEdited = (t) => {
                this.Ln = t;
              }),
              (i.onInputFocusIntent = () => this.noteComposeFocus()),
              (i.onInputBlurIntent = () => this.noteComposeBlur()),
              nc(
                {
                  messages: yield this.se(t),
                  inputProps: i,
                  onClose: () => this.closePanel(),
                  onHelpClicked: () => this.deps.openHelpModal(),
                },
                this.deps.getPanelRoot(),
              ));
          });
        }
        ie() {
          return sc(this, void 0, void 0, function* () {
            const t = yield this.deps.getRevealedMessages();
            (this.oe(t),
              (function (t, i) {
                wu({ messages: t }, i);
              })(yield this.se(t), this.deps.getPanelRoot()));
          });
        }
        oe(t) {
          var i, n;
          for (const e of t)
            this.$n.has(e.commentId) ||
              (this.$n.add(e.commentId),
              null === (n = (i = this.deps).onCommentViewed) ||
                void 0 === n ||
                n.call(i, e.commentId));
          const e = new Set(t.map((t) => t.commentId));
          for (const t of Array.from(this.$n)) e.has(t) || this.$n.delete(t);
        }
        Kn() {
          this.re ||
            (this.re = setInterval(() => {
              this.Vn || this.ie();
            }, 1e3));
        }
        qn() {
          this.re && (clearInterval(this.re), (this.re = void 0));
        }
      }
      var cc = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class hc {
        constructor(i, n, s, o, r = () => !1) {
          ((this.ALLCHAT_OPTIONS_ROOT_ID = "tp-allchat-options-root"),
            (this.ALLCHAT_CHATBOX_ROOT_ID = "tp-allchat-chatbox-root"),
            (this.ALLCHAT_LIVECHAT_ROOT_ID = "tp-allchat-livechat-root"),
            (this.ALLCHAT_MODAL_ROOT_ID = "tp-allchat-modal-root"),
            (this.FLOATING_CHAT_BUTTON_ROOT_ID =
              "tp-floating-chat-button-root"),
            (this.FLOATING_CHAT_PANEL_ROOT_ID = "tp-floating-chat-panel-root"),
            (this.ae = "true" === localStorage.getItem("tpLiveChatShowing")),
            (this.ue = !1),
            (this.ce = !1),
            (this.he = ""),
            (this.le = !0),
            (this.de = ""),
            (this.pe = null),
            (this.fe = !1),
            (this.De = !1),
            (this.ve = !1),
            (this.ge = 0),
            (this.we = !1),
            (this.ye = !1),
            (this.be = () => {
              (this.Ce(), this.injectAllChat());
            }),
            (this.Ce = () => {
              for (const t of [
                this.ALLCHAT_CHATBOX_ROOT_ID,
                this.ALLCHAT_LIVECHAT_ROOT_ID,
                this.ALLCHAT_OPTIONS_ROOT_ID,
                this.FLOATING_CHAT_BUTTON_ROOT_ID,
                this.FLOATING_CHAT_PANEL_ROOT_ID,
                this.ALLCHAT_MODAL_ROOT_ID,
              ]) {
                const i = document.getElementById(t);
                i && i.remove();
              }
            }),
            (this.Fe = () => {
              var t;
              (null === (t = this._e) || void 0 === t || t.destroy(),
                this.Ee(),
                this.xe(),
                this.ke(),
                this.Ae(),
                this.Ce(),
                (this.Se = void 0),
                (this.he = ""),
                (this.pe = null));
            }),
            (this.Ie = () => {
              this.Be()
                ? (this.Te(), this.je(), this.injectAllChat())
                : this.Fe();
            }),
            (this.$e = (t) => {
              t ? this.Pe() : this.Le();
            }),
            (this.Re = () => {
              const t =
                  document.head || document.getElementsByTagName("head")[0],
                i = document.createElement("link");
              ((i.rel = "stylesheet"),
                (i.href = chrome.runtime.getURL("css/all-chat.css")),
                t.appendChild(i));
              const n = document.createElement("link");
              ((n.rel = "stylesheet"),
                (n.href =
                  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"),
                t.appendChild(n));
            }),
            (this.Me = () => {
              if (this.ye) return;
              const t =
                  document.head || document.getElementsByTagName("head")[0],
                i = document.createElement("link");
              ((i.rel = "stylesheet"),
                (i.href = chrome.runtime.getURL("css/floating-chat.css")),
                t.appendChild(i),
                (this.ye = !0));
            }),
            (this.Ae = () => {
              if (0 != this.ge) {
                const i = Date.now() - this.ge;
                (E.m(
                  new rr(e, t, {
                    name: "allchat_time_spent",
                    allchat_usage: { time_spend: i },
                  }),
                ),
                  (this.ge = 0));
              }
            }),
            (this.ke = () => {
              const t = this.Oe();
              (t && (t.innerHTML = ""), (this.pe = null));
            }),
            (this.Ve = (t) => {
              ((this.Ue = t), (this.pe = "report"));
              new pu({
                commentId: t,
                closeModal: this.ke,
                removeMessage: this.Ne,
              }).open(this.Oe());
            }),
            (this.He = () => {
              ((this.pe = null), this.xe(), E.m(new $r(e, t, !0)));
            }),
            (this.Te = () =>
              cc(this, void 0, void 0, function* () {
                if (this.Be())
                  try {
                    const t = (yield this.W.getVideoDataAsync()).videoId,
                      i = this.W.getStreamingServiceName();
                    (t && i) ||
                      console.error(
                        "Failed to get video info, live chat not loading",
                      );
                    const n = yield Oe(
                      `comments?univKey=${i}%23${t}`,
                      "GET",
                      !1,
                    );
                    ((this.Se = n.comments.sort(
                      (t, i) => t.vidTime - i.vidTime,
                    )),
                      console.log(this.Se));
                  } catch (t) {
                    console.error(t);
                  }
              })),
            (this.Ne = (t) => {
              var i;
              (this.Se && (this.Se = this.Se.filter((i) => i.commentId !== t)),
                this.Ge() &&
                  (null === (i = this._e) || void 0 === i
                    ? void 0
                    : i.isPanelOpen) &&
                  this._e.refreshMessages());
            }),
            (this.ze = (t = 5e3) =>
              cc(this, void 0, void 0, function* () {
                if (!this.Se || 0 === this.Se.length) return null;
                const i = (yield this.W.getStateAsync())
                  .playbackPositionMilliseconds;
                let n = null,
                  e = 1 / 0;
                for (const s of this.Se) {
                  const o = i - s.vidTime;
                  if (
                    (o >= 0 && o < e && o <= t && ((n = s), (e = o)),
                    s.vidTime > i)
                  )
                    break;
                }
                return n;
              })),
            (this.Ze = () =>
              cc(this, void 0, void 0, function* () {
                if (!this.Se || 0 === this.Se.length) return [];
                const t = (yield this.W.getStateAsync())
                    .playbackPositionMilliseconds,
                  i = [];
                for (const n of this.Se) {
                  if (!(n.vidTime <= t)) break;
                  i.push(n);
                }
                return i;
              })),
            (this.We = (i) => {
              i !== this.Ye &&
                ((this.Ye = i),
                this.fe &&
                  E.m(
                    new rr(e, t, {
                      name: "allchat_comment_viewed",
                      action: { description: i },
                      allchat_ui: this.Ge() ? "floating" : "legacy",
                    }),
                  ));
            }),
            (this.Qe = () => {
              this.pe = "guidelines";
              new ru({ closeModal: this.ke, viewOnly: !0 }).open(this.Oe());
            }),
            (this.Je = () => {
              this.pe = "floatingHelp";
              new hu({ closeModal: this.ke }).open(this.Oe());
            }),
            (this.Ke = () => {
              this.pe = "help";
              new eu({
                closeModal: this.ke,
                toggleLiveChat: this.qe,
                getLiveChatShowing: () => this.ae,
              }).open(this.Oe());
            }),
            (this.Xe = (t) => {
              ((this.pe = "changeHandle"),
                (this.ts = {
                  closeModal: this.ke,
                  onHandleChanged: t,
                  onEditAvatarClicked: () => this.ns(t),
                  onLoadErrorDismiss: this.He,
                }));
              new Ja(this.ts).open(this.Oe());
            }),
            (this.es = (t) => {
              ((this.pe = "setHandle"),
                (this.ss = {
                  closeModal: this.ke,
                  onHandleSet: t,
                  onLoadErrorDismiss: this.He,
                }));
              new nu(this.ss).open(this.Oe());
            }),
            (this.ns = (t) => {
              ((this.pe = "editProfilePicture"),
                (this.rs = {
                  closeModal: () => {
                    this.Xe(t);
                  },
                  onProfilePictureChanged: () => {
                    t();
                  },
                  onLoadErrorDismiss: this.He,
                }));
              new Xa(this.rs).open(this.Oe());
            }),
            (this.us = (t) => {
              var i, n;
              if (this.Ge()) {
                return "string" == typeof t.commentId &&
                  t.commentId.startsWith("pending-")
                  ? (this.cs(t),
                    null === (i = this._e) ||
                      void 0 === i ||
                      i.noteOptimistic(t.commentId),
                    void (
                      null === (n = this._e) ||
                      void 0 === n ||
                      n.refreshMessages()
                    ))
                  : void (() => {
                      cc(this, void 0, void 0, function* () {
                        var i;
                        try {
                          const i = (yield this.W.getStateAsync())
                            .playbackPositionMilliseconds;
                          "number" == typeof t.vidTime &&
                            t.vidTime > i &&
                            (t.vidTime = i);
                        } catch (t) {}
                        (this.cs(t),
                          null === (i = this._e) ||
                            void 0 === i ||
                            i.refreshMessages());
                      });
                    })();
              }
              (this.cs(t), this.ae && this.hs());
            }),
            (this.ls = (t, i) => {
              (() => {
                cc(this, void 0, void 0, function* () {
                  var n, e;
                  try {
                    const t = (yield this.W.getStateAsync())
                      .playbackPositionMilliseconds;
                    "number" == typeof i.vidTime &&
                      i.vidTime > t &&
                      (i.vidTime = t);
                  } catch (t) {}
                  (this.Se &&
                    (this.Se = this.Se.filter((i) => i.commentId !== t)),
                    this.cs(i),
                    null === (n = this._e) ||
                      void 0 === n ||
                      n.confirmPending(t),
                    null === (e = this._e) ||
                      void 0 === e ||
                      e.refreshMessages());
                });
              })();
            }),
            (this.hs = () =>
              cc(this, void 0, void 0, function* () {
                const t = yield this.ds();
                if (t.message)
                  (!(function (t, i) {
                    if (i) {
                      i.innerHTML = lu(t);
                      const n = document.getElementById(
                          "tp-allchat-report-flag",
                        ),
                        e = document.getElementById("tp-allchat-comment-help");
                      (n &&
                        n.addEventListener("click", (i) => {
                          (i.stopPropagation(), t.onReportFlagClicked());
                        }),
                        e &&
                          e.addEventListener("click", (i) => {
                            (i.stopPropagation(), t.openHelpModal());
                          }));
                    }
                  })(t, this.ps()),
                    t.commentId != this.Ye && this.We(t.commentId));
                else {
                  const t = this.ps();
                  t && (t.innerHTML = "");
                }
              })),
            (this.fs = () =>
              cc(this, void 0, void 0, function* () {
                (yield this.je(),
                  this.hs(),
                  this.Ds || (this.Ds = setInterval(this.hs, 1e3)));
              })),
            (this.Ee = () => {
              const t = this.ps();
              (t && (t.innerHTML = ""),
                this.Ds && (clearInterval(this.Ds), (this.Ds = void 0)));
            }),
            (this.de = window.location.href),
            (this.Y = i),
            (this.W = n),
            (this.Z = s),
            (this.serviceName = o),
            (this.vs = r),
            (this.ve = r()),
            this.ve && (this.ae = !1),
            (this.xe = this.xe.bind(this)),
            (this.gs = this.gs.bind(this)),
            (this.ws = this.ws.bind(this)),
            (this.ys = this.ys.bind(this)),
            (this.ds = this.ds.bind(this)),
            (this.bs = this.bs.bind(this)),
            (this.Cs = this.Cs.bind(this)),
            (this.ps = this.ps.bind(this)),
            (this.Oe = this.Oe.bind(this)),
            (this.qe = this.qe.bind(this)),
            (this.Le = this.Le.bind(this)),
            (this.Pe = this.Pe.bind(this)),
            (this.Fs = this.Fs.bind(this)),
            this.Y.registerMenuStateChangeCallback(this.$e),
            this.Fs(),
            this.Te(),
            this.je(),
            this.ae && (this.ge = Date.now()),
            window.addEventListener("pagehide", () => this.Ae()),
            window.addEventListener("pageshow", () => {
              this.ae && 0 === this.ge && (this.ge = Date.now());
            }));
        }
        Be() {
          return !0;
        }
        Ge() {
          return this.we;
        }
        _s() {
          var t;
          return Boolean(
            null === (t = this._e) || void 0 === t
              ? void 0
              : t.isComposeFocused,
          );
        }
        bs() {
          return document.getElementById(this.ALLCHAT_OPTIONS_ROOT_ID);
        }
        Cs() {
          return document.getElementById(this.ALLCHAT_CHATBOX_ROOT_ID);
        }
        ps() {
          return document.getElementById(this.ALLCHAT_LIVECHAT_ROOT_ID);
        }
        Oe() {
          return document.getElementById(this.ALLCHAT_MODAL_ROOT_ID);
        }
        Es() {
          return document.getElementById(this.FLOATING_CHAT_BUTTON_ROOT_ID);
        }
        xs() {
          return document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID);
        }
        Pe() {
          var t;
          this.Ge()
            ? null === (t = this._e) || void 0 === t || t.setControlsShowing(!0)
            : this.be();
        }
        Le() {
          var t;
          this.Ge()
            ? null === (t = this._e) || void 0 === t || t.setControlsShowing(!1)
            : this.be();
        }
        qe() {
          const i = !this.ae;
          (this.ks(i, !0),
            E.m(
              new rr(e, t, {
                name: i ? "allchat_toggled_on" : "allchat_toggled_off",
              }),
            ));
        }
        gs() {
          ((this.ue = !0),
            (() => {
              cc(this, void 0, void 0, function* () {
                (Za(yield this.ws(), this.Cs()),
                  this.le && (yield this.W.pause()));
              });
            })());
        }
        xe() {
          ((this.ue = !1), (this.he = ""));
          const t = this.Cs();
          t && (t.innerHTML = "");
        }
        ys() {
          return {
            toggleLiveChat: this.qe,
            showCreatePost: this.gs,
            liveChatShowing: this.ae,
          };
        }
        je() {
          return cc(this, void 0, void 0, function* () {
            yield Promise.all([this.As(), this.Ss()]);
          });
        }
        As() {
          return cc(this, void 0, void 0, function* () {
            this.fe = yield Nr(Or);
          });
        }
        Ss() {
          return cc(this, void 0, void 0, function* () {
            if ("true" === localStorage.getItem("tpForceLegacyChat"))
              return void (this.we = !1);
            if ("true" === localStorage.getItem("tpForceFloatingChat"))
              return void (this.we = !0);
            const i = yield E.m(new Tr(e, t, "allchat-floating-chat"));
            this.we = Boolean(null == i ? void 0 : i.hasFeature);
          });
        }
        Is() {
          return (
            this._e ||
              (this._e = new uc({
                getButtonRoot: () => this.Es(),
                getPanelRoot: () => this.xs(),
                getRevealedMessages: () => this.Ze(),
                getInputProps: () => this.Bs(),
                openHelpModal: this.Je,
                openReportMessageModal: this.Ve,
                onCommentViewed: (t) => this.We(t),
                isUserInParty: () => this.vs(),
                getControlsShowing: () => this.Y.shouldMenuBeVisible(),
                removeComment: (t) => {
                  this.Se &&
                    (this.Se = this.Se.filter((i) => i.commentId !== t));
                },
                onPanelOpened: () => {
                  this.ge = Date.now();
                },
                onPanelClosed: () => {
                  this.Ae();
                },
              })),
            this._e
          );
        }
        ds() {
          return cc(this, void 0, void 0, function* () {
            const t = yield this.ze();
            return t
              ? {
                  message: t.message,
                  username: t.displayName,
                  commentId: t.commentId,
                  onReportFlagClicked: () => this.Ve(t.commentId),
                  openHelpModal: this.Ke,
                  flair: t.flair,
                }
              : {};
          });
        }
        cs(t) {
          if (this.Se) {
            let i = !1;
            for (let n = 0; n < this.Se.length; n++)
              if (this.Se[n].vidTime >= t.vidTime) {
                (this.Se[n].vidTime === t.vidTime &&
                  (this.Se[n].vidTime -= 1e-4),
                  this.Se.splice(n, 0, t),
                  (i = !0));
                break;
              }
            i || this.Se.push(t);
          } else this.Se = [t];
        }
        Bs() {
          return cc(this, void 0, void 0, function* () {
            const t = yield this.W.getVideoDataAsync(),
              i = this.W.getStreamingServiceName();
            return {
              curComment: this.he,
              onCommentEdited: (t) => {
                this.he = t;
              },
              onPostComment: this.us,
              onPostConfirmed: (t, i) => {
                this.ls(t, i);
              },
              onPostRejected: (t, i) => {
                var n;
                null === (n = this._e) ||
                  void 0 === n ||
                  n.rejectPendingMessage(t, i);
              },
              getVidTime: () =>
                cc(this, void 0, void 0, function* () {
                  return (yield this.W.getStateAsync())
                    .playbackPositionMilliseconds;
                }),
              service: i.toString(),
              vidId: t.videoId,
              vidDuration: t.videoDuration,
              openChangeHandleModal: this.Xe,
              openSetHandleModal: this.es,
              openGuidelinesModal: this.Qe,
              closeModal: this.ke,
            };
          });
        }
        ws() {
          return cc(this, void 0, void 0, function* () {
            const t = yield this.W.getVideoDataAsync(),
              i = this.W.getStreamingServiceName(),
              n = (yield this.W.getStateAsync()).playbackState === Io.PLAYING;
            return {
              onPostComment: this.us,
              closeModal: this.ke,
              videoControlProps: {
                pauseVideo: this.W.pause,
                playVideo: this.W.play,
                isVideoPlaying: () =>
                  cc(this, void 0, void 0, function* () {
                    return (
                      (yield this.W.getStateAsync()).playbackState ===
                      Io.PLAYING
                    );
                  }),
                shouldRender: !0,
              },
              curComment: this.he,
              onCommentEdited: (t) => {
                this.he = t;
              },
              closeChatbox: this.xe,
              getVidTime: () =>
                cc(this, void 0, void 0, function* () {
                  return (yield this.W.getStateAsync())
                    .playbackPositionMilliseconds;
                }),
              service: i.toString(),
              vidId: t.videoId,
              vidDuration: t.videoDuration,
              openHelpModal: this.Ke,
              shouldPlayVideoAfterClose: n,
              openChangeHandleModal: this.Xe,
              openSetHandleModal: this.es,
            };
          });
        }
        Fs() {
          this.Ts = setInterval(() => {
            (this.js(),
              window.location.href != this.de
                ? ((this.de = window.location.href), this.Ie())
                : this.Be() ||
                  ((document.getElementById(
                    this.FLOATING_CHAT_BUTTON_ROOT_ID,
                  ) ||
                    document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID) ||
                    document.getElementById(this.ALLCHAT_OPTIONS_ROOT_ID) ||
                    document.getElementById(this.ALLCHAT_LIVECHAT_ROOT_ID)) &&
                    this.Fe()));
          }, 100);
        }
        js() {
          var t;
          const i = this.vs();
          i !== this.ve &&
            ((this.ve = i),
            this.Ge()
              ? i
                ? (null === (t = this._e) || void 0 === t || t.hideForParty(),
                  this.Ae())
                : this.injectAllChat().then(() => {
                    var t;
                    (null === (t = this._e) || void 0 === t
                      ? void 0
                      : t.isPanelOpen) && (this.ge = Date.now());
                  })
              : i
                ? this.ks(!1, !1)
                : this.ks(
                    "true" === localStorage.getItem("tpLiveChatShowing"),
                    !1,
                  ));
        }
        ks(t, i) {
          this.ae !== t &&
            ((this.ae = t),
            i && localStorage.setItem("tpLiveChatShowing", this.ae.toString()),
            ra(this.ys(), this.bs()),
            this.ae
              ? (this.fs(), (this.ge = Date.now()))
              : (this.Ee(), this.Ae(), this.xe()));
        }
        $s() {
          if ("help" == this.pe) this.Ke();
          else if ("floatingHelp" == this.pe) this.Je();
          else if ("guidelines" == this.pe) this.Qe();
          else if ("report" == this.pe && this.Ue) this.Ve(this.Ue);
          else if ("changeHandle" == this.pe && this.ts)
            this.Xe(this.ts.onHandleChanged);
          else if ("setHandle" == this.pe && this.ss)
            this.es(this.ss.onHandleSet);
          else if ("editProfilePicture" == this.pe && this.rs) {
            new Xa(this.rs).open(this.Oe());
          }
        }
        injectAllChat() {
          return cc(this, void 0, void 0, function* () {
            yield this.je();
            const i = this.Y.shouldMenuBeVisible();
            if (yield this.Ps(i)) {
              if ((this.ce || (this.Re(), (this.ce = !0)), this.Ge()))
                return (
                  this.Me(),
                  this.Ee(),
                  (this.ue = !1),
                  yield this.Ls(i),
                  yield this.Is().render(),
                  "true" !== localStorage.getItem("allChatHelpModalSeen") &&
                    (this.Je(),
                    localStorage.setItem("allChatHelpModalSeen", "true")),
                  void this.$s()
                );
              (yield this.Ls(i),
                ra(this.ys(), this.bs()),
                this.ae && this.fs(),
                this.ue && Za(yield this.ws(), this.Cs()),
                "true" !== localStorage.getItem("allChatHelpModalSeen") &&
                  (this.Ke(),
                  localStorage.setItem("allChatHelpModalSeen", "true")),
                this.$s(),
                ra(this.ys(), this.bs()),
                this.ae && this.fs());
            } else
              this.De ||
                ((this.De = !0),
                E.m(
                  new rr(e, t, {
                    name: "allchat_page_invalid",
                    message: {
                      text: `{"serviceName": "${this.serviceName}", "url": "${window.location.href}"}`,
                    },
                  }),
                ));
          });
        }
      }
      var lc = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const dc = {
        [xe.NETFLIX.toString()]: class extends hc {
          constructor() {
            (super(...arguments),
              (this.Rs = !1),
              (this.Ls = (t) =>
                lc(this, void 0, void 0, function* () {
                  if (this.Ge()) {
                    const i =
                        document.querySelector(".watch-video") ||
                        document.querySelector("[data-uia=player]"),
                      n = document.body;
                    return (
                      document.getElementById(
                        this.FLOATING_CHAT_BUTTON_ROOT_ID,
                      ) || Yr(this.FLOATING_CHAT_BUTTON_ROOT_ID, n, "", !1),
                      document.getElementById(
                        this.FLOATING_CHAT_PANEL_ROOT_ID,
                      ) || Yr(this.FLOATING_CHAT_PANEL_ROOT_ID, n, "", !1),
                      document.getElementById(this.ALLCHAT_MODAL_ROOT_ID) ||
                        Yr(this.ALLCHAT_MODAL_ROOT_ID, i, "", !1),
                      void (this.Rs = t)
                    );
                  }
                  const i =
                    document.querySelector(".watch-video") ||
                    document.querySelector("[data-uia=player]");
                  if ((Yr(this.ALLCHAT_MODAL_ROOT_ID, i), t)) {
                    ((this.Rs = !0), yield je(20)());
                    const t = document.querySelector(
                        ".watch-video--flag-container",
                      ),
                      i = document.querySelector(
                        ".watch-video--bottom-controls-container",
                      );
                    (i &&
                      (this.ue && (i.style.display = "none"),
                      Yr(
                        this.ALLCHAT_CHATBOX_ROOT_ID,
                        i.parentElement,
                        "display: flex",
                      )),
                      Yr(this.ALLCHAT_OPTIONS_ROOT_ID, t));
                    const n = document.querySelector(
                      ".watch-video--back-container",
                    );
                    n &&
                      (n.setAttribute(
                        "style",
                        n.getAttribute("style") + " flex-direction: column;",
                      ),
                      Yr(this.ALLCHAT_LIVECHAT_ROOT_ID, n));
                  } else {
                    this.Rs = !1;
                    const t = document.querySelector("[data-uia=player]");
                    (Yr(this.ALLCHAT_LIVECHAT_ROOT_ID, t, "padding: 20px;"),
                      Yr(
                        this.ALLCHAT_CHATBOX_ROOT_ID,
                        t,
                        "position: fixed; bottom: 0; left: 0; width: 100%",
                      ));
                  }
                })),
              (this.Ms = (t) => {
                const i = t.getBoundingClientRect();
                return {
                  x: Math.random() * i.width + i.left,
                  y: Math.random() * i.height + i.top,
                };
              }),
              (this.Os = (t) => {
                const { x: i, y: n } = this.Ms(t),
                  e = new PointerEvent("pointermove", {
                    bubbles: !0,
                    cancelable: !0,
                    clientX: i,
                    clientY: n,
                    pointerType: "mouse",
                    view: window,
                  });
                t.dispatchEvent(e);
              }));
          }
          Be() {
            return Be(new URL(window.location.href));
          }
          Ps(t) {
            return lc(this, void 0, void 0, function* () {
              if (!this.Be()) return !1;
              if (this.Ge()) {
                const i = ["[data-uia=player]"];
                return (
                  t && i.push(".watch-video"),
                  i.every((t) => null !== document.querySelector(t))
                );
              }
              return (
                t
                  ? [
                      "[data-uia=player]",
                      ".watch-video--flag-container",
                      ".watch-video--bottom-controls-container",
                      ".watch-video--back-container",
                      ".watch-video",
                    ]
                  : ["[data-uia=player]"]
              ).every((t) => null !== document.querySelector(t));
            });
          }
          Vs(t) {
            const i = document.querySelector(
              ".watch-video--bottom-controls-container",
            );
            i && (i.style.display = t);
          }
          gs() {
            (this.Vs("none"), super.gs());
          }
          xe() {
            (this.Vs("block"), super.xe());
          }
          qe() {
            (this.Vs("block"), super.qe());
          }
          ws() {
            const t = Object.create(null, { ws: { get: () => super.ws } });
            return lc(this, void 0, void 0, function* () {
              const i = yield t.ws.call(this),
                n = document.querySelector("video");
              return (
                n &&
                  ((i.videoControlProps.pauseVideo = () =>
                    lc(this, void 0, void 0, function* () {
                      n.pause();
                    })),
                  (i.videoControlProps.playVideo = () =>
                    lc(this, void 0, void 0, function* () {
                      n.play();
                    }))),
                i
              );
            });
          }
          ys() {
            return Object.assign(Object.assign({}, super.ys()), {
              containerStyling: "margin-left: 8px; top: 5px;",
            });
          }
          Us() {
            return this.Ge()
              ? null != this.pe || this._s()
              : null != this.pe || this.ue;
          }
          Fs() {
            (super.Fs(),
              (this.Ns = setInterval(() => {
                if (!this.Us()) return;
                if ((this.Ge() && this._s()) || this.Rs) {
                  const t = document.querySelector("[data-uia=player]");
                  t && this.Os(t);
                }
              }, 500)));
          }
        },
      };
      const pc = new Set([
        "account",
        "browse",
        "continue",
        "episodes",
        "home",
        "login",
        "menu",
        "more",
        "movies",
        "my list",
        "next",
        "pause",
        "play",
        "profile",
        "search",
        "settings",
        "share",
        "sign in",
        "sign up",
        "skip intro",
        "watch now",
      ]);
      function fc(t) {
        return t
          ? t
              .replace(/\s+/g, " ")
              .replace(/\s+[-|:]\s+teleparty$/i, "")
              .trim()
          : "";
      }
      function Dc(t) {
        const i = fc(t);
        if (i.length < 2 || i.length > 160) return !1;
        const n = i.toLowerCase();
        if (pc.has(n)) return !1;
        if (/^(sign|log)\s?in$/i.test(i) || /^episode\s+\d+$/i.test(i))
          return !1;
        const e = i.split(" "),
          s = i.replace(/[^a-z0-9]/gi, "");
        return e.length <= 18 && s.length >= 2;
      }
      function vc(t, i, n, e) {
        if (i) return `${null != t ? t : ""}|${i}`;
        let s = e;
        try {
          const t = new URL(e);
          s = `${t.origin}${t.pathname}`;
        } catch (t) {}
        return `${null != t ? t : ""}|${((o = n), fc(o).toLowerCase())}|${s}`;
        var o;
      }
      function gc(t, i, n) {
        var e, s, o;
        const r = null !== (e = t.content) && void 0 !== e ? e : {},
          a =
            (null == i ? void 0 : i.title) || fc(n.fallbackTitle) || fc(r.name),
          u = {
            id: r.id || t.videoId || "",
            url: r.url || n.fallbackUrl,
            name: a.toLowerCase(),
            service: t.service || r.service || "",
            type: r.type || t.type || t.videoType || "",
            episode_name:
              null !==
                (o =
                  null === (s = r.episode_name) || void 0 === s
                    ? void 0
                    : s.toLowerCase()) && void 0 !== o
                ? o
                : "",
          },
          c = mc(r.season);
        void 0 !== c && (u.season = c);
        const h = mc(r.episode);
        return (void 0 !== h && (u.episode = h), u);
      }
      function mc(t) {
        if (void 0 !== t && Number.isInteger(t) && t > 0) return t;
      }
      var wc = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class yc {
        constructor(t, i, n, e, s = !1, o = "") {
          ((this.Hs = []),
            (this.Gs = !1),
            (this.zs = new Set()),
            (this.Zs = (t, i) => {
              try {
                this.Ws.push({
                  level: t,
                  message: i
                    .map((t) => {
                      try {
                        return "object" == typeof t
                          ? JSON.stringify(t)
                          : String(t);
                      } catch (i) {
                        return String(t);
                      }
                    })
                    .join(" "),
                });
              } catch (t) {}
            }),
            (this.Z = t),
            (this.W = i),
            (this.Gt = n),
            (this.Y = e),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = e),
                console.log("Setting Page COntrols"))
              : (e.setChatApi(this.Z),
                console.log("Resetting Chat Api for old controls")),
            (this.Ys = new jo(this.Z, this.W, this.Y)),
            (this.Qs = this.createVideoMessageForwarder(
              this.W,
              this.Z,
              this.Gt,
            )),
            (this.Js = !1),
            (this.Ks = !1),
            (this.qs = !1),
            (this.F = new j()),
            this.F.addMessageListener(this.Qs),
            this.F.addMessageListener(this.Ys),
            this.F.addMessageListener(this),
            (this.Xs = !1),
            (this.serviceName = o),
            (this.Ws = []),
            s &&
              (this.io = (function (t, i, n, e, s) {
                return t ? new dc[t](i, n, e, t, s) : void 0;
              })(
                this.serviceName,
                this.Y,
                this.W,
                this.Z,
                () => this.Qs.isInParty() || this.Z.inSession,
              )),
            this.no(),
            this.eo(),
            this.so(),
            this.oo());
        }
        createVideoMessageForwarder(t, i, n) {
          return new Sr(t, i, n, this);
        }
        oo() {
          var i, n;
          let s = 0;
          const o =
              null !==
                (n =
                  null === (i = window.teleparty) || void 0 === i
                    ? void 0
                    : i.tabId) && void 0 !== n
                ? n
                : 0,
            r = () =>
              wc(this, void 0, void 0, function* () {
                if (!(
                  this.Qs.isInParty() ||
                  this.Z.inSession ||
                  this.Ks ||
                  s >= 5
                )) {
                  s++;
                  try {
                    E.m(new dr(e, t, { tabId: o, persist: !0 }));
                    const i = yield this.ro();
                    yield E.m(i);
                  } catch (t) {
                    F(
                      "Session restore retry skipped until video metadata is ready",
                      t,
                    );
                  }
                  !this.Qs.isInParty() &&
                    !this.Z.inSession &&
                    s < 5 &&
                    setTimeout(r, 3e3);
                }
              });
          setTimeout(r, 2e3);
        }
        so() {
          ((this.Hs = []),
            document.addEventListener("click", (t) => {
              t.target &&
                (this.ao = { interactionType: "click", element: t.target });
            }),
            document.addEventListener("keydown", (t) => {
              this.ao = { interactionType: "keydown", keyPressed: t.key };
            }));
        }
        logInteraction(t, i = !1) {
          i
            ? this.Hs.push({
                interactionType: "websocketMessageReceived",
                videoAction: t,
              })
            : this.ao &&
              (this.Hs.push(
                Object.assign(Object.assign({}, this.ao), { videoAction: t }),
              ),
              (this.ao = void 0));
        }
        eo() {
          const t = console.log.bind(console),
            i = console.warn.bind(console),
            n = console.error.bind(console);
          ((console.log = (...i) => {
            (this.Zs("log", i), t(...i));
          }),
            (console.warn = (...t) => {
              (this.Zs("warn", t), i(...t));
            }),
            (console.error = (...t) => {
              (this.Zs("error", t), n(...t));
            }));
        }
        uo() {
          return wc(this, void 0, void 0, function* () {
            (yield this.Y.addTpIcon(), this.Y.startEventListener());
          });
        }
        loadBrowseButton() {
          return wc(this, void 0, void 0, function* () {
            (yield this.Y.addTpIcon(), this.Y.startEventListener());
          });
        }
        no() {
          const t = chrome.runtime.connect({ name: "content-script-health" });
          (t.onDisconnect.addListener(() => {
            if (this.Qs.isInParty()) {
              console.log("Lost background script. Teardown");
              const t = { showAlert: this.Z.inSession, alertModal: Jo };
              this.co(t);
            }
          }),
            t.onMessage.addListener(() => {
              (F("Got background script"), (this.Xs = !0));
            }));
          const i = () => {
              (console.log("Requesting ping"), t.postMessage({ type: "ping" }));
            },
            n = setInterval(() => {
              this.Xs ? clearInterval(n) : i();
            }, 3e3);
          i();
        }
        onMessage(n, s, r) {
          if (n.target == e) {
            if (n.type === o.IS_CONTENT_SCRIPT_READY) {
              if (this.Js) {
                this.ho();
                r({ ready: !0 });
              } else ((this.Ks = !0), this.lo().then(r));
              return !0;
            }
            if (n.type === o.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE)
              return (
                this.W.getCustomStartPartyButtonMessage().then((t) => r(t)),
                !0
              );
            if (n.type === o.IS_VIDEO_READY)
              return (
                console.log(
                  "Checking if video is ready",
                  !!this.W.getVideoElement(),
                ),
                r({ hasVideo: !!this.W.getVideoElement() }),
                !0
              );
            if (n.type === o.GET_INIT_DATA) {
              const t = this.do();
              return (r(t), !0);
            }
            if (n.type === o.DISCONNECT && n.sender == i) {
              const i = new Xo(e, t, Ir);
              (E.m(i), r());
            } else {
              if (n.type == S.TEARDOWN) {
                const t = n;
                return (this.co(t.data), r(), !0);
              }
              if (n.type === S.ON_NOTIF) this.po();
              else if (n.type === S.GET_ALLCHAT_HAS_FOCUS)
                r("true" === localStorage.getItem("allchat-has-focus"));
              else if (n.type === S.GET_VALIDATIONS_FAILURE_INFO) {
                let t;
                if (n.includeDiagnostics) {
                  t = Ve(document.documentElement.outerHTML);
                }
                const i = Ve(JSON.stringify(this.Ws)),
                  e = this.Hs.map((t) => {
                    let i;
                    if (
                      "click" === t.interactionType &&
                      t.element instanceof HTMLElement
                    ) {
                      i = t.element.cloneNode(!1).outerHTML;
                    }
                    return {
                      interactionType: t.interactionType,
                      videoAction: t.videoAction,
                      keyPressed: t.keyPressed,
                      elementHtml: i,
                    };
                  }),
                  s = Ve(JSON.stringify(e)),
                  o = Ve(JSON.stringify(this.Z.getMessages(!0)));
                return (
                  r({
                    html_gzip_base64: t,
                    service_worker_console_dump_gzip_base64: i,
                    system_chat_msgs_gzip_base64: o,
                    interaction_mappings_gzip_base64: s,
                  }),
                  !0
                );
              }
            }
          }
          return !1;
        }
        ho() {
          this.Z.usesChatMountPolling() &&
            this.Z.inSession &&
            !this.Z.isPartyWindowsActive() &&
            !this.Z.isChatInjected() &&
            (this.Z.scheduleChatInjectRetryIfNeeded(), this.Z.reloadChat());
        }
        po() {
          console.log("Show Notification");
        }
        co(i) {
          var n, s, o;
          if (i.showAlert && i.alertModal) {
            const t =
              null !== (n = i.buttonUrl) && void 0 !== n
                ? n
                : this.Z.getPartyUrl();
            Ko(i.alertModal, t);
          }
          (this.Y.teardown(),
            this.Qs.teardown(),
            this.Ys.teardown(),
            this.Gt.stopListening(),
            this.Y.startEventListener());
          const r = {
              name: "error",
              action: {
                description:
                  null === (s = i.alertModal) || void 0 === s
                    ? void 0
                    : s.title,
                reason:
                  null === (o = i.alertModal) || void 0 === o
                    ? void 0
                    : o.content,
              },
            },
            a = new rr(e, t, r);
          E.m(a);
        }
        ki(i) {
          if (
            "Please open a video on Amazon Prime Video then click on the Tp icon" ===
            i
          )
            return;
          const n = new rr(e, t, { name: "error", action: { reason: i } });
          E.m(n);
        }
        fo() {
          return wc(this, void 0, void 0, function* () {
            return $e(() => this.Xs, 5e3)();
          });
        }
        lo() {
          return wc(this, void 0, void 0, function* () {
            try {
              yield this.fo();
              const t = yield this.Do();
              return (this.uo(), t);
            } catch (t) {
              const i = { message: O, showButton: !1 };
              return (this.ki(O), { ready: !1, error: i });
            } finally {
              this.Ks = !1;
            }
          });
        }
        Do() {
          return wc(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.W.waitVideoApiReadyAsync();
              const i = yield this.vo();
              (i && i.error
                ? (F("Error is:", i.error),
                  (t = { message: i.error, showButton: !0 }),
                  (this.Js = !0),
                  window.teleparty &&
                    (window.teleparty.contentScriptReady = !0))
                : (i && i.showReviewMessage && (this.qs = !0),
                  (this.Js = !0),
                  window.teleparty &&
                    (window.teleparty.contentScriptReady = !0)),
                this.io && this.io.injectAllChat(),
                this.Js && this.mo());
            } catch (i) {
              ((t = { message: i.message, showButton: !1 }),
                this.ki(i.message),
                this.Gt.logListenerElementsDetected());
            }
            return { ready: this.Js, error: t };
          });
        }
        do() {
          return {
            reactionsDisabled: this.Z.sessionReactionsDisabled,
            userReactionsDisabled: this.Z.userReactionsDisabled,
            inSession: this.Z.inSession,
            isChatVisible: this.Z.isPartyWindowsActive()
              ? this.Z.getChatWindowVisible()
              : this.Z.getChatVisible(),
            partyUrl: this.Z.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.Z.isPartyWindowsActive(),
            sessionId: this.Z.getSessionId(),
          };
        }
        mo() {
          var t;
          this.Gs ||
            (null === (t = window.teleparty) || void 0 === t
              ? void 0
              : t.contentDetectedLoggerStarted) ||
            ((this.Gs = !0),
            window.teleparty &&
              (window.teleparty.contentDetectedLoggerStarted = !0),
            this.wo(),
            (this.yo = setInterval(() => {
              this.wo();
            }, 15e3)));
        }
        wo() {
          var i, n;
          return wc(this, void 0, void 0, function* () {
            if (!this.Qs.isInParty())
              try {
                const s = yield this.W.getVideoDataAsync(),
                  o = (function (t) {
                    var i;
                    const n = [
                      null == t ? void 0 : t.originalTitle,
                      null == t ? void 0 : t.videoTitle,
                      null === (i = null == t ? void 0 : t.content) ||
                      void 0 === i
                        ? void 0
                        : i.name,
                    ]
                      .map(fc)
                      .find(Dc);
                    return n ? { title: n } : void 0;
                  })(s);
                if (!o) return;
                const r =
                    s.service ||
                    (null === (i = s.content) || void 0 === i
                      ? void 0
                      : i.service) ||
                    this.W.getInternalStreamingServiceName(),
                  a = vc(
                    r,
                    s.videoId ||
                      (null === (n = s.content) || void 0 === n
                        ? void 0
                        : n.id),
                    o.title,
                    window.location.href,
                  );
                if (this.zs.has(a)) return;
                if (this.Qs.isInParty()) return;
                this.zs.add(a);
                const u = {
                    name: "content_detected",
                    page: {
                      type: "watch",
                      name: o.title,
                      url: window.location.href,
                      referrer: document.referrer || "",
                    },
                    content: gc(s, o, { fallbackUrl: window.location.href }),
                    action: {
                      source: "content_detector",
                      description: "content title detected",
                    },
                  },
                  c = new rr(e, t, u, or.METIS);
                yield E.m(c, 2500);
              } catch (t) {
                F("Content detected: VideoData unavailable", t);
              }
          });
        }
        vo() {
          return wc(this, void 0, void 0, function* () {
            const t = yield this.ro();
            return E.m(t);
          });
        }
        ro() {
          return wc(this, void 0, void 0, function* () {
            const i = { videoId: (yield this.W.getVideoDataAsync()).videoId };
            return new T(e, t, i);
          });
        }
      }
      var bc,
        Cc = n(5089),
        Fc = n.n(Cc);
      class _c extends k {
        constructor(t, i, n) {
          (super(t, i, A.SET_TYPING), (this.data = n));
        }
      }
      class Ec extends k {
        constructor(t, i, n) {
          (super(t, i, A.SEND_MESSAGE), (this.data = n));
        }
      }
      class xc extends k {
        constructor(t, i, n) {
          (super(t, i, A.BROADCAST_USER_SETTINGS), (this.data = n));
        }
      }
      class kc extends k {
        constructor(t, i, n) {
          (super(t, i, A.SEND_REACTION), (this.data = n));
        }
      }
      class Ac extends k {
        constructor(t, i, n) {
          (super(t, i, A.SEND_GIF), (this.data = n));
        }
      }
      var Sc = new Uint8Array(16);
      function Ic() {
        if (
          !bc &&
          !(bc =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
          );
        return bc(Sc);
      }
      const Bc =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const Tc = function (t) {
        return "string" == typeof t && Bc.test(t);
      };
      for (var jc = [], $c = 0; $c < 256; ++$c)
        jc.push(($c + 256).toString(16).substr(1));
      const Pc = function (t) {
        var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (
            jc[t[i + 0]] +
            jc[t[i + 1]] +
            jc[t[i + 2]] +
            jc[t[i + 3]] +
            "-" +
            jc[t[i + 4]] +
            jc[t[i + 5]] +
            "-" +
            jc[t[i + 6]] +
            jc[t[i + 7]] +
            "-" +
            jc[t[i + 8]] +
            jc[t[i + 9]] +
            "-" +
            jc[t[i + 10]] +
            jc[t[i + 11]] +
            jc[t[i + 12]] +
            jc[t[i + 13]] +
            jc[t[i + 14]] +
            jc[t[i + 15]]
          ).toLowerCase();
        if (!Tc(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      };
      const Lc = function (t, i, n) {
        var e = (t = t || {}).random || (t.rng || Ic)();
        if (((e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128), i)) {
          n = n || 0;
          for (var s = 0; s < 16; ++s) i[n + s] = e[s];
          return i;
        }
        return Pc(e);
      };
      const Rc = "data-tp-in-party";
      function Mc(t) {
        t
          ? document.documentElement.setAttribute(Rc, "true")
          : document.documentElement.removeAttribute(Rc);
      }
      var Oc = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      const Vc = new (class {
        isUserIconValid(t) {
          if (!t) return !1;
          if (t.includes("/profile-images/")) return !0;
          if (t.includes("?newIconUrl=")) {
            const [i, n] = t.split("?newIconUrl=");
            return Da.includes(n) && pa.includes(i);
          }
          return Da.includes(t);
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return "string" == typeof t && t.length > 0 && t.length < 20;
        }
        getDefaultUserIcon() {
          const t = Math.floor(Math.random() * fa.length);
          return fa[t];
        }
        getDefaultUserNickName() {
          return "";
        }
        bo(t) {
          return Oc(this, void 0, void 0, function* () {
            try {
              yield vr.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return Oc(this, void 0, void 0, function* () {
            const t = yield H.getAllItemsAsync(),
              i = this.validateStorageData(t);
            return (JSON.stringify(t) !== JSON.stringify(i) && this.bo(i), i);
          });
        }
        validateStorageData(t) {
          var i;
          const n = "object" == typeof t ? Object.assign({}, t) : {};
          return (
            (null === (i = n.userIcon) || void 0 === i
              ? void 0
              : i.includes("?newIconUrl=")) &&
              (n.userIcon = n.userIcon.split("?newIconUrl=")[1]),
            this.isUserIconValid(n.userIcon) ||
              (n.userIcon = this.getDefaultUserIcon()),
            this.isUserNickNameValid(n.userNickname) ||
              (n.userNickname = this.getDefaultUserNickName()),
            n
          );
        }
      })();
      Object.freeze(Vc);
      const Uc = Vc;
      var Nc;
      !(function (t) {
        ((t.HEART = "heart"),
          (t.ANGRY = "angry"),
          (t.FIRE = "fire"),
          (t.LAUGH = "laugh"),
          (t.CRY = "cry"),
          (t.SURPRISE = "surprise"));
      })(Nc || (Nc = {}));
      const Hc = (t) => (i) => {
        var n;
        if (t.length) {
          const e = document.querySelector(t),
            s =
              null === (n = null == e ? void 0 : e.shadowRoot) || void 0 === n
                ? void 0
                : n.querySelector(i);
          return s ? jQuery(s) : jQuery();
        }
        return jQuery(i);
      };
      var Gc = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class zc {
        constructor(i, n) {
          ((this.Co = this.Fo.bind(this)),
            (this._o = this.resetIdleTimer.bind(this)),
            (this.K = (t) => {
              ("TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(),
                t.data && "emoji-click" === t.data.type && this.Eo(t.data));
            }),
            (this.xo = (t) => {
              (t.target !== this.ko("#chat-input")[0] &&
                t.target !== this.ko("#nickname-edit")[0]) ||
                t.stopImmediatePropagation();
            }),
            (this.Ao = (i) => {
              this.Z.onVideoClick();
              const n = i.target;
              let s = "" !== n.id ? n.id : n.className;
              s = n.getAttribute("data-tp-id")
                ? n.getAttribute("data-tp-id")
                : s;
              const o = {
                  name: "user_click",
                  component: { name: s, type: n.nodeName, origin: "other" },
                },
                r = new rr(e, t, o);
              (E.m(r),
                i.target !== this.ko("emoji-picker")[0] &&
                  i.target !== this.ko("#chat-input")[0] &&
                  this.ko("#emoji-picker-container") &&
                  !this.ko("#emoji-picker-container").is(":hidden") &&
                  this.Z.toggleEmojiClicker(),
                i.target instanceof HTMLElement &&
                  this.ko("#gif-picker-container").length &&
                  this.ko("#gif-picker-container")[0] &&
                  !this.ko("#gif-picker-container")[0].contains(i.target) &&
                  i.target !== this.ko("#chat-input")[0] &&
                  !this.ko("#gif-picker-container").is(":hidden") &&
                  "category-img" !== i.target.className &&
                  this.Z.toggleGIFs());
            }),
            (this.Eo = (i) => {
              console.log("on Emoji Click");
              const n = this.ko("#chat-input")[0],
                s = i.detail.unicode,
                o = new rr(e, t, {
                  name: "user_click",
                  component: {
                    name: "chat_input_container-emoji_picker-emoji",
                    type: s,
                  },
                });
              E.m(o);
              const r = new rr(e, t, {
                eventType: `emoji-click-${s}`,
                sessionId: this.Z.getSessionId(),
              });
              (E.m(r),
                Lo.pushTask(() => this.updateFrequentlyUsed(i.detail.emoji)));
              const a = window.getSelection();
              if (!this.ko("#chat-input").is(":focus") && n.lastChild) {
                const t = document.createRange();
                (t.setStartAfter(n.lastChild),
                  null == a || a.removeAllRanges(),
                  null == a || a.addRange(t));
              }
              (this.Z.focusChat(), this.So(s));
              (n.scrollHeight - n.scrollTop <= n.clientHeight + 40 &&
                (n.scrollTop = n.scrollHeight),
                this.Io(),
                this.Z.onInputChange());
            }),
            (this.Z = i),
            (this.ko = Hc(n || "")));
        }
        Bo() {
          (F("Idle Warning called"), Ko(Wo));
          const i = new rr(e, t, {
            name: "party_warning",
            action: {
              description: "user has been warned for being idle",
              reason: "user was idle for " + Vo + " time in milliseconds.",
            },
          });
          E.m(i);
          const n = new rr(e, t, {
            eventType: "idle-warn-2hr",
            sessionId: this.Z.getSessionId(),
          });
          (E.m(n), (this.To = setTimeout(this.jo.bind(this), Vo)));
        }
        jo() {
          F("Idle kick called");
          const i = new rr(e, t, {
              name: "party_kick",
              action: {
                description: "user has been kicked for being idle",
                reason: "user was idle for " + Oo + " time in milliseconds.",
              },
            }),
            n = new Xo(e, t, Br);
          (E.m(i), E.m(n));
        }
        resetIdleTimer() {
          (this.$o && clearTimeout(this.$o),
            this.To && (qo(), clearTimeout(this.To)),
            (this.$o = setTimeout(this.Bo.bind(this), Oo)));
        }
        Po() {
          ((this.$o = setTimeout(this.Bo.bind(this), Oo)),
            (window.onmousemove = (t) => {
              t.isTrusted && this._o();
            }),
            (window.onfocus = () => this._o()),
            (window.onmousedown = () => this._o()),
            (window.ontouchstart = () => this._o()),
            (window.onkeydown = () => this._o()));
        }
        Lo() {
          (this.$o && clearTimeout(this.$o),
            this.To && clearTimeout(this.To),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null));
        }
        startListening() {
          (F("Listening for chat events"),
            this.Po(),
            this.Ro(),
            this.initWindowListeners());
        }
        stopListening() {
          (this.Mo(), this.Lo(), this.Oo());
        }
        Fo() {
          this.Z.clearUnreadCount();
        }
        Vo(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const i = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, i);
          }
          this.Z.onInputChange();
        }
        initWindowListeners() {
          (jQuery(window).on("focus", this.Co),
            window.addEventListener("message", this.K),
            document.addEventListener("dragstart", this.Uo.bind(this)),
            document.addEventListener(
              "webkitfullscreenchange",
              this.Z.onFullScreen,
            ),
            document.addEventListener("fullscreenchange", this.Z.onFullScreen),
            document.addEventListener("keydown", this.xo, !0),
            document.addEventListener("emoji-click", this.Eo),
            document.addEventListener("click", this.Ao));
        }
        Ro() {
          (jQuery(window).on("focus", this.Co),
            this.ko("#party-tab").on(
              "click",
              this.Z.togglePartyTab.bind(this.Z),
            ),
            this.ko("#friends-tab").on(
              "click",
              this.Z.toggleFriendsTab.bind(this.Z),
            ),
            this.ko(".user-icon").on(
              "click",
              this.Z.toggleLargeUserIconButton.bind(this.Z),
            ),
            this.ko("#user-icon").on(
              "click",
              this.Z.toggleIconContainer.bind(this.Z),
            ),
            this.ko("#link-icon").on(
              "click",
              this.Z.linkIconListener.bind(this.Z),
            ),
            this.ko("#reset-icon").on(
              "click",
              this.Z.resetIconListener.bind(this.Z),
            ),
            this.ko(".image-button").on(
              "click",
              this.Z.userIconSelectorListener.bind(this.Z),
            ),
            this.ko("#chat-input-container").on(
              "keydown",
              this.Z.onChatKeyDown.bind(this.Z),
            ),
            this.ko("#nickname-edit").on(
              "keydown",
              this.Z.onChatKeyDown.bind(this.Z),
            ),
            this.ko("#chat-input").on(
              "keypress",
              this.Z.onChatKeyPress.bind(this.Z),
            ),
            this.ko("#chat-input").on(
              "input",
              this.Z.onInputChange.bind(this.Z),
            ),
            this.ko("#gif-search").on("keyup", this.Z.onGifSearch.bind(this.Z)),
            this.ko("#saveChanges").on(
              "click",
              this.Z.saveChangesListener.bind(this.Z),
            ),
            this.ko("#cancelNickname").on(
              "click",
              this.Z.cancelNicknameListener.bind(this.Z),
            ),
            this.ko("#chat-wrapper").on("mouseup", this.Z.cancelEvent),
            this.ko("#chat-wrapper").on("mousedown", this.Z.cancelEvent),
            this.ko("#chat-wrapper").on("pointerup", this.Z.cancelEvent),
            this.ko("#chat-wrapper").on("pointerdown", this.Z.cancelEvent),
            this.ko("#chat-wrapper").on("mousemove", this.Z.cancelEvent),
            this.ko("#chat-wrapper").on("pointermove", this.Z.cancelEvent),
            this.ko("#chat-wrapper").on(
              "keyup",
              this.Z.onChatKeyUp.bind(this.Z),
            ),
            this.ko("#emoji-picker-btn").on(
              "click",
              this.Z.addEmojiPicker.bind(this.Z),
            ),
            this.ko("#gif-btn").on("click", this.Z.addGifPicker.bind(this.Z)),
            this.ko(".gif-img").on("click", this.Z.clickGif.bind(this.Z)),
            this.ko(".gif-results").on(
              "click",
              "video, img",
              this.Z.clickGif.bind(this.Z),
            ),
            this.ko("#category-container").on(
              "click",
              "video",
              this.Z.clickGif.bind(this.Z),
            ),
            this.ko("#gif-input-back").on(
              "click",
              this.Z.resetGif.bind(this.Z),
            ),
            this.ko("#reaction-btn").on(
              "click",
              this.Z.addReactionTab.bind(this.Z),
            ),
            this.ko("#chat-input-container").on("click", this.No.bind(this)),
            this.ko("#chat-input").on("input", this.Io.bind(this)),
            this.ko("#chat-input").on("drop", this.Ho.bind(this)),
            this.ko("#gif-results-wrapper").on(
              "scroll",
              this.Z.onScrollToBottom.bind(this.Z),
            ),
            this.Go(),
            document.addEventListener("keydown", this.xo.bind(this), !0),
            this.Z.initCustomListeners());
        }
        Go() {
          (this.ko("#tp-heart-button").on("click", () => {
            this.Z.onReactionClicked(Nc.HEART);
          }),
            this.ko("#tp-cry-button").on("click", () => {
              this.Z.onReactionClicked(Nc.CRY);
            }),
            this.ko("#tp-angry-button").on("click", () => {
              this.Z.onReactionClicked(Nc.ANGRY);
            }),
            this.ko("#tp-surprise-button").on("click", () => {
              this.Z.onReactionClicked(Nc.SURPRISE);
            }),
            this.ko("#tp-laugh-button").on("click", () => {
              this.Z.onReactionClicked(Nc.LAUGH);
            }),
            this.ko("#tp-fire-button").on("click", () => {
              this.Z.onReactionClicked(Nc.FIRE);
            }));
        }
        Io() {
          var t, i;
          const n =
              null !== (t = this.ko("#bottom-chat-controls").outerHeight(!0)) &&
              void 0 !== t
                ? t
                : parseInt(this.ko("#bottom-chat-controls").css("height")),
            e = parseInt(
              this.ko("#chat-input-container").css("padding-bottom"),
            ),
            s =
              (null !== (i = this.ko("#chat-input").outerHeight(!0)) &&
              void 0 !== i
                ? i
                : parseInt(this.ko("#chat-input").css("height"))) +
              n +
              e;
          (this.ko("#emoji-picker-container").css({ bottom: s }),
            this.ko("#gif-picker-container").css({ bottom: s }));
        }
        Ho(t) {
          t.preventDefault();
        }
        Uo(t) {
          t.preventDefault();
        }
        No(t) {
          t.target === this.ko("#chat-input")[0] && this.Z.focusChat();
        }
        So(t) {
          let i, n;
          if (
            window.getSelection &&
            ((i = window.getSelection()), i && i.getRangeAt && i.rangeCount)
          ) {
            ((n = i.getRangeAt(0)), n.deleteContents());
            const e = document.createElement("span");
            ((e.className = "inTextEmoji"), (e.innerHTML = t));
            const s = document.createDocumentFragment();
            let o, r;
            for (; (o = e.firstChild);) r = s.appendChild(o);
            (n.insertNode(s),
              r &&
                ((n = n.cloneRange()),
                n.setStartAfter(r),
                n.collapse(!1),
                i.removeAllRanges(),
                i.addRange(n)));
          }
        }
        zo(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        Zo(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let i = 0; i < t.length; i++) {
            const n = t[i];
            if (!this.zo(n)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var i;
          return Gc(this, void 0, void 0, function* () {
            const n = yield H.getItemsAsync([w]);
            let e = null !== (i = n[w]) && void 0 !== i ? i : b;
            (this.Zo(e) || (e = b),
              Array.isArray(e) &&
                (t &&
                  ((e = e.filter((i) => i.unicode != t.unicode)),
                  e.unshift(t),
                  (e = e.slice(0, 24))),
                yield vr.setItemsAsync({ [w]: e }),
                window.postMessage({ type: "TP_FREQ_USED", data: e }, "*")));
          });
        }
        Oo() {
          (jQuery(window).off("focus", this.Co),
            document.removeEventListener("emoji-click", this.Eo),
            document.removeEventListener("keydown", this.xo, !0),
            document.removeEventListener("click", this.Ao),
            window.removeEventListener("message", this.K),
            document.removeEventListener(
              "webkitfullscreenchange",
              this.Z.onFullScreen,
            ),
            document.removeEventListener(
              "fullscreenchange",
              this.Z.onFullScreen,
            ));
        }
        Mo() {
          (this.ko(".user-icon").off(),
            this.ko("#user-icon").off(),
            this.ko("#link-icon").off(),
            this.ko(".image-button").off(),
            this.ko("#chat-input").off(),
            this.ko("#saveChanges").off(),
            this.ko("#cancelNickname").off(),
            this.ko("#chat-input-container").off(),
            this.ko("#chat-wrapper").off());
        }
      }
      class Zc {
        constructor(t) {
          ((this.Wo = !1), (this.Yo = !1), (this.kt = !1), (this.Z = t));
        }
        setupPresenceIndicator() {
          ((this.Wo = !1), (this.Yo = !1), (this.kt = !1), this.Qo());
        }
        Jo() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          ((this.Wo = t), this.Qo());
        }
        setBufferingPresenceVisible(t) {
          ((this.Yo = t), this.Qo());
        }
        setWatchingAdsPresenceVisible(t) {
          ((this.kt = t), this.Qo());
        }
        getWatchingAdsVisible() {
          return this.kt;
        }
        Ko() {
          return this.kt
            ? "People are watching ads..."
            : this.Wo && this.Yo
              ? "People are typing and buffering..."
              : this.Wo
                ? "People are typing..."
                : this.Yo
                  ? "People are buffering..."
                  : "";
        }
        Qo() {
          const t = this.Ko();
          (this.Jo().text(t),
            this.Z.queueMessageForFrame(B.SET_PRESENCE_MESSAGE, { text: t }));
        }
      }
      var Wc = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class Yc {
        constructor(i) {
          ((this.qo = !1),
            (this.Xo = 1),
            (this.tr = !1),
            (this.ir = !1),
            (this.nr = ""),
            (this.Vt = ""),
            (this.er = "0"),
            (this.sr = ""),
            (this.rr = !0),
            (this.ar = !1),
            (this.ur = 0),
            (this.cr = []),
            (this.hr = new Po()),
            (this.lr = !1),
            (this.dr = void 0),
            (this.pr = !0),
            (this.Dr = this.vr()),
            (this.gr = this.vr()),
            (this.mr = !1),
            (this.wr = !1),
            (this.yr = []),
            (this.br = 0),
            (this.Cr = 0),
            (this.Fr = !1),
            (this.logEvent = (i) => {
              const n = new rr(e, t, i);
              E.m(n);
            }),
            (this.checkInitReactionContainer = () => {
              H.getItemsAsync([D]).then((t) => {
                (!0 !== t[D] && void 0 !== t[D]) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.Y) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.hr.pushTask(
                () => vr.setItemsAsync({ [D]: t.active }),
                "setReactionsActive",
              );
            }),
            (this.onFullScreen = () => {
              var t;
              (this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this.Y) || void 0 === t || t.setChatButtons());
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this._r = !1),
            (this.Er = new zc(this, i)),
            (this.kr = new Zc(this)),
            (this.Ar = new ya(this)),
            (this.Sr = void 0),
            (this.Ir = void 0),
            (this.qs = !1),
            (this.ko = Hc(i || "")),
            (this.br = 0));
        }
        setPageControls(t) {
          this.Y = t;
        }
        fixPageControls() {
          var t, i;
          (null === (t = this.Y) || void 0 === t || t.enablePartyIcons(),
            null === (i = this.Y) || void 0 === i || i.setChatButtons());
        }
        Br() {
          return Wc(this, void 0, void 0, function* () {
            return E.m(new $r(e, t));
          });
        }
        usesChatMountPolling() {
          return !1;
        }
        isChatMountReady() {
          return !1;
        }
        isChatInjected() {
          return this.Tr();
        }
        logSidebarInjected(i) {
          return Wc(this, void 0, void 0, function* () {
            if (this.Fr || !i || this.isPartyWindowsActive()) return;
            let n, s;
            if (((this.Fr = !0), yield this.jr(), this.Tr()))
              if (((s = this.$r()), this.Pr(s)))
                try {
                  yield $e(() => this.lr, 3e4)();
                } catch (t) {
                  n = "messaging_timeout";
                }
              else n = "layout_invalid";
            else
              ((n = "mount_missing"),
                (s = {
                  connected: !1,
                  has_size: !1,
                  visible: !1,
                  has_frame: !1,
                }));
            const o = void 0 === n;
            E.m(
              new Fr(
                e,
                t,
                {
                  event_name: "sidebar_injected",
                  service: i,
                  success: o,
                  session_id: this.Vt,
                  extra_info: {
                    is_create: !0 === this.Lr,
                    uses_mount_polling: this.usesChatMountPolling(),
                    mount_ready: this.usesChatMountPolling()
                      ? this.isChatMountReady()
                      : void 0,
                    layout_checks: s,
                    failure_reason: n,
                  },
                },
                Cr.PARTY,
              ),
            );
          });
        }
        $r() {
          const t = this.ko("#chat-wrapper")[0];
          if (!t)
            return { connected: !1, has_size: !1, visible: !1, has_frame: !1 };
          const i = t.getBoundingClientRect(),
            n = window.getComputedStyle(t),
            e = this.ko("#tpChatFrame")[0];
          return {
            connected: t.isConnected,
            has_size: i.width > 0 && i.height > 0,
            visible:
              "none" !== n.display &&
              "hidden" !== n.visibility &&
              "0" !== n.opacity,
            has_frame: !!e,
          };
        }
        Pr(t) {
          return t.connected && t.has_size && t.visible && t.has_frame;
        }
        jr() {
          return Wc(this, void 0, void 0, function* () {
            if (this.Tr() || !this.usesChatMountPolling()) return;
            try {
              yield $e(() => this.Tr() || void 0 === this.Rr, 32e3)();
            } catch (t) {}
          });
        }
        Mr() {
          return Wc(this, void 0, void 0, function* () {
            if (!this.Tr() && !this.isPartyWindowsActive())
              return this.usesChatMountPolling()
                ? (yield this.Or(),
                  void (this.Tr() || this.scheduleChatInjectRetryIfNeeded()))
                : void this.Vr();
          });
        }
        Or() {
          return Wc(this, void 0, void 0, function* () {
            if (!this.Tr() && !this.isPartyWindowsActive())
              try {
                yield $e(
                  () =>
                    !!this.Tr() ||
                    (this.isChatMountReady() && this.Vr(), this.Tr()),
                  15e3,
                )();
              } catch (t) {
                this.ki(
                  "Chat sidebar mount timed out",
                  null == t ? void 0 : t.message,
                );
              }
          });
        }
        scheduleChatInjectRetryIfNeeded() {
          this.usesChatMountPolling() &&
            (this.Tr() ||
              this.isPartyWindowsActive() ||
              !this._r ||
              this.Rr ||
              ((this.Cr = 0),
              (this.Rr = setInterval(() => {
                this.Ur();
              }, 2e3))));
        }
        Ur() {
          return Wc(this, void 0, void 0, function* () {
            this.Tr() || !this._r || this.isPartyWindowsActive()
              ? this.Nr()
              : (this.Cr++,
                this.Cr > 15
                  ? this.Nr()
                  : (yield this.reloadChat(), this.Tr() && this.Nr()));
          });
        }
        Nr() {
          this.Rr && (clearInterval(this.Rr), (this.Rr = void 0));
        }
        setChatVisible(t, i = !0) {
          return Wc(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive())
              throw new Error("Invalid Set Chat");
            (i && (this.rr = t),
              t && this.resetUnreadMessagesCount(),
              t && !this.Tr() && this.reloadChat());
          });
        }
        incrementUnreadMessagesCount() {
          this.br++;
          const t = document.querySelector("#tp-chat-button");
          if (t) {
            const i = t.querySelector(".unread-messages-count");
            if ((i && i.remove(), this.br > 0)) {
              const i = document.createElement("span");
              ((i.textContent = String(this.br)),
                (i.className = "unread-messages-count"),
                Object.assign(i.style, {
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                  zIndex: "10",
                  textAlign: "center",
                  boxShadow: "0 0 2px rgba(0,0,0,0.2)",
                }),
                ("" !== t.style.position && "static" !== t.style.position) ||
                  (t.style.position = "relative"),
                t.appendChild(i));
            }
          }
        }
        resetUnreadMessagesCount() {
          this.br = 0;
          const t = document.querySelector("#tp-chat-button");
          if (t) {
            const i = t.querySelector(".unread-messages-count");
            i && i.remove();
          }
        }
        getUnreadMessagesCount() {
          return this.br;
        }
        ki(i, n) {
          const s = new rr(e, t, {
            name: "error",
            action: { reason: n, description: i },
          });
          E.m(s);
        }
        getChatWindowVisible() {
          return this.gr;
        }
        setChatWindowActive(t) {
          this.Dr = t;
        }
        isChatFrameActive() {
          return this.pr;
        }
        isPartyWindowsActive() {
          return this.Dr;
        }
        shouldChatBeVisible() {
          return this.rr;
        }
        incrementEmojiCount() {
          this.ur++;
        }
        resetEmojiCount() {
          this.ur = 0;
        }
        getEmojiCount() {
          return this.ur;
        }
        setChatFrameReady(t) {
          (this.lr && this.Hr(),
            (this.lr = !0),
            (this.Gr = t),
            console.log("setChatFrameReady"));
        }
        queueMessageForFrame(t, i) {
          this.hr.pushTask(
            () =>
              Wc(this, void 0, void 0, function* () {
                this.zr(t, i);
              }),
            "queueMessageForFrame",
          );
        }
        zr(t, i) {
          return Wc(this, void 0, void 0, function* () {
            t === B.LOAD_INIT_DATA && L("cs_init_data_sent");
            const n = this.Gr,
              s = {
                type: t,
                data: i,
                target: "TP_Sidebar",
                tabId: n,
                sender: e,
              };
            E.m(s);
          });
        }
        Zr() {
          var t;
          return Wc(this, void 0, void 0, function* () {
            try {
              (console.log("Start delay"),
                yield $e(() => this.lr && null != this.Gr, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.dr && this.Wr(this.dr),
                null === (t = this.Y) ||
                  void 0 === t ||
                  t.setResetChatButton());
            } catch (t) {
              this.ki("Sidewindow didn't load in time", t);
            }
          });
        }
        vr() {
          return (
            window.origin.includes(".crunchyroll.com"),
            window.origin.includes("tv.apple.com"),
            !1
          );
        }
        Yr() {
          return window.location.hostname.includes("f1tv.formula1.com");
        }
        Qr() {
          return Wc(this, void 0, void 0, function* () {
            (yield E.m(new $(e, t, S.LOAD_CHAT_WINDOW)), console.log(this.Gr));
          });
        }
        resetChatWindow(i = !1) {
          var n;
          return Wc(this, void 0, void 0, function* () {
            (yield E.m(new $(e, t, S.RESET_CHAT_WINDOW)),
              console.log(this.Gr),
              (this.gr = !0),
              (this.rr = !0),
              null === top ||
                void 0 === top ||
                top.postMessage({ type: "exitFullscreen" }, "*"),
              this.mr &&
                i &&
                (this.resetIconListener(),
                null === (n = this.Y) ||
                  void 0 === n ||
                  n.setResetChatButton()));
          });
        }
        hideChatWindow() {
          return Wc(this, void 0, void 0, function* () {
            (yield E.m(new $(e, t, S.HIDE_CHAT_WINDOW)),
              (this.gr = !1),
              (this.rr = !1));
          });
        }
        Jr() {
          return Wc(this, void 0, void 0, function* () {
            (this.Qr(),
              this.hr.pushTask(this.Zr.bind(this), "waitChatFrameReady"));
          });
        }
        loadInitData(t) {
          this.dr = t;
        }
        Wr(t) {
          var i;
          return Wc(this, void 0, void 0, function* () {
            const n = Object.assign({}, t);
            if (
              ((n.iconMap = va),
              (n.extensionBaseUrl = chrome.runtime.getURL("")),
              (n.iconFrameMap = ga),
              n.storageData)
            ) {
              const t = yield Uc.getValidatedChromeStorageDataAsync();
              (console.log("GOt storage data in send init stuff", t),
                (n.storageData = t));
            }
            if (
              null === (i = n.sessionCallbackData) || void 0 === i
                ? void 0
                : i.sessionId
            ) {
              const { sessionId: t } = n.sessionCallbackData,
                i = yield H.getItemsAsync(["REDIRECT_URL"]);
              i.REDIRECT_URL &&
                i.REDIRECT_URL[t] &&
                (n.sessionCallbackData.redirectUrl = i.REDIRECT_URL[t]);
            }
            this.queueMessageForFrame(B.LOAD_INIT_DATA, n);
            const e = yield this.getVideoTitle();
            (this.queueMessageForFrame(B.SET_PAGE_TITLE, { pageTitle: e }),
              this.queueMessageForFrame(B.SET_USER_LIST, this.yr),
              this.queueMessageForFrame(B.UPDATE_SETTINGS, {
                userSettings: (yield this.Br()).userSettings,
              }));
          });
        }
        Hr() {
          return Wc(this, void 0, void 0, function* () {
            this.dr && (yield this.Wr(this.dr));
            const t = yield this.Br(),
              i = this.Ar.getUserIconURL(
                t.currentUser.userIds.permId,
                t.userSettings.userIcon,
              ),
              n = this.Ar.setUserIconFrameForUser(
                t.currentUser.userIds.permId,
                t.userSettings.userIconFrame,
              );
            (this.queueMessageForFrame(B.SET_USER_ICON_URL, i),
              this.queueMessageForFrame(B.SET_USER_ICON_FRAME_URL, n));
            const e = yield this.getVideoTitle();
            (this.queueMessageForFrame(B.SET_PAGE_TITLE, { pageTitle: e }),
              this.reloadMessages());
          });
        }
        Kr() {
          return Wc(this, void 0, void 0, function* () {
            (yield this.Mr(),
              this.Tr() && (L("cs_chat_injected"), yield this.qr()));
          });
        }
        qr() {
          return Wc(this, void 0, void 0, function* () {
            yield je(200)();
            const t = this.ko("#tpChatFrame")[0];
            (t && (t.style.display = "block"),
              yield this.setChatVisible(!0),
              this.addIconSelector(),
              this.Xr(),
              this.kr.setupPresenceIndicator(),
              this.checkInitReactionContainer());
          });
        }
        get sessionReactionsDisabled() {
          return this.ir;
        }
        get userReactionsDisabled() {
          return this.tr;
        }
        setUserReactionsDisabledStatus(t) {
          this.tr = t;
        }
        setSessionReactionDisabledStatus(t) {
          this.ir = t;
        }
        rt() {
          return Wc(this, void 0, void 0, function* () {
            (this.Er.initWindowListeners(),
              this.vr() && this.Jr(),
              this.hr.pushTask(
                this.Zr.bind(this),
                "InitChat, _waitChatFrameReady",
              ),
              qo());
            const t = yield this.Br();
            L("cs_user_data");
            const i = this.Ar.getUserIconURL(
                t.currentUser.userIds.permId,
                t.userSettings.userIcon,
              ),
              n = this.Ar.setUserIconFrameForUser(
                t.currentUser.userIds.permId,
                t.userSettings.userIconFrame,
              );
            (this.Ar.setUserIconUrl(i),
              this.Ar.setUserIconFrameUrl(n),
              this.Ar.renderSidebar(),
              (this._r = !0),
              Mc(!0),
              this.Tr() ||
                (yield this.ta(),
                this.vr()
                  ? jQuery("body").after(
                      `\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `,
                    )
                  : (yield this.Kr(), this.checkAddYoutubePromo())));
          });
        }
        checkAddYoutubePromo() {
          return Wc(this, void 0, void 0, function* () {
            "true" !==
              (yield H.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.Ar.addYoutubePromo(),
              vr.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(i) {
          var n;
          return Wc(this, void 0, void 0, function* () {
            this.dr = i;
            const s = Object.assign({}, i);
            if (
              ((s.iconMap = va),
              (s.extensionBaseUrl = chrome.runtime.getURL("")),
              (s.iconFrameMap = ga),
              null === (n = s.sessionCallbackData) || void 0 === n
                ? void 0
                : n.sessionId)
            ) {
              const { sessionId: i } = s.sessionCallbackData,
                n = yield H.getItemsAsync(["REDIRECT_URL"]);
              n.REDIRECT_URL &&
                n.REDIRECT_URL[i] &&
                (s.sessionCallbackData.redirectUrl = n.REDIRECT_URL[i]);
              const o = yield E.m(new G(e, t, { key: "sportLobby" }));
              (null == o ? void 0 : o.result) &&
                o.result.includes(i) &&
                (s.sessionCallbackData.redirectUrl = o.result);
            }
            this.queueMessageForFrame(B.LOAD_INIT_DATA, s);
          });
        }
        reloadChat() {
          return Wc(this, void 0, void 0, function* () {
            if (
              (console.log("Reload chat"),
              !this.Tr() && !this.isPartyWindowsActive())
            ) {
              if ((yield this.Mr(), !this.Tr())) return;
              yield je(200)();
              const t = this.ko("#tpChatFrame")[0];
              (t && (t.style.display = "block"),
                yield this.setChatVisible(this.rr),
                this.addIconSelector(),
                this.ia(),
                this.Xr(),
                this.kr.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
            }
          });
        }
        sendTeardown(i) {
          const n = new Xo(e, t, i);
          E.m(n);
        }
        Tr() {
          return this.ko("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.Ar.clearUnreadCount();
        }
        na() {
          return Wc(this, void 0, void 0, function* () {
            try {
              yield $e(
                () =>
                  null !== document.querySelector("#chat-history") ||
                  this.Dr ||
                  (this.lr && this.pr),
                1e4,
              )();
            } catch (t) {
              this.ki("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, i = !1) {
          this.hr.pushTask(
            () =>
              Wc(this, void 0, void 0, function* () {
                (yield this.na(), this.Ar.addMessage(t, i));
              }),
            "addMessage, _waitForChatHistory",
          );
        }
        addGif(t) {
          this.hr.pushTask(
            () =>
              Wc(this, void 0, void 0, function* () {
                (yield this.na(), this.Ar.addGif(t));
              }),
            "addGif",
          );
        }
        reloadMessages() {
          this.Ar.reloadMessages();
        }
        scrollToBottom() {
          this.Ar.scrollToBottom();
        }
        addReviewMessage() {
          (this.Ar.addReviewMessage(), (this.qs = !0));
        }
        get showingReveiwMessage() {
          return this.qs;
        }
        set shouldReturnToVideo(t) {
          this.mr = t;
        }
        onBufferingMessage(t) {
          this.hr.pushTask(
            () =>
              Wc(this, void 0, void 0, function* () {
                (yield this.na(),
                  this.kr.setBufferingPresenceVisible(
                    t.usersBuffering.length > 0,
                  ));
              }),
            "addBufferingMessage",
          );
        }
        onTypingMessage(t) {
          this.hr.pushTask(
            () =>
              Wc(this, void 0, void 0, function* () {
                (yield this.na(),
                  this.kr.setTypingPresenceVisible(t.usersTyping.length > 0));
              }),
            "onTypingMessage",
          );
        }
        onWatchingAdsMessage(t) {
          const i = t.usersWatchingAds.length > 0;
          (console.log("[TpDebug] onWatchingAdsMessage", {
            anyoneWatchingAds: t.anyoneWatchingAds,
            usersWatchingAds: t.usersWatchingAds,
            willShow: i,
          }),
            this.kr.setWatchingAdsPresenceVisible(i));
        }
        getWatchingAds() {
          return this.kr.getWatchingAdsVisible();
        }
        onNextEpisodeAvailable(t) {
          (console.log("onNextEpisodeAvailable", t),
            this.queueMessageForFrame(B.UPDATE_ACTIONS_STATE, {
              nextEpisodeReady: t,
            }));
        }
        doUpdateSettings(i) {
          var n, s;
          return Wc(this, void 0, void 0, function* () {
            const o = yield E.m(new Ka(e, t, i));
            if (o) {
              const t = (yield this.Br()).currentUser.userIds.permId;
              (t &&
                this.Ar.updateUserData(
                  t,
                  o.userIcon,
                  o.userNickname,
                  null !== (n = o.userIconFrame) && void 0 !== n ? n : "",
                ),
                this.Ar.setUserIconFrameUrl(
                  null !== (s = o.userIconFrame) && void 0 !== s ? s : "",
                ));
            }
            i.shouldBroadcast && this.ea(this.sa(o));
          });
        }
        onUpdateSettingsMessage(t) {
          var i, n;
          return Wc(this, void 0, void 0, function* () {
            this.Ar.updateUserData(
              t.permId,
              t.userSettings.userIcon,
              t.userSettings.userNickname,
              null !== (i = t.userSettings.userIconFrame) && void 0 !== i
                ? i
                : "",
            );
            const e = yield this.Br(),
              s = this.Ar.getUserIconURL(
                e.currentUser.userIds.permId,
                e.userSettings.userIcon,
              );
            (this.Ar.setUserIconUrl(s),
              t.permId === e.currentUser.userIds.permId &&
                this.Ar.setUserIconFrameUrl(
                  null !== (n = t.userSettings.userIconFrame) && void 0 !== n
                    ? n
                    : "",
                ),
              this.Ar.renderSidebar());
          });
        }
        Xr() {
          $e(() => this.Tr(), 1e4)().then(() => {
            this.Er.startListening();
          });
        }
        ia() {
          (this.Er.stopListening(),
            this.oa && (clearTimeout(this.oa), (this.ar = !1)));
        }
        teardown() {
          (this.Nr(),
            (this._r = !1),
            Mc(!1),
            (this.Vt = void 0),
            (this.Lr = void 0),
            (this.Fr = !1),
            (this.lr = !1),
            this.ia(),
            this.ko("[tpInjected]").remove(),
            this.removeChat(),
            this.setChatVisible(!1),
            console.log("teardown"));
        }
        focusChat() {
          this.ko("#chat-input")[0].focus();
        }
        showEmojiPicker() {
          var t, i;
          (this.ko("#gif-picker-container").is(":hidden") || this.toggleGIFs(),
            this.ko("#emoji-picker-btn-icon").css({ opacity: "1" }));
          const n =
              null !== (t = this.ko("#bottom-chat-controls").outerHeight(!0)) &&
              void 0 !== t
                ? t
                : parseInt(this.ko("#bottom-chat-controls").css("height")),
            e = parseInt(
              this.ko("#chat-input-container").css("padding-bottom"),
            ),
            s =
              (null !== (i = this.ko("#chat-input").outerHeight(!0)) &&
              void 0 !== i
                ? i
                : parseInt(this.ko("#chat-input").css("height"))) +
              n +
              e;
          this.ko("#emoji-picker-container").css({ bottom: s });
        }
        hideEmojiPicker() {
          (this.ko("#emoji-picker-btn-icon").css({ opacity: "" }),
            this.ko("#emoji-picker-container").css("bottom", ""));
        }
        showReactionHolder() {
          (this.ko("#reaction-btn-icon").css({ opacity: "1" }),
            this.ko("#reaction-holder").css({ display: "flex" }),
            this.ko("#reaction-holder").css({ "padding-top": "8px" }),
            this.ko("#chat-input-container").css({ "padding-top": "0" }));
        }
        hideReactionHolder() {
          (this.ko("#reaction-btn-icon").css({ opacity: "" }),
            this.ko("#reaction-btn").css({ background: "", padding: "" }),
            this.ko("#reaction-holder").css({ "padding-top": "" }),
            this.ko("#chat-input-container").css({ "padding-top": "" }),
            this.hr.pushTask(() => vr.setItemsAsync({ [D]: !1 })));
        }
        onOpenGifPicker() {
          var t, i;
          return Wc(this, void 0, void 0, function* () {
            (this.ko("#emoji-picker-container").is(":hidden") ||
              this.toggleEmojiClicker(),
              this.ko("#gif-results-left")[0].innerHTML || this.fetchGIFs(),
              this.ko("#gif-btn-icon").css({ opacity: "1" }));
            const n =
                null !==
                  (t = this.ko("#bottom-chat-controls").outerHeight(!0)) &&
                void 0 !== t
                  ? t
                  : parseInt(this.ko("#bottom-chat-controls").css("height")),
              e = parseInt(
                this.ko("#chat-input-container").css("padding-bottom"),
              ),
              s =
                (null !== (i = this.ko("#chat-input").outerHeight(!0)) &&
                void 0 !== i
                  ? i
                  : parseInt(this.ko("#chat-input").css("height"))) +
                n +
                e;
            this.ko("#gif-picker-container").css({ bottom: s });
          });
        }
        onCloseGifPicker() {
          (this.ko("#gif-btn-icon").css({ opacity: "" }),
            this.ko("#gif-btn").css({ background: "", padding: "" }));
        }
        toggleEmojiClicker() {
          this.ko("#emoji-picker-container").slideToggle(0, () => {
            this.ko("#emoji-picker-container").is(":hidden")
              ? this.hideEmojiPicker()
              : this.showEmojiPicker();
          });
        }
        toggleReactions() {
          const t = document.querySelector("#chat-history");
          let i = !1;
          (t &&
            Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 10 &&
            (i = !0),
            this.ko("#reaction-holder").slideToggle(0, () => {
              const t = this.ko("#reaction-holder").is(":hidden");
              (t ? this.hideReactionHolder() : this.showReactionHolder(),
                !t && i && this.Ar.scrollToBottom());
            }));
        }
        onVideoClick() {
          this.queueMessageForFrame(B.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          this.ko("#gif-picker-container").slideToggle(0, () => {
            this.ko("#gif-picker-container").is(":hidden")
              ? this.onCloseGifPicker()
              : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(i) {
          i.stopPropagation();
          const n = new rr(e, t, {
            name: "user_click",
            component: {
              name: "chat_input_container-emoji_picker",
              type: "button",
              origin: "tp",
            },
          });
          (E.m(n), this.toggleEmojiClicker());
        }
        addGifPicker(i) {
          i.stopPropagation();
          const n = new rr(e, t, {
            name: "user_click",
            component: {
              name: "chat_input_container-gif_popup",
              type: "button",
              origin: "tp",
            },
          });
          (E.m(n), this.toggleGIFs());
        }
        getMessages(t = !1) {
          return this.Ar.getMessages(t);
        }
        addReactionTab(i) {
          i.stopPropagation();
          const n = new rr(e, t, {
            name: "user_click",
            component: {
              name: "chat_input_container-reaction_pinner",
              type: "button",
              origin: "tp",
            },
          });
          (E.m(n), this.toggleReactions());
        }
        ta() {
          return Wc(this, void 0, void 0, function* () {
            ((this.ra = Fc()),
              (this.ra = this.ra.replace(
                /{EXTENSION_LOGO}/g,
                ma(chrome.runtime.getURL("img/tp_logo.svg")),
              )));
            const t = yield this.Br();
            if (void 0 === t.userSettings)
              throw new Error(
                "Attempt to set chatHtml when _userSettings is undefined.",
              );
            const i = chrome.runtime.getURL("");
            this.ra = this.ra.replace(
              /{CHAT_URL}/g,
              `${g}?t=${Date.now()}&id=${encodeURIComponent(i.substring(0, i.length - 1))}`,
            );
            for (const t of m) {
              const i = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
                n = new RegExp(`${t}_GIF`.toUpperCase(), "g");
              ((this.ra = this.ra.replace(
                i,
                chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`),
              )),
                (this.ra = this.ra.replace(
                  n,
                  chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`),
                )));
            }
            ((this.ra = this.ra.replace(
              /{USER_NICKNAME}/g,
              t.userSettings.userNickname
                ? ma(t.userSettings.userNickname)
                : "Add a nickname",
            )),
              (this.ra = this.ra.replace(
                /{USER_ICON}/g,
                this.Ar.getUserIconURL(
                  t.currentUser.userIds.permId,
                  t.userSettings.userIcon,
                ),
              )),
              (this.ra = this.ra.replace(
                /{LINK_SVG}/g,
                chrome.runtime.getURL("img/icon_link_active.svg"),
              )),
              (this.ra = this.ra.replace(
                /{RESET_SGV}/g,
                chrome.runtime.getURL("img/reset_chat.svg"),
              )),
              (this.ra = this.ra.replace(
                /{EMOJI_PICKER_ICON}/g,
                chrome.runtime.getURL("img/emoji_picker.svg"),
              )),
              (this.ra = this.ra.replace(
                /{REACTION_PICKER_ICON}/g,
                chrome.runtime.getURL("img/reaction-popup.svg"),
              )),
              (this.ra = this.ra.replace(
                /{GIF_PICKER_ICON}/g,
                chrome.runtime.getURL("img/gif_icon.svg"),
              )),
              (this.ra = this.ra.replace(
                /{GIF_BACK_BUTTON}/g,
                chrome.runtime.getURL("img/icon_chevron.svg"),
              )),
              (this.ra = this.ra.replace(
                /{EMOJI_LIB}/g,
                chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"),
              )),
              (this.ra = this.ra.replace(
                /{EMOJI_FRAME}/g,
                chrome.runtime.getURL("web/emojiPicker.html"),
              )),
              (this.ra = this.ra.replace(
                /{X_CIRCLE}/g,
                chrome.runtime.getURL("img/x-circle.svg"),
              )));
          });
        }
        toggleIconContainer() {
          var t, i;
          return Wc(this, void 0, void 0, function* () {
            if (this.ko("#chat-icon-container").data("active"))
              (this.ko("#chat-icon-container").data("active", !1),
                this.ko("#chat-icon-container").slideUp(),
                this.ko(".chat-settings-container").slideUp(),
                this.ko("#sidebar-tabs-container").slideDown(),
                this.wr
                  ? this.ko("#chat-history-container").slideDown()
                  : this.ko("#chat-friends-frame").slideDown(),
                this.ar && this.ko("#chat-ad-holder").show(),
                this.ko("#chat-input-container").show(),
                this.ko("#reaction-holder").hide(),
                this.hideReactionHolder(),
                this.ko("#teleparty-blog-container").show(),
                this.ko("#presence-indicator").show(),
                this.ko("#chat-header-container").removeClass(
                  "chat-header-container-active",
                ));
            else {
              const n = yield this.Br();
              (this.ko("#chat-icon-container").data("active", !0),
                this.ko(".chat-settings-container").show(),
                this.ko("#chat-icon-container").hide(),
                this.ko("#chat-link-container").hide(),
                this.ko("#chat-history-container").hide(),
                this.ko("#sidebar-tabs-container").hide(),
                this.ko("#chat-friends-frame").slideUp(),
                this.ko("#chat-ad-holder").hide(),
                this.ko("#chat-input-container").hide(),
                this.ko("#teleparty-blog-container").hide(),
                this.ko("#presence-indicator").hide(),
                this.ko("#reaction-holder").hide(),
                this.ko("#nickname-edit").attr(
                  "placeholder",
                  null !== (t = n.userSettings.userNickname) && void 0 !== t
                    ? t
                    : "",
                ),
                (this.ko("#nickname-edit")[0].value =
                  null !== (i = n.userSettings.userNickname) && void 0 !== i
                    ? i
                    : ""));
            }
          });
        }
        togglePartyTab() {
          (this.ko("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            this.ko("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            this.ko("#chat-history-container").show(),
            this.ko("#chat-friends-frame").slideUp(),
            this.ko("#chat-input-container").show(),
            (this.wr = !0));
        }
        toggleFriendsTab() {
          (this.ko("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            this.ko("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            this.ko("#chat-friends-frame").removeClass("tp-hidden"),
            this.ko("#chat-friends-frame").slideDown(),
            this.ko("#chat-history-container").slideUp(),
            this.ko("#chat-input-container").hide(),
            (this.wr = !1));
        }
        toggleLargeUserIconButton() {
          this.ko("#chat-icon-container").data("active") &&
            (this.ko("#chat-icon-container").show(),
            this.ko(".chat-settings-container").hide(),
            this.ko("#chat-header-container").addClass(
              "chat-header-container-active",
            ));
        }
        linkIconListener() {
          (navigator.clipboard.writeText(this.getPartyUrl()),
            this.ko("#link-icon .tooltiptext").text("Link copied"),
            setTimeout(() => {
              this.ko("#link-icon .tooltiptext").text("Copy Link");
            }, 1e3));
        }
        resetIconListener() {
          var t;
          if (null === (t = this.Qs) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", {
              detail: {
                type: "jumpToNextEpisode",
                nextVideoId: this.Qs.videoId,
                isShort: window.location.href.includes("/shorts/"),
              },
            });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.nr = t;
        }
        setMessageForwarder(t) {
          this.Qs = t;
        }
        setSessionId(t) {
          this.Vt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(B.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(B.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          (t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const i = t.userSettings,
                n = this.Ar.getUserIconURL(t.permId, i.userIcon),
                e = this.Ar.setUserIconFrameForUser(t.permId, i.userIconFrame),
                s = this.Ar.getUserNickname(t.permId, i.userNickname);
              t.parsedData = {
                userIconUrl: n,
                userNickname: s,
                userIconFrameUrl: e,
              };
            }
          }),
            (this.yr = t),
            this.ko("#user-count").text(t.length),
            this.queueMessageForFrame(B.SET_USER_LIST, t));
        }
        setSessionCreated(t) {
          this.Lr = t;
        }
        getSessionCreated() {
          return this.Lr;
        }
        getSessionId() {
          return this.Vt;
        }
        getPartyUrl() {
          return this.nr;
        }
        userIconSelectorListener(i) {
          return Wc(this, void 0, void 0, function* () {
            const n = jQuery(i.currentTarget).data("icon");
            if (n) {
              const i = yield E.m(new Ka(e, t, { userIcon: n }));
              (this.queueMessageForFrame(B.UPDATE_SETTINGS, {
                userSettings: i.userSettings,
              }),
                this.ea(this.sa(i.userSettings)));
            }
            this.toggleIconContainer();
          });
        }
        removeChat() {
          (this.clearUnreadCount(),
            this.ko("#chat-container").remove(),
            this.ko("#chat-wrapper").remove());
        }
        ea(t, i) {
          E.m(t).then(i);
        }
        aa(i) {
          return new kc(e, t, { reactionType: i });
        }
        ua(i) {
          return new Ac(e, t, { gifObject: i });
        }
        ca(i) {
          return new Ec(e, t, { body: i });
        }
        ha(i) {
          return new _c(e, t, { typing: i });
        }
        sa(i) {
          const n = {
            userSettings: {
              userNickname: i.userNickname,
              userIcon: i.userIcon,
              userIconFrame: i.userIconFrame,
              nameColor: i.nameColor,
              badge: i.badge,
              reactions: i.reactions,
            },
          };
          return new xc(e, t, n);
        }
        la(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction() || this.tr) return;
          const i = t.reactionType,
            n = this.getReactionContainer();
          if (n) {
            const t = Math.floor(40 * Math.random()) + 40,
              e =
                n[0].offsetWidth - (this.shouldAddReactionSpace() ? No : 0) - t,
              s =
                Math.floor(Math.random() * e) +
                (this.shouldAddReactionSpace() ? No : 0),
              o = this.la(i),
              r = Math.ceil(3 * Math.random()),
              a = jQuery(
                `<img class="on-screen-reaction on-screen-reaction-${r}" src='${o}' />`,
              );
            (a.css("right", `${s}px`),
              a.css("width", `${t}px`),
              a.css("height", `${t}px`),
              n.append(a),
              setTimeout(() => {
                a.remove();
              }, 5e3));
          }
        }
        onReactionClicked(i) {
          (console.log(i), this.ea(this.aa(i)));
          const n = new rr(e, t, {
            name: "user_click",
            component: {
              name: "chat_input_container-reaction_holder-reaction",
              type: i,
              origin: "tp",
            },
          });
          E.m(n);
          const s = new rr(e, t, {
            eventType: "reaction-" + i,
            sessionId: this.getSessionId(),
          });
          E.m(s);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          (t.stopPropagation(), this.Er.resetIdleTimer());
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              (console.error("Cannot get locale from Intl"),
                this.ki("Cannot get locale from Intl", t));
            }
        }
        clickGif(i) {
          console.log("GIF was clicked");
          let n = i.target.id;
          if (isNaN(n))
            ((n = "trending" === n ? "" : n),
              this.fetchGIFs(n),
              (this.ko("#gif-search")[0].value = n));
          else {
            const i = this.cr.find((t) => t.id === n);
            if (!i) return;
            const s = {
              id: i.id,
              title: i.title,
              description: i.content_description,
              isSticker: !1,
              media: i.media,
            };
            (this.ea(this.ua(s), () => {
              this.logShare(i.id, this.ko("#gif-search")[0].value);
              const n = {
                  name: "user_click",
                  action: {
                    description: "gif clicked",
                    source: i.media.full.url,
                  },
                  component: {
                    name: "chat_input_container-gif_popup-gif",
                    type: "video",
                    origin: "tp",
                  },
                },
                s = new rr(e, t, n);
              E.m(s);
              const o = new rr(e, t, {
                eventType: "gif-share",
                sessionId: this.getSessionId(),
              });
              E.m(o);
            }),
              this.toggleGIFs());
          }
        }
        da(t) {
          const i = document.createElement("video"),
            n = 124 / (t.media.preview.dims[0] / t.media.preview.dims[1]);
          return (
            (i.autoplay = !0),
            (i.loop = !0),
            (i.playsInline = !0),
            i.setAttribute("disablePictureInPicture", ""),
            i.setAttribute("disableRemotePlayback", ""),
            (i.src = t.media.preview.url),
            (i.muted = !0),
            (i.id = t.id),
            (i.height = n),
            (i.className = "gif-img"),
            i
          );
        }
        pa(t) {
          const i = document.createElement("img"),
            n =
              124 /
              (t.media.previewMobile.dims[0] / t.media.previewMobile.dims[1]);
          return (
            i.setAttribute("disablePictureInPicture", ""),
            i.setAttribute("disableRemotePlayback", ""),
            (i.src = t.media.previewMobile.url),
            (i.id = t.id),
            (i.height = n),
            (i.className = "gif-img"),
            i
          );
        }
        loadGIFs(t) {
          (this.ko(".gif-placeholder").remove(),
            this.cr.push(...t.results),
            (this.er = t.next),
            t.results.forEach((t) => {
              const i = this.shouldUseVideoGIF() ? this.da(t) : this.pa(t);
              (this.ko("#gif-results-left")[0].scrollHeight >
              this.ko("#gif-results-right")[0].scrollHeight
                ? this.ko("#gif-results-right")[0]
                : this.ko("#gif-results-left")[0]
              ).appendChild(i);
            }),
            this.Xo < 6 && this.fa(),
            setTimeout(() => {
              this.qo = !1;
            }, 100));
        }
        onScrollToBottom(t) {
          return Wc(this, void 0, void 0, function* () {
            const i =
              t.target.scrollHeight - t.target.scrollTop <=
              t.target.clientHeight + 450;
            if (this.qo) t.preventDefault();
            else if ("0" !== this.er && i && this.Xo < 6) {
              ((this.Xo += 1), (this.qo = !0), t.preventDefault());
              const i = yield fetch(this.sr + `&pos=${this.er}`),
                n = yield i.json();
              this.loadGIFs(n);
            }
          });
        }
        resetGif() {
          ((this.ko("#gif-search")[0].value = ""),
            this.ko("#gif-input-back").hide(),
            this.ko("#gif-search").css("width", ""),
            this.fetchGIFs());
        }
        displayCategories() {
          ((this.ko("#gif-search")[0].value = ""),
            this.ko("#category-container").show(),
            this.ko("#gif-results").hide(),
            this.ko("#gif-input-back").hide(),
            this.ko("#gif-search").css("width", ""));
        }
        showCategories() {
          ((this.ko("#gif-search")[0].value = ""),
            this.ko("#gif-input-back").hide(),
            this.ko("#gif-search").css("width", ""));
          const t = document.createElement("div");
          ([
            "trending",
            "dance",
            "annoyed",
            "omg",
            "crazy",
            "shrug",
            "smile",
            "awkward",
            "ew",
            "surprised",
            "why",
            "ouch ",
          ].forEach((i) => {
            const n = document.createElement("div"),
              e = document.createElement("span");
            ((e.id = "category-txt"),
              (e.innerHTML = i),
              (n.className = "tp-category-div"));
            const s = document.createElement("video");
            ((s.autoplay = !0),
              (s.src =
                "https://media.tenor.com/videos/166d7d5a1be3b0755e7f9e29ebefe2c3/mp4"),
              (s.className = "category-img"),
              (s.id = i),
              (s.loop = !0),
              n.appendChild(e),
              n.appendChild(s),
              t.appendChild(n));
          }),
            (this.ko("#category-container")[0].innerHTML = t.innerHTML));
        }
        Da() {
          const t = [],
            i = [];
          for (let n = 0; n < 4; n++) {
            let n = Math.floor(4 * Math.random()) + 1;
            for (; i.includes(n);) n = Math.floor(4 * Math.random()) + 1;
            i.push(n);
            const e = document.createElement("div");
            ((e.className = `gif-placeholder gif-placeholder-${n} gif-img`),
              t.push(e));
          }
          return t;
        }
        fa() {
          return Wc(this, void 0, void 0, function* () {
            (this.ko("#gif-results-left")[0].append(...this.Da()),
              this.ko("#gif-results-right")[0].append(...this.Da()));
          });
        }
        logShare(t, i) {
          return Wc(this, void 0, void 0, function* () {
            const n = this.getClientLocale(),
              e = n ? `&locale=${n}` : "",
              s = `&id=${t}`,
              o = i && i.length > 0 ? `q=${i}` : "";
            yield fetch(`${v}/register-share?${o}${e}${s}`);
          });
        }
        fetchGIFs(t) {
          return Wc(this, void 0, void 0, function* () {
            const i = yield this.getVideoTitle(),
              n = null == i ? void 0 : i.replace(/[^\w\s]/g, "");
            ((this.Xo = 1),
              (this.qo = !0),
              this.ko("#category-container").hide(),
              this.ko("#gif-columns-wrapper").show(),
              (this.ko("#gif-results-left")[0].innerHTML = ""),
              (this.ko("#gif-results-right")[0].innerHTML = ""),
              (this.cr = []),
              this.fa());
            const e = this.getClientLocale(),
              s = e ? `&locale=${e}` : "";
            let o = n ? `search-gifs?q=${n}` : "trending-gifs?";
            ((o = t ? `search-gifs?q=${t}` : o), (this.sr = `${v}/${o}${s}`));
            const r = yield fetch(`${v}/${o}${s}`),
              a = yield r.json();
            if (a.results && a.results.length > 0) this.loadGIFs(a);
            else if (!t) {
              const t = yield fetch(`${v}/trending_gifs?${s}`);
              this.sr = `${v}/trending_gifs?${s}`;
              const i = yield t.json();
              this.loadGIFs(i);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const i = t.target.value;
          if ((void 0 !== this.Ir && clearTimeout(this.Ir), !i))
            return (
              this.ko("#gif-input-back").hide(),
              this.ko("#gif-search").css("width", ""),
              void this.fetchGIFs()
            );
          (this.ko("#gif-input-back").show(),
            this.ko("#gif-search").css("width", "90%"),
            (this.Ir = setTimeout(() => {
              this.fetchGIFs(i);
            }, 500)));
        }
        va(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(i) {
          if ((i.stopPropagation(), "Enter" !== i.key || i.shiftKey))
            (void 0 === this.Sr ? this.ea(this.ha(!0)) : clearTimeout(this.Sr),
              (this.Sr = setTimeout(() => {
                ((this.Sr = void 0), this.ea(this.ha(!1)));
              }, 500)));
          else {
            this.ko("#emoji-picker-container").is(":hidden") ||
              this.toggleEmojiClicker();
            const n = this.ko("#chat-input"),
              s = n[0].textContent;
            if (s && this.va(s)) {
              (void 0 !== this.Sr &&
                (clearTimeout(this.Sr),
                (this.Sr = void 0),
                this.ea(this.ha(!1))),
                n.prop("contenteditable", !1),
                this.ea(this.ca(s.substring(0, 1500)), () => {
                  ((n[0].textContent = ""),
                    n.prop("contenteditable", !0),
                    this.focusChat(),
                    this.onInputChange());
                }));
              const i = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return Lc();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: s.trim(),
                  },
                },
                o = new rr(e, t, i);
              E.m(o);
            } else
              (i.stopImmediatePropagation(),
                i.preventDefault(),
                (n[0].textContent = ""),
                this.onInputChange());
          }
        }
        onInputChange() {
          const t = this.ko("#chat-input");
          if (t.length > 0) {
            const i = t[0].textContent;
            i && this.shouldShowIncreasedSize(i)
              ? t.addClass("tp-emoji-large")
              : t.removeClass("tp-emoji-large");
          }
          this.ko("#emoji-picker-container").css("bottom").length > 0 &&
            (this.ko("#emoji-picker-container").is(":hidden") ||
              this.showEmojiPicker());
        }
        shouldShowIncreasedSize(t) {
          const i = t.replace(C, "").replace(/[\uFE0F]/g, ""),
            n = ((t || "").match(C) || []).length;
          return 0 === i.length && n <= 3 && n > 0;
        }
        saveChangesListener() {
          return Wc(this, void 0, void 0, function* () {
            const i = this.ko("#nickname-edit")
              .val()
              .slice(0, 25)
              .replace(/^\s+|\s+$/g, "");
            if (i !== (yield this.Br()).userSettings.userNickname) {
              const n = yield E.m(new Ka(e, t, { userNickname: i }));
              (this.queueMessageForFrame(B.UPDATE_SETTINGS, {
                userSettings: n.userSettings,
              }),
                this.ea(this.sa(n.userSettings)),
                this.ko("#nickname-edit").attr("placeholder", i),
                this.ko("#nickname-edit").text(i));
            }
            this.toggleIconContainer();
          });
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this._r;
        }
        addIconSelector() {
          Object.keys(va).forEach((t) => {
            if (wa[t]()) {
              const i = va[t],
                n = jQuery(
                  '\n                <ul id="icon-holder"></ul>\n            ',
                );
              for (const e of i) this.ga(`${t}/${e}`, n, e);
              const e = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `,
              );
              (n.appendTo(e), e.appendTo(this.ko("#icon-holder-template")));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = this.ko("#chat-input").text(),
            i = ((t || "").match(C) || []).length,
            n = t.replace(C, "");
          i <= 3 || n
            ? this.ko(".inTextEmoji").css("font-size", "24px")
            : i > 0
              ? this.ko(".inTextEmoji").css("font-size", "20px")
              : this.ko(".inTextEmoji").css("font-size", "18px");
        }
        ga(t, i, n) {
          jQuery(
            `\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL("img/icons/" + t)}' data-tp-id="chat_container-new_icon_selection-${n}">\n            </a>\n        `,
          )
            .appendTo(i)
            .data("icon", t);
        }
      }
      var Qc = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class Jc extends Yc {
        constructor() {
          (super(),
            (this.ma =
              "\n        #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n            position: absolute !important;\n            z-index: 99 !important;\n        }\n\n        .on-screen-reaction {\n            z-index: 99 !important;\n        }\n\n        #tpIconContainer {\n            width: min-content;\n        }\n        "),
            (this.wa =
              '\n            <style id="tp-crunchyroll-player-layout-styles">\n                .fullscreen-class {\n                    object-fit: contain;\n                    user-select: text;\n                    position: fixed !important;\n                    top: 0px !important;\n                    right: 0px !important;\n                    bottom: 0px !important;\n                    left: 0px !important;\n                    box-sizing: border-box !important;\n                    min-width: 0px !important;\n                    max-width: none !important;\n                    min-height: 0px !important;\n                    max-height: none !important;\n                    width: 100% !important;\n                    height: 100% !important;\n                    transform: none !important;\n                    margin: 0px !important;\n                    z-index: 999;\n                }\n\n                #tpIconContainer {\n                    width: min-content;\n                }\n                #tp-buttons-container {\n                    pointer-events: all;\n                }\n        \n                .no-scroll {\n                    height: 100%;\n                    overflow: hidden;\n                }\n        \n                .fix-background {\n                    background: black !important;\n                }\n            </style>\n        '),
            this.ya());
        }
        ba() {
          return document.querySelector(Jc.Ca) ? Jc.Ca : Jc.Fa;
        }
        _a() {
          return document.querySelector(Jc.Ca) ? Jc.Ca : Jc.Fa;
        }
        ya() {
          if (document.getElementById("tp-crunchyroll-player-layout-styles"))
            return;
          const t = jQuery(this.ba());
          t.length && t.prepend(this.wa);
        }
        getReactionContainer() {
          return jQuery(this._a());
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        isInFullscreen() {
          return this.getReactionContainer().hasClass("fullscreen-class");
        }
        setChatVisible(t, i = !0) {
          const n = Object.create(null, {
            setChatVisible: { get: () => super.setChatVisible },
          });
          return Qc(this, void 0, void 0, function* () {
            (n.setChatVisible.call(this, t, i),
              this.inSession &&
                (t
                  ? (jQuery("#chat-wrapper").show(),
                    jQuery(this.ba()).addClass(Go))
                  : (jQuery("#chat-wrapper").hide(),
                    jQuery(this.ba()).removeClass(Go)),
                this.Ea(t)));
          });
        }
        removeChat() {
          (super.removeChat(), jQuery(this.ba()).removeClass(Go), this.Ea(!1));
        }
        getVideoTitle() {
          var t;
          return Qc(this, void 0, void 0, function* () {
            const i =
              null !== (t = document.querySelector(".show-title-link")) &&
              void 0 !== t
                ? t
                : document.querySelector("#showmedia_about_episode_num");
            if (i) return i.innerText;
          });
        }
        shouldAddReactionSpace() {
          return !0;
        }
        shouldShowReaction() {
          return !0;
        }
        shouldUseVideoGIF() {
          return !1;
        }
        Vr() {
          this.ra &&
            (this.ya(),
            jQuery(this.ba()).after(
              (function (t, i = "") {
                return `\n\n      <style tpInjected data-tp-sidebar-css="1">\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 338px) !important;\n      }\n\n      .with-chat-absolute {\n        position: absolute !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      [data-chat-visible="true"] {\n        left: 0px !important;\n        width: calc(100% - 338px) !important;\n        position: absolute !important;\n    }\n\n      .tp-layout-wrapper {\n        display: flex;\n        align-items: stretch;\n      }\n\n      .tp-video-region {\n        flex: 1 1 auto;\n      }\n\n      .tp-chat-region {\n        flex: 0 0 338px;\n      }\n\n      ${i}\n      \n    </style>\n\n    <link tpInjected data-tp-sidebar-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/chat.css")}">\n    <link tpInjected data-tp-sidebar-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    <div id="tp-layout-wrapper" data-tp-layout="video+chat">\n      <div class="tp-video-region"></div>\n      <div class="tp-chat-region">\n        ${t}\n      </div>\n    </div>\n  `;
              })(this.ra, this.ma),
            ),
            jQuery(".app-body-wrapper").addClass("fix-background"),
            this.Ea(this.getChatVisible()));
        }
        xa(t, i) {
          (null == t ? void 0 : t.style) &&
            (t.style.width = i ? "calc(100% - 338px)" : "100%");
        }
        Ea(t) {
          (() => {
            const i = document.querySelector(Jc.ka);
            this.xa(i, t);
          })();
          const i = setInterval(() => {
            const n = document.querySelector(Jc.ka);
            n && (this.xa(n, t), clearInterval(i));
          }, 200);
          setTimeout(() => {
            clearInterval(i);
          }, 3e3);
        }
      }
      ((Jc.Ca = ".bitmovinplayer-container"),
        (Jc.Fa = ".video-player-wrapper"),
        (Jc.ka = '[data-testid="player-controls-root"]'));
      var Kc = n(7076),
        qc = n.n(Kc);
      class Xc {
        constructor(t, i) {
          ((this.isBrowsing = !1),
            (this.needsCSPBlock = !1),
            (this.id = i),
            this.videoId,
            (this.url = t));
          const n = [Ge];
          for (const i of xo) {
            if (i.isValidUrl(this.url)) {
              ((this.streamingService = i),
                (this.serviceName = i.name),
                (this.videoId = i.getVideoId(t)),
                n.includes(i) && (this.needsCSPBlock = !0));
              break;
            }
            if (i.isBrowsing(this.url)) {
              ((this.isBrowsing = !0),
                (this.streamingService = i),
                (this.serviceName = i.name),
                n.includes(i) && (this.needsCSPBlock = !0));
              break;
            }
          }
        }
        urlWithSessionId(t) {
          return this.streamingService
            ? this.streamingService.urlWithSessionId(t)
            : void 0;
        }
      }
      var th = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class ih {
        constructor(t, i) {
          var n, e, s;
          ((this.Aa = !1),
            (this.Sa = !1),
            (this.Ia = !1),
            (this.St = !1),
            (this.Ba = 0),
            (this.Ta = !1),
            (this.ja = !1),
            (this.$a = !1),
            (this.Pa = !1),
            (this.checkShowMenu = () => {
              const t = this.shouldMenuBeVisible();
              (t != this.Pa && ((this.Pa = t), this.La.forEach((i) => i(t))),
                t && !this.Ra.getChatVisible() ? this.Ma() : this.Oa());
            }),
            console.log(
              "Teleparty Browse Loaded " +
                (null === (n = window.teleparty) || void 0 === n
                  ? void 0
                  : n.tabId),
            ),
            (this.Va = new Xc(
              new URL(window.location.href),
              null !==
                (s =
                  null === (e = window.teleparty) || void 0 === e
                    ? void 0
                    : e.tabId) && void 0 !== s
                ? s
                : 0,
            )),
            (this.Ra = t),
            this.Ra.setPageControls(this),
            (this.La = []),
            (this.ko = Hc(i || "")));
        }
        setChatApi(t) {
          ((this.Ra = t), this.Ra.setPageControls(this));
        }
        registerMenuStateChangeCallback(t) {
          this.La.push(t);
        }
        getReactionsDisabled() {
          return this.St;
        }
        Ua() {
          (this.ko("#tp-control-lock-button .tooltiptext").text(
            this.Ia ? "Only I have control" : "Everyone has control",
          ),
            this.Ia
              ? (this.ko("#tp-unlocked-image").addClass("tp-hidden"),
                this.ko("#tp-locked-image").removeClass("tp-hidden"))
              : (this.ko("#tp-unlocked-image").removeClass("tp-hidden"),
                this.ko("#tp-locked-image").addClass("tp-hidden")));
        }
        Na() {
          this.Sa || ((this.Ia = !this.Ia), this.Ua());
        }
        setResetChatButton() {
          this.Ra.getChatWindowVisible()
            ? (this.ko("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Ra.shouldReturnToVideo &&
                this.ko("#tp-chat-button .tooltiptext").text("Return to Video"),
              this.ko("#tp-chat-reset").removeClass("tp-hidden"),
              this.ko("#tp-chat-gray").addClass("tp-hidden"),
              this.ko("#tp-chat-button .tp-hover-image").addClass("tp-hidden"),
              this.ko("#tp-chat-hidden").addClass("tp-hidden"))
            : (this.ko("#tp-chat-button .tooltiptext").text("Open Chat"),
              this.ko("#tp-chat-reset").addClass("tp-hidden"),
              this.ko("#tp-chat-gray").removeClass("tp-hidden"),
              this.ko("#tp-chat-button .tp-hover-image").removeClass(
                "tp-hidden",
              ),
              this.ko("#tp-chat-hidden").removeClass("tp-hidden"));
        }
        Ha() {
          (this.ko("#tp-chat-hidden").addClass("tp-hidden"),
            this.Ra.isPartyWindowsActive()
              ? (this.setResetChatButton(),
                this.ko("#tp-message-indicator").removeClass("tp-hidden"))
              : (this.ko("#tp-message-indicator").removeClass("tp-hidden"),
                this.ko("#tp-chat-button .tooltiptext").text(
                  `${this.Ba} unread ${1 == this.Ba ? "message" : "messages"}`,
                ),
                this.ko("#tp-chat-gray").removeClass("tp-hidden"),
                this.ko("#tp-chat-reset").addClass("tp-hidden"),
                this.ko("#tp-chat-button .tp-hover-image").removeClass(
                  "tp-hidden",
                )));
        }
        hideMessageIndicator() {
          (this.ko("#tp-message-indicator").addClass("tp-hidden"),
            this.Ra.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (this.ko("#tp-chat-button .tp-hover-image").removeClass(
                  "tp-hidden",
                ),
                this.ko("#tp-chat-button .tooltiptext").text("Show chat"),
                this.ko("#tp-chat-gray").addClass("tp-hidden"),
                this.ko("#tp-chat-hidden").removeClass("tp-hidden"),
                this.ko("#tp-chat-reset").addClass("tp-hidden")));
        }
        onChatMessage() {
          this.Ra.shouldChatBeVisible() ||
            this.Ra.isPartyWindowsActive() ||
            (this.Ba++,
            this.Ha(),
            (this.Ta = !0),
            this.Ma(),
            je(1e3)().then(() => {
              this.Ta = !1;
            }));
        }
        teardown() {
          (this.Ga(), this.Oa(), this.stopEventListener());
        }
        enablePartyIcons() {
          (this.hideError(),
            this.ko("#tp-party-active").removeClass("tp-hidden"),
            this.ko("#tp-party-inactive").addClass("tp-hidden"),
            this.ko("#tp-icon-container .tooltiptext").addClass("tp-hidden"),
            this.ko("#tp-icon-container").attr("style", "cursor: auto"));
        }
        Ga() {
          (this.ko("#tp-party-active").addClass("tp-hidden"),
            this.ko("#tp-party-inactive").removeClass("tp-hidden"),
            this.ko("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            this.ko("#tp-icon-container").removeClass("play-chat-active"),
            this.ko("#play-chat-icon").addClass("tp-hidden"),
            this.ko("#tp-icon-white").removeClass("tp-hidden"));
        }
        hideError() {
          this.ko("#tp-error-box").addClass("tp-hidden");
        }
        za(t) {
          return t
            .replace(
              /{EXTENSION_LOGO_WHITE}/g,
              ma(chrome.runtime.getURL("img/icon_white.svg")),
            )
            .replace(
              /{EXTENSION_LOGO_GRADIENT}/g,
              ma(chrome.runtime.getURL("img/icon_gradient.svg")),
            )
            .replace(/{PLAY_IMAGE}/g, ma(chrome.runtime.getURL("img/play.svg")))
            .replace(
              /{UNLOCKED_IMAGE}/g,
              ma(chrome.runtime.getURL("img/icon_remote_inactive.svg")),
            )
            .replace(
              /{LOCKED_IMAGE}/g,
              ma(chrome.runtime.getURL("img/icon_remote_active.svg")),
            )
            .replace(
              /{ARROW_RIGHT}/g,
              ma(chrome.runtime.getURL("img/arrow-right.svg")),
            )
            .replace(
              /{LINK_IMAGE}/g,
              ma(chrome.runtime.getURL("img/icon_link_inactive.svg")),
            )
            .replace(
              /{LINK_ACTIVE_IMAGE}/g,
              ma(chrome.runtime.getURL("img/icon_link_active.svg")),
            )
            .replace(
              /{CHAT_HIDDEN_IMAGE}/g,
              ma(chrome.runtime.getURL("img/icon_chat_inactive.svg")),
            )
            .replace(
              /{CHAT_GRAY_IMAGE}/g,
              ma(chrome.runtime.getURL("img/icon_chatgray_active.svg")),
            )
            .replace(
              /{CHAT_ACTIVE_IMAGE}/g,
              ma(chrome.runtime.getURL("img/icon_chat_active.svg")),
            )
            .replace(
              /{DISCONNECT_IMAGE}/g,
              ma(chrome.runtime.getURL("img/icon_logout_active.svg")),
            )
            .replace(
              /{RESET_CHAT_IMAGE}/g,
              ma(chrome.runtime.getURL("img/reset_chat.svg")),
            );
        }
        Oa() {
          this.Ta ||
            (this.hideError(),
            this.ko("#tpIconContainer").addClass("tp-hidden"));
        }
        Ma() {
          return th(this, void 0, void 0, function* () {
            if (!this.ja && (this.$a || this.Ra.inSession)) {
              this.ja = !0;
              try {
                (yield this.addTpIcon(),
                  this.Ra.inSession ? this.enablePartyIcons() : this.Ga(),
                  this.ko("#tpIconContainer").removeClass("tp-hidden"),
                  this.setChatButtons());
              } finally {
                this.ja = !1;
              }
            }
          });
        }
        startEventListener() {
          (this.stopEventListener(),
            (this.Za = setInterval(this.checkShowMenu, 200)));
        }
        stopEventListener() {
          this.Za && (clearInterval(this.Za), (this.Za = void 0));
        }
        Wa() {
          return "100px";
        }
        Ya() {
          (this.ko("#tp-buttons-container").attr("style", `top:${this.Wa()}`),
            this.ko("#tp-chat-close-button").attr("style", `top:${this.Wa()}`),
            this.ko("#tp-error-box").attr("style", `top:${this.Wa()}`));
        }
        addTpIcon() {
          return th(this, void 0, void 0, function* () {
            if (
              (this.$a || this.Ra.inSession) &&
              0 === this.ko("#tpIconContainer").length
            ) {
              const t = this.za(qc()),
                i = yield this.getControlsRoot();
              i.length > 0 &&
                (i.append(
                  (function (t, i = "") {
                    return `\n    ${i ? `<style tpInjected data-tp-overlay-css="1">${i}</style>` : `<link tpInjected data-tp-overlay-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/overlay.css")}">`}\n    ${t}\n  `;
                  })(
                    t,
                    '/* ID+class must beat #tp-buttons-container { display: flex !important }, or\n * icons stay visible / flash unstyled at the top before hide wins. */\n#tpIconContainer.tp-hidden,\n#tp-buttons-container.tp-hidden,\n#tp-chat-close-button.tp-hidden,\n#tp-error-box.tp-hidden,\n#tp-party-active.tp-hidden,\n#tp-message-indicator.tp-hidden,\n#play-chat-icon.tp-hidden,\n#tp-chat-reset.tp-hidden,\n#tp-chat-gray.tp-hidden,\n#tp-chat-hidden.tp-hidden,\n#tp-unlocked-image.tp-hidden,\n#tp-locked-image.tp-hidden,\n.tp-hidden,\n[tpInjected] .hidden {\n    display: none !important;\n}\n\n#tpIconContainer .slider,\n#tp-buttons-container .slider {\n    padding: 0% !important;\n}\n\n#tp-friend-iframe {\n    display: block;\n    background-color: var(--base-black);\n    border-radius: 4px;\n    padding: 20px;\n    right: 60px;\n    top: 0px;\n    border: none;\n    height: 550px;\n    width: 332px;\n    position: absolute;\n    z-index: 99999999999999999;\n}\n\n.tp-seperator {\n    border: 1px solid var(--black-20);\n    border-radius: 1px;\n    width: 40px;\n    height: 0px;\n}\n\n#tp-controls-error-text {\n    color: var(--white-5);\n    text-align: center;\n    padding: 5px;\n}\n\n#tp-error-box {\n    width: 170px;\n    height: 60px;\n    z-index: 9999;\n    position: fixed;\n    right: 80px;\n    top: 50px;\n    /* box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25); */\n    -webkit-backdrop-filter: blur(6px);\n    border-radius: 4px;\n    background-color: rgba(25, 25, 25, 0.7);\n    transition: transform 1s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#tp-buttons-container {\n    width: 50px;\n    z-index: 9999;\n    position: fixed;\n    right: 30px;\n    top: 50px;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: transform 1s;\n    display: flex !important;\n    flex-direction: column;\n    align-items: center;\n}\n\n.play-chat-active {\n    background: none !important;\n}\n\n.play-chat-active:hover {\n    background: var(--black-20) !important;\n}\n\n#tp-icon-container {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n    display: flex !important;\n    border-radius: 4.8px;\n    justify-content: center;\n    align-items: center;\n}\n\n.tp-center-image {\n    position: absolute;\n}\n\n.tooltip-holder {\n    position: relative;\n}\n\n.tooltip-holder:hover .tooltiptext {\n    visibility: visible;\n}\n\n#tp-icon-container:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tp-control-button:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tp-control-button:hover .tp-button-image {\n    visibility: hidden;\n}\n\n.tp-hover-image {\n    visibility: hidden;\n}\n\n.tp-control-button:hover .tp-hover-image {\n    visibility: visible;\n}\n\n.tp-control-button:hover {\n    background-color: var(--black-20);\n}\n\n#tp-message-indicator {\n    background: linear-gradient(135deg, #e34248 0%, #bc4d7a 56.67%, #9e55a0 100%);\n    width: 10px;\n    height: 10px;\n    border-radius: 10px;\n    position: absolute;\n    top: 10px;\n    right: 12px;\n}\n\n#tp-chat-close-button {\n    position: fixed;\n    width: 30px;\n    height: 30px;\n    right: calc(var(--chatWidth) + 5px);\n    top: 113px;\n    z-index: 9999;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 26.4px;\n}\n\n#tp-chat-close-button img {\n    width: 22px;\n    height: 22px;\n}\n\n.tooltiptext {\n    visibility: hidden;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 4px;\n    color: white !important;\n    font-size: 14px !important;\n    text-align: center;\n    vertical-align: center;\n    height: 40px;\n    padding: 5px 0;\n    border-radius: 4px;\n    position: absolute;\n    right: calc(105% + 5px);\n    align-items: center;\n    justify-content: center;\n    display: inline-flex;\n}\n\n.tooltiptext-lower {\n    right: 0px;\n    top: calc(100%);\n}\n\n.tp-control-button {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border-radius: 4px;\n}\n\n.tp-control-button img {\n    width: 16px;\n    height: 16px;\n}\n\n#tp-icon-white {\n    width: 16px;\n    height: 16px;\n}\n\n.createPartyContainer {\n    z-index: 9999;\n    right: 0px;\n    top: var(--containerTop);\n    position: fixed;\n    display: block;\n    background: var(--base-black);\n    width: 332px;\n    height: var(--containerHeight);\n    padding: 20px;\n    border-radius: 4px;\n}\n\n.buttonContainerVisible {\n    animation: goToContainer 0.6s;\n    animation-fill-mode: forwards;\n}\n\n.tpButtonHover {\n    animation: buttonHover 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.tpButtonOut {\n    animation: hoverOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.buttonContainerOut {\n    animation: buttonContainerOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.containerIn {\n    animation: containerIn 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.containerOut {\n    animation: containerOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes goToContainer {\n    0% {\n        border-radius: 50%;\n        background-color: black;\n    }\n    100% {\n        opacity: 1;\n        top: calc(var(--containerTop) + 75px);\n        right: var(--containerWidth);\n        border-top-left-radius: 50%;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 50%;\n        background-color: var(--base-black);\n    }\n}\n\n@keyframes containerIn {\n    0% {\n        right: -400px;\n    }\n    100% {\n        right: 0px;\n    }\n}\n\n@keyframes containerOut {\n    0% {\n        right: 0px;\n    }\n    100% {\n        right: -400px;\n    }\n}\n\n@keyframes buttonContainerOut {\n    0% {\n        opacity: 1;\n        top: calc(var(--containerTop) + 75px);\n        right: var(--containerWidth);\n        border-top-left-radius: 50%;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 50%;\n        background-color: var(--base-black);\n    }\n    100% {\n        opacity: 0.2;\n        right: var(--outRight);\n        border-radius: 50%;\n        background-color: black;\n    }\n}\n\n@keyframes buttonHover {\n    0% {\n    }\n    100% {\n        opacity: 1;\n        right: 0px;\n    }\n}\n\n@keyframes hoverOut {\n    0% {\n        opacity: 1;\n        right: 0px;\n    }\n    100% {\n        opacity: 0.2;\n        right: var(--outRight);\n    }\n}\n\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";\n\n/*\n * overlay.css is injected into the host page with the TP icon. Keep resets scoped\n * so streaming-site controls (YouTube buttons/sliders) are not reset globally.\n */\n#tpIconContainer,\n#tp-error-box {\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n#tpIconContainer *,\n#tp-error-box * {\n    box-sizing: border-box;\n}\n#tpIconContainer :is(h1, h2, h3, h4, h5, h6, a, p, ul, li, ol, button),\n#tp-error-box :is(h1, h2, h3, h4, h5, h6, a, p, ul, li, ol, button) {\n    padding: 0em;\n    margin: 0em;\n}\n#tpIconContainer :is(ul, li, ol, a),\n#tp-error-box :is(ul, li, ol, a) {\n    text-decoration: none;\n    list-style: none;\n}\n#tpIconContainer :is(input, button),\n#tp-error-box :is(input, button) {\n    border: none;\n}\n#tpIconContainer :is(h1, h2, h3, h4, h5, h6, p, span),\n#tp-error-box :is(h1, h2, h3, h4, h5, h6, p, span) {\n    user-select: text !important;\n    cursor: auto !important;\n}\n#tpIconContainer img,\n#tp-error-box img {\n    user-select: none !important;\n}\n#tpIconContainer :is(div, section, button, input, form, article),\n#tp-error-box :is(div, section, button, input, form, article) {\n    outline: none;\n}\n#tpIconContainer a,\n#tp-error-box a {\n    display: inline;\n    /* width: fit-content; */\n}\n#tpIconContainer :is(button, input, form, fieldset),\n#tp-error-box :is(button, input, form, fieldset) {\n    background: none;\n}\n#tpIconContainer button:hover,\n#tp-error-box button:hover {\n    cursor: pointer;\n}\n.r-m {\n    margin: 0 !important;\n}\n.r-m-t {\n    margin-top: 0 !important;\n}\n.r-p-t {\n    padding-top: 0 !important;\n}\n.r-m-l {\n    margin-left: 0 !important;\n}\n.r-p-l {\n    padding-left: 0 !important;\n}\n.r-m-r {\n    margin-right: 0 !important;\n}\n.r-p-r {\n    padding-right: 0 !important;\n}\n.r-m-b {\n    margin-bottom: 0 !important;\n}\n.r-p-b {\n    padding-bottom: 0 !important;\n}\n.r-b-r {\n    border-radius: 0px !important;\n}\n.r-boxshadow {\n    box-shadow: none !important;\n}\n:root {\n    --outRight: -25px;\n    --containerTop: calc(50% - var(--containerHalf));\n    --containerHeight: 205px;\n    --containerHalf: 102.5px;\n    --chatWidth: 340px;\n    --gradient-1: linear-gradient(135deg, #e34248 0%, #bc4d7a 56.67%, #9e55a0 100%);\n    --patreon: #f96854;\n    --base-red: #ef3e3a;\n    --active-red: #ea0f0a;\n    --base-blue: #4da9ff;\n    --base-orange: #ff8d4c;\n    --base-green: #24d154;\n    --base-white: #fafafa;\n    --white-5: #f0f0f0;\n    --white-10: #dcdcdc;\n    --white-15: #c8c8c8;\n    --white-20: #b4b4b4;\n    --white-25: #a0a0a0;\n    --white-30: #8c8c8c;\n    --white-35: #787878;\n    --base-black: #191919;\n    --black-5: #5a5a5a;\n    --black-10: #464646;\n    --black-15: #323232;\n    --black-20: #282828;\n    --black-25: #1e1e1e;\n    --black-30: #0a0a0a;\n}\n.base-white-bg {\n    background-color: var(--base-white);\n}\n.white-5-bg {\n    background-color: var(--white-5);\n}\n.white-10-bg {\n    background-color: var(--white-10);\n}\n.white-15-bg {\n    background-color: var(--white-15);\n}\n.white-20-bg {\n    background-color: var(--white-20);\n}\n.white-25-bg {\n    background-color: var(--white-25);\n}\n.white-30-bg {\n    background-color: var(--white-30);\n}\n.white-35-bg {\n    background-color: var(--white-35);\n}\n.base-black-bg {\n    background-color: var(--base-black);\n}\n.black-5-bg {\n    background-color: var(--black-5);\n}\n.black-10-bg {\n    background-color: var(--black-10);\n}\n.black-15-bg {\n    background-color: var(--black-15);\n}\n.black-20-bg {\n    background-color: var(--black-20);\n}\n.black-25-bg {\n    background-color: var(--black-25);\n}\n.black-30-bg {\n    background-color: var(--black-30);\n}\n.black-35-bg {\n    background-color: var(--black-35);\n}\n.base-red-bg {\n    background-color: var(--base-red);\n}\n.active-red-bg {\n    background-color: var(--active-red);\n}\n.base-orange-bg {\n    background-color: var(--base-orange);\n}\n.base-blue-bg {\n    background-color: var(--base-blue);\n}\n.base-green-bg {\n    background-color: var(--base-green);\n}\n.patreon-bg {\n    background-color: var(--patreon);\n}\n.txt-blue {\n    color: var(--base-blue) !important;\n}\n.txt-red {\n    color: var(--base-red) !important;\n}\n.txt-white {\n    color: var(--base-white) !important;\n}\n#tpIconContainer :is(div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button),\n#tp-error-box :is(div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button) {\n    word-wrap: normal;\n}\n:root {\n    --regular: 400;\n    --medium: 500;\n    --semi-bold: 600;\n    --bold: 700;\n    --extra-bold: 800;\n    --black: 900;\n}\n.extension-title {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    color: var(--base-red);\n    font-size: 16px;\n    letter-spacing: 0.2px;\n}\n.extension-txt {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--regular);\n    color: var(--white-15);\n    font-size: 14px;\n}\n.extension-txt-indicator {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--regular);\n    color: var(--white-35);\n    font-size: 11px;\n}\n.extension-description {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    color: var(--white-10);\n    font-size: 13px;\n}\n.extension-border-bot {\n    border-bottom: 1px solid var(--black-10);\n}\n.extension-border-top {\n    border-top: 1px solid var(--black-10);\n}\n.extension-btn {\n    width: 100%;\n    margin-top: 10px;\n    background: var(--base-red);\n    color: var(--base-white);\n    padding: 10px 0px;\n    border-radius: 2px;\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    transition: background 0.3s ease;\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: center;\n    font-size: 14px;\n}\n.extension-btn:hover {\n    background: var(--active-red);\n}\n.extension-btn a {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    color: var(--base-white);\n}\n.no-error {\n    display: block;\n    background: var(--base-black);\n    width: var(--containerWidth);\n    padding: 20px;\n    border-radius: 4px;\n}\n.no-error input[type="text"] {\n    display: block;\n    outline-style: none;\n    color: var(--base-white);\n    border: 1px solid var(--base-white);\n    border-radius: 4px;\n    width: 100%;\n    height: 40px;\n    padding: 8px 12px;\n    margin-top: 10px;\n}\n.no-error input[type="text"]:focus {\n    border: 1px solid var(--white-35);\n}\n.no-error label {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    display: flex;\n    flex-flow: wrap row;\n    align-items: center;\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--regular);\n    color: var(--base-white);\n    font-size: 12px;\n    margin-top: 12px;\n}\n.no-error label input {\n    margin-right: 10px;\n}\n.no-error h2 {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--semi-bold);\n    color: var(--base-white);\n    font-size: 18px;\n    letter-spacing: 0.2px;\n}\n.no-error button {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    cursor: pointer;\n    background-color: var(--base-red);\n    color: var(--base-white);\n    transition: 0.3s ease;\n    font-size: 13px;\n    letter-spacing: 0.2px;\n    margin-top: 16px;\n    transform: translateY(0px);\n}\n.no-error button:hover {\n    transform: translateY(-2px);\n}\n.no-error i {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--bold);\n}\n.no-error .copy-val {\n    display: block;\n    width: fit-content;\n    margin-top: 10px;\n    padding: 10px 20px;\n}\n.no-error .copy-val a {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    border-radius: 2px;\n    transition: 0.3s ease;\n    font-size: 12px;\n}\n.some-error {\n    display: block;\n    background: var(--base-black);\n    width: 332px;\n    padding: 20px;\n    border-radius: 4px;\n}\n.extension-btn {\n    margin-bottom: 10px;\n}\n#create-session {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#create-session:hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#accept-permissions {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#accept-permissions :hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n.popup-url-container {\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 15px;\n}\n.popup-url-container input[type="text"] {\n    display: block;\n    outline-style: none;\n    color: var(--base-white);\n    border: none;\n    border-bottom: 1px solid var(--base-white);\n    border-radius: 0px;\n    width: 60%;\n    height: 40px;\n    padding: 0px;\n    margin-top: 0px;\n}\n.popup-url-container input[type="text"]:focus {\n    border: none;\n}\n.popup-url-container .copy-val {\n    cursor: pointer !important;\n    width: 34%;\n    margin: 0;\n}\n.popup-url-container .copy-val a {\n    margin: 0;\n}\n.popup-review-container {\n    display: flex;\n    flex-flow: wrap column;\n    width: 100%;\n    padding-top: 15px;\n    margin-top: 15px;\n    border-top: 1px solid var(--black-10);\n}\n.popup-review-container button {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n.popup-review-container button:hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n} /*# sourceMappingURL=pop.min.css.map */\n.ellipsis-anim span {\n    opacity: 0;\n    -webkit-animation: ellipsis-dot 1s infinite;\n    animation: ellipsis-dot 1s infinite;\n}\n\n.ellipsis-anim span:nth-child(1) {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n.ellipsis-anim span:nth-child(2) {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n.ellipsis-anim span:nth-child(3) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n@-webkit-keyframes ellipsis-dot {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes ellipsis-dot {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    margin-top: 0;\n}\n.switch input,\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.switch input:checked + .slider,\n.switch input:checked + .slider {\n    background: var(--gradient-1);\n}\n.switch input:checked + .slider:before,\n.switch input:checked + .slider:before {\n    -webkit-transform: translateX(5px);\n    -ms-transform: translateX(5px);\n    transform: translateX(5px);\n}\n.switch .slider,\n.switch .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--black-5);\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.switch .slider:before,\n.switch .slider:before {\n    position: absolute;\n    content: "";\n    height: 14px;\n    width: 14px;\n    left: 4px;\n    bottom: 2px;\n    background-color: #fff;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.switch .round,\n.switch .round {\n    border-radius: 34px;\n}\n.switch .round:before,\n.switch .round:before {\n    border-radius: 50%;\n}\n.switch .round:hover,\n.switch .round:hover {\n    cursor: pointer !important;\n}\n\n.pinned {\n    background-color: var(--black-20);\n}\n\n.gradient-image {\n}\n\n.body14r {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 21px;\n}\n',
                  ),
                ),
                this.Qa());
            }
          });
        }
        Qa() {
          (this.ko("#tp-control-lock-button").click(this.Na.bind(this)),
            this.Ya(),
            this.ko("#tp-link-button").click(this.Ja.bind(this)),
            this.ko("#tp-chat-button").on(
              "click",
              (t) => (
                this.Ka(),
                t.stopImmediatePropagation(),
                t.stopPropagation(),
                !1
              ),
            ),
            this.ko("#tp-buttons-container").on("mouseenter", () => {
              this.onControlsMouseEnter();
            }),
            this.ko("#tp-buttons-container").on("mouseleave", () => {
              this.onControlsMouseLeave();
            }),
            this.ko("#tp-disconnect-button").on("click", () => {
              this.qa();
            }));
        }
        qa() {
          const i = new Xo(s, t, Ir);
          (E.m(i), this.Oa());
        }
        onControlsMouseEnter() {}
        onControlsMouseLeave() {}
        Ja() {
          (this.Ra.linkIconListener(),
            this.ko("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              this.ko("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3));
        }
        Ka() {
          return th(this, void 0, void 0, function* () {
            ((this.Ba = 0),
              this.hideMessageIndicator(),
              this.Ra.isPartyWindowsActive()
                ? this.Ra.resetChatWindow(!0)
                : (yield this.Ra.setChatVisible(!this.Ra.shouldChatBeVisible()),
                  this.setChatButtons()));
          });
        }
        onInitChat() {
          this.Aa && this.Ma();
        }
        setChatButtons() {
          (this.Ra.inSession && this.Ra.getChatVisible()
            ? this.Xa()
            : this.tu(),
            this.Ra.isPartyWindowsActive()
              ? this.setResetChatButton()
              : this.hideMessageIndicator());
        }
        Xa() {
          return th(this, void 0, void 0, function* () {
            this.Ra.inSession &&
              this.Ra.shouldChatBeVisible() &&
              (this.ko("#tp-chat-close-button").removeClass("tp-hidden"),
              this.ko("#tp-buttons-container").addClass("tp-hidden"));
          });
        }
        tu() {
          (this.ko("#tp-chat-close-button").addClass("tp-hidden"),
            this.ko("#tp-buttons-container").removeClass("tp-hidden"));
        }
      }
      var nh = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class eh extends ih {
        constructor(t, i) {
          (super(t, i),
            (this.isMenuVisibile = !0),
            document.addEventListener("fullscreenchange", () => this.iu()));
        }
        shouldMenuBeVisible() {
          return this.isMenuVisibile;
        }
        getControlsRoot() {
          return nh(this, void 0, void 0, function* () {
            return (yield $e(() => this.nu(), 1 / 0)(), jQuery(this.eu()));
          });
        }
        eu() {
          var t;
          return null !== (t = document.fullscreenElement) && void 0 !== t
            ? t
            : document.querySelector(eh.su);
        }
        iu() {
          const t = document.getElementById("tpIconContainer"),
            i = this.eu();
          t && i && !i.contains(t) && i.appendChild(t);
        }
        nu() {
          return (
            window.location.pathname.includes("/watch") &&
            null != document.querySelector(eh.ou)
          );
        }
        reloadListener() {
          (this.stopEventListener(), this.startEventListener());
        }
      }
      ((eh.su = ".video-player-wrapper"),
        (eh.ou = '[data-testid="bottom-controls-autohide"]'));
      var sh = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class oh {
        constructor() {
          ((this.ru = 0), (this.At = !1), (this.au = !1));
        }
        set hostOnly(t) {
          this.At = t;
        }
        get hostOnly() {
          return this.At;
        }
        get scheduledPartyPlaybackOnly() {
          return this.au;
        }
        set scheduledPartyPlaybackOnly(t) {
          this.au = t;
        }
        applyPartySeekIfAllowed(t) {
          return sh(this, void 0, void 0, function* () {
            this.au || (yield this.setCurrentTime(t));
          });
        }
        freeze(t) {
          return sh(this, void 0, void 0, function* () {
            this.ru++;
            try {
              (yield this.pause(), yield je(t)(), yield this.play());
            } finally {
              this.ru--;
            }
          });
        }
        jumpToNextEpisode(t) {
          return sh(this, void 0, void 0, function* () {
            yield this.jumpToOtherEpisode(t);
          });
        }
        waitBeforeNativePartyStartAsync() {
          return sh(this, void 0, void 0, function* () {
            yield this.waitVideoApiReadyAsync();
          });
        }
        get uiEventsHappening() {
          return this.ru;
        }
        incrementUiEventsHappening(t) {
          this.ru += t;
        }
        uu(t, i, n = 1500) {
          return sh(this, void 0, void 0, function* () {
            const e = "tp-player-" + Date.now() + "-" + oh.cu++;
            return new Promise((s, o) => {
              const r = (t) => {
                  var n;
                  t.source === window &&
                    (null === (n = t.data) || void 0 === n
                      ? void 0
                      : n.type) === i &&
                    t.data.requestId === e &&
                    (window.clearTimeout(a),
                    window.removeEventListener("message", r),
                    s(t.data));
                },
                a = window.setTimeout(() => {
                  (window.removeEventListener("message", r),
                    o(new Error(i + " timeout")));
                }, n);
              (window.addEventListener("message", r),
                window.postMessage(
                  Object.assign(Object.assign({}, t), { requestId: e }),
                  "*",
                ));
            });
          });
        }
        getCustomStartPartyButtonMessage() {
          return sh(this, void 0, void 0, function* () {
            return null;
          });
        }
        beginRemoteSyncApply() {}
        endRemoteSyncApply() {}
        shouldSuppressLocalBroadcast() {
          return this.ru > 0;
        }
        shouldForceEpisodeCompletionBroadcast() {
          return !1;
        }
        getSyncToleranceMs(t) {
          return t;
        }
        shouldCancelSync() {
          return !1;
        }
        hasAdBreakWithinMs(t) {
          return !1;
        }
        getScreenSize() {
          return { width: window.outerWidth, height: window.outerHeight };
        }
        getVideoContent(t, i, n, e, s) {
          let o, r, a;
          return (
            s &&
              (s.episodeNum && !isNaN(s.episodeNum) && (o = s.episodeNum),
              s.seasonNum && !isNaN(s.seasonNum) && (r = s.seasonNum),
              (a = s.title)),
            {
              id: t,
              type: e,
              name: i,
              url: n,
              episode: o,
              season: r,
              episode_name: a,
              service: this.getInternalStreamingServiceName(),
            }
          );
        }
        logError(i, n) {
          console.error("ERROR", i, n);
          const s = new rr(e, t, {
            name: "video_error",
            action: { description: i, reason: n },
          });
          E.m(s);
        }
        doAdCheck() {
          return sh(this, void 0, void 0, function* () {});
        }
        triggerNextEpisodeClick() {}
      }
      oh.cu = 0;
      var rh = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class ah extends oh {
        constructor() {
          (super(),
            (this.hu = !1),
            (this.lu = !1),
            (this.du = !1),
            (this.pu = !1),
            (this.fu = !1),
            (this.Du = null),
            (this.vu = 0),
            (this.gu = () => {
              var t, i;
              const n =
                  null === (t = document.querySelector(".release-date")) ||
                  void 0 === t
                    ? void 0
                    : t.textContent,
                e = n ? n.split(",").pop() : void 0,
                s = document.querySelector(".show-title-link");
              return {
                originalTitle:
                  (null === (i = null == s ? void 0 : s.firstElementChild) ||
                  void 0 === i
                    ? void 0
                    : i.textContent) || void 0,
                type: "TV",
                service: "Crunchyroll",
                episodeYear: e,
              };
            }),
            (this.mu = 0),
            (this.wu = { time: 0, playbackState: Io.NOT_READY, loading: !1 }),
            (this.yu = 0));
        }
        setLocalSeekActive(t) {
          this.lu = t;
        }
        get localSeekActive() {
          return this.lu;
        }
        setHasPlayerControls(t) {
          this.pu = t;
        }
        get hasPlayerControls() {
          return this.pu;
        }
        isSeekSettling() {
          return this.fu;
        }
        beginRemoteSyncApply() {
          this.hu = !0;
        }
        endRemoteSyncApply() {
          this.hu = !1;
        }
        shouldSuppressLocalBroadcast() {
          return super.shouldSuppressLocalBroadcast() || this.hu;
        }
        setBufferingActive(t) {
          this.du = t;
        }
        shouldCancelSync() {
          return !this.pu && (this.lu || this.du || this.fu);
        }
        applyPlayerEvent(t) {
          if ("play" !== t.action)
            if ("pause" !== t.action) {
              if ("seek" === t.action) {
                const i = Number(t.seekTargetMs);
                Number.isFinite(i) &&
                  (this.bu(i),
                  (this.wu = Object.assign(Object.assign({}, this.wu), {
                    time: i,
                  })));
              }
            } else
              this.wu = Object.assign(Object.assign({}, this.wu), {
                playbackState: Io.PAUSED,
                loading: !1,
              });
          else
            this.wu = Object.assign(Object.assign({}, this.wu), {
              playbackState: Io.PLAYING,
              loading: !1,
            });
        }
        bu(t) {
          Number.isFinite(t) &&
            ((this.Du = t), (this.fu = !0), (this.vu = Date.now() + 1e4));
        }
        Cu() {
          ((this.fu = !1), (this.Du = null), (this.vu = 0));
        }
        Fu(t) {
          if (!this.fu || null == this.Du) return t;
          const i = Math.abs(t - this.Du) <= Ro;
          return i || Date.now() >= this.vu
            ? (this.Cu(), i ? t : this.Du)
            : this.Du;
        }
        getVideoElement() {
          var t;
          if (!this.isPlayerPage()) return null;
          const i =
            null !== (t = document.querySelector("video[src]")) && void 0 !== t
              ? t
              : document.querySelector("video");
          return i instanceof HTMLVideoElement ? i : null;
        }
        isBuffering() {
          return this.du;
        }
        syncStateFromNativeVideo() {
          const t = this.getVideoElement();
          if (!t) return !1;
          const i = this.isBuffering();
          let n = Io.PLAYING;
          t.paused ? (n = Io.PAUSED) : i && (n = Io.LOADING);
          const e = 1e3 * (t.currentTime || 0),
            s = this.Fu(e);
          return this.fu
            ? ((this.wu = Object.assign(Object.assign({}, this.wu), {
                time: s,
                loading: i && !t.paused,
              })),
              !0)
            : ((this.wu = {
                time: s,
                playbackState: n,
                loading: i && !t.paused,
              }),
              !0);
        }
        poll() {
          return (this.syncStateFromNativeVideo(), Object.assign({}, this.wu));
        }
        getCachedPlayerState() {
          return Object.assign({}, this.wu);
        }
        onNode(t) {
          const i = t.data;
          "VideoData" == i.type &&
            ((this._u = i.videoData), (this.yu = Date.now()));
        }
        isPlayerPage() {
          return window.location.pathname.includes("/watch");
        }
        Eu(t, i) {
          let n = { type: t };
          (i && (n = { type: t, eventData: i }),
            window.postMessage({ infoSending: n }, "*"));
        }
        sendUpdateVideoData() {
          try {
            this.Eu("getVideoData");
          } catch (t) {}
        }
        updateVideoData() {
          return rh(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              yield $e(
                () => (this.Eu("getVideoData"), 0 != this.yu && this.yu > t),
                5e3,
                250,
              )();
            } catch (t) {}
          });
        }
        updateState() {
          return rh(this, void 0, void 0, function* () {
            this.syncStateFromNativeVideo();
          });
        }
        getVideoData() {
          return rh(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              return (
                yield $e(
                  () => (
                    this.sendUpdateVideoData(),
                    0 != this.yu && this.yu > t
                  ),
                  5e3,
                  250,
                )(),
                this._u
              );
            } catch (t) {
              return this._u;
            }
          });
        }
        waitVideoApiReadyAsync() {
          return rh(this, void 0, void 0, function* () {
            if (!this.isPlayerPage()) throw new Error(R);
            yield $e(
              () => {
                var t;
                return (
                  this.sendUpdateVideoData(),
                  null !=
                    (null === (t = this._u) || void 0 === t
                      ? void 0
                      : t.videoId)
                );
              },
              1 / 0,
              250,
            )();
          });
        }
        waitVideoDoneLoadingAsync() {
          return rh(this, void 0, void 0, function* () {
            return (
              this.Eu("continueParty"),
              $e(
                () => (
                  this.syncStateFromNativeVideo(),
                  this.wu.playbackState !== Io.LOADING
                ),
                1e4,
                200,
              )()
            );
          });
        }
        getStreamingServiceName() {
          return xe.CRUNCHYROLL;
        }
        setCurrentTime(t) {
          return rh(this, void 0, void 0, function* () {
            (this.lu && Math.abs(t - this.wu.time) > Ro) ||
              (this.pu
                ? yield this.xu("seek", t)
                : this.Eu("seekTo", { time: t }));
          });
        }
        getStateAsync() {
          return rh(this, void 0, void 0, function* () {
            if (!this.isPlayerPage()) throw new Error(V);
            return (
              this.pu
                ? this.syncStateFromNativeVideo()
                : yield this.updateState(),
              {
                playbackState: this.wu.playbackState,
                playbackPositionMilliseconds: this.wu.time,
              }
            );
          });
        }
        getUpdateSessionDataAsync() {
          return rh(this, void 0, void 0, function* () {
            this.pu || (yield this.updateState());
            const t = this.wu.time;
            return {
              state:
                this.wu.playbackState !== Io.PLAYING ? So.PAUSED : So.PLAYING,
              lastKnownTime: t,
              lastKnownTimeUpdatedAt: Date.now(),
              bufferingState: !1,
            };
          });
        }
        ku() {
          var t, i;
          const n =
            null !== (t = document.querySelector(".show-title-link")) &&
            void 0 !== t
              ? t
              : document.querySelector("#showmedia_about_episode_num");
          return {
            episodeNum:
              null === (i = this._u) || void 0 === i ? void 0 : i.episodeNumber,
            title: null == n ? void 0 : n.innerText,
          };
        }
        Au() {
          return document.querySelector("div .prev-next-episodes")
            ? yr.EPISODE
            : yr.FEATURE;
        }
        getVideoDataAsync() {
          var t, i, n;
          return rh(this, void 0, void 0, function* () {
            yield this.updateState();
            const e = yield this.getVideoData(),
              s =
                null !== (t = null == e ? void 0 : e.videoId) && void 0 !== t
                  ? t
                  : "",
              o =
                null !== (i = null == e ? void 0 : e.videoTitle) && void 0 !== i
                  ? i
                  : "",
              r = this.Au(),
              a = this.ku(),
              u = this.getScreenSize(),
              c = this.getVideoContent(s, o, window.location.href, r, a),
              { originalTitle: h, type: l, service: d } = this.gu();
            return {
              videoId: s,
              videoTitle: o,
              videoDuration:
                null !== (n = null == e ? void 0 : e.duration) && void 0 !== n
                  ? n
                  : 0,
              screen: u,
              content: c,
              videoState: this.wu.playbackState,
              originalTitle: h,
              type: l,
              videoType: r,
              service: d,
            };
          });
        }
        setVideoEventListener(t) {
          this.Gt = t;
        }
        Su(t, i) {
          return rh(this, void 0, void 0, function* () {
            const n = `crunchyroll-${Date.now()}-${this.mu++}`;
            return new Promise((e, s) => {
              const o = (t) => {
                  if (t.source !== window) return;
                  const s = t.data;
                  s &&
                    s.type === i &&
                    s.requestId === n &&
                    (window.clearTimeout(r),
                    window.removeEventListener("message", o),
                    e(s));
                },
                r = window.setTimeout(() => {
                  (window.removeEventListener("message", o),
                    s(new Error(`${i} timeout`)));
                }, 1500);
              (window.addEventListener("message", o),
                window.postMessage(
                  Object.assign(Object.assign({}, t), { requestId: n }),
                  "*",
                ));
            });
          });
        }
        xu(t, i) {
          return rh(this, void 0, void 0, function* () {
            const n = yield this.Su(
              { type: "TP_CRUNCHYROLL_PLAYER_CONTROL", action: t, timeMs: i },
              "TP_CRUNCHYROLL_PLAYER_CONTROL_RESULT",
            );
            if (!n.ok) throw new Error(n.error || `player ${t} failed`);
          });
        }
        refreshPlayerControlsAvailability() {
          return rh(this, void 0, void 0, function* () {
            const t = yield this.Su(
              { type: "TP_CRUNCHYROLL_HAS_PLAYER_CONTROLS" },
              "TP_CRUNCHYROLL_HAS_PLAYER_CONTROLS_RESULT",
            ).catch(() => ({ ok: !1 }));
            return ((this.pu = !0 === t.ok), this.pu);
          });
        }
        Iu(t) {
          return rh(this, void 0, void 0, function* () {
            if (
              !(yield this.Su(
                { type: "TP_CRUNCHYROLL_DISPATCH_NEXT_EPISODE" },
                "TP_CRUNCHYROLL_DISPATCH_NEXT_EPISODE_RESULT",
              ).catch(() => ({ ok: !1 }))).ok
            )
              return !1;
            try {
              return (
                yield $e(
                  () =>
                    rh(this, void 0, void 0, function* () {
                      var i;
                      return (
                        yield this.updateVideoData(),
                        (null === (i = this._u) || void 0 === i
                          ? void 0
                          : i.videoId) === t
                      );
                    }),
                  3e3,
                )(),
                !0
              );
            } catch (t) {
              return !1;
            }
          });
        }
        Bu(t) {
          return rh(this, void 0, void 0, function* () {
            const i = yield this.Su(
              { type: "TP_CRUNCHYROLL_GET_NEXT_EPISODE_GUID" },
              "TP_CRUNCHYROLL_GET_NEXT_EPISODE_GUID_RESULT",
            ).catch(() => ({ ok: !1 }));
            return !0 === i.ok && i.nextContentId === t;
          });
        }
        Tu(t) {
          var i;
          return rh(this, void 0, void 0, function* () {
            this.ru += 1;
            try {
              Je.getVideoId(new URL(window.location.href)) != t.videoId &&
                (yield null === (i = this.Gt) || void 0 === i
                  ? void 0
                  : i.reloadNextEpisode());
            } finally {
              this.ru -= 1;
            }
          });
        }
        jumpToNextEpisode(t) {
          return rh(this, void 0, void 0, function* () {
            const i = t.videoId,
              n = Je.getVideoId(new URL(window.location.href));
            if (!i || n === i) return;
            this.ru += 1;
            let e = !1;
            try {
              e = yield this.Iu(i);
            } finally {
              this.ru -= 1;
            }
            e || (yield this.Tu(t));
          });
        }
        ju(t) {
          return (
            "object" == typeof t &&
            null !== t &&
            !Array.isArray(t) &&
            !0 === t.isNextEpisode
          );
        }
        jumpToOtherEpisode(t) {
          return rh(this, void 0, void 0, function* () {
            if (this.ju(t.extraInfo))
              return void (yield this.jumpToNextEpisode(t));
            const i = t.videoId,
              n = Je.getVideoId(new URL(window.location.href));
            if (!i || n === i) return;
            this.ru += 1;
            let e = !1;
            try {
              (yield this.Bu(i)) && (e = yield this.Iu(i));
            } finally {
              this.ru -= 1;
            }
            e || (yield this.Tu(t));
          });
        }
        freeze(t) {
          return rh(this, void 0, void 0, function* () {
            (yield this.pause(), yield je(t)(), yield this.play());
          });
        }
        pause() {
          return rh(this, void 0, void 0, function* () {
            try {
              if (this.pu) yield this.xu("pause");
              else {
                const t = this.getVideoElement();
                if (!t) throw new Error("video element not found");
                t.pause();
              }
              (this.syncStateFromNativeVideo(),
                yield $e(
                  () => this.wu.playbackState === Io.PAUSED,
                  2500,
                  10,
                )());
            } catch (t) {
              throw (
                this.logError("video was unable to pause correctly", t),
                t
              );
            }
          });
        }
        play() {
          return rh(this, void 0, void 0, function* () {
            try {
              if (this.pu) yield this.xu("play");
              else {
                const t = this.getVideoElement();
                if (!t) throw new Error("video element not found");
                yield t.play();
              }
              (this.syncStateFromNativeVideo(),
                yield $e(
                  () => this.wu.playbackState === Io.PLAYING,
                  2500,
                  10,
                )());
            } catch (t) {
              throw (this.logError("video was unable to play correctly", t), t);
            }
          });
        }
        getInternalStreamingServiceName() {
          return os.CRUNCHYROLL;
        }
      }
      class uh extends jr {
        constructor(t, i, n) {
          (super(t, i, o.CREATE_SESSION), (this.data = n));
        }
      }
      var ch = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      function hh(n, e, s) {
        return ch(this, void 0, void 0, function* () {
          const o = yield E.m(new $(i, t, S.GET_TAB_ID)),
            r = new Xc(new URL(window.location.href), o),
            a = new uh(i, t, {
              createSettings: { controlLock: n, reactionsDisabled: s },
              streamingService: r.streamingService,
              tabId: r.id,
              isNative: e,
            });
          return E.m(a);
        });
      }
      class lh extends $ {
        constructor(t, i, n) {
          (super(t, i, S.SET_DATA), (this.data = n));
        }
      }
      class dh extends jr {
        constructor(t, i, n) {
          (super(t, i, o.RE_INJECT), (this.data = n));
        }
      }
      function ph(t) {
        return { name: "video", isPresent: () => null !== t() };
      }
      function fh(t) {
        const i = {};
        for (const n of t) i[n.name] = n.isPresent();
        return { success: Object.values(i).every(Boolean), elements: i };
      }
      var Dh = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class vh {
        constructor(t) {
          var i;
          ((this.$u = 0),
            (this.Pu = this.Lu.bind(this)),
            (this.Ru = this.Mu.bind(this)),
            (this.W = t),
            console.log("Video Event Listener"),
            this.Pu(),
            null === (i = window.teleparty) ||
              void 0 === i ||
              i.injectScriptLoaded);
        }
        getCurrentStatus() {
          return Dh(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return Dh(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return Dh(this, void 0, void 0, function* () {
            yield null === (t = this.Qs) || void 0 === t
              ? void 0
              : t.reloadNextEpisode();
          });
        }
        persistForReload(t) {
          var i;
          return Dh(this, void 0, void 0, function* () {
            yield null === (i = this.Qs) || void 0 === i
              ? void 0
              : i.persistExtension(!0, t);
          });
        }
        isOthersWatchingAds() {
          var t, i;
          return (
            null !==
              (i =
                null === (t = this.Qs) || void 0 === t
                  ? void 0
                  : t.getOthersWatchingAds()) &&
            void 0 !== i &&
            i
          );
        }
        getListenerElementChecks() {
          return [ph(() => this.W.getVideoElement())];
        }
        validateListenersPresent() {
          return fh(this.getListenerElementChecks()).success;
        }
        getListenerElementsStatus() {
          return fh(this.getListenerElementChecks()).elements;
        }
        startListening() {
          (this.logListenerElementsDetected(),
            this.Ou(),
            window.addEventListener(vh.ACTIVATION_CONTINUE_EVENT, this.Ru, !1));
        }
        logListenerElementsDetected() {
          var i;
          return Dh(this, void 0, void 0, function* () {
            try {
              yield $e(() => this.validateListenersPresent(), 1e4)();
            } catch (t) {}
            const { success: n, elements: s } = fh(
                this.getListenerElementChecks(),
              ),
              o =
                null === (i = Ao(this.W.getStreamingServiceName())) ||
                void 0 === i
                  ? void 0
                  : i.serverName;
            if (!o) return;
            let r;
            try {
              r = yield this.W.getVideoDataAsync();
            } catch (t) {}
            E.m(
              new Fr(
                e,
                t,
                {
                  event_name: "listener_elements_detected",
                  service: o,
                  video_data: r,
                  success: n,
                  extra_info: { listener_elements: s },
                },
                Cr.PARTY,
              ),
            );
          });
        }
        stopListening() {
          (this.$u++,
            this.Vu(),
            window.removeEventListener(
              vh.ACTIVATION_CONTINUE_EVENT,
              this.Ru,
              !1,
            ));
        }
        stopPartyStartPolling() {
          (this.Uu && (clearInterval(this.Uu), (this.Uu = void 0)),
            this.Nu && (clearInterval(this.Nu), (this.Nu = void 0)));
        }
        Ou() {
          const t = navigator;
          (t.mediaSession.setActionHandler("play", () =>
            Dh(this, void 0, void 0, function* () {
              (this.Hu(),
                this.W.play(),
                console.log("Bluetooth device played the video"));
            }),
          ),
            t.mediaSession.setActionHandler("pause", () =>
              Dh(this, void 0, void 0, function* () {
                (this.Hu(),
                  this.W.pause(),
                  console.log("Bluetooth device paused the video"));
              }),
            ));
        }
        Gu() {
          return 600;
        }
        zu() {
          return 2e3;
        }
        Lu() {
          (this.Zu(),
            (this.Uu = setInterval(this.Zu.bind(this), this.zu())),
            (this.Nu = setInterval(this.Wu.bind(this), 2e3)));
        }
        Yu(t) {
          return !(
            !window.location.href.includes("netflix.com/watch/") ||
            !t.includes("netflix.com/watch/")
          );
        }
        Wu() {
          return Dh(this, void 0, void 0, function* () {
            const i = yield E.m(new G(e, t, { key: "startParty" }));
            if (null == i ? void 0 : i.result) {
              if (!this.Yu(i.result)) return;
              const n = yield hh(!1, !0, !1);
              if (n && !n.error) {
                E.m(new lh(e, t, { key: "startParty", value: null }));
                const i = {
                    name: "user_click",
                    component: {
                      name: `${this.W.getStreamingServiceName().toLowerCase()}_redirect_start_party`,
                      type: "button",
                      origin: "tp",
                    },
                  },
                  n = new rr(e, t, i);
                E.m(n);
              }
            }
          });
        }
        Zu() {
          return Dh(this, void 0, void 0, function* () {
            const n = JSON.parse(localStorage.getItem("nativeParty") || "{}");
            if (
              n.shouldStart &&
              n.expiry > Date.now() &&
              n.randomId !== this.Qu
            ) {
              (yield je(this.Gu())(),
                yield this.W.waitBeforeNativePartyStartAsync());
              const o = yield hh(!1, !0, !1);
              if (o && !o.error) {
                (localStorage.removeItem("nativeParty"),
                  (this.Qu = n.randomId));
                const i = {
                    name: "user_click",
                    component: {
                      name: `${this.W.getInternalStreamingServiceName()}_native_start_party`,
                      type: "button",
                      origin: "tp",
                    },
                  },
                  s = new rr(e, t, i);
                E.m(s);
              } else if ((null == o ? void 0 : o.error) === O) {
                const n = yield E.m(new $(i, t, S.GET_TAB_ID)),
                  e = new Xc(new URL(window.location.href), n),
                  o = new dh(s, t, { extensionTabData: e });
                try {
                  yield E.m(o);
                } catch (t) {
                  console.error("Error re-injecting content scripts", t);
                }
              }
            }
          });
        }
        Vu() {
          const t = navigator;
          (t.mediaSession.setActionHandler("play", null),
            t.mediaSession.setActionHandler("pause", null));
        }
        Ju() {
          var t;
          null === (t = this.Qs) || void 0 === t || t.tryBroadcast(!1);
        }
        Ku(t, i) {
          const n = ++this.$u;
          Lo.pushTask(
            () =>
              Dh(this, void 0, void 0, function* () {
                n === this.$u &&
                  (i ? this.Hu(void 0, i) : this.Ju(),
                  t &&
                    Lo.pushTask(
                      () =>
                        Dh(this, void 0, void 0, function* () {
                          n === this.$u && t();
                        }),
                      "localControlBroadcastComplete",
                    ));
              }),
            "localControlBroadcast",
          );
        }
        Hu(t, i) {
          var n;
          null === (n = this.Qs) || void 0 === n || n.tryBroadcast(!0, i);
        }
        qu() {
          var t;
          null === (t = this.Qs) || void 0 === t || t.setBuffering(!0);
        }
        Xu(t) {
          var i;
          null === (i = this.Qs) || void 0 === i || i.setWatchingAds(!0, t);
        }
        tc() {
          var t, i;
          (null === (t = this.Qs) || void 0 === t || t.setWatchingAds(!1),
            null === (i = this.Qs) || void 0 === i || i.forceSync());
        }
        nc() {
          var t;
          null === (t = this.Qs) || void 0 === t || t.setBuffering(!1);
        }
        Mu(t) {
          var i;
          const n = t.detail,
            e = this.W.getStreamingServiceName(),
            s = document.documentElement.getAttribute(
              vh.ACTIVATION_PENDING_ATTR,
            ),
            o = document.documentElement.getAttribute(
              vh.ACTIVATION_PENDING_SERVICE_ATTR,
            ),
            r = document.documentElement.getAttribute(
              vh.ACTIVATION_HELPER_SERVICE_ATTR,
            ),
            a = document.documentElement.getAttribute(
              vh.ACTIVATION_EXPECTED_SERVICE_ATTR,
            ),
            u = document.documentElement.getAttribute(
              vh.ACTIVATION_EXPECTED_STATE_ATTR,
            );
          "true" === s &&
            o === e &&
            r === e &&
            (null == n ? void 0 : n.serviceName) === e &&
            a === e &&
            "playing" === u &&
            (null === (i = this.Qs) ||
              void 0 === i ||
              i.syncToCurrentPartyTimeAfterActivation());
        }
        ec(t, i) {
          var n;
          null === (n = this.Qs) ||
            void 0 === n ||
            n.sendOtherEpisodeAsync(t, i);
        }
        sc(t, i) {
          var n;
          null === (n = this.Qs) ||
            void 0 === n ||
            n.sendNextEpisodeAsync(t, i);
        }
        oc(t) {
          var i;
          null === (i = this.Qs) || void 0 === i || i.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.Qs = t;
        }
        shouldSync() {
          if (
            "true" !==
            document.documentElement.getAttribute(vh.ACTIVATION_PENDING_ATTR)
          )
            return !0;
          const t = this.W.getStreamingServiceName();
          return !(
            document.documentElement.getAttribute(
              vh.ACTIVATION_PENDING_SERVICE_ATTR,
            ) === t &&
            document.documentElement.getAttribute(
              vh.ACTIVATION_HELPER_SERVICE_ATTR,
            ) === t &&
            document.documentElement.getAttribute(
              vh.ACTIVATION_EXPECTED_SERVICE_ATTR,
            ) === t &&
            "playing" ===
              document.documentElement.getAttribute(
                vh.ACTIVATION_EXPECTED_STATE_ATTR,
              )
          );
        }
        shouldRegisterPartyTimelineSeekListeners() {
          return null == this.Qs || !this.Qs.isScheduledPartyPlaybackOnly();
        }
      }
      ((vh.ACTIVATION_CONTINUE_EVENT = "TPActivationContinue"),
        (vh.ACTIVATION_PENDING_ATTR = "data-tp-activation-pending"),
        (vh.ACTIVATION_PENDING_SERVICE_ATTR = "data-tp-activation-service"),
        (vh.ACTIVATION_HELPER_SERVICE_ATTR =
          "data-tp-activation-helper-service"),
        (vh.ACTIVATION_EXPECTED_STATE_ATTR =
          "data-tp-activation-expected-state"),
        (vh.ACTIVATION_EXPECTED_SERVICE_ATTR =
          "data-tp-activation-expected-service"));
      var gh = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class mh extends vh {
        constructor(t, i, n) {
          (super(t),
            (this.rc = null),
            (this.ac = !1),
            (this.Yo = !1),
            (this.uc = 0),
            (this.cc = 0),
            (this.hc = !1),
            (this.lc = this.onPlay.bind(this)),
            (this.dc = this.onPause.bind(this)),
            (this.fc = this.onSeeking.bind(this)),
            (this.Dc = this.onSeeked.bind(this)),
            (this.vc = () =>
              gh(this, void 0, void 0, function* () {
                this.gc() &&
                  (this.Xu(),
                  this.Z.setChatVisible(this.Z.shouldChatBeVisible()),
                  yield this.mc());
              })),
            (this.mc = () =>
              gh(this, void 0, void 0, function* () {
                yield $e(
                  () => (this.gc() ? !this.gc() : (this.tc(), !1)),
                  1 / 0,
                  1e3,
                )();
              })),
            (this.gc = () => {
              const t = document.querySelector('video[title="Advertisement"]');
              if (!t) return !1;
              const i = t.parentElement;
              return !!i && "none" !== window.getComputedStyle(i).display;
            }),
            (this.W = t),
            (this.Z = i),
            (this.Y = n),
            this.W.setVideoEventListener(this));
          const e = window;
          (e.wc && window.removeEventListener("message", e.wc, !1),
            (e.wc = this.onEventNode.bind(this)),
            window.addEventListener("message", e.wc, !1),
            e.yc && window.removeEventListener("message", e.yc, !1),
            (e.yc = this.W.onNode.bind(this.W)),
            window.addEventListener("message", e.yc, !1));
        }
        getListenerElementChecks() {
          return [
            { name: "playerPage", isPresent: () => this.W.isPlayerPage() },
            ph(() => this.W.getVideoElement()),
          ];
        }
        bc(t) {
          this.W.hasPlayerControls ||
            (t.addEventListener("play", this.lc),
            t.addEventListener("pause", this.dc),
            t.addEventListener("seeking", this.fc),
            t.addEventListener("seeked", this.Dc));
        }
        Cc(t) {
          t &&
            (t.removeEventListener("play", this.lc),
            t.removeEventListener("pause", this.dc),
            t.removeEventListener("seeking", this.fc),
            t.removeEventListener("seeked", this.Dc));
        }
        Fc(t = !1) {
          const i = this.W.getVideoElement();
          (t || i !== this.rc) &&
            (this.Cc(this.rc), (this.rc = i), i && this.bc(i));
        }
        _c() {
          (this.W.setHasPlayerControls(!0), this.Fc(!0), this.Ec());
        }
        xc() {
          (this.W.setHasPlayerControls(!1), this.kc(), this.Fc(!0));
        }
        onPlayerEvent(t) {
          if (
            this.W.hasPlayerControls &&
            !this.W.shouldSuppressLocalBroadcast()
          ) {
            if ("pause" === t.action) {
              if (this.W.isSeekSettling()) return;
              return (
                this.Ac && clearTimeout(this.Ac),
                void (this.Ac = setTimeout(() => {
                  ((this.Ac = void 0),
                    this.W.isSeekSettling() ||
                      this.W.shouldSuppressLocalBroadcast() ||
                      (this.W.applyPlayerEvent({ action: "pause" }),
                      (this.Sc = this.W.getCachedPlayerState()),
                      this.Ic()));
                }, mh.SCRUB_PAUSE_MS))
              );
            }
            if ("seek" === t.action)
              return (
                this.Ac && (clearTimeout(this.Ac), (this.Ac = void 0)),
                this.W.applyPlayerEvent(t),
                (this.cc = Date.now()),
                (this.Sc = this.W.getCachedPlayerState()),
                void this.Ic()
              );
            "play" === t.action &&
              (this.Ac && (clearTimeout(this.Ac), (this.Ac = void 0)),
              this.W.applyPlayerEvent(t),
              (this.Sc = this.W.getCachedPlayerState()),
              this.Ic());
          }
        }
        Ec() {
          null == this.Bc && this.hc && this.W.hasPlayerControls && this.Tc();
        }
        kc() {
          (this.Bc && (clearTimeout(this.Bc), (this.Bc = void 0)),
            (this.Sc = void 0));
        }
        Tc() {
          return gh(this, void 0, void 0, function* () {
            if (this.hc && this.W.hasPlayerControls) {
              try {
                const t = this.Sc,
                  i = this.W.poll();
                (this.jc(t, i), (this.Sc = i));
              } catch (t) {}
              this.hc && this.W.hasPlayerControls
                ? (this.Bc = setTimeout(() => {
                    this.Tc();
                  }, mh.POLL_INTERVAL_MS))
                : (this.Bc = void 0);
            } else this.Bc = void 0;
          });
        }
        jc(t, i) {
          if (!t || this.W.shouldSuppressLocalBroadcast()) return;
          if (this.W.isSeekSettling()) return;
          if (
            t.playbackState !== i.playbackState &&
            i.playbackState !== Io.LOADING &&
            t.playbackState !== Io.LOADING
          )
            return void this.Ic();
          Math.abs(t.time - i.time) > mh.SEEK_DRIFT_MS && this.Ic();
        }
        Ic() {
          (this.$c && clearTimeout(this.$c),
            this.Pc && (clearTimeout(this.Pc), (this.Pc = void 0)),
            (this.$c = setTimeout(() => {
              ((this.$c = void 0), this.Lc());
            }, mh.PLAYER_BROADCAST_COALESCE_MS)));
        }
        Lc() {
          this.W.shouldSuppressLocalBroadcast() ||
            (this.Ju(),
            (this.Pc = setTimeout(() => {
              ((this.Pc = void 0),
                this.$c || this.W.shouldSuppressLocalBroadcast() || this.Ju());
            }, mh.PLAYER_BROADCAST_RETRY_MS)));
        }
        onPlay() {
          this.Rc();
        }
        onPause() {
          this.Rc();
        }
        Rc() {
          this.W.shouldSuppressLocalBroadcast() ||
            this.Yo ||
            this.ac ||
            (this.Mc && clearTimeout(this.Mc),
            (this.Mc = setTimeout(() => {
              ((this.Mc = void 0), this.Oc());
            }, mh.PLAY_PAUSE_SETTLE_MS)));
        }
        Oc() {
          return gh(this, void 0, void 0, function* () {
            this.ac ||
              Date.now() - this.cc < mh.SEEK_SUPPRESS_PLAY_PAUSE_MS ||
              this.Yo ||
              this.W.shouldSuppressLocalBroadcast() ||
              (this.W.syncStateFromNativeVideo(), this.Ju());
          });
        }
        onSeeking() {
          ((this.ac = !0),
            (this.cc = Date.now()),
            this.W.setLocalSeekActive(!0),
            this.Mc && (clearTimeout(this.Mc), (this.Mc = void 0)));
        }
        onSeeked() {
          return gh(this, void 0, void 0, function* () {
            const t = ++this.uc;
            ((this.ac = !0),
              (this.cc = Date.now()),
              this.W.setLocalSeekActive(!0),
              this.Mc && (clearTimeout(this.Mc), (this.Mc = void 0)));
            try {
              if ((yield je(mh.SEEK_SETTLE_MS)(), t !== this.uc)) return;
              if ((this.W.syncStateFromNativeVideo(), t !== this.uc)) return;
              if (this.W.shouldSuppressLocalBroadcast()) return;
              this.Hu(void 0, [br.SEEK]);
            } finally {
              t === this.uc && ((this.ac = !1), this.W.setLocalSeekActive(!1));
            }
          });
        }
        Vc() {
          this.Yo || ((this.Yo = !0), this.W.setBufferingActive(!0), this.qu());
        }
        Uc() {
          this.Yo && ((this.Yo = !1), this.W.setBufferingActive(!1), this.nc());
        }
        onBufferingChange(t) {
          t ? this.Vc() : this.Uc();
        }
        onFullScreen() {
          const i = ".video-player-wrapper",
            n = "fullscreen-class";
          if (jQuery(i).hasClass(n)) {
            (jQuery(i).removeClass(n), jQuery("body").removeClass(zo));
            const s = new $(e, t, S.MAX_WINDOW);
            (E.m(s), this.Z.logEvent({ name: "fullscreen_exit" }));
          } else {
            (jQuery(i).addClass(n), jQuery("body").addClass(zo));
            const s = new $(e, t, S.FULLSCREEN_WINDOW);
            (E.m(s),
              this.Z.logEvent({ name: "fullscreen_enter" }),
              this.Z.setChatVisible(this.Z.shouldChatBeVisible()));
          }
        }
        exitFullscreen() {
          const i = ".video-player-wrapper",
            n = "fullscreen-class";
          if (jQuery(i).hasClass(n)) {
            (jQuery(i).removeClass(n), jQuery("body").removeClass(zo));
            const s = new $(e, t, S.MAX_WINDOW);
            E.m(s);
          }
        }
        startListening() {
          (super.startListening(),
            (this.hc = !0),
            this.W.refreshPlayerControlsAvailability().then((t) => {
              t ? this._c() : this.Fc(!0);
            }),
            this.Fc(),
            (this.Nc = setInterval(() => {
              this.Fc();
            }, 1e3)),
            (this.Hc = setInterval(() => {
              this.vc();
            }, 2e3)));
        }
        stopListening() {
          (super.stopListening(),
            (this.hc = !1),
            this.kc(),
            this.Uc(),
            this.Mc && (clearTimeout(this.Mc), (this.Mc = void 0)),
            this.$c && (clearTimeout(this.$c), (this.$c = void 0)),
            this.Pc && (clearTimeout(this.Pc), (this.Pc = void 0)),
            this.Ac && (clearTimeout(this.Ac), (this.Ac = void 0)),
            this.Cc(this.rc),
            (this.rc = null),
            this.Nc && (clearInterval(this.Nc), (this.Nc = void 0)),
            this.Hc && clearInterval(this.Hc));
        }
        reloadListeners() {
          (this.stopListening(), this.startListening());
        }
        Gc(t) {
          return "object" != typeof t || null === t || Array.isArray(t)
            ? { isNextEpisode: !0 }
            : Object.assign(Object.assign({}, t), { isNextEpisode: !0 });
        }
        onEventNode(t) {
          if (!this.W.isPlayerPage()) return void this.oc(Ir);
          const i = t.data;
          if ("TP_CRUNCHYROLL_PLAY_NEXT" === (null == i ? void 0 : i.type)) {
            const t = i.nextContentId;
            return void (
              "string" == typeof t &&
              t.length > 0 &&
              this.sc(t, this.Gc(i.extraInfo))
            );
          }
          "TP_CRUNCHYROLL_PLAYER_CONTROLS_READY" !==
          (null == i ? void 0 : i.type)
            ? "TP_CRUNCHYROLL_PLAYER_CONTROLS_LOST" !==
              (null == i ? void 0 : i.type)
              ? "TP_CRUNCHYROLL_PLAYER_EVENT" !== (null == i ? void 0 : i.type)
                ? ("videoLoadStart" == i.type && this.onVideoLoadStart(),
                  "onBufferingChange" == i.type &&
                    this.onBufferingChange(i.buffering),
                  "onFullscreen" == i.type && this.onFullScreen(),
                  "exitFullscreen" == i.type && this.exitFullscreen(),
                  "alterPageControls" == i.type &&
                    (this.Y.isMenuVisibile = i.menuVisible))
                : this.onPlayerEvent(i)
              : this.xc()
            : this._c();
        }
        onVideoLoadStart() {
          var t, i, n;
          return gh(this, void 0, void 0, function* () {
            if (this.W.isPlayerPage())
              try {
                if (
                  null === (t = this.Qs) || void 0 === t
                    ? void 0
                    : t.changingVideo
                )
                  return;
                (this.Fc(), yield this.W.updateVideoData());
                const e =
                  null === (i = this.W._u) || void 0 === i ? void 0 : i.videoId;
                e &&
                  e !=
                    (null === (n = this.Qs) || void 0 === n
                      ? void 0
                      : n.videoId) &&
                  this.ec(e);
              } catch (t) {}
            else this.oc(Ir);
          });
        }
        loadNewVideoAsync(t) {
          return gh(this, void 0, void 0, function* () {
            const i = performance.now();
            (yield this.W.updateVideoData(),
              yield new Promise((n, e) => {
                const s = setInterval(() => {
                  var o;
                  if (
                    (null === (o = this.W._u) || void 0 === o
                      ? void 0
                      : o.videoId) === t
                  ) {
                    const t = this.W.getVideoElement();
                    if (t && (t.currentSrc || t.src) && t.readyState > 0)
                      return (clearInterval(s), void n());
                  }
                  performance.now() - i >= 2e4 &&
                    (clearInterval(s),
                    e(new Error("Could not load new video in time.")));
                }, 100);
              }),
              yield this.W.waitVideoDoneLoadingAsync());
          });
        }
      }
      ((mh.PLAY_PAUSE_SETTLE_MS = 450),
        (mh.SEEK_SUPPRESS_PLAY_PAUSE_MS = 600),
        (mh.SEEK_SETTLE_MS = 250),
        (mh.PLAYER_BROADCAST_COALESCE_MS = 50),
        (mh.PLAYER_BROADCAST_RETRY_MS = 200),
        (mh.POLL_INTERVAL_MS = 250),
        (mh.SEEK_DRIFT_MS = 2500),
        (mh.SCRUB_PAUSE_MS = 450));
      var wh = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class yh extends oh {
        constructor() {
          (super(),
            (this.hu = !1),
            (this.lu = !1),
            (this.gu = () => {
              var t, i;
              const n =
                  null === (t = document.querySelector(".release-date")) ||
                  void 0 === t
                    ? void 0
                    : t.textContent,
                e = n ? n.split(",").pop() : void 0,
                s = document.querySelector(".show-title-link");
              return {
                originalTitle:
                  (null === (i = null == s ? void 0 : s.firstElementChild) ||
                  void 0 === i
                    ? void 0
                    : i.textContent) || void 0,
                type: "TV",
                service: "Crunchyroll",
                episodeYear: e,
              };
            }),
            (this.wu = { time: 0, playbackState: Io.NOT_READY, loading: !1 }),
            (this.yu = 0));
        }
        setLocalSeekActive(t) {
          this.lu = t;
        }
        get localSeekActive() {
          return this.lu;
        }
        beginRemoteSyncApply() {
          this.hu = !0;
        }
        endRemoteSyncApply() {
          this.hu = !1;
        }
        shouldSuppressLocalBroadcast() {
          return super.shouldSuppressLocalBroadcast() || this.hu;
        }
        shouldCancelSync() {
          return this.lu;
        }
        getVideoElement() {
          var t;
          if (!this.isPlayerPage()) return null;
          const i =
            null !== (t = document.querySelector("video[src]")) && void 0 !== t
              ? t
              : document.querySelector("video");
          return i instanceof HTMLVideoElement ? i : null;
        }
        zc() {
          return !!document.querySelector(
            '[data-testid="buffering-indicator"]',
          );
        }
        isBuffering() {
          return this.zc();
        }
        syncStateFromNativeVideo() {
          const t = this.getVideoElement();
          if (!t) return !1;
          const i = this.isBuffering();
          let n = Io.PLAYING;
          return (
            t.paused ? (n = Io.PAUSED) : i && (n = Io.LOADING),
            (this.wu = {
              time: 1e3 * (t.currentTime || 0),
              playbackState: n,
              loading: i && !t.paused,
            }),
            !0
          );
        }
        onNode(t) {
          const i = t.data;
          "VideoData" == i.type &&
            ((this._u = i.videoData), (this.yu = Date.now()));
        }
        isPlayerPage() {
          return window.location.pathname.includes("/watch");
        }
        Eu(t, i) {
          let n = { type: t };
          (i && (n = { type: t, eventData: i }),
            window.postMessage({ infoSending: n }, "*"));
        }
        sendUpdateVideoData() {
          try {
            this.Eu("getVideoData");
          } catch (t) {}
        }
        updateVideoData() {
          return wh(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              yield $e(
                () => (this.Eu("getVideoData"), 0 != this.yu && this.yu > t),
                5e3,
                250,
              )();
            } catch (t) {}
          });
        }
        updateState() {
          return wh(this, void 0, void 0, function* () {
            this.syncStateFromNativeVideo();
          });
        }
        getVideoData() {
          return wh(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              return (
                yield $e(
                  () => (
                    this.sendUpdateVideoData(),
                    0 != this.yu && this.yu > t
                  ),
                  5e3,
                  250,
                )(),
                this._u
              );
            } catch (t) {
              return this._u;
            }
          });
        }
        waitVideoApiReadyAsync() {
          return wh(this, void 0, void 0, function* () {
            if (!this.isPlayerPage()) throw new Error(R);
            yield $e(
              () => {
                var t;
                return (
                  this.sendUpdateVideoData(),
                  null !=
                    (null === (t = this._u) || void 0 === t
                      ? void 0
                      : t.videoId)
                );
              },
              1 / 0,
              250,
            )();
          });
        }
        waitVideoDoneLoadingAsync() {
          return wh(this, void 0, void 0, function* () {
            return (
              this.Eu("continueParty"),
              $e(
                () => (
                  this.syncStateFromNativeVideo(),
                  this.wu.playbackState !== Io.LOADING
                ),
                1e4,
                200,
              )()
            );
          });
        }
        getStreamingServiceName() {
          return xe.CRUNCHYROLL;
        }
        setCurrentTime(t) {
          return wh(this, void 0, void 0, function* () {
            (this.lu && Math.abs(t - this.wu.time) > Ro) ||
              this.Eu("seekTo", { time: t });
          });
        }
        Zc() {
          const t = this.getVideoElement();
          return t ? 1e3 * (t.currentTime || 0) : this.wu.time;
        }
        getStateAsync() {
          return wh(this, void 0, void 0, function* () {
            if (!this.isPlayerPage()) throw new Error(V);
            return (
              yield this.updateState(),
              {
                playbackState: this.wu.playbackState,
                playbackPositionMilliseconds: this.Zc(),
              }
            );
          });
        }
        getUpdateSessionDataAsync() {
          return wh(this, void 0, void 0, function* () {
            yield this.updateState();
            const t = this.Zc();
            return {
              state:
                this.wu.playbackState === Io.PAUSED ? So.PAUSED : So.PLAYING,
              lastKnownTime: t,
              lastKnownTimeUpdatedAt: Date.now(),
              bufferingState: !1,
            };
          });
        }
        ku() {
          var t, i;
          const n =
            null !== (t = document.querySelector(".show-title-link")) &&
            void 0 !== t
              ? t
              : document.querySelector("#showmedia_about_episode_num");
          return {
            episodeNum:
              null === (i = this._u) || void 0 === i ? void 0 : i.episodeNumber,
            title: null == n ? void 0 : n.innerText,
          };
        }
        Au() {
          return document.querySelector("div .prev-next-episodes")
            ? yr.EPISODE
            : yr.FEATURE;
        }
        getVideoDataAsync() {
          var t, i, n;
          return wh(this, void 0, void 0, function* () {
            yield this.updateState();
            const e = yield this.getVideoData(),
              s =
                null !== (t = null == e ? void 0 : e.videoId) && void 0 !== t
                  ? t
                  : "",
              o =
                null !== (i = null == e ? void 0 : e.videoTitle) && void 0 !== i
                  ? i
                  : "",
              r = this.Au(),
              a = this.ku(),
              u = this.getScreenSize(),
              c = this.getVideoContent(s, o, window.location.href, r, a),
              { originalTitle: h, type: l, service: d } = this.gu();
            return {
              videoId: s,
              videoTitle: o,
              videoDuration:
                null !== (n = null == e ? void 0 : e.duration) && void 0 !== n
                  ? n
                  : 0,
              screen: u,
              content: c,
              videoState: this.wu.playbackState,
              originalTitle: h,
              type: l,
              videoType: r,
              service: d,
            };
          });
        }
        setVideoEventListener(t) {
          this.Gt = t;
        }
        jumpToOtherEpisode(t) {
          var i;
          return wh(this, void 0, void 0, function* () {
            this.ru += 1;
            (Je.getVideoId(new URL(window.location.href)) != t.videoId &&
              (yield null === (i = this.Gt) || void 0 === i
                ? void 0
                : i.reloadNextEpisode()),
              (this.ru -= 1));
          });
        }
        freeze(t) {
          return wh(this, void 0, void 0, function* () {
            this.ru += 1;
            try {
              (yield this.pause(), yield je(t)(), yield this.play());
            } finally {
              this.ru -= 1;
            }
          });
        }
        pause() {
          return wh(this, void 0, void 0, function* () {
            this.ru += 1;
            try {
              const t = this.getVideoElement();
              if (!t) throw new Error("video element not found");
              (t.pause(),
                this.syncStateFromNativeVideo(),
                yield $e(
                  () => this.wu.playbackState === Io.PAUSED,
                  2500,
                  10,
                )());
            } catch (t) {
              throw (
                this.logError("video was unable to pause correctly", t),
                t
              );
            } finally {
              this.ru -= 1;
            }
          });
        }
        play() {
          return wh(this, void 0, void 0, function* () {
            this.ru += 1;
            try {
              const t = this.getVideoElement();
              if (!t) throw new Error("video element not found");
              (yield t.play(),
                this.syncStateFromNativeVideo(),
                yield $e(
                  () => this.wu.playbackState === Io.PLAYING,
                  2500,
                  10,
                )());
            } catch (t) {
              throw (this.logError("video was unable to play correctly", t), t);
            } finally {
              this.ru -= 1;
            }
          });
        }
        getInternalStreamingServiceName() {
          return os.CRUNCHYROLL;
        }
      }
      var bh = function (t, i, n, e) {
        return new (n || (n = Promise))(function (s, o) {
          function r(t) {
            try {
              u(e.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var i;
            t.done
              ? s(t.value)
              : ((i = t.value),
                i instanceof n
                  ? i
                  : new n(function (t) {
                      t(i);
                    })).then(r, a);
          }
          u((e = e.apply(t, i || [])).next());
        });
      };
      class Ch extends vh {
        constructor(t, i, n) {
          (super(t),
            (this.rc = null),
            (this.ac = !1),
            (this.Yo = !1),
            (this.uc = 0),
            (this.cc = 0),
            (this.lc = this.onPlay.bind(this)),
            (this.dc = this.onPause.bind(this)),
            (this.fc = this.onSeeking.bind(this)),
            (this.Dc = this.onSeeked.bind(this)),
            (this.Wc = this.onWaiting.bind(this)),
            (this.Yc = this.onPlayingOrCanPlay.bind(this)),
            (this.Qc = this.onPlayingOrCanPlay.bind(this)),
            (this.vc = () =>
              bh(this, void 0, void 0, function* () {
                this.gc() &&
                  (this.Xu(),
                  this.Z.setChatVisible(this.Z.shouldChatBeVisible()),
                  yield this.mc());
              })),
            (this.mc = () =>
              bh(this, void 0, void 0, function* () {
                yield $e(
                  () => (this.gc() ? !this.gc() : (this.tc(), !1)),
                  1 / 0,
                  1e3,
                )();
              })),
            (this.gc = () => {
              const t = document.querySelector('video[title="Advertisement"]');
              if (!t) return !1;
              const i = t.parentElement;
              return !!i && "none" !== window.getComputedStyle(i).display;
            }),
            (this.W = t),
            (this.Z = i),
            (this.Y = n),
            this.W.setVideoEventListener(this));
          const e = window;
          (e.wc && window.removeEventListener("message", e.wc, !1),
            (e.wc = this.onEventNode.bind(this)),
            window.addEventListener("message", e.wc, !1),
            e.yc && window.removeEventListener("message", e.yc, !1),
            (e.yc = this.W.onNode.bind(this.W)),
            window.addEventListener("message", e.yc, !1));
        }
        getListenerElementChecks() {
          return [
            { name: "playerPage", isPresent: () => this.W.isPlayerPage() },
            ph(() => this.W.getVideoElement()),
          ];
        }
        bc(t) {
          (t.addEventListener("play", this.lc),
            t.addEventListener("pause", this.dc),
            t.addEventListener("seeking", this.fc),
            t.addEventListener("seeked", this.Dc),
            t.addEventListener("waiting", this.Wc),
            t.addEventListener("playing", this.Yc),
            t.addEventListener("canplay", this.Qc));
        }
        Cc(t) {
          t &&
            (t.removeEventListener("play", this.lc),
            t.removeEventListener("pause", this.dc),
            t.removeEventListener("seeking", this.fc),
            t.removeEventListener("seeked", this.Dc),
            t.removeEventListener("waiting", this.Wc),
            t.removeEventListener("playing", this.Yc),
            t.removeEventListener("canplay", this.Qc));
        }
        Fc() {
          const t = this.W.getVideoElement();
          t !== this.rc && (this.Cc(this.rc), (this.rc = t), t && this.bc(t));
        }
        onPlay() {
          this.Rc();
        }
        onPause() {
          this.Rc();
        }
        Rc() {
          this.W.shouldSuppressLocalBroadcast() ||
            this.Yo ||
            this.ac ||
            (this.Mc && clearTimeout(this.Mc),
            (this.Mc = setTimeout(() => {
              ((this.Mc = void 0), this.Oc());
            }, Ch.PLAY_PAUSE_SETTLE_MS)));
        }
        Oc() {
          return bh(this, void 0, void 0, function* () {
            this.ac ||
              Date.now() - this.cc < Ch.SEEK_SUPPRESS_PLAY_PAUSE_MS ||
              this.Yo ||
              this.W.shouldSuppressLocalBroadcast() ||
              (this.W.syncStateFromNativeVideo(), this.Ju());
          });
        }
        onSeeking() {
          ((this.ac = !0),
            (this.cc = Date.now()),
            this.W.setLocalSeekActive(!0),
            this.Mc && (clearTimeout(this.Mc), (this.Mc = void 0)));
        }
        onSeeked() {
          return bh(this, void 0, void 0, function* () {
            const t = ++this.uc;
            ((this.ac = !0),
              (this.cc = Date.now()),
              this.W.setLocalSeekActive(!0),
              this.Mc && (clearTimeout(this.Mc), (this.Mc = void 0)));
            try {
              if ((yield je(Ch.SEEK_SETTLE_MS)(), t !== this.uc)) return;
              if ((this.W.syncStateFromNativeVideo(), t !== this.uc)) return;
              if (this.W.shouldSuppressLocalBroadcast()) return;
              this.Hu(void 0, [br.SEEK]);
            } finally {
              t === this.uc && ((this.ac = !1), this.W.setLocalSeekActive(!1));
            }
          });
        }
        Vc() {
          this.Yo ||
            this.ac ||
            ((this.Yo = !0), this.W.incrementUiEventsHappening(1), this.qu());
        }
        Uc() {
          this.Yo &&
            ((this.Yo = !1), this.W.incrementUiEventsHappening(-1), this.nc());
        }
        onWaiting() {
          this.Vc();
        }
        onPlayingOrCanPlay() {
          this.Uc();
        }
        onBufferingChange() {
          this.ac || (this.W.isBuffering() ? this.Vc() : this.Uc());
        }
        onFullScreen() {
          const i = ".video-player-wrapper",
            n = "fullscreen-class";
          if (jQuery(i).hasClass(n)) {
            (jQuery(i).removeClass(n), jQuery("body").removeClass(zo));
            const s = new $(e, t, S.MAX_WINDOW);
            (E.m(s), this.Z.logEvent({ name: "fullscreen_exit" }));
          } else {
            (jQuery(i).addClass(n), jQuery("body").addClass(zo));
            const s = new $(e, t, S.FULLSCREEN_WINDOW);
            (E.m(s),
              this.Z.logEvent({ name: "fullscreen_enter" }),
              this.Z.setChatVisible(this.Z.shouldChatBeVisible()));
          }
        }
        exitFullscreen() {
          const i = ".video-player-wrapper",
            n = "fullscreen-class";
          if (jQuery(i).hasClass(n)) {
            (jQuery(i).removeClass(n), jQuery("body").removeClass(zo));
            const s = new $(e, t, S.MAX_WINDOW);
            E.m(s);
          }
        }
        startListening() {
          (super.startListening(),
            this.Fc(),
            (this.Nc = setInterval(() => {
              this.Fc();
            }, 1e3)),
            (this.Hc = setInterval(() => {
              this.vc();
            }, 2e3)));
        }
        stopListening() {
          (super.stopListening(),
            this.Uc(),
            this.Mc && (clearTimeout(this.Mc), (this.Mc = void 0)),
            this.Cc(this.rc),
            (this.rc = null),
            this.Nc && (clearInterval(this.Nc), (this.Nc = void 0)),
            this.Hc && clearInterval(this.Hc));
        }
        reloadListeners() {
          (this.stopListening(), this.startListening());
        }
        onEventNode(t) {
          if (!this.W.isPlayerPage()) return void this.oc(Ir);
          const i = t.data;
          ("videoLoadStart" == i.type && this.onVideoLoadStart(),
            "onBufferingChange" == i.type && this.onBufferingChange(),
            "onFullscreen" == i.type && this.onFullScreen(),
            "exitFullscreen" == i.type && this.exitFullscreen(),
            "alterPageControls" == i.type &&
              (this.Y.isMenuVisibile = i.menuVisible));
        }
        onVideoLoadStart() {
          var t, i, n;
          return bh(this, void 0, void 0, function* () {
            if (this.W.isPlayerPage())
              try {
                if (
                  null === (t = this.Qs) || void 0 === t
                    ? void 0
                    : t.changingVideo
                )
                  return;
                (this.Fc(), yield this.W.updateVideoData());
                const e =
                  null === (i = this.W._u) || void 0 === i ? void 0 : i.videoId;
                e &&
                  e !=
                    (null === (n = this.Qs) || void 0 === n
                      ? void 0
                      : n.videoId) &&
                  this.ec(e);
              } catch (t) {}
            else this.oc(Ir);
          });
        }
        loadNewVideoAsync(t) {
          return bh(this, void 0, void 0, function* () {
            const i = performance.now();
            (yield this.W.updateVideoData(),
              yield new Promise((n, e) => {
                const s = setInterval(() => {
                  var o;
                  if (
                    (null === (o = this.W._u) || void 0 === o
                      ? void 0
                      : o.videoId) === t
                  ) {
                    const t = this.W.getVideoElement();
                    if (t && (t.currentSrc || t.src) && t.readyState > 0)
                      return (clearInterval(s), void n());
                  }
                  performance.now() - i >= 2e4 &&
                    (clearInterval(s),
                    e(new Error("Could not load new video in time.")));
                }, 100);
              }),
              yield this.W.waitVideoDoneLoadingAsync());
          });
        }
      }
      ((Ch.PLAY_PAUSE_SETTLE_MS = 450),
        (Ch.SEEK_SUPPRESS_PLAY_PAUSE_MS = 600),
        (Ch.SEEK_SETTLE_MS = 250));
      const Fh = (t) =>
          t && parseInt(t.slice(0, 2), 16) <= 127 ? "control" : "treatment",
        _h = (t, i = !0) => {
          (window.teleparty || (window.teleparty = {}),
            (window.teleparty.crunchyrollPlayerVariant = t),
            i &&
              window.postMessage(
                { type: "TP_CRUNCHYROLL_SET_PLAYER_VARIANT", variant: t },
                "*",
              ));
        };
      class Eh {
        constructor(t, i, n) {
          var e;
          ((this.hc = !1),
            (this.Jc = t),
            (this.Z = i),
            (this.Y = n),
            this.Kc(t),
            this.qc(),
            _h(t, !1),
            (this.videoApi =
              ((e = () => this.Xc()),
              new Proxy(
                {},
                {
                  get(t, i) {
                    const n = e(),
                      s = Reflect.get(n, i, n);
                    return "function" == typeof s ? s.bind(n) : s;
                  },
                  set: (t, i, n) => Reflect.set(e(), i, n),
                },
              ))),
            (this.videoEventListener = new Proxy(
              {},
              {
                get: (t, i) => {
                  if ("setMessageForwarder" === i)
                    return (t) => {
                      ((this.th = t), this.ih().setMessageForwarder(t));
                    };
                  if ("startListening" === i)
                    return () => {
                      ((this.hc = !0), this.ih().startListening());
                    };
                  if ("stopListening" === i)
                    return () => {
                      ((this.hc = !1), this.ih().stopListening());
                    };
                  const n = this.ih(),
                    e = Reflect.get(n, i, n);
                  return "function" == typeof e ? e.bind(n) : e;
                },
              },
            )));
        }
        get variant() {
          return this.Jc;
        }
        applyPartyVariant(t, i) {
          if (!t) return;
          const n = Fh(t);
          n !== this.Jc && this.setVariant(n);
          const e =
            "control" === n ? "control (legacy)" : "treatment (internal)";
          console.log(
            `[Teleparty] Crunchyroll player: ${i ? "started" : "joined"} party ${t} on ${e}`,
          );
        }
        setVariant(t) {
          if (t === this.Jc) return;
          const i = this.Xc(),
            n = this.ih(),
            e = this.hc;
          (n.stopListening(),
            n.stopPartyStartPolling(),
            (this.Jc = t),
            this.Kc(t),
            (this.Xc()._u = i._u),
            this.qc(),
            _h(t));
          const s = this.ih();
          (this.th && s.setMessageForwarder(this.th),
            e && ((this.hc = !0), s.startListening()));
        }
        Kc(t) {
          "control" !== t
            ? this.nh ||
              ((this.nh = new ah()),
              (this.eh = new mh(this.nh, this.Z, this.Y)))
            : this.sh ||
              ((this.sh = new yh()),
              (this.oh = new Ch(this.sh, this.Z, this.Y)));
        }
        Xc() {
          return "control" === this.Jc ? this.sh : this.nh;
        }
        ih() {
          return "control" === this.Jc ? this.oh : this.eh;
        }
        qc() {
          const t = window,
            i = this.ih(),
            n = this.Xc();
          (t.wc && window.removeEventListener("message", t.wc, !1),
            (t.wc = i.onEventNode.bind(i)),
            window.addEventListener("message", t.wc, !1),
            t.yc && window.removeEventListener("message", t.yc, !1),
            (t.yc = n.onNode.bind(n)),
            window.addEventListener("message", t.yc, !1));
        }
      }
      class xh extends yc {
        constructor(t) {
          const i = new Jc();
          let n;
          n =
            window.teleparty && window.teleparty.pageControls
              ? window.teleparty.pageControls
              : new eh(i);
          const e = new Eh(t, i, n);
          (super(i, e.videoApi, e.videoEventListener, n, !1, xe.CRUNCHYROLL),
            F("Crunchyroll Content Script"));
          const s = i.loadInitData.bind(i);
          i.loadInitData = (t) => {
            (s(t),
              e.applyPartyVariant(t.sessionCallbackData.sessionId, t.isCreate));
          };
        }
      }
      const kh = () => {
        if (window !== top) return;
        if (!window.location.pathname.includes("/watch")) return;
        const t = () => {
          var t;
          (null === (t = window.teleparty) || void 0 === t
            ? void 0
            : t.crunchyrollInlineInjected) ||
            (document.querySelector(
              '[data-testid="bottom-controls-autohide"]',
            ) &&
              (window.teleparty || (window.teleparty = {}),
              (window.teleparty.crunchyrollInlineInjected = !0),
              Re(
                chrome.runtime.getURL(
                  "content_scripts/crunchyroll/crunchyroll_legacy_injected_bundled.js",
                ),
              ),
              Re(
                chrome.runtime.getURL(
                  "content_scripts/crunchyroll/crunchyroll_injected_bundled.js",
                ),
              )));
        };
        t();
        const i = new MutationObserver(t);
        (i.observe(document.documentElement, { childList: !0, subtree: !0 }),
          window.setTimeout(() => i.disconnect(), 6e4));
      };
      if (
        (function () {
          var t;
          return (
            window === window.top &&
            (!window.teleparty ||
              !(null === (t = window.teleparty) || void 0 === t
                ? void 0
                : t.contentScriptInjected))
          );
        })() &&
        window == top
      ) {
        (window.teleparty || (window.teleparty = {}),
          (window.teleparty.contentScriptInjected = !0));
        const t = Fh(
          new URLSearchParams(window.location.search).get("sessionId") ||
            void 0,
        );
        (_h(t, !1),
          new xh(t),
          kh(),
          F(`Initialized content script with ${t} Crunchyroll player`));
      }
    })());
})();
