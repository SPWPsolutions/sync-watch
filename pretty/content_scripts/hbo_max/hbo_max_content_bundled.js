/*******************************************************
 * Copyright (C) 2018-2024 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  var t = {
      736(t, n, e) {
        t.exports = function (t) {
          function n(t) {
            let e,
              s,
              o,
              r = null;
            function a(...t) {
              if (!a.enabled) return;
              const i = a,
                s = Number(new Date()),
                o = s - (e || s);
              ((i.diff = o),
                (i.prev = e),
                (i.curr = s),
                (e = s),
                (t[0] = n.coerce(t[0])),
                "string" != typeof t[0] && t.unshift("%O"));
              let r = 0;
              ((t[0] = t[0].replace(/%([a-zA-Z%])/g, (e, s) => {
                if ("%%" === e) return "%";
                r++;
                const o = n.formatters[s];
                if ("function" == typeof o) {
                  const n = t[r];
                  ((e = o.call(i, n)), t.splice(r, 1), r--);
                }
                return e;
              })),
                n.formatArgs.call(i, t));
              (i.log || n.log).apply(i, t);
            }
            return (
              (a.namespace = t),
              (a.useColors = n.useColors()),
              (a.color = n.selectColor(t)),
              (a.extend = i),
              (a.destroy = n.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== r
                    ? r
                    : (s !== n.namespaces &&
                        ((s = n.namespaces), (o = n.enabled(t))),
                      o),
                set: (t) => {
                  r = t;
                },
              }),
              "function" == typeof n.init && n.init(a),
              a
            );
          }
          function i(t, e) {
            const i = n(this.namespace + (void 0 === e ? ":" : e) + t);
            return ((i.log = this.log), i);
          }
          function s(t, n) {
            let e = 0,
              i = 0,
              s = -1,
              o = 0;
            for (; e < t.length;)
              if (i < n.length && (n[i] === t[e] || "*" === n[i]))
                "*" === n[i] ? ((s = i), (o = e), i++) : (e++, i++);
              else {
                if (-1 === s) return !1;
                ((i = s + 1), o++, (e = o));
              }
            for (; i < n.length && "*" === n[i];) i++;
            return i === n.length;
          }
          return (
            (n.debug = n),
            (n.default = n),
            (n.coerce = function (t) {
              if (t instanceof Error) return t.stack || t.message;
              return t;
            }),
            (n.disable = function () {
              const t = [...n.names, ...n.skips.map((t) => "-" + t)].join(",");
              return (n.enable(""), t);
            }),
            (n.enable = function (t) {
              (n.save(t), (n.namespaces = t), (n.names = []), (n.skips = []));
              const e = ("string" == typeof t ? t : "")
                .trim()
                .replace(/\s+/g, ",")
                .split(",")
                .filter(Boolean);
              for (const t of e)
                "-" === t[0] ? n.skips.push(t.slice(1)) : n.names.push(t);
            }),
            (n.enabled = function (t) {
              for (const e of n.skips) if (s(t, e)) return !1;
              for (const e of n.names) if (s(t, e)) return !0;
              return !1;
            }),
            (n.humanize = e(6585)),
            (n.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
              );
            }),
            Object.keys(t).forEach((e) => {
              n[e] = t[e];
            }),
            (n.names = []),
            (n.skips = []),
            (n.formatters = {}),
            (n.selectColor = function (t) {
              let e = 0;
              for (let n = 0; n < t.length; n++)
                ((e = (e << 5) - e + t.charCodeAt(n)), (e |= 0));
              return n.colors[Math.abs(e) % n.colors.length];
            }),
            n.enable(n.load()),
            n
          );
        };
      },
      5089(t) {
        t.exports =
          '<div id="chat-wrapper" tpInjected>\n    <iframe\n        style="display: none"\n        id="tpChatFrame"\n        allow="autoplay; clipboard-read; web-share; clipboard-write; payment; camera; microphone;"\n        src="{CHAT_URL}"\n    >\n    </iframe>\n</div>\n';
      },
      6585(t) {
        var n = 1e3,
          e = 60 * n,
          i = 60 * e,
          s = 24 * i,
          o = 7 * s,
          r = 365.25 * s;
        function a(t, n, e, i) {
          var s = n >= 1.5 * e;
          return Math.round(t / e) + " " + i + (s ? "s" : "");
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
                  return u * i;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return u * e;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return u * n;
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
                  if (o >= i) return a(t, o, i, "hour");
                  if (o >= e) return a(t, o, e, "minute");
                  if (o >= n) return a(t, o, n, "second");
                  return t + " ms";
                })(t)
              : (function (t) {
                  var o = Math.abs(t);
                  if (o >= s) return Math.round(t / s) + "d";
                  if (o >= i) return Math.round(t / i) + "h";
                  if (o >= e) return Math.round(t / e) + "m";
                  if (o >= n) return Math.round(t / n) + "s";
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
        !(function (t, n, e) {
          "use strict";
          if (t.MutationObserver && "undefined" != typeof HTMLElement) {
            var i,
              s = 0,
              o =
                ((i =
                  HTMLElement.prototype.matches ||
                  HTMLElement.prototype.webkitMatchesSelector ||
                  HTMLElement.prototype.mozMatchesSelector ||
                  HTMLElement.prototype.msMatchesSelector),
                {
                  matchesSelector: function (t, n) {
                    return t instanceof HTMLElement && i.call(t, n);
                  },
                  addMethod: function (t, n, e) {
                    var i = t[n];
                    t[n] = function () {
                      return e.length == arguments.length
                        ? e.apply(this, arguments)
                        : "function" == typeof i
                          ? i.apply(this, arguments)
                          : void 0;
                    };
                  },
                  callCallbacks: function (t, n, e) {
                    if (t.length) {
                      n &&
                        n.options.onceOnly &&
                        ((t = [t[0]]),
                        n.me.unbindEventWithSelectorAndCallback.call(
                          n.target,
                          n.selector,
                          n.callback,
                        ));
                      for (var i, s = 0; (i = t[s]); s++)
                        i && i.callback && i.callback.call(i.elem, i.elem);
                      n &&
                        n.callback &&
                        e &&
                        e.addTimeoutHandler(
                          n.target,
                          n.selector,
                          n.callback,
                          n.options,
                          n.data,
                        );
                    }
                  },
                  checkChildNodesRecursively: function (t, n, e, i) {
                    for (var s, r = 0; (s = t[r]); r++)
                      (e(s, n, i) && i.push({ callback: n.callback, elem: s }),
                        s.childNodes.length > 0 &&
                          o.checkChildNodesRecursively(s.childNodes, n, e, i));
                  },
                  mergeArrays: function (t, n) {
                    var e,
                      i = {};
                    for (e in t) t.hasOwnProperty(e) && (i[e] = t[e]);
                    for (e in n) n.hasOwnProperty(e) && (i[e] = n[e]);
                    return i;
                  },
                  toElementsArray: function (n) {
                    return (
                      void 0 === n ||
                        ("number" == typeof n.length && n !== t) ||
                        (n = [n]),
                      n
                    );
                  },
                }),
              r = (function () {
                var t = function () {
                  ((this.i = []), (this.u = null), (this.l = null));
                };
                return (
                  (t.prototype.addEvent = function (t, n, e, i, s) {
                    var o = {
                      target: t,
                      selector: n,
                      options: e,
                      callback: i,
                      data: s,
                      firedElems: [],
                    };
                    return (this.u && this.u(o), this.i.push(o), o);
                  }),
                  (t.prototype.removeEvent = function (t) {
                    for (var n, e = this.i.length - 1; (n = this.i[e]); e--)
                      if (t(n)) {
                        (this.l && this.l(n),
                          n.data &&
                            n.data.timeoutId &&
                            clearTimeout(n.data.timeoutId));
                        var i = this.i.splice(e, 1);
                        i && i.length && (i[0].callback = null);
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
              a = function (n, i) {
                var s = new r(),
                  a = this,
                  u = { fireOnAttributesModification: !1 };
                return (
                  s.beforeAdding(function (e) {
                    var s,
                      o = e.target;
                    ((o !== t.document && o !== t) ||
                      (o = document.getElementsByTagName("html")[0]),
                      (s = new MutationObserver(function (t) {
                        i.call(this, t, e);
                      })));
                    var r = n(e.options);
                    (s.observe(o, r), (e.observer = s), (e.me = a));
                  }),
                  s.beforeRemoving(function (t) {
                    t.observer.disconnect();
                  }),
                  (this.bindEvent = function (t, n, e) {
                    n = o.mergeArrays(u, n);
                    for (
                      var i = o.toElementsArray(this), r = 0;
                      r < i.length;
                      r++
                    ) {
                      const o = {};
                      (a.addTimeoutHandler(i[r], t, e, n, o),
                        s.addEvent(i[r], t, n, e, o));
                    }
                  }),
                  (this.unbindEvent = function () {
                    var t = o.toElementsArray(this);
                    s.removeEvent(function (n) {
                      for (var i = 0; i < t.length; i++)
                        if (this === e || n.target === t[i]) return !0;
                      return !1;
                    });
                  }),
                  (this.unbindEventWithSelectorOrCallback = function (t) {
                    var n,
                      i = o.toElementsArray(this),
                      r = t;
                    ((n =
                      "function" == typeof t
                        ? function (t) {
                            for (var n = 0; n < i.length; n++)
                              if (
                                (this === e || t.target === i[n]) &&
                                t.callback === r
                              )
                                return !0;
                            return !1;
                          }
                        : function (n) {
                            for (var s = 0; s < i.length; s++)
                              if (
                                (this === e || n.target === i[s]) &&
                                n.selector === t
                              )
                                return !0;
                            return !1;
                          }),
                      s.removeEvent(n));
                  }),
                  (this.unbindEventWithSelectorAndCallback = function (t, n) {
                    var i = o.toElementsArray(this);
                    s.removeEvent(function (s) {
                      for (var o = 0; o < i.length; o++)
                        if (
                          (this === e || s.target === i[o]) &&
                          s.selector === t &&
                          s.callback === n
                        )
                          return !0;
                      return !1;
                    });
                  }),
                  (this.addTimeoutHandler = function (t, n, e, i, s) {
                    !i.timeout ||
                      i.timeout <= 0 ||
                      (s.timeoutId && clearTimeout(s.timeoutId),
                      (s.timeoutId = setTimeout(() => {
                        (a.unbindEventWithSelectorAndCallback.call(t, n, e),
                          e.call(null, null));
                      }, i.timeout)));
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
                function n(t, n, i) {
                  return (
                    !(
                      !o.matchesSelector(t, n.selector) ||
                      (t.p === e && (t.p = s++),
                      -1 != n.firedElems.indexOf(t.p))
                    ) && (n.firedElems.push(t.p), !0)
                  );
                }
                var i = (u = new a(
                  function (t) {
                    var n = { attributes: !1, childList: !0, subtree: !0 };
                    return (
                      t.fireOnAttributesModification && (n.attributes = !0),
                      n
                    );
                  },
                  function (t, e) {
                    t.forEach(function (t) {
                      var i = t.addedNodes,
                        s = t.target,
                        r = [];
                      (null !== i && i.length > 0
                        ? o.checkChildNodesRecursively(i, e, n, r)
                        : "attributes" === t.type &&
                          n(s, e, r) &&
                          r.push({ callback: e.callback, elem: s }),
                        o.callCallbacks(r, e, u));
                    });
                  },
                )).bindEvent;
                return (
                  (u.bindEvent = function (n, s, r) {
                    var a =
                        "object" == typeof s ? o.mergeArrays(t, s) : { ...t },
                      u =
                        "function" == typeof r
                          ? r
                          : "function" == typeof s
                            ? s
                            : e,
                      c = o.toElementsArray(this);
                    if ((u || (a.onceOnly = !0), a.existing)) {
                      for (var l = [], h = 0; h < c.length; h++)
                        for (
                          var d = c[h].querySelectorAll(n), p = 0;
                          p < d.length;
                          p++
                        )
                          l.push({ callback: u, elem: d[p] });
                      if (a.onceOnly && l.length)
                        return u
                          ? u.call(l[0].elem, l[0].elem)
                          : Promise.resolve(l[0].elem);
                      setTimeout(o.callCallbacks, 1, l);
                    }
                    if (!u) {
                      var f = this;
                      return new Promise((t) => i.call(f, n, a, t));
                    }
                    i.call(this, n, a, u);
                  }),
                  u
                );
              })(),
              c = new (function () {
                var t = { onceOnly: !1, timeout: 0 };
                function n(t, n) {
                  return o.matchesSelector(t, n.selector);
                }
                var i = (c = new a(
                  function () {
                    return { childList: !0, subtree: !0 };
                  },
                  function (t, e) {
                    t.forEach(function (t) {
                      var i = t.removedNodes,
                        s = [];
                      (null !== i &&
                        i.length > 0 &&
                        o.checkChildNodesRecursively(i, e, n, s),
                        o.callCallbacks(s, e, c));
                    });
                  },
                )).bindEvent;
                return (
                  (c.bindEvent = function (n, s, r) {
                    var a =
                        "object" == typeof s ? o.mergeArrays(t, s) : { ...t },
                      u =
                        "function" == typeof r
                          ? r
                          : "function" == typeof s
                            ? s
                            : e;
                    if (!u) {
                      a.onceOnly = !0;
                      var c = this;
                      return new Promise((t) => i.call(c, n, a, t));
                    }
                    i.call(this, n, a, u);
                  }),
                  c
                );
              })();
            (n && d(n.fn),
              d(HTMLElement.prototype),
              d(NodeList.prototype),
              d(HTMLCollection.prototype),
              d(HTMLDocument.prototype),
              d(Window.prototype));
            var l = {};
            return (h(u, l, "unbindAllArrive"), h(c, l, "unbindAllLeave"), l);
          }
          function h(t, n, e) {
            (o.addMethod(n, e, t.unbindEvent),
              o.addMethod(n, e, t.unbindEventWithSelectorOrCallback),
              o.addMethod(n, e, t.unbindEventWithSelectorAndCallback));
          }
          function d(t) {
            ((t.arrive = u.bindEvent),
              h(u, t, "unbindArrive"),
              (t.leave = c.bindEvent),
              h(c, t, "unbindLeave"));
          }
        })(window, "undefined" == typeof jQuery ? null : jQuery, void 0);
      },
      7833(t, n, e) {
        ((n.formatArgs = function (n) {
          if (
            ((n[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              n[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const e = "color: " + this.color;
          n.splice(1, 0, e, "color: inherit");
          let i = 0,
            s = 0;
          (n[0].replace(/%[a-zA-Z%]/g, (t) => {
            "%%" !== t && (i++, "%c" === t && (s = i));
          }),
            n.splice(s, 0, e));
        }),
          (n.save = function (t) {
            try {
              t ? n.storage.setItem("debug", t) : n.storage.removeItem("debug");
            } catch (t) {}
          }),
          (n.load = function () {
            let t;
            try {
              t = n.storage.getItem("debug") || n.storage.getItem("DEBUG");
            } catch (t) {}
            !t &&
              "undefined" != typeof process &&
              "env" in process &&
              (t = "MISSING_ENV_VAR".DEBUG);
            return t;
          }),
          (n.useColors = function () {
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
          (n.storage = (function () {
            try {
              return localStorage;
            } catch (t) {}
          })()),
          (n.destroy = (() => {
            let t = !1;
            return () => {
              t ||
                ((t = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                ));
            };
          })()),
          (n.colors = [
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
          (n.log = console.debug || console.log || (() => {})),
          (t.exports = e(736)(n)));
        const { formatters: i } = t.exports;
        i.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      },
    },
    n = {};
  function e(i) {
    var s = n[i];
    if (void 0 !== s) return s.exports;
    var o = (n[i] = { exports: {} });
    return (t[i](o, o.exports, e), o.exports);
  }
  ((e.n = (t) => {
    var n = t && t.D ? () => t.default : () => t;
    return (e.d(n, { a: n }), n);
  }),
    (e.d = (t, n) => {
      for (var i in n)
        e.o(n, i) &&
          !e.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (() => {
      "use strict";
      const t = "https://api.teleparty.com",
        n = "https://www.teleparty.com",
        i = "https://files.teleparty.com";
      var s = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const o = `tp_csrf:${new URL(t).origin}`;
      let r = null;
      function a() {
        var n, e, i;
        return s(this, void 0, void 0, function* () {
          const s = yield fetch(`${t}/session/csrf`, {
            method: "GET",
            credentials: "include",
          });
          if (!s.ok) return;
          const r = yield s.json().catch(() => ({})),
            a =
              null !==
                (e =
                  null !== (n = null == r ? void 0 : r.csrf) && void 0 !== n
                    ? n
                    : null == r
                      ? void 0
                      : r.token) && void 0 !== e
                ? e
                : null === (i = null == r ? void 0 : r.data) || void 0 === i
                  ? void 0
                  : i.csrf;
          return "string" == typeof a && a
            ? ((function (t) {
                try {
                  if ("undefined" == typeof sessionStorage) return;
                  sessionStorage.setItem(
                    o,
                    JSON.stringify({ v: t, t: Date.now() }),
                  );
                } catch (t) {}
              })(a),
              a)
            : void 0;
        });
      }
      function u(t = !1) {
        return s(this, void 0, void 0, function* () {
          const n = (function () {
            try {
              if ("undefined" == typeof sessionStorage) return;
              const t = sessionStorage.getItem(o);
              if (!t) return;
              const { v: n, t: e } = JSON.parse(t);
              if (Date.now() - e < 6e4) return n;
            } catch (t) {}
          })();
          return n && !t
            ? n
            : (null != r ||
                (r = a().finally(() => {
                  r = null;
                })),
              r);
        });
      }
      const c = Object.freeze("video-highlights"),
        l = Object.freeze([
          "live-match-info",
          "fantasy",
          "commentary",
          "scorecard",
          "squad",
          "key-moments",
        ]),
        h = Object.freeze({ tag: "type", value: "match-info" }),
        d = Object.freeze({
          VIDEO_ELEMENT_SELECTOR: "video.vjs-tech",
          VIDEO_ELEMENT_SELECTOR_2: 'video[class*="StyledVideo"]',
          TITLE_ELEMENT_SELECTOR: '[class*="VideoPlayerTitleLabel"]',
          MATCH_INFO_QUERY_PARAM: h,
          AD_CLASS_NAME: 'video[title="Advertisement"]',
          INSTREAM_AD_ID: '[id*="instream-video"]',
          LIVE_MATCH_PAGE_TYPES: l,
          HIGHLIGHTS: c,
        }),
        p = Object.freeze({
          LIVE: "/live/",
          VIDEO: "/video/",
          CHANNELS: "/canales/",
        }),
        f = Object.freeze([p.LIVE, p.CHANNELS]),
        D = Object.freeze({
          PATH_TYPES: p,
          LIVE_PATHS: f,
          VIDEO_ELEMENT_SELECTOR: "video",
          TITLE_ELEMENT_SELECTOR: "h1",
        }),
        v = Object.freeze({ SHOW: "player", LIVE_TV: "livestream" }),
        g = Object.freeze({
          VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-player-element",
          LIVE_VIDEO_ELEMENT_SELECTOR:
            "video#bitmovinplayer-video-bitmovin-element",
          TITLE_ELEMENT_SELECTOR: 'h3[class*="VODTitle_show-title"]',
          VIDEO_TYPES: v,
          AD_CLASS_NAME: 'video[title="Advertisement"]',
        }),
        m = Object.freeze({ VIDEO: "vod", LIVE: "live" }),
        w = Object.freeze({
          VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-null",
          AD_CLASS_NAME: 'video[title="Advertisement"]',
          TITLE_ELEMENT_SELECTOR: "#series_title",
          TITLE_ELEMENT_SELECTOR_LIVE_TV:
            ".bmpui-label-metadata-viu-title.bmpui-label-metadata-viu-title",
          UI_CONTAINER: ".bmpui-ui-uicontainer",
          VIDEO_TYPES: m,
          QUERY_PARAMS_ORIGIN_EPISODE_CODE_TAG: "originEpisodeCode",
        });
      function y(t) {
        let n = t.length;
        for (; --n >= 0;) t[n] = 0;
      }
      const b = 256,
        C = 286,
        F = 30,
        _ = 15,
        x = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0,
        ]),
        E = new Uint8Array([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13,
        ]),
        k = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
        ]),
        A = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        B = new Array(576);
      y(B);
      const I = new Array(60);
      y(I);
      const S = new Array(512);
      y(S);
      const $ = new Array(256);
      y($);
      const j = new Array(29);
      y(j);
      const T = new Array(F);
      function M(t, n, e, i, s) {
        ((this.static_tree = t),
          (this.extra_bits = n),
          (this.extra_base = e),
          (this.elems = i),
          (this.max_length = s),
          (this.has_stree = t && t.length));
      }
      let P, L, R;
      function O(t, n) {
        ((this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = n));
      }
      y(T);
      const V = (t) => (t < 256 ? S[t] : S[256 + (t >>> 7)]),
        U = (t, n) => {
          ((t.pending_buf[t.pending++] = 255 & n),
            (t.pending_buf[t.pending++] = (n >>> 8) & 255));
        },
        H = (t, n, e) => {
          t.bi_valid > 16 - e
            ? ((t.bi_buf |= (n << t.bi_valid) & 65535),
              U(t, t.bi_buf),
              (t.bi_buf = n >> (16 - t.bi_valid)),
              (t.bi_valid += e - 16))
            : ((t.bi_buf |= (n << t.bi_valid) & 65535), (t.bi_valid += e));
        },
        N = (t, n, e) => {
          H(t, e[2 * n], e[2 * n + 1]);
        },
        G = (t, n) => {
          let e = 0;
          do {
            ((e |= 1 & t), (t >>>= 1), (e <<= 1));
          } while (--n > 0);
          return e >>> 1;
        },
        z = (t, n, e) => {
          const i = new Array(16);
          let s,
            o,
            r = 0;
          for (s = 1; s <= _; s++) ((r = (r + e[s - 1]) << 1), (i[s] = r));
          for (o = 0; o <= n; o++) {
            let n = t[2 * o + 1];
            0 !== n && (t[2 * o] = G(i[n]++, n));
          }
        },
        Z = (t) => {
          let n;
          for (n = 0; n < C; n++) t.dyn_ltree[2 * n] = 0;
          for (n = 0; n < F; n++) t.dyn_dtree[2 * n] = 0;
          for (n = 0; n < 19; n++) t.bl_tree[2 * n] = 0;
          ((t.dyn_ltree[512] = 1),
            (t.opt_len = t.static_len = 0),
            (t.sym_next = t.matches = 0));
        },
        W = (t) => {
          (t.bi_valid > 8
            ? U(t, t.bi_buf)
            : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
            (t.bi_buf = 0),
            (t.bi_valid = 0));
        },
        Q = (t, n, e, i) => {
          const s = 2 * n,
            o = 2 * e;
          return t[s] < t[o] || (t[s] === t[o] && i[n] <= i[e]);
        },
        Y = (t, n, e) => {
          const i = t.heap[e];
          let s = e << 1;
          for (
            ;
            s <= t.heap_len &&
            (s < t.heap_len && Q(n, t.heap[s + 1], t.heap[s], t.depth) && s++,
            !Q(n, i, t.heap[s], t.depth));
          )
            ((t.heap[e] = t.heap[s]), (e = s), (s <<= 1));
          t.heap[e] = i;
        },
        J = (t, n, e) => {
          let i,
            s,
            o,
            r,
            a = 0;
          if (0 !== t.sym_next)
            do {
              ((i = 255 & t.pending_buf[t.sym_buf + a++]),
                (i += (255 & t.pending_buf[t.sym_buf + a++]) << 8),
                (s = t.pending_buf[t.sym_buf + a++]),
                0 === i
                  ? N(t, s, n)
                  : ((o = $[s]),
                    N(t, o + b + 1, n),
                    (r = x[o]),
                    0 !== r && ((s -= j[o]), H(t, s, r)),
                    i--,
                    (o = V(i)),
                    N(t, o, e),
                    (r = E[o]),
                    0 !== r && ((i -= T[o]), H(t, i, r))));
            } while (a < t.sym_next);
          N(t, 256, n);
        },
        K = (t, n) => {
          const e = n.dyn_tree,
            i = n.stat_desc.static_tree,
            s = n.stat_desc.has_stree,
            o = n.stat_desc.elems;
          let r,
            a,
            u,
            c = -1;
          for (t.heap_len = 0, t.heap_max = 573, r = 0; r < o; r++)
            0 !== e[2 * r]
              ? ((t.heap[++t.heap_len] = c = r), (t.depth[r] = 0))
              : (e[2 * r + 1] = 0);
          for (; t.heap_len < 2;)
            ((u = t.heap[++t.heap_len] = c < 2 ? ++c : 0),
              (e[2 * u] = 1),
              (t.depth[u] = 0),
              t.opt_len--,
              s && (t.static_len -= i[2 * u + 1]));
          for (n.max_code = c, r = t.heap_len >> 1; r >= 1; r--) Y(t, e, r);
          u = o;
          do {
            ((r = t.heap[1]),
              (t.heap[1] = t.heap[t.heap_len--]),
              Y(t, e, 1),
              (a = t.heap[1]),
              (t.heap[--t.heap_max] = r),
              (t.heap[--t.heap_max] = a),
              (e[2 * u] = e[2 * r] + e[2 * a]),
              (t.depth[u] =
                (t.depth[r] >= t.depth[a] ? t.depth[r] : t.depth[a]) + 1),
              (e[2 * r + 1] = e[2 * a + 1] = u),
              (t.heap[1] = u++),
              Y(t, e, 1));
          } while (t.heap_len >= 2);
          ((t.heap[--t.heap_max] = t.heap[1]),
            ((t, n) => {
              const e = n.dyn_tree,
                i = n.max_code,
                s = n.stat_desc.static_tree,
                o = n.stat_desc.has_stree,
                r = n.stat_desc.extra_bits,
                a = n.stat_desc.extra_base,
                u = n.stat_desc.max_length;
              let c,
                l,
                h,
                d,
                p,
                f,
                D = 0;
              for (d = 0; d <= _; d++) t.bl_count[d] = 0;
              for (
                e[2 * t.heap[t.heap_max] + 1] = 0, c = t.heap_max + 1;
                c < 573;
                c++
              )
                ((l = t.heap[c]),
                  (d = e[2 * e[2 * l + 1] + 1] + 1),
                  d > u && ((d = u), D++),
                  (e[2 * l + 1] = d),
                  l > i ||
                    (t.bl_count[d]++,
                    (p = 0),
                    l >= a && (p = r[l - a]),
                    (f = e[2 * l]),
                    (t.opt_len += f * (d + p)),
                    o && (t.static_len += f * (s[2 * l + 1] + p))));
              if (0 !== D) {
                do {
                  for (d = u - 1; 0 === t.bl_count[d];) d--;
                  (t.bl_count[d]--,
                    (t.bl_count[d + 1] += 2),
                    t.bl_count[u]--,
                    (D -= 2));
                } while (D > 0);
                for (d = u; 0 !== d; d--)
                  for (l = t.bl_count[d]; 0 !== l;)
                    ((h = t.heap[--c]),
                      h > i ||
                        (e[2 * h + 1] !== d &&
                          ((t.opt_len += (d - e[2 * h + 1]) * e[2 * h]),
                          (e[2 * h + 1] = d)),
                        l--));
              }
            })(t, n),
            z(e, c, t.bl_count));
        },
        q = (t, n, e) => {
          let i,
            s,
            o = -1,
            r = n[1],
            a = 0,
            u = 7,
            c = 4;
          for (
            0 === r && ((u = 138), (c = 3)), n[2 * (e + 1) + 1] = 65535, i = 0;
            i <= e;
            i++
          )
            ((s = r),
              (r = n[2 * (i + 1) + 1]),
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
        X = (t, n, e) => {
          let i,
            s,
            o = -1,
            r = n[1],
            a = 0,
            u = 7,
            c = 4;
          for (0 === r && ((u = 138), (c = 3)), i = 0; i <= e; i++)
            if (((s = r), (r = n[2 * (i + 1) + 1]), !(++a < u && s === r))) {
              if (a < c)
                do {
                  N(t, s, t.bl_tree);
                } while (0 !== --a);
              else
                0 !== s
                  ? (s !== o && (N(t, s, t.bl_tree), a--),
                    N(t, 16, t.bl_tree),
                    H(t, a - 3, 2))
                  : a <= 10
                    ? (N(t, 17, t.bl_tree), H(t, a - 3, 3))
                    : (N(t, 18, t.bl_tree), H(t, a - 11, 7));
              ((a = 0),
                (o = s),
                0 === r
                  ? ((u = 138), (c = 3))
                  : s === r
                    ? ((u = 6), (c = 3))
                    : ((u = 7), (c = 4)));
            }
        };
      let tt = !1;
      const nt = (t, n, e, i) => {
        (H(t, 0 + (i ? 1 : 0), 3),
          W(t),
          U(t, e),
          U(t, ~e),
          e && t.pending_buf.set(t.window.subarray(n, n + e), t.pending),
          (t.pending += e));
      };
      var et = (t, n, e, i) => {
          let s,
            o,
            r = 0;
          (t.level > 0
            ? (2 === t.strm.data_type &&
                (t.strm.data_type = ((t) => {
                  let n,
                    e = 4093624447;
                  for (n = 0; n <= 31; n++, e >>>= 1)
                    if (1 & e && 0 !== t.dyn_ltree[2 * n]) return 0;
                  if (
                    0 !== t.dyn_ltree[18] ||
                    0 !== t.dyn_ltree[20] ||
                    0 !== t.dyn_ltree[26]
                  )
                    return 1;
                  for (n = 32; n < b; n++)
                    if (0 !== t.dyn_ltree[2 * n]) return 1;
                  return 0;
                })(t)),
              K(t, t.l_desc),
              K(t, t.d_desc),
              (r = ((t) => {
                let n;
                for (
                  q(t, t.dyn_ltree, t.l_desc.max_code),
                    q(t, t.dyn_dtree, t.d_desc.max_code),
                    K(t, t.bl_desc),
                    n = 18;
                  n >= 3 && 0 === t.bl_tree[2 * A[n] + 1];
                  n--
                );
                return ((t.opt_len += 3 * (n + 1) + 5 + 5 + 4), n);
              })(t)),
              (s = (t.opt_len + 3 + 7) >>> 3),
              (o = (t.static_len + 3 + 7) >>> 3),
              o <= s && (s = o))
            : (s = o = e + 5),
            e + 4 <= s && -1 !== n
              ? nt(t, n, e, i)
              : 4 === t.strategy || o === s
                ? (H(t, 2 + (i ? 1 : 0), 3), J(t, B, I))
                : (H(t, 4 + (i ? 1 : 0), 3),
                  ((t, n, e, i) => {
                    let s;
                    for (
                      H(t, n - 257, 5), H(t, e - 1, 5), H(t, i - 4, 4), s = 0;
                      s < i;
                      s++
                    )
                      H(t, t.bl_tree[2 * A[s] + 1], 3);
                    (X(t, t.dyn_ltree, n - 1), X(t, t.dyn_dtree, e - 1));
                  })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, r + 1),
                  J(t, t.dyn_ltree, t.dyn_dtree)),
            Z(t),
            i && W(t));
        },
        it = {
          m: (t) => {
            (tt ||
              ((() => {
                let t, n, e, i, s;
                const o = new Array(16);
                for (e = 0, i = 0; i < 28; i++)
                  for (j[i] = e, t = 0; t < 1 << x[i]; t++) $[e++] = i;
                for ($[e - 1] = i, s = 0, i = 0; i < 16; i++)
                  for (T[i] = s, t = 0; t < 1 << E[i]; t++) S[s++] = i;
                for (s >>= 7; i < F; i++)
                  for (T[i] = s << 7, t = 0; t < 1 << (E[i] - 7); t++)
                    S[256 + s++] = i;
                for (n = 0; n <= _; n++) o[n] = 0;
                for (t = 0; t <= 143;) ((B[2 * t + 1] = 8), t++, o[8]++);
                for (; t <= 255;) ((B[2 * t + 1] = 9), t++, o[9]++);
                for (; t <= 279;) ((B[2 * t + 1] = 7), t++, o[7]++);
                for (; t <= 287;) ((B[2 * t + 1] = 8), t++, o[8]++);
                for (z(B, 287, o), t = 0; t < F; t++)
                  ((I[2 * t + 1] = 5), (I[2 * t] = G(t, 5)));
                ((P = new M(B, x, 257, C, _)),
                  (L = new M(I, E, 0, F, _)),
                  (R = new M(new Array(0), k, 0, 19, 7)));
              })(),
              (tt = !0)),
              (t.l_desc = new O(t.dyn_ltree, P)),
              (t.d_desc = new O(t.dyn_dtree, L)),
              (t.bl_desc = new O(t.bl_tree, R)),
              (t.bi_buf = 0),
              (t.bi_valid = 0),
              Z(t));
          },
          C: nt,
          F: et,
          _: (t, n, e) => (
            (t.pending_buf[t.sym_buf + t.sym_next++] = n),
            (t.pending_buf[t.sym_buf + t.sym_next++] = n >> 8),
            (t.pending_buf[t.sym_buf + t.sym_next++] = e),
            0 === n
              ? t.dyn_ltree[2 * e]++
              : (t.matches++,
                n--,
                t.dyn_ltree[2 * ($[e] + b + 1)]++,
                t.dyn_dtree[2 * V(n)]++),
            t.sym_next === t.sym_end
          ),
          k: (t) => {
            (H(t, 2, 3),
              N(t, 256, B),
              ((t) => {
                16 === t.bi_valid
                  ? (U(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                  : t.bi_valid >= 8 &&
                    ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                    (t.bi_buf >>= 8),
                    (t.bi_valid -= 8));
              })(t));
          },
        };
      var st = (t, n, e, i) => {
        let s = 65535 & t,
          o = (t >>> 16) & 65535,
          r = 0;
        for (; 0 !== e;) {
          ((r = e > 2e3 ? 2e3 : e), (e -= r));
          do {
            ((s = (s + n[i++]) | 0), (o = (o + s) | 0));
          } while (--r);
          ((s %= 65521), (o %= 65521));
        }
        return s | (o << 16);
      };
      const ot = new Uint32Array(
        (() => {
          let t,
            n = [];
          for (var e = 0; e < 256; e++) {
            t = e;
            for (var i = 0; i < 8; i++)
              t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
            n[e] = t;
          }
          return n;
        })(),
      );
      var rt = (t, n, e, i) => {
          const s = ot,
            o = i + e;
          t ^= -1;
          for (let e = i; e < o; e++) t = (t >>> 8) ^ s[255 & (t ^ n[e])];
          return -1 ^ t;
        },
        at = {
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
        ut = {
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
      const { m: ct, C: lt, F: ht, _: dt, k: pt } = it,
        {
          Z_NO_FLUSH: ft,
          Z_PARTIAL_FLUSH: Dt,
          Z_FULL_FLUSH: vt,
          Z_FINISH: gt,
          Z_BLOCK: mt,
          Z_OK: wt,
          Z_STREAM_END: yt,
          Z_STREAM_ERROR: bt,
          Z_DATA_ERROR: Ct,
          Z_BUF_ERROR: Ft,
          Z_DEFAULT_COMPRESSION: _t,
          Z_FILTERED: xt,
          Z_HUFFMAN_ONLY: Et,
          Z_RLE: kt,
          Z_FIXED: At,
          Z_DEFAULT_STRATEGY: Bt,
          Z_UNKNOWN: It,
          Z_DEFLATED: St,
        } = ut,
        $t = 258,
        jt = 262,
        Tt = 42,
        Mt = 113,
        Pt = 666,
        Lt = (t, n) => ((t.msg = at[n]), n),
        Rt = (t) => 2 * t - (t > 4 ? 9 : 0),
        Ot = (t) => {
          let n = t.length;
          for (; --n >= 0;) t[n] = 0;
        },
        Vt = (t) => {
          let n,
            e,
            i,
            s = t.w_size;
          ((n = t.hash_size), (i = n));
          do {
            ((e = t.head[--i]), (t.head[i] = e >= s ? e - s : 0));
          } while (--n);
          ((n = s), (i = n));
          do {
            ((e = t.prev[--i]), (t.prev[i] = e >= s ? e - s : 0));
          } while (--n);
        };
      let Ut = (t, n, e) => ((n << t.hash_shift) ^ e) & t.hash_mask;
      const Ht = (t) => {
          const n = t.state;
          let e = n.pending;
          (e > t.avail_out && (e = t.avail_out),
            0 !== e &&
              (t.output.set(
                n.pending_buf.subarray(n.pending_out, n.pending_out + e),
                t.next_out,
              ),
              (t.next_out += e),
              (n.pending_out += e),
              (t.total_out += e),
              (t.avail_out -= e),
              (n.pending -= e),
              0 === n.pending && (n.pending_out = 0)));
        },
        Nt = (t, n) => {
          (ht(
            t,
            t.block_start >= 0 ? t.block_start : -1,
            t.strstart - t.block_start,
            n,
          ),
            (t.block_start = t.strstart),
            Ht(t.strm));
        },
        Gt = (t, n) => {
          t.pending_buf[t.pending++] = n;
        },
        zt = (t, n) => {
          ((t.pending_buf[t.pending++] = (n >>> 8) & 255),
            (t.pending_buf[t.pending++] = 255 & n));
        },
        Zt = (t, n, e, i) => {
          let s = t.avail_in;
          return (
            s > i && (s = i),
            0 === s
              ? 0
              : ((t.avail_in -= s),
                n.set(t.input.subarray(t.next_in, t.next_in + s), e),
                1 === t.state.wrap
                  ? (t.adler = st(t.adler, n, s, e))
                  : 2 === t.state.wrap && (t.adler = rt(t.adler, n, s, e)),
                (t.next_in += s),
                (t.total_in += s),
                s)
          );
        },
        Wt = (t, n) => {
          let e,
            i,
            s = t.max_chain_length,
            o = t.strstart,
            r = t.prev_length,
            a = t.nice_match;
          const u =
              t.strstart > t.w_size - jt ? t.strstart - (t.w_size - jt) : 0,
            c = t.window,
            l = t.w_mask,
            h = t.prev,
            d = t.strstart + $t;
          let p = c[o + r - 1],
            f = c[o + r];
          (t.prev_length >= t.good_match && (s >>= 2),
            a > t.lookahead && (a = t.lookahead));
          do {
            if (
              ((e = n),
              c[e + r] === f &&
                c[e + r - 1] === p &&
                c[e] === c[o] &&
                c[++e] === c[o + 1])
            ) {
              ((o += 2), e++);
              do {} while (
                c[++o] === c[++e] &&
                c[++o] === c[++e] &&
                c[++o] === c[++e] &&
                c[++o] === c[++e] &&
                c[++o] === c[++e] &&
                c[++o] === c[++e] &&
                c[++o] === c[++e] &&
                c[++o] === c[++e] &&
                o < d
              );
              if (((i = $t - (d - o)), (o = d - $t), i > r)) {
                if (((t.match_start = n), (r = i), i >= a)) break;
                ((p = c[o + r - 1]), (f = c[o + r]));
              }
            }
          } while ((n = h[n & l]) > u && 0 !== --s);
          return r <= t.lookahead ? r : t.lookahead;
        },
        Qt = (t) => {
          const n = t.w_size;
          let e, i, s;
          do {
            if (
              ((i = t.window_size - t.lookahead - t.strstart),
              t.strstart >= n + (n - jt) &&
                (t.window.set(t.window.subarray(n, n + n - i), 0),
                (t.match_start -= n),
                (t.strstart -= n),
                (t.block_start -= n),
                t.insert > t.strstart && (t.insert = t.strstart),
                Vt(t),
                (i += n)),
              0 === t.strm.avail_in)
            )
              break;
            if (
              ((e = Zt(t.strm, t.window, t.strstart + t.lookahead, i)),
              (t.lookahead += e),
              t.lookahead + t.insert >= 3)
            )
              for (
                s = t.strstart - t.insert,
                  t.ins_h = t.window[s],
                  t.ins_h = Ut(t, t.ins_h, t.window[s + 1]);
                t.insert &&
                ((t.ins_h = Ut(t, t.ins_h, t.window[s + 3 - 1])),
                (t.prev[s & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = s),
                s++,
                t.insert--,
                !(t.lookahead + t.insert < 3));
              );
          } while (t.lookahead < jt && 0 !== t.strm.avail_in);
        },
        Yt = (t, n) => {
          let e,
            i,
            s,
            o =
              t.pending_buf_size - 5 > t.w_size
                ? t.w_size
                : t.pending_buf_size - 5,
            r = 0,
            a = t.strm.avail_in;
          do {
            if (
              ((e = 65535), (s = (t.bi_valid + 42) >> 3), t.strm.avail_out < s)
            )
              break;
            if (
              ((s = t.strm.avail_out - s),
              (i = t.strstart - t.block_start),
              e > i + t.strm.avail_in && (e = i + t.strm.avail_in),
              e > s && (e = s),
              e < o &&
                ((0 === e && n !== gt) ||
                  n === ft ||
                  e !== i + t.strm.avail_in))
            )
              break;
            ((r = n === gt && e === i + t.strm.avail_in ? 1 : 0),
              lt(t, 0, 0, r),
              (t.pending_buf[t.pending - 4] = e),
              (t.pending_buf[t.pending - 3] = e >> 8),
              (t.pending_buf[t.pending - 2] = ~e),
              (t.pending_buf[t.pending - 1] = ~e >> 8),
              Ht(t.strm),
              i &&
                (i > e && (i = e),
                t.strm.output.set(
                  t.window.subarray(t.block_start, t.block_start + i),
                  t.strm.next_out,
                ),
                (t.strm.next_out += i),
                (t.strm.avail_out -= i),
                (t.strm.total_out += i),
                (t.block_start += i),
                (e -= i)),
              e &&
                (Zt(t.strm, t.strm.output, t.strm.next_out, e),
                (t.strm.next_out += e),
                (t.strm.avail_out -= e),
                (t.strm.total_out += e)));
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
              : n !== ft &&
                  n !== gt &&
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
                    (Zt(t.strm, t.window, t.strstart, s),
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
                  (i = t.strstart - t.block_start),
                  (i >= o ||
                    ((i || n === gt) &&
                      n !== ft &&
                      0 === t.strm.avail_in &&
                      i <= s)) &&
                    ((e = i > s ? s : i),
                    (r = n === gt && 0 === t.strm.avail_in && e === i ? 1 : 0),
                    lt(t, t.block_start, e, r),
                    (t.block_start += e),
                    Ht(t.strm)),
                  r ? 3 : 1)
          );
        },
        Jt = (t, n) => {
          let e, i;
          for (;;) {
            if (t.lookahead < jt) {
              if ((Qt(t), t.lookahead < jt && n === ft)) return 1;
              if (0 === t.lookahead) break;
            }
            if (
              ((e = 0),
              t.lookahead >= 3 &&
                ((t.ins_h = Ut(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart)),
              0 !== e &&
                t.strstart - e <= t.w_size - jt &&
                (t.match_length = Wt(t, e)),
              t.match_length >= 3)
            )
              if (
                ((i = dt(t, t.strstart - t.match_start, t.match_length - 3)),
                (t.lookahead -= t.match_length),
                t.match_length <= t.max_lazy_match && t.lookahead >= 3)
              ) {
                t.match_length--;
                do {
                  (t.strstart++,
                    (t.ins_h = Ut(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                    (e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                    (t.head[t.ins_h] = t.strstart));
                } while (0 !== --t.match_length);
                t.strstart++;
              } else
                ((t.strstart += t.match_length),
                  (t.match_length = 0),
                  (t.ins_h = t.window[t.strstart]),
                  (t.ins_h = Ut(t, t.ins_h, t.window[t.strstart + 1])));
            else
              ((i = dt(t, 0, t.window[t.strstart])),
                t.lookahead--,
                t.strstart++);
            if (i && (Nt(t, !1), 0 === t.strm.avail_out)) return 1;
          }
          return (
            (t.insert = t.strstart < 2 ? t.strstart : 2),
            n === gt
              ? (Nt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
              : t.sym_next && (Nt(t, !1), 0 === t.strm.avail_out)
                ? 1
                : 2
          );
        },
        Kt = (t, n) => {
          let e, i, s;
          for (;;) {
            if (t.lookahead < jt) {
              if ((Qt(t), t.lookahead < jt && n === ft)) return 1;
              if (0 === t.lookahead) break;
            }
            if (
              ((e = 0),
              t.lookahead >= 3 &&
                ((t.ins_h = Ut(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart)),
              (t.prev_length = t.match_length),
              (t.prev_match = t.match_start),
              (t.match_length = 2),
              0 !== e &&
                t.prev_length < t.max_lazy_match &&
                t.strstart - e <= t.w_size - jt &&
                ((t.match_length = Wt(t, e)),
                t.match_length <= 5 &&
                  (t.strategy === xt ||
                    (3 === t.match_length &&
                      t.strstart - t.match_start > 4096)) &&
                  (t.match_length = 2)),
              t.prev_length >= 3 && t.match_length <= t.prev_length)
            ) {
              ((s = t.strstart + t.lookahead - 3),
                (i = dt(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
                (t.lookahead -= t.prev_length - 1),
                (t.prev_length -= 2));
              do {
                ++t.strstart <= s &&
                  ((t.ins_h = Ut(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                  (e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart));
              } while (0 !== --t.prev_length);
              if (
                ((t.match_available = 0),
                (t.match_length = 2),
                t.strstart++,
                i && (Nt(t, !1), 0 === t.strm.avail_out))
              )
                return 1;
            } else if (t.match_available) {
              if (
                ((i = dt(t, 0, t.window[t.strstart - 1])),
                i && Nt(t, !1),
                t.strstart++,
                t.lookahead--,
                0 === t.strm.avail_out)
              )
                return 1;
            } else ((t.match_available = 1), t.strstart++, t.lookahead--);
          }
          return (
            t.match_available &&
              ((i = dt(t, 0, t.window[t.strstart - 1])),
              (t.match_available = 0)),
            (t.insert = t.strstart < 2 ? t.strstart : 2),
            n === gt
              ? (Nt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
              : t.sym_next && (Nt(t, !1), 0 === t.strm.avail_out)
                ? 1
                : 2
          );
        };
      function qt(t, n, e, i, s) {
        ((this.good_length = t),
          (this.max_lazy = n),
          (this.nice_length = e),
          (this.max_chain = i),
          (this.func = s));
      }
      const Xt = [
        new qt(0, 0, 0, 0, Yt),
        new qt(4, 4, 8, 4, Jt),
        new qt(4, 5, 16, 8, Jt),
        new qt(4, 6, 32, 32, Jt),
        new qt(4, 4, 16, 16, Kt),
        new qt(8, 16, 32, 32, Kt),
        new qt(8, 16, 128, 128, Kt),
        new qt(8, 32, 128, 256, Kt),
        new qt(32, 128, 258, 1024, Kt),
        new qt(32, 258, 258, 4096, Kt),
      ];
      function tn() {
        ((this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = St),
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
          Ot(this.dyn_ltree),
          Ot(this.dyn_dtree),
          Ot(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new Uint16Array(16)),
          (this.heap = new Uint16Array(573)),
          Ot(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new Uint16Array(573)),
          Ot(this.depth),
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
      const nn = (t) => {
          if (!t) return 1;
          const n = t.state;
          return !n ||
            n.strm !== t ||
            (n.status !== Tt &&
              57 !== n.status &&
              69 !== n.status &&
              73 !== n.status &&
              91 !== n.status &&
              103 !== n.status &&
              n.status !== Mt &&
              n.status !== Pt)
            ? 1
            : 0;
        },
        en = (t) => {
          if (nn(t)) return Lt(t, bt);
          ((t.total_in = t.total_out = 0), (t.data_type = It));
          const n = t.state;
          return (
            (n.pending = 0),
            (n.pending_out = 0),
            n.wrap < 0 && (n.wrap = -n.wrap),
            (n.status = 2 === n.wrap ? 57 : n.wrap ? Tt : Mt),
            (t.adler = 2 === n.wrap ? 0 : 1),
            (n.last_flush = -2),
            ct(n),
            wt
          );
        },
        sn = (t) => {
          const n = en(t);
          var e;
          return (
            n === wt &&
              (((e = t.state).window_size = 2 * e.w_size),
              Ot(e.head),
              (e.max_lazy_match = Xt[e.level].max_lazy),
              (e.good_match = Xt[e.level].good_length),
              (e.nice_match = Xt[e.level].nice_length),
              (e.max_chain_length = Xt[e.level].max_chain),
              (e.strstart = 0),
              (e.block_start = 0),
              (e.lookahead = 0),
              (e.insert = 0),
              (e.match_length = e.prev_length = 2),
              (e.match_available = 0),
              (e.ins_h = 0)),
            n
          );
        },
        on = (t, n, e, i, s, o) => {
          if (!t) return bt;
          let r = 1;
          if (
            (n === _t && (n = 6),
            i < 0 ? ((r = 0), (i = -i)) : i > 15 && ((r = 2), (i -= 16)),
            s < 1 ||
              s > 9 ||
              e !== St ||
              i < 8 ||
              i > 15 ||
              n < 0 ||
              n > 9 ||
              o < 0 ||
              o > At ||
              (8 === i && 1 !== r))
          )
            return Lt(t, bt);
          8 === i && (i = 9);
          const a = new tn();
          return (
            (t.state = a),
            (a.strm = t),
            (a.status = Tt),
            (a.wrap = r),
            (a.gzhead = null),
            (a.w_bits = i),
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
            (a.level = n),
            (a.strategy = o),
            (a.method = e),
            sn(t)
          );
        };
      var rn = {
        deflateInit: (t, n) => on(t, n, St, 15, 8, Bt),
        deflateInit2: on,
        deflateReset: sn,
        deflateResetKeep: en,
        deflateSetHeader: (t, n) =>
          nn(t) || 2 !== t.state.wrap ? bt : ((t.state.gzhead = n), wt),
        deflate: (t, n) => {
          if (nn(t) || n > mt || n < 0) return t ? Lt(t, bt) : bt;
          const e = t.state;
          if (
            !t.output ||
            (0 !== t.avail_in && !t.input) ||
            (e.status === Pt && n !== gt)
          )
            return Lt(t, 0 === t.avail_out ? Ft : bt);
          const i = e.last_flush;
          if (((e.last_flush = n), 0 !== e.pending)) {
            if ((Ht(t), 0 === t.avail_out)) return ((e.last_flush = -1), wt);
          } else if (0 === t.avail_in && Rt(n) <= Rt(i) && n !== gt)
            return Lt(t, Ft);
          if (e.status === Pt && 0 !== t.avail_in) return Lt(t, Ft);
          if (
            (e.status === Tt && 0 === e.wrap && (e.status = Mt),
            e.status === Tt)
          ) {
            let n = (St + ((e.w_bits - 8) << 4)) << 8,
              i = -1;
            if (
              ((i =
                e.strategy >= Et || e.level < 2
                  ? 0
                  : e.level < 6
                    ? 1
                    : 6 === e.level
                      ? 2
                      : 3),
              (n |= i << 6),
              0 !== e.strstart && (n |= 32),
              (n += 31 - (n % 31)),
              zt(e, n),
              0 !== e.strstart &&
                (zt(e, t.adler >>> 16), zt(e, 65535 & t.adler)),
              (t.adler = 1),
              (e.status = Mt),
              Ht(t),
              0 !== e.pending)
            )
              return ((e.last_flush = -1), wt);
          }
          if (57 === e.status)
            if (((t.adler = 0), Gt(e, 31), Gt(e, 139), Gt(e, 8), e.gzhead))
              (Gt(
                e,
                (e.gzhead.text ? 1 : 0) +
                  (e.gzhead.hcrc ? 2 : 0) +
                  (e.gzhead.extra ? 4 : 0) +
                  (e.gzhead.name ? 8 : 0) +
                  (e.gzhead.comment ? 16 : 0),
              ),
                Gt(e, 255 & e.gzhead.time),
                Gt(e, (e.gzhead.time >> 8) & 255),
                Gt(e, (e.gzhead.time >> 16) & 255),
                Gt(e, (e.gzhead.time >> 24) & 255),
                Gt(
                  e,
                  9 === e.level ? 2 : e.strategy >= Et || e.level < 2 ? 4 : 0,
                ),
                Gt(e, 255 & e.gzhead.os),
                e.gzhead.extra &&
                  e.gzhead.extra.length &&
                  (Gt(e, 255 & e.gzhead.extra.length),
                  Gt(e, (e.gzhead.extra.length >> 8) & 255)),
                e.gzhead.hcrc &&
                  (t.adler = rt(t.adler, e.pending_buf, e.pending, 0)),
                (e.gzindex = 0),
                (e.status = 69));
            else if (
              (Gt(e, 0),
              Gt(e, 0),
              Gt(e, 0),
              Gt(e, 0),
              Gt(e, 0),
              Gt(
                e,
                9 === e.level ? 2 : e.strategy >= Et || e.level < 2 ? 4 : 0,
              ),
              Gt(e, 3),
              (e.status = Mt),
              Ht(t),
              0 !== e.pending)
            )
              return ((e.last_flush = -1), wt);
          if (69 === e.status) {
            if (e.gzhead.extra) {
              let n = e.pending,
                i = (65535 & e.gzhead.extra.length) - e.gzindex;
              for (; e.pending + i > e.pending_buf_size;) {
                let s = e.pending_buf_size - e.pending;
                if (
                  (e.pending_buf.set(
                    e.gzhead.extra.subarray(e.gzindex, e.gzindex + s),
                    e.pending,
                  ),
                  (e.pending = e.pending_buf_size),
                  e.gzhead.hcrc &&
                    e.pending > n &&
                    (t.adler = rt(t.adler, e.pending_buf, e.pending - n, n)),
                  (e.gzindex += s),
                  Ht(t),
                  0 !== e.pending)
                )
                  return ((e.last_flush = -1), wt);
                ((n = 0), (i -= s));
              }
              let s = new Uint8Array(e.gzhead.extra);
              (e.pending_buf.set(
                s.subarray(e.gzindex, e.gzindex + i),
                e.pending,
              ),
                (e.pending += i),
                e.gzhead.hcrc &&
                  e.pending > n &&
                  (t.adler = rt(t.adler, e.pending_buf, e.pending - n, n)),
                (e.gzindex = 0));
            }
            e.status = 73;
          }
          if (73 === e.status) {
            if (e.gzhead.name) {
              let n,
                i = e.pending;
              do {
                if (e.pending === e.pending_buf_size) {
                  if (
                    (e.gzhead.hcrc &&
                      e.pending > i &&
                      (t.adler = rt(t.adler, e.pending_buf, e.pending - i, i)),
                    Ht(t),
                    0 !== e.pending)
                  )
                    return ((e.last_flush = -1), wt);
                  i = 0;
                }
                ((n =
                  e.gzindex < e.gzhead.name.length
                    ? 255 & e.gzhead.name.charCodeAt(e.gzindex++)
                    : 0),
                  Gt(e, n));
              } while (0 !== n);
              (e.gzhead.hcrc &&
                e.pending > i &&
                (t.adler = rt(t.adler, e.pending_buf, e.pending - i, i)),
                (e.gzindex = 0));
            }
            e.status = 91;
          }
          if (91 === e.status) {
            if (e.gzhead.comment) {
              let n,
                i = e.pending;
              do {
                if (e.pending === e.pending_buf_size) {
                  if (
                    (e.gzhead.hcrc &&
                      e.pending > i &&
                      (t.adler = rt(t.adler, e.pending_buf, e.pending - i, i)),
                    Ht(t),
                    0 !== e.pending)
                  )
                    return ((e.last_flush = -1), wt);
                  i = 0;
                }
                ((n =
                  e.gzindex < e.gzhead.comment.length
                    ? 255 & e.gzhead.comment.charCodeAt(e.gzindex++)
                    : 0),
                  Gt(e, n));
              } while (0 !== n);
              e.gzhead.hcrc &&
                e.pending > i &&
                (t.adler = rt(t.adler, e.pending_buf, e.pending - i, i));
            }
            e.status = 103;
          }
          if (103 === e.status) {
            if (e.gzhead.hcrc) {
              if (
                e.pending + 2 > e.pending_buf_size &&
                (Ht(t), 0 !== e.pending)
              )
                return ((e.last_flush = -1), wt);
              (Gt(e, 255 & t.adler),
                Gt(e, (t.adler >> 8) & 255),
                (t.adler = 0));
            }
            if (((e.status = Mt), Ht(t), 0 !== e.pending))
              return ((e.last_flush = -1), wt);
          }
          if (
            0 !== t.avail_in ||
            0 !== e.lookahead ||
            (n !== ft && e.status !== Pt)
          ) {
            let i =
              0 === e.level
                ? Yt(e, n)
                : e.strategy === Et
                  ? ((t, n) => {
                      let e;
                      for (;;) {
                        if (0 === t.lookahead && (Qt(t), 0 === t.lookahead)) {
                          if (n === ft) return 1;
                          break;
                        }
                        if (
                          ((t.match_length = 0),
                          (e = dt(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++,
                          e && (Nt(t, !1), 0 === t.strm.avail_out))
                        )
                          return 1;
                      }
                      return (
                        (t.insert = 0),
                        n === gt
                          ? (Nt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                          : t.sym_next && (Nt(t, !1), 0 === t.strm.avail_out)
                            ? 1
                            : 2
                      );
                    })(e, n)
                  : e.strategy === kt
                    ? ((t, n) => {
                        let e, i, s, o;
                        const r = t.window;
                        for (;;) {
                          if (t.lookahead <= $t) {
                            if ((Qt(t), t.lookahead <= $t && n === ft))
                              return 1;
                            if (0 === t.lookahead) break;
                          }
                          if (
                            ((t.match_length = 0),
                            t.lookahead >= 3 &&
                              t.strstart > 0 &&
                              ((s = t.strstart - 1),
                              (i = r[s]),
                              i === r[++s] && i === r[++s] && i === r[++s]))
                          ) {
                            o = t.strstart + $t;
                            do {} while (
                              i === r[++s] &&
                              i === r[++s] &&
                              i === r[++s] &&
                              i === r[++s] &&
                              i === r[++s] &&
                              i === r[++s] &&
                              i === r[++s] &&
                              i === r[++s] &&
                              s < o
                            );
                            ((t.match_length = $t - (o - s)),
                              t.match_length > t.lookahead &&
                                (t.match_length = t.lookahead));
                          }
                          if (
                            (t.match_length >= 3
                              ? ((e = dt(t, 1, t.match_length - 3)),
                                (t.lookahead -= t.match_length),
                                (t.strstart += t.match_length),
                                (t.match_length = 0))
                              : ((e = dt(t, 0, t.window[t.strstart])),
                                t.lookahead--,
                                t.strstart++),
                            e && (Nt(t, !1), 0 === t.strm.avail_out))
                          )
                            return 1;
                        }
                        return (
                          (t.insert = 0),
                          n === gt
                            ? (Nt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                            : t.sym_next && (Nt(t, !1), 0 === t.strm.avail_out)
                              ? 1
                              : 2
                        );
                      })(e, n)
                    : Xt[e.level].func(e, n);
            if (((3 !== i && 4 !== i) || (e.status = Pt), 1 === i || 3 === i))
              return (0 === t.avail_out && (e.last_flush = -1), wt);
            if (
              2 === i &&
              (n === Dt
                ? pt(e)
                : n !== mt &&
                  (lt(e, 0, 0, !1),
                  n === vt &&
                    (Ot(e.head),
                    0 === e.lookahead &&
                      ((e.strstart = 0), (e.block_start = 0), (e.insert = 0)))),
              Ht(t),
              0 === t.avail_out)
            )
              return ((e.last_flush = -1), wt);
          }
          return n !== gt
            ? wt
            : e.wrap <= 0
              ? yt
              : (2 === e.wrap
                  ? (Gt(e, 255 & t.adler),
                    Gt(e, (t.adler >> 8) & 255),
                    Gt(e, (t.adler >> 16) & 255),
                    Gt(e, (t.adler >> 24) & 255),
                    Gt(e, 255 & t.total_in),
                    Gt(e, (t.total_in >> 8) & 255),
                    Gt(e, (t.total_in >> 16) & 255),
                    Gt(e, (t.total_in >> 24) & 255))
                  : (zt(e, t.adler >>> 16), zt(e, 65535 & t.adler)),
                Ht(t),
                e.wrap > 0 && (e.wrap = -e.wrap),
                0 !== e.pending ? wt : yt);
        },
        deflateEnd: (t) => {
          if (nn(t)) return bt;
          const n = t.state.status;
          return ((t.state = null), n === Mt ? Lt(t, Ct) : wt);
        },
        deflateSetDictionary: (t, n) => {
          let e = n.length;
          if (nn(t)) return bt;
          const i = t.state,
            s = i.wrap;
          if (2 === s || (1 === s && i.status !== Tt) || i.lookahead) return bt;
          if (
            (1 === s && (t.adler = st(t.adler, n, e, 0)),
            (i.wrap = 0),
            e >= i.w_size)
          ) {
            0 === s &&
              (Ot(i.head),
              (i.strstart = 0),
              (i.block_start = 0),
              (i.insert = 0));
            let t = new Uint8Array(i.w_size);
            (t.set(n.subarray(e - i.w_size, e), 0), (n = t), (e = i.w_size));
          }
          const o = t.avail_in,
            r = t.next_in,
            a = t.input;
          for (
            t.avail_in = e, t.next_in = 0, t.input = n, Qt(i);
            i.lookahead >= 3;
          ) {
            let t = i.strstart,
              n = i.lookahead - 2;
            do {
              ((i.ins_h = Ut(i, i.ins_h, i.window[t + 3 - 1])),
                (i.prev[t & i.w_mask] = i.head[i.ins_h]),
                (i.head[i.ins_h] = t),
                t++);
            } while (--n);
            ((i.strstart = t), (i.lookahead = 2), Qt(i));
          }
          return (
            (i.strstart += i.lookahead),
            (i.block_start = i.strstart),
            (i.insert = i.lookahead),
            (i.lookahead = 0),
            (i.match_length = i.prev_length = 2),
            (i.match_available = 0),
            (t.next_in = r),
            (t.input = a),
            (t.avail_in = o),
            (i.wrap = s),
            wt
          );
        },
        deflateInfo: "pako deflate (from Nodeca project)",
      };
      const an = (t, n) => Object.prototype.hasOwnProperty.call(t, n);
      var un = function (t) {
          const n = Array.prototype.slice.call(arguments, 1);
          for (; n.length;) {
            const e = n.shift();
            if (e) {
              if ("object" != typeof e)
                throw new TypeError(e + "must be non-object");
              for (const n in e) an(e, n) && (t[n] = e[n]);
            }
          }
          return t;
        },
        cn = (t) => {
          let n = 0;
          for (let e = 0, i = t.length; e < i; e++) n += t[e].length;
          const e = new Uint8Array(n);
          for (let n = 0, i = 0, s = t.length; n < s; n++) {
            let s = t[n];
            (e.set(s, i), (i += s.length));
          }
          return e;
        };
      let ln = !0;
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (t) {
        ln = !1;
      }
      const hn = new Uint8Array(256);
      for (let t = 0; t < 256; t++)
        hn[t] =
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
      hn[254] = hn[254] = 1;
      var dn = (t) => {
          if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
            return new TextEncoder().encode(t);
          let n,
            e,
            i,
            s,
            o,
            r = t.length,
            a = 0;
          for (s = 0; s < r; s++)
            ((e = t.charCodeAt(s)),
              55296 == (64512 & e) &&
                s + 1 < r &&
                ((i = t.charCodeAt(s + 1)),
                56320 == (64512 & i) &&
                  ((e = 65536 + ((e - 55296) << 10) + (i - 56320)), s++)),
              (a += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4));
          for (n = new Uint8Array(a), o = 0, s = 0; o < a; s++)
            ((e = t.charCodeAt(s)),
              55296 == (64512 & e) &&
                s + 1 < r &&
                ((i = t.charCodeAt(s + 1)),
                56320 == (64512 & i) &&
                  ((e = 65536 + ((e - 55296) << 10) + (i - 56320)), s++)),
              e < 128
                ? (n[o++] = e)
                : e < 2048
                  ? ((n[o++] = 192 | (e >>> 6)), (n[o++] = 128 | (63 & e)))
                  : e < 65536
                    ? ((n[o++] = 224 | (e >>> 12)),
                      (n[o++] = 128 | ((e >>> 6) & 63)),
                      (n[o++] = 128 | (63 & e)))
                    : ((n[o++] = 240 | (e >>> 18)),
                      (n[o++] = 128 | ((e >>> 12) & 63)),
                      (n[o++] = 128 | ((e >>> 6) & 63)),
                      (n[o++] = 128 | (63 & e))));
          return n;
        },
        pn = (t, n) => {
          const e = n || t.length;
          if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
            return new TextDecoder().decode(t.subarray(0, n));
          let i, s;
          const o = new Array(2 * e);
          for (s = 0, i = 0; i < e;) {
            let n = t[i++];
            if (n < 128) {
              o[s++] = n;
              continue;
            }
            let r = hn[n];
            if (r > 4) ((o[s++] = 65533), (i += r - 1));
            else {
              for (n &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && i < e;)
                ((n = (n << 6) | (63 & t[i++])), r--);
              r > 1
                ? (o[s++] = 65533)
                : n < 65536
                  ? (o[s++] = n)
                  : ((n -= 65536),
                    (o[s++] = 55296 | ((n >> 10) & 1023)),
                    (o[s++] = 56320 | (1023 & n)));
            }
          }
          return ((t, n) => {
            if (n < 65534 && t.subarray && ln)
              return String.fromCharCode.apply(
                null,
                t.length === n ? t : t.subarray(0, n),
              );
            let e = "";
            for (let i = 0; i < n; i++) e += String.fromCharCode(t[i]);
            return e;
          })(o, s);
        },
        fn = (t, n) => {
          (n = n || t.length) > t.length && (n = t.length);
          let e = n - 1;
          for (; e >= 0 && 128 == (192 & t[e]);) e--;
          return e < 0 || 0 === e ? n : e + hn[t[e]] > n ? e : n;
        };
      var Dn = function () {
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
      const vn = Object.prototype.toString,
        {
          Z_NO_FLUSH: gn,
          Z_SYNC_FLUSH: mn,
          Z_FULL_FLUSH: wn,
          Z_FINISH: yn,
          Z_OK: bn,
          Z_STREAM_END: Cn,
          Z_DEFAULT_COMPRESSION: Fn,
          Z_DEFAULT_STRATEGY: _n,
          Z_DEFLATED: xn,
        } = ut;
      function En(t) {
        this.options = un(
          {
            level: Fn,
            method: xn,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: _n,
          },
          t || {},
        );
        let n = this.options;
        (n.raw && n.windowBits > 0
          ? (n.windowBits = -n.windowBits)
          : n.gzip &&
            n.windowBits > 0 &&
            n.windowBits < 16 &&
            (n.windowBits += 16),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new Dn()),
          (this.strm.avail_out = 0));
        let e = rn.deflateInit2(
          this.strm,
          n.level,
          n.method,
          n.windowBits,
          n.memLevel,
          n.strategy,
        );
        if (e !== bn) throw new Error(at[e]);
        if (
          (n.header && rn.deflateSetHeader(this.strm, n.header), n.dictionary)
        ) {
          let t;
          if (
            ((t =
              "string" == typeof n.dictionary
                ? dn(n.dictionary)
                : "[object ArrayBuffer]" === vn.call(n.dictionary)
                  ? new Uint8Array(n.dictionary)
                  : n.dictionary),
            (e = rn.deflateSetDictionary(this.strm, t)),
            e !== bn)
          )
            throw new Error(at[e]);
          this.A = !0;
        }
      }
      function kn(t, n) {
        const e = new En(n);
        if ((e.push(t, !0), e.err)) throw e.msg || at[e.err];
        return e.result;
      }
      ((En.prototype.push = function (t, n) {
        const e = this.strm,
          i = this.options.chunkSize;
        let s, o;
        if (this.ended) return !1;
        for (
          o = n === ~~n ? n : !0 === n ? yn : gn,
            "string" == typeof t
              ? (e.input = dn(t))
              : "[object ArrayBuffer]" === vn.call(t)
                ? (e.input = new Uint8Array(t))
                : (e.input = t),
            e.next_in = 0,
            e.avail_in = e.input.length;
          ;
        )
          if (
            (0 === e.avail_out &&
              ((e.output = new Uint8Array(i)),
              (e.next_out = 0),
              (e.avail_out = i)),
            (o === mn || o === wn) && e.avail_out <= 6)
          )
            (this.onData(e.output.subarray(0, e.next_out)), (e.avail_out = 0));
          else {
            if (((s = rn.deflate(e, o)), s === Cn))
              return (
                e.next_out > 0 && this.onData(e.output.subarray(0, e.next_out)),
                (s = rn.deflateEnd(this.strm)),
                this.onEnd(s),
                (this.ended = !0),
                s === bn
              );
            if (0 !== e.avail_out) {
              if (o > 0 && e.next_out > 0)
                (this.onData(e.output.subarray(0, e.next_out)),
                  (e.avail_out = 0));
              else if (0 === e.avail_in) break;
            } else this.onData(e.output);
          }
        return !0;
      }),
        (En.prototype.onData = function (t) {
          this.chunks.push(t);
        }),
        (En.prototype.onEnd = function (t) {
          (t === bn && (this.result = cn(this.chunks)),
            (this.chunks = []),
            (this.err = t),
            (this.msg = this.strm.msg));
        }));
      var An = {
        Deflate: En,
        deflate: kn,
        deflateRaw: function (t, n) {
          return (((n = n || {}).raw = !0), kn(t, n));
        },
        gzip: function (t, n) {
          return (((n = n || {}).gzip = !0), kn(t, n));
        },
        constants: ut,
      };
      const Bn = 16209;
      var In = function (t, n) {
        let e,
          i,
          s,
          o,
          r,
          a,
          u,
          c,
          l,
          h,
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
          x;
        const E = t.state;
        ((e = t.next_in),
          (_ = t.input),
          (i = e + (t.avail_in - 5)),
          (s = t.next_out),
          (x = t.output),
          (o = s - (n - t.avail_out)),
          (r = s + (t.avail_out - 257)),
          (a = E.dmax),
          (u = E.wsize),
          (c = E.whave),
          (l = E.wnext),
          (h = E.window),
          (d = E.hold),
          (p = E.bits),
          (f = E.lencode),
          (D = E.distcode),
          (v = (1 << E.lenbits) - 1),
          (g = (1 << E.distbits) - 1));
        t: do {
          (p < 15 &&
            ((d += _[e++] << p), (p += 8), (d += _[e++] << p), (p += 8)),
            (m = f[d & v]));
          n: for (;;) {
            if (
              ((w = m >>> 24),
              (d >>>= w),
              (p -= w),
              (w = (m >>> 16) & 255),
              0 === w)
            )
              x[s++] = 65535 & m;
            else {
              if (!(16 & w)) {
                if (64 & w) {
                  if (32 & w) {
                    E.mode = 16191;
                    break t;
                  }
                  ((t.msg = "invalid literal/length code"), (E.mode = Bn));
                  break t;
                }
                m = f[(65535 & m) + (d & ((1 << w) - 1))];
                continue n;
              }
              for (
                y = 65535 & m,
                  w &= 15,
                  w &&
                    (p < w && ((d += _[e++] << p), (p += 8)),
                    (y += d & ((1 << w) - 1)),
                    (d >>>= w),
                    (p -= w)),
                  p < 15 &&
                    ((d += _[e++] << p),
                    (p += 8),
                    (d += _[e++] << p),
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
                      ((d += _[e++] << p),
                      (p += 8),
                      p < w && ((d += _[e++] << p), (p += 8))),
                    (b += d & ((1 << w) - 1)),
                    b > a)
                  ) {
                    ((t.msg = "invalid distance too far back"), (E.mode = Bn));
                    break t;
                  }
                  if (((d >>>= w), (p -= w), (w = s - o), b > w)) {
                    if (((w = b - w), w > c && E.sane)) {
                      ((t.msg = "invalid distance too far back"),
                        (E.mode = Bn));
                      break t;
                    }
                    if (((C = 0), (F = h), 0 === l)) {
                      if (((C += u - w), w < y)) {
                        y -= w;
                        do {
                          x[s++] = h[C++];
                        } while (--w);
                        ((C = s - b), (F = x));
                      }
                    } else if (l < w) {
                      if (((C += u + l - w), (w -= l), w < y)) {
                        y -= w;
                        do {
                          x[s++] = h[C++];
                        } while (--w);
                        if (((C = 0), l < y)) {
                          ((w = l), (y -= w));
                          do {
                            x[s++] = h[C++];
                          } while (--w);
                          ((C = s - b), (F = x));
                        }
                      }
                    } else if (((C += l - w), w < y)) {
                      y -= w;
                      do {
                        x[s++] = h[C++];
                      } while (--w);
                      ((C = s - b), (F = x));
                    }
                    for (; y > 2;)
                      ((x[s++] = F[C++]),
                        (x[s++] = F[C++]),
                        (x[s++] = F[C++]),
                        (y -= 3));
                    y && ((x[s++] = F[C++]), y > 1 && (x[s++] = F[C++]));
                  } else {
                    C = s - b;
                    do {
                      ((x[s++] = x[C++]),
                        (x[s++] = x[C++]),
                        (x[s++] = x[C++]),
                        (y -= 3));
                    } while (y > 2);
                    y && ((x[s++] = x[C++]), y > 1 && (x[s++] = x[C++]));
                  }
                  break;
                }
                if (64 & w) {
                  ((t.msg = "invalid distance code"), (E.mode = Bn));
                  break t;
                }
                m = D[(65535 & m) + (d & ((1 << w) - 1))];
              }
            }
            break;
          }
        } while (e < i && s < r);
        ((y = p >> 3),
          (e -= y),
          (p -= y << 3),
          (d &= (1 << p) - 1),
          (t.next_in = e),
          (t.next_out = s),
          (t.avail_in = e < i ? i - e + 5 : 5 - (e - i)),
          (t.avail_out = s < r ? r - s + 257 : 257 - (s - r)),
          (E.hold = d),
          (E.bits = p));
      };
      const Sn = 15,
        $n = new Uint16Array([
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ]),
        jn = new Uint8Array([
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
          19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
        ]),
        Tn = new Uint16Array([
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 0, 0,
        ]),
        Mn = new Uint8Array([
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
          23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ]);
      var Pn = (t, n, e, i, s, o, r, a) => {
        const u = a.bits;
        let c,
          l,
          h,
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
          x = null;
        const E = new Uint16Array(16),
          k = new Uint16Array(16);
        let A,
          B,
          I,
          S = null;
        for (D = 0; D <= Sn; D++) E[D] = 0;
        for (v = 0; v < i; v++) E[n[e + v]]++;
        for (w = u, m = Sn; m >= 1 && 0 === E[m]; m--);
        if ((w > m && (w = m), 0 === m))
          return ((s[o++] = 20971520), (s[o++] = 20971520), (a.bits = 1), 0);
        for (g = 1; g < m && 0 === E[g]; g++);
        for (w < g && (w = g), C = 1, D = 1; D <= Sn; D++)
          if (((C <<= 1), (C -= E[D]), C < 0)) return -1;
        if (C > 0 && (0 === t || 1 !== m)) return -1;
        for (k[1] = 0, D = 1; D < Sn; D++) k[D + 1] = k[D] + E[D];
        for (v = 0; v < i; v++) 0 !== n[e + v] && (r[k[n[e + v]]++] = v);
        if (
          (0 === t
            ? ((x = S = r), (f = 20))
            : 1 === t
              ? ((x = $n), (S = jn), (f = 257))
              : ((x = Tn), (S = Mn), (f = 0)),
          (_ = 0),
          (v = 0),
          (D = g),
          (p = o),
          (y = w),
          (b = 0),
          (h = -1),
          (F = 1 << w),
          (d = F - 1),
          (1 === t && F > 852) || (2 === t && F > 592))
        )
          return 1;
        for (;;) {
          ((A = D - b),
            r[v] + 1 < f
              ? ((B = 0), (I = r[v]))
              : r[v] >= f
                ? ((B = S[r[v] - f]), (I = x[r[v] - f]))
                : ((B = 96), (I = 0)),
            (c = 1 << (D - b)),
            (l = 1 << y),
            (g = l));
          do {
            ((l -= c), (s[p + (_ >> b) + l] = (A << 24) | (B << 16) | I));
          } while (0 !== l);
          for (c = 1 << (D - 1); _ & c;) c >>= 1;
          if (
            (0 !== c ? ((_ &= c - 1), (_ += c)) : (_ = 0), v++, 0 === --E[D])
          ) {
            if (D === m) break;
            D = n[e + r[v]];
          }
          if (D > w && (_ & d) !== h) {
            for (
              0 === b && (b = w), p += g, y = D - b, C = 1 << y;
              y + b < m && ((C -= E[y + b]), !(C <= 0));
            )
              (y++, (C <<= 1));
            if (((F += 1 << y), (1 === t && F > 852) || (2 === t && F > 592)))
              return 1;
            ((h = _ & d), (s[h] = (w << 24) | (y << 16) | (p - o)));
          }
        }
        return (
          0 !== _ && (s[p + _] = ((D - b) << 24) | (64 << 16)),
          (a.bits = w),
          0
        );
      };
      const {
          Z_FINISH: Ln,
          Z_BLOCK: Rn,
          Z_TREES: On,
          Z_OK: Vn,
          Z_STREAM_END: Un,
          Z_NEED_DICT: Hn,
          Z_STREAM_ERROR: Nn,
          Z_DATA_ERROR: Gn,
          Z_MEM_ERROR: zn,
          Z_BUF_ERROR: Zn,
          Z_DEFLATED: Wn,
        } = ut,
        Qn = 16180,
        Yn = 16190,
        Jn = 16191,
        Kn = 16192,
        qn = 16194,
        Xn = 16199,
        te = 16200,
        ne = 16206,
        ee = 16209,
        ie = (t) =>
          ((t >>> 24) & 255) +
          ((t >>> 8) & 65280) +
          ((65280 & t) << 8) +
          ((255 & t) << 24);
      function se() {
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
      const oe = (t) => {
          if (!t) return 1;
          const n = t.state;
          return !n || n.strm !== t || n.mode < Qn || n.mode > 16211 ? 1 : 0;
        },
        re = (t) => {
          if (oe(t)) return Nn;
          const n = t.state;
          return (
            (t.total_in = t.total_out = n.total = 0),
            (t.msg = ""),
            n.wrap && (t.adler = 1 & n.wrap),
            (n.mode = Qn),
            (n.last = 0),
            (n.havedict = 0),
            (n.flags = -1),
            (n.dmax = 32768),
            (n.head = null),
            (n.hold = 0),
            (n.bits = 0),
            (n.lencode = n.lendyn = new Int32Array(852)),
            (n.distcode = n.distdyn = new Int32Array(592)),
            (n.sane = 1),
            (n.back = -1),
            Vn
          );
        },
        ae = (t) => {
          if (oe(t)) return Nn;
          const n = t.state;
          return ((n.wsize = 0), (n.whave = 0), (n.wnext = 0), re(t));
        },
        ue = (t, n) => {
          let e;
          if (oe(t)) return Nn;
          const i = t.state;
          return (
            n < 0
              ? ((e = 0), (n = -n))
              : ((e = 5 + (n >> 4)), n < 48 && (n &= 15)),
            n && (n < 8 || n > 15)
              ? Nn
              : (null !== i.window && i.wbits !== n && (i.window = null),
                (i.wrap = e),
                (i.wbits = n),
                ae(t))
          );
        },
        ce = (t, n) => {
          if (!t) return Nn;
          const e = new se();
          ((t.state = e), (e.strm = t), (e.window = null), (e.mode = Qn));
          const i = ue(t, n);
          return (i !== Vn && (t.state = null), i);
        };
      let le,
        he,
        de = !0;
      const pe = (t) => {
          if (de) {
            ((le = new Int32Array(512)), (he = new Int32Array(32)));
            let n = 0;
            for (; n < 144;) t.lens[n++] = 8;
            for (; n < 256;) t.lens[n++] = 9;
            for (; n < 280;) t.lens[n++] = 7;
            for (; n < 288;) t.lens[n++] = 8;
            for (
              Pn(1, t.lens, 0, 288, le, 0, t.work, { bits: 9 }), n = 0;
              n < 32;
            )
              t.lens[n++] = 5;
            (Pn(2, t.lens, 0, 32, he, 0, t.work, { bits: 5 }), (de = !1));
          }
          ((t.lencode = le),
            (t.lenbits = 9),
            (t.distcode = he),
            (t.distbits = 5));
        },
        fe = (t, n, e, i) => {
          let s;
          const o = t.state;
          return (
            null === o.window &&
              ((o.wsize = 1 << o.wbits),
              (o.wnext = 0),
              (o.whave = 0),
              (o.window = new Uint8Array(o.wsize))),
            i >= o.wsize
              ? (o.window.set(n.subarray(e - o.wsize, e), 0),
                (o.wnext = 0),
                (o.whave = o.wsize))
              : ((s = o.wsize - o.wnext),
                s > i && (s = i),
                o.window.set(n.subarray(e - i, e - i + s), o.wnext),
                (i -= s)
                  ? (o.window.set(n.subarray(e - i, e), 0),
                    (o.wnext = i),
                    (o.whave = o.wsize))
                  : ((o.wnext += s),
                    o.wnext === o.wsize && (o.wnext = 0),
                    o.whave < o.wsize && (o.whave += s))),
            0
          );
        };
      var De = {
        inflateReset: ae,
        inflateReset2: ue,
        inflateResetKeep: re,
        inflateInit: (t) => ce(t, 15),
        inflateInit2: ce,
        inflate: (t, n) => {
          let e,
            i,
            s,
            o,
            r,
            a,
            u,
            c,
            l,
            h,
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
          const x = new Uint8Array(4);
          let E, k;
          const A = new Uint8Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]);
          if (oe(t) || !t.output || (!t.input && 0 !== t.avail_in)) return Nn;
          ((e = t.state),
            e.mode === Jn && (e.mode = Kn),
            (r = t.next_out),
            (s = t.output),
            (u = t.avail_out),
            (o = t.next_in),
            (i = t.input),
            (a = t.avail_in),
            (c = e.hold),
            (l = e.bits),
            (h = a),
            (d = u),
            (F = Vn));
          t: for (;;)
            switch (e.mode) {
              case Qn:
                if (0 === e.wrap) {
                  e.mode = Kn;
                  break;
                }
                for (; l < 16;) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                if (2 & e.wrap && 35615 === c) {
                  (0 === e.wbits && (e.wbits = 15),
                    (e.check = 0),
                    (x[0] = 255 & c),
                    (x[1] = (c >>> 8) & 255),
                    (e.check = rt(e.check, x, 2, 0)),
                    (c = 0),
                    (l = 0),
                    (e.mode = 16181));
                  break;
                }
                if (
                  (e.head && (e.head.done = !1),
                  !(1 & e.wrap) || (((255 & c) << 8) + (c >> 8)) % 31)
                ) {
                  ((t.msg = "incorrect header check"), (e.mode = ee));
                  break;
                }
                if ((15 & c) !== Wn) {
                  ((t.msg = "unknown compression method"), (e.mode = ee));
                  break;
                }
                if (
                  ((c >>>= 4),
                  (l -= 4),
                  (C = 8 + (15 & c)),
                  0 === e.wbits && (e.wbits = C),
                  C > 15 || C > e.wbits)
                ) {
                  ((t.msg = "invalid window size"), (e.mode = ee));
                  break;
                }
                ((e.dmax = 1 << e.wbits),
                  (e.flags = 0),
                  (t.adler = e.check = 1),
                  (e.mode = 512 & c ? 16189 : Jn),
                  (c = 0),
                  (l = 0));
                break;
              case 16181:
                for (; l < 16;) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                if (((e.flags = c), (255 & e.flags) !== Wn)) {
                  ((t.msg = "unknown compression method"), (e.mode = ee));
                  break;
                }
                if (57344 & e.flags) {
                  ((t.msg = "unknown header flags set"), (e.mode = ee));
                  break;
                }
                (e.head && (e.head.text = (c >> 8) & 1),
                  512 & e.flags &&
                    4 & e.wrap &&
                    ((x[0] = 255 & c),
                    (x[1] = (c >>> 8) & 255),
                    (e.check = rt(e.check, x, 2, 0))),
                  (c = 0),
                  (l = 0),
                  (e.mode = 16182));
              case 16182:
                for (; l < 32;) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                (e.head && (e.head.time = c),
                  512 & e.flags &&
                    4 & e.wrap &&
                    ((x[0] = 255 & c),
                    (x[1] = (c >>> 8) & 255),
                    (x[2] = (c >>> 16) & 255),
                    (x[3] = (c >>> 24) & 255),
                    (e.check = rt(e.check, x, 4, 0))),
                  (c = 0),
                  (l = 0),
                  (e.mode = 16183));
              case 16183:
                for (; l < 16;) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                (e.head && ((e.head.xflags = 255 & c), (e.head.os = c >> 8)),
                  512 & e.flags &&
                    4 & e.wrap &&
                    ((x[0] = 255 & c),
                    (x[1] = (c >>> 8) & 255),
                    (e.check = rt(e.check, x, 2, 0))),
                  (c = 0),
                  (l = 0),
                  (e.mode = 16184));
              case 16184:
                if (1024 & e.flags) {
                  for (; l < 16;) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  ((e.length = c),
                    e.head && (e.head.extra_len = c),
                    512 & e.flags &&
                      4 & e.wrap &&
                      ((x[0] = 255 & c),
                      (x[1] = (c >>> 8) & 255),
                      (e.check = rt(e.check, x, 2, 0))),
                    (c = 0),
                    (l = 0));
                } else e.head && (e.head.extra = null);
                e.mode = 16185;
              case 16185:
                if (
                  1024 & e.flags &&
                  ((p = e.length),
                  p > a && (p = a),
                  p &&
                    (e.head &&
                      ((C = e.head.extra_len - e.length),
                      e.head.extra ||
                        (e.head.extra = new Uint8Array(e.head.extra_len)),
                      e.head.extra.set(i.subarray(o, o + p), C)),
                    512 & e.flags &&
                      4 & e.wrap &&
                      (e.check = rt(e.check, i, p, o)),
                    (a -= p),
                    (o += p),
                    (e.length -= p)),
                  e.length)
                )
                  break t;
                ((e.length = 0), (e.mode = 16186));
              case 16186:
                if (2048 & e.flags) {
                  if (0 === a) break t;
                  p = 0;
                  do {
                    ((C = i[o + p++]),
                      e.head &&
                        C &&
                        e.length < 65536 &&
                        (e.head.name += String.fromCharCode(C)));
                  } while (C && p < a);
                  if (
                    (512 & e.flags &&
                      4 & e.wrap &&
                      (e.check = rt(e.check, i, p, o)),
                    (a -= p),
                    (o += p),
                    C)
                  )
                    break t;
                } else e.head && (e.head.name = null);
                ((e.length = 0), (e.mode = 16187));
              case 16187:
                if (4096 & e.flags) {
                  if (0 === a) break t;
                  p = 0;
                  do {
                    ((C = i[o + p++]),
                      e.head &&
                        C &&
                        e.length < 65536 &&
                        (e.head.comment += String.fromCharCode(C)));
                  } while (C && p < a);
                  if (
                    (512 & e.flags &&
                      4 & e.wrap &&
                      (e.check = rt(e.check, i, p, o)),
                    (a -= p),
                    (o += p),
                    C)
                  )
                    break t;
                } else e.head && (e.head.comment = null);
                e.mode = 16188;
              case 16188:
                if (512 & e.flags) {
                  for (; l < 16;) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  if (4 & e.wrap && c !== (65535 & e.check)) {
                    ((t.msg = "header crc mismatch"), (e.mode = ee));
                    break;
                  }
                  ((c = 0), (l = 0));
                }
                (e.head &&
                  ((e.head.hcrc = (e.flags >> 9) & 1), (e.head.done = !0)),
                  (t.adler = e.check = 0),
                  (e.mode = Jn));
                break;
              case 16189:
                for (; l < 32;) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                ((t.adler = e.check = ie(c)), (c = 0), (l = 0), (e.mode = Yn));
              case Yn:
                if (0 === e.havedict)
                  return (
                    (t.next_out = r),
                    (t.avail_out = u),
                    (t.next_in = o),
                    (t.avail_in = a),
                    (e.hold = c),
                    (e.bits = l),
                    Hn
                  );
                ((t.adler = e.check = 1), (e.mode = Jn));
              case Jn:
                if (n === Rn || n === On) break t;
              case Kn:
                if (e.last) {
                  ((c >>>= 7 & l), (l -= 7 & l), (e.mode = ne));
                  break;
                }
                for (; l < 3;) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                switch (((e.last = 1 & c), (c >>>= 1), (l -= 1), 3 & c)) {
                  case 0:
                    e.mode = 16193;
                    break;
                  case 1:
                    if ((pe(e), (e.mode = Xn), n === On)) {
                      ((c >>>= 2), (l -= 2));
                      break t;
                    }
                    break;
                  case 2:
                    e.mode = 16196;
                    break;
                  case 3:
                    ((t.msg = "invalid block type"), (e.mode = ee));
                }
                ((c >>>= 2), (l -= 2));
                break;
              case 16193:
                for (c >>>= 7 & l, l -= 7 & l; l < 32;) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                if ((65535 & c) != ((c >>> 16) ^ 65535)) {
                  ((t.msg = "invalid stored block lengths"), (e.mode = ee));
                  break;
                }
                if (
                  ((e.length = 65535 & c),
                  (c = 0),
                  (l = 0),
                  (e.mode = qn),
                  n === On)
                )
                  break t;
              case qn:
                e.mode = 16195;
              case 16195:
                if (((p = e.length), p)) {
                  if ((p > a && (p = a), p > u && (p = u), 0 === p)) break t;
                  (s.set(i.subarray(o, o + p), r),
                    (a -= p),
                    (o += p),
                    (u -= p),
                    (r += p),
                    (e.length -= p));
                  break;
                }
                e.mode = Jn;
                break;
              case 16196:
                for (; l < 14;) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                if (
                  ((e.nlen = 257 + (31 & c)),
                  (c >>>= 5),
                  (l -= 5),
                  (e.ndist = 1 + (31 & c)),
                  (c >>>= 5),
                  (l -= 5),
                  (e.ncode = 4 + (15 & c)),
                  (c >>>= 4),
                  (l -= 4),
                  e.nlen > 286 || e.ndist > 30)
                ) {
                  ((t.msg = "too many length or distance symbols"),
                    (e.mode = ee));
                  break;
                }
                ((e.have = 0), (e.mode = 16197));
              case 16197:
                for (; e.have < e.ncode;) {
                  for (; l < 3;) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  ((e.lens[A[e.have++]] = 7 & c), (c >>>= 3), (l -= 3));
                }
                for (; e.have < 19;) e.lens[A[e.have++]] = 0;
                if (
                  ((e.lencode = e.lendyn),
                  (e.lenbits = 7),
                  (E = { bits: e.lenbits }),
                  (F = Pn(0, e.lens, 0, 19, e.lencode, 0, e.work, E)),
                  (e.lenbits = E.bits),
                  F)
                ) {
                  ((t.msg = "invalid code lengths set"), (e.mode = ee));
                  break;
                }
                ((e.have = 0), (e.mode = 16198));
              case 16198:
                for (; e.have < e.nlen + e.ndist;) {
                  for (
                    ;
                    (_ = e.lencode[c & ((1 << e.lenbits) - 1)]),
                      (v = _ >>> 24),
                      (g = (_ >>> 16) & 255),
                      (m = 65535 & _),
                      !(v <= l);
                  ) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  if (m < 16) ((c >>>= v), (l -= v), (e.lens[e.have++] = m));
                  else {
                    if (16 === m) {
                      for (k = v + 2; l < k;) {
                        if (0 === a) break t;
                        (a--, (c += i[o++] << l), (l += 8));
                      }
                      if (((c >>>= v), (l -= v), 0 === e.have)) {
                        ((t.msg = "invalid bit length repeat"), (e.mode = ee));
                        break;
                      }
                      ((C = e.lens[e.have - 1]),
                        (p = 3 + (3 & c)),
                        (c >>>= 2),
                        (l -= 2));
                    } else if (17 === m) {
                      for (k = v + 3; l < k;) {
                        if (0 === a) break t;
                        (a--, (c += i[o++] << l), (l += 8));
                      }
                      ((c >>>= v),
                        (l -= v),
                        (C = 0),
                        (p = 3 + (7 & c)),
                        (c >>>= 3),
                        (l -= 3));
                    } else {
                      for (k = v + 7; l < k;) {
                        if (0 === a) break t;
                        (a--, (c += i[o++] << l), (l += 8));
                      }
                      ((c >>>= v),
                        (l -= v),
                        (C = 0),
                        (p = 11 + (127 & c)),
                        (c >>>= 7),
                        (l -= 7));
                    }
                    if (e.have + p > e.nlen + e.ndist) {
                      ((t.msg = "invalid bit length repeat"), (e.mode = ee));
                      break;
                    }
                    for (; p--;) e.lens[e.have++] = C;
                  }
                }
                if (e.mode === ee) break;
                if (0 === e.lens[256]) {
                  ((t.msg = "invalid code -- missing end-of-block"),
                    (e.mode = ee));
                  break;
                }
                if (
                  ((e.lenbits = 9),
                  (E = { bits: e.lenbits }),
                  (F = Pn(1, e.lens, 0, e.nlen, e.lencode, 0, e.work, E)),
                  (e.lenbits = E.bits),
                  F)
                ) {
                  ((t.msg = "invalid literal/lengths set"), (e.mode = ee));
                  break;
                }
                if (
                  ((e.distbits = 6),
                  (e.distcode = e.distdyn),
                  (E = { bits: e.distbits }),
                  (F = Pn(
                    2,
                    e.lens,
                    e.nlen,
                    e.ndist,
                    e.distcode,
                    0,
                    e.work,
                    E,
                  )),
                  (e.distbits = E.bits),
                  F)
                ) {
                  ((t.msg = "invalid distances set"), (e.mode = ee));
                  break;
                }
                if (((e.mode = Xn), n === On)) break t;
              case Xn:
                e.mode = te;
              case te:
                if (a >= 6 && u >= 258) {
                  ((t.next_out = r),
                    (t.avail_out = u),
                    (t.next_in = o),
                    (t.avail_in = a),
                    (e.hold = c),
                    (e.bits = l),
                    In(t, d),
                    (r = t.next_out),
                    (s = t.output),
                    (u = t.avail_out),
                    (o = t.next_in),
                    (i = t.input),
                    (a = t.avail_in),
                    (c = e.hold),
                    (l = e.bits),
                    e.mode === Jn && (e.back = -1));
                  break;
                }
                for (
                  e.back = 0;
                  (_ = e.lencode[c & ((1 << e.lenbits) - 1)]),
                    (v = _ >>> 24),
                    (g = (_ >>> 16) & 255),
                    (m = 65535 & _),
                    !(v <= l);
                ) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                if (g && !(240 & g)) {
                  for (
                    w = v, y = g, b = m;
                    (_ = e.lencode[b + ((c & ((1 << (w + y)) - 1)) >> w)]),
                      (v = _ >>> 24),
                      (g = (_ >>> 16) & 255),
                      (m = 65535 & _),
                      !(w + v <= l);
                  ) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  ((c >>>= w), (l -= w), (e.back += w));
                }
                if (
                  ((c >>>= v), (l -= v), (e.back += v), (e.length = m), 0 === g)
                ) {
                  e.mode = 16205;
                  break;
                }
                if (32 & g) {
                  ((e.back = -1), (e.mode = Jn));
                  break;
                }
                if (64 & g) {
                  ((t.msg = "invalid literal/length code"), (e.mode = ee));
                  break;
                }
                ((e.extra = 15 & g), (e.mode = 16201));
              case 16201:
                if (e.extra) {
                  for (k = e.extra; l < k;) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  ((e.length += c & ((1 << e.extra) - 1)),
                    (c >>>= e.extra),
                    (l -= e.extra),
                    (e.back += e.extra));
                }
                ((e.was = e.length), (e.mode = 16202));
              case 16202:
                for (
                  ;
                  (_ = e.distcode[c & ((1 << e.distbits) - 1)]),
                    (v = _ >>> 24),
                    (g = (_ >>> 16) & 255),
                    (m = 65535 & _),
                    !(v <= l);
                ) {
                  if (0 === a) break t;
                  (a--, (c += i[o++] << l), (l += 8));
                }
                if (!(240 & g)) {
                  for (
                    w = v, y = g, b = m;
                    (_ = e.distcode[b + ((c & ((1 << (w + y)) - 1)) >> w)]),
                      (v = _ >>> 24),
                      (g = (_ >>> 16) & 255),
                      (m = 65535 & _),
                      !(w + v <= l);
                  ) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  ((c >>>= w), (l -= w), (e.back += w));
                }
                if (((c >>>= v), (l -= v), (e.back += v), 64 & g)) {
                  ((t.msg = "invalid distance code"), (e.mode = ee));
                  break;
                }
                ((e.offset = m), (e.extra = 15 & g), (e.mode = 16203));
              case 16203:
                if (e.extra) {
                  for (k = e.extra; l < k;) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  ((e.offset += c & ((1 << e.extra) - 1)),
                    (c >>>= e.extra),
                    (l -= e.extra),
                    (e.back += e.extra));
                }
                if (e.offset > e.dmax) {
                  ((t.msg = "invalid distance too far back"), (e.mode = ee));
                  break;
                }
                e.mode = 16204;
              case 16204:
                if (0 === u) break t;
                if (((p = d - u), e.offset > p)) {
                  if (((p = e.offset - p), p > e.whave && e.sane)) {
                    ((t.msg = "invalid distance too far back"), (e.mode = ee));
                    break;
                  }
                  (p > e.wnext
                    ? ((p -= e.wnext), (f = e.wsize - p))
                    : (f = e.wnext - p),
                    p > e.length && (p = e.length),
                    (D = e.window));
                } else ((D = s), (f = r - e.offset), (p = e.length));
                (p > u && (p = u), (u -= p), (e.length -= p));
                do {
                  s[r++] = D[f++];
                } while (--p);
                0 === e.length && (e.mode = te);
                break;
              case 16205:
                if (0 === u) break t;
                ((s[r++] = e.length), u--, (e.mode = te));
                break;
              case ne:
                if (e.wrap) {
                  for (; l < 32;) {
                    if (0 === a) break t;
                    (a--, (c |= i[o++] << l), (l += 8));
                  }
                  if (
                    ((d -= u),
                    (t.total_out += d),
                    (e.total += d),
                    4 & e.wrap &&
                      d &&
                      (t.adler = e.check =
                        e.flags
                          ? rt(e.check, s, d, r - d)
                          : st(e.check, s, d, r - d)),
                    (d = u),
                    4 & e.wrap && (e.flags ? c : ie(c)) !== e.check)
                  ) {
                    ((t.msg = "incorrect data check"), (e.mode = ee));
                    break;
                  }
                  ((c = 0), (l = 0));
                }
                e.mode = 16207;
              case 16207:
                if (e.wrap && e.flags) {
                  for (; l < 32;) {
                    if (0 === a) break t;
                    (a--, (c += i[o++] << l), (l += 8));
                  }
                  if (4 & e.wrap && c !== (4294967295 & e.total)) {
                    ((t.msg = "incorrect length check"), (e.mode = ee));
                    break;
                  }
                  ((c = 0), (l = 0));
                }
                e.mode = 16208;
              case 16208:
                F = Un;
                break t;
              case ee:
                F = Gn;
                break t;
              case 16210:
                return zn;
              default:
                return Nn;
            }
          return (
            (t.next_out = r),
            (t.avail_out = u),
            (t.next_in = o),
            (t.avail_in = a),
            (e.hold = c),
            (e.bits = l),
            (e.wsize ||
              (d !== t.avail_out &&
                e.mode < ee &&
                (e.mode < ne || n !== Ln))) &&
              fe(t, t.output, t.next_out, d - t.avail_out),
            (h -= t.avail_in),
            (d -= t.avail_out),
            (t.total_in += h),
            (t.total_out += d),
            (e.total += d),
            4 & e.wrap &&
              d &&
              (t.adler = e.check =
                e.flags
                  ? rt(e.check, s, d, t.next_out - d)
                  : st(e.check, s, d, t.next_out - d)),
            (t.data_type =
              e.bits +
              (e.last ? 64 : 0) +
              (e.mode === Jn ? 128 : 0) +
              (e.mode === Xn || e.mode === qn ? 256 : 0)),
            ((0 === h && 0 === d) || n === Ln) && F === Vn && (F = Zn),
            F
          );
        },
        inflateEnd: (t) => {
          if (oe(t)) return Nn;
          let n = t.state;
          return (n.window && (n.window = null), (t.state = null), Vn);
        },
        inflateGetHeader: (t, n) => {
          if (oe(t)) return Nn;
          const e = t.state;
          return 2 & e.wrap ? ((e.head = n), (n.done = !1), Vn) : Nn;
        },
        inflateSetDictionary: (t, n) => {
          const e = n.length;
          let i, s, o;
          return oe(t)
            ? Nn
            : ((i = t.state),
              0 !== i.wrap && i.mode !== Yn
                ? Nn
                : i.mode === Yn &&
                    ((s = 1), (s = st(s, n, e, 0)), s !== i.check)
                  ? Gn
                  : ((o = fe(t, n, e, e)),
                    o ? ((i.mode = 16210), zn) : ((i.havedict = 1), Vn)));
        },
        inflateInfo: "pako inflate (from Nodeca project)",
      };
      var ve = function () {
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
      const ge = Object.prototype.toString,
        {
          Z_NO_FLUSH: me,
          Z_FINISH: we,
          Z_OK: ye,
          Z_STREAM_END: be,
          Z_NEED_DICT: Ce,
          Z_STREAM_ERROR: Fe,
          Z_DATA_ERROR: _e,
          Z_MEM_ERROR: xe,
        } = ut;
      function Ee(t) {
        this.options = un(
          { chunkSize: 65536, windowBits: 15, to: "" },
          t || {},
        );
        const n = this.options;
        (n.raw &&
          n.windowBits >= 0 &&
          n.windowBits < 16 &&
          ((n.windowBits = -n.windowBits),
          0 === n.windowBits && (n.windowBits = -15)),
          !(n.windowBits >= 0 && n.windowBits < 16) ||
            (t && t.windowBits) ||
            (n.windowBits += 32),
          n.windowBits > 15 &&
            n.windowBits < 48 &&
            (15 & n.windowBits || (n.windowBits |= 15)),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new Dn()),
          (this.strm.avail_out = 0));
        let e = De.inflateInit2(this.strm, n.windowBits);
        if (e !== ye) throw new Error(at[e]);
        if (
          ((this.header = new ve()),
          De.inflateGetHeader(this.strm, this.header),
          n.dictionary &&
            ("string" == typeof n.dictionary
              ? (n.dictionary = dn(n.dictionary))
              : "[object ArrayBuffer]" === ge.call(n.dictionary) &&
                (n.dictionary = new Uint8Array(n.dictionary)),
            n.raw &&
              ((e = De.inflateSetDictionary(this.strm, n.dictionary)),
              e !== ye)))
        )
          throw new Error(at[e]);
      }
      function ke(t, n) {
        const e = new Ee(n);
        if ((e.push(t), e.err)) throw e.msg || at[e.err];
        return e.result;
      }
      ((Ee.prototype.push = function (t, n) {
        const e = this.strm,
          i = this.options.chunkSize,
          s = this.options.dictionary;
        let o, r, a;
        if (this.ended) return !1;
        for (
          r = n === ~~n ? n : !0 === n ? we : me,
            "[object ArrayBuffer]" === ge.call(t)
              ? (e.input = new Uint8Array(t))
              : (e.input = t),
            e.next_in = 0,
            e.avail_in = e.input.length;
          ;
        ) {
          for (
            0 === e.avail_out &&
              ((e.output = new Uint8Array(i)),
              (e.next_out = 0),
              (e.avail_out = i)),
              o = De.inflate(e, r),
              o === Ce &&
                s &&
                ((o = De.inflateSetDictionary(e, s)),
                o === ye ? (o = De.inflate(e, r)) : o === _e && (o = Ce));
            e.avail_in > 0 &&
            o === be &&
            e.state.wrap > 0 &&
            0 !== t[e.next_in];
          )
            (De.inflateReset(e), (o = De.inflate(e, r)));
          switch (o) {
            case Fe:
            case _e:
            case Ce:
            case xe:
              return (this.onEnd(o), (this.ended = !0), !1);
          }
          if (
            ((a = e.avail_out), e.next_out && (0 === e.avail_out || o === be))
          )
            if ("string" === this.options.to) {
              let t = fn(e.output, e.next_out),
                n = e.next_out - t,
                s = pn(e.output, t);
              ((e.next_out = n),
                (e.avail_out = i - n),
                n && e.output.set(e.output.subarray(t, t + n), 0),
                this.onData(s));
            } else
              this.onData(
                e.output.length === e.next_out
                  ? e.output
                  : e.output.subarray(0, e.next_out),
              );
          if (o !== ye || 0 !== a) {
            if (o === be)
              return (
                (o = De.inflateEnd(this.strm)),
                this.onEnd(o),
                (this.ended = !0),
                !0
              );
            if (0 === e.avail_in) break;
          }
        }
        return !0;
      }),
        (Ee.prototype.onData = function (t) {
          this.chunks.push(t);
        }),
        (Ee.prototype.onEnd = function (t) {
          (t === ye &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = cn(this.chunks))),
            (this.chunks = []),
            (this.err = t),
            (this.msg = this.strm.msg));
        }));
      var Ae = {
        Inflate: Ee,
        inflate: ke,
        inflateRaw: function (t, n) {
          return (((n = n || {}).raw = !0), ke(t, n));
        },
        ungzip: ke,
        constants: ut,
      };
      const { Deflate: Be, deflate: Ie, deflateRaw: Se, gzip: $e } = An,
        { Inflate: je, inflate: Te, inflateRaw: Me, ungzip: Pe } = Ae;
      var Le,
        Re = {
          Deflate: Be,
          deflate: Ie,
          deflateRaw: Se,
          gzip: $e,
          Inflate: je,
          inflate: Te,
          inflateRaw: Me,
          ungzip: Pe,
          constants: ut,
        },
        Oe = function (t, n, e, i) {
          return new (e || (e = Promise))(function (s, o) {
            function r(t) {
              try {
                u(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(i.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var n;
              t.done
                ? s(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(r, a);
            }
            u((i = i.apply(t, n || [])).next());
          });
        };
      function Ve(t) {
        return (
          t.hostname.includes(".hbomax.") && t.pathname.includes("video/watch")
        );
      }
      function Ue(t) {
        return (
          t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.")
        );
      }
      function He(t = new URL(window.location.href)) {
        return "tv.youtube.com" === t.hostname;
      }
      function Ne(t) {
        return (
          t.hostname.includes(".netflix.") && t.pathname.includes("/watch")
        );
      }
      function Ge(t) {
        return "/live" === t.replace(/\/+$/, "");
      }
      function ze(t) {
        return function () {
          return new Promise((n) => {
            setTimeout(() => {
              n();
            }, t);
          });
        };
      }
      function Ze(t, n, e = 250) {
        return function () {
          const i = new Date().getTime(),
            s = function () {
              return Oe(this, void 0, void 0, function* () {
                return (yield t())
                  ? Promise.resolve()
                  : null !== n && new Date().getTime() - i > n
                    ? Promise.reject(new Error("delayUntil timed out: " + t))
                    : ze(e)().then(s);
              });
            };
          return s();
        };
      }
      function We(t, n, e) {
        (t.push(n), t.length > e && t.splice(0, t.length - e));
      }
      function Qe(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      function Ye(t) {
        const n = document.createElement("script");
        (n.setAttribute("tpInjected", ""),
          (n.src = t),
          (document.head || document.documentElement).appendChild(n),
          n.remove());
      }
      function Je(t) {
        return Oe(this, void 0, void 0, function* () {
          if (
            (t.headers.get("content-type") || "").includes("application/json")
          )
            try {
              return yield t.json();
            } catch (t) {}
          const n = yield t.text();
          if (!n) return n;
          try {
            return JSON.parse(n);
          } catch (t) {
            return n;
          }
        });
      }
      function Ke(n, e, i, s, o, r, a = !1) {
        return Oe(this, void 0, void 0, function* () {
          const c = `${t}/${n}`.replace(/([^:]\/)\/+/g, "$1"),
            l = i && !!o,
            h = i && !o,
            d = Object.assign({ Accept: "application/json" }, r || {}),
            p = (t) =>
              ("undefined" != typeof FormData && t instanceof FormData) ||
              ("undefined" != typeof Blob && t instanceof Blob) ||
              ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer);
          if (
            ("GET" === e ||
              null == s ||
              p(s) ||
              (d["Content-Type"] = d["Content-Type"] || "application/json"),
            l && (d.Authorization = `Bearer ${o}`),
            h && !d["x-tp-csrf"])
          ) {
            const t = yield u(a);
            t && (d["x-tp-csrf"] = t);
          }
          const f = {
              method: e,
              headers: d,
              credentials: h ? "include" : "omit",
              body:
                "GET" !== e && null != s
                  ? p(s)
                    ? s
                    : JSON.stringify(s)
                  : void 0,
            },
            D = yield fetch(c, f);
          if (0 === D.status || (D.status >= 200 && D.status < 400))
            return yield Je(D);
          const v = yield Je(D),
            g = new Error("string" == typeof v ? v : JSON.stringify(v));
          throw ((g.status = D.status), g);
        });
      }
      function qe(t) {
        const n = new TextEncoder().encode(t),
          e = Re.gzip(n);
        let i = "";
        for (let t = 0; t < e.length; t++) i += String.fromCharCode(e[t]);
        return btoa(i);
      }
      !(function (t) {
        ((t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share"),
          (t.PARTY_SCHEDULE = "party_schedule"));
      })(Le || (Le = {}));
      const Xe = "Service_Background",
        ti = "Popup",
        ni = "Content_Script",
        ei = "Page_Controls";
      class ii {
        constructor(t, n, e, i, s, o = []) {
          ((this.requiredPermissions = t),
            (this.serverName = e),
            (this.name = i),
            (this.contentScripts = n),
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
          return `${n}/join/${t}`;
        }
      }
      var si;
      !(function (t) {
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
      })(si || (si = {}));
      const oi = new (class extends ii {
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
        si.APPLE_TV,
        !1,
        ["browse_scripts/appletv/appletv_browse_bundled.js"],
      );
      Object.freeze(oi);
      const ri = oi;
      const ai = new (class extends ii {
        isValidUrl(t) {
          return Ue(t);
        }
        isBrowsing(t) {
          return Ue(t) || t.pathname.includes("amazon.");
        }
        getVideoId(t) {
          const n = t.pathname
            .split("ref")[0]
            .match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
          return null != n && n.length > 0 ? n[1] : void 0;
        }
      })(
        [],
        ["content_scripts/amazon/amazon_content_bundled.js"],
        "amazon",
        si.AMAZON,
        !1,
        ["browse_scripts/amazon/amazon_browse_bundled.js"],
      );
      Object.freeze(ai);
      const ui = ai;
      const ci = new (class extends ii {
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
              ].some((n) => t.pathname.includes(n))
            );
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".canalplus.");
        }
        getVideoId(t) {
          const n = t.pathname.split("/").filter(Boolean);
          return "live" === n[0] && n.length >= 2 ? n[1] : n.join("/");
        }
      })(
        [],
        ["content_scripts/canalplus/canalplus_content_bundled.js"],
        "canalplus",
        si.CANALPLUS,
        !1,
        ["browse_scripts/canalplus/canalplus_browse_bundled.js"],
      );
      Object.freeze(ci);
      const li = ci;
      const hi = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes(".crave."),
              e = t.pathname.includes("/play/") || t.pathname.includes("/live");
            return n && e;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".crave.");
        }
        getVideoId(t) {
          if (t.pathname.includes("/live")) {
            const n = t.searchParams.get("channel");
            return n ? `live/${n}` : "live";
          }
          return t.pathname.split("/").slice(2).join("/");
        }
      })(
        [],
        ["content_scripts/crave/crave_content_bundled.js"],
        "crave",
        si.CRAVE,
        !1,
        ["browse_scripts/crave/crave_browse_bundled.js"],
      );
      Object.freeze(hi);
      const di = hi;
      const pi = new (class extends ii {
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
          const n = t.pathname.match(/watch\/(.*)\//);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })(
        [],
        ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"],
        "crunchyroll",
        si.CRUNCHYROLL,
        !1,
        ["browse_scripts/crunchyroll/crunchyroll_browse_bundled.js"],
      );
      Object.freeze(pi);
      const fi = pi;
      const Di = new (class extends ii {
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
          const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })(
        [],
        ["content_scripts/disney/disney_content_bundled.js"],
        "disney",
        si.DISNEY_PLUS,
        !1,
        ["browse_scripts/disney/disney_browse_bundled.js"],
      );
      Object.freeze(Di);
      const vi = Di;
      const gi = new (class extends ii {
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
          const n = t.pathname.split("/");
          return n && n.length > 1 ? n[n.length - 2] : void 0;
        }
      })(
        [],
        ["content_scripts/disneymena/disneymena_content_bundled.js"],
        "disneymena",
        si.DISNEY_PLUS_MENA,
        !1,
      );
      Object.freeze(gi);
      const mi = gi;
      const wi = new (class extends ii {
        isBrowsing(t) {
          return t.hostname.includes(".espn.");
        }
        isValidUrl(t) {
          return (function (t) {
            if (!t.hostname.includes(".espn.")) return !1;
            const n = t.pathname;
            return n.includes("/player") || n.includes("/watch/");
          })(t);
        }
        getVideoId(t) {
          const n = t.pathname,
            e = n.match(/\/watch\/player\/_\/id\/([^/?#]+)/);
          if (null == e ? void 0 : e[1]) return decodeURIComponent(e[1]);
          const i = ["contentId", "mediaId", "id"];
          for (const n of i) {
            const e = t.searchParams.get(n);
            if (!e) continue;
            const i = decodeURIComponent(e);
            if (
              /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(
                i,
              ) ||
              /^\d{8,}$/.test(i)
            )
              return i;
          }
          const s = (n + t.hash).match(
            /\b([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|\d{8,})\b/,
          );
          return null == s ? void 0 : s[1];
        }
      })(
        [],
        ["content_scripts/espn/espn_content_bundled.js"],
        "espn",
        si.ESPN,
        !1,
        ["browse_scripts/espn/espn_browse_bundled.js"],
      );
      Object.freeze(wi);
      const yi = wi;
      const bi = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("fancode.com"),
              e =
                t.searchParams.get(d.MATCH_INFO_QUERY_PARAM.tag) ===
                d.MATCH_INFO_QUERY_PARAM.value,
              i = t.pathname.includes(d.HIGHLIGHTS),
              s = d.LIVE_MATCH_PAGE_TYPES.some((n) => t.pathname.includes(n));
            return n && !e && (i || s);
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
        si.FANCODE,
        !1,
        ["browse_scripts/fancode/fancode_browse_bundled.js"],
      );
      Object.freeze(bi);
      const Ci = bi;
      var Fi;
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
      })(Fi || (Fi = {}));
      const _i = new (class extends ii {
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
          const n = t.pathname,
            e = n.indexOf("/watch/");
          if (-1 !== e) return n.substring(e + 7);
        }
      })(
        [],
        ["content_scripts/foxone/foxone_content_bundled.js"],
        Fi.FOX_ONE,
        si.FOX_ONE,
        !1,
        ["browse_scripts/foxone/foxone_browse_bundled.js"],
      );
      Object.freeze(_i);
      const xi = _i;
      const Ei = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("fubo.tv"),
              e = t.pathname.includes("watch");
            return n && e;
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
        si.FUBO,
        !1,
        ["browse_scripts/fubo/fubo_browse_bundled.js"],
      );
      Object.freeze(Ei);
      const ki = Ei;
      const Ai = new (class extends ii {
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
        si.FUNIMATION,
        !1,
        ["browse_scripts/funimation/funimation_browse_bundled.js"],
      );
      Object.freeze(Ai);
      const Bi = Ai;
      function Ii(t) {
        const n = t.match(/\/video\/watch\/([^/?#]+)/i);
        return n ? n[1] : void 0;
      }
      const Si = new (class extends ii {
        isValidUrl(t) {
          return Ve(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("play.hbomax.");
        }
        getVideoId(t) {
          return Ii(t.pathname);
        }
      })(
        [],
        ["content_scripts/hbo_max/hbo_max_content_bundled.js"],
        "hbomax",
        si.HBO_MAX,
        !1,
        ["browse_scripts/hbo_max/hbo_max_browse_bundled.js"],
      );
      Object.freeze(Si);
      const $i = Si;
      const ji = new (class extends ii {
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
        si.HOTSTAR,
        !1,
        ["browse_scripts/hotstar/hotstar_browse_bundled.js"],
      );
      Object.freeze(ji);
      const Ti = ji;
      const Mi = new (class extends ii {
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
          const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })(
        [],
        ["content_scripts/hulu/hulu_content_bundled.js"],
        "hulu",
        si.HULU,
        !1,
        ["browse_scripts/hulu/hulu_browse_bundled.js"],
      );
      Object.freeze(Mi);
      const Pi = Mi;
      const Li = new (class extends ii {
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
          const n = t.pathname.split("watch/");
          if (n.length > 1 && n[1].length > 0) return n[1];
        }
      })(
        [],
        ["content_scripts/hulujp/hulujp_content_bundled.js"],
        "hulujp",
        si.HULU_JP,
        !1,
        ["browse_scripts/hulujp/hulujp_browse_bundled.js"],
      );
      Object.freeze(Li);
      const Ri = Li;
      const Oi = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes(".jiocinema."),
              e =
                t.pathname.includes("/watch") &&
                t.pathname.includes("/movies/"),
              i = t.pathname.includes("/sports/"),
              s = t.pathname.includes("/tv-shows/"),
              o = t.pathname.includes("/news/");
            return n && (e || i || s || o);
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
        si.JIO_CINEMA,
        !1,
        ["browse_scripts/jio_cinema/jio_cinema_browse_bundled.js"],
      );
      Object.freeze(Oi);
      const Vi = Oi;
      const Ui = new (class extends ii {
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
          return Ii(t.pathname);
        }
      })(
        [],
        ["content_scripts/max/max_content_bundled.js"],
        "max",
        si.MAX,
        !1,
        ["browse_scripts/max/max_browse_bundled.js"],
      );
      Object.freeze(Ui);
      const Hi = Ui;
      const Ni = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("mubi."),
              e = t.pathname.includes("player");
            return n && e;
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
        si.MUBI,
        !1,
        ["browse_scripts/mubi/mubi_browse_bundled.js"],
      );
      Object.freeze(Ni);
      const Gi = Ni;
      const zi = new (class extends ii {
        isValidUrl(t) {
          return Ne(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".netflix.");
        }
        getVideoId(t) {
          const n = t.pathname.match(/^.*\/([0-9]+)\??.*/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })(
        [],
        ["content_scripts/netflix/netflix_content_bundled.js"],
        "netflix",
        si.NETFLIX,
        !1,
        ["browse_scripts/netflix/netflix_browse_bundled.js"],
      );
      Object.freeze(zi);
      const Zi = zi;
      const Wi = new (class extends ii {
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
        si.PARAMOUNT,
        !1,
        ["browse_scripts/paramount/paramount_browse_bundled.js"],
      );
      Object.freeze(Wi);
      const Qi = Wi;
      const Yi = new (class extends ii {
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
          const n = t.pathname.match(
            /\/watch\/playback\/(?:vod|event|preview|clip)\/([^/?#]+)\/([^/?#]+)/,
          );
          if (n) return `${n[1]}/${n[2]}`;
          const e = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })(
        [],
        ["content_scripts/peacock/peacock_content_bundled.js"],
        "peacock",
        si.PEACOCK,
        !1,
        ["browse_scripts/peacock/peacock_browse_bundled.js"],
      );
      Object.freeze(Yi);
      const Ji = Yi,
        Ki = /(?:^|\/)watch\/live-tv(?:\/|$)/i,
        qi = "us";
      const Xi = new (class extends ii {
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
          const n = t.pathname.replace(/^\/+|\/+$/g, "");
          if (this.B(n)) {
            const n = this.getLiveOriginId(t);
            if (!n) return;
            return this.buildLiveVideoId(n, this.getLocale(t));
          }
          if (this.I(n) || this.S(n) || this.$(n)) return `${n}#open`;
        }
        getWatchUrl(t) {
          const n = this.getLiveOriginIdFromVideoId(t);
          if (n)
            return `https://www.pluto.tv/${this.getLocaleFromVideoId(t)}/watch/live-tv/#${n}`;
          return `https://www.pluto.tv/${t.replace(/^\/+|\/+$/g, "").replace(/#open$/i, "")}#open`;
        }
        isMoviePath(t) {
          return this.I(t.pathname.replace(/^\/+|\/+$/g, ""));
        }
        isShowEpisodePath(t) {
          return this.S(t.pathname.replace(/^\/+|\/+$/g, ""));
        }
        isLiveTvPath(t) {
          return this.B(t.pathname.replace(/^\/+|\/+$/g, ""));
        }
        getLocale(t) {
          return this.T(t.pathname.replace(/^\/+|\/+$/g, ""));
        }
        getLiveOriginId(t) {
          const n = t.hash.replace(/^#/, "").trim();
          if (n && "open" !== n.toLowerCase()) return n;
        }
        buildLiveVideoId(t, n = qi) {
          return `${n || qi}/watch/live-tv/#${t}`;
        }
        getLiveOriginIdFromVideoId(t) {
          var n;
          const e = t.replace(/^\/+/, "");
          if (/#/.test(e) && /watch\/live-tv/i.test(e)) {
            const t =
              null === (n = e.split("#").pop()) || void 0 === n
                ? void 0
                : n.trim();
            if (t && "open" !== t.toLowerCase()) return t;
          }
          const i = e.match(/live-tv\/([^/#]+)/i);
          return (null == i ? void 0 : i[1])
            ? i[1]
            : /^\d+$/.test(e)
              ? e
              : void 0;
        }
        getLocaleFromVideoId(t) {
          return this.T(t.replace(/^\/+|\/+$/g, ""));
        }
        T(t) {
          const n = t.split("/")[0];
          return n && /^[a-z]{2}(?:-[a-z]{2})?$/i.test(n) && n.length <= 5
            ? n.toLowerCase()
            : qi;
        }
        B(t) {
          return Ki.test(t);
        }
        $(t) {
          return /(^|\/)on-demand\//.test(t);
        }
        I(t) {
          return /(^|\/)movies\/[^/]+/.test(t);
        }
        S(t) {
          return /(^|\/)shows\/[^/]+\/episode\/[^/]+/.test(t);
        }
      })(
        [],
        ["content_scripts/plutotv/plutotv_content_bundled.js"],
        "plutotv",
        si.PLUTO_TV,
        !1,
        ["browse_scripts/plutotv/plutotv_browse_bundled.js"],
      );
      Object.freeze(Xi);
      const ts = Xi;
      const ns = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("shahid.mbc.net"),
              e = t.pathname.includes(g.VIDEO_TYPES.SHOW),
              i = t.pathname.includes(g.VIDEO_TYPES.LIVE_TV);
            return n && (e || i);
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
        si.SHAHID,
        !1,
        ["browse_scripts/shahid/shahid_browse_bundled.js"],
      );
      Object.freeze(ns);
      const es = ns;
      const is = new (class extends ii {
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
        Fi.SHUDDER,
        si.SHUDDER,
        !1,
        ["browse_scripts/shudder/shudder_browse_bundled.js"],
      );
      Object.freeze(is);
      const ss = is;
      const os = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("watch.sling.com"),
              e = t.pathname.split("/");
            return n && e.length > 0 && "watch" === e[e.length - 1];
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
        si.SLING,
        !1,
        ["browse_scripts/sling/sling_browse_bundled.js"],
      );
      Object.freeze(os);
      const rs = os;
      const as = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("sonyliv.com"),
              e = "true" === t.searchParams.get("watch");
            return n && e;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".sonyliv.com");
        }
        getVideoId(t) {
          let n = t.pathname.substring(1);
          return (t.search && (n += t.search), n);
        }
      })(
        [],
        ["content_scripts/sonyliv/sonyliv_content_bundled.js"],
        "sonyliv",
        si.SONY_LIV,
        !1,
        ["browse_scripts/sonyliv/sonyliv_browse_bundled.js"],
      );
      Object.freeze(as);
      const us = as;
      const cs = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("spotify.com");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".spotify.com");
        }
        getVideoId(t) {
          const n = t.pathname.replace(/^\//, "");
          if (n.startsWith("track/")) {
            const t = n.split("/")[1];
            return t ? `track/${t}` : void 0;
          }
          const e = t.searchParams.get("trackId");
          if (e) return `track/${e}`;
          return n + t.search || void 0;
        }
      })(
        [],
        ["content_scripts/spotify/spotify_content_bundled.js"],
        "spotify",
        si.SPOTIFY,
        !1,
      );
      Object.freeze(cs);
      const ls = cs;
      const hs = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n =
                t.hostname.includes("app.stan.com.au") ||
                t.hostname.includes("play.stan.com.au"),
              e = t.pathname.split("/");
            return n && 4 === e.length && "play" === e[3];
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
        si.STAN,
        !1,
        ["browse_scripts/stan/stan_browse_bundled.js"],
      );
      Object.freeze(hs);
      const ds = hs;
      const ps = new (class extends ii {
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
          const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })(
        [],
        ["content_scripts/starplus/starplus_content_bundled.js"],
        "starplus",
        si.STAR_PLUS,
        !1,
      );
      Object.freeze(ps);
      const fs = ps;
      const Ds = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = "tsn.ca" === t.hostname || t.hostname.endsWith(".tsn.ca"),
              e = t.pathname.split("/").filter(Boolean),
              i = e.indexOf("video"),
              s = Ge(t.pathname),
              o = t.pathname.includes("/event/"),
              r = -1 !== i,
              a = -1 !== i && e.length > i + 1;
            return (
              console.log("checking tsn party url", {
                isTsn: n,
                hasVideoSection: r,
                hasExtraPathAfterVideo: a,
                isLive: s,
                isEvent: o,
              }),
              n && (s || o || (r && a))
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
        si.TSN_PLUS,
        !1,
        ["browse_scripts/tsnplus/tsnplus_browse_bundled.js"],
      );
      Object.freeze(Ds);
      const vs = Ds;
      const gs = new (class extends ii {
        isBrowsing(t) {
          return t.hostname.includes("tubitv.com");
        }
        isValidUrl(t) {
          return (function (t) {
            const n = t.pathname.includes("live"),
              e =
                ["tv-shows", "movies"].some((n) => t.pathname.includes(n)) &&
                t.pathname.split("/").length > 2;
            return t.hostname.includes("tubitv.com") && (n || e);
          })(t);
        }
        getVideoId(t) {
          return t.pathname.split("/").slice(0, 3).join("/");
        }
      })(
        [],
        ["content_scripts/tubitv/tubitv_content_bundled.js"],
        "tubitv",
        si.TUBI_TV,
        !1,
        ["browse_scripts/tubitv/tubitv_browse_bundled.js"],
      );
      Object.freeze(gs);
      const ms = gs;
      const ws = new (class extends ii {
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
          const n = t.pathname.split("/").filter(Boolean);
          return "play" === n[0] && n.length >= 3
            ? `${n[1]}/${n[2]}`
            : "live" === n[0] && n.length >= 2
              ? n[1]
              : void 0;
        }
      })(
        [],
        ["content_scripts/unext/unext_content_bundled.js"],
        "unext",
        si.UNEXT,
        !1,
        ["browse_scripts/unext/unext_browse_bundled.js"],
      );
      Object.freeze(ws);
      const ys = ws;
      const bs = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes(".vidio."),
              e =
                t.pathname.includes("/watch/") || t.pathname.includes("/live/"),
              i = t.pathname.includes("shorts");
            return n && e && !i;
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
        si.VIDIO,
        !1,
        ["browse_scripts/vidio/vidio_browse_bundled.js"],
      );
      Object.freeze(bs);
      const Cs = bs;
      const Fs = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("viki.com"),
              e = t.pathname.includes("videos");
            return n && e;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".viki.com");
        }
        getVideoId(t) {
          const n = t.pathname.split("/");
          if (3 === n.length && "videos" === n[1]) return n[2];
        }
      })(
        [],
        ["content_scripts/viki/viki_content_bundled.js"],
        "viki",
        si.VIKI,
        !1,
        ["browse_scripts/viki/viki_browse_bundled.js"],
      );
      Object.freeze(Fs);
      const _s = Fs;
      const xs = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("viu.com"),
              e = t.pathname.includes(w.VIDEO_TYPES.VIDEO),
              i = t.pathname.includes(w.VIDEO_TYPES.LIVE);
            return n && (e || i);
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".viu.");
        }
        getVideoId(t) {
          var n, e, i;
          return `${null === (n = t.pathname.split("/")) || void 0 === n ? void 0 : n[4]}/${null === (e = t.pathname.split("/")) || void 0 === e ? void 0 : e[5]}/${null === (i = t.pathname.split("/")) || void 0 === i ? void 0 : i[6]}${t.search}`;
        }
      })(
        [],
        ["content_scripts/viu/viu_content_bundled.js"],
        "viu",
        si.VIU,
        !1,
        ["browse_scripts/viu/viu_browse_bundled.js"],
      );
      Object.freeze(xs);
      const Es = xs;
      const ks = new (class extends ii {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("vix.com"),
              e = Object.values(D.PATH_TYPES).some((n) =>
                t.pathname.includes(n),
              );
            return n && e;
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
        si.VIX,
        !1,
        ["browse_scripts/vix/vix_browse_bundled.js"],
      );
      Object.freeze(ks);
      const As = ks;
      const Bs = new (class extends ii {
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
        si.WILLOW,
        !1,
        ["browse_scripts/willow/willow_browse_bundled.js"],
      );
      Object.freeze(Bs);
      const Is = Bs;
      const Ss = new (class extends ii {
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
              !(He(t) && !t.pathname.includes("/watch")) &&
              t.hostname.includes(".youtube.")
            );
          })(t);
        }
        getVideoId(t) {
          let n;
          const { pathname: e, searchParams: i, hostname: s } = t;
          if (
            (function (t = new URL(window.location.href)) {
              return He(t) && t.pathname.includes("/watch");
            })(t)
          ) {
            const t = e.split("/").filter(Boolean);
            "watch" === t[0] && t[1] && (n = t[1]);
          } else if (e.startsWith("/watch")) n = i.get("v") || void 0;
          else if (e.startsWith("/shorts/")) {
            n = e.split("/").filter(Boolean)[1];
          }
          if (
            !n &&
            (t.href.includes("/watch") || t.href.includes("/shorts/"))
          ) {
            const e =
              /(youtu.*be.*)\/(watch.*?v=|embed\/|v|shorts\/|shorts|)(.*?((?=[&#?])|$))/gm.exec(
                t.href,
              );
            n = null != e && e.length > 3 && e[3] ? e[3] : void 0;
          }
          if (!n) {
            const t = e.split("/").filter(Boolean),
              i = t[t.length - 1];
            e.startsWith("/embed/")
              ? (n = "embed" !== i ? i : void 0)
              : e.startsWith("/v/")
                ? (n = "v" !== i ? i : void 0)
                : "youtu.be" === s && (n = i);
          }
          return n || "browsing";
        }
      })(
        [],
        ["content_scripts/youtube/youtube_content_bundled.js"],
        "youtube",
        si.YOUTUBE,
        !1,
        [],
      );
      Object.freeze(Ss);
      const $s = Ss;
      const js = new (class extends ii {
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
          const n = t.pathname.substring(1).split("global/");
          return n[n.length - 1];
        }
      })(
        [],
        ["content_scripts/zee5/zee5_content_bundled.js"],
        "zee5",
        si.ZEE5,
        !1,
        ["browse_scripts/zee5/zee5_browse_bundled.js"],
      );
      Object.freeze(js);
      const Ts = js;
      const Ms = new (class extends ii {
        M(t) {
          return "nba.com" === t || t.endsWith(".nba.com");
        }
        P(t) {
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
          return this.M(t.hostname) && this.P(t.pathname.toLowerCase());
        }
        getVideoId(t) {
          const n = t.pathname.replace(/\/+$/, "").replace(/^\/+/, ""),
            e = n.toLowerCase();
          if (e.startsWith("game/") || e.startsWith("watch/")) return n;
        }
      })(
        [],
        ["content_scripts/leaguepass/leaguepass_content_bundled.js"],
        "leaguepass",
        si.LEAGUE_PASS,
        !1,
        ["browse_scripts/leaguepass/leaguepass_browse_bundled.js"],
      );
      Object.freeze(Ms);
      const Ps = Ms;
      const Ls = new (class extends ii {
        isBrowsing(t) {
          return t.hostname.includes(".dazn.");
        }
        isValidUrl(t) {
          return t.hostname.includes("dazn.com");
        }
        getVideoId(t) {
          const n = t.pathname.split("/").filter(Boolean);
          return (/^[a-z]{2}-[A-Z]{2}$/.test(n[0]) && n.shift(), n.join("/"));
        }
      })(
        [],
        ["content_scripts/dazn/dazn_content_bundled.js"],
        "dazn",
        si.DAZN,
        !1,
        ["browse_scripts/dazn/dazn_browse_bundled.js"],
      );
      Object.freeze(Ls);
      const Rs = Ls;
      function Os(t) {
        return (
          t.hostname.includes("miguvideo.com") &&
          ("/" === t.pathname || "" === t.pathname)
        );
      }
      const Vs = new (class extends ii {
        isBrowsing(t) {
          return !Os(t) && t.hostname.includes(".miguvideo.");
        }
        isValidUrl(t) {
          return (
            !(
              !t.hostname.includes("miguvideo.com") ||
              !t.pathname.startsWith("/p/")
            ) || Os(t)
          );
        }
        getVideoId(t) {
          if (Os(t)) return "live/home";
          const n = t.pathname,
            e = n.indexOf("/p/");
          return -1 !== e ? n.substring(e + 3) : void 0;
        }
      })(
        [],
        ["content_scripts/migu/migu_content_bundled.js"],
        "migu",
        si.MIGU,
        !1,
        ["browse_scripts/migu/migu_browse_bundled.js"],
      );
      Object.freeze(Vs);
      const Us = Vs;
      const Hs = new (class extends ii {
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
          const n = t.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
          if (n.startsWith("detail/")) return n;
        }
      })(
        [],
        ["content_scripts/f1_tv/f1_tv_content_bundled.js"],
        Fi.F1_TV,
        si.F1_TV,
        !1,
        ["browse_scripts/f1_tv/f1_tv_browse_bundled.js"],
      );
      Object.freeze(Hs);
      const Ns = [
          Zi,
          Pi,
          vi,
          $i,
          ui,
          $s,
          fi,
          yi,
          Qi,
          Ti,
          Ji,
          fs,
          Hi,
          Bi,
          ri,
          ts,
          Vi,
          ms,
          Gi,
          ds,
          di,
          rs,
          mi,
          ki,
          _s,
          ls,
          Ri,
          us,
          ys,
          Is,
          Ts,
          Ci,
          li,
          es,
          Es,
          Cs,
          ss,
          xi,
          vs,
          Ps,
          Rs,
          As,
          Us,
          Hs,
        ],
        Gs = Object.fromEntries(Ns.map((t) => [t.name, t]));
      function zs(t) {
        return Gs[t];
      }
      class Zs {
        constructor(t, n) {
          ((this.isBrowsing = !1),
            (this.needsCSPBlock = !1),
            (this.id = n),
            this.videoId,
            (this.url = t));
          const e = [ri];
          for (const n of Ns) {
            if (n.isValidUrl(this.url)) {
              ((this.streamingService = n),
                (this.serviceName = n.name),
                (this.videoId = n.getVideoId(t)),
                e.includes(n) && (this.needsCSPBlock = !0));
              break;
            }
            if (n.isBrowsing(this.url)) {
              ((this.isBrowsing = !0),
                (this.streamingService = n),
                (this.serviceName = n.name),
                e.includes(n) && (this.needsCSPBlock = !0));
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
      var Ws, Qs, Ys;
      const Js = "undefined" != typeof chrome ? chrome.runtime : void 0,
        Ks =
          null !== (Ws = null == Js ? void 0 : Js.id) && void 0 !== Ws
            ? Ws
            : "",
        qs =
          null !==
            (Ys =
              null === (Qs = null == Js ? void 0 : Js.getManifest()) ||
              void 0 === Qs
                ? void 0
                : Qs.version) && void 0 !== Ys
            ? Ys
            : "",
        Xs = "reactionContainerOpen",
        to = "https://sessions.teleparty.com",
        no = `${n}/sidebar`,
        eo = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        io = "recentlyUsedEmojiMap",
        so = "redirectDataMap",
        oo = [
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
        ro =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var ao = console.log.bind(self.console),
        uo = function (t, n, e, i) {
          return new (e || (e = Promise))(function (s, o) {
            function r(t) {
              try {
                u(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(i.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var n;
              t.done
                ? s(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(r, a);
            }
            u((i = i.apply(t, n || [])).next());
          });
        };
      const co = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, n, e = 2e4) {
          return uo(this, void 0, void 0, function* () {
            return new Promise((i, s) => {
              const o = setTimeout(() => {
                (console.log("send timeout"), s("Message Timeout"));
              }, e);
              try {
                chrome.tabs.sendMessage(n, t, (n) => {
                  (chrome.runtime.lastError &&
                    ao(chrome.runtime.lastError.message + JSON.stringify(t)),
                    clearTimeout(o),
                    i(n));
                });
              } catch (t) {
                (clearTimeout(o), s(t));
              }
            });
          });
        }
        L(t, n) {
          return uo(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              let s = null;
              n &&
                (s = setTimeout(() => {
                  i({ error: "Send Message Timeout" });
                }, n));
              try {
                chrome.runtime.sendMessage(Ks, t, (n) => {
                  (chrome.runtime.lastError &&
                    console.log(
                      chrome.runtime.lastError.message + JSON.stringify(t),
                    ),
                    s && clearTimeout(s),
                    e(n));
                });
              } catch (t) {
                (s && clearTimeout(s), i(t));
              }
            });
          });
        }
      })();
      class lo {
        constructor(t, n, e) {
          ((this.sender = t), (this.target = n), (this.type = e));
        }
      }
      class ho extends lo {
        constructor(t, n, e) {
          (super(t, n, e), (this.type = e));
        }
      }
      var po, fo;
      (!(function (t) {
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
      })(po || (po = {})),
        (function (t) {
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
        })(fo || (fo = {})));
      class Do extends lo {
        constructor(t, n, e) {
          (super(t, n, e), (this.type = e));
        }
      }
      class vo extends Do {
        constructor(t, n, e) {
          (super(t, n, fo.CREATE_SESSION), (this.data = e));
        }
      }
      var go,
        mo = function (t, n, e, i) {
          return new (e || (e = Promise))(function (s, o) {
            function r(t) {
              try {
                u(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(i.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var n;
              t.done
                ? s(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(r, a);
            }
            u((i = i.apply(t, n || [])).next());
          });
        };
      function wo(t, n, e) {
        return mo(this, void 0, void 0, function* () {
          const i = yield co.L(new ho(ti, Xe, po.GET_TAB_ID)),
            s = new Zs(new URL(window.location.href), i),
            o = new vo(ti, Xe, {
              createSettings: { controlLock: t, reactionsDisabled: e },
              streamingService: s.streamingService,
              tabId: s.id,
              isNative: n,
            });
          return co.L(o);
        });
      }
      !(function (t) {
        ((t.POSTHOG = "posthog"), (t.METIS = "metis"), (t.BOTH = "both"));
      })(go || (go = {}));
      class yo extends ho {
        constructor(t, n, e, i = go.BOTH) {
          (super(t, n, po.LOG_EVENT),
            (this.eventPipelineTarget = go.BOTH),
            (this.data = e),
            (this.sender = t),
            (this.target = n),
            (this.eventPipelineTarget = i));
        }
      }
      const bo =
          "Failed to read chrome storage. Please refresh the page and try again",
        Co =
          "Failed to connect to Script. Please refresh the page and try again";
      class Fo extends ho {
        constructor(t, n, e) {
          (super(t, n, po.GET_DATA), (this.data = e));
        }
      }
      class _o extends ho {
        constructor(t, n, e) {
          (super(t, n, po.SET_DATA), (this.data = e));
        }
      }
      var xo = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class Eo {
        constructor() {
          (this.resetTasks(),
            (this.R = []),
            (this.O = 0),
            (this.V = Promise.resolve()),
            (this.U = !0));
        }
        createInstance() {
          return new Eo();
        }
        pushTask(t, n) {
          if (!this.U) return;
          const e = { action: t, name: n };
          (0 === this.O && this.resetTasks(),
            (this.O = this.R.push(e)),
            (this.V = this.V.then(() => {
              if (this.R.includes(e) && this.U)
                return this.H(e)().then(() => {
                  (this.R.shift(), (this.O -= 1));
                });
            })));
        }
        disable() {
          ((this.U = !1), this.resetTasks());
        }
        enable() {
          this.U = !0;
        }
        resetTasks() {
          ((this.V = Promise.resolve()), (this.R = []), (this.O = 0));
        }
        H(t) {
          return function () {
            return xo(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
          };
        }
        get tasksInFlight() {
          return this.O;
        }
        hasTaskInQueue(t) {
          return this.R.some((n) => n.name === t);
        }
        removeTask(t) {
          ((this.R = this.R.filter((n, e) =>
            n.name === t && 0 == e
              ? (console.error("Cannot filter active task"), !0)
              : n.name !== t,
          )),
            (this.O = this.R.length),
            console.log(this.R));
        }
        getCurrentTasks() {
          return this.R;
        }
      }
      const ko = new Eo();
      class Ao extends Do {
        constructor(t, n, e) {
          (super(t, n, fo.RE_INJECT), (this.data = e));
        }
      }
      var Bo, Io;
      !(function (t) {
        t.PARTY = "party";
      })(Bo || (Bo = {}));
      class So extends lo {
        constructor(t, n, e) {
          (super(t, n, e), (this.N = e));
        }
      }
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
      })(Io || (Io = {}));
      class $o extends So {
        constructor(t, n, e, i, s) {
          (super(t, n, Io.EVENT_SUCCESS),
            (this.eventSuccess = e),
            (this.extraArgs = s),
            (this.loggerType = i));
        }
      }
      function jo(t) {
        const n = {};
        for (const e of t) n[e.name] = e.isPresent();
        return { success: Object.values(n).every(Boolean), elements: n };
      }
      var To = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class Mo {
        constructor(t) {
          var n;
          ((this.G = 0),
            (this.Z = this.W.bind(this)),
            (this.Y = this.J.bind(this)),
            (this.K = t),
            console.log("Video Event Listener"),
            this.Z(),
            null === (n = window.teleparty) ||
              void 0 === n ||
              n.injectScriptLoaded);
        }
        getCurrentStatus() {
          return To(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return To(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return To(this, void 0, void 0, function* () {
            yield null === (t = this.q) || void 0 === t
              ? void 0
              : t.reloadNextEpisode();
          });
        }
        persistForReload(t) {
          var n;
          return To(this, void 0, void 0, function* () {
            yield null === (n = this.q) || void 0 === n
              ? void 0
              : n.persistExtension(!0, t);
          });
        }
        isOthersWatchingAds() {
          var t, n;
          return (
            null !==
              (n =
                null === (t = this.q) || void 0 === t
                  ? void 0
                  : t.getOthersWatchingAds()) &&
            void 0 !== n &&
            n
          );
        }
        getListenerElementChecks() {
          return [
            ((t = () => this.K.getVideoElement()),
            { name: "video", isPresent: () => null !== t() }),
          ];
          var t;
        }
        validateListenersPresent() {
          return jo(this.getListenerElementChecks()).success;
        }
        getListenerElementsStatus() {
          return jo(this.getListenerElementChecks()).elements;
        }
        startListening() {
          (this.logListenerElementsDetected(),
            this.X(),
            window.addEventListener(Mo.ACTIVATION_CONTINUE_EVENT, this.Y, !1));
        }
        logListenerElementsDetected() {
          var t;
          return To(this, void 0, void 0, function* () {
            try {
              yield Ze(() => this.validateListenersPresent(), 1e4)();
            } catch (t) {}
            const { success: n, elements: e } = jo(
                this.getListenerElementChecks(),
              ),
              i =
                null === (t = zs(this.K.getStreamingServiceName())) ||
                void 0 === t
                  ? void 0
                  : t.serverName;
            if (!i) return;
            let s;
            try {
              s = yield this.K.getVideoDataAsync();
            } catch (t) {}
            co.L(
              new $o(
                ni,
                Xe,
                {
                  event_name: "listener_elements_detected",
                  service: i,
                  video_data: s,
                  success: n,
                  extra_info: { listener_elements: e },
                },
                Bo.PARTY,
              ),
            );
          });
        }
        stopListening() {
          (this.G++,
            this.tt(),
            window.removeEventListener(
              Mo.ACTIVATION_CONTINUE_EVENT,
              this.Y,
              !1,
            ));
        }
        stopPartyStartPolling() {
          (this.nt && (clearInterval(this.nt), (this.nt = void 0)),
            this.et && (clearInterval(this.et), (this.et = void 0)));
        }
        X() {
          const t = navigator;
          (t.mediaSession.setActionHandler("play", () =>
            To(this, void 0, void 0, function* () {
              (this.it(),
                this.K.play(),
                console.log("Bluetooth device played the video"));
            }),
          ),
            t.mediaSession.setActionHandler("pause", () =>
              To(this, void 0, void 0, function* () {
                (this.it(),
                  this.K.pause(),
                  console.log("Bluetooth device paused the video"));
              }),
            ));
        }
        st() {
          return 600;
        }
        ot() {
          return 2e3;
        }
        W() {
          (this.rt(),
            (this.nt = setInterval(this.rt.bind(this), this.ot())),
            (this.et = setInterval(this.ut.bind(this), 2e3)));
        }
        ct(t) {
          return !(
            !window.location.href.includes("netflix.com/watch/") ||
            !t.includes("netflix.com/watch/")
          );
        }
        ut() {
          return To(this, void 0, void 0, function* () {
            const t = yield co.L(new Fo(ni, Xe, { key: "startParty" }));
            if (null == t ? void 0 : t.result) {
              if (!this.ct(t.result)) return;
              const n = yield wo(!1, !0, !1);
              if (n && !n.error) {
                co.L(new _o(ni, Xe, { key: "startParty", value: null }));
                const t = {
                    name: "user_click",
                    component: {
                      name: `${this.K.getStreamingServiceName().toLowerCase()}_redirect_start_party`,
                      type: "button",
                      origin: "tp",
                    },
                  },
                  n = new yo(ni, Xe, t);
                co.L(n);
              }
            }
          });
        }
        rt() {
          return To(this, void 0, void 0, function* () {
            const t = JSON.parse(localStorage.getItem("nativeParty") || "{}");
            if (
              t.shouldStart &&
              t.expiry > Date.now() &&
              t.randomId !== this.lt
            ) {
              (yield ze(this.st())(),
                yield this.K.waitBeforeNativePartyStartAsync());
              const n = yield wo(!1, !0, !1);
              if (n && !n.error) {
                (localStorage.removeItem("nativeParty"),
                  (this.lt = t.randomId));
                const n = {
                    name: "user_click",
                    component: {
                      name: `${this.K.getInternalStreamingServiceName()}_native_start_party`,
                      type: "button",
                      origin: "tp",
                    },
                  },
                  e = new yo(ni, Xe, n);
                co.L(e);
              } else if ((null == n ? void 0 : n.error) === Co) {
                const t = yield co.L(new ho(ti, Xe, po.GET_TAB_ID)),
                  n = new Zs(new URL(window.location.href), t),
                  e = new Ao(ei, Xe, { extensionTabData: n });
                try {
                  yield co.L(e);
                } catch (t) {
                  console.error("Error re-injecting content scripts", t);
                }
              }
            }
          });
        }
        tt() {
          const t = navigator;
          (t.mediaSession.setActionHandler("play", null),
            t.mediaSession.setActionHandler("pause", null));
        }
        ht() {
          var t;
          null === (t = this.q) || void 0 === t || t.tryBroadcast(!1);
        }
        dt(t, n) {
          const e = ++this.G;
          ko.pushTask(
            () =>
              To(this, void 0, void 0, function* () {
                e === this.G &&
                  (n ? this.it(void 0, n) : this.ht(),
                  t &&
                    ko.pushTask(
                      () =>
                        To(this, void 0, void 0, function* () {
                          e === this.G && t();
                        }),
                      "localControlBroadcastComplete",
                    ));
              }),
            "localControlBroadcast",
          );
        }
        it(t, n) {
          var e;
          null === (e = this.q) || void 0 === e || e.tryBroadcast(!0, n);
        }
        ft() {
          var t;
          null === (t = this.q) || void 0 === t || t.setBuffering(!0);
        }
        Dt(t) {
          var n;
          null === (n = this.q) || void 0 === n || n.setWatchingAds(!0, t);
        }
        vt() {
          var t, n;
          (null === (t = this.q) || void 0 === t || t.setWatchingAds(!1),
            null === (n = this.q) || void 0 === n || n.forceSync());
        }
        gt() {
          var t;
          null === (t = this.q) || void 0 === t || t.setBuffering(!1);
        }
        J(t) {
          var n;
          const e = t.detail,
            i = this.K.getStreamingServiceName(),
            s = document.documentElement.getAttribute(
              Mo.ACTIVATION_PENDING_ATTR,
            ),
            o = document.documentElement.getAttribute(
              Mo.ACTIVATION_PENDING_SERVICE_ATTR,
            ),
            r = document.documentElement.getAttribute(
              Mo.ACTIVATION_HELPER_SERVICE_ATTR,
            ),
            a = document.documentElement.getAttribute(
              Mo.ACTIVATION_EXPECTED_SERVICE_ATTR,
            ),
            u = document.documentElement.getAttribute(
              Mo.ACTIVATION_EXPECTED_STATE_ATTR,
            );
          "true" === s &&
            o === i &&
            r === i &&
            (null == e ? void 0 : e.serviceName) === i &&
            a === i &&
            "playing" === u &&
            (null === (n = this.q) ||
              void 0 === n ||
              n.syncToCurrentPartyTimeAfterActivation());
        }
        wt(t, n) {
          var e;
          null === (e = this.q) ||
            void 0 === e ||
            e.sendOtherEpisodeAsync(t, n);
        }
        yt(t, n) {
          var e;
          null === (e = this.q) || void 0 === e || e.sendNextEpisodeAsync(t, n);
        }
        bt(t) {
          var n;
          null === (n = this.q) || void 0 === n || n.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.q = t;
        }
        shouldSync() {
          if (
            "true" !==
            document.documentElement.getAttribute(Mo.ACTIVATION_PENDING_ATTR)
          )
            return !0;
          const t = this.K.getStreamingServiceName();
          return !(
            document.documentElement.getAttribute(
              Mo.ACTIVATION_PENDING_SERVICE_ATTR,
            ) === t &&
            document.documentElement.getAttribute(
              Mo.ACTIVATION_HELPER_SERVICE_ATTR,
            ) === t &&
            document.documentElement.getAttribute(
              Mo.ACTIVATION_EXPECTED_SERVICE_ATTR,
            ) === t &&
            "playing" ===
              document.documentElement.getAttribute(
                Mo.ACTIVATION_EXPECTED_STATE_ATTR,
              )
          );
        }
        shouldRegisterPartyTimelineSeekListeners() {
          return null == this.q || !this.q.isScheduledPartyPlaybackOnly();
        }
      }
      ((Mo.ACTIVATION_CONTINUE_EVENT = "TPActivationContinue"),
        (Mo.ACTIVATION_PENDING_ATTR = "data-tp-activation-pending"),
        (Mo.ACTIVATION_PENDING_SERVICE_ATTR = "data-tp-activation-service"),
        (Mo.ACTIVATION_HELPER_SERVICE_ATTR =
          "data-tp-activation-helper-service"),
        (Mo.ACTIVATION_EXPECTED_STATE_ATTR =
          "data-tp-activation-expected-state"),
        (Mo.ACTIVATION_EXPECTED_SERVICE_ATTR =
          "data-tp-activation-expected-service"));
      const Po = 2500,
        Lo = 1e3,
        Ro = 72e5,
        Oo = 12e4,
        Vo = 338,
        Uo = chrome.runtime.getURL("img/x-circle.svg"),
        Ho = "with-chat",
        No = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party",
        },
        Go = {
          title: "Teleparty | Are you still there?",
          content:
            "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching.",
        },
        zo = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party",
        },
        Zo = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party",
        };
      function Wo(t, n) {
        Qo();
        const e = n
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${Uo}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${Uo}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        (document.body.insertAdjacentHTML("afterbegin", e),
          jQuery("#alert-x-btn").click(() => {
            Qo();
          }),
          n &&
            jQuery("#alert-return-btn").click(() => {
              (Qo(), (window.location.href = n));
            }));
      }
      function Qo() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const Yo = { showAlert: !1 },
        Jo = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content:
              "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party",
          },
        };
      var Ko,
        qo,
        Xo = function (t, n, e, i) {
          return new (e || (e = Promise))(function (s, o) {
            function r(t) {
              try {
                u(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(i.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var n;
              t.done
                ? s(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(r, a);
            }
            u((i = i.apply(t, n || [])).next());
          });
        };
      class tr extends Mo {
        constructor(t, n) {
          var e, i;
          (super(t),
            (this.Ct = this.onSeeking.bind(this)),
            (this.Ft = this.ht.bind(this)),
            (this._t = this.xt.bind(this)),
            (this.Et = this.ft.bind(this)),
            (this.kt = this.gt.bind(this)),
            (this.At = this.Bt.bind(this)),
            (this.It = !1),
            (this.St = () =>
              Xo(this, void 0, void 0, function* () {
                yield Ze(() => {
                  const t = this.K.isWatchingAd();
                  return (t || (this.vt(), (this.It = !1)), !t);
                }, 1 / 0)();
              })),
            (this.$t = () =>
              Xo(this, void 0, void 0, function* () {
                this.K.isWatchingAd() &&
                  !this.It &&
                  ((this.It = !0), this.Dt(), yield this.St());
              })),
            (this.jt = () => {
              const t = this.K.isWatchingAd();
              t && !this.It
                ? ((this.It = !0), this.Dt())
                : !t && this.It && ((this.It = !1), this.vt());
            }),
            (this.Tt = (t) => {
              const n = t.detail;
              "tpHboAdState" === (null == n ? void 0 : n.type) && this.jt();
            }),
            (this.Mt = (t) => {
              const n = t.detail;
              "tpHboCommand" === (null == n ? void 0 : n.type) &&
                (this.Pt && (clearTimeout(this.Pt), (this.Pt = void 0)),
                this.Ft());
            }),
            (this.Lt = (t) => {
              var n, e;
              const i = t.detail;
              if ("tpHboPlaybackState" !== (null == i ? void 0 : i.type))
                return;
              const s = String(
                null !==
                  (e =
                    null === (n = i.value) || void 0 === n
                      ? void 0
                      : n.playbackEventType) && void 0 !== e
                  ? e
                  : "",
              );
              /^(Playing|Paused)Event$/.test(s) &&
                (this.Pt && (clearTimeout(this.Pt), (this.Pt = void 0)),
                this.Ft());
            }),
            (this.K = t),
            this.K.setVideoEventListener(this),
            (this.Rt = this.K.onNode.bind(this.K)),
            this.initListeners(),
            (this.Ot = n),
            (null === (e = window.teleparty) || void 0 === e
              ? void 0
              : e.injectScriptLoaded) ||
              Ye(
                chrome.runtime.getURL(
                  "content_scripts/hbo_max/hbo_max_injected_bundled.js",
                ),
              ),
            (null === (i = window.teleparty) || void 0 === i
              ? void 0
              : i.replaceScriptLoaded) ||
              (ao("injecting replace script"),
              Ye(chrome.runtime.getURL("lib/replace_state_script.js"))));
        }
        initListeners() {
          window.addEventListener("FromNode", this.Rt, !1);
        }
        getListenerElementChecks() {
          return [
            {
              name: "partyPage",
              isPresent: () => Ve(new URL(window.location.href)),
            },
          ];
        }
        reloadListeners() {
          (this.stopListening(), this.startListening());
        }
        wt(t) {
          this.Vt(t, !1);
        }
        yt(t) {
          this.Vt(t, !0);
        }
        Vt(t, n) {
          return Xo(this, void 0, void 0, function* () {
            const e = this.q;
            e &&
              (n
                ? yield e.sendNextEpisodeAsync(t)
                : yield e.sendOtherEpisodeAsync(t));
          });
        }
        onInteraction() {
          ko.tasksInFlight < 5 && !this.K.isWatchingAd() && this.it();
        }
        onSeeking() {
          const t = this.K.getVideoElement();
          (t && t.readyState < 4 && this.ft(), this.ht());
        }
        xt() {
          (this.Pt && clearTimeout(this.Pt),
            (this.Pt = setTimeout(() => {
              ((this.Pt = void 0), this.Ft());
            }, tr.DELAYED_UPDATE_FALLBACK_MS)));
        }
        startListening() {
          (super.startListening(),
            window.addEventListener("mouseup", this._t),
            window.addEventListener("keyup", this._t));
          const t = this.K.getVideoElement();
          (t &&
            (t.addEventListener("waiting", this.Et),
            t.addEventListener("canplay", this.kt),
            t.addEventListener("play", this._t),
            t.addEventListener("pause", this._t),
            this.shouldRegisterPartyTimelineSeekListeners() &&
              t.addEventListener("seeking", this.Ct)),
            (this.Ut = setInterval(() => {
              this.jt();
            }, tr.AD_POLL_MS)),
            window.addEventListener("FromNode", this.Tt, !1),
            window.addEventListener("FromNode", this.Lt, !1),
            window.addEventListener("FromNode", this.Mt, !1),
            window.addEventListener("message", this.At, !1));
        }
        stopListening() {
          (super.stopListening(),
            window.removeEventListener("FromNode", this.Tt, !1),
            window.removeEventListener("FromNode", this.Lt, !1),
            window.removeEventListener("FromNode", this.Mt, !1),
            this.Pt && (clearTimeout(this.Pt), (this.Pt = void 0)),
            this.Ut && (clearInterval(this.Ut), (this.Ut = void 0)));
          const t = this.K.getVideoElement();
          (t &&
            (t.removeEventListener("waiting", this.Et),
            t.removeEventListener("canplay", this.kt),
            t.removeEventListener("play", this._t),
            t.removeEventListener("pause", this._t),
            t.removeEventListener("seeking", this.Ct)),
            window.removeEventListener("mouseup", this._t),
            window.removeEventListener("keyup", this._t),
            window.removeEventListener("message", this.At, !1));
        }
        loadNewVideoAsync(t) {
          return Xo(this, void 0, void 0, function* () {
            const n = performance.now();
            (yield new Promise((e, i) => {
              const s = setInterval(() => {
                const o = $i.getVideoId(new URL(window.location.href));
                if (o === t) {
                  const t = this.K.getVideoElement();
                  if (t instanceof Element && t.src)
                    return (
                      ao("Loaded new HboMax video"),
                      clearInterval(s),
                      void e()
                    );
                }
                performance.now() - n >= 2e4 &&
                  (clearInterval(s),
                  i(
                    new Error(
                      `Could not load new video in time. ${t} ${o} ${this.K.uniqTitle}`,
                    ),
                  ));
              }, 100);
            }),
              yield this.K.waitVideoApiReadyAsync());
          });
        }
        Bt(t) {
          var n;
          if (t.source == window)
            if ("FROM_PAGE_POP" !== t.data.type) {
              if (t.data.type && "FROM_PAGE" == t.data.type) {
                (ao("***********************************"),
                  ao("Content script received: " + t.data.text));
                const e = $i.isValidUrl(new URL(window.location.href));
                if ((ao(window.location.href), e)) {
                  const t = $i.getVideoId(new URL(window.location.href));
                  if (!t)
                    return (
                      ao("No video found. Tearing down"),
                      void this.bt(Yo)
                    );
                  t !==
                    (null === (n = this.q) || void 0 === n
                      ? void 0
                      : n.videoId) &&
                    ze(1e3)().then(() =>
                      Xo(this, void 0, void 0, function* () {
                        (yield Ze(() => {
                          var t;
                          return (
                            !this.K.isWatchingAd() &&
                            !!(null === (t = this.K.getVideoElement()) ||
                            void 0 === t
                              ? void 0
                              : t.src)
                          );
                        }, 1 / 0)(),
                          ko.resetTasks(),
                          this.wt(t),
                          this.Ot.reloadChat(),
                          this.reloadListeners(),
                          this.q && (this.q.changingVideo = !1));
                      }),
                    );
                } else this.bt(Yo);
              }
            } else this.bt(Yo);
        }
      }
      ((tr.DELAYED_UPDATE_FALLBACK_MS = 300), (tr.AD_POLL_MS = 5e3));
      class nr extends So {
        constructor(t, n, e) {
          (super(t, n, Io.GET_SESSION_DATA), (this.data = e));
        }
      }
      class er {
        constructor() {
          ((this.Ht = this.Nt.bind(this)), (this.Gt = []), this.zt());
        }
        addMessageListener(t) {
          this.Gt.push(t);
        }
        removeMessageListener(t) {
          this.Gt = this.Gt.filter((t) => {});
        }
        zt() {
          co.addListener(this.Ht);
        }
        teardown() {
          ((this.Gt = []), co.removeListener(this.Ht));
        }
        Nt(t, n, e) {
          if (!this.Zt(t)) return !1;
          return !!this.Wt(t, n, e) || (e({}), !1);
        }
        Zt(t) {
          return t.target === ni;
        }
        Wt(t, n, e) {
          let i = !1;
          return (
            this.Gt.forEach((s) => {
              s.onMessage(t, n, e) && (i = !0);
            }),
            i
          );
        }
      }
      class ir extends ho {
        constructor(t, n, e) {
          (super(t, n, po.PARTY_INIT_TIMING), (this.data = e));
        }
      }
      function sr(t) {
        try {
          const n = new ir(ni, Xe, { marks: { [t]: Date.now() } });
          co.L(n).catch(() => {});
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
      })(Ko || (Ko = {})),
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
        })(qo || (qo = {})));
      var or = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const rr = new (class {
        getItemAsync(t) {
          var n;
          return or(this, void 0, void 0, function* () {
            const e = yield chrome.storage.local.get(t);
            return null !== (n = e[t]) && void 0 !== n ? n : null;
          });
        }
        getItemsAsync(t) {
          return or(this, void 0, void 0, function* () {
            return new Promise((n, e) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError
                  ? (console.error(chrome.runtime.lastError), e(new Error(bo)))
                  : n(t);
              });
            });
          });
        }
        getStorageUse() {
          return or(this, void 0, void 0, function* () {
            return new Promise((t, n) => {
              chrome.storage.local.getBytesInUse(null, (e) => {
                chrome.runtime.lastError
                  ? (console.error(chrome.runtime.lastError), n(new Error(bo)))
                  : t(e);
              });
            });
          });
        }
        getAllItemsAsync() {
          return or(this, void 0, void 0, function* () {
            return new Promise((t, n) => {
              chrome.storage.local.get(null, (e) => {
                chrome.runtime.lastError
                  ? (console.error(chrome.runtime.lastError), n(new Error(bo)))
                  : t(e);
              });
            });
          });
        }
      })();
      Object.freeze(rr);
      const ar = rr;
      var ur,
        cr,
        lr,
        hr = function (t, n, e, i) {
          return new (e || (e = Promise))(function (s, o) {
            function r(t) {
              try {
                u(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(i.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var n;
              t.done
                ? s(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(r, a);
            }
            u((i = i.apply(t, n || [])).next());
          });
        };
      class dr {
        constructor(t, n, e) {
          ((this.Ot = t), (this.K = n), (this.Qt = e), ao("Chat forwarder"));
        }
        onMessage(t, n, e) {
          var i, s, o, r, a;
          switch (t.type) {
            case po.LOAD_SESSION: {
              const n = t;
              return (this.Yt(n.data), !1);
            }
            case Ko.ON_MESSAGE: {
              const n = t;
              return (this.Jt(n), this.Qt.onChatMessage(), !1);
            }
            case Ko.ON_BUFFER: {
              const n = t;
              return (this.Kt(n), !1);
            }
            case Ko.ON_TYPING: {
              const n = t;
              return (this.qt(n), !1);
            }
            case Ko.ON_WATCHING_ADS: {
              const n = t;
              return (this.Xt(n), !1);
            }
            case Ko.UPDATE_SETTINGS: {
              const n = t;
              return (this.tn(n), !1);
            }
            case Ko.ON_REACTION: {
              const n = t;
              return (this.nn(n), !1);
            }
            case Ko.ON_GIF: {
              const n = t;
              return (this.en(n), !1);
            }
            case Ko.USER_LIST: {
              const n = t;
              return (this.sn(n), !1);
            }
            case Ko.ON_WEB_RTC:
              return (this.Ot.onWebRTC(t.data), e(), !0);
            case fo.SET_CHAT_VISIBLE: {
              const n = t;
              return (this.rn(n.data), e(), !1);
            }
            case fo.SET_USER_REACTIONS_DISABLED: {
              const n = t;
              return (
                this.Ot.setUserReactionsDisabledStatus(n.data.disabled),
                e(),
                !1
              );
            }
            case qo.SIDEBAR_MESSAGING_READY: {
              (console.log("Sidebar Ready"), sr("cs_sidebar_messaging_ready"));
              const t =
                null === (i = window.teleparty) || void 0 === i
                  ? void 0
                  : i.tabId;
              return (
                console.log(t),
                this.Ot.setChatFrameReady(null != t ? t : 0),
                e(),
                !0
              );
            }
            case qo.DISPLAY_MODAL: {
              const n = t.data;
              return (console.log(n), !0);
            }
            case qo.SHARE_SHEET: {
              const n = t.data;
              return (
                navigator.share({
                  url: n.url,
                  title: null == n ? void 0 : n.name,
                  text: null == n ? void 0 : n.title,
                }),
                e(),
                !0
              );
            }
            case qo.TRACK_DATA: {
              const n = t.data;
              return (
                window.postMessage(
                  { type: "TP_GTM_EVENT", payload: Object.assign({}, n) },
                  "*",
                ),
                e(),
                !0
              );
            }
            case qo.ON_UPDATE_SETTINGS: {
              const n = t.data;
              return (this.Ot.doUpdateSettings(n), e(), !0);
            }
            case qo.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return (e(), !0);
            case qo.SET_REACTIONS_ACTIVE: {
              const n = t.data;
              return (this.Ot.setReactionsActive(n), e(), !0);
            }
            case qo.RESET_VIEW:
              return (this.Ot.resetChatWindow(!0), e(), !0);
            case qo.ON_FOCUS:
              return (this.Ot.onSidebarFocus(), e(), !0);
            case qo.PREVIEW_REACTION: {
              const n = t.data;
              return (this.Ot.showReaction(n), e(), !0);
            }
            case qo.RESET_CHAT_WINDOW:
              return (
                this.Ot.setChatVisible(!1),
                this.Ot.removeChat(),
                this.Ot.reloadChat(),
                this.Ot.setChatVisible(!0),
                e(),
                !0
              );
            case "onUpdateSettings": {
              const n = t.data;
              return (this.Ot.doUpdateSettings(n), e(), !0);
            }
            case qo.RECEIVED_MESSAGE:
              return (
                this.Ot.shouldChatBeVisible() ||
                  (!1 !==
                    (null ===
                      (o =
                        null === (s = t.data) || void 0 === s
                          ? void 0
                          : s.originalMessage) || void 0 === o
                      ? void 0
                      : o.isSystemMessage) &&
                    !(null ===
                      (a =
                        null === (r = t.data) || void 0 === r
                          ? void 0
                          : r.originalMessage) || void 0 === a
                      ? void 0
                      : a.gifObject)) ||
                  (this.Ot.incrementUnreadMessagesCount(), e()),
                !0
              );
            default:
              return !1;
          }
        }
        teardown() {
          this.Ot.teardown();
        }
        rn(t) {
          return hr(this, void 0, void 0, function* () {
            const n = this.Ot.getSessionId();
            if (n) {
              const t = yield ar.getItemsAsync(["REDIRECT_URL"]);
              t.REDIRECT_URL &&
                t.REDIRECT_URL[n] &&
                this.Ot.setPartyUrl(t.REDIRECT_URL[n]);
              const e = yield co.L(new Fo(ni, Xe, { key: "sportLobby" }));
              (null == e ? void 0 : e.result) &&
                e.result.includes(n) &&
                this.Ot.setPartyUrl(e.result);
            }
            this.Ot.isPartyWindowsActive()
              ? t.visible
                ? yield this.Ot.resetChatWindow()
                : yield this.Ot.hideChatWindow()
              : (yield this.Ot.setChatVisible(t.visible),
                this.Ot.fixPageControls());
          });
        }
        Yt(t) {
          var e;
          return hr(this, void 0, void 0, function* () {
            t.isCreate && sr("cs_load_session_received");
            const i = t.sessionCallbackData.sessionId,
              s = `${n}/join/${i}`;
            (this.Ot.loadInitData(t),
              this.Ot.setPartyUrl(s),
              this.Ot.setSessionId(i),
              this.Ot.setSessionReactionDisabledStatus(
                "true" === t.sessionCallbackData.reactionsDisabled,
              ),
              t.sessionCallbackData.userList &&
                this.Ot.loadUserList(t.sessionCallbackData.userList),
              yield this.Ot.an(),
              t.isCreate && sr("cs_chat_visible"),
              this.Qt.onInitChat(),
              this.Ot.setSessionCreated(t.isCreate));
            const o =
              null === (e = zs(this.K.getStreamingServiceName())) ||
              void 0 === e
                ? void 0
                : e.serverName;
            if (
              (o && this.Ot.logSidebarInjected(o),
              this.Ot.sendInitDataToSidebar(t),
              t.showReviewMessage && this.Ot.addReviewMessage(),
              !t.isCreate)
            )
              for (const n of t.sessionCallbackData.messages)
                "gifObject" in n
                  ? this.Ot.addGif(n)
                  : this.Ot.addMessage(n, !0);
          });
        }
        Jt(t) {
          this.Ot.addMessage(t.data);
        }
        nn(t) {
          this.Ot.showReaction(t.data);
        }
        en(t) {
          this.Ot.addGif(t.data);
        }
        Kt(t) {
          this.Ot.onBufferingMessage(t.data);
        }
        qt(t) {
          this.Ot.onTypingMessage(t.data);
        }
        Xt(t) {
          this.Ot.onWatchingAdsMessage(t.data);
        }
        tn(t) {
          this.Ot.onUpdateSettingsMessage(t.data);
        }
        sn(t) {
          (this.Ot.loadUserList(t.data.userList),
            this.Ot.setSocketConnectionId(t.data.socketConnectionId));
        }
      }
      (!(function (t) {
        ((t.PAUSED = "paused"), (t.PLAYING = "playing"));
      })(ur || (ur = {})),
        (function (t) {
          ((t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready"));
        })(cr || (cr = {})),
        (function (t) {
          ((t.UPDATE_SESSION = "updateSession"),
            (t.NEXT_EPISODE = "nextEpisode"),
            (t.REBOOT_SESSION = "rebootSession"),
            (t.GET_SERVER_TIME = "getServerTime"),
            (t.RELOAD_PARTY = "reloadParty"),
            (t.PARTY_PHASE = "partyPhase"));
        })(lr || (lr = {})));
      class pr extends So {
        constructor(t, n, e) {
          (super(t, n, Io.BROADCAST), (this.data = e));
        }
      }
      class fr extends ho {
        constructor(t, n, e) {
          (super(t, n, po.TEARDOWN), (this.data = e));
        }
      }
      class Dr extends lo {
        constructor(t, n, e) {
          (super(t, n, e), (this.type = e));
        }
      }
      class vr extends Dr {
        constructor(t, n) {
          super(t, n, lr.GET_SERVER_TIME);
        }
      }
      class gr extends So {
        constructor(t, n, e) {
          (super(t, n, Io.BROADCAST_NEXT_EPISODE), (this.data = e));
        }
      }
      class mr extends So {
        constructor(t, n, e) {
          (super(t, n, Io.SET_BUFFERING), (this.data = e));
        }
      }
      class wr extends So {
        constructor(t, n, e) {
          (super(t, n, Io.SET_WATCHING_ADS), (this.data = e));
        }
      }
      const yr = "PING",
        br = "SYNC",
        Cr = "PERIODIC_VALIDATION",
        Fr = "BROADCAST",
        _r = "ACTIVATION_CONTINUE_SYNC";
      class xr extends ho {
        constructor(t, n, e) {
          (super(t, n, po.STAY_ALIVE), (this.data = e));
        }
      }
      function Er(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "videoService" in t &&
          "videoId" in t
        );
      }
      var kr = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const Ar = new (class {
        setItemsAsync(t) {
          return kr(this, void 0, void 0, function* () {
            return new Promise((n, e) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError
                  ? e(
                      new Error(
                        "Failed to write to chrome storage. Please refresh the page and try again",
                      ),
                    )
                  : n();
              });
            });
          });
        }
      })();
      Object.freeze(Ar);
      const Br = Ar;
      var Ir = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const Sr = new (class {
        getRedirectDataForTabAsync(t) {
          return Ir(this, void 0, void 0, function* () {
            const n = (yield ar.getItemsAsync([so])).redirectDataMap,
              e = this.un(t);
            if (n && n[e]) {
              const t = n[e];
              if (this.cn(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return Ir(this, void 0, void 0, function* () {
            const n = (yield ar.getItemsAsync([so])).redirectDataMap,
              e = this.un(t);
            (n && n[e] && delete n[e], yield Br.setItemsAsync({ [so]: n }));
          });
        }
        un(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, n) {
          return Ir(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const e = this.un(n);
            let i = yield ar.getItemsAsync([so]);
            ((i[e] = t), (i = this.ln(i)), yield Br.setItemsAsync({ [so]: i }));
          });
        }
        ln(t) {
          return (function (t, n) {
            const e = {};
            let i;
            for (i in t) t.hasOwnProperty(i) && n(t[i]) && (e[i] = t[i]);
            return e;
          })(t, this.cn);
        }
        cn(t) {
          const n = t.date;
          return (
            void 0 !== n &&
            "number" == typeof n &&
            n <= Date.now() &&
            Date.now() - n < 108e5
          );
        }
      })();
      Object.freeze(Sr);
      const $r = Sr;
      var jr, Tr;
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
      })(jr || (jr = {})),
        (function (t) {
          ((t.PLAY = "play"),
            (t.PAUSE = "pause"),
            (t.SEEK = "seek"),
            (t.EPISODE_JUMP = "episodeJump"));
        })(Tr || (Tr = {})));
      var Mr = e(7833),
        Pr = e.n(Mr);
      class Lr {
        constructor() {
          ((this.hn = Pr()("teleparty:log")),
            (this.dn = Pr()("teleparty:warn")),
            (this.pn = Pr()("teleparty:error")),
            (this.hn.log = console.debug.bind(console)),
            (this.dn.log = console.warn.bind(console)),
            (this.pn.log = console.error.bind(console)));
        }
        static get instance() {
          return (Lr.Dn || (Lr.Dn = new Lr()), Lr.Dn);
        }
        log(t, ...n) {
          this.hn(`[Teleparty] ${t}`, ...n);
        }
        warn(t, ...n) {
          this.dn(`[Teleparty] ${t}`, ...n);
        }
        error(t, ...n) {
          this.pn(`[Teleparty] ${t}`, ...n);
        }
      }
      const Rr = Lr.instance;
      var Or = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class Vr {
        constructor(t, n, e, i) {
          ((this.vn = []),
            (this.gn = 0),
            (this.mn = 0),
            (this.wn = []),
            (this.yn = !1),
            (this.bn = !1),
            (this.Cn = !1),
            (this.Fn = !1),
            (this._n = !1),
            (this.xn = !1),
            (this.En = void 0),
            (this.kn = 0),
            (this.An = 0),
            (this.Bn = ""),
            (this.In = 0),
            (this.Sn = {}),
            (this.$n = () =>
              Or(this, void 0, void 0, function* () {
                try {
                  (yield fetch("https://www3.doubleclick.net", {
                    method: "HEAD",
                    mode: "no-cors",
                    cache: "no-store",
                  }),
                    (this.En = !1));
                } catch (t) {
                  this.En = !0;
                }
              })),
            (this.jn = () =>
              Or(this, void 0, void 0, function* () {
                if (!this.Tn || this.Mn || this.yn) return;
                const t = this.K.getVideoElement();
                if (!t) return;
                const n = this.Pn(),
                  e = Math.round(1e3 * (t.currentTime || 0));
                Math.abs(n - e) <= Po ||
                  (console.log(
                    "Activation continue requested, syncing to current party time",
                    n,
                    e,
                  ),
                  yield this.K.setCurrentTime(n));
              })),
            (this.Ln = (t = !1, n = !1, e = !1, i) =>
              Or(this, void 0, void 0, function* () {
                if (!e && this.K.shouldSuppressLocalBroadcast()) return;
                if (this.Mn) return;
                if (!this.Rn.shouldSync()) return;
                if (this.Cn) return void this.forceSync();
                if (!this._n && !n) return;
                const s = yield this.On(
                  e ? { sessionMetadataRefresh: !0 } : void 0,
                );
                e &&
                  Object.keys(this.Sn).length > 0 &&
                  (s.data.providerOffsets = Object.assign({}, this.Sn));
                const o = e || (yield this.Vn(s.data, n, i)),
                  r = yield this.Un(s.data, n);
                if (o) {
                  if (
                    (this.Hn === si.ESPN || this.Hn === si.TSN_PLUS) &&
                    this.Nn(s.data, r)
                  )
                    return;
                  (yield this.Gn(s, e),
                    r.length > 0 && this.zn.logInteraction(r[0]));
                } else if (t) {
                  if (yield this.Zn(n)) {
                    const t = yield this.On(),
                      e = yield this.Un(t.data, n);
                    if (
                      (this.Hn === si.ESPN || this.Hn === si.TSN_PLUS) &&
                      this.Nn(t.data, e)
                    )
                      return;
                    yield this.Gn(t);
                  }
                }
              })),
            (this.Wn = () =>
              Or(this, void 0, void 0, function* () {
                if (
                  (this.Qn == ur.PAUSED &&
                    this.Yn &&
                    (clearInterval(this.Yn),
                    (this.Yn = setInterval(() => {
                      this.Jn();
                    }, 6e4))),
                  this.Kn())
                )
                  return;
                if ((yield this.K.waitVideoDoneLoadingAsync(), this.Kn()))
                  return;
                const t = yield this.K.getStateAsync();
                yield this.qn(t);
                const n = yield this.K.getStateAsync();
                (yield this.Xn(n), !1 === this._n && (this._n = !0));
              })),
            (this.K = t),
            (this.Ot = n),
            (this.Rn = e),
            (this.zn = i),
            this.Rn.setMessageForwarder(this),
            (this.te = 0),
            (this.Mn = !1),
            (this.Qn = ur.PAUSED),
            (this.ne = 0),
            (this.ee = 0),
            (this.ie = 0),
            (this.Hn = this.K.getStreamingServiceName()),
            ao("Video forwarder"),
            this.$n());
        }
        onMessage(t, n, e) {
          switch (t.type) {
            case po.GET_VIDEO_DATA:
              return (this.se(e), !0);
            case po.LOAD_SESSION: {
              const n = t;
              return (this.oe(n.data), !1);
            }
            case lr.UPDATE_SESSION: {
              const n = t;
              return (this.re(n.data), !1);
            }
            case lr.NEXT_EPISODE: {
              const n = t;
              return (
                !0 === n.data.isNextEpisode ? this.ae(n.data) : this.ue(n.data),
                !1
              );
            }
            case lr.REBOOT_SESSION: {
              const n = t;
              return (this.ce(n.data, e), !0);
            }
            case lr.RELOAD_PARTY: {
              const n = t.data;
              return (
                ((null == n ? void 0 : n.source) === Vr.SIDEBAR_RELOAD_SOURCE
                  ? this.le()
                  : this.reloadNextEpisode()
                )
                  .then(() => {
                    (console.log("Party Reloaded"), e());
                  })
                  .catch((t) => {
                    (console.log("Error reloading party", t),
                      e({ error: String(t) }));
                  }),
                !0
              );
            }
            case Ko.ON_WATCHING_ADS: {
              const n = t;
              return (this.Xt(n), !1);
            }
            case qo.GO_NEXT_EPISODE:
              return (this.K.triggerNextEpisodeClick(), !0);
            default:
              return !1;
          }
        }
        he() {
          (document.documentElement.setAttribute(
            Vr.ACTIVATION_EXPECTED_STATE_ATTR,
            this.Qn.toString(),
          ),
            document.documentElement.setAttribute(
              Vr.ACTIVATION_EXPECTED_SERVICE_ATTR,
              this.Hn,
            ));
        }
        de() {
          const t = document.documentElement.getAttribute(
            Vr.ACTIVATION_EXPECTED_SERVICE_ATTR,
          );
          (t && t !== this.Hn) ||
            (document.documentElement.removeAttribute(
              Vr.ACTIVATION_EXPECTED_STATE_ATTR,
            ),
            document.documentElement.removeAttribute(
              Vr.ACTIVATION_EXPECTED_SERVICE_ATTR,
            ));
        }
        Xt(t) {
          (t.data.anyoneWatchingAds &&
            !this.bn &&
            (ko.pushTask(this.K.doAdCheck.bind(this.K), "doAdCheck"),
            this.K.hasAdBreakWithinMs(Vr.UPCOMING_AD_PLAYTHROUGH_MS)
              ? this.K.play()
              : this.forceSync()),
            (this.bn = t.data.anyoneWatchingAds));
        }
        pe() {
          var t;
          return Or(this, void 0, void 0, function* () {
            const n = yield this.K.getVideoDataAsync(),
              e = yield this.K.getStateAsync(),
              i =
                (e.playbackState.toString() === this.Qn.toString() &&
                  Math.abs(e.playbackPositionMilliseconds - this.Pn()) < Po &&
                  this.fe === n.videoId) ||
                (e.playbackState !== cr.PLAYING &&
                  e.playbackState !== cr.PAUSED) ||
                this.Mn,
              s =
                null === (t = zs(this.K.getStreamingServiceName())) ||
                void 0 === t
                  ? void 0
                  : t.serverName;
            s &&
              co.L(
                new $o(
                  ni,
                  Xe,
                  {
                    event_name: "periodic_video_state_checked",
                    service: s,
                    video_data: n,
                    success: i,
                  },
                  Bo.PARTY,
                ),
              );
          });
        }
        getOthersWatchingAds() {
          return this.bn;
        }
        get videoId() {
          return this.fe;
        }
        set videoId(t) {
          this.fe = t;
        }
        sendTeardown(t) {
          const n = new fr(ni, Xe, t);
          co.L(n);
        }
        teardown() {
          ((this.K.scheduledPartyPlaybackOnly = !1),
            this.Tn && this.K.pause(),
            (this.Tn = void 0),
            (this.xn = !1),
            this.de(),
            this.De && clearInterval(this.De),
            this.Yn && clearInterval(this.Yn),
            this.ve(),
            ko.disable(),
            this.Rn.stopListening());
        }
        isInParty() {
          return null != this.Tn;
        }
        isScheduledPartyPlaybackOnly() {
          return this.K.scheduledPartyPlaybackOnly;
        }
        ce(t, n) {
          (ko.resetTasks(),
            this.fe == t.videoId && this.re(t),
            n(this.fe == t.videoId));
          const e = new yo(ni, Xe, { eventType: "reboot", sessionId: this.Tn });
          co.L(e);
        }
        tryBroadcast(t = !1, n) {
          if (this.yn) return;
          if (this.Cn) return void this.forceSync();
          const e = this.K.shouldSuppressLocalBroadcast(),
            i = this.Mn,
            s = !!this.Tn,
            o = ko.hasTaskInQueue(Fr);
          e || i || !s || o || ko.pushTask(() => this.Ln(t, !1, !1, n), Fr);
        }
        setBuffering(t) {
          if (this.Tn) {
            const n = new mr(ni, Xe, { buffering: t });
            co.L(n);
          }
        }
        isWatchingAds() {
          return this.yn;
        }
        setWatchingAds(t, n) {
          if (this.Tn) {
            this.yn = t;
            const e = new wr(ni, Xe, { watchingAds: t, adDurationLeft: n });
            co.L(e);
          }
        }
        clearAdPresenceState() {
          ((this.bn = !1), this.yn ? this.setWatchingAds(!1) : (this.yn = !1));
        }
        sendOtherEpisodeAsync(t, n) {
          return Or(this, void 0, void 0, function* () {
            return this.ge(t, !1, n);
          });
        }
        sendNextEpisodeAsync(t, n) {
          return Or(this, void 0, void 0, function* () {
            return this.ge(t, !0, n);
          });
        }
        ge(t, n, e) {
          return Or(this, void 0, void 0, function* () {
            if (this.Tn && t !== this.fe && t !== this.we) {
              ((this.we = t),
                (this.Mn = !0),
                this.zn.logInteraction(Tr.EPISODE_JUMP));
              const i = { nextEpisode: t, isNextEpisode: n };
              (this.Hn === si.YOUTUBE &&
                window.location.href.includes("/shorts/") &&
                (i.videoType = jr.SHORTS),
                void 0 !== e && (i.extraInfo = e));
              const s = new gr(ni, Xe, i),
                o = yield co.L(s);
              o && "Locked Session" === o.errorMessage && (yield this.ye(t));
            }
          });
        }
        ye(t) {
          return Or(this, void 0, void 0, function* () {
            try {
              (yield Ze(() => t == this.fe, 1e4)(), (this.Mn = !1));
            } catch (t) {
              this.be(
                "An error has occured when trying to wait till the episode changed videos",
              );
              const n = { showAlert: !0, alertModal: No };
              this.sendTeardown(n);
            }
          });
        }
        Un(t, n, e = !1) {
          return Or(this, void 0, void 0, function* () {
            const e = [];
            if (
              null == t.lastKnownTime ||
              null == t.lastKnownTimeUpdatedAt ||
              null == t.state
            )
              return e;
            if (n && t.state === ur.PAUSED && t.lastKnownTime < Lo) return e;
            const i = Math.abs(t.lastKnownTime - this.Pn());
            if (t.state == this.Qn && i < Lo) return e;
            if (i >= Lo && !this.K.scheduledPartyPlaybackOnly) {
              e.push(Tr.SEEK);
              const t = new yo(ni, Xe, {
                name: "video_seek",
                action: { source: "self" },
              });
              (co.L(t), this.Hn == si.PARAMOUNT && (yield ze(200)()));
            }
            return (
              t.state != this.Qn &&
                (t.state === ur.PLAYING ? e.push(Tr.PLAY) : e.push(Tr.PAUSE)),
              e
            );
          });
        }
        Vn(t, n, e) {
          return Or(this, void 0, void 0, function* () {
            const i = yield this.Un(t, n, !0);
            return e ? e.some((t) => i.includes(t)) : i.length > 0;
          });
        }
        On(t) {
          return Or(this, void 0, void 0, function* () {
            const n = yield this.K.getUpdateSessionDataAsync(t);
            ((n.lastKnownTimeUpdatedAt -= this.mn),
              (n.lastKnownTime = Math.round(n.lastKnownTime)));
            return new pr(ni, Xe, n);
          });
        }
        forceSync() {
          ko.pushTask(this.Wn, br);
        }
        consumePendingCreatePlaybackBroadcast() {
          return !!this.xn && ((this.xn = !1), !0);
        }
        syncToCurrentPartyTimeAfterActivation() {
          ko.hasTaskInQueue(_r) || ko.pushTask(this.jn, _r);
        }
        ue(t) {
          return Or(this, void 0, void 0, function* () {
            ((this.te = Date.now()),
              Rr.log(
                "Received other episode message, current task manager tasks are",
                ko.getCurrentTasks(),
              ),
              ko.pushTask(() => this.Ce(t, !1), "onOtherEpisodeAsync"));
          });
        }
        ae(t) {
          return Or(this, void 0, void 0, function* () {
            ((this.te = Date.now()),
              Rr.log(
                "Received next episode message, current task manager tasks are",
                ko.getCurrentTasks(),
              ),
              ko.pushTask(() => this.Ce(t, !0), "onNextEpisodeAsync"));
          });
        }
        Ce(t, n) {
          return Or(this, void 0, void 0, function* () {
            try {
              (Rr.log(
                n
                  ? "Starting next episode flow"
                  : "Starting other episode flow",
              ),
                (this.Mn = !0),
                this.clearAdPresenceState(),
                (this.fe = t.videoId),
                this.zn.logInteraction(Tr.EPISODE_JUMP, !0),
                n
                  ? yield this.K.jumpToNextEpisode(t)
                  : yield this.K.jumpToOtherEpisode(t),
                yield this.Rn.loadNewVideoAsync(t.videoId),
                ao("After load new video"),
                this.Rn.reloadListeners(),
                yield this.K.waitVideoDoneLoadingAsync(),
                yield this.Fe(t.videoId, n ? "next_episode" : "other_episode"),
                this.ie < this.te &&
                  ((this.Qn = ur.PAUSED),
                  (this.ne = 0),
                  (this.ee = Date.now()),
                  ao("Sending broadcast after episode change"),
                  ko.pushTask(
                    () =>
                      this.Ln(
                        !0,
                        !0,
                        this.K.shouldForceEpisodeCompletionBroadcast(),
                      ),
                    Fr,
                  ),
                  ko.removeTask(br)),
                (this.Mn = !1),
                this.clearAdPresenceState());
              const e = new yo(ni, Xe, {
                name: "video_start",
                action: { description: "video session has begun" },
              });
              co.L(e);
            } catch (t) {
              (this.be("Error loading new video."),
                console.log("Error was", t),
                (this.Mn = !1),
                this.clearAdPresenceState(),
                yield this.reloadNextEpisode());
            }
          });
        }
        persistExtension(t, n) {
          var e, i;
          return Or(this, void 0, void 0, function* () {
            console.log("persist here");
            const s =
              null !==
                (i =
                  null === (e = window.teleparty) || void 0 === e
                    ? void 0
                    : e.tabId) && void 0 !== i
                ? i
                : 0;
            yield this._e(s, t);
            const o = yield this.xe(n),
              r = null != n ? n : this.Ee(o);
            yield this.ke(o, s, r);
          });
        }
        xe(t) {
          return Or(this, void 0, void 0, function* () {
            if (!t || !this.Tn) return this.Ae();
            switch (this.Hn) {
              case si.DISNEY_PLUS:
              case si.CANALPLUS: {
                const n = zs(this.Hn);
                if (!n) break;
                return {
                  sessionId: this.Tn,
                  videoId: this.fe,
                  videoService: n.serverName,
                  serviceDomain: new URL(t).hostname,
                  selectedProvider: this.Be,
                };
              }
            }
            return this.Ae();
          });
        }
        reloadNextEpisode() {
          var t, n;
          return Or(this, void 0, void 0, function* () {
            try {
              Rr.log("Attempting to reload next episode");
              const e = yield this.Ae(),
                i = this.Ie(this.Se(e)),
                s =
                  null !==
                    (n =
                      null === (t = window.teleparty) || void 0 === t
                        ? void 0
                        : t.tabId) && void 0 !== n
                    ? n
                    : 0;
              if (
                (yield this.$e(e, s, i, !1),
                Rr.log("Redirect URL is", i),
                (function (t, n) {
                  if (t === n) return !0;
                  try {
                    const e = new URL(t),
                      i = new URL(n);
                    if (e.origin !== i.origin) return !1;
                    const s = (t) => {
                      const n = t.replace(/\/+$/, "");
                      return "" === n ? "/" : n;
                    };
                    if (s(e.pathname) !== s(i.pathname)) return !1;
                    const o = new URLSearchParams(i.search);
                    for (const [t, n] of o.entries())
                      if (e.searchParams.get(t) !== n) return !1;
                    return !0;
                  } catch (t) {
                    return !1;
                  }
                })(window.location.href, i))
              ) {
                const t = Er(e) ? e.videoService.toLowerCase() : "";
                if (
                  "tsnplus" === t ||
                  Ge(new URL(window.location.href).pathname)
                )
                  return void Rr.log(
                    "Already on TSN redirect URL, skipping navigation",
                  );
              }
              this.je(i);
            } catch (t) {
              (Rr.error("Error reloading next episode:", t),
                this.Te("Failed to fix next episode."));
            }
          });
        }
        le() {
          var t, n;
          return Or(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party from sidebar");
              const e = yield this.Ae(),
                i = this.Ee(e),
                s =
                  null !==
                    (n =
                      null === (t = window.teleparty) || void 0 === t
                        ? void 0
                        : t.tabId) && void 0 !== n
                    ? n
                    : 0;
              (yield this.$e(e, s, i, !1),
                console.log("Sidebar reload URL is", i),
                this.je(i));
            } catch (t) {
              (console.log("Error reloading party from sidebar", t),
                this.Te("Failed to reload party from sidebar."));
            }
          });
        }
        Ee(t) {
          try {
            return this.Ie(this.Se(t));
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
        $e(t, n, e, i) {
          return Or(this, void 0, void 0, function* () {
            (yield this._e(n, i), yield this.ke(t, n, e));
          });
        }
        _e(t, n) {
          return Or(this, void 0, void 0, function* () {
            const e = new xr(ni, Xe, { tabId: t, persist: n });
            yield co.L(e);
          });
        }
        ke(t, n, e) {
          return Or(this, void 0, void 0, function* () {
            yield $r.storeRedirectDataForTabAsync(this.Me(t, e), n);
          });
        }
        Me(t, n) {
          var e, i, s, o;
          return Object.assign(Object.assign({}, t), {
            videoId: this.fe || t.videoId || "",
            sessionId:
              null !==
                (i =
                  null !== (e = t.sessionId) && void 0 !== e ? e : this.Tn) &&
              void 0 !== i
                ? i
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
            partyUrl: n,
          });
        }
        Ie(t) {
          const n = new URL(t, window.location.href);
          if ("http:" !== n.protocol && "https:" !== n.protocol)
            throw new Error("Invalid reload redirect protocol");
          return n.toString();
        }
        je(t) {
          window.location.href !== t
            ? (window.location.href = t)
            : window.location.reload();
        }
        Te(t) {
          this.be(t);
          const n = new fr(ni, Xe, { showAlert: !0, alertModal: zo });
          co.L(n);
        }
        Ae() {
          return Or(this, void 0, void 0, function* () {
            return new Promise((n, e) => {
              const i = new XMLHttpRequest();
              ((i.timeout = 1e4),
                (i.ontimeout = () => {
                  e(new Error());
                }),
                (i.onreadystatechange = () => {
                  if (i.readyState === XMLHttpRequest.DONE)
                    try {
                      const t = JSON.parse(i.responseText);
                      n(t);
                    } catch (t) {
                      (e(t),
                        this.be(
                          "Unable to get video endpoint data to reload session",
                        ));
                    }
                }),
                i.open("GET", `${t}/video?session=` + this.Tn, !0),
                i.send(null));
            });
          });
        }
        Se(t) {
          var n, e;
          if (Er(t)) {
            switch (t.videoService.toLowerCase().split("#")[0].trim()) {
              case "crunchyroll":
                return `https://www.crunchyroll.com/watch/${t.videoId}`;
              case "netflix":
                return `https://www.netflix.com/watch/${t.videoId}`;
              case "hulu":
                return `https://www.hulu.com/watch/${null !== (e = null === (n = t.videoId.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i)) || void 0 === n ? void 0 : n[1]) && void 0 !== e ? e : t.videoId}`;
              case "disney":
                return `https://www.disneyplus.com/${"other" === t.videoType ? "video" : "play"}/${t.videoId}`;
              case "starplus":
                return `https://www.starplus.com/video/${t.videoId}`;
              case "amazon": {
                const n = t.serviceDomain;
                if (n)
                  return `https://${n}/gp/video/detail/${t.videoId}?autoplay=1`;
                throw new Error("No service Domain");
              }
              case "hbomax":
                return `https://play.hbomax.com/video/watch/${t.videoId}`;
              case "youtube": {
                const n = t.videoId,
                  e = t.serviceDomain;
                if (e) {
                  if ("browsing" === n) return window.location.href;
                  if (n && "browsing" !== n) {
                    if (t.videoType === jr.SHORTS)
                      return `https://${e}/shorts/${n}`;
                    const i = new URL(`https://${e}/watch`);
                    return (i.searchParams.set("v", n), i.toString());
                  }
                  return `https://${e}/`;
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
                let n = "";
                return (
                  (n =
                    "live" === t.videoType
                      ? "live"
                      : "event" === t.videoType
                        ? "event"
                        : "vod"),
                  `https://www.peacocktv.com/watch/playback/${n}/${t.videoId}${"paused" === t.state ? "?paused=true" : ""}`
                );
              }
              case "disneymena":
                return `https://apps.disneyplus.com/${t.videoId}/watch`;
              case "appletv":
                return (function (t) {
                  const n = /^https?:\/\//i.test(t)
                    ? new URL(t)
                    : new URL(`https://tv.apple.com/${t.replace(/^\/+/, "")}`);
                  return (n.searchParams.set("action", "play"), n.toString());
                })(t.videoId);
              case "max":
                return `https://play.max.com/video/watch/${t.videoId}`;
              case "plutotv":
                return ts.getWatchUrl(t.videoId);
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
                const n = t.videoId;
                if (null == n ? void 0 : n.startsWith("live/")) {
                  return `https://www.crave.ca/en/live?channel=${n.slice(5)}`;
                }
                return `https://www.crave.ca/${n}`;
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
                return `https://video.unext.jp/${t.videoType === jr.LIVE ? "live" : "play"}/${t.videoId}`;
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
                return this.Pe(t.videoId);
              case "vidio":
                return `https://www.vidio.com/${t.videoId}`;
              case "migu":
                return `https://www.miguvideo.com/p/${t.videoId}`;
              case "f1tv":
                return this.Le(t.videoId);
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
        Le(t) {
          const n = /^https?:\/\//i.test(t)
            ? new URL(t)
            : new URL(`https://f1tv.formula1.com/${t.replace(/^\/+/, "")}`);
          return (n.searchParams.set("action", "play"), n.toString());
        }
        Pe(t) {
          if (/^https?:\/\//i.test(t)) return t;
          const n = t.replace(/^\/+/, "");
          return `https://www.viu.com/${n.startsWith("ott/") ? n : `ott/sg1/en/${n}`}`;
        }
        re(t) {
          ((this.ie = Date.now()),
            ko.pushTask(this.Re(t).bind(this), "Update Session Data"));
        }
        Re(t) {
          if (t.state === ur.PAUSED && this.Qn === ur.PLAYING) {
            this.Jn();
            const t = new yo(ni, Xe, {
              name: "video_pause",
              action: {
                description: "video was played from pause",
                reason: "Video was played",
              },
            });
            co.L(t);
          } else if (t.state === ur.PLAYING && this.Qn === ur.PAUSED) {
            const t = new yo(ni, Xe, {
              name: "video_resume",
              action: {
                description: "video was played from pause",
                reason: "Video was played",
              },
            });
            (co.L(t), this.Jn());
          }
          return (
            (this.Qn = t.state),
            (this.ne = t.lastKnownTime),
            (this.ee = t.lastKnownTimeUpdatedAt),
            t.providerOffsets && (this.Sn = t.providerOffsets),
            this.he(),
            this.Wn
          );
        }
        se(t) {
          var n;
          return Or(this, void 0, void 0, function* () {
            try {
              const e = yield this.K.getVideoDataAsync();
              (null !== (n = e.serviceDomain) && void 0 !== n) ||
                (e.serviceDomain = window.location.hostname);
              const i = yield this.K.getStateAsync();
              ((e.is_player_fullscreen =
                null != document.fullscreenElement ||
                document.webkitIsFullScreen),
                (e.is_chat_visible = this.Ot.getChatVisible()),
                (e.is_adblock_enabled = this.En),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.ne),
                (e.service = this.K.getInternalStreamingServiceName()),
                t(e));
            } catch (n) {
              (console.error(n), t({ error: n }));
            }
          });
        }
        be(t) {
          const n = new yo(ni, Xe, {
            name: "video_error",
            action: {
              description: t,
              reason: "An errors has occurred during video playback",
            },
          });
          co.L(n);
        }
        Nn(t, n) {
          const e = n[0] || (t.state === ur.PLAYING ? Tr.PLAY : Tr.PAUSE),
            i = e === Tr.SEEK ? 500 : 1e3,
            s = `${e}:${t.state}:${Math.round(t.lastKnownTime / i)}`,
            o = Date.now();
          return (
            (this.Bn === s && o - this.In < 500) ||
            ((this.Bn = s), (this.In = o), !1)
          );
        }
        Zn(t) {
          return Or(this, void 0, void 0, function* () {
            return new Promise((n) => {
              const e = performance.now(),
                i = () =>
                  Or(this, void 0, void 0, function* () {
                    if (performance.now() - e >= 2500) n(!1);
                    else {
                      const e = yield this.On();
                      (yield this.Vn(e.data, t))
                        ? n(!0)
                        : setTimeout(() => {
                            i();
                          }, 50);
                    }
                  });
              i();
            });
          });
        }
        Gn(t, n = !1) {
          return Or(this, void 0, void 0, function* () {
            if (
              this.Mn ||
              this.yn ||
              (!n && this.K.shouldSuppressLocalBroadcast())
            )
              return;
            const e = this.Qn;
            if (t.data.bufferingState) {
              ((t.data.state = ur.PAUSED),
                yield co.L(t, 1e3),
                yield this.K.waitVideoDoneLoadingAsync());
              const n = yield this.On();
              ((n.data.bufferingState = !0),
                e == ur.PLAYING && (n.data.state = ur.PLAYING),
                yield co.L(n, 1e3),
                (this.Qn = n.data.state),
                (this.ne = n.data.lastKnownTime),
                (this.ee = Date.now()));
            } else
              (yield co.L(t, 1e3),
                (this.Qn = t.data.state),
                (this.ne = t.data.lastKnownTime),
                (this.ee = Date.now()));
          });
        }
        oe(t) {
          var n, e, i;
          return Or(this, void 0, void 0, function* () {
            (ko.enable(), ko.resetTasks());
            const s = t.sessionCallbackData;
            ((this.K.scheduledPartyPlaybackOnly =
              "scheduled" === s.sessionType ||
              ("crave" ===
                (null === (n = s.videoService) || void 0 === n
                  ? void 0
                  : n.toLowerCase()) &&
                (null !== (e = s.videoId) && void 0 !== e ? e : "").startsWith(
                  "live/",
                ))),
              (this.Tn = s.sessionId),
              (this.Qn = s.state),
              (this.ne = Number(s.lastKnownTime)),
              (this.ee = Number(s.lastKnownTimeUpdatedAt)),
              (this.fe = s.videoId),
              (this.bn = !1),
              this.he(),
              "true" == s.controlLock && (this.Cn = !0),
              "true" == s.reactionsDisabled && (this.Fn = !0),
              (this.Be = s.selectedProvider),
              (this.Oe = s.defaultProvider),
              (this.Sn =
                null !== (i = s.providerOffsets) && void 0 !== i ? i : {}),
              this.Ve(),
              t.isCreate
                ? ((this._n = !0),
                  (this.xn = !0),
                  ko.pushTask(this.Ln.bind(this), Fr))
                : "scheduled" === s.sessionType
                  ? ((this._n = !0),
                    ko.pushTask(() => this.Ln(!1, !1, !0), Fr),
                    this.forceSync())
                  : this.forceSync());
            const o = new yo(ni, Xe, {
              name: "video_start",
              action: { description: "video session has begun" },
            });
            (co.L(o),
              this.Rn.startListening(),
              this.Ue(),
              t.isCreate || this.He(s.videoId, "join"));
          });
        }
        He(t, n) {
          return Or(this, void 0, void 0, function* () {
            (yield this.K.waitVideoDoneLoadingAsync().catch(() => {}),
              yield this.Fe(t, n));
          });
        }
        Fe(t, n) {
          var e, i;
          return Or(this, void 0, void 0, function* () {
            const s =
              null === (e = zs(this.K.getStreamingServiceName())) ||
              void 0 === e
                ? void 0
                : e.serverName;
            if (!s) return;
            let o;
            try {
              o = yield this.K.getVideoDataAsync();
            } catch (t) {
              return;
            }
            const r = (null == t ? void 0 : t.trim()) || void 0,
              a =
                (null === (i = o.videoId) || void 0 === i
                  ? void 0
                  : i.trim()) || void 0;
            let u;
            (r
              ? a
                ? r !== a && (u = "mismatch")
                : (u = "actual_video_id_missing")
              : (u = "expected_video_id_missing"),
              co.L(
                new $o(
                  ni,
                  Xe,
                  {
                    event_name: "video_id_correct",
                    service: s,
                    video_data: o,
                    success: !u,
                    extra_info: Object.assign(
                      {
                        trigger: n,
                        expected_video_id: null != r ? r : null,
                        actual_video_id: null != a ? a : null,
                      },
                      u ? { failure_reason: u } : {},
                    ),
                  },
                  Bo.PARTY,
                ),
              ));
          });
        }
        Ne() {
          return new Promise((t) => {
            const n = new vr(ni, Xe),
              e = Date.now();
            (co
              .L(n)
              .then((t) => {
                const n = Date.now();
                if (t) {
                  const i = t.serverTime;
                  i &&
                    (We(this.vn, n - e, 5),
                    (this.gn = Qe(this.vn)),
                    We(this.wn, n - Math.round(this.gn / 2) - i, 5),
                    (this.mn = Qe(this.wn)));
                }
              })
              .catch((t) => {
                (ao(t), this.be(t));
              }),
              t());
          });
        }
        Jn() {
          const t = new yo(ni, Xe, {
            name: "video_heartbeat",
            action: {
              description: "new heartbeat",
              reason: "Heartbeat session was due",
            },
          });
          co.L(t);
        }
        Ue() {
          (this.De && clearInterval(this.De),
            this.Yn && clearInterval(this.Yn),
            (this.De = setInterval(() => {
              ko.hasTaskInQueue(br) || ko.pushTask(this.Wn, br);
            }, 5e3)),
            (this.Yn = setInterval(() => {
              this.Jn();
            }, 6e4)),
            (this.Ge = setInterval(() => {
              ko.hasTaskInQueue(yr) || ko.pushTask(this.Ne.bind(this), yr);
            }, 12500)),
            (this.ze = setInterval(() => {
              ko.hasTaskInQueue(Cr) || ko.pushTask(this.pe.bind(this), Cr);
            }, 3e5)),
            this.Ne());
        }
        Kn() {
          return (
            !this.Tn ||
            this.K.uiEventsHappening > 0 ||
            this.K.shouldCancelSync() ||
            this.yn ||
            (this.bn &&
              this.K.hasAdBreakWithinMs(Vr.UPCOMING_AD_PLAYTHROUGH_MS)) ||
            this.Mn ||
            !this.Rn.shouldSync()
          );
        }
        qn(t) {
          return Or(this, void 0, void 0, function* () {
            if (this.K.scheduledPartyPlaybackOnly) return;
            const n = this.Pn();
            if (
              Math.abs(n - t.playbackPositionMilliseconds) <=
              this.K.getSyncToleranceMs(Po)
            )
              return;
            const e = this.Hn === si.ESPN;
            if (e) {
              if (Date.now() - this.kn < 1e3 && Math.abs(n - this.An) < 1500)
                return;
            }
            this.K.beginRemoteSyncApply();
            const i = Date.now();
            try {
              (yield this.K.setCurrentTime(n),
                e
                  ? ((this.kn = i), (this.An = n))
                  : this.Qn === ur.PLAYING && (yield this.K.play()),
                this.zn.logInteraction(Tr.SEEK, !0));
              const t = new yo(ni, Xe, {
                name: "video_seek",
                action: { source: "another user" },
              });
              co.L(t);
            } finally {
              this.K.endRemoteSyncApply();
            }
          });
        }
        Xn(t) {
          return Or(this, void 0, void 0, function* () {
            if (
              !this.K.scheduledPartyPlaybackOnly &&
              t.playbackState.toString() !== this.Qn.toString()
            ) {
              this.K.beginRemoteSyncApply();
              try {
                this.Qn === ur.PAUSED
                  ? (this.zn.logInteraction(Tr.PAUSE, !0), yield this.K.pause())
                  : this.Qn === ur.PLAYING &&
                    (this.zn.logInteraction(Tr.PLAY, !0), yield this.K.play());
              } finally {
                this.K.endRemoteSyncApply();
              }
            }
          });
        }
        Ze() {
          return this.Qn === ur.PLAYING ? Date.now() - (this.ee + this.mn) : 0;
        }
        Pn() {
          return this.ne + this.Ze() + this.We();
        }
        We() {
          var t;
          return this.Be &&
            this.Be !== this.Oe &&
            null !== (t = this.Sn[this.Be]) &&
            void 0 !== t
            ? t
            : 0;
        }
        Qe() {
          return !!this.Be && !!this.Oe && this.Be !== this.Oe;
        }
        Ve() {
          (this.ve(),
            this.Qe() &&
              (this.Ye = setInterval(() => {
                this.Je();
              }, Vr.REPORT_POSITION_INTERVAL_MS)));
        }
        ve() {
          this.Ye && (clearInterval(this.Ye), (this.Ye = void 0));
        }
        Je() {
          return Or(this, void 0, void 0, function* () {
            if (this.Qe() && this.Qn === ur.PLAYING)
              try {
                const t = yield this.K.getStateAsync(),
                  n = {
                    type: Io.REPORT_STREAM_POSITION,
                    sender: ni,
                    target: Xe,
                    data: {
                      lastKnownTime: Math.round(t.playbackPositionMilliseconds),
                      lastKnownTimeUpdatedAt: Date.now() - this.mn,
                      selectedProvider: this.Be,
                    },
                  };
                yield co.L(n, 2e3);
              } catch (t) {}
          });
        }
        get changingVideo() {
          return this.Mn;
        }
        set changingVideo(t) {
          this.Mn = t;
        }
        isPartyPaused() {
          return this.Qn === ur.PAUSED;
        }
      }
      ((Vr.ACTIVATION_EXPECTED_STATE_ATTR =
        "data-tp-activation-expected-state"),
        (Vr.ACTIVATION_EXPECTED_SERVICE_ATTR =
          "data-tp-activation-expected-service"),
        (Vr.SIDEBAR_RELOAD_SOURCE = "sidebar"),
        (Vr.REPORT_POSITION_INTERVAL_MS = 8e3),
        (Vr.UPCOMING_AD_PLAYTHROUGH_MS = 5e3));
      e(7588);
      class Ur extends ho {
        constructor(t, n, e) {
          (super(t, n, po.POSTHOG_HAS_FEATURE),
            (this.data = { featureName: e }));
        }
      }
      class Hr extends Do {
        constructor(t, n, e = !1) {
          (super(t, n, fo.GET_INIT_USER_SETTINGS),
            (this.shouldRefresh = e),
            (this.data = { shouldRefresh: e }));
        }
      }
      var Nr = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const Gr = "api_feature_flags_cache_v1",
        zr = 6e5,
        Zr = "ff_version",
        Wr = "allchat_comment_viewed";
      let Qr = null;
      const Yr = (n) =>
        Nr(void 0, void 0, void 0, function* () {
          const e = Date.now();
          if (!n && Qr && e - Qr.fetchedAtMs < zr) return Qr;
          if (!n) {
            const t = yield Nr(void 0, void 0, void 0, function* () {
              try {
                const { [Gr]: t } = yield chrome.storage.local.get(Gr);
                return (null == t ? void 0 : t.flags)
                  ? Date.now() - t.fetchedAtMs > zr
                    ? null
                    : t
                  : null;
              } catch (t) {
                return null;
              }
            });
            if (t) return ((Qr = t), t);
          }
          try {
            const n = yield fetch(`${t}/feature-flags`, { cache: "no-cache" });
            if (!n.ok) throw new Error(`HTTP ${n.status}`);
            const { flags: i, ffVersion: s } = ((t) => {
              if (!t || "object" != typeof t) return { flags: {} };
              const n = Object.entries(t),
                e = t[Zr],
                i =
                  "string" == typeof e || "number" == typeof e
                    ? String(e)
                    : void 0;
              return {
                flags: Object.fromEntries(
                  n.filter(([t]) => t !== Zr).map(([t, n]) => [t, !!n]),
                ),
                ffVersion: i,
              };
            })(yield n.json());
            return (
              yield ((t, n) =>
                Nr(void 0, void 0, void 0, function* () {
                  const e = { flags: t, fetchedAtMs: Date.now(), ffVersion: n };
                  Qr = e;
                  try {
                    yield chrome.storage.local.set({ [Gr]: e });
                  } catch (t) {}
                }))(i, s),
              { flags: i, fetchedAtMs: e, ffVersion: s }
            );
          } catch (t) {
            if (Qr) return Qr;
            const n = yield chrome.storage.local
              .get(Gr)
              .then((t) => t[Gr])
              .catch(() => {});
            return (null == n ? void 0 : n.flags)
              ? ((Qr = n), n)
              : { flags: {}, fetchedAtMs: 0 };
          }
        });
      function Jr(t) {
        return Nr(this, void 0, void 0, function* () {
          return !!(yield (function (t = !1) {
            return Nr(this, void 0, void 0, function* () {
              return (yield Yr(t)).flags;
            });
          })())[t];
        });
      }
      var Kr;
      !(function (t) {
        ((t.GET_AUTH_TOKEN = "getAuthToken"),
          (t.SIGN_OUT = "signOut"),
          (t.GET_SIGN_OUT_EPOCH = "getSignOutEpoch"));
      })(Kr || (Kr = {}));
      class qr extends lo {
        constructor(t, n, e) {
          (super(t, n, e), (this.type = e));
        }
      }
      class Xr extends qr {
        constructor(t, n) {
          super(t, n, Kr.GET_AUTH_TOKEN);
        }
      }
      class ta extends ho {
        constructor(t, n, e) {
          (super(t, n, po.UPDATE_HANDLE), (this.handle = e));
        }
      }
      var na = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      function ea(t, n, e = "", i = !0, s = "after") {
        if (i) {
          const n = document.getElementById(t);
          n && n.remove();
        }
        if (n) {
          const i = document.createElement("div");
          return (
            (i.id = t),
            e && (i.style.cssText = e),
            "before" === s && n.firstChild
              ? n.insertBefore(i, n.firstChild)
              : n.appendChild(i),
            i
          );
        }
        return null;
      }
      function ia(t) {
        const n = `img/reactions/${encodeURIComponent(t)}`;
        return {
          staticSrc: chrome.runtime.getURL(
            `${n}/${encodeURIComponent(t)}_static.svg`,
          ),
          gifSrc: chrome.runtime.getURL(`${n}/${encodeURIComponent(t)}.gif`),
        };
      }
      function sa(t) {
        var n, e, i;
        return na(this, void 0, void 0, function* () {
          if (null == t ? void 0 : t.knownHandle)
            return { userData: void 0, handle: t.knownHandle };
          let s = yield co.L(
              new Hr(ti, Xe, Boolean(null == t ? void 0 : t.forceRefresh)),
            ),
            o =
              (null === (n = null == s ? void 0 : s.currentUser) || void 0 === n
                ? void 0
                : n.handle) || void 0;
          if (
            (o ||
              !(null == s ? void 0 : s.signedIn) ||
              (null == t ? void 0 : t.forceRefresh) ||
              ((s = yield co.L(new Hr(ti, Xe, !0))),
              (o =
                (null === (e = null == s ? void 0 : s.currentUser) ||
                void 0 === e
                  ? void 0
                  : e.handle) || void 0)),
            !o && (null == s ? void 0 : s.signedIn))
          )
            try {
              const t = yield co.L(new Xr(ni, Xe)),
                n = yield Ke(
                  "handles/me",
                  "GET",
                  !0,
                  void 0,
                  null == t ? void 0 : t.token,
                ),
                e =
                  null === (i = null == n ? void 0 : n.data) || void 0 === i
                    ? void 0
                    : i.handle;
              "string" == typeof e &&
                e.length > 0 &&
                (co.L(new ta(ni, Xe, e)), (o = e));
            } catch (t) {}
          return { userData: s, handle: o };
        });
      }
      function oa(t, n) {
        return na(this, void 0, void 0, function* () {
          co.L(
            new yo(
              ni,
              Xe,
              Object.assign({ name: t }, n ? { allchat_ui: n } : {}),
              go.POSTHOG,
            ),
          );
        });
      }
      function ra(t, n, e, i) {
        const s = i ? t.replace(/<title>[\s\S]*?<\/title>/i, "") : t,
          o = s.indexOf(">");
        if (-1 === o) return s;
        const r = s.slice(0, o + 1),
          a = s.slice(o + 1),
          u = n ? `id="${n}" ` : "";
        let c = (null != e ? e : "").trim();
        (c && !c.endsWith(";") && (c += ";"),
          (c += "pointer-events:auto!important;"));
        const l = `style="${c}" `,
          h = `${r.replace("<svg ", `<svg ${u}${l}`)}${a}`;
        return i
          ? `<span class="allchat-has-tooltip" data-tooltip="${i}" aria-label="${i}">${h}</span>`
          : h;
      }
      function aa(t, n) {
        return ra(
          '\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g clip-path="url(#clip0_1785_27366)">\n            <path d="M9.99999 0C4.47718 0 0 4.47719 0 10C0 15.5231 4.47718 20 9.99999 20C15.5231 20 20.0003 15.5231 20.0003 10C20.0003 4.47719 15.5231 0 9.99999 0ZM9.99999 18.7697C5.1753 18.7697 1.25 14.8247 1.25 9.99996C1.25 5.17527 5.1753 1.24996 9.99999 1.24996C14.8247 1.24996 18.7503 5.17529 18.7503 9.99996C18.7503 14.8246 14.8247 18.7697 9.99999 18.7697ZM9.08092 15.6344H10.6534V14.0475H9.08092V15.6344ZM9.98155 4.36592C9.06592 4.36592 8.31157 4.61279 7.71907 5.10594C7.12657 5.59936 6.83845 6.58748 6.85314 7.40623L6.87626 7.45186H8.31063C8.31063 6.96342 8.47344 6.26154 8.79907 6.00967C9.12438 5.75811 9.51876 5.63217 9.98188 5.63217C10.5156 5.63217 10.9259 5.77717 11.2138 6.06715C11.5013 6.35715 11.6447 6.77184 11.6447 7.31059C11.6447 7.7634 11.5384 8.14996 11.325 8.47027C11.1109 8.79059 10.7522 9.24842 10.2491 9.84375C9.73001 10.3119 9.40938 10.6881 9.28751 10.9728C9.16532 11.2578 9.10188 11.769 9.09719 12.5062H10.6003C10.6003 12.0437 10.6297 11.7028 10.6881 11.484C10.7462 11.2656 10.9128 11.0187 11.1875 10.744C11.7778 10.1747 12.2519 9.61779 12.6109 9.07312C12.9691 8.52904 13.1484 7.92873 13.1484 7.27248C13.1484 6.35686 12.8716 5.64342 12.3169 5.13248C11.7619 4.62123 10.9834 4.36592 9.98155 4.36592Z" fill="#4B4D4D"/>\n            </g>\n            <defs>\n            <clipPath id="clip0_1785_27366">\n            <rect width="20" height="20" fill="white"/>\n            </clipPath>\n            </defs>\n        </svg>\n    ',
          t,
          n,
        );
      }
      function ua(t, n) {
        return ra(
          '\n        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M5 21V4H14L14.4 6H20V16H13L12.6 14H7V21H5ZM14.65 14H18V8H12.75L12.35 6H7V12H14.25L14.65 14Z" fill="#4B4D4D"/>\n        </svg>\n    ',
          t,
          n,
        );
      }
      function ca(t, n) {
        return ra(
          '\n            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M7 7L17 17M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n        ',
          t,
          n,
        );
      }
      function la(t, n, e) {
        return ra(
          '\n        <svg class="chat-option" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M17.5 22.75L21 19.25M21 19.25L24.5 15.75M21 19.25L17.5 15.75M21 19.25L24.5 22.75M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.8372 7.3815C35.497 7.7175 36.0325 8.25125 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1117 31.5 31.1552 31.5H15.9653C15.2355 31.5 14.8733 31.5 14.525 31.57C14.2159 31.6339 13.9169 31.7393 13.636 31.8832C13.321 32.0425 13.041 32.2683 12.4863 32.7128L12.467 32.7268Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        ',
          t,
          n,
          e,
        );
      }
      function ha(t, n, e) {
        return ra(
          '\n        <svg class="chat-option" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M26.25 15.75L19.25 22.75L15.75 19.25M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.839 7.3815C35.4975 7.71705 36.0329 8.25246 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1135 31.5 31.157 31.5H15.9653C15.2373 31.5 14.8715 31.5 14.5232 31.57C14.2147 31.634 13.9163 31.7394 13.636 31.8832C13.321 32.0442 13.0375 32.27 12.4722 32.7232L12.467 32.7268Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        ',
          t,
          n,
          e,
        );
      }
      function da(t, n, e) {
        return ra(
          '<svg class="chat-option" id="tp-allchat-show-create-post" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M21 24.5V19.25M21 19.25V14M21 19.25H15.75M21 19.25H26.25M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.839 7.3815C35.4975 7.71705 36.0329 8.25246 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1135 31.5 31.157 31.5H15.9653C15.2373 31.5 14.8715 31.5 14.5232 31.57C14.2147 31.634 13.9163 31.7394 13.636 31.8832C13.321 32.0442 13.0375 32.27 12.4722 32.7232L12.467 32.7268Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>',
          t,
          n,
          e,
        );
      }
      function pa(t) {
        return `\n        <div id="tp-allchat-options" class="chat-options-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n            ${((n = t.liveChatShowing), n ? la("tp-allchat-toggle", void 0, "Turn Allchat Off") : ha("tp-allchat-toggle", void 0, "Turn Allchat On"))}\n            ${t.liveChatShowing ? da("tp-allchat-show-create-post", void 0, "Post Comment") : ""}\n        </div>\n    `;
        var n;
      }
      function fa(t, n) {
        if (n) {
          n.innerHTML = pa(t);
          const e = document.getElementById("tp-allchat-toggle"),
            i = document.getElementById("tp-allchat-show-create-post");
          (e &&
            e.addEventListener("click", (n) => {
              (n.stopPropagation(), t.toggleLiveChat());
            }),
            i &&
              i.addEventListener("click", (n) => {
                (n.stopPropagation(),
                  oa("allchat_open_create_comment_clicked"),
                  t.showCreatePost());
              }));
        }
      }
      var Da = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      function va(t) {
        return t
          ? '\n        <svg id="tp-allchat-chatbox-pauseplay" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M8.68344 3.25195C8.29705 3.25195 7.92649 3.40544 7.65327 3.67866C7.38005 3.95188 7.22656 4.32244 7.22656 4.70883V32.2912C7.22656 32.6776 7.38005 33.0481 7.65327 33.3213C7.92649 33.5946 8.29705 33.748 8.68344 33.748H13.4298C13.8162 33.748 14.1868 33.5946 14.46 33.3213C14.7332 33.0481 14.8867 32.6776 14.8867 32.2912V4.70883C14.8867 4.32244 14.7332 3.95188 14.46 3.67866C14.1868 3.40544 13.8162 3.25195 13.4298 3.25195H8.68344ZM23.5702 3.25195C23.1838 3.25195 22.8132 3.40544 22.54 3.67866C22.2668 3.95188 22.1133 4.32244 22.1133 4.70883V32.2912C22.1133 32.6776 22.2668 33.0481 22.54 33.3213C22.8132 33.5946 23.1838 33.748 23.5702 33.748H28.3166C28.7029 33.748 29.0735 33.5946 29.3467 33.3213C29.6199 33.0481 29.7734 32.6776 29.7734 32.2912V4.70883C29.7734 4.51751 29.7358 4.32806 29.6625 4.15131C29.5893 3.97455 29.482 3.81395 29.3467 3.67866C29.2114 3.54338 29.0508 3.43607 28.8741 3.36285C28.6973 3.28964 28.5079 3.25195 28.3166 3.25195H23.5702Z" fill="white"/>\n        </svg>\n\n    '
          : '\n        <svg id="tp-allchat-chatbox-pauseplay" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M12.661 8.31787C12.494 8.21885 12.3038 8.1658 12.1096 8.1641C11.9155 8.16241 11.7243 8.21213 11.5556 8.30822C11.3869 8.4043 11.2466 8.54333 11.149 8.71118C11.0515 8.87903 11 9.06972 11 9.26387V34.7362C11 34.9304 11.0515 35.121 11.149 35.2889C11.2466 35.4567 11.3869 35.5958 11.5556 35.6919C11.7243 35.7879 11.9155 35.8377 12.1096 35.836C12.3038 35.8343 12.494 35.7812 12.661 35.6822L34.1532 22.946C34.3173 22.8486 34.4533 22.7102 34.5477 22.5443C34.6422 22.3785 34.6918 22.1909 34.6918 22C34.6918 21.8092 34.6422 21.6216 34.5477 21.4557C34.4533 21.2899 34.3173 21.1514 34.1532 21.054L12.661 8.31787Z" fill="white" stroke="white" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n\n    ';
      }
      let ga = !1,
        ma = null;
      function wa(t) {
        return Da(this, void 0, void 0, function* () {
          const n = yield t.isVideoPlaying();
          (n ? yield t.pauseVideo() : yield t.playVideo(), (ma = !n));
          const e = document.getElementById("tp-allchat-chatbox-pauseplay");
          e && (e.outerHTML = va(ma));
        });
      }
      function ya(t, n) {
        return Da(this, void 0, void 0, function* () {
          if (n && t.shouldRender) {
            const e = yield t.isVideoPlaying();
            n.innerHTML = (function (t, n) {
              return `\n        <div id="tp-allchat-chatbox-controls" class="allchat-chatbox-controls-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n            ${va(n)}\n        </div>\n    `;
            })(t, e);
            const i = document.getElementById("tp-allchat-chatbox-pauseplay");
            (i &&
              i.addEventListener("click", (n) => {
                (n.stopPropagation(), wa(t));
              }),
              ga ||
                (setInterval(
                  () =>
                    Da(this, void 0, void 0, function* () {
                      const n = yield t.isVideoPlaying();
                      if (n !== ma) {
                        ma = n;
                        const e = yield va(n),
                          i = document.getElementById(
                            "tp-allchat-chatbox-pauseplay",
                          );
                        if (i) {
                          i.outerHTML = e;
                          const n = document.getElementById(
                            "tp-allchat-chatbox-pauseplay",
                          );
                          n &&
                            n.addEventListener("click", (n) => {
                              (n.stopPropagation(), wa(t));
                            });
                        }
                      }
                    }),
                  100,
                ),
                (ga = !0)));
          }
        });
      }
      const ba = [
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
        Ca = [
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
        Fa = [
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
        _a = {
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
        xa = {
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
      function Ea(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                ro,
                `<span style="font-size: ${(function (t) {
                  let n = 16;
                  const e = t.replace(ro, "").replace(/[\uFE0F]/g, ""),
                    i = ((t || "").match(ro) || []).length;
                  return (0 === e.length && i <= 3 && (n = 32), n);
                })(t)}px">$&</span>`,
              )
          : t;
      }
      const ka = {
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
      class Aa {
        constructor(t) {
          ((this.Ot = t),
            (this.Ke = []),
            (this.qe = 0),
            (this.Xe = document.title),
            (this.ti = 0),
            (this.ni = new Map()),
            (this.ei = new Map()),
            (this.ii = new Map()),
            (this.si = []),
            (this.oi = []),
            (this.ri = ""),
            (this.ai = ""),
            ao("Message Controller"));
        }
        ui(t, n, e, i) {
          return jQuery(
            `\n            <div class="msg-container ${!i && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${i ? `<img src="${Ea(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-txt message${e.isSystemMessage ? "-system" : "-txt"}">\n                    ${i ? `<h3 data-tp-id="chat_history_container-nickname">${n}</h3>` : ""}\n                    <p data-tp-id="chat_history_container-message">${Ea(e.body).trim()}</p>\n                </div>\n            </div>\n          `,
          );
        }
        ci(t, n, e, i) {
          const s =
              200 /
              (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            o =
              200 /
              (e.gifObject.media.fullMobile.dims[0] /
                e.gifObject.media.fullMobile.dims[1]),
            r = this.Ot.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${!i && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${i ? `<img src="${Ea(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${i ? `<h3 data-tp-id="chat_history_container-nickname">${n}</h3>` : ""}  \n            ${r ? `<video src="${Ea(e.gifObject.media.full.url)}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${Ea(e.gifObject.media.fullMobile.url)}"  height="${o}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`}     \n                </div>\n            </div>\n          `,
          );
        }
        li(t, n, e) {
          return jQuery(
            `\n            <div class="msg ${!e && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    ${e ? `<img src="${Ea(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                </div>\n                <div class="message${n.isSystemMessage ? "-system" : "-txt"}">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${Ea(n.body).trim()}</p>\n                </div>\n            </div>\n        `,
          );
        }
        hi(t, n, e) {
          const i =
              200 /
              (n.gifObject.media.full.dims[0] / n.gifObject.media.full.dims[1]),
            s =
              200 /
              (n.gifObject.media.fullMobile.dims[0] /
                n.gifObject.media.fullMobile.dims[1]),
            o = this.Ot.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${!e && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${e ? `<img src="${Ea(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${o ? `<video src="${Ea(n.gifObject.media.full.url)}" data-tp-id="chat_history_container-gif" height="${i}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${Ea(n.gifObject.media.fullMobile.url)}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`}\n                </div>\n            </div>\n          `,
          );
        }
        di(t, n, e, i, s) {
          t.appendTo(jQuery("#chat-history"));
          const o = t[0];
          ((o.pi = n.permId), (o.fi = e), (o.Di = i), (o.gi = n), (o.mi = s));
        }
        reloadMessages() {
          this.Ot.queueMessageForFrame(qo.CLEAR_MESSAGES, "");
          for (const t of this.Ke)
            this.Ot.queueMessageForFrame(qo.ADD_MESSAGE, {
              originalMessage: t,
              userIcon: this.getUserIconURL(t.permId, t.userIcon),
              userNickname: this.getUserNickname(t.permId, t.userNickname),
              userIconFrame: this.getUserIconFrameURL(
                t.permId,
                t.userIconFrame,
              ),
            });
        }
        wi(t, n) {
          if (Math.abs(t.timestamp - n.timestamp) > 6e4) return !1;
          if (t.permId !== n.permId) return !1;
          if (
            "isSystemMessage" in n &&
            n.isSystemMessage &&
            (n.body.includes("joined") || n.body.includes("left"))
          )
            return !1;
          if ("gifObject" in t) {
            if ("isSystemMessage" in n && n.isSystemMessage) return !1;
          } else {
            if (
              t.isSystemMessage &&
              (t.body.includes("joined") || t.body.includes("left"))
            )
              return !1;
            if ("gifObject" in n) {
              if (t.isSystemMessage) return !1;
            } else if (t.isSystemMessage !== n.isSystemMessage) return !1;
          }
          return !0;
        }
        addMessage(t, n, e) {
          if (t.messageId && this.Ke.some((n) => n.messageId === t.messageId))
            return;
          if (
            (void 0 === e && (e = this.Ke.length),
            t.isSystemMessage &&
              "left" === t.body &&
              (console.log("trying to add left message"),
              !t.userIcon && !this.ni.has(t.permId)))
          )
            return;
          if (0 === e && t.isSystemMessage && t.body.includes("joined")) return;
          n &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon),
            t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const i = this.Ke.slice(-1).pop(),
            s = !(void 0 !== i && e > 0) || !this.wi(i, t);
          this.Ke.push(t);
          const o = Object.assign({}, t),
            r = this.getUserIconURL(o.permId, o.userIcon),
            a = this.getUserNickname(o.permId, o.userNickname),
            u = this.getUserIconFrameURL(o.permId, o.userIconFrame);
          this.Ot.queueMessageForFrame(qo.ADD_MESSAGE, {
            originalMessage: o,
            userIcon: r,
            userNickname: a,
            userIconFrame: u,
          });
          const c = "" === a ? this.li(r, o, s) : this.ui(r, a, o, s);
          (this.di(c, o, r, a, s), this.scrollToBottom(), this.yi());
        }
        addGif(t, n) {
          if (t.messageId && this.Ke.some((n) => n.messageId === t.messageId))
            return;
          void 0 === n && (n = this.Ke.length);
          const e = this.Ke.slice(-1).pop(),
            i = !(void 0 !== e && n > 0) || !this.wi(e, t);
          this.Ke.push(t);
          const s = t.userIcon
              ? this.getUserIconURL(t.permId, t.userIcon)
              : this.getUserIconURL(t.permId),
            o = t.userNickname
              ? this.getUserNickname(t.permId, t.userNickname)
              : "",
            r = this.getUserIconFrameURL(t.permId, t.userIconFrame);
          this.Ot.queueMessageForFrame(qo.ADD_MESSAGE, {
            originalMessage: t,
            userIcon: s,
            userNickname: o,
            userIconFrame: r,
          });
          const a = "" === o ? this.hi(s, t, i) : this.ci(s, o, t, i);
          ((a[0].bi = !0),
            this.di(a, t, s, o, i),
            ze(100)().then(this.scrollToBottom.bind(this)),
            this.yi());
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(
            jQuery("#chat-history").prop("scrollHeight"),
          );
        }
        clearUnreadCount() {
          this.qe > 0 && ((this.qe = 0), (document.title = this.Xe));
        }
        yi() {
          ((this.qe += 1),
            (this.ti += 1),
            document.hasFocus() ||
              (document.title = "(" + String(this.qe) + ") " + this.Xe));
        }
        getUserIconURL(t, n = "") {
          if (t && this.ni.has(t)) return this.ni.get(t);
          const e = Aa.parseIconSrc(n),
            i = void 0 !== e ? e : this.Ci();
          return (t && this.ni.set(t, i), this.oi.push(i), i);
        }
        static parseIconSrc(t) {
          if (t.includes("/profile-images/")) return t;
          const n = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return Fa.includes(n)
            ? chrome.runtime.getURL("img/icons/" + t)
            : ba.includes(e)
              ? chrome.runtime.getURL("img/icons/General/" + t)
              : void 0;
        }
        static getFullIconURL(t) {
          const n = Aa.parseIconSrc(t);
          return (null == n ? void 0 : n.includes("/profile-images/"))
            ? i + n
            : n;
        }
        getUserIconFrameURL(t, n = "") {
          const e = t ? this.ei.get(t) : void 0;
          return void 0 !== e ? e : (t && n && this.ei.set(t, n), n);
        }
        setUserIconFrameForUser(t, n = "") {
          return (t && this.ei.set(t, n), n);
        }
        getUserNickname(t, n = "") {
          return (
            this.ii.has(t) || (this.ii.set(t, n), this.si.push(n)),
            Ea(this.ii.get(t))
          );
        }
        Ci() {
          let t = chrome.runtime.getURL(
            "img/icons/General/" + ba[Math.floor(Math.random() * ba.length)],
          );
          if (this.oi.length < _a.General.length)
            for (; this.oi.includes(t);)
              t = chrome.runtime.getURL(
                "img/icons/General/" +
                  ba[Math.floor(Math.random() * ba.length)],
              );
          return t;
        }
        Fi(t) {
          const n = t[0],
            e = n.pi;
          let i = n.fi;
          e &&
            this.getUserIconURL(e) !== i &&
            ((i = this.getUserIconURL(e)),
            t.find("img").attr("src", i),
            (n.fi = i));
          const s = n.Di;
          if (e && i) {
            const o = this.getUserNickname(e);
            if (o !== s) {
              const s = n.gi,
                r = n.mi;
              let a;
              if (
                (n.bi &&
                  s &&
                  "gifObject" in s &&
                  r &&
                  (a = "" == o ? this.hi(i, s, r) : this.ci(i, o, s, r)),
                !n.bi &&
                  s &&
                  !("gifObject" in s) &&
                  r &&
                  (a = "" == o ? this.li(i, s, r) : this.ui(i, o, s, r)),
                a)
              ) {
                t.replaceWith(a);
                const n = a[0];
                ((n.pi = e), (n.fi = i), (n.Di = o), (n.gi = s), (n.mi = r));
              }
            }
          }
        }
        setUserIconUrl(t) {
          ((this.ri = t),
            this.Ot.queueMessageForFrame(qo.SET_USER_ICON_URL, t));
        }
        setUserIconFrameUrl(t) {
          ((this.ai = t),
            this.Ot.queueMessageForFrame(qo.SET_USER_ICON_FRAME_URL, t));
        }
        renderSidebar() {
          (jQuery("#user-icon img").attr("src", this.ri),
            jQuery(".user-icon img").attr("src", this.ri));
          const t = jQuery(".msg");
          for (let n = 0; n < t.length; n++) this.Fi(jQuery(t[n]));
          const n = jQuery(".msg-container");
          for (let t = 0; t < n.length; t++) this.Fi(jQuery(n[t]));
          this.Ot.isChatFrameActive() && this.reloadMessages();
        }
        _i(t) {
          let n = null;
          if (t) {
            if (t.includes("/profile-images/")) return t;
            if (t.includes("?newIconUrl=")) {
              const e = t.split("?newIconUrl="),
                i = e[1],
                s = e[0];
              Fa.includes(i)
                ? (n = chrome.runtime.getURL(`img/icons/${i}`))
                : ba.includes(s) &&
                  (n = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              Fa.includes(t)
                ? (n = chrome.runtime.getURL(`img/icons/${t}`))
                : ba.includes(t) &&
                  (n = chrome.runtime.getURL(`img/icons/General/${t}`));
          }
          if (null === n) {
            let t = _a.General.filter((t) => !this.oi.includes(t));
            0 === t.length && (t = _a.General);
            const e = t[Math.floor(Math.random() * t.length)];
            n = chrome.runtime.getURL(`/img/icons/General/${e}`);
          }
          return n;
        }
        setUserIcon(t, n) {
          const e = this._i(n);
          (this.ni.set(t, e), this.oi.push(e), this.renderSidebar());
        }
        setUserNickname(t, n) {
          const e = Ea(n);
          (this.ii.set(t, e), this.si.push(e), this.renderSidebar());
        }
        updateUserData(t, n, e, i) {
          const s = this._i(n);
          (this.ni.set(t, s),
            this.setUserIconFrameForUser(t, i),
            this.oi.push(s),
            this.ii.set(t, e),
            this.si.push(e),
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
          const t = new yo(ni, Xe, {
            name: "review-shown",
            action: {
              description: "review was shown on chrome",
              reason: "review was shown.",
            },
          });
          co.L(t);
          const n = {
              eventType: "review-shown-chrome",
              sessionId: this.Ot.getSessionId(),
            },
            e = new yo(ni, Xe, n);
          (co.L(e),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new yo(ni, Xe, {
                name: "review-clicked",
                action: {
                  description: "review was clicked on chrome",
                  reason: "review was clicked.",
                },
              });
              co.L(t);
              const n = {
                  eventType: "review-clicked-chrome",
                  sessionId: this.Ot.getSessionId(),
                },
                e = new yo(ni, Xe, n);
              co.L(e);
            }));
        }
        getMessages(t = !1) {
          return t ? this.Ke.filter((t) => t.isSystemMessage) : this.Ke;
        }
      }
      var Ba = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      let Ia = null,
        Sa = 0,
        $a = null,
        ja = null;
      function Ta(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }
      function Ma(t, n, e, i) {
        ((t.innerHTML =
          "floating" === i.variant
            ? (function (t, n) {
                const e = Boolean(n),
                  i = e ? `@${n}` : "Choose a handle",
                  s = e ? "Edit" : "Set up",
                  o =
                    (n || "?")
                      .replace(/[^a-zA-Z0-9]/g, "")
                      .slice(0, 2)
                      .toUpperCase() || "?";
                return `\n    <button type="button" class="tp-floating-account" id="allchat-user-pill" aria-label="${e ? `Edit profile for ${Ta(n)}` : "Set your All Chat handle"}">\n      <span class="tp-floating-account-avatar" aria-hidden="true">\n        ${t ? `<img src="${t}" alt=""/>` : `<span class="tp-floating-account-initial">${Ta(o)}</span>`}\n      </span>\n      <span class="tp-floating-account-text">\n        <span class="tp-floating-account-label">${e ? "Posting as" : "Almost ready"}</span>\n        <span class="tp-floating-account-handle">${Ta(i)}</span>\n      </span>\n      <span class="tp-floating-account-action">${s}</span>\n    </button>\n  `;
              })(n, e)
            : (function (t, n) {
                const e = Boolean(n),
                  i = e ? n : "Set handle",
                  s = e ? "Edit" : "Tap to create",
                  o = (e ? n : "?").slice(0, 1).toUpperCase();
                return `\n    <div class="user-pill rounded-container gray-border" style="cursor: pointer !important;" id="allchat-user-pill">\n      <span class="user-pill-avatar">\n        ${t ? `<img src="${t}" alt="${Ta(i)}"/>` : `<span class="user-pill-initial">${Ta(o)}</span>`}\n      </span>\n      <div style="display: flex; flex-direction: column">\n        <span class="user-pill-name">${Ta(i)}</span>\n        <span class="user-pill-edit" id="allchat-edit-profile-open-btn">${s}</span>\n      </div>\n    </div>\n  `;
              })(n, e)),
          (function (t, n) {
            const e = document.getElementById("allchat-user-pill");
            e &&
              e.addEventListener("click", (e) => {
                (e.stopPropagation(),
                  t ? n.onEditClicked() : n.onSetHandleClicked());
              });
          })(e, i));
      }
      function Pa(t, n) {
        var e;
        return Ba(this, void 0, void 0, function* () {
          n.knownHandle && Ma(t, void 0, n.knownHandle, n);
          const { userData: i, handle: s } = yield sa({
              knownHandle: n.knownHandle,
            }),
            o = Aa.getFullIconURL(
              null === (e = null == i ? void 0 : i.userSettings) || void 0 === e
                ? void 0
                : e.userIcon,
            );
          Ma(t, o, s || n.knownHandle, n);
        });
      }
      function La() {
        (null !== Ia && (clearInterval(Ia), (Ia = null)),
          $a && (window.removeEventListener("focus", $a), ($a = null)),
          ja &&
            (document.removeEventListener("visibilitychange", ja),
            (ja = null)));
      }
      function Ra(t, n) {
        if (null !== Ia) return;
        Sa = Date.now() + 3e5;
        const e = () =>
          Ba(this, void 0, void 0, function* () {
            Date.now() >= Sa
              ? La()
              : yield (function (t, n) {
                  return Ba(this, void 0, void 0, function* () {
                    if (!document.body.contains(t)) return (La(), !1);
                    try {
                      const e = yield co.L(new Hr(ti, Xe, !0));
                      if (null == e ? void 0 : e.signedIn)
                        return (La(), yield Pa(t, n), !0);
                    } catch (t) {}
                    return !1;
                  });
                })(t, n);
          });
        ((Ia = window.setInterval(e, 3e3)),
          ($a = () => {
            e();
          }),
          (ja = () => {
            "visible" === document.visibilityState && e();
          }),
          window.addEventListener("focus", $a),
          document.addEventListener("visibilitychange", ja),
          e());
      }
      function Oa(t, e) {
        return Ba(this, void 0, void 0, function* () {
          if (!e) return;
          const i =
            void 0 !== t.containerStyling && t.containerStyling.length > 0
              ? ` style="${t.containerStyling}"`
              : "";
          e.innerHTML = `<div class="user-identity-root"${i}></div>`;
          const s = e.firstElementChild;
          if (t.knownHandle) return void (yield Pa(s, t));
          let o;
          try {
            o = yield co.L(new Hr(ti, Xe));
          } catch (t) {}
          if (!(null == o ? void 0 : o.signedIn)) {
            s.innerHTML =
              "floating" === t.variant
                ? `\n    <a id="tp-user-login-btn"\n      class="tp-floating-login"\n      href="${n}/signup?ref=allchat" target="_blank" rel="noopener noreferrer">\n      Log in to post\n    </a>\n  `
                : `\n    <a id="tp-user-login-btn"\n      class="tp-login-cta rounded-container"\n      href="${n}/signup?ref=allchat" target="_blank" rel="noopener noreferrer">\n      Login\n    </a>\n  `;
            const e = s.querySelector("#tp-user-login-btn");
            return void (
              e &&
              e.addEventListener("click", () => {
                Ra(s, t);
              })
            );
          }
          yield Pa(s, t);
        });
      }
      function Va(t, n) {
        if (!n) return null;
        const e = t.id || `tp-flair-${Math.random().toString(36).slice(2, 9)}`,
          { staticSrc: i, gifSrc: s } = ia(t.reaction);
        n.innerHTML = (function (t) {
          const { id: n, reaction: e, staticSrc: i, shadowColor: s } = t;
          return `\n    <button\n      id="${n}"\n      class="tp-flair-icon"\n      type="button"\n      data-active="false"\n      aria-pressed="false"\n      aria-label="${e}"\n      style="--tp-flair-shadow-color: ${s};"\n    >\n      <img src="${i}" alt="${e}" />\n    </button>\n  `;
        })({
          id: e,
          reaction: t.reaction,
          staticSrc: i,
          gifSrc: s,
          shadowColor: t.shadowColor,
        });
        const o = document.getElementById(e),
          r = null == o ? void 0 : o.querySelector("img");
        if (!o || !r) return null;
        return (
          (new Image().src = s),
          o.addEventListener("mouseenter", (t) => {
            (t.stopPropagation(), r && (r.src = s));
          }),
          o.addEventListener("mouseleave", (t) => {
            (t.stopPropagation(), r && (r.src = i));
          }),
          o.addEventListener("click", (n) => {
            n.stopPropagation();
            const e = "true" !== o.dataset.active;
            (!(function (t, n) {
              const e = "string" == typeof t ? document.getElementById(t) : t;
              if (!e) return;
              n &&
                (function (t) {
                  const n =
                    t.closest(".tp-flair-row, #tp-flair-row") || document;
                  n.querySelectorAll(
                    ".tp-flair-icon[data-active='true']",
                  ).forEach((n) => {
                    n !== t &&
                      (n.setAttribute("data-active", "false"),
                      n.setAttribute("aria-pressed", "false"));
                  });
                })(e);
              (e.setAttribute("data-active", n ? "true" : "false"),
                e.setAttribute("aria-pressed", n ? "true" : "false"));
            })(o, e),
              t.onClick && t.onClick());
          }),
          o
        );
      }
      function Ua(t, n = document.getElementById("tp-flair-row")) {
        if (!n) return null;
        const e = document.createElement("div");
        return ((e.className = "tp-flair-cell"), n.appendChild(e), Va(t, e));
      }
      class Ha {
        constructor(t, n = 2e3, e) {
          ((this.onRemove = e), (this.duration = n));
          const i = document.createElement("div");
          ((i.className = "allchat-toast"),
            (i.innerHTML = t),
            (i.style.position = "fixed"),
            (i.style.opacity = "0"),
            (i.style.visibility = "hidden"),
            i.addEventListener("mouseenter", () => this.pause()),
            i.addEventListener("mouseleave", () => this.resume()),
            (this.el = i));
        }
        measure() {
          const t = this.el.getBoundingClientRect();
          return { w: Math.ceil(t.width), h: Math.ceil(t.height) };
        }
        reveal() {
          ((this.el.style.visibility = "visible"),
            (this.el.style.opacity = "1"));
        }
        setPosition(t, n) {
          ((this.el.style.left = `${t}px`), (this.el.style.bottom = `${n}px`));
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
                  const n = Math.max(0, t - 0.05);
                  this.el.style.opacity = n.toString();
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
      const Na = new (class {
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
          let n = document.getElementById(this.id);
          (n ||
            ((n = document.createElement("div")),
            (n.id = this.id),
            (n.style.position = "fixed"),
            (n.style.zIndex = "9991"),
            (null != t ? t : document.body).appendChild(n)),
            (this.container = n));
        }
        show(t, n, e) {
          const i =
            null != e
              ? e
              : `toast_${Date.now()}_${Math.random().toString(36).slice(2)}`;
          return (
            this.queue.push({ html: t, duration: n, id: i }),
            this.pump(),
            i
          );
        }
        dismiss(t) {
          const n = this.active.findIndex((n) => n.id === t);
          if (n >= 0) {
            const { toast: t } = this.active[n];
            (t.destroy(), this.active.splice(n, 1), this.pump());
          } else {
            const n = this.queue.findIndex((n) => n.id === t);
            n >= 0 && this.queue.splice(n, 1);
          }
        }
        pump() {
          for (
            this.container || this.ensureContainer();
            this.active.length < this.MAX_ACTIVE && this.queue.length > 0;
          ) {
            const { html: t, duration: n, id: e } = this.queue.shift(),
              i = new Ha(t, n, () => {
                const t = this.active.findIndex((t) => t.toast === i);
                (t >= 0 && this.active.splice(t, 1), this.pump());
              });
            (this.container.appendChild(i.el),
              i.setPosition(this.HORIZ_MARGIN, this.VERT_MARGIN_BOTTOM),
              i.reveal(),
              i.scheduleDismiss(),
              this.active.push({ id: e, toast: i }));
          }
          this.layout();
        }
        layout() {
          if (!this.active.length) return;
          const t = window.innerWidth,
            n = window.innerHeight;
          let e = this.VERT_MARGIN_BOTTOM;
          for (const { toast: i } of this.active) {
            const { w: s, h: o } = i.measure(),
              r = Math.min(
                Math.max(Math.round(0.15 * o), 0),
                Math.max(n - o - this.VERT_MARGIN_BOTTOM, 0),
              ),
              a = Math.min(this.HORIZ_MARGIN, t - s - this.HORIZ_MARGIN),
              u = Math.min(e + r, n - o - this.VERT_MARGIN_BOTTOM);
            (i.setPosition(a, u), (e = u + o + this.TOAST_GAP));
          }
        }
      })();
      function Ga(t, n = 2e3, e) {
        return Na.show(t, n, e);
      }
      class za extends ho {
        constructor(t, n) {
          super(t, n, po.GET_PERM_ID);
        }
      }
      var Za = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const Wa = 120;
      function Qa(t) {
        return `\n        <div id="tp-allchat-chatbox" style="display: flex; flex-direction: column; width: 100%; background-color: black; align-items: flex-end; padding: 12px 20px;">\n            <div class="allchat-chatbox-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n                ${((n = "tp-allchat-logo"), ra('\n        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <mask id="mask0_1785_33205" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">\n            <path d="M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z" fill="#EF3E3A"/>\n            <path d="M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z" fill="#EF3E3A"/>\n            </mask>\n            <g mask="url(#mask0_1785_33205)">\n            <rect width="33" height="33" fill="url(#paint0_linear_1785_33205)"/>\n            </g>\n            <defs>\n            <linearGradient id="paint0_linear_1785_33205" x1="0" y1="0" x2="37.984" y2="7.39309" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#E34248"/>\n            <stop offset="1" stop-color="#9E55A0"/>\n            </linearGradient>\n            </defs>\n        </svg>\n    ', n, e))}\n                ${t.videoControlProps.shouldRender ? '<div id="tp-allchat-chatbox-controls-container" style="display: flex; width: 56px; height: 44px; justify-content: center;"></div>' : ""}\n                <div style="display:flex; align-items:center; position:relative; flex-grow:1">\n                    <div class="tp-chatbox-input-wrapper" style="flex-grow:1; position:relative;">\n                        <input\n                        id="tp-allchat-chatbox-input"\n                        value="${t.curComment}"\n                        type="text"\n                        class="allchat-chatbox-input"\n                        placeholder="Add your comment here"\n                        style="flex-grow:1; padding-left:12px;"\n                        >\n\n                        <div class="tp-input-right-rail">\n                            <div id="tp-flair-row" class="tp-flair-row"></div>\n                            <span id="tp-allchat-chatbox-length" class="allchat-chatbox-length">\n                                ${t.curComment.length}/120\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div style="display: flex; flex-direction: row">\n                    <span\n                        id="tp-allchat-cancel-btn"\n                        class="allchat-chatbox-button rounded-container gray-border"\n                        style="height: 52px; display: flex; align-items: center; margin-right: 6px"\n                    >\n                        Cancel\n                    </span>\n                    \n                    <span\n                        id="tp-allchat-post-btn"\n                        class="allchat-chatbox-button rounded-container gradient-border"\n                        style="font-weight:600; height: 52px; display: flex; align-items: center;"\n                    >\n                        <span class="gradient-200-text">Post</span>\n                    </span>\n                </div>\n                <div id="tp-user-identity" style="margin-left:16px;"></div>\n                ${aa("allchat-chatbox-open-help", "cursor: pointer !important; width: 33px; height: 33px;")}\n                \n                <div id="tp-allchat-message-box" class="allchat-message-box"></div>\n            </div>\n            <a\n                style="font-size: 12px; color: gray; margin-top: 4px; cursor: pointer; padding-bottom: 4px;"\n                class="allchat-underline-text"\n                id="tp-leave-feedback-text"\n                href="https://docs.google.com/forms/d/e/1FAIpQLSdkFbtU1o-vw9LXVG4STZiryRbrcF0j445c3b1EfwNoJYUT7w/viewform?usp=dialog"\n                target="_blank"\n            >\n                Leave Feedback\n            </a>\n        </div>\n    `;
        var n, e;
      }
      function Ya() {
        const t = document.getElementById("tp-flair-row");
        if (t && null !== t.offsetParent)
          for (const n of t.children) {
            const t = n.querySelector("button");
            if ("true" === (null == t ? void 0 : t.getAttribute("data-active")))
              return null == t ? void 0 : t.getAttribute("aria-label");
          }
      }
      function Ja(t, n, e, i) {
        return Za(this, void 0, void 0, function* () {
          const s = document.getElementById("tp-allchat-post-btn");
          try {
            s && (s.textContent = "Posting...");
            const o = new yo(ni, Xe, {
              name: "allchat_message_sent",
              message: { text: n },
              allchat_ui: "legacy",
            });
            co.L(o);
            const r = yield co.L(new za(ni, Xe)),
              a = {
                message: n,
                vidTime: yield t.getVidTime(),
                service: t.service,
                vidId: t.vidId,
                displayName: e,
                vidDuration: t.vidDuration,
                flair: Ya(),
                permId: r,
                extensionVersion: qs,
              },
              u = Ke("comments", "POST", !0, a, i, void 0, !0);
            (t.onPostComment(a),
              t.shouldPlayVideoAfterClose && t.videoControlProps.playVideo(),
              yield u,
              oa("allchat_message_accepted", "legacy"));
          } catch (t) {
            try {
              JSON.parse(t.message).error
                ? oa("allchat_message_rejected", "legacy")
                : (oa("allchat_message_errored", "legacy"),
                  Ga("An error occurred"));
            } catch (n) {
              (oa("allchat_message_errored", "legacy"),
                console.error(`GOT ERROR ${t}`),
                Ga("An error occurred"));
            }
          } finally {
            (t.onCommentEdited(""),
              s && (s.textContent = "Post"),
              (function (t) {
                const n = document.getElementById("tp-allchat-chatbox-length");
                n && (n.innerText = `${t.curComment.length}/120`);
              })(t));
          }
        });
      }
      function Ka(t, n, e, i) {
        return Za(this, void 0, void 0, function* () {
          const s = yield co.L(new Xr(ti, Xe));
          ((i.value = ""),
            t.closeModal(),
            Ja(t, n, e, null == s ? void 0 : s.token));
        });
      }
      function qa(t, n) {
        Oa(
          {
            knownHandle: n,
            onEditClicked: () => {
              t.openChangeHandleModal((n) => qa(t, n));
            },
            onSetHandleClicked: () => {
              t.openSetHandleModal((n) => qa(t, n));
            },
          },
          document.getElementById("tp-user-identity"),
        );
      }
      function Xa() {
        const t = "allchat-feedback-bubble",
          n = "allchat-feedback-bubble-dismissed";
        if ("true" === localStorage.getItem(n)) return;
        const e = localStorage.getItem(t),
          i = e ? JSON.parse(e) : { count: 0, last: 0 },
          { count: s, last: o } = i;
        Date.now() - o >= Math.min(3e5 * Math.pow(2, s), 864e5) &&
          setTimeout(() => {
            if ("true" === localStorage.getItem(n)) return;
            (Ga(
              `\n        <div style="display: flex; flex-direction: column;">\n            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 20px">\n                <span>Want to help All Chat improve? Leave your thoughts here!</span>\n                ${ca("allchat-close-feedback", "transform: translateY(-2px); cursor: pointer;")}\n            </div>\n            <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; gap: 12px;">\n                <span class="allchat-underline-text" \n                      style="font-size: 12px; color: gray; cursor: pointer;" \n                      id="allchat-dont-show-feedback">\n                    Don't Show Again\n                </span>\n                <a class="gradient-200-button leave-feedback-button" target="_blank"\n                   href="https://docs.google.com/forms/d/e/1FAIpQLSdkFbtU1o-vw9LXVG4STZiryRbrcF0j445c3b1EfwNoJYUT7w/viewform?usp=dialog">\n                    Leave Feedback\n                </a>\n            </div>\n        </div>\n    `,
              1e4,
              "feedback-bubble",
            ),
              localStorage.setItem(
                t,
                JSON.stringify({ count: s + 1, last: Date.now() }),
              ));
            const e = document.querySelector(".leave-feedback-button"),
              i = document.getElementById("allchat-dont-show-feedback"),
              o = document.getElementById("allchat-close-feedback"),
              r = () => {
                Na.dismiss("feedback-bubble");
              };
            (e &&
              e.addEventListener("click", () => {
                (localStorage.setItem(n, "true"), r());
              }),
              i &&
                i.addEventListener("click", () => {
                  (localStorage.setItem(n, "true"), r());
                }),
              o && o.addEventListener("click", r));
          }, 3e3);
      }
      function tu(t, n) {
        if (n) {
          ((n.innerHTML = Qa(t)),
            ya(
              t.videoControlProps,
              document.getElementById("tp-allchat-chatbox-controls-container"),
            ),
            qa(t));
          const e = document.getElementById("tp-allchat-chatbox-input"),
            i = document.getElementById("tp-allchat-cancel-btn"),
            s = document.getElementById("tp-allchat-post-btn"),
            o = document.getElementById("allchat-chatbox-open-help"),
            r = document.getElementById("tp-flair-row");
          (r &&
            (Ua(
              { reaction: "heart", shadowColor: "rgba(255, 77, 166, 0.8)" },
              r,
            ),
            Ua({ reaction: "cry", shadowColor: "rgba(9, 239, 247, 1)" }, r),
            Ua(
              { reaction: "surprise", shadowColor: "rgba(255, 216, 77, 0.8)" },
              r,
            )),
            e &&
              (e.addEventListener("focus", (t) => {
                (t.stopPropagation(),
                  localStorage.setItem("allchat-has-focus", "true"));
              }),
              e.addEventListener("blur", () => {
                localStorage.setItem("allchat-has-focus", "false");
              }),
              e.addEventListener("click", (t) => {
                t.stopPropagation();
              }),
              e.addEventListener("keydown", (t) => {
                t.stopPropagation();
              }),
              e.addEventListener("input", (n) => {
                let i = n.target.value;
                (i.length > Wa && ((i = i.substring(0, Wa)), (e.value = i)),
                  t.onCommentEdited(i));
                const s = document.getElementById("tp-allchat-chatbox-length");
                s && (s.innerHTML = `${i.length}/120`);
              })),
            i &&
              i.addEventListener("click", (n) => {
                (n.stopPropagation(),
                  t.shouldPlayVideoAfterClose &&
                    t.videoControlProps.playVideo(),
                  oa("allchat_cancel_post_clicked"),
                  t.closeChatbox());
              }),
            s &&
              s.addEventListener("click", (n) => {
                (n.stopPropagation(),
                  (function (t) {
                    var n;
                    Za(this, void 0, void 0, function* () {
                      const e = yield co.L(new Hr(ti, Xe));
                      oa("allchat_post_button_clicked");
                      const i = document.getElementById(
                          "tp-allchat-chatbox-input",
                        ),
                        s = i.value;
                      if (!s || s.length > 120)
                        return void Ga(
                          "Message must be between 1-120 characters",
                        );
                      if (!(null == e ? void 0 : e.signedIn))
                        return void Ga(
                          "You must be logged in to post to All Chat",
                        );
                      const o =
                        null === (n = null == e ? void 0 : e.currentUser) ||
                        void 0 === n
                          ? void 0
                          : n.handle;
                      o
                        ? yield Ka(t, s, o, i)
                        : t.openSetHandleModal((n) =>
                            Za(this, void 0, void 0, function* () {
                              (qa(t, n), n && (yield Ka(t, s, n, i)));
                            }),
                          );
                    });
                  })(t));
              }),
            o &&
              o.addEventListener("click", (n) => {
                (n.stopPropagation(), t.openHelpModal());
              }),
            Xa());
        }
      }
      class nu {
        constructor(t) {
          ((this.host = null), (this.onKeyDownRef = null), (this.props = t));
        }
        getCloseSelector() {
          return "#tp-allchat-modal-close";
        }
        open(t) {
          if (!t) return;
          this.host = t;
          const n = this.getHtml(),
            e = this.props.containerStyling
              ? `style="${this.props.containerStyling}"`
              : "";
          ((this.host.innerHTML = `\n      <div id="tp-allchat-modal" class="allchat-modal-container" ${e}>\n        <div id="allchat-modal-content" class="allchat-modal-content">\n          ${n}\n        </div>\n      </div>\n    `),
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
            const n = document.querySelector(t);
            n &&
              n.addEventListener("click", (t) => {
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
          const n = document.getElementById("allchat-modal-content");
          n && (n.innerHTML = t);
        }
      }
      var eu = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const iu = /^[\w.]+$/;
      class su extends nu {
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
          return `\n      <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          ${ca(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <div class="allchat-modal-body" style="padding:16px;">Loading…</div>\n      </div>\n    `;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        loadAndRender() {
          var t, n, e, i, s;
          return eu(this, void 0, void 0, function* () {
            try {
              const o = yield co.L(new Hr(ti, Xe)),
                r = Aa.getFullIconURL(
                  null === (t = null == o ? void 0 : o.userSettings) ||
                    void 0 === t
                    ? void 0
                    : t.userIcon,
                ),
                a =
                  null !==
                    (e =
                      null === (n = null == o ? void 0 : o.currentUser) ||
                      void 0 === n
                        ? void 0
                        : n.handle) && void 0 !== e
                    ? e
                    : "",
                u = yield co.L(new Xr(ni, Xe)),
                c = yield Ke(
                  "handles/me",
                  "GET",
                  !0,
                  void 0,
                  null == u ? void 0 : u.token,
                ),
                l =
                  null !==
                    (s =
                      null === (i = null == c ? void 0 : c.data) || void 0 === i
                        ? void 0
                        : i.changesRemaining) && void 0 !== s
                    ? s
                    : 0;
              (this.setContent(this.getFormHtml(a, l, r)),
                this.bindFormEvents(l));
            } catch (t) {
              (console.error(t),
                (this.loadFailed = !0),
                this.setContent(
                  `\n        <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n          <div style="display:flex; justify-content:flex-end; width:100%;">\n            ${ca(this.ID_CLOSE, "cursor: pointer !important;")}\n          </div>\n          <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n            Failed to load profile. Please try again later.\n          </div>\n        </div>\n      `,
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
        getFormHtml(t, n, e) {
          const i = t.replace(/"/g, "&quot;"),
            s = n <= 0,
            o = e
              ? `<img src="${e}" alt="Avatar"\n            style="width:100%; height:100%; opacity:0.9; border-radius:50%; object-fit:cover;" />`
              : '<div style="\n            width:100%; height:100%; border-radius:50%;\n            border:2px solid #aaa; color:#aaa;\n            display:flex; align-items:center; justify-content:center;\n            font-size:12px; text-align:center;\n          ">No Profile</div>',
            r = s
              ? "You've used all of your handle changes. Your handle is now permanent."
              : `You have ${n} handle change${1 === n ? "" : "s"} remaining.`;
          return `\n    <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n\n      \x3c!-- Header --\x3e\n      <div style="display:flex; justify-content:flex-end; width:100%;">\n        ${ca(this.ID_CLOSE, "cursor: pointer !important;")}\n      </div>\n\n      \x3c!-- Avatar (opens Edit Profile Picture) --\x3e\n      <div id="${this.ID_AVATAR}" style="position:relative; width:100px; height:100px; margin-top:8px; margin-bottom:28px; cursor:pointer;">\n        <div style="\n          width:100px; height:100px;\n          border-radius:50%;\n          overflow:hidden;\n          background:#545454;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n        ">\n          ${o}\n        </div>\n        <div style="\n          position:absolute; bottom:0; right:0;\n          width:32px; height:32px; border-radius:50%;\n          background:#5B6CFF;\n          display:flex; align-items:center; justify-content:center;\n          pointer-events:none;\n        ">\n          ${ra('<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g clip-path="url(#clip0_4816_39661)">\n        <path d="M13.6125 3.71115C13.6019 3.46323 13.5422 3.21988 13.4367 2.99525C13.3312 2.77063 13.1822 2.56921 12.9982 2.4027L10.9024 0.491859C10.532 0.155063 10.0431 -0.021092 9.54292 0.0020177C9.04278 0.0251274 8.57221 0.245615 8.23439 0.615139L7.05552 1.90748C7.03535 1.92508 7.01617 1.94378 6.99808 1.96352C6.98057 1.98313 6.96446 2.00344 6.94905 2.02446L1.86655 7.59938C1.68313 7.80128 1.54508 8.04012 1.46169 8.29983L0.438321 11.5338C0.348806 11.8165 0.327026 12.1163 0.374738 12.409C0.422451 12.7017 0.538319 12.9791 0.712988 13.2187C0.887657 13.4583 1.11623 13.6535 1.38025 13.7886C1.64428 13.9236 1.93635 13.9946 2.23289 13.9959C2.48868 13.9963 2.74192 13.9451 2.97747 13.8453L6.0945 12.5229C6.34472 12.4161 6.56922 12.257 6.75292 12.0564L13.1208 5.07074C13.2888 4.88806 13.4188 4.67378 13.5033 4.44036C13.5877 4.20694 13.6248 3.95906 13.6125 3.71115V3.71115ZM5.72115 11.1136C5.67358 11.1658 5.61528 11.2071 5.55024 11.2347L2.43182 12.56C2.34517 12.5978 2.24946 12.6097 2.1562 12.5943C2.06295 12.5789 1.97613 12.5369 1.90619 12.4733C1.83625 12.4097 1.78618 12.3273 1.76199 12.2359C1.73781 12.1446 1.74055 12.0482 1.76989 11.9583L2.79325 8.72361C2.81472 8.65546 2.85081 8.59283 2.89902 8.54009L7.56545 3.42186L10.3925 5.99253L5.72115 11.1136ZM12.0897 4.12792L11.3332 4.95796L8.50546 2.39009L9.26616 1.55585C9.30962 1.50793 9.36214 1.46909 9.42069 1.44156C9.47924 1.41403 9.54265 1.39836 9.60728 1.39545H9.6304C9.75297 1.39526 9.87118 1.44099 9.96171 1.52363L12.0575 3.43447C12.1055 3.47788 12.1444 3.53037 12.1721 3.5889C12.1997 3.64744 12.2155 3.71087 12.2185 3.77554C12.2215 3.8402 12.2116 3.90482 12.1895 3.96566C12.1674 4.0265 12.1335 4.08236 12.0897 4.13002V4.12792Z" fill="#FAFAFA"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_4816_39661">\n        <rect width="14" height="14" fill="white"/>\n        </clipPath>\n        </defs>\n        </svg>\n        ', a, u, c)}\n        </div>\n      </div>\n\n      \x3c!-- Form --\x3e\n      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">\n        <span class="user-pill-name" style="padding-left:4px; font-size:16px; color:#e0e0e0;">Change Handle</span>\n        <div style="\n          display:flex; align-items:center; gap:2px; background:#1f1f1f;\n          border-radius:4px; padding-left:14px; height:48px; ${s ? "opacity:0.5;" : ""}">\n          <span style="color:white; font-size:18px;">@</span>\n          <input\n            id="${this.ID_INPUT}"\n            type="text"\n            value="${i}"\n            placeholder="username"\n            maxlength="32"\n            autocomplete="off"\n            aria-label="Handle"\n            ${s ? "disabled" : ""}\n            style="flex:1; background:transparent; border:none; outline:none; color:white; font-size:18px; ${s ? "cursor:not-allowed;" : ""}"\n          />\n        </div>\n        <span class="user-pill-name" style="padding-left:4px; font-size:13px; ${s ? "color:#e34248;" : "color:#8a8a8a;"}">${r}</span>\n        <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none;"></span>\n        <span id="${this.ID_STATUS}" class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a; display:none;"></span>\n      </div>\n\n      \x3c!-- Actions --\x3e\n      <div style="display:flex; flex-direction:column; width:100%; margin-top:24px; align-items:center">\n        <button id="${this.ID_SUBMIT}" class="gradient-200-button"\n          ${s ? "disabled" : ""}\n          style="height:48px; border-radius:4px; font-weight:700; cursor:${s ? "not-allowed" : "pointer"}; border:none; outline:none; width:100%; ${s ? "opacity:0.5;" : ""}">\n          Save Changes\n        </button>\n      </div>\n\n    </div>\n    `;
          var a, u, c;
        }
        setError(t) {
          const n = document.getElementById(this.ID_ERROR);
          n && ((n.textContent = t), (n.style.display = t ? "block" : "none"));
        }
        setStatus(t) {
          const n = document.getElementById(this.ID_STATUS);
          n && ((n.textContent = t), (n.style.display = t ? "block" : "none"));
        }
        setSubmitting(t, n, e) {
          ((this.isSubmitting = t),
            (n.disabled = t),
            (e.disabled = t),
            (e.style.opacity = t ? "0.6" : "1"),
            (n.textContent = t ? "Checking handle..." : "Save Changes"),
            (n.style.cursor = t ? "wait" : "pointer"));
          const i = document.getElementById(this.ID_AVATAR);
          (i &&
            ((i.style.pointerEvents = t ? "none" : "auto"),
            (i.style.opacity = t ? "0.6" : "1")),
            this.setStatus(
              t ? "Verifying your handle — this can take a few seconds." : "",
            ));
        }
        bindFormEvents(t) {
          const n = document.getElementById(this.ID_CLOSE),
            e = document.getElementById(this.ID_SUBMIT),
            i = document.getElementById(this.ID_INPUT),
            s = document.getElementById(this.ID_AVATAR);
          (n &&
            n.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            s &&
              s.addEventListener("click", (t) => {
                (t.stopPropagation(),
                  this.isSubmitting ||
                    (super.close(), this.props.onEditAvatarClicked()));
              }),
            t <= 0 ||
              (i &&
                (i.addEventListener("click", (t) => t.stopPropagation()),
                i.addEventListener("keydown", (t) => {
                  (t.stopPropagation(),
                    "Enter" === t.key &&
                      (t.preventDefault(),
                      e && !this.isSubmitting && this.onSubmit(e, i)));
                }),
                i.addEventListener("input", () => this.setError(""))),
              e &&
                i &&
                e.addEventListener("click", (t) =>
                  eu(this, void 0, void 0, function* () {
                    (t.stopPropagation(), yield this.onSubmit(e, i));
                  }),
                )));
        }
        onSubmit(t, n) {
          return eu(this, void 0, void 0, function* () {
            if (this.isSubmitting) return;
            const e = n.value.trim().replace(/^@+/, "").toLowerCase();
            if (
              (function (t) {
                return t.length >= 2 && t.length <= 32 && iu.test(t);
              })(e)
            ) {
              (this.setSubmitting(!0, t, n), this.setError(""));
              try {
                const t = yield co.L(new Xr(ni, Xe));
                (yield Ke(
                  "handles",
                  "PUT",
                  !0,
                  { handle: e },
                  null == t ? void 0 : t.token,
                ),
                  co.L(new ta(ni, Xe, e)),
                  (this.isSubmitting = !1),
                  this.close(),
                  this.props.onHandleChanged(e));
              } catch (e) {
                const i = null == e ? void 0 : e.status;
                (409 === i
                  ? this.setError(
                      "That handle is unavailable or already yours. Try another one.",
                    )
                  : 422 === i
                    ? this.setError(
                        "That handle is inappropriate. Try another one.",
                      )
                    : 400 === i
                      ? this.setError(
                          "That handle isn't valid. Try another one.",
                        )
                      : 403 === i
                        ? this.setError(
                            "You've used all of your handle changes.",
                          )
                        : this.setError(
                            "Something went wrong. Please try again later.",
                          ),
                  this.setSubmitting(!1, t, n));
              }
            } else
              this.setError(
                'Handles must be 2-32 characters and use only letters, numbers, "." or "_".',
              );
          });
        }
      }
      class ou extends ho {
        constructor(t, n, e) {
          (super(t, n, po.UPDATE_USER_SETTINGS), (this.data = e));
        }
      }
      var ru = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class au extends nu {
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
            (this.selectedIcon = Fa[0]),
            (this.selectedUpload = null),
            (this.uploadPreviewUrl = null),
            (this.currentPage = 0),
            (this.loadFailed = !1));
        }
        open(t) {
          (super.open(t), this.loadAndRender());
        }
        close() {
          var t, n;
          this.revokeUploadPreviewUrl();
          const e = this.loadFailed;
          (super.close(),
            e
              ? null === (n = (t = this.props).onLoadErrorDismiss) ||
                void 0 === n ||
                n.call(t)
              : this.props.closeModal());
        }
        getHtml() {
          return `\n            <div style="display:flex; flex-direction:column; width:520px; padding:30px 34px;">\n                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">\n                    <span style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">Edit Profile Picture</span>\n                    ${ca(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                </div>\n                <div class="allchat-modal-body" style="padding:36px 0; text-align:center;">Loading...</div>\n            </div>\n        `;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        loadAndRender() {
          var t;
          return ru(this, void 0, void 0, function* () {
            try {
              const n = yield co.L(new Hr(ti, Xe)),
                e =
                  null === (t = null == n ? void 0 : n.userSettings) ||
                  void 0 === t
                    ? void 0
                    : t.userIcon;
              this.selectedIcon = e || Fa[0];
              const i =
                (e ? Aa.getFullIconURL(e) : void 0) ||
                e ||
                chrome.runtime.getURL("img/icons/" + this.selectedIcon);
              ((this.currentPage = this.getPageForIcon(this.selectedIcon)),
                this.setContent(this.getFormHtml(i)),
                this.bindFormEvents());
            } catch (t) {
              (console.error(t),
                (this.loadFailed = !0),
                this.setContent(
                  `\n                <div style="display:flex; flex-direction:column; width:100%; align-items:center;">\n                    <div style="display:flex; justify-content:flex-end; width:100%;">\n                        ${ca(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                    </div>\n                    <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n                        Failed to load profile picture. Please try again later.\n                    </div>\n                </div>\n            `,
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
          return `\n            <div style="display:flex; flex-direction:column; width:520px; padding:30px 34px;">\n                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">\n                    <span style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">Edit Profile Picture</span>\n                    ${ca(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                </div>\n\n                <div style="display:flex; justify-content:center; margin-top:26px;">\n                    <div style="width:112px; height:112px; border-radius:50%; overflow:hidden; background:#8b92a3;">\n                        <img id="${this.ID_PREVIEW}" src="${t}" alt="Selected avatar" style="width:100%; height:100%; object-fit:cover; display:block;" />\n                    </div>\n                </div>\n\n                <span style="margin-top:28px; color:#b9b9c2; font-size:17px; font-weight:400;">Choose an avatar</span>\n\n                <div style="display:flex; align-items:center; gap:12px; margin-top:18px; width:100%;">\n                    <button id="${this.ID_PREV_PAGE}" type="button" aria-label="Previous avatars" style="\n                        width:34px; height:76px; border-radius:10px; border:1px solid #4f515c;\n                        background:#151515; color:#ffffff; font-size:22px; cursor:pointer;\n                    ">&lsaquo;</button>\n\n                    <div style="flex:1; overflow:hidden;">\n                        <div id="${this.ID_AVATAR_GRID}" style="\n                            display:grid; grid-template-columns:repeat(5, 64px); justify-content:space-between; row-gap:14px;\n                            transition: opacity 160ms ease, transform 160ms ease;\n                            opacity:1; transform:translateX(0);\n                        ">\n                        ${this.getAvatarGridHtml()}\n                        </div>\n                    </div>\n\n                    <button id="${this.ID_NEXT_PAGE}" type="button" aria-label="Next avatars" style="\n                        width:34px; height:76px; border-radius:10px; border:1px solid #4f515c;\n                        background:#151515; color:#ffffff; font-size:22px; cursor:pointer;\n                    ">&rsaquo;</button>\n                </div>\n                <span id="${this.ID_PAGE_LABEL}" style="align-self:center; margin-top:10px; color:#8f9099; font-size:13px; font-weight:500;">\n                    ${this.getPageLabel()}\n                </span>\n\n                <button id="${this.ID_UPLOAD}" type="button" style="\n                    margin-top:24px; width:100%; height:54px; border-radius:14px;\n                    border:2px solid #5e606b; background:transparent; color:#ffffff;\n                    display:flex; align-items:center; justify-content:center; gap:14px;\n                    font-size:18px; font-weight:700; cursor:pointer;\n                ">\n                    <span aria-hidden="true" style="font-size:18px;">&#x2B06;&#xFE0F;</span>\n                    <span>Upload your own picture</span>\n                </button>\n                <input id="${this.ID_UPLOAD_INPUT}" type="file" accept="image/png,image/jpeg,image/webp,image/gif" style="display:none;" />\n\n                <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none; margin-top:12px;"></span>\n\n                <button id="${this.ID_SAVE}" class="gradient-200-button" type="button" style="\n                    margin-top:22px; width:100%; height:56px; border-radius:14px;\n                    border:none; color:#ffffff; font-size:18px; font-weight:700; cursor:pointer;\n                ">Save</button>\n\n                <button id="${this.ID_CANCEL}" type="button" style="\n                    align-self:center; margin-top:18px; border:none; background:transparent;\n                    color:#b9b9c2; font-size:16px; font-weight:600; cursor:pointer;\n                ">Cancel</button>\n            </div>\n        `;
        }
        getAvatarButtonHtml(t) {
          return `\n            <button type="button" class="allchat-edit-picture-avatar" data-icon="${t}" aria-label="Choose avatar" style="\n                width:64px; height:64px; border-radius:50%; background:#1f1f1f;\n                border:${t === this.selectedIcon ? "4px solid #ffffff" : "2px solid transparent"};\n                outline:none; cursor:pointer; padding:4px; overflow:hidden;\n            ">\n                <img src="${chrome.runtime.getURL("img/icons/" + t)}" alt="" style="width:100%; height:100%; object-fit:contain; display:block;" />\n            </button>\n        `;
        }
        get totalPages() {
          return Math.max(1, Math.ceil(Fa.length / 10));
        }
        getPageForIcon(t) {
          const n = Fa.indexOf(t);
          return n < 0 ? 0 : Math.floor(n / 10);
        }
        getVisibleIcons() {
          const t = 10 * this.currentPage;
          return Fa.slice(t, t + 10);
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
          const n = document.getElementById(this.ID_ERROR);
          n && ((n.textContent = t), (n.style.display = t ? "block" : "none"));
        }
        setPreview(t, n = t) {
          (this.revokeUploadPreviewUrl(),
            (this.selectedIcon = t),
            (this.selectedUpload = null));
          const e = document.getElementById(this.ID_PREVIEW);
          (e && (e.src = n),
            document
              .querySelectorAll(".allchat-edit-picture-avatar")
              .forEach((n) => {
                const e = n.dataset.icon === t;
                n.style.border = e
                  ? "4px solid #ffffff"
                  : "2px solid transparent";
              }));
        }
        setUploadPreview(t, n) {
          this.selectedUpload = t;
          const e = document.getElementById(this.ID_PREVIEW);
          (e && (e.src = n),
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
            n = document.getElementById(this.ID_SAVE),
            e = document.getElementById(this.ID_UPLOAD),
            i = document.getElementById(this.ID_UPLOAD_INPUT),
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
            null == e ||
              e.addEventListener("click", (t) => {
                (t.stopPropagation(), null == i || i.click());
              }),
            null == i ||
              i.addEventListener("change", () => {
                var t;
                const n =
                  null === (t = i.files) || void 0 === t ? void 0 : t[0];
                if (n) {
                  if (!n.type.startsWith("image/"))
                    return (
                      this.setError("Please choose a valid image file."),
                      void (i.value = "")
                    );
                  (this.revokeUploadPreviewUrl(),
                    (this.uploadPreviewUrl = URL.createObjectURL(n)),
                    this.setError(""),
                    this.setUploadPreview(n, this.uploadPreviewUrl));
                }
              }),
            null == n ||
              n.addEventListener("click", (t) =>
                ru(this, void 0, void 0, function* () {
                  (t.stopPropagation(), yield this.onSave(n));
                }),
              ));
        }
        bindAvatarButtons() {
          document
            .querySelectorAll(".allchat-edit-picture-avatar")
            .forEach((t) => {
              t.addEventListener("click", (n) => {
                n.stopPropagation();
                const e = t.dataset.icon;
                e &&
                  (this.setError(""),
                  this.setPreview(e, chrome.runtime.getURL("img/icons/" + e)));
              });
            });
        }
        setAvatarPage(t, n) {
          this.currentPage = (t + this.totalPages) % this.totalPages;
          const e = document.getElementById(this.ID_AVATAR_GRID);
          e &&
            ((e.style.opacity = "0"),
            (e.style.transform = `translateX(${-18 * n}px)`),
            window.setTimeout(() => {
              ((e.innerHTML = this.getAvatarGridHtml()),
                (e.style.transition = "none"),
                (e.style.transform = `translateX(${18 * n}px)`),
                window.requestAnimationFrame(() => {
                  ((e.style.transition =
                    "opacity 160ms ease, transform 160ms ease"),
                    (e.style.opacity = "1"),
                    (e.style.transform = "translateX(0)"));
                }),
                this.bindAvatarButtons());
            }, 160));
          const i = document.getElementById(this.ID_PAGE_LABEL);
          i && (i.textContent = this.getPageLabel());
        }
        onSave(t) {
          return ru(this, void 0, void 0, function* () {
            ((t.disabled = !0),
              (t.textContent = "Saving..."),
              this.setError(""));
            try {
              let t = this.selectedIcon;
              if (this.selectedUpload) {
                const n = yield co.L(new Xr(ni, Xe)),
                  e = new FormData();
                e.append("profilePicture", this.selectedUpload);
                t = `/${yield Ke("upload-profile", "POST", !0, e, null == n ? void 0 : n.token)}?lastmod=${Date.now()}`;
              }
              (yield co.L(new ou(ni, Xe, { userIcon: t })),
                this.close(),
                this.props.onProfilePictureChanged());
            } catch (n) {
              (console.error(n),
                this.setError("Something went wrong. Please try again later."),
                (t.disabled = !1),
                (t.textContent = "Save"));
            }
          });
        }
      }
      var uu = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const cu = /^[\w.]+$/;
      class lu extends nu {
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
          return `\n      <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          ${ca(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <div class="allchat-modal-body" style="padding:16px;">Loading…</div>\n      </div>\n    `;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.ID_CLOSE);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
        }
        loadAndRender() {
          var t, n;
          return uu(this, void 0, void 0, function* () {
            try {
              const e = yield co.L(new Hr(ti, Xe, !0)),
                i =
                  null === (t = null == e ? void 0 : e.currentUser) ||
                  void 0 === t
                    ? void 0
                    : t.handle;
              if (i)
                return (
                  co.L(new ta(ni, Xe, i)),
                  this.close(),
                  void this.props.onHandleSet(i)
                );
              const s = Aa.getFullIconURL(
                null === (n = null == e ? void 0 : e.userSettings) ||
                  void 0 === n
                  ? void 0
                  : n.userIcon,
              );
              (this.setContent(this.getFormHtml(s)), this.bindFormEvents());
            } catch (t) {
              (console.error(t),
                (this.loadFailed = !0),
                this.setContent(
                  `\n        <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n          <div style="display:flex; justify-content:flex-end; width:100%;">\n            ${ca(this.ID_CLOSE, "cursor: pointer !important;")}\n          </div>\n          <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n            Failed to load profile. Please try again later.\n          </div>\n        </div>\n      `,
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
          const n = t
            ? `<img src="${t}" alt="Avatar"\n            style="width:100%; height:100%; opacity:0.9; border-radius:50%; object-fit:cover;" />`
            : '<div style="\n            width:100%; height:100%; border-radius:50%;\n            border:2px solid #aaa; color:#aaa;\n            display:flex; align-items:center; justify-content:center;\n            font-size:12px; text-align:center;\n          ">No Profile</div>';
          return `\n    <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n\n      \x3c!-- Header --\x3e\n      <div style="display:flex; justify-content:flex-end; width:100%;">\n        ${ca(this.ID_CLOSE, "cursor: pointer !important;")}\n      </div>\n\n      \x3c!-- Avatar --\x3e\n      <div style="position:relative; width:100px; height:100px; margin-top:8px; margin-bottom:28px;">\n        <div style="\n          width:100px; height:100px;\n          border-radius:50%;\n          overflow:hidden;\n          background:#545454;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n        ">\n          ${n}\n        </div>\n      </div>\n\n      \x3c!-- Form --\x3e\n      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">\n        <span class="user-pill-name" style="padding-left:4px; font-size:16px; color:#e0e0e0;">Choose your Handle</span>\n        <div style="\n          display:flex; align-items:center; gap:2px; background:#1f1f1f;\n          border-radius:4px; padding-left:14px; height:48px;">\n          <span style="color:white; font-size:18px;">@</span>\n          <input\n            id="${this.ID_INPUT}"\n            type="text"\n            placeholder="username"\n            maxlength="32"\n            autocomplete="off"\n            aria-label="Handle"\n            style="flex:1; background:transparent; border:none; outline:none; color:white; font-size:18px;"\n          />\n        </div>\n        <span class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a;">\n          You can change your handle up to 3 times after this, so choose wisely.\n        </span>\n        <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none;"></span>\n        <span id="${this.ID_STATUS}" class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a; display:none;"></span>\n      </div>\n\n      \x3c!-- Actions --\x3e\n      <div style="display:flex; flex-direction:column; width:100%; margin-top:24px; align-items:center">\n        <button id="${this.ID_SUBMIT}" class="gradient-200-button"\n          style="height:48px; border-radius:4px; font-weight:700; cursor:pointer; border:none; outline:none; width:100%">\n          Submit\n        </button>\n      </div>\n\n    </div>\n    `;
        }
        setError(t) {
          const n = document.getElementById(this.ID_ERROR);
          n && ((n.textContent = t), (n.style.display = t ? "block" : "none"));
        }
        setStatus(t) {
          const n = document.getElementById(this.ID_STATUS);
          n && ((n.textContent = t), (n.style.display = t ? "block" : "none"));
        }
        setSubmitting(t, n, e) {
          ((this.isSubmitting = t),
            (n.disabled = t),
            (e.disabled = t),
            (e.style.opacity = t ? "0.6" : "1"),
            (n.textContent = t ? "Checking handle..." : "Submit"),
            (n.style.cursor = t ? "wait" : "pointer"),
            this.setStatus(
              t ? "Verifying your handle — this can take a few seconds." : "",
            ));
        }
        bindFormEvents() {
          const t = document.getElementById(this.ID_CLOSE),
            n = document.getElementById(this.ID_SUBMIT),
            e = document.getElementById(this.ID_INPUT);
          (t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            e &&
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
                uu(this, void 0, void 0, function* () {
                  (t.stopPropagation(), yield this.onSubmit(n, e));
                }),
              ));
        }
        onSubmit(t, n) {
          return uu(this, void 0, void 0, function* () {
            if (this.isSubmitting) return;
            const e = n.value.trim().replace(/^@+/, "").toLowerCase();
            if (
              !(function (t) {
                return t.length >= 2 && t.length <= 32 && cu.test(t);
              })(e)
            )
              return void this.setError(
                'Handles must be 2-32 characters and use only letters, numbers, "." or "_".',
              );
            let i;
            (this.setSubmitting(!0, t, n), this.setError(""));
            try {
              const t = yield co.L(new Xr(ni, Xe));
              ((i = null == t ? void 0 : t.token),
                yield Ke("handles", "POST", !0, { handle: e }, i),
                co.L(new ta(ni, Xe, e)),
                (this.isSubmitting = !1),
                this.close(),
                this.props.onHandleSet(e));
            } catch (e) {
              const s = null == e ? void 0 : e.status,
                o = (function (t) {
                  try {
                    const n =
                      "string" == typeof (null == t ? void 0 : t.message)
                        ? JSON.parse(t.message)
                        : null == t
                          ? void 0
                          : t.message;
                    if ("string" == typeof (null == n ? void 0 : n.data))
                      return n.data;
                    if ("string" == typeof n) return n;
                  } catch (t) {}
                  return "string" == typeof (null == t ? void 0 : t.message)
                    ? t.message
                    : "";
                })(e);
              if (409 === s) {
                const t = yield this.recoverExistingHandle(i);
                if (t || /already set/i.test(o)) {
                  if (t)
                    return (
                      co.L(new ta(ni, Xe, t)),
                      (this.isSubmitting = !1),
                      this.close(),
                      void this.props.onHandleSet(t)
                    );
                  this.setError(
                    "You already have a handle. Close and try again.",
                  );
                } else
                  this.setError(
                    "That handle is already taken. Try another one.",
                  );
              } else
                422 === s
                  ? this.setError(
                      "That handle is inappropriate. Try another one.",
                    )
                  : 400 === s
                    ? this.setError("That handle isn't valid. Try another one.")
                    : this.setError(
                        "Something went wrong. Please try again later.",
                      );
              this.setSubmitting(!1, t, n);
            }
          });
        }
        recoverExistingHandle(t) {
          var n;
          return uu(this, void 0, void 0, function* () {
            try {
              const e = yield Ke("handles/me", "GET", !0, void 0, t);
              return (
                (null === (n = null == e ? void 0 : e.data) || void 0 === n
                  ? void 0
                  : n.handle) || void 0
              );
            } catch (t) {
              return;
            }
          });
        }
      }
      class hu extends nu {
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
            n = t ? "Disable All Chat" : "Enable All Chat",
            e = t ? "allchat-toggle--disable" : "allchat-toggle--enable";
          return `\n    <div style="\n      display:flex; flex-direction:column; width:470px; height:600px;\n      position:relative; overflow:hidden; background-color:rgba(0,0,0,0.9);\n      font-family:'Poppins', sans-serif; padding-bottom:76px; box-sizing:border-box;\n    ">\n      <div style="display:flex; padding-bottom:6px; flex-direction:row; align-items:center; justify-content:space-between; width:100%;">\n        <div style="display:flex; flex-direction:row; align-items:center">\n          <span class="allchat-modal-header" style="margin-right:8px;">Introducing All Chat</span>\n          ${ra('<svg width="45" height="19" viewBox="0 0 45 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="45" height="19" rx="9.5" fill="#FBC45A"/>\n            <path d="M13.58 9.704C14.052 9.792 14.44 10.028 14.744 10.412C15.048 10.796 15.2 11.236 15.2 11.732C15.2 12.18 15.088 12.576 14.864 12.92C14.648 13.256 14.332 13.52 13.916 13.712C13.5 13.904 13.008 14 12.44 14H8.828V5.624H12.284C12.852 5.624 13.34 5.716 13.748 5.9C14.164 6.084 14.476 6.34 14.684 6.668C14.9 6.996 15.008 7.368 15.008 7.784C15.008 8.272 14.876 8.68 14.612 9.008C14.356 9.336 14.012 9.568 13.58 9.704ZM10.508 9.08H12.044C12.444 9.08 12.752 8.992 12.968 8.816C13.184 8.632 13.292 8.372 13.292 8.036C13.292 7.7 13.184 7.44 12.968 7.256C12.752 7.072 12.444 6.98 12.044 6.98H10.508V9.08ZM12.2 12.632C12.608 12.632 12.924 12.536 13.148 12.344C13.38 12.152 13.496 11.88 13.496 11.528C13.496 11.168 13.376 10.888 13.136 10.688C12.896 10.48 12.572 10.376 12.164 10.376H10.508V12.632H12.2ZM18.2189 6.98V9.08H21.0389V10.412H18.2189V12.632H21.3989V14H16.5389V5.612H21.3989V6.98H18.2189ZM28.6257 5.624V6.98H26.3937V14H24.7137V6.98H22.4817V5.624H28.6257ZM34.9874 12.404H31.6514L31.0994 14H29.3354L32.3474 5.612H34.3034L37.3154 14H35.5394L34.9874 12.404ZM34.5314 11.06L33.3194 7.556L32.1074 11.06H34.5314Z" fill="#050505"/>\n        </svg>\n        ', i, s)}\n        </div>\n        ${ca(this.CLOSE_ID, "cursor: pointer !important;")}\n      </div>\n\n      <span class="allchat-modal-body" style="color:#a0a0a0; margin-top:6px;">\n        Teleparty All Chat is a beta feature that allows viewers to engage with each other by leaving short comments on videos they watch.\n      </span>\n\n      <div class="allchat-scrollbox" style="\n        display:flex; flex-direction:column; background-color:#282828; padding:16px; margin-top:20px;\n        flex:1 1 auto; overflow-y:auto; border-radius:8px;\n      ">\n        <img style="margin-bottom:20px; max-width:100%; height:auto;" src="${chrome.runtime.getURL("img/allchat_comment.png")}" />\n\n        <span class="allchat-modal-subheader">How do I turn this feature on/off?</span>\n        <span class="allchat-modal-body">\n          To disable All Chat, press the ${la("", "width: 26px; height: 26px; transform: translateY(25%);")} button on the top right of the video.\n          To enable it, press ${ha("", "width: 26px; height: 26px; transform: translateY(25%);")}.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">How do I add a comment to the video?</span>\n        <span class="allchat-modal-body">\n          To add comments to the video, sign in to teleparty and press the ${da("", "width: 26px; height: 26px; transform: translateY(25%);")} button on the top right of the video.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">Who sees these comments?</span>\n        <span class="allchat-modal-body">\n          Comments are shown to <span style="font-weight:700">all Teleparty users</span>. This chat is global unlike the typical Teleparty chat.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">Will I see comments when I'm not in a party?</span>\n        <span class="allchat-modal-body">\n          Yes, comments are shown whenever allchat is enabled, including when you are not in a party. By default, allchat is turned off.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">When will my comments show up for other users?</span>\n        <span class="allchat-modal-body">\n          Comments will show up for other users after about a minute.\n        </span>\n      </div>\n\n      <div style="\n        position:absolute; left:0; right:0; bottom:0;\n        display:flex; flex-direction:row; gap:10px; align-items:stretch;\n        padding:6px; background-color:rgba(0,0,0,0.9);\n        border-top:1px solid rgba(255,255,255,0.08);\n      ">\n        <span id="${this.TOGGLE_ID}" class="allchat-toggle-btn ${e}">${n}</span>\n        <span id="${this.CONTINUE_ID}" class="gradient-200-button" style="\n          flex:1 1 0; display:inline-flex; align-items:center; justify-content:center; white-space:nowrap;\n        ">Continue</span>\n      </div>\n    </div>`;
          var i, s;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.CONTINUE_ID),
            n = document.getElementById(this.TOGGLE_ID);
          (t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            n &&
              n.addEventListener("click", (t) => {
                (t.stopPropagation(), this.props.toggleLiveChat());
                this.props.getLiveChatShowing()
                  ? (n.classList.remove("allchat-toggle--enable"),
                    n.classList.add("allchat-toggle--disable"),
                    (n.textContent = "Disable All Chat"))
                  : (n.classList.remove("allchat-toggle--disable"),
                    n.classList.add("allchat-toggle--enable"),
                    (n.textContent = "Enable All Chat"));
              }));
        }
      }
      const du = [
          "Messages should be relevant to the content and must not contain spoilers, spam, or advertisements",
          "Messages must not be rude, inappropriate, or hateful",
          "Messages are shown to ALL Teleparty users, not just those in your current party if you are in one",
        ],
        pu = [
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
      class fu extends nu {
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
        checkboxHtml(t, n) {
          var e;
          return `\n      <label for="${n}" style="display:flex; align-items:center; margin-bottom:8px;">\n        <input type="checkbox" id="${n}" data-teleparty-guidelines="true" ${(null === (e = this.props.boxesChecked) || void 0 === e ? void 0 : e.includes(n)) ? "checked" : ""} style="margin-right:8px;" />\n        <span class="allchat-checkbox-text">${t}</span>\n      </label>\n    `;
        }
        getHtml() {
          if (this.props.viewOnly) {
            const t = du
              .map(
                (t) =>
                  `\n        <div style="display:flex; gap:10px; align-items:flex-start; margin-bottom:12px;">\n          <span style="color:#e34248; font-weight:700; line-height:1.4;">•</span>\n          <span class="allchat-checkbox-text" style="line-height:1.4;">${t}</span>\n        </div>\n      `,
              )
              .join("");
            return `\n      <div style="display:flex; flex-direction:column; width:470px;">\n        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">\n          <span class="allchat-modal-header">Community Guidelines</span>\n          ${ca(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <span class="allchat-modal-body" style="margin-bottom:16px;">\n          Please keep All Chat kind and on-topic. Messages that break these rules may be removed.\n        </span>\n        <div style="display:flex; flex-direction:column; margin-bottom:20px;">\n          ${t}\n        </div>\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          <span id="${this.ID_CANCEL}" class="gradient-200-button">Got it</span>\n        </div>\n      </div>\n    `;
          }
          return `\n      <div style="display:flex; flex-direction:column; width:470px;">\n        <span class="allchat-modal-header" style="margin-bottom:4px;">Community Guidelines</span>\n        <span class="allchat-modal-body">Please agree to the following community guidelines before commenting:</span>\n\n        <div style="display:flex; flex-direction:column; gap:8px; margin-top:20px; margin-bottom:20px;">\n          ${pu.map((t) => this.checkboxHtml(t.text, t.id)).join("")}\n          <span class="allchat-error-text" id="${this.ID_ERROR}"></span>\n        </div>\n\n        <div style="display:flex; flex-direction:row; align-items:center; justify-content:right; width:100%;">\n          <span id="${this.ID_CANCEL}" class="allchat-chatbox-button" style="font-weight:600; margin-right:16px; font-size:16px;">Cancel</span>\n          <span id="${this.ID_CONFIRM}" class="gradient-200-button">Post Comment</span>\n        </div>\n      </div>\n    `;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.ID_CLOSE),
            n = document.getElementById(this.ID_CANCEL),
            e = document.getElementById(this.ID_CONFIRM);
          if (
            (t &&
              t.addEventListener("click", (t) => {
                (t.stopPropagation(), this.close());
              }),
            n &&
              n.addEventListener("click", (t) => {
                var n, e;
                (t.stopPropagation(),
                  this.props.viewOnly ||
                    null === (e = (n = this.props).onCancel) ||
                    void 0 === e ||
                    e.call(n),
                  this.close());
              }),
            e &&
              !this.props.viewOnly &&
              e.addEventListener("click", (t) => {
                var n, e;
                t.stopPropagation();
                const i = document.querySelectorAll(
                  'input[type="checkbox"][data-teleparty-guidelines="true"]',
                );
                if (Array.from(i).every((t) => t.checked))
                  (null === (e = (n = this.props).onAgree) ||
                    void 0 === e ||
                    e.call(n),
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
                  var n, e;
                  null === (e = (n = this.props).onToggleBox) ||
                    void 0 === e ||
                    e.call(n, t.id, t.checked);
                });
              });
          }
        }
      }
      function Du(t, n, e) {
        const i = n ? ` id="${n}"` : "";
        let s = (null != e ? e : "").trim();
        return (
          s && !s.endsWith(";") && (s += ";"),
          (s += "pointer-events:auto!important;"),
          t.replace("<svg ", `<svg${i} style="${s}" `)
        );
      }
      function vu(t, n) {
        const e = `tpLogo${Math.random().toString(36).slice(2, 9)}`;
        return Du(
          `<svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <mask id="${e}Mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">\n            <path d="M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z" fill="#EF3E3A"/>\n            <path d="M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z" fill="#EF3E3A"/>\n            </mask>\n            <g mask="url(#${e}Mask)">\n            <rect width="33" height="33" fill="url(#${e}Grad)"/>\n            </g>\n            <defs>\n            <linearGradient id="${e}Grad" x1="0" y1="0" x2="37.984" y2="7.39309" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#E34248"/>\n            <stop offset="1" stop-color="#9E55A0"/>\n            </linearGradient>\n            </defs>\n        </svg>`,
          t,
          n,
        );
      }
      function gu(t, n) {
        return Du(
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.6"/>\n            <path d="M8.5 14c1.1 1.2 2.6 1.8 3.5 1.8s2.4-.6 3.5-1.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>\n            <circle cx="9.2" cy="10.2" r="1" fill="currentColor"/>\n            <circle cx="14.8" cy="10.2" r="1" fill="currentColor"/>\n        </svg>',
          t,
          n,
        );
      }
      class mu extends nu {
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
          return `\n    <div class="tp-floating-help">\n      <div class="tp-floating-help-header">\n        <div class="tp-floating-help-brand">\n          <span class="tp-floating-help-logo" aria-hidden="true">${vu()}</span>\n          <div class="tp-floating-help-titles">\n            <span class="tp-floating-help-title">All Chat</span>\n            <span class="tp-floating-help-badge">Beta</span>\n          </div>\n        </div>\n        ${ca(this.CLOSE_ID, "cursor: pointer !important;")}\n      </div>\n\n      <p class="tp-floating-help-lede">\n        Timed comments from Teleparty viewers — not a live chat. Comments appear when the video reaches the moment they were left.\n      </p>\n\n      <div class="tp-floating-help-steps">\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">1</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Open the panel</span>\n            <span class="tp-floating-help-step-text">\n              Tap <strong>Chat</strong> at the top left when Netflix controls are visible. The button hides with the controls; an open panel stays up.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">2</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Watch comments appear</span>\n            <span class="tp-floating-help-step-text">\n              Like a Twitch VOD: comments unlock as playback reaches their timestamp. Scrubbing back hides later ones.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">3</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Leave your mark</span>\n            <span class="tp-floating-help-step-text">\n              Log in, choose a handle, then post. Comments are global for Teleparty users — not just people in your party.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-note">\n          All Chat hides while you’re in a Teleparty. Leave the party to use it again.\n        </div>\n      </div>\n\n      <div class="tp-floating-help-footer">\n        <a\n          id="${this.FEEDBACK_ID}"\n          class="tp-floating-help-feedback"\n          href="https://docs.google.com/forms/d/e/1FAIpQLSeJORvFwSNAYhsCLd94YLUOn5s7y_aGezl89slmbM6LZFPPvw/viewform?usp=publish-editor"\n          target="_blank"\n          rel="noopener noreferrer"\n        >Leave feedback</a>\n        <button type="button" id="${this.CONTINUE_ID}" class="tp-floating-help-continue">Got it</button>\n      </div>\n    </div>`;
        }
        bindInnerEvents() {
          const t = document.getElementById(this.CONTINUE_ID);
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            });
          const n = document.getElementById(this.FEEDBACK_ID);
          n && n.addEventListener("click", (t) => t.stopPropagation());
        }
      }
      function wu(t) {
        var n;
        const e = t.containerStyling ? `style="${t.containerStyling}"` : "",
          i = ia(null !== (n = t.flair) && void 0 !== n ? n : "");
        return `\n        <div id="tp-allchat-live-feed" class="live-feed-container" ${e}>\n            ${t.flair ? `<div style="position: absolute; top: 0; right: 0; transform: translate(60%, -40%)" id="tp-flair-container">\n                            <img src=${i.gifSrc} alt=${t.flair} width="48 height="48"/>\n                        </div>` : ""}\n            <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-between; align-items: center">\n                ${ra('\n        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g opacity="0.2">\n            <mask id="mask0_1785_27357" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">\n            <path d="M9.59808 3.61537V0.416016H0V3.61537H3.19936V12.416H6.39872V3.61537H9.59808Z" fill="#EF3E3A"/>\n            <path d="M11.5997 4.41602C9.16894 4.41602 7.19936 6.38559 7.19936 8.81634V15.6154H10.3987V13.0501C10.7798 13.159 11.1833 13.2167 11.5997 13.2167C14.0304 13.2167 16 11.2471 16 8.81634C16 6.38559 14.0272 4.41602 11.5997 4.41602ZM11.5997 10.0141C10.9368 10.0141 10.3987 9.47606 10.3987 8.81313C10.3987 8.1502 10.9368 7.61217 11.5997 7.61217C12.2626 7.61217 12.8006 8.1502 12.8006 8.81313C12.7974 9.47927 12.2626 10.0141 11.5997 10.0141Z" fill="#EF3E3A"/>\n            </mask>\n            <g mask="url(#mask0_1785_27357)">\n            <rect width="16" height="16" fill="white"/>\n            </g>\n            </g>\n        </svg>\n    ', s, o)}\n                <div style="display: flex; flex-direction: row; align-items: center">\n                    ${aa("tp-allchat-comment-help", "cursor: pointer !important;")}\n                    ${ua("tp-allchat-report-flag", "cursor: pointer !important; margin-left: 6px;")}\n                </div>\n            </div>\n            <p class="live-feed-comment-username">${t.username}</p>\n            <p class="live-feed-comment-message">${t.message}</p>\n        </div>\n    `;
        var s, o;
      }
      var yu = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class bu extends nu {
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
            n = document.getElementById(this.ID_CONFIRM);
          (t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(), this.close());
            }),
            n &&
              n.addEventListener("click", (t) => {
                (t.stopPropagation(), this.onReportClick(n));
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
          return yu(this, void 0, void 0, function* () {
            ((t.textContent = "Reporting..."),
              (t.style.pointerEvents = "none"),
              (t.style.opacity = "0.7"));
            try {
              (yield Ke(`comments/${this.props.commentId}/report`, "POST", !1),
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
      const Cu = "tp-floating-chat-open-btn";
      function Fu(t, n) {
        if (!n) return;
        let e = document.getElementById(Cu);
        var i, s;
        if (
          ((e &&
            n.contains(e) &&
            e.querySelector(".tp-floating-chat-open-btn-logo")) ||
            ((n.innerHTML = `\n            <button\n                type="button"\n                id="${Cu}"\n                class="tp-floating-chat-open-btn"\n                aria-label="Open All Chat"\n                title="Open All Chat"\n            >\n                <span class="tp-floating-chat-open-btn-logo" aria-hidden="true">${Du('<svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z" fill="#FFFFFF"/>\n            <path d="M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z" fill="#FFFFFF"/>\n        </svg>', i, s)}</span>\n                <span class="tp-floating-chat-open-btn-label">All Chat</span>\n            </button>\n        `),
            (e = document.getElementById(Cu))),
          !e)
        )
          return;
        const o = ["tp-floating-chat-open-btn"];
        (t.showGradient && o.push("tp-floating-chat-open-btn--gradient"),
          t.panelOpen && o.push("tp-floating-chat-open-btn--open"),
          t.controlsShowing
            ? o.push("tp-floating-chat-open-btn--visible")
            : o.push("tp-floating-chat-open-btn--hidden"),
          (e.className = o.join(" ")),
          e.setAttribute(
            "aria-label",
            t.panelOpen ? "Close All Chat" : "Open All Chat",
          ),
          (e.title = t.panelOpen ? "Close All Chat" : "Open All Chat"),
          e.setAttribute("aria-pressed", t.panelOpen ? "true" : "false"),
          e.setAttribute("aria-hidden", t.controlsShowing ? "false" : "true"),
          (e.tabIndex = t.controlsShowing ? 0 : -1),
          (e.onclick = (n) => {
            (n.stopPropagation(), n.preventDefault(), t.onClick());
          }));
      }
      const _u = "tp-floating-chat-message-list",
        xu = {
          commentId: "tp-floating-chat-intro",
          vidTime: 0,
          message:
            "Welcome to All Chat! These are timed comments from Teleparty users, not a live chat. Comments appear when the video reaches the moment they were left. Post a comment and make your mark!",
          displayName: "Teleparty All Chat",
          vidDuration: 0,
        };
      function Eu(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }
      function ku(t, n) {
        if (!n) return;
        const e = n.querySelector(`#${_u}`);
        if (!e) return;
        const i = e.scrollHeight - e.scrollTop - e.clientHeight < 48,
          s = e.querySelectorAll(".tp-floating-chat-message").length;
        e.innerHTML = t.messages
          .map((t) =>
            (function (t) {
              var n;
              const {
                  comment: e,
                  isSystem: i,
                  isPending: s,
                  isRejected: o,
                  rejectionReason: r,
                  isLeaving: a,
                } = t,
                u =
                  (e.displayName || "?")
                    .replace(/[^a-zA-Z0-9]/g, "")
                    .slice(0, 2)
                    .toUpperCase() || "?",
                c = ia(null !== (n = e.flair) && void 0 !== n ? n : ""),
                l = e.flair
                  ? `<div class="tp-floating-chat-flair" aria-hidden="true">\n                <img src="${c.gifSrc}" alt="${Eu(e.flair)}" width="24" height="24"/>\n           </div>`
                  : "",
                h =
                  i || s || o || !t.onReportFlagClicked
                    ? ""
                    : ua(
                        `tp-floating-report-${Eu(e.commentId)}`,
                        "cursor: pointer !important; width: 14px; height: 14px;",
                      ),
                d = i
                  ? "tp-floating-chat-username tp-floating-chat-username--brand"
                  : "tp-floating-chat-username",
                p = i
                  ? `<div class="tp-floating-chat-avatar tp-floating-chat-avatar--brand">${vu()}</div>`
                  : `<div class="tp-floating-chat-avatar">${Eu(u)}</div>`,
                f =
                  l || h
                    ? `<div class="tp-floating-chat-message-meta-right">${l}${h}</div>`
                    : "",
                D = [
                  i ? "tp-floating-chat-message--system" : "",
                  s ? "tp-floating-chat-message--pending" : "",
                  o ? "tp-floating-chat-message--rejected" : "",
                  a ? "tp-floating-chat-message--leaving" : "",
                ]
                  .filter(Boolean)
                  .join(" "),
                v =
                  o && r
                    ? `<p class="tp-floating-chat-reject-reason">${Eu(r)}</p>`
                    : "";
              return `\n        <div class="tp-floating-chat-message${D ? ` ${D}` : ""}" data-comment-id="${Eu(e.commentId)}">\n            ${p}\n            <div class="tp-floating-chat-message-body">\n                <div class="tp-floating-chat-message-meta">\n                    <span class="${d}">${Eu(e.displayName)}</span>\n                    ${f}\n                </div>\n                <p class="tp-floating-chat-text">${Eu(e.message)}</p>\n                ${v}\n            </div>\n        </div>\n    `;
            })(t),
          )
          .join("");
        for (const n of t.messages) {
          if (n.isSystem || !n.onReportFlagClicked) continue;
          const t = document.getElementById(
            `tp-floating-report-${n.comment.commentId}`,
          );
          t &&
            t.addEventListener("click", (t) => {
              var e;
              (t.stopPropagation(),
                null === (e = n.onReportFlagClicked) ||
                  void 0 === e ||
                  e.call(n));
            });
        }
        (i || t.messages.length > s) && (e.scrollTop = e.scrollHeight);
      }
      var Au = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const Bu = 120,
        Iu = "tp-floating-chat-input",
        Su = "tp-floating-chat-length",
        $u = "tp-floating-chat-send",
        ju = "tp-floating-chat-identity",
        Tu = "tp-floating-chat-error",
        Mu = "tp-floating-flair-select",
        Pu = "tp-floating-flair-trigger",
        Lu = "tp-floating-flair-menu",
        Ru = "tp-floating-flair-preview";
      let Ou = null;
      function Vu() {
        null !== Ou && (clearTimeout(Ou), (Ou = null));
        const t = document.getElementById(Tu);
        t && ((t.hidden = !0), (t.textContent = ""));
      }
      function Uu(t) {
        const n = document.getElementById(Tu);
        n &&
          (null !== Ou && (clearTimeout(Ou), (Ou = null)),
          (n.textContent = t),
          (n.hidden = !1),
          (Ou = window.setTimeout(() => {
            Vu();
          }, 4e3)));
      }
      const Hu = [
        { reaction: null, label: "No flair" },
        { reaction: "heart", label: "Heart" },
        { reaction: "cry", label: "Cry" },
        { reaction: "surprise", label: "Surprise" },
      ];
      function Nu() {
        const t = document.getElementById(Mu);
        return (null == t ? void 0 : t.getAttribute("data-flair")) || void 0;
      }
      function Gu(t) {
        const n = document.getElementById(Mu);
        if (!n) return;
        (t ? n.setAttribute("data-flair", t) : n.removeAttribute("data-flair"),
          (function (t) {
            const n = document.getElementById(Ru);
            if (n)
              if (t) {
                const { staticSrc: e } = ia(t);
                n.innerHTML = `<img src="${e}" alt="${t}" />`;
              } else n.innerHTML = gu();
          })(t));
        const e = document.getElementById(Lu);
        e &&
          e.querySelectorAll("[data-flair-option]").forEach((n) => {
            const e = (n.getAttribute("data-flair-option") || "") === (t || "");
            (n.setAttribute("aria-selected", e ? "true" : "false"),
              n.classList.toggle("tp-floating-flair-option--selected", e));
          });
      }
      function zu() {
        const t = document.getElementById(Mu),
          n = document.getElementById(Pu),
          e = document.getElementById(Lu);
        (null == t || t.classList.remove("tp-floating-flair-select--open"),
          null == n || n.setAttribute("aria-expanded", "false"),
          e && (e.hidden = !0));
      }
      function Zu() {
        const t = document.getElementById(Lu);
        t && !t.hidden
          ? zu()
          : (function () {
              const t = document.getElementById(Mu),
                n = document.getElementById(Pu),
                e = document.getElementById(Lu);
              (null == t || t.classList.add("tp-floating-flair-select--open"),
                null == n || n.setAttribute("aria-expanded", "true"),
                e && (e.hidden = !1));
            })();
      }
      function Wu() {
        const t = Hu.map(
          ({ reaction: t, label: n }) =>
            `\n            <button\n                type="button"\n                class="tp-floating-flair-option"\n                role="option"\n                data-flair-option="${null != t ? t : ""}"\n                aria-selected="${t ? "false" : "true"}"\n            >\n                <span class="tp-floating-flair-option-icon">${t ? `<img src="${ia(t).staticSrc}" alt="${n}" />` : gu()}</span>\n                <span class="tp-floating-flair-option-label">${n}</span>\n            </button>\n        `,
        ).join("");
        return `\n        <div id="${Mu}" class="tp-floating-flair-select">\n            <button\n                type="button"\n                id="${Pu}"\n                class="tp-floating-flair-trigger"\n                aria-haspopup="listbox"\n                aria-expanded="false"\n                aria-label="Choose flair"\n                title="Flair"\n            >\n                <span id="${Ru}" class="tp-floating-flair-preview">${gu()}</span>\n                ${Du('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>', n, e)}\n            </button>\n            <div id="${Lu}" class="tp-floating-flair-menu" role="listbox" hidden>\n                ${t}\n            </div>\n        </div>\n    `;
        var n, e;
      }
      let Qu = !1;
      function Yu(t) {
        const n = document.getElementById($u),
          e = document.getElementById(Iu),
          i = document.querySelector(".tp-floating-chat-compose"),
          s = document.getElementById(Pu);
        (n &&
          (n.classList.toggle("tp-floating-chat-send--sending", t),
          t
            ? (n.setAttribute("disabled", "true"),
              n.setAttribute("aria-busy", "true"),
              n.setAttribute("aria-label", "Sending comment"))
            : (n.removeAttribute("disabled"),
              n.removeAttribute("aria-busy"),
              n.setAttribute("aria-label", "Send comment"))),
          i && i.classList.toggle("tp-floating-chat-compose--sending", t),
          e && (e.disabled = t),
          s && (s.disabled = t));
      }
      function Ju(t, n, e, i) {
        return Au(this, void 0, void 0, function* () {
          const s = yield co.L(new Xr(ti, Xe));
          ((i.value = ""),
            t.closeModal(),
            yield (function (t, n, e, i) {
              var s, o, r, a, u, c, l, h, d, p;
              return Au(this, void 0, void 0, function* () {
                let f;
                try {
                  Yu(!0);
                  const D = {
                    name: "allchat_message_sent",
                    message: { text: n },
                    allchat_ui: "floating",
                  };
                  co.L(new yo(ni, Xe, D));
                  const v = yield co.L(new za(ni, Xe)),
                    g = {
                      message: n,
                      vidTime: yield t.getVidTime(),
                      service: t.service,
                      vidId: t.vidId,
                      displayName: e,
                      vidDuration: t.vidDuration,
                      flair: Nu(),
                      permId: v,
                      extensionVersion: qs,
                    };
                  ((f = `pending-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
                    Vu(),
                    t.onPostComment(
                      Object.assign(Object.assign({}, g), { commentId: f }),
                    ),
                    t.onCommentEdited(""));
                  const m = document.getElementById(Iu);
                  (m && (m.value = ""), Ku(0));
                  const w = yield Ke("comments", "POST", !0, g, i, void 0, !0);
                  (t.onPostConfirmed
                    ? t.onPostConfirmed(f, {
                        commentId: w.commentId,
                        vidTime:
                          null !== (s = w.vidTime) && void 0 !== s
                            ? s
                            : g.vidTime,
                        message:
                          null !== (o = w.message) && void 0 !== o
                            ? o
                            : g.message,
                        displayName:
                          null !== (r = w.displayName) && void 0 !== r
                            ? r
                            : g.displayName,
                        vidDuration:
                          null !== (a = w.vidDuration) && void 0 !== a
                            ? a
                            : g.vidDuration,
                        flair:
                          null !== (u = w.flair) && void 0 !== u ? u : g.flair,
                      })
                    : t.onPostComment({
                        commentId: w.commentId,
                        vidTime:
                          null !== (c = w.vidTime) && void 0 !== c
                            ? c
                            : g.vidTime,
                        message:
                          null !== (l = w.message) && void 0 !== l
                            ? l
                            : g.message,
                        displayName:
                          null !== (h = w.displayName) && void 0 !== h
                            ? h
                            : g.displayName,
                        vidDuration:
                          null !== (d = w.vidDuration) && void 0 !== d
                            ? d
                            : g.vidDuration,
                        flair:
                          null !== (p = w.flair) && void 0 !== p ? p : g.flair,
                      }),
                    oa("allchat_message_accepted", "floating"));
                } catch (n) {
                  let e = "An error occurred";
                  try {
                    const t = JSON.parse(n.message);
                    t.error
                      ? (oa("allchat_message_rejected", "floating"),
                        (e = t.error))
                      : oa("allchat_message_errored", "floating");
                  } catch (t) {
                    (oa("allchat_message_errored", "floating"),
                      console.error(`GOT ERROR ${n}`));
                  }
                  f && t.onPostRejected
                    ? t.onPostRejected(f, e)
                    : t.onPostRejected || Uu(e);
                } finally {
                  Yu(!1);
                }
              });
            })(t, n, e, null == s ? void 0 : s.token));
        });
      }
      function Ku(t) {
        const n = document.getElementById(Su);
        n && (n.innerText = `${t}/120`);
      }
      function qu(t, n) {
        Oa(
          {
            variant: "floating",
            knownHandle: n,
            onEditClicked: () => {
              t.openChangeHandleModal((n) => qu(t, n));
            },
            onSetHandleClicked: () => {
              t.openSetHandleModal((n) => qu(t, n));
            },
          },
          document.getElementById(ju),
        );
      }
      function Xu(t) {
        return Au(this, void 0, void 0, function* () {
          const { userData: e, handle: i } = yield sa();
          oa("allchat_post_button_clicked");
          const s = document.getElementById(Iu);
          if (!s) return;
          const o = s.value;
          if (!o || o.length > Bu)
            Uu("Message must be between 1-120 characters");
          else {
            if (!(null == e ? void 0 : e.signedIn)) {
              const t = document.getElementById("tp-user-login-btn");
              return void (t
                ? t.click()
                : window.open(
                    `${n}/signup?ref=allchat`,
                    "_blank",
                    "noopener,noreferrer",
                  ));
            }
            i
              ? yield Ju(t, o, i, s)
              : t.openSetHandleModal((n) =>
                  Au(this, void 0, void 0, function* () {
                    (qu(t, n), n && (yield Ju(t, o, n, s)));
                  }),
                );
          }
        });
      }
      function tc(t) {
        return `\n        <div class="tp-floating-chat-input-area">\n            <div id="${ju}" class="tp-floating-chat-identity"></div>\n            <div class="tp-floating-chat-input-row">\n                <div class="tp-floating-chat-compose">\n                    <input\n                        id="${Iu}"\n                        type="text"\n                        class="tp-floating-chat-input"\n                        placeholder="Add your comment..."\n                        value="${t.curComment.replace(/"/g, "&quot;")}"\n                        maxlength="120"\n                    />\n                    ${Wu()}\n                    <span id="${Su}" class="tp-floating-chat-length">${t.curComment.length}/120</span>\n                </div>\n                <button type="button" id="${$u}" class="tp-floating-chat-send" aria-label="Send comment">\n                    <span class="tp-floating-chat-send-icon">${Du('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M4 12L20 4L13 20L11 13L4 12Z" stroke="white" stroke-width="1.8" stroke-linejoin="round"/>\n        </svg>', n, e)}</span>\n                    <span class="tp-floating-chat-send-spinner" aria-hidden="true"></span>\n                </button>\n            </div>\n            <p id="${Tu}" class="tp-floating-chat-error" role="alert" hidden></p>\n            <div class="tp-floating-chat-input-hints">\n                <a\n                    class="tp-floating-chat-feedback"\n                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJORvFwSNAYhsCLd94YLUOn5s7y_aGezl89slmbM6LZFPPvw/viewform?usp=publish-editor"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                >\n                    Leave Feedback\n                </a>\n                <button type="button" id="tp-floating-chat-guidelines-btn" class="tp-floating-chat-guidelines">\n                    ${(function (
          t,
          n,
        ) {
          return Du(
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M12 3L5 6.5V12c0 4.5 2.9 7.6 7 8.8 4.1-1.2 7-4.3 7-8.8V6.5L12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>\n        </svg>',
            t,
            n,
          );
        })()}\n                    <span>Community Guidelines</span>\n                </button>\n            </div>\n        </div>\n    `;
        var n, e;
      }
      function nc(t) {
        (qu(t),
          (function () {
            const t = document.getElementById(Mu),
              n = document.getElementById(Pu),
              e = document.getElementById(Lu);
            t &&
              n &&
              e &&
              (n.addEventListener("click", (t) => {
                (t.stopPropagation(), Zu());
              }),
              e.querySelectorAll("[data-flair-option]").forEach((t) => {
                t.addEventListener("click", (n) => {
                  (n.stopPropagation(),
                    Gu(t.getAttribute("data-flair-option") || null),
                    zu());
                });
              }),
              Qu ||
                ((Qu = !0),
                document.addEventListener(
                  "click",
                  (t) => {
                    const n = document.getElementById(Mu);
                    (n && n.contains(t.target)) || zu();
                  },
                  !0,
                )));
          })());
        const n = document.getElementById(Iu),
          e = document.getElementById($u),
          i = document.getElementById("tp-floating-chat-guidelines-btn");
        (i &&
          i.addEventListener("click", (n) => {
            (n.stopPropagation(), t.openGuidelinesModal());
          }),
          n &&
            (n.addEventListener("focus", (n) => {
              var e;
              (n.stopPropagation(),
                localStorage.setItem("allchat-has-focus", "true"),
                null === (e = t.onInputFocusIntent) ||
                  void 0 === e ||
                  e.call(t));
            }),
            n.addEventListener("blur", () => {
              var e;
              (null === (e = t.onInputBlurIntent) || void 0 === e || e.call(t),
                window.setTimeout(() => {
                  document.activeElement !== n &&
                    localStorage.setItem("allchat-has-focus", "false");
                }, 0));
            }),
            n.addEventListener("click", (t) => t.stopPropagation()),
            n.addEventListener("keydown", (n) => {
              (n.stopPropagation(),
                "Enter" === n.key && (n.preventDefault(), Xu(t)));
            }),
            n.addEventListener("input", (e) => {
              let i = e.target.value;
              (i.length > Bu && ((i = i.substring(0, Bu)), (n.value = i)),
                Vu(),
                t.onCommentEdited(i),
                Ku(i.length));
            })),
          e &&
            e.addEventListener("click", (n) => {
              (n.stopPropagation(), Xu(t));
            }));
      }
      const ec = "tp-floating-chat-panel",
        ic = "tp-floating-chat-close",
        sc = "tp-floating-chat-help",
        oc = "tpFloatingChatPanelPos",
        rc = 110;
      function ac(t, n, e, i) {
        const s = Math.max(8, window.innerWidth - e - 8),
          o = Math.max(8, window.innerHeight - i - 8);
        return {
          left: Math.min(Math.max(8, t), s),
          top: Math.min(Math.max(8, n), o),
        };
      }
      function uc(t, n) {
        var e, i;
        if (!t) return;
        const s = t.offsetWidth || 320,
          o = t.offsetHeight || Math.round(0.55 * window.innerHeight),
          r = ac(
            null !== (e = null == n ? void 0 : n.left) && void 0 !== e ? e : 27,
            null !== (i = null == n ? void 0 : n.top) && void 0 !== i ? i : rc,
            s,
            o,
          );
        ((t.style.left = `${r.left}px`), (t.style.top = `${r.top}px`));
      }
      function cc(t, n) {
        let e = !1,
          i = 0,
          s = 0,
          o = 0,
          r = 0;
        const a = (t) => {
            if (!e) return;
            (t.preventDefault(), t.stopPropagation());
            const a = n.offsetWidth || 320,
              u = n.offsetHeight || 400,
              c = ac(o + (t.clientX - i), r + (t.clientY - s), a, u);
            uc(n, c);
          },
          u = (i) => {
            if (!e) return;
            ((e = !1), t.classList.remove("tp-floating-chat-header--dragging"));
            try {
              t.releasePointerCapture(i.pointerId);
            } catch (t) {}
            (window.removeEventListener("pointermove", a, !0),
              window.removeEventListener("pointerup", u, !0),
              window.removeEventListener("pointercancel", u, !0));
            const s = Number.parseFloat(n.style.left || String(27)),
              o = Number.parseFloat(n.style.top || String(rc));
            Number.isNaN(s) ||
              Number.isNaN(o) ||
              (function (t) {
                try {
                  localStorage.setItem(oc, JSON.stringify(t));
                } catch (t) {}
              })({ left: s, top: o });
          };
        t.addEventListener("pointerdown", (c) => {
          const l = c.target;
          if (!(null == l ? void 0 : l.closest("button, a, input, textarea"))) {
            (c.preventDefault(),
              c.stopPropagation(),
              (e = !0),
              (i = c.clientX),
              (s = c.clientY),
              (o = Number.parseFloat(
                n.style.left || String(n.offsetLeft || 27),
              )),
              (r = Number.parseFloat(n.style.top || String(n.offsetTop || rc))),
              Number.isNaN(o) && (o = 27),
              Number.isNaN(r) && (r = rc),
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
      function lc(t, n) {
        if (!n) return;
        var e, i;
        ((n.innerHTML = `\n        <div id="${ec}" class="tp-floating-chat-panel">\n            <div class="tp-floating-chat-header">\n                <div class="tp-floating-chat-header-left">\n                    <span class="tp-floating-chat-logo" aria-hidden="true">${vu()}</span>\n                    <span class="tp-floating-chat-title">All Chat</span>\n                </div>\n                <div class="tp-floating-chat-header-actions">\n                    <button type="button" id="${sc}" class="tp-floating-chat-icon-btn" aria-label="All Chat help">\n                        ${Du('<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>\n            <path d="M9.6 9.4c0-1.35 1.05-2.4 2.45-2.4 1.35 0 2.4 0.95 2.4 2.25 0 1.05-0.55 1.6-1.35 2.15-0.75 0.5-1.15 0.95-1.15 1.85" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>\n            <circle cx="12" cy="17.1" r="1.05" fill="currentColor"/>\n        </svg>', e, i)}\n                    </button>\n                    <button type="button" id="${ic}" class="tp-floating-chat-icon-btn" aria-label="Close chat">\n                        ${(function (
          t,
          n,
        ) {
          return Du(
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M7 7L17 17M7 17L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>\n        </svg>',
            t,
            n,
          );
        })()}\n                    </button>\n                </div>\n            </div>\n            <div id="tp-floating-chat-body" class="tp-floating-chat-body">\n                <div id="${_u}" class="tp-floating-chat-message-list"></div>\n            </div>\n            ${tc(t.inputProps)}\n        </div>\n    `),
          uc(
            n,
            (function () {
              try {
                const t = localStorage.getItem(oc);
                if (!t) return null;
                const n = JSON.parse(t);
                if ("number" == typeof n.left && "number" == typeof n.top)
                  return { left: n.left, top: n.top };
              } catch (t) {}
              return null;
            })(),
          ),
          ku({ messages: t.messages }, n),
          nc(t.inputProps));
        const s = document.getElementById(ic),
          o = document.getElementById(sc),
          r = n.querySelector(".tp-floating-chat-header");
        (s &&
          s.addEventListener("click", (n) => {
            (n.stopPropagation(), t.onClose());
          }),
          o &&
            o.addEventListener("click", (n) => {
              (n.stopPropagation(), t.onHelpClicked());
            }),
          r && cc(r, n));
        const a = document.getElementById(ec);
        a &&
          (a.addEventListener("click", (t) => t.stopPropagation()),
          a.addEventListener("keydown", (t) => t.stopPropagation()));
      }
      function hc(t) {
        t && (t.innerHTML = "");
      }
      var dc = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const pc = "tpFloatingChatButtonSeen",
        fc = "tpFloatingChatPanelOpen";
      function Dc(t) {
        try {
          t
            ? sessionStorage.setItem(fc, "true")
            : sessionStorage.removeItem(fc);
        } catch (t) {}
      }
      class vc {
        constructor(t) {
          ((this.deps = t),
            (this.xi = !1),
            (this.Ei = new Set()),
            (this.ki = !1),
            (this.Ai = ""),
            (this.Bi = !0),
            (this.Ii = !1),
            (this.Si = new Map()),
            (this.$i = !1),
            (this.ji = []),
            (this.Ti = !1),
            (this.Mi = null),
            (this.Pi = !1),
            (this.Li = (t) => {
              if (!this.Ti || !this.xi) return;
              const n = this.deps.getPanelRoot(),
                e = t.target;
              (n && e && n.contains(e)) || this.Ri();
            }));
        }
        get isPanelOpen() {
          return this.xi;
        }
        get isMounted() {
          return this.Ii;
        }
        get isComposeFocused() {
          return this.Ti;
        }
        noteComposeFocus() {
          (null !== this.Mi && (clearTimeout(this.Mi), (this.Mi = null)),
            (this.Ti = !0),
            this.Oi());
        }
        noteComposeBlur() {
          (null !== this.Mi && clearTimeout(this.Mi),
            (this.Mi = setTimeout(() => {
              this.Mi = null;
              const t = document.getElementById("tp-floating-chat-input");
              document.activeElement !== t ? (this.Ti = !1) : (this.Ti = !0);
            }, 120)));
        }
        render() {
          var t, n, e;
          return dc(this, void 0, void 0, function* () {
            if (this.deps.isUserInParty()) return void this.hideForParty();
            ((this.ki = !1),
              (this.Bi =
                null !==
                  (e =
                    null === (n = (t = this.deps).getControlsShowing) ||
                    void 0 === n
                      ? void 0
                      : n.call(t)) && void 0 !== e
                  ? e
                  : this.Bi),
              this.Vi());
            const i = this.deps.getPanelRoot(),
              s = Boolean(
                null == i ? void 0 : i.querySelector("#tp-floating-chat-panel"),
              );
            (this.xi ||
              (!s &&
                !(function () {
                  try {
                    return "true" === sessionStorage.getItem(fc);
                  } catch (t) {
                    return !1;
                  }
                })()) ||
              (this.xi = !0),
              this.Ui(),
              (this.Ii = !0),
              this.xi
                ? (s || (yield this.Hi()), this.Ni())
                : (hc(this.deps.getPanelRoot()), this.Gi()));
          });
        }
        setControlsShowing(t) {
          !this.ki && this.Ii
            ? ((this.Bi = t), this.Ui(), this.zi())
            : (this.Bi = t);
        }
        togglePanel() {
          this.xi ? this.closePanel() : this.openPanel();
        }
        openPanel() {
          var t, n;
          return dc(this, void 0, void 0, function* () {
            this.deps.isUserInParty() ||
              (localStorage.setItem(pc, "true"),
              (this.xi = !0),
              Dc(!0),
              this.Ui(),
              yield this.Hi(),
              this.Ni(),
              null === (n = (t = this.deps).onPanelOpened) ||
                void 0 === n ||
                n.call(t));
          });
        }
        closePanel() {
          var t, n;
          ((this.xi = !1),
            Dc(!1),
            this.Ri(),
            this.Zi(),
            (this.$i = !1),
            hc(this.deps.getPanelRoot()),
            this.Gi(),
            this.Ui(),
            null === (n = (t = this.deps).onPanelClosed) ||
              void 0 === n ||
              n.call(t));
        }
        hideForParty() {
          var t, n;
          const e = this.xi;
          ((this.ki = !0),
            (this.xi = !1),
            Dc(!1),
            (this.Ii = !1),
            this.Ri(),
            this.Zi(),
            (this.$i = !1),
            this.Gi(),
            hc(this.deps.getPanelRoot()));
          const i = this.deps.getButtonRoot();
          (i && (i.innerHTML = ""),
            e &&
              (null === (n = (t = this.deps).onPanelClosed) ||
                void 0 === n ||
                n.call(t)));
        }
        refreshMessages() {
          return dc(this, void 0, void 0, function* () {
            this.xi && !this.ki && (yield this.Wi());
          });
        }
        noteOptimistic(t) {
          const n = this.Si.get(t);
          (null == n ? void 0 : n.isRejected) ||
            (null == n ? void 0 : n.isLeaving) ||
            this.Si.set(t, { isPending: !0 });
        }
        confirmPending(t) {
          this.Si.delete(t);
        }
        rejectPendingMessage(t, n) {
          ((this.$i = !0),
            this.Si.set(t, { isRejected: !0, rejectionReason: n }),
            this.Wi());
          const e = setTimeout(() => {
            const n = this.Si.get(t);
            if (!n) return void (this.$i = !1);
            (this.Si.set(
              t,
              Object.assign(Object.assign({}, n), { isLeaving: !0 }),
            ),
              this.Wi());
            const e = setTimeout(() => {
              (this.deps.removeComment(t),
                this.Si.delete(t),
                (this.$i =
                  this.Si.size > 0 &&
                  Array.from(this.Si.values()).some(
                    (t) => t.isRejected || t.isLeaving,
                  )),
                this.Wi());
            }, 450);
            this.ji.push(e);
          }, 2e3);
          this.ji.push(e);
        }
        destroy() {
          var t, n;
          const e = this.xi;
          (this.Gi(),
            this.Zi(),
            (this.$i = !1),
            this.Si.clear(),
            (this.xi = !1),
            Dc(!1),
            (this.Ii = !1),
            this.Ri(),
            hc(this.deps.getPanelRoot()));
          const i = this.deps.getButtonRoot();
          (i && (i.innerHTML = ""),
            e &&
              (null === (n = (t = this.deps).onPanelClosed) ||
                void 0 === n ||
                n.call(t)));
        }
        Ri() {
          (null !== this.Mi && (clearTimeout(this.Mi), (this.Mi = null)),
            (this.Ti = !1),
            this.Qi(),
            localStorage.setItem("allchat-has-focus", "false"));
        }
        zi() {
          this.xi &&
            !this.ki &&
            this.Ti &&
            requestAnimationFrame(() => {
              if (!this.Ti || !this.xi) return;
              const t = document.getElementById("tp-floating-chat-input");
              t &&
                document.activeElement !== t &&
                t.focus({ preventScroll: !0 });
            });
        }
        Oi() {
          this.Pi ||
            ((this.Pi = !0),
            document.addEventListener("pointerdown", this.Li, !0));
        }
        Qi() {
          this.Pi &&
            ((this.Pi = !1),
            document.removeEventListener("pointerdown", this.Li, !0));
        }
        Zi() {
          for (const t of this.ji) clearTimeout(t);
          this.ji = [];
        }
        Vi() {}
        Yi() {
          return "true" !== localStorage.getItem(pc);
        }
        Ui() {
          Fu(
            {
              onClick: () => this.togglePanel(),
              showGradient: this.Yi(),
              panelOpen: this.xi,
              controlsShowing: this.Bi,
            },
            this.deps.getButtonRoot(),
          );
        }
        Ji(t) {
          return dc(this, void 0, void 0, function* () {
            return [
              { comment: xu, isSystem: !0 },
              ...t.map((t) => {
                const n = this.Si.get(t.commentId),
                  e = Boolean(
                    (null == n ? void 0 : n.isPending) ||
                    (null == n ? void 0 : n.isRejected),
                  );
                return {
                  comment: t,
                  onReportFlagClicked: e
                    ? void 0
                    : () => this.deps.openReportMessageModal(t.commentId),
                  isPending: null == n ? void 0 : n.isPending,
                  isRejected: null == n ? void 0 : n.isRejected,
                  rejectionReason: null == n ? void 0 : n.rejectionReason,
                  isLeaving: null == n ? void 0 : n.isLeaving,
                };
              }),
            ];
          });
        }
        Hi() {
          return dc(this, void 0, void 0, function* () {
            const t = yield this.deps.getRevealedMessages();
            this.Ki(t);
            const n = yield this.deps.getInputProps();
            ((n.curComment = this.Ai),
              (n.onCommentEdited = (t) => {
                this.Ai = t;
              }),
              (n.onInputFocusIntent = () => this.noteComposeFocus()),
              (n.onInputBlurIntent = () => this.noteComposeBlur()),
              lc(
                {
                  messages: yield this.Ji(t),
                  inputProps: n,
                  onClose: () => this.closePanel(),
                  onHelpClicked: () => this.deps.openHelpModal(),
                },
                this.deps.getPanelRoot(),
              ));
          });
        }
        Wi() {
          return dc(this, void 0, void 0, function* () {
            const t = yield this.deps.getRevealedMessages();
            (this.Ki(t),
              (function (t, n) {
                ku({ messages: t }, n);
              })(yield this.Ji(t), this.deps.getPanelRoot()));
          });
        }
        Ki(t) {
          var n, e;
          for (const i of t)
            this.Ei.has(i.commentId) ||
              (this.Ei.add(i.commentId),
              null === (e = (n = this.deps).onCommentViewed) ||
                void 0 === e ||
                e.call(n, i.commentId));
          const i = new Set(t.map((t) => t.commentId));
          for (const t of Array.from(this.Ei)) i.has(t) || this.Ei.delete(t);
        }
        Ni() {
          this.qi ||
            (this.qi = setInterval(() => {
              this.$i || this.Wi();
            }, 1e3));
        }
        Gi() {
          this.qi && (clearInterval(this.qi), (this.qi = void 0));
        }
      }
      var gc = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class mc {
        constructor(t, n, e, i, s = () => !1) {
          ((this.ALLCHAT_OPTIONS_ROOT_ID = "tp-allchat-options-root"),
            (this.ALLCHAT_CHATBOX_ROOT_ID = "tp-allchat-chatbox-root"),
            (this.ALLCHAT_LIVECHAT_ROOT_ID = "tp-allchat-livechat-root"),
            (this.ALLCHAT_MODAL_ROOT_ID = "tp-allchat-modal-root"),
            (this.FLOATING_CHAT_BUTTON_ROOT_ID =
              "tp-floating-chat-button-root"),
            (this.FLOATING_CHAT_PANEL_ROOT_ID = "tp-floating-chat-panel-root"),
            (this.Xi = "true" === localStorage.getItem("tpLiveChatShowing")),
            (this.ts = !1),
            (this.ns = !1),
            (this.es = ""),
            (this.ss = !0),
            (this.rs = ""),
            (this.us = null),
            (this.cs = !1),
            (this.ls = !1),
            (this.hs = !1),
            (this.ds = 0),
            (this.ps = !1),
            (this.fs = !1),
            (this.Ds = () => {
              (this.vs(), this.injectAllChat());
            }),
            (this.vs = () => {
              for (const t of [
                this.ALLCHAT_CHATBOX_ROOT_ID,
                this.ALLCHAT_LIVECHAT_ROOT_ID,
                this.ALLCHAT_OPTIONS_ROOT_ID,
                this.FLOATING_CHAT_BUTTON_ROOT_ID,
                this.FLOATING_CHAT_PANEL_ROOT_ID,
                this.ALLCHAT_MODAL_ROOT_ID,
              ]) {
                const n = document.getElementById(t);
                n && n.remove();
              }
            }),
            (this.gs = () => {
              var t;
              (null === (t = this.ws) || void 0 === t || t.destroy(),
                this.ys(),
                this.bs(),
                this.Cs(),
                this.Fs(),
                this.vs(),
                (this._s = void 0),
                (this.es = ""),
                (this.us = null));
            }),
            (this.xs = () => {
              this.Es()
                ? (this.ks(), this.As(), this.injectAllChat())
                : this.gs();
            }),
            (this.Bs = (t) => {
              t ? this.Is() : this.Ss();
            }),
            (this.$s = () => {
              const t =
                  document.head || document.getElementsByTagName("head")[0],
                n = document.createElement("link");
              ((n.rel = "stylesheet"),
                (n.href = chrome.runtime.getURL("css/all-chat.css")),
                t.appendChild(n));
              const e = document.createElement("link");
              ((e.rel = "stylesheet"),
                (e.href =
                  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"),
                t.appendChild(e));
            }),
            (this.js = () => {
              if (this.fs) return;
              const t =
                  document.head || document.getElementsByTagName("head")[0],
                n = document.createElement("link");
              ((n.rel = "stylesheet"),
                (n.href = chrome.runtime.getURL("css/floating-chat.css")),
                t.appendChild(n),
                (this.fs = !0));
            }),
            (this.Fs = () => {
              if (0 != this.ds) {
                const t = Date.now() - this.ds;
                (co.L(
                  new yo(ni, Xe, {
                    name: "allchat_time_spent",
                    allchat_usage: { time_spend: t },
                  }),
                ),
                  (this.ds = 0));
              }
            }),
            (this.Cs = () => {
              const t = this.Ts();
              (t && (t.innerHTML = ""), (this.us = null));
            }),
            (this.Ms = (t) => {
              ((this.Ps = t), (this.us = "report"));
              new bu({
                commentId: t,
                closeModal: this.Cs,
                removeMessage: this.Ls,
              }).open(this.Ts());
            }),
            (this.Rs = () => {
              ((this.us = null), this.bs(), co.L(new Hr(ni, Xe, !0)));
            }),
            (this.ks = () =>
              gc(this, void 0, void 0, function* () {
                if (this.Es())
                  try {
                    const t = (yield this.K.getVideoDataAsync()).videoId,
                      n = this.K.getStreamingServiceName();
                    (t && n) ||
                      console.error(
                        "Failed to get video info, live chat not loading",
                      );
                    const e = yield Ke(
                      `comments?univKey=${n}%23${t}`,
                      "GET",
                      !1,
                    );
                    ((this._s = e.comments.sort(
                      (t, n) => t.vidTime - n.vidTime,
                    )),
                      console.log(this._s));
                  } catch (t) {
                    console.error(t);
                  }
              })),
            (this.Ls = (t) => {
              var n;
              (this._s && (this._s = this._s.filter((n) => n.commentId !== t)),
                this.Os() &&
                  (null === (n = this.ws) || void 0 === n
                    ? void 0
                    : n.isPanelOpen) &&
                  this.ws.refreshMessages());
            }),
            (this.Vs = (t = 5e3) =>
              gc(this, void 0, void 0, function* () {
                if (!this._s || 0 === this._s.length) return null;
                const n = (yield this.K.getStateAsync())
                  .playbackPositionMilliseconds;
                let e = null,
                  i = 1 / 0;
                for (const s of this._s) {
                  const o = n - s.vidTime;
                  if (
                    (o >= 0 && o < i && o <= t && ((e = s), (i = o)),
                    s.vidTime > n)
                  )
                    break;
                }
                return e;
              })),
            (this.Us = () =>
              gc(this, void 0, void 0, function* () {
                if (!this._s || 0 === this._s.length) return [];
                const t = (yield this.K.getStateAsync())
                    .playbackPositionMilliseconds,
                  n = [];
                for (const e of this._s) {
                  if (!(e.vidTime <= t)) break;
                  n.push(e);
                }
                return n;
              })),
            (this.Hs = (t) => {
              t !== this.Ns &&
                ((this.Ns = t),
                this.cs &&
                  co.L(
                    new yo(ni, Xe, {
                      name: "allchat_comment_viewed",
                      action: { description: t },
                      allchat_ui: this.Os() ? "floating" : "legacy",
                    }),
                  ));
            }),
            (this.Gs = () => {
              this.us = "guidelines";
              new fu({ closeModal: this.Cs, viewOnly: !0 }).open(this.Ts());
            }),
            (this.zs = () => {
              this.us = "floatingHelp";
              new mu({ closeModal: this.Cs }).open(this.Ts());
            }),
            (this.Zs = () => {
              this.us = "help";
              new hu({
                closeModal: this.Cs,
                toggleLiveChat: this.Ws,
                getLiveChatShowing: () => this.Xi,
              }).open(this.Ts());
            }),
            (this.Qs = (t) => {
              ((this.us = "changeHandle"),
                (this.Ys = {
                  closeModal: this.Cs,
                  onHandleChanged: t,
                  onEditAvatarClicked: () => this.Js(t),
                  onLoadErrorDismiss: this.Rs,
                }));
              new su(this.Ys).open(this.Ts());
            }),
            (this.Ks = (t) => {
              ((this.us = "setHandle"),
                (this.qs = {
                  closeModal: this.Cs,
                  onHandleSet: t,
                  onLoadErrorDismiss: this.Rs,
                }));
              new lu(this.qs).open(this.Ts());
            }),
            (this.Js = (t) => {
              ((this.us = "editProfilePicture"),
                (this.Xs = {
                  closeModal: () => {
                    this.Qs(t);
                  },
                  onProfilePictureChanged: () => {
                    t();
                  },
                  onLoadErrorDismiss: this.Rs,
                }));
              new au(this.Xs).open(this.Ts());
            }),
            (this.no = (t) => {
              var n, e;
              if (this.Os()) {
                return "string" == typeof t.commentId &&
                  t.commentId.startsWith("pending-")
                  ? (this.eo(t),
                    null === (n = this.ws) ||
                      void 0 === n ||
                      n.noteOptimistic(t.commentId),
                    void (
                      null === (e = this.ws) ||
                      void 0 === e ||
                      e.refreshMessages()
                    ))
                  : void (() => {
                      gc(this, void 0, void 0, function* () {
                        var n;
                        try {
                          const n = (yield this.K.getStateAsync())
                            .playbackPositionMilliseconds;
                          "number" == typeof t.vidTime &&
                            t.vidTime > n &&
                            (t.vidTime = n);
                        } catch (t) {}
                        (this.eo(t),
                          null === (n = this.ws) ||
                            void 0 === n ||
                            n.refreshMessages());
                      });
                    })();
              }
              (this.eo(t), this.Xi && this.io());
            }),
            (this.so = (t, n) => {
              (() => {
                gc(this, void 0, void 0, function* () {
                  var e, i;
                  try {
                    const t = (yield this.K.getStateAsync())
                      .playbackPositionMilliseconds;
                    "number" == typeof n.vidTime &&
                      n.vidTime > t &&
                      (n.vidTime = t);
                  } catch (t) {}
                  (this._s &&
                    (this._s = this._s.filter((n) => n.commentId !== t)),
                    this.eo(n),
                    null === (e = this.ws) ||
                      void 0 === e ||
                      e.confirmPending(t),
                    null === (i = this.ws) ||
                      void 0 === i ||
                      i.refreshMessages());
                });
              })();
            }),
            (this.io = () =>
              gc(this, void 0, void 0, function* () {
                const t = yield this.oo();
                if (t.message)
                  (!(function (t, n) {
                    if (n) {
                      n.innerHTML = wu(t);
                      const e = document.getElementById(
                          "tp-allchat-report-flag",
                        ),
                        i = document.getElementById("tp-allchat-comment-help");
                      (e &&
                        e.addEventListener("click", (n) => {
                          (n.stopPropagation(), t.onReportFlagClicked());
                        }),
                        i &&
                          i.addEventListener("click", (n) => {
                            (n.stopPropagation(), t.openHelpModal());
                          }));
                    }
                  })(t, this.ro()),
                    t.commentId != this.Ns && this.Hs(t.commentId));
                else {
                  const t = this.ro();
                  t && (t.innerHTML = "");
                }
              })),
            (this.ao = () =>
              gc(this, void 0, void 0, function* () {
                (yield this.As(),
                  this.io(),
                  this.uo || (this.uo = setInterval(this.io, 1e3)));
              })),
            (this.ys = () => {
              const t = this.ro();
              (t && (t.innerHTML = ""),
                this.uo && (clearInterval(this.uo), (this.uo = void 0)));
            }),
            (this.rs = window.location.href),
            (this.Qt = t),
            (this.K = n),
            (this.Ot = e),
            (this.serviceName = i),
            (this.co = s),
            (this.hs = s()),
            this.hs && (this.Xi = !1),
            (this.bs = this.bs.bind(this)),
            (this.lo = this.lo.bind(this)),
            (this.ho = this.ho.bind(this)),
            (this.do = this.do.bind(this)),
            (this.oo = this.oo.bind(this)),
            (this.po = this.po.bind(this)),
            (this.fo = this.fo.bind(this)),
            (this.ro = this.ro.bind(this)),
            (this.Ts = this.Ts.bind(this)),
            (this.Ws = this.Ws.bind(this)),
            (this.Ss = this.Ss.bind(this)),
            (this.Is = this.Is.bind(this)),
            (this.Do = this.Do.bind(this)),
            this.Qt.registerMenuStateChangeCallback(this.Bs),
            this.Do(),
            this.ks(),
            this.As(),
            this.Xi && (this.ds = Date.now()),
            window.addEventListener("pagehide", () => this.Fs()),
            window.addEventListener("pageshow", () => {
              this.Xi && 0 === this.ds && (this.ds = Date.now());
            }));
        }
        Es() {
          return !0;
        }
        Os() {
          return this.ps;
        }
        vo() {
          var t;
          return Boolean(
            null === (t = this.ws) || void 0 === t
              ? void 0
              : t.isComposeFocused,
          );
        }
        po() {
          return document.getElementById(this.ALLCHAT_OPTIONS_ROOT_ID);
        }
        fo() {
          return document.getElementById(this.ALLCHAT_CHATBOX_ROOT_ID);
        }
        ro() {
          return document.getElementById(this.ALLCHAT_LIVECHAT_ROOT_ID);
        }
        Ts() {
          return document.getElementById(this.ALLCHAT_MODAL_ROOT_ID);
        }
        mo() {
          return document.getElementById(this.FLOATING_CHAT_BUTTON_ROOT_ID);
        }
        wo() {
          return document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID);
        }
        Is() {
          var t;
          this.Os()
            ? null === (t = this.ws) || void 0 === t || t.setControlsShowing(!0)
            : this.Ds();
        }
        Ss() {
          var t;
          this.Os()
            ? null === (t = this.ws) || void 0 === t || t.setControlsShowing(!1)
            : this.Ds();
        }
        Ws() {
          const t = !this.Xi;
          (this.yo(t, !0),
            co.L(
              new yo(ni, Xe, {
                name: t ? "allchat_toggled_on" : "allchat_toggled_off",
              }),
            ));
        }
        lo() {
          ((this.ts = !0),
            (() => {
              gc(this, void 0, void 0, function* () {
                (tu(yield this.ho(), this.fo()),
                  this.ss && (yield this.K.pause()));
              });
            })());
        }
        bs() {
          ((this.ts = !1), (this.es = ""));
          const t = this.fo();
          t && (t.innerHTML = "");
        }
        do() {
          return {
            toggleLiveChat: this.Ws,
            showCreatePost: this.lo,
            liveChatShowing: this.Xi,
          };
        }
        As() {
          return gc(this, void 0, void 0, function* () {
            yield Promise.all([this.bo(), this.Co()]);
          });
        }
        bo() {
          return gc(this, void 0, void 0, function* () {
            this.cs = yield Jr(Wr);
          });
        }
        Co() {
          return gc(this, void 0, void 0, function* () {
            if ("true" === localStorage.getItem("tpForceLegacyChat"))
              return void (this.ps = !1);
            if ("true" === localStorage.getItem("tpForceFloatingChat"))
              return void (this.ps = !0);
            const t = yield co.L(new Ur(ni, Xe, "allchat-floating-chat"));
            this.ps = Boolean(null == t ? void 0 : t.hasFeature);
          });
        }
        Fo() {
          return (
            this.ws ||
              (this.ws = new vc({
                getButtonRoot: () => this.mo(),
                getPanelRoot: () => this.wo(),
                getRevealedMessages: () => this.Us(),
                getInputProps: () => this._o(),
                openHelpModal: this.zs,
                openReportMessageModal: this.Ms,
                onCommentViewed: (t) => this.Hs(t),
                isUserInParty: () => this.co(),
                getControlsShowing: () => this.Qt.shouldMenuBeVisible(),
                removeComment: (t) => {
                  this._s &&
                    (this._s = this._s.filter((n) => n.commentId !== t));
                },
                onPanelOpened: () => {
                  this.ds = Date.now();
                },
                onPanelClosed: () => {
                  this.Fs();
                },
              })),
            this.ws
          );
        }
        oo() {
          return gc(this, void 0, void 0, function* () {
            const t = yield this.Vs();
            return t
              ? {
                  message: t.message,
                  username: t.displayName,
                  commentId: t.commentId,
                  onReportFlagClicked: () => this.Ms(t.commentId),
                  openHelpModal: this.Zs,
                  flair: t.flair,
                }
              : {};
          });
        }
        eo(t) {
          if (this._s) {
            let n = !1;
            for (let e = 0; e < this._s.length; e++)
              if (this._s[e].vidTime >= t.vidTime) {
                (this._s[e].vidTime === t.vidTime &&
                  (this._s[e].vidTime -= 1e-4),
                  this._s.splice(e, 0, t),
                  (n = !0));
                break;
              }
            n || this._s.push(t);
          } else this._s = [t];
        }
        _o() {
          return gc(this, void 0, void 0, function* () {
            const t = yield this.K.getVideoDataAsync(),
              n = this.K.getStreamingServiceName();
            return {
              curComment: this.es,
              onCommentEdited: (t) => {
                this.es = t;
              },
              onPostComment: this.no,
              onPostConfirmed: (t, n) => {
                this.so(t, n);
              },
              onPostRejected: (t, n) => {
                var e;
                null === (e = this.ws) ||
                  void 0 === e ||
                  e.rejectPendingMessage(t, n);
              },
              getVidTime: () =>
                gc(this, void 0, void 0, function* () {
                  return (yield this.K.getStateAsync())
                    .playbackPositionMilliseconds;
                }),
              service: n.toString(),
              vidId: t.videoId,
              vidDuration: t.videoDuration,
              openChangeHandleModal: this.Qs,
              openSetHandleModal: this.Ks,
              openGuidelinesModal: this.Gs,
              closeModal: this.Cs,
            };
          });
        }
        ho() {
          return gc(this, void 0, void 0, function* () {
            const t = yield this.K.getVideoDataAsync(),
              n = this.K.getStreamingServiceName(),
              e = (yield this.K.getStateAsync()).playbackState === cr.PLAYING;
            return {
              onPostComment: this.no,
              closeModal: this.Cs,
              videoControlProps: {
                pauseVideo: this.K.pause,
                playVideo: this.K.play,
                isVideoPlaying: () =>
                  gc(this, void 0, void 0, function* () {
                    return (
                      (yield this.K.getStateAsync()).playbackState ===
                      cr.PLAYING
                    );
                  }),
                shouldRender: !0,
              },
              curComment: this.es,
              onCommentEdited: (t) => {
                this.es = t;
              },
              closeChatbox: this.bs,
              getVidTime: () =>
                gc(this, void 0, void 0, function* () {
                  return (yield this.K.getStateAsync())
                    .playbackPositionMilliseconds;
                }),
              service: n.toString(),
              vidId: t.videoId,
              vidDuration: t.videoDuration,
              openHelpModal: this.Zs,
              shouldPlayVideoAfterClose: e,
              openChangeHandleModal: this.Qs,
              openSetHandleModal: this.Ks,
            };
          });
        }
        Do() {
          this.xo = setInterval(() => {
            (this.Eo(),
              window.location.href != this.rs
                ? ((this.rs = window.location.href), this.xs())
                : this.Es() ||
                  ((document.getElementById(
                    this.FLOATING_CHAT_BUTTON_ROOT_ID,
                  ) ||
                    document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID) ||
                    document.getElementById(this.ALLCHAT_OPTIONS_ROOT_ID) ||
                    document.getElementById(this.ALLCHAT_LIVECHAT_ROOT_ID)) &&
                    this.gs()));
          }, 100);
        }
        Eo() {
          var t;
          const n = this.co();
          n !== this.hs &&
            ((this.hs = n),
            this.Os()
              ? n
                ? (null === (t = this.ws) || void 0 === t || t.hideForParty(),
                  this.Fs())
                : this.injectAllChat().then(() => {
                    var t;
                    (null === (t = this.ws) || void 0 === t
                      ? void 0
                      : t.isPanelOpen) && (this.ds = Date.now());
                  })
              : n
                ? this.yo(!1, !1)
                : this.yo(
                    "true" === localStorage.getItem("tpLiveChatShowing"),
                    !1,
                  ));
        }
        yo(t, n) {
          this.Xi !== t &&
            ((this.Xi = t),
            n && localStorage.setItem("tpLiveChatShowing", this.Xi.toString()),
            fa(this.do(), this.po()),
            this.Xi
              ? (this.ao(), (this.ds = Date.now()))
              : (this.ys(), this.Fs(), this.bs()));
        }
        ko() {
          if ("help" == this.us) this.Zs();
          else if ("floatingHelp" == this.us) this.zs();
          else if ("guidelines" == this.us) this.Gs();
          else if ("report" == this.us && this.Ps) this.Ms(this.Ps);
          else if ("changeHandle" == this.us && this.Ys)
            this.Qs(this.Ys.onHandleChanged);
          else if ("setHandle" == this.us && this.qs)
            this.Ks(this.qs.onHandleSet);
          else if ("editProfilePicture" == this.us && this.Xs) {
            new au(this.Xs).open(this.Ts());
          }
        }
        injectAllChat() {
          return gc(this, void 0, void 0, function* () {
            yield this.As();
            const t = this.Qt.shouldMenuBeVisible();
            if (yield this.Ao(t)) {
              if ((this.ns || (this.$s(), (this.ns = !0)), this.Os()))
                return (
                  this.js(),
                  this.ys(),
                  (this.ts = !1),
                  yield this.Bo(t),
                  yield this.Fo().render(),
                  "true" !== localStorage.getItem("allChatHelpModalSeen") &&
                    (this.zs(),
                    localStorage.setItem("allChatHelpModalSeen", "true")),
                  void this.ko()
                );
              (yield this.Bo(t),
                fa(this.do(), this.po()),
                this.Xi && this.ao(),
                this.ts && tu(yield this.ho(), this.fo()),
                "true" !== localStorage.getItem("allChatHelpModalSeen") &&
                  (this.Zs(),
                  localStorage.setItem("allChatHelpModalSeen", "true")),
                this.ko(),
                fa(this.do(), this.po()),
                this.Xi && this.ao());
            } else
              this.ls ||
                ((this.ls = !0),
                co.L(
                  new yo(ni, Xe, {
                    name: "allchat_page_invalid",
                    message: {
                      text: `{"serviceName": "${this.serviceName}", "url": "${window.location.href}"}`,
                    },
                  }),
                ));
          });
        }
      }
      var wc = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const yc = {
        [si.NETFLIX.toString()]: class extends mc {
          constructor() {
            (super(...arguments),
              (this.Io = !1),
              (this.Bo = (t) =>
                wc(this, void 0, void 0, function* () {
                  if (this.Os()) {
                    const n =
                        document.querySelector(".watch-video") ||
                        document.querySelector("[data-uia=player]"),
                      e = document.body;
                    return (
                      document.getElementById(
                        this.FLOATING_CHAT_BUTTON_ROOT_ID,
                      ) || ea(this.FLOATING_CHAT_BUTTON_ROOT_ID, e, "", !1),
                      document.getElementById(
                        this.FLOATING_CHAT_PANEL_ROOT_ID,
                      ) || ea(this.FLOATING_CHAT_PANEL_ROOT_ID, e, "", !1),
                      document.getElementById(this.ALLCHAT_MODAL_ROOT_ID) ||
                        ea(this.ALLCHAT_MODAL_ROOT_ID, n, "", !1),
                      void (this.Io = t)
                    );
                  }
                  const n =
                    document.querySelector(".watch-video") ||
                    document.querySelector("[data-uia=player]");
                  if ((ea(this.ALLCHAT_MODAL_ROOT_ID, n), t)) {
                    ((this.Io = !0), yield ze(20)());
                    const t = document.querySelector(
                        ".watch-video--flag-container",
                      ),
                      n = document.querySelector(
                        ".watch-video--bottom-controls-container",
                      );
                    (n &&
                      (this.ts && (n.style.display = "none"),
                      ea(
                        this.ALLCHAT_CHATBOX_ROOT_ID,
                        n.parentElement,
                        "display: flex",
                      )),
                      ea(this.ALLCHAT_OPTIONS_ROOT_ID, t));
                    const e = document.querySelector(
                      ".watch-video--back-container",
                    );
                    e &&
                      (e.setAttribute(
                        "style",
                        e.getAttribute("style") + " flex-direction: column;",
                      ),
                      ea(this.ALLCHAT_LIVECHAT_ROOT_ID, e));
                  } else {
                    this.Io = !1;
                    const t = document.querySelector("[data-uia=player]");
                    (ea(this.ALLCHAT_LIVECHAT_ROOT_ID, t, "padding: 20px;"),
                      ea(
                        this.ALLCHAT_CHATBOX_ROOT_ID,
                        t,
                        "position: fixed; bottom: 0; left: 0; width: 100%",
                      ));
                  }
                })),
              (this.So = (t) => {
                const n = t.getBoundingClientRect();
                return {
                  x: Math.random() * n.width + n.left,
                  y: Math.random() * n.height + n.top,
                };
              }),
              (this.$o = (t) => {
                const { x: n, y: e } = this.So(t),
                  i = new PointerEvent("pointermove", {
                    bubbles: !0,
                    cancelable: !0,
                    clientX: n,
                    clientY: e,
                    pointerType: "mouse",
                    view: window,
                  });
                t.dispatchEvent(i);
              }));
          }
          Es() {
            return Ne(new URL(window.location.href));
          }
          Ao(t) {
            return wc(this, void 0, void 0, function* () {
              if (!this.Es()) return !1;
              if (this.Os()) {
                const n = ["[data-uia=player]"];
                return (
                  t && n.push(".watch-video"),
                  n.every((t) => null !== document.querySelector(t))
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
          jo(t) {
            const n = document.querySelector(
              ".watch-video--bottom-controls-container",
            );
            n && (n.style.display = t);
          }
          lo() {
            (this.jo("none"), super.lo());
          }
          bs() {
            (this.jo("block"), super.bs());
          }
          Ws() {
            (this.jo("block"), super.Ws());
          }
          ho() {
            const t = Object.create(null, { ho: { get: () => super.ho } });
            return wc(this, void 0, void 0, function* () {
              const n = yield t.ho.call(this),
                e = document.querySelector("video");
              return (
                e &&
                  ((n.videoControlProps.pauseVideo = () =>
                    wc(this, void 0, void 0, function* () {
                      e.pause();
                    })),
                  (n.videoControlProps.playVideo = () =>
                    wc(this, void 0, void 0, function* () {
                      e.play();
                    }))),
                n
              );
            });
          }
          do() {
            return Object.assign(Object.assign({}, super.do()), {
              containerStyling: "margin-left: 8px; top: 5px;",
            });
          }
          To() {
            return this.Os()
              ? null != this.us || this.vo()
              : null != this.us || this.ts;
          }
          Do() {
            (super.Do(),
              (this.Mo = setInterval(() => {
                if (!this.To()) return;
                if ((this.Os() && this.vo()) || this.Io) {
                  const t = document.querySelector("[data-uia=player]");
                  t && this.$o(t);
                }
              }, 500)));
          }
        },
      };
      const bc = new Set([
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
      function Cc(t) {
        return t
          ? t
              .replace(/\s+/g, " ")
              .replace(/\s+[-|:]\s+teleparty$/i, "")
              .trim()
          : "";
      }
      function Fc(t) {
        const n = Cc(t);
        if (n.length < 2 || n.length > 160) return !1;
        const e = n.toLowerCase();
        if (bc.has(e)) return !1;
        if (/^(sign|log)\s?in$/i.test(n) || /^episode\s+\d+$/i.test(n))
          return !1;
        const i = n.split(" "),
          s = n.replace(/[^a-z0-9]/gi, "");
        return i.length <= 18 && s.length >= 2;
      }
      function _c(t, n, e, i) {
        if (n) return `${null != t ? t : ""}|${n}`;
        let s = i;
        try {
          const t = new URL(i);
          s = `${t.origin}${t.pathname}`;
        } catch (t) {}
        return `${null != t ? t : ""}|${((o = e), Cc(o).toLowerCase())}|${s}`;
        var o;
      }
      function xc(t, n, e) {
        var i, s, o;
        const r = null !== (i = t.content) && void 0 !== i ? i : {},
          a =
            (null == n ? void 0 : n.title) || Cc(e.fallbackTitle) || Cc(r.name),
          u = {
            id: r.id || t.videoId || "",
            url: r.url || e.fallbackUrl,
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
          c = Ec(r.season);
        void 0 !== c && (u.season = c);
        const l = Ec(r.episode);
        return (void 0 !== l && (u.episode = l), u);
      }
      function Ec(t) {
        if (void 0 !== t && Number.isInteger(t) && t > 0) return t;
      }
      var kc = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class Ac {
        constructor(t, n, e, i, s = !1, o = "") {
          ((this.Po = []),
            (this.Lo = !1),
            (this.Ro = new Set()),
            (this.Oo = (t, n) => {
              try {
                this.Vo.push({
                  level: t,
                  message: n
                    .map((t) => {
                      try {
                        return "object" == typeof t
                          ? JSON.stringify(t)
                          : String(t);
                      } catch (n) {
                        return String(t);
                      }
                    })
                    .join(" "),
                });
              } catch (t) {}
            }),
            (this.Ot = t),
            (this.K = n),
            (this.Rn = e),
            (this.Qt = i),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = i),
                console.log("Setting Page COntrols"))
              : (i.setChatApi(this.Ot),
                console.log("Resetting Chat Api for old controls")),
            (this.Uo = new dr(this.Ot, this.K, this.Qt)),
            (this.q = this.createVideoMessageForwarder(
              this.K,
              this.Ot,
              this.Rn,
            )),
            (this.Ho = !1),
            (this.No = !1),
            (this.Go = !1),
            (this.Ht = new er()),
            this.Ht.addMessageListener(this.q),
            this.Ht.addMessageListener(this.Uo),
            this.Ht.addMessageListener(this),
            (this.zo = !1),
            (this.serviceName = o),
            (this.Vo = []),
            s &&
              (this.Zo = (function (t, n, e, i, s) {
                return t ? new yc[t](n, e, i, t, s) : void 0;
              })(
                this.serviceName,
                this.Qt,
                this.K,
                this.Ot,
                () => this.q.isInParty() || this.Ot.inSession,
              )),
            this.Wo(),
            this.Qo(),
            this.Yo(),
            this.Jo());
        }
        createVideoMessageForwarder(t, n, e) {
          return new Vr(t, n, e, this);
        }
        Jo() {
          var t, n;
          let e = 0;
          const i =
              null !==
                (n =
                  null === (t = window.teleparty) || void 0 === t
                    ? void 0
                    : t.tabId) && void 0 !== n
                ? n
                : 0,
            s = () =>
              kc(this, void 0, void 0, function* () {
                if (!(
                  this.q.isInParty() ||
                  this.Ot.inSession ||
                  this.No ||
                  e >= 5
                )) {
                  e++;
                  try {
                    co.L(new xr(ni, Xe, { tabId: i, persist: !0 }));
                    const t = yield this.Ko();
                    yield co.L(t);
                  } catch (t) {
                    ao(
                      "Session restore retry skipped until video metadata is ready",
                      t,
                    );
                  }
                  !this.q.isInParty() &&
                    !this.Ot.inSession &&
                    e < 5 &&
                    setTimeout(s, 3e3);
                }
              });
          setTimeout(s, 2e3);
        }
        Yo() {
          ((this.Po = []),
            document.addEventListener("click", (t) => {
              t.target &&
                (this.qo = { interactionType: "click", element: t.target });
            }),
            document.addEventListener("keydown", (t) => {
              this.qo = { interactionType: "keydown", keyPressed: t.key };
            }));
        }
        logInteraction(t, n = !1) {
          n
            ? this.Po.push({
                interactionType: "websocketMessageReceived",
                videoAction: t,
              })
            : this.qo &&
              (this.Po.push(
                Object.assign(Object.assign({}, this.qo), { videoAction: t }),
              ),
              (this.qo = void 0));
        }
        Qo() {
          const t = console.log.bind(console),
            n = console.warn.bind(console),
            e = console.error.bind(console);
          ((console.log = (...n) => {
            (this.Oo("log", n), t(...n));
          }),
            (console.warn = (...t) => {
              (this.Oo("warn", t), n(...t));
            }),
            (console.error = (...t) => {
              (this.Oo("error", t), e(...t));
            }));
        }
        Xo() {
          return kc(this, void 0, void 0, function* () {
            (yield this.Qt.addTpIcon(), this.Qt.startEventListener());
          });
        }
        loadBrowseButton() {
          return kc(this, void 0, void 0, function* () {
            (yield this.Qt.addTpIcon(), this.Qt.startEventListener());
          });
        }
        Wo() {
          const t = chrome.runtime.connect({ name: "content-script-health" });
          (t.onDisconnect.addListener(() => {
            if (this.q.isInParty()) {
              console.log("Lost background script. Teardown");
              const t = { showAlert: this.Ot.inSession, alertModal: Zo };
              this.tr(t);
            }
          }),
            t.onMessage.addListener(() => {
              (ao("Got background script"), (this.zo = !0));
            }));
          const n = () => {
              (console.log("Requesting ping"), t.postMessage({ type: "ping" }));
            },
            e = setInterval(() => {
              this.zo ? clearInterval(e) : n();
            }, 3e3);
          n();
        }
        onMessage(t, n, e) {
          if (t.target == ni) {
            if (t.type === fo.IS_CONTENT_SCRIPT_READY) {
              if (this.Ho) {
                this.nr();
                e({ ready: !0 });
              } else ((this.No = !0), this.er().then(e));
              return !0;
            }
            if (t.type === fo.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE)
              return (
                this.K.getCustomStartPartyButtonMessage().then((t) => e(t)),
                !0
              );
            if (t.type === fo.IS_VIDEO_READY)
              return (
                console.log(
                  "Checking if video is ready",
                  !!this.K.getVideoElement(),
                ),
                e({ hasVideo: !!this.K.getVideoElement() }),
                !0
              );
            if (t.type === fo.GET_INIT_DATA) {
              const t = this.ir();
              return (e(t), !0);
            }
            if (t.type === fo.DISCONNECT && t.sender == ti) {
              const t = new fr(ni, Xe, Yo);
              (co.L(t), e());
            } else {
              if (t.type == po.TEARDOWN) {
                const n = t;
                return (this.tr(n.data), e(), !0);
              }
              if (t.type === po.ON_NOTIF) this.sr();
              else if (t.type === po.GET_ALLCHAT_HAS_FOCUS)
                e("true" === localStorage.getItem("allchat-has-focus"));
              else if (t.type === po.GET_VALIDATIONS_FAILURE_INFO) {
                let n;
                if (t.includeDiagnostics) {
                  n = qe(document.documentElement.outerHTML);
                }
                const i = qe(JSON.stringify(this.Vo)),
                  s = this.Po.map((t) => {
                    let n;
                    if (
                      "click" === t.interactionType &&
                      t.element instanceof HTMLElement
                    ) {
                      n = t.element.cloneNode(!1).outerHTML;
                    }
                    return {
                      interactionType: t.interactionType,
                      videoAction: t.videoAction,
                      keyPressed: t.keyPressed,
                      elementHtml: n,
                    };
                  }),
                  o = qe(JSON.stringify(s)),
                  r = qe(JSON.stringify(this.Ot.getMessages(!0)));
                return (
                  e({
                    html_gzip_base64: n,
                    service_worker_console_dump_gzip_base64: i,
                    system_chat_msgs_gzip_base64: r,
                    interaction_mappings_gzip_base64: o,
                  }),
                  !0
                );
              }
            }
          }
          return !1;
        }
        nr() {
          this.Ot.usesChatMountPolling() &&
            this.Ot.inSession &&
            !this.Ot.isPartyWindowsActive() &&
            !this.Ot.isChatInjected() &&
            (this.Ot.scheduleChatInjectRetryIfNeeded(), this.Ot.reloadChat());
        }
        sr() {
          console.log("Show Notification");
        }
        tr(t) {
          var n, e, i;
          if (t.showAlert && t.alertModal) {
            const e =
              null !== (n = t.buttonUrl) && void 0 !== n
                ? n
                : this.Ot.getPartyUrl();
            Wo(t.alertModal, e);
          }
          (this.Qt.teardown(),
            this.q.teardown(),
            this.Uo.teardown(),
            this.Rn.stopListening(),
            this.Qt.startEventListener());
          const s = {
              name: "error",
              action: {
                description:
                  null === (e = t.alertModal) || void 0 === e
                    ? void 0
                    : e.title,
                reason:
                  null === (i = t.alertModal) || void 0 === i
                    ? void 0
                    : i.content,
              },
            },
            o = new yo(ni, Xe, s);
          co.L(o);
        }
        be(t) {
          if (
            "Please open a video on Amazon Prime Video then click on the Tp icon" ===
            t
          )
            return;
          const n = new yo(ni, Xe, { name: "error", action: { reason: t } });
          co.L(n);
        }
        rr() {
          return kc(this, void 0, void 0, function* () {
            return Ze(() => this.zo, 5e3)();
          });
        }
        er() {
          return kc(this, void 0, void 0, function* () {
            try {
              yield this.rr();
              const t = yield this.ar();
              return (this.Xo(), t);
            } catch (t) {
              const n = { message: Co, showButton: !1 };
              return (this.be(Co), { ready: !1, error: n });
            } finally {
              this.No = !1;
            }
          });
        }
        ar() {
          return kc(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.K.waitVideoApiReadyAsync();
              const n = yield this.ur();
              (n && n.error
                ? (ao("Error is:", n.error),
                  (t = { message: n.error, showButton: !0 }),
                  (this.Ho = !0),
                  window.teleparty &&
                    (window.teleparty.contentScriptReady = !0))
                : (n && n.showReviewMessage && (this.Go = !0),
                  (this.Ho = !0),
                  window.teleparty &&
                    (window.teleparty.contentScriptReady = !0)),
                this.Zo && this.Zo.injectAllChat(),
                this.Ho && this.cr());
            } catch (n) {
              ((t = { message: n.message, showButton: !1 }),
                this.be(n.message),
                this.Rn.logListenerElementsDetected());
            }
            return { ready: this.Ho, error: t };
          });
        }
        ir() {
          return {
            reactionsDisabled: this.Ot.sessionReactionsDisabled,
            userReactionsDisabled: this.Ot.userReactionsDisabled,
            inSession: this.Ot.inSession,
            isChatVisible: this.Ot.isPartyWindowsActive()
              ? this.Ot.getChatWindowVisible()
              : this.Ot.getChatVisible(),
            partyUrl: this.Ot.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.Ot.isPartyWindowsActive(),
            sessionId: this.Ot.getSessionId(),
          };
        }
        cr() {
          var t;
          this.Lo ||
            (null === (t = window.teleparty) || void 0 === t
              ? void 0
              : t.contentDetectedLoggerStarted) ||
            ((this.Lo = !0),
            window.teleparty &&
              (window.teleparty.contentDetectedLoggerStarted = !0),
            this.lr(),
            (this.hr = setInterval(() => {
              this.lr();
            }, 15e3)));
        }
        lr() {
          var t, n;
          return kc(this, void 0, void 0, function* () {
            if (!this.q.isInParty())
              try {
                const e = yield this.K.getVideoDataAsync(),
                  i = (function (t) {
                    var n;
                    const e = [
                      null == t ? void 0 : t.originalTitle,
                      null == t ? void 0 : t.videoTitle,
                      null === (n = null == t ? void 0 : t.content) ||
                      void 0 === n
                        ? void 0
                        : n.name,
                    ]
                      .map(Cc)
                      .find(Fc);
                    return e ? { title: e } : void 0;
                  })(e);
                if (!i) return;
                const s =
                    e.service ||
                    (null === (t = e.content) || void 0 === t
                      ? void 0
                      : t.service) ||
                    this.K.getInternalStreamingServiceName(),
                  o = _c(
                    s,
                    e.videoId ||
                      (null === (n = e.content) || void 0 === n
                        ? void 0
                        : n.id),
                    i.title,
                    window.location.href,
                  );
                if (this.Ro.has(o)) return;
                if (this.q.isInParty()) return;
                this.Ro.add(o);
                const r = {
                    name: "content_detected",
                    page: {
                      type: "watch",
                      name: i.title,
                      url: window.location.href,
                      referrer: document.referrer || "",
                    },
                    content: xc(e, i, { fallbackUrl: window.location.href }),
                    action: {
                      source: "content_detector",
                      description: "content title detected",
                    },
                  },
                  a = new yo(ni, Xe, r, go.METIS);
                yield co.L(a, 2500);
              } catch (t) {
                ao("Content detected: VideoData unavailable", t);
              }
          });
        }
        ur() {
          return kc(this, void 0, void 0, function* () {
            const t = yield this.Ko();
            return co.L(t);
          });
        }
        Ko() {
          return kc(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.K.getVideoDataAsync()).videoId };
            return new nr(ni, Xe, t);
          });
        }
      }
      var Bc = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class Ic {
        constructor() {
          ((this.dr = 0), (this.Cn = !1), (this.pr = !1));
        }
        set hostOnly(t) {
          this.Cn = t;
        }
        get hostOnly() {
          return this.Cn;
        }
        get scheduledPartyPlaybackOnly() {
          return this.pr;
        }
        set scheduledPartyPlaybackOnly(t) {
          this.pr = t;
        }
        applyPartySeekIfAllowed(t) {
          return Bc(this, void 0, void 0, function* () {
            this.pr || (yield this.setCurrentTime(t));
          });
        }
        freeze(t) {
          return Bc(this, void 0, void 0, function* () {
            this.dr++;
            try {
              (yield this.pause(), yield ze(t)(), yield this.play());
            } finally {
              this.dr--;
            }
          });
        }
        jumpToNextEpisode(t) {
          return Bc(this, void 0, void 0, function* () {
            yield this.jumpToOtherEpisode(t);
          });
        }
        waitBeforeNativePartyStartAsync() {
          return Bc(this, void 0, void 0, function* () {
            yield this.waitVideoApiReadyAsync();
          });
        }
        get uiEventsHappening() {
          return this.dr;
        }
        incrementUiEventsHappening(t) {
          this.dr += t;
        }
        Dr(t, n, e = 1500) {
          return Bc(this, void 0, void 0, function* () {
            const i = "tp-player-" + Date.now() + "-" + Ic.vr++;
            return new Promise((s, o) => {
              const r = (t) => {
                  var e;
                  t.source === window &&
                    (null === (e = t.data) || void 0 === e
                      ? void 0
                      : e.type) === n &&
                    t.data.requestId === i &&
                    (window.clearTimeout(a),
                    window.removeEventListener("message", r),
                    s(t.data));
                },
                a = window.setTimeout(() => {
                  (window.removeEventListener("message", r),
                    o(new Error(n + " timeout")));
                }, e);
              (window.addEventListener("message", r),
                window.postMessage(
                  Object.assign(Object.assign({}, t), { requestId: i }),
                  "*",
                ));
            });
          });
        }
        getCustomStartPartyButtonMessage() {
          return Bc(this, void 0, void 0, function* () {
            return null;
          });
        }
        beginRemoteSyncApply() {}
        endRemoteSyncApply() {}
        shouldSuppressLocalBroadcast() {
          return this.dr > 0;
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
        getVideoContent(t, n, e, i, s) {
          let o, r, a;
          return (
            s &&
              (s.episodeNum && !isNaN(s.episodeNum) && (o = s.episodeNum),
              s.seasonNum && !isNaN(s.seasonNum) && (r = s.seasonNum),
              (a = s.title)),
            {
              id: t,
              type: i,
              name: n,
              url: e,
              episode: o,
              season: r,
              episode_name: a,
              service: this.getInternalStreamingServiceName(),
            }
          );
        }
        logError(t, n) {
          console.error("ERROR", t, n);
          const e = new yo(ni, Xe, {
            name: "video_error",
            action: { description: t, reason: n },
          });
          co.L(e);
        }
        doAdCheck() {
          return Bc(this, void 0, void 0, function* () {});
        }
        triggerNextEpisodeClick() {}
      }
      Ic.vr = 0;
      var Sc = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class $c extends Ic {
        constructor() {
          (super(),
            (this.gr = 0),
            (this.mr = 0),
            (this.wr = !1),
            (this.yr = []),
            (this.br = void 0),
            (this.uniqTitle = ""));
        }
        onNode(t) {
          var n;
          const e = t.detail;
          "getAd" == e.type
            ? ((this.gr = Date.now()), (this.yr = e.adList))
            : "getData" == e.type
              ? ((this.mr = Date.now()), (this.br = e.data))
              : "tpHboAttached" === e.type
                ? (this.wr =
                    (null !== (n = e.attached) && void 0 !== n ? n : 0) > 0)
                : "tpHboAdState" === e.type && (this.Cr = !!e.inAd);
        }
        updateAdList() {
          return Sc(this, void 0, void 0, function* () {
            try {
              const t = Date.now(),
                n = new CustomEvent("MaxVideoMessage", {
                  detail: { type: "getAdList" },
                });
              yield Ze(
                () => (window.dispatchEvent(n), 0 != this.gr && this.gr > t),
                500,
                10,
              )();
            } catch (t) {
              console.log(t);
            }
          });
        }
        getVideoLookupData() {
          return Sc(this, void 0, void 0, function* () {
            try {
              const t = Date.now(),
                n = new CustomEvent("MaxVideoMessage", {
                  detail: { type: "getVideoLookupData" },
                });
              yield Ze(
                () => (window.dispatchEvent(n), 0 != this.mr && this.mr > t),
                500,
                10,
              )();
            } catch (t) {
              console.log(t);
            }
          });
        }
        waitVideoApiReadyAsync() {
          return Sc(this, void 0, void 0, function* () {
            yield Ze(
              () => !!document.querySelector("#layer-root-player-screen video"),
              1 / 0,
            )();
            const t = Date.now(),
              n = new CustomEvent("MaxVideoMessage", {
                detail: { type: "getAdList" },
              });
            try {
              yield Ze(
                () => (window.dispatchEvent(n), 0 != this.gr && this.gr > t),
                3e3,
              )();
            } catch (t) {}
          });
        }
        waitBeforeNativePartyStartAsync() {
          return Sc(this, void 0, void 0, function* () {});
        }
        Fr() {
          const t = this.getVideoElement();
          return null == t
            ? cr.NOT_READY
            : t.seeking
              ? t.paused
                ? cr.PAUSED
                : cr.PLAYING
              : t.readyState < t.HAVE_FUTURE_DATA
                ? cr.LOADING
                : t.paused
                  ? cr.PAUSED
                  : cr.PLAYING;
        }
        setVideoEventListener(t) {
          this.Rn = t;
        }
        waitVideoDoneLoadingAsync() {
          var t;
          return Sc(this, void 0, void 0, function* () {
            return (
              yield null === (t = this.Rn) || void 0 === t ? void 0 : t.$t(),
              Ze(() => this.Fr() !== cr.LOADING, 1e4)()
            );
          });
        }
        getStreamingServiceName() {
          return si.HBO_MAX;
        }
        _r() {
          const t = this.getVideoElement();
          return t ? t.duration - this.Er() : 0;
        }
        Er() {
          const t = this.yr;
          let n = 0;
          if (t)
            try {
              t.forEach((t) => {
                n += t.adDuration / 1e3;
              });
            } catch (t) {
              return 0;
            }
          return n;
        }
        kr(t) {
          var n;
          const e =
              null === (n = this.getVideoElement()) || void 0 === n
                ? void 0
                : n.currentTime,
            i = this.yr;
          let s = 0;
          if (i && null != e)
            try {
              i.forEach((t) => {
                e > t.adStartTime / 1e3 &&
                  (e < (t.adStartTime + t.adDuration) / 1e3
                    ? (s += e - t.adStartTime / 1e3)
                    : (s += t.adDuration / 1e3));
              });
            } catch (t) {
              return 0;
            }
          return s;
        }
        Ar(t) {
          var n;
          const e =
              null === (n = this.getVideoElement()) || void 0 === n
                ? void 0
                : n.currentTime,
            i = this.yr;
          let s = 0;
          if (i && null != e)
            try {
              i.forEach((t) => {
                e - s < (t.adStartTime + t.adDuration) / 1e3
                  ? (s += e - t.adStartTime / 1e3)
                  : (s += t.adDuration / 1e3);
              });
            } catch (t) {
              return 0;
            }
          return s;
        }
        getCurrentTime() {
          const t = this.getVideoElement();
          if (t) {
            const n = this.kr(),
              e = t.currentTime - n;
            return Math.floor(1e3 * e);
          }
        }
        possibleAd() {
          const t = this.getVideoElement(),
            n = null == t ? void 0 : t.currentTime,
            e = this.yr;
          let i = 0;
          if (e && n)
            try {
              return e.some((t) => {
                const e = n,
                  s = t.adStartTime / 1e3;
                if (e > s) {
                  if (e < s + t.adDuration / 1e3) return !0;
                  i += t.adDuration / 1e3;
                }
                return !1;
              });
            } catch (t) {
              return !1;
            }
          return !1;
        }
        setCurrentTime(t) {
          return Sc(this, void 0, void 0, function* () {
            this.dr += 1;
            try {
              const n = this.getVideoElement();
              n && (n.currentTime = t / 1e3 + this.kr(t / 1e3));
            } finally {
              this.dr -= 1;
            }
          });
        }
        Br() {
          return this.getCurrentTime();
        }
        getStateAsync() {
          return new Promise((t, n) => {
            const e = this.Fr(),
              i = this.Br();
            void 0 !== i
              ? t({ playbackState: e, playbackPositionMilliseconds: i })
              : n();
          });
        }
        getUpdateSessionDataAsync() {
          return Sc(this, void 0, void 0, function* () {
            const t = this.Br();
            if (void 0 === t) throw new Error();
            const n = this.getVideoElement();
            return {
              state: n && !n.paused ? ur.PLAYING : ur.PAUSED,
              lastKnownTime: t,
              lastKnownTimeUpdatedAt: Date.now(),
            };
          });
        }
        isWatchingAd() {
          var t, n;
          if (this.wr && void 0 !== this.Cr) return this.Cr;
          return (
            !!document.querySelector('[data-testid="player-ux-ad-label"]') ||
            (null !==
              (n =
                null === (t = document.querySelector('[data-testid="ad"]')) ||
                void 0 === t
                  ? void 0
                  : t.children.length) && void 0 !== n
              ? n
              : 0) > 0
          );
        }
        Ir() {
          var t;
          const n = document.querySelector(
            '[data-testid="player-ux-asset-title"]',
          );
          return n && null !== (t = n.innerHTML) && void 0 !== t ? t : "";
        }
        Sr() {
          return document.querySelector(
            '[data-testid="player-ux-season-episode"]',
          )
            ? jr.EPISODE
            : jr.FEATURE;
        }
        $r() {
          var t, n, e, i, s;
          let o = {};
          const r =
            null ===
              (t = document.querySelector(
                '[data-testid="player-ux-season-episode"]',
              )) || void 0 === t
              ? void 0
              : t.textContent;
          if (r) {
            const t =
                null !== (n = null == r ? void 0 : r.match(/S(\d*)/)) &&
                void 0 !== n
                  ? n
                  : [""],
              a =
                null !== (e = null == r ? void 0 : r.match(/E(\d*)/)) &&
                void 0 !== e
                  ? e
                  : [""];
            o = {
              episodeNum: Number(a[1]),
              seasonNum: Number(t[1]),
              title:
                null !==
                  (s =
                    null ===
                      (i = document.querySelector(
                        '[data-testid="player-ux-asset-subtitle"]',
                      )) || void 0 === i
                      ? void 0
                      : i.textContent) && void 0 !== s
                  ? s
                  : this.Ir(),
            };
          }
          return o;
        }
        uniqueVideoTitle() {
          var t;
          return (
            this.Ir() +
            (null !== (t = this.$r().title) && void 0 !== t ? t : "")
          );
        }
        getVideoDataAsync() {
          return Sc(this, void 0, void 0, function* () {
            yield this.getVideoLookupData();
            const t = this.uniqueVideoTitle();
            return (
              t != this.uniqTitle && (this.uniqTitle = t),
              new Promise((t, n) => {
                var e, i, s;
                const o = this._r(),
                  r = null !== (e = this.jr()) && void 0 !== e ? e : "",
                  a = this.getScreenSize(),
                  u = null !== (i = this.Ir()) && void 0 !== i ? i : "",
                  c = this.Sr(),
                  l = this.$r(),
                  h = this.getVideoContent(r, u, window.location.href, c, l);
                if (void 0 === o || void 0 === r || void 0 === u)
                  return void n();
                let d, p, f, D;
                (this.br &&
                  ((d = this.br.title),
                  (D = this.br.type),
                  (f = this.br.year),
                  (p =
                    null === (s = this.br.episodeLookup) || void 0 === s
                      ? void 0
                      : s.airDate)),
                  t({
                    videoId: r,
                    videoTitle: u,
                    videoDuration: o,
                    screen: a,
                    videoType: c,
                    content: h,
                    videoState: this.Fr(),
                    originalTitle: d,
                    episodeYear: p,
                    type: D,
                    releaseYear: f,
                    service: "HboMax",
                  }));
              })
            );
          });
        }
        jr() {
          var t;
          return null !== (t = $i.getVideoId(new URL(window.location.href))) &&
            void 0 !== t
            ? t
            : "";
        }
        getVideoElement() {
          return document.querySelector("video");
        }
        jumpToOtherEpisode(t) {
          var n;
          return Sc(this, void 0, void 0, function* () {
            if (this.jr() != t.videoId)
              try {
                yield null === (n = this.Rn) || void 0 === n
                  ? void 0
                  : n.reloadNextEpisode();
              } catch (t) {
                console.log("Failed to jump to next episode:", t);
              }
            else console.log("Already on correct episode");
          });
        }
        freeze(t) {
          return Sc(this, void 0, void 0, function* () {
            this.dr += 1;
            try {
              (yield this.pause(), yield ze(t)(), yield this.play());
            } finally {
              this.dr -= 1;
            }
          });
        }
        pause() {
          var t;
          return Sc(this, void 0, void 0, function* () {
            this.dr += 1;
            try {
              null === (t = this.getVideoElement()) ||
                void 0 === t ||
                t.pause();
            } catch (t) {
              if (this.Fr() !== cr.PAUSED)
                throw (
                  this.logError("video was unable to pause correctly", t),
                  t
                );
            } finally {
              this.dr -= 1;
            }
          });
        }
        play() {
          var t;
          return Sc(this, void 0, void 0, function* () {
            this.dr += 1;
            try {
              yield null === (t = this.getVideoElement()) || void 0 === t
                ? void 0
                : t.play();
            } catch (t) {
              if (this.Fr() !== cr.PLAYING)
                throw (
                  this.logError("video was unable to play correctly", t),
                  t
                );
            } finally {
              this.dr -= 1;
            }
          });
        }
        getInternalStreamingServiceName() {
          return Fi.HBO_MAX;
        }
      }
      var jc,
        Tc = e(5089),
        Mc = e.n(Tc);
      class Pc extends So {
        constructor(t, n, e) {
          (super(t, n, Io.SET_TYPING), (this.data = e));
        }
      }
      class Lc extends So {
        constructor(t, n, e) {
          (super(t, n, Io.SEND_MESSAGE), (this.data = e));
        }
      }
      class Rc extends So {
        constructor(t, n, e) {
          (super(t, n, Io.BROADCAST_USER_SETTINGS), (this.data = e));
        }
      }
      class Oc extends So {
        constructor(t, n, e) {
          (super(t, n, Io.SEND_REACTION), (this.data = e));
        }
      }
      class Vc extends So {
        constructor(t, n, e) {
          (super(t, n, Io.SEND_GIF), (this.data = e));
        }
      }
      var Uc = new Uint8Array(16);
      function Hc() {
        if (
          !jc &&
          !(jc =
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
        return jc(Uc);
      }
      const Nc =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const Gc = function (t) {
        return "string" == typeof t && Nc.test(t);
      };
      for (var zc = [], Zc = 0; Zc < 256; ++Zc)
        zc.push((Zc + 256).toString(16).substr(1));
      const Wc = function (t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e = (
            zc[t[n + 0]] +
            zc[t[n + 1]] +
            zc[t[n + 2]] +
            zc[t[n + 3]] +
            "-" +
            zc[t[n + 4]] +
            zc[t[n + 5]] +
            "-" +
            zc[t[n + 6]] +
            zc[t[n + 7]] +
            "-" +
            zc[t[n + 8]] +
            zc[t[n + 9]] +
            "-" +
            zc[t[n + 10]] +
            zc[t[n + 11]] +
            zc[t[n + 12]] +
            zc[t[n + 13]] +
            zc[t[n + 14]] +
            zc[t[n + 15]]
          ).toLowerCase();
        if (!Gc(e)) throw TypeError("Stringified UUID is invalid");
        return e;
      };
      const Qc = function (t, n, e) {
        var i = (t = t || {}).random || (t.rng || Hc)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), n)) {
          e = e || 0;
          for (var s = 0; s < 16; ++s) n[e + s] = i[s];
          return n;
        }
        return Wc(i);
      };
      const Yc = "data-tp-in-party";
      function Jc(t) {
        t
          ? document.documentElement.setAttribute(Yc, "true")
          : document.documentElement.removeAttribute(Yc);
      }
      var Kc = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      const qc = new (class {
        isUserIconValid(t) {
          if (!t) return !1;
          if (t.includes("/profile-images/")) return !0;
          if (t.includes("?newIconUrl=")) {
            const [n, e] = t.split("?newIconUrl=");
            return Fa.includes(e) && ba.includes(n);
          }
          return Fa.includes(t);
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return "string" == typeof t && t.length > 0 && t.length < 20;
        }
        getDefaultUserIcon() {
          const t = Math.floor(Math.random() * Ca.length);
          return Ca[t];
        }
        getDefaultUserNickName() {
          return "";
        }
        Tr(t) {
          return Kc(this, void 0, void 0, function* () {
            try {
              yield Br.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return Kc(this, void 0, void 0, function* () {
            const t = yield ar.getAllItemsAsync(),
              n = this.validateStorageData(t);
            return (JSON.stringify(t) !== JSON.stringify(n) && this.Tr(n), n);
          });
        }
        validateStorageData(t) {
          var n;
          const e = "object" == typeof t ? Object.assign({}, t) : {};
          return (
            (null === (n = e.userIcon) || void 0 === n
              ? void 0
              : n.includes("?newIconUrl=")) &&
              (e.userIcon = e.userIcon.split("?newIconUrl=")[1]),
            this.isUserIconValid(e.userIcon) ||
              (e.userIcon = this.getDefaultUserIcon()),
            this.isUserNickNameValid(e.userNickname) ||
              (e.userNickname = this.getDefaultUserNickName()),
            e
          );
        }
      })();
      Object.freeze(qc);
      const Xc = qc;
      var tl;
      !(function (t) {
        ((t.HEART = "heart"),
          (t.ANGRY = "angry"),
          (t.FIRE = "fire"),
          (t.LAUGH = "laugh"),
          (t.CRY = "cry"),
          (t.SURPRISE = "surprise"));
      })(tl || (tl = {}));
      const nl = (t) => (n) => {
        var e;
        if (t.length) {
          const i = document.querySelector(t),
            s =
              null === (e = null == i ? void 0 : i.shadowRoot) || void 0 === e
                ? void 0
                : e.querySelector(n);
          return s ? jQuery(s) : jQuery();
        }
        return jQuery(n);
      };
      var el = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class il {
        constructor(t, n) {
          ((this.Mr = this.Pr.bind(this)),
            (this.Lr = this.resetIdleTimer.bind(this)),
            (this.Jt = (t) => {
              ("TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(),
                t.data && "emoji-click" === t.data.type && this.Rr(t.data));
            }),
            (this.Or = (t) => {
              (t.target !== this.Vr("#chat-input")[0] &&
                t.target !== this.Vr("#nickname-edit")[0]) ||
                t.stopImmediatePropagation();
            }),
            (this.Ur = (t) => {
              this.Ot.onVideoClick();
              const n = t.target;
              let e = "" !== n.id ? n.id : n.className;
              e = n.getAttribute("data-tp-id")
                ? n.getAttribute("data-tp-id")
                : e;
              const i = {
                  name: "user_click",
                  component: { name: e, type: n.nodeName, origin: "other" },
                },
                s = new yo(ni, Xe, i);
              (co.L(s),
                t.target !== this.Vr("emoji-picker")[0] &&
                  t.target !== this.Vr("#chat-input")[0] &&
                  this.Vr("#emoji-picker-container") &&
                  !this.Vr("#emoji-picker-container").is(":hidden") &&
                  this.Ot.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  this.Vr("#gif-picker-container").length &&
                  this.Vr("#gif-picker-container")[0] &&
                  !this.Vr("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== this.Vr("#chat-input")[0] &&
                  !this.Vr("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.Ot.toggleGIFs());
            }),
            (this.Rr = (t) => {
              console.log("on Emoji Click");
              const n = this.Vr("#chat-input")[0],
                e = t.detail.unicode,
                i = new yo(ni, Xe, {
                  name: "user_click",
                  component: {
                    name: "chat_input_container-emoji_picker-emoji",
                    type: e,
                  },
                });
              co.L(i);
              const s = new yo(ni, Xe, {
                eventType: `emoji-click-${e}`,
                sessionId: this.Ot.getSessionId(),
              });
              (co.L(s),
                ko.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji)));
              const o = window.getSelection();
              if (!this.Vr("#chat-input").is(":focus") && n.lastChild) {
                const t = document.createRange();
                (t.setStartAfter(n.lastChild),
                  null == o || o.removeAllRanges(),
                  null == o || o.addRange(t));
              }
              (this.Ot.focusChat(), this.Hr(e));
              (n.scrollHeight - n.scrollTop <= n.clientHeight + 40 &&
                (n.scrollTop = n.scrollHeight),
                this.Nr(),
                this.Ot.onInputChange());
            }),
            (this.Ot = t),
            (this.Vr = nl(n || "")));
        }
        Gr() {
          (ao("Idle Warning called"), Wo(Go));
          const t = new yo(ni, Xe, {
            name: "party_warning",
            action: {
              description: "user has been warned for being idle",
              reason: "user was idle for " + Oo + " time in milliseconds.",
            },
          });
          co.L(t);
          const n = new yo(ni, Xe, {
            eventType: "idle-warn-2hr",
            sessionId: this.Ot.getSessionId(),
          });
          (co.L(n), (this.zr = setTimeout(this.Zr.bind(this), Oo)));
        }
        Zr() {
          ao("Idle kick called");
          const t = new yo(ni, Xe, {
              name: "party_kick",
              action: {
                description: "user has been kicked for being idle",
                reason: "user was idle for " + Ro + " time in milliseconds.",
              },
            }),
            n = new fr(ni, Xe, Jo);
          (co.L(t), co.L(n));
        }
        resetIdleTimer() {
          (this.Wr && clearTimeout(this.Wr),
            this.zr && (Qo(), clearTimeout(this.zr)),
            (this.Wr = setTimeout(this.Gr.bind(this), Ro)));
        }
        Qr() {
          ((this.Wr = setTimeout(this.Gr.bind(this), Ro)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.Lr();
            }),
            (window.onfocus = () => this.Lr()),
            (window.onmousedown = () => this.Lr()),
            (window.ontouchstart = () => this.Lr()),
            (window.onkeydown = () => this.Lr()));
        }
        Yr() {
          (this.Wr && clearTimeout(this.Wr),
            this.zr && clearTimeout(this.zr),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null));
        }
        startListening() {
          (ao("Listening for chat events"),
            this.Qr(),
            this.Jr(),
            this.initWindowListeners());
        }
        stopListening() {
          (this.Kr(), this.Yr(), this.qr());
        }
        Pr() {
          this.Ot.clearUnreadCount();
        }
        Xr(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const n = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, n);
          }
          this.Ot.onInputChange();
        }
        initWindowListeners() {
          (jQuery(window).on("focus", this.Mr),
            window.addEventListener("message", this.Jt),
            document.addEventListener("dragstart", this.ta.bind(this)),
            document.addEventListener(
              "webkitfullscreenchange",
              this.Ot.onFullScreen,
            ),
            document.addEventListener("fullscreenchange", this.Ot.onFullScreen),
            document.addEventListener("keydown", this.Or, !0),
            document.addEventListener("emoji-click", this.Rr),
            document.addEventListener("click", this.Ur));
        }
        Jr() {
          (jQuery(window).on("focus", this.Mr),
            this.Vr("#party-tab").on(
              "click",
              this.Ot.togglePartyTab.bind(this.Ot),
            ),
            this.Vr("#friends-tab").on(
              "click",
              this.Ot.toggleFriendsTab.bind(this.Ot),
            ),
            this.Vr(".user-icon").on(
              "click",
              this.Ot.toggleLargeUserIconButton.bind(this.Ot),
            ),
            this.Vr("#user-icon").on(
              "click",
              this.Ot.toggleIconContainer.bind(this.Ot),
            ),
            this.Vr("#link-icon").on(
              "click",
              this.Ot.linkIconListener.bind(this.Ot),
            ),
            this.Vr("#reset-icon").on(
              "click",
              this.Ot.resetIconListener.bind(this.Ot),
            ),
            this.Vr(".image-button").on(
              "click",
              this.Ot.userIconSelectorListener.bind(this.Ot),
            ),
            this.Vr("#chat-input-container").on(
              "keydown",
              this.Ot.onChatKeyDown.bind(this.Ot),
            ),
            this.Vr("#nickname-edit").on(
              "keydown",
              this.Ot.onChatKeyDown.bind(this.Ot),
            ),
            this.Vr("#chat-input").on(
              "keypress",
              this.Ot.onChatKeyPress.bind(this.Ot),
            ),
            this.Vr("#chat-input").on(
              "input",
              this.Ot.onInputChange.bind(this.Ot),
            ),
            this.Vr("#gif-search").on(
              "keyup",
              this.Ot.onGifSearch.bind(this.Ot),
            ),
            this.Vr("#saveChanges").on(
              "click",
              this.Ot.saveChangesListener.bind(this.Ot),
            ),
            this.Vr("#cancelNickname").on(
              "click",
              this.Ot.cancelNicknameListener.bind(this.Ot),
            ),
            this.Vr("#chat-wrapper").on("mouseup", this.Ot.cancelEvent),
            this.Vr("#chat-wrapper").on("mousedown", this.Ot.cancelEvent),
            this.Vr("#chat-wrapper").on("pointerup", this.Ot.cancelEvent),
            this.Vr("#chat-wrapper").on("pointerdown", this.Ot.cancelEvent),
            this.Vr("#chat-wrapper").on("mousemove", this.Ot.cancelEvent),
            this.Vr("#chat-wrapper").on("pointermove", this.Ot.cancelEvent),
            this.Vr("#chat-wrapper").on(
              "keyup",
              this.Ot.onChatKeyUp.bind(this.Ot),
            ),
            this.Vr("#emoji-picker-btn").on(
              "click",
              this.Ot.addEmojiPicker.bind(this.Ot),
            ),
            this.Vr("#gif-btn").on("click", this.Ot.addGifPicker.bind(this.Ot)),
            this.Vr(".gif-img").on("click", this.Ot.clickGif.bind(this.Ot)),
            this.Vr(".gif-results").on(
              "click",
              "video, img",
              this.Ot.clickGif.bind(this.Ot),
            ),
            this.Vr("#category-container").on(
              "click",
              "video",
              this.Ot.clickGif.bind(this.Ot),
            ),
            this.Vr("#gif-input-back").on(
              "click",
              this.Ot.resetGif.bind(this.Ot),
            ),
            this.Vr("#reaction-btn").on(
              "click",
              this.Ot.addReactionTab.bind(this.Ot),
            ),
            this.Vr("#chat-input-container").on("click", this.na.bind(this)),
            this.Vr("#chat-input").on("input", this.Nr.bind(this)),
            this.Vr("#chat-input").on("drop", this.ea.bind(this)),
            this.Vr("#gif-results-wrapper").on(
              "scroll",
              this.Ot.onScrollToBottom.bind(this.Ot),
            ),
            this.ia(),
            document.addEventListener("keydown", this.Or.bind(this), !0),
            this.Ot.initCustomListeners());
        }
        ia() {
          (this.Vr("#tp-heart-button").on("click", () => {
            this.Ot.onReactionClicked(tl.HEART);
          }),
            this.Vr("#tp-cry-button").on("click", () => {
              this.Ot.onReactionClicked(tl.CRY);
            }),
            this.Vr("#tp-angry-button").on("click", () => {
              this.Ot.onReactionClicked(tl.ANGRY);
            }),
            this.Vr("#tp-surprise-button").on("click", () => {
              this.Ot.onReactionClicked(tl.SURPRISE);
            }),
            this.Vr("#tp-laugh-button").on("click", () => {
              this.Ot.onReactionClicked(tl.LAUGH);
            }),
            this.Vr("#tp-fire-button").on("click", () => {
              this.Ot.onReactionClicked(tl.FIRE);
            }));
        }
        Nr() {
          var t, n;
          const e =
              null !== (t = this.Vr("#bottom-chat-controls").outerHeight(!0)) &&
              void 0 !== t
                ? t
                : parseInt(this.Vr("#bottom-chat-controls").css("height")),
            i = parseInt(
              this.Vr("#chat-input-container").css("padding-bottom"),
            ),
            s =
              (null !== (n = this.Vr("#chat-input").outerHeight(!0)) &&
              void 0 !== n
                ? n
                : parseInt(this.Vr("#chat-input").css("height"))) +
              e +
              i;
          (this.Vr("#emoji-picker-container").css({ bottom: s }),
            this.Vr("#gif-picker-container").css({ bottom: s }));
        }
        ea(t) {
          t.preventDefault();
        }
        ta(t) {
          t.preventDefault();
        }
        na(t) {
          t.target === this.Vr("#chat-input")[0] && this.Ot.focusChat();
        }
        Hr(t) {
          let n, e;
          if (
            window.getSelection &&
            ((n = window.getSelection()), n && n.getRangeAt && n.rangeCount)
          ) {
            ((e = n.getRangeAt(0)), e.deleteContents());
            const i = document.createElement("span");
            ((i.className = "inTextEmoji"), (i.innerHTML = t));
            const s = document.createDocumentFragment();
            let o, r;
            for (; (o = i.firstChild);) r = s.appendChild(o);
            (e.insertNode(s),
              r &&
                ((e = e.cloneRange()),
                e.setStartAfter(r),
                e.collapse(!1),
                n.removeAllRanges(),
                n.addRange(e)));
          }
        }
        sa(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        oa(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let n = 0; n < t.length; n++) {
            const e = t[n];
            if (!this.sa(e)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var n;
          return el(this, void 0, void 0, function* () {
            const e = yield ar.getItemsAsync([io]);
            let i = null !== (n = e[io]) && void 0 !== n ? n : oo;
            (this.oa(i) || (i = oo),
              Array.isArray(i) &&
                (t &&
                  ((i = i.filter((n) => n.unicode != t.unicode)),
                  i.unshift(t),
                  (i = i.slice(0, 24))),
                yield Br.setItemsAsync({ [io]: i }),
                window.postMessage({ type: "TP_FREQ_USED", data: i }, "*")));
          });
        }
        qr() {
          (jQuery(window).off("focus", this.Mr),
            document.removeEventListener("emoji-click", this.Rr),
            document.removeEventListener("keydown", this.Or, !0),
            document.removeEventListener("click", this.Ur),
            window.removeEventListener("message", this.Jt),
            document.removeEventListener(
              "webkitfullscreenchange",
              this.Ot.onFullScreen,
            ),
            document.removeEventListener(
              "fullscreenchange",
              this.Ot.onFullScreen,
            ));
        }
        Kr() {
          (this.Vr(".user-icon").off(),
            this.Vr("#user-icon").off(),
            this.Vr("#link-icon").off(),
            this.Vr(".image-button").off(),
            this.Vr("#chat-input").off(),
            this.Vr("#saveChanges").off(),
            this.Vr("#cancelNickname").off(),
            this.Vr("#chat-input-container").off(),
            this.Vr("#chat-wrapper").off());
        }
      }
      class sl {
        constructor(t) {
          ((this.ra = !1), (this.aa = !1), (this.bn = !1), (this.Ot = t));
        }
        setupPresenceIndicator() {
          ((this.ra = !1), (this.aa = !1), (this.bn = !1), this.ua());
        }
        ca() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          ((this.ra = t), this.ua());
        }
        setBufferingPresenceVisible(t) {
          ((this.aa = t), this.ua());
        }
        setWatchingAdsPresenceVisible(t) {
          ((this.bn = t), this.ua());
        }
        getWatchingAdsVisible() {
          return this.bn;
        }
        la() {
          return this.bn
            ? "People are watching ads..."
            : this.ra && this.aa
              ? "People are typing and buffering..."
              : this.ra
                ? "People are typing..."
                : this.aa
                  ? "People are buffering..."
                  : "";
        }
        ua() {
          const t = this.la();
          (this.ca().text(t),
            this.Ot.queueMessageForFrame(qo.SET_PRESENCE_MESSAGE, { text: t }));
        }
      }
      var ol = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class rl {
        constructor(t) {
          ((this.ha = !1),
            (this.da = 1),
            (this.pa = !1),
            (this.fa = !1),
            (this.Da = ""),
            (this.Tn = ""),
            (this.va = "0"),
            (this.ga = ""),
            (this.ma = !0),
            (this.wa = !1),
            (this.ya = 0),
            (this.ba = []),
            (this.Ca = new Eo()),
            (this.Fa = !1),
            (this._a = void 0),
            (this.xa = !0),
            (this.Ea = this.ka()),
            (this.Aa = this.ka()),
            (this.Ba = !1),
            (this.Ia = !1),
            (this.Sa = []),
            (this.$a = 0),
            (this.ja = 0),
            (this.Ta = !1),
            (this.logEvent = (t) => {
              const n = new yo(ni, Xe, t);
              co.L(n);
            }),
            (this.checkInitReactionContainer = () => {
              ar.getItemsAsync([Xs]).then((t) => {
                (!0 !== t[Xs] && void 0 !== t[Xs]) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.Qt) ||
                void 0 === t ||
                t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.Ca.pushTask(
                () => Br.setItemsAsync({ [Xs]: t.active }),
                "setReactionsActive",
              );
            }),
            (this.onFullScreen = () => {
              var t;
              (this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this.Qt) || void 0 === t || t.setChatButtons());
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.Ma = !1),
            (this.Pa = new il(this, t)),
            (this.La = new sl(this)),
            (this.Ra = new Aa(this)),
            (this.Oa = void 0),
            (this.Va = void 0),
            (this.Go = !1),
            (this.Vr = nl(t || "")),
            (this.$a = 0));
        }
        setPageControls(t) {
          this.Qt = t;
        }
        fixPageControls() {
          var t, n;
          (null === (t = this.Qt) || void 0 === t || t.enablePartyIcons(),
            null === (n = this.Qt) || void 0 === n || n.setChatButtons());
        }
        Ua() {
          return ol(this, void 0, void 0, function* () {
            return co.L(new Hr(ni, Xe));
          });
        }
        usesChatMountPolling() {
          return !1;
        }
        isChatMountReady() {
          return !1;
        }
        isChatInjected() {
          return this.Ha();
        }
        logSidebarInjected(t) {
          return ol(this, void 0, void 0, function* () {
            if (this.Ta || !t || this.isPartyWindowsActive()) return;
            let n, e;
            if (((this.Ta = !0), yield this.Na(), this.Ha()))
              if (((e = this.Ga()), this.za(e)))
                try {
                  yield Ze(() => this.Fa, 3e4)();
                } catch (t) {
                  n = "messaging_timeout";
                }
              else n = "layout_invalid";
            else
              ((n = "mount_missing"),
                (e = {
                  connected: !1,
                  has_size: !1,
                  visible: !1,
                  has_frame: !1,
                }));
            const i = void 0 === n;
            co.L(
              new $o(
                ni,
                Xe,
                {
                  event_name: "sidebar_injected",
                  service: t,
                  success: i,
                  session_id: this.Tn,
                  extra_info: {
                    is_create: !0 === this.Za,
                    uses_mount_polling: this.usesChatMountPolling(),
                    mount_ready: this.usesChatMountPolling()
                      ? this.isChatMountReady()
                      : void 0,
                    layout_checks: e,
                    failure_reason: n,
                  },
                },
                Bo.PARTY,
              ),
            );
          });
        }
        Ga() {
          const t = this.Vr("#chat-wrapper")[0];
          if (!t)
            return { connected: !1, has_size: !1, visible: !1, has_frame: !1 };
          const n = t.getBoundingClientRect(),
            e = window.getComputedStyle(t),
            i = this.Vr("#tpChatFrame")[0];
          return {
            connected: t.isConnected,
            has_size: n.width > 0 && n.height > 0,
            visible:
              "none" !== e.display &&
              "hidden" !== e.visibility &&
              "0" !== e.opacity,
            has_frame: !!i,
          };
        }
        za(t) {
          return t.connected && t.has_size && t.visible && t.has_frame;
        }
        Na() {
          return ol(this, void 0, void 0, function* () {
            if (this.Ha() || !this.usesChatMountPolling()) return;
            try {
              yield Ze(() => this.Ha() || void 0 === this.Wa, 32e3)();
            } catch (t) {}
          });
        }
        Qa() {
          return ol(this, void 0, void 0, function* () {
            if (!this.Ha() && !this.isPartyWindowsActive())
              return this.usesChatMountPolling()
                ? (yield this.Ya(),
                  void (this.Ha() || this.scheduleChatInjectRetryIfNeeded()))
                : void this.Ja();
          });
        }
        Ya() {
          return ol(this, void 0, void 0, function* () {
            if (!this.Ha() && !this.isPartyWindowsActive())
              try {
                yield Ze(
                  () =>
                    !!this.Ha() ||
                    (this.isChatMountReady() && this.Ja(), this.Ha()),
                  15e3,
                )();
              } catch (t) {
                this.be(
                  "Chat sidebar mount timed out",
                  null == t ? void 0 : t.message,
                );
              }
          });
        }
        scheduleChatInjectRetryIfNeeded() {
          this.usesChatMountPolling() &&
            (this.Ha() ||
              this.isPartyWindowsActive() ||
              !this.Ma ||
              this.Wa ||
              ((this.ja = 0),
              (this.Wa = setInterval(() => {
                this.Ka();
              }, 2e3))));
        }
        Ka() {
          return ol(this, void 0, void 0, function* () {
            this.Ha() || !this.Ma || this.isPartyWindowsActive()
              ? this.qa()
              : (this.ja++,
                this.ja > 15
                  ? this.qa()
                  : (yield this.reloadChat(), this.Ha() && this.qa()));
          });
        }
        qa() {
          this.Wa && (clearInterval(this.Wa), (this.Wa = void 0));
        }
        setChatVisible(t, n = !0) {
          return ol(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive())
              throw new Error("Invalid Set Chat");
            (n && (this.ma = t),
              t && this.resetUnreadMessagesCount(),
              t && !this.Ha() && this.reloadChat());
          });
        }
        incrementUnreadMessagesCount() {
          this.$a++;
          const t = document.querySelector("#tp-chat-button");
          if (t) {
            const n = t.querySelector(".unread-messages-count");
            if ((n && n.remove(), this.$a > 0)) {
              const n = document.createElement("span");
              ((n.textContent = String(this.$a)),
                (n.className = "unread-messages-count"),
                Object.assign(n.style, {
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
                t.appendChild(n));
            }
          }
        }
        resetUnreadMessagesCount() {
          this.$a = 0;
          const t = document.querySelector("#tp-chat-button");
          if (t) {
            const n = t.querySelector(".unread-messages-count");
            n && n.remove();
          }
        }
        getUnreadMessagesCount() {
          return this.$a;
        }
        be(t, n) {
          const e = new yo(ni, Xe, {
            name: "error",
            action: { reason: n, description: t },
          });
          co.L(e);
        }
        getChatWindowVisible() {
          return this.Aa;
        }
        setChatWindowActive(t) {
          this.Ea = t;
        }
        isChatFrameActive() {
          return this.xa;
        }
        isPartyWindowsActive() {
          return this.Ea;
        }
        shouldChatBeVisible() {
          return this.ma;
        }
        incrementEmojiCount() {
          this.ya++;
        }
        resetEmojiCount() {
          this.ya = 0;
        }
        getEmojiCount() {
          return this.ya;
        }
        setChatFrameReady(t) {
          (this.Fa && this.Xa(),
            (this.Fa = !0),
            (this.tu = t),
            console.log("setChatFrameReady"));
        }
        queueMessageForFrame(t, n) {
          this.Ca.pushTask(
            () =>
              ol(this, void 0, void 0, function* () {
                this.nu(t, n);
              }),
            "queueMessageForFrame",
          );
        }
        nu(t, n) {
          return ol(this, void 0, void 0, function* () {
            t === qo.LOAD_INIT_DATA && sr("cs_init_data_sent");
            const e = this.tu,
              i = {
                type: t,
                data: n,
                target: "TP_Sidebar",
                tabId: e,
                sender: ni,
              };
            co.L(i);
          });
        }
        eu() {
          var t;
          return ol(this, void 0, void 0, function* () {
            try {
              (console.log("Start delay"),
                yield Ze(() => this.Fa && null != this.tu, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this._a && this.iu(this._a),
                null === (t = this.Qt) ||
                  void 0 === t ||
                  t.setResetChatButton());
            } catch (t) {
              this.be("Sidewindow didn't load in time", t);
            }
          });
        }
        ka() {
          return (
            window.origin.includes(".crunchyroll.com"),
            window.origin.includes("tv.apple.com"),
            !1
          );
        }
        su() {
          return window.location.hostname.includes("f1tv.formula1.com");
        }
        ou() {
          return ol(this, void 0, void 0, function* () {
            (yield co.L(new ho(ni, Xe, po.LOAD_CHAT_WINDOW)),
              console.log(this.tu));
          });
        }
        resetChatWindow(t = !1) {
          var n;
          return ol(this, void 0, void 0, function* () {
            (yield co.L(new ho(ni, Xe, po.RESET_CHAT_WINDOW)),
              console.log(this.tu),
              (this.Aa = !0),
              (this.ma = !0),
              null === top ||
                void 0 === top ||
                top.postMessage({ type: "exitFullscreen" }, "*"),
              this.Ba &&
                t &&
                (this.resetIconListener(),
                null === (n = this.Qt) ||
                  void 0 === n ||
                  n.setResetChatButton()));
          });
        }
        hideChatWindow() {
          return ol(this, void 0, void 0, function* () {
            (yield co.L(new ho(ni, Xe, po.HIDE_CHAT_WINDOW)),
              (this.Aa = !1),
              (this.ma = !1));
          });
        }
        ru() {
          return ol(this, void 0, void 0, function* () {
            (this.ou(),
              this.Ca.pushTask(this.eu.bind(this), "waitChatFrameReady"));
          });
        }
        loadInitData(t) {
          this._a = t;
        }
        iu(t) {
          var n;
          return ol(this, void 0, void 0, function* () {
            const e = Object.assign({}, t);
            if (
              ((e.iconMap = _a),
              (e.extensionBaseUrl = chrome.runtime.getURL("")),
              (e.iconFrameMap = xa),
              e.storageData)
            ) {
              const t = yield Xc.getValidatedChromeStorageDataAsync();
              (console.log("GOt storage data in send init stuff", t),
                (e.storageData = t));
            }
            if (
              null === (n = e.sessionCallbackData) || void 0 === n
                ? void 0
                : n.sessionId
            ) {
              const { sessionId: t } = e.sessionCallbackData,
                n = yield ar.getItemsAsync(["REDIRECT_URL"]);
              n.REDIRECT_URL &&
                n.REDIRECT_URL[t] &&
                (e.sessionCallbackData.redirectUrl = n.REDIRECT_URL[t]);
            }
            this.queueMessageForFrame(qo.LOAD_INIT_DATA, e);
            const i = yield this.getVideoTitle();
            (this.queueMessageForFrame(qo.SET_PAGE_TITLE, { pageTitle: i }),
              this.queueMessageForFrame(qo.SET_USER_LIST, this.Sa),
              this.queueMessageForFrame(qo.UPDATE_SETTINGS, {
                userSettings: (yield this.Ua()).userSettings,
              }));
          });
        }
        Xa() {
          return ol(this, void 0, void 0, function* () {
            this._a && (yield this.iu(this._a));
            const t = yield this.Ua(),
              n = this.Ra.getUserIconURL(
                t.currentUser.userIds.permId,
                t.userSettings.userIcon,
              ),
              e = this.Ra.setUserIconFrameForUser(
                t.currentUser.userIds.permId,
                t.userSettings.userIconFrame,
              );
            (this.queueMessageForFrame(qo.SET_USER_ICON_URL, n),
              this.queueMessageForFrame(qo.SET_USER_ICON_FRAME_URL, e));
            const i = yield this.getVideoTitle();
            (this.queueMessageForFrame(qo.SET_PAGE_TITLE, { pageTitle: i }),
              this.reloadMessages());
          });
        }
        au() {
          return ol(this, void 0, void 0, function* () {
            (yield this.Qa(),
              this.Ha() && (sr("cs_chat_injected"), yield this.uu()));
          });
        }
        uu() {
          return ol(this, void 0, void 0, function* () {
            yield ze(200)();
            const t = this.Vr("#tpChatFrame")[0];
            (t && (t.style.display = "block"),
              yield this.setChatVisible(!0),
              this.addIconSelector(),
              this.cu(),
              this.La.setupPresenceIndicator(),
              this.checkInitReactionContainer());
          });
        }
        get sessionReactionsDisabled() {
          return this.fa;
        }
        get userReactionsDisabled() {
          return this.pa;
        }
        setUserReactionsDisabledStatus(t) {
          this.pa = t;
        }
        setSessionReactionDisabledStatus(t) {
          this.fa = t;
        }
        an() {
          return ol(this, void 0, void 0, function* () {
            (this.Pa.initWindowListeners(),
              this.ka() && this.ru(),
              this.Ca.pushTask(
                this.eu.bind(this),
                "InitChat, _waitChatFrameReady",
              ),
              Qo());
            const t = yield this.Ua();
            sr("cs_user_data");
            const n = this.Ra.getUserIconURL(
                t.currentUser.userIds.permId,
                t.userSettings.userIcon,
              ),
              e = this.Ra.setUserIconFrameForUser(
                t.currentUser.userIds.permId,
                t.userSettings.userIconFrame,
              );
            (this.Ra.setUserIconUrl(n),
              this.Ra.setUserIconFrameUrl(e),
              this.Ra.renderSidebar(),
              (this.Ma = !0),
              Jc(!0),
              this.Ha() ||
                (yield this.lu(),
                this.ka()
                  ? jQuery("body").after(
                      `\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `,
                    )
                  : (yield this.au(), this.checkAddYoutubePromo())));
          });
        }
        checkAddYoutubePromo() {
          return ol(this, void 0, void 0, function* () {
            "true" !==
              (yield ar.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.Ra.addYoutubePromo(),
              Br.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          var n;
          return ol(this, void 0, void 0, function* () {
            this._a = t;
            const e = Object.assign({}, t);
            if (
              ((e.iconMap = _a),
              (e.extensionBaseUrl = chrome.runtime.getURL("")),
              (e.iconFrameMap = xa),
              null === (n = e.sessionCallbackData) || void 0 === n
                ? void 0
                : n.sessionId)
            ) {
              const { sessionId: t } = e.sessionCallbackData,
                n = yield ar.getItemsAsync(["REDIRECT_URL"]);
              n.REDIRECT_URL &&
                n.REDIRECT_URL[t] &&
                (e.sessionCallbackData.redirectUrl = n.REDIRECT_URL[t]);
              const i = yield co.L(new Fo(ni, Xe, { key: "sportLobby" }));
              (null == i ? void 0 : i.result) &&
                i.result.includes(t) &&
                (e.sessionCallbackData.redirectUrl = i.result);
            }
            this.queueMessageForFrame(qo.LOAD_INIT_DATA, e);
          });
        }
        reloadChat() {
          return ol(this, void 0, void 0, function* () {
            if (
              (console.log("Reload chat"),
              !this.Ha() && !this.isPartyWindowsActive())
            ) {
              if ((yield this.Qa(), !this.Ha())) return;
              yield ze(200)();
              const t = this.Vr("#tpChatFrame")[0];
              (t && (t.style.display = "block"),
                yield this.setChatVisible(this.ma),
                this.addIconSelector(),
                this.hu(),
                this.cu(),
                this.La.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
            }
          });
        }
        sendTeardown(t) {
          const n = new fr(ni, Xe, t);
          co.L(n);
        }
        Ha() {
          return this.Vr("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.Ra.clearUnreadCount();
        }
        du() {
          return ol(this, void 0, void 0, function* () {
            try {
              yield Ze(
                () =>
                  null !== document.querySelector("#chat-history") ||
                  this.Ea ||
                  (this.Fa && this.xa),
                1e4,
              )();
            } catch (t) {
              this.be("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, n = !1) {
          this.Ca.pushTask(
            () =>
              ol(this, void 0, void 0, function* () {
                (yield this.du(), this.Ra.addMessage(t, n));
              }),
            "addMessage, _waitForChatHistory",
          );
        }
        addGif(t) {
          this.Ca.pushTask(
            () =>
              ol(this, void 0, void 0, function* () {
                (yield this.du(), this.Ra.addGif(t));
              }),
            "addGif",
          );
        }
        reloadMessages() {
          this.Ra.reloadMessages();
        }
        scrollToBottom() {
          this.Ra.scrollToBottom();
        }
        addReviewMessage() {
          (this.Ra.addReviewMessage(), (this.Go = !0));
        }
        get showingReveiwMessage() {
          return this.Go;
        }
        set shouldReturnToVideo(t) {
          this.Ba = t;
        }
        onBufferingMessage(t) {
          this.Ca.pushTask(
            () =>
              ol(this, void 0, void 0, function* () {
                (yield this.du(),
                  this.La.setBufferingPresenceVisible(
                    t.usersBuffering.length > 0,
                  ));
              }),
            "addBufferingMessage",
          );
        }
        onTypingMessage(t) {
          this.Ca.pushTask(
            () =>
              ol(this, void 0, void 0, function* () {
                (yield this.du(),
                  this.La.setTypingPresenceVisible(t.usersTyping.length > 0));
              }),
            "onTypingMessage",
          );
        }
        onWatchingAdsMessage(t) {
          const n = t.usersWatchingAds.length > 0;
          (console.log("[TpDebug] onWatchingAdsMessage", {
            anyoneWatchingAds: t.anyoneWatchingAds,
            usersWatchingAds: t.usersWatchingAds,
            willShow: n,
          }),
            this.La.setWatchingAdsPresenceVisible(n));
        }
        getWatchingAds() {
          return this.La.getWatchingAdsVisible();
        }
        onNextEpisodeAvailable(t) {
          (console.log("onNextEpisodeAvailable", t),
            this.queueMessageForFrame(qo.UPDATE_ACTIONS_STATE, {
              nextEpisodeReady: t,
            }));
        }
        doUpdateSettings(t) {
          var n, e;
          return ol(this, void 0, void 0, function* () {
            const i = yield co.L(new ou(ni, Xe, t));
            if (i) {
              const t = (yield this.Ua()).currentUser.userIds.permId;
              (t &&
                this.Ra.updateUserData(
                  t,
                  i.userIcon,
                  i.userNickname,
                  null !== (n = i.userIconFrame) && void 0 !== n ? n : "",
                ),
                this.Ra.setUserIconFrameUrl(
                  null !== (e = i.userIconFrame) && void 0 !== e ? e : "",
                ));
            }
            t.shouldBroadcast && this.pu(this.fu(i));
          });
        }
        onUpdateSettingsMessage(t) {
          var n, e;
          return ol(this, void 0, void 0, function* () {
            this.Ra.updateUserData(
              t.permId,
              t.userSettings.userIcon,
              t.userSettings.userNickname,
              null !== (n = t.userSettings.userIconFrame) && void 0 !== n
                ? n
                : "",
            );
            const i = yield this.Ua(),
              s = this.Ra.getUserIconURL(
                i.currentUser.userIds.permId,
                i.userSettings.userIcon,
              );
            (this.Ra.setUserIconUrl(s),
              t.permId === i.currentUser.userIds.permId &&
                this.Ra.setUserIconFrameUrl(
                  null !== (e = t.userSettings.userIconFrame) && void 0 !== e
                    ? e
                    : "",
                ),
              this.Ra.renderSidebar());
          });
        }
        cu() {
          Ze(() => this.Ha(), 1e4)().then(() => {
            this.Pa.startListening();
          });
        }
        hu() {
          (this.Pa.stopListening(),
            this.Du && (clearTimeout(this.Du), (this.wa = !1)));
        }
        teardown() {
          (this.qa(),
            (this.Ma = !1),
            Jc(!1),
            (this.Tn = void 0),
            (this.Za = void 0),
            (this.Ta = !1),
            (this.Fa = !1),
            this.hu(),
            this.Vr("[tpInjected]").remove(),
            this.removeChat(),
            this.setChatVisible(!1),
            console.log("teardown"));
        }
        focusChat() {
          this.Vr("#chat-input")[0].focus();
        }
        showEmojiPicker() {
          var t, n;
          (this.Vr("#gif-picker-container").is(":hidden") || this.toggleGIFs(),
            this.Vr("#emoji-picker-btn-icon").css({ opacity: "1" }));
          const e =
              null !== (t = this.Vr("#bottom-chat-controls").outerHeight(!0)) &&
              void 0 !== t
                ? t
                : parseInt(this.Vr("#bottom-chat-controls").css("height")),
            i = parseInt(
              this.Vr("#chat-input-container").css("padding-bottom"),
            ),
            s =
              (null !== (n = this.Vr("#chat-input").outerHeight(!0)) &&
              void 0 !== n
                ? n
                : parseInt(this.Vr("#chat-input").css("height"))) +
              e +
              i;
          this.Vr("#emoji-picker-container").css({ bottom: s });
        }
        hideEmojiPicker() {
          (this.Vr("#emoji-picker-btn-icon").css({ opacity: "" }),
            this.Vr("#emoji-picker-container").css("bottom", ""));
        }
        showReactionHolder() {
          (this.Vr("#reaction-btn-icon").css({ opacity: "1" }),
            this.Vr("#reaction-holder").css({ display: "flex" }),
            this.Vr("#reaction-holder").css({ "padding-top": "8px" }),
            this.Vr("#chat-input-container").css({ "padding-top": "0" }));
        }
        hideReactionHolder() {
          (this.Vr("#reaction-btn-icon").css({ opacity: "" }),
            this.Vr("#reaction-btn").css({ background: "", padding: "" }),
            this.Vr("#reaction-holder").css({ "padding-top": "" }),
            this.Vr("#chat-input-container").css({ "padding-top": "" }),
            this.Ca.pushTask(() => Br.setItemsAsync({ [Xs]: !1 })));
        }
        onOpenGifPicker() {
          var t, n;
          return ol(this, void 0, void 0, function* () {
            (this.Vr("#emoji-picker-container").is(":hidden") ||
              this.toggleEmojiClicker(),
              this.Vr("#gif-results-left")[0].innerHTML || this.fetchGIFs(),
              this.Vr("#gif-btn-icon").css({ opacity: "1" }));
            const e =
                null !==
                  (t = this.Vr("#bottom-chat-controls").outerHeight(!0)) &&
                void 0 !== t
                  ? t
                  : parseInt(this.Vr("#bottom-chat-controls").css("height")),
              i = parseInt(
                this.Vr("#chat-input-container").css("padding-bottom"),
              ),
              s =
                (null !== (n = this.Vr("#chat-input").outerHeight(!0)) &&
                void 0 !== n
                  ? n
                  : parseInt(this.Vr("#chat-input").css("height"))) +
                e +
                i;
            this.Vr("#gif-picker-container").css({ bottom: s });
          });
        }
        onCloseGifPicker() {
          (this.Vr("#gif-btn-icon").css({ opacity: "" }),
            this.Vr("#gif-btn").css({ background: "", padding: "" }));
        }
        toggleEmojiClicker() {
          this.Vr("#emoji-picker-container").slideToggle(0, () => {
            this.Vr("#emoji-picker-container").is(":hidden")
              ? this.hideEmojiPicker()
              : this.showEmojiPicker();
          });
        }
        toggleReactions() {
          const t = document.querySelector("#chat-history");
          let n = !1;
          (t &&
            Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 10 &&
            (n = !0),
            this.Vr("#reaction-holder").slideToggle(0, () => {
              const t = this.Vr("#reaction-holder").is(":hidden");
              (t ? this.hideReactionHolder() : this.showReactionHolder(),
                !t && n && this.Ra.scrollToBottom());
            }));
        }
        onVideoClick() {
          this.queueMessageForFrame(qo.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          this.Vr("#gif-picker-container").slideToggle(0, () => {
            this.Vr("#gif-picker-container").is(":hidden")
              ? this.onCloseGifPicker()
              : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const n = new yo(ni, Xe, {
            name: "user_click",
            component: {
              name: "chat_input_container-emoji_picker",
              type: "button",
              origin: "tp",
            },
          });
          (co.L(n), this.toggleEmojiClicker());
        }
        addGifPicker(t) {
          t.stopPropagation();
          const n = new yo(ni, Xe, {
            name: "user_click",
            component: {
              name: "chat_input_container-gif_popup",
              type: "button",
              origin: "tp",
            },
          });
          (co.L(n), this.toggleGIFs());
        }
        getMessages(t = !1) {
          return this.Ra.getMessages(t);
        }
        addReactionTab(t) {
          t.stopPropagation();
          const n = new yo(ni, Xe, {
            name: "user_click",
            component: {
              name: "chat_input_container-reaction_pinner",
              type: "button",
              origin: "tp",
            },
          });
          (co.L(n), this.toggleReactions());
        }
        lu() {
          return ol(this, void 0, void 0, function* () {
            ((this.vu = Mc()),
              (this.vu = this.vu.replace(
                /{EXTENSION_LOGO}/g,
                Ea(chrome.runtime.getURL("img/tp_logo.svg")),
              )));
            const t = yield this.Ua();
            if (void 0 === t.userSettings)
              throw new Error(
                "Attempt to set chatHtml when _userSettings is undefined.",
              );
            const n = chrome.runtime.getURL("");
            this.vu = this.vu.replace(
              /{CHAT_URL}/g,
              `${no}?t=${Date.now()}&id=${encodeURIComponent(n.substring(0, n.length - 1))}`,
            );
            for (const t of eo) {
              const n = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
                e = new RegExp(`${t}_GIF`.toUpperCase(), "g");
              ((this.vu = this.vu.replace(
                n,
                chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`),
              )),
                (this.vu = this.vu.replace(
                  e,
                  chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`),
                )));
            }
            ((this.vu = this.vu.replace(
              /{USER_NICKNAME}/g,
              t.userSettings.userNickname
                ? Ea(t.userSettings.userNickname)
                : "Add a nickname",
            )),
              (this.vu = this.vu.replace(
                /{USER_ICON}/g,
                this.Ra.getUserIconURL(
                  t.currentUser.userIds.permId,
                  t.userSettings.userIcon,
                ),
              )),
              (this.vu = this.vu.replace(
                /{LINK_SVG}/g,
                chrome.runtime.getURL("img/icon_link_active.svg"),
              )),
              (this.vu = this.vu.replace(
                /{RESET_SGV}/g,
                chrome.runtime.getURL("img/reset_chat.svg"),
              )),
              (this.vu = this.vu.replace(
                /{EMOJI_PICKER_ICON}/g,
                chrome.runtime.getURL("img/emoji_picker.svg"),
              )),
              (this.vu = this.vu.replace(
                /{REACTION_PICKER_ICON}/g,
                chrome.runtime.getURL("img/reaction-popup.svg"),
              )),
              (this.vu = this.vu.replace(
                /{GIF_PICKER_ICON}/g,
                chrome.runtime.getURL("img/gif_icon.svg"),
              )),
              (this.vu = this.vu.replace(
                /{GIF_BACK_BUTTON}/g,
                chrome.runtime.getURL("img/icon_chevron.svg"),
              )),
              (this.vu = this.vu.replace(
                /{EMOJI_LIB}/g,
                chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"),
              )),
              (this.vu = this.vu.replace(
                /{EMOJI_FRAME}/g,
                chrome.runtime.getURL("web/emojiPicker.html"),
              )),
              (this.vu = this.vu.replace(
                /{X_CIRCLE}/g,
                chrome.runtime.getURL("img/x-circle.svg"),
              )));
          });
        }
        toggleIconContainer() {
          var t, n;
          return ol(this, void 0, void 0, function* () {
            if (this.Vr("#chat-icon-container").data("active"))
              (this.Vr("#chat-icon-container").data("active", !1),
                this.Vr("#chat-icon-container").slideUp(),
                this.Vr(".chat-settings-container").slideUp(),
                this.Vr("#sidebar-tabs-container").slideDown(),
                this.Ia
                  ? this.Vr("#chat-history-container").slideDown()
                  : this.Vr("#chat-friends-frame").slideDown(),
                this.wa && this.Vr("#chat-ad-holder").show(),
                this.Vr("#chat-input-container").show(),
                this.Vr("#reaction-holder").hide(),
                this.hideReactionHolder(),
                this.Vr("#teleparty-blog-container").show(),
                this.Vr("#presence-indicator").show(),
                this.Vr("#chat-header-container").removeClass(
                  "chat-header-container-active",
                ));
            else {
              const e = yield this.Ua();
              (this.Vr("#chat-icon-container").data("active", !0),
                this.Vr(".chat-settings-container").show(),
                this.Vr("#chat-icon-container").hide(),
                this.Vr("#chat-link-container").hide(),
                this.Vr("#chat-history-container").hide(),
                this.Vr("#sidebar-tabs-container").hide(),
                this.Vr("#chat-friends-frame").slideUp(),
                this.Vr("#chat-ad-holder").hide(),
                this.Vr("#chat-input-container").hide(),
                this.Vr("#teleparty-blog-container").hide(),
                this.Vr("#presence-indicator").hide(),
                this.Vr("#reaction-holder").hide(),
                this.Vr("#nickname-edit").attr(
                  "placeholder",
                  null !== (t = e.userSettings.userNickname) && void 0 !== t
                    ? t
                    : "",
                ),
                (this.Vr("#nickname-edit")[0].value =
                  null !== (n = e.userSettings.userNickname) && void 0 !== n
                    ? n
                    : ""));
            }
          });
        }
        togglePartyTab() {
          (this.Vr("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            this.Vr("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            this.Vr("#chat-history-container").show(),
            this.Vr("#chat-friends-frame").slideUp(),
            this.Vr("#chat-input-container").show(),
            (this.Ia = !0));
        }
        toggleFriendsTab() {
          (this.Vr("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            this.Vr("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            this.Vr("#chat-friends-frame").removeClass("tp-hidden"),
            this.Vr("#chat-friends-frame").slideDown(),
            this.Vr("#chat-history-container").slideUp(),
            this.Vr("#chat-input-container").hide(),
            (this.Ia = !1));
        }
        toggleLargeUserIconButton() {
          this.Vr("#chat-icon-container").data("active") &&
            (this.Vr("#chat-icon-container").show(),
            this.Vr(".chat-settings-container").hide(),
            this.Vr("#chat-header-container").addClass(
              "chat-header-container-active",
            ));
        }
        linkIconListener() {
          (navigator.clipboard.writeText(this.getPartyUrl()),
            this.Vr("#link-icon .tooltiptext").text("Link copied"),
            setTimeout(() => {
              this.Vr("#link-icon .tooltiptext").text("Copy Link");
            }, 1e3));
        }
        resetIconListener() {
          var t;
          if (null === (t = this.q) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", {
              detail: {
                type: "jumpToNextEpisode",
                nextVideoId: this.q.videoId,
                isShort: window.location.href.includes("/shorts/"),
              },
            });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.Da = t;
        }
        setMessageForwarder(t) {
          this.q = t;
        }
        setSessionId(t) {
          this.Tn = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(qo.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(qo.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          (t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const n = t.userSettings,
                e = this.Ra.getUserIconURL(t.permId, n.userIcon),
                i = this.Ra.setUserIconFrameForUser(t.permId, n.userIconFrame),
                s = this.Ra.getUserNickname(t.permId, n.userNickname);
              t.parsedData = {
                userIconUrl: e,
                userNickname: s,
                userIconFrameUrl: i,
              };
            }
          }),
            (this.Sa = t),
            this.Vr("#user-count").text(t.length),
            this.queueMessageForFrame(qo.SET_USER_LIST, t));
        }
        setSessionCreated(t) {
          this.Za = t;
        }
        getSessionCreated() {
          return this.Za;
        }
        getSessionId() {
          return this.Tn;
        }
        getPartyUrl() {
          return this.Da;
        }
        userIconSelectorListener(t) {
          return ol(this, void 0, void 0, function* () {
            const n = jQuery(t.currentTarget).data("icon");
            if (n) {
              const t = yield co.L(new ou(ni, Xe, { userIcon: n }));
              (this.queueMessageForFrame(qo.UPDATE_SETTINGS, {
                userSettings: t.userSettings,
              }),
                this.pu(this.fu(t.userSettings)));
            }
            this.toggleIconContainer();
          });
        }
        removeChat() {
          (this.clearUnreadCount(),
            this.Vr("#chat-container").remove(),
            this.Vr("#chat-wrapper").remove());
        }
        pu(t, n) {
          co.L(t).then(n);
        }
        gu(t) {
          return new Oc(ni, Xe, { reactionType: t });
        }
        mu(t) {
          return new Vc(ni, Xe, { gifObject: t });
        }
        wu(t) {
          return new Lc(ni, Xe, { body: t });
        }
        yu(t) {
          return new Pc(ni, Xe, { typing: t });
        }
        fu(t) {
          const n = {
            userSettings: {
              userNickname: t.userNickname,
              userIcon: t.userIcon,
              userIconFrame: t.userIconFrame,
              nameColor: t.nameColor,
              badge: t.badge,
              reactions: t.reactions,
            },
          };
          return new Rc(ni, Xe, n);
        }
        bu(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction() || this.pa) return;
          const n = t.reactionType,
            e = this.getReactionContainer();
          if (e) {
            const t = Math.floor(40 * Math.random()) + 40,
              i =
                e[0].offsetWidth - (this.shouldAddReactionSpace() ? Vo : 0) - t,
              s =
                Math.floor(Math.random() * i) +
                (this.shouldAddReactionSpace() ? Vo : 0),
              o = this.bu(n),
              r = Math.ceil(3 * Math.random()),
              a = jQuery(
                `<img class="on-screen-reaction on-screen-reaction-${r}" src='${o}' />`,
              );
            (a.css("right", `${s}px`),
              a.css("width", `${t}px`),
              a.css("height", `${t}px`),
              e.append(a),
              setTimeout(() => {
                a.remove();
              }, 5e3));
          }
        }
        onReactionClicked(t) {
          (console.log(t), this.pu(this.gu(t)));
          const n = new yo(ni, Xe, {
            name: "user_click",
            component: {
              name: "chat_input_container-reaction_holder-reaction",
              type: t,
              origin: "tp",
            },
          });
          co.L(n);
          const e = new yo(ni, Xe, {
            eventType: "reaction-" + t,
            sessionId: this.getSessionId(),
          });
          co.L(e);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          (t.stopPropagation(), this.Pa.resetIdleTimer());
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              (console.error("Cannot get locale from Intl"),
                this.be("Cannot get locale from Intl", t));
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let n = t.target.id;
          if (isNaN(n))
            ((n = "trending" === n ? "" : n),
              this.fetchGIFs(n),
              (this.Vr("#gif-search")[0].value = n));
          else {
            const t = this.ba.find((t) => t.id === n);
            if (!t) return;
            const e = {
              id: t.id,
              title: t.title,
              description: t.content_description,
              isSticker: !1,
              media: t.media,
            };
            (this.pu(this.mu(e), () => {
              this.logShare(t.id, this.Vr("#gif-search")[0].value);
              const n = {
                  name: "user_click",
                  action: {
                    description: "gif clicked",
                    source: t.media.full.url,
                  },
                  component: {
                    name: "chat_input_container-gif_popup-gif",
                    type: "video",
                    origin: "tp",
                  },
                },
                e = new yo(ni, Xe, n);
              co.L(e);
              const i = new yo(ni, Xe, {
                eventType: "gif-share",
                sessionId: this.getSessionId(),
              });
              co.L(i);
            }),
              this.toggleGIFs());
          }
        }
        Cu(t) {
          const n = document.createElement("video"),
            e = 124 / (t.media.preview.dims[0] / t.media.preview.dims[1]);
          return (
            (n.autoplay = !0),
            (n.loop = !0),
            (n.playsInline = !0),
            n.setAttribute("disablePictureInPicture", ""),
            n.setAttribute("disableRemotePlayback", ""),
            (n.src = t.media.preview.url),
            (n.muted = !0),
            (n.id = t.id),
            (n.height = e),
            (n.className = "gif-img"),
            n
          );
        }
        Fu(t) {
          const n = document.createElement("img"),
            e =
              124 /
              (t.media.previewMobile.dims[0] / t.media.previewMobile.dims[1]);
          return (
            n.setAttribute("disablePictureInPicture", ""),
            n.setAttribute("disableRemotePlayback", ""),
            (n.src = t.media.previewMobile.url),
            (n.id = t.id),
            (n.height = e),
            (n.className = "gif-img"),
            n
          );
        }
        loadGIFs(t) {
          (this.Vr(".gif-placeholder").remove(),
            this.ba.push(...t.results),
            (this.va = t.next),
            t.results.forEach((t) => {
              const n = this.shouldUseVideoGIF() ? this.Cu(t) : this.Fu(t);
              (this.Vr("#gif-results-left")[0].scrollHeight >
              this.Vr("#gif-results-right")[0].scrollHeight
                ? this.Vr("#gif-results-right")[0]
                : this.Vr("#gif-results-left")[0]
              ).appendChild(n);
            }),
            this.da < 6 && this._u(),
            setTimeout(() => {
              this.ha = !1;
            }, 100));
        }
        onScrollToBottom(t) {
          return ol(this, void 0, void 0, function* () {
            const n =
              t.target.scrollHeight - t.target.scrollTop <=
              t.target.clientHeight + 450;
            if (this.ha) t.preventDefault();
            else if ("0" !== this.va && n && this.da < 6) {
              ((this.da += 1), (this.ha = !0), t.preventDefault());
              const n = yield fetch(this.ga + `&pos=${this.va}`),
                e = yield n.json();
              this.loadGIFs(e);
            }
          });
        }
        resetGif() {
          ((this.Vr("#gif-search")[0].value = ""),
            this.Vr("#gif-input-back").hide(),
            this.Vr("#gif-search").css("width", ""),
            this.fetchGIFs());
        }
        displayCategories() {
          ((this.Vr("#gif-search")[0].value = ""),
            this.Vr("#category-container").show(),
            this.Vr("#gif-results").hide(),
            this.Vr("#gif-input-back").hide(),
            this.Vr("#gif-search").css("width", ""));
        }
        showCategories() {
          ((this.Vr("#gif-search")[0].value = ""),
            this.Vr("#gif-input-back").hide(),
            this.Vr("#gif-search").css("width", ""));
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
          ].forEach((n) => {
            const e = document.createElement("div"),
              i = document.createElement("span");
            ((i.id = "category-txt"),
              (i.innerHTML = n),
              (e.className = "tp-category-div"));
            const s = document.createElement("video");
            ((s.autoplay = !0),
              (s.src =
                "https://media.tenor.com/videos/166d7d5a1be3b0755e7f9e29ebefe2c3/mp4"),
              (s.className = "category-img"),
              (s.id = n),
              (s.loop = !0),
              e.appendChild(i),
              e.appendChild(s),
              t.appendChild(e));
          }),
            (this.Vr("#category-container")[0].innerHTML = t.innerHTML));
        }
        xu() {
          const t = [],
            n = [];
          for (let e = 0; e < 4; e++) {
            let e = Math.floor(4 * Math.random()) + 1;
            for (; n.includes(e);) e = Math.floor(4 * Math.random()) + 1;
            n.push(e);
            const i = document.createElement("div");
            ((i.className = `gif-placeholder gif-placeholder-${e} gif-img`),
              t.push(i));
          }
          return t;
        }
        _u() {
          return ol(this, void 0, void 0, function* () {
            (this.Vr("#gif-results-left")[0].append(...this.xu()),
              this.Vr("#gif-results-right")[0].append(...this.xu()));
          });
        }
        logShare(t, n) {
          return ol(this, void 0, void 0, function* () {
            const e = this.getClientLocale(),
              i = e ? `&locale=${e}` : "",
              s = `&id=${t}`,
              o = n && n.length > 0 ? `q=${n}` : "";
            yield fetch(`${to}/register-share?${o}${i}${s}`);
          });
        }
        fetchGIFs(t) {
          return ol(this, void 0, void 0, function* () {
            const n = yield this.getVideoTitle(),
              e = null == n ? void 0 : n.replace(/[^\w\s]/g, "");
            ((this.da = 1),
              (this.ha = !0),
              this.Vr("#category-container").hide(),
              this.Vr("#gif-columns-wrapper").show(),
              (this.Vr("#gif-results-left")[0].innerHTML = ""),
              (this.Vr("#gif-results-right")[0].innerHTML = ""),
              (this.ba = []),
              this._u());
            const i = this.getClientLocale(),
              s = i ? `&locale=${i}` : "";
            let o = e ? `search-gifs?q=${e}` : "trending-gifs?";
            ((o = t ? `search-gifs?q=${t}` : o), (this.ga = `${to}/${o}${s}`));
            const r = yield fetch(`${to}/${o}${s}`),
              a = yield r.json();
            if (a.results && a.results.length > 0) this.loadGIFs(a);
            else if (!t) {
              const t = yield fetch(`${to}/trending_gifs?${s}`);
              this.ga = `${to}/trending_gifs?${s}`;
              const n = yield t.json();
              this.loadGIFs(n);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const n = t.target.value;
          if ((void 0 !== this.Va && clearTimeout(this.Va), !n))
            return (
              this.Vr("#gif-input-back").hide(),
              this.Vr("#gif-search").css("width", ""),
              void this.fetchGIFs()
            );
          (this.Vr("#gif-input-back").show(),
            this.Vr("#gif-search").css("width", "90%"),
            (this.Va = setTimeout(() => {
              this.fetchGIFs(n);
            }, 500)));
        }
        Eu(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            (void 0 === this.Oa ? this.pu(this.yu(!0)) : clearTimeout(this.Oa),
              (this.Oa = setTimeout(() => {
                ((this.Oa = void 0), this.pu(this.yu(!1)));
              }, 500)));
          else {
            this.Vr("#emoji-picker-container").is(":hidden") ||
              this.toggleEmojiClicker();
            const n = this.Vr("#chat-input"),
              e = n[0].textContent;
            if (e && this.Eu(e)) {
              (void 0 !== this.Oa &&
                (clearTimeout(this.Oa),
                (this.Oa = void 0),
                this.pu(this.yu(!1))),
                n.prop("contenteditable", !1),
                this.pu(this.wu(e.substring(0, 1500)), () => {
                  ((n[0].textContent = ""),
                    n.prop("contenteditable", !0),
                    this.focusChat(),
                    this.onInputChange());
                }));
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return Qc();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: e.trim(),
                  },
                },
                i = new yo(ni, Xe, t);
              co.L(i);
            } else
              (t.stopImmediatePropagation(),
                t.preventDefault(),
                (n[0].textContent = ""),
                this.onInputChange());
          }
        }
        onInputChange() {
          const t = this.Vr("#chat-input");
          if (t.length > 0) {
            const n = t[0].textContent;
            n && this.shouldShowIncreasedSize(n)
              ? t.addClass("tp-emoji-large")
              : t.removeClass("tp-emoji-large");
          }
          this.Vr("#emoji-picker-container").css("bottom").length > 0 &&
            (this.Vr("#emoji-picker-container").is(":hidden") ||
              this.showEmojiPicker());
        }
        shouldShowIncreasedSize(t) {
          const n = t.replace(ro, "").replace(/[\uFE0F]/g, ""),
            e = ((t || "").match(ro) || []).length;
          return 0 === n.length && e <= 3 && e > 0;
        }
        saveChangesListener() {
          return ol(this, void 0, void 0, function* () {
            const t = this.Vr("#nickname-edit")
              .val()
              .slice(0, 25)
              .replace(/^\s+|\s+$/g, "");
            if (t !== (yield this.Ua()).userSettings.userNickname) {
              const n = yield co.L(new ou(ni, Xe, { userNickname: t }));
              (this.queueMessageForFrame(qo.UPDATE_SETTINGS, {
                userSettings: n.userSettings,
              }),
                this.pu(this.fu(n.userSettings)),
                this.Vr("#nickname-edit").attr("placeholder", t),
                this.Vr("#nickname-edit").text(t));
            }
            this.toggleIconContainer();
          });
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.Ma;
        }
        addIconSelector() {
          Object.keys(_a).forEach((t) => {
            if (ka[t]()) {
              const n = _a[t],
                e = jQuery(
                  '\n                <ul id="icon-holder"></ul>\n            ',
                );
              for (const i of n) this.ku(`${t}/${i}`, e, i);
              const i = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `,
              );
              (e.appendTo(i), i.appendTo(this.Vr("#icon-holder-template")));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = this.Vr("#chat-input").text(),
            n = ((t || "").match(ro) || []).length,
            e = t.replace(ro, "");
          n <= 3 || e
            ? this.Vr(".inTextEmoji").css("font-size", "24px")
            : n > 0
              ? this.Vr(".inTextEmoji").css("font-size", "20px")
              : this.Vr(".inTextEmoji").css("font-size", "18px");
        }
        ku(t, n, e) {
          jQuery(
            `\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL("img/icons/" + t)}' data-tp-id="chat_container-new_icon_selection-${e}">\n            </a>\n        `,
          )
            .appendTo(n)
            .data("icon", t);
        }
      }
      var al = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class ul extends rl {
        constructor(t) {
          (super(),
            (this.Au = !1),
            (this.Bu =
              '\n          .chat-wrapper-short {\n            height: calc(100% - 126px) !important;\n            position: absolute !important;\n          }\n\n          .tp-left-align {\n            align-items: flex-start !important;\n          }\n          \n          [data-testid="playerContainer"]:has(video.with-chat)\n            [data-testid="caption_renderer_overlay"] > * {\n                right: 338px !important;\n          }\n        '),
            (this.K = t),
            (this.observer = new MutationObserver((t) => this.onDomChange(t))));
        }
        shouldShowReaction() {
          return !this.K.isWatchingAd();
        }
        shouldUseVideoGIF() {
          return !0;
        }
        getReactionContainer() {
          return jQuery('[data-testid="playerContainer"]');
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        setChatVisible(t, n = !0) {
          const e = Object.create(null, {
            setChatVisible: { get: () => super.setChatVisible },
          });
          return al(this, void 0, void 0, function* () {
            try {
              yield e.setChatVisible.call(this, t, n);
            } catch (t) {
              return;
            }
            t
              ? (this.startObservation(),
                jQuery("#chat-wrapper").show(),
                jQuery(ul.PLAYER_VIDEO_SELECTOR).addClass(Ho))
              : (this.observer.disconnect(),
                jQuery("#chat-wrapper").hide(),
                jQuery(ul.PLAYER_VIDEO_SELECTOR).removeClass(Ho),
                jQuery('[class*="' + ul.CONTROLS_CONTAINER + '"]').removeClass(
                  Ho,
                ));
          });
        }
        updateWithChatClass() {
          this.getChatVisible()
            ? jQuery('[class*="' + ul.CONTROLS_CONTAINER + '"]').addClass(Ho)
            : jQuery('[class*="' + ul.CONTROLS_CONTAINER + '"]').removeClass(
                Ho,
              );
        }
        onDomChange(t) {
          for (const n of t)
            "childList" === n.type && this.updateWithChatClass();
          this.maybeHealChatInjection();
        }
        maybeHealChatInjection() {
          !this.inSession ||
            this.isPartyWindowsActive() ||
            this.isChatInjected() ||
            this.Au ||
            ((this.Au = !0),
            this.scheduleChatInjectRetryIfNeeded(),
            this.reloadChat().finally(() => {
              this.Au = !1;
            }));
        }
        startObservation() {
          this.observer.disconnect();
          (this.observer.observe(document.body, { childList: !0, subtree: !0 }),
            this.updateWithChatClass());
        }
        getVideoTitle() {
          var t;
          return al(this, void 0, void 0, function* () {
            const n = document.querySelector(
              '[data-testid="player-ux-asset-title"]',
            );
            if (n)
              return null !== (t = n.innerHTML) && void 0 !== t ? t : void 0;
          });
        }
        shouldAddReactionSpace() {
          return !0;
        }
        usesChatMountPolling() {
          return !0;
        }
        isChatMountReady() {
          return jQuery(ul.PLAYER_CONTAINER_SELECTOR).length > 0;
        }
        removeChat() {
          (this.observer.disconnect(),
            super.removeChat(),
            jQuery("#tp-layout-wrapper").remove(),
            jQuery(`${ul.MAIN_WRAPPER_SELECTOR} [tpInjected]`).remove());
        }
        Ja() {
          this.vu &&
            this.isChatMountReady() &&
            !this.isChatInjected() &&
            (jQuery(ul.PLAYER_CONTAINER_SELECTOR)
              .first()
              .append(
                (function (t, n = "") {
                  return `\n\n      <style tpInjected data-tp-sidebar-css="1">\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 338px) !important;\n      }\n\n      .with-chat-absolute {\n        position: absolute !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      [data-chat-visible="true"] {\n        left: 0px !important;\n        width: calc(100% - 338px) !important;\n        position: absolute !important;\n    }\n\n      .tp-layout-wrapper {\n        display: flex;\n        align-items: stretch;\n      }\n\n      .tp-video-region {\n        flex: 1 1 auto;\n      }\n\n      .tp-chat-region {\n        flex: 0 0 338px;\n      }\n\n      ${n}\n      \n    </style>\n\n    <link tpInjected data-tp-sidebar-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/chat.css")}">\n    <link tpInjected data-tp-sidebar-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    <div id="tp-layout-wrapper" data-tp-layout="video+chat">\n      <div class="tp-video-region"></div>\n      <div class="tp-chat-region">\n        ${t}\n      </div>\n    </div>\n  `;
                })(this.vu, this.Bu),
              ),
            this.startObservation());
        }
      }
      ((ul.MAIN_WRAPPER_SELECTOR = "#layer-root-player-screen"),
        (ul.PLAYER_CONTAINER_SELECTOR = '[data-testid="playerContainer"]'),
        (ul.PLAYER_VIDEO_SELECTOR = "#layer-root-player-screen video"),
        (ul.CONTROLS_CONTAINER = "AutohiderContainer"));
      var cl = e(7076),
        ll = e.n(cl);
      var hl = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class dl {
        constructor(t, n) {
          var e, i, s;
          ((this.Iu = !1),
            (this.Su = !1),
            (this.$u = !1),
            (this.Fn = !1),
            (this.ju = 0),
            (this.Tu = !1),
            (this.Mu = !1),
            (this.Pu = !1),
            (this.Lu = !1),
            (this.checkShowMenu = () => {
              const t = this.shouldMenuBeVisible();
              (t != this.Lu && ((this.Lu = t), this.Ru.forEach((n) => n(t))),
                t && !this.Ou.getChatVisible() ? this.Vu() : this.Uu());
            }),
            console.log(
              "Teleparty Browse Loaded " +
                (null === (e = window.teleparty) || void 0 === e
                  ? void 0
                  : e.tabId),
            ),
            (this.Hu = new Zs(
              new URL(window.location.href),
              null !==
                (s =
                  null === (i = window.teleparty) || void 0 === i
                    ? void 0
                    : i.tabId) && void 0 !== s
                ? s
                : 0,
            )),
            (this.Ou = t),
            this.Ou.setPageControls(this),
            (this.Ru = []),
            (this.Vr = nl(n || "")));
        }
        setChatApi(t) {
          ((this.Ou = t), this.Ou.setPageControls(this));
        }
        registerMenuStateChangeCallback(t) {
          this.Ru.push(t);
        }
        getReactionsDisabled() {
          return this.Fn;
        }
        Nu() {
          (this.Vr("#tp-control-lock-button .tooltiptext").text(
            this.$u ? "Only I have control" : "Everyone has control",
          ),
            this.$u
              ? (this.Vr("#tp-unlocked-image").addClass("tp-hidden"),
                this.Vr("#tp-locked-image").removeClass("tp-hidden"))
              : (this.Vr("#tp-unlocked-image").removeClass("tp-hidden"),
                this.Vr("#tp-locked-image").addClass("tp-hidden")));
        }
        Gu() {
          this.Su || ((this.$u = !this.$u), this.Nu());
        }
        setResetChatButton() {
          this.Ou.getChatWindowVisible()
            ? (this.Vr("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Ou.shouldReturnToVideo &&
                this.Vr("#tp-chat-button .tooltiptext").text("Return to Video"),
              this.Vr("#tp-chat-reset").removeClass("tp-hidden"),
              this.Vr("#tp-chat-gray").addClass("tp-hidden"),
              this.Vr("#tp-chat-button .tp-hover-image").addClass("tp-hidden"),
              this.Vr("#tp-chat-hidden").addClass("tp-hidden"))
            : (this.Vr("#tp-chat-button .tooltiptext").text("Open Chat"),
              this.Vr("#tp-chat-reset").addClass("tp-hidden"),
              this.Vr("#tp-chat-gray").removeClass("tp-hidden"),
              this.Vr("#tp-chat-button .tp-hover-image").removeClass(
                "tp-hidden",
              ),
              this.Vr("#tp-chat-hidden").removeClass("tp-hidden"));
        }
        zu() {
          (this.Vr("#tp-chat-hidden").addClass("tp-hidden"),
            this.Ou.isPartyWindowsActive()
              ? (this.setResetChatButton(),
                this.Vr("#tp-message-indicator").removeClass("tp-hidden"))
              : (this.Vr("#tp-message-indicator").removeClass("tp-hidden"),
                this.Vr("#tp-chat-button .tooltiptext").text(
                  `${this.ju} unread ${1 == this.ju ? "message" : "messages"}`,
                ),
                this.Vr("#tp-chat-gray").removeClass("tp-hidden"),
                this.Vr("#tp-chat-reset").addClass("tp-hidden"),
                this.Vr("#tp-chat-button .tp-hover-image").removeClass(
                  "tp-hidden",
                )));
        }
        hideMessageIndicator() {
          (this.Vr("#tp-message-indicator").addClass("tp-hidden"),
            this.Ou.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (this.Vr("#tp-chat-button .tp-hover-image").removeClass(
                  "tp-hidden",
                ),
                this.Vr("#tp-chat-button .tooltiptext").text("Show chat"),
                this.Vr("#tp-chat-gray").addClass("tp-hidden"),
                this.Vr("#tp-chat-hidden").removeClass("tp-hidden"),
                this.Vr("#tp-chat-reset").addClass("tp-hidden")));
        }
        onChatMessage() {
          this.Ou.shouldChatBeVisible() ||
            this.Ou.isPartyWindowsActive() ||
            (this.ju++,
            this.zu(),
            (this.Tu = !0),
            this.Vu(),
            ze(1e3)().then(() => {
              this.Tu = !1;
            }));
        }
        teardown() {
          (this.Zu(), this.Uu(), this.stopEventListener());
        }
        enablePartyIcons() {
          (this.hideError(),
            this.Vr("#tp-party-active").removeClass("tp-hidden"),
            this.Vr("#tp-party-inactive").addClass("tp-hidden"),
            this.Vr("#tp-icon-container .tooltiptext").addClass("tp-hidden"),
            this.Vr("#tp-icon-container").attr("style", "cursor: auto"));
        }
        Zu() {
          (this.Vr("#tp-party-active").addClass("tp-hidden"),
            this.Vr("#tp-party-inactive").removeClass("tp-hidden"),
            this.Vr("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            this.Vr("#tp-icon-container").removeClass("play-chat-active"),
            this.Vr("#play-chat-icon").addClass("tp-hidden"),
            this.Vr("#tp-icon-white").removeClass("tp-hidden"));
        }
        hideError() {
          this.Vr("#tp-error-box").addClass("tp-hidden");
        }
        Wu(t) {
          return t
            .replace(
              /{EXTENSION_LOGO_WHITE}/g,
              Ea(chrome.runtime.getURL("img/icon_white.svg")),
            )
            .replace(
              /{EXTENSION_LOGO_GRADIENT}/g,
              Ea(chrome.runtime.getURL("img/icon_gradient.svg")),
            )
            .replace(/{PLAY_IMAGE}/g, Ea(chrome.runtime.getURL("img/play.svg")))
            .replace(
              /{UNLOCKED_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/icon_remote_inactive.svg")),
            )
            .replace(
              /{LOCKED_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/icon_remote_active.svg")),
            )
            .replace(
              /{ARROW_RIGHT}/g,
              Ea(chrome.runtime.getURL("img/arrow-right.svg")),
            )
            .replace(
              /{LINK_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/icon_link_inactive.svg")),
            )
            .replace(
              /{LINK_ACTIVE_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/icon_link_active.svg")),
            )
            .replace(
              /{CHAT_HIDDEN_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/icon_chat_inactive.svg")),
            )
            .replace(
              /{CHAT_GRAY_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/icon_chatgray_active.svg")),
            )
            .replace(
              /{CHAT_ACTIVE_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/icon_chat_active.svg")),
            )
            .replace(
              /{DISCONNECT_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/icon_logout_active.svg")),
            )
            .replace(
              /{RESET_CHAT_IMAGE}/g,
              Ea(chrome.runtime.getURL("img/reset_chat.svg")),
            );
        }
        Uu() {
          this.Tu ||
            (this.hideError(),
            this.Vr("#tpIconContainer").addClass("tp-hidden"));
        }
        Vu() {
          return hl(this, void 0, void 0, function* () {
            if (!this.Mu && (this.Pu || this.Ou.inSession)) {
              this.Mu = !0;
              try {
                (yield this.addTpIcon(),
                  this.Ou.inSession ? this.enablePartyIcons() : this.Zu(),
                  this.Vr("#tpIconContainer").removeClass("tp-hidden"),
                  this.setChatButtons());
              } finally {
                this.Mu = !1;
              }
            }
          });
        }
        startEventListener() {
          (this.stopEventListener(),
            (this.Qu = setInterval(this.checkShowMenu, 200)));
        }
        stopEventListener() {
          this.Qu && (clearInterval(this.Qu), (this.Qu = void 0));
        }
        Yu() {
          return "100px";
        }
        Ju() {
          (this.Vr("#tp-buttons-container").attr("style", `top:${this.Yu()}`),
            this.Vr("#tp-chat-close-button").attr("style", `top:${this.Yu()}`),
            this.Vr("#tp-error-box").attr("style", `top:${this.Yu()}`));
        }
        addTpIcon() {
          return hl(this, void 0, void 0, function* () {
            if (
              (this.Pu || this.Ou.inSession) &&
              0 === this.Vr("#tpIconContainer").length
            ) {
              const t = this.Wu(ll()),
                n = yield this.getControlsRoot();
              n.length > 0 &&
                (n.append(
                  (function (t, n = "") {
                    return `\n    ${n ? `<style tpInjected data-tp-overlay-css="1">${n}</style>` : `<link tpInjected data-tp-overlay-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/overlay.css")}">`}\n    ${t}\n  `;
                  })(
                    t,
                    '/* ID+class must beat #tp-buttons-container { display: flex !important }, or\n * icons stay visible / flash unstyled at the top before hide wins. */\n#tpIconContainer.tp-hidden,\n#tp-buttons-container.tp-hidden,\n#tp-chat-close-button.tp-hidden,\n#tp-error-box.tp-hidden,\n#tp-party-active.tp-hidden,\n#tp-message-indicator.tp-hidden,\n#play-chat-icon.tp-hidden,\n#tp-chat-reset.tp-hidden,\n#tp-chat-gray.tp-hidden,\n#tp-chat-hidden.tp-hidden,\n#tp-unlocked-image.tp-hidden,\n#tp-locked-image.tp-hidden,\n.tp-hidden,\n[tpInjected] .hidden {\n    display: none !important;\n}\n\n#tpIconContainer .slider,\n#tp-buttons-container .slider {\n    padding: 0% !important;\n}\n\n#tp-friend-iframe {\n    display: block;\n    background-color: var(--base-black);\n    border-radius: 4px;\n    padding: 20px;\n    right: 60px;\n    top: 0px;\n    border: none;\n    height: 550px;\n    width: 332px;\n    position: absolute;\n    z-index: 99999999999999999;\n}\n\n.tp-seperator {\n    border: 1px solid var(--black-20);\n    border-radius: 1px;\n    width: 40px;\n    height: 0px;\n}\n\n#tp-controls-error-text {\n    color: var(--white-5);\n    text-align: center;\n    padding: 5px;\n}\n\n#tp-error-box {\n    width: 170px;\n    height: 60px;\n    z-index: 9999;\n    position: fixed;\n    right: 80px;\n    top: 50px;\n    /* box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25); */\n    -webkit-backdrop-filter: blur(6px);\n    border-radius: 4px;\n    background-color: rgba(25, 25, 25, 0.7);\n    transition: transform 1s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#tp-buttons-container {\n    width: 50px;\n    z-index: 9999;\n    position: fixed;\n    right: 30px;\n    top: 50px;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: transform 1s;\n    display: flex !important;\n    flex-direction: column;\n    align-items: center;\n}\n\n.play-chat-active {\n    background: none !important;\n}\n\n.play-chat-active:hover {\n    background: var(--black-20) !important;\n}\n\n#tp-icon-container {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n    display: flex !important;\n    border-radius: 4.8px;\n    justify-content: center;\n    align-items: center;\n}\n\n.tp-center-image {\n    position: absolute;\n}\n\n.tooltip-holder {\n    position: relative;\n}\n\n.tooltip-holder:hover .tooltiptext {\n    visibility: visible;\n}\n\n#tp-icon-container:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tp-control-button:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tp-control-button:hover .tp-button-image {\n    visibility: hidden;\n}\n\n.tp-hover-image {\n    visibility: hidden;\n}\n\n.tp-control-button:hover .tp-hover-image {\n    visibility: visible;\n}\n\n.tp-control-button:hover {\n    background-color: var(--black-20);\n}\n\n#tp-message-indicator {\n    background: linear-gradient(135deg, #e34248 0%, #bc4d7a 56.67%, #9e55a0 100%);\n    width: 10px;\n    height: 10px;\n    border-radius: 10px;\n    position: absolute;\n    top: 10px;\n    right: 12px;\n}\n\n#tp-chat-close-button {\n    position: fixed;\n    width: 30px;\n    height: 30px;\n    right: calc(var(--chatWidth) + 5px);\n    top: 113px;\n    z-index: 9999;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 26.4px;\n}\n\n#tp-chat-close-button img {\n    width: 22px;\n    height: 22px;\n}\n\n.tooltiptext {\n    visibility: hidden;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 4px;\n    color: white !important;\n    font-size: 14px !important;\n    text-align: center;\n    vertical-align: center;\n    height: 40px;\n    padding: 5px 0;\n    border-radius: 4px;\n    position: absolute;\n    right: calc(105% + 5px);\n    align-items: center;\n    justify-content: center;\n    display: inline-flex;\n}\n\n.tooltiptext-lower {\n    right: 0px;\n    top: calc(100%);\n}\n\n.tp-control-button {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border-radius: 4px;\n}\n\n.tp-control-button img {\n    width: 16px;\n    height: 16px;\n}\n\n#tp-icon-white {\n    width: 16px;\n    height: 16px;\n}\n\n.createPartyContainer {\n    z-index: 9999;\n    right: 0px;\n    top: var(--containerTop);\n    position: fixed;\n    display: block;\n    background: var(--base-black);\n    width: 332px;\n    height: var(--containerHeight);\n    padding: 20px;\n    border-radius: 4px;\n}\n\n.buttonContainerVisible {\n    animation: goToContainer 0.6s;\n    animation-fill-mode: forwards;\n}\n\n.tpButtonHover {\n    animation: buttonHover 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.tpButtonOut {\n    animation: hoverOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.buttonContainerOut {\n    animation: buttonContainerOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.containerIn {\n    animation: containerIn 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.containerOut {\n    animation: containerOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes goToContainer {\n    0% {\n        border-radius: 50%;\n        background-color: black;\n    }\n    100% {\n        opacity: 1;\n        top: calc(var(--containerTop) + 75px);\n        right: var(--containerWidth);\n        border-top-left-radius: 50%;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 50%;\n        background-color: var(--base-black);\n    }\n}\n\n@keyframes containerIn {\n    0% {\n        right: -400px;\n    }\n    100% {\n        right: 0px;\n    }\n}\n\n@keyframes containerOut {\n    0% {\n        right: 0px;\n    }\n    100% {\n        right: -400px;\n    }\n}\n\n@keyframes buttonContainerOut {\n    0% {\n        opacity: 1;\n        top: calc(var(--containerTop) + 75px);\n        right: var(--containerWidth);\n        border-top-left-radius: 50%;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 50%;\n        background-color: var(--base-black);\n    }\n    100% {\n        opacity: 0.2;\n        right: var(--outRight);\n        border-radius: 50%;\n        background-color: black;\n    }\n}\n\n@keyframes buttonHover {\n    0% {\n    }\n    100% {\n        opacity: 1;\n        right: 0px;\n    }\n}\n\n@keyframes hoverOut {\n    0% {\n        opacity: 1;\n        right: 0px;\n    }\n    100% {\n        opacity: 0.2;\n        right: var(--outRight);\n    }\n}\n\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";\n\n/*\n * overlay.css is injected into the host page with the TP icon. Keep resets scoped\n * so streaming-site controls (YouTube buttons/sliders) are not reset globally.\n */\n#tpIconContainer,\n#tp-error-box {\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n#tpIconContainer *,\n#tp-error-box * {\n    box-sizing: border-box;\n}\n#tpIconContainer :is(h1, h2, h3, h4, h5, h6, a, p, ul, li, ol, button),\n#tp-error-box :is(h1, h2, h3, h4, h5, h6, a, p, ul, li, ol, button) {\n    padding: 0em;\n    margin: 0em;\n}\n#tpIconContainer :is(ul, li, ol, a),\n#tp-error-box :is(ul, li, ol, a) {\n    text-decoration: none;\n    list-style: none;\n}\n#tpIconContainer :is(input, button),\n#tp-error-box :is(input, button) {\n    border: none;\n}\n#tpIconContainer :is(h1, h2, h3, h4, h5, h6, p, span),\n#tp-error-box :is(h1, h2, h3, h4, h5, h6, p, span) {\n    user-select: text !important;\n    cursor: auto !important;\n}\n#tpIconContainer img,\n#tp-error-box img {\n    user-select: none !important;\n}\n#tpIconContainer :is(div, section, button, input, form, article),\n#tp-error-box :is(div, section, button, input, form, article) {\n    outline: none;\n}\n#tpIconContainer a,\n#tp-error-box a {\n    display: inline;\n    /* width: fit-content; */\n}\n#tpIconContainer :is(button, input, form, fieldset),\n#tp-error-box :is(button, input, form, fieldset) {\n    background: none;\n}\n#tpIconContainer button:hover,\n#tp-error-box button:hover {\n    cursor: pointer;\n}\n.r-m {\n    margin: 0 !important;\n}\n.r-m-t {\n    margin-top: 0 !important;\n}\n.r-p-t {\n    padding-top: 0 !important;\n}\n.r-m-l {\n    margin-left: 0 !important;\n}\n.r-p-l {\n    padding-left: 0 !important;\n}\n.r-m-r {\n    margin-right: 0 !important;\n}\n.r-p-r {\n    padding-right: 0 !important;\n}\n.r-m-b {\n    margin-bottom: 0 !important;\n}\n.r-p-b {\n    padding-bottom: 0 !important;\n}\n.r-b-r {\n    border-radius: 0px !important;\n}\n.r-boxshadow {\n    box-shadow: none !important;\n}\n:root {\n    --outRight: -25px;\n    --containerTop: calc(50% - var(--containerHalf));\n    --containerHeight: 205px;\n    --containerHalf: 102.5px;\n    --chatWidth: 340px;\n    --gradient-1: linear-gradient(135deg, #e34248 0%, #bc4d7a 56.67%, #9e55a0 100%);\n    --patreon: #f96854;\n    --base-red: #ef3e3a;\n    --active-red: #ea0f0a;\n    --base-blue: #4da9ff;\n    --base-orange: #ff8d4c;\n    --base-green: #24d154;\n    --base-white: #fafafa;\n    --white-5: #f0f0f0;\n    --white-10: #dcdcdc;\n    --white-15: #c8c8c8;\n    --white-20: #b4b4b4;\n    --white-25: #a0a0a0;\n    --white-30: #8c8c8c;\n    --white-35: #787878;\n    --base-black: #191919;\n    --black-5: #5a5a5a;\n    --black-10: #464646;\n    --black-15: #323232;\n    --black-20: #282828;\n    --black-25: #1e1e1e;\n    --black-30: #0a0a0a;\n}\n.base-white-bg {\n    background-color: var(--base-white);\n}\n.white-5-bg {\n    background-color: var(--white-5);\n}\n.white-10-bg {\n    background-color: var(--white-10);\n}\n.white-15-bg {\n    background-color: var(--white-15);\n}\n.white-20-bg {\n    background-color: var(--white-20);\n}\n.white-25-bg {\n    background-color: var(--white-25);\n}\n.white-30-bg {\n    background-color: var(--white-30);\n}\n.white-35-bg {\n    background-color: var(--white-35);\n}\n.base-black-bg {\n    background-color: var(--base-black);\n}\n.black-5-bg {\n    background-color: var(--black-5);\n}\n.black-10-bg {\n    background-color: var(--black-10);\n}\n.black-15-bg {\n    background-color: var(--black-15);\n}\n.black-20-bg {\n    background-color: var(--black-20);\n}\n.black-25-bg {\n    background-color: var(--black-25);\n}\n.black-30-bg {\n    background-color: var(--black-30);\n}\n.black-35-bg {\n    background-color: var(--black-35);\n}\n.base-red-bg {\n    background-color: var(--base-red);\n}\n.active-red-bg {\n    background-color: var(--active-red);\n}\n.base-orange-bg {\n    background-color: var(--base-orange);\n}\n.base-blue-bg {\n    background-color: var(--base-blue);\n}\n.base-green-bg {\n    background-color: var(--base-green);\n}\n.patreon-bg {\n    background-color: var(--patreon);\n}\n.txt-blue {\n    color: var(--base-blue) !important;\n}\n.txt-red {\n    color: var(--base-red) !important;\n}\n.txt-white {\n    color: var(--base-white) !important;\n}\n#tpIconContainer :is(div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button),\n#tp-error-box :is(div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button) {\n    word-wrap: normal;\n}\n:root {\n    --regular: 400;\n    --medium: 500;\n    --semi-bold: 600;\n    --bold: 700;\n    --extra-bold: 800;\n    --black: 900;\n}\n.extension-title {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    color: var(--base-red);\n    font-size: 16px;\n    letter-spacing: 0.2px;\n}\n.extension-txt {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--regular);\n    color: var(--white-15);\n    font-size: 14px;\n}\n.extension-txt-indicator {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--regular);\n    color: var(--white-35);\n    font-size: 11px;\n}\n.extension-description {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    color: var(--white-10);\n    font-size: 13px;\n}\n.extension-border-bot {\n    border-bottom: 1px solid var(--black-10);\n}\n.extension-border-top {\n    border-top: 1px solid var(--black-10);\n}\n.extension-btn {\n    width: 100%;\n    margin-top: 10px;\n    background: var(--base-red);\n    color: var(--base-white);\n    padding: 10px 0px;\n    border-radius: 2px;\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    transition: background 0.3s ease;\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: center;\n    font-size: 14px;\n}\n.extension-btn:hover {\n    background: var(--active-red);\n}\n.extension-btn a {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    color: var(--base-white);\n}\n.no-error {\n    display: block;\n    background: var(--base-black);\n    width: var(--containerWidth);\n    padding: 20px;\n    border-radius: 4px;\n}\n.no-error input[type="text"] {\n    display: block;\n    outline-style: none;\n    color: var(--base-white);\n    border: 1px solid var(--base-white);\n    border-radius: 4px;\n    width: 100%;\n    height: 40px;\n    padding: 8px 12px;\n    margin-top: 10px;\n}\n.no-error input[type="text"]:focus {\n    border: 1px solid var(--white-35);\n}\n.no-error label {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    display: flex;\n    flex-flow: wrap row;\n    align-items: center;\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--regular);\n    color: var(--base-white);\n    font-size: 12px;\n    margin-top: 12px;\n}\n.no-error label input {\n    margin-right: 10px;\n}\n.no-error h2 {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--semi-bold);\n    color: var(--base-white);\n    font-size: 18px;\n    letter-spacing: 0.2px;\n}\n.no-error button {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    cursor: pointer;\n    background-color: var(--base-red);\n    color: var(--base-white);\n    transition: 0.3s ease;\n    font-size: 13px;\n    letter-spacing: 0.2px;\n    margin-top: 16px;\n    transform: translateY(0px);\n}\n.no-error button:hover {\n    transform: translateY(-2px);\n}\n.no-error i {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--bold);\n}\n.no-error .copy-val {\n    display: block;\n    width: fit-content;\n    margin-top: 10px;\n    padding: 10px 20px;\n}\n.no-error .copy-val a {\n    font-family: "Poppins", sans-serif;\n    font-weight: var(--medium);\n    border-radius: 2px;\n    transition: 0.3s ease;\n    font-size: 12px;\n}\n.some-error {\n    display: block;\n    background: var(--base-black);\n    width: 332px;\n    padding: 20px;\n    border-radius: 4px;\n}\n.extension-btn {\n    margin-bottom: 10px;\n}\n#create-session {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#create-session:hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#accept-permissions {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#accept-permissions :hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n.popup-url-container {\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 15px;\n}\n.popup-url-container input[type="text"] {\n    display: block;\n    outline-style: none;\n    color: var(--base-white);\n    border: none;\n    border-bottom: 1px solid var(--base-white);\n    border-radius: 0px;\n    width: 60%;\n    height: 40px;\n    padding: 0px;\n    margin-top: 0px;\n}\n.popup-url-container input[type="text"]:focus {\n    border: none;\n}\n.popup-url-container .copy-val {\n    cursor: pointer !important;\n    width: 34%;\n    margin: 0;\n}\n.popup-url-container .copy-val a {\n    margin: 0;\n}\n.popup-review-container {\n    display: flex;\n    flex-flow: wrap column;\n    width: 100%;\n    padding-top: 15px;\n    margin-top: 15px;\n    border-top: 1px solid var(--black-10);\n}\n.popup-review-container button {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n.popup-review-container button:hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n} /*# sourceMappingURL=pop.min.css.map */\n.ellipsis-anim span {\n    opacity: 0;\n    -webkit-animation: ellipsis-dot 1s infinite;\n    animation: ellipsis-dot 1s infinite;\n}\n\n.ellipsis-anim span:nth-child(1) {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n.ellipsis-anim span:nth-child(2) {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n.ellipsis-anim span:nth-child(3) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n@-webkit-keyframes ellipsis-dot {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes ellipsis-dot {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    margin-top: 0;\n}\n.switch input,\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.switch input:checked + .slider,\n.switch input:checked + .slider {\n    background: var(--gradient-1);\n}\n.switch input:checked + .slider:before,\n.switch input:checked + .slider:before {\n    -webkit-transform: translateX(5px);\n    -ms-transform: translateX(5px);\n    transform: translateX(5px);\n}\n.switch .slider,\n.switch .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--black-5);\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.switch .slider:before,\n.switch .slider:before {\n    position: absolute;\n    content: "";\n    height: 14px;\n    width: 14px;\n    left: 4px;\n    bottom: 2px;\n    background-color: #fff;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.switch .round,\n.switch .round {\n    border-radius: 34px;\n}\n.switch .round:before,\n.switch .round:before {\n    border-radius: 50%;\n}\n.switch .round:hover,\n.switch .round:hover {\n    cursor: pointer !important;\n}\n\n.pinned {\n    background-color: var(--black-20);\n}\n\n.gradient-image {\n}\n\n.body14r {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 21px;\n}\n',
                  ),
                ),
                this.Ku());
            }
          });
        }
        Ku() {
          (this.Vr("#tp-control-lock-button").click(this.Gu.bind(this)),
            this.Ju(),
            this.Vr("#tp-link-button").click(this.qu.bind(this)),
            this.Vr("#tp-chat-button").on(
              "click",
              (t) => (
                this.Xu(),
                t.stopImmediatePropagation(),
                t.stopPropagation(),
                !1
              ),
            ),
            this.Vr("#tp-buttons-container").on("mouseenter", () => {
              this.onControlsMouseEnter();
            }),
            this.Vr("#tp-buttons-container").on("mouseleave", () => {
              this.onControlsMouseLeave();
            }),
            this.Vr("#tp-disconnect-button").on("click", () => {
              this.tc();
            }));
        }
        tc() {
          const t = new fr(ei, Xe, Yo);
          (co.L(t), this.Uu());
        }
        onControlsMouseEnter() {}
        onControlsMouseLeave() {}
        qu() {
          (this.Ou.linkIconListener(),
            this.Vr("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              this.Vr("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3));
        }
        Xu() {
          return hl(this, void 0, void 0, function* () {
            ((this.ju = 0),
              this.hideMessageIndicator(),
              this.Ou.isPartyWindowsActive()
                ? this.Ou.resetChatWindow(!0)
                : (yield this.Ou.setChatVisible(!this.Ou.shouldChatBeVisible()),
                  this.setChatButtons()));
          });
        }
        onInitChat() {
          this.Iu && this.Vu();
        }
        setChatButtons() {
          (this.Ou.inSession && this.Ou.getChatVisible()
            ? this.nc()
            : this.ec(),
            this.Ou.isPartyWindowsActive()
              ? this.setResetChatButton()
              : this.hideMessageIndicator());
        }
        nc() {
          return hl(this, void 0, void 0, function* () {
            this.Ou.inSession &&
              this.Ou.shouldChatBeVisible() &&
              (this.Vr("#tp-chat-close-button").removeClass("tp-hidden"),
              this.Vr("#tp-buttons-container").addClass("tp-hidden"));
          });
        }
        ec() {
          (this.Vr("#tp-chat-close-button").addClass("tp-hidden"),
            this.Vr("#tp-buttons-container").removeClass("tp-hidden"));
        }
      }
      var pl = function (t, n, e, i) {
        return new (e || (e = Promise))(function (s, o) {
          function r(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? s(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(r, a);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
      class fl extends dl {
        getControlsRoot() {
          return pl(this, void 0, void 0, function* () {
            return jQuery("video").parent();
          });
        }
        shouldMenuBeVisible() {
          const t = document.querySelector('[data-testid="playback_controls"]');
          return "hidden" !== (null == t ? void 0 : t.style.visibility);
        }
        getControlsHeight() {
          return "100px";
        }
      }
      class Dl extends Ac {
        constructor() {
          const t = new $c(),
            n = new ul(t),
            e = new tr(t, n);
          let i;
          (window.teleparty && window.teleparty.pageControls
            ? ((i = window.teleparty.pageControls),
              console.log("Using existing page controls"))
            : (i = new fl(n)),
            super(n, t, e, i));
        }
      }
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
        (window.teleparty || (window.teleparty = {}),
        (window.teleparty.contentScriptInjected = !0),
        new Dl());
    })());
})();
