/*******************************************************
* Copyright (C) 2018-2024 WP Interactive Media, Inc. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
*******************************************************/
(() => {
  var t = {
    736(t, e, n) {
      t.exports = function (t) {
        function e(t) {
          let n;
          let s;
          let o;
          let r = null;
          function a(...t) {
            if (!a.enabled) {
              return;
            }
            const i = a;
            const s = Number(new Date());
            const o = s - (n || s);
            i.diff = o;
            i.prev = n;
            i.curr = s;
            n = s;
            t[0] = e.coerce(t[0]);
            if (typeof t[0] != "string") {
              t.unshift("%O");
            }
            let r = 0;
            t[0] = t[0].replace(/%([a-zA-Z%])/g, (n, s) => {
              if (n === "%%") {
                return "%";
              }
              r++;
              const o = e.formatters[s];
              if (typeof o == "function") {
                const e = t[r];
                n = o.call(i, e);
                t.splice(r, 1);
                r--;
              }
              return n;
            });
            e.formatArgs.call(i, t);
            (i.log || e.log).apply(i, t);
          }
          a.namespace = t;
          a.useColors = e.useColors();
          a.color = e.selectColor(t);
          a.extend = i;
          a.destroy = e.destroy;
          Object.defineProperty(a, "enabled", {
            enumerable: true,
            configurable: false,
            get: () => r !== null ? r : (s !== e.namespaces && (s = e.namespaces, o = e.enabled(t)), o),
            set: t => {
              r = t;
            }
          });
          if (typeof e.init == "function") {
            e.init(a);
          }
          return a;
        }
        function i(t, n) {
          const i = e(this.namespace + (n === undefined ? ":" : n) + t);
          i.log = this.log;
          return i;
        }
        function s(t, e) {
          let n = 0;
          let i = 0;
          let s = -1;
          let o = 0;
          while (n < t.length) {
            if (i < e.length && (e[i] === t[n] || e[i] === "*")) {
              if (e[i] === "*") {
                s = i;
                o = n;
                i++;
              } else {
                n++;
                i++;
              }
            } else {
              if (s === -1) {
                return false;
              }
              i = s + 1;
              o++;
              n = o;
            }
          }
          while (i < e.length && e[i] === "*") {
            i++;
          }
          return i === e.length;
        }
        e.debug = e;
        e.default = e;
        e.coerce = function (t) {
          if (t instanceof Error) {
            return t.stack || t.message;
          }
          return t;
        };
        e.disable = function () {
          const t = [...e.names, ...e.skips.map(t => "-" + t)].join(",");
          e.enable("");
          return t;
        };
        e.enable = function (t) {
          e.save(t);
          e.namespaces = t;
          e.names = [];
          e.skips = [];
          const n = (typeof t == "string" ? t : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
          for (const t of n) {
            if (t[0] === "-") {
              e.skips.push(t.slice(1));
            } else {
              e.names.push(t);
            }
          }
        };
        e.enabled = function (t) {
          for (const n of e.skips) {
            if (s(t, n)) {
              return false;
            }
          }
          for (const n of e.names) {
            if (s(t, n)) {
              return true;
            }
          }
          return false;
        };
        e.humanize = n(6585);
        e.destroy = function () {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        };
        Object.keys(t).forEach(n => {
          e[n] = t[n];
        });
        e.names = [];
        e.skips = [];
        e.formatters = {};
        e.selectColor = function (t) {
          let n = 0;
          for (let e = 0; e < t.length; e++) {
            n = (n << 5) - n + t.charCodeAt(e);
            n |= 0;
          }
          return e.colors[Math.abs(n) % e.colors.length];
        };
        e.enable(e.load());
        return e;
      };
    },
    5089(t) {
      t.exports = "<div id=\"chat-wrapper\" tpInjected>\n    <iframe\n        style=\"display: none\"\n        id=\"tpChatFrame\"\n        allow=\"autoplay; clipboard-read; web-share; clipboard-write; payment; camera; microphone;\"\n        src=\"{CHAT_URL}\"\n    >\n    </iframe>\n</div>\n";
    },
    6585(t) {
      var e = 1000;
      var n = e * 60;
      var i = n * 60;
      var s = i * 24;
      var o = s * 7;
      var r = s * 365.25;
      function a(t, e, n, i) {
        var s = e >= n * 1.5;
        return Math.round(t / n) + " " + i + (s ? "s" : "");
      }
      t.exports = function (t, u) {
        u = u || {};
        var c = typeof t;
        if (c === "string" && t.length > 0) {
          return function (t) {
            if ((t = String(t)).length > 100) {
              return;
            }
            var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
            if (!a) {
              return;
            }
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
                return u * n;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return u * e;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return u;
              default:
                return;
            }
          }(t);
        }
        if (c === "number" && isFinite(t)) {
          if (u.long) {
            return function (t) {
              var o = Math.abs(t);
              if (o >= s) {
                return a(t, o, s, "day");
              }
              if (o >= i) {
                return a(t, o, i, "hour");
              }
              if (o >= n) {
                return a(t, o, n, "minute");
              }
              if (o >= e) {
                return a(t, o, e, "second");
              }
              return t + " ms";
            }(t);
          } else {
            return function (t) {
              var o = Math.abs(t);
              if (o >= s) {
                return Math.round(t / s) + "d";
              }
              if (o >= i) {
                return Math.round(t / i) + "h";
              }
              if (o >= n) {
                return Math.round(t / n) + "m";
              }
              if (o >= e) {
                return Math.round(t / e) + "s";
              }
              return t + "ms";
            }(t);
          }
        }
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
      };
    },
    7076(t) {
      t.exports = "<style tpInjected>\n    /* Critical hide rules inline so icons never flash before overlay.css loads.\n     * ID+class beats #tp-buttons-container { display: flex !important }. */\n    #tpIconContainer.tp-hidden,\n    #tp-buttons-container.tp-hidden,\n    #tp-error-box.tp-hidden,\n    .tp-hidden {\n        display: none !important;\n    }\n    #tp-buttons-container {\n        position: fixed;\n        right: 30px;\n        top: 50px;\n        z-index: 9999;\n        width: 50px;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 4px;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n</style>\n<div class=\"tp-hidden\" id=\"tpIconContainer\" tpInjected>\n    <div class=\"tp-hidden\" id=\"tp-buttons-container\">\n        <button id=\"tp-icon-container\">\n            <img id=\"tp-icon-white\" src=\"{EXTENSION_LOGO_GRADIENT}\" />\n            <img id=\"play-chat-icon\" class=\"tp-hidden\" src=\"{PLAY_CHAT}\" />\n            <span class=\"tooltiptext extension-txt\" style=\"width: 120px\">Open Teleparty</span>\n            <div class=\"tp-hidden\" id=\"tp-message-indicator\"></div>\n        </button>\n        <div class=\"tp-seperator\"></div>\n        <!-- <button class=\"tp-control-button\" id=\"tp-friends-button\">\n            <img id=\"tp-friends-image\" src='{FRIENDS_IMAGE}' />\n            <span class=\"tooltiptext extension-txt\" style=\"width: 120px;\"> Friends List</span>\n        </button> -->\n        <div class=\"tp-hidden\" id=\"tp-party-active\">\n            <button class=\"tp-control-button\" id=\"tp-link-button\">\n                <img class=\"tp-button-image tp-center-image\" data-tp-id=\"overlay-copy_link\" src=\"{LINK_IMAGE}\" />\n                <img class=\"tp-hover-image tp-center-image\" data-tp-id=\"overlay-copy_link\" src=\"{LINK_ACTIVE_IMAGE}\" />\n                <span class=\"tooltiptext extension-txt\" style=\"width: 120px\">Copy link</span>\n            </button>\n            <button class=\"tp-control-button\" id=\"tp-chat-button\">\n                <img\n                    id=\"tp-chat-reset\"\n                    class=\"tp-center-image hidden\"\n                    data-tp-id=\"overlay-reset_chat\"\n                    src=\"{RESET_CHAT_IMAGE}\"\n                />\n                <img id=\"tp-chat-hidden\" class=\"tp-button-image tp-center-image\" src=\"{CHAT_HIDDEN_IMAGE}\" />\n                <img id=\"tp-chat-gray\" class=\"hidden tp-button-image tp-center-image\" src=\"{CHAT_GRAY_IMAGE}\" />\n                <img class=\"tp-hover-image tp-center-image\" data-tp-id=\"overlay-show_chat\" src=\"{CHAT_ACTIVE_IMAGE}\" />\n                <div class=\"tp-hidden\" id=\"tp-message-indicator\"></div>\n                <span class=\"tooltiptext extension-txt\" style=\"width: 120px\">Show chat</span>\n            </button>\n            <button class=\"tp-control-button\" id=\"tp-disconnect-button\">\n                <img\n                    class=\"tp-button-image tp-center-image\"\n                    data-tp-id=\"overlay-leave_party\"\n                    src=\"{DISCONNECT_IMAGE}\"\n                />\n                <img class=\"tp-hover-image tp-center-image\" data-tp-id=\"overlay-leave_party\" src=\"{DISCONNECT_IMAGE}\" />\n                <span class=\"tooltiptext extension-txt\" style=\"width: 120px\">Leave Party</span>\n            </button>\n        </div>\n    </div>\n    <!-- <button class=\"hidden tp-control-button\" id=\"tp-chat-close-button\">\n        <img id=\"tp-start-image\" data-tp-id=\"overlay-hide_chat\" src='{ARROW_RIGHT}' />\n        <span class=\"tooltiptext extension-txt\" style=\"width: 100px;\">Hide chat</span>\n    </button> -->\n    <div id=\"tp-error-box\" class=\"tp-hidden\">\n        <p class=\"extension-txt-indicator\" id=\"tp-controls-error-text\">\n            Failed to connect to background script. Please Try again later\n        </p>\n    </div>\n</div>\n";
    },
    7588() {
      (function (t, e, n) {
        "use strict";

        if (t.MutationObserver && typeof HTMLElement != "undefined") {
          var i;
          var s = 0;
          i = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
          var o = {
            matchesSelector: function (t, e) {
              return t instanceof HTMLElement && i.call(t, e);
            },
            addMethod: function (t, e, n) {
              var i = t[e];
              t[e] = function () {
                if (n.length == arguments.length) {
                  return n.apply(this, arguments);
                } else if (typeof i == "function") {
                  return i.apply(this, arguments);
                } else {
                  return undefined;
                }
              };
            },
            callCallbacks: function (t, e, n) {
              if (t.length) {
                if (e && e.options.onceOnly) {
                  t = [t[0]];
                  e.me.unbindEventWithSelectorAndCallback.call(e.target, e.selector, e.callback);
                }
                for (var i, s = 0; i = t[s]; s++) {
                  if (i && i.callback) {
                    i.callback.call(i.elem, i.elem);
                  }
                }
                if (e && e.callback && n) {
                  n.addTimeoutHandler(e.target, e.selector, e.callback, e.options, e.data);
                }
              }
            },
            checkChildNodesRecursively: function (t, e, n, i) {
              for (var s, r = 0; s = t[r]; r++) {
                if (n(s, e, i)) {
                  i.push({
                    callback: e.callback,
                    elem: s
                  });
                }
                if (s.childNodes.length > 0) {
                  o.checkChildNodesRecursively(s.childNodes, e, n, i);
                }
              }
            },
            mergeArrays: function (t, e) {
              var n;
              var i = {};
              for (n in t) {
                if (t.hasOwnProperty(n)) {
                  i[n] = t[n];
                }
              }
              for (n in e) {
                if (e.hasOwnProperty(n)) {
                  i[n] = e[n];
                }
              }
              return i;
            },
            toElementsArray: function (e) {
              if (e !== undefined && (typeof e.length != "number" || e === t)) {
                e = [e];
              }
              return e;
            }
          };
          var r = function () {
            function t() {
              this.i = [];
              this.u = null;
              this.l = null;
            }
            t.prototype.addEvent = function (t, e, n, i, s) {
              var o = {
                target: t,
                selector: e,
                options: n,
                callback: i,
                data: s,
                firedElems: []
              };
              if (this.u) {
                this.u(o);
              }
              this.i.push(o);
              return o;
            };
            t.prototype.removeEvent = function (t) {
              for (var e, n = this.i.length - 1; e = this.i[n]; n--) {
                if (t(e)) {
                  if (this.l) {
                    this.l(e);
                  }
                  if (e.data && e.data.timeoutId) {
                    clearTimeout(e.data.timeoutId);
                  }
                  var i = this.i.splice(n, 1);
                  if (i && i.length) {
                    i[0].callback = null;
                  }
                }
              }
            };
            t.prototype.beforeAdding = function (t) {
              this.u = t;
            };
            t.prototype.beforeRemoving = function (t) {
              this.l = t;
            };
            return t;
          }();
          function a(e, i) {
            var s = new r();
            var a = this;
            var u = {
              fireOnAttributesModification: false
            };
            s.beforeAdding(function (n) {
              var s;
              var o = n.target;
              if (o === t.document || o === t) {
                o = document.getElementsByTagName("html")[0];
              }
              s = new MutationObserver(function (t) {
                i.call(this, t, n);
              });
              var r = e(n.options);
              s.observe(o, r);
              n.observer = s;
              n.me = a;
            });
            s.beforeRemoving(function (t) {
              t.observer.disconnect();
            });
            this.bindEvent = function (t, e, n) {
              e = o.mergeArrays(u, e);
              for (var i = o.toElementsArray(this), r = 0; r < i.length; r++) {
                const o = {};
                a.addTimeoutHandler(i[r], t, n, e, o);
                s.addEvent(i[r], t, e, n, o);
              }
            };
            this.unbindEvent = function () {
              var t = o.toElementsArray(this);
              s.removeEvent(function (e) {
                for (var i = 0; i < t.length; i++) {
                  if (this === n || e.target === t[i]) {
                    return true;
                  }
                }
                return false;
              });
            };
            this.unbindEventWithSelectorOrCallback = function (t) {
              var e;
              var i = o.toElementsArray(this);
              var r = t;
              e = typeof t == "function" ? function (t) {
                for (var e = 0; e < i.length; e++) {
                  if ((this === n || t.target === i[e]) && t.callback === r) {
                    return true;
                  }
                }
                return false;
              } : function (e) {
                for (var s = 0; s < i.length; s++) {
                  if ((this === n || e.target === i[s]) && e.selector === t) {
                    return true;
                  }
                }
                return false;
              };
              s.removeEvent(e);
            };
            this.unbindEventWithSelectorAndCallback = function (t, e) {
              var i = o.toElementsArray(this);
              s.removeEvent(function (s) {
                for (var o = 0; o < i.length; o++) {
                  if ((this === n || s.target === i[o]) && s.selector === t && s.callback === e) {
                    return true;
                  }
                }
                return false;
              });
            };
            this.addTimeoutHandler = function (t, e, n, i, s) {
              if (!!i.timeout && !(i.timeout <= 0)) {
                if (s.timeoutId) {
                  clearTimeout(s.timeoutId);
                }
                s.timeoutId = setTimeout(() => {
                  a.unbindEventWithSelectorAndCallback.call(t, e, n);
                  n.call(null, null);
                }, i.timeout);
              }
            };
            return this;
          }
          var u = new function () {
            var t = {
              fireOnAttributesModification: false,
              onceOnly: false,
              existing: false,
              timeout: 0
            };
            function e(t, e, i) {
              return !!o.matchesSelector(t, e.selector) && !(t.p === n && (t.p = s++), e.firedElems.indexOf(t.p) != -1) && (e.firedElems.push(t.p), true);
            }
            var i = (u = new a(function (t) {
              var e = {
                attributes: false,
                childList: true,
                subtree: true
              };
              if (t.fireOnAttributesModification) {
                e.attributes = true;
              }
              return e;
            }, function (t, n) {
              t.forEach(function (t) {
                var i = t.addedNodes;
                var s = t.target;
                var r = [];
                if (i !== null && i.length > 0) {
                  o.checkChildNodesRecursively(i, n, e, r);
                } else if (t.type === "attributes" && e(s, n, r)) {
                  r.push({
                    callback: n.callback,
                    elem: s
                  });
                }
                o.callCallbacks(r, n, u);
              });
            })).bindEvent;
            u.bindEvent = function (e, s, r) {
              var a = typeof s == "object" ? o.mergeArrays(t, s) : {
                ...t
              };
              var u = typeof r == "function" ? r : typeof s == "function" ? s : n;
              var c = o.toElementsArray(this);
              if (!u) {
                a.onceOnly = true;
              }
              if (a.existing) {
                var l = [];
                for (var h = 0; h < c.length; h++) {
                  for (var d = c[h].querySelectorAll(e), p = 0; p < d.length; p++) {
                    l.push({
                      callback: u,
                      elem: d[p]
                    });
                  }
                }
                if (a.onceOnly && l.length) {
                  if (u) {
                    return u.call(l[0].elem, l[0].elem);
                  } else {
                    return Promise.resolve(l[0].elem);
                  }
                }
                setTimeout(o.callCallbacks, 1, l);
              }
              if (!u) {
                var f = this;
                return new Promise(t => i.call(f, e, a, t));
              }
              i.call(this, e, a, u);
            };
            return u;
          }();
          var c = new function () {
            var t = {
              onceOnly: false,
              timeout: 0
            };
            function e(t, e) {
              return o.matchesSelector(t, e.selector);
            }
            var i = (c = new a(function () {
              return {
                childList: true,
                subtree: true
              };
            }, function (t, n) {
              t.forEach(function (t) {
                var i = t.removedNodes;
                var s = [];
                if (i !== null && i.length > 0) {
                  o.checkChildNodesRecursively(i, n, e, s);
                }
                o.callCallbacks(s, n, c);
              });
            })).bindEvent;
            c.bindEvent = function (e, s, r) {
              var a = typeof s == "object" ? o.mergeArrays(t, s) : {
                ...t
              };
              var u = typeof r == "function" ? r : typeof s == "function" ? s : n;
              if (!u) {
                a.onceOnly = true;
                var c = this;
                return new Promise(t => i.call(c, e, a, t));
              }
              i.call(this, e, a, u);
            };
            return c;
          }();
          if (e) {
            d(e.fn);
          }
          d(HTMLElement.prototype);
          d(NodeList.prototype);
          d(HTMLCollection.prototype);
          d(HTMLDocument.prototype);
          d(Window.prototype);
          var l = {};
          h(u, l, "unbindAllArrive");
          h(c, l, "unbindAllLeave");
          return l;
        }
        function h(t, e, n) {
          o.addMethod(e, n, t.unbindEvent);
          o.addMethod(e, n, t.unbindEventWithSelectorOrCallback);
          o.addMethod(e, n, t.unbindEventWithSelectorAndCallback);
        }
        function d(t) {
          t.arrive = u.bindEvent;
          h(u, t, "unbindArrive");
          t.leave = c.bindEvent;
          h(c, t, "unbindLeave");
        }
      })(window, typeof jQuery == "undefined" ? null : jQuery, undefined);
    },
    7833(t, e, n) {
      e.formatArgs = function (e) {
        e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const n = "color: " + this.color;
        e.splice(1, 0, n, "color: inherit");
        let i = 0;
        let s = 0;
        e[0].replace(/%[a-zA-Z%]/g, t => {
          if (t !== "%%") {
            i++;
            if (t === "%c") {
              s = i;
            }
          }
        });
        e.splice(s, 0, n);
      };
      e.save = function (t) {
        try {
          if (t) {
            e.storage.setItem("debug", t);
          } else {
            e.storage.removeItem("debug");
          }
        } catch (t) {}
      };
      e.load = function () {
        let t;
        try {
          t = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
        } catch (t) {}
        if (!t && typeof process != "undefined" && "env" in process) {
          t = "MISSING_ENV_VAR".DEBUG;
        }
        return t;
      };
      e.useColors = function () {
        if (typeof window != "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let t;
        return typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      };
      e.storage = function () {
        try {
          return localStorage;
        } catch (t) {}
      }();
      e.destroy = (() => {
        let t = false;
        return () => {
          if (!t) {
            t = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      e.log = console.debug || console.log || (() => {});
      t.exports = n(736)(e);
      const {
        formatters: i
      } = t.exports;
      i.j = function (t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    }
  };
  var e = {};
  function n(i) {
    var s = e[i];
    if (s !== undefined) {
      return s.exports;
    }
    var o = e[i] = {
      exports: {}
    };
    t[i](o, o.exports, n);
    return o.exports;
  }
  n.n = t => {
    var e = t && t.D ? () => t.default : () => t;
    n.d(e, {
      a: e
    });
    return e;
  };
  n.d = (t, e) => {
    for (var i in e) {
      if (n.o(e, i) && !n.o(t, i)) {
        Object.defineProperty(t, i, {
          enumerable: true,
          get: e[i]
        });
      }
    }
  };
  n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  (() => {
    "use strict";

    class t {
      constructor(t, e, n) {
        this.sender = t;
        this.target = e;
        this.type = n;
      }
    }
    class e extends t {
      constructor(t, e, n) {
        super(t, e, n);
        this.type = n;
      }
    }
    var i;
    var s;
    (function (t) {
      t.JOIN_SESSION = "joinSession";
      t.LEAVE_SESSION = "leaveSession";
      t.ACCEPT_DROPIN = "acceptDropin";
      t.SET_STATUS_TYPE = "setStatusType";
      t.SET_DATA = "setData";
      t.GET_DATA = "getData";
      t.GET_STATUS_TYPE = "getStatusType";
      t.GET_PARTY_STATUS = "getPartyStatus";
      t.GET_TAB_PARTY_SESSION_FOR_POPUP = "getTabPartySessionForPopup";
      t.GET_VIDEO_DATA = "getVideoData";
      t.LOAD_SESSION = "loadSession";
      t.NO_SESSION_DATA = "noSessionData";
      t.ON_NOTIF = "onNotif";
      t.FORWARD_TO_SIDEBAR = "forwardToSidebar";
      t.TEARDOWN = "teardown";
      t.ON_VIDEO_UPDATE = "onVideoUpdate";
      t.SOCKET_LOST_CONNECTION = "socketLostConnection";
      t.REBOOT = "socketReconnect";
      t.LOG_EVENT = "logEvent";
      t.LOG_EXPERIMENT = "logExperiment";
      t.STAY_ALIVE = "stayAlive";
      t.LOAD_CHAT_WINDOW = "loadChatWindow";
      t.RESET_CHAT_WINDOW = "resetChatWindow";
      t.HIDE_CHAT_WINDOW = "hideChatWindow";
      t.SET_USER_PRESENCE = "setUserPresence";
      t.TOGGLE_OPEN_PARTY = "toggleOpenParty";
      t.GET_ACTIVE_PARTY = "getActiveParty";
      t.GET_TAB_ID = "getTabId";
      t.SET_ACTIVE_PARTY = "setActiveParty";
      t.FULLSCREEN_WINDOW = "fullscreenWindow";
      t.MAX_WINDOW = "maxWindow";
      t.GET_EXPERIMENT_FLAG = "getExpFlag";
      t.USER_LIST = "userList";
      t.USER_AUTHENTICATED = "userAuthenticated";
      t.BLOCK_CSP = "blockCSP";
      t.REDIRECT_DATA_SET = "redirectDataSet";
      t.LOAD_NETFLIX_DATA = "loadNetflixData";
      t.TOGGLE_BACKGROUND_TAB = "toggleBackgroundTab";
      t.GET_ALLCHAT_HAS_FOCUS = "getAllchatHasFocus";
      t.SET_REDIRECT_URL = "setRedirectUrl";
      t.GET_REDIRECT_URL = "getRedirectUrl";
      t.SET_POSTHOG_DISTINCT_ID = "setPosthogDistinctId";
      t.POSTHOG_HAS_FEATURE = "posthogHasFeature";
      t.GET_PERM_ID = "getPermId";
      t.GET_VALIDATIONS_FAILURE_INFO = "getValidationsFailureInfo";
      t.UPDATE_USER_SETTINGS = "updateUserSettings";
      t.UPDATE_HANDLE = "updateHandle";
      t.SEND_API_REQUEST = "sendApiRequest";
      t.PARTY_INIT_TIMING = "partyInitTiming";
    })(i ||= {});
    (function (t) {
      t.POSTHOG = "posthog";
      t.METIS = "metis";
      t.BOTH = "both";
    })(s ||= {});
    class o extends e {
      constructor(t, e, n, o = s.BOTH) {
        super(t, e, i.LOG_EVENT);
        this.eventPipelineTarget = s.BOTH;
        this.data = n;
        this.sender = t;
        this.target = e;
        this.eventPipelineTarget = o;
      }
    }
    const r = "Service_Background";
    const a = "Popup";
    const u = "Content_Script";
    const c = "Page_Controls";
    const l = "https://api.teleparty.com";
    const h = "https://www.teleparty.com";
    const d = "https://files.teleparty.com";
    const v = typeof chrome != "undefined" ? chrome.runtime : undefined;
    const g = (v == null ? undefined : v.id) ?? "";
    const m = (v == null ? undefined : v.getManifest())?.version ?? "";
    const w = "reactionContainerOpen";
    const y = "https://sessions.teleparty.com";
    const b = `${h}/sidebar`;
    const C = ["heart", "angry", "fire", "laugh", "surprise", "cry"];
    const F = "recentlyUsedEmojiMap";
    const _ = "redirectDataMap";
    const E = 5000;
    const x = [{
      annotation: "face with tears of joy",
      group: 0,
      order: 8,
      tags: ["face", "joy", "laugh", "tear"],
      unicode: "😂",
      version: 0.6,
      emoticon: ":')",
      shortcodes: ["joy", "lmao", "tears_of_joy"]
    }, {
      annotation: "smiling face with heart-eyes",
      group: 0,
      order: 16,
      tags: ["eye", "face", "love", "smile"],
      unicode: "😍",
      version: 0.6,
      shortcodes: ["heart_eyes", "smiling_face_with_heart_eyes"]
    }, {
      shortcodes: ["loudly_crying_face", "sob"],
      annotation: "loudly crying face",
      tags: ["cry", "face", "sad", "sob", "tear"],
      unicode: "😭",
      order: 93,
      group: 0,
      version: 0.6,
      emoticon: ":'o"
    }, {
      shortcodes: ["pleading", "pleading_face"],
      annotation: "pleading face",
      tags: ["begging", "mercy", "puppy eyes"],
      unicode: "🥺",
      order: 85,
      group: 0,
      version: 11
    }, {
      shortcodes: ["rofl"],
      annotation: "rolling on the floor laughing",
      tags: ["face", "floor", "laugh", "rofl", "rolling", "rotfl"],
      unicode: "🤣",
      order: 7,
      group: 0,
      version: 3,
      emoticon: ":'D"
    }, {
      annotation: "red heart",
      group: 0,
      order: 149,
      tags: ["heart"],
      unicode: "❤️",
      version: 0.6,
      emoticon: "<3",
      shortcodes: ["heart", "red_heart"]
    }];
    const k = /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
    var A = console.log.bind(self.console);
    function I(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const S = new class {
      addListener(t) {
        chrome.runtime.onMessage.addListener(t);
      }
      removeListener(t) {
        chrome.runtime.onMessage.removeListener(t);
      }
      sendMessageToTabAsync(t, e, n = 20000) {
        return I(this, undefined, undefined, function* () {
          return new Promise((i, s) => {
            const o = setTimeout(() => {
              console.log("send timeout");
              s("Message Timeout");
            }, n);
            try {
              chrome.tabs.sendMessage(e, t, e => {
                if (chrome.runtime.lastError) {
                  A(chrome.runtime.lastError.message + JSON.stringify(t));
                }
                clearTimeout(o);
                i(e);
              });
            } catch (t) {
              clearTimeout(o);
              s(t);
            }
          });
        });
      }
      m(t, e) {
        return I(this, undefined, undefined, function* () {
          return new Promise((n, i) => {
            let s = null;
            if (e) {
              s = setTimeout(() => {
                i({
                  error: "Send Message Timeout"
                });
              }, e);
            }
            try {
              chrome.runtime.sendMessage(g, t, e => {
                if (chrome.runtime.lastError) {
                  console.log(chrome.runtime.lastError.message + JSON.stringify(t));
                }
                if (s) {
                  clearTimeout(s);
                }
                n(e);
              });
            } catch (t) {
              if (s) {
                clearTimeout(s);
              }
              i(t);
            }
          });
        });
      }
    }();
    function B(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const j = `tp_csrf:${new URL(l).origin}`;
    let $ = null;
    function T() {
      return B(this, undefined, undefined, function* () {
        const i = yield fetch(`${l}/session/csrf`, {
          method: "GET",
          credentials: "include"
        });
        if (!i.ok) {
          return;
        }
        const s = yield i.json().catch(() => ({}));
        const o = (s == null ? undefined : s.csrf) ?? (s == null ? undefined : s.token) ?? (s == null ? undefined : s.data)?.csrf;
        if (typeof o == "string" && o) {
          (function (t) {
            try {
              if (typeof sessionStorage == "undefined") {
                return;
              }
              sessionStorage.setItem(j, JSON.stringify({
                v: t,
                t: Date.now()
              }));
            } catch (t) {}
          })(o);
          return o;
        } else {
          return undefined;
        }
      });
    }
    function P(t = false) {
      return B(this, undefined, undefined, function* () {
        const e = function () {
          try {
            if (typeof sessionStorage == "undefined") {
              return;
            }
            const t = sessionStorage.getItem(j);
            if (!t) {
              return;
            }
            const {
              v: e,
              t: n
            } = JSON.parse(t);
            if (Date.now() - n < 60000) {
              return e;
            }
          } catch (t) {}
        }();
        if (e && !t) {
          return e;
        } else {
          if ($ == null) {
            $ = T().finally(() => {
              $ = null;
            });
          }
          return $;
        }
      });
    }
    const M = Object.freeze("video-highlights");
    const L = Object.freeze(["live-match-info", "fantasy", "commentary", "scorecard", "squad", "key-moments"]);
    const R = Object.freeze({
      tag: "type",
      value: "match-info"
    });
    const O = Object.freeze({
      VIDEO_ELEMENT_SELECTOR: "video.vjs-tech",
      VIDEO_ELEMENT_SELECTOR_2: "video[class*=\"StyledVideo\"]",
      TITLE_ELEMENT_SELECTOR: "[class*=\"VideoPlayerTitleLabel\"]",
      MATCH_INFO_QUERY_PARAM: R,
      AD_CLASS_NAME: "video[title=\"Advertisement\"]",
      INSTREAM_AD_ID: "[id*=\"instream-video\"]",
      LIVE_MATCH_PAGE_TYPES: L,
      HIGHLIGHTS: M
    });
    const U = Object.freeze({
      LIVE: "/live/",
      VIDEO: "/video/",
      CHANNELS: "/canales/"
    });
    const V = Object.freeze([U.LIVE, U.CHANNELS]);
    const H = Object.freeze({
      PATH_TYPES: U,
      LIVE_PATHS: V,
      VIDEO_ELEMENT_SELECTOR: "video",
      TITLE_ELEMENT_SELECTOR: "h1"
    });
    const N = Object.freeze({
      SHOW: "player",
      LIVE_TV: "livestream"
    });
    const G = Object.freeze({
      VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-player-element",
      LIVE_VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-bitmovin-element",
      TITLE_ELEMENT_SELECTOR: "h3[class*=\"VODTitle_show-title\"]",
      VIDEO_TYPES: N,
      AD_CLASS_NAME: "video[title=\"Advertisement\"]"
    });
    const z = Object.freeze({
      VIDEO: "vod",
      LIVE: "live"
    });
    const Z = Object.freeze({
      VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-null",
      AD_CLASS_NAME: "video[title=\"Advertisement\"]",
      TITLE_ELEMENT_SELECTOR: "#series_title",
      TITLE_ELEMENT_SELECTOR_LIVE_TV: ".bmpui-label-metadata-viu-title.bmpui-label-metadata-viu-title",
      UI_CONTAINER: ".bmpui-ui-uicontainer",
      VIDEO_TYPES: z,
      QUERY_PARAMS_ORIGIN_EPISODE_CODE_TAG: "originEpisodeCode"
    });
    function Q(t) {
      let e = t.length;
      while (--e >= 0) {
        t[e] = 0;
      }
    }
    const W = 256;
    const Y = 286;
    const J = 30;
    const K = 15;
    const X = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const q = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const tt = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const et = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const nt = new Array(576);
    Q(nt);
    const it = new Array(60);
    Q(it);
    const st = new Array(512);
    Q(st);
    const ot = new Array(256);
    Q(ot);
    const rt = new Array(29);
    Q(rt);
    const at = new Array(J);
    function ut(t, e, n, i, s) {
      this.static_tree = t;
      this.extra_bits = e;
      this.extra_base = n;
      this.elems = i;
      this.max_length = s;
      this.has_stree = t && t.length;
    }
    let ct;
    let lt;
    let ht;
    function dt(t, e) {
      this.dyn_tree = t;
      this.max_code = 0;
      this.stat_desc = e;
    }
    Q(at);
    const pt = t => t < 256 ? st[t] : st[256 + (t >>> 7)];
    const ft = (t, e) => {
      t.pending_buf[t.pending++] = e & 255;
      t.pending_buf[t.pending++] = e >>> 8 & 255;
    };
    const Dt = (t, e, n) => {
      if (t.bi_valid > 16 - n) {
        t.bi_buf |= e << t.bi_valid & 65535;
        ft(t, t.bi_buf);
        t.bi_buf = e >> 16 - t.bi_valid;
        t.bi_valid += n - 16;
      } else {
        t.bi_buf |= e << t.bi_valid & 65535;
        t.bi_valid += n;
      }
    };
    const vt = (t, e, n) => {
      Dt(t, n[e * 2], n[e * 2 + 1]);
    };
    const gt = (t, e) => {
      let n = 0;
      do {
        n |= t & 1;
        t >>>= 1;
        n <<= 1;
      } while (--e > 0);
      return n >>> 1;
    };
    const mt = (t, e, n) => {
      const i = new Array(16);
      let s;
      let o;
      let r = 0;
      for (s = 1; s <= K; s++) {
        r = r + n[s - 1] << 1;
        i[s] = r;
      }
      for (o = 0; o <= e; o++) {
        let e = t[o * 2 + 1];
        if (e !== 0) {
          t[o * 2] = gt(i[e]++, e);
        }
      }
    };
    const wt = t => {
      let e;
      for (e = 0; e < Y; e++) {
        t.dyn_ltree[e * 2] = 0;
      }
      for (e = 0; e < J; e++) {
        t.dyn_dtree[e * 2] = 0;
      }
      for (e = 0; e < 19; e++) {
        t.bl_tree[e * 2] = 0;
      }
      t.dyn_ltree[512] = 1;
      t.opt_len = t.static_len = 0;
      t.sym_next = t.matches = 0;
    };
    const yt = t => {
      if (t.bi_valid > 8) {
        ft(t, t.bi_buf);
      } else if (t.bi_valid > 0) {
        t.pending_buf[t.pending++] = t.bi_buf;
      }
      t.bi_buf = 0;
      t.bi_valid = 0;
    };
    const bt = (t, e, n, i) => {
      const s = e * 2;
      const o = n * 2;
      return t[s] < t[o] || t[s] === t[o] && i[e] <= i[n];
    };
    const Ct = (t, e, n) => {
      const i = t.heap[n];
      let s = n << 1;
      while (s <= t.heap_len && (s < t.heap_len && bt(e, t.heap[s + 1], t.heap[s], t.depth) && s++, !bt(e, i, t.heap[s], t.depth))) {
        t.heap[n] = t.heap[s];
        n = s;
        s <<= 1;
      }
      t.heap[n] = i;
    };
    const Ft = (t, e, n) => {
      let i;
      let s;
      let o;
      let r;
      let a = 0;
      if (t.sym_next !== 0) {
        do {
          i = t.pending_buf[t.sym_buf + a++] & 255;
          i += (t.pending_buf[t.sym_buf + a++] & 255) << 8;
          s = t.pending_buf[t.sym_buf + a++];
          if (i === 0) {
            vt(t, s, e);
          } else {
            o = ot[s];
            vt(t, o + W + 1, e);
            r = X[o];
            if (r !== 0) {
              s -= rt[o];
              Dt(t, s, r);
            }
            i--;
            o = pt(i);
            vt(t, o, n);
            r = q[o];
            if (r !== 0) {
              i -= at[o];
              Dt(t, i, r);
            }
          }
        } while (a < t.sym_next);
      }
      vt(t, 256, e);
    };
    const _t = (t, e) => {
      const n = e.dyn_tree;
      const i = e.stat_desc.static_tree;
      const s = e.stat_desc.has_stree;
      const o = e.stat_desc.elems;
      let r;
      let a;
      let u;
      let c = -1;
      t.heap_len = 0;
      t.heap_max = 573;
      r = 0;
      for (; r < o; r++) {
        if (n[r * 2] !== 0) {
          t.heap[++t.heap_len] = c = r;
          t.depth[r] = 0;
        } else {
          n[r * 2 + 1] = 0;
        }
      }
      while (t.heap_len < 2) {
        u = t.heap[++t.heap_len] = c < 2 ? ++c : 0;
        n[u * 2] = 1;
        t.depth[u] = 0;
        t.opt_len--;
        if (s) {
          t.static_len -= i[u * 2 + 1];
        }
      }
      e.max_code = c;
      r = t.heap_len >> 1;
      for (; r >= 1; r--) {
        Ct(t, n, r);
      }
      u = o;
      do {
        r = t.heap[1];
        t.heap[1] = t.heap[t.heap_len--];
        Ct(t, n, 1);
        a = t.heap[1];
        t.heap[--t.heap_max] = r;
        t.heap[--t.heap_max] = a;
        n[u * 2] = n[r * 2] + n[a * 2];
        t.depth[u] = (t.depth[r] >= t.depth[a] ? t.depth[r] : t.depth[a]) + 1;
        n[r * 2 + 1] = n[a * 2 + 1] = u;
        t.heap[1] = u++;
        Ct(t, n, 1);
      } while (t.heap_len >= 2);
      t.heap[--t.heap_max] = t.heap[1];
      ((t, e) => {
        const n = e.dyn_tree;
        const i = e.max_code;
        const s = e.stat_desc.static_tree;
        const o = e.stat_desc.has_stree;
        const r = e.stat_desc.extra_bits;
        const a = e.stat_desc.extra_base;
        const u = e.stat_desc.max_length;
        let c;
        let l;
        let h;
        let d;
        let p;
        let f;
        let D = 0;
        for (d = 0; d <= K; d++) {
          t.bl_count[d] = 0;
        }
        n[t.heap[t.heap_max] * 2 + 1] = 0;
        c = t.heap_max + 1;
        for (; c < 573; c++) {
          l = t.heap[c];
          d = n[n[l * 2 + 1] * 2 + 1] + 1;
          if (d > u) {
            d = u;
            D++;
          }
          n[l * 2 + 1] = d;
          if (!(l > i)) {
            t.bl_count[d]++;
            p = 0;
            if (l >= a) {
              p = r[l - a];
            }
            f = n[l * 2];
            t.opt_len += f * (d + p);
            if (o) {
              t.static_len += f * (s[l * 2 + 1] + p);
            }
          }
        }
        if (D !== 0) {
          do {
            for (d = u - 1; t.bl_count[d] === 0;) {
              d--;
            }
            t.bl_count[d]--;
            t.bl_count[d + 1] += 2;
            t.bl_count[u]--;
            D -= 2;
          } while (D > 0);
          for (d = u; d !== 0; d--) {
            for (l = t.bl_count[d]; l !== 0;) {
              h = t.heap[--c];
              if (!(h > i)) {
                if (n[h * 2 + 1] !== d) {
                  t.opt_len += (d - n[h * 2 + 1]) * n[h * 2];
                  n[h * 2 + 1] = d;
                }
                l--;
              }
            }
          }
        }
      })(t, e);
      mt(n, c, t.bl_count);
    };
    const Et = (t, e, n) => {
      let i;
      let s;
      let o = -1;
      let r = e[1];
      let a = 0;
      let u = 7;
      let c = 4;
      if (r === 0) {
        u = 138;
        c = 3;
      }
      e[(n + 1) * 2 + 1] = 65535;
      i = 0;
      for (; i <= n; i++) {
        s = r;
        r = e[(i + 1) * 2 + 1];
        if (!(++a < u) || s !== r) {
          if (a < c) {
            t.bl_tree[s * 2] += a;
          } else if (s !== 0) {
            if (s !== o) {
              t.bl_tree[s * 2]++;
            }
            t.bl_tree[32]++;
          } else if (a <= 10) {
            t.bl_tree[34]++;
          } else {
            t.bl_tree[36]++;
          }
          a = 0;
          o = s;
          if (r === 0) {
            u = 138;
            c = 3;
          } else if (s === r) {
            u = 6;
            c = 3;
          } else {
            u = 7;
            c = 4;
          }
        }
      }
    };
    const xt = (t, e, n) => {
      let i;
      let s;
      let o = -1;
      let r = e[1];
      let a = 0;
      let u = 7;
      let c = 4;
      if (r === 0) {
        u = 138;
        c = 3;
      }
      i = 0;
      for (; i <= n; i++) {
        s = r;
        r = e[(i + 1) * 2 + 1];
        if (!(++a < u) || s !== r) {
          if (a < c) {
            do {
              vt(t, s, t.bl_tree);
            } while (--a !== 0);
          } else if (s !== 0) {
            if (s !== o) {
              vt(t, s, t.bl_tree);
              a--;
            }
            vt(t, 16, t.bl_tree);
            Dt(t, a - 3, 2);
          } else if (a <= 10) {
            vt(t, 17, t.bl_tree);
            Dt(t, a - 3, 3);
          } else {
            vt(t, 18, t.bl_tree);
            Dt(t, a - 11, 7);
          }
          a = 0;
          o = s;
          if (r === 0) {
            u = 138;
            c = 3;
          } else if (s === r) {
            u = 6;
            c = 3;
          } else {
            u = 7;
            c = 4;
          }
        }
      }
    };
    let kt = false;
    const At = (t, e, n, i) => {
      Dt(t, 0 + (i ? 1 : 0), 3);
      yt(t);
      ft(t, n);
      ft(t, ~n);
      if (n) {
        t.pending_buf.set(t.window.subarray(e, e + n), t.pending);
      }
      t.pending += n;
    };
    var It = (t, e, n, i) => {
      let s;
      let o;
      let r = 0;
      if (t.level > 0) {
        if (t.strm.data_type === 2) {
          t.strm.data_type = (t => {
            let e;
            let n = 4093624447;
            for (e = 0; e <= 31; e++, n >>>= 1) {
              if (n & 1 && t.dyn_ltree[e * 2] !== 0) {
                return 0;
              }
            }
            if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) {
              return 1;
            }
            for (e = 32; e < W; e++) {
              if (t.dyn_ltree[e * 2] !== 0) {
                return 1;
              }
            }
            return 0;
          })(t);
        }
        _t(t, t.l_desc);
        _t(t, t.d_desc);
        r = (t => {
          let e;
          Et(t, t.dyn_ltree, t.l_desc.max_code);
          Et(t, t.dyn_dtree, t.d_desc.max_code);
          _t(t, t.bl_desc);
          e = 18;
          for (; e >= 3 && t.bl_tree[et[e] * 2 + 1] === 0; e--);
          t.opt_len += (e + 1) * 3 + 5 + 5 + 4;
          return e;
        })(t);
        s = t.opt_len + 3 + 7 >>> 3;
        o = t.static_len + 3 + 7 >>> 3;
        if (o <= s) {
          s = o;
        }
      } else {
        s = o = n + 5;
      }
      if (n + 4 <= s && e !== -1) {
        At(t, e, n, i);
      } else if (t.strategy === 4 || o === s) {
        Dt(t, 2 + (i ? 1 : 0), 3);
        Ft(t, nt, it);
      } else {
        Dt(t, 4 + (i ? 1 : 0), 3);
        ((t, e, n, i) => {
          let s;
          Dt(t, e - 257, 5);
          Dt(t, n - 1, 5);
          Dt(t, i - 4, 4);
          s = 0;
          for (; s < i; s++) {
            Dt(t, t.bl_tree[et[s] * 2 + 1], 3);
          }
          xt(t, t.dyn_ltree, e - 1);
          xt(t, t.dyn_dtree, n - 1);
        })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, r + 1);
        Ft(t, t.dyn_ltree, t.dyn_dtree);
      }
      wt(t);
      if (i) {
        yt(t);
      }
    };
    var St = {
      C: t => {
        if (!kt) {
          (() => {
            let t;
            let e;
            let n;
            let i;
            let s;
            const o = new Array(16);
            n = 0;
            i = 0;
            for (; i < 28; i++) {
              rt[i] = n;
              t = 0;
              for (; t < 1 << X[i]; t++) {
                ot[n++] = i;
              }
            }
            ot[n - 1] = i;
            s = 0;
            i = 0;
            for (; i < 16; i++) {
              at[i] = s;
              t = 0;
              for (; t < 1 << q[i]; t++) {
                st[s++] = i;
              }
            }
            for (s >>= 7; i < J; i++) {
              at[i] = s << 7;
              t = 0;
              for (; t < 1 << q[i] - 7; t++) {
                st[256 + s++] = i;
              }
            }
            for (e = 0; e <= K; e++) {
              o[e] = 0;
            }
            for (t = 0; t <= 143;) {
              nt[t * 2 + 1] = 8;
              t++;
              o[8]++;
            }
            while (t <= 255) {
              nt[t * 2 + 1] = 9;
              t++;
              o[9]++;
            }
            while (t <= 279) {
              nt[t * 2 + 1] = 7;
              t++;
              o[7]++;
            }
            while (t <= 287) {
              nt[t * 2 + 1] = 8;
              t++;
              o[8]++;
            }
            mt(nt, 287, o);
            t = 0;
            for (; t < J; t++) {
              it[t * 2 + 1] = 5;
              it[t * 2] = gt(t, 5);
            }
            ct = new ut(nt, X, 257, Y, K);
            lt = new ut(it, q, 0, J, K);
            ht = new ut(new Array(0), tt, 0, 19, 7);
          })();
          kt = true;
        }
        t.l_desc = new dt(t.dyn_ltree, ct);
        t.d_desc = new dt(t.dyn_dtree, lt);
        t.bl_desc = new dt(t.bl_tree, ht);
        t.bi_buf = 0;
        t.bi_valid = 0;
        wt(t);
      },
      F: At,
      _: It,
      k: (t, e, n) => {
        t.pending_buf[t.sym_buf + t.sym_next++] = e;
        t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8;
        t.pending_buf[t.sym_buf + t.sym_next++] = n;
        if (e === 0) {
          t.dyn_ltree[n * 2]++;
        } else {
          t.matches++;
          e--;
          t.dyn_ltree[(ot[n] + W + 1) * 2]++;
          t.dyn_dtree[pt(e) * 2]++;
        }
        return t.sym_next === t.sym_end;
      },
      A: t => {
        Dt(t, 2, 3);
        vt(t, 256, nt);
        (t => {
          if (t.bi_valid === 16) {
            ft(t, t.bi_buf);
            t.bi_buf = 0;
            t.bi_valid = 0;
          } else if (t.bi_valid >= 8) {
            t.pending_buf[t.pending++] = t.bi_buf & 255;
            t.bi_buf >>= 8;
            t.bi_valid -= 8;
          }
        })(t);
      }
    };
    var Bt = (t, e, n, i) => {
      let s = t & 65535;
      let o = t >>> 16 & 65535;
      let r = 0;
      while (n !== 0) {
        r = n > 2000 ? 2000 : n;
        n -= r;
        do {
          s = s + e[i++] | 0;
          o = o + s | 0;
        } while (--r);
        s %= 65521;
        o %= 65521;
      }
      return s | o << 16;
    };
    const jt = new Uint32Array((() => {
      let t;
      let e = [];
      for (var n = 0; n < 256; n++) {
        t = n;
        for (var i = 0; i < 8; i++) {
          t = t & 1 ? t >>> 1 ^ -306674912 : t >>> 1;
        }
        e[n] = t;
      }
      return e;
    })());
    var $t = (t, e, n, i) => {
      const s = jt;
      const o = i + n;
      t ^= -1;
      for (let n = i; n < o; n++) {
        t = t >>> 8 ^ s[(t ^ e[n]) & 255];
      }
      return t ^ -1;
    };
    var Tt = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
    var Pt = {
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
      Z_DEFLATED: 8
    };
    const {
      C: Mt,
      F: Lt,
      _: Rt,
      k: Ot,
      A: Ut
    } = St;
    const {
      Z_NO_FLUSH: Vt,
      Z_PARTIAL_FLUSH: Ht,
      Z_FULL_FLUSH: Nt,
      Z_FINISH: Gt,
      Z_BLOCK: zt,
      Z_OK: Zt,
      Z_STREAM_END: Qt,
      Z_STREAM_ERROR: Wt,
      Z_DATA_ERROR: Yt,
      Z_BUF_ERROR: Jt,
      Z_DEFAULT_COMPRESSION: Kt,
      Z_FILTERED: Xt,
      Z_HUFFMAN_ONLY: qt,
      Z_RLE: te,
      Z_FIXED: ee,
      Z_DEFAULT_STRATEGY: ne,
      Z_UNKNOWN: ie,
      Z_DEFLATED: se
    } = Pt;
    const oe = 258;
    const re = 262;
    const ae = 42;
    const ue = 113;
    const ce = 666;
    const le = (t, e) => {
      t.msg = Tt[e];
      return e;
    };
    const he = t => t * 2 - (t > 4 ? 9 : 0);
    const de = t => {
      let e = t.length;
      while (--e >= 0) {
        t[e] = 0;
      }
    };
    const pe = t => {
      let e;
      let n;
      let i;
      let s = t.w_size;
      e = t.hash_size;
      i = e;
      do {
        n = t.head[--i];
        t.head[i] = n >= s ? n - s : 0;
      } while (--e);
      e = s;
      i = e;
      do {
        n = t.prev[--i];
        t.prev[i] = n >= s ? n - s : 0;
      } while (--e);
    };
    let fe = (t, e, n) => (e << t.hash_shift ^ n) & t.hash_mask;
    const De = t => {
      const e = t.state;
      let n = e.pending;
      if (n > t.avail_out) {
        n = t.avail_out;
      }
      if (n !== 0) {
        t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + n), t.next_out);
        t.next_out += n;
        e.pending_out += n;
        t.total_out += n;
        t.avail_out -= n;
        e.pending -= n;
        if (e.pending === 0) {
          e.pending_out = 0;
        }
      }
    };
    const ve = (t, e) => {
      Rt(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e);
      t.block_start = t.strstart;
      De(t.strm);
    };
    const ge = (t, e) => {
      t.pending_buf[t.pending++] = e;
    };
    const me = (t, e) => {
      t.pending_buf[t.pending++] = e >>> 8 & 255;
      t.pending_buf[t.pending++] = e & 255;
    };
    const we = (t, e, n, i) => {
      let s = t.avail_in;
      if (s > i) {
        s = i;
      }
      if (s === 0) {
        return 0;
      } else {
        t.avail_in -= s;
        e.set(t.input.subarray(t.next_in, t.next_in + s), n);
        if (t.state.wrap === 1) {
          t.adler = Bt(t.adler, e, s, n);
        } else if (t.state.wrap === 2) {
          t.adler = $t(t.adler, e, s, n);
        }
        t.next_in += s;
        t.total_in += s;
        return s;
      }
    };
    const ye = (t, e) => {
      let n;
      let i;
      let s = t.max_chain_length;
      let o = t.strstart;
      let r = t.prev_length;
      let a = t.nice_match;
      const u = t.strstart > t.w_size - re ? t.strstart - (t.w_size - re) : 0;
      const c = t.window;
      const l = t.w_mask;
      const h = t.prev;
      const d = t.strstart + oe;
      let p = c[o + r - 1];
      let f = c[o + r];
      if (t.prev_length >= t.good_match) {
        s >>= 2;
      }
      if (a > t.lookahead) {
        a = t.lookahead;
      }
      do {
        n = e;
        if (c[n + r] === f && c[n + r - 1] === p && c[n] === c[o] && c[++n] === c[o + 1]) {
          o += 2;
          n++;
          do {} while (c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && o < d);
          i = oe - (d - o);
          o = d - oe;
          if (i > r) {
            t.match_start = e;
            r = i;
            if (i >= a) {
              break;
            }
            p = c[o + r - 1];
            f = c[o + r];
          }
        }
      } while ((e = h[e & l]) > u && --s !== 0);
      if (r <= t.lookahead) {
        return r;
      } else {
        return t.lookahead;
      }
    };
    const be = t => {
      const e = t.w_size;
      let n;
      let i;
      let s;
      do {
        i = t.window_size - t.lookahead - t.strstart;
        if (t.strstart >= e + (e - re)) {
          t.window.set(t.window.subarray(e, e + e - i), 0);
          t.match_start -= e;
          t.strstart -= e;
          t.block_start -= e;
          if (t.insert > t.strstart) {
            t.insert = t.strstart;
          }
          pe(t);
          i += e;
        }
        if (t.strm.avail_in === 0) {
          break;
        }
        n = we(t.strm, t.window, t.strstart + t.lookahead, i);
        t.lookahead += n;
        if (t.lookahead + t.insert >= 3) {
          s = t.strstart - t.insert;
          t.ins_h = t.window[s];
          t.ins_h = fe(t, t.ins_h, t.window[s + 1]);
          while (t.insert && (t.ins_h = fe(t, t.ins_h, t.window[s + 3 - 1]), t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < 3)));
        }
      } while (t.lookahead < re && t.strm.avail_in !== 0);
    };
    const Ce = (t, e) => {
      let n;
      let i;
      let s;
      let o = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5;
      let r = 0;
      let a = t.strm.avail_in;
      do {
        n = 65535;
        s = t.bi_valid + 42 >> 3;
        if (t.strm.avail_out < s) {
          break;
        }
        s = t.strm.avail_out - s;
        i = t.strstart - t.block_start;
        if (n > i + t.strm.avail_in) {
          n = i + t.strm.avail_in;
        }
        if (n > s) {
          n = s;
        }
        if (n < o && (n === 0 && e !== Gt || e === Vt || n !== i + t.strm.avail_in)) {
          break;
        }
        r = e === Gt && n === i + t.strm.avail_in ? 1 : 0;
        Lt(t, 0, 0, r);
        t.pending_buf[t.pending - 4] = n;
        t.pending_buf[t.pending - 3] = n >> 8;
        t.pending_buf[t.pending - 2] = ~n;
        t.pending_buf[t.pending - 1] = ~n >> 8;
        De(t.strm);
        if (i) {
          if (i > n) {
            i = n;
          }
          t.strm.output.set(t.window.subarray(t.block_start, t.block_start + i), t.strm.next_out);
          t.strm.next_out += i;
          t.strm.avail_out -= i;
          t.strm.total_out += i;
          t.block_start += i;
          n -= i;
        }
        if (n) {
          we(t.strm, t.strm.output, t.strm.next_out, n);
          t.strm.next_out += n;
          t.strm.avail_out -= n;
          t.strm.total_out += n;
        }
      } while (r === 0);
      a -= t.strm.avail_in;
      if (a) {
        if (a >= t.w_size) {
          t.matches = 2;
          t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0);
          t.strstart = t.w_size;
          t.insert = t.strstart;
        } else {
          if (t.window_size - t.strstart <= a) {
            t.strstart -= t.w_size;
            t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0);
            if (t.matches < 2) {
              t.matches++;
            }
            if (t.insert > t.strstart) {
              t.insert = t.strstart;
            }
          }
          t.window.set(t.strm.input.subarray(t.strm.next_in - a, t.strm.next_in), t.strstart);
          t.strstart += a;
          t.insert += a > t.w_size - t.insert ? t.w_size - t.insert : a;
        }
        t.block_start = t.strstart;
      }
      if (t.high_water < t.strstart) {
        t.high_water = t.strstart;
      }
      if (r) {
        return 4;
      } else if (e !== Vt && e !== Gt && t.strm.avail_in === 0 && t.strstart === t.block_start) {
        return 2;
      } else {
        s = t.window_size - t.strstart;
        if (t.strm.avail_in > s && t.block_start >= t.w_size) {
          t.block_start -= t.w_size;
          t.strstart -= t.w_size;
          t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0);
          if (t.matches < 2) {
            t.matches++;
          }
          s += t.w_size;
          if (t.insert > t.strstart) {
            t.insert = t.strstart;
          }
        }
        if (s > t.strm.avail_in) {
          s = t.strm.avail_in;
        }
        if (s) {
          we(t.strm, t.window, t.strstart, s);
          t.strstart += s;
          t.insert += s > t.w_size - t.insert ? t.w_size - t.insert : s;
        }
        if (t.high_water < t.strstart) {
          t.high_water = t.strstart;
        }
        s = t.bi_valid + 42 >> 3;
        s = t.pending_buf_size - s > 65535 ? 65535 : t.pending_buf_size - s;
        o = s > t.w_size ? t.w_size : s;
        i = t.strstart - t.block_start;
        if (i >= o || (i || e === Gt) && e !== Vt && t.strm.avail_in === 0 && i <= s) {
          n = i > s ? s : i;
          r = e === Gt && t.strm.avail_in === 0 && n === i ? 1 : 0;
          Lt(t, t.block_start, n, r);
          t.block_start += n;
          De(t.strm);
        }
        if (r) {
          return 3;
        } else {
          return 1;
        }
      }
    };
    const Fe = (t, e) => {
      let n;
      let i;
      while (true) {
        if (t.lookahead < re) {
          be(t);
          if (t.lookahead < re && e === Vt) {
            return 1;
          }
          if (t.lookahead === 0) {
            break;
          }
        }
        n = 0;
        if (t.lookahead >= 3) {
          t.ins_h = fe(t, t.ins_h, t.window[t.strstart + 3 - 1]);
          n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
          t.head[t.ins_h] = t.strstart;
        }
        if (n !== 0 && t.strstart - n <= t.w_size - re) {
          t.match_length = ye(t, n);
        }
        if (t.match_length >= 3) {
          i = Ot(t, t.strstart - t.match_start, t.match_length - 3);
          t.lookahead -= t.match_length;
          if (t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
            t.match_length--;
            do {
              t.strstart++;
              t.ins_h = fe(t, t.ins_h, t.window[t.strstart + 3 - 1]);
              n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
              t.head[t.ins_h] = t.strstart;
            } while (--t.match_length !== 0);
            t.strstart++;
          } else {
            t.strstart += t.match_length;
            t.match_length = 0;
            t.ins_h = t.window[t.strstart];
            t.ins_h = fe(t, t.ins_h, t.window[t.strstart + 1]);
          }
        } else {
          i = Ot(t, 0, t.window[t.strstart]);
          t.lookahead--;
          t.strstart++;
        }
        if (i && (ve(t, false), t.strm.avail_out === 0)) {
          return 1;
        }
      }
      t.insert = t.strstart < 2 ? t.strstart : 2;
      if (e === Gt) {
        ve(t, true);
        if (t.strm.avail_out === 0) {
          return 3;
        } else {
          return 4;
        }
      } else if (t.sym_next && (ve(t, false), t.strm.avail_out === 0)) {
        return 1;
      } else {
        return 2;
      }
    };
    const _e = (t, e) => {
      let n;
      let i;
      let s;
      while (true) {
        if (t.lookahead < re) {
          be(t);
          if (t.lookahead < re && e === Vt) {
            return 1;
          }
          if (t.lookahead === 0) {
            break;
          }
        }
        n = 0;
        if (t.lookahead >= 3) {
          t.ins_h = fe(t, t.ins_h, t.window[t.strstart + 3 - 1]);
          n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
          t.head[t.ins_h] = t.strstart;
        }
        t.prev_length = t.match_length;
        t.prev_match = t.match_start;
        t.match_length = 2;
        if (n !== 0 && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - re) {
          t.match_length = ye(t, n);
          if (t.match_length <= 5 && (t.strategy === Xt || t.match_length === 3 && t.strstart - t.match_start > 4096)) {
            t.match_length = 2;
          }
        }
        if (t.prev_length >= 3 && t.match_length <= t.prev_length) {
          s = t.strstart + t.lookahead - 3;
          i = Ot(t, t.strstart - 1 - t.prev_match, t.prev_length - 3);
          t.lookahead -= t.prev_length - 1;
          t.prev_length -= 2;
          do {
            if (++t.strstart <= s) {
              t.ins_h = fe(t, t.ins_h, t.window[t.strstart + 3 - 1]);
              n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
              t.head[t.ins_h] = t.strstart;
            }
          } while (--t.prev_length !== 0);
          t.match_available = 0;
          t.match_length = 2;
          t.strstart++;
          if (i && (ve(t, false), t.strm.avail_out === 0)) {
            return 1;
          }
        } else if (t.match_available) {
          i = Ot(t, 0, t.window[t.strstart - 1]);
          if (i) {
            ve(t, false);
          }
          t.strstart++;
          t.lookahead--;
          if (t.strm.avail_out === 0) {
            return 1;
          }
        } else {
          t.match_available = 1;
          t.strstart++;
          t.lookahead--;
        }
      }
      if (t.match_available) {
        i = Ot(t, 0, t.window[t.strstart - 1]);
        t.match_available = 0;
      }
      t.insert = t.strstart < 2 ? t.strstart : 2;
      if (e === Gt) {
        ve(t, true);
        if (t.strm.avail_out === 0) {
          return 3;
        } else {
          return 4;
        }
      } else if (t.sym_next && (ve(t, false), t.strm.avail_out === 0)) {
        return 1;
      } else {
        return 2;
      }
    };
    function Ee(t, e, n, i, s) {
      this.good_length = t;
      this.max_lazy = e;
      this.nice_length = n;
      this.max_chain = i;
      this.func = s;
    }
    const xe = [new Ee(0, 0, 0, 0, Ce), new Ee(4, 4, 8, 4, Fe), new Ee(4, 5, 16, 8, Fe), new Ee(4, 6, 32, 32, Fe), new Ee(4, 4, 16, 16, _e), new Ee(8, 16, 32, 32, _e), new Ee(8, 16, 128, 128, _e), new Ee(8, 32, 128, 256, _e), new Ee(32, 128, 258, 1024, _e), new Ee(32, 258, 258, 4096, _e)];
    function ke() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = se;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new Uint16Array(1146);
      this.dyn_dtree = new Uint16Array(122);
      this.bl_tree = new Uint16Array(78);
      de(this.dyn_ltree);
      de(this.dyn_dtree);
      de(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(16);
      this.heap = new Uint16Array(573);
      de(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(573);
      de(this.depth);
      this.sym_buf = 0;
      this.lit_bufsize = 0;
      this.sym_next = 0;
      this.sym_end = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    const Ae = t => {
      if (!t) {
        return 1;
      }
      const e = t.state;
      if (!e || e.strm !== t || e.status !== ae && e.status !== 57 && e.status !== 69 && e.status !== 73 && e.status !== 91 && e.status !== 103 && e.status !== ue && e.status !== ce) {
        return 1;
      } else {
        return 0;
      }
    };
    const Ie = t => {
      if (Ae(t)) {
        return le(t, Wt);
      }
      t.total_in = t.total_out = 0;
      t.data_type = ie;
      const e = t.state;
      e.pending = 0;
      e.pending_out = 0;
      if (e.wrap < 0) {
        e.wrap = -e.wrap;
      }
      e.status = e.wrap === 2 ? 57 : e.wrap ? ae : ue;
      t.adler = e.wrap === 2 ? 0 : 1;
      e.last_flush = -2;
      Mt(e);
      return Zt;
    };
    const Se = t => {
      const e = Ie(t);
      var n;
      if (e === Zt) {
        (n = t.state).window_size = n.w_size * 2;
        de(n.head);
        n.max_lazy_match = xe[n.level].max_lazy;
        n.good_match = xe[n.level].good_length;
        n.nice_match = xe[n.level].nice_length;
        n.max_chain_length = xe[n.level].max_chain;
        n.strstart = 0;
        n.block_start = 0;
        n.lookahead = 0;
        n.insert = 0;
        n.match_length = n.prev_length = 2;
        n.match_available = 0;
        n.ins_h = 0;
      }
      return e;
    };
    const Be = (t, e, n, i, s, o) => {
      if (!t) {
        return Wt;
      }
      let r = 1;
      if (e === Kt) {
        e = 6;
      }
      if (i < 0) {
        r = 0;
        i = -i;
      } else if (i > 15) {
        r = 2;
        i -= 16;
      }
      if (s < 1 || s > 9 || n !== se || i < 8 || i > 15 || e < 0 || e > 9 || o < 0 || o > ee || i === 8 && r !== 1) {
        return le(t, Wt);
      }
      if (i === 8) {
        i = 9;
      }
      const a = new ke();
      t.state = a;
      a.strm = t;
      a.status = ae;
      a.wrap = r;
      a.gzhead = null;
      a.w_bits = i;
      a.w_size = 1 << a.w_bits;
      a.w_mask = a.w_size - 1;
      a.hash_bits = s + 7;
      a.hash_size = 1 << a.hash_bits;
      a.hash_mask = a.hash_size - 1;
      a.hash_shift = ~~((a.hash_bits + 3 - 1) / 3);
      a.window = new Uint8Array(a.w_size * 2);
      a.head = new Uint16Array(a.hash_size);
      a.prev = new Uint16Array(a.w_size);
      a.lit_bufsize = 1 << s + 6;
      a.pending_buf_size = a.lit_bufsize * 4;
      a.pending_buf = new Uint8Array(a.pending_buf_size);
      a.sym_buf = a.lit_bufsize;
      a.sym_end = (a.lit_bufsize - 1) * 3;
      a.level = e;
      a.strategy = o;
      a.method = n;
      return Se(t);
    };
    var je = {
      deflateInit: (t, e) => Be(t, e, se, 15, 8, ne),
      deflateInit2: Be,
      deflateReset: Se,
      deflateResetKeep: Ie,
      deflateSetHeader: (t, e) => Ae(t) || t.state.wrap !== 2 ? Wt : (t.state.gzhead = e, Zt),
      deflate: (t, e) => {
        if (Ae(t) || e > zt || e < 0) {
          if (t) {
            return le(t, Wt);
          } else {
            return Wt;
          }
        }
        const n = t.state;
        if (!t.output || t.avail_in !== 0 && !t.input || n.status === ce && e !== Gt) {
          return le(t, t.avail_out === 0 ? Jt : Wt);
        }
        const i = n.last_flush;
        n.last_flush = e;
        if (n.pending !== 0) {
          De(t);
          if (t.avail_out === 0) {
            n.last_flush = -1;
            return Zt;
          }
        } else if (t.avail_in === 0 && he(e) <= he(i) && e !== Gt) {
          return le(t, Jt);
        }
        if (n.status === ce && t.avail_in !== 0) {
          return le(t, Jt);
        }
        if (n.status === ae && n.wrap === 0) {
          n.status = ue;
        }
        if (n.status === ae) {
          let e = se + (n.w_bits - 8 << 4) << 8;
          let i = -1;
          i = n.strategy >= qt || n.level < 2 ? 0 : n.level < 6 ? 1 : n.level === 6 ? 2 : 3;
          e |= i << 6;
          if (n.strstart !== 0) {
            e |= 32;
          }
          e += 31 - e % 31;
          me(n, e);
          if (n.strstart !== 0) {
            me(n, t.adler >>> 16);
            me(n, t.adler & 65535);
          }
          t.adler = 1;
          n.status = ue;
          De(t);
          if (n.pending !== 0) {
            n.last_flush = -1;
            return Zt;
          }
        }
        if (n.status === 57) {
          t.adler = 0;
          ge(n, 31);
          ge(n, 139);
          ge(n, 8);
          if (n.gzhead) {
            ge(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0));
            ge(n, n.gzhead.time & 255);
            ge(n, n.gzhead.time >> 8 & 255);
            ge(n, n.gzhead.time >> 16 & 255);
            ge(n, n.gzhead.time >> 24 & 255);
            ge(n, n.level === 9 ? 2 : n.strategy >= qt || n.level < 2 ? 4 : 0);
            ge(n, n.gzhead.os & 255);
            if (n.gzhead.extra && n.gzhead.extra.length) {
              ge(n, n.gzhead.extra.length & 255);
              ge(n, n.gzhead.extra.length >> 8 & 255);
            }
            if (n.gzhead.hcrc) {
              t.adler = $t(t.adler, n.pending_buf, n.pending, 0);
            }
            n.gzindex = 0;
            n.status = 69;
          } else {
            ge(n, 0);
            ge(n, 0);
            ge(n, 0);
            ge(n, 0);
            ge(n, 0);
            ge(n, n.level === 9 ? 2 : n.strategy >= qt || n.level < 2 ? 4 : 0);
            ge(n, 3);
            n.status = ue;
            De(t);
            if (n.pending !== 0) {
              n.last_flush = -1;
              return Zt;
            }
          }
        }
        if (n.status === 69) {
          if (n.gzhead.extra) {
            let e = n.pending;
            let i = (n.gzhead.extra.length & 65535) - n.gzindex;
            while (n.pending + i > n.pending_buf_size) {
              let s = n.pending_buf_size - n.pending;
              n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + s), n.pending);
              n.pending = n.pending_buf_size;
              if (n.gzhead.hcrc && n.pending > e) {
                t.adler = $t(t.adler, n.pending_buf, n.pending - e, e);
              }
              n.gzindex += s;
              De(t);
              if (n.pending !== 0) {
                n.last_flush = -1;
                return Zt;
              }
              e = 0;
              i -= s;
            }
            let s = new Uint8Array(n.gzhead.extra);
            n.pending_buf.set(s.subarray(n.gzindex, n.gzindex + i), n.pending);
            n.pending += i;
            if (n.gzhead.hcrc && n.pending > e) {
              t.adler = $t(t.adler, n.pending_buf, n.pending - e, e);
            }
            n.gzindex = 0;
          }
          n.status = 73;
        }
        if (n.status === 73) {
          if (n.gzhead.name) {
            let e;
            let i = n.pending;
            do {
              if (n.pending === n.pending_buf_size) {
                if (n.gzhead.hcrc && n.pending > i) {
                  t.adler = $t(t.adler, n.pending_buf, n.pending - i, i);
                }
                De(t);
                if (n.pending !== 0) {
                  n.last_flush = -1;
                  return Zt;
                }
                i = 0;
              }
              e = n.gzindex < n.gzhead.name.length ? n.gzhead.name.charCodeAt(n.gzindex++) & 255 : 0;
              ge(n, e);
            } while (e !== 0);
            if (n.gzhead.hcrc && n.pending > i) {
              t.adler = $t(t.adler, n.pending_buf, n.pending - i, i);
            }
            n.gzindex = 0;
          }
          n.status = 91;
        }
        if (n.status === 91) {
          if (n.gzhead.comment) {
            let e;
            let i = n.pending;
            do {
              if (n.pending === n.pending_buf_size) {
                if (n.gzhead.hcrc && n.pending > i) {
                  t.adler = $t(t.adler, n.pending_buf, n.pending - i, i);
                }
                De(t);
                if (n.pending !== 0) {
                  n.last_flush = -1;
                  return Zt;
                }
                i = 0;
              }
              e = n.gzindex < n.gzhead.comment.length ? n.gzhead.comment.charCodeAt(n.gzindex++) & 255 : 0;
              ge(n, e);
            } while (e !== 0);
            if (n.gzhead.hcrc && n.pending > i) {
              t.adler = $t(t.adler, n.pending_buf, n.pending - i, i);
            }
          }
          n.status = 103;
        }
        if (n.status === 103) {
          if (n.gzhead.hcrc) {
            if (n.pending + 2 > n.pending_buf_size && (De(t), n.pending !== 0)) {
              n.last_flush = -1;
              return Zt;
            }
            ge(n, t.adler & 255);
            ge(n, t.adler >> 8 & 255);
            t.adler = 0;
          }
          n.status = ue;
          De(t);
          if (n.pending !== 0) {
            n.last_flush = -1;
            return Zt;
          }
        }
        if (t.avail_in !== 0 || n.lookahead !== 0 || e !== Vt && n.status !== ce) {
          let i = n.level === 0 ? Ce(n, e) : n.strategy === qt ? ((t, e) => {
            let n;
            while (true) {
              if (t.lookahead === 0 && (be(t), t.lookahead === 0)) {
                if (e === Vt) {
                  return 1;
                }
                break;
              }
              t.match_length = 0;
              n = Ot(t, 0, t.window[t.strstart]);
              t.lookahead--;
              t.strstart++;
              if (n && (ve(t, false), t.strm.avail_out === 0)) {
                return 1;
              }
            }
            t.insert = 0;
            if (e === Gt) {
              ve(t, true);
              if (t.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (t.sym_next && (ve(t, false), t.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          })(n, e) : n.strategy === te ? ((t, e) => {
            let n;
            let i;
            let s;
            let o;
            const r = t.window;
            while (true) {
              if (t.lookahead <= oe) {
                be(t);
                if (t.lookahead <= oe && e === Vt) {
                  return 1;
                }
                if (t.lookahead === 0) {
                  break;
                }
              }
              t.match_length = 0;
              if (t.lookahead >= 3 && t.strstart > 0 && (s = t.strstart - 1, i = r[s], i === r[++s] && i === r[++s] && i === r[++s])) {
                o = t.strstart + oe;
                do {} while (i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && s < o);
                t.match_length = oe - (o - s);
                if (t.match_length > t.lookahead) {
                  t.match_length = t.lookahead;
                }
              }
              if (t.match_length >= 3) {
                n = Ot(t, 1, t.match_length - 3);
                t.lookahead -= t.match_length;
                t.strstart += t.match_length;
                t.match_length = 0;
              } else {
                n = Ot(t, 0, t.window[t.strstart]);
                t.lookahead--;
                t.strstart++;
              }
              if (n && (ve(t, false), t.strm.avail_out === 0)) {
                return 1;
              }
            }
            t.insert = 0;
            if (e === Gt) {
              ve(t, true);
              if (t.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (t.sym_next && (ve(t, false), t.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          })(n, e) : xe[n.level].func(n, e);
          if (i === 3 || i === 4) {
            n.status = ce;
          }
          if (i === 1 || i === 3) {
            if (t.avail_out === 0) {
              n.last_flush = -1;
            }
            return Zt;
          }
          if (i === 2 && (e === Ht ? Ut(n) : e !== zt && (Lt(n, 0, 0, false), e === Nt && (de(n.head), n.lookahead === 0 && (n.strstart = 0, n.block_start = 0, n.insert = 0))), De(t), t.avail_out === 0)) {
            n.last_flush = -1;
            return Zt;
          }
        }
        if (e !== Gt) {
          return Zt;
        } else if (n.wrap <= 0) {
          return Qt;
        } else {
          if (n.wrap === 2) {
            ge(n, t.adler & 255);
            ge(n, t.adler >> 8 & 255);
            ge(n, t.adler >> 16 & 255);
            ge(n, t.adler >> 24 & 255);
            ge(n, t.total_in & 255);
            ge(n, t.total_in >> 8 & 255);
            ge(n, t.total_in >> 16 & 255);
            ge(n, t.total_in >> 24 & 255);
          } else {
            me(n, t.adler >>> 16);
            me(n, t.adler & 65535);
          }
          De(t);
          if (n.wrap > 0) {
            n.wrap = -n.wrap;
          }
          if (n.pending !== 0) {
            return Zt;
          } else {
            return Qt;
          }
        }
      },
      deflateEnd: t => {
        if (Ae(t)) {
          return Wt;
        }
        const e = t.state.status;
        t.state = null;
        if (e === ue) {
          return le(t, Yt);
        } else {
          return Zt;
        }
      },
      deflateSetDictionary: (t, e) => {
        let n = e.length;
        if (Ae(t)) {
          return Wt;
        }
        const i = t.state;
        const s = i.wrap;
        if (s === 2 || s === 1 && i.status !== ae || i.lookahead) {
          return Wt;
        }
        if (s === 1) {
          t.adler = Bt(t.adler, e, n, 0);
        }
        i.wrap = 0;
        if (n >= i.w_size) {
          if (s === 0) {
            de(i.head);
            i.strstart = 0;
            i.block_start = 0;
            i.insert = 0;
          }
          let t = new Uint8Array(i.w_size);
          t.set(e.subarray(n - i.w_size, n), 0);
          e = t;
          n = i.w_size;
        }
        const o = t.avail_in;
        const r = t.next_in;
        const a = t.input;
        t.avail_in = n;
        t.next_in = 0;
        t.input = e;
        be(i);
        while (i.lookahead >= 3) {
          let t = i.strstart;
          let e = i.lookahead - 2;
          do {
            i.ins_h = fe(i, i.ins_h, i.window[t + 3 - 1]);
            i.prev[t & i.w_mask] = i.head[i.ins_h];
            i.head[i.ins_h] = t;
            t++;
          } while (--e);
          i.strstart = t;
          i.lookahead = 2;
          be(i);
        }
        i.strstart += i.lookahead;
        i.block_start = i.strstart;
        i.insert = i.lookahead;
        i.lookahead = 0;
        i.match_length = i.prev_length = 2;
        i.match_available = 0;
        t.next_in = r;
        t.input = a;
        t.avail_in = o;
        i.wrap = s;
        return Zt;
      },
      deflateInfo: "pako deflate (from Nodeca project)"
    };
    const $e = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    function Te(t) {
      const e = Array.prototype.slice.call(arguments, 1);
      while (e.length) {
        const n = e.shift();
        if (n) {
          if (typeof n != "object") {
            throw new TypeError(n + "must be non-object");
          }
          for (const e in n) {
            if ($e(n, e)) {
              t[e] = n[e];
            }
          }
        }
      }
      return t;
    }
    var Pe = t => {
      let e = 0;
      for (let n = 0, i = t.length; n < i; n++) {
        e += t[n].length;
      }
      const n = new Uint8Array(e);
      for (let e = 0, i = 0, s = t.length; e < s; e++) {
        let s = t[e];
        n.set(s, i);
        i += s.length;
      }
      return n;
    };
    let Me = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
      Me = false;
    }
    const Le = new Uint8Array(256);
    for (let t = 0; t < 256; t++) {
      Le[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
    }
    Le[254] = Le[254] = 1;
    var Re = t => {
      if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(t);
      }
      let e;
      let n;
      let i;
      let s;
      let o;
      let r = t.length;
      let a = 0;
      for (s = 0; s < r; s++) {
        n = t.charCodeAt(s);
        if ((n & 64512) == 55296 && s + 1 < r) {
          i = t.charCodeAt(s + 1);
          if ((i & 64512) == 56320) {
            n = 65536 + (n - 55296 << 10) + (i - 56320);
            s++;
          }
        }
        a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
      }
      e = new Uint8Array(a);
      o = 0;
      s = 0;
      for (; o < a; s++) {
        n = t.charCodeAt(s);
        if ((n & 64512) == 55296 && s + 1 < r) {
          i = t.charCodeAt(s + 1);
          if ((i & 64512) == 56320) {
            n = 65536 + (n - 55296 << 10) + (i - 56320);
            s++;
          }
        }
        if (n < 128) {
          e[o++] = n;
        } else if (n < 2048) {
          e[o++] = n >>> 6 | 192;
          e[o++] = n & 63 | 128;
        } else if (n < 65536) {
          e[o++] = n >>> 12 | 224;
          e[o++] = n >>> 6 & 63 | 128;
          e[o++] = n & 63 | 128;
        } else {
          e[o++] = n >>> 18 | 240;
          e[o++] = n >>> 12 & 63 | 128;
          e[o++] = n >>> 6 & 63 | 128;
          e[o++] = n & 63 | 128;
        }
      }
      return e;
    };
    var Oe = (t, e) => {
      const n = e || t.length;
      if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(t.subarray(0, e));
      }
      let i;
      let s;
      const o = new Array(n * 2);
      s = 0;
      i = 0;
      while (i < n) {
        let e = t[i++];
        if (e < 128) {
          o[s++] = e;
          continue;
        }
        let r = Le[e];
        if (r > 4) {
          o[s++] = 65533;
          i += r - 1;
        } else {
          for (e &= r === 2 ? 31 : r === 3 ? 15 : 7; r > 1 && i < n;) {
            e = e << 6 | t[i++] & 63;
            r--;
          }
          if (r > 1) {
            o[s++] = 65533;
          } else if (e < 65536) {
            o[s++] = e;
          } else {
            e -= 65536;
            o[s++] = e >> 10 & 1023 | 55296;
            o[s++] = e & 1023 | 56320;
          }
        }
      }
      return ((t, e) => {
        if (e < 65534 && t.subarray && Me) {
          return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
        }
        let n = "";
        for (let i = 0; i < e; i++) {
          n += String.fromCharCode(t[i]);
        }
        return n;
      })(o, s);
    };
    var Ue = (t, e) => {
      if ((e = e || t.length) > t.length) {
        e = t.length;
      }
      let n = e - 1;
      while (n >= 0 && (t[n] & 192) == 128) {
        n--;
      }
      if (n < 0 || n === 0) {
        return e;
      } else if (n + Le[t[n]] > e) {
        return n;
      } else {
        return e;
      }
    };
    function Ve() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    const He = Object.prototype.toString;
    const {
      Z_NO_FLUSH: Ne,
      Z_SYNC_FLUSH: Ge,
      Z_FULL_FLUSH: ze,
      Z_FINISH: Ze,
      Z_OK: Qe,
      Z_STREAM_END: We,
      Z_DEFAULT_COMPRESSION: Ye,
      Z_DEFAULT_STRATEGY: Je,
      Z_DEFLATED: Ke
    } = Pt;
    function Xe(t) {
      this.options = Te({
        level: Ye,
        method: Ke,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Je
      }, t || {});
      let e = this.options;
      if (e.raw && e.windowBits > 0) {
        e.windowBits = -e.windowBits;
      } else if (e.gzip && e.windowBits > 0 && e.windowBits < 16) {
        e.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new Ve();
      this.strm.avail_out = 0;
      let n = je.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
      if (n !== Qe) {
        throw new Error(Tt[n]);
      }
      if (e.header) {
        je.deflateSetHeader(this.strm, e.header);
      }
      if (e.dictionary) {
        let t;
        t = typeof e.dictionary == "string" ? Re(e.dictionary) : He.call(e.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e.dictionary) : e.dictionary;
        n = je.deflateSetDictionary(this.strm, t);
        if (n !== Qe) {
          throw new Error(Tt[n]);
        }
        this.I = true;
      }
    }
    function qe(t, e) {
      const n = new Xe(e);
      n.push(t, true);
      if (n.err) {
        throw n.msg || Tt[n.err];
      }
      return n.result;
    }
    Xe.prototype.push = function (t, e) {
      const n = this.strm;
      const i = this.options.chunkSize;
      let s;
      let o;
      if (this.ended) {
        return false;
      }
      o = e === ~~e ? e : e === true ? Ze : Ne;
      if (typeof t == "string") {
        n.input = Re(t);
      } else if (He.call(t) === "[object ArrayBuffer]") {
        n.input = new Uint8Array(t);
      } else {
        n.input = t;
      }
      n.next_in = 0;
      n.avail_in = n.input.length;
      while (true) {
        if (n.avail_out === 0) {
          n.output = new Uint8Array(i);
          n.next_out = 0;
          n.avail_out = i;
        }
        if ((o === Ge || o === ze) && n.avail_out <= 6) {
          this.onData(n.output.subarray(0, n.next_out));
          n.avail_out = 0;
        } else {
          s = je.deflate(n, o);
          if (s === We) {
            if (n.next_out > 0) {
              this.onData(n.output.subarray(0, n.next_out));
            }
            s = je.deflateEnd(this.strm);
            this.onEnd(s);
            this.ended = true;
            return s === Qe;
          }
          if (n.avail_out !== 0) {
            if (o > 0 && n.next_out > 0) {
              this.onData(n.output.subarray(0, n.next_out));
              n.avail_out = 0;
            } else if (n.avail_in === 0) {
              break;
            }
          } else {
            this.onData(n.output);
          }
        }
      }
      return true;
    };
    Xe.prototype.onData = function (t) {
      this.chunks.push(t);
    };
    Xe.prototype.onEnd = function (t) {
      if (t === Qe) {
        this.result = Pe(this.chunks);
      }
      this.chunks = [];
      this.err = t;
      this.msg = this.strm.msg;
    };
    var tn = {
      Deflate: Xe,
      deflate: qe,
      deflateRaw: function (t, e) {
        (e = e || {}).raw = true;
        return qe(t, e);
      },
      gzip: function (t, e) {
        (e = e || {}).gzip = true;
        return qe(t, e);
      },
      constants: Pt
    };
    const en = 16209;
    function nn(t, e) {
      let n;
      let i;
      let s;
      let o;
      let r;
      let a;
      let u;
      let c;
      let l;
      let h;
      let d;
      let p;
      let f;
      let D;
      let v;
      let g;
      let m;
      let w;
      let y;
      let b;
      let C;
      let F;
      let _;
      let E;
      const x = t.state;
      n = t.next_in;
      _ = t.input;
      i = n + (t.avail_in - 5);
      s = t.next_out;
      E = t.output;
      o = s - (e - t.avail_out);
      r = s + (t.avail_out - 257);
      a = x.dmax;
      u = x.wsize;
      c = x.whave;
      l = x.wnext;
      h = x.window;
      d = x.hold;
      p = x.bits;
      f = x.lencode;
      D = x.distcode;
      v = (1 << x.lenbits) - 1;
      g = (1 << x.distbits) - 1;
      t: do {
        if (p < 15) {
          d += _[n++] << p;
          p += 8;
          d += _[n++] << p;
          p += 8;
        }
        m = f[d & v];
        e: while (true) {
          w = m >>> 24;
          d >>>= w;
          p -= w;
          w = m >>> 16 & 255;
          if (w === 0) {
            E[s++] = m & 65535;
          } else {
            if (!(w & 16)) {
              if (w & 64) {
                if (w & 32) {
                  x.mode = 16191;
                  break t;
                }
                t.msg = "invalid literal/length code";
                x.mode = en;
                break t;
              }
              m = f[(m & 65535) + (d & (1 << w) - 1)];
              continue e;
            }
            y = m & 65535;
            w &= 15;
            if (w) {
              if (p < w) {
                d += _[n++] << p;
                p += 8;
              }
              y += d & (1 << w) - 1;
              d >>>= w;
              p -= w;
            }
            if (p < 15) {
              d += _[n++] << p;
              p += 8;
              d += _[n++] << p;
              p += 8;
            }
            m = D[d & g];
            while (true) {
              w = m >>> 24;
              d >>>= w;
              p -= w;
              w = m >>> 16 & 255;
              if (w & 16) {
                b = m & 65535;
                w &= 15;
                if (p < w) {
                  d += _[n++] << p;
                  p += 8;
                  if (p < w) {
                    d += _[n++] << p;
                    p += 8;
                  }
                }
                b += d & (1 << w) - 1;
                if (b > a) {
                  t.msg = "invalid distance too far back";
                  x.mode = en;
                  break t;
                }
                d >>>= w;
                p -= w;
                w = s - o;
                if (b > w) {
                  w = b - w;
                  if (w > c && x.sane) {
                    t.msg = "invalid distance too far back";
                    x.mode = en;
                    break t;
                  }
                  C = 0;
                  F = h;
                  if (l === 0) {
                    C += u - w;
                    if (w < y) {
                      y -= w;
                      do {
                        E[s++] = h[C++];
                      } while (--w);
                      C = s - b;
                      F = E;
                    }
                  } else if (l < w) {
                    C += u + l - w;
                    w -= l;
                    if (w < y) {
                      y -= w;
                      do {
                        E[s++] = h[C++];
                      } while (--w);
                      C = 0;
                      if (l < y) {
                        w = l;
                        y -= w;
                        do {
                          E[s++] = h[C++];
                        } while (--w);
                        C = s - b;
                        F = E;
                      }
                    }
                  } else {
                    C += l - w;
                    if (w < y) {
                      y -= w;
                      do {
                        E[s++] = h[C++];
                      } while (--w);
                      C = s - b;
                      F = E;
                    }
                  }
                  while (y > 2) {
                    E[s++] = F[C++];
                    E[s++] = F[C++];
                    E[s++] = F[C++];
                    y -= 3;
                  }
                  if (y) {
                    E[s++] = F[C++];
                    if (y > 1) {
                      E[s++] = F[C++];
                    }
                  }
                } else {
                  C = s - b;
                  do {
                    E[s++] = E[C++];
                    E[s++] = E[C++];
                    E[s++] = E[C++];
                    y -= 3;
                  } while (y > 2);
                  if (y) {
                    E[s++] = E[C++];
                    if (y > 1) {
                      E[s++] = E[C++];
                    }
                  }
                }
                break;
              }
              if (w & 64) {
                t.msg = "invalid distance code";
                x.mode = en;
                break t;
              }
              m = D[(m & 65535) + (d & (1 << w) - 1)];
            }
          }
          break;
        }
      } while (n < i && s < r);
      y = p >> 3;
      n -= y;
      p -= y << 3;
      d &= (1 << p) - 1;
      t.next_in = n;
      t.next_out = s;
      t.avail_in = n < i ? i - n + 5 : 5 - (n - i);
      t.avail_out = s < r ? r - s + 257 : 257 - (s - r);
      x.hold = d;
      x.bits = p;
    }
    const sn = 15;
    const on = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const rn = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const an = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const un = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var cn = (t, e, n, i, s, o, r, a) => {
      const u = a.bits;
      let c;
      let l;
      let h;
      let d;
      let p;
      let f;
      let D = 0;
      let v = 0;
      let g = 0;
      let m = 0;
      let w = 0;
      let y = 0;
      let b = 0;
      let C = 0;
      let F = 0;
      let _ = 0;
      let E = null;
      const x = new Uint16Array(16);
      const k = new Uint16Array(16);
      let A;
      let I;
      let S;
      let B = null;
      for (D = 0; D <= sn; D++) {
        x[D] = 0;
      }
      for (v = 0; v < i; v++) {
        x[e[n + v]]++;
      }
      w = u;
      m = sn;
      for (; m >= 1 && x[m] === 0; m--);
      if (w > m) {
        w = m;
      }
      if (m === 0) {
        s[o++] = 20971520;
        s[o++] = 20971520;
        a.bits = 1;
        return 0;
      }
      for (g = 1; g < m && x[g] === 0; g++);
      if (w < g) {
        w = g;
      }
      C = 1;
      D = 1;
      for (; D <= sn; D++) {
        C <<= 1;
        C -= x[D];
        if (C < 0) {
          return -1;
        }
      }
      if (C > 0 && (t === 0 || m !== 1)) {
        return -1;
      }
      k[1] = 0;
      D = 1;
      for (; D < sn; D++) {
        k[D + 1] = k[D] + x[D];
      }
      for (v = 0; v < i; v++) {
        if (e[n + v] !== 0) {
          r[k[e[n + v]]++] = v;
        }
      }
      if (t === 0) {
        E = B = r;
        f = 20;
      } else if (t === 1) {
        E = on;
        B = rn;
        f = 257;
      } else {
        E = an;
        B = un;
        f = 0;
      }
      _ = 0;
      v = 0;
      D = g;
      p = o;
      y = w;
      b = 0;
      h = -1;
      F = 1 << w;
      d = F - 1;
      if (t === 1 && F > 852 || t === 2 && F > 592) {
        return 1;
      }
      while (true) {
        A = D - b;
        if (r[v] + 1 < f) {
          I = 0;
          S = r[v];
        } else if (r[v] >= f) {
          I = B[r[v] - f];
          S = E[r[v] - f];
        } else {
          I = 96;
          S = 0;
        }
        c = 1 << D - b;
        l = 1 << y;
        g = l;
        do {
          l -= c;
          s[p + (_ >> b) + l] = A << 24 | I << 16 | S;
        } while (l !== 0);
        for (c = 1 << D - 1; _ & c;) {
          c >>= 1;
        }
        if (c !== 0) {
          _ &= c - 1;
          _ += c;
        } else {
          _ = 0;
        }
        v++;
        if (--x[D] === 0) {
          if (D === m) {
            break;
          }
          D = e[n + r[v]];
        }
        if (D > w && (_ & d) !== h) {
          if (b === 0) {
            b = w;
          }
          p += g;
          y = D - b;
          C = 1 << y;
          while (y + b < m && (C -= x[y + b], !(C <= 0))) {
            y++;
            C <<= 1;
          }
          F += 1 << y;
          if (t === 1 && F > 852 || t === 2 && F > 592) {
            return 1;
          }
          h = _ & d;
          s[h] = w << 24 | y << 16 | p - o;
        }
      }
      if (_ !== 0) {
        s[p + _] = D - b << 24 | 4194304;
      }
      a.bits = w;
      return 0;
    };
    const {
      Z_FINISH: ln,
      Z_BLOCK: hn,
      Z_TREES: dn,
      Z_OK: pn,
      Z_STREAM_END: fn,
      Z_NEED_DICT: Dn,
      Z_STREAM_ERROR: vn,
      Z_DATA_ERROR: gn,
      Z_MEM_ERROR: mn,
      Z_BUF_ERROR: wn,
      Z_DEFLATED: yn
    } = Pt;
    const bn = 16180;
    const Cn = 16190;
    const Fn = 16191;
    const _n = 16192;
    const En = 16194;
    const xn = 16199;
    const kn = 16200;
    const An = 16206;
    const In = 16209;
    const Sn = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
    function Bn() {
      this.strm = null;
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new Uint16Array(320);
      this.work = new Uint16Array(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    const jn = t => {
      if (!t) {
        return 1;
      }
      const e = t.state;
      if (!e || e.strm !== t || e.mode < bn || e.mode > 16211) {
        return 1;
      } else {
        return 0;
      }
    };
    const $n = t => {
      if (jn(t)) {
        return vn;
      }
      const e = t.state;
      t.total_in = t.total_out = e.total = 0;
      t.msg = "";
      if (e.wrap) {
        t.adler = e.wrap & 1;
      }
      e.mode = bn;
      e.last = 0;
      e.havedict = 0;
      e.flags = -1;
      e.dmax = 32768;
      e.head = null;
      e.hold = 0;
      e.bits = 0;
      e.lencode = e.lendyn = new Int32Array(852);
      e.distcode = e.distdyn = new Int32Array(592);
      e.sane = 1;
      e.back = -1;
      return pn;
    };
    const Tn = t => {
      if (jn(t)) {
        return vn;
      }
      const e = t.state;
      e.wsize = 0;
      e.whave = 0;
      e.wnext = 0;
      return $n(t);
    };
    const Pn = (t, e) => {
      let n;
      if (jn(t)) {
        return vn;
      }
      const i = t.state;
      if (e < 0) {
        n = 0;
        e = -e;
      } else {
        n = 5 + (e >> 4);
        if (e < 48) {
          e &= 15;
        }
      }
      if (e && (e < 8 || e > 15)) {
        return vn;
      } else {
        if (i.window !== null && i.wbits !== e) {
          i.window = null;
        }
        i.wrap = n;
        i.wbits = e;
        return Tn(t);
      }
    };
    const Mn = (t, e) => {
      if (!t) {
        return vn;
      }
      const n = new Bn();
      t.state = n;
      n.strm = t;
      n.window = null;
      n.mode = bn;
      const i = Pn(t, e);
      if (i !== pn) {
        t.state = null;
      }
      return i;
    };
    let Ln;
    let Rn;
    let On = true;
    const Un = t => {
      if (On) {
        Ln = new Int32Array(512);
        Rn = new Int32Array(32);
        let e = 0;
        while (e < 144) {
          t.lens[e++] = 8;
        }
        while (e < 256) {
          t.lens[e++] = 9;
        }
        while (e < 280) {
          t.lens[e++] = 7;
        }
        while (e < 288) {
          t.lens[e++] = 8;
        }
        cn(1, t.lens, 0, 288, Ln, 0, t.work, {
          bits: 9
        });
        e = 0;
        while (e < 32) {
          t.lens[e++] = 5;
        }
        cn(2, t.lens, 0, 32, Rn, 0, t.work, {
          bits: 5
        });
        On = false;
      }
      t.lencode = Ln;
      t.lenbits = 9;
      t.distcode = Rn;
      t.distbits = 5;
    };
    const Vn = (t, e, n, i) => {
      let s;
      const o = t.state;
      if (o.window === null) {
        o.wsize = 1 << o.wbits;
        o.wnext = 0;
        o.whave = 0;
        o.window = new Uint8Array(o.wsize);
      }
      if (i >= o.wsize) {
        o.window.set(e.subarray(n - o.wsize, n), 0);
        o.wnext = 0;
        o.whave = o.wsize;
      } else {
        s = o.wsize - o.wnext;
        if (s > i) {
          s = i;
        }
        o.window.set(e.subarray(n - i, n - i + s), o.wnext);
        if (i -= s) {
          o.window.set(e.subarray(n - i, n), 0);
          o.wnext = i;
          o.whave = o.wsize;
        } else {
          o.wnext += s;
          if (o.wnext === o.wsize) {
            o.wnext = 0;
          }
          if (o.whave < o.wsize) {
            o.whave += s;
          }
        }
      }
      return 0;
    };
    var Hn = {
      inflateReset: Tn,
      inflateReset2: Pn,
      inflateResetKeep: $n,
      inflateInit: t => Mn(t, 15),
      inflateInit2: Mn,
      inflate: (t, e) => {
        let n;
        let i;
        let s;
        let o;
        let r;
        let a;
        let u;
        let c;
        let l;
        let h;
        let d;
        let p;
        let f;
        let D;
        let v;
        let g;
        let m;
        let w;
        let y;
        let b;
        let C;
        let F;
        let _ = 0;
        const E = new Uint8Array(4);
        let x;
        let k;
        const A = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (jn(t) || !t.output || !t.input && t.avail_in !== 0) {
          return vn;
        }
        n = t.state;
        if (n.mode === Fn) {
          n.mode = _n;
        }
        r = t.next_out;
        s = t.output;
        u = t.avail_out;
        o = t.next_in;
        i = t.input;
        a = t.avail_in;
        c = n.hold;
        l = n.bits;
        h = a;
        d = u;
        F = pn;
        t: while (true) {
          switch (n.mode) {
            case bn:
              if (n.wrap === 0) {
                n.mode = _n;
                break;
              }
              while (l < 16) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              if (n.wrap & 2 && c === 35615) {
                if (n.wbits === 0) {
                  n.wbits = 15;
                }
                n.check = 0;
                E[0] = c & 255;
                E[1] = c >>> 8 & 255;
                n.check = $t(n.check, E, 2, 0);
                c = 0;
                l = 0;
                n.mode = 16181;
                break;
              }
              if (n.head) {
                n.head.done = false;
              }
              if (!(n.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
                t.msg = "incorrect header check";
                n.mode = In;
                break;
              }
              if ((c & 15) !== yn) {
                t.msg = "unknown compression method";
                n.mode = In;
                break;
              }
              c >>>= 4;
              l -= 4;
              C = 8 + (c & 15);
              if (n.wbits === 0) {
                n.wbits = C;
              }
              if (C > 15 || C > n.wbits) {
                t.msg = "invalid window size";
                n.mode = In;
                break;
              }
              n.dmax = 1 << n.wbits;
              n.flags = 0;
              t.adler = n.check = 1;
              n.mode = c & 512 ? 16189 : Fn;
              c = 0;
              l = 0;
              break;
            case 16181:
              while (l < 16) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              n.flags = c;
              if ((n.flags & 255) !== yn) {
                t.msg = "unknown compression method";
                n.mode = In;
                break;
              }
              if (n.flags & 57344) {
                t.msg = "unknown header flags set";
                n.mode = In;
                break;
              }
              if (n.head) {
                n.head.text = c >> 8 & 1;
              }
              if (n.flags & 512 && n.wrap & 4) {
                E[0] = c & 255;
                E[1] = c >>> 8 & 255;
                n.check = $t(n.check, E, 2, 0);
              }
              c = 0;
              l = 0;
              n.mode = 16182;
            case 16182:
              while (l < 32) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              if (n.head) {
                n.head.time = c;
              }
              if (n.flags & 512 && n.wrap & 4) {
                E[0] = c & 255;
                E[1] = c >>> 8 & 255;
                E[2] = c >>> 16 & 255;
                E[3] = c >>> 24 & 255;
                n.check = $t(n.check, E, 4, 0);
              }
              c = 0;
              l = 0;
              n.mode = 16183;
            case 16183:
              while (l < 16) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              if (n.head) {
                n.head.xflags = c & 255;
                n.head.os = c >> 8;
              }
              if (n.flags & 512 && n.wrap & 4) {
                E[0] = c & 255;
                E[1] = c >>> 8 & 255;
                n.check = $t(n.check, E, 2, 0);
              }
              c = 0;
              l = 0;
              n.mode = 16184;
            case 16184:
              if (n.flags & 1024) {
                while (l < 16) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                n.length = c;
                if (n.head) {
                  n.head.extra_len = c;
                }
                if (n.flags & 512 && n.wrap & 4) {
                  E[0] = c & 255;
                  E[1] = c >>> 8 & 255;
                  n.check = $t(n.check, E, 2, 0);
                }
                c = 0;
                l = 0;
              } else if (n.head) {
                n.head.extra = null;
              }
              n.mode = 16185;
            case 16185:
              if (n.flags & 1024 && (p = n.length, p > a && (p = a), p && (n.head && (C = n.head.extra_len - n.length, n.head.extra ||= new Uint8Array(n.head.extra_len), n.head.extra.set(i.subarray(o, o + p), C)), n.flags & 512 && n.wrap & 4 && (n.check = $t(n.check, i, p, o)), a -= p, o += p, n.length -= p), n.length)) {
                break t;
              }
              n.length = 0;
              n.mode = 16186;
            case 16186:
              if (n.flags & 2048) {
                if (a === 0) {
                  break t;
                }
                p = 0;
                do {
                  C = i[o + p++];
                  if (n.head && C && n.length < 65536) {
                    n.head.name += String.fromCharCode(C);
                  }
                } while (C && p < a);
                if (n.flags & 512 && n.wrap & 4) {
                  n.check = $t(n.check, i, p, o);
                }
                a -= p;
                o += p;
                if (C) {
                  break t;
                }
              } else if (n.head) {
                n.head.name = null;
              }
              n.length = 0;
              n.mode = 16187;
            case 16187:
              if (n.flags & 4096) {
                if (a === 0) {
                  break t;
                }
                p = 0;
                do {
                  C = i[o + p++];
                  if (n.head && C && n.length < 65536) {
                    n.head.comment += String.fromCharCode(C);
                  }
                } while (C && p < a);
                if (n.flags & 512 && n.wrap & 4) {
                  n.check = $t(n.check, i, p, o);
                }
                a -= p;
                o += p;
                if (C) {
                  break t;
                }
              } else if (n.head) {
                n.head.comment = null;
              }
              n.mode = 16188;
            case 16188:
              if (n.flags & 512) {
                while (l < 16) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                if (n.wrap & 4 && c !== (n.check & 65535)) {
                  t.msg = "header crc mismatch";
                  n.mode = In;
                  break;
                }
                c = 0;
                l = 0;
              }
              if (n.head) {
                n.head.hcrc = n.flags >> 9 & 1;
                n.head.done = true;
              }
              t.adler = n.check = 0;
              n.mode = Fn;
              break;
            case 16189:
              while (l < 32) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              t.adler = n.check = Sn(c);
              c = 0;
              l = 0;
              n.mode = Cn;
            case Cn:
              if (n.havedict === 0) {
                t.next_out = r;
                t.avail_out = u;
                t.next_in = o;
                t.avail_in = a;
                n.hold = c;
                n.bits = l;
                return Dn;
              }
              t.adler = n.check = 1;
              n.mode = Fn;
            case Fn:
              if (e === hn || e === dn) {
                break t;
              }
            case _n:
              if (n.last) {
                c >>>= l & 7;
                l -= l & 7;
                n.mode = An;
                break;
              }
              while (l < 3) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              n.last = c & 1;
              c >>>= 1;
              l -= 1;
              switch (c & 3) {
                case 0:
                  n.mode = 16193;
                  break;
                case 1:
                  Un(n);
                  n.mode = xn;
                  if (e === dn) {
                    c >>>= 2;
                    l -= 2;
                    break t;
                  }
                  break;
                case 2:
                  n.mode = 16196;
                  break;
                case 3:
                  t.msg = "invalid block type";
                  n.mode = In;
              }
              c >>>= 2;
              l -= 2;
              break;
            case 16193:
              c >>>= l & 7;
              l -= l & 7;
              while (l < 32) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              if ((c & 65535) != (c >>> 16 ^ 65535)) {
                t.msg = "invalid stored block lengths";
                n.mode = In;
                break;
              }
              n.length = c & 65535;
              c = 0;
              l = 0;
              n.mode = En;
              if (e === dn) {
                break t;
              }
            case En:
              n.mode = 16195;
            case 16195:
              p = n.length;
              if (p) {
                if (p > a) {
                  p = a;
                }
                if (p > u) {
                  p = u;
                }
                if (p === 0) {
                  break t;
                }
                s.set(i.subarray(o, o + p), r);
                a -= p;
                o += p;
                u -= p;
                r += p;
                n.length -= p;
                break;
              }
              n.mode = Fn;
              break;
            case 16196:
              while (l < 14) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              n.nlen = 257 + (c & 31);
              c >>>= 5;
              l -= 5;
              n.ndist = 1 + (c & 31);
              c >>>= 5;
              l -= 5;
              n.ncode = 4 + (c & 15);
              c >>>= 4;
              l -= 4;
              if (n.nlen > 286 || n.ndist > 30) {
                t.msg = "too many length or distance symbols";
                n.mode = In;
                break;
              }
              n.have = 0;
              n.mode = 16197;
            case 16197:
              while (n.have < n.ncode) {
                while (l < 3) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                n.lens[A[n.have++]] = c & 7;
                c >>>= 3;
                l -= 3;
              }
              while (n.have < 19) {
                n.lens[A[n.have++]] = 0;
              }
              n.lencode = n.lendyn;
              n.lenbits = 7;
              x = {
                bits: n.lenbits
              };
              F = cn(0, n.lens, 0, 19, n.lencode, 0, n.work, x);
              n.lenbits = x.bits;
              if (F) {
                t.msg = "invalid code lengths set";
                n.mode = In;
                break;
              }
              n.have = 0;
              n.mode = 16198;
            case 16198:
              while (n.have < n.nlen + n.ndist) {
                while (_ = n.lencode[c & (1 << n.lenbits) - 1], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(v <= l)) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                if (m < 16) {
                  c >>>= v;
                  l -= v;
                  n.lens[n.have++] = m;
                } else {
                  if (m === 16) {
                    for (k = v + 2; l < k;) {
                      if (a === 0) {
                        break t;
                      }
                      a--;
                      c += i[o++] << l;
                      l += 8;
                    }
                    c >>>= v;
                    l -= v;
                    if (n.have === 0) {
                      t.msg = "invalid bit length repeat";
                      n.mode = In;
                      break;
                    }
                    C = n.lens[n.have - 1];
                    p = 3 + (c & 3);
                    c >>>= 2;
                    l -= 2;
                  } else if (m === 17) {
                    for (k = v + 3; l < k;) {
                      if (a === 0) {
                        break t;
                      }
                      a--;
                      c += i[o++] << l;
                      l += 8;
                    }
                    c >>>= v;
                    l -= v;
                    C = 0;
                    p = 3 + (c & 7);
                    c >>>= 3;
                    l -= 3;
                  } else {
                    for (k = v + 7; l < k;) {
                      if (a === 0) {
                        break t;
                      }
                      a--;
                      c += i[o++] << l;
                      l += 8;
                    }
                    c >>>= v;
                    l -= v;
                    C = 0;
                    p = 11 + (c & 127);
                    c >>>= 7;
                    l -= 7;
                  }
                  if (n.have + p > n.nlen + n.ndist) {
                    t.msg = "invalid bit length repeat";
                    n.mode = In;
                    break;
                  }
                  while (p--) {
                    n.lens[n.have++] = C;
                  }
                }
              }
              if (n.mode === In) {
                break;
              }
              if (n.lens[256] === 0) {
                t.msg = "invalid code -- missing end-of-block";
                n.mode = In;
                break;
              }
              n.lenbits = 9;
              x = {
                bits: n.lenbits
              };
              F = cn(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, x);
              n.lenbits = x.bits;
              if (F) {
                t.msg = "invalid literal/lengths set";
                n.mode = In;
                break;
              }
              n.distbits = 6;
              n.distcode = n.distdyn;
              x = {
                bits: n.distbits
              };
              F = cn(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, x);
              n.distbits = x.bits;
              if (F) {
                t.msg = "invalid distances set";
                n.mode = In;
                break;
              }
              n.mode = xn;
              if (e === dn) {
                break t;
              }
            case xn:
              n.mode = kn;
            case kn:
              if (a >= 6 && u >= 258) {
                t.next_out = r;
                t.avail_out = u;
                t.next_in = o;
                t.avail_in = a;
                n.hold = c;
                n.bits = l;
                nn(t, d);
                r = t.next_out;
                s = t.output;
                u = t.avail_out;
                o = t.next_in;
                i = t.input;
                a = t.avail_in;
                c = n.hold;
                l = n.bits;
                if (n.mode === Fn) {
                  n.back = -1;
                }
                break;
              }
              for (n.back = 0; _ = n.lencode[c & (1 << n.lenbits) - 1], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(v <= l);) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              if (g && !(g & 240)) {
                w = v;
                y = g;
                b = m;
                while (_ = n.lencode[b + ((c & (1 << w + y) - 1) >> w)], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(w + v <= l)) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                c >>>= w;
                l -= w;
                n.back += w;
              }
              c >>>= v;
              l -= v;
              n.back += v;
              n.length = m;
              if (g === 0) {
                n.mode = 16205;
                break;
              }
              if (g & 32) {
                n.back = -1;
                n.mode = Fn;
                break;
              }
              if (g & 64) {
                t.msg = "invalid literal/length code";
                n.mode = In;
                break;
              }
              n.extra = g & 15;
              n.mode = 16201;
            case 16201:
              if (n.extra) {
                for (k = n.extra; l < k;) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                n.length += c & (1 << n.extra) - 1;
                c >>>= n.extra;
                l -= n.extra;
                n.back += n.extra;
              }
              n.was = n.length;
              n.mode = 16202;
            case 16202:
              while (_ = n.distcode[c & (1 << n.distbits) - 1], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(v <= l)) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << l;
                l += 8;
              }
              if (!(g & 240)) {
                w = v;
                y = g;
                b = m;
                while (_ = n.distcode[b + ((c & (1 << w + y) - 1) >> w)], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(w + v <= l)) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                c >>>= w;
                l -= w;
                n.back += w;
              }
              c >>>= v;
              l -= v;
              n.back += v;
              if (g & 64) {
                t.msg = "invalid distance code";
                n.mode = In;
                break;
              }
              n.offset = m;
              n.extra = g & 15;
              n.mode = 16203;
            case 16203:
              if (n.extra) {
                for (k = n.extra; l < k;) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                n.offset += c & (1 << n.extra) - 1;
                c >>>= n.extra;
                l -= n.extra;
                n.back += n.extra;
              }
              if (n.offset > n.dmax) {
                t.msg = "invalid distance too far back";
                n.mode = In;
                break;
              }
              n.mode = 16204;
            case 16204:
              if (u === 0) {
                break t;
              }
              p = d - u;
              if (n.offset > p) {
                p = n.offset - p;
                if (p > n.whave && n.sane) {
                  t.msg = "invalid distance too far back";
                  n.mode = In;
                  break;
                }
                if (p > n.wnext) {
                  p -= n.wnext;
                  f = n.wsize - p;
                } else {
                  f = n.wnext - p;
                }
                if (p > n.length) {
                  p = n.length;
                }
                D = n.window;
              } else {
                D = s;
                f = r - n.offset;
                p = n.length;
              }
              if (p > u) {
                p = u;
              }
              u -= p;
              n.length -= p;
              do {
                s[r++] = D[f++];
              } while (--p);
              if (n.length === 0) {
                n.mode = kn;
              }
              break;
            case 16205:
              if (u === 0) {
                break t;
              }
              s[r++] = n.length;
              u--;
              n.mode = kn;
              break;
            case An:
              if (n.wrap) {
                while (l < 32) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c |= i[o++] << l;
                  l += 8;
                }
                d -= u;
                t.total_out += d;
                n.total += d;
                if (n.wrap & 4 && d) {
                  t.adler = n.check = n.flags ? $t(n.check, s, d, r - d) : Bt(n.check, s, d, r - d);
                }
                d = u;
                if (n.wrap & 4 && (n.flags ? c : Sn(c)) !== n.check) {
                  t.msg = "incorrect data check";
                  n.mode = In;
                  break;
                }
                c = 0;
                l = 0;
              }
              n.mode = 16207;
            case 16207:
              if (n.wrap && n.flags) {
                while (l < 32) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << l;
                  l += 8;
                }
                if (n.wrap & 4 && c !== (n.total & -1)) {
                  t.msg = "incorrect length check";
                  n.mode = In;
                  break;
                }
                c = 0;
                l = 0;
              }
              n.mode = 16208;
            case 16208:
              F = fn;
              break t;
            case In:
              F = gn;
              break t;
            case 16210:
              return mn;
            default:
              return vn;
          }
        }
        t.next_out = r;
        t.avail_out = u;
        t.next_in = o;
        t.avail_in = a;
        n.hold = c;
        n.bits = l;
        if (n.wsize || d !== t.avail_out && n.mode < In && (n.mode < An || e !== ln)) {
          Vn(t, t.output, t.next_out, d - t.avail_out);
        }
        h -= t.avail_in;
        d -= t.avail_out;
        t.total_in += h;
        t.total_out += d;
        n.total += d;
        if (n.wrap & 4 && d) {
          t.adler = n.check = n.flags ? $t(n.check, s, d, t.next_out - d) : Bt(n.check, s, d, t.next_out - d);
        }
        t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === Fn ? 128 : 0) + (n.mode === xn || n.mode === En ? 256 : 0);
        if ((h === 0 && d === 0 || e === ln) && F === pn) {
          F = wn;
        }
        return F;
      },
      inflateEnd: t => {
        if (jn(t)) {
          return vn;
        }
        let e = t.state;
        e.window &&= null;
        t.state = null;
        return pn;
      },
      inflateGetHeader: (t, e) => {
        if (jn(t)) {
          return vn;
        }
        const n = t.state;
        if (n.wrap & 2) {
          n.head = e;
          e.done = false;
          return pn;
        } else {
          return vn;
        }
      },
      inflateSetDictionary: (t, e) => {
        const n = e.length;
        let i;
        let s;
        let o;
        if (jn(t)) {
          return vn;
        } else {
          i = t.state;
          if (i.wrap !== 0 && i.mode !== Cn) {
            return vn;
          } else if (i.mode === Cn && (s = 1, s = Bt(s, e, n, 0), s !== i.check)) {
            return gn;
          } else {
            o = Vn(t, e, n, n);
            if (o) {
              i.mode = 16210;
              return mn;
            } else {
              i.havedict = 1;
              return pn;
            }
          }
        }
      },
      inflateInfo: "pako inflate (from Nodeca project)"
    };
    function Nn() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    const Gn = Object.prototype.toString;
    const {
      Z_NO_FLUSH: zn,
      Z_FINISH: Zn,
      Z_OK: Qn,
      Z_STREAM_END: Wn,
      Z_NEED_DICT: Yn,
      Z_STREAM_ERROR: Jn,
      Z_DATA_ERROR: Kn,
      Z_MEM_ERROR: Xn
    } = Pt;
    function qn(t) {
      this.options = Te({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, t || {});
      const e = this.options;
      if (e.raw && e.windowBits >= 0 && e.windowBits < 16) {
        e.windowBits = -e.windowBits;
        if (e.windowBits === 0) {
          e.windowBits = -15;
        }
      }
      if (!!(e.windowBits >= 0) && !!(e.windowBits < 16) && (!t || !t.windowBits)) {
        e.windowBits += 32;
      }
      if (e.windowBits > 15 && e.windowBits < 48) {
        if (!(e.windowBits & 15)) {
          e.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new Ve();
      this.strm.avail_out = 0;
      let n = Hn.inflateInit2(this.strm, e.windowBits);
      if (n !== Qn) {
        throw new Error(Tt[n]);
      }
      this.header = new Nn();
      Hn.inflateGetHeader(this.strm, this.header);
      if (e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = Re(e.dictionary) : Gn.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (n = Hn.inflateSetDictionary(this.strm, e.dictionary), n !== Qn))) {
        throw new Error(Tt[n]);
      }
    }
    function ti(t, e) {
      const n = new qn(e);
      n.push(t);
      if (n.err) {
        throw n.msg || Tt[n.err];
      }
      return n.result;
    }
    qn.prototype.push = function (t, e) {
      const n = this.strm;
      const i = this.options.chunkSize;
      const s = this.options.dictionary;
      let o;
      let r;
      let a;
      if (this.ended) {
        return false;
      }
      r = e === ~~e ? e : e === true ? Zn : zn;
      if (Gn.call(t) === "[object ArrayBuffer]") {
        n.input = new Uint8Array(t);
      } else {
        n.input = t;
      }
      n.next_in = 0;
      n.avail_in = n.input.length;
      while (true) {
        if (n.avail_out === 0) {
          n.output = new Uint8Array(i);
          n.next_out = 0;
          n.avail_out = i;
        }
        o = Hn.inflate(n, r);
        if (o === Yn && s) {
          o = Hn.inflateSetDictionary(n, s);
          if (o === Qn) {
            o = Hn.inflate(n, r);
          } else if (o === Kn) {
            o = Yn;
          }
        }
        while (n.avail_in > 0 && o === Wn && n.state.wrap > 0 && t[n.next_in] !== 0) {
          Hn.inflateReset(n);
          o = Hn.inflate(n, r);
        }
        switch (o) {
          case Jn:
          case Kn:
          case Yn:
          case Xn:
            this.onEnd(o);
            this.ended = true;
            return false;
        }
        a = n.avail_out;
        if (n.next_out && (n.avail_out === 0 || o === Wn)) {
          if (this.options.to === "string") {
            let t = Ue(n.output, n.next_out);
            let e = n.next_out - t;
            let s = Oe(n.output, t);
            n.next_out = e;
            n.avail_out = i - e;
            if (e) {
              n.output.set(n.output.subarray(t, t + e), 0);
            }
            this.onData(s);
          } else {
            this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
          }
        }
        if (o !== Qn || a !== 0) {
          if (o === Wn) {
            o = Hn.inflateEnd(this.strm);
            this.onEnd(o);
            this.ended = true;
            return true;
          }
          if (n.avail_in === 0) {
            break;
          }
        }
      }
      return true;
    };
    qn.prototype.onData = function (t) {
      this.chunks.push(t);
    };
    qn.prototype.onEnd = function (t) {
      if (t === Qn) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = Pe(this.chunks);
        }
      }
      this.chunks = [];
      this.err = t;
      this.msg = this.strm.msg;
    };
    var ei = {
      Inflate: qn,
      inflate: ti,
      inflateRaw: function (t, e) {
        (e = e || {}).raw = true;
        return ti(t, e);
      },
      ungzip: ti,
      constants: Pt
    };
    const {
      Deflate: ni,
      deflate: ii,
      deflateRaw: si,
      gzip: oi
    } = tn;
    const {
      Inflate: ri,
      inflate: ai,
      inflateRaw: ui,
      ungzip: ci
    } = ei;
    var li;
    var hi = {
      Deflate: ni,
      deflate: ii,
      deflateRaw: si,
      gzip: oi,
      Inflate: ri,
      inflate: ai,
      inflateRaw: ui,
      ungzip: ci,
      constants: Pt
    };
    function di(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    function pi(t) {
      return t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.");
    }
    function fi(t = new URL(window.location.href)) {
      return t.hostname === "tv.youtube.com";
    }
    function Di(t) {
      return t.hostname.includes(".netflix.") && t.pathname.includes("/watch");
    }
    function vi(t) {
      return t.replace(/\/+$/, "") === "/live";
    }
    function gi(t) {
      return function () {
        return new Promise(e => {
          setTimeout(() => {
            e();
          }, t);
        });
      };
    }
    function mi(t, e, n = 250) {
      return function () {
        const i = new Date().getTime();
        const s = function () {
          return di(this, undefined, undefined, function* () {
            if (yield t()) {
              return Promise.resolve();
            } else if (e !== null && new Date().getTime() - i > e) {
              return Promise.reject(new Error("delayUntil timed out: " + t));
            } else {
              return gi(n)().then(s);
            }
          });
        };
        return s();
      };
    }
    function wi(t, e, n) {
      t.push(e);
      if (t.length > n) {
        t.splice(0, t.length - n);
      }
    }
    function yi(t) {
      return t.concat().sort()[Math.floor(t.length / 2)];
    }
    function bi(t) {
      const e = document.createElement("script");
      e.setAttribute("tpInjected", "");
      e.src = t;
      (document.head || document.documentElement).appendChild(e);
      e.remove();
    }
    function Ci(t) {
      return di(this, undefined, undefined, function* () {
        if ((t.headers.get("content-type") || "").includes("application/json")) {
          try {
            return yield t.json();
          } catch (t) {}
        }
        const e = yield t.text();
        if (!e) {
          return e;
        }
        try {
          return JSON.parse(e);
        } catch (t) {
          return e;
        }
      });
    }
    function Fi(t, e, n, i, s, o, r = false) {
      return di(this, undefined, undefined, function* () {
        const a = `${l}/${t}`.replace(/([^:]\/)\/+/g, "$1");
        const u = n && !!s;
        const c = n && !s;
        const h = Object.assign({
          Accept: "application/json"
        }, o || {});
        const d = t => typeof FormData != "undefined" && t instanceof FormData || typeof Blob != "undefined" && t instanceof Blob || typeof ArrayBuffer != "undefined" && t instanceof ArrayBuffer;
        if (e !== "GET" && i != null && !d(i)) {
          h["Content-Type"] = h["Content-Type"] || "application/json";
        }
        if (u) {
          h.Authorization = `Bearer ${s}`;
        }
        if (c && !h["x-tp-csrf"]) {
          const t = yield P(r);
          if (t) {
            h["x-tp-csrf"] = t;
          }
        }
        const p = {
          method: e,
          headers: h,
          credentials: c ? "include" : "omit",
          body: e !== "GET" && i != null ? d(i) ? i : JSON.stringify(i) : undefined
        };
        const f = yield fetch(a, p);
        if (f.status === 0 || f.status >= 200 && f.status < 400) {
          return yield Ci(f);
        }
        const D = yield Ci(f);
        const v = new Error(typeof D == "string" ? D : JSON.stringify(D));
        v.status = f.status;
        throw v;
      });
    }
    function _i(t) {
      const e = new TextEncoder().encode(t);
      const n = hi.gzip(e);
      let i = "";
      for (let t = 0; t < n.length; t++) {
        i += String.fromCharCode(n[t]);
      }
      return btoa(i);
    }
    (function (t) {
      t.REGISTER = "register";
      t.PARTY_START = "party_start";
      t.PARTY_JOIN = "party_join";
      t.PARTY_END = "party_end";
      t.PARTY_SHARE = "party_share";
      t.PARTY_SCHEDULE = "party_schedule";
    })(li ||= {});
    var Ei;
    var xi;
    var ki;
    function Ai(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class Ii {
      constructor() {
        this.S = 0;
        this.B = false;
        this.$ = false;
      }
      set hostOnly(t) {
        this.B = t;
      }
      get hostOnly() {
        return this.B;
      }
      get scheduledPartyPlaybackOnly() {
        return this.$;
      }
      set scheduledPartyPlaybackOnly(t) {
        this.$ = t;
      }
      applyPartySeekIfAllowed(t) {
        return Ai(this, undefined, undefined, function* () {
          if (!this.$) {
            yield this.setCurrentTime(t);
          }
        });
      }
      freeze(t) {
        return Ai(this, undefined, undefined, function* () {
          this.S++;
          try {
            yield this.pause();
            yield gi(t)();
            yield this.play();
          } finally {
            this.S--;
          }
        });
      }
      jumpToNextEpisode(t) {
        return Ai(this, undefined, undefined, function* () {
          yield this.jumpToOtherEpisode(t);
        });
      }
      waitBeforeNativePartyStartAsync() {
        return Ai(this, undefined, undefined, function* () {
          yield this.waitVideoApiReadyAsync();
        });
      }
      get uiEventsHappening() {
        return this.S;
      }
      incrementUiEventsHappening(t) {
        this.S += t;
      }
      T(t, e, n = 1500) {
        return Ai(this, undefined, undefined, function* () {
          const i = "tp-player-" + Date.now() + "-" + Ii.P++;
          return new Promise((s, o) => {
            const r = t => {
              if (t.source === window && t.data?.type === e && t.data.requestId === i) {
                window.clearTimeout(a);
                window.removeEventListener("message", r);
                s(t.data);
              }
            };
            const a = window.setTimeout(() => {
              window.removeEventListener("message", r);
              o(new Error(e + " timeout"));
            }, n);
            window.addEventListener("message", r);
            window.postMessage(Object.assign(Object.assign({}, t), {
              requestId: i
            }), "*");
          });
        });
      }
      getCustomStartPartyButtonMessage() {
        return Ai(this, undefined, undefined, function* () {
          return null;
        });
      }
      beginRemoteSyncApply() {}
      endRemoteSyncApply() {}
      shouldSuppressLocalBroadcast() {
        return this.S > 0;
      }
      shouldForceEpisodeCompletionBroadcast() {
        return false;
      }
      getSyncToleranceMs(t) {
        return t;
      }
      shouldCancelSync() {
        return false;
      }
      hasAdBreakWithinMs(t) {
        return false;
      }
      getScreenSize() {
        return {
          width: window.outerWidth,
          height: window.outerHeight
        };
      }
      getVideoContent(t, e, n, i, s) {
        let o;
        let r;
        let a;
        if (s) {
          if (s.episodeNum && !isNaN(s.episodeNum)) {
            o = s.episodeNum;
          }
          if (s.seasonNum && !isNaN(s.seasonNum)) {
            r = s.seasonNum;
          }
          a = s.title;
        }
        return {
          id: t,
          type: i,
          name: e,
          url: n,
          episode: o,
          season: r,
          episode_name: a,
          service: this.getInternalStreamingServiceName()
        };
      }
      logError(t, e) {
        console.error("ERROR", t, e);
        const n = new o(u, r, {
          name: "video_error",
          action: {
            description: t,
            reason: e
          }
        });
        S.m(n);
      }
      doAdCheck() {
        return Ai(this, undefined, undefined, function* () {});
      }
      triggerNextEpisodeClick() {}
    }
    Ii.P = 0;
    (function (t) {
      t.LOADING = "loading";
      t.PLAYING = "playing";
      t.IDLE = "idle";
      t.AD_PLAYING = "ad_playing";
      t.PAUSED = "paused";
      t.NOT_READY = "not_ready";
    })(Ei ||= {});
    (function (t) {
      t.PAUSED = "paused";
      t.PLAYING = "playing";
    })(xi ||= {});
    class Si {
      constructor(t, e, n, i, s, o = []) {
        this.requiredPermissions = t;
        this.serverName = n;
        this.name = i;
        this.contentScripts = e;
        this.syncFromEnd = s;
        this.browseScripts = o;
      }
      validateVideoId(t) {
        return !!t;
      }
      validateVideoType(t) {
        return !!t;
      }
      urlWithSessionId(t) {
        return `${h}/join/${t}`;
      }
    }
    (function (t) {
      t.NETFLIX = "Netflix";
      t.HULU = "Hulu";
      t.DISNEY_PLUS = "Disney";
      t.DISNEY_PLUS_MENA = "DisneyMena";
      t.HBO_MAX = "HBOMax";
      t.MAX = "Max";
      t.YOUTUBE = "Youtube";
      t.YOUTUBE_TV = "YoutubeTV";
      t.AMAZON = "Amazon";
      t.CRUNCHYROLL = "Crunchyroll";
      t.ESPN = "ESPN+";
      t.PARAMOUNT = "Paramount+";
      t.FUNIMATION = "Funimation";
      t.HOTSTAR = "Hotstar";
      t.PEACOCK = "Peacock TV";
      t.STAR_PLUS = "Starplus";
      t.PLUTO_TV = "PlutoTV";
      t.APPLE_TV = "AppleTV";
      t.JIO_CINEMA = "JioCinema";
      t.TUBI_TV = "TubiTV";
      t.MUBI = "Mubi";
      t.STAN = "Stan";
      t.CRAVE = "Crave";
      t.SLING = "Sling";
      t.FUBO = "Fubo";
      t.VIKI = "Viki";
      t.SPOTIFY = "Spotify";
      t.ZEE5 = "Zee5";
      t.SONY_LIV = "SonyLiv";
      t.UNEXT = "U-Next";
      t.HULU_JP = "Hulu Japan";
      t.WILLOW = "Willow";
      t.CANALPLUS = "Canal+";
      t.FANCODE = "Fancode";
      t.SHAHID = "Shahid";
      t.SHUDDER = "Shudder";
      t.VIU = "Viu";
      t.VIDIO = "Vidio";
      t.FOX_ONE = "Fox One";
      t.TSN_PLUS = "TSN+";
      t.LEAGUE_PASS = "LeaguePass";
      t.DAZN = "DAZN";
      t.VIX = "Vix";
      t.MIGU = "Migu";
      t.F1_TV = "F1 TV";
    })(ki ||= {});
    const Bi = new class extends Si {
      isValidUrl(t) {
        return Di(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".netflix.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([0-9]+)\??.*/);
        if (e && e.length > 0) {
          return e[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", ki.NETFLIX, false, ["browse_scripts/netflix/netflix_browse_bundled.js"]);
    Object.freeze(Bi);
    const ji = Bi;
    const $i = "Failed to read chrome storage. Please refresh the page and try again";
    const Ti = "Failed to connect to Script. Please refresh the page and try again";
    const Pi = "Failed to load video in time. Please refresh the page and try again.";
    var Mi;
    var Li;
    var Ri = n(7833);
    var Oi = n.n(Ri);
    class Ui {
      constructor(t) {
        this.namespace = t;
      }
      debug(t) {
        const e = t.methodName ? `${this.namespace}:${t.methodName}` : this.namespace;
        if (t.message) {
          Oi()(e)(t.message);
        }
        if (t.object) {
          Oi()(e)(t.object);
        }
      }
    }
    (function (t) {
      t.NETFLIX = "netflix";
      t.HULU = "hulu";
      t.DISNEY_PLUS = "disney";
      t.STAR_PLUS = "starplus";
      t.AMAZON = "amazon";
      t.YOUTUBE = "youtube";
      t.HBO_MAX = "hbomax";
      t.MAX = "max";
      t.FUBO = "fubo";
      t.CRUNCHYROLL = "crunchyroll";
      t.PARAMOUNT = "paramount";
      t.PEACOCK = "peacock";
      t.HOTSTAR = "hotstar";
      t.DISNEY_PLUS_MENA = "disneymena";
      t.APPLE_TV = "appletv";
      t.PLUTO_TV = "plutotv";
      t.FUNIMATION = "funimation";
      t.TUBI_TV = "tubitv";
      t.JIO_CINEMA = "jiocinema";
      t.MUBI = "mubi";
      t.CRAVE = "crave";
      t.STAN = "stan";
      t.SONY_LIV = "sonyliv";
      t.ZEE5 = "zee5";
      t.HULU_JP = "hulujp";
      t.UNEXT = "unext";
      t.GLOBOPLAY = "globoplay";
      t.WILLOW = "willow";
      t.FANCODE = "fancode";
      t.CANALPLUS = "canalplus";
      t.SHAHID = "shahid";
      t.RTL = "rtl";
      t.ESPN = "espn";
      t.SLING = "sling";
      t.VIKI = "viki";
      t.SPOTIFY = "spotify";
      t.SHOWTIME = "showtime";
      t.SHUDDER = "shudder";
      t.AMC_PLUS = "amcplus";
      t.VIU = "viu";
      t.VIDIO = "vidio";
      t.FOX_ONE = "foxone";
      t.TSN_PLUS = "tsnplus";
      t.LEAGUE_PASS = "leaguepass";
      t.DAZN = "dazn";
      t.VIX = "vix";
      t.MIGU = "migu";
      t.F1_TV = "f1tv";
    })(Mi ||= {});
    (function (t) {
      t.EPISODE = "episode";
      t.FEATURE = "feature";
      t.LIVE = "live";
      t.EXTRA = "extra";
      t.EVENT = "event";
      t.OTHER = "other";
      t.SHORTS = "shorts";
      t.NONE = "none";
      t.MUSIC = "music";
    })(Li ||= {});
    function Vi(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class Hi extends Ii {
      constructor() {
        super();
        this.M = new Ui("ext:ContentScripts:Hulu:HuluVideoApi");
        this.setInSession = t => {
          this.L = t;
        };
        this.forceAd = () => Vi(this, undefined, undefined, function* () {
          try {
            this.S += 1;
            console.log("Try to force ad");
            try {
              yield mi(() => {
                window.postMessage({
                  type: "GetState"
                }, "*");
                return this.R.paused;
              }, 5500)();
            } catch (t) {}
            if (this.R.paused) {
              this.M.debug({
                methodName: "forceAd",
                message: "Triggering play"
              });
              yield this.play();
            }
            if (this.R.adState.watchingAds) {
              this.M.debug({
                methodName: "forceAd",
                message: "In an ad"
              });
            } else {
              try {
                yield mi(() => {
                  window.postMessage({
                    type: "GetState"
                  }, "*");
                  return this.R.adState.watchingAds || !this.checkForceAd();
                }, 5500)();
              } catch (t) {}
              if (this.R.adState.watchingAds) {
                this.M.debug({
                  methodName: "forceAd",
                  message: "Forced an Ad to Play :)"
                });
              } else {
                this.M.debug({
                  methodName: "forceAd",
                  message: "Failed to launch an ad, when we should have."
                });
              }
            }
          } finally {
            this.S -= 1;
          }
        });
        this.checkForceAd = () => {
          const t = this.R.adState.nextAdBreak;
          console.log(t);
          if (t) {
            const e = t - this.R.time;
            console.log("FORCE DIF: " + e);
            this.M.debug({
              methodName: "checkForceAd",
              message: `${e}ms until next ad`
            });
            return e <= E && e > 0;
          }
          return false;
        };
        this.S = 0;
        this.O = 0;
        this.U = 0;
        this.V = 0;
        this.H = Li.NONE;
        this.N = 0;
        this.G = 0;
        this.Z = 0;
        this.R = {
          time: 0,
          paused: true,
          loading: false,
          adState: {
            watchingAds: false,
            adDurationLeft: 0,
            nextAdBreak: undefined
          },
          actionsState: {
            nextEpisodeReady: false
          }
        };
        this.L = false;
      }
      get pageTitle() {
        return this.W;
      }
      skipIdle() {
        if (jQuery(".center-controls .nf-big-play-pause-secondary").length > 0) {
          jQuery(".center-controls .nf-big-play-pause-secondary").trigger("click");
        } else if (jQuery(".watch-video--playback-restart button").length > 0) {
          jQuery(".watch-video--playback-restart button").trigger("click");
        }
      }
      getStreamingServiceName() {
        return ki.NETFLIX;
      }
      waitVideoDoneLoadingAsync() {
        return Vi(this, undefined, undefined, function* () {
          return new Promise(t => {
            const e = () => Vi(this, undefined, undefined, function* () {
              yield this.waitUpdateAPIState();
              if (this.R.loading || this.getPlaybackState() === Ei.LOADING || this.getPlaybackState() === Ei.IDLE) {
                setTimeout(() => {
                  e();
                }, 100);
              } else {
                t();
              }
            });
            e();
          });
        });
      }
      waitVideoApiReadyAsync() {
        return Vi(this, undefined, undefined, function* () {
          if (!this.Y) {
            try {
              yield mi(() => {
                const t = document.querySelector("video");
                const e = jQuery("video").parent()[0] !== undefined ? jQuery("video").parent()[0].id : null;
                return t instanceof Element && t.readyState > 0 && e != null && e != "";
              }, Infinity)();
              console.log("Got video");
              yield this.waitSkipSupplemental();
              this.Y = document.querySelector("video") ?? undefined;
            } catch (t) {
              this.logError(Pi, t);
              throw new Error(Pi);
            }
          }
        });
      }
      getVideoDataAsync() {
        return Vi(this, undefined, undefined, function* () {
          const t = yield this.getStateAsync();
          yield this.waitUpdatePageTitleAsync();
          yield this.waitUpdateVideoType();
          if (this.H == Li.EPISODE) {
            yield this.waitUpdateEpisodeData();
          }
          yield this.waitUpdateVideoLookupData();
          return new Promise((e, n) => {
            const o = this.pageTitle ?? "";
            const r = this.H;
            const a = (this.J() ?? 1) * 1000;
            const u = this.K();
            const c = this.getScreenSize();
            const l = this.getVideoContent(u, o, window.location.href, r, this.X);
            if (o === null || a === null || u === null) {
              n(Pi);
              return;
            }
            const {
              title: h,
              year: d,
              type: p
            } = this.q || {};
            e({
              videoTitle: o,
              videoDuration: a,
              videoId: u,
              screen: c,
              content: l,
              videoState: t.playbackState,
              originalTitle: h,
              releaseYear: d,
              type: p,
              service: "Netflix",
              videoType: r
            });
          });
        });
      }
      tt() {
        if (jQuery(".WatchNext-still-hover-container").length > 0) {
          jQuery(".WatchNext-still-hover-container").click();
          return true;
        }
        if (jQuery(".button-nfplayerNextEpisode").length > 0) {
          jQuery(".button-nfplayerNextEpisode").click();
          return true;
        }
        if (!(jQuery(".nf-flat-button-text").length > 0)) {
          if (jQuery("[data-uia='next-episode-seamless-button']").length > 0) {
            jQuery("[data-uia='next-episode-seamless-button']")[0].click();
            console.log("Clicking seamless button");
            return true;
          }
          {
            const t = document.querySelector("[data-uia='control-next']");
            return !!t && (t.click(), true);
          }
        }
        return !!jQuery(".nf-flat-button-text").text().toLowerCase().includes("next episode") && (jQuery(".nf-flat-button-text")[0].click(), true);
      }
      jumpToOtherEpisode(t) {
        return Vi(this, undefined, undefined, function* () {
          this.S += 1;
          const e = this.et();
          if (e != parseInt(t.videoId)) {
            console.log(e);
            console.log(parseInt(t.videoId));
            if (e && e + 1 === parseInt(t.videoId)) {
              A("Used Manual Click");
              if (!this.tt()) {
                window.postMessage({
                  type: "NEXT_EPISODE",
                  videoId: parseInt(t.videoId)
                }, "*");
              }
            } else {
              A("Used React Click");
              window.postMessage({
                type: "NEXT_EPISODE",
                videoId: parseInt(t.videoId)
              }, "*");
            }
          }
          this.S -= 1;
        });
      }
      triggerNextEpisodeClick() {
        this.S += 1;
        if (this.tt()) {
          console.log("Clicked next episode button");
          this.S -= 1;
        }
      }
      et() {
        if ((window.location.href.match(/^.*\/([0-9]+)\??.*/) ?? "").length !== 0) {
          return parseInt((window.location.href.match(/^.*\/([0-9]+)\??.*/) ?? [])[1] ?? null);
        } else {
          return null;
        }
      }
      freeze(t) {
        this.S += 1;
        jQuery(".button-nfplayerPause").click();
        return gi(t)().then(() => {
          jQuery(".button-nfplayerPlay").click();
        }).then(this.nt).finally(() => {
          this.S -= 1;
        });
      }
      pause() {
        return Vi(this, undefined, undefined, function* () {
          this.S += 1;
          window.postMessage({
            type: "PAUSE"
          }, "*");
          yield this.waitUpdateAPIState();
          yield gi(500)();
          try {
            yield mi(() => {
              window.postMessage({
                type: "GetState"
              }, "*");
              return this.R.paused;
            }, 2500)();
            yield this.nt();
            console.log("Paused");
          } catch (t) {
            this.logError("Video failed to pause", t);
            console.log("Didn't pause, but continuing.");
          } finally {
            this.S -= 1;
          }
        });
      }
      play() {
        return Vi(this, undefined, undefined, function* () {
          this.S += 1;
          window.postMessage({
            type: "PLAY"
          }, "*");
          yield this.waitUpdateAPIState();
          yield gi(500)();
          try {
            yield mi(() => {
              window.postMessage({
                type: "GetState"
              }, "*");
              return !this.R.paused;
            }, 2500)();
            yield this.nt();
            console.log("Played");
          } catch (t) {
            this.logError("video failed to play", t);
            console.log("Didn't play, but continuing.");
          } finally {
            this.S -= 1;
          }
        });
      }
      doAdCheck() {
        const t = Object.create(null, {
          doAdCheck: {
            get: () => super.doAdCheck
          }
        });
        return Vi(this, undefined, undefined, function* () {
          t.doAdCheck.call(this);
          this.M.debug({
            methodName: "doAdCheck",
            message: "Checking for ads"
          });
          yield this.waitUpdateAPIState();
          if (this.R.adState.watchingAds) {
            this.M.debug({
              methodName: "doAdCheck",
              message: "Already watching an ad"
            });
          } else if (this.checkForceAd()) {
            this.M.debug({
              methodName: "doAdCheck",
              message: "Should force an ad"
            });
            yield this.forceAd();
          } else {
            this.M.debug({
              methodName: "doAdCheck",
              message: "Shouldn't force ad"
            });
          }
        });
      }
      waitVideoDoneLoading() {
        return Vi(this, undefined, undefined, function* () {
          return new Promise((t, e) => {
            const n = performance.now();
            const i = () => Vi(this, undefined, undefined, function* () {
              const s = yield this.getPlayerState();
              const o = performance.now();
              if (s.loading) {
                if (o - n > 5000) {
                  e(new Error("Video Didn't stop loading"));
                } else {
                  setTimeout(i, 250);
                }
              } else {
                t();
              }
            });
            i();
          });
        });
      }
      setCurrentTime(t) {
        return Vi(this, undefined, undefined, function* () {
          A("Seek called with window post Message", true);
          this.S += 1;
          window.postMessage({
            type: "SEEK",
            time: t
          }, "*");
          try {
            yield gi(500)();
            yield this.waitVideoDoneLoading();
            yield this.nt();
          } finally {
            this.S -= 1;
          }
        });
      }
      nt() {
        this.S += 1;
        const u = jQuery(".VideoContainer");
        const c = 100;
        const l = 100;
        const h = jQuery(window);
        const d = {
          bubbles: true,
          button: 0,
          screenX: c - (h.scrollLeft() ?? 0),
          screenY: l - (h.scrollTop() ?? 0),
          clientX: c - (h.scrollLeft() ?? 0),
          clientY: l - (h.scrollTop() ?? 0),
          offsetX: c - (u.offset()?.left ?? 0),
          offsetY: l - (u.offset()?.top ?? 0),
          pageX: c,
          pageY: l,
          currentTarget: u[0]
        };
        if (u.length > 0) {
          u[0].dispatchEvent(new MouseEvent("mousemove", d));
        }
        return gi(1)().finally(() => {
          this.S -= 1;
        });
      }
      getVideoElement() {
        return document.querySelector("video");
      }
      getPlaybackState() {
        if (jQuery(".center-controls .nf-big-play-pause-secondary").length > 0 || jQuery(".watch-video--playback-restart button").length > 0) {
          return Ei.IDLE;
        } else if (this.R.adState.watchingAds) {
          return Ei.AD_PLAYING;
        } else if (jQuery(".AkiraPlayerSpinner--container").length > 0) {
          return Ei.LOADING;
        } else if (jQuery(".button-nfplayerPause").length > 0) {
          return Ei.PLAYING;
        } else {
          return Ei.PAUSED;
        }
      }
      getHTMLCurrentTime() {
        const t = this.getVideoElement();
        if (t) {
          return Math.floor(t.currentTime * 1000);
        }
      }
      it() {
        return "";
      }
      J() {
        return this.getVideoElement()?.duration ?? null;
      }
      K() {
        const e = ji.getVideoId(new URL(window.location.href)) ?? "";
        const n = jQuery("video").parent()[0] !== undefined ? jQuery("video").parent()[0].id : null;
        let i = e;
        if (!this.L && n != null && n != "" && n != e) {
          A("Replacing with dom id");
          history.replaceState("data to be passed", "Title of the page", "/watch/" + jQuery(jQuery("video").parent())[0].id);
          i = n;
        }
        return i;
      }
      onNode(t) {
        const e = t.detail;
        if (e.type == "UpdateState") {
          this.R = {
            paused: e.paused,
            time: e.time,
            loading: e.loading,
            adState: e.adState,
            actionsState: e.actionsState
          };
          this.st = e.metadata;
          this.O = e.updatedAt;
        } else if (e.type == "GetTitle") {
          this.W = e.pageTitle;
          this.V = e.updatedAt;
        } else if (e.type == "GetType") {
          this.H = e.VideoType;
          this.N = e.updatedAt;
        } else if (e.type == "GetEpData") {
          this.X = e.episodeData;
          this.G = e.updatedAt;
        } else if (e.type == "CheckSkipSupplemental") {
          this.U = e.updatedAt;
        } else if (e.type == "GetVideoData") {
          this.Z = e.updatedAt;
          this.q = e.videoLookupData;
        }
      }
      waitUpdatePageTitleAsync() {
        return Vi(this, undefined, undefined, function* () {
          const t = Date.now();
          window.postMessage({
            type: "GetPageTitle"
          }, "*");
          try {
            yield mi(() => this.V >= t, 500, 10)();
          } catch (t) {
            this.W = undefined;
          }
        });
      }
      waitUpdateVideoType() {
        return Vi(this, undefined, undefined, function* () {
          const t = Date.now();
          window.postMessage({
            type: "GetVideoType"
          }, "*");
          try {
            yield mi(() => this.N >= t, 500, 10)();
          } catch (t) {
            this.logError("unable to update video type", t);
            this.H = Li.NONE;
          }
        });
      }
      waitUpdateEpisodeData() {
        return Vi(this, undefined, undefined, function* () {
          const t = Date.now();
          window.postMessage({
            type: "GetEpisodeData"
          }, "*");
          try {
            yield mi(() => this.G >= t, 500, 10)();
          } catch (t) {
            this.X = undefined;
          }
        });
      }
      waitUpdateVideoLookupData() {
        return Vi(this, undefined, undefined, function* () {
          const t = Date.now();
          window.postMessage({
            type: "GetVideoLookupData"
          }, "*");
          try {
            yield mi(() => this.Z >= t, 500, 10)();
          } catch (t) {
            this.q = undefined;
          }
        });
      }
      waitSkipSupplemental() {
        return Vi(this, undefined, undefined, function* () {
          try {
            const t = Date.now();
            window.postMessage({
              type: "CheckSkipSupplemental"
            }, "*");
            yield mi(() => this.U >= t, 5000, 100)();
          } catch (t) {
            window.postMessage({
              type: "CheckSkipSupplemental"
            }, "*");
          }
        });
      }
      get playerMetaData() {
        return this.st;
      }
      waitUpdateAPIState() {
        var e;
        return Vi(this, undefined, undefined, function* () {
          const s = Date.now();
          window.postMessage({
            type: "GetState"
          }, "*");
          try {
            yield mi(() => this.O >= s, 500, 10)();
          } catch (s) {
            this.logError("unable to update API state", s);
            this.R = {
              paused: (e = this.getVideoElement()?.paused) !== null && e !== undefined && e,
              time: this.getVideoElement()?.currentTime ?? 0,
              loading: false,
              adState: this.R.adState,
              actionsState: this.R.actionsState
            };
            this.O = Date.now();
          }
        });
      }
      getUpdateSessionDataAsync() {
        return Vi(this, undefined, undefined, function* () {
          yield mi(() => this.getVideoElement() != null, 5000)();
          yield this.waitUpdateAPIState();
          return {
            state: this.R.paused ? xi.PAUSED : xi.PLAYING,
            lastKnownTime: this.R.time,
            lastKnownTimeUpdatedAt: this.O,
            bufferingState: this.R.loading
          };
        });
      }
      getPlayerState() {
        return Vi(this, undefined, undefined, function* () {
          yield this.waitUpdateAPIState();
          return this.R;
        });
      }
      ot() {
        const t = this.getVideoElement();
        if (t) {
          if (t.playbackRate != 1) {
            A("Resetting playback rate to 1");
            t.playbackRate = 1;
          }
        }
      }
      getStateAsync() {
        return Vi(this, undefined, undefined, function* () {
          yield this.waitUpdateAPIState();
          this.ot();
          let t = this.getPlaybackState();
          if (t === Ei.PLAYING || t === Ei.PAUSED) {
            t = this.R.paused ? Ei.PAUSED : Ei.PLAYING;
          }
          return {
            playbackState: t,
            playbackPositionMilliseconds: this.R.time
          };
        });
      }
      getInternalStreamingServiceName() {
        return Mi.NETFLIX;
      }
    }
    var Ni;
    var Gi = n(5089);
    var zi = n.n(Gi);
    class Zi extends t {
      constructor(t, e, n) {
        super(t, e, n);
        this.rt = n;
      }
    }
    (function (t) {
      t.BROADCAST = "brodadcast";
      t.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode";
      t.SEND_MESSAGE = "sendMessage";
      t.CONTENT_SCRIPT_READY = "contentScriptReady";
      t.CONTENT_SCRIPT_ERROR = "contentScriptError";
      t.TEARDOWN = "teardown";
      t.GET_SESSION_DATA = "getSessionData";
      t.SET_TYPING = "setTyping";
      t.SET_BUFFERING = "setBuffering";
      t.SET_WATCHING_ADS = "setWatchingAds";
      t.BROADCAST_USER_SETTINGS = "brodadcastUserSettings";
      t.SEND_REACTION = "sendReaction";
      t.SEND_GIF = "sendGIF";
      t.WEB_RTC = "webRTC";
      t.EVENT_SUCCESS = "eventSuccess";
      t.SELECT_PROVIDER = "selectProvider";
      t.REPORT_STREAM_POSITION = "reportStreamPosition";
    })(Ni ||= {});
    class Qi extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.SET_TYPING);
        this.data = n;
      }
    }
    class Wi extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.SEND_MESSAGE);
        this.data = n;
      }
    }
    class Yi extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.BROADCAST_USER_SETTINGS);
        this.data = n;
      }
    }
    class Ji extends e {
      constructor(t, e, n) {
        super(t, e, i.TEARDOWN);
        this.data = n;
      }
    }
    class Ki extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.SEND_REACTION);
        this.data = n;
      }
    }
    class Xi extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.SEND_GIF);
        this.data = n;
      }
    }
    function qi(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class ts {
      constructor() {
        this.resetTasks();
        this.ut = [];
        this.ct = 0;
        this.lt = Promise.resolve();
        this.ht = true;
      }
      createInstance() {
        return new ts();
      }
      pushTask(t, e) {
        if (!this.ht) {
          return;
        }
        const n = {
          action: t,
          name: e
        };
        if (this.ct === 0) {
          this.resetTasks();
        }
        this.ct = this.ut.push(n);
        this.lt = this.lt.then(() => {
          if (this.ut.includes(n) && this.ht) {
            return this.dt(n)().then(() => {
              this.ut.shift();
              this.ct -= 1;
            });
          }
        });
      }
      disable() {
        this.ht = false;
        this.resetTasks();
      }
      enable() {
        this.ht = true;
      }
      resetTasks() {
        this.lt = Promise.resolve();
        this.ut = [];
        this.ct = 0;
      }
      dt(t) {
        return function () {
          return qi(this, undefined, undefined, function* () {
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
        return this.ut.some(e => e.name === t);
      }
      removeTask(t) {
        this.ut = this.ut.filter((e, n) => e.name === t && n == 0 ? (console.error("Cannot filter active task"), true) : e.name !== t);
        this.ct = this.ut.length;
        console.log(this.ut);
      }
      getCurrentTasks() {
        return this.ut;
      }
    }
    const es = new ts();
    function ns(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const is = new class {
      setItemsAsync(t) {
        return ns(this, undefined, undefined, function* () {
          return new Promise((e, n) => {
            chrome.storage.local.set(t, () => {
              if (chrome.runtime.lastError) {
                n(new Error("Failed to write to chrome storage. Please refresh the page and try again"));
              } else {
                e();
              }
            });
          });
        });
      }
    }();
    Object.freeze(is);
    const ss = is;
    function os(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const rs = new class {
      getItemAsync(t) {
        return os(this, undefined, undefined, function* () {
          const n = yield chrome.storage.local.get(t);
          return n[t] ?? null;
        });
      }
      getItemsAsync(t) {
        return os(this, undefined, undefined, function* () {
          return new Promise((e, n) => {
            chrome.storage.local.get(t, t => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                n(new Error($i));
              } else {
                e(t);
              }
            });
          });
        });
      }
      getStorageUse() {
        return os(this, undefined, undefined, function* () {
          return new Promise((t, e) => {
            chrome.storage.local.getBytesInUse(null, n => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                e(new Error($i));
              } else {
                t(n);
              }
            });
          });
        });
      }
      getAllItemsAsync() {
        return os(this, undefined, undefined, function* () {
          return new Promise((t, e) => {
            chrome.storage.local.get(null, n => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                e(new Error($i));
              } else {
                t(n);
              }
            });
          });
        });
      }
    }();
    Object.freeze(rs);
    const as = rs;
    var us;
    var cs = new Uint8Array(16);
    function ls() {
      if (!us && !(us = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto))) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
      return us(cs);
    }
    const hs = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const ds = function (t) {
      return typeof t == "string" && hs.test(t);
    };
    var ps = [];
    for (var fs = 0; fs < 256; ++fs) {
      ps.push((fs + 256).toString(16).substr(1));
    }
    const Ds = function (t, e = 0) {
      var n = (ps[t[e + 0]] + ps[t[e + 1]] + ps[t[e + 2]] + ps[t[e + 3]] + "-" + ps[t[e + 4]] + ps[t[e + 5]] + "-" + ps[t[e + 6]] + ps[t[e + 7]] + "-" + ps[t[e + 8]] + ps[t[e + 9]] + "-" + ps[t[e + 10]] + ps[t[e + 11]] + ps[t[e + 12]] + ps[t[e + 13]] + ps[t[e + 14]] + ps[t[e + 15]]).toLowerCase();
      if (!ds(n)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return n;
    };
    const vs = function (t, e, n) {
      var i = (t = t || {}).random || (t.rng || ls)();
      i[6] = i[6] & 15 | 64;
      i[8] = i[8] & 63 | 128;
      if (e) {
        n = n || 0;
        for (var s = 0; s < 16; ++s) {
          e[n + s] = i[s];
        }
        return e;
      }
      return Ds(i);
    };
    const gs = "data-tp-in-party";
    function ms(t) {
      if (t) {
        document.documentElement.setAttribute(gs, "true");
      } else {
        document.documentElement.removeAttribute(gs);
      }
    }
    var ws;
    (function (t) {
      t.SET_USER_LIST = "setUserList";
      t.SET_CONNECTION_ID = "setConnectionId";
      t.LOAD_INIT_DATA = "loadInitData";
      t.SET_PAGE_TITLE = "setPageTitle";
      t.ADD_GIF_MESSAGE = "addGifMessage";
      t.SIDEBAR_MESSAGING_READY = "sidebarMessagingReady";
      t.RESET_VIEW = "resetView";
      t.HIDE_CHAT = "hideChat";
      t.ON_UPDATE_SETTINGS = "onUpdateSettings";
      t.PREVIEW_REACTION = "previewReaction";
      t.UPDATE_SETTINGS = "updateSettings";
      t.UPDATE_ACTIONS_STATE = "updateActionsState";
      t.GO_NEXT_EPISODE = "goNextEpisode";
      t.SET_REACTIONS_ACTIVE = "setReactionsActive";
      t.ON_FOCUS = "onSidebarFocus";
      t.SET_USER_ICON_URL = "setUserIconUrl";
      t.SET_USER_ICON_FRAME_URL = "setUserIconFrameUrl";
      t.ADD_MESSAGE = "addMessage";
      t.CLEAR_MESSAGES = "clearMessages";
      t.SET_PRESENCE_MESSAGE = "setPresenceMessage";
      t.ON_PAGE_CLICK = "onPageClick";
      t.ON_PURCHASE = "onPurchase";
      t.DISPLAY_MODAL = "displayModal";
      t.OPEN_TAB = "openTab";
      t.ON_CHROME_STORAGE_UPDATE = "onChromeStorageUpdate";
      t.ON_WEB_RTC = "onWebRTC";
      t.SHARE_SHEET = "shareSheet";
      t.TRACK_DATA = "trackData";
      t.RESET_CHAT_WINDOW = "resetChatWindow";
      t.RECEIVED_MESSAGE = "receivedMessage";
    })(ws ||= {});
    const ys = 338;
    const bs = chrome.runtime.getURL("img/x-circle.svg");
    const Cs = "with-chat";
    const Fs = "tp-video";
    const _s = ["Batman.svg", "DeadPool.svg", "CptAmerica.svg", "Wolverine.svg", "IronMan.svg", "Goofy.svg", "Alien.svg", "Mulan.svg", "Snow-White.svg", "Poohbear.svg", "Sailormoon.svg", "Sailor Cat.svg", "Pizza.svg", "Cookie.svg", "Chocobar.svg", "hotdog.svg", "Hamburger.svg", "Popcorn.svg", "IceCream.svg", "ChickenLeg.svg"];
    const Es = ["General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg"];
    const xs = ["General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg", "Christmas/angel.svg", "Christmas/bell.svg", "Christmas/box.svg", "Christmas/cane.svg", "Christmas/flake.svg", "Christmas/gingerbread.svg", "Christmas/gingerbread_F.svg", "Christmas/gingerbread_M.svg", "Christmas/gloves_blue.svg", "Christmas/gloves_red.svg", "Christmas/hat.svg", "Christmas/ornament.svg", "Christmas/raindeer.svg", "Christmas/reef.svg", "Christmas/santa_F.svg", "Christmas/santa_M.svg", "Christmas/snowglobe.svg", "Christmas/snowman.svg", "Christmas/sock.svg", "Christmas/tree.svg", "Halloween/bats.svg", "Halloween/candy_corn.svg", "Halloween/cat_black.svg", "Halloween/cat_white.svg", "Halloween/coffin.svg", "Halloween/eye_ball.svg", "Halloween/face_angry.svg", "Halloween/face_evil.svg", "Halloween/face_silly.svg", "Halloween/face_smile.svg", "Halloween/frankenstein.svg", "Halloween/ghost_F.svg", "Halloween/ghost_M.svg", "Halloween/gravestone.svg", "Halloween/lollipop.svg", "Halloween/moon.svg", "Halloween/mummy.svg", "Halloween/potion.svg", "Halloween/pumpkin.svg", "Halloween/pumpkin_witch.svg", "Halloween/skull_brain.svg", "Halloween/skull_candy.svg", "Halloween/skull_girl.svg", "Halloween/witch_hat.svg", "Thanksgiving/acorn.svg", "Thanksgiving/bread.svg", "Thanksgiving/candles.svg", "Thanksgiving/corn.svg", "Thanksgiving/drinks.svg", "Thanksgiving/maple_leaf.svg", "Thanksgiving/plate_chicken.svg", "Thanksgiving/pumpkin.svg", "Thanksgiving/pumpkin_pie.svg", "Thanksgiving/slice_pie.svg", "Thanksgiving/sun_flower.svg", "Thanksgiving/turkey_face.svg"];
    const ks = {
      General: ["Alien.svg", "Batman.svg", "ChickenLeg.svg", "Chocobar.svg", "Cookie.svg", "CptAmerica.svg", "DeadPool.svg", "Goofy.svg", "Hamburger.svg", "hotdog.svg", "IceCream.svg", "IronMan.svg", "Mulan.svg", "Pizza.svg", "Poohbear.svg", "Popcorn.svg", "Sailor Cat.svg", "Sailormoon.svg", "Snow-White.svg", "Wolverine.svg"],
      Christmas: ["angel.svg", "bell.svg", "box.svg", "cane.svg", "flake.svg", "gingerbread.svg", "gingerbread_F.svg", "gingerbread_M.svg", "gloves_blue.svg", "gloves_red.svg", "hat.svg", "ornament.svg", "raindeer.svg", "reef.svg", "santa_F.svg", "santa_M.svg", "snowglobe.svg", "snowman.svg", "sock.svg", "tree.svg"],
      Halloween: ["bats.svg", "candy_corn.svg", "cat_black.svg", "cat_white.svg", "coffin.svg", "eye_ball.svg", "face_angry.svg", "face_evil.svg", "face_silly.svg", "face_smile.svg", "frankenstein.svg", "ghost_F.svg", "ghost_M.svg", "gravestone.svg", "lollipop.svg", "moon.svg", "mummy.svg", "potion.svg", "pumpkin.svg", "pumpkin_witch.svg", "skull_brain.svg", "skull_candy.svg", "skull_girl.svg", "witch_hat.svg"],
      Thanksgiving: ["acorn.svg", "bread.svg", "candles.svg", "corn.svg", "drinks.svg", "maple_leaf.svg", "plate_chicken.svg", "pumpkin.svg", "pumpkin_pie.svg", "slice_pie.svg", "sun_flower.svg", "turkey_face.svg"]
    };
    const As = {
      General: ["candy_corn.webp", "cat_ears.webp", "devil_horn.webp", "jack_o_lantern.webp", "spooky_bat.webp", "spooky_cat.webp", "spooky_coffin.webp", "spooky_ghost_night.webp", "spooky_pumpkin_eye.webp", "spooky_reaper_circle.webp", "spooky_reaper_walking.webp", "spooky_skull.webp", "spooky_witch_hat.webp", "vampire_teeth.webp"]
    };
    function Is(t) {
      if (t) {
        return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/[\r\n]{3,}/gm, "\n\n").replace(k, `<span style="font-size: ${function (t) {
          let e = 16;
          const n = t.replace(k, "").replace(/[\uFE0F]/g, "");
          const i = ((t || "").match(k) || []).length;
          if (n.length === 0 && i <= 3) {
            e = 32;
          }
          return e;
        }(t)}px">$&</span>`);
      } else {
        return t;
      }
    }
    const Ss = {
      General: function () {
        return true;
      },
      Christmas: function () {
        return new Date().getMonth() === 11;
      },
      Halloween: function () {
        const t = new Date();
        return t.getMonth() === 9 && t.getDate() >= 24;
      },
      Thanksgiving: function () {
        const t = new Date();
        return t.getMonth() === 10 && t.getDate() >= 18 && t.getDate() <= 28 || t.getMonth() === 9 && t.getDate() >= 8 && t.getDate() <= 14;
      }
    };
    function Bs(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const js = new class {
      isUserIconValid(t) {
        if (!t) {
          return false;
        }
        if (t.includes("/profile-images/")) {
          return true;
        }
        if (t.includes("?newIconUrl=")) {
          const [e, n] = t.split("?newIconUrl=");
          return xs.includes(n) && _s.includes(e);
        }
        return xs.includes(t);
      }
      isUserIdValid(t) {
        return typeof t == "string" && (t.length === 16 || t.length === 36);
      }
      isUserNickNameValid(t) {
        return typeof t == "string" && t.length > 0 && t.length < 20;
      }
      getDefaultUserIcon() {
        const t = Math.floor(Math.random() * Es.length);
        return Es[t];
      }
      getDefaultUserNickName() {
        return "";
      }
      ft(t) {
        return Bs(this, undefined, undefined, function* () {
          try {
            yield ss.setItemsAsync(t);
          } catch (t) {}
        });
      }
      getValidatedChromeStorageDataAsync() {
        return Bs(this, undefined, undefined, function* () {
          const t = yield as.getAllItemsAsync();
          const e = this.validateStorageData(t);
          if (JSON.stringify(t) !== JSON.stringify(e)) {
            this.ft(e);
          }
          return e;
        });
      }
      validateStorageData(t) {
        var e;
        const n = typeof t == "object" ? Object.assign({}, t) : {};
        if ((e = n.userIcon) === null || e === undefined ? undefined : e.includes("?newIconUrl=")) {
          n.userIcon = n.userIcon.split("?newIconUrl=")[1];
        }
        if (!this.isUserIconValid(n.userIcon)) {
          n.userIcon = this.getDefaultUserIcon();
        }
        if (!this.isUserNickNameValid(n.userNickname)) {
          n.userNickname = this.getDefaultUserNickName();
        }
        return n;
      }
    }();
    Object.freeze(js);
    const $s = js;
    const Ts = 2500;
    const Ps = 1000;
    const Ms = 7200000;
    const Ls = 120000;
    const Rs = {
      title: "Teleparty | Disconnected from party",
      content: "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
      buttonTitle: "Return to Party"
    };
    const Os = {
      title: "Teleparty | Are you still there?",
      content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
    };
    const Us = {
      title: "Teleparty | Disconnected from party",
      content: "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
      buttonTitle: "Return to Party"
    };
    const Vs = {
      title: "Teleparty | Disconnected from party",
      content: "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
      buttonTitle: "Return to Party"
    };
    function Hs(t, e) {
      Ns();
      const n = e ? function (t) {
        return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${bs}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
      }(t) : function (t) {
        return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${bs}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
      }(t);
      document.body.insertAdjacentHTML("afterbegin", n);
      jQuery("#alert-x-btn").click(() => {
        Ns();
      });
      if (e) {
        jQuery("#alert-return-btn").click(() => {
          Ns();
          window.location.href = e;
        });
      }
    }
    function Ns() {
      const t = document.querySelector("#alert-dialog-wrapper");
      if (t) {
        t.remove();
      }
    }
    function Gs(t, e = "") {
      return `\n\n      <style tpInjected data-tp-sidebar-css="1">\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 338px) !important;\n      }\n\n      .with-chat-absolute {\n        position: absolute !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      [data-chat-visible="true"] {\n        left: 0px !important;\n        width: calc(100% - 338px) !important;\n        position: absolute !important;\n    }\n\n      .tp-layout-wrapper {\n        display: flex;\n        align-items: stretch;\n      }\n\n      .tp-video-region {\n        flex: 1 1 auto;\n      }\n\n      .tp-chat-region {\n        flex: 0 0 338px;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected data-tp-sidebar-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/chat.css")}">\n    <link tpInjected data-tp-sidebar-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    <div id="tp-layout-wrapper" data-tp-layout="video+chat">\n      <div class="tp-video-region"></div>\n      <div class="tp-chat-region">\n        ${t}\n      </div>\n    </div>\n  `;
    }
    const zs = {
      showAlert: false
    };
    const Zs = {
      showAlert: true,
      alertModal: {
        title: "Teleparty | Disconnected from party",
        content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
        buttonTitle: "Return to Party"
      }
    };
    const Qs = {
      showAlert: true,
      alertModal: {
        title: "Teleparty | Disconnected from party",
        content: "It looks like you left the party. You can click the button below to rejoin the party.",
        buttonTitle: "Return to Party"
      }
    };
    var Ws;
    (function (t) {
      t.HEART = "heart";
      t.ANGRY = "angry";
      t.FIRE = "fire";
      t.LAUGH = "laugh";
      t.CRY = "cry";
      t.SURPRISE = "surprise";
    })(Ws ||= {});
    const Ys = t => e => {
      var n;
      if (t.length) {
        const i = document.querySelector(t);
        const s = (n = i == null ? undefined : i.shadowRoot) === null || n === undefined ? undefined : n.querySelector(e);
        if (s) {
          return jQuery(s);
        } else {
          return jQuery();
        }
      }
      return jQuery(e);
    };
    function Js(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class Ks {
      constructor(t, e) {
        this.Dt = this.vt.bind(this);
        this.gt = this.resetIdleTimer.bind(this);
        this.wt = t => {
          if (t.data === "TP_EMOJI_REQ_RELOAD") {
            this.updateFrequentlyUsed();
          }
          if (t.data && t.data.type === "emoji-click") {
            this.yt(t.data);
          }
        };
        this.bt = t => {
          if (t.target === this.Ct("#chat-input")[0] || t.target === this.Ct("#nickname-edit")[0]) {
            t.stopImmediatePropagation();
          }
        };
        this.Ft = t => {
          this._t.onVideoClick();
          const e = t.target;
          let n = e.id !== "" ? e.id : e.className;
          n = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : n;
          const i = {
            name: "user_click",
            component: {
              name: n,
              type: e.nodeName,
              origin: "other"
            }
          };
          const s = new o(u, r, i);
          S.m(s);
          if (t.target !== this.Ct("emoji-picker")[0] && t.target !== this.Ct("#chat-input")[0] && this.Ct("#emoji-picker-container") && !this.Ct("#emoji-picker-container").is(":hidden")) {
            this._t.toggleEmojiClicker();
          }
          if (t.target instanceof HTMLElement && this.Ct("#gif-picker-container").length && this.Ct("#gif-picker-container")[0] && !this.Ct("#gif-picker-container")[0].contains(t.target) && t.target !== this.Ct("#chat-input")[0] && !this.Ct("#gif-picker-container").is(":hidden") && t.target.className !== "category-img") {
            this._t.toggleGIFs();
          }
        };
        this.yt = t => {
          console.log("on Emoji Click");
          const e = this.Ct("#chat-input")[0];
          const n = t.detail.unicode;
          const i = new o(u, r, {
            name: "user_click",
            component: {
              name: "chat_input_container-emoji_picker-emoji",
              type: n
            }
          });
          S.m(i);
          const s = new o(u, r, {
            eventType: `emoji-click-${n}`,
            sessionId: this._t.getSessionId()
          });
          S.m(s);
          es.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
          const a = window.getSelection();
          if (!this.Ct("#chat-input").is(":focus") && e.lastChild) {
            const t = document.createRange();
            t.setStartAfter(e.lastChild);
            if (a != null) {
              a.removeAllRanges();
            }
            if (a != null) {
              a.addRange(t);
            }
          }
          this._t.focusChat();
          this.Et(n);
          if (e.scrollHeight - e.scrollTop <= e.clientHeight + 40) {
            e.scrollTop = e.scrollHeight;
          }
          this.xt();
          this._t.onInputChange();
        };
        this._t = t;
        this.Ct = Ys(e || "");
      }
      kt() {
        A("Idle Warning called");
        Hs(Os);
        const t = new o(u, r, {
          name: "party_warning",
          action: {
            description: "user has been warned for being idle",
            reason: "user was idle for " + Ls + " time in milliseconds."
          }
        });
        S.m(t);
        const e = new o(u, r, {
          eventType: "idle-warn-2hr",
          sessionId: this._t.getSessionId()
        });
        S.m(e);
        this.At = setTimeout(this.It.bind(this), Ls);
      }
      It() {
        A("Idle kick called");
        const t = new o(u, r, {
          name: "party_kick",
          action: {
            description: "user has been kicked for being idle",
            reason: "user was idle for " + Ms + " time in milliseconds."
          }
        });
        const e = new Ji(u, r, Zs);
        S.m(t);
        S.m(e);
      }
      resetIdleTimer() {
        if (this.St) {
          clearTimeout(this.St);
        }
        if (this.At) {
          Ns();
          clearTimeout(this.At);
        }
        this.St = setTimeout(this.kt.bind(this), Ms);
      }
      Bt() {
        this.St = setTimeout(this.kt.bind(this), Ms);
        window.onmousemove = t => {
          if (t.isTrusted) {
            this.gt();
          }
        };
        window.onfocus = () => this.gt();
        window.onmousedown = () => this.gt();
        window.ontouchstart = () => this.gt();
        window.onkeydown = () => this.gt();
      }
      jt() {
        if (this.St) {
          clearTimeout(this.St);
        }
        if (this.At) {
          clearTimeout(this.At);
        }
        window.onmousemove = null;
        window.onmousedown = null;
        window.ontouchstart = null;
        window.onkeydown = null;
      }
      startListening() {
        A("Listening for chat events");
        this.Bt();
        this.$t();
        this.initWindowListeners();
      }
      stopListening() {
        this.Tt();
        this.jt();
        this.Pt();
      }
      vt() {
        this._t.clearUnreadCount();
      }
      Mt(t) {
        console.log("Pasting");
        t.preventDefault();
        if (t.clipboardData) {
          const e = t.clipboardData.getData("text/plain");
          document.execCommand("insertHTML", false, e);
        }
        this._t.onInputChange();
      }
      initWindowListeners() {
        jQuery(window).on("focus", this.Dt);
        window.addEventListener("message", this.wt);
        document.addEventListener("dragstart", this.Lt.bind(this));
        document.addEventListener("webkitfullscreenchange", this._t.onFullScreen);
        document.addEventListener("fullscreenchange", this._t.onFullScreen);
        document.addEventListener("keydown", this.bt, true);
        document.addEventListener("emoji-click", this.yt);
        document.addEventListener("click", this.Ft);
      }
      $t() {
        jQuery(window).on("focus", this.Dt);
        this.Ct("#party-tab").on("click", this._t.togglePartyTab.bind(this._t));
        this.Ct("#friends-tab").on("click", this._t.toggleFriendsTab.bind(this._t));
        this.Ct(".user-icon").on("click", this._t.toggleLargeUserIconButton.bind(this._t));
        this.Ct("#user-icon").on("click", this._t.toggleIconContainer.bind(this._t));
        this.Ct("#link-icon").on("click", this._t.linkIconListener.bind(this._t));
        this.Ct("#reset-icon").on("click", this._t.resetIconListener.bind(this._t));
        this.Ct(".image-button").on("click", this._t.userIconSelectorListener.bind(this._t));
        this.Ct("#chat-input-container").on("keydown", this._t.onChatKeyDown.bind(this._t));
        this.Ct("#nickname-edit").on("keydown", this._t.onChatKeyDown.bind(this._t));
        this.Ct("#chat-input").on("keypress", this._t.onChatKeyPress.bind(this._t));
        this.Ct("#chat-input").on("input", this._t.onInputChange.bind(this._t));
        this.Ct("#gif-search").on("keyup", this._t.onGifSearch.bind(this._t));
        this.Ct("#saveChanges").on("click", this._t.saveChangesListener.bind(this._t));
        this.Ct("#cancelNickname").on("click", this._t.cancelNicknameListener.bind(this._t));
        this.Ct("#chat-wrapper").on("mouseup", this._t.cancelEvent);
        this.Ct("#chat-wrapper").on("mousedown", this._t.cancelEvent);
        this.Ct("#chat-wrapper").on("pointerup", this._t.cancelEvent);
        this.Ct("#chat-wrapper").on("pointerdown", this._t.cancelEvent);
        this.Ct("#chat-wrapper").on("mousemove", this._t.cancelEvent);
        this.Ct("#chat-wrapper").on("pointermove", this._t.cancelEvent);
        this.Ct("#chat-wrapper").on("keyup", this._t.onChatKeyUp.bind(this._t));
        this.Ct("#emoji-picker-btn").on("click", this._t.addEmojiPicker.bind(this._t));
        this.Ct("#gif-btn").on("click", this._t.addGifPicker.bind(this._t));
        this.Ct(".gif-img").on("click", this._t.clickGif.bind(this._t));
        this.Ct(".gif-results").on("click", "video, img", this._t.clickGif.bind(this._t));
        this.Ct("#category-container").on("click", "video", this._t.clickGif.bind(this._t));
        this.Ct("#gif-input-back").on("click", this._t.resetGif.bind(this._t));
        this.Ct("#reaction-btn").on("click", this._t.addReactionTab.bind(this._t));
        this.Ct("#chat-input-container").on("click", this.Rt.bind(this));
        this.Ct("#chat-input").on("input", this.xt.bind(this));
        this.Ct("#chat-input").on("drop", this.Ot.bind(this));
        this.Ct("#gif-results-wrapper").on("scroll", this._t.onScrollToBottom.bind(this._t));
        this.Ut();
        document.addEventListener("keydown", this.bt.bind(this), true);
        this._t.initCustomListeners();
      }
      Ut() {
        this.Ct("#tp-heart-button").on("click", () => {
          this._t.onReactionClicked(Ws.HEART);
        });
        this.Ct("#tp-cry-button").on("click", () => {
          this._t.onReactionClicked(Ws.CRY);
        });
        this.Ct("#tp-angry-button").on("click", () => {
          this._t.onReactionClicked(Ws.ANGRY);
        });
        this.Ct("#tp-surprise-button").on("click", () => {
          this._t.onReactionClicked(Ws.SURPRISE);
        });
        this.Ct("#tp-laugh-button").on("click", () => {
          this._t.onReactionClicked(Ws.LAUGH);
        });
        this.Ct("#tp-fire-button").on("click", () => {
          this._t.onReactionClicked(Ws.FIRE);
        });
      }
      xt() {
        const n = this.Ct("#bottom-chat-controls").outerHeight(true) ?? parseInt(this.Ct("#bottom-chat-controls").css("height"));
        const i = parseInt(this.Ct("#chat-input-container").css("padding-bottom"));
        const s = (this.Ct("#chat-input").outerHeight(true) ?? parseInt(this.Ct("#chat-input").css("height"))) + n + i;
        this.Ct("#emoji-picker-container").css({
          bottom: s
        });
        this.Ct("#gif-picker-container").css({
          bottom: s
        });
      }
      Ot(t) {
        t.preventDefault();
      }
      Lt(t) {
        t.preventDefault();
      }
      Rt(t) {
        if (t.target === this.Ct("#chat-input")[0]) {
          this._t.focusChat();
        }
      }
      Et(t) {
        let e;
        let n;
        if (window.getSelection && (e = window.getSelection(), e && e.getRangeAt && e.rangeCount)) {
          n = e.getRangeAt(0);
          n.deleteContents();
          const i = document.createElement("span");
          i.className = "inTextEmoji";
          i.innerHTML = t;
          const s = document.createDocumentFragment();
          let o;
          let r;
          while (o = i.firstChild) {
            r = s.appendChild(o);
          }
          n.insertNode(s);
          if (r) {
            n = n.cloneRange();
            n.setStartAfter(r);
            n.collapse(false);
            e.removeAllRanges();
            e.addRange(n);
          }
        }
      }
      Vt(t) {
        return typeof t == "object" && t != null && "unicode" in t;
      }
      Ht(t) {
        if (!Array.isArray(t)) {
          return false;
        }
        if (t.length === 0) {
          return false;
        }
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          if (!this.Vt(n)) {
            return false;
          }
        }
        return true;
      }
      updateFrequentlyUsed(t) {
        return Js(this, undefined, undefined, function* () {
          const n = yield as.getItemsAsync([F]);
          let i = n[F] ?? x;
          if (!this.Ht(i)) {
            i = x;
          }
          if (Array.isArray(i)) {
            if (t) {
              i = i.filter(e => e.unicode != t.unicode);
              i.unshift(t);
              i = i.slice(0, 24);
            }
            yield ss.setItemsAsync({
              [F]: i
            });
            window.postMessage({
              type: "TP_FREQ_USED",
              data: i
            }, "*");
          }
        });
      }
      Pt() {
        jQuery(window).off("focus", this.Dt);
        document.removeEventListener("emoji-click", this.yt);
        document.removeEventListener("keydown", this.bt, true);
        document.removeEventListener("click", this.Ft);
        window.removeEventListener("message", this.wt);
        document.removeEventListener("webkitfullscreenchange", this._t.onFullScreen);
        document.removeEventListener("fullscreenchange", this._t.onFullScreen);
      }
      Tt() {
        this.Ct(".user-icon").off();
        this.Ct("#user-icon").off();
        this.Ct("#link-icon").off();
        this.Ct(".image-button").off();
        this.Ct("#chat-input").off();
        this.Ct("#saveChanges").off();
        this.Ct("#cancelNickname").off();
        this.Ct("#chat-input-container").off();
        this.Ct("#chat-wrapper").off();
      }
    }
    class Xs {
      constructor(t) {
        this._t = t;
        this.Nt = [];
        this.Gt = 0;
        this.W = document.title;
        this.zt = 0;
        this.Zt = new Map();
        this.Qt = new Map();
        this.Wt = new Map();
        this.Yt = [];
        this.Jt = [];
        this.Kt = "";
        this.Xt = "";
        A("Message Controller");
      }
      qt(t, e, n, i) {
        return jQuery(`\n            <div class="msg-container ${!i && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${i ? `<img src="${Is(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-txt message${n.isSystemMessage ? "-system" : "-txt"}">\n                    ${i ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""}\n                    <p data-tp-id="chat_history_container-message">${Is(n.body).trim()}</p>\n                </div>\n            </div>\n          `);
      }
      te(t, e, n, i) {
        const s = 200 / (n.gifObject.media.full.dims[0] / n.gifObject.media.full.dims[1]);
        const o = 200 / (n.gifObject.media.fullMobile.dims[0] / n.gifObject.media.fullMobile.dims[1]);
        const r = this._t.shouldUseVideoGIF();
        return jQuery(`\n            <div class="msg-container ${!i && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${i ? `<img src="${Is(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${i ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""}  \n            ${r ? `<video src="${Is(n.gifObject.media.full.url)}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${Is(n.gifObject.media.fullMobile.url)}"  height="${o}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`}     \n                </div>\n            </div>\n          `);
      }
      ee(t, e, n) {
        return jQuery(`\n            <div class="msg ${!n && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    ${n ? `<img src="${Is(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                </div>\n                <div class="message${e.isSystemMessage ? "-system" : "-txt"}">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${Is(e.body).trim()}</p>\n                </div>\n            </div>\n        `);
      }
      ne(t, e, n) {
        const i = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]);
        const s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]);
        const o = this._t.shouldUseVideoGIF();
        return jQuery(`\n            <div class="msg-container ${!n && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${n ? `<img src="${Is(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${o ? `<video src="${Is(e.gifObject.media.full.url)}" data-tp-id="chat_history_container-gif" height="${i}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${Is(e.gifObject.media.fullMobile.url)}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`}\n                </div>\n            </div>\n          `);
      }
      ie(t, e, n, i, s) {
        t.appendTo(jQuery("#chat-history"));
        const o = t[0];
        o.se = e.permId;
        o.oe = n;
        o.re = i;
        o.ae = e;
        o.ue = s;
      }
      reloadMessages() {
        this._t.queueMessageForFrame(ws.CLEAR_MESSAGES, "");
        for (const t of this.Nt) {
          this._t.queueMessageForFrame(ws.ADD_MESSAGE, {
            originalMessage: t,
            userIcon: this.getUserIconURL(t.permId, t.userIcon),
            userNickname: this.getUserNickname(t.permId, t.userNickname),
            userIconFrame: this.getUserIconFrameURL(t.permId, t.userIconFrame)
          });
        }
      }
      ce(t, e) {
        if (Math.abs(t.timestamp - e.timestamp) > 60000) {
          return false;
        }
        if (t.permId !== e.permId) {
          return false;
        }
        if ("isSystemMessage" in e && e.isSystemMessage && (e.body.includes("joined") || e.body.includes("left"))) {
          return false;
        }
        if ("gifObject" in t) {
          if ("isSystemMessage" in e && e.isSystemMessage) {
            return false;
          }
        } else {
          if (t.isSystemMessage && (t.body.includes("joined") || t.body.includes("left"))) {
            return false;
          }
          if ("gifObject" in e) {
            if (t.isSystemMessage) {
              return false;
            }
          } else if (t.isSystemMessage !== e.isSystemMessage) {
            return false;
          }
        }
        return true;
      }
      addMessage(t, e, n) {
        if (t.messageId && this.Nt.some(e => e.messageId === t.messageId)) {
          return;
        }
        if (n === undefined) {
          n = this.Nt.length;
        }
        if (t.isSystemMessage && t.body === "left" && (console.log("trying to add left message"), !t.userIcon && !this.Zt.has(t.permId))) {
          return;
        }
        if (n === 0 && t.isSystemMessage && t.body.includes("joined")) {
          return;
        }
        if (e && t.isSystemMessage && t.body.indexOf("updated their user icon") > -1) {
          if (t.userIcon) {
            this.setUserIcon(t.permId, t.userIcon);
          }
          if (t.userNickname) {
            this.setUserNickname(t.permId, t.userNickname);
          }
        }
        const i = this.Nt.slice(-1).pop();
        const s = i === undefined || !(n > 0) || !this.ce(i, t);
        this.Nt.push(t);
        const o = Object.assign({}, t);
        const r = this.getUserIconURL(o.permId, o.userIcon);
        const a = this.getUserNickname(o.permId, o.userNickname);
        const u = this.getUserIconFrameURL(o.permId, o.userIconFrame);
        this._t.queueMessageForFrame(ws.ADD_MESSAGE, {
          originalMessage: o,
          userIcon: r,
          userNickname: a,
          userIconFrame: u
        });
        const c = a === "" ? this.ee(r, o, s) : this.qt(r, a, o, s);
        this.ie(c, o, r, a, s);
        this.scrollToBottom();
        this.le();
      }
      addGif(t, e) {
        if (t.messageId && this.Nt.some(e => e.messageId === t.messageId)) {
          return;
        }
        if (e === undefined) {
          e = this.Nt.length;
        }
        const n = this.Nt.slice(-1).pop();
        const i = n === undefined || !(e > 0) || !this.ce(n, t);
        this.Nt.push(t);
        const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId);
        const o = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
        const r = this.getUserIconFrameURL(t.permId, t.userIconFrame);
        this._t.queueMessageForFrame(ws.ADD_MESSAGE, {
          originalMessage: t,
          userIcon: s,
          userNickname: o,
          userIconFrame: r
        });
        const a = o === "" ? this.ne(s, t, i) : this.te(s, o, t, i);
        a[0].he = true;
        this.ie(a, t, s, o, i);
        gi(100)().then(this.scrollToBottom.bind(this));
        this.le();
      }
      scrollToBottom() {
        jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
      }
      clearUnreadCount() {
        if (this.Gt > 0) {
          this.Gt = 0;
          document.title = this.W;
        }
      }
      le() {
        this.Gt += 1;
        this.zt += 1;
        if (!document.hasFocus()) {
          document.title = "(" + String(this.Gt) + ") " + this.W;
        }
      }
      getUserIconURL(t, e = "") {
        if (t && this.Zt.has(t)) {
          return this.Zt.get(t);
        }
        const n = Xs.parseIconSrc(e);
        const i = n !== undefined ? n : this.de();
        if (t) {
          this.Zt.set(t, i);
        }
        this.Jt.push(i);
        return i;
      }
      static parseIconSrc(t) {
        if (t.includes("/profile-images/")) {
          return t;
        }
        const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t;
        const n = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
        if (xs.includes(e)) {
          return chrome.runtime.getURL("img/icons/" + t);
        } else if (_s.includes(n)) {
          return chrome.runtime.getURL("img/icons/General/" + t);
        } else {
          return undefined;
        }
      }
      static getFullIconURL(t) {
        const e = Xs.parseIconSrc(t);
        if (e == null ? undefined : e.includes("/profile-images/")) {
          return d + e;
        } else {
          return e;
        }
      }
      getUserIconFrameURL(t, e = "") {
        const n = t ? this.Qt.get(t) : undefined;
        if (n !== undefined) {
          return n;
        } else {
          if (t && e) {
            this.Qt.set(t, e);
          }
          return e;
        }
      }
      setUserIconFrameForUser(t, e = "") {
        if (t) {
          this.Qt.set(t, e);
        }
        return e;
      }
      getUserNickname(t, e = "") {
        if (!this.Wt.has(t)) {
          this.Wt.set(t, e);
          this.Yt.push(e);
        }
        return Is(this.Wt.get(t));
      }
      de() {
        let t = chrome.runtime.getURL("img/icons/General/" + _s[Math.floor(Math.random() * _s.length)]);
        if (this.Jt.length < ks.General.length) {
          while (this.Jt.includes(t)) {
            t = chrome.runtime.getURL("img/icons/General/" + _s[Math.floor(Math.random() * _s.length)]);
          }
        }
        return t;
      }
      pe(t) {
        const e = t[0];
        const n = e.se;
        let i = e.oe;
        if (n && this.getUserIconURL(n) !== i) {
          i = this.getUserIconURL(n);
          t.find("img").attr("src", i);
          e.oe = i;
        }
        const s = e.re;
        if (n && i) {
          const o = this.getUserNickname(n);
          if (o !== s) {
            const s = e.ae;
            const r = e.ue;
            let a;
            if (e.he && s && "gifObject" in s && r) {
              a = o == "" ? this.ne(i, s, r) : this.te(i, o, s, r);
            }
            if (!e.he && s && !("gifObject" in s) && r) {
              a = o == "" ? this.ee(i, s, r) : this.qt(i, o, s, r);
            }
            if (a) {
              t.replaceWith(a);
              const e = a[0];
              e.se = n;
              e.oe = i;
              e.re = o;
              e.ae = s;
              e.ue = r;
            }
          }
        }
      }
      setUserIconUrl(t) {
        this.Kt = t;
        this._t.queueMessageForFrame(ws.SET_USER_ICON_URL, t);
      }
      setUserIconFrameUrl(t) {
        this.Xt = t;
        this._t.queueMessageForFrame(ws.SET_USER_ICON_FRAME_URL, t);
      }
      renderSidebar() {
        jQuery("#user-icon img").attr("src", this.Kt);
        jQuery(".user-icon img").attr("src", this.Kt);
        const t = jQuery(".msg");
        for (let e = 0; e < t.length; e++) {
          this.pe(jQuery(t[e]));
        }
        const e = jQuery(".msg-container");
        for (let t = 0; t < e.length; t++) {
          this.pe(jQuery(e[t]));
        }
        if (this._t.isChatFrameActive()) {
          this.reloadMessages();
        }
      }
      fe(t) {
        let e = null;
        if (t) {
          if (t.includes("/profile-images/")) {
            return t;
          }
          if (t.includes("?newIconUrl=")) {
            const n = t.split("?newIconUrl=");
            const i = n[1];
            const s = n[0];
            if (xs.includes(i)) {
              e = chrome.runtime.getURL(`img/icons/${i}`);
            } else if (_s.includes(s)) {
              e = chrome.runtime.getURL(`img/icons/General/${s}`);
            }
          } else if (xs.includes(t)) {
            e = chrome.runtime.getURL(`img/icons/${t}`);
          } else if (_s.includes(t)) {
            e = chrome.runtime.getURL(`img/icons/General/${t}`);
          }
        }
        if (e === null) {
          let t = ks.General.filter(t => !this.Jt.includes(t));
          if (t.length === 0) {
            t = ks.General;
          }
          const n = t[Math.floor(Math.random() * t.length)];
          e = chrome.runtime.getURL(`/img/icons/General/${n}`);
        }
        return e;
      }
      setUserIcon(t, e) {
        const n = this.fe(e);
        this.Zt.set(t, n);
        this.Jt.push(n);
        this.renderSidebar();
      }
      setUserNickname(t, e) {
        const n = Is(e);
        this.Wt.set(t, n);
        this.Yt.push(n);
        this.renderSidebar();
      }
      updateUserData(t, e, n, i) {
        const s = this.fe(e);
        this.Zt.set(t, s);
        this.setUserIconFrameForUser(t, i);
        this.Jt.push(s);
        this.Wt.set(t, n);
        this.Yt.push(n);
        this.renderSidebar();
      }
      addYoutubePromo() {
        jQuery(`\n        <div class="msg-container">\n            <div class="msg-txt message-system">\n                <div style="width:100%; height: 100px">\n                    <img data-tp-id="tp_youtube_promo" style="width: 100%;height: 100%;object-fit: contain;cursor:pointer !important;" src="${chrome.runtime.getURL("img/youtube_promo.jpg")}" \n                    onclick="window.open('https://teleparty.com/youtube')"\n                    />\n                </div>\n            </div>\n        </div>\n        `).prependTo(jQuery("#chat-history"));
      }
      addReviewMessage() {
        jQuery("\n          <div class=\"msg-container\">\n          <div class=\"msg-txt message-system\" style=\"width:100%\">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id=\"reviewLink\" href=\"https://chromewebstore.google.com/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews\" style=\"display:inline;color:red;text-decoration:underline;\" target=\"none\">here!</a>\n          </p>\n          </div>\n          </div>\n          ").appendTo(jQuery("#chat-history"));
        const t = new o(u, r, {
          name: "review-shown",
          action: {
            description: "review was shown on chrome",
            reason: "review was shown."
          }
        });
        S.m(t);
        const e = {
          eventType: "review-shown-chrome",
          sessionId: this._t.getSessionId()
        };
        const n = new o(u, r, e);
        S.m(n);
        jQuery("#reviewLink").click(() => {
          chrome.storage.local.set({
            reviewClicked: true
          });
          const t = new o(u, r, {
            name: "review-clicked",
            action: {
              description: "review was clicked on chrome",
              reason: "review was clicked."
            }
          });
          S.m(t);
          const e = {
            eventType: "review-clicked-chrome",
            sessionId: this._t.getSessionId()
          };
          const n = new o(u, r, e);
          S.m(n);
        });
      }
      getMessages(t = false) {
        if (t) {
          return this.Nt.filter(t => t.isSystemMessage);
        } else {
          return this.Nt;
        }
      }
    }
    class qs {
      constructor(t) {
        this.De = false;
        this.ve = false;
        this.ge = false;
        this._t = t;
      }
      setupPresenceIndicator() {
        this.De = false;
        this.ve = false;
        this.ge = false;
        this.we();
      }
      ye() {
        return jQuery("#presence-indicator");
      }
      setTypingPresenceVisible(t) {
        this.De = t;
        this.we();
      }
      setBufferingPresenceVisible(t) {
        this.ve = t;
        this.we();
      }
      setWatchingAdsPresenceVisible(t) {
        this.ge = t;
        this.we();
      }
      getWatchingAdsVisible() {
        return this.ge;
      }
      be() {
        if (this.ge) {
          return "People are watching ads...";
        } else if (this.De && this.ve) {
          return "People are typing and buffering...";
        } else if (this.De) {
          return "People are typing...";
        } else if (this.ve) {
          return "People are buffering...";
        } else {
          return "";
        }
      }
      we() {
        const t = this.be();
        this.ye().text(t);
        this._t.queueMessageForFrame(ws.SET_PRESENCE_MESSAGE, {
          text: t
        });
      }
    }
    var to;
    var eo;
    (function (t) {
      t.CREATE_SESSION = "createSession";
      t.SCHEDULE_SESSION = "scheduleSession";
      t.LOBBY_RELAY_SEND_CHAT = "lobbyRelaySendChat";
      t.LOBBY_RELAY_SET_TYPING = "lobbyRelaySetTyping";
      t.LOBBY_RELAY_BIND_JOIN = "lobbyRelayBindJoin";
      t.SELECT_PROVIDER = "selectProvider";
      t.REPORT_STREAM_POSITION = "reportStreamPosition";
      t.RE_INJECT = "reInject";
      t.GET_INIT_DATA = "getInitData";
      t.GET_INIT_USER_SETTINGS = "getInitUserSettings";
      t.IS_CONTENT_SCRIPT_READY = "isContentScriptReady";
      t.IS_VIDEO_READY = "isVideoReady";
      t.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE = "getCustomStartPartyButtonMessage";
      t.CHANGE_FIREBASE_PASSWORD = "changeFirebasePassword";
      t.SET_CHAT_VISIBLE = "setChatVisible";
      t.SET_USER_REACTIONS_DISABLED = "setUserReactionsDisabled";
      t.DISCONNECT = "teardown";
      t.CLOSE_POPUP = "closePopup";
      t.GET_SCHEDULED_EVENTS = "getScheduledEvents";
      t.GET_RECENT_SCHEDULED_EVENTS = "getRecentScheduledEvents";
      t.GOOGLE_SIGN_IN = "googleSignIn";
      t.EMAIL_SIGN_IN = "emailSignIn";
      t.FORGOT_PASSWORD = "forgotPassword";
      t.EMAIL_SIGN_UP = "emailSignUp";
      t.ON_GOOGLE_SIGN_IN = "OnGoogleSignIn";
      t.CREATE_SCHEDULED_EVENT = "createScheduledEvent";
      t.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent";
      t.SET_USER_STATUS = "SET_USER_STATUS";
      t.SIGN_IN_CREATE = "SIGN_IN_CREATE";
      t.REDIRECT_DATA_SET = "redirectDataSet";
      t.LOAD_REDIRECT_URL_FINISHED = "loadRedirectUrlFinished";
      t.RESET_PASSWORD = "resetPassword";
    })(to ||= {});
    class no extends t {
      constructor(t, e, n) {
        super(t, e, n);
        this.type = n;
      }
    }
    class io extends no {
      constructor(t, e, n = false) {
        super(t, e, to.GET_INIT_USER_SETTINGS);
        this.shouldRefresh = n;
        this.data = {
          shouldRefresh: n
        };
      }
    }
    class so extends e {
      constructor(t, e, n) {
        super(t, e, i.UPDATE_USER_SETTINGS);
        this.data = n;
      }
    }
    class oo extends e {
      constructor(t, e, n) {
        super(t, e, i.GET_DATA);
        this.data = n;
      }
    }
    (function (t) {
      t.PARTY = "party";
    })(eo ||= {});
    class ro extends Zi {
      constructor(t, e, n, i, s) {
        super(t, e, Ni.EVENT_SUCCESS);
        this.eventSuccess = n;
        this.extraArgs = s;
        this.loggerType = i;
      }
    }
    class ao extends e {
      constructor(t, e, n) {
        super(t, e, i.PARTY_INIT_TIMING);
        this.data = n;
      }
    }
    function uo(t) {
      try {
        const e = new ao(u, r, {
          marks: {
            [t]: Date.now()
          }
        });
        S.m(e).catch(() => {});
      } catch (t) {}
    }
    function co(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class lo {
      constructor(t) {
        this.Ce = false;
        this.Fe = 1;
        this._e = false;
        this.Ee = false;
        this.xe = "";
        this.ke = "";
        this.Ae = "0";
        this.Ie = "";
        this.Se = true;
        this.Be = false;
        this.je = 0;
        this.$e = [];
        this.Te = new ts();
        this.Pe = false;
        this.Me = undefined;
        this.Le = true;
        this.Re = this.Oe();
        this.Ue = this.Oe();
        this.Ve = false;
        this.He = false;
        this.Ne = [];
        this.Ge = 0;
        this.ze = 0;
        this.Ze = false;
        this.logEvent = t => {
          const e = new o(u, r, t);
          S.m(e);
        };
        this.checkInitReactionContainer = () => {
          as.getItemsAsync([w]).then(t => {
            if (t[w] === true || t[w] === undefined) {
              this.showReactionHolder();
            }
          });
        };
        this.onSidebarFocus = () => {
          var t;
          if ((t = this.Qe) !== null && t !== undefined) {
            t.hideMessageIndicator();
          }
        };
        this.setReactionsActive = t => {
          this.Te.pushTask(() => ss.setItemsAsync({
            [w]: t.active
          }), "setReactionsActive");
        };
        this.onFullScreen = () => {
          var t;
          this.scrollToBottom();
          if (document.fullscreenElement || document.webkitIsFullScreen) {
            this.logEvent({
              name: "fullscreen_enter"
            });
          } else {
            this.logEvent({
              name: "fullscreen_exit"
            });
          }
          if ((t = this.Qe) !== null && t !== undefined) {
            t.setChatButtons();
          }
        };
        this.cancelEvent = t => {
          t.stopPropagation();
        };
        this.L = false;
        this.We = new Ks(this, t);
        this.Ye = new qs(this);
        this.Je = new Xs(this);
        this.Ke = undefined;
        this.Xe = undefined;
        this.qe = false;
        this.Ct = Ys(t || "");
        this.Ge = 0;
      }
      setPageControls(t) {
        this.Qe = t;
      }
      fixPageControls() {
        var t;
        var e;
        if ((t = this.Qe) !== null && t !== undefined) {
          t.enablePartyIcons();
        }
        if ((e = this.Qe) !== null && e !== undefined) {
          e.setChatButtons();
        }
      }
      tn() {
        return co(this, undefined, undefined, function* () {
          return S.m(new io(u, r));
        });
      }
      usesChatMountPolling() {
        return false;
      }
      isChatMountReady() {
        return false;
      }
      isChatInjected() {
        return this.en();
      }
      logSidebarInjected(t) {
        return co(this, undefined, undefined, function* () {
          if (this.Ze || !t || this.isPartyWindowsActive()) {
            return;
          }
          let e;
          let n;
          this.Ze = true;
          yield this.nn();
          if (this.en()) {
            n = this.sn();
            if (this.rn(n)) {
              try {
                yield mi(() => this.Pe, 30000)();
              } catch (t) {
                e = "messaging_timeout";
              }
            } else {
              e = "layout_invalid";
            }
          } else {
            e = "mount_missing";
            n = {
              connected: false,
              has_size: false,
              visible: false,
              has_frame: false
            };
          }
          const i = e === undefined;
          S.m(new ro(u, r, {
            event_name: "sidebar_injected",
            service: t,
            success: i,
            session_id: this.ke,
            extra_info: {
              is_create: this.an === true,
              uses_mount_polling: this.usesChatMountPolling(),
              mount_ready: this.usesChatMountPolling() ? this.isChatMountReady() : undefined,
              layout_checks: n,
              failure_reason: e
            }
          }, eo.PARTY));
        });
      }
      sn() {
        const t = this.Ct("#chat-wrapper")[0];
        if (!t) {
          return {
            connected: false,
            has_size: false,
            visible: false,
            has_frame: false
          };
        }
        const e = t.getBoundingClientRect();
        const n = window.getComputedStyle(t);
        const i = this.Ct("#tpChatFrame")[0];
        return {
          connected: t.isConnected,
          has_size: e.width > 0 && e.height > 0,
          visible: n.display !== "none" && n.visibility !== "hidden" && n.opacity !== "0",
          has_frame: !!i
        };
      }
      rn(t) {
        return t.connected && t.has_size && t.visible && t.has_frame;
      }
      nn() {
        return co(this, undefined, undefined, function* () {
          if (this.en() || !this.usesChatMountPolling()) {
            return;
          }
          try {
            yield mi(() => this.en() || this.un === undefined, 32000)();
          } catch (t) {}
        });
      }
      cn() {
        return co(this, undefined, undefined, function* () {
          if (!this.en() && !this.isPartyWindowsActive()) {
            if (this.usesChatMountPolling()) {
              yield this.ln();
              if (!this.en()) {
                this.scheduleChatInjectRetryIfNeeded();
              }
              return;
            } else {
              this.hn();
              return;
            }
          }
        });
      }
      ln() {
        return co(this, undefined, undefined, function* () {
          if (!this.en() && !this.isPartyWindowsActive()) {
            try {
              yield mi(() => !!this.en() || (this.isChatMountReady() && this.hn(), this.en()), 15000)();
            } catch (t) {
              this.dn("Chat sidebar mount timed out", t == null ? undefined : t.message);
            }
          }
        });
      }
      scheduleChatInjectRetryIfNeeded() {
        if (this.usesChatMountPolling()) {
          if (!this.en() && !this.isPartyWindowsActive() && !!this.L && !this.un) {
            this.ze = 0;
            this.un = setInterval(() => {
              this.pn();
            }, 2000);
          }
        }
      }
      pn() {
        return co(this, undefined, undefined, function* () {
          if (this.en() || !this.L || this.isPartyWindowsActive()) {
            this.Dn();
          } else {
            this.ze++;
            if (this.ze > 15) {
              this.Dn();
            } else {
              yield this.reloadChat();
              if (this.en()) {
                this.Dn();
              }
            }
          }
        });
      }
      Dn() {
        if (this.un) {
          clearInterval(this.un);
          this.un = undefined;
        }
      }
      setChatVisible(t, e = true) {
        return co(this, undefined, undefined, function* () {
          if (this.isPartyWindowsActive()) {
            throw new Error("Invalid Set Chat");
          }
          if (e) {
            this.Se = t;
          }
          if (t) {
            this.resetUnreadMessagesCount();
          }
          if (t && !this.en()) {
            this.reloadChat();
          }
        });
      }
      incrementUnreadMessagesCount() {
        this.Ge++;
        const t = document.querySelector("#tp-chat-button");
        if (t) {
          const e = t.querySelector(".unread-messages-count");
          if (e) {
            e.remove();
          }
          if (this.Ge > 0) {
            const e = document.createElement("span");
            e.textContent = String(this.Ge);
            e.className = "unread-messages-count";
            Object.assign(e.style, {
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
              boxShadow: "0 0 2px rgba(0,0,0,0.2)"
            });
            if (t.style.position === "" || t.style.position === "static") {
              t.style.position = "relative";
            }
            t.appendChild(e);
          }
        }
      }
      resetUnreadMessagesCount() {
        this.Ge = 0;
        const t = document.querySelector("#tp-chat-button");
        if (t) {
          const e = t.querySelector(".unread-messages-count");
          if (e) {
            e.remove();
          }
        }
      }
      getUnreadMessagesCount() {
        return this.Ge;
      }
      dn(t, e) {
        const n = new o(u, r, {
          name: "error",
          action: {
            reason: e,
            description: t
          }
        });
        S.m(n);
      }
      getChatWindowVisible() {
        return this.Ue;
      }
      setChatWindowActive(t) {
        this.Re = t;
      }
      isChatFrameActive() {
        return this.Le;
      }
      isPartyWindowsActive() {
        return this.Re;
      }
      shouldChatBeVisible() {
        return this.Se;
      }
      incrementEmojiCount() {
        this.je++;
      }
      resetEmojiCount() {
        this.je = 0;
      }
      getEmojiCount() {
        return this.je;
      }
      setChatFrameReady(t) {
        if (this.Pe) {
          this.vn();
        }
        this.Pe = true;
        this.gn = t;
        console.log("setChatFrameReady");
      }
      queueMessageForFrame(t, e) {
        this.Te.pushTask(() => co(this, undefined, undefined, function* () {
          this.mn(t, e);
        }), "queueMessageForFrame");
      }
      mn(t, e) {
        return co(this, undefined, undefined, function* () {
          if (t === ws.LOAD_INIT_DATA) {
            uo("cs_init_data_sent");
          }
          const n = this.gn;
          const i = {
            type: t,
            data: e,
            target: "TP_Sidebar",
            tabId: n,
            sender: u
          };
          S.m(i);
        });
      }
      wn() {
        var t;
        return co(this, undefined, undefined, function* () {
          try {
            console.log("Start delay");
            yield mi(() => this.Pe && this.gn != null, 30000)();
            console.log("Chat Frame is Loaded");
            if (this.Me) {
              this.yn(this.Me);
            }
            if ((t = this.Qe) !== null && t !== undefined) {
              t.setResetChatButton();
            }
          } catch (t) {
            this.dn("Sidewindow didn't load in time", t);
          }
        });
      }
      Oe() {
        window.origin.includes(".crunchyroll.com");
        window.origin.includes("tv.apple.com");
        return false;
      }
      bn() {
        return window.location.hostname.includes("f1tv.formula1.com");
      }
      Cn() {
        return co(this, undefined, undefined, function* () {
          yield S.m(new e(u, r, i.LOAD_CHAT_WINDOW));
          console.log(this.gn);
        });
      }
      resetChatWindow(t = false) {
        var n;
        return co(this, undefined, undefined, function* () {
          yield S.m(new e(u, r, i.RESET_CHAT_WINDOW));
          console.log(this.gn);
          this.Ue = true;
          this.Se = true;
          if (top !== null && top !== undefined) {
            top.postMessage({
              type: "exitFullscreen"
            }, "*");
          }
          if (this.Ve && t) {
            this.resetIconListener();
            if ((n = this.Qe) !== null && n !== undefined) {
              n.setResetChatButton();
            }
          }
        });
      }
      hideChatWindow() {
        return co(this, undefined, undefined, function* () {
          yield S.m(new e(u, r, i.HIDE_CHAT_WINDOW));
          this.Ue = false;
          this.Se = false;
        });
      }
      Fn() {
        return co(this, undefined, undefined, function* () {
          this.Cn();
          this.Te.pushTask(this.wn.bind(this), "waitChatFrameReady");
        });
      }
      loadInitData(t) {
        this.Me = t;
      }
      yn(t) {
        return co(this, undefined, undefined, function* () {
          const n = Object.assign({}, t);
          n.iconMap = ks;
          n.extensionBaseUrl = chrome.runtime.getURL("");
          n.iconFrameMap = As;
          if (n.storageData) {
            const t = yield $s.getValidatedChromeStorageDataAsync();
            console.log("GOt storage data in send init stuff", t);
            n.storageData = t;
          }
          if (n.sessionCallbackData?.sessionId) {
            const {
              sessionId: t
            } = n.sessionCallbackData;
            const e = yield as.getItemsAsync(["REDIRECT_URL"]);
            if (e.REDIRECT_URL && e.REDIRECT_URL[t]) {
              n.sessionCallbackData.redirectUrl = e.REDIRECT_URL[t];
            }
          }
          this.queueMessageForFrame(ws.LOAD_INIT_DATA, n);
          const i = yield this.getVideoTitle();
          this.queueMessageForFrame(ws.SET_PAGE_TITLE, {
            pageTitle: i
          });
          this.queueMessageForFrame(ws.SET_USER_LIST, this.Ne);
          this.queueMessageForFrame(ws.UPDATE_SETTINGS, {
            userSettings: (yield this.tn()).userSettings
          });
        });
      }
      vn() {
        return co(this, undefined, undefined, function* () {
          if (this.Me) {
            yield this.yn(this.Me);
          }
          const t = yield this.tn();
          const e = this.Je.getUserIconURL(t.currentUser.userIds.permId, t.userSettings.userIcon);
          const n = this.Je.setUserIconFrameForUser(t.currentUser.userIds.permId, t.userSettings.userIconFrame);
          this.queueMessageForFrame(ws.SET_USER_ICON_URL, e);
          this.queueMessageForFrame(ws.SET_USER_ICON_FRAME_URL, n);
          const i = yield this.getVideoTitle();
          this.queueMessageForFrame(ws.SET_PAGE_TITLE, {
            pageTitle: i
          });
          this.reloadMessages();
        });
      }
      _n() {
        return co(this, undefined, undefined, function* () {
          yield this.cn();
          if (this.en()) {
            uo("cs_chat_injected");
            yield this.En();
          }
        });
      }
      En() {
        return co(this, undefined, undefined, function* () {
          yield gi(200)();
          const t = this.Ct("#tpChatFrame")[0];
          if (t) {
            t.style.display = "block";
          }
          yield this.setChatVisible(true);
          this.addIconSelector();
          this.xn();
          this.Ye.setupPresenceIndicator();
          this.checkInitReactionContainer();
        });
      }
      get sessionReactionsDisabled() {
        return this.Ee;
      }
      get userReactionsDisabled() {
        return this._e;
      }
      setUserReactionsDisabledStatus(t) {
        this._e = t;
      }
      setSessionReactionDisabledStatus(t) {
        this.Ee = t;
      }
      kn() {
        return co(this, undefined, undefined, function* () {
          this.We.initWindowListeners();
          if (this.Oe()) {
            this.Fn();
          }
          this.Te.pushTask(this.wn.bind(this), "InitChat, _waitChatFrameReady");
          Ns();
          const t = yield this.tn();
          uo("cs_user_data");
          const e = this.Je.getUserIconURL(t.currentUser.userIds.permId, t.userSettings.userIcon);
          const n = this.Je.setUserIconFrameForUser(t.currentUser.userIds.permId, t.userSettings.userIconFrame);
          this.Je.setUserIconUrl(e);
          this.Je.setUserIconFrameUrl(n);
          this.Je.renderSidebar();
          this.L = true;
          ms(true);
          if (!this.en()) {
            yield this.An();
            if (this.Oe()) {
              jQuery("body").after(`\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `);
            } else {
              yield this._n();
              this.checkAddYoutubePromo();
            }
          }
        });
      }
      checkAddYoutubePromo() {
        return co(this, undefined, undefined, function* () {
          if ((yield as.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo !== "true") {
            this.Je.addYoutubePromo();
            ss.setItemsAsync({
              seenYoutubePromo: "true"
            });
          }
        });
      }
      sendInitDataToSidebar(t) {
        return co(this, undefined, undefined, function* () {
          this.Me = t;
          const n = Object.assign({}, t);
          n.iconMap = ks;
          n.extensionBaseUrl = chrome.runtime.getURL("");
          n.iconFrameMap = As;
          if (n.sessionCallbackData?.sessionId) {
            const {
              sessionId: t
            } = n.sessionCallbackData;
            const e = yield as.getItemsAsync(["REDIRECT_URL"]);
            if (e.REDIRECT_URL && e.REDIRECT_URL[t]) {
              n.sessionCallbackData.redirectUrl = e.REDIRECT_URL[t];
            }
            const i = yield S.m(new oo(u, r, {
              key: "sportLobby"
            }));
            if ((i == null ? undefined : i.result) && i.result.includes(t)) {
              n.sessionCallbackData.redirectUrl = i.result;
            }
          }
          this.queueMessageForFrame(ws.LOAD_INIT_DATA, n);
        });
      }
      reloadChat() {
        return co(this, undefined, undefined, function* () {
          console.log("Reload chat");
          if (!this.en() && !this.isPartyWindowsActive()) {
            yield this.cn();
            if (!this.en()) {
              return;
            }
            yield gi(200)();
            const t = this.Ct("#tpChatFrame")[0];
            if (t) {
              t.style.display = "block";
            }
            yield this.setChatVisible(this.Se);
            this.addIconSelector();
            this.In();
            this.xn();
            this.Ye.setupPresenceIndicator();
            this.reloadMessages();
            this.scrollToBottom();
            this.checkInitReactionContainer();
          }
        });
      }
      sendTeardown(t) {
        const e = new Ji(u, r, t);
        S.m(e);
      }
      en() {
        return this.Ct("#chat-wrapper").length > 0;
      }
      clearUnreadCount() {
        this.Je.clearUnreadCount();
      }
      Sn() {
        return co(this, undefined, undefined, function* () {
          try {
            yield mi(() => document.querySelector("#chat-history") !== null || this.Re || this.Pe && this.Le, 10000)();
          } catch (t) {
            this.dn("Failed to find chat history", t);
          }
        });
      }
      addMessage(t, e = false) {
        this.Te.pushTask(() => co(this, undefined, undefined, function* () {
          yield this.Sn();
          this.Je.addMessage(t, e);
        }), "addMessage, _waitForChatHistory");
      }
      addGif(t) {
        this.Te.pushTask(() => co(this, undefined, undefined, function* () {
          yield this.Sn();
          this.Je.addGif(t);
        }), "addGif");
      }
      reloadMessages() {
        this.Je.reloadMessages();
      }
      scrollToBottom() {
        this.Je.scrollToBottom();
      }
      addReviewMessage() {
        this.Je.addReviewMessage();
        this.qe = true;
      }
      get showingReveiwMessage() {
        return this.qe;
      }
      set shouldReturnToVideo(t) {
        this.Ve = t;
      }
      onBufferingMessage(t) {
        this.Te.pushTask(() => co(this, undefined, undefined, function* () {
          yield this.Sn();
          this.Ye.setBufferingPresenceVisible(t.usersBuffering.length > 0);
        }), "addBufferingMessage");
      }
      onTypingMessage(t) {
        this.Te.pushTask(() => co(this, undefined, undefined, function* () {
          yield this.Sn();
          this.Ye.setTypingPresenceVisible(t.usersTyping.length > 0);
        }), "onTypingMessage");
      }
      onWatchingAdsMessage(t) {
        const e = t.usersWatchingAds.length > 0;
        console.log("[TpDebug] onWatchingAdsMessage", {
          anyoneWatchingAds: t.anyoneWatchingAds,
          usersWatchingAds: t.usersWatchingAds,
          willShow: e
        });
        this.Ye.setWatchingAdsPresenceVisible(e);
      }
      getWatchingAds() {
        return this.Ye.getWatchingAdsVisible();
      }
      onNextEpisodeAvailable(t) {
        console.log("onNextEpisodeAvailable", t);
        this.queueMessageForFrame(ws.UPDATE_ACTIONS_STATE, {
          nextEpisodeReady: t
        });
      }
      doUpdateSettings(t) {
        return co(this, undefined, undefined, function* () {
          const i = yield S.m(new so(u, r, t));
          if (i) {
            const t = (yield this.tn()).currentUser.userIds.permId;
            if (t) {
              this.Je.updateUserData(t, i.userIcon, i.userNickname, i.userIconFrame ?? "");
            }
            this.Je.setUserIconFrameUrl(i.userIconFrame ?? "");
          }
          if (t.shouldBroadcast) {
            this.Bn(this.jn(i));
          }
        });
      }
      onUpdateSettingsMessage(t) {
        return co(this, undefined, undefined, function* () {
          this.Je.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname, t.userSettings.userIconFrame ?? "");
          const i = yield this.tn();
          const s = this.Je.getUserIconURL(i.currentUser.userIds.permId, i.userSettings.userIcon);
          this.Je.setUserIconUrl(s);
          if (t.permId === i.currentUser.userIds.permId) {
            this.Je.setUserIconFrameUrl(t.userSettings.userIconFrame ?? "");
          }
          this.Je.renderSidebar();
        });
      }
      xn() {
        mi(() => this.en(), 10000)().then(() => {
          this.We.startListening();
        });
      }
      In() {
        this.We.stopListening();
        if (this.$n) {
          clearTimeout(this.$n);
          this.Be = false;
        }
      }
      teardown() {
        this.Dn();
        this.L = false;
        ms(false);
        this.ke = undefined;
        this.an = undefined;
        this.Ze = false;
        this.Pe = false;
        this.In();
        this.Ct("[tpInjected]").remove();
        this.removeChat();
        this.setChatVisible(false);
        console.log("teardown");
      }
      focusChat() {
        this.Ct("#chat-input")[0].focus();
      }
      showEmojiPicker() {
        if (!this.Ct("#gif-picker-container").is(":hidden")) {
          this.toggleGIFs();
        }
        this.Ct("#emoji-picker-btn-icon").css({
          opacity: "1"
        });
        const n = this.Ct("#bottom-chat-controls").outerHeight(true) ?? parseInt(this.Ct("#bottom-chat-controls").css("height"));
        const i = parseInt(this.Ct("#chat-input-container").css("padding-bottom"));
        const s = (this.Ct("#chat-input").outerHeight(true) ?? parseInt(this.Ct("#chat-input").css("height"))) + n + i;
        this.Ct("#emoji-picker-container").css({
          bottom: s
        });
      }
      hideEmojiPicker() {
        this.Ct("#emoji-picker-btn-icon").css({
          opacity: ""
        });
        this.Ct("#emoji-picker-container").css("bottom", "");
      }
      showReactionHolder() {
        this.Ct("#reaction-btn-icon").css({
          opacity: "1"
        });
        this.Ct("#reaction-holder").css({
          display: "flex"
        });
        this.Ct("#reaction-holder").css({
          "padding-top": "8px"
        });
        this.Ct("#chat-input-container").css({
          "padding-top": "0"
        });
      }
      hideReactionHolder() {
        this.Ct("#reaction-btn-icon").css({
          opacity: ""
        });
        this.Ct("#reaction-btn").css({
          background: "",
          padding: ""
        });
        this.Ct("#reaction-holder").css({
          "padding-top": ""
        });
        this.Ct("#chat-input-container").css({
          "padding-top": ""
        });
        this.Te.pushTask(() => ss.setItemsAsync({
          [w]: false
        }));
      }
      onOpenGifPicker() {
        return co(this, undefined, undefined, function* () {
          if (!this.Ct("#emoji-picker-container").is(":hidden")) {
            this.toggleEmojiClicker();
          }
          if (!this.Ct("#gif-results-left")[0].innerHTML) {
            this.fetchGIFs();
          }
          this.Ct("#gif-btn-icon").css({
            opacity: "1"
          });
          const n = this.Ct("#bottom-chat-controls").outerHeight(true) ?? parseInt(this.Ct("#bottom-chat-controls").css("height"));
          const i = parseInt(this.Ct("#chat-input-container").css("padding-bottom"));
          const s = (this.Ct("#chat-input").outerHeight(true) ?? parseInt(this.Ct("#chat-input").css("height"))) + n + i;
          this.Ct("#gif-picker-container").css({
            bottom: s
          });
        });
      }
      onCloseGifPicker() {
        this.Ct("#gif-btn-icon").css({
          opacity: ""
        });
        this.Ct("#gif-btn").css({
          background: "",
          padding: ""
        });
      }
      toggleEmojiClicker() {
        this.Ct("#emoji-picker-container").slideToggle(0, () => {
          if (this.Ct("#emoji-picker-container").is(":hidden")) {
            this.hideEmojiPicker();
          } else {
            this.showEmojiPicker();
          }
        });
      }
      toggleReactions() {
        const t = document.querySelector("#chat-history");
        let e = false;
        if (t && Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 10) {
          e = true;
        }
        this.Ct("#reaction-holder").slideToggle(0, () => {
          const t = this.Ct("#reaction-holder").is(":hidden");
          if (t) {
            this.hideReactionHolder();
          } else {
            this.showReactionHolder();
          }
          if (!t && e) {
            this.Je.scrollToBottom();
          }
        });
      }
      onVideoClick() {
        this.queueMessageForFrame(ws.ON_PAGE_CLICK);
      }
      toggleGIFs() {
        this.Ct("#gif-picker-container").slideToggle(0, () => {
          if (this.Ct("#gif-picker-container").is(":hidden")) {
            this.onCloseGifPicker();
          } else {
            this.onOpenGifPicker();
          }
        });
      }
      addEmojiPicker(t) {
        t.stopPropagation();
        const e = new o(u, r, {
          name: "user_click",
          component: {
            name: "chat_input_container-emoji_picker",
            type: "button",
            origin: "tp"
          }
        });
        S.m(e);
        this.toggleEmojiClicker();
      }
      addGifPicker(t) {
        t.stopPropagation();
        const e = new o(u, r, {
          name: "user_click",
          component: {
            name: "chat_input_container-gif_popup",
            type: "button",
            origin: "tp"
          }
        });
        S.m(e);
        this.toggleGIFs();
      }
      getMessages(t = false) {
        return this.Je.getMessages(t);
      }
      addReactionTab(t) {
        t.stopPropagation();
        const e = new o(u, r, {
          name: "user_click",
          component: {
            name: "chat_input_container-reaction_pinner",
            type: "button",
            origin: "tp"
          }
        });
        S.m(e);
        this.toggleReactions();
      }
      An() {
        return co(this, undefined, undefined, function* () {
          this.Tn = zi();
          this.Tn = this.Tn.replace(/{EXTENSION_LOGO}/g, Is(chrome.runtime.getURL("img/tp_logo.svg")));
          const t = yield this.tn();
          if (t.userSettings === undefined) {
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          }
          const e = chrome.runtime.getURL("");
          this.Tn = this.Tn.replace(/{CHAT_URL}/g, `${b}?t=${Date.now()}&id=${encodeURIComponent(e.substring(0, e.length - 1))}`);
          for (const t of C) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g");
            const n = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            this.Tn = this.Tn.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`));
            this.Tn = this.Tn.replace(n, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`));
          }
          this.Tn = this.Tn.replace(/{USER_NICKNAME}/g, t.userSettings.userNickname ? Is(t.userSettings.userNickname) : "Add a nickname");
          this.Tn = this.Tn.replace(/{USER_ICON}/g, this.Je.getUserIconURL(t.currentUser.userIds.permId, t.userSettings.userIcon));
          this.Tn = this.Tn.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"));
          this.Tn = this.Tn.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"));
          this.Tn = this.Tn.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"));
          this.Tn = this.Tn.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"));
          this.Tn = this.Tn.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"));
          this.Tn = this.Tn.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"));
          this.Tn = this.Tn.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"));
          this.Tn = this.Tn.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"));
          this.Tn = this.Tn.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg"));
        });
      }
      toggleIconContainer() {
        return co(this, undefined, undefined, function* () {
          if (this.Ct("#chat-icon-container").data("active")) {
            this.Ct("#chat-icon-container").data("active", false);
            this.Ct("#chat-icon-container").slideUp();
            this.Ct(".chat-settings-container").slideUp();
            this.Ct("#sidebar-tabs-container").slideDown();
            if (this.He) {
              this.Ct("#chat-history-container").slideDown();
            } else {
              this.Ct("#chat-friends-frame").slideDown();
            }
            if (this.Be) {
              this.Ct("#chat-ad-holder").show();
            }
            this.Ct("#chat-input-container").show();
            this.Ct("#reaction-holder").hide();
            this.hideReactionHolder();
            this.Ct("#teleparty-blog-container").show();
            this.Ct("#presence-indicator").show();
            this.Ct("#chat-header-container").removeClass("chat-header-container-active");
          } else {
            const n = yield this.tn();
            this.Ct("#chat-icon-container").data("active", true);
            this.Ct(".chat-settings-container").show();
            this.Ct("#chat-icon-container").hide();
            this.Ct("#chat-link-container").hide();
            this.Ct("#chat-history-container").hide();
            this.Ct("#sidebar-tabs-container").hide();
            this.Ct("#chat-friends-frame").slideUp();
            this.Ct("#chat-ad-holder").hide();
            this.Ct("#chat-input-container").hide();
            this.Ct("#teleparty-blog-container").hide();
            this.Ct("#presence-indicator").hide();
            this.Ct("#reaction-holder").hide();
            this.Ct("#nickname-edit").attr("placeholder", n.userSettings.userNickname ?? "");
            this.Ct("#nickname-edit")[0].value = n.userSettings.userNickname ?? "";
          }
        });
      }
      togglePartyTab() {
        this.Ct("#friends-tab").toggleClass("sidebar-tab-inactive", true);
        this.Ct("#party-tab").toggleClass("sidebar-tab-inactive", false);
        this.Ct("#chat-history-container").show();
        this.Ct("#chat-friends-frame").slideUp();
        this.Ct("#chat-input-container").show();
        this.He = true;
      }
      toggleFriendsTab() {
        this.Ct("#friends-tab").toggleClass("sidebar-tab-inactive", false);
        this.Ct("#party-tab").toggleClass("sidebar-tab-inactive", true);
        this.Ct("#chat-friends-frame").removeClass("tp-hidden");
        this.Ct("#chat-friends-frame").slideDown();
        this.Ct("#chat-history-container").slideUp();
        this.Ct("#chat-input-container").hide();
        this.He = false;
      }
      toggleLargeUserIconButton() {
        if (this.Ct("#chat-icon-container").data("active")) {
          this.Ct("#chat-icon-container").show();
          this.Ct(".chat-settings-container").hide();
          this.Ct("#chat-header-container").addClass("chat-header-container-active");
        }
      }
      linkIconListener() {
        navigator.clipboard.writeText(this.getPartyUrl());
        this.Ct("#link-icon .tooltiptext").text("Link copied");
        setTimeout(() => {
          this.Ct("#link-icon .tooltiptext").text("Copy Link");
        }, 1000);
      }
      resetIconListener() {
        if (this.Pn?.videoId) {
          const t = new CustomEvent("YoutubeVideoMessage", {
            detail: {
              type: "jumpToNextEpisode",
              nextVideoId: this.Pn.videoId,
              isShort: window.location.href.includes("/shorts/")
            }
          });
          window.dispatchEvent(t);
        }
      }
      setPartyUrl(t) {
        this.xe = t;
      }
      setMessageForwarder(t) {
        this.Pn = t;
      }
      setSessionId(t) {
        this.ke = t;
      }
      onWebRTC(t) {
        this.queueMessageForFrame(ws.ON_WEB_RTC, t);
      }
      setSocketConnectionId(t) {
        this.queueMessageForFrame(ws.SET_CONNECTION_ID, t);
      }
      loadUserList(t) {
        t.forEach(t => {
          if (t.userSettings !== undefined && t.permId !== undefined) {
            const e = t.userSettings;
            const n = this.Je.getUserIconURL(t.permId, e.userIcon);
            const i = this.Je.setUserIconFrameForUser(t.permId, e.userIconFrame);
            const s = this.Je.getUserNickname(t.permId, e.userNickname);
            t.parsedData = {
              userIconUrl: n,
              userNickname: s,
              userIconFrameUrl: i
            };
          }
        });
        this.Ne = t;
        this.Ct("#user-count").text(t.length);
        this.queueMessageForFrame(ws.SET_USER_LIST, t);
      }
      setSessionCreated(t) {
        this.an = t;
      }
      getSessionCreated() {
        return this.an;
      }
      getSessionId() {
        return this.ke;
      }
      getPartyUrl() {
        return this.xe;
      }
      userIconSelectorListener(t) {
        return co(this, undefined, undefined, function* () {
          const e = jQuery(t.currentTarget).data("icon");
          if (e) {
            const t = yield S.m(new so(u, r, {
              userIcon: e
            }));
            this.queueMessageForFrame(ws.UPDATE_SETTINGS, {
              userSettings: t.userSettings
            });
            this.Bn(this.jn(t.userSettings));
          }
          this.toggleIconContainer();
        });
      }
      removeChat() {
        this.clearUnreadCount();
        this.Ct("#chat-container").remove();
        this.Ct("#chat-wrapper").remove();
      }
      Bn(t, e) {
        S.m(t).then(e);
      }
      Mn(t) {
        return new Ki(u, r, {
          reactionType: t
        });
      }
      Ln(t) {
        return new Xi(u, r, {
          gifObject: t
        });
      }
      Rn(t) {
        return new Wi(u, r, {
          body: t
        });
      }
      On(t) {
        return new Qi(u, r, {
          typing: t
        });
      }
      jn(t) {
        const e = {
          userSettings: {
            userNickname: t.userNickname,
            userIcon: t.userIcon,
            userIconFrame: t.userIconFrame,
            nameColor: t.nameColor,
            badge: t.badge,
            reactions: t.reactions
          }
        };
        return new Yi(u, r, e);
      }
      Un(t) {
        return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
      }
      showReaction(t) {
        if (!this.shouldShowReaction() || this._e) {
          return;
        }
        const e = t.reactionType;
        const n = this.getReactionContainer();
        if (n) {
          const t = Math.floor(Math.random() * 40) + 40;
          const i = n[0].offsetWidth - (this.shouldAddReactionSpace() ? ys : 0) - t;
          const s = Math.floor(Math.random() * i) + (this.shouldAddReactionSpace() ? ys : 0);
          const o = this.Un(e);
          const r = Math.ceil(Math.random() * 3);
          const a = jQuery(`<img class="on-screen-reaction on-screen-reaction-${r}" src='${o}' />`);
          a.css("right", `${s}px`);
          a.css("width", `${t}px`);
          a.css("height", `${t}px`);
          n.append(a);
          setTimeout(() => {
            a.remove();
          }, 5000);
        }
      }
      onReactionClicked(t) {
        console.log(t);
        this.Bn(this.Mn(t));
        const e = new o(u, r, {
          name: "user_click",
          component: {
            name: "chat_input_container-reaction_holder-reaction",
            type: t,
            origin: "tp"
          }
        });
        S.m(e);
        const n = new o(u, r, {
          eventType: "reaction-" + t,
          sessionId: this.getSessionId()
        });
        S.m(n);
      }
      onChatKeyUp(t) {
        t.stopPropagation();
      }
      onChatKeyDown(t) {
        t.stopPropagation();
        this.We.resetIdleTimer();
      }
      initCustomListeners() {}
      getClientLocale() {
        if (typeof Intl != "undefined") {
          try {
            return Intl.NumberFormat().resolvedOptions().locale;
          } catch (t) {
            console.error("Cannot get locale from Intl");
            this.dn("Cannot get locale from Intl", t);
          }
        }
      }
      clickGif(t) {
        console.log("GIF was clicked");
        let e = t.target.id;
        if (isNaN(e)) {
          e = e === "trending" ? "" : e;
          this.fetchGIFs(e);
          this.Ct("#gif-search")[0].value = e;
        } else {
          const t = this.$e.find(t => t.id === e);
          if (!t) {
            return;
          }
          const n = {
            id: t.id,
            title: t.title,
            description: t.content_description,
            isSticker: false,
            media: t.media
          };
          this.Bn(this.Ln(n), () => {
            this.logShare(t.id, this.Ct("#gif-search")[0].value);
            const e = {
              name: "user_click",
              action: {
                description: "gif clicked",
                source: t.media.full.url
              },
              component: {
                name: "chat_input_container-gif_popup-gif",
                type: "video",
                origin: "tp"
              }
            };
            const n = new o(u, r, e);
            S.m(n);
            const i = new o(u, r, {
              eventType: "gif-share",
              sessionId: this.getSessionId()
            });
            S.m(i);
          });
          this.toggleGIFs();
        }
      }
      Vn(t) {
        const e = document.createElement("video");
        const n = 124 / (t.media.preview.dims[0] / t.media.preview.dims[1]);
        e.autoplay = true;
        e.loop = true;
        e.playsInline = true;
        e.setAttribute("disablePictureInPicture", "");
        e.setAttribute("disableRemotePlayback", "");
        e.src = t.media.preview.url;
        e.muted = true;
        e.id = t.id;
        e.height = n;
        e.className = "gif-img";
        return e;
      }
      Hn(t) {
        const e = document.createElement("img");
        const n = 124 / (t.media.previewMobile.dims[0] / t.media.previewMobile.dims[1]);
        e.setAttribute("disablePictureInPicture", "");
        e.setAttribute("disableRemotePlayback", "");
        e.src = t.media.previewMobile.url;
        e.id = t.id;
        e.height = n;
        e.className = "gif-img";
        return e;
      }
      loadGIFs(t) {
        this.Ct(".gif-placeholder").remove();
        this.$e.push(...t.results);
        this.Ae = t.next;
        t.results.forEach(t => {
          const e = this.shouldUseVideoGIF() ? this.Vn(t) : this.Hn(t);
          (this.Ct("#gif-results-left")[0].scrollHeight > this.Ct("#gif-results-right")[0].scrollHeight ? this.Ct("#gif-results-right")[0] : this.Ct("#gif-results-left")[0]).appendChild(e);
        });
        if (this.Fe < 6) {
          this.Nn();
        }
        setTimeout(() => {
          this.Ce = false;
        }, 100);
      }
      onScrollToBottom(t) {
        return co(this, undefined, undefined, function* () {
          const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
          if (this.Ce) {
            t.preventDefault();
          } else if (this.Ae !== "0" && e && this.Fe < 6) {
            this.Fe += 1;
            this.Ce = true;
            t.preventDefault();
            const e = yield fetch(`${this.Ie}&pos=${this.Ae}`);
            const n = yield e.json();
            this.loadGIFs(n);
          }
        });
      }
      resetGif() {
        this.Ct("#gif-search")[0].value = "";
        this.Ct("#gif-input-back").hide();
        this.Ct("#gif-search").css("width", "");
        this.fetchGIFs();
      }
      displayCategories() {
        this.Ct("#gif-search")[0].value = "";
        this.Ct("#category-container").show();
        this.Ct("#gif-results").hide();
        this.Ct("#gif-input-back").hide();
        this.Ct("#gif-search").css("width", "");
      }
      showCategories() {
        this.Ct("#gif-search")[0].value = "";
        this.Ct("#gif-input-back").hide();
        this.Ct("#gif-search").css("width", "");
        const t = document.createElement("div");
        ["trending", "dance", "annoyed", "omg", "crazy", "shrug", "smile", "awkward", "ew", "surprised", "why", "ouch "].forEach(e => {
          const n = document.createElement("div");
          const i = document.createElement("span");
          i.id = "category-txt";
          i.innerHTML = e;
          n.className = "tp-category-div";
          const s = document.createElement("video");
          s.autoplay = true;
          s.src = "https://media.tenor.com/videos/166d7d5a1be3b0755e7f9e29ebefe2c3/mp4";
          s.className = "category-img";
          s.id = e;
          s.loop = true;
          n.appendChild(i);
          n.appendChild(s);
          t.appendChild(n);
        });
        this.Ct("#category-container")[0].innerHTML = t.innerHTML;
      }
      Gn() {
        const t = [];
        const e = [];
        for (let n = 0; n < 4; n++) {
          let n = Math.floor(Math.random() * 4) + 1;
          while (e.includes(n)) {
            n = Math.floor(Math.random() * 4) + 1;
          }
          e.push(n);
          const i = document.createElement("div");
          i.className = `gif-placeholder gif-placeholder-${n} gif-img`;
          t.push(i);
        }
        return t;
      }
      Nn() {
        return co(this, undefined, undefined, function* () {
          this.Ct("#gif-results-left")[0].append(...this.Gn());
          this.Ct("#gif-results-right")[0].append(...this.Gn());
        });
      }
      logShare(t, e) {
        return co(this, undefined, undefined, function* () {
          const n = this.getClientLocale();
          const i = n ? `&locale=${n}` : "";
          const s = `&id=${t}`;
          const o = e && e.length > 0 ? `q=${e}` : "";
          yield fetch(`${y}/register-share?${o}${i}${s}`);
        });
      }
      fetchGIFs(t) {
        return co(this, undefined, undefined, function* () {
          const e = yield this.getVideoTitle();
          const n = e == null ? undefined : e.replace(/[^\w\s]/g, "");
          this.Fe = 1;
          this.Ce = true;
          this.Ct("#category-container").hide();
          this.Ct("#gif-columns-wrapper").show();
          this.Ct("#gif-results-left")[0].innerHTML = "";
          this.Ct("#gif-results-right")[0].innerHTML = "";
          this.$e = [];
          this.Nn();
          const i = this.getClientLocale();
          const s = i ? `&locale=${i}` : "";
          let o = n ? `search-gifs?q=${n}` : "trending-gifs?";
          o = t ? `search-gifs?q=${t}` : o;
          this.Ie = `${y}/${o}${s}`;
          const r = yield fetch(`${y}/${o}${s}`);
          const a = yield r.json();
          if (a.results && a.results.length > 0) {
            this.loadGIFs(a);
          } else if (!t) {
            const t = yield fetch(`${y}/trending_gifs?${s}`);
            this.Ie = `${y}/trending_gifs?${s}`;
            const e = yield t.json();
            this.loadGIFs(e);
          }
        });
      }
      onGifSearch(t) {
        t.stopPropagation();
        const e = t.target.value;
        if (this.Xe !== undefined) {
          clearTimeout(this.Xe);
        }
        if (!e) {
          this.Ct("#gif-input-back").hide();
          this.Ct("#gif-search").css("width", "");
          this.fetchGIFs();
          return;
        }
        this.Ct("#gif-input-back").show();
        this.Ct("#gif-search").css("width", "90%");
        this.Xe = setTimeout(() => {
          this.fetchGIFs(e);
        }, 500);
      }
      zn(t) {
        return typeof t == "string" && t.replace(/^\s+|\s+$/g, "") !== "";
      }
      onChatKeyPress(t) {
        t.stopPropagation();
        if (t.key !== "Enter" || t.shiftKey) {
          if (this.Ke === undefined) {
            this.Bn(this.On(true));
          } else {
            clearTimeout(this.Ke);
          }
          this.Ke = setTimeout(() => {
            this.Ke = undefined;
            this.Bn(this.On(false));
          }, 500);
        } else {
          if (!this.Ct("#emoji-picker-container").is(":hidden")) {
            this.toggleEmojiClicker();
          }
          const e = this.Ct("#chat-input");
          const n = e[0].textContent;
          if (n && this.zn(n)) {
            if (this.Ke !== undefined) {
              clearTimeout(this.Ke);
              this.Ke = undefined;
              this.Bn(this.On(false));
            }
            e.prop("contenteditable", false);
            this.Bn(this.Rn(n.substring(0, 1500)), () => {
              e[0].textContent = "";
              e.prop("contenteditable", true);
              this.focusChat();
              this.onInputChange();
            });
            const t = {
              name: "chat_send",
              action: {
                description: "message was sent"
              },
              message: {
                id: function () {
                  try {
                    return vs();
                  } catch (t) {
                    return "";
                  }
                }(),
                text: n.trim()
              }
            };
            const i = new o(u, r, t);
            S.m(i);
          } else {
            t.stopImmediatePropagation();
            t.preventDefault();
            e[0].textContent = "";
            this.onInputChange();
          }
        }
      }
      onInputChange() {
        const t = this.Ct("#chat-input");
        if (t.length > 0) {
          const e = t[0].textContent;
          if (e && this.shouldShowIncreasedSize(e)) {
            t.addClass("tp-emoji-large");
          } else {
            t.removeClass("tp-emoji-large");
          }
        }
        if (this.Ct("#emoji-picker-container").css("bottom").length > 0) {
          if (!this.Ct("#emoji-picker-container").is(":hidden")) {
            this.showEmojiPicker();
          }
        }
      }
      shouldShowIncreasedSize(t) {
        const e = t.replace(k, "").replace(/[\uFE0F]/g, "");
        const n = ((t || "").match(k) || []).length;
        return e.length === 0 && n <= 3 && n > 0;
      }
      saveChangesListener() {
        return co(this, undefined, undefined, function* () {
          const t = this.Ct("#nickname-edit").val().slice(0, 25).replace(/^\s+|\s+$/g, "");
          if (t !== (yield this.tn()).userSettings.userNickname) {
            const e = yield S.m(new so(u, r, {
              userNickname: t
            }));
            this.queueMessageForFrame(ws.UPDATE_SETTINGS, {
              userSettings: e.userSettings
            });
            this.Bn(this.jn(e.userSettings));
            this.Ct("#nickname-edit").attr("placeholder", t);
            this.Ct("#nickname-edit").text(t);
          }
          this.toggleIconContainer();
        });
      }
      cancelNicknameListener() {
        this.toggleIconContainer();
      }
      get inSession() {
        return this.L;
      }
      addIconSelector() {
        Object.keys(ks).forEach(t => {
          if (Ss[t]()) {
            const e = ks[t];
            const n = jQuery("\n                <ul id=\"icon-holder\"></ul>\n            ");
            for (const i of e) {
              this.Zn(`${t}/${i}`, n, i);
            }
            const i = jQuery(`\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `);
            n.appendTo(i);
            i.appendTo(this.Ct("#icon-holder-template"));
          }
        }, this);
      }
      inputHeightCheck() {
        const t = this.Ct("#chat-input").text();
        const e = ((t || "").match(k) || []).length;
        const n = t.replace(k, "");
        if (e <= 3 || n) {
          this.Ct(".inTextEmoji").css("font-size", "24px");
        } else if (e > 0) {
          this.Ct(".inTextEmoji").css("font-size", "20px");
        } else {
          this.Ct(".inTextEmoji").css("font-size", "18px");
        }
      }
      Zn(t, e, n) {
        jQuery(`\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL("img/icons/" + t)}' data-tp-id="chat_container-new_icon_selection-${n}">\n            </a>\n        `).appendTo(e).data("icon", t);
      }
    }
    var ho;
    function po(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class fo extends lo {
      constructor(t) {
        super();
        this.Qn = true;
        this.Wn = false;
        this.Yn = 0;
        this.Jn = 0;
        this.Kn = "forward";
        this.onClick = t => {
          if (t.target === jQuery("#chat-input")[0] || t.target === jQuery("#nickname-edit")[0] || t.target === jQuery("#gif-search")[0]) {
            this.Xn();
            this.Qn = true;
            if (t.target === jQuery("#gif-search")[0]) {
              this.Wn = true;
            } else {
              this.Wn = false;
            }
          } else {
            this.Qn = false;
            this.Wn = false;
          }
        };
        this.qn = t;
      }
      shouldShowReaction() {
        return true;
      }
      shouldUseVideoGIF() {
        return true;
      }
      shouldAddReactionSpace() {
        return false;
      }
      getVideoTitle() {
        return po(this, undefined, undefined, function* () {
          yield this.qn.waitUpdatePageTitleAsync();
          return this.qn.pageTitle;
        });
      }
      onBlur() {
        if (this.Qn) {
          if (jQuery("#nickname-edit").is(":visible")) {
            const t = jQuery("#nickname-edit")[0];
            if (t) {
              t.focus();
            }
          } else if (jQuery("#gif-search").is(":visible") && this.Wn) {
            const t = jQuery("#gif-search")[0];
            if (t) {
              t.focus();
            }
          } else {
            const t = jQuery("#chat-input")[0];
            if (t) {
              t.focus();
            }
          }
        }
      }
      Xn() {
        const i = jQuery("#chat-input")[0];
        this.Yn = i.selectionStart ?? 0;
        this.Jn = i.selectionEnd ?? 0;
        this.Kn = i.selectionDirection ?? "forward";
      }
      initCustomListeners() {
        console.log("Init Custom Listeners");
        jQuery("#chat-input").on("blur", this.onBlur.bind(this));
        jQuery("#nickname-edit").on("blur", this.onBlur.bind(this));
        jQuery("#gif-search").on("blur", this.onBlur.bind(this));
        window.addEventListener("click", this.onClick.bind(this));
        jQuery("#chat-input").on("select", () => {
          this.Xn();
        });
        jQuery("#chat-input").on("keyup", () => {
          this.Xn();
        });
        window.addEventListener("mousedown", this.onClick, true);
      }
      removeCustomListeners() {
        window.removeEventListener("mousedown", this.onClick, true);
      }
      onChatKeyDown(t) {
        super.onChatKeyDown(t);
        this.Qn = true;
        if (document.querySelector("[data-uia='controls-standard']")) {
          console.log("Keep active");
          window.postMessage({
            type: "ShowControls"
          }, "*");
        }
      }
      getReactionContainer() {
        return jQuery(".watch-video--player-view");
      }
      usesChatMountPolling() {
        return true;
      }
      isChatMountReady() {
        return jQuery(".sizing-wrapper").length > 0 || jQuery(".watch-video--player-view").length > 0;
      }
      hn() {
        if (!this.Tn || !this.isChatMountReady()) {
          return;
        }
        const t = jQuery(".sizing-wrapper");
        const e = jQuery(".watch-video--player-view");
        if (t.length > 0) {
          this.ti = t;
          this.ti.after(Gs(this.Tn));
        } else {
          if (!(e.length > 0)) {
            return;
          }
          this.ti = e;
          this.ti.append(Gs(this.Tn));
        }
        this.ti.addClass(Cs);
        this.ti.addClass(Fs);
        this.ei();
      }
      ei() {
        const t = jQuery("[dir='rtl']");
        if (t.length) {
          t.attr("dir", "ltr");
        }
      }
      removeChat() {
        var t;
        var e;
        super.removeChat();
        if ((t = this.ti) !== null && t !== undefined) {
          t.removeClass(Cs);
        }
        if ((e = this.ti) !== null && e !== undefined) {
          e.removeClass(Fs);
        }
      }
      getChatVisible() {
        var t;
        var e;
        return (e = (t = this.ti) === null || t === undefined ? undefined : t.hasClass(Cs)) !== null && e !== undefined && e;
      }
      setChatVisible(t, e = true) {
        const n = Object.create(null, {
          setChatVisible: {
            get: () => super.setChatVisible
          }
        });
        var i;
        var s;
        return po(this, undefined, undefined, function* () {
          try {
            yield n.setChatVisible.call(this, t, e);
          } catch (t) {
            window.dispatchEvent(new Event("resize"));
            return;
          }
          this.ei();
          if (t) {
            if (!jQuery("#chat-wrapper").length && !this.isPartyWindowsActive()) {
              this.reloadChat();
            }
            if ((i = this.ti) !== null && i !== undefined) {
              i.addClass(Cs);
            }
            jQuery("#chat-wrapper").show();
            if (!document.hasFocus()) {
              this.clearUnreadCount();
            }
          } else {
            jQuery("#chat-wrapper").hide();
            if ((s = this.ti) !== null && s !== undefined) {
              s.removeClass(Cs);
            }
          }
          yield gi(400)();
          window.dispatchEvent(new Event("resize"));
        });
      }
    }
    class Do extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.GET_SESSION_DATA);
        this.data = n;
      }
    }
    class vo {
      constructor() {
        this.ni = this.ii.bind(this);
        this.si = [];
        this.oi();
      }
      addMessageListener(t) {
        this.si.push(t);
      }
      removeMessageListener(t) {
        this.si = this.si.filter(t => {});
      }
      oi() {
        S.addListener(this.ni);
      }
      teardown() {
        this.si = [];
        S.removeListener(this.ni);
      }
      ii(t, e, n) {
        if (!this.ri(t)) {
          return false;
        }
        return !!this.ai(t, e, n) || (n({}), false);
      }
      ri(t) {
        return t.target === u;
      }
      ai(t, e, n) {
        let i = false;
        this.si.forEach(s => {
          if (s.onMessage(t, e, n)) {
            i = true;
          }
        });
        return i;
      }
    }
    (function (t) {
      t.INIT_CHAT = "initChat";
      t.ON_MESSAGE = "onMessage";
      t.ON_BUFFER = "onBuffer";
      t.ON_TYPING = "onTyping";
      t.ON_WATCHING_ADS = "onWatchingAds";
      t.UPDATE_SETTINGS = "updateSettings";
      t.ON_REACTION = "onReaction";
      t.ON_GIF = "onGif";
      t.ON_LOG_EVENT = "onLogEvent";
      t.USER_LIST = "userList";
      t.ON_WEB_RTC = "onWebRTC";
    })(ho ||= {});
    const go = new class extends Si {
      isValidUrl(t) {
        return pi(t);
      }
      isBrowsing(t) {
        return pi(t) || t.pathname.includes("amazon.");
      }
      getVideoId(t) {
        const e = t.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
        if (e != null && e.length > 0) {
          return e[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", ki.AMAZON, false, ["browse_scripts/amazon/amazon_browse_bundled.js"]);
    Object.freeze(go);
    const mo = go;
    const wo = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("tv.apple.com");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("tv.apple.com");
      }
      getVideoId(t) {
        return t.toString().split("https://tv.apple.com/")[1];
      }
    }([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", ki.APPLE_TV, false, ["browse_scripts/appletv/appletv_browse_bundled.js"]);
    Object.freeze(wo);
    const yo = wo;
    const bo = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".canalplus.") && ["/cinema", "/sport", "/divertissement", "/decouverte", "/musique", "/series"].some(e => t.pathname.includes(e));
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".canalplus.");
      }
      getVideoId(t) {
        const e = t.pathname.split("/").filter(Boolean);
        if (e[0] === "live" && e.length >= 2) {
          return e[1];
        } else {
          return e.join("/");
        }
      }
    }([], ["content_scripts/canalplus/canalplus_content_bundled.js"], "canalplus", ki.CANALPLUS, false, ["browse_scripts/canalplus/canalplus_browse_bundled.js"]);
    Object.freeze(bo);
    const Co = bo;
    const Fo = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes(".crave.");
          const n = t.pathname.includes("/play/") || t.pathname.includes("/live");
          return e && n;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".crave.");
      }
      getVideoId(t) {
        if (t.pathname.includes("/live")) {
          const e = t.searchParams.get("channel");
          if (e) {
            return `live/${e}`;
          } else {
            return "live";
          }
        }
        return t.pathname.split("/").slice(2).join("/");
      }
    }([], ["content_scripts/crave/crave_content_bundled.js"], "crave", ki.CRAVE, false, ["browse_scripts/crave/crave_browse_bundled.js"]);
    Object.freeze(Fo);
    const _o = Fo;
    const Eo = new class extends Si {
      isBrowsing(t) {
        return t.hostname.includes(".crunchyroll.");
      }
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".crunchyroll.") && t.pathname.includes("/watch/");
        }(t);
      }
      getVideoId(t) {
        const e = t.pathname.match(/watch\/(.*)\//);
        if (e && e.length > 0) {
          return e[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", ki.CRUNCHYROLL, false, ["browse_scripts/crunchyroll/crunchyroll_browse_bundled.js"]);
    Object.freeze(Eo);
    const xo = Eo;
    const ko = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".disneyplus.") && (t.pathname.includes("/video") || t.pathname.includes("/play"));
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".disneyplus.") && !t.hostname.includes("apps.disneyplus.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        if (e && e.length > 0) {
          return e[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/disney/disney_content_bundled.js"], "disney", ki.DISNEY_PLUS, false, ["browse_scripts/disney/disney_browse_bundled.js"]);
    Object.freeze(ko);
    const Ao = ko;
    const Io = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("apps.disneyplus.") && t.pathname.includes("/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("apps.disneyplus.");
      }
      getVideoId(t) {
        const e = t.pathname.split("/");
        if (e && e.length > 1) {
          return e[e.length - 2];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", ki.DISNEY_PLUS_MENA, false);
    Object.freeze(Io);
    const So = Io;
    const Bo = new class extends Si {
      isBrowsing(t) {
        return t.hostname.includes(".espn.");
      }
      isValidUrl(t) {
        return function (t) {
          if (!t.hostname.includes(".espn.")) {
            return false;
          }
          const e = t.pathname;
          return e.includes("/player") || e.includes("/watch/");
        }(t);
      }
      getVideoId(t) {
        const e = t.pathname;
        const n = e.match(/\/watch\/player\/_\/id\/([^/?#]+)/);
        if (n == null ? undefined : n[1]) {
          return decodeURIComponent(n[1]);
        }
        const i = ["contentId", "mediaId", "id"];
        for (const e of i) {
          const n = t.searchParams.get(e);
          if (!n) {
            continue;
          }
          const i = decodeURIComponent(n);
          if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(i) || /^\d{8,}$/.test(i)) {
            return i;
          }
        }
        const s = (e + t.hash).match(/\b([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|\d{8,})\b/);
        if (s == null) {
          return undefined;
        } else {
          return s[1];
        }
      }
    }([], ["content_scripts/espn/espn_content_bundled.js"], "espn", ki.ESPN, false, ["browse_scripts/espn/espn_browse_bundled.js"]);
    Object.freeze(Bo);
    const jo = Bo;
    const $o = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("fancode.com");
          const n = t.searchParams.get(O.MATCH_INFO_QUERY_PARAM.tag) === O.MATCH_INFO_QUERY_PARAM.value;
          const i = t.pathname.includes(O.HIGHLIGHTS);
          const s = O.LIVE_MATCH_PAGE_TYPES.some(e => t.pathname.includes(e));
          return e && !n && (i || s);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".fancode.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/fancode/fancode_content_bundled.js"], "fancode", ki.FANCODE, false, ["browse_scripts/fancode/fancode_browse_bundled.js"]);
    Object.freeze($o);
    const To = $o;
    const Po = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".fox.") && t.pathname.includes("/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".fox.");
      }
      getVideoId(t) {
        const e = t.pathname;
        const n = e.indexOf("/watch/");
        if (n !== -1) {
          return e.substring(n + 7);
        }
      }
    }([], ["content_scripts/foxone/foxone_content_bundled.js"], Mi.FOX_ONE, ki.FOX_ONE, false, ["browse_scripts/foxone/foxone_browse_bundled.js"]);
    Object.freeze(Po);
    const Mo = Po;
    const Lo = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("fubo.tv");
          const n = t.pathname.includes("watch");
          return e && n;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".fubo.tv");
      }
      getVideoId(t) {
        return t.search.substring(1);
      }
    }([], ["content_scripts/fubo/fubo_content_bundled.js"], "fubo", ki.FUBO, false, ["browse_scripts/fubo/fubo_browse_bundled.js"]);
    Object.freeze(Lo);
    const Ro = Lo;
    const Oo = new class extends Si {
      isBrowsing(t) {
        return t.hostname.includes(".funimation.");
      }
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".funimation.") && t.pathname.includes("/v/");
        }(t);
      }
      getVideoId(t) {
        return t.pathname.split("/v/")[1];
      }
    }([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", ki.FUNIMATION, false, ["browse_scripts/funimation/funimation_browse_bundled.js"]);
    Object.freeze(Oo);
    const Uo = Oo;
    function Vo(t) {
      const e = t.match(/\/video\/watch\/([^/?#]+)/i);
      if (e) {
        return e[1];
      } else {
        return undefined;
      }
    }
    const Ho = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".hbomax.") && t.pathname.includes("video/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("play.hbomax.");
      }
      getVideoId(t) {
        return Vo(t.pathname);
      }
    }([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", ki.HBO_MAX, false, ["browse_scripts/hbo_max/hbo_max_browse_bundled.js"]);
    Object.freeze(Ho);
    const No = Ho;
    const Go = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".hotstar.") && t.pathname.includes("/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hotstar.");
      }
      getVideoId(t) {
        return t.pathname.substring(4);
      }
    }([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", ki.HOTSTAR, false, ["browse_scripts/hotstar/hotstar_browse_bundled.js"]);
    Object.freeze(Go);
    const zo = Go;
    const Zo = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".hulu.") && !t.hostname.includes("hulu.jp") && t.pathname.includes("/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hulu.") && !t.hostname.includes("hulu.jp");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        if (e && e.length > 0) {
          return e[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", ki.HULU, false, ["browse_scripts/hulu/hulu_browse_bundled.js"]);
    Object.freeze(Zo);
    const Qo = Zo;
    const Wo = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("hulu.jp") && t.pathname.startsWith("/watch/");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hulu.jp");
      }
      getVideoId(t) {
        const e = t.pathname.split("watch/");
        if (e.length > 1 && e[1].length > 0) {
          return e[1];
        }
      }
    }([], ["content_scripts/hulujp/hulujp_content_bundled.js"], "hulujp", ki.HULU_JP, false, ["browse_scripts/hulujp/hulujp_browse_bundled.js"]);
    Object.freeze(Wo);
    const Yo = Wo;
    const Jo = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes(".jiocinema.");
          const n = t.pathname.includes("/watch") && t.pathname.includes("/movies/");
          const i = t.pathname.includes("/sports/");
          const s = t.pathname.includes("/tv-shows/");
          const o = t.pathname.includes("/news/");
          return e && (n || i || s || o);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".jiocinema.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", ki.JIO_CINEMA, false, ["browse_scripts/jio_cinema/jio_cinema_browse_bundled.js"]);
    Object.freeze(Jo);
    const Ko = Jo;
    const Xo = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("play.max.");
      }
      getVideoId(t) {
        return Vo(t.pathname);
      }
    }([], ["content_scripts/max/max_content_bundled.js"], "max", ki.MAX, false, ["browse_scripts/max/max_browse_bundled.js"]);
    Object.freeze(Xo);
    const qo = Xo;
    const tr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("mubi.");
          const n = t.pathname.includes("player");
          return e && n;
        }(t);
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
    }([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", ki.MUBI, false, ["browse_scripts/mubi/mubi_browse_bundled.js"]);
    Object.freeze(tr);
    const er = tr;
    const nr = new class extends Si {
      isBrowsing(t) {
        return t.hostname.includes(".paramountplus.");
      }
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".paramountplus.") && (t.pathname.includes("/video") || t.pathname.includes("/stream") || t.pathname.includes("/movie") || t.pathname.includes("/live-tv"));
        }(t);
      }
      getVideoId(t) {
        return t.pathname;
      }
    }([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", ki.PARAMOUNT, false, ["browse_scripts/paramount/paramount_browse_bundled.js"]);
    Object.freeze(nr);
    const ir = nr;
    const sr = new class extends Si {
      isBrowsing(t) {
        return t.hostname.includes(".peacocktv.");
      }
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".peacocktv.") && t.pathname.includes("/watch") && t.pathname.includes("/playback");
        }(t);
      }
      getVideoId(t) {
        if (t.pathname.includes("/live/")) {
          return t.pathname.split("/").filter(Boolean).pop();
        }
        const e = t.pathname.match(/\/watch\/playback\/(?:vod|event|preview|clip)\/([^/?#]+)\/([^/?#]+)/);
        if (e) {
          return `${e[1]}/${e[2]}`;
        }
        const n = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
        if (n && n.length > 0) {
          return n[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", ki.PEACOCK, false, ["browse_scripts/peacock/peacock_browse_bundled.js"]);
    Object.freeze(sr);
    const or = sr;
    const rr = /(?:^|\/)watch\/live-tv(?:\/|$)/i;
    const ar = "us";
    const ur = new class extends Si {
      isBrowsing(t) {
        return t.hostname.includes("pluto.tv");
      }
      isValidUrl(t) {
        return !!function (t) {
          return !!t.hostname.includes("pluto.tv") && (/\/on-demand\//.test(t.pathname) || /\/movies\/[^/]+/.test(t.pathname) || /\/shows\/[^/]+\/episode\/[^/]+/.test(t.pathname) || /\/watch\/live-tv/.test(t.pathname));
        }(t) && (!!this.isLiveTvPath(t) || !!this.getVideoId(t));
      }
      getVideoId(t) {
        const e = t.pathname.replace(/^\/+|\/+$/g, "");
        if (this.ui(e)) {
          const e = this.getLiveOriginId(t);
          if (!e) {
            return;
          }
          return this.buildLiveVideoId(e, this.getLocale(t));
        }
        if (this.ci(e) || this.li(e) || this.hi(e)) {
          return `${e}#open`;
        }
      }
      getWatchUrl(t) {
        const e = this.getLiveOriginIdFromVideoId(t);
        if (e) {
          return `https://www.pluto.tv/${this.getLocaleFromVideoId(t)}/watch/live-tv/#${e}`;
        }
        return `https://www.pluto.tv/${t.replace(/^\/+|\/+$/g, "").replace(/#open$/i, "")}#open`;
      }
      isMoviePath(t) {
        return this.ci(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      isShowEpisodePath(t) {
        return this.li(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      isLiveTvPath(t) {
        return this.ui(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      getLocale(t) {
        return this.di(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      getLiveOriginId(t) {
        const e = t.hash.replace(/^#/, "").trim();
        if (e && e.toLowerCase() !== "open") {
          return e;
        }
      }
      buildLiveVideoId(t, e = ar) {
        return `${e || ar}/watch/live-tv/#${t}`;
      }
      getLiveOriginIdFromVideoId(t) {
        var e;
        const n = t.replace(/^\/+/, "");
        if (/#/.test(n) && /watch\/live-tv/i.test(n)) {
          const t = (e = n.split("#").pop()) === null || e === undefined ? undefined : e.trim();
          if (t && t.toLowerCase() !== "open") {
            return t;
          }
        }
        const i = n.match(/live-tv\/([^/#]+)/i);
        if (i == null ? undefined : i[1]) {
          return i[1];
        } else if (/^\d+$/.test(n)) {
          return n;
        } else {
          return undefined;
        }
      }
      getLocaleFromVideoId(t) {
        return this.di(t.replace(/^\/+|\/+$/g, ""));
      }
      di(t) {
        const e = t.split("/")[0];
        if (e && /^[a-z]{2}(?:-[a-z]{2})?$/i.test(e) && e.length <= 5) {
          return e.toLowerCase();
        } else {
          return ar;
        }
      }
      ui(t) {
        return rr.test(t);
      }
      hi(t) {
        return /(^|\/)on-demand\//.test(t);
      }
      ci(t) {
        return /(^|\/)movies\/[^/]+/.test(t);
      }
      li(t) {
        return /(^|\/)shows\/[^/]+\/episode\/[^/]+/.test(t);
      }
    }([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", ki.PLUTO_TV, false, ["browse_scripts/plutotv/plutotv_browse_bundled.js"]);
    Object.freeze(ur);
    const cr = ur;
    const lr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("shahid.mbc.net");
          const n = t.pathname.includes(G.VIDEO_TYPES.SHOW);
          const i = t.pathname.includes(G.VIDEO_TYPES.LIVE_TV);
          return e && (n || i);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("shahid.mbc.net");
      }
      getVideoId(t) {
        return t.pathname.substring(4);
      }
    }([], ["content_scripts/shahid/shahid_content_bundled.js"], "shahid", ki.SHAHID, false, ["browse_scripts/shahid/shahid_browse_bundled.js"]);
    Object.freeze(lr);
    const hr = lr;
    const dr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".shudder.com") && (t.pathname.includes("/video") || t.pathname.includes("/live"));
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".shudder.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/shudder/shudder_content_bundled.js"], Mi.SHUDDER, ki.SHUDDER, false, ["browse_scripts/shudder/shudder_browse_bundled.js"]);
    Object.freeze(dr);
    const pr = dr;
    const fr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("watch.sling.com");
          const n = t.pathname.split("/");
          return e && n.length > 0 && n[n.length - 1] === "watch";
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".sling.com");
      }
      getVideoId(t) {
        return t.pathname.slice(1) || undefined;
      }
    }([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", ki.SLING, false, ["browse_scripts/sling/sling_browse_bundled.js"]);
    Object.freeze(fr);
    const Dr = fr;
    const vr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("sonyliv.com");
          const n = t.searchParams.get("watch") === "true";
          return e && n;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".sonyliv.com");
      }
      getVideoId(t) {
        let e = t.pathname.substring(1);
        if (t.search) {
          e += t.search;
        }
        return e;
      }
    }([], ["content_scripts/sonyliv/sonyliv_content_bundled.js"], "sonyliv", ki.SONY_LIV, false, ["browse_scripts/sonyliv/sonyliv_browse_bundled.js"]);
    Object.freeze(vr);
    const gr = vr;
    const mr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("spotify.com");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".spotify.com");
      }
      getVideoId(t) {
        const e = t.pathname.replace(/^\//, "");
        if (e.startsWith("track/")) {
          const t = e.split("/")[1];
          if (t) {
            return `track/${t}`;
          } else {
            return undefined;
          }
        }
        const n = t.searchParams.get("trackId");
        if (n) {
          return `track/${n}`;
        }
        return e + t.search || undefined;
      }
    }([], ["content_scripts/spotify/spotify_content_bundled.js"], "spotify", ki.SPOTIFY, false);
    Object.freeze(mr);
    const wr = mr;
    const yr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("app.stan.com.au") || t.hostname.includes("play.stan.com.au");
          const n = t.pathname.split("/");
          return e && n.length === 4 && n[3] === "play";
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".stan.com.au");
      }
      getVideoId(t) {
        return t.pathname.split("/")[2];
      }
    }([], ["content_scripts/stan/stan_content_bundled.js"], "stan", ki.STAN, false, ["browse_scripts/stan/stan_browse_bundled.js"]);
    Object.freeze(yr);
    const br = yr;
    const Cr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".starplus.") && t.pathname.includes("/video");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".starplus.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        if (e && e.length > 0) {
          return e[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", ki.STAR_PLUS, false);
    Object.freeze(Cr);
    const Fr = Cr;
    const _r = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname === "tsn.ca" || t.hostname.endsWith(".tsn.ca");
          const n = t.pathname.split("/").filter(Boolean);
          const i = n.indexOf("video");
          const s = vi(t.pathname);
          const o = t.pathname.includes("/event/");
          const r = i !== -1;
          const a = i !== -1 && n.length > i + 1;
          console.log("checking tsn party url", {
            isTsn: e,
            hasVideoSection: r,
            hasExtraPathAfterVideo: a,
            isLive: s,
            isEvent: o
          });
          return e && (s || o || r && a);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".tsn.");
      }
      getVideoId(t) {
        return t.pathname.slice(1) || undefined;
      }
    }([], ["content_scripts/tsnplus/tsnplus_content_bundled.js"], "tsnplus", ki.TSN_PLUS, false, ["browse_scripts/tsnplus/tsnplus_browse_bundled.js"]);
    Object.freeze(_r);
    const Er = _r;
    const xr = new class extends Si {
      isBrowsing(t) {
        return t.hostname.includes("tubitv.com");
      }
      isValidUrl(t) {
        return function (t) {
          const e = t.pathname.includes("live");
          const n = ["tv-shows", "movies"].some(e => t.pathname.includes(e)) && t.pathname.split("/").length > 2;
          return t.hostname.includes("tubitv.com") && (e || n);
        }(t);
      }
      getVideoId(t) {
        return t.pathname.split("/").slice(0, 3).join("/");
      }
    }([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", ki.TUBI_TV, false, ["browse_scripts/tubitv/tubitv_browse_bundled.js"]);
    Object.freeze(xr);
    const kr = xr;
    const Ar = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".unext.") && (t.pathname.includes("/play") || t.pathname.includes("/live"));
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".unext.");
      }
      getVideoId(t) {
        const e = t.pathname.split("/").filter(Boolean);
        if (e[0] === "play" && e.length >= 3) {
          return `${e[1]}/${e[2]}`;
        } else if (e[0] === "live" && e.length >= 2) {
          return e[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/unext/unext_content_bundled.js"], "unext", ki.UNEXT, false, ["browse_scripts/unext/unext_browse_bundled.js"]);
    Object.freeze(Ar);
    const Ir = Ar;
    const Sr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes(".vidio.");
          const n = t.pathname.includes("/watch/") || t.pathname.includes("/live/");
          const i = t.pathname.includes("shorts");
          return e && n && !i;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".vidio.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/vidio/vidio_content_bundled.js"], "vidio", ki.VIDIO, false, ["browse_scripts/vidio/vidio_browse_bundled.js"]);
    Object.freeze(Sr);
    const Br = Sr;
    const jr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("viki.com");
          const n = t.pathname.includes("videos");
          return e && n;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".viki.com");
      }
      getVideoId(t) {
        const e = t.pathname.split("/");
        if (e.length === 3 && e[1] === "videos") {
          return e[2];
        }
      }
    }([], ["content_scripts/viki/viki_content_bundled.js"], "viki", ki.VIKI, false, ["browse_scripts/viki/viki_browse_bundled.js"]);
    Object.freeze(jr);
    const $r = jr;
    const Tr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("viu.com");
          const n = t.pathname.includes(Z.VIDEO_TYPES.VIDEO);
          const i = t.pathname.includes(Z.VIDEO_TYPES.LIVE);
          return e && (n || i);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".viu.");
      }
      getVideoId(t) {
        return `${t.pathname.split("/")?.[4]}/${t.pathname.split("/")?.[5]}/${t.pathname.split("/")?.[6]}${t.search}`;
      }
    }([], ["content_scripts/viu/viu_content_bundled.js"], "viu", ki.VIU, false, ["browse_scripts/viu/viu_browse_bundled.js"]);
    Object.freeze(Tr);
    const Pr = Tr;
    const Mr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          const e = t.hostname.includes("vix.com");
          const n = Object.values(H.PATH_TYPES).some(e => t.pathname.includes(e));
          return e && n;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("vix.com");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/vix/vix_content_bundled.js"], "vix", ki.VIX, false, ["browse_scripts/vix/vix_browse_bundled.js"]);
    Object.freeze(Mr);
    const Lr = Mr;
    const Rr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".willow.tv") && t.pathname.split("/").length >= 3;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".willow.tv");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/willow/willow_content_bundled.js"], "willow", ki.WILLOW, false, ["browse_scripts/willow/willow_browse_bundled.js"]);
    Object.freeze(Rr);
    const Or = Rr;
    const Ur = new class extends Si {
      isBrowsing(t) {
        return !t.href.includes(".hotstar.") && !t.href.includes(".fubo.") && !t.href.includes("apps.disneyplus.") && !!t.href.includes("watch?");
      }
      isValidUrl(t) {
        return function (t) {
          return (!fi(t) || !!t.pathname.includes("/watch")) && t.hostname.includes(".youtube.");
        }(t);
      }
      getVideoId(t) {
        let e;
        const {
          pathname: n,
          searchParams: i,
          hostname: s
        } = t;
        if (function (t = new URL(window.location.href)) {
          return fi(t) && t.pathname.includes("/watch");
        }(t)) {
          const t = n.split("/").filter(Boolean);
          if (t[0] === "watch" && t[1]) {
            e = t[1];
          }
        } else if (n.startsWith("/watch")) {
          e = i.get("v") || undefined;
        } else if (n.startsWith("/shorts/")) {
          e = n.split("/").filter(Boolean)[1];
        }
        if (!e && (t.href.includes("/watch") || t.href.includes("/shorts/"))) {
          const n = /(youtu.*be.*)\/(watch.*?v=|embed\/|v|shorts\/|shorts|)(.*?((?=[&#?])|$))/gm.exec(t.href);
          e = n != null && n.length > 3 && n[3] ? n[3] : undefined;
        }
        if (!e) {
          const t = n.split("/").filter(Boolean);
          const i = t[t.length - 1];
          if (n.startsWith("/embed/")) {
            e = i !== "embed" ? i : undefined;
          } else if (n.startsWith("/v/")) {
            e = i !== "v" ? i : undefined;
          } else if (s === "youtu.be") {
            e = i;
          }
        }
        return e || "browsing";
      }
    }([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", ki.YOUTUBE, false, []);
    Object.freeze(Ur);
    const Vr = Ur;
    const Hr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".zee5.") && t.pathname.split("/").length >= 5;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".zee5.");
      }
      getVideoId(t) {
        const e = t.pathname.substring(1).split("global/");
        return e[e.length - 1];
      }
    }([], ["content_scripts/zee5/zee5_content_bundled.js"], "zee5", ki.ZEE5, false, ["browse_scripts/zee5/zee5_browse_bundled.js"]);
    Object.freeze(Hr);
    const Nr = Hr;
    const Gr = new class extends Si {
      pi(t) {
        return t === "nba.com" || t.endsWith(".nba.com");
      }
      fi(t) {
        return !!t.startsWith("/watch/feature") || !!t.startsWith("/watch/nba-tv") || t.startsWith("/watch/") || t.startsWith("/game/");
      }
      isBrowsing(t) {
        return t.hostname.includes(".nba.");
      }
      isValidUrl(t) {
        return this.pi(t.hostname) && this.fi(t.pathname.toLowerCase());
      }
      getVideoId(t) {
        const e = t.pathname.replace(/\/+$/, "").replace(/^\/+/, "");
        const n = e.toLowerCase();
        if (n.startsWith("game/") || n.startsWith("watch/")) {
          return e;
        }
      }
    }([], ["content_scripts/leaguepass/leaguepass_content_bundled.js"], "leaguepass", ki.LEAGUE_PASS, false, ["browse_scripts/leaguepass/leaguepass_browse_bundled.js"]);
    Object.freeze(Gr);
    const zr = Gr;
    const Zr = new class extends Si {
      isBrowsing(t) {
        return t.hostname.includes(".dazn.");
      }
      isValidUrl(t) {
        return t.hostname.includes("dazn.com");
      }
      getVideoId(t) {
        const e = t.pathname.split("/").filter(Boolean);
        if (/^[a-z]{2}-[A-Z]{2}$/.test(e[0])) {
          e.shift();
        }
        return e.join("/");
      }
    }([], ["content_scripts/dazn/dazn_content_bundled.js"], "dazn", ki.DAZN, false, ["browse_scripts/dazn/dazn_browse_bundled.js"]);
    Object.freeze(Zr);
    const Qr = Zr;
    function Wr(t) {
      return t.hostname.includes("miguvideo.com") && (t.pathname === "/" || t.pathname === "");
    }
    const Yr = new class extends Si {
      isBrowsing(t) {
        return !Wr(t) && t.hostname.includes(".miguvideo.");
      }
      isValidUrl(t) {
        return !!t.hostname.includes("miguvideo.com") && !!t.pathname.startsWith("/p/") || Wr(t);
      }
      getVideoId(t) {
        if (Wr(t)) {
          return "live/home";
        }
        const e = t.pathname;
        const n = e.indexOf("/p/");
        if (n !== -1) {
          return e.substring(n + 3);
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/migu/migu_content_bundled.js"], "migu", ki.MIGU, false, ["browse_scripts/migu/migu_browse_bundled.js"]);
    Object.freeze(Yr);
    const Jr = Yr;
    const Kr = new class extends Si {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("f1tv.formula1.com") && t.pathname.includes("/detail/");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("f1tv.formula1.com") && !this.isValidUrl(t);
      }
      getVideoId(t) {
        const e = t.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
        if (e.startsWith("detail/")) {
          return e;
        }
      }
    }([], ["content_scripts/f1_tv/f1_tv_content_bundled.js"], Mi.F1_TV, ki.F1_TV, false, ["browse_scripts/f1_tv/f1_tv_browse_bundled.js"]);
    Object.freeze(Kr);
    const Xr = [ji, Qo, Ao, No, mo, Vr, xo, jo, ir, zo, or, Fr, qo, Uo, yo, cr, Ko, kr, er, br, _o, Dr, So, Ro, $r, wr, Yo, gr, Ir, Or, Nr, To, Co, hr, Pr, Br, pr, Mo, Er, zr, Qr, Lr, Jr, Kr];
    const qr = Object.fromEntries(Xr.map(t => [t.name, t]));
    function ta(t) {
      return qr[t];
    }
    var ea;
    function na(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class ia {
      constructor(t, e, n) {
        this._t = t;
        this.qn = e;
        this.Qe = n;
        A("Chat forwarder");
      }
      onMessage(t, e, n) {
        switch (t.type) {
          case i.LOAD_SESSION:
            {
              const e = t;
              this.Di(e.data);
              return false;
            }
          case ho.ON_MESSAGE:
            {
              const e = t;
              this.wt(e);
              this.Qe.onChatMessage();
              return false;
            }
          case ho.ON_BUFFER:
            {
              const e = t;
              this.gi(e);
              return false;
            }
          case ho.ON_TYPING:
            {
              const e = t;
              this.mi(e);
              return false;
            }
          case ho.ON_WATCHING_ADS:
            {
              const e = t;
              this.wi(e);
              return false;
            }
          case ho.UPDATE_SETTINGS:
            {
              const e = t;
              this.yi(e);
              return false;
            }
          case ho.ON_REACTION:
            {
              const e = t;
              this.bi(e);
              return false;
            }
          case ho.ON_GIF:
            {
              const e = t;
              this.Ci(e);
              return false;
            }
          case ho.USER_LIST:
            {
              const e = t;
              this.Fi(e);
              return false;
            }
          case ho.ON_WEB_RTC:
            this._t.onWebRTC(t.data);
            n();
            return true;
          case to.SET_CHAT_VISIBLE:
            {
              const e = t;
              this._i(e.data);
              n();
              return false;
            }
          case to.SET_USER_REACTIONS_DISABLED:
            {
              const e = t;
              this._t.setUserReactionsDisabledStatus(e.data.disabled);
              n();
              return false;
            }
          case ws.SIDEBAR_MESSAGING_READY:
            {
              console.log("Sidebar Ready");
              uo("cs_sidebar_messaging_ready");
              const t = window.teleparty?.tabId;
              console.log(t);
              this._t.setChatFrameReady(t ?? 0);
              n();
              return true;
            }
          case ws.DISPLAY_MODAL:
            {
              const e = t.data;
              console.log(e);
              return true;
            }
          case ws.SHARE_SHEET:
            {
              const e = t.data;
              navigator.share({
                url: e.url,
                title: e == null ? undefined : e.name,
                text: e == null ? undefined : e.title
              });
              n();
              return true;
            }
          case ws.TRACK_DATA:
            {
              const e = t.data;
              window.postMessage({
                type: "TP_GTM_EVENT",
                payload: Object.assign({}, e)
              }, "*");
              n();
              return true;
            }
          case ws.ON_UPDATE_SETTINGS:
            {
              const e = t.data;
              this._t.doUpdateSettings(e);
              n();
              return true;
            }
          case ws.ON_CHROME_STORAGE_UPDATE:
            try {
              chrome.storage.local.set(t.data);
            } catch (t) {
              console.log("Failed to update chrome storage");
            }
            n();
            return true;
          case ws.SET_REACTIONS_ACTIVE:
            {
              const e = t.data;
              this._t.setReactionsActive(e);
              n();
              return true;
            }
          case ws.RESET_VIEW:
            this._t.resetChatWindow(true);
            n();
            return true;
          case ws.ON_FOCUS:
            this._t.onSidebarFocus();
            n();
            return true;
          case ws.PREVIEW_REACTION:
            {
              const e = t.data;
              this._t.showReaction(e);
              n();
              return true;
            }
          case ws.RESET_CHAT_WINDOW:
            this._t.setChatVisible(false);
            this._t.removeChat();
            this._t.reloadChat();
            this._t.setChatVisible(true);
            n();
            return true;
          case "onUpdateSettings":
            {
              const e = t.data;
              this._t.doUpdateSettings(e);
              n();
              return true;
            }
          case ws.RECEIVED_MESSAGE:
            if (!this._t.shouldChatBeVisible() && (t.data?.originalMessage?.isSystemMessage === false || !!t.data?.originalMessage?.gifObject)) {
              this._t.incrementUnreadMessagesCount();
              n();
            }
            return true;
          default:
            return false;
        }
      }
      teardown() {
        this._t.teardown();
      }
      _i(t) {
        return na(this, undefined, undefined, function* () {
          const e = this._t.getSessionId();
          if (e) {
            const t = yield as.getItemsAsync(["REDIRECT_URL"]);
            if (t.REDIRECT_URL && t.REDIRECT_URL[e]) {
              this._t.setPartyUrl(t.REDIRECT_URL[e]);
            }
            const n = yield S.m(new oo(u, r, {
              key: "sportLobby"
            }));
            if ((n == null ? undefined : n.result) && n.result.includes(e)) {
              this._t.setPartyUrl(n.result);
            }
          }
          if (this._t.isPartyWindowsActive()) {
            if (t.visible) {
              yield this._t.resetChatWindow();
            } else {
              yield this._t.hideChatWindow();
            }
          } else {
            yield this._t.setChatVisible(t.visible);
            this._t.fixPageControls();
          }
        });
      }
      Di(t) {
        return na(this, undefined, undefined, function* () {
          if (t.isCreate) {
            uo("cs_load_session_received");
          }
          const n = t.sessionCallbackData.sessionId;
          const i = `${h}/join/${n}`;
          this._t.loadInitData(t);
          this._t.setPartyUrl(i);
          this._t.setSessionId(n);
          this._t.setSessionReactionDisabledStatus(t.sessionCallbackData.reactionsDisabled === "true");
          if (t.sessionCallbackData.userList) {
            this._t.loadUserList(t.sessionCallbackData.userList);
          }
          yield this._t.kn();
          if (t.isCreate) {
            uo("cs_chat_visible");
          }
          this.Qe.onInitChat();
          this._t.setSessionCreated(t.isCreate);
          const s = ta(this.qn.getStreamingServiceName())?.serverName;
          if (s) {
            this._t.logSidebarInjected(s);
          }
          this._t.sendInitDataToSidebar(t);
          if (t.showReviewMessage) {
            this._t.addReviewMessage();
          }
          if (!t.isCreate) {
            for (const e of t.sessionCallbackData.messages) {
              if ("gifObject" in e) {
                this._t.addGif(e);
              } else {
                this._t.addMessage(e, true);
              }
            }
          }
        });
      }
      wt(t) {
        this._t.addMessage(t.data);
      }
      bi(t) {
        this._t.showReaction(t.data);
      }
      Ci(t) {
        this._t.addGif(t.data);
      }
      gi(t) {
        this._t.onBufferingMessage(t.data);
      }
      mi(t) {
        this._t.onTypingMessage(t.data);
      }
      wi(t) {
        this._t.onWatchingAdsMessage(t.data);
      }
      yi(t) {
        this._t.onUpdateSettingsMessage(t.data);
      }
      Fi(t) {
        this._t.loadUserList(t.data.userList);
        this._t.setSocketConnectionId(t.data.socketConnectionId);
      }
    }
    (function (t) {
      t.UPDATE_SESSION = "updateSession";
      t.NEXT_EPISODE = "nextEpisode";
      t.REBOOT_SESSION = "rebootSession";
      t.GET_SERVER_TIME = "getServerTime";
      t.RELOAD_PARTY = "reloadParty";
      t.PARTY_PHASE = "partyPhase";
    })(ea ||= {});
    class sa extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.BROADCAST);
        this.data = n;
      }
    }
    class oa extends t {
      constructor(t, e, n) {
        super(t, e, n);
        this.type = n;
      }
    }
    class ra extends oa {
      constructor(t, e) {
        super(t, e, ea.GET_SERVER_TIME);
      }
    }
    class aa extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.BROADCAST_NEXT_EPISODE);
        this.data = n;
      }
    }
    class ua extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.SET_BUFFERING);
        this.data = n;
      }
    }
    class ca extends Zi {
      constructor(t, e, n) {
        super(t, e, Ni.SET_WATCHING_ADS);
        this.data = n;
      }
    }
    const la = "PING";
    const ha = "SYNC";
    const da = "PERIODIC_VALIDATION";
    const pa = "BROADCAST";
    const fa = "ACTIVATION_CONTINUE_SYNC";
    class Da extends e {
      constructor(t, e, n) {
        super(t, e, i.STAY_ALIVE);
        this.data = n;
      }
    }
    function va(t) {
      return typeof t == "object" && t !== null && "videoService" in t && "videoId" in t;
    }
    function ga(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const ma = new class {
      getRedirectDataForTabAsync(t) {
        return ga(this, undefined, undefined, function* () {
          const e = (yield as.getItemsAsync([_])).redirectDataMap;
          const n = this.Ei(t);
          if (e && e[n]) {
            const t = e[n];
            if (this.xi(t)) {
              return t;
            }
          }
        });
      }
      deleteRedirectDataForTabAsync(t) {
        return ga(this, undefined, undefined, function* () {
          const e = (yield as.getItemsAsync([_])).redirectDataMap;
          const n = this.Ei(t);
          if (e && e[n]) {
            delete e[n];
          }
          yield ss.setItemsAsync({
            [_]: e
          });
        });
      }
      Ei(t) {
        return t;
      }
      storeRedirectDataForTabAsync(t, e) {
        return ga(this, undefined, undefined, function* () {
          console.log("store data for tab " + t);
          const n = this.Ei(e);
          let i = yield as.getItemsAsync([_]);
          i[n] = t;
          i = this.ki(i);
          yield ss.setItemsAsync({
            [_]: i
          });
        });
      }
      ki(t) {
        return function (t, e) {
          const n = {};
          let i;
          for (i in t) {
            if (t.hasOwnProperty(i) && e(t[i])) {
              n[i] = t[i];
            }
          }
          return n;
        }(t, this.xi);
      }
      xi(t) {
        const e = t.date;
        return e !== undefined && typeof e == "number" && e <= Date.now() && Date.now() - e < 10800000;
      }
    }();
    Object.freeze(ma);
    const wa = ma;
    var ya;
    (function (t) {
      t.PLAY = "play";
      t.PAUSE = "pause";
      t.SEEK = "seek";
      t.EPISODE_JUMP = "episodeJump";
    })(ya ||= {});
    class ba {
      constructor() {
        this.Ai = Oi()("teleparty:log");
        this.Ii = Oi()("teleparty:warn");
        this.Si = Oi()("teleparty:error");
        this.Ai.log = console.debug.bind(console);
        this.Ii.log = console.warn.bind(console);
        this.Si.log = console.error.bind(console);
      }
      static get instance() {
        ba.Bi ||= new ba();
        return ba.Bi;
      }
      log(t, ...e) {
        this.Ai(`[Teleparty] ${t}`, ...e);
      }
      warn(t, ...e) {
        this.Ii(`[Teleparty] ${t}`, ...e);
      }
      error(t, ...e) {
        this.Si(`[Teleparty] ${t}`, ...e);
      }
    }
    const Ca = ba.instance;
    function Fa(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class _a {
      constructor(t, e, n, i) {
        this.ji = [];
        this.$i = 0;
        this.Ti = 0;
        this.Pi = [];
        this.Mi = false;
        this.ge = false;
        this.B = false;
        this.Li = false;
        this.Ri = false;
        this.Oi = false;
        this.Ui = undefined;
        this.Vi = 0;
        this.Hi = 0;
        this.Ni = "";
        this.Gi = 0;
        this.zi = {};
        this.Zi = () => Fa(this, undefined, undefined, function* () {
          try {
            yield fetch("https://www3.doubleclick.net", {
              method: "HEAD",
              mode: "no-cors",
              cache: "no-store"
            });
            this.Ui = false;
          } catch (t) {
            this.Ui = true;
          }
        });
        this.Qi = () => Fa(this, undefined, undefined, function* () {
          if (!this.ke || this.Wi || this.Mi) {
            return;
          }
          const t = this.qn.getVideoElement();
          if (!t) {
            return;
          }
          const e = this.Yi();
          const n = Math.round((t.currentTime || 0) * 1000);
          if (!(Math.abs(e - n) <= Ts)) {
            console.log("Activation continue requested, syncing to current party time", e, n);
            yield this.qn.setCurrentTime(e);
          }
        });
        this.Ji = (t = false, e = false, n = false, i) => Fa(this, undefined, undefined, function* () {
          if (!n && this.qn.shouldSuppressLocalBroadcast()) {
            return;
          }
          if (this.Wi) {
            return;
          }
          if (!this.Ki.shouldSync()) {
            return;
          }
          if (this.B) {
            this.forceSync();
            return;
          }
          if (!this.Ri && !e) {
            return;
          }
          const s = yield this.Xi(n ? {
            sessionMetadataRefresh: true
          } : undefined);
          if (n && Object.keys(this.zi).length > 0) {
            s.data.providerOffsets = Object.assign({}, this.zi);
          }
          const o = n || (yield this.qi(s.data, e, i));
          const r = yield this.ts(s.data, e);
          if (o) {
            if ((this.es === ki.ESPN || this.es === ki.TSN_PLUS) && this.ns(s.data, r)) {
              return;
            }
            yield this.ss(s, n);
            if (r.length > 0) {
              this.rs.logInteraction(r[0]);
            }
          } else if (t) {
            if (yield this.us(e)) {
              const t = yield this.Xi();
              const n = yield this.ts(t.data, e);
              if ((this.es === ki.ESPN || this.es === ki.TSN_PLUS) && this.ns(t.data, n)) {
                return;
              }
              yield this.ss(t);
            }
          }
        });
        this.cs = () => Fa(this, undefined, undefined, function* () {
          if (this.ls == xi.PAUSED && this.hs) {
            clearInterval(this.hs);
            this.hs = setInterval(() => {
              this.ds();
            }, 60000);
          }
          if (this.ps()) {
            return;
          }
          yield this.qn.waitVideoDoneLoadingAsync();
          if (this.ps()) {
            return;
          }
          const t = yield this.qn.getStateAsync();
          yield this.fs(t);
          const e = yield this.qn.getStateAsync();
          yield this.Ds(e);
          if (this.Ri === false) {
            this.Ri = true;
          }
        });
        this.qn = t;
        this._t = e;
        this.Ki = n;
        this.rs = i;
        this.Ki.setMessageForwarder(this);
        this.vs = 0;
        this.Wi = false;
        this.ls = xi.PAUSED;
        this.gs = 0;
        this.ws = 0;
        this.ys = 0;
        this.es = this.qn.getStreamingServiceName();
        A("Video forwarder");
        this.Zi();
      }
      onMessage(t, e, n) {
        switch (t.type) {
          case i.GET_VIDEO_DATA:
            this.bs(n);
            return true;
          case i.LOAD_SESSION:
            {
              const e = t;
              this.Cs(e.data);
              return false;
            }
          case ea.UPDATE_SESSION:
            {
              const e = t;
              this.Fs(e.data);
              return false;
            }
          case ea.NEXT_EPISODE:
            {
              const e = t;
              if (e.data.isNextEpisode === true) {
                this._s(e.data);
              } else {
                this.Es(e.data);
              }
              return false;
            }
          case ea.REBOOT_SESSION:
            {
              const e = t;
              this.xs(e.data, n);
              return true;
            }
          case ea.RELOAD_PARTY:
            {
              const e = t.data;
              ((e == null ? undefined : e.source) === _a.SIDEBAR_RELOAD_SOURCE ? this.ks() : this.reloadNextEpisode()).then(() => {
                console.log("Party Reloaded");
                n();
              }).catch(t => {
                console.log("Error reloading party", t);
                n({
                  error: String(t)
                });
              });
              return true;
            }
          case ho.ON_WATCHING_ADS:
            {
              const e = t;
              this.wi(e);
              return false;
            }
          case ws.GO_NEXT_EPISODE:
            this.qn.triggerNextEpisodeClick();
            return true;
          default:
            return false;
        }
      }
      As() {
        document.documentElement.setAttribute(_a.ACTIVATION_EXPECTED_STATE_ATTR, this.ls.toString());
        document.documentElement.setAttribute(_a.ACTIVATION_EXPECTED_SERVICE_ATTR, this.es);
      }
      Is() {
        const t = document.documentElement.getAttribute(_a.ACTIVATION_EXPECTED_SERVICE_ATTR);
        if (!t || t === this.es) {
          document.documentElement.removeAttribute(_a.ACTIVATION_EXPECTED_STATE_ATTR);
          document.documentElement.removeAttribute(_a.ACTIVATION_EXPECTED_SERVICE_ATTR);
        }
      }
      wi(t) {
        if (t.data.anyoneWatchingAds && !this.ge) {
          es.pushTask(this.qn.doAdCheck.bind(this.qn), "doAdCheck");
          if (this.qn.hasAdBreakWithinMs(_a.UPCOMING_AD_PLAYTHROUGH_MS)) {
            this.qn.play();
          } else {
            this.forceSync();
          }
        }
        this.ge = t.data.anyoneWatchingAds;
      }
      Ss() {
        return Fa(this, undefined, undefined, function* () {
          const e = yield this.qn.getVideoDataAsync();
          const n = yield this.qn.getStateAsync();
          const i = n.playbackState.toString() === this.ls.toString() && Math.abs(n.playbackPositionMilliseconds - this.Yi()) < Ts && this.Bs === e.videoId || n.playbackState !== Ei.PLAYING && n.playbackState !== Ei.PAUSED || this.Wi;
          const s = ta(this.qn.getStreamingServiceName())?.serverName;
          if (s) {
            S.m(new ro(u, r, {
              event_name: "periodic_video_state_checked",
              service: s,
              video_data: e,
              success: i
            }, eo.PARTY));
          }
        });
      }
      getOthersWatchingAds() {
        return this.ge;
      }
      get videoId() {
        return this.Bs;
      }
      set videoId(t) {
        this.Bs = t;
      }
      sendTeardown(t) {
        const e = new Ji(u, r, t);
        S.m(e);
      }
      teardown() {
        this.qn.scheduledPartyPlaybackOnly = false;
        if (this.ke) {
          this.qn.pause();
        }
        this.ke = undefined;
        this.Oi = false;
        this.Is();
        if (this.js) {
          clearInterval(this.js);
        }
        if (this.hs) {
          clearInterval(this.hs);
        }
        this.$s();
        es.disable();
        this.Ki.stopListening();
      }
      isInParty() {
        return this.ke != null;
      }
      isScheduledPartyPlaybackOnly() {
        return this.qn.scheduledPartyPlaybackOnly;
      }
      xs(t, e) {
        es.resetTasks();
        if (this.Bs == t.videoId) {
          this.Fs(t);
        }
        e(this.Bs == t.videoId);
        const n = new o(u, r, {
          eventType: "reboot",
          sessionId: this.ke
        });
        S.m(n);
      }
      tryBroadcast(t = false, e) {
        if (this.Mi) {
          return;
        }
        if (this.B) {
          this.forceSync();
          return;
        }
        const n = this.qn.shouldSuppressLocalBroadcast();
        const i = this.Wi;
        const s = !!this.ke;
        const o = es.hasTaskInQueue(pa);
        if (!n && !i && !!s && !o) {
          es.pushTask(() => this.Ji(t, false, false, e), pa);
        }
      }
      setBuffering(t) {
        if (this.ke) {
          const e = new ua(u, r, {
            buffering: t
          });
          S.m(e);
        }
      }
      isWatchingAds() {
        return this.Mi;
      }
      setWatchingAds(t, e) {
        if (this.ke) {
          this.Mi = t;
          const n = new ca(u, r, {
            watchingAds: t,
            adDurationLeft: e
          });
          S.m(n);
        }
      }
      clearAdPresenceState() {
        this.ge = false;
        if (this.Mi) {
          this.setWatchingAds(false);
        } else {
          this.Mi = false;
        }
      }
      sendOtherEpisodeAsync(t, e) {
        return Fa(this, undefined, undefined, function* () {
          return this.Ts(t, false, e);
        });
      }
      sendNextEpisodeAsync(t, e) {
        return Fa(this, undefined, undefined, function* () {
          return this.Ts(t, true, e);
        });
      }
      Ts(t, e, n) {
        return Fa(this, undefined, undefined, function* () {
          if (this.ke && t !== this.Bs && t !== this.Ps) {
            this.Ps = t;
            this.Wi = true;
            this.rs.logInteraction(ya.EPISODE_JUMP);
            const i = {
              nextEpisode: t,
              isNextEpisode: e
            };
            if (this.es === ki.YOUTUBE && window.location.href.includes("/shorts/")) {
              i.videoType = Li.SHORTS;
            }
            if (n !== undefined) {
              i.extraInfo = n;
            }
            const s = new aa(u, r, i);
            const o = yield S.m(s);
            if (o && o.errorMessage === "Locked Session") {
              yield this.Ms(t);
            }
          }
        });
      }
      Ms(t) {
        return Fa(this, undefined, undefined, function* () {
          try {
            yield mi(() => t == this.Bs, 10000)();
            this.Wi = false;
          } catch (t) {
            this.dn("An error has occured when trying to wait till the episode changed videos");
            const e = {
              showAlert: true,
              alertModal: Rs
            };
            this.sendTeardown(e);
          }
        });
      }
      ts(t, e, n = false) {
        return Fa(this, undefined, undefined, function* () {
          const n = [];
          if (t.lastKnownTime == null || t.lastKnownTimeUpdatedAt == null || t.state == null) {
            return n;
          }
          if (e && t.state === xi.PAUSED && t.lastKnownTime < Ps) {
            return n;
          }
          const i = Math.abs(t.lastKnownTime - this.Yi());
          if (t.state == this.ls && i < Ps) {
            return n;
          }
          if (i >= Ps && !this.qn.scheduledPartyPlaybackOnly) {
            n.push(ya.SEEK);
            const t = new o(u, r, {
              name: "video_seek",
              action: {
                source: "self"
              }
            });
            S.m(t);
            if (this.es == ki.PARAMOUNT) {
              yield gi(200)();
            }
          }
          if (t.state != this.ls) {
            if (t.state === xi.PLAYING) {
              n.push(ya.PLAY);
            } else {
              n.push(ya.PAUSE);
            }
          }
          return n;
        });
      }
      qi(t, e, n) {
        return Fa(this, undefined, undefined, function* () {
          const i = yield this.ts(t, e, true);
          if (n) {
            return n.some(t => i.includes(t));
          } else {
            return i.length > 0;
          }
        });
      }
      Xi(t) {
        return Fa(this, undefined, undefined, function* () {
          const e = yield this.qn.getUpdateSessionDataAsync(t);
          e.lastKnownTimeUpdatedAt -= this.Ti;
          e.lastKnownTime = Math.round(e.lastKnownTime);
          return new sa(u, r, e);
        });
      }
      forceSync() {
        es.pushTask(this.cs, ha);
      }
      consumePendingCreatePlaybackBroadcast() {
        return !!this.Oi && (this.Oi = false, true);
      }
      syncToCurrentPartyTimeAfterActivation() {
        if (!es.hasTaskInQueue(fa)) {
          es.pushTask(this.Qi, fa);
        }
      }
      Es(t) {
        return Fa(this, undefined, undefined, function* () {
          this.vs = Date.now();
          Ca.log("Received other episode message, current task manager tasks are", es.getCurrentTasks());
          es.pushTask(() => this.Ls(t, false), "onOtherEpisodeAsync");
        });
      }
      _s(t) {
        return Fa(this, undefined, undefined, function* () {
          this.vs = Date.now();
          Ca.log("Received next episode message, current task manager tasks are", es.getCurrentTasks());
          es.pushTask(() => this.Ls(t, true), "onNextEpisodeAsync");
        });
      }
      Ls(t, e) {
        return Fa(this, undefined, undefined, function* () {
          try {
            Ca.log(e ? "Starting next episode flow" : "Starting other episode flow");
            this.Wi = true;
            this.clearAdPresenceState();
            this.Bs = t.videoId;
            this.rs.logInteraction(ya.EPISODE_JUMP, true);
            if (e) {
              yield this.qn.jumpToNextEpisode(t);
            } else {
              yield this.qn.jumpToOtherEpisode(t);
            }
            yield this.Ki.loadNewVideoAsync(t.videoId);
            A("After load new video");
            this.Ki.reloadListeners();
            yield this.qn.waitVideoDoneLoadingAsync();
            yield this.Rs(t.videoId, e ? "next_episode" : "other_episode");
            if (this.ys < this.vs) {
              this.ls = xi.PAUSED;
              this.gs = 0;
              this.ws = Date.now();
              A("Sending broadcast after episode change");
              es.pushTask(() => this.Ji(true, true, this.qn.shouldForceEpisodeCompletionBroadcast()), pa);
              es.removeTask(ha);
            }
            this.Wi = false;
            this.clearAdPresenceState();
            const n = new o(u, r, {
              name: "video_start",
              action: {
                description: "video session has begun"
              }
            });
            S.m(n);
          } catch (t) {
            this.dn("Error loading new video.");
            console.log("Error was", t);
            this.Wi = false;
            this.clearAdPresenceState();
            yield this.reloadNextEpisode();
          }
        });
      }
      persistExtension(t, e) {
        return Fa(this, undefined, undefined, function* () {
          console.log("persist here");
          const s = window.teleparty?.tabId ?? 0;
          yield this.Os(s, t);
          const o = yield this.Us(e);
          const r = e ?? this.Vs(o);
          yield this.Hs(o, s, r);
        });
      }
      Us(t) {
        return Fa(this, undefined, undefined, function* () {
          if (!t || !this.ke) {
            return this.Ns();
          }
          switch (this.es) {
            case ki.DISNEY_PLUS:
            case ki.CANALPLUS:
              {
                const e = ta(this.es);
                if (!e) {
                  break;
                }
                return {
                  sessionId: this.ke,
                  videoId: this.Bs,
                  videoService: e.serverName,
                  serviceDomain: new URL(t).hostname,
                  selectedProvider: this.Gs
                };
              }
          }
          return this.Ns();
        });
      }
      reloadNextEpisode() {
        return Fa(this, undefined, undefined, function* () {
          try {
            Ca.log("Attempting to reload next episode");
            const n = yield this.Ns();
            const i = this.zs(this.Zs(n));
            const s = window.teleparty?.tabId ?? 0;
            yield this.Qs(n, s, i, false);
            Ca.log("Redirect URL is", i);
            if (function (t, e) {
              if (t === e) {
                return true;
              }
              try {
                const n = new URL(t);
                const i = new URL(e);
                if (n.origin !== i.origin) {
                  return false;
                }
                const s = t => {
                  const e = t.replace(/\/+$/, "");
                  if (e === "") {
                    return "/";
                  } else {
                    return e;
                  }
                };
                if (s(n.pathname) !== s(i.pathname)) {
                  return false;
                }
                const o = new URLSearchParams(i.search);
                for (const [t, e] of o.entries()) {
                  if (n.searchParams.get(t) !== e) {
                    return false;
                  }
                }
                return true;
              } catch (t) {
                return false;
              }
            }(window.location.href, i)) {
              const t = va(n) ? n.videoService.toLowerCase() : "";
              if (t === "tsnplus" || vi(new URL(window.location.href).pathname)) {
                Ca.log("Already on TSN redirect URL, skipping navigation");
                return;
              }
            }
            this.Ws(i);
          } catch (t) {
            Ca.error("Error reloading next episode:", t);
            this.Ys("Failed to fix next episode.");
          }
        });
      }
      ks() {
        return Fa(this, undefined, undefined, function* () {
          try {
            console.log("Reloading party from sidebar");
            const n = yield this.Ns();
            const i = this.Vs(n);
            const s = window.teleparty?.tabId ?? 0;
            yield this.Qs(n, s, i, false);
            console.log("Sidebar reload URL is", i);
            this.Ws(i);
          } catch (t) {
            console.log("Error reloading party from sidebar", t);
            this.Ys("Failed to reload party from sidebar.");
          }
        });
      }
      Vs(t) {
        try {
          return this.zs(this.Zs(t));
        } catch (t) {
          console.log("Unable to parse reload redirect URL. Reloading current page instead.", t);
          return window.location.href;
        }
      }
      Qs(t, e, n, i) {
        return Fa(this, undefined, undefined, function* () {
          yield this.Os(e, i);
          yield this.Hs(t, e, n);
        });
      }
      Os(t, e) {
        return Fa(this, undefined, undefined, function* () {
          const n = new Da(u, r, {
            tabId: t,
            persist: e
          });
          yield S.m(n);
        });
      }
      Hs(t, e, n) {
        return Fa(this, undefined, undefined, function* () {
          yield wa.storeRedirectDataForTabAsync(this.Js(t, n), e);
        });
      }
      Js(t, e) {
        return Object.assign(Object.assign({}, t), {
          videoId: this.Bs || t.videoId || "",
          sessionId: t.sessionId ?? this.ke ?? "",
          service: t.service ?? t.videoService ?? "",
          date: Date.now(),
          partyUrl: e
        });
      }
      zs(t) {
        const e = new URL(t, window.location.href);
        if (e.protocol !== "http:" && e.protocol !== "https:") {
          throw new Error("Invalid reload redirect protocol");
        }
        return e.toString();
      }
      Ws(t) {
        if (window.location.href !== t) {
          window.location.href = t;
        } else {
          window.location.reload();
        }
      }
      Ys(t) {
        this.dn(t);
        const e = new Ji(u, r, {
          showAlert: true,
          alertModal: Us
        });
        S.m(e);
      }
      Ns() {
        return Fa(this, undefined, undefined, function* () {
          return new Promise((t, e) => {
            const n = new XMLHttpRequest();
            n.timeout = 10000;
            n.ontimeout = () => {
              e(new Error());
            };
            n.onreadystatechange = () => {
              if (n.readyState === XMLHttpRequest.DONE) {
                try {
                  const e = JSON.parse(n.responseText);
                  t(e);
                } catch (t) {
                  e(t);
                  this.dn("Unable to get video endpoint data to reload session");
                }
              }
            };
            n.open("GET", `${l}/video?session=${this.ke}`, true);
            n.send(null);
          });
        });
      }
      Zs(t) {
        if (va(t)) {
          switch (t.videoService.toLowerCase().split("#")[0].trim()) {
            case "crunchyroll":
              return `https://www.crunchyroll.com/watch/${t.videoId}`;
            case "netflix":
              return `https://www.netflix.com/watch/${t.videoId}`;
            case "hulu":
              return `https://www.hulu.com/watch/${t.videoId.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i)?.[1] ?? t.videoId}`;
            case "disney":
              return `https://www.disneyplus.com/${t.videoType === "other" ? "video" : "play"}/${t.videoId}`;
            case "starplus":
              return `https://www.starplus.com/video/${t.videoId}`;
            case "amazon":
              {
                const e = t.serviceDomain;
                if (e) {
                  return `https://${e}/gp/video/detail/${t.videoId}?autoplay=1`;
                }
                throw new Error("No service Domain");
              }
            case "hbomax":
              return `https://play.hbomax.com/video/watch/${t.videoId}`;
            case "youtube":
              {
                const e = t.videoId;
                const n = t.serviceDomain;
                if (n) {
                  if (e === "browsing") {
                    return window.location.href;
                  }
                  if (e && e !== "browsing") {
                    if (t.videoType === Li.SHORTS) {
                      return `https://${n}/shorts/${e}`;
                    }
                    const i = new URL(`https://${n}/watch`);
                    i.searchParams.set("v", e);
                    return i.toString();
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
            case "peacock":
              {
                let e = "";
                e = t.videoType === "live" ? "live" : t.videoType === "event" ? "event" : "vod";
                return `https://www.peacocktv.com/watch/playback/${e}/${t.videoId}${t.state === "paused" ? "?paused=true" : ""}`;
              }
            case "disneymena":
              return `https://apps.disneyplus.com/${t.videoId}/watch`;
            case "appletv":
              return function (t) {
                const e = /^https?:\/\//i.test(t) ? new URL(t) : new URL(`https://tv.apple.com/${t.replace(/^\/+/, "")}`);
                e.searchParams.set("action", "play");
                return e.toString();
              }(t.videoId);
            case "max":
              return `https://play.max.com/video/watch/${t.videoId}`;
            case "plutotv":
              return cr.getWatchUrl(t.videoId);
            case "tsnplus":
              if (t.videoId.startsWith("live::")) {
                return `https://www.tsn.ca/live/?axisId=${t.videoId.split("live::")[1]}`;
              } else {
                return `https://www.tsn.ca/${t.videoId}`;
              }
            case "jiocinema":
              return `https://www.jiocinema.com/${t.videoId}`;
            case "tubitv":
              return `https://tubitv.com${t.videoId}`;
            case "funimation":
              return `https://www.funimation.com/v/${t.videoId}`;
            case "crave":
              {
                const e = t.videoId;
                if (e == null ? undefined : e.startsWith("live/")) {
                  return `https://www.crave.ca/en/live?channel=${e.slice(5)}`;
                }
                return `https://www.crave.ca/${e}`;
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
              return `https://video.unext.jp/${t.videoType === Li.LIVE ? "live" : "play"}/${t.videoId}`;
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
              return this.Ks(t.videoId);
            case "vidio":
              return `https://www.vidio.com/${t.videoId}`;
            case "migu":
              return `https://www.miguvideo.com/p/${t.videoId}`;
            case "f1tv":
              return this.Xs(t.videoId);
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
      Xs(t) {
        const e = /^https?:\/\//i.test(t) ? new URL(t) : new URL(`https://f1tv.formula1.com/${t.replace(/^\/+/, "")}`);
        e.searchParams.set("action", "play");
        return e.toString();
      }
      Ks(t) {
        if (/^https?:\/\//i.test(t)) {
          return t;
        }
        const e = t.replace(/^\/+/, "");
        return `https://www.viu.com/${e.startsWith("ott/") ? e : `ott/sg1/en/${e}`}`;
      }
      Fs(t) {
        this.ys = Date.now();
        es.pushTask(this.qs(t).bind(this), "Update Session Data");
      }
      qs(t) {
        if (t.state === xi.PAUSED && this.ls === xi.PLAYING) {
          this.ds();
          const t = new o(u, r, {
            name: "video_pause",
            action: {
              description: "video was played from pause",
              reason: "Video was played"
            }
          });
          S.m(t);
        } else if (t.state === xi.PLAYING && this.ls === xi.PAUSED) {
          const t = new o(u, r, {
            name: "video_resume",
            action: {
              description: "video was played from pause",
              reason: "Video was played"
            }
          });
          S.m(t);
          this.ds();
        }
        this.ls = t.state;
        this.gs = t.lastKnownTime;
        this.ws = t.lastKnownTimeUpdatedAt;
        if (t.providerOffsets) {
          this.zi = t.providerOffsets;
        }
        this.As();
        return this.cs;
      }
      bs(t) {
        var e;
        return Fa(this, undefined, undefined, function* () {
          try {
            const n = yield this.qn.getVideoDataAsync();
            if ((e = n.serviceDomain) === null || e === undefined) {
              n.serviceDomain = window.location.hostname;
            }
            const i = yield this.qn.getStateAsync();
            n.is_player_fullscreen = document.fullscreenElement != null || document.webkitIsFullScreen;
            n.is_chat_visible = this._t.getChatVisible();
            n.is_adblock_enabled = this.Ui;
            n.video_ts_ms = Math.round(i.playbackPositionMilliseconds);
            n.party_ts_ms = this.gs;
            n.service = this.qn.getInternalStreamingServiceName();
            t(n);
          } catch (e) {
            console.error(e);
            t({
              error: e
            });
          }
        });
      }
      dn(t) {
        const e = new o(u, r, {
          name: "video_error",
          action: {
            description: t,
            reason: "An errors has occurred during video playback"
          }
        });
        S.m(e);
      }
      ns(t, e) {
        const n = e[0] || (t.state === xi.PLAYING ? ya.PLAY : ya.PAUSE);
        const i = n === ya.SEEK ? 500 : 1000;
        const s = `${n}:${t.state}:${Math.round(t.lastKnownTime / i)}`;
        const o = Date.now();
        return this.Ni === s && o - this.Gi < 500 || (this.Ni = s, this.Gi = o, false);
      }
      us(t) {
        return Fa(this, undefined, undefined, function* () {
          return new Promise(e => {
            const n = performance.now();
            const i = () => Fa(this, undefined, undefined, function* () {
              if (performance.now() - n >= 2500) {
                e(false);
              } else {
                const n = yield this.Xi();
                if (yield this.qi(n.data, t)) {
                  e(true);
                } else {
                  setTimeout(() => {
                    i();
                  }, 50);
                }
              }
            });
            i();
          });
        });
      }
      ss(t, e = false) {
        return Fa(this, undefined, undefined, function* () {
          if (this.Wi || this.Mi || !e && this.qn.shouldSuppressLocalBroadcast()) {
            return;
          }
          const n = this.ls;
          if (t.data.bufferingState) {
            t.data.state = xi.PAUSED;
            yield S.m(t, 1000);
            yield this.qn.waitVideoDoneLoadingAsync();
            const e = yield this.Xi();
            e.data.bufferingState = true;
            if (n == xi.PLAYING) {
              e.data.state = xi.PLAYING;
            }
            yield S.m(e, 1000);
            this.ls = e.data.state;
            this.gs = e.data.lastKnownTime;
            this.ws = Date.now();
          } else {
            yield S.m(t, 1000);
            this.ls = t.data.state;
            this.gs = t.data.lastKnownTime;
            this.ws = Date.now();
          }
        });
      }
      Cs(t) {
        var e;
        return Fa(this, undefined, undefined, function* () {
          es.enable();
          es.resetTasks();
          const s = t.sessionCallbackData;
          this.qn.scheduledPartyPlaybackOnly = s.sessionType === "scheduled" || ((e = s.videoService) === null || e === undefined ? undefined : e.toLowerCase()) === "crave" && (s.videoId ?? "").startsWith("live/");
          this.ke = s.sessionId;
          this.ls = s.state;
          this.gs = Number(s.lastKnownTime);
          this.ws = Number(s.lastKnownTimeUpdatedAt);
          this.Bs = s.videoId;
          this.ge = false;
          this.As();
          if (s.controlLock == "true") {
            this.B = true;
          }
          if (s.reactionsDisabled == "true") {
            this.Li = true;
          }
          this.Gs = s.selectedProvider;
          this.eo = s.defaultProvider;
          this.zi = s.providerOffsets ?? {};
          this.no();
          if (t.isCreate) {
            this.Ri = true;
            this.Oi = true;
            es.pushTask(this.Ji.bind(this), pa);
          } else if (s.sessionType === "scheduled") {
            this.Ri = true;
            es.pushTask(() => this.Ji(false, false, true), pa);
            this.forceSync();
          } else {
            this.forceSync();
          }
          const a = new o(u, r, {
            name: "video_start",
            action: {
              description: "video session has begun"
            }
          });
          S.m(a);
          this.Ki.startListening();
          this.io();
          if (!t.isCreate) {
            this.so(s.videoId, "join");
          }
        });
      }
      so(t, e) {
        return Fa(this, undefined, undefined, function* () {
          yield this.qn.waitVideoDoneLoadingAsync().catch(() => {});
          yield this.Rs(t, e);
        });
      }
      Rs(t, e) {
        var i;
        return Fa(this, undefined, undefined, function* () {
          const s = ta(this.qn.getStreamingServiceName())?.serverName;
          if (!s) {
            return;
          }
          let o;
          try {
            o = yield this.qn.getVideoDataAsync();
          } catch (t) {
            return;
          }
          const a = (t == null ? undefined : t.trim()) || undefined;
          const c = ((i = o.videoId) === null || i === undefined ? undefined : i.trim()) || undefined;
          let l;
          if (a) {
            if (c) {
              if (a !== c) {
                l = "mismatch";
              }
            } else {
              l = "actual_video_id_missing";
            }
          } else {
            l = "expected_video_id_missing";
          }
          S.m(new ro(u, r, {
            event_name: "video_id_correct",
            service: s,
            video_data: o,
            success: !l,
            extra_info: Object.assign({
              trigger: e,
              expected_video_id: a ?? null,
              actual_video_id: c ?? null
            }, l ? {
              failure_reason: l
            } : {})
          }, eo.PARTY));
        });
      }
      oo() {
        return new Promise(t => {
          const e = new ra(u, r);
          const n = Date.now();
          S.m(e).then(t => {
            const e = Date.now();
            if (t) {
              const i = t.serverTime;
              if (i) {
                wi(this.ji, e - n, 5);
                this.$i = yi(this.ji);
                wi(this.Pi, e - Math.round(this.$i / 2) - i, 5);
                this.Ti = yi(this.Pi);
              }
            }
          }).catch(t => {
            A(t);
            this.dn(t);
          });
          t();
        });
      }
      ds() {
        const t = new o(u, r, {
          name: "video_heartbeat",
          action: {
            description: "new heartbeat",
            reason: "Heartbeat session was due"
          }
        });
        S.m(t);
      }
      io() {
        if (this.js) {
          clearInterval(this.js);
        }
        if (this.hs) {
          clearInterval(this.hs);
        }
        this.js = setInterval(() => {
          if (!es.hasTaskInQueue(ha)) {
            es.pushTask(this.cs, ha);
          }
        }, 5000);
        this.hs = setInterval(() => {
          this.ds();
        }, 60000);
        this.ro = setInterval(() => {
          if (!es.hasTaskInQueue(la)) {
            es.pushTask(this.oo.bind(this), la);
          }
        }, 12500);
        this.ao = setInterval(() => {
          if (!es.hasTaskInQueue(da)) {
            es.pushTask(this.Ss.bind(this), da);
          }
        }, 300000);
        this.oo();
      }
      ps() {
        return !this.ke || this.qn.uiEventsHappening > 0 || this.qn.shouldCancelSync() || this.Mi || this.ge && this.qn.hasAdBreakWithinMs(_a.UPCOMING_AD_PLAYTHROUGH_MS) || this.Wi || !this.Ki.shouldSync();
      }
      fs(t) {
        return Fa(this, undefined, undefined, function* () {
          if (this.qn.scheduledPartyPlaybackOnly) {
            return;
          }
          const e = this.Yi();
          if (Math.abs(e - t.playbackPositionMilliseconds) <= this.qn.getSyncToleranceMs(Ts)) {
            return;
          }
          const n = this.es === ki.ESPN;
          if (n) {
            if (Date.now() - this.Vi < 1000 && Math.abs(e - this.Hi) < 1500) {
              return;
            }
          }
          this.qn.beginRemoteSyncApply();
          const i = Date.now();
          try {
            yield this.qn.setCurrentTime(e);
            if (n) {
              this.Vi = i;
              this.Hi = e;
            } else if (this.ls === xi.PLAYING) {
              yield this.qn.play();
            }
            this.rs.logInteraction(ya.SEEK, true);
            const t = new o(u, r, {
              name: "video_seek",
              action: {
                source: "another user"
              }
            });
            S.m(t);
          } finally {
            this.qn.endRemoteSyncApply();
          }
        });
      }
      Ds(t) {
        return Fa(this, undefined, undefined, function* () {
          if (!this.qn.scheduledPartyPlaybackOnly && t.playbackState.toString() !== this.ls.toString()) {
            this.qn.beginRemoteSyncApply();
            try {
              if (this.ls === xi.PAUSED) {
                this.rs.logInteraction(ya.PAUSE, true);
                yield this.qn.pause();
              } else if (this.ls === xi.PLAYING) {
                this.rs.logInteraction(ya.PLAY, true);
                yield this.qn.play();
              }
            } finally {
              this.qn.endRemoteSyncApply();
            }
          }
        });
      }
      uo() {
        if (this.ls === xi.PLAYING) {
          return Date.now() - (this.ws + this.Ti);
        } else {
          return 0;
        }
      }
      Yi() {
        return this.gs + this.uo() + this.co();
      }
      co() {
        var t;
        if (this.Gs && this.Gs !== this.eo && (t = this.zi[this.Gs]) !== null && t !== undefined) {
          return t;
        } else {
          return 0;
        }
      }
      lo() {
        return !!this.Gs && !!this.eo && this.Gs !== this.eo;
      }
      no() {
        this.$s();
        if (this.lo()) {
          this.ho = setInterval(() => {
            this.do();
          }, _a.REPORT_POSITION_INTERVAL_MS);
        }
      }
      $s() {
        if (this.ho) {
          clearInterval(this.ho);
          this.ho = undefined;
        }
      }
      do() {
        return Fa(this, undefined, undefined, function* () {
          if (this.lo() && this.ls === xi.PLAYING) {
            try {
              const t = yield this.qn.getStateAsync();
              const e = {
                type: Ni.REPORT_STREAM_POSITION,
                sender: u,
                target: r,
                data: {
                  lastKnownTime: Math.round(t.playbackPositionMilliseconds),
                  lastKnownTimeUpdatedAt: Date.now() - this.Ti,
                  selectedProvider: this.Gs
                }
              };
              yield S.m(e, 2000);
            } catch (t) {}
          }
        });
      }
      get changingVideo() {
        return this.Wi;
      }
      set changingVideo(t) {
        this.Wi = t;
      }
      isPartyPaused() {
        return this.ls === xi.PAUSED;
      }
    }
    _a.ACTIVATION_EXPECTED_STATE_ATTR = "data-tp-activation-expected-state";
    _a.ACTIVATION_EXPECTED_SERVICE_ATTR = "data-tp-activation-expected-service";
    _a.SIDEBAR_RELOAD_SOURCE = "sidebar";
    _a.REPORT_POSITION_INTERVAL_MS = 8000;
    _a.UPCOMING_AD_PLAYTHROUGH_MS = 5000;
    n(7588);
    class Ea extends e {
      constructor(t, e, n) {
        super(t, e, i.POSTHOG_HAS_FEATURE);
        this.data = {
          featureName: n
        };
      }
    }
    function xa(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const ka = "api_feature_flags_cache_v1";
    const Aa = 600000;
    const Ia = "ff_version";
    const Sa = "allchat_comment_viewed";
    let Ba = null;
    const ja = t => xa(undefined, undefined, undefined, function* () {
      const e = Date.now();
      if (!t && Ba && e - Ba.fetchedAtMs < Aa) {
        return Ba;
      }
      if (!t) {
        const t = yield xa(undefined, undefined, undefined, function* () {
          try {
            const {
              [ka]: t
            } = yield chrome.storage.local.get(ka);
            if (t == null ? undefined : t.flags) {
              if (Date.now() - t.fetchedAtMs > Aa) {
                return null;
              } else {
                return t;
              }
            } else {
              return null;
            }
          } catch (t) {
            return null;
          }
        });
        if (t) {
          Ba = t;
          return t;
        }
      }
      try {
        const t = yield fetch(`${l}/feature-flags`, {
          cache: "no-cache"
        });
        if (!t.ok) {
          throw new Error(`HTTP ${t.status}`);
        }
        const {
          flags: n,
          ffVersion: i
        } = (t => {
          if (!t || typeof t != "object") {
            return {
              flags: {}
            };
          }
          const e = Object.entries(t);
          const n = t[Ia];
          const i = typeof n == "string" || typeof n == "number" ? String(n) : undefined;
          return {
            flags: Object.fromEntries(e.filter(([t]) => t !== Ia).map(([t, e]) => [t, !!e])),
            ffVersion: i
          };
        })(yield t.json());
        yield ((t, e) => xa(undefined, undefined, undefined, function* () {
          const n = {
            flags: t,
            fetchedAtMs: Date.now(),
            ffVersion: e
          };
          Ba = n;
          try {
            yield chrome.storage.local.set({
              [ka]: n
            });
          } catch (t) {}
        }))(n, i);
        return {
          flags: n,
          fetchedAtMs: e,
          ffVersion: i
        };
      } catch (t) {
        if (Ba) {
          return Ba;
        }
        const e = yield chrome.storage.local.get(ka).then(t => t[ka]).catch(() => {});
        if (e == null ? undefined : e.flags) {
          Ba = e;
          return e;
        } else {
          return {
            flags: {},
            fetchedAtMs: 0
          };
        }
      }
    });
    function $a(t) {
      return xa(this, undefined, undefined, function* () {
        return !!(yield function (t = false) {
          return xa(this, undefined, undefined, function* () {
            return (yield ja(t)).flags;
          });
        }())[t];
      });
    }
    var Ta;
    (function (t) {
      t.GET_AUTH_TOKEN = "getAuthToken";
      t.SIGN_OUT = "signOut";
      t.GET_SIGN_OUT_EPOCH = "getSignOutEpoch";
    })(Ta ||= {});
    class Pa extends t {
      constructor(t, e, n) {
        super(t, e, n);
        this.type = n;
      }
    }
    class Ma extends Pa {
      constructor(t, e) {
        super(t, e, Ta.GET_AUTH_TOKEN);
      }
    }
    class La extends e {
      constructor(t, e, n) {
        super(t, e, i.UPDATE_HANDLE);
        this.handle = n;
      }
    }
    function Ra(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    function Oa(t, e, n = "", i = true, s = "after") {
      if (i) {
        const e = document.getElementById(t);
        if (e) {
          e.remove();
        }
      }
      if (e) {
        const i = document.createElement("div");
        i.id = t;
        if (n) {
          i.style.cssText = n;
        }
        if (s === "before" && e.firstChild) {
          e.insertBefore(i, e.firstChild);
        } else {
          e.appendChild(i);
        }
        return i;
      }
      return null;
    }
    function Ua(t) {
      const e = `img/reactions/${encodeURIComponent(t)}`;
      return {
        staticSrc: chrome.runtime.getURL(`${e}/${encodeURIComponent(t)}_static.svg`),
        gifSrc: chrome.runtime.getURL(`${e}/${encodeURIComponent(t)}.gif`)
      };
    }
    function Va(t) {
      return Ra(this, undefined, undefined, function* () {
        if (t == null ? undefined : t.knownHandle) {
          return {
            userData: undefined,
            handle: t.knownHandle
          };
        }
        let s = yield S.m(new io(a, r, Boolean(t == null ? undefined : t.forceRefresh)));
        let o = (s == null ? undefined : s.currentUser)?.handle || undefined;
        if (!o && !!(s == null ? undefined : s.signedIn) && !(t == null ? undefined : t.forceRefresh)) {
          s = yield S.m(new io(a, r, true));
          o = (s == null ? undefined : s.currentUser)?.handle || undefined;
        }
        if (!o && (s == null ? undefined : s.signedIn)) {
          try {
            const t = yield S.m(new Ma(u, r));
            const e = yield Fi("handles/me", "GET", true, undefined, t == null ? undefined : t.token);
            const n = (e == null ? undefined : e.data)?.handle;
            if (typeof n == "string" && n.length > 0) {
              S.m(new La(u, r, n));
              o = n;
            }
          } catch (t) {}
        }
        return {
          userData: s,
          handle: o
        };
      });
    }
    function Ha(t, e) {
      return Ra(this, undefined, undefined, function* () {
        S.m(new o(u, r, Object.assign({
          name: t
        }, e ? {
          allchat_ui: e
        } : {}), s.POSTHOG));
      });
    }
    function Na(t, e, n, i) {
      const s = i ? t.replace(/<title>[\s\S]*?<\/title>/i, "") : t;
      const o = s.indexOf(">");
      if (o === -1) {
        return s;
      }
      const r = s.slice(0, o + 1);
      const a = s.slice(o + 1);
      const u = e ? `id="${e}" ` : "";
      let c = (n ?? "").trim();
      if (c && !c.endsWith(";")) {
        c += ";";
      }
      c += "pointer-events:auto!important;";
      const l = `style="${c}" `;
      const h = `${r.replace("<svg ", `<svg ${u}${l}`)}${a}`;
      if (i) {
        return `<span class="allchat-has-tooltip" data-tooltip="${i}" aria-label="${i}">${h}</span>`;
      } else {
        return h;
      }
    }
    function Ga(t, e) {
      return Na("\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g clip-path=\"url(#clip0_1785_27366)\">\n            <path d=\"M9.99999 0C4.47718 0 0 4.47719 0 10C0 15.5231 4.47718 20 9.99999 20C15.5231 20 20.0003 15.5231 20.0003 10C20.0003 4.47719 15.5231 0 9.99999 0ZM9.99999 18.7697C5.1753 18.7697 1.25 14.8247 1.25 9.99996C1.25 5.17527 5.1753 1.24996 9.99999 1.24996C14.8247 1.24996 18.7503 5.17529 18.7503 9.99996C18.7503 14.8246 14.8247 18.7697 9.99999 18.7697ZM9.08092 15.6344H10.6534V14.0475H9.08092V15.6344ZM9.98155 4.36592C9.06592 4.36592 8.31157 4.61279 7.71907 5.10594C7.12657 5.59936 6.83845 6.58748 6.85314 7.40623L6.87626 7.45186H8.31063C8.31063 6.96342 8.47344 6.26154 8.79907 6.00967C9.12438 5.75811 9.51876 5.63217 9.98188 5.63217C10.5156 5.63217 10.9259 5.77717 11.2138 6.06715C11.5013 6.35715 11.6447 6.77184 11.6447 7.31059C11.6447 7.7634 11.5384 8.14996 11.325 8.47027C11.1109 8.79059 10.7522 9.24842 10.2491 9.84375C9.73001 10.3119 9.40938 10.6881 9.28751 10.9728C9.16532 11.2578 9.10188 11.769 9.09719 12.5062H10.6003C10.6003 12.0437 10.6297 11.7028 10.6881 11.484C10.7462 11.2656 10.9128 11.0187 11.1875 10.744C11.7778 10.1747 12.2519 9.61779 12.6109 9.07312C12.9691 8.52904 13.1484 7.92873 13.1484 7.27248C13.1484 6.35686 12.8716 5.64342 12.3169 5.13248C11.7619 4.62123 10.9834 4.36592 9.98155 4.36592Z\" fill=\"#4B4D4D\"/>\n            </g>\n            <defs>\n            <clipPath id=\"clip0_1785_27366\">\n            <rect width=\"20\" height=\"20\" fill=\"white\"/>\n            </clipPath>\n            </defs>\n        </svg>\n    ", t, e);
    }
    function za(t, e) {
      return Na("\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M5 21V4H14L14.4 6H20V16H13L12.6 14H7V21H5ZM14.65 14H18V8H12.75L12.35 6H7V12H14.25L14.65 14Z\" fill=\"#4B4D4D\"/>\n        </svg>\n    ", t, e);
    }
    function Za(t, e) {
      return Na("\n            <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M7 7L17 17M7 17L17 7\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n        ", t, e);
    }
    function Qa(t, e, n) {
      return Na("\n        <svg class=\"chat-option\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M17.5 22.75L21 19.25M21 19.25L24.5 15.75M21 19.25L17.5 15.75M21 19.25L24.5 22.75M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.8372 7.3815C35.497 7.7175 36.0325 8.25125 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1117 31.5 31.1552 31.5H15.9653C15.2355 31.5 14.8733 31.5 14.525 31.57C14.2159 31.6339 13.9169 31.7393 13.636 31.8832C13.321 32.0425 13.041 32.2683 12.4863 32.7128L12.467 32.7268Z\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n        ", t, e, n);
    }
    function Wa(t, e, n) {
      return Na("\n        <svg class=\"chat-option\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M26.25 15.75L19.25 22.75L15.75 19.25M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.839 7.3815C35.4975 7.71705 36.0329 8.25246 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1135 31.5 31.157 31.5H15.9653C15.2373 31.5 14.8715 31.5 14.5232 31.57C14.2147 31.634 13.9163 31.7394 13.636 31.8832C13.321 32.0442 13.0375 32.27 12.4722 32.7232L12.467 32.7268Z\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n        ", t, e, n);
    }
    function Ya(t, e, n) {
      return Na("<svg class=\"chat-option\" id=\"tp-allchat-show-create-post\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M21 24.5V19.25M21 19.25V14M21 19.25H15.75M21 19.25H26.25M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.839 7.3815C35.4975 7.71705 36.0329 8.25246 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1135 31.5 31.157 31.5H15.9653C15.2373 31.5 14.8715 31.5 14.5232 31.57C14.2147 31.634 13.9163 31.7394 13.636 31.8832C13.321 32.0442 13.0375 32.27 12.4722 32.7232L12.467 32.7268Z\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>", t, e, n);
    }
    function Ja(t) {
      return `\n        <div id="tp-allchat-options" class="chat-options-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n            ${e = t.liveChatShowing, e ? Qa("tp-allchat-toggle", undefined, "Turn Allchat Off") : Wa("tp-allchat-toggle", undefined, "Turn Allchat On")}\n            ${t.liveChatShowing ? Ya("tp-allchat-show-create-post", undefined, "Post Comment") : ""}\n        </div>\n    `;
      var e;
    }
    function Ka(t, e) {
      if (e) {
        e.innerHTML = Ja(t);
        const n = document.getElementById("tp-allchat-toggle");
        const i = document.getElementById("tp-allchat-show-create-post");
        if (n) {
          n.addEventListener("click", e => {
            e.stopPropagation();
            t.toggleLiveChat();
          });
        }
        if (i) {
          i.addEventListener("click", e => {
            e.stopPropagation();
            Ha("allchat_open_create_comment_clicked");
            t.showCreatePost();
          });
        }
      }
    }
    function Xa(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    function qa(t) {
      if (t) {
        return "\n        <svg id=\"tp-allchat-chatbox-pauseplay\" width=\"37\" height=\"37\" viewBox=\"0 0 37 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M8.68344 3.25195C8.29705 3.25195 7.92649 3.40544 7.65327 3.67866C7.38005 3.95188 7.22656 4.32244 7.22656 4.70883V32.2912C7.22656 32.6776 7.38005 33.0481 7.65327 33.3213C7.92649 33.5946 8.29705 33.748 8.68344 33.748H13.4298C13.8162 33.748 14.1868 33.5946 14.46 33.3213C14.7332 33.0481 14.8867 32.6776 14.8867 32.2912V4.70883C14.8867 4.32244 14.7332 3.95188 14.46 3.67866C14.1868 3.40544 13.8162 3.25195 13.4298 3.25195H8.68344ZM23.5702 3.25195C23.1838 3.25195 22.8132 3.40544 22.54 3.67866C22.2668 3.95188 22.1133 4.32244 22.1133 4.70883V32.2912C22.1133 32.6776 22.2668 33.0481 22.54 33.3213C22.8132 33.5946 23.1838 33.748 23.5702 33.748H28.3166C28.7029 33.748 29.0735 33.5946 29.3467 33.3213C29.6199 33.0481 29.7734 32.6776 29.7734 32.2912V4.70883C29.7734 4.51751 29.7358 4.32806 29.6625 4.15131C29.5893 3.97455 29.482 3.81395 29.3467 3.67866C29.2114 3.54338 29.0508 3.43607 28.8741 3.36285C28.6973 3.28964 28.5079 3.25195 28.3166 3.25195H23.5702Z\" fill=\"white\"/>\n        </svg>\n\n    ";
      } else {
        return "\n        <svg id=\"tp-allchat-chatbox-pauseplay\" width=\"44\" height=\"44\" viewBox=\"0 0 44 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M12.661 8.31787C12.494 8.21885 12.3038 8.1658 12.1096 8.1641C11.9155 8.16241 11.7243 8.21213 11.5556 8.30822C11.3869 8.4043 11.2466 8.54333 11.149 8.71118C11.0515 8.87903 11 9.06972 11 9.26387V34.7362C11 34.9304 11.0515 35.121 11.149 35.2889C11.2466 35.4567 11.3869 35.5958 11.5556 35.6919C11.7243 35.7879 11.9155 35.8377 12.1096 35.836C12.3038 35.8343 12.494 35.7812 12.661 35.6822L34.1532 22.946C34.3173 22.8486 34.4533 22.7102 34.5477 22.5443C34.6422 22.3785 34.6918 22.1909 34.6918 22C34.6918 21.8092 34.6422 21.6216 34.5477 21.4557C34.4533 21.2899 34.3173 21.1514 34.1532 21.054L12.661 8.31787Z\" fill=\"white\" stroke=\"white\" stroke-width=\"2.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n\n    ";
      }
    }
    let tu = false;
    let eu = null;
    function nu(t) {
      return Xa(this, undefined, undefined, function* () {
        const e = yield t.isVideoPlaying();
        if (e) {
          yield t.pauseVideo();
        } else {
          yield t.playVideo();
        }
        eu = !e;
        const n = document.getElementById("tp-allchat-chatbox-pauseplay");
        if (n) {
          n.outerHTML = qa(eu);
        }
      });
    }
    function iu(t, e) {
      return Xa(this, undefined, undefined, function* () {
        if (e && t.shouldRender) {
          const n = yield t.isVideoPlaying();
          e.innerHTML = function (t, e) {
            return `\n        <div id="tp-allchat-chatbox-controls" class="allchat-chatbox-controls-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n            ${qa(e)}\n        </div>\n    `;
          }(t, n);
          const i = document.getElementById("tp-allchat-chatbox-pauseplay");
          if (i) {
            i.addEventListener("click", e => {
              e.stopPropagation();
              nu(t);
            });
          }
          if (!tu) {
            setInterval(() => Xa(this, undefined, undefined, function* () {
              const e = yield t.isVideoPlaying();
              if (e !== eu) {
                eu = e;
                const n = yield qa(e);
                const i = document.getElementById("tp-allchat-chatbox-pauseplay");
                if (i) {
                  i.outerHTML = n;
                  const e = document.getElementById("tp-allchat-chatbox-pauseplay");
                  if (e) {
                    e.addEventListener("click", e => {
                      e.stopPropagation();
                      nu(t);
                    });
                  }
                }
              }
            }), 100);
            tu = true;
          }
        }
      });
    }
    function su(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    let ou = null;
    let ru = 0;
    let au = null;
    let uu = null;
    function cu(t) {
      return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function lu(t, e, n, i) {
      t.innerHTML = i.variant === "floating" ? function (t, e) {
        const n = Boolean(e);
        const i = n ? `@${e}` : "Choose a handle";
        const s = n ? "Edit" : "Set up";
        const o = (e || "?").replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
        return `\n    <button type="button" class="tp-floating-account" id="allchat-user-pill" aria-label="${n ? `Edit profile for ${cu(e)}` : "Set your All Chat handle"}">\n      <span class="tp-floating-account-avatar" aria-hidden="true">\n        ${t ? `<img src="${t}" alt=""/>` : `<span class="tp-floating-account-initial">${cu(o)}</span>`}\n      </span>\n      <span class="tp-floating-account-text">\n        <span class="tp-floating-account-label">${n ? "Posting as" : "Almost ready"}</span>\n        <span class="tp-floating-account-handle">${cu(i)}</span>\n      </span>\n      <span class="tp-floating-account-action">${s}</span>\n    </button>\n  `;
      }(e, n) : function (t, e) {
        const n = Boolean(e);
        const i = n ? e : "Set handle";
        const s = n ? "Edit" : "Tap to create";
        const o = (n ? e : "?").slice(0, 1).toUpperCase();
        return `\n    <div class="user-pill rounded-container gray-border" style="cursor: pointer !important;" id="allchat-user-pill">\n      <span class="user-pill-avatar">\n        ${t ? `<img src="${t}" alt="${cu(i)}"/>` : `<span class="user-pill-initial">${cu(o)}</span>`}\n      </span>\n      <div style="display: flex; flex-direction: column">\n        <span class="user-pill-name">${cu(i)}</span>\n        <span class="user-pill-edit" id="allchat-edit-profile-open-btn">${s}</span>\n      </div>\n    </div>\n  `;
      }(e, n);
      (function (t, e) {
        const n = document.getElementById("allchat-user-pill");
        if (n) {
          n.addEventListener("click", n => {
            n.stopPropagation();
            if (t) {
              e.onEditClicked();
            } else {
              e.onSetHandleClicked();
            }
          });
        }
      })(n, i);
    }
    function hu(t, e) {
      return su(this, undefined, undefined, function* () {
        if (e.knownHandle) {
          lu(t, undefined, e.knownHandle, e);
        }
        const {
          userData: i,
          handle: s
        } = yield Va({
          knownHandle: e.knownHandle
        });
        const o = Xs.getFullIconURL((i == null ? undefined : i.userSettings)?.userIcon);
        lu(t, o, s || e.knownHandle, e);
      });
    }
    function du() {
      if (ou !== null) {
        clearInterval(ou);
        ou = null;
      }
      if (au) {
        window.removeEventListener("focus", au);
        au = null;
      }
      if (uu) {
        document.removeEventListener("visibilitychange", uu);
        uu = null;
      }
    }
    function pu(t, e) {
      if (ou !== null) {
        return;
      }
      ru = Date.now() + 300000;
      const n = () => su(this, undefined, undefined, function* () {
        if (Date.now() >= ru) {
          du();
        } else {
          yield function (t, e) {
            return su(this, undefined, undefined, function* () {
              if (!document.body.contains(t)) {
                du();
                return false;
              }
              try {
                const n = yield S.m(new io(a, r, true));
                if (n == null ? undefined : n.signedIn) {
                  du();
                  yield hu(t, e);
                  return true;
                }
              } catch (t) {}
              return false;
            });
          }(t, e);
        }
      });
      ou = window.setInterval(n, 3000);
      au = () => {
        n();
      };
      uu = () => {
        if (document.visibilityState === "visible") {
          n();
        }
      };
      window.addEventListener("focus", au);
      document.addEventListener("visibilitychange", uu);
      n();
    }
    function fu(t, e) {
      return su(this, undefined, undefined, function* () {
        if (!e) {
          return;
        }
        const n = t.containerStyling !== undefined && t.containerStyling.length > 0 ? ` style="${t.containerStyling}"` : "";
        e.innerHTML = `<div class="user-identity-root"${n}></div>`;
        const i = e.firstElementChild;
        if (t.knownHandle) {
          yield hu(i, t);
          return;
        }
        let s;
        try {
          s = yield S.m(new io(a, r));
        } catch (t) {}
        if (!(s == null ? undefined : s.signedIn)) {
          i.innerHTML = t.variant === "floating" ? `\n    <a id="tp-user-login-btn"\n      class="tp-floating-login"\n      href="${h}/signup?ref=allchat" target="_blank" rel="noopener noreferrer">\n      Log in to post\n    </a>\n  ` : `\n    <a id="tp-user-login-btn"\n      class="tp-login-cta rounded-container"\n      href="${h}/signup?ref=allchat" target="_blank" rel="noopener noreferrer">\n      Login\n    </a>\n  `;
          const e = i.querySelector("#tp-user-login-btn");
          if (e) {
            e.addEventListener("click", () => {
              pu(i, t);
            });
          }
          return;
        }
        yield hu(i, t);
      });
    }
    function Du(t, e) {
      if (!e) {
        return null;
      }
      const n = t.id || `tp-flair-${Math.random().toString(36).slice(2, 9)}`;
      const {
        staticSrc: i,
        gifSrc: s
      } = Ua(t.reaction);
      e.innerHTML = function (t) {
        const {
          id: e,
          reaction: n,
          staticSrc: i,
          shadowColor: s
        } = t;
        return `\n    <button\n      id="${e}"\n      class="tp-flair-icon"\n      type="button"\n      data-active="false"\n      aria-pressed="false"\n      aria-label="${n}"\n      style="--tp-flair-shadow-color: ${s};"\n    >\n      <img src="${i}" alt="${n}" />\n    </button>\n  `;
      }({
        id: n,
        reaction: t.reaction,
        staticSrc: i,
        gifSrc: s,
        shadowColor: t.shadowColor
      });
      const o = document.getElementById(n);
      const r = o == null ? undefined : o.querySelector("img");
      if (!o || !r) {
        return null;
      }
      new Image().src = s;
      o.addEventListener("mouseenter", t => {
        t.stopPropagation();
        if (r) {
          r.src = s;
        }
      });
      o.addEventListener("mouseleave", t => {
        t.stopPropagation();
        if (r) {
          r.src = i;
        }
      });
      o.addEventListener("click", e => {
        e.stopPropagation();
        const n = o.dataset.active !== "true";
        (function (t, e) {
          const n = typeof t == "string" ? document.getElementById(t) : t;
          if (!n) {
            return;
          }
          if (e) {
            (function (t) {
              const e = t.closest(".tp-flair-row, #tp-flair-row") || document;
              e.querySelectorAll(".tp-flair-icon[data-active='true']").forEach(e => {
                if (e !== t) {
                  e.setAttribute("data-active", "false");
                  e.setAttribute("aria-pressed", "false");
                }
              });
            })(n);
          }
          n.setAttribute("data-active", e ? "true" : "false");
          n.setAttribute("aria-pressed", e ? "true" : "false");
        })(o, n);
        if (t.onClick) {
          t.onClick();
        }
      });
      return o;
    }
    function vu(t, e = document.getElementById("tp-flair-row")) {
      if (!e) {
        return null;
      }
      const n = document.createElement("div");
      n.className = "tp-flair-cell";
      e.appendChild(n);
      return Du(t, n);
    }
    class gu {
      constructor(t, e = 2000, n) {
        this.onRemove = n;
        this.duration = e;
        const i = document.createElement("div");
        i.className = "allchat-toast";
        i.innerHTML = t;
        i.style.position = "fixed";
        i.style.opacity = "0";
        i.style.visibility = "hidden";
        i.addEventListener("mouseenter", () => this.pause());
        i.addEventListener("mouseleave", () => this.resume());
        this.el = i;
      }
      measure() {
        const t = this.el.getBoundingClientRect();
        return {
          w: Math.ceil(t.width),
          h: Math.ceil(t.height)
        };
      }
      reveal() {
        this.el.style.visibility = "visible";
        this.el.style.opacity = "1";
      }
      setPosition(t, e) {
        this.el.style.left = `${t}px`;
        this.el.style.bottom = `${e}px`;
      }
      clearTimers() {
        if (this.fadeTimer) {
          window.clearInterval(this.fadeTimer);
        }
        if (this.removeTimer) {
          window.clearTimeout(this.removeTimer);
        }
      }
      scheduleDismiss() {
        this.clearTimers();
        this.removeTimer = window.setTimeout(() => {
          this.fadeTimer = window.setInterval(() => {
            const t = parseFloat(this.el.style.opacity || "1");
            if (!isNaN(t) && t > 0) {
              const e = Math.max(0, t - 0.05);
              this.el.style.opacity = e.toString();
            } else {
              window.clearInterval(this.fadeTimer);
              this.destroy();
            }
          }, 50);
        }, this.duration);
      }
      pause() {
        this.clearTimers();
        this.el.style.opacity = "1";
      }
      resume() {
        this.scheduleDismiss();
      }
      destroy() {
        this.el.remove();
        this.onRemove();
      }
    }
    const mu = new class {
      constructor(t) {
        this.active = [];
        this.queue = [];
        this.id = "tp-allchat-toast-container";
        this.MAX_ACTIVE = 3;
        this.TOAST_GAP = 12;
        this.HORIZ_MARGIN = 36;
        this.VERT_MARGIN_BOTTOM = 90;
        this.ensureContainer(t);
        if (!window.__allchat_toast_resize_bound) {
          window.addEventListener("resize", () => this.layout());
          window.__allchat_toast_resize_bound = true;
        }
      }
      ensureContainer(t) {
        let e = document.getElementById(this.id);
        if (!e) {
          e = document.createElement("div");
          e.id = this.id;
          e.style.position = "fixed";
          e.style.zIndex = "9991";
          (t ?? document.body).appendChild(e);
        }
        this.container = e;
      }
      show(t, e, n) {
        const i = n ?? `toast_${Date.now()}_${Math.random().toString(36).slice(2)}`;
        this.queue.push({
          html: t,
          duration: e,
          id: i
        });
        this.pump();
        return i;
      }
      dismiss(t) {
        const e = this.active.findIndex(e => e.id === t);
        if (e >= 0) {
          const {
            toast: t
          } = this.active[e];
          t.destroy();
          this.active.splice(e, 1);
          this.pump();
        } else {
          const e = this.queue.findIndex(e => e.id === t);
          if (e >= 0) {
            this.queue.splice(e, 1);
          }
        }
      }
      pump() {
        for (this.container || this.ensureContainer(); this.active.length < this.MAX_ACTIVE && this.queue.length > 0;) {
          const {
            html: t,
            duration: e,
            id: n
          } = this.queue.shift();
          const i = new gu(t, e, () => {
            const t = this.active.findIndex(t => t.toast === i);
            if (t >= 0) {
              this.active.splice(t, 1);
            }
            this.pump();
          });
          this.container.appendChild(i.el);
          i.setPosition(this.HORIZ_MARGIN, this.VERT_MARGIN_BOTTOM);
          i.reveal();
          i.scheduleDismiss();
          this.active.push({
            id: n,
            toast: i
          });
        }
        this.layout();
      }
      layout() {
        if (!this.active.length) {
          return;
        }
        const t = window.innerWidth;
        const e = window.innerHeight;
        let n = this.VERT_MARGIN_BOTTOM;
        for (const {
          toast: i
        } of this.active) {
          const {
            w: s,
            h: o
          } = i.measure();
          const r = Math.min(Math.max(Math.round(o * 0.15), 0), Math.max(e - o - this.VERT_MARGIN_BOTTOM, 0));
          const a = Math.min(this.HORIZ_MARGIN, t - s - this.HORIZ_MARGIN);
          const u = Math.min(n + r, e - o - this.VERT_MARGIN_BOTTOM);
          i.setPosition(a, u);
          n = u + o + this.TOAST_GAP;
        }
      }
    }();
    function wu(t, e = 2000, n) {
      return mu.show(t, e, n);
    }
    class yu extends e {
      constructor(t, e) {
        super(t, e, i.GET_PERM_ID);
      }
    }
    function bu(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const Cu = 120;
    function Fu(t) {
      return `\n        <div id="tp-allchat-chatbox" style="display: flex; flex-direction: column; width: 100%; background-color: black; align-items: flex-end; padding: 12px 20px;">\n            <div class="allchat-chatbox-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n                ${e = "tp-allchat-logo", Na("\n        <svg width=\"33\" height=\"33\" viewBox=\"0 0 33 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <mask id=\"mask0_1785_33205\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"33\" height=\"33\">\n            <path d=\"M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z\" fill=\"#EF3E3A\"/>\n            <path d=\"M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z\" fill=\"#EF3E3A\"/>\n            </mask>\n            <g mask=\"url(#mask0_1785_33205)\">\n            <rect width=\"33\" height=\"33\" fill=\"url(#paint0_linear_1785_33205)\"/>\n            </g>\n            <defs>\n            <linearGradient id=\"paint0_linear_1785_33205\" x1=\"0\" y1=\"0\" x2=\"37.984\" y2=\"7.39309\" gradientUnits=\"userSpaceOnUse\">\n            <stop stop-color=\"#E34248\"/>\n            <stop offset=\"1\" stop-color=\"#9E55A0\"/>\n            </linearGradient>\n            </defs>\n        </svg>\n    ", e, n)}\n                ${t.videoControlProps.shouldRender ? "<div id=\"tp-allchat-chatbox-controls-container\" style=\"display: flex; width: 56px; height: 44px; justify-content: center;\"></div>" : ""}\n                <div style="display:flex; align-items:center; position:relative; flex-grow:1">\n                    <div class="tp-chatbox-input-wrapper" style="flex-grow:1; position:relative;">\n                        <input\n                        id="tp-allchat-chatbox-input"\n                        value="${t.curComment}"\n                        type="text"\n                        class="allchat-chatbox-input"\n                        placeholder="Add your comment here"\n                        style="flex-grow:1; padding-left:12px;"\n                        >\n\n                        <div class="tp-input-right-rail">\n                            <div id="tp-flair-row" class="tp-flair-row"></div>\n                            <span id="tp-allchat-chatbox-length" class="allchat-chatbox-length">\n                                ${t.curComment.length}/120\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div style="display: flex; flex-direction: row">\n                    <span\n                        id="tp-allchat-cancel-btn"\n                        class="allchat-chatbox-button rounded-container gray-border"\n                        style="height: 52px; display: flex; align-items: center; margin-right: 6px"\n                    >\n                        Cancel\n                    </span>\n                    \n                    <span\n                        id="tp-allchat-post-btn"\n                        class="allchat-chatbox-button rounded-container gradient-border"\n                        style="font-weight:600; height: 52px; display: flex; align-items: center;"\n                    >\n                        <span class="gradient-200-text">Post</span>\n                    </span>\n                </div>\n                <div id="tp-user-identity" style="margin-left:16px;"></div>\n                ${Ga("allchat-chatbox-open-help", "cursor: pointer !important; width: 33px; height: 33px;")}\n                \n                <div id="tp-allchat-message-box" class="allchat-message-box"></div>\n            </div>\n            <a\n                style="font-size: 12px; color: gray; margin-top: 4px; cursor: pointer; padding-bottom: 4px;"\n                class="allchat-underline-text"\n                id="tp-leave-feedback-text"\n                href="https://docs.google.com/forms/d/e/1FAIpQLSdkFbtU1o-vw9LXVG4STZiryRbrcF0j445c3b1EfwNoJYUT7w/viewform?usp=dialog"\n                target="_blank"\n            >\n                Leave Feedback\n            </a>\n        </div>\n    `;
      var e;
      var n;
    }
    function _u() {
      const t = document.getElementById("tp-flair-row");
      if (t && t.offsetParent !== null) {
        for (const e of t.children) {
          const t = e.querySelector("button");
          if ((t == null ? undefined : t.getAttribute("data-active")) === "true") {
            if (t == null) {
              return undefined;
            } else {
              return t.getAttribute("aria-label");
            }
          }
        }
      }
    }
    function Eu(t, e, n, i) {
      return bu(this, undefined, undefined, function* () {
        const s = document.getElementById("tp-allchat-post-btn");
        try {
          if (s) {
            s.textContent = "Posting...";
          }
          const a = new o(u, r, {
            name: "allchat_message_sent",
            message: {
              text: e
            },
            allchat_ui: "legacy"
          });
          S.m(a);
          const c = yield S.m(new yu(u, r));
          const l = {
            message: e,
            vidTime: yield t.getVidTime(),
            service: t.service,
            vidId: t.vidId,
            displayName: n,
            vidDuration: t.vidDuration,
            flair: _u(),
            permId: c,
            extensionVersion: m
          };
          const h = Fi("comments", "POST", true, l, i, undefined, true);
          t.onPostComment(l);
          if (t.shouldPlayVideoAfterClose) {
            t.videoControlProps.playVideo();
          }
          yield h;
          Ha("allchat_message_accepted", "legacy");
        } catch (t) {
          try {
            if (JSON.parse(t.message).error) {
              Ha("allchat_message_rejected", "legacy");
            } else {
              Ha("allchat_message_errored", "legacy");
              wu("An error occurred");
            }
          } catch (e) {
            Ha("allchat_message_errored", "legacy");
            console.error(`GOT ERROR ${t}`);
            wu("An error occurred");
          }
        } finally {
          t.onCommentEdited("");
          if (s) {
            s.textContent = "Post";
          }
          (function (t) {
            const e = document.getElementById("tp-allchat-chatbox-length");
            if (e) {
              e.innerText = `${t.curComment.length}/120`;
            }
          })(t);
        }
      });
    }
    function xu(t, e, n, i) {
      return bu(this, undefined, undefined, function* () {
        const s = yield S.m(new Ma(a, r));
        i.value = "";
        t.closeModal();
        Eu(t, e, n, s == null ? undefined : s.token);
      });
    }
    function ku(t, e) {
      fu({
        knownHandle: e,
        onEditClicked: () => {
          t.openChangeHandleModal(e => ku(t, e));
        },
        onSetHandleClicked: () => {
          t.openSetHandleModal(e => ku(t, e));
        }
      }, document.getElementById("tp-user-identity"));
    }
    function Au() {
      const t = "allchat-feedback-bubble";
      const e = "allchat-feedback-bubble-dismissed";
      if (localStorage.getItem(e) === "true") {
        return;
      }
      const n = localStorage.getItem(t);
      const i = n ? JSON.parse(n) : {
        count: 0,
        last: 0
      };
      const {
        count: s,
        last: o
      } = i;
      if (Date.now() - o >= Math.min(Math.pow(2, s) * 300000, 86400000)) {
        setTimeout(() => {
          if (localStorage.getItem(e) === "true") {
            return;
          }
          wu(`\n        <div style="display: flex; flex-direction: column;">\n            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 20px">\n                <span>Want to help All Chat improve? Leave your thoughts here!</span>\n                ${Za("allchat-close-feedback", "transform: translateY(-2px); cursor: pointer;")}\n            </div>\n            <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; gap: 12px;">\n                <span class="allchat-underline-text" \n                      style="font-size: 12px; color: gray; cursor: pointer;" \n                      id="allchat-dont-show-feedback">\n                    Don't Show Again\n                </span>\n                <a class="gradient-200-button leave-feedback-button" target="_blank"\n                   href="https://docs.google.com/forms/d/e/1FAIpQLSdkFbtU1o-vw9LXVG4STZiryRbrcF0j445c3b1EfwNoJYUT7w/viewform?usp=dialog">\n                    Leave Feedback\n                </a>\n            </div>\n        </div>\n    `, 10000, "feedback-bubble");
          localStorage.setItem(t, JSON.stringify({
            count: s + 1,
            last: Date.now()
          }));
          const n = document.querySelector(".leave-feedback-button");
          const i = document.getElementById("allchat-dont-show-feedback");
          const o = document.getElementById("allchat-close-feedback");
          const r = () => {
            mu.dismiss("feedback-bubble");
          };
          if (n) {
            n.addEventListener("click", () => {
              localStorage.setItem(e, "true");
              r();
            });
          }
          if (i) {
            i.addEventListener("click", () => {
              localStorage.setItem(e, "true");
              r();
            });
          }
          if (o) {
            o.addEventListener("click", r);
          }
        }, 3000);
      }
    }
    function Iu(t, e) {
      if (e) {
        e.innerHTML = Fu(t);
        iu(t.videoControlProps, document.getElementById("tp-allchat-chatbox-controls-container"));
        ku(t);
        const n = document.getElementById("tp-allchat-chatbox-input");
        const i = document.getElementById("tp-allchat-cancel-btn");
        const s = document.getElementById("tp-allchat-post-btn");
        const o = document.getElementById("allchat-chatbox-open-help");
        const u = document.getElementById("tp-flair-row");
        if (u) {
          vu({
            reaction: "heart",
            shadowColor: "rgba(255, 77, 166, 0.8)"
          }, u);
          vu({
            reaction: "cry",
            shadowColor: "rgba(9, 239, 247, 1)"
          }, u);
          vu({
            reaction: "surprise",
            shadowColor: "rgba(255, 216, 77, 0.8)"
          }, u);
        }
        if (n) {
          n.addEventListener("focus", t => {
            t.stopPropagation();
            localStorage.setItem("allchat-has-focus", "true");
          });
          n.addEventListener("blur", () => {
            localStorage.setItem("allchat-has-focus", "false");
          });
          n.addEventListener("click", t => {
            t.stopPropagation();
          });
          n.addEventListener("keydown", t => {
            t.stopPropagation();
          });
          n.addEventListener("input", e => {
            let i = e.target.value;
            if (i.length > Cu) {
              i = i.substring(0, Cu);
              n.value = i;
            }
            t.onCommentEdited(i);
            const s = document.getElementById("tp-allchat-chatbox-length");
            if (s) {
              s.innerHTML = `${i.length}/120`;
            }
          });
        }
        if (i) {
          i.addEventListener("click", e => {
            e.stopPropagation();
            if (t.shouldPlayVideoAfterClose) {
              t.videoControlProps.playVideo();
            }
            Ha("allchat_cancel_post_clicked");
            t.closeChatbox();
          });
        }
        if (s) {
          s.addEventListener("click", e => {
            e.stopPropagation();
            (function (t) {
              bu(this, undefined, undefined, function* () {
                const n = yield S.m(new io(a, r));
                Ha("allchat_post_button_clicked");
                const i = document.getElementById("tp-allchat-chatbox-input");
                const s = i.value;
                if (!s || s.length > 120) {
                  wu("Message must be between 1-120 characters");
                  return;
                }
                if (!(n == null ? undefined : n.signedIn)) {
                  wu("You must be logged in to post to All Chat");
                  return;
                }
                const o = (n == null ? undefined : n.currentUser)?.handle;
                if (o) {
                  yield xu(t, s, o, i);
                } else {
                  t.openSetHandleModal(e => bu(this, undefined, undefined, function* () {
                    ku(t, e);
                    if (e) {
                      yield xu(t, s, e, i);
                    }
                  }));
                }
              });
            })(t);
          });
        }
        if (o) {
          o.addEventListener("click", e => {
            e.stopPropagation();
            t.openHelpModal();
          });
        }
        Au();
      }
    }
    class Su {
      constructor(t) {
        this.host = null;
        this.onKeyDownRef = null;
        this.props = t;
      }
      getCloseSelector() {
        return "#tp-allchat-modal-close";
      }
      open(t) {
        if (!t) {
          return;
        }
        this.host = t;
        const e = this.getHtml();
        const n = this.props.containerStyling ? `style="${this.props.containerStyling}"` : "";
        this.host.innerHTML = `\n      <div id="tp-allchat-modal" class="allchat-modal-container" ${n}>\n        <div id="allchat-modal-content" class="allchat-modal-content">\n          ${e}\n        </div>\n      </div>\n    `;
        this.bindBaseEvents();
        this.bindInnerEvents();
      }
      close() {
        this.unbindBaseEvents();
        if (this.host) {
          this.host.innerHTML = "";
        }
      }
      destroy() {
        this.close();
        this.host = null;
      }
      bindBaseEvents() {
        this.onKeyDownRef = t => {
          if (t.key === "Escape" || t.key === "Esc" || t.key === "Enter") {
            t.preventDefault();
            this.close();
          }
        };
        window.addEventListener("keydown", this.onKeyDownRef);
        const t = this.getCloseSelector();
        if (t) {
          const e = document.querySelector(t);
          if (e) {
            e.addEventListener("click", t => {
              t.stopPropagation();
              this.close();
            });
          }
        }
      }
      unbindBaseEvents() {
        if (this.onKeyDownRef) {
          window.removeEventListener("keydown", this.onKeyDownRef);
          this.onKeyDownRef = null;
        }
      }
      setContent(t) {
        const e = document.getElementById("allchat-modal-content");
        if (e) {
          e.innerHTML = t;
        }
      }
    }
    function Bu(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const ju = /^[\w.]+$/;
    class $u extends Su {
      constructor() {
        super(...arguments);
        this.ID_CLOSE = "tp-allchat-modal-close";
        this.ID_SUBMIT = "allchat-change-handle-submit";
        this.ID_INPUT = "allchat-change-handle-input";
        this.ID_ERROR = "allchat-change-handle-error";
        this.ID_STATUS = "allchat-change-handle-status";
        this.ID_AVATAR = "allchat-change-handle-avatar";
        this.isSubmitting = false;
        this.loadFailed = false;
      }
      open(t) {
        super.open(t);
        this.loadAndRender();
      }
      close() {
        if (this.isSubmitting) {
          return;
        }
        const t = this.loadFailed;
        super.close();
        this.props.closeModal();
        if (t) {
          this.props.onLoadErrorDismiss();
        }
      }
      getHtml() {
        return `\n      <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          ${Za(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <div class="allchat-modal-body" style="padding:16px;">Loading…</div>\n      </div>\n    `;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
      }
      loadAndRender() {
        return Bu(this, undefined, undefined, function* () {
          try {
            const o = yield S.m(new io(a, r));
            const c = Xs.getFullIconURL((o == null ? undefined : o.userSettings)?.userIcon);
            const l = (o == null ? undefined : o.currentUser)?.handle ?? "";
            const h = yield S.m(new Ma(u, r));
            const d = yield Fi("handles/me", "GET", true, undefined, h == null ? undefined : h.token);
            const p = (d == null ? undefined : d.data)?.changesRemaining ?? 0;
            this.setContent(this.getFormHtml(l, p, c));
            this.bindFormEvents(p);
          } catch (t) {
            console.error(t);
            this.loadFailed = true;
            this.setContent(`\n        <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n          <div style="display:flex; justify-content:flex-end; width:100%;">\n            ${Za(this.ID_CLOSE, "cursor: pointer !important;")}\n          </div>\n          <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n            Failed to load profile. Please try again later.\n          </div>\n        </div>\n      `);
            this.bindLoadErrorEvents();
          }
        });
      }
      bindLoadErrorEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
      }
      getFormHtml(t, e, n) {
        const i = t.replace(/"/g, "&quot;");
        const s = e <= 0;
        const o = n ? `<img src="${n}" alt="Avatar"\n            style="width:100%; height:100%; opacity:0.9; border-radius:50%; object-fit:cover;" />` : "<div style=\"\n            width:100%; height:100%; border-radius:50%;\n            border:2px solid #aaa; color:#aaa;\n            display:flex; align-items:center; justify-content:center;\n            font-size:12px; text-align:center;\n          \">No Profile</div>";
        const r = s ? "You've used all of your handle changes. Your handle is now permanent." : `You have ${e} handle change${e === 1 ? "" : "s"} remaining.`;
        return `\n    <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n\n      \x3c!-- Header --\x3e\n      <div style="display:flex; justify-content:flex-end; width:100%;">\n        ${Za(this.ID_CLOSE, "cursor: pointer !important;")}\n      </div>\n\n      \x3c!-- Avatar (opens Edit Profile Picture) --\x3e\n      <div id="${this.ID_AVATAR}" style="position:relative; width:100px; height:100px; margin-top:8px; margin-bottom:28px; cursor:pointer;">\n        <div style="\n          width:100px; height:100px;\n          border-radius:50%;\n          overflow:hidden;\n          background:#545454;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n        ">\n          ${o}\n        </div>\n        <div style="\n          position:absolute; bottom:0; right:0;\n          width:32px; height:32px; border-radius:50%;\n          background:#5B6CFF;\n          display:flex; align-items:center; justify-content:center;\n          pointer-events:none;\n        ">\n          ${Na("<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g clip-path=\"url(#clip0_4816_39661)\">\n        <path d=\"M13.6125 3.71115C13.6019 3.46323 13.5422 3.21988 13.4367 2.99525C13.3312 2.77063 13.1822 2.56921 12.9982 2.4027L10.9024 0.491859C10.532 0.155063 10.0431 -0.021092 9.54292 0.0020177C9.04278 0.0251274 8.57221 0.245615 8.23439 0.615139L7.05552 1.90748C7.03535 1.92508 7.01617 1.94378 6.99808 1.96352C6.98057 1.98313 6.96446 2.00344 6.94905 2.02446L1.86655 7.59938C1.68313 7.80128 1.54508 8.04012 1.46169 8.29983L0.438321 11.5338C0.348806 11.8165 0.327026 12.1163 0.374738 12.409C0.422451 12.7017 0.538319 12.9791 0.712988 13.2187C0.887657 13.4583 1.11623 13.6535 1.38025 13.7886C1.64428 13.9236 1.93635 13.9946 2.23289 13.9959C2.48868 13.9963 2.74192 13.9451 2.97747 13.8453L6.0945 12.5229C6.34472 12.4161 6.56922 12.257 6.75292 12.0564L13.1208 5.07074C13.2888 4.88806 13.4188 4.67378 13.5033 4.44036C13.5877 4.20694 13.6248 3.95906 13.6125 3.71115V3.71115ZM5.72115 11.1136C5.67358 11.1658 5.61528 11.2071 5.55024 11.2347L2.43182 12.56C2.34517 12.5978 2.24946 12.6097 2.1562 12.5943C2.06295 12.5789 1.97613 12.5369 1.90619 12.4733C1.83625 12.4097 1.78618 12.3273 1.76199 12.2359C1.73781 12.1446 1.74055 12.0482 1.76989 11.9583L2.79325 8.72361C2.81472 8.65546 2.85081 8.59283 2.89902 8.54009L7.56545 3.42186L10.3925 5.99253L5.72115 11.1136ZM12.0897 4.12792L11.3332 4.95796L8.50546 2.39009L9.26616 1.55585C9.30962 1.50793 9.36214 1.46909 9.42069 1.44156C9.47924 1.41403 9.54265 1.39836 9.60728 1.39545H9.6304C9.75297 1.39526 9.87118 1.44099 9.96171 1.52363L12.0575 3.43447C12.1055 3.47788 12.1444 3.53037 12.1721 3.5889C12.1997 3.64744 12.2155 3.71087 12.2185 3.77554C12.2215 3.8402 12.2116 3.90482 12.1895 3.96566C12.1674 4.0265 12.1335 4.08236 12.0897 4.13002V4.12792Z\" fill=\"#FAFAFA\"/>\n        </g>\n        <defs>\n        <clipPath id=\"clip0_4816_39661\">\n        <rect width=\"14\" height=\"14\" fill=\"white\"/>\n        </clipPath>\n        </defs>\n        </svg>\n        ", a, u, c)}\n        </div>\n      </div>\n\n      \x3c!-- Form --\x3e\n      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">\n        <span class="user-pill-name" style="padding-left:4px; font-size:16px; color:#e0e0e0;">Change Handle</span>\n        <div style="\n          display:flex; align-items:center; gap:2px; background:#1f1f1f;\n          border-radius:4px; padding-left:14px; height:48px; ${s ? "opacity:0.5;" : ""}">\n          <span style="color:white; font-size:18px;">@</span>\n          <input\n            id="${this.ID_INPUT}"\n            type="text"\n            value="${i}"\n            placeholder="username"\n            maxlength="32"\n            autocomplete="off"\n            aria-label="Handle"\n            ${s ? "disabled" : ""}\n            style="flex:1; background:transparent; border:none; outline:none; color:white; font-size:18px; ${s ? "cursor:not-allowed;" : ""}"\n          />\n        </div>\n        <span class="user-pill-name" style="padding-left:4px; font-size:13px; ${s ? "color:#e34248;" : "color:#8a8a8a;"}">${r}</span>\n        <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none;"></span>\n        <span id="${this.ID_STATUS}" class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a; display:none;"></span>\n      </div>\n\n      \x3c!-- Actions --\x3e\n      <div style="display:flex; flex-direction:column; width:100%; margin-top:24px; align-items:center">\n        <button id="${this.ID_SUBMIT}" class="gradient-200-button"\n          ${s ? "disabled" : ""}\n          style="height:48px; border-radius:4px; font-weight:700; cursor:${s ? "not-allowed" : "pointer"}; border:none; outline:none; width:100%; ${s ? "opacity:0.5;" : ""}">\n          Save Changes\n        </button>\n      </div>\n\n    </div>\n    `;
        var a;
        var u;
        var c;
      }
      setError(t) {
        const e = document.getElementById(this.ID_ERROR);
        if (e) {
          e.textContent = t;
          e.style.display = t ? "block" : "none";
        }
      }
      setStatus(t) {
        const e = document.getElementById(this.ID_STATUS);
        if (e) {
          e.textContent = t;
          e.style.display = t ? "block" : "none";
        }
      }
      setSubmitting(t, e, n) {
        this.isSubmitting = t;
        e.disabled = t;
        n.disabled = t;
        n.style.opacity = t ? "0.6" : "1";
        e.textContent = t ? "Checking handle..." : "Save Changes";
        e.style.cursor = t ? "wait" : "pointer";
        const i = document.getElementById(this.ID_AVATAR);
        if (i) {
          i.style.pointerEvents = t ? "none" : "auto";
          i.style.opacity = t ? "0.6" : "1";
        }
        this.setStatus(t ? "Verifying your handle — this can take a few seconds." : "");
      }
      bindFormEvents(t) {
        const e = document.getElementById(this.ID_CLOSE);
        const n = document.getElementById(this.ID_SUBMIT);
        const i = document.getElementById(this.ID_INPUT);
        const s = document.getElementById(this.ID_AVATAR);
        if (e) {
          e.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (s) {
          s.addEventListener("click", t => {
            t.stopPropagation();
            if (!this.isSubmitting) {
              super.close();
              this.props.onEditAvatarClicked();
            }
          });
        }
        if (!(t <= 0)) {
          if (i) {
            i.addEventListener("click", t => t.stopPropagation());
            i.addEventListener("keydown", t => {
              t.stopPropagation();
              if (t.key === "Enter") {
                t.preventDefault();
                if (n && !this.isSubmitting) {
                  this.onSubmit(n, i);
                }
              }
            });
            i.addEventListener("input", () => this.setError(""));
          }
          if (n && i) {
            n.addEventListener("click", t => Bu(this, undefined, undefined, function* () {
              t.stopPropagation();
              yield this.onSubmit(n, i);
            }));
          }
        }
      }
      onSubmit(t, e) {
        return Bu(this, undefined, undefined, function* () {
          if (this.isSubmitting) {
            return;
          }
          const n = e.value.trim().replace(/^@+/, "").toLowerCase();
          if (function (t) {
            return t.length >= 2 && t.length <= 32 && ju.test(t);
          }(n)) {
            this.setSubmitting(true, t, e);
            this.setError("");
            try {
              const t = yield S.m(new Ma(u, r));
              yield Fi("handles", "PUT", true, {
                handle: n
              }, t == null ? undefined : t.token);
              S.m(new La(u, r, n));
              this.isSubmitting = false;
              this.close();
              this.props.onHandleChanged(n);
            } catch (n) {
              const i = n == null ? undefined : n.status;
              if (i === 409) {
                this.setError("That handle is unavailable or already yours. Try another one.");
              } else if (i === 422) {
                this.setError("That handle is inappropriate. Try another one.");
              } else if (i === 400) {
                this.setError("That handle isn't valid. Try another one.");
              } else if (i === 403) {
                this.setError("You've used all of your handle changes.");
              } else {
                this.setError("Something went wrong. Please try again later.");
              }
              this.setSubmitting(false, t, e);
            }
          } else {
            this.setError("Handles must be 2-32 characters and use only letters, numbers, \".\" or \"_\".");
          }
        });
      }
    }
    function Tu(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class Pu extends Su {
      constructor() {
        super(...arguments);
        this.ID_CLOSE = "tp-allchat-modal-close";
        this.ID_CANCEL = "allchat-edit-picture-cancel";
        this.ID_SAVE = "allchat-edit-picture-save";
        this.ID_UPLOAD = "allchat-edit-picture-upload";
        this.ID_UPLOAD_INPUT = "allchat-edit-picture-upload-input";
        this.ID_PREVIEW = "allchat-edit-picture-preview";
        this.ID_AVATAR_GRID = "allchat-edit-picture-avatar-grid";
        this.ID_PREV_PAGE = "allchat-edit-picture-prev-page";
        this.ID_NEXT_PAGE = "allchat-edit-picture-next-page";
        this.ID_PAGE_LABEL = "allchat-edit-picture-page-label";
        this.ID_ERROR = "allchat-edit-picture-error";
        this.selectedIcon = xs[0];
        this.selectedUpload = null;
        this.uploadPreviewUrl = null;
        this.currentPage = 0;
        this.loadFailed = false;
      }
      open(t) {
        super.open(t);
        this.loadAndRender();
      }
      close() {
        var t;
        var e;
        this.revokeUploadPreviewUrl();
        const n = this.loadFailed;
        super.close();
        if (n) {
          if ((e = (t = this.props).onLoadErrorDismiss) !== null && e !== undefined) {
            e.call(t);
          }
        } else {
          this.props.closeModal();
        }
      }
      getHtml() {
        return `\n            <div style="display:flex; flex-direction:column; width:520px; padding:30px 34px;">\n                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">\n                    <span style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">Edit Profile Picture</span>\n                    ${Za(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                </div>\n                <div class="allchat-modal-body" style="padding:36px 0; text-align:center;">Loading...</div>\n            </div>\n        `;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
      }
      loadAndRender() {
        return Tu(this, undefined, undefined, function* () {
          try {
            const e = yield S.m(new io(a, r));
            const n = (e == null ? undefined : e.userSettings)?.userIcon;
            this.selectedIcon = n || xs[0];
            const i = (n ? Xs.getFullIconURL(n) : undefined) || n || chrome.runtime.getURL("img/icons/" + this.selectedIcon);
            this.currentPage = this.getPageForIcon(this.selectedIcon);
            this.setContent(this.getFormHtml(i));
            this.bindFormEvents();
          } catch (t) {
            console.error(t);
            this.loadFailed = true;
            this.setContent(`\n                <div style="display:flex; flex-direction:column; width:100%; align-items:center;">\n                    <div style="display:flex; justify-content:flex-end; width:100%;">\n                        ${Za(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                    </div>\n                    <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n                        Failed to load profile picture. Please try again later.\n                    </div>\n                </div>\n            `);
            this.bindLoadErrorEvents();
          }
        });
      }
      bindLoadErrorEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
      }
      getFormHtml(t) {
        return `\n            <div style="display:flex; flex-direction:column; width:520px; padding:30px 34px;">\n                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">\n                    <span style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">Edit Profile Picture</span>\n                    ${Za(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                </div>\n\n                <div style="display:flex; justify-content:center; margin-top:26px;">\n                    <div style="width:112px; height:112px; border-radius:50%; overflow:hidden; background:#8b92a3;">\n                        <img id="${this.ID_PREVIEW}" src="${t}" alt="Selected avatar" style="width:100%; height:100%; object-fit:cover; display:block;" />\n                    </div>\n                </div>\n\n                <span style="margin-top:28px; color:#b9b9c2; font-size:17px; font-weight:400;">Choose an avatar</span>\n\n                <div style="display:flex; align-items:center; gap:12px; margin-top:18px; width:100%;">\n                    <button id="${this.ID_PREV_PAGE}" type="button" aria-label="Previous avatars" style="\n                        width:34px; height:76px; border-radius:10px; border:1px solid #4f515c;\n                        background:#151515; color:#ffffff; font-size:22px; cursor:pointer;\n                    ">&lsaquo;</button>\n\n                    <div style="flex:1; overflow:hidden;">\n                        <div id="${this.ID_AVATAR_GRID}" style="\n                            display:grid; grid-template-columns:repeat(5, 64px); justify-content:space-between; row-gap:14px;\n                            transition: opacity 160ms ease, transform 160ms ease;\n                            opacity:1; transform:translateX(0);\n                        ">\n                        ${this.getAvatarGridHtml()}\n                        </div>\n                    </div>\n\n                    <button id="${this.ID_NEXT_PAGE}" type="button" aria-label="Next avatars" style="\n                        width:34px; height:76px; border-radius:10px; border:1px solid #4f515c;\n                        background:#151515; color:#ffffff; font-size:22px; cursor:pointer;\n                    ">&rsaquo;</button>\n                </div>\n                <span id="${this.ID_PAGE_LABEL}" style="align-self:center; margin-top:10px; color:#8f9099; font-size:13px; font-weight:500;">\n                    ${this.getPageLabel()}\n                </span>\n\n                <button id="${this.ID_UPLOAD}" type="button" style="\n                    margin-top:24px; width:100%; height:54px; border-radius:14px;\n                    border:2px solid #5e606b; background:transparent; color:#ffffff;\n                    display:flex; align-items:center; justify-content:center; gap:14px;\n                    font-size:18px; font-weight:700; cursor:pointer;\n                ">\n                    <span aria-hidden="true" style="font-size:18px;">&#x2B06;&#xFE0F;</span>\n                    <span>Upload your own picture</span>\n                </button>\n                <input id="${this.ID_UPLOAD_INPUT}" type="file" accept="image/png,image/jpeg,image/webp,image/gif" style="display:none;" />\n\n                <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none; margin-top:12px;"></span>\n\n                <button id="${this.ID_SAVE}" class="gradient-200-button" type="button" style="\n                    margin-top:22px; width:100%; height:56px; border-radius:14px;\n                    border:none; color:#ffffff; font-size:18px; font-weight:700; cursor:pointer;\n                ">Save</button>\n\n                <button id="${this.ID_CANCEL}" type="button" style="\n                    align-self:center; margin-top:18px; border:none; background:transparent;\n                    color:#b9b9c2; font-size:16px; font-weight:600; cursor:pointer;\n                ">Cancel</button>\n            </div>\n        `;
      }
      getAvatarButtonHtml(t) {
        return `\n            <button type="button" class="allchat-edit-picture-avatar" data-icon="${t}" aria-label="Choose avatar" style="\n                width:64px; height:64px; border-radius:50%; background:#1f1f1f;\n                border:${t === this.selectedIcon ? "4px solid #ffffff" : "2px solid transparent"};\n                outline:none; cursor:pointer; padding:4px; overflow:hidden;\n            ">\n                <img src="${chrome.runtime.getURL("img/icons/" + t)}" alt="" style="width:100%; height:100%; object-fit:contain; display:block;" />\n            </button>\n        `;
      }
      get totalPages() {
        return Math.max(1, Math.ceil(xs.length / 10));
      }
      getPageForIcon(t) {
        const e = xs.indexOf(t);
        if (e < 0) {
          return 0;
        } else {
          return Math.floor(e / 10);
        }
      }
      getVisibleIcons() {
        const t = this.currentPage * 10;
        return xs.slice(t, t + 10);
      }
      getAvatarGridHtml() {
        return this.getVisibleIcons().map(t => this.getAvatarButtonHtml(t)).join("");
      }
      getPageLabel() {
        return `${this.currentPage + 1}/${this.totalPages}`;
      }
      setError(t) {
        const e = document.getElementById(this.ID_ERROR);
        if (e) {
          e.textContent = t;
          e.style.display = t ? "block" : "none";
        }
      }
      setPreview(t, e = t) {
        this.revokeUploadPreviewUrl();
        this.selectedIcon = t;
        this.selectedUpload = null;
        const n = document.getElementById(this.ID_PREVIEW);
        if (n) {
          n.src = e;
        }
        document.querySelectorAll(".allchat-edit-picture-avatar").forEach(e => {
          const n = e.dataset.icon === t;
          e.style.border = n ? "4px solid #ffffff" : "2px solid transparent";
        });
      }
      setUploadPreview(t, e) {
        this.selectedUpload = t;
        const n = document.getElementById(this.ID_PREVIEW);
        if (n) {
          n.src = e;
        }
        document.querySelectorAll(".allchat-edit-picture-avatar").forEach(t => {
          t.style.border = "2px solid transparent";
        });
      }
      revokeUploadPreviewUrl() {
        if (this.uploadPreviewUrl) {
          URL.revokeObjectURL(this.uploadPreviewUrl);
          this.uploadPreviewUrl = null;
        }
      }
      bindFormEvents() {
        this.bindInnerEvents();
        const t = document.getElementById(this.ID_CANCEL);
        const e = document.getElementById(this.ID_SAVE);
        const n = document.getElementById(this.ID_UPLOAD);
        const i = document.getElementById(this.ID_UPLOAD_INPUT);
        const s = document.getElementById(this.ID_PREV_PAGE);
        const o = document.getElementById(this.ID_NEXT_PAGE);
        if (t != null) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        this.bindAvatarButtons();
        if (s != null) {
          s.addEventListener("click", t => {
            t.stopPropagation();
            this.setAvatarPage(this.currentPage - 1, -1);
          });
        }
        if (o != null) {
          o.addEventListener("click", t => {
            t.stopPropagation();
            this.setAvatarPage(this.currentPage + 1, 1);
          });
        }
        if (n != null) {
          n.addEventListener("click", t => {
            t.stopPropagation();
            if (i != null) {
              i.click();
            }
          });
        }
        if (i != null) {
          i.addEventListener("change", () => {
            const e = i.files?.[0];
            if (e) {
              if (!e.type.startsWith("image/")) {
                this.setError("Please choose a valid image file.");
                i.value = "";
                return;
              }
              this.revokeUploadPreviewUrl();
              this.uploadPreviewUrl = URL.createObjectURL(e);
              this.setError("");
              this.setUploadPreview(e, this.uploadPreviewUrl);
            }
          });
        }
        if (e != null) {
          e.addEventListener("click", t => Tu(this, undefined, undefined, function* () {
            t.stopPropagation();
            yield this.onSave(e);
          }));
        }
      }
      bindAvatarButtons() {
        document.querySelectorAll(".allchat-edit-picture-avatar").forEach(t => {
          t.addEventListener("click", e => {
            e.stopPropagation();
            const n = t.dataset.icon;
            if (n) {
              this.setError("");
              this.setPreview(n, chrome.runtime.getURL("img/icons/" + n));
            }
          });
        });
      }
      setAvatarPage(t, e) {
        this.currentPage = (t + this.totalPages) % this.totalPages;
        const n = document.getElementById(this.ID_AVATAR_GRID);
        if (n) {
          n.style.opacity = "0";
          n.style.transform = `translateX(${e * -18}px)`;
          window.setTimeout(() => {
            n.innerHTML = this.getAvatarGridHtml();
            n.style.transition = "none";
            n.style.transform = `translateX(${e * 18}px)`;
            window.requestAnimationFrame(() => {
              n.style.transition = "opacity 160ms ease, transform 160ms ease";
              n.style.opacity = "1";
              n.style.transform = "translateX(0)";
            });
            this.bindAvatarButtons();
          }, 160);
        }
        const i = document.getElementById(this.ID_PAGE_LABEL);
        if (i) {
          i.textContent = this.getPageLabel();
        }
      }
      onSave(t) {
        return Tu(this, undefined, undefined, function* () {
          t.disabled = true;
          t.textContent = "Saving...";
          this.setError("");
          try {
            let t = this.selectedIcon;
            if (this.selectedUpload) {
              const e = yield S.m(new Ma(u, r));
              const n = new FormData();
              n.append("profilePicture", this.selectedUpload);
              t = `/${yield Fi("upload-profile", "POST", true, n, e == null ? undefined : e.token)}?lastmod=${Date.now()}`;
            }
            yield S.m(new so(u, r, {
              userIcon: t
            }));
            this.close();
            this.props.onProfilePictureChanged();
          } catch (e) {
            console.error(e);
            this.setError("Something went wrong. Please try again later.");
            t.disabled = false;
            t.textContent = "Save";
          }
        });
      }
    }
    function Mu(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const Lu = /^[\w.]+$/;
    class Ru extends Su {
      constructor() {
        super(...arguments);
        this.ID_CLOSE = "tp-allchat-modal-close";
        this.ID_SUBMIT = "allchat-set-handle-submit";
        this.ID_INPUT = "allchat-set-handle-input";
        this.ID_ERROR = "allchat-set-handle-error";
        this.ID_STATUS = "allchat-set-handle-status";
        this.isSubmitting = false;
        this.loadFailed = false;
      }
      open(t) {
        super.open(t);
        this.loadAndRender();
      }
      close() {
        if (this.isSubmitting) {
          return;
        }
        const t = this.loadFailed;
        super.close();
        this.props.closeModal();
        if (t) {
          this.props.onLoadErrorDismiss();
        }
      }
      getHtml() {
        return `\n      <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          ${Za(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <div class="allchat-modal-body" style="padding:16px;">Loading…</div>\n      </div>\n    `;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
      }
      loadAndRender() {
        return Mu(this, undefined, undefined, function* () {
          try {
            const n = yield S.m(new io(a, r, true));
            const i = (n == null ? undefined : n.currentUser)?.handle;
            if (i) {
              S.m(new La(u, r, i));
              this.close();
              this.props.onHandleSet(i);
              return;
            }
            const s = Xs.getFullIconURL((n == null ? undefined : n.userSettings)?.userIcon);
            this.setContent(this.getFormHtml(s));
            this.bindFormEvents();
          } catch (t) {
            console.error(t);
            this.loadFailed = true;
            this.setContent(`\n        <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n          <div style="display:flex; justify-content:flex-end; width:100%;">\n            ${Za(this.ID_CLOSE, "cursor: pointer !important;")}\n          </div>\n          <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n            Failed to load profile. Please try again later.\n          </div>\n        </div>\n      `);
            this.bindLoadErrorEvents();
          }
        });
      }
      bindLoadErrorEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
      }
      getFormHtml(t) {
        const e = t ? `<img src="${t}" alt="Avatar"\n            style="width:100%; height:100%; opacity:0.9; border-radius:50%; object-fit:cover;" />` : "<div style=\"\n            width:100%; height:100%; border-radius:50%;\n            border:2px solid #aaa; color:#aaa;\n            display:flex; align-items:center; justify-content:center;\n            font-size:12px; text-align:center;\n          \">No Profile</div>";
        return `\n    <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n\n      \x3c!-- Header --\x3e\n      <div style="display:flex; justify-content:flex-end; width:100%;">\n        ${Za(this.ID_CLOSE, "cursor: pointer !important;")}\n      </div>\n\n      \x3c!-- Avatar --\x3e\n      <div style="position:relative; width:100px; height:100px; margin-top:8px; margin-bottom:28px;">\n        <div style="\n          width:100px; height:100px;\n          border-radius:50%;\n          overflow:hidden;\n          background:#545454;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n        ">\n          ${e}\n        </div>\n      </div>\n\n      \x3c!-- Form --\x3e\n      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">\n        <span class="user-pill-name" style="padding-left:4px; font-size:16px; color:#e0e0e0;">Choose your Handle</span>\n        <div style="\n          display:flex; align-items:center; gap:2px; background:#1f1f1f;\n          border-radius:4px; padding-left:14px; height:48px;">\n          <span style="color:white; font-size:18px;">@</span>\n          <input\n            id="${this.ID_INPUT}"\n            type="text"\n            placeholder="username"\n            maxlength="32"\n            autocomplete="off"\n            aria-label="Handle"\n            style="flex:1; background:transparent; border:none; outline:none; color:white; font-size:18px;"\n          />\n        </div>\n        <span class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a;">\n          You can change your handle up to 3 times after this, so choose wisely.\n        </span>\n        <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none;"></span>\n        <span id="${this.ID_STATUS}" class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a; display:none;"></span>\n      </div>\n\n      \x3c!-- Actions --\x3e\n      <div style="display:flex; flex-direction:column; width:100%; margin-top:24px; align-items:center">\n        <button id="${this.ID_SUBMIT}" class="gradient-200-button"\n          style="height:48px; border-radius:4px; font-weight:700; cursor:pointer; border:none; outline:none; width:100%">\n          Submit\n        </button>\n      </div>\n\n    </div>\n    `;
      }
      setError(t) {
        const e = document.getElementById(this.ID_ERROR);
        if (e) {
          e.textContent = t;
          e.style.display = t ? "block" : "none";
        }
      }
      setStatus(t) {
        const e = document.getElementById(this.ID_STATUS);
        if (e) {
          e.textContent = t;
          e.style.display = t ? "block" : "none";
        }
      }
      setSubmitting(t, e, n) {
        this.isSubmitting = t;
        e.disabled = t;
        n.disabled = t;
        n.style.opacity = t ? "0.6" : "1";
        e.textContent = t ? "Checking handle..." : "Submit";
        e.style.cursor = t ? "wait" : "pointer";
        this.setStatus(t ? "Verifying your handle — this can take a few seconds." : "");
      }
      bindFormEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        const e = document.getElementById(this.ID_SUBMIT);
        const n = document.getElementById(this.ID_INPUT);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (n) {
          n.addEventListener("click", t => t.stopPropagation());
          n.addEventListener("keydown", t => {
            t.stopPropagation();
            if (t.key === "Enter") {
              t.preventDefault();
              if (e && !this.isSubmitting) {
                this.onSubmit(e, n);
              }
            }
          });
          n.addEventListener("input", () => this.setError(""));
        }
        if (e && n) {
          e.addEventListener("click", t => Mu(this, undefined, undefined, function* () {
            t.stopPropagation();
            yield this.onSubmit(e, n);
          }));
        }
      }
      onSubmit(t, e) {
        return Mu(this, undefined, undefined, function* () {
          if (this.isSubmitting) {
            return;
          }
          const n = e.value.trim().replace(/^@+/, "").toLowerCase();
          if (!function (t) {
            return t.length >= 2 && t.length <= 32 && Lu.test(t);
          }(n)) {
            this.setError("Handles must be 2-32 characters and use only letters, numbers, \".\" or \"_\".");
            return;
          }
          let i;
          this.setSubmitting(true, t, e);
          this.setError("");
          try {
            const t = yield S.m(new Ma(u, r));
            i = t == null ? undefined : t.token;
            yield Fi("handles", "POST", true, {
              handle: n
            }, i);
            S.m(new La(u, r, n));
            this.isSubmitting = false;
            this.close();
            this.props.onHandleSet(n);
          } catch (n) {
            const s = n == null ? undefined : n.status;
            const o = function (t) {
              try {
                const e = typeof (t == null ? undefined : t.message) == "string" ? JSON.parse(t.message) : t == null ? undefined : t.message;
                if (typeof (e == null ? undefined : e.data) == "string") {
                  return e.data;
                }
                if (typeof e == "string") {
                  return e;
                }
              } catch (t) {}
              if (typeof (t == null ? undefined : t.message) == "string") {
                return t.message;
              } else {
                return "";
              }
            }(n);
            if (s === 409) {
              const t = yield this.recoverExistingHandle(i);
              if (t || /already set/i.test(o)) {
                if (t) {
                  S.m(new La(u, r, t));
                  this.isSubmitting = false;
                  this.close();
                  this.props.onHandleSet(t);
                  return;
                }
                this.setError("You already have a handle. Close and try again.");
              } else {
                this.setError("That handle is already taken. Try another one.");
              }
            } else if (s === 422) {
              this.setError("That handle is inappropriate. Try another one.");
            } else if (s === 400) {
              this.setError("That handle isn't valid. Try another one.");
            } else {
              this.setError("Something went wrong. Please try again later.");
            }
            this.setSubmitting(false, t, e);
          }
        });
      }
      recoverExistingHandle(t) {
        return Mu(this, undefined, undefined, function* () {
          try {
            const n = yield Fi("handles/me", "GET", true, undefined, t);
            return (n == null ? undefined : n.data)?.handle || undefined;
          } catch (t) {
            return;
          }
        });
      }
    }
    class Ou extends Su {
      constructor() {
        super(...arguments);
        this.CONTINUE_ID = "allchat-help-modal-continue";
        this.TOGGLE_ID = "allchat-help-modal-toggle";
        this.CLOSE_ID = "tp-allchat-modal-close";
      }
      getCloseSelector() {
        return `#${this.CLOSE_ID}`;
      }
      open(t) {
        super.open(t);
      }
      close() {
        super.close();
        this.props.closeModal();
      }
      getHtml() {
        const t = this.props.getLiveChatShowing();
        const e = t ? "Disable All Chat" : "Enable All Chat";
        const n = t ? "allchat-toggle--disable" : "allchat-toggle--enable";
        return `\n    <div style="\n      display:flex; flex-direction:column; width:470px; height:600px;\n      position:relative; overflow:hidden; background-color:rgba(0,0,0,0.9);\n      font-family:'Poppins', sans-serif; padding-bottom:76px; box-sizing:border-box;\n    ">\n      <div style="display:flex; padding-bottom:6px; flex-direction:row; align-items:center; justify-content:space-between; width:100%;">\n        <div style="display:flex; flex-direction:row; align-items:center">\n          <span class="allchat-modal-header" style="margin-right:8px;">Introducing All Chat</span>\n          ${Na("<svg width=\"45\" height=\"19\" viewBox=\"0 0 45 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect width=\"45\" height=\"19\" rx=\"9.5\" fill=\"#FBC45A\"/>\n            <path d=\"M13.58 9.704C14.052 9.792 14.44 10.028 14.744 10.412C15.048 10.796 15.2 11.236 15.2 11.732C15.2 12.18 15.088 12.576 14.864 12.92C14.648 13.256 14.332 13.52 13.916 13.712C13.5 13.904 13.008 14 12.44 14H8.828V5.624H12.284C12.852 5.624 13.34 5.716 13.748 5.9C14.164 6.084 14.476 6.34 14.684 6.668C14.9 6.996 15.008 7.368 15.008 7.784C15.008 8.272 14.876 8.68 14.612 9.008C14.356 9.336 14.012 9.568 13.58 9.704ZM10.508 9.08H12.044C12.444 9.08 12.752 8.992 12.968 8.816C13.184 8.632 13.292 8.372 13.292 8.036C13.292 7.7 13.184 7.44 12.968 7.256C12.752 7.072 12.444 6.98 12.044 6.98H10.508V9.08ZM12.2 12.632C12.608 12.632 12.924 12.536 13.148 12.344C13.38 12.152 13.496 11.88 13.496 11.528C13.496 11.168 13.376 10.888 13.136 10.688C12.896 10.48 12.572 10.376 12.164 10.376H10.508V12.632H12.2ZM18.2189 6.98V9.08H21.0389V10.412H18.2189V12.632H21.3989V14H16.5389V5.612H21.3989V6.98H18.2189ZM28.6257 5.624V6.98H26.3937V14H24.7137V6.98H22.4817V5.624H28.6257ZM34.9874 12.404H31.6514L31.0994 14H29.3354L32.3474 5.612H34.3034L37.3154 14H35.5394L34.9874 12.404ZM34.5314 11.06L33.3194 7.556L32.1074 11.06H34.5314Z\" fill=\"#050505\"/>\n        </svg>\n        ", i, s)}\n        </div>\n        ${Za(this.CLOSE_ID, "cursor: pointer !important;")}\n      </div>\n\n      <span class="allchat-modal-body" style="color:#a0a0a0; margin-top:6px;">\n        Teleparty All Chat is a beta feature that allows viewers to engage with each other by leaving short comments on videos they watch.\n      </span>\n\n      <div class="allchat-scrollbox" style="\n        display:flex; flex-direction:column; background-color:#282828; padding:16px; margin-top:20px;\n        flex:1 1 auto; overflow-y:auto; border-radius:8px;\n      ">\n        <img style="margin-bottom:20px; max-width:100%; height:auto;" src="${chrome.runtime.getURL("img/allchat_comment.png")}" />\n\n        <span class="allchat-modal-subheader">How do I turn this feature on/off?</span>\n        <span class="allchat-modal-body">\n          To disable All Chat, press the ${Qa("", "width: 26px; height: 26px; transform: translateY(25%);")} button on the top right of the video.\n          To enable it, press ${Wa("", "width: 26px; height: 26px; transform: translateY(25%);")}.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">How do I add a comment to the video?</span>\n        <span class="allchat-modal-body">\n          To add comments to the video, sign in to teleparty and press the ${Ya("", "width: 26px; height: 26px; transform: translateY(25%);")} button on the top right of the video.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">Who sees these comments?</span>\n        <span class="allchat-modal-body">\n          Comments are shown to <span style="font-weight:700">all Teleparty users</span>. This chat is global unlike the typical Teleparty chat.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">Will I see comments when I'm not in a party?</span>\n        <span class="allchat-modal-body">\n          Yes, comments are shown whenever allchat is enabled, including when you are not in a party. By default, allchat is turned off.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">When will my comments show up for other users?</span>\n        <span class="allchat-modal-body">\n          Comments will show up for other users after about a minute.\n        </span>\n      </div>\n\n      <div style="\n        position:absolute; left:0; right:0; bottom:0;\n        display:flex; flex-direction:row; gap:10px; align-items:stretch;\n        padding:6px; background-color:rgba(0,0,0,0.9);\n        border-top:1px solid rgba(255,255,255,0.08);\n      ">\n        <span id="${this.TOGGLE_ID}" class="allchat-toggle-btn ${n}">${e}</span>\n        <span id="${this.CONTINUE_ID}" class="gradient-200-button" style="\n          flex:1 1 0; display:inline-flex; align-items:center; justify-content:center; white-space:nowrap;\n        ">Continue</span>\n      </div>\n    </div>`;
        var i;
        var s;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.CONTINUE_ID);
        const e = document.getElementById(this.TOGGLE_ID);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (e) {
          e.addEventListener("click", t => {
            t.stopPropagation();
            this.props.toggleLiveChat();
            if (this.props.getLiveChatShowing()) {
              e.classList.remove("allchat-toggle--enable");
              e.classList.add("allchat-toggle--disable");
              e.textContent = "Disable All Chat";
            } else {
              e.classList.remove("allchat-toggle--disable");
              e.classList.add("allchat-toggle--enable");
              e.textContent = "Enable All Chat";
            }
          });
        }
      }
    }
    const Uu = ["Messages should be relevant to the content and must not contain spoilers, spam, or advertisements", "Messages must not be rude, inappropriate, or hateful", "Messages are shown to ALL Teleparty users, not just those in your current party if you are in one"];
    const Vu = [{
      id: "ac-guideline-1",
      text: "I agree that my message is relevant to the content and does not contain spoilers, spam, or advertisements"
    }, {
      id: "ac-guideline-2",
      text: "I agree that my message is not rude, inappropriate, or hateful"
    }, {
      id: "ac-guideline-3",
      text: "I understand that my message will be shown to ALL Teleparty users, not just those in my current party if I am in one"
    }];
    class Hu extends Su {
      constructor() {
        super(...arguments);
        this.ID_CLOSE = "tp-allchat-guidelines-close";
        this.ID_CANCEL = "tp-allchat-modal-cancel-btn";
        this.ID_CONFIRM = "tp-allchat-confirm-post";
        this.ID_ERROR = "tp-allchat-guidelines-modal-error";
      }
      getCloseSelector() {
        if (this.props.viewOnly) {
          return `#${this.ID_CLOSE}`;
        } else {
          return null;
        }
      }
      close() {
        super.close();
        this.props.closeModal();
      }
      checkboxHtml(t, e) {
        var n;
        return `\n      <label for="${e}" style="display:flex; align-items:center; margin-bottom:8px;">\n        <input type="checkbox" id="${e}" data-teleparty-guidelines="true" ${((n = this.props.boxesChecked) === null || n === undefined ? undefined : n.includes(e)) ? "checked" : ""} style="margin-right:8px;" />\n        <span class="allchat-checkbox-text">${t}</span>\n      </label>\n    `;
      }
      getHtml() {
        if (this.props.viewOnly) {
          const t = Uu.map(t => `\n        <div style="display:flex; gap:10px; align-items:flex-start; margin-bottom:12px;">\n          <span style="color:#e34248; font-weight:700; line-height:1.4;">•</span>\n          <span class="allchat-checkbox-text" style="line-height:1.4;">${t}</span>\n        </div>\n      `).join("");
          return `\n      <div style="display:flex; flex-direction:column; width:470px;">\n        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">\n          <span class="allchat-modal-header">Community Guidelines</span>\n          ${Za(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <span class="allchat-modal-body" style="margin-bottom:16px;">\n          Please keep All Chat kind and on-topic. Messages that break these rules may be removed.\n        </span>\n        <div style="display:flex; flex-direction:column; margin-bottom:20px;">\n          ${t}\n        </div>\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          <span id="${this.ID_CANCEL}" class="gradient-200-button">Got it</span>\n        </div>\n      </div>\n    `;
        }
        return `\n      <div style="display:flex; flex-direction:column; width:470px;">\n        <span class="allchat-modal-header" style="margin-bottom:4px;">Community Guidelines</span>\n        <span class="allchat-modal-body">Please agree to the following community guidelines before commenting:</span>\n\n        <div style="display:flex; flex-direction:column; gap:8px; margin-top:20px; margin-bottom:20px;">\n          ${Vu.map(t => this.checkboxHtml(t.text, t.id)).join("")}\n          <span class="allchat-error-text" id="${this.ID_ERROR}"></span>\n        </div>\n\n        <div style="display:flex; flex-direction:row; align-items:center; justify-content:right; width:100%;">\n          <span id="${this.ID_CANCEL}" class="allchat-chatbox-button" style="font-weight:600; margin-right:16px; font-size:16px;">Cancel</span>\n          <span id="${this.ID_CONFIRM}" class="gradient-200-button">Post Comment</span>\n        </div>\n      </div>\n    `;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        const e = document.getElementById(this.ID_CANCEL);
        const n = document.getElementById(this.ID_CONFIRM);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (e) {
          e.addEventListener("click", t => {
            var e;
            var n;
            t.stopPropagation();
            if (!this.props.viewOnly && (n = (e = this.props).onCancel) !== null && n !== undefined) {
              n.call(e);
            }
            this.close();
          });
        }
        if (n && !this.props.viewOnly) {
          n.addEventListener("click", t => {
            var e;
            var n;
            t.stopPropagation();
            const i = document.querySelectorAll("input[type=\"checkbox\"][data-teleparty-guidelines=\"true\"]");
            if (Array.from(i).every(t => t.checked)) {
              if ((n = (e = this.props).onAgree) !== null && n !== undefined) {
                n.call(e);
              }
              this.close();
            } else {
              const t = document.getElementById(this.ID_ERROR);
              if (t) {
                t.textContent = "Please agree to all guidelines before posting";
              }
            }
          });
        }
        if (!this.props.viewOnly) {
          document.querySelectorAll("input[type=\"checkbox\"][data-teleparty-guidelines=\"true\"]").forEach(t => {
            t.addEventListener("change", () => {
              var e;
              var n;
              if ((n = (e = this.props).onToggleBox) !== null && n !== undefined) {
                n.call(e, t.id, t.checked);
              }
            });
          });
        }
      }
    }
    function Nu(t, e, n) {
      const i = e ? ` id="${e}"` : "";
      let s = (n ?? "").trim();
      if (s && !s.endsWith(";")) {
        s += ";";
      }
      s += "pointer-events:auto!important;";
      return t.replace("<svg ", `<svg${i} style="${s}" `);
    }
    function Gu(t, e) {
      const n = `tpLogo${Math.random().toString(36).slice(2, 9)}`;
      return Nu(`<svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <mask id="${n}Mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">\n            <path d="M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z" fill="#EF3E3A"/>\n            <path d="M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z" fill="#EF3E3A"/>\n            </mask>\n            <g mask="url(#${n}Mask)">\n            <rect width="33" height="33" fill="url(#${n}Grad)"/>\n            </g>\n            <defs>\n            <linearGradient id="${n}Grad" x1="0" y1="0" x2="37.984" y2="7.39309" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#E34248"/>\n            <stop offset="1" stop-color="#9E55A0"/>\n            </linearGradient>\n            </defs>\n        </svg>`, t, e);
    }
    function zu(t, e) {
      return Nu("<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"12\" cy=\"12\" r=\"8.25\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n            <path d=\"M8.5 14c1.1 1.2 2.6 1.8 3.5 1.8s2.4-.6 3.5-1.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n            <circle cx=\"9.2\" cy=\"10.2\" r=\"1\" fill=\"currentColor\"/>\n            <circle cx=\"14.8\" cy=\"10.2\" r=\"1\" fill=\"currentColor\"/>\n        </svg>", t, e);
    }
    class Zu extends Su {
      constructor() {
        super(...arguments);
        this.CLOSE_ID = "tp-floating-help-close";
        this.CONTINUE_ID = "tp-floating-help-continue";
        this.FEEDBACK_ID = "tp-floating-help-feedback";
      }
      getCloseSelector() {
        return `#${this.CLOSE_ID}`;
      }
      close() {
        super.close();
        this.props.closeModal();
      }
      getHtml() {
        return `\n    <div class="tp-floating-help">\n      <div class="tp-floating-help-header">\n        <div class="tp-floating-help-brand">\n          <span class="tp-floating-help-logo" aria-hidden="true">${Gu()}</span>\n          <div class="tp-floating-help-titles">\n            <span class="tp-floating-help-title">All Chat</span>\n            <span class="tp-floating-help-badge">Beta</span>\n          </div>\n        </div>\n        ${Za(this.CLOSE_ID, "cursor: pointer !important;")}\n      </div>\n\n      <p class="tp-floating-help-lede">\n        Timed comments from Teleparty viewers — not a live chat. Comments appear when the video reaches the moment they were left.\n      </p>\n\n      <div class="tp-floating-help-steps">\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">1</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Open the panel</span>\n            <span class="tp-floating-help-step-text">\n              Tap <strong>Chat</strong> at the top left when Netflix controls are visible. The button hides with the controls; an open panel stays up.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">2</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Watch comments appear</span>\n            <span class="tp-floating-help-step-text">\n              Like a Twitch VOD: comments unlock as playback reaches their timestamp. Scrubbing back hides later ones.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">3</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Leave your mark</span>\n            <span class="tp-floating-help-step-text">\n              Log in, choose a handle, then post. Comments are global for Teleparty users — not just people in your party.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-note">\n          All Chat hides while you’re in a Teleparty. Leave the party to use it again.\n        </div>\n      </div>\n\n      <div class="tp-floating-help-footer">\n        <a\n          id="${this.FEEDBACK_ID}"\n          class="tp-floating-help-feedback"\n          href="https://docs.google.com/forms/d/e/1FAIpQLSeJORvFwSNAYhsCLd94YLUOn5s7y_aGezl89slmbM6LZFPPvw/viewform?usp=publish-editor"\n          target="_blank"\n          rel="noopener noreferrer"\n        >Leave feedback</a>\n        <button type="button" id="${this.CONTINUE_ID}" class="tp-floating-help-continue">Got it</button>\n      </div>\n    </div>`;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.CONTINUE_ID);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        const e = document.getElementById(this.FEEDBACK_ID);
        if (e) {
          e.addEventListener("click", t => t.stopPropagation());
        }
      }
    }
    function Qu(t) {
      const n = t.containerStyling ? `style="${t.containerStyling}"` : "";
      const i = Ua(t.flair ?? "");
      return `\n        <div id="tp-allchat-live-feed" class="live-feed-container" ${n}>\n            ${t.flair ? `<div style="position: absolute; top: 0; right: 0; transform: translate(60%, -40%)" id="tp-flair-container">\n                            <img src=${i.gifSrc} alt=${t.flair} width="48 height="48"/>\n                        </div>` : ""}\n            <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-between; align-items: center">\n                ${Na("\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g opacity=\"0.2\">\n            <mask id=\"mask0_1785_27357\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"16\" height=\"16\">\n            <path d=\"M9.59808 3.61537V0.416016H0V3.61537H3.19936V12.416H6.39872V3.61537H9.59808Z\" fill=\"#EF3E3A\"/>\n            <path d=\"M11.5997 4.41602C9.16894 4.41602 7.19936 6.38559 7.19936 8.81634V15.6154H10.3987V13.0501C10.7798 13.159 11.1833 13.2167 11.5997 13.2167C14.0304 13.2167 16 11.2471 16 8.81634C16 6.38559 14.0272 4.41602 11.5997 4.41602ZM11.5997 10.0141C10.9368 10.0141 10.3987 9.47606 10.3987 8.81313C10.3987 8.1502 10.9368 7.61217 11.5997 7.61217C12.2626 7.61217 12.8006 8.1502 12.8006 8.81313C12.7974 9.47927 12.2626 10.0141 11.5997 10.0141Z\" fill=\"#EF3E3A\"/>\n            </mask>\n            <g mask=\"url(#mask0_1785_27357)\">\n            <rect width=\"16\" height=\"16\" fill=\"white\"/>\n            </g>\n            </g>\n        </svg>\n    ", s, o)}\n                <div style="display: flex; flex-direction: row; align-items: center">\n                    ${Ga("tp-allchat-comment-help", "cursor: pointer !important;")}\n                    ${za("tp-allchat-report-flag", "cursor: pointer !important; margin-left: 6px;")}\n                </div>\n            </div>\n            <p class="live-feed-comment-username">${t.username}</p>\n            <p class="live-feed-comment-message">${t.message}</p>\n        </div>\n    `;
      var s;
      var o;
    }
    function Wu(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class Yu extends Su {
      constructor() {
        super(...arguments);
        this.ID_CANCEL = "tp-allchat-report-cancel-btn";
        this.ID_CONFIRM = "tp-allchat-report-confirm-btn";
        this.ID_CONTENT = "allchat-modal-content";
      }
      open(t) {
        super.open(t);
      }
      close() {
        super.close();
        this.props.closeModal();
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
        const t = document.getElementById(this.ID_CANCEL);
        const e = document.getElementById(this.ID_CONFIRM);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (e) {
          e.addEventListener("click", t => {
            t.stopPropagation();
            this.onReportClick(e);
          });
        }
      }
      bindFinishedEvents() {
        const t = document.getElementById(this.ID_CANCEL);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
      }
      onReportClick(t) {
        return Wu(this, undefined, undefined, function* () {
          t.textContent = "Reporting...";
          t.style.pointerEvents = "none";
          t.style.opacity = "0.7";
          try {
            yield Fi(`comments/${this.props.commentId}/report`, "POST", false);
            this.setContent(this.getFinishedHtml("Message reported successfully."));
            this.bindFinishedEvents();
            this.props.removeMessage(this.props.commentId);
          } catch (t) {
            console.error(t);
            this.setContent(this.getFinishedHtml("An error occurred. Please try again later."));
            this.bindFinishedEvents();
          }
        });
      }
    }
    const Ju = "tp-floating-chat-open-btn";
    function Ku(t, e) {
      if (!e) {
        return;
      }
      let n = document.getElementById(Ju);
      var i;
      var s;
      if (!n || !e.contains(n) || !n.querySelector(".tp-floating-chat-open-btn-logo")) {
        e.innerHTML = `\n            <button\n                type="button"\n                id="${Ju}"\n                class="tp-floating-chat-open-btn"\n                aria-label="Open All Chat"\n                title="Open All Chat"\n            >\n                <span class="tp-floating-chat-open-btn-logo" aria-hidden="true">${Nu("<svg width=\"20\" height=\"20\" viewBox=\"0 0 33 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n            <path d=\"M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z\" fill=\"#FFFFFF\"/>\n            <path d=\"M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z\" fill=\"#FFFFFF\"/>\n        </svg>", i, s)}</span>\n                <span class="tp-floating-chat-open-btn-label">All Chat</span>\n            </button>\n        `;
        n = document.getElementById(Ju);
      }
      if (!n) {
        return;
      }
      const o = ["tp-floating-chat-open-btn"];
      if (t.showGradient) {
        o.push("tp-floating-chat-open-btn--gradient");
      }
      if (t.panelOpen) {
        o.push("tp-floating-chat-open-btn--open");
      }
      if (t.controlsShowing) {
        o.push("tp-floating-chat-open-btn--visible");
      } else {
        o.push("tp-floating-chat-open-btn--hidden");
      }
      n.className = o.join(" ");
      n.setAttribute("aria-label", t.panelOpen ? "Close All Chat" : "Open All Chat");
      n.title = t.panelOpen ? "Close All Chat" : "Open All Chat";
      n.setAttribute("aria-pressed", t.panelOpen ? "true" : "false");
      n.setAttribute("aria-hidden", t.controlsShowing ? "false" : "true");
      n.tabIndex = t.controlsShowing ? 0 : -1;
      n.onclick = e => {
        e.stopPropagation();
        e.preventDefault();
        t.onClick();
      };
    }
    const Xu = "tp-floating-chat-message-list";
    const qu = {
      commentId: "tp-floating-chat-intro",
      vidTime: 0,
      message: "Welcome to All Chat! These are timed comments from Teleparty users, not a live chat. Comments appear when the video reaches the moment they were left. Post a comment and make your mark!",
      displayName: "Teleparty All Chat",
      vidDuration: 0
    };
    function tc(t) {
      return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function ec(t, e) {
      if (!e) {
        return;
      }
      const n = e.querySelector(`#${Xu}`);
      if (!n) {
        return;
      }
      const i = n.scrollHeight - n.scrollTop - n.clientHeight < 48;
      const s = n.querySelectorAll(".tp-floating-chat-message").length;
      n.innerHTML = t.messages.map(t => function (t) {
        const {
          comment: n,
          isSystem: i,
          isPending: s,
          isRejected: o,
          rejectionReason: r,
          isLeaving: a
        } = t;
        const u = (n.displayName || "?").replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
        const c = Ua(n.flair ?? "");
        const l = n.flair ? `<div class="tp-floating-chat-flair" aria-hidden="true">\n                <img src="${c.gifSrc}" alt="${tc(n.flair)}" width="24" height="24"/>\n           </div>` : "";
        const h = i || s || o || !t.onReportFlagClicked ? "" : za(`tp-floating-report-${tc(n.commentId)}`, "cursor: pointer !important; width: 14px; height: 14px;");
        const d = i ? "tp-floating-chat-username tp-floating-chat-username--brand" : "tp-floating-chat-username";
        const p = i ? `<div class="tp-floating-chat-avatar tp-floating-chat-avatar--brand">${Gu()}</div>` : `<div class="tp-floating-chat-avatar">${tc(u)}</div>`;
        const f = l || h ? `<div class="tp-floating-chat-message-meta-right">${l}${h}</div>` : "";
        const D = [i ? "tp-floating-chat-message--system" : "", s ? "tp-floating-chat-message--pending" : "", o ? "tp-floating-chat-message--rejected" : "", a ? "tp-floating-chat-message--leaving" : ""].filter(Boolean).join(" ");
        const v = o && r ? `<p class="tp-floating-chat-reject-reason">${tc(r)}</p>` : "";
        return `\n        <div class="tp-floating-chat-message${D ? ` ${D}` : ""}" data-comment-id="${tc(n.commentId)}">\n            ${p}\n            <div class="tp-floating-chat-message-body">\n                <div class="tp-floating-chat-message-meta">\n                    <span class="${d}">${tc(n.displayName)}</span>\n                    ${f}\n                </div>\n                <p class="tp-floating-chat-text">${tc(n.message)}</p>\n                ${v}\n            </div>\n        </div>\n    `;
      }(t)).join("");
      for (const e of t.messages) {
        if (e.isSystem || !e.onReportFlagClicked) {
          continue;
        }
        const t = document.getElementById(`tp-floating-report-${e.comment.commentId}`);
        if (t) {
          t.addEventListener("click", t => {
            var n;
            t.stopPropagation();
            if ((n = e.onReportFlagClicked) !== null && n !== undefined) {
              n.call(e);
            }
          });
        }
      }
      if (i || t.messages.length > s) {
        n.scrollTop = n.scrollHeight;
      }
    }
    function nc(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const ic = 120;
    const sc = "tp-floating-chat-input";
    const oc = "tp-floating-chat-length";
    const rc = "tp-floating-chat-send";
    const ac = "tp-floating-chat-identity";
    const uc = "tp-floating-chat-error";
    const cc = "tp-floating-flair-select";
    const lc = "tp-floating-flair-trigger";
    const hc = "tp-floating-flair-menu";
    const dc = "tp-floating-flair-preview";
    let pc = null;
    function fc() {
      if (pc !== null) {
        clearTimeout(pc);
        pc = null;
      }
      const t = document.getElementById(uc);
      if (t) {
        t.hidden = true;
        t.textContent = "";
      }
    }
    function Dc(t) {
      const e = document.getElementById(uc);
      if (e) {
        if (pc !== null) {
          clearTimeout(pc);
          pc = null;
        }
        e.textContent = t;
        e.hidden = false;
        pc = window.setTimeout(() => {
          fc();
        }, 4000);
      }
    }
    const vc = [{
      reaction: null,
      label: "No flair"
    }, {
      reaction: "heart",
      label: "Heart"
    }, {
      reaction: "cry",
      label: "Cry"
    }, {
      reaction: "surprise",
      label: "Surprise"
    }];
    function gc() {
      const t = document.getElementById(cc);
      return (t == null ? undefined : t.getAttribute("data-flair")) || undefined;
    }
    function mc(t) {
      const e = document.getElementById(cc);
      if (!e) {
        return;
      }
      if (t) {
        e.setAttribute("data-flair", t);
      } else {
        e.removeAttribute("data-flair");
      }
      (function (t) {
        const e = document.getElementById(dc);
        if (e) {
          if (t) {
            const {
              staticSrc: n
            } = Ua(t);
            e.innerHTML = `<img src="${n}" alt="${t}" />`;
          } else {
            e.innerHTML = zu();
          }
        }
      })(t);
      const n = document.getElementById(hc);
      if (n) {
        n.querySelectorAll("[data-flair-option]").forEach(e => {
          const n = (e.getAttribute("data-flair-option") || "") === (t || "");
          e.setAttribute("aria-selected", n ? "true" : "false");
          e.classList.toggle("tp-floating-flair-option--selected", n);
        });
      }
    }
    function wc() {
      const t = document.getElementById(cc);
      const e = document.getElementById(lc);
      const n = document.getElementById(hc);
      if (t != null) {
        t.classList.remove("tp-floating-flair-select--open");
      }
      if (e != null) {
        e.setAttribute("aria-expanded", "false");
      }
      if (n) {
        n.hidden = true;
      }
    }
    function yc() {
      const t = document.getElementById(hc);
      if (t && !t.hidden) {
        wc();
      } else {
        (function () {
          const t = document.getElementById(cc);
          const e = document.getElementById(lc);
          const n = document.getElementById(hc);
          if (t != null) {
            t.classList.add("tp-floating-flair-select--open");
          }
          if (e != null) {
            e.setAttribute("aria-expanded", "true");
          }
          if (n) {
            n.hidden = false;
          }
        })();
      }
    }
    function bc() {
      const t = vc.map(({
        reaction: t,
        label: e
      }) => `\n            <button\n                type="button"\n                class="tp-floating-flair-option"\n                role="option"\n                data-flair-option="${t ?? ""}"\n                aria-selected="${t ? "false" : "true"}"\n            >\n                <span class="tp-floating-flair-option-icon">${t ? `<img src="${Ua(t).staticSrc}" alt="${e}" />` : zu()}</span>\n                <span class="tp-floating-flair-option-label">${e}</span>\n            </button>\n        `).join("");
      return `\n        <div id="${cc}" class="tp-floating-flair-select">\n            <button\n                type="button"\n                id="${lc}"\n                class="tp-floating-flair-trigger"\n                aria-haspopup="listbox"\n                aria-expanded="false"\n                aria-label="Choose flair"\n                title="Flair"\n            >\n                <span id="${dc}" class="tp-floating-flair-preview">${zu()}</span>\n                ${Nu("<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M6 9L12 15L18 9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>", e, n)}\n            </button>\n            <div id="${hc}" class="tp-floating-flair-menu" role="listbox" hidden>\n                ${t}\n            </div>\n        </div>\n    `;
      var e;
      var n;
    }
    let Cc = false;
    function Fc(t) {
      const e = document.getElementById(rc);
      const n = document.getElementById(sc);
      const i = document.querySelector(".tp-floating-chat-compose");
      const s = document.getElementById(lc);
      if (e) {
        e.classList.toggle("tp-floating-chat-send--sending", t);
        if (t) {
          e.setAttribute("disabled", "true");
          e.setAttribute("aria-busy", "true");
          e.setAttribute("aria-label", "Sending comment");
        } else {
          e.removeAttribute("disabled");
          e.removeAttribute("aria-busy");
          e.setAttribute("aria-label", "Send comment");
        }
      }
      if (i) {
        i.classList.toggle("tp-floating-chat-compose--sending", t);
      }
      if (n) {
        n.disabled = t;
      }
      if (s) {
        s.disabled = t;
      }
    }
    function _c(t, e, n, i) {
      return nc(this, undefined, undefined, function* () {
        const s = yield S.m(new Ma(a, r));
        i.value = "";
        t.closeModal();
        yield function (t, e, n, i) {
          return nc(this, undefined, undefined, function* () {
            let g;
            try {
              Fc(true);
              const w = {
                name: "allchat_message_sent",
                message: {
                  text: e
                },
                allchat_ui: "floating"
              };
              S.m(new o(u, r, w));
              const y = yield S.m(new yu(u, r));
              const b = {
                message: e,
                vidTime: yield t.getVidTime(),
                service: t.service,
                vidId: t.vidId,
                displayName: n,
                vidDuration: t.vidDuration,
                flair: gc(),
                permId: y,
                extensionVersion: m
              };
              g = `pending-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
              fc();
              t.onPostComment(Object.assign(Object.assign({}, b), {
                commentId: g
              }));
              t.onCommentEdited("");
              const C = document.getElementById(sc);
              if (C) {
                C.value = "";
              }
              Ec(0);
              const F = yield Fi("comments", "POST", true, b, i, undefined, true);
              if (t.onPostConfirmed) {
                t.onPostConfirmed(g, {
                  commentId: F.commentId,
                  vidTime: F.vidTime ?? b.vidTime,
                  message: F.message ?? b.message,
                  displayName: F.displayName ?? b.displayName,
                  vidDuration: F.vidDuration ?? b.vidDuration,
                  flair: F.flair ?? b.flair
                });
              } else {
                t.onPostComment({
                  commentId: F.commentId,
                  vidTime: F.vidTime ?? b.vidTime,
                  message: F.message ?? b.message,
                  displayName: F.displayName ?? b.displayName,
                  vidDuration: F.vidDuration ?? b.vidDuration,
                  flair: F.flair ?? b.flair
                });
              }
              Ha("allchat_message_accepted", "floating");
            } catch (e) {
              let n = "An error occurred";
              try {
                const t = JSON.parse(e.message);
                if (t.error) {
                  Ha("allchat_message_rejected", "floating");
                  n = t.error;
                } else {
                  Ha("allchat_message_errored", "floating");
                }
              } catch (t) {
                Ha("allchat_message_errored", "floating");
                console.error(`GOT ERROR ${e}`);
              }
              if (g && t.onPostRejected) {
                t.onPostRejected(g, n);
              } else if (!t.onPostRejected) {
                Dc(n);
              }
            } finally {
              Fc(false);
            }
          });
        }(t, e, n, s == null ? undefined : s.token);
      });
    }
    function Ec(t) {
      const e = document.getElementById(oc);
      if (e) {
        e.innerText = `${t}/120`;
      }
    }
    function xc(t, e) {
      fu({
        variant: "floating",
        knownHandle: e,
        onEditClicked: () => {
          t.openChangeHandleModal(e => xc(t, e));
        },
        onSetHandleClicked: () => {
          t.openSetHandleModal(e => xc(t, e));
        }
      }, document.getElementById(ac));
    }
    function kc(t) {
      return nc(this, undefined, undefined, function* () {
        const {
          userData: e,
          handle: n
        } = yield Va();
        Ha("allchat_post_button_clicked");
        const i = document.getElementById(sc);
        if (!i) {
          return;
        }
        const s = i.value;
        if (!s || s.length > ic) {
          Dc("Message must be between 1-120 characters");
        } else {
          if (!(e == null ? undefined : e.signedIn)) {
            const t = document.getElementById("tp-user-login-btn");
            if (t) {
              t.click();
            } else {
              window.open(`${h}/signup?ref=allchat`, "_blank", "noopener,noreferrer");
            }
            return;
          }
          if (n) {
            yield _c(t, s, n, i);
          } else {
            t.openSetHandleModal(e => nc(this, undefined, undefined, function* () {
              xc(t, e);
              if (e) {
                yield _c(t, s, e, i);
              }
            }));
          }
        }
      });
    }
    function Ac(t) {
      return `\n        <div class="tp-floating-chat-input-area">\n            <div id="${ac}" class="tp-floating-chat-identity"></div>\n            <div class="tp-floating-chat-input-row">\n                <div class="tp-floating-chat-compose">\n                    <input\n                        id="${sc}"\n                        type="text"\n                        class="tp-floating-chat-input"\n                        placeholder="Add your comment..."\n                        value="${t.curComment.replace(/"/g, "&quot;")}"\n                        maxlength="120"\n                    />\n                    ${bc()}\n                    <span id="${oc}" class="tp-floating-chat-length">${t.curComment.length}/120</span>\n                </div>\n                <button type="button" id="${rc}" class="tp-floating-chat-send" aria-label="Send comment">\n                    <span class="tp-floating-chat-send-icon">${Nu("<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M4 12L20 4L13 20L11 13L4 12Z\" stroke=\"white\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/>\n        </svg>", e, n)}</span>\n                    <span class="tp-floating-chat-send-spinner" aria-hidden="true"></span>\n                </button>\n            </div>\n            <p id="${uc}" class="tp-floating-chat-error" role="alert" hidden></p>\n            <div class="tp-floating-chat-input-hints">\n                <a\n                    class="tp-floating-chat-feedback"\n                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJORvFwSNAYhsCLd94YLUOn5s7y_aGezl89slmbM6LZFPPvw/viewform?usp=publish-editor"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                >\n                    Leave Feedback\n                </a>\n                <button type="button" id="tp-floating-chat-guidelines-btn" class="tp-floating-chat-guidelines">\n                    ${function (t, e) {
        return Nu("<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n            <path d=\"M12 3L5 6.5V12c0 4.5 2.9 7.6 7 8.8 4.1-1.2 7-4.3 7-8.8V6.5L12 3Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n        </svg>", t, e);
      }()}\n                    <span>Community Guidelines</span>\n                </button>\n            </div>\n        </div>\n    `;
      var e;
      var n;
    }
    function Ic(t) {
      xc(t);
      (function () {
        const t = document.getElementById(cc);
        const e = document.getElementById(lc);
        const n = document.getElementById(hc);
        if (t && e && n) {
          e.addEventListener("click", t => {
            t.stopPropagation();
            yc();
          });
          n.querySelectorAll("[data-flair-option]").forEach(t => {
            t.addEventListener("click", e => {
              e.stopPropagation();
              mc(t.getAttribute("data-flair-option") || null);
              wc();
            });
          });
          if (!Cc) {
            Cc = true;
            document.addEventListener("click", t => {
              const e = document.getElementById(cc);
              if (!e || !e.contains(t.target)) {
                wc();
              }
            }, true);
          }
        }
      })();
      const e = document.getElementById(sc);
      const n = document.getElementById(rc);
      const i = document.getElementById("tp-floating-chat-guidelines-btn");
      if (i) {
        i.addEventListener("click", e => {
          e.stopPropagation();
          t.openGuidelinesModal();
        });
      }
      if (e) {
        e.addEventListener("focus", e => {
          var n;
          e.stopPropagation();
          localStorage.setItem("allchat-has-focus", "true");
          if ((n = t.onInputFocusIntent) !== null && n !== undefined) {
            n.call(t);
          }
        });
        e.addEventListener("blur", () => {
          var n;
          if ((n = t.onInputBlurIntent) !== null && n !== undefined) {
            n.call(t);
          }
          window.setTimeout(() => {
            if (document.activeElement !== e) {
              localStorage.setItem("allchat-has-focus", "false");
            }
          }, 0);
        });
        e.addEventListener("click", t => t.stopPropagation());
        e.addEventListener("keydown", e => {
          e.stopPropagation();
          if (e.key === "Enter") {
            e.preventDefault();
            kc(t);
          }
        });
        e.addEventListener("input", n => {
          let i = n.target.value;
          if (i.length > ic) {
            i = i.substring(0, ic);
            e.value = i;
          }
          fc();
          t.onCommentEdited(i);
          Ec(i.length);
        });
      }
      if (n) {
        n.addEventListener("click", e => {
          e.stopPropagation();
          kc(t);
        });
      }
    }
    const Sc = "tp-floating-chat-panel";
    const Bc = "tp-floating-chat-close";
    const jc = "tp-floating-chat-help";
    const $c = "tpFloatingChatPanelPos";
    const Tc = 110;
    function Pc(t, e, n, i) {
      const s = Math.max(8, window.innerWidth - n - 8);
      const o = Math.max(8, window.innerHeight - i - 8);
      return {
        left: Math.min(Math.max(8, t), s),
        top: Math.min(Math.max(8, e), o)
      };
    }
    function Mc(t, e) {
      if (!t) {
        return;
      }
      const s = t.offsetWidth || 320;
      const o = t.offsetHeight || Math.round(window.innerHeight * 0.55);
      const r = Pc((e == null ? undefined : e.left) ?? 27, (e == null ? undefined : e.top) ?? Tc, s, o);
      t.style.left = `${r.left}px`;
      t.style.top = `${r.top}px`;
    }
    function Lc(t, e) {
      let n = false;
      let i = 0;
      let s = 0;
      let o = 0;
      let r = 0;
      const a = t => {
        if (!n) {
          return;
        }
        t.preventDefault();
        t.stopPropagation();
        const a = e.offsetWidth || 320;
        const u = e.offsetHeight || 400;
        const c = Pc(o + (t.clientX - i), r + (t.clientY - s), a, u);
        Mc(e, c);
      };
      const u = i => {
        if (!n) {
          return;
        }
        n = false;
        t.classList.remove("tp-floating-chat-header--dragging");
        try {
          t.releasePointerCapture(i.pointerId);
        } catch (t) {}
        window.removeEventListener("pointermove", a, true);
        window.removeEventListener("pointerup", u, true);
        window.removeEventListener("pointercancel", u, true);
        const s = Number.parseFloat(e.style.left || String(27));
        const o = Number.parseFloat(e.style.top || String(Tc));
        if (!Number.isNaN(s) && !Number.isNaN(o)) {
          (function (t) {
            try {
              localStorage.setItem($c, JSON.stringify(t));
            } catch (t) {}
          })({
            left: s,
            top: o
          });
        }
      };
      t.addEventListener("pointerdown", c => {
        const l = c.target;
        if (!(l == null ? undefined : l.closest("button, a, input, textarea"))) {
          c.preventDefault();
          c.stopPropagation();
          n = true;
          i = c.clientX;
          s = c.clientY;
          o = Number.parseFloat(e.style.left || String(e.offsetLeft || 27));
          r = Number.parseFloat(e.style.top || String(e.offsetTop || Tc));
          if (Number.isNaN(o)) {
            o = 27;
          }
          if (Number.isNaN(r)) {
            r = Tc;
          }
          t.classList.add("tp-floating-chat-header--dragging");
          try {
            t.setPointerCapture(c.pointerId);
          } catch (t) {}
          window.addEventListener("pointermove", a, true);
          window.addEventListener("pointerup", u, true);
          window.addEventListener("pointercancel", u, true);
        }
      });
    }
    function Rc(t, e) {
      if (!e) {
        return;
      }
      var n;
      var i;
      e.innerHTML = `\n        <div id="${Sc}" class="tp-floating-chat-panel">\n            <div class="tp-floating-chat-header">\n                <div class="tp-floating-chat-header-left">\n                    <span class="tp-floating-chat-logo" aria-hidden="true">${Gu()}</span>\n                    <span class="tp-floating-chat-title">All Chat</span>\n                </div>\n                <div class="tp-floating-chat-header-actions">\n                    <button type="button" id="${jc}" class="tp-floating-chat-icon-btn" aria-label="All Chat help">\n                        ${Nu("<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\"/>\n            <path d=\"M9.6 9.4c0-1.35 1.05-2.4 2.45-2.4 1.35 0 2.4 0.95 2.4 2.25 0 1.05-0.55 1.6-1.35 2.15-0.75 0.5-1.15 0.95-1.15 1.85\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <circle cx=\"12\" cy=\"17.1\" r=\"1.05\" fill=\"currentColor\"/>\n        </svg>", n, i)}\n                    </button>\n                    <button type="button" id="${Bc}" class="tp-floating-chat-icon-btn" aria-label="Close chat">\n                        ${function (t, e) {
        return Nu("<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M7 7L17 17M7 17L17 7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        </svg>", t, e);
      }()}\n                    </button>\n                </div>\n            </div>\n            <div id="tp-floating-chat-body" class="tp-floating-chat-body">\n                <div id="${Xu}" class="tp-floating-chat-message-list"></div>\n            </div>\n            ${Ac(t.inputProps)}\n        </div>\n    `;
      Mc(e, function () {
        try {
          const t = localStorage.getItem($c);
          if (!t) {
            return null;
          }
          const e = JSON.parse(t);
          if (typeof e.left == "number" && typeof e.top == "number") {
            return {
              left: e.left,
              top: e.top
            };
          }
        } catch (t) {}
        return null;
      }());
      ec({
        messages: t.messages
      }, e);
      Ic(t.inputProps);
      const s = document.getElementById(Bc);
      const o = document.getElementById(jc);
      const r = e.querySelector(".tp-floating-chat-header");
      if (s) {
        s.addEventListener("click", e => {
          e.stopPropagation();
          t.onClose();
        });
      }
      if (o) {
        o.addEventListener("click", e => {
          e.stopPropagation();
          t.onHelpClicked();
        });
      }
      if (r) {
        Lc(r, e);
      }
      const a = document.getElementById(Sc);
      if (a) {
        a.addEventListener("click", t => t.stopPropagation());
        a.addEventListener("keydown", t => t.stopPropagation());
      }
    }
    function Oc(t) {
      if (t) {
        t.innerHTML = "";
      }
    }
    function Uc(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const Vc = "tpFloatingChatButtonSeen";
    const Hc = "tpFloatingChatPanelOpen";
    function Nc(t) {
      try {
        if (t) {
          sessionStorage.setItem(Hc, "true");
        } else {
          sessionStorage.removeItem(Hc);
        }
      } catch (t) {}
    }
    class Gc {
      constructor(t) {
        this.deps = t;
        this.po = false;
        this.fo = new Set();
        this.Do = false;
        this.vo = "";
        this.mo = true;
        this.wo = false;
        this.yo = new Map();
        this.bo = false;
        this.Co = [];
        this.Fo = false;
        this._o = null;
        this.Eo = false;
        this.xo = t => {
          if (!this.Fo || !this.po) {
            return;
          }
          const e = this.deps.getPanelRoot();
          const n = t.target;
          if (!e || !n || !e.contains(n)) {
            this.ko();
          }
        };
      }
      get isPanelOpen() {
        return this.po;
      }
      get isMounted() {
        return this.wo;
      }
      get isComposeFocused() {
        return this.Fo;
      }
      noteComposeFocus() {
        if (this._o !== null) {
          clearTimeout(this._o);
          this._o = null;
        }
        this.Fo = true;
        this.Ao();
      }
      noteComposeBlur() {
        if (this._o !== null) {
          clearTimeout(this._o);
        }
        this._o = setTimeout(() => {
          this._o = null;
          const t = document.getElementById("tp-floating-chat-input");
          if (document.activeElement !== t) {
            this.Fo = false;
          } else {
            this.Fo = true;
          }
        }, 120);
      }
      render() {
        var t;
        var e;
        return Uc(this, undefined, undefined, function* () {
          if (this.deps.isUserInParty()) {
            this.hideForParty();
            return;
          }
          this.Do = false;
          this.mo = ((e = (t = this.deps).getControlsShowing) === null || e === undefined ? undefined : e.call(t)) ?? this.mo;
          this.Io();
          const i = this.deps.getPanelRoot();
          const s = Boolean(i == null ? undefined : i.querySelector("#tp-floating-chat-panel"));
          if (!this.po && (!!s || !!function () {
            try {
              return sessionStorage.getItem(Hc) === "true";
            } catch (t) {
              return false;
            }
          }())) {
            this.po = true;
          }
          this.So();
          this.wo = true;
          if (this.po) {
            if (!s) {
              yield this.Bo();
            }
            this.jo();
          } else {
            Oc(this.deps.getPanelRoot());
            this.$o();
          }
        });
      }
      setControlsShowing(t) {
        if (!this.Do && this.wo) {
          this.mo = t;
          this.So();
          this.To();
        } else {
          this.mo = t;
        }
      }
      togglePanel() {
        if (this.po) {
          this.closePanel();
        } else {
          this.openPanel();
        }
      }
      openPanel() {
        var t;
        var e;
        return Uc(this, undefined, undefined, function* () {
          if (!this.deps.isUserInParty()) {
            localStorage.setItem(Vc, "true");
            this.po = true;
            Nc(true);
            this.So();
            yield this.Bo();
            this.jo();
            if ((e = (t = this.deps).onPanelOpened) !== null && e !== undefined) {
              e.call(t);
            }
          }
        });
      }
      closePanel() {
        var t;
        var e;
        this.po = false;
        Nc(false);
        this.ko();
        this.Po();
        this.bo = false;
        Oc(this.deps.getPanelRoot());
        this.$o();
        this.So();
        if ((e = (t = this.deps).onPanelClosed) !== null && e !== undefined) {
          e.call(t);
        }
      }
      hideForParty() {
        var t;
        var e;
        const n = this.po;
        this.Do = true;
        this.po = false;
        Nc(false);
        this.wo = false;
        this.ko();
        this.Po();
        this.bo = false;
        this.$o();
        Oc(this.deps.getPanelRoot());
        const i = this.deps.getButtonRoot();
        if (i) {
          i.innerHTML = "";
        }
        if (n) {
          if ((e = (t = this.deps).onPanelClosed) !== null && e !== undefined) {
            e.call(t);
          }
        }
      }
      refreshMessages() {
        return Uc(this, undefined, undefined, function* () {
          if (this.po && !this.Do) {
            yield this.Mo();
          }
        });
      }
      noteOptimistic(t) {
        const e = this.yo.get(t);
        if (!(e == null ? undefined : e.isRejected) && !(e == null ? undefined : e.isLeaving)) {
          this.yo.set(t, {
            isPending: true
          });
        }
      }
      confirmPending(t) {
        this.yo.delete(t);
      }
      rejectPendingMessage(t, e) {
        this.bo = true;
        this.yo.set(t, {
          isRejected: true,
          rejectionReason: e
        });
        this.Mo();
        const n = setTimeout(() => {
          const e = this.yo.get(t);
          if (!e) {
            this.bo = false;
            return;
          }
          this.yo.set(t, Object.assign(Object.assign({}, e), {
            isLeaving: true
          }));
          this.Mo();
          const n = setTimeout(() => {
            this.deps.removeComment(t);
            this.yo.delete(t);
            this.bo = this.yo.size > 0 && Array.from(this.yo.values()).some(t => t.isRejected || t.isLeaving);
            this.Mo();
          }, 450);
          this.Co.push(n);
        }, 2000);
        this.Co.push(n);
      }
      destroy() {
        var t;
        var e;
        const n = this.po;
        this.$o();
        this.Po();
        this.bo = false;
        this.yo.clear();
        this.po = false;
        Nc(false);
        this.wo = false;
        this.ko();
        Oc(this.deps.getPanelRoot());
        const i = this.deps.getButtonRoot();
        if (i) {
          i.innerHTML = "";
        }
        if (n) {
          if ((e = (t = this.deps).onPanelClosed) !== null && e !== undefined) {
            e.call(t);
          }
        }
      }
      ko() {
        if (this._o !== null) {
          clearTimeout(this._o);
          this._o = null;
        }
        this.Fo = false;
        this.Lo();
        localStorage.setItem("allchat-has-focus", "false");
      }
      To() {
        if (this.po && !this.Do && this.Fo) {
          requestAnimationFrame(() => {
            if (!this.Fo || !this.po) {
              return;
            }
            const t = document.getElementById("tp-floating-chat-input");
            if (t && document.activeElement !== t) {
              t.focus({
                preventScroll: true
              });
            }
          });
        }
      }
      Ao() {
        if (!this.Eo) {
          this.Eo = true;
          document.addEventListener("pointerdown", this.xo, true);
        }
      }
      Lo() {
        if (this.Eo) {
          this.Eo = false;
          document.removeEventListener("pointerdown", this.xo, true);
        }
      }
      Po() {
        for (const t of this.Co) {
          clearTimeout(t);
        }
        this.Co = [];
      }
      Io() {}
      Ro() {
        return localStorage.getItem(Vc) !== "true";
      }
      So() {
        Ku({
          onClick: () => this.togglePanel(),
          showGradient: this.Ro(),
          panelOpen: this.po,
          controlsShowing: this.mo
        }, this.deps.getButtonRoot());
      }
      Oo(t) {
        return Uc(this, undefined, undefined, function* () {
          return [{
            comment: qu,
            isSystem: true
          }, ...t.map(t => {
            const e = this.yo.get(t.commentId);
            const n = Boolean((e == null ? undefined : e.isPending) || (e == null ? undefined : e.isRejected));
            return {
              comment: t,
              onReportFlagClicked: n ? undefined : () => this.deps.openReportMessageModal(t.commentId),
              isPending: e == null ? undefined : e.isPending,
              isRejected: e == null ? undefined : e.isRejected,
              rejectionReason: e == null ? undefined : e.rejectionReason,
              isLeaving: e == null ? undefined : e.isLeaving
            };
          })];
        });
      }
      Bo() {
        return Uc(this, undefined, undefined, function* () {
          const t = yield this.deps.getRevealedMessages();
          this.Uo(t);
          const e = yield this.deps.getInputProps();
          e.curComment = this.vo;
          e.onCommentEdited = t => {
            this.vo = t;
          };
          e.onInputFocusIntent = () => this.noteComposeFocus();
          e.onInputBlurIntent = () => this.noteComposeBlur();
          Rc({
            messages: yield this.Oo(t),
            inputProps: e,
            onClose: () => this.closePanel(),
            onHelpClicked: () => this.deps.openHelpModal()
          }, this.deps.getPanelRoot());
        });
      }
      Mo() {
        return Uc(this, undefined, undefined, function* () {
          const t = yield this.deps.getRevealedMessages();
          this.Uo(t);
          (function (t, e) {
            ec({
              messages: t
            }, e);
          })(yield this.Oo(t), this.deps.getPanelRoot());
        });
      }
      Uo(t) {
        var e;
        var n;
        for (const i of t) {
          if (!this.fo.has(i.commentId)) {
            this.fo.add(i.commentId);
            if ((n = (e = this.deps).onCommentViewed) !== null && n !== undefined) {
              n.call(e, i.commentId);
            }
          }
        }
        const i = new Set(t.map(t => t.commentId));
        for (const t of Array.from(this.fo)) {
          if (!i.has(t)) {
            this.fo.delete(t);
          }
        }
      }
      jo() {
        this.Vo ||= setInterval(() => {
          if (!this.bo) {
            this.Mo();
          }
        }, 1000);
      }
      $o() {
        if (this.Vo) {
          clearInterval(this.Vo);
          this.Vo = undefined;
        }
      }
    }
    function zc(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class Zc {
      constructor(t, e, n, i, s = () => false) {
        this.ALLCHAT_OPTIONS_ROOT_ID = "tp-allchat-options-root";
        this.ALLCHAT_CHATBOX_ROOT_ID = "tp-allchat-chatbox-root";
        this.ALLCHAT_LIVECHAT_ROOT_ID = "tp-allchat-livechat-root";
        this.ALLCHAT_MODAL_ROOT_ID = "tp-allchat-modal-root";
        this.FLOATING_CHAT_BUTTON_ROOT_ID = "tp-floating-chat-button-root";
        this.FLOATING_CHAT_PANEL_ROOT_ID = "tp-floating-chat-panel-root";
        this.Ho = localStorage.getItem("tpLiveChatShowing") === "true";
        this.No = false;
        this.Go = false;
        this.zo = "";
        this.Zo = true;
        this.Qo = "";
        this.Wo = null;
        this.Yo = false;
        this.Jo = false;
        this.Ko = false;
        this.Xo = 0;
        this.qo = false;
        this.tr = false;
        this.er = () => {
          this.nr();
          this.injectAllChat();
        };
        this.nr = () => {
          for (const t of [this.ALLCHAT_CHATBOX_ROOT_ID, this.ALLCHAT_LIVECHAT_ROOT_ID, this.ALLCHAT_OPTIONS_ROOT_ID, this.FLOATING_CHAT_BUTTON_ROOT_ID, this.FLOATING_CHAT_PANEL_ROOT_ID, this.ALLCHAT_MODAL_ROOT_ID]) {
            const e = document.getElementById(t);
            if (e) {
              e.remove();
            }
          }
        };
        this.ir = () => {
          var t;
          if ((t = this.sr) !== null && t !== undefined) {
            t.destroy();
          }
          this.rr();
          this.ar();
          this.ur();
          this.cr();
          this.nr();
          this.lr = undefined;
          this.zo = "";
          this.Wo = null;
        };
        this.hr = () => {
          if (this.dr()) {
            this.pr();
            this.Dr();
            this.injectAllChat();
          } else {
            this.ir();
          }
        };
        this.vr = t => {
          if (t) {
            this.gr();
          } else {
            this.mr();
          }
        };
        this.wr = () => {
          const t = document.head || document.getElementsByTagName("head")[0];
          const e = document.createElement("link");
          e.rel = "stylesheet";
          e.href = chrome.runtime.getURL("css/all-chat.css");
          t.appendChild(e);
          const n = document.createElement("link");
          n.rel = "stylesheet";
          n.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
          t.appendChild(n);
        };
        this.yr = () => {
          if (this.tr) {
            return;
          }
          const t = document.head || document.getElementsByTagName("head")[0];
          const e = document.createElement("link");
          e.rel = "stylesheet";
          e.href = chrome.runtime.getURL("css/floating-chat.css");
          t.appendChild(e);
          this.tr = true;
        };
        this.cr = () => {
          if (this.Xo != 0) {
            const t = Date.now() - this.Xo;
            S.m(new o(u, r, {
              name: "allchat_time_spent",
              allchat_usage: {
                time_spend: t
              }
            }));
            this.Xo = 0;
          }
        };
        this.ur = () => {
          const t = this.br();
          if (t) {
            t.innerHTML = "";
          }
          this.Wo = null;
        };
        this.Cr = t => {
          this.Fr = t;
          this.Wo = "report";
          new Yu({
            commentId: t,
            closeModal: this.ur,
            removeMessage: this._r
          }).open(this.br());
        };
        this.Er = () => {
          this.Wo = null;
          this.ar();
          S.m(new io(u, r, true));
        };
        this.pr = () => zc(this, undefined, undefined, function* () {
          if (this.dr()) {
            try {
              const t = (yield this.qn.getVideoDataAsync()).videoId;
              const e = this.qn.getStreamingServiceName();
              if (!t || !e) {
                console.error("Failed to get video info, live chat not loading");
              }
              const n = yield Fi(`comments?univKey=${e}%23${t}`, "GET", false);
              this.lr = n.comments.sort((t, e) => t.vidTime - e.vidTime);
              console.log(this.lr);
            } catch (t) {
              console.error(t);
            }
          }
        });
        this._r = t => {
          this.lr &&= this.lr.filter(e => e.commentId !== t);
          if (this.kr() && this.sr?.isPanelOpen) {
            this.sr.refreshMessages();
          }
        };
        this.Ar = (t = 5000) => zc(this, undefined, undefined, function* () {
          if (!this.lr || this.lr.length === 0) {
            return null;
          }
          const e = (yield this.qn.getStateAsync()).playbackPositionMilliseconds;
          let n = null;
          let i = Infinity;
          for (const s of this.lr) {
            const o = e - s.vidTime;
            if (o >= 0 && o < i && o <= t) {
              n = s;
              i = o;
            }
            if (s.vidTime > e) {
              break;
            }
          }
          return n;
        });
        this.Ir = () => zc(this, undefined, undefined, function* () {
          if (!this.lr || this.lr.length === 0) {
            return [];
          }
          const t = (yield this.qn.getStateAsync()).playbackPositionMilliseconds;
          const e = [];
          for (const n of this.lr) {
            if (!(n.vidTime <= t)) {
              break;
            }
            e.push(n);
          }
          return e;
        });
        this.Sr = t => {
          if (t !== this.Br) {
            this.Br = t;
            if (this.Yo) {
              S.m(new o(u, r, {
                name: "allchat_comment_viewed",
                action: {
                  description: t
                },
                allchat_ui: this.kr() ? "floating" : "legacy"
              }));
            }
          }
        };
        this.jr = () => {
          this.Wo = "guidelines";
          new Hu({
            closeModal: this.ur,
            viewOnly: true
          }).open(this.br());
        };
        this.$r = () => {
          this.Wo = "floatingHelp";
          new Zu({
            closeModal: this.ur
          }).open(this.br());
        };
        this.Tr = () => {
          this.Wo = "help";
          new Ou({
            closeModal: this.ur,
            toggleLiveChat: this.Pr,
            getLiveChatShowing: () => this.Ho
          }).open(this.br());
        };
        this.Mr = t => {
          this.Wo = "changeHandle";
          this.Lr = {
            closeModal: this.ur,
            onHandleChanged: t,
            onEditAvatarClicked: () => this.Rr(t),
            onLoadErrorDismiss: this.Er
          };
          new $u(this.Lr).open(this.br());
        };
        this.Or = t => {
          this.Wo = "setHandle";
          this.Ur = {
            closeModal: this.ur,
            onHandleSet: t,
            onLoadErrorDismiss: this.Er
          };
          new Ru(this.Ur).open(this.br());
        };
        this.Rr = t => {
          this.Wo = "editProfilePicture";
          this.Vr = {
            closeModal: () => {
              this.Mr(t);
            },
            onProfilePictureChanged: () => {
              t();
            },
            onLoadErrorDismiss: this.Er
          };
          new Pu(this.Vr).open(this.br());
        };
        this.Hr = t => {
          var e;
          var n;
          if (this.kr()) {
            if (typeof t.commentId == "string" && t.commentId.startsWith("pending-")) {
              this.Nr(t);
              if ((e = this.sr) !== null && e !== undefined) {
                e.noteOptimistic(t.commentId);
              }
              if ((n = this.sr) !== null && n !== undefined) {
                n.refreshMessages();
              }
              return;
            } else {
              (() => {
                zc(this, undefined, undefined, function* () {
                  var e;
                  try {
                    const e = (yield this.qn.getStateAsync()).playbackPositionMilliseconds;
                    if (typeof t.vidTime == "number" && t.vidTime > e) {
                      t.vidTime = e;
                    }
                  } catch (t) {}
                  this.Nr(t);
                  if ((e = this.sr) !== null && e !== undefined) {
                    e.refreshMessages();
                  }
                });
              })();
              return;
            }
          }
          this.Nr(t);
          if (this.Ho) {
            this.Gr();
          }
        };
        this.zr = (t, e) => {
          (() => {
            zc(this, undefined, undefined, function* () {
              var n;
              var i;
              try {
                const t = (yield this.qn.getStateAsync()).playbackPositionMilliseconds;
                if (typeof e.vidTime == "number" && e.vidTime > t) {
                  e.vidTime = t;
                }
              } catch (t) {}
              this.lr &&= this.lr.filter(e => e.commentId !== t);
              this.Nr(e);
              if ((n = this.sr) !== null && n !== undefined) {
                n.confirmPending(t);
              }
              if ((i = this.sr) !== null && i !== undefined) {
                i.refreshMessages();
              }
            });
          })();
        };
        this.Gr = () => zc(this, undefined, undefined, function* () {
          const t = yield this.Zr();
          if (t.message) {
            (function (t, e) {
              if (e) {
                e.innerHTML = Qu(t);
                const n = document.getElementById("tp-allchat-report-flag");
                const i = document.getElementById("tp-allchat-comment-help");
                if (n) {
                  n.addEventListener("click", e => {
                    e.stopPropagation();
                    t.onReportFlagClicked();
                  });
                }
                if (i) {
                  i.addEventListener("click", e => {
                    e.stopPropagation();
                    t.openHelpModal();
                  });
                }
              }
            })(t, this.Qr());
            if (t.commentId != this.Br) {
              this.Sr(t.commentId);
            }
          } else {
            const t = this.Qr();
            if (t) {
              t.innerHTML = "";
            }
          }
        });
        this.Wr = () => zc(this, undefined, undefined, function* () {
          yield this.Dr();
          this.Gr();
          this.Yr ||= setInterval(this.Gr, 1000);
        });
        this.rr = () => {
          const t = this.Qr();
          if (t) {
            t.innerHTML = "";
          }
          if (this.Yr) {
            clearInterval(this.Yr);
            this.Yr = undefined;
          }
        };
        this.Qo = window.location.href;
        this.Qe = t;
        this.qn = e;
        this._t = n;
        this.serviceName = i;
        this.Jr = s;
        this.Ko = s();
        if (this.Ko) {
          this.Ho = false;
        }
        this.ar = this.ar.bind(this);
        this.Kr = this.Kr.bind(this);
        this.Xr = this.Xr.bind(this);
        this.qr = this.qr.bind(this);
        this.Zr = this.Zr.bind(this);
        this.ta = this.ta.bind(this);
        this.ea = this.ea.bind(this);
        this.Qr = this.Qr.bind(this);
        this.br = this.br.bind(this);
        this.Pr = this.Pr.bind(this);
        this.mr = this.mr.bind(this);
        this.gr = this.gr.bind(this);
        this.na = this.na.bind(this);
        this.Qe.registerMenuStateChangeCallback(this.vr);
        this.na();
        this.pr();
        this.Dr();
        if (this.Ho) {
          this.Xo = Date.now();
        }
        window.addEventListener("pagehide", () => this.cr());
        window.addEventListener("pageshow", () => {
          if (this.Ho && this.Xo === 0) {
            this.Xo = Date.now();
          }
        });
      }
      dr() {
        return true;
      }
      kr() {
        return this.qo;
      }
      ia() {
        return Boolean(this.sr?.isComposeFocused);
      }
      ta() {
        return document.getElementById(this.ALLCHAT_OPTIONS_ROOT_ID);
      }
      ea() {
        return document.getElementById(this.ALLCHAT_CHATBOX_ROOT_ID);
      }
      Qr() {
        return document.getElementById(this.ALLCHAT_LIVECHAT_ROOT_ID);
      }
      br() {
        return document.getElementById(this.ALLCHAT_MODAL_ROOT_ID);
      }
      sa() {
        return document.getElementById(this.FLOATING_CHAT_BUTTON_ROOT_ID);
      }
      oa() {
        return document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID);
      }
      gr() {
        var t;
        if (this.kr()) {
          if ((t = this.sr) !== null && t !== undefined) {
            t.setControlsShowing(true);
          }
        } else {
          this.er();
        }
      }
      mr() {
        var t;
        if (this.kr()) {
          if ((t = this.sr) !== null && t !== undefined) {
            t.setControlsShowing(false);
          }
        } else {
          this.er();
        }
      }
      Pr() {
        const t = !this.Ho;
        this.ra(t, true);
        S.m(new o(u, r, {
          name: t ? "allchat_toggled_on" : "allchat_toggled_off"
        }));
      }
      Kr() {
        this.No = true;
        (() => {
          zc(this, undefined, undefined, function* () {
            Iu(yield this.Xr(), this.ea());
            if (this.Zo) {
              yield this.qn.pause();
            }
          });
        })();
      }
      ar() {
        this.No = false;
        this.zo = "";
        const t = this.ea();
        if (t) {
          t.innerHTML = "";
        }
      }
      qr() {
        return {
          toggleLiveChat: this.Pr,
          showCreatePost: this.Kr,
          liveChatShowing: this.Ho
        };
      }
      Dr() {
        return zc(this, undefined, undefined, function* () {
          yield Promise.all([this.aa(), this.ua()]);
        });
      }
      aa() {
        return zc(this, undefined, undefined, function* () {
          this.Yo = yield $a(Sa);
        });
      }
      ua() {
        return zc(this, undefined, undefined, function* () {
          if (localStorage.getItem("tpForceLegacyChat") === "true") {
            this.qo = false;
            return;
          }
          if (localStorage.getItem("tpForceFloatingChat") === "true") {
            this.qo = true;
            return;
          }
          const t = yield S.m(new Ea(u, r, "allchat-floating-chat"));
          this.qo = Boolean(t == null ? undefined : t.hasFeature);
        });
      }
      ca() {
        this.sr ||= new Gc({
          getButtonRoot: () => this.sa(),
          getPanelRoot: () => this.oa(),
          getRevealedMessages: () => this.Ir(),
          getInputProps: () => this.la(),
          openHelpModal: this.$r,
          openReportMessageModal: this.Cr,
          onCommentViewed: t => this.Sr(t),
          isUserInParty: () => this.Jr(),
          getControlsShowing: () => this.Qe.shouldMenuBeVisible(),
          removeComment: t => {
            this.lr &&= this.lr.filter(e => e.commentId !== t);
          },
          onPanelOpened: () => {
            this.Xo = Date.now();
          },
          onPanelClosed: () => {
            this.cr();
          }
        });
        return this.sr;
      }
      Zr() {
        return zc(this, undefined, undefined, function* () {
          const t = yield this.Ar();
          if (t) {
            return {
              message: t.message,
              username: t.displayName,
              commentId: t.commentId,
              onReportFlagClicked: () => this.Cr(t.commentId),
              openHelpModal: this.Tr,
              flair: t.flair
            };
          } else {
            return {};
          }
        });
      }
      Nr(t) {
        if (this.lr) {
          let e = false;
          for (let n = 0; n < this.lr.length; n++) {
            if (this.lr[n].vidTime >= t.vidTime) {
              if (this.lr[n].vidTime === t.vidTime) {
                this.lr[n].vidTime -= 0.0001;
              }
              this.lr.splice(n, 0, t);
              e = true;
              break;
            }
          }
          if (!e) {
            this.lr.push(t);
          }
        } else {
          this.lr = [t];
        }
      }
      la() {
        return zc(this, undefined, undefined, function* () {
          const t = yield this.qn.getVideoDataAsync();
          const e = this.qn.getStreamingServiceName();
          return {
            curComment: this.zo,
            onCommentEdited: t => {
              this.zo = t;
            },
            onPostComment: this.Hr,
            onPostConfirmed: (t, e) => {
              this.zr(t, e);
            },
            onPostRejected: (t, e) => {
              var n;
              if ((n = this.sr) !== null && n !== undefined) {
                n.rejectPendingMessage(t, e);
              }
            },
            getVidTime: () => zc(this, undefined, undefined, function* () {
              return (yield this.qn.getStateAsync()).playbackPositionMilliseconds;
            }),
            service: e.toString(),
            vidId: t.videoId,
            vidDuration: t.videoDuration,
            openChangeHandleModal: this.Mr,
            openSetHandleModal: this.Or,
            openGuidelinesModal: this.jr,
            closeModal: this.ur
          };
        });
      }
      Xr() {
        return zc(this, undefined, undefined, function* () {
          const t = yield this.qn.getVideoDataAsync();
          const e = this.qn.getStreamingServiceName();
          const n = (yield this.qn.getStateAsync()).playbackState === Ei.PLAYING;
          return {
            onPostComment: this.Hr,
            closeModal: this.ur,
            videoControlProps: {
              pauseVideo: this.qn.pause,
              playVideo: this.qn.play,
              isVideoPlaying: () => zc(this, undefined, undefined, function* () {
                return (yield this.qn.getStateAsync()).playbackState === Ei.PLAYING;
              }),
              shouldRender: true
            },
            curComment: this.zo,
            onCommentEdited: t => {
              this.zo = t;
            },
            closeChatbox: this.ar,
            getVidTime: () => zc(this, undefined, undefined, function* () {
              return (yield this.qn.getStateAsync()).playbackPositionMilliseconds;
            }),
            service: e.toString(),
            vidId: t.videoId,
            vidDuration: t.videoDuration,
            openHelpModal: this.Tr,
            shouldPlayVideoAfterClose: n,
            openChangeHandleModal: this.Mr,
            openSetHandleModal: this.Or
          };
        });
      }
      na() {
        this.ha = setInterval(() => {
          this.da();
          if (window.location.href != this.Qo) {
            this.Qo = window.location.href;
            this.hr();
          } else if (!this.dr()) {
            if (document.getElementById(this.FLOATING_CHAT_BUTTON_ROOT_ID) || document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID) || document.getElementById(this.ALLCHAT_OPTIONS_ROOT_ID) || document.getElementById(this.ALLCHAT_LIVECHAT_ROOT_ID)) {
              this.ir();
            }
          }
        }, 100);
      }
      da() {
        var t;
        const e = this.Jr();
        if (e !== this.Ko) {
          this.Ko = e;
          if (this.kr()) {
            if (e) {
              if ((t = this.sr) !== null && t !== undefined) {
                t.hideForParty();
              }
              this.cr();
            } else {
              this.injectAllChat().then(() => {
                if (this.sr?.isPanelOpen) {
                  this.Xo = Date.now();
                }
              });
            }
          } else if (e) {
            this.ra(false, false);
          } else {
            this.ra(localStorage.getItem("tpLiveChatShowing") === "true", false);
          }
        }
      }
      ra(t, e) {
        if (this.Ho !== t) {
          this.Ho = t;
          if (e) {
            localStorage.setItem("tpLiveChatShowing", this.Ho.toString());
          }
          Ka(this.qr(), this.ta());
          if (this.Ho) {
            this.Wr();
            this.Xo = Date.now();
          } else {
            this.rr();
            this.cr();
            this.ar();
          }
        }
      }
      pa() {
        if (this.Wo == "help") {
          this.Tr();
        } else if (this.Wo == "floatingHelp") {
          this.$r();
        } else if (this.Wo == "guidelines") {
          this.jr();
        } else if (this.Wo == "report" && this.Fr) {
          this.Cr(this.Fr);
        } else if (this.Wo == "changeHandle" && this.Lr) {
          this.Mr(this.Lr.onHandleChanged);
        } else if (this.Wo == "setHandle" && this.Ur) {
          this.Or(this.Ur.onHandleSet);
        } else if (this.Wo == "editProfilePicture" && this.Vr) {
          new Pu(this.Vr).open(this.br());
        }
      }
      injectAllChat() {
        return zc(this, undefined, undefined, function* () {
          yield this.Dr();
          const t = this.Qe.shouldMenuBeVisible();
          if (yield this.fa(t)) {
            if (!this.Go) {
              this.wr();
              this.Go = true;
            }
            if (this.kr()) {
              this.yr();
              this.rr();
              this.No = false;
              yield this.Da(t);
              yield this.ca().render();
              if (localStorage.getItem("allChatHelpModalSeen") !== "true") {
                this.$r();
                localStorage.setItem("allChatHelpModalSeen", "true");
              }
              this.pa();
              return;
            }
            yield this.Da(t);
            Ka(this.qr(), this.ta());
            if (this.Ho) {
              this.Wr();
            }
            if (this.No) {
              Iu(yield this.Xr(), this.ea());
            }
            if (localStorage.getItem("allChatHelpModalSeen") !== "true") {
              this.Tr();
              localStorage.setItem("allChatHelpModalSeen", "true");
            }
            this.pa();
            Ka(this.qr(), this.ta());
            if (this.Ho) {
              this.Wr();
            }
          } else if (!this.Jo) {
            this.Jo = true;
            S.m(new o(u, r, {
              name: "allchat_page_invalid",
              message: {
                text: `{"serviceName": "${this.serviceName}", "url": "${window.location.href}"}`
              }
            }));
          }
        });
      }
    }
    function Qc(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    const Wc = {
      [ki.NETFLIX.toString()]: class extends Zc {
        constructor() {
          super(...arguments);
          this.va = false;
          this.Da = t => Qc(this, undefined, undefined, function* () {
            if (this.kr()) {
              const e = document.querySelector(".watch-video") || document.querySelector("[data-uia=player]");
              const n = document.body;
              if (!document.getElementById(this.FLOATING_CHAT_BUTTON_ROOT_ID)) {
                Oa(this.FLOATING_CHAT_BUTTON_ROOT_ID, n, "", false);
              }
              if (!document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID)) {
                Oa(this.FLOATING_CHAT_PANEL_ROOT_ID, n, "", false);
              }
              if (!document.getElementById(this.ALLCHAT_MODAL_ROOT_ID)) {
                Oa(this.ALLCHAT_MODAL_ROOT_ID, e, "", false);
              }
              this.va = t;
              return;
            }
            const e = document.querySelector(".watch-video") || document.querySelector("[data-uia=player]");
            Oa(this.ALLCHAT_MODAL_ROOT_ID, e);
            if (t) {
              this.va = true;
              yield gi(20)();
              const t = document.querySelector(".watch-video--flag-container");
              const e = document.querySelector(".watch-video--bottom-controls-container");
              if (e) {
                if (this.No) {
                  e.style.display = "none";
                }
                Oa(this.ALLCHAT_CHATBOX_ROOT_ID, e.parentElement, "display: flex");
              }
              Oa(this.ALLCHAT_OPTIONS_ROOT_ID, t);
              const n = document.querySelector(".watch-video--back-container");
              if (n) {
                n.setAttribute("style", n.getAttribute("style") + " flex-direction: column;");
                Oa(this.ALLCHAT_LIVECHAT_ROOT_ID, n);
              }
            } else {
              this.va = false;
              const t = document.querySelector("[data-uia=player]");
              Oa(this.ALLCHAT_LIVECHAT_ROOT_ID, t, "padding: 20px;");
              Oa(this.ALLCHAT_CHATBOX_ROOT_ID, t, "position: fixed; bottom: 0; left: 0; width: 100%");
            }
          });
          this.ga = t => {
            const e = t.getBoundingClientRect();
            return {
              x: Math.random() * e.width + e.left,
              y: Math.random() * e.height + e.top
            };
          };
          this.ma = t => {
            const {
              x: e,
              y: n
            } = this.ga(t);
            const i = new PointerEvent("pointermove", {
              bubbles: true,
              cancelable: true,
              clientX: e,
              clientY: n,
              pointerType: "mouse",
              view: window
            });
            t.dispatchEvent(i);
          };
        }
        dr() {
          return Di(new URL(window.location.href));
        }
        fa(t) {
          return Qc(this, undefined, undefined, function* () {
            if (!this.dr()) {
              return false;
            }
            if (this.kr()) {
              const e = ["[data-uia=player]"];
              if (t) {
                e.push(".watch-video");
              }
              return e.every(t => document.querySelector(t) !== null);
            }
            return (t ? ["[data-uia=player]", ".watch-video--flag-container", ".watch-video--bottom-controls-container", ".watch-video--back-container", ".watch-video"] : ["[data-uia=player]"]).every(t => document.querySelector(t) !== null);
          });
        }
        wa(t) {
          const e = document.querySelector(".watch-video--bottom-controls-container");
          if (e) {
            e.style.display = t;
          }
        }
        Kr() {
          this.wa("none");
          super.Kr();
        }
        ar() {
          this.wa("block");
          super.ar();
        }
        Pr() {
          this.wa("block");
          super.Pr();
        }
        Xr() {
          const t = Object.create(null, {
            Xr: {
              get: () => super.Xr
            }
          });
          return Qc(this, undefined, undefined, function* () {
            const e = yield t.Xr.call(this);
            const n = document.querySelector("video");
            if (n) {
              e.videoControlProps.pauseVideo = () => Qc(this, undefined, undefined, function* () {
                n.pause();
              });
              e.videoControlProps.playVideo = () => Qc(this, undefined, undefined, function* () {
                n.play();
              });
            }
            return e;
          });
        }
        qr() {
          return Object.assign(Object.assign({}, super.qr()), {
            containerStyling: "margin-left: 8px; top: 5px;"
          });
        }
        ya() {
          if (this.kr()) {
            return this.Wo != null || this.ia();
          } else {
            return this.Wo != null || this.No;
          }
        }
        na() {
          super.na();
          this.ba = setInterval(() => {
            if (!this.ya()) {
              return;
            }
            if (this.kr() && this.ia() || this.va) {
              const t = document.querySelector("[data-uia=player]");
              if (t) {
                this.ma(t);
              }
            }
          }, 500);
        }
      }
    };
    const Yc = new Set(["account", "browse", "continue", "episodes", "home", "login", "menu", "more", "movies", "my list", "next", "pause", "play", "profile", "search", "settings", "share", "sign in", "sign up", "skip intro", "watch now"]);
    function Jc(t) {
      if (t) {
        return t.replace(/\s+/g, " ").replace(/\s+[-|:]\s+teleparty$/i, "").trim();
      } else {
        return "";
      }
    }
    function Kc(t) {
      const e = Jc(t);
      if (e.length < 2 || e.length > 160) {
        return false;
      }
      const n = e.toLowerCase();
      if (Yc.has(n)) {
        return false;
      }
      if (/^(sign|log)\s?in$/i.test(e) || /^episode\s+\d+$/i.test(e)) {
        return false;
      }
      const i = e.split(" ");
      const s = e.replace(/[^a-z0-9]/gi, "");
      return i.length <= 18 && s.length >= 2;
    }
    function Xc(t, e, n, i) {
      if (e) {
        return `${t ?? ""}|${e}`;
      }
      let s = i;
      try {
        const t = new URL(i);
        s = `${t.origin}${t.pathname}`;
      } catch (t) {}
      return `${t ?? ""}|${o = n, Jc(o).toLowerCase()}|${s}`;
      var o;
    }
    function qc(t, e, n) {
      var s;
      const r = t.content ?? {};
      const a = (e == null ? undefined : e.title) || Jc(n.fallbackTitle) || Jc(r.name);
      const u = {
        id: r.id || t.videoId || "",
        url: r.url || n.fallbackUrl,
        name: a.toLowerCase(),
        service: t.service || r.service || "",
        type: r.type || t.type || t.videoType || "",
        episode_name: ((s = r.episode_name) === null || s === undefined ? undefined : s.toLowerCase()) ?? ""
      };
      const c = tl(r.season);
      if (c !== undefined) {
        u.season = c;
      }
      const l = tl(r.episode);
      if (l !== undefined) {
        u.episode = l;
      }
      return u;
    }
    function tl(t) {
      if (t !== undefined && Number.isInteger(t) && t > 0) {
        return t;
      }
    }
    function el(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class nl {
      constructor(t, e, n, i, s = false, o = "") {
        this.Ca = [];
        this.Fa = false;
        this._a = new Set();
        this.Ea = (t, e) => {
          try {
            this.xa.push({
              level: t,
              message: e.map(t => {
                try {
                  if (typeof t == "object") {
                    return JSON.stringify(t);
                  } else {
                    return String(t);
                  }
                } catch (e) {
                  return String(t);
                }
              }).join(" ")
            });
          } catch (t) {}
        };
        this._t = t;
        this.qn = e;
        this.Ki = n;
        this.Qe = i;
        if (window.teleparty && !window.teleparty.pageControls) {
          window.teleparty.pageControls = i;
          console.log("Setting Page COntrols");
        } else {
          i.setChatApi(this._t);
          console.log("Resetting Chat Api for old controls");
        }
        this.ka = new ia(this._t, this.qn, this.Qe);
        this.Pn = this.createVideoMessageForwarder(this.qn, this._t, this.Ki);
        this.Aa = false;
        this.Ia = false;
        this.qe = false;
        this.ni = new vo();
        this.ni.addMessageListener(this.Pn);
        this.ni.addMessageListener(this.ka);
        this.ni.addMessageListener(this);
        this.Sa = false;
        this.serviceName = o;
        this.xa = [];
        if (s) {
          this.Ba = function (t, e, n, i, s) {
            if (t) {
              return new Wc[t](e, n, i, t, s);
            } else {
              return undefined;
            }
          }(this.serviceName, this.Qe, this.qn, this._t, () => this.Pn.isInParty() || this._t.inSession);
        }
        this.ja();
        this.$a();
        this.Ta();
        this.Pa();
      }
      createVideoMessageForwarder(t, e, n) {
        return new _a(t, e, n, this);
      }
      Pa() {
        let n = 0;
        const i = window.teleparty?.tabId ?? 0;
        const s = () => el(this, undefined, undefined, function* () {
          if (!this.Pn.isInParty() && !this._t.inSession && !this.Ia && !(n >= 5)) {
            n++;
            try {
              S.m(new Da(u, r, {
                tabId: i,
                persist: true
              }));
              const t = yield this.Ma();
              yield S.m(t);
            } catch (t) {
              A("Session restore retry skipped until video metadata is ready", t);
            }
            if (!this.Pn.isInParty() && !this._t.inSession && n < 5) {
              setTimeout(s, 3000);
            }
          }
        });
        setTimeout(s, 2000);
      }
      Ta() {
        this.Ca = [];
        document.addEventListener("click", t => {
          if (t.target) {
            this.La = {
              interactionType: "click",
              element: t.target
            };
          }
        });
        document.addEventListener("keydown", t => {
          this.La = {
            interactionType: "keydown",
            keyPressed: t.key
          };
        });
      }
      logInteraction(t, e = false) {
        if (e) {
          this.Ca.push({
            interactionType: "websocketMessageReceived",
            videoAction: t
          });
        } else if (this.La) {
          this.Ca.push(Object.assign(Object.assign({}, this.La), {
            videoAction: t
          }));
          this.La = undefined;
        }
      }
      $a() {
        const t = console.log.bind(console);
        const e = console.warn.bind(console);
        const n = console.error.bind(console);
        console.log = (...e) => {
          this.Ea("log", e);
          t(...e);
        };
        console.warn = (...t) => {
          this.Ea("warn", t);
          e(...t);
        };
        console.error = (...t) => {
          this.Ea("error", t);
          n(...t);
        };
      }
      Ra() {
        return el(this, undefined, undefined, function* () {
          yield this.Qe.addTpIcon();
          this.Qe.startEventListener();
        });
      }
      loadBrowseButton() {
        return el(this, undefined, undefined, function* () {
          yield this.Qe.addTpIcon();
          this.Qe.startEventListener();
        });
      }
      ja() {
        const t = chrome.runtime.connect({
          name: "content-script-health"
        });
        t.onDisconnect.addListener(() => {
          if (this.Pn.isInParty()) {
            console.log("Lost background script. Teardown");
            const t = {
              showAlert: this._t.inSession,
              alertModal: Vs
            };
            this.Oa(t);
          }
        });
        t.onMessage.addListener(() => {
          A("Got background script");
          this.Sa = true;
        });
        const e = () => {
          console.log("Requesting ping");
          t.postMessage({
            type: "ping"
          });
        };
        const n = setInterval(() => {
          if (this.Sa) {
            clearInterval(n);
          } else {
            e();
          }
        }, 3000);
        e();
      }
      onMessage(t, e, n) {
        if (t.target == u) {
          if (t.type === to.IS_CONTENT_SCRIPT_READY) {
            if (this.Aa) {
              this.Ua();
              n({
                ready: true
              });
            } else {
              this.Ia = true;
              this.Va().then(n);
            }
            return true;
          }
          if (t.type === to.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE) {
            this.qn.getCustomStartPartyButtonMessage().then(t => n(t));
            return true;
          }
          if (t.type === to.IS_VIDEO_READY) {
            console.log("Checking if video is ready", !!this.qn.getVideoElement());
            n({
              hasVideo: !!this.qn.getVideoElement()
            });
            return true;
          }
          if (t.type === to.GET_INIT_DATA) {
            const t = this.Ha();
            n(t);
            return true;
          }
          if (t.type === to.DISCONNECT && t.sender == a) {
            const t = new Ji(u, r, zs);
            S.m(t);
            n();
          } else {
            if (t.type == i.TEARDOWN) {
              const e = t;
              this.Oa(e.data);
              n();
              return true;
            }
            if (t.type === i.ON_NOTIF) {
              this.Na();
            } else if (t.type === i.GET_ALLCHAT_HAS_FOCUS) {
              n(localStorage.getItem("allchat-has-focus") === "true");
            } else if (t.type === i.GET_VALIDATIONS_FAILURE_INFO) {
              let e;
              if (t.includeDiagnostics) {
                e = _i(document.documentElement.outerHTML);
              }
              const i = _i(JSON.stringify(this.xa));
              const s = this.Ca.map(t => {
                let e;
                if (t.interactionType === "click" && t.element instanceof HTMLElement) {
                  e = t.element.cloneNode(false).outerHTML;
                }
                return {
                  interactionType: t.interactionType,
                  videoAction: t.videoAction,
                  keyPressed: t.keyPressed,
                  elementHtml: e
                };
              });
              const o = _i(JSON.stringify(s));
              const r = _i(JSON.stringify(this._t.getMessages(true)));
              n({
                html_gzip_base64: e,
                service_worker_console_dump_gzip_base64: i,
                system_chat_msgs_gzip_base64: r,
                interaction_mappings_gzip_base64: o
              });
              return true;
            }
          }
        }
        return false;
      }
      Ua() {
        if (this._t.usesChatMountPolling() && this._t.inSession && !this._t.isPartyWindowsActive() && !this._t.isChatInjected()) {
          this._t.scheduleChatInjectRetryIfNeeded();
          this._t.reloadChat();
        }
      }
      Na() {
        console.log("Show Notification");
      }
      Oa(t) {
        if (t.showAlert && t.alertModal) {
          const n = t.buttonUrl ?? this._t.getPartyUrl();
          Hs(t.alertModal, n);
        }
        this.Qe.teardown();
        this.Pn.teardown();
        this.ka.teardown();
        this.Ki.stopListening();
        this.Qe.startEventListener();
        const s = {
          name: "error",
          action: {
            description: t.alertModal?.title,
            reason: t.alertModal?.content
          }
        };
        const a = new o(u, r, s);
        S.m(a);
      }
      dn(t) {
        if (t === "Please open a video on Amazon Prime Video then click on the Tp icon") {
          return;
        }
        const e = new o(u, r, {
          name: "error",
          action: {
            reason: t
          }
        });
        S.m(e);
      }
      Ga() {
        return el(this, undefined, undefined, function* () {
          return mi(() => this.Sa, 5000)();
        });
      }
      Va() {
        return el(this, undefined, undefined, function* () {
          try {
            yield this.Ga();
            const t = yield this.za();
            this.Ra();
            return t;
          } catch (t) {
            const e = {
              message: Ti,
              showButton: false
            };
            this.dn(Ti);
            return {
              ready: false,
              error: e
            };
          } finally {
            this.Ia = false;
          }
        });
      }
      za() {
        return el(this, undefined, undefined, function* () {
          let t;
          try {
            yield this.qn.waitVideoApiReadyAsync();
            const e = yield this.Za();
            if (e && e.error) {
              A("Error is:", e.error);
              t = {
                message: e.error,
                showButton: true
              };
              this.Aa = true;
              if (window.teleparty) {
                window.teleparty.contentScriptReady = true;
              }
            } else {
              if (e && e.showReviewMessage) {
                this.qe = true;
              }
              this.Aa = true;
              if (window.teleparty) {
                window.teleparty.contentScriptReady = true;
              }
            }
            if (this.Ba) {
              this.Ba.injectAllChat();
            }
            if (this.Aa) {
              this.Qa();
            }
          } catch (e) {
            t = {
              message: e.message,
              showButton: false
            };
            this.dn(e.message);
            this.Ki.logListenerElementsDetected();
          }
          return {
            ready: this.Aa,
            error: t
          };
        });
      }
      Ha() {
        return {
          reactionsDisabled: this._t.sessionReactionsDisabled,
          userReactionsDisabled: this._t.userReactionsDisabled,
          inSession: this._t.inSession,
          isChatVisible: this._t.isPartyWindowsActive() ? this._t.getChatWindowVisible() : this._t.getChatVisible(),
          partyUrl: this._t.getPartyUrl(),
          showReviewMessage: false,
          partyWindowsActive: this._t.isPartyWindowsActive(),
          sessionId: this._t.getSessionId()
        };
      }
      Qa() {
        if (!this.Fa && !window.teleparty?.contentDetectedLoggerStarted) {
          this.Fa = true;
          if (window.teleparty) {
            window.teleparty.contentDetectedLoggerStarted = true;
          }
          this.Wa();
          this.Ya = setInterval(() => {
            this.Wa();
          }, 15000);
        }
      }
      Wa() {
        return el(this, undefined, undefined, function* () {
          if (!this.Pn.isInParty()) {
            try {
              const n = yield this.qn.getVideoDataAsync();
              const i = function (t) {
                const n = [t == null ? undefined : t.originalTitle, t == null ? undefined : t.videoTitle, (t == null ? undefined : t.content)?.name].map(Jc).find(Kc);
                if (n) {
                  return {
                    title: n
                  };
                } else {
                  return undefined;
                }
              }(n);
              if (!i) {
                return;
              }
              const a = n.service || n.content?.service || this.qn.getInternalStreamingServiceName();
              const c = Xc(a, n.videoId || n.content?.id, i.title, window.location.href);
              if (this._a.has(c)) {
                return;
              }
              if (this.Pn.isInParty()) {
                return;
              }
              this._a.add(c);
              const l = {
                name: "content_detected",
                page: {
                  type: "watch",
                  name: i.title,
                  url: window.location.href,
                  referrer: document.referrer || ""
                },
                content: qc(n, i, {
                  fallbackUrl: window.location.href
                }),
                action: {
                  source: "content_detector",
                  description: "content title detected"
                }
              };
              const h = new o(u, r, l, s.METIS);
              yield S.m(h, 2500);
            } catch (t) {
              A("Content detected: VideoData unavailable", t);
            }
          }
        });
      }
      Za() {
        return el(this, undefined, undefined, function* () {
          const t = yield this.Ma();
          return S.m(t);
        });
      }
      Ma() {
        return el(this, undefined, undefined, function* () {
          const t = {
            videoId: (yield this.qn.getVideoDataAsync()).videoId
          };
          return new Do(u, r, t);
        });
      }
    }
    class il {
      constructor(t, e) {
        this.isBrowsing = false;
        this.needsCSPBlock = false;
        this.id = e;
        this.videoId;
        this.url = t;
        const n = [yo];
        for (const e of Xr) {
          if (e.isValidUrl(this.url)) {
            this.streamingService = e;
            this.serviceName = e.name;
            this.videoId = e.getVideoId(t);
            if (n.includes(e)) {
              this.needsCSPBlock = true;
            }
            break;
          }
          if (e.isBrowsing(this.url)) {
            this.isBrowsing = true;
            this.streamingService = e;
            this.serviceName = e.name;
            if (n.includes(e)) {
              this.needsCSPBlock = true;
            }
            break;
          }
        }
      }
      urlWithSessionId(t) {
        if (this.streamingService) {
          return this.streamingService.urlWithSessionId(t);
        } else {
          return undefined;
        }
      }
    }
    class sl extends no {
      constructor(t, e, n) {
        super(t, e, to.CREATE_SESSION);
        this.data = n;
      }
    }
    function ol(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    function rl(t, n, s) {
      return ol(this, undefined, undefined, function* () {
        const o = yield S.m(new e(a, r, i.GET_TAB_ID));
        const u = new il(new URL(window.location.href), o);
        const c = new sl(a, r, {
          createSettings: {
            controlLock: t,
            reactionsDisabled: s
          },
          streamingService: u.streamingService,
          tabId: u.id,
          isNative: n
        });
        return S.m(c);
      });
    }
    class al extends e {
      constructor(t, e, n) {
        super(t, e, i.SET_DATA);
        this.data = n;
      }
    }
    class ul extends no {
      constructor(t, e, n) {
        super(t, e, to.RE_INJECT);
        this.data = n;
      }
    }
    function cl(t) {
      const e = {};
      for (const n of t) {
        e[n.name] = n.isPresent();
      }
      return {
        success: Object.values(e).every(Boolean),
        elements: e
      };
    }
    function ll(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class hl {
      constructor(t) {
        var e;
        this.Ja = 0;
        this.Ka = this.Xa.bind(this);
        this.qa = this.tu.bind(this);
        this.qn = t;
        console.log("Video Event Listener");
        this.Ka();
        if ((e = window.teleparty) !== null && e !== undefined) {
          e.injectScriptLoaded;
        }
      }
      getCurrentStatus() {
        return ll(this, undefined, undefined, function* () {
          return "";
        });
      }
      getStatusMetaData() {
        return ll(this, undefined, undefined, function* () {});
      }
      reloadNextEpisode() {
        var t;
        return ll(this, undefined, undefined, function* () {
          yield (t = this.Pn) === null || t === undefined ? undefined : t.reloadNextEpisode();
        });
      }
      persistForReload(t) {
        var e;
        return ll(this, undefined, undefined, function* () {
          yield (e = this.Pn) === null || e === undefined ? undefined : e.persistExtension(true, t);
        });
      }
      isOthersWatchingAds() {
        var t;
        var e;
        return (e = (t = this.Pn) === null || t === undefined ? undefined : t.getOthersWatchingAds()) !== null && e !== undefined && e;
      }
      getListenerElementChecks() {
        return [(t = () => this.qn.getVideoElement(), {
          name: "video",
          isPresent: () => t() !== null
        })];
        var t;
      }
      validateListenersPresent() {
        return cl(this.getListenerElementChecks()).success;
      }
      getListenerElementsStatus() {
        return cl(this.getListenerElementChecks()).elements;
      }
      startListening() {
        this.logListenerElementsDetected();
        this.eu();
        window.addEventListener(hl.ACTIVATION_CONTINUE_EVENT, this.qa, false);
      }
      logListenerElementsDetected() {
        return ll(this, undefined, undefined, function* () {
          try {
            yield mi(() => this.validateListenersPresent(), 10000)();
          } catch (t) {}
          const {
            success: e,
            elements: n
          } = cl(this.getListenerElementChecks());
          const i = ta(this.qn.getStreamingServiceName())?.serverName;
          if (!i) {
            return;
          }
          let s;
          try {
            s = yield this.qn.getVideoDataAsync();
          } catch (t) {}
          S.m(new ro(u, r, {
            event_name: "listener_elements_detected",
            service: i,
            video_data: s,
            success: e,
            extra_info: {
              listener_elements: n
            }
          }, eo.PARTY));
        });
      }
      stopListening() {
        this.Ja++;
        this.nu();
        window.removeEventListener(hl.ACTIVATION_CONTINUE_EVENT, this.qa, false);
      }
      stopPartyStartPolling() {
        if (this.iu) {
          clearInterval(this.iu);
          this.iu = undefined;
        }
        if (this.su) {
          clearInterval(this.su);
          this.su = undefined;
        }
      }
      eu() {
        const t = navigator;
        t.mediaSession.setActionHandler("play", () => ll(this, undefined, undefined, function* () {
          this.ou();
          this.qn.play();
          console.log("Bluetooth device played the video");
        }));
        t.mediaSession.setActionHandler("pause", () => ll(this, undefined, undefined, function* () {
          this.ou();
          this.qn.pause();
          console.log("Bluetooth device paused the video");
        }));
      }
      ru() {
        return 600;
      }
      au() {
        return 2000;
      }
      Xa() {
        this.uu();
        this.iu = setInterval(this.uu.bind(this), this.au());
        this.su = setInterval(this.cu.bind(this), 2000);
      }
      lu(t) {
        return !!window.location.href.includes("netflix.com/watch/") && !!t.includes("netflix.com/watch/");
      }
      cu() {
        return ll(this, undefined, undefined, function* () {
          const t = yield S.m(new oo(u, r, {
            key: "startParty"
          }));
          if (t == null ? undefined : t.result) {
            if (!this.lu(t.result)) {
              return;
            }
            const e = yield rl(false, true, false);
            if (e && !e.error) {
              S.m(new al(u, r, {
                key: "startParty",
                value: null
              }));
              const t = {
                name: "user_click",
                component: {
                  name: `${this.qn.getStreamingServiceName().toLowerCase()}_redirect_start_party`,
                  type: "button",
                  origin: "tp"
                }
              };
              const e = new o(u, r, t);
              S.m(e);
            }
          }
        });
      }
      uu() {
        return ll(this, undefined, undefined, function* () {
          const t = JSON.parse(localStorage.getItem("nativeParty") || "{}");
          if (t.shouldStart && t.expiry > Date.now() && t.randomId !== this.hu) {
            yield gi(this.ru())();
            yield this.qn.waitBeforeNativePartyStartAsync();
            const n = yield rl(false, true, false);
            if (n && !n.error) {
              localStorage.removeItem("nativeParty");
              this.hu = t.randomId;
              const e = {
                name: "user_click",
                component: {
                  name: `${this.qn.getInternalStreamingServiceName()}_native_start_party`,
                  type: "button",
                  origin: "tp"
                }
              };
              const n = new o(u, r, e);
              S.m(n);
            } else if ((n == null ? undefined : n.error) === Ti) {
              const t = yield S.m(new e(a, r, i.GET_TAB_ID));
              const n = new il(new URL(window.location.href), t);
              const s = new ul(c, r, {
                extensionTabData: n
              });
              try {
                yield S.m(s);
              } catch (t) {
                console.error("Error re-injecting content scripts", t);
              }
            }
          }
        });
      }
      nu() {
        const t = navigator;
        t.mediaSession.setActionHandler("play", null);
        t.mediaSession.setActionHandler("pause", null);
      }
      du() {
        var t;
        if ((t = this.Pn) !== null && t !== undefined) {
          t.tryBroadcast(false);
        }
      }
      pu(t, e) {
        const n = ++this.Ja;
        es.pushTask(() => ll(this, undefined, undefined, function* () {
          if (n === this.Ja) {
            if (e) {
              this.ou(undefined, e);
            } else {
              this.du();
            }
            if (t) {
              es.pushTask(() => ll(this, undefined, undefined, function* () {
                if (n === this.Ja) {
                  t();
                }
              }), "localControlBroadcastComplete");
            }
          }
        }), "localControlBroadcast");
      }
      ou(t, e) {
        var n;
        if ((n = this.Pn) !== null && n !== undefined) {
          n.tryBroadcast(true, e);
        }
      }
      fu() {
        var t;
        if ((t = this.Pn) !== null && t !== undefined) {
          t.setBuffering(true);
        }
      }
      Du(t) {
        var e;
        if ((e = this.Pn) !== null && e !== undefined) {
          e.setWatchingAds(true, t);
        }
      }
      vu() {
        var t;
        var e;
        if ((t = this.Pn) !== null && t !== undefined) {
          t.setWatchingAds(false);
        }
        if ((e = this.Pn) !== null && e !== undefined) {
          e.forceSync();
        }
      }
      gu() {
        var t;
        if ((t = this.Pn) !== null && t !== undefined) {
          t.setBuffering(false);
        }
      }
      tu(t) {
        var e;
        const n = t.detail;
        const i = this.qn.getStreamingServiceName();
        const s = document.documentElement.getAttribute(hl.ACTIVATION_PENDING_ATTR);
        const o = document.documentElement.getAttribute(hl.ACTIVATION_PENDING_SERVICE_ATTR);
        const r = document.documentElement.getAttribute(hl.ACTIVATION_HELPER_SERVICE_ATTR);
        const a = document.documentElement.getAttribute(hl.ACTIVATION_EXPECTED_SERVICE_ATTR);
        const u = document.documentElement.getAttribute(hl.ACTIVATION_EXPECTED_STATE_ATTR);
        if (s === "true" && o === i && r === i && (n == null ? undefined : n.serviceName) === i && a === i && u === "playing") {
          if ((e = this.Pn) !== null && e !== undefined) {
            e.syncToCurrentPartyTimeAfterActivation();
          }
        }
      }
      mu(t, e) {
        var n;
        if ((n = this.Pn) !== null && n !== undefined) {
          n.sendOtherEpisodeAsync(t, e);
        }
      }
      wu(t, e) {
        var n;
        if ((n = this.Pn) !== null && n !== undefined) {
          n.sendNextEpisodeAsync(t, e);
        }
      }
      yu(t) {
        var e;
        if ((e = this.Pn) !== null && e !== undefined) {
          e.sendTeardown(t);
        }
      }
      setMessageForwarder(t) {
        this.Pn = t;
      }
      shouldSync() {
        if (document.documentElement.getAttribute(hl.ACTIVATION_PENDING_ATTR) !== "true") {
          return true;
        }
        const t = this.qn.getStreamingServiceName();
        return document.documentElement.getAttribute(hl.ACTIVATION_PENDING_SERVICE_ATTR) !== t || document.documentElement.getAttribute(hl.ACTIVATION_HELPER_SERVICE_ATTR) !== t || document.documentElement.getAttribute(hl.ACTIVATION_EXPECTED_SERVICE_ATTR) !== t || document.documentElement.getAttribute(hl.ACTIVATION_EXPECTED_STATE_ATTR) !== "playing";
      }
      shouldRegisterPartyTimelineSeekListeners() {
        return this.Pn == null || !this.Pn.isScheduledPartyPlaybackOnly();
      }
    }
    hl.ACTIVATION_CONTINUE_EVENT = "TPActivationContinue";
    hl.ACTIVATION_PENDING_ATTR = "data-tp-activation-pending";
    hl.ACTIVATION_PENDING_SERVICE_ATTR = "data-tp-activation-service";
    hl.ACTIVATION_HELPER_SERVICE_ATTR = "data-tp-activation-helper-service";
    hl.ACTIVATION_EXPECTED_STATE_ATTR = "data-tp-activation-expected-state";
    hl.ACTIVATION_EXPECTED_SERVICE_ATTR = "data-tp-activation-expected-service";
    function dl(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class pl extends hl {
      constructor(t, e) {
        super(t);
        this.bu = this.Cu.bind(this);
        this.Fu = this._u.bind(this);
        this.qn = t;
        this._t = e;
        if (!window.teleparty?.replaceScriptLoaded) {
          A("injecting replace script");
          bi(chrome.runtime.getURL("lib/replace_state_script.js"));
        }
        if (!window.teleparty?.injectScriptLoaded) {
          bi(chrome.runtime.getURL("content_scripts/netflix/netflix_injected_bundled.js"));
        }
        this.qn.waitVideoApiReadyAsync().then(() => {
          var t;
          if ((t = this.Pn) !== null && t !== undefined) {
            t.forceSync();
          }
        });
        this.Eu = this.qn.onNode.bind(this.qn);
        window.addEventListener("FromNode", this.Eu, false);
        this.qn.skipIdle();
      }
      getStatusMetaData() {
        return dl(this, undefined, undefined, function* () {
          if (window.location.href.includes("/watch/")) {
            yield this.qn.waitUpdateAPIState();
            const t = this.qn.playerMetaData;
            if (t && t.synopsis && t.boxart && t.boxart.length > 0 && t.boxart[0].url) {
              return {
                image_url: t.boxart[0].url,
                description: t.synopsis
              };
            }
          }
        });
      }
      getCurrentStatus() {
        return dl(this, undefined, undefined, function* () {
          if (window.location.href.includes("/watch/")) {
            yield this.qn.waitUpdateAPIState();
            const t = this.qn.playerMetaData;
            if (t) {
              return `${t.title}`;
            }
          }
          return "Browsing";
        });
      }
      xu() {
        var t;
        if (this.qn.getPlaybackState() == Ei.IDLE) {
          A("Detected video idle. Removing.");
          this.qn.skipIdle();
          if (!es.hasTaskInQueue("removeIdle")) {
            es.pushTask(this.ku.bind(this), "removeIdle");
            if ((t = this.Pn) !== null && t !== undefined) {
              t.forceSync();
            }
          }
        }
        const e = this.Au();
        if (e && e !== this.Iu) {
          this.reloadListeners();
        }
      }
      ku() {
        return dl(this, undefined, undefined, function* () {
          try {
            yield gi(1000)();
            yield this.loadNewVideoAsync(this.Pn?.videoId ?? "");
            this.reloadListeners();
            this._t.reloadChat();
            A("Detected idle removed: succeeded");
          } catch (t) {
            this.yu(Qs);
          }
        });
      }
      reloadListeners() {
        this.stopListening();
        this.startListening();
      }
      getListenerElementChecks() {
        return [(t = "player", e = [".watch-video", ".watch-video--player-view", "video"], {
          name: t,
          isPresent: () => e.some(t => document.querySelector(t) !== null)
        })];
        var t;
        var e;
      }
      Cu() {
        return dl(this, undefined, undefined, function* () {
          if (es.tasksInFlight < 5 && !es.hasTaskInQueue("NETFLIX_WAIT_FOR_CHANGE")) {
            this.ou();
          }
        });
      }
      Su(t, e) {
        return (e.paused !== t.paused || Math.abs(e.time - t.time) > 2500) && (console.log("Change"), console.log(e), true);
      }
      waitForVideoChange(t, e) {
        return dl(this, undefined, undefined, function* () {
          const i = t ?? (yield this.qn.getPlayerState());
          const s = e ?? this.qn.getHTMLCurrentTime() ?? 0;
          console.log("Old State: " + s);
          console.log(t);
          const o = performance.now();
          return new Promise((t, e) => {
            console.log("New States ------");
            const n = () => dl(this, undefined, undefined, function* () {
              const r = yield this.qn.getPlayerState();
              if (performance.now() - o >= 2500) {
                console.log("Fail");
                e(new Error("Wait for Video Change failed"));
              } else if (this.Bu && this.Su(this.Bu, i)) {
                console.log("Detected Timer State Change");
                t();
              } else if (this.Su(i, r)) {
                t();
              } else if (Math.abs(r.time - s) > 2500) {
                console.log("Change HTML");
                console.log(r);
                t();
              } else {
                setTimeout(() => {
                  n();
                }, 50);
              }
            });
            n();
          });
        });
      }
      startListening() {
        super.startListening();
        this.qn.setInSession(true);
        window.postMessage({
          type: "FIX_POST_PLAY"
        }, "*");
        this.ju = setInterval(this.xu.bind(this), 10000);
        const t = () => dl(this, undefined, undefined, function* () {
          var r;
          try {
            const t = this.Bu;
            this.Bu = yield this.qn.getPlayerState();
            if ((t == null ? undefined : t.actionsState)?.nextEpisodeReady !== this.Bu?.actionsState?.nextEpisodeReady) {
              console.log("Update next episode ready state");
              this._t.onNextEpisodeAvailable(!!this.Bu?.actionsState?.nextEpisodeReady);
            }
            if (((r = this.Pn) === null || r === undefined ? undefined : r.isWatchingAds()) !== this.Bu.adState.watchingAds || t === undefined) {
              console.log("Update Messsenger watching ads");
              if (this.Bu.adState.watchingAds) {
                this.Du();
              } else {
                this.vu();
              }
            }
            if (t) {
              const e = Math.abs(t.time - this.Bu.time);
              if (t.paused != this.Bu.paused || e > 2500) {
                this.ou();
              }
            }
            if (this.Bu.loading != (t == null ? undefined : t.loading)) {
              if (this.Bu.loading) {
                this.fu();
              } else {
                this.gu();
              }
            }
          } catch (t) {}
          this.$u = setTimeout(t, 250);
        });
        t();
        const e = this.Au();
        this.Iu = e;
        window.addEventListener("mouseup", this.bu);
        window.addEventListener("keyup", this.bu);
        window.addEventListener("message", this.Fu, false);
      }
      Au() {
        const t = jQuery("video");
        if (t && t.length) {
          return t[0];
        } else {
          return undefined;
        }
      }
      stopListening() {
        super.stopListening();
        if (this.ju) {
          clearInterval(this.ju);
        }
        console.log("Netflix stop listening");
        if (this.$u) {
          clearTimeout(this.$u);
        }
        window.removeEventListener("mouseup", this.bu);
        window.removeEventListener("keyup", this.bu);
        window.removeEventListener("message", this.Fu, false);
        this.qn.setInSession(false);
      }
      loadNewVideoAsync(t) {
        return dl(this, undefined, undefined, function* () {
          const e = performance.now();
          yield new Promise((n, i) => {
            const s = setInterval(() => {
              if (ji.getVideoId(new URL(window.location.href)) === t) {
                const e = document.querySelector("video");
                if (e instanceof Element && e.parentElement && e.parentElement.id == t) {
                  A("Loaded new netflix video");
                  clearInterval(s);
                  this._t.reloadChat();
                  n();
                  return;
                }
              }
              if (performance.now() - e >= 20000) {
                i(new Error("Could not load new video in time."));
                clearInterval(s);
              }
            }, 100);
          });
          yield this.qn.waitVideoDoneLoadingAsync();
        });
      }
      _u(t) {
        if (t.source == window) {
          if (t.data.type !== "FROM_PAGE_POP") {
            if (t.data.type && t.data.type == "FROM_PAGE") {
              if (window.location.href.match(/^.*\/(watch)\/.*/)) {
                const t = ji.getVideoId(new URL(window.location.href));
                if (!t) {
                  A("No video found. Tearing down");
                  this.yu(zs);
                  return;
                }
                if (t !== this.Pn?.videoId) {
                  this.mu(t);
                }
              } else {
                this.yu(zs);
              }
            }
          } else {
            this.yu(zs);
          }
        }
      }
    }
    var fl = n(7076);
    var Dl = n.n(fl);
    function vl(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class gl {
      constructor(t, e) {
        this.Tu = false;
        this.Pu = false;
        this.Mu = false;
        this.Li = false;
        this.Lu = 0;
        this.Ru = false;
        this.Ou = false;
        this.Uu = false;
        this.Vu = false;
        this.checkShowMenu = () => {
          const t = this.shouldMenuBeVisible();
          if (t != this.Vu) {
            this.Vu = t;
            this.Hu.forEach(e => e(t));
          }
          if (t && !this.Nu.getChatVisible()) {
            this.Gu();
          } else {
            this.zu();
          }
        };
        console.log("Teleparty Browse Loaded " + window.teleparty?.tabId);
        this.Zu = new il(new URL(window.location.href), window.teleparty?.tabId ?? 0);
        this.Nu = t;
        this.Nu.setPageControls(this);
        this.Hu = [];
        this.Ct = Ys(e || "");
      }
      setChatApi(t) {
        this.Nu = t;
        this.Nu.setPageControls(this);
      }
      registerMenuStateChangeCallback(t) {
        this.Hu.push(t);
      }
      getReactionsDisabled() {
        return this.Li;
      }
      Qu() {
        this.Ct("#tp-control-lock-button .tooltiptext").text(this.Mu ? "Only I have control" : "Everyone has control");
        if (this.Mu) {
          this.Ct("#tp-unlocked-image").addClass("tp-hidden");
          this.Ct("#tp-locked-image").removeClass("tp-hidden");
        } else {
          this.Ct("#tp-unlocked-image").removeClass("tp-hidden");
          this.Ct("#tp-locked-image").addClass("tp-hidden");
        }
      }
      Wu() {
        if (!this.Pu) {
          this.Mu = !this.Mu;
          this.Qu();
        }
      }
      setResetChatButton() {
        if (this.Nu.getChatWindowVisible()) {
          this.Ct("#tp-chat-button .tooltiptext").text("Reset View");
          if (this.Nu.shouldReturnToVideo) {
            this.Ct("#tp-chat-button .tooltiptext").text("Return to Video");
          }
          this.Ct("#tp-chat-reset").removeClass("tp-hidden");
          this.Ct("#tp-chat-gray").addClass("tp-hidden");
          this.Ct("#tp-chat-button .tp-hover-image").addClass("tp-hidden");
          this.Ct("#tp-chat-hidden").addClass("tp-hidden");
        } else {
          this.Ct("#tp-chat-button .tooltiptext").text("Open Chat");
          this.Ct("#tp-chat-reset").addClass("tp-hidden");
          this.Ct("#tp-chat-gray").removeClass("tp-hidden");
          this.Ct("#tp-chat-button .tp-hover-image").removeClass("tp-hidden");
          this.Ct("#tp-chat-hidden").removeClass("tp-hidden");
        }
      }
      Yu() {
        this.Ct("#tp-chat-hidden").addClass("tp-hidden");
        if (this.Nu.isPartyWindowsActive()) {
          this.setResetChatButton();
          this.Ct("#tp-message-indicator").removeClass("tp-hidden");
        } else {
          this.Ct("#tp-message-indicator").removeClass("tp-hidden");
          this.Ct("#tp-chat-button .tooltiptext").text(`${this.Lu} unread ${this.Lu == 1 ? "message" : "messages"}`);
          this.Ct("#tp-chat-gray").removeClass("tp-hidden");
          this.Ct("#tp-chat-reset").addClass("tp-hidden");
          this.Ct("#tp-chat-button .tp-hover-image").removeClass("tp-hidden");
        }
      }
      hideMessageIndicator() {
        this.Ct("#tp-message-indicator").addClass("tp-hidden");
        if (this.Nu.isPartyWindowsActive()) {
          this.setResetChatButton();
        } else {
          this.Ct("#tp-chat-button .tp-hover-image").removeClass("tp-hidden");
          this.Ct("#tp-chat-button .tooltiptext").text("Show chat");
          this.Ct("#tp-chat-gray").addClass("tp-hidden");
          this.Ct("#tp-chat-hidden").removeClass("tp-hidden");
          this.Ct("#tp-chat-reset").addClass("tp-hidden");
        }
      }
      onChatMessage() {
        if (!this.Nu.shouldChatBeVisible() && !this.Nu.isPartyWindowsActive()) {
          this.Lu++;
          this.Yu();
          this.Ru = true;
          this.Gu();
          gi(1000)().then(() => {
            this.Ru = false;
          });
        }
      }
      teardown() {
        this.Ju();
        this.zu();
        this.stopEventListener();
      }
      enablePartyIcons() {
        this.hideError();
        this.Ct("#tp-party-active").removeClass("tp-hidden");
        this.Ct("#tp-party-inactive").addClass("tp-hidden");
        this.Ct("#tp-icon-container .tooltiptext").addClass("tp-hidden");
        this.Ct("#tp-icon-container").attr("style", "cursor: auto");
      }
      Ju() {
        this.Ct("#tp-party-active").addClass("tp-hidden");
        this.Ct("#tp-party-inactive").removeClass("tp-hidden");
        this.Ct("#tp-icon-container .tooltiptext").html("Open Teleparty");
        this.Ct("#tp-icon-container").removeClass("play-chat-active");
        this.Ct("#play-chat-icon").addClass("tp-hidden");
        this.Ct("#tp-icon-white").removeClass("tp-hidden");
      }
      hideError() {
        this.Ct("#tp-error-box").addClass("tp-hidden");
      }
      Ku(t) {
        return t.replace(/{EXTENSION_LOGO_WHITE}/g, Is(chrome.runtime.getURL("img/icon_white.svg"))).replace(/{EXTENSION_LOGO_GRADIENT}/g, Is(chrome.runtime.getURL("img/icon_gradient.svg"))).replace(/{PLAY_IMAGE}/g, Is(chrome.runtime.getURL("img/play.svg"))).replace(/{UNLOCKED_IMAGE}/g, Is(chrome.runtime.getURL("img/icon_remote_inactive.svg"))).replace(/{LOCKED_IMAGE}/g, Is(chrome.runtime.getURL("img/icon_remote_active.svg"))).replace(/{ARROW_RIGHT}/g, Is(chrome.runtime.getURL("img/arrow-right.svg"))).replace(/{LINK_IMAGE}/g, Is(chrome.runtime.getURL("img/icon_link_inactive.svg"))).replace(/{LINK_ACTIVE_IMAGE}/g, Is(chrome.runtime.getURL("img/icon_link_active.svg"))).replace(/{CHAT_HIDDEN_IMAGE}/g, Is(chrome.runtime.getURL("img/icon_chat_inactive.svg"))).replace(/{CHAT_GRAY_IMAGE}/g, Is(chrome.runtime.getURL("img/icon_chatgray_active.svg"))).replace(/{CHAT_ACTIVE_IMAGE}/g, Is(chrome.runtime.getURL("img/icon_chat_active.svg"))).replace(/{DISCONNECT_IMAGE}/g, Is(chrome.runtime.getURL("img/icon_logout_active.svg"))).replace(/{RESET_CHAT_IMAGE}/g, Is(chrome.runtime.getURL("img/reset_chat.svg")));
      }
      zu() {
        if (!this.Ru) {
          this.hideError();
          this.Ct("#tpIconContainer").addClass("tp-hidden");
        }
      }
      Gu() {
        return vl(this, undefined, undefined, function* () {
          if (!this.Ou && (this.Uu || this.Nu.inSession)) {
            this.Ou = true;
            try {
              yield this.addTpIcon();
              if (this.Nu.inSession) {
                this.enablePartyIcons();
              } else {
                this.Ju();
              }
              this.Ct("#tpIconContainer").removeClass("tp-hidden");
              this.setChatButtons();
            } finally {
              this.Ou = false;
            }
          }
        });
      }
      startEventListener() {
        this.stopEventListener();
        this.Xu = setInterval(this.checkShowMenu, 200);
      }
      stopEventListener() {
        if (this.Xu) {
          clearInterval(this.Xu);
          this.Xu = undefined;
        }
      }
      qu() {
        return "100px";
      }
      tc() {
        this.Ct("#tp-buttons-container").attr("style", `top:${this.qu()}`);
        this.Ct("#tp-chat-close-button").attr("style", `top:${this.qu()}`);
        this.Ct("#tp-error-box").attr("style", `top:${this.qu()}`);
      }
      addTpIcon() {
        return vl(this, undefined, undefined, function* () {
          if ((this.Uu || this.Nu.inSession) && this.Ct("#tpIconContainer").length === 0) {
            const t = this.Ku(Dl());
            const e = yield this.getControlsRoot();
            if (e.length > 0) {
              e.append(function (t, e = "") {
                return `\n    ${e ? `<style tpInjected data-tp-overlay-css="1">${e}</style>` : `<link tpInjected data-tp-overlay-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/overlay.css")}">`}\n    ${t}\n  `;
              }(t, "/* ID+class must beat #tp-buttons-container { display: flex !important }, or\n * icons stay visible / flash unstyled at the top before hide wins. */\n#tpIconContainer.tp-hidden,\n#tp-buttons-container.tp-hidden,\n#tp-chat-close-button.tp-hidden,\n#tp-error-box.tp-hidden,\n#tp-party-active.tp-hidden,\n#tp-message-indicator.tp-hidden,\n#play-chat-icon.tp-hidden,\n#tp-chat-reset.tp-hidden,\n#tp-chat-gray.tp-hidden,\n#tp-chat-hidden.tp-hidden,\n#tp-unlocked-image.tp-hidden,\n#tp-locked-image.tp-hidden,\n.tp-hidden,\n[tpInjected] .hidden {\n    display: none !important;\n}\n\n#tpIconContainer .slider,\n#tp-buttons-container .slider {\n    padding: 0% !important;\n}\n\n#tp-friend-iframe {\n    display: block;\n    background-color: var(--base-black);\n    border-radius: 4px;\n    padding: 20px;\n    right: 60px;\n    top: 0px;\n    border: none;\n    height: 550px;\n    width: 332px;\n    position: absolute;\n    z-index: 99999999999999999;\n}\n\n.tp-seperator {\n    border: 1px solid var(--black-20);\n    border-radius: 1px;\n    width: 40px;\n    height: 0px;\n}\n\n#tp-controls-error-text {\n    color: var(--white-5);\n    text-align: center;\n    padding: 5px;\n}\n\n#tp-error-box {\n    width: 170px;\n    height: 60px;\n    z-index: 9999;\n    position: fixed;\n    right: 80px;\n    top: 50px;\n    /* box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25); */\n    -webkit-backdrop-filter: blur(6px);\n    border-radius: 4px;\n    background-color: rgba(25, 25, 25, 0.7);\n    transition: transform 1s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#tp-buttons-container {\n    width: 50px;\n    z-index: 9999;\n    position: fixed;\n    right: 30px;\n    top: 50px;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: transform 1s;\n    display: flex !important;\n    flex-direction: column;\n    align-items: center;\n}\n\n.play-chat-active {\n    background: none !important;\n}\n\n.play-chat-active:hover {\n    background: var(--black-20) !important;\n}\n\n#tp-icon-container {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n    display: flex !important;\n    border-radius: 4.8px;\n    justify-content: center;\n    align-items: center;\n}\n\n.tp-center-image {\n    position: absolute;\n}\n\n.tooltip-holder {\n    position: relative;\n}\n\n.tooltip-holder:hover .tooltiptext {\n    visibility: visible;\n}\n\n#tp-icon-container:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tp-control-button:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tp-control-button:hover .tp-button-image {\n    visibility: hidden;\n}\n\n.tp-hover-image {\n    visibility: hidden;\n}\n\n.tp-control-button:hover .tp-hover-image {\n    visibility: visible;\n}\n\n.tp-control-button:hover {\n    background-color: var(--black-20);\n}\n\n#tp-message-indicator {\n    background: linear-gradient(135deg, #e34248 0%, #bc4d7a 56.67%, #9e55a0 100%);\n    width: 10px;\n    height: 10px;\n    border-radius: 10px;\n    position: absolute;\n    top: 10px;\n    right: 12px;\n}\n\n#tp-chat-close-button {\n    position: fixed;\n    width: 30px;\n    height: 30px;\n    right: calc(var(--chatWidth) + 5px);\n    top: 113px;\n    z-index: 9999;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 26.4px;\n}\n\n#tp-chat-close-button img {\n    width: 22px;\n    height: 22px;\n}\n\n.tooltiptext {\n    visibility: hidden;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 4px;\n    color: white !important;\n    font-size: 14px !important;\n    text-align: center;\n    vertical-align: center;\n    height: 40px;\n    padding: 5px 0;\n    border-radius: 4px;\n    position: absolute;\n    right: calc(105% + 5px);\n    align-items: center;\n    justify-content: center;\n    display: inline-flex;\n}\n\n.tooltiptext-lower {\n    right: 0px;\n    top: calc(100%);\n}\n\n.tp-control-button {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border-radius: 4px;\n}\n\n.tp-control-button img {\n    width: 16px;\n    height: 16px;\n}\n\n#tp-icon-white {\n    width: 16px;\n    height: 16px;\n}\n\n.createPartyContainer {\n    z-index: 9999;\n    right: 0px;\n    top: var(--containerTop);\n    position: fixed;\n    display: block;\n    background: var(--base-black);\n    width: 332px;\n    height: var(--containerHeight);\n    padding: 20px;\n    border-radius: 4px;\n}\n\n.buttonContainerVisible {\n    animation: goToContainer 0.6s;\n    animation-fill-mode: forwards;\n}\n\n.tpButtonHover {\n    animation: buttonHover 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.tpButtonOut {\n    animation: hoverOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.buttonContainerOut {\n    animation: buttonContainerOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.containerIn {\n    animation: containerIn 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.containerOut {\n    animation: containerOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes goToContainer {\n    0% {\n        border-radius: 50%;\n        background-color: black;\n    }\n    100% {\n        opacity: 1;\n        top: calc(var(--containerTop) + 75px);\n        right: var(--containerWidth);\n        border-top-left-radius: 50%;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 50%;\n        background-color: var(--base-black);\n    }\n}\n\n@keyframes containerIn {\n    0% {\n        right: -400px;\n    }\n    100% {\n        right: 0px;\n    }\n}\n\n@keyframes containerOut {\n    0% {\n        right: 0px;\n    }\n    100% {\n        right: -400px;\n    }\n}\n\n@keyframes buttonContainerOut {\n    0% {\n        opacity: 1;\n        top: calc(var(--containerTop) + 75px);\n        right: var(--containerWidth);\n        border-top-left-radius: 50%;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 50%;\n        background-color: var(--base-black);\n    }\n    100% {\n        opacity: 0.2;\n        right: var(--outRight);\n        border-radius: 50%;\n        background-color: black;\n    }\n}\n\n@keyframes buttonHover {\n    0% {\n    }\n    100% {\n        opacity: 1;\n        right: 0px;\n    }\n}\n\n@keyframes hoverOut {\n    0% {\n        opacity: 1;\n        right: 0px;\n    }\n    100% {\n        opacity: 0.2;\n        right: var(--outRight);\n    }\n}\n\n@import \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap\";\n\n/*\n * overlay.css is injected into the host page with the TP icon. Keep resets scoped\n * so streaming-site controls (YouTube buttons/sliders) are not reset globally.\n */\n#tpIconContainer,\n#tp-error-box {\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n#tpIconContainer *,\n#tp-error-box * {\n    box-sizing: border-box;\n}\n#tpIconContainer :is(h1, h2, h3, h4, h5, h6, a, p, ul, li, ol, button),\n#tp-error-box :is(h1, h2, h3, h4, h5, h6, a, p, ul, li, ol, button) {\n    padding: 0em;\n    margin: 0em;\n}\n#tpIconContainer :is(ul, li, ol, a),\n#tp-error-box :is(ul, li, ol, a) {\n    text-decoration: none;\n    list-style: none;\n}\n#tpIconContainer :is(input, button),\n#tp-error-box :is(input, button) {\n    border: none;\n}\n#tpIconContainer :is(h1, h2, h3, h4, h5, h6, p, span),\n#tp-error-box :is(h1, h2, h3, h4, h5, h6, p, span) {\n    user-select: text !important;\n    cursor: auto !important;\n}\n#tpIconContainer img,\n#tp-error-box img {\n    user-select: none !important;\n}\n#tpIconContainer :is(div, section, button, input, form, article),\n#tp-error-box :is(div, section, button, input, form, article) {\n    outline: none;\n}\n#tpIconContainer a,\n#tp-error-box a {\n    display: inline;\n    /* width: fit-content; */\n}\n#tpIconContainer :is(button, input, form, fieldset),\n#tp-error-box :is(button, input, form, fieldset) {\n    background: none;\n}\n#tpIconContainer button:hover,\n#tp-error-box button:hover {\n    cursor: pointer;\n}\n.r-m {\n    margin: 0 !important;\n}\n.r-m-t {\n    margin-top: 0 !important;\n}\n.r-p-t {\n    padding-top: 0 !important;\n}\n.r-m-l {\n    margin-left: 0 !important;\n}\n.r-p-l {\n    padding-left: 0 !important;\n}\n.r-m-r {\n    margin-right: 0 !important;\n}\n.r-p-r {\n    padding-right: 0 !important;\n}\n.r-m-b {\n    margin-bottom: 0 !important;\n}\n.r-p-b {\n    padding-bottom: 0 !important;\n}\n.r-b-r {\n    border-radius: 0px !important;\n}\n.r-boxshadow {\n    box-shadow: none !important;\n}\n:root {\n    --outRight: -25px;\n    --containerTop: calc(50% - var(--containerHalf));\n    --containerHeight: 205px;\n    --containerHalf: 102.5px;\n    --chatWidth: 340px;\n    --gradient-1: linear-gradient(135deg, #e34248 0%, #bc4d7a 56.67%, #9e55a0 100%);\n    --patreon: #f96854;\n    --base-red: #ef3e3a;\n    --active-red: #ea0f0a;\n    --base-blue: #4da9ff;\n    --base-orange: #ff8d4c;\n    --base-green: #24d154;\n    --base-white: #fafafa;\n    --white-5: #f0f0f0;\n    --white-10: #dcdcdc;\n    --white-15: #c8c8c8;\n    --white-20: #b4b4b4;\n    --white-25: #a0a0a0;\n    --white-30: #8c8c8c;\n    --white-35: #787878;\n    --base-black: #191919;\n    --black-5: #5a5a5a;\n    --black-10: #464646;\n    --black-15: #323232;\n    --black-20: #282828;\n    --black-25: #1e1e1e;\n    --black-30: #0a0a0a;\n}\n.base-white-bg {\n    background-color: var(--base-white);\n}\n.white-5-bg {\n    background-color: var(--white-5);\n}\n.white-10-bg {\n    background-color: var(--white-10);\n}\n.white-15-bg {\n    background-color: var(--white-15);\n}\n.white-20-bg {\n    background-color: var(--white-20);\n}\n.white-25-bg {\n    background-color: var(--white-25);\n}\n.white-30-bg {\n    background-color: var(--white-30);\n}\n.white-35-bg {\n    background-color: var(--white-35);\n}\n.base-black-bg {\n    background-color: var(--base-black);\n}\n.black-5-bg {\n    background-color: var(--black-5);\n}\n.black-10-bg {\n    background-color: var(--black-10);\n}\n.black-15-bg {\n    background-color: var(--black-15);\n}\n.black-20-bg {\n    background-color: var(--black-20);\n}\n.black-25-bg {\n    background-color: var(--black-25);\n}\n.black-30-bg {\n    background-color: var(--black-30);\n}\n.black-35-bg {\n    background-color: var(--black-35);\n}\n.base-red-bg {\n    background-color: var(--base-red);\n}\n.active-red-bg {\n    background-color: var(--active-red);\n}\n.base-orange-bg {\n    background-color: var(--base-orange);\n}\n.base-blue-bg {\n    background-color: var(--base-blue);\n}\n.base-green-bg {\n    background-color: var(--base-green);\n}\n.patreon-bg {\n    background-color: var(--patreon);\n}\n.txt-blue {\n    color: var(--base-blue) !important;\n}\n.txt-red {\n    color: var(--base-red) !important;\n}\n.txt-white {\n    color: var(--base-white) !important;\n}\n#tpIconContainer :is(div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button),\n#tp-error-box :is(div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button) {\n    word-wrap: normal;\n}\n:root {\n    --regular: 400;\n    --medium: 500;\n    --semi-bold: 600;\n    --bold: 700;\n    --extra-bold: 800;\n    --black: 900;\n}\n.extension-title {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    color: var(--base-red);\n    font-size: 16px;\n    letter-spacing: 0.2px;\n}\n.extension-txt {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--regular);\n    color: var(--white-15);\n    font-size: 14px;\n}\n.extension-txt-indicator {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--regular);\n    color: var(--white-35);\n    font-size: 11px;\n}\n.extension-description {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    color: var(--white-10);\n    font-size: 13px;\n}\n.extension-border-bot {\n    border-bottom: 1px solid var(--black-10);\n}\n.extension-border-top {\n    border-top: 1px solid var(--black-10);\n}\n.extension-btn {\n    width: 100%;\n    margin-top: 10px;\n    background: var(--base-red);\n    color: var(--base-white);\n    padding: 10px 0px;\n    border-radius: 2px;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    transition: background 0.3s ease;\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: center;\n    font-size: 14px;\n}\n.extension-btn:hover {\n    background: var(--active-red);\n}\n.extension-btn a {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    color: var(--base-white);\n}\n.no-error {\n    display: block;\n    background: var(--base-black);\n    width: var(--containerWidth);\n    padding: 20px;\n    border-radius: 4px;\n}\n.no-error input[type=\"text\"] {\n    display: block;\n    outline-style: none;\n    color: var(--base-white);\n    border: 1px solid var(--base-white);\n    border-radius: 4px;\n    width: 100%;\n    height: 40px;\n    padding: 8px 12px;\n    margin-top: 10px;\n}\n.no-error input[type=\"text\"]:focus {\n    border: 1px solid var(--white-35);\n}\n.no-error label {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    display: flex;\n    flex-flow: wrap row;\n    align-items: center;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--regular);\n    color: var(--base-white);\n    font-size: 12px;\n    margin-top: 12px;\n}\n.no-error label input {\n    margin-right: 10px;\n}\n.no-error h2 {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--semi-bold);\n    color: var(--base-white);\n    font-size: 18px;\n    letter-spacing: 0.2px;\n}\n.no-error button {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    cursor: pointer;\n    background-color: var(--base-red);\n    color: var(--base-white);\n    transition: 0.3s ease;\n    font-size: 13px;\n    letter-spacing: 0.2px;\n    margin-top: 16px;\n    transform: translateY(0px);\n}\n.no-error button:hover {\n    transform: translateY(-2px);\n}\n.no-error i {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--bold);\n}\n.no-error .copy-val {\n    display: block;\n    width: fit-content;\n    margin-top: 10px;\n    padding: 10px 20px;\n}\n.no-error .copy-val a {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    border-radius: 2px;\n    transition: 0.3s ease;\n    font-size: 12px;\n}\n.some-error {\n    display: block;\n    background: var(--base-black);\n    width: 332px;\n    padding: 20px;\n    border-radius: 4px;\n}\n.extension-btn {\n    margin-bottom: 10px;\n}\n#create-session {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#create-session:hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#accept-permissions {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#accept-permissions :hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n.popup-url-container {\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 15px;\n}\n.popup-url-container input[type=\"text\"] {\n    display: block;\n    outline-style: none;\n    color: var(--base-white);\n    border: none;\n    border-bottom: 1px solid var(--base-white);\n    border-radius: 0px;\n    width: 60%;\n    height: 40px;\n    padding: 0px;\n    margin-top: 0px;\n}\n.popup-url-container input[type=\"text\"]:focus {\n    border: none;\n}\n.popup-url-container .copy-val {\n    cursor: pointer !important;\n    width: 34%;\n    margin: 0;\n}\n.popup-url-container .copy-val a {\n    margin: 0;\n}\n.popup-review-container {\n    display: flex;\n    flex-flow: wrap column;\n    width: 100%;\n    padding-top: 15px;\n    margin-top: 15px;\n    border-top: 1px solid var(--black-10);\n}\n.popup-review-container button {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n.popup-review-container button:hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n} /*# sourceMappingURL=pop.min.css.map */\n.ellipsis-anim span {\n    opacity: 0;\n    -webkit-animation: ellipsis-dot 1s infinite;\n    animation: ellipsis-dot 1s infinite;\n}\n\n.ellipsis-anim span:nth-child(1) {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n.ellipsis-anim span:nth-child(2) {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n.ellipsis-anim span:nth-child(3) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n@-webkit-keyframes ellipsis-dot {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes ellipsis-dot {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    margin-top: 0;\n}\n.switch input,\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.switch input:checked + .slider,\n.switch input:checked + .slider {\n    background: var(--gradient-1);\n}\n.switch input:checked + .slider:before,\n.switch input:checked + .slider:before {\n    -webkit-transform: translateX(5px);\n    -ms-transform: translateX(5px);\n    transform: translateX(5px);\n}\n.switch .slider,\n.switch .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--black-5);\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.switch .slider:before,\n.switch .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 14px;\n    width: 14px;\n    left: 4px;\n    bottom: 2px;\n    background-color: #fff;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.switch .round,\n.switch .round {\n    border-radius: 34px;\n}\n.switch .round:before,\n.switch .round:before {\n    border-radius: 50%;\n}\n.switch .round:hover,\n.switch .round:hover {\n    cursor: pointer !important;\n}\n\n.pinned {\n    background-color: var(--black-20);\n}\n\n.gradient-image {\n}\n\n.body14r {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 21px;\n}\n"));
              this.ec();
            }
          }
        });
      }
      ec() {
        this.Ct("#tp-control-lock-button").click(this.Wu.bind(this));
        this.tc();
        this.Ct("#tp-link-button").click(this.nc.bind(this));
        this.Ct("#tp-chat-button").on("click", t => {
          this.sc();
          t.stopImmediatePropagation();
          t.stopPropagation();
          return false;
        });
        this.Ct("#tp-buttons-container").on("mouseenter", () => {
          this.onControlsMouseEnter();
        });
        this.Ct("#tp-buttons-container").on("mouseleave", () => {
          this.onControlsMouseLeave();
        });
        this.Ct("#tp-disconnect-button").on("click", () => {
          this.oc();
        });
      }
      oc() {
        const t = new Ji(c, r, zs);
        S.m(t);
        this.zu();
      }
      onControlsMouseEnter() {}
      onControlsMouseLeave() {}
      nc() {
        this.Nu.linkIconListener();
        this.Ct("#tp-link-button .tooltiptext").text("Link copied");
        setTimeout(() => {
          this.Ct("#tp-link-button .tooltiptext").text("Copy join link");
        }, 1000);
      }
      sc() {
        return vl(this, undefined, undefined, function* () {
          this.Lu = 0;
          this.hideMessageIndicator();
          if (this.Nu.isPartyWindowsActive()) {
            this.Nu.resetChatWindow(true);
          } else {
            yield this.Nu.setChatVisible(!this.Nu.shouldChatBeVisible());
            this.setChatButtons();
          }
        });
      }
      onInitChat() {
        if (this.Tu) {
          this.Gu();
        }
      }
      setChatButtons() {
        if (this.Nu.inSession && this.Nu.getChatVisible()) {
          this.rc();
        } else {
          this.ac();
        }
        if (this.Nu.isPartyWindowsActive()) {
          this.setResetChatButton();
        } else {
          this.hideMessageIndicator();
        }
      }
      rc() {
        return vl(this, undefined, undefined, function* () {
          if (this.Nu.inSession && this.Nu.shouldChatBeVisible()) {
            this.Ct("#tp-chat-close-button").removeClass("tp-hidden");
            this.Ct("#tp-buttons-container").addClass("tp-hidden");
          }
        });
      }
      ac() {
        this.Ct("#tp-chat-close-button").addClass("tp-hidden");
        this.Ct("#tp-buttons-container").removeClass("tp-hidden");
      }
    }
    function ml(t, e, n, i) {
      return new (n ||= Promise)(function (s, o) {
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
          var e;
          if (t.done) {
            s(t.value);
          } else {
            (e = t.value, e instanceof n ? e : new n(function (t) {
              t(e);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, e || [])).next());
      });
    }
    class wl extends gl {
      getControlsRoot() {
        return ml(this, undefined, undefined, function* () {
          return jQuery(".watch-video--player-view");
        });
      }
      shouldMenuBeVisible() {
        return document.querySelector("[data-uia='control-back10']") !== null;
      }
      startEventListener() {
        super.startEventListener();
        jQuery("#tp-buttons-container").hover(() => {
          window.postMessage({
            type: "ShowControls"
          }, "*");
        });
      }
      getControlsHeight() {
        return "100px";
      }
      stopEventListener() {
        super.stopEventListener();
        jQuery("#tp-buttons-container").off("hover");
      }
    }
    class yl extends nl {
      constructor() {
        const t = new Hi();
        const e = new fo(t);
        const n = new pl(t, e);
        let i;
        i = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new wl(e);
        super(e, t, n, i, true, ki.NETFLIX.toString());
        A("Netflix Content Script");
      }
    }
    if (function () {
      return window === window.top && (!window.teleparty || !window.teleparty?.contentScriptInjected);
    }()) {
      if (!window.teleparty) {
        console.log("Set Teleparty");
        window.teleparty = {};
      }
      window.teleparty.contentScriptInjected = true;
      new yl();
      A("Initialized content script");
    }
  })();
})();