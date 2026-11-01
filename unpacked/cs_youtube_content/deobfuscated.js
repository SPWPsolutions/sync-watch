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
          let e;
          let s;
          let o;
          let r = null;
          function a(...t) {
            if (!a.enabled) {
              return;
            }
            const i = a;
            const s = Number(new Date());
            const o = s - (e || s);
            i.diff = o;
            i.prev = e;
            i.curr = s;
            e = s;
            t[0] = n.coerce(t[0]);
            if (typeof t[0] != "string") {
              t.unshift("%O");
            }
            let r = 0;
            t[0] = t[0].replace(/%([a-zA-Z%])/g, (e, s) => {
              if (e === "%%") {
                return "%";
              }
              r++;
              const o = n.formatters[s];
              if (typeof o == "function") {
                const n = t[r];
                e = o.call(i, n);
                t.splice(r, 1);
                r--;
              }
              return e;
            });
            n.formatArgs.call(i, t);
            (i.log || n.log).apply(i, t);
          }
          a.namespace = t;
          a.useColors = n.useColors();
          a.color = n.selectColor(t);
          a.extend = i;
          a.destroy = n.destroy;
          Object.defineProperty(a, "enabled", {
            enumerable: true,
            configurable: false,
            get: () => r !== null ? r : (s !== n.namespaces && (s = n.namespaces, o = n.enabled(t)), o),
            set: t => {
              r = t;
            }
          });
          if (typeof n.init == "function") {
            n.init(a);
          }
          return a;
        }
        function i(t, e) {
          const i = n(this.namespace + (e === undefined ? ":" : e) + t);
          i.log = this.log;
          return i;
        }
        function s(t, n) {
          let e = 0;
          let i = 0;
          let s = -1;
          let o = 0;
          while (e < t.length) {
            if (i < n.length && (n[i] === t[e] || n[i] === "*")) {
              if (n[i] === "*") {
                s = i;
                o = e;
                i++;
              } else {
                e++;
                i++;
              }
            } else {
              if (s === -1) {
                return false;
              }
              i = s + 1;
              o++;
              e = o;
            }
          }
          while (i < n.length && n[i] === "*") {
            i++;
          }
          return i === n.length;
        }
        n.debug = n;
        n.default = n;
        n.coerce = function (t) {
          if (t instanceof Error) {
            return t.stack || t.message;
          }
          return t;
        };
        n.disable = function () {
          const t = [...n.names, ...n.skips.map(t => "-" + t)].join(",");
          n.enable("");
          return t;
        };
        n.enable = function (t) {
          n.save(t);
          n.namespaces = t;
          n.names = [];
          n.skips = [];
          const e = (typeof t == "string" ? t : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
          for (const t of e) {
            if (t[0] === "-") {
              n.skips.push(t.slice(1));
            } else {
              n.names.push(t);
            }
          }
        };
        n.enabled = function (t) {
          for (const e of n.skips) {
            if (s(t, e)) {
              return false;
            }
          }
          for (const e of n.names) {
            if (s(t, e)) {
              return true;
            }
          }
          return false;
        };
        n.humanize = e(6585);
        n.destroy = function () {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        };
        Object.keys(t).forEach(e => {
          n[e] = t[e];
        });
        n.names = [];
        n.skips = [];
        n.formatters = {};
        n.selectColor = function (t) {
          let e = 0;
          for (let n = 0; n < t.length; n++) {
            e = (e << 5) - e + t.charCodeAt(n);
            e |= 0;
          }
          return n.colors[Math.abs(e) % n.colors.length];
        };
        n.enable(n.load());
        return n;
      };
    },
    5089(t) {
      t.exports = "<div id=\"chat-wrapper\" tpInjected>\n    <iframe\n        style=\"display: none\"\n        id=\"tpChatFrame\"\n        allow=\"autoplay; clipboard-read; web-share; clipboard-write; payment; camera; microphone;\"\n        src=\"{CHAT_URL}\"\n    >\n    </iframe>\n</div>\n";
    },
    6585(t) {
      var n = 1000;
      var e = n * 60;
      var i = e * 60;
      var s = i * 24;
      var o = s * 7;
      var r = s * 365.25;
      function a(t, n, e, i) {
        var s = n >= e * 1.5;
        return Math.round(t / e) + " " + i + (s ? "s" : "");
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
              if (o >= e) {
                return a(t, o, e, "minute");
              }
              if (o >= n) {
                return a(t, o, n, "second");
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
              if (o >= e) {
                return Math.round(t / e) + "m";
              }
              if (o >= n) {
                return Math.round(t / n) + "s";
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
      (function (t, n, e) {
        "use strict";

        if (t.MutationObserver && typeof HTMLElement != "undefined") {
          var i;
          var s = 0;
          i = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
          var o = {
            matchesSelector: function (t, n) {
              return t instanceof HTMLElement && i.call(t, n);
            },
            addMethod: function (t, n, e) {
              var i = t[n];
              t[n] = function () {
                if (e.length == arguments.length) {
                  return e.apply(this, arguments);
                } else if (typeof i == "function") {
                  return i.apply(this, arguments);
                } else {
                  return undefined;
                }
              };
            },
            callCallbacks: function (t, n, e) {
              if (t.length) {
                if (n && n.options.onceOnly) {
                  t = [t[0]];
                  n.me.unbindEventWithSelectorAndCallback.call(n.target, n.selector, n.callback);
                }
                for (var i, s = 0; i = t[s]; s++) {
                  if (i && i.callback) {
                    i.callback.call(i.elem, i.elem);
                  }
                }
                if (n && n.callback && e) {
                  e.addTimeoutHandler(n.target, n.selector, n.callback, n.options, n.data);
                }
              }
            },
            checkChildNodesRecursively: function (t, n, e, i) {
              for (var s, r = 0; s = t[r]; r++) {
                if (e(s, n, i)) {
                  i.push({
                    callback: n.callback,
                    elem: s
                  });
                }
                if (s.childNodes.length > 0) {
                  o.checkChildNodesRecursively(s.childNodes, n, e, i);
                }
              }
            },
            mergeArrays: function (t, n) {
              var e;
              var i = {};
              for (e in t) {
                if (t.hasOwnProperty(e)) {
                  i[e] = t[e];
                }
              }
              for (e in n) {
                if (n.hasOwnProperty(e)) {
                  i[e] = n[e];
                }
              }
              return i;
            },
            toElementsArray: function (n) {
              if (n !== undefined && (typeof n.length != "number" || n === t)) {
                n = [n];
              }
              return n;
            }
          };
          var r = function () {
            function t() {
              this.i = [];
              this.u = null;
              this.l = null;
            }
            t.prototype.addEvent = function (t, n, e, i, s) {
              var o = {
                target: t,
                selector: n,
                options: e,
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
              for (var n, e = this.i.length - 1; n = this.i[e]; e--) {
                if (t(n)) {
                  if (this.l) {
                    this.l(n);
                  }
                  if (n.data && n.data.timeoutId) {
                    clearTimeout(n.data.timeoutId);
                  }
                  var i = this.i.splice(e, 1);
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
          function a(n, i) {
            var s = new r();
            var a = this;
            var u = {
              fireOnAttributesModification: false
            };
            s.beforeAdding(function (e) {
              var s;
              var o = e.target;
              if (o === t.document || o === t) {
                o = document.getElementsByTagName("html")[0];
              }
              s = new MutationObserver(function (t) {
                i.call(this, t, e);
              });
              var r = n(e.options);
              s.observe(o, r);
              e.observer = s;
              e.me = a;
            });
            s.beforeRemoving(function (t) {
              t.observer.disconnect();
            });
            this.bindEvent = function (t, n, e) {
              n = o.mergeArrays(u, n);
              for (var i = o.toElementsArray(this), r = 0; r < i.length; r++) {
                const o = {};
                a.addTimeoutHandler(i[r], t, e, n, o);
                s.addEvent(i[r], t, n, e, o);
              }
            };
            this.unbindEvent = function () {
              var t = o.toElementsArray(this);
              s.removeEvent(function (n) {
                for (var i = 0; i < t.length; i++) {
                  if (this === e || n.target === t[i]) {
                    return true;
                  }
                }
                return false;
              });
            };
            this.unbindEventWithSelectorOrCallback = function (t) {
              var n;
              var i = o.toElementsArray(this);
              var r = t;
              n = typeof t == "function" ? function (t) {
                for (var n = 0; n < i.length; n++) {
                  if ((this === e || t.target === i[n]) && t.callback === r) {
                    return true;
                  }
                }
                return false;
              } : function (n) {
                for (var s = 0; s < i.length; s++) {
                  if ((this === e || n.target === i[s]) && n.selector === t) {
                    return true;
                  }
                }
                return false;
              };
              s.removeEvent(n);
            };
            this.unbindEventWithSelectorAndCallback = function (t, n) {
              var i = o.toElementsArray(this);
              s.removeEvent(function (s) {
                for (var o = 0; o < i.length; o++) {
                  if ((this === e || s.target === i[o]) && s.selector === t && s.callback === n) {
                    return true;
                  }
                }
                return false;
              });
            };
            this.addTimeoutHandler = function (t, n, e, i, s) {
              if (!!i.timeout && !(i.timeout <= 0)) {
                if (s.timeoutId) {
                  clearTimeout(s.timeoutId);
                }
                s.timeoutId = setTimeout(() => {
                  a.unbindEventWithSelectorAndCallback.call(t, n, e);
                  e.call(null, null);
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
            function n(t, n, i) {
              return !!o.matchesSelector(t, n.selector) && !(t.p === e && (t.p = s++), n.firedElems.indexOf(t.p) != -1) && (n.firedElems.push(t.p), true);
            }
            var i = (u = new a(function (t) {
              var n = {
                attributes: false,
                childList: true,
                subtree: true
              };
              if (t.fireOnAttributesModification) {
                n.attributes = true;
              }
              return n;
            }, function (t, e) {
              t.forEach(function (t) {
                var i = t.addedNodes;
                var s = t.target;
                var r = [];
                if (i !== null && i.length > 0) {
                  o.checkChildNodesRecursively(i, e, n, r);
                } else if (t.type === "attributes" && n(s, e, r)) {
                  r.push({
                    callback: e.callback,
                    elem: s
                  });
                }
                o.callCallbacks(r, e, u);
              });
            })).bindEvent;
            u.bindEvent = function (n, s, r) {
              var a = typeof s == "object" ? o.mergeArrays(t, s) : {
                ...t
              };
              var u = typeof r == "function" ? r : typeof s == "function" ? s : e;
              var c = o.toElementsArray(this);
              if (!u) {
                a.onceOnly = true;
              }
              if (a.existing) {
                var h = [];
                for (var l = 0; l < c.length; l++) {
                  for (var d = c[l].querySelectorAll(n), p = 0; p < d.length; p++) {
                    h.push({
                      callback: u,
                      elem: d[p]
                    });
                  }
                }
                if (a.onceOnly && h.length) {
                  if (u) {
                    return u.call(h[0].elem, h[0].elem);
                  } else {
                    return Promise.resolve(h[0].elem);
                  }
                }
                setTimeout(o.callCallbacks, 1, h);
              }
              if (!u) {
                var f = this;
                return new Promise(t => i.call(f, n, a, t));
              }
              i.call(this, n, a, u);
            };
            return u;
          }();
          var c = new function () {
            var t = {
              onceOnly: false,
              timeout: 0
            };
            function n(t, n) {
              return o.matchesSelector(t, n.selector);
            }
            var i = (c = new a(function () {
              return {
                childList: true,
                subtree: true
              };
            }, function (t, e) {
              t.forEach(function (t) {
                var i = t.removedNodes;
                var s = [];
                if (i !== null && i.length > 0) {
                  o.checkChildNodesRecursively(i, e, n, s);
                }
                o.callCallbacks(s, e, c);
              });
            })).bindEvent;
            c.bindEvent = function (n, s, r) {
              var a = typeof s == "object" ? o.mergeArrays(t, s) : {
                ...t
              };
              var u = typeof r == "function" ? r : typeof s == "function" ? s : e;
              if (!u) {
                a.onceOnly = true;
                var c = this;
                return new Promise(t => i.call(c, n, a, t));
              }
              i.call(this, n, a, u);
            };
            return c;
          }();
          if (n) {
            d(n.fn);
          }
          d(HTMLElement.prototype);
          d(NodeList.prototype);
          d(HTMLCollection.prototype);
          d(HTMLDocument.prototype);
          d(Window.prototype);
          var h = {};
          l(u, h, "unbindAllArrive");
          l(c, h, "unbindAllLeave");
          return h;
        }
        function l(t, n, e) {
          o.addMethod(n, e, t.unbindEvent);
          o.addMethod(n, e, t.unbindEventWithSelectorOrCallback);
          o.addMethod(n, e, t.unbindEventWithSelectorAndCallback);
        }
        function d(t) {
          t.arrive = u.bindEvent;
          l(u, t, "unbindArrive");
          t.leave = c.bindEvent;
          l(c, t, "unbindLeave");
        }
      })(window, typeof jQuery == "undefined" ? null : jQuery, undefined);
    },
    7833(t, n, e) {
      n.formatArgs = function (n) {
        n[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + n[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const e = "color: " + this.color;
        n.splice(1, 0, e, "color: inherit");
        let i = 0;
        let s = 0;
        n[0].replace(/%[a-zA-Z%]/g, t => {
          if (t !== "%%") {
            i++;
            if (t === "%c") {
              s = i;
            }
          }
        });
        n.splice(s, 0, e);
      };
      n.save = function (t) {
        try {
          if (t) {
            n.storage.setItem("debug", t);
          } else {
            n.storage.removeItem("debug");
          }
        } catch (t) {}
      };
      n.load = function () {
        let t;
        try {
          t = n.storage.getItem("debug") || n.storage.getItem("DEBUG");
        } catch (t) {}
        if (!t && typeof process != "undefined" && "env" in process) {
          t = "MISSING_ENV_VAR".DEBUG;
        }
        return t;
      };
      n.useColors = function () {
        if (typeof window != "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let t;
        return typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      };
      n.storage = function () {
        try {
          return localStorage;
        } catch (t) {}
      }();
      n.destroy = (() => {
        let t = false;
        return () => {
          if (!t) {
            t = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      n.log = console.debug || console.log || (() => {});
      t.exports = e(736)(n);
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
  var n = {};
  function e(i) {
    var s = n[i];
    if (s !== undefined) {
      return s.exports;
    }
    var o = n[i] = {
      exports: {}
    };
    t[i](o, o.exports, e);
    return o.exports;
  }
  e.n = t => {
    var n = t && t.D ? () => t.default : () => t;
    e.d(n, {
      a: n
    });
    return n;
  };
  e.d = (t, n) => {
    for (var i in n) {
      if (e.o(n, i) && !e.o(t, i)) {
        Object.defineProperty(t, i, {
          enumerable: true,
          get: n[i]
        });
      }
    }
  };
  e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n);
  (() => {
    "use strict";

    var t = e(7833);
    var n = e.n(t);
    class i {
      constructor(t) {
        this.namespace = t;
      }
      debug(t) {
        const e = t.methodName ? `${this.namespace}:${t.methodName}` : this.namespace;
        if (t.message) {
          n()(e)(t.message);
        }
        if (t.object) {
          n()(e)(t.object);
        }
      }
    }
    const s = "https://api.teleparty.com";
    const o = "https://www.teleparty.com";
    const r = "https://files.teleparty.com";
    function a(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const u = `tp_csrf:${new URL(s).origin}`;
    let c = null;
    function h() {
      return a(this, undefined, undefined, function* () {
        const i = yield fetch(`${s}/session/csrf`, {
          method: "GET",
          credentials: "include"
        });
        if (!i.ok) {
          return;
        }
        const o = yield i.json().catch(() => ({}));
        const r = (o == null ? undefined : o.csrf) ?? (o == null ? undefined : o.token) ?? (o == null ? undefined : o.data)?.csrf;
        if (typeof r == "string" && r) {
          (function (t) {
            try {
              if (typeof sessionStorage == "undefined") {
                return;
              }
              sessionStorage.setItem(u, JSON.stringify({
                v: t,
                t: Date.now()
              }));
            } catch (t) {}
          })(r);
          return r;
        } else {
          return undefined;
        }
      });
    }
    function l(t = false) {
      return a(this, undefined, undefined, function* () {
        const n = function () {
          try {
            if (typeof sessionStorage == "undefined") {
              return;
            }
            const t = sessionStorage.getItem(u);
            if (!t) {
              return;
            }
            const {
              v: n,
              t: e
            } = JSON.parse(t);
            if (Date.now() - e < 60000) {
              return n;
            }
          } catch (t) {}
        }();
        if (n && !t) {
          return n;
        } else {
          if (c == null) {
            c = h().finally(() => {
              c = null;
            });
          }
          return c;
        }
      });
    }
    const d = Object.freeze("video-highlights");
    const p = Object.freeze(["live-match-info", "fantasy", "commentary", "scorecard", "squad", "key-moments"]);
    const f = Object.freeze({
      tag: "type",
      value: "match-info"
    });
    const D = Object.freeze({
      VIDEO_ELEMENT_SELECTOR: "video.vjs-tech",
      VIDEO_ELEMENT_SELECTOR_2: "video[class*=\"StyledVideo\"]",
      TITLE_ELEMENT_SELECTOR: "[class*=\"VideoPlayerTitleLabel\"]",
      MATCH_INFO_QUERY_PARAM: f,
      AD_CLASS_NAME: "video[title=\"Advertisement\"]",
      INSTREAM_AD_ID: "[id*=\"instream-video\"]",
      LIVE_MATCH_PAGE_TYPES: p,
      HIGHLIGHTS: d
    });
    const v = Object.freeze({
      LIVE: "/live/",
      VIDEO: "/video/",
      CHANNELS: "/canales/"
    });
    const g = Object.freeze([v.LIVE, v.CHANNELS]);
    const m = Object.freeze({
      PATH_TYPES: v,
      LIVE_PATHS: g,
      VIDEO_ELEMENT_SELECTOR: "video",
      TITLE_ELEMENT_SELECTOR: "h1"
    });
    const w = Object.freeze({
      SHOW: "player",
      LIVE_TV: "livestream"
    });
    const y = Object.freeze({
      VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-player-element",
      LIVE_VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-bitmovin-element",
      TITLE_ELEMENT_SELECTOR: "h3[class*=\"VODTitle_show-title\"]",
      VIDEO_TYPES: w,
      AD_CLASS_NAME: "video[title=\"Advertisement\"]"
    });
    const b = Object.freeze({
      VIDEO: "vod",
      LIVE: "live"
    });
    const C = Object.freeze({
      VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-null",
      AD_CLASS_NAME: "video[title=\"Advertisement\"]",
      TITLE_ELEMENT_SELECTOR: "#series_title",
      TITLE_ELEMENT_SELECTOR_LIVE_TV: ".bmpui-label-metadata-viu-title.bmpui-label-metadata-viu-title",
      UI_CONTAINER: ".bmpui-ui-uicontainer",
      VIDEO_TYPES: b,
      QUERY_PARAMS_ORIGIN_EPISODE_CODE_TAG: "originEpisodeCode"
    });
    function F(t) {
      let n = t.length;
      while (--n >= 0) {
        t[n] = 0;
      }
    }
    const _ = 256;
    const E = 286;
    const x = 30;
    const k = 15;
    const A = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const I = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const B = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const S = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const j = new Array(576);
    F(j);
    const $ = new Array(60);
    F($);
    const T = new Array(512);
    F(T);
    const P = new Array(256);
    F(P);
    const M = new Array(29);
    F(M);
    const L = new Array(x);
    function R(t, n, e, i, s) {
      this.static_tree = t;
      this.extra_bits = n;
      this.extra_base = e;
      this.elems = i;
      this.max_length = s;
      this.has_stree = t && t.length;
    }
    let O;
    let V;
    let U;
    function H(t, n) {
      this.dyn_tree = t;
      this.max_code = 0;
      this.stat_desc = n;
    }
    F(L);
    const N = t => t < 256 ? T[t] : T[256 + (t >>> 7)];
    const G = (t, n) => {
      t.pending_buf[t.pending++] = n & 255;
      t.pending_buf[t.pending++] = n >>> 8 & 255;
    };
    const z = (t, n, e) => {
      if (t.bi_valid > 16 - e) {
        t.bi_buf |= n << t.bi_valid & 65535;
        G(t, t.bi_buf);
        t.bi_buf = n >> 16 - t.bi_valid;
        t.bi_valid += e - 16;
      } else {
        t.bi_buf |= n << t.bi_valid & 65535;
        t.bi_valid += e;
      }
    };
    const Z = (t, n, e) => {
      z(t, e[n * 2], e[n * 2 + 1]);
    };
    const Q = (t, n) => {
      let e = 0;
      do {
        e |= t & 1;
        t >>>= 1;
        e <<= 1;
      } while (--n > 0);
      return e >>> 1;
    };
    const W = (t, n, e) => {
      const i = new Array(16);
      let s;
      let o;
      let r = 0;
      for (s = 1; s <= k; s++) {
        r = r + e[s - 1] << 1;
        i[s] = r;
      }
      for (o = 0; o <= n; o++) {
        let n = t[o * 2 + 1];
        if (n !== 0) {
          t[o * 2] = Q(i[n]++, n);
        }
      }
    };
    const Y = t => {
      let n;
      for (n = 0; n < E; n++) {
        t.dyn_ltree[n * 2] = 0;
      }
      for (n = 0; n < x; n++) {
        t.dyn_dtree[n * 2] = 0;
      }
      for (n = 0; n < 19; n++) {
        t.bl_tree[n * 2] = 0;
      }
      t.dyn_ltree[512] = 1;
      t.opt_len = t.static_len = 0;
      t.sym_next = t.matches = 0;
    };
    const J = t => {
      if (t.bi_valid > 8) {
        G(t, t.bi_buf);
      } else if (t.bi_valid > 0) {
        t.pending_buf[t.pending++] = t.bi_buf;
      }
      t.bi_buf = 0;
      t.bi_valid = 0;
    };
    const K = (t, n, e, i) => {
      const s = n * 2;
      const o = e * 2;
      return t[s] < t[o] || t[s] === t[o] && i[n] <= i[e];
    };
    const q = (t, n, e) => {
      const i = t.heap[e];
      let s = e << 1;
      while (s <= t.heap_len && (s < t.heap_len && K(n, t.heap[s + 1], t.heap[s], t.depth) && s++, !K(n, i, t.heap[s], t.depth))) {
        t.heap[e] = t.heap[s];
        e = s;
        s <<= 1;
      }
      t.heap[e] = i;
    };
    const X = (t, n, e) => {
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
            Z(t, s, n);
          } else {
            o = P[s];
            Z(t, o + _ + 1, n);
            r = A[o];
            if (r !== 0) {
              s -= M[o];
              z(t, s, r);
            }
            i--;
            o = N(i);
            Z(t, o, e);
            r = I[o];
            if (r !== 0) {
              i -= L[o];
              z(t, i, r);
            }
          }
        } while (a < t.sym_next);
      }
      Z(t, 256, n);
    };
    const tt = (t, n) => {
      const e = n.dyn_tree;
      const i = n.stat_desc.static_tree;
      const s = n.stat_desc.has_stree;
      const o = n.stat_desc.elems;
      let r;
      let a;
      let u;
      let c = -1;
      t.heap_len = 0;
      t.heap_max = 573;
      r = 0;
      for (; r < o; r++) {
        if (e[r * 2] !== 0) {
          t.heap[++t.heap_len] = c = r;
          t.depth[r] = 0;
        } else {
          e[r * 2 + 1] = 0;
        }
      }
      while (t.heap_len < 2) {
        u = t.heap[++t.heap_len] = c < 2 ? ++c : 0;
        e[u * 2] = 1;
        t.depth[u] = 0;
        t.opt_len--;
        if (s) {
          t.static_len -= i[u * 2 + 1];
        }
      }
      n.max_code = c;
      r = t.heap_len >> 1;
      for (; r >= 1; r--) {
        q(t, e, r);
      }
      u = o;
      do {
        r = t.heap[1];
        t.heap[1] = t.heap[t.heap_len--];
        q(t, e, 1);
        a = t.heap[1];
        t.heap[--t.heap_max] = r;
        t.heap[--t.heap_max] = a;
        e[u * 2] = e[r * 2] + e[a * 2];
        t.depth[u] = (t.depth[r] >= t.depth[a] ? t.depth[r] : t.depth[a]) + 1;
        e[r * 2 + 1] = e[a * 2 + 1] = u;
        t.heap[1] = u++;
        q(t, e, 1);
      } while (t.heap_len >= 2);
      t.heap[--t.heap_max] = t.heap[1];
      ((t, n) => {
        const e = n.dyn_tree;
        const i = n.max_code;
        const s = n.stat_desc.static_tree;
        const o = n.stat_desc.has_stree;
        const r = n.stat_desc.extra_bits;
        const a = n.stat_desc.extra_base;
        const u = n.stat_desc.max_length;
        let c;
        let h;
        let l;
        let d;
        let p;
        let f;
        let D = 0;
        for (d = 0; d <= k; d++) {
          t.bl_count[d] = 0;
        }
        e[t.heap[t.heap_max] * 2 + 1] = 0;
        c = t.heap_max + 1;
        for (; c < 573; c++) {
          h = t.heap[c];
          d = e[e[h * 2 + 1] * 2 + 1] + 1;
          if (d > u) {
            d = u;
            D++;
          }
          e[h * 2 + 1] = d;
          if (!(h > i)) {
            t.bl_count[d]++;
            p = 0;
            if (h >= a) {
              p = r[h - a];
            }
            f = e[h * 2];
            t.opt_len += f * (d + p);
            if (o) {
              t.static_len += f * (s[h * 2 + 1] + p);
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
            for (h = t.bl_count[d]; h !== 0;) {
              l = t.heap[--c];
              if (!(l > i)) {
                if (e[l * 2 + 1] !== d) {
                  t.opt_len += (d - e[l * 2 + 1]) * e[l * 2];
                  e[l * 2 + 1] = d;
                }
                h--;
              }
            }
          }
        }
      })(t, n);
      W(e, c, t.bl_count);
    };
    const nt = (t, n, e) => {
      let i;
      let s;
      let o = -1;
      let r = n[1];
      let a = 0;
      let u = 7;
      let c = 4;
      if (r === 0) {
        u = 138;
        c = 3;
      }
      n[(e + 1) * 2 + 1] = 65535;
      i = 0;
      for (; i <= e; i++) {
        s = r;
        r = n[(i + 1) * 2 + 1];
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
    const et = (t, n, e) => {
      let i;
      let s;
      let o = -1;
      let r = n[1];
      let a = 0;
      let u = 7;
      let c = 4;
      if (r === 0) {
        u = 138;
        c = 3;
      }
      i = 0;
      for (; i <= e; i++) {
        s = r;
        r = n[(i + 1) * 2 + 1];
        if (!(++a < u) || s !== r) {
          if (a < c) {
            do {
              Z(t, s, t.bl_tree);
            } while (--a !== 0);
          } else if (s !== 0) {
            if (s !== o) {
              Z(t, s, t.bl_tree);
              a--;
            }
            Z(t, 16, t.bl_tree);
            z(t, a - 3, 2);
          } else if (a <= 10) {
            Z(t, 17, t.bl_tree);
            z(t, a - 3, 3);
          } else {
            Z(t, 18, t.bl_tree);
            z(t, a - 11, 7);
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
    let it = false;
    const st = (t, n, e, i) => {
      z(t, 0 + (i ? 1 : 0), 3);
      J(t);
      G(t, e);
      G(t, ~e);
      if (e) {
        t.pending_buf.set(t.window.subarray(n, n + e), t.pending);
      }
      t.pending += e;
    };
    var ot = (t, n, e, i) => {
      let s;
      let o;
      let r = 0;
      if (t.level > 0) {
        if (t.strm.data_type === 2) {
          t.strm.data_type = (t => {
            let n;
            let e = 4093624447;
            for (n = 0; n <= 31; n++, e >>>= 1) {
              if (e & 1 && t.dyn_ltree[n * 2] !== 0) {
                return 0;
              }
            }
            if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) {
              return 1;
            }
            for (n = 32; n < _; n++) {
              if (t.dyn_ltree[n * 2] !== 0) {
                return 1;
              }
            }
            return 0;
          })(t);
        }
        tt(t, t.l_desc);
        tt(t, t.d_desc);
        r = (t => {
          let n;
          nt(t, t.dyn_ltree, t.l_desc.max_code);
          nt(t, t.dyn_dtree, t.d_desc.max_code);
          tt(t, t.bl_desc);
          n = 18;
          for (; n >= 3 && t.bl_tree[S[n] * 2 + 1] === 0; n--);
          t.opt_len += (n + 1) * 3 + 5 + 5 + 4;
          return n;
        })(t);
        s = t.opt_len + 3 + 7 >>> 3;
        o = t.static_len + 3 + 7 >>> 3;
        if (o <= s) {
          s = o;
        }
      } else {
        s = o = e + 5;
      }
      if (e + 4 <= s && n !== -1) {
        st(t, n, e, i);
      } else if (t.strategy === 4 || o === s) {
        z(t, 2 + (i ? 1 : 0), 3);
        X(t, j, $);
      } else {
        z(t, 4 + (i ? 1 : 0), 3);
        ((t, n, e, i) => {
          let s;
          z(t, n - 257, 5);
          z(t, e - 1, 5);
          z(t, i - 4, 4);
          s = 0;
          for (; s < i; s++) {
            z(t, t.bl_tree[S[s] * 2 + 1], 3);
          }
          et(t, t.dyn_ltree, n - 1);
          et(t, t.dyn_dtree, e - 1);
        })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, r + 1);
        X(t, t.dyn_ltree, t.dyn_dtree);
      }
      Y(t);
      if (i) {
        J(t);
      }
    };
    var rt = {
      m: t => {
        if (!it) {
          (() => {
            let t;
            let n;
            let e;
            let i;
            let s;
            const o = new Array(16);
            e = 0;
            i = 0;
            for (; i < 28; i++) {
              M[i] = e;
              t = 0;
              for (; t < 1 << A[i]; t++) {
                P[e++] = i;
              }
            }
            P[e - 1] = i;
            s = 0;
            i = 0;
            for (; i < 16; i++) {
              L[i] = s;
              t = 0;
              for (; t < 1 << I[i]; t++) {
                T[s++] = i;
              }
            }
            for (s >>= 7; i < x; i++) {
              L[i] = s << 7;
              t = 0;
              for (; t < 1 << I[i] - 7; t++) {
                T[256 + s++] = i;
              }
            }
            for (n = 0; n <= k; n++) {
              o[n] = 0;
            }
            for (t = 0; t <= 143;) {
              j[t * 2 + 1] = 8;
              t++;
              o[8]++;
            }
            while (t <= 255) {
              j[t * 2 + 1] = 9;
              t++;
              o[9]++;
            }
            while (t <= 279) {
              j[t * 2 + 1] = 7;
              t++;
              o[7]++;
            }
            while (t <= 287) {
              j[t * 2 + 1] = 8;
              t++;
              o[8]++;
            }
            W(j, 287, o);
            t = 0;
            for (; t < x; t++) {
              $[t * 2 + 1] = 5;
              $[t * 2] = Q(t, 5);
            }
            O = new R(j, A, 257, E, k);
            V = new R($, I, 0, x, k);
            U = new R(new Array(0), B, 0, 19, 7);
          })();
          it = true;
        }
        t.l_desc = new H(t.dyn_ltree, O);
        t.d_desc = new H(t.dyn_dtree, V);
        t.bl_desc = new H(t.bl_tree, U);
        t.bi_buf = 0;
        t.bi_valid = 0;
        Y(t);
      },
      C: st,
      F: ot,
      _: (t, n, e) => {
        t.pending_buf[t.sym_buf + t.sym_next++] = n;
        t.pending_buf[t.sym_buf + t.sym_next++] = n >> 8;
        t.pending_buf[t.sym_buf + t.sym_next++] = e;
        if (n === 0) {
          t.dyn_ltree[e * 2]++;
        } else {
          t.matches++;
          n--;
          t.dyn_ltree[(P[e] + _ + 1) * 2]++;
          t.dyn_dtree[N(n) * 2]++;
        }
        return t.sym_next === t.sym_end;
      },
      k: t => {
        z(t, 2, 3);
        Z(t, 256, j);
        (t => {
          if (t.bi_valid === 16) {
            G(t, t.bi_buf);
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
    var at = (t, n, e, i) => {
      let s = t & 65535;
      let o = t >>> 16 & 65535;
      let r = 0;
      while (e !== 0) {
        r = e > 2000 ? 2000 : e;
        e -= r;
        do {
          s = s + n[i++] | 0;
          o = o + s | 0;
        } while (--r);
        s %= 65521;
        o %= 65521;
      }
      return s | o << 16;
    };
    const ut = new Uint32Array((() => {
      let t;
      let n = [];
      for (var e = 0; e < 256; e++) {
        t = e;
        for (var i = 0; i < 8; i++) {
          t = t & 1 ? t >>> 1 ^ -306674912 : t >>> 1;
        }
        n[e] = t;
      }
      return n;
    })());
    var ct = (t, n, e, i) => {
      const s = ut;
      const o = i + e;
      t ^= -1;
      for (let e = i; e < o; e++) {
        t = t >>> 8 ^ s[(t ^ n[e]) & 255];
      }
      return t ^ -1;
    };
    var ht = {
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
    var lt = {
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
      m: dt,
      C: pt,
      F: ft,
      _: Dt,
      k: vt
    } = rt;
    const {
      Z_NO_FLUSH: gt,
      Z_PARTIAL_FLUSH: mt,
      Z_FULL_FLUSH: wt,
      Z_FINISH: yt,
      Z_BLOCK: bt,
      Z_OK: Ct,
      Z_STREAM_END: Ft,
      Z_STREAM_ERROR: _t,
      Z_DATA_ERROR: Et,
      Z_BUF_ERROR: xt,
      Z_DEFAULT_COMPRESSION: kt,
      Z_FILTERED: At,
      Z_HUFFMAN_ONLY: It,
      Z_RLE: Bt,
      Z_FIXED: St,
      Z_DEFAULT_STRATEGY: jt,
      Z_UNKNOWN: $t,
      Z_DEFLATED: Tt
    } = lt;
    const Pt = 258;
    const Mt = 262;
    const Lt = 42;
    const Rt = 113;
    const Ot = 666;
    const Vt = (t, n) => {
      t.msg = ht[n];
      return n;
    };
    const Ut = t => t * 2 - (t > 4 ? 9 : 0);
    const Ht = t => {
      let n = t.length;
      while (--n >= 0) {
        t[n] = 0;
      }
    };
    const Nt = t => {
      let n;
      let e;
      let i;
      let s = t.w_size;
      n = t.hash_size;
      i = n;
      do {
        e = t.head[--i];
        t.head[i] = e >= s ? e - s : 0;
      } while (--n);
      n = s;
      i = n;
      do {
        e = t.prev[--i];
        t.prev[i] = e >= s ? e - s : 0;
      } while (--n);
    };
    let Gt = (t, n, e) => (n << t.hash_shift ^ e) & t.hash_mask;
    const zt = t => {
      const n = t.state;
      let e = n.pending;
      if (e > t.avail_out) {
        e = t.avail_out;
      }
      if (e !== 0) {
        t.output.set(n.pending_buf.subarray(n.pending_out, n.pending_out + e), t.next_out);
        t.next_out += e;
        n.pending_out += e;
        t.total_out += e;
        t.avail_out -= e;
        n.pending -= e;
        if (n.pending === 0) {
          n.pending_out = 0;
        }
      }
    };
    const Zt = (t, n) => {
      ft(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, n);
      t.block_start = t.strstart;
      zt(t.strm);
    };
    const Qt = (t, n) => {
      t.pending_buf[t.pending++] = n;
    };
    const Wt = (t, n) => {
      t.pending_buf[t.pending++] = n >>> 8 & 255;
      t.pending_buf[t.pending++] = n & 255;
    };
    const Yt = (t, n, e, i) => {
      let s = t.avail_in;
      if (s > i) {
        s = i;
      }
      if (s === 0) {
        return 0;
      } else {
        t.avail_in -= s;
        n.set(t.input.subarray(t.next_in, t.next_in + s), e);
        if (t.state.wrap === 1) {
          t.adler = at(t.adler, n, s, e);
        } else if (t.state.wrap === 2) {
          t.adler = ct(t.adler, n, s, e);
        }
        t.next_in += s;
        t.total_in += s;
        return s;
      }
    };
    const Jt = (t, n) => {
      let e;
      let i;
      let s = t.max_chain_length;
      let o = t.strstart;
      let r = t.prev_length;
      let a = t.nice_match;
      const u = t.strstart > t.w_size - Mt ? t.strstart - (t.w_size - Mt) : 0;
      const c = t.window;
      const h = t.w_mask;
      const l = t.prev;
      const d = t.strstart + Pt;
      let p = c[o + r - 1];
      let f = c[o + r];
      if (t.prev_length >= t.good_match) {
        s >>= 2;
      }
      if (a > t.lookahead) {
        a = t.lookahead;
      }
      do {
        e = n;
        if (c[e + r] === f && c[e + r - 1] === p && c[e] === c[o] && c[++e] === c[o + 1]) {
          o += 2;
          e++;
          do {} while (c[++o] === c[++e] && c[++o] === c[++e] && c[++o] === c[++e] && c[++o] === c[++e] && c[++o] === c[++e] && c[++o] === c[++e] && c[++o] === c[++e] && c[++o] === c[++e] && o < d);
          i = Pt - (d - o);
          o = d - Pt;
          if (i > r) {
            t.match_start = n;
            r = i;
            if (i >= a) {
              break;
            }
            p = c[o + r - 1];
            f = c[o + r];
          }
        }
      } while ((n = l[n & h]) > u && --s !== 0);
      if (r <= t.lookahead) {
        return r;
      } else {
        return t.lookahead;
      }
    };
    const Kt = t => {
      const n = t.w_size;
      let e;
      let i;
      let s;
      do {
        i = t.window_size - t.lookahead - t.strstart;
        if (t.strstart >= n + (n - Mt)) {
          t.window.set(t.window.subarray(n, n + n - i), 0);
          t.match_start -= n;
          t.strstart -= n;
          t.block_start -= n;
          if (t.insert > t.strstart) {
            t.insert = t.strstart;
          }
          Nt(t);
          i += n;
        }
        if (t.strm.avail_in === 0) {
          break;
        }
        e = Yt(t.strm, t.window, t.strstart + t.lookahead, i);
        t.lookahead += e;
        if (t.lookahead + t.insert >= 3) {
          s = t.strstart - t.insert;
          t.ins_h = t.window[s];
          t.ins_h = Gt(t, t.ins_h, t.window[s + 1]);
          while (t.insert && (t.ins_h = Gt(t, t.ins_h, t.window[s + 3 - 1]), t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < 3)));
        }
      } while (t.lookahead < Mt && t.strm.avail_in !== 0);
    };
    const qt = (t, n) => {
      let e;
      let i;
      let s;
      let o = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5;
      let r = 0;
      let a = t.strm.avail_in;
      do {
        e = 65535;
        s = t.bi_valid + 42 >> 3;
        if (t.strm.avail_out < s) {
          break;
        }
        s = t.strm.avail_out - s;
        i = t.strstart - t.block_start;
        if (e > i + t.strm.avail_in) {
          e = i + t.strm.avail_in;
        }
        if (e > s) {
          e = s;
        }
        if (e < o && (e === 0 && n !== yt || n === gt || e !== i + t.strm.avail_in)) {
          break;
        }
        r = n === yt && e === i + t.strm.avail_in ? 1 : 0;
        pt(t, 0, 0, r);
        t.pending_buf[t.pending - 4] = e;
        t.pending_buf[t.pending - 3] = e >> 8;
        t.pending_buf[t.pending - 2] = ~e;
        t.pending_buf[t.pending - 1] = ~e >> 8;
        zt(t.strm);
        if (i) {
          if (i > e) {
            i = e;
          }
          t.strm.output.set(t.window.subarray(t.block_start, t.block_start + i), t.strm.next_out);
          t.strm.next_out += i;
          t.strm.avail_out -= i;
          t.strm.total_out += i;
          t.block_start += i;
          e -= i;
        }
        if (e) {
          Yt(t.strm, t.strm.output, t.strm.next_out, e);
          t.strm.next_out += e;
          t.strm.avail_out -= e;
          t.strm.total_out += e;
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
      } else if (n !== gt && n !== yt && t.strm.avail_in === 0 && t.strstart === t.block_start) {
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
          Yt(t.strm, t.window, t.strstart, s);
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
        if (i >= o || (i || n === yt) && n !== gt && t.strm.avail_in === 0 && i <= s) {
          e = i > s ? s : i;
          r = n === yt && t.strm.avail_in === 0 && e === i ? 1 : 0;
          pt(t, t.block_start, e, r);
          t.block_start += e;
          zt(t.strm);
        }
        if (r) {
          return 3;
        } else {
          return 1;
        }
      }
    };
    const Xt = (t, n) => {
      let e;
      let i;
      while (true) {
        if (t.lookahead < Mt) {
          Kt(t);
          if (t.lookahead < Mt && n === gt) {
            return 1;
          }
          if (t.lookahead === 0) {
            break;
          }
        }
        e = 0;
        if (t.lookahead >= 3) {
          t.ins_h = Gt(t, t.ins_h, t.window[t.strstart + 3 - 1]);
          e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
          t.head[t.ins_h] = t.strstart;
        }
        if (e !== 0 && t.strstart - e <= t.w_size - Mt) {
          t.match_length = Jt(t, e);
        }
        if (t.match_length >= 3) {
          i = Dt(t, t.strstart - t.match_start, t.match_length - 3);
          t.lookahead -= t.match_length;
          if (t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
            t.match_length--;
            do {
              t.strstart++;
              t.ins_h = Gt(t, t.ins_h, t.window[t.strstart + 3 - 1]);
              e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
              t.head[t.ins_h] = t.strstart;
            } while (--t.match_length !== 0);
            t.strstart++;
          } else {
            t.strstart += t.match_length;
            t.match_length = 0;
            t.ins_h = t.window[t.strstart];
            t.ins_h = Gt(t, t.ins_h, t.window[t.strstart + 1]);
          }
        } else {
          i = Dt(t, 0, t.window[t.strstart]);
          t.lookahead--;
          t.strstart++;
        }
        if (i && (Zt(t, false), t.strm.avail_out === 0)) {
          return 1;
        }
      }
      t.insert = t.strstart < 2 ? t.strstart : 2;
      if (n === yt) {
        Zt(t, true);
        if (t.strm.avail_out === 0) {
          return 3;
        } else {
          return 4;
        }
      } else if (t.sym_next && (Zt(t, false), t.strm.avail_out === 0)) {
        return 1;
      } else {
        return 2;
      }
    };
    const tn = (t, n) => {
      let e;
      let i;
      let s;
      while (true) {
        if (t.lookahead < Mt) {
          Kt(t);
          if (t.lookahead < Mt && n === gt) {
            return 1;
          }
          if (t.lookahead === 0) {
            break;
          }
        }
        e = 0;
        if (t.lookahead >= 3) {
          t.ins_h = Gt(t, t.ins_h, t.window[t.strstart + 3 - 1]);
          e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
          t.head[t.ins_h] = t.strstart;
        }
        t.prev_length = t.match_length;
        t.prev_match = t.match_start;
        t.match_length = 2;
        if (e !== 0 && t.prev_length < t.max_lazy_match && t.strstart - e <= t.w_size - Mt) {
          t.match_length = Jt(t, e);
          if (t.match_length <= 5 && (t.strategy === At || t.match_length === 3 && t.strstart - t.match_start > 4096)) {
            t.match_length = 2;
          }
        }
        if (t.prev_length >= 3 && t.match_length <= t.prev_length) {
          s = t.strstart + t.lookahead - 3;
          i = Dt(t, t.strstart - 1 - t.prev_match, t.prev_length - 3);
          t.lookahead -= t.prev_length - 1;
          t.prev_length -= 2;
          do {
            if (++t.strstart <= s) {
              t.ins_h = Gt(t, t.ins_h, t.window[t.strstart + 3 - 1]);
              e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
              t.head[t.ins_h] = t.strstart;
            }
          } while (--t.prev_length !== 0);
          t.match_available = 0;
          t.match_length = 2;
          t.strstart++;
          if (i && (Zt(t, false), t.strm.avail_out === 0)) {
            return 1;
          }
        } else if (t.match_available) {
          i = Dt(t, 0, t.window[t.strstart - 1]);
          if (i) {
            Zt(t, false);
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
        i = Dt(t, 0, t.window[t.strstart - 1]);
        t.match_available = 0;
      }
      t.insert = t.strstart < 2 ? t.strstart : 2;
      if (n === yt) {
        Zt(t, true);
        if (t.strm.avail_out === 0) {
          return 3;
        } else {
          return 4;
        }
      } else if (t.sym_next && (Zt(t, false), t.strm.avail_out === 0)) {
        return 1;
      } else {
        return 2;
      }
    };
    function nn(t, n, e, i, s) {
      this.good_length = t;
      this.max_lazy = n;
      this.nice_length = e;
      this.max_chain = i;
      this.func = s;
    }
    const en = [new nn(0, 0, 0, 0, qt), new nn(4, 4, 8, 4, Xt), new nn(4, 5, 16, 8, Xt), new nn(4, 6, 32, 32, Xt), new nn(4, 4, 16, 16, tn), new nn(8, 16, 32, 32, tn), new nn(8, 16, 128, 128, tn), new nn(8, 32, 128, 256, tn), new nn(32, 128, 258, 1024, tn), new nn(32, 258, 258, 4096, tn)];
    function sn() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Tt;
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
      Ht(this.dyn_ltree);
      Ht(this.dyn_dtree);
      Ht(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(16);
      this.heap = new Uint16Array(573);
      Ht(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(573);
      Ht(this.depth);
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
    const on = t => {
      if (!t) {
        return 1;
      }
      const n = t.state;
      if (!n || n.strm !== t || n.status !== Lt && n.status !== 57 && n.status !== 69 && n.status !== 73 && n.status !== 91 && n.status !== 103 && n.status !== Rt && n.status !== Ot) {
        return 1;
      } else {
        return 0;
      }
    };
    const rn = t => {
      if (on(t)) {
        return Vt(t, _t);
      }
      t.total_in = t.total_out = 0;
      t.data_type = $t;
      const n = t.state;
      n.pending = 0;
      n.pending_out = 0;
      if (n.wrap < 0) {
        n.wrap = -n.wrap;
      }
      n.status = n.wrap === 2 ? 57 : n.wrap ? Lt : Rt;
      t.adler = n.wrap === 2 ? 0 : 1;
      n.last_flush = -2;
      dt(n);
      return Ct;
    };
    const an = t => {
      const n = rn(t);
      var e;
      if (n === Ct) {
        (e = t.state).window_size = e.w_size * 2;
        Ht(e.head);
        e.max_lazy_match = en[e.level].max_lazy;
        e.good_match = en[e.level].good_length;
        e.nice_match = en[e.level].nice_length;
        e.max_chain_length = en[e.level].max_chain;
        e.strstart = 0;
        e.block_start = 0;
        e.lookahead = 0;
        e.insert = 0;
        e.match_length = e.prev_length = 2;
        e.match_available = 0;
        e.ins_h = 0;
      }
      return n;
    };
    const un = (t, n, e, i, s, o) => {
      if (!t) {
        return _t;
      }
      let r = 1;
      if (n === kt) {
        n = 6;
      }
      if (i < 0) {
        r = 0;
        i = -i;
      } else if (i > 15) {
        r = 2;
        i -= 16;
      }
      if (s < 1 || s > 9 || e !== Tt || i < 8 || i > 15 || n < 0 || n > 9 || o < 0 || o > St || i === 8 && r !== 1) {
        return Vt(t, _t);
      }
      if (i === 8) {
        i = 9;
      }
      const a = new sn();
      t.state = a;
      a.strm = t;
      a.status = Lt;
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
      a.level = n;
      a.strategy = o;
      a.method = e;
      return an(t);
    };
    var cn = {
      deflateInit: (t, n) => un(t, n, Tt, 15, 8, jt),
      deflateInit2: un,
      deflateReset: an,
      deflateResetKeep: rn,
      deflateSetHeader: (t, n) => on(t) || t.state.wrap !== 2 ? _t : (t.state.gzhead = n, Ct),
      deflate: (t, n) => {
        if (on(t) || n > bt || n < 0) {
          if (t) {
            return Vt(t, _t);
          } else {
            return _t;
          }
        }
        const e = t.state;
        if (!t.output || t.avail_in !== 0 && !t.input || e.status === Ot && n !== yt) {
          return Vt(t, t.avail_out === 0 ? xt : _t);
        }
        const i = e.last_flush;
        e.last_flush = n;
        if (e.pending !== 0) {
          zt(t);
          if (t.avail_out === 0) {
            e.last_flush = -1;
            return Ct;
          }
        } else if (t.avail_in === 0 && Ut(n) <= Ut(i) && n !== yt) {
          return Vt(t, xt);
        }
        if (e.status === Ot && t.avail_in !== 0) {
          return Vt(t, xt);
        }
        if (e.status === Lt && e.wrap === 0) {
          e.status = Rt;
        }
        if (e.status === Lt) {
          let n = Tt + (e.w_bits - 8 << 4) << 8;
          let i = -1;
          i = e.strategy >= It || e.level < 2 ? 0 : e.level < 6 ? 1 : e.level === 6 ? 2 : 3;
          n |= i << 6;
          if (e.strstart !== 0) {
            n |= 32;
          }
          n += 31 - n % 31;
          Wt(e, n);
          if (e.strstart !== 0) {
            Wt(e, t.adler >>> 16);
            Wt(e, t.adler & 65535);
          }
          t.adler = 1;
          e.status = Rt;
          zt(t);
          if (e.pending !== 0) {
            e.last_flush = -1;
            return Ct;
          }
        }
        if (e.status === 57) {
          t.adler = 0;
          Qt(e, 31);
          Qt(e, 139);
          Qt(e, 8);
          if (e.gzhead) {
            Qt(e, (e.gzhead.text ? 1 : 0) + (e.gzhead.hcrc ? 2 : 0) + (e.gzhead.extra ? 4 : 0) + (e.gzhead.name ? 8 : 0) + (e.gzhead.comment ? 16 : 0));
            Qt(e, e.gzhead.time & 255);
            Qt(e, e.gzhead.time >> 8 & 255);
            Qt(e, e.gzhead.time >> 16 & 255);
            Qt(e, e.gzhead.time >> 24 & 255);
            Qt(e, e.level === 9 ? 2 : e.strategy >= It || e.level < 2 ? 4 : 0);
            Qt(e, e.gzhead.os & 255);
            if (e.gzhead.extra && e.gzhead.extra.length) {
              Qt(e, e.gzhead.extra.length & 255);
              Qt(e, e.gzhead.extra.length >> 8 & 255);
            }
            if (e.gzhead.hcrc) {
              t.adler = ct(t.adler, e.pending_buf, e.pending, 0);
            }
            e.gzindex = 0;
            e.status = 69;
          } else {
            Qt(e, 0);
            Qt(e, 0);
            Qt(e, 0);
            Qt(e, 0);
            Qt(e, 0);
            Qt(e, e.level === 9 ? 2 : e.strategy >= It || e.level < 2 ? 4 : 0);
            Qt(e, 3);
            e.status = Rt;
            zt(t);
            if (e.pending !== 0) {
              e.last_flush = -1;
              return Ct;
            }
          }
        }
        if (e.status === 69) {
          if (e.gzhead.extra) {
            let n = e.pending;
            let i = (e.gzhead.extra.length & 65535) - e.gzindex;
            while (e.pending + i > e.pending_buf_size) {
              let s = e.pending_buf_size - e.pending;
              e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex, e.gzindex + s), e.pending);
              e.pending = e.pending_buf_size;
              if (e.gzhead.hcrc && e.pending > n) {
                t.adler = ct(t.adler, e.pending_buf, e.pending - n, n);
              }
              e.gzindex += s;
              zt(t);
              if (e.pending !== 0) {
                e.last_flush = -1;
                return Ct;
              }
              n = 0;
              i -= s;
            }
            let s = new Uint8Array(e.gzhead.extra);
            e.pending_buf.set(s.subarray(e.gzindex, e.gzindex + i), e.pending);
            e.pending += i;
            if (e.gzhead.hcrc && e.pending > n) {
              t.adler = ct(t.adler, e.pending_buf, e.pending - n, n);
            }
            e.gzindex = 0;
          }
          e.status = 73;
        }
        if (e.status === 73) {
          if (e.gzhead.name) {
            let n;
            let i = e.pending;
            do {
              if (e.pending === e.pending_buf_size) {
                if (e.gzhead.hcrc && e.pending > i) {
                  t.adler = ct(t.adler, e.pending_buf, e.pending - i, i);
                }
                zt(t);
                if (e.pending !== 0) {
                  e.last_flush = -1;
                  return Ct;
                }
                i = 0;
              }
              n = e.gzindex < e.gzhead.name.length ? e.gzhead.name.charCodeAt(e.gzindex++) & 255 : 0;
              Qt(e, n);
            } while (n !== 0);
            if (e.gzhead.hcrc && e.pending > i) {
              t.adler = ct(t.adler, e.pending_buf, e.pending - i, i);
            }
            e.gzindex = 0;
          }
          e.status = 91;
        }
        if (e.status === 91) {
          if (e.gzhead.comment) {
            let n;
            let i = e.pending;
            do {
              if (e.pending === e.pending_buf_size) {
                if (e.gzhead.hcrc && e.pending > i) {
                  t.adler = ct(t.adler, e.pending_buf, e.pending - i, i);
                }
                zt(t);
                if (e.pending !== 0) {
                  e.last_flush = -1;
                  return Ct;
                }
                i = 0;
              }
              n = e.gzindex < e.gzhead.comment.length ? e.gzhead.comment.charCodeAt(e.gzindex++) & 255 : 0;
              Qt(e, n);
            } while (n !== 0);
            if (e.gzhead.hcrc && e.pending > i) {
              t.adler = ct(t.adler, e.pending_buf, e.pending - i, i);
            }
          }
          e.status = 103;
        }
        if (e.status === 103) {
          if (e.gzhead.hcrc) {
            if (e.pending + 2 > e.pending_buf_size && (zt(t), e.pending !== 0)) {
              e.last_flush = -1;
              return Ct;
            }
            Qt(e, t.adler & 255);
            Qt(e, t.adler >> 8 & 255);
            t.adler = 0;
          }
          e.status = Rt;
          zt(t);
          if (e.pending !== 0) {
            e.last_flush = -1;
            return Ct;
          }
        }
        if (t.avail_in !== 0 || e.lookahead !== 0 || n !== gt && e.status !== Ot) {
          let i = e.level === 0 ? qt(e, n) : e.strategy === It ? ((t, n) => {
            let e;
            while (true) {
              if (t.lookahead === 0 && (Kt(t), t.lookahead === 0)) {
                if (n === gt) {
                  return 1;
                }
                break;
              }
              t.match_length = 0;
              e = Dt(t, 0, t.window[t.strstart]);
              t.lookahead--;
              t.strstart++;
              if (e && (Zt(t, false), t.strm.avail_out === 0)) {
                return 1;
              }
            }
            t.insert = 0;
            if (n === yt) {
              Zt(t, true);
              if (t.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (t.sym_next && (Zt(t, false), t.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          })(e, n) : e.strategy === Bt ? ((t, n) => {
            let e;
            let i;
            let s;
            let o;
            const r = t.window;
            while (true) {
              if (t.lookahead <= Pt) {
                Kt(t);
                if (t.lookahead <= Pt && n === gt) {
                  return 1;
                }
                if (t.lookahead === 0) {
                  break;
                }
              }
              t.match_length = 0;
              if (t.lookahead >= 3 && t.strstart > 0 && (s = t.strstart - 1, i = r[s], i === r[++s] && i === r[++s] && i === r[++s])) {
                o = t.strstart + Pt;
                do {} while (i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && i === r[++s] && s < o);
                t.match_length = Pt - (o - s);
                if (t.match_length > t.lookahead) {
                  t.match_length = t.lookahead;
                }
              }
              if (t.match_length >= 3) {
                e = Dt(t, 1, t.match_length - 3);
                t.lookahead -= t.match_length;
                t.strstart += t.match_length;
                t.match_length = 0;
              } else {
                e = Dt(t, 0, t.window[t.strstart]);
                t.lookahead--;
                t.strstart++;
              }
              if (e && (Zt(t, false), t.strm.avail_out === 0)) {
                return 1;
              }
            }
            t.insert = 0;
            if (n === yt) {
              Zt(t, true);
              if (t.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (t.sym_next && (Zt(t, false), t.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          })(e, n) : en[e.level].func(e, n);
          if (i === 3 || i === 4) {
            e.status = Ot;
          }
          if (i === 1 || i === 3) {
            if (t.avail_out === 0) {
              e.last_flush = -1;
            }
            return Ct;
          }
          if (i === 2 && (n === mt ? vt(e) : n !== bt && (pt(e, 0, 0, false), n === wt && (Ht(e.head), e.lookahead === 0 && (e.strstart = 0, e.block_start = 0, e.insert = 0))), zt(t), t.avail_out === 0)) {
            e.last_flush = -1;
            return Ct;
          }
        }
        if (n !== yt) {
          return Ct;
        } else if (e.wrap <= 0) {
          return Ft;
        } else {
          if (e.wrap === 2) {
            Qt(e, t.adler & 255);
            Qt(e, t.adler >> 8 & 255);
            Qt(e, t.adler >> 16 & 255);
            Qt(e, t.adler >> 24 & 255);
            Qt(e, t.total_in & 255);
            Qt(e, t.total_in >> 8 & 255);
            Qt(e, t.total_in >> 16 & 255);
            Qt(e, t.total_in >> 24 & 255);
          } else {
            Wt(e, t.adler >>> 16);
            Wt(e, t.adler & 65535);
          }
          zt(t);
          if (e.wrap > 0) {
            e.wrap = -e.wrap;
          }
          if (e.pending !== 0) {
            return Ct;
          } else {
            return Ft;
          }
        }
      },
      deflateEnd: t => {
        if (on(t)) {
          return _t;
        }
        const n = t.state.status;
        t.state = null;
        if (n === Rt) {
          return Vt(t, Et);
        } else {
          return Ct;
        }
      },
      deflateSetDictionary: (t, n) => {
        let e = n.length;
        if (on(t)) {
          return _t;
        }
        const i = t.state;
        const s = i.wrap;
        if (s === 2 || s === 1 && i.status !== Lt || i.lookahead) {
          return _t;
        }
        if (s === 1) {
          t.adler = at(t.adler, n, e, 0);
        }
        i.wrap = 0;
        if (e >= i.w_size) {
          if (s === 0) {
            Ht(i.head);
            i.strstart = 0;
            i.block_start = 0;
            i.insert = 0;
          }
          let t = new Uint8Array(i.w_size);
          t.set(n.subarray(e - i.w_size, e), 0);
          n = t;
          e = i.w_size;
        }
        const o = t.avail_in;
        const r = t.next_in;
        const a = t.input;
        t.avail_in = e;
        t.next_in = 0;
        t.input = n;
        Kt(i);
        while (i.lookahead >= 3) {
          let t = i.strstart;
          let n = i.lookahead - 2;
          do {
            i.ins_h = Gt(i, i.ins_h, i.window[t + 3 - 1]);
            i.prev[t & i.w_mask] = i.head[i.ins_h];
            i.head[i.ins_h] = t;
            t++;
          } while (--n);
          i.strstart = t;
          i.lookahead = 2;
          Kt(i);
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
        return Ct;
      },
      deflateInfo: "pako deflate (from Nodeca project)"
    };
    const hn = (t, n) => Object.prototype.hasOwnProperty.call(t, n);
    function ln(t) {
      const n = Array.prototype.slice.call(arguments, 1);
      while (n.length) {
        const e = n.shift();
        if (e) {
          if (typeof e != "object") {
            throw new TypeError(e + "must be non-object");
          }
          for (const n in e) {
            if (hn(e, n)) {
              t[n] = e[n];
            }
          }
        }
      }
      return t;
    }
    var dn = t => {
      let n = 0;
      for (let e = 0, i = t.length; e < i; e++) {
        n += t[e].length;
      }
      const e = new Uint8Array(n);
      for (let n = 0, i = 0, s = t.length; n < s; n++) {
        let s = t[n];
        e.set(s, i);
        i += s.length;
      }
      return e;
    };
    let pn = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
      pn = false;
    }
    const fn = new Uint8Array(256);
    for (let t = 0; t < 256; t++) {
      fn[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
    }
    fn[254] = fn[254] = 1;
    var Dn = t => {
      if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(t);
      }
      let n;
      let e;
      let i;
      let s;
      let o;
      let r = t.length;
      let a = 0;
      for (s = 0; s < r; s++) {
        e = t.charCodeAt(s);
        if ((e & 64512) == 55296 && s + 1 < r) {
          i = t.charCodeAt(s + 1);
          if ((i & 64512) == 56320) {
            e = 65536 + (e - 55296 << 10) + (i - 56320);
            s++;
          }
        }
        a += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
      }
      n = new Uint8Array(a);
      o = 0;
      s = 0;
      for (; o < a; s++) {
        e = t.charCodeAt(s);
        if ((e & 64512) == 55296 && s + 1 < r) {
          i = t.charCodeAt(s + 1);
          if ((i & 64512) == 56320) {
            e = 65536 + (e - 55296 << 10) + (i - 56320);
            s++;
          }
        }
        if (e < 128) {
          n[o++] = e;
        } else if (e < 2048) {
          n[o++] = e >>> 6 | 192;
          n[o++] = e & 63 | 128;
        } else if (e < 65536) {
          n[o++] = e >>> 12 | 224;
          n[o++] = e >>> 6 & 63 | 128;
          n[o++] = e & 63 | 128;
        } else {
          n[o++] = e >>> 18 | 240;
          n[o++] = e >>> 12 & 63 | 128;
          n[o++] = e >>> 6 & 63 | 128;
          n[o++] = e & 63 | 128;
        }
      }
      return n;
    };
    var vn = (t, n) => {
      const e = n || t.length;
      if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(t.subarray(0, n));
      }
      let i;
      let s;
      const o = new Array(e * 2);
      s = 0;
      i = 0;
      while (i < e) {
        let n = t[i++];
        if (n < 128) {
          o[s++] = n;
          continue;
        }
        let r = fn[n];
        if (r > 4) {
          o[s++] = 65533;
          i += r - 1;
        } else {
          for (n &= r === 2 ? 31 : r === 3 ? 15 : 7; r > 1 && i < e;) {
            n = n << 6 | t[i++] & 63;
            r--;
          }
          if (r > 1) {
            o[s++] = 65533;
          } else if (n < 65536) {
            o[s++] = n;
          } else {
            n -= 65536;
            o[s++] = n >> 10 & 1023 | 55296;
            o[s++] = n & 1023 | 56320;
          }
        }
      }
      return ((t, n) => {
        if (n < 65534 && t.subarray && pn) {
          return String.fromCharCode.apply(null, t.length === n ? t : t.subarray(0, n));
        }
        let e = "";
        for (let i = 0; i < n; i++) {
          e += String.fromCharCode(t[i]);
        }
        return e;
      })(o, s);
    };
    var gn = (t, n) => {
      if ((n = n || t.length) > t.length) {
        n = t.length;
      }
      let e = n - 1;
      while (e >= 0 && (t[e] & 192) == 128) {
        e--;
      }
      if (e < 0 || e === 0) {
        return n;
      } else if (e + fn[t[e]] > n) {
        return e;
      } else {
        return n;
      }
    };
    function mn() {
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
    const wn = Object.prototype.toString;
    const {
      Z_NO_FLUSH: yn,
      Z_SYNC_FLUSH: bn,
      Z_FULL_FLUSH: Cn,
      Z_FINISH: Fn,
      Z_OK: _n,
      Z_STREAM_END: En,
      Z_DEFAULT_COMPRESSION: xn,
      Z_DEFAULT_STRATEGY: kn,
      Z_DEFLATED: An
    } = lt;
    function In(t) {
      this.options = ln({
        level: xn,
        method: An,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: kn
      }, t || {});
      let n = this.options;
      if (n.raw && n.windowBits > 0) {
        n.windowBits = -n.windowBits;
      } else if (n.gzip && n.windowBits > 0 && n.windowBits < 16) {
        n.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new mn();
      this.strm.avail_out = 0;
      let e = cn.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
      if (e !== _n) {
        throw new Error(ht[e]);
      }
      if (n.header) {
        cn.deflateSetHeader(this.strm, n.header);
      }
      if (n.dictionary) {
        let t;
        t = typeof n.dictionary == "string" ? Dn(n.dictionary) : wn.call(n.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(n.dictionary) : n.dictionary;
        e = cn.deflateSetDictionary(this.strm, t);
        if (e !== _n) {
          throw new Error(ht[e]);
        }
        this.A = true;
      }
    }
    function Bn(t, n) {
      const e = new In(n);
      e.push(t, true);
      if (e.err) {
        throw e.msg || ht[e.err];
      }
      return e.result;
    }
    In.prototype.push = function (t, n) {
      const e = this.strm;
      const i = this.options.chunkSize;
      let s;
      let o;
      if (this.ended) {
        return false;
      }
      o = n === ~~n ? n : n === true ? Fn : yn;
      if (typeof t == "string") {
        e.input = Dn(t);
      } else if (wn.call(t) === "[object ArrayBuffer]") {
        e.input = new Uint8Array(t);
      } else {
        e.input = t;
      }
      e.next_in = 0;
      e.avail_in = e.input.length;
      while (true) {
        if (e.avail_out === 0) {
          e.output = new Uint8Array(i);
          e.next_out = 0;
          e.avail_out = i;
        }
        if ((o === bn || o === Cn) && e.avail_out <= 6) {
          this.onData(e.output.subarray(0, e.next_out));
          e.avail_out = 0;
        } else {
          s = cn.deflate(e, o);
          if (s === En) {
            if (e.next_out > 0) {
              this.onData(e.output.subarray(0, e.next_out));
            }
            s = cn.deflateEnd(this.strm);
            this.onEnd(s);
            this.ended = true;
            return s === _n;
          }
          if (e.avail_out !== 0) {
            if (o > 0 && e.next_out > 0) {
              this.onData(e.output.subarray(0, e.next_out));
              e.avail_out = 0;
            } else if (e.avail_in === 0) {
              break;
            }
          } else {
            this.onData(e.output);
          }
        }
      }
      return true;
    };
    In.prototype.onData = function (t) {
      this.chunks.push(t);
    };
    In.prototype.onEnd = function (t) {
      if (t === _n) {
        this.result = dn(this.chunks);
      }
      this.chunks = [];
      this.err = t;
      this.msg = this.strm.msg;
    };
    var Sn = {
      Deflate: In,
      deflate: Bn,
      deflateRaw: function (t, n) {
        (n = n || {}).raw = true;
        return Bn(t, n);
      },
      gzip: function (t, n) {
        (n = n || {}).gzip = true;
        return Bn(t, n);
      },
      constants: lt
    };
    const jn = 16209;
    function $n(t, n) {
      let e;
      let i;
      let s;
      let o;
      let r;
      let a;
      let u;
      let c;
      let h;
      let l;
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
      e = t.next_in;
      _ = t.input;
      i = e + (t.avail_in - 5);
      s = t.next_out;
      E = t.output;
      o = s - (n - t.avail_out);
      r = s + (t.avail_out - 257);
      a = x.dmax;
      u = x.wsize;
      c = x.whave;
      h = x.wnext;
      l = x.window;
      d = x.hold;
      p = x.bits;
      f = x.lencode;
      D = x.distcode;
      v = (1 << x.lenbits) - 1;
      g = (1 << x.distbits) - 1;
      t: do {
        if (p < 15) {
          d += _[e++] << p;
          p += 8;
          d += _[e++] << p;
          p += 8;
        }
        m = f[d & v];
        n: while (true) {
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
                x.mode = jn;
                break t;
              }
              m = f[(m & 65535) + (d & (1 << w) - 1)];
              continue n;
            }
            y = m & 65535;
            w &= 15;
            if (w) {
              if (p < w) {
                d += _[e++] << p;
                p += 8;
              }
              y += d & (1 << w) - 1;
              d >>>= w;
              p -= w;
            }
            if (p < 15) {
              d += _[e++] << p;
              p += 8;
              d += _[e++] << p;
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
                  d += _[e++] << p;
                  p += 8;
                  if (p < w) {
                    d += _[e++] << p;
                    p += 8;
                  }
                }
                b += d & (1 << w) - 1;
                if (b > a) {
                  t.msg = "invalid distance too far back";
                  x.mode = jn;
                  break t;
                }
                d >>>= w;
                p -= w;
                w = s - o;
                if (b > w) {
                  w = b - w;
                  if (w > c && x.sane) {
                    t.msg = "invalid distance too far back";
                    x.mode = jn;
                    break t;
                  }
                  C = 0;
                  F = l;
                  if (h === 0) {
                    C += u - w;
                    if (w < y) {
                      y -= w;
                      do {
                        E[s++] = l[C++];
                      } while (--w);
                      C = s - b;
                      F = E;
                    }
                  } else if (h < w) {
                    C += u + h - w;
                    w -= h;
                    if (w < y) {
                      y -= w;
                      do {
                        E[s++] = l[C++];
                      } while (--w);
                      C = 0;
                      if (h < y) {
                        w = h;
                        y -= w;
                        do {
                          E[s++] = l[C++];
                        } while (--w);
                        C = s - b;
                        F = E;
                      }
                    }
                  } else {
                    C += h - w;
                    if (w < y) {
                      y -= w;
                      do {
                        E[s++] = l[C++];
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
                x.mode = jn;
                break t;
              }
              m = D[(m & 65535) + (d & (1 << w) - 1)];
            }
          }
          break;
        }
      } while (e < i && s < r);
      y = p >> 3;
      e -= y;
      p -= y << 3;
      d &= (1 << p) - 1;
      t.next_in = e;
      t.next_out = s;
      t.avail_in = e < i ? i - e + 5 : 5 - (e - i);
      t.avail_out = s < r ? r - s + 257 : 257 - (s - r);
      x.hold = d;
      x.bits = p;
    }
    const Tn = 15;
    const Pn = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const Mn = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const Ln = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const Rn = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var On = (t, n, e, i, s, o, r, a) => {
      const u = a.bits;
      let c;
      let h;
      let l;
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
      let B;
      let S = null;
      for (D = 0; D <= Tn; D++) {
        x[D] = 0;
      }
      for (v = 0; v < i; v++) {
        x[n[e + v]]++;
      }
      w = u;
      m = Tn;
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
      for (; D <= Tn; D++) {
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
      for (; D < Tn; D++) {
        k[D + 1] = k[D] + x[D];
      }
      for (v = 0; v < i; v++) {
        if (n[e + v] !== 0) {
          r[k[n[e + v]]++] = v;
        }
      }
      if (t === 0) {
        E = S = r;
        f = 20;
      } else if (t === 1) {
        E = Pn;
        S = Mn;
        f = 257;
      } else {
        E = Ln;
        S = Rn;
        f = 0;
      }
      _ = 0;
      v = 0;
      D = g;
      p = o;
      y = w;
      b = 0;
      l = -1;
      F = 1 << w;
      d = F - 1;
      if (t === 1 && F > 852 || t === 2 && F > 592) {
        return 1;
      }
      while (true) {
        A = D - b;
        if (r[v] + 1 < f) {
          I = 0;
          B = r[v];
        } else if (r[v] >= f) {
          I = S[r[v] - f];
          B = E[r[v] - f];
        } else {
          I = 96;
          B = 0;
        }
        c = 1 << D - b;
        h = 1 << y;
        g = h;
        do {
          h -= c;
          s[p + (_ >> b) + h] = A << 24 | I << 16 | B;
        } while (h !== 0);
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
          D = n[e + r[v]];
        }
        if (D > w && (_ & d) !== l) {
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
          l = _ & d;
          s[l] = w << 24 | y << 16 | p - o;
        }
      }
      if (_ !== 0) {
        s[p + _] = D - b << 24 | 4194304;
      }
      a.bits = w;
      return 0;
    };
    const {
      Z_FINISH: Vn,
      Z_BLOCK: Un,
      Z_TREES: Hn,
      Z_OK: Nn,
      Z_STREAM_END: Gn,
      Z_NEED_DICT: zn,
      Z_STREAM_ERROR: Zn,
      Z_DATA_ERROR: Qn,
      Z_MEM_ERROR: Wn,
      Z_BUF_ERROR: Yn,
      Z_DEFLATED: Jn
    } = lt;
    const Kn = 16180;
    const qn = 16190;
    const Xn = 16191;
    const te = 16192;
    const ne = 16194;
    const ee = 16199;
    const ie = 16200;
    const se = 16206;
    const oe = 16209;
    const re = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
    function ae() {
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
    const ue = t => {
      if (!t) {
        return 1;
      }
      const n = t.state;
      if (!n || n.strm !== t || n.mode < Kn || n.mode > 16211) {
        return 1;
      } else {
        return 0;
      }
    };
    const ce = t => {
      if (ue(t)) {
        return Zn;
      }
      const n = t.state;
      t.total_in = t.total_out = n.total = 0;
      t.msg = "";
      if (n.wrap) {
        t.adler = n.wrap & 1;
      }
      n.mode = Kn;
      n.last = 0;
      n.havedict = 0;
      n.flags = -1;
      n.dmax = 32768;
      n.head = null;
      n.hold = 0;
      n.bits = 0;
      n.lencode = n.lendyn = new Int32Array(852);
      n.distcode = n.distdyn = new Int32Array(592);
      n.sane = 1;
      n.back = -1;
      return Nn;
    };
    const he = t => {
      if (ue(t)) {
        return Zn;
      }
      const n = t.state;
      n.wsize = 0;
      n.whave = 0;
      n.wnext = 0;
      return ce(t);
    };
    const le = (t, n) => {
      let e;
      if (ue(t)) {
        return Zn;
      }
      const i = t.state;
      if (n < 0) {
        e = 0;
        n = -n;
      } else {
        e = 5 + (n >> 4);
        if (n < 48) {
          n &= 15;
        }
      }
      if (n && (n < 8 || n > 15)) {
        return Zn;
      } else {
        if (i.window !== null && i.wbits !== n) {
          i.window = null;
        }
        i.wrap = e;
        i.wbits = n;
        return he(t);
      }
    };
    const de = (t, n) => {
      if (!t) {
        return Zn;
      }
      const e = new ae();
      t.state = e;
      e.strm = t;
      e.window = null;
      e.mode = Kn;
      const i = le(t, n);
      if (i !== Nn) {
        t.state = null;
      }
      return i;
    };
    let pe;
    let fe;
    let De = true;
    const ve = t => {
      if (De) {
        pe = new Int32Array(512);
        fe = new Int32Array(32);
        let n = 0;
        while (n < 144) {
          t.lens[n++] = 8;
        }
        while (n < 256) {
          t.lens[n++] = 9;
        }
        while (n < 280) {
          t.lens[n++] = 7;
        }
        while (n < 288) {
          t.lens[n++] = 8;
        }
        On(1, t.lens, 0, 288, pe, 0, t.work, {
          bits: 9
        });
        n = 0;
        while (n < 32) {
          t.lens[n++] = 5;
        }
        On(2, t.lens, 0, 32, fe, 0, t.work, {
          bits: 5
        });
        De = false;
      }
      t.lencode = pe;
      t.lenbits = 9;
      t.distcode = fe;
      t.distbits = 5;
    };
    const ge = (t, n, e, i) => {
      let s;
      const o = t.state;
      if (o.window === null) {
        o.wsize = 1 << o.wbits;
        o.wnext = 0;
        o.whave = 0;
        o.window = new Uint8Array(o.wsize);
      }
      if (i >= o.wsize) {
        o.window.set(n.subarray(e - o.wsize, e), 0);
        o.wnext = 0;
        o.whave = o.wsize;
      } else {
        s = o.wsize - o.wnext;
        if (s > i) {
          s = i;
        }
        o.window.set(n.subarray(e - i, e - i + s), o.wnext);
        if (i -= s) {
          o.window.set(n.subarray(e - i, e), 0);
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
    var me = {
      inflateReset: he,
      inflateReset2: le,
      inflateResetKeep: ce,
      inflateInit: t => de(t, 15),
      inflateInit2: de,
      inflate: (t, n) => {
        let e;
        let i;
        let s;
        let o;
        let r;
        let a;
        let u;
        let c;
        let h;
        let l;
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
        if (ue(t) || !t.output || !t.input && t.avail_in !== 0) {
          return Zn;
        }
        e = t.state;
        if (e.mode === Xn) {
          e.mode = te;
        }
        r = t.next_out;
        s = t.output;
        u = t.avail_out;
        o = t.next_in;
        i = t.input;
        a = t.avail_in;
        c = e.hold;
        h = e.bits;
        l = a;
        d = u;
        F = Nn;
        t: while (true) {
          switch (e.mode) {
            case Kn:
              if (e.wrap === 0) {
                e.mode = te;
                break;
              }
              while (h < 16) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              if (e.wrap & 2 && c === 35615) {
                if (e.wbits === 0) {
                  e.wbits = 15;
                }
                e.check = 0;
                E[0] = c & 255;
                E[1] = c >>> 8 & 255;
                e.check = ct(e.check, E, 2, 0);
                c = 0;
                h = 0;
                e.mode = 16181;
                break;
              }
              if (e.head) {
                e.head.done = false;
              }
              if (!(e.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
                t.msg = "incorrect header check";
                e.mode = oe;
                break;
              }
              if ((c & 15) !== Jn) {
                t.msg = "unknown compression method";
                e.mode = oe;
                break;
              }
              c >>>= 4;
              h -= 4;
              C = 8 + (c & 15);
              if (e.wbits === 0) {
                e.wbits = C;
              }
              if (C > 15 || C > e.wbits) {
                t.msg = "invalid window size";
                e.mode = oe;
                break;
              }
              e.dmax = 1 << e.wbits;
              e.flags = 0;
              t.adler = e.check = 1;
              e.mode = c & 512 ? 16189 : Xn;
              c = 0;
              h = 0;
              break;
            case 16181:
              while (h < 16) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              e.flags = c;
              if ((e.flags & 255) !== Jn) {
                t.msg = "unknown compression method";
                e.mode = oe;
                break;
              }
              if (e.flags & 57344) {
                t.msg = "unknown header flags set";
                e.mode = oe;
                break;
              }
              if (e.head) {
                e.head.text = c >> 8 & 1;
              }
              if (e.flags & 512 && e.wrap & 4) {
                E[0] = c & 255;
                E[1] = c >>> 8 & 255;
                e.check = ct(e.check, E, 2, 0);
              }
              c = 0;
              h = 0;
              e.mode = 16182;
            case 16182:
              while (h < 32) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              if (e.head) {
                e.head.time = c;
              }
              if (e.flags & 512 && e.wrap & 4) {
                E[0] = c & 255;
                E[1] = c >>> 8 & 255;
                E[2] = c >>> 16 & 255;
                E[3] = c >>> 24 & 255;
                e.check = ct(e.check, E, 4, 0);
              }
              c = 0;
              h = 0;
              e.mode = 16183;
            case 16183:
              while (h < 16) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              if (e.head) {
                e.head.xflags = c & 255;
                e.head.os = c >> 8;
              }
              if (e.flags & 512 && e.wrap & 4) {
                E[0] = c & 255;
                E[1] = c >>> 8 & 255;
                e.check = ct(e.check, E, 2, 0);
              }
              c = 0;
              h = 0;
              e.mode = 16184;
            case 16184:
              if (e.flags & 1024) {
                while (h < 16) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                e.length = c;
                if (e.head) {
                  e.head.extra_len = c;
                }
                if (e.flags & 512 && e.wrap & 4) {
                  E[0] = c & 255;
                  E[1] = c >>> 8 & 255;
                  e.check = ct(e.check, E, 2, 0);
                }
                c = 0;
                h = 0;
              } else if (e.head) {
                e.head.extra = null;
              }
              e.mode = 16185;
            case 16185:
              if (e.flags & 1024 && (p = e.length, p > a && (p = a), p && (e.head && (C = e.head.extra_len - e.length, e.head.extra ||= new Uint8Array(e.head.extra_len), e.head.extra.set(i.subarray(o, o + p), C)), e.flags & 512 && e.wrap & 4 && (e.check = ct(e.check, i, p, o)), a -= p, o += p, e.length -= p), e.length)) {
                break t;
              }
              e.length = 0;
              e.mode = 16186;
            case 16186:
              if (e.flags & 2048) {
                if (a === 0) {
                  break t;
                }
                p = 0;
                do {
                  C = i[o + p++];
                  if (e.head && C && e.length < 65536) {
                    e.head.name += String.fromCharCode(C);
                  }
                } while (C && p < a);
                if (e.flags & 512 && e.wrap & 4) {
                  e.check = ct(e.check, i, p, o);
                }
                a -= p;
                o += p;
                if (C) {
                  break t;
                }
              } else if (e.head) {
                e.head.name = null;
              }
              e.length = 0;
              e.mode = 16187;
            case 16187:
              if (e.flags & 4096) {
                if (a === 0) {
                  break t;
                }
                p = 0;
                do {
                  C = i[o + p++];
                  if (e.head && C && e.length < 65536) {
                    e.head.comment += String.fromCharCode(C);
                  }
                } while (C && p < a);
                if (e.flags & 512 && e.wrap & 4) {
                  e.check = ct(e.check, i, p, o);
                }
                a -= p;
                o += p;
                if (C) {
                  break t;
                }
              } else if (e.head) {
                e.head.comment = null;
              }
              e.mode = 16188;
            case 16188:
              if (e.flags & 512) {
                while (h < 16) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                if (e.wrap & 4 && c !== (e.check & 65535)) {
                  t.msg = "header crc mismatch";
                  e.mode = oe;
                  break;
                }
                c = 0;
                h = 0;
              }
              if (e.head) {
                e.head.hcrc = e.flags >> 9 & 1;
                e.head.done = true;
              }
              t.adler = e.check = 0;
              e.mode = Xn;
              break;
            case 16189:
              while (h < 32) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              t.adler = e.check = re(c);
              c = 0;
              h = 0;
              e.mode = qn;
            case qn:
              if (e.havedict === 0) {
                t.next_out = r;
                t.avail_out = u;
                t.next_in = o;
                t.avail_in = a;
                e.hold = c;
                e.bits = h;
                return zn;
              }
              t.adler = e.check = 1;
              e.mode = Xn;
            case Xn:
              if (n === Un || n === Hn) {
                break t;
              }
            case te:
              if (e.last) {
                c >>>= h & 7;
                h -= h & 7;
                e.mode = se;
                break;
              }
              while (h < 3) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              e.last = c & 1;
              c >>>= 1;
              h -= 1;
              switch (c & 3) {
                case 0:
                  e.mode = 16193;
                  break;
                case 1:
                  ve(e);
                  e.mode = ee;
                  if (n === Hn) {
                    c >>>= 2;
                    h -= 2;
                    break t;
                  }
                  break;
                case 2:
                  e.mode = 16196;
                  break;
                case 3:
                  t.msg = "invalid block type";
                  e.mode = oe;
              }
              c >>>= 2;
              h -= 2;
              break;
            case 16193:
              c >>>= h & 7;
              h -= h & 7;
              while (h < 32) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              if ((c & 65535) != (c >>> 16 ^ 65535)) {
                t.msg = "invalid stored block lengths";
                e.mode = oe;
                break;
              }
              e.length = c & 65535;
              c = 0;
              h = 0;
              e.mode = ne;
              if (n === Hn) {
                break t;
              }
            case ne:
              e.mode = 16195;
            case 16195:
              p = e.length;
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
                e.length -= p;
                break;
              }
              e.mode = Xn;
              break;
            case 16196:
              while (h < 14) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              e.nlen = 257 + (c & 31);
              c >>>= 5;
              h -= 5;
              e.ndist = 1 + (c & 31);
              c >>>= 5;
              h -= 5;
              e.ncode = 4 + (c & 15);
              c >>>= 4;
              h -= 4;
              if (e.nlen > 286 || e.ndist > 30) {
                t.msg = "too many length or distance symbols";
                e.mode = oe;
                break;
              }
              e.have = 0;
              e.mode = 16197;
            case 16197:
              while (e.have < e.ncode) {
                while (h < 3) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                e.lens[A[e.have++]] = c & 7;
                c >>>= 3;
                h -= 3;
              }
              while (e.have < 19) {
                e.lens[A[e.have++]] = 0;
              }
              e.lencode = e.lendyn;
              e.lenbits = 7;
              x = {
                bits: e.lenbits
              };
              F = On(0, e.lens, 0, 19, e.lencode, 0, e.work, x);
              e.lenbits = x.bits;
              if (F) {
                t.msg = "invalid code lengths set";
                e.mode = oe;
                break;
              }
              e.have = 0;
              e.mode = 16198;
            case 16198:
              while (e.have < e.nlen + e.ndist) {
                while (_ = e.lencode[c & (1 << e.lenbits) - 1], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(v <= h)) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                if (m < 16) {
                  c >>>= v;
                  h -= v;
                  e.lens[e.have++] = m;
                } else {
                  if (m === 16) {
                    for (k = v + 2; h < k;) {
                      if (a === 0) {
                        break t;
                      }
                      a--;
                      c += i[o++] << h;
                      h += 8;
                    }
                    c >>>= v;
                    h -= v;
                    if (e.have === 0) {
                      t.msg = "invalid bit length repeat";
                      e.mode = oe;
                      break;
                    }
                    C = e.lens[e.have - 1];
                    p = 3 + (c & 3);
                    c >>>= 2;
                    h -= 2;
                  } else if (m === 17) {
                    for (k = v + 3; h < k;) {
                      if (a === 0) {
                        break t;
                      }
                      a--;
                      c += i[o++] << h;
                      h += 8;
                    }
                    c >>>= v;
                    h -= v;
                    C = 0;
                    p = 3 + (c & 7);
                    c >>>= 3;
                    h -= 3;
                  } else {
                    for (k = v + 7; h < k;) {
                      if (a === 0) {
                        break t;
                      }
                      a--;
                      c += i[o++] << h;
                      h += 8;
                    }
                    c >>>= v;
                    h -= v;
                    C = 0;
                    p = 11 + (c & 127);
                    c >>>= 7;
                    h -= 7;
                  }
                  if (e.have + p > e.nlen + e.ndist) {
                    t.msg = "invalid bit length repeat";
                    e.mode = oe;
                    break;
                  }
                  while (p--) {
                    e.lens[e.have++] = C;
                  }
                }
              }
              if (e.mode === oe) {
                break;
              }
              if (e.lens[256] === 0) {
                t.msg = "invalid code -- missing end-of-block";
                e.mode = oe;
                break;
              }
              e.lenbits = 9;
              x = {
                bits: e.lenbits
              };
              F = On(1, e.lens, 0, e.nlen, e.lencode, 0, e.work, x);
              e.lenbits = x.bits;
              if (F) {
                t.msg = "invalid literal/lengths set";
                e.mode = oe;
                break;
              }
              e.distbits = 6;
              e.distcode = e.distdyn;
              x = {
                bits: e.distbits
              };
              F = On(2, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, x);
              e.distbits = x.bits;
              if (F) {
                t.msg = "invalid distances set";
                e.mode = oe;
                break;
              }
              e.mode = ee;
              if (n === Hn) {
                break t;
              }
            case ee:
              e.mode = ie;
            case ie:
              if (a >= 6 && u >= 258) {
                t.next_out = r;
                t.avail_out = u;
                t.next_in = o;
                t.avail_in = a;
                e.hold = c;
                e.bits = h;
                $n(t, d);
                r = t.next_out;
                s = t.output;
                u = t.avail_out;
                o = t.next_in;
                i = t.input;
                a = t.avail_in;
                c = e.hold;
                h = e.bits;
                if (e.mode === Xn) {
                  e.back = -1;
                }
                break;
              }
              for (e.back = 0; _ = e.lencode[c & (1 << e.lenbits) - 1], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(v <= h);) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              if (g && !(g & 240)) {
                w = v;
                y = g;
                b = m;
                while (_ = e.lencode[b + ((c & (1 << w + y) - 1) >> w)], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(w + v <= h)) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                c >>>= w;
                h -= w;
                e.back += w;
              }
              c >>>= v;
              h -= v;
              e.back += v;
              e.length = m;
              if (g === 0) {
                e.mode = 16205;
                break;
              }
              if (g & 32) {
                e.back = -1;
                e.mode = Xn;
                break;
              }
              if (g & 64) {
                t.msg = "invalid literal/length code";
                e.mode = oe;
                break;
              }
              e.extra = g & 15;
              e.mode = 16201;
            case 16201:
              if (e.extra) {
                for (k = e.extra; h < k;) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                e.length += c & (1 << e.extra) - 1;
                c >>>= e.extra;
                h -= e.extra;
                e.back += e.extra;
              }
              e.was = e.length;
              e.mode = 16202;
            case 16202:
              while (_ = e.distcode[c & (1 << e.distbits) - 1], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(v <= h)) {
                if (a === 0) {
                  break t;
                }
                a--;
                c += i[o++] << h;
                h += 8;
              }
              if (!(g & 240)) {
                w = v;
                y = g;
                b = m;
                while (_ = e.distcode[b + ((c & (1 << w + y) - 1) >> w)], v = _ >>> 24, g = _ >>> 16 & 255, m = _ & 65535, !(w + v <= h)) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                c >>>= w;
                h -= w;
                e.back += w;
              }
              c >>>= v;
              h -= v;
              e.back += v;
              if (g & 64) {
                t.msg = "invalid distance code";
                e.mode = oe;
                break;
              }
              e.offset = m;
              e.extra = g & 15;
              e.mode = 16203;
            case 16203:
              if (e.extra) {
                for (k = e.extra; h < k;) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                e.offset += c & (1 << e.extra) - 1;
                c >>>= e.extra;
                h -= e.extra;
                e.back += e.extra;
              }
              if (e.offset > e.dmax) {
                t.msg = "invalid distance too far back";
                e.mode = oe;
                break;
              }
              e.mode = 16204;
            case 16204:
              if (u === 0) {
                break t;
              }
              p = d - u;
              if (e.offset > p) {
                p = e.offset - p;
                if (p > e.whave && e.sane) {
                  t.msg = "invalid distance too far back";
                  e.mode = oe;
                  break;
                }
                if (p > e.wnext) {
                  p -= e.wnext;
                  f = e.wsize - p;
                } else {
                  f = e.wnext - p;
                }
                if (p > e.length) {
                  p = e.length;
                }
                D = e.window;
              } else {
                D = s;
                f = r - e.offset;
                p = e.length;
              }
              if (p > u) {
                p = u;
              }
              u -= p;
              e.length -= p;
              do {
                s[r++] = D[f++];
              } while (--p);
              if (e.length === 0) {
                e.mode = ie;
              }
              break;
            case 16205:
              if (u === 0) {
                break t;
              }
              s[r++] = e.length;
              u--;
              e.mode = ie;
              break;
            case se:
              if (e.wrap) {
                while (h < 32) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c |= i[o++] << h;
                  h += 8;
                }
                d -= u;
                t.total_out += d;
                e.total += d;
                if (e.wrap & 4 && d) {
                  t.adler = e.check = e.flags ? ct(e.check, s, d, r - d) : at(e.check, s, d, r - d);
                }
                d = u;
                if (e.wrap & 4 && (e.flags ? c : re(c)) !== e.check) {
                  t.msg = "incorrect data check";
                  e.mode = oe;
                  break;
                }
                c = 0;
                h = 0;
              }
              e.mode = 16207;
            case 16207:
              if (e.wrap && e.flags) {
                while (h < 32) {
                  if (a === 0) {
                    break t;
                  }
                  a--;
                  c += i[o++] << h;
                  h += 8;
                }
                if (e.wrap & 4 && c !== (e.total & -1)) {
                  t.msg = "incorrect length check";
                  e.mode = oe;
                  break;
                }
                c = 0;
                h = 0;
              }
              e.mode = 16208;
            case 16208:
              F = Gn;
              break t;
            case oe:
              F = Qn;
              break t;
            case 16210:
              return Wn;
            default:
              return Zn;
          }
        }
        t.next_out = r;
        t.avail_out = u;
        t.next_in = o;
        t.avail_in = a;
        e.hold = c;
        e.bits = h;
        if (e.wsize || d !== t.avail_out && e.mode < oe && (e.mode < se || n !== Vn)) {
          ge(t, t.output, t.next_out, d - t.avail_out);
        }
        l -= t.avail_in;
        d -= t.avail_out;
        t.total_in += l;
        t.total_out += d;
        e.total += d;
        if (e.wrap & 4 && d) {
          t.adler = e.check = e.flags ? ct(e.check, s, d, t.next_out - d) : at(e.check, s, d, t.next_out - d);
        }
        t.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === Xn ? 128 : 0) + (e.mode === ee || e.mode === ne ? 256 : 0);
        if ((l === 0 && d === 0 || n === Vn) && F === Nn) {
          F = Yn;
        }
        return F;
      },
      inflateEnd: t => {
        if (ue(t)) {
          return Zn;
        }
        let n = t.state;
        n.window &&= null;
        t.state = null;
        return Nn;
      },
      inflateGetHeader: (t, n) => {
        if (ue(t)) {
          return Zn;
        }
        const e = t.state;
        if (e.wrap & 2) {
          e.head = n;
          n.done = false;
          return Nn;
        } else {
          return Zn;
        }
      },
      inflateSetDictionary: (t, n) => {
        const e = n.length;
        let i;
        let s;
        let o;
        if (ue(t)) {
          return Zn;
        } else {
          i = t.state;
          if (i.wrap !== 0 && i.mode !== qn) {
            return Zn;
          } else if (i.mode === qn && (s = 1, s = at(s, n, e, 0), s !== i.check)) {
            return Qn;
          } else {
            o = ge(t, n, e, e);
            if (o) {
              i.mode = 16210;
              return Wn;
            } else {
              i.havedict = 1;
              return Nn;
            }
          }
        }
      },
      inflateInfo: "pako inflate (from Nodeca project)"
    };
    function we() {
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
    const ye = Object.prototype.toString;
    const {
      Z_NO_FLUSH: be,
      Z_FINISH: Ce,
      Z_OK: Fe,
      Z_STREAM_END: _e,
      Z_NEED_DICT: Ee,
      Z_STREAM_ERROR: xe,
      Z_DATA_ERROR: ke,
      Z_MEM_ERROR: Ae
    } = lt;
    function Ie(t) {
      this.options = ln({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, t || {});
      const n = this.options;
      if (n.raw && n.windowBits >= 0 && n.windowBits < 16) {
        n.windowBits = -n.windowBits;
        if (n.windowBits === 0) {
          n.windowBits = -15;
        }
      }
      if (!!(n.windowBits >= 0) && !!(n.windowBits < 16) && (!t || !t.windowBits)) {
        n.windowBits += 32;
      }
      if (n.windowBits > 15 && n.windowBits < 48) {
        if (!(n.windowBits & 15)) {
          n.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new mn();
      this.strm.avail_out = 0;
      let e = me.inflateInit2(this.strm, n.windowBits);
      if (e !== Fe) {
        throw new Error(ht[e]);
      }
      this.header = new we();
      me.inflateGetHeader(this.strm, this.header);
      if (n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = Dn(n.dictionary) : ye.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (e = me.inflateSetDictionary(this.strm, n.dictionary), e !== Fe))) {
        throw new Error(ht[e]);
      }
    }
    function Be(t, n) {
      const e = new Ie(n);
      e.push(t);
      if (e.err) {
        throw e.msg || ht[e.err];
      }
      return e.result;
    }
    Ie.prototype.push = function (t, n) {
      const e = this.strm;
      const i = this.options.chunkSize;
      const s = this.options.dictionary;
      let o;
      let r;
      let a;
      if (this.ended) {
        return false;
      }
      r = n === ~~n ? n : n === true ? Ce : be;
      if (ye.call(t) === "[object ArrayBuffer]") {
        e.input = new Uint8Array(t);
      } else {
        e.input = t;
      }
      e.next_in = 0;
      e.avail_in = e.input.length;
      while (true) {
        if (e.avail_out === 0) {
          e.output = new Uint8Array(i);
          e.next_out = 0;
          e.avail_out = i;
        }
        o = me.inflate(e, r);
        if (o === Ee && s) {
          o = me.inflateSetDictionary(e, s);
          if (o === Fe) {
            o = me.inflate(e, r);
          } else if (o === ke) {
            o = Ee;
          }
        }
        while (e.avail_in > 0 && o === _e && e.state.wrap > 0 && t[e.next_in] !== 0) {
          me.inflateReset(e);
          o = me.inflate(e, r);
        }
        switch (o) {
          case xe:
          case ke:
          case Ee:
          case Ae:
            this.onEnd(o);
            this.ended = true;
            return false;
        }
        a = e.avail_out;
        if (e.next_out && (e.avail_out === 0 || o === _e)) {
          if (this.options.to === "string") {
            let t = gn(e.output, e.next_out);
            let n = e.next_out - t;
            let s = vn(e.output, t);
            e.next_out = n;
            e.avail_out = i - n;
            if (n) {
              e.output.set(e.output.subarray(t, t + n), 0);
            }
            this.onData(s);
          } else {
            this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out));
          }
        }
        if (o !== Fe || a !== 0) {
          if (o === _e) {
            o = me.inflateEnd(this.strm);
            this.onEnd(o);
            this.ended = true;
            return true;
          }
          if (e.avail_in === 0) {
            break;
          }
        }
      }
      return true;
    };
    Ie.prototype.onData = function (t) {
      this.chunks.push(t);
    };
    Ie.prototype.onEnd = function (t) {
      if (t === Fe) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = dn(this.chunks);
        }
      }
      this.chunks = [];
      this.err = t;
      this.msg = this.strm.msg;
    };
    var Se = {
      Inflate: Ie,
      inflate: Be,
      inflateRaw: function (t, n) {
        (n = n || {}).raw = true;
        return Be(t, n);
      },
      ungzip: Be,
      constants: lt
    };
    const {
      Deflate: je,
      deflate: $e,
      deflateRaw: Te,
      gzip: Pe
    } = Sn;
    const {
      Inflate: Me,
      inflate: Le,
      inflateRaw: Re,
      ungzip: Oe
    } = Se;
    var Ve;
    var Ue = {
      Deflate: je,
      deflate: $e,
      deflateRaw: Te,
      gzip: Pe,
      Inflate: Me,
      inflate: Le,
      inflateRaw: Re,
      ungzip: Oe,
      constants: lt
    };
    function He(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    function Ne(t) {
      return t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.");
    }
    function Ge(t = new URL(window.location.href)) {
      return t.hostname === "tv.youtube.com";
    }
    function ze(t = new URL(window.location.href)) {
      return Ge(t) && t.pathname.includes("/watch");
    }
    function Ze(t) {
      return t.hostname.includes(".netflix.") && t.pathname.includes("/watch");
    }
    function Qe(t) {
      return t.replace(/\/+$/, "") === "/live";
    }
    function We(t) {
      return function () {
        return new Promise(n => {
          setTimeout(() => {
            n();
          }, t);
        });
      };
    }
    function Ye(t, n, e = 250) {
      return function () {
        const i = new Date().getTime();
        const s = function () {
          return He(this, undefined, undefined, function* () {
            if (yield t()) {
              return Promise.resolve();
            } else if (n !== null && new Date().getTime() - i > n) {
              return Promise.reject(new Error("delayUntil timed out: " + t));
            } else {
              return We(e)().then(s);
            }
          });
        };
        return s();
      };
    }
    function Je(t, n, e) {
      t.push(n);
      if (t.length > e) {
        t.splice(0, t.length - e);
      }
    }
    function Ke(t) {
      return t.concat().sort()[Math.floor(t.length / 2)];
    }
    function qe(t) {
      const n = document.createElement("script");
      n.setAttribute("tpInjected", "");
      n.src = t;
      (document.head || document.documentElement).appendChild(n);
      n.remove();
    }
    function Xe(t) {
      return He(this, undefined, undefined, function* () {
        if ((t.headers.get("content-type") || "").includes("application/json")) {
          try {
            return yield t.json();
          } catch (t) {}
        }
        const n = yield t.text();
        if (!n) {
          return n;
        }
        try {
          return JSON.parse(n);
        } catch (t) {
          return n;
        }
      });
    }
    function ti(t, n, e, i, o, r, a = false) {
      return He(this, undefined, undefined, function* () {
        const u = `${s}/${t}`.replace(/([^:]\/)\/+/g, "$1");
        const c = e && !!o;
        const h = e && !o;
        const d = Object.assign({
          Accept: "application/json"
        }, r || {});
        const p = t => typeof FormData != "undefined" && t instanceof FormData || typeof Blob != "undefined" && t instanceof Blob || typeof ArrayBuffer != "undefined" && t instanceof ArrayBuffer;
        if (n !== "GET" && i != null && !p(i)) {
          d["Content-Type"] = d["Content-Type"] || "application/json";
        }
        if (c) {
          d.Authorization = `Bearer ${o}`;
        }
        if (h && !d["x-tp-csrf"]) {
          const t = yield l(a);
          if (t) {
            d["x-tp-csrf"] = t;
          }
        }
        const f = {
          method: n,
          headers: d,
          credentials: h ? "include" : "omit",
          body: n !== "GET" && i != null ? p(i) ? i : JSON.stringify(i) : undefined
        };
        const D = yield fetch(u, f);
        if (D.status === 0 || D.status >= 200 && D.status < 400) {
          return yield Xe(D);
        }
        const v = yield Xe(D);
        const g = new Error(typeof v == "string" ? v : JSON.stringify(v));
        g.status = D.status;
        throw g;
      });
    }
    function ni(t) {
      const n = new TextEncoder().encode(t);
      const e = Ue.gzip(n);
      let i = "";
      for (let t = 0; t < e.length; t++) {
        i += String.fromCharCode(e[t]);
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
    })(Ve ||= {});
    const ei = "Service_Background";
    const ii = "Popup";
    const si = "Content_Script";
    const oi = "Page_Controls";
    var ri;
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
    })(ri ||= {});
    const hi = typeof chrome != "undefined" ? chrome.runtime : undefined;
    const li = (hi == null ? undefined : hi.id) ?? "";
    const di = (hi == null ? undefined : hi.getManifest())?.version ?? "";
    const pi = "reactionContainerOpen";
    const fi = "https://sessions.teleparty.com";
    const Di = `${o}/sidebar`;
    const vi = ["heart", "angry", "fire", "laugh", "surprise", "cry"];
    const gi = "recentlyUsedEmojiMap";
    const mi = "redirectDataMap";
    const wi = [{
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
    const yi = /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
    var bi = console.log.bind(self.console);
    function Ci(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const Fi = new class {
      addListener(t) {
        chrome.runtime.onMessage.addListener(t);
      }
      removeListener(t) {
        chrome.runtime.onMessage.removeListener(t);
      }
      sendMessageToTabAsync(t, n, e = 20000) {
        return Ci(this, undefined, undefined, function* () {
          return new Promise((i, s) => {
            const o = setTimeout(() => {
              console.log("send timeout");
              s("Message Timeout");
            }, e);
            try {
              chrome.tabs.sendMessage(n, t, n => {
                if (chrome.runtime.lastError) {
                  bi(chrome.runtime.lastError.message + JSON.stringify(t));
                }
                clearTimeout(o);
                i(n);
              });
            } catch (t) {
              clearTimeout(o);
              s(t);
            }
          });
        });
      }
      I(t, n) {
        return Ci(this, undefined, undefined, function* () {
          return new Promise((e, i) => {
            let s = null;
            if (n) {
              s = setTimeout(() => {
                i({
                  error: "Send Message Timeout"
                });
              }, n);
            }
            try {
              chrome.runtime.sendMessage(li, t, n => {
                if (chrome.runtime.lastError) {
                  console.log(chrome.runtime.lastError.message + JSON.stringify(t));
                }
                if (s) {
                  clearTimeout(s);
                }
                e(n);
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
    class _i {
      constructor(t, n, e) {
        this.sender = t;
        this.target = n;
        this.type = e;
      }
    }
    class Ei extends _i {
      constructor(t, n, e) {
        super(t, n, e);
        this.B = e;
      }
    }
    var xi;
    var ki;
    var Ai;
    var Ii;
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
    })(xi ||= {});
    class Bi extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.GET_SESSION_DATA);
        this.data = e;
      }
    }
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
    })(ki ||= {});
    class Si {
      constructor() {
        this.S = this.$.bind(this);
        this.T = [];
        this.P();
      }
      addMessageListener(t) {
        this.T.push(t);
      }
      removeMessageListener(t) {
        this.T = this.T.filter(t => {});
      }
      P() {
        Fi.addListener(this.S);
      }
      teardown() {
        this.T = [];
        Fi.removeListener(this.S);
      }
      $(t, n, e) {
        if (!this.M(t)) {
          return false;
        }
        return !!this.L(t, n, e) || (e({}), false);
      }
      M(t) {
        return t.target === si;
      }
      L(t, n, e) {
        let i = false;
        this.T.forEach(s => {
          if (s.onMessage(t, n, e)) {
            i = true;
          }
        });
        return i;
      }
    }
    class ji extends _i {
      constructor(t, n, e) {
        super(t, n, e);
        this.type = e;
      }
    }
    class $i extends ji {
      constructor(t, n, e) {
        super(t, n, ki.PARTY_INIT_TIMING);
        this.data = e;
      }
    }
    function Ti(t) {
      try {
        const n = new $i(si, ei, {
          marks: {
            [t]: Date.now()
          }
        });
        Fi.I(n).catch(() => {});
      } catch (t) {}
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
    })(Ai ||= {});
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
    })(Ii ||= {});
    const Pi = "Failed to read chrome storage. Please refresh the page and try again";
    const Mi = "Failed to connect to Script. Please refresh the page and try again";
    const Li = "Video element not found.";
    function Ri(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const Oi = new class {
      getItemAsync(t) {
        return Ri(this, undefined, undefined, function* () {
          const e = yield chrome.storage.local.get(t);
          return e[t] ?? null;
        });
      }
      getItemsAsync(t) {
        return Ri(this, undefined, undefined, function* () {
          return new Promise((n, e) => {
            chrome.storage.local.get(t, t => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                e(new Error(Pi));
              } else {
                n(t);
              }
            });
          });
        });
      }
      getStorageUse() {
        return Ri(this, undefined, undefined, function* () {
          return new Promise((t, n) => {
            chrome.storage.local.getBytesInUse(null, e => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                n(new Error(Pi));
              } else {
                t(e);
              }
            });
          });
        });
      }
      getAllItemsAsync() {
        return Ri(this, undefined, undefined, function* () {
          return new Promise((t, n) => {
            chrome.storage.local.get(null, e => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                n(new Error(Pi));
              } else {
                t(e);
              }
            });
          });
        });
      }
    }();
    Object.freeze(Oi);
    const Vi = Oi;
    class Ui extends ji {
      constructor(t, n, e) {
        super(t, n, ki.GET_DATA);
        this.data = e;
      }
    }
    class Hi {
      constructor(t, n, e, i, s, o = []) {
        this.requiredPermissions = t;
        this.serverName = e;
        this.name = i;
        this.contentScripts = n;
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
        return `${o}/join/${t}`;
      }
    }
    var Ni;
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
    })(Ni ||= {});
    const Gi = new class extends Hi {
      isValidUrl(t) {
        return Ne(t);
      }
      isBrowsing(t) {
        return Ne(t) || t.pathname.includes("amazon.");
      }
      getVideoId(t) {
        const n = t.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
        if (n != null && n.length > 0) {
          return n[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", Ni.AMAZON, false, ["browse_scripts/amazon/amazon_browse_bundled.js"]);
    Object.freeze(Gi);
    const zi = Gi;
    const Zi = new class extends Hi {
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
    }([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", Ni.APPLE_TV, false, ["browse_scripts/appletv/appletv_browse_bundled.js"]);
    Object.freeze(Zi);
    const Qi = Zi;
    const Wi = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".canalplus.") && ["/cinema", "/sport", "/divertissement", "/decouverte", "/musique", "/series"].some(n => t.pathname.includes(n));
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".canalplus.");
      }
      getVideoId(t) {
        const n = t.pathname.split("/").filter(Boolean);
        if (n[0] === "live" && n.length >= 2) {
          return n[1];
        } else {
          return n.join("/");
        }
      }
    }([], ["content_scripts/canalplus/canalplus_content_bundled.js"], "canalplus", Ni.CANALPLUS, false, ["browse_scripts/canalplus/canalplus_browse_bundled.js"]);
    Object.freeze(Wi);
    const Yi = Wi;
    const Ji = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes(".crave.");
          const e = t.pathname.includes("/play/") || t.pathname.includes("/live");
          return n && e;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".crave.");
      }
      getVideoId(t) {
        if (t.pathname.includes("/live")) {
          const n = t.searchParams.get("channel");
          if (n) {
            return `live/${n}`;
          } else {
            return "live";
          }
        }
        return t.pathname.split("/").slice(2).join("/");
      }
    }([], ["content_scripts/crave/crave_content_bundled.js"], "crave", Ni.CRAVE, false, ["browse_scripts/crave/crave_browse_bundled.js"]);
    Object.freeze(Ji);
    const Ki = Ji;
    const qi = new class extends Hi {
      isBrowsing(t) {
        return t.hostname.includes(".crunchyroll.");
      }
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".crunchyroll.") && t.pathname.includes("/watch/");
        }(t);
      }
      getVideoId(t) {
        const n = t.pathname.match(/watch\/(.*)\//);
        if (n && n.length > 0) {
          return n[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", Ni.CRUNCHYROLL, false, ["browse_scripts/crunchyroll/crunchyroll_browse_bundled.js"]);
    Object.freeze(qi);
    const Xi = qi;
    const ts = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".disneyplus.") && (t.pathname.includes("/video") || t.pathname.includes("/play"));
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".disneyplus.") && !t.hostname.includes("apps.disneyplus.");
      }
      getVideoId(t) {
        const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        if (n && n.length > 0) {
          return n[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/disney/disney_content_bundled.js"], "disney", Ni.DISNEY_PLUS, false, ["browse_scripts/disney/disney_browse_bundled.js"]);
    Object.freeze(ts);
    const ns = ts;
    const es = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("apps.disneyplus.") && t.pathname.includes("/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("apps.disneyplus.");
      }
      getVideoId(t) {
        const n = t.pathname.split("/");
        if (n && n.length > 1) {
          return n[n.length - 2];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", Ni.DISNEY_PLUS_MENA, false);
    Object.freeze(es);
    const is = es;
    const ss = new class extends Hi {
      isBrowsing(t) {
        return t.hostname.includes(".espn.");
      }
      isValidUrl(t) {
        return function (t) {
          if (!t.hostname.includes(".espn.")) {
            return false;
          }
          const n = t.pathname;
          return n.includes("/player") || n.includes("/watch/");
        }(t);
      }
      getVideoId(t) {
        const n = t.pathname;
        const e = n.match(/\/watch\/player\/_\/id\/([^/?#]+)/);
        if (e == null ? undefined : e[1]) {
          return decodeURIComponent(e[1]);
        }
        const i = ["contentId", "mediaId", "id"];
        for (const n of i) {
          const e = t.searchParams.get(n);
          if (!e) {
            continue;
          }
          const i = decodeURIComponent(e);
          if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(i) || /^\d{8,}$/.test(i)) {
            return i;
          }
        }
        const s = (n + t.hash).match(/\b([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|\d{8,})\b/);
        if (s == null) {
          return undefined;
        } else {
          return s[1];
        }
      }
    }([], ["content_scripts/espn/espn_content_bundled.js"], "espn", Ni.ESPN, false, ["browse_scripts/espn/espn_browse_bundled.js"]);
    Object.freeze(ss);
    const os = ss;
    const rs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("fancode.com");
          const e = t.searchParams.get(D.MATCH_INFO_QUERY_PARAM.tag) === D.MATCH_INFO_QUERY_PARAM.value;
          const i = t.pathname.includes(D.HIGHLIGHTS);
          const s = D.LIVE_MATCH_PAGE_TYPES.some(n => t.pathname.includes(n));
          return n && !e && (i || s);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".fancode.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/fancode/fancode_content_bundled.js"], "fancode", Ni.FANCODE, false, ["browse_scripts/fancode/fancode_browse_bundled.js"]);
    Object.freeze(rs);
    const as = rs;
    var us;
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
    })(us ||= {});
    const cs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".fox.") && t.pathname.includes("/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".fox.");
      }
      getVideoId(t) {
        const n = t.pathname;
        const e = n.indexOf("/watch/");
        if (e !== -1) {
          return n.substring(e + 7);
        }
      }
    }([], ["content_scripts/foxone/foxone_content_bundled.js"], us.FOX_ONE, Ni.FOX_ONE, false, ["browse_scripts/foxone/foxone_browse_bundled.js"]);
    Object.freeze(cs);
    const hs = cs;
    const ls = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("fubo.tv");
          const e = t.pathname.includes("watch");
          return n && e;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".fubo.tv");
      }
      getVideoId(t) {
        return t.search.substring(1);
      }
    }([], ["content_scripts/fubo/fubo_content_bundled.js"], "fubo", Ni.FUBO, false, ["browse_scripts/fubo/fubo_browse_bundled.js"]);
    Object.freeze(ls);
    const ds = ls;
    const ps = new class extends Hi {
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
    }([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", Ni.FUNIMATION, false, ["browse_scripts/funimation/funimation_browse_bundled.js"]);
    Object.freeze(ps);
    const fs = ps;
    function Ds(t) {
      const n = t.match(/\/video\/watch\/([^/?#]+)/i);
      if (n) {
        return n[1];
      } else {
        return undefined;
      }
    }
    const vs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".hbomax.") && t.pathname.includes("video/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("play.hbomax.");
      }
      getVideoId(t) {
        return Ds(t.pathname);
      }
    }([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", Ni.HBO_MAX, false, ["browse_scripts/hbo_max/hbo_max_browse_bundled.js"]);
    Object.freeze(vs);
    const gs = vs;
    const ms = new class extends Hi {
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
    }([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", Ni.HOTSTAR, false, ["browse_scripts/hotstar/hotstar_browse_bundled.js"]);
    Object.freeze(ms);
    const ws = ms;
    const ys = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".hulu.") && !t.hostname.includes("hulu.jp") && t.pathname.includes("/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hulu.") && !t.hostname.includes("hulu.jp");
      }
      getVideoId(t) {
        const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        if (n && n.length > 0) {
          return n[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", Ni.HULU, false, ["browse_scripts/hulu/hulu_browse_bundled.js"]);
    Object.freeze(ys);
    const bs = ys;
    const Cs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("hulu.jp") && t.pathname.startsWith("/watch/");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hulu.jp");
      }
      getVideoId(t) {
        const n = t.pathname.split("watch/");
        if (n.length > 1 && n[1].length > 0) {
          return n[1];
        }
      }
    }([], ["content_scripts/hulujp/hulujp_content_bundled.js"], "hulujp", Ni.HULU_JP, false, ["browse_scripts/hulujp/hulujp_browse_bundled.js"]);
    Object.freeze(Cs);
    const Fs = Cs;
    const _s = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes(".jiocinema.");
          const e = t.pathname.includes("/watch") && t.pathname.includes("/movies/");
          const i = t.pathname.includes("/sports/");
          const s = t.pathname.includes("/tv-shows/");
          const o = t.pathname.includes("/news/");
          return n && (e || i || s || o);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".jiocinema.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", Ni.JIO_CINEMA, false, ["browse_scripts/jio_cinema/jio_cinema_browse_bundled.js"]);
    Object.freeze(_s);
    const Es = _s;
    const xs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("play.max.");
      }
      getVideoId(t) {
        return Ds(t.pathname);
      }
    }([], ["content_scripts/max/max_content_bundled.js"], "max", Ni.MAX, false, ["browse_scripts/max/max_browse_bundled.js"]);
    Object.freeze(xs);
    const ks = xs;
    const As = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("mubi.");
          const e = t.pathname.includes("player");
          return n && e;
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
    }([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", Ni.MUBI, false, ["browse_scripts/mubi/mubi_browse_bundled.js"]);
    Object.freeze(As);
    const Is = As;
    const Bs = new class extends Hi {
      isValidUrl(t) {
        return Ze(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".netflix.");
      }
      getVideoId(t) {
        const n = t.pathname.match(/^.*\/([0-9]+)\??.*/);
        if (n && n.length > 0) {
          return n[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", Ni.NETFLIX, false, ["browse_scripts/netflix/netflix_browse_bundled.js"]);
    Object.freeze(Bs);
    const Ss = Bs;
    const js = new class extends Hi {
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
    }([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", Ni.PARAMOUNT, false, ["browse_scripts/paramount/paramount_browse_bundled.js"]);
    Object.freeze(js);
    const $s = js;
    const Ts = new class extends Hi {
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
        const n = t.pathname.match(/\/watch\/playback\/(?:vod|event|preview|clip)\/([^/?#]+)\/([^/?#]+)/);
        if (n) {
          return `${n[1]}/${n[2]}`;
        }
        const e = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
        if (e && e.length > 0) {
          return e[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", Ni.PEACOCK, false, ["browse_scripts/peacock/peacock_browse_bundled.js"]);
    Object.freeze(Ts);
    const Ps = Ts;
    const Ms = /(?:^|\/)watch\/live-tv(?:\/|$)/i;
    const Ls = "us";
    const Rs = new class extends Hi {
      isBrowsing(t) {
        return t.hostname.includes("pluto.tv");
      }
      isValidUrl(t) {
        return !!function (t) {
          return !!t.hostname.includes("pluto.tv") && (/\/on-demand\//.test(t.pathname) || /\/movies\/[^/]+/.test(t.pathname) || /\/shows\/[^/]+\/episode\/[^/]+/.test(t.pathname) || /\/watch\/live-tv/.test(t.pathname));
        }(t) && (!!this.isLiveTvPath(t) || !!this.getVideoId(t));
      }
      getVideoId(t) {
        const n = t.pathname.replace(/^\/+|\/+$/g, "");
        if (this.R(n)) {
          const n = this.getLiveOriginId(t);
          if (!n) {
            return;
          }
          return this.buildLiveVideoId(n, this.getLocale(t));
        }
        if (this.O(n) || this.V(n) || this.U(n)) {
          return `${n}#open`;
        }
      }
      getWatchUrl(t) {
        const n = this.getLiveOriginIdFromVideoId(t);
        if (n) {
          return `https://www.pluto.tv/${this.getLocaleFromVideoId(t)}/watch/live-tv/#${n}`;
        }
        return `https://www.pluto.tv/${t.replace(/^\/+|\/+$/g, "").replace(/#open$/i, "")}#open`;
      }
      isMoviePath(t) {
        return this.O(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      isShowEpisodePath(t) {
        return this.V(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      isLiveTvPath(t) {
        return this.R(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      getLocale(t) {
        return this.H(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      getLiveOriginId(t) {
        const n = t.hash.replace(/^#/, "").trim();
        if (n && n.toLowerCase() !== "open") {
          return n;
        }
      }
      buildLiveVideoId(t, n = Ls) {
        return `${n || Ls}/watch/live-tv/#${t}`;
      }
      getLiveOriginIdFromVideoId(t) {
        var n;
        const e = t.replace(/^\/+/, "");
        if (/#/.test(e) && /watch\/live-tv/i.test(e)) {
          const t = (n = e.split("#").pop()) === null || n === undefined ? undefined : n.trim();
          if (t && t.toLowerCase() !== "open") {
            return t;
          }
        }
        const i = e.match(/live-tv\/([^/#]+)/i);
        if (i == null ? undefined : i[1]) {
          return i[1];
        } else if (/^\d+$/.test(e)) {
          return e;
        } else {
          return undefined;
        }
      }
      getLocaleFromVideoId(t) {
        return this.H(t.replace(/^\/+|\/+$/g, ""));
      }
      H(t) {
        const n = t.split("/")[0];
        if (n && /^[a-z]{2}(?:-[a-z]{2})?$/i.test(n) && n.length <= 5) {
          return n.toLowerCase();
        } else {
          return Ls;
        }
      }
      R(t) {
        return Ms.test(t);
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
    }([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", Ni.PLUTO_TV, false, ["browse_scripts/plutotv/plutotv_browse_bundled.js"]);
    Object.freeze(Rs);
    const Os = Rs;
    const Vs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("shahid.mbc.net");
          const e = t.pathname.includes(y.VIDEO_TYPES.SHOW);
          const i = t.pathname.includes(y.VIDEO_TYPES.LIVE_TV);
          return n && (e || i);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("shahid.mbc.net");
      }
      getVideoId(t) {
        return t.pathname.substring(4);
      }
    }([], ["content_scripts/shahid/shahid_content_bundled.js"], "shahid", Ni.SHAHID, false, ["browse_scripts/shahid/shahid_browse_bundled.js"]);
    Object.freeze(Vs);
    const Us = Vs;
    const Hs = new class extends Hi {
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
    }([], ["content_scripts/shudder/shudder_content_bundled.js"], us.SHUDDER, Ni.SHUDDER, false, ["browse_scripts/shudder/shudder_browse_bundled.js"]);
    Object.freeze(Hs);
    const Ns = Hs;
    const Gs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("watch.sling.com");
          const e = t.pathname.split("/");
          return n && e.length > 0 && e[e.length - 1] === "watch";
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".sling.com");
      }
      getVideoId(t) {
        return t.pathname.slice(1) || undefined;
      }
    }([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", Ni.SLING, false, ["browse_scripts/sling/sling_browse_bundled.js"]);
    Object.freeze(Gs);
    const zs = Gs;
    const Zs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("sonyliv.com");
          const e = t.searchParams.get("watch") === "true";
          return n && e;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".sonyliv.com");
      }
      getVideoId(t) {
        let n = t.pathname.substring(1);
        if (t.search) {
          n += t.search;
        }
        return n;
      }
    }([], ["content_scripts/sonyliv/sonyliv_content_bundled.js"], "sonyliv", Ni.SONY_LIV, false, ["browse_scripts/sonyliv/sonyliv_browse_bundled.js"]);
    Object.freeze(Zs);
    const Qs = Zs;
    const Ws = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("spotify.com");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".spotify.com");
      }
      getVideoId(t) {
        const n = t.pathname.replace(/^\//, "");
        if (n.startsWith("track/")) {
          const t = n.split("/")[1];
          if (t) {
            return `track/${t}`;
          } else {
            return undefined;
          }
        }
        const e = t.searchParams.get("trackId");
        if (e) {
          return `track/${e}`;
        }
        return n + t.search || undefined;
      }
    }([], ["content_scripts/spotify/spotify_content_bundled.js"], "spotify", Ni.SPOTIFY, false);
    Object.freeze(Ws);
    const Ys = Ws;
    const Js = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("app.stan.com.au") || t.hostname.includes("play.stan.com.au");
          const e = t.pathname.split("/");
          return n && e.length === 4 && e[3] === "play";
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".stan.com.au");
      }
      getVideoId(t) {
        return t.pathname.split("/")[2];
      }
    }([], ["content_scripts/stan/stan_content_bundled.js"], "stan", Ni.STAN, false, ["browse_scripts/stan/stan_browse_bundled.js"]);
    Object.freeze(Js);
    const Ks = Js;
    const qs = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".starplus.") && t.pathname.includes("/video");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".starplus.");
      }
      getVideoId(t) {
        const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        if (n && n.length > 0) {
          return n[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", Ni.STAR_PLUS, false);
    Object.freeze(qs);
    const Xs = qs;
    const to = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname === "tsn.ca" || t.hostname.endsWith(".tsn.ca");
          const e = t.pathname.split("/").filter(Boolean);
          const i = e.indexOf("video");
          const s = Qe(t.pathname);
          const o = t.pathname.includes("/event/");
          const r = i !== -1;
          const a = i !== -1 && e.length > i + 1;
          console.log("checking tsn party url", {
            isTsn: n,
            hasVideoSection: r,
            hasExtraPathAfterVideo: a,
            isLive: s,
            isEvent: o
          });
          return n && (s || o || r && a);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".tsn.");
      }
      getVideoId(t) {
        return t.pathname.slice(1) || undefined;
      }
    }([], ["content_scripts/tsnplus/tsnplus_content_bundled.js"], "tsnplus", Ni.TSN_PLUS, false, ["browse_scripts/tsnplus/tsnplus_browse_bundled.js"]);
    Object.freeze(to);
    const no = to;
    const eo = new class extends Hi {
      isBrowsing(t) {
        return t.hostname.includes("tubitv.com");
      }
      isValidUrl(t) {
        return function (t) {
          const n = t.pathname.includes("live");
          const e = ["tv-shows", "movies"].some(n => t.pathname.includes(n)) && t.pathname.split("/").length > 2;
          return t.hostname.includes("tubitv.com") && (n || e);
        }(t);
      }
      getVideoId(t) {
        return t.pathname.split("/").slice(0, 3).join("/");
      }
    }([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", Ni.TUBI_TV, false, ["browse_scripts/tubitv/tubitv_browse_bundled.js"]);
    Object.freeze(eo);
    const io = eo;
    const so = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".unext.") && (t.pathname.includes("/play") || t.pathname.includes("/live"));
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".unext.");
      }
      getVideoId(t) {
        const n = t.pathname.split("/").filter(Boolean);
        if (n[0] === "play" && n.length >= 3) {
          return `${n[1]}/${n[2]}`;
        } else if (n[0] === "live" && n.length >= 2) {
          return n[1];
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/unext/unext_content_bundled.js"], "unext", Ni.UNEXT, false, ["browse_scripts/unext/unext_browse_bundled.js"]);
    Object.freeze(so);
    const oo = so;
    const ro = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes(".vidio.");
          const e = t.pathname.includes("/watch/") || t.pathname.includes("/live/");
          const i = t.pathname.includes("shorts");
          return n && e && !i;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".vidio.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/vidio/vidio_content_bundled.js"], "vidio", Ni.VIDIO, false, ["browse_scripts/vidio/vidio_browse_bundled.js"]);
    Object.freeze(ro);
    const ao = ro;
    const uo = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("viki.com");
          const e = t.pathname.includes("videos");
          return n && e;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".viki.com");
      }
      getVideoId(t) {
        const n = t.pathname.split("/");
        if (n.length === 3 && n[1] === "videos") {
          return n[2];
        }
      }
    }([], ["content_scripts/viki/viki_content_bundled.js"], "viki", Ni.VIKI, false, ["browse_scripts/viki/viki_browse_bundled.js"]);
    Object.freeze(uo);
    const co = uo;
    const ho = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("viu.com");
          const e = t.pathname.includes(C.VIDEO_TYPES.VIDEO);
          const i = t.pathname.includes(C.VIDEO_TYPES.LIVE);
          return n && (e || i);
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".viu.");
      }
      getVideoId(t) {
        return `${t.pathname.split("/")?.[4]}/${t.pathname.split("/")?.[5]}/${t.pathname.split("/")?.[6]}${t.search}`;
      }
    }([], ["content_scripts/viu/viu_content_bundled.js"], "viu", Ni.VIU, false, ["browse_scripts/viu/viu_browse_bundled.js"]);
    Object.freeze(ho);
    const lo = ho;
    const po = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          const n = t.hostname.includes("vix.com");
          const e = Object.values(m.PATH_TYPES).some(n => t.pathname.includes(n));
          return n && e;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("vix.com");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    }([], ["content_scripts/vix/vix_content_bundled.js"], "vix", Ni.VIX, false, ["browse_scripts/vix/vix_browse_bundled.js"]);
    Object.freeze(po);
    const fo = po;
    const Do = new class extends Hi {
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
    }([], ["content_scripts/willow/willow_content_bundled.js"], "willow", Ni.WILLOW, false, ["browse_scripts/willow/willow_browse_bundled.js"]);
    Object.freeze(Do);
    const vo = Do;
    const go = new class extends Hi {
      isBrowsing(t) {
        return !t.href.includes(".hotstar.") && !t.href.includes(".fubo.") && !t.href.includes("apps.disneyplus.") && !!t.href.includes("watch?");
      }
      isValidUrl(t) {
        return function (t) {
          return (!Ge(t) || !!t.pathname.includes("/watch")) && t.hostname.includes(".youtube.");
        }(t);
      }
      getVideoId(t) {
        let n;
        const {
          pathname: e,
          searchParams: i,
          hostname: s
        } = t;
        if (ze(t)) {
          const t = e.split("/").filter(Boolean);
          if (t[0] === "watch" && t[1]) {
            n = t[1];
          }
        } else if (e.startsWith("/watch")) {
          n = i.get("v") || undefined;
        } else if (e.startsWith("/shorts/")) {
          n = e.split("/").filter(Boolean)[1];
        }
        if (!n && (t.href.includes("/watch") || t.href.includes("/shorts/"))) {
          const e = /(youtu.*be.*)\/(watch.*?v=|embed\/|v|shorts\/|shorts|)(.*?((?=[&#?])|$))/gm.exec(t.href);
          n = e != null && e.length > 3 && e[3] ? e[3] : undefined;
        }
        if (!n) {
          const t = e.split("/").filter(Boolean);
          const i = t[t.length - 1];
          if (e.startsWith("/embed/")) {
            n = i !== "embed" ? i : undefined;
          } else if (e.startsWith("/v/")) {
            n = i !== "v" ? i : undefined;
          } else if (s === "youtu.be") {
            n = i;
          }
        }
        return n || "browsing";
      }
    }([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", Ni.YOUTUBE, false, []);
    Object.freeze(go);
    const mo = go;
    const wo = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes(".zee5.") && t.pathname.split("/").length >= 5;
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".zee5.");
      }
      getVideoId(t) {
        const n = t.pathname.substring(1).split("global/");
        return n[n.length - 1];
      }
    }([], ["content_scripts/zee5/zee5_content_bundled.js"], "zee5", Ni.ZEE5, false, ["browse_scripts/zee5/zee5_browse_bundled.js"]);
    Object.freeze(wo);
    const yo = wo;
    const bo = new class extends Hi {
      N(t) {
        return t === "nba.com" || t.endsWith(".nba.com");
      }
      G(t) {
        return !!t.startsWith("/watch/feature") || !!t.startsWith("/watch/nba-tv") || t.startsWith("/watch/") || t.startsWith("/game/");
      }
      isBrowsing(t) {
        return t.hostname.includes(".nba.");
      }
      isValidUrl(t) {
        return this.N(t.hostname) && this.G(t.pathname.toLowerCase());
      }
      getVideoId(t) {
        const n = t.pathname.replace(/\/+$/, "").replace(/^\/+/, "");
        const e = n.toLowerCase();
        if (e.startsWith("game/") || e.startsWith("watch/")) {
          return n;
        }
      }
    }([], ["content_scripts/leaguepass/leaguepass_content_bundled.js"], "leaguepass", Ni.LEAGUE_PASS, false, ["browse_scripts/leaguepass/leaguepass_browse_bundled.js"]);
    Object.freeze(bo);
    const Co = bo;
    const Fo = new class extends Hi {
      isBrowsing(t) {
        return t.hostname.includes(".dazn.");
      }
      isValidUrl(t) {
        return t.hostname.includes("dazn.com");
      }
      getVideoId(t) {
        const n = t.pathname.split("/").filter(Boolean);
        if (/^[a-z]{2}-[A-Z]{2}$/.test(n[0])) {
          n.shift();
        }
        return n.join("/");
      }
    }([], ["content_scripts/dazn/dazn_content_bundled.js"], "dazn", Ni.DAZN, false, ["browse_scripts/dazn/dazn_browse_bundled.js"]);
    Object.freeze(Fo);
    const _o = Fo;
    function Eo(t) {
      return t.hostname.includes("miguvideo.com") && (t.pathname === "/" || t.pathname === "");
    }
    const xo = new class extends Hi {
      isBrowsing(t) {
        return !Eo(t) && t.hostname.includes(".miguvideo.");
      }
      isValidUrl(t) {
        return !!t.hostname.includes("miguvideo.com") && !!t.pathname.startsWith("/p/") || Eo(t);
      }
      getVideoId(t) {
        if (Eo(t)) {
          return "live/home";
        }
        const n = t.pathname;
        const e = n.indexOf("/p/");
        if (e !== -1) {
          return n.substring(e + 3);
        } else {
          return undefined;
        }
      }
    }([], ["content_scripts/migu/migu_content_bundled.js"], "migu", Ni.MIGU, false, ["browse_scripts/migu/migu_browse_bundled.js"]);
    Object.freeze(xo);
    const ko = xo;
    const Ao = new class extends Hi {
      isValidUrl(t) {
        return function (t) {
          return t.hostname.includes("f1tv.formula1.com") && t.pathname.includes("/detail/");
        }(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("f1tv.formula1.com") && !this.isValidUrl(t);
      }
      getVideoId(t) {
        const n = t.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
        if (n.startsWith("detail/")) {
          return n;
        }
      }
    }([], ["content_scripts/f1_tv/f1_tv_content_bundled.js"], us.F1_TV, Ni.F1_TV, false, ["browse_scripts/f1_tv/f1_tv_browse_bundled.js"]);
    Object.freeze(Ao);
    const Io = [Ss, bs, ns, gs, zi, mo, Xi, os, $s, ws, Ps, Xs, ks, fs, Qi, Os, Es, io, Is, Ks, Ki, zs, is, ds, co, Ys, Fs, Qs, oo, vo, yo, as, Yi, Us, lo, ao, Ns, hs, no, Co, _o, fo, ko, Ao];
    const Bo = Object.fromEntries(Io.map(t => [t.name, t]));
    function So(t) {
      return Bo[t];
    }
    var jo;
    var $o;
    var To;
    function Po(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Mo {
      constructor(t, n, e) {
        this.Z = t;
        this.W = n;
        this.Y = e;
        bi("Chat forwarder");
      }
      onMessage(t, n, e) {
        switch (t.type) {
          case ki.LOAD_SESSION:
            {
              const n = t;
              this.J(n.data);
              return false;
            }
          case Ai.ON_MESSAGE:
            {
              const n = t;
              this.K(n);
              this.Y.onChatMessage();
              return false;
            }
          case Ai.ON_BUFFER:
            {
              const n = t;
              this.q(n);
              return false;
            }
          case Ai.ON_TYPING:
            {
              const n = t;
              this.X(n);
              return false;
            }
          case Ai.ON_WATCHING_ADS:
            {
              const n = t;
              this.tt(n);
              return false;
            }
          case Ai.UPDATE_SETTINGS:
            {
              const n = t;
              this.nt(n);
              return false;
            }
          case Ai.ON_REACTION:
            {
              const n = t;
              this.et(n);
              return false;
            }
          case Ai.ON_GIF:
            {
              const n = t;
              this.it(n);
              return false;
            }
          case Ai.USER_LIST:
            {
              const n = t;
              this.st(n);
              return false;
            }
          case Ai.ON_WEB_RTC:
            this.Z.onWebRTC(t.data);
            e();
            return true;
          case ri.SET_CHAT_VISIBLE:
            {
              const n = t;
              this.ot(n.data);
              e();
              return false;
            }
          case ri.SET_USER_REACTIONS_DISABLED:
            {
              const n = t;
              this.Z.setUserReactionsDisabledStatus(n.data.disabled);
              e();
              return false;
            }
          case Ii.SIDEBAR_MESSAGING_READY:
            {
              console.log("Sidebar Ready");
              Ti("cs_sidebar_messaging_ready");
              const t = window.teleparty?.tabId;
              console.log(t);
              this.Z.setChatFrameReady(t ?? 0);
              e();
              return true;
            }
          case Ii.DISPLAY_MODAL:
            {
              const n = t.data;
              console.log(n);
              return true;
            }
          case Ii.SHARE_SHEET:
            {
              const n = t.data;
              navigator.share({
                url: n.url,
                title: n == null ? undefined : n.name,
                text: n == null ? undefined : n.title
              });
              e();
              return true;
            }
          case Ii.TRACK_DATA:
            {
              const n = t.data;
              window.postMessage({
                type: "TP_GTM_EVENT",
                payload: Object.assign({}, n)
              }, "*");
              e();
              return true;
            }
          case Ii.ON_UPDATE_SETTINGS:
            {
              const n = t.data;
              this.Z.doUpdateSettings(n);
              e();
              return true;
            }
          case Ii.ON_CHROME_STORAGE_UPDATE:
            try {
              chrome.storage.local.set(t.data);
            } catch (t) {
              console.log("Failed to update chrome storage");
            }
            e();
            return true;
          case Ii.SET_REACTIONS_ACTIVE:
            {
              const n = t.data;
              this.Z.setReactionsActive(n);
              e();
              return true;
            }
          case Ii.RESET_VIEW:
            this.Z.resetChatWindow(true);
            e();
            return true;
          case Ii.ON_FOCUS:
            this.Z.onSidebarFocus();
            e();
            return true;
          case Ii.PREVIEW_REACTION:
            {
              const n = t.data;
              this.Z.showReaction(n);
              e();
              return true;
            }
          case Ii.RESET_CHAT_WINDOW:
            this.Z.setChatVisible(false);
            this.Z.removeChat();
            this.Z.reloadChat();
            this.Z.setChatVisible(true);
            e();
            return true;
          case "onUpdateSettings":
            {
              const n = t.data;
              this.Z.doUpdateSettings(n);
              e();
              return true;
            }
          case Ii.RECEIVED_MESSAGE:
            if (!this.Z.shouldChatBeVisible() && (t.data?.originalMessage?.isSystemMessage === false || !!t.data?.originalMessage?.gifObject)) {
              this.Z.incrementUnreadMessagesCount();
              e();
            }
            return true;
          default:
            return false;
        }
      }
      teardown() {
        this.Z.teardown();
      }
      ot(t) {
        return Po(this, undefined, undefined, function* () {
          const n = this.Z.getSessionId();
          if (n) {
            const t = yield Vi.getItemsAsync(["REDIRECT_URL"]);
            if (t.REDIRECT_URL && t.REDIRECT_URL[n]) {
              this.Z.setPartyUrl(t.REDIRECT_URL[n]);
            }
            const e = yield Fi.I(new Ui(si, ei, {
              key: "sportLobby"
            }));
            if ((e == null ? undefined : e.result) && e.result.includes(n)) {
              this.Z.setPartyUrl(e.result);
            }
          }
          if (this.Z.isPartyWindowsActive()) {
            if (t.visible) {
              yield this.Z.resetChatWindow();
            } else {
              yield this.Z.hideChatWindow();
            }
          } else {
            yield this.Z.setChatVisible(t.visible);
            this.Z.fixPageControls();
          }
        });
      }
      J(t) {
        return Po(this, undefined, undefined, function* () {
          if (t.isCreate) {
            Ti("cs_load_session_received");
          }
          const e = t.sessionCallbackData.sessionId;
          const i = `${o}/join/${e}`;
          this.Z.loadInitData(t);
          this.Z.setPartyUrl(i);
          this.Z.setSessionId(e);
          this.Z.setSessionReactionDisabledStatus(t.sessionCallbackData.reactionsDisabled === "true");
          if (t.sessionCallbackData.userList) {
            this.Z.loadUserList(t.sessionCallbackData.userList);
          }
          yield this.Z.rt();
          if (t.isCreate) {
            Ti("cs_chat_visible");
          }
          this.Y.onInitChat();
          this.Z.setSessionCreated(t.isCreate);
          const s = So(this.W.getStreamingServiceName())?.serverName;
          if (s) {
            this.Z.logSidebarInjected(s);
          }
          this.Z.sendInitDataToSidebar(t);
          if (t.showReviewMessage) {
            this.Z.addReviewMessage();
          }
          if (!t.isCreate) {
            for (const n of t.sessionCallbackData.messages) {
              if ("gifObject" in n) {
                this.Z.addGif(n);
              } else {
                this.Z.addMessage(n, true);
              }
            }
          }
        });
      }
      K(t) {
        this.Z.addMessage(t.data);
      }
      et(t) {
        this.Z.showReaction(t.data);
      }
      it(t) {
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
      nt(t) {
        this.Z.onUpdateSettingsMessage(t.data);
      }
      st(t) {
        this.Z.loadUserList(t.data.userList);
        this.Z.setSocketConnectionId(t.data.socketConnectionId);
      }
    }
    (function (t) {
      t.PAUSED = "paused";
      t.PLAYING = "playing";
    })(jo ||= {});
    (function (t) {
      t.LOADING = "loading";
      t.PLAYING = "playing";
      t.IDLE = "idle";
      t.AD_PLAYING = "ad_playing";
      t.PAUSED = "paused";
      t.NOT_READY = "not_ready";
    })($o ||= {});
    (function (t) {
      t.UPDATE_SESSION = "updateSession";
      t.NEXT_EPISODE = "nextEpisode";
      t.REBOOT_SESSION = "rebootSession";
      t.GET_SERVER_TIME = "getServerTime";
      t.RELOAD_PARTY = "reloadParty";
      t.PARTY_PHASE = "partyPhase";
    })(To ||= {});
    function Lo(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Ro {
      constructor() {
        this.resetTasks();
        this.ut = [];
        this.ct = 0;
        this.ht = Promise.resolve();
        this.lt = true;
      }
      createInstance() {
        return new Ro();
      }
      pushTask(t, n) {
        if (!this.lt) {
          return;
        }
        const e = {
          action: t,
          name: n
        };
        if (this.ct === 0) {
          this.resetTasks();
        }
        this.ct = this.ut.push(e);
        this.ht = this.ht.then(() => {
          if (this.ut.includes(e) && this.lt) {
            return this.dt(e)().then(() => {
              this.ut.shift();
              this.ct -= 1;
            });
          }
        });
      }
      disable() {
        this.lt = false;
        this.resetTasks();
      }
      enable() {
        this.lt = true;
      }
      resetTasks() {
        this.ht = Promise.resolve();
        this.ut = [];
        this.ct = 0;
      }
      dt(t) {
        return function () {
          return Lo(this, undefined, undefined, function* () {
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
        return this.ut.some(n => n.name === t);
      }
      removeTask(t) {
        this.ut = this.ut.filter((n, e) => n.name === t && e == 0 ? (console.error("Cannot filter active task"), true) : n.name !== t);
        this.ct = this.ut.length;
        console.log(this.ut);
      }
      getCurrentTasks() {
        return this.ut;
      }
    }
    const Oo = new Ro();
    const Vo = 2500;
    const Uo = 1000;
    const Ho = 7200000;
    const No = 120000;
    class Go extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.BROADCAST);
        this.data = e;
      }
    }
    const zo = 338;
    const Zo = chrome.runtime.getURL("img/x-circle.svg");
    const Qo = "with-chat";
    const Wo = "with-chat-ads";
    const Yo = "with-chat-video";
    const Jo = {
      title: "Teleparty | Disconnected from party",
      content: "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
      buttonTitle: "Return to Party"
    };
    const Ko = {
      title: "Teleparty | Are you still there?",
      content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
    };
    const qo = {
      title: "Teleparty | Disconnected from party",
      content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
      buttonTitle: "Return to Party"
    };
    const Xo = {
      title: "Teleparty | Disconnected from party",
      content: "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
      buttonTitle: "Return to Party"
    };
    const tr = {
      title: "Teleparty | Disconnected from party",
      content: "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
      buttonTitle: "Return to Party"
    };
    function nr(t, n) {
      er();
      const e = n ? function (t) {
        return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${Zo}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
      }(t) : function (t) {
        return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${Zo}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
      }(t);
      document.body.insertAdjacentHTML("afterbegin", e);
      jQuery("#alert-x-btn").click(() => {
        er();
      });
      if (n) {
        jQuery("#alert-return-btn").click(() => {
          er();
          window.location.href = n;
        });
      }
    }
    function er() {
      const t = document.querySelector("#alert-dialog-wrapper");
      if (t) {
        t.remove();
      }
    }
    class ir extends ji {
      constructor(t, n, e) {
        super(t, n, ki.TEARDOWN);
        this.data = e;
      }
    }
    class sr extends _i {
      constructor(t, n, e) {
        super(t, n, e);
        this.type = e;
      }
    }
    class or extends sr {
      constructor(t, n) {
        super(t, n, To.GET_SERVER_TIME);
      }
    }
    class rr extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.BROADCAST_NEXT_EPISODE);
        this.data = e;
      }
    }
    class ar extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.SET_BUFFERING);
        this.data = e;
      }
    }
    class ur extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.SET_WATCHING_ADS);
        this.data = e;
      }
    }
    var cr;
    (function (t) {
      t.POSTHOG = "posthog";
      t.METIS = "metis";
      t.BOTH = "both";
    })(cr ||= {});
    class hr extends ji {
      constructor(t, n, e, i = cr.BOTH) {
        super(t, n, ki.LOG_EVENT);
        this.eventPipelineTarget = cr.BOTH;
        this.data = e;
        this.sender = t;
        this.target = n;
        this.eventPipelineTarget = i;
      }
    }
    const lr = "PING";
    const dr = "SYNC";
    const pr = "PERIODIC_VALIDATION";
    const fr = "BROADCAST";
    const Dr = "ACTIVATION_CONTINUE_SYNC";
    class vr extends ji {
      constructor(t, n, e) {
        super(t, n, ki.STAY_ALIVE);
        this.data = e;
      }
    }
    function gr(t) {
      return typeof t == "object" && t !== null && "videoService" in t && "videoId" in t;
    }
    function mr(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const wr = new class {
      setItemsAsync(t) {
        return mr(this, undefined, undefined, function* () {
          return new Promise((n, e) => {
            chrome.storage.local.set(t, () => {
              if (chrome.runtime.lastError) {
                e(new Error("Failed to write to chrome storage. Please refresh the page and try again"));
              } else {
                n();
              }
            });
          });
        });
      }
    }();
    Object.freeze(wr);
    const yr = wr;
    function br(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const Cr = new class {
      getRedirectDataForTabAsync(t) {
        return br(this, undefined, undefined, function* () {
          const n = (yield Vi.getItemsAsync([mi])).redirectDataMap;
          const e = this.ft(t);
          if (n && n[e]) {
            const t = n[e];
            if (this.Dt(t)) {
              return t;
            }
          }
        });
      }
      deleteRedirectDataForTabAsync(t) {
        return br(this, undefined, undefined, function* () {
          const n = (yield Vi.getItemsAsync([mi])).redirectDataMap;
          const e = this.ft(t);
          if (n && n[e]) {
            delete n[e];
          }
          yield yr.setItemsAsync({
            [mi]: n
          });
        });
      }
      ft(t) {
        return t;
      }
      storeRedirectDataForTabAsync(t, n) {
        return br(this, undefined, undefined, function* () {
          console.log("store data for tab " + t);
          const e = this.ft(n);
          let i = yield Vi.getItemsAsync([mi]);
          i[e] = t;
          i = this.vt(i);
          yield yr.setItemsAsync({
            [mi]: i
          });
        });
      }
      vt(t) {
        return function (t, n) {
          const e = {};
          let i;
          for (i in t) {
            if (t.hasOwnProperty(i) && n(t[i])) {
              e[i] = t[i];
            }
          }
          return e;
        }(t, this.Dt);
      }
      Dt(t) {
        const n = t.date;
        return n !== undefined && typeof n == "number" && n <= Date.now() && Date.now() - n < 10800000;
      }
    }();
    Object.freeze(Cr);
    const Fr = Cr;
    var _r;
    var Er;
    var xr;
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
    })(_r ||= {});
    (function (t) {
      t.PLAY = "play";
      t.PAUSE = "pause";
      t.SEEK = "seek";
      t.EPISODE_JUMP = "episodeJump";
    })(Er ||= {});
    (function (t) {
      t.PARTY = "party";
    })(xr ||= {});
    class kr extends Ei {
      constructor(t, n, e, i, s) {
        super(t, n, xi.EVENT_SUCCESS);
        this.eventSuccess = e;
        this.extraArgs = s;
        this.loggerType = i;
      }
    }
    class Ar {
      constructor() {
        this.gt = n()("teleparty:log");
        this.wt = n()("teleparty:warn");
        this.yt = n()("teleparty:error");
        this.gt.log = console.debug.bind(console);
        this.wt.log = console.warn.bind(console);
        this.yt.log = console.error.bind(console);
      }
      static get instance() {
        Ar.bt ||= new Ar();
        return Ar.bt;
      }
      log(t, ...n) {
        this.gt(`[Teleparty] ${t}`, ...n);
      }
      warn(t, ...n) {
        this.wt(`[Teleparty] ${t}`, ...n);
      }
      error(t, ...n) {
        this.yt(`[Teleparty] ${t}`, ...n);
      }
    }
    const Ir = Ar.instance;
    function Br(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Sr {
      constructor(t, n, e, i) {
        this.Ct = [];
        this.Ft = 0;
        this._t = 0;
        this.Et = [];
        this.xt = false;
        this.kt = false;
        this.At = false;
        this.It = false;
        this.Bt = false;
        this.St = false;
        this.jt = undefined;
        this.$t = 0;
        this.Tt = 0;
        this.Pt = "";
        this.Mt = 0;
        this.Lt = {};
        this.Rt = () => Br(this, undefined, undefined, function* () {
          try {
            yield fetch("https://www3.doubleclick.net", {
              method: "HEAD",
              mode: "no-cors",
              cache: "no-store"
            });
            this.jt = false;
          } catch (t) {
            this.jt = true;
          }
        });
        this.Ot = () => Br(this, undefined, undefined, function* () {
          if (!this.Vt || this.Ut || this.xt) {
            return;
          }
          const t = this.W.getVideoElement();
          if (!t) {
            return;
          }
          const n = this.Ht();
          const e = Math.round((t.currentTime || 0) * 1000);
          if (!(Math.abs(n - e) <= Vo)) {
            console.log("Activation continue requested, syncing to current party time", n, e);
            yield this.W.setCurrentTime(n);
          }
        });
        this.Nt = (t = false, n = false, e = false, i) => Br(this, undefined, undefined, function* () {
          if (!e && this.W.shouldSuppressLocalBroadcast()) {
            return;
          }
          if (this.Ut) {
            return;
          }
          if (!this.Gt.shouldSync()) {
            return;
          }
          if (this.At) {
            this.forceSync();
            return;
          }
          if (!this.Bt && !n) {
            return;
          }
          const s = yield this.zt(e ? {
            sessionMetadataRefresh: true
          } : undefined);
          if (e && Object.keys(this.Lt).length > 0) {
            s.data.providerOffsets = Object.assign({}, this.Lt);
          }
          const o = e || (yield this.Zt(s.data, n, i));
          const r = yield this.Qt(s.data, n);
          if (o) {
            if ((this.Wt === Ni.ESPN || this.Wt === Ni.TSN_PLUS) && this.Yt(s.data, r)) {
              return;
            }
            yield this.Jt(s, e);
            if (r.length > 0) {
              this.Kt.logInteraction(r[0]);
            }
          } else if (t) {
            if (yield this.qt(n)) {
              const t = yield this.zt();
              const e = yield this.Qt(t.data, n);
              if ((this.Wt === Ni.ESPN || this.Wt === Ni.TSN_PLUS) && this.Yt(t.data, e)) {
                return;
              }
              yield this.Jt(t);
            }
          }
        });
        this.Xt = () => Br(this, undefined, undefined, function* () {
          if (this.tn == jo.PAUSED && this.nn) {
            clearInterval(this.nn);
            this.nn = setInterval(() => {
              this.en();
            }, 60000);
          }
          if (this.sn()) {
            return;
          }
          yield this.W.waitVideoDoneLoadingAsync();
          if (this.sn()) {
            return;
          }
          const t = yield this.W.getStateAsync();
          yield this.rn(t);
          const n = yield this.W.getStateAsync();
          yield this.an(n);
          if (this.Bt === false) {
            this.Bt = true;
          }
        });
        this.W = t;
        this.Z = n;
        this.Gt = e;
        this.Kt = i;
        this.Gt.setMessageForwarder(this);
        this.un = 0;
        this.Ut = false;
        this.tn = jo.PAUSED;
        this.cn = 0;
        this.hn = 0;
        this.ln = 0;
        this.Wt = this.W.getStreamingServiceName();
        bi("Video forwarder");
        this.Rt();
      }
      onMessage(t, n, e) {
        switch (t.type) {
          case ki.GET_VIDEO_DATA:
            this.dn(e);
            return true;
          case ki.LOAD_SESSION:
            {
              const n = t;
              this.pn(n.data);
              return false;
            }
          case To.UPDATE_SESSION:
            {
              const n = t;
              this.Dn(n.data);
              return false;
            }
          case To.NEXT_EPISODE:
            {
              const n = t;
              if (n.data.isNextEpisode === true) {
                this.vn(n.data);
              } else {
                this.gn(n.data);
              }
              return false;
            }
          case To.REBOOT_SESSION:
            {
              const n = t;
              this.mn(n.data, e);
              return true;
            }
          case To.RELOAD_PARTY:
            {
              const n = t.data;
              ((n == null ? undefined : n.source) === Sr.SIDEBAR_RELOAD_SOURCE ? this.wn() : this.reloadNextEpisode()).then(() => {
                console.log("Party Reloaded");
                e();
              }).catch(t => {
                console.log("Error reloading party", t);
                e({
                  error: String(t)
                });
              });
              return true;
            }
          case Ai.ON_WATCHING_ADS:
            {
              const n = t;
              this.tt(n);
              return false;
            }
          case Ii.GO_NEXT_EPISODE:
            this.W.triggerNextEpisodeClick();
            return true;
          default:
            return false;
        }
      }
      yn() {
        document.documentElement.setAttribute(Sr.ACTIVATION_EXPECTED_STATE_ATTR, this.tn.toString());
        document.documentElement.setAttribute(Sr.ACTIVATION_EXPECTED_SERVICE_ATTR, this.Wt);
      }
      bn() {
        const t = document.documentElement.getAttribute(Sr.ACTIVATION_EXPECTED_SERVICE_ATTR);
        if (!t || t === this.Wt) {
          document.documentElement.removeAttribute(Sr.ACTIVATION_EXPECTED_STATE_ATTR);
          document.documentElement.removeAttribute(Sr.ACTIVATION_EXPECTED_SERVICE_ATTR);
        }
      }
      tt(t) {
        if (t.data.anyoneWatchingAds && !this.kt) {
          Oo.pushTask(this.W.doAdCheck.bind(this.W), "doAdCheck");
          if (this.W.hasAdBreakWithinMs(Sr.UPCOMING_AD_PLAYTHROUGH_MS)) {
            this.W.play();
          } else {
            this.forceSync();
          }
        }
        this.kt = t.data.anyoneWatchingAds;
      }
      Cn() {
        return Br(this, undefined, undefined, function* () {
          const n = yield this.W.getVideoDataAsync();
          const e = yield this.W.getStateAsync();
          const i = e.playbackState.toString() === this.tn.toString() && Math.abs(e.playbackPositionMilliseconds - this.Ht()) < Vo && this.Fn === n.videoId || e.playbackState !== $o.PLAYING && e.playbackState !== $o.PAUSED || this.Ut;
          const s = So(this.W.getStreamingServiceName())?.serverName;
          if (s) {
            Fi.I(new kr(si, ei, {
              event_name: "periodic_video_state_checked",
              service: s,
              video_data: n,
              success: i
            }, xr.PARTY));
          }
        });
      }
      getOthersWatchingAds() {
        return this.kt;
      }
      get videoId() {
        return this.Fn;
      }
      set videoId(t) {
        this.Fn = t;
      }
      sendTeardown(t) {
        const n = new ir(si, ei, t);
        Fi.I(n);
      }
      teardown() {
        this.W.scheduledPartyPlaybackOnly = false;
        if (this.Vt) {
          this.W.pause();
        }
        this.Vt = undefined;
        this.St = false;
        this.bn();
        if (this._n) {
          clearInterval(this._n);
        }
        if (this.nn) {
          clearInterval(this.nn);
        }
        this.En();
        Oo.disable();
        this.Gt.stopListening();
      }
      isInParty() {
        return this.Vt != null;
      }
      isScheduledPartyPlaybackOnly() {
        return this.W.scheduledPartyPlaybackOnly;
      }
      mn(t, n) {
        Oo.resetTasks();
        if (this.Fn == t.videoId) {
          this.Dn(t);
        }
        n(this.Fn == t.videoId);
        const e = new hr(si, ei, {
          eventType: "reboot",
          sessionId: this.Vt
        });
        Fi.I(e);
      }
      tryBroadcast(t = false, n) {
        if (this.xt) {
          return;
        }
        if (this.At) {
          this.forceSync();
          return;
        }
        const e = this.W.shouldSuppressLocalBroadcast();
        const i = this.Ut;
        const s = !!this.Vt;
        const o = Oo.hasTaskInQueue(fr);
        if (!e && !i && !!s && !o) {
          Oo.pushTask(() => this.Nt(t, false, false, n), fr);
        }
      }
      setBuffering(t) {
        if (this.Vt) {
          const n = new ar(si, ei, {
            buffering: t
          });
          Fi.I(n);
        }
      }
      isWatchingAds() {
        return this.xt;
      }
      setWatchingAds(t, n) {
        if (this.Vt) {
          this.xt = t;
          const e = new ur(si, ei, {
            watchingAds: t,
            adDurationLeft: n
          });
          Fi.I(e);
        }
      }
      clearAdPresenceState() {
        this.kt = false;
        if (this.xt) {
          this.setWatchingAds(false);
        } else {
          this.xt = false;
        }
      }
      sendOtherEpisodeAsync(t, n) {
        return Br(this, undefined, undefined, function* () {
          return this.xn(t, false, n);
        });
      }
      sendNextEpisodeAsync(t, n) {
        return Br(this, undefined, undefined, function* () {
          return this.xn(t, true, n);
        });
      }
      xn(t, n, e) {
        return Br(this, undefined, undefined, function* () {
          if (this.Vt && t !== this.Fn && t !== this.kn) {
            this.kn = t;
            this.Ut = true;
            this.Kt.logInteraction(Er.EPISODE_JUMP);
            const i = {
              nextEpisode: t,
              isNextEpisode: n
            };
            if (this.Wt === Ni.YOUTUBE && window.location.href.includes("/shorts/")) {
              i.videoType = _r.SHORTS;
            }
            if (e !== undefined) {
              i.extraInfo = e;
            }
            const s = new rr(si, ei, i);
            const o = yield Fi.I(s);
            if (o && o.errorMessage === "Locked Session") {
              yield this.An(t);
            }
          }
        });
      }
      An(t) {
        return Br(this, undefined, undefined, function* () {
          try {
            yield Ye(() => t == this.Fn, 10000)();
            this.Ut = false;
          } catch (t) {
            this.In("An error has occured when trying to wait till the episode changed videos");
            const n = {
              showAlert: true,
              alertModal: Jo
            };
            this.sendTeardown(n);
          }
        });
      }
      Qt(t, n, e = false) {
        return Br(this, undefined, undefined, function* () {
          const e = [];
          if (t.lastKnownTime == null || t.lastKnownTimeUpdatedAt == null || t.state == null) {
            return e;
          }
          if (n && t.state === jo.PAUSED && t.lastKnownTime < Uo) {
            return e;
          }
          const i = Math.abs(t.lastKnownTime - this.Ht());
          if (t.state == this.tn && i < Uo) {
            return e;
          }
          if (i >= Uo && !this.W.scheduledPartyPlaybackOnly) {
            e.push(Er.SEEK);
            const t = new hr(si, ei, {
              name: "video_seek",
              action: {
                source: "self"
              }
            });
            Fi.I(t);
            if (this.Wt == Ni.PARAMOUNT) {
              yield We(200)();
            }
          }
          if (t.state != this.tn) {
            if (t.state === jo.PLAYING) {
              e.push(Er.PLAY);
            } else {
              e.push(Er.PAUSE);
            }
          }
          return e;
        });
      }
      Zt(t, n, e) {
        return Br(this, undefined, undefined, function* () {
          const i = yield this.Qt(t, n, true);
          if (e) {
            return e.some(t => i.includes(t));
          } else {
            return i.length > 0;
          }
        });
      }
      zt(t) {
        return Br(this, undefined, undefined, function* () {
          const n = yield this.W.getUpdateSessionDataAsync(t);
          n.lastKnownTimeUpdatedAt -= this._t;
          n.lastKnownTime = Math.round(n.lastKnownTime);
          return new Go(si, ei, n);
        });
      }
      forceSync() {
        Oo.pushTask(this.Xt, dr);
      }
      consumePendingCreatePlaybackBroadcast() {
        return !!this.St && (this.St = false, true);
      }
      syncToCurrentPartyTimeAfterActivation() {
        if (!Oo.hasTaskInQueue(Dr)) {
          Oo.pushTask(this.Ot, Dr);
        }
      }
      gn(t) {
        return Br(this, undefined, undefined, function* () {
          this.un = Date.now();
          Ir.log("Received other episode message, current task manager tasks are", Oo.getCurrentTasks());
          Oo.pushTask(() => this.Bn(t, false), "onOtherEpisodeAsync");
        });
      }
      vn(t) {
        return Br(this, undefined, undefined, function* () {
          this.un = Date.now();
          Ir.log("Received next episode message, current task manager tasks are", Oo.getCurrentTasks());
          Oo.pushTask(() => this.Bn(t, true), "onNextEpisodeAsync");
        });
      }
      Bn(t, n) {
        return Br(this, undefined, undefined, function* () {
          try {
            Ir.log(n ? "Starting next episode flow" : "Starting other episode flow");
            this.Ut = true;
            this.clearAdPresenceState();
            this.Fn = t.videoId;
            this.Kt.logInteraction(Er.EPISODE_JUMP, true);
            if (n) {
              yield this.W.jumpToNextEpisode(t);
            } else {
              yield this.W.jumpToOtherEpisode(t);
            }
            yield this.Gt.loadNewVideoAsync(t.videoId);
            bi("After load new video");
            this.Gt.reloadListeners();
            yield this.W.waitVideoDoneLoadingAsync();
            yield this.Sn(t.videoId, n ? "next_episode" : "other_episode");
            if (this.ln < this.un) {
              this.tn = jo.PAUSED;
              this.cn = 0;
              this.hn = Date.now();
              bi("Sending broadcast after episode change");
              Oo.pushTask(() => this.Nt(true, true, this.W.shouldForceEpisodeCompletionBroadcast()), fr);
              Oo.removeTask(dr);
            }
            this.Ut = false;
            this.clearAdPresenceState();
            const e = new hr(si, ei, {
              name: "video_start",
              action: {
                description: "video session has begun"
              }
            });
            Fi.I(e);
          } catch (t) {
            this.In("Error loading new video.");
            console.log("Error was", t);
            this.Ut = false;
            this.clearAdPresenceState();
            yield this.reloadNextEpisode();
          }
        });
      }
      persistExtension(t, n) {
        return Br(this, undefined, undefined, function* () {
          console.log("persist here");
          const s = window.teleparty?.tabId ?? 0;
          yield this.jn(s, t);
          const o = yield this.$n(n);
          const r = n ?? this.Tn(o);
          yield this.Pn(o, s, r);
        });
      }
      $n(t) {
        return Br(this, undefined, undefined, function* () {
          if (!t || !this.Vt) {
            return this.Mn();
          }
          switch (this.Wt) {
            case Ni.DISNEY_PLUS:
            case Ni.CANALPLUS:
              {
                const n = So(this.Wt);
                if (!n) {
                  break;
                }
                return {
                  sessionId: this.Vt,
                  videoId: this.Fn,
                  videoService: n.serverName,
                  serviceDomain: new URL(t).hostname,
                  selectedProvider: this.Ln
                };
              }
          }
          return this.Mn();
        });
      }
      reloadNextEpisode() {
        return Br(this, undefined, undefined, function* () {
          try {
            Ir.log("Attempting to reload next episode");
            const e = yield this.Mn();
            const i = this.Rn(this.On(e));
            const s = window.teleparty?.tabId ?? 0;
            yield this.Vn(e, s, i, false);
            Ir.log("Redirect URL is", i);
            if (function (t, n) {
              if (t === n) {
                return true;
              }
              try {
                const e = new URL(t);
                const i = new URL(n);
                if (e.origin !== i.origin) {
                  return false;
                }
                const s = t => {
                  const n = t.replace(/\/+$/, "");
                  if (n === "") {
                    return "/";
                  } else {
                    return n;
                  }
                };
                if (s(e.pathname) !== s(i.pathname)) {
                  return false;
                }
                const o = new URLSearchParams(i.search);
                for (const [t, n] of o.entries()) {
                  if (e.searchParams.get(t) !== n) {
                    return false;
                  }
                }
                return true;
              } catch (t) {
                return false;
              }
            }(window.location.href, i)) {
              const t = gr(e) ? e.videoService.toLowerCase() : "";
              if (t === "tsnplus" || Qe(new URL(window.location.href).pathname)) {
                Ir.log("Already on TSN redirect URL, skipping navigation");
                return;
              }
            }
            this.Un(i);
          } catch (t) {
            Ir.error("Error reloading next episode:", t);
            this.Hn("Failed to fix next episode.");
          }
        });
      }
      wn() {
        return Br(this, undefined, undefined, function* () {
          try {
            console.log("Reloading party from sidebar");
            const e = yield this.Mn();
            const i = this.Tn(e);
            const s = window.teleparty?.tabId ?? 0;
            yield this.Vn(e, s, i, false);
            console.log("Sidebar reload URL is", i);
            this.Un(i);
          } catch (t) {
            console.log("Error reloading party from sidebar", t);
            this.Hn("Failed to reload party from sidebar.");
          }
        });
      }
      Tn(t) {
        try {
          return this.Rn(this.On(t));
        } catch (t) {
          console.log("Unable to parse reload redirect URL. Reloading current page instead.", t);
          return window.location.href;
        }
      }
      Vn(t, n, e, i) {
        return Br(this, undefined, undefined, function* () {
          yield this.jn(n, i);
          yield this.Pn(t, n, e);
        });
      }
      jn(t, n) {
        return Br(this, undefined, undefined, function* () {
          const e = new vr(si, ei, {
            tabId: t,
            persist: n
          });
          yield Fi.I(e);
        });
      }
      Pn(t, n, e) {
        return Br(this, undefined, undefined, function* () {
          yield Fr.storeRedirectDataForTabAsync(this.Nn(t, e), n);
        });
      }
      Nn(t, n) {
        return Object.assign(Object.assign({}, t), {
          videoId: this.Fn || t.videoId || "",
          sessionId: t.sessionId ?? this.Vt ?? "",
          service: t.service ?? t.videoService ?? "",
          date: Date.now(),
          partyUrl: n
        });
      }
      Rn(t) {
        const n = new URL(t, window.location.href);
        if (n.protocol !== "http:" && n.protocol !== "https:") {
          throw new Error("Invalid reload redirect protocol");
        }
        return n.toString();
      }
      Un(t) {
        if (window.location.href !== t) {
          window.location.href = t;
        } else {
          window.location.reload();
        }
      }
      Hn(t) {
        this.In(t);
        const n = new ir(si, ei, {
          showAlert: true,
          alertModal: Xo
        });
        Fi.I(n);
      }
      Mn() {
        return Br(this, undefined, undefined, function* () {
          return new Promise((t, n) => {
            const e = new XMLHttpRequest();
            e.timeout = 10000;
            e.ontimeout = () => {
              n(new Error());
            };
            e.onreadystatechange = () => {
              if (e.readyState === XMLHttpRequest.DONE) {
                try {
                  const n = JSON.parse(e.responseText);
                  t(n);
                } catch (t) {
                  n(t);
                  this.In("Unable to get video endpoint data to reload session");
                }
              }
            };
            e.open("GET", `${s}/video?session=${this.Vt}`, true);
            e.send(null);
          });
        });
      }
      On(t) {
        if (gr(t)) {
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
                const n = t.serviceDomain;
                if (n) {
                  return `https://${n}/gp/video/detail/${t.videoId}?autoplay=1`;
                }
                throw new Error("No service Domain");
              }
            case "hbomax":
              return `https://play.hbomax.com/video/watch/${t.videoId}`;
            case "youtube":
              {
                const n = t.videoId;
                const e = t.serviceDomain;
                if (e) {
                  if (n === "browsing") {
                    return window.location.href;
                  }
                  if (n && n !== "browsing") {
                    if (t.videoType === _r.SHORTS) {
                      return `https://${e}/shorts/${n}`;
                    }
                    const i = new URL(`https://${e}/watch`);
                    i.searchParams.set("v", n);
                    return i.toString();
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
            case "peacock":
              {
                let n = "";
                n = t.videoType === "live" ? "live" : t.videoType === "event" ? "event" : "vod";
                return `https://www.peacocktv.com/watch/playback/${n}/${t.videoId}${t.state === "paused" ? "?paused=true" : ""}`;
              }
            case "disneymena":
              return `https://apps.disneyplus.com/${t.videoId}/watch`;
            case "appletv":
              return function (t) {
                const n = /^https?:\/\//i.test(t) ? new URL(t) : new URL(`https://tv.apple.com/${t.replace(/^\/+/, "")}`);
                n.searchParams.set("action", "play");
                return n.toString();
              }(t.videoId);
            case "max":
              return `https://play.max.com/video/watch/${t.videoId}`;
            case "plutotv":
              return Os.getWatchUrl(t.videoId);
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
                const n = t.videoId;
                if (n == null ? undefined : n.startsWith("live/")) {
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
              return `https://video.unext.jp/${t.videoType === _r.LIVE ? "live" : "play"}/${t.videoId}`;
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
              return this.Gn(t.videoId);
            case "vidio":
              return `https://www.vidio.com/${t.videoId}`;
            case "migu":
              return `https://www.miguvideo.com/p/${t.videoId}`;
            case "f1tv":
              return this.zn(t.videoId);
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
      zn(t) {
        const n = /^https?:\/\//i.test(t) ? new URL(t) : new URL(`https://f1tv.formula1.com/${t.replace(/^\/+/, "")}`);
        n.searchParams.set("action", "play");
        return n.toString();
      }
      Gn(t) {
        if (/^https?:\/\//i.test(t)) {
          return t;
        }
        const n = t.replace(/^\/+/, "");
        return `https://www.viu.com/${n.startsWith("ott/") ? n : `ott/sg1/en/${n}`}`;
      }
      Dn(t) {
        this.ln = Date.now();
        Oo.pushTask(this.Zn(t).bind(this), "Update Session Data");
      }
      Zn(t) {
        if (t.state === jo.PAUSED && this.tn === jo.PLAYING) {
          this.en();
          const t = new hr(si, ei, {
            name: "video_pause",
            action: {
              description: "video was played from pause",
              reason: "Video was played"
            }
          });
          Fi.I(t);
        } else if (t.state === jo.PLAYING && this.tn === jo.PAUSED) {
          const t = new hr(si, ei, {
            name: "video_resume",
            action: {
              description: "video was played from pause",
              reason: "Video was played"
            }
          });
          Fi.I(t);
          this.en();
        }
        this.tn = t.state;
        this.cn = t.lastKnownTime;
        this.hn = t.lastKnownTimeUpdatedAt;
        if (t.providerOffsets) {
          this.Lt = t.providerOffsets;
        }
        this.yn();
        return this.Xt;
      }
      dn(t) {
        var n;
        return Br(this, undefined, undefined, function* () {
          try {
            const e = yield this.W.getVideoDataAsync();
            if ((n = e.serviceDomain) === null || n === undefined) {
              e.serviceDomain = window.location.hostname;
            }
            const i = yield this.W.getStateAsync();
            e.is_player_fullscreen = document.fullscreenElement != null || document.webkitIsFullScreen;
            e.is_chat_visible = this.Z.getChatVisible();
            e.is_adblock_enabled = this.jt;
            e.video_ts_ms = Math.round(i.playbackPositionMilliseconds);
            e.party_ts_ms = this.cn;
            e.service = this.W.getInternalStreamingServiceName();
            t(e);
          } catch (n) {
            console.error(n);
            t({
              error: n
            });
          }
        });
      }
      In(t) {
        const n = new hr(si, ei, {
          name: "video_error",
          action: {
            description: t,
            reason: "An errors has occurred during video playback"
          }
        });
        Fi.I(n);
      }
      Yt(t, n) {
        const e = n[0] || (t.state === jo.PLAYING ? Er.PLAY : Er.PAUSE);
        const i = e === Er.SEEK ? 500 : 1000;
        const s = `${e}:${t.state}:${Math.round(t.lastKnownTime / i)}`;
        const o = Date.now();
        return this.Pt === s && o - this.Mt < 500 || (this.Pt = s, this.Mt = o, false);
      }
      qt(t) {
        return Br(this, undefined, undefined, function* () {
          return new Promise(n => {
            const e = performance.now();
            const i = () => Br(this, undefined, undefined, function* () {
              if (performance.now() - e >= 2500) {
                n(false);
              } else {
                const e = yield this.zt();
                if (yield this.Zt(e.data, t)) {
                  n(true);
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
      Jt(t, n = false) {
        return Br(this, undefined, undefined, function* () {
          if (this.Ut || this.xt || !n && this.W.shouldSuppressLocalBroadcast()) {
            return;
          }
          const e = this.tn;
          if (t.data.bufferingState) {
            t.data.state = jo.PAUSED;
            yield Fi.I(t, 1000);
            yield this.W.waitVideoDoneLoadingAsync();
            const n = yield this.zt();
            n.data.bufferingState = true;
            if (e == jo.PLAYING) {
              n.data.state = jo.PLAYING;
            }
            yield Fi.I(n, 1000);
            this.tn = n.data.state;
            this.cn = n.data.lastKnownTime;
            this.hn = Date.now();
          } else {
            yield Fi.I(t, 1000);
            this.tn = t.data.state;
            this.cn = t.data.lastKnownTime;
            this.hn = Date.now();
          }
        });
      }
      pn(t) {
        var n;
        return Br(this, undefined, undefined, function* () {
          Oo.enable();
          Oo.resetTasks();
          const s = t.sessionCallbackData;
          this.W.scheduledPartyPlaybackOnly = s.sessionType === "scheduled" || ((n = s.videoService) === null || n === undefined ? undefined : n.toLowerCase()) === "crave" && (s.videoId ?? "").startsWith("live/");
          this.Vt = s.sessionId;
          this.tn = s.state;
          this.cn = Number(s.lastKnownTime);
          this.hn = Number(s.lastKnownTimeUpdatedAt);
          this.Fn = s.videoId;
          this.kt = false;
          this.yn();
          if (s.controlLock == "true") {
            this.At = true;
          }
          if (s.reactionsDisabled == "true") {
            this.It = true;
          }
          this.Ln = s.selectedProvider;
          this.Qn = s.defaultProvider;
          this.Lt = s.providerOffsets ?? {};
          this.Wn();
          if (t.isCreate) {
            this.Bt = true;
            this.St = true;
            Oo.pushTask(this.Nt.bind(this), fr);
          } else if (s.sessionType === "scheduled") {
            this.Bt = true;
            Oo.pushTask(() => this.Nt(false, false, true), fr);
            this.forceSync();
          } else {
            this.forceSync();
          }
          const o = new hr(si, ei, {
            name: "video_start",
            action: {
              description: "video session has begun"
            }
          });
          Fi.I(o);
          this.Gt.startListening();
          this.Yn();
          if (!t.isCreate) {
            this.Jn(s.videoId, "join");
          }
        });
      }
      Jn(t, n) {
        return Br(this, undefined, undefined, function* () {
          yield this.W.waitVideoDoneLoadingAsync().catch(() => {});
          yield this.Sn(t, n);
        });
      }
      Sn(t, n) {
        var i;
        return Br(this, undefined, undefined, function* () {
          const s = So(this.W.getStreamingServiceName())?.serverName;
          if (!s) {
            return;
          }
          let o;
          try {
            o = yield this.W.getVideoDataAsync();
          } catch (t) {
            return;
          }
          const r = (t == null ? undefined : t.trim()) || undefined;
          const a = ((i = o.videoId) === null || i === undefined ? undefined : i.trim()) || undefined;
          let u;
          if (r) {
            if (a) {
              if (r !== a) {
                u = "mismatch";
              }
            } else {
              u = "actual_video_id_missing";
            }
          } else {
            u = "expected_video_id_missing";
          }
          Fi.I(new kr(si, ei, {
            event_name: "video_id_correct",
            service: s,
            video_data: o,
            success: !u,
            extra_info: Object.assign({
              trigger: n,
              expected_video_id: r ?? null,
              actual_video_id: a ?? null
            }, u ? {
              failure_reason: u
            } : {})
          }, xr.PARTY));
        });
      }
      Kn() {
        return new Promise(t => {
          const n = new or(si, ei);
          const e = Date.now();
          Fi.I(n).then(t => {
            const n = Date.now();
            if (t) {
              const i = t.serverTime;
              if (i) {
                Je(this.Ct, n - e, 5);
                this.Ft = Ke(this.Ct);
                Je(this.Et, n - Math.round(this.Ft / 2) - i, 5);
                this._t = Ke(this.Et);
              }
            }
          }).catch(t => {
            bi(t);
            this.In(t);
          });
          t();
        });
      }
      en() {
        const t = new hr(si, ei, {
          name: "video_heartbeat",
          action: {
            description: "new heartbeat",
            reason: "Heartbeat session was due"
          }
        });
        Fi.I(t);
      }
      Yn() {
        if (this._n) {
          clearInterval(this._n);
        }
        if (this.nn) {
          clearInterval(this.nn);
        }
        this._n = setInterval(() => {
          if (!Oo.hasTaskInQueue(dr)) {
            Oo.pushTask(this.Xt, dr);
          }
        }, 5000);
        this.nn = setInterval(() => {
          this.en();
        }, 60000);
        this.qn = setInterval(() => {
          if (!Oo.hasTaskInQueue(lr)) {
            Oo.pushTask(this.Kn.bind(this), lr);
          }
        }, 12500);
        this.Xn = setInterval(() => {
          if (!Oo.hasTaskInQueue(pr)) {
            Oo.pushTask(this.Cn.bind(this), pr);
          }
        }, 300000);
        this.Kn();
      }
      sn() {
        return !this.Vt || this.W.uiEventsHappening > 0 || this.W.shouldCancelSync() || this.xt || this.kt && this.W.hasAdBreakWithinMs(Sr.UPCOMING_AD_PLAYTHROUGH_MS) || this.Ut || !this.Gt.shouldSync();
      }
      rn(t) {
        return Br(this, undefined, undefined, function* () {
          if (this.W.scheduledPartyPlaybackOnly) {
            return;
          }
          const n = this.Ht();
          if (Math.abs(n - t.playbackPositionMilliseconds) <= this.W.getSyncToleranceMs(Vo)) {
            return;
          }
          const e = this.Wt === Ni.ESPN;
          if (e) {
            if (Date.now() - this.$t < 1000 && Math.abs(n - this.Tt) < 1500) {
              return;
            }
          }
          this.W.beginRemoteSyncApply();
          const i = Date.now();
          try {
            yield this.W.setCurrentTime(n);
            if (e) {
              this.$t = i;
              this.Tt = n;
            } else if (this.tn === jo.PLAYING) {
              yield this.W.play();
            }
            this.Kt.logInteraction(Er.SEEK, true);
            const t = new hr(si, ei, {
              name: "video_seek",
              action: {
                source: "another user"
              }
            });
            Fi.I(t);
          } finally {
            this.W.endRemoteSyncApply();
          }
        });
      }
      an(t) {
        return Br(this, undefined, undefined, function* () {
          if (!this.W.scheduledPartyPlaybackOnly && t.playbackState.toString() !== this.tn.toString()) {
            this.W.beginRemoteSyncApply();
            try {
              if (this.tn === jo.PAUSED) {
                this.Kt.logInteraction(Er.PAUSE, true);
                yield this.W.pause();
              } else if (this.tn === jo.PLAYING) {
                this.Kt.logInteraction(Er.PLAY, true);
                yield this.W.play();
              }
            } finally {
              this.W.endRemoteSyncApply();
            }
          }
        });
      }
      te() {
        if (this.tn === jo.PLAYING) {
          return Date.now() - (this.hn + this._t);
        } else {
          return 0;
        }
      }
      Ht() {
        return this.cn + this.te() + this.ne();
      }
      ne() {
        var t;
        if (this.Ln && this.Ln !== this.Qn && (t = this.Lt[this.Ln]) !== null && t !== undefined) {
          return t;
        } else {
          return 0;
        }
      }
      ee() {
        return !!this.Ln && !!this.Qn && this.Ln !== this.Qn;
      }
      Wn() {
        this.En();
        if (this.ee()) {
          this.ie = setInterval(() => {
            this.se();
          }, Sr.REPORT_POSITION_INTERVAL_MS);
        }
      }
      En() {
        if (this.ie) {
          clearInterval(this.ie);
          this.ie = undefined;
        }
      }
      se() {
        return Br(this, undefined, undefined, function* () {
          if (this.ee() && this.tn === jo.PLAYING) {
            try {
              const t = yield this.W.getStateAsync();
              const n = {
                type: xi.REPORT_STREAM_POSITION,
                sender: si,
                target: ei,
                data: {
                  lastKnownTime: Math.round(t.playbackPositionMilliseconds),
                  lastKnownTimeUpdatedAt: Date.now() - this._t,
                  selectedProvider: this.Ln
                }
              };
              yield Fi.I(n, 2000);
            } catch (t) {}
          }
        });
      }
      get changingVideo() {
        return this.Ut;
      }
      set changingVideo(t) {
        this.Ut = t;
      }
      isPartyPaused() {
        return this.tn === jo.PAUSED;
      }
    }
    Sr.ACTIVATION_EXPECTED_STATE_ATTR = "data-tp-activation-expected-state";
    Sr.ACTIVATION_EXPECTED_SERVICE_ATTR = "data-tp-activation-expected-service";
    Sr.SIDEBAR_RELOAD_SOURCE = "sidebar";
    Sr.REPORT_POSITION_INTERVAL_MS = 8000;
    Sr.UPCOMING_AD_PLAYTHROUGH_MS = 5000;
    const jr = {
      showAlert: false
    };
    const $r = {
      showAlert: true,
      alertModal: qo
    };
    e(7588);
    class Tr extends ji {
      constructor(t, n, e) {
        super(t, n, ki.POSTHOG_HAS_FEATURE);
        this.data = {
          featureName: e
        };
      }
    }
    class Pr extends _i {
      constructor(t, n, e) {
        super(t, n, e);
        this.type = e;
      }
    }
    class Mr extends Pr {
      constructor(t, n, e = false) {
        super(t, n, ri.GET_INIT_USER_SETTINGS);
        this.shouldRefresh = e;
        this.data = {
          shouldRefresh: e
        };
      }
    }
    function Lr(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const Rr = "api_feature_flags_cache_v1";
    const Or = 600000;
    const Vr = "ff_version";
    const Ur = "allchat_comment_viewed";
    let Hr = null;
    const Nr = t => Lr(undefined, undefined, undefined, function* () {
      const n = Date.now();
      if (!t && Hr && n - Hr.fetchedAtMs < Or) {
        return Hr;
      }
      if (!t) {
        const t = yield Lr(undefined, undefined, undefined, function* () {
          try {
            const {
              [Rr]: t
            } = yield chrome.storage.local.get(Rr);
            if (t == null ? undefined : t.flags) {
              if (Date.now() - t.fetchedAtMs > Or) {
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
          Hr = t;
          return t;
        }
      }
      try {
        const t = yield fetch(`${s}/feature-flags`, {
          cache: "no-cache"
        });
        if (!t.ok) {
          throw new Error(`HTTP ${t.status}`);
        }
        const {
          flags: e,
          ffVersion: i
        } = (t => {
          if (!t || typeof t != "object") {
            return {
              flags: {}
            };
          }
          const n = Object.entries(t);
          const e = t[Vr];
          const i = typeof e == "string" || typeof e == "number" ? String(e) : undefined;
          return {
            flags: Object.fromEntries(n.filter(([t]) => t !== Vr).map(([t, n]) => [t, !!n])),
            ffVersion: i
          };
        })(yield t.json());
        yield ((t, n) => Lr(undefined, undefined, undefined, function* () {
          const e = {
            flags: t,
            fetchedAtMs: Date.now(),
            ffVersion: n
          };
          Hr = e;
          try {
            yield chrome.storage.local.set({
              [Rr]: e
            });
          } catch (t) {}
        }))(e, i);
        return {
          flags: e,
          fetchedAtMs: n,
          ffVersion: i
        };
      } catch (t) {
        if (Hr) {
          return Hr;
        }
        const n = yield chrome.storage.local.get(Rr).then(t => t[Rr]).catch(() => {});
        if (n == null ? undefined : n.flags) {
          Hr = n;
          return n;
        } else {
          return {
            flags: {},
            fetchedAtMs: 0
          };
        }
      }
    });
    function Gr(t) {
      return Lr(this, undefined, undefined, function* () {
        return !!(yield function (t = false) {
          return Lr(this, undefined, undefined, function* () {
            return (yield Nr(t)).flags;
          });
        }())[t];
      });
    }
    var zr;
    (function (t) {
      t.GET_AUTH_TOKEN = "getAuthToken";
      t.SIGN_OUT = "signOut";
      t.GET_SIGN_OUT_EPOCH = "getSignOutEpoch";
    })(zr ||= {});
    class Zr extends _i {
      constructor(t, n, e) {
        super(t, n, e);
        this.type = e;
      }
    }
    class Qr extends Zr {
      constructor(t, n) {
        super(t, n, zr.GET_AUTH_TOKEN);
      }
    }
    class Wr extends ji {
      constructor(t, n, e) {
        super(t, n, ki.UPDATE_HANDLE);
        this.handle = e;
      }
    }
    function Yr(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    function Jr(t, n, e = "", i = true, s = "after") {
      if (i) {
        const n = document.getElementById(t);
        if (n) {
          n.remove();
        }
      }
      if (n) {
        const i = document.createElement("div");
        i.id = t;
        if (e) {
          i.style.cssText = e;
        }
        if (s === "before" && n.firstChild) {
          n.insertBefore(i, n.firstChild);
        } else {
          n.appendChild(i);
        }
        return i;
      }
      return null;
    }
    function Kr(t) {
      const n = `img/reactions/${encodeURIComponent(t)}`;
      return {
        staticSrc: chrome.runtime.getURL(`${n}/${encodeURIComponent(t)}_static.svg`),
        gifSrc: chrome.runtime.getURL(`${n}/${encodeURIComponent(t)}.gif`)
      };
    }
    function qr(t) {
      return Yr(this, undefined, undefined, function* () {
        if (t == null ? undefined : t.knownHandle) {
          return {
            userData: undefined,
            handle: t.knownHandle
          };
        }
        let s = yield Fi.I(new Mr(ii, ei, Boolean(t == null ? undefined : t.forceRefresh)));
        let o = (s == null ? undefined : s.currentUser)?.handle || undefined;
        if (!o && !!(s == null ? undefined : s.signedIn) && !(t == null ? undefined : t.forceRefresh)) {
          s = yield Fi.I(new Mr(ii, ei, true));
          o = (s == null ? undefined : s.currentUser)?.handle || undefined;
        }
        if (!o && (s == null ? undefined : s.signedIn)) {
          try {
            const t = yield Fi.I(new Qr(si, ei));
            const n = yield ti("handles/me", "GET", true, undefined, t == null ? undefined : t.token);
            const e = (n == null ? undefined : n.data)?.handle;
            if (typeof e == "string" && e.length > 0) {
              Fi.I(new Wr(si, ei, e));
              o = e;
            }
          } catch (t) {}
        }
        return {
          userData: s,
          handle: o
        };
      });
    }
    function Xr(t, n) {
      return Yr(this, undefined, undefined, function* () {
        Fi.I(new hr(si, ei, Object.assign({
          name: t
        }, n ? {
          allchat_ui: n
        } : {}), cr.POSTHOG));
      });
    }
    function ta(t, n, e, i) {
      const s = i ? t.replace(/<title>[\s\S]*?<\/title>/i, "") : t;
      const o = s.indexOf(">");
      if (o === -1) {
        return s;
      }
      const r = s.slice(0, o + 1);
      const a = s.slice(o + 1);
      const u = n ? `id="${n}" ` : "";
      let c = (e ?? "").trim();
      if (c && !c.endsWith(";")) {
        c += ";";
      }
      c += "pointer-events:auto!important;";
      const h = `style="${c}" `;
      const l = `${r.replace("<svg ", `<svg ${u}${h}`)}${a}`;
      if (i) {
        return `<span class="allchat-has-tooltip" data-tooltip="${i}" aria-label="${i}">${l}</span>`;
      } else {
        return l;
      }
    }
    function na(t, n) {
      return ta("\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g clip-path=\"url(#clip0_1785_27366)\">\n            <path d=\"M9.99999 0C4.47718 0 0 4.47719 0 10C0 15.5231 4.47718 20 9.99999 20C15.5231 20 20.0003 15.5231 20.0003 10C20.0003 4.47719 15.5231 0 9.99999 0ZM9.99999 18.7697C5.1753 18.7697 1.25 14.8247 1.25 9.99996C1.25 5.17527 5.1753 1.24996 9.99999 1.24996C14.8247 1.24996 18.7503 5.17529 18.7503 9.99996C18.7503 14.8246 14.8247 18.7697 9.99999 18.7697ZM9.08092 15.6344H10.6534V14.0475H9.08092V15.6344ZM9.98155 4.36592C9.06592 4.36592 8.31157 4.61279 7.71907 5.10594C7.12657 5.59936 6.83845 6.58748 6.85314 7.40623L6.87626 7.45186H8.31063C8.31063 6.96342 8.47344 6.26154 8.79907 6.00967C9.12438 5.75811 9.51876 5.63217 9.98188 5.63217C10.5156 5.63217 10.9259 5.77717 11.2138 6.06715C11.5013 6.35715 11.6447 6.77184 11.6447 7.31059C11.6447 7.7634 11.5384 8.14996 11.325 8.47027C11.1109 8.79059 10.7522 9.24842 10.2491 9.84375C9.73001 10.3119 9.40938 10.6881 9.28751 10.9728C9.16532 11.2578 9.10188 11.769 9.09719 12.5062H10.6003C10.6003 12.0437 10.6297 11.7028 10.6881 11.484C10.7462 11.2656 10.9128 11.0187 11.1875 10.744C11.7778 10.1747 12.2519 9.61779 12.6109 9.07312C12.9691 8.52904 13.1484 7.92873 13.1484 7.27248C13.1484 6.35686 12.8716 5.64342 12.3169 5.13248C11.7619 4.62123 10.9834 4.36592 9.98155 4.36592Z\" fill=\"#4B4D4D\"/>\n            </g>\n            <defs>\n            <clipPath id=\"clip0_1785_27366\">\n            <rect width=\"20\" height=\"20\" fill=\"white\"/>\n            </clipPath>\n            </defs>\n        </svg>\n    ", t, n);
    }
    function ea(t, n) {
      return ta("\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M5 21V4H14L14.4 6H20V16H13L12.6 14H7V21H5ZM14.65 14H18V8H12.75L12.35 6H7V12H14.25L14.65 14Z\" fill=\"#4B4D4D\"/>\n        </svg>\n    ", t, n);
    }
    function ia(t, n) {
      return ta("\n            <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M7 7L17 17M7 17L17 7\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n        ", t, n);
    }
    function sa(t, n, e) {
      return ta("\n        <svg class=\"chat-option\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M17.5 22.75L21 19.25M21 19.25L24.5 15.75M21 19.25L17.5 15.75M21 19.25L24.5 22.75M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.8372 7.3815C35.497 7.7175 36.0325 8.25125 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1117 31.5 31.1552 31.5H15.9653C15.2355 31.5 14.8733 31.5 14.525 31.57C14.2159 31.6339 13.9169 31.7393 13.636 31.8832C13.321 32.0425 13.041 32.2683 12.4863 32.7128L12.467 32.7268Z\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n        ", t, n, e);
    }
    function oa(t, n, e) {
      return ta("\n        <svg class=\"chat-option\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M26.25 15.75L19.25 22.75L15.75 19.25M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.839 7.3815C35.4975 7.71705 36.0329 8.25246 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1135 31.5 31.157 31.5H15.9653C15.2373 31.5 14.8715 31.5 14.5232 31.57C14.2147 31.634 13.9163 31.7394 13.636 31.8832C13.321 32.0442 13.0375 32.27 12.4722 32.7232L12.467 32.7268Z\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n        ", t, n, e);
    }
    function ra(t, n, e) {
      return ta("<svg class=\"chat-option\" id=\"tp-allchat-show-create-post\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M21 24.5V19.25M21 19.25V14M21 19.25H15.75M21 19.25H26.25M12.467 32.7268L9.8 34.8617C8.34225 36.0255 7.61425 36.6083 7.00175 36.61C6.73843 36.6102 6.47846 36.551 6.24121 36.4368C6.00396 36.3225 5.79555 36.1562 5.6315 35.9502C5.25 35.4725 5.25 34.5397 5.25 32.6742V12.6018C5.25 10.6418 5.25 9.66 5.6315 8.90925C5.9675 8.25125 6.50125 7.7175 7.161 7.3815C7.91 7 8.89 7 10.85 7H31.15C33.11 7 34.09 7 34.839 7.3815C35.4975 7.71705 36.0329 8.25246 36.3685 8.911C36.75 9.65825 36.75 10.6382 36.75 12.5948V25.907C36.75 27.8617 36.75 28.84 36.3685 29.589C36.0329 30.2475 35.4975 30.7829 34.839 31.1185C34.0918 31.5 33.1135 31.5 31.157 31.5H15.9653C15.2373 31.5 14.8715 31.5 14.5232 31.57C14.2147 31.634 13.9163 31.7394 13.636 31.8832C13.321 32.0442 13.0375 32.27 12.4722 32.7232L12.467 32.7268Z\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>", t, n, e);
    }
    function aa(t) {
      return `\n        <div id="tp-allchat-options" class="chat-options-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n            ${n = t.liveChatShowing, n ? sa("tp-allchat-toggle", undefined, "Turn Allchat Off") : oa("tp-allchat-toggle", undefined, "Turn Allchat On")}\n            ${t.liveChatShowing ? ra("tp-allchat-show-create-post", undefined, "Post Comment") : ""}\n        </div>\n    `;
      var n;
    }
    function ua(t, n) {
      if (n) {
        n.innerHTML = aa(t);
        const e = document.getElementById("tp-allchat-toggle");
        const i = document.getElementById("tp-allchat-show-create-post");
        if (e) {
          e.addEventListener("click", n => {
            n.stopPropagation();
            t.toggleLiveChat();
          });
        }
        if (i) {
          i.addEventListener("click", n => {
            n.stopPropagation();
            Xr("allchat_open_create_comment_clicked");
            t.showCreatePost();
          });
        }
      }
    }
    function ca(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    function ha(t) {
      if (t) {
        return "\n        <svg id=\"tp-allchat-chatbox-pauseplay\" width=\"37\" height=\"37\" viewBox=\"0 0 37 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M8.68344 3.25195C8.29705 3.25195 7.92649 3.40544 7.65327 3.67866C7.38005 3.95188 7.22656 4.32244 7.22656 4.70883V32.2912C7.22656 32.6776 7.38005 33.0481 7.65327 33.3213C7.92649 33.5946 8.29705 33.748 8.68344 33.748H13.4298C13.8162 33.748 14.1868 33.5946 14.46 33.3213C14.7332 33.0481 14.8867 32.6776 14.8867 32.2912V4.70883C14.8867 4.32244 14.7332 3.95188 14.46 3.67866C14.1868 3.40544 13.8162 3.25195 13.4298 3.25195H8.68344ZM23.5702 3.25195C23.1838 3.25195 22.8132 3.40544 22.54 3.67866C22.2668 3.95188 22.1133 4.32244 22.1133 4.70883V32.2912C22.1133 32.6776 22.2668 33.0481 22.54 33.3213C22.8132 33.5946 23.1838 33.748 23.5702 33.748H28.3166C28.7029 33.748 29.0735 33.5946 29.3467 33.3213C29.6199 33.0481 29.7734 32.6776 29.7734 32.2912V4.70883C29.7734 4.51751 29.7358 4.32806 29.6625 4.15131C29.5893 3.97455 29.482 3.81395 29.3467 3.67866C29.2114 3.54338 29.0508 3.43607 28.8741 3.36285C28.6973 3.28964 28.5079 3.25195 28.3166 3.25195H23.5702Z\" fill=\"white\"/>\n        </svg>\n\n    ";
      } else {
        return "\n        <svg id=\"tp-allchat-chatbox-pauseplay\" width=\"44\" height=\"44\" viewBox=\"0 0 44 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M12.661 8.31787C12.494 8.21885 12.3038 8.1658 12.1096 8.1641C11.9155 8.16241 11.7243 8.21213 11.5556 8.30822C11.3869 8.4043 11.2466 8.54333 11.149 8.71118C11.0515 8.87903 11 9.06972 11 9.26387V34.7362C11 34.9304 11.0515 35.121 11.149 35.2889C11.2466 35.4567 11.3869 35.5958 11.5556 35.6919C11.7243 35.7879 11.9155 35.8377 12.1096 35.836C12.3038 35.8343 12.494 35.7812 12.661 35.6822L34.1532 22.946C34.3173 22.8486 34.4533 22.7102 34.5477 22.5443C34.6422 22.3785 34.6918 22.1909 34.6918 22C34.6918 21.8092 34.6422 21.6216 34.5477 21.4557C34.4533 21.2899 34.3173 21.1514 34.1532 21.054L12.661 8.31787Z\" fill=\"white\" stroke=\"white\" stroke-width=\"2.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n\n    ";
      }
    }
    let la = false;
    let da = null;
    function pa(t) {
      return ca(this, undefined, undefined, function* () {
        const n = yield t.isVideoPlaying();
        if (n) {
          yield t.pauseVideo();
        } else {
          yield t.playVideo();
        }
        da = !n;
        const e = document.getElementById("tp-allchat-chatbox-pauseplay");
        if (e) {
          e.outerHTML = ha(da);
        }
      });
    }
    function fa(t, n) {
      return ca(this, undefined, undefined, function* () {
        if (n && t.shouldRender) {
          const e = yield t.isVideoPlaying();
          n.innerHTML = function (t, n) {
            return `\n        <div id="tp-allchat-chatbox-controls" class="allchat-chatbox-controls-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n            ${ha(n)}\n        </div>\n    `;
          }(t, e);
          const i = document.getElementById("tp-allchat-chatbox-pauseplay");
          if (i) {
            i.addEventListener("click", n => {
              n.stopPropagation();
              pa(t);
            });
          }
          if (!la) {
            setInterval(() => ca(this, undefined, undefined, function* () {
              const n = yield t.isVideoPlaying();
              if (n !== da) {
                da = n;
                const e = yield ha(n);
                const i = document.getElementById("tp-allchat-chatbox-pauseplay");
                if (i) {
                  i.outerHTML = e;
                  const n = document.getElementById("tp-allchat-chatbox-pauseplay");
                  if (n) {
                    n.addEventListener("click", n => {
                      n.stopPropagation();
                      pa(t);
                    });
                  }
                }
              }
            }), 100);
            la = true;
          }
        }
      });
    }
    const Da = ["Batman.svg", "DeadPool.svg", "CptAmerica.svg", "Wolverine.svg", "IronMan.svg", "Goofy.svg", "Alien.svg", "Mulan.svg", "Snow-White.svg", "Poohbear.svg", "Sailormoon.svg", "Sailor Cat.svg", "Pizza.svg", "Cookie.svg", "Chocobar.svg", "hotdog.svg", "Hamburger.svg", "Popcorn.svg", "IceCream.svg", "ChickenLeg.svg"];
    const va = ["General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg"];
    const ga = ["General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg", "Christmas/angel.svg", "Christmas/bell.svg", "Christmas/box.svg", "Christmas/cane.svg", "Christmas/flake.svg", "Christmas/gingerbread.svg", "Christmas/gingerbread_F.svg", "Christmas/gingerbread_M.svg", "Christmas/gloves_blue.svg", "Christmas/gloves_red.svg", "Christmas/hat.svg", "Christmas/ornament.svg", "Christmas/raindeer.svg", "Christmas/reef.svg", "Christmas/santa_F.svg", "Christmas/santa_M.svg", "Christmas/snowglobe.svg", "Christmas/snowman.svg", "Christmas/sock.svg", "Christmas/tree.svg", "Halloween/bats.svg", "Halloween/candy_corn.svg", "Halloween/cat_black.svg", "Halloween/cat_white.svg", "Halloween/coffin.svg", "Halloween/eye_ball.svg", "Halloween/face_angry.svg", "Halloween/face_evil.svg", "Halloween/face_silly.svg", "Halloween/face_smile.svg", "Halloween/frankenstein.svg", "Halloween/ghost_F.svg", "Halloween/ghost_M.svg", "Halloween/gravestone.svg", "Halloween/lollipop.svg", "Halloween/moon.svg", "Halloween/mummy.svg", "Halloween/potion.svg", "Halloween/pumpkin.svg", "Halloween/pumpkin_witch.svg", "Halloween/skull_brain.svg", "Halloween/skull_candy.svg", "Halloween/skull_girl.svg", "Halloween/witch_hat.svg", "Thanksgiving/acorn.svg", "Thanksgiving/bread.svg", "Thanksgiving/candles.svg", "Thanksgiving/corn.svg", "Thanksgiving/drinks.svg", "Thanksgiving/maple_leaf.svg", "Thanksgiving/plate_chicken.svg", "Thanksgiving/pumpkin.svg", "Thanksgiving/pumpkin_pie.svg", "Thanksgiving/slice_pie.svg", "Thanksgiving/sun_flower.svg", "Thanksgiving/turkey_face.svg"];
    const ma = {
      General: ["Alien.svg", "Batman.svg", "ChickenLeg.svg", "Chocobar.svg", "Cookie.svg", "CptAmerica.svg", "DeadPool.svg", "Goofy.svg", "Hamburger.svg", "hotdog.svg", "IceCream.svg", "IronMan.svg", "Mulan.svg", "Pizza.svg", "Poohbear.svg", "Popcorn.svg", "Sailor Cat.svg", "Sailormoon.svg", "Snow-White.svg", "Wolverine.svg"],
      Christmas: ["angel.svg", "bell.svg", "box.svg", "cane.svg", "flake.svg", "gingerbread.svg", "gingerbread_F.svg", "gingerbread_M.svg", "gloves_blue.svg", "gloves_red.svg", "hat.svg", "ornament.svg", "raindeer.svg", "reef.svg", "santa_F.svg", "santa_M.svg", "snowglobe.svg", "snowman.svg", "sock.svg", "tree.svg"],
      Halloween: ["bats.svg", "candy_corn.svg", "cat_black.svg", "cat_white.svg", "coffin.svg", "eye_ball.svg", "face_angry.svg", "face_evil.svg", "face_silly.svg", "face_smile.svg", "frankenstein.svg", "ghost_F.svg", "ghost_M.svg", "gravestone.svg", "lollipop.svg", "moon.svg", "mummy.svg", "potion.svg", "pumpkin.svg", "pumpkin_witch.svg", "skull_brain.svg", "skull_candy.svg", "skull_girl.svg", "witch_hat.svg"],
      Thanksgiving: ["acorn.svg", "bread.svg", "candles.svg", "corn.svg", "drinks.svg", "maple_leaf.svg", "plate_chicken.svg", "pumpkin.svg", "pumpkin_pie.svg", "slice_pie.svg", "sun_flower.svg", "turkey_face.svg"]
    };
    const wa = {
      General: ["candy_corn.webp", "cat_ears.webp", "devil_horn.webp", "jack_o_lantern.webp", "spooky_bat.webp", "spooky_cat.webp", "spooky_coffin.webp", "spooky_ghost_night.webp", "spooky_pumpkin_eye.webp", "spooky_reaper_circle.webp", "spooky_reaper_walking.webp", "spooky_skull.webp", "spooky_witch_hat.webp", "vampire_teeth.webp"]
    };
    function ya(t) {
      if (t) {
        return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/[\r\n]{3,}/gm, "\n\n").replace(yi, `<span style="font-size: ${function (t) {
          let n = 16;
          const e = t.replace(yi, "").replace(/[\uFE0F]/g, "");
          const i = ((t || "").match(yi) || []).length;
          if (e.length === 0 && i <= 3) {
            n = 32;
          }
          return n;
        }(t)}px">$&</span>`);
      } else {
        return t;
      }
    }
    const ba = {
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
    class Ca {
      constructor(t) {
        this.Z = t;
        this.oe = [];
        this.re = 0;
        this.ae = document.title;
        this.ue = 0;
        this.ce = new Map();
        this.he = new Map();
        this.le = new Map();
        this.de = [];
        this.pe = [];
        this.fe = "";
        this.De = "";
        bi("Message Controller");
      }
      ve(t, n, e, i) {
        return jQuery(`\n            <div class="msg-container ${!i && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${i ? `<img src="${ya(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-txt message${e.isSystemMessage ? "-system" : "-txt"}">\n                    ${i ? `<h3 data-tp-id="chat_history_container-nickname">${n}</h3>` : ""}\n                    <p data-tp-id="chat_history_container-message">${ya(e.body).trim()}</p>\n                </div>\n            </div>\n          `);
      }
      ge(t, n, e, i) {
        const s = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]);
        const o = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]);
        const r = this.Z.shouldUseVideoGIF();
        return jQuery(`\n            <div class="msg-container ${!i && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${i ? `<img src="${ya(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${i ? `<h3 data-tp-id="chat_history_container-nickname">${n}</h3>` : ""}  \n            ${r ? `<video src="${ya(e.gifObject.media.full.url)}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${ya(e.gifObject.media.fullMobile.url)}"  height="${o}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`}     \n                </div>\n            </div>\n          `);
      }
      we(t, n, e) {
        return jQuery(`\n            <div class="msg ${!e && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    ${e ? `<img src="${ya(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                </div>\n                <div class="message${n.isSystemMessage ? "-system" : "-txt"}">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${ya(n.body).trim()}</p>\n                </div>\n            </div>\n        `);
      }
      ye(t, n, e) {
        const i = 200 / (n.gifObject.media.full.dims[0] / n.gifObject.media.full.dims[1]);
        const s = 200 / (n.gifObject.media.fullMobile.dims[0] / n.gifObject.media.fullMobile.dims[1]);
        const o = this.Z.shouldUseVideoGIF();
        return jQuery(`\n            <div class="msg-container ${!e && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${e ? `<img src="${ya(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${o ? `<video src="${ya(n.gifObject.media.full.url)}" data-tp-id="chat_history_container-gif" height="${i}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${ya(n.gifObject.media.fullMobile.url)}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`}\n                </div>\n            </div>\n          `);
      }
      be(t, n, e, i, s) {
        t.appendTo(jQuery("#chat-history"));
        const o = t[0];
        o.Ce = n.permId;
        o.Fe = e;
        o._e = i;
        o.Ee = n;
        o.xe = s;
      }
      reloadMessages() {
        this.Z.queueMessageForFrame(Ii.CLEAR_MESSAGES, "");
        for (const t of this.oe) {
          this.Z.queueMessageForFrame(Ii.ADD_MESSAGE, {
            originalMessage: t,
            userIcon: this.getUserIconURL(t.permId, t.userIcon),
            userNickname: this.getUserNickname(t.permId, t.userNickname),
            userIconFrame: this.getUserIconFrameURL(t.permId, t.userIconFrame)
          });
        }
      }
      ke(t, n) {
        if (Math.abs(t.timestamp - n.timestamp) > 60000) {
          return false;
        }
        if (t.permId !== n.permId) {
          return false;
        }
        if ("isSystemMessage" in n && n.isSystemMessage && (n.body.includes("joined") || n.body.includes("left"))) {
          return false;
        }
        if ("gifObject" in t) {
          if ("isSystemMessage" in n && n.isSystemMessage) {
            return false;
          }
        } else {
          if (t.isSystemMessage && (t.body.includes("joined") || t.body.includes("left"))) {
            return false;
          }
          if ("gifObject" in n) {
            if (t.isSystemMessage) {
              return false;
            }
          } else if (t.isSystemMessage !== n.isSystemMessage) {
            return false;
          }
        }
        return true;
      }
      addMessage(t, n, e) {
        if (t.messageId && this.oe.some(n => n.messageId === t.messageId)) {
          return;
        }
        if (e === undefined) {
          e = this.oe.length;
        }
        if (t.isSystemMessage && t.body === "left" && (console.log("trying to add left message"), !t.userIcon && !this.ce.has(t.permId))) {
          return;
        }
        if (e === 0 && t.isSystemMessage && t.body.includes("joined")) {
          return;
        }
        if (n && t.isSystemMessage && t.body.indexOf("updated their user icon") > -1) {
          if (t.userIcon) {
            this.setUserIcon(t.permId, t.userIcon);
          }
          if (t.userNickname) {
            this.setUserNickname(t.permId, t.userNickname);
          }
        }
        const i = this.oe.slice(-1).pop();
        const s = i === undefined || !(e > 0) || !this.ke(i, t);
        this.oe.push(t);
        const o = Object.assign({}, t);
        const r = this.getUserIconURL(o.permId, o.userIcon);
        const a = this.getUserNickname(o.permId, o.userNickname);
        const u = this.getUserIconFrameURL(o.permId, o.userIconFrame);
        this.Z.queueMessageForFrame(Ii.ADD_MESSAGE, {
          originalMessage: o,
          userIcon: r,
          userNickname: a,
          userIconFrame: u
        });
        const c = a === "" ? this.we(r, o, s) : this.ve(r, a, o, s);
        this.be(c, o, r, a, s);
        this.scrollToBottom();
        this.Ae();
      }
      addGif(t, n) {
        if (t.messageId && this.oe.some(n => n.messageId === t.messageId)) {
          return;
        }
        if (n === undefined) {
          n = this.oe.length;
        }
        const e = this.oe.slice(-1).pop();
        const i = e === undefined || !(n > 0) || !this.ke(e, t);
        this.oe.push(t);
        const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId);
        const o = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
        const r = this.getUserIconFrameURL(t.permId, t.userIconFrame);
        this.Z.queueMessageForFrame(Ii.ADD_MESSAGE, {
          originalMessage: t,
          userIcon: s,
          userNickname: o,
          userIconFrame: r
        });
        const a = o === "" ? this.ye(s, t, i) : this.ge(s, o, t, i);
        a[0].Ie = true;
        this.be(a, t, s, o, i);
        We(100)().then(this.scrollToBottom.bind(this));
        this.Ae();
      }
      scrollToBottom() {
        jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
      }
      clearUnreadCount() {
        if (this.re > 0) {
          this.re = 0;
          document.title = this.ae;
        }
      }
      Ae() {
        this.re += 1;
        this.ue += 1;
        if (!document.hasFocus()) {
          document.title = "(" + String(this.re) + ") " + this.ae;
        }
      }
      getUserIconURL(t, n = "") {
        if (t && this.ce.has(t)) {
          return this.ce.get(t);
        }
        const e = Ca.parseIconSrc(n);
        const i = e !== undefined ? e : this.Be();
        if (t) {
          this.ce.set(t, i);
        }
        this.pe.push(i);
        return i;
      }
      static parseIconSrc(t) {
        if (t.includes("/profile-images/")) {
          return t;
        }
        const n = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t;
        const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
        if (ga.includes(n)) {
          return chrome.runtime.getURL("img/icons/" + t);
        } else if (Da.includes(e)) {
          return chrome.runtime.getURL("img/icons/General/" + t);
        } else {
          return undefined;
        }
      }
      static getFullIconURL(t) {
        const n = Ca.parseIconSrc(t);
        if (n == null ? undefined : n.includes("/profile-images/")) {
          return r + n;
        } else {
          return n;
        }
      }
      getUserIconFrameURL(t, n = "") {
        const e = t ? this.he.get(t) : undefined;
        if (e !== undefined) {
          return e;
        } else {
          if (t && n) {
            this.he.set(t, n);
          }
          return n;
        }
      }
      setUserIconFrameForUser(t, n = "") {
        if (t) {
          this.he.set(t, n);
        }
        return n;
      }
      getUserNickname(t, n = "") {
        if (!this.le.has(t)) {
          this.le.set(t, n);
          this.de.push(n);
        }
        return ya(this.le.get(t));
      }
      Be() {
        let t = chrome.runtime.getURL("img/icons/General/" + Da[Math.floor(Math.random() * Da.length)]);
        if (this.pe.length < ma.General.length) {
          while (this.pe.includes(t)) {
            t = chrome.runtime.getURL("img/icons/General/" + Da[Math.floor(Math.random() * Da.length)]);
          }
        }
        return t;
      }
      Se(t) {
        const n = t[0];
        const e = n.Ce;
        let i = n.Fe;
        if (e && this.getUserIconURL(e) !== i) {
          i = this.getUserIconURL(e);
          t.find("img").attr("src", i);
          n.Fe = i;
        }
        const s = n._e;
        if (e && i) {
          const o = this.getUserNickname(e);
          if (o !== s) {
            const s = n.Ee;
            const r = n.xe;
            let a;
            if (n.Ie && s && "gifObject" in s && r) {
              a = o == "" ? this.ye(i, s, r) : this.ge(i, o, s, r);
            }
            if (!n.Ie && s && !("gifObject" in s) && r) {
              a = o == "" ? this.we(i, s, r) : this.ve(i, o, s, r);
            }
            if (a) {
              t.replaceWith(a);
              const n = a[0];
              n.Ce = e;
              n.Fe = i;
              n._e = o;
              n.Ee = s;
              n.xe = r;
            }
          }
        }
      }
      setUserIconUrl(t) {
        this.fe = t;
        this.Z.queueMessageForFrame(Ii.SET_USER_ICON_URL, t);
      }
      setUserIconFrameUrl(t) {
        this.De = t;
        this.Z.queueMessageForFrame(Ii.SET_USER_ICON_FRAME_URL, t);
      }
      renderSidebar() {
        jQuery("#user-icon img").attr("src", this.fe);
        jQuery(".user-icon img").attr("src", this.fe);
        const t = jQuery(".msg");
        for (let n = 0; n < t.length; n++) {
          this.Se(jQuery(t[n]));
        }
        const n = jQuery(".msg-container");
        for (let t = 0; t < n.length; t++) {
          this.Se(jQuery(n[t]));
        }
        if (this.Z.isChatFrameActive()) {
          this.reloadMessages();
        }
      }
      je(t) {
        let n = null;
        if (t) {
          if (t.includes("/profile-images/")) {
            return t;
          }
          if (t.includes("?newIconUrl=")) {
            const e = t.split("?newIconUrl=");
            const i = e[1];
            const s = e[0];
            if (ga.includes(i)) {
              n = chrome.runtime.getURL(`img/icons/${i}`);
            } else if (Da.includes(s)) {
              n = chrome.runtime.getURL(`img/icons/General/${s}`);
            }
          } else if (ga.includes(t)) {
            n = chrome.runtime.getURL(`img/icons/${t}`);
          } else if (Da.includes(t)) {
            n = chrome.runtime.getURL(`img/icons/General/${t}`);
          }
        }
        if (n === null) {
          let t = ma.General.filter(t => !this.pe.includes(t));
          if (t.length === 0) {
            t = ma.General;
          }
          const e = t[Math.floor(Math.random() * t.length)];
          n = chrome.runtime.getURL(`/img/icons/General/${e}`);
        }
        return n;
      }
      setUserIcon(t, n) {
        const e = this.je(n);
        this.ce.set(t, e);
        this.pe.push(e);
        this.renderSidebar();
      }
      setUserNickname(t, n) {
        const e = ya(n);
        this.le.set(t, e);
        this.de.push(e);
        this.renderSidebar();
      }
      updateUserData(t, n, e, i) {
        const s = this.je(n);
        this.ce.set(t, s);
        this.setUserIconFrameForUser(t, i);
        this.pe.push(s);
        this.le.set(t, e);
        this.de.push(e);
        this.renderSidebar();
      }
      addYoutubePromo() {
        jQuery(`\n        <div class="msg-container">\n            <div class="msg-txt message-system">\n                <div style="width:100%; height: 100px">\n                    <img data-tp-id="tp_youtube_promo" style="width: 100%;height: 100%;object-fit: contain;cursor:pointer !important;" src="${chrome.runtime.getURL("img/youtube_promo.jpg")}" \n                    onclick="window.open('https://teleparty.com/youtube')"\n                    />\n                </div>\n            </div>\n        </div>\n        `).prependTo(jQuery("#chat-history"));
      }
      addReviewMessage() {
        jQuery("\n          <div class=\"msg-container\">\n          <div class=\"msg-txt message-system\" style=\"width:100%\">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id=\"reviewLink\" href=\"https://chromewebstore.google.com/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews\" style=\"display:inline;color:red;text-decoration:underline;\" target=\"none\">here!</a>\n          </p>\n          </div>\n          </div>\n          ").appendTo(jQuery("#chat-history"));
        const t = new hr(si, ei, {
          name: "review-shown",
          action: {
            description: "review was shown on chrome",
            reason: "review was shown."
          }
        });
        Fi.I(t);
        const n = {
          eventType: "review-shown-chrome",
          sessionId: this.Z.getSessionId()
        };
        const e = new hr(si, ei, n);
        Fi.I(e);
        jQuery("#reviewLink").click(() => {
          chrome.storage.local.set({
            reviewClicked: true
          });
          const t = new hr(si, ei, {
            name: "review-clicked",
            action: {
              description: "review was clicked on chrome",
              reason: "review was clicked."
            }
          });
          Fi.I(t);
          const n = {
            eventType: "review-clicked-chrome",
            sessionId: this.Z.getSessionId()
          };
          const e = new hr(si, ei, n);
          Fi.I(e);
        });
      }
      getMessages(t = false) {
        if (t) {
          return this.oe.filter(t => t.isSystemMessage);
        } else {
          return this.oe;
        }
      }
    }
    function Fa(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    let _a = null;
    let Ea = 0;
    let xa = null;
    let ka = null;
    function Aa(t) {
      return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function Ia(t, n, e, i) {
      t.innerHTML = i.variant === "floating" ? function (t, n) {
        const e = Boolean(n);
        const i = e ? `@${n}` : "Choose a handle";
        const s = e ? "Edit" : "Set up";
        const o = (n || "?").replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
        return `\n    <button type="button" class="tp-floating-account" id="allchat-user-pill" aria-label="${e ? `Edit profile for ${Aa(n)}` : "Set your All Chat handle"}">\n      <span class="tp-floating-account-avatar" aria-hidden="true">\n        ${t ? `<img src="${t}" alt=""/>` : `<span class="tp-floating-account-initial">${Aa(o)}</span>`}\n      </span>\n      <span class="tp-floating-account-text">\n        <span class="tp-floating-account-label">${e ? "Posting as" : "Almost ready"}</span>\n        <span class="tp-floating-account-handle">${Aa(i)}</span>\n      </span>\n      <span class="tp-floating-account-action">${s}</span>\n    </button>\n  `;
      }(n, e) : function (t, n) {
        const e = Boolean(n);
        const i = e ? n : "Set handle";
        const s = e ? "Edit" : "Tap to create";
        const o = (e ? n : "?").slice(0, 1).toUpperCase();
        return `\n    <div class="user-pill rounded-container gray-border" style="cursor: pointer !important;" id="allchat-user-pill">\n      <span class="user-pill-avatar">\n        ${t ? `<img src="${t}" alt="${Aa(i)}"/>` : `<span class="user-pill-initial">${Aa(o)}</span>`}\n      </span>\n      <div style="display: flex; flex-direction: column">\n        <span class="user-pill-name">${Aa(i)}</span>\n        <span class="user-pill-edit" id="allchat-edit-profile-open-btn">${s}</span>\n      </div>\n    </div>\n  `;
      }(n, e);
      (function (t, n) {
        const e = document.getElementById("allchat-user-pill");
        if (e) {
          e.addEventListener("click", e => {
            e.stopPropagation();
            if (t) {
              n.onEditClicked();
            } else {
              n.onSetHandleClicked();
            }
          });
        }
      })(e, i);
    }
    function Ba(t, n) {
      return Fa(this, undefined, undefined, function* () {
        if (n.knownHandle) {
          Ia(t, undefined, n.knownHandle, n);
        }
        const {
          userData: i,
          handle: s
        } = yield qr({
          knownHandle: n.knownHandle
        });
        const o = Ca.getFullIconURL((i == null ? undefined : i.userSettings)?.userIcon);
        Ia(t, o, s || n.knownHandle, n);
      });
    }
    function Sa() {
      if (_a !== null) {
        clearInterval(_a);
        _a = null;
      }
      if (xa) {
        window.removeEventListener("focus", xa);
        xa = null;
      }
      if (ka) {
        document.removeEventListener("visibilitychange", ka);
        ka = null;
      }
    }
    function ja(t, n) {
      if (_a !== null) {
        return;
      }
      Ea = Date.now() + 300000;
      const e = () => Fa(this, undefined, undefined, function* () {
        if (Date.now() >= Ea) {
          Sa();
        } else {
          yield function (t, n) {
            return Fa(this, undefined, undefined, function* () {
              if (!document.body.contains(t)) {
                Sa();
                return false;
              }
              try {
                const e = yield Fi.I(new Mr(ii, ei, true));
                if (e == null ? undefined : e.signedIn) {
                  Sa();
                  yield Ba(t, n);
                  return true;
                }
              } catch (t) {}
              return false;
            });
          }(t, n);
        }
      });
      _a = window.setInterval(e, 3000);
      xa = () => {
        e();
      };
      ka = () => {
        if (document.visibilityState === "visible") {
          e();
        }
      };
      window.addEventListener("focus", xa);
      document.addEventListener("visibilitychange", ka);
      e();
    }
    function $a(t, n) {
      return Fa(this, undefined, undefined, function* () {
        if (!n) {
          return;
        }
        const e = t.containerStyling !== undefined && t.containerStyling.length > 0 ? ` style="${t.containerStyling}"` : "";
        n.innerHTML = `<div class="user-identity-root"${e}></div>`;
        const i = n.firstElementChild;
        if (t.knownHandle) {
          yield Ba(i, t);
          return;
        }
        let s;
        try {
          s = yield Fi.I(new Mr(ii, ei));
        } catch (t) {}
        if (!(s == null ? undefined : s.signedIn)) {
          i.innerHTML = t.variant === "floating" ? `\n    <a id="tp-user-login-btn"\n      class="tp-floating-login"\n      href="${o}/signup?ref=allchat" target="_blank" rel="noopener noreferrer">\n      Log in to post\n    </a>\n  ` : `\n    <a id="tp-user-login-btn"\n      class="tp-login-cta rounded-container"\n      href="${o}/signup?ref=allchat" target="_blank" rel="noopener noreferrer">\n      Login\n    </a>\n  `;
          const n = i.querySelector("#tp-user-login-btn");
          if (n) {
            n.addEventListener("click", () => {
              ja(i, t);
            });
          }
          return;
        }
        yield Ba(i, t);
      });
    }
    function Ta(t, n) {
      if (!n) {
        return null;
      }
      const e = t.id || `tp-flair-${Math.random().toString(36).slice(2, 9)}`;
      const {
        staticSrc: i,
        gifSrc: s
      } = Kr(t.reaction);
      n.innerHTML = function (t) {
        const {
          id: n,
          reaction: e,
          staticSrc: i,
          shadowColor: s
        } = t;
        return `\n    <button\n      id="${n}"\n      class="tp-flair-icon"\n      type="button"\n      data-active="false"\n      aria-pressed="false"\n      aria-label="${e}"\n      style="--tp-flair-shadow-color: ${s};"\n    >\n      <img src="${i}" alt="${e}" />\n    </button>\n  `;
      }({
        id: e,
        reaction: t.reaction,
        staticSrc: i,
        gifSrc: s,
        shadowColor: t.shadowColor
      });
      const o = document.getElementById(e);
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
      o.addEventListener("click", n => {
        n.stopPropagation();
        const e = o.dataset.active !== "true";
        (function (t, n) {
          const e = typeof t == "string" ? document.getElementById(t) : t;
          if (!e) {
            return;
          }
          if (n) {
            (function (t) {
              const n = t.closest(".tp-flair-row, #tp-flair-row") || document;
              n.querySelectorAll(".tp-flair-icon[data-active='true']").forEach(n => {
                if (n !== t) {
                  n.setAttribute("data-active", "false");
                  n.setAttribute("aria-pressed", "false");
                }
              });
            })(e);
          }
          e.setAttribute("data-active", n ? "true" : "false");
          e.setAttribute("aria-pressed", n ? "true" : "false");
        })(o, e);
        if (t.onClick) {
          t.onClick();
        }
      });
      return o;
    }
    function Pa(t, n = document.getElementById("tp-flair-row")) {
      if (!n) {
        return null;
      }
      const e = document.createElement("div");
      e.className = "tp-flair-cell";
      n.appendChild(e);
      return Ta(t, e);
    }
    class Ma {
      constructor(t, n = 2000, e) {
        this.onRemove = e;
        this.duration = n;
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
      setPosition(t, n) {
        this.el.style.left = `${t}px`;
        this.el.style.bottom = `${n}px`;
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
              const n = Math.max(0, t - 0.05);
              this.el.style.opacity = n.toString();
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
    const La = new class {
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
        let n = document.getElementById(this.id);
        if (!n) {
          n = document.createElement("div");
          n.id = this.id;
          n.style.position = "fixed";
          n.style.zIndex = "9991";
          (t ?? document.body).appendChild(n);
        }
        this.container = n;
      }
      show(t, n, e) {
        const i = e ?? `toast_${Date.now()}_${Math.random().toString(36).slice(2)}`;
        this.queue.push({
          html: t,
          duration: n,
          id: i
        });
        this.pump();
        return i;
      }
      dismiss(t) {
        const n = this.active.findIndex(n => n.id === t);
        if (n >= 0) {
          const {
            toast: t
          } = this.active[n];
          t.destroy();
          this.active.splice(n, 1);
          this.pump();
        } else {
          const n = this.queue.findIndex(n => n.id === t);
          if (n >= 0) {
            this.queue.splice(n, 1);
          }
        }
      }
      pump() {
        for (this.container || this.ensureContainer(); this.active.length < this.MAX_ACTIVE && this.queue.length > 0;) {
          const {
            html: t,
            duration: n,
            id: e
          } = this.queue.shift();
          const i = new Ma(t, n, () => {
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
            id: e,
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
        const n = window.innerHeight;
        let e = this.VERT_MARGIN_BOTTOM;
        for (const {
          toast: i
        } of this.active) {
          const {
            w: s,
            h: o
          } = i.measure();
          const r = Math.min(Math.max(Math.round(o * 0.15), 0), Math.max(n - o - this.VERT_MARGIN_BOTTOM, 0));
          const a = Math.min(this.HORIZ_MARGIN, t - s - this.HORIZ_MARGIN);
          const u = Math.min(e + r, n - o - this.VERT_MARGIN_BOTTOM);
          i.setPosition(a, u);
          e = u + o + this.TOAST_GAP;
        }
      }
    }();
    function Ra(t, n = 2000, e) {
      return La.show(t, n, e);
    }
    class Oa extends ji {
      constructor(t, n) {
        super(t, n, ki.GET_PERM_ID);
      }
    }
    function Va(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const Ua = 120;
    function Ha(t) {
      return `\n        <div id="tp-allchat-chatbox" style="display: flex; flex-direction: column; width: 100%; background-color: black; align-items: flex-end; padding: 12px 20px;">\n            <div class="allchat-chatbox-container" ${t.containerStyling ? `style="${t.containerStyling}"` : ""}>\n                ${n = "tp-allchat-logo", ta("\n        <svg width=\"33\" height=\"33\" viewBox=\"0 0 33 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <mask id=\"mask0_1785_33205\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"33\" height=\"33\">\n            <path d=\"M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z\" fill=\"#EF3E3A\"/>\n            <path d=\"M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z\" fill=\"#EF3E3A\"/>\n            </mask>\n            <g mask=\"url(#mask0_1785_33205)\">\n            <rect width=\"33\" height=\"33\" fill=\"url(#paint0_linear_1785_33205)\"/>\n            </g>\n            <defs>\n            <linearGradient id=\"paint0_linear_1785_33205\" x1=\"0\" y1=\"0\" x2=\"37.984\" y2=\"7.39309\" gradientUnits=\"userSpaceOnUse\">\n            <stop stop-color=\"#E34248\"/>\n            <stop offset=\"1\" stop-color=\"#9E55A0\"/>\n            </linearGradient>\n            </defs>\n        </svg>\n    ", n, e)}\n                ${t.videoControlProps.shouldRender ? "<div id=\"tp-allchat-chatbox-controls-container\" style=\"display: flex; width: 56px; height: 44px; justify-content: center;\"></div>" : ""}\n                <div style="display:flex; align-items:center; position:relative; flex-grow:1">\n                    <div class="tp-chatbox-input-wrapper" style="flex-grow:1; position:relative;">\n                        <input\n                        id="tp-allchat-chatbox-input"\n                        value="${t.curComment}"\n                        type="text"\n                        class="allchat-chatbox-input"\n                        placeholder="Add your comment here"\n                        style="flex-grow:1; padding-left:12px;"\n                        >\n\n                        <div class="tp-input-right-rail">\n                            <div id="tp-flair-row" class="tp-flair-row"></div>\n                            <span id="tp-allchat-chatbox-length" class="allchat-chatbox-length">\n                                ${t.curComment.length}/120\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div style="display: flex; flex-direction: row">\n                    <span\n                        id="tp-allchat-cancel-btn"\n                        class="allchat-chatbox-button rounded-container gray-border"\n                        style="height: 52px; display: flex; align-items: center; margin-right: 6px"\n                    >\n                        Cancel\n                    </span>\n                    \n                    <span\n                        id="tp-allchat-post-btn"\n                        class="allchat-chatbox-button rounded-container gradient-border"\n                        style="font-weight:600; height: 52px; display: flex; align-items: center;"\n                    >\n                        <span class="gradient-200-text">Post</span>\n                    </span>\n                </div>\n                <div id="tp-user-identity" style="margin-left:16px;"></div>\n                ${na("allchat-chatbox-open-help", "cursor: pointer !important; width: 33px; height: 33px;")}\n                \n                <div id="tp-allchat-message-box" class="allchat-message-box"></div>\n            </div>\n            <a\n                style="font-size: 12px; color: gray; margin-top: 4px; cursor: pointer; padding-bottom: 4px;"\n                class="allchat-underline-text"\n                id="tp-leave-feedback-text"\n                href="https://docs.google.com/forms/d/e/1FAIpQLSdkFbtU1o-vw9LXVG4STZiryRbrcF0j445c3b1EfwNoJYUT7w/viewform?usp=dialog"\n                target="_blank"\n            >\n                Leave Feedback\n            </a>\n        </div>\n    `;
      var n;
      var e;
    }
    function Na() {
      const t = document.getElementById("tp-flair-row");
      if (t && t.offsetParent !== null) {
        for (const n of t.children) {
          const t = n.querySelector("button");
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
    function Ga(t, n, e, i) {
      return Va(this, undefined, undefined, function* () {
        const s = document.getElementById("tp-allchat-post-btn");
        try {
          if (s) {
            s.textContent = "Posting...";
          }
          const o = new hr(si, ei, {
            name: "allchat_message_sent",
            message: {
              text: n
            },
            allchat_ui: "legacy"
          });
          Fi.I(o);
          const r = yield Fi.I(new Oa(si, ei));
          const a = {
            message: n,
            vidTime: yield t.getVidTime(),
            service: t.service,
            vidId: t.vidId,
            displayName: e,
            vidDuration: t.vidDuration,
            flair: Na(),
            permId: r,
            extensionVersion: di
          };
          const u = ti("comments", "POST", true, a, i, undefined, true);
          t.onPostComment(a);
          if (t.shouldPlayVideoAfterClose) {
            t.videoControlProps.playVideo();
          }
          yield u;
          Xr("allchat_message_accepted", "legacy");
        } catch (t) {
          try {
            if (JSON.parse(t.message).error) {
              Xr("allchat_message_rejected", "legacy");
            } else {
              Xr("allchat_message_errored", "legacy");
              Ra("An error occurred");
            }
          } catch (n) {
            Xr("allchat_message_errored", "legacy");
            console.error(`GOT ERROR ${t}`);
            Ra("An error occurred");
          }
        } finally {
          t.onCommentEdited("");
          if (s) {
            s.textContent = "Post";
          }
          (function (t) {
            const n = document.getElementById("tp-allchat-chatbox-length");
            if (n) {
              n.innerText = `${t.curComment.length}/120`;
            }
          })(t);
        }
      });
    }
    function za(t, n, e, i) {
      return Va(this, undefined, undefined, function* () {
        const s = yield Fi.I(new Qr(ii, ei));
        i.value = "";
        t.closeModal();
        Ga(t, n, e, s == null ? undefined : s.token);
      });
    }
    function Za(t, n) {
      $a({
        knownHandle: n,
        onEditClicked: () => {
          t.openChangeHandleModal(n => Za(t, n));
        },
        onSetHandleClicked: () => {
          t.openSetHandleModal(n => Za(t, n));
        }
      }, document.getElementById("tp-user-identity"));
    }
    function Qa() {
      const t = "allchat-feedback-bubble";
      const n = "allchat-feedback-bubble-dismissed";
      if (localStorage.getItem(n) === "true") {
        return;
      }
      const e = localStorage.getItem(t);
      const i = e ? JSON.parse(e) : {
        count: 0,
        last: 0
      };
      const {
        count: s,
        last: o
      } = i;
      if (Date.now() - o >= Math.min(Math.pow(2, s) * 300000, 86400000)) {
        setTimeout(() => {
          if (localStorage.getItem(n) === "true") {
            return;
          }
          Ra(`\n        <div style="display: flex; flex-direction: column;">\n            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 20px">\n                <span>Want to help All Chat improve? Leave your thoughts here!</span>\n                ${ia("allchat-close-feedback", "transform: translateY(-2px); cursor: pointer;")}\n            </div>\n            <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; gap: 12px;">\n                <span class="allchat-underline-text" \n                      style="font-size: 12px; color: gray; cursor: pointer;" \n                      id="allchat-dont-show-feedback">\n                    Don't Show Again\n                </span>\n                <a class="gradient-200-button leave-feedback-button" target="_blank"\n                   href="https://docs.google.com/forms/d/e/1FAIpQLSdkFbtU1o-vw9LXVG4STZiryRbrcF0j445c3b1EfwNoJYUT7w/viewform?usp=dialog">\n                    Leave Feedback\n                </a>\n            </div>\n        </div>\n    `, 10000, "feedback-bubble");
          localStorage.setItem(t, JSON.stringify({
            count: s + 1,
            last: Date.now()
          }));
          const e = document.querySelector(".leave-feedback-button");
          const i = document.getElementById("allchat-dont-show-feedback");
          const o = document.getElementById("allchat-close-feedback");
          const r = () => {
            La.dismiss("feedback-bubble");
          };
          if (e) {
            e.addEventListener("click", () => {
              localStorage.setItem(n, "true");
              r();
            });
          }
          if (i) {
            i.addEventListener("click", () => {
              localStorage.setItem(n, "true");
              r();
            });
          }
          if (o) {
            o.addEventListener("click", r);
          }
        }, 3000);
      }
    }
    function Wa(t, n) {
      if (n) {
        n.innerHTML = Ha(t);
        fa(t.videoControlProps, document.getElementById("tp-allchat-chatbox-controls-container"));
        Za(t);
        const e = document.getElementById("tp-allchat-chatbox-input");
        const i = document.getElementById("tp-allchat-cancel-btn");
        const s = document.getElementById("tp-allchat-post-btn");
        const o = document.getElementById("allchat-chatbox-open-help");
        const r = document.getElementById("tp-flair-row");
        if (r) {
          Pa({
            reaction: "heart",
            shadowColor: "rgba(255, 77, 166, 0.8)"
          }, r);
          Pa({
            reaction: "cry",
            shadowColor: "rgba(9, 239, 247, 1)"
          }, r);
          Pa({
            reaction: "surprise",
            shadowColor: "rgba(255, 216, 77, 0.8)"
          }, r);
        }
        if (e) {
          e.addEventListener("focus", t => {
            t.stopPropagation();
            localStorage.setItem("allchat-has-focus", "true");
          });
          e.addEventListener("blur", () => {
            localStorage.setItem("allchat-has-focus", "false");
          });
          e.addEventListener("click", t => {
            t.stopPropagation();
          });
          e.addEventListener("keydown", t => {
            t.stopPropagation();
          });
          e.addEventListener("input", n => {
            let i = n.target.value;
            if (i.length > Ua) {
              i = i.substring(0, Ua);
              e.value = i;
            }
            t.onCommentEdited(i);
            const s = document.getElementById("tp-allchat-chatbox-length");
            if (s) {
              s.innerHTML = `${i.length}/120`;
            }
          });
        }
        if (i) {
          i.addEventListener("click", n => {
            n.stopPropagation();
            if (t.shouldPlayVideoAfterClose) {
              t.videoControlProps.playVideo();
            }
            Xr("allchat_cancel_post_clicked");
            t.closeChatbox();
          });
        }
        if (s) {
          s.addEventListener("click", n => {
            n.stopPropagation();
            (function (t) {
              Va(this, undefined, undefined, function* () {
                const e = yield Fi.I(new Mr(ii, ei));
                Xr("allchat_post_button_clicked");
                const i = document.getElementById("tp-allchat-chatbox-input");
                const s = i.value;
                if (!s || s.length > 120) {
                  Ra("Message must be between 1-120 characters");
                  return;
                }
                if (!(e == null ? undefined : e.signedIn)) {
                  Ra("You must be logged in to post to All Chat");
                  return;
                }
                const o = (e == null ? undefined : e.currentUser)?.handle;
                if (o) {
                  yield za(t, s, o, i);
                } else {
                  t.openSetHandleModal(n => Va(this, undefined, undefined, function* () {
                    Za(t, n);
                    if (n) {
                      yield za(t, s, n, i);
                    }
                  }));
                }
              });
            })(t);
          });
        }
        if (o) {
          o.addEventListener("click", n => {
            n.stopPropagation();
            t.openHelpModal();
          });
        }
        Qa();
      }
    }
    class Ya {
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
        const n = this.getHtml();
        const e = this.props.containerStyling ? `style="${this.props.containerStyling}"` : "";
        this.host.innerHTML = `\n      <div id="tp-allchat-modal" class="allchat-modal-container" ${e}>\n        <div id="allchat-modal-content" class="allchat-modal-content">\n          ${n}\n        </div>\n      </div>\n    `;
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
          const n = document.querySelector(t);
          if (n) {
            n.addEventListener("click", t => {
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
        const n = document.getElementById("allchat-modal-content");
        if (n) {
          n.innerHTML = t;
        }
      }
    }
    function Ja(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const Ka = /^[\w.]+$/;
    class qa extends Ya {
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
        return `\n      <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <div class="allchat-modal-body" style="padding:16px;">Loading…</div>\n      </div>\n    `;
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
        return Ja(this, undefined, undefined, function* () {
          try {
            const o = yield Fi.I(new Mr(ii, ei));
            const r = Ca.getFullIconURL((o == null ? undefined : o.userSettings)?.userIcon);
            const a = (o == null ? undefined : o.currentUser)?.handle ?? "";
            const u = yield Fi.I(new Qr(si, ei));
            const c = yield ti("handles/me", "GET", true, undefined, u == null ? undefined : u.token);
            const h = (c == null ? undefined : c.data)?.changesRemaining ?? 0;
            this.setContent(this.getFormHtml(a, h, r));
            this.bindFormEvents(h);
          } catch (t) {
            console.error(t);
            this.loadFailed = true;
            this.setContent(`\n        <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n          <div style="display:flex; justify-content:flex-end; width:100%;">\n            ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n          </div>\n          <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n            Failed to load profile. Please try again later.\n          </div>\n        </div>\n      `);
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
      getFormHtml(t, n, e) {
        const i = t.replace(/"/g, "&quot;");
        const s = n <= 0;
        const o = e ? `<img src="${e}" alt="Avatar"\n            style="width:100%; height:100%; opacity:0.9; border-radius:50%; object-fit:cover;" />` : "<div style=\"\n            width:100%; height:100%; border-radius:50%;\n            border:2px solid #aaa; color:#aaa;\n            display:flex; align-items:center; justify-content:center;\n            font-size:12px; text-align:center;\n          \">No Profile</div>";
        const r = s ? "You've used all of your handle changes. Your handle is now permanent." : `You have ${n} handle change${n === 1 ? "" : "s"} remaining.`;
        return `\n    <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n\n      \x3c!-- Header --\x3e\n      <div style="display:flex; justify-content:flex-end; width:100%;">\n        ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n      </div>\n\n      \x3c!-- Avatar (opens Edit Profile Picture) --\x3e\n      <div id="${this.ID_AVATAR}" style="position:relative; width:100px; height:100px; margin-top:8px; margin-bottom:28px; cursor:pointer;">\n        <div style="\n          width:100px; height:100px;\n          border-radius:50%;\n          overflow:hidden;\n          background:#545454;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n        ">\n          ${o}\n        </div>\n        <div style="\n          position:absolute; bottom:0; right:0;\n          width:32px; height:32px; border-radius:50%;\n          background:#5B6CFF;\n          display:flex; align-items:center; justify-content:center;\n          pointer-events:none;\n        ">\n          ${ta("<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g clip-path=\"url(#clip0_4816_39661)\">\n        <path d=\"M13.6125 3.71115C13.6019 3.46323 13.5422 3.21988 13.4367 2.99525C13.3312 2.77063 13.1822 2.56921 12.9982 2.4027L10.9024 0.491859C10.532 0.155063 10.0431 -0.021092 9.54292 0.0020177C9.04278 0.0251274 8.57221 0.245615 8.23439 0.615139L7.05552 1.90748C7.03535 1.92508 7.01617 1.94378 6.99808 1.96352C6.98057 1.98313 6.96446 2.00344 6.94905 2.02446L1.86655 7.59938C1.68313 7.80128 1.54508 8.04012 1.46169 8.29983L0.438321 11.5338C0.348806 11.8165 0.327026 12.1163 0.374738 12.409C0.422451 12.7017 0.538319 12.9791 0.712988 13.2187C0.887657 13.4583 1.11623 13.6535 1.38025 13.7886C1.64428 13.9236 1.93635 13.9946 2.23289 13.9959C2.48868 13.9963 2.74192 13.9451 2.97747 13.8453L6.0945 12.5229C6.34472 12.4161 6.56922 12.257 6.75292 12.0564L13.1208 5.07074C13.2888 4.88806 13.4188 4.67378 13.5033 4.44036C13.5877 4.20694 13.6248 3.95906 13.6125 3.71115V3.71115ZM5.72115 11.1136C5.67358 11.1658 5.61528 11.2071 5.55024 11.2347L2.43182 12.56C2.34517 12.5978 2.24946 12.6097 2.1562 12.5943C2.06295 12.5789 1.97613 12.5369 1.90619 12.4733C1.83625 12.4097 1.78618 12.3273 1.76199 12.2359C1.73781 12.1446 1.74055 12.0482 1.76989 11.9583L2.79325 8.72361C2.81472 8.65546 2.85081 8.59283 2.89902 8.54009L7.56545 3.42186L10.3925 5.99253L5.72115 11.1136ZM12.0897 4.12792L11.3332 4.95796L8.50546 2.39009L9.26616 1.55585C9.30962 1.50793 9.36214 1.46909 9.42069 1.44156C9.47924 1.41403 9.54265 1.39836 9.60728 1.39545H9.6304C9.75297 1.39526 9.87118 1.44099 9.96171 1.52363L12.0575 3.43447C12.1055 3.47788 12.1444 3.53037 12.1721 3.5889C12.1997 3.64744 12.2155 3.71087 12.2185 3.77554C12.2215 3.8402 12.2116 3.90482 12.1895 3.96566C12.1674 4.0265 12.1335 4.08236 12.0897 4.13002V4.12792Z\" fill=\"#FAFAFA\"/>\n        </g>\n        <defs>\n        <clipPath id=\"clip0_4816_39661\">\n        <rect width=\"14\" height=\"14\" fill=\"white\"/>\n        </clipPath>\n        </defs>\n        </svg>\n        ", a, u, c)}\n        </div>\n      </div>\n\n      \x3c!-- Form --\x3e\n      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">\n        <span class="user-pill-name" style="padding-left:4px; font-size:16px; color:#e0e0e0;">Change Handle</span>\n        <div style="\n          display:flex; align-items:center; gap:2px; background:#1f1f1f;\n          border-radius:4px; padding-left:14px; height:48px; ${s ? "opacity:0.5;" : ""}">\n          <span style="color:white; font-size:18px;">@</span>\n          <input\n            id="${this.ID_INPUT}"\n            type="text"\n            value="${i}"\n            placeholder="username"\n            maxlength="32"\n            autocomplete="off"\n            aria-label="Handle"\n            ${s ? "disabled" : ""}\n            style="flex:1; background:transparent; border:none; outline:none; color:white; font-size:18px; ${s ? "cursor:not-allowed;" : ""}"\n          />\n        </div>\n        <span class="user-pill-name" style="padding-left:4px; font-size:13px; ${s ? "color:#e34248;" : "color:#8a8a8a;"}">${r}</span>\n        <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none;"></span>\n        <span id="${this.ID_STATUS}" class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a; display:none;"></span>\n      </div>\n\n      \x3c!-- Actions --\x3e\n      <div style="display:flex; flex-direction:column; width:100%; margin-top:24px; align-items:center">\n        <button id="${this.ID_SUBMIT}" class="gradient-200-button"\n          ${s ? "disabled" : ""}\n          style="height:48px; border-radius:4px; font-weight:700; cursor:${s ? "not-allowed" : "pointer"}; border:none; outline:none; width:100%; ${s ? "opacity:0.5;" : ""}">\n          Save Changes\n        </button>\n      </div>\n\n    </div>\n    `;
        var a;
        var u;
        var c;
      }
      setError(t) {
        const n = document.getElementById(this.ID_ERROR);
        if (n) {
          n.textContent = t;
          n.style.display = t ? "block" : "none";
        }
      }
      setStatus(t) {
        const n = document.getElementById(this.ID_STATUS);
        if (n) {
          n.textContent = t;
          n.style.display = t ? "block" : "none";
        }
      }
      setSubmitting(t, n, e) {
        this.isSubmitting = t;
        n.disabled = t;
        e.disabled = t;
        e.style.opacity = t ? "0.6" : "1";
        n.textContent = t ? "Checking handle..." : "Save Changes";
        n.style.cursor = t ? "wait" : "pointer";
        const i = document.getElementById(this.ID_AVATAR);
        if (i) {
          i.style.pointerEvents = t ? "none" : "auto";
          i.style.opacity = t ? "0.6" : "1";
        }
        this.setStatus(t ? "Verifying your handle — this can take a few seconds." : "");
      }
      bindFormEvents(t) {
        const n = document.getElementById(this.ID_CLOSE);
        const e = document.getElementById(this.ID_SUBMIT);
        const i = document.getElementById(this.ID_INPUT);
        const s = document.getElementById(this.ID_AVATAR);
        if (n) {
          n.addEventListener("click", t => {
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
                if (e && !this.isSubmitting) {
                  this.onSubmit(e, i);
                }
              }
            });
            i.addEventListener("input", () => this.setError(""));
          }
          if (e && i) {
            e.addEventListener("click", t => Ja(this, undefined, undefined, function* () {
              t.stopPropagation();
              yield this.onSubmit(e, i);
            }));
          }
        }
      }
      onSubmit(t, n) {
        return Ja(this, undefined, undefined, function* () {
          if (this.isSubmitting) {
            return;
          }
          const e = n.value.trim().replace(/^@+/, "").toLowerCase();
          if (function (t) {
            return t.length >= 2 && t.length <= 32 && Ka.test(t);
          }(e)) {
            this.setSubmitting(true, t, n);
            this.setError("");
            try {
              const t = yield Fi.I(new Qr(si, ei));
              yield ti("handles", "PUT", true, {
                handle: e
              }, t == null ? undefined : t.token);
              Fi.I(new Wr(si, ei, e));
              this.isSubmitting = false;
              this.close();
              this.props.onHandleChanged(e);
            } catch (e) {
              const i = e == null ? undefined : e.status;
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
              this.setSubmitting(false, t, n);
            }
          } else {
            this.setError("Handles must be 2-32 characters and use only letters, numbers, \".\" or \"_\".");
          }
        });
      }
    }
    class Xa extends ji {
      constructor(t, n, e) {
        super(t, n, ki.UPDATE_USER_SETTINGS);
        this.data = e;
      }
    }
    function tu(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class nu extends Ya {
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
        this.selectedIcon = ga[0];
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
        var n;
        this.revokeUploadPreviewUrl();
        const e = this.loadFailed;
        super.close();
        if (e) {
          if ((n = (t = this.props).onLoadErrorDismiss) !== null && n !== undefined) {
            n.call(t);
          }
        } else {
          this.props.closeModal();
        }
      }
      getHtml() {
        return `\n            <div style="display:flex; flex-direction:column; width:520px; padding:30px 34px;">\n                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">\n                    <span style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">Edit Profile Picture</span>\n                    ${ia(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                </div>\n                <div class="allchat-modal-body" style="padding:36px 0; text-align:center;">Loading...</div>\n            </div>\n        `;
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
        return tu(this, undefined, undefined, function* () {
          try {
            const n = yield Fi.I(new Mr(ii, ei));
            const e = (n == null ? undefined : n.userSettings)?.userIcon;
            this.selectedIcon = e || ga[0];
            const i = (e ? Ca.getFullIconURL(e) : undefined) || e || chrome.runtime.getURL("img/icons/" + this.selectedIcon);
            this.currentPage = this.getPageForIcon(this.selectedIcon);
            this.setContent(this.getFormHtml(i));
            this.bindFormEvents();
          } catch (t) {
            console.error(t);
            this.loadFailed = true;
            this.setContent(`\n                <div style="display:flex; flex-direction:column; width:100%; align-items:center;">\n                    <div style="display:flex; justify-content:flex-end; width:100%;">\n                        ${ia(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                    </div>\n                    <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n                        Failed to load profile picture. Please try again later.\n                    </div>\n                </div>\n            `);
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
        return `\n            <div style="display:flex; flex-direction:column; width:520px; padding:30px 34px;">\n                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">\n                    <span style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">Edit Profile Picture</span>\n                    ${ia(this.ID_CLOSE, "cursor: pointer !important; opacity:0.72;")}\n                </div>\n\n                <div style="display:flex; justify-content:center; margin-top:26px;">\n                    <div style="width:112px; height:112px; border-radius:50%; overflow:hidden; background:#8b92a3;">\n                        <img id="${this.ID_PREVIEW}" src="${t}" alt="Selected avatar" style="width:100%; height:100%; object-fit:cover; display:block;" />\n                    </div>\n                </div>\n\n                <span style="margin-top:28px; color:#b9b9c2; font-size:17px; font-weight:400;">Choose an avatar</span>\n\n                <div style="display:flex; align-items:center; gap:12px; margin-top:18px; width:100%;">\n                    <button id="${this.ID_PREV_PAGE}" type="button" aria-label="Previous avatars" style="\n                        width:34px; height:76px; border-radius:10px; border:1px solid #4f515c;\n                        background:#151515; color:#ffffff; font-size:22px; cursor:pointer;\n                    ">&lsaquo;</button>\n\n                    <div style="flex:1; overflow:hidden;">\n                        <div id="${this.ID_AVATAR_GRID}" style="\n                            display:grid; grid-template-columns:repeat(5, 64px); justify-content:space-between; row-gap:14px;\n                            transition: opacity 160ms ease, transform 160ms ease;\n                            opacity:1; transform:translateX(0);\n                        ">\n                        ${this.getAvatarGridHtml()}\n                        </div>\n                    </div>\n\n                    <button id="${this.ID_NEXT_PAGE}" type="button" aria-label="Next avatars" style="\n                        width:34px; height:76px; border-radius:10px; border:1px solid #4f515c;\n                        background:#151515; color:#ffffff; font-size:22px; cursor:pointer;\n                    ">&rsaquo;</button>\n                </div>\n                <span id="${this.ID_PAGE_LABEL}" style="align-self:center; margin-top:10px; color:#8f9099; font-size:13px; font-weight:500;">\n                    ${this.getPageLabel()}\n                </span>\n\n                <button id="${this.ID_UPLOAD}" type="button" style="\n                    margin-top:24px; width:100%; height:54px; border-radius:14px;\n                    border:2px solid #5e606b; background:transparent; color:#ffffff;\n                    display:flex; align-items:center; justify-content:center; gap:14px;\n                    font-size:18px; font-weight:700; cursor:pointer;\n                ">\n                    <span aria-hidden="true" style="font-size:18px;">&#x2B06;&#xFE0F;</span>\n                    <span>Upload your own picture</span>\n                </button>\n                <input id="${this.ID_UPLOAD_INPUT}" type="file" accept="image/png,image/jpeg,image/webp,image/gif" style="display:none;" />\n\n                <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none; margin-top:12px;"></span>\n\n                <button id="${this.ID_SAVE}" class="gradient-200-button" type="button" style="\n                    margin-top:22px; width:100%; height:56px; border-radius:14px;\n                    border:none; color:#ffffff; font-size:18px; font-weight:700; cursor:pointer;\n                ">Save</button>\n\n                <button id="${this.ID_CANCEL}" type="button" style="\n                    align-self:center; margin-top:18px; border:none; background:transparent;\n                    color:#b9b9c2; font-size:16px; font-weight:600; cursor:pointer;\n                ">Cancel</button>\n            </div>\n        `;
      }
      getAvatarButtonHtml(t) {
        return `\n            <button type="button" class="allchat-edit-picture-avatar" data-icon="${t}" aria-label="Choose avatar" style="\n                width:64px; height:64px; border-radius:50%; background:#1f1f1f;\n                border:${t === this.selectedIcon ? "4px solid #ffffff" : "2px solid transparent"};\n                outline:none; cursor:pointer; padding:4px; overflow:hidden;\n            ">\n                <img src="${chrome.runtime.getURL("img/icons/" + t)}" alt="" style="width:100%; height:100%; object-fit:contain; display:block;" />\n            </button>\n        `;
      }
      get totalPages() {
        return Math.max(1, Math.ceil(ga.length / 10));
      }
      getPageForIcon(t) {
        const n = ga.indexOf(t);
        if (n < 0) {
          return 0;
        } else {
          return Math.floor(n / 10);
        }
      }
      getVisibleIcons() {
        const t = this.currentPage * 10;
        return ga.slice(t, t + 10);
      }
      getAvatarGridHtml() {
        return this.getVisibleIcons().map(t => this.getAvatarButtonHtml(t)).join("");
      }
      getPageLabel() {
        return `${this.currentPage + 1}/${this.totalPages}`;
      }
      setError(t) {
        const n = document.getElementById(this.ID_ERROR);
        if (n) {
          n.textContent = t;
          n.style.display = t ? "block" : "none";
        }
      }
      setPreview(t, n = t) {
        this.revokeUploadPreviewUrl();
        this.selectedIcon = t;
        this.selectedUpload = null;
        const e = document.getElementById(this.ID_PREVIEW);
        if (e) {
          e.src = n;
        }
        document.querySelectorAll(".allchat-edit-picture-avatar").forEach(n => {
          const e = n.dataset.icon === t;
          n.style.border = e ? "4px solid #ffffff" : "2px solid transparent";
        });
      }
      setUploadPreview(t, n) {
        this.selectedUpload = t;
        const e = document.getElementById(this.ID_PREVIEW);
        if (e) {
          e.src = n;
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
        const n = document.getElementById(this.ID_SAVE);
        const e = document.getElementById(this.ID_UPLOAD);
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
        if (e != null) {
          e.addEventListener("click", t => {
            t.stopPropagation();
            if (i != null) {
              i.click();
            }
          });
        }
        if (i != null) {
          i.addEventListener("change", () => {
            const n = i.files?.[0];
            if (n) {
              if (!n.type.startsWith("image/")) {
                this.setError("Please choose a valid image file.");
                i.value = "";
                return;
              }
              this.revokeUploadPreviewUrl();
              this.uploadPreviewUrl = URL.createObjectURL(n);
              this.setError("");
              this.setUploadPreview(n, this.uploadPreviewUrl);
            }
          });
        }
        if (n != null) {
          n.addEventListener("click", t => tu(this, undefined, undefined, function* () {
            t.stopPropagation();
            yield this.onSave(n);
          }));
        }
      }
      bindAvatarButtons() {
        document.querySelectorAll(".allchat-edit-picture-avatar").forEach(t => {
          t.addEventListener("click", n => {
            n.stopPropagation();
            const e = t.dataset.icon;
            if (e) {
              this.setError("");
              this.setPreview(e, chrome.runtime.getURL("img/icons/" + e));
            }
          });
        });
      }
      setAvatarPage(t, n) {
        this.currentPage = (t + this.totalPages) % this.totalPages;
        const e = document.getElementById(this.ID_AVATAR_GRID);
        if (e) {
          e.style.opacity = "0";
          e.style.transform = `translateX(${n * -18}px)`;
          window.setTimeout(() => {
            e.innerHTML = this.getAvatarGridHtml();
            e.style.transition = "none";
            e.style.transform = `translateX(${n * 18}px)`;
            window.requestAnimationFrame(() => {
              e.style.transition = "opacity 160ms ease, transform 160ms ease";
              e.style.opacity = "1";
              e.style.transform = "translateX(0)";
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
        return tu(this, undefined, undefined, function* () {
          t.disabled = true;
          t.textContent = "Saving...";
          this.setError("");
          try {
            let t = this.selectedIcon;
            if (this.selectedUpload) {
              const n = yield Fi.I(new Qr(si, ei));
              const e = new FormData();
              e.append("profilePicture", this.selectedUpload);
              t = `/${yield ti("upload-profile", "POST", true, e, n == null ? undefined : n.token)}?lastmod=${Date.now()}`;
            }
            yield Fi.I(new Xa(si, ei, {
              userIcon: t
            }));
            this.close();
            this.props.onProfilePictureChanged();
          } catch (n) {
            console.error(n);
            this.setError("Something went wrong. Please try again later.");
            t.disabled = false;
            t.textContent = "Save";
          }
        });
      }
    }
    function eu(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const iu = /^[\w.]+$/;
    class su extends Ya {
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
        return `\n      <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <div class="allchat-modal-body" style="padding:16px;">Loading…</div>\n      </div>\n    `;
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
        return eu(this, undefined, undefined, function* () {
          try {
            const e = yield Fi.I(new Mr(ii, ei, true));
            const i = (e == null ? undefined : e.currentUser)?.handle;
            if (i) {
              Fi.I(new Wr(si, ei, i));
              this.close();
              this.props.onHandleSet(i);
              return;
            }
            const s = Ca.getFullIconURL((e == null ? undefined : e.userSettings)?.userIcon);
            this.setContent(this.getFormHtml(s));
            this.bindFormEvents();
          } catch (t) {
            console.error(t);
            this.loadFailed = true;
            this.setContent(`\n        <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n          <div style="display:flex; justify-content:flex-end; width:100%;">\n            ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n          </div>\n          <div class="allchat-modal-body" style="padding:16px; color:#fca5a5; text-align:center;">\n            Failed to load profile. Please try again later.\n          </div>\n        </div>\n      `);
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
        const n = t ? `<img src="${t}" alt="Avatar"\n            style="width:100%; height:100%; opacity:0.9; border-radius:50%; object-fit:cover;" />` : "<div style=\"\n            width:100%; height:100%; border-radius:50%;\n            border:2px solid #aaa; color:#aaa;\n            display:flex; align-items:center; justify-content:center;\n            font-size:12px; text-align:center;\n          \">No Profile</div>";
        return `\n    <div style="display:flex; flex-direction:column; width:400px; align-items:center;">\n\n      \x3c!-- Header --\x3e\n      <div style="display:flex; justify-content:flex-end; width:100%;">\n        ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n      </div>\n\n      \x3c!-- Avatar --\x3e\n      <div style="position:relative; width:100px; height:100px; margin-top:8px; margin-bottom:28px;">\n        <div style="\n          width:100px; height:100px;\n          border-radius:50%;\n          overflow:hidden;\n          background:#545454;\n          display:flex;\n          align-items:center;\n          justify-content:center;\n        ">\n          ${n}\n        </div>\n      </div>\n\n      \x3c!-- Form --\x3e\n      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">\n        <span class="user-pill-name" style="padding-left:4px; font-size:16px; color:#e0e0e0;">Choose your Handle</span>\n        <div style="\n          display:flex; align-items:center; gap:2px; background:#1f1f1f;\n          border-radius:4px; padding-left:14px; height:48px;">\n          <span style="color:white; font-size:18px;">@</span>\n          <input\n            id="${this.ID_INPUT}"\n            type="text"\n            placeholder="username"\n            maxlength="32"\n            autocomplete="off"\n            aria-label="Handle"\n            style="flex:1; background:transparent; border:none; outline:none; color:white; font-size:18px;"\n          />\n        </div>\n        <span class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a;">\n          You can change your handle up to 3 times after this, so choose wisely.\n        </span>\n        <span id="${this.ID_ERROR}" class="allchat-error-text" style="display:none;"></span>\n        <span id="${this.ID_STATUS}" class="user-pill-name" style="padding-left:4px; font-size:13px; color:#8a8a8a; display:none;"></span>\n      </div>\n\n      \x3c!-- Actions --\x3e\n      <div style="display:flex; flex-direction:column; width:100%; margin-top:24px; align-items:center">\n        <button id="${this.ID_SUBMIT}" class="gradient-200-button"\n          style="height:48px; border-radius:4px; font-weight:700; cursor:pointer; border:none; outline:none; width:100%">\n          Submit\n        </button>\n      </div>\n\n    </div>\n    `;
      }
      setError(t) {
        const n = document.getElementById(this.ID_ERROR);
        if (n) {
          n.textContent = t;
          n.style.display = t ? "block" : "none";
        }
      }
      setStatus(t) {
        const n = document.getElementById(this.ID_STATUS);
        if (n) {
          n.textContent = t;
          n.style.display = t ? "block" : "none";
        }
      }
      setSubmitting(t, n, e) {
        this.isSubmitting = t;
        n.disabled = t;
        e.disabled = t;
        e.style.opacity = t ? "0.6" : "1";
        n.textContent = t ? "Checking handle..." : "Submit";
        n.style.cursor = t ? "wait" : "pointer";
        this.setStatus(t ? "Verifying your handle — this can take a few seconds." : "");
      }
      bindFormEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        const n = document.getElementById(this.ID_SUBMIT);
        const e = document.getElementById(this.ID_INPUT);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (e) {
          e.addEventListener("click", t => t.stopPropagation());
          e.addEventListener("keydown", t => {
            t.stopPropagation();
            if (t.key === "Enter") {
              t.preventDefault();
              if (n && !this.isSubmitting) {
                this.onSubmit(n, e);
              }
            }
          });
          e.addEventListener("input", () => this.setError(""));
        }
        if (n && e) {
          n.addEventListener("click", t => eu(this, undefined, undefined, function* () {
            t.stopPropagation();
            yield this.onSubmit(n, e);
          }));
        }
      }
      onSubmit(t, n) {
        return eu(this, undefined, undefined, function* () {
          if (this.isSubmitting) {
            return;
          }
          const e = n.value.trim().replace(/^@+/, "").toLowerCase();
          if (!function (t) {
            return t.length >= 2 && t.length <= 32 && iu.test(t);
          }(e)) {
            this.setError("Handles must be 2-32 characters and use only letters, numbers, \".\" or \"_\".");
            return;
          }
          let i;
          this.setSubmitting(true, t, n);
          this.setError("");
          try {
            const t = yield Fi.I(new Qr(si, ei));
            i = t == null ? undefined : t.token;
            yield ti("handles", "POST", true, {
              handle: e
            }, i);
            Fi.I(new Wr(si, ei, e));
            this.isSubmitting = false;
            this.close();
            this.props.onHandleSet(e);
          } catch (e) {
            const s = e == null ? undefined : e.status;
            const o = function (t) {
              try {
                const n = typeof (t == null ? undefined : t.message) == "string" ? JSON.parse(t.message) : t == null ? undefined : t.message;
                if (typeof (n == null ? undefined : n.data) == "string") {
                  return n.data;
                }
                if (typeof n == "string") {
                  return n;
                }
              } catch (t) {}
              if (typeof (t == null ? undefined : t.message) == "string") {
                return t.message;
              } else {
                return "";
              }
            }(e);
            if (s === 409) {
              const t = yield this.recoverExistingHandle(i);
              if (t || /already set/i.test(o)) {
                if (t) {
                  Fi.I(new Wr(si, ei, t));
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
            this.setSubmitting(false, t, n);
          }
        });
      }
      recoverExistingHandle(t) {
        return eu(this, undefined, undefined, function* () {
          try {
            const e = yield ti("handles/me", "GET", true, undefined, t);
            return (e == null ? undefined : e.data)?.handle || undefined;
          } catch (t) {
            return;
          }
        });
      }
    }
    class ou extends Ya {
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
        const n = t ? "Disable All Chat" : "Enable All Chat";
        const e = t ? "allchat-toggle--disable" : "allchat-toggle--enable";
        return `\n    <div style="\n      display:flex; flex-direction:column; width:470px; height:600px;\n      position:relative; overflow:hidden; background-color:rgba(0,0,0,0.9);\n      font-family:'Poppins', sans-serif; padding-bottom:76px; box-sizing:border-box;\n    ">\n      <div style="display:flex; padding-bottom:6px; flex-direction:row; align-items:center; justify-content:space-between; width:100%;">\n        <div style="display:flex; flex-direction:row; align-items:center">\n          <span class="allchat-modal-header" style="margin-right:8px;">Introducing All Chat</span>\n          ${ta("<svg width=\"45\" height=\"19\" viewBox=\"0 0 45 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect width=\"45\" height=\"19\" rx=\"9.5\" fill=\"#FBC45A\"/>\n            <path d=\"M13.58 9.704C14.052 9.792 14.44 10.028 14.744 10.412C15.048 10.796 15.2 11.236 15.2 11.732C15.2 12.18 15.088 12.576 14.864 12.92C14.648 13.256 14.332 13.52 13.916 13.712C13.5 13.904 13.008 14 12.44 14H8.828V5.624H12.284C12.852 5.624 13.34 5.716 13.748 5.9C14.164 6.084 14.476 6.34 14.684 6.668C14.9 6.996 15.008 7.368 15.008 7.784C15.008 8.272 14.876 8.68 14.612 9.008C14.356 9.336 14.012 9.568 13.58 9.704ZM10.508 9.08H12.044C12.444 9.08 12.752 8.992 12.968 8.816C13.184 8.632 13.292 8.372 13.292 8.036C13.292 7.7 13.184 7.44 12.968 7.256C12.752 7.072 12.444 6.98 12.044 6.98H10.508V9.08ZM12.2 12.632C12.608 12.632 12.924 12.536 13.148 12.344C13.38 12.152 13.496 11.88 13.496 11.528C13.496 11.168 13.376 10.888 13.136 10.688C12.896 10.48 12.572 10.376 12.164 10.376H10.508V12.632H12.2ZM18.2189 6.98V9.08H21.0389V10.412H18.2189V12.632H21.3989V14H16.5389V5.612H21.3989V6.98H18.2189ZM28.6257 5.624V6.98H26.3937V14H24.7137V6.98H22.4817V5.624H28.6257ZM34.9874 12.404H31.6514L31.0994 14H29.3354L32.3474 5.612H34.3034L37.3154 14H35.5394L34.9874 12.404ZM34.5314 11.06L33.3194 7.556L32.1074 11.06H34.5314Z\" fill=\"#050505\"/>\n        </svg>\n        ", i, s)}\n        </div>\n        ${ia(this.CLOSE_ID, "cursor: pointer !important;")}\n      </div>\n\n      <span class="allchat-modal-body" style="color:#a0a0a0; margin-top:6px;">\n        Teleparty All Chat is a beta feature that allows viewers to engage with each other by leaving short comments on videos they watch.\n      </span>\n\n      <div class="allchat-scrollbox" style="\n        display:flex; flex-direction:column; background-color:#282828; padding:16px; margin-top:20px;\n        flex:1 1 auto; overflow-y:auto; border-radius:8px;\n      ">\n        <img style="margin-bottom:20px; max-width:100%; height:auto;" src="${chrome.runtime.getURL("img/allchat_comment.png")}" />\n\n        <span class="allchat-modal-subheader">How do I turn this feature on/off?</span>\n        <span class="allchat-modal-body">\n          To disable All Chat, press the ${sa("", "width: 26px; height: 26px; transform: translateY(25%);")} button on the top right of the video.\n          To enable it, press ${oa("", "width: 26px; height: 26px; transform: translateY(25%);")}.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">How do I add a comment to the video?</span>\n        <span class="allchat-modal-body">\n          To add comments to the video, sign in to teleparty and press the ${ra("", "width: 26px; height: 26px; transform: translateY(25%);")} button on the top right of the video.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">Who sees these comments?</span>\n        <span class="allchat-modal-body">\n          Comments are shown to <span style="font-weight:700">all Teleparty users</span>. This chat is global unlike the typical Teleparty chat.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">Will I see comments when I'm not in a party?</span>\n        <span class="allchat-modal-body">\n          Yes, comments are shown whenever allchat is enabled, including when you are not in a party. By default, allchat is turned off.\n        </span>\n\n        <span class="allchat-modal-subheader" style="margin-top:40px; margin-bottom:10px">When will my comments show up for other users?</span>\n        <span class="allchat-modal-body">\n          Comments will show up for other users after about a minute.\n        </span>\n      </div>\n\n      <div style="\n        position:absolute; left:0; right:0; bottom:0;\n        display:flex; flex-direction:row; gap:10px; align-items:stretch;\n        padding:6px; background-color:rgba(0,0,0,0.9);\n        border-top:1px solid rgba(255,255,255,0.08);\n      ">\n        <span id="${this.TOGGLE_ID}" class="allchat-toggle-btn ${e}">${n}</span>\n        <span id="${this.CONTINUE_ID}" class="gradient-200-button" style="\n          flex:1 1 0; display:inline-flex; align-items:center; justify-content:center; white-space:nowrap;\n        ">Continue</span>\n      </div>\n    </div>`;
        var i;
        var s;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.CONTINUE_ID);
        const n = document.getElementById(this.TOGGLE_ID);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (n) {
          n.addEventListener("click", t => {
            t.stopPropagation();
            this.props.toggleLiveChat();
            if (this.props.getLiveChatShowing()) {
              n.classList.remove("allchat-toggle--enable");
              n.classList.add("allchat-toggle--disable");
              n.textContent = "Disable All Chat";
            } else {
              n.classList.remove("allchat-toggle--disable");
              n.classList.add("allchat-toggle--enable");
              n.textContent = "Enable All Chat";
            }
          });
        }
      }
    }
    const ru = ["Messages should be relevant to the content and must not contain spoilers, spam, or advertisements", "Messages must not be rude, inappropriate, or hateful", "Messages are shown to ALL Teleparty users, not just those in your current party if you are in one"];
    const au = [{
      id: "ac-guideline-1",
      text: "I agree that my message is relevant to the content and does not contain spoilers, spam, or advertisements"
    }, {
      id: "ac-guideline-2",
      text: "I agree that my message is not rude, inappropriate, or hateful"
    }, {
      id: "ac-guideline-3",
      text: "I understand that my message will be shown to ALL Teleparty users, not just those in my current party if I am in one"
    }];
    class uu extends Ya {
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
      checkboxHtml(t, n) {
        var e;
        return `\n      <label for="${n}" style="display:flex; align-items:center; margin-bottom:8px;">\n        <input type="checkbox" id="${n}" data-teleparty-guidelines="true" ${((e = this.props.boxesChecked) === null || e === undefined ? undefined : e.includes(n)) ? "checked" : ""} style="margin-right:8px;" />\n        <span class="allchat-checkbox-text">${t}</span>\n      </label>\n    `;
      }
      getHtml() {
        if (this.props.viewOnly) {
          const t = ru.map(t => `\n        <div style="display:flex; gap:10px; align-items:flex-start; margin-bottom:12px;">\n          <span style="color:#e34248; font-weight:700; line-height:1.4;">•</span>\n          <span class="allchat-checkbox-text" style="line-height:1.4;">${t}</span>\n        </div>\n      `).join("");
          return `\n      <div style="display:flex; flex-direction:column; width:470px;">\n        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">\n          <span class="allchat-modal-header">Community Guidelines</span>\n          ${ia(this.ID_CLOSE, "cursor: pointer !important;")}\n        </div>\n        <span class="allchat-modal-body" style="margin-bottom:16px;">\n          Please keep All Chat kind and on-topic. Messages that break these rules may be removed.\n        </span>\n        <div style="display:flex; flex-direction:column; margin-bottom:20px;">\n          ${t}\n        </div>\n        <div style="display:flex; justify-content:flex-end; width:100%;">\n          <span id="${this.ID_CANCEL}" class="gradient-200-button">Got it</span>\n        </div>\n      </div>\n    `;
        }
        return `\n      <div style="display:flex; flex-direction:column; width:470px;">\n        <span class="allchat-modal-header" style="margin-bottom:4px;">Community Guidelines</span>\n        <span class="allchat-modal-body">Please agree to the following community guidelines before commenting:</span>\n\n        <div style="display:flex; flex-direction:column; gap:8px; margin-top:20px; margin-bottom:20px;">\n          ${au.map(t => this.checkboxHtml(t.text, t.id)).join("")}\n          <span class="allchat-error-text" id="${this.ID_ERROR}"></span>\n        </div>\n\n        <div style="display:flex; flex-direction:row; align-items:center; justify-content:right; width:100%;">\n          <span id="${this.ID_CANCEL}" class="allchat-chatbox-button" style="font-weight:600; margin-right:16px; font-size:16px;">Cancel</span>\n          <span id="${this.ID_CONFIRM}" class="gradient-200-button">Post Comment</span>\n        </div>\n      </div>\n    `;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.ID_CLOSE);
        const n = document.getElementById(this.ID_CANCEL);
        const e = document.getElementById(this.ID_CONFIRM);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (n) {
          n.addEventListener("click", t => {
            var n;
            var e;
            t.stopPropagation();
            if (!this.props.viewOnly && (e = (n = this.props).onCancel) !== null && e !== undefined) {
              e.call(n);
            }
            this.close();
          });
        }
        if (e && !this.props.viewOnly) {
          e.addEventListener("click", t => {
            var n;
            var e;
            t.stopPropagation();
            const i = document.querySelectorAll("input[type=\"checkbox\"][data-teleparty-guidelines=\"true\"]");
            if (Array.from(i).every(t => t.checked)) {
              if ((e = (n = this.props).onAgree) !== null && e !== undefined) {
                e.call(n);
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
              var n;
              var e;
              if ((e = (n = this.props).onToggleBox) !== null && e !== undefined) {
                e.call(n, t.id, t.checked);
              }
            });
          });
        }
      }
    }
    function cu(t, n, e) {
      const i = n ? ` id="${n}"` : "";
      let s = (e ?? "").trim();
      if (s && !s.endsWith(";")) {
        s += ";";
      }
      s += "pointer-events:auto!important;";
      return t.replace("<svg ", `<svg${i} style="${s}" `);
    }
    function hu(t, n) {
      const e = `tpLogo${Math.random().toString(36).slice(2, 9)}`;
      return cu(`<svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <mask id="${e}Mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">\n            <path d="M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z" fill="#EF3E3A"/>\n            <path d="M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z" fill="#EF3E3A"/>\n            </mask>\n            <g mask="url(#${e}Mask)">\n            <rect width="33" height="33" fill="url(#${e}Grad)"/>\n            </g>\n            <defs>\n            <linearGradient id="${e}Grad" x1="0" y1="0" x2="37.984" y2="7.39309" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#E34248"/>\n            <stop offset="1" stop-color="#9E55A0"/>\n            </linearGradient>\n            </defs>\n        </svg>`, t, n);
    }
    function lu(t, n) {
      return cu("<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"12\" cy=\"12\" r=\"8.25\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n            <path d=\"M8.5 14c1.1 1.2 2.6 1.8 3.5 1.8s2.4-.6 3.5-1.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n            <circle cx=\"9.2\" cy=\"10.2\" r=\"1\" fill=\"currentColor\"/>\n            <circle cx=\"14.8\" cy=\"10.2\" r=\"1\" fill=\"currentColor\"/>\n        </svg>", t, n);
    }
    class du extends Ya {
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
        return `\n    <div class="tp-floating-help">\n      <div class="tp-floating-help-header">\n        <div class="tp-floating-help-brand">\n          <span class="tp-floating-help-logo" aria-hidden="true">${hu()}</span>\n          <div class="tp-floating-help-titles">\n            <span class="tp-floating-help-title">All Chat</span>\n            <span class="tp-floating-help-badge">Beta</span>\n          </div>\n        </div>\n        ${ia(this.CLOSE_ID, "cursor: pointer !important;")}\n      </div>\n\n      <p class="tp-floating-help-lede">\n        Timed comments from Teleparty viewers — not a live chat. Comments appear when the video reaches the moment they were left.\n      </p>\n\n      <div class="tp-floating-help-steps">\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">1</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Open the panel</span>\n            <span class="tp-floating-help-step-text">\n              Tap <strong>Chat</strong> at the top left when Netflix controls are visible. The button hides with the controls; an open panel stays up.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">2</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Watch comments appear</span>\n            <span class="tp-floating-help-step-text">\n              Like a Twitch VOD: comments unlock as playback reaches their timestamp. Scrubbing back hides later ones.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-step">\n          <span class="tp-floating-help-step-num" aria-hidden="true">3</span>\n          <div class="tp-floating-help-step-body">\n            <span class="tp-floating-help-step-title">Leave your mark</span>\n            <span class="tp-floating-help-step-text">\n              Log in, choose a handle, then post. Comments are global for Teleparty users — not just people in your party.\n            </span>\n          </div>\n        </div>\n\n        <div class="tp-floating-help-note">\n          All Chat hides while you’re in a Teleparty. Leave the party to use it again.\n        </div>\n      </div>\n\n      <div class="tp-floating-help-footer">\n        <a\n          id="${this.FEEDBACK_ID}"\n          class="tp-floating-help-feedback"\n          href="https://docs.google.com/forms/d/e/1FAIpQLSeJORvFwSNAYhsCLd94YLUOn5s7y_aGezl89slmbM6LZFPPvw/viewform?usp=publish-editor"\n          target="_blank"\n          rel="noopener noreferrer"\n        >Leave feedback</a>\n        <button type="button" id="${this.CONTINUE_ID}" class="tp-floating-help-continue">Got it</button>\n      </div>\n    </div>`;
      }
      bindInnerEvents() {
        const t = document.getElementById(this.CONTINUE_ID);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        const n = document.getElementById(this.FEEDBACK_ID);
        if (n) {
          n.addEventListener("click", t => t.stopPropagation());
        }
      }
    }
    function pu(t) {
      const e = t.containerStyling ? `style="${t.containerStyling}"` : "";
      const i = Kr(t.flair ?? "");
      return `\n        <div id="tp-allchat-live-feed" class="live-feed-container" ${e}>\n            ${t.flair ? `<div style="position: absolute; top: 0; right: 0; transform: translate(60%, -40%)" id="tp-flair-container">\n                            <img src=${i.gifSrc} alt=${t.flair} width="48 height="48"/>\n                        </div>` : ""}\n            <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-between; align-items: center">\n                ${ta("\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g opacity=\"0.2\">\n            <mask id=\"mask0_1785_27357\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"16\" height=\"16\">\n            <path d=\"M9.59808 3.61537V0.416016H0V3.61537H3.19936V12.416H6.39872V3.61537H9.59808Z\" fill=\"#EF3E3A\"/>\n            <path d=\"M11.5997 4.41602C9.16894 4.41602 7.19936 6.38559 7.19936 8.81634V15.6154H10.3987V13.0501C10.7798 13.159 11.1833 13.2167 11.5997 13.2167C14.0304 13.2167 16 11.2471 16 8.81634C16 6.38559 14.0272 4.41602 11.5997 4.41602ZM11.5997 10.0141C10.9368 10.0141 10.3987 9.47606 10.3987 8.81313C10.3987 8.1502 10.9368 7.61217 11.5997 7.61217C12.2626 7.61217 12.8006 8.1502 12.8006 8.81313C12.7974 9.47927 12.2626 10.0141 11.5997 10.0141Z\" fill=\"#EF3E3A\"/>\n            </mask>\n            <g mask=\"url(#mask0_1785_27357)\">\n            <rect width=\"16\" height=\"16\" fill=\"white\"/>\n            </g>\n            </g>\n        </svg>\n    ", s, o)}\n                <div style="display: flex; flex-direction: row; align-items: center">\n                    ${na("tp-allchat-comment-help", "cursor: pointer !important;")}\n                    ${ea("tp-allchat-report-flag", "cursor: pointer !important; margin-left: 6px;")}\n                </div>\n            </div>\n            <p class="live-feed-comment-username">${t.username}</p>\n            <p class="live-feed-comment-message">${t.message}</p>\n        </div>\n    `;
      var s;
      var o;
    }
    function fu(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Du extends Ya {
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
        const n = document.getElementById(this.ID_CONFIRM);
        if (t) {
          t.addEventListener("click", t => {
            t.stopPropagation();
            this.close();
          });
        }
        if (n) {
          n.addEventListener("click", t => {
            t.stopPropagation();
            this.onReportClick(n);
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
        return fu(this, undefined, undefined, function* () {
          t.textContent = "Reporting...";
          t.style.pointerEvents = "none";
          t.style.opacity = "0.7";
          try {
            yield ti(`comments/${this.props.commentId}/report`, "POST", false);
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
    const vu = "tp-floating-chat-open-btn";
    function gu(t, n) {
      if (!n) {
        return;
      }
      let e = document.getElementById(vu);
      var i;
      var s;
      if (!e || !n.contains(e) || !e.querySelector(".tp-floating-chat-open-btn-logo")) {
        n.innerHTML = `\n            <button\n                type="button"\n                id="${vu}"\n                class="tp-floating-chat-open-btn"\n                aria-label="Open All Chat"\n                title="Open All Chat"\n            >\n                <span class="tp-floating-chat-open-btn-logo" aria-hidden="true">${cu("<svg width=\"20\" height=\"20\" viewBox=\"0 0 33 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n            <path d=\"M19.796 7.45659V0.85791H0V7.45659H6.59868V25.6079H13.1974V7.45659H19.796Z\" fill=\"#FFFFFF\"/>\n            <path d=\"M23.9243 9.10791C18.9109 9.10791 14.8487 13.1702 14.8487 18.1836V32.2066H21.4474V26.9158C22.2334 27.1403 23.0657 27.2592 23.9243 27.2592C28.9378 27.2592 33 23.197 33 18.1836C33 13.1702 28.9311 9.10791 23.9243 9.10791ZM23.9243 20.6539C22.557 20.6539 21.4474 19.5443 21.4474 18.177C21.4474 16.8097 22.557 15.7 23.9243 15.7C25.2916 15.7 26.4013 16.8097 26.4013 18.177C26.3947 19.5509 25.2916 20.6539 23.9243 20.6539Z\" fill=\"#FFFFFF\"/>\n        </svg>", i, s)}</span>\n                <span class="tp-floating-chat-open-btn-label">All Chat</span>\n            </button>\n        `;
        e = document.getElementById(vu);
      }
      if (!e) {
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
      e.className = o.join(" ");
      e.setAttribute("aria-label", t.panelOpen ? "Close All Chat" : "Open All Chat");
      e.title = t.panelOpen ? "Close All Chat" : "Open All Chat";
      e.setAttribute("aria-pressed", t.panelOpen ? "true" : "false");
      e.setAttribute("aria-hidden", t.controlsShowing ? "false" : "true");
      e.tabIndex = t.controlsShowing ? 0 : -1;
      e.onclick = n => {
        n.stopPropagation();
        n.preventDefault();
        t.onClick();
      };
    }
    const mu = "tp-floating-chat-message-list";
    const wu = {
      commentId: "tp-floating-chat-intro",
      vidTime: 0,
      message: "Welcome to All Chat! These are timed comments from Teleparty users, not a live chat. Comments appear when the video reaches the moment they were left. Post a comment and make your mark!",
      displayName: "Teleparty All Chat",
      vidDuration: 0
    };
    function yu(t) {
      return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function bu(t, n) {
      if (!n) {
        return;
      }
      const e = n.querySelector(`#${mu}`);
      if (!e) {
        return;
      }
      const i = e.scrollHeight - e.scrollTop - e.clientHeight < 48;
      const s = e.querySelectorAll(".tp-floating-chat-message").length;
      e.innerHTML = t.messages.map(t => function (t) {
        const {
          comment: e,
          isSystem: i,
          isPending: s,
          isRejected: o,
          rejectionReason: r,
          isLeaving: a
        } = t;
        const u = (e.displayName || "?").replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
        const c = Kr(e.flair ?? "");
        const h = e.flair ? `<div class="tp-floating-chat-flair" aria-hidden="true">\n                <img src="${c.gifSrc}" alt="${yu(e.flair)}" width="24" height="24"/>\n           </div>` : "";
        const l = i || s || o || !t.onReportFlagClicked ? "" : ea(`tp-floating-report-${yu(e.commentId)}`, "cursor: pointer !important; width: 14px; height: 14px;");
        const d = i ? "tp-floating-chat-username tp-floating-chat-username--brand" : "tp-floating-chat-username";
        const p = i ? `<div class="tp-floating-chat-avatar tp-floating-chat-avatar--brand">${hu()}</div>` : `<div class="tp-floating-chat-avatar">${yu(u)}</div>`;
        const f = h || l ? `<div class="tp-floating-chat-message-meta-right">${h}${l}</div>` : "";
        const D = [i ? "tp-floating-chat-message--system" : "", s ? "tp-floating-chat-message--pending" : "", o ? "tp-floating-chat-message--rejected" : "", a ? "tp-floating-chat-message--leaving" : ""].filter(Boolean).join(" ");
        const v = o && r ? `<p class="tp-floating-chat-reject-reason">${yu(r)}</p>` : "";
        return `\n        <div class="tp-floating-chat-message${D ? ` ${D}` : ""}" data-comment-id="${yu(e.commentId)}">\n            ${p}\n            <div class="tp-floating-chat-message-body">\n                <div class="tp-floating-chat-message-meta">\n                    <span class="${d}">${yu(e.displayName)}</span>\n                    ${f}\n                </div>\n                <p class="tp-floating-chat-text">${yu(e.message)}</p>\n                ${v}\n            </div>\n        </div>\n    `;
      }(t)).join("");
      for (const n of t.messages) {
        if (n.isSystem || !n.onReportFlagClicked) {
          continue;
        }
        const t = document.getElementById(`tp-floating-report-${n.comment.commentId}`);
        if (t) {
          t.addEventListener("click", t => {
            var e;
            t.stopPropagation();
            if ((e = n.onReportFlagClicked) !== null && e !== undefined) {
              e.call(n);
            }
          });
        }
      }
      if (i || t.messages.length > s) {
        e.scrollTop = e.scrollHeight;
      }
    }
    function Cu(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const Fu = 120;
    const _u = "tp-floating-chat-input";
    const Eu = "tp-floating-chat-length";
    const xu = "tp-floating-chat-send";
    const ku = "tp-floating-chat-identity";
    const Au = "tp-floating-chat-error";
    const Iu = "tp-floating-flair-select";
    const Bu = "tp-floating-flair-trigger";
    const Su = "tp-floating-flair-menu";
    const ju = "tp-floating-flair-preview";
    let $u = null;
    function Tu() {
      if ($u !== null) {
        clearTimeout($u);
        $u = null;
      }
      const t = document.getElementById(Au);
      if (t) {
        t.hidden = true;
        t.textContent = "";
      }
    }
    function Pu(t) {
      const n = document.getElementById(Au);
      if (n) {
        if ($u !== null) {
          clearTimeout($u);
          $u = null;
        }
        n.textContent = t;
        n.hidden = false;
        $u = window.setTimeout(() => {
          Tu();
        }, 4000);
      }
    }
    const Mu = [{
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
    function Lu() {
      const t = document.getElementById(Iu);
      return (t == null ? undefined : t.getAttribute("data-flair")) || undefined;
    }
    function Ru(t) {
      const n = document.getElementById(Iu);
      if (!n) {
        return;
      }
      if (t) {
        n.setAttribute("data-flair", t);
      } else {
        n.removeAttribute("data-flair");
      }
      (function (t) {
        const n = document.getElementById(ju);
        if (n) {
          if (t) {
            const {
              staticSrc: e
            } = Kr(t);
            n.innerHTML = `<img src="${e}" alt="${t}" />`;
          } else {
            n.innerHTML = lu();
          }
        }
      })(t);
      const e = document.getElementById(Su);
      if (e) {
        e.querySelectorAll("[data-flair-option]").forEach(n => {
          const e = (n.getAttribute("data-flair-option") || "") === (t || "");
          n.setAttribute("aria-selected", e ? "true" : "false");
          n.classList.toggle("tp-floating-flair-option--selected", e);
        });
      }
    }
    function Ou() {
      const t = document.getElementById(Iu);
      const n = document.getElementById(Bu);
      const e = document.getElementById(Su);
      if (t != null) {
        t.classList.remove("tp-floating-flair-select--open");
      }
      if (n != null) {
        n.setAttribute("aria-expanded", "false");
      }
      if (e) {
        e.hidden = true;
      }
    }
    function Vu() {
      const t = document.getElementById(Su);
      if (t && !t.hidden) {
        Ou();
      } else {
        (function () {
          const t = document.getElementById(Iu);
          const n = document.getElementById(Bu);
          const e = document.getElementById(Su);
          if (t != null) {
            t.classList.add("tp-floating-flair-select--open");
          }
          if (n != null) {
            n.setAttribute("aria-expanded", "true");
          }
          if (e) {
            e.hidden = false;
          }
        })();
      }
    }
    function Uu() {
      const t = Mu.map(({
        reaction: t,
        label: n
      }) => `\n            <button\n                type="button"\n                class="tp-floating-flair-option"\n                role="option"\n                data-flair-option="${t ?? ""}"\n                aria-selected="${t ? "false" : "true"}"\n            >\n                <span class="tp-floating-flair-option-icon">${t ? `<img src="${Kr(t).staticSrc}" alt="${n}" />` : lu()}</span>\n                <span class="tp-floating-flair-option-label">${n}</span>\n            </button>\n        `).join("");
      return `\n        <div id="${Iu}" class="tp-floating-flair-select">\n            <button\n                type="button"\n                id="${Bu}"\n                class="tp-floating-flair-trigger"\n                aria-haspopup="listbox"\n                aria-expanded="false"\n                aria-label="Choose flair"\n                title="Flair"\n            >\n                <span id="${ju}" class="tp-floating-flair-preview">${lu()}</span>\n                ${cu("<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M6 9L12 15L18 9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>", n, e)}\n            </button>\n            <div id="${Su}" class="tp-floating-flair-menu" role="listbox" hidden>\n                ${t}\n            </div>\n        </div>\n    `;
      var n;
      var e;
    }
    let Hu = false;
    function Nu(t) {
      const n = document.getElementById(xu);
      const e = document.getElementById(_u);
      const i = document.querySelector(".tp-floating-chat-compose");
      const s = document.getElementById(Bu);
      if (n) {
        n.classList.toggle("tp-floating-chat-send--sending", t);
        if (t) {
          n.setAttribute("disabled", "true");
          n.setAttribute("aria-busy", "true");
          n.setAttribute("aria-label", "Sending comment");
        } else {
          n.removeAttribute("disabled");
          n.removeAttribute("aria-busy");
          n.setAttribute("aria-label", "Send comment");
        }
      }
      if (i) {
        i.classList.toggle("tp-floating-chat-compose--sending", t);
      }
      if (e) {
        e.disabled = t;
      }
      if (s) {
        s.disabled = t;
      }
    }
    function Gu(t, n, e, i) {
      return Cu(this, undefined, undefined, function* () {
        const s = yield Fi.I(new Qr(ii, ei));
        i.value = "";
        t.closeModal();
        yield function (t, n, e, i) {
          return Cu(this, undefined, undefined, function* () {
            let f;
            try {
              Nu(true);
              const D = {
                name: "allchat_message_sent",
                message: {
                  text: n
                },
                allchat_ui: "floating"
              };
              Fi.I(new hr(si, ei, D));
              const v = yield Fi.I(new Oa(si, ei));
              const g = {
                message: n,
                vidTime: yield t.getVidTime(),
                service: t.service,
                vidId: t.vidId,
                displayName: e,
                vidDuration: t.vidDuration,
                flair: Lu(),
                permId: v,
                extensionVersion: di
              };
              f = `pending-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
              Tu();
              t.onPostComment(Object.assign(Object.assign({}, g), {
                commentId: f
              }));
              t.onCommentEdited("");
              const m = document.getElementById(_u);
              if (m) {
                m.value = "";
              }
              zu(0);
              const w = yield ti("comments", "POST", true, g, i, undefined, true);
              if (t.onPostConfirmed) {
                t.onPostConfirmed(f, {
                  commentId: w.commentId,
                  vidTime: w.vidTime ?? g.vidTime,
                  message: w.message ?? g.message,
                  displayName: w.displayName ?? g.displayName,
                  vidDuration: w.vidDuration ?? g.vidDuration,
                  flair: w.flair ?? g.flair
                });
              } else {
                t.onPostComment({
                  commentId: w.commentId,
                  vidTime: w.vidTime ?? g.vidTime,
                  message: w.message ?? g.message,
                  displayName: w.displayName ?? g.displayName,
                  vidDuration: w.vidDuration ?? g.vidDuration,
                  flair: w.flair ?? g.flair
                });
              }
              Xr("allchat_message_accepted", "floating");
            } catch (n) {
              let e = "An error occurred";
              try {
                const t = JSON.parse(n.message);
                if (t.error) {
                  Xr("allchat_message_rejected", "floating");
                  e = t.error;
                } else {
                  Xr("allchat_message_errored", "floating");
                }
              } catch (t) {
                Xr("allchat_message_errored", "floating");
                console.error(`GOT ERROR ${n}`);
              }
              if (f && t.onPostRejected) {
                t.onPostRejected(f, e);
              } else if (!t.onPostRejected) {
                Pu(e);
              }
            } finally {
              Nu(false);
            }
          });
        }(t, n, e, s == null ? undefined : s.token);
      });
    }
    function zu(t) {
      const n = document.getElementById(Eu);
      if (n) {
        n.innerText = `${t}/120`;
      }
    }
    function Zu(t, n) {
      $a({
        variant: "floating",
        knownHandle: n,
        onEditClicked: () => {
          t.openChangeHandleModal(n => Zu(t, n));
        },
        onSetHandleClicked: () => {
          t.openSetHandleModal(n => Zu(t, n));
        }
      }, document.getElementById(ku));
    }
    function Qu(t) {
      return Cu(this, undefined, undefined, function* () {
        const {
          userData: n,
          handle: e
        } = yield qr();
        Xr("allchat_post_button_clicked");
        const i = document.getElementById(_u);
        if (!i) {
          return;
        }
        const s = i.value;
        if (!s || s.length > Fu) {
          Pu("Message must be between 1-120 characters");
        } else {
          if (!(n == null ? undefined : n.signedIn)) {
            const t = document.getElementById("tp-user-login-btn");
            if (t) {
              t.click();
            } else {
              window.open(`${o}/signup?ref=allchat`, "_blank", "noopener,noreferrer");
            }
            return;
          }
          if (e) {
            yield Gu(t, s, e, i);
          } else {
            t.openSetHandleModal(n => Cu(this, undefined, undefined, function* () {
              Zu(t, n);
              if (n) {
                yield Gu(t, s, n, i);
              }
            }));
          }
        }
      });
    }
    function Wu(t) {
      return `\n        <div class="tp-floating-chat-input-area">\n            <div id="${ku}" class="tp-floating-chat-identity"></div>\n            <div class="tp-floating-chat-input-row">\n                <div class="tp-floating-chat-compose">\n                    <input\n                        id="${_u}"\n                        type="text"\n                        class="tp-floating-chat-input"\n                        placeholder="Add your comment..."\n                        value="${t.curComment.replace(/"/g, "&quot;")}"\n                        maxlength="120"\n                    />\n                    ${Uu()}\n                    <span id="${Eu}" class="tp-floating-chat-length">${t.curComment.length}/120</span>\n                </div>\n                <button type="button" id="${xu}" class="tp-floating-chat-send" aria-label="Send comment">\n                    <span class="tp-floating-chat-send-icon">${cu("<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M4 12L20 4L13 20L11 13L4 12Z\" stroke=\"white\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/>\n        </svg>", n, e)}</span>\n                    <span class="tp-floating-chat-send-spinner" aria-hidden="true"></span>\n                </button>\n            </div>\n            <p id="${Au}" class="tp-floating-chat-error" role="alert" hidden></p>\n            <div class="tp-floating-chat-input-hints">\n                <a\n                    class="tp-floating-chat-feedback"\n                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJORvFwSNAYhsCLd94YLUOn5s7y_aGezl89slmbM6LZFPPvw/viewform?usp=publish-editor"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                >\n                    Leave Feedback\n                </a>\n                <button type="button" id="tp-floating-chat-guidelines-btn" class="tp-floating-chat-guidelines">\n                    ${function (t, n) {
        return cu("<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n            <path d=\"M12 3L5 6.5V12c0 4.5 2.9 7.6 7 8.8 4.1-1.2 7-4.3 7-8.8V6.5L12 3Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n        </svg>", t, n);
      }()}\n                    <span>Community Guidelines</span>\n                </button>\n            </div>\n        </div>\n    `;
      var n;
      var e;
    }
    function Yu(t) {
      Zu(t);
      (function () {
        const t = document.getElementById(Iu);
        const n = document.getElementById(Bu);
        const e = document.getElementById(Su);
        if (t && n && e) {
          n.addEventListener("click", t => {
            t.stopPropagation();
            Vu();
          });
          e.querySelectorAll("[data-flair-option]").forEach(t => {
            t.addEventListener("click", n => {
              n.stopPropagation();
              Ru(t.getAttribute("data-flair-option") || null);
              Ou();
            });
          });
          if (!Hu) {
            Hu = true;
            document.addEventListener("click", t => {
              const n = document.getElementById(Iu);
              if (!n || !n.contains(t.target)) {
                Ou();
              }
            }, true);
          }
        }
      })();
      const n = document.getElementById(_u);
      const e = document.getElementById(xu);
      const i = document.getElementById("tp-floating-chat-guidelines-btn");
      if (i) {
        i.addEventListener("click", n => {
          n.stopPropagation();
          t.openGuidelinesModal();
        });
      }
      if (n) {
        n.addEventListener("focus", n => {
          var e;
          n.stopPropagation();
          localStorage.setItem("allchat-has-focus", "true");
          if ((e = t.onInputFocusIntent) !== null && e !== undefined) {
            e.call(t);
          }
        });
        n.addEventListener("blur", () => {
          var e;
          if ((e = t.onInputBlurIntent) !== null && e !== undefined) {
            e.call(t);
          }
          window.setTimeout(() => {
            if (document.activeElement !== n) {
              localStorage.setItem("allchat-has-focus", "false");
            }
          }, 0);
        });
        n.addEventListener("click", t => t.stopPropagation());
        n.addEventListener("keydown", n => {
          n.stopPropagation();
          if (n.key === "Enter") {
            n.preventDefault();
            Qu(t);
          }
        });
        n.addEventListener("input", e => {
          let i = e.target.value;
          if (i.length > Fu) {
            i = i.substring(0, Fu);
            n.value = i;
          }
          Tu();
          t.onCommentEdited(i);
          zu(i.length);
        });
      }
      if (e) {
        e.addEventListener("click", n => {
          n.stopPropagation();
          Qu(t);
        });
      }
    }
    const Ju = "tp-floating-chat-panel";
    const Ku = "tp-floating-chat-close";
    const qu = "tp-floating-chat-help";
    const Xu = "tpFloatingChatPanelPos";
    const tc = 110;
    function nc(t, n, e, i) {
      const s = Math.max(8, window.innerWidth - e - 8);
      const o = Math.max(8, window.innerHeight - i - 8);
      return {
        left: Math.min(Math.max(8, t), s),
        top: Math.min(Math.max(8, n), o)
      };
    }
    function ec(t, n) {
      if (!t) {
        return;
      }
      const s = t.offsetWidth || 320;
      const o = t.offsetHeight || Math.round(window.innerHeight * 0.55);
      const r = nc((n == null ? undefined : n.left) ?? 27, (n == null ? undefined : n.top) ?? tc, s, o);
      t.style.left = `${r.left}px`;
      t.style.top = `${r.top}px`;
    }
    function ic(t, n) {
      let e = false;
      let i = 0;
      let s = 0;
      let o = 0;
      let r = 0;
      const a = t => {
        if (!e) {
          return;
        }
        t.preventDefault();
        t.stopPropagation();
        const a = n.offsetWidth || 320;
        const u = n.offsetHeight || 400;
        const c = nc(o + (t.clientX - i), r + (t.clientY - s), a, u);
        ec(n, c);
      };
      const u = i => {
        if (!e) {
          return;
        }
        e = false;
        t.classList.remove("tp-floating-chat-header--dragging");
        try {
          t.releasePointerCapture(i.pointerId);
        } catch (t) {}
        window.removeEventListener("pointermove", a, true);
        window.removeEventListener("pointerup", u, true);
        window.removeEventListener("pointercancel", u, true);
        const s = Number.parseFloat(n.style.left || String(27));
        const o = Number.parseFloat(n.style.top || String(tc));
        if (!Number.isNaN(s) && !Number.isNaN(o)) {
          (function (t) {
            try {
              localStorage.setItem(Xu, JSON.stringify(t));
            } catch (t) {}
          })({
            left: s,
            top: o
          });
        }
      };
      t.addEventListener("pointerdown", c => {
        const h = c.target;
        if (!(h == null ? undefined : h.closest("button, a, input, textarea"))) {
          c.preventDefault();
          c.stopPropagation();
          e = true;
          i = c.clientX;
          s = c.clientY;
          o = Number.parseFloat(n.style.left || String(n.offsetLeft || 27));
          r = Number.parseFloat(n.style.top || String(n.offsetTop || tc));
          if (Number.isNaN(o)) {
            o = 27;
          }
          if (Number.isNaN(r)) {
            r = tc;
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
    function sc(t, n) {
      if (!n) {
        return;
      }
      var e;
      var i;
      n.innerHTML = `\n        <div id="${Ju}" class="tp-floating-chat-panel">\n            <div class="tp-floating-chat-header">\n                <div class="tp-floating-chat-header-left">\n                    <span class="tp-floating-chat-logo" aria-hidden="true">${hu()}</span>\n                    <span class="tp-floating-chat-title">All Chat</span>\n                </div>\n                <div class="tp-floating-chat-header-actions">\n                    <button type="button" id="${qu}" class="tp-floating-chat-icon-btn" aria-label="All Chat help">\n                        ${cu("<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\"/>\n            <path d=\"M9.6 9.4c0-1.35 1.05-2.4 2.45-2.4 1.35 0 2.4 0.95 2.4 2.25 0 1.05-0.55 1.6-1.35 2.15-0.75 0.5-1.15 0.95-1.15 1.85\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <circle cx=\"12\" cy=\"17.1\" r=\"1.05\" fill=\"currentColor\"/>\n        </svg>", e, i)}\n                    </button>\n                    <button type="button" id="${Ku}" class="tp-floating-chat-icon-btn" aria-label="Close chat">\n                        ${function (t, n) {
        return cu("<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M7 7L17 17M7 17L17 7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        </svg>", t, n);
      }()}\n                    </button>\n                </div>\n            </div>\n            <div id="tp-floating-chat-body" class="tp-floating-chat-body">\n                <div id="${mu}" class="tp-floating-chat-message-list"></div>\n            </div>\n            ${Wu(t.inputProps)}\n        </div>\n    `;
      ec(n, function () {
        try {
          const t = localStorage.getItem(Xu);
          if (!t) {
            return null;
          }
          const n = JSON.parse(t);
          if (typeof n.left == "number" && typeof n.top == "number") {
            return {
              left: n.left,
              top: n.top
            };
          }
        } catch (t) {}
        return null;
      }());
      bu({
        messages: t.messages
      }, n);
      Yu(t.inputProps);
      const s = document.getElementById(Ku);
      const o = document.getElementById(qu);
      const r = n.querySelector(".tp-floating-chat-header");
      if (s) {
        s.addEventListener("click", n => {
          n.stopPropagation();
          t.onClose();
        });
      }
      if (o) {
        o.addEventListener("click", n => {
          n.stopPropagation();
          t.onHelpClicked();
        });
      }
      if (r) {
        ic(r, n);
      }
      const a = document.getElementById(Ju);
      if (a) {
        a.addEventListener("click", t => t.stopPropagation());
        a.addEventListener("keydown", t => t.stopPropagation());
      }
    }
    function oc(t) {
      if (t) {
        t.innerHTML = "";
      }
    }
    function rc(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const ac = "tpFloatingChatButtonSeen";
    const uc = "tpFloatingChatPanelOpen";
    function cc(t) {
      try {
        if (t) {
          sessionStorage.setItem(uc, "true");
        } else {
          sessionStorage.removeItem(uc);
        }
      } catch (t) {}
    }
    class hc {
      constructor(t) {
        this.deps = t;
        this.$e = false;
        this.Te = new Set();
        this.Pe = false;
        this.Me = "";
        this.Le = true;
        this.Re = false;
        this.Oe = new Map();
        this.Ve = false;
        this.Ue = [];
        this.He = false;
        this.Ne = null;
        this.Ge = false;
        this.ze = t => {
          if (!this.He || !this.$e) {
            return;
          }
          const n = this.deps.getPanelRoot();
          const e = t.target;
          if (!n || !e || !n.contains(e)) {
            this.Ze();
          }
        };
      }
      get isPanelOpen() {
        return this.$e;
      }
      get isMounted() {
        return this.Re;
      }
      get isComposeFocused() {
        return this.He;
      }
      noteComposeFocus() {
        if (this.Ne !== null) {
          clearTimeout(this.Ne);
          this.Ne = null;
        }
        this.He = true;
        this.Qe();
      }
      noteComposeBlur() {
        if (this.Ne !== null) {
          clearTimeout(this.Ne);
        }
        this.Ne = setTimeout(() => {
          this.Ne = null;
          const t = document.getElementById("tp-floating-chat-input");
          if (document.activeElement !== t) {
            this.He = false;
          } else {
            this.He = true;
          }
        }, 120);
      }
      render() {
        var t;
        var n;
        return rc(this, undefined, undefined, function* () {
          if (this.deps.isUserInParty()) {
            this.hideForParty();
            return;
          }
          this.Pe = false;
          this.Le = ((n = (t = this.deps).getControlsShowing) === null || n === undefined ? undefined : n.call(t)) ?? this.Le;
          this.We();
          const i = this.deps.getPanelRoot();
          const s = Boolean(i == null ? undefined : i.querySelector("#tp-floating-chat-panel"));
          if (!this.$e && (!!s || !!function () {
            try {
              return sessionStorage.getItem(uc) === "true";
            } catch (t) {
              return false;
            }
          }())) {
            this.$e = true;
          }
          this.Ye();
          this.Re = true;
          if (this.$e) {
            if (!s) {
              yield this.Je();
            }
            this.Ke();
          } else {
            oc(this.deps.getPanelRoot());
            this.qe();
          }
        });
      }
      setControlsShowing(t) {
        if (!this.Pe && this.Re) {
          this.Le = t;
          this.Ye();
          this.Xe();
        } else {
          this.Le = t;
        }
      }
      togglePanel() {
        if (this.$e) {
          this.closePanel();
        } else {
          this.openPanel();
        }
      }
      openPanel() {
        var t;
        var n;
        return rc(this, undefined, undefined, function* () {
          if (!this.deps.isUserInParty()) {
            localStorage.setItem(ac, "true");
            this.$e = true;
            cc(true);
            this.Ye();
            yield this.Je();
            this.Ke();
            if ((n = (t = this.deps).onPanelOpened) !== null && n !== undefined) {
              n.call(t);
            }
          }
        });
      }
      closePanel() {
        var t;
        var n;
        this.$e = false;
        cc(false);
        this.Ze();
        this.ti();
        this.Ve = false;
        oc(this.deps.getPanelRoot());
        this.qe();
        this.Ye();
        if ((n = (t = this.deps).onPanelClosed) !== null && n !== undefined) {
          n.call(t);
        }
      }
      hideForParty() {
        var t;
        var n;
        const e = this.$e;
        this.Pe = true;
        this.$e = false;
        cc(false);
        this.Re = false;
        this.Ze();
        this.ti();
        this.Ve = false;
        this.qe();
        oc(this.deps.getPanelRoot());
        const i = this.deps.getButtonRoot();
        if (i) {
          i.innerHTML = "";
        }
        if (e) {
          if ((n = (t = this.deps).onPanelClosed) !== null && n !== undefined) {
            n.call(t);
          }
        }
      }
      refreshMessages() {
        return rc(this, undefined, undefined, function* () {
          if (this.$e && !this.Pe) {
            yield this.ni();
          }
        });
      }
      noteOptimistic(t) {
        const n = this.Oe.get(t);
        if (!(n == null ? undefined : n.isRejected) && !(n == null ? undefined : n.isLeaving)) {
          this.Oe.set(t, {
            isPending: true
          });
        }
      }
      confirmPending(t) {
        this.Oe.delete(t);
      }
      rejectPendingMessage(t, n) {
        this.Ve = true;
        this.Oe.set(t, {
          isRejected: true,
          rejectionReason: n
        });
        this.ni();
        const e = setTimeout(() => {
          const n = this.Oe.get(t);
          if (!n) {
            this.Ve = false;
            return;
          }
          this.Oe.set(t, Object.assign(Object.assign({}, n), {
            isLeaving: true
          }));
          this.ni();
          const e = setTimeout(() => {
            this.deps.removeComment(t);
            this.Oe.delete(t);
            this.Ve = this.Oe.size > 0 && Array.from(this.Oe.values()).some(t => t.isRejected || t.isLeaving);
            this.ni();
          }, 450);
          this.Ue.push(e);
        }, 2000);
        this.Ue.push(e);
      }
      destroy() {
        var t;
        var n;
        const e = this.$e;
        this.qe();
        this.ti();
        this.Ve = false;
        this.Oe.clear();
        this.$e = false;
        cc(false);
        this.Re = false;
        this.Ze();
        oc(this.deps.getPanelRoot());
        const i = this.deps.getButtonRoot();
        if (i) {
          i.innerHTML = "";
        }
        if (e) {
          if ((n = (t = this.deps).onPanelClosed) !== null && n !== undefined) {
            n.call(t);
          }
        }
      }
      Ze() {
        if (this.Ne !== null) {
          clearTimeout(this.Ne);
          this.Ne = null;
        }
        this.He = false;
        this.ei();
        localStorage.setItem("allchat-has-focus", "false");
      }
      Xe() {
        if (this.$e && !this.Pe && this.He) {
          requestAnimationFrame(() => {
            if (!this.He || !this.$e) {
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
      Qe() {
        if (!this.Ge) {
          this.Ge = true;
          document.addEventListener("pointerdown", this.ze, true);
        }
      }
      ei() {
        if (this.Ge) {
          this.Ge = false;
          document.removeEventListener("pointerdown", this.ze, true);
        }
      }
      ti() {
        for (const t of this.Ue) {
          clearTimeout(t);
        }
        this.Ue = [];
      }
      We() {}
      ii() {
        return localStorage.getItem(ac) !== "true";
      }
      Ye() {
        gu({
          onClick: () => this.togglePanel(),
          showGradient: this.ii(),
          panelOpen: this.$e,
          controlsShowing: this.Le
        }, this.deps.getButtonRoot());
      }
      si(t) {
        return rc(this, undefined, undefined, function* () {
          return [{
            comment: wu,
            isSystem: true
          }, ...t.map(t => {
            const n = this.Oe.get(t.commentId);
            const e = Boolean((n == null ? undefined : n.isPending) || (n == null ? undefined : n.isRejected));
            return {
              comment: t,
              onReportFlagClicked: e ? undefined : () => this.deps.openReportMessageModal(t.commentId),
              isPending: n == null ? undefined : n.isPending,
              isRejected: n == null ? undefined : n.isRejected,
              rejectionReason: n == null ? undefined : n.rejectionReason,
              isLeaving: n == null ? undefined : n.isLeaving
            };
          })];
        });
      }
      Je() {
        return rc(this, undefined, undefined, function* () {
          const t = yield this.deps.getRevealedMessages();
          this.oi(t);
          const n = yield this.deps.getInputProps();
          n.curComment = this.Me;
          n.onCommentEdited = t => {
            this.Me = t;
          };
          n.onInputFocusIntent = () => this.noteComposeFocus();
          n.onInputBlurIntent = () => this.noteComposeBlur();
          sc({
            messages: yield this.si(t),
            inputProps: n,
            onClose: () => this.closePanel(),
            onHelpClicked: () => this.deps.openHelpModal()
          }, this.deps.getPanelRoot());
        });
      }
      ni() {
        return rc(this, undefined, undefined, function* () {
          const t = yield this.deps.getRevealedMessages();
          this.oi(t);
          (function (t, n) {
            bu({
              messages: t
            }, n);
          })(yield this.si(t), this.deps.getPanelRoot());
        });
      }
      oi(t) {
        var n;
        var e;
        for (const i of t) {
          if (!this.Te.has(i.commentId)) {
            this.Te.add(i.commentId);
            if ((e = (n = this.deps).onCommentViewed) !== null && e !== undefined) {
              e.call(n, i.commentId);
            }
          }
        }
        const i = new Set(t.map(t => t.commentId));
        for (const t of Array.from(this.Te)) {
          if (!i.has(t)) {
            this.Te.delete(t);
          }
        }
      }
      Ke() {
        this.ri ||= setInterval(() => {
          if (!this.Ve) {
            this.ni();
          }
        }, 1000);
      }
      qe() {
        if (this.ri) {
          clearInterval(this.ri);
          this.ri = undefined;
        }
      }
    }
    function lc(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class dc {
      constructor(t, n, e, i, s = () => false) {
        this.ALLCHAT_OPTIONS_ROOT_ID = "tp-allchat-options-root";
        this.ALLCHAT_CHATBOX_ROOT_ID = "tp-allchat-chatbox-root";
        this.ALLCHAT_LIVECHAT_ROOT_ID = "tp-allchat-livechat-root";
        this.ALLCHAT_MODAL_ROOT_ID = "tp-allchat-modal-root";
        this.FLOATING_CHAT_BUTTON_ROOT_ID = "tp-floating-chat-button-root";
        this.FLOATING_CHAT_PANEL_ROOT_ID = "tp-floating-chat-panel-root";
        this.ai = localStorage.getItem("tpLiveChatShowing") === "true";
        this.ui = false;
        this.ci = false;
        this.hi = "";
        this.li = true;
        this.di = "";
        this.pi = null;
        this.fi = false;
        this.Di = false;
        this.gi = false;
        this.mi = 0;
        this.wi = false;
        this.yi = false;
        this.bi = () => {
          this.Ci();
          this.injectAllChat();
        };
        this.Ci = () => {
          for (const t of [this.ALLCHAT_CHATBOX_ROOT_ID, this.ALLCHAT_LIVECHAT_ROOT_ID, this.ALLCHAT_OPTIONS_ROOT_ID, this.FLOATING_CHAT_BUTTON_ROOT_ID, this.FLOATING_CHAT_PANEL_ROOT_ID, this.ALLCHAT_MODAL_ROOT_ID]) {
            const n = document.getElementById(t);
            if (n) {
              n.remove();
            }
          }
        };
        this.Fi = () => {
          var t;
          if ((t = this._i) !== null && t !== undefined) {
            t.destroy();
          }
          this.Ei();
          this.xi();
          this.ki();
          this.Ai();
          this.Ci();
          this.Ii = undefined;
          this.hi = "";
          this.pi = null;
        };
        this.Bi = () => {
          if (this.Si()) {
            this.ji();
            this.$i();
            this.injectAllChat();
          } else {
            this.Fi();
          }
        };
        this.Ti = t => {
          if (t) {
            this.Pi();
          } else {
            this.Mi();
          }
        };
        this.Li = () => {
          const t = document.head || document.getElementsByTagName("head")[0];
          const n = document.createElement("link");
          n.rel = "stylesheet";
          n.href = chrome.runtime.getURL("css/all-chat.css");
          t.appendChild(n);
          const e = document.createElement("link");
          e.rel = "stylesheet";
          e.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
          t.appendChild(e);
        };
        this.Ri = () => {
          if (this.yi) {
            return;
          }
          const t = document.head || document.getElementsByTagName("head")[0];
          const n = document.createElement("link");
          n.rel = "stylesheet";
          n.href = chrome.runtime.getURL("css/floating-chat.css");
          t.appendChild(n);
          this.yi = true;
        };
        this.Ai = () => {
          if (this.mi != 0) {
            const t = Date.now() - this.mi;
            Fi.I(new hr(si, ei, {
              name: "allchat_time_spent",
              allchat_usage: {
                time_spend: t
              }
            }));
            this.mi = 0;
          }
        };
        this.ki = () => {
          const t = this.Oi();
          if (t) {
            t.innerHTML = "";
          }
          this.pi = null;
        };
        this.Vi = t => {
          this.Ui = t;
          this.pi = "report";
          new Du({
            commentId: t,
            closeModal: this.ki,
            removeMessage: this.Hi
          }).open(this.Oi());
        };
        this.Ni = () => {
          this.pi = null;
          this.xi();
          Fi.I(new Mr(si, ei, true));
        };
        this.ji = () => lc(this, undefined, undefined, function* () {
          if (this.Si()) {
            try {
              const t = (yield this.W.getVideoDataAsync()).videoId;
              const n = this.W.getStreamingServiceName();
              if (!t || !n) {
                console.error("Failed to get video info, live chat not loading");
              }
              const e = yield ti(`comments?univKey=${n}%23${t}`, "GET", false);
              this.Ii = e.comments.sort((t, n) => t.vidTime - n.vidTime);
              console.log(this.Ii);
            } catch (t) {
              console.error(t);
            }
          }
        });
        this.Hi = t => {
          this.Ii &&= this.Ii.filter(n => n.commentId !== t);
          if (this.Gi() && this._i?.isPanelOpen) {
            this._i.refreshMessages();
          }
        };
        this.zi = (t = 5000) => lc(this, undefined, undefined, function* () {
          if (!this.Ii || this.Ii.length === 0) {
            return null;
          }
          const n = (yield this.W.getStateAsync()).playbackPositionMilliseconds;
          let e = null;
          let i = Infinity;
          for (const s of this.Ii) {
            const o = n - s.vidTime;
            if (o >= 0 && o < i && o <= t) {
              e = s;
              i = o;
            }
            if (s.vidTime > n) {
              break;
            }
          }
          return e;
        });
        this.Zi = () => lc(this, undefined, undefined, function* () {
          if (!this.Ii || this.Ii.length === 0) {
            return [];
          }
          const t = (yield this.W.getStateAsync()).playbackPositionMilliseconds;
          const n = [];
          for (const e of this.Ii) {
            if (!(e.vidTime <= t)) {
              break;
            }
            n.push(e);
          }
          return n;
        });
        this.Qi = t => {
          if (t !== this.Wi) {
            this.Wi = t;
            if (this.fi) {
              Fi.I(new hr(si, ei, {
                name: "allchat_comment_viewed",
                action: {
                  description: t
                },
                allchat_ui: this.Gi() ? "floating" : "legacy"
              }));
            }
          }
        };
        this.Yi = () => {
          this.pi = "guidelines";
          new uu({
            closeModal: this.ki,
            viewOnly: true
          }).open(this.Oi());
        };
        this.Ji = () => {
          this.pi = "floatingHelp";
          new du({
            closeModal: this.ki
          }).open(this.Oi());
        };
        this.Ki = () => {
          this.pi = "help";
          new ou({
            closeModal: this.ki,
            toggleLiveChat: this.qi,
            getLiveChatShowing: () => this.ai
          }).open(this.Oi());
        };
        this.Xi = t => {
          this.pi = "changeHandle";
          this.ts = {
            closeModal: this.ki,
            onHandleChanged: t,
            onEditAvatarClicked: () => this.ns(t),
            onLoadErrorDismiss: this.Ni
          };
          new qa(this.ts).open(this.Oi());
        };
        this.es = t => {
          this.pi = "setHandle";
          this.ss = {
            closeModal: this.ki,
            onHandleSet: t,
            onLoadErrorDismiss: this.Ni
          };
          new su(this.ss).open(this.Oi());
        };
        this.ns = t => {
          this.pi = "editProfilePicture";
          this.rs = {
            closeModal: () => {
              this.Xi(t);
            },
            onProfilePictureChanged: () => {
              t();
            },
            onLoadErrorDismiss: this.Ni
          };
          new nu(this.rs).open(this.Oi());
        };
        this.us = t => {
          var n;
          var e;
          if (this.Gi()) {
            if (typeof t.commentId == "string" && t.commentId.startsWith("pending-")) {
              this.cs(t);
              if ((n = this._i) !== null && n !== undefined) {
                n.noteOptimistic(t.commentId);
              }
              if ((e = this._i) !== null && e !== undefined) {
                e.refreshMessages();
              }
              return;
            } else {
              (() => {
                lc(this, undefined, undefined, function* () {
                  var n;
                  try {
                    const n = (yield this.W.getStateAsync()).playbackPositionMilliseconds;
                    if (typeof t.vidTime == "number" && t.vidTime > n) {
                      t.vidTime = n;
                    }
                  } catch (t) {}
                  this.cs(t);
                  if ((n = this._i) !== null && n !== undefined) {
                    n.refreshMessages();
                  }
                });
              })();
              return;
            }
          }
          this.cs(t);
          if (this.ai) {
            this.hs();
          }
        };
        this.ls = (t, n) => {
          (() => {
            lc(this, undefined, undefined, function* () {
              var e;
              var i;
              try {
                const t = (yield this.W.getStateAsync()).playbackPositionMilliseconds;
                if (typeof n.vidTime == "number" && n.vidTime > t) {
                  n.vidTime = t;
                }
              } catch (t) {}
              this.Ii &&= this.Ii.filter(n => n.commentId !== t);
              this.cs(n);
              if ((e = this._i) !== null && e !== undefined) {
                e.confirmPending(t);
              }
              if ((i = this._i) !== null && i !== undefined) {
                i.refreshMessages();
              }
            });
          })();
        };
        this.hs = () => lc(this, undefined, undefined, function* () {
          const t = yield this.ds();
          if (t.message) {
            (function (t, n) {
              if (n) {
                n.innerHTML = pu(t);
                const e = document.getElementById("tp-allchat-report-flag");
                const i = document.getElementById("tp-allchat-comment-help");
                if (e) {
                  e.addEventListener("click", n => {
                    n.stopPropagation();
                    t.onReportFlagClicked();
                  });
                }
                if (i) {
                  i.addEventListener("click", n => {
                    n.stopPropagation();
                    t.openHelpModal();
                  });
                }
              }
            })(t, this.ps());
            if (t.commentId != this.Wi) {
              this.Qi(t.commentId);
            }
          } else {
            const t = this.ps();
            if (t) {
              t.innerHTML = "";
            }
          }
        });
        this.fs = () => lc(this, undefined, undefined, function* () {
          yield this.$i();
          this.hs();
          this.Ds ||= setInterval(this.hs, 1000);
        });
        this.Ei = () => {
          const t = this.ps();
          if (t) {
            t.innerHTML = "";
          }
          if (this.Ds) {
            clearInterval(this.Ds);
            this.Ds = undefined;
          }
        };
        this.di = window.location.href;
        this.Y = t;
        this.W = n;
        this.Z = e;
        this.serviceName = i;
        this.vs = s;
        this.gi = s();
        if (this.gi) {
          this.ai = false;
        }
        this.xi = this.xi.bind(this);
        this.gs = this.gs.bind(this);
        this.ws = this.ws.bind(this);
        this.ys = this.ys.bind(this);
        this.ds = this.ds.bind(this);
        this.bs = this.bs.bind(this);
        this.Cs = this.Cs.bind(this);
        this.ps = this.ps.bind(this);
        this.Oi = this.Oi.bind(this);
        this.qi = this.qi.bind(this);
        this.Mi = this.Mi.bind(this);
        this.Pi = this.Pi.bind(this);
        this.Fs = this.Fs.bind(this);
        this.Y.registerMenuStateChangeCallback(this.Ti);
        this.Fs();
        this.ji();
        this.$i();
        if (this.ai) {
          this.mi = Date.now();
        }
        window.addEventListener("pagehide", () => this.Ai());
        window.addEventListener("pageshow", () => {
          if (this.ai && this.mi === 0) {
            this.mi = Date.now();
          }
        });
      }
      Si() {
        return true;
      }
      Gi() {
        return this.wi;
      }
      _s() {
        return Boolean(this._i?.isComposeFocused);
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
      Oi() {
        return document.getElementById(this.ALLCHAT_MODAL_ROOT_ID);
      }
      Es() {
        return document.getElementById(this.FLOATING_CHAT_BUTTON_ROOT_ID);
      }
      xs() {
        return document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID);
      }
      Pi() {
        var t;
        if (this.Gi()) {
          if ((t = this._i) !== null && t !== undefined) {
            t.setControlsShowing(true);
          }
        } else {
          this.bi();
        }
      }
      Mi() {
        var t;
        if (this.Gi()) {
          if ((t = this._i) !== null && t !== undefined) {
            t.setControlsShowing(false);
          }
        } else {
          this.bi();
        }
      }
      qi() {
        const t = !this.ai;
        this.ks(t, true);
        Fi.I(new hr(si, ei, {
          name: t ? "allchat_toggled_on" : "allchat_toggled_off"
        }));
      }
      gs() {
        this.ui = true;
        (() => {
          lc(this, undefined, undefined, function* () {
            Wa(yield this.ws(), this.Cs());
            if (this.li) {
              yield this.W.pause();
            }
          });
        })();
      }
      xi() {
        this.ui = false;
        this.hi = "";
        const t = this.Cs();
        if (t) {
          t.innerHTML = "";
        }
      }
      ys() {
        return {
          toggleLiveChat: this.qi,
          showCreatePost: this.gs,
          liveChatShowing: this.ai
        };
      }
      $i() {
        return lc(this, undefined, undefined, function* () {
          yield Promise.all([this.As(), this.Is()]);
        });
      }
      As() {
        return lc(this, undefined, undefined, function* () {
          this.fi = yield Gr(Ur);
        });
      }
      Is() {
        return lc(this, undefined, undefined, function* () {
          if (localStorage.getItem("tpForceLegacyChat") === "true") {
            this.wi = false;
            return;
          }
          if (localStorage.getItem("tpForceFloatingChat") === "true") {
            this.wi = true;
            return;
          }
          const t = yield Fi.I(new Tr(si, ei, "allchat-floating-chat"));
          this.wi = Boolean(t == null ? undefined : t.hasFeature);
        });
      }
      Bs() {
        this._i ||= new hc({
          getButtonRoot: () => this.Es(),
          getPanelRoot: () => this.xs(),
          getRevealedMessages: () => this.Zi(),
          getInputProps: () => this.Ss(),
          openHelpModal: this.Ji,
          openReportMessageModal: this.Vi,
          onCommentViewed: t => this.Qi(t),
          isUserInParty: () => this.vs(),
          getControlsShowing: () => this.Y.shouldMenuBeVisible(),
          removeComment: t => {
            this.Ii &&= this.Ii.filter(n => n.commentId !== t);
          },
          onPanelOpened: () => {
            this.mi = Date.now();
          },
          onPanelClosed: () => {
            this.Ai();
          }
        });
        return this._i;
      }
      ds() {
        return lc(this, undefined, undefined, function* () {
          const t = yield this.zi();
          if (t) {
            return {
              message: t.message,
              username: t.displayName,
              commentId: t.commentId,
              onReportFlagClicked: () => this.Vi(t.commentId),
              openHelpModal: this.Ki,
              flair: t.flair
            };
          } else {
            return {};
          }
        });
      }
      cs(t) {
        if (this.Ii) {
          let n = false;
          for (let e = 0; e < this.Ii.length; e++) {
            if (this.Ii[e].vidTime >= t.vidTime) {
              if (this.Ii[e].vidTime === t.vidTime) {
                this.Ii[e].vidTime -= 0.0001;
              }
              this.Ii.splice(e, 0, t);
              n = true;
              break;
            }
          }
          if (!n) {
            this.Ii.push(t);
          }
        } else {
          this.Ii = [t];
        }
      }
      Ss() {
        return lc(this, undefined, undefined, function* () {
          const t = yield this.W.getVideoDataAsync();
          const n = this.W.getStreamingServiceName();
          return {
            curComment: this.hi,
            onCommentEdited: t => {
              this.hi = t;
            },
            onPostComment: this.us,
            onPostConfirmed: (t, n) => {
              this.ls(t, n);
            },
            onPostRejected: (t, n) => {
              var e;
              if ((e = this._i) !== null && e !== undefined) {
                e.rejectPendingMessage(t, n);
              }
            },
            getVidTime: () => lc(this, undefined, undefined, function* () {
              return (yield this.W.getStateAsync()).playbackPositionMilliseconds;
            }),
            service: n.toString(),
            vidId: t.videoId,
            vidDuration: t.videoDuration,
            openChangeHandleModal: this.Xi,
            openSetHandleModal: this.es,
            openGuidelinesModal: this.Yi,
            closeModal: this.ki
          };
        });
      }
      ws() {
        return lc(this, undefined, undefined, function* () {
          const t = yield this.W.getVideoDataAsync();
          const n = this.W.getStreamingServiceName();
          const e = (yield this.W.getStateAsync()).playbackState === $o.PLAYING;
          return {
            onPostComment: this.us,
            closeModal: this.ki,
            videoControlProps: {
              pauseVideo: this.W.pause,
              playVideo: this.W.play,
              isVideoPlaying: () => lc(this, undefined, undefined, function* () {
                return (yield this.W.getStateAsync()).playbackState === $o.PLAYING;
              }),
              shouldRender: true
            },
            curComment: this.hi,
            onCommentEdited: t => {
              this.hi = t;
            },
            closeChatbox: this.xi,
            getVidTime: () => lc(this, undefined, undefined, function* () {
              return (yield this.W.getStateAsync()).playbackPositionMilliseconds;
            }),
            service: n.toString(),
            vidId: t.videoId,
            vidDuration: t.videoDuration,
            openHelpModal: this.Ki,
            shouldPlayVideoAfterClose: e,
            openChangeHandleModal: this.Xi,
            openSetHandleModal: this.es
          };
        });
      }
      Fs() {
        this.js = setInterval(() => {
          this.$s();
          if (window.location.href != this.di) {
            this.di = window.location.href;
            this.Bi();
          } else if (!this.Si()) {
            if (document.getElementById(this.FLOATING_CHAT_BUTTON_ROOT_ID) || document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID) || document.getElementById(this.ALLCHAT_OPTIONS_ROOT_ID) || document.getElementById(this.ALLCHAT_LIVECHAT_ROOT_ID)) {
              this.Fi();
            }
          }
        }, 100);
      }
      $s() {
        var t;
        const n = this.vs();
        if (n !== this.gi) {
          this.gi = n;
          if (this.Gi()) {
            if (n) {
              if ((t = this._i) !== null && t !== undefined) {
                t.hideForParty();
              }
              this.Ai();
            } else {
              this.injectAllChat().then(() => {
                if (this._i?.isPanelOpen) {
                  this.mi = Date.now();
                }
              });
            }
          } else if (n) {
            this.ks(false, false);
          } else {
            this.ks(localStorage.getItem("tpLiveChatShowing") === "true", false);
          }
        }
      }
      ks(t, n) {
        if (this.ai !== t) {
          this.ai = t;
          if (n) {
            localStorage.setItem("tpLiveChatShowing", this.ai.toString());
          }
          ua(this.ys(), this.bs());
          if (this.ai) {
            this.fs();
            this.mi = Date.now();
          } else {
            this.Ei();
            this.Ai();
            this.xi();
          }
        }
      }
      Ts() {
        if (this.pi == "help") {
          this.Ki();
        } else if (this.pi == "floatingHelp") {
          this.Ji();
        } else if (this.pi == "guidelines") {
          this.Yi();
        } else if (this.pi == "report" && this.Ui) {
          this.Vi(this.Ui);
        } else if (this.pi == "changeHandle" && this.ts) {
          this.Xi(this.ts.onHandleChanged);
        } else if (this.pi == "setHandle" && this.ss) {
          this.es(this.ss.onHandleSet);
        } else if (this.pi == "editProfilePicture" && this.rs) {
          new nu(this.rs).open(this.Oi());
        }
      }
      injectAllChat() {
        return lc(this, undefined, undefined, function* () {
          yield this.$i();
          const t = this.Y.shouldMenuBeVisible();
          if (yield this.Ps(t)) {
            if (!this.ci) {
              this.Li();
              this.ci = true;
            }
            if (this.Gi()) {
              this.Ri();
              this.Ei();
              this.ui = false;
              yield this.Ms(t);
              yield this.Bs().render();
              if (localStorage.getItem("allChatHelpModalSeen") !== "true") {
                this.Ji();
                localStorage.setItem("allChatHelpModalSeen", "true");
              }
              this.Ts();
              return;
            }
            yield this.Ms(t);
            ua(this.ys(), this.bs());
            if (this.ai) {
              this.fs();
            }
            if (this.ui) {
              Wa(yield this.ws(), this.Cs());
            }
            if (localStorage.getItem("allChatHelpModalSeen") !== "true") {
              this.Ki();
              localStorage.setItem("allChatHelpModalSeen", "true");
            }
            this.Ts();
            ua(this.ys(), this.bs());
            if (this.ai) {
              this.fs();
            }
          } else if (!this.Di) {
            this.Di = true;
            Fi.I(new hr(si, ei, {
              name: "allchat_page_invalid",
              message: {
                text: `{"serviceName": "${this.serviceName}", "url": "${window.location.href}"}`
              }
            }));
          }
        });
      }
    }
    function pc(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const fc = {
      [Ni.NETFLIX.toString()]: class extends dc {
        constructor() {
          super(...arguments);
          this.Ls = false;
          this.Ms = t => pc(this, undefined, undefined, function* () {
            if (this.Gi()) {
              const n = document.querySelector(".watch-video") || document.querySelector("[data-uia=player]");
              const e = document.body;
              if (!document.getElementById(this.FLOATING_CHAT_BUTTON_ROOT_ID)) {
                Jr(this.FLOATING_CHAT_BUTTON_ROOT_ID, e, "", false);
              }
              if (!document.getElementById(this.FLOATING_CHAT_PANEL_ROOT_ID)) {
                Jr(this.FLOATING_CHAT_PANEL_ROOT_ID, e, "", false);
              }
              if (!document.getElementById(this.ALLCHAT_MODAL_ROOT_ID)) {
                Jr(this.ALLCHAT_MODAL_ROOT_ID, n, "", false);
              }
              this.Ls = t;
              return;
            }
            const n = document.querySelector(".watch-video") || document.querySelector("[data-uia=player]");
            Jr(this.ALLCHAT_MODAL_ROOT_ID, n);
            if (t) {
              this.Ls = true;
              yield We(20)();
              const t = document.querySelector(".watch-video--flag-container");
              const n = document.querySelector(".watch-video--bottom-controls-container");
              if (n) {
                if (this.ui) {
                  n.style.display = "none";
                }
                Jr(this.ALLCHAT_CHATBOX_ROOT_ID, n.parentElement, "display: flex");
              }
              Jr(this.ALLCHAT_OPTIONS_ROOT_ID, t);
              const e = document.querySelector(".watch-video--back-container");
              if (e) {
                e.setAttribute("style", e.getAttribute("style") + " flex-direction: column;");
                Jr(this.ALLCHAT_LIVECHAT_ROOT_ID, e);
              }
            } else {
              this.Ls = false;
              const t = document.querySelector("[data-uia=player]");
              Jr(this.ALLCHAT_LIVECHAT_ROOT_ID, t, "padding: 20px;");
              Jr(this.ALLCHAT_CHATBOX_ROOT_ID, t, "position: fixed; bottom: 0; left: 0; width: 100%");
            }
          });
          this.Rs = t => {
            const n = t.getBoundingClientRect();
            return {
              x: Math.random() * n.width + n.left,
              y: Math.random() * n.height + n.top
            };
          };
          this.Os = t => {
            const {
              x: n,
              y: e
            } = this.Rs(t);
            const i = new PointerEvent("pointermove", {
              bubbles: true,
              cancelable: true,
              clientX: n,
              clientY: e,
              pointerType: "mouse",
              view: window
            });
            t.dispatchEvent(i);
          };
        }
        Si() {
          return Ze(new URL(window.location.href));
        }
        Ps(t) {
          return pc(this, undefined, undefined, function* () {
            if (!this.Si()) {
              return false;
            }
            if (this.Gi()) {
              const n = ["[data-uia=player]"];
              if (t) {
                n.push(".watch-video");
              }
              return n.every(t => document.querySelector(t) !== null);
            }
            return (t ? ["[data-uia=player]", ".watch-video--flag-container", ".watch-video--bottom-controls-container", ".watch-video--back-container", ".watch-video"] : ["[data-uia=player]"]).every(t => document.querySelector(t) !== null);
          });
        }
        Vs(t) {
          const n = document.querySelector(".watch-video--bottom-controls-container");
          if (n) {
            n.style.display = t;
          }
        }
        gs() {
          this.Vs("none");
          super.gs();
        }
        xi() {
          this.Vs("block");
          super.xi();
        }
        qi() {
          this.Vs("block");
          super.qi();
        }
        ws() {
          const t = Object.create(null, {
            ws: {
              get: () => super.ws
            }
          });
          return pc(this, undefined, undefined, function* () {
            const n = yield t.ws.call(this);
            const e = document.querySelector("video");
            if (e) {
              n.videoControlProps.pauseVideo = () => pc(this, undefined, undefined, function* () {
                e.pause();
              });
              n.videoControlProps.playVideo = () => pc(this, undefined, undefined, function* () {
                e.play();
              });
            }
            return n;
          });
        }
        ys() {
          return Object.assign(Object.assign({}, super.ys()), {
            containerStyling: "margin-left: 8px; top: 5px;"
          });
        }
        Us() {
          if (this.Gi()) {
            return this.pi != null || this._s();
          } else {
            return this.pi != null || this.ui;
          }
        }
        Fs() {
          super.Fs();
          this.Hs = setInterval(() => {
            if (!this.Us()) {
              return;
            }
            if (this.Gi() && this._s() || this.Ls) {
              const t = document.querySelector("[data-uia=player]");
              if (t) {
                this.Os(t);
              }
            }
          }, 500);
        }
      }
    };
    const Dc = new Set(["account", "browse", "continue", "episodes", "home", "login", "menu", "more", "movies", "my list", "next", "pause", "play", "profile", "search", "settings", "share", "sign in", "sign up", "skip intro", "watch now"]);
    function vc(t) {
      if (t) {
        return t.replace(/\s+/g, " ").replace(/\s+[-|:]\s+teleparty$/i, "").trim();
      } else {
        return "";
      }
    }
    function gc(t) {
      const n = vc(t);
      if (n.length < 2 || n.length > 160) {
        return false;
      }
      const e = n.toLowerCase();
      if (Dc.has(e)) {
        return false;
      }
      if (/^(sign|log)\s?in$/i.test(n) || /^episode\s+\d+$/i.test(n)) {
        return false;
      }
      const i = n.split(" ");
      const s = n.replace(/[^a-z0-9]/gi, "");
      return i.length <= 18 && s.length >= 2;
    }
    function mc(t, n, e, i) {
      if (n) {
        return `${t ?? ""}|${n}`;
      }
      let s = i;
      try {
        const t = new URL(i);
        s = `${t.origin}${t.pathname}`;
      } catch (t) {}
      return `${t ?? ""}|${o = e, vc(o).toLowerCase()}|${s}`;
      var o;
    }
    function wc(t, n, e) {
      var s;
      const r = t.content ?? {};
      const a = (n == null ? undefined : n.title) || vc(e.fallbackTitle) || vc(r.name);
      const u = {
        id: r.id || t.videoId || "",
        url: r.url || e.fallbackUrl,
        name: a.toLowerCase(),
        service: t.service || r.service || "",
        type: r.type || t.type || t.videoType || "",
        episode_name: ((s = r.episode_name) === null || s === undefined ? undefined : s.toLowerCase()) ?? ""
      };
      const c = yc(r.season);
      if (c !== undefined) {
        u.season = c;
      }
      const h = yc(r.episode);
      if (h !== undefined) {
        u.episode = h;
      }
      return u;
    }
    function yc(t) {
      if (t !== undefined && Number.isInteger(t) && t > 0) {
        return t;
      }
    }
    function bc(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Cc {
      constructor(t, n, e, i, s = false, o = "") {
        this.Ns = [];
        this.Gs = false;
        this.zs = new Set();
        this.Zs = (t, n) => {
          try {
            this.Qs.push({
              level: t,
              message: n.map(t => {
                try {
                  if (typeof t == "object") {
                    return JSON.stringify(t);
                  } else {
                    return String(t);
                  }
                } catch (n) {
                  return String(t);
                }
              }).join(" ")
            });
          } catch (t) {}
        };
        this.Z = t;
        this.W = n;
        this.Gt = e;
        this.Y = i;
        if (window.teleparty && !window.teleparty.pageControls) {
          window.teleparty.pageControls = i;
          console.log("Setting Page COntrols");
        } else {
          i.setChatApi(this.Z);
          console.log("Resetting Chat Api for old controls");
        }
        this.Ws = new Mo(this.Z, this.W, this.Y);
        this.Ys = this.createVideoMessageForwarder(this.W, this.Z, this.Gt);
        this.Js = false;
        this.Ks = false;
        this.qs = false;
        this.S = new Si();
        this.S.addMessageListener(this.Ys);
        this.S.addMessageListener(this.Ws);
        this.S.addMessageListener(this);
        this.Xs = false;
        this.serviceName = o;
        this.Qs = [];
        if (s) {
          this.no = function (t, n, e, i, s) {
            if (t) {
              return new fc[t](n, e, i, t, s);
            } else {
              return undefined;
            }
          }(this.serviceName, this.Y, this.W, this.Z, () => this.Ys.isInParty() || this.Z.inSession);
        }
        this.eo();
        this.io();
        this.so();
        this.oo();
      }
      createVideoMessageForwarder(t, n, e) {
        return new Sr(t, n, e, this);
      }
      oo() {
        let e = 0;
        const i = window.teleparty?.tabId ?? 0;
        const s = () => bc(this, undefined, undefined, function* () {
          if (!this.Ys.isInParty() && !this.Z.inSession && !this.Ks && !(e >= 5)) {
            e++;
            try {
              Fi.I(new vr(si, ei, {
                tabId: i,
                persist: true
              }));
              const t = yield this.ro();
              yield Fi.I(t);
            } catch (t) {
              bi("Session restore retry skipped until video metadata is ready", t);
            }
            if (!this.Ys.isInParty() && !this.Z.inSession && e < 5) {
              setTimeout(s, 3000);
            }
          }
        });
        setTimeout(s, 2000);
      }
      so() {
        this.Ns = [];
        document.addEventListener("click", t => {
          if (t.target) {
            this.ao = {
              interactionType: "click",
              element: t.target
            };
          }
        });
        document.addEventListener("keydown", t => {
          this.ao = {
            interactionType: "keydown",
            keyPressed: t.key
          };
        });
      }
      logInteraction(t, n = false) {
        if (n) {
          this.Ns.push({
            interactionType: "websocketMessageReceived",
            videoAction: t
          });
        } else if (this.ao) {
          this.Ns.push(Object.assign(Object.assign({}, this.ao), {
            videoAction: t
          }));
          this.ao = undefined;
        }
      }
      io() {
        const t = console.log.bind(console);
        const n = console.warn.bind(console);
        const e = console.error.bind(console);
        console.log = (...n) => {
          this.Zs("log", n);
          t(...n);
        };
        console.warn = (...t) => {
          this.Zs("warn", t);
          n(...t);
        };
        console.error = (...t) => {
          this.Zs("error", t);
          e(...t);
        };
      }
      uo() {
        return bc(this, undefined, undefined, function* () {
          yield this.Y.addTpIcon();
          this.Y.startEventListener();
        });
      }
      loadBrowseButton() {
        return bc(this, undefined, undefined, function* () {
          yield this.Y.addTpIcon();
          this.Y.startEventListener();
        });
      }
      eo() {
        const t = chrome.runtime.connect({
          name: "content-script-health"
        });
        t.onDisconnect.addListener(() => {
          if (this.Ys.isInParty()) {
            console.log("Lost background script. Teardown");
            const t = {
              showAlert: this.Z.inSession,
              alertModal: tr
            };
            this.co(t);
          }
        });
        t.onMessage.addListener(() => {
          bi("Got background script");
          this.Xs = true;
        });
        const n = () => {
          console.log("Requesting ping");
          t.postMessage({
            type: "ping"
          });
        };
        const e = setInterval(() => {
          if (this.Xs) {
            clearInterval(e);
          } else {
            n();
          }
        }, 3000);
        n();
      }
      onMessage(t, n, e) {
        if (t.target == si) {
          if (t.type === ri.IS_CONTENT_SCRIPT_READY) {
            if (this.Js) {
              this.ho();
              e({
                ready: true
              });
            } else {
              this.Ks = true;
              this.lo().then(e);
            }
            return true;
          }
          if (t.type === ri.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE) {
            this.W.getCustomStartPartyButtonMessage().then(t => e(t));
            return true;
          }
          if (t.type === ri.IS_VIDEO_READY) {
            console.log("Checking if video is ready", !!this.W.getVideoElement());
            e({
              hasVideo: !!this.W.getVideoElement()
            });
            return true;
          }
          if (t.type === ri.GET_INIT_DATA) {
            const t = this.do();
            e(t);
            return true;
          }
          if (t.type === ri.DISCONNECT && t.sender == ii) {
            const t = new ir(si, ei, jr);
            Fi.I(t);
            e();
          } else {
            if (t.type == ki.TEARDOWN) {
              const n = t;
              this.co(n.data);
              e();
              return true;
            }
            if (t.type === ki.ON_NOTIF) {
              this.po();
            } else if (t.type === ki.GET_ALLCHAT_HAS_FOCUS) {
              e(localStorage.getItem("allchat-has-focus") === "true");
            } else if (t.type === ki.GET_VALIDATIONS_FAILURE_INFO) {
              let n;
              if (t.includeDiagnostics) {
                n = ni(document.documentElement.outerHTML);
              }
              const i = ni(JSON.stringify(this.Qs));
              const s = this.Ns.map(t => {
                let n;
                if (t.interactionType === "click" && t.element instanceof HTMLElement) {
                  n = t.element.cloneNode(false).outerHTML;
                }
                return {
                  interactionType: t.interactionType,
                  videoAction: t.videoAction,
                  keyPressed: t.keyPressed,
                  elementHtml: n
                };
              });
              const o = ni(JSON.stringify(s));
              const r = ni(JSON.stringify(this.Z.getMessages(true)));
              e({
                html_gzip_base64: n,
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
      ho() {
        if (this.Z.usesChatMountPolling() && this.Z.inSession && !this.Z.isPartyWindowsActive() && !this.Z.isChatInjected()) {
          this.Z.scheduleChatInjectRetryIfNeeded();
          this.Z.reloadChat();
        }
      }
      po() {
        console.log("Show Notification");
      }
      co(t) {
        if (t.showAlert && t.alertModal) {
          const e = t.buttonUrl ?? this.Z.getPartyUrl();
          nr(t.alertModal, e);
        }
        this.Y.teardown();
        this.Ys.teardown();
        this.Ws.teardown();
        this.Gt.stopListening();
        this.Y.startEventListener();
        const s = {
          name: "error",
          action: {
            description: t.alertModal?.title,
            reason: t.alertModal?.content
          }
        };
        const o = new hr(si, ei, s);
        Fi.I(o);
      }
      In(t) {
        if (t === "Please open a video on Amazon Prime Video then click on the Tp icon") {
          return;
        }
        const n = new hr(si, ei, {
          name: "error",
          action: {
            reason: t
          }
        });
        Fi.I(n);
      }
      fo() {
        return bc(this, undefined, undefined, function* () {
          return Ye(() => this.Xs, 5000)();
        });
      }
      lo() {
        return bc(this, undefined, undefined, function* () {
          try {
            yield this.fo();
            const t = yield this.Do();
            this.uo();
            return t;
          } catch (t) {
            const n = {
              message: Mi,
              showButton: false
            };
            this.In(Mi);
            return {
              ready: false,
              error: n
            };
          } finally {
            this.Ks = false;
          }
        });
      }
      Do() {
        return bc(this, undefined, undefined, function* () {
          let t;
          try {
            yield this.W.waitVideoApiReadyAsync();
            const n = yield this.vo();
            if (n && n.error) {
              bi("Error is:", n.error);
              t = {
                message: n.error,
                showButton: true
              };
              this.Js = true;
              if (window.teleparty) {
                window.teleparty.contentScriptReady = true;
              }
            } else {
              if (n && n.showReviewMessage) {
                this.qs = true;
              }
              this.Js = true;
              if (window.teleparty) {
                window.teleparty.contentScriptReady = true;
              }
            }
            if (this.no) {
              this.no.injectAllChat();
            }
            if (this.Js) {
              this.mo();
            }
          } catch (n) {
            t = {
              message: n.message,
              showButton: false
            };
            this.In(n.message);
            this.Gt.logListenerElementsDetected();
          }
          return {
            ready: this.Js,
            error: t
          };
        });
      }
      do() {
        return {
          reactionsDisabled: this.Z.sessionReactionsDisabled,
          userReactionsDisabled: this.Z.userReactionsDisabled,
          inSession: this.Z.inSession,
          isChatVisible: this.Z.isPartyWindowsActive() ? this.Z.getChatWindowVisible() : this.Z.getChatVisible(),
          partyUrl: this.Z.getPartyUrl(),
          showReviewMessage: false,
          partyWindowsActive: this.Z.isPartyWindowsActive(),
          sessionId: this.Z.getSessionId()
        };
      }
      mo() {
        if (!this.Gs && !window.teleparty?.contentDetectedLoggerStarted) {
          this.Gs = true;
          if (window.teleparty) {
            window.teleparty.contentDetectedLoggerStarted = true;
          }
          this.wo();
          this.yo = setInterval(() => {
            this.wo();
          }, 15000);
        }
      }
      wo() {
        return bc(this, undefined, undefined, function* () {
          if (!this.Ys.isInParty()) {
            try {
              const e = yield this.W.getVideoDataAsync();
              const i = function (t) {
                const e = [t == null ? undefined : t.originalTitle, t == null ? undefined : t.videoTitle, (t == null ? undefined : t.content)?.name].map(vc).find(gc);
                if (e) {
                  return {
                    title: e
                  };
                } else {
                  return undefined;
                }
              }(e);
              if (!i) {
                return;
              }
              const s = e.service || e.content?.service || this.W.getInternalStreamingServiceName();
              const o = mc(s, e.videoId || e.content?.id, i.title, window.location.href);
              if (this.zs.has(o)) {
                return;
              }
              if (this.Ys.isInParty()) {
                return;
              }
              this.zs.add(o);
              const r = {
                name: "content_detected",
                page: {
                  type: "watch",
                  name: i.title,
                  url: window.location.href,
                  referrer: document.referrer || ""
                },
                content: wc(e, i, {
                  fallbackUrl: window.location.href
                }),
                action: {
                  source: "content_detector",
                  description: "content title detected"
                }
              };
              const a = new hr(si, ei, r, cr.METIS);
              yield Fi.I(a, 2500);
            } catch (t) {
              bi("Content detected: VideoData unavailable", t);
            }
          }
        });
      }
      vo() {
        return bc(this, undefined, undefined, function* () {
          const t = yield this.ro();
          return Fi.I(t);
        });
      }
      ro() {
        return bc(this, undefined, undefined, function* () {
          const t = {
            videoId: (yield this.W.getVideoDataAsync()).videoId
          };
          return new Bi(si, ei, t);
        });
      }
    }
    function Fc(t, n = "") {
      return `\n\n      <style tpInjected data-tp-sidebar-css="1">\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 338px) !important;\n      }\n\n      .with-chat-absolute {\n        position: absolute !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      [data-chat-visible="true"] {\n        left: 0px !important;\n        width: calc(100% - 338px) !important;\n        position: absolute !important;\n    }\n\n      .tp-layout-wrapper {\n        display: flex;\n        align-items: stretch;\n      }\n\n      .tp-video-region {\n        flex: 1 1 auto;\n      }\n\n      .tp-chat-region {\n        flex: 0 0 338px;\n      }\n\n      ${n}\n      \n    </style>\n\n    <link tpInjected data-tp-sidebar-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/chat.css")}">\n    <link tpInjected data-tp-sidebar-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    <div id="tp-layout-wrapper" data-tp-layout="video+chat">\n      <div class="tp-video-region"></div>\n      <div class="tp-chat-region">\n        ${t}\n      </div>\n    </div>\n  `;
    }
    var _c;
    var Ec = e(5089);
    var xc = e.n(Ec);
    class kc extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.SET_TYPING);
        this.data = e;
      }
    }
    class Ac extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.SEND_MESSAGE);
        this.data = e;
      }
    }
    class Ic extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.BROADCAST_USER_SETTINGS);
        this.data = e;
      }
    }
    class Bc extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.SEND_REACTION);
        this.data = e;
      }
    }
    class Sc extends Ei {
      constructor(t, n, e) {
        super(t, n, xi.SEND_GIF);
        this.data = e;
      }
    }
    var jc = new Uint8Array(16);
    function $c() {
      if (!_c && !(_c = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto))) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
      return _c(jc);
    }
    const Tc = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const Pc = function (t) {
      return typeof t == "string" && Tc.test(t);
    };
    var Mc = [];
    for (var Lc = 0; Lc < 256; ++Lc) {
      Mc.push((Lc + 256).toString(16).substr(1));
    }
    const Rc = function (t, n = 0) {
      var e = (Mc[t[n + 0]] + Mc[t[n + 1]] + Mc[t[n + 2]] + Mc[t[n + 3]] + "-" + Mc[t[n + 4]] + Mc[t[n + 5]] + "-" + Mc[t[n + 6]] + Mc[t[n + 7]] + "-" + Mc[t[n + 8]] + Mc[t[n + 9]] + "-" + Mc[t[n + 10]] + Mc[t[n + 11]] + Mc[t[n + 12]] + Mc[t[n + 13]] + Mc[t[n + 14]] + Mc[t[n + 15]]).toLowerCase();
      if (!Pc(e)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return e;
    };
    const Oc = function (t, n, e) {
      var i = (t = t || {}).random || (t.rng || $c)();
      i[6] = i[6] & 15 | 64;
      i[8] = i[8] & 63 | 128;
      if (n) {
        e = e || 0;
        for (var s = 0; s < 16; ++s) {
          n[e + s] = i[s];
        }
        return n;
      }
      return Rc(i);
    };
    const Vc = "data-tp-in-party";
    function Uc(t) {
      if (t) {
        document.documentElement.setAttribute(Vc, "true");
      } else {
        document.documentElement.removeAttribute(Vc);
      }
    }
    function Hc(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    const Nc = new class {
      isUserIconValid(t) {
        if (!t) {
          return false;
        }
        if (t.includes("/profile-images/")) {
          return true;
        }
        if (t.includes("?newIconUrl=")) {
          const [n, e] = t.split("?newIconUrl=");
          return ga.includes(e) && Da.includes(n);
        }
        return ga.includes(t);
      }
      isUserIdValid(t) {
        return typeof t == "string" && (t.length === 16 || t.length === 36);
      }
      isUserNickNameValid(t) {
        return typeof t == "string" && t.length > 0 && t.length < 20;
      }
      getDefaultUserIcon() {
        const t = Math.floor(Math.random() * va.length);
        return va[t];
      }
      getDefaultUserNickName() {
        return "";
      }
      bo(t) {
        return Hc(this, undefined, undefined, function* () {
          try {
            yield yr.setItemsAsync(t);
          } catch (t) {}
        });
      }
      getValidatedChromeStorageDataAsync() {
        return Hc(this, undefined, undefined, function* () {
          const t = yield Vi.getAllItemsAsync();
          const n = this.validateStorageData(t);
          if (JSON.stringify(t) !== JSON.stringify(n)) {
            this.bo(n);
          }
          return n;
        });
      }
      validateStorageData(t) {
        var n;
        const e = typeof t == "object" ? Object.assign({}, t) : {};
        if ((n = e.userIcon) === null || n === undefined ? undefined : n.includes("?newIconUrl=")) {
          e.userIcon = e.userIcon.split("?newIconUrl=")[1];
        }
        if (!this.isUserIconValid(e.userIcon)) {
          e.userIcon = this.getDefaultUserIcon();
        }
        if (!this.isUserNickNameValid(e.userNickname)) {
          e.userNickname = this.getDefaultUserNickName();
        }
        return e;
      }
    }();
    Object.freeze(Nc);
    const Gc = Nc;
    var zc;
    (function (t) {
      t.HEART = "heart";
      t.ANGRY = "angry";
      t.FIRE = "fire";
      t.LAUGH = "laugh";
      t.CRY = "cry";
      t.SURPRISE = "surprise";
    })(zc ||= {});
    const Zc = t => n => {
      var e;
      if (t.length) {
        const i = document.querySelector(t);
        const s = (e = i == null ? undefined : i.shadowRoot) === null || e === undefined ? undefined : e.querySelector(n);
        if (s) {
          return jQuery(s);
        } else {
          return jQuery();
        }
      }
      return jQuery(n);
    };
    function Qc(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Wc {
      constructor(t, n) {
        this.Co = this.Fo.bind(this);
        this._o = this.resetIdleTimer.bind(this);
        this.K = t => {
          if (t.data === "TP_EMOJI_REQ_RELOAD") {
            this.updateFrequentlyUsed();
          }
          if (t.data && t.data.type === "emoji-click") {
            this.Eo(t.data);
          }
        };
        this.xo = t => {
          if (t.target === this.ko("#chat-input")[0] || t.target === this.ko("#nickname-edit")[0]) {
            t.stopImmediatePropagation();
          }
        };
        this.Ao = t => {
          this.Z.onVideoClick();
          const n = t.target;
          let e = n.id !== "" ? n.id : n.className;
          e = n.getAttribute("data-tp-id") ? n.getAttribute("data-tp-id") : e;
          const i = {
            name: "user_click",
            component: {
              name: e,
              type: n.nodeName,
              origin: "other"
            }
          };
          const s = new hr(si, ei, i);
          Fi.I(s);
          if (t.target !== this.ko("emoji-picker")[0] && t.target !== this.ko("#chat-input")[0] && this.ko("#emoji-picker-container") && !this.ko("#emoji-picker-container").is(":hidden")) {
            this.Z.toggleEmojiClicker();
          }
          if (t.target instanceof HTMLElement && this.ko("#gif-picker-container").length && this.ko("#gif-picker-container")[0] && !this.ko("#gif-picker-container")[0].contains(t.target) && t.target !== this.ko("#chat-input")[0] && !this.ko("#gif-picker-container").is(":hidden") && t.target.className !== "category-img") {
            this.Z.toggleGIFs();
          }
        };
        this.Eo = t => {
          console.log("on Emoji Click");
          const n = this.ko("#chat-input")[0];
          const e = t.detail.unicode;
          const i = new hr(si, ei, {
            name: "user_click",
            component: {
              name: "chat_input_container-emoji_picker-emoji",
              type: e
            }
          });
          Fi.I(i);
          const s = new hr(si, ei, {
            eventType: `emoji-click-${e}`,
            sessionId: this.Z.getSessionId()
          });
          Fi.I(s);
          Oo.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
          const o = window.getSelection();
          if (!this.ko("#chat-input").is(":focus") && n.lastChild) {
            const t = document.createRange();
            t.setStartAfter(n.lastChild);
            if (o != null) {
              o.removeAllRanges();
            }
            if (o != null) {
              o.addRange(t);
            }
          }
          this.Z.focusChat();
          this.Io(e);
          if (n.scrollHeight - n.scrollTop <= n.clientHeight + 40) {
            n.scrollTop = n.scrollHeight;
          }
          this.Bo();
          this.Z.onInputChange();
        };
        this.Z = t;
        this.ko = Zc(n || "");
      }
      So() {
        bi("Idle Warning called");
        nr(Ko);
        const t = new hr(si, ei, {
          name: "party_warning",
          action: {
            description: "user has been warned for being idle",
            reason: "user was idle for " + No + " time in milliseconds."
          }
        });
        Fi.I(t);
        const n = new hr(si, ei, {
          eventType: "idle-warn-2hr",
          sessionId: this.Z.getSessionId()
        });
        Fi.I(n);
        this.jo = setTimeout(this.$o.bind(this), No);
      }
      $o() {
        bi("Idle kick called");
        const t = new hr(si, ei, {
          name: "party_kick",
          action: {
            description: "user has been kicked for being idle",
            reason: "user was idle for " + Ho + " time in milliseconds."
          }
        });
        const n = new ir(si, ei, $r);
        Fi.I(t);
        Fi.I(n);
      }
      resetIdleTimer() {
        if (this.To) {
          clearTimeout(this.To);
        }
        if (this.jo) {
          er();
          clearTimeout(this.jo);
        }
        this.To = setTimeout(this.So.bind(this), Ho);
      }
      Po() {
        this.To = setTimeout(this.So.bind(this), Ho);
        window.onmousemove = t => {
          if (t.isTrusted) {
            this._o();
          }
        };
        window.onfocus = () => this._o();
        window.onmousedown = () => this._o();
        window.ontouchstart = () => this._o();
        window.onkeydown = () => this._o();
      }
      Mo() {
        if (this.To) {
          clearTimeout(this.To);
        }
        if (this.jo) {
          clearTimeout(this.jo);
        }
        window.onmousemove = null;
        window.onmousedown = null;
        window.ontouchstart = null;
        window.onkeydown = null;
      }
      startListening() {
        bi("Listening for chat events");
        this.Po();
        this.Lo();
        this.initWindowListeners();
      }
      stopListening() {
        this.Ro();
        this.Mo();
        this.Oo();
      }
      Fo() {
        this.Z.clearUnreadCount();
      }
      Vo(t) {
        console.log("Pasting");
        t.preventDefault();
        if (t.clipboardData) {
          const n = t.clipboardData.getData("text/plain");
          document.execCommand("insertHTML", false, n);
        }
        this.Z.onInputChange();
      }
      initWindowListeners() {
        jQuery(window).on("focus", this.Co);
        window.addEventListener("message", this.K);
        document.addEventListener("dragstart", this.Uo.bind(this));
        document.addEventListener("webkitfullscreenchange", this.Z.onFullScreen);
        document.addEventListener("fullscreenchange", this.Z.onFullScreen);
        document.addEventListener("keydown", this.xo, true);
        document.addEventListener("emoji-click", this.Eo);
        document.addEventListener("click", this.Ao);
      }
      Lo() {
        jQuery(window).on("focus", this.Co);
        this.ko("#party-tab").on("click", this.Z.togglePartyTab.bind(this.Z));
        this.ko("#friends-tab").on("click", this.Z.toggleFriendsTab.bind(this.Z));
        this.ko(".user-icon").on("click", this.Z.toggleLargeUserIconButton.bind(this.Z));
        this.ko("#user-icon").on("click", this.Z.toggleIconContainer.bind(this.Z));
        this.ko("#link-icon").on("click", this.Z.linkIconListener.bind(this.Z));
        this.ko("#reset-icon").on("click", this.Z.resetIconListener.bind(this.Z));
        this.ko(".image-button").on("click", this.Z.userIconSelectorListener.bind(this.Z));
        this.ko("#chat-input-container").on("keydown", this.Z.onChatKeyDown.bind(this.Z));
        this.ko("#nickname-edit").on("keydown", this.Z.onChatKeyDown.bind(this.Z));
        this.ko("#chat-input").on("keypress", this.Z.onChatKeyPress.bind(this.Z));
        this.ko("#chat-input").on("input", this.Z.onInputChange.bind(this.Z));
        this.ko("#gif-search").on("keyup", this.Z.onGifSearch.bind(this.Z));
        this.ko("#saveChanges").on("click", this.Z.saveChangesListener.bind(this.Z));
        this.ko("#cancelNickname").on("click", this.Z.cancelNicknameListener.bind(this.Z));
        this.ko("#chat-wrapper").on("mouseup", this.Z.cancelEvent);
        this.ko("#chat-wrapper").on("mousedown", this.Z.cancelEvent);
        this.ko("#chat-wrapper").on("pointerup", this.Z.cancelEvent);
        this.ko("#chat-wrapper").on("pointerdown", this.Z.cancelEvent);
        this.ko("#chat-wrapper").on("mousemove", this.Z.cancelEvent);
        this.ko("#chat-wrapper").on("pointermove", this.Z.cancelEvent);
        this.ko("#chat-wrapper").on("keyup", this.Z.onChatKeyUp.bind(this.Z));
        this.ko("#emoji-picker-btn").on("click", this.Z.addEmojiPicker.bind(this.Z));
        this.ko("#gif-btn").on("click", this.Z.addGifPicker.bind(this.Z));
        this.ko(".gif-img").on("click", this.Z.clickGif.bind(this.Z));
        this.ko(".gif-results").on("click", "video, img", this.Z.clickGif.bind(this.Z));
        this.ko("#category-container").on("click", "video", this.Z.clickGif.bind(this.Z));
        this.ko("#gif-input-back").on("click", this.Z.resetGif.bind(this.Z));
        this.ko("#reaction-btn").on("click", this.Z.addReactionTab.bind(this.Z));
        this.ko("#chat-input-container").on("click", this.Ho.bind(this));
        this.ko("#chat-input").on("input", this.Bo.bind(this));
        this.ko("#chat-input").on("drop", this.No.bind(this));
        this.ko("#gif-results-wrapper").on("scroll", this.Z.onScrollToBottom.bind(this.Z));
        this.Go();
        document.addEventListener("keydown", this.xo.bind(this), true);
        this.Z.initCustomListeners();
      }
      Go() {
        this.ko("#tp-heart-button").on("click", () => {
          this.Z.onReactionClicked(zc.HEART);
        });
        this.ko("#tp-cry-button").on("click", () => {
          this.Z.onReactionClicked(zc.CRY);
        });
        this.ko("#tp-angry-button").on("click", () => {
          this.Z.onReactionClicked(zc.ANGRY);
        });
        this.ko("#tp-surprise-button").on("click", () => {
          this.Z.onReactionClicked(zc.SURPRISE);
        });
        this.ko("#tp-laugh-button").on("click", () => {
          this.Z.onReactionClicked(zc.LAUGH);
        });
        this.ko("#tp-fire-button").on("click", () => {
          this.Z.onReactionClicked(zc.FIRE);
        });
      }
      Bo() {
        const e = this.ko("#bottom-chat-controls").outerHeight(true) ?? parseInt(this.ko("#bottom-chat-controls").css("height"));
        const i = parseInt(this.ko("#chat-input-container").css("padding-bottom"));
        const s = (this.ko("#chat-input").outerHeight(true) ?? parseInt(this.ko("#chat-input").css("height"))) + e + i;
        this.ko("#emoji-picker-container").css({
          bottom: s
        });
        this.ko("#gif-picker-container").css({
          bottom: s
        });
      }
      No(t) {
        t.preventDefault();
      }
      Uo(t) {
        t.preventDefault();
      }
      Ho(t) {
        if (t.target === this.ko("#chat-input")[0]) {
          this.Z.focusChat();
        }
      }
      Io(t) {
        let n;
        let e;
        if (window.getSelection && (n = window.getSelection(), n && n.getRangeAt && n.rangeCount)) {
          e = n.getRangeAt(0);
          e.deleteContents();
          const i = document.createElement("span");
          i.className = "inTextEmoji";
          i.innerHTML = t;
          const s = document.createDocumentFragment();
          let o;
          let r;
          while (o = i.firstChild) {
            r = s.appendChild(o);
          }
          e.insertNode(s);
          if (r) {
            e = e.cloneRange();
            e.setStartAfter(r);
            e.collapse(false);
            n.removeAllRanges();
            n.addRange(e);
          }
        }
      }
      zo(t) {
        return typeof t == "object" && t != null && "unicode" in t;
      }
      Zo(t) {
        if (!Array.isArray(t)) {
          return false;
        }
        if (t.length === 0) {
          return false;
        }
        for (let n = 0; n < t.length; n++) {
          const e = t[n];
          if (!this.zo(e)) {
            return false;
          }
        }
        return true;
      }
      updateFrequentlyUsed(t) {
        return Qc(this, undefined, undefined, function* () {
          const e = yield Vi.getItemsAsync([gi]);
          let i = e[gi] ?? wi;
          if (!this.Zo(i)) {
            i = wi;
          }
          if (Array.isArray(i)) {
            if (t) {
              i = i.filter(n => n.unicode != t.unicode);
              i.unshift(t);
              i = i.slice(0, 24);
            }
            yield yr.setItemsAsync({
              [gi]: i
            });
            window.postMessage({
              type: "TP_FREQ_USED",
              data: i
            }, "*");
          }
        });
      }
      Oo() {
        jQuery(window).off("focus", this.Co);
        document.removeEventListener("emoji-click", this.Eo);
        document.removeEventListener("keydown", this.xo, true);
        document.removeEventListener("click", this.Ao);
        window.removeEventListener("message", this.K);
        document.removeEventListener("webkitfullscreenchange", this.Z.onFullScreen);
        document.removeEventListener("fullscreenchange", this.Z.onFullScreen);
      }
      Ro() {
        this.ko(".user-icon").off();
        this.ko("#user-icon").off();
        this.ko("#link-icon").off();
        this.ko(".image-button").off();
        this.ko("#chat-input").off();
        this.ko("#saveChanges").off();
        this.ko("#cancelNickname").off();
        this.ko("#chat-input-container").off();
        this.ko("#chat-wrapper").off();
      }
    }
    class Yc {
      constructor(t) {
        this.Qo = false;
        this.Wo = false;
        this.kt = false;
        this.Z = t;
      }
      setupPresenceIndicator() {
        this.Qo = false;
        this.Wo = false;
        this.kt = false;
        this.Yo();
      }
      Jo() {
        return jQuery("#presence-indicator");
      }
      setTypingPresenceVisible(t) {
        this.Qo = t;
        this.Yo();
      }
      setBufferingPresenceVisible(t) {
        this.Wo = t;
        this.Yo();
      }
      setWatchingAdsPresenceVisible(t) {
        this.kt = t;
        this.Yo();
      }
      getWatchingAdsVisible() {
        return this.kt;
      }
      Ko() {
        if (this.kt) {
          return "People are watching ads...";
        } else if (this.Qo && this.Wo) {
          return "People are typing and buffering...";
        } else if (this.Qo) {
          return "People are typing...";
        } else if (this.Wo) {
          return "People are buffering...";
        } else {
          return "";
        }
      }
      Yo() {
        const t = this.Ko();
        this.Jo().text(t);
        this.Z.queueMessageForFrame(Ii.SET_PRESENCE_MESSAGE, {
          text: t
        });
      }
    }
    function Jc(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Kc {
      constructor(t) {
        this.qo = false;
        this.Xo = 1;
        this.tr = false;
        this.nr = false;
        this.er = "";
        this.Vt = "";
        this.ir = "0";
        this.sr = "";
        this.rr = true;
        this.ar = false;
        this.ur = 0;
        this.cr = [];
        this.hr = new Ro();
        this.lr = false;
        this.dr = undefined;
        this.pr = true;
        this.Dr = this.vr();
        this.gr = this.vr();
        this.mr = false;
        this.wr = false;
        this.yr = [];
        this.br = 0;
        this.Cr = 0;
        this.Fr = false;
        this.logEvent = t => {
          const n = new hr(si, ei, t);
          Fi.I(n);
        };
        this.checkInitReactionContainer = () => {
          Vi.getItemsAsync([pi]).then(t => {
            if (t[pi] === true || t[pi] === undefined) {
              this.showReactionHolder();
            }
          });
        };
        this.onSidebarFocus = () => {
          var t;
          if ((t = this.Y) !== null && t !== undefined) {
            t.hideMessageIndicator();
          }
        };
        this.setReactionsActive = t => {
          this.hr.pushTask(() => yr.setItemsAsync({
            [pi]: t.active
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
          if ((t = this.Y) !== null && t !== undefined) {
            t.setChatButtons();
          }
        };
        this.cancelEvent = t => {
          t.stopPropagation();
        };
        this._r = false;
        this.Er = new Wc(this, t);
        this.kr = new Yc(this);
        this.Ar = new Ca(this);
        this.Ir = undefined;
        this.Br = undefined;
        this.qs = false;
        this.ko = Zc(t || "");
        this.br = 0;
      }
      setPageControls(t) {
        this.Y = t;
      }
      fixPageControls() {
        var t;
        var n;
        if ((t = this.Y) !== null && t !== undefined) {
          t.enablePartyIcons();
        }
        if ((n = this.Y) !== null && n !== undefined) {
          n.setChatButtons();
        }
      }
      Sr() {
        return Jc(this, undefined, undefined, function* () {
          return Fi.I(new Mr(si, ei));
        });
      }
      usesChatMountPolling() {
        return false;
      }
      isChatMountReady() {
        return false;
      }
      isChatInjected() {
        return this.jr();
      }
      logSidebarInjected(t) {
        return Jc(this, undefined, undefined, function* () {
          if (this.Fr || !t || this.isPartyWindowsActive()) {
            return;
          }
          let n;
          let e;
          this.Fr = true;
          yield this.$r();
          if (this.jr()) {
            e = this.Tr();
            if (this.Pr(e)) {
              try {
                yield Ye(() => this.lr, 30000)();
              } catch (t) {
                n = "messaging_timeout";
              }
            } else {
              n = "layout_invalid";
            }
          } else {
            n = "mount_missing";
            e = {
              connected: false,
              has_size: false,
              visible: false,
              has_frame: false
            };
          }
          const i = n === undefined;
          Fi.I(new kr(si, ei, {
            event_name: "sidebar_injected",
            service: t,
            success: i,
            session_id: this.Vt,
            extra_info: {
              is_create: this.Mr === true,
              uses_mount_polling: this.usesChatMountPolling(),
              mount_ready: this.usesChatMountPolling() ? this.isChatMountReady() : undefined,
              layout_checks: e,
              failure_reason: n
            }
          }, xr.PARTY));
        });
      }
      Tr() {
        const t = this.ko("#chat-wrapper")[0];
        if (!t) {
          return {
            connected: false,
            has_size: false,
            visible: false,
            has_frame: false
          };
        }
        const n = t.getBoundingClientRect();
        const e = window.getComputedStyle(t);
        const i = this.ko("#tpChatFrame")[0];
        return {
          connected: t.isConnected,
          has_size: n.width > 0 && n.height > 0,
          visible: e.display !== "none" && e.visibility !== "hidden" && e.opacity !== "0",
          has_frame: !!i
        };
      }
      Pr(t) {
        return t.connected && t.has_size && t.visible && t.has_frame;
      }
      $r() {
        return Jc(this, undefined, undefined, function* () {
          if (this.jr() || !this.usesChatMountPolling()) {
            return;
          }
          try {
            yield Ye(() => this.jr() || this.Lr === undefined, 32000)();
          } catch (t) {}
        });
      }
      Rr() {
        return Jc(this, undefined, undefined, function* () {
          if (!this.jr() && !this.isPartyWindowsActive()) {
            if (this.usesChatMountPolling()) {
              yield this.Or();
              if (!this.jr()) {
                this.scheduleChatInjectRetryIfNeeded();
              }
              return;
            } else {
              this.Vr();
              return;
            }
          }
        });
      }
      Or() {
        return Jc(this, undefined, undefined, function* () {
          if (!this.jr() && !this.isPartyWindowsActive()) {
            try {
              yield Ye(() => !!this.jr() || (this.isChatMountReady() && this.Vr(), this.jr()), 15000)();
            } catch (t) {
              this.In("Chat sidebar mount timed out", t == null ? undefined : t.message);
            }
          }
        });
      }
      scheduleChatInjectRetryIfNeeded() {
        if (this.usesChatMountPolling()) {
          if (!this.jr() && !this.isPartyWindowsActive() && !!this._r && !this.Lr) {
            this.Cr = 0;
            this.Lr = setInterval(() => {
              this.Ur();
            }, 2000);
          }
        }
      }
      Ur() {
        return Jc(this, undefined, undefined, function* () {
          if (this.jr() || !this._r || this.isPartyWindowsActive()) {
            this.Hr();
          } else {
            this.Cr++;
            if (this.Cr > 15) {
              this.Hr();
            } else {
              yield this.reloadChat();
              if (this.jr()) {
                this.Hr();
              }
            }
          }
        });
      }
      Hr() {
        if (this.Lr) {
          clearInterval(this.Lr);
          this.Lr = undefined;
        }
      }
      setChatVisible(t, n = true) {
        return Jc(this, undefined, undefined, function* () {
          if (this.isPartyWindowsActive()) {
            throw new Error("Invalid Set Chat");
          }
          if (n) {
            this.rr = t;
          }
          if (t) {
            this.resetUnreadMessagesCount();
          }
          if (t && !this.jr()) {
            this.reloadChat();
          }
        });
      }
      incrementUnreadMessagesCount() {
        this.br++;
        const t = document.querySelector("#tp-chat-button");
        if (t) {
          const n = t.querySelector(".unread-messages-count");
          if (n) {
            n.remove();
          }
          if (this.br > 0) {
            const n = document.createElement("span");
            n.textContent = String(this.br);
            n.className = "unread-messages-count";
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
              boxShadow: "0 0 2px rgba(0,0,0,0.2)"
            });
            if (t.style.position === "" || t.style.position === "static") {
              t.style.position = "relative";
            }
            t.appendChild(n);
          }
        }
      }
      resetUnreadMessagesCount() {
        this.br = 0;
        const t = document.querySelector("#tp-chat-button");
        if (t) {
          const n = t.querySelector(".unread-messages-count");
          if (n) {
            n.remove();
          }
        }
      }
      getUnreadMessagesCount() {
        return this.br;
      }
      In(t, n) {
        const e = new hr(si, ei, {
          name: "error",
          action: {
            reason: n,
            description: t
          }
        });
        Fi.I(e);
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
        if (this.lr) {
          this.Nr();
        }
        this.lr = true;
        this.Gr = t;
        console.log("setChatFrameReady");
      }
      queueMessageForFrame(t, n) {
        this.hr.pushTask(() => Jc(this, undefined, undefined, function* () {
          this.zr(t, n);
        }), "queueMessageForFrame");
      }
      zr(t, n) {
        return Jc(this, undefined, undefined, function* () {
          if (t === Ii.LOAD_INIT_DATA) {
            Ti("cs_init_data_sent");
          }
          const e = this.Gr;
          const i = {
            type: t,
            data: n,
            target: "TP_Sidebar",
            tabId: e,
            sender: si
          };
          Fi.I(i);
        });
      }
      Zr() {
        var t;
        return Jc(this, undefined, undefined, function* () {
          try {
            console.log("Start delay");
            yield Ye(() => this.lr && this.Gr != null, 30000)();
            console.log("Chat Frame is Loaded");
            if (this.dr) {
              this.Qr(this.dr);
            }
            if ((t = this.Y) !== null && t !== undefined) {
              t.setResetChatButton();
            }
          } catch (t) {
            this.In("Sidewindow didn't load in time", t);
          }
        });
      }
      vr() {
        window.origin.includes(".crunchyroll.com");
        window.origin.includes("tv.apple.com");
        return false;
      }
      Wr() {
        return window.location.hostname.includes("f1tv.formula1.com");
      }
      Yr() {
        return Jc(this, undefined, undefined, function* () {
          yield Fi.I(new ji(si, ei, ki.LOAD_CHAT_WINDOW));
          console.log(this.Gr);
        });
      }
      resetChatWindow(t = false) {
        var n;
        return Jc(this, undefined, undefined, function* () {
          yield Fi.I(new ji(si, ei, ki.RESET_CHAT_WINDOW));
          console.log(this.Gr);
          this.gr = true;
          this.rr = true;
          if (top !== null && top !== undefined) {
            top.postMessage({
              type: "exitFullscreen"
            }, "*");
          }
          if (this.mr && t) {
            this.resetIconListener();
            if ((n = this.Y) !== null && n !== undefined) {
              n.setResetChatButton();
            }
          }
        });
      }
      hideChatWindow() {
        return Jc(this, undefined, undefined, function* () {
          yield Fi.I(new ji(si, ei, ki.HIDE_CHAT_WINDOW));
          this.gr = false;
          this.rr = false;
        });
      }
      Jr() {
        return Jc(this, undefined, undefined, function* () {
          this.Yr();
          this.hr.pushTask(this.Zr.bind(this), "waitChatFrameReady");
        });
      }
      loadInitData(t) {
        this.dr = t;
      }
      Qr(t) {
        return Jc(this, undefined, undefined, function* () {
          const e = Object.assign({}, t);
          e.iconMap = ma;
          e.extensionBaseUrl = chrome.runtime.getURL("");
          e.iconFrameMap = wa;
          if (e.storageData) {
            const t = yield Gc.getValidatedChromeStorageDataAsync();
            console.log("GOt storage data in send init stuff", t);
            e.storageData = t;
          }
          if (e.sessionCallbackData?.sessionId) {
            const {
              sessionId: t
            } = e.sessionCallbackData;
            const n = yield Vi.getItemsAsync(["REDIRECT_URL"]);
            if (n.REDIRECT_URL && n.REDIRECT_URL[t]) {
              e.sessionCallbackData.redirectUrl = n.REDIRECT_URL[t];
            }
          }
          this.queueMessageForFrame(Ii.LOAD_INIT_DATA, e);
          const i = yield this.getVideoTitle();
          this.queueMessageForFrame(Ii.SET_PAGE_TITLE, {
            pageTitle: i
          });
          this.queueMessageForFrame(Ii.SET_USER_LIST, this.yr);
          this.queueMessageForFrame(Ii.UPDATE_SETTINGS, {
            userSettings: (yield this.Sr()).userSettings
          });
        });
      }
      Nr() {
        return Jc(this, undefined, undefined, function* () {
          if (this.dr) {
            yield this.Qr(this.dr);
          }
          const t = yield this.Sr();
          const n = this.Ar.getUserIconURL(t.currentUser.userIds.permId, t.userSettings.userIcon);
          const e = this.Ar.setUserIconFrameForUser(t.currentUser.userIds.permId, t.userSettings.userIconFrame);
          this.queueMessageForFrame(Ii.SET_USER_ICON_URL, n);
          this.queueMessageForFrame(Ii.SET_USER_ICON_FRAME_URL, e);
          const i = yield this.getVideoTitle();
          this.queueMessageForFrame(Ii.SET_PAGE_TITLE, {
            pageTitle: i
          });
          this.reloadMessages();
        });
      }
      Kr() {
        return Jc(this, undefined, undefined, function* () {
          yield this.Rr();
          if (this.jr()) {
            Ti("cs_chat_injected");
            yield this.qr();
          }
        });
      }
      qr() {
        return Jc(this, undefined, undefined, function* () {
          yield We(200)();
          const t = this.ko("#tpChatFrame")[0];
          if (t) {
            t.style.display = "block";
          }
          yield this.setChatVisible(true);
          this.addIconSelector();
          this.Xr();
          this.kr.setupPresenceIndicator();
          this.checkInitReactionContainer();
        });
      }
      get sessionReactionsDisabled() {
        return this.nr;
      }
      get userReactionsDisabled() {
        return this.tr;
      }
      setUserReactionsDisabledStatus(t) {
        this.tr = t;
      }
      setSessionReactionDisabledStatus(t) {
        this.nr = t;
      }
      rt() {
        return Jc(this, undefined, undefined, function* () {
          this.Er.initWindowListeners();
          if (this.vr()) {
            this.Jr();
          }
          this.hr.pushTask(this.Zr.bind(this), "InitChat, _waitChatFrameReady");
          er();
          const t = yield this.Sr();
          Ti("cs_user_data");
          const n = this.Ar.getUserIconURL(t.currentUser.userIds.permId, t.userSettings.userIcon);
          const e = this.Ar.setUserIconFrameForUser(t.currentUser.userIds.permId, t.userSettings.userIconFrame);
          this.Ar.setUserIconUrl(n);
          this.Ar.setUserIconFrameUrl(e);
          this.Ar.renderSidebar();
          this._r = true;
          Uc(true);
          if (!this.jr()) {
            yield this.ta();
            if (this.vr()) {
              jQuery("body").after(`\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `);
            } else {
              yield this.Kr();
              this.checkAddYoutubePromo();
            }
          }
        });
      }
      checkAddYoutubePromo() {
        return Jc(this, undefined, undefined, function* () {
          if ((yield Vi.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo !== "true") {
            this.Ar.addYoutubePromo();
            yr.setItemsAsync({
              seenYoutubePromo: "true"
            });
          }
        });
      }
      sendInitDataToSidebar(t) {
        return Jc(this, undefined, undefined, function* () {
          this.dr = t;
          const e = Object.assign({}, t);
          e.iconMap = ma;
          e.extensionBaseUrl = chrome.runtime.getURL("");
          e.iconFrameMap = wa;
          if (e.sessionCallbackData?.sessionId) {
            const {
              sessionId: t
            } = e.sessionCallbackData;
            const n = yield Vi.getItemsAsync(["REDIRECT_URL"]);
            if (n.REDIRECT_URL && n.REDIRECT_URL[t]) {
              e.sessionCallbackData.redirectUrl = n.REDIRECT_URL[t];
            }
            const i = yield Fi.I(new Ui(si, ei, {
              key: "sportLobby"
            }));
            if ((i == null ? undefined : i.result) && i.result.includes(t)) {
              e.sessionCallbackData.redirectUrl = i.result;
            }
          }
          this.queueMessageForFrame(Ii.LOAD_INIT_DATA, e);
        });
      }
      reloadChat() {
        return Jc(this, undefined, undefined, function* () {
          console.log("Reload chat");
          if (!this.jr() && !this.isPartyWindowsActive()) {
            yield this.Rr();
            if (!this.jr()) {
              return;
            }
            yield We(200)();
            const t = this.ko("#tpChatFrame")[0];
            if (t) {
              t.style.display = "block";
            }
            yield this.setChatVisible(this.rr);
            this.addIconSelector();
            this.na();
            this.Xr();
            this.kr.setupPresenceIndicator();
            this.reloadMessages();
            this.scrollToBottom();
            this.checkInitReactionContainer();
          }
        });
      }
      sendTeardown(t) {
        const n = new ir(si, ei, t);
        Fi.I(n);
      }
      jr() {
        return this.ko("#chat-wrapper").length > 0;
      }
      clearUnreadCount() {
        this.Ar.clearUnreadCount();
      }
      ea() {
        return Jc(this, undefined, undefined, function* () {
          try {
            yield Ye(() => document.querySelector("#chat-history") !== null || this.Dr || this.lr && this.pr, 10000)();
          } catch (t) {
            this.In("Failed to find chat history", t);
          }
        });
      }
      addMessage(t, n = false) {
        this.hr.pushTask(() => Jc(this, undefined, undefined, function* () {
          yield this.ea();
          this.Ar.addMessage(t, n);
        }), "addMessage, _waitForChatHistory");
      }
      addGif(t) {
        this.hr.pushTask(() => Jc(this, undefined, undefined, function* () {
          yield this.ea();
          this.Ar.addGif(t);
        }), "addGif");
      }
      reloadMessages() {
        this.Ar.reloadMessages();
      }
      scrollToBottom() {
        this.Ar.scrollToBottom();
      }
      addReviewMessage() {
        this.Ar.addReviewMessage();
        this.qs = true;
      }
      get showingReveiwMessage() {
        return this.qs;
      }
      set shouldReturnToVideo(t) {
        this.mr = t;
      }
      onBufferingMessage(t) {
        this.hr.pushTask(() => Jc(this, undefined, undefined, function* () {
          yield this.ea();
          this.kr.setBufferingPresenceVisible(t.usersBuffering.length > 0);
        }), "addBufferingMessage");
      }
      onTypingMessage(t) {
        this.hr.pushTask(() => Jc(this, undefined, undefined, function* () {
          yield this.ea();
          this.kr.setTypingPresenceVisible(t.usersTyping.length > 0);
        }), "onTypingMessage");
      }
      onWatchingAdsMessage(t) {
        const n = t.usersWatchingAds.length > 0;
        console.log("[TpDebug] onWatchingAdsMessage", {
          anyoneWatchingAds: t.anyoneWatchingAds,
          usersWatchingAds: t.usersWatchingAds,
          willShow: n
        });
        this.kr.setWatchingAdsPresenceVisible(n);
      }
      getWatchingAds() {
        return this.kr.getWatchingAdsVisible();
      }
      onNextEpisodeAvailable(t) {
        console.log("onNextEpisodeAvailable", t);
        this.queueMessageForFrame(Ii.UPDATE_ACTIONS_STATE, {
          nextEpisodeReady: t
        });
      }
      doUpdateSettings(t) {
        return Jc(this, undefined, undefined, function* () {
          const i = yield Fi.I(new Xa(si, ei, t));
          if (i) {
            const t = (yield this.Sr()).currentUser.userIds.permId;
            if (t) {
              this.Ar.updateUserData(t, i.userIcon, i.userNickname, i.userIconFrame ?? "");
            }
            this.Ar.setUserIconFrameUrl(i.userIconFrame ?? "");
          }
          if (t.shouldBroadcast) {
            this.ia(this.sa(i));
          }
        });
      }
      onUpdateSettingsMessage(t) {
        return Jc(this, undefined, undefined, function* () {
          this.Ar.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname, t.userSettings.userIconFrame ?? "");
          const i = yield this.Sr();
          const s = this.Ar.getUserIconURL(i.currentUser.userIds.permId, i.userSettings.userIcon);
          this.Ar.setUserIconUrl(s);
          if (t.permId === i.currentUser.userIds.permId) {
            this.Ar.setUserIconFrameUrl(t.userSettings.userIconFrame ?? "");
          }
          this.Ar.renderSidebar();
        });
      }
      Xr() {
        Ye(() => this.jr(), 10000)().then(() => {
          this.Er.startListening();
        });
      }
      na() {
        this.Er.stopListening();
        if (this.oa) {
          clearTimeout(this.oa);
          this.ar = false;
        }
      }
      teardown() {
        this.Hr();
        this._r = false;
        Uc(false);
        this.Vt = undefined;
        this.Mr = undefined;
        this.Fr = false;
        this.lr = false;
        this.na();
        this.ko("[tpInjected]").remove();
        this.removeChat();
        this.setChatVisible(false);
        console.log("teardown");
      }
      focusChat() {
        this.ko("#chat-input")[0].focus();
      }
      showEmojiPicker() {
        if (!this.ko("#gif-picker-container").is(":hidden")) {
          this.toggleGIFs();
        }
        this.ko("#emoji-picker-btn-icon").css({
          opacity: "1"
        });
        const e = this.ko("#bottom-chat-controls").outerHeight(true) ?? parseInt(this.ko("#bottom-chat-controls").css("height"));
        const i = parseInt(this.ko("#chat-input-container").css("padding-bottom"));
        const s = (this.ko("#chat-input").outerHeight(true) ?? parseInt(this.ko("#chat-input").css("height"))) + e + i;
        this.ko("#emoji-picker-container").css({
          bottom: s
        });
      }
      hideEmojiPicker() {
        this.ko("#emoji-picker-btn-icon").css({
          opacity: ""
        });
        this.ko("#emoji-picker-container").css("bottom", "");
      }
      showReactionHolder() {
        this.ko("#reaction-btn-icon").css({
          opacity: "1"
        });
        this.ko("#reaction-holder").css({
          display: "flex"
        });
        this.ko("#reaction-holder").css({
          "padding-top": "8px"
        });
        this.ko("#chat-input-container").css({
          "padding-top": "0"
        });
      }
      hideReactionHolder() {
        this.ko("#reaction-btn-icon").css({
          opacity: ""
        });
        this.ko("#reaction-btn").css({
          background: "",
          padding: ""
        });
        this.ko("#reaction-holder").css({
          "padding-top": ""
        });
        this.ko("#chat-input-container").css({
          "padding-top": ""
        });
        this.hr.pushTask(() => yr.setItemsAsync({
          [pi]: false
        }));
      }
      onOpenGifPicker() {
        return Jc(this, undefined, undefined, function* () {
          if (!this.ko("#emoji-picker-container").is(":hidden")) {
            this.toggleEmojiClicker();
          }
          if (!this.ko("#gif-results-left")[0].innerHTML) {
            this.fetchGIFs();
          }
          this.ko("#gif-btn-icon").css({
            opacity: "1"
          });
          const e = this.ko("#bottom-chat-controls").outerHeight(true) ?? parseInt(this.ko("#bottom-chat-controls").css("height"));
          const i = parseInt(this.ko("#chat-input-container").css("padding-bottom"));
          const s = (this.ko("#chat-input").outerHeight(true) ?? parseInt(this.ko("#chat-input").css("height"))) + e + i;
          this.ko("#gif-picker-container").css({
            bottom: s
          });
        });
      }
      onCloseGifPicker() {
        this.ko("#gif-btn-icon").css({
          opacity: ""
        });
        this.ko("#gif-btn").css({
          background: "",
          padding: ""
        });
      }
      toggleEmojiClicker() {
        this.ko("#emoji-picker-container").slideToggle(0, () => {
          if (this.ko("#emoji-picker-container").is(":hidden")) {
            this.hideEmojiPicker();
          } else {
            this.showEmojiPicker();
          }
        });
      }
      toggleReactions() {
        const t = document.querySelector("#chat-history");
        let n = false;
        if (t && Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 10) {
          n = true;
        }
        this.ko("#reaction-holder").slideToggle(0, () => {
          const t = this.ko("#reaction-holder").is(":hidden");
          if (t) {
            this.hideReactionHolder();
          } else {
            this.showReactionHolder();
          }
          if (!t && n) {
            this.Ar.scrollToBottom();
          }
        });
      }
      onVideoClick() {
        this.queueMessageForFrame(Ii.ON_PAGE_CLICK);
      }
      toggleGIFs() {
        this.ko("#gif-picker-container").slideToggle(0, () => {
          if (this.ko("#gif-picker-container").is(":hidden")) {
            this.onCloseGifPicker();
          } else {
            this.onOpenGifPicker();
          }
        });
      }
      addEmojiPicker(t) {
        t.stopPropagation();
        const n = new hr(si, ei, {
          name: "user_click",
          component: {
            name: "chat_input_container-emoji_picker",
            type: "button",
            origin: "tp"
          }
        });
        Fi.I(n);
        this.toggleEmojiClicker();
      }
      addGifPicker(t) {
        t.stopPropagation();
        const n = new hr(si, ei, {
          name: "user_click",
          component: {
            name: "chat_input_container-gif_popup",
            type: "button",
            origin: "tp"
          }
        });
        Fi.I(n);
        this.toggleGIFs();
      }
      getMessages(t = false) {
        return this.Ar.getMessages(t);
      }
      addReactionTab(t) {
        t.stopPropagation();
        const n = new hr(si, ei, {
          name: "user_click",
          component: {
            name: "chat_input_container-reaction_pinner",
            type: "button",
            origin: "tp"
          }
        });
        Fi.I(n);
        this.toggleReactions();
      }
      ta() {
        return Jc(this, undefined, undefined, function* () {
          this.ra = xc();
          this.ra = this.ra.replace(/{EXTENSION_LOGO}/g, ya(chrome.runtime.getURL("img/tp_logo.svg")));
          const t = yield this.Sr();
          if (t.userSettings === undefined) {
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          }
          const n = chrome.runtime.getURL("");
          this.ra = this.ra.replace(/{CHAT_URL}/g, `${Di}?t=${Date.now()}&id=${encodeURIComponent(n.substring(0, n.length - 1))}`);
          for (const t of vi) {
            const n = new RegExp(`${t}_STATIC`.toUpperCase(), "g");
            const e = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            this.ra = this.ra.replace(n, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`));
            this.ra = this.ra.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`));
          }
          this.ra = this.ra.replace(/{USER_NICKNAME}/g, t.userSettings.userNickname ? ya(t.userSettings.userNickname) : "Add a nickname");
          this.ra = this.ra.replace(/{USER_ICON}/g, this.Ar.getUserIconURL(t.currentUser.userIds.permId, t.userSettings.userIcon));
          this.ra = this.ra.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"));
          this.ra = this.ra.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"));
          this.ra = this.ra.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"));
          this.ra = this.ra.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"));
          this.ra = this.ra.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"));
          this.ra = this.ra.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"));
          this.ra = this.ra.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"));
          this.ra = this.ra.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"));
          this.ra = this.ra.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg"));
        });
      }
      toggleIconContainer() {
        return Jc(this, undefined, undefined, function* () {
          if (this.ko("#chat-icon-container").data("active")) {
            this.ko("#chat-icon-container").data("active", false);
            this.ko("#chat-icon-container").slideUp();
            this.ko(".chat-settings-container").slideUp();
            this.ko("#sidebar-tabs-container").slideDown();
            if (this.wr) {
              this.ko("#chat-history-container").slideDown();
            } else {
              this.ko("#chat-friends-frame").slideDown();
            }
            if (this.ar) {
              this.ko("#chat-ad-holder").show();
            }
            this.ko("#chat-input-container").show();
            this.ko("#reaction-holder").hide();
            this.hideReactionHolder();
            this.ko("#teleparty-blog-container").show();
            this.ko("#presence-indicator").show();
            this.ko("#chat-header-container").removeClass("chat-header-container-active");
          } else {
            const e = yield this.Sr();
            this.ko("#chat-icon-container").data("active", true);
            this.ko(".chat-settings-container").show();
            this.ko("#chat-icon-container").hide();
            this.ko("#chat-link-container").hide();
            this.ko("#chat-history-container").hide();
            this.ko("#sidebar-tabs-container").hide();
            this.ko("#chat-friends-frame").slideUp();
            this.ko("#chat-ad-holder").hide();
            this.ko("#chat-input-container").hide();
            this.ko("#teleparty-blog-container").hide();
            this.ko("#presence-indicator").hide();
            this.ko("#reaction-holder").hide();
            this.ko("#nickname-edit").attr("placeholder", e.userSettings.userNickname ?? "");
            this.ko("#nickname-edit")[0].value = e.userSettings.userNickname ?? "";
          }
        });
      }
      togglePartyTab() {
        this.ko("#friends-tab").toggleClass("sidebar-tab-inactive", true);
        this.ko("#party-tab").toggleClass("sidebar-tab-inactive", false);
        this.ko("#chat-history-container").show();
        this.ko("#chat-friends-frame").slideUp();
        this.ko("#chat-input-container").show();
        this.wr = true;
      }
      toggleFriendsTab() {
        this.ko("#friends-tab").toggleClass("sidebar-tab-inactive", false);
        this.ko("#party-tab").toggleClass("sidebar-tab-inactive", true);
        this.ko("#chat-friends-frame").removeClass("tp-hidden");
        this.ko("#chat-friends-frame").slideDown();
        this.ko("#chat-history-container").slideUp();
        this.ko("#chat-input-container").hide();
        this.wr = false;
      }
      toggleLargeUserIconButton() {
        if (this.ko("#chat-icon-container").data("active")) {
          this.ko("#chat-icon-container").show();
          this.ko(".chat-settings-container").hide();
          this.ko("#chat-header-container").addClass("chat-header-container-active");
        }
      }
      linkIconListener() {
        navigator.clipboard.writeText(this.getPartyUrl());
        this.ko("#link-icon .tooltiptext").text("Link copied");
        setTimeout(() => {
          this.ko("#link-icon .tooltiptext").text("Copy Link");
        }, 1000);
      }
      resetIconListener() {
        if (this.Ys?.videoId) {
          const t = new CustomEvent("YoutubeVideoMessage", {
            detail: {
              type: "jumpToNextEpisode",
              nextVideoId: this.Ys.videoId,
              isShort: window.location.href.includes("/shorts/")
            }
          });
          window.dispatchEvent(t);
        }
      }
      setPartyUrl(t) {
        this.er = t;
      }
      setMessageForwarder(t) {
        this.Ys = t;
      }
      setSessionId(t) {
        this.Vt = t;
      }
      onWebRTC(t) {
        this.queueMessageForFrame(Ii.ON_WEB_RTC, t);
      }
      setSocketConnectionId(t) {
        this.queueMessageForFrame(Ii.SET_CONNECTION_ID, t);
      }
      loadUserList(t) {
        t.forEach(t => {
          if (t.userSettings !== undefined && t.permId !== undefined) {
            const n = t.userSettings;
            const e = this.Ar.getUserIconURL(t.permId, n.userIcon);
            const i = this.Ar.setUserIconFrameForUser(t.permId, n.userIconFrame);
            const s = this.Ar.getUserNickname(t.permId, n.userNickname);
            t.parsedData = {
              userIconUrl: e,
              userNickname: s,
              userIconFrameUrl: i
            };
          }
        });
        this.yr = t;
        this.ko("#user-count").text(t.length);
        this.queueMessageForFrame(Ii.SET_USER_LIST, t);
      }
      setSessionCreated(t) {
        this.Mr = t;
      }
      getSessionCreated() {
        return this.Mr;
      }
      getSessionId() {
        return this.Vt;
      }
      getPartyUrl() {
        return this.er;
      }
      userIconSelectorListener(t) {
        return Jc(this, undefined, undefined, function* () {
          const n = jQuery(t.currentTarget).data("icon");
          if (n) {
            const t = yield Fi.I(new Xa(si, ei, {
              userIcon: n
            }));
            this.queueMessageForFrame(Ii.UPDATE_SETTINGS, {
              userSettings: t.userSettings
            });
            this.ia(this.sa(t.userSettings));
          }
          this.toggleIconContainer();
        });
      }
      removeChat() {
        this.clearUnreadCount();
        this.ko("#chat-container").remove();
        this.ko("#chat-wrapper").remove();
      }
      ia(t, n) {
        Fi.I(t).then(n);
      }
      aa(t) {
        return new Bc(si, ei, {
          reactionType: t
        });
      }
      ua(t) {
        return new Sc(si, ei, {
          gifObject: t
        });
      }
      ca(t) {
        return new Ac(si, ei, {
          body: t
        });
      }
      ha(t) {
        return new kc(si, ei, {
          typing: t
        });
      }
      sa(t) {
        const n = {
          userSettings: {
            userNickname: t.userNickname,
            userIcon: t.userIcon,
            userIconFrame: t.userIconFrame,
            nameColor: t.nameColor,
            badge: t.badge,
            reactions: t.reactions
          }
        };
        return new Ic(si, ei, n);
      }
      la(t) {
        return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
      }
      showReaction(t) {
        if (!this.shouldShowReaction() || this.tr) {
          return;
        }
        const n = t.reactionType;
        const e = this.getReactionContainer();
        if (e) {
          const t = Math.floor(Math.random() * 40) + 40;
          const i = e[0].offsetWidth - (this.shouldAddReactionSpace() ? zo : 0) - t;
          const s = Math.floor(Math.random() * i) + (this.shouldAddReactionSpace() ? zo : 0);
          const o = this.la(n);
          const r = Math.ceil(Math.random() * 3);
          const a = jQuery(`<img class="on-screen-reaction on-screen-reaction-${r}" src='${o}' />`);
          a.css("right", `${s}px`);
          a.css("width", `${t}px`);
          a.css("height", `${t}px`);
          e.append(a);
          setTimeout(() => {
            a.remove();
          }, 5000);
        }
      }
      onReactionClicked(t) {
        console.log(t);
        this.ia(this.aa(t));
        const n = new hr(si, ei, {
          name: "user_click",
          component: {
            name: "chat_input_container-reaction_holder-reaction",
            type: t,
            origin: "tp"
          }
        });
        Fi.I(n);
        const e = new hr(si, ei, {
          eventType: "reaction-" + t,
          sessionId: this.getSessionId()
        });
        Fi.I(e);
      }
      onChatKeyUp(t) {
        t.stopPropagation();
      }
      onChatKeyDown(t) {
        t.stopPropagation();
        this.Er.resetIdleTimer();
      }
      initCustomListeners() {}
      getClientLocale() {
        if (typeof Intl != "undefined") {
          try {
            return Intl.NumberFormat().resolvedOptions().locale;
          } catch (t) {
            console.error("Cannot get locale from Intl");
            this.In("Cannot get locale from Intl", t);
          }
        }
      }
      clickGif(t) {
        console.log("GIF was clicked");
        let n = t.target.id;
        if (isNaN(n)) {
          n = n === "trending" ? "" : n;
          this.fetchGIFs(n);
          this.ko("#gif-search")[0].value = n;
        } else {
          const t = this.cr.find(t => t.id === n);
          if (!t) {
            return;
          }
          const e = {
            id: t.id,
            title: t.title,
            description: t.content_description,
            isSticker: false,
            media: t.media
          };
          this.ia(this.ua(e), () => {
            this.logShare(t.id, this.ko("#gif-search")[0].value);
            const n = {
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
            const e = new hr(si, ei, n);
            Fi.I(e);
            const i = new hr(si, ei, {
              eventType: "gif-share",
              sessionId: this.getSessionId()
            });
            Fi.I(i);
          });
          this.toggleGIFs();
        }
      }
      da(t) {
        const n = document.createElement("video");
        const e = 124 / (t.media.preview.dims[0] / t.media.preview.dims[1]);
        n.autoplay = true;
        n.loop = true;
        n.playsInline = true;
        n.setAttribute("disablePictureInPicture", "");
        n.setAttribute("disableRemotePlayback", "");
        n.src = t.media.preview.url;
        n.muted = true;
        n.id = t.id;
        n.height = e;
        n.className = "gif-img";
        return n;
      }
      pa(t) {
        const n = document.createElement("img");
        const e = 124 / (t.media.previewMobile.dims[0] / t.media.previewMobile.dims[1]);
        n.setAttribute("disablePictureInPicture", "");
        n.setAttribute("disableRemotePlayback", "");
        n.src = t.media.previewMobile.url;
        n.id = t.id;
        n.height = e;
        n.className = "gif-img";
        return n;
      }
      loadGIFs(t) {
        this.ko(".gif-placeholder").remove();
        this.cr.push(...t.results);
        this.ir = t.next;
        t.results.forEach(t => {
          const n = this.shouldUseVideoGIF() ? this.da(t) : this.pa(t);
          (this.ko("#gif-results-left")[0].scrollHeight > this.ko("#gif-results-right")[0].scrollHeight ? this.ko("#gif-results-right")[0] : this.ko("#gif-results-left")[0]).appendChild(n);
        });
        if (this.Xo < 6) {
          this.fa();
        }
        setTimeout(() => {
          this.qo = false;
        }, 100);
      }
      onScrollToBottom(t) {
        return Jc(this, undefined, undefined, function* () {
          const n = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
          if (this.qo) {
            t.preventDefault();
          } else if (this.ir !== "0" && n && this.Xo < 6) {
            this.Xo += 1;
            this.qo = true;
            t.preventDefault();
            const n = yield fetch(`${this.sr}&pos=${this.ir}`);
            const e = yield n.json();
            this.loadGIFs(e);
          }
        });
      }
      resetGif() {
        this.ko("#gif-search")[0].value = "";
        this.ko("#gif-input-back").hide();
        this.ko("#gif-search").css("width", "");
        this.fetchGIFs();
      }
      displayCategories() {
        this.ko("#gif-search")[0].value = "";
        this.ko("#category-container").show();
        this.ko("#gif-results").hide();
        this.ko("#gif-input-back").hide();
        this.ko("#gif-search").css("width", "");
      }
      showCategories() {
        this.ko("#gif-search")[0].value = "";
        this.ko("#gif-input-back").hide();
        this.ko("#gif-search").css("width", "");
        const t = document.createElement("div");
        ["trending", "dance", "annoyed", "omg", "crazy", "shrug", "smile", "awkward", "ew", "surprised", "why", "ouch "].forEach(n => {
          const e = document.createElement("div");
          const i = document.createElement("span");
          i.id = "category-txt";
          i.innerHTML = n;
          e.className = "tp-category-div";
          const s = document.createElement("video");
          s.autoplay = true;
          s.src = "https://media.tenor.com/videos/166d7d5a1be3b0755e7f9e29ebefe2c3/mp4";
          s.className = "category-img";
          s.id = n;
          s.loop = true;
          e.appendChild(i);
          e.appendChild(s);
          t.appendChild(e);
        });
        this.ko("#category-container")[0].innerHTML = t.innerHTML;
      }
      Da() {
        const t = [];
        const n = [];
        for (let e = 0; e < 4; e++) {
          let e = Math.floor(Math.random() * 4) + 1;
          while (n.includes(e)) {
            e = Math.floor(Math.random() * 4) + 1;
          }
          n.push(e);
          const i = document.createElement("div");
          i.className = `gif-placeholder gif-placeholder-${e} gif-img`;
          t.push(i);
        }
        return t;
      }
      fa() {
        return Jc(this, undefined, undefined, function* () {
          this.ko("#gif-results-left")[0].append(...this.Da());
          this.ko("#gif-results-right")[0].append(...this.Da());
        });
      }
      logShare(t, n) {
        return Jc(this, undefined, undefined, function* () {
          const e = this.getClientLocale();
          const i = e ? `&locale=${e}` : "";
          const s = `&id=${t}`;
          const o = n && n.length > 0 ? `q=${n}` : "";
          yield fetch(`${fi}/register-share?${o}${i}${s}`);
        });
      }
      fetchGIFs(t) {
        return Jc(this, undefined, undefined, function* () {
          const n = yield this.getVideoTitle();
          const e = n == null ? undefined : n.replace(/[^\w\s]/g, "");
          this.Xo = 1;
          this.qo = true;
          this.ko("#category-container").hide();
          this.ko("#gif-columns-wrapper").show();
          this.ko("#gif-results-left")[0].innerHTML = "";
          this.ko("#gif-results-right")[0].innerHTML = "";
          this.cr = [];
          this.fa();
          const i = this.getClientLocale();
          const s = i ? `&locale=${i}` : "";
          let o = e ? `search-gifs?q=${e}` : "trending-gifs?";
          o = t ? `search-gifs?q=${t}` : o;
          this.sr = `${fi}/${o}${s}`;
          const r = yield fetch(`${fi}/${o}${s}`);
          const a = yield r.json();
          if (a.results && a.results.length > 0) {
            this.loadGIFs(a);
          } else if (!t) {
            const t = yield fetch(`${fi}/trending_gifs?${s}`);
            this.sr = `${fi}/trending_gifs?${s}`;
            const n = yield t.json();
            this.loadGIFs(n);
          }
        });
      }
      onGifSearch(t) {
        t.stopPropagation();
        const n = t.target.value;
        if (this.Br !== undefined) {
          clearTimeout(this.Br);
        }
        if (!n) {
          this.ko("#gif-input-back").hide();
          this.ko("#gif-search").css("width", "");
          this.fetchGIFs();
          return;
        }
        this.ko("#gif-input-back").show();
        this.ko("#gif-search").css("width", "90%");
        this.Br = setTimeout(() => {
          this.fetchGIFs(n);
        }, 500);
      }
      va(t) {
        return typeof t == "string" && t.replace(/^\s+|\s+$/g, "") !== "";
      }
      onChatKeyPress(t) {
        t.stopPropagation();
        if (t.key !== "Enter" || t.shiftKey) {
          if (this.Ir === undefined) {
            this.ia(this.ha(true));
          } else {
            clearTimeout(this.Ir);
          }
          this.Ir = setTimeout(() => {
            this.Ir = undefined;
            this.ia(this.ha(false));
          }, 500);
        } else {
          if (!this.ko("#emoji-picker-container").is(":hidden")) {
            this.toggleEmojiClicker();
          }
          const n = this.ko("#chat-input");
          const e = n[0].textContent;
          if (e && this.va(e)) {
            if (this.Ir !== undefined) {
              clearTimeout(this.Ir);
              this.Ir = undefined;
              this.ia(this.ha(false));
            }
            n.prop("contenteditable", false);
            this.ia(this.ca(e.substring(0, 1500)), () => {
              n[0].textContent = "";
              n.prop("contenteditable", true);
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
                    return Oc();
                  } catch (t) {
                    return "";
                  }
                }(),
                text: e.trim()
              }
            };
            const i = new hr(si, ei, t);
            Fi.I(i);
          } else {
            t.stopImmediatePropagation();
            t.preventDefault();
            n[0].textContent = "";
            this.onInputChange();
          }
        }
      }
      onInputChange() {
        const t = this.ko("#chat-input");
        if (t.length > 0) {
          const n = t[0].textContent;
          if (n && this.shouldShowIncreasedSize(n)) {
            t.addClass("tp-emoji-large");
          } else {
            t.removeClass("tp-emoji-large");
          }
        }
        if (this.ko("#emoji-picker-container").css("bottom").length > 0) {
          if (!this.ko("#emoji-picker-container").is(":hidden")) {
            this.showEmojiPicker();
          }
        }
      }
      shouldShowIncreasedSize(t) {
        const n = t.replace(yi, "").replace(/[\uFE0F]/g, "");
        const e = ((t || "").match(yi) || []).length;
        return n.length === 0 && e <= 3 && e > 0;
      }
      saveChangesListener() {
        return Jc(this, undefined, undefined, function* () {
          const t = this.ko("#nickname-edit").val().slice(0, 25).replace(/^\s+|\s+$/g, "");
          if (t !== (yield this.Sr()).userSettings.userNickname) {
            const n = yield Fi.I(new Xa(si, ei, {
              userNickname: t
            }));
            this.queueMessageForFrame(Ii.UPDATE_SETTINGS, {
              userSettings: n.userSettings
            });
            this.ia(this.sa(n.userSettings));
            this.ko("#nickname-edit").attr("placeholder", t);
            this.ko("#nickname-edit").text(t);
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
        Object.keys(ma).forEach(t => {
          if (ba[t]()) {
            const n = ma[t];
            const e = jQuery("\n                <ul id=\"icon-holder\"></ul>\n            ");
            for (const i of n) {
              this.ga(`${t}/${i}`, e, i);
            }
            const i = jQuery(`\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `);
            e.appendTo(i);
            i.appendTo(this.ko("#icon-holder-template"));
          }
        }, this);
      }
      inputHeightCheck() {
        const t = this.ko("#chat-input").text();
        const n = ((t || "").match(yi) || []).length;
        const e = t.replace(yi, "");
        if (n <= 3 || e) {
          this.ko(".inTextEmoji").css("font-size", "24px");
        } else if (n > 0) {
          this.ko(".inTextEmoji").css("font-size", "20px");
        } else {
          this.ko(".inTextEmoji").css("font-size", "18px");
        }
      }
      ga(t, n, e) {
        jQuery(`\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL("img/icons/" + t)}' data-tp-id="chat_container-new_icon_selection-${e}">\n            </a>\n        `).appendTo(n).data("icon", t);
      }
    }
    function qc(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Xc extends Kc {
      constructor(t) {
        super();
        this.W = t;
        this.ma = "\n\n            .with-chat-video {\n                object-fit: contain !important;\n            }\n\n            .with-fullscreen {\n                width: 99% !important;\n                top: 0px !important;\n                left: 50% !important;\n                transform: translateX(-50%);\n                position: relative !important;\n            }\n\n            .with-chat-thumbnail {\n                position: initial !important;\n            }\n\n            .with-vertical-center{\n                top: 50% !important;\n                transform: translateY(-50%);\n            }\n\n            .with-chat-ads {\n                right: 341px !important;\n            }\n\n            .fullscreen-clip {\n                transform: translateX(169px) !important;\n            }\n\n            .video-stream-full{\n                height: auto !important;\n            }\n\n            .with-video-stream {\n                left: 0px !important;\n            }\n\n            .bottom-with-chat {\n                width: 96% !important;\n            }\n\n            ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {\n                position: relative !important;\n            }\n\n            .yt-lockup-view-model-wiz__content-image {\n                width: unset !important;\n            }\n\n            .reel-item-endpoint {\n                width: unset !important;\n            }\n\n            #logo-icon {\n                display: initial !important\n            }\n\n            .with-absolute {\n              position: absolute !important\n            }\n            \n            .with-fixed {\n                position: fixed !important;\n            }\n\n            .yt-lockup-view-model__content-image,\n            .ytLockupViewModelContentImage { // fixes homepage thumbnails\n                display: flex;\n                flex-direction: inherit;\n                width: 100%;\n            }\n\n            ytd-rich-grid-renderer {\n                align-items: flex-start !important;\n            }\n        \n            .ytd-two-column-browse-results-renderer {\n                left: unset !important;\n                width: unset !important;\n            }\n\n            .ytdMiniplayerComponentHost {\n                z-index: 9999999999;\n            }\n        ";
        this.wa = this.ya();
      }
      getReactionContainer() {
        if (this.W.getVideoType() === _r.EXTRA) {
          return jQuery(Xc.TV_WRAPPER_SELECTOR);
        } else {
          return jQuery(Xc.VIDEO_WRAPPER_SELECTOR).parent();
        }
      }
      onFullScreenChatVisible() {
        console.log("onFullScreenChatVisible");
        console.log(document.fullscreenElement);
        const n = document.querySelector(".ytp-tooltip-text-wrapper")?.parentElement;
        const e = document.querySelector(".ytp-tooltip-title");
        jQuery(".video-stream").addClass("video-stream-full");
        if (n) {
          n.style.transform = "translateX(-155px)";
        }
        if (e) {
          e.style.transform = "translateX(-155px)";
        }
        const i = document.querySelector("#chat-wrapper");
        if (i) {
          i.style.transform = "translateX(-14px)";
        }
        const s = document.querySelector("#tp-chat-close-button");
        if (s) {
          s.style.transform = "translateX(-14px)";
        }
      }
      onExitFullScreen() {
        const n = document.querySelector(".ytp-tooltip-text-wrapper")?.parentElement;
        jQuery(".video-stream").removeClass("video-stream-full");
        if (n) {
          n.style.transform = "";
        }
        const e = document.querySelector("#chat-wrapper");
        if (e) {
          e.style.transform = "";
        }
        const i = document.querySelector("#tp-chat-close-button");
        if (i) {
          i.style.transform = "";
        }
        const s = document.querySelector(".ytp-tooltip-title");
        if (s) {
          s.style.transform = "";
        }
      }
      onFullScreenChange() {
        return qc(this, undefined, undefined, function* () {
          if (document.fullscreenElement && this.getChatVisible() && this.wa !== Xc.TV_WRAPPER_SELECTOR) {
            this.onFullScreenChatVisible();
          } else if (this.wa !== Xc.TV_WRAPPER_SELECTOR) {
            this.onExitFullScreen();
          }
        });
      }
      ba(t) {
        return t === _r.FEATURE || t === _r.LIVE;
      }
      Ca() {
        var t;
        this.wa = this.ya();
        const n = this.W.getVideoType();
        const e = document.querySelector("#contents");
        this.Fa(e, false);
        if (this.ba(n)) {
          jQuery(".video-stream").addClass("with-fullscreen");
          jQuery(".html5-video-container").addClass("with-vertical-center");
          if (document.fullscreenElement) {
            this.onFullScreenChatVisible();
          }
          jQuery(".ytp-fit-cover-video, .html5-main-video").addClass(Yo);
          jQuery(this.wa).addClass([Qo, "with-absolute"]);
        } else if (n === _r.SHORTS) {
          jQuery("#masthead-container.ytd-app").addClass([Qo, "with-absolute"]);
          jQuery("#shorts-container").addClass([Qo, "with-absolute"]);
        } else if (n === _r.EXTRA) {
          document.querySelector(".video-stream").style.width = "auto";
          jQuery(".video-stream").addClass([Qo, "with-absolute", "video-element-tp"]);
          jQuery("ytu-player-controller.ytu-app").addClass([Qo, "with-absolute"]);
          jQuery("ytu-player-controls").addClass([Qo, "with-absolute"]);
          if ((t = jQuery(".ypl-nav-bar")) !== null && t !== undefined) {
            t.addClass("ypl-nav-bar-tp");
          }
        } else {
          if (n !== _r.NONE) {
            throw new Error("Page not recognized");
          }
          Ye(() => !!jQuery("#contents.ytd-section-list-renderer") && !!jQuery("#secondary.ytd-two-column-browse-results-renderer") && !!jQuery("ytd-rich-grid-renderer"), Infinity)().then(() => {
            jQuery("#masthead-container.ytd-app").addClass([Qo, "with-fixed"]);
            jQuery("#contents.ytd-section-list-renderer").addClass([Qo]);
            jQuery("ytd-rich-grid-renderer").addClass([Qo]);
            jQuery("#secondary.ytd-two-column-browse-results-renderer").addClass(Wo);
            const t = document.querySelector("#contents");
            this.Fa(t, true);
          });
        }
        jQuery("ytd-miniplayer").addClass(Wo);
      }
      Fa(t, n) {
        if (t && t.style) {
          t.style.width = n ? "calc(100% - 338px)" : "98%";
        }
      }
      _a() {
        var t;
        jQuery(".video-stream").removeClass("with-video-stream with-fullscreen");
        jQuery(".ytp-chrome-bottom").removeClass("bottom-with-chat");
        jQuery(".ytp-chrome-top").removeClass([Qo, "with-absolute"]);
        jQuery(".video-stream").removeClass("with-video-stream");
        jQuery(".video-stream").removeClass([Qo, "with-absolute", "video-element-tp"]);
        jQuery(".ytp-fit-cover-video, .html5-main-video").removeClass(Yo);
        jQuery(".ytp-ad-preview-container").removeClass(Wo);
        jQuery(".ytp-ad-skip-button-container").removeClass(Wo);
        jQuery(this.wa).removeClass([Qo, "with-absolute"]);
        jQuery("#masthead-container.ytd-app").removeClass([Qo, "with-absolute", "with-fixed"]);
        jQuery("#shorts-container").removeClass([Qo, "with-absolute"]);
        jQuery("#contents.ytd-section-list-renderer").removeClass([Qo, "with-absolute"]);
        jQuery("ytd-rich-grid-renderer").removeClass([Qo, "with-absolute"]);
        jQuery("#secondary.ytd-two-column-browse-results-renderer").removeClass(Wo);
        jQuery("ytd-miniplayer").removeClass(Wo);
        jQuery(".html5-video-container").removeClass("with-vertical-center");
        jQuery("#id-tv-container").removeClass([Qo, "with-absolute"]);
        jQuery("ytu-player-controller.ytu-app").removeClass([Qo, "with-absolute"]);
        jQuery("ytu-player-controls").removeClass([Qo, "with-absolute"]);
        if ((t = jQuery(".ypl-nav-bar")) !== null && t !== undefined) {
          t.removeClass("ypl-nav-bar-tp");
        }
        const n = document.querySelector("#contents");
        this.Fa(n, false);
        this.onExitFullScreen();
      }
      Ea() {
        const t = document.querySelector("ytd-watch-flexy");
        const n = document.querySelector(".ytp-size-button");
        if (t) {
          try {
            if (typeof t.set == "function") {
              t.set("theater", false);
              t.set("panelExpanded", false);
            } else {
              t.theater = false;
              t.panelExpanded = false;
            }
          } catch (t) {}
        }
        if (n) {
          n.style.display = "";
          if (t && (t.theater === true || t.hasAttribute("theater"))) {
            n.click();
          }
        }
        const e = document.querySelector("button[aria-label=\"Hide chat\"][aria-pressed=\"true\"]");
        if (e) {
          e.click();
        }
        window.dispatchEvent(new CustomEvent("YoutubeVideoMessage", {
          detail: {
            type: "SetChatVisible",
            visible: false
          }
        }));
      }
      teardown() {
        super.teardown();
        this.Ea();
      }
      ya() {
        const t = this.W.getVideoType();
        if (this.ba(t)) {
          return Xc.VIDEO_WRAPPER_SELECTOR;
        }
        if (t === _r.SHORTS) {
          return Xc.SHORTS_WRAPPER_SELECTOR;
        }
        if (t === _r.NONE) {
          return Xc.NON_PAGE_WRAPPER_SELECTOR;
        }
        if (t === _r.EXTRA) {
          return Xc.TV_WRAPPER_SELECTOR;
        }
        throw new Error("Page not recognized");
      }
      Vr() {
        if (this.ra) {
          const t = this.W.getVideoType();
          if (this.ba(t)) {
            this.W.setTheater();
            this.xa(this.ra);
          } else if (t === _r.SHORTS) {
            this.ka(this.ra);
          } else if (t === _r.NONE) {
            this.Aa(this.ra);
          } else {
            if (t !== _r.EXTRA) {
              throw new Error("Page not recognized");
            }
            this.Ia(this.ra);
          }
        }
      }
      Aa(t) {
        const n = Fc(t, this.ma);
        const e = jQuery(Xc.NON_PAGE_WRAPPER_SELECTOR);
        if (e.length) {
          e.before(n);
        } else {
          jQuery(document.body).prepend(n);
        }
      }
      xa(t) {
        jQuery(Xc.VIDEO_WRAPPER_SELECTOR).after(Fc(t, this.ma + "\n        #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n            position: absolute !important;\n            z-index: 999 !important;\n        }\n            \n        .yt-lockup-view-model-wiz__content-image {\n            width: 168px !important;\n        }"));
      }
      Ia(t) {
        jQuery(Xc.TV_WRAPPER_SELECTOR).prepend(Fc(t, this.ma + "\n        #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n            position: absolute !important;\n            z-index: 999 !important;\n        }\n        .with-absolute {\n              position: unset !important\n        }    \n        .video-element-tp {\n            height: 100vh !important;\n            width: calc(100% - 338px) !important;\n            object-fit: contain !important;\n        }\n\n        .ypl-nav-bar-tp {\n            width: calc(100% - 338px) !important;\n        }\n        "));
      }
      ka(t) {
        jQuery(Xc.SHORTS_WRAPPER_SELECTOR).prepend(Fc(t, this.ma));
      }
      getChatVisible() {
        return jQuery("#chat-wrapper").is(":visible");
      }
      setChatVisible(t, n = true) {
        const e = Object.create(null, {
          setChatVisible: {
            get: () => super.setChatVisible
          }
        });
        return qc(this, undefined, undefined, function* () {
          try {
            yield e.setChatVisible.call(this, t, n);
          } catch (t) {
            return;
          }
          const i = new CustomEvent("YoutubeVideoMessage", {
            detail: {
              type: "SetChatVisible",
              visible: t
            }
          });
          if (t) {
            jQuery("#chat-wrapper").show();
            if (!document.hasFocus()) {
              this.clearUnreadCount();
            }
            yield this.Ca();
          } else {
            jQuery("#chat-wrapper").hide();
            this._a();
          }
          if (!this.W.isPlayerPage()) {
            if (document.scrollingElement) {
              document.scrollingElement.scrollTop += 1;
              document.scrollingElement.scrollTop -= 1;
            }
          }
          window.dispatchEvent(i);
        });
      }
      getVideoTitle() {
        return qc(this, undefined, undefined, function* () {
          if (!this.W.isWatchPage()) {
            return "";
          }
          if (this.W.getRawVideoElement()) {
            return yield this.W.getVideoTitleAsync();
          }
          throw new Error(Li);
        });
      }
      shouldAddReactionSpace() {
        return this.getChatVisible();
      }
      shouldShowReaction() {
        return !this.W.isWatchingAds() && this.W.isWatchPage();
      }
      shouldUseVideoGIF() {
        return true;
      }
    }
    Xc.VIDEO_WRAPPER_SELECTOR = "#ytd-player";
    Xc.SHORTS_WRAPPER_SELECTOR = "ytd-app";
    Xc.NON_PAGE_WRAPPER_SELECTOR = "ytd-app";
    Xc.TV_WRAPPER_SELECTOR = "#id-tv-container";
    var th = e(7076);
    var nh = e.n(th);
    class eh {
      constructor(t, n) {
        this.isBrowsing = false;
        this.needsCSPBlock = false;
        this.id = n;
        this.videoId;
        this.url = t;
        const e = [Qi];
        for (const n of Io) {
          if (n.isValidUrl(this.url)) {
            this.streamingService = n;
            this.serviceName = n.name;
            this.videoId = n.getVideoId(t);
            if (e.includes(n)) {
              this.needsCSPBlock = true;
            }
            break;
          }
          if (n.isBrowsing(this.url)) {
            this.isBrowsing = true;
            this.streamingService = n;
            this.serviceName = n.name;
            if (e.includes(n)) {
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
    function ih(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class sh {
      constructor(t, n) {
        this.Ba = false;
        this.Sa = false;
        this.ja = false;
        this.It = false;
        this.$a = 0;
        this.Ta = false;
        this.Pa = false;
        this.Ma = false;
        this.La = false;
        this.checkShowMenu = () => {
          const t = this.shouldMenuBeVisible();
          if (t != this.La) {
            this.La = t;
            this.Ra.forEach(n => n(t));
          }
          if (t && !this.Oa.getChatVisible()) {
            this.Va();
          } else {
            this.Ua();
          }
        };
        console.log("Teleparty Browse Loaded " + window.teleparty?.tabId);
        this.Ha = new eh(new URL(window.location.href), window.teleparty?.tabId ?? 0);
        this.Oa = t;
        this.Oa.setPageControls(this);
        this.Ra = [];
        this.ko = Zc(n || "");
      }
      setChatApi(t) {
        this.Oa = t;
        this.Oa.setPageControls(this);
      }
      registerMenuStateChangeCallback(t) {
        this.Ra.push(t);
      }
      getReactionsDisabled() {
        return this.It;
      }
      Na() {
        this.ko("#tp-control-lock-button .tooltiptext").text(this.ja ? "Only I have control" : "Everyone has control");
        if (this.ja) {
          this.ko("#tp-unlocked-image").addClass("tp-hidden");
          this.ko("#tp-locked-image").removeClass("tp-hidden");
        } else {
          this.ko("#tp-unlocked-image").removeClass("tp-hidden");
          this.ko("#tp-locked-image").addClass("tp-hidden");
        }
      }
      Ga() {
        if (!this.Sa) {
          this.ja = !this.ja;
          this.Na();
        }
      }
      setResetChatButton() {
        if (this.Oa.getChatWindowVisible()) {
          this.ko("#tp-chat-button .tooltiptext").text("Reset View");
          if (this.Oa.shouldReturnToVideo) {
            this.ko("#tp-chat-button .tooltiptext").text("Return to Video");
          }
          this.ko("#tp-chat-reset").removeClass("tp-hidden");
          this.ko("#tp-chat-gray").addClass("tp-hidden");
          this.ko("#tp-chat-button .tp-hover-image").addClass("tp-hidden");
          this.ko("#tp-chat-hidden").addClass("tp-hidden");
        } else {
          this.ko("#tp-chat-button .tooltiptext").text("Open Chat");
          this.ko("#tp-chat-reset").addClass("tp-hidden");
          this.ko("#tp-chat-gray").removeClass("tp-hidden");
          this.ko("#tp-chat-button .tp-hover-image").removeClass("tp-hidden");
          this.ko("#tp-chat-hidden").removeClass("tp-hidden");
        }
      }
      za() {
        this.ko("#tp-chat-hidden").addClass("tp-hidden");
        if (this.Oa.isPartyWindowsActive()) {
          this.setResetChatButton();
          this.ko("#tp-message-indicator").removeClass("tp-hidden");
        } else {
          this.ko("#tp-message-indicator").removeClass("tp-hidden");
          this.ko("#tp-chat-button .tooltiptext").text(`${this.$a} unread ${this.$a == 1 ? "message" : "messages"}`);
          this.ko("#tp-chat-gray").removeClass("tp-hidden");
          this.ko("#tp-chat-reset").addClass("tp-hidden");
          this.ko("#tp-chat-button .tp-hover-image").removeClass("tp-hidden");
        }
      }
      hideMessageIndicator() {
        this.ko("#tp-message-indicator").addClass("tp-hidden");
        if (this.Oa.isPartyWindowsActive()) {
          this.setResetChatButton();
        } else {
          this.ko("#tp-chat-button .tp-hover-image").removeClass("tp-hidden");
          this.ko("#tp-chat-button .tooltiptext").text("Show chat");
          this.ko("#tp-chat-gray").addClass("tp-hidden");
          this.ko("#tp-chat-hidden").removeClass("tp-hidden");
          this.ko("#tp-chat-reset").addClass("tp-hidden");
        }
      }
      onChatMessage() {
        if (!this.Oa.shouldChatBeVisible() && !this.Oa.isPartyWindowsActive()) {
          this.$a++;
          this.za();
          this.Ta = true;
          this.Va();
          We(1000)().then(() => {
            this.Ta = false;
          });
        }
      }
      teardown() {
        this.Za();
        this.Ua();
        this.stopEventListener();
      }
      enablePartyIcons() {
        this.hideError();
        this.ko("#tp-party-active").removeClass("tp-hidden");
        this.ko("#tp-party-inactive").addClass("tp-hidden");
        this.ko("#tp-icon-container .tooltiptext").addClass("tp-hidden");
        this.ko("#tp-icon-container").attr("style", "cursor: auto");
      }
      Za() {
        this.ko("#tp-party-active").addClass("tp-hidden");
        this.ko("#tp-party-inactive").removeClass("tp-hidden");
        this.ko("#tp-icon-container .tooltiptext").html("Open Teleparty");
        this.ko("#tp-icon-container").removeClass("play-chat-active");
        this.ko("#play-chat-icon").addClass("tp-hidden");
        this.ko("#tp-icon-white").removeClass("tp-hidden");
      }
      hideError() {
        this.ko("#tp-error-box").addClass("tp-hidden");
      }
      Qa(t) {
        return t.replace(/{EXTENSION_LOGO_WHITE}/g, ya(chrome.runtime.getURL("img/icon_white.svg"))).replace(/{EXTENSION_LOGO_GRADIENT}/g, ya(chrome.runtime.getURL("img/icon_gradient.svg"))).replace(/{PLAY_IMAGE}/g, ya(chrome.runtime.getURL("img/play.svg"))).replace(/{UNLOCKED_IMAGE}/g, ya(chrome.runtime.getURL("img/icon_remote_inactive.svg"))).replace(/{LOCKED_IMAGE}/g, ya(chrome.runtime.getURL("img/icon_remote_active.svg"))).replace(/{ARROW_RIGHT}/g, ya(chrome.runtime.getURL("img/arrow-right.svg"))).replace(/{LINK_IMAGE}/g, ya(chrome.runtime.getURL("img/icon_link_inactive.svg"))).replace(/{LINK_ACTIVE_IMAGE}/g, ya(chrome.runtime.getURL("img/icon_link_active.svg"))).replace(/{CHAT_HIDDEN_IMAGE}/g, ya(chrome.runtime.getURL("img/icon_chat_inactive.svg"))).replace(/{CHAT_GRAY_IMAGE}/g, ya(chrome.runtime.getURL("img/icon_chatgray_active.svg"))).replace(/{CHAT_ACTIVE_IMAGE}/g, ya(chrome.runtime.getURL("img/icon_chat_active.svg"))).replace(/{DISCONNECT_IMAGE}/g, ya(chrome.runtime.getURL("img/icon_logout_active.svg"))).replace(/{RESET_CHAT_IMAGE}/g, ya(chrome.runtime.getURL("img/reset_chat.svg")));
      }
      Ua() {
        if (!this.Ta) {
          this.hideError();
          this.ko("#tpIconContainer").addClass("tp-hidden");
        }
      }
      Va() {
        return ih(this, undefined, undefined, function* () {
          if (!this.Pa && (this.Ma || this.Oa.inSession)) {
            this.Pa = true;
            try {
              yield this.addTpIcon();
              if (this.Oa.inSession) {
                this.enablePartyIcons();
              } else {
                this.Za();
              }
              this.ko("#tpIconContainer").removeClass("tp-hidden");
              this.setChatButtons();
            } finally {
              this.Pa = false;
            }
          }
        });
      }
      startEventListener() {
        this.stopEventListener();
        this.Wa = setInterval(this.checkShowMenu, 200);
      }
      stopEventListener() {
        if (this.Wa) {
          clearInterval(this.Wa);
          this.Wa = undefined;
        }
      }
      Ya() {
        return "100px";
      }
      Ja() {
        this.ko("#tp-buttons-container").attr("style", `top:${this.Ya()}`);
        this.ko("#tp-chat-close-button").attr("style", `top:${this.Ya()}`);
        this.ko("#tp-error-box").attr("style", `top:${this.Ya()}`);
      }
      addTpIcon() {
        return ih(this, undefined, undefined, function* () {
          if ((this.Ma || this.Oa.inSession) && this.ko("#tpIconContainer").length === 0) {
            const t = this.Qa(nh());
            const n = yield this.getControlsRoot();
            if (n.length > 0) {
              n.append(function (t, n = "") {
                return `\n    ${n ? `<style tpInjected data-tp-overlay-css="1">${n}</style>` : `<link tpInjected data-tp-overlay-css="1" rel="stylesheet" href="${chrome.runtime.getURL("css/overlay.css")}">`}\n    ${t}\n  `;
              }(t, "/* ID+class must beat #tp-buttons-container { display: flex !important }, or\n * icons stay visible / flash unstyled at the top before hide wins. */\n#tpIconContainer.tp-hidden,\n#tp-buttons-container.tp-hidden,\n#tp-chat-close-button.tp-hidden,\n#tp-error-box.tp-hidden,\n#tp-party-active.tp-hidden,\n#tp-message-indicator.tp-hidden,\n#play-chat-icon.tp-hidden,\n#tp-chat-reset.tp-hidden,\n#tp-chat-gray.tp-hidden,\n#tp-chat-hidden.tp-hidden,\n#tp-unlocked-image.tp-hidden,\n#tp-locked-image.tp-hidden,\n.tp-hidden,\n[tpInjected] .hidden {\n    display: none !important;\n}\n\n#tpIconContainer .slider,\n#tp-buttons-container .slider {\n    padding: 0% !important;\n}\n\n#tp-friend-iframe {\n    display: block;\n    background-color: var(--base-black);\n    border-radius: 4px;\n    padding: 20px;\n    right: 60px;\n    top: 0px;\n    border: none;\n    height: 550px;\n    width: 332px;\n    position: absolute;\n    z-index: 99999999999999999;\n}\n\n.tp-seperator {\n    border: 1px solid var(--black-20);\n    border-radius: 1px;\n    width: 40px;\n    height: 0px;\n}\n\n#tp-controls-error-text {\n    color: var(--white-5);\n    text-align: center;\n    padding: 5px;\n}\n\n#tp-error-box {\n    width: 170px;\n    height: 60px;\n    z-index: 9999;\n    position: fixed;\n    right: 80px;\n    top: 50px;\n    /* box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25); */\n    -webkit-backdrop-filter: blur(6px);\n    border-radius: 4px;\n    background-color: rgba(25, 25, 25, 0.7);\n    transition: transform 1s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#tp-buttons-container {\n    width: 50px;\n    z-index: 9999;\n    position: fixed;\n    right: 30px;\n    top: 50px;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: transform 1s;\n    display: flex !important;\n    flex-direction: column;\n    align-items: center;\n}\n\n.play-chat-active {\n    background: none !important;\n}\n\n.play-chat-active:hover {\n    background: var(--black-20) !important;\n}\n\n#tp-icon-container {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n    display: flex !important;\n    border-radius: 4.8px;\n    justify-content: center;\n    align-items: center;\n}\n\n.tp-center-image {\n    position: absolute;\n}\n\n.tooltip-holder {\n    position: relative;\n}\n\n.tooltip-holder:hover .tooltiptext {\n    visibility: visible;\n}\n\n#tp-icon-container:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tp-control-button:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tp-control-button:hover .tp-button-image {\n    visibility: hidden;\n}\n\n.tp-hover-image {\n    visibility: hidden;\n}\n\n.tp-control-button:hover .tp-hover-image {\n    visibility: visible;\n}\n\n.tp-control-button:hover {\n    background-color: var(--black-20);\n}\n\n#tp-message-indicator {\n    background: linear-gradient(135deg, #e34248 0%, #bc4d7a 56.67%, #9e55a0 100%);\n    width: 10px;\n    height: 10px;\n    border-radius: 10px;\n    position: absolute;\n    top: 10px;\n    right: 12px;\n}\n\n#tp-chat-close-button {\n    position: fixed;\n    width: 30px;\n    height: 30px;\n    right: calc(var(--chatWidth) + 5px);\n    top: 113px;\n    z-index: 9999;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 26.4px;\n}\n\n#tp-chat-close-button img {\n    width: 22px;\n    height: 22px;\n}\n\n.tooltiptext {\n    visibility: hidden;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 4px;\n    color: white !important;\n    font-size: 14px !important;\n    text-align: center;\n    vertical-align: center;\n    height: 40px;\n    padding: 5px 0;\n    border-radius: 4px;\n    position: absolute;\n    right: calc(105% + 5px);\n    align-items: center;\n    justify-content: center;\n    display: inline-flex;\n}\n\n.tooltiptext-lower {\n    right: 0px;\n    top: calc(100%);\n}\n\n.tp-control-button {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border-radius: 4px;\n}\n\n.tp-control-button img {\n    width: 16px;\n    height: 16px;\n}\n\n#tp-icon-white {\n    width: 16px;\n    height: 16px;\n}\n\n.createPartyContainer {\n    z-index: 9999;\n    right: 0px;\n    top: var(--containerTop);\n    position: fixed;\n    display: block;\n    background: var(--base-black);\n    width: 332px;\n    height: var(--containerHeight);\n    padding: 20px;\n    border-radius: 4px;\n}\n\n.buttonContainerVisible {\n    animation: goToContainer 0.6s;\n    animation-fill-mode: forwards;\n}\n\n.tpButtonHover {\n    animation: buttonHover 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.tpButtonOut {\n    animation: hoverOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.buttonContainerOut {\n    animation: buttonContainerOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.containerIn {\n    animation: containerIn 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.containerOut {\n    animation: containerOut 0.5s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes goToContainer {\n    0% {\n        border-radius: 50%;\n        background-color: black;\n    }\n    100% {\n        opacity: 1;\n        top: calc(var(--containerTop) + 75px);\n        right: var(--containerWidth);\n        border-top-left-radius: 50%;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 50%;\n        background-color: var(--base-black);\n    }\n}\n\n@keyframes containerIn {\n    0% {\n        right: -400px;\n    }\n    100% {\n        right: 0px;\n    }\n}\n\n@keyframes containerOut {\n    0% {\n        right: 0px;\n    }\n    100% {\n        right: -400px;\n    }\n}\n\n@keyframes buttonContainerOut {\n    0% {\n        opacity: 1;\n        top: calc(var(--containerTop) + 75px);\n        right: var(--containerWidth);\n        border-top-left-radius: 50%;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 50%;\n        background-color: var(--base-black);\n    }\n    100% {\n        opacity: 0.2;\n        right: var(--outRight);\n        border-radius: 50%;\n        background-color: black;\n    }\n}\n\n@keyframes buttonHover {\n    0% {\n    }\n    100% {\n        opacity: 1;\n        right: 0px;\n    }\n}\n\n@keyframes hoverOut {\n    0% {\n        opacity: 1;\n        right: 0px;\n    }\n    100% {\n        opacity: 0.2;\n        right: var(--outRight);\n    }\n}\n\n@import \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap\";\n\n/*\n * overlay.css is injected into the host page with the TP icon. Keep resets scoped\n * so streaming-site controls (YouTube buttons/sliders) are not reset globally.\n */\n#tpIconContainer,\n#tp-error-box {\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n#tpIconContainer *,\n#tp-error-box * {\n    box-sizing: border-box;\n}\n#tpIconContainer :is(h1, h2, h3, h4, h5, h6, a, p, ul, li, ol, button),\n#tp-error-box :is(h1, h2, h3, h4, h5, h6, a, p, ul, li, ol, button) {\n    padding: 0em;\n    margin: 0em;\n}\n#tpIconContainer :is(ul, li, ol, a),\n#tp-error-box :is(ul, li, ol, a) {\n    text-decoration: none;\n    list-style: none;\n}\n#tpIconContainer :is(input, button),\n#tp-error-box :is(input, button) {\n    border: none;\n}\n#tpIconContainer :is(h1, h2, h3, h4, h5, h6, p, span),\n#tp-error-box :is(h1, h2, h3, h4, h5, h6, p, span) {\n    user-select: text !important;\n    cursor: auto !important;\n}\n#tpIconContainer img,\n#tp-error-box img {\n    user-select: none !important;\n}\n#tpIconContainer :is(div, section, button, input, form, article),\n#tp-error-box :is(div, section, button, input, form, article) {\n    outline: none;\n}\n#tpIconContainer a,\n#tp-error-box a {\n    display: inline;\n    /* width: fit-content; */\n}\n#tpIconContainer :is(button, input, form, fieldset),\n#tp-error-box :is(button, input, form, fieldset) {\n    background: none;\n}\n#tpIconContainer button:hover,\n#tp-error-box button:hover {\n    cursor: pointer;\n}\n.r-m {\n    margin: 0 !important;\n}\n.r-m-t {\n    margin-top: 0 !important;\n}\n.r-p-t {\n    padding-top: 0 !important;\n}\n.r-m-l {\n    margin-left: 0 !important;\n}\n.r-p-l {\n    padding-left: 0 !important;\n}\n.r-m-r {\n    margin-right: 0 !important;\n}\n.r-p-r {\n    padding-right: 0 !important;\n}\n.r-m-b {\n    margin-bottom: 0 !important;\n}\n.r-p-b {\n    padding-bottom: 0 !important;\n}\n.r-b-r {\n    border-radius: 0px !important;\n}\n.r-boxshadow {\n    box-shadow: none !important;\n}\n:root {\n    --outRight: -25px;\n    --containerTop: calc(50% - var(--containerHalf));\n    --containerHeight: 205px;\n    --containerHalf: 102.5px;\n    --chatWidth: 340px;\n    --gradient-1: linear-gradient(135deg, #e34248 0%, #bc4d7a 56.67%, #9e55a0 100%);\n    --patreon: #f96854;\n    --base-red: #ef3e3a;\n    --active-red: #ea0f0a;\n    --base-blue: #4da9ff;\n    --base-orange: #ff8d4c;\n    --base-green: #24d154;\n    --base-white: #fafafa;\n    --white-5: #f0f0f0;\n    --white-10: #dcdcdc;\n    --white-15: #c8c8c8;\n    --white-20: #b4b4b4;\n    --white-25: #a0a0a0;\n    --white-30: #8c8c8c;\n    --white-35: #787878;\n    --base-black: #191919;\n    --black-5: #5a5a5a;\n    --black-10: #464646;\n    --black-15: #323232;\n    --black-20: #282828;\n    --black-25: #1e1e1e;\n    --black-30: #0a0a0a;\n}\n.base-white-bg {\n    background-color: var(--base-white);\n}\n.white-5-bg {\n    background-color: var(--white-5);\n}\n.white-10-bg {\n    background-color: var(--white-10);\n}\n.white-15-bg {\n    background-color: var(--white-15);\n}\n.white-20-bg {\n    background-color: var(--white-20);\n}\n.white-25-bg {\n    background-color: var(--white-25);\n}\n.white-30-bg {\n    background-color: var(--white-30);\n}\n.white-35-bg {\n    background-color: var(--white-35);\n}\n.base-black-bg {\n    background-color: var(--base-black);\n}\n.black-5-bg {\n    background-color: var(--black-5);\n}\n.black-10-bg {\n    background-color: var(--black-10);\n}\n.black-15-bg {\n    background-color: var(--black-15);\n}\n.black-20-bg {\n    background-color: var(--black-20);\n}\n.black-25-bg {\n    background-color: var(--black-25);\n}\n.black-30-bg {\n    background-color: var(--black-30);\n}\n.black-35-bg {\n    background-color: var(--black-35);\n}\n.base-red-bg {\n    background-color: var(--base-red);\n}\n.active-red-bg {\n    background-color: var(--active-red);\n}\n.base-orange-bg {\n    background-color: var(--base-orange);\n}\n.base-blue-bg {\n    background-color: var(--base-blue);\n}\n.base-green-bg {\n    background-color: var(--base-green);\n}\n.patreon-bg {\n    background-color: var(--patreon);\n}\n.txt-blue {\n    color: var(--base-blue) !important;\n}\n.txt-red {\n    color: var(--base-red) !important;\n}\n.txt-white {\n    color: var(--base-white) !important;\n}\n#tpIconContainer :is(div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button),\n#tp-error-box :is(div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button) {\n    word-wrap: normal;\n}\n:root {\n    --regular: 400;\n    --medium: 500;\n    --semi-bold: 600;\n    --bold: 700;\n    --extra-bold: 800;\n    --black: 900;\n}\n.extension-title {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    color: var(--base-red);\n    font-size: 16px;\n    letter-spacing: 0.2px;\n}\n.extension-txt {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--regular);\n    color: var(--white-15);\n    font-size: 14px;\n}\n.extension-txt-indicator {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--regular);\n    color: var(--white-35);\n    font-size: 11px;\n}\n.extension-description {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    color: var(--white-10);\n    font-size: 13px;\n}\n.extension-border-bot {\n    border-bottom: 1px solid var(--black-10);\n}\n.extension-border-top {\n    border-top: 1px solid var(--black-10);\n}\n.extension-btn {\n    width: 100%;\n    margin-top: 10px;\n    background: var(--base-red);\n    color: var(--base-white);\n    padding: 10px 0px;\n    border-radius: 2px;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    transition: background 0.3s ease;\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: center;\n    font-size: 14px;\n}\n.extension-btn:hover {\n    background: var(--active-red);\n}\n.extension-btn a {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    color: var(--base-white);\n}\n.no-error {\n    display: block;\n    background: var(--base-black);\n    width: var(--containerWidth);\n    padding: 20px;\n    border-radius: 4px;\n}\n.no-error input[type=\"text\"] {\n    display: block;\n    outline-style: none;\n    color: var(--base-white);\n    border: 1px solid var(--base-white);\n    border-radius: 4px;\n    width: 100%;\n    height: 40px;\n    padding: 8px 12px;\n    margin-top: 10px;\n}\n.no-error input[type=\"text\"]:focus {\n    border: 1px solid var(--white-35);\n}\n.no-error label {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    display: flex;\n    flex-flow: wrap row;\n    align-items: center;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--regular);\n    color: var(--base-white);\n    font-size: 12px;\n    margin-top: 12px;\n}\n.no-error label input {\n    margin-right: 10px;\n}\n.no-error h2 {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--semi-bold);\n    color: var(--base-white);\n    font-size: 18px;\n    letter-spacing: 0.2px;\n}\n.no-error button {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    cursor: pointer;\n    background-color: var(--base-red);\n    color: var(--base-white);\n    transition: 0.3s ease;\n    font-size: 13px;\n    letter-spacing: 0.2px;\n    margin-top: 16px;\n    transform: translateY(0px);\n}\n.no-error button:hover {\n    transform: translateY(-2px);\n}\n.no-error i {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--bold);\n}\n.no-error .copy-val {\n    display: block;\n    width: fit-content;\n    margin-top: 10px;\n    padding: 10px 20px;\n}\n.no-error .copy-val a {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: var(--medium);\n    border-radius: 2px;\n    transition: 0.3s ease;\n    font-size: 12px;\n}\n.some-error {\n    display: block;\n    background: var(--base-black);\n    width: 332px;\n    padding: 20px;\n    border-radius: 4px;\n}\n.extension-btn {\n    margin-bottom: 10px;\n}\n#create-session {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#create-session:hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#accept-permissions {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n#accept-permissions :hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n.popup-url-container {\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 15px;\n}\n.popup-url-container input[type=\"text\"] {\n    display: block;\n    outline-style: none;\n    color: var(--base-white);\n    border: none;\n    border-bottom: 1px solid var(--base-white);\n    border-radius: 0px;\n    width: 60%;\n    height: 40px;\n    padding: 0px;\n    margin-top: 0px;\n}\n.popup-url-container input[type=\"text\"]:focus {\n    border: none;\n}\n.popup-url-container .copy-val {\n    cursor: pointer !important;\n    width: 34%;\n    margin: 0;\n}\n.popup-url-container .copy-val a {\n    margin: 0;\n}\n.popup-review-container {\n    display: flex;\n    flex-flow: wrap column;\n    width: 100%;\n    padding-top: 15px;\n    margin-top: 15px;\n    border-top: 1px solid var(--black-10);\n}\n.popup-review-container button {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n}\n.popup-review-container button:hover {\n    background: #dc4046;\n    background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n} /*# sourceMappingURL=pop.min.css.map */\n.ellipsis-anim span {\n    opacity: 0;\n    -webkit-animation: ellipsis-dot 1s infinite;\n    animation: ellipsis-dot 1s infinite;\n}\n\n.ellipsis-anim span:nth-child(1) {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n.ellipsis-anim span:nth-child(2) {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n.ellipsis-anim span:nth-child(3) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n@-webkit-keyframes ellipsis-dot {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes ellipsis-dot {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    margin-top: 0;\n}\n.switch input,\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.switch input:checked + .slider,\n.switch input:checked + .slider {\n    background: var(--gradient-1);\n}\n.switch input:checked + .slider:before,\n.switch input:checked + .slider:before {\n    -webkit-transform: translateX(5px);\n    -ms-transform: translateX(5px);\n    transform: translateX(5px);\n}\n.switch .slider,\n.switch .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--black-5);\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.switch .slider:before,\n.switch .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 14px;\n    width: 14px;\n    left: 4px;\n    bottom: 2px;\n    background-color: #fff;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.switch .round,\n.switch .round {\n    border-radius: 34px;\n}\n.switch .round:before,\n.switch .round:before {\n    border-radius: 50%;\n}\n.switch .round:hover,\n.switch .round:hover {\n    cursor: pointer !important;\n}\n\n.pinned {\n    background-color: var(--black-20);\n}\n\n.gradient-image {\n}\n\n.body14r {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 21px;\n}\n"));
              this.Ka();
            }
          }
        });
      }
      Ka() {
        this.ko("#tp-control-lock-button").click(this.Ga.bind(this));
        this.Ja();
        this.ko("#tp-link-button").click(this.qa.bind(this));
        this.ko("#tp-chat-button").on("click", t => {
          this.Xa();
          t.stopImmediatePropagation();
          t.stopPropagation();
          return false;
        });
        this.ko("#tp-buttons-container").on("mouseenter", () => {
          this.onControlsMouseEnter();
        });
        this.ko("#tp-buttons-container").on("mouseleave", () => {
          this.onControlsMouseLeave();
        });
        this.ko("#tp-disconnect-button").on("click", () => {
          this.tu();
        });
      }
      tu() {
        const t = new ir(oi, ei, jr);
        Fi.I(t);
        this.Ua();
      }
      onControlsMouseEnter() {}
      onControlsMouseLeave() {}
      qa() {
        this.Oa.linkIconListener();
        this.ko("#tp-link-button .tooltiptext").text("Link copied");
        setTimeout(() => {
          this.ko("#tp-link-button .tooltiptext").text("Copy join link");
        }, 1000);
      }
      Xa() {
        return ih(this, undefined, undefined, function* () {
          this.$a = 0;
          this.hideMessageIndicator();
          if (this.Oa.isPartyWindowsActive()) {
            this.Oa.resetChatWindow(true);
          } else {
            yield this.Oa.setChatVisible(!this.Oa.shouldChatBeVisible());
            this.setChatButtons();
          }
        });
      }
      onInitChat() {
        if (this.Ba) {
          this.Va();
        }
      }
      setChatButtons() {
        if (this.Oa.inSession && this.Oa.getChatVisible()) {
          this.nu();
        } else {
          this.eu();
        }
        if (this.Oa.isPartyWindowsActive()) {
          this.setResetChatButton();
        } else {
          this.hideMessageIndicator();
        }
      }
      nu() {
        return ih(this, undefined, undefined, function* () {
          if (this.Oa.inSession && this.Oa.shouldChatBeVisible()) {
            this.ko("#tp-chat-close-button").removeClass("tp-hidden");
            this.ko("#tp-buttons-container").addClass("tp-hidden");
          }
        });
      }
      eu() {
        this.ko("#tp-chat-close-button").addClass("tp-hidden");
        this.ko("#tp-buttons-container").removeClass("tp-hidden");
      }
    }
    function oh(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class rh extends sh {
      constructor() {
        super(...arguments);
        this.iu = 2500;
      }
      su() {
        return window.location.href.includes("/shorts/");
      }
      shouldMenuBeVisible() {
        if (Ge()) {
          return true;
        }
        if (this.su()) {
          return jQuery("#shorts-player").length > 0;
        }
        const t = jQuery(".ytp-chrome-bottom");
        if (t.length > 0 && t.css("opacity") !== "0" || !this.isWatchPage()) {
          if (this.ou) {
            clearTimeout(this.ou);
          }
          this.ou = setTimeout(() => {
            this.ou = undefined;
          }, this.iu);
          return true;
        } else {
          return this.ou !== undefined;
        }
      }
      isWatchPage() {
        if (ze()) {
          return true;
        }
        const t = window.location.href;
        return !!t.includes("/watch") || !!t.includes("/shorts/");
      }
      getControlsRoot() {
        return oh(this, undefined, undefined, function* () {
          if (Ge()) {
            return jQuery("#id-tv-container");
          } else if (this.su()) {
            return jQuery("ytd-app");
          } else if (this.isWatchPage()) {
            return jQuery("#ytd-player");
          } else {
            return jQuery("ytd-app");
          }
        });
      }
      isPlayerPage() {
        if (ze()) {
          return true;
        }
        const t = window.location.href;
        return t.includes("/watch") || t.includes("/shorts/");
      }
      Va() {
        const t = Object.create(null, {
          Va: {
            get: () => super.Va
          }
        });
        return oh(this, undefined, undefined, function* () {
          if (this.su()) {
            const t = document.getElementById("tpIconContainer");
            if (t == null ? undefined : t.closest("#shorts-player, #ytd-player, #short-video-container")) {
              t.remove();
            }
          }
          yield t.Va.call(this);
        });
      }
      Ja() {
        super.Ja();
        if (!this.su()) {
          return;
        }
        const t = document.getElementById("tp-buttons-container");
        if (t) {
          t.style.setProperty("pointer-events", "auto", "important");
          t.style.setProperty("z-index", "2147483646", "important");
        }
        const n = document.getElementById("tpIconContainer");
        if (n) {
          n.style.setProperty("pointer-events", "auto", "important");
          n.style.setProperty("z-index", "2147483646", "important");
        }
      }
      reloadListener() {
        jQuery("#tpIconContainer").remove();
        this.stopEventListener();
        this.startEventListener();
      }
    }
    function ah(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class uh {
      constructor() {
        this.ru = 0;
        this.At = false;
        this.au = false;
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
        return ah(this, undefined, undefined, function* () {
          if (!this.au) {
            yield this.setCurrentTime(t);
          }
        });
      }
      freeze(t) {
        return ah(this, undefined, undefined, function* () {
          this.ru++;
          try {
            yield this.pause();
            yield We(t)();
            yield this.play();
          } finally {
            this.ru--;
          }
        });
      }
      jumpToNextEpisode(t) {
        return ah(this, undefined, undefined, function* () {
          yield this.jumpToOtherEpisode(t);
        });
      }
      waitBeforeNativePartyStartAsync() {
        return ah(this, undefined, undefined, function* () {
          yield this.waitVideoApiReadyAsync();
        });
      }
      get uiEventsHappening() {
        return this.ru;
      }
      incrementUiEventsHappening(t) {
        this.ru += t;
      }
      uu(t, n, e = 1500) {
        return ah(this, undefined, undefined, function* () {
          const i = "tp-player-" + Date.now() + "-" + uh.cu++;
          return new Promise((s, o) => {
            const r = t => {
              if (t.source === window && t.data?.type === n && t.data.requestId === i) {
                window.clearTimeout(a);
                window.removeEventListener("message", r);
                s(t.data);
              }
            };
            const a = window.setTimeout(() => {
              window.removeEventListener("message", r);
              o(new Error(n + " timeout"));
            }, e);
            window.addEventListener("message", r);
            window.postMessage(Object.assign(Object.assign({}, t), {
              requestId: i
            }), "*");
          });
        });
      }
      getCustomStartPartyButtonMessage() {
        return ah(this, undefined, undefined, function* () {
          return null;
        });
      }
      beginRemoteSyncApply() {}
      endRemoteSyncApply() {}
      shouldSuppressLocalBroadcast() {
        return this.ru > 0;
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
      getVideoContent(t, n, e, i, s) {
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
          name: n,
          url: e,
          episode: o,
          season: r,
          episode_name: a,
          service: this.getInternalStreamingServiceName()
        };
      }
      logError(t, n) {
        console.error("ERROR", t, n);
        const e = new hr(si, ei, {
          name: "video_error",
          action: {
            description: t,
            reason: n
          }
        });
        Fi.I(e);
      }
      doAdCheck() {
        return ah(this, undefined, undefined, function* () {});
      }
      triggerNextEpisodeClick() {}
    }
    uh.cu = 0;
    function ch(t) {
      return (t == null ? undefined : t.replace(/\s+/g, " ").trim()) || undefined;
    }
    function hh() {
      const t = document.querySelector(".ypc-video-secondary-text");
      if (t) {
        return ch(t.getAttribute("title") || t.textContent);
      }
    }
    function lh() {
      var t;
      const n = document.querySelector(".ypc-network-logo");
      const e = ch(n == null ? undefined : n.getAttribute("aria-label")) || ch((t = n == null ? undefined : n.querySelector("button")) === null || t === undefined ? undefined : t.getAttribute("aria-label"));
      return e || function (t) {
        const n = ch(t);
        if (n) {
          return ch(n.split("•")[0]);
        }
      }(hh());
    }
    function dh() {
      const t = function () {
        var t;
        const n = document.querySelector(".ypc-video-title-text");
        return ch(n == null ? undefined : n.getAttribute("title")) || ch(n == null ? undefined : n.textContent) || ch((t = document.querySelector("#id-player-main")) === null || t === undefined ? undefined : t.getAttribute("aria-label"));
      }();
      const n = hh();
      return Object.assign(Object.assign({}, t ? {
        title: t
      } : {}), function (t) {
        const n = ch(t);
        if (!n) {
          return {};
        }
        const e = n.match(/\bS(\d+)\s*E(\d+)\b/i);
        if (e) {
          return {
            seasonNum: Number(e[1]),
            episodeNum: Number(e[2])
          };
        } else {
          return {};
        }
      }(n));
    }
    function ph(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class fh extends uh {
      constructor() {
        super();
        this.hu = false;
        this.lu = false;
        this.du = new i("ext:ContentScripts:Youtube:YoutubeVideoApi");
        this.isLive = () => !!this.lu;
        this.isWatchingAds = () => {
          const t = document.querySelector(".ytp-ad-persistent-progress-bar-container");
          return !!t && t.style.display !== "none";
        };
        this.waitNewVideoReadyAsync = () => ph(this, undefined, undefined, function* () {
          yield Ye(() => this.pu() !== $o.LOADING && this.pu() !== $o.NOT_READY, Infinity, 15)();
        });
        this.ru = 0;
        this.fu = 0;
        this.Du = 0;
        this.vu = 0;
        this.gu = 0;
      }
      get videoId() {
        return this.Fn;
      }
      set videoId(t) {
        this.Fn = t;
      }
      setVideoEventListener(t) {
        this.Gt = t;
      }
      get videoTitle() {
        return this.mu;
      }
      onNode(t) {
        var n;
        const e = t.detail;
        if (e.type == "VideoId") {
          this.Fn = e.videoId;
          this.lu = (n = e.isLive) !== null && n !== undefined && n;
          this.fu = Date.now();
        }
        if (e.type == "VideoTitle") {
          this.mu = e.title;
          this.Du = Date.now();
        }
        if (e.type == "VideoTime") {
          this.wu = e.videoTime;
          this.vu = Date.now();
        }
        if (e.type == "Navigated") {
          this.gu = Date.now();
        }
      }
      sendVideoIdEvent() {
        return ph(this, undefined, undefined, function* () {
          this.du.debug({
            methodName: "sendVideoIdEvent",
            message: "Trying to send video ID event"
          });
          try {
            yield Ye(() => {
              const t = new CustomEvent("YoutubeVideoMessage", {
                detail: {
                  type: "getVideoId"
                }
              });
              window.dispatchEvent(t);
              return true;
            }, 1000, 10)();
          } catch (t) {
            this.logError("Failed to load video Id", t);
          }
        });
      }
      sendVideoTitleEvent() {
        return ph(this, undefined, undefined, function* () {
          this.du.debug({
            methodName: "sendVideoTitleEvent",
            message: "Trying to send video title event"
          });
          try {
            yield Ye(() => {
              const t = new CustomEvent("YoutubeVideoMessage", {
                detail: {
                  type: "getVideoTitle"
                }
              });
              window.dispatchEvent(t);
              return true;
            }, 1000, 10)();
          } catch (t) {
            this.logError("Failed to load video title", t);
          }
        });
      }
      sendVideoTimeEvent() {
        return ph(this, undefined, undefined, function* () {
          try {
            yield Ye(() => {
              const t = new CustomEvent("YoutubeVideoMessage", {
                detail: {
                  type: "getVideoTime"
                }
              });
              window.dispatchEvent(t);
              return true;
            }, 1000, 10)();
          } catch (t) {
            this.logError("Failed to load video title", t);
          }
        });
      }
      getVideoIdAsync() {
        return ph(this, undefined, undefined, function* () {
          try {
            if (!this.isPlayerPage()) {
              return "browsing";
            }
            if (window.location.href.includes("/shorts/")) {
              const n = mo.getVideoId(new URL(window.location.href)) ?? "";
              if (n) {
                this.Fn = n;
                this.fu = Date.now();
                return n;
              }
            }
            const e = Date.now();
            yield this.sendVideoIdEvent();
            yield Ye(() => this.fu > e && this.fu != null, 1000, 10)();
            return this.Fn ?? "";
          } catch (t) {
            console.log("unable to get videoID", t);
            return mo.getVideoId(new URL(window.location.href)) ?? "";
          }
        });
      }
      updateVideoId() {
        return ph(this, undefined, undefined, function* () {
          try {
            if (this.isPlayerPage()) {
              const t = Date.now();
              yield this.sendVideoIdEvent();
              yield Ye(() => this.fu > t && this.fu != null, 1000, 10)();
            } else {
              this.Fn = "browsing";
            }
          } catch (n) {
            console.log("unable to update videoID");
            this.Fn = mo.getVideoId(new URL(window.location.href)) ?? "";
          }
        });
      }
      getVideoTitleAsync() {
        return ph(this, undefined, undefined, function* () {
          try {
            if (!this.isPlayerPage()) {
              return "";
            }
            const n = Date.now();
            yield this.sendVideoTitleEvent();
            yield Ye(() => this.Du > n && this.Du != null, 1000, 10);
            return this.mu ?? "";
          } catch (t) {
            return this.yu() ?? "";
          }
        });
      }
      getVideoElement() {
        if (!this.isPlayerPage()) {
          return null;
        }
        const t = window.location.href;
        if (t.includes("/shorts/")) {
          return document.querySelector("#shorts-player");
        }
        if (t.includes("/watch")) {
          return document.querySelector("#movie_player");
        }
        throw new Error("Unknown Video Type");
      }
      getRawVideoElement() {
        var t;
        if (!this.isPlayerPage()) {
          return null;
        }
        const e = window.location.href;
        if (e.includes("/shorts/")) {
          return ((t = document.querySelector("#shorts-inner-container")) === null || t === undefined ? undefined : t.querySelector("video")) ?? null;
        }
        if (e.includes("/watch")) {
          return document.querySelector(".video-stream.html5-main-video");
        }
        throw new Error("Unknown Video Type");
      }
      setCurrentTime(t) {
        var n;
        return ph(this, undefined, undefined, function* () {
          if (!((n = this.Gt) === null || n === undefined ? undefined : n.isOthersWatchingAds())) {
            this.ru += 1;
            yield Ye(() => {
              const n = new CustomEvent("YoutubeVideoMessage", {
                detail: {
                  type: "seekTo",
                  seekTo: t / 1000
                }
              });
              window.dispatchEvent(n);
              return true;
            }, 1000, 10)();
            try {
              yield We(500)();
              yield this.waitVideoDoneLoadingAsync();
            } finally {
              this.ru -= 1;
            }
          }
        });
      }
      bu() {
        let t;
        const n = this.getRawVideoElement();
        if (n) {
          t = Math.floor(n.duration * 1000);
        }
        return t;
      }
      isPlayerPage() {
        if (ze()) {
          return true;
        }
        const t = window.location.href;
        return t.includes("/watch") || t.includes("/shorts/");
      }
      isWatchPage() {
        return this.getVideoType() === _r.FEATURE || this.getVideoType() === _r.LIVE || this.getVideoType() === _r.EXTRA || this.getVideoType() === _r.SHORTS;
      }
      getVideoType() {
        let t = _r.NONE;
        if (this.isPlayerPage()) {
          if (Ge()) {
            t = _r.EXTRA;
          } else if (window.location.href.includes("watch?")) {
            t = _r.FEATURE;
          } else if (window.location.href.includes("/shorts/")) {
            t = _r.SHORTS;
          }
          if (this.lu && !Ge()) {
            t = _r.LIVE;
          }
        }
        return t;
      }
      Cu() {
        return ph(this, undefined, undefined, function* () {
          if (this.isWatchPage()) {
            this.Fn = yield this.getVideoIdAsync();
            this.mu = yield this.getVideoTitleAsync();
            yield Ye(() => !!this.getVideoElement(), 999);
          }
        });
      }
      waitVideoApiReadyAsync() {
        return ph(this, undefined, undefined, function* () {
          yield this.Cu();
        });
      }
      Fu() {
        return mo.getVideoId(new URL(window.location.href));
      }
      setTheater() {
        try {
          Ye(() => {
            const t = new CustomEvent("YoutubeVideoMessage", {
              detail: {
                type: "setTheater"
              }
            });
            window.dispatchEvent(t);
            return true;
          }, 500)();
        } catch (t) {
          throw new Error("Couldn't set video to theater in time.");
        }
      }
      disableTheater() {
        try {
          Ye(() => {
            const t = new CustomEvent("YoutubeVideoMessage", {
              detail: {
                type: "disableTheater"
              }
            });
            window.dispatchEvent(t);
            return true;
          }, 500)();
        } catch (t) {
          throw new Error("Couldn't disable video to theater in time.");
        }
      }
      doAdCheck() {
        var t;
        return ph(this, undefined, undefined, function* () {
          if (!this.isWatchPage() || this.isWatchingAds() || !((t = this.Gt) === null || t === undefined ? undefined : t.isOthersWatchingAds())) {
            return;
          }
          const n = this.getRawVideoElement();
          if (n && !n.paused) {
            yield this.pause();
          }
        });
      }
      isVideoReady() {
        const t = this.pu();
        return t === "paused" || t === "playing" || t === "ad_playing";
      }
      waitVideoDoneLoadingAsync() {
        return ph(this, undefined, undefined, function* () {
          yield Ye(() => this.pu() !== $o.LOADING && this.pu() !== $o.NOT_READY, 1000, 10)();
        });
      }
      getStateAsync() {
        return ph(this, undefined, undefined, function* () {
          const t = yield this._u();
          return new Promise((n, e) => {
            if (t === undefined) {
              e("Could not get current player time.");
              return;
            }
            n({
              playbackState: this.pu(),
              playbackPositionMilliseconds: t
            });
          });
        });
      }
      _u() {
        return ph(this, undefined, undefined, function* () {
          if (this.lu) {
            try {
              const n = Date.now();
              yield this.sendVideoTimeEvent();
              yield Ye(() => this.vu > n, 1000, 10);
              return (this.wu ?? 0) * 1000;
            } catch (t) {
              const n = this.getRawVideoElement();
              if (n) {
                return Math.floor(n.currentTime * 1000);
              }
            }
          } else {
            const t = this.getRawVideoElement();
            if (t) {
              return Math.floor(t.currentTime * 1000);
            }
          }
          return 0;
        });
      }
      getStreamingServiceName() {
        if (this.getVideoType() === _r.EXTRA) {
          return Ni.YOUTUBE_TV;
        } else {
          return Ni.YOUTUBE;
        }
      }
      getUpdateSessionDataAsync() {
        return ph(this, undefined, undefined, function* () {
          const t = yield this.getStateAsync();
          const n = yield this._u();
          if (n === null) {
            throw new Error("Couldn't get update data");
          }
          const e = Date.now();
          return {
            state: t.playbackState === $o.PLAYING ? jo.PLAYING : jo.PAUSED,
            lastKnownTime: n ?? -1,
            lastKnownTimeUpdatedAt: e,
            bufferingState: this.pu() == $o.LOADING
          };
        });
      }
      yu() {
        var t;
        const n = window.location.href;
        let e;
        if (this.isPlayerPage()) {
          if (n.includes("watch?")) {
            e = document.querySelector(".title.style-scope.ytd-video-primary-info-renderer");
          } else if (n.includes("/shorts/")) {
            const n = document.querySelector("#shorts-player");
            e = (t = n == null ? undefined : n.closest(".reel-video-in-sequence.style-scope.ytd-shorts")) === null || t === undefined ? undefined : t.querySelector(".title > .style-scope");
          } else {
            if (!Ge()) {
              throw new Error("Unknown Video Type");
            }
            e = document.querySelector(".ypc-video-title-text");
          }
          if (e) {
            return e.innerText;
          } else {
            return undefined;
          }
        }
        console.log("No video to return");
      }
      getVideoDataAsync() {
        return ph(this, undefined, undefined, function* () {
          if (ze()) {
            return this.Eu();
          }
          const n = yield this.getVideoTitleAsync();
          const e = yield this.getVideoIdAsync();
          const i = this.bu() ?? 0;
          const s = this.getScreenSize();
          const o = this.getVideoContent(e, n, window.location.href, this.getVideoType());
          const r = yield this.getStateAsync();
          const a = this.getVideoType();
          return {
            videoId: e,
            videoTitle: n,
            videoDuration: i,
            screen: s,
            content: o,
            videoState: r.playbackState,
            videoType: a
          };
        });
      }
      Eu() {
        return ph(this, undefined, undefined, function* () {
          const e = yield this.getVideoIdAsync();
          const i = lh() ?? "";
          const s = dh();
          const o = this.getVideoType();
          const r = this.bu() ?? 0;
          const a = this.getScreenSize();
          const u = this.getVideoContent(e, i, window.location.href, o, s);
          const c = yield this.getStateAsync();
          if (e && e !== "browsing" && i) {
            return {
              videoId: e,
              videoTitle: i,
              videoDuration: r,
              screen: a,
              content: u,
              videoState: c.playbackState,
              videoType: o,
              service: this.getInternalStreamingServiceName()
            };
          } else {
            return Promise.reject(new Error("YouTube TV video data unavailable"));
          }
        });
      }
      jumpToOtherEpisode(t) {
        return ph(this, undefined, undefined, function* () {
          if ((yield this.getVideoIdAsync()) !== t.videoId) {
            const n = Date.now();
            const e = t.videoType === _r.SHORTS;
            yield Ye(() => {
              const n = new CustomEvent("YoutubeVideoMessage", {
                detail: {
                  type: "jumpToNextEpisode",
                  nextVideoId: t.videoId,
                  isShort: e
                }
              });
              window.dispatchEvent(n);
              return true;
            }, 1000, 10)();
            yield Ye(() => this.gu > n && this.gu != null, 1000, 10)().catch(() => ph(this, undefined, undefined, function* () {
              var t;
              try {
                yield (t = this.Gt) === null || t === undefined ? undefined : t.reloadNextEpisode();
              } catch (t) {
                console.log("Failed to jump to next episode:", t);
              }
            }));
          }
        });
      }
      freeze(t) {
        return ph(this, undefined, undefined, function* () {
          this.ru += 1;
          try {
            yield this.pause();
            yield We(t)();
            yield this.play();
          } finally {
            this.ru -= 1;
          }
        });
      }
      play() {
        var t;
        return ph(this, undefined, undefined, function* () {
          if (this.isWatchPage() && (this.isWatchingAds() || !((t = this.Gt) === null || t === undefined ? undefined : t.isOthersWatchingAds()))) {
            this.du.debug({
              methodName: "play",
              message: "Attempting to play"
            });
            this.ru += 1;
            try {
              const t = this.getRawVideoElement();
              if (t === null) {
                throw new Error(Li);
              }
              yield t.play();
              yield Ye(() => this.pu() === $o.PLAYING || this.pu() === $o.AD_PLAYING, 1250, 10)();
            } finally {
              this.ru -= 1;
            }
          }
        });
      }
      pause() {
        return ph(this, undefined, undefined, function* () {
          if (this.isWatchPage()) {
            this.du.debug({
              methodName: "pause",
              message: "Attempting to Pause"
            });
            this.ru += 1;
            try {
              const t = this.getRawVideoElement();
              if (t === null) {
                throw new Error(Li);
              }
              t.pause();
              yield We(250)();
              yield Ye(() => this.pu() === $o.PAUSED || this.pu() === $o.AD_PLAYING, 1250, 10)();
            } finally {
              this.ru -= 1;
            }
          }
        });
      }
      pu() {
        if (!this.isPlayerPage()) {
          return $o.IDLE;
        }
        if (this.isWatchingAds()) {
          return $o.AD_PLAYING;
        }
        const t = this.getRawVideoElement();
        let n;
        n = t ? t.paused ? $o.PAUSED : t.readyState < 4 ? $o.LOADING : $o.PLAYING : $o.NOT_READY;
        return n;
      }
      getInternalStreamingServiceName() {
        return us.YOUTUBE;
      }
    }
    class Dh extends Pr {
      constructor(t, n, e) {
        super(t, n, ri.CREATE_SESSION);
        this.data = e;
      }
    }
    function vh(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    function gh(t, n, e) {
      return vh(this, undefined, undefined, function* () {
        const i = yield Fi.I(new ji(ii, ei, ki.GET_TAB_ID));
        const s = new eh(new URL(window.location.href), i);
        const o = new Dh(ii, ei, {
          createSettings: {
            controlLock: t,
            reactionsDisabled: e
          },
          streamingService: s.streamingService,
          tabId: s.id,
          isNative: n
        });
        return Fi.I(o);
      });
    }
    class mh extends ji {
      constructor(t, n, e) {
        super(t, n, ki.SET_DATA);
        this.data = e;
      }
    }
    class wh extends Pr {
      constructor(t, n, e) {
        super(t, n, ri.RE_INJECT);
        this.data = e;
      }
    }
    function yh(t, n) {
      return {
        name: t,
        isPresent: () => n.some(t => document.querySelector(t) !== null)
      };
    }
    function bh(t) {
      return {
        name: "video",
        isPresent: () => t() !== null
      };
    }
    function Ch(t) {
      const n = {};
      for (const e of t) {
        n[e.name] = e.isPresent();
      }
      return {
        success: Object.values(n).every(Boolean),
        elements: n
      };
    }
    function Fh(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class _h {
      constructor(t) {
        var n;
        this.xu = 0;
        this.ku = this.Au.bind(this);
        this.Iu = this.Bu.bind(this);
        this.W = t;
        console.log("Video Event Listener");
        this.ku();
        if ((n = window.teleparty) !== null && n !== undefined) {
          n.injectScriptLoaded;
        }
      }
      getCurrentStatus() {
        return Fh(this, undefined, undefined, function* () {
          return "";
        });
      }
      getStatusMetaData() {
        return Fh(this, undefined, undefined, function* () {});
      }
      reloadNextEpisode() {
        var t;
        return Fh(this, undefined, undefined, function* () {
          yield (t = this.Ys) === null || t === undefined ? undefined : t.reloadNextEpisode();
        });
      }
      persistForReload(t) {
        var n;
        return Fh(this, undefined, undefined, function* () {
          yield (n = this.Ys) === null || n === undefined ? undefined : n.persistExtension(true, t);
        });
      }
      isOthersWatchingAds() {
        var t;
        var n;
        return (n = (t = this.Ys) === null || t === undefined ? undefined : t.getOthersWatchingAds()) !== null && n !== undefined && n;
      }
      getListenerElementChecks() {
        return [bh(() => this.W.getVideoElement())];
      }
      validateListenersPresent() {
        return Ch(this.getListenerElementChecks()).success;
      }
      getListenerElementsStatus() {
        return Ch(this.getListenerElementChecks()).elements;
      }
      startListening() {
        this.logListenerElementsDetected();
        this.Su();
        window.addEventListener(_h.ACTIVATION_CONTINUE_EVENT, this.Iu, false);
      }
      logListenerElementsDetected() {
        return Fh(this, undefined, undefined, function* () {
          try {
            yield Ye(() => this.validateListenersPresent(), 10000)();
          } catch (t) {}
          const {
            success: n,
            elements: e
          } = Ch(this.getListenerElementChecks());
          const i = So(this.W.getStreamingServiceName())?.serverName;
          if (!i) {
            return;
          }
          let s;
          try {
            s = yield this.W.getVideoDataAsync();
          } catch (t) {}
          Fi.I(new kr(si, ei, {
            event_name: "listener_elements_detected",
            service: i,
            video_data: s,
            success: n,
            extra_info: {
              listener_elements: e
            }
          }, xr.PARTY));
        });
      }
      stopListening() {
        this.xu++;
        this.ju();
        window.removeEventListener(_h.ACTIVATION_CONTINUE_EVENT, this.Iu, false);
      }
      stopPartyStartPolling() {
        if (this.$u) {
          clearInterval(this.$u);
          this.$u = undefined;
        }
        if (this.Tu) {
          clearInterval(this.Tu);
          this.Tu = undefined;
        }
      }
      Su() {
        const t = navigator;
        t.mediaSession.setActionHandler("play", () => Fh(this, undefined, undefined, function* () {
          this.Pu();
          this.W.play();
          console.log("Bluetooth device played the video");
        }));
        t.mediaSession.setActionHandler("pause", () => Fh(this, undefined, undefined, function* () {
          this.Pu();
          this.W.pause();
          console.log("Bluetooth device paused the video");
        }));
      }
      Mu() {
        return 600;
      }
      Lu() {
        return 2000;
      }
      Au() {
        this.Ru();
        this.$u = setInterval(this.Ru.bind(this), this.Lu());
        this.Tu = setInterval(this.Ou.bind(this), 2000);
      }
      Vu(t) {
        return !!window.location.href.includes("netflix.com/watch/") && !!t.includes("netflix.com/watch/");
      }
      Ou() {
        return Fh(this, undefined, undefined, function* () {
          const t = yield Fi.I(new Ui(si, ei, {
            key: "startParty"
          }));
          if (t == null ? undefined : t.result) {
            if (!this.Vu(t.result)) {
              return;
            }
            const n = yield gh(false, true, false);
            if (n && !n.error) {
              Fi.I(new mh(si, ei, {
                key: "startParty",
                value: null
              }));
              const t = {
                name: "user_click",
                component: {
                  name: `${this.W.getStreamingServiceName().toLowerCase()}_redirect_start_party`,
                  type: "button",
                  origin: "tp"
                }
              };
              const n = new hr(si, ei, t);
              Fi.I(n);
            }
          }
        });
      }
      Ru() {
        return Fh(this, undefined, undefined, function* () {
          const t = JSON.parse(localStorage.getItem("nativeParty") || "{}");
          if (t.shouldStart && t.expiry > Date.now() && t.randomId !== this.Uu) {
            yield We(this.Mu())();
            yield this.W.waitBeforeNativePartyStartAsync();
            const n = yield gh(false, true, false);
            if (n && !n.error) {
              localStorage.removeItem("nativeParty");
              this.Uu = t.randomId;
              const n = {
                name: "user_click",
                component: {
                  name: `${this.W.getInternalStreamingServiceName()}_native_start_party`,
                  type: "button",
                  origin: "tp"
                }
              };
              const e = new hr(si, ei, n);
              Fi.I(e);
            } else if ((n == null ? undefined : n.error) === Mi) {
              const t = yield Fi.I(new ji(ii, ei, ki.GET_TAB_ID));
              const n = new eh(new URL(window.location.href), t);
              const e = new wh(oi, ei, {
                extensionTabData: n
              });
              try {
                yield Fi.I(e);
              } catch (t) {
                console.error("Error re-injecting content scripts", t);
              }
            }
          }
        });
      }
      ju() {
        const t = navigator;
        t.mediaSession.setActionHandler("play", null);
        t.mediaSession.setActionHandler("pause", null);
      }
      Hu() {
        var t;
        if ((t = this.Ys) !== null && t !== undefined) {
          t.tryBroadcast(false);
        }
      }
      Nu(t, n) {
        const e = ++this.xu;
        Oo.pushTask(() => Fh(this, undefined, undefined, function* () {
          if (e === this.xu) {
            if (n) {
              this.Pu(undefined, n);
            } else {
              this.Hu();
            }
            if (t) {
              Oo.pushTask(() => Fh(this, undefined, undefined, function* () {
                if (e === this.xu) {
                  t();
                }
              }), "localControlBroadcastComplete");
            }
          }
        }), "localControlBroadcast");
      }
      Pu(t, n) {
        var e;
        if ((e = this.Ys) !== null && e !== undefined) {
          e.tryBroadcast(true, n);
        }
      }
      Gu() {
        var t;
        if ((t = this.Ys) !== null && t !== undefined) {
          t.setBuffering(true);
        }
      }
      zu(t) {
        var n;
        if ((n = this.Ys) !== null && n !== undefined) {
          n.setWatchingAds(true, t);
        }
      }
      Zu() {
        var t;
        var n;
        if ((t = this.Ys) !== null && t !== undefined) {
          t.setWatchingAds(false);
        }
        if ((n = this.Ys) !== null && n !== undefined) {
          n.forceSync();
        }
      }
      Qu() {
        var t;
        if ((t = this.Ys) !== null && t !== undefined) {
          t.setBuffering(false);
        }
      }
      Bu(t) {
        var n;
        const e = t.detail;
        const i = this.W.getStreamingServiceName();
        const s = document.documentElement.getAttribute(_h.ACTIVATION_PENDING_ATTR);
        const o = document.documentElement.getAttribute(_h.ACTIVATION_PENDING_SERVICE_ATTR);
        const r = document.documentElement.getAttribute(_h.ACTIVATION_HELPER_SERVICE_ATTR);
        const a = document.documentElement.getAttribute(_h.ACTIVATION_EXPECTED_SERVICE_ATTR);
        const u = document.documentElement.getAttribute(_h.ACTIVATION_EXPECTED_STATE_ATTR);
        if (s === "true" && o === i && r === i && (e == null ? undefined : e.serviceName) === i && a === i && u === "playing") {
          if ((n = this.Ys) !== null && n !== undefined) {
            n.syncToCurrentPartyTimeAfterActivation();
          }
        }
      }
      Wu(t, n) {
        var e;
        if ((e = this.Ys) !== null && e !== undefined) {
          e.sendOtherEpisodeAsync(t, n);
        }
      }
      Yu(t, n) {
        var e;
        if ((e = this.Ys) !== null && e !== undefined) {
          e.sendNextEpisodeAsync(t, n);
        }
      }
      Ju(t) {
        var n;
        if ((n = this.Ys) !== null && n !== undefined) {
          n.sendTeardown(t);
        }
      }
      setMessageForwarder(t) {
        this.Ys = t;
      }
      shouldSync() {
        if (document.documentElement.getAttribute(_h.ACTIVATION_PENDING_ATTR) !== "true") {
          return true;
        }
        const t = this.W.getStreamingServiceName();
        return document.documentElement.getAttribute(_h.ACTIVATION_PENDING_SERVICE_ATTR) !== t || document.documentElement.getAttribute(_h.ACTIVATION_HELPER_SERVICE_ATTR) !== t || document.documentElement.getAttribute(_h.ACTIVATION_EXPECTED_SERVICE_ATTR) !== t || document.documentElement.getAttribute(_h.ACTIVATION_EXPECTED_STATE_ATTR) !== "playing";
      }
      shouldRegisterPartyTimelineSeekListeners() {
        return this.Ys == null || !this.Ys.isScheduledPartyPlaybackOnly();
      }
    }
    _h.ACTIVATION_CONTINUE_EVENT = "TPActivationContinue";
    _h.ACTIVATION_PENDING_ATTR = "data-tp-activation-pending";
    _h.ACTIVATION_PENDING_SERVICE_ATTR = "data-tp-activation-service";
    _h.ACTIVATION_HELPER_SERVICE_ATTR = "data-tp-activation-helper-service";
    _h.ACTIVATION_EXPECTED_STATE_ATTR = "data-tp-activation-expected-state";
    _h.ACTIVATION_EXPECTED_SERVICE_ATTR = "data-tp-activation-expected-service";
    function Eh(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class xh extends _h {
      constructor(t, n, e) {
        super(t);
        this.Ku = this.qu.bind(this);
        this.Xu = this.tc.bind(this);
        this.nc = false;
        this.du = new i("ext:ContentScripts:Youtube:YoutubeVideoEventListener");
        this.ec = null;
        this.sc = this.oc.bind(this);
        this.rc = this.ac.bind(this);
        this.uc = () => Eh(this, undefined, undefined, function* () {
          if (this.W.getVideoType() === _r.EXTRA) {
            setTimeout(() => Eh(this, undefined, undefined, function* () {
              yield this.cc();
              this.Z.setChatVisible(this.Z.shouldChatBeVisible());
            }), 1000);
          }
        });
        this.hc = () => Eh(this, undefined, undefined, function* () {
          var t;
          var n;
          const e = this.W.isWatchingAds();
          const i = (n = (t = this.Ys) === null || t === undefined ? undefined : t.isWatchingAds()) !== null && n !== undefined && n;
          if (!this.W.isPlayerPage() || !e) {
            if (this.nc || i) {
              this.nc = false;
              this.Zu();
            }
            this.lc();
            return;
          }
          this.du.debug({
            methodName: "_checkAdStart",
            message: "active ad class node added"
          });
          console.log("Watching Ads");
          if (this.nc && i) {
            yield this.W.play();
          } else {
            this.nc = true;
            this.zu();
          }
        });
        this.shouldSync = () => !this.W.isWatchingAds() && !this.isOthersWatchingAds() && this.W.isWatchPage();
        this.cc = () => Eh(this, undefined, undefined, function* () {
          var e;
          try {
            this.Z.setMessageForwarder(this.Ys);
            this.dc(this.su());
            if (!this.W.isWatchPage()) {
              return;
            }
            if (this.Ys?.changingVideo) {
              const t = yield this.W.getVideoIdAsync();
              if (t && t !== this.Ys.videoId) {
                yield this.Ys.sendOtherEpisodeAsync(t);
                if (this.su()) {
                  this.reloadListeners();
                }
              }
              return;
            }
            const i = yield this.W.getVideoIdAsync();
            if (i && i != this.Ys?.videoId) {
              yield (e = this.Ys) === null || e === undefined ? undefined : e.sendOtherEpisodeAsync(i);
              if (this.su()) {
                this.reloadListeners();
              }
            }
          } catch (t) {
            this.du.debug({
              methodName: "onVideoLoadStart",
              message: t
            });
            if (this.Ys) {
              this.Ys.changingVideo = false;
            }
          }
        });
        this.W = t;
        this.Z = n;
        this.Y = e;
        this.W.setVideoEventListener(this);
        this.fc = this.W.onNode.bind(this.W);
        this.initListeners();
        if (!window.teleparty?.injectScriptLoaded) {
          qe(chrome.runtime.getURL("content_scripts/youtube/youtube_injected_bundled.js"));
        }
      }
      initListeners() {
        window.addEventListener("FromNode", this.fc, false);
      }
      su() {
        return window.location.href.includes("/shorts/");
      }
      Dc() {
        var t;
        return ((t = document.querySelector("#shorts-inner-container")) === null || t === undefined ? undefined : t.querySelector("video")) ?? null;
      }
      lc() {
        return !!this.W.isWatchPage() && !this.W.isWatchingAds() && !!this.isOthersWatchingAds() && (this.W.doAdCheck().catch(t => {
          this.du.debug({
            methodName: "doAdCheck",
            message: String(t)
          });
        }), true);
      }
      oc() {
        if (!this.lc() && !!this.su() && !(this.W.uiEventsHappening > 0) && !this.W.isWatchingAds()) {
          this.Hu();
        }
      }
      ac() {
        if (!this.lc() && !!this.su() && !(this.W.uiEventsHappening > 0) && !this.W.isWatchingAds()) {
          this.Hu();
        }
      }
      dc(t = false) {
        if (!this.su()) {
          this.vc();
          return;
        }
        const n = this.Dc();
        if (n && (t || n !== this.ec)) {
          this.vc();
          this.ec = n;
          n.addEventListener("play", this.sc);
          n.addEventListener("pause", this.sc);
          n.addEventListener("seeking", this.rc);
        }
      }
      vc() {
        if (this.ec) {
          this.ec.removeEventListener("play", this.sc);
          this.ec.removeEventListener("pause", this.sc);
          this.ec.removeEventListener("seeking", this.rc);
          this.ec = null;
        }
      }
      getListenerElementChecks() {
        if (this.W.isPlayerPage()) {
          if (this.su()) {
            return [bh(() => this.Dc()), yh("shortsInnerContainer", ["#shorts-inner-container"])];
          } else {
            return [yh("playerContainer", ["#ytd-player", "#id-tv-container", "#shorts-player"])];
          }
        } else {
          return [{
            name: "playerPage",
            isPresent: () => false
          }];
        }
      }
      tc(t) {
        var e;
        return Eh(this, undefined, undefined, function* () {
          if (this.lc()) {
            return;
          }
          const i = t.target;
          this.W.setTheater();
          const s = !((e = document.querySelector("#ytd-player") ?? document.querySelector("#id-tv-container")) === null || e === undefined ? undefined : e.contains(i));
          this.du.debug({
            methodName: "onUserInteraction",
            message: `shouldNotInteract: ${s}`
          });
          this.du.debug({
            methodName: "onUserInteraction",
            message: `Event is a MouseEvent: ${t instanceof MouseEvent}`
          });
          if (!this.W.isWatchingAds() && !!this.W.isWatchPage() && !s && !this.su()) {
            if (Oo.tasksInFlight < 5 && !Oo.hasTaskInQueue("NETFLIX_WAIT_FOR_CHANGE")) {
              this.Pu();
            }
          }
        });
      }
      startListening() {
        super.startListening();
        this.nc = false;
        this.hc();
        this.gc = setInterval(() => {
          this.hc();
          this.dc();
        }, 500);
        this.dc(true);
        window.addEventListener("mouseup", this.Xu);
        window.addEventListener("keyup", this.Xu);
        document.addEventListener("yt-navigate-finish", this.cc);
        document.addEventListener("yt-navigate", this.uc);
        document.addEventListener("yt-page-type-changed", this.Ku);
        document.addEventListener("ytu-page-type-changed", this.Ku);
        document.addEventListener("ytu-page-type-changed", this.cc);
        document.addEventListener("yt-navigate-start", this.W.setTheater.bind(this.W), false);
        document.addEventListener("fullscreenchange", this.Z.onFullScreenChange.bind(this.Z), false);
        if (ze()) {
          setTimeout(() => {
            this.cc();
          }, 1500);
        }
      }
      stopListening() {
        super.stopListening();
        this.vc();
        document.removeEventListener("yt-navigate-finish", this.cc);
        document.removeEventListener("yt-navigate-start", this.W.setTheater.bind(this.W), false);
        document.removeEventListener("yt-page-type-changed", this.Ku);
        document.removeEventListener("yt-navigate", this.uc);
        document.removeEventListener("ytu-page-type-changed", this.Ku);
        document.removeEventListener("ytu-page-type-changed", this.cc);
        document.removeEventListener("fullscreenchange", this.Z.onFullScreenChange.bind(this.Z), false);
        window.removeEventListener("FromNode", this.fc, false);
        window.removeEventListener("mouseup", this.Xu);
        window.removeEventListener("keyup", this.Xu);
        if (this.gc) {
          clearInterval(this.gc);
          this.gc = undefined;
        }
        this.nc = false;
        this.W.disableTheater();
      }
      qu() {
        jQuery("#reset-icon").hide();
        const n = this.Z.shouldChatBeVisible();
        this.Z.setChatVisible(false);
        this.Z.removeChat();
        jQuery("[tpInjected]").remove();
        this.Z.setChatVisible(n);
        this.Z.reloadChat();
        this.Y.reloadListener();
        this.Z.shouldReturnToVideo = false;
        if (this.Ys?.videoId && !this.W.isWatchPage()) {
          this.Z.shouldReturnToVideo = true;
          jQuery("#reset-icon").show();
        }
      }
      reloadListeners() {
        this.stopListening();
        this.initListeners();
        this.startListening();
      }
      onFullScreen() {}
      loadNewVideoAsync(t) {
        return Eh(this, undefined, undefined, function* () {
          yield new Promise((n, e) => {
            const i = performance.now();
            const s = setInterval(() => Eh(this, undefined, undefined, function* () {
              this.W.videoId = mo.getVideoId(new URL(window.location.href));
              if (this.W.videoId === t) {
                const t = this.W.getRawVideoElement();
                if (t instanceof Element && t.src) {
                  clearInterval(s);
                  n();
                }
              }
              if (performance.now() - i >= 20000) {
                clearInterval(s);
                e(new Error("Could not load new video in time."));
              }
            }), 200);
          });
          yield this.W.waitNewVideoReadyAsync();
          this.dc(true);
          if (this.su()) {
            this.reloadListeners();
          }
          yield this.hc();
          this.Z.queueMessageForFrame(Ii.SET_PAGE_TITLE, {
            pageTitle: yield this.W.getVideoTitleAsync()
          });
        });
      }
    }
    function kh(t, n, e, i) {
      return new (e ||= Promise)(function (s, o) {
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
          if (t.done) {
            s(t.value);
          } else {
            (n = t.value, n instanceof e ? n : new e(function (t) {
              t(n);
            })).then(r, a);
          }
        }
        u((i = i.apply(t, n || [])).next());
      });
    }
    class Ah extends Sr {
      constructor(t, n, e, i) {
        super(t, n, e, i);
      }
      su() {
        return window.location.href.includes("/shorts/");
      }
      sendOtherEpisodeAsync(t) {
        const n = Object.create(null, {
          sendOtherEpisodeAsync: {
            get: () => super.sendOtherEpisodeAsync
          }
        });
        return kh(this, undefined, undefined, function* () {
          if (!this.su()) {
            return n.sendOtherEpisodeAsync.call(this, t);
          }
          if (t && t !== this.videoId) {
            yield n.sendOtherEpisodeAsync.call(this, t);
            this.videoId = t;
            this.changingVideo = false;
          } else {
            this.changingVideo = false;
          }
        });
      }
      sendNextEpisodeAsync(t) {
        const n = Object.create(null, {
          sendNextEpisodeAsync: {
            get: () => super.sendNextEpisodeAsync
          }
        });
        return kh(this, undefined, undefined, function* () {
          if (!this.su()) {
            return n.sendNextEpisodeAsync.call(this, t);
          }
          if (t && t !== this.videoId) {
            yield n.sendNextEpisodeAsync.call(this, t);
            this.videoId = t;
            this.changingVideo = false;
          } else {
            this.changingVideo = false;
          }
        });
      }
    }
    class Ih extends Cc {
      constructor() {
        const t = new fh();
        const n = new Xc(t);
        const e = new i("ext:ContentScripts:Youtube:YoutubeContentScript");
        let s;
        if (window.teleparty && window.teleparty.pageControls) {
          s = window.teleparty.pageControls;
          console.log("Using Youtube Page Controls");
        } else {
          s = new rh(n);
        }
        super(n, t, new xh(t, n, s), s);
        e.debug({
          methodName: "constructor",
          message: "Initialize Youtube Content Script"
        });
      }
      createVideoMessageForwarder(t, n, e) {
        return new Ah(t, n, e, this);
      }
    }
    const Bh = new i("ext:ContentScripts:Youtube:YoutubeContent");
    if (function () {
      return window === window.top && (!window.teleparty || !window.teleparty?.contentScriptInjected);
    }()) {
      window.teleparty ||= {};
      window.teleparty.contentScriptInjected = true;
      new Ih();
      Bh.debug({
        message: "Initialized content script"
      });
    }
  })();
})();